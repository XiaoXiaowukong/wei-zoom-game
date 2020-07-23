window.__require = function t(n, o, e) {
function c(r, u) {
if (!o[r]) {
if (!n[r]) {
var a = r.split("/");
a = a[a.length - 1];
if (!n[a]) {
var s = "function" == typeof __require && __require;
if (!u && s) return s(a, !0);
if (i) return i(a, !0);
throw new Error("Cannot find module '" + r + "'");
}
r = a;
}
var p = o[r] = {
exports: {}
};
n[r][0].call(p.exports, function(t) {
return c(n[r][1][t] || t);
}, p, p.exports, t, n, o, e);
}
return o[r].exports;
}
for (var i = "function" == typeof __require && __require, r = 0; r < e.length; r++) c(e[r]);
return c;
}({
BtLogin: [ function(t, n, o) {
"use strict";
cc._RF.push(n, "f59cdiD2jhOZq+Fh6o1ao0Y", "BtLogin");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {}
});
cc._RF.pop();
}, {} ],
Login: [ function(t, n, o) {
"use strict";
cc._RF.push(n, "419caCL7bNFi6A3lgDMyjzv", "Login");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {},
start: function() {}
});
cc._RF.pop();
}, {} ],
Start: [ function(t, n, o) {
"use strict";
cc._RF.push(n, "92fa7mTkohHtIOHnzA3lo94", "Start");
cc.Class({
extends: cc.Component,
properties: {
loadString: {
default: null,
type: cc.Label
},
updateButton: {
default: null,
type: cc.Node
},
playGameButton: {
default: null,
type: cc.Node
}
},
onLoad: function() {
this.playGameButton.active = !1;
this.loadString.string = "资源加载中,请稍后...";
this.updateButton.on("click", this.on_touch_update, this);
this.playGameButton.on("click", this.playGame, this);
},
on_touch_update: function() {
console.log("开始更新");
this.loadString.string = "资源加载完成！";
this.playGameButton.active = !0;
},
playGame: function() {
console.log("开始游戏");
cc.director.loadScene("Login");
},
start: function() {}
});
cc._RF.pop();
}, {} ]
}, {}, [ "BtLogin", "Login", "Start" ]);