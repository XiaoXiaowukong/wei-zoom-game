window.__require = function t(e, o, n) {
function c(s, a) {
if (!o[s]) {
if (!e[s]) {
var l = s.split("/");
l = l[l.length - 1];
if (!e[l]) {
var u = "function" == typeof __require && __require;
if (!a && u) return u(l, !0);
if (i) return i(l, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = l;
}
var r = o[s] = {
exports: {}
};
e[s][0].call(r.exports, function(t) {
return c(e[s][1][t] || t);
}, r, r.exports, t, e, o, n);
}
return o[s].exports;
}
for (var i = "function" == typeof __require && __require, s = 0; s < n.length; s++) c(n[s]);
return c;
}({
Desk: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "023bezT++9MSoXjxViBh3ef", "Desk");
cc.Class({
extends: cc.Component,
properties: {
deskSetLayout: {
default: null,
type: cc.Node
}
},
onLoad: function() {
this.deskSetLayout.getChildByName("back").on(cc.Node.EventType.MOUSE_DOWN, this.backHomeDownListener, this);
},
backHomeDownListener: function(t) {
cc.director.loadScene("Home");
},
start: function() {}
});
cc._RF.pop();
}, {} ],
Home: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f59cdiD2jhOZq+Fh6o1ao0Y", "Home");
cc.Class({
extends: cc.Component,
properties: {
createSprite: {
default: null,
type: cc.Node
},
joinSprite: {
default: null,
type: cc.Node
},
selectLayout: {
default: null,
type: cc.Node
}
},
onLoad: function() {
this.selectLayout.active = !1;
var t = this.selectLayout.getChildByName("back");
select_bg = this.selectLayout.getChildByName("select_bg");
var e = this.selectLayout.getChildByName("select_bg").getChildByName("mj_layout").getChildByName("l_mj"), o = this.selectLayout.getChildByName("select_bg").getChildByName("pk_layout").getChildByName("l_pk");
e.on(cc.Node.EventType.MOUSE_DOWN, this.selectMJDownListenter, this);
o.on(cc.Node.EventType.MOUSE_DOWN, this.selectPKDownListenter, this);
t.on(cc.Node.EventType.MOUSE_DOWN, this.backCloseDownListener, this);
this.createSprite.on(cc.Node.EventType.MOUSE_DOWN, this.createDownListener, this);
this.joinSprite.on(cc.Node.EventType.MOUSE_DOWN, this.joinDownListener, this);
},
createDownListener: function(t) {
console.log("create home");
this.selectLayout.active = !0;
},
joinDownListener: function(t) {
console.log("join home");
},
backCloseDownListener: function(t) {
console.log("close");
this.selectLayout.active = !1;
},
selectMJDownListenter: function(t) {
cc.director.loadScene("Desk");
},
selectPKDownListenter: function(t) {
cc.director.loadScene("Desk");
},
start: function() {}
});
cc._RF.pop();
}, {} ],
Login: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "419caCL7bNFi6A3lgDMyjzv", "Login");
cc.Class({
extends: cc.Component,
properties: {
wechatButton: {
default: null,
type: cc.Node
},
guestButton: {
default: null,
type: cc.Node
}
},
onLoad: function() {
this.wechatButton.on("click", this.wechatLogin, this);
this.guestButton.on("click", this.guestLogin, this);
},
wechatLogin: function() {
cc.director.loadScene("Home");
},
guestLogin: function() {
cc.director.loadScene("Home");
},
start: function() {}
});
cc._RF.pop();
}, {} ],
Start: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "92fa7mTkohHtIOHnzA3lo94", "Start");
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
}, {}, [ "Desk", "Home", "Login", "Start" ]);