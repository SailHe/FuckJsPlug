//一个dataTable中 API 实例
var $DataTableAPI = $('#example').DataTable({
    ajax: {
        //指定数据源
        url: "data.json"
    },
    //每页显示三条数据
    pageLength: 4,
    columns: [
        {
            //此列不绑定数据源，用来显示序号
            data: null
        }, {
            data: "id"
        }, {
            data: "title"
        }, {
            data: "url"
        }
    ],
    //解决冲突 columns 定义的属性将始终优先于在 columnDefs 中定义的属性的任何值。
    "columnDefs": [{
        /*
            0或一个正整数 - 列索引从左边开始计数
            一个负整数 - 列索引从右边算起
            一个字符串类的名字将在列上与TH匹配
            字符串_all- 所有列（即分配一个默认值）
        targets可以是上面列表中的单个选项，也可以是选项数组（如果需要，可以在数组中混合使用不同的类型）。
            例如，targets: [ -1, -2 ]将针对表格中的最后一列和最后一列。
        */
        /*在第一列上禁用筛选：
            "targets": 0,
            "searchable": false
        */
        /*第一列和第二列将在表格中可见，而所有其他列将被隐藏。
            { targets: [0, 1], visible: true},
            { targets: '_all', visible: false }
        */
        /*隐藏第一列
            "visible": false,
            "targets": 0
        */
    }, {
        "render": function (data, type, row, meta) {
            //渲染 把数据源中的标题和url组成超链接
            return '<a href="' + data + '" target="_blank">' + row.title + '</a>';
        },
        //指定是第三列
        "targets": 2
    }],

    /*
    "lengthChange": false, // 禁止选择每页显示条数
    "ordering": false, // 禁止排序
    "searching": false, // 禁止搜索
    */
    "columnDefs": [
        {"visible": true, "targets": 0}
    ],
    "displayLength": 25,
    /*
    preDrawCallback在重绘表格前执行，你可以用来显示之前做更新或者清除操作，比如移除事件。当方法返回false时, 还可以用来取消重绘操作
    Datatables每次重绘后执行的方法(当每次表格重绘的时候触发一个操作，比如更新数据后或者创建新的元素),
    需要注意的是，需要禁用dataTables的选择每页显示条数、排序和搜索功能，
    因为这几项都会修改table的展示，每一次都会调用drawCallback，从而会造成table变形和数据丢失的情况。*/
    "drawCallback": function (settings) {
        var unMergeRowIdArray = new Array();
        unMergeRowIdArray.push(2, 0);
        rowspanAssign(this.api(), unMergeRowIdArray);
    }
});
/*
http://datatables.club/reference/api/on().html
用来监听事件。多个事件监听可以用空格分开, 也可以使用命名空间，就像 jQuery.on
on()方法用于监听DataTables的事件。只要传递你想要监听的事件，和一个回调函数，当事件被DataTables触发时，它将被激活。
function on( event, callback )->DataTables.Api
event: 一个string(Where a parameter is shown as accepting a string type,
                    or a method returning a string type,
                        it indicates that a string is expected / returned.)
                大意: 一个描述 返回值 或是 期望的字符串
例子:
在控制台打印每一次 xhr 事件
var table = $('#example').DataTable( {
    ajax: "/data.json"
} );

table.on( 'xhr', function ( e, settings, json ) {
    console.log( 'Ajax发生了.返回的数据是: ', json );
} );
* */
//前台添加序号
//关于order.dt: https://segmentfault.com/q/1010000004892790 或是 https://www.datatables.net/reference/event/
$DataTableAPI.on('order.dt search.dt',
    function () {
        $DataTableAPI.column(0, {
            "search": 'applied',
            "order": 'applied'
        }).nodes().each(function (cell, i) {
            cell.innerHTML = i + 1;
        });
    }).draw();

//更换数据源（相同格式，但是数据内容不同）
$("#redraw").click(function () {
    //错误例子: var url = $DataTableAPI.api().ajax.url('newData.json');
    var url = $DataTableAPI.ajax.url('newData.json');
    url.load().on('order.dt search.dt', function () {
        $(function () {
            $('#table1').rowspanRepeatedly(0);
            $('#table1').rowspanRepeatedly(2);

            //$('#example').rowspanRepeatedly(0);
            //$('#example').rowspanRepeatedly(1);
            $('#example').rowspanRepeatedly(2);
            $('#example').rowspanRepeatedly(3);
        });
    })
    // $DataTableAPI.ajax.url('newData.json').load();
});

/*
XHR: Ajax事件 - 在Ajax请求完成时触发
参数: (e，settings，json，xhr)
    :: (jQuery事件对象,
        DataTables设置对象,
        从服务器返回的数据。这将由nullAjax错误回调触发。
        自1.10.7开始：可用于访问低级别Ajax选项的jQuery XHR对象。)
从jQuery 1.5开始，$ .ajax（）方法返回jqXHR(jQuery XMLHttpRequest)对象，它是浏览器本机XMLHttpRequest对象的超集。
    有关更多信息，请参阅http://api.jquery.com/jQuery.ajax/#jqXHR

    例如，指定一个DOM元素作为上下文将为complete请求的回调创建 上下文 ，如下所示：
$.ajax({
  url: "test.html",
  context: document.body
}).done(function() {
  $( this ).addClass( "done" );
});
*/
/*
预处理从服务器返回的数据：
$('#example')
    .on('xhr.dt', function ( e, settings, json, xhr ) {
        for ( var i=0, ien=json.aaData.length ; i<ien ; i++ ) {
            json.aaData[i].sum = json.aaData[i].one + json.aaData[i].two;
        }
        // Note no return - manipulate the data directly in the JSON object.
    } )
    .dataTable( {
        ajax: "data.json"
    } );
*/
/*
在另一个DOM元素中使用从服务器返回的自定义属性：
$('#example')
    .on('xhr.dt', function ( e, settings, json, xhr ) {
        $('#status').html( json.status );
    } )
    .dataTable( {
        ajax: "data.json"
    } );
*/



/*
var table = $('#example').DataTable();

table.columns().flatten().each(function (colIdx) {
// Create the select list and search operation
    /!*var select = $('<select />')
        .appendTo(
            table.column(colIdx).footer()
        )
        .on('change', function () {
            table
                .column(colIdx)
                .search($(this).val())
                .draw();
        });

// Get the search data for the first column and add to the select list
    table
        .column(colIdx)
        .cache('search')
        .sort()
        .unique()
        .each(function (d) {
            select.append($('<option value="' + d + '">' + d + '</option>'));
        });*!/
}*/
