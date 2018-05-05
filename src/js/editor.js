/*
 * @Author: wangzhichao@zuzuche.com 
 * @Date: 2018-05-05 14:47:20 
 * @Last Modified by: wangzhichao@zuzuche.com
 * @Last Modified time: 2018-05-05 16:12:23
 */
import '../css/editor.less'
import '../css/icon.less'
import $ from 'jquery';
/**
 * @param 'string' textContainer: 富文本框载体容器
 */
function Editor(textContainer) {
    if (textContainer == null) {
        // 没有传入任何参数，报错
        throw new Error('错误：初始化编辑器时候未传入任何参数，请查阅文档')
    }
    this.textContainer = textContainer;

    // 自定义配置
    this.customConfig = {};
}

Editor.prototype = {
    /**
     * 初始化dom,加载默认的文本框样式
     */
    _initDom: function(){
        // 用户自定义容器
        var $textContainer = $(this.textContainer);

        // 容器区域-预留可配置参数
        var $textContainerElem = $('<div></div>');


        // bar栏区域-预留可配置参数
        var $toolbarElem = $(`<div><ul><li><div class="w-e-menu" style="z-index:10001;">
        <i class="w-e-icon-bold"></i>
    </div></li></ul></div>`)


        // 编辑区域-预留可配置参数
        var $textElem = $('<div></div>');
        $textElem.attr('contenteditable', 'true');

        // 添加通用的class
        $toolbarElem.addClass('editor_toolbar');
        $textContainerElem.addClass('editor_container');
        $textElem.addClass('text_container');

        // 因为初始化完后，输入第一排内容的时候是没有标签的，所以默认添加一个p标签
        // 后面可定义一个方法来判断输入第一个字符的时候，是否有标签，如果无则添加
        $textElem.append($('<p><br></p>'))

        // 将bar栏区域放到容器区域里面
        $textContainerElem.append($toolbarElem);
        // 将编辑区域放到容器区域里面
        $textContainerElem.append($textElem);

        // 将容器区域放到用户自定义区域里面
        $textContainer.append($textContainerElem);
    },
    create: function(){
        // 创建一个富文本编辑器
        this._initDom();
    }
}



export default Editor