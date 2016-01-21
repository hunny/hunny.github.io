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
		},
		i18nName: function() {
			return /i18n\.js$/;
		},
		userKey: function() {
			return 'key';
		},
		api: function() {
			return ApiUrl;
		}
	};
	var methods = {
		options: function(option) {
			settings = $.extend({}, settings, option);
			return this;
		},
		changei18n: function(locale, callback) {
			i18nchange(locale, callback);
			return this;
		},
		i18n: function(key) {
			return i18n(key);
		},
		getCookie: function() {
			return getCookie(settings.cookieName());
		},
		trigger: function() {
			return i18ntrigger();
		},
		loadI18n: function(locale) {
			var language = (locale == undefined || locale == null || locale == '') ? 'en-US' : locale;
			var scripts = document.getElementsByTagName("script");
			var path = null;
			for (var i = 0; i < scripts.length; i++) {
				var elem = scripts[i];
				var src = elem.getAttribute('src');
				if (settings.i18nName().test(src)) {
					path = src;
				}
			}
			if (null == path) {
				throw new Error('File name i18n.js not found.');
			}
			var locale = settings.locale();
			if (/^en-/ig.test(locale)) {
				locale = 'en-US';
			} else if (/^zh-/ig.test(locale)) {
				locale = 'zh-CN';
			} else {//default language
				locale = 'en-US';
			}
			path = path.replace(settings.i18nName(), 'i18n_' + locale + '.js');
			loadScript(path, locale, function() {
				i18npost(locale, function(src, locale) {});
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
        } else if (typeof(method) == 'object' || !method) {
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
	    script.setAttribute("locale", locale);
	    if (script.readyState) {  //IE
	        script.onreadystatechange = function() {
	            if (script.readyState == "loaded" ||
	                    script.readyState == "complete"){
	                script.onreadystatechange = null;
					$(document).trigger('i18n:loaded');
	                callback();
	            }
	        };
	    } else {  //Others
	        script.onload = function() {
				$(document).trigger('i18n:loaded');
	            callback();
	        };
	    }
	    if (url.indexOf('?') == -1) {
	    	url = url + '?_=' + new Date().getTime();
	    }
	    script.src = url;
	    $('script[locale]').remove();
	    document.getElementsByTagName("head")[0].appendChild(script);
	}
	function i18n(key) {
		var r = settings.resource();
		if (!r) {
			return '';
		}
		return r[key];
	}
	function i18ntrigger() {
		var i = 0;
		$('[i18n]').each(function() {
			var $this = $(this);
			var key = $this.attr('i18n');
			$this.html(i18n(key));
			i++;
		});
		$('[i18nkey][i18nval]').each(function() {
			var $this = $(this);
			var key = $this.attr('i18nkey');
			var val = $this.attr('i18nval');
			$this.attr(val, i18n(key));
			i++;
		});
		return i;
	}
	function i18ninit() {
		i18ntrigger();
		$(document).trigger('i18n:ready');
	}
	function i18nchange(locale, callback) {
		i18npost(locale, function(src, locale) {
			loadScript(src, locale, function() {
				i18ninit(locale?locale:'zh-CN');
				if ((typeof callback) === 'function') {
					callback(locale);
				}
			});
		});
	}
	function i18npost(locale, callback) {
		$.ajax({
			type: 'post',
			url: ApiUrl + "/index.php?act=login&op=i18n",	
			data: {i18n:locale,key:getCookie(settings.userKey())},
			dataType:'json',
			success: function(result) {
				if (result.datas.i18n) {
					var locale = result.datas.i18n;
					var cookieName = settings.cookieName();
					delCookie(cookieName);
					addCookie(cookieName, locale);
					var script = $('script[locale]');
					var src = script.attr('src');
					var l = script.attr('locale');
					src = src.replace(l, locale);
					callback(src, locale);
				} else {
					alert('Request Error.');
				}
			},
			error: function() {
				alert('Request Error.');
			}
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
		var result = '';
		for (var i = 0; i < arrcookie.length; i++) {
			var arr = arrcookie[i].split("=");
			if ($.trim(arr[0]) == name) {
				result = $.trim(unescape($.trim(arr[1])));
				break;
			}
		}
		result = $.trim(result);
		if (result == '') {
			return null;
		}
		return result;
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
	// $.extend({i18n: function(key) {
	// 	return $(document).i18n('i18n', key);
	// }});
	$.i18n = function(key) {
		return $(document).i18n('i18n', key);
	};
	$(document).i18n();
});