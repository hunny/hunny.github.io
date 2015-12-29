(function($) {
	var settings = {
		locale: function() {
			var lang = navigator.language || navigator.userLanguage;
			var clang = $.fn.i18n('getCookie');
			if (null != clang) {
				lang = clang;
			}
			return lang;
		},
		resource: function() {
			return window.__locale__resource__;
		},
		cookieName: function() {
			return 'i18n';
		},
		expireHours: function() {
			return 7 * 24;
		}
	};
	var methods = {
		options: function(option) {
			settings = $.extend({}, settings, option);
			return this;
		},
		changei18n: function(locale) {
			i18nchange(locale);
			return this;
		},
		i18n: function(key) {
			return i18n(key);
		},
		getCookie: function() {
			return getCookie(settings.cookieName());
		},
		loadI18n: function(locale) {
			var language = (locale == undefined || locale == null || locale == '') ? 'en-US' : locale;
			var scripts = document.getElementsByTagName("script");
			var path = null;
			for (var i = 0; i < scripts.length; i++) {
				var elem = scripts[i];
				var src = elem.getAttribute('src');
				if (/i18n\.js$/.test(src)) {
					path = src;
				}
			}
			if (null == path) {
				throw new Error('File name i18nutils.js not found.');
			}
			var locale = settings.locale();
			if (/en_US/ig.test(locale)) {
				locale = 'en-US';
			} else if (/zh-CN/ig.test(locale)) {
				locale = 'zh-CN';
			} else {//default language
				locale = 'en-US';
			}
			path = path.replace(/i18n\.js$/, 'i18n_' + locale + '.js');
			loadScript(path, locale, function() {
				i18ninit();
			});
			return this;
		}
	};
	$.fn.i18n = function() {
		var method = arguments.length == 0 ? 'loadI18n' : arguments[0];
        if (methods[method]) {
            method = methods[method];
            // 我们的方法是作为参数传入的，把它从参数列表中删除，因为调用方法时并不需要它
            arguments = Array.prototype.slice.call(arguments, 1);
        } else if(typeof(method) == 'object' || !method ) {
            var options = method;
            settings = $.extend(settings, options);
        } else {
            $.error('Method ' +  method + ' does not exist on $.i18n');
            return this;
        }
        return method.apply(this, arguments);// 用apply方法来调用我们的方法并传入参数
	};
	function loadScript(url, locale, callback){
	    var script = document.createElement("script")
	    script.type = "text/javascript";
	    script.setAttribute("locale", locale)
	    if (script.readyState){  //IE
	        script.onreadystatechange = function(){
	            if (script.readyState == "loaded" ||
	                    script.readyState == "complete"){
	                script.onreadystatechange = null;
	                callback();
	            }
	        };
	    } else {  //Others
	        script.onload = function(){
	            callback();
	        };
	    }
	    script.src = url;
	    document.getElementsByTagName("head")[0].appendChild(script);
	}
	function i18n(key) {
		return settings.resource()[key];
	}
	function i18ninit() {
		$('[i18n]').each(function() {
			var $this = $(this);
			var key = $this.attr('i18n');
			$this.html(i18n(key));
		});
		$('[i18nkey][i18nval]').each(function() {
			var $this = $(this);
			var key = $this.attr('i18nkey');
			var val = $this.attr('i18nval');
			$this.attr(val, i18n(key));
		});
	}
	function i18nchange(locale) {
		var cookieName = settings.cookieName();
		delCookie(cookieName);
		addCookie(cookieName, locale);
		var script = $('script[locale]');
		var src = script.attr('src');
		var l = script.attr('locale');
		src = src.replace(l, locale);
		loadScript(src, locale, function() {
			i18ninit(locale?locale:'zh-CN');
		});
	}
	function addCookie(name, value) {
		var cookieString = name + "=" + escape(value) + "; path=/";
		var expireHours = settings.expireHours();
		if (expireHours > 0) {
			var date = new Date();
			date.setTime(date.getTime + expireHours * 3600 * 1000);
			cookieString = cookieString + "; expire=" + date.toGMTString();
		}
		document.cookie = cookieString;
	}
	function getCookie(name) {
		name = $.trim(name);
		var strcookie = document.cookie;
		var arrcookie = strcookie.split("; ");
		for (var i = 0; i < arrcookie.length; i++) {
			var arr = arrcookie[i].split("=");
			if ($.trim(arr[0]) == name) {
				return unescape($.trim(arr[1]));
			}
		}
		return null;
	}
	function delCookie(name) {
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		var cval = getCookie(name);
		if (cval != null) {
			document.cookie = name + "=" + cval + "; path=/;expires=" + exp.toGMTString();
		}
	}
})($);
$(function() {
	$(document).i18n();
});