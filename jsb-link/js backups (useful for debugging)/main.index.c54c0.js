window.__require = function e(t, o, c) {
function n(i, r) {
if (!o[i]) {
if (!t[i]) {
var a = i.split("/");
a = a[a.length - 1];
if (!t[a]) {
var u = "function" == typeof __require && __require;
if (!r && u) return u(a, !0);
if (s) return s(a, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = a;
}
var l = o[i] = {
exports: {}
};
t[i][0].call(l.exports, function(e) {
return n(t[i][1][e] || e);
}, l, l.exports, e, t, o, c);
}
return o[i].exports;
}
for (var s = "function" == typeof __require && __require, i = 0; i < c.length; i++) n(c[i]);
return n;
}({
Desk: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "023bezT++9MSoXjxViBh3ef", "Desk");
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
backHomeDownListener: function(e) {
cc.director.loadScene("Home");
},
start: function() {}
});
cc._RF.pop();
}, {} ],
Home: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f59cdiD2jhOZq+Fh6o1ao0Y", "Home");
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
backClose.on(cc.Node.EventType.MOUSE_DOWN, this.backCloseDownListener, this);
this.createSprite.on(cc.Node.EventType.MOUSE_DOWN, this.createDownListener, this);
this.joinSprite.on(cc.Node.EventType.MOUSE_DOWN, this.joinDownListener, this);
},
createDownListener: function(e) {
console.log("create home");
this.selectLayout.active = !0;
},
joinDownListener: function(e) {
console.log("join home");
},
backCloseDownListener: function(e) {
console.log("close");
this.selectLayout.active = !1;
},
selectMJDownListenter: function(e) {
cc.director.loadScene("Desk");
},
selectPKDownListenter: function(e) {
cc.director.loadScene("Desk");
},
start: function() {}
});
cc._RF.pop();
}, {} ],
Login: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "419caCL7bNFi6A3lgDMyjzv", "Login");
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
Start: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "92fa7mTkohHtIOHnzA3lo94", "Start");
cc.Class({
extends: cc.Component,
properties: {
loadResource: {
default: null,
type: cc.ProgressBar
},
progressLabel: cc.Label
},
startGame: function() {
this.loadResource.progress = null;
cc.director.loadScene("Login");
},
onLoad: function() {},
start: function() {
var e = this;
console.log("123" + this.progressLabel);
this.progressLabel.string = "0%";
this.loadResource.progress = 0;
cc.director.preloadScene("Login", function(t, o, c) {
var n = t / o;
e.loadResource.progress = n;
e.progressLabel.string = parseInt(100 * n) + "%";
console.log(e.progressLabel.string);
}, function() {
console.log("加载完成...");
e.startGame();
});
}
});
cc._RF.pop();
}, {} ]
}, {}, [ "Desk", "Home", "Login", "Start" ]);