/*
* https://blog.csdn.net/WuLex/article/details/52245342#searchhtml%E7%9A%84%E4%BB%A3%E7%A0%81
* */
$(document).ready(function () {
    /*--------------------搜索框样式控制js------------------------*/
    var exchangeSearchTypeButton = $("#search-base-div #search-back-div .change-type");
    var selectSearchType = $("#search-base-div #search-back-div .search-type-down-box .search-type");
    var searchDown = $("#search-base-div #search-back-div .search-type-down-box");
    var form = $("#search-base-div #search-back-div form");
    var searchTextInput = $("#search-base-div #search-back-div form .text-input");
    var subButton = $("#search-base-div #search-back-div form .sub-button");
    var textInputColor = "#126AC1";
    //文档加载完毕 搜索框获取焦点
    searchTextInput.focus();

    var search_types = {
        "types": [{
            name: "wd",
            action: "./search.php",
            value: "搜索本站",
            subcolor: "#126AC1",
            stype: "./images/sanjiao_03.png"
        },
            {
                name: "wd",
                action: "http://www.baidu.com/s",
                value: "百度一下",
                subcolor: "#126AC1",
                stype: "./images/sanjiao_03.png"
            },
            {
                name: "q",
                action: "http://www.so.com/s",
                value: "360搜索",
                subcolor: "#53C920",
                stype: "./images/sanjiao_04.png"
            },
            {
                name: "w",
                action: "http://www.soso.com/q",
                value: "腾讯搜索",
                subcolor: "#760AAA",
                stype: "./images/sanjiao_05.png"
            },
            {
                name: "query",
                action: "http://www.xuan369.com/so/qqkk8.jsp",
                value: "搜狗搜索",
                subcolor: "#F94F1B",
                stype: "./images/sanjiao_06.png"
            },
            {
                name: "q",
                action: "http://209.85.228.42/search",
                value: "谷歌搜索",
                subcolor: "#29C971",
                stype: "./images/sanjiao_07.png"
            }
        ]
    };
    //alert(search_types.types[1].value);
    //选择搜索类型按钮被点击
    exchangeSearchTypeButton.click(function () {
        console.log("展开搜索引擎列表");
        searchDown.css({"display": "block", height: 0});
        searchDown.animate({
            height: (selectSearchType.height() + 1) * selectSearchType.length,
        }, 500);

    });

    selectSearchType.click(function () {
        //alert(search_types.types[$(this).index()].value)
        //改变表单提交位置
        form.attr("action", search_types.types[$(this).index()].action);
        //改变表单变量名
        searchTextInput.attr("name", search_types.types[$(this).index()].name);
        //改变按钮显示
        subButton.val(search_types.types[$(this).index()].value);
        //改变按钮颜色
        subButton.css({background: search_types.types[$(this).index()].subcolor});
        //改变输入框边框颜色
        textInputColor = search_types.types[$(this).index()].subcolor;
        exchangeSearchTypeButton.css({"background": "url(" + search_types.types[$(this).index()].stype + ")"});
        subButton.css({"box-shadow": "0 1px 2px " + search_types.types[$(this).index()].subcolor});
        //编辑框获取焦点
        searchTextInput.focus();
        /*
        * animate() 方法执行 CSS 属性集的自定义动画。
        * 该方法通过 CSS 样式将元素从一个状态改变为另一个状态。CSS属性值是逐渐改变的，这样就可以创建动画效果。
        * 只有数字值可创建动画（比如 "margin:30px"）。字符串值无法创建动画（比如 "background-color:red"）。
        *
        * (selector).animate({styles}, speed, easing, callback)
        *
        * 参数:
        *   styles 必需。规定产生动画效果的一个或多个 CSS 属性/值。
        * 注意： 当与 animate() 方法一起使用时，该属性名称必须是驼峰写法： 您必须使用 paddingLeft 代替 padding-left，marginRight 代替 margin-right，依此类推。
        *   speed  可选。规定动画的速度。
        * 可能的值：毫秒, "slow", "fast"
        *   easing	可选。规定在动画的不同点中元素的速度。默认值是 "swing"。
        * 可能的值："swing" - 在开头/结尾移动慢，在中间移动快; "linear" - 匀速移动
        * 提示：扩展插件中提供更多可用的 easing 函数。
        *   callback 可选。animate 函数执行完之后，要执行的函数。
        */
        searchDown.animate({
            height: 0,
        }, 500, function () {
            searchDown.css({"display": "none", height: 0});
        });
    });

    searchDown.mouseleave(function () {
        searchDown.animate({
            height: 0,
        }, 500, function () {
            searchDown.css({"display": "none", height: 0});
        });
    });
    searchTextInput.focus(function () {
        searchTextInput.css({border: "solid 1px " + textInputColor});
        searchDown.animate({
            height: 0,
        }, 500, function () {
            searchDown.css({"display": "none", height: 0});
        });
    });
    searchTextInput.blur(function () {
        searchTextInput.css({border: "solid 1px " + "#CCCCCC"});
    });

    /*-----------------获取关键词js---------------------*/
    var searchTextInput = $("#search-base-div #search-back-div form .text-input");
    searchTextInput.keyup(function (event) {
        if (searchTextInput.val() == "" || searchTextInput.val() == " ") {
            return;
        }
        console.log("keyUp");
        if (event.which != 39 && event.which != 40 && event.which != 37 && event.which != 38 && event.which != 13)
            $.ajax({
                url: "http://suggestion.baidu.com/su",
                type: "GET",
                dataType: "jsonp",
                jsonp: 'jsoncallback',
                async: false,
                timeout: 5000,//请求超时
                data: {
                    "wd": searchTextInput.val(),
                    "cb": "showKeywords"
                },
                success: function (json) {
                },
                error: function (xhr) {
                    return;
                }

            });
    });

});

