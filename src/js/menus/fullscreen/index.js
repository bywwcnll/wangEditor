/*
    redo-menu
*/
import $ from '../../util/dom-core.js'

// 构造函数
function Fullscreen(editor) {
    this.editor = editor
    this.$elem = $(
        `<div class="w-e-menu">
            <i class="w-e-icon-fullscreen"></i>
        </div>`
    )
    this.type = 'click'

    // 当前是否 active 状态
    this._active = false
}

// 原型
Fullscreen.prototype = {
    constructor: Fullscreen,

    // 点击事件
    onClick: function (e) {
        // 点击菜单将触发这里

        const editor = this.editor
        
        // 执行 fullscreen 命令
        let $parentElement = editor.$textContainerElem.parent()
        let $textContainerElem = editor.$textContainerElem
        if ($parentElement[0].style.position === 'fixed') {
            $parentElement.attr('style', '')
            $textContainerElem.css('flex', 'initial')
            $textContainerElem.css('overflow', 'initial')
        } else {
            $parentElement.attr('style', 'overflow:hidden;display:flex;flex-direction:column;position:fixed;top:0;left:0;bottom:0;right:0;background-color:#fff;z-index:99999;')
            $textContainerElem.css('flex', '1')
            $textContainerElem.css('overflow', 'auto')
        }
    }
}

export default Fullscreen