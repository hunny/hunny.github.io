/*myapp builds at 2016-05-13 15:10:32 */
!function(a){function b(b,c,d){var e=document.createElement("script");e.type="text/javascript",e.setAttribute("locale",c),e.readyState?e.onreadystatechange=function(){("loaded"==e.readyState||"complete"==e.readyState)&&(e.onreadystatechange=null,a(document).trigger("i18n:loaded"),d())}:e.onload=function(){a(document).trigger("i18n:loaded"),d()},-1==b.indexOf("?")&&(b=b+"?_="+(new Date).getTime()),e.src=b,a("script[locale]").remove(),document.getElementsByTagName("head")[0].appendChild(e)}function c(a){var b=k.resource();return b?b[a]:""}function d(){var b=0;return a("[i18n]").each(function(){var d=a(this),e=d.attr("i18n");d.html(c(e)),b++}),a("[i18nkey][i18nval]").each(function(){var d=a(this),e=d.attr("i18nkey"),f=d.attr("i18nval");d.attr(f,c(e)),b++}),b}function e(){d(),a(document).trigger("i18n:ready")}function f(a,c){g(a,function(a,d){b(a,d,function(){e(d?d:"zh-CN"),"function"==typeof c&&c(d)})})}function g(b,c){a.ajax({type:"post",url:ApiUrl+"/index.php?act=login&op=i18n&_="+(new Date).getTime(),data:{i18n:b,key:i(k.userKey())},dataType:"json",success:function(b){if(b.datas.i18n){var d=b.datas.i18n,e=k.cookieName();j(e),h(e,d);var f=a("script[locale]"),g=f.attr("src"),i=f.attr("locale");g=g.replace(i,d),c(g,d)}else try{console.log("Request error: i18n message return error.")}catch(l){}},error:function(a,b,c){try{console.log("Request error: "+b)}catch(d){}}})}function h(a,b){var c=a+"="+escape(b)+"; path=/",d=k.expireHours();if(d>0){var e=new Date;e.setTime(e.getTime+3600*d*1e3),c=c+"; expire="+e.toGMTString()}document.cookie=c}function i(b){b=a.trim(b);for(var c=document.cookie,d=c.split("; "),e="",f=0;f<d.length;f++){var g=d[f].split("=");if(a.trim(g[0])==b){e=a.trim(unescape(a.trim(g[1])));break}}return e=a.trim(e),""==e?null:e}function j(a){var b=new Date;b.setTime(b.getTime()-1);var c=i(a);null!=c&&(document.cookie=a+"="+c+"; path=/;expires="+b.toGMTString())}var k={locale:function(){var b=navigator.language||navigator.userLanguage,c=a.fn.i18n("getCookie");return null!=c&&(b=c),b},resource:function(){return window.__locale__resource__},cookieName:function(){return"i18n"},expireHours:function(){return 168},i18nName:function(){return/i18n\.js$/},userKey:function(){return"key"},api:function(){return ApiUrl}},l={options:function(b){return k=a.extend({},k,b),this},changei18n:function(a,b){return f(a,b),this},i18n:function(a){return c(a)},getCookie:function(){return i(k.cookieName())},trigger:function(){return d()},loadI18n:function(a){for(var c=document.getElementsByTagName("script"),d=null,f=0;f<c.length;f++){var h=c[f],i=h.getAttribute("src");k.i18nName().test(i)&&(d=i)}if(null==d)throw new Error("File name i18n.js not found.");var a=k.locale();return a=/^en-/gi.test(a)?"en-US":/^zh-/gi.test(a)?"zh-CN":"en-US",d=d.replace(k.i18nName(),"i18n_"+a+".js"),b(d,a,function(){g(a,function(a,b){}),e()}),this}};a.fn.i18n=function(){var b=0==arguments.length?"loadI18n":arguments[0];if(l[b])b=l[b],arguments=Array.prototype.slice.call(arguments,1);else{if("object"!=typeof b&&b)return a.error("Method "+b+" does not exist on $.i18n"),this;var c=b;k=a.extend(k,c)}return b.apply(this,arguments)}}($),$(function(){$.i18n=function(a){return $(document).i18n("i18n",a)},$(document).i18n()});
/*Author:Hunny.Hu*/