//打印关键词
function showKeywords(keys) {
    var len = keys.s.length;
    var keywordBox = $("#search-base-div #search-back-div .keyword");//关键词盒子
    var searchTextInput = $("#search-base-div #search-back-div form .text-input");
    var subButton = $("#search-base-div #search-back-div form .sub-button");
    if (len == 0) {
        keywordBox.css({display: "none"});
    } else {
        keywordBox.css({display: "block"});
    }
    var spans = "";
    for (var i = 0; i < len; i++) {
        spans += "<span>" + keys.s[i] + "</span>"
    }
    keywordBox.html(spans);//把关键词写入关键词盒子
    keywordBox.animate({
        height: (keywordBox.children().height() + 1) * len//关键词下滑效果
    }, 100);
    //点击候选词汇
    keywordBox.children().click(function () {
        searchTextInput.val($(this).html());//选中词汇放入输入框

        keywordBox.animate({
            height: 0//关键词盒子收缩效果
        }, 10, function () {
            keywordBox.css({display: "none", height: "auto"});
            keywordBox.empty();//清空盒子内容
        });

        searchTextInput.focus();//输入框获取焦点*/
        $("#search-base-div #search-back-div form").submit();//提交搜索
    });

    //提交按钮获取焦点后
    subButton.focus(function () {//提交按钮获取焦点后
        keywordBox.animate({
            height: 0//关键盒子收缩效果
        }, 10, function () {
            keywordBox.css({display: "none", height: "auto"});
            keywordBox.empty();//清空盒子内容
        });
    });

    /*searchTextInput.blur(function(){//输入框失去焦点后收缩关键词盒子(此方法会与点击候选词方法冲突造成失效)
        keywordBox.animate({
            height:0//关键盒子收缩效果
        },100,function(){
            keywordBox.css({display:"none",height:"auto"});
            keywordBox.empty();//清空盒子内容
        });
    });*/
    //鼠标离开关键字盒子后收缩关键词盒子（取代上一个方法）
    keywordBox.mouseleave(function () {
        keywordBox.animate({
            height: 0//关键盒子收缩效果
        }, 100, function () {
            keywordBox.css({display: "none", height: "auto"});
            keywordBox.empty();//清空盒子内容
        });
    });

    //用来指定选择候选词（通过方向键改变）
    var selectSpanNum = 0;
    searchTextInput.keydown(function (event) {
        //使用回车提交时，关键词盒子也可以自动收缩
        if (event.which == 13) {
            keywordBox.animate({
                height: 0//关键盒子收缩效果
            }, 10, function () {
                keywordBox.css({display: "none", height: "auto"});
                keywordBox.empty();//清空盒子内容
            });
            /*$("#search-base-div #search-back-div form").submit(function(){
                return false;//阻止提交
            });*/
            /*$("#search-base-div #search-back-div form").submit(function(e){
                e.preventDefault();//阻止提交方法2
            });*/
        }
        //按下 下方向键
        if (event.which == 40) {

            if (selectSpanNum == len)
                selectSpanNum = 0;
            for (var i = 0; i < len; i++) {
                if (selectSpanNum == i) {
                    keywordBox.children().eq(i).css({
                        "background-color": "rgba(0,0,0,0.3)"
                    });
                } else {
                    keywordBox.children().eq(i).css({
                        "background-color": "rgba(255,255,255,0.3)"
                    });
                }
            }
            searchTextInput.val(keywordBox.children().eq(selectSpanNum).html());
            selectSpanNum++;
        }
        //按下 上方向键
        if (event.which == 38) {

            selectSpanNum--;
            if (selectSpanNum == len)
                selectSpanNum = 0;
            for (var i = 0; i < len; i++) {
                if (selectSpanNum == i) {
                    keywordBox.children().eq(i).css({
                        "background-color": "rgba(0,0,0,0.3)"
                    });
                } else {
                    keywordBox.children().eq(i).css({
                        "background-color": "rgba(255,255,255,0.3)"
                    });
                }
            }
            searchTextInput.val(keywordBox.children().eq(selectSpanNum).html());

        }
        //console.log(selectSpanNum);
    });
    keywordBox.children().mouseover(function () {
        selectSpanNum = $(this).index();
        for (var i = 0; i < len; i++) {
            if (selectSpanNum == i) {
                keywordBox.children().eq(i).css({
                    "background-color": "rgba(0,0,0,0.3)"
                });
            } else {
                keywordBox.children().eq(i).css({
                    "background-color": "rgba(255,255,255,0.3)"
                });
            }
        }
        searchTextInput.val(keywordBox.children().eq(selectSpanNum).html());
    });

}