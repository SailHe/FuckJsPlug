//jsonSpec: JSON解析时字符串不能换行, 格式参见 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
var jsonData = JSON.parse('{"goodsSkuVolumeJsonE": "ml","goodsSkuTasteJsonE": "口味"}');
var str = JSON.stringify(jsonData);
/**
 * 相对路径就是以当前文件为基准进行一级级目录指向被引用的资源文件。
 * ../             表示当前文件所在的目录的上一级目录
 * ./               表示当前文件所在的目录(可以省略)
 * /                表示当前站点的根目录(域名映射的硬盘目录)
 * typo
 **/
/*java web 中在没有修改workbench的代码时无需重载页面 修改了那个页面的代码只需重载相应的页面即可

(参见 https://hackmd.io/s/B1yNWFM1l)
:input：可以选择 <input>，<textarea>，<select> 和 <button>；
*/

/*
        参见: https://blog.csdn.net/qq_26676207/article/details/53100912
        数据类型有 undefined, boolean, number, string, object 等5种 判断时都需要加双引号
        typeof v == "undefined" -> 未定义的值, 定义未赋值的值, 定义赋值为 undefined 的值
        提示：只能用 === 运算来测试[某个值]是否是未定义的，因为 == 运算符认为 undefined 值等价于 null。(但是typeof可以用== ??)
        (eg:
        var aaa = undefined;
        aaa == null -> true;
        aaa === null -> false;
        aaa == undefined -> true;
        aaa == "undefined" -> false;这是字符串比较

        typeof aaa -> "undefined";
        typeof aaa == "undefined" -> true;
        typeof aaa === "undefined" -> true;
        typeof aaa == undefined -> false;

        typeof aaa == null -> false;
        typeof aaa === null -> false;
        )
        注释：null 表示无值，而 undefined 表示一个未声明的变量，或已声明但没有赋值的变量，或一个并不存在的对象属性。
*/

/**
 * tips:

 * onclick=""只能绑定一次，再次绑定会把之前的覆盖
 * click本身是方法作用是触发onclick事件，只要执行了元素的click()方法，就会触发onclick事件。
 * click方法中的function代码会在onclick事件执行完后执行，此时click方法起到追加事件的作用。
 * $('').click()可以绑定多次，再次绑定会在前一个程序执行完后触发, 像一个方法队列，
 * 可以为“Click”事件注册多个处理函数。每次触发“Click”时间，函数队列依次执行。
 *
 * 绑定事件(事件监听-应写在最外层): jQuery on()方法(官方推荐, 但bind也行)
 * .trigger('change') 触发事件
 *
 * 定义和用法
 * on() 方法在被选元素及子元素上添加一个或多个事件处理程序。
 * 自 jQuery 版本 1.7 起，on() 方法是 bind()、live() 和 delegate() 方法的新的替代品。该方法给 API 带来很多便利，我们推荐使用该方法，它简化了 jQuery 代码库。
 * 注意：使用 on() 方法添加的事件处理程序适用于当前及未来的元素（比如由脚本创建的新元素）。
 * 提示：如需移除事件处理程序，请使用 off() 方法。
 * 提示：如需添加只运行一次的事件然后移除，请使用 one() 方法。
 * 语法
 * $(selector).on(event,childSelector,data,function)
 *
 * $("select[id='bigCategory']")
 * Dom.selectedIndex = selectIndex; //Dom设置设置选中
 *
 * typeof var_value == "undefined")
 *
 * e.preventDefault();
 * http://www.voidcn.com/article/p-ocgwhkdb-bdg.html
 * 该方法将通知 Web 浏览器不要执行与事件关联的默认动作（如果存在这样的动作）.
 * 例如，若 type 属性是 "submit"，在事件传播的任意阶段可以调用任意的事件句柄，通过调用该方法，可以阻止提交表单。
 * 注意，若 Event 对象的 cancelable 属性是 false，那么就没有默认动作，或不能阻止默认动作。此时调用该方法没有作用.
 *
 * 叠加层次
 * var z = jQuery(i).closest(".ui-dialog").css("z-index") + 4;
 * e.dpDiv.css('z-index', z);
 * var z = $(".modal-backdrop").css("z-index") + 4;
 * $("#dialog-message").css("z-index", z + 2);
 *
 * $dataTableAPI = $("#mainDataTables").dataTable();
 * dataTableApi = $dataTableAPI.api();
 * $DataTableAPI = $("#mainDataTables").DataTable();
 *
 * html() 方法返回或设置被选元素的内容 (inner HTML)。
 * 如果该方法未设置参数，则返回被选元素的当前内容。
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
 * var set = new Set(['foo', window]);
 *
 * bootstrapValidator:
 * notEmpty：非空验证；
 * stringLength：字符串长度验证；
 * regexp：正则表达式验证；
 * emailAddress：邮箱地址验证
 * base64：64位编码验证；
 * between：验证输入值必须在某一个范围值以内，比如大于10小于100；
 * creditCard：身份证验证；
 * date：日期验证；
 * ip：IP地址验证；
 * numeric：数值验证；
 * phone：电话号码验证；
 * uri：url验证
 *
 * $DataTableAPI.search("categorySearch大类").draw();
 * 更换数据源（相同格式，但是数据内容不同） 使用 ajax.url()API 方法来设置新的请求地址， load()方法才会有效
 * 参见 http://datatables.club/reference/api/ajax.url().load().html
 * myTable.ajax.url('newData.json').load();
 *
 * 返回 value 属性：
 * $(selector).val()
 * 设置 value 属性：
 * $(selector).val(value)
 * 通过函数设置 value 属性：
 * $(selector).val(function(index,currentValue))
 *
 * <!--   type="hidden"  disabled(不提交), readonly(只读, 提交到服务器)  .attr('disabled', 'disabled'); style="display:none;"
 * readonly只针对input(text / password)和textarea有效，而disabled对于所有的表单元素都有效，包括select, radio, checkbox, button等。
 * post时name不同会直接忽略 name相同时会匹配赋值给DTO, 值如果不存在或是为null(即value="""")会自增 如果存在则[完全替换]-->
 *
 * closest() 方法获得匹配选择器的第一个祖先元素，从当前元素开始沿 DOM 树向上。
 *
 * value属性只是用来初始化的, 如果没有初始化, 仍然可以用$().val()进行设置
 *
 * change, onkeyup, input 后两个事件可以实现即时动态
 *
 * $("#goodsSkuSearchLink").focus();
 * 元素失去焦点 ('input[id=goodsSkuSearchLink]').blur();
 *
 * $.fn.resetFormValidCheck();
 * @see http://www.cnblogs.com/woodk/p/5546847.html
 *
 * Console.assert()
 * @see https://developer.mozilla.org/en-US/docs/Web/API/console
 *
 * enum貌似是js的保留关键字
 *
 * var searchContext = $("input[name='searchText']").val();
 * var searchContext = $("input[name=searchText]").val();
 *
 * //Jquery 事件触发
 * $(this).trigger('onchange');
 *
 * //select没法val一个不存在的值
 *
 * var str = '', obj = null, undefinedVar = undefined;
 *   str + obj -> "null"
 *   str + obj + undefinedVar -> "nullundefined"
 *   obj + undefinedVar -> NaN
 *
 *   //选择id为city的select下面被选中的option的id属性
 *   $("#city option:selected").attr("id");
 *
 *  貌似直接改动用jpa从数据库读出的实体会映射到数据库中(没有手动save)
 *
 *  attr失效问题: see: https://blog.csdn.net/medaka/article/details/49903377
 *  使用 prop
 * */

