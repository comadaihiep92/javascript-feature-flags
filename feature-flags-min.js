/*! Javascript Feature Flags
    Jay Fienberg, MIT License 2013
    https://github.com/jayf/javascript-feature-flags
*//*
    Setting a global variable, ff, here.

    You can change this! It can be any name,
    but change it again at the bottom to match
    what you have here.
*/var ff=ff||{};(function(e,t){"use strict";e.methods=t&&t.methods||["query","hash","cookie","domain"];e.keyName=t&&t.keyName||"ff";e.testDomain=t&&t.testDomain||"localhost";e.testDomainFlag=t&&t.testDomainFlag||"debug";e.loc=window.location;e.flags=[];e.flag=function(t){return e.flags.indexOf(t)>-1};e.setFlags={cookie:function(){var t=e.keyName+"=",n=t.length,r=null,i=document.cookie.split(";"),s=i.length,o;for(o=0;o<s;o++){var u=i[o],a=u.length;while(u.charAt(0)===" ")u=u.substring(1,a);u.indexOf(t)===0&&(r=u.substring(n,a))}r&&this._addFlag(r.split(","))},domain:function(){e.loc.hostname===e.testDomain&&this._addFlag(e.testDomainFlag)},hash:function(){var t=e.loc.hash,n=t.indexOf(e.keyName);if(n>-1){var r=t.substring(n+e.keyName.length+1);this._addFlag(r.split(","))}},query:function(){var t=e.loc.search,n=t.substring(1).split("&"),r=n.length,i;for(i=0;i<r;i++){var s=n[i].split("=");s[0]===e.keyName&&s[1]&&this._addFlag(s[1].split(","))}},_addFlag:function(t){if(typeof t=="string")e.flags.push(t);else{var n;for(n in t)e.flags.push(t[n])}}};var n;for(n in e.methods)e.setFlags[e.methods[n]]()})(ff);