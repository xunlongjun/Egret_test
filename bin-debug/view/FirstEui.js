var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var FirstEui = (function (_super) {
    __extends(FirstEui, _super);
    function FirstEui() {
        return _super.call(this) || this;
    }
    FirstEui.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    FirstEui.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
    };
    FirstEui.prototype.onButtonClick = function () {
    };
    return FirstEui;
}(eui.Component));
__reflect(FirstEui.prototype, "FirstEui", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=FirstEui.js.map