/**
 * Descriptions: Size类函数原型<p>
 * //@TODO undefined比较bug
 * @author SailHe
 * @date 2018/4/16 14:46
 */
function Size() {
    var args = arguments;
    this.width = 0;
    this.height = 0;

    if (typeof args[0] == "object" && typeof args[0] !== undefined) {

        if (typeof args[0].height !== undefined) {
            this.height = args[0].height;
        }

        if (typeof args[0].width !== undefined) {
            this.width = args[0].width;
        }

    } else {

        if (typeof args[0] !== undefined) {
            this.width = args[0];
        }

        if (typeof args[1] !== undefined) {
            this.height = args[1];
        }

    }

    //toString方法的重写
    Size.prototype.toString = function () {
        return 'height=' + this.height + ', width=' + this.width;
    }
}

/**
 * Descriptions: 树状表格函数原型<p>
 * @param treeList 树状列表, 是一个二维数组 第一维代表层数 第二维代表具体结点
 * @param nodeName 结点的名称
 * @author SailHe
 * @date 2018/4/16 18:35
 */
function TreeViewerTable() {

    this.treeNode = null;
    this.getNewId = null;

    //初始化 r表示行 c表示列
    this.inti = function (treeList, nodeName) {
        this.getNewId = function (name) {
            return nodeName + name;
        }
        var rowName = 'TreeViewerCell' + nodeName;
        this.treeNode = treeList;
        //row = 所有层数中对象个数最多的对象的个数 col = 4列(大中小 + 操作)
        this.row = 0;
        this.col = 4;
        for (var i = 0; i < treeList.length; ++i) {
            this.row = this.row > treeList[i].length ? this.row : treeList[i].length;
        }


        //向主表格添加一个树结点行->>换行
        function addTreeViewerRow(rowIdName) {
            $('#mainDataTables').append("<tr style='border: 1px solid #ddd;' id='" + rowIdName + "'></tr>");
        }

        //输出 blankCount 个空单元格 (td表示一行中的一列 就是一个单元格) 一个小单元格的大小
        function blankCell(rowName, cellName, blankCount, cellSize) {
            typeof cellSize == 'undefined' ? cellSize = new Size(10, 30) : '';
            while (blankCount-- > 0) {
                $('#' + rowName).append("<td style='text-align: center; height: " + cellSize.height
                    + "px;width:" + cellSize.width + "px;'id='" + (cellName) + "'>" + "</td>");//+ cellName.replace('美丽键', '')
            }
        }


        for (var r = 0; r < this.row; ++r) {
            addTreeViewerRow(rowName + r);
            for (var c = 0; c < this.col; ++c) {
                blankCell(rowName + r, this.getNewId(r + '' + c), 1);
            }
        }
    }

    //绘制一个树状元素: layerO表示初始绘制层数
    this.drawTreeViewerNode = function (layerO) {
        typeof layerO == 'undefined' ? 0 : layerO;
        for (var layer = layerO; layer < this.treeNode.length; ++layer) {
            //当前层已输出的对象个数
            var outputCnt = 0;
            for (var rowNum = 0; rowNum < this.treeNode[layer].length; ++rowNum) {
                //子结点数
                var subCnt = 0;
                if (layer + 1 >= this.treeNode.length) {
                    subCnt = 0;
                } else {
                    for (var i = 0; i < this.treeNode[layer + 1].length; ++i) {
                        subCnt += this.treeNode[layer + 1][i].parentId == this.treeNode[layer][rowNum].goodsCategoryId
                            ? 1 : 0;
                    }
                }
                /*debugger;
                var temp = JSON.parse(this.treeNode);
                ['parentOutputCnt'] = '0';
                if(typeof  this.treeNode[layer][i].parentOutputCnt == 'undefined'){

                }else{
                    outputCnt += this.treeNode[layer][i].parentOutputCnt;
                }*/

                var cellName = (Math.floor(subCnt / 2) + outputCnt++) + '' + layer;
                var node = $('#' + this.getNewId(cellName));
                node.get(0).innerHTML = this.treeNode[layer][rowNum].name;
                if (this.treeNode[layer][rowNum].name == "美丽键杭州总部") {
                    //debugger;
                }
            }
        }
    }
}

//@TODO 吧这个方法闭包进去
function requestTreeViewerNode(categoryGradeName, treeTable) {
    $.ajax({
        type: "post", /*
        data: {
            categoryGradeName: categoryGradeName,
        },*/
        dataType: "json",
        //url: "goodsCategory/listSub",
        url: "goodsCategory/listAllBIGSub",
        success: function (result) {
            treeTable.inti(result.data, categoryGradeName);
            treeTable.drawTreeViewerNode(0);
        }
    });
}

/**
 * Descriptions: 为带有焦点style的输入框添加焦点提示<p>
 *
 * @author SailHe
 * @date 2018/4/14 12:56
 */
$(".focus-prompts").attr({
    value: '请输入',
    onfocus: "value=value=='请输入'?'':value",
    onblur: "value=value==''?'请输入':value",
});


//测试用 设置初始化
$('#informationModal').modal({
    //点击空白处关闭
    backdrop: 'static',
    //escape 键退出
    keyboard: false,
    focus: true,
    //初始化后显示与否
    show: false,
})
    .on('show.bs.modal', function (e) {
        console.log('显示事件触发');
    })
    .on('shown.bs.modal', function () {
        //http://www.runoob.com/bootstrap/bootstrap-breadcrumbs.html
        //http://www.runoob.com/bootstrap/bootstrap-modal-plugin.html
        //$('#goodsSearchText').trigger('focus');
        $('input[name=activityTitle]').trigger('focus');
        console.log("显示完成");
    })
    //显示
    //.modal('show')
    //触发一下就关闭
    //.modal('toggle')
    //.modal('hide')
    /*.modal('handleUpdate')
    .modal('dispose')*/
    .on('hide.bs.modal', function () {
        console.log('关闭事件触发');
    })
    .on('hidden.bs.modal', function () {
        console.log('已关闭');
    })
;

<!--   type="hidden"  disabled(不提交), readonly(只读, 提交到服务器)  style="display:none;"
post时name不同会直接忽略 name相同时会匹配赋值给DTO, 值如果不存在或是为null(即value="""")会自增 如果存在则[完全替换]-->


    /*java*/
/**
*   正则表达式
*   Matcher matcher = PATTERN_NUMBER.matcher(dtRequestDTO.getSearch());
 *
*   boolean numberSearchForCategoryId = matcher.matches();
*   前端无法传一个jsonList(如果只有一个属性的话是可以的 list是用逗号分隔的 同一个json的不同属性间也是用逗号分隔的)到后端 因此需要在后端再做处理 同时顺便处理了可以处理的东西 避免了http请求的传参
 *
 *   若前端传入的参数由多个同名的name 序列化后不会报错 传参时貌似是以第一个为准的
 *   若后端的参数列表有多个同名的参数 那么会匹配同一个参数名 拥有同一个参数值
 *
 *    flex: ;
 *    LOGGER.error("添加失败：[ {} ]", addressDTO.getAddressId());
 *
 *    DTO可以由后端向前端传出 前端可以读取, 但反过来一个包装类型没法从前端传向后端
 *    如果要传一个一对多的关系 只能将包转类中的需要的属性拆成List<BaseType>才能进行前后端交互
 *    JSON字符串 '{"first":0,"second":1,"third":2}'   (容易弄混的是属性的引号必须是双引号)
* */
