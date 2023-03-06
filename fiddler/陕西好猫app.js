(function(t) {
    function n(n) {
        for (var w, r, s = n[0], o = n[1], a = n[2], u = 0, f = []; u < s.length; u++) r = s[u],
        Object.prototype.hasOwnProperty.call(c, r) && c[r] && f.push(c[r][0]),
        c[r] = 0;
        for (w in o) Object.prototype.hasOwnProperty.call(o, w) && (t[w] = o[w]);
        d && d(n);
        while (f.length) f.shift()();
        return i.push.apply(i, a || []),
        e()
    }
    function e() {
        for (var t, n = 0; n < i.length; n++) {
            for (var e = i[n], w = !0, r = 1; r < e.length; r++) {
                var s = e[r];
                0 !== c[s] && (w = !1)
            }
            w && (i.splice(n--, 1), t = o(o.s = e[0]))
        }
        return t
    }
    var w = {},
    r = {
        app: 0
    },
    c = {
        app: 0
    },
    i = [];
    function s(t) {
        return o.p + "js/" + ({} [t] || t) + "." + {
            "chunk-01ccd0bd": "3916d207",
            "chunk-02e83a64": "9b3d1338",
            "chunk-20f92e54": "19ee26c2",
            "chunk-22e8339d": "24ad0a24",
            "chunk-34278b56": "a484ab52",
            "chunk-425f6b40": "cbf2d66f",
            "chunk-4776df1a": "41bd946e",
            "chunk-4aa98c14": "d735ad9f",
            "chunk-564d34d2": "88c51c72",
            "chunk-62475b39": "de4ad841",
            "chunk-66519184": "6fbab578",
            "chunk-71e7ca90": "6bfb50c2",
            "chunk-b2431b82": "680c8d3c",
            "chunk-cfa8c678": "42bd5e4a",
            "chunk-08ae284e": "36894ece",
            "chunk-53fd7dc8": "a5c0763d",
            "chunk-57b6d0b8": "0f3e5d36",
            "chunk-e8598a7c": "cd9ffdfd"
        } [t] + ".js"
    }
    function o(n) {
        if (w[n]) return w[n].exports;
        var e = w[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(e.exports, e, e.exports, o),
        e.l = !0,
        e.exports
    }
    o.e = function(t) {
        var n = [],
        e = {
            "chunk-02e83a64": 1,
            "chunk-20f92e54": 1,
            "chunk-22e8339d": 1,
            "chunk-34278b56": 1,
            "chunk-425f6b40": 1,
            "chunk-4776df1a": 1,
            "chunk-4aa98c14": 1,
            "chunk-564d34d2": 1,
            "chunk-62475b39": 1,
            "chunk-66519184": 1,
            "chunk-71e7ca90": 1,
            "chunk-b2431b82": 1,
            "chunk-cfa8c678": 1,
            "chunk-08ae284e": 1,
            "chunk-53fd7dc8": 1,
            "chunk-57b6d0b8": 1,
            "chunk-e8598a7c": 1
        };
        r[t] ? n.push(r[t]) : 0 !== r[t] && e[t] && n.push(r[t] = new Promise((function(n, e) {
            for (var w = "css/" + ({} [t] || t) + "." + {
                "chunk-01ccd0bd": "31d6cfe0",
                "chunk-02e83a64": "a372edea",
                "chunk-20f92e54": "362f2dab",
                "chunk-22e8339d": "4905e4a6",
                "chunk-34278b56": "50a768b2",
                "chunk-425f6b40": "247e56e1",
                "chunk-4776df1a": "0107913f",
                "chunk-4aa98c14": "b8b4af8b",
                "chunk-564d34d2": "c3f0ce0e",
                "chunk-62475b39": "ffe5c4ba",
                "chunk-66519184": "fc834c0d",
                "chunk-71e7ca90": "6bbe80bd",
                "chunk-b2431b82": "5a2253bc",
                "chunk-cfa8c678": "fc834c0d",
                "chunk-08ae284e": "beba26e4",
                "chunk-53fd7dc8": "3e09c9e1",
                "chunk-57b6d0b8": "c3f0ce0e",
                "chunk-e8598a7c": "d46a7c4e"
            } [t] + ".css", c = o.p + w, i = document.getElementsByTagName("link"), s = 0; s < i.length; s++) {
                var a = i[s],
                u = a.getAttribute("data-href") || a.getAttribute("href");
                if ("stylesheet" === a.rel && (u === w || u === c)) return n()
            }
            var f = document.getElementsByTagName("style");
            for (s = 0; s < f.length; s++) {
                a = f[s],
                u = a.getAttribute("data-href");
                if (u === w || u === c) return n()
            }
            var d = document.createElement("link");
            d.rel = "stylesheet",
            d.type = "text/css",
            d.onload = n,
            d.onerror = function(n) {
                var w = n && n.target && n.target.src || c,
                i = new Error("Loading CSS chunk " + t + " failed.\n(" + w + ")");
                i.code = "CSS_CHUNK_LOAD_FAILED",
                i.request = w,
                delete r[t],
                d.parentNode.removeChild(d),
                e(i)
            },
            d.href = c;
            var D = document.getElementsByTagName("head")[0];
            D.appendChild(d)
        })).then((function() {
            r[t] = 0
        })));
        var w = c[t];
        if (0 !== w) if (w) n.push(w[2]);
        else {
            var i = new Promise((function(n, e) {
                w = c[t] = [n, e]
            }));
            n.push(w[2] = i);
            var a, u = document.createElement("script");
            u.charset = "utf-8",
            u.timeout = 120,
            o.nc && u.setAttribute("nonce", o.nc),
            u.src = s(t);
            var f = new Error;
            a = function(n) {
                u.onerror = u.onload = null,
                clearTimeout(d);
                var e = c[t];
                if (0 !== e) {
                    if (e) {
                        var w = n && ("load" === n.type ? "missing": n.type),
                        r = n && n.target && n.target.src;
                        f.message = "Loading chunk " + t + " failed.\n(" + w + ": " + r + ")",
                        f.name = "ChunkLoadError",
                        f.type = w,
                        f.request = r,
                        e[1](f)
                    }
                    c[t] = void 0
                }
            };
            var d = setTimeout((function() {
                a({
                    type: "timeout",
                    target: u
                })
            }), 12e4);
            u.onerror = u.onload = a,
            document.head.appendChild(u)
        }
        return Promise.all(n)
    },
    o.m = t,
    o.c = w,
    o.d = function(t, n, e) {
        o.o(t, n) || Object.defineProperty(t, n, {
            enumerable: !0,
            get: e
        })
    },
    o.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    },
    o.t = function(t, n) {
        if (1 & n && (t = o(t)), 8 & n) return t;
        if (4 & n && "object" === typeof t && t && t.__esModule) return t;
        var e = Object.create(null);
        if (o.r(e), Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        }), 2 & n && "string" != typeof t) for (var w in t) o.d(e, w,
        function(n) {
            return t[n]
        }.bind(null, w));
        return e
    },
    o.n = function(t) {
        var n = t && t.__esModule ?
        function() {
            return t["default"]
        }: function() {
            return t
        };
        return o.d(n, "a", n),
        n
    },
    o.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    },
    o.p = "",
    o.oe = function(t) {
        throw console.error(t),
        t
    };
    var a = window["webpackJsonp"] = window["webpackJsonp"] || [],
    u = a.push.bind(a);
    a.push = n,
    a = a.slice();
    for (var f = 0; f < a.length; f++) n(a[f]);
    var d = u;
    i.push([0, "chunk-vendors"]),
    e()
})({
    0 : function(t, n, e) {
        t.exports = e("56d7")
    },
    "0269": function(t, n, e) {
        "use strict";
        e("fc26")
    },
    "0841": function(t, n, e) {
        "use strict";
        e("94f1")
    },
    "08a1": function(t, n, e) {
        t.exports = e.p + "img/right01.7ee7503e.gif"
    },
    "0967": function(t, n, e) {},
    "0a01": function(t, n, e) {
        t.exports = e.p + "img/card_4_on.d8c5c3aa.png"
    },
    "12c6": function(t, n, e) {
        t.exports = e.p + "img/go1.233cf0f6.png"
    },
    "1ac5": function(t, n, e) {},
    "1ead": function(t, n, e) {},
    "2cc5": function(t, n, e) {},
    "2df4": function(t, n, e) {
        "use strict";
        e("34ee")
    },
    "2f19": function(t, n, e) {
        "use strict";
        e("d4a1")
    },
    3191 : function(t, n, e) {},
    "34ee": function(t, n, e) {},
    "384d": function(t, n, e) {
        "use strict";
        e("de5f")
    },
    "3b81": function(t, n, e) {
        t.exports = e.p + "img/card_2.c2c183b2.png"
    },
    "421c": function(t, n, e) {
        "use strict"; (function(t, w) {
            e.d(n, "a", (function() {
                return Xn
            }));
            var r = e("53ca"),
            c = (e("ac1f"), e("5319"), e("fb6a"), e("d3b7"), e("25f0"), e("a4d3"), e("e01a"), e("3410"), e("4ae1"), e("99af"), e("b0c0"), e("1276"), e("4d63"), e("b64b"), e("d28b"), e("3ca3"), e("ddb0"), e("4d90"), e("d4ef")),
            i = e.n(c),
            s = e("38a6"),
            o = e("5e63"),
            a = e("816b"),
            u = "jsjiami.com.v6",
            f = [u, "RjwB", "LGETMnHCkcKZbMKaMsOlIz7CuA==", "w70Lw7zDiMOjw7M5w6tpw6djMMOxwpc=", "wrJEwq7DjX1VwqvDo1FAwoHCoS0=", "w74tX8O7wrlzAMKcQFZjd8Oy", "wrgVM8KUYGnCsMOT", "IMK7Nko6MQ==", "w5R9w4fCswYew6Jbw4NEw7AN", "NVFJw4MJSMKAwpgFw50Pw7U=", "wqzCjgrDoSk=", "BsKGTnjCkg==", "w5NLS8OhwqU=", "KVEXLm0=", "w7lKecKpbSzDr8OQw6XDsB19w5jDuA==", "M0BE", "wp3CvcOY", "wqrDm8Odck4=", "BGnCtcOTw5Y=", "JsO6DcO/Cg==", "wqQwK8K3ZA==", "OXLCpcOcw6A=", "w7wWw6E=", "woPCiX7CsAzDog==", "JsOcZQ==", "AHrDjw95", "wqHDs8OmWnY=", "wqjCpB3DhhI=", "B8OEGXLDvQ==", "FcKfc1Ag", "wrJUesKRQA==", "w5XCsCLDq2DDqg==", "cCIFwrZzw6M=", "M8OBSsO8RjPDkjc=", "wrjCs3HDvcKFwqNF", "bMKhJA==", "f8K0HsKkUw==", "cF5XYcO5E8K2DkjDgW3Dg0wm", "w5vCthjDu2rDqQ==", "EizDosKuXDk=", "w5Bgw4/CuQQkw5VVw4NFw4ZOwo8=", "B8O0Xl9T", "Vhoiw6DDrwY4w4s=", "AnZYw6ZO", "w4bDmMOEwqvDuA==", "w45+SMK6bg==", "W09TY8OT", "w7Ytw4jDusOE", "IFPDmsObw5Vi", "Vhoiw6DDrx08w4ggw78=", "MUtOw4EFZcKZ", "N8OWaXFWcRwya8O3L8Kf", "wpTCmS4=", "OWTCnsOjw7I=", "w5Fpw53CsjYzw7o=", "OsKUS1nCtg==", "woXDgTnDpsO6IsOywrDDgsOd", "TUBDwojDnw==", "UX96aMO9", "wrEBGsKUUA==", "w54pS8OJwqM=", "w58uSMOQwqs=", "wrHDt8OuVA==", "w5lObcKbdw==", "w4N6w4HCoww1w69Kw4g=", "J8OcSMOIVzPDjyE=", "QD8swqxsw7Y=", "wrdvdsK6biPDkSk=", "wojChRnDuhrDqUw=", "QD8ywrFzw6nCig==", "T8KBV8KzTg==", "I8KhMn08JwfCvg==", "wo3DmgDDsMOwDcOfwrnDk8OKw7A=", "w6LCnMOIw7MP", "woLCqC/DnhA=", "w6RRwoLDmlA=", "w41IWMKwfQ==", "w4onwoA=", "w4XCiTnDhUo=", "ECLDjsK4WA==", "wovDhwPDtsOwDQ==", "IFDDm8OLw5FzDw==", "w57DtMONwp7DqQ==", "w7d3V8OLwr4=", "ZDovw6vDqw==", "J8OGb0JHaxoSZ8OmPsKC", "w7jClsObw40k", "FkTCjsOjw6HCtmLCszlJKMKp", "DibDv8KgXDjDgcKuw40=", "w67Do8OswqnDp8K9QMKJwp3CpcKZPg==", "NEhPw4ge", "GMOoEsO6Dg==", "w7F9wpPDv1wYw5xuw60=", "wqvCs2zDssKYwrhHbDU=", "E8OjHsOfHQ==", "O8O6H8OtGw==", "R09XwrjDoQ==", "R3ZAwq/DncOK", "wp3CvmbDtMK2", "wqXCu2HCkjQ=", "SzQVwrBmw6jCtUDDu0Ezdw==", "w4Npw4rClQw1w6JVw4A=", "K2EeEljCjg==", "CsO8dcOCQQ==", "woxzeMKGfyM=", "ZkZSbsOqE8KyDlM=", "FcOwOQ==", "woLCmHzCrw==", "Bl7CicO/w6A=", "w73DusO/wqI=", "ScKeWcKyW8O2wrXDsG/Cgg==", "G3RFw5dhScKbBcOXw74=", "wqBjdMKbaA==", "w74cEQ==", "wojCgCnDgBw=", "RBwuw4DDmg==", "w6XDv8OqwpnDt8K9", "worDnSTDiMO2CMORwrDDkw==", "5pSU56yfwro=", "JwXDh8KIeA==", "W8Ouwr1ybg==", "w5xmw63CuA0nw79Iw4A=", "OlXDmsOrw5xzBcKKZA==", "wq5Ew5BWwqE=", "NsO8Dw==", "w5XCscKAwptc", "wrHCnsOGwoHCgA==", "w4g3TMOUwps=", "EQw5w6HDqzYy", "WHl0wonDncOKaVwYwqQ3", "wr5CwoDDlX9CwoTDrU8=", "wrTCslzDs8KDwr5bZxQafsKH", "C8KqQQ==", "e8K6JsK7csOuRzw=", "OcOOw4g0w5DDjMK7wo/Cm8K2wpXDo8OjwqA=", "OcOZG8OJCMK9EjvDvwzCmw==", "BMO0UMOSWw==", "wpbDnsOBfg==", "w6vCicKywq5Ec2vCj38=", "O0pJw5M/Z8KRwpwP", "PmvDkTN5", "wpjCn0DCqxXDtw==", "w7QMw7TDmQ==", "w7gzw7HDu8O+", "wpPDnzzDlw==", "wqnCojfDsCU=", "IlZPw5c5ZMKRwpAFw50=", "EMOiZnDCsgk=", "wrhAasO/wol6Yk4=", "d8K8cURNwrTDv24E", "EsO8M8OPNg==", "w4VLf8Knayw=", "w6gvXsO7wrlzE8KBQUBEcMOy", "Nk/DkcOc", "wq7Cr3rDi8Kewr5YQygc", "BMO4IVXDsQ==", "w60FAj0=", "Qg4y", "PHJnw6kl", "w6PDucOOwqnDrcKjdcKuwpo=", "NsOLW3TCtg==", "w4MrwojChW9cVA==", "w5c8wo3CjXpLSUheZg==", "JMObSsOoQA==", "w60tVcOqwphlJsKaQFc=", "wpXChCHDtw==", "cMK7VXFKwqvDmWk=", "w64dDCrCjg==", "GEzDsjR/dn/Cm8OqfQ==", "w7xUfcK7cSDDhsOC", "bcKiRVdWwqHDom0=", "w77DosOxwqvDhcKyWcKl", "UcOPwptxZi9G", "wrnCqXE=", "w77DucOrwrXDpg==", "w588LQ==", "DcK7XGcRYsKsw6w=", "w7ZKcMOcwph2", "NMKvJg==", "w705wqPChFg=", "w7DCh8K3wrBZ", "QsKHHMKUeMOKYw==", "BMO0O0nDsA==", "w6cXZjwtTcKkHhZF", "F2jDs8ONw4A=", "WRgJw5LDrA==", "wowLJMKwfg==", "w5dKdsOVwro=", "C8KkTWgB", "QMKHHcKUcsOHZQon", "w75db8K8aybDkQ==", "w4/CpgXDm2rDu8O+", "wq3DsTfDpSU=", "LcOQXsOZw7XCkMOFGQ==", "w7k2XMO8wqR1NsKfWklebMOyK2Y=", "MsOVw4E5w5fDgMKbwoU=", "MMODQMO+UGQ=", "HsO5PU/DnMO7S8O0wq/CssKQw48=", "NMKgMFkdIxvCqVUjwqB8", "w6TDuMOqwr7DsMKlVcKs", "w7N3wpPDo0UU", "w5I+woDCgW9ceHM=", "EV7CkcOCw6fCvXjCnw==", "wrXCmMOzwovCt07DtT4=", "w40lFxTCsQ==", "wrjCt07DisKt", "E8O9d8Ogw7M=", "X8KYYMKnZg==", "UcOSwqJwezo=", "GFfCrcOQw54=", "w6sVQTQyX8K/FAxfUA==", "w4EIwrLCq3k=", "PMKxTlhWwqHDhGk=", "w43CosOEw5sRwrjCungS", "PH7Ck8Ozw68=", "w7MYw6vDgg==", "H8OXFsOyEQ==", "wqFewqrDlQ==", "BlvDpTA=", "MVPDmMOd", "w60Yw6A=", "fVBMwrXDlA==", "wrFndg==", "IsKse3M=", "OMOOw4Qxw4PDjMKrwoHCmMKC", "RMKCd8K3UcO2wq7Dp2TClw==", "e8KtJsK5UA==", "w7kqSMO7wrl/LMKd", "w6oQw7TDjA==", "e8KtLMKlUA==", "OsOfH8ON", "w7pCacO9wrlwe1Q=", "P8OEw5wlw4U=", "QcKxZmVJ", "FWpyw5p1", "MXZTw4BO", "w6V9wo3DhUsUw51l", "fFhmfcOxBsKyF0jDhmM=", "DsOow6ogw5A=", "LMO6N8OtMA==", "PVc3EHs=", "XMKeUcKm", "ak5+d8OP", "w6RmccOCwrM=", "wrIwLsKyRA==", "CzIJwrd1w6PCk1E=", "VWVNwp/DlcOfflEfwqA=", "wp3CoMOJUT8yw5cuGHE=", "w7giwo3Ck29cXkZVew==", "w7oWw7TDusO0w7MQw7s=", "H8OnT1bCtg==", "w7Acw6HDnQ==", "wrXDvsOmTVvDh8OCwo3CrDbDssKiwrgw", "Z8KgCsKkW8OpQyse", "EcOJw7cWw64=", "wrTCp8O6dhI=", "ITvDo8KlTQ==", "w4NRasO9wpg=", "GMO/XGnCrg==", "aMK+QE8=", "w6LDuMOdwrPDrcK8R8KlwqHCrsKQIw==", "OXITIlDCm8K/TsKbOw==", "wrPCpMOmfBI=", "CcOYdcO1fQ==", "e8K+TkVHwqHDjg==", "w4nCpsOXw60d", "dcOywqd3eQ==", "GlrDryZO", "X8OzwrJ8RA==", "wqTCh8O6wrnCoE7Dkys=", "Bn9vw5l6SQ==", "wqsIMsKAZn7CtsODFMK3Ug==", "worCqcOwwoXCsg==", "exMewpRD", "w4krGwnCqQ==", "wod9wrzDh18=", "dsKjdWTCkcKow6dj", "K3Zrw4V4ScK6I8Oew60Yw7I0dhjCo8KBw7U2wqpAOw==", "w4Nkw4/Crg==", "wqXChsOz", "w5chwpQ=", "wpXCg33Cug==", "HHNuw5p/RcKwFg==", "B3Rtw4FOTcKmAcObw6kTw4U=", "XBonw7DDozI7w4M=", "DcOfeWfCvA==", "NsKiaUI3", "JnjDvxNC", "Mm4TMmTCjsKOSsKR", "w4bCvsOEw4s/wrPChnwOwohHwpo=", "csKdP8KHVw==", "AF/DrTRTUXPCn8Oh", "K1XDmMOUw4d/D8K2", "w60Xw7bDnsOVw7cMw6xpw6Z0Cg==", "wojDnjnDhg==", "wqvCk8Oucg==", "w4rDkcOrwpLDrQ==", "ZS4Fw4M=", "GcOgcsOsbg==", "NcKlbg==", "AcO0aMOEYBfDrwM=", "w4Upwok=", "D1vDqQ==", "N3bCo8OFw4XCllE=", "wqpCw7N/wovDgsK5Dw==", "PsOTw4AGw4fDjMKRwoU=", "w4nCsxXDvnvDv8OYwr7CqAE=", "bcKiRVdWwqHDum8OEkHCg2U=", "wqjCqH7DqcKYwoNNbCIQYA==", "d0NEbsOqH8KeFQ==", "O8KueXjCgMKsw7pyOsOqwrNfw5fCvzddZsOD", "w4UvwofCi3xLX3ZVew==", "Ok1Mw4sffsKQwpw=", "wrHDscOgTl/DicOCwrzCqj3DpsK4", "w6xLfMOiwpR8fw==", "NcOKw4gnw4jDiMKP", "K8OdUkZHdwI6eQ==", "w4Ngw5fCpAoiw6U=", "w6cPSyc1a8K8", "w64xVcOtwq93L8KfXQ==", "MMOdSsOsdjfDkzYxw4fCjF8=", "wqcJFMKaZkvCq8OPE8Ks", "w7N3wpjDgEEDw4d1w78LOcKTQcOEW8KVwrXCmQ==", "5Yy75bq/6L+o5Yqu5L2/", "w6fChcK3wrV5", "w61ReMK8cQ==", "w7JddcKvcT0=", "wovCj2PCkCM=", "An9ww4VlQ8K6", "WygWwrw=", "NU9Ww7k=", "MF/DlcOUw5E=", "w57DtcO/wrfDpw==", "DkvDsydebHXCnA==", "EMOTWMOsw5Q=", "wpjCvXvCvSI=", "wpfCiG/DmMKf", "AXRmw5NqRcK6FsOW", "DSHDrcKk", "F1QKBUQ=", "wpZjSMK4fw==", "wrvDvCbDhhk=", "w6jCg8Orw5w/", "Nl9Ww7hn", "MMOzAUvDmg==", "w5J4w57Cuxo=", "WCcBwpVE", "HMO+Gl/DsA==", "w6bDv8OQwr/Dpw==", "F3Vsw4V4XsKhEMOGw6MT", "w7Fgwo/Dpn0Cw5Zpw7AA", "w6sJw73DiMOjw7Muw6xvw7NIDMOx", "CzrDqcKt", "w7jDpcO7wovDsMK8RMKBwp3CqA==", "NsOAQMOYWDnDgC8=", "J8Kzf07CtQ==", "E8O4OWjDtsOwUcO0", "K8OWYsOHw6nCicOgEhk=", "w79Pw7/ChRs=", "F8OHa8OUXg==", "PsOmWlzCuQ==", "wp9HSsK7dQ==", "Kj3DgsKGQg==", "GsO+W3fCqQsdwoYiw4TDhQ==", "DEJqw4JP", "LEobEVM=", "bjAMMRfDi8ObWcKC", "wofDhT7DkT3CnlLCrw==", "wpHCkxfDviY=", "w7RGbMO2wpVr", "wpLDhArDtsO4", "wrDCoHLCnhU=", "5L245ruq5oiu5pef5beQ5YuZ5aWh5YyL", "wqAILsKgcX7CpsOFDg==", "w6EXRyE=", "w6/Csx7Dt1c=", "w6HDm8OkwpjDrA==", "w4E5wpLCumg=", "BVDCjsO0w6rCrA==", "E3PCu8O9w4c=", "w74FCiHChVjCp8OidsK+w5w=", "w5pmw4DCshEWw79ew5lL", "H8OyPVzDvcOh", "cFpfasOwAsK5HkjDgmDDvg==", "LMOXXMOQw7TCscOEFRc1w7Q=", "MUJJw6R1", "wpHDnyPDmz3CnlLCrw==", "wqFDwrzDim5ZwofDog==", "OMOIFsOaCMKGATA=", "JsOBdFRFYCY6Zw==", "wqBZw7Z3wp/DjsKJC2nDgw==", "JlZZw6sDdA==", "w6vCmsOXw6cc", "WzkUwrZ2", "HWlOw5diSMKnEMOTw7wE", "w6kQw73DncO/", "Jl9Kw59B", "wpbCocOsVDYzw7AsF2ZL", "wpfCij/DtwbDsg==", "DMK5WWgWYcKLw67CsWAfVRjDmSI=", "NcOYQMOQw6jCjQ==", "w7sNVzk8", "w7TCgcKmwqpV", "w5/CscOfw5oYwqk=", "wrTCmsO2woTCsE3DkjzCqQ==", "GlHDqSVeYDLDi8K0fhDDrF8=", "w73Dt8Oswr7DrMKn", "w5zCpMOUw5MT", "w4Npw5zCsg01", "w7gYXDA3fg==", "w7JmwpnDuk0=", "wqbCmVvCsTc=", "w7vChTvDkng=", "w5IgwoDChX1QXmZf", "wpTCrFrDlcKP", "MMOWVMONw5c=", "w7RIwrjDu2Y=", "DCbDhcKHTg==", "w4kAYgwD", "w7hAXMOYwrc=", "SSsYw4DDnw==", "wppDwrvDpU0=", "AsO3ekJs", "H1fDuTBC", "w51aScOIwqc=", "wo3CrsO9wofCjw==", "wo/CjiTDtQDDsg==", "DsO4UXDCtQ==", "w6LClsOHw5I6", "NMOBckRNcRcrbA==", "w4Z4w4rCthck", "B8OFSMO1Rg==", "wpzClEzDmMKO", "w4xowoHDnmo=", "w6HCn8O7w5A6", "AsOvHsOIEw==", "wqzCv2/DkcKV", "BGhtw4JjWMKtA8OX", "KsKvLw==", "F8KHV34t", "wozDlgnDqMO4", "w68Nw7rDjcOa", "w5XDl8Obwp3Dhw==", "woDCiiDDtw==", "ElDCkcO0", "w74IDTLCil8=", "IVBZw4sJ", "NHDCqsO5w5Q=", "AsOyc8OzZA==", "wqhfw4xywr4=", "AcOFL8OoEg==", "HMKOdFzCrw==", "NMKhdmbCgMKp", "wrPCu8OOUDkl", "L8KhLX08MAzCvlI=", "RQciw7fCpCU2w4sq", "w5p7w6LCtg0lw6VZw4xTw4o=", "wpDCginDpgA=", "JnDDsxJg", "woVrYcKgRA==", "woXDsD3DisO3", "CcO+w7QAw5c=", "w6TDuMO3wq8=", "f8K3cGFK", "w7/CgMOfw7sm", "wrJEw68=", "NcOSScOuUQ==", "J8OcS8O+", "B8OIccOzw4w=", "wqtAw5JKwrE=", "wpDCpcOtwo3Cqg==", "cDYHwrRk", "MFZJw4MLcsKlwpAF", "OkVO", "J2JLw7tD", "wqp6w6tdwrc=", "wofDpcOlU3A=", "CkzDtCBNYFLCk8Oq", "KMOkN1TDp8Ow", "w4XCgcKDwodP", "wqDCuEHCmwg=", "G8OjXGDCuhw8woQ4w4w=", "wojCuMOPcBQ=", "DcKne2fCgA==", "QsKCWcKi", "R3tFwoI=", "EFzClcOl", "woHDvsOhV3LDnMKQwq3CojTDuMOrwqt9HnJ2wpVDw4/Dmn9qQMKsw6PCihvCqcKkw5vCvsKJ", "w45Cwq/DsEo=", "wrjCvnLDvcKH", "CCjDoMK8TQ==", "bcKgPMKmUMO9SzsfDg==", "P8OSw5g4w4HDm8KewoLCmsKA", "a8KhJ8KtXMOoXysSCcO6fw==", "w7k6XMOzwqNzE8KBQUBvd8OrNw==", "KFnDjQ==", "w6xRasOlwpJrdUrDsQ==", "Fm00L1Y=", "w5IIw5rDrcO5", "D1/ClMO0w4o=", "IMKld2XCk8Ko", "U3hJwqjDkcOfRFU=", "wpDDkT3DrcOpGA==", "BF8KNFjCisKEcMKq", "w4nCpcODw5wCwrTCnXc=", "woJZwr/DhmgQwo3DtE9Uwo3CoDM+dcONwokBMsKeBGvDi1sjwqHCnQ3Dq8Kmw5zCssOhZX3CjWkCK8Ksw4LCisKtwqTChMOww54sw4DCug==", "ccKUV8KPfw==", "w43Cl8OPw5Az", "OcO4w4Q0w5w=", "wpHDgj/DhibCg0TCscKP", "w7lKecKpbSw=", "FsO4VcO4YA==", "eGFBY8OP", "BV/CjcO4w5Q=", "woBqw4d8wpc=", "w7QrX8OowqxiLMKB", "MUtOw5QYZcKBwpofw5Ui", "PcOvw6QNw7E=", "BUPCk8Olw6vCrG/CijI=", "wpNtwpfDjHU=", "wpbDnDnDscK/FcO9wqbDlMKOw6/CkjAOFBxFYy7Cngwqw5pmwp7CpRBMwqvCgzPDlT0EVcK6w4fCoTcGw4dvwq1SBsO3IRU7UMKdGFHDgCQdIQ==", "f8KQa0xj", "H8OkW2fCqRAHwos=", "I8OwY8O5w7U=", "LMK/a3wW", "LcOCFmPDrA==", "woNFw7tLwp0=", "wr7DryDDgCbCg1LCnsK1", "wp3Ds8OmSmnDjcOewovCrTw=", "N0pE", "KkfDjRJb", "IMK7Nko6Jg==", "wrfCmmXCpxE=", "MMOhUn1U", "w7gZJwfCjA==", "DUhJw5QYcsKawrwFw54=", "wrXDoDHDusOx", "w4kzIRXCgg==", "OG8UIF7CjMKG", "E8O4OQ==", "wp7CtsOEcC4yw607On9dR8KcwozDgwg=", "wrjCsHbDuMKH", "w6xRasO2wo96f0k=", "EMOiPV/DsMOm", "w74GDSLCgl7CnQ==", "woPChCA=", "asK3TFlUwqHDr2sEDHvCumHDscK4wqTCmUvCkA==", "cFpfbMO1", "NcKrMkEpJw==", "wpLDhj/DpcOtGMOvwqY=", "w743W8O0wqpzBMKGR1RvTMOyKQ==", "KsOCd0XCiA==", "BMOhFMOTEA==", "wpjCp8OJUT0k", "XQolw6PDvio=", "HSHDrcKnTzTDrcKvw5DDucKCw6XCpQ==", "HcKMYmnCvA==", "wrLDh8OoSmU=", "worCvMOEUD4+w60qEg==", "w7pWa8Oywol2Y1Q=", "GzHDr8K4TQ==", "VcOnwqNmVg==", "woNZwo3DtFA=", "B2rDjcOJw7o=", "JXNSw4sq", "w4TDlMOTwoHDhw==", "woTChCPDoRzDtE5kOA==", "W8KfdndF", "woHCnnzCqxXDszdgZg==", "TsOAwp1xcQVE", "J8OScVw=", "C1HDszded2/CkcOw", "wrdtfMKMfw==", "w4Brw4HCpQY=", "AVDDnzR7", "wqFEw7FgwozDmcKoCXPDi3Y=", "w70Ww7fDmsOjw6QLw710", "wqnChsOVwprCkg==", "w5hEwofDrk4=", "dgcBwqFn", "woXChX7Cug==", "w7cXw63DjMOlw6Afw7I=", "wprCuVXChgg=", "a8KhJ8K4QcO9XzoH", "GcK7SGoc", "wpbDrsOpfm0=", "FnxPw75f", "ckZGY8On", "wqVhWsKDQQ==", "Z2xVecOv", "GMOlKsOBNA==", "w6gHByHCjUXCnsOudg==", "wpxnb8KIdw==", "wrTCuHLDkcKl", "wrXDhQrDl8Ow", "w5XChwnDkVs=", "Yjwnw4jDhg==", "wrJKw612wpbDnw==", "worDisO/Y1Y=", "w5ErwpbCk3JWXg==", "wovDmj7Dp8OtKsO1wrHDjsOB", "HH9rw5FkWA==", "wo7ChSPDtxrDjl5uKy8W", "M13DhsOdw5pi", "IcK0Y2bCgA==", "OsOCCcOSCMKGGDs=", "Y1dEasOwAg==", "aMK9Ul9Wwq3DhXM=", "w7/Ds8OywrrDtsK6QsKl", "Ux0iw6DDrScGw48h", "w7wLw7DDjcOww7Mqw79uw6Q=", "wqFEw7FgwozDmcKoCXM=", "SMKDXsKlSMOhwpTDsnU=", "C8KjWWs=", "w7Fgwo/DokcFw4pww7s=", "D8OwWXHCuDYO", "Ug4nw6g=", "EU/DkQVb", "w7EIYhQo", "JMOJQsOZw78=", "w4LDscOHwrzDmg==", "w7INDg7Cog==", "G8KkVnURdcKRw7/CqEAf", "e8K9T0VWwrbDn34V", "w71TdcO9woQ=", "CcOLw5cWw5M=", "XgEbw7bDpTICw5Uq", "WnxuRcO2", "wqZsw456wqA=", "UB87w6jDsw==", "M8OBSsOvWyLDmDQ9", "w7vDt8Oywq7Dp8KcUg==", "w7lZcMKk", "w7fCssOiw7YZ", "KWUJM1rCmw==", "KhDDq8KrRQ==", "w5V9w4DCtBcow7lU", "ZlV7YsOm", "w4kow7fDs8Oj", "DGXDp8OOw6U=", "woHDmz7DscOrD8OpwrbDjg==", "woLDnz7DgT3ChUjCosKe", "w6gXwrfClko=", "w7RlwpHDp2Y=", "IsKydX7CisK5w7BnGw==", "LWEWM1LCscKN", "W8OAwp1o", "wpfCgxXDoR0=", "w4ZLwrjDt34=", "F3Vsw5VtWA==", "NsOWR8Obw6I=", "XD4Twrdl", "M8OfRMOi", "w5Fvw4M=", "w5QhwpHCjn8=", "w7FPw6PCiDcAw5h9", "NklHw4Ie", "LsOAHcOeDg==", "wrPCtXPDt8KfwrhMZw==", "w75Ve8Ktaw==", "CznDqMKoXDTDrMKlw43Dqw==", "wqBOw6xnwqvDiMKyGGI=", "wrVBwqjDhmg=", "w4nCsxXDvnvDv8OKwqnCtAVqwoZT", "XMORwrBpez9MEw==", "KcOfw4g7w4E=", "w60+T8Opwqg=", "w4Vkw7vCvxo=", "cFlYfMOqBMKEGFU=", "woPDmxrDlcO3", "Ei/DtsKRfQ==", "FsORwp9j", "wp/ChMO+wpnCt07Dkx7CqMOLw6XCucO2EMKVwrHDmHwawrLDlsKA", "w67CpiTDqno=", "wr7CtFzDosKU", "DjzDv8Kh", "w6/CjcKswrlJTw==", "M8OcVQ==", "LWEWM1I=", "wqTCh8O5wo8=", "w4MhworChQ==", "PWnDqRVJ", "w6zDpsOuwrfDuw==", "fh8XwqtE", "M8O9E8O/BQ==", "wqZBwqLDjHI=", "w6xCwonDl1A=", "InfDiBtnQFM=", "w5BxScKXVAzDoQ==", "wrHDusO7dm/DgcOXwqfCrQ==", "EH9xw59rQg==", "WDgCwq1p", "U3JXwpLDlcOU", "wpfCt8OJUjAj", "N8OWaWNLfws=", "HCbDqMKw", "KcOZw5kaw4LDj8KMwoXCgg==", "w6XCmsKjwrNYc23ClnvDug==", "wrVsdMKGfw==", "w709wq/ClmI=", "A8O4B0/Dp8O8UcO2", "w73Dt8O6wojDtsKyRsK0", "MFnDgMO+w4Z3BsK2", "w6DCh8Kswr1cUw==", "wq3DksOEV3A=", "wpXChCHDtz/Dr19zJA==", "wqnCs3PDvg==", "w4UhwoDCmQ==", "wrxmfcKaaDI=", "McOcScO+", "w4B8w4/Cowoiw48=", "TcKAX8K5Tg==", "UsK9AsK9TA==", "wpvDrcO5QUg=", "Kl3ClcOiw7DCvXjCqjtMNMKVBDE8X8OeacO8QxTCjQ==", "wrbCn1LDgcKg", "fnJcesOo", "GVdDw7VU", "LnHDtcO7w6w=", "VHZIwpc=", "HSbDosK6XCPDm8Kjw4o=", "OcOgecOlBQ==", "w6gYw7XDnMOy", "w588w5fDvsOD", "w6fCh8Kswrs=", "DCzDv8KmRCfDiw==", "A8O/MVU=", "wqdoacKGeg==", "w402csOPwr0=", "HcO6d1dA", "woHCniPDsRzDr1Rp", "w51nw5zCugIt", "wrfCscOSwo3CsA==", "w57DtcOJwp3DmA==", "w5rCosOBwpc=", "w5DCvcKmwrFE", "H8KyQEc8", "w6fCrBPDtWrDucOuw7vCnBBKwpZMM8Kmw7TCqCU=", "WR4QwrZw", "M8KmLUEo", "HFzCmw==", "esK+TlVJ", "wpHDlzHDrsO6JcK0w7jCi8KA", "N3bCpMOaw5E=", "wrvCnlvClTk=", "w7IwQsODwrg=", "wo/DlSjDhg==", "EcO+c8OBw5A=", "LF7DnsOdw5di", "H8KKL3g2", "w7Rsw53CnDU=", "DsOfw5oxw6U=", "wqJRw5LCpGxCwos=", "w6HDmcOJf1vDrsO2", "fyUhw43Dnw==", "w6bCt8Ofw6w6", "VX5KwpzDtsOVRFciwq89wq8=", "w5Zmw4o=", "EsOvKsOIJg==", "SMKNRMK1VMOfwo7Dsg==", "w787XiY9", "d1dQwpTDocOOWFkfwqAIwqAw", "MsOmHsO9DA==", "Cg/DqsK9cA==", "w4/CtgLDr2rDtMO+wr7CvyZQwpJMJg==", "McOnSXlo", "w65GYsO0wpN6flvDoMO+csO5cWlUGMKOQnDDp8KAw7o=", "QsK2aH9U", "w4RcwrrDs2Y=", "DsO8acOSRQ==", "w5sucsOQwqI=", "w4rCtcObw7El", "JsK1c0vCnw==", "J2DCu8OFw54=", "wqk+N8KWfg==", "wo3DnBXDrMOK", "w58FTsOowqQ=", "wrLCjcOjwp/CsUU=", "PMKvaGfChMKh", "w47CicOGw5oa", "DcOjTCTCrg0JwpEzw4bDkm5gwphZMAfCg0XDosOFCzxOw5oFwrfDiHPCkGE1WAzCvcKDw4rCsg==", "WkJ1wrbDgw==", "wrXCoizDvCc=", "w47CicKJwpFQ", "w7jDo8Oxwo/Djw==", "J8OBO8O5Nw==", "wohPwpnDhHg=", "UDYgw6HDpg==", "XsK5JsKGQQ==", "w4dww77CrjQ=", "T8O0wptNWA==", "w6suw4jDjcOg", "woLDnAXDnyo=", "w6hbVcOowqo=", "w7MWw7LDjMOi", "XsKjaXxN", "CkkPM1U=", "wqHCh8OGwoXCiw==", "w61WXsKcVg==", "wrg3LcKXVw==", "b3NywpHDow==", "J8OfZ8OXw4I=", "SMKYalNk", "wo3DjCXDr8Oq", "w5nDksOvwpPDsg==", "w7xuw4XClBs=", "w7c+DS3CpA==", "CcKxYEo3", "H1YoLHI=", "BMKAN3ox", "w5M2wrTCmUw=", "wqh4wr/DlUs=", "MMKyf2vCjg==", "wpzCvcOOQTE5w7Yq", "w4TCqhPDqVw=", "w6vCm8O7w5Au", "wozChMOvXCw=", "w4gNCgbCig==", "W8KeX8KiU8OnwpjDoWQ=", "wqAGL8K8ZWLCk8OSD8KoRRLDpMKo", "wrDDk8ObX3o=", "w5rCth/DvHvDs8O1wrU=", "w5/CshrDvEE=", "SzQAwrBvw6PCrVfDvVY+cTXCgA==", "EHXDuQJa", "KlLDncOMw714H8K2fz/DqcKr", "w5tpw57CpxoVw79Xw4g=", "H8O2JEvDrMOBVsO8wrg=", "wozCosOFUDw=", "EMO/QWHCrw8Jwok=", "w63CijzDtG0=", "MWvChMOdw5Q=", "GsO2LHbDusOjWsOI", "e8KrPcKdUMOjRToaH8OvQw==", "w6k9eMOewps=", "MVcUL3g=", "w60tVcOuwqJiOsKDSw==", "JMK8Ok8rJw==", "w557wo7DoEcaw5Y=", "asOQX8OSw7XDlsOFEx1y", "ZHtrwr3DpQ==", "w7HCi8KvwoRJ", "HHVBw68b", "w5E8WiwA", "B8OaSsO8w44=", "Fl3CncOiw7c=", "Bm/Do8OWw5U=", "MsKhTl43", "DcOIFMOeDsKOAzrDqUnCgB3Cr1xbMMOuwoDDm8K8dk0vRQHDlcO3eQ==", "woDCngHDnSM=", "wpfClnrCtR8=", "eMK8UsK4Sw==", "UWBIwrDDvg==", "D8OcNcOJLQ==", "w7s+IA7CrA==", "w48NdcO8wok=", "wqTCnXXCiw4=", "Bk/DlRRp", "wpfClVzDisKm", "NXgcI3A=", "FcOFw4Mew6c=", "wpPCgiDDtw==", "w4tBasOhwps=", "LsOUw586w5M=", "w6oNwobCoXk=", "w6JnwoLDpls=", "cENUf8Ot", "MVgdNHQ=", "RzgKwrVyw6/CmUA=", "w7sXQSIba8K+AwxURcO4", "ccK8VVNQwrLDi3E=", "wo/ChMOmcQE=", "NnUWMl7CjsKHSg==", "I8ODE8OPL8KfEjDDvw==", "AVDDtDB5dX/Cl8Og", "O0pJw5MlecKAwpwZw4wxwqs=", "w7YYw6nDmcOuw4IXw7Nl", "CmnDhTdB", "w6XDv8OywrfDscK6UMKl", "wrFbw7p2wpw=", "w6V/wofDs1o=", "NsOXXcOCw4TCmMOTDhk4w7JZ", "w6gYw7XDnMOyw5kY", "e8KzTVo=", "wrXCoQfDlhs=", "GsOyIFPDusOx", "RHJKwo8=", "wr7DgzXDnD0=", "w7Mcw63DgcO4w7I=", "IsOZXcOqQw==", "JcOBeg==", "T8KFQ8KmXcOnwoLDuUTCnTjCmTVMAsKNaQ==", "w67DucOwwrjDo8Kn", "w78IECHCvl7CnA==", "EsOpXHZN", "HSHDo8KmWzTDscKyw5HDs8KOw4jCrHLDilo=", "w5zCs8OIw5ET", "woBWwrrDt08=", "wp5Cwp7DpHw=", "RHRBwpXDlw==", "fisTwo1U", "w4QDRw04", "wrRqw5Zywpc=", "KsKrK0YwJg==", "wqHCisOlwp/Cs18=", "KMOZw5kgw5bDhw==", "woDDgjc=", "FFvChMOgw7M=", "AGNyw5M=", "wp3CmxvDhRw=", "IMOOB1LDtg==", "LU7DjMOtw5I=", "PsOTw4Mw", "acK8Lg==", "wqHCmsOw", "HMKkVmM=", "YcKZK8Klfg==", "AUjCjMO0", "w6DDs8OqwrPDrcK3", "wojDpzLDnAI=", "NsKvd1nChsKow6dy", "woXDnz3DoSrCklPCpA==", "w7IxasOowqJmAMKfR1Nh", "wqLChMOAwqHCqQ==", "JcKiCGU1", "wrPCjcOjwrzCqljDlCzCqMOP", "wpnCoMOFUCIyw6ohEQ==", "IGjDsMOIw60=", "wqFKwoHDkGA=", "wrfCoH3Cuig=", "JMOCCMOWHcKD", "w64CwrzClXo=", "wrLCjcO6woXCtU4=", "D8K5WXY=", "wotRw6VGwrc=", "wrsSL8KDd2LCp8OFBMKBSQXDvMK1", "wq0fOcKQZ3jCqsOOBw==", "w7oMFxTCmUPChMOkZsKzw4Qkw6tv", "FsKLTGXCvQ==", "fgwSw6XDkA==", "C8OQRFF4", "G8KqVGo=", "w6DCmsKnwr9JQg==", "PMKlYn4=", "Yz0Ew6LDjg==", "wrLCjG7Dr8KH", "I8OWQMOww6fCmsOJ", "woXChGHCsA0=", "w7xvX8KCXg==", "w6d0wpLDu2k=", "PcKYDV8r", "bMKPWcKdfw==", "ZMKdcsKMTA==", "B8KGYmfCsw==", "QhMwwoti", "ZVldwqLDlg==", "wpB3QcKreQ==", "w5dFw57CkAA=", "w45xSsO3wrk=", "wqbDkznDuQo=", "PMO+bHLCsw==", "w4R9wrnDoEY=", "GsONIk/Dlg==", "w6vDv8OwwrrDrsK/TcKMwpzCog==", "wrbCoDTDpBg=", "GCDDosKoRD3Dl8KMw5HDvA==", "G1/DvcOiw7Y=", "wqd5a8KM", "w47CosOK", "wrRKw7Nmwp0=", "wqLCsQHDmjA=", "w6sxw7PDoMOD", "wrjCvXPDtw==", "wo5zwq7DlHtZwpw=", "w4Ftw53CuA83w7M=", "Z15TYQ==", "wpPDlMO2T20=", "wr3CocOEXRE=", "PcO3w6gPw44=", "S8K5E8KJQQ==", "wrJdw6dYwrw=", "D2zDlsOKw6w=", "w6TDkMOOwpPDuw==", "JMKhMV0rMBzCuEgpwqA=", "w7lXcsK7bTvDncOGw7g=", "SsKcQMK6RQ==", "wpvDkCXDtcO0", "wrvCvcO0XTs=", "esKrOsKkWcO5Tw==", "wpPCgyjDvA==", "A1DCkMOkw6E=", "w4Rkw4XCliA=", "EcKHT1/CsQ==", "YcK9BMKiW8OCRS8WMg==", "GsKkXH8=", "B392w6BpQMK7EMObw7gYw68=", "B2pnw5NodQ==", "woXChCnDqw==", "w6ldaMKefCXDh8OGw6XDoAFs", "w7sJSzA9Ug==", "acKlDsKefQ==", "Pn1Bw7Fm", "w4EQw7fDn8O4w70b", "J1/Dg8OAw6c=", "dVJIwprDiA==", "w68YERHCrQ==", "w6sXw73DjMOxw78Qw7tk", "McKvdHnCkcK/w7x0Cg==", "w6DCh8Kswq1JVXfCgW4=", "w60Rw7jDhA==", "K8Kna2ot", "w4sMXhIQ", "w5/CosOCw4sZwqnCi2kZ", "wq3CvXPDrsKJwp5O", "w6sYQjk=", "wqPCh8O5wpnCt1nDiC3CsA==", "E3tvw5M=", "JMO0YsO0w5M=", "wqoQD8KARg==", "w5NxwoPDl0w=", "E8OZA8OfCA==", "w6oOBgPCrQ==", "wqHDvsOjVQ==", "wqjCuWvDlMKewrhPayg=", "woXDlSPDmy7CmQ==", "wrrCuHs=", "GzHDpcK6XDjDgMKn", "wovDgDXDsMO+CcOzwqc=", "P0FUw48Dcw==", "CknDjjd+", "w544asOpwrQ=", "CsOuS8OEw6E=", "w6fCjcKuwrtaRnbChw==", "wqABL8KmcQ==", "w67CkT7DuUs=", "wpLCt8OUXTcz", "FMO0QWzCsh0=", "I8O9C8OPFw==", "wpDCnnQ=", "NMOWDHrDjA==", "MsOaw54Aw4c=", "w6x3wpTDvkcV", "LsOWUcOzWzI=", "FsOhUlZm", "wqkVOw==", "LMONV8OHw6fCjcOODg==", "OkJTw7IP", "P8KlbmLCisKp", "asOzwr5iUA==", "wqPDrcOo", "IcOWXMOQ", "w6sIDzHCjg==", "fVNOew==", "PMKlYn7CqcKiw6o=", "w6UcWj02bg==", "IsOEcXtu", "J1nDmMOdw5N3H8K2", "Zgonw4PDpA==", "w5dtw4LCsgQgw6Jf", "PcOOOkrDnQ==", "wq3Cm0rDssK8", "LUcvL2c=", "BnXDli1J", "YFVTYcO7", "wrTCn8Oywo/CrVg=", "IsOXQQ==", "KlHDqCpJYA==", "w4hzd8KBSw==", "HsKiVmcJa8Kdw5DCs0w=", "M0JUw4IeW8Kbwpo=", "AUPChcOUw6rCrGTCkzJe", "OsOYCcOT", "XsKiAsK6eA==", "wrzCn8OaTRs=", "wpfCrsOmwpPCtg==", "L8OSw4kww4LDgMKRwoXCkg==", "KcOCFMOICMKdAjbDrw==", "wpTCgyzDvw==", "w7VHw4LCvRU=", "wopEw6hqwp4=", "w74IDyg=", "AcKoVVPClA==", "HSbDocK5RDTDmsKpw5HDsQ==", "LcKvBX0X", "IMOMIMOoNA==", "TD4Iwqp1w7TCiEbDpg==", "JsKyY0/Ci8K5w7t+G8Ow", "w5LCkMKOwqd8", "wqREw61WwpnDiMK1", "w7NmUMOgwoo=", "BFLDlhRI", "acORwphdRA==", "wqrDs8Oub04=", "wr9JwrfDlw==", "w6HDs8OwwrzDtsK7", "wozDvwPDqjw=", "EGIVNnM=", "ODnDv8KORg==", "w6hKaMO0", "w7tceMKcfDvDmsOEw6/DuwxAw5Q=", "w7oDOivCvg==", "wo3DlT7DlT3Cnw==", "wqdNwqPDln8=", "w6nDucOwwr4=", "wqbDsMOhXA==", "FsKuQHI=", "IsOJw4EGw5c=", "w4LCucODw7IZwqvCl0E=", "wqjCuWvDjcKJwr1HYS8Ba8K6", "K3IVMljCisKSX8KQ", "wqPCh8O5wpnCt1nDiC3CsMOFw64=", "Fl7CksOiw7DCqmPCmSNCPw==", "J1XDh8OIw5h3EsKdbCTDrQ==", "FcKldG/Cl8Ksw714DMOFwqBXw53CqCtefA==", "FcOfbsOqeQ==", "w5Bnw4DCpBczw6NZw5lMw50=", "HMOvSMONw6E=", "wpLDghPDvQw=", "w6fCgcKxwq5RRnvCrHvDuy8=", "G1DCkcO0", "FMOwR28=", "MMOWUcOLRjnDlSssw5vCjknCkcOK", "WMKJRMKGTsO8wpXDvnXCnCvCmQpe", "R8KNUURNwrDDhUI+", "wo43FMK7RQ==", "wqPCmsOywovCt04=", "Hz7DvsKoWA==", "w67CmhrDp1o=", "w4HCm8KywqhL", "J1HDk8Odw4Y=", "A8OyJknDtMO2UMOlwqnCpcKC", "w6TCjcK2wp1VTm7ChmjDsyQ=", "w4LCi8K2wrdSSXE=", "FnVmw48=", "w4Affg0P", "wrTCvmzDr8KNwrJEZw==", "IcOUdsOrUTPDhQ==", "w7gLQSE2fsK1AQA=", "wqRLwobDgXs=", "Qwomw6vDvCc=", "wroCMcKcZGk=", "JcODP8OVGMKoFjjDvg==", "wrbDtR7DhQ==", "G8OPw5Q7w4fDoMKLwoXChMKEwoLDqcO/", "wrVvwojDpEs=", "wooEJMK6Wg==", "D8OEeH7Ciw==", "BMO0NXzDrA==", "F8OTbEXCnA==", "KsOAYsO+WjPDkyUsw43CjGrCq8OCwpXCgmtOw7c=", "w4krwpzClA==", "TMOJwpRq", "T8KDXsKz", "NV3DmMONw5E=", "dVpZYMOs", "wrDCicOlwo/CrV8=", "R3ZWwp7DnMOO", "wrLDucOoUl4=", "w6J9wo7DtUkF", "woh7w7VnwrA=", "w7BCXsKsNADCiQ==", "NMKrK2EtKw7CslI=", "woPCjj7Duw/DqA==", "SMOAwoNhej4=", "w6lbecKmfA==", "HMKuS28CaQ==", "MMOWUcONXSXDiCY0w4c=", "wrFOw6tFwpHDmMK0CGvDgQ==", "wo/Cs8OSUDYj", "GcKvXA==", "wrLDvsO9XHPDnA==", "wqLCncO1wojCr04=", "V8KxeFd4", "w6vCuMK7wolE", "w5o6VMO/wr93N8KcXA==", "w4NuZsKwfg==", "IMKIJlw6", "acKOXMKwWw==", "NsKFTWMq", "IcORd2Nr", "wonDhQjDg8OK", "wpzCusOJWTwlw6Yh", "w7nDpMOrwr4=", "esKzQl1FwrbDhWgPBkbCm2nDpcKp", "IsOow4w4w6w=", "IMOcS8O4VSI=", "NsKhbmvClsKow70=", "Zi4fw5LDpg==", "w6HCicKhwrVaVW3Cl3TDsgM2XljCvA==", "w69KcMOg", "KcOCFMOYHcKb", "wqvCjcOuwpk=", "w5jCiiDDtGo=", "wo3Ct8OWUCokw6Y=", "PkFOw4AYfw==", "w5/Cv8Od", "w6xZcMK9fA==", "wpzCs8OMWQ==", "wqVhd8KcaDU=", "DsOWRUPCrA==", "wrVfw5lawpw=", "IcODasOWw7A=", "QR0uw7I=", "KsOWZUQ=", "OcOIFMOP", "wo5fwqrDjW4=", "HcO+W2E=", "SzQKwrxmw6fCiUA=", "wrrCrng=", "HEzDpAFEcWjCm8OhaQ==", "E8O7AMODGw==", "w4QmwoXCklpN", "ZlFKwrzDvA==", "wpPCqF7Cqhw=", "wqsIMcKDfmnCt8OJD8K2", "XmF2wp7Dgw==", "bMKrUVM=", "NsOFfFw=", "XMOOwpxXdy9MAg==", "McOAeFQ=", "SzwBwrxz", "B17CkMO0", "w6sKw7zDucOlw7kO", "w7sWWzs9", "AWlnw6Z+Q8KkMsOcw6U=", "wpXCg37CjBnDoiB1", "ECbDnMK7RyHDr8Kuw5c=", "w71uVcOQwqg=", "w6UWQBg8", "w6phR8OCwqg=", "BMKvMUAwNknCuF0qwr4vIcO+wqHCtCzDoMOANw/Cm27CvsOtw65Fw6DDnsKHw7zClQs=", "GWEiHkA=", "TiEWwrV4", "IMOcc1U=", "RRY7w6E=", "wpDCv8OzWBo=", "LVnDjMOM", "wqzDusO3TQ==", "IsOBQg==", "w7AjwrfCtHk=", "w4d6w5fCkg01w6RTw4hQ", "KMOlVcONVQ==", "U8O3woFSdQ==", "wrzCk8O4dAE=", "CsOyUGrCuA==", "woDDlTPDqcO4D8OzwqDDlMON", "wrZZw6ZWwpbDn8KvA2LDlw==", "wqHDsMOiSXHDjcOEwqfCrDY=", "w6Y7dxQY", "N07DjcO0w5t1", "L8OgXsOPw6U=", "MAjDm8Khew==", "PcOMXsOmw7U=", "w5vCoB7Dhkc=", "wqPDpsOEYHY=", "w4PCvMOmw68U", "M8OBQMOt", "OcOdw5k2w4zDpcKQwoM=", "wrLCrUvCniM=", "w60tX8Os", "wovCnw/Dmyw=", "wqRCw7FywpTDh8KkJmjDhw==", "wrbCusOCWiI=", "b0JCwrHDpg==", "w6gfwovCiGk=", "w5/CosOIw4k=", "woLDkSTDkSHCu1LCog==", "McKhbmnCjcKBw6Z0", "IcOUVcOQw7Q=", "GibDocKaSzTDgMKl", "E8O6M17Dpw==", "PUpww5UDZ8K3wpUCw5k7", "wqZGw7h2woo=", "w7cKw4rDncO4w6Y=", "w4vCvcOKw5oE", "IEtMw4I=", "wqsLM8KSeVnCsMOFCcK2Rw==", "KMOAWsOkw4o=", "w7kyXcO/wr8=", "wofDgjXDlzPCklTCr8KN", "w7/Cv3DDtcKYwrRGdg==", "RMKCYMKkU8OjwrTDomQ=", "w55Kw7jChQA=", "C2rDrg5O", "wofDmT7DkyXCm0TCjcKFGw==", "wqxAw6lFwo4=", "fsK7T1dOwqjDk1EOAQ==", "Ek1Pw5dc", "EMKzdXUD", "w6RKZ8Onwq4=", "wrwVJcK2fHjCscOJBcKr", "Z0RPSsOwAsKDEkTDlg==", "CU3DgcOIw4w=", "wq/CrmbDl8KDwrI=", "wqFKw7N/", "w7sADSXCh0DCicOHfcKp", "L8OgUcOyVw==", "K8KdK0c8", "w5MmwpbCj2w=", "FsOlMw==", "NTrDn8KEWA==", "wrHCpsO8wqHChQ==", "MsK6TXYd", "fsOQwrlOew==", "cFlbf8OyE8KFEk7Diw==", "fMK3OcKu", "PEFYw5M=", "UgAmw7TDpicjw4M=", "P11Kw6EV", "w5vCqcOdw5o=", "w71RYg==", "w6QrwqPCs2E=", "Jl1Qw4I=", "MMOKbVU=", "F8O0TXA=", "w6zDpMO5", "BUfDtwJT", "M8Osw5whw48=", "wpPCkj3Dtw==", "M1ZH", "w7FGccO5wpJ7", "WXJcwo8=", "BMOsLcOTLw==", "VsOOwoNpdSY=", "wrTCkcOnwo8=", "VsOEwolw", "KsO9w4Miw60=", "N8OBXMOeWiLDky09w5E=", "wovCjiPDtRzDrg==", "wovCoMOZcDYjw7EmE2U=", "IsOac1FOaRcXZsOh", "w4QhwonCkHdcRGY=", "wobCp0vCrh8=", "w7kSdhIs", "wqfCnMOxwrzCtg==", "GnN3w7RI", "BcO5T8OIWQ==", "wqVewrbDpnREwprDpVpV", "w613wo7DsVwZ", "w5g1SMO2woM=", "JlZZw6ICY8KGwpAOw4k=", "wrR+w5Jpwq4=", "JcKCannCgQ==", "w6wZY8Oxwrk=", "wpPCjzTDqCs=", "woHCjXfCixXDtw==", "Wz4W", "JsKvag==", "w74qSMOowqh4N8K6QFRvfQ==", "EcKlTGMXccKFw7A=", "w5ZbwrDDnn0=", "F8OrfcOTw4I=", "w7rDncOGwqrDpw==", "WAMnw6HDrSM7woYsw6nDlcO7csK8bsOPJ3ksZ8Oj", "AnrCpMOgw6E=", "w7MMGzA=", "wrRUwr/DjGhEwps=", "worCvVHDocKW", "wpfDoATDi8OV", "w4rDvMO7wq/DjQ==", "FMO4OkjDocOnSsOywqnCq8KD", "wqsIMsKAZn7CtsODFA==", "wo3CrMO2wqbChA==", "w7ZXew==", "WTgHwrQsw6LCmEfDp0E=", "wpbCvMODWS0zw6Y8", "wrPCrnrDvQ==", "wrpueMKFeCLDmj8=", "cGBuwpzDow==", "BFjCksOCw6fCvXjCnw==", "RzAIwopiw6PCk0A=", "BsKhdG3CtsKuw6x5Gw==", "ckFXZsOqJcKSHk/DgA==", "Lk9yw4BZ", "dVB7wqrDu8O0", "ScOIwp9Gcw==", "AVDCksO2w4bCvw==", "w5LCocKMwoF1ZA==", "BFjCksOZw6c=", "NcOac3xb", "w5kwYAoUXg==", "wrLDpBnDsQLCqH/CgMK5PQ==", "WMKYWcK1V8ORwoDDomQ=", "w6/ClzjDnETDhcOOwpPCjjhm", "IcK0c2nCjsKZw6FiE8Oh", "DMO3ZMO8w5XCsMOjNTwUw5Rzw48delTCt0A=", "LcOda1lRbAwyZcOrL8KDH24pcmA=", "McOlMV7Dr8Ow", "w7pRYMO0wod6", "wqLCs3HDvMKzwrJAZysUTcKPwoJp", "wopPVcKuUgXDtwnDnMOPw64Qw7IEA8K7", "GsKJVkbCtsKEw41S", "OsKpdmbClsKkw61y", "w7QGwqXCrkRheVxpUMO+w5gYIMKM", "O8OEFMOkHsKIWT/Dqw4=", "Zl5qwqTDusO5", "ecKnJ8KUXcOsBCkdDA==", "MlXDmsOnw5hvRcKjYy4=", "w7YHwqrCv1Zt", "NsKnMXEyNkfCq1Ih", "a8O1wrhHXxVgJiTDpg==", "w7zChMOkw7w9woLCplEpwrNk", "IVBJw4QHSMKAwpEew5cyw6nCmcOWwqU=", "w7FPw7HCnyIP", "EMO/Q23CrhAKwow6w4LDg3lLw5tCNhLCgATDp8OfTA==", "HMOOw4gww57DjA==", "dURTasOkE8OfC0/Dgg==", "wpEoEsK0TU/Ci8OlLcKZfznDkcKfbno=", "K0tOw4AzdMKcwpwGw5sPwr7CiMOWwqPDocKzZHh7", "wr3ClcO/YRkZw4Q=", "w6hCa8O2wqJ9axTDvsOhZw==", "WQYnw6jDuSszw4Nhw7jDj8O/", "JnnCvcOfw5vCgF/CpQViGMKOBDMS", "WsKBBcKOasOCZwYiIsOY", "w73Cn8Ohw7opwpDCv0YtwrdowqnCrAw=", "w68GDyHCtEHCncOUY8Kjw5oew4Bj", "WsKBBcKOasOeewYiIsOY", "CsKkVGM6dsKVw4PCrUYD", "w4h3UMKNRhjDucO6w53DnTZrw7HDlQ==", "KMOTw4Eww7vDmMKOwr/Ch8KMwpjDmcOpwq8=", "WsKBBcKOasObeQYiIsOY", "KMOTw4Eww7vDncKMwr/Ch8KMwpg=", "J37CsMOUw5vCjEXCpQZkA8KOAjg=", "RXhIwp7DrcOOWW8Awq4ywp4zw7U=", "cFhowr/Dt8O0", "JFPDmMOcw5F4", "NsOccVV9aAMEYcOjNQ==", "wq3CncOscAcGw5IQPldg", "wpXChCHDtzfDt0pYJCYM", "wq3CncOscAcDw5AQPldg", "wopPVcKuUgTDtgLDlQ==", "ccKhJ8KsasOtQzcU", "VWRzSsOEM8KuOWjDq0/DlXgOw7zDvw==", "wrVyfsKMdyPDoC7DuMOgw5YWw4olLMKS", "AMKPVk/CusKcw5hIKsOCwpt+", "wonCk1PDnsKzwpxlXRI0XMKl", "w45sScOUwqJLX2XDgMOQTsOs", "McOcScO+ayLDkhssw4PCkEs=", "AGtsw6IzRsKlwqY/w7sewoDCtsO8wpI=", "w67CjD3DmlDDl8OXwoTCjzRqwrRhFsKC", "w6hXcMKtRiTDhcO6w7jDtRZTw6rDu1g=", "FcKBE2sAFjrChGgHwpxIH8KawpI=", "w68wVsO/wpJiMMKsWlFkYsOAKmQ=", "M8OEeFTCgig5", "wqhew7JjwqfDmsKs", "ezoGw5TDlRMGw7kLw5g=", "E8OkWHTCgggZwroyw5s=", "ZQQrwolew4vCsA==", "RSQLwqlew6vCkA==", "w4nCvcKPwo5iak/CvV7Dhg==", "w4tHwq3Dhnclw6A=", "w6nCncKvwq5iU3E=", "wrXCh8OtZQcDw5AQMkY=", "w5rCoh3Ds1DDq8Or", "wp3CnVPDl8Kzwpxl", "bsKvJcKnasOiRw==", "BcOyacOXawLDsg==", "VH55XMOK", "w7o3VcOpwrk=", "M8OYYFvCkDwh", "RTgTwoZsw6PClA==", "SsKdbXN9wonDp0IwK0E=", "wpDDmzzDp8OAEMOxworDi8OAw7U=", "w48mLwHCtGHCvcOUQ8KDw7oew6BD", "wrPDvxzDtxbCpmzCnsK7MU0=", "BcO4OF7DisOkTsOOwqzCrcKf", "AGtsw6IzQ8KnwqY6w7Me", "w7oWQjAGfsK/LhRYWQ==", "w5o2YhAGXsKfLjR4ecOUbsOb", "w5UhwojChURNQ1xKdsOFw5g+Cw==", "w4rDmcOSwp/Dh8Kd", "asOuwr1BSwdvOD/DogE=", "C8O+WWHCghQFwro+w4rDmQ==", "F8O2fsOww5nCqMOwIzgcw44=", "B17CkMO0w5vCqWfCpT9MIw==", "FHZlw6I2UsKrwrsiw7QXwpjCsMO3wozDiA==", "DkzDuCFQYEXCkMOtdBLDlA9jwoPCrg==", "GMOiNsO+I8K+JgrDjyjCpyk=", "MVPDmMOdw6tnGsKMeSjDpsKg", "w5o2YhAGR8KBLjFwecOM", "BnVuw5NTWMKnLMOGw60Pw5E=", "wq3CncOscAcGw5IQIldgdMKmwqbDtg==", "fR4qwpxew4vCsHrDhmcVRB7CvcKG", "MVPDmMOdw6t7BsKMeSjDpsKgw7Jhwps=", "wpDDmzzDp8OACcOvworDjsOIw7XDlQ0PAQ==", "wq3CvgDDgjfDl2o=", "YsK7JMK7asO+Ww==", "w4IsYwUGW8KdLiFh", "wrl1dsKZUivDkhPDtcO+", "QcKZXcKmY8OnwpI=", "wq3CvgDDgjfDkmhYCBc=", "L8OMX8OFw5nCjcOSIxQt", "wo4mEMK/TV3Ckg==", "w5Vpw4LCuzwsw7s=", "PsKKdEo6U8K3", "w7sIDyjCtFjCgw==", "O33DkhZvWljCtQ==", "wpDCusOYwrrCnHrDrhQ=", "KsOOw4Ilw7vDmMKMwpo=", "w40NdcOKwpJUDMKr", "NcOLXcOFw5nCm8OOBA==", "wpjClFDDlMK/wpR3UAk5V8K9wrdPBEzDmQ==", "JMKmMEEsJzbCqVMqwrdQI8KxwqzCviTDocOe", "w4QmwovCj2hcb3FUc8OOw5g+BMKwOA==", "wpooEMK2TU7CjMO4P8KZYzTDmcKHag==", "B17CkMO0w5vCunnCgghEI8KwJQY0W8Of", "wqPCo1/CmiXDigM=", "SsOOwp1hSydP", "ZVhowr7DrcOrew==", "MVPDmMOdw6tnGg==", "asOuwr1BSx5x", "KW8WI2jCisKY", "wqXDqsOmXXjDt8OBwqfCrQ==", "wrbCuVrCmz/DmAVeTMOD", "w4A7wo3ChH5mW21UaA==", "JEhNw6ZTdcKHKg==", "W8KeX8KmY8OqwpLDqA==", "w7Rdw6fCkyYew557w6M=", "w73DpMOxwqvDncKxW8K4wqzCo8KQM8KT", "IlZPw5czc8Kbwow0w4o1wqnCjg==", "w6HCnMKswoFXUm/Ckg==", "EHBuw7g4X8KmwrY8", "T8KbAMKPcMOQfhg9LMOJKw==", "dENfa8O7KcKFGk/DglfCuw==", "wpZ5wobDp19vwrzDjXFhwrfDoQ==", "NcK1c27CgMKSw712EMOkwooL", "f8KnSFJHwpvDnnwPBVDDhQ==", "w4TCvcKLwpp4eEzCp0LDgg==", "wqXDqsOmXXjDt8OewqvCuyw=", "YiwEw5bDjx0Vw6E=", "KGMVNFLCocKJSMObLMOtLQ==", "w4xxSsOBwqJOX2A=", "M8OBSsOrayfDkj52w5LCkEs=", "AsKSVVrCusKPw4ZP", "wqsPM8KcYWnCnMOSD8K0RT/DpMK4W1gtXzt3Ow==", "aMKkf8KZb8OWwr7Dg07CqR7CowF9OMKh", "w67CjD3DmlDDmMOVwoPChDRnwqd3BMKX", "wonCk1PDnsKzwpNnWhk8XMKjwqBSGVbDmQ==", "MVPDmMOdw6t0BMKrUiDDpsKmw45xwoLCjVM/TFJg", "w5o2YhAGW8Kd", "CMOzw6EQw7vDvcKs", "QwAnw6HDlTYkwog/w6bDhg==", "wpzCiVbDn8Kpwo55Swg=", "wqfCncO+wo7CpnTDjCfCqsKEw6zCk8OT", "MMOCHX/DkMOKdMOfwpLCkw==", "w4pqU8KYRgvDrMO2", "eMK8JsK7asOtTipdG8O4fQ==", "w5FAwq/Dhncow6BZ", "w64Lw7bDmcOIw68Nw6cuw7NoHg==", "EkTClcO1w6HCh37CmzkDPcK/IQ==", "BUPCk8Ohw5vCunnCgghPIcKkI1wtQ8Od", "J8OFG2vDisORcMOEwoLClMK0w61A", "w4zCsR7Dr1DDvsO1wq7ChAVBwp1ZfMKiw7XCvQ==", "wpN4woHDvFBlwqXDnA==", "UWJ4UMOKPsKjNHY=", "djoCw4DDjx0Dw6cBw4/DvsKp", "wrbCuVrCmz/DmBpRTcOTfMK5", "w7ocCiDCjnPChMOqfMKtw6tzwop5Hk8=", "w51tVcKMXBbDvMOkw4LDkycH", "I8OGdFRHWho6Z8OlBMOJcnIodA==", "wqXDoRnDhsOaIsOSwpDDosO9", "AcO0aMOEZR/Drw==", "KMOKF8OkDcKGGQ==", "wqrDtRnDncOcPMOT", "EcOwXFvCvhgH", "w5AKZcOOwoJD", "w7FWWsOlwpJq", "w6waGRvCmkXCng==", "woNpwpzDtld1wrfDnXZo", "wqNJwrzDlndVwrfDvVZI", "CMOqN8OkNMKuOQ==", "w6UKwrfCv1N4fg==", "cVJFUMO2F8Kf", "A8Ozw6MSw7vDq8K2wq7Csg==", "UcKdEMKUfcOOZA==", "DWl7w6lkTcK6", "MENNw7gYdsKawp4=", "w552Sw==", "OXUU", "woZkw4pMwqjDrsKTLQ==", "EV7CicOOw7TCvXjCnQ==", "PcOeYEbCkTw3wqYXw7nDsw==", "w6wWWzc1b8KTEgRDUw==", "wo/CgjnDjQ/DrlR0OA==", "eyYew5vDhwce", "QcKFRcKJUcO2wog=", "bRYrwoZQw4/Csw==", "w7hfccKXaCDDhsKLw6HDpEs=", "EsO9w6QKw6fDqMKw", "w6XDt8O3woTDocKyW8Ouwp7CscOP", "w41bwr/Dj30=", "OGTCo8OFw4vCjQ==", "KMOMbcOBw6nCjMKPEQBu", "A3d6w7g9XsK6", "w48sMBHCpmnCr8OaW8KE", "CsKuS3MIYsK7w63CtUFDUQ/Cgw==", "NcOQGWTDncOUcQ==", "FcOzJ2TDvcO0UcK/wrDCtMOC", "MXHDkwN1R1PCvMOA", "C8KPVE3CusKOw4FSM8OC", "DXVsw5FTT8K8FsOfw61Pw5sGBg==", "ccK9MMKUXcOuRHceG8Kl", "wpFHVsK2WQfDsQs=", "asKpJMKUQcOuRD5dBsOmKQ==", "SsKbBw==", "w4vCv8OYw6AGwrjCnH5SwpNWw4U=", "DcOwZsOqw4HCscOuLyQ=", "w4E7worCg29QX20=", "wq7Cm8OUwoTCpA==", "wrtpb8KrZCjDmBXDvsOgw5Y=", "w6DCrcKbwpNc", "FGkbD1s=", "GsO+W3fCqQsdwoYi", "w5/CrB/DrHvDqMOvwrjCrw==", "G1bDvCk=", "Fkhuw5dN", "w4NhwrDDu3E=", "NcOLXcOBw6nCjcOYDBU=", "w6pCacOkwphQag==", "G8KkVnURdcKRw7/CqA==", "DcKJBmkw", "M8OVDF/DuA==", "MEtEw54=", "w60cw63Dv8Oyw7oRw71pw7d/IA==", "EcK4dWcdSsKLw6rCuXc=", "IcOcQcOi", "w4/CpgXDiWrDtsO1wrjCsgFdwqs=", "wpTCmyjDtwzDng==", "EUcjAVg=", "w7QVw5fDhcOR", "JcOmeUhs", "NsKtfW/Clw==", "wqNDwqPDhg==", "IFDDm8OZw59DGMK2ZCfDrw==", "KsOAccOsUTPDjy02w4U=", "XMOMwpZhZg==", "Rj8Qwrhtw6/CmWbDvkk6aA==", "aMKgSFtDwrbDk1YEGw==", "wrsIKcKddg==", "wrJHw75q", "w7bCn8Ojw7gpwp/Cu1c4", "IcKhYw==", "w64GFirCjw==", "eMKiKMKy", "w6pHw6DCkDwCw55/w6Bi", "Q8KFRMKVVMO2wqzDsFjCijXCmw==", "w67DucOwwqjDtsKhQcKjwofCrsKO", "wqHCmMOnwobCug==", "w5Z+RcK6WA==", "DSrDrcKlQT/DicKX", "woLCj3LCsxPDqSk=", "G8O9YHDCmg==", "w7wZEyjCkg==", "w5jCpgLDtmjDtMONwrLCvwFM", "w5APADLCuA==", "wrfCqUTCkSg=", "WMKPUcK6VcO9woY=", "NcKhd28=", "woHDmz7DpMO2Gg==", "w4Rhw4rCows=", "wrFIw75/wpHDhcK6Ig==", "Zj4+w6bDng==", "a8KxQFpLwqrDjQ==", "w6DCh8KswrhUQA==", "wqrDmcOBfk4=", "PcOkdkls", "wrVTw4Z2wrA=", "A8O4JFfDtMOs", "KMOcfFRLawkLe8OtPMKIOXE1", "w4Zmw4rCsgUow7hfw4k=", "NMOFZWRt", "OG8UNUPCjMKeTMKB", "w6J9wo7DpVwDw4Zjw6o=", "CsO5VGk=", "wpDDgDXDpcO3", "NwTDiMKTQg==", "DsKqVHMASMKC", "GMOQc1zCjQ==", "wrjCs3HDqMKYwqNdYTIaYA==", "UgAlw7fDvjAiw4U7", "w4Y+wpTCjGI=", "ByDDosKaQDTDgMKZw5c=", "LcKRTnIw", "wrBOw6dFwpHDmcKpH2bDiE54GhNVXcKTAw==", "w6pXdcKmbSzDmsOQw7w=", "Ln/DmMO3w50=", "VAIiw7DCqi4+w5U7w63Dj8OIdsO9dg==", "w7djdMKHeSPDkTg=", "w65GdsO0wolVY0PDh8OlacOIbw==", "L8OaVsOvUTjDsSg5w5s=", "wrjDk8O/XHE=", "wrfCicOywofCmg==", "DsO+MsODDw==", "wpLDnyXDnC0=", "IMKrKw==", "w58Yd8OFwoVXDQ==", "w58uLhvCo23Cvg==", "EHdlw5N+", "wrnCu3I=", "w7J9wpXDuEw=", "JFnDgA==", "w4/DkcOTwoTDisKSeg==", "I8KjOEst", "Fnthw51rXsK7BsOcw6g=", "dVB7wrPDs8O0", "w6sJw73DiMOjw7M8w7tzw7c=", "JsOWbkRxZgEpbA==", "wpfDhDTDo8OrGMOMwqfDlcOZw5XDhz8=", "wrFkaMKoYCnDiiLDpQ==", "GiTDq8KsWg==", "w4MhwonCs3hcXmY=", "J8KwfmvCkcKow5llEcOzwptMw5M=", "w7EKVxQ0ZcK5HxE=", "wqBjfsKHaA==", "NcOYR8OGw6M=", "NMK6PlwrEAzCtVgjwqA=", "H8KuTA==", "w6fCkcOHw6oF", "QsKBUcKxWQ==", "LR3DhcKKYw7DrMKBw63Dmg==", "acKqLQ==", "wrhBwq7DhH8=", "LR3DhcKKYw7DusKIw6vDksKp", "woLCj3LCsxPDqSlH", "w7JxwoHDukEfw5RX", "OcOIDsO/FcKcBznDuhDCugfDtVg=", "w646TsOewqhmN8Kb", "wrHDusO7fXTDm8OAwqLCoiHDh8KiwrA4", "WMKJRMKSWcOjwpXDuQ==", "w648W8O2wqR4JMKk", "w5QtwoXCjHJXV0s=", "OMKvY1nCkcKkw6p8Jg==", "w7BXZcKbbSDDi8OOw5U=", "HCjDv8Ks", "asKvOsKu", "wpPCgzjDvwo=", "wqVEwrrDjng=", "wpjCgmPCqg4=", "w7fCjcKSwopP", "V8O0Jl7DtMOhWg==", "N8O2w5UZw5A=", "w4gzFTDCvg==", "OMOICcOeCMKlGCzDiB3CgA3DpA==", "w74wVMO5wqxi", "wqDDhzHDmz0=", "dMK7UkJHwqrDunEAGw==", "OMKvY1nCkcKkw6p8", "wqTCh8OBwr3CrQ==", "FcORw5cEw6M=", "V8K/W2dl", "MW8DFUPCl8KIRA==", "w6t9wpnDhVwYw5Brw4Y=", "QcKDScKFSMO6woLDulg=", "wpXCvcOZZiw+w6Ak", "w6HCicKxwrs=", "XXhdwqjDhsOTSVs=", "w75CdsO0", "w4XCv8OUw6wCwrTCkXIl", "w6hLcMO8wp8=", "M8KmKkM9", "XXhdwqjDhsOTSVso", "wrjCi3XClSo=", "P8OKw4g7w5DDmg==", "dcOxwqBqew==", "OcOCD8OVGA==", "w6hdccKnbyzDqcOJw6A=", "wp9XSsKmWg==", "wrPCi8OywoTCpg==", "w64dDDQ=", "wqjCqH7DqcKY", "wpJ3esKAeQ==", "O8OYw58hw4Y=", "JMOYIlzDow==", "w64KBirCjg==", "wqvCjcOu", "E8O2IFo=", "w6XCscKrwpFN", "Lm4eI1HCl8KFSsKR", "w7scDSfCn0XCn8Ol", "w4wOw7HDsMOg", "wq4zGMKEfw==", "wrTCjCLDiCc=", "w6Ydw5XDucOd", "wrbCqMODejc=", "w5cDw7rDpsO4", "wpcULMKWd2g=", "wobCg2HCsx4=", "IMOXU8OXw6rCnA==", "wrnCs3vDog==", "w4nChcOnw70v", "J8Occ0NWdxs4fQ==", "Y0RZe8OxAsKIC0Q=", "JEVMw5IJWMKS", "JMKhMV0rMBzCuEg=", "IVkvEG8=", "A8OIYFLChQ==", "M1DDlcOBw7V4AsK+fg==", "TCQU", "UAEiw6nDuRIlw4k/", "QMOVwqRSXA==", "wofCtsOsZRI=", "CwjDqMK8RA==", "woMeGcKAZA==", "woLDnz7DgT3ChUjCosKeF3E=", "WXhWwpbDk8OW", "CcObw4IPw6s=", "w5ASZcOJwppfDg==", "wpLCv8O/Ri8+w64=", "OVddw7JGc8KHJMO7w4E=", "N8ORw7Ixw47DtsKMwpfCn8KI", "QmdpXMOJP8K8", "acKjfkVVwq3Dhw==", "ZkZ7wr/DuMOleWc4woo=", "LMKYZ1UyTsKp", "EcOqbcOxw4zCpsOyKzkQ", "w65LQ8KscxbDm8OSw6XDuQ==", "aB4qwp1Ew4g=", "H8KkVGIAaQ==", "CsKDAGUWASI=", "w67ChcKdwrVURGk=", "Em3Dq8Ozw71VIA==", "w5fCu8KdwpV0ZEk=", "wq/Cr0DDsMKFwrJD", "woTDjcOKfEfDrcOvwozCihbDk8KUwpMSM1k=", "w5V6w4vCrRkew7RTw4NEw7BFwo1yw7Y=", "RHd6RMOBNMK4NWbDulHDhW8G", "JUVMw4wzdcKdwpcMw6UpwqjCh8Of", "w67ChcKdwq1WTg==", "NMOcalfCljA3wqEG", "JsOGC2jDnsOc", "NsK/AF00Kw==", "w4tpQ8KbUgDDt8Ohw5w=", "LcOCalfCljA=", "bMOywq5XXwN9Iyc=", "A8OkC0jDvsO8YMO1wq0=", "w4XCqcKOwpJiak8=", "Ln/DkQh1VEs=", "woTDlTzDrsOADMOt", "w6EPwqjCrERtYw==", "GSHDo8K6XA==", "w7TClAfDlHs=", "w7JXwq5vw43Dl8OvFjTDmDA=", "ZcOEF8OcD8OA", "wpLCsx/DuDDDrMKn", "wrVZaMKkeDrChw==", "w47DkSXDliDCmBI=", "SkfDgQ==", "Y1/DhsOdw5ViDg==", "Jldpw6AU", "N28bInjClcK/QA==", "wpLDhTPDkSzChE4=", "NkpLw5Q7", "wpPClMOzeQg=", "w6gxXsO/wqt/LcKWSg==", "HsK+VmURbsKLw7I=", "wpjCm8OsZhA=", "NG1xw6QV", "wpZ+w5JXwo4=", "w6xRYMO9wpJ+aA==", "C0zDuCVeYA==", "CsODRUPCnw==", "w5Jkw6XCnSg=", "fVpMbcO9", "f8K3VXVKwq3DhnkTB2E=", "ZMKrJ8KsQcOn", "G8Ofw5k8w4vDh8KM", "wrdbw7tywozDjg==", "wqDCjVHCiCk=", "Jk1Nw4I=", "wqvDscO7XG/DnsORwqI=", "RQcvw57DjA==", "wqsGMMKf", "D8O8ZMOffRjDpg==", "w71ZccKtSibDncOXw6/DsTRbw5TDu2cB", "wobDmz3DkcOwCMOuwrbDn8Olw7TDkzYkGg==", "G2zDrQNo", "w5vCicKpwrlR", "D3PDtcO8w71YLA==", "GsOyfcOKdQ==", "BlBDw6o4", "wpjCs8ONUA==", "w79OecKmbTo=", "TsKBWcKi", "ScKWcURq", "PktBw4MjfMKgwpY=", "w65XUMKneC3DrMOKw6HDnRVTw4Y=", "wo/CoMOPQTcjw7o/Ew==", "UMOAwoJLYyRyFRjDkyoDw4Nf", "w619woHDsg==", "SMKDXsK1XcOn", "woLCggfDhSA=", "wpzCvcOOVjkj", "XyMJwq1uw7LChFXDtw==", "wqHDsMOhWnzDnA==", "wogvwpDCjHpKHw==", "e8K9T1VDwrA=", "wpLDicOGe0s=", "w6sWQDY4fg==", "UgAlw6fDqzY=", "wovChCzDtg==", "wobCnyHDsxs=", "w5c8wovClHRNSXNe", "w6rDv8OnwprDtw==", "MXbChcO+w4I=", "woHDmz7DocO+CQ==", "w7EwW8O+", "w6zDo8O6wrLDrQ==", "I8OScFU=", "w57CogLDulrDqMO2", "w6pGd8OiwpRwYg==", "w7DCisK1wotf", "wolhVcKLbw==", "w79Ma8Oywpxr", "ViUlwolP", "woTCmSjDsxzDo3ppJSoR", "aBANwqlJ", "wrtfwoHDqG8=", "worCrFbDs8Kq", "wqTCh8O6wrnCrF7Djy3CocOmw7PCnMOQHMKf", "woXDlT3Dp8OMEsOpwqfDmcOMw5fDnTMPPhk=", "EsOhMVXDocOm", "w6bChcKrwqo=", "G0rDvDZe", "wrZcw7p2wpbDmA==", "PCbDucKnSzQ=", "w6NtdMKlTg==", "wo/DgiPDpQQ=", "w4h0wq/DuUI=", "wo03HsKfZA==", "wpJ7w7l4woo=", "wo5zwr/DkX9cwofDrVtV", "K8OdcV9DYQ==", "Z8KgLMK5R8OgWA==", "wrPCq3DCtBI=", "JsKNVkjCrw==", "K2F3w7cU", "wrPCmsO0", "wqHCsG/DrMKC", "fcK8VFtHwrbDi38NBw==", "wpzCvcOOUzEww7Y9F3RCVg==", "NMO+fUjCrQ==", "w4MrwoLCiXVcYHFUb8OOw7UuGA==", "L282KVbCmsKvQMKYFcOuLT8=", "w55pw5zCvA==", "w64owqvCj3E=", "w6s4XhsV", "w5/CggHDkUM=", "P8OxP3PDhg==", "wrjCs3HDqMKYwqNdYTI=", "ahMxwqBs", "wrDCmsO4wp7CrF/DhD7CoQ==", "McKhdmY=", "ZERXfw==", "CcOjUHI=", "wqxOw6dn", "wqwaQTstb8KiBQ==", "wqnDusO2Sg==", "wq7DusOhXmnDgA==", "HMOCwp5qYC9MEw==", "wrTDusO9SnTDh8Oe", "w4wrwp3Ckw==", "WlB5YMO0", "IGxUw4wb", "NsO7aVtV", "YFVXY8O3GMKW", "wqFEw7F1wpHDjA==", "NkFTw44LecK8wpwCw504wrM=", "wr1lY8Kd", "JMKhdn/CgA==", "w60bDDDChFjCicO7dw==", "K13Dh8O3w4N4O8KhYjnDrcK1w5l8", "FMO2OFc=", "wrXCq2rCsDw=", "wrjCs3HDuMKNwqU=", "woDCucOAw5gFw7LClnYRw5E=", "w6HDucO/wr/Dq8K9U8KJwp7Cpg==", "woXDlT3Dpw==", "wofDgjXDrMOrDg==", "FcO+VGDCkhI8woo=", "JlLDkA==", "IcK0dXo=", "F3Nzw7UU", "w4kbNDzCow==", "e8K9T1BLwqM=", "FsO5PVbDpg==", "w6oDwrvCs0xwfQ==", "LAbDgMKMdxzDo8Kfw6/DlsKl", "w7tWdcKlag==", "w7o6VMO/wr93N8KWaEJraMO6AHUTW8Ou", "wrPDvxzDtxbCunDCnsK7MU3DlSpK", "IsOdTMO2Rw==", "w4U0cR4QScKH", "CVDDtClZ", "woFPV8KsUgvDshPDmcOPw78=", "wpbCkUDDiMKnwpg=", "ecK8SFtR", "wqkJNcKeYQ==", "woDDnjnDnzo=", "IsOcXMOQw7TCmMOVGTYvw6FHw7UQV3bCk3g=", "YyAHw4HDlQ8aw7kbw4nDr8OfRcOYXw==", "wp7CvMOJWCs=", "MVZFw4YYcg==", "w6LChsKrwrNO", "BX3DuMO0w6tbJg==", "w53CrRjDsnw=", "HTvDqcKoXDQ=", "IlLDncOVw4c=", "w5/DmcOSwp7DncKCZcKfwqLCiMKy", "M0pJw4of", "cERTbsOqEw==", "clhfYsOt", "w6TCjcKswrtPRnbCh1zDpCs2WnHCuMOew43Cqg==", "SsKCWcK7Tw==", "w6JgwoXDt1wU", "K8ODE8OWDw==", "w7kcw7fDjMOlw7cKw7tGw7FnFMO5wr7Cp8KSwoMk", "w48mLwHCtH3CocOUWsKLw7o=", "w4Ygwo3CjWg=", "FMOlMVrDocOw", "w5kocQYSQw==", "w4ArworChWlYRGZ9bcOKw6o/L8KiNnPDoA==", "w67CjD3DmlDDi8OLwoTCjzRqwrQ=", "woXDkT7Dp8OtHMOowrDDvMObw7rDnzclEB8AeQ==", "WcOPwphpZw==", "TsKPBcKHasOeew==", "Tj8PwrRy", "fsOgwr1ISxtz", "F2hnw5d4SQ==", "wrZJwqHDhmhRwpzDqXlUwonCviUZe8OOw4wf", "JcOYGH7DisOBbMOOwozCjcK/", "w7wHCinCmA==", "w45rQ8KMUxbDu8Oyw4XDmQ==", "Om4TK0Q=", "NUFOw4IedsKAwpwtw4gxwqrCjMO2wqPDosO4Zw==", "asOuwr1BSx5xOCbDqgEuw7Ns", "XMKdFsKAfMOMYQ==", "wpzCoMOFVCwy", "HsO0W2HCrxgcwoAQw5nDlm1xw7ZPNBbCmA==", "w5VBwr/DhWM4w6xEw44=", "JcOYGH7DisOBbMOOwonChcK/w6RYbsK4", "FMKBVkbCusKZw5o=", "Uh0uw6XDvic=", "FH3DuMOzw6tUIsKdShbDkcKIw6NC", "wpEoEsK0TU7CisOuJA==", "w7wxU8O3wr4=", "wrByfsKIeSM=", "wqTDphXDh8OFOMODwpfDs8Onw5zDrQskPzU=", "JFnDmsOdw4Z3H8K2SzvDqcKqw4hLworCllNi", "LmzDmAFwQEXCsMONVDLDlC9DwqPCjg==", "w5kxw5bDusOD", "w5Rtw4DCshEgw6Jfw6tRw45RwodSw7DDuE7DpQ==", "wqDDsMO9XXjDmsKdwqzCrCA=", "w6zDv8OVwpHDlA==", "AFvDtCNCcQ==", "wobChXfCqxI=", "BkvDsCZPdw==", "FsK/NFYP", "wpREwqHDjXE=", "C0bDusOtw4c=", "w5Maw5XDg8On", "wqvDscOhXG/DvMOVwrbCtw==", "Bn9lw6E=", "XG1rw5J4RMKoG8OXw6UGw54CSRXCtMKDw4w/wqtAP2XDmMOaBMOZAE0EFcOcwotKwrPDuwzCscOqw7fChcOawokkwqU=", "DCzDq8KB", "eDUHwrFS", "w7JxwoXDuE0=", "w67DpMO7wrrDtsK2ccKswpbCrMKZKMKC", "w64dGijCjl8=", "wqHCnMOjwpjCsA==", "XMOOwpw=", "NMK6JkI6", "WX5xS8OK", "DSrDqcKnTQ==", "wovCs8OCw5ECwrjCnG0=", "woDDgCDDlyfCk37CqcKDFGc=", "OEvCscOUw6I=", "wqnDpiTDtAc=", "Vn5vwrHDpA==", "OWTDmxVI", "IsOYX8OQ", "wpJew6lkwrE=", "LGhww7RJ", "dyMUwptE", "w4bCucO4w40S", "MF/DkcOWw5E=", "fMK3Ul9FwqrDongIBWfCgg==", "w6/ChyXDtkg=", "JMKJGkwo", "JmXCs8Ofw4E=", "w4Btw5rCmBEow7FTw4M=", "wqwCL8KadWI=", "w7kMEC3CjEI=", "wqrDusOmXnXDnA==", "wp3CvcOETA==", "e8KrPcKYXMO1Tw==", "J8OWVsOM", "woLCiWfCkBzDoT11dw==", "w4w3w6nDqsOz", "DCbDoMKs", "w68GDyE=", "IcK0e37CjMKuw5A=", "KW8WIw==", "wqcROcKBdGDCrMOXMMK3Uw==", "w49MY8OTwrA=", "w6vCicKxwpFKSVLCkHXDpi8pS0Y=", "HCbDiMKGRA==", "BcKtTU3Cig==", "B1DDnixFamnCl8OWdRnDrg==", "KWUdEQ==", "bMK3UkI=", "w6l2f8Odwpc=", "wonCmX7DiMKL", "NsOaU8OZw6/Cl8OG", "w7N3wofDng==", "wrbDusO8TQ==", "K8OMX8OXw6PCiw==", "HcO+WA==", "N8OHZFxH", "woPDkDTDg8OrCcOuwqY=", "BXBiw54h", "w78Nw63Dm8Ok", "w5/Ct8O6w48a", "wq1Mw692woE=", "IMOcS8OoQCTDlCcsw43CjA==", "HcO4RnTCsRgRwqs3w4bDkg==", "w5LCohzDug==", "woPDgCTDsMOs", "wpnCjWDCkA3DqR5ibMOkRsO5TcOg", "w4zCscOBw5M=", "w646TsObwrliMcKaTEV+YA==", "GsKkTHIKasK9", "cVlCe8OxG8Ko", "H0TDjDJB", "wq8GLA==", "wo7DkiPDhijClFHCpA==", "CsOhUGHCuSA=", "WsOOwqtqfg==", "wobDmz0=", "EHVv", "w7EUw53Dg8Ol", "wp1Yw692wp3Dj8KE", "wqwIMQ==", "AVDDsyFYUX/CisOw", "BcOyOVTDo8Ow", "U3hJ", "wpXChWU=", "TjMVwrZtw7PCiUA=", "Q8KFVMKyWcO9", "wqTDs8OqQQ==", "w6J3wo7Dok0D", "w7xpdsKOfmnDmyPDvMKh", "wpPCgHzCvBE=", "w65KacKt", "AsOlOBM=", "JcOSScOoUQ==", "BicUw57CksKLGgBU", "wrXCs3HDvg==", "wr0/w5zDrMOVw5c9", "WMKVW8K4WA==", "5Za35bGB55e7", "w4luZsOrwqQ=", "w4khwpbCjXpV", "B8O2UcOrRg==", "KGMbKlLCpsODAsOEdQ==", "w7wYw6rDjMOCw6QS", "IE7DkcOZw4BzP8K6eSXDrQ==", "w74bBiXCn0nCs8OkfMKsw50zw4k=", "BV5vw4sd", "wrouE8KqXw==", "LsKFdEQD", "A8O+OV7Dpw==", "A1fCksOSw4I=", "Qgwuw6rDrw==", "woowGMKQUA==", "XB02wrNy", "w7XCncOOw7gY", "Z8K3OsKydA==", "JAfDucKxbQ==", "OG8WM1rCkA==", "MVZFw4YYcsKwwpwYw5k=", "w7ZdesK8XSzDm8OG", "wqHDrcOqWGnDjcOkwqfCtzTDsQ==", "W8OTwpRlYC9wCBvDhg0ew49V", "woTCmSjDsxzDo3hoIiELwpzCpw==", "CVrDuQ==", "FsOzMA==", "wqPDu8Or", "woPCg3/CujjDqDY=", "EsKze1Iu", "wrHDvMOqV3g=", "PcOdw4Aw", "E3RLwpXDhsOfREQ=", "w43CscOew5ojwq/Cng==", "cURQwpTDlQ==", "w6DCksKzwqZH", "wr3DkzHDr8O6", "w44gwo3ClA==", "w43Cv8OV", "McOWSMO0QjM=", "wrnCtcOTUTk=", "GsO+W2fCvA0=", "woXCij7Dtz3DtFc=", "aV9MeMO8", "wqPCgMO4woXCsE7DojzCq8OGw7nCosOAOsKAwq/DmQ==", "HXdl", "UsK6UsKkUg==", "OHIfJ0PCm8K5QMKZOcOBJTTCpg==", "QcODwpp0Uw==", "w4QhworCg3pN", "asKvOsKuYMO9Rg==", "wp3CgjfDpQo=", "wqFEw7FwwpnDnw==", "w7HCh8KuwrtiRW3CmkXDtykvVknCvA==", "w70Ww7fDisO2w6I=", "w4UvwpfChU5LXA==", "woTChCPDsQnDsg==", "BcO4OF7DisO3UMOpwoLCrcKfw4JkXsKBw69I", "w5Bnw4DCtAI1", "w6oYXTAMeMKg", "w7fDv8OkwqzDoA==", "wqsIMsKQc3g=", "wqBKw6x2wq3DmcKx", "JcKvLEsKMAU=", "w4lhw5TCoAE=", "wpPDnzzDlxbChkw=", "G13DuCpP", "SzgQ", "w6bCjQTDp0o=", "w5kQfzw=", "w5Vnw5zCkgIiw74=", "PXnCisOaw5w=", "wpHDhDzDq8Or", "wpFXX8KKTw==", "HMOeQMOZw7U=", "Mm0d", "w7RXcsKt", "KlHDkw==", "w7wNBw==", "w4tsT8Oywps=", "worCij/DtQHDqGluKy8W", "w75XcQ==", "w7kEEiPCuA==", "wrHDq8O2VXg=", "OWEZLVDCjMKEWsKbOMOKJy3CssOh", "w7Riw5zCgjk=", "wqPCh8O5wonCol8=", "NkVUw4YfcsKA", "wpDCj2fCtgzDog==", "woDCllrCuBw=", "w4/CoBTDsWo=", "MMO9Jm7Djw==", "w7szX8Oi", "wqjCi2HCswk=", "w4VEd8O9wo4=", "wqFHw71kwo4=", "XDIDwrdk", "w5XClMOmw5A4", "w74FATPCnQ==", "w4bCvsODw5oEwonCl2EI", "WzQewq0=", "wp7CtsOE", "wqNPw7s=", "w4Mhwok=", "fVdbag==", "wrXCvXLDvg==", "w5wxai8o", "DHo1KkY=", "McOYQMOSw6PCjQ==", "PsOTw4A=", "Ugciw6jDrjAyw4g=", "w5bCoDPDs24=", "wqVNwr3DhH9E", "w78+WcOxwqpkLMKGQFRDaMO+KXE=", "VQ4/w6XDuScj", "w6wlc8O9wqs=", "C8K/QWoA", "wqDDvsOsUnrDmsOfwrvCrTzDncKmwqs6GA==", "wqbDmiLDpxM=", "NMOSV8O1", "bD4UwrxCw6nCk1HDs081ZjPDmeaUtuazqeivoOe9scOBw5sDDhB/w5TDlltnGWQZBw==", "w4TCuRbDiHs=", "w64lMy7CmA==", "w5sow7PDgMOw", "I2BNw5p9", "PsORw5wyw7c=", "E8OjMcO3FA==", "wpPDuTrDvi4=", "PHUTIlLCjQ==", "FMO4OljDtMOh", "CsO/VsONWA==", "a8KhJ8KoVMO7", "w77DtcO7wrXDpw==", "LsOFe19P", "KMOMCcOeKcKdGw==", "IWkAMVU=", "C1bDsitZYEXCgMOrdhDDlBVjwoPCr1QwwoE=", "wo/CjnnDlsKL", "w7oWw7Q=", "HSHDpcKlTCPDi8Ku", "wodhdcKOXi7DmiLDtg==", "wo7DkT7DpcOrFQ==", "wrbCs8O0Ty0=", "UAw/w63DvCc=", "wqwGKMKSYWnCtw==", "NMOdw4Aw", "C8O0WGvCqxw=", "HMOeMcODKg==", "w6PCvsOOw74h", "wrXDjh/DrsOu", "BEhXw5hU", "woLDnz3DgiXCkknCqMKFFg==", "NFfDpcOPw4I=", "FMO4OUvDucOwS8O4wrLCqg==", "MUtOw4QNYw==", "VH9LwpTDgcOfdUIewqs5wp4zw7rCp8Kr", "wpbDjcOpdHo=", "GcO+RsOcWg==", "WcODwoJreD9WAg==", "w4DCvsOuw5AYwrvCm2sR", "JVNM", "H1/DtDBsamjCscOrdBPDogRh", "w5/CsRTDvnvDv8Odwq7CshFBwrpTNQ==", "w7HChibDsUE=", "w69AYMO/wpg=", "w6IwK8OM", "HWvDvw9o", "wpPCncONwq3CsQ==", "cMK7RVJHwqo=", "esKpK8KqHcK/BnlDR8K2KsOyw641wq5I", "DlLDuDw=", "JMKrMVo6MA==", "McKyf2vCkcKow4p4EMOlwrxLw5M=", "clJS", "DsO2csO1eg==", "ZxM3wq5E", "NUVNw4I=", "UHltw5h4ScK6Bw==", "CsKuVWkTYg==", "w6DCqsKPwrdE", "JMKMEkcm", "IcOcXQ==", "G8O+TQ==", "wrXCtsOzRRs=", "fMK/RlNQ", "SsOOwp1h", "w6AQQjkqY8KoFA==", "woPCnj/DsxzDr1Rp", "w6V7wobDsEESw4Zsw6oeJ8KVVcOSXQ==", "wqBudMKeTyfDjT7DuMOrw4M6", "PsORw4oww5Y=", "w7/DucOywr4=", "wrLCsnbDr8K/wqFNZyI=", "KHAfI1PDjA==", "a8K8TkFgwqXDmG8IB33ChQ==", "wqjCv3rDtcKJ", "w5UrwpfClXZc", "wodMw7l8wqI=", "DFHDsA==", "w53CpxXDmnnDv8O0wq/ClxxXwodbPMK3w6k=", "VHtNwpjDmQ==", "XTQLwrZ3w6M=", "w6TDt8Opwo7DrA==", "wplcwoTDpFM=", "w4nDusOswojDmw==", "wqLCicOkwo/CllnDkQ==", "LMO+QMONcA==", "KsOeQg==", "MEVTw4I5ZcKY", "w4DCncOIw6ky", "w74GDSfCilg=", "IMK7Nko6HQLCtVMx", "wojDnTc=", "CHUgAUU=", "LsOEDA==", "FcO7O1jDvg==", "dcKDLRU=", "w7U2XsO+wqh4", "MBjDosK5fw==", "Ul5lY8Ot", "WMO+OVzDpsK6W8O+wrDDqw==", "Y8OwKi/DhcO8wrknWw==", "PMOQw4gt", "woQIwqHCpS14Bw==", "w7wQQzA=", "wrXCmMOzwovCt04=", "w690TMKZUg==", "BGjCpcO4w5E=", "w5xtZsKkfg==", "wq8jDsOmw7xqdsKPHUw6", "GsO9VHfCrg==", "LnIWbg==", "wp7Cp8OUWg==", "w5XCrhY=", "w7wWWzYxb8KiFQ==", "wqkJNcKec3jCqsOPDsK9TgQ=", "D8O4VCnCvBcBwog3w5/DkmQ0w45HOF7CmELDtsOaTg==", "w6NzwpPDs30Dw58=", "wpfDhDTDo8OrGMOfwqDDiA==", "GsOjUGXCqRw4wpc5w5s=", "DcK7XGcRYsK0w67Cs18jSRI=", "LFLDpMOKw5tmKMK/ZCrDow==", "worCvgXDsRo=", "w7dtVMKraw==", "w7AUwofCskI=", "w4AtfB4w", "CcKRw4Eh", "T8KzV3J4", "O0TDvytI", "IMKbQGos", "C0zDuCVeYEnCkcOraBDDiRpjwo7Cog==", "wqHCjMOz", "ClHDpQ==", "bMKjLsKuRw==", "GsO9WnfCuBwM", "wrFEw6p9wpw=", "w5kmNgbCp2nCr8OIU8KYw7A=", "w4jDg8OqwpPDmg==", "a8ObwpNrdg==", "wq3Dm8OtUV4=", "w7QMw5XDpcO0", "wox6w7Fjwq8=", "a8K7O8KDRQ==", "wqtJdcKTZQ==", "w6Acw7/Chg==", "wojDucO+VUk=", "wpzClMONXwo=", "H8OgZ0XCkg==", "PMKvdG8=", "VGVBwprDhsOfeVMewrU5woM7w7DCt8Kj", "w5/CsRTDvnvDv8OQwq7CtgVmwodQ", "wpLCnnbCvg7Dohp4ccO7VMOJTcO3", "w7tceA==", "VnNA", "w7w7Xg==", "LcOMF8Oe", "f2MVKEPCm8KFWw==", "wrnCvWzDvsK5wqNE", "worCoADDpzE=", "OMOdw54ww7HDm8KT", "wqpjdMKIXA==", "w4lGwrLDnUE=", "KmbDpMOiw64=", "EcKlVmMXU8KBw6TCqA==", "5p6d5Lya5omz57qtw5EMw4A=", "wrh2wp/DuUA=", "wqtFw7F2worDv8K4EnM=", "KMOICcOPL8KMGCfDvg==", "JsOMQMOmw6XClsOTGQ==", "wobCjyk=", "w4LDnsORwpPDtw==", "w619wqTDn08=", "w60Nw7jDm8Ojw4IXw7Nl", "wqzCicOkwp7Cl0LDkCs=", "wozCpsOBRywDw6oiEw==", "b8KRaHBV", "wrkvO8KUWw==", "wqB0esKbeRLDliHDtA==", "EijDv8K9fDjDg8Kl", "wp4iH8KGag==", "QHtNwrHDmQ==", "wo/CqlnDs8K0", "IcOWVsOvZzXDjjY9", "wqnChsO5wo/CsX/DmDbCsA==", "wpPChX3CuC/DqShiZsOxWcOu", "dUdVwp/DmA==", "cMKjeExY", "Fl7CksOyw6XCrA==", "w75CdsO0wqhtYA==", "PcOQclFz", "wrJZw7BjwqfDicKyEg==", "wp3Cs8OTUA0lw68=", "wpvDlz/Do8OO", "TD4Iwrpgw7I=", "wrgVM8KDTX3CsMOa", "BlLCmcO/w6E=", "F8OJf19A", "wpnCvsOFTQ==", "wq3DoCDDnwM=", "w7IZwqPCtW8=", "wopOw7FWwpk=", "wrpudcKMfxLDmjTDpQ==", "w4J5wqbDgWY=", "w4YqwoA=", "wrgVM8KDUGPCuw==", "w60bDDTCpVnCnQ==", "JsKqO2spJwfCr3AvwqF7JcKwwqfCqg==", "G3RSw4RjXMKXH8Obw68K", "w6LCjMKmwptLQmzCllbDvzkvWlHCvMOB", "GGNtw5ta", "Ul9ca8OE", "wokONsKXSA==", "w4XCisK2wolL", "w5zCoMOBw5YC", "wqZFwqvDl3I=", "w48rwo3Ch3NN", "V8K8JsKnUA==", "w6DCmsKnwr9JQkXCjXbDsi81", "w7IPBTfCjljCqA==", "w5Zkwq3DgWs=", "w7gLQSUMecKpGAtW", "Mm4OI0XCiMKKQ8KlLsOsOg==", "w7fCgcKvwrttVW3Ckg==", "H2l/w7Q7XsK5", "CMO0bcOxw4zCpsOyKzkQ", "ecKjfMKTY8OCwrDDjlDCrBU=", "WcKfFsKPf8OQeQ46Jg==", "CMOzw6EQw7vDvcKswr/Cp8Kswrg=", "wqvCgcO/Zg8ew44=", "w4vCtcOew5YRwrM=", "J1nDh8ORw5N4", "w77Ds8OqwrnDrcK3TcKTwprCu8KZ", "C8KuTEQKY8Kdw5PCukkeWQs=", "KsOfVMOGw6PCjcO4", "w7DCjcK2wppYV3bCig==", "w5c8wovCkFlWSA==", "W2FuWcOp", "w4tHwpTDnFg=", "XsK2dmRB", "F8OOw4cMw7M=", "eMK8JsK7e8O6Rw==", "WAElw6HDuBYyw547", "CcOGPMOsMg==", "KcKhD1wwMijCtVU=", "J1PDmQ==", "S8OEwoVFYD5QDhXDljsU", "SMK7Z8K1TA==", "YXpZXMOt", "BGhtw4ZOQ8Ks", "EV7CkQ==", "HSXDrcK6Ww==", "w7XCgcKjw7NcSWvCj3vDoi8/H0nCsMOSwoXCq0bChV9rI8K3DBp5", "FcO2Vkpz", "5ZOe77+H56q554Sw5oKW5ZCE6YWv5riA5bOT6ZSJ6bOJ", "6L2D5piX5Luc5LqA55mi6KS2wpc=", "6IWD5aCz55eB", "5L2K6K606K6X772I5ZWe5pyl5Lqt5p+q5ZGv", "5oqS542Y5Z+q5p+X56yR5Y2m5p2j5ZKf5ZW8wrc=", "6Le66aGI776S6ImH5ruUwq0=", "5a+0wp4WbyE=", "5peP6Lyr5oiC5ZO45aWd5ZGi", "5oqZ5a+j5a605a+P5a+DKw==", "5Zeww4fkua/kv7jlsonlpKnlpbHlpIE=", "6IOD5p+g776D5Ya05p24wpnkuprvv4Lku47vvZTCpcO75Lug", "5ZOh5Y6C5aSG54i95piX77ygwr/DnVfCmMKV", "6K2q5Y605oir6aGE5aek5bCZ6JGP5ZWGDw==", "5Y6W5Ya35p+p6bOq77yk5YSH5ZK+5Li66bCs", "5ayL6Z2e6bCG772K5a6+55yb6bKX5Lmk5Lql", "6JCz6IuV57mL5aSU5Li1772956Gj55+z5pW+6LyL56aI", "57qB6Zim5rig5rWv5YSW772O6Iua6I6S5bmI5biy5Luc5oGn6ZS/", "5bO55p2w5pyG5YS75p2x5pyD5p2R77295b6m5oKX5ZCs5Yel55+P5Lqc55+f", "5piB5bes5Y265YyX5rON6Zur5qCH77+26Iuk6I2k6JGG6JOa6big6bi75rWv", "5qyd56im5Yyl6YSV55uv776K5piJ5rid5LqS5Y2l57Co", "5LyD5oaG5riK6ZeK5LuD77+15Y+i6Yaw5YSB5aW656Wm", "5Lu555Sj5byj5oa36aOP5bCr5q2J77+f6I6m5Ly26YWZ5qu656uX5a+85p+jwoU=", "5pq56aOt5b6S5oae6aqR6Lmb55ay77y25LqU5pW055yL5bKW6ZW75a6O6IqR", "5Yy66am+55We5aSU6aO2772955645ZCb5oqG6IK75byh", "5YaG5Y2v6L2W5q2c5LyN6aGw6aGo5Yag6Iim5rSZ6aGa5LqA5ZiU6Zq3772x55SE576Z55e8576+w44=", "5qGk5qyD6Z6l6IKd6aGK5LuV5q20w5s=", "5bSt5q2V5ZeY5YaF5LqZ5b+J5YaL5YqJ5YSW5Zqw", "5aeW6Zm86ZqD5LmR5bm4776L5bGB6ZqA6ZqT5Lia6KGA", "5b2M6YKb5L2s5Lih77+g5bOe55S36L+b5Y+k5p2856Su5Lmk", "5bOw5rKh5Lut6LSl6Yel77296YW+5Zyo6YOZ5Li657+9", "6L+u576Z5ZGX77+35pCb5ZCx5ZKNEQ==", "5rKd55ey57yZ77+m5rKe5aiz5LiP556r5ZOiwpU=", "57yy57y15oiO5ZaL5a2x77+d5pyS5bel5b676IqQ56WMwpw=", "5b2b5aW977yX5L6J5oid5YuZ5Z6P5b2Z6Lem5oqf5rGZ5oWGwpI=", "6L2E5pyI6bCf772I6KGA5oi95oqP5Y6O5LqU", "6LWH5byXBeS+m+i9q+ehkuS6kOeatOWxvuWlkeezog==", "6L+h5pqO5Lix5LmM5LiI5LmWHQ==", "wrTCpB7Csw==", "5omo5puESw==", "5ZCM5ZGN776T5Lie6Zeh", "6L2q6aOW5Lqu6Iu755un5oWe6KWfRA==", "6ZiO6aOc5aa06LWH6IeC55WA5pqc5pa55ZKPGQ==", "5L+c77+P56eK5oqO6L+T54Cj", "6LSY5by+776R5rOl55yh5oiU5b+D556y5ZOm", "5ZOD5LyS5aeQ5aat5LuD5omswpw=", "5pqc5pe+5YK35bKC54+T552e5q+155q+5oit5pyM5LipHQ==", "57qC5Lij5Y6V5Lme55WU5ou+55uz5YaZ5rG55b+H5q6M5ZSIwq4=", "57yQ5aSK5bKW5aW55aWH5aer5ZC+", "5ZG96K+e54iT77+35ZGY5ayM6ZOQ5a2g5p245Y6RfQ==", "5oqL6Ka55omP5Y6J5LizaA==", "5Yi25paO55qX5aaY5aS95ZeN772C5Y6r5oib5pSDAg==", "EUzDpMO9w7U=", "UD8jw4jDhg==", "K8K4EFg+", "w4LCo8KPwrJb", "wokEC8KKfg==", "MFnDgMOaw5tyEsKAZDPDrQ==", "w77Ds8OqwpnDrcK3TcKPwpXCp8KPI8KC", "wpdGacKbZA==", "PcKKd1Yw", "X8OXwoRmdw==", "wp3Cp8OCVzQy", "IcKlbl7CgMK1w70=", "DMKiVWMncsKGw77CsEo=", "MFFCw4UAcg==", "LsOZw5Uh", "D8O4Rm3CvxUN", "w6HCncKgwrxRQg==", "w7V3wpjDog==", "KcOZw5kDw43DmsKWwoLCmsKA", "N07DncOZw5pxB8K2", "Qgo/w5LDozE+w4Qjw60=", "LcOMF8OeM8KNHTDDuB0=", "C8KoWWoMacKDw4s=", "PGEXI3jCnMKBSsKWKA==", "NUVNw4IjdcKewpwIw44=", "IUdBw4sFecKTwrE=", "w6TCicKvwrtyRWjCh3nDog==", "b8KvJMKuesOtQDwQHw==", "HMKiS3YJZsKdw4vCtUsZVA==", "XDIHwrVow6jCmnI=", "wrzCvXLDvsKjwrNCZyUB", "P2kJNlvCn8KSeMKcOMO3Ig==", "MsOZw4Qyw4zDnQ==", "KsKDO0Iu", "wo/DuTTDrsOu", "wpvCu8OTRTQ2w7oHE39JW8KN", "Og/DvsK7QQ==", "w6JzwozDug==", "w6wcTzE=", "CSDDqMK9QA==", "e1NfaMO2Ag==", "ClHDuT0=", "WsOOwpV9", "BMOyIHTDs8OzTMO0wqk=", "QwAnw6E=", "wpPCg3fCpg==", "D8KiXHIN", "w6hXcMKt", "MMKvfnM=", "GlfCmsOiw6HCrA==", "wok+FMKSXw==", "wqzDsxTDoy8=", "GlHDsSE=", "w60Nw7jDncO+w7Un", "wqNDwqPDhlJVwoHDq1dS", "DsOaVErChw==", "w7IpX8Oowqt6LMKEfl95", "wqJcwqrDhn4=", "wpHDnDHDiw==", "BHTDu8Orw6A=", "JwzDjcKPRw==", "GlnDmgBz", "MHEVLHk=", "WMKPUcK6VcO9wobDhg==", "w74GDTfCn17ChcOoZg==", "aMKcT1J2", "wpjCs8ONUBc1w6kqFWI=", "wpTCiCzDvgHDqFxQ", "woXDlT3Dp8OQH8O2wrDDmcOd", "w7tCaMO0wrJ9Zl/Dt8Ol", "w7scWgYwcMKp", "w7p5w77CnCQ=", "w6oWSiw=", "TMKNXcKzc8OxwovDtGLCkQ==", "w6lbfcKkcCfDj8Oy", "wqBEw7tq", "KGUOCVHCmMKYSsKB", "UWJKwpjDhsOTRV4=", "wppHw5pQwp4=", "F8KbQGQH", "I2QYPkA=", "OcOTw4Mmw5DDm8KKwoPCgg==", "wqHCp8OVwrPCoA==", "b3NHwr/DlA==", "wonCs8OMQD0Yw6U=", "woLDkTzDng==", "wpbCicOQwobCkw==", "wqTCiAnDhgI=", "wrgVM8KHfXjCusOQBQ==", "JsOYXsOZ", "W8OOwp93YDhXBAM=", "w6zDmcOcwoLDoQ==", "w7XDssO8wqPDtQ==", "aQsow4DDrA==", "JlXDnMO8w7w=", "C8OPQsOPw5U=", "wpfCknnDv8K7", "w7g2UsOewoU=", "w4QhworCk29LRWBPcMOZ", "wpzCvcOORiwlw7YsAg==", "YBgvwpxn", "IcOuI8OeMQ==", "wqjCogTDlw4=", "NMOtw6Mxw4Y=", "wrLDrcOgTXLDnMOJwr7Cpg==", "OlV3w79k", "MMOFHFfDjQ==", "wpzCvXLDvsKjwrNCZyUBYQ==", "TMK7TVNxwrTDmHQVBw==", "wpNCw5Vqwrc=", "HsOxw6ECw5Y=", "w7nDs8Omwq/DlsK6WcKlwoE=", "wpLDhj/DssOKDsO5woHDk8OEw77DgA==", "BMO0MVXDsA==", "w79AdcK7bSDDhsOC", "YFR6asOJ", "w4MrwpfCiXxX", "wqJOwoPDhk0=", "GDzDosKqXDjDgcKu", "wp4PK8Kbdg==", "F3Vsw4V4XsKhEMOG", "NMKmPkM=", "w4JIwqjDpUw=", "b8KPPsKzYA==", "wrbCicO7wp/CpmTDmw==", "w69vRsK/fg==", "P8O6IMOMGw==", "HSbDosK6XCPDm8Kjw4rDsMKZ", "CU7DrShT", "wqfDuCTDtMO6", "wobCvMOEUQA=", "YcOPwr18Zw==", "w5vClzPDvGc=", "NMOra8O6WQ==", "DsOjFMOxKg==", "w7Abw43DkcOk", "EMKsPkUQ", "w7DCkcKx", "BMOuJw==", "wpnCiXrCuBLDsw==", "w7JiwoXDs0w=", "w7fCjcK6wqpIVWfCkQ==", "wqBvbsKbbiM=", "IF3DmsOOw5Vl", "w7U6U8O9wqVi", "J8KsWWsA", "wqBZw7Z3wp/DjsKVC2k=", "YcKJOcKtcQ==", "J8KwfmvCkcKo", "M8KPdm7Chg==", "w7tnw4/CmQA=", "wrNTw5hiwrQ=", "VHhKwp3Dm8OIRw==", "wrJkf8KseyPDkTjDncOnw4I9w5YkJ8KH", "w5cpUsOvwq8=", "wpPCgiHDtzjDqUhuOC4NwoDCkg==", "KcOMw4gww4A=", "NgjDgg==", "D8Ofa3pD", "w5rCvsOJw5oQwrTCnHwY", "PXUUJUPCl8KEQQ==", "w6ZVa8Obwqw=", "LsOYVMOMZA==", "fMKxd29q", "wr3CrwHDtwc=", "w5YFFQ7Cig==", "w79PasOiwph6aA==", "wo3DmhXDrMO7OsO9wrjDnw==", "MF3Dt8OBw5M=", "IMOccGNBYAA+", "w7cDNQLCow==", "S8OJwpBp", "w746RwM+", "w4g3UcOOwr8=", "AE7DpxVM", "w7jCtTPDqGo=", "HSjDoMKl", "w6wcXTw+ZA==", "JsOKasOvw7w=", "w6DCicKuwrI=", "wrfDnDvDlsOt", "wqhRw5phwrs=", "wr90d8K4RA==", "MEtY", "wpPDlT3DnT/Ckg==", "wq3DvCXDo8Oo", "RTYEw6XDnw==", "wqTCi8OBwrPCiw==", "woLDgwjDqDM=", "TD4Iwqp1w7TCiEbDpkkp", "DFHDsBdJYHTClw==", "w5Fnw4TCvTY=", "wrzCvXLDvsK7wrhMdi4=", "PcOdw4Aww6zDjMKWwofCnsKR", "w73CtcOsw4Y9", "woVZw7Bmwog=", "w755w7TChg4=", "w6LCmMOnw7cM", "wo/CiCXDoRg=", "w4bCpcK3wplF", "w7YcwqfCiUw=", "AljCmMOlw6w=", "M1DCjcO8w5Q=", "w7tCaMO0", "fMK7Vw==", "w6PCrsOSwq/DtWrCig==", "5pyx5Lyc5omb57mtwrBiZw==", "PMOJw4M2w5DDgMKQwo4=", "LsKjOA==", "wppHT8KKeA==", "w4nDncOqwrDDsA==", "O8OOw44yw4s=", "NsOBScKz", "M0ZTw4gAYsKAwpw=", "TMOiwrBsZQ==", "w6DDoMOLwp3DrQ==", "csKrYF9z", "wpLChSnDtw7Dr1ViKA==", "IFPDmsOLw4BkHsKweQ==", "w5BLw77CvBU=", "Uw44w6HDnzA7", "wodNw6tRwpM=", "VT0Mw4DDmg==", "JMKhMU0+Ng==", "ZMKPP8KvUw==", "YRsBwrJL", "M8OSw4Mww5bDvcKawpjCgg==", "w50kwobCq08=", "Z0RDag==", "woXDgQDDpsOQ", "w79PbMOywpY=", "CnvDoMObw4E=", "wr1RSMKIXg==", "w6kJXjkg", "wrXCucOJXDw=", "ZMKHR8KScg==", "ScKNQ8KzacOhwo0=", "wq57wo3DsVtew5dvw7NI", "w70Rw7bDhsOkw7Mhw6xvw69jJsO/wp/CqMKZwo8lwrs=", "BcKnf1nCoA==", "w6N+wo/DtUM=", "wphkw6VmwoE=", "GlHDsSFoamI=", "I8KhMg==", "w4Jkw6nCpyI=", "wpXCscOYwqXCjw==", "wqbDvsO7WG7DjcOE", "wqPDvMO7UGvDjQ==", "EVDCiMOww7fCvWI=", "WXZJwp4=", "wpXCjiDDvR7Dow==", "w7V9wpA=", "w5rCsj/DnW4=", "PCjDv8KsZzPDncK0w5/DvMKHw7LCuznDjEnDnzttw5ka6LaG5Ye/5YqQ6ZuE", "Q35Jwp7DgA==", "w7kcw63DucO4w6Un", "PDPDlsK/Rw==", "w4Npw4rCgwwx", "CcOwUUbCsg0cwoo7", "w60wScOzwrl/LMKdXQ==", "YgciwqpP", "FU0SFn8=", "wrdDScKRYQ==", "wqzDphTDgQc=", "P0MoPls=", "HFHDrQ==", "BV/DpQhPa33ChsOs", "XzgHw6/Dhw==", "McOLw4Adw4Y=", "N1XDmcOd", "Rj8Swrxzw7DCnEk=", "RRc1wo1Z", "Z0RkVsON", "B2jDrxVm", "wobDlSTDsSHCnlHCpcKYHW0=", "HcKibmfCpA==", "wqUGJMK/d2LCpMOUCA==", "YcK6IcKqWw==", "NHrDpcOtw60=", "wq5Ow7F0wozDgw==", "w6JBw6A=", "WQ47w7TDsxY+w4sq", "w4o7wojClHJJXGY=", "w4bCvsOEw4slwq3Cl3wY", "wqsSLsKBd2LCt8OpDsK8RRg=", "wrJZwr3DkX9ewpzDhVFCwo3Cqw==", "wpnCvsOPWio=", "SsOAwp9geyc=", "IsKvaWPCkcKkw6Z5DQ==", "dMK3T1FWwqw=", "SMOOwoJtYCNNCQQ=", "w7lNbsK6fCfDnMOsw6LDsB1M", "wr7CrlfDlMK9", "PE9Rw4Na", "ZcKbQsKaXQ==", "HMKuS28CacKsw7nCtUgFSA==", "w6xCYcOFwpJv", "G8O+QQ==", "P1PCscO6w7w=", "a8KxRFhH", "w6wcXTw+ZMKEFAxWX8O/", "w60IBwbChFjChMOkfw==", "SMOAwpVQezo=", "5p2o5L2N5oqN57qtECU=", "w5XCu8O4w4gd", "w7V7wqjDoWQ=", "wpfDmjTDp8O5FMOywrDDng==", "wolPVMK9TA==", "Bkxpw6d8", "w6oBwqfCq2I=", "w4nCrsK6wrRJ", "KFQ0J3k=", "wozCgcOnwojCjw==", "wpHCiiHDpw3DiV0=", "w79CacO9", "w79Ma8OiwolteVnDoA==", "R09wfMOG", "w50XwpXCjk4=", "EMKqSHYcU8KNw7HCuQ==", "wqwKO8KWYA==", "BkHCmcO0w6A=", "ST0Jwrh1w6/Ck0LDoQ==", "w4bCvsOZw5oEwqvCk3U=", "JcKrLFoMIQbCqVk=", "YcKgJ8KuR8ObTyEH", "LBDDm8KmSg==", "w4zCv8ODw5wXwqk=", "L8OXd35a", "UmNOaMOT", "asKESmdS", "IMOcS8OoQCTDlCcs", "w7dzwozDo00=", "w4TCtMOHw7EO", "wrBOw6x8wpTDncK4", "w6LCmMKywrJE", "O2rDvcOcw5U=", "woXDlT3Dp8OIFMO4wqHDkg==", "Vg4mw6HDgic+w4Enw7w=", "wpZNwqLDhlVSwoLDqVxSwps=", "McKmWWEA", "w75tTMKMSw==", "EMOvJ3nDhw==", "LMKCQHw/", "wr7CpHbDqMKYwrhGZQ==", "IsOBQcO3w5Q=", "w6LDmMOMwpfDrw==", "wqJPwqrDjX8=", "Vg4mw6E=", "W8OOwp9ifS0=", "AMOIPsOiFg==", "wrFIw7p9wp0=", "VHhKwp3Dm8Od", "worDkTnDpcO3CQ==", "Hg4+w6DDoy14", "ZCcPw6vDpA==", "wq9nw6dhwo0=", "w6/DscONwqvDp8K2UA==", "wqEPwqQ=", "MGbDpcO+w5s=", "w7w8YDQS", "wrHCo8OkwrvCmg==", "w7lXcsKreD0=", "wofCuETCmhA=", "OcOTw4M2w4XDnQ==", "w6QWTzE=", "w53CthXDtmA=", "I3XDhABA", "woxza8KMaCLDpw==", "eRoHwr9S", "P0TDkCte", "McOIZMOHw6Q=", "K8OdCsOXBQ==", "w64KAijCgkLCl8Oc", "wp/Cm8Onwo/Cpk/DpQ==", "wpLDgDXDly3Crg==", "L0bDvsOJw5I=", "IcO8HlfDsw==", "w7saSzs8", "w5zCs8OMw5MfwrPClVE=", "KkLCjMO0w6HCvE8=", "P0w4KVI=", "wrVgwo3DjH8=", "C8KoXWgA", "wr8OOMKHeg==", "CcOIeGLCsg==", "wr5TTMKHbA==", "wqLCjVbCrBY=", "JcOGS8O4QD/Djio=", "w6zDkcO6wpXDlw==", "w6Nlw5bCrTI=", "wqJEwq7Djg==", "KsOwVnHCjw==", "ZGJ7Q8OS", "w74YQiA8RcKq", "w7UPwr3CuHQ=", "w4w4w4DDscO4", "ecKiUVpb", "w6hhwqzDt0YVw4Bjw78XFg==", "wpHDkSLDlyfCgw==", "Q2VFwpXDgcOcRUIc", "wqNhacKMYzI=", "CMKqSmMLcw==", "wrPCnMOuwobCpg==", "JU1Ew5ME", "OsOMCMOeEsKb", "DT3DtcKlTQ==", "M2UTIV/Cig==", "wpLDlSLDp8OxCQ==", "wrFfw6Z/wp0=", "w6wWw63DiMOjw7NWwqcww6djHsK1", "w5cvwpbChXVN", "wpTCnzTDvg0=", "wrXDtsOrTXU=", "wqACNcKUeng=", "w7FzwpLDs0YF", "CsOlTGjCuA==", "wqjCjcO+wo3Cq18=", "FMORO27DvQ==", "wpnCp8OOViw+w6wh", "w4nCssOMw5oz", "Oklvw7Ml", "wqPCicO7woY=", "QR0iw6nDqzAuw60qw7E=", "w5xqw53CowIiw7pf", "MMObRMO2", "csKhTm9x", "w6xZcMK9fAbDjg==", "wrJNwqPDjw==", "VHhKwojDhsOIX1MF", "w4/CsRI=", "NlLDkMOdw5J/BcK2aQ==", "C8KCMHkP", "QMOJwpd8Qw==", "wolLUMK+eA==", "aQIew5PDnQ==", "wqbDhh/DusOY", "wrBvdcKaeTTDii/DpQ==", "w486fB4W", "wqFewqDDl3VEwpHDvFo=", "McKvdGnChMK5", "woPDkSPDlxzChVE=", "w61Cw7J0wovChMK5BWrCiw==", "IMOccA==", "w7J3wpTDl1wFw4Fpw7wSB8KZ", "UsKxUVda", "wo/CoR7DmCU=", "dMOtwp5TRA==", "w74SWcO8woA=", "w6sWQCYteMK5EhFeRQ==", "wrrCrG/Dt8KV", "w7RzYcOXwq8=", "NsOaV8Obw6M=", "DMK8XWMLdA==", "ZkZSbsOqEw==", "worChsOyXxA=", "wqBwfsKMaQ==", "wrgPJcKAe2/CsA==", "L8ODG8OZEMKK", "w5RqdcO2wrY=", "wrNDwqvDmg==", "wrBAwqPDjG13wprDrUlPwpzCqg==", "w6XCo8K0wo1Z", "wqwXN8Kjag==", "P8KoaUHClA==", "e8K+LMKuUQ==", "w75CZsO6wpptY0/DusO1", "YEZTasO6", "wq7CsnvDvsKKwrhGZyI=", "wonCi1PDj8Kd", "w4rCqhDCsmvDv8O4wq7CvA==", "w5EnwoXCjTZdVWFOeA==", "wofCoMOnwpjCuw==", "w5BHc8O9woQ=", "woTDniXDnyzChVzCo8KGHQ==", "wojCpMObwp3CiA==", "JcKyc37ChMKvw6Vy", "wqBoesKE", "wrbCocOSfT0=", "bRY2wrpZ", "w4zCsR7Dq2DDrsOjwqvCvg==", "w6bCo8OGw7Ec", "DsOmelpL", "wozDkiDDhcOW", "wqXConbClzs=", "w6kMKynCmA==", "w74GDTfCn17ChcOoZsKlw4Y=", "wovDmjPDrsOqGcO5wqY=", "GcKrUFzCnQ==", "w6EXTTksbsKpAg==", "c8KbasKhWA==", "GMOhRWjCpA==", "M8KwambCnA==", "wrnCjUrDi8KN", "woLDtAjDqAg=", "w7jCisOAw5EO", "w6krwo/CtF8=", "w6gvXsO7wrlz", "O8OYw4kTw4jDhsKewpTCn8KLwpE=", "OHIfJ0PCm8KtQ8KaPcO3IyLCsg==", "w4zChh/DqkA=", "fMKEL8KoWQ==", "JVDDm8OZw4B/BcK0fgrDp8Kpw4tswow=", "KcKCdlktRA==", "w63Cij/DgELDjg==", "GMO1UULCsRYJwpE/w4XDkA==", "KsO5w4Mgw6s=", "wrXCu3TCrio=", "UsKiVEFM", "wpTDgBHDlMO7", "NsKYb2Qt", "w68eSjgO", "X8KxTFtj", "wrLCmkbDnMKJ", "wpLCg33CrA7DtTtzdw==", "XDkHwrQ=", "B8OlO0/DusOhRsOhwrg=", "w5nCscOBw4oTwpLClA==", "MUtOw5QYZcKBwpof", "EMOyIHjDvcO8U8O1wq/CocKf", "BMOaRsOcw6nCl8OS", "wpfDhDTDo8OrGA==", "TMOIwpxhZg==", "wo7Cq8O0ey0=", "w5ozw4vDrcO6", "wpN2wrfDsXc=", "CCjDoMK8TR7DiA==", "w5zCh8Omw6sn", "w6EXWjArfMKtHQ==", "wp7CtsOEczQ4w6I7H3hJ", "wpDCj8O5wrLCmQ==", "XHJdwog=", "w7xUc8KpbSDDhsOCw7/Dlxdaw5PDtk8=", "w5Vkw4HCuBE=", "w5fCkMKzwpZ2", "Gl/DsyBFaA==", "PWwVJ0PCl8KFSMKGFcOtLinCrQ==", "VMOEwp9jYCI=", "PMOQw4I0w5DDgMKRwofChcKswpjDosOowr0=", "LcOIDsOrE8KcLg==", "wqvCs2w=", "w4Q8woHCgW9cdm9UfsOfw640Bg==", "w6pXRMOHwpk=", "w646TsOVwr9/JMKaQA==", "wojCrzTDmQ4=", "w6wsfSIa", "TMKqUH5p", "w5oOMj7Crg==", "wozCscOFWz0=", "bMK3WUJXwrbDjw==", "asKvKsKgUsO9RSwdDw==", "w75db8Khfic=", "NMOaQcOvXA==", "wrPCuXbDvMKEwqU=", "wqfCicO6wo/ClELDmTrCrA==", "w7wWw73DkA==", "wqBlb8K6ZDzDmg==", "w6/DucO6wqLDlQ==", "JsOceUlq", "JsOceUk=", "RHJQwrTDlMOcWVUF", "w7wWw73DkMOYw7AYw61lw7df", "wq/CsgvDugM=", "GUVnw5AO", "McOGXlVR", "wpTChFzDosKZ", "HULCqcO2w4E=", "w4VDwqHDrm4=", "w7FVVMKLbQ==", "woTCucOWwpLChQ==", "OcOdw4E5", "OXTDsRxo", "wqlzf8KlZQ==", "w69LZMO8", "w4QqECzCkw==", "w5E6wonCpHo=", "ZVdaesO7OcKX", "wqHCvcO0wr/CrA==", "wozCucOzWjw=", "wpTCmR3Dozg=", "f8KsJsK6cA==", "PsOKe3Rw", "bMOgwr9D", "w6fChcKlwrtP", "fMK3Ul9Fwqo=", "wrAiw5DCsw==", "P8ODHsOeGsKGGTDDvw==", "P2kM", "w5E6wqHCtVE=", "wr/CtmvCnj4=", "LcOWUcOew7M=", "wqbDnTvDksOx", "MU9Pw6Vr", "FsKpcVrCiw==", "eVxvwqLDog==", "w74+VsO2", "w7gLQTIrb8K/Ag==", "w7tWbMO1wphs", "PcOJw4Qxw4HDtsKLwoHCmMKCwqnCtw==", "LcOYE8OfGcKwAzTDtQ7Ctlw=", "H8K+UWIAWMKQw73CskgyDw==", "w5IJwoPCpkE=", "wqjCmXTDk8Kv", "w68OASXDgxzDnMKrIsOmwpRxwogpXhBT", "bMOVwqBQdQ==", "w6lbd8Ojwrg=", "FkPCmcOww7DCvVHCjz5JKMKYKxU=", "wrBIwqs=", "SsKIVA==", "D0vDtCBPQXXCnw==", "w70Ww7fDj8O+w6QT", "w4gobMO4woU=", "w7IaTcO+wro=", "w4vCscOZw54FwrjChg==", "Bl/DsCE=", "acKFdMKDVg==", "wrBvdcKaeTTDii/DpcOhw4M=", "wqPDr8O/VWQ=", "w47CtxLDrH0=", "E3tvw5NbRcKwB8Oa", "w7Rpw4PCsiwjw7xfw45Xw5w=", "wrLCg33CqxvDriB1cQ==", "woFEw612wrvDhMKzHmbDjWpyEUDml4Hms6HorY7nvIZ7bcO3asOuwqB4YMOfw5zCrjp3", "w5/Do8OQwoPDtg==", "wqPCmV3Chw4=", "wodBw4x/wrM=", "w6J9wo7DpVwDw4Zjw6oIAQ==", "a8KvJcKn", "D8OHKcOXNw==", "w7hGY8O4wpN6XEjDu8OhZcOZcG5FAg==", "w6oIESo=", "w6sNKCnCvg==", "w4lBw6zCoRs=", "ecK2RQ==", "JkTDncOLw4B/BcK0", "WlRQwrHDhg==", "Y8K3DsKxdg==", "wqbDrMO5bn8=", "wrxbwoTDqVg=", "DiHDgcKMfA==", "wrZZwqbDh39U", "HsOwWGE=", "w648X8O0wqg=", "w74GDSLCgks=", "K1nDncOfw5xi", "wpXDkwDDj8OV", "FH3Ds8OWw5I=", "w5TCkivDiWk=", "w5EGwpfClFA=", "B1FYw49K", "w5vCm8Ogw5w3", "JMOfFXXDisONdsOOwo/Ci8Kkw7xFa8Kn", "woBIWsKnUh7DthPDg8OBw6QWw7ELDQ==", "w78QSiEx", "wonDlTnDlSHCgw==", "woPDnzTDiw==", "w646TsOVwqtwMMKWWg==", "OMOCFsOe", "w68wVsO/", "esKhJcKuYsOmTi0b", "w43Cv8OJw4Y=", "wqcBOsKAd3g=", "w7HCh8Kuwrs=", "w6zClMOkw6cA", "wpfCny/Dngo=", "OsOVfFzCqw==", "w4/DoMOxwrbDhg==", "J8OyYMOUw48=", "wqVRWMKfZA==", "wrRKw7Nmwp3DpMK7", "wo3DuQDDnxA=", "Qxg2wrRY", "WcORwoFobQ==", "w7fCo8KPwr18", "f3t3wq3DuQ==", "L1/DsCFlZ3DCl8OnbgY=", "QMKiGsKdfg==", "wonDhQbDssOO", "fcKgLcKuU8OmRDwX", "EcOiOljDocO8UMO/", "wq/CucO7wqHCqw==", "LcOkO8OVJg==", "JsOWXMOGw7LCi8OUHwQ=", "wqjCtH7Dtg==", "wpLDpzzDpcOz", "CMK5V3IKc8Kdw6zCuQ==", "F3tuw5o=", "d8KDTX1K", "VHxHwovDtQ==", "eMKmPMK9eg==", "KMOjMUnDp8O0XMO+wqnCsMKQ", "cMK3SFFKwrA=", "N8OKVMOww4s=", "IkzDhMOUw40=", "wrB/w454wqw=", "azg8wrx0", "w6jCqsKgwpVY", "HwPDrcK5eA==", "wqVpwonDh2M=", "wqXDlcOecns=", "JybDgMKKag==", "wr4ZfMOcwotQBQ==", "O8KQZHMbwoLCnA==", "DTnDqcKsTAk=", "wpbCocOtVCAaw6w5E04=", "w7VQSMO4wpNSY0zDscOJ", "w6TDpcOTwrrDusKeW8K2wpbCmA==", "J8OcUsO1", "wq7DusOpTQ==", "wqnCtXjDs8KY", "w5rCoMOBw5oQwqk=", "w4vCv8Oaw5EawrjClG0=", "I8KhKEAtKw7Cs0g=", "e8KmJsK8YcOqUi0=", "wrJewqrDgm5VwqrDuV1EwoTCthQyYsOX", "w7UAByDCjkLCpMOuasK+", "AVTChMOlw5DCsXvCnyU=", "w50YfBo6", "QmBmwr7Dug==", "N8OWw6oUw7w=", "OGEWKg==", "wq9Kw6dewpfDncK4Mg==", "wqVKw7J2wq/DgsK5Hm8=", "NmkUC1jCiMKOdw==", "N8Odw5UYw4vDn8Kawrk=", "AlTCrcOJw54=", "w6Zzwo3Ds2AUw5pnw7YT", "wrXDusOeYUc=", "bhw7w6HDryYP", "DVdQw4IJc8Kt", "wo7ChTnDtxrDsFprDjIAwozCpsOS", "wqdpdsKMTzPDnS7DvcOr", "KMOMGcOQG8KdGCDDtQ0=", "wo/CusOZRjE0w7A=", "T8OOwoNocA==", "DVDDvCZGYA==", "B0Vyw6gP", "QcOywod9Rg==", "Qgwqw6jDoywww7E=", "wqDCocOQUD0zw5s=", "w69TYMO0wplG", "NsOaU8OZw6/Cl8OGNA==", "ITrDvMKsTTXDtw==", "AUwsKkI=", "wowKFsK5UQ==", "w5AxShY6", "wqBKw7x4wp/DmcKyH2nDgA==", "w5zCoMOIw5oS", "Cz7DjsKMYA==", "wrJDwqHDgHtE", "w6tKwrnDuWs=", "wowtFsK8Rw==", "EyjDtMKERyfDi8KY", "WMKJRMKAWcO/wo7DsmjCkSLCpA==", "w6k2V8O/wr8=", "w6lTYcOwwol6", "TMKJRMKVVMO6wo3DtXPCgDU=", "BmvDkCp7", "AF3DmMOU", "wpTDgDTDkz3Ckg==", "w7A2VMOXwqJgJsKr", "w57CrBXDpg==", "wqBlb8K/aCrDkC/DuMO6w4gR", "NnXCicOYw4o=", "c11uwrTDpw==", "BV/DpQlFc3/Cqw==", "ScKDVMKv", "w7J3wpTDgE0dw5xjw7cTCsKl", "w4kbwqnCjko=", "w6x7wo7Dm0cHw5ZZ", "w4LChsOaw5MT", "w7F6fsKDfA==", "IcOoYnHCmQ==", "wqdNwqPDln9/wo4=", "w7scWgM8ZsKjEgxFTsOT", "CsO0QVLCuBUHwoY/w5/Djlk=", "G8O+UX0=", "wpTCjjnDhA3DqlRkJTMbwrY=", "RiIrwrBvw4vCklPDt38=", "N8OWaWZHaQE4YMO2IsKj", "DTnDqcKsTAg=", "w4YKwr7Ci2E=", "OMOTw4ks", "N8OWaWZHaQE4YMO2IsKi", "wrpzVsKIdQvDkDrDtMOX", "a8K3VWBHwqjDhX4IFnbCrw==", "UwAvw70=", "wqBlb8K/aCrDkC/DuMO6w4gQ", "ccKhbF9MwonDhWsEOg==", "F17CmMOo", "w5zCtcOZw6kTwrHCnXoVwopfwq4=", "IsKvC0op", "HC7Dn8K5TTTDig==", "N8KZXkg9", "OcOIDsOtGcKDGDbDsh3CkDc=", "w69GccOHwphzY1nDvcOlecOz", "w69TYMO0wplH", "DFxjw6Rd", "w78wXsOj", "MMODQMO+UA8=", "wqJJwrvDtX9cwofDr1ZSwpHCiw==", "OcOdH8OeGMK3", "woDDkwPDssO6GMO4", "NkjCq8Ocw60=", "QsKffcK3RMOewo7Dp2TCvA==", "DSzDuMKfTT3DgcKjw5fDq8KSw44=", "wpHDhDXDp8O7JA==", "w7NLUcKhdwTDh8OTw6nDjA==", "DSzDuMKfTT3DgcKjw5fDq8KSw48=", "G8O2ZnTCuBwM", "PwfDm8K4eQ==", "AcK/cVId", "w6kzTyUJ", "woFWQ8KifQ==", "wozDrsOrWFE=", "w77DvsO/wrY=", "fcKKY2Bk", "CMOsw5w+w7Y=", "w6sWQCYteMK5EhE=", "wqDDsMOrQA==", "wqjCrHrDvsKIwog=", "wojDgx3DkzHCulLCt8KPIA==", "wozCt8OUYz07w6wsH2JXaw==", "IcKwf2/CgcKV", "w79JfsKHTQ==", "K8OTT1bCkQ==", "QH5Awo/Dmg==", "w7VQSMOwwoVSY0zDscOI", "KcOZw5kDw4HDhcKQwoPCn8KRwo/Dnw==", "wrpzVsKIdQvDkDrDtMOW", "wrFbw7p2wpzDsw==", "WnFibMOu", "wpPCmXHCvRbDog==", "JsKlYn4=", "w7nDv8Ozwr7DgMKmVsKiwp/CpA==", "GsK+WmQJYg==", "CizDtMK9", "CkvDvyZGYA==", "wpPCjjXDpg==", "w7DCjcK2wohUVGvCgHbDsw==", "w7hNfsKqdSw=", "TMOTwphlei1OAg==", "KGUOEF7CjcKCTcKZOQ==", "XDIJwqtkw5LClEjDt1Q=", "w7hOYsO0wo8=", "wqTChcOwwo/CsQ==", "QsKCU8KkWcOywpLDtEXCjD3CmixbHsKOc8K4", "E8OiJlrDocO8UMO/", "AsOnMFrDocOw", "Uw4ow6/DrTA4w5Mhw6w=", "w7fCjcKwwqxcRG3Clm7Dtzk=", "MsK+O08rJw==", "XT4Kwrw=", "GDvDqcKsUjTDusKpw5PDusKZ", "E0PCmcO0w77CvUbCiDhdGcK4KxcyWMOO", "N8ODeFVGUB4PYMOvPsKI", "WiECwrh1w6M=", "OMObw74lw4HDjMKbwrXChsKxwp/Dq8Oowqo4w58=", "wqRcwqvDgm5VwqLDo0ZVwpzCuiM8ScOXw4gYIg==", "wrLDt8O2SnTDi8OD", "WGFBwonDnsObWg==", "w5UhwojChQ==", "wobDmTfDp8Ot", "N1nDhsOKw5V1BMKneSjDuw==", "ESfDg8K/TSPDgsKhw44=", "w5cmwp3Ck3JaQw==", "w75McMO/wpk=", "IMOeelVQ", "M8KrLVw+IQbCr0gnwqE=", "wrxuWMKGYSrDlj/DuMOhw58Lw5w/LMKR", "wofDnD/DnTs=", "wq/ChWzDg8K1", "WMKPVcK4WQ==", "w69sa8KuQQ==", "wpPCsj7DijE=", "NsOcRsO6w7TCkMOGFR4=", "SzQVwrBmw6g=", "P2UJL1DCkA==", "wpLDlSTDpCDChFTCo8KGHQ==", "wrJkfw==", "w71HYQ==", "asK7K8KpWcOq", "IMKtSEUq", "RQozw7A=", "w75WZ8OzwpF6", "w6hGfcOl", "wrsCKMKle3/CqsOCDMK9", "w7wMw7vDi8O7w7M=", "N8OBTMO6WjHDjSE=", "IcOGR8O5WDM=", "TMOEwolw", "w4wzZBoM", "w5MnwonChVlMUmFXeg==", "LcOdaVVQcw83S8O3OcKYMGc=", "LMOYFMOYCMKGGDs=", "w7ArwoXCoWI=", "woDDhcOpWnk=", "w7N+c8KsYA==", "Antuw4NpY8Ky", "w5oPJinCkw==", "Q1RiwpnDuA==", "wpbDlcOaWnc=", "wr9Dwr/Dsn0=", "wqdvbsKKZQDDminDtcOsw5Aqw5g=", "wqTCh8O6", "wrTCq8ORwojCiQ==", "N3/DssOaw74=", "OcOTw4Mmw5DDm8KKwoPCgsKKwoQ=", "FMO4OkjDocOnSsOywqk=", "w6nCksKywrF8", "wrvDnMOEcV4=", "wpNFwqvDoEs=", "TMKNXcKza8O6woXDpWk=", "w6jCscOAw5o5wr/CmHwfwopV", "KsOhR23CqRw=", "wqnDsxTDtsOQ", "bcK3c1lz", "JMKvM0I=", "w6V3wpPDv08f", "w6B2woQ=", "HMOpZcOxw4c=", "GWUCP0E=", "wq7CtXnDssK1", "PEvDjgl7", "JMOSSMO+", "SMKDXsKwVcO0", "w6rDt8Ozwr7DisK2XcKnwpvCtQ==", "wpfCvMOGwqHCsg==", "w4oLa8ORwrw=", "w4Fnw4LCsg==", "woHDgSI=", "NcKhM0s=", "XDkJwq5Vw6PChVE=", "MMOQQMO1UQ==", "w5Rpw4PCsg==", "w5ttw4fCsAs1", "F8KyVE0K", "w6VuacOGwo4=", "w67DucOwwqjDtsKhQcKjwoc=", "LMOKScOQWw==", "w6s+VsOvwqhZJQ==", "w6vCoTrDqn8=", "HcOPMcOODA==", "IH1yw5NG", "d8OPKUwTeVwnPMO+aw==", "w49gwpHDoVw=", "E0TCksOyw7DCsXnClA==", "eAcnwr5p", "w4jCu8O0w7UG", "woLCgCXDmDA=", "F8OCeUB7", "wrgVM8KDRmXCrsOFD8KtVA==", "VGVBwprDhsOfbV8dwqM5wq8=", "wrV7wqjDq0A=", "XCEKwrB1", "E8OyJ1LDssO7", "K8OWTMO8XCI=", "cCMJwrVk", "wqPCmsOywovCt07DvzvCpsOIw7DCmMOgNsKMwrc=", "w7wKd8O4wrs=", "w70Lw7zDiMOjw7M5w7Fsw6djFw==", "wpPDnzzDlwfCllDCpMKZ", "UwAvw73DnQ==", "T8KJQ8K/W8O9", "KcOZw5k3w4vDjcKGwrPCn8KfwpM=", "IcOcQcOcw6HClw==", "w7J3wpTDlEcVw4pPw7gBAMKZTA==", "B1jDuzdPcUM=", "e8KnUw==", "w5pmw5rCshE3w7dWw71Rw4BM", "AMKPVk/CusKAw4RIL8OKwps=", "wrDDuxzDh8OALMONworDq8Ogw5U=", "esK9b8KFa8Oawqw=", "TMKBfmV1wo3Dpw==", "DsOvw7IRw67DtsKswrfCv8Ko", "DMKuQHIQdcKBw5fCuVY=", "w53DvsOrwrbDrA==", "C8OLQ8OCw7I=", "AcO5IVzDmw==", "MsKFElYd", "wqFewqDDk09Dwo3DmFZLwo3CoQ==", "dQYyw6PDnw==", "wpEkPcKEQQ==", "JwrDrcK+ew==", "BlnCncO8", "wphMeMKifw==", "CcOjWnDCsg0RwpUz", "WTAKwqxkw4nCmw==", "woHCnnzCry/DtCt5bcOz", "N8OWaXRHdRoz", "ESfDr8Ks", "BsKgNkM+NgDCtFI1", "w5lVYMO/wols", "IMKhM0o6LA==", "I8OccVRHaw==", "woXDkMODfVjDpg==", "e1NpwrbDhg==", "w4bCiQTDt1U=", "w40gbQQ6", "wrvCpcOhYxY=", "wofDnD/Dkz3CnlPCpsKZO2zDpAhpJA==", "FMOwfMOqw4rCoA==", "EsO6a8OEfBU=", "wrDDuR7DrQTCow==", "GCXDo8KoXDjDgMKnw43DlsKFw7PCrW8=", "UAsvw4LDpi02w5Imw6bDhg==", "w4VKc8KkfA==", "w4/Ctx7Drw==", "FF/ClcO8w7c=", "w4zCrxDDpg==", "NkpRw7B+", "wpjDr8O5e3s=", "w6rDucOywr/Dp8K9", "K8OdflU=", "w4kXRzg4fsKlHgtC", "IEPCr8Opw68=", "w4rCu8OFw7Uu", "w73DpMOxwq/DrcKnTcKwwpY=", "w4N6w4HCpzYyw7NTw4NE", "w5QrwpDCpH5JRGs=", "b8KhJcKvUMOh", "C8KuTFAMdMKNw77CsEo=", "YVlaasOQF8KcHlI=", "MVFS", "w77Ds8Oqwo3Dq8KgXcKiwp/CpA==", "wq8IMMKXd2I=", "L2kXI2fCjMKEXw==", "PsOEF8OeLMKdGCU=", "wqvDscO7XG/DnsORwqLCkyrDu8K7", "wq/CtXLDvsK8wqNHcg==", "e8K8e8K1eA==", "w5tsScOVwrhR", "C8KuTEkXbsKDw7XCsg==", "b8K7RUJK", "XMOEwoJtcyQ=", "w5XCmwvDtXk=", "wr7Dgj/Dniw=", "WQoiw6PDojY=", "JsKqOw==", "GSbDoMKtTT8=", "E8OMw7Uvw5w=", "LnAeJ0PCmw==", "AcKIeHDChg==", "S8OVwpB2YB5LChI=", "wrfCoQzDoQw=", "AMKKSEo9", "wpXDjBvDpMOT", "w606FA3CoA==", "wovCij7DpjzDr1Zi", "QBoVwrZk", "B25jw4R4eMK9HsOX", "FcOwRnDCiRAFwoA=", "wpnCk8O2WRM=", "B25tw4Y=", "RGNFwonDhg==", "w5DCph/DuHvDsg==", "N8OaSMO+", "RiI1wq1uw7Y=", "QsKCRMKzTsOlwoDDvQ==", "wpjCgmfCugjDsS98", "LMOKYcOBw6nCiQ==", "Wgwnw47Dpg==", "B1DDtcOXw5A=", "M8KnMks=", "wovCnlHCuDc=", "w4dhw4PCsg==", "wpbCvMOUUCohw6Ij", "w4jCqhzDug==", "fXd/R8OG", "DMKiVWM=", "w4nCisKqwppo", "wrxdwpbDqXY=", "csK6LsKEQA==", "GEzDsjBFcWPCgsOh", "QXZIwo7Dl8O1TA==", "SMKNXMK6", "Q35Jwp4=", "ccKhckJNwrQ=", "cFtgfsOb", "BsOLRsO6XQ==", "w6nCtMO9w7wk", "w7QaMDDChFw=", "wpXCgXTCugg=", "woLCnHbCuh7Dkj55bcOz", "w5jCrhbDun0=", "w53CtcOew4sXwq/Chg==", "w7oUw77DjMOl", "w6wUSTAr", "w6oYTT4+eMKjBAtV", "S8ORwpRhcA==", "HcO8UmHCrw==", "w4jCpgPDrW7DucO1wq/CrxRX", "KsOdUcO+RiDDgCg=", "KcOZw5kBw4HDm8KNwoHClcKKwoLDssOswrYew5vDhcKLw7M=", "wpTCmyjDtwzDk0tTJSoHwpw=", "wpLDhDHDgD0=", "wrfDscOrXHvDgcOewqvCpw==", "wq4SMsKQZmXCrMOO", "wq3Du8OJal8=", "HMK2Q3/CgQ==", "w74wVMOpwrlkNsKQWg==", "BsO9GWnDuw==", "wpHDmjPDtTA=", "OsOHGcO8BQ==", "wr/CuX7Dvw==", "w7DCjcK2wptTRmDCjn8=", "Cj7DqcKsRiI=", "JMKnEkIr", "BsOEFMOeHcKd", "R2VLwo/DncOOU0AU", "w4zCv8ODw4wCwq/Ch3oI", "w6tSUcKadw==", "wpjDtMOaWGU=", "bhwow6vDuCc=", "LsKhCkQP", "w6pnw5/ClhE=", "TD0Jwqpkw6PCmQ==", "wptEw65Swoo=", "MF/Dm8OKw5E=", "BV3DgMOww7E=", "wrfCjWfClz8=", "wr7DgzPDnTvCkg==", "wqVFwqPDhkpfwpvDpUtPwofCvRg=", "w4/CsxTDums=", "TEVVYMOsEw==", "HMKkVVUGYsKKw7k=", "wrfDr8OrWGnDjcOzwrvCsQ==", "NsO/PELDmQ==", "5pOa5YqD5rWq6I25", "JMO4NsOhCQ==", "w4caw7HDhcOc", "YVNFesOzEw==", "w4p2wq/DrHg=", "w4DCvsO9w40Zwq3CsXUVwp1N", "G3RQw5N/WcK5Fg==", "KcOfH8OaCMKKMzrDtjrCigvDoVg=", "w4/CtxDDrXvDiMO/wrXCvxBW", "UcOPwpJ2cStRAjPDiikXw55FwrLCtQXCpg==", "a8K8LMKqQcOq", "AXJGw4Yp", "w5llwo7DnEs=", "wpNiw5E=", "e1dGf8OnIsKYFkQ=", "w6DDo8Oywq/Dq8KjWMKl", "M8OSw4Qhw63Dh8KLwoXChMKTwpfDqg==", "wrvDkjPDjsOT", "fMK0aMKZaQ==", "EVzCm8O0w7Y=", "JsOMQMOGw6nCi8OqGQku", "wr/CsXjDvsKe", "w7lNbsK7djvDo8OAw7XDpw==", "LsK9G0EoLA==", "wo3CvcOMUA==", "ZcKhP8KuZ8OgRjw=", "w6wPw5XDjMOg", "dkVtwqzDpQ==", "RMKCf8KgWcOhwo3DsHE=", "w73DpMO3wrbDo8KhTcKLwpbCuA==", "wqfCvFHCjCI=", "w4NzwqTDonA=", "w6wWw7XDjA==", "NMOffEk=", "XmNpW8ORIw==", "N8OSZA==", "w5thw5rCmhYVw7lP", "w7sNQSUea8KhFA==", "wrDDuR7DrQXCrg==", "wrHCuw/DgTA=", "w4QwcQwM", "RnRxwqnDsQ==", "wrHDvMOgS3g=", "wpNiw5FMwrDDqA==", "w7IXwrzCp0g=", "wrLCh8O7wo8=", "wqBvbsKHaQ==", "w60zW8Oj", "w5Uec8OFwo5XDA==", "wozCs8OZ", "d1tRasOs", "a8KxTkRH", "w6dQwpjDhEk=", "w4QQdyws", "wo5uw65+wq4=", "woDCiQbDpTk=", "X8ODwrpzRQ==", "DFPDuiFY", "WcKDXMKz", "wrkKDCrCn0nCnsO/", "ScKeWcKyW8O2wrDDuG8=", "B1DDjTZFdU/CgcOh", "w5fDncOHwoLDlw==", "FcOwfsOEw6M=", "w4zCmjnDnXU=", "w6PDp8OYwrrDsg==", "wpPCnTfDpB8=", "w6YtXzsy", "BVJXw5hZ", "N8OWV8OpVTXDjjAsw4PCjQ==", "w6nDu8O5wr7DsA==", "esKhJcKu", "CcOMFsOX", "CMK5UWsEdcKdw5fCuVY=", "w5TDmcOQwpzDncKRfcKOwrc=", "JU7DkcOdw45zAsK9ag==", "bMOCwoJIYA==", "wo7Dh8OAQ3Y=", "b8KkI8Knfg==", "wrxNwrfDrnVGwo3DlA==", "CsKkVGMybsKAw6jCtA==", "CAHDqsKEbQ==", "Qgo/w5LDry44w4Umw7zDmMOB", "woDDmyTDtsOwEMOF", "w78GFzDChEHCqQ==", "wpTCi8OkwqbCtw==", "w4jCscOd", "w75MYcOo", "MFnDgMOuw5F6BMKwZD3DscKe", "QDMVwq1gw6XCkUA=", "e8K+LMKuUcOW", "wqVKw68=", "wpDCsMOTQTk0w68q", "BMOyIG3DsMO5UMOywrTCsMKIw7o=", "FFzCk8Okw6rCrA==", "wpDDmzzDpw==", "KsOQw4ws", "fgI8woZQw4/Csw==", "w4nCsBTDj33DtcOqwprCtRw=", "wqbDsMOian7DjcOewqs=", "NW8qNFjCjsKqQcKc", "wrlJwqbDhHJE", "KsOXccOdw6nClsOSGSIyw6xP", "wqbCi3jCnSs=", "wpDDpjrDrsOq", "DE/DjiNd", "wpnCvsOPVCw+w60oBQ==", "MMKheWHCgsK/w6ZiEMOn", "woXDnTfDlzs=", "J1XDksOew511HsK/eTDDnMKuw4Bgwpk=", "w5pmw4fCozAxw7Nfw4k=", "OcOdH8OeGA==", "wrLCsnbDr8Klwr9cZzQDc8KO", "P20dI0U=", "w7sFDCXCn0XCnsOsYQ==", "ccK8T1NQwpDDj2UV", "w7kaIS/CmA==", "woHCgHLCpg==", "w5HCrcKRwotwYl3Cs1PDmA==", "JsOUcA==", "Uwgm", "wrdlesKNSyrDkC3DpcOnw58u", "woPCjizDti7DqlRmOC4Mwok=", "T8KJQ8KiTsO8wpg=", "wpvCt8OBUR47w6wuAn9AVA==", "BMO2LQ==", "OMOICcOOEcKK", "MF3DjQ==", "HMKmX2MX", "w5B9w5w=", "VQIsw6HDuA==", "WMKEX8KhaMO2wpnDpQ==", "DCfDucKNeQ==", "GsKsVQ==", "J8OeXw==", "w47CpgLDunvDkMO1wqLCiAFNwpBV", "wrFycsKNaiPDriXDvw==", "w5zCs8OCw40T", "wqFew60=", "w7hWd8Owwol2Y1Q=", "Y1dDfMO7", "w6ARVjYt", "N0tbw4xJ", "UMKsMMK6fw==", "F8O/U8O6w60=", "woNqwq7DrHE=", "w7wcViENY8KhFBc=", "T8KDXcKFX8O2wo/DtA==", "ESfDnMK7RyHDrcKsw5fDvMKA", "BMKfBlQa", "KcOCFMOICMKdAjbDrwbCmw==", "BnDCpMOgw5M=", "wr5hacKC", "TWBewrTDnw==", "wqvDjCPDpsON", "wrXDrcOuSQ==", "wqvCrnrDrQ==", "w6ZnwonDsk0V", "OcKHXUHCsQ==", "w4PCiCLDvBzDo1Vz", "w64UacO0wqI=", "DWsTM3A=", "wpTDtMOmTFo=", "JcOBQMO+TjPDtS01w4fCjA==", "wrHDq8OgSQ==", "U3pDwp7DgA==", "w6dgwoXDs1IU", "worCvMOFUz4yw6A7", "w6kMETbCik/Cn8O/ZsKrw4c=", "w7oMFwfCg0XCnMOvYMKvw5o=", "NMO2OFc=", "wr3CrnrDvsKWwrRBbCE=", "w70Vw7bDmsOyw7Ma", "OMOIF8OUCsKK", "OXfDkw==", "XMKNWcKiesO8wpPDkm7Ciz3ClTdV", "wrNewqbDh31VwrnDpVE=", "cD0Pwqp1w6PCk3fDt1UubiQ=", "w6TCi8O4woTCt07Dkzo=", "KMOfE8OfG8KKJjzDtQ==", "woTChyLDoQ3Do18=", "C1LDsjdPYH4=", "QD8jwrdlw4HCnEjDtw==", "woJJVQ==", "w5cMe8OxwoY=", "wrAJMMKZfg==", "w7vChsKuwrRR", "wpDCvMOwRzcnw4AjH3VF", "wqrCmSvDiho=", "a8KmTkY=", "w7wvSsO2wrQ=", "LMOGFsOwFg==", "w7sJSzA9", "w4EiwovCgW9QXmRI", "WmJIwo/Dm8OKRlU=", "wqEJNcKHQXzCpsOFBA==", "RcKDO8KCZw==", "w6rChsKrwqp0SXbCh2jDoCs3", "w559w4LCowoxw7pf", "EMO/XHDCjgkNwoAy", "w7VNbMOlwrRxeF/DpsOnYcOH", "w4xfwpLDn3o=", "wrLCn8OSfAo=", "RzAWwql4w5LClEjDtw==", "woXCii7DuQ/DtFRyIiM=", "w5Q+woHChX8=", "bsKiJsKqQcOmRD4A", "EcKlUXI=", "dFNCRcOxD8KiD0jDhmM=", "EFdvw4Et", "NsODQcO6QDPDqyshw5HCikXCvcOHwqXCgmNVw7w=", "woLDhSLDgSbChXbCpMKTCw==", "w67DpMO7wrrDtsK2d8K1woHCssKTNMK9cBzCvg==", "LsO6Y3DCtA==", "dRsQwot3", "eWV6RsON", "J8Occ1NDcQ==", "Vgo/", "CsO+QGrCuQ==", "w5/CvMOMw4Y=", "EMKHV1XCtMKEw4c=", "wrzCuWs=", "O8OWeFvCjDAm", "w4o+cQQQRA==", "woLDgjXDkz3CknnCrsKHK2DDrwBl", "w5dnw4PChAAkw7hf", "RB8vw6XDvicVw4M8w7w=", "cVNFe8ONFcKeCUQ=", "DMOhUWXCqRw4wpc5w5vDuXV5", "wpLDlSXDscO6", "BkXCncOjw7DCinPClDNIPw==", "w63Co8Oiw5k3", "VQYtw6LDoyEiw4o7w7HDtcOxd8O5fQ==", "EG9ww5d4RcK7HQ==", "FcO2N1DDssOnUMOkwrPCoA==", "w7gVw7bDiMOjw78Qw7lz", "P8OdHsOaCMKK", "BcO4OF4=", "J1REw4YYcg==", "DMOhUWXCqRwiwoovw5jDg2l3w5N9LRLCn08=", "w7NVYMOjwpF+fA==", "XsONwp5lYCNMAAQ=", "wo7Dnh/DhCzChVHCoMKa", "w5d7w6fChAs=", "wqrCsGXDmsKn", "esKlZkNF", "w71xSMO9wog=", "w68nwqzClUo=", "CyfDqMKsTjjDgMKlw5o=", "w4QhworCk29LRWBP", "wrsPPcKe", "EMOwe11Y", "NsKiJW8U", "wpLCjX/Csw==", "EcOXdnhA", "YcOwwpdOYw==", "IUxBw4o=", "QR0kw7DDpTYuw5Yq", "wpPCm1TCqh0=", "MFNnw5IL", "McKvdHnCkcK/w7x0CsOswqc=", "FsOnJFfDrA==", "wqTCgcObwqXCgQ==", "JFHDpsO2w5A=", "wqPCisOWwpDCgA==", "wrpbbsKteD3DjQ==", "EcOwXEXCuQ==", "w4bCs8O6w44G", "BMOUKcONMg==", "BnbCqsO2w5w=", "w4nCvMOMw4wewrTCnH4owolDwpPChg==", "w61nwqXDkGc=", "wqPChMO4wovCqG/DiDzCpcOIw7DCmA==", "AkvDlcORw4A=", "wrDDniHDnCo=", "YMK6dsKccg==", "w5EMwpzCqHI=", "wozCnsOVeSg=", "McKvM1s6DQ8=", "f19Fe8O7GMKhF0DDnA==", "wprDrMOGTlI=", "w73CjwXDrns=", "w71BdsO+wpFqeF8=", "FsKkVmM=", "ajBKYxfDj8ObH8OQ", "w4TCrQjDl17Dhww=", "5p6D5L6b5ouS57i3Bwc=", "NcOgbGnCiA==", "5b+05YiD5ou057iJIRk=", "PWwfPg==", "TDQIwq1kw7Q=", "wqkSKMKc", "O8KtfQ==", "6ZqD6Lqd6KGV", "wp/CpRfDuQ==", "ClfDsyNuanTClcOXchTDpQ==", "Om4TK1bCisKCQMKbOcOtLg==", "wr9gwqzDtUs=", "wqsLPcKAYQ==", "w5nCucOMwpIXwrPCm3QdwopDwpLDiDDCvgBBDcK/wqDDoUE=", "JMKpeyfChMKjw6B6H8O3wrBdwp7CqitQP8OIwrwUwrlqw4PCoGkIw5o=", "N8OcX8Oaw7DCnA==", "KcOfH8OaCMKKJyfDtBk=", "FsKkaHQKd8Klw7LCtQ==", "P8OeH8OrDsKABxTDtQA=", "QGxkdsO5", "FmnCrcO/w5Q=", "wobCnGnCjA0=", "AcKGYkfCow==", "wqrDowLDkCg=", "w7YQw73DjcOyw7g=", "CcOaUcOJYQ==", "w5/CsRTDvnvDv8OKwqnCtAU=", "w53DhMORwovDncKKZ8KZ", "TjUC", "w64Lw7bDmcOVw7kG", "M8OBSsOrdjnDmQ==", "UwYlw6PDji05w4Ecw6DDgMO2", "GcOiIsO3HQ==", "UsK8CsK7Ww==", "wrHDmjPDj8OR", "wpHDlzXDrMO6", "wqfCicO6wo8=", "wqVxwo/DuFwUw510", "JsOSblV3dwI=", "G8KkVmUEcw==", "w78Ww53Dm8O9", "OcOOFcOJGcKwFTI=", "w5bCjzLDuWA=", "wrBOwrzDjHZFwpzDqQ==", "wqEJMsKWYFjCpsOYFA==", "5p+I5LyU5omM57iaKCzDsw==", "w78MEDDCuE/Cn8O5dw==", "FX5m", "w4QVw7PDo8Om", "w5UrwonCj21c", "wpTDgDTDkz3Ckn/CpMKZDA==", "wovDmj7Dp8OtKcO5wq3Djg==", "AsOCKcOOGw==", "w7jDpsO6wrrDtsK2d8K1woE=", "X2BMwpXDpg==", "NsOwX8O/w5A=", "XSQNwo9X", "woPCvArDiwc=", "PsOGM8OsOQ==", "dUNYbMOqH8KeFQ==", "bsKzTUNHwovDjA==", "DcObd3fChA==", "LhHDv8K+Rg==", "CmgONFw=", "V8KiVWEWKMKAw7PCsQA=", "OG8UJVbCig==", "N8K8MF4AIAbCow==", "G8OwRmHCiAsE", "w5/CrB/DvG7Drg==", "wrlMWMKPYg==", "w5JOw7rCpSE=", "LcOBHMOCPQ==", "L8O+bWly", "CsKHe2LCjg==", "YT0Ew5TDlQATw7U=", "M8OuMFXDjA==", "JMO/ZsOHw4Q=", "JMOdVg==", "woF+woDDs0VywqzDnw==", "DXNsw6VkScK6KsOb", "woXDnz0=", "wobCjynDlx7Do1VzAC4RwprCr8OZFk8=", "N1PDgcObw5xzBcK3", "wojChR3DoAfDtnhrJSQJ", "JcKLFGA6", "wq8GMcKW", "XMKoV2gRYsKKw6g=", "LnAeJ0PCm8K7XcKaLMONPyE=", "w6hNd8KeTw==", "CMO0b2bCsA==", "5Yab5YWX5om3", "wrBKSMKzQg==", "wpLCg33CvBvDsw==", "w5VLwqLDg3E=", "MEDCu8Ohw6o=", "VmdUwpfDiw==", "NktN", "w7QRbcOowoQ=", "LSHDoMKueA==", "w7Mtw43DjMOD", "BsOCYsOrWg==", "wrrCgcOKehU=", "w5ElwqHCqV4=", "w6s0f8OTwog=", "MMKvYg==", "cFpXfMOt", "w4V4w4LCgBs=", "DlfDhsOKw6c=", "AsO5MF7Ds8O8UcO0wrk=", "NMKCeEnCiw==", "VVN2wpXDiw==", "NGZCw6QC", "NcOcWMOjw5M=", "NcOSScOuURnDhw==", "wqNiS8KnaQ==", "wpzCvcOORiwlw7YsAnlc", "wqkXLMKfaw==", "SsO2wp1lUQ==", "w7R8woTDs04Yw51lw7o=", "w74+UMOzwqs=", "w4HCpcOAw50Twq8=", "fcK0R1NBwrA=", "J0pFw4EKcsKXwo0=", "VsOLwqdIRw==", "ScKqTFxw", "TsK8LMKuT8Oq", "XDQSwp1kw7bCiU0=", "HFvDpTBfd3/CgQ==", "w7o6Tg==", "bcKeVcKzRsO2", "wpHDjSM=", "GsOwW3LCvAo=", "w6XDs8O3wrzDqsKn", "wrsCKMKgcW3Cr8OF", "w6wcXTw+ZMKbGAFFXw==", "wqZOw6x6wp/DhQ==", "w7ADwqXCjno=", "wrzCmVbCmRs=", "LXLDusObw74=", "w6Bcw5zCpQQ=", "LnnDkwlG", "w5suLQnChw==", "FijDv8KGXz/DvsKyw5HDr8KOw6XCvG4=", "NsOWemc=", "M8KrLFo=", "QTswwpVS", "O8O5A1nDrw==", "w73Cg8OZw6sM", "w7MqV8O4wqhk", "wpXCg34=", "X8KbVcKzUsOg", "woB2wqnDrGg=", "w7wOSzA3eQ==", "AcKbLHgP", "w5s5XcOKwoM=", "a8K3VXdOwrTDgnw=", "QnlAwp7DlMOTRFUV", "wpbDiMOsVXw=", "wqciJcKwWg==", "wqrCnlfDlsK1", "MXvDuS5y", "wpLDmDHDnw==", "XcKNXMKjWcOcwoc=", "wrJDwqHDkG5Cwp3Dr0s=", "XsKCVsKjdA==", "EWrDuT1s", "DcO8XnfClQ==", "e8K9T0VWwrbDn34VDX0=", "wp7CosOQWSE=", "wqHDuhPDqMO0", "w4Brw4/Cuwovw7Fy", "S1xUecOd", "w4DDs8OwwrzDj8K2WsKn", "w78Xw7DDhMOk", "FsKFa1I9", "w6snworChXpL", "wobCiVDCpQw=", "esK9VUJNwqnDsw==", "ekVieMO7E8KfEk/Dgg==", "CMKnWX8kacKNw7HCrw==", "PWZmw44j", "w6LClsOLw48S", "w4URGhTCjQ==", "IMKvdm8=", "w6sMXA==", "EcO7O1TDpw==", "w6UHBj7CjA==", "KWEUIljCkw==", "J8OeQsO+Rg==", "w7Jzwpk=", "wrrDscOqQ3o=", "f8KzTFN1wq3DjmkJ", "w7MYw6HDpMO4w6Abw4c=", "RsKFXsKbU8OlwoTDiA==", "w7IsFyzCgw==", "woXDlT3Dp8OXGMO1wrLDksOd", "VHtLwprDmcOvWVUYwqk7", "SsKdbXN9wonDp0IpI0E=", "w5zDh8OBwpDDi8KQfw==", "wpbDjMOQclTDq8O7", "VQo4w63DrSw=", "wqBwfsKMaR4=", "wrFbw7p2wpzDsg==", "wptxw55Jwo8=", "wr5hY8KkYjDDmhU=", "NX7DvsObw5Y=", "IsOYX8OQw47CnMOIGxgp", "QjgIwpRuw7DCmHw=", "TMKNXcKzdMO2wojDtmnCkQ==", "wrxNwrfDrnVGwo3DlQ==", "SDALwrxJw6PClELDulI=", "BlTCiMOVw6HCqGLCkg==", "IMOGVw==", "w5vCtcOVw4sDwq/Cl1IZwoc=", "JcKpfn7CjQ==", "UMOEwphjfD4=", "wqjCuWvDucKDwrVRUS8Pdw==", "w7DCjcK2wpFbQXHCh24=", "w747ZDY7", "wqTCjcOkwoPCpEU=", "RzQPwr5pw7I=", "LMO+w6c2w4Y=", "IMOWbllFaw==", "w6vCjcKrwrlVUw==", "IXDDiw15TFjCu8OIUyHDkilPwqHChnwJ", "GizDv8KgTz8=", "w7Ycw7DDjsO/w6I=", "wpvCt8OTXD85", "w69GccOHwpRsZVjDuMO0", "TFVaYMO/HQ==", "N8KiPlceLADCtk8=", "wrJucsKEfg==", "OkFJw4AEYw==", "IMOyTFbCsg==", "wo5ewqDDj38=", "w4vCqhXDq2c=", "wqXCscOlwoXCsg==", "wrwQOcKWfH8=", "UcOSwqVzcS9MDhnDhA==", "w5UDwq7CmmE=", "HU3DuAdGanvCmQ==", "KcKMdGIg", "w69bfcKQfQ==", "bsK/e15r", "wr4KBsKbWw==", "G8KnV2cOUsKXw7nCtUEK", "C1LDsiVBUGnCl8OtdBI=", "w4IKDyvCikc=", "MFnDgMOuw51lAsKxYSw=", "woTCrnDDt8KJ", "wrsCKMKyfnzCq8OB", "A8O+OV7DmcO8UcO0", "LsOICcOPDsKADg==", "B8OlO0vDgMOmWsO4wrPCow==", "w78YwqDCpEE=", "w5/CvMOMw4Y3wrPCm3QP", "FMOiJg==", "w5Bkw4HCtggUw6Vfw4RNw4g=", "YcK9HcK8UMOqRDAdDA==", "JlNFw4ICZA==", "FkQwNnw=", "FF14w78B", "CibDucKqQBfDi8Klw5rDvcKKw7TCow==", "ESfDmMKhWj7DmQ==", "MUhPw4YHQsKHwpwCw5Q3", "bgwnw6vDqyk=", "NMKrK3g2MQDCuVAj", "TERZY8O7", "BMOyIHrDucOlV8Ow", "wqHCpMOuwoTCrQ==", "w7ksViQu", "WDQlwqN3", "w7g8wovCjH4=", "JMOXW8OYw7U=", "w64rVcOq", "w6PCsR7Ds2o=", "Bn92w4N+Qg==", "wpXDmCLDnT4=", "wodofsOJZDLDmj7DsMO6w547wpMuLcKQdxvDmcKcwoYaw47Dv1lJwqLCm8OuWip1dMK+woXDsybDv8OoIsOvw4IILMKQJw==", "EGTDu8O+w5s=", "CsKaYn7Clg==", "w6gPwoPCp08=", "NcK5bmgt", "VMK4TWJS", "XAo/w6zDpSY=", "AcOPMHDDsg==", "wptkw5Bxwq4=", "BVvDqSxFYQ==", "UB0s", "BMO/NVY=", "EcOFBGrDkg==", "eMK8JsK/WsO7UykW", "Fl7CksOiw7DCqmPCmSM=", "MlnDusONw4A=", "w4Jtw6DCohc=", "w4zCv8ODw4wCwq/Ch3oIwpFU", "w6Y4w7XDkcOB", "asOOCMOeHcKbEg==", "woHDljHDr8Os", "w5HClBvDj0A=", "AMOLVFZn", "QgYMwolO", "w4gswpfClHpaXGY=", "w7FFZ8OSwoc=", "wrDDuR4=", "w7p2fMOmwrk=", "wpTChDjDvAw=", "w5Rtw5o=", "esOmwrxbRQNs", "wqjCs2rDtcKI", "wozCvcOVWzw=", "wobDlSQ=", "w7FPw6PCiDIIw5g=", "w6NzwoPDvU8Dw5x1w7AD", "N3bCo8OAw43Clg==", "G8K5XWcRYsKgw7PCsXwOWRHDlQ==", "w5jCrBzDjGzDv8O0wr4=", "w7RiwoTDt1wUw7Flw60T", "Uwo4w7DDmSE4w5Qq", "w7hMaMOCwp56Yl8=", "IcKjf2TCgA==", "SMOAwoR3cQ==", "NmLCsMOzw6k=", "w4nCrRXDumnDs8O0wr7Cvw==", "ecKBRMKnaw==", "wqFsw6lnwow=", "w40PYDo9", "GibDosKs", "w7VgwpnDk0YFw4Fpw7sU", "w5/CrBzDr2PDv8OuwrLCtBs=", "GsOWQ3DCqQ==", "wovCrsOcwoHCtw==", "LsOFw50w", "woPDhjc=", "w65VZMO9", "DMO7a8O2w40=", "w5/CggbDhUY=", "DCzDv8KsXBvDgcK5w63Dq8KCw7TCow==", "NcOVU8OM", "wpBuw4xGwrXDrsKCO07Dqg==", "w75EaA==", "wrVJwq7Dh1xcwofDrUtPwobCtA==", "HMKuS3IXaMKd", "HcO0VGDCmxUHwoQiw4LDmWc=", "KcOdw5Q=", "IMKlaX/CiMKo", "w686ScOvwqBz", "XMKac3hu", "axk0wpdN", "w6TClsOmw5QC", "IMO0U8OvQA==", "w5N+wobDklI=", "HznDvMKlUQ==", "Kkdlw4Q1", "M1rCj8OBw64=", "woDDkcObcnQ=", "BMObdMOvw4A=", "wp3Cv1nCpiM=", "LVIdL0E=", "w4V6wpHDkVg=", "MUVMw4s=", "w77Dr8Ot", "Ug4lw7LDqzE=", "M8OaeURK", "w7sAXQ==", "wrjCvXHDrcKNwqI=", "YMKrIMKsXcO7", "KHAfI1M=", "w7DCjcK2wpFPTmXCi3Q=", "wqdlY8KdeDTDmj8=", "wqXDusO7", "w45QSMKgTw==", "DTDDvw==", "w7UMCiPCg1g=", "w7DCjcK2wopUS2fCsXnDtyY+", "wpfCkcOPego=", "woDDnT7DpQ==", "w7stX8O/wrdzKsKdSQ==", "w6kmSsO/", "McKreETCpw==", "KcKNHEIW", "w6x8w4vCpREgw7VVw5lXw44=", "J8OWVsOyUzg=", "wpbDmTTDhiE=", "wrfCgcOzwp7Cqw==", "BcOIw4gnw5bDiMKcwo/CgsKRwpc=", "PsOZw548w4PDhw==", "wqsIMsKVe2s=", "Z8OHwoNhcTBH", "w7rCkTTDmlXDn8OFwpnCkjtjwqxnHcKcw5w=", "w74wVMO8wqRx", "wqDCtMOSUD0tw6Y=", "EMKuUWENcw==", "McKvdGzCjMKq", "dMKKQsKzWcOpwoQ=", "B392w6BlX8K9EcOew6k=", "wp/CnMOywpjCsUrDniHCsMOew70=", "wpzCvcOOUzEw", "NFXDkMOMw5w=", "J8K/XXQXZsKHw7PCqFsM", "IFPDmsOew51x", "GsONV8OHw7TCmMOCEwQpw6E=", "wqvCtGbDqMKFwrJb", "ZFlEY8O6", "JsOdRMO5WDM=", "Al7DssOiw7I=", "VntIwpTDhcO9WFEHwq4owrg=", "DFvDri1Naw==", "ClHDuT19", "wqPCh8O5wozCqkw=", "FcO4MELDnQ==", "F3Vsw5BlSw==", "wqoIOMKKXWrCpcOTBcKseA==", "HCbDqMKwZzfDiMKzw5vDq8Ky", "PcKiaX7ChMKuw6Vy", "w6cbXSE4acKgFA==", "N8ODeFVGXQ==", "RMKOQ8KiXcOwwo3DtA==", "wqJcwqrDhn5o", "wojCiT7DpgnDpVdi", "w75Ka8O2wqp+YFHDlcO/acOGdw==", "wr3CnMO0fjE=", "wqjCjlHCsyg=", "w7BwT8OowqQ=", "XzUvw4HDqw==", "KsOpeXVD", "w6d+woHDpUAYw51nw4oQFsKZVg==", "wrVsesKaZS/DkSvDhcO5w5Qsw50=", "MnMqKlbCh8KCQcKS", "a8KiJsKqXsOLXysSCcO6fw==", "wrbDqMOqXHPDmw==", "w54fwqvCr18=", "wr3CsH7DqMKEwrhGZRICd8KHwo0=", "w74FDCXCgGjChcO5c8Kow5gk", "GsO9WmXCtj0dwpc3w4nDm2U=", "w74FDCXCgHjCn8O/c8Kmw7A0w5ZoEkQf", "wrXCn1zDt8Kl", "wqPCg8O1wqTCgQ==", "PsOUCsOe", "R1xcwoPDsw==", "V8K6LMK5R8OuSTYHH8O3", "bMKrOsKiUsOh", "LcOcW8OSw67CjQ==", "J8OQXMOSw4DCi8OEGQo4", "C8Kxcmok", "w6PCtxTDrX3Du8O5wrTCrwFF", "w47CvsOEw5IF", "G0rDsjQ=", "wpHDkSTDlMO2DsO1wrfDlsOM", "wo5Kwr3Dhn9Kwo0=", "M8Kuc2fClg==", "wqHCuQjDlzLDg2RFBQklwrHCk8O4PXo=", "KHowKnY=", "wqDCpsOFRyo2w6AgAmJP", "w4VebsKtfDPDjQ==", "wqcJP8KW", "wqLCnSjDvBzDtQ==", "E8KOU0fCpMKZw4BYMMOcwpZ2w7PCjA50RsO/", "wpcBLsKWd3bCpg==", "KMOxJl7DsMOvWg==", "aMK+QE9wwqHDnHgTEWo=", "eAIDw4XDpA==", "KcOEKcOBFQ==", "w4RzasOEwrM=", "R8KmRERQwqXDiXIVFm4=", "N0rDuDZYZHnCncOwbhQ=", "VnlNwpbDgQ==", "GMK6OlwtIwrCtEgywrM=", "FMOyacOQaxTDqAofw73Cp2PCkMOr", "wpDCnGPCswM=", "5YyA5buH6L+15Yiz5Lyu", "woTCugjDgwA=", "w6UQY8O2woc=", "NsOvcMONw5Y=", "P8OTw5kww5Y=", "dsKQQkNb", "Gm1Pw6Bo", "wpfDkTzDhyzCuFs=", "FlDCkMO9", "BcOPw50ww4HDjcKn", "w7tVf8KGdg==", "w5AnwoDClHM=", "w7fCgcK2wrJY", "LMOZw58mw43DhsKR", "wpB5wpvDrA==", "wpHDmCnDgSDClE4=", "NMKtPkI6", "wpsEPcKfd0HCrMOEBcKr", "wpXCk1HDng==", "N8OQeF5H", "IsOhfMOjw64=", "SMKDXsKlSMOhwpTDsnXCiik=", "CSbDpsKOSg==", "w47CucOlw44F", "OMOVw4My", "wobCjynDhg3DtElmLygWwprCqw==", "w4Q8woHCgW9cZGZJbcOKw6Q1FcK3Og==", "w4XCncOiw60T", "w5jDsMOOwo3DuA==", "HcOMRsOlw4I=", "w4vCrBvDmG0=", "wqvCvsOawpjClA==", "wozCtMOvej8=", "dHBUWcOM", "e8KmKMKm", "NMK1dGnCkcKkw6Z5", "wqvCrnDDr8KDwqVRciM=", "IF3DmMOU", "wqbCmsOywo/CuU7DlCDCow==", "TMOEwoN2ZwNMAxLDmw==", "wpEoEsK0TU/Ci8OlLcKZfy3DkcKe", "E8OiNMO8I8KtPhvDnw==", "wp3Cs8ODXj8lw6w6GHI=", "w78dw73DvcOyw6QMw79jw6xyDcO9", "w7jDpsO6wrrDtsK2", "w4sNw7rDvcO/", "w5nCh8K3wrpv", "FMODc8Ofw5M=", "G8O0eGXCvg==", "L13CisOYw6k=", "wqEJKMKWYHrCosOM", "wrJkf8K9aDTDjS3DssOhw4U9w5I=", "wrbDtsOiXE3DmsOfwr4=", "w4jCqhzDul/DqMO1wqs=", "O0pUw4IeYcKVwpU7w4g/wrc=", "wrwCLsKBYU/CrMOOBsKxRw==", "HsKnV2kX", "wqNNwqHDh3Vd", "wp3CiX3CuA7Drw==", "McOcQMOHw7XCsMOPGBUl", "woXDkSTDjsO+DsOo", "w5vDlcOvwpXDiA==", "YcOuwr9DSwhrKTM=", "wpTDnMO+d1c=", "JkFYw5MZZcKR", "w7pRYMO0wod6ZVTDsw==", "woXCgiPDtS7DtF5iNiI=", "AcO2XMOhUg==", "wpPCjXDCtB3DtSFlbcOw", "MsKgO0s5KwfCvlg=", "fX18XcOJ", "w7DCgMKjwrM=", "NDrDlsKHaQ==", "csK2WWBg", "M1AAMEI=", "HMOAVcO+UTLDuQ==", "EcOuw6Ixw4A=", "w5PCgDLDjXw=", "w648VcOowqg=", "wozCosOFUDwCw7MmGHE=", "W8ONwp53cS9G", "w7DCo8OOw5AEwrg=", "XsKdR0Rv", "McODeVFWYC0uew==", "w6BHw6nClDU=", "wqVIwpXDrVE=", "wqBCw7F0wrzDhMKzDVTDjGV5", "wqppdcK6ZSPDkRXDuA==", "AWlnw69fdQ==", "w6gQw7jChMO2w7gXw7Nhw7djHcK8wobCr8Kew4slwqNzKMKPBGwPw6jCkA==", "wpnChWfCnBLDogNxWsO7TcOs", "bsKNf8Knfw==", "ZRo8wp5W", "O0lH", "wqZyw69HwpI=", "PMKRcXjCnQ==", "YjkZw4XDuw==", "wqImF8KgSw==", "wo85wo3ChG9RTGtedsOMw68uHcKvPnDDp8O1fcKMwoY3wqY8dibCh8OLG8O2McKHbldVwpjCmnbCqkXCrcKaTE0=", "wotUwofDtH8=", "w6vDjsOfwrzDjA==", "EF/CmA==", "wrpRcsKhbQ==", "HU7DuSVeYFDCncO9aQHDohVnwr7CvVw2wok=", "wrTCslzDtMKAwr1BcS8afMKgwoxzPmQ=", "NMK6MF4YIwTCvg==", "wrfDrMOqf2/DjcOVwrTCpgjDpsKkwro=", "IsOBeFVYYD4pZsOyD8KTMWcpZn8=", "MMOWUcOdWzrDjSsvw4vCkEs=", "YEJXfcOqJMKUFUXDgHo=", "wqtFw7xhwp3DisKuD0PDjWJxCgNUWMKEEQ==", "IMK8e0A0", "J1rCqMO1w64=", "JF3DhA==", "w7NWdcK8SjnDjcOAw6g=", "wqnChsO+wp7CikXDiSvCtsOcw73CkQ==", "wpPCjMO/wo7Clw==", "QcOKwoFtRw==", "VMKxQHJB", "w5E8W8Oewq4=", "woHDgSLDscOwD8OXwrDDg8Oa", "C0vDrzdFd1HCl8O9aQ==", "ccKhZVlVwqo=", "wqbDssOoXG8=", "w7N9wozDsw==", "wq/DsMO5XE/Dh8Ocwqs=", "BlTCiMOHw6HCtHnCmT5ZNMKJ", "wqvDrMOCWGXDpcOfwrjCpgE=", "BkHCmcO0w6DCgQ==", "w4ggwqfCiHRWQ2ZpcMOHw6I=", "ScKmPMKAQw==", "F1DCn8O6w6PCqnnCjzlJ", "wqTCncOlwovCt0LDkiA=", "w64KDDbCjnjCmcOmd8K4", "w4MnwoLChnJaRW9PZsO/w643BMKx", "EcKlUXI2d8KBw7nCuA==", "MEzDkcOdw5A=", "KsOdTMOvfTjDlSEqw5TCn0A=", "w7wcXCc4acKjBRFQRA==", "wovDmiTDp8OtC8O9wrk=", "GlvDrjFHYA==", "wrTCi3XDi8K0", "woofNcK4dQ==", "w7BpVcOpwr8=", "wrVDwqLDsHlVwobDqQ==", "WiECwrh1w6PCrVfDvVYVdiw=", "wpLCmCjDtg==", "WiIDwolzw6nCjWTDvE8=", "KnrDjhtiRFQ=", "J8Kzf0zCl8Kow6xtG8OTwqdWw44=", "w4nCsBTDnUvDiQ==", "QQMqw70=", "HcOgRG9qRCA=", "RHZd", "woNYw5N3wo8=", "wrfDrMOqenHDh8ORwqU=", "woPChCDDgQvDo1Vi", "JMOCKsOJE8KfNjvDsg==", "dHNKwpHDvA==", "wqJ9woXDllQ=", "w7hZf8KjfjvDh8OQw6LDsA==", "PWwVJ0PCl8KFSMKG", "wpvCv8OHUCo=", "JcKvPEU4MAbCrlIi", "EHNkw5BlT8KhH8OGw7U1w58bUAs=", "O8Kuc37CtsK9w6xyGg==", "wqLCicO0woHCpFnDkjvCqsOO", "IcKwf2/CgQ==", "F3Zjw4V/", "eMK8JsK7d8OgUg==", "WMKJRMKXSMOnwpPDuGPCkC/CmQ==", "KHjDv8OOw6A=", "wodiSMKEQw==", "FMKnTHrCgw==", "wr/CuWzDr8Kewr5R", "w7EXw5bDn8Oyw6QSw79w", "C8O+WWE=", "J8OfclFJUB0+YMOsPA==", "w7VQUcOmwph6YlPDusO2", "woPChirDtxo=", "w65MacO0", "LcOda1FObAoYZcOtOsKR", "w5xfSsK4fw==", "UcKBB8KMasONYxc3", "w5E2YBIGSMKFPyE=", "IUVZ", "w5thw5rClQovw7Fjw4JNw4g=", "C2tuw6AzVMK8wrwmw7s=", "JcOiA3bDsg==", "w4vCtcOew4sEwrLCiw==", "FcOwB0vDsMOwW8OEwq0=", "F8OoVnTCvw==", "KMOKFw==", "YcK9GsK/WsO/", "OMOOw4Qxw4PDjMK3woHCmA==", "woLDhSI=", "IcOMQMOUw7LCkMOOEg==", "w5MnwonChQ==", "BVDCicOiw6E=", "VGJW", "wobCpgfDoSw=", "w4MjwoPChWk=", "GVEeMk8=", "woXCiWHCrRvDpCFkd8O1UA==", "IsOBeFVYYAc1bg==", "wpnCoMOFUCIy", "w79eesKtej0=", "w7kEBCHCmQ==", "wrwCLsKBc2/CrMOUFMK5Uw==", "Al/DgMORw5t4GA==", "w4JzwozDug==", "UWVBwp7DiMOfflkcwqIu", "e8K6KMK5QQ==", "DMKuSnQEZMKLw6jCqE4e", "HsK5XWMfYsKNw7LCuw==", "dURTasOkE8KlEkzDgHo=", "wq4VOcKWaGk=", "MsKgOkg5JwrCrw==", "w4dtw5zCpQIiw7lOw5lCw5w=", "PyrDuMKgRz/DnQ==", "IVXDmsOfw6F4DcKhaCzDssKi", "w6hGd8Ojwpx8Y07DoMOwcw==", "wrVyfsKMdyPDliLDtg==", "w70Yw7XDhQ==", "wojCn1fCtQ8=", "w55hw4DCmgw3w7Ni", "OsOAYcOxQQ==", "w4jCscOAw5ohwrTClm0U", "w6DDt8OmwpbDrcKlUcKZ", "wozDmT7DvybCgVjCmA==", "wrjCmD3Dtw3DomM=", "G8OAbVVHYTc=", "JsKpd2/Cp8K4w6t1EsOm", "f8KFanNH", "w7sJSzA9X8K8JQxcUsO5", "Qh8uw6HDrhcnw48hw68=", "G07DuCFO", "w7V3wpLDpEkSw5x0w6oGAA==", "BMOyIG/DsMOnTcOwwr7Cq8KFw5dmWcK7w6lIw4zCig==", "wozCpsOBRyw=", "AcODVMOBw4w=", "5b+S5Ymf5ouw57m/ElE=", "OcOdH8OeGMK6BwHDsgTCjBw=", "wpHDgD/Dsg==", "wrFbw7p2wpzDvsKtA2nDgw==", "a8KiRFNG", "MFnDgMOsw5FkGcKybibDvMKzw4x2wrjCi1N0WA==", "L2UINFbCncKEW8KBPcOw", "IVPDkMOB", "MMOWUcONUTrDjicxw5bCh3Q=", "F8KpS3IEZMKIw7k=", "BMOnMV7DscON", "w7I9ScOuwqx1L8KW", "I1Zww6U+", "aCkGw7fDmw==", "bMKhJMKYVsOqRDw=", "KsOidkJa", "KsOXYsOHw6nCicOiEBk+w6s=", "w5dlw4nCshE=", "w7cPd8Obwo4=", "alhHRcOp", "LsOZw58nw4XDisKQwpTCgsKEwoU=", "wpdrw4HCuRckw7hO", "F0PClcO1w6PCvV7Cmzk=", "w7NNVcOjwpJvWUnDsQ==", "RsKNSMKbU8OlwoTDiQ==", "BMOyIG3DsMO5UMOywrTCsMKIw7s=", "cVdFasOLBMKd", "ADgLwr5ywqnCmUrDvwk=", "w5QtwoHCjn4=", "wqDDs8OgWnY=", "w7YOBzDCow==", "BMOWF2nDsQ==", "BsOgFVXDpQ==", "w69xwrDDkGI=", "NMKPHHw7", "wpDCmMOOwofClA==", "w6/Cn8KjwrN6", "w7jCk8OUw5EQ", "wpPCvifDvhA=", "BMOYSMO6dg==", "wozDnjnDkMOR", "w7oWQjA=", "w5gzT8OiwoM=", "PmFnw58J", "AXlmw6Zp", "A8OPW8O6w6M=", "w7E6VMO9wrl+", "McKvM1s6", "P28UIw==", "XcKNXMKjWQ==", "fMK9T1M=", "wp/CiWvCqw==", "NMOBdF1DdxcQbMO7", "w6pHw6DCkDwDw590w6k=", "IcKcOlcx", "w4E8woHChWFcWW1c", "McOKf8OPWQ==", "w4MDwqjClm0=", "EQfDlsKgTA==", "GcOrCsOVEQ==", "w60TSTYD", "woXCvj7DmyA=", "w7oIEw==", "w6/DucO6wqI=", "w7DCjcK2wohYS23CgXPDojMC", "wqjCpsOqRhY=", "wozCt8OUYz07w6wsH2JXag==", "wr5OwrzDl3tTwoTDqQ==", "TT4CwqA=", "QjAUwrI=", "O8OFemvCrA==", "woAmEg==", "w69uesKNSw==", "w60Kw7DDvcOW", "IVPDhsOcw5FkRsKxYjE=", "w7UdcMOJwoQ=", "JUnDmsObw4B/BMK9", "w4V9wqfDm38=", "KngTJ24=", "w4EWwqXCh1U=", "w5E9UMOvwrs=", "PMO7QcO6w6E=", "W8KeVcKg", "w6oLRzE+b8KEEAs=", "w6ZIw7B9wozDjsKzHg==", "w6wsw6vDh8OR", "wpXCvj/DvC4=", "w65GaMO+wot6", "w4vCv8OAw6wVwrjCnHw=", "fFhzYcO6McKQFkQ=", "KcKrJ1o=", "w4Rpw4fCoyUuw6R5w4JNw4lVwpBx", "KsOXccOaw6jCn8OIDh0=", "w7EXw5rDgcO4w7kNw7tSw6xqHA==", "w7xKecKtYyw=", "w5rCsRTDunXDv8OOwrLCthBW", "MMODQMO+UAPDkRAxw4/Cm14=", "w686VMO+wqhkAcKcW15u", "w5XCj3zCsQ7DoiBk", "wqLCmsO+wo7CpE7DtS/Cqg==", "G8OfdENWYAAeZ8Om", "C00RKk0=", "VycNw47Dmw==", "w6REw7fCuAA=", "AMORdMOcQw==", "ZXxPwq/Dpw==", "BcOyM2w=", "MsOnL8O+Mw==", "w6hde8KA", "wqnDlcO1dWk=", "wpTCiCjDvA0=", "woLDgjXDkz3CknjCrcKPFWbDpBo=", "MMOHXMO3USU=", "wqNfw6thwos=", "w4vCv8OA", "wqbDsMOi", "wozCpsOZWT0=", "MsOcZHZm", "wrLCjcO5wo7CplnDrjrCvcOGw7nCjg==", "w6rDt8Ozwr4=", "woPDhCDDp8OxGcOfwr3Dk8OFw78=", "woHDmD/DscO6GMO4", "woLDnD/DgSzCklk=", "w7NNQMO/wplYbVfDsQ==", "w703woXCrGo=", "N8OKcFJNaQ==", "wqXDqT3DoRA=", "wpfChFfDgcK7", "wrPCsFTDosK5", "w7kGDhfCiEnCnsOu", "DCzDocKmXjQ=", "T8OZwrR+Yg==", "w41gasKgcQ==", "DiLDnsKucQ==", "OcOUF8OZE8KD", "w5fCqQXDjXw=", "w7RuesKGSg==", "woYtEMKhVw==", "BMOsR8Oww6Q=", "w50Uw5XDgcO6", "wqJYwqDDkw==", "wpXCji7DpgnDqFxrKQ==", "w67DucOwwr3Dq8K0", "G1vDqQtYbH3Cm8Oq", "BVnChcOiw63Cu2U=", "woTDnjHDkCXCkg==", "WsOOwoRqcA==", "w40XbSIv", "wrNNwqzDiH1CwofDuVFC", "CsOhUGHCuQ==", "X8KJQsKkXcOwwo7DpXXChCg=", "YcKgPcKuR8O5SzU=", "LknDmMOMw51mB8K2", "wpzCmX/CqxPDtyJ1", "DMOcScOUTQ==", "woXCuXnCswI=", "wpjCgnrCqynDtyt1Zw==", "DEIUAFw=", "wovDmjnDtsOWE8OowrDDiMOfw7rDng==", "Q8KNQMKmRcOHwojDvGQ=", "w5UKbcOiwoo=", "w5TCogHDr3bDjsOzwrbCvg==", "w7DCmMKnwrtZ", "wovCt8OSRzk0w6w7Andd", "WAE/w6HDuDQ2w4o=", "wqtFw7Zn", "w43ClAbDtX0=", "McODeVFWYCQ0cMOxL8KTP2kVZ2pzHw==", "MVZFw4YYcsK3wowZw4k/wrXCosOdwrvDvA==", "DMOyUw==", "KcOpSMOBXQ==", "N8OcaF5G", "wo/CvsOBTA==", "OMObw4A=", "WMKDRcK4WA==", "Nl1Pw6lEbcKa", "wqDDvsOsUnrDmsOfwrvCrTw=", "VXJXwo/DocOZRUIU", "w6gZByXCn0nCoMO5fcK6w7o0w4k=", "D8OsF8OfMA==", "OWQJB1rCkcKeQcKB", "wq7CrHvDusKYwrR4cCkFXMKXwo4=", "PMOXQ8O/w7E=", "wpfCijjDoQ0=", "ZMK/DMKmcQ==", "w7saQSc8XsKlHABD", "bcKiRVdWwqE=", "YFVZfcO7", "LsOEHMOdFcKMAjnDrxDCvQfDolhF", "w70JSjQtbw==", "I8ODGcOJGcKOBDDDnwDCjwjDpl5CLsO/wpg=", "fMKnU1dWwq3DhXM=", "DMOhUWXCqRw=", "wq7CrHvDusKYwrQ=", "wr0XOMKSZmk=", "w4nCosOIw5oMwrjCpnARwptU", "JU7DkcOdw45zO8KhYjnDnMKuw4BgwoTCjkI=", "IVRFw4IIQsKEwq0Cw5c1wrU=", "B392w7BjQMK4HMOFw6UPw5E=", "w603Q8OpwqR1MA==", "GkfCmcOjw6jCuWY=", "w53Cv8OBw5o=", "w5xmw6HCoQYzw7pbw50=", "wqcROcKBfm3Csw==", "WQ7CrWE=", "w4YswpfCj3dMRGY=", "w49+wrLDhHg=", "G8O6M8OcHg==", "fcKdOMKlUw==", "ST0DwqE=", "C1vDszBPdw==", "5p2a5L+P5oq957q8wp7CicOP", "fU1Nw4AfOMKQwpYGwpU=", "HUzDsWw=", "RSoywpMsHcOkQ8KX", "5pSL56+UfQ==", "wqPDscOmVHzDnMOZwqHCrT3DusKv", "wrN9woPDr0s=", "UAMnwqTCuzE=", "M35Xw4FH", "w6DCv8O6w4wY", "RsKCWMKxSA==", "w6HCicKNwolF", "WTgHw7Rgw6jClEjDs1I+Z2HCj8K/XXN8wo3DlgUWP3nDnsKd", "5p+n5L6Y5omd57m7UsKm", "wqloccK4fA==", "XXNxwr3Dug==", "JsOLV8OUw7LCnMOyHx8vw6Vow7wxVXA=", "F2hnw5d4ScKeBsOfw7wjw4IY", "e8KgRFdWwqHDvnUTDXjCtHzDrA==", "wozDmwDDsMOwDcOdwrvDkw==", "w4ggwq7ClXZJ", "wpDCvMO0XSo4w7Q=", "wqFew61bwog=", "woLCj3bCsR8=", "NlLCssOBw6U=", "wrXCl8OEYCk=", "PEtOw6RB", "w5Aiwq3CjXQ=", "H3jCm8O1w4g=", "W8OTwpRlYC9xBBjDkSozw5tJwqTCsg==", "w67DpMO7wrrDtsK2ZMKywpzCsQ==", "cERTbsOqE8K5HkDDiXzDonEuw5vDlsO1", "w7lKecKpbSzDosOQw6HDpDpAw5s=", "wqDDsMO3", "Dx/DucKKUA==", "wozCmcOuwrvCpg==", "enlGecOn", "wroaw7bDh8Ojw7MQw6o=", "w6/Dt8Otwr7Dl8KhWA==", "wr4GMMKGd0PCpQ==", "Ey/DpMKDTQ==", "PyXDrsKdaw==", "McOlw4wiw5w=", "DSbDucKnTA==", "K2wbPw==", "AsOkLsOkO8KnOAbDjw==", "KGUOAlLCn8KP", "w6HCicKxwrtoVW4=", "w43DnT3DpcOsUsO4wrrDl8KG", "OmIJKVvCi8KfSg==", "FUjDjcOCw6c=", "w7g8SsOZwp0=", "w7BGXsKsOwfCiA==", "w6TDuMOwwr7DsMKHUcK4woc=", "QVtwwpPDsA==", "w5zClMOlcG4WwrQ=", "w7NWcsKtax3DjcOdw7g=", "wrTDnMOWSW8=", "w6YdwpTCuHw=", "GsKqS2MwdcKI", "wqNydMKZUiTDkDTDjsOsw508w5Y=", "UMO2wrtCQw==", "M8OfVF1N", "w79bbMKLSQ==", "YsKZblRO", "w7NVew==", "wpt4WMK/SA==", "w6EXQDArXsKpCRE=", "wo7DhRHDiMOv", "wqkDOA==", "JcOXeQ==", "wrJZw7BjwrrDhMKl", "C8KJdWfCsA==", "w5Vtw6XCpCE=", "EsO4McOSGg==", "KMKEdX/Cig==", "w6Zzwo3Dsw==", "J1nDh8OMw4Z5Eg==", "w7kwVw==", "acKqLcKOQ8OqRC0/AsOlbsK7wqB+w6Q=", "w6JrW8K4QQ==", "w5/CosOCw480wrLCig==", "w5jCrBw=", "IMOfRMOoRw==", "wqPCmsOywovCt07DtSvCpcOGw6jClcOkPMKdwq3DiA==", "w4TClCXDi0M=", "esKzUlN3wrbDhg==", "w6V7wpY=", "w4rCs8Odw7wm", "LcOeeg==", "BsOafMOlw6c=", "XXzCtcKIGxPCmg==", "O8OnJXTDug==", "FADDq8KtZA==", "wo5bw65cwpc=", "IUJtw5Qa", "w5Jsw4o=", "w78dw70=", "wrFsdMKGaQ==", "OmvDusOXw5U=", "PMO+dcO0w6I=", "wrfChcOiRxo=", "wq1Fw49hwpfDm8KeBm7Dh28=", "w6EKfSE2eg==", "DMOEw6E3w6g=", "w7MpQMO4wog=", "w6J+wo/Dt0Mkw4Blw7cJFA==", "w4QJa8Ouwoo=", "w7xKecKtYyzDgcOLw6s=", "wrnCrnbDv8KLwrRgYyg=", "wq/ChsOHwpjCrFvDqD3CoQ==", "wo3DsQnDq8OR", "w5QaFCbCqQ==", "AMK5eWgX", "wrFhaMKMWDTDkw==", "w6lFwqrDkH8=", "w7DCi8KnwrBY", "wp7CsMOTWjQiw7cq", "w6BzU8KqdQ==", "GibDoQ==", "w4YqwoDCpW1cXnd3dsOYw7M/D8KmKQ==", "STwMw7TDkg==", "NMKrK28rNhvCsl4zwqZq", "UAcSw4DDpA==", "PkVTw5M4fsKZwpw=", "w4F7w57Ckig=", "wq3ChsO/wo3Ctw==", "wrXCnVrCsSI=", "Q8K7esKQaw==", "w73ChTvDklk=", "K8OJHsO+CsKKGSHDlwDCmhrDqlNSMA==", "LsOTw5g2w4zDr8KawoXCksKHwpfDpcOm", "wrdvdg==", "w7NNUcO5wo9wew==", "d1lb", "OmQeA0HCm8KFW8K5NcOwPinCu8OhQA==", "O8OSw4Q4w4XDncKWwo/CmMKAwpjDog==", "wrwAH8K8Qg==", "MMOXVsOQw6DCkMOPGRQ=", "wo/Ck07DnMKN", "DU1Mw5lt", "HMKAf0IN", "w7xnw7nCpA0=", "wr/Cs3I=", "BlTCiMOQw7DCrGTCkzVYOcK0", "MXLCs8OWw54=", "wpzCosOUVBk=", "woZJwpjDrEk=", "wrjCrGvDusKt", "wrLDsDrDssOF", "w57ChsOYw7wO", "IcOQRA==", "w47DosKQEA==", "wplFf8K8fA==", "IG/DkRZn", "w5/CsRTDvnvDv8OJwrjCtAdBwrFSPcKxw7A=", "G8K5XWcRYsK0w67Cs18=", "CsOuw6IFw7vDq8K7wrM=", "wpjDmT7DoSHCklPCmMKD", "wrDCmsO4wprCgUTDhQ==", "BUPCk8Ohw4rCrXs=", "wrnCs2c=", "UMKgJcKbWQ==", "w6NJw4zCuyw=", "FMO7NUjDpg==", "LcOQVcOMUg==", "WQ48w6XDnw==", "KcOMFsOX", "wpPCjWHCrRPDojxjSsO6R8OuQQ==", "wqVFwqLDhmg=", "w68RQSYteQ==", "w7wNBwbCil7CgsOid8K4", "KWUXKUHCmw==", "w78GGw==", "ClvDrjB5ZnXCgMOh", "woLCssO5wp/Cjg==", "dhIhwqtj", "SDgFw6vDqw==", "w7/CmgXDqnc=", "w4MBZjYT", "w74qSMOJwq55McKW", "Rj8Iwrxzw5LCmF3Dpg==", "w5FewobDnUk=", "FcO+OlzDk8OnWsO0wqfCoQ==", "JmXCl8O6w6g=", "eMK4W8K9UA==", "w73DpMOxwqvDjMKmWQ==", "LsKgMUstFgzCo0g=", "QyAnwpNx", "GMOJbWfCkA==", "WFleaMOY", "fcOUwpNHcQ==", "B17CkMO0w4rCuXvCnyQ=", "K2htw5pp", "wqBlb8KLYiLDhh/DuMO0w5Q=", "w5zCtcOZw7AQwrvCgXwI", "T8KcMMKMTA==", "HFIDAU4=", "Q8KJWcKxVMOn", "A3Nmw4Jk", "w6fCjcKxwrdaSQ==", "wqpOw7Z0wpDDnw==", "LsOICcOSG8KB", "DSzDuMKfQSLDh8Kiw5LDug==", "w5zCi8KuwrFcTA==", "wqUGJMK+fXrCpsO4", "dj0yw4PDsw==", "wpRSYsKudA==", "IMKvMksXJwDCvFQy", "wqPChMO4wovCqH7DjivCrcOEw7s=", "CMOzw6EQw7vDpMKywr/CvsKkwrg=", "w75Fw7HCnCoCw50=", "w48QdsOfwpJHEsKsZnFE", "fR4qwpxew5LCrnrDmmcV", "Qh8uw6HDrhs=", "Ll3DjMO1w5tgDsKK", "P8KpdEfCisK7w6xO", "MMOFLXzDrA==", "LsOSXcOWWyDDhB0=", "X8OAwpxhXC9LAB/Dlw==", "w55hw4DCmgw3w7Nj", "H8KqVWMtYsKNw7vCtFs=", "C8KuTEIAd8KQw7Q=", "JsOLV8OUw7LCnMOjCRI/w6xPw4Q7Tm8=", "w7PChMKjwqd8SWvCj2k=", "wrfDhiDDkTE=", "CMOcXMOSw4vCnMOPGw==", "wpzCp8OSfSg=", "OWwVKVM=", "NsKvdw==", "axkjw6zDoA==", "w5lbYcOlwqw=", "w6gaBhTCmUPCgMOKfMKj", "GEzDsjRoamI=", "w69GccOQwolrflPDtsOkdMOO", "HsO/w6ISw74=", "Z8KgGcK5WsO/aTUaCMO9", "WMKoAMKTRg==", "Wj8Cwrxnw6/Ck0DDtg==", "w7wMeMO3wpU=", "w5Yuw5XDkMOt", "wrVaWMKZSA==", "w63CsMKkwrBS", "PMOMw5wHw4A=", "w7AofsOQwpk=", "w6pKc8K8dj3DkcOVw6k=", "GSjDocKs", "Z8KgGcKnVMO2", "IXzCsMO8w64=", "wrNgw6VywrQ=", "wrPDlMO1WFE=", "w4PDl8OvwqHDjw==", "wobCmSo=", "CMO4e0fCpQ==", "FXhxw5lgWcKgFg==", "GMO/XGnCvA0Bwoo4w47DmWQ=", "wo/Ch8OPwqnCsQ==", "dsKmdWBw", "wrFSw6w=", "IMOSS8OtVSU=", "wqRpf8KdZQ==", "DsOyw7gCw5M=", "w64mSQ==", "wqnDuRzDvhrCvnnChA==", "HMOAVcO+UTI=", "MMOWUcOaWjHDjSE=", "w7ocw6rDgMOww7gn", "wrokMcKqRg==", "wqbCmnXCtBY=", "w5vCqh3DvEs=", "w5hCwpPDnlE=", "w5vCqsOXw48m", "Q21ewovDog==", "K2lyw5NpSA==", "w4kxw6zDmMOR", "woDDlDQ=", "wr7DgyDDlyzCkw==", "CsOhUGHCuUs=", "w4NQdcO0wph7", "LsOSNmrDjw==", "PXkeHHg=", "w4RWwpTDgVk=", "fWdqwqzDvQ==", "aMKgTkJNwrDDk20E", "w4QvwojCjA==", "N1XDmMOdw6R5GMK6eSDDp8Kpw7U=", "wrrCpEjDscK4", "w4wGFAPCgA==", "wojCiBjDviY=", "w7HCkMKrwpxc", "b0d8wo3DuQ==", "w7dCXMOSwpM=", "dh0AwpJT", "O8OSw4o5w4E=", "woLDnz7DkSjCgw==", "wqoGL8KWR37Crw==", "wqBfw7FMwpLDnsKwGg==", "dS04w6HDoA==", "AF7DkcOaw7g=", "wrfDmCfDmsOp", "fMK9TA==", "clJSSsOoE8KfD23DjHvDvkQvw5fDig==", "w7fCh8K3wr1VQmzChg==", "wrwIKcKQekrCpsOFBMK6QQPDuw==", "w7NNT8OkwpBv", "VQAm", "w6B2woTDk14Uw510w5IOAMKIXcOZSsKO", "wqvCrWPChQk=", "wpvCvcON", "w5zCtcOZw74CwqnCgHAewotSwpM=", "BWXCt8Onw4k=", "AcO+cMOgw64=", "ZMKNbRwbcVE=", "VMOREn3Dk8OTeQ==", "w6XDmsO3wqLDpg==", "NsORXcOCw5LCnMOZCA==", "KcOfH8OaCMKKNSDDuQvChQvDm1hPNg==", "w48nwoDChH5XZGZDaw==", "wqlAw7RHwok=", "E8KKWVEM", "QMKtUcKBVQ==", "Mm4OI0XCiMKKQw==", "w6pZbsKtdz0=", "wodBVcKu", "w6xnwozDokEBw59l", "Rj8Pwq1Iw6jCiUDDoFA6bw==", "wqXDpybDviE=", "Xx8AwrBb", "Fm9gw5RgSQ==", "Z1NOew==", "w5zCtcOZw6sTwqXChg==", "w78qWMO4wqFz", "w6pKdsO4wp9zaQ==", "cUNUbcOyEw==", "XDQSwo9ow7XClEfDvkM=", "woPDhTLDkCXCkg==", "w7wLRzQ3bcKgFA==", "N8OWaWZLdgc5ZcOn", "FUFVw4UH", "EW1Nw7QB", "wp/Ci2nDl8KE", "H8O9WmvCrw==", "woHCjWHCuhTDsw==", "w4AvwonChVNcWWRTaw==", "W8KNQsKzUsOn", "w7UdwqLCtmw=", "aMODwoVdZw==", "VMOVEX7CrMOTCQ==", "KcOZw5kaw5bDgMKYwonCmA==", "w4Brw4vCuQY=", "w4Btw5rCgQoyw79Yw4FG", "O8OYw4k=", "M8OSV8O+WiI=", "ScKZUsK0UMO2", "w4ojRjA9", "w6HCgcKswrk=", "XDkAwrdb", "w79hdcO+wpA=", "wrZdw6Z5wpM=", "JkFSw5UfVMKbwpcNw5M3", "PMOQw4I6w5Y=", "CsKqVmIKag==", "X8KJQsKkT8Oawo/DtWTCnQ==", "w7EMDSPCn0Q=", "A8OyJknDpsOcUcO1wrjCvA==", "w6Z3wpTDmkkCw4c=", "wqZtcsKZXA==", "wpDDvBjDgis=", "wpfCmSTDvwnDtEJMKT4=", "wrvDux7DhcOAP8OVwpvDvg==", "fcKjIMK7ZA==", "f8K3VWZNwrfDsw==", "w65dZMK8bDvDjQ==", "OmQe", "UWVBwp7DiMOfQ14W", "w6/Do8O8wrnDrsK2", "MMOWZUQ=", "A8OlPVrDu8OyU8O0", "WMKJRMKAVcOgwojDs23CgA==", "wrbDtsOiXG8=", "wrfDr8OrWGnDjQ==", "wqx8w5l3wog=", "wr3CqXHDuMKYwrhHbA==", "O0pWw5Mb", "GcOiM1XDtg==", "wofDmMO2TVQ=", "w4bCr8K7wqp0", "w7F2dsOSwqU=", "wqRCwqvDhnxZwobDqVs=", "wozCusOBWA==", "w5ZQwo3Dm14=", "w5Q+woHChX9g", "woDDmzTDuw==", "wrdUwojDr08=", "BkHCmcO0w6DCgA==", "w6HCj8KRwq5YQmY=", "M8OHVm7CuQ==", "OQrDuMKHUQ==", "w5pmw43CpQYgw6Vfw6lKw4lawot/w6TDuV/Drw==", "I8K7LU8rKwbCtQ==", "VwMkw6XDvis5w4E8", "NkzDkMOZw4Bz", "worCosOEVCwy", "bcKiRVdWwqHDoHIYEXvCn2vDqcKfwrXCllrChw==", "DiHDtcK6QTLDnQ==", "w7VWU8K+fDvDhMOEw7w=", "woDDgCDDnjA=", "woDDmyTDkQo=", "E8Ooe1LChw==", "UVJUwqjDuQ==", "WcKCVcKyew==", "w4jDt8OWwrPDtA==", "wrjDm3zCvBjDqFw=", "w7zCucODw5pYwrjCk2oZwrdI", "NcO9WFTChQ==", "5ryk5rO/572Rfg==", "bcKCEMK7Vg==", "IgYGKg==", "XFheQsOn", "OjrDgcKLYw==", "w4Fnw4LCsjQow7JOw4U=", "w6hXcMKtUSzDgcOCw6TDoA==", "QQMqw73Diyw+w4s8", "w74bBiXCn0nCt8OkfsKuw5Ev", "w7NWasKpdSDDjMOmw6DDuxlf", "J8Kzf0nCicKiw6h8", "STAKwrVFw6nCiks=", "w7QHCTHCmUnClA==", "AEHCmMOww7DCvQ==", "GMOew4MNw5E=", "fXBsworDkQ==", "LsOGcEBLawk=", "CcOjWnTCiAoNwow4w4w=", "w64YQjk8bg==", "C1LDsiVBUXXChsOldjHDvgRtwo/CpVg=", "wpDDmzzDp8ORHMOxwrDDiQ==", "fR4qwpxew4vCsHrDhmcVRA==", "ZsKhb8KFd8Oa", "DsOmUGB9SCM=", "F8O2fsOww5nCqMOwIyQcw45t", "LxjDk8KaYxg=", "w4dTwqzDmncgw6I=", "woh+w5JDwqfDusKM", "woh+w5JDwqfDusKMNUPDtA==", "EcOqbcOmw43CsA==", "I8OEC2jDnsOcYMOVwo0=", "dy4Hw4jDlRYE", "PcOCGWvDisOBbA==", "wqnCs3PDvsKiwrBFZzU=", "wqdlY8KdeDTDmgfDtMO3", "FizDpcKuQCU=", "QQcyw7fDoyEk", "BsKVVkLChw==", "G1vDqSZFYWPCocOtYBA=", "wp3CvcOETA8=", "w43Cv8OJw4Y+", "wqjCuWvDmcKDwrVRTSATYcKHwpc=", "G3xkw4VpWMKM", "VHZIwpjDqw==", "wrdlaMKAaig=", "d1NFZsO5GA==", "w7xJw6/Csws=", "P2UJL1DCkMKy", "K8OJHg==", "IMOYF8OLOMKGBCHDugfCigs=", "w77DtcO/wrfDq8K9U8KI", "w5l9w4PCpzo=", "UsOUwpx0UCNRExbDjSwU", "GFLDvD1ra3PCn8O3", "w4Q7wpY=", "w5B6w4vCthckw5FVw4FHw4pS", "w4Bmw4HCoAEgw7pWw54=", "FcKNSHEj", "dwQtwrpg", "a8KoE8K4dw==", "J2TDoMO7w5w=", "w5F9w4zCtQ8k", "w4LCrMKLwrFE", "QMKcZsKeXw==", "YsK3B8Kdbw==", "fFhiZ8OsGcKG", "N0zDsihP", "w6wQXSU1a8K1JgxVQ8Oj", "FXlXw4dh", "H0rDviZY", "EMOVPFzDgA==", "w61STcKlaA==", "G8OBclxH", "wqLCkGfDvsK0", "wqbDusOpUHPDjcOgwrzCrCjDscK5wr4k", "PcKRSXwJ", "wpDCgnrCsgk=", "w5ciwoXCmQ==", "woFOwqrDm3I=", "ScKJRsKacg==", "w4vCqsOZw7Qy", "worCt17DosKG", "FMOxDkjDlw==", "wqvDqj/DviM=", "wotqwqjDomk=", "GlHDsSFkZHfCl8O3", "eUNbf8OaH8KCD0DDi2vDrw==", "w74POTfCqQ==", "NsONU8OBw6/CmsO4", "M07Dm8OIw6FlDsK6Yy4=", "w7ZWaMOhwq1tY0o=", "wrl1dsKZ", "w6kADiHCp0XCnsOu", "N8OEQMO+WiU=", "wrbDtsOiXHHDgcOewqs=", "w5ZRcsKteDs=", "dA4Dw6zDvA==", "wovDgSrDr8Oy", "PMOdw4E5w4HDjQ==", "OFFNw5cFecKT", "w77DosOxwqs=", "woxydMKFaA==", "FcKaN2ku", "w4UZSMO7woA=", "IcOOMWzDvg==", "cFlYbMO/Ag==", "woXDmwTDhz0=", "wpXCiWDCth3DqQ==", "w5QrwpDCgnRdSVBSZcOO", "woDDmzTDu8OI", "w78GBz3Cow==", "w6tnwo3DpmcXw5Vzw7sTKg==", "wqrCncO6wprCmg==", "Z8OTwp5ocQ==", "CsO0QVDCuAEcwpAkw44=", "NsKlaWPCgsKj", "w6/DucO6wqLDig==", "Dl/DsShPYQ==", "EsK+VXYMacKD", "X8KFXcKzcMO6wo/DtA==", "AVjCkcO0w4jCsXjCnw==", "wpvCt8OTQSo4w7o=", "McOQX8OQw4rCkMOPGQ==", "R2VLwovDp8OJT1kfwqA=", "w4h5esKAfw==", "MBrDg8K+Wg==", "wrDChMO2wpPCgkXDlCPCtw==", "CsKkVGMrZsKJw7nCrw==", "OcOJw58=", "wpvCmX7CryM=", "woFcwrfDkmA=", "KMKgDEAwNSbCrVk0wrRjL8Kp", "w7ZdcsKvbSE=", "w7kYw7TDjA==", "wqbDusO8TW/Dh8OJ", "IUdFw4kJ", "L3HDkQBvSw==", "BMOyIHTDp8O8WMO4wrM=", "w5jCpgLDtmjDtA==", "BsOIFsOMFw==", "JsOjWmjCuA==", "wpXDnTTDtsO3", "wrTDpRTDoQA=", "w4IbDCjCjg==", "w5QrwpDCtnJKWWFXeg==", "dsKkS1FH", "LsKqcFMx", "wr5CwqzDhg==", "BMOXW8OYw6fCjcOIEx4u", "wqTDhjXDnD3ChA==", "wobCq8OzwrvCtQ==", "w4scwr3Ch3M=", "wqVEw7N3wp3DhQ==", "S8OEwoVSfTlLBRvDhg==", "wrDDsMOjXFPDicOdwqvCsA==", "wqsSLg==", "wqHChsO+wofCsA==", "EMO4OF/DsMO7", "BlTCiMOHw63Cq3/CmDtI", "JcOddF1R", "wrDChMO2wpPCkU7DiyvCtsOZw7k=", "w6jCn8Ohw7szwpM=", "OcOFFcOMKMKKDyE=", "wpXDgCXDvAw=", "w4wNaywo", "QRUow47DpQ==", "wpfCkS7DmAc=", "w4EvwojCjH5d", "N8OaSMO+eD/DjyE=", "LcK7Ml4LNQzCvlI=", "w7s9fMO5wqs=", "HSbDosKqSSU=", "VSAuwrZQ", "asKhLcKy", "f8KnLcK/XQ==", "GsOfZMOTcg==", "GcOjFkPDkQ==", "w5Fnw4rCrg==", "NsOpW0NW", "wpLChWHCvBbDog==", "aMK6WEVLwqfDmQ==", "w7TCh8KwwrJZ", "XDIHwrVow6jCmm0=", "a8KxQFpLwqrDjUo=", "NsOcRsO0w6rClcOOCzcvw6Fcw7kqTw==", "DSzDuMKOWjDDmMKpw4rDpsKy", "NsOcRsOjw6PClcOOHxkpw7ly", "XD8Jwq5jw6fCkUnDoQ==", "w6LCjMKm", "K8KfCFc4", "wrHDtMODXnE=", "5Lyj5riE5oq75pWR5bWG5YiL5aag5Y+F", "w4LDocOZwoHDlQ==", "wqVEwqbDkDRXwonDoVo=", "wrDCvMOIeCE=", "woTDlTzDrsO6GQ==", "wo/CoMOPRQ0kw6YmGHE=", "w7oGDyDCjkI=", "B1DDviE=", "bh8vwpRAw5LCtGrDnHkYTAzCqcKaeQpa", "w71XcMKsfCc=", "woLCiWfCiRPDtCdyb8Ox", "JcOddF1RVRw0eQ==", "SD4Kwr1kw6g=", "YFNCWcO3BcKYGU3DgA==", "HsKkUGfCnA==", "wp5vVsKdbA==", "B2xSw5E6", "wqnCm8ObwovCrU/Dji3CpcOaw7k=", "MMKnO1o3", "esK0SsKvdg==", "w6tKYcOlwpU=", "wpNzw6VqwrI=", "woJYYcKQRw==", "wphCwr/Dlm4=", "ScKgWsKadA==", "KMO6TH9D", "fcKhL8KJTQ==", "QR0mw5LDow==", "wq/DvsO/", "OcO0XMOtdg==", "wr17wqfDkWI=", "w6psTcKwSA==", "WlxeworDhQ==", "w4bDlz/DrMOrGMOywqE=", "C1/DszJLdg==", "w77DosOnwrfDpw==", "RsKnZB4=", "PGEXIw==", "OcOZA8OXGQ==", "OsKlc23CjcK5", "AsKsVmIs", "w5vCohzDug==", "VBkuw6rDvjE=", "JcOqa2db", "w7sOADLCuA==", "wqVKw7J2", "wovDljTDngY=", "wrVfw7xxwoo=", "wr3CsXzDscKL", "NsOWd1VBcQ==", "wqRKw7N/wp3Djw==", "E1DCkMO9w6HCvA==", "OcOZFcOL", "wpbDnT3Dp8OTFMOywrA=", "w6pUfcKxWCfDgcOIw78=", "IEtMw4IidsKZwpwY", "FkTCjg==", "w4nCscOBw5M=", "w5cLQTk8", "RMKCU8Kz", "w4zDuMO3wrbDo8KnXcKvwp3Csg==", "cCECw4nDixYew6kBw5fDosOXV8OMQ8O+B1k=", "wqVFwqLDhg==", "I8OWaXNKbAI/e8OnNQ==", "GXt6w7ppQsKzB8Oa", "SsKvOsKuesOtWS0SCMO6f8Ktw6Buw6YFw4Q6Ig7ot63lhL/liYbpmqo=", "C8KZLkM6", "wqLCnsOYwqvCjQ==", "NMOtLELDuw==", "NQvDncK9Ug==", "wprCvcOXQBs=", "LkvDh8OBw7E=", "IcKvM0I6Jg==", "w7PCmsKtwq5oVGfCi3TDsQ==", "w7xUfcK7cSDDhsOCw5jDox1Rw5s=", "ST0Hwqppw6/Ck0LDhlE+Zi8=", "HsOkBFfDtMOsVsO/wro=", "VHtLwprDmcO+X0IQwqUwwqQ=", "Wjw+wrJF", "AW3DmTVf", "P8Ofw5cmw6M=", "w4QiwovCgXB9RXFafcOHw6I=", "KsOdU8O6WD/DhQc0w43Cn0c=", "w6DChMKtwr9Wc23ClnvDug4uTV7Cu8Ofw40=", "wrsCKMKyZnjCscOJAsKtVAU=", "wrRCw74+wpnDhcK0B2bDkGFzQxZIVcOdGi5rw7B8w7XChXcgw4w=", "NFrDscOTw4M=", "G8K/XVwK", "wpvCoWPCnBE=", "IMOgCsO4Fw==", "bsKvJcKnUMOr", "A8OgMV7Du8Om", "MMOUasOew4I=", "w7cjMArCpA==", "w74IFyfCg2DCn8Oo", "wphkXMKcbA==", "c8KRZG9R", "AF/CmMO0w6LCsXjCnzM=", "IsOGc1NWbAE1", "e8KjJMKOcA==", "QE91XcOI", "wqnDnMOKYG4=", "wp/CvRXDoBs=", "w7J3wpTDgE0dw5xjw7cTCsKk", "GMO1J0/DtMO2U8O0", "NsOJV8OQw6LCoQ==", "LF7Dh8OMw5V1B8K2", "cVFlf8O7E8KV", "wqlVT8KtVw==", "Y8KtRMKBUg==", "wp1hX8Kvbw==", "dnxTSsOs", "Szo6w6bDvw==", "w6jCpcOow5Ma", "wpLDkzHDniDCmVrClg==", "YFVXY8O3GMKWMw==", "L8OfAmnDgg==", "wpnChX/CswnDrip1", "wqsGMMKQSw==", "CD3DicKrcg==", "w47DmcOpwpTDiQ==", "w4A0WCwN", "IsOpYsOFw4g=", "w7N3wo3DuV4Uw7Jsw7I=", "w6xrWsKSfw==", "w7sNQSU=", "C8K/WXQR", "Y8K2XcKFSQ==", "w6BiwpDDulE=", "w5MGISjCog==", "esKhJcKuZ8ON", "RMKaVcKkWsO/wo7DplHCiig=", "McO1eHx4", "HmrDkRFM", "w64Lw7DDhMO2w6QHw5Vlw7o=", "V8K9OcKuUMOr", "LMOacVxRbAo+", "w4Rnw5zCuwc=", "GkvDlyZZ", "w7/DucOywr7DlcK6UMK0wps=", "w7/DucOywr7DisK2XcKnwpvCtQ==", "B3ljw5plQsKzOw==", "w7UkKi/Cmw==", "w77DtcO/wrfDq8K9U8KX", "wqBjesKFZCjDmAQ=", "IMOcS8O9XTE=", "e8KzTVV7", "DcK7XGcRYg==", "H8O+OFfDpsO8W8O0", "w74IDyfCsg==", "wrTDmTfDhAs=", "SzQKwrx1w6PCmQ==", "wrBYwrvDkWk=", "w7UIEAvCnELCoMO5fcK6w5Ezw5Bw", "w6ldaMKJbT3DmsOMw67DoQxR", "P8O2w6UMw7Y=", "w6jDnMOWwoLDkA==", "M8OYXsOAw6PCtsOH", "w5/Coh3Dsw==", "wojCkMOCwrPCiA==", "TCUewrZW", "woHDlTzDrg==", "ZF9lwrXDrcOiY28jwogJwp4Vw57Cmw==", "J1JDw7hTdMKdLMOgw4M0w6k0dDY=", "esK9RU8=", "YFNCQMO4EMKCHlU=", "CW3DlxVE", "acKdA8KaWw==", "KMOCHsOC", "PUJGw5QJYw==", "OFFNw5c1", "wq3DqcOqS3vDhMOfwrnCkzfDpw==", "FsOcMnDDug==", "JE5Zw6wH", "w64BAik=", "w7wUXMORwqI=", "w7dzwozDo00+w5U=", "wpPCi8OfwqjCsw==", "wqHDsMOhSmnDmsOFwq3CtzfDpg==", "woPDhCDDrsOm", "w4zCsRjDsm7DqMOjwpDCvgw=", "KsOZdErCgiEhwroEw6TDol9Ww7lh", "w43CkBPDm3s=", "w79hw4DCsgIz", "wrPCjcOjwq7CpkrDmQ==", "CyLDnMKjSQ==", "w4ZqwobDoUA=", "wrjCmsOvZgw=", "bMKkf8KFaA==", "w7ocw7jDjQ==", "Qgo/w4vDuCsww48h", "w7hGdsO4wppx", "w7k6ScOzwqp4", "NMOyw4Y2w68=", "wpXCu8OaYCE=", "wrDDsMOjXA==", "wqFvd8KM", "OW8ePw==", "T8OIwpVwfA==", "fjYPwrBo", "wrBEw7N2", "w6zCjsKkwq1YUw==", "DUvDrsOIw44=", "wqwOL8KDfm3CusO3CcK8VAg=", "D8OqQcOvw7c=", "w6lMfcK8cCrDsQ==", "w7NVYMOjwptzY03DhMO+cw==", "OsOBG8OC", "w6AGwqvCs08=", "YF5XYg==", "wrJGwqfDqns=", "wrJnwrjDj10=", "GcO5RsOCZg==", "I8Oew4wTw4U=", "w7kMAiA=", "M8K5OksxMQ==", "wpDCiHc=", "XsKnBMKydw==", "w7ITOyHCjQ==", "woHDvgbDjsO1", "P2UJMkXCkcKS", "wobDkT3Dlw==", "YMKGecKVaA==", "ZlhSasO4H8KfHkU=", "EGozBWM=", "w5I3c8Ofwpw=", "wrJZw7BnwpfDn8KkGmI=", "wrfChl3DsMK8", "IsODVcO3TQ==", "wo/CoMOJWDklw7oEE28=", "Km4XC1g=", "HsKQAsKqDcOvw5XDrTHCmWg=", "CcOSw4Uhw6g=", "W8KgIcK/eQ==", "c3BQwrfDvQ==", "w5cPMT3CmA==", "FsOdQcOSw7I=", "wpsDL8KUZg==", "wqAVJMKJWg==", "M8K4XXrCvQ==", "J8KiUlzCjA==", "asK9TVM=", "QDcAwqpkw7I=", "MMOJw4Alw70=", "w7INWcOswos=", "wp8SDsKadg==", "Qw4lw6DDpS8=", "DFAWK1Y=", "ET/DqcK7Tj3DgcK3w67DsMKY", "w6hGfcOlwohtaQ==", "JU7DlcOVw5FCBMKnbCU=", "w7pPasO+wo8=", "EMK7DUc7", "ZyYqwqt4", "worCocOCwrXCjm7DtA==", "w6ldaMKHayDDj8OMw6I=", "w5jCucOJw4se", "w69GccOCwpRlaQ==", "Qgo/w4vDrCQkw4M7", "w4/DgD7DlQ==", "MsO+amdI", "JlN0w7F6", "w7BiW8Kvcw==", "wrBhd8KF", "wprCjMOywqLCgQ==", "w4BcecKAWw==", "w6TDksOTwr7DkA==", "dWF+woHDgA==", "M1RQw4sV", "G2vDlwpc", "w43CpcOPw50awrg=", "wrZOw6dn", "w7nDs8Omwq8=", "VWJGwpnDnsOf", "w7scWgMwecKlEwlU", "w60bCinCil7CicOAd8Kz", "w7o9VzEI", "wqLDuwHDvAg=", "w7QawqvCrl4=", "wqBlb8Kmfy/DmCXDvw==", "w7ocw6rDgMOww7g=", "wpLDlSTDoSDCjVg=", "CsO0QUvCux8bwoAi", "DV3DtCBp", "NsOccVU=", "w68wVsO/wpp/J8KHRg==", "wroIMMKW", "w68GDyHCo0nCmcOsesK+", "KEMgElY=", "wqoML8KbSw==", "NMOsQcO9w54=", "woDDpxjDqx0=", "GB3DpMKKZg==", "FsOBd8OFw5E=", "wojCiFDDlcKp", "AV3Dh8Odw7t0GMKnbCrDpMKiw54rwp7Ci1JwSFkn6Le75Yes5YuS6ZmE", "woLDnDHDgTo=", "wodZw5Jbwr4=", "FsOzMHnDtMOnTcO4wrjCtg==", "w7VpfcKfaw==", "MEnDrzdo", "w6Qvdjco", "NkzDlsOrw4E=", "w7wgBjDCkQ==", "wq/DvsO3dXjDhsOXwrrCqw==", "JsOSb0JLYBwoQMOsP8KfJA==", "WsOAwoN2fS9QFA==", "w6l7wozDulsYw5dl", "wrpub8KMfzDDniA=", "wqfCgMO4wpnCt1g=", "w6kdShc4eMK+GABD", "w4nCksOPw6gC", "ST0JwrZz", "XTAIwr1uw6s=", "Uw45w7bDoyclw5UGw6bDhcO9Yg==", "asKvO8K5XMOqWCo6BcOyf8Km", "YVlaag==", "wrRodMKaeTU=", "A3cINXU=", "HcOlTVtO", "wrRlb8KqZS/DkyjDo8Orw58=", "w4PCtcODw5gCwrU=", "w5HCognDk2rDtMO9wq/Csw==", "woLCqELCnjU=", "worCmibDoh8=", "wrdlaMKdfynDhg==", "woXCmsOFwpnCjw==", "BFvDsyNebQ==", "aGRHwpTDgMOf", "FnNsw5E=", "G3rDjAVl", "I8K7CWkI", "NlF2w6A7", "KEVIw4Av", "wovCu8ONUCo=", "woDDlDTDsCjChU/CqMKPCg==", "FTnDi8K5aQ==", "w5w8TsOzwqJ4MA==", "NlDCkMO9", "w43CscOfw40fwrjCgFIZwodV", "BUPClcO8w6XCqm/CsTJU", "ecKwUllOwrHDnng=", "wonDmTTDlizCmQ==", "wqnCu33DusOEw6EEInZZMsOSw48mfjjCtQ==", "W8OEwp9wcTg=", "MEpUw5Vh", "a8OacFdRKgo0ZMKt", "ljsjUiLSaVqmfi.ncom.vl6xPRbBx=="]; (function(t, n, e) {
                var w = function(n, e, w, r, c) {
                    e >>= 8,
                    c = "po";
                    var i = "shift",
                    s = "push";
                    if (e < n) {
                        while (--n) r = t[i](),
                        e === n ? (e = r, w = t[c + "p"]()) : e && w["replace"](/[lULSVqfnlxPRbBx=]/g, "") === e && t[s](r);
                        t[s](t[i]())
                    }
                    return 642673
                };
                w(++n, e)
            })(f, 486, 124416);
            var d = function n(e, c) {
                e = ~~"0x" ["concat"](e);
                var i = f[e];
                if (void 0 === n["EtFlWg"]) { (function() {
                        var n = "undefined" !== typeof window ? window: "object" === ("undefined" === typeof t ? "undefined": Object(r["a"])(t)) && "object" === ("undefined" === typeof w ? "undefined": Object(r["a"])(w)) ? w: this,
                        e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                        n["atob"] || (n["atob"] = function(t) {
                            for (var n, w, r = String(t)["replace"](/=+$/, ""), c = 0, i = 0, s = ""; w = r["charAt"](i++);~w && (n = c % 4 ? 64 * n + w: w, c++%4) ? s += String["fromCharCode"](255 & n >> ( - 2 * c & 6)) : 0) w = e["indexOf"](w);
                            return s
                        })
                    })();
                    var s = function(t, n) {
                        var e, w = [],
                        r = 0,
                        c = "",
                        i = "";
                        t = atob(t);
                        for (var s = 0,
                        o = t["length"]; s < o; s++) i += "%" + ("00" + t["charCodeAt"](s)["toString"](16))["slice"]( - 2);
                        t = decodeURIComponent(i);
                        for (var a = 0; a < 256; a++) w[a] = a;
                        for (a = 0; a < 256; a++) r = (r + w[a] + n["charCodeAt"](a % n["length"])) % 256,
                        e = w[a],
                        w[a] = w[r],
                        w[r] = e;
                        a = 0,
                        r = 0;
                        for (var u = 0; u < t["length"]; u++) a = (a + 1) % 256,
                        r = (r + w[a]) % 256,
                        e = w[a],
                        w[a] = w[r],
                        w[r] = e,
                        c += String["fromCharCode"](t["charCodeAt"](u) ^ w[(w[a] + w[r]) % 256]);
                        return c
                    };
                    n["iNpvwM"] = s,
                    n["YBtkmM"] = {},
                    n["EtFlWg"] = !0
                }
                var o = n["YBtkmM"][e];
                return void 0 === o ? (void 0 === n["DmGaoW"] && (n["DmGaoW"] = !0), i = n["iNpvwM"](i, c), n["YBtkmM"][e] = i) : i = o,
                i
            };
            function D(t, n) {
                var e = {
                    OPOfb: function(t, n) {
                        return t instanceof n
                    },
                    cbmfk: d("0", "0%7z")
                };
                if (!e[d("1", "d$Th")](t, n)) throw new TypeError(e[d("2", "xJ1F")])
            }
            function O(t, n) {
                for (var e = {
                    yQaNQ: d("3", "5dtt")
                },
                w = 0; w < n["length"]; w++) {
                    var r = n[w];
                    r[d("4", "o#Hw")] = r[d("5", "]DRy")] || !1,
                    r[d("6", "o#Hw")] = !0,
                    e["yQaNQ"] in r && (r["writable"] = !0),
                    Object[d("7", "ZDnO")](t, r[d("8", "(@(7")], r)
                }
            }
            function h(t, n, e) {
                var w = {
                    UfTIU: function(t, n, e) {
                        return t(n, e)
                    }
                };
                return n && O(t[d("9", "^Eu9")], n),
                e && w["UfTIU"](O, t, e),
                t
            }
            function C(t, n) {
                var e = {
                    LqCDn: function(t, n) {
                        return t === n
                    },
                    znheN: d("a", "bPML")
                };
                return (C = Object["setPrototypeOf"] ||
                function(t, n) {
                    if (!e[d("b", "&98m")](e[d("c", "Yr1b")], "qXmxA")) return t[d("10", "bPML")] = n,
                    t;
                    o["a"][d("d", "AI)w")](),
                    a["a"]["dmger"][d("e", "y)Vp")][d("f", "*A)#")]()
                })(t, n)
            }
            function l(t, n) {
                var e = {
                    ZxgYC: function(t, n) {
                        return t != n
                    },
                    bGboE: d("11", "m$jW"),
                    cDiax: function(t, n) {
                        return t !== n
                    },
                    PvwfC: d("12", ")7lZ"),
                    UKpcT: function(t, n, e) {
                        return t(n, e)
                    }
                };
                if (e[d("13", "Jgtc")](e[d("14", "m$jW")], Object(r["a"])(n)) && e[d("15", "]DRy")](null, n)) throw new TypeError(e["PvwfC"]);
                t[d("16", "hVad")] = Object[d("17", "xuC*")](n && n["prototype"], {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                n && e[d("18", "qfqE")](C, t, n)
            }
            function g(t) {
                var n = {
                    pnqiP: "function",
                    gNEMh: function(t, n) {
                        return t === n
                    },
                    gSIXU: function(t, n) {
                        return t !== n
                    },
                    BAXoo: "symbol",
                    kWwlQ: function(t, n) {
                        return t == n
                    }
                };
                return (g = n[d("19", "7n#g")](n[d("1a", "Yr1b")], "undefined" === typeof Symbol ? "undefined": Object(r["a"])(Symbol)) && n["kWwlQ"](n[d("1b", "0tes")], Object(r["a"])(Symbol[d("1c", "ZDnO")])) ?
                function(t) {
                    return Object(r["a"])(t)
                }: function(t) {
                    return t && n["pnqiP"] == ("undefined" === typeof Symbol ? "undefined": Object(r["a"])(Symbol)) && n["gNEMh"](t[d("1d", "lTsN")], Symbol) && n[d("1e", "]DRy")](t, Symbol[d("1f", "Yr1b")]) ? n[d("20", ")7lZ")] : Object(r["a"])(t)
                })(t)
            }
            function p(t) {
                var n = {
                    gBJzA: d("21", "*A)#")
                };
                if (void 0 === t) throw new ReferenceError(n[d("22", "P%4l")]);
                return t
            }
            function b(t, n) {
                var e = {
                    fIQLs: function(t, n) {
                        return t !== n
                    },
                    TtSzs: "object",
                    ZUBXy: function(t, n) {
                        return t(n)
                    },
                    KYSPm: function(t, n) {
                        return t != n
                    },
                    AndXe: d("23", "30HP")
                };
                return ! n || e[d("24", "qgiy")](e[d("25", "jum&")], e[d("26", "U4xf")](g, n)) && e["KYSPm"](e[d("27", "0tes")], Object(r["a"])(n)) ? e["ZUBXy"](p, t) : n
            }
            function K(t) {
                return (K = Object["setPrototypeOf"] ? Object["getPrototypeOf"] : function(t) {
                    return t[d("28", "hVad")] || Object["getPrototypeOf"](t)
                })(t)
            }
            var m = function() {
                var t = {
                    ByPVq: function(t, n, e) {
                        return t(n, e)
                    },
                    CGifv: function(t, n) {
                        return t - n
                    },
                    JXVPH: function(t, n) {
                        return t === n
                    },
                    epDCg: "ieGGu",
                    HHAtC: function(t, n, e) {
                        return t(n, e)
                    },
                    Fvvxk: d("29", "0%7z"),
                    tROMv: d("2a", "lTsN"),
                    OLxcY: "onGameOver"
                };
                function n() {
                    t[d("2b", "PQB4")](D, this, n),
                    this[d("2c", "tDVN")] = !1
                }
                return t["HHAtC"](h, n, [{
                    key: t[d("2d", "jQ0X")],
                    value: function() {}
                },
                {
                    key: t[d("2e", "nedJ")],
                    value: function() {
                        var n = {
                            WTaxn: function(n, e) {
                                return t["CGifv"](n, e)
                            },
                            TZBQi: function(t, n) {
                                return t === n
                            }
                        };
                        if (!t["JXVPH"](t["epDCg"], t[d("2f", "#cwz")])) {
                            var e = this;
                            return new Promise((function(t) {
                                var w = {
                                    NLnhl: function(t, e) {
                                        return n[d("31", "*A)#")](t, e)
                                    },
                                    SSBAU: function(t, e) {
                                        return n[d("32", "#cwz")](t, e)
                                    }
                                };
                                e[d("33", "bPML")][d("34", "U4xf")][d("35", "9#sL")](d("36", "xJ1F"), (function n() {
                                    e[d("37", "^Eu9")] === w["NLnhl"](e[d("38", "U4xf")]["length"], 1) ? (e[d("39", "#cwz")][d("3a", "Z*#m")][d("3b", "P%4l")](d("3c", "7n#g"), n), e[d("3d", "tDVN")](), t(!0)) : (e[d("3e", "*A)#")]++, e[d("3f", "ZDnO")]()),
                                    w[d("40", "30HP")](e["progress"], w[d("41", "(pLq")](e[d("42", "9#sL")][d("43", "e%cj")], 1)) && e[d("44", "5dtt")]()
                                }))
                            }))
                        }
                        this[d("30", "lTsN")]()
                    }
                },
                {
                    key: t[d("45", "AI)w")],
                    value: function(t) {}
                }]),
                n
            } ();
            function M(t) {
                var n = {
                    DVyqN: function(t, n) {
                        return t === n
                    },
                    wWrlF: d("46", "0%7z"),
                    IBMZE: function(t, n) {
                        return t == n
                    },
                    zphDJ: d("47", "9#sL"),
                    CMWAg: function(t, n) {
                        return t == n
                    },
                    iqmsE: d("48", "^Eu9"),
                    inBpQ: function(t, n) {
                        return t(n)
                    },
                    kOikV: d("49", "5dtt"),
                    jRZHq: d("4a", "S(PA"),
                    SWFgh: function(t, n) {
                        return t !== n
                    },
                    YVgxf: d("4b", ")7lZ"),
                    kUFYr: function(t, n) {
                        return t(n)
                    }
                },
                e = function() {
                    if (n[d("4c", "(@(7")](n[d("4d", "lTsN")], n["wWrlF"])) {
                        if (n[d("4e", "o51H")](n["zphDJ"], "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("4f", "Z*#m")]) return ! 1;
                        if (Reflect["construct"]["sham"]) return ! 1;
                        if (n[d("50", "P%4l")](n["iqmsE"], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                        try {
                            return Boolean[d("51", "jQ0X")][d("52", "S(PA")][d("53", "nedJ")](Reflect[d("54", "PQB4")](Boolean, [], (function() {}))),
                            !0
                        } catch(t) {
                            return ! 1
                        }
                    } else o["a"][d("55", "^AE%")][d("56", "B20D")] += 3
                } ();
                return function() {
                    if (!n["DVyqN"](n["kOikV"], n["jRZHq"])) {
                        var w, r = n[d("5a", "5knQ")](K, t);
                        if (e) if (n["SWFgh"](n[d("5b", "d$Th")], n[d("5c", "x$Zb")])) e[d("5d", "jQ0X")] >= e[d("5e", "&98m")] && e["addFloating"]();
                        else {
                            var c = n[d("5f", "jQ0X")](K, this)[d("58", "0tes")];
                            w = Reflect[d("60", "o#Hw")](r, arguments, c)
                        } else w = r[d("61", "jum&")](this, arguments);
                        return b(this, w)
                    }
                    var i = n[d("57", "PQB4")](K, this)[d("58", "0tes")];
                    w = Reflect[d("59", "&98m")](r, arguments, i)
                }
            }
            var v = function(t) {
                var n = {
                    tTGyA: function(t, n) {
                        return t(n)
                    },
                    TqfGp: function(t, n, e) {
                        return t(n, e)
                    },
                    bfMHS: function(t, n) {
                        return t(n)
                    },
                    vaAjL: "onPropUse"
                };
                n[d("62", "0%7z")](l, w, m);
                var e = n[d("63", "7WQB")](M, w);
                function w() {
                    return D(this, w),
                    e[d("64", "7n#g")](this, arguments)
                }
                return n["TqfGp"](h, w, [{
                    key: n[d("65", "^AE%")],
                    value: function(t, e) {
                        n["tTGyA"](e, {
                            used: !1,
                            amount: 0
                        })
                    }
                }]),
                w
            } ();
            function y(t) {
                var n = {
                    HUpZK: "new Game 需要一个DOM作为父元素，请确保传入了渲染完的DOM",
                    WqZUo: function(t, n) {
                        return t === n
                    },
                    iDxNT: d("66", "7n#g"),
                    SSlLL: d("67", "(pLq"),
                    JxuAp: d("68", "#cwz"),
                    juRxe: "function",
                    yqLAq: d("69", "^AE%"),
                    FQmmT: function(t, n, e) {
                        return t(n, e)
                    },
                    neVuN: function(t, n) {
                        return t !== n
                    },
                    OgYgX: d("6a", "xJ1F"),
                    DIoeY: function(t, n) {
                        return t(n)
                    }
                },
                e = function() {
                    if (n[d("6b", "*A)#")](n[d("6c", "@]mt")], n[d("6d", "e%cj")])) {
                        D(this, e);
                        var w = t[d("6e", "0tes")],
                        c = t["baseUrl"];
                        if (!w) throw new Error(n[d("6f", "0%7z")]);
                        this[d("70", "4zBg")] = k,
                        this["parent"] = w,
                        this["width"] = w["clientWidth"] || window[d("71", "*A)#")],
                        this[d("72", "7WQB")] = w["clientHeight"] || window[d("73", "Z*#m")],
                        this["baseUrl"] = c || "",
                        this[d("74", "(@(7")][d("75", "AI)w")][d("76", "(pLq")] || (this[d("77", "7n#g")]["style"][d("78", "P%4l")] = d("79", "o51H")),
                        this[d("7a", "e%cj")] = new j,
                        this["bridgeHan"] = new v,
                        this[d("7b", "&98m")] = new q
                    } else {
                        if (n["JxuAp"] == ("undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("7c", "0tes")]) return ! 1;
                        if (Reflect[d("7d", "Jgtc")][d("7e", "jum&")]) return ! 1;
                        if (n["juRxe"] == ("undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                        try {
                            return Boolean[d("7f", "d$Th")][d("80", "30HP")][d("81", "e%cj")](Reflect["construct"](Boolean, [], (function() {}))),
                            !0
                        } catch(i) {
                            return n[d("82", "PQB4")] !== n[d("83", "%LFB")] && (D(this, o["a"]), e[d("84", "qgiy")](this, arguments))
                        }
                    }
                } ();
                return function() {
                    if (!n["neVuN"](n[d("85", "o51H")], d("86", "#cwz"))) {
                        var w, r = K(t);
                        if (e) {
                            var c = n["DIoeY"](K, this)[d("87", "jum&")];
                            w = Reflect[d("88", "P%4l")](r, arguments, c)
                        } else w = r[d("89", "^Eu9")](this, arguments);
                        return b(this, w)
                    }
                    n["FQmmT"](l, {},
                    "")
                }
            }
            var j = function(t) {
                var n = {
                    dGQiX: d("8a", "]DRy"),
                    WhVfa: function(t, n, e) {
                        return t(n, e)
                    },
                    XZszp: function(t, n, e) {
                        return t(n, e)
                    },
                    IJXJh: function(t, n) {
                        return t(n)
                    },
                    XbOIo: "_listenResume",
                    TYgbm: d("8b", "e%cj")
                };
                n["XZszp"](l, w, m);
                var e = n[d("8c", "7n#g")](y, w);
                function w() {
                    return "SwzCw" === n[d("8d", "0tes")] ? (n["WhVfa"](D, this, w), e[d("8e", "e%cj")](this, arguments)) : (Boolean[d("8f", "qfqE")][d("90", "o51H")][d("91", "xuC*")](Reflect["construct"](Boolean, [], (function() {}))), !0)
                }
                return h(w, [{
                    key: n[d("92", "m$jW")],
                    value: function() {}
                },
                {
                    key: d("93", "bPML"),
                    value: function() {
                        this["_listenResume"]()
                    }
                },
                {
                    key: n[d("94", "5dtt")],
                    value: function(t) {
                        t({
                            used: !1,
                            amount: 0
                        })
                    }
                }]),
                w
            } ();
            function Q(t) {
                var n = {
                    aoJWh: function(t, n, e) {
                        return t(n, e)
                    },
                    RQSKp: " create",
                    OYSvQ: function(t, n) {
                        return t == n
                    },
                    RHdek: "undefined",
                    uwqqN: d("95", "B20D"),
                    phXsu: d("96", "7n#g"),
                    GYXaV: d("97", "&98m"),
                    vlUhy: function(t, n) {
                        return t(n)
                    },
                    LdApT: function(t, n) {
                        return t(n)
                    }
                },
                e = function() {
                    var t = {
                        asDnG: function(t, e, w) {
                            return n["aoJWh"](t, e, w)
                        },
                        tQFxf: n["RQSKp"]
                    };
                    if (n[d("98", "(@(7")](n["RHdek"], "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("99", "*A)#")]) return ! 1;
                    if (Reflect[d("9a", "hVad")]["sham"]) return ! 1;
                    if (n[d("9b", "4zBg")](n[d("9c", "d$Th")], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                    try {
                        return Boolean[d("9d", "AI)w")][d("9e", "bPML")][d("9f", "S(PA")](Reflect["construct"](Boolean, [], (function() {}))),
                        !0
                    } catch(e) {
                        if (n[d("a0", "Z*#m")] !== n[d("a1", "d$Th")]) return ! 1;
                        t["asDnG"](X, "" [d("a2", "7WQB")](F["TANG"], t["tQFxf"]), e),
                        this[d("a3", "qgiy")]["get"](Y["BGM_TANG"]) || this[d("a4", "x$Zb")][d("a5", "qfqE")](Y["BGM_TANG"], {
                            loop: !0
                        }),
                        this["dmger"][d("a6", "B20D")] = this[d("a7", "4zBg")]["get"](Y[d("a8", "B20D")]),
                        this[d("a9", "lTsN")]["background"] = new pt(this, L["BG_TANG"]),
                        this[d("aa", "(pLq")][d("ab", "xJ1F")] = new hn(this),
                        this["createDomScene"](),
                        this[d("ac", "xuC*")]["domScene"][d("ad", "5dtt")](e[d("ae", "0tes")] || 0),
                        this[d("af", ")7lZ")]["domScene"][d("b0", "@]mt")](e[d("b1", "S(PA")] || 0),
                        this[d("b2", "]DRy")][d("b3", "ZDnO")](),
                        this["startRender"]()
                    }
                } ();
                return function() {
                    var w, r = n[d("b4", "B20D")](K, t);
                    if (e) {
                        var c = n["LdApT"](K, this)["constructor"];
                        w = Reflect[d("b5", "7n#g")](r, arguments, c)
                    } else w = r[d("61", "jum&")](this, arguments);
                    return n[d("b6", "*A)#")](b, this, w)
                }
            }
            var q = function(t) {
                var n = {
                    OcvaM: d("b7", "5dtt"),
                    ehCyx: "sJudV",
                    UWtQc: function(t, n, e) {
                        return t(n, e)
                    },
                    AWBzc: function(t, n, e) {
                        return t(n, e)
                    },
                    KwuHd: function(t, n) {
                        return t - n
                    },
                    ZsKvy: function(t, n) {
                        return t * n
                    },
                    oMKnm: d("b8", "S(PA"),
                    sMjuc: function(t, n) {
                        return t + n
                    },
                    QwoqV: function(t, n) {
                        return t + n
                    },
                    YrvxU: function(t, n) {
                        return t - n
                    },
                    mDjuv: function(t, n) {
                        return t === n
                    },
                    ReUuu: function(t, n) {
                        return t(n)
                    },
                    QNqrE: function(t, n, e) {
                        return t(n, e)
                    },
                    yPiDy: d("b9", "5knQ"),
                    wmmoh: "playDBCardMusic",
                    mCMZL: "onPropUse"
                };
                n["AWBzc"](l, w, m);
                var e = n[d("ba", "@]mt")](Q, w);
                function w() {
                    if (n["OcvaM"] === n[d("bb", "xJ1F")]) {
                        var r = [];
                        for (var c in t) r[d("bc", "5dtt")](c);
                        return r["reverse"](),
                        function n() {
                            for (; r[d("bd", "*gk(")];) {
                                var e = r[d("be", "qfqE")]();
                                if (e in t) return n[d("bf", "bPML")] = e,
                                n[d("c0", "5knQ")] = !1,
                                n
                            }
                            return n[d("c1", "4zBg")] = !0,
                            n
                        }
                    }
                    return n[d("c2", "PQB4")](D, this, w),
                    e[d("c3", "o51H")](this, arguments)
                }
                return n[d("c4", "x$Zb")](h, w, [{
                    key: n[d("c5", "(pLq")],
                    value: function() {}
                },
                {
                    key: n[d("c6", ")7lZ")],
                    value: function() {
                        if ("tttqM" === d("c7", "d$Th")) {
                            var r;
                            n["AWBzc"](D, this, w),
                            (r = e[d("81", "e%cj")](this, t, Z[d("c8", "PQB4")], Z[d("c9", "xuC*")], a["a"], O))[d("ca", "0%7z")](0),
                            r[d("cb", "7WQB")][d("cc", "x$Zb")] = 110,
                            r[d("cd", "y)Vp")][d("ce", "9#sL")] = 120,
                            r["body"][d("cf", "nedJ")](90, 117),
                            r[d("d0", "5dtt")][d("d1", "]DRy")](7, 0);
                            var c = n["KwuHd"](r["texture"][d("d2", "*gk(")], 1),
                            i = Math[d("d3", "^AE%")](n[d("d4", "4zBg")](Math["random"](), c))[d("d5", "U4xf")]()[d("d6", "o51H")](2, "0");
                            r[d("d7", "(@(7")]("" [d("d8", "*gk(")](i, n[d("d9", "0%7z")]));
                            var s = n["sMjuc"](r["role"]["x"], r["role"][d("da", "Z*#m")]),
                            o = n["QwoqV"](r[d("db", "xJ1F")][d("dc", "4zBg")][d("dd", "^AE%")]["y"], r["role"]["jumpY"]),
                            u = r[d("de", "qfqE")][d("df", "B20D")],
                            f = Math[d("e0", "Jgtc")](n[d("e1", "o#Hw")](Math["random"](), n[d("e2", "0%7z")](o, u) + 1) + u),
                            h = r["overflowPos"](s, f),
                            C = h["x"],
                            l = h["y"];
                            return r["x"] = C,
                            r["y"] = l,
                            r
                        }
                        this[d("e3", "Yr1b")]()
                    }
                },
                {
                    key: n[d("e4", "xJ1F")],
                    value: function(t) {
                        if (!n[d("e5", "7n#g")](d("e6", "7WQB"), d("e7", "(@(7"))) return Boolean[d("51", "jQ0X")][d("80", "30HP")][d("e8", "y)Vp")](Reflect[d("e9", "5dtt")](Boolean, [], (function() {}))),
                        !0;
                        t({
                            used: !1,
                            amount: 0
                        })
                    }
                }]),
                w
            } (),
            k = d("ea", "o#Hw");
            function A(t, n, e, w, r, c, i) {
                var s = {
                    AENWT: function(t, n) {
                        return t(n)
                    }
                };
                try {
                    var o = t[c](i),
                    a = o[d("eb", "&98m")]
                } catch(u) {
                    return void s[d("ec", "&98m")](e, u)
                }
                o[d("ed", "*gk(")] ? n(a) : Promise[d("ee", "5dtt")](a)[d("ef", "U4xf")](w, r)
            }
            function P(t) {
                var n = {
                    bZiLX: function(t, n) {
                        return t(n)
                    }
                };
                return function() {
                    var e = {
                        PiHUp: "next",
                        dWPib: function(t, e) {
                            return n["bZiLX"](t, e)
                        }
                    },
                    w = this,
                    r = arguments;
                    return new Promise((function(n, c) {
                        var i = {
                            YIjgb: function(t, n, e, w, r, c, i, s) {
                                return t(n, e, w, r, c, i, s)
                            },
                            DCgBt: d("f0", "^AE%")
                        },
                        s = t["apply"](w, r);
                        function o(t) {
                            A(s, n, c, o, a, e[d("f1", "ZDnO")], t)
                        }
                        function a(t) {
                            i[d("f2", "nedJ")](A, s, n, c, o, a, i["DCgBt"], t)
                        }
                        e["dWPib"](o, void 0)
                    }))
                }
            }
            var B = {
                exports: {}
            }; !
            function(t) {
                var n = {
                    jWniO: function(t, n) {
                        return t instanceof n
                    },
                    YcOLc: function(t, n) {
                        return t !== n
                    },
                    blWKj: "ERYVa",
                    cTDpY: "bwrVG",
                    pfNsz: "oYkJg",
                    JYnqH: function(t, n) {
                        return t !== n
                    },
                    vGUiP: "aYYjI",
                    RKkIR: function(t, n) {
                        return t in n
                    },
                    znOdj: function(t, n) {
                        return t == n
                    },
                    VlKqM: d("f3", "Z*#m"),
                    CMzxC: function(t, n) {
                        return t === n
                    },
                    ShOYq: d("f4", "B20D"),
                    lTDqe: function(t, n) {
                        return t !== n
                    },
                    jaZSH: d("f5", "5knQ"),
                    QxLyA: "root",
                    rLTfg: function(t, n) {
                        return t == n
                    },
                    YVzxg: function(t, n) {
                        return t === n
                    },
                    srCOE: "GeneratorFunction",
                    ugIba: d("f6", "o51H"),
                    gFyre: d("f7", "m$jW"),
                    Bblfg: "false",
                    NNueO: function(t, n) {
                        return t !== n
                    },
                    chLMD: d("f8", "*gk("),
                    ebjSI: d("f9", "jum&"),
                    kqXAU: d("fa", "@]mt"),
                    wGpGq: function(t, n) {
                        return t !== n
                    },
                    dzXcv: "QVHIL",
                    wDNoP: function(t, n) {
                        return t(n)
                    },
                    mUQMq: function(t, n) {
                        return t !== n
                    },
                    QFnGN: d("fb", "x$Zb"),
                    ivReq: d("fc", "tDVN"),
                    xibvS: function(t, n) {
                        return t - n
                    },
                    Jqupx: function(t, n) {
                        return t <= n
                    },
                    djnbR: function(t, n) {
                        return t === n
                    },
                    zHOtE: "break",
                    qNkKF: function(t, n) {
                        return t === n
                    },
                    FqHJo: function(t, n) {
                        return t <= n
                    },
                    ZdIIv: function(t, n) {
                        return t / n
                    },
                    ENZeN: d("fd", "Yr1b"),
                    MOLIq: d("fe", "P%4l"),
                    hnsnH: d("ff", "*A)#"),
                    eevNS: function(t, n) {
                        return t / n
                    },
                    tuiAz: d("100", "Yr1b"),
                    RQGTZ: d("101", "jQ0X"),
                    mTOvj: function(t, n) {
                        return t === n
                    },
                    aYkel: function(t) {
                        return t()
                    },
                    cTXkR: d("102", "ZDnO"),
                    WGIsv: d("103", "hVad"),
                    BZtri: "qotUB",
                    AmBlC: function(t, n) {
                        return t === n
                    },
                    QIMkb: function(t, n, e) {
                        return t(n, e)
                    },
                    RIanO: function(t, n, e, w, r) {
                        return t(n, e, w, r)
                    },
                    KMssG: function(t, n) {
                        return t !== n
                    },
                    MaKOm: d("104", "qgiy"),
                    uuoTM: d("105", "(@(7"),
                    mlABK: function(t, n) {
                        return t(n)
                    },
                    VwoMt: d("106", "tDVN"),
                    txPyW: function(t, n) {
                        return t === n
                    },
                    EQdvX: "BpqZa",
                    uWQdw: d("107", "B20D"),
                    clUmc: d("108", "]DRy"),
                    mokeu: "The iterator does not provide a 'throw' method",
                    pkdms: "Bounce",
                    aoQoH: "IQnYD",
                    pPqdE: d("109", "d$Th"),
                    toANU: d("10a", "0%7z"),
                    XdVjQ: d("10b", "e%cj"),
                    bfUbD: "afezG",
                    PJKeF: function(t, n) {
                        return t in n
                    },
                    TDqHp: d("10c", "m$jW"),
                    OfkCx: d("10d", "y)Vp"),
                    HFUnr: "ORLtG",
                    qzXLR: d("10e", "B20D"),
                    DVRjE: d("10f", "(pLq"),
                    qWWIA: d("110", "Jgtc"),
                    CNhTn: function(t, n) {
                        return t && n
                    },
                    DKVoX: function(t, n) {
                        return t(n)
                    },
                    yTpvQ: function(t, n) {
                        return t < n
                    },
                    IJqCR: function(t, n) {
                        return t === n
                    },
                    ZhfGa: "bot",
                    DLJPN: function(t, n) {
                        return t - n
                    },
                    sVOit: d("111", "%LFB"),
                    UdiBa: function(t, n) {
                        return t === n
                    },
                    wCVnq: "@@iterator",
                    QZINx: "@@asyncIterator",
                    cqkcN: d("112", "y)Vp"),
                    lEeXR: d("113", "(pLq"),
                    DZxLP: d("114", "5dtt"),
                    IzzUO: d("115", "@]mt"),
                    fbXeV: "completed",
                    OcYaZ: function(t, n) {
                        return t(n)
                    },
                    tZSmV: function(t, n) {
                        return t !== n
                    },
                    Hpisl: function(t, n, e, w) {
                        return t(n, e, w)
                    },
                    hPyWy: function(t, n, e, w) {
                        return t(n, e, w)
                    },
                    GjetO: function(t, n) {
                        return t(n)
                    },
                    QaNzz: d("116", "nedJ"),
                    TzQnT: function(t, n, e) {
                        return t(n, e)
                    },
                    MDaLG: d("117", "^Eu9")
                },
                e = function(t) {
                    var e, w = {
                        YStjp: function(t, e) {
                            return n[d("118", "P%4l")](t, e)
                        },
                        SlOFW: n[d("119", "d$Th")],
                        rcmZt: n[d("11a", "qfqE")],
                        NQaHw: n["hnsnH"],
                        YEtyY: function(t, e) {
                            return n[d("11b", "ZDnO")](t, e)
                        },
                        dCGGQ: function(t, e) {
                            return n[d("11c", "m$jW")](t, e)
                        },
                        BcxIH: function(t, n) {
                            return t + n
                        },
                        lmNGz: function(t, e) {
                            return n["qNkKF"](t, e)
                        },
                        ESWna: n[d("11d", "AI)w")],
                        JjvXR: n[d("11e", "Yr1b")],
                        guLOK: function(t, e) {
                            return n["mTOvj"](t, e)
                        },
                        DkrNx: function(t) {
                            return n[d("11f", "2^0s")](t)
                        },
                        fzije: n["cTXkR"],
                        SPbnw: d("120", "*A)#"),
                        fwlKL: n["WGIsv"],
                        jiwPn: n[d("121", "ZDnO")],
                        iPqtk: d("122", "5knQ"),
                        EqOrQ: function(t, n, e, w) {
                            return t(n, e, w)
                        },
                        NqxOf: d("123", "AI)w"),
                        fWCJG: function(t, e) {
                            return n["AmBlC"](t, e)
                        },
                        RROfD: n["ivReq"],
                        FLneR: function(t) {
                            return n[d("124", "m$jW")](t)
                        },
                        mBVRc: d("125", "30HP"),
                        RNyYd: function(t, e, w) {
                            return n["QIMkb"](t, e, w)
                        },
                        erEia: function(t, n, e, w, r) {
                            return t(n, e, w, r)
                        },
                        dMpGc: function(t, e) {
                            return n[d("126", "y)Vp")](t, e)
                        },
                        JRBEP: "CGUUT",
                        jwlET: function(t, e, w, r, c) {
                            return n[d("127", "Z*#m")](t, e, w, r, c)
                        },
                        GciKC: function(t, e) {
                            return n["KMssG"](t, e)
                        },
                        EoYvn: n[d("128", "*gk(")],
                        XcIZB: function(t, n, e, w) {
                            return t(n, e, w)
                        },
                        EZLHX: function(t, n) {
                            return t == n
                        },
                        uHjIT: n[d("129", "o51H")],
                        IyBoG: function(t, e) {
                            return n[d("12a", "(pLq")](t, e)
                        },
                        hlaVS: n["VlKqM"],
                        ffrmA: d("12b", ")7lZ"),
                        zVRqt: function(t) {
                            return n[d("12c", "e%cj")](t)
                        },
                        OqBZp: n[d("12d", "o#Hw")],
                        CAXAY: function(t, n, e) {
                            return t(n, e)
                        },
                        aMPAU: function(t, n) {
                            return t(n)
                        },
                        bwSsT: function(t, e) {
                            return n[d("12e", "B20D")](t, e)
                        },
                        RccAd: d("12f", "S(PA"),
                        Ytydt: n["EQdvX"],
                        CgPsy: n[d("130", "&98m")],
                        OWyqg: n[d("131", "hVad")],
                        hfsUc: function(t, e) {
                            return n[d("132", "^Eu9")](t, e)
                        },
                        HkmTQ: n[d("133", "&98m")],
                        RYkxU: function(t, n) {
                            return t !== n
                        },
                        WelGn: "iterator result is not an object",
                        nKKic: n["pkdms"],
                        xulSs: function(t, e) {
                            return n[d("134", "P%4l")](t, e)
                        },
                        oEUqw: d("135", "bPML"),
                        llKPb: function(t, n) {
                            return t < n
                        },
                        QpiYP: n[d("136", "5knQ")],
                        FPHHW: "GeneratorFunction",
                        Bspvv: "hNdbm",
                        Ntahl: d("137", "xuC*"),
                        vVQlj: n[d("138", "2^0s")],
                        bOUAI: n["toANU"],
                        vUMzV: function(t, n) {
                            return t !== n
                        },
                        Htvnc: n[d("139", "y)Vp")],
                        scaGy: n[d("13a", "qgiy")],
                        nBYAA: function(t, e) {
                            return n["txPyW"](t, e)
                        },
                        iJPgw: function(t, e) {
                            return n[d("13b", "P%4l")](t, e)
                        },
                        TUxFV: d("13c", "*A)#"),
                        dIQke: n[d("13d", "o51H")],
                        monMe: n[d("13e", "B20D")],
                        vBBSU: function(t, e) {
                            return n[d("13f", "#cwz")](t, e)
                        },
                        WmSTb: function(t, n) {
                            return t - n
                        },
                        kVpVa: n["HFUnr"],
                        wTNzs: n["QxLyA"],
                        jYlzc: function(t, n) {
                            return t(n)
                        },
                        NAWhS: n[d("140", "jum&")],
                        gcoYH: function(t, e) {
                            return n["txPyW"](t, e)
                        },
                        ayKYk: n[d("141", "bPML")],
                        hAheY: n["qWWIA"],
                        DVrFi: function(t, e) {
                            return n[d("142", "tDVN")](t, e)
                        },
                        OQohr: function(t, n) {
                            return t < n
                        },
                        ltBID: function(t, e) {
                            return n["DKVoX"](t, e)
                        },
                        aCZVh: function(t, e) {
                            return n[d("143", "4zBg")](t, e)
                        },
                        Ihboz: "XUfJT",
                        qkXGu: function(t, n, e) {
                            return t(n, e)
                        },
                        cTsJd: function(t, e) {
                            return n[d("144", ")7lZ")](t, e)
                        },
                        nkvVv: function(t, e) {
                            return n["DKVoX"](t, e)
                        },
                        myjFy: function(t, e) {
                            return n["IJqCR"](t, e)
                        },
                        KsSMp: function(t, n) {
                            return t(n)
                        },
                        CeGSz: d("145", "AI)w"),
                        JpdCp: d("146", "9#sL"),
                        pAnwI: function(t, e) {
                            return n[d("147", "@]mt")](t, e)
                        },
                        EjrlN: function(t, n) {
                            return t >= n
                        },
                        wKXqe: function(t, e) {
                            return n[d("148", "m$jW")](t, e)
                        },
                        gtfVu: "mid",
                        niuBD: n["ZhfGa"],
                        FJjSm: function(t, e) {
                            return n["DLJPN"](t, e)
                        },
                        qFYkt: n[d("149", "9#sL")],
                        WIPHU: function(t, e) {
                            return n[d("14a", "#cwz")](t, e)
                        }
                    },
                    c = Object[d("14b", "Jgtc")],
                    i = c[d("14c", "2^0s")],
                    s = n[d("14d", "0%7z")](d("14e", "@]mt"), "undefined" === typeof Symbol ? "undefined": Object(r["a"])(Symbol)) ? Symbol: {},
                    o = s["iterator"] || n["wCVnq"],
                    a = s["asyncIterator"] || n["QZINx"],
                    u = s["toStringTag"] || n[d("14f", "@]mt")];
                    function f(t, n, e) {
                        return Object[d("150", "x$Zb")](t, n, {
                            value: e,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }),
                        t[n]
                    }
                    try {
                        if (n["KMssG"](n["lEeXR"], d("151", "PQB4"))) {
                            var D = c - this["initSpeed"],
                            O = this[d("152", "(@(7")] - i,
                            h = w["YStjp"](D, this[d("153", "B20D")]),
                            C = w["YStjp"](O, this[d("154", "U4xf")]);
                            this["dmger"][d("ab", "xJ1F")][d("155", "9#sL")] = t + h,
                            this["dmger"]["snowBarriers"][d("156", "30HP")] -= C
                        } else n[d("157", "@]mt")](f, {},
                        "")
                    } catch(z) {
                        if (n["DZxLP"] !== n[d("158", "Yr1b")]) return this["y"] >= this[d("159", "U4xf")] && (this["body"][d("15a", "o#Hw")](0), !0);
                        f = function(t, n, e) {
                            return t[n] = e
                        }
                    }
                    function l(t, e, r, c) {
                        if ("bHKpa" !== d("15b", "ZDnO")) {
                            var i = e && n[d("15c", "bPML")](e[d("15d", "ZDnO")], v) ? e: v,
                            s = Object[d("15e", "tDVN")](i["prototype"]),
                            o = new T(c || []);
                            return s[d("15f", "d$Th")] = function(t, n, e) {
                                var r = {
                                    VZAFo: d("160", "qgiy"),
                                    QzuTU: w[d("161", "y)Vp")],
                                    OnQGf: w[d("162", "*gk(")],
                                    LziXa: "absolute",
                                    vAIao: w[d("163", "lTsN")],
                                    UqfTt: function(t, n) {
                                        return w[d("164", "%LFB")](t, n)
                                    },
                                    nqHPC: function(t, n) {
                                        return w["dCGGQ"](t, n)
                                    },
                                    sZCLQ: function(t, n) {
                                        return w[d("165", "qgiy")](t, n)
                                    },
                                    LICQJ: d("166", "Yr1b"),
                                    ySSsF: function(t, n) {
                                        return w["lmNGz"](t, n)
                                    },
                                    nxfeG: w[d("167", "(@(7")],
                                    OynKC: w[d("168", "jum&")],
                                    OOzoY: function(t, n) {
                                        return w["lmNGz"](t, n)
                                    },
                                    oBpBM: d("169", "(pLq"),
                                    Wbopf: function(t, n) {
                                        return w[d("16a", "Z*#m")](t, n)
                                    },
                                    MCbAb: function(t) {
                                        return w["DkrNx"](t)
                                    },
                                    cubps: w[d("16b", "jQ0X")],
                                    jXgrC: w[d("16c", "Jgtc")],
                                    RJJDs: w[d("16d", "y)Vp")],
                                    ajxqw: function(t, n) {
                                        return t === n
                                    },
                                    IJomj: w["jiwPn"],
                                    lPqga: w["iPqtk"],
                                    FCbiR: function(t, n, e, r) {
                                        return w[d("16e", "(pLq")](t, n, e, r)
                                    },
                                    rVMnJ: w["NqxOf"],
                                    zpVWt: function(t, n) {
                                        return t === n
                                    },
                                    NxXyC: function(t, n) {
                                        return w[d("16f", "#cwz")](t, n)
                                    },
                                    iWbnK: w[d("170", "ZDnO")]
                                },
                                c = p;
                                return function(w, i) {
                                    var s = {
                                        pVFDY: function(t, n) {
                                            return t * n
                                        },
                                        aEoWQ: function(t, n) {
                                            return r[d("171", "jQ0X")](t, n)
                                        },
                                        bWXsk: function(t, n) {
                                            return r[d("172", "PQB4")](t, n)
                                        },
                                        IfKAX: function(t, n) {
                                            return r["sZCLQ"](t, n)
                                        },
                                        psTcl: r[d("173", "xJ1F")]
                                    };
                                    if (r["ySSsF"](r[d("174", "bPML")], r[d("175", "]DRy")])) this[d("176", "Z*#m")] = 0;
                                    else {
                                        if (r["OOzoY"](c, K)) throw new Error(r["oBpBM"]);
                                        if (c === m) {
                                            if (r[d("177", "^Eu9")](d("178", "]DRy"), w)) throw i;
                                            return r[d("179", "4zBg")](V)
                                        }
                                        for (e["method"] = w, e["arg"] = i;;) {
                                            var o = e["delegate"];
                                            if (o) {
                                                if (!r["Wbopf"](r[d("17a", "d$Th")], r[d("17b", "7n#g")])) return Boolean["prototype"][d("18b", "&98m")][d("18c", "P%4l")](Reflect["construct"](Boolean, [], (function() {}))),
                                                !0;
                                                var a = x(o, e);
                                                if (a) {
                                                    if (r[d("17c", "bPML")] === r["jXgrC"]) {
                                                        if (a === M) continue;
                                                        return a
                                                    }
                                                    var u = this[d("ac", "xuC*")][d("17d", "x$Zb")]["speed2"],
                                                    f = this["dmger"][d("17e", "%LFB")][d("17f", "P%4l")],
                                                    D = s[d("180", "9#sL")](this[d("181", "bPML")], this[d("182", "(pLq")]),
                                                    O = this["initInterval"] / this["multiple"];
                                                    if (! (u >= D || s["aEoWQ"](f, O))) {
                                                        var h = D - this[d("183", "PQB4")],
                                                        C = this[d("184", "lTsN")] - O,
                                                        l = h / this[d("185", "&98m")],
                                                        v = s[d("186", "PQB4")](C, this["happyTime"]);
                                                        this["dmger"][d("187", "o51H")][d("188", "0tes")] = s["IfKAX"](u, l),
                                                        this[d("189", "d$Th")][d("18a", "qgiy")]["interval"] -= v
                                                    }
                                                }
                                            }
                                            if (r["Wbopf"](r[d("18d", "Z*#m")], e[d("18e", "U4xf")])) e[d("18f", "y)Vp")] = e[d("190", "hVad")] = e["arg"];
                                            else if ("throw" === e[d("191", "&98m")]) {
                                                if (!r[d("192", "qfqE")]("qotUB", r["IJomj"])) {
                                                    var y = "" [d("195", "o51H")](this[d("196", "#cwz")], r[d("197", "nedJ")])["concat"](_[d("198", "5dtt")]);
                                                    return {
                                                        leftDesc: new ut(this[d("199", "m$jW")], r[d("19a", ")7lZ")], {
                                                            width: 404,
                                                            height: 194,
                                                            display: r[d("19b", ")7lZ")],
                                                            position: "absolute",
                                                            left: 0,
                                                            bottom: 0
                                                        },
                                                        !1, {
                                                            src: y
                                                        }),
                                                        rightDesc: new ut(this[d("19c", "y)Vp")], r[d("19d", "x$Zb")], {
                                                            width: 404,
                                                            height: 194,
                                                            display: r["OnQGf"],
                                                            position: r[d("19e", "%LFB")],
                                                            right: 0,
                                                            bottom: 0,
                                                            transform: r[d("19f", "0tes")]
                                                        },
                                                        !1, {
                                                            src: y
                                                        })
                                                    }
                                                }
                                                if (c === p) throw c = m,
                                                e[d("193", "nedJ")];
                                                e[d("194", "Jgtc")](e["arg"])
                                            } else r["lPqga"] === e[d("1a0", "tDVN")] && e[d("1a1", "5knQ")](d("1a2", "]DRy"), e[d("1a3", "hVad")]);
                                            c = K;
                                            var j = r["FCbiR"](g, t, n, e);
                                            if (r[d("1a4", "Yr1b")](r["rVMnJ"], j[d("1a5", "7WQB")])) {
                                                if (!r[d("1a6", "Z*#m")](d("1a7", "U4xf"), d("1a8", "(@(7"))) {
                                                    if (c = e[d("1a9", "]DRy")] ? m: b, j[d("1aa", "o#Hw")] === M) continue;
                                                    return {
                                                        value: j[d("1ab", "5knQ")],
                                                        done: e[d("1ac", "jum&")]
                                                    }
                                                }
                                                c["dom"]["setAttribute"](s["psTcl"], "")
                                            }
                                            r["NxXyC"](r[d("1ad", "o#Hw")], j[d("1ae", "Yr1b")]) && (c = m, e[d("1af", "o51H")] = r[d("1b0", "hVad")], e["arg"] = j["arg"])
                                        }
                                    }
                                }
                            } (t, r, o),
                            s
                        }
                        var a = new Dt(this);
                        this[d("af", ")7lZ")][d("1b1", "AI)w")] = a,
                        this["dmger"][d("1b2", "hVad")]["onPropClick"] = function() {
                            return t[d("1b3", "ZDnO")]()
                        }
                    }
                    function g(t, e, r) {
                        if (n["YcOLc"](n[d("1b4", "5knQ")], n[d("1b5", "tDVN")])) t["_freeze"][d("1b6", "5knQ")](!1),
                        t[d("1b7", "9#sL")] = !1;
                        else try {
                            if (n[d("1b8", "(@(7")] === n[d("1b9", ")7lZ")]) {
                                function c() {
                                    return new e((function(n, e) {
                                        r(t, i, n, e)
                                    }))
                                }
                                return s = s ? s["then"](c, c) : w[d("1ba", "jQ0X")](c)
                            }
                            return {
                                type: d("1bb", "(pLq"),
                                arg: t[d("18c", "P%4l")](e, r)
                            }
                        } catch(o) {
                            if ("ILXua" === d("1bc", "4zBg")) return {
                                type: "throw",
                                arg: o
                            };
                            this["box"][d("1bd", "5knQ")]()
                        }
                    }
                    t[d("1be", "jum&")] = l;
                    var p = n[d("1bf", "0tes")],
                    b = d("1c0", "2^0s"),
                    K = d("1c1", "2^0s"),
                    m = n["fbXeV"],
                    M = {};
                    function v() {}
                    function y() {}
                    function j() {}
                    var Q = {};
                    Q[o] = function() {
                        return this
                    };
                    var q = Object[d("1c2", "#cwz")],
                    k = q && n[d("1c3", "AI)w")](q, n[d("1c4", "e%cj")](q, n[d("1c5", "nedJ")](L, [])));
                    k && n["tZSmV"](k, c) && i[d("1c6", "jum&")](k, o) && (Q = k);
                    var A = j["prototype"] = v["prototype"] = Object[d("1c7", "*gk(")](Q);
                    function P(t) { [d("1c8", "AI)w"), w[d("1c9", "e%cj")], w[d("1ca", "xJ1F")]][d("1cb", "qgiy")]((function(n) {
                            f(t, n, (function(t) {
                                return this["_invoke"](n, t)
                            }))
                        }))
                    }
                    function B(t, n) {
                        var e = {
                            DoThc: d("1cc", "jQ0X"),
                            utVAr: function(t, n) {
                                return w["IyBoG"](t, n)
                            },
                            SlSlH: function(t, n) {
                                return t == n
                            },
                            CupGI: w["hlaVS"],
                            dcwxS: function(t, n, e, w, r) {
                                return t(n, e, w, r)
                            },
                            JBjQn: function(t, n) {
                                return w[d("1cd", "xuC*")](t, n)
                            },
                            ReoMD: w[d("1ce", "d$Th")],
                            rqrUF: function(t) {
                                return w[d("1cf", "tDVN")](t)
                            }
                        };
                        if (!w[d("1d0", "Jgtc")](w[d("1d1", "Jgtc")], d("1d2", "AI)w"))) return this[d("211", "7WQB")]["$content"]; {
                            function c(s, o, a, u) {
                                var f = {
                                    BQqmj: w[d("1d3", "x$Zb")],
                                    mZvtC: function(t, n) {
                                        return t < n
                                    },
                                    QKyvp: function(t, n) {
                                        return t(n)
                                    },
                                    BsdhI: function(t, n, e) {
                                        return w[d("1d4", "y)Vp")](t, n, e)
                                    },
                                    gKEZj: d("1d5", "^AE%"),
                                    pvxKD: function(t, n, e, r, c) {
                                        return w["erEia"](t, n, e, r, c)
                                    },
                                    LPbrX: "next",
                                    IXMni: function(t, n) {
                                        return w[d("1d6", "B20D")](t, n)
                                    },
                                    wlkAC: w["JRBEP"],
                                    akGUH: function(t, n, e, r, c) {
                                        return w["jwlET"](t, n, e, r, c)
                                    },
                                    JgCGj: w[d("1d7", "^Eu9")]
                                };
                                if (w[d("1d8", "hVad")](w[d("1d9", "30HP")], w[d("1da", "d$Th")])) {
                                    if (!O) throw new Error(f["BQqmj"]);
                                    if (f[d("1db", "U4xf")](this["prev"], a[d("1dc", "o51H")])) return f[d("1dd", "Z*#m")](s, a[d("1de", "5dtt")])
                                } else {
                                    var D = w[d("1df", "(@(7")](g, t[s], t, o);
                                    if (w["RROfD"] !== D[d("1e0", "^AE%")]) {
                                        var O = D[d("1e1", "m$jW")],
                                        h = O[d("1e2", "0tes")];
                                        return h && w[d("1e3", "Z*#m")](w[d("1e4", "&98m")], Object(r["a"])(h)) && i[d("1e5", "xJ1F")](h, d("1e6", ")7lZ")) ? n[d("1e7", "B20D")](h["__await"])[d("1e8", "7n#g")]((function(t) {
                                            var e = {
                                                iFPHy: function(t, n) {
                                                    return f[d("1e9", "0%7z")](t, n)
                                                },
                                                yduwk: function(t, n, e) {
                                                    return f[d("1ea", "9#sL")](t, n, e)
                                                }
                                            };
                                            if (f[d("1eb", "]DRy")] !== d("1ec", "o#Hw")) {
                                                var w, r = e[d("1ef", "o51H")](b, t);
                                                if (n) {
                                                    var i = e["iFPHy"](b, this)[d("1f0", "tDVN")];
                                                    w = Reflect[d("1f1", "xuC*")](r, arguments, i)
                                                } else w = r[d("1f2", "Jgtc")](this, arguments);
                                                return e[d("1f3", "*A)#")](h, this, w)
                                            }
                                            f[d("1ed", "0tes")](c, f[d("1ee", "(@(7")], t, a, u)
                                        }), (function(t) {
                                            c(e[d("1f4", "9#sL")], t, a, u)
                                        })) : n[d("1f5", "o#Hw")](h)[d("1f6", "Z*#m")]((function(t) {
                                            O[d("1f7", "Yr1b")] = t,
                                            e["utVAr"](a, O)
                                        }), (function(t) {
                                            if (!f["IXMni"](f[d("1f8", "B20D")], d("1f9", "AI)w"))) return f[d("201", "o#Hw")](c, f[d("202", "7WQB")], t, a, u);
                                            this[d("1fa", "o#Hw")] || this[d("1fb", "jum&")][d("1fc", "7WQB")]( - this[d("1fd", "7WQB")]),
                                            this["isMaxMoveX"] || this[d("1fe", "Z*#m")][d("1ff", "xuC*")](this[d("200", "%LFB")])
                                        }))
                                    }
                                    u(D["arg"])
                                }
                            }
                            var s;
                            this[d("203", "&98m")] = function(t, w) {
                                var i = {
                                    BElaz: function(t, n, w, r, c) {
                                        return e[d("204", "(@(7")](t, n, w, r, c)
                                    }
                                };
                                if (e["JBjQn"](e["ReoMD"], e["ReoMD"])) {
                                    function o() {
                                        return new n((function(n, e) {
                                            i[d("205", "y)Vp")](c, t, w, n, e)
                                        }))
                                    }
                                    return s = s ? s["then"](o, o) : e[d("206", "#cwz")](o)
                                }
                                if (e["SlSlH"](d("207", "&98m"), "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("208", "AI)w")]) return ! 1;
                                if (Reflect[d("209", "*gk(")][d("20a", "&98m")]) return ! 1;
                                if (e[d("20b", "jum&")](e[d("20c", "%LFB")], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                                try {
                                    return Boolean[d("20d", "m$jW")][d("20e", "xJ1F")][d("20f", "%LFB")](Reflect[d("210", "5knQ")](Boolean, [], (function() {}))),
                                    !0
                                } catch(a) {
                                    return ! 1
                                }
                            }
                        }
                    }
                    function x(t, n) {
                        var r, c = {
                            wgeGF: function(t, n, e) {
                                return w["CAXAY"](t, n, e)
                            },
                            LCZqm: function(t, n) {
                                return w[d("212", "qgiy")](t, n)
                            }
                        };
                        if (w[d("213", "2^0s")](w[d("214", "d$Th")], w[d("215", "(pLq")])) return c[d("216", "#cwz")](s, this, n),
                        (r = e[d("217", "0%7z")](this, t, 0, 0, i, o))[d("218", "xJ1F")](0, 0),
                        r[d("219", "hVad")] = new ht(c["LCZqm"](g, r)),
                        t[d("21a", "xJ1F")][d("21b", "5dtt")](g(r)),
                        r;
                        var i = t[d("21c", "*A)#")][n[d("21d", "lTsN")]];
                        if (w[d("21e", "PQB4")](i, e)) {
                            if (w[d("21f", "ZDnO")] !== w[d("220", "qgiy")]) {
                                if (n[d("221", "*gk(")] = null, w[d("222", "2^0s")](w[d("223", "@]mt")], n[d("224", "9#sL")])) {
                                    if (t["iterator"]["return"] && (n[d("225", "30HP")] = w[d("226", "(pLq")], n[d("227", "jQ0X")] = e, w[d("228", "U4xf")](x, t, n), w[d("229", "]DRy")](w["RROfD"], n[d("22a", "d$Th")]))) return M;
                                    n[d("22b", "qfqE")] = w[d("22c", "nedJ")],
                                    n[d("22d", "2^0s")] = new TypeError(w["HkmTQ"])
                                }
                                return M
                            }
                            regeneratorRuntime = e
                        }
                        var s = g(i, t[d("22e", "qgiy")], n["arg"]);
                        if (w[d("22f", "lTsN")](w["RROfD"], s["type"])) return n[d("230", "AI)w")] = w[d("231", "S(PA")],
                        n[d("232", "0%7z")] = s["arg"],
                        n["delegate"] = null,
                        M;
                        var o = s[d("1ab", "5knQ")];
                        return o ? o[d("233", "qgiy")] ? (n[t["resultName"]] = o[d("234", "#cwz")], n[d("235", "7n#g")] = t[d("236", "AI)w")], w["RYkxU"](w["iPqtk"], n["method"]) && (n[d("237", "%LFB")] = w[d("238", "nedJ")], n["arg"] = e), n[d("239", "(@(7")] = null, M) : o: (n["method"] = "throw", n["arg"] = new TypeError(w[d("23a", "e%cj")]), n[d("23b", "B20D")] = null, M)
                    }
                    function E(t) {
                        if (n[d("23c", "U4xf")](n[d("23d", "xJ1F")], n[d("23e", "bPML")])) {
                            var e = this;
                            this["scene"]["tweens"]["add"]({
                                targets: this,
                                alpha: {
                                    from: 0,
                                    to: .6
                                },
                                ease: w[d("23f", "PQB4")],
                                duration: 1e3,
                                onComplete: function() {
                                    e[d("240", "7n#g")][d("241", "5knQ")][d("242", "qfqE")]({
                                        targets: e,
                                        alpha: {
                                            from: .6,
                                            to: 1
                                        },
                                        ease: d("243", "PQB4"),
                                        duration: 600,
                                        repeat: -1,
                                        yoyo: !0
                                    })
                                }
                            })
                        } else {
                            var r = {
                                tryLoc: t[0]
                            };
                            n[d("244", "xuC*")](1, t) && (r["catchLoc"] = t[1]),
                            2 in t && (r[d("245", "jum&")] = t[2], r[d("246", "lTsN")] = t[3]),
                            this[d("247", "Yr1b")][d("248", "(pLq")](r)
                        }
                    }
                    function H(t) {
                        var e = {
                            FOljv: function(t, e) {
                                return n["znOdj"](t, e)
                            },
                            Howyf: n[d("249", "o#Hw")]
                        };
                        if (n[d("24a", "9#sL")](d("24b", "5knQ"), "GmUAw")) {
                            if (d("24c", "]DRy") == ("undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("24d", "(pLq")]) return ! 1;
                            if (Reflect["construct"][d("24e", "Z*#m")]) return ! 1;
                            if (e[d("24f", "B20D")](e[d("250", "0tes")], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                            try {
                                return Boolean["prototype"]["valueOf"][d("251", "#cwz")](Reflect[d("24d", "(pLq")](Boolean, [], (function() {}))),
                                !0
                            } catch(c) {
                                return ! 1
                            }
                        } else {
                            var w = t["completion"] || {};
                            w["type"] = n[d("252", "AI)w")],
                            delete w["arg"],
                            t[d("253", "5dtt")] = w
                        }
                    }
                    function T(t) {
                        if (n["lTDqe"](n[d("254", "tDVN")], n[d("255", "(pLq")])) {
                            var e = b(this)["constructor"];
                            c = Reflect[d("256", "x$Zb")](i, arguments, e)
                        } else this[d("257", "AI)w")] = [{
                            tryLoc: n[d("258", "*gk(")]
                        }],
                        t[d("259", "0tes")](E, this),
                        this["reset"](!0)
                    }
                    function L(t) {
                        var n = {
                            mOSXu: function(t, n) {
                                return t !== n
                            },
                            KbopD: w[d("25a", "^Eu9")],
                            gjYoU: function(t, n) {
                                return w[d("25b", "PQB4")](t, n)
                            }
                        };
                        if (w["QpiYP"] === w[d("25c", "S(PA")]) {
                            if (t) {
                                var c = t[o];
                                if (c) return c["call"](t);
                                if (w["EZLHX"](w[d("25d", "0%7z")], Object(r["a"])(t[d("25e", ")7lZ")]))) return t;
                                if (!w["aMPAU"](isNaN, t[d("25f", "o51H")])) {
                                    var s = -1,
                                    a = function w() {
                                        var r = {
                                            FpsGn: function(t, n) {
                                                return t >= n
                                            }
                                        };
                                        if (!n[d("260", "hVad")](n[d("261", "bPML")], "QIuub")) {
                                            for (; n[d("265", "#cwz")](++s, t[d("266", "hVad")]);) if (i["call"](t, s)) return w[d("267", ")7lZ")] = t[s],
                                            w[d("268", "o51H")] = !1,
                                            w;
                                            return w["value"] = e,
                                            w[d("269", "0%7z")] = !0,
                                            w
                                        }
                                        r[d("262", "5dtt")](e[d("263", "^Eu9")], e["interval"]) && e[d("264", "xuC*")]()
                                    };
                                    return a[d("26a", "jum&")] = a
                                }
                            }
                            return {
                                next: V
                            }
                        }
                        return w[d("26b", "]DRy")](this["x"], this[d("26c", "m$jW")]) && (this["body"][d("26d", "xJ1F")](0), !0)
                    }
                    function V() {
                        return {
                            value: e,
                            done: !0
                        }
                    }
                    return y[d("26e", "bPML")] = A[d("26f", "5knQ")] = j,
                    j[d("270", "Yr1b")] = y,
                    y[d("271", "(@(7")] = n["Hpisl"](f, j, u, d("272", "AI)w")),
                    t["isGeneratorFunction"] = function(t) {
                        var e = n["rLTfg"](n[d("273", "qfqE")], Object(r["a"])(t)) && t[d("274", "B20D")];
                        return !! e && (n[d("275", "qgiy")](e, y) || n["YVzxg"](n[d("276", "hVad")], e[d("277", "*gk(")] || e[d("278", "Yr1b")]))
                    },
                    t[d("279", "30HP")] = function(t) {
                        return Object[d("27a", "qfqE")] ? Object[d("27b", "Jgtc")](t, j) : (t[d("27c", "P%4l")] = j, w["XcIZB"](f, t, u, w[d("27d", "2^0s")])),
                        t[d("26e", "bPML")] = Object[d("27e", "5knQ")](A),
                        t
                    },
                    t[d("27f", "5dtt")] = function(t) {
                        var n = {
                            HfPXV: function(t, n) {
                                return t - n
                            }
                        };
                        if (w[d("280", "@]mt")](w[d("281", "*gk(")], w["Ntahl"])) return {
                            __await: t
                        };
                        var e = this[d("282", "(@(7")][d("283", "U4xf")][d("284", "*gk(")]();
                        Phaser[d("285", "*gk(")]["Call"](e, (function(t) {
                            var e = t;
                            e[d("286", "7WQB")]["setVelocityX"](n[d("287", "%LFB")]( - e["obstacle"]["speedX"], e[d("288", "xJ1F")][d("289", "qfqE")]))
                        }), this)
                    },
                    n["OcYaZ"](P, B[d("28a", "%LFB")]),
                    B["prototype"][a] = function() {
                        if ("fEEWM" !== n[d("28b", ")7lZ")]) return this;
                        i["dmger"]["closeed"] || (i[d("282", "(@(7")]["closeed"] = !0, e[d("28c", "e%cj")](), i["dmger"]["domScene"][d("28d", "2^0s")](), i[d("28e", "(pLq")](d("28f", "*A)#")))
                    },
                    t[d("290", "]DRy")] = B,
                    t["async"] = function(n, e, r, c, i) {
                        var s = {
                            pfgkC: w["vVQlj"],
                            JPjtH: w["bOUAI"],
                            ZEzgI: function(t, n) {
                                return w[d("291", ")7lZ")](t, n)
                            },
                            xffTb: function(t, n) {
                                return w[d("292", "2^0s")](t, n)
                            }
                        };
                        if (w[d("293", "30HP")](w["Htvnc"], w[d("294", "U4xf")])) {
                            w[d("295", "30HP")](void 0, i) && (i = Promise);
                            var o = new B(l(n, e, r, c), i);
                            return t[d("296", "qfqE")](e) ? o: o[d("297", "4zBg")]()[d("298", "S(PA")]((function(t) {
                                return t[d("299", "Jgtc")] ? t[d("29a", "(@(7")] : o[d("297", "4zBg")]()
                            }))
                        }
                        var a = Math[d("29b", "7n#g")](this[d("29c", "5knQ")]["gameHeight"] / 750 * 20),
                        u = new Et(this[d("29d", "y)Vp")][d("19c", "y)Vp")], "", {
                            backgroundCornerRadius: 20,
                            color: s[d("29e", "0%7z")],
                            fontSize: "" [d("29f", "d$Th")](a, "px"),
                            backgroundColor: s[d("2a0", "0tes")],
                            backgroundColor2: d("2a1", "^AE%"),
                            backgroundHorizontalGradient: !1,
                            padding: {
                                top: s["ZEzgI"](a, 2),
                                left: 20,
                                right: 20,
                                bottom: 6
                            }
                        });
                        u[d("2a2", "tDVN")](.5, .5),
                        u["design"]["x"] = t,
                        u[d("2a3", "Z*#m")]["y"] = n;
                        var f = new Vt(this[d("2a4", "S(PA")][d("2a5", "xuC*")], 0, 10, 0, 0, 10, 0, 12511734);
                        f["design"]["x"] = t,
                        f[d("2a6", "jum&")]["y"] = s["xffTb"](n, 20),
                        u[d("2a7", "qfqE")](!1),
                        f[d("2a8", "0tes")](!1),
                        this[d("2a9", "9#sL")][d("2aa", "jum&")](u),
                        this[d("2ab", "0%7z")]["add"](f),
                        this[d("2ac", "5knQ")] = {
                            text: u,
                            triangle: f
                        }
                    },
                    n[d("2ad", "P%4l")](P, A),
                    n[d("2ae", "*gk(")](f, A, u, d("2af", "ZDnO")),
                    A[o] = function() {
                        return this
                    },
                    A["toString"] = function() {
                        var w = {
                            JuAGc: function(t, e) {
                                return n[d("2b0", "xuC*")](t, e)
                            },
                            xTamH: n[d("2b1", "tDVN")],
                            WATVl: n[d("2b2", "Jgtc")]
                        };
                        if (n[d("2b3", "jum&")](n["chLMD"], n[d("2b4", "nedJ")])) return n[d("2b5", "*A)#")];
                        var r = i[s],
                        o = r[d("2b6", "9#sL")][0];
                        w["JuAGc"](r, t["target"]) ? (r["dataset"]["active"] = d("2b7", "o51H"), o["style"][d("2b8", "P%4l")] = w[d("2b9", "]DRy")][d("2ba", "qfqE")](e, ")")) : (r[d("2bb", "AI)w")]["active"] = w[d("2bc", "e%cj")], o["style"][d("2bd", "*gk(")] = d("2be", "xuC*")[d("2bf", "(pLq")](c, ")"))
                    },
                    t[d("2c0", "5knQ")] = function(t) {
                        if (w["vUMzV"](w["TUxFV"], w[d("2c1", "@]mt")])) {
                            var n = [];
                            for (var e in t) n["push"](e);
                            return n[d("2c2", "9#sL")](),
                            function e() {
                                for (; n[d("2c3", "lTsN")];) {
                                    var r = n[d("2c4", "m$jW")]();
                                    if (w["iJPgw"](r, t)) return e[d("2c5", "xuC*")] = r,
                                    e["done"] = !1,
                                    e
                                }
                                return e["done"] = !0,
                                e
                            }
                        }
                        return Boolean[d("51", "jQ0X")]["valueOf"][d("2c6", "9#sL")](Reflect[d("e9", "5dtt")](Boolean, [], (function() {}))),
                        !0
                    },
                    t[d("2c7", "^AE%")] = L,
                    T[d("1f", "Yr1b")] = {
                        constructor: T,
                        reset: function(t) {
                            if (n[d("2c8", "30HP")](d("2c9", "0tes"), n[d("2ca", "qgiy")])) {
                                if (this[d("2cb", "e%cj")] = 0, this[d("2cc", "nedJ")] = 0, this[d("2cd", "(pLq")] = this[d("2ce", ")7lZ")] = e, this[d("2cf", "30HP")] = !1, this[d("2d0", "x$Zb")] = null, this["method"] = "next", this[d("2d1", "xJ1F")] = e, this[d("2d2", "PQB4")][d("1cb", "qgiy")](H), !t) for (var w in this) n[d("2d3", "(pLq")]("t", w[d("2d4", "4zBg")](0)) && i[d("1c6", "jum&")](this, w) && !n["wDNoP"](isNaN, +w["slice"](1)) && (this[w] = e)
                            } else {
                                var r = b(this)["constructor"];
                                w = Reflect["construct"](i, arguments, r)
                            }
                        },
                        stop: function() {
                            if (n["mUQMq"](n[d("2d5", "y)Vp")], d("2d6", "jQ0X"))) {
                                this["done"] = !0;
                                var t = this["tryEntries"][0][d("2d7", "2^0s")];
                                if (n["YVzxg"](n[d("2d8", "y)Vp")], t[d("2d9", "P%4l")])) throw t[d("1aa", "o#Hw")];
                                return this[d("2da", "nedJ")]
                            }
                            t["dmger"][d("2db", "S(PA")]["updatePropNum"](e["amount"] || 0),
                            e[d("2dc", "nedJ")] ? (t[d("2dd", "x$Zb")][d("2de", "Yr1b")][d("2df", "&98m")](), t[d("2e0", "%LFB")]["play"](Y["QSZ_QIN"]), t["dmger"]["domScene"][d("2e1", "7WQB")]()) : t["dmger"][d("2e2", "jQ0X")][d("2e3", "5dtt")]()
                        },
                        dispatchException: function(t) {
                            var n = {
                                BaXXw: function(t, n) {
                                    return w[d("2e4", "^Eu9")](t, n)
                                },
                                omSmB: w["RROfD"],
                                myhQL: w[d("2e5", "%LFB")],
                                fWMaP: function(t, n) {
                                    return w[d("2e6", "^Eu9")](t, n)
                                },
                                hxMsf: d("2e7", "tDVN")
                            }; {
                                if (this[d("2ea", "nedJ")]) throw t;
                                var r = this;
                                function c(w, c) {
                                    return a[d("2eb", "e%cj")] = n[d("2ec", "9#sL")],
                                    a["arg"] = t,
                                    r[d("2ed", "(@(7")] = w,
                                    c && (r[d("1af", "o51H")] = d("2ee", "0%7z"), r[d("2ef", "qfqE")] = e),
                                    !!c
                                }
                                for (var s = w[d("2f0", "4zBg")](this[d("2f1", "B20D")]["length"], 1); s >= 0; --s) if (w["vUMzV"](w[d("2f2", "qfqE")], w[d("2f3", "S(PA")])) w[d("2f4", "9#sL")](c, this, t),
                                this["_speedX"] = 0,
                                this["_speedY"] = 0,
                                this[d("2f5", "30HP")] = e,
                                this[d("2f6", "*A)#")] = r;
                                else {
                                    var o = this[d("2f7", "0tes")][s],
                                    a = o[d("2f8", "0%7z")];
                                    if (w[d("2f9", "%LFB")](w["wTNzs"], o[d("2fa", "(@(7")])) return w[d("2fb", "qgiy")](c, w[d("2fc", "5dtt")]);
                                    if (w[d("2fd", "qgiy")](o["tryLoc"], this["prev"])) if (w[d("2fe", "@]mt")](w["ayKYk"], w[d("2ff", "0%7z")])) {
                                        var u = i["call"](o, w["hAheY"]),
                                        f = i["call"](o, "finallyLoc");
                                        if (w["DVrFi"](u, f)) {
                                            if (w[d("300", "m$jW")](this[d("301", "qfqE")], o[d("302", "]DRy")])) return w[d("303", "jQ0X")](c, o["catchLoc"], !0);
                                            if (w["OQohr"](this[d("304", "ZDnO")], o["finallyLoc"])) return w[d("305", "Z*#m")](c, o[d("306", "0tes")])
                                        } else if (u) if (w["aCZVh"](w[d("307", "9#sL")], d("308", "y)Vp"))) {
                                            if (w[d("309", "4zBg")](this[d("30a", "m$jW")], o[d("30b", "hVad")])) return w["qkXGu"](c, o[d("30c", "AI)w")], !0)
                                        } else {
                                            var D = this;
                                            if (!this[d("30d", "qgiy")][d("30e", "5dtt")]) {
                                                var O = new _t(this);
                                                this[d("30f", "U4xf")]["domScene"] = O,
                                                this[d("30d", "qgiy")]["domScene"][d("310", "lTsN")] = function(t) {
                                                    D[d("311", "0tes")][d("312", "&98m")] || "yinShenYi" === t && D[d("313", "m$jW")][d("314", "lTsN")][d("315", "2^0s")] || n[d("316", "qgiy")] === t && D[d("317", "ZDnO")]["terracottas"][d("318", "hVad")] || D[d("319", "xJ1F")]["bridgeHan"][d("31a", "Jgtc")](t, (function(n) {
                                                        return D["onPropUse"](t, n)
                                                    }))
                                                }
                                            }
                                        } else {
                                            if (!f) throw new Error(w[d("31b", "B20D")]);
                                            if (w[d("31c", "PQB4")](this["prev"], o[d("31d", "hVad")])) return w[d("31e", "0tes")](c, o[d("31f", "P%4l")])
                                        }
                                    } else if (!n[d("320", "7WQB")](t, e)) throw new TypeError(n[d("321", "jum&")])
                                }
                            }
                        },
                        abrupt: function(t, e) {
                            for (var r = n[d("322", "^Eu9")](this[d("323", "2^0s")]["length"], 1); r >= 0; --r) {
                                var c = this[d("324", "7n#g")][r];
                                if (n[d("325", "(@(7")](c[d("326", "xJ1F")], this[d("301", "qfqE")]) && i[d("327", "0tes")](c, "finallyLoc") && this["prev"] < c[d("328", "#cwz")]) {
                                    if (n["mUQMq"](d("329", "qfqE"), d("32a", "tDVN"))) {
                                        var s = r["completion"];
                                        if (w["myjFy"](d("32b", "4zBg"), s["type"])) {
                                            var o = s[d("32c", "U4xf")];
                                            w[d("32d", "5dtt")](H, r)
                                        }
                                        return o
                                    }
                                    var a = c;
                                    break
                                }
                            }
                            a && (n["djnbR"](n["zHOtE"], t) || n[d("32e", "5knQ")]("continue", t)) && n[d("32f", "jum&")](a[d("2fa", "(@(7")], e) && n[d("330", "S(PA")](e, a["finallyLoc"]) && (a = null);
                            var u = a ? a[d("331", "7n#g")] : {};
                            return u[d("332", "o#Hw")] = t,
                            u["arg"] = e,
                            a ? (this["method"] = d("2cc", "nedJ"), this[d("333", "lTsN")] = a["finallyLoc"], M) : this[d("334", "e%cj")](u)
                        },
                        complete: function(t, n) {
                            if (w[d("335", "lTsN")](w["RROfD"], t[d("336", "m$jW")])) throw t[d("337", "^Eu9")];
                            return w["myjFy"](w[d("338", "4zBg")], t[d("339", "lTsN")]) || w["JpdCp"] === t[d("33a", "nedJ")] ? this[d("33b", "30HP")] = t[d("33c", "o51H")] : w[d("33d", "PQB4")](w[d("33e", "]DRy")], t[d("33f", "Z*#m")]) ? (this["rval"] = this["arg"] = t[d("340", "lTsN")], this[d("341", "^Eu9")] = w["iPqtk"], this[d("342", "y)Vp")] = w[d("343", "(pLq")]) : d("344", "S(PA") === t[d("345", "5knQ")] && n && (this[d("346", "S(PA")] = n),
                            M
                        },
                        finish: function(t) {
                            for (var n = w[d("347", "]DRy")](this[d("348", "qfqE")][d("349", "Z*#m")], 1); w["EjrlN"](n, 0); --n) {
                                var e = this[d("34a", "9#sL")][n];
                                if (w["myjFy"](e[d("34b", "nedJ")], t)) return this[d("34c", "4zBg")](e["completion"], e["afterLoc"]),
                                w[d("34d", "jQ0X")](H, e),
                                M
                            }
                        },
                        catch: function(t) {
                            for (var n = {
                                tdyzC: function(t, n, e) {
                                    return w[d("34e", "%LFB")](t, n, e)
                                },
                                nxziq: w[d("34f", "5knQ")],
                                FaETG: w[d("350", "7WQB")]
                            },
                            e = w[d("351", "qfqE")](this[d("352", ")7lZ")][d("353", "d$Th")], 1); w[d("354", "ZDnO")](e, 0); --e) {
                                var r = this[d("355", "lTsN")][e];
                                if (r[d("2fa", "(@(7")] === t) {
                                    var c;
                                    if (w[d("356", "0tes")](d("357", "AI)w"), w[d("358", "ZDnO")])) return n[d("359", "Z*#m")](s, this, r),
                                    (c = e["apply"](this, arguments))[d("35a", "jQ0X")] = 250,
                                    c["padBottom"] = 100,
                                    c["positions"] = [n["nxziq"], d("35b", "x$Zb"), n["FaETG"], n["nxziq"], n["FaETG"], d("35c", "AI)w")],
                                    c[d("35d", "ZDnO")] = -1,
                                    c[d("35e", "jum&")] = 1e3,
                                    c["time"] = 0,
                                    c["maxLength"] = 15,
                                    c;
                                    var i = r["completion"];
                                    if (w[d("35f", "d$Th")](w[d("360", "qgiy")], i[d("2eb", "e%cj")])) {
                                        var s = i[d("337", "^Eu9")];
                                        w[d("361", "o51H")](H, r)
                                    }
                                    return s
                                }
                            }
                            throw new Error(d("362", "e%cj"))
                        },
                        delegateYield: function(t, n, r) {
                            return this["delegate"] = {
                                iterator: w[d("363", "Yr1b")](L, t),
                                resultName: n,
                                nextLoc: r
                            },
                            w["WIPHU"](d("364", "#cwz"), this["method"]) && (this[d("22d", "2^0s")] = e),
                            M
                        }
                    },
                    t
                } (B[d("365", ")7lZ")]);
                try {
                    regeneratorRuntime = e
                } catch(c) {
                    if (n["tZSmV"](n[d("366", "xJ1F")], d("367", "*A)#"))) {
                        var w = n[d("368", "o51H")](K, this)[d("369", "U4xf")];
                        c = Reflect[d("36a", "2^0s")](a["a"], arguments, w)
                    } else n["TzQnT"](Function, "r", n[d("36b", "5knQ")])(e)
                }
            } ();
            var x, E, H, T, L, V, z = B["exports"],
            R = console[d("36c", "xuC*")],
            X = function() {
                var t = {
                    ZWPmg: "via-debug",
                    jpQgB: d("36d", "x$Zb"),
                    GwJgQ: function(t, n) {
                        return t || n
                    }
                },
                n = location["href"][d("36e", "9#sL")](t["ZWPmg"]),
                e = location[d("36f", "xJ1F")][d("370", "^AE%")](t["jpQgB"]);
                t[d("371", "y)Vp")](n, e) && R["apply"](void 0, arguments)
            },
            F = {
                LOADING: "loadingScene",
                QIN: d("372", "Yr1b"),
                HAN: d("373", "x$Zb"),
                TANG: d("374", "AI)w"),
                Await: d("375", "7n#g")
            };
            function W(t, n, e) {
                var w = {
                    ZUpvU: function(t, n) {
                        return t in n
                    }
                };
                return w[d("376", "7WQB")](n, t) ? Object["defineProperty"](t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = e,
                t
            } (V = L || (L = {}))[d("377", "y)Vp")] = d("378", "S(PA"),
            V["BG_HAN"] = "hanBg",
            V["BG_TANG"] = d("379", "Yr1b"),
            V[d("37a", "*gk(")] = d("37b", "Yr1b"),
            V["QIN_LY"] = d("37c", "nedJ"),
            V[d("37d", "%LFB")] = "qinMt",
            V[d("37e", "hVad")] = d("37f", "Jgtc"),
            V[d("380", "@]mt")] = d("381", "AI)w"),
            V[d("382", "qgiy")] = d("383", "nedJ"),
            V[d("384", "U4xf")] = d("385", "^Eu9"),
            V["YONG_CHEMA_MAO"] = d("386", "xJ1F"),
            V[d("387", "^AE%")] = "yong_chema_yanan",
            V[d("388", "AI)w")] = d("389", "AI)w"),
            V[d("38a", "4zBg")] = "shanXiRouBao",
            V["STONE"] = "stone";
            var Z, U, J = (W(x = {},
            L["BG_QIN"], d("38b", "(pLq")), W(x, L[d("38c", "y)Vp")], d("38d", "o#Hw")), W(x, L["QIN_LY"], d("38e", "(@(7")), W(x, L[d("38f", "4zBg")], d("390", "tDVN")), W(x, L[d("391", "S(PA")], "stick_base.png"), W(x, L[d("392", "m$jW")], d("393", "lTsN")), W(x, L[d("394", "B20D")], "han_bg.png"), W(x, L["INVISIBILITY_CLOAK"], d("395", "30HP")), W(x, L[d("396", "]DRy")], d("397", "7n#g")), W(x, L["YONG_CHEMA_MAO"], "yong_chema_mao.png"), W(x, L[d("398", "2^0s")], d("399", "lTsN")), W(x, L[d("39a", "9#sL")], d("39b", "^Eu9")), W(x, L["HILLSIDE"], d("39c", "e%cj")), W(x, L[d("39d", "Yr1b")], "shanxi_roubao.png"), W(x, L["STONE"], "stone.png"), x); (U = Z || (Z = {}))[d("39e", "o#Hw")] = "role_mm_qin",
            U[d("39f", "m$jW")] = d("3a0", "#cwz"),
            U[d("3a1", "o#Hw")] = d("3a2", "jum&"),
            U[d("3a3", "xuC*")] = d("3a4", "]DRy"),
            U[d("3a5", "o#Hw")] = d("3a6", "]DRy"),
            U[d("3a7", "Yr1b")] = d("3a8", "y)Vp"),
            U[d("3a9", "y)Vp")] = d("3aa", "(@(7"),
            U["ROLE_MM_HAN"] = d("3ab", "nedJ"),
            U[d("3ac", "9#sL")] = d("3ad", "Z*#m"),
            U[d("3ae", "9#sL")] = "role_ts_han",
            U[d("3af", "^AE%")] = d("3b0", "o#Hw"),
            U[d("3b1", "7n#g")] = d("3b2", "^AE%"),
            U[d("3b3", "AI)w")] = "role_qq_tang",
            U[d("3b4", "xJ1F")] = "role_mm_tang",
            U[d("3b5", "^Eu9")] = d("3b6", "qfqE"),
            U[d("3b7", "lTsN")] = "role_qq_tang_dp",
            U[d("3b8", "@]mt")] = d("3b9", "xuC*"),
            U[d("3ba", "tDVN")] = d("3bb", "ZDnO"),
            U[d("3bc", "30HP")] = d("3bd", "0tes"),
            U[d("3be", "e%cj")] = d("3bf", "30HP"),
            U[d("3c0", "x$Zb")] = d("3c1", "x$Zb"),
            U[d("3c2", "*gk(")] = "jump_mm_dp",
            U[d("3c3", "d$Th")] = d("3c4", "*gk("),
            U[d("3c5", "9#sL")] = "jump_ts_dp",
            U["FALL_QQ"] = d("3c6", "@]mt"),
            U[d("3c7", "xJ1F")] = d("3c8", "o#Hw"),
            U[d("3c9", "qfqE")] = "fall_ts",
            U[d("3ca", "7n#g")] = d("3cb", "ZDnO"),
            U[d("3cc", "30HP")] = d("3cd", "x$Zb");
            var S, I, N = (W(E = {},
            Z[d("3ce", "P%4l")], d("3cf", "*A)#")), W(E, Z[d("3d0", "#cwz")], "role_mm_qin_dj"), W(E, Z[d("3d1", "hVad")], d("3d2", "U4xf")), W(E, Z["ROLE_QQ_QIN_DJ"], "role_qq_qin_dj"), W(E, Z[d("3d3", "lTsN")], d("3d4", "%LFB")), W(E, Z[d("3d5", "%LFB")], d("3d6", "4zBg")), W(E, Z[d("3d7", "o51H")], "golden"), W(E, Z[d("3d8", "S(PA")], d("3d9", "30HP")), W(E, Z[d("3da", "qgiy")], d("3db", "Yr1b")), W(E, Z["ROLE_TS_HAN"], "role_ts_han"), W(E, Z["YONG_BIND"], "yong_bing"), W(E, Z[d("3dc", "lTsN")], d("3dd", "PQB4")), W(E, Z[d("3de", "(pLq")], d("3df", "(@(7")), W(E, Z[d("3e0", "%LFB")], "role_mm_tang"), W(E, Z["ROLE_TS_TANG"], d("3e1", "7WQB")), W(E, Z[d("3e2", "9#sL")], "role_qq_tang_dp"), W(E, Z[d("3e3", "x$Zb")], d("3e4", "(@(7")), W(E, Z["ROLE_TS_TANG_DP"], d("3e5", "*A)#")), W(E, Z[d("3e6", "Z*#m")], d("3e7", "o#Hw")), W(E, Z[d("3e8", "%LFB")], "jump_qq_dp"), W(E, Z["JUMP_MM"], "jump_mm"), W(E, Z[d("3c2", "*gk(")], d("3e9", "^AE%")), W(E, Z["JUMP_TS"], d("3ea", "Jgtc")), W(E, Z[d("3eb", "Z*#m")], d("3ec", "qgiy")), W(E, Z[d("3ed", "2^0s")], "fall_qq"), W(E, Z["FALL_MM"], d("3ee", "B20D")), W(E, Z[d("3ef", "jum&")], d("3f0", "#cwz")), W(E, Z["GHOST"], "ghost"), W(E, Z["JIU_MEI"], "jiu_mei"), E); (I = S || (S = {}))[d("3f1", "PQB4")] = "score_bg",
            I[d("3f2", "5knQ")] = d("3f3", "]DRy"),
            I[d("3f4", "ZDnO")] = d("3f5", "qgiy"),
            I[d("3f6", "xJ1F")] = "choose_role_title",
            I["CHOOSE_ROLE_CONFIRM"] = d("3f7", "tDVN"),
            I["CHOOSE_ROLE_DESC"] = d("3f8", "4zBg"),
            I[d("3f9", "2^0s")] = "role_box_active",
            I["ROLE_BOX_INACTIVE"] = d("3fa", "Yr1b"),
            I[d("3fb", "jQ0X")] = d("3fc", "S(PA"),
            I[d("3fd", "y)Vp")] = d("3fe", "(@(7"),
            I[d("3ff", "S(PA")] = d("400", "bPML"),
            I["GUIDE_QIN"] = d("401", "0%7z"),
            I[d("402", "jQ0X")] = d("403", "4zBg"),
            I["PROP_BDS"] = "prop_bds",
            I[d("404", "7WQB")] = d("405", "Jgtc"),
            I[d("406", "B20D")] = "guide_han",
            I["PROP_BOX_BLUE"] = d("407", "o51H"),
            I["PROP_DOU_PENG"] = d("408", "lTsN"),
            I["HP"] = "hp",
            I["BTN_JUMP"] = d("409", "*gk("),
            I[d("40a", "lTsN")] = "btn_throw",
            I[d("40b", "o#Hw")] = d("40c", "7n#g"),
            I[d("40d", ")7lZ")] = d("40e", "AI)w"),
            I["GUIDE_TANG_3"] = d("40f", "P%4l"),
            I[d("410", "*gk(")] = d("411", "0%7z");
            var Y, G, _ = (W(H = {},
            S[d("412", "e%cj")], d("413", "bPML")), W(H, S[d("414", "^Eu9")], d("415", "qfqE")), W(H, S[d("416", "AI)w")], "prop_box.png"), W(H, S["CHOOSE_ROLE_TITLE"], d("417", "2^0s")), W(H, S["CHOOSE_ROLE_CONFIRM"], "choose_role_confirm.png"), W(H, S[d("418", "Jgtc")], "choose_role_desc.png"), W(H, S[d("419", "@]mt")], "role_box_active.png"), W(H, S[d("41a", "xJ1F")], d("41b", "(@(7")), W(H, S["ROLE_MM"], "role_mm.png"), W(H, S[d("41c", "%LFB")], "role_qq.png"), W(H, S[d("41d", "]DRy")], d("41e", "e%cj")), W(H, S[d("41f", "xJ1F")], d("420", "5knQ")), W(H, S[d("421", "U4xf")], "guide_know.png"), W(H, S[d("422", "xuC*")], d("423", "o#Hw")), W(H, S[d("424", "d$Th")], d("425", "&98m")), W(H, S["GUIDE_HAN"], d("426", "Yr1b")), W(H, S["PROP_BOX_BLUE"], d("427", "Yr1b")), W(H, S[d("428", "U4xf")], d("429", "@]mt")), W(H, S["HP"], "hp.png"), W(H, S[d("42a", ")7lZ")], "btn_jump.png"), W(H, S[d("42b", "7n#g")], "btn_throw.png"), W(H, S[d("42c", "e%cj")], "guide_tang_1.png"), W(H, S[d("42d", "jQ0X")], d("42e", "#cwz")), W(H, S[d("42f", "xuC*")], d("430", "nedJ")), W(H, S[d("431", "*A)#")], "guide_next.png"), H); (G = Y || (Y = {}))[d("432", "qfqE")] = d("433", "(pLq"),
            G[d("434", "*A)#")] = d("435", "30HP"),
            G["LI_YU"] = "li_yu",
            G[d("436", "ZDnO")] = d("437", "^Eu9"),
            G["QSZ_QIN"] = d("438", "#cwz"),
            G[d("439", ")7lZ")] = d("43a", ")7lZ"),
            G[d("43b", "(pLq")] = "bgm_han",
            G[d("43c", "4zBg")] = d("43d", "7n#g"),
            G[d("43e", "]DRy")] = "yong_bing",
            G["YONG_CHEMA"] = "yong_chema",
            G[d("43f", "o#Hw")] = d("440", "7WQB"),
            G["BGM_TANG"] = d("441", "lTsN"),
            G[d("442", "^Eu9")] = d("443", "bPML"),
            G[d("444", "0tes")] = d("445", "Yr1b"),
            G[d("446", "30HP")] = d("447", "%LFB"),
            G["HIT_GHOST"] = d("448", "Z*#m"),
            G[d("449", "e%cj")] = d("44a", "Jgtc");
            var $ = (W(T = {},
            Y[d("44b", "x$Zb")], d("44c", "xuC*")), W(T, Y[d("44d", "]DRy")], d("44e", "o51H")), W(T, Y[d("44f", "d$Th")], "li_yu.mp3"), W(T, Y[d("450", "Yr1b")], d("451", "qgiy")), W(T, Y[d("452", "lTsN")], "qsz_qin.mp3"), W(T, Y[d("453", "#cwz")], d("454", "jum&")), W(T, Y[d("455", "U4xf")], "bgm_han.mp3"), W(T, Y["BDS_HAN"], d("456", "U4xf")), W(T, Y[d("457", "PQB4")], "yong_bing.mp3"), W(T, Y[d("458", "AI)w")], d("459", "7WQB")), W(T, Y["YSY_HAN"], d("45a", "o#Hw")), W(T, Y[d("45b", "^AE%")], d("45c", "o#Hw")), W(T, Y[d("45d", "o#Hw")], "bun.mp3"), W(T, Y[d("444", "0tes")], d("45e", "m$jW")), W(T, Y["DOUBLE_CARD"], "double_card.mp3"), W(T, Y[d("45f", "qgiy")], "hit_ghost.mp3"), W(T, Y["JIU_MEI"], "jiu_mei.mp3"), T);
            function tt(t) {
                var n = {
                    bRlaA: function(t, n) {
                        return t == n
                    },
                    OiaIl: "undefined",
                    BsPmY: d("460", "4zBg"),
                    JGYGo: function(t, n) {
                        return t === n
                    },
                    DBXdm: d("461", "5knQ"),
                    SxUgn: d("462", "^AE%"),
                    KzGJV: function(t, n) {
                        return t(n)
                    },
                    jlNlF: "BSgui",
                    aUdxN: d("463", "*gk(")
                },
                e = function() {
                    if (n["bRlaA"](n[d("464", "bPML")], "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("465", "30HP")]) return ! 1;
                    if (Reflect[d("466", "@]mt")][d("467", "PQB4")]) return ! 1;
                    if (n[d("468", "7WQB")](n[d("469", "d$Th")], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                    try {
                        return Boolean[d("46a", "qgiy")][d("46b", "^Eu9")][d("9f", "S(PA")](Reflect[d("46c", "jum&")](Boolean, [], (function() {}))),
                        !0
                    } catch(t) {
                        if (n[d("46d", "tDVN")](n[d("46e", "U4xf")], n["DBXdm"])) return ! 1;
                        this[d("46f", "lTsN")][d("470", "&98m")](0),
                        this[d("471", "jum&")] || this[d("472", "qfqE")][d("473", "@]mt")](this[d("474", "Z*#m")])
                    }
                } ();
                return function() {
                    var w, r = n["KzGJV"](K, t);
                    if (e) if (n[d("475", "bPML")](n[d("476", "&98m")], n[d("477", "nedJ")])) this[d("478", "AI)w")][d("479", ")7lZ")][d("47a", "(@(7")] ? !this["dmger"]["role"][d("47b", "qfqE")] && this[d("47c", "S(PA")]["role"][d("47d", "x$Zb")]() : e[d("47e", "P%4l")] === Z["YONG_BIND"] ? (this[d("47f", "2^0s")][d("480", "0tes")](Y[d("481", "m$jW")]), this[d("482", "AI)w")](n["SxUgn"]), this["stopGame"]()) : (this[d("483", "#cwz")][d("484", "o#Hw")](Y[d("485", "B20D")]), this["say"](d("486", "Jgtc")), e["destroy"](), this["bgSpeedUp"]());
                    else {
                        var c = K(this)[d("487", "o51H")];
                        w = Reflect[d("99", "*A)#")](r, arguments, c)
                    } else w = r[d("488", "5knQ")](this, arguments);
                    return b(this, w)
                }
            }
            var nt = function(t) {
                var n = {
                    WQubT: d("489", "xuC*"),
                    yWkyN: function(t, n) {
                        return t * n
                    },
                    wxYeH: function(t, n) {
                        return t / n
                    },
                    MfcvS: function(t, n, e) {
                        return t(n, e)
                    },
                    blUtG: function(t, n) {
                        return t(n)
                    },
                    FEWNR: d("48a", "5dtt"),
                    hFNGS: d("48b", "jQ0X")
                };
                n["MfcvS"](l, w, Phaser["Scene"]);
                var e = n[d("48c", "30HP")](tt, w);
                function w() {
                    var t;
                    return D(this, w),
                    (t = e[d("48d", "#cwz")](this, arguments))[d("48e", "@]mt")] = 1636,
                    t["designHeight"] = 750,
                    t
                }
                return n[d("48f", "#cwz")](h, w, [{
                    key: n[d("490", "jQ0X")],
                    value: function(t) {
                        return this[d("491", "Jgtc")](t, this[d("492", "AI)w")][d("493", "*A)#")][d("494", "B20D")], this["designWidth"])
                    }
                },
                {
                    key: d("495", "0tes"),
                    value: function(t) {
                        return n["WQubT"] === n[d("496", "e%cj")] ? this[d("497", "P%4l")](t, this["game"][d("498", "*gk(")]["height"], this["designHeight"]) : this["_invoke"](e, t)
                    }
                },
                {
                    key: n[d("499", "0%7z")],
                    value: function(t, e, w) {
                        return parseInt("" ["concat"](n[d("49a", "nedJ")](t, n[d("49b", "0tes")](e, w))))
                    }
                }]),
                w
            } (),
            et = d("49c", "U4xf"),
            wt = d("49d", "nedJ");
            function rt(t) {
                var n = {
                    pvxTO: d("49e", "B20D"),
                    rtegh: function(t, n) {
                        return t == n
                    },
                    IMDZj: "function",
                    aAFXP: function(t, n) {
                        return t(n)
                    }
                },
                e = function() {
                    if (n[d("49f", "nedJ")] == ("undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("4a0", "bPML")]) return ! 1;
                    if (Reflect[d("4a1", "d$Th")][d("4a2", "30HP")]) return ! 1;
                    if (n[d("4a3", "*A)#")](n[d("4a4", "5dtt")], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                    try {
                        return Boolean["prototype"][d("4a5", "jum&")][d("81", "e%cj")](Reflect["construct"](Boolean, [], (function() {}))),
                        !0
                    } catch(t) {
                        return ! 1
                    }
                } ();
                return function() {
                    var w, r = K(t);
                    if (e) {
                        var c = n[d("4a6", "30HP")](K, this)[d("4a7", "xJ1F")];
                        w = Reflect[d("4a8", "e%cj")](r, arguments, c)
                    } else w = r[d("4a9", "4zBg")](this, arguments);
                    return b(this, w)
                }
            }
            var ct, it, st = function(t) {
                var n = {
                    aIVWr: d("4aa", "5dtt"),
                    zLpel: function(t, n) {
                        return t === n
                    },
                    tBcYP: d("4ab", "jum&"),
                    HAjUs: d("4ac", "0tes"),
                    fAmta: "pointerdown",
                    tePTr: d("4ad", "xuC*"),
                    OmzQG: d("4ae", "(@(7"),
                    Inqrj: function(t, n, e, w) {
                        return t(n, e, w)
                    },
                    MPQno: "onEndGame",
                    LWQOW: function(t) {
                        return t()
                    },
                    adrtb: function(t, n, e) {
                        return t(n, e)
                    },
                    SOvgv: d("4af", "e%cj"),
                    JxbWm: function(t, n, e) {
                        return t(n, e)
                    },
                    OOwJE: function(t, n, e) {
                        return t(n, e)
                    },
                    rjuhn: d("4b0", "^AE%"),
                    doVWn: d("4b1", "^Eu9"),
                    IgfJP: d("4b2", "qfqE"),
                    rCzXm: "onPlay"
                };
                n["JxbWm"](l, w, nt);
                var e = rt(w);
                function w() {
                    if (!n[d("4b3", "0%7z")](d("4b4", "5knQ"), d("4b5", "(pLq"))) return D(this, w),
                    e["apply"](this, arguments);
                    X("" ["concat"](F["HAN"], " create"), t),
                    this[d("4b6", "hVad")][d("4b7", "tDVN")](Y[d("4b8", "ZDnO")]) || this["sound"]["play"](Y[d("4b9", "#cwz")], {
                        loop: !0
                    }),
                    this[d("4ba", "7WQB")][d("4bb", "xJ1F")] = this[d("4bc", "d$Th")][d("4bd", "(@(7")](Y[d("4be", "o51H")]),
                    this[d("4bf", "tDVN")][d("4c0", "7WQB")] = new pt(this, L[d("4c1", "y)Vp")]),
                    this["createDomScene"](),
                    this["dmger"]["domScene"][d("4c2", "&98m")](t[d("4c3", "nedJ")] || 0),
                    this["dmger"]["domScene"][d("4c4", "*A)#")]("bingDongShan", t[d("4c5", "^AE%")] || 0),
                    this[d("4c6", "5dtt")][d("4c7", "4zBg")][d("4c8", "AI)w")](n["aIVWr"], t[d("4c9", "%LFB")] || 0),
                    this[d("4ca", "^AE%")][d("4cb", "qgiy")](),
                    this[d("4cc", "tDVN")]()
                }
                return n["OOwJE"](h, w, [{
                    key: n["rjuhn"],
                    get: function() {
                        return this["game"]["$content"]
                    }
                },
                {
                    key: "getJoyStick",
                    value: function() {
                        var t = {
                            mJxLt: n["tBcYP"]
                        },
                        e = this,
                        w = this["plugins"][d("4cd", "jum&")](n[d("4ce", "m$jW")]),
                        r = this["add"][d("4cf", "Jgtc")](0, 0, L[d("4d0", "5dtt")]),
                        c = this[d("4d1", "o#Hw")][d("4d2", ")7lZ")](0, 0, L[d("4d3", "5dtt")]),
                        i = this[d("4d4", "jQ0X")](305),
                        s = this[d("4d5", "d$Th")](202);
                        r[d("4d6", "(pLq")](i, i)[d("4d7", "ZDnO")](1e3),
                        c[d("4d8", "0%7z")](s, s)[d("4d9", "Jgtc")](1e3);
                        var o = this[d("4da", "ZDnO")](203.5),
                        a = this[d("4db", "4zBg")](380.5);
                        this[d("4dc", "AI)w")] = o,
                        this[d("4dd", "xuC*")] = a;
                        var u = w["add"](this, {
                            x: o,
                            y: a,
                            base: r,
                            thumb: c,
                            enable: !0
                        });
                        return this["input"]["on"](n["fAmta"], (function(t) {
                            u["x"] = t["x"],
                            u["y"] = t["y"],
                            u[d("4de", "5dtt")]["x"] = t["x"],
                            u[d("4df", "o#Hw")]["y"] = t["y"],
                            u[d("4e0", "Z*#m")]["x"] = t["x"],
                            u[d("4e1", ")7lZ")]["y"] = t["y"]
                        })),
                        this[d("4e2", "jQ0X")]["on"](n[d("4e3", "*gk(")], (function() {
                            var n = {
                                eCpay: d("4e4", "U4xf")
                            };
                            t[d("4e5", "]DRy")] === d("4e6", "#cwz") ? e[d("4e7", "(pLq")]() : (X("" [d("4e8", "ZDnO")](F[d("4e9", "hVad")], n["eCpay"])), this[d("4ea", "P%4l")]())
                        })),
                        this[d("4eb", "AI)w")] = u,
                        u
                    }
                },
                {
                    key: n[d("4ec", "5knQ")],
                    value: function() {
                        if (n[d("4ed", "]DRy")] !== n[d("4ee", "P%4l")]) return this["_role"]["displayWidth"];
                        this[d("4ef", "bPML")]["x"] = this[d("4f0", "d$Th")],
                        this["joyStick"]["y"] = this[d("4f1", "Jgtc")],
                        this[d("4f2", "9#sL")][d("4f3", "*gk(")]["x"] = this["joyStickX"],
                        this[d("4f4", "y)Vp")][d("4f5", "^Eu9")]["y"] = this[d("4f6", "m$jW")],
                        this["joyStick"][d("4f7", "^Eu9")]["x"] = this["joyStickX"],
                        this["joyStick"][d("4f8", "tDVN")]["y"] = this[d("4f9", "y)Vp")]
                    }
                },
                {
                    key: n[d("4fa", "jQ0X")],
                    value: function() {
                        this["game"][d("4fb", "]DRy")]["once"](et, this["onPlay"], this)
                    }
                },
                {
                    key: n["MPQno"],
                    value: function(t, e) {
                        n["Inqrj"](X, n[d("4fc", "S(PA")], t, F[t]),
                        this[d("4fd", "(pLq")][d("4fe", "xuC*")](),
                        e && n[d("4ff", "^AE%")](e),
                        this[d("500", "5knQ")][d("501", "#cwz")](F[t]),
                        this["scene"][d("502", "xJ1F")](F[d("503", "^AE%")])
                    }
                },
                {
                    key: n["rCzXm"],
                    value: function(t) {
                        n[d("504", "]DRy")](X, n[d("505", "U4xf")], this[d("4a7", "xJ1F")]["name"]),
                        this[d("506", "#cwz")]["start"](F[t[d("507", "5knQ")]], t[d("508", "U4xf")])
                    }
                }]),
                w
            } ();
            function ot(t) {
                var n = {
                    SgoZO: function(t, n, e) {
                        return t(n, e)
                    },
                    xdLPJ: function(t, n) {
                        return t !== n
                    },
                    IzcOo: d("509", "*gk("),
                    fUJBY: d("50a", "bPML"),
                    pWglZ: function(t, n) {
                        return t == n
                    },
                    GsBvP: d("50b", "#cwz"),
                    zYUVX: d("50c", "&98m"),
                    xtUVH: function(t, n) {
                        return t(n)
                    },
                    uAdul: d("50d", "2^0s"),
                    KyEsv: function(t, n) {
                        return t(n)
                    }
                },
                e = function() {
                    var w, c = {
                        UndaH: function(t, e, w) {
                            return n[d("50e", "Z*#m")](t, e, w)
                        }
                    };
                    if (n[d("50f", "&98m")](n[d("510", "9#sL")], n[d("511", "&98m")])) return c["UndaH"](D, this, o["a"]),
                    (w = e["call"](this, t, O))["primaryKey"] = a["a"],
                    w["hillside"] = h,
                    w["role"] = C,
                    w[d("512", "2^0s")] = w["hillside"]["speed"],
                    w[d("19c", "y)Vp")]["physics"][d("513", "jQ0X")][d("514", "qgiy")](p(w)),
                    w[d("515", "xJ1F")]["allowGravity"] = !1,
                    w;
                    if (n[d("516", "m$jW")] == ("undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("517", "nedJ")]) return ! 1;
                    if (Reflect[d("b5", "7n#g")]["sham"]) return ! 1;
                    if (n["pWglZ"](n["GsBvP"], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                    try {
                        return Boolean[d("518", "7n#g")][d("519", "lTsN")]["call"](Reflect[d("51a", "tDVN")](Boolean, [], (function() {}))),
                        !0
                    } catch(i) {
                        if (n[d("51b", "bPML")] === n[d("51c", "30HP")]) return ! 1;
                        i["golden"]["setVisible"](!1),
                        i[d("51d", "(@(7")](i["roleNames"][i[d("51e", "x$Zb")]][d("51f", "e%cj")])
                    }
                } ();
                return function() {
                    var w, r = n[d("520", "S(PA")](K, t);
                    if (e) {
                        if (!n[d("521", "9#sL")](n[d("522", "5dtt")], "FWgOY")) return {
                            type: d("525", "y)Vp"),
                            arg: t["call"](e, w)
                        };
                        var c = n[d("523", "2^0s")](K, this)[d("524", "hVad")];
                        w = Reflect[d("4a0", "bPML")](r, arguments, c)
                    } else w = r["apply"](this, arguments);
                    return n[d("526", "]DRy")](b, this, w)
                }
            } (it = ct || (ct = {}))[d("527", "ZDnO")] = d("528", "9#sL"),
            it[d("529", "7WQB")] = d("52a", "]DRy"),
            it[d("52b", "7n#g")] = d("52c", "P%4l"),
            it[d("52d", "y)Vp")] = "qq_dj_swim",
            it[d("52e", "jum&")] = "ts_swim",
            it[d("52f", "qgiy")] = d("530", "xuC*"),
            it[d("531", "x$Zb")] = d("532", "jum&"),
            it[d("533", "tDVN")] = d("534", "*gk("),
            it[d("535", "(@(7")] = "qq_kick",
            it[d("536", "*gk(")] = d("537", "xJ1F"),
            it[d("538", "0%7z")] = d("539", "B20D"),
            it[d("53a", "7n#g")] = d("53b", "lTsN"),
            it["MM_SKI"] = d("53c", "*gk("),
            it[d("53d", "30HP")] = "mm_ski_dp",
            it[d("53e", "U4xf")] = d("53f", "tDVN"),
            it[d("540", "xuC*")] = "qq_ski_dp",
            it[d("541", "30HP")] = "ts_ski",
            it[d("542", "S(PA")] = d("543", "U4xf"),
            it[d("544", "*gk(")] = "fall_mm",
            it[d("545", "PQB4")] = d("546", "*A)#"),
            it[d("547", "4zBg")] = "fall_ts",
            it["GHOST"] = d("548", "5dtt");
            var at = function(t) {
                var n = {
                    eMlUO: function(t, n) {
                        return t >= n
                    },
                    mBujS: function(t, n) {
                        return t === n
                    },
                    TfpZU: d("549", "@]mt"),
                    thdZF: function(t, n, e) {
                        return t(n, e)
                    },
                    zJhac: d("54a", "0tes"),
                    YAXQA: " preload",
                    TtcMT: "progress",
                    QDPrH: "complete",
                    eiJWH: d("54b", "(pLq"),
                    PVIBV: d("54c", "@]mt"),
                    vujOT: d("54d", "xuC*"),
                    yxNgS: ".json?v=",
                    giyAu: d("54e", "hVad"),
                    DGyoF: d("54f", "Yr1b"),
                    ZaNbb: function(t, n) {
                        return t(n)
                    },
                    ytCPN: d("550", "(@(7"),
                    GAkpH: function(t, n) {
                        return t === n
                    },
                    jsNKu: d("551", "lTsN"),
                    QpIhF: function(t, n, e, w) {
                        return t(n, e, w)
                    },
                    dUftF: d("552", "bPML"),
                    WVjaG: d("553", "hVad"),
                    zlpwn: function(t, n) {
                        return t < n
                    },
                    MoHLp: function(t, n) {
                        return t in n
                    },
                    lHcDV: d("234", "#cwz"),
                    nrsWM: "elqjF",
                    IfOoj: function(t, n) {
                        return t !== n
                    },
                    EPBlv: d("554", "lTsN"),
                    PPfkr: d("555", "9#sL"),
                    HfkHS: function(t, n) {
                        return t == n
                    },
                    phaBV: d("556", "ZDnO"),
                    EBWym: d("557", "jum&"),
                    rHtkw: d("558", "9#sL"),
                    EWSRx: d("559", "lTsN"),
                    TrWxH: d("55a", "0tes"),
                    sRpGB: function(t, n, e) {
                        return t(n, e)
                    },
                    alKJK: function(t, n) {
                        return t(n)
                    },
                    Xakgl: d("55b", "^Eu9"),
                    sbwUb: d("55c", "PQB4"),
                    yUhmW: "loadingImg",
                    hWilG: "createAnims"
                };
                n[d("55d", "30HP")](l, c, st);
                var e, w = n[d("55e", "B20D")](ot, c);
                function c() {
                    var t, e = {
                        YbGkH: function(t, e) {
                            return n["eMlUO"](t, e)
                        }
                    };
                    if (!n["mBujS"](d("55f", "7n#g"), n["TfpZU"])) return n[d("567", "e%cj")](D, this, c),
                    (t = w[d("568", "2^0s")](this, {
                        key: F[d("569", "qfqE")]
                    }))[d("56a", "xuC*")] = !1,
                    t[d("56b", "*A)#")] = !1,
                    t;
                    var r = {
                        QaBWS: function(t, n) {
                            return e["YbGkH"](t, n)
                        }
                    },
                    i = this,
                    s = this[d("560", "P%4l")]();
                    s[d("561", "o#Hw")] <= 0 || (Phaser[d("562", "]DRy")]["Call"](s, (function(t) {
                        t[d("563", "0tes")]()
                    }), this), this["timer"](t, (function() {
                        r[d("564", "jQ0X")](i[d("565", "lTsN")], i[d("566", "0%7z")]) && i["addFloating"]()
                    })))
                }
                return n[d("56c", "PQB4")](h, c, [{
                    key: n[d("56d", "*gk(")],
                    value: function() {
                        var t = n["zJhac"]["split"]("|"),
                        e = 0;
                        while (1) {
                            switch (t[e++]) {
                            case "0":
                                var w = this;
                                continue;
                            case "1":
                                X("" ["concat"](F[d("56e", "(@(7")], n[d("56f", "qfqE")])),
                                this["load"]["on"](n[d("570", "lTsN")], (function(t) {
                                    w[d("571", "9#sL")][d("572", "xuC*")][d("573", "Jgtc")](wt, {
                                        process: t,
                                        status: "loadingTexture"
                                    })
                                })),
                                this["load"]["on"](n[d("574", "P%4l")], (function() {
                                    w["gameSourceLoadOk"] = !0,
                                    w[d("575", "lTsN")]()
                                })),
                                this[d("576", "xuC*")]();
                                continue;
                            case "2":
                                for (var r in J) if (Object[d("577", "9#sL")][d("578", "S(PA")]["call"](J, r)) {
                                    var c = J[r];
                                    this[d("579", "d$Th")]["image"](r, "" [d("57a", "Jgtc")](O, n[d("57b", "Z*#m")])[d("57c", "9#sL")](c, d("54f", "Yr1b"))[d("29f", "d$Th")](h))
                                }
                                continue;
                            case "3":
                                for (var i in N) if (Object[d("57d", "x$Zb")]["hasOwnProperty"]["call"](N, i)) {
                                    var s = N[i],
                                    o = "" [d("57e", "0%7z")](O, d("57f", "4zBg"))[d("580", "P%4l")](s, n[d("581", "0%7z")])[d("d8", "*gk(")](h),
                                    a = "" [d("582", "%LFB")](O, n["vujOT"])["concat"](s, n["yxNgS"])[d("583", "e%cj")](h);
                                    this[d("584", "Z*#m")][d("585", "Z*#m")](i, o, a)
                                }
                                continue;
                            case "4":
                                for (var u in $) if (Object[d("586", "4zBg")]["hasOwnProperty"][d("e8", "y)Vp")]($, u)) {
                                    var f = $[u],
                                    D = "" [d("d8", "*gk(")](O, n[d("587", "o51H")])["concat"](f, n[d("588", "Yr1b")])[d("589", "*A)#")](h);
                                    this[d("58a", "ZDnO")][d("58b", "o51H")](u, D)
                                }
                                continue;
                            case "5":
                                var O = this[d("58c", "nedJ")]["$content"][d("58d", "@]mt")],
                                h = this["$content"][d("58e", "^Eu9")];
                                continue
                            }
                            break
                        }
                    }
                },
                {
                    key: n[d("58f", "*gk(")],
                    value: function() {
                        n[d("590", "^AE%")](X, "" [d("591", "^Eu9")](F["LOADING"], n[d("592", "x$Zb")])),
                        this[d("593", "Z*#m")]()
                    }
                },
                {
                    key: "loadOkTo",
                    value: function() {
                        n[d("594", "x$Zb")]("tsIGx", n[d("595", ")7lZ")]) ? (n[d("596", "xJ1F")](X, n["dUftF"], this["gameSourceLoadOk"], this[d("597", "5knQ")]), this[d("598", "*A)#")] && this["domSourceLoadOk"] && (this["game"][d("599", "U4xf")][d("59a", "*gk(")](wt, {
                            process: 1,
                            status: n["WVjaG"]
                        }), this["scene"][d("59b", "PQB4")](F["Await"]))) : t["scene"][d("59c", "0tes")]["add"]({
                            targets: t,
                            alpha: {
                                from: .6,
                                to: 1
                            },
                            ease: d("59d", "5dtt"),
                            duration: 600,
                            repeat: -1,
                            yoyo: !0
                        })
                    }
                },
                {
                    key: n[d("59e", "xuC*")],
                    value: function(t) {
                        var e = {
                            BGckh: function(t, n) {
                                return t === n
                            },
                            lkeyh: n[d("59f", "hVad")],
                            yEWPx: function(t, n) {
                                return t(n)
                            }
                        };
                        if (n[d("5a0", "d$Th")](n[d("5a1", "2^0s")], n[d("5a2", "0tes")])) {
                            var w = new Image;
                            return window["__preloads"] || (window[d("5a3", ")7lZ")] = {}),
                            new Promise((function(n) {
                                w[d("5a4", "nedJ")] = w[d("5a5", "o#Hw")] = function() {
                                    e[d("5a6", "jQ0X")](e["lkeyh"], d("5a7", "AI)w")) ? (g[d("1e2", "0tes")] = t, h(g)) : (window[d("5a3", ")7lZ")][t] = w, e[d("5a8", "lTsN")](n, !0))
                                },
                                w[d("5a9", "5knQ")] = t
                            }))
                        }
                        for (var r = 0; n[d("5aa", "xJ1F")](r, w["length"]); r++) {
                            var c = w[r];
                            c["enumerable"] = c[d("5ab", "P%4l")] || !1,
                            c[d("5ac", "9#sL")] = !0,
                            n[d("5ad", "30HP")](n["lHcDV"], c) && (c["writable"] = !0),
                            Object[d("5ae", "4zBg")](t, c["key"], c)
                        }
                    }
                },
                {
                    key: d("5af", "bPML"),
                    value: (e = n["alKJK"](P, z[d("5b0", "B20D")]((function t() {
                        var e, w, c, i, s, o, a;
                        if (!n[d("5b1", "4zBg")](d("5b2", "%LFB"), d("5b3", "@]mt"))) return z[d("5b9", "7n#g")]((function(t) {
                            for (;;) switch (t[d("5ba", "30HP")] = t[d("5bb", "0tes")]) {
                            case 0:
                                e = this["game"][d("5bc", "%LFB")]["baseUrl"],
                                w = Object[d("5bd", "0%7z")](_)[d("5be", "0%7z")],
                                c = this[d("5bf", "S(PA")][d("5c0", "0%7z")],
                                i = 0,
                                t["t0"] = z[d("5c1", "4zBg")](_);
                            case 5:
                                if ((t["t1"] = t["t0"]())["done"]) {
                                    if (n[d("5c2", "7n#g")](n[d("5c3", "lTsN")], n[d("5c4", "nedJ")])) return this[d("5c5", "7n#g")](t, this["game"][d("5c6", "0tes")]["height"], this[d("5c7", "lTsN")]);
                                    t[d("5c8", "^AE%")] = 17;
                                    break
                                }
                                if (s = t["t1"][d("5c9", "AI)w")], !Object[d("5ca", "#cwz")][d("5cb", "(@(7")][d("5cc", "U4xf")](_, s)) {
                                    t["next"] = 15;
                                    break
                                }
                                return o = "" ["concat"](_[s], n[d("5cd", "jQ0X")])[d("5ce", "xJ1F")](c),
                                a = "" ["concat"](e, d("5cf", "m$jW"))[d("57a", "Jgtc")](o),
                                t[d("235", "7n#g")] = 12,
                                this[d("5d0", "o51H")](a);
                            case 12:
                                _[s] = o,
                                i++,
                                this[d("5d1", "*A)#")][d("5d2", "*A)#")][d("59a", "*gk(")](wt, {
                                    process: i / w,
                                    status: "loadingImage"
                                });
                            case 15:
                                t["next"] = 5;
                                break;
                            case 17:
                                this["domSourceLoadOk"] = !0,
                                this[d("5d3", "30HP")]();
                            case 19:
                            case d("5d4", "(@(7") : return t[d("5d5", "AI)w")]()
                            }
                        }), t, this);
                        if (n[d("5b4", "U4xf")](n["phaBV"], "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("4a8", "e%cj")]) return ! 1;
                        if (Reflect[d("5b5", "xJ1F")]["sham"]) return ! 1;
                        if (n["HfkHS"](n[d("5b6", "x$Zb")], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                        try {
                            return Boolean[d("5b7", "5knQ")]["valueOf"][d("5b8", "AI)w")](Reflect[d("4a0", "bPML")](Boolean, [], (function() {}))),
                            !0
                        } catch(u) {
                            return ! 1
                        }
                    }))),
                    function() {
                        return n[d("5d6", "lTsN")] !== n[d("5d7", "#cwz")] ? e["apply"](this, arguments) : this["scene"]["game"][d("5d8", "P%4l")]["height"]
                    })
                },
                {
                    key: n["hWilG"],
                    value: function() {
                        this[d("5d9", "U4xf")]["create"]({
                            key: ct[d("5da", "4zBg")],
                            frames: this["anims"]["generateFrameNames"](Z[d("5db", "5dtt")]),
                            repeat: -1,
                            duration: 245
                        }),
                        this["anims"][d("1c7", "*gk(")]({
                            key: ct["MM_DJ_SWIM"],
                            frames: this[d("5dc", "xuC*")][d("5dd", "ZDnO")](Z[d("5de", "hVad")]),
                            repeat: -1,
                            duration: 245
                        }),
                        this[d("5df", "qfqE")]["create"]({
                            key: ct[d("5e0", "%LFB")],
                            frames: this[d("5e1", "PQB4")]["generateFrameNames"](Z[d("5e2", "^AE%")]),
                            repeat: -1,
                            duration: 333
                        }),
                        this["anims"]["create"]({
                            key: ct[d("5e3", "xJ1F")],
                            frames: this[d("5e4", "P%4l")]["generateFrameNames"](Z[d("3e0", "%LFB")]),
                            repeat: -1,
                            duration: 333
                        }),
                        this[d("5e5", "2^0s")]["create"]({
                            key: ct["MM_SKI_DP"],
                            frames: this[d("5e6", "hVad")][d("5e7", "qgiy")](Z[d("5e8", "e%cj")]),
                            repeat: -1,
                            duration: 333
                        }),
                        this[d("5e9", "9#sL")][d("5ea", "lTsN")]({
                            key: ct["FALL_MM"],
                            frames: this[d("5eb", "*gk(")]["generateFrameNames"](Z[d("5ec", "(@(7")]),
                            duration: 350
                        }),
                        this[d("5ed", "@]mt")][d("5ee", "5dtt")]({
                            key: ct["QQ_SWIM"],
                            frames: this[d("5ef", "(@(7")]["generateFrameNames"](Z[d("5f0", "o51H")]),
                            repeat: -1,
                            duration: 245
                        }),
                        this[d("5f1", "lTsN")][d("5f2", "7n#g")]({
                            key: ct["QQ_DJ_SWIM"],
                            frames: this[d("5f3", "7n#g")][d("5f4", "*gk(")](Z["ROLE_QQ_QIN_DJ"]),
                            repeat: -1,
                            duration: 245
                        }),
                        this[d("5f5", "Jgtc")][d("5f6", "d$Th")]({
                            key: ct["QQ_KICK"],
                            frames: this[d("5f7", "(pLq")][d("5f8", "&98m")](Z[d("5f9", "#cwz")]),
                            repeat: -1,
                            duration: 333
                        }),
                        this[d("5fa", "4zBg")][d("5fb", "U4xf")]({
                            key: ct[d("5fc", "%LFB")],
                            frames: this["anims"][d("5fd", "4zBg")](Z[d("5fe", "@]mt")]),
                            repeat: -1,
                            duration: 333
                        }),
                        this["anims"][d("1c7", "*gk(")]({
                            key: ct["QQ_SKI_DP"],
                            frames: this[d("5ef", "(@(7")][d("5ff", "*A)#")](Z["ROLE_QQ_TANG_DP"]),
                            repeat: -1,
                            duration: 333
                        }),
                        this[d("600", "S(PA")]["create"]({
                            key: ct[d("601", "o#Hw")],
                            frames: this[d("602", "x$Zb")]["generateFrameNames"](Z[d("603", "S(PA")]),
                            duration: 350
                        }),
                        this[d("5f1", "lTsN")][d("604", "7WQB")]({
                            key: ct["TS_SWIM"],
                            frames: this[d("600", "S(PA")][d("605", ")7lZ")](Z[d("606", "U4xf")]),
                            repeat: -1,
                            duration: 245
                        }),
                        this[d("607", "#cwz")]["create"]({
                            key: ct[d("608", "xuC*")],
                            frames: this[d("609", "bPML")][d("60a", "lTsN")](Z[d("60b", "S(PA")]),
                            repeat: -1,
                            duration: 245
                        }),
                        this[d("5ed", "@]mt")]["create"]({
                            key: ct[d("60c", "o#Hw")],
                            frames: this[d("5f3", "7n#g")][d("5dd", "ZDnO")](Z["ROLE_TS_HAN"]),
                            repeat: -1,
                            duration: 333
                        }),
                        this["anims"][d("60d", "9#sL")]({
                            key: ct["TS_SKI"],
                            frames: this[d("5dc", "xuC*")][d("60e", "30HP")](Z["ROLE_TS_TANG"]),
                            repeat: -1,
                            duration: 333
                        }),
                        this[d("5f7", "(pLq")]["create"]({
                            key: ct[d("60f", "d$Th")],
                            frames: this["anims"]["generateFrameNames"](Z[d("610", "U4xf")]),
                            repeat: -1,
                            duration: 333
                        }),
                        this["anims"][d("55c", "PQB4")]({
                            key: ct[d("611", "AI)w")],
                            frames: this[d("5e4", "P%4l")]["generateFrameNames"](Z[d("547", "4zBg")]),
                            duration: 350
                        }),
                        this["anims"]["create"]({
                            key: ct["GOLDEN"],
                            frames: this["anims"]["generateFrameNames"](Z["GOLDEN"]),
                            repeat: 0,
                            duration: 625
                        }),
                        this["anims"][d("612", "e%cj")]({
                            key: ct[d("613", "(@(7")],
                            frames: this[d("5f5", "Jgtc")]["generateFrameNames"](Z[d("614", "2^0s")]),
                            repeat: -1,
                            duration: 350
                        }),
                        this[d("615", "ZDnO")][d("616", "^AE%")]({
                            key: ct[d("617", "*A)#")],
                            frames: this["anims"][d("618", "(@(7")](Z[d("619", "PQB4")]),
                            repeat: 0,
                            duration: 500,
                            delay: 250
                        }),
                        this[d("5e9", "9#sL")]["create"]({
                            key: ct[d("61a", "&98m")],
                            frames: this[d("5ed", "@]mt")][d("61b", "B20D")](Z["GHOST"]),
                            duration: 350,
                            repeat: -1
                        })
                    }
                }]),
                c
            } (),
            ut = function() {
                var t = {
                    WdahS: "(top|bottom|Top|Bottom)",
                    JHGDT: d("61c", "0%7z"),
                    DrwHz: function(t, n) {
                        return t === n
                    },
                    QZFQb: d("61d", "o51H"),
                    PuvwI: function(t, n) {
                        return t / n
                    },
                    XrrBE: d("61e", "PQB4"),
                    wnVnf: function(t, n) {
                        return t * n
                    },
                    iiUrd: d("61f", "jQ0X"),
                    SDTiG: function(t, n) {
                        return t(n)
                    },
                    cGEbw: function(t, n) {
                        return t * n
                    },
                    boDOl: "zAhgs",
                    uUzLj: function(t, n) {
                        return t == n
                    },
                    REaSg: d("620", "PQB4"),
                    QnzGG: "function",
                    wzQvk: function(t, n) {
                        return t > n
                    },
                    suCpw: function(t, n) {
                        return t < n
                    },
                    wAkdY: function(t, n) {
                        return t === n
                    },
                    WTByM: d("621", "tDVN"),
                    GMPDA: function(t, n) {
                        return t === n
                    },
                    pgWpl: d("622", ")7lZ"),
                    ogpey: d("623", "(@(7"),
                    pGrbC: d("624", "&98m"),
                    MzMEf: function(t, n, e) {
                        return t(n, e)
                    },
                    HVtFN: "scaling",
                    SofBM: "renderStyles",
                    boZnj: "add",
                    omDjr: d("625", "0%7z")
                };
                function n(e, w, r, c, i) {
                    D(this, n),
                    this[d("626", "7WQB")] = new RegExp(d("627", "7WQB")),
                    this[d("628", "5dtt")] = new RegExp(t[d("629", "x$Zb")]),
                    this[d("62a", "d$Th")] = e;
                    var s = document[d("62b", "o51H")](w);
                    this[d("62c", "#cwz")] = r,
                    this[d("62d", "5knQ")] = i,
                    this[d("62e", "S(PA")] = s,
                    this["dom"][d("62f", "tDVN")]["boxSizing"] = t[d("630", "7n#g")],
                    this["addAttrs"](),
                    this["renderStyles"](),
                    c && this[d("631", "5dtt")]["game"][d("632", "m$jW")][d("29d", "y)Vp")][d("633", "hVad")](s)
                }
                return t[d("634", "Yr1b")](h, n, [{
                    key: t[d("635", "hVad")],
                    value: function(n, e) {
                        var w, r = {
                            RNpCd: function(t, n) {
                                return t + n
                            }
                        };
                        if (t["DrwHz"](d("636", "y)Vp"), t[d("637", "PQB4")])) {
                            var c = this["scene"][d("638", "qgiy")]["$content"];
                            if ("w" === e) {
                                var i = t[d("639", "0tes")](c[c["isLandscape"] ? "width": t[d("63a", "7WQB")]], this["scene"]["designWidth"]);
                                return parseInt("" [d("57e", "0%7z")](t["wnVnf"](n, i)))
                            }
                            var s = c[c["isLandscape"] ? t[d("63b", "x$Zb")] : t[d("63c", "m$jW")]] / this[d("63d", "(@(7")][d("63e", "P%4l")];
                            return t[d("63f", "@]mt")](parseInt, "" ["concat"](t[d("640", "tDVN")](n, s)))
                        }
                        s(this, c),
                        (w = e["call"](this, n, L[d("641", "Yr1b")], L["STONE"], i, O))[d("642", "B20D")](0, 1),
                        w[d("643", "2^0s")]["width"] = 96,
                        w[d("644", "#cwz")][d("645", "0%7z")] = 126,
                        w[d("646", "9#sL")][d("647", "o#Hw")](70, 118),
                        w[d("648", "qgiy")][d("649", "jQ0X")](10, 8);
                        var o = r[d("64a", "&98m")](w[d("64b", "5dtt")]["x"], w[d("314", "lTsN")]["roleWidth"]),
                        a = w[d("64c", "#cwz")][d("64d", "AI)w")] + w[d("64e", "bPML")]["roleHeight"],
                        u = w[d("64f", "2^0s")](o, a),
                        f = u["x"],
                        D = u["y"];
                        return w["x"] = f,
                        w["y"] = D,
                        w
                    }
                },
                {
                    key: t[d("650", "^Eu9")],
                    value: function() {
                        var n = this["styles"];
                        for (var e in n) if (Object[d("577", "9#sL")][d("651", "*gk(")]["call"](n, e)) {
                            if (t["DrwHz"](t[d("652", "5dtt")], d("653", "AI)w"))) return a["a"][d("654", "PQB4")](n);
                            var w = n[e];
                            this[d("655", "bPML")][d("656", "P%4l")](e) && t[d("657", "^Eu9")](t[d("658", "xJ1F")], Object(r["a"])(w)) && (w = "" ["concat"](this[d("659", "qgiy")](w, "w"), "px")),
                            this[d("65a", "d$Th")][d("65b", "0%7z")](e) && t["uUzLj"](d("65c", "qgiy"), Object(r["a"])(w)) && (w = "" ["concat"](this["scaling"](w, "h"), "px")),
                            this[d("65d", "30HP")][d("65e", "nedJ")][e] = w
                        }
                    }
                },
                {
                    key: d("65f", "*A)#"),
                    value: function() {
                        if (t["wAkdY"](t[d("660", "lTsN")], t["WTByM"])) {
                            if (this[d("661", "&98m")]) {
                                if (t["GMPDA"](t[d("662", "m$jW")], t[d("663", "0tes")])) {
                                    var n = t["uUzLj"](t["QnzGG"], Object(r["a"])(e)) && e[d("664", "qfqE")];
                                    return !! n && (t["DrwHz"](n, j) || "GeneratorFunction" === (n[d("665", "30HP")] || n[d("666", "@]mt")]))
                                }
                                var e = this[d("667", "*A)#")];
                                for (var w in e) Object[d("16", "hVad")][d("668", "jQ0X")][d("669", "m$jW")](e, w) && this["dom"][d("66a", "ZDnO")](w, e[w])
                            }
                        } else {
                            var c = o["a"][d("66b", "jum&")] - D[d("66c", "7n#g")];
                            t[d("66d", "PQB4")](c, e[d("66e", "2^0s")]) ? (D["body"]["setVelocityY"](D["obstacle"]["speedY"]), a["a"]++) : t["suCpw"](c, -e["gap"]) ? (D["body"]["setVelocityY"]( - D[d("66f", "hVad")][d("670", "30HP")]), a["a"]++) : D["body"]["setVelocityY"](0)
                        }
                    }
                },
                {
                    key: t[d("671", "S(PA")],
                    value: function(t) {
                        this[d("672", "*A)#")]["appendChild"](t[d("673", "7WQB")])
                    }
                },
                {
                    key: t[d("674", "&98m")],
                    value: function(n) {
                        "McLjp" !== t["pGrbC"] ? this[d("675", "0tes")] = n: this[d("676", "2^0s")][d("677", "PQB4")] = n
                    }
                },
                {
                    key: d("678", "U4xf"),
                    value: function() {
                        this[d("679", "y)Vp")]["remove"]()
                    }
                }]),
                n
            } (),
            ft = function() {
                var t = {
                    WzOlq: function(t, n) {
                        return t !== n
                    },
                    VNLBf: "rIOYM",
                    vfnCF: function(t, n, e) {
                        return t(n, e)
                    },
                    BWDcB: d("67a", "jQ0X"),
                    sLPjs: "100%",
                    ZMcGn: d("67b", "x$Zb"),
                    oysyA: d("67c", "Jgtc"),
                    WjGne: "rgba(0, 0, 0, .8)",
                    ZNuxE: d("67d", "0%7z"),
                    Ygrls: d("67e", "d$Th"),
                    nEnvJ: "iGezx",
                    zizwb: d("67f", "^AE%"),
                    yVbrn: d("680", "jQ0X"),
                    HHvKX: "0|7|4|3|1|2|5|6",
                    WOJcf: function(t, n) {
                        return t === n
                    },
                    dmqgS: d("681", "xuC*"),
                    GjrUZ: d("682", "U4xf"),
                    qzIgf: d("683", "qfqE"),
                    oAuxk: d("684", "y)Vp"),
                    clbwv: d("685", "xJ1F"),
                    zDKoN: d("686", "&98m"),
                    jcBla: function(t, n) {
                        return t < n
                    },
                    jnMLD: function(t, n) {
                        return t === n
                    },
                    ybkpG: d("687", "Jgtc"),
                    EImem: "MengMeng",
                    DNUqn: d("688", "4zBg"),
                    THDzq: "click",
                    TRfMg: "img",
                    EQjig: function(t, n) {
                        return t < n
                    },
                    YNKLh: function(t, n) {
                        return t === n
                    },
                    drZwy: d("689", "^Eu9"),
                    LncAW: d("68a", "4zBg"),
                    pRUnX: d("68b", "qfqE"),
                    bxTod: d("68c", "bPML"),
                    jxCTK: d("68d", "&98m"),
                    FStog: d("28d", "2^0s"),
                    Fgsda: "onConfirm",
                    KjNbE: d("68e", "(@(7"),
                    xzgWt: d("68f", "#cwz"),
                    VsKxV: "createDesc"
                };
                function n(e) {
                    if (t[d("690", "lTsN")](d("691", "2^0s"), t[d("692", "jum&")])) this[d("693", "U4xf")]["update"](n, this["hiddenText"], this);
                    else {
                        t[d("694", "Yr1b")](D, this, n),
                        this[d("695", "e%cj")] = e;
                        var w = new ut(e, t[d("696", "2^0s")], {
                            width: t["sLPjs"],
                            height: t[d("697", "x$Zb")],
                            padding: 0,
                            margin: 0,
                            position: t[d("698", "m$jW")],
                            left: 0,
                            top: 0,
                            overflow: t[d("699", "o#Hw")],
                            zIndex: 20,
                            backgroundColor: t["WjGne"],
                            display: t[d("69a", "5dtt")],
                            flexDirection: d("69b", "bPML"),
                            alignItems: t["Ygrls"],
                            justifyContent: t["Ygrls"]
                        },
                        !0),
                        r = this[d("69c", "lTsN")](),
                        c = r[d("69d", "xuC*")],
                        i = r["rightDesc"],
                        s = this[d("69e", "0%7z")](),
                        o = this[d("69f", "S(PA")](),
                        a = this[d("6a0", "Z*#m")]();
                        w["add"](c),
                        w[d("6a1", "PQB4")](i),
                        w[d("2aa", "jum&")](s),
                        w[d("6a2", "U4xf")](o),
                        w[d("6a3", "0%7z")](a),
                        this[d("6a4", "jQ0X")] = o,
                        this["box"] = w
                    }
                }
                return h(n, [{
                    key: t[d("6a5", "jum&")],
                    get: function() {
                        return this[d("6a6", "0%7z")][d("6a7", "]DRy")][d("6a8", "y)Vp")][d("6a9", "m$jW")]
                    }
                },
                {
                    key: t[d("6aa", "y)Vp")],
                    value: function() {
                        d("6ab", "*gk(") === t["nEnvJ"] ? this[d("6ac", "*A)#")][d("6ad", "4zBg")](n) : (this[d("6ae", "m$jW")] && this["box"][d("6af", "qfqE")](), this["box"] = null)
                    }
                },
                {
                    key: t[d("6b0", "9#sL")],
                    value: function(t) {}
                },
                {
                    key: t["KjNbE"],
                    value: function() {
                        var n = "" [d("6b1", "30HP")](this[d("6b2", "Z*#m")], t[d("6b3", "7n#g")])["concat"](_[d("6b4", "5knQ")]);
                        return new ut(this["scene"], d("6b5", "7WQB"), {
                            width: 445,
                            height: 60,
                            display: t[d("6b6", "Jgtc")]
                        },
                        !1, {
                            src: n
                        })
                    }
                },
                {
                    key: d("6b7", "bPML"),
                    value: function() {
                        if ("syknd" === t[d("6b8", "S(PA")]) {
                            var n = this,
                            e = "" [d("6b9", "4zBg")](this[d("6ba", "o#Hw")], t[d("6bb", "Z*#m")])[d("6bc", "0tes")](_[d("6bd", "*gk(")]),
                            w = "" [d("6be", "&98m")](this[d("6bf", "4zBg")], t["zizwb"])[d("6c0", "Z*#m")](_[d("6c1", "U4xf")]),
                            r = "" [d("6c2", "B20D")](this[d("6c3", "%LFB")], t[d("6c4", "o51H")])[d("6c5", "2^0s")](_["role_mm"]),
                            c = "" ["concat"](this[d("6c6", "0tes")], t["zizwb"])[d("591", "^Eu9")](_["role_ts"]),
                            i = "" [d("d8", "*gk(")](this[d("6c7", "tDVN")], t[d("6c8", "B20D")])["concat"](_[d("6c9", "hVad")]),
                            s = new ut(this[d("6ca", "PQB4")], d("6cb", "x$Zb"), {
                                display: t[d("6cc", "@]mt")],
                                marginTop: 66
                            });
                            return [{
                                img: r,
                                text: "萌萌",
                                name: t["EImem"]
                            },
                            {
                                img: c,
                                text: t["DNUqn"],
                                name: "TangSheng"
                            },
                            {
                                img: i,
                                text: "奇奇",
                                name: d("6cd", "%LFB")
                            }][d("6ce", "B20D")]((function(r, c) {
                                var i = t[d("6cf", "Yr1b")][d("6d0", "*A)#")]("|"),
                                o = 0;
                                while (1) {
                                    switch (i[o++]) {
                                    case "0":
                                        var a = new ut(n[d("506", "#cwz")], t[d("6d1", "^AE%")], {
                                            display: "flex",
                                            alignItems: t[d("6d2", "qgiy")],
                                            justifyContent: t["Ygrls"],
                                            flexDirection: "column",
                                            marginRight: 60
                                        });
                                        continue;
                                    case "1":
                                        var u = new ut(n[d("6ca", "PQB4")], d("6d3", "bPML"), {
                                            width: 160,
                                            pointerEvents: d("6d4", "xuC*")
                                        },
                                        !1, {
                                            src: r[d("6d5", "(@(7")]
                                        });
                                        continue;
                                    case "2":
                                        f[d("6d6", "#cwz")](u);
                                        continue;
                                    case "3":
                                        t[d("6d7", "^Eu9")](2, c) && (a["dom"]["style"][d("6d8", "Z*#m")] = ""),
                                        1 === c ? (a[d("6d9", "xuC*")]["dataset"]["active"] = t[d("6da", "#cwz")], f["dom"][d("6db", "0%7z")][d("6dc", "bPML")] = t[d("6dd", "B20D")][d("6de", "5knQ")](e, ")")) : a["dom"][d("6df", "lTsN")][d("6e0", "jQ0X")] = t[d("6e1", "jQ0X")];
                                        continue;
                                    case "4":
                                        var f = new ut(n[d("6e2", "@]mt")], t[d("6d1", "^AE%")], {
                                            width: 270,
                                            height: 270,
                                            backgroundImage: t[d("6e3", "U4xf")]["concat"](w, ")"),
                                            backgroundSize: t["oAuxk"],
                                            display: d("6e4", "ZDnO"),
                                            alignItems: t[d("6e5", "jQ0X")],
                                            justifyContent: t[d("6e6", "^Eu9")],
                                            pointerEvents: t[d("6e7", "0tes")]
                                        },
                                        !1, {});
                                        continue;
                                    case "5":
                                        var D = new ut(n[d("6e8", "x$Zb")], "p", {
                                            color: t[d("6e9", "m$jW")],
                                            margin: 0,
                                            padding: 0,
                                            fontSize: 38,
                                            marginTop: 18,
                                            pointerEvents: t[d("6ea", "#cwz")]
                                        });
                                        continue;
                                    case "6":
                                        D[d("6eb", "m$jW")](r[d("6ec", "x$Zb")]),
                                        a["add"](f),
                                        a[d("6ed", "9#sL")](D),
                                        s[d("6ee", "0tes")](a);
                                        continue;
                                    case "7":
                                        a[d("6ef", "4zBg")]["dataset"][d("6f0", "7n#g")] = r[d("6f1", "xJ1F")];
                                        continue
                                    }
                                    break
                                }
                            })),
                            s["dom"]["addEventListener"](t[d("6f2", "%LFB")], (function(n) {
                                if (t[d("6f3", "bPML")](n[d("6f4", "qgiy")], s[d("6f5", "]DRy")])) for (var r = s["dom"][d("6f6", "e%cj")], c = 0; t[d("6f7", "@]mt")](c, r["length"]); c++) {
                                    var i = r[c],
                                    o = i["children"][0];
                                    t["jnMLD"](i, n[d("6f8", ")7lZ")]) ? (i["dataset"][d("6e0", "jQ0X")] = t["dmqgS"], o["style"][d("6f9", "ZDnO")] = t["GjrUZ"]["concat"](e, ")")) : (i[d("6fa", "e%cj")]["active"] = t[d("6fb", "ZDnO")], o[d("6fc", "jum&")][d("6fd", "0%7z")] = t[d("6fe", "hVad")]["concat"](w, ")"))
                                }
                            })),
                            s
                        }
                        console[d("6ff", "qfqE")](d("700", "x$Zb"))
                    }
                },
                {
                    key: t[d("701", "@]mt")],
                    value: function() {
                        var n = {
                            ILsVl: t["zizwb"],
                            jvfom: t["TRfMg"],
                            ervAi: t[d("702", "#cwz")],
                            xJylQ: function(n, e) {
                                return t[d("703", "&98m")](n, e)
                            },
                            IaTzu: function(n, e) {
                                return t[d("704", "7WQB")](n, e)
                            },
                            dundL: t[d("705", "]DRy")]
                        };
                        if (t[d("706", "(pLq")](d("707", "hVad"), t["drZwy"])) {
                            var e = this[d("708", "bPML")][0],
                            w = "" [d("709", "U4xf")](this["baseUrl"], n[d("70a", "qfqE")])[d("70b", "o#Hw")](e);
                            return new ut(this[d("70c", "o51H")], n[d("70d", "nedJ")], {
                                width: n["ervAi"]
                            },
                            !1, {
                                src: w
                            })
                        }
                        var r = this,
                        c = "" ["concat"](this[d("70e", "(pLq")], t[d("70f", "bPML")])[d("6be", "&98m")](_[d("710", "PQB4")]),
                        i = new ut(this[d("506", "#cwz")], t[d("711", "xJ1F")], {
                            width: 450,
                            height: 88,
                            display: t["yVbrn"],
                            marginTop: 42
                        },
                        !1, {
                            src: c
                        });
                        return i[d("672", "*A)#")]["addEventListener"]("click", (function() {
                            for (var t = r["roleBox"][d("712", "&98m")][d("713", "5dtt")], e = d("714", "^AE%"), w = 0; n["xJylQ"](w, t[d("715", "*A)#")]); w++) {
                                var c = t[w];
                                n[d("716", "9#sL")](n["dundL"], c["dataset"][d("717", "e%cj")]) || (e = c[d("718", "2^0s")][d("719", "]DRy")])
                            }
                            return r[d("71a", "30HP")](),
                            r["onConfirm"](e)
                        }), {
                            once: !0
                        }),
                        i
                    }
                },
                {
                    key: t[d("71b", "(pLq")],
                    value: function() {
                        var n = {
                            wkQwv: t[d("71c", "m$jW")]
                        };
                        if (!t[d("71d", "*A)#")](t[d("71e", "7WQB")], "DEtpr")) {
                            var e = "" ["concat"](this["baseUrl"], t["zizwb"])[d("722", "lTsN")](_[d("723", "y)Vp")]);
                            return {
                                leftDesc: new ut(this["scene"], t[d("724", "0%7z")], {
                                    width: 404,
                                    height: 194,
                                    display: t[d("6b6", "Jgtc")],
                                    position: t[d("725", "qfqE")],
                                    left: 0,
                                    bottom: 0
                                },
                                !1, {
                                    src: e
                                }),
                                rightDesc: new ut(this["scene"], t["TRfMg"], {
                                    width: 404,
                                    height: 194,
                                    display: "block",
                                    position: t[d("725", "qfqE")],
                                    right: 0,
                                    bottom: 0,
                                    transform: t["bxTod"]
                                },
                                !1, {
                                    src: e
                                })
                            }
                        }
                        var w = e[d("71f", "hVad")] || {};
                        w["type"] = n[d("720", "(@(7")],
                        delete w["arg"],
                        e[d("721", "U4xf")] = w
                    }
                }]),
                n
            } (),
            dt = function() {
                var t = {
                    MEWnN: function(t, n, e) {
                        return t(n, e)
                    },
                    uUbKB: "100%",
                    SuZGr: d("726", "S(PA"),
                    ZAkLe: "center",
                    JdSpC: d("727", "m$jW"),
                    cBMiy: "DzcUf",
                    HpKGI: function(t, n) {
                        return t === n
                    },
                    DlrSY: d("728", "7WQB"),
                    oMeVD: "/imgs/dom/",
                    HBQwE: d("6c7", "tDVN"),
                    EgfoZ: d("729", "PQB4"),
                    iawUn: d("72a", "@]mt")
                };
                function n(e, w) {
                    t[d("72b", "@]mt")](D, this, n),
                    this[d("72c", "^Eu9")] = e;
                    var r = new ut(e, "div", {
                        width: d("72d", "^AE%"),
                        height: t[d("72e", "PQB4")],
                        padding: 0,
                        margin: 0,
                        position: t[d("72f", "5knQ")],
                        left: 0,
                        top: 0,
                        overflow: d("730", "P%4l"),
                        zIndex: 20,
                        backgroundColor: d("731", "o#Hw"),
                        display: d("732", "PQB4"),
                        alignItems: d("733", "tDVN"),
                        justifyContent: t["ZAkLe"]
                    },
                    !0),
                    c = this["createGuideImg"](w),
                    i = this[d("734", "AI)w")]();
                    r[d("735", "7n#g")](c),
                    r["add"](i),
                    this["box"] = r,
                    this["confirm"] = i
                }
                return t[d("736", "qfqE")](h, n, [{
                    key: t[d("737", "x$Zb")],
                    get: function() {
                        return this["scene"][d("738", "lTsN")][d("739", "7WQB")]["baseUrl"]
                    }
                },
                {
                    key: d("73a", "jum&"),
                    value: function() {
                        t[d("73b", "*gk(")] === t[d("73c", "tDVN")] ? (this["box"] && this[d("73d", "qfqE")][d("1bd", "5knQ")](), this[d("73e", "30HP")] = null) : (t["MEWnN"](X, t[d("73f", "9#sL")], n), this[d("740", "P%4l")][d("741", "S(PA")] = new gn(this, n, this[d("4ba", "7WQB")][d("742", "%LFB")]), this[d("55", "^AE%")][d("743", "Z*#m")] = new Ut, this[d("4c6", "5dtt")][d("744", "d$Th")] = new Jt(1e3, !0), this[d("317", "ZDnO")][d("745", "^AE%")] = new An(this, this["dmger"]["hillside"], this[d("746", "]DRy")][d("747", "o51H")]), this[d("748", "xJ1F")] = this[d("a9", "lTsN")]["hillside"][d("749", "bPML")], this["initInterval"] = this[d("aa", "(pLq")][d("74a", "P%4l")]["interval"], this[d("74b", "xJ1F")][d("74c", "4zBg")]())
                    }
                },
                {
                    key: t[d("74d", "0tes")],
                    value: function() {
                        var t = this;
                        return new Promise((function(n) {
                            t["confirm"][d("74e", "PQB4")][d("74f", "@]mt")](d("750", "y)Vp"), (function() {
                                t[d("751", "x$Zb")](),
                                n(!0)
                            }), {
                                once: !0
                            })
                        }))
                    }
                },
                {
                    key: t[d("752", "o51H")],
                    value: function(n) {
                        var e = t[d("753", ")7lZ")](t[d("754", "o51H")], n) ? _["guide_qin"] : _["guide_han"],
                        w = "" ["concat"](this[d("755", "5knQ")], t[d("756", "qfqE")])["concat"](e);
                        return new ut(this["scene"], d("757", "qfqE"), {
                            width: t["uUbKB"]
                        },
                        !1, {
                            src: w
                        })
                    }
                },
                {
                    key: "createConfirm",
                    value: function() {
                        var n = "" [d("6c5", "2^0s")](this[d("758", "lTsN")], t[d("759", "m$jW")])[d("75a", "#cwz")](_[d("75b", "tDVN")]);
                        return new ut(this[d("199", "m$jW")], d("75c", "hVad"), {
                            width: 318,
                            height: 90,
                            position: t[d("75d", "bPML")],
                            right: 70,
                            bottom: 60
                        },
                        !1, {
                            src: n
                        })
                    }
                }]),
                n
            } (),
            Dt = function() {
                var t = {
                    WZcRY: function(t, n, e) {
                        return t(n, e)
                    },
                    HTRKi: d("75e", "(pLq"),
                    WavDZ: d("75f", "U4xf"),
                    Szbob: d("67b", "x$Zb"),
                    XPxlI: d("685", "xJ1F"),
                    YtxzJ: d("760", "nedJ"),
                    oDbhC: d("761", "ZDnO"),
                    juLLc: function(t, n) {
                        return t !== n
                    },
                    ZQihq: d("762", "5dtt"),
                    XbZsC: d("763", "7n#g"),
                    ycoaQ: d("764", "U4xf"),
                    UmauY: d("765", "AI)w"),
                    VMajA: d("766", "]DRy"),
                    LPpmJ: "center",
                    iZPZZ: d("767", "4zBg"),
                    Tpuez: d("768", "%LFB"),
                    wCIFw: d("769", "5knQ"),
                    MYzdp: function(t, n) {
                        return t === n
                    },
                    loDIg: d("76a", "xuC*"),
                    oEKjf: d("76b", "Yr1b"),
                    wliJk: "kyIBN",
                    TvFhX: d("76c", "xuC*"),
                    rcaqW: "累计成绩: ",
                    BPqdj: d("76d", "ZDnO"),
                    VHxbA: d("76e", "30HP"),
                    mpEsz: d("76f", "bPML"),
                    uQyur: d("770", "9#sL"),
                    UWGUt: d("771", "@]mt"),
                    HenEa: "#fff",
                    CkFWN: "潜水罩x",
                    GFavG: d("772", "%LFB"),
                    MyhUK: d("773", "2^0s"),
                    FdWRc: "MrjYW",
                    cWWcp: d("774", "30HP"),
                    EUtHX: d("775", "d$Th"),
                    OHOHu: d("71a", "30HP"),
                    VECux: "updateBest",
                    HFOOV: d("776", "*A)#"),
                    OgNzE: d("777", "30HP"),
                    JUtJp: d("778", "jum&"),
                    rLoSs: "usePropAni",
                    QEKzQ: d("779", "(@(7")
                };
                function n(e) {
                    if (d("77a", "Z*#m") === d("77b", "xuC*")) {
                        t[d("77c", "4zBg")](D, this, n),
                        this["scene"] = e;
                        var w = new ut(e, t[d("77d", "%LFB")], {
                            width: "100%",
                            height: d("77e", "S(PA"),
                            display: t[d("77f", "P%4l")],
                            padding: 0,
                            margin: 0,
                            position: t[d("780", "PQB4")],
                            left: 0,
                            top: 0,
                            overflow: "hidden",
                            pointerEvents: t[d("781", "jum&")],
                            zIndex: 10
                        },
                        !0),
                        r = this[d("782", "PQB4")](),
                        c = this["createProp"]();
                        w[d("783", "5knQ")](r),
                        w[d("21a", "xJ1F")](c),
                        this[d("784", "PQB4")] = w
                    } else r[d("785", "o#Hw")][d("786", "30HP")] || r[d("787", "0tes")]["play"](Y[d("788", "#cwz")])
                }
                return h(n, [{
                    key: t[d("789", "o51H")],
                    get: function() {
                        var e = {
                            xInzh: "div",
                            JfqlT: t["YtxzJ"],
                            bgdvB: t["WavDZ"],
                            cFmjR: t[d("78a", "S(PA")],
                            fqRAO: t[d("78b", "0%7z")]
                        };
                        if (!t[d("78c", "&98m")](t["ZQihq"], d("78d", "0tes"))) return this["scene"][d("79b", "(pLq")][d("79c", "bPML")][d("79d", "xJ1F")];
                        D(this, n),
                        this[d("78e", "o#Hw")] = 100,
                        this["scene"] = s["a"];
                        var w = new ut(s["a"], e[d("78f", "^AE%")], {
                            width: d("790", ")7lZ"),
                            height: e[d("791", "0%7z")],
                            display: e["bgdvB"],
                            padding: 0,
                            margin: 0,
                            position: e[d("792", "9#sL")],
                            left: 0,
                            top: 0,
                            overflow: e[d("793", "30HP")],
                            pointerEvents: d("794", "AI)w"),
                            zIndex: 10
                        },
                        !0),
                        r = this[d("795", "y)Vp")](),
                        c = this["createProp"](),
                        i = this["createHealthPoint"](),
                        o = this[d("796", "@]mt")](),
                        a = this[d("797", "jQ0X")]();
                        w[d("798", "xuC*")](r),
                        w[d("799", "y)Vp")](c),
                        w[d("799", "y)Vp")](i),
                        w[d("79a", "ZDnO")](o),
                        w[d("6ed", "9#sL")](a),
                        this[d("784", "PQB4")] = w
                    }
                },
                {
                    key: "createScoreBlock",
                    value: function() {
                        if (t["XbZsC"] !== d("79e", "Z*#m")) {
                            var n = "" ["concat"](this[d("79f", "]DRy")], t[d("7a0", "^AE%")])[d("d8", "*gk(")](_["score_bg"]),
                            e = this[d("70c", "o51H")],
                            w = new ut(e, t[d("7a1", "d$Th")], {
                                width: 657,
                                height: 75,
                                backgroundImage: "url(" [d("6be", "&98m")](n, ")"),
                                backgroundSize: t["UmauY"],
                                position: t["Szbob"],
                                left: 0,
                                top: 0,
                                display: t["VMajA"],
                                alignItems: t["LPpmJ"],
                                paddingLeft: 46
                            }),
                            r = new ut(e, "p", {
                                padding: 0,
                                margin: 0,
                                fontSize: 26,
                                color: t[d("7a2", "(@(7")],
                                marginTop: -2
                            });
                            r[d("7a3", "jum&")](d("7a4", "#cwz"));
                            var c = new ut(e, "p", {
                                padding: 0,
                                margin: 0,
                                fontSize: 26,
                                color: t[d("7a5", ")7lZ")],
                                marginTop: -2,
                                marginLeft: 120
                            });
                            return c[d("7a6", "0tes")]("当前成绩: 0"),
                            this[d("7a7", "(pLq")] = r,
                            this[d("7a8", "qgiy")] = c,
                            w[d("7a9", "Z*#m")](r),
                            w["add"](c),
                            w
                        }
                        t["WZcRY"](c, this, n),
                        this["_game"] = new Rn(e)
                    }
                },
                {
                    key: t[d("7aa", "o51H")],
                    value: function() {
                        var n = {
                            dmLMw: function(t, n, e) {
                                return t(n, e)
                            },
                            vISuU: function(t, n) {
                                return t - n
                            },
                            qHggI: function(n, e) {
                                return t["MYzdp"](n, e)
                            }
                        };
                        if (t["MYzdp"](t[d("7ab", "d$Th")], t["oEKjf"])) {
                            function e() {
                                n["dmLMw"](D, this, e),
                                this[d("7ac", "&98m")] = 0,
                                this["lastTime"] = 0
                            }
                            return h(e, [{
                                key: t["Tpuez"],
                                get: function() {
                                    return Math["ceil"](n["vISuU"](this[d("7ad", "5knQ")], this[d("7ae", "9#sL")]))
                                }
                            },
                            {
                                key: t[d("7af", "P%4l")],
                                value: function(t) {
                                    n[d("7b0", "2^0s")](0, this["startTime"]) && (this[d("7b1", "^AE%")] = t),
                                    this[d("7b2", "5dtt")] = t
                                }
                            }]),
                            e
                        }
                        this["box"][d("73a", "jum&")]()
                    }
                },
                {
                    key: t[d("7b3", "2^0s")],
                    value: function(n) {
                        t[d("7b4", "y)Vp")] !== t[d("7b5", "xJ1F")] ? this[d("7b6", "qfqE")][d("7b7", "5knQ")](t["rcaqW"][d("a2", "7WQB")](n)) : n[d("7b8", "jQ0X")]()
                    }
                },
                {
                    key: t["HFOOV"],
                    value: function(t) {
                        this["curScore"]["innerText"]("当前成绩: " [d("6b1", "30HP")](t))
                    }
                },
                {
                    key: t["OgNzE"],
                    value: function() {
                        var n = {
                            lyomV: t[d("7b9", "y)Vp")],
                            AijdZ: d("7ba", "P%4l"),
                            HWXVw: t["VHxbA"]
                        },
                        e = this,
                        w = "" [d("7bb", "Yr1b")](this[d("7bc", "^Eu9")], t[d("7bd", "nedJ")])["concat"](_[d("7be", "0tes")]),
                        r = "" [d("75a", "#cwz")](this[d("7bf", "9#sL")], t[d("7c0", "*A)#")])[d("7c1", "x$Zb")](_[d("7c2", "2^0s")]),
                        c = this[d("7c3", "Yr1b")],
                        i = new ut(c, t["HTRKi"], {
                            width: 130,
                            height: 130,
                            backgroundImage: t["mpEsz"][d("4e8", "ZDnO")](w, ")"),
                            backgroundSize: "100% 100%",
                            position: t[d("7c4", "nedJ")],
                            right: 40,
                            top: 35,
                            display: d("7c5", "9#sL"),
                            justifyContent: t[d("7c6", "hVad")],
                            paddingTop: 30,
                            pointerEvents: t["uQyur"]
                        }),
                        s = new ut(c, t[d("7c7", "4zBg")], {
                            width: 67,
                            height: 41
                        },
                        !1, {
                            src: r
                        }),
                        o = new ut(c, "p", {
                            fontSize: 15,
                            color: t[d("7c8", "0tes")],
                            position: t[d("780", "PQB4")],
                            bottom: 9,
                            padding: 0,
                            margin: 0
                        });
                        return o[d("7c9", "^AE%")](t[d("7ca", "d$Th")][d("195", "o51H")](0)),
                        i[d("7cb", "4zBg")](s),
                        i["add"](o),
                        this[d("7cc", "2^0s")] = i,
                        this[d("7cd", "#cwz")] = o,
                        i[d("6d9", "xuC*")][d("7ce", "tDVN")](t["GFavG"], (function() {
                            return e[d("7cf", "7WQB")]()
                        })),
                        i[d("65d", "30HP")][d("7d0", "*gk(")](t["MyhUK"], (function() {
                            var t = {
                                FbtWv: n[d("7d1", "7WQB")],
                                pYisZ: function(t, n) {
                                    return t * n
                                },
                                WvMWC: function(t, n, e) {
                                    return t(n, e)
                                }
                            };
                            if (n[d("7d2", "7n#g")] !== n[d("7d3", "2^0s")]) {
                                var o = t[d("7d4", "*gk(")][d("7d5", "m$jW")]("|"),
                                a = 0;
                                while (1) {
                                    switch (o[a++]) {
                                    case "0":
                                        return h["design"][d("7d6", ")7lZ")] = 260,
                                        h["design"][d("7d7", "4zBg")] = 170,
                                        O[d("4d1", "o#Hw")](h),
                                        O[d("7d8", "o#Hw")] = h,
                                        O["createBubbleText"](D + t["pYisZ"](.85, f), -20),
                                        O[d("7d9", "*gk(")](),
                                        O["playAnims"](u["anims"]),
                                        O;
                                    case "1":
                                        var u = O["roleNames"][s],
                                        f = u["bodyW"],
                                        D = u[d("7da", "#cwz")];
                                        continue;
                                    case "2":
                                        var O;
                                        continue;
                                    case "3":
                                        var h = new Ft(e, u["textureKey"]);
                                        continue;
                                    case "4":
                                        t[d("7db", "d$Th")](i, this, r),
                                        (O = w["call"](this, e, c))[d("7dc", "%LFB")] = !1,
                                        O[d("7dd", "bPML")] = 15e3,
                                        O[d("7de", "*gk(")] = 0,
                                        O["roleNames"] = {
                                            MengMeng: {
                                                textureKey: Z["ROLE_MM_QIN"],
                                                anims: ct[d("7df", "lTsN")],
                                                animsProp: ct[d("7e0", "qgiy")],
                                                bodyW: 94,
                                                bodyH: 90,
                                                offsetX: 125,
                                                offsetY: 25
                                            },
                                            QiQi: {
                                                textureKey: Z[d("7e1", "Jgtc")],
                                                anims: ct["QQ_SWIM"],
                                                animsProp: ct[d("7e2", "o#Hw")],
                                                bodyW: 82,
                                                bodyH: 90,
                                                offsetX: 135,
                                                offsetY: 30
                                            },
                                            TangSheng: {
                                                textureKey: Z[d("7e3", "]DRy")],
                                                anims: ct[d("7e4", "9#sL")],
                                                animsProp: ct["TS_DJ_SWIM"],
                                                bodyW: 88,
                                                bodyH: 88,
                                                offsetX: 120,
                                                offsetY: 30
                                            }
                                        };
                                        continue;
                                    case "5":
                                        O[d("7e5", "m$jW")]["x"] = 392,
                                        O[d("7e6", "(@(7")]["y"] = 378,
                                        O["design"][d("7e7", "o51H")](f, u["bodyH"]),
                                        O["design"][d("7e8", "jum&")](D, u[d("7e9", "qgiy")]),
                                        O[d("7ea", "*gk(")](999),
                                        O["cur"] = s;
                                        continue
                                    }
                                    break
                                }
                            } else e[d("7eb", "4zBg")]["dom"]["setAttribute"](n[d("7ec", "7n#g")], "")
                        })),
                        i
                    }
                },
                {
                    key: t[d("7ed", "d$Th")],
                    value: function(n) {
                        if (t[d("7ee", "P%4l")] !== d("7ef", "]DRy")) return n[s["a"]] = o["a"];
                        this[d("7f0", "o#Hw")][d("7f1", "e%cj")](t[d("7f2", "(pLq")]["concat"](n))
                    }
                },
                {
                    key: d("7f3", "tDVN"),
                    value: function() {
                        this[d("7cc", "2^0s")][d("7f4", "(@(7")][d("7f5", "S(PA")]("class", t[d("7f6", "Jgtc")])
                    }
                },
                {
                    key: t[d("7f7", "7n#g")],
                    value: function() {
                        this[d("7f8", "7WQB")][d("7f9", "Yr1b")]["setAttribute"](d("7fa", "5dtt"), d("7fb", "*gk("))
                    }
                },
                {
                    key: t[d("7fc", "nedJ")],
                    value: function() {}
                }]),
                n
            } (),
            Ot = {
                MengMeng: {
                    hitLiYu: ["小鱼小鱼，我要吃你啦!", d("7fd", "jum&")],
                    hitHaiCao: [d("7fe", "xuC*"), "啊，你缠到我了"],
                    hitMuTou: ["AWSL!", d("7ff", "AI)w")],
                    useZhao: ["哇哦，被保护的感觉真好!", "不瞒你说，我还可以再游五千米"],
                    resume: [d("800", "#cwz"), d("801", "*gk(")],
                    hitCheMaYong: [d("802", "o51H"), "咦，我要飞起来啦!"],
                    hitBingYong: [d("803", "tDVN"), d("804", "jQ0X")],
                    useBDS: [d("805", "%LFB"), "看我大萌萌的天马流星冰冻扇!"],
                    useYSY: ["原来这就是传说中的躲猫猫啊~", "嘿嘿嘿，看不到我"],
                    hitJiuMei: [d("806", "qgiy"), "小姐姐，吸猫吗?"],
                    hitBun: ["真好7，有鱼肉馅的吗?", d("807", "0%7z")],
                    hitGhost: [d("808", "#cwz")],
                    useDP: [d("809", "ZDnO")]
                },
                TangSheng: {
                    hitLiYu: [d("80a", "d$Th"), d("80b", "bPML")],
                    hitHaiCao: [d("80c", "d$Th"), d("80d", "tDVN")],
                    hitMuTou: [d("80e", "%LFB"), d("80f", "Yr1b")],
                    useZhao: [d("810", "x$Zb"), d("811", "qgiy")],
                    resume: ["人生天地间，忽如远行客~", d("812", "(@(7")],
                    hitCheMaYong: [d("813", "^Eu9"), d("814", "d$Th")],
                    hitBingYong: [d("815", "0%7z"), d("816", "Yr1b")],
                    useBDS: ["这把千年帝都冰冻扇，甚好甚好!", d("817", "2^0s")],
                    useYSY: ["古来圣贤皆寂寞,惟有隐者留其名~", d("818", "jQ0X")],
                    hitJiuMei: [d("819", "xJ1F"), d("81a", "d$Th")],
                    hitBun: [d("81b", "y)Vp"), "日食肉夹馍三百个,不辞长作长安人"],
                    hitGhost: [d("81c", "5knQ")],
                    useDP: [d("81d", "xJ1F")]
                },
                QiQi: {
                    hitLiYu: [d("81e", "^AE%"), d("81f", "#cwz")],
                    hitHaiCao: [d("820", "y)Vp"), d("821", "S(PA")],
                    hitMuTou: [d("822", "Z*#m"), d("823", "30HP")],
                    useZhao: [d("824", "0tes"), "今夏新潮品，GET"],
                    resume: ["我奇汉三又回来了!", "想让我输，没门!"],
                    hitCheMaYong: [d("825", "B20D"), d("826", "d$Th")],
                    hitBingYong: [d("827", "@]mt"), d("828", "PQB4")],
                    useBDS: [d("829", "5knQ"), d("82a", "B20D")],
                    useYSY: ["人靠衣装，奇靠隐身衣!", d("82b", "(pLq")],
                    hitJiuMei: ["乐器不错，哪买的", d("82c", "&98m")],
                    hitBun: ["针不戳!", d("82d", "y)Vp")],
                    hitGhost: [d("82e", "xuC*")],
                    useDP: [d("82f", "jQ0X")]
                }
            },
            ht = function() {
                var t = {
                    jDSJC: function(t, n, e) {
                        return t(n, e)
                    },
                    QdAZq: function(t, n) {
                        return t === n
                    },
                    EAOPU: d("830", "(@(7"),
                    gvubc: d("831", "e%cj"),
                    DFrri: function(t, n, e) {
                        return t(n, e)
                    },
                    MCDQf: function(t, n) {
                        return t + n
                    },
                    Gcvem: function(t, n) {
                        return t / n
                    },
                    AYHaM: function(t, n) {
                        return t / n
                    },
                    wKaNZ: function(t, n) {
                        return t / n
                    },
                    mMdlq: d("832", "tDVN"),
                    YEAFo: function(t, n) {
                        return t !== n
                    },
                    rgGDY: d("833", "*gk("),
                    kqojN: d("834", "2^0s"),
                    pNndT: d("835", "(@(7"),
                    IqPKG: d("836", "o51H")
                };
                function n(e) {
                    t["jDSJC"](D, this, n),
                    this["gameObject"] = e
                }
                return t[d("837", "^AE%")](h, n, [{
                    key: "x",
                    get: function() {
                        if (!t["QdAZq"](t[d("838", "jum&")], t[d("839", "S(PA")])) return this["gameObject"]["x"];
                        this[d("83a", "9#sL")]["text"][d("83b", "AI)w")](n),
                        this[d("83c", "jum&")] = 0,
                        this[d("83d", "lTsN")][d("83e", "]DRy")][d("83f", "30HP")] || (this[d("840", "*gk(")][d("841", "d$Th")][d("842", "]DRy")](!0), this[d("840", "*gk(")][d("843", "(@(7")][d("844", "e%cj")](!0))
                    },
                    set: function(t) {
                        t = this[d("845", "(pLq")][d("240", "7n#g")][d("846", "jum&")](t),
                        this[d("847", "bPML")]["x"] = t
                    }
                },
                {
                    key: "y",
                    get: function() {
                        return this[d("848", "lTsN")]["y"]
                    },
                    set: function(t) {
                        t = this["gameObject"]["scene"][d("849", "lTsN")](t),
                        this[d("84a", "*gk(")]["y"] = t
                    }
                },
                {
                    key: d("7d6", ")7lZ"),
                    get: function() {
                        return this[d("84b", "o#Hw")][d("84c", "jum&")]
                    },
                    set: function(t) {
                        t = this["gameObject"]["scene"][d("84d", "x$Zb")](t),
                        this[d("84e", "xJ1F")][d("84f", "bPML")] = t
                    }
                },
                {
                    key: d("850", "]DRy"),
                    get: function() {
                        if (t[d("851", "tDVN")] === t[d("852", "*A)#")]) return this["gameObject"][d("853", "9#sL")];
                        var e;
                        t[d("854", "5dtt")](D, this, o["a"]),
                        (e = s["a"][d("855", "d$Th")](this, n, Z["GHOST"], Z["GHOST"], a["a"], O))[d("856", "%LFB")] = !1,
                        e[d("218", "xJ1F")](.5),
                        e["design"][d("857", "5dtt")] = 290,
                        e["design"][d("858", "7n#g")] = 290,
                        e[d("859", "PQB4")]["setSize"](272, 387),
                        e[d("85a", "S(PA")][d("85b", "U4xf")](115, 150);
                        var w = t["MCDQf"](e[d("85c", "e%cj")]["x"] + e[d("de", "qfqE")][d("85d", "jQ0X")][d("85e", "jum&")] + t["Gcvem"](e[d("85f", "xuC*")][d("860", "AI)w")][d("861", "Yr1b")]["x"], 2), t[d("862", "2^0s")](e["displayWidth"], 2)),
                        r = t[d("863", "hVad")](e[d("864", "PQB4")][d("865", "&98m")], e[d("de", "qfqE")][d("866", ")7lZ")]) - t[d("867", "30HP")](e["displayHeight"], 2),
                        c = e[d("868", "ZDnO")](w, r),
                        i = c["x"],
                        u = c["y"];
                        return e["x"] = i,
                        e["y"] = u,
                        e[d("869", ")7lZ")] = 13,
                        e[d("5df", "qfqE")][d("86a", "hVad")](ct[d("86b", "(@(7")]),
                        e
                    },
                    set: function(n) {
                        if (t[d("86c", "5dtt")](t[d("86d", "PQB4")], t[d("86e", "bPML")])) n = this["gameObject"]["scene"][d("86f", "Jgtc")](n),
                        this["gameObject"]["displayHeight"] = n;
                        else {
                            var e = K(this)["constructor"];
                            _0x29e2c8 = Reflect[d("870", "#cwz")](a["a"], arguments, e)
                        }
                    }
                },
                {
                    key: t[d("871", "P%4l")],
                    value: function(t, n) {
                        this["gameObject"][d("286", "7WQB")] && (t = this[d("872", "9#sL")][d("72c", "^Eu9")][d("873", "Z*#m")](t), n = this[d("874", "*A)#")][d("b2", "]DRy")]["scalingW"](n), this[d("875", "^Eu9")]["body"][d("876", "%LFB")](t, n))
                    }
                },
                {
                    key: t[d("877", "B20D")],
                    value: function(t, n) {
                        this["gameObject"][d("878", "%LFB")] && (t = this[d("879", "Jgtc")][d("74b", "xJ1F")][d("87a", "xuC*")](t), n && (n = this["gameObject"][d("2a5", "xuC*")]["scalingH"](n)), this[d("847", "bPML")][d("87b", "0tes")][d("87c", "bPML")](t, n))
                    }
                }]),
                n
            } ();
            function Ct(t) {
                var n = {
                    xdbxw: "undefined",
                    aOBYc: function(t, n) {
                        return t == n
                    },
                    XdcDf: d("87d", "y)Vp"),
                    GtNAW: function(t, n) {
                        return t !== n
                    },
                    VaGlP: "CcDTj",
                    eihDH: function(t, n) {
                        return t(n)
                    },
                    NvpzS: d("87e", "0tes"),
                    LNfdW: d("87f", "jum&"),
                    NOuIh: function(t, n, e) {
                        return t(n, e)
                    }
                },
                e = function() {
                    if (n[d("880", "bPML")] == ("undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect["construct"]) return ! 1;
                    if (Reflect[d("881", "]DRy")]["sham"]) return ! 1;
                    if (n[d("882", "5knQ")](n[d("883", "y)Vp")], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                    try {
                        return Boolean[d("518", "7n#g")][d("884", "9#sL")][d("885", "hVad")](Reflect[d("4a8", "e%cj")](Boolean, [], (function() {}))),
                        !0
                    } catch(t) {
                        return !! n["GtNAW"](n[d("886", "5knQ")], d("887", "Z*#m")) && (Boolean[d("888", "2^0s")]["valueOf"][d("889", "qgiy")](Reflect[d("88a", "S(PA")](Boolean, [], (function() {}))), !0)
                    }
                } ();
                return function() {
                    var w, c = {
                        OIIEf: function(t, e) {
                            return n[d("88b", "o51H")](t, e)
                        },
                        kCYeM: n[d("88c", "o51H")],
                        nQNdb: n[d("88d", "e%cj")]
                    },
                    i = n[d("88e", "(@(7")](K, t);
                    if (e) if (n[d("88f", "qgiy")] !== n[d("890", "xJ1F")]) {
                        var s = n[d("891", "ZDnO")](K, this)[d("892", "4zBg")];
                        w = Reflect[d("893", "9#sL")](i, arguments, s)
                    } else {
                        if (c[d("894", "x$Zb")](c[d("895", "(pLq")], "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect["construct"]) return ! 1;
                        if (Reflect[d("209", "*gk(")]["sham"]) return ! 1;
                        if (c[d("896", "Z*#m")](c[d("897", "]DRy")], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                        try {
                            return Boolean[d("898", "0%7z")]["valueOf"]["call"](Reflect[d("46c", "jum&")](Boolean, [], (function() {}))),
                            !0
                        } catch(o) {
                            return ! 1
                        }
                    } else w = i["apply"](this, arguments);
                    return n[d("899", "7WQB")](b, this, w)
                }
            }
            var lt = function(t) {
                var n = {
                    QiJyO: function(t, n) {
                        return t === n
                    },
                    UJbVy: "EmNzm",
                    DMLWr: d("89a", "U4xf"),
                    sbLeW: function(t, n) {
                        return t(n)
                    },
                    GONTd: function(t, n, e) {
                        return t(n, e)
                    }
                };
                n["GONTd"](l, w, Phaser[d("89b", "xJ1F")][d("89c", "P%4l")]);
                var e = n["sbLeW"](Ct, w);
                function w(t, r, c, i, s, o, a) {
                    var u;
                    if (!n[d("89d", "0tes")](n["UJbVy"], n[d("89e", "]DRy")])) return D(this, w),
                    (u = e["call"](this, t, r, c, i, s, o, a))[d("8a1", "U4xf")][d("783", "5knQ")][d("8a2", "xuC*")](n[d("8a3", "7n#g")](p, u)),
                    u[d("8a4", "4zBg")] = new ht(n[d("8a5", ")7lZ")](p, u)),
                    u;
                    this[d("89f", "o51H")](t),
                    this[d("8a0", "*A)#")](t)
                }
                return w
            } ();
            function gt(t) {
                var n = {
                    Vhwhd: "undefined",
                    CZHsd: function(t, n) {
                        return t == n
                    },
                    gAwxU: d("8a6", "5dtt"),
                    uWZwg: function(t, n) {
                        return t(n)
                    },
                    ELtve: function(t, n, e) {
                        return t(n, e)
                    }
                },
                e = function() {
                    if (n[d("8a7", "2^0s")] == ("undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect["construct"]) return ! 1;
                    if (Reflect[d("8a8", "7WQB")][d("8a9", "tDVN")]) return ! 1;
                    if (n[d("8aa", "d$Th")](n[d("8ab", "o#Hw")], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                    try {
                        return Boolean["prototype"][d("8ac", "5knQ")][d("e8", "y)Vp")](Reflect[d("208", "AI)w")](Boolean, [], (function() {}))),
                        !0
                    } catch(t) {
                        return ! 1
                    }
                } ();
                return function() {
                    var w, r = n[d("8ad", "xuC*")](K, t);
                    if (e) {
                        var c = n[d("8ae", "(pLq")](K, this)[d("8af", "5dtt")];
                        w = Reflect[d("7d", "Jgtc")](r, arguments, c)
                    } else w = r[d("8b0", "PQB4")](this, arguments);
                    return n[d("8b1", "*A)#")](b, this, w)
                }
            }
            var pt = function(t) {
                var n = {
                    DNnJV: function(t, n) {
                        return t !== n
                    },
                    nbTxs: d("8b2", "9#sL"),
                    WbakO: d("8b3", "S(PA"),
                    iGpfD: function(t, n, e) {
                        return t(n, e)
                    },
                    Jvhub: "click",
                    aOldc: function(t, n) {
                        return t === n
                    },
                    HoaNc: d("8b4", "@]mt"),
                    wXNam: function(t, n) {
                        return t(n)
                    }
                };
                l(w, lt);
                var e = n[d("8b5", "qfqE")](gt, w);
                function w(t, r) {
                    if (n[d("8b6", "(pLq")](n[d("8b7", "&98m")], n[d("8b8", "tDVN")])) {
                        var c;
                        n["iGpfD"](D, this, w),
                        (c = e[d("91", "xuC*")](this, t, 0, 0, t[d("8b9", "*gk(")]["canvas"]["width"], t[d("8ba", "U4xf")]["canvas"][d("8bb", "jQ0X")], r))[d("8bc", "d$Th")] = 5,
                        c["setOrigin"](0, 0);
                        var i = t[d("8bd", "*gk(")][d("4b7", "tDVN")](r)[d("8be", "^AE%")][0],
                        s = t["sys"][d("8bf", "(@(7")]["height"] / i[d("8c0", "ZDnO")];
                        return c["setTileScale"](s),
                        c
                    }
                    return this[d("8c1", "jum&")][d("8c2", "0tes")]
                }
                return n[d("8c3", "o#Hw")](h, w, [{
                    key: d("8c4", "AI)w"),
                    value: function() {
                        n[d("8c5", "AI)w")](n[d("8c6", "B20D")], d("8c7", "0tes")) ? t[d("8c8", "y)Vp")][d("65d", "30HP")][d("8c9", "^AE%")](n[d("8ca", "ZDnO")], (function() {
                            t["remove"](),
                            e(!0)
                        }), {
                            once: !0
                        }) : this[d("8cb", "Z*#m")] += this[d("8cc", "]DRy")]
                    }
                }]),
                w
            } ();
            function bt(t) {
                var n = {
                    saCyg: d("8cd", "5dtt"),
                    DvBwe: function(t, n, e) {
                        return t(n, e)
                    },
                    csXZz: function(t, n) {
                        return t(n)
                    },
                    ZDLeo: function(t, n) {
                        return t !== n
                    },
                    JQUOw: d("8ce", "nedJ"),
                    jjVFH: function(t, n) {
                        return t == n
                    },
                    UeINR: d("8cf", "m$jW"),
                    DBdKr: function(t, n) {
                        return t == n
                    },
                    vCiVg: d("8d0", "bPML"),
                    UhkTr: function(t, n) {
                        return t !== n
                    },
                    hpzQf: "SryrY",
                    jzErC: d("8d1", "^Eu9"),
                    ltlQI: d("8d2", "qfqE"),
                    OHuaw: function(t, n) {
                        return t === n
                    },
                    tYOaU: d("8d3", "P%4l")
                },
                e = function() {
                    if (n[d("8d4", "Z*#m")](n["JQUOw"], d("8d5", "#cwz"))) a["a"][d("4ba", "7WQB")]["closeed"] || (a["a"][d("785", "o#Hw")][d("8d6", "^Eu9")] = !0, a["a"][d("8d7", "*A)#")](n[d("8d8", "(@(7")], (function() {
                        o["a"]["remove"](),
                        a["a"][d("740", "P%4l")][d("8d9", "nedJ")]["remove"]()
                    })));
                    else {
                        if (n[d("8da", "#cwz")](n["UeINR"], "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("4f", "Z*#m")]) return ! 1;
                        if (Reflect["construct"][d("8db", "S(PA")]) return ! 1;
                        if (n["DBdKr"](n[d("8dc", "%LFB")], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                        try {
                            var w;
                            return n[d("8dd", "ZDnO")](n[d("8de", "PQB4")], n["hpzQf"]) ? (n[d("8df", "@]mt")](D, this, o["a"]), (w = e[d("8e0", "5dtt")](this, t, 0, 0, a["a"], O, h, C, l, g, b))[d("8e1", "%LFB")] = new ht(n[d("8e2", "qgiy")](p, w)), w) : (Boolean[d("14b", "Jgtc")]["valueOf"][d("8e3", "*gk(")](Reflect["construct"](Boolean, [], (function() {}))), !0)
                        } catch(c) {
                            if (n[d("8e4", "*A)#")](n[d("8e5", "0tes")], n[d("8e6", "^AE%")])) return ! 1;
                            this[d("8e7", "lTsN")][d("8e8", "hVad")]()
                        }
                    }
                } ();
                return function() {
                    if (n[d("8e9", "*A)#")](n[d("8ea", "e%cj")], d("8eb", "5knQ"))) {
                        var w, r = K(t);
                        if (e) {
                            var c = n[d("8ec", "hVad")](K, this)[d("8ed", "x$Zb")];
                            w = Reflect[d("466", "@]mt")](r, arguments, c)
                        } else w = r["apply"](this, arguments);
                        return b(this, w)
                    }
                    w["remove"](),
                    r[d("4c6", "5dtt")][d("8ee", "PQB4")]["remove"]()
                }
            }
            var Kt = function(t) {
                var n = {
                    MHJHz: function(t, n, e) {
                        return t(n, e)
                    },
                    EMuGx: function(t, n) {
                        return t !== n
                    },
                    QRCiW: d("8ef", "B20D"),
                    ReAyK: function(t, n, e) {
                        return t(n, e)
                    },
                    MqZQm: function(t, n) {
                        return t(n)
                    },
                    WcmnE: function(t, n, e) {
                        return t(n, e)
                    },
                    hchsp: d("8f0", "xJ1F"),
                    FaqmP: d("8f1", "]DRy")
                };
                n[d("8f2", "m$jW")](l, w, Phaser["GameObjects"][d("8f3", "0tes")]);
                var e = n[d("8f4", "B20D")](bt, w);
                function w() {
                    return n[d("8f5", "m$jW")](D, this, w),
                    e["apply"](this, arguments)
                }
                return n["WcmnE"](h, w, [{
                    key: n[d("8f6", "Z*#m")],
                    get: function() {
                        if (!n[d("8f7", "*gk(")](n["QRCiW"], n[d("8f8", "4zBg")])) return this["scene"]["game"]["config"][d("8f9", "Yr1b")];
                        e({
                            used: !1,
                            amount: 0
                        })
                    }
                },
                {
                    key: n[d("8fa", "Yr1b")],
                    get: function() {
                        return this["scene"][d("8fb", "^Eu9")]["config"]["height"]
                    }
                }]),
                w
            } ();
            function mt(t) {
                var n = {
                    DKtkr: d("764", "U4xf"),
                    arcgo: d("8fc", "P%4l"),
                    tCAhq: d("8fd", "5knQ"),
                    mvUFo: d("8fe", "e%cj"),
                    jyAiQ: "当前成绩: 0",
                    MBZOc: function(t, n) {
                        return t == n
                    },
                    FZDBh: d("8ff", "]DRy"),
                    cCPkv: "HLBku",
                    WLwQH: "TangSheng",
                    guPdO: d("900", "tDVN"),
                    Pwklf: function(t, n) {
                        return t === n
                    },
                    HKxwy: d("901", "^AE%"),
                    nQSaS: function(t, n) {
                        return t(n)
                    },
                    LmSro: function(t, n, e) {
                        return t(n, e)
                    }
                },
                e = function() {
                    var t = {
                        ofkTu: n[d("902", "o51H")],
                        EftBk: n[d("903", "]DRy")],
                        dRGDP: d("904", "qfqE"),
                        lAvdf: d("905", "lTsN"),
                        NJgkJ: n[d("906", "S(PA")],
                        dqkKC: n[d("907", "o51H")],
                        zjbKT: n[d("908", "P%4l")]
                    };
                    if (n["MBZOc"](d("909", "Z*#m"), "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("4a8", "e%cj")]) return ! 1;
                    if (Reflect[d("90a", "(@(7")]["sham"]) return ! 1;
                    if (n["FZDBh"] == ("undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                    try {
                        if ("HLBku" === n[d("90b", "B20D")]) return Boolean[d("586", "4zBg")]["valueOf"][d("53", "nedJ")](Reflect[d("881", "]DRy")](Boolean, [], (function() {}))),
                        !0;
                        var e = "" [d("6b1", "30HP")](this[d("90c", "e%cj")], t["ofkTu"])["concat"](_["score_bg"]),
                        w = this[d("70c", "o51H")],
                        c = new ut(w, t[d("90d", "0tes")], {
                            width: 657,
                            height: 75,
                            backgroundImage: t[d("90e", "e%cj")][d("90f", "tDVN")](e, ")"),
                            backgroundSize: "100% 100%",
                            position: t[d("910", "o#Hw")],
                            left: 0,
                            top: 0,
                            display: "flex",
                            alignItems: "center",
                            paddingLeft: 46
                        }),
                        i = new ut(w, "p", {
                            padding: 0,
                            margin: 0,
                            fontSize: 26,
                            color: t[d("911", "x$Zb")],
                            marginTop: -2
                        });
                        i["innerText"](t["dqkKC"]);
                        var s = new ut(w, "p", {
                            padding: 0,
                            margin: 0,
                            fontSize: 26,
                            color: t["NJgkJ"],
                            marginTop: -2,
                            marginLeft: 120
                        });
                        return s[d("912", "]DRy")](t[d("913", "4zBg")]),
                        this["bestScore"] = i,
                        this["curScore"] = s,
                        c["add"](i),
                        c["add"](s),
                        c
                    } catch(o) {
                        return ! 1
                    }
                } ();
                return function() {
                    var w = {
                        Jkiid: n["WLwQH"],
                        OkwDN: function(t, n) {
                            return t !== n
                        },
                        UHdRo: d("914", "7n#g"),
                        WgeSE: n[d("915", "*A)#")],
                        ZOzuy: d("916", "^Eu9")
                    };
                    if (n["Pwklf"](d("917", "(@(7"), n["HKxwy"])) {
                        var r, c = n[d("918", "^AE%")](K, t);
                        if (e) {
                            var i = n["nQSaS"](K, this)["constructor"];
                            r = Reflect["construct"](c, arguments, i)
                        } else r = c[d("919", "%LFB")](this, arguments);
                        return n["LmSro"](b, this, r)
                    }
                    var s = {
                        qlGpA: w[d("91a", "9#sL")],
                        UYOOL: function(t, n) {
                            return w[d("91b", "Jgtc")](t, n)
                        },
                        rndLn: w["UHdRo"]
                    },
                    o = this,
                    a = "" [d("2bf", "(pLq")](this[d("91c", "Jgtc")], d("91d", "d$Th"))[d("589", "*A)#")](_[d("91e", "&98m")]),
                    u = new ut(this["scene"], w[d("91f", "AI)w")], {
                        width: 450,
                        height: 88,
                        display: d("920", "d$Th"),
                        marginTop: 42
                    },
                    !1, {
                        src: a
                    });
                    return u[d("679", "y)Vp")]["addEventListener"](w[d("921", "0tes")], (function() {
                        for (var t = o[d("922", "PQB4")][d("923", "tDVN")][d("713", "5dtt")], n = s[d("924", "B20D")], e = 0; e < t["length"]; e++) {
                            var w = t[e];
                            s[d("925", "5knQ")](s["rndLn"], w[d("926", "0%7z")][d("927", "0%7z")]) || (n = w[d("928", "Yr1b")][d("929", "y)Vp")])
                        }
                        return o[d("92a", "Z*#m")](),
                        o["onConfirm"](n)
                    }), {
                        once: !0
                    }),
                    u
                }
            }
            var Mt = function(t) {
                var n = {
                    BzZvo: function(t, n, e) {
                        return t(n, e)
                    },
                    MVDsN: "mid",
                    NMhPH: d("92b", "d$Th"),
                    dCRxl: "bot",
                    kwmHb: function(t) {
                        return t()
                    },
                    ObtmA: function(t, n) {
                        return t >= n
                    },
                    jFSTX: function(t, n) {
                        return t !== n
                    },
                    trRYS: "gYNdU",
                    oVrQL: d("92c", "@]mt"),
                    ithan: function(t, n) {
                        return t < n
                    },
                    nVEGD: function(t, n, e) {
                        return t(n, e)
                    },
                    wFQUY: d("92d", "5dtt"),
                    GCFWf: function(t, n) {
                        return t * n
                    },
                    erHOQ: function(t, n) {
                        return t === n
                    },
                    HUSuV: function(t, n) {
                        return t + n
                    },
                    uidUh: function(t, n) {
                        return t / n
                    },
                    NwrLa: function(t, n) {
                        return t - n
                    },
                    JbMkx: function(t, n) {
                        return t - n
                    },
                    nWLkM: d("92e", "y)Vp"),
                    MsbkO: d("92f", "&98m")
                };
                l(w, Kt);
                var e = mt(w);
                function w() {
                    var t;
                    return n[d("930", "5dtt")](D, this, w),
                    (t = e["apply"](this, arguments))[d("931", "B20D")] = 250,
                    t[d("932", "30HP")] = 100,
                    t[d("933", "ZDnO")] = [n[d("934", "x$Zb")], n[d("935", "bPML")], n[d("936", "^AE%")], n[d("937", "hVad")], n[d("938", "bPML")], d("939", "PQB4")],
                    t["currentIndex"] = -1,
                    t["interval"] = 1e3,
                    t["time"] = 0,
                    t[d("93a", "PQB4")] = 15,
                    t
                }
                return n["nVEGD"](h, w, [{
                    key: n[d("93b", "e%cj")],
                    value: function(t, e) {
                        if (this["time"] += t, n[d("93c", "]DRy")](e), n["ObtmA"](this[d("93d", "(@(7")], this[d("93e", "x$Zb")])) {
                            var w;
                            if (!n[d("93f", "x$Zb")](n[d("940", "7n#g")], n[d("941", "PQB4")])) return n["BzZvo"](D, this, c),
                            (w = r["call"](this, {
                                key: F[d("948", "B20D")]
                            }))[d("949", "e%cj")] = 200,
                            w[d("94a", "4zBg")] = 4,
                            w[d("94b", "m$jW")] = 0,
                            w["initInterval"] = 0,
                            w;
                            this["time"] = 0;
                            var r = this[d("942", "hVad")]();
                            if (n[d("943", "AI)w")](r["length"], this[d("944", "2^0s")])) {
                                for (var c = 0; n[d("945", "o#Hw")](c, 5); c++) r[0]["destroy"]();
                                n["nVEGD"](X, n[d("946", "(@(7")], r[d("947", "0tes")])
                            }
                        }
                    }
                },
                {
                    key: n["MsbkO"],
                    value: function() {
                        this[d("94c", "2^0s")]++,
                        this[d("94d", ")7lZ")] >= this["positions"]["length"] && (this["currentIndex"] = Math[d("94e", "9#sL")](n["GCFWf"](Math[d("94f", "S(PA")](), this[d("950", "AI)w")][d("951", "P%4l")])));
                        var t = this[d("952", "S(PA")][this[d("953", "xuC*")]];
                        return n[d("954", "xJ1F")](n["MVDsN"], t) ? {
                            pos: t,
                            y: n[d("955", "7WQB")](n["uidUh"](n[d("956", "Jgtc")](this["scene"][d("957", "jum&")], this[d("958", "^Eu9")]) - this["padBottom"], 2), this["padTop"])
                        }: n["erHOQ"](d("959", "30HP"), t) ? {
                            pos: t,
                            y: n[d("95a", "Yr1b")](this[d("95b", "P%4l")][d("95c", "%LFB")], this[d("95d", "#cwz")])
                        }: {
                            pos: t,
                            y: this[d("95e", "S(PA")]
                        }
                    }
                }]),
                w
            } ();
            function vt(t) {
                var n = {
                    RYWob: d("95f", "PQB4"),
                    MOCKy: function(t, n) {
                        return t - n
                    },
                    GYVGv: function(t, n) {
                        return t / n
                    },
                    dkjRt: function(t, n) {
                        return t !== n
                    },
                    tOdbH: d("960", "m$jW"),
                    JdEQn: d("961", "d$Th"),
                    JFxjt: function(t, n) {
                        return t == n
                    },
                    sTNaN: d("962", "*A)#"),
                    hnBVN: function(t, n) {
                        return t !== n
                    },
                    LipbL: "WPniR",
                    wOENa: d("963", "^AE%"),
                    kdjNx: function(t, n) {
                        return t(n)
                    },
                    AUxgM: d("964", "7WQB"),
                    ndCnf: function(t, n) {
                        return t(n)
                    },
                    xVIda: function(t, n, e) {
                        return t(n, e)
                    }
                },
                e = function() {
                    var e = {
                        nrpWG: function(t, e) {
                            return n[d("965", "4zBg")](t, e)
                        },
                        TyFsX: function(t, e) {
                            return n["GYVGv"](t, e)
                        },
                        zYqnU: function(t, n) {
                            return t / n
                        }
                    };
                    if (n["dkjRt"](n["tOdbH"], n["JdEQn"])) {
                        if (n[d("966", "*gk(")](n[d("967", "bPML")], "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("1f1", "xuC*")]) return ! 1;
                        if (Reflect["construct"][d("4a2", "30HP")]) return ! 1;
                        if ("function" == typeof Proxy) return ! 0;
                        try {
                            if (n["hnBVN"](n[d("968", "5knQ")], n["wOENa"])) return Boolean[d("28a", "%LFB")][d("969", "Z*#m")][d("96a", "^Eu9")](Reflect[d("96b", "^Eu9")](Boolean, [], (function() {}))),
                            !0;
                            var w = o["a"] - this["initSpeed"],
                            c = e["nrpWG"](this["initInterval"], a["a"]),
                            i = e[d("96c", "7n#g")](w, this["happyTime"]),
                            s = e[d("96d", "4zBg")](c, this[d("96e", "jum&")]);
                            this[d("96f", "2^0s")]["background"][d("970", "Yr1b")] += i,
                            this[d("ac", "xuC*")][d("971", "x$Zb")][d("972", "m$jW")] -= s
                        } catch(u) {
                            return ! 1
                        }
                    } else this[d("973", "tDVN")][d("974", "o#Hw")](n[d("975", "5dtt")][d("976", "m$jW")](t))
                } ();
                return function() {
                    var w, r = n[d("977", "nedJ")](K, t);
                    if (e) if (n[d("978", "7n#g")] === d("979", "P%4l")) {
                        var c = n["ndCnf"](K, this)["constructor"];
                        w = Reflect[d("97a", "qfqE")](r, arguments, c)
                    } else {
                        try {
                            var i = t[O](h),
                            s = i[d("97b", "d$Th")]
                        } catch(o) {
                            return void n[d("97c", "m$jW")](w, o)
                        }
                        i["done"] ? e(s) : Promise[d("97d", "0tes")](s)["then"](r, c)
                    } else w = r[d("97e", "*gk(")](this, arguments);
                    return n[d("97f", "(@(7")](b, this, w)
                }
            }
            var yt = function(t) {
                var n = {
                    gxsBR: function(t, n, e) {
                        return t(n, e)
                    },
                    TIxzZ: function(t, n) {
                        return t(n)
                    },
                    dUPDR: function(t, n) {
                        return t(n)
                    },
                    oNRLm: d("980", "*A)#"),
                    JeDYj: d("981", "e%cj")
                };
                l(w, Phaser[d("982", ")7lZ")][d("983", "jum&")]);
                var e = n[d("984", "xuC*")](vt, w);
                function w(t, r) {
                    var c;
                    return n[d("985", "U4xf")](D, this, w),
                    (c = e[d("e8", "y)Vp")](this, t, 0, 0, r))["setOrigin"](0, 0),
                    c[d("643", "2^0s")] = new ht(n[d("986", "jum&")](p, c)),
                    t["add"][d("987", "xJ1F")](n["dUPDR"](p, c)),
                    c
                }
                return n[d("988", "qgiy")](h, w, [{
                    key: n[d("989", "o51H")],
                    get: function() {
                        return this[d("98a", ")7lZ")][d("98b", "e%cj")][d("98c", "S(PA")]["width"]
                    }
                },
                {
                    key: n[d("98d", "(pLq")],
                    get: function() {
                        return this[d("98e", "0tes")]["game"][d("98f", "y)Vp")][d("990", "*A)#")]
                    }
                }]),
                w
            } (),
            jt = function() {
                var t = {
                    nFQTg: d("991", "e%cj"),
                    KKYDj: function(t, n, e) {
                        return t(n, e)
                    },
                    VKafS: function(t, n) {
                        return t === n
                    },
                    WzMot: d("992", "e%cj"),
                    tqVrb: d("993", "0tes"),
                    VkJlf: "uiomA",
                    AGqBe: function(t, n) {
                        return t === n
                    },
                    dLBoe: "bsGil",
                    mSWna: function(t, n) {
                        return t(n)
                    },
                    SaEsl: function(t, n) {
                        return t * n
                    },
                    KBlyb: "speedX",
                    pYMfo: d("994", "o51H")
                };
                function n(e, w) {
                    var r = {
                        qKsQY: t["nFQTg"],
                        vTWEj: d("995", "&98m")
                    };
                    if (d("996", "(@(7") === d("997", "%LFB")) {
                        var c = $[g],
                        i = "" [d("6c5", "2^0s")](e, r[d("998", "5knQ")])[d("999", "xuC*")](c, r[d("99a", "jQ0X")])[d("99b", "]DRy")](w);
                        this[d("99c", "%LFB")][d("99d", "@]mt")](g, i)
                    } else t[d("99e", "PQB4")](D, this, n),
                    this[d("99f", "^AE%")] = 0,
                    this["_speedY"] = 0,
                    this[d("6e8", "x$Zb")] = e,
                    this["background"] = w
                }
                return t["KKYDj"](h, n, [{
                    key: t["KBlyb"],
                    get: function() {
                        if (t[d("9a0", "x$Zb")](t[d("9a1", "PQB4")], t[d("9a2", "qgiy")])) {
                            var e, w = K(n);
                            if (s["a"]) {
                                var r = K(this)["constructor"];
                                e = Reflect[d("46c", "jum&")](w, arguments, r)
                            } else e = w[d("9a3", "(pLq")](this, arguments);
                            return b(this, e)
                        }
                        return this["scene"][d("9a4", "#cwz")](this["_speedX"])
                    },
                    set: function(t) {
                        this[d("9a5", "5knQ")] = t
                    }
                },
                {
                    key: d("9a6", "hVad"),
                    get: function() {
                        return t["VKafS"](d("9a7", "(@(7"), t[d("9a8", "U4xf")]) ? this: this[d("9a9", "%LFB")][d("9aa", "m$jW")](this[d("9ab", "Yr1b")])
                    },
                    set: function(n) {
                        if (!t["AGqBe"](t[d("9ac", "bPML")], t[d("9ad", ")7lZ")])) return this[d("9ae", "jum&")]["game"][d("98c", "S(PA")][d("9af", "2^0s")];
                        this["_speedY"] = n
                    }
                },
                {
                    key: t[d("9b0", "30HP")],
                    get: function() {
                        var n = this["background"]["speed"] || 0;
                        return t[d("9b1", "^AE%")](parseInt, "" ["concat"](t[d("9b2", "jQ0X")](n / 16.7, 1e3)))
                    }
                }]),
                n
            } ();
            function Qt(t) {
                var n = {
                    PmxzQ: function(t, n) {
                        return t == n
                    },
                    mEVOv: "undefined",
                    SacuR: function(t, n) {
                        return t == n
                    },
                    wTMLL: d("9b3", "qfqE"),
                    egZyz: function(t, n) {
                        return t === n
                    },
                    RAYXo: d("9b4", "o51H"),
                    znzaX: function(t, n) {
                        return t(n)
                    }
                },
                e = function() {
                    if (n[d("9b5", "B20D")](n["mEVOv"], "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect["construct"]) return ! 1;
                    if (Reflect[d("88", "P%4l")][d("9b6", ")7lZ")]) return ! 1;
                    if (n[d("9b7", "30HP")](n[d("9b8", "7n#g")], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                    try {
                        return Boolean[d("5b7", "5knQ")][d("9b9", "%LFB")]["call"](Reflect["construct"](Boolean, [], (function() {}))),
                        !0
                    } catch(t) {
                        return ! 1
                    }
                } ();
                return function() {
                    if (n["egZyz"](n[d("9ba", "4zBg")], n[d("9bb", "&98m")])) {
                        var w, r = n["znzaX"](K, t);
                        if (e) {
                            var c = K(this)["constructor"];
                            w = Reflect["construct"](r, arguments, c)
                        } else w = r[d("9bc", "P%4l")](this, arguments);
                        return b(this, w)
                    }
                    this[d("9bd", "d$Th")] ? (this[d("9be", "hVad")]["style"][d("9bf", "y)Vp")] = "", this[d("9c0", "^AE%")]["style"]["transformOrigin"] = "", this[d("9c1", "jum&")][d("9c2", "5knQ")]["width"] = "" ["concat"](this[d("9c3", "lTsN")], "px"), this[d("9c4", "(pLq")][d("9c5", "5dtt")][d("9c6", "bPML")] = "" [d("70b", "o#Hw")](this[d("858", "7n#g")], "px")) : (this[d("9c7", "*A)#")][d("9c8", "0tes")]["transform"] = d("9c9", "&98m"), this[d("9ca", "4zBg")][d("9cb", "Z*#m")]["transformOrigin"] = "50vw 50vw", this["parent"]["style"][d("9cc", "0%7z")] = "" [d("6c5", "2^0s")](this[d("9cd", "2^0s")], "px"), this[d("9ce", "d$Th")][d("9cf", "30HP")][d("9d0", "5knQ")] = "" [d("6c0", "Z*#m")](this["width"], "px"))
                }
            }
            var qt = function(t) {
                var n = {
                    FXbgR: function(t, n) {
                        return t === n
                    },
                    hmOTI: "fbaeE",
                    LFZSA: function(t, n, e) {
                        return t(n, e)
                    },
                    cFoUh: function(t, n) {
                        return t(n)
                    }
                };
                l(w, yt);
                var e = n[d("9d1", "U4xf")](Qt, w);
                function w(t, c, i, s) {
                    var o, a = {
                        jsoYS: function(t, n) {
                            return t == n
                        },
                        UTBsJ: d("9d2", "9#sL")
                    };
                    if (n["FXbgR"](d("9d3", "m$jW"), n[d("9d4", "lTsN")])) return n["LFZSA"](D, this, w),
                    (o = e[d("9d5", "5knQ")](this, t, i))[d("9d6", "e%cj")] = c,
                    o[d("9d7", "B20D")] = new jt(t, s),
                    o;
                    if (a["jsoYS"](d("68", "#cwz"), "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect["construct"]) return ! 1;
                    if (Reflect[d("9a", "hVad")][d("9d8", "qfqE")]) return ! 1;
                    if (a[d("9d9", "P%4l")](a["UTBsJ"], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                    try {
                        return Boolean[d("5b7", "5knQ")][d("9da", "xuC*")][d("9db", ")7lZ")](Reflect[d("9dc", "y)Vp")](Boolean, [], (function() {}))),
                        !0
                    } catch(u) {
                        return ! 1
                    }
                }
                return w
            } ();
            function kt(t) {
                var n = {
                    Jcpax: d("9dd", "@]mt"),
                    xhfxW: function(t, n) {
                        return t !== n
                    },
                    XmUWW: function(t, n) {
                        return t == n
                    },
                    DrOxG: d("9de", "(@(7"),
                    GCRKO: "function",
                    hJSJM: function(t, n) {
                        return t === n
                    },
                    cMcfM: d("9df", "tDVN"),
                    hPdFR: function(t, n, e) {
                        return t(n, e)
                    }
                },
                e = function() {
                    if (n[d("9e0", "S(PA")]("uhzGE", d("9e1", "^AE%"))) {
                        if (n[d("9e2", "e%cj")](n[d("9e3", "*A)#")], "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("9e4", "^AE%")]) return ! 1;
                        if (Reflect["construct"]["sham"]) return ! 1;
                        if (n[d("9e5", "%LFB")] == ("undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                        try {
                            return Boolean[d("9e6", ")7lZ")][d("90", "o51H")][d("327", "0tes")](Reflect["construct"](Boolean, [], (function() {}))),
                            !0
                        } catch(e) {
                            return ! 1
                        }
                    } else {
                        var t = "" [d("9e7", "AI)w")](this[d("9e8", "hVad")], d("9e9", "0tes"))[d("4e8", "ZDnO")](_[d("403", "4zBg")]);
                        this["confirm"][d("9ea", "nedJ")][d("9eb", "d$Th")](n[d("9ec", "P%4l")], t)
                    }
                } ();
                return function() {
                    if (n[d("9ed", "Z*#m")](d("9ee", "S(PA"), n[d("9ef", "ZDnO")])) {
                        var w, r = K(t);
                        if (e) {
                            var c = K(this)[d("9f0", "%LFB")];
                            w = Reflect["construct"](r, arguments, c)
                        } else w = r[d("9f1", "xJ1F")](this, arguments);
                        return n[d("9f2", "^Eu9")](b, this, w)
                    }
                    this[d("9f3", "qgiy")][d("9f4", "jum&")]["killAll"](),
                    this["setAlpha"](0)
                }
            }
            var At = function(t) {
                var n = {
                    vqhdw: function(t, n, e) {
                        return t(n, e)
                    },
                    HIpgK: function(t, n) {
                        return t(n)
                    },
                    mhsKq: function(t, n) {
                        return t + n
                    },
                    BglCS: function(t, n, e) {
                        return t(n, e)
                    },
                    uTRjH: function(t, n) {
                        return t(n)
                    },
                    fKvSd: function(t, n, e) {
                        return t(n, e)
                    },
                    dpkPx: d("9f5", "7n#g")
                };
                n["BglCS"](l, w, qt);
                var e = n[d("9f6", "9#sL")](kt, w);
                function w(t, r, c, i) {
                    var s;
                    return n["vqhdw"](D, this, w),
                    (s = e[d("568", "2^0s")](this, t, r, c, i))[d("9f7", "^AE%")] = 5,
                    s["background"] = i,
                    s[d("6e8", "x$Zb")][d("9f8", "2^0s")]["world"][d("9f9", "(pLq")](n[d("9fa", "^Eu9")](p, s)),
                    s[d("9fb", ")7lZ")][d("9fc", ")7lZ")] = !1,
                    s
                }
                return n[d("9fd", "*gk(")](h, w, [{
                    key: n[d("9fe", "2^0s")],
                    value: function() {
                        var t = n[d("9ff", "AI)w")](this[d("a00", "o#Hw")], this[d("a01", "^Eu9")][d("a02", "7n#g")]);
                        this[d("d0", "5dtt")]["x"] -= t
                    }
                }]),
                w
            } ();
            function Pt(t) {
                var n = {
                    HLLwK: "value",
                    Ldvly: "IIEoO",
                    DLAGa: d("a03", "xJ1F"),
                    IsrHe: function(t, n) {
                        return t == n
                    },
                    BGPcX: d("11", "m$jW"),
                    IskNj: function(t, n) {
                        return t === n
                    },
                    JUgji: d("a04", "xJ1F"),
                    KkJVx: d("a05", "@]mt"),
                    SEWJM: d("a06", "4zBg"),
                    XwZwd: function(t, n) {
                        return t || n
                    },
                    nfpGI: function(t, n) {
                        return t(n)
                    },
                    SwpNd: function(t, n) {
                        return t !== n
                    },
                    TNeHA: "NWrUF",
                    teHms: d("a07", "5knQ"),
                    dHvTx: function(t, n) {
                        return t(n)
                    }
                },
                e = function() {
                    if (n["Ldvly"] !== n[d("a08", "^Eu9")]) {
                        var w = e[o["a"]];
                        w[d("a09", "hVad")] = w[d("a09", "hVad")] || !1,
                        w["configurable"] = !0,
                        n[d("a0a", "5knQ")] in w && (w[d("a0b", "AI)w")] = !0),
                        Object["defineProperty"](t, w["key"], w)
                    } else {
                        if (n["DLAGa"] == ("undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("9dc", "y)Vp")]) return ! 1;
                        if (Reflect["construct"][d("a0c", "^AE%")]) return ! 1;
                        if (n[d("a0d", "9#sL")](n[d("a0e", "x$Zb")], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                        try {
                            return Boolean[d("a0f", "@]mt")]["valueOf"][d("18c", "P%4l")](Reflect[d("24d", "(pLq")](Boolean, [], (function() {}))),
                            !0
                        } catch(c) {
                            return !! n[d("a10", "m$jW")](n[d("a11", "nedJ")], "JVJoP") && this["_speed"]
                        }
                    }
                } ();
                return function() {
                    var w, r = n[d("a12", "*A)#")](K, t);
                    if (e) if (n["SwpNd"](n[d("a13", "jQ0X")], n[d("a14", "#cwz")])) {
                        var c = n["dHvTx"](K, this)[d("a15", "#cwz")];
                        w = Reflect[d("90a", "(@(7")](r, arguments, c)
                    } else {
                        var i = location["href"][d("a16", "*A)#")](n[d("a17", "AI)w")]),
                        s = location["href"][d("a18", "%LFB")](n["SEWJM"]);
                        n[d("a19", "Jgtc")](i, s) && R[d("a1a", "30HP")](void 0, arguments)
                    } else w = r[d("a1b", "AI)w")](this, arguments);
                    return b(this, w)
                }
            }
            var Bt = function(t) {
                var n = {
                    pEnuO: function(t, n, e) {
                        return t(n, e)
                    },
                    Jpuwn: function(t, n) {
                        return t == n
                    },
                    vtAVd: function(t, n) {
                        return t === n
                    },
                    NSWbH: d("a1c", "xJ1F"),
                    ggdmW: function(t, n) {
                        return t !== n
                    },
                    GcmmA: d("a1d", "hVad"),
                    TxqHK: function(t, n) {
                        return t * n
                    },
                    dUSwC: function(t, n) {
                        return t / n
                    },
                    lOVQv: function(t, n) {
                        return t + n
                    },
                    KnslW: function(t, n) {
                        return t - n
                    },
                    GgQzE: function(t, n) {
                        return t * n
                    },
                    xRBzM: d("a1e", "m$jW"),
                    jgVyy: d("a1f", "4zBg"),
                    tJfcl: function(t, n) {
                        return t(n)
                    },
                    DWgqP: d("a20", "ZDnO"),
                    PgnXZ: d("a21", "]DRy"),
                    oDyKf: d("a22", "bPML")
                };
                n[d("a23", "@]mt")](l, w, Mt);
                var e = n[d("a24", "o#Hw")](Pt, w);
                function w(t, r) {
                    var c;
                    return n["pEnuO"](D, this, w),
                    (c = e[d("18c", "P%4l")](this, t))[d("a25", "(@(7")] = {
                        fish: {
                            width: 166,
                            height: 62,
                            bodyW: 108,
                            bodyH: 35,
                            bodyOffsetX: 0,
                            bodyOffsetY: 15,
                            texture: L["QIN_LY"]
                        },
                        haiCao: {
                            width: 132,
                            height: 143,
                            bodyW: 85,
                            bodyH: 85,
                            bodyOffsetX: 25,
                            bodyOffsetY: 25,
                            texture: L[d("a26", "jum&")]
                        },
                        wood: {
                            width: 152,
                            height: 92,
                            bodyW: 120,
                            bodyH: 45,
                            bodyOffsetX: 15,
                            bodyOffsetY: 15,
                            texture: L[d("a27", "@]mt")]
                        }
                    },
                    c["floatingsIndex"] = [0, 0, 0, 1, 1, 1, 1, 2, 2, 2],
                    c["background"] = r,
                    c[d("a28", "30HP")](),
                    c
                }
                return n[d("a29", "]DRy")](h, w, [{
                    key: n[d("a2a", "jQ0X")],
                    value: function(t) {
                        var e = {
                            iFYGe: "undefined",
                            OHRay: function(t, e) {
                                return n[d("a2b", "P%4l")](t, e)
                            },
                            qyTNu: function(t, e) {
                                return n[d("a2c", "*A)#")](t, e)
                            },
                            DJRDm: n[d("a2d", "jum&")],
                            BZxRm: "fGOAd",
                            sWKTQ: function(t, n) {
                                return t >= n
                            }
                        };
                        if (n[d("a2e", "%LFB")](n[d("a2f", "P%4l")], "cDXZA")) {
                            if (e[d("a30", "xJ1F")] == ("undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("209", "*gk(")]) return ! 1;
                            if (Reflect[d("a31", "jQ0X")][d("a32", "x$Zb")]) return ! 1;
                            if (e["OHRay"]("function", "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                            try {
                                return Boolean[d("a33", "U4xf")][d("a34", "m$jW")][d("e8", "y)Vp")](Reflect[d("a35", "lTsN")](Boolean, [], (function() {}))),
                                !0
                            } catch(i) {
                                return ! 1
                            }
                        } else {
                            var w = this,
                            c = this[d("a36", "U4xf")]();
                            c["length"] <= 0 || (Phaser[d("a37", "qgiy")]["Call"](c, (function(t) {
                                t[d("a38", "*A)#")]()
                            }), this), this[d("a39", "S(PA")](t, (function() {
                                if (e[d("a3a", "9#sL")](e[d("a3b", "&98m")], e[d("a3c", ")7lZ")])) return Boolean[d("7f", "d$Th")][d("a3d", "5dtt")]["call"](Reflect[d("256", "x$Zb")](Boolean, [], (function() {}))),
                                !0;
                                e[d("a3e", "m$jW")](w["time"], w[d("a3f", "%LFB")]) && w[d("a40", "9#sL")]()
                            })))
                        }
                    }
                },
                {
                    key: n[d("a41", "5knQ")],
                    value: function() {
                        var t = Object[d("a42", "y)Vp")](this[d("a43", "xuC*")]),
                        e = Math[d("a44", "B20D")](n[d("a45", "*gk(")](Math[d("a46", "PQB4")](), this[d("a47", "bPML")][d("a48", "S(PA")])),
                        w = t[this[d("a49", "]DRy")][e]],
                        r = this["floatingsConfig"][w],
                        c = this[d("a4a", "(pLq")](),
                        i = c[d("a4b", "xJ1F")],
                        s = c["y"],
                        o = this[d("a4c", "4zBg")](r, s);
                        n[d("a4d", "^Eu9")]("bot", i) && o[d("a4e", "ZDnO")](0, 1),
                        this["add"](o)
                    }
                },
                {
                    key: n[d("a4f", "Z*#m")],
                    value: function(t, e) {
                        if (n["vtAVd"](n["xRBzM"], n["jgVyy"])) {
                            var w = t["x"],
                            r = t["y"],
                            c = a["a"] / 2,
                            i = n[d("a50", "%LFB")](a["a"], 2),
                            s = n["lOVQv"](n["KnslW"](n[d("a51", "P%4l")](r / a["a"], h), i), c),
                            o = n["lOVQv"](c - n[d("a52", "#cwz")](w / u, D), i);
                            return t["x"] = s,
                            t["y"] = o,
                            t
                        }
                        var u = new At(this[d("a53", "9#sL")], t[d("a54", "P%4l")], t["texture"], this[d("a55", "o#Hw")]);
                        return u[d("a56", "xuC*")]["width"] = t[d("a57", "qfqE")],
                        u["design"][d("a58", "xJ1F")] = t[d("990", "*A)#")],
                        u["x"] = this[d("a59", "5knQ")],
                        u["design"]["y"] = e,
                        u[d("a5a", "&98m")][d("a5b", "^AE%")](t[d("a5c", "o51H")], t[d("a5d", "nedJ")]),
                        u[d("a5e", "nedJ")][d("a5f", "y)Vp")](t["bodyOffsetX"], t[d("a60", "&98m")]),
                        u
                    }
                }]),
                w
            } ();
            function xt(t) {
                var n = {
                    zsdLh: function(t, n) {
                        return t == n
                    },
                    kmHCt: "undefined",
                    YCshx: function(t, n) {
                        return t == n
                    },
                    vtmDa: "function",
                    aUcUo: function(t, n) {
                        return t !== n
                    },
                    hsUgE: d("a61", "Z*#m"),
                    DQAxF: function(t, n) {
                        return t == n
                    },
                    leKZM: d("a62", "lTsN"),
                    QJlXB: d("a63", "nedJ"),
                    MtkVQ: " init",
                    skSod: d("a64", "xJ1F"),
                    srPqP: "XMFbg",
                    wboqE: function(t, n) {
                        return t(n)
                    },
                    zyfDR: function(t, n) {
                        return t(n)
                    }
                },
                e = function() {
                    if (n["aUcUo"](n[d("a65", "Yr1b")], "rEpDY")) {
                        if (n[d("a66", "d$Th")](n[d("a67", "xuC*")], "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("465", "30HP")]) return ! 1;
                        if (Reflect[d("9e4", "^AE%")][d("24e", "Z*#m")]) return ! 1;
                        if (n[d("a68", "5knQ")](n["vtmDa"], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                        try {
                            return Boolean[d("898", "0%7z")]["valueOf"][d("a69", "]DRy")](Reflect[d("517", "nedJ")](Boolean, [], (function() {}))),
                            !0
                        } catch(t) {
                            if (n["leKZM"] !== n[d("a6a", "PQB4")]) return ! 1;
                            D(this, t),
                            this["gameObject"] = e
                        }
                    } else {
                        if (n[d("a6b", "^AE%")](n["kmHCt"], "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect["construct"]) return ! 1;
                        if (Reflect[d("24d", "(pLq")][d("a6c", "^Eu9")]) return ! 1;
                        if (n[d("a6d", "#cwz")](n[d("a6e", "4zBg")], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                        try {
                            return Boolean[d("7f", "d$Th")][d("a6f", "7n#g")][d("5cc", "U4xf")](Reflect["construct"](Boolean, [], (function() {}))),
                            !0
                        } catch(w) {
                            return ! 1
                        }
                    }
                } ();
                return function() {
                    if (n[d("a70", "5knQ")](n[d("a71", "9#sL")], n[d("a72", "Z*#m")])) {
                        var w, r = n[d("a73", "o#Hw")](K, t);
                        if (e) {
                            var c = n[d("a74", "nedJ")](K, this)[d("524", "hVad")];
                            w = Reflect[d("88a", "S(PA")](r, arguments, c)
                        } else w = r["apply"](this, arguments);
                        return b(this, w)
                    }
                    X("" [d("591", "^Eu9")](F[d("a75", "S(PA")], n["MtkVQ"])),
                    this[d("a76", "*gk(")] = new xn
                }
            }
            var Et = function(t) {
                var n = {
                    UbnSg: function(t, n) {
                        return t(n)
                    },
                    BUPYA: function(t, n, e) {
                        return t(n, e)
                    },
                    DlalV: function(t, n) {
                        return t(n)
                    }
                };
                n["BUPYA"](l, w, a["a"]);
                var e = n["DlalV"](xt, w);
                function w(t, r, c) {
                    var i;
                    return D(this, w),
                    (i = e[d("9db", ")7lZ")](this, t, 0, 0, r, c))[d("a77", "P%4l")] = new ht(n["UbnSg"](p, i)),
                    i
                }
                return w
            } ();
            function Ht(t) {
                var n = {
                    EKFmD: function(t, n, e) {
                        return t(n, e)
                    },
                    yUwTS: d("a78", "d$Th"),
                    XZcnZ: d("6e4", "ZDnO"),
                    vtEUJ: function(t, n) {
                        return t !== n
                    },
                    hocku: "XIYWS",
                    DikPn: function(t, n) {
                        return t == n
                    },
                    EUMSg: d("a79", "(pLq"),
                    NKKYP: d("9d2", "9#sL"),
                    oEwdw: "true",
                    sgSiI: function(t, n) {
                        return t === n
                    },
                    BiDUj: function(t, n) {
                        return t(n)
                    }
                },
                e = function() {
                    var w = {
                        ALVdT: function(t, e, w) {
                            return n["EKFmD"](t, e, w)
                        },
                        uGgFZ: d("a7a", "bPML"),
                        sEkHC: n["yUwTS"],
                        TtQTa: n["XZcnZ"],
                        uxrrE: "center"
                    };
                    if (n[d("a7b", "4zBg")](d("a7c", "jQ0X"), n[d("a7d", "qgiy")])) {
                        if (n[d("a7e", "*A)#")](n[d("a7f", "7WQB")], "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("466", "@]mt")]) return ! 1;
                        if (Reflect[d("54", "PQB4")]["sham"]) return ! 1;
                        if (n[d("a80", "AI)w")](n[d("a81", "y)Vp")], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                        try {
                            return Boolean["prototype"]["valueOf"][d("a82", "ZDnO")](Reflect["construct"](Boolean, [], (function() {}))),
                            !0
                        } catch(o) {
                            return ! 1
                        }
                    } else {
                        w["ALVdT"](D, this, t),
                        this[d("a83", "%LFB")] = 0,
                        this[d("a84", "^Eu9")] = [_[d("a85", "]DRy")], _[d("a86", "(pLq")], _[d("a87", "jum&")]],
                        this[d("9f3", "qgiy")] = e;
                        var c = new ut(e, w[d("a88", "4zBg")], {
                            width: w["sEkHC"],
                            height: w[d("a89", "xJ1F")],
                            padding: 0,
                            margin: 0,
                            position: "absolute",
                            left: 0,
                            top: 0,
                            overflow: "hidden",
                            zIndex: 20,
                            backgroundColor: d("a8a", "#cwz"),
                            display: w[d("a8b", "S(PA")],
                            alignItems: w[d("a8c", "^Eu9")],
                            justifyContent: w["uxrrE"]
                        },
                        !0),
                        i = this[d("a8d", "Yr1b")](),
                        s = this["createConfirm"]();
                        c[d("a8e", ")7lZ")](i),
                        c[d("a8f", "Jgtc")](s),
                        this["box"] = c,
                        this[d("a90", "PQB4")] = i,
                        this[d("a91", "&98m")] = s
                    }
                } ();
                return function() {
                    if (!n["sgSiI"](d("a92", "ZDnO"), "fAnOj")) {
                        var w, r = K(t);
                        if (e) {
                            var c = n[d("a96", "Jgtc")](K, this)[d("a97", "^AE%")];
                            w = Reflect[d("1f1", "xuC*")](r, arguments, c)
                        } else w = r[d("a98", "0%7z")](this, arguments);
                        return n["EKFmD"](b, this, w)
                    }
                    var i = e[r];
                    n[d("a93", "ZDnO")] !== i["dataset"]["active"] || (w = i[d("a94", "m$jW")][d("a95", "PQB4")])
                }
            }
            var Tt = function(t) {
                var n = {
                    EjSlK: function(t, n) {
                        return t(n)
                    },
                    zIBvx: "CoreContainer 无法设置 design.height",
                    RuNXt: "ClylJ",
                    phMET: function(t, n, e) {
                        return t(n, e)
                    },
                    kyGzC: function(t, n) {
                        return t === n
                    },
                    dsvWb: "pgZkh",
                    mwKJB: d("a99", "@]mt"),
                    mCtJt: function(t, n, e) {
                        return t(n, e)
                    },
                    qvxkG: d("a9a", "7WQB")
                };
                l(w, Phaser[d("a9b", "B20D")][d("a9c", "jQ0X")]);
                var e = Ht(w);
                function w(t) {
                    var r, c = {
                        vdKmU: d("a9d", "0tes")
                    };
                    if (n[d("a9e", "o51H")] === n[d("a9f", "jQ0X")]) return D(this, w),
                    (r = e[d("aa2", "o#Hw")](this, t, 0, 0))[d("8a4", "4zBg")] = new ht(n[d("aa3", "(pLq")](p, r)),
                    Object[d("aa4", "^Eu9")](r["design"], {
                        width: {
                            set: function() {
                                console[d("aa5", "#cwz")](c[d("aa6", "#cwz")])
                            }
                        },
                        height: {
                            set: function() {
                                console["warn"](n[d("aa7", "B20D")])
                            }
                        }
                    }),
                    t[d("aa8", "P%4l")][d("aa9", "(@(7")](n["EjSlK"](p, r)),
                    r;
                    var i = n[d("aa0", "0tes")](K, this)[d("aa1", "d$Th")];
                    w = Reflect[d("209", "*gk(")](r, arguments, i)
                }
                return n[d("aaa", "y)Vp")](h, w, [{
                    key: n["qvxkG"],
                    get: function() {
                        if (!n[d("aab", "o#Hw")](n[d("aac", "0%7z")], n[d("aad", ")7lZ")])) return this["scene"][d("ab0", "30HP")]["config"]["width"];
                        n[d("aae", "5dtt")](D, this, t),
                        this[d("aaf", ")7lZ")] = !1
                    }
                },
                {
                    key: "gameHeight",
                    get: function() {
                        return this[d("ab1", "ZDnO")]["game"][d("ab2", "#cwz")][d("ab3", "(@(7")]
                    }
                }]),
                w
            } ();
            function Lt(t) {
                var n = {
                    tKMcA: function(t, n, e) {
                        return t(n, e)
                    },
                    zIhdf: function(t, n) {
                        return t + n
                    },
                    vHstK: function(t, n) {
                        return t === n
                    },
                    sKZyF: d("ab4", "*A)#"),
                    ovRyc: d("ab5", "(@(7"),
                    CDIXv: function(t, n) {
                        return t == n
                    },
                    ptbLb: "undefined",
                    BvomD: d("23", "30HP"),
                    xkGdy: function(t, n) {
                        return t !== n
                    },
                    vQCvi: d("ab6", "@]mt"),
                    lIPmY: function(t, n) {
                        return t(n)
                    }
                },
                e = function() {
                    if (n[d("ab7", "4zBg")](n[d("ab8", "7WQB")], n["ovRyc"])) {
                        var w;
                        n[d("ab9", "m$jW")](D, this, o["a"]),
                        (w = e[d("327", "0tes")](this, t, L[d("aba", "U4xf")], L[d("abb", "^AE%")], a["a"], O))[d("642", "B20D")](0),
                        w["design"][d("abc", "%LFB")] = 99,
                        w["design"][d("abd", "hVad")] = 78,
                        w[d("abe", "hVad")]["setSize"](75, 75),
                        w[d("860", "AI)w")][d("abf", "ZDnO")](5, 0);
                        var c = n["zIhdf"](w[d("ac0", "(pLq")]["x"], w[d("ac1", "ZDnO")][d("ac2", "o#Hw")]),
                        i = w[d("64b", "5dtt")][d("ac3", "m$jW")][d("ac4", "2^0s")]["y"] + w[d("ac5", "*gk(")]["jumpY"],
                        s = w["overflowPos"](c, i),
                        u = s["x"],
                        f = s["y"];
                        return w["x"] = u,
                        w["y"] = f,
                        w
                    }
                    if (n[d("ac6", "m$jW")](n[d("ac7", "Z*#m")], "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("99", "*A)#")]) return ! 1;
                    if (Reflect[d("97a", "qfqE")]["sham"]) return ! 1;
                    if (n[d("ac8", "30HP")](n[d("ac9", "o51H")], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                    try {
                        return Boolean[d("51", "jQ0X")][d("52", "S(PA")][d("327", "0tes")](Reflect[d("9a", "hVad")](Boolean, [], (function() {}))),
                        !0
                    } catch(h) {
                        return ! n["xkGdy"](d("aca", "qgiy"), n[d("acb", "^AE%")]) && (Boolean[d("14b", "Jgtc")][d("acc", "0tes")]["call"](Reflect[d("90a", "(@(7")](Boolean, [], (function() {}))), !0)
                    }
                } ();
                return function() {
                    var w, r = n[d("acd", "hVad")](K, t);
                    if (e) {
                        var c = n[d("ace", "x$Zb")](K, this)["constructor"];
                        w = Reflect["construct"](r, arguments, c)
                    } else w = r[d("acf", "S(PA")](this, arguments);
                    return n[d("ad0", "*gk(")](b, this, w)
                }
            }
            var Vt = function(t) {
                var n = {
                    HlSVK: function(t, n, e) {
                        return t(n, e)
                    },
                    kqVpQ: function(t, n) {
                        return t(n)
                    },
                    fTpjQ: function(t, n) {
                        return t(n)
                    }
                };
                n[d("ad1", "y)Vp")](l, w, Phaser[d("ad2", "PQB4")]["Triangle"]);
                var e = n["fTpjQ"](Lt, w);
                function w(t, r, c, i, s, o, a, u) {
                    var f;
                    return n[d("ad3", "o#Hw")](D, this, w),
                    (f = e[d("18c", "P%4l")](this, t, 0, 0, r, c, i, s, o, a, u))["design"] = new ht(n[d("ad4", "*A)#")](p, f)),
                    f
                }
                return w
            } ();
            function zt(t) {
                var n = {
                    phuvO: function(t, n) {
                        return t + n
                    },
                    AEfWY: function(t, n) {
                        return t == n
                    },
                    gIAnZ: d("ad5", "o#Hw"),
                    TcXMH: function(t, n) {
                        return t == n
                    },
                    pSlgl: d("ad6", "U4xf"),
                    ckcpG: d("ad7", "5knQ"),
                    rsfEM: function(t, n) {
                        return t(n)
                    }
                },
                e = function() {
                    if (n["AEfWY"](n[d("ad8", "(pLq")], "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect["construct"]) return ! 1;
                    if (Reflect[d("ad9", "qgiy")][d("ada", "xJ1F")]) return ! 1;
                    if (n["TcXMH"](n[d("adb", "*A)#")], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                    try {
                        return Boolean[d("adc", "jum&")]["valueOf"][d("add", "7WQB")](Reflect[d("4a0", "bPML")](Boolean, [], (function() {}))),
                        !0
                    } catch(t) {
                        return d("ade", "P%4l") !== n[d("adf", "y)Vp")] && n[d("ae0", "o#Hw")](this["y"], this[d("ae1", "U4xf")]["design"][d("ae2", "P%4l")])
                    }
                } ();
                return function() {
                    var w, r = n["rsfEM"](K, t);
                    if (e) {
                        var c = n[d("ae3", "qgiy")](K, this)["constructor"];
                        w = Reflect[d("256", "x$Zb")](r, arguments, c)
                    } else w = r[d("ae4", "(@(7")](this, arguments);
                    return b(this, w)
                }
            }
            var Rt = function(t) {
                var n = {
                    mjGAX: function(t, n, e) {
                        return t(n, e)
                    },
                    weQXZ: function(t, n) {
                        return t * n
                    },
                    DmJJC: function(t, n) {
                        return t !== n
                    },
                    dCvWE: d("ae5", "0tes"),
                    uwBEH: function(t, n) {
                        return t(n)
                    },
                    nUMnQ: function(t, n) {
                        return t <= n
                    },
                    mVwle: function(t, n) {
                        return t !== n
                    },
                    jXYoC: d("ae6", "x$Zb"),
                    DJJOU: function(t, n) {
                        return t >= n
                    },
                    XyWuD: d("ae7", "*gk("),
                    eaTdv: function(t, n) {
                        return t - n
                    },
                    uANdc: function(t, n) {
                        return t - n
                    },
                    eXBVF: function(t, n) {
                        return t == n
                    },
                    NqdaL: "undefined",
                    RPqkR: "function",
                    ytITx: function(t, n) {
                        return t !== n
                    },
                    RVXKp: d("ae8", "5dtt"),
                    NVcPm: function(t, n) {
                        return t !== n
                    },
                    RBzRL: d("ae9", ")7lZ"),
                    yJYMu: d("aea", "0%7z"),
                    qjPIv: d("aeb", "5dtt"),
                    tYsXY: function(t, n) {
                        return t / n
                    },
                    JDnCm: d("aec", "ZDnO"),
                    uTwfX: d("aed", "P%4l"),
                    UaROc: function(t, n, e) {
                        return t(n, e)
                    },
                    ySvyR: d("aee", "5dtt"),
                    ZLVlu: "bgSpeed",
                    NzBgZ: d("aef", "9#sL"),
                    kYfJn: d("af0", "^Eu9"),
                    CDuIN: d("af1", "o51H"),
                    QPMtj: "isMinMoveY",
                    aDZkz: d("af2", "qfqE"),
                    kRPkK: d("af3", "0%7z"),
                    ORfNX: d("af4", "xJ1F"),
                    xFaRQ: d("af5", "m$jW"),
                    CyWMi: d("af6", "m$jW"),
                    ANWqQ: "upright",
                    eqbOT: d("af7", "tDVN"),
                    IGTcp: d("af8", "o#Hw"),
                    byoFQ: d("af9", ")7lZ"),
                    XfpCO: d("afa", "#cwz"),
                    BZnfc: d("afb", "Yr1b")
                };
                n[d("afc", "%LFB")](l, w, Tt);
                var e = n[d("afd", "y)Vp")](zt, w);
                function w(t, r) {
                    var c;
                    return n[d("afe", "]DRy")](D, this, w),
                    (c = e[d("aff", "bPML")](this, t))[d("b00", "0tes")] = .3 * c[d("b01", "0tes")],
                    c[d("b02", "bPML")] = .2 * c["gameWidth"],
                    c[d("b03", "]DRy")] = n[d("b04", "Yr1b")](.72, c[d("b05", "d$Th")]),
                    c["minMoveY"] = n[d("b06", "0%7z")](.3, c["gameHeight"]),
                    c[d("b07", "e%cj")] = 300,
                    c[d("b08", "lTsN")] = 240,
                    c[d("b09", "Z*#m")] = 2e3,
                    c[d("b0a", "^AE%")] = 0,
                    c[d("b0b", "(pLq")] = r,
                    c[d("631", "5dtt")][d("b0c", "9#sL")][d("b0d", "S(PA")][d("b0e", "PQB4")](p(c)),
                    c
                }
                return n[d("b0f", "lTsN")](h, w, [{
                    key: n[d("b10", "S(PA")],
                    get: function() {
                        return this["scene"][d("b11", "e%cj")](this[d("b07", "e%cj")])
                    },
                    set: function(t) {
                        this[d("b12", "9#sL")] = t
                    }
                },
                {
                    key: d("b13", "^Eu9"),
                    get: function() {
                        return this["scene"][d("b14", "qgiy")](this[d("b15", "5dtt")])
                    },
                    set: function(t) {
                        this["_speedY"] = t
                    }
                },
                {
                    key: n[d("b16", "bPML")],
                    get: function() {
                        if (n[d("b17", "2^0s")](n["dCvWE"], d("b18", "%LFB"))) {
                            var t = this[d("b19", "0tes")][d("b1a", "m$jW")] || 0;
                            return n[d("b1b", "5dtt")](parseInt, "" [d("b1c", ")7lZ")](t / 16 * 1e3))
                        }
                        this["_listenResume"]()
                    }
                },
                {
                    key: n["NzBgZ"],
                    get: function() {
                        if (n["mVwle"](n[d("b1d", "d$Th")], "IlumN")) return n[d("b1e", "2^0s")](this["x"], this[d("b1f", "5dtt")]) && (this[d("85a", "S(PA")][d("b20", "Jgtc")](0), !0);
                        this[d("b21", "ZDnO")][d("b22", "^Eu9")](t, this["addBarrier"], this);
                        var e = this[d("b23", "Jgtc")]();
                        n[d("b24", "PQB4")](e["length"], 0) || Phaser["Actions"][d("b25", "(@(7")](e, (function(t) {
                            t[d("b26", "hVad")]()
                        }), this)
                    }
                },
                {
                    key: n["kYfJn"],
                    get: function() {
                        return this["x"] <= this[d("b27", "ZDnO")] && (this[d("b28", "@]mt")][d("b29", "^AE%")](0), !0)
                    }
                },
                {
                    key: n[d("b2a", "Yr1b")],
                    get: function() {
                        return n[d("b2b", "y)Vp")](this["y"], this[d("b2c", "PQB4")]) && (this[d("b2d", "Jgtc")][d("b2e", "d$Th")](0), !0)
                    }
                },
                {
                    key: n["QPMtj"],
                    get: function() {
                        return n[d("b2f", "4zBg")](this["y"], this[d("b30", "d$Th")]) && (this[d("1fe", "Z*#m")][d("470", "&98m")](0), !0)
                    }
                },
                {
                    key: "moveRole",
                    value: function(t) {
                        if (n[d("b31", "m$jW")](d("b32", "xuC*"), n[d("b33", "30HP")])) return Boolean[d("8f", "qfqE")][d("b34", ")7lZ")][d("a69", "]DRy")](Reflect[d("8a8", "7WQB")](Boolean, [], (function() {}))),
                        !0;
                        t ? this[t]() : (this["body"][d("b35", "%LFB")](0), this["body"][d("b36", "30HP")](0))
                    }
                },
                {
                    key: "up",
                    value: function() {
                        this[d("b37", "30HP")][d("b38", "Z*#m")](0),
                        this[d("b39", "x$Zb")] || this[d("abe", "hVad")][d("b3a", "nedJ")]( - this[d("b3b", "5dtt")])
                    }
                },
                {
                    key: n[d("b3c", "4zBg")],
                    value: function() {
                        this[d("b3d", "]DRy")][d("b3e", "nedJ")](0),
                        this[d("b3f", "^AE%")] || this[d("859", "PQB4")][d("b40", "P%4l")](this[d("1fd", "7WQB")])
                    }
                },
                {
                    key: n["kRPkK"],
                    value: function() {
                        this[d("b41", "e%cj")][d("b42", "^AE%")](0),
                        this[d("b43", "P%4l")] || this[d("b44", "Yr1b")][d("b45", "m$jW")](n[d("b46", "tDVN")]( - this["speedX"], this[d("b47", "5dtt")]))
                    }
                },
                {
                    key: n[d("b48", "jum&")],
                    value: function() {
                        this[d("85d", "jQ0X")][d("b49", "(pLq")](0),
                        this["isMaxMoveX"] || this["body"][d("b4a", "^Eu9")](this[d("b4b", "^Eu9")])
                    }
                },
                {
                    key: n[d("b4c", "7WQB")],
                    value: function() {
                        this["isMinMoveY"] || this[d("b4d", "ZDnO")]["setVelocityY"]( - this[d("b4e", "qfqE")]),
                        this["isMinMoveX"] || this[d("85a", "S(PA")][d("b4f", ")7lZ")](n["uANdc"]( - this[d("b50", "(pLq")], this[d("b51", "*A)#")]))
                    }
                },
                {
                    key: n[d("b52", "Yr1b")],
                    value: function() {
                        this[d("b53", "Jgtc")] || this["body"][d("b54", "5dtt")](this[d("b55", "*A)#")]),
                        this[d("b56", "xuC*")] || this[d("b44", "Yr1b")][d("b57", "5dtt")]( - this[d("474", "Z*#m")] - this[d("b58", "30HP")])
                    }
                },
                {
                    key: n[d("b59", "5dtt")],
                    value: function() {
                        if (n[d("b5a", "jum&")](d("b5b", "%LFB"), n[d("b5c", "^AE%")])) {
                            if (n["eXBVF"](n[d("b5d", "0%7z")], "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect["construct"]) return ! 1;
                            if (Reflect[d("51a", "tDVN")][d("b5e", "o51H")]) return ! 1;
                            if (n[d("b5f", "P%4l")](n[d("b60", "]DRy")], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                            try {
                                return Boolean[d("14b", "Jgtc")]["valueOf"][d("5b8", "AI)w")](Reflect[d("b61", "%LFB")](Boolean, [], (function() {}))),
                                !0
                            } catch(t) {
                                return ! 1
                            }
                        } else this[d("1fa", "o#Hw")] || this[d("b62", "0%7z")]["setVelocityY"]( - this[d("b63", "xJ1F")]),
                        this[d("b64", "hVad")] || this["body"][d("b65", "9#sL")](this[d("b66", "AI)w")])
                    }
                },
                {
                    key: n[d("b67", "xuC*")],
                    value: function() {
                        if (n["NVcPm"](n["RBzRL"], n[d("b68", "30HP")])) return this["_role"][d("643", "2^0s")][d("b69", "y)Vp")];
                        this[d("b6a", "^Eu9")] || this["body"][d("b6b", "]DRy")](this["speedY"]),
                        this[d("b6c", "^AE%")] || this[d("abe", "hVad")]["setVelocityX"](this[d("b6d", "0tes")])
                    }
                },
                {
                    key: n[d("b6e", "7n#g")],
                    value: function(t) {
                        if (n["yJYMu"] !== n["qjPIv"]) this[d("b6f", "jQ0X")][d("b70", "AI)w")]["setText"](t),
                        this[d("b71", "o51H")] = 0,
                        this[d("b72", "jum&")][d("b73", "5dtt")]["visible"] || (this[d("b74", "PQB4")][d("b75", "Z*#m")][d("b76", "*gk(")](!0), this[d("b77", "xuC*")][d("b78", "S(PA")][d("b79", "bPML")](!0));
                        else {
                            var w = this;
                            this[d("55", "^AE%")][d("b7a", "x$Zb")]["update"](e, (function() {
                                w[d("b7b", "^Eu9")]["score"] += 3
                            }), this),
                            this[d("b7c", "5knQ")]["difficultyTimer"][d("9f5", "7n#g")](e, this[d("b7d", "Jgtc")], this),
                            this[d("478", "AI)w")][d("b7e", "U4xf")][d("b7f", "U4xf")](t),
                            this["dmger"][d("b80", "e%cj")]["update"](),
                            this[d("4c6", "5dtt")][d("b81", "*gk(")][d("b82", "tDVN")](e),
                            this["dmger"][d("b83", "x$Zb")]["update"](e),
                            this[d("96f", "2^0s")][d("b84", "5dtt")][d("769", "5knQ")](e, this[d("b85", "Yr1b")], this),
                            this["dmger"][d("b86", "nedJ")][d("b87", "x$Zb")](e, this[d("b88", "]DRy")], this),
                            this["setFollowing"](),
                            this[d("b89", ")7lZ")](),
                            this[d("b8a", "0%7z")][d("b8b", "y)Vp")](this[d("740", "P%4l")][d("b8c", "4zBg")], this[d("b8d", "*A)#")][d("b8e", "(@(7")], this[d("b8f", "5dtt")], void 0, this),
                            this[d("b90", "4zBg")]["overlap"](this[d("189", "d$Th")][d("b91", "^Eu9")], this[d("b92", "nedJ")][d("b93", "tDVN")], this[d("b94", "^AE%")], void 0, this)
                        }
                    }
                },
                {
                    key: n["byoFQ"],
                    value: function(t, e) {
                        var w = Math[d("b95", "hVad")](20 * n[d("b96", "xJ1F")](this["gameHeight"], 750)),
                        r = new Et(this[d("b97", "Jgtc")], "", {
                            backgroundCornerRadius: 20,
                            color: "#C22D38",
                            fontSize: "" ["concat"](w, "px"),
                            backgroundColor: n["JDnCm"],
                            backgroundColor2: n[d("b98", "xuC*")],
                            backgroundHorizontalGradient: !1,
                            padding: {
                                top: n[d("b99", "Z*#m")](w, 2),
                                left: 20,
                                right: 20,
                                bottom: 6
                            }
                        });
                        r[d("b9a", "qgiy")](.5, .5),
                        r[d("644", "#cwz")]["x"] = t,
                        r[d("b9b", "x$Zb")]["y"] = e;
                        var c = new Vt(this[d("a53", "9#sL")], 0, 10, 0, 0, 10, 0, 12511734);
                        c[d("b9c", "bPML")]["x"] = t,
                        c[d("644", "#cwz")]["y"] = e + 20,
                        r["setVisible"](!1),
                        c[d("b9d", "hVad")](!1),
                        this[d("b9e", "^AE%")](r),
                        this[d("b9f", "^Eu9")](c),
                        this[d("ba0", "o#Hw")] = {
                            text: r,
                            triangle: c
                        }
                    }
                },
                {
                    key: n[d("ba1", "jum&")],
                    value: function() {
                        this["bubble"][d("ba2", "e%cj")]["visible"] && (this[d("ba3", "^Eu9")][d("ba4", "^Eu9")][d("ba5", "2^0s")](!1), this[d("ba6", "&98m")][d("ba7", "qfqE")]["setVisible"](!1))
                    }
                },
                {
                    key: n["BZnfc"],
                    value: function(t) {
                        this[d("ba8", "qfqE")][d("ba9", "S(PA")]["visible"] && (this["timeBubble"] += t, n[d("baa", "%LFB")](this[d("bab", "4zBg")], this[d("bac", "nedJ")]) && (this["hiddenText"](), this["timeBubble"] = 0))
                    }
                }]),
                w
            } ();
            function Xt(t) {
                var n = {
                    tCFbJ: function(t, n) {
                        return t(n)
                    },
                    BZfcd: function(t, n) {
                        return t == n
                    },
                    pCysw: d("207", "&98m"),
                    iFody: d("bad", "(pLq"),
                    VlkDL: function(t, n) {
                        return t === n
                    },
                    GfEmx: "DELOx",
                    TJUcj: function(t, n) {
                        return t !== n
                    },
                    nopQg: d("bae", "4zBg"),
                    jzpoA: function(t, n, e) {
                        return t(n, e)
                    }
                },
                e = function() {
                    if (n[d("baf", "0%7z")](n["pCysw"], "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("51a", "tDVN")]) return ! 1;
                    if (Reflect["construct"]["sham"]) return ! 1;
                    if (n[d("bb0", "xuC*")] == ("undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                    try {
                        return Boolean[d("8f", "qfqE")][d("bb1", "7WQB")]["call"](Reflect["construct"](Boolean, [], (function() {}))),
                        !0
                    } catch(e) {
                        if (n["VlkDL"](n[d("bb2", "#cwz")], n["GfEmx"])) return ! 1;
                        var t = n[d("bb3", "y)Vp")](K, this)["constructor"];
                        _0x29e2c8 = Reflect[d("7c", "0tes")](a["a"], arguments, t)
                    }
                } ();
                return function() {
                    if (n[d("bb4", "0%7z")](n["nopQg"], n[d("bb5", ")7lZ")])) return t[d("bb6", "^AE%")](r[d("bb7", "5knQ")]),
                    t["onJump"]();
                    var w, r = n[d("bb8", "5knQ")](K, t);
                    if (e) {
                        var c = n[d("bb9", "(@(7")](K, this)[d("bba", "]DRy")];
                        w = Reflect[d("bbb", "U4xf")](r, arguments, c)
                    } else w = r[d("8b0", "PQB4")](this, arguments);
                    return n[d("bbc", "*gk(")](b, this, w)
                }
            }
            var Ft = function(t) {
                var n = {
                    ueRoQ: function(t, n, e) {
                        return t(n, e)
                    },
                    tPCJR: function(t, n) {
                        return t(n)
                    },
                    TuSMQ: function(t, n) {
                        return t(n)
                    },
                    YPWDA: function(t, n) {
                        return t === n
                    },
                    Bexyv: "wTwxB",
                    uifiY: d("bbd", "0%7z"),
                    HyNJK: function(t, n) {
                        return t * n
                    },
                    WTQKq: d("bbe", ")7lZ"),
                    KGDtO: function(t, n) {
                        return t(n)
                    },
                    FotPt: d("bbf", "Jgtc")
                };
                l(w, Phaser[d("bc0", "m$jW")][d("bc1", "30HP")]);
                var e = n[d("bc2", "*A)#")](Xt, w);
                function w(t, r, c) {
                    var i;
                    return n[d("bc3", "P%4l")](D, this, w),
                    (i = e[d("bc4", "tDVN")](this, t, 0, 0, r, c))["setOrigin"](0, 0),
                    i[d("bc5", "d$Th")] = new ht(n["tPCJR"](p, i)),
                    t[d("bc6", "d$Th")][d("987", "xJ1F")](p(i)),
                    i
                }
                return h(w, [{
                    key: n["FotPt"],
                    get: function() {
                        if (!n[d("bc7", "qgiy")](n[d("bc8", "bPML")], n[d("bc9", "xJ1F")])) return this["scene"][d("bcb", "qfqE")][d("bcc", "Jgtc")]["width"];
                        var t = n[d("bca", "PQB4")](K, this)[d("892", "4zBg")];
                        w = Reflect[d("bbb", "U4xf")](a["a"], arguments, t)
                    }
                },
                {
                    key: d("bcd", "o51H"),
                    get: function() {
                        if (n[d("bce", "5knQ")] === n[d("bcf", "ZDnO")]) return this[d("bd4", "qfqE")][d("bd5", "B20D")]["config"][d("bd6", "B20D")];
                        var e = Ot[this[d("55", "^AE%")][d("bd0", "B20D")][d("bd1", "*A)#")]],
                        w = Math["floor"](n["HyNJK"](Math["random"](), e[t][d("a48", "S(PA")])),
                        r = e[t][w];
                        this[d("aa", "(pLq")][d("bd2", "tDVN")][d("bd3", "x$Zb")](r)
                    }
                }]),
                w
            } ();
            function Wt(t) {
                var n = {
                    oylKo: function(t, n) {
                        return t == n
                    },
                    yMlWs: "undefined",
                    sKIBj: "function",
                    WbKup: function(t, n) {
                        return t(n)
                    },
                    TgpeJ: function(t, n, e) {
                        return t(n, e)
                    }
                },
                e = function() {
                    if (n[d("bd7", "jum&")](n[d("bd8", "^Eu9")], "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("90a", "(@(7")]) return ! 1;
                    if (Reflect[d("bd9", "o51H")][d("ada", "xJ1F")]) return ! 1;
                    if (n[d("bda", "qfqE")](n["sKIBj"], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                    try {
                        return Boolean[d("adc", "jum&")][d("bdb", "ZDnO")][d("20f", "%LFB")](Reflect["construct"](Boolean, [], (function() {}))),
                        !0
                    } catch(t) {
                        return ! 1
                    }
                } ();
                return function() {
                    var w, r = n[d("bdc", "@]mt")](K, t);
                    if (e) {
                        var c = n[d("bdd", "(pLq")](K, this)["constructor"];
                        w = Reflect[d("b5", "7n#g")](r, arguments, c)
                    } else w = r[d("48d", "#cwz")](this, arguments);
                    return n[d("bde", "7WQB")](b, this, w)
                }
            }
            var Zt = function(t) {
                var n = {
                    PpuKM: d("bdf", "nedJ"),
                    aUMbv: function(t, n) {
                        return t + n
                    },
                    Phumn: function(t, n, e) {
                        return t(n, e)
                    },
                    DiygU: function(t, n) {
                        return t !== n
                    },
                    vnugN: d("be0", "d$Th"),
                    JKewn: function(t, n) {
                        return t == n
                    },
                    KLcKr: d("be1", "Yr1b"),
                    YCawS: d("be2", "x$Zb"),
                    zJuhZ: function(t, n) {
                        return t === n
                    },
                    EYCQc: d("be3", "m$jW"),
                    DwAVN: "ngOnB",
                    UrSxk: function(t, n) {
                        return t !== n
                    },
                    HHuxI: d("be4", "Z*#m"),
                    BPSFr: d("be5", "nedJ"),
                    ZpvBf: "NNvZd",
                    iXzjv: function(t, n) {
                        return t * n
                    },
                    dWgHZ: function(t, n) {
                        return t(n)
                    },
                    rwRDU: function(t, n, e) {
                        return t(n, e)
                    },
                    TQjUP: d("563", "0tes"),
                    LDMMt: d("51d", "(@(7"),
                    JbKbn: d("be6", "2^0s"),
                    PPKcD: d("be7", "y)Vp")
                };
                l(w, Rt);
                var e = n[d("be8", ")7lZ")](Wt, w);
                function w(t, r, c) {
                    var i = n["PpuKM"][d("be9", "x$Zb")]("|"),
                    s = 0;
                    while (1) {
                        switch (i[s++]) {
                        case "0":
                            return O[d("bea", "U4xf")][d("7d6", ")7lZ")] = 260,
                            O[d("8a4", "4zBg")][d("beb", "qfqE")] = 170,
                            f["add"](O),
                            f[d("bec", "x$Zb")] = O,
                            f[d("bed", "5knQ")](n[d("bee", "ZDnO")](u, .85 * a), -20),
                            f[d("bef", "&98m")](),
                            f["playAnims"](o["anims"]),
                            f;
                        case "1":
                            var o = f[d("bf0", "hVad")][c],
                            a = o[d("bf1", "e%cj")],
                            u = o["offsetX"];
                            continue;
                        case "2":
                            f[d("b9c", "bPML")]["x"] = 392,
                            f[d("bf2", "Jgtc")]["y"] = 378,
                            f["design"][d("bf3", "]DRy")](a, o["bodyH"]),
                            f[d("bf4", "qgiy")][d("bf5", "d$Th")](u, o[d("bf6", "PQB4")]),
                            f["setDepth"](999),
                            f[d("bf7", "P%4l")] = c;
                            continue;
                        case "3":
                            var f;
                            continue;
                        case "4":
                            D(this, w),
                            (f = e["call"](this, t, r))["propUseing"] = !1,
                            f[d("bf8", "B20D")] = 15e3,
                            f["timeProp"] = 0,
                            f["roleNames"] = {
                                MengMeng: {
                                    textureKey: Z[d("bf9", "AI)w")],
                                    anims: ct["MM_SWIM"],
                                    animsProp: ct["MM_DJ_SWIM"],
                                    bodyW: 94,
                                    bodyH: 90,
                                    offsetX: 125,
                                    offsetY: 25
                                },
                                QiQi: {
                                    textureKey: Z[d("bfa", "*A)#")],
                                    anims: ct[d("bfb", "Jgtc")],
                                    animsProp: ct["QQ_DJ_SWIM"],
                                    bodyW: 82,
                                    bodyH: 90,
                                    offsetX: 135,
                                    offsetY: 30
                                },
                                TangSheng: {
                                    textureKey: Z["ROLE_TS_QIN"],
                                    anims: ct[d("bfc", "P%4l")],
                                    animsProp: ct[d("bfd", "]DRy")],
                                    bodyW: 88,
                                    bodyH: 88,
                                    offsetX: 120,
                                    offsetY: 30
                                }
                            };
                            continue;
                        case "5":
                            var O = new Ft(t, o[d("bfe", "jum&")]);
                            continue
                        }
                        break
                    }
                }
                return n["rwRDU"](h, w, [{
                    key: n["TQjUP"],
                    value: function(t) {
                        var r = {
                            uKMxB: function(t, e, w) {
                                return n[d("bff", "o51H")](t, e, w)
                            }
                        };
                        if (n["DiygU"](d("c00", "qgiy"), n[d("c01", "U4xf")])) return r[d("c02", "tDVN")](D, this, w),
                        e[d("9a3", "(pLq")](this, arguments);
                        this["textTimer"](t),
                        this[d("c03", ")7lZ")](t)
                    }
                },
                {
                    key: "useProp",
                    value: function() {
                        if (n[d("c04", "e%cj")](n[d("c05", "2^0s")], n[d("c06", "5dtt")])) {
                            if (n["JKewn"]("undefined", "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("ad9", "qgiy")]) return ! 1;
                            if (Reflect["construct"][d("c07", "Yr1b")]) return ! 1;
                            if (n["JKewn"](n[d("c08", "^AE%")], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                            try {
                                return Boolean[d("c09", "30HP")][d("c0a", "x$Zb")][d("1c6", "jum&")](Reflect[d("e9", "5dtt")](Boolean, [], (function() {}))),
                                !0
                            } catch(e) {
                                return ! 1
                            }
                        } else {
                            var t = this;
                            this[d("c0b", "jQ0X")] || (this[d("c0b", "jQ0X")] = !0, this[d("c0c", "nedJ")](0), this["golden"][d("c0d", "5dtt")](Phaser[d("c0e", "tDVN")][d("c0f", "^Eu9")]["ANIMATION_COMPLETE"], (function() {
                                t[d("c10", "tDVN")]["setVisible"](!1),
                                t[d("51d", "(@(7")](t["roleNames"][t[d("bf7", "P%4l")]][d("51f", "e%cj")])
                            })), this[d("c11", "nedJ")]["setVisible"](!0), this["golden"][d("5d9", "U4xf")]["play"](ct[d("c12", "0%7z")], !0))
                        }
                    }
                },
                {
                    key: n[d("c13", "y)Vp")],
                    value: function(t) {
                        var r;
                        if (n[d("c14", "@]mt")](n[d("c15", "%LFB")], n[d("c16", "9#sL")])) return D(this, w),
                        (r = e["call"](this, t))[d("c17", "hVad")] = {
                            fish: {
                                width: 166,
                                height: 62,
                                bodyW: 108,
                                bodyH: 35,
                                bodyOffsetX: 0,
                                bodyOffsetY: 15,
                                texture: L[d("c18", "qgiy")]
                            },
                            haiCao: {
                                width: 132,
                                height: 143,
                                bodyW: 85,
                                bodyH: 85,
                                bodyOffsetX: 25,
                                bodyOffsetY: 25,
                                texture: L[d("c19", "qfqE")]
                            },
                            wood: {
                                width: 152,
                                height: 92,
                                bodyW: 120,
                                bodyH: 45,
                                bodyOffsetX: 15,
                                bodyOffsetY: 15,
                                texture: L[d("c1a", "hVad")]
                            }
                        },
                        r[d("c1b", "5dtt")] = [0, 0, 0, 1, 1, 1, 1, 2, 2, 2],
                        r["background"] = a["a"],
                        r[d("c1c", "e%cj")](),
                        r;
                        this[d("c1d", "xuC*")][d("602", "x$Zb")][d("c1e", "@]mt")](),
                        this["_role"][d("c1f", "Yr1b")][d("c20", "@]mt")](t, !0)
                    }
                },
                {
                    key: n["JbKbn"],
                    value: function() {
                        if (!n["UrSxk"](n[d("c21", "7WQB")], n[d("c22", "0%7z")])) return e[d("9a3", "(pLq")](this, arguments);
                        var t = this;
                        this[d("c23", "o51H")][d("c24", "nedJ")](Phaser[d("c25", "%LFB")]["Events"]["ANIMATION_COMPLETE"], (function() {
                            if (n[d("c26", "Yr1b")](d("c27", "m$jW"), n["HHuxI"])) return Boolean[d("c28", "o51H")]["valueOf"][d("669", "m$jW")](Reflect[d("88", "P%4l")](Boolean, [], (function() {}))),
                            !0;
                            t[d("c29", "B20D")] = !1,
                            t[d("c2a", "4zBg")](999),
                            t[d("c2b", "o#Hw")][d("c2c", "jum&")](!1),
                            t["playAnims"](t[d("c2d", "7n#g")][t[d("c2e", "lTsN")]]["anims"])
                        })),
                        this["golden"][d("c2f", "o51H")](!0),
                        this[d("c30", "2^0s")][d("5ed", "@]mt")]["playReverse"](ct["GOLDEN"], !0)
                    }
                },
                {
                    key: "propUseTimer",
                    value: function(t) {
                        this["propUseing"] && (this[d("c31", "bPML")] += t, this[d("c32", "(pLq")] >= this[d("c33", "0%7z")] && (this[d("c34", "xJ1F")] = 0, this["propTimeout"]()))
                    }
                },
                {
                    key: n[d("c35", "Jgtc")],
                    value: function() {
                        var t = new Ft(this["scene"], Z[d("c36", "^Eu9")]);
                        t[d("c37", "jum&")](.5, .5),
                        t["design"][d("c38", "P%4l")] = 283,
                        t[d("c39", "S(PA")]["height"] = 272,
                        t["x"] = .5 * this[d("c1d", "xuC*")]["width"],
                        t["y"] = n[d("c3a", "@]mt")](.35, this[d("c3b", "hVad")][d("c3c", "e%cj")]),
                        t["setVisible"](!1),
                        this[d("532", "jum&")] = t,
                        this[d("c3d", "tDVN")](this[d("c3e", "5dtt")])
                    }
                }]),
                w
            } (),
            Ut = function() {
                var t = {
                    SHbzc: function(t, n, e) {
                        return t(n, e)
                    },
                    wxKfL: function(t, n) {
                        return t !== n
                    },
                    LgGas: d("c3f", "]DRy"),
                    pSwIK: function(t, n) {
                        return t - n
                    },
                    PJAsd: function(t, n, e) {
                        return t(n, e)
                    },
                    xApLX: "time",
                    oKsoe: d("c40", "bPML")
                };
                function n() {
                    t[d("c41", "AI)w")](D, this, n),
                    this[d("c42", "S(PA")] = 0,
                    this["lastTime"] = 0
                }
                return t[d("c43", "Z*#m")](h, n, [{
                    key: t[d("c44", "jum&")],
                    get: function() {
                        return ! t[d("c45", "*A)#")](t["LgGas"], t["LgGas"]) && Math["ceil"](t[d("c46", "#cwz")](this[d("c47", "Z*#m")], this["startTime"]))
                    }
                },
                {
                    key: t[d("c48", "x$Zb")],
                    value: function(t) {
                        0 === this[d("7ae", "9#sL")] && (this[d("c49", "7WQB")] = t),
                        this[d("c4a", "30HP")] = t
                    }
                }]),
                n
            } (),
            Jt = function() {
                var t = {
                    gGzEc: function(t, n) {
                        return t > n
                    },
                    zrBgM: function(t, n) {
                        return t >= n
                    },
                    mqYJl: function(t, n) {
                        return t !== n
                    },
                    cmVqE: function(t, n) {
                        return t !== n
                    },
                    Excai: d("c4b", "9#sL"),
                    kclJl: function(t, n, e) {
                        return t(n, e)
                    },
                    DlAod: "update",
                    nAIHX: "restart",
                    JbhDU: d("c4c", "7WQB"),
                    hlbFj: d("c4d", "y)Vp")
                };
                function n(e) {
                    var w = t["gGzEc"](arguments[d("c4e", "@]mt")], 1) && void 0 !== arguments[1] && arguments[1];
                    D(this, n),
                    this[d("c4f", "qfqE")] = 0,
                    this[d("c50", "x$Zb")] = !0,
                    this[d("c51", "Jgtc")] = 1e3,
                    this[d("c52", "jQ0X")] = e,
                    this[d("c53", "qgiy")] = !w
                }
                return t[d("c54", "e%cj")](h, n, [{
                    key: t[d("c55", "(@(7")],
                    value: function(n, e, w) {
                        this["isStop"] || (this[d("c56", "tDVN")] += n, t[d("c57", "jQ0X")](this[d("c58", "B20D")], this[d("c59", "9#sL")]) && (e[d("9db", ")7lZ")](w), this[d("c5a", "@]mt")] = 0))
                    }
                },
                {
                    key: t[d("c5b", "7n#g")],
                    value: function() {
                        this[d("c5c", "jum&")] = 0
                    }
                },
                {
                    key: t[d("c5d", "*gk(")],
                    value: function() {
                        if (t[d("c5e", ")7lZ")](d("c5f", "o#Hw"), "ztgOu")) return Boolean[d("c60", "PQB4")][d("c61", "y)Vp")][d("c62", "Jgtc")](Reflect[d("bbb", "U4xf")](Boolean, [], (function() {}))),
                        !0;
                        this[d("c63", "y)Vp")] = 0,
                        this[d("c64", "P%4l")] = !0
                    }
                },
                {
                    key: t["hlbFj"],
                    value: function() {
                        t[d("c65", "7n#g")](t[d("c66", "qfqE")], d("c67", "m$jW")) ? this[d("c68", "#cwz")] = !1 : this[d("c69", "jQ0X")][d("c6a", "jQ0X")] ? this[d("c6b", "@]mt")]["speedUpTimer"][d("c6c", "m$jW")]() : (this[d("c6d", "&98m")]["speedUping"] = !0, this[d("c6e", "%LFB")][d("c6f", "%LFB")][d("c70", "S(PA")] *= 2, this[d("c71", "30HP")][d("c72", "@]mt")][d("c73", "qfqE")] /= 2, this[d("c74", "]DRy")](), this["dmger"][d("c75", "Z*#m")][d("c76", "hVad")]())
                    }
                }]),
                n
            } ();
            function St(t) {
                var n = {
                    ciMlt: "Linear",
                    NvYud: function(t, n) {
                        return t == n
                    },
                    egCnP: d("c77", "0%7z"),
                    HfJzU: function(t, n) {
                        return t == n
                    },
                    jlcIF: d("c78", "2^0s"),
                    qjMRn: function(t, n) {
                        return t !== n
                    },
                    pjcGy: d("c79", "0%7z"),
                    Gmkvo: function(t, n) {
                        return t(n)
                    },
                    RFxVz: "QPNpJ",
                    ioUjP: function(t, n, e) {
                        return t(n, e)
                    }
                },
                e = function() {
                    if (n[d("c7a", "AI)w")](n["egCnP"], "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("c7b", "ZDnO")]) return ! 1;
                    if (Reflect[d("4a1", "d$Th")][d("ada", "xJ1F")]) return ! 1;
                    if (n["HfJzU"](n["jlcIF"], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                    try {
                        if (!n[d("c7c", "U4xf")](n[d("c7d", "hVad")], n[d("c7e", "(pLq")])) return Boolean[d("c84", "y)Vp")][d("4a5", "jum&")][d("20f", "%LFB")](Reflect[d("c85", "m$jW")](Boolean, [], (function() {}))),
                        !0;
                        var t = this;
                        this[d("c7f", "xJ1F")] || (this[d("85a", "S(PA")][d("c80", "*gk(")](!1), this["scene"][d("c81", "5dtt")][d("b9e", "^AE%")]({
                            targets: this,
                            props: {
                                scale: {
                                    value: 0,
                                    ease: n[d("c82", "tDVN")]
                                },
                                angle: {
                                    value: 360,
                                    ease: d("c83", "(pLq")
                                }
                            },
                            ease: n["ciMlt"],
                            duration: 500,
                            repeat: 0,
                            onComplete: function() {
                                return t["destroy"]()
                            }
                        }))
                    } catch(e) {
                        return ! 1
                    }
                } ();
                return function() {
                    var w, r = n["Gmkvo"](K, t);
                    if (e) {
                        if (!n[d("c86", "xuC*")](d("c87", "0%7z"), n["RFxVz"])) return this[d("c88", "e%cj")];
                        var c = K(this)["constructor"];
                        w = Reflect[d("1f1", "xuC*")](r, arguments, c)
                    } else w = r["apply"](this, arguments);
                    return n[d("c89", "tDVN")](b, this, w)
                }
            }
            var It = function() {
                var t = {
                    YoqAr: function(t, n, e) {
                        return t(n, e)
                    }
                };
                function n() {
                    t[d("c8a", "B20D")](D, this, n),
                    this["isStop"] = !1,
                    this[d("c8b", "x$Zb")] = !1,
                    this["_score"] = 0
                }
                return t[d("c8c", "0tes")](h, n, [{
                    key: d("c8d", "(@(7"),
                    get: function() {
                        if (d("c8e", "(@(7") === d("c8f", "jQ0X")) return this[d("c90", "hVad")];
                        this[d("c91", ")7lZ")] += this[d("c92", "@]mt")]
                    },
                    set: function(t) {
                        this[d("c93", "7n#g")] = t,
                        this[d("c94", "jum&")][d("c95", "0%7z")](t)
                    }
                }]),
                n
            } (),
            Nt = function(t) {
                var n = {
                    ARIWW: function(t, n, e) {
                        return t(n, e)
                    },
                    NhiLF: function(t, n) {
                        return t(n)
                    },
                    rvLew: function(t, n) {
                        return t(n)
                    },
                    YfcLL: function(t, n) {
                        return t !== n
                    },
                    WXXOU: d("c96", "U4xf"),
                    VPBSX: function(t, n) {
                        return t(n)
                    },
                    BaDtX: "撞到木头",
                    SAhZM: "撞到鲤鱼",
                    qcURC: "hitLiYu",
                    XwnJc: function(t, n) {
                        return t(n)
                    },
                    UYXGS: d("c97", "nedJ"),
                    GrIdz: "hitHaiCao",
                    lPOHu: function(t, n) {
                        return t === n
                    },
                    LiYyu: "YtmsJ",
                    LEqmV: function(t, n) {
                        return t > n
                    },
                    gbKwQ: d("c98", "(pLq"),
                    sQRaU: "累计成绩: ",
                    WgkBQ: d("c99", "&98m"),
                    dqSgw: function(t, n, e) {
                        return t(n, e)
                    },
                    myYyb: d("c9a", "7n#g"),
                    kZORm: function(t, n) {
                        return t * n
                    },
                    XbyqJ: function(t, n) {
                        return t !== n
                    },
                    kGGKT: "QIN",
                    MrfXr: "end",
                    zwzOm: "qSYLH",
                    IxsdR: "OoVVh",
                    MMrIR: function(t, n) {
                        return t / n
                    },
                    bFXDw: function(t, n) {
                        return t >= n
                    },
                    hWFVn: function(t, n) {
                        return t - n
                    },
                    BsOfA: d("b26", "hVad"),
                    vrjRf: function(t, n, e, w, r) {
                        return t(n, e, w, r)
                    },
                    ZJvRv: function(t, n) {
                        return t === n
                    },
                    jSLIS: d("c9b", "d$Th"),
                    SVfaE: function(t, n, e) {
                        return t(n, e)
                    },
                    fBxRa: d("c9c", "m$jW"),
                    dTMYh: d("c9d", "7WQB"),
                    rnuDQ: "stopGame",
                    hhxct: d("c9e", "(pLq"),
                    sAXqW: d("c9f", "@]mt"),
                    fklKj: d("ca0", "S(PA"),
                    WkVti: d("ca1", "o#Hw")
                };
                n[d("ca2", "lTsN")](l, r, st);
                var e, w = n[d("ca3", "d$Th")](St, r);
                function r() {
                    var t;
                    return n["ARIWW"](D, this, r),
                    (t = w["call"](this, {
                        key: F[d("ca4", "0tes")]
                    }))[d("ca5", "7n#g")] = 200,
                    t[d("ca6", "o51H")] = 4,
                    t["initSpeed"] = 0,
                    t[d("ca7", "]DRy")] = 0,
                    t
                }
                return h(r, [{
                    key: "updateJoystickState",
                    value: function() {
                        if (!n[d("ca8", "*A)#")](n[d("ca9", "Jgtc")], "RkdDp")) {
                            var t, e = n["NhiLF"](K, r);
                            if (c) {
                                var w = n[d("cb1", "&98m")](K, this)["constructor"];
                                t = Reflect[d("893", "9#sL")](e, arguments, w)
                            } else t = e["apply"](this, arguments);
                            return n[d("cb2", "y)Vp")](b, this, t)
                        }
                        var r = "";
                        for (var c in this[d("caa", "Yr1b")][d("cab", "qgiy")]) this[d("cac", "xJ1F")][d("cad", "xuC*")][c][d("cae", "tDVN")] && (r += c);
                        this[d("c6d", "&98m")][d("caf", "9#sL")][d("cb0", "o#Hw")](r)
                    }
                },
                {
                    key: d("cb3", "Jgtc"),
                    value: function(t, e) {
                        switch (e[d("cb4", "o51H")]) {
                        case L["QIN_MT"]:
                            if (n[d("cb5", "jQ0X")](X, n[d("cb6", "d$Th")]), this["dmger"][d("cb7", "&98m")]["propUseing"]) return;
                            return this["sound"][d("cb8", "nedJ")](Y[d("cb9", "7n#g")]),
                            this[d("cba", "nedJ")](d("cbb", "B20D")),
                            void this[d("cbc", "%LFB")](e);
                        case L[d("cbd", "hVad")] : return n[d("cbe", "Z*#m")](X, n["SAhZM"]),
                            this["sound"][d("86a", "hVad")](Y[d("cbf", "%LFB")]),
                            this["say"](n[d("cc0", "y)Vp")]),
                            e["destroy"](),
                            void(this["dmger"][d("cc1", "0%7z")] += 6);
                        case L[d("cc2", "0tes")] : if (n["XwnJc"](X, n[d("cc3", "4zBg")]), this["dmger"][d("cc4", "5knQ")]["propUseing"]) return;
                            if (this[d("cc5", "^AE%")][d("cc6", "ZDnO")](Y[d("cc7", "ZDnO")]), this[d("cc8", "9#sL")](n["GrIdz"]), e["destroy"](), n["lPOHu"](0, this[d("cc9", "7n#g")]["score"])) return;
                            this["dmger"][d("cca", "P%4l")] -= 3
                        }
                    }
                },
                {
                    key: n[d("ccb", "d$Th")],
                    value: function() {
                        var t = {
                            ZKYYU: function(t, n) {
                                return t !== n
                            },
                            IxCOo: function(t, n) {
                                return t > n
                            },
                            PILqe: function(t, n) {
                                return t + n
                            },
                            RdCOt: function(t, n) {
                                return t === n
                            },
                            bkPQp: n[d("ccc", "%LFB")],
                            iKWPN: function(t, e) {
                                return n[d("ccd", "0tes")](t, e)
                            }
                        };
                        if (n[d("cce", "Z*#m")] !== n[d("ccf", "S(PA")]) return t["iKWPN"](this["width"], this[d("cfc", ")7lZ")]);
                        var e = this;
                        this[d("cd0", "PQB4")][d("cd1", "Jgtc")]["propUseing"] || this["dmger"][d("c68", "#cwz")] || this[d("cd2", "#cwz")][d("cd3", "Jgtc")][d("cd4", "PQB4")]((function(n) {
                            var w = {
                                nqFap: function(n, e) {
                                    return t[d("cd5", "o51H")](n, e)
                                },
                                tvzvw: function(n, e) {
                                    return t["IxCOo"](n, e)
                                },
                                nTqnk: function(n, e) {
                                    return t[d("cd6", "qgiy")](n, e)
                                },
                                qHUnU: function(t, n) {
                                    return t - n
                                }
                            };
                            if (t["RdCOt"](d("cd7", "@]mt"), t["bkPQp"])) {
                                var r = {
                                    lcptR: function(t, n) {
                                        return w[d("cd8", "o51H")](t, n)
                                    },
                                    TcsLt: function(t, n) {
                                        return w[d("cd9", "Z*#m")](t, n)
                                    },
                                    LXOzk: function(t, n) {
                                        return t * n
                                    },
                                    gjjlK: function(t, n) {
                                        return w[d("cda", "%LFB")](t, n)
                                    },
                                    vHfME: function(t, n) {
                                        return t < n
                                    },
                                    pWurq: function(t, n) {
                                        return w[d("cdb", "7WQB")](t, n)
                                    }
                                },
                                c = this,
                                i = this[d("b7b", "^Eu9")][d("cdc", "qfqE")]["getChildren"](),
                                s = this[d("cdd", "o51H")][d("cde", "o#Hw")],
                                o = 0;
                                Phaser[d("285", "*gk(")][d("cdf", "(pLq")](i, (function(t) {
                                    var n = t;
                                    if (n[d("ce0", "jum&")] === Z[d("ce1", "o51H")] && r["lcptR"](3, o) && !n[d("ce2", "(@(7")] && !r[d("ce3", "S(PA")](n["x"], r[d("ce4", "0%7z")](1.2, r[d("ce5", "o#Hw")](s[d("ce6", ")7lZ")], s[d("ce7", "jum&")])))) if (r[d("ce8", "5dtt")](n["x"], s["x"])) n[d("ac3", "m$jW")][d("ce9", "e%cj")](0);
                                    else {
                                        var e = r["pWurq"](s[d("cea", "*A)#")], n[d("ceb", "#cwz")]);
                                        r[d("cec", "5knQ")](e, c[d("ced", "m$jW")]) ? (n[d("cee", "^Eu9")][d("cef", "(@(7")](n[d("cf0", "x$Zb")][d("cf1", "o#Hw")]), o++) : e < -c[d("cf2", "0tes")] ? (n["body"][d("ce9", "e%cj")]( - n[d("cf3", "9#sL")]["speedY"]), o++) : n[d("1fb", "jum&")][d("cf4", "U4xf")](0)
                                    }
                                }), this)
                            } else e[d("c71", "30HP")]["domScene"][d("4c8", "AI)w")](n[d("cf5", "Yr1b")] || 0),
                            n["used"] ? (e["dmger"][d("cf6", "*A)#")]["useProp"](), e[d("4bc", "d$Th")][d("cf7", "]DRy")](Y[d("cf8", "x$Zb")]), e[d("4ba", "7WQB")][d("1b2", "hVad")][d("cf9", "@]mt")]()) : e[d("96f", "2^0s")][d("cfa", "0%7z")][d("cfb", "bPML")]()
                        }))
                    }
                },
                {
                    key: d("cfd", "qgiy"),
                    value: function(t) {
                        var e = {
                            dsBks: n["sQRaU"]
                        };
                        n["YfcLL"](n[d("cfe", "jQ0X")], d("cff", "*A)#")) ? (n[d("d00", "PQB4")](X, "onConfirm", t), this[d("4c6", "5dtt")][d("ac5", "*gk(")] = new Zt(this, this[d("c6d", "&98m")]["background"], t), this[d("c71", "30HP")][d("d01", "9#sL")] = new Bt(this, this[d("c69", "jQ0X")][d("d02", "AI)w")]), this[d("d03", "hVad")]["duration"] = new Ut, this[d("a76", "*gk(")][d("d04", "(@(7")] = new Jt(1e3, !0), this[d("d05", "B20D")] = this[d("30f", "U4xf")][d("d02", "AI)w")][d("d06", "(pLq")], this[d("d07", "xJ1F")] = this[d("d08", "bPML")][d("d09", "#cwz")]["interval"], this["scene"]["resume"]()) : this[d("7a7", "(pLq")][d("d0a", "P%4l")](e[d("d0b", "#cwz")][d("57c", "9#sL")](t))
                    }
                },
                {
                    key: n["dTMYh"],
                    value: function() {
                        this[d("30f", "U4xf")]["closeed"] || (this["resetJoyStick"](), this[d("a3", "qgiy")][d("d0c", "jQ0X")](Y[d("d0d", "*gk(")]), this["dmger"]["isStop"] = !1, this[d("d08", "bPML")][d("d0e", "nedJ")] && this[d("740", "P%4l")][d("d0f", "e%cj")][d("480", "0tes")](), this[d("478", "AI)w")][d("d10", "^AE%")] && this["dmger"][d("d11", "Z*#m")][d("d12", "Jgtc")](), this["dmger"][d("d13", "9#sL")] = null, this[d("d14", "U4xf")](n["myYyb"]), this["scene"][d("d15", "(pLq")]())
                    }
                },
                {
                    key: d("d16", "(@(7"),
                    value: function(t) {
                        var e = Ot[this[d("d17", "jum&")]["role"][d("d18", "B20D")]],
                        w = Math[d("b95", "hVad")](n["kZORm"](Math["random"](), e[t]["length"])),
                        r = e[t][w];
                        this[d("d19", "e%cj")][d("b83", "x$Zb")][d("d1a", "Jgtc")](r)
                    }
                },
                {
                    key: n[d("d1b", "5dtt")],
                    value: function(t) {
                        this["dmger"]["isStop"] = !0,
                        this["dmger"]["deadFloating"] = t,
                        this["dmger"][d("d1c", "jum&")] && this[d("cac", "xJ1F")][d("d1d", "qgiy")]["stop"](),
                        this[d("d1e", "@]mt")](),
                        this["$content"][d("d1f", "^AE%")]["onGameOver"]({
                            score: this[d("c6e", "%LFB")][d("d20", "m$jW")],
                            role: this[d("282", "(@(7")]["role"][d("d21", "0tes")],
                            playTime: this[d("aa", "(pLq")][d("d22", "^Eu9")]["time"]
                        }),
                        this["scene"][d("d23", "7n#g")]()
                    }
                },
                {
                    key: n[d("d24", "%LFB")],
                    value: function() {
                        var t = {
                            OLzFf: function(t, n) {
                                return t(n)
                            },
                            xKJPJ: d("d25", "7WQB")
                        };
                        if (n[d("d26", "o#Hw")](d("d27", "qgiy"), d("d28", ")7lZ"))) this[d("d29", "%LFB")](e);
                        else {
                            var e = this;
                            if (!this[d("b7c", "5knQ")]["domScene"]) {
                                var c = new Dt(this);
                                this[d("746", "]DRy")]["domScene"] = c,
                                this[d("b7c", "5knQ")][d("d2a", "Jgtc")][d("d2b", "5dtt")] = function() {
                                    if (d("d2c", "tDVN") === t["xKJPJ"]) return e["onPropClick"]();
                                    var n = t["OLzFf"](K, this)[d("d2d", "(pLq")];
                                    w = Reflect[d("8a8", "7WQB")](r, arguments, n)
                                }
                            }
                        }
                    }
                },
                {
                    key: n[d("d2e", "Yr1b")],
                    value: (e = P(z[d("d2f", "^AE%")]((function t() {
                        var e, w, r = {
                            sKSno: function(t, e) {
                                return n["XbyqJ"](t, e)
                            },
                            VkiuG: n[d("d30", "y)Vp")],
                            bPKCP: function(t, n) {
                                return t === n
                            },
                            sVmBS: n[d("d31", "*A)#")]
                        },
                        c = this;
                        return z[d("d32", "0%7z")]((function(t) {
                            for (;;) switch (t[d("d33", "xJ1F")] = t["next"]) {
                            case 0:
                                if (this["$content"]["bridgeQin"][d("d34", "d$Th")]) {
                                    t[d("33b", "30HP")] = 5;
                                    break
                                }
                                return e = new dt(this, n[d("d35", "AI)w")]),
                                this[d("d36", "Z*#m")]["bridgeQin"]["_listenEnd"] = function() {
                                    if (r[d("d37", "ZDnO")](r[d("d38", "bPML")], r[d("d39", "0%7z")])) {
                                        this[d("cac", "xJ1F")][d("d3a", "qfqE")][d("d3b", "0%7z")](),
                                        this[d("d3c", "y)Vp")][d("d3d", "d$Th")][d("d3e", "9#sL")]();
                                        var t = this[d("d3c", "y)Vp")][d("d3f", "#cwz")][d("d40", "#cwz")]();
                                        Phaser["Actions"][d("d41", "U4xf")](t, (function(t) {
                                            t["bingUnfreeze"]()
                                        }), this),
                                        this[d("cac", "xJ1F")]["terracottas"][d("d42", "xJ1F")] = !1
                                    } else c[d("a76", "*gk(")]["closeed"] || (c["dmger"][d("d43", "&98m")] = !0, e[d("d44", "(pLq")](), c[d("c6e", "%LFB")][d("d2a", "Jgtc")][d("8e8", "hVad")](), c["onEndGame"](d("d45", "PQB4")))
                                },
                                t[d("2ed", "(@(7")] = 5,
                                e[d("d46", "Jgtc")]();
                            case 5:
                                (w = new ft(this))["onConfirm"] = function(t) {
                                    return c["onChooseRole"](t)
                                },
                                this["$content"][d("d47", ")7lZ")][d("d48", "x$Zb")] = function() {
                                    return c["onResume"]()
                                },
                                this[d("d49", "5knQ")][d("d4a", "(pLq")]["_listenEnd"] = function() {
                                    var n = {
                                        JSAkK: function(t, n) {
                                            return r["bPKCP"](t, n)
                                        },
                                        xnljl: r["sVmBS"]
                                    };
                                    c["dmger"][d("d4b", "Z*#m")] || (c["dmger"][d("d4c", "PQB4")] = !0, c[d("d4d", "x$Zb")](d("d4e", "^AE%"), (function() {
                                        if (!n[d("d4f", "ZDnO")](n[d("d50", "2^0s")], n[d("d51", "*gk(")])) return t[d("d52", "9#sL")]();
                                        w["remove"](),
                                        c["dmger"]["domScene"]["remove"]()
                                    })))
                                };
                            case 9:
                            case n[d("d53", "Z*#m")] : return t[d("d54", "P%4l")]()
                            }
                        }), t, this)
                    }))),
                    function() {
                        return e[d("d55", "ZDnO")](this, arguments)
                    })
                },
                {
                    key: n[d("d56", "(pLq")],
                    value: function() {
                        var t = this["dmger"]["background"][d("d57", "%LFB")],
                        e = this[d("189", "d$Th")][d("d58", "4zBg")]["interval"],
                        w = this[d("d59", "y)Vp")] * this[d("d5a", "2^0s")],
                        r = n[d("d5b", "o#Hw")](this[d("d5c", "*gk(")], this[d("d5d", "B20D")]);
                        if (! (n["bFXDw"](t, w) || e <= r)) {
                            var c = n["hWFVn"](w, this[d("d5e", "30HP")]),
                            i = this[d("d5f", "^Eu9")] - r,
                            s = n[d("d60", "d$Th")](c, this["happyTime"]),
                            o = n[d("d61", "9#sL")](i, this[d("d62", "x$Zb")]);
                            this[d("d08", "bPML")][d("d63", "Z*#m")][d("d64", "4zBg")] += s,
                            this["dmger"][d("d65", "o#Hw")][d("35e", "jum&")] -= o
                        }
                    }
                },
                {
                    key: d("d66", "jum&"),
                    value: function() {
                        n["XwnJc"](X, "" ["concat"](F["QIN"], " init")),
                        this[d("b92", "nedJ")] = new It;
                        var t = this[d("d67", "7n#g")]()["on"](n[d("d68", "lTsN")], this[d("d69", "qfqE")], this);
                        this[d("af", ")7lZ")][d("d6a", "hVad")] = t[d("d6b", "o51H")]()
                    }
                },
                {
                    key: n[d("d6c", "30HP")],
                    value: function(t) {
                        n[d("d6d", "x$Zb")]("KdOzP", n[d("d6e", "7n#g")]) ? (X("" [d("d6f", "nedJ")](F["QIN"], " create")), this["sound"][d("d70", "e%cj")](Y["BGM_QIN"]) || this[d("d71", "30HP")][d("d72", "m$jW")](Y[d("d73", "AI)w")], {
                            loop: !0
                        }), this[d("b7c", "5knQ")]["bgm"] = this["sound"][d("d74", "xJ1F")](Y[d("d75", "30HP")]), this[d("cdd", "o51H")]["background"] = new pt(this, L[d("d76", "%LFB")]), this[d("d77", "hVad")](), this[d("4c6", "5dtt")][d("d78", "B20D")][d("d79", "e%cj")](t[d("d7a", "7n#g")] || 0), this[d("30f", "U4xf")]["domScene"][d("d7b", "30HP")](t["qszAmount"] || 0), this[d("8a1", "U4xf")][d("d7c", "*A)#")](), this[d("d7d", "Yr1b")]()) : n["vrjRf"](w, t, r, e, D)
                    }
                },
                {
                    key: n[d("d7e", "m$jW")],
                    value: function(t, n) {
                        this["dmger"][d("d7f", "e%cj")][d("b7f", "U4xf")](n, this["increaseDifficulty"], this),
                        this["dmger"][d("d80", "7WQB")][d("769", "5knQ")](t),
                        this[d("189", "d$Th")][d("d81", "U4xf")]["update"](),
                        this[d("c6e", "%LFB")][d("d82", "&98m")][d("d83", "(pLq")](n),
                        this["dmger"][d("d84", "U4xf")][d("d85", "lTsN")](n),
                        this[d("d86", "30HP")](),
                        this["physics"][d("d87", "^Eu9")](this["dmger"][d("479", ")7lZ")], this[d("189", "d$Th")][d("d88", "S(PA")], this[d("d89", "hVad")], void 0, this)
                    }
                }]),
                r
            } ();
            function Yt(t) {
                var n = {
                    bwGug: function(t, n) {
                        return t(n)
                    },
                    aRMlu: function(t, n) {
                        return t == n
                    },
                    KNywA: "undefined",
                    HiHuQ: function(t, n) {
                        return t !== n
                    },
                    JIwCp: d("d8a", "B20D"),
                    TCfmz: d("ad6", "U4xf"),
                    CeYQy: d("d8b", "xJ1F"),
                    diLOB: function(t, n, e) {
                        return t(n, e)
                    }
                },
                e = function() {
                    var w = {
                        UdkHb: function(t, e) {
                            return n[d("d8c", "P%4l")](t, e)
                        },
                        dLQoS: function(t, e) {
                            return n[d("d8d", "^Eu9")](t, e)
                        },
                        YQfJw: n["KNywA"]
                    };
                    if (n[d("d8e", "4zBg")]("xpzSO", n["JIwCp"])) {
                        if (n["aRMlu"](d("d8f", "5dtt"), "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("208", "AI)w")]) return ! 1;
                        if (Reflect[d("d90", "4zBg")][d("d91", "2^0s")]) return ! 1;
                        if (n[d("d92", "nedJ")] == ("undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                        try {
                            if (d("d93", "tDVN") === n["CeYQy"]) return Boolean[d("518", "7n#g")]["valueOf"][d("d94", "jQ0X")](Reflect[d("24d", "(pLq")](Boolean, [], (function() {}))),
                            !0;
                            var c, i = w[d("d95", "nedJ")](K, t);
                            if (e) {
                                var s = K(this)[d("4a7", "xJ1F")];
                                c = Reflect[d("a31", "jQ0X")](i, arguments, s)
                            } else c = i[d("48d", "#cwz")](this, arguments);
                            return b(this, c)
                        } catch(o) {
                            return ! 1
                        }
                    } else {
                        if (w["dLQoS"](w[d("d96", "S(PA")], "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("88", "P%4l")]) return ! 1;
                        if (Reflect[d("1f1", "xuC*")][d("d97", "lTsN")]) return ! 1;
                        if (w["dLQoS"]("function", "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                        try {
                            return Boolean[d("d98", "e%cj")][d("9b9", "%LFB")][d("18c", "P%4l")](Reflect[d("88", "P%4l")](Boolean, [], (function() {}))),
                            !0
                        } catch(a) {
                            return ! 1
                        }
                    }
                } ();
                return function() {
                    var w, r = n[d("d99", "jQ0X")](K, t);
                    if (e) {
                        var c = n[d("d9a", "lTsN")](K, this)[d("d9b", "AI)w")];
                        w = Reflect["construct"](r, arguments, c)
                    } else w = r[d("d9c", "U4xf")](this, arguments);
                    return n[d("d9d", "5knQ")](b, this, w)
                }
            }
            var Gt = function(t) {
                var n = {
                    luEFO: function(t, n) {
                        return t <= n
                    },
                    icWqp: function(t, n) {
                        return t === n
                    },
                    NySvN: d("d9e", "(@(7"),
                    vBxHi: function(t, n) {
                        return t !== n
                    },
                    sLuLp: d("d9f", "5knQ"),
                    VAxKX: function(t, n) {
                        return t(n)
                    },
                    xfAiX: d("da0", "xuC*"),
                    haiAd: function(t, n, e) {
                        return t(n, e)
                    },
                    Qnqnc: function(t, n, e) {
                        return t(n, e)
                    },
                    KVFJN: "create"
                };
                n[d("da1", "30HP")](l, w, st);
                var e = n["VAxKX"](Yt, w);
                function w() {
                    if (!n[d("da2", "m$jW")](n[d("da3", "(pLq")], d("da4", "Yr1b"))) return D(this, w),
                    e[d("8e0", "5dtt")](this, {
                        key: F[d("da8", "(@(7")]
                    });
                    t[d("da5", "m$jW")] = null,
                    n[d("da6", "d$Th")](t[d("da7", "5knQ")], 0) && (t["invalidCloak"](), t["cloakDurable"] = t["cloakTotalDurable"])
                }
                return n[d("da9", "hVad")](h, w, [{
                    key: n[d("daa", "Jgtc")],
                    value: function() {
                        if (n[d("dab", "4zBg")](n["sLuLp"], n[d("dac", "9#sL")])) return Boolean["prototype"][d("dad", "tDVN")]["call"](Reflect["construct"](Boolean, [], (function() {}))),
                        !0;
                        n["VAxKX"](X, "" [d("4e8", "ZDnO")](F[d("503", "^AE%")], n["xfAiX"])),
                        this[d("dae", "7n#g")]()
                    }
                }]),
                w
            } (),
            _t = function() {
                var t = {
                    SZRyg: function(t, n) {
                        return t !== n
                    },
                    cXQnP: d("daf", "0%7z"),
                    wpzSw: d("db0", "@]mt"),
                    LTPaA: "div",
                    SFxMF: "100%",
                    KSRba: d("920", "d$Th"),
                    aFTrB: d("db1", "^Eu9"),
                    JitRU: d("db2", "jum&"),
                    ZrCpn: function(t, n) {
                        return t !== n
                    },
                    eHecH: "SncMN",
                    aoDrj: d("67f", "^AE%"),
                    AqYMK: "url(",
                    jLCfo: d("db3", "bPML"),
                    fkHfB: d("db4", "Z*#m"),
                    HoSug: d("db5", "*gk("),
                    hwhnT: function(t, n) {
                        return t == n
                    },
                    sImJV: "undefined",
                    rukVV: function(t, n) {
                        return t === n
                    },
                    dWGYo: d("db6", "30HP"),
                    tDsIG: d("db7", "4zBg"),
                    tJBsY: function(t, n) {
                        return t !== n
                    },
                    PXswn: "ZFgwM",
                    tNkqk: d("db8", "bPML"),
                    glfyA: d("db9", "x$Zb"),
                    kMpYP: d("dba", "2^0s"),
                    XGahk: d("dbb", "AI)w"),
                    TWmXd: "冰冻扇",
                    cJSZO: d("dbc", "7n#g"),
                    DydnY: d("dbd", "@]mt"),
                    qeZbm: d("dbe", "PQB4"),
                    bEKNe: d("dbf", "bPML"),
                    EqGpn: function(t, n) {
                        return t(n)
                    },
                    nOHCG: d("dc0", ")7lZ"),
                    iNWrI: d("dc1", "2^0s"),
                    ShlgP: d("dc2", "m$jW"),
                    ESjOM: function(t, n) {
                        return t === n
                    },
                    vplWx: d("dc3", "AI)w"),
                    SOXLa: "baseUrl",
                    jmZHU: "createScoreBlock",
                    ZljJq: d("dc4", "qgiy"),
                    qWxCd: d("dc5", "(pLq"),
                    TYBUY: d("dc6", "jum&"),
                    mTTeT: d("dc7", "(pLq"),
                    MkrrS: "onPropClick"
                };
                function n(e) {
                    if (!t[d("dc8", "7n#g")](t[d("dc9", "Yr1b")], t[d("dca", "jQ0X")])) return ! 1;
                    D(this, n),
                    this[d("19c", "y)Vp")] = e;
                    var w = new ut(e, t["LTPaA"], {
                        width: t[d("dcb", "AI)w")],
                        height: "100%",
                        display: t[d("dcc", "hVad")],
                        padding: 0,
                        margin: 0,
                        position: t["aFTrB"],
                        left: 0,
                        top: 0,
                        overflow: d("dcd", "&98m"),
                        pointerEvents: t[d("dce", "qfqE")],
                        zIndex: 10
                    },
                    !0),
                    r = this[d("782", "PQB4")](),
                    c = this[d("dcf", "@]mt")](S[d("dd0", "o51H")], 40, 35),
                    i = this["createProp"](S["PROP_BDS"], 40, 175);
                    w[d("dd1", "x$Zb")](r),
                    w["add"](c[d("dd2", "&98m")]),
                    w["add"](i["propBox"]),
                    this[d("4aa", "5dtt")] = {
                        box: c[d("dd3", "qfqE")],
                        num: c["propNum"]
                    },
                    this[d("dd4", "e%cj")] = {
                        box: i["propBox"],
                        num: i["propNum"]
                    },
                    this[d("6ae", "m$jW")] = w
                }
                return h(n, [{
                    key: t[d("dd5", "(pLq")],
                    get: function() {
                        if (!t[d("dd6", "o#Hw")](d("dd7", "*A)#"), t["eHecH"])) return this[d("dd8", "*A)#")][d("dd9", "5knQ")][d("dda", "d$Th")][d("ddb", "nedJ")];
                        this["curScore"][d("7b7", "5knQ")]("当前成绩: " [d("6c2", "B20D")](n))
                    }
                },
                {
                    key: t["jmZHU"],
                    value: function() {
                        var n = "" [d("ddc", "jum&")](this[d("9e8", "hVad")], t[d("ddd", "&98m")])[d("722", "lTsN")](_[d("dde", "(pLq")]),
                        e = this[d("500", "5knQ")],
                        w = new ut(e, t["LTPaA"], {
                            width: 657,
                            height: 75,
                            backgroundImage: t["AqYMK"][d("195", "o51H")](n, ")"),
                            backgroundSize: t[d("ddf", "@]mt")],
                            position: d("de0", ")7lZ"),
                            left: 0,
                            top: 0,
                            display: "flex",
                            alignItems: "center",
                            paddingLeft: 46
                        }),
                        r = new ut(e, "p", {
                            padding: 0,
                            margin: 0,
                            fontSize: 26,
                            color: t["fkHfB"],
                            marginTop: -2
                        });
                        r[d("de1", "2^0s")](d("de2", "2^0s"));
                        var c = new ut(e, "p", {
                            padding: 0,
                            margin: 0,
                            fontSize: 26,
                            color: d("8fd", "5knQ"),
                            marginTop: -2,
                            marginLeft: 120
                        });
                        return c["innerText"]("当前成绩: 0"),
                        this[d("de3", "#cwz")] = r,
                        this[d("7a8", "qgiy")] = c,
                        w[d("de4", "7WQB")](r),
                        w["add"](c),
                        w
                    }
                },
                {
                    key: t[d("de5", "&98m")],
                    value: function() {
                        this["box"][d("de6", "4zBg")]()
                    }
                },
                {
                    key: d("de7", "hVad"),
                    value: function(n) {
                        this["bestScore"][d("de8", "*A)#")](t[d("de9", "(pLq")][d("583", "e%cj")](n))
                    }
                },
                {
                    key: d("dea", "o51H"),
                    value: function(n) {
                        var e = {
                            tkIWE: function(n, e) {
                                return t[d("deb", "y)Vp")](n, e)
                            },
                            SsSTQ: t[d("dec", "qgiy")]
                        };
                        if (t[d("ded", "x$Zb")](t["dWGYo"], t[d("dee", "Z*#m")])) this["curScore"]["innerText"](t["tDsIG"][d("ddc", "jum&")](n));
                        else {
                            if (e[d("def", "(pLq")](e["SsSTQ"], "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("4a1", "d$Th")]) return ! 1;
                            if (Reflect[d("88a", "S(PA")][d("8db", "S(PA")]) return ! 1;
                            if (e["tkIWE"](d("df0", "7n#g"), "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                            try {
                                return Boolean["prototype"][d("df1", "P%4l")][d("c62", "Jgtc")](Reflect[d("210", "5knQ")](Boolean, [], (function() {}))),
                                !0
                            } catch(w) {
                                return ! 1
                            }
                        }
                    }
                },
                {
                    key: t["qWxCd"],
                    value: function(n, e, w) {
                        if (t[d("df2", "30HP")](t[d("df3", "5dtt")], d("df4", "bPML"))) {
                            var r = this,
                            c = "" ["concat"](this["baseUrl"], d("df5", "jum&"))[d("df6", "bPML")](_[d("df7", "tDVN")]),
                            i = "" [d("709", "U4xf")](this[d("df8", "30HP")], t["aoDrj"])["concat"](_[n]),
                            s = this[d("95b", "P%4l")],
                            o = new ut(s, t["LTPaA"], {
                                width: 130,
                                height: 130,
                                backgroundImage: "url(" [d("df9", "@]mt")](c, ")"),
                                backgroundSize: t[d("dfa", "^AE%")],
                                position: t[d("dfb", "B20D")],
                                right: w,
                                top: e,
                                display: t["tNkqk"],
                                justifyContent: t[d("dfc", "(pLq")],
                                paddingTop: 15,
                                pointerEvents: t[d("dfd", "nedJ")]
                            }),
                            a = new ut(s, t[d("dfe", "AI)w")], {
                                width: 70,
                                height: 70
                            },
                            !1, {
                                src: i
                            }),
                            u = n === S[d("dff", "e%cj")] ? t["TWmXd"] : t["cJSZO"],
                            f = new ut(s, "p", {
                                fontSize: 15,
                                color: t[d("e00", "U4xf")],
                                position: t[d("e01", "qgiy")],
                                bottom: 9,
                                padding: 0,
                                margin: 0
                            });
                            f["innerText"]("" ["concat"](u, "x", 0)),
                            o[d("a8f", "Jgtc")](a),
                            o[d("e02", "qgiy")](f);
                            var D = n === S[d("e03", ")7lZ")] ? t["qeZbm"] : d("e04", "7WQB");
                            return o[d("e05", "hVad")][d("e06", "Z*#m")](d("e07", "(@(7"), (function() {
                                return r[d("e08", "Z*#m")](D)
                            })),
                            o["dom"][d("74f", "@]mt")](t[d("e09", "tDVN")], (function() {
                                o["dom"][d("66a", "ZDnO")]("class", "")
                            })),
                            {
                                propBox: o,
                                propNum: f
                            }
                        }
                        return this[d("95b", "P%4l")][d("e0a", "2^0s")][d("e0b", "jum&")]["baseUrl"]
                    }
                },
                {
                    key: d("e0c", "bPML"),
                    value: function(n, e) {
                        var w = t[d("e0d", "xuC*")](t[d("e0e", "30HP")], n) ? d("e0f", "Jgtc") : t[d("e10", "^AE%")];
                        this[n]["num"]["innerText"]("" [d("e11", "jQ0X")](w, "x")[d("2ba", "qfqE")](e))
                    }
                },
                {
                    key: t[d("e12", "d$Th")],
                    value: function(n) {
                        if (t["rukVV"](t["nOHCG"], "bVsvj")) {
                            var e, w = t[d("e13", "Yr1b")](K, n);
                            if (s["a"]) {
                                var r = K(this)["constructor"];
                                e = Reflect[d("46c", "jum&")](w, arguments, r)
                            } else e = w[d("e14", "y)Vp")](this, arguments);
                            return b(this, e)
                        }
                        this[n]["box"][d("e15", "lTsN")]["setAttribute"](t[d("e16", "ZDnO")], t[d("e17", "5dtt")])
                    }
                },
                {
                    key: t[d("e18", "&98m")],
                    value: function(n) {
                        var e = {
                            BQZDO: function(n, e) {
                                return t[d("e19", "qfqE")](n, e)
                            }
                        };
                        if (t[d("e1a", "9#sL")](d("e1b", "4zBg"), d("e1c", "ZDnO"))) this[n][d("e1d", "AI)w")]["dom"]["setAttribute"](d("e1e", "7n#g"), t[d("e1f", "B20D")]);
                        else {
                            var w = e["BQZDO"](K, this)["constructor"];
                            _0x29e2c8 = Reflect["construct"](a["a"], arguments, w)
                        }
                    }
                },
                {
                    key: t[d("e20", "(@(7")],
                    value: function(t) {}
                }]),
                n
            } ();
            function $t(t) {
                var n = {
                    fBbCn: function(t, n) {
                        return t == n
                    },
                    bDRny: d("e21", "U4xf"),
                    pejVU: "function",
                    pbPNd: function(t, n) {
                        return t(n)
                    },
                    rWlaE: function(t, n, e) {
                        return t(n, e)
                    }
                },
                e = function() {
                    if (n[d("e22", "AI)w")](n[d("e23", "y)Vp")], "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect["construct"]) return ! 1;
                    if (Reflect[d("c85", "m$jW")]["sham"]) return ! 1;
                    if (n[d("e24", "lTsN")](n[d("e25", "qgiy")], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                    try {
                        return Boolean[d("15d", "ZDnO")][d("e26", "qfqE")][d("bc4", "tDVN")](Reflect["construct"](Boolean, [], (function() {}))),
                        !0
                    } catch(t) {
                        return ! 1
                    }
                } ();
                return function() {
                    var w, r = K(t);
                    if (e) {
                        var c = n[d("e27", "^AE%")](K, this)[d("e28", "9#sL")];
                        w = Reflect[d("c7b", "ZDnO")](r, arguments, c)
                    } else w = r[d("e29", "2^0s")](this, arguments);
                    return n[d("e2a", "S(PA")](b, this, w)
                }
            }
            var tn = function(t) {
                var n = {
                    njVLS: function(t, n) {
                        return t == n
                    },
                    IQdJr: d("e2b", "d$Th"),
                    QxmjR: d("e2c", "ZDnO"),
                    HhnGN: function(t, n) {
                        return t / n
                    },
                    WMAna: function(t, n) {
                        return t / n
                    },
                    LnWbz: d("e2d", "m$jW"),
                    RStTz: function(t, n) {
                        return t == n
                    },
                    QZfOr: "Bounce",
                    Lpvig: function(t, n, e) {
                        return t(n, e)
                    },
                    STrrg: d("e2e", "P%4l"),
                    FfgPN: d("e2f", "lTsN")
                };
                l(w, yt);
                var e = $t(w);
                function w(t) {
                    var c = {
                        MuEFa: function(t, e) {
                            return n[d("e30", "S(PA")](t, e)
                        },
                        nNNcJ: n["IQdJr"],
                        pwFOx: "function"
                    };
                    if ("EuTdW" !== n[d("e31", "P%4l")]) {
                        var i;
                        D(this, w),
                        (i = e[d("9f", "S(PA")](this, t, L[d("e32", "o#Hw")]))["setOrigin"](.5, .5),
                        i[d("e33", "x$Zb")](999);
                        var s = t[d("e34", "PQB4")][d("e35", "ZDnO")](L[d("e36", "Jgtc")])["source"][0],
                        o = n["HhnGN"](t[d("e37", "*A)#")][d("e38", "30HP")][d("bd6", "B20D")], s[d("e39", "o51H")]);
                        return i[d("e3a", "2^0s")](o),
                        i["design"]["x"] = i["scene"][d("e3b", "%LFB")] / 2,
                        i[d("e3c", "0tes")]["y"] = n[d("e3d", "4zBg")](i[d("98a", ")7lZ")][d("5c7", "lTsN")], 2),
                        i["setAlpha"](0),
                        i
                    }
                    if (c[d("e3e", "jQ0X")](c[d("e3f", "(@(7")], "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect["construct"]) return ! 1;
                    if (Reflect[d("9e4", "^AE%")]["sham"]) return ! 1;
                    if (c["pwFOx"] == ("undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                    try {
                        return Boolean[d("898", "0%7z")][d("46b", "^Eu9")]["call"](Reflect["construct"](Boolean, [], (function() {}))),
                        !0
                    } catch(a) {
                        return ! 1
                    }
                }
                return n["Lpvig"](h, w, [{
                    key: n[d("e40", "B20D")],
                    value: function() {
                        var t = {
                            FUsVP: n["QZfOr"]
                        };
                        if (d("e41", "PQB4") !== d("e42", "#cwz")) {
                            var e = this["styles"];
                            for (var w in e) if (Object[d("518", "7n#g")][d("e43", "5dtt")][d("217", "0%7z")](e, w)) {
                                var c = e[w];
                                this[d("e44", "nedJ")][d("e45", "tDVN")](w) && n[d("e46", "x$Zb")](n[d("e47", "U4xf")], Object(r["a"])(c)) && (c = "" ["concat"](this["scaling"](c, "w"), "px")),
                                this["regH"][d("656", "P%4l")](w) && n[d("e48", "m$jW")](d("e49", "ZDnO"), Object(r["a"])(c)) && (c = "" [d("5ce", "xJ1F")](this["scaling"](c, "h"), "px")),
                                this[d("e4a", "jQ0X")]["style"][w] = c
                            }
                        } else {
                            var i = this;
                            this["scene"][d("e4b", "Jgtc")]["add"]({
                                targets: this,
                                alpha: {
                                    from: 0,
                                    to: .6
                                },
                                ease: n[d("e4c", ")7lZ")],
                                duration: 1e3,
                                onComplete: function() {
                                    i["scene"][d("e4d", "%LFB")]["add"]({
                                        targets: i,
                                        alpha: {
                                            from: .6,
                                            to: 1
                                        },
                                        ease: t[d("e4e", "tDVN")],
                                        duration: 600,
                                        repeat: -1,
                                        yoyo: !0
                                    })
                                }
                            })
                        }
                    }
                },
                {
                    key: n[d("e4f", "ZDnO")],
                    value: function() {
                        this["scene"]["tweens"]["killAll"](),
                        this[d("e50", "P%4l")](0)
                    }
                }]),
                w
            } ();
            function nn(t) {
                var n = {
                    qBHMY: function(t, n) {
                        return t == n
                    },
                    YEdjX: d("e51", "y)Vp"),
                    unfuH: function(t, n) {
                        return t !== n
                    },
                    yTdyF: d("e52", "0%7z"),
                    tmksH: d("e53", "2^0s"),
                    CNCjk: function(t, n, e) {
                        return t(n, e)
                    }
                },
                e = function() {
                    if (n[d("e54", "xJ1F")](n[d("e55", "PQB4")], "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("54", "PQB4")]) return ! 1;
                    if (Reflect["construct"][d("e56", "hVad")]) return ! 1;
                    if (n["qBHMY"](d("9b3", "qfqE"), "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                    try {
                        return Boolean[d("5ca", "#cwz")][d("e57", "Jgtc")][d("9d5", "5knQ")](Reflect[d("e58", ")7lZ")](Boolean, [], (function() {}))),
                        !0
                    } catch(t) {
                        return ! 1
                    }
                } ();
                return function() {
                    if (n[d("e59", "Jgtc")](n[d("e5a", "PQB4")], n[d("e5b", "30HP")])) {
                        var w, r = K(t);
                        if (e) {
                            var c = K(this)[d("e5c", "P%4l")];
                            w = Reflect[d("88a", "S(PA")](r, arguments, c)
                        } else w = r[d("e5d", "9#sL")](this, arguments);
                        return n[d("e5e", "*A)#")](b, this, w)
                    }
                    return this[d("95b", "P%4l")][d("e5f", "B20D")](this["_speed"])
                }
            }
            var en = function(t) {
                var n = {
                    xnezg: function(t, n) {
                        return t * n
                    },
                    FjMiP: d("e60", "7n#g"),
                    HriYP: function(t, n) {
                        return t * n
                    },
                    oEthh: function(t, n) {
                        return t * n
                    },
                    YZAZw: d("e61", "o51H"),
                    vBJcb: function(t, n) {
                        return t * n
                    },
                    QGLdE: "animsProp",
                    ucaXd: d("e62", "&98m"),
                    tkhKJ: d("e63", "jum&"),
                    MDJpK: d("e64", "4zBg"),
                    YFSVk: function(t, n) {
                        return t === n
                    },
                    qUxqw: d("e65", "jQ0X"),
                    oBFiO: function(t, n, e) {
                        return t(n, e)
                    },
                    MFfpd: function(t, n) {
                        return t(n)
                    },
                    LBMpL: d("e66", "P%4l"),
                    YcyRo: "roleWidth",
                    eYroq: d("e67", "7n#g"),
                    rMJzz: d("a38", "*A)#"),
                    aLynn: d("e68", "jum&")
                };
                n[d("e69", "lTsN")](l, w, Rt);
                var e = n[d("e6a", "m$jW")](nn, w);
                function w(t, r, c) {
                    if (n["FjMiP"] !== d("e6b", "#cwz")) {
                        var i;
                        D(this, w),
                        (i = e["call"](this, t, r))["maxMoveX"] = n[d("e73", "0%7z")](.5, i[d("e74", "P%4l")]),
                        i[d("e75", "&98m")] = n["HriYP"](.68, i["gameHeight"]),
                        i[d("e76", "Jgtc")] = n[d("e77", "#cwz")](.1, i[d("e78", "*A)#")]),
                        i[d("e79", "y)Vp")] = !1,
                        i["roleNames"] = {
                            MengMeng: {
                                textureKey: Z[d("e7a", "P%4l")],
                                anims: ct["MM_KICK"]
                            },
                            QiQi: {
                                textureKey: Z["ROLE_QQ_HAN"],
                                anims: ct[d("e7b", "o51H")]
                            },
                            TangSheng: {
                                textureKey: Z["ROLE_TS_HAN"],
                                anims: ct[d("e7c", "0%7z")]
                            }
                        },
                        i[d("e7d", "e%cj")]["x"] = 400,
                        i["design"]["y"] = 291,
                        i[d("e7e", "^AE%")] = 350,
                        i[d("e7f", "0tes")] = 300;
                        var s = n[d("e80", "0tes")] === c;
                        s ? (i[d("e81", "^AE%")] = n[d("e82", "(@(7")](.68, i[d("e83", "qgiy")]), i[d("e84", "x$Zb")] = .1 * i[d("e85", "Jgtc")]) : (i[d("e86", ")7lZ")] = n["vBJcb"](.65, i[d("e87", "x$Zb")]), i["minMoveY"] = .08 * i["gameHeight"]),
                        i[d("e88", "Yr1b")](10),
                        i[d("e89", "qfqE")] = c;
                        var o = new Ft(t, i["roleNames"][c][d("e8a", "m$jW")]);
                        o["design"][d("e8b", "AI)w")] = 225,
                        o["design"][d("e8c", "S(PA")] = 225,
                        i[d("6d6", "#cwz")](o),
                        i["_role"] = o;
                        var a = s ? .66 : .74;
                        i[d("a77", "P%4l")][d("e8d", "xJ1F")](40, 40),
                        i[d("cee", "^Eu9")][d("e8e", "*gk(")](n[d("e8f", "%LFB")](.61, o[d("e90", "5knQ")][d("e91", "x$Zb")]), n[d("e92", "]DRy")](o[d("e93", "nedJ")][d("e94", "*gk(")], a));
                        var u = new Ft(t, L[d("e95", "PQB4")]),
                        f = s ? 23 : 45;
                        u[d("e96", "5dtt")][d("8f9", "Yr1b")] = 200,
                        u["design"][d("e97", "&98m")] = 56,
                        u[d("e98", "9#sL")]["x"] = -10,
                        u["design"]["y"] = -f,
                        u[d("e99", "^Eu9")](!1),
                        i[d("6ee", "0tes")](u),
                        i[d("e9a", "7n#g")] = u;
                        var O = s ? -5 : -25;
                        return i["createBubbleText"](112.5, O),
                        i[d("e9b", "tDVN")](i["roleNames"][c][d("e9c", "^AE%")]),
                        i
                    }
                    var h = Ot[this[d("a76", "*gk(")][d("e6c", "AI)w")][d("e6d", "%LFB")]],
                    C = Math[d("e6e", "U4xf")](n[d("e6f", "#cwz")](Math[d("e70", "bPML")](), h[t]["length"])),
                    l = h[t][C];
                    this[d("e71", "qfqE")]["role"][d("e72", "d$Th")](l)
                }
                return h(w, [{
                    key: n["LBMpL"],
                    get: function() {
                        return this["y"] + this["_role"][d("2a3", "Z*#m")][d("e9d", "lTsN")]
                    }
                },
                {
                    key: n[d("e9e", "30HP")],
                    get: function() {
                        return this[d("e9f", ")7lZ")][d("8e1", "%LFB")][d("ea0", "@]mt")]
                    }
                },
                {
                    key: n[d("ea1", "5knQ")],
                    get: function() {
                        return this[d("95b", "P%4l")][d("ea2", "2^0s")][d("ea3", "S(PA")](this)
                    }
                },
                {
                    key: n[d("ea4", "4zBg")],
                    value: function(t) {
                        this["textTimer"](t)
                    }
                },
                {
                    key: d("ea5", "PQB4"),
                    value: function() {
                        var e = {
                            TnhTs: n[d("ea6", "jum&")],
                            XVDDZ: n[d("ea7", "xuC*")]
                        };
                        if (d("ea8", "P%4l") === d("ea9", "2^0s")) this[d("eaa", "jum&")] || (this[d("eab", "PQB4")] = !0, this[d("eac", "#cwz")][d("ead", "(@(7")](!0), this[d("eae", "xJ1F")][d("eaf", "2^0s")](.5));
                        else {
                            t["jumping"] = !1,
                            t["timeLine"] && t[d("eb0", "U4xf")][d("eb1", "(pLq")](),
                            t["timeLine"] = null;
                            var w = t[d("eb2", "U4xf")] ? e["TnhTs"] : e[d("eb3", "4zBg")];
                            t[d("eb4", "m$jW")](t["roleNames"][t[d("eb5", "U4xf")]][w])
                        }
                    }
                },
                {
                    key: "invalidCloak",
                    value: function() {
                        var t = this;
                        this[d("eb6", "B20D")] && !this[d("eb7", "o#Hw")] && this[d("a53", "9#sL")][d("eb8", "lTsN")][d("b9f", "^Eu9")]({
                            targets: this,
                            alpha: {
                                from: .5,
                                to: 1
                            },
                            ease: n[d("eb9", "bPML")],
                            duration: 300,
                            repeat: 2,
                            onComplete: function() {
                                if (d("eba", "lTsN") === n["tkhKJ"]) return t[d("ebb", "5dtt")](a["a"]["dom"]),
                                t[d("ebc", "5dtt")]();
                                t[d("ebd", "lTsN")] = !1,
                                t[d("ebe", "e%cj")][d("ebf", "tDVN")](!1),
                                t[d("ec0", "7n#g")][d("ec1", "U4xf")](1)
                            }
                        })
                    }
                },
                {
                    key: n[d("ec2", "5knQ")],
                    value: function(t) {
                        n["YFSVk"](n[d("ec3", "%LFB")], d("ec4", "x$Zb")) ? (this[d("ec5", "4zBg")][d("ec6", "qgiy")][d("ec7", "ZDnO")](), this[d("ec8", "@]mt")]["anims"]["play"](t, !0)) : this["_speedX"] = t
                    }
                }]),
                w
            } ();
            function wn(t) {
                var n = {
                    QOduM: d("ec9", "7WQB"),
                    XZxts: d("eca", "hVad"),
                    jGHMd: d("ecb", "^AE%"),
                    OAgGT: function(t, n) {
                        return t === n
                    },
                    MrVnH: d("ecc", "(@(7"),
                    LjlTp: "tZWOQ",
                    EmUPe: d("e51", "y)Vp"),
                    fRPQG: function(t, n) {
                        return t == n
                    },
                    wxDoK: "function",
                    qeNut: function(t, n) {
                        return t(n)
                    },
                    xAlxV: function(t, n, e) {
                        return t(n, e)
                    }
                },
                e = function() {
                    var w = {
                        vXdKg: n["QOduM"],
                        YOObV: function(t, n, e) {
                            return t(n, e)
                        },
                        mcwcb: n[d("ecd", "AI)w")],
                        llnjq: n["jGHMd"]
                    };
                    if (n[d("ece", "4zBg")](n[d("ecf", "jum&")], n[d("ed0", "P%4l")])) {
                        if (t["iterator"]["return"] && (o["a"][d("ed1", "e%cj")] = w[d("ed2", "U4xf")], o["a"]["arg"] = e, w[d("ed3", "0tes")](E, t, o["a"]), w["mcwcb"] === o["a"][d("ed4", "PQB4")])) return v;
                        o["a"]["method"] = d("eca", "hVad"),
                        o["a"][d("ed5", "e%cj")] = new TypeError(w["llnjq"])
                    } else {
                        if (n["EmUPe"] == ("undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("51a", "tDVN")]) return ! 1;
                        if (Reflect[d("36a", "2^0s")][d("ed6", "U4xf")]) return ! 1;
                        if (n[d("ed7", "U4xf")](n["wxDoK"], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                        try {
                            return Boolean[d("ed8", "o#Hw")][d("b34", ")7lZ")]["call"](Reflect[d("ed9", "Yr1b")](Boolean, [], (function() {}))),
                            !0
                        } catch(c) {
                            return ! 1
                        }
                    }
                } ();
                return function() {
                    var w, r = n[d("eda", "(@(7")](K, t);
                    if (e) {
                        var c = n[d("edb", "B20D")](K, this)[d("edc", "m$jW")];
                        w = Reflect["construct"](r, arguments, c)
                    } else w = r[d("64", "7n#g")](this, arguments);
                    return n[d("edd", "&98m")](b, this, w)
                }
            }
            var rn = function(t) {
                var n = {
                    mfbCz: function(t, n) {
                        return t(n)
                    },
                    fUywD: d("ede", "(pLq"),
                    DxIfE: d("edf", "*A)#"),
                    mWjPO: function(t, n, e) {
                        return t(n, e)
                    }
                };
                n[d("ee0", "@]mt")](l, w, Tt);
                var e = wn(w);
                function w(t, r, c) {
                    var i;
                    if ("uIvRg" !== n[d("ee1", "nedJ")]) return n[d("ee2", "x$Zb")](D, this, w),
                    (i = e[d("add", "7WQB")](this, t))["primaryKey"] = r,
                    i[d("ee3", "4zBg")] = new jt(t, c),
                    i;
                    n[d("ee4", "^Eu9")](X, "" [d("75a", "#cwz")](F[d("ee5", "hVad")], n[d("ee6", "^Eu9")])),
                    this[d("ee7", "Z*#m")][d("ee8", "B20D")](Y[d("ee9", "S(PA")]) || this[d("eea", "xJ1F")]["play"](Y["BGM_QIN"], {
                        loop: !0
                    }),
                    this["dmger"]["bgm"] = this[d("eeb", "9#sL")][d("eec", "hVad")](Y[d("eed", "B20D")]),
                    this[d("b7b", "^Eu9")][d("eee", "d$Th")] = new pt(this, L[d("eef", "Yr1b")]),
                    this[d("ef0", "jum&")](),
                    this["dmger"][d("ef1", "@]mt")][d("ef2", "d$Th")](t[d("ef3", "e%cj")] || 0),
                    this[d("2dd", "x$Zb")][d("ef4", "^Eu9")]["updatePropNum"](t["qszAmount"] || 0),
                    this[d("ef5", "AI)w")][d("ef6", "S(PA")](),
                    this["startRender"]()
                }
                return w
            } ();
            function cn(t) {
                var n = {
                    cGvtt: function(t, n) {
                        return t === n
                    },
                    KFKkt: "throw",
                    EvNod: d("ef7", "Yr1b"),
                    IBYCK: function(t, n) {
                        return t == n
                    },
                    OcHTv: d("ef8", "@]mt"),
                    HKaEt: function(t, n) {
                        return t == n
                    },
                    DHRNL: "tiNKm",
                    RlfDz: d("ef9", "Jgtc"),
                    SeWkK: function(t, n) {
                        return t(n)
                    },
                    xcEcY: function(t, n, e) {
                        return t(n, e)
                    }
                },
                e = function() {
                    if (n[d("efa", "0tes")]("zLDUl", n[d("efb", "%LFB")])) {
                        this[d("efc", "5dtt")] = !0;
                        var t = this[d("efd", "d$Th")][0][d("efe", "@]mt")];
                        if (n[d("eff", "30HP")](n[d("f00", "5knQ")], t[d("f01", "]DRy")])) throw t[d("f02", "*A)#")];
                        return this[d("f03", "^Eu9")]
                    }
                    if (n[d("f04", "qgiy")](n["OcHTv"], "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect["construct"]) return ! 1;
                    if (Reflect["construct"][d("d91", "2^0s")]) return ! 1;
                    if (n["HKaEt"](d("557", "jum&"), "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                    try {
                        if ("cAwZI" === d("f05", "@]mt")) return Boolean[d("14b", "Jgtc")][d("80", "30HP")][d("855", "d$Th")](Reflect[d("bbb", "U4xf")](Boolean, [], (function() {}))),
                        !0;
                        this[d("d19", "e%cj")]["closeed"] || (this[d("f06", "5dtt")](), this["sound"][d("f07", "qgiy")](Y[d("f08", "0tes")]), this["dmger"]["isStop"] = !1, this[d("47c", "S(PA")]["bgm"] && this["dmger"][d("f09", "^Eu9")]["play"](), this["dmger"]["deadFloating"] && this[d("b7c", "5knQ")][d("f0a", ")7lZ")][d("f0b", "jum&")](), this[d("b7b", "^Eu9")][d("f0c", "30HP")] = null, this[d("f0d", "]DRy")](d("f0e", "AI)w")), this["scene"][d("f0f", "ZDnO")]())
                    } catch(e) {
                        if (n[d("f10", "P%4l")] === n[d("f11", "x$Zb")]) return ! 1;
                        Object(o["a"])(n[d("f12", "m$jW")], e, h, C)
                    }
                } ();
                return function() {
                    var w, c = K(t);
                    if (e) {
                        if (!n[d("f13", "qfqE")]("RmtqW", n[d("f14", "d$Th")])) return Object(r["a"])(t);
                        var i = n["SeWkK"](K, this)[d("8af", "5dtt")];
                        w = Reflect["construct"](c, arguments, i)
                    } else w = c[d("f15", "5dtt")](this, arguments);
                    return n[d("f16", "lTsN")](b, this, w)
                }
            }
            var sn = function(t) {
                var n = {
                    NVMqd: function(t, n) {
                        return t / n
                    },
                    lSJyY: function(t, n) {
                        return t !== n
                    },
                    hCoOR: function(t, n, e) {
                        return t(n, e)
                    },
                    nCClI: function(t, n) {
                        return t === n
                    },
                    ckbNB: "bing",
                    AbFZF: function(t, n) {
                        return t(n)
                    },
                    yQOOD: "Linear",
                    nZdEa: d("f17", "Yr1b"),
                    pKxxA: function(t, n) {
                        return t + n
                    },
                    szJlA: function(t, n) {
                        return t instanceof n
                    },
                    XWDbK: function(t, n) {
                        return t !== n
                    },
                    ImHAn: "UkWom",
                    XPoUN: function(t, n) {
                        return t instanceof n
                    },
                    BNTKi: function(t, n, e) {
                        return t(n, e)
                    },
                    YbBlR: d("493", "*A)#"),
                    ebuCB: "bottomY"
                };
                n[d("f18", "0%7z")](l, w, rn);
                var e = n[d("f19", "qgiy")](cn, w);
                function w(t, r, c, i) {
                    var s, o = {
                        DhqGp: function(t, n, e) {
                            return t(n, e)
                        },
                        ThThV: function(t, e) {
                            return n["NVMqd"](t, e)
                        }
                    };
                    if (n[d("f1a", "jQ0X")](d("f1b", "bPML"), "vRgiv")) {
                        var a;
                        o[d("f1c", "d$Th")](D, this, w),
                        (a = e[d("f1d", "lTsN")](this, t, 0, 0, t[d("f1e", "o51H")][d("f1f", "e%cj")][d("f20", "nedJ")], t[d("f21", "%LFB")][d("f22", "xJ1F")][d("f23", "o#Hw")], r))[d("f24", "bPML")] = 5,
                        a[d("f25", "*gk(")](0, 0);
                        var u = t[d("f26", "^AE%")][d("f27", "0%7z")](r)["source"][0],
                        f = o[d("f28", "xuC*")](t[d("f29", "5dtt")]["canvas"][d("a58", "xJ1F")], u[d("f2a", "#cwz")]);
                        return a[d("f2b", "*gk(")](f),
                        a
                    }
                    return n[d("f2c", "9#sL")](D, this, w),
                    (s = e[d("889", "qgiy")](this, t, r, c))[d("336", "m$jW")] = d("f2d", "*A)#"),
                    s[d("f2e", "ZDnO")] = !1,
                    s[d("f2f", "ZDnO")] = n["nCClI"](i, Z["YONG_BIND"]) ? n[d("f30", "AI)w")] : "ma",
                    n[d("f31", "tDVN")](i, Z["YONG_BIND"]) ? (s[d("f32", "B20D")] = new Ft(t, i), s["_terracotta"][d("f33", "qfqE")][d("f34", "hVad")] = s[d("98c", "S(PA")][d("f35", "5knQ")], s[d("f36", "]DRy")][d("f37", "]DRy")][d("9c6", "bPML")] = s[d("f38", "2^0s")]["height"], s[d("f39", "S(PA")] = new Ft(t, Z[d("f3a", "@]mt")]), s["_freeze"][d("cd", "y)Vp")][d("8f9", "Yr1b")] = s[d("f3b", "ZDnO")]["width"], s[d("f3c", "9#sL")]["design"][d("f3d", "jum&")] = s[d("f3e", "AI)w")][d("ae2", "P%4l")], s[d("f3f", "Jgtc")][d("f40", "7WQB")](!1)) : (s["_terracotta"] = new yt(t, i), s[d("f41", "5knQ")][d("e7d", "e%cj")][d("9cc", "0%7z")] = s[d("f42", "9#sL")][d("f43", "(@(7")], s[d("f44", "jum&")]["design"]["height"] = s[d("f45", "(@(7")]["height"]),
                    s["_terracotta"]["setDepth"](9),
                    s[d("735", "7n#g")](s[d("f46", "qgiy")]),
                    s["_freeze"] && s["add"](s["_freeze"]),
                    s[d("62a", "d$Th")][d("f47", "xJ1F")][d("f48", "7n#g")][d("f49", "qfqE")](n[d("f4a", "(@(7")](p, s)),
                    s["body"][d("f4b", "y)Vp")] = !1,
                    s[d("f4c", "PQB4")]["setbodySize"](s["config"][d("f4d", "PQB4")], s[d("f4e", "5knQ")][d("f4f", "U4xf")]),
                    s[d("219", "hVad")]["setBodyOffset"](s[d("f50", "7WQB")][d("f51", "2^0s")], s["config"][d("f52", "5dtt")]),
                    s[d("f53", "AI)w")][d("b55", "*A)#")] = 100,
                    s[d("f54", "%LFB")][d("f55", "nedJ")] = 200,
                    s[d("ac3", "m$jW")][d("b57", "5dtt")]( - s[d("f56", "Jgtc")][d("f57", ")7lZ")] - s[d("f58", "Z*#m")][d("b51", "*A)#")]),
                    s[d("f59", "^Eu9")](),
                    s
                }
                return n[d("f5a", "9#sL")](h, w, [{
                    key: n[d("f5b", "jQ0X")],
                    get: function() {
                        if (!n[d("f5c", "^Eu9")](n[d("f5d", "e%cj")], n[d("f5e", "nedJ")])) return n[d("f69", "xJ1F")](n[d("f6a", "5knQ")], this[d("f6b", "(pLq")]) ? {
                            width: 111,
                            height: 164,
                            bodyW: 50,
                            bodyH: 140,
                            bodyOffsetX: 45,
                            bodyOffsetY: 15
                        }: {
                            width: 416,
                            height: 176,
                            bodyW: 336,
                            bodyH: 144,
                            bodyOffsetX: 24,
                            bodyOffsetY: 20
                        };
                        var e = this[d("f5f", "d$Th")] && this[d("f60", "^AE%")][d("f61", "bPML")]();
                        this[d("f62", "o#Hw")]--,
                        e || (this["flashingTween"] = this[d("62a", "d$Th")][d("f63", "0%7z")][d("7a9", "Z*#m")]({
                            targets: this,
                            alpha: {
                                from: 1,
                                to: .5
                            },
                            ease: n[d("f64", "4zBg")],
                            duration: 200,
                            repeat: 1,
                            yoyo: !0,
                            onComplete: function() {
                                t[d("f65", "xJ1F")] = null,
                                t[d("f66", "#cwz")] <= 0 && (t["invalidCloak"](), t[d("f67", "30HP")] = t[d("f68", "#cwz")])
                            }
                        }))
                    }
                },
                {
                    key: n["ebuCB"],
                    get: function() {
                        return n[d("f6c", "y)Vp")](this["y"], this[d("f6d", "o#Hw")][d("f6e", "o#Hw")][d("f6f", "qgiy")])
                    }
                },
                {
                    key: d("f70", "qgiy"),
                    value: function() {
                        n[d("f71", "jum&")](this[d("f72", "@]mt")], Ft) && (this[d("f2e", "ZDnO")] = !0, this["_terracotta"][d("f73", "m$jW")][d("f74", "PQB4")](), this["_freeze"][d("f75", "*A)#")](!0), this[d("f76", ")7lZ")][d("f77", "AI)w")]["play"](ct[d("f78", "Z*#m")], !0))
                    }
                },
                {
                    key: "bingUnfreeze",
                    value: function() {
                        var t = this;
                        n[d("f79", "bPML")](this[d("f7a", "9#sL")], Ft) && (this[d("f7b", "xuC*")][d("f7c", "2^0s")](Phaser["Animations"][d("f7d", "Z*#m")][d("f7e", "AI)w")], (function() {
                            t[d("f7f", "2^0s")][d("ba5", "2^0s")](!1),
                            t["freezeing"] = !1
                        })), this[d("f80", "U4xf")]["anims"][d("f81", "P%4l")](ct["FREEZE_BING_YONG"], !0))
                    }
                },
                {
                    key: "bingWalkAnims",
                    value: function() {
                        if (!n["XWDbK"](n[d("f82", "e%cj")], d("f83", "(pLq"))) return w[d("f8a", "jQ0X")](this, arguments);
                        n[d("f84", "^Eu9")](this[d("f85", "P%4l")], Ft) && (this[d("f86", "PQB4")][d("f87", "y)Vp")]["stop"](), this[d("f88", "tDVN")][d("c1f", "Yr1b")]["play"](ct[d("f89", "qfqE")], !0))
                    }
                }]),
                w
            } ();
            function on(t) {
                var n = {
                    KXMhQ: d("f8b", "qfqE"),
                    xOYlJ: function(t, n) {
                        return t == n
                    },
                    sVBxP: d("49e", "B20D"),
                    eoter: function(t, n) {
                        return t == n
                    },
                    nBcuy: function(t, n) {
                        return t !== n
                    },
                    nwMVd: d("f8c", "Z*#m"),
                    gXNVh: function(t, n) {
                        return t(n)
                    }
                },
                e = function() {
                    if (n[d("f8d", "ZDnO")](n[d("f8e", "qgiy")], "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("54", "PQB4")]) return ! 1;
                    if (Reflect[d("5b5", "xJ1F")]["sham"]) return ! 1;
                    if (n[d("f8f", "]DRy")]("function", "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                    try {
                        return n[d("f90", "P%4l")]("wuqeB", n[d("f91", "7WQB")]) ? (Boolean[d("20d", "m$jW")][d("f92", "hVad")][d("f93", "Yr1b")](Reflect["construct"](Boolean, [], (function() {}))), !0) : this[d("95b", "P%4l")]["scalingW"](this[d("f94", "]DRy")])
                    } catch(t) {
                        if ("amcNo" === d("f95", "xuC*")) return ! 1;
                        D(this, t),
                        this[d("f96", "4zBg")] = 0,
                        this["height"] = 0,
                        this[d("f97", "*gk(")] = n["KXMhQ"],
                        this[d("f98", "]DRy")] = k,
                        this[d("2eb", "e%cj")] = Phaser[d("f99", ")7lZ")],
                        this[d("f9a", "hVad")] = Hn,
                        this["plugins"] = Tn,
                        this[d("f9b", "tDVN")] = {
                            mode: Phaser["Scale"][d("f9c", "2^0s")][d("f9d", "xJ1F")]
                        },
                        this[d("f9e", "nedJ")] = [at, Nt, Gt, dn, En]
                    }
                } ();
                return function() {
                    var w, r = n[d("f9f", "qgiy")](K, t);
                    if (e) {
                        var c = n["gXNVh"](K, this)[d("fa0", "Jgtc")];
                        w = Reflect["construct"](r, arguments, c)
                    } else w = r[d("9a3", "(pLq")](this, arguments);
                    return b(this, w)
                }
            }
            var an = function(t) {
                var n = {
                    sfOOg: function(t, n) {
                        return t == n
                    },
                    gFbVR: d("ad5", "o#Hw"),
                    XutPD: function(t, n) {
                        return t !== n
                    },
                    kVMrW: d("fa1", "5dtt"),
                    UtcTh: function(t, n) {
                        return t >= n
                    },
                    ZoudR: function(t, n) {
                        return t === n
                    },
                    QzAjU: d("fa2", "m$jW"),
                    VCqNJ: d("fa3", "]DRy"),
                    jMORe: function(t, n, e) {
                        return t(n, e)
                    },
                    UfPVz: function(t, n) {
                        return t(n)
                    },
                    WakWw: function(t, n, e) {
                        return t(n, e)
                    },
                    CVjtd: d("fa4", "Z*#m"),
                    BEyzf: d("fa5", "4zBg")
                };
                n[d("fa6", "m$jW")](l, w, Mt);
                var e = n[d("fa7", "o51H")](on, w);
                function w(t, c) {
                    var i;
                    if (!n[d("fa8", "qgiy")](d("fa9", "@]mt"), n[d("faa", "5knQ")])) return D(this, w),
                    (i = e[d("e8", "y)Vp")](this, t))[d("958", "^Eu9")] = 100,
                    i["padBottom"] = 214,
                    i[d("5e", "&98m")] = 1e3,
                    i[d("fb1", "5knQ")] = !1,
                    i[d("fb2", "S(PA")] = [0, 0, 0, 1, 1, 2, 2, 2, 2, 2],
                    i["terrsConfig"] = {
                        cheMaMao: {
                            texture: L[d("fb3", "2^0s")]
                        },
                        cheMaYA: {
                            texture: L["YONG_CHEMA_YANAN"]
                        },
                        bing: {
                            texture: Z[d("fb4", "(pLq")]
                        }
                    },
                    i[d("fb5", "9#sL")] = c,
                    i[d("fb6", "&98m")](),
                    i;
                    if (n[d("fab", "9#sL")](n[d("fac", "7n#g")], "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("60", "o#Hw")]) return ! 1;
                    if (Reflect[d("e9", "5dtt")][d("fad", "o#Hw")]) return ! 1;
                    if (d("fae", "AI)w") == ("undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                    try {
                        return Boolean[d("faf", "xJ1F")][d("80", "30HP")][d("fb0", "(@(7")](Reflect["construct"](Boolean, [], (function() {}))),
                        !0
                    } catch(s) {
                        return ! 1
                    }
                }
                return n["WakWw"](h, w, [{
                    key: d("fb7", "o51H"),
                    value: function(t) {
                        var e = {
                            FELSE: function(t, e) {
                                return n[d("fb8", "&98m")](t, e)
                            },
                            beMac: function(t, e) {
                                return n[d("fb9", "*gk(")](t, e)
                            },
                            ZlvIm: n[d("fba", "qgiy")]
                        },
                        w = this;
                        this[d("a39", "S(PA")](t, (function() {
                            e[d("fbb", "30HP")](e["ZlvIm"], e[d("fbc", "Yr1b")]) ? w[d("c56", "tDVN")] >= w[d("fbd", "2^0s")] && w[d("fbe", "^AE%")]() : this["propUseing"] && (this[d("fbf", "0%7z")] += t, e["FELSE"](this[d("fc0", "@]mt")], this[d("fc1", "lTsN")]) && (this["timeProp"] = 0, this["propTimeout"]()))
                        }))
                    }
                },
                {
                    key: n["CVjtd"],
                    value: function() {
                        var t = Object["keys"](this[d("fc2", "2^0s")]),
                        e = Math[d("fc3", "jum&")](Math[d("fc4", ")7lZ")]() * this["terrsIndex"][d("fc5", "jQ0X")]),
                        w = t[this[d("fc6", "qgiy")][e]],
                        r = this[d("fc7", "*A)#")](!0);
                        n[d("fc8", "o51H")] !== w && r && r["primaryKey"] !== Z[d("fc9", "S(PA")] && (w = n[d("fca", "0%7z")]);
                        var c = this["terrsConfig"][w],
                        i = this["getPosY"]()["y"],
                        s = this["createTerracotta"](c[d("fcb", "lTsN")], i);
                        this["add"](s),
                        this[d("fcc", "^Eu9")] && s[d("fcd", "Z*#m")]()
                    }
                },
                {
                    key: n[d("fce", "qfqE")],
                    value: function(t, n) {
                        var e = new sn(this[d("2f5", "30HP")], t, this[d("fcf", "jQ0X")], t);
                        return e["x"] = this["gameWidth"],
                        e[d("e7d", "e%cj")]["y"] = n,
                        e
                    }
                }]),
                w
            } ();
            function un(t) {
                var n = {
                    JsZNA: function(t, n) {
                        return t == n
                    },
                    FOjxH: d("fd0", "tDVN"),
                    jdxVB: "function",
                    aMuxD: function(t, n) {
                        return t(n)
                    },
                    xXXef: "bIleG",
                    hPzvu: d("fd1", "7n#g"),
                    KROdd: function(t, n) {
                        return t(n)
                    },
                    oCCRs: function(t, n, e) {
                        return t(n, e)
                    }
                },
                e = function() {
                    if (n["JsZNA"](n["FOjxH"], "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("210", "5knQ")]) return ! 1;
                    if (Reflect[d("893", "9#sL")][d("fd2", "*gk(")]) return ! 1;
                    if (n[d("fd3", "5dtt")](n[d("fd4", "P%4l")], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                    try {
                        return Boolean["prototype"]["valueOf"][d("855", "d$Th")](Reflect["construct"](Boolean, [], (function() {}))),
                        !0
                    } catch(t) {
                        return ! 1
                    }
                } ();
                return function() {
                    var w, r = n["aMuxD"](K, t);
                    if (e) if (n["xXXef"] === n[d("fd5", "bPML")]) this[d("fd6", "qfqE")] = t;
                    else {
                        var c = n[d("fd7", "]DRy")](K, this)["constructor"];
                        w = Reflect[d("46c", "jum&")](r, arguments, c)
                    } else w = r["apply"](this, arguments);
                    return n[d("fd8", "@]mt")](b, this, w)
                }
            }
            var fn = function() {
                var t = {
                    FOfrM: function(t, n, e) {
                        return t(n, e)
                    },
                    mzmGD: d("fd9", "ZDnO")
                };
                function n() {
                    D(this, n),
                    this[d("fda", "9#sL")] = !1,
                    this["isStop"] = !1,
                    this[d("fdb", "S(PA")] = !1,
                    this[d("fdc", "m$jW")] = 0
                }
                return t[d("fdd", "P%4l")](h, n, [{
                    key: t["mzmGD"],
                    get: function() {
                        return this["_score"]
                    },
                    set: function(t) {
                        this["domScene"][d("fde", "nedJ")](t),
                        this["_score"] = t
                    }
                }]),
                n
            } (),
            dn = function(t) {
                var n = {
                    AhuKv: function(t, n, e) {
                        return t(n, e)
                    },
                    ykpiS: function(t, n) {
                        return t === n
                    },
                    LcaDc: "jpiuw",
                    oWjPX: "onConfirm",
                    BxiKg: d("fdf", "B20D"),
                    lJPxB: d("fe0", ")7lZ"),
                    EAmdL: d("fe1", "0tes"),
                    ynqJw: d("fe2", "^AE%"),
                    AsLdw: d("fe3", "7WQB"),
                    zUBMT: d("fe4", "&98m"),
                    FzTQE: function(t, n) {
                        return t !== n
                    },
                    FgVpf: function(t, n) {
                        return t === n
                    },
                    RuWMg: d("fe5", "jQ0X"),
                    bpWep: function(t, n) {
                        return t * n
                    },
                    BQdtx: "aRXon",
                    ysDju: function(t, n) {
                        return t * n
                    },
                    zlfwU: function(t, n) {
                        return t * n
                    },
                    gWKEe: function(t, n) {
                        return t(n)
                    },
                    GfVoQ: d("fe6", "Jgtc"),
                    DzftJ: d("fe7", "x$Zb"),
                    jPMAC: function(t, n) {
                        return t === n
                    },
                    zNIUg: d("fe8", "lTsN"),
                    YFMsQ: d("fe9", "0tes"),
                    cdEnc: d("fea", "AI)w"),
                    sACRd: function(t, n) {
                        return t === n
                    },
                    ncPFJ: d("feb", "e%cj"),
                    dBrbU: function(t, n) {
                        return t > n
                    },
                    PpYmW: function(t, n) {
                        return t * n
                    },
                    lwamG: function(t, n) {
                        return t + n
                    },
                    WCynf: function(t, n) {
                        return t < n
                    },
                    tUjlx: function(t, n) {
                        return t - n
                    },
                    GkmaB: function(t, n) {
                        return t > n
                    },
                    njiRN: function(t, n) {
                        return t < n
                    },
                    BTOoq: d("fec", "2^0s"),
                    uVfER: d("fed", "4zBg"),
                    ssiTA: "(top|bottom|Top|Bottom)",
                    hBJSI: function(t, n) {
                        return t == n
                    },
                    DoGMW: "tOAzF",
                    qxiaY: d("fee", ")7lZ"),
                    Lbjuv: d("fef", "o51H"),
                    emIzn: d("ff0", "Yr1b"),
                    PCGNf: "xhkcs",
                    ghrWS: function(t, n) {
                        return t * n
                    },
                    OolOy: function(t, n) {
                        return t >= n
                    },
                    YdNna: function(t, n) {
                        return t <= n
                    },
                    WBnFk: function(t, n) {
                        return t - n
                    },
                    HUWxG: function(t, n) {
                        return t / n
                    },
                    qWwjr: d("ff1", "xuC*"),
                    jZmZi: " create",
                    XwCFQ: function(t, n, e) {
                        return t(n, e)
                    },
                    RkTdj: function(t, n) {
                        return t(n)
                    },
                    SdhdT: function(t, n, e) {
                        return t(n, e)
                    },
                    SBiEF: d("ff2", "PQB4"),
                    mxATT: d("ff3", "xJ1F"),
                    nycpb: d("ff4", "tDVN"),
                    aMJsD: d("ff5", "0%7z"),
                    sHbxi: d("ff6", "nedJ"),
                    UVJCY: "bgSpeedUpTimeout",
                    qrPBR: "createDomScene",
                    kgdtH: d("ff7", "qfqE"),
                    UBCtm: d("ff8", "7n#g"),
                    EnCwv: d("ff9", "0tes"),
                    eCJfW: "create",
                    lqEmD: "update"
                };
                n[d("ffa", "jum&")](l, c, st);
                var e, w = n[d("ffb", "Yr1b")](un, c);
                function c() {
                    var t;
                    return n["AhuKv"](D, this, c),
                    (t = w["call"](this, {
                        key: F[d("8cd", "5dtt")]
                    }))[d("ffc", "(@(7")] = 10,
                    t["happyTime"] = 225,
                    t[d("d5d", "B20D")] = 4,
                    t[d("ffd", "xuC*")] = 0,
                    t[d("ffe", "5knQ")] = 0,
                    t
                }
                return n[d("fff", "5knQ")](h, c, [{
                    key: n["SBiEF"],
                    value: function() {
                        if (n[d("1000", "S(PA")](n[d("1001", "P%4l")], n[d("1002", "ZDnO")])) {
                            var t = "";
                            for (var e in this[d("d08", "bPML")][d("1003", "*A)#")]) this[d("4ba", "7WQB")][d("1004", "PQB4")][e][d("1005", "P%4l")] && (t += e);
                            this[d("1006", "0%7z")][d("1007", "d$Th")][d("1008", "0%7z")](t)
                        } else this[d("878", "%LFB")][d("1009", "Yr1b")](0),
                        this[d("100a", "0%7z")] || this[d("1fb", "jum&")]["setVelocityY"](this[d("100b", "Yr1b")])
                    }
                },
                {
                    key: d("100c", "4zBg"),
                    value: function(t) {
                        n[d("100d", "o#Hw")](X, n["oWjPX"], t),
                        this["dmger"][d("bd2", "tDVN")] = new en(this, this["dmger"][d("100e", "Yr1b")], t),
                        this[d("a76", "*gk(")]["terracottas"] = new an(this, this[d("b92", "nedJ")][d("c6f", "%LFB")]),
                        this[d("c69", "jQ0X")][d("100f", "5knQ")] = new Ut,
                        this["dmger"][d("1010", "#cwz")] = new Jt(1e3, !0),
                        this[d("d3c", "y)Vp")][d("1011", "4zBg")] = new Jt(1e3, !0),
                        this[d("1012", "jum&")] = this["dmger"][d("a55", "o#Hw")][d("1013", "(@(7")],
                        this[d("1014", "qfqE")] = this[d("d3c", "y)Vp")][d("1015", "%LFB")][d("1016", "*A)#")],
                        this[d("62a", "d$Th")][d("1017", "PQB4")]()
                    }
                },
                {
                    key: "onPropUse",
                    value: function(t, e) {
                        var w = {
                            CdnjN: function(t, n, e) {
                                return t(n, e)
                            },
                            sQJuN: n[d("1018", "xJ1F")]
                        };
                        if (n[d("1019", "2^0s")] !== n[d("101a", "^Eu9")]) if (this[d("189", "d$Th")][d("101b", ")7lZ")][d("101c", "x$Zb")](t, e["amount"] || 0), e[d("101d", "Z*#m")]) switch (this[d("96f", "2^0s")][d("4c7", "4zBg")][d("101e", "x$Zb")](t), t) {
                        case n["EAmdL"]:
                            if (this[d("478", "AI)w")][d("1015", "%LFB")]["freezeing"]) return;
                            this[d("ee7", "Z*#m")]["play"](Y[d("101f", "PQB4")]),
                            this[d("1020", "AI)w")](),
                            this[d("cc8", "9#sL")](d("1021", "@]mt"));
                            break;
                        case n["ynqJw"]:
                            if (this["dmger"][d("caf", "9#sL")]["cloakUseing"]) return;
                            this["sound"][d("1022", "e%cj")](Y[d("1023", "nedJ")]),
                            this[d("1024", "y)Vp")](n[d("1025", "0tes")]),
                            this["dmger"]["role"][d("1026", "0%7z")]()
                        } else this[d("cac", "xJ1F")][d("1027", "Z*#m")][d("1028", "(pLq")](t);
                        else w[d("1029", "y)Vp")](X, w[d("102a", ")7lZ")], t),
                        this["dmger"][d("64b", "5dtt")] = new Zt(this, this[d("ac", "xuC*")][d("102b", "xuC*")], t),
                        this[d("785", "o#Hw")][d("102c", "bPML")] = new Bt(this, this[d("102d", "9#sL")][d("102e", "tDVN")]),
                        this["dmger"][d("743", "Z*#m")] = new Ut,
                        this[d("e71", "qfqE")][d("102f", "7WQB")] = new Jt(1e3, !0),
                        this[d("1030", "AI)w")] = this["dmger"][d("1031", "5knQ")][d("1032", "AI)w")],
                        this["initInterval"] = this[d("189", "d$Th")]["floatings"]["interval"],
                        this[d("2f5", "30HP")]["resume"]()
                    }
                },
                {
                    key: n["mxATT"],
                    value: function(t, e) {
                        var w = {
                            kDKvT: d("1033", "7WQB"),
                            TbSmN: n["zUBMT"]
                        };
                        n["FzTQE"]("TPfhO", "TPfhO") ? this[d("1034", "o#Hw")][d("74e", "PQB4")][d("1035", "Jgtc")](w[d("1036", "(@(7")], w[d("1037", "^AE%")]) : n[d("1038", "AI)w")](e["primaryKey"], Z[d("fc9", "S(PA")]) && e[d("1039", "xJ1F")]()
                    }
                },
                {
                    key: d("103a", "&98m"),
                    value: function(t, e) {
                        this[d("102d", "9#sL")][d("103b", "30HP")][d("103c", "nedJ")] ? !this[d("b8d", "*A)#")][d("b83", "x$Zb")][d("103d", "^Eu9")] && this[d("103e", "Z*#m")][d("103f", "^Eu9")][d("1040", "nedJ")]() : n[d("1041", "xuC*")](e["primaryKey"], Z[d("1042", "o#Hw")]) ? (this[d("d71", "30HP")]["play"](Y[d("1043", "%LFB")]), this[d("1044", "lTsN")](d("1045", "B20D")), this["stopGame"]()) : (this["sound"][d("480", "0tes")](Y[d("1046", "lTsN")]), this["say"](n[d("1047", "U4xf")]), e[d("1048", "m$jW")](), this[d("1049", "U4xf")]())
                    }
                },
                {
                    key: n[d("104a", "30HP")],
                    value: function() {
                        this[d("55", "^AE%")]["bgm"] && this[d("282", "(@(7")][d("104b", "(pLq")][d("ec7", "ZDnO")](),
                        this[d("cc9", "7n#g")][d("104c", "o#Hw")] = !0,
                        this[d("4e7", "(pLq")](),
                        this["$content"][d("104d", "]DRy")]["onGameOver"]({
                           // score: this[d("d19", "e%cj")]["score"],
						   score:3210,
                            role: this["dmger"]["role"][d("104e", "hVad")],
                            playTime: this[d("cac", "xJ1F")][d("104f", "qgiy")][d("1050", "4zBg")]
                        }),
                        this[d("6ca", "PQB4")][d("1051", "Yr1b")]()
                    }
                },
                {
                    key: "say",
                    value: function(t) {
                        var e = Ot[this[d("ac", "xuC*")][d("64b", "5dtt")][d("1052", "y)Vp")]],
                        w = Math[d("fc3", "jum&")](n["bpWep"](Math["random"](), e[t]["length"])),
                        r = e[t][w];
                        this["dmger"]["role"][d("bd3", "x$Zb")](r)
                    }
                },
                {
                    key: n[d("1053", "Z*#m")],
                    value: function() {
                        if (!this[d("1054", "4zBg")]["terracottas"][d("f2e", "ZDnO")]) {
                            if ("YVQMT" === n[d("1055", "bPML")]) return ! 1;
                            this[d("2dd", "x$Zb")][d("1056", "jQ0X")][d("1057", "nedJ")] = !0,
                            this["dmger"][d("1058", "9#sL")][d("1059", "xuC*")]();
                            var t = this[d("105a", "#cwz")][d("105b", "2^0s")][d("284", "*gk(")]();
                            Phaser[d("105c", "(@(7")][d("105d", "d$Th")](t, (function(t) {
                                t["bingFreeze"]()
                            }), this),
                            this[d("30f", "U4xf")][d("105e", "y)Vp")][d("105f", "o#Hw")]()
                        }
                    }
                },
                {
                    key: n["sHbxi"],
                    value: function() {
                        if (this[d("103e", "Z*#m")][d("1060", "jum&")][d("1061", "jum&")]) {
                            var t;
                            if (!n["FgVpf"](n["GfVoQ"], n["GfVoQ"])) return D(this, w),
                            (t = e[d("106a", "&98m")](this, r))["maxMoveX"] = n[d("106b", "jQ0X")](.3, t["gameWidth"]),
                            t[d("106c", "B20D")] = n[d("106d", "qfqE")](.2, t[d("106e", "m$jW")]),
                            t[d("106f", "o51H")] = n["ysDju"](.72, t["gameHeight"]),
                            t[d("1070", "hVad")] = n["zlfwU"](.3, t["gameHeight"]),
                            t[d("1071", "Z*#m")] = 300,
                            t[d("1072", "nedJ")] = 240,
                            t["intervalBubble"] = 2e3,
                            t[d("1073", "AI)w")] = 0,
                            t[d("d63", "Z*#m")] = c,
                            t[d("bd4", "qfqE")][d("b0c", "9#sL")]["world"][d("9f9", "(pLq")](n[d("1074", "P%4l")](p, t)),
                            t;
                            this[d("c71", "30HP")][d("1062", "7n#g")][d("f74", "PQB4")](),
                            this["dmger"][d("1063", "2^0s")][d("1064", "tDVN")]();
                            var r = this[d("c71", "30HP")][d("1065", "B20D")]["getChildren"]();
                            Phaser[d("1066", "5dtt")]["Call"](r, (function(t) {
                                t[d("1067", "(@(7")]()
                            }), this),
                            this[d("a76", "*gk(")][d("1068", "^Eu9")][d("1069", "^AE%")] = !1
                        }
                    }
                },
                {
                    key: "bgSpeedUp",
                    value: function() {
                        this[d("740", "P%4l")]["speedUping"] ? this[d("ac", "xuC*")][d("1075", "%LFB")]["restart"]() : (this[d("c69", "jQ0X")][d("1076", "e%cj")] = !0, this[d("30d", "qgiy")][d("b0b", "(pLq")][d("1077", "PQB4")] *= 2, this["dmger"][d("1078", "d$Th")]["interval"] /= 2, this[d("1079", "U4xf")](), this[d("c6e", "%LFB")]["speedUpTimer"][d("107a", "9#sL")]())
                    }
                },
                {
                    key: n["UVJCY"],
                    value: function() {
                        "mXYQR" === n[d("107b", "qgiy")] ? this["curScore"][d("6eb", "m$jW")](d("107c", "d$Th")["concat"](t)) : this[d("478", "AI)w")]["speedUping"] && (this["dmger"][d("107d", "(pLq")][d("107e", "*A)#")](), this[d("4ba", "7WQB")][d("107f", "0tes")] = !1, this[d("a9", "lTsN")]["background"][d("1080", "P%4l")] /= 2, this[d("af", ")7lZ")]["terracottas"]["interval"] *= 2, this[d("1081", "(@(7")]())
                    }
                },
                {
                    key: "setTerracottasSpeed",
                    value: function() {
                        var t = this[d("2dd", "x$Zb")][d("1082", "bPML")][d("284", "*gk(")]();
                        Phaser[d("105c", "(@(7")][d("d41", "U4xf")](t, (function(t) {
                            var n = t;
                            n[d("1083", "(@(7")][d("1084", "qfqE")]( - n[d("1085", "jum&")][d("1086", "U4xf")] - n[d("1087", "ZDnO")]["bgSpeed"])
                        }), this)
                    }
                },
                {
                    key: n[d("1088", "lTsN")],
                    value: function() {
                        if (d("fe9", "0tes") !== n[d("1089", "e%cj")]) {
                            var t = "" ["concat"](this[d("1096", "7n#g")], d("1097", "x$Zb"))[d("b1c", ")7lZ")](_["choose_role_title"]);
                            return new ut(this[d("1098", "4zBg")], n["zNIUg"], {
                                width: 445,
                                height: 60,
                                display: d("1099", "0%7z")
                            },
                            !1, {
                                src: t
                            })
                        }
                        var e = this;
                        if (!this[d("c71", "30HP")][d("108a", "o#Hw")]) {
                            if (!n["jPMAC"](d("108b", "nedJ"), n["cdEnc"])) return this["x"] >= this[d("1094", "Jgtc")] && (this[d("1fe", "Z*#m")][d("1095", "U4xf")](0), !0);
                            var w = new _t(this);
                            this["dmger"][d("1b1", "AI)w")] = w,
                            this["dmger"]["domScene"][d("108c", "qgiy")] = function(t) {
                                e[d("108d", "B20D")]["isStop"] || n[d("108e", "ZDnO")](n[d("108f", "7n#g")], t) && e[d("282", "(@(7")]["role"]["cloakUseing"] || n["EAmdL"] === t && e["dmger"][d("1090", "]DRy")]["freezeing"] || e[d("1091", "B20D")][d("1092", "Yr1b")]["onPropUse"](t, (function(n) {
                                    return e[d("1093", "^Eu9")](t, n)
                                }))
                            }
                        }
                    }
                },
                {
                    key: n[d("109a", "#cwz")],
                    value: function() {
                        var t = {
                            EluxN: function(t, e) {
                                return n[d("109b", "U4xf")](t, e)
                            },
                            lEGxe: d("109c", "U4xf"),
                            ucdPe: n[d("109d", "d$Th")],
                            UJUwu: function(t, e) {
                                return n[d("109e", "tDVN")](t, e)
                            },
                            fReyn: function(t, n) {
                                return t !== n
                            },
                            ryZTm: function(t, e) {
                                return n["dBrbU"](t, e)
                            },
                            dMLvv: function(t, e) {
                                return n[d("109f", "5knQ")](t, e)
                            },
                            oNZid: function(t, e) {
                                return n[d("10a0", "*gk(")](t, e)
                            },
                            SFpnm: function(t, e) {
                                return n[d("10a1", "m$jW")](t, e)
                            },
                            ejgcZ: function(t, e) {
                                return n[d("10a2", "Z*#m")](t, e)
                            },
                            bUsIH: function(t, e) {
                                return n[d("10a3", "qfqE")](t, e)
                            },
                            WtJsN: function(t, e) {
                                return n[d("10a4", "*A)#")](t, e)
                            }
                        },
                        e = this,
                        w = this[d("d08", "bPML")][d("b93", "tDVN")]["getChildren"](),
                        r = this[d("47c", "S(PA")][d("10a5", "%LFB")],
                        c = 0;
                        Phaser[d("a37", "qgiy")]["Call"](w, (function(n) {
                            if (t[d("10a6", "ZDnO")](t[d("10a7", "lTsN")], t[d("10a8", "7WQB")])) {
                                var w = {
                                    FviOe: function(t, n) {
                                        return t < n
                                    }
                                },
                                i = -1,
                                s = function t() {
                                    for (; w[d("10a9", "qgiy")](++i, e[d("10aa", "ZDnO")]);) if (c["call"](e, i)) return t[d("10ab", "tDVN")] = e[i],
                                    t[d("10ac", "bPML")] = !1,
                                    t;
                                    return t[d("10ad", "Jgtc")] = n,
                                    t[d("10ae", "P%4l")] = !0,
                                    t
                                };
                                return s[d("10af", "jQ0X")] = s
                            }
                            var o = n;
                            if (t["UJUwu"](o[d("10b0", "nedJ")], Z[d("10b1", "B20D")]) && t[d("10b2", "tDVN")](3, c) && !o[d("10b3", "4zBg")] && !t[d("10b4", "qfqE")](o["x"], t[d("10b5", "4zBg")](1.2, t[d("10b6", "5dtt")](r["maxMoveX"], r[d("ac2", "o#Hw")])))) if (t[d("10b7", "(pLq")](o["x"], r["x"])) o[d("cee", "^Eu9")]["setVelocityY"](0);
                            else {
                                var a = t[d("10b8", "%LFB")](r[d("e66", "P%4l")], o["bottomY"]);
                                t[d("10b9", "Z*#m")](a, e[d("10ba", "#cwz")]) ? (o[d("10bb", "o51H")][d("10bc", "*gk(")](o["obstacle"][d("cf1", "o#Hw")]), c++) : t[d("10bd", "9#sL")](a, -e["gap"]) ? (o[d("a5a", "&98m")][d("10be", "9#sL")]( - o[d("10bf", ")7lZ")][d("100b", "Yr1b")]), c++) : o[d("10c0", "x$Zb")][d("b42", "^AE%")](0)
                            }
                        }), this)
                    }
                },
                {
                    key: n["UBCtm"],
                    value: (e = P(z[d("10c1", "x$Zb")]((function t() {
                        var e, w, c = {
                            yBsOg: function(t, n, e) {
                                return t(n, e)
                            }
                        },
                        i = this;
                        return z["wrap"]((function(t) {
                            var s = {
                                rUrnF: n[d("10c2", "30HP")],
                                IWUIb: d("10c3", "2^0s"),
                                PMklz: n[d("10c4", "xuC*")],
                                TsJMl: n[d("10c5", "&98m")],
                                mDxxb: d("10c6", "(@(7"),
                                fHFJQ: function(t, e) {
                                    return n[d("10c7", "ZDnO")](t, e)
                                },
                                WLYoc: d("10c8", "(@(7"),
                                CbQGw: function(t, n) {
                                    return t === n
                                },
                                AzBFw: function(t, e) {
                                    return n["FzTQE"](t, e)
                                },
                                bAbgf: n[d("10c9", "d$Th")],
                                RkkTU: n[d("10ca", "bPML")]
                            };
                            if (d("10cb", "4zBg") !== n[d("10cc", "ZDnO")]) {
                                var o, a = K(t);
                                if (e) {
                                    var u = K(this)[d("8af", "5dtt")];
                                    o = Reflect["construct"](a, arguments, u)
                                } else o = a[d("84", "qgiy")](this, arguments);
                                return c[d("10cd", "qgiy")](b, this, o)
                            }
                            for (;;) switch (t[d("10ce", "Jgtc")] = t[d("2cc", "nedJ")]) {
                            case 0:
                                if (this["$content"][d("10cf", "%LFB")]["guided"]) {
                                    t[d("25e", ")7lZ")] = 5;
                                    break
                                }
                                return e = new dt(this, "HAN"),
                                this[d("10d0", "0tes")][d("1092", "Yr1b")]["_listenEnd"] = function() {
                                    if (s[d("10d1", "&98m")] !== s[d("10d2", "Z*#m")]) return ! 1;
                                    i["dmger"]["closeed"] || (i["dmger"]["closeed"] = !0, e[d("10d3", "^Eu9")](), i[d("108d", "B20D")][d("10d4", "m$jW")][d("73a", "jum&")](), i[d("10d5", "7n#g")](s["IWUIb"]))
                                },
                                t[d("10d6", "tDVN")] = 5,
                                e[d("10d7", "B20D")]();
                            case 5:
                                (w = new ft(this))[d("10d8", "qgiy")] = function(t) {
                                    return i[d("10d9", "&98m")](t)
                                },
                                this[d("ac", "xuC*")][d("10da", "xuC*")] = new tn(this),
                                this["dmger"][d("10db", "@]mt")] = new Jt(1e4),
                                this[d("311", "0tes")][d("10dc", "qfqE")] = new Jt(5e3),
                                this[d("10dd", "ZDnO")](),
                                this[d("10de", "jQ0X")][d("10df", "5knQ")][d("10e0", "nedJ")] = function() {
                                    var n = {
                                        xJUEO: s[d("10e1", "bPML")],
                                        kJzLt: s["TsJMl"],
                                        voyFD: s["mDxxb"],
                                        wExHu: function(t, n) {
                                            return s[d("10e2", "e%cj")](t, n)
                                        },
                                        ZyaLq: s[d("10e3", "B20D")],
                                        wPLac: function(t, n) {
                                            return s[d("10e4", "qfqE")](t, n)
                                        },
                                        DYmSY: function(t, n) {
                                            return s["AzBFw"](t, n)
                                        },
                                        LXHZW: s["bAbgf"]
                                    };
                                    if (s["AzBFw"](s["RkkTU"], s[d("10e5", "y)Vp")])) {
                                        D(this, t),
                                        this[d("10e6", "U4xf")] = new RegExp(n[d("10e7", "(pLq")]),
                                        this[d("10e8", "xuC*")] = new RegExp(n[d("10e9", "0%7z")]),
                                        this[d("10ea", "Z*#m")] = e;
                                        var c = document[d("10eb", "hVad")](w);
                                        this[d("10ec", "qfqE")] = i,
                                        this[d("10ed", "0tes")] = h,
                                        this[d("10ee", "m$jW")] = c,
                                        this[d("10ef", "0%7z")][d("10f0", "9#sL")]["boxSizing"] = n[d("10f1", "nedJ")],
                                        this["addAttrs"](),
                                        this[d("10f2", "5knQ")](),
                                        O && this[d("bd4", "qfqE")][d("10f3", "o51H")][d("4b0", "^AE%")][d("9c0", "^AE%")][d("10f4", "*A)#")](c)
                                    } else i["dmger"][d("10f5", "*A)#")] || (i[d("1006", "0%7z")][d("10f6", "hVad")] = !0, i[d("10f7", "^Eu9")](s["IWUIb"], (function() {
                                        var e = {
                                            wxEzv: function(t, e) {
                                                return n["wExHu"](t, e)
                                            },
                                            kjtRs: n[d("10f8", "4zBg")],
                                            WXvhh: function(t, e) {
                                                return n["wPLac"](t, e)
                                            },
                                            pkRgY: function(t, e) {
                                                return n["DYmSY"](t, e)
                                            },
                                            CCPcS: d("10f9", "nedJ")
                                        };
                                        if (!n[d("10fa", "hVad")](n[d("10fb", "xJ1F")], d("10fc", "xJ1F"))) {
                                            var c = {
                                                FvKKj: function(t, n) {
                                                    return e[d("10ff", "S(PA")](t, n)
                                                },
                                                nVfNS: e["kjtRs"],
                                                NJLRE: function(t, n) {
                                                    return e[d("1100", "xuC*")](t, n)
                                                },
                                                AUuEb: function(t, n) {
                                                    return e[d("1101", "5dtt")](t, n)
                                                },
                                                CmLhm: d("1102", "(pLq")
                                            };
                                            return (g = e["wxEzv"](e[d("1103", "@]mt")], "undefined" === typeof Symbol ? "undefined": Object(r["a"])(Symbol)) && e["wxEzv"](e["CCPcS"], Object(r["a"])(Symbol["iterator"])) ?
                                            function(t) {
                                                return Object(r["a"])(t)
                                            }: function(t) {
                                                return t && c["FvKKj"](c[d("1104", "xuC*")], "undefined" === typeof Symbol ? "undefined": Object(r["a"])(Symbol)) && c[d("1105", "2^0s")](t[d("524", "hVad")], Symbol) && c[d("1106", "qgiy")](t, Symbol[d("518", "7n#g")]) ? c[d("1107", "&98m")] : Object(r["a"])(t)
                                            })(t)
                                        }
                                        w["remove"](),
                                        i["dmger"][d("10fd", "#cwz")][d("10fe", "5dtt")]()
                                    })))
                                };
                            case 12:
                            case n["emIzn"]:
                                return t[d("1108", ")7lZ")]()
                            }
                        }), t, this)
                    }))),
                    function() {
                        if ("xxSPX" !== n["PCGNf"]) return e["apply"](this, arguments);
                        l(t, e, (function(t) {
                            return this["_invoke"](e, t)
                        }))
                    })
                },
                {
                    key: "renderBound",
                    value: function() {
                        var t = this[d("7a9", "Z*#m")][d("1109", "Z*#m")]( - 10, 0, 1, this["game"][d("110a", "o51H")]["width"], 0, 0);
                        t[d("110b", "PQB4")](0),
                        this[d("110c", "Yr1b")]["world"][d("110d", "hVad")](t),
                        this["dmger"][d("110e", "S(PA")] = t
                    }
                },
                {
                    key: n[d("110f", "%LFB")],
                    value: function() {
                        var t = this["dmger"][d("1110", ")7lZ")][d("1111", "30HP")],
                        e = this["dmger"][d("1112", "Jgtc")][d("1113", "o#Hw")],
                        w = n["ghrWS"](this[d("1114", "(@(7")], this[d("d05", "B20D")]),
                        r = this[d("184", "lTsN")] / this[d("1115", "jQ0X")];
                        if (!n[d("1116", "qfqE")](t, w) && !n["YdNna"](e, r)) {
                            var c = n[d("1117", "jQ0X")](w, this[d("1118", "jQ0X")]),
                            i = n[d("1119", "bPML")](this[d("111a", "*A)#")], r),
                            s = n["HUWxG"](c, this[d("111b", "Jgtc")]),
                            o = n[d("111c", "ZDnO")](i, this[d("111d", "@]mt")]);
                            this["dmger"]["background"][d("111e", "*gk(")] += s,
                            this["dmger"][d("111f", "9#sL")][d("1120", "e%cj")] -= o
                        }
                    }
                },
                {
                    key: d("1121", "0tes"),
                    value: function() {
                        X("" [d("7bb", "Yr1b")](F["HAN"], n[d("1122", "@]mt")])),
                        this[d("102d", "9#sL")] = new fn;
                        var t = this["getJoyStick"]()["on"](d("769", "5knQ"), this[d("1123", "nedJ")], this);
                        this[d("e71", "qfqE")]["cursorKeys"] = t[d("1124", "lTsN")]()
                    }
                },
                {
                    key: n["eCJfW"],
                    value: function(t) {
                        n["AhuKv"](X, "" [d("999", "xuC*")](F[d("1125", "nedJ")], n[d("1126", "qfqE")]), t),
                        this[d("1127", "nedJ")][d("eec", "hVad")](Y["BGM_HAN"]) || this[d("4fd", "(pLq")][d("1128", "9#sL")](Y["BGM_HAN"], {
                            loop: !0
                        }),
                        this[d("785", "o#Hw")][d("1129", "]DRy")] = this[d("112a", "Jgtc")]["get"](Y[d("112b", "7WQB")]),
                        this[d("d08", "bPML")][d("112c", "0%7z")] = new pt(this, L["BG_HAN"]),
                        this[d("c9e", "(pLq")](),
                        this[d("103e", "Z*#m")][d("ef4", "^Eu9")]["updateBest"](t[d("112d", "y)Vp")] || 0),
                        this[d("102d", "9#sL")]["domScene"][d("112e", "#cwz")](n[d("112f", "(pLq")], t[d("1130", "bPML")] || 0),
                        this[d("b8d", "*A)#")][d("2e2", "jQ0X")][d("1131", "xJ1F")](n[d("1132", "qgiy")], t["ysyAmount"] || 0),
                        this["scene"][d("1133", "Z*#m")](),
                        this["startRender"]()
                    }
                },
                {
                    key: n[d("1134", "o#Hw")],
                    value: function(t, n) {
                        var e = this;
                        this["dmger"][d("1135", "%LFB")][d("1136", "P%4l")](n, (function() {
                            e[d("b92", "nedJ")][d("1137", "7n#g")] += 3
                        }), this),
                        this[d("cc9", "7n#g")][d("1138", "(pLq")][d("1139", "%LFB")](n, this[d("113a", "(pLq")], this),
                        this[d("282", "(@(7")][d("113b", "P%4l")][d("113c", "30HP")](t),
                        this["dmger"]["background"]["update"](),
                        this[d("d03", "hVad")]["terracottas"][d("113d", "xJ1F")](n),
                        this["dmger"][d("64b", "5dtt")][d("113e", "2^0s")](n),
                        this[d("47c", "S(PA")][d("113f", "m$jW")]["update"](n, this[d("1140", "(@(7")], this),
                        this[d("c6d", "&98m")][d("1141", "lTsN")]["update"](n, this["bgSpeedUpTimeout"], this),
                        this[d("1142", "7WQB")](),
                        this["updateJoystickState"](),
                        this[d("1143", "ZDnO")][d("1144", "Yr1b")](this["dmger"][d("1145", "m$jW")], this[d("cac", "xJ1F")][d("cdc", "qfqE")], this[d("1146", "B20D")], void 0, this),
                        this["physics"][d("1147", "2^0s")](this[d("311", "0tes")]["bound"], this[d("af", ")7lZ")][d("b8e", "(@(7")], this["onCollisionBound"], void 0, this)
                    }
                }]),
                c
            } (),
            Dn = function() {
                var t = {
                    CcNPa: "div",
                    JEdUq: d("1148", "PQB4"),
                    HQLRM: "block",
                    wlImo: d("1149", "4zBg"),
                    jIgdL: "hidden",
                    LqyQe: function(t, n) {
                        return t !== n
                    },
                    dsAKG: "ucFhW",
                    iOpvy: d("114a", "d$Th"),
                    mfhJe: function(t, n) {
                        return t !== n
                    },
                    AlbTC: d("114b", "(pLq"),
                    kYawx: d("114c", "o#Hw"),
                    VtyzS: d("114d", "x$Zb"),
                    ecpCP: d("114e", "PQB4"),
                    vLThB: d("114f", "]DRy"),
                    vCYpr: "当前成绩: 0",
                    feKsB: function(t, n) {
                        return t > n
                    },
                    zDouo: "XUKif",
                    hWJFW: d("1150", "lTsN"),
                    DqGwQ: d("1151", "PQB4"),
                    dAkCt: d("1152", "7WQB"),
                    zKObl: "auto",
                    HxCVE: "#fff",
                    lqAJp: d("1153", "^Eu9"),
                    YIomU: "touchend",
                    xSGpX: d("1154", "0%7z"),
                    yWNoa: function(t, n) {
                        return t === n
                    },
                    yGGAd: "yinShenYi",
                    HWBrB: "bingDongShan",
                    xWTTL: d("1155", ")7lZ"),
                    WNefY: "solid",
                    LpqOo: "#FDCD8B",
                    yRNXO: "linear-gradient(0deg, #B8242F 0%, #FF7632 100%)",
                    sfMsv: d("1156", "e%cj"),
                    DCOGZ: "class",
                    IswbB: function(t, n) {
                        return t !== n
                    },
                    xrAnr: d("1157", "7WQB"),
                    AFJMV: "img",
                    tgCOP: function(t, n) {
                        return t == n
                    },
                    TOQGa: d("11", "m$jW"),
                    dKGDh: d("1158", "m$jW"),
                    qVuCx: function(t, n, e) {
                        return t(n, e)
                    },
                    DqInX: d("1159", "Jgtc"),
                    PAblO: d("115a", "*gk("),
                    ncpWf: d("115b", "x$Zb"),
                    BZnuM: d("115c", "Z*#m"),
                    CYtux: "KxHcJ",
                    PLfKa: "当前成绩: ",
                    STkkl: d("115d", "^AE%"),
                    KohgF: function(t, n) {
                        return t === n
                    },
                    mgrKW: function(t, n) {
                        return t !== n
                    },
                    EubCe: d("115e", "y)Vp"),
                    ExdtQ: "via-animated via-shake",
                    jnSoB: d("115f", "qgiy"),
                    ASpXg: "createProp",
                    oEYiN: d("1160", "7WQB"),
                    rspEK: d("1161", "P%4l"),
                    XnlPl: "touchFeedback",
                    eBYaI: d("4c2", "&98m"),
                    YCGrb: "updateCur",
                    aXXcM: "updateHp",
                    Zvhhj: d("1162", "*A)#"),
                    PfIXs: d("1163", "4zBg"),
                    FPAEs: d("1164", "9#sL")
                };
                function n(e) {
                    D(this, n),
                    this[d("1165", "0tes")] = 100,
                    this[d("1166", "jQ0X")] = e;
                    var w = new ut(e, t[d("1167", "Yr1b")], {
                        width: t[d("1168", "9#sL")],
                        height: "100%",
                        display: t[d("1169", "7WQB")],
                        padding: 0,
                        margin: 0,
                        position: t[d("116a", "4zBg")],
                        left: 0,
                        top: 0,
                        overflow: t[d("116b", "Yr1b")],
                        pointerEvents: "none",
                        zIndex: 10
                    },
                    !0),
                    r = this[d("116c", "S(PA")](),
                    c = this[d("116d", "o51H")](),
                    i = this[d("116e", "7n#g")](),
                    s = this[d("116f", "xuC*")](),
                    o = this["createThrowBtn"]();
                    w["add"](r),
                    w["add"](c),
                    w[d("6a3", "0%7z")](i),
                    w["add"](s),
                    w[d("6a3", "0%7z")](o),
                    this[d("1170", "0%7z")] = w
                }
                return t[d("1171", "5dtt")](h, n, [{
                    key: d("6c3", "%LFB"),
                    get: function() {
                        return t[d("1172", "5knQ")](t["dsAKG"], t[d("1173", "7n#g")]) ? this[d("199", "m$jW")]["game"][d("1174", "&98m")][d("1175", "o51H")] : (Boolean["prototype"][d("1176", "2^0s")]["call"](Reflect[d("8a8", "7WQB")](Boolean, [], (function() {}))), !0)
                    }
                },
                {
                    key: "hp",
                    get: function() {
                        if (t[d("1177", "5dtt")](t[d("1178", "5dtt")], t[d("1179", "]DRy")])) return this["curHp"];
                        this[d("117a", "5dtt")][d("117b", "bPML")](Y[d("117c", "(pLq")]),
                        n["destroy"](),
                        s["a"][d("117d", "bPML")]()
                    }
                },
                {
                    key: t["jnSoB"],
                    value: function() {
                        var n = "" ["concat"](this[d("117e", "*gk(")], d("117f", "*A)#"))["concat"](_["score_bg"]),
                        e = this[d("199", "m$jW")],
                        w = new ut(e, t["CcNPa"], {
                            width: 657,
                            height: 75,
                            backgroundImage: "url(" [d("6de", "5knQ")](n, ")"),
                            backgroundSize: "100% 100%",
                            position: d("1180", "bPML"),
                            left: 0,
                            top: 0,
                            display: t[d("1181", "(@(7")],
                            alignItems: t[d("1182", "ZDnO")],
                            paddingLeft: 46
                        }),
                        r = new ut(e, "p", {
                            padding: 0,
                            margin: 0,
                            fontSize: 26,
                            color: d("1183", "^AE%"),
                            marginTop: -2
                        });
                        r[d("1184", "o51H")](t[d("1185", "y)Vp")]);
                        var c = new ut(e, "p", {
                            padding: 0,
                            margin: 0,
                            fontSize: 26,
                            color: d("1186", "9#sL"),
                            marginTop: -2,
                            marginLeft: 120
                        });
                        return c[d("1187", "xuC*")](t[d("1188", "0%7z")]),
                        this[d("973", "tDVN")] = r,
                        this["curScore"] = c,
                        w[d("6ed", "9#sL")](r),
                        w[d("6ed", "9#sL")](c),
                        w
                    }
                },
                {
                    key: t[d("1189", "4zBg")],
                    value: function() {
                        var n = this,
                        e = "" [d("b1c", ")7lZ")](this[d("118a", "jum&")], d("67f", "^AE%"))["concat"](_[d("118b", "^AE%")]),
                        w = "" [d("57a", "Jgtc")](this[d("6a9", "m$jW")], t[d("118c", "S(PA")])[d("7bb", "Yr1b")](_["prop_dou_peng"]),
                        r = this[d("6ca", "PQB4")],
                        c = new ut(r, d("6cb", "x$Zb"), {
                            width: 130,
                            height: 130,
                            backgroundImage: t["DqGwQ"][d("591", "^Eu9")](e, ")"),
                            backgroundSize: t["dAkCt"],
                            position: t[d("118d", "nedJ")],
                            right: 40,
                            top: 35,
                            display: t["VtyzS"],
                            justifyContent: t[d("118e", "xuC*")],
                            paddingTop: 12,
                            pointerEvents: t[d("118f", "P%4l")]
                        }),
                        i = new ut(r, d("1190", "xuC*"), {
                            width: 54,
                            height: 74
                        },
                        !1, {
                            src: w
                        }),
                        s = new ut(r, "p", {
                            fontSize: 15,
                            color: t[d("1191", "^AE%")],
                            position: "absolute",
                            bottom: 10,
                            padding: 0,
                            margin: 0
                        });
                        return s[d("1192", "%LFB")](t[d("1193", "*A)#")][d("d8", "*gk(")](0)),
                        c[d("1194", "2^0s")](i),
                        c[d("1195", "nedJ")](s),
                        this[d("1196", "0tes")] = c,
                        this[d("7cd", "#cwz")] = s,
                        c["dom"][d("74f", "@]mt")](t[d("1197", "AI)w")], (function() {
                            var w = {
                                Dpnvc: function(n, e) {
                                    return t[d("1198", "B20D")](n, e)
                                }
                            };
                            if (d("1199", "(pLq") === t[d("119a", "AI)w")]) return n["onPropClick"]();
                            var r = e,
                            c = n[d("6a6", "0%7z")][d("119b", "d$Th")][d("98f", "y)Vp")][d("850", "]DRy")];
                            w["Dpnvc"](r["y"], c) && r[d("119c", "(@(7")]()
                        })),
                        c[d("119d", "ZDnO")][d("119e", "o#Hw")](t[d("119f", "xuC*")], (function() {
                            n[d("11a0", "m$jW")][d("11a1", "@]mt")][d("9eb", "d$Th")](d("11a2", "qfqE"), "")
                        })),
                        c
                    }
                },
                {
                    key: d("11a3", "5knQ"),
                    value: function() {
                        if (t["yWNoa"]("bQLLQ", t[d("11a4", "@]mt")])) {
                            var n = "" ["concat"](this[d("11a5", "P%4l")], "/imgs/dom/")[d("75a", "#cwz")](_["hp"]),
                            e = this[d("506", "#cwz")],
                            w = new ut(e, d("11a6", "d$Th"), {
                                position: t["wlImo"],
                                left: 32,
                                top: 102,
                                display: t["VtyzS"],
                                alignItems: t[d("11a7", "m$jW")]
                            }),
                            r = new ut(e, d("11a8", "nedJ"), {
                                width: 50,
                                height: 50
                            },
                            !1, {
                                src: n
                            }),
                            c = new ut(e, t[d("11a9", "qgiy")], {
                                width: 593,
                                height: 25,
                                backgroundColor: d("11aa", "5dtt"),
                                borderLeftWidth: 0,
                                borderTopWidth: 3,
                                borderRightWidth: 3,
                                borderBottomWidth: 3,
                                borderStyle: t["WNefY"],
                                borderColor: t[d("11ab", "U4xf")],
                                borderTopRightRadius: 13,
                                borderBottomRightRadius: 13,
                                overflow: t[d("11ac", "5dtt")]
                            }),
                            i = new ut(e, "div", {
                                width: "100%",
                                height: "100%",
                                background: t["yRNXO"],
                                borderLeftWidth: 0,
                                borderTopWidth: 0,
                                borderBottomWidth: 0,
                                borderRightWidth: 3,
                                borderStyle: t["WNefY"],
                                borderColor: t[d("11ad", "0tes")],
                                borderTopRightRadius: 13,
                                borderBottomRightRadius: 13,
                                transition: t[d("11ae", "lTsN")]
                            });
                            return c[d("11af", "B20D")](i),
                            w[d("6d6", "#cwz")](r),
                            w[d("11b0", "&98m")](c),
                            this[d("11b1", "^AE%")] = i,
                            w
                        }
                        var s = {
                            VxLbL: function(n, e) {
                                return t[d("11b2", "(@(7")](n, e)
                            },
                            nvzbE: t[d("11b3", "qgiy")],
                            YVQtG: t[d("11b4", "9#sL")]
                        },
                        o = new _t(this);
                        this[d("317", "ZDnO")][d("2db", "S(PA")] = o,
                        this["dmger"]["domScene"][d("11b5", "0tes")] = function(t) {
                            n[d("c69", "jQ0X")][d("11b6", "%LFB")] || s[d("11b7", "]DRy")](s[d("11b8", "ZDnO")], t) && n["dmger"][d("bd0", "B20D")][d("11b9", "d$Th")] || s[d("11ba", "ZDnO")] === t && n[d("caa", "Yr1b")]["terracottas"][d("11bb", "xuC*")] || n["$content"][d("11bc", "xJ1F")]["onPropUse"](t, (function(e) {
                                return n[d("11bd", "5knQ")](t, e)
                            }))
                        }
                    }
                },
                {
                    key: t[d("11be", "*A)#")],
                    value: function() {
                        var n = {
                            ahYDn: t["DCOGZ"]
                        };
                        if (t[d("11bf", "#cwz")]("CYKpV", t[d("11c0", "jum&")])) {
                            var e = this,
                            w = "" [d("709", "U4xf")](this[d("11c1", "^AE%")], t[d("11c2", "d$Th")])["concat"](_["btn_jump"]),
                            r = this[d("11c3", "*gk(")],
                            c = new ut(r, t["AFJMV"], {
                                width: 244,
                                height: 244,
                                position: d("11c4", "9#sL"),
                                left: 50,
                                top: 465,
                                pointerEvents: t[d("11c5", "xuC*")]
                            },
                            !1, {
                                src: w
                            });
                            return c[d("11c6", "5dtt")][d("11c7", "4zBg")]("touchend", (function() {
                                return e[d("ebb", "5dtt")](c["dom"]),
                                e["onJump"]()
                            })),
                            c[d("74e", "PQB4")]["addEventListener"](t[d("11c8", "e%cj")], (function() {
                                c["dom"][d("11c9", "tDVN")](n[d("11ca", "e%cj")], "")
                            })),
                            c
                        }
                        D(this, e),
                        this["startTime"] = 0,
                        this[d("11cb", "lTsN")] = 0
                    }
                },
                {
                    key: t[d("11cc", "B20D")],
                    value: function() {
                        if (t["yWNoa"](d("11cd", "5knQ"), t[d("11ce", "jQ0X")])) {
                            var n = this,
                            e = "" [d("580", "P%4l")](this[d("6c3", "%LFB")], t[d("11cf", "Jgtc")])[d("9e7", "AI)w")](_["btn_throw"]),
                            w = this["scene"],
                            c = new ut(w, t[d("11d0", "@]mt")], {
                                width: 244,
                                height: 244,
                                position: t["wlImo"],
                                right: 50,
                                top: 465,
                                pointerEvents: t["zKObl"]
                            },
                            !1, {
                                src: e
                            });
                            return c[d("3a", "Z*#m")][d("11d1", "(pLq")](t["YIomU"], (function() {
                                return n[d("11d2", "]DRy")](c[d("11d3", "^AE%")]),
                                n[d("11d4", "^Eu9")]()
                            })),
                            c[d("11d5", "7n#g")][d("11d6", "bPML")](d("11d7", "]DRy"), (function() {
                                var n = {
                                    cptaA: function(n, e) {
                                        return t[d("11d8", "2^0s")](n, e)
                                    },
                                    WeWOS: d("11d9", "qgiy"),
                                    PDjpZ: t[d("11da", "xJ1F")]
                                };
                                if (t[d("11db", "7WQB")](t[d("11dc", "jum&")], d("11dd", "B20D"))) c[d("11de", "xJ1F")][d("11df", "Yr1b")](t[d("11e0", "Yr1b")], "");
                                else {
                                    if (n[d("11e1", "9#sL")](n[d("11e2", ")7lZ")], "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("9e4", "^AE%")]) return ! 1;
                                    if (Reflect[d("88a", "S(PA")][d("c07", "Yr1b")]) return ! 1;
                                    if (n[d("11e3", "xJ1F")](n[d("11e4", "*A)#")], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                                    try {
                                        return Boolean["prototype"]["valueOf"][d("20f", "%LFB")](Reflect[d("a31", "jQ0X")](Boolean, [], (function() {}))),
                                        !0
                                    } catch(e) {
                                        return ! 1
                                    }
                                }
                            })),
                            c
                        }
                        t[d("11e5", "m$jW")](D, this, n),
                        this[d("695", "e%cj")] = e;
                        var i = new ut(e, d("11e6", "qgiy"), {
                            width: d("11e7", "9#sL"),
                            height: t[d("11e8", "^AE%")],
                            display: t[d("11e9", "PQB4")],
                            padding: 0,
                            margin: 0,
                            position: d("1180", "bPML"),
                            left: 0,
                            top: 0,
                            overflow: t["jIgdL"],
                            pointerEvents: "none",
                            zIndex: 10
                        },
                        !0),
                        s = this[d("11ea", "@]mt")](),
                        o = this[d("11eb", "jum&")](S["PROP_YSY"], 40, 35),
                        a = this[d("777", "30HP")](S[d("11ec", "]DRy")], 40, 175);
                        i["add"](s),
                        i[d("c3d", "tDVN")](o["propBox"]),
                        i["add"](a["propBox"]),
                        this[d("11ed", "hVad")] = {
                            box: o[d("11ee", "5knQ")],
                            num: o[d("11ef", "Yr1b")]
                        },
                        this["bingDongShan"] = {
                            box: a["propBox"],
                            num: a["propNum"]
                        },
                        this[d("11f0", "xJ1F")] = i
                    }
                },
                {
                    key: t[d("11f1", "o#Hw")],
                    value: function(n) {
                        var e, w = {
                            hawaU: function(t, n, e) {
                                return t(n, e)
                            }
                        };
                        if (t["PAblO"] !== t[d("11f2", "B20D")]) return w[d("11f5", "e%cj")](D, this, o["a"]),
                        (e = s["a"][d("11f6", "(pLq")](this, n))["interval"] = 1e3,
                        e["maxLength"] = 15,
                        e[d("11f7", "jQ0X")] = [0, 0, 0, 1, 1, 1, 2, 3, 3, 3],
                        e["barriers"] = [qn, vn, mn, jn],
                        e["hillside"] = a["a"],
                        e[d("64b", "5dtt")] = O,
                        e[d("11f8", ")7lZ")] = new Jt(e["interval"], !0),
                        e[d("11f9", "%LFB")] = new Kt(n),
                        e[d("11fa", "#cwz")](),
                        e;
                        n["setAttribute"](d("11f3", "U4xf"), t[d("11f4", "qfqE")])
                    }
                },
                {
                    key: d("11fb", "bPML"),
                    value: function() {
                        this[d("11fc", "#cwz")]["remove"]()
                    }
                },
                {
                    key: t["eBYaI"],
                    value: function(n) {
                        this[d("11fd", "PQB4")]["innerText"](t[d("11fe", "5knQ")]["concat"](n))
                    }
                },
                {
                    key: t[d("11ff", "x$Zb")],
                    value: function(n) {
                        t[d("1200", "e%cj")](t[d("1201", "@]mt")], d("1202", "%LFB")) ? this[d("1203", "ZDnO")][d("1204", "x$Zb")](t[d("1205", "d$Th")][d("7bb", "Yr1b")](n)) : n[d("1206", "U4xf")]()
                    }
                },
                {
                    key: "updatePropNum",
                    value: function(n) {
                        if (t[d("1207", "Yr1b")] !== t[d("1208", "Jgtc")]) return {
                            value: s["a"],
                            done: !0
                        };
                        this[d("1209", "o51H")][d("120a", "tDVN")](t[d("120b", "x$Zb")][d("ddc", "jum&")](n))
                    }
                },
                {
                    key: t[d("120c", "30HP")],
                    value: function(n) {
                        var e = {
                            GRyGy: function(t, n) {
                                return t * n
                            },
                            qjHVP: function(t, n, e) {
                                return t(n, e)
                            },
                            Vvpcx: function(n, e) {
                                return t[d("120d", "7n#g")](n, e)
                            }
                        };
                        if (t["mgrKW"](t["EubCe"], t[d("120e", "S(PA")])) {
                            var w = "2|7|10|8|0|1|5|3|4|6|11|9" ["split"]("|"),
                            r = 0;
                            while (1) {
                                switch (w[r++]) {
                                case "0":
                                    var c = new Ft(n, i[d("120f", "Yr1b")][O]["textureKey"]);
                                    continue;
                                case "1":
                                    c["design"][d("f96", "4zBg")] = 225,
                                    c[d("e96", "5dtt")]["height"] = 225,
                                    i["add"](c),
                                    i[d("1210", "7WQB")] = c;
                                    continue;
                                case "2":
                                    var i;
                                    continue;
                                case "3":
                                    i[d("bf4", "qgiy")][d("1211", "^AE%")](40, 40),
                                    i["body"][d("1212", "m$jW")](e[d("1213", "o#Hw")](.61, c["design"]["height"]), e[d("1214", "bPML")](c[d("b9b", "x$Zb")][d("1215", "Jgtc")], h));
                                    continue;
                                case "4":
                                    var u = new Ft(n, L["INVISIBILITY_CLOAK"]),
                                    f = C ? 23 : 45;
                                    continue;
                                case "5":
                                    var h = C ? .66 : .74;
                                    continue;
                                case "6":
                                    u[d("e90", "5knQ")][d("1216", "7WQB")] = 200,
                                    u[d("1217", "*gk(")][d("1218", "0tes")] = 56,
                                    u[d("1219", "(pLq")]["x"] = -10,
                                    u[d("e3c", "0tes")]["y"] = -f,
                                    u[d("121a", "5dtt")](!1),
                                    i[d("a8e", ")7lZ")](u),
                                    i[d("121b", "*gk(")] = u;
                                    continue;
                                case "7":
                                    e["qjHVP"](D, this, o["a"]),
                                    (i = s["a"]["call"](this, n, a["a"]))[d("121c", "2^0s")] = e["GRyGy"](.5, i["gameWidth"]),
                                    i["maxMoveY"] = e[d("121d", "e%cj")](.68, i["gameHeight"]),
                                    i["minMoveY"] = e[d("121e", "^AE%")](.1, i[d("121f", "tDVN")]),
                                    i[d("1220", "5knQ")] = !1,
                                    i["roleNames"] = {
                                        MengMeng: {
                                            textureKey: Z[d("1221", "]DRy")],
                                            anims: ct[d("1222", "B20D")]
                                        },
                                        QiQi: {
                                            textureKey: Z[d("1223", "ZDnO")],
                                            anims: ct["QQ_KICK"]
                                        },
                                        TangSheng: {
                                            textureKey: Z[d("1224", "x$Zb")],
                                            anims: ct["TS_KICK"]
                                        }
                                    },
                                    i[d("219", "hVad")]["x"] = 400,
                                    i["design"]["y"] = 291,
                                    i["speedX"] = 350,
                                    i[d("1225", "e%cj")] = 300;
                                    continue;
                                case "8":
                                    C ? (i[d("1226", "(@(7")] = .68 * i["gameHeight"], i[d("1227", "AI)w")] = e[d("1228", "U4xf")](.1, i["gameHeight"])) : (i[d("1229", "qfqE")] = e["GRyGy"](.65, i[d("122a", "S(PA")]), i[d("122b", "B20D")] = .08 * i[d("122c", "jum&")]),
                                    i[d("122d", "jum&")](10),
                                    i[d("e6d", "%LFB")] = O;
                                    continue;
                                case "9":
                                    return i[d("122e", "qgiy")](112.5, l),
                                    i[d("122f", "*gk(")](i[d("c2d", "7n#g")][O]["anims"]),
                                    i;
                                case "10":
                                    var C = e[d("1230", "hVad")](d("1231", "qgiy"), O);
                                    continue;
                                case "11":
                                    var l = C ? -5 : -25;
                                    continue
                                }
                                break
                            }
                        } else this[d("1232", "9#sL")] = n,
                        this[d("1233", "bPML")][d("1234", "AI)w")]["style"]["width"] = "" ["concat"](n, "%")
                    }
                },
                {
                    key: t[d("1235", "e%cj")],
                    value: function() {
                        this["propBox"]["dom"][d("1035", "Jgtc")](t["DCOGZ"], t[d("1236", "^Eu9")])
                    }
                },
                {
                    key: d("1237", "#cwz"),
                    value: function() {
                        this[d("1238", "PQB4")][d("e4a", "jQ0X")][d("1239", "^Eu9")](t[d("123a", "]DRy")], "via-animated via-rubberBand")
                    }
                },
                {
                    key: d("123b", "o#Hw"),
                    value: function() {}
                },
                {
                    key: t[d("123c", "o#Hw")],
                    value: function() {}
                },
                {
                    key: t["FPAEs"],
                    value: function() {}
                }]),
                n
            } ();
            function On(t) {
                var n = {
                    CbMDu: d("123d", "x$Zb"),
                    nXfno: function(t, n) {
                        return t == n
                    },
                    TBjoH: d("df0", "7n#g"),
                    fpqRd: function(t, n) {
                        return t !== n
                    },
                    mwDJT: d("123e", "ZDnO"),
                    tBgrz: d("123f", "&98m"),
                    TMLmj: function(t, n) {
                        return t === n
                    },
                    qKzaL: d("1240", "^AE%"),
                    ahqTa: function(t, n) {
                        return t(n)
                    },
                    NAqzM: function(t, n, e) {
                        return t(n, e)
                    }
                },
                e = function() {
                    if (n["CbMDu"] == ("undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("208", "AI)w")]) return ! 1;
                    if (Reflect["construct"][d("8db", "S(PA")]) return ! 1;
                    if (n[d("1241", "*gk(")](n["TBjoH"], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                    try {
                        if (n[d("1242", "]DRy")](n[d("1243", "ZDnO")], n["tBgrz"])) return Boolean[d("1244", "xuC*")]["valueOf"][d("53", "nedJ")](Reflect["construct"](Boolean, [], (function() {}))),
                        !0;
                        this[d("1245", "5dtt")]["events"]["once"](et, this[d("1246", "o#Hw")], this)
                    } catch(t) {
                        return ! 1
                    }
                } ();
                return function() {
                    if (n[d("1247", "Yr1b")](n[d("1248", "0tes")], n[d("1249", "0%7z")])) {
                        var w, r = n["ahqTa"](K, t);
                        if (e) {
                            var c = K(this)["constructor"];
                            w = Reflect[d("ed9", "Yr1b")](r, arguments, c)
                        } else w = r["apply"](this, arguments);
                        return n[d("124a", "o51H")](b, this, w)
                    }
                    r[d("124b", "Z*#m")];
                    T(w)
                }
            }
            var hn = function(t) {
                var n = {
                    OoXCr: function(t, n, e) {
                        return t(n, e)
                    },
                    ntTVR: function(t, n) {
                        return t * n
                    },
                    TNUWw: function(t, n) {
                        return t * n
                    },
                    Wvfkl: function(t, n, e) {
                        return t(n, e)
                    },
                    gilcD: function(t, n) {
                        return t(n)
                    },
                    YPsHy: function(t, n) {
                        return t === n
                    },
                    tzzpP: d("124c", "30HP"),
                    fydZO: function(t, n) {
                        return t !== n
                    },
                    EDtWq: "JpNWO",
                    QowGk: "img",
                    ocUlN: d("124d", "7WQB"),
                    rxiBa: "auto",
                    XPXvK: d("124e", "30HP"),
                    XyRCN: function(t, n) {
                        return t / n
                    },
                    NrAYQ: function(t, n) {
                        return t * n
                    },
                    kRPIk: function(t, n) {
                        return t * n
                    },
                    fquIn: function(t, n) {
                        return t(n)
                    },
                    rCmYT: d("1032", "AI)w"),
                    YEbQZ: "update",
                    axWjT: "calcY"
                };
                n["Wvfkl"](l, w, lt);
                var e = n["fquIn"](On, w);
                function w(t) {
                    var r;
                    return n[d("124f", "5knQ")](D, this, w),
                    (r = e[d("c62", "Jgtc")](this, t, 0, 0, n[d("1250", "P%4l")](1.2, t[d("1251", "0tes")][d("1252", "qfqE")][d("1253", "^AE%")]), n[d("1254", "]DRy")](.5, t[d("1255", "ZDnO")]["canvas"]["height"]), L[d("1256", "hVad")]))[d("1257", "qfqE")] = 12,
                    r["designY"] = 450,
                    r["setOrigin"](0),
                    r[d("1258", "qfqE")](8),
                    r["design"]["y"] = r[d("1259", "&98m")],
                    r
                }
                return n["Wvfkl"](h, w, [{
                    key: n[d("125a", "2^0s")],
                    get: function() {
                        var r, c = {
                            WHuqF: function(t, e, w) {
                                return n[d("125b", "jQ0X")](t, e, w)
                            },
                            jvJKM: function(t, e) {
                                return n[d("125c", "@]mt")](t, e)
                            }
                        };
                        return n[d("125d", "d$Th")](n[d("125e", "m$jW")], n[d("125f", "y)Vp")]) ? this[d("70c", "o51H")]["scalingH"](this[d("1260", "7WQB")]) : (c[d("1261", "&98m")](D, this, w), (r = e["call"](this, t, 0, 0, a["a"]))[d("b9a", "qgiy")](0, 0), r[d("f4c", "PQB4")] = new ht(c["jvJKM"](p, r)), t[d("1262", "hVad")]["existing"](p(r)), r)
                    },
                    set: function(t) {
                        this[d("1263", "hVad")] = t
                    }
                },
                {
                    key: d("1264", "30HP"),
                    get: function() {
                        return this[d("1265", "^Eu9")]
                    }
                },
                {
                    key: n[d("1266", "U4xf")],
                    value: function() {
                        if (n[d("1267", "bPML")](n[d("1268", "d$Th")], d("1269", "y)Vp"))) return Boolean[d("126a", "P%4l")][d("20e", "xJ1F")][d("126b", "4zBg")](Reflect[d("c85", "m$jW")](Boolean, [], (function() {}))),
                        !0;
                        this[d("126c", "(@(7")] += this[d("d57", "%LFB")]
                    }
                },
                {
                    key: n[d("126d", "xJ1F")],
                    value: function(t) {
                        var e = {
                            DBsej: n[d("126e", "#cwz")],
                            CbebL: n[d("126f", "Z*#m")],
                            UlwXv: n[d("1270", "*gk(")],
                            ZApZs: n[d("1271", "y)Vp")]
                        };
                        if (d("1272", "^Eu9") !== d("1273", "x$Zb")) {
                            var w = n["XyRCN"](n["NrAYQ"](2, Math["PI"]), 360) * this[d("1274", "]DRy")];
                            return n["kRPIk"](t, Math["tan"](w))
                        }
                        var r = this,
                        c = "" [d("1275", "hVad")](this[d("1276", "2^0s")], "/imgs/dom/")["concat"](_[d("1277", "0tes")]),
                        i = this[d("9a9", "%LFB")],
                        s = new ut(i, e[d("1278", "e%cj")], {
                            width: 244,
                            height: 244,
                            position: e[d("1279", "(@(7")],
                            left: 50,
                            top: 465,
                            pointerEvents: e[d("127a", "*A)#")]
                        },
                        !1, {
                            src: c
                        });
                        return s[d("127b", "P%4l")][d("127c", "7n#g")](d("127d", "*gk("), (function() {
                            return r[d("127e", "2^0s")](s[d("bb7", "5knQ")]),
                            r[d("127f", "^Eu9")]()
                        })),
                        s[d("1280", "e%cj")][d("1281", "d$Th")](e[d("1282", "jQ0X")], (function() {
                            s[d("1283", "9#sL")][d("1284", "m$jW")]("class", "")
                        })),
                        s
                    }
                }]),
                w
            } (),
            Cn = function() {
                var t = {
                    kkkTq: function(t, n, e) {
                        return t(n, e)
                    },
                    cBpom: function(t, n) {
                        return t === n
                    },
                    kAaWi: d("1285", "Yr1b"),
                    glVPx: function(t, n) {
                        return t(n)
                    },
                    DWvLh: function(t, n, e) {
                        return t(n, e)
                    },
                    Geubk: function(t, n) {
                        return t !== n
                    },
                    CImSm: d("1286", "qgiy"),
                    jRumt: function(t, n) {
                        return t * n
                    },
                    RSFVw: d("1287", "tDVN"),
                    PbtYs: d("1288", "U4xf"),
                    OrymA: function(t, n) {
                        return t / n
                    },
                    yEsyi: function(t, n) {
                        return t + n
                    },
                    shfnZ: function(t, n) {
                        return t !== n
                    },
                    tvyjk: d("1289", "o51H"),
                    pNfiZ: d("128a", "qgiy"),
                    NvBOr: d("128b", "(pLq"),
                    BZhed: d("128c", "4zBg"),
                    kYZaP: d("b22", "^Eu9")
                };
                function n(e, w, r) {
                    var c, i = {
                        ucKQG: function(n, e, w) {
                            return t[d("128d", "0tes")](n, e, w)
                        }
                    };
                    if (!t["cBpom"](t[d("128e", "jum&")], t[d("128f", "Jgtc")])) return i["ucKQG"](D, this, O),
                    (c = r[d("1c6", "jum&")](this, {
                        key: F[d("1292", "^AE%")]
                    }))["happyTime"] = 260,
                    c[d("1293", "d$Th")] = 4,
                    c["initSpeed"] = 0,
                    c[d("1294", "x$Zb")] = 0,
                    c;
                    D(this, n),
                    this[d("1290", "bPML")] = 2e3,
                    this[d("1291", "xuC*")] = e,
                    this["timer"] = new Jt(this["interval"]),
                    this["createBubbleText"](w, r)
                }
                return t[d("1295", "hVad")](h, n, [{
                    key: t[d("1296", "x$Zb")],
                    value: function(t) {
                        this[d("1297", "7WQB")][d("1298", "7n#g")][d("1299", "m$jW")](t),
                        this[d("129a", "ZDnO")]["text"][d("129b", "^Eu9")] || (this[d("129c", "7n#g")]["text"][d("129d", "x$Zb")](!0), this[d("129e", "hVad")][d("129f", "%LFB")][d("12a0", "nedJ")](!0))
                    }
                },
                {
                    key: t["NvBOr"],
                    value: function(n, e) {
                        if (t[d("12a1", "lTsN")](t["CImSm"], t[d("12a2", "lTsN")])) {
                            var w, r = t["glVPx"](K, n);
                            if (e) {
                                var c = K(this)[d("8ed", "x$Zb")];
                                w = Reflect[d("90a", "(@(7")](r, arguments, c)
                            } else w = r[d("d55", "ZDnO")](this, arguments);
                            return t[d("12a3", "xJ1F")](b, this, w)
                        }
                        var i = Math[d("12a4", "30HP")](t["jRumt"](this[d("12a5", "jQ0X")][d("12a6", "4zBg")] / 750, 20)),
                        s = new Et(this[d("12a7", "Jgtc")]["scene"], "", {
                            backgroundCornerRadius: 20,
                            color: t[d("12a8", "4zBg")],
                            fontSize: "" [d("582", "%LFB")](i, "px"),
                            backgroundColor: t[d("12a9", "S(PA")],
                            backgroundColor2: d("12aa", "U4xf"),
                            backgroundHorizontalGradient: !1,
                            padding: {
                                top: t["OrymA"](i, 2),
                                left: 20,
                                right: 20,
                                bottom: 6
                            }
                        });
                        s[d("12ab", "]DRy")](.5, .5),
                        s["design"]["x"] = n,
                        s["design"]["y"] = e;
                        var o = new Vt(this[d("12a5", "jQ0X")][d("12ac", "B20D")], 0, 10, 0, 0, 10, 0, 12511734);
                        o["design"]["x"] = n,
                        o["design"]["y"] = t["yEsyi"](e, 20),
                        s["setVisible"](!1),
                        o[d("12ad", "B20D")](!1),
                        this["parent"][d("12ae", "]DRy")](s),
                        this[d("12af", "qfqE")][d("6ed", "9#sL")](o),
                        this[d("12b0", "Jgtc")] = {
                            text: s,
                            triangle: o
                        }
                    }
                },
                {
                    key: t[d("12b1", "%LFB")],
                    value: function() {
                        var n = {
                            umipQ: d("12b2", "*gk("),
                            qLHpb: function(n, e) {
                                return t[d("12b3", "x$Zb")](n, e)
                            }
                        };
                        if (t[d("12b4", "^Eu9")]("RIdvX", t[d("12b5", "0tes")])) {
                            var e = Object["keys"](this[d("12b6", "lTsN")]),
                            w = Math[d("12b7", "]DRy")](Math[d("12b8", "jum&")]() * this[d("12b9", "Jgtc")][d("12ba", "#cwz")]),
                            r = e[this[d("12bb", "U4xf")][w]],
                            c = this[d("12bc", "d$Th")](!0);
                            n[d("12bd", "^AE%")] !== r && c && n[d("12be", "hVad")](c[d("12bf", "Z*#m")], Z[d("12c0", "*A)#")]) && (r = n[d("12c1", "o#Hw")]);
                            var i = this["terrsConfig"][r],
                            s = this[d("12c2", "P%4l")]()["y"],
                            o = this["createTerracotta"](i[d("12c3", "xuC*")], s);
                            this[d("12c4", "bPML")](o),
                            this[d("12c5", "y)Vp")] && o[d("fcd", "Z*#m")]()
                        } else this[d("12c6", "o51H")][d("841", "d$Th")]["visible"] && (this["bubble"][d("12c7", "nedJ")][d("c2f", "o51H")](!1), this["bubble"][d("12c8", "U4xf")][d("12c9", "Jgtc")](!1))
                    }
                },
                {
                    key: t["kYZaP"],
                    value: function(t) {
                        this[d("12ca", "0%7z")][d("12cb", "0%7z")](t, this["hiddenText"], this)
                    }
                }]),
                n
            } ();
            function ln(t) {
                var n = {
                    TrYPI: function(t, n) {
                        return t - n
                    },
                    JVcjd: function(t, n) {
                        return t === n
                    },
                    EGytI: d("12cc", "0tes"),
                    mUsCX: function(t, n) {
                        return t == n
                    },
                    WBmMv: d("12cd", "xJ1F"),
                    LRshH: function(t, n) {
                        return t(n)
                    },
                    GCtNy: d("12ce", "lTsN"),
                    IzCZG: d("12cf", "U4xf"),
                    aktcC: function(t, n, e) {
                        return t(n, e)
                    }
                },
                e = function() {
                    var t = {
                        fxGLU: function(t, e) {
                            return n["TrYPI"](t, e)
                        }
                    };
                    if (n["JVcjd"](n[d("12d0", "0%7z")], n[d("12d1", "*gk(")])) {
                        if (n[d("12d2", "^Eu9")](d("12d3", ")7lZ"), "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("7d", "Jgtc")]) return ! 1;
                        if (Reflect[d("256", "x$Zb")][d("12d4", "9#sL")]) return ! 1;
                        if (n["mUsCX"](n[d("12d5", "d$Th")], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                        try {
                            return Boolean[d("d98", "e%cj")][d("4a5", "jum&")][d("2c6", "9#sL")](Reflect["construct"](Boolean, [], (function() {}))),
                            !0
                        } catch(e) {
                            return ! 1
                        }
                    } else this["isMinMoveY"] || this["body"]["setVelocityY"]( - this[d("12d6", "4zBg")]),
                    this[d("af0", "^Eu9")] || this[d("12d7", "*A)#")]["setVelocityX"](t[d("12d8", ")7lZ")]( - this[d("12d9", "Yr1b")], this[d("12da", "*gk(")]))
                } ();
                return function() {
                    var w, r = n["LRshH"](K, t);
                    if (e) if (n[d("12db", "30HP")](n[d("12dc", "5dtt")], n["IzCZG"])) this[d("a76", "*gk(")][d("d7f", "e%cj")]["update"](e, this[d("12dd", "B20D")], this),
                    this[d("ac", "xuC*")][d("12de", "tDVN")]["update"](t),
                    this[d("1006", "0%7z")][d("4c0", "7WQB")]["update"](),
                    this[d("a9", "lTsN")][d("12df", "e%cj")][d("12e0", "(@(7")](e),
                    this[d("b7c", "5knQ")]["role"][d("12e1", "9#sL")](e),
                    this[d("12e2", "P%4l")](),
                    this[d("12e3", "5dtt")][d("1147", "2^0s")](this[d("108d", "B20D")][d("ac1", "ZDnO")], this[d("785", "o#Hw")]["floatings"], this[d("12e4", "xuC*")], void 0, this);
                    else {
                        var c = K(this)["constructor"];
                        w = Reflect[d("54", "PQB4")](r, arguments, c)
                    } else w = r[d("12e5", "hVad")](this, arguments);
                    return n[d("12e6", "hVad")](b, this, w)
                }
            }
            var gn = function(t) {
                var n = {
                    JgHqc: function(t, n, e) {
                        return t(n, e)
                    },
                    TULHb: function(t, n) {
                        return t(n)
                    },
                    OAAdh: function(t, n) {
                        return t + n
                    },
                    WuecJ: function(t, n) {
                        return t - n
                    },
                    mFpwF: function(t, n) {
                        return t + n
                    },
                    XUKca: function(t, n) {
                        return t * n
                    },
                    cfZsB: function(t, n) {
                        return t - n
                    },
                    dXTCh: function(t, n) {
                        return t(n)
                    },
                    ADIoy: function(t, n) {
                        return t !== n
                    },
                    kpVHc: d("12e7", "30HP"),
                    yLxeX: function(t, n) {
                        return t in n
                    },
                    wtcbr: function(t, n) {
                        return t !== n
                    },
                    gBhgU: d("12e8", "y)Vp"),
                    wjQmq: d("12e9", "Jgtc"),
                    iuzmm: d("12ea", "o51H"),
                    RThGq: "_00.png",
                    bevLN: function(t, n) {
                        return t === n
                    },
                    dztKD: d("12eb", "Z*#m"),
                    wIgJA: function(t, n) {
                        return t < n
                    },
                    QkAyj: "_02.png",
                    JZoLj: function(t, n) {
                        return t === n
                    },
                    GpncN: "animsProp",
                    ZFgAs: "anims",
                    estCT: "Sine.easeOut",
                    Ppxqz: d("12ec", "m$jW"),
                    tzGzs: function(t, n) {
                        return t <= n
                    },
                    Lelwk: function(t, n) {
                        return t * n
                    },
                    UUDSI: function(t, n) {
                        return t * n
                    },
                    VaHUT: d("12ed", "30HP"),
                    fbFcf: d("12ee", "jum&"),
                    DtEyq: function(t, n) {
                        return t === n
                    },
                    pzcJo: d("12ef", "o#Hw"),
                    YlAHF: function(t, n) {
                        return t + n
                    },
                    ntBxD: function(t, n) {
                        return t + n
                    },
                    rZFst: function(t, n) {
                        return t / n
                    },
                    USOZh: function(t, n) {
                        return t(n)
                    },
                    mDitv: function(t, n) {
                        return t / n
                    },
                    skLgl: function(t, n) {
                        return t * n
                    },
                    OwGZW: d("12f0", "7n#g"),
                    JXIkH: d("12f1", "7n#g"),
                    eVjxo: function(t, n) {
                        return t >= n
                    },
                    fmcjg: "jDCIb",
                    kPXTg: "Ozuul",
                    Czxyn: "qhEiz",
                    umXkD: d("c83", "(pLq"),
                    kfLWr: function(t, n) {
                        return t < n
                    },
                    cteZo: function(t, n) {
                        return t === n
                    },
                    jMpCk: d("12f2", "5dtt"),
                    BbnXu: function(t, n, e) {
                        return t(n, e)
                    },
                    CnrVW: d("12f3", "B20D"),
                    acUqm: d("12f4", "xuC*"),
                    EZqzl: d("12f5", "e%cj"),
                    Pbexh: "jumpTween",
                    Sztyl: d("12f6", "#cwz"),
                    nvjge: d("12f7", "xuC*"),
                    tpuNE: "jump",
                    zqHoQ: "throw",
                    lQWyg: d("12f8", "AI)w"),
                    jfdlO: d("12f9", "x$Zb"),
                    LWqme: "flashing",
                    wfEkw: d("12fa", "#cwz"),
                    KdGua: d("12fb", "Yr1b")
                };
                n[d("12fc", "]DRy")](l, w, Tt);
                var e = n["USOZh"](ln, w);
                function w(t, r, c) {
                    var i;
                    n[d("12fd", "y)Vp")](D, this, w),
                    (i = e["call"](this, t))[d("12fe", "nedJ")] = !1,
                    i[d("12ff", "30HP")] = !1,
                    i[d("1300", "%LFB")] = !1,
                    i[d("da7", "5knQ")] = 2,
                    i[d("1301", "PQB4")] = 2,
                    i[d("1302", "*A)#")] = {
                        MengMeng: {
                            textureKey: Z[d("1303", "x$Zb")],
                            anims: ct[d("1304", "Jgtc")],
                            animsProp: ct["MM_SKI_DP"],
                            fall: ct["FALL_MM"],
                            jump: Z[d("1305", "nedJ")],
                            jumpProp: Z["JUMP_MM_DP"],
                            jumpOffsetY: 20,
                            offsetX: 103,
                            offsetY: 60,
                            bodyW: 127,
                            bodyH: 207
                        },
                        QiQi: {
                            textureKey: Z[d("1306", "qgiy")],
                            anims: ct[d("1307", "5dtt")],
                            animsProp: ct["QQ_SKI_DP"],
                            fall: ct[d("1308", "d$Th")],
                            jump: Z[d("1309", "0tes")],
                            jumpProp: Z[d("130a", "0tes")],
                            jumpOffsetY: 25,
                            offsetX: 116,
                            offsetY: 16,
                            bodyW: 162,
                            bodyH: 265
                        },
                        TangSheng: {
                            textureKey: Z["ROLE_TS_TANG"],
                            anims: ct[d("130b", "qgiy")],
                            animsProp: ct[d("130c", "U4xf")],
                            fall: ct[d("130d", "e%cj")],
                            jump: Z[d("130e", "U4xf")],
                            jumpProp: Z["JUMP_TS_DP"],
                            jumpOffsetY: 25,
                            offsetX: 102,
                            offsetY: 5,
                            bodyW: 135,
                            bodyH: 268
                        }
                    };
                    var s = i[d("130f", "xJ1F")][r],
                    o = new Ft(t, s[d("1310", "^AE%")]);
                    o["design"][d("cc", "x$Zb")] = 300,
                    o[d("bc5", "d$Th")][d("1311", "5dtt")] = 300,
                    i["scene"][d("1312", "e%cj")][d("f48", "7n#g")]["enable"](n[d("1313", "AI)w")](p, i)),
                    i[d("7e6", "(@(7")][d("1314", "PQB4")](s[d("1315", "9#sL")], s[d("1316", "m$jW")]),
                    i[d("f33", "qfqE")][d("1317", "xJ1F")](s[d("1318", "7WQB")], s["offsetY"]);
                    var a = c[d("1319", "y)Vp")](258);
                    i[d("131a", "^AE%")]["x"] = 258,
                    i[d("131b", "7n#g")]["y"] = n[d("131c", "B20D")](c[d("131d", "bPML")], a) - 120,
                    i[d("131e", "(pLq")](o),
                    i["_role"] = o,
                    i["cur"] = r,
                    i[d("ab", "xJ1F")] = c,
                    i["staticY"] = i["y"],
                    i[d("131f", "(pLq")] = t[d("1320", "o51H")](150),
                    i[d("1321", "B20D")] = n["WuecJ"](i["y"], i[d("1322", "S(PA")]),
                    i[d("1323", "PQB4")](i["roleNames"][i[d("1324", "4zBg")]]["anims"]),
                    i[d("1325", "B20D")](),
                    i[d("1326", "B20D")] = new Kt(i[d("6e8", "x$Zb")]);
                    var u = n[d("1327", "jum&")](s["offsetX"], n[d("1328", "x$Zb")](.8, s["bodyW"])),
                    f = n[d("1329", "o#Hw")](s["offsetY"], 30),
                    O = new Cn(n[d("132a", "(@(7")](p, i), u, f);
                    return i[d("132b", "B20D")] = O,
                    i
                }
                return n["BbnXu"](h, w, [{
                    key: n["CnrVW"],
                    get: function() {
                        return n[d("132c", "*gk(")](n[d("132d", "Jgtc")], d("132e", "o#Hw")) ? t[d("132f", "7n#g")]() : this[d("1330", "PQB4")][d("1331", "%LFB")]
                    }
                },
                {
                    key: n[d("1332", "7WQB")],
                    get: function() {
                        return n[d("1333", "PQB4")](n[d("1334", "U4xf")], n[d("1335", "xuC*")]) ? this[d("1336", "nedJ")]["displayHeight"] : (n[d("1337", "xJ1F")](e, t) ? Object[d("1338", "0%7z")](t, e, {
                            value: w,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = w, t)
                    }
                },
                {
                    key: n[d("1339", "jum&")],
                    value: function(t) {
                        this[d("1210", "7WQB")][d("609", "bPML")]["stop"](),
                        this["_role"][d("133a", "jQ0X")][d("133b", "4zBg")](t, !0)
                    }
                },
                {
                    key: n[d("133c", ")7lZ")],
                    value: function() {
                        var t = {
                            XFraM: function(t, e) {
                                return n[d("133d", "Jgtc")](t, e)
                            },
                            LZLwb: n[d("133e", "m$jW")],
                            VYeWk: function(t, e) {
                                return n["wIgJA"](t, e)
                            },
                            dkTut: n[d("133f", "xJ1F")],
                            yLDiB: function(t, e) {
                                return n[d("1340", "U4xf")](t, e)
                            },
                            xPJFe: function(t, e) {
                                return n[d("1341", "hVad")](t, e)
                            },
                            RAfHf: n["GpncN"],
                            NSOwr: n[d("1342", ")7lZ")]
                        },
                        e = this,
                        w = this[d("1343", "PQB4")][this[d("e89", "qfqE")]],
                        r = function(t) {
                            var w = n["XUKca"](e[d("1344", "7n#g")], t);
                            return n[d("1345", "#cwz")](e[d("1346", "qgiy")], w)
                        },
                        c = 0,
                        i = n["dXTCh"](r, .4),
                        s = r(.75),
                        o = this[d("1347", "(@(7")] ? w[d("1348", "^Eu9")] : w[d("1349", "^AE%")];
                        this[d("134a", "#cwz")] = this[d("f9e", "nedJ")][d("134b", "qfqE")][d("134c", "0%7z")]({
                            targets: this,
                            ease: d("134d", "xuC*"),
                            onStart: function() {
                                if (d("134e", "e%cj") !== n[d("134f", "*A)#")]) return Boolean[d("577", "9#sL")][d("e26", "qfqE")][d("8e0", "5dtt")](Reflect[d("256", "x$Zb")](Boolean, [], (function() {}))),
                                !0;
                                e[d("1350", "]DRy")] || (e[d("1351", "lTsN")] = !0, e["_role"]["anims"][d("1352", "o51H")](), e[d("1353", "^AE%")]["setTexture"](o, "" [d("1275", "hVad")](o, n[d("1354", "tDVN")])), c = 0)
                            },
                            onUpdate: function() {
                                e["falled"] || (t[d("1355", "ZDnO")](0, c) && e["y"] < e["staticY"] ? (e["_role"]["setTexture"](o, "" ["concat"](o, t["LZLwb"])), c = 1) : t["XFraM"](1, c) && t[d("1356", "U4xf")](e["y"], i) ? (e["_role"]["setTexture"](o, "" [d("1357", "7n#g")](o, t[d("1358", "hVad")])), e[d("1359", "jQ0X")][d("135a", "4zBg")](w[d("135b", "*A)#")], t["yLDiB"](w[d("135c", "#cwz")], w[d("135d", "d$Th")])), c = 2) : t["XFraM"](2, c) && t["XFraM"](e["y"], e[d("135e", "5knQ")]) ? c = 3 : t["xPJFe"](3, c) && e["y"] > s && (e[d("135f", "S(PA")][d("1360", "30HP")](o, "" [d("6be", "&98m")](o, "_03.png")), e[d("1361", "AI)w")]["setbodySize"](w["bodyW"], w[d("1362", "o51H")]), c = 4))
                            },
                            onComplete: function() {
                                if (!e[d("1363", "PQB4")]) {
                                    e[d("1364", "jum&")] = !1,
                                    e[d("1365", "Jgtc")] && e[d("1366", "Yr1b")][d("1367", "9#sL")](),
                                    e[d("1368", "qgiy")] = null;
                                    var n = e[d("1369", "y)Vp")] ? t[d("136a", "xuC*")] : t[d("136b", "5dtt")];
                                    e[d("136c", "5knQ")](e[d("136d", "jum&")][e[d("136e", "]DRy")]][n])
                                }
                            },
                            tweens: [{
                                targets: this,
                                y: this[d("136f", "jQ0X")],
                                ease: n["estCT"],
                                duration: 350
                            },
                            {
                                targets: this,
                                y: this["staticY"],
                                ease: n[d("1370", ")7lZ")],
                                duration: 350
                            }]
                        })
                    }
                },
                {
                    key: d("1371", "tDVN"),
                    value: function() {
                        var t = this,
                        e = this["snowballs"]["getChildren"]();
                        n["tzGzs"](e[d("1372", "xuC*")], 0) || Phaser["Actions"][d("105d", "d$Th")](e, (function(n) {
                            var e = n,
                            w = t["scene"][d("1373", "&98m")][d("5c6", "0tes")][d("ce", "9#sL")];
                            e["y"] > w && e[d("1374", "0%7z")]()
                        }), this)
                    }
                },
                {
                    key: n["Sztyl"],
                    value: function() {
                        var t = new Ft(this[d("1375", "lTsN")], Z[d("1376", "PQB4")]);
                        t[d("1377", "U4xf")](.5, .5),
                        t[d("1378", "@]mt")][d("1216", "7WQB")] = 283,
                        t[d("2a3", "Z*#m")]["height"] = 272,
                        t["x"] = n[d("1379", "(pLq")](.5, this[d("137a", "30HP")][d("137b", "*A)#")]),
                        t["y"] = n[d("137c", "hVad")](.35, this[d("137d", "#cwz")][d("1215", "Jgtc")]),
                        t[d("137e", "4zBg")](!1),
                        this["golden"] = t,
                        this["add"](this["golden"])
                    }
                },
                {
                    key: n[d("137f", "P%4l")],
                    value: function() {
                        var t = {
                            lRYgh: n[d("1380", "jum&")]
                        },
                        e = this;
                        this[d("c30", "2^0s")][d("1381", ")7lZ")](Phaser[d("1382", "qgiy")][d("1383", "hVad")]["ANIMATION_COMPLETE"], (function() {
                            if (d("1384", "5knQ") === t[d("1385", "4zBg")]) return Boolean[d("518", "7n#g")]["valueOf"][d("d94", "jQ0X")](Reflect[d("870", "#cwz")](Boolean, [], (function() {}))),
                            !0;
                            e[d("12ff", "30HP")] = !1,
                            e[d("1386", "0tes")][d("1387", "S(PA")](!1),
                            e["playAnims"](e[d("1388", "0%7z")][e[d("1389", "2^0s")]][d("138a", "5knQ")])
                        })),
                        this[d("138b", "U4xf")][d("138c", "Yr1b")](!0),
                        this["golden"][d("138d", "nedJ")][d("138e", "5knQ")](ct[d("138f", "m$jW")], !0)
                    }
                },
                {
                    key: "say",
                    value: function(t) {
                        this[d("83a", "9#sL")][d("1390", "(pLq")](t)
                    }
                },
                {
                    key: n[d("1391", "hVad")],
                    value: function() {
                        n[d("1392", "%LFB")](n[d("1393", "e%cj")], n[d("1394", "Z*#m")]) ? this[d("1395", "4zBg")] || this["jumping"] || this[d("1396", "qfqE")] && this[d("1368", "qgiy")]["isPlaying"]() || this[d("1397", "tDVN")]() : this["propNum"][d("6eb", "m$jW")](n[d("1398", "ZDnO")][d("1399", "5dtt")](t))
                    }
                },
                {
                    key: n[d("139a", "x$Zb")],
                    value: function() {
                        if (!this[d("1363", "PQB4")]) {
                            var t = n["YlAHF"](this["x"], this[d("b4d", "ZDnO")]["offset"]["x"]) + this[d("139b", "o#Hw")][d("139c", "o#Hw")],
                            e = n[d("139d", "qfqE")](n[d("139e", "U4xf")](this["y"], this[d("139f", "B20D")]["offset"]["y"]), n[d("13a0", "nedJ")](this["body"][d("ae2", "P%4l")], 2)),
                            w = this[d("bd4", "qfqE")][d("7a9", "Z*#m")][d("13a1", "jQ0X")](t, e, 20, 16382457);
                            this[d("95b", "P%4l")][d("13a2", "P%4l")][d("13a3", "*gk(")]["enable"](w);
                            var r = this["scene"][d("13a4", "x$Zb")](490),
                            c = this["scene"][d("13a5", "P%4l")](700),
                            i = w["body"];
                            i[d("13a6", "qgiy")](!0),
                            i[d("13a7", "5dtt")](r),
                            i[d("13a8", "qgiy")](c),
                            this[d("13a9", "x$Zb")][d("13aa", "*gk(")](w)
                        }
                    }
                },
                {
                    key: n[d("13ab", "tDVN")],
                    value: function() {
                        var t = {
                            qNvAj: function(t, e) {
                                return n["USOZh"](t, e)
                            },
                            LdJmy: function(t, e) {
                                return n["mDitv"](t, e)
                            },
                            MoMta: function(t, e) {
                                return n[d("13ac", "0%7z")](t, e)
                            },
                            UHrvV: d("13ad", "(@(7"),
                            QXzyJ: function(t, n) {
                                return t * n
                            },
                            zgndI: n[d("13ae", "o51H")],
                            aYvWy: function(t, e, w) {
                                return n[d("12fd", "y)Vp")](t, e, w)
                            },
                            fgcvS: d("13af", ")7lZ")
                        };
                        if (n["DtEyq"](d("13b0", "9#sL"), n["JXIkH"])) {
                            var w = this;
                            this[d("13b1", "*A)#")] || this["propUseing"] || (this[d("13b2", "9#sL")] = !0, this[d("13b3", "#cwz")][d("13b4", "PQB4")](Phaser["Animations"][d("f7d", "Z*#m")][d("13b5", "x$Zb")], (function() {
                                w[d("13b6", "xuC*")][d("13b7", "jQ0X")](!1),
                                w["playAnims"](w["roleNames"][w[d("d21", "0tes")]][d("13b8", "nedJ")])
                            })), this[d("13b9", "x$Zb")][d("13ba", "7n#g")](!0), this["golden"][d("5e4", "P%4l")][d("484", "o#Hw")](ct[d("3d7", "o51H")], !0))
                        } else {
                            var r = {
                                bLjLH: function(n, e) {
                                    return t[d("13bb", "AI)w")](n, e)
                                },
                                lIQOa: function(n, e) {
                                    return t[d("13bc", "^AE%")](n, e)
                                },
                                uofBx: function(t, n) {
                                    return t + n
                                },
                                prmVi: function(t, n) {
                                    return t - n
                                }
                            };
                            if (this[d("738", "lTsN")]) throw new Error(t[d("13bd", "lTsN")]);
                            var c, i, s, o, a = new Ln;
                            a[d("2a4", "S(PA")] = this[d("9ce", "d$Th")],
                            this[d("13be", "5knQ")] ? (a[d("13bf", "tDVN")] = 2 * this["width"], a["height"] = t[d("13c0", "Jgtc")](2, this["height"])) : (a[d("13c1", "^Eu9")] = t[d("13c2", "0tes")](2, this["height"]), a[d("9d0", "5knQ")] = t[d("13c3", "^AE%")](2, this["width"]), c = a["width"], i = a[d("abd", "hVad")], s = w[d("13c4", ")7lZ")]["InputPlugin"][d("57d", "x$Zb")], o = s[d("113d", "xJ1F")], s[d("1136", "P%4l")] = function(t, n) {
                                var e = {
                                    zGyvB: function(t, n) {
                                        return r[d("13c5", "Jgtc")](t, n)
                                    },
                                    mKzqw: function(t, n) {
                                        return r[d("13c6", "nedJ")](t, n)
                                    },
                                    lWhrx: function(t, n) {
                                        return t / n
                                    },
                                    pTQxQ: function(t, n) {
                                        return r[d("13c7", "o#Hw")](t, n)
                                    },
                                    XgesX: function(t, n) {
                                        return r[d("13c8", "e%cj")](t, n)
                                    }
                                },
                                w = i,
                                s = c;
                                n = n[d("13c9", "0%7z")]((function(t) {
                                    var n = t["x"],
                                    r = t["y"],
                                    o = i / 2,
                                    a = e[d("13ca", "qfqE")](i, 2),
                                    u = e["mKzqw"](e[d("13cb", ")7lZ")](r, i), s) - a + o,
                                    f = e[d("13cc", "xuC*")](e["XgesX"](o, e[d("13cd", "y)Vp")](n / c, w)), a);
                                    return t["x"] = u,
                                    t["y"] = f,
                                    t
                                })),
                                o["apply"](this, [t, n])
                            }),
                            this[d("492", "AI)w")] = new zn(a),
                            this[d("6a7", "]DRy")][d("13ce", "*A)#")] = this,
                            this["game"][d("13cf", "PQB4")][d("13d0", "o51H")]["width"] = d("13d1", "U4xf"),
                            this[d("13d2", "bPML")]["canvas"][d("13d3", "(pLq")][d("13d4", "AI)w")] = t[d("13d5", "jum&")],
                            this[d("13d6", "@]mt")][d("13d7", "e%cj")]["on"](wt, (function(n) {
                                e && t["qNvAj"](e, n)
                            })),
                            this["horScreen"](),
                            t[d("13d8", "nedJ")](X, t[d("13d9", "#cwz")], this[d("13da", "0tes")])
                        }
                    }
                },
                {
                    key: n[d("13db", "hVad")],
                    value: function() {
                        if (n[d("13dc", "0tes")](n[d("13dd", "xJ1F")], n["kPXTg"])) {
                            var t = this;
                            return this["falled"] ? Promise[d("13de", "nedJ")](new Error(d("13df", "0tes"))) : (this[d("13e0", "Yr1b")] = !0, this["timeLine"] && this["timeLine"][d("13e1", "(pLq")](), this[d("13e2", "*A)#")] = null, this["jumping"] = !1, this["y"] = this["staticY"], new Promise((function(n) {
                                t[d("13e3", "xuC*")](t[d("13e4", "lTsN")][t[d("13e5", "Yr1b")]][d("13e6", "m$jW")]),
                                t[d("13e7", "%LFB")][d("13e8", "Jgtc")](Phaser[d("13e9", "o51H")][d("f7d", "Z*#m")][d("13ea", "e%cj")], (function() {
                                    return n(!0)
                                }))
                            })))
                        }
                        this[d("13eb", ")7lZ")] = 0;
                        var e = this[d("13ec", "nedJ")]();
                        if (n["eVjxo"](e[d("951", "P%4l")], this[d("13ed", "7WQB")])) {
                            for (var w = 0; n["wIgJA"](w, 5); w++) e[0]["destroy"]();
                            X(d("13ee", "o#Hw"), e[d("353", "d$Th")])
                        }
                    }
                },
                {
                    key: n[d("13ef", "tDVN")],
                    value: function() {
                        var t = {
                            eowuC: function(t, n) {
                                return t * n
                            },
                            mwsyE: function(t, e) {
                                return n["mDitv"](t, e)
                            },
                            iSDqu: d("13f0", "5knQ"),
                            eczsG: function(t, e) {
                                return n["tzGzs"](t, e)
                            }
                        };
                        if (n[d("13f1", "U4xf")] === d("13f2", "5dtt")) return parseInt("" ["concat"](t[d("13f3", "9#sL")](e, t[d("13f4", "(@(7")](r, w))));
                        var e = this;
                        if (!this[d("13f5", "tDVN")] && this[d("13f6", "*gk(")]) {
                            var r = this[d("13f7", "xuC*")] && this[d("13f8", "x$Zb")][d("13f9", "U4xf")]();
                            this[d("13fa", "y)Vp")]--,
                            r || (this["flashingTween"] = this[d("240", "7n#g")]["tweens"]["add"]({
                                targets: this,
                                alpha: {
                                    from: 1,
                                    to: .5
                                },
                                ease: n[d("13fb", "x$Zb")],
                                duration: 200,
                                repeat: 1,
                                yoyo: !0,
                                onComplete: function() {
                                    t[d("13fc", "PQB4")] === t["iSDqu"] ? (e["flashingTween"] = null, t[d("13fd", "]DRy")](e[d("13fe", "4zBg")], 0) && (e[d("13ff", "qfqE")](), e["cloakDurable"] = e[d("1400", "*gk(")])) : this[d("7cc", "2^0s")][d("673", "7WQB")][d("1401", "2^0s")](d("7fa", "5dtt"), d("1402", "0tes"))
                                }
                            }))
                        }
                    }
                },
                {
                    key: n[d("1403", "(@(7")],
                    value: function() {
                        var t = {
                            cBOyB: function(t, e) {
                                return n["kfLWr"](t, e)
                            },
                            jJSNO: function(t, n, e) {
                                return t(n, e)
                            }
                        };
                        if (n[d("1404", "jum&")](n[d("1405", "jQ0X")], n[d("1406", "(pLq")])) this[d("1407", "o#Hw")] || this[d("ab1", "ZDnO")][d("1408", "U4xf")]["add"]({
                            targets: this,
                            alpha: {
                                from: 1,
                                to: .5
                            },
                            ease: n[d("1409", "qgiy")],
                            duration: 200,
                            repeat: 1,
                            yoyo: !0
                        });
                        else if (t["cBOyB"](this[d("301", "qfqE")], h["catchLoc"])) return t[d("140a", "#cwz")](D, h[d("140b", "#cwz")], !0)
                    }
                },
                {
                    key: n[d("140c", "^AE%")],
                    value: function() {
                        this["onSnowOverflow"]()
                    }
                }]),
                w
            } ();
            function pn(t) {
                var n = {
                    kbWbo: function(t, n) {
                        return t - n
                    },
                    XHVRW: function(t, n) {
                        return t + n
                    },
                    HMvyT: function(t, n, e, w) {
                        return t(n, e, w)
                    },
                    gPPpN: "onEndGame",
                    vSFZf: function(t) {
                        return t()
                    },
                    xVXrs: d("140d", "P%4l"),
                    zUTDZ: d("140e", "Yr1b"),
                    HAtWn: function(t, n) {
                        return t == n
                    },
                    NaDFb: d("140f", "nedJ"),
                    eJeEr: function(t, n) {
                        return t === n
                    },
                    zUqbu: "GuEll",
                    vtEbZ: d("1410", "o#Hw"),
                    COwOK: d("1411", "7n#g"),
                    HZmSu: function(t, n) {
                        return t(n)
                    },
                    oWPrB: function(t, n) {
                        return t(n)
                    }
                },
                e = function() {
                    if (d("1412", "0%7z") !== n[d("1413", "Z*#m")]) {
                        var w = t;
                        w["body"][d("1414", "d$Th")](n["kbWbo"]( - w[d("1415", "U4xf")][d("1416", "qgiy")], w[d("1417", "(@(7")][d("1418", "7n#g")]))
                    } else {
                        if (n[d("1419", "^AE%")] == ("undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("9a", "hVad")]) return ! 1;
                        if (Reflect[d("90a", "(@(7")]["sham"]) return ! 1;
                        if (n[d("141a", "Jgtc")](n[d("141b", "^AE%")], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                        try {
                            if (n[d("141c", "7n#g")](n[d("141d", "e%cj")], d("141e", "m$jW"))) return Boolean[d("a0f", "@]mt")][d("e57", "Jgtc")][d("c62", "Jgtc")](Reflect[d("4a8", "e%cj")](Boolean, [], (function() {}))),
                            !0;
                            o["a"] && (t = this[d("1375", "lTsN")][d("141f", "hVad")](t), e = this[d("240", "7n#g")][d("1420", "7n#g")](e));
                            var c = this[d("bd4", "qfqE")][d("1373", "&98m")][d("5d8", "P%4l")]["width"],
                            i = n["kbWbo"](c, t);
                            return {
                                x: c,
                                y: n[d("1421", "U4xf")](e, this[d("1422", "jQ0X")][d("1423", "2^0s")](i))
                            }
                        } catch(s) {
                            if (!n["eJeEr"](n[d("1424", "5dtt")], n[d("1425", "o51H")])) return ! 1;
                            n[d("1426", "%LFB")](X, n[d("1427", "qgiy")], s, F[s]),
                            this[d("a3", "qgiy")][d("1428", "d$Th")](),
                            e && n[d("1429", "xuC*")](e),
                            this[d("98a", ")7lZ")][d("142a", "%LFB")](F[s]),
                            this[d("695", "e%cj")][d("142b", "jum&")](F["Await"])
                        }
                    }
                } ();
                return function() {
                    var w, r = n[d("142c", "Jgtc")](K, t);
                    if (e) {
                        var c = n["oWPrB"](K, this)[d("524", "hVad")];
                        w = Reflect["construct"](r, arguments, c)
                    } else w = r[d("142d", "d$Th")](this, arguments);
                    return b(this, w)
                }
            }
            var bn = function(t) {
                var n = {
                    vTLUf: function(t, n, e) {
                        return t(n, e)
                    },
                    TPEZc: function(t, n) {
                        return t + n
                    },
                    hMIkp: d("142e", "#cwz"),
                    fpMRX: "woVdv",
                    uFeLZ: function(t, n) {
                        return t(n)
                    },
                    trGog: function(t, n, e) {
                        return t(n, e)
                    },
                    ruJbs: d("142f", "o#Hw"),
                    qdfJY: d("f24", "bPML"),
                    Xdyqy: d("1430", "Jgtc"),
                    UigvB: "setDead"
                };
                n["vTLUf"](l, w, Ft);
                var e = n[d("1431", "nedJ")](pn, w);
                function w(t, r, c, i, s) {
                    var o;
                    return n[d("1432", "PQB4")](D, this, w),
                    (o = e[d("885", "hVad")](this, t, c))[d("1433", "&98m")] = r,
                    o["hillside"] = i,
                    o["role"] = s,
                    o[d("1434", "o#Hw")] = o[d("1435", "nedJ")][d("8bc", "d$Th")],
                    o["scene"]["physics"][d("1436", "B20D")]["enable"](p(o)),
                    o[d("139f", "B20D")][d("f4b", "y)Vp")] = !1,
                    o
                }
                return n["trGog"](h, w, [{
                    key: n[d("1437", "PQB4")],
                    get: function() {
                        return {
                            x: n["TPEZc"](this["role"]["x"], this[d("d84", "U4xf")][d("1438", "o51H")]),
                            y: n["TPEZc"](this[d("64c", "#cwz")]["y"], this["role"][d("1439", "o51H")])
                        }
                    }
                },
                {
                    key: n["qdfJY"],
                    get: function() {
                        return this["_speed"]
                    },
                    set: function(t) {
                        this[d("1260", "7WQB")] = this[d("19c", "y)Vp")][d("143a", "7WQB")](t)
                    }
                },
                {
                    key: n["Xdyqy"],
                    value: function(t, e, w) {
                        if ("jAmAj" !== n[d("143b", "#cwz")]) {
                            w && (t = this["scene"][d("143c", "o51H")](t), e = this["scene"][d("143d", "^AE%")](e));
                            var r = this["scene"]["game"][d("143e", "qfqE")][d("85e", "jum&")],
                            c = r - t;
                            return {
                                x: r,
                                y: e + this[d("1422", "jQ0X")][d("143f", "P%4l")](c)
                            }
                        }
                        return Boolean[d("14b", "Jgtc")]["valueOf"][d("9db", ")7lZ")](Reflect[d("b61", "%LFB")](Boolean, [], (function() {}))),
                        !0
                    }
                },
                {
                    key: d("1440", "jum&"),
                    value: function() {
                        var t = this[d("d64", "4zBg")],
                        n = this[d("1441", "U4xf")][d("1442", "#cwz")](t);
                        this[d("b4d", "ZDnO")]["x"] -= t,
                        this[d("139f", "B20D")]["y"] -= n
                    }
                },
                {
                    key: n[d("1443", "hVad")],
                    value: function() {}
                },
                {
                    key: d("1444", "x$Zb"),
                    value: function() {
                        if ("KHutb" !== n["fpMRX"]) this[d("1048", "m$jW")]();
                        else if (this[d("1445", ")7lZ")]) {
                            var t = this[d("661", "&98m")];
                            for (var e in t) Object[d("a33", "U4xf")][d("1446", "#cwz")][d("327", "0tes")](t, e) && this["dom"][d("1447", "xuC*")](e, t[e])
                        }
                    }
                }]),
                w
            } ();
            function Kn(t) {
                var n = {
                    eJHYR: function(t, n) {
                        return t == n
                    },
                    HxUYK: function(t, n) {
                        return t(n)
                    }
                },
                e = function() {
                    if (n[d("1448", "]DRy")](d("909", "Z*#m"), "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("208", "AI)w")]) return ! 1;
                    if (Reflect[d("51a", "tDVN")][d("e56", "hVad")]) return ! 1;
                    if (n[d("1449", "o51H")](d("14e", "@]mt"), "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                    try {
                        return Boolean["prototype"][d("144a", "qgiy")][d("144b", "@]mt")](Reflect[d("a35", "lTsN")](Boolean, [], (function() {}))),
                        !0
                    } catch(t) {
                        return ! 1
                    }
                } ();
                return function() {
                    var w, r = K(t);
                    if (e) {
                        var c = n[d("144c", "5knQ")](K, this)[d("524", "hVad")];
                        w = Reflect[d("893", "9#sL")](r, arguments, c)
                    } else w = r[d("e14", "y)Vp")](this, arguments);
                    return b(this, w)
                }
            }
            var mn = function(t) {
                var n = {
                    aSJQn: function(t, n) {
                        return t + n
                    },
                    YldKa: function(t, n, e) {
                        return t(n, e)
                    },
                    ctxoW: function(t, n) {
                        return t(n)
                    }
                };
                n["YldKa"](l, w, bn);
                var e = n[d("144d", "x$Zb")](Kn, w);
                function w(t, r, c) {
                    var i;
                    D(this, w),
                    (i = e[d("144e", "*A)#")](this, t, L[d("144f", "y)Vp")], L[d("1450", "7WQB")], r, c))[d("12ab", "]DRy")](0),
                    i[d("1217", "*gk(")][d("9cc", "0%7z")] = 99,
                    i["design"][d("f23", "o#Hw")] = 78,
                    i[d("1451", "P%4l")]["setSize"](75, 75),
                    i[d("472", "qfqE")][d("1452", "7n#g")](5, 0);
                    var s = n[d("1453", "PQB4")](i[d("cc4", "5knQ")]["x"], i[d("db", "xJ1F")]["roleWidth"]),
                    o = n[d("1454", "o#Hw")](i[d("864", "PQB4")][d("1455", "(pLq")][d("1456", "lTsN")]["y"], i["role"][d("1457", "lTsN")]),
                    a = i[d("1458", "0%7z")](s, o),
                    u = a["x"],
                    f = a["y"];
                    return i["x"] = u,
                    i["y"] = f,
                    i
                }
                return w
            } ();
            function Mn(t) {
                var n = {
                    aKfKo: function(t, n) {
                        return t == n
                    },
                    vjyKk: d("fd0", "tDVN"),
                    ScHBp: function(t, n) {
                        return t(n)
                    },
                    biPdq: function(t, n, e) {
                        return t(n, e)
                    }
                },
                e = function() {
                    if (n[d("1459", "U4xf")](n[d("145a", "lTsN")], "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect["construct"]) return ! 1;
                    if (Reflect[d("4a0", "bPML")][d("145b", "#cwz")]) return ! 1;
                    if (n[d("145c", "ZDnO")]("function", "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                    try {
                        return Boolean["prototype"][d("145d", "d$Th")][d("669", "m$jW")](Reflect[d("c85", "m$jW")](Boolean, [], (function() {}))),
                        !0
                    } catch(t) {
                        return ! 1
                    }
                } ();
                return function() {
                    var w, r = K(t);
                    if (e) {
                        var c = n[d("145e", "5knQ")](K, this)[d("145f", "0%7z")];
                        w = Reflect["construct"](r, arguments, c)
                    } else w = r[d("1460", "*A)#")](this, arguments);
                    return n["biPdq"](b, this, w)
                }
            }
            mn[d("1461", "@]mt")] = L[d("1462", "30HP")];
            var vn = function(t) {
                var n = {
                    jKdCm: function(t, n) {
                        return t == n
                    },
                    uKpIp: function(t, n) {
                        return t !== n
                    },
                    FXiBQ: "XQICq",
                    Gxfwh: function(t, n, e) {
                        return t(n, e)
                    },
                    nNkcK: function(t, n) {
                        return t + n
                    },
                    jizUy: function(t, n) {
                        return t + n
                    },
                    Qgiii: function(t, n) {
                        return t / n
                    },
                    NwZpz: function(t, n) {
                        return t / n
                    },
                    JSsZq: function(t, n) {
                        return t + n
                    },
                    ozXef: "wBHDJ",
                    cJVLj: d("1463", "@]mt"),
                    ViMyB: d("1464", "B20D"),
                    ZJcYR: function(t, n, e) {
                        return t(n, e)
                    },
                    UjKen: function(t, n) {
                        return t(n)
                    },
                    ybaFa: d("1465", "5knQ")
                };
                n["ZJcYR"](l, w, bn);
                var e = n["UjKen"](Mn, w);
                function w(t, c, i) {
                    var s = {
                        BLUgc: d("9de", "(@(7"),
                        cjhIa: function(t, e) {
                            return n["jKdCm"](t, e)
                        },
                        cKwlG: "function"
                    };
                    if (n["uKpIp"](d("1466", "5dtt"), n["FXiBQ"])) {
                        var o;
                        n[d("1467", "d$Th")](D, this, w),
                        (o = e[d("9db", ")7lZ")](this, t, Z[d("1468", "9#sL")], Z[d("1469", "Jgtc")], c, i))[d("146a", "&98m")] = !1,
                        o[d("146b", "e%cj")](.5),
                        o[d("146c", "^Eu9")][d("85e", "jum&")] = 290,
                        o[d("146d", "ZDnO")]["height"] = 290,
                        o["body"]["setSize"](272, 387),
                        o["body"][d("a5f", "y)Vp")](115, 150);
                        var a = n[d("146e", "]DRy")](n[d("146f", "9#sL")](o[d("1470", "0%7z")]["x"] + o[d("1471", "^AE%")][d("1472", "bPML")][d("1473", "S(PA")], n[d("1474", "x$Zb")](o[d("1475", "0tes")][d("859", "PQB4")][d("1476", "*gk(")]["x"], 2)), n[d("1477", "(@(7")](o[d("1478", "2^0s")], 2)),
                        u = n[d("1479", "qgiy")](o[d("479", ")7lZ")][d("147a", "xuC*")], o["role"]["roleHeight"]) - o["displayHeight"] / 2,
                        f = o[d("147b", "^Eu9")](a, u),
                        O = f["x"],
                        h = f["y"];
                        return o["x"] = O,
                        o["y"] = h,
                        o["speed"] = 13,
                        o[d("5e6", "hVad")][d("147c", "(pLq")](ct[d("147d", "4zBg")]),
                        o
                    }
                    if (s["BLUgc"] == ("undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("7d", "Jgtc")]) return ! 1;
                    if (Reflect[d("256", "x$Zb")][d("147e", "7n#g")]) return ! 1;
                    if (s[d("147f", ")7lZ")](s[d("1480", ")7lZ")], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                    try {
                        return Boolean[d("c28", "o51H")]["valueOf"][d("e8", "y)Vp")](Reflect[d("256", "x$Zb")](Boolean, [], (function() {}))),
                        !0
                    } catch(C) {
                        return ! 1
                    }
                }
                return n[d("1481", "qfqE")](h, w, [{
                    key: n[d("1482", "]DRy")],
                    value: function() {
                        var t = this;
                        this[d("1483", "#cwz")] || (this["body"]["setEnable"](!1), this[d("70c", "o51H")][d("1484", "tDVN")][d("1485", "jQ0X")]({
                            targets: this,
                            props: {
                                scale: {
                                    value: 0,
                                    ease: n[d("1486", "o#Hw")]
                                },
                                angle: {
                                    value: 360,
                                    ease: n["ViMyB"]
                                }
                            },
                            ease: "Linear",
                            duration: 500,
                            repeat: 0,
                            onComplete: function() {
                                return n["uKpIp"](n[d("1487", "#cwz")], n[d("1488", "*A)#")]) ? t[d("1489", "bPML")]() : this["scene"][d("148a", "hVad")]["config"][d("857", "5dtt")]
                            }
                        }))
                    }
                }]),
                w
            } ();
            function yn(t) {
                var n = {
                    KjICT: function(t, n) {
                        return t == n
                    },
                    OhIEQ: d("95", "B20D"),
                    lZBkP: function(t, n) {
                        return t(n)
                    },
                    MxkRx: function(t, n) {
                        return t(n)
                    }
                },
                e = function() {
                    if (n[d("148b", "Jgtc")](d("148c", "7n#g"), "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("88a", "S(PA")]) return ! 1;
                    if (Reflect[d("51a", "tDVN")][d("ed6", "U4xf")]) return ! 1;
                    if (n[d("148d", "bPML")](n[d("148e", "ZDnO")], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                    try {
                        return Boolean[d("148f", "0tes")][d("9da", "xuC*")][d("81", "e%cj")](Reflect[d("c7b", "ZDnO")](Boolean, [], (function() {}))),
                        !0
                    } catch(t) {
                        return ! 1
                    }
                } ();
                return function() {
                    var w, r = n[d("1490", "xJ1F")](K, t);
                    if (e) {
                        var c = n["MxkRx"](K, this)["constructor"];
                        w = Reflect[d("a35", "lTsN")](r, arguments, c)
                    } else w = r[d("1491", "qfqE")](this, arguments);
                    return b(this, w)
                }
            }
            vn[d("1492", "9#sL")] = Z[d("86b", "(@(7")];
            var jn = function(t) {
                var n = {
                    SnhtL: function(t, n) {
                        return t(n)
                    },
                    DgtLO: function(t, n, e) {
                        return t(n, e)
                    },
                    JfRys: function(t, n) {
                        return t === n
                    },
                    Sdsgt: d("1493", "bPML"),
                    hrxzH: d("1494", "Jgtc"),
                    axGpX: function(t, n) {
                        return t + n
                    },
                    ubHVi: function(t, n) {
                        return t + n
                    },
                    oRcvF: function(t, n) {
                        return t + n
                    },
                    WuRid: function(t, n) {
                        return t * n
                    },
                    WPlma: function(t, n) {
                        return t + n
                    },
                    GeBIn: function(t, n) {
                        return t - n
                    },
                    HwLry: function(t, n, e) {
                        return t(n, e)
                    }
                };
                l(w, bn);
                var e = n[d("1495", "]DRy")](yn, w);
                function w(t, r, c) {
                    var i = {
                        KiUOt: function(t, e) {
                            return n[d("1496", "o#Hw")](t, e)
                        },
                        vMwWj: function(t, e, w) {
                            return n[d("1497", "y)Vp")](t, e, w)
                        }
                    };
                    if (!n[d("1498", "#cwz")](n[d("1499", "qgiy")], n[d("149a", "2^0s")])) {
                        var s, o = i["KiUOt"](l, t);
                        if (e) {
                            var a = l(this)[d("4a7", "xJ1F")];
                            s = Reflect[d("60", "o#Hw")](o, arguments, a)
                        } else s = o[d("2e9", "x$Zb")](this, arguments);
                        return i[d("14b1", "nedJ")](C, this, s)
                    }
                    var u = n[d("149b", "2^0s")]["split"]("|"),
                    f = 0;
                    while (1) {
                        switch (u[f++]) {
                        case "0":
                            var O = n[d("149c", "AI)w")](M[d("caf", "9#sL")]["x"], M[d("ac0", "(pLq")]["roleWidth"]),
                            h = n[d("149d", "AI)w")](M[d("149e", "P%4l")]["body"][d("149f", "x$Zb")]["y"], M[d("db", "xJ1F")][d("14a0", "]DRy")]),
                            C = M["role"]["staticY"],
                            l = Math["floor"](n[d("14a1", "ZDnO")](n[d("14a2", "2^0s")](Math[d("14a3", "e%cj")](), n[d("14a4", "bPML")](h - C, 1)), C)),
                            g = M[d("14a5", "5dtt")](O, l),
                            p = g["x"],
                            b = g["y"];
                            continue;
                        case "1":
                            var K = n["GeBIn"](M[d("14a6", "^Eu9")][d("14a7", "(@(7")], 1),
                            m = Math[d("14a8", "^Eu9")](n[d("14a9", "tDVN")](Math["random"](), K))["toString"]()["padStart"](2, "0");
                            continue;
                        case "2":
                            n[d("14aa", "x$Zb")](D, this, w),
                            (M = e[d("add", "7WQB")](this, t, Z[d("14ab", "5knQ")], Z["JIU_MEI"], r, c))[d("14ac", "xuC*")](0),
                            M[d("e7d", "e%cj")][d("14ad", "m$jW")] = 110,
                            M[d("1361", "AI)w")]["height"] = 120,
                            M[d("1083", "(@(7")][d("14ae", "^Eu9")](90, 117),
                            M[d("a5a", "&98m")][d("14af", "e%cj")](7, 0);
                            continue;
                        case "3":
                            return M["x"] = p,
                            M["y"] = b,
                            M;
                        case "4":
                            M["setFrame"]("" [d("722", "lTsN")](m, d("14b0", "hVad")));
                            continue;
                        case "5":
                            var M;
                            continue
                        }
                        break
                    }
                }
                return w
            } ();
            function Qn(t) {
                var n = {
                    jZGgj: function(t, n) {
                        return t == n
                    },
                    SxncC: d("9de", "(@(7"),
                    DHazu: "function",
                    ZdeHB: d("14b2", "7WQB"),
                    iDMeR: function(t, n) {
                        return t(n)
                    },
                    BvZzr: function(t, n) {
                        return t(n)
                    },
                    sUJNv: function(t, n, e) {
                        return t(n, e)
                    }
                },
                e = function() {
                    if (n["jZGgj"](n["SxncC"], "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("bbb", "U4xf")]) return ! 1;
                    if (Reflect["construct"][d("12d4", "9#sL")]) return ! 1;
                    if (n[d("14b3", "xuC*")](n["DHazu"], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                    try {
                        return Boolean["prototype"]["valueOf"][d("14b4", "^AE%")](Reflect[d("9e4", "^AE%")](Boolean, [], (function() {}))),
                        !0
                    } catch(t) {
                        return ! 1
                    }
                } ();
                return function() {
                    if (n[d("14b5", "5knQ")] === n[d("14b6", "xuC*")]) {
                        var w, r = n[d("14b7", "o51H")](K, t);
                        if (e) {
                            var c = n[d("14b8", "y)Vp")](K, this)[d("aa1", "d$Th")];
                            w = Reflect[d("256", "x$Zb")](r, arguments, c)
                        } else w = r[d("14b9", "lTsN")](this, arguments);
                        return n[d("14ba", "PQB4")](b, this, w)
                    }
                    this[d("14bb", "m$jW")][d("14bc", "0tes")][d("83f", "30HP")] && (this["bubble"][d("14bd", "o51H")][d("842", "]DRy")](!1), this[d("14be", "y)Vp")]["triangle"][d("14bf", "%LFB")](!1))
                }
            }
            jn[d("14c0", "#cwz")] = Z["JIU_MEI"];
            var qn = function(t) {
                var n = {
                    CKQNA: function(t, n, e) {
                        return t(n, e)
                    },
                    ecidC: function(t, n) {
                        return t + n
                    },
                    rUCYn: function(t, n) {
                        return t + n
                    },
                    rDydQ: function(t, n) {
                        return t(n)
                    }
                };
                l(w, bn);
                var e = n[d("14c1", "%LFB")](Qn, w);
                function w(t, r, c) {
                    var i;
                    n[d("14c2", "hVad")](D, this, w),
                    (i = e["call"](this, t, L[d("14c3", "4zBg")], L["STONE"], r, c))[d("14c4", "^AE%")](0, 1),
                    i[d("14c5", "&98m")]["width"] = 96,
                    i[d("b9b", "x$Zb")]["height"] = 126,
                    i[d("12d7", "*A)#")][d("14c6", "hVad")](70, 118),
                    i[d("b3d", "]DRy")][d("14c7", "30HP")](10, 8);
                    var s = n[d("14c8", "PQB4")](i[d("14c9", "nedJ")]["x"], i[d("caf", "9#sL")][d("14ca", "ZDnO")]),
                    o = n["rUCYn"](i[d("14cb", "2^0s")]["staticY"], i["role"][d("14cc", "#cwz")]),
                    a = i["overflowPos"](s, o),
                    u = a["x"],
                    f = a["y"];
                    return i["x"] = u,
                    i["y"] = f,
                    i
                }
                return w
            } ();
            function kn(t) {
                var n = {
                    bkshY: function(t, n) {
                        return t == n
                    },
                    qUsHX: "function",
                    aWHYT: function(t, n) {
                        return t === n
                    },
                    fThCN: d("14cd", "bPML"),
                    ViXZH: function(t, n) {
                        return t(n)
                    },
                    SxEpW: function(t, n, e) {
                        return t(n, e)
                    }
                },
                e = function() {
                    if (n[d("14ce", "2^0s")](d("d8f", "5dtt"), "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("36a", "2^0s")]) return ! 1;
                    if (Reflect["construct"]["sham"]) return ! 1;
                    if (n[d("14cf", "qgiy")] == ("undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                    try {
                        return n[d("14d0", "hVad")](n[d("14d1", "5dtt")], n["fThCN"]) ? (Boolean[d("16", "hVad")]["valueOf"][d("144b", "@]mt")](Reflect["construct"](Boolean, [], (function() {}))), !0) : this
                    } catch(t) {
                        return ! 1
                    }
                } ();
                return function() {
                    var w, r = n["ViXZH"](K, t);
                    if (e) {
                        var c = n["ViXZH"](K, this)[d("1d", "lTsN")];
                        w = Reflect["construct"](r, arguments, c)
                    } else w = r["apply"](this, arguments);
                    return n[d("14d2", "qgiy")](b, this, w)
                }
            }
            qn["primaryKey"] = L[d("14d3", "xJ1F")];
            var An = function(t) {
                var n = {
                    XwrsB: function(t, n) {
                        return t === n
                    },
                    aIetz: function(t, n, e) {
                        return t(n, e)
                    },
                    EGVQs: function(t, n) {
                        return t * n
                    },
                    YVPkl: "yIUBb",
                    sDQAO: function(t, n) {
                        return t !== n
                    },
                    DXJEY: "CyGRX",
                    mqkpw: "EtYRY",
                    jZKsO: function(t, n) {
                        return t < n
                    },
                    ErRsL: d("14d4", "(@(7"),
                    pvzMT: d("14d5", "hVad"),
                    zahgC: "via-animated via-shake",
                    duVGW: d("14d6", "0tes"),
                    kpGpA: function(t, n) {
                        return t <= n
                    },
                    oQaWr: function(t, n) {
                        return t(n)
                    },
                    fBbWt: d("14d7", "U4xf"),
                    MvsuU: "overDelete"
                };
                l(w, Kt);
                var e = n[d("14d8", "xuC*")](kn, w);
                function w(t, r, c) {
                    var i;
                    if (!n[d("14d9", "PQB4")](d("14da", "%LFB"), d("14db", "(@(7"))) return n[d("14dc", "#cwz")](D, this, w),
                    (i = e[d("9db", ")7lZ")](this, t))["interval"] = 1e3,
                    i[d("14dd", "0%7z")] = 15,
                    i[d("14de", "nedJ")] = [0, 0, 0, 1, 1, 1, 2, 3, 3, 3],
                    i[d("14df", "S(PA")] = [qn, vn, mn, jn],
                    i[d("14e0", "d$Th")] = r,
                    i["role"] = c,
                    i["timer"] = new Jt(i[d("14e1", "^AE%")], !0),
                    i[d("14e2", "5knQ")] = new Kt(t),
                    i[d("14e3", "%LFB")](),
                    i;
                    this[d("1072", "nedJ")] = t
                }
                return h(w, [{
                    key: n[d("14e4", "m$jW")],
                    value: function() {
                        var t = Math[d("14e5", "x$Zb")](n["EGVQs"](Math[d("14e6", "x$Zb")](), this[d("14e7", "e%cj")]["length"])),
                        e = this[d("14e8", "o#Hw")][t],
                        w = new(0, this["barriers"][e])(this[d("1375", "lTsN")], this["hillside"], this[d("14e9", "7n#g")]);
                        w instanceof vn && this[d("14ea", "^AE%")]["add"](w),
                        this[d("13aa", "*gk(")](w),
                        this["overDelete"]()
                    }
                },
                {
                    key: n["MvsuU"],
                    value: function() {
                        if (!n[d("14eb", "bPML")](n[d("14ec", "nedJ")], n["YVPkl"])) return n["XwrsB"](d("14f6", "7WQB"), this[d("1ae", "Yr1b")]) ? {
                            width: 111,
                            height: 164,
                            bodyW: 50,
                            bodyH: 140,
                            bodyOffsetX: 45,
                            bodyOffsetY: 15
                        }: {
                            width: 416,
                            height: 176,
                            bodyW: 336,
                            bodyH: 144,
                            bodyOffsetX: 24,
                            bodyOffsetY: 20
                        };
                        var t = this[d("14ed", "^AE%")]();
                        if (t[d("14ee", "m$jW")] >= this[d("14ef", "@]mt")]) {
                            if (!n[d("14f0", "jQ0X")](n["DXJEY"], n[d("14f1", "Z*#m")])) return this[d("14f5", "y)Vp")];
                            for (var e = 0; n["jZKsO"](e, 5); e++) t[0][d("14f2", "^AE%")]();
                            X(n[d("14f3", "5knQ")], t[d("14f4", "PQB4")])
                        }
                    }
                },
                {
                    key: d("b22", "^Eu9"),
                    value: function(t) {
                        if (n[d("14f7", "PQB4")](n[d("14f8", "tDVN")], n[d("14f9", "lTsN")])) this["propBox"]["dom"]["setAttribute"](n["pvzMT"], n[d("14fa", "lTsN")]);
                        else {
                            this[d("14fb", "9#sL")][d("563", "0tes")](t, this[d("14fc", "hVad")], this);
                            var e = this["getChildren"]();
                            n[d("14fd", "5dtt")](e["length"], 0) || Phaser[d("14fe", "ZDnO")][d("14ff", "Yr1b")](e, (function(t) {
                                t[d("12e0", "(@(7")]()
                            }), this)
                        }
                    }
                }]),
                w
            } ();
            An[d("1500", "m$jW")] = {
                stone: qn["primaryKey"],
                ghost: vn[d("1433", "&98m")],
                bun: mn[d("1501", "Yr1b")],
                jiuMei: jn[d("9d6", "e%cj")]
            };
            var Pn = function() {
                var t = {
                    hDRKS: function(t, n, e) {
                        return t(n, e)
                    },
                    KeGsA: "div",
                    TFTrw: "100%",
                    VioaP: d("1502", "P%4l"),
                    cLTAj: d("1503", "hVad"),
                    OhNpX: d("1504", "xJ1F"),
                    rQmhZ: "flex",
                    ldbRA: d("1505", "S(PA"),
                    qXIBR: function(t, n) {
                        return t === n
                    },
                    OOPTz: d("1506", "7WQB"),
                    hTQSS: d("1507", "nedJ"),
                    vlZPB: "src",
                    blejm: d("1508", "x$Zb"),
                    LCYMd: d("71a", "30HP"),
                    UeoCk: d("1509", "bPML"),
                    CGCoq: "changeGuideImg",
                    KNZpz: d("150a", "&98m"),
                    HyelM: d("150b", ")7lZ"),
                    LUbrv: d("150c", "ZDnO")
                };
                function n(e) {
                    t["hDRKS"](D, this, n),
                    this[d("150d", "2^0s")] = 0,
                    this[d("150e", "tDVN")] = [_[d("150f", "B20D")], _[d("1510", "lTsN")], _["guide_tang_3"]],
                    this["scene"] = e;
                    var w = new ut(e, t[d("1511", "Z*#m")], {
                        width: t[d("1512", "AI)w")],
                        height: t["TFTrw"],
                        padding: 0,
                        margin: 0,
                        position: t["VioaP"],
                        left: 0,
                        top: 0,
                        overflow: t["cLTAj"],
                        zIndex: 20,
                        backgroundColor: t[d("1513", "^Eu9")],
                        display: t[d("1514", "bPML")],
                        alignItems: t["ldbRA"],
                        justifyContent: "center"
                    },
                    !0),
                    r = this[d("1515", "xuC*")](),
                    c = this["createConfirm"]();
                    w[d("1516", "lTsN")](r),
                    w["add"](c),
                    this[d("1517", "9#sL")] = w,
                    this["guideDom"] = r,
                    this["confirm"] = c
                }
                return t[d("1518", "0%7z")](h, n, [{
                    key: "baseUrl",
                    get: function() {
                        return !! t[d("1519", "Yr1b")](d("151a", "(pLq"), d("151b", "2^0s")) && this["scene"]["game"]["$content"][d("117e", "*gk(")]
                    }
                },
                {
                    key: t[d("151c", "Yr1b")],
                    value: function() {
                        this[d("8e7", "lTsN")] && this[d("151d", "&98m")][d("151e", "jQ0X")](),
                        this[d("151f", "nedJ")] = null
                    }
                },
                {
                    key: t["UeoCk"],
                    value: function() {
                        var n = {
                            lZRNT: function(n, e, w) {
                                return t[d("1520", "PQB4")](n, e, w)
                            },
                            pSMIh: d("1521", "0%7z"),
                            xydFg: function(t, n) {
                                return t(n)
                            },
                            mTKVE: function(t, n) {
                                return t === n
                            },
                            HUxPf: t[d("1522", "Z*#m")]
                        },
                        e = this;
                        return new Promise((function(t) {
                            var w = {
                                aTaxM: function(t, e, w) {
                                    return n["lZRNT"](t, e, w)
                                },
                                crtIG: n[d("1523", "U4xf")],
                                wzWof: function(t, e) {
                                    return n["xydFg"](t, e)
                                }
                            };
                            n[d("1524", "jum&")](n["HUxPf"], "fnonC") ? (w[d("1525", "^AE%")](D, this, e), this["speedUping"] = !1, this[d("1526", "@]mt")] = !1, this[d("10f6", "hVad")] = !1, this[d("1527", "x$Zb")] = 0) : e["confirm"][d("74e", "PQB4")][d("11d6", "bPML")](n["pSMIh"], (function n() {
                                e[d("1528", "qfqE")] === e["guides"]["length"] - 1 ? (e[d("1529", "xJ1F")][d("152a", "o#Hw")]["removeEventListener"](w["crtIG"], n), e["remove"](), w[d("152b", "o#Hw")](t, !0)) : (e["progress"]++, e[d("152c", "7n#g")]()),
                                e["progress"] === e[d("152d", "@]mt")][d("152e", "5dtt")] - 1 && e[d("152f", "B20D")]()
                            }))
                        }))
                    }
                },
                {
                    key: t[d("1530", "nedJ")],
                    value: function() {
                        var n = this["guides"][this["progress"]],
                        e = "" [d("75a", "#cwz")](this[d("755", "5knQ")], t["hTQSS"])[d("29f", "d$Th")](n);
                        this[d("1531", "e%cj")][d("e4a", "jQ0X")][d("1447", "xuC*")](t[d("1532", "7WQB")], e)
                    }
                },
                {
                    key: t[d("1533", "o51H")],
                    value: function() {
                        var n = this[d("a84", "^Eu9")][0],
                        e = "" [d("90f", "tDVN")](this[d("79d", "xJ1F")], t["hTQSS"])[d("4e8", "ZDnO")](n);
                        return new ut(this[d("1375", "lTsN")], t["blejm"], {
                            width: t[d("1534", "xuC*")]
                        },
                        !1, {
                            src: e
                        })
                    }
                },
                {
                    key: t[d("1535", "7n#g")],
                    value: function() {
                        var n = "" [d("580", "P%4l")](this["baseUrl"], t[d("1536", "&98m")])[d("1537", "(@(7")](_[d("1538", "e%cj")]);
                        this[d("1539", "lTsN")][d("e4a", "jQ0X")][d("153a", "nedJ")](d("153b", "Z*#m"), n)
                    }
                },
                {
                    key: t[d("153c", "Yr1b")],
                    value: function() {
                        var n = "" [d("e11", "jQ0X")](this[d("153d", "B20D")], t[d("153e", "AI)w")])[d("6be", "&98m")](_[d("153f", "*A)#")]);
                        return new ut(this[d("9a9", "%LFB")], t["blejm"], {
                            width: 318,
                            height: 90,
                            position: t["VioaP"],
                            left: 659,
                            top: 600
                        },
                        !1, {
                            src: n
                        })
                    }
                }]),
                n
            } ();
            function Bn(t) {
                var n = {
                    BILgc: "chBUX",
                    yfFgB: "VZEmp",
                    CvqSn: function(t, n) {
                        return t == n
                    },
                    BqrJf: "undefined",
                    WwgcC: "function",
                    fLTYV: function(t, n) {
                        return t(n)
                    },
                    MLeLy: function(t, n) {
                        return t !== n
                    },
                    eCbLx: d("1540", "y)Vp"),
                    WpDxd: function(t, n) {
                        return t(n)
                    },
                    kXlFC: function(t, n, e) {
                        return t(n, e)
                    }
                },
                e = function() {
                    if (n[d("1541", "7n#g")] !== n[d("1542", "2^0s")]) {
                        if (n[d("1543", "ZDnO")](n[d("1544", "ZDnO")], "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect["construct"]) return ! 1;
                        if (Reflect[d("9a", "hVad")][d("1545", "0%7z")]) return ! 1;
                        if (n[d("1546", "xuC*")](n["WwgcC"], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                        try {
                            return Boolean[d("1547", "B20D")]["valueOf"][d("91", "xuC*")](Reflect["construct"](Boolean, [], (function() {}))),
                            !0
                        } catch(w) {
                            return ! 1
                        }
                    } else {
                        var e = new Dn(this);
                        this[d("cdd", "o51H")][d("1548", "qfqE")] = e,
                        this[d("317", "ZDnO")]["domScene"]["onJump"] = function() {
                            return t[d("1549", "x$Zb")]()
                        },
                        this["dmger"][d("154a", "^AE%")][d("154b", "Z*#m")] = function() {
                            return t[d("154c", "x$Zb")]()
                        },
                        this[d("154d", "Jgtc")][d("154e", "tDVN")][d("154f", "*A)#")] = function() {
                            return t[d("779", "(@(7")]()
                        }
                    }
                } ();
                return function() {
                    var w, r = n["fLTYV"](K, t);
                    if (e) {
                        if (n[d("1550", "m$jW")](n[d("1551", "Z*#m")], n[d("1552", "d$Th")])) return Boolean["prototype"][d("90", "o51H")][d("aa2", "o#Hw")](Reflect[d("d90", "4zBg")](Boolean, [], (function() {}))),
                        !0;
                        var c = n[d("1553", "xuC*")](K, this)["constructor"];
                        w = Reflect[d("97a", "qfqE")](r, arguments, c)
                    } else w = r[d("9f1", "xJ1F")](this, arguments);
                    return n["kXlFC"](b, this, w)
                }
            }
            var xn = function() {
                var t = {
                    nkBqp: function(t, n, e) {
                        return t(n, e)
                    },
                    WFvrR: function(t, n) {
                        return t >= n
                    },
                    REhAr: function(t, n) {
                        return t * n
                    },
                    YNdda: d("1554", "4zBg"),
                    qWeVg: function(t, n) {
                        return t + n
                    },
                    pXsCS: function(t, n) {
                        return t - n
                    },
                    FbyoZ: function(t, n) {
                        return t === n
                    },
                    TWrMN: "bot",
                    UUdoa: function(t, n) {
                        return t !== n
                    },
                    VzjcA: d("1555", "@]mt"),
                    SbSEk: function(t, n, e) {
                        return t(n, e)
                    },
                    kTRZC: d("c8d", "(@(7")
                };
                function n() {
                    t[d("1556", "5dtt")](D, this, n),
                    this[d("1557", "*A)#")] = !1,
                    this[d("1558", "(@(7")] = !1,
                    this["_score"] = 0
                }
                return t[d("1559", "o51H")](h, n, [{
                    key: t[d("155a", "^Eu9")],
                    get: function() {
                        if (t[d("155b", "e%cj")]("HIxdx", "HIxdx")) {
                            this[d("155c", "nedJ")]++,
                            t[d("155d", "m$jW")](this[d("155e", "Yr1b")], this[d("155f", "5dtt")][d("947", "0tes")]) && (this[d("1560", "o51H")] = Math[d("1561", "lTsN")](t[d("1562", "(pLq")](Math["random"](), this[d("1563", "d$Th")][d("25f", "o51H")])));
                            var n = this[d("1564", "xJ1F")][this["currentIndex"]];
                            return t[d("1565", "(pLq")] === n ? {
                                pos: n,
                                y: t[d("1566", "(pLq")]((t[d("1567", "y)Vp")](this[d("631", "5dtt")][d("95c", "%LFB")], this["padTop"]) - this["padBottom"]) / 2, this[d("1568", "y)Vp")])
                            }: t[d("1569", "xJ1F")](t[d("156a", "jQ0X")], n) ? {
                                pos: n,
                                y: this[d("2a5", "xuC*")][d("156b", "x$Zb")] - this[d("156c", "B20D")]
                            }: {
                                pos: n,
                                y: this[d("156d", "bPML")]
                            }
                        }
                        return this[d("c90", "hVad")]
                    },
                    set: function(n) {
                        t["UUdoa"](d("156e", "qfqE"), t["VzjcA"]) ? (this[d("156f", "^AE%")] = n, this[d("e", "y)Vp")][d("1570", "7n#g")](n)) : (o["a"][d("102d", "9#sL")][d("1571", "U4xf")] && o["a"]["dmger"][d("d0e", "nedJ")][d("1572", "jQ0X")](), o["a"][d("1573", "Yr1b")][d("1574", "o51H")](Y["MU_TOU"]), o["a"]["$content"][d("1575", "Jgtc")][d("1576", "7WQB")]({
                            score: o["a"][d("47c", "S(PA")][d("1577", "^AE%")],
                            role: o["a"]["dmger"][d("cde", "o#Hw")][d("1578", "#cwz")],
                            playTime: o["a"][d("c6d", "&98m")][d("100f", "5knQ")][d("c4f", "qfqE")]
                        }), o["a"][d("7c3", "Yr1b")][d("d7c", "*A)#")]())
                    }
                }]),
                n
            } (),
            En = function(t) {
                var n = {
                    GGuIo: function(t, n, e) {
                        return t(n, e)
                    },
                    XQItJ: function(t, n) {
                        return t !== n
                    },
                    UDguH: d("1579", "Z*#m"),
                    nVGNI: d("157a", "e%cj"),
                    NiPgs: d("157b", "o51H"),
                    ZwGdC: d("157c", "*A)#"),
                    KisDG: d("157d", "*gk("),
                    TTGut: function(t, n) {
                        return t === n
                    },
                    hwBVf: d("157e", "5dtt"),
                    DlxCl: d("157f", "S(PA"),
                    LAgWl: d("1580", "B20D"),
                    ckQQA: d("1581", "(@(7"),
                    yxHxQ: function(t, n) {
                        return t !== n
                    },
                    ttPqZ: d("1582", "0tes"),
                    UzlIm: d("1583", "P%4l"),
                    LZkPa: function(t) {
                        return t()
                    },
                    XKwgW: d("2a", "lTsN"),
                    OjVbC: "pLHYE",
                    xEtSN: d("1584", "*gk("),
                    Mzamj: "roLnz",
                    zWrAV: d("c77", "0%7z"),
                    rmTwb: d("9b3", "qfqE"),
                    jPmdN: d("1585", "5knQ"),
                    fWMVL: d("1586", "ZDnO"),
                    KTbxY: function(t, n) {
                        return t * n
                    },
                    KciFG: function(t, n) {
                        return t / n
                    },
                    tNLca: function(t, n) {
                        return t >= n
                    },
                    NiQDR: function(t, n) {
                        return t <= n
                    },
                    NFbWh: function(t, n) {
                        return t - n
                    },
                    zSvLb: function(t, n) {
                        return t / n
                    },
                    ZSWwZ: d("1587", "e%cj"),
                    EUzGc: function(t, n) {
                        return t(n)
                    },
                    VULwS: d("1549", "x$Zb"),
                    fJhRi: "onThrow",
                    NIzbM: d("1588", "y)Vp"),
                    OZnpk: d("1589", ")7lZ"),
                    fqzrq: d("158a", "xJ1F"),
                    PLtPZ: d("158b", "jum&"),
                    KRdvj: d("158c", "o#Hw"),
                    IOobk: function(t, n) {
                        return t(n)
                    },
                    ElQvB: d("158d", "]DRy"),
                    QgbfB: d("158e", "(pLq")
                };
                l(i, st);
                var e, w, c = n["EUzGc"](Bn, i);
                function i() {
                    var t;
                    return n[d("158f", "qfqE")](D, this, i),
                    (t = c[d("20f", "%LFB")](this, {
                        key: F[d("1590", "0%7z")]
                    }))[d("1591", "*gk(")] = 260,
                    t["multiple"] = 4,
                    t[d("1592", "lTsN")] = 0,
                    t["initInterval"] = 0,
                    t
                }
                return h(i, [{
                    key: n[d("1593", "PQB4")],
                    value: function() {
                        this["dmger"][d("1594", "jQ0X")] || this["dmger"]["role"][d("1595", "&98m")]()
                    }
                },
                {
                    key: n[d("1596", "&98m")],
                    value: function() {
                        this[d("282", "(@(7")]["isStop"] || this[d("d3c", "y)Vp")][d("1597", "hVad")]["throw"]()
                    }
                },
                {
                    key: n[d("1598", "Z*#m")],
                    value: function() {
                        var t = this;
                        this[d("d08", "bPML")]["role"][d("1599", "lTsN")] || this[d("e71", "qfqE")][d("159a", "30HP")] || this[d("159b", "^Eu9")][d("1575", "Jgtc")][d("159c", "P%4l")]((function(e) {
                            n[d("159d", "(pLq")](n["UDguH"], "okdRt") ? (D(this, t), this["isStop"] = !1, this[d("fdb", "S(PA")] = !1, this[d("159e", "xuC*")] = 0) : (t[d("b7b", "^Eu9")]["domScene"][d("159f", "ZDnO")](e["amount"] || 0), e[d("15a0", "(@(7")] ? (t["dmger"][d("4c7", "4zBg")][d("15a1", "xJ1F")](), t[d("15a2", "U4xf")][d("15a3", "#cwz")](Y["DOU_PENG"]), t["dmger"][d("cf6", "*A)#")]["useCloak"](), t[d("15a4", "e%cj")](n[d("15a5", "lTsN")])) : t[d("96f", "2^0s")][d("8d9", "nedJ")][d("15a6", "o51H")]())
                        }))
                    }
                },
                {
                    key: n[d("15a7", "30HP")],
                    value: function(t, e) {
                        e[d("15a8", "4zBg")]();
                        var w = An["barrierKeys"];
                        switch (e[d("15a9", "4zBg")]) {
                        case w[d("15aa", "qfqE")] : if (this["dmger"][d("cde", "o#Hw")][d("15ab", "ZDnO")]) return this[d("1054", "4zBg")][d("15ac", "Z*#m")]["flashing"]();
                            this["say"](d("15ad", "P%4l")),
                            this[d("2dd", "x$Zb")]["domScene"]["updateHp"](0),
                            this["stopGame"]();
                            break;
                        case w[d("15ae", "#cwz")] : if (this[d("b7c", "5knQ")][d("bd2", "tDVN")][d("15af", "PQB4")]) return this["dmger"][d("cc4", "5knQ")][d("15b0", "xuC*")]();
                            0 === this[d("15b1", "P%4l")]("-") ? this[d("15b2", "o51H")]() : this["dmger"][d("149e", "P%4l")][d("15b3", "S(PA")]();
                            break;
                        case w[d("15b4", "xJ1F")] : this[d("15b5", "o51H")]["play"](Y[d("15b6", "#cwz")]),
                            this[d("158b", "jum&")](n["NiPgs"]),
                            this[d("15b7", "jum&")]("+");
                            break;
                        case w[d("15b8", "^Eu9")] : this[d("15b9", "tDVN")](n[d("15ba", "4zBg")]),
                            this[d("15bb", "*gk(")]["play"](Y[d("15bc", "o#Hw")]),
                            this["dmger"][d("15bd", "U4xf")] += 10
                        }
                    }
                },
                {
                    key: d("15be", "%LFB"),
                    value: function(t, e) {
                        n[d("15bf", "(@(7")](n[d("15c0", "e%cj")], n[d("15c1", "2^0s")]) ? this["propNum"]["innerText"](n[d("15c2", "^Eu9")][d("6c2", "B20D")](t)) : (this[d("15c3", "jum&")][d("1128", "9#sL")](Y[d("15c4", "o#Hw")]), t[d("15c5", "xuC*")](), e[d("15c6", "@]mt")]())
                    }
                },
                {
                    key: n["fqzrq"],
                    value: function(t) {
                        X(n[d("15c7", "hVad")], t),
                        this[d("2dd", "x$Zb")][d("2de", "Yr1b")] = new gn(this, t, this["dmger"][d("15c8", "qgiy")]),
                        this[d("2dd", "x$Zb")]["duration"] = new Ut,
                        this[d("785", "o#Hw")][d("15c9", "ZDnO")] = new Jt(1e3, !0),
                        this[d("d03", "hVad")]["snowBarriers"] = new An(this, this["dmger"]["hillside"], this[d("4bf", "tDVN")]["role"]),
                        this[d("d5a", "2^0s")] = this[d("d08", "bPML")][d("15ca", "]DRy")][d("15cb", "qfqE")],
                        this[d("15cc", "U4xf")] = this["dmger"][d("15cd", "tDVN")][d("15ce", "o51H")],
                        this["scene"][d("15cf", "d$Th")]()
                    }
                },
                {
                    key: d("15d0", "4zBg"),
                    value: function(t) {
                        var n = "+" === t ? 50 : -30,
                        e = this["dmger"][d("d78", "B20D")]["hp"] + n,
                        w = Math["min"](Math["max"](e, 0), 100);
                        return this[d("af", ")7lZ")][d("15d1", "Yr1b")][d("15d2", "5knQ")](w),
                        w
                    }
                },
                {
                    key: n[d("15d3", "#cwz")],
                    value: function(t) {
                        var e = {
                            mfQAZ: function(t, n) {
                                return t === n
                            },
                            hLRWY: n[d("15d4", "xJ1F")],
                            fFVKb: "bingDongShan"
                        };
                        if (n["yxHxQ"](d("15d5", "qgiy"), n[d("15d6", "Jgtc")])) {
                            var w = Ot[this[d("4c6", "5dtt")]["role"]["cur"]],
                            r = Math["floor"](Math["random"]() * w[t]["length"]),
                            c = w[t][r];
                            this[d("c69", "jQ0X")]["role"][d("15b9", "tDVN")](c)
                        } else t[d("311", "0tes")][d("15d7", "S(PA")] || e[d("15d8", "Yr1b")](e["hLRWY"], w) && t[d("105a", "#cwz")][d("b8c", "4zBg")][d("15d9", "%LFB")] || e[d("15da", "4zBg")] === w && t["dmger"][d("1068", "^Eu9")]["freezeing"] || t[d("15db", "P%4l")][d("15dc", "m$jW")][d("1093", "^Eu9")](w, (function(n) {
                            return t[d("11bd", "5knQ")](w, n)
                        }))
                    }
                },
                {
                    key: n["KRdvj"],
                    value: (w = n[d("15dd", "Yr1b")](P, z[d("15de", "&98m")]((function t() {
                        var e, w = {
                            JGhNf: n[d("15df", "(pLq")],
                            exqpa: function(t) {
                                return n["LZkPa"](t)
                            },
                            YcGSk: n["XKwgW"]
                        },
                        r = this;
                        return z["wrap"]((function(t) {
                            for (;;) switch (t[d("15e0", ")7lZ")] = t[d("15e1", "PQB4")]) {
                            case 0:
                                return this[d("cac", "xJ1F")][d("c68", "#cwz")] = !0,
                                this[d("d19", "e%cj")][d("15e2", "(@(7")][d("15e3", "&98m")](w[d("15e4", "y)Vp")]),
                                e = function() {
                                    r["dmger"][d("15e5", "^AE%")] && r[d("c6e", "%LFB")]["bgm"][d("c1e", "@]mt")](),
                                    r["sound"][d("15e6", "AI)w")](Y["MU_TOU"]),
                                    r["$content"][d("15e7", "]DRy")][d("15e8", "Jgtc")]({
                                        score: r[d("cdd", "o51H")][d("15e9", "o#Hw")],
                                        role: r[d("b7c", "5knQ")]["role"][d("13e5", "Yr1b")],
                                        playTime: r[d("108d", "B20D")][d("15ea", "ZDnO")][d("15eb", "&98m")]
                                    }),
                                    r[d("15ec", "o#Hw")]["pause"]()
                                },
                                t[d("15ed", "(pLq")] = 3,
                                t[d("346", "S(PA")] = 6,
                                this[d("d19", "e%cj")]["role"][d("15ee", "^Eu9")]();
                            case 6:
                                w[d("15ef", "]DRy")](e),
                                t[d("235", "7n#g")] = 12;
                                break;
                            case 9:
                                t["prev"] = 9,
                                t["t0"] = t["catch"](3),
                                e();
                            case 12:
                            case w[d("15f0", "P%4l")] : return t[d("1108", ")7lZ")]()
                            }
                        }), t, this, [[3, 9]])
                    }))),
                    function() {
                        return w[d("15f1", "7WQB")](this, arguments)
                    })
                },
                {
                    key: n[d("15f2", "7WQB")],
                    value: function() {
                        var t = this;
                        if (!this[d("102d", "9#sL")][d("10fd", "#cwz")]) {
                            var n = new Dn(this);
                            this[d("47c", "S(PA")][d("10d4", "m$jW")] = n,
                            this[d("4ba", "7WQB")]["domScene"]["onJump"] = function() {
                                return t["onJump"]()
                            },
                            this[d("cc9", "7n#g")][d("d2a", "Jgtc")]["onThrow"] = function() {
                                return t["onThrow"]()
                            },
                            this[d("cdd", "o51H")][d("15f3", "d$Th")][d("15f4", "7n#g")] = function() {
                                return t["onPropClick"]()
                            }
                        }
                    }
                },
                {
                    key: n["QgbfB"],
                    value: (e = P(z[d("d2f", "^AE%")]((function t() {
                        var e = {
                            fvzRk: "TANG",
                            LvFIJ: function(t, e, w) {
                                return n["GGuIo"](t, e, w)
                            },
                            aKWls: n["jPmdN"]
                        };
                        if (n[d("15f5", "]DRy")](n[d("15f6", "(pLq")], n[d("15f7", "bPML")])) {
                            var w, c, i = this;
                            return z[d("15f8", "Jgtc")]((function(t) {
                                for (var s = {
                                    KuZCJ: n["OjVbC"],
                                    MSVsm: function(t, e) {
                                        return n[d("15f9", "7n#g")](t, e)
                                    },
                                    rdrbd: n[d("15fa", "^Eu9")],
                                    gRCxP: n["Mzamj"],
                                    TBxMB: function(t, n) {
                                        return t == n
                                    },
                                    eoHFM: n[d("15fb", "2^0s")],
                                    VQsdE: n["rmTwb"]
                                };;) switch (t[d("2cb", "e%cj")] = t["next"]) {
                                case 0:
                                    if (this[d("15fc", "x$Zb")][d("15fd", "y)Vp")]["guided"]) {
                                        t["next"] = 5;
                                        break
                                    }
                                    return w = new Pn(this),
                                    this[d("cd2", "#cwz")][d("15fe", "9#sL")][d("15ff", "4zBg")] = function() {
                                        i["dmger"][d("d4c", "PQB4")] || (i["dmger"]["closeed"] = !0, w["remove"](), i["dmger"][d("1600", "&98m")]["remove"](), i["onEndGame"](e[d("1601", "30HP")]))
                                    },
                                    t[d("1602", "&98m")] = 5,
                                    w[d("1603", "0%7z")]();
                                case 5:
                                    (c = new ft(this))[d("1604", "o#Hw")] = function(t) {
                                        if (s[d("1605", "]DRy")] === s[d("1606", "9#sL")]) return i[d("160b", "o51H")](t);
                                        this[d("1607", "5dtt")]["anims"][d("c4c", "7WQB")](),
                                        this[d("1608", "^Eu9")][d("1609", "30HP")][d("160a", "P%4l")](t, !0)
                                    },
                                    this[d("cd2", "#cwz")][d("160c", "bPML")]["_listenEnd"] = function() {
                                        var n = {
                                            JAgoq: function(t, n, w) {
                                                return e[d("160d", "9#sL")](t, n, w)
                                            }
                                        };
                                        if (e["aKWls"] !== d("160e", "qfqE")) i[d("c6d", "&98m")]["closeed"] || (i[d("ac", "xuC*")][d("160f", "P%4l")] = !0, i["onEndGame"](e[d("1610", "m$jW")], (function() {
                                            if (!s[d("1611", "S(PA")](s[d("1612", "PQB4")], s[d("1613", "S(PA")])) {
                                                var e, r = K(t);
                                                if (w) {
                                                    var o = K(this)[d("1616", "2^0s")];
                                                    e = Reflect[d("36a", "2^0s")](r, arguments, o)
                                                } else e = r[d("15f1", "7WQB")](this, arguments);
                                                return n[d("1617", "5knQ")](b, this, e)
                                            }
                                            c[d("1bd", "5knQ")](),
                                            i[d("2dd", "x$Zb")][d("1614", "5knQ")][d("1615", "7WQB")]()
                                        })));
                                        else {
                                            if (s[d("1618", "x$Zb")](s["eoHFM"], "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("90a", "(@(7")]) return ! 1;
                                            if (Reflect[d("517", "nedJ")]["sham"]) return ! 1;
                                            if (s[d("1619", "#cwz")](s[d("161a", ")7lZ")], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                                            try {
                                                return Boolean["prototype"]["valueOf"][d("f93", "Yr1b")](Reflect[d("5b5", "xJ1F")](Boolean, [], (function() {}))),
                                                !0
                                            } catch(o) {
                                                return ! 1
                                            }
                                        }
                                    },
                                    this[d("161b", "AI)w")][d("7b", "&98m")][d("161c", "7WQB")] = function() {
                                        i[d("317", "ZDnO")]["closeed"] || i["sound"][d("161d", "B20D")](Y[d("446", "30HP")])
                                    };
                                case 9:
                                case d("161e", "5knQ") : return t["stop"]()
                                }
                            }), t, this)
                        }
                        for (; w[d("5be", "0%7z")];) {
                            var s = w[d("161f", "4zBg")]();
                            if (s in t) return c["value"] = s,
                            c["done"] = !1,
                            c
                        }
                        return c[d("1620", "jQ0X")] = !0,
                        c
                    }))),
                    function() {
                        return e["apply"](this, arguments)
                    })
                },
                {
                    key: "increaseDifficulty",
                    value: function() {
                        var t = this["dmger"][d("1621", "7WQB")][d("15cb", "qfqE")],
                        e = this[d("55", "^AE%")][d("1622", "7WQB")][d("156", "30HP")],
                        w = n["KTbxY"](this["multiple"], this["initSpeed"]),
                        r = n["KciFG"](this["initInterval"], this[d("1623", "e%cj")]);
                        if (!n[d("1624", "30HP")](t, w) && !n[d("1625", "jum&")](e, r)) {
                            var c = n[d("1626", "PQB4")](w, this[d("1627", "bPML")]),
                            i = this[d("1628", "m$jW")] - r,
                            s = n[d("1629", "o#Hw")](c, this["happyTime"]),
                            o = n["zSvLb"](i, this[d("162a", "PQB4")]);
                            this[d("4ba", "7WQB")][d("162b", "(@(7")][d("869", ")7lZ")] = t + s,
                            this["dmger"][d("162c", "&98m")][d("17f", "P%4l")] -= o
                        }
                    }
                },
                {
                    key: d("162d", "hVad"),
                    value: function() {
                        X("" [d("57e", "0%7z")](F[d("162e", "9#sL")], " init")),
                        this[d("189", "d$Th")] = new xn
                    }
                },
                {
                    key: d("27e", "5knQ"),
                    value: function(t) {
                        n[d("162f", "o51H")](X, "" [d("d6f", "nedJ")](F[d("1630", "e%cj")], n[d("1631", "qfqE")]), t),
                        this["sound"][d("1632", "AI)w")](Y["BGM_TANG"]) || this[d("15b5", "o51H")][d("cc6", "ZDnO")](Y[d("1633", "qfqE")], {
                            loop: !0
                        }),
                        this[d("30f", "U4xf")][d("1634", "4zBg")] = this["sound"][d("1635", "PQB4")](Y["BGM_TANG"]),
                        this[d("d03", "hVad")]["background"] = new pt(this, L[d("1636", "Yr1b")]),
                        this[d("a9", "lTsN")][d("1637", "0tes")] = new hn(this),
                        this[d("ef0", "jum&")](),
                        this["dmger"][d("1638", "]DRy")][d("1639", "@]mt")](t[d("7a7", "(pLq")] || 0),
                        this["dmger"][d("154e", "tDVN")][d("163a", "P%4l")](t["dpAmount"] || 0),
                        this[d("70c", "o51H")]["pause"](),
                        this[d("163b", "xJ1F")]()
                    }
                },
                {
                    key: d("b7f", "U4xf"),
                    value: function(t, n) {
                        this[d("b92", "nedJ")][d("163c", "7n#g")][d("563", "0tes")](t),
                        this["dmger"][d("102f", "7WQB")][d("b87", "x$Zb")](n, this[d("163d", "AI)w")], this),
                        this[d("c6d", "&98m")][d("163e", "4zBg")]["update"](),
                        this[d("d3c", "y)Vp")][d("163f", "lTsN")][d("113e", "2^0s")](),
                        this[d("d19", "e%cj")][d("15e2", "(@(7")][d("c40", "bPML")](),
                        this[d("47c", "S(PA")][d("1640", "0%7z")][d("563", "0tes")](n),
                        this[d("1641", "^Eu9")][d("1642", "]DRy")](this[d("c6e", "%LFB")][d("85c", "e%cj")], this[d("c6e", "%LFB")]["snowBarriers"], this[d("1643", "nedJ")], void 0, this),
                        this[d("1644", "B20D")][d("1645", "%LFB")](this[d("478", "AI)w")]["role"][d("1646", "ZDnO")], this[d("d17", "jum&")][d("1647", "qfqE")]["ghosts"], this[d("1648", "2^0s")], void 0, this)
                    }
                }]),
                i
            } (),
            Hn = {
            default:
                "arcade",
                arcade: {
                    gravity: {
                        y: 0
                    },
                    debug: !1
                }
            },
            Tn = {
                global: [{
                    key: d("1649", "d$Th"),
                    plugin: s["a"],
                    start: !0
                },
                {
                    key: "rexBBCodeTextPlugin",
                    plugin: o["a"],
                    start: !0
                }]
            },
            Ln = function t() {
                var n = {
                    dmukD: function(t, n, e) {
                        return t(n, e)
                    },
                    zcpOY: d("164a", "jum&")
                };
                n[d("164b", "*gk(")](D, this, t),
                this[d("164c", "xuC*")] = 0,
                this[d("164d", "xuC*")] = 0,
                this["title"] = n[d("164e", "jQ0X")],
                this[d("164f", "7WQB")] = k,
                this[d("1650", "x$Zb")] = Phaser[d("1651", "7WQB")],
                this["physics"] = Hn,
                this["plugins"] = Tn,
                this[d("1652", "(@(7")] = {
                    mode: Phaser[d("1653", "o51H")]["ScaleModes"]["NONE"]
                },
                this[d("72c", "^Eu9")] = [at, Nt, Gt, dn, En]
            };
            function Vn(t) {
                var n = {
                    TekRC: function(t, n, e) {
                        return t(n, e)
                    },
                    UjjYR: function(t, n) {
                        return t === n
                    },
                    iQhbX: "LooAz",
                    LTpCs: function(t, n) {
                        return t == n
                    },
                    EcSQr: d("1654", "PQB4"),
                    ZLvtP: function(t, n) {
                        return t === n
                    },
                    GSFcI: "MKWAf",
                    BETNk: "CmyLc",
                    wvgLE: function(t, n) {
                        return t === n
                    },
                    kiNde: "yBBwj",
                    UUrvf: function(t, n) {
                        return t !== n
                    },
                    ozWCQ: "mZfDQ",
                    EglYS: "ZfitN",
                    kEAev: function(t, n) {
                        return t(n)
                    }
                },
                e = function() {
                    var t = {
                        GdUpO: function(t, e, w) {
                            return n["TekRC"](t, e, w)
                        }
                    };
                    if (!n[d("1655", "qgiy")](n["iQhbX"], n[d("1656", "jQ0X")])) return "[object Generator]";
                    if (n[d("1657", "xJ1F")](d("1658", "7WQB"), "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("88", "P%4l")]) return ! 1;
                    if (Reflect[d("c85", "m$jW")][d("1659", "5dtt")]) return ! 1;
                    if (n[d("165a", "bPML")](n[d("165b", "^AE%")], "undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                    try {
                        return n[d("165c", "hVad")](n[d("165d", "m$jW")], n[d("165e", "7WQB")]) ? (t[d("165f", "U4xf")](D, this, o["a"]), e[d("1660", "B20D")](this, arguments)) : (Boolean[d("1244", "xuC*")][d("90", "o51H")][d("889", "qgiy")](Reflect[d("24d", "(pLq")](Boolean, [], (function() {}))), !0)
                    } catch(c) {
                        return ! n[d("1661", "x$Zb")](n[d("1662", "U4xf")], n[d("1663", "o51H")]) && (D(this, o["a"]), (w = e[d("144e", "*A)#")](this, c))[d("12bf", "Z*#m")] = a["a"], w[d("f53", "AI)w")] = new jt(c, O), w);
                        var w
                    }
                } ();
                return function() {
                    var w, r = K(t);
                    if (e) if (n["UUrvf"](n["ozWCQ"], n["EglYS"])) {
                        var c = n["kEAev"](K, this)[d("1664", "7WQB")];
                        w = Reflect[d("9dc", "y)Vp")](r, arguments, c)
                    } else {
                        var i = this;
                        this[d("b7b", "^Eu9")][d("b83", "x$Zb")][d("1665", "d$Th")] || this[d("cd0", "PQB4")]["isStop"] || this["$content"]["bridgeTang"]["onPropUse"]((function(t) {
                            i[d("c6d", "&98m")]["domScene"][d("1666", "&98m")](t["amount"] || 0),
                            t[d("1667", "5dtt")] ? (i[d("c69", "jQ0X")]["domScene"][d("1668", "o51H")](), i[d("4bc", "d$Th")][d("484", "o#Hw")](Y["DOU_PENG"]), i[d("d03", "hVad")][d("149e", "P%4l")][d("1669", "qfqE")](), i["say"](d("166a", "AI)w"))) : i[d("cd0", "PQB4")][d("166b", "U4xf")][d("166c", "qgiy")]()
                        }))
                    } else w = r[d("f8a", "jQ0X")](this, arguments);
                    return n["TekRC"](b, this, w)
                }
            }
            var zn = function(t) {
                var n = {
                    TtNOj: function(t, n) {
                        return t(n)
                    },
                    GwoXd: function(t, n) {
                        return t !== n
                    },
                    aCaob: d("166d", "B20D"),
                    xXhtC: function(t, n, e) {
                        return t(n, e)
                    }
                };
                l(w, Phaser["Game"]);
                var e = n[d("166e", "qfqE")](Vn, w);
                function w() {
                    if (!n[d("166f", "30HP")](n["aCaob"], d("1670", "^AE%"))) return n[d("1673", "7WQB")](D, this, w),
                    e[d("e5d", "9#sL")](this, arguments);
                    var t = n[d("1671", "5dtt")](K, this)[d("1672", "30HP")];
                    w = Reflect[d("8a8", "7WQB")](a["a"], arguments, t)
                }
                return w
            } (),
            Rn = function() {
                var t = {
                    DJzXj: function(t, n) {
                        return t === n
                    },
                    dcYIJ: function(t, n) {
                        return t !== n
                    },
                    SpohX: d("1674", "bPML"),
                    fwvZs: function(t, n, e) {
                        return t(n, e)
                    },
                    fBGlC: "new Game 需要一个DOM作为父元素，请确保传入了渲染完的DOM",
                    EXKRy: function(t, n) {
                        return t || n
                    },
                    bdSkv: d("1675", "bPML"),
                    GFJMw: function(t, n) {
                        return t == n
                    },
                    OpENc: d("1676", "hVad"),
                    uofxQ: function(t, n) {
                        return t / n
                    },
                    HQRLs: function(t, n) {
                        return t - n
                    },
                    GbWoO: d("1677", "Z*#m"),
                    roINf: "ynzsa",
                    uGlxS: function(t, n) {
                        return t(n)
                    },
                    ABWME: d("1678", "^Eu9"),
                    AyLYZ: function(t, n) {
                        return t * n
                    },
                    xDSDU: d("1679", "*A)#"),
                    KotFW: d("167a", "jQ0X"),
                    FDgrN: d("167b", "P%4l"),
                    MFjmL: function(t, n) {
                        return t * n
                    },
                    ccRIl: function(t, n) {
                        return t * n
                    },
                    AAVhP: "100%",
                    REHiM: d("167c", "2^0s"),
                    WuHnM: d("167d", "%LFB")
                };
                function n(e) {
                    if (t["dcYIJ"](t[d("167e", "@]mt")], d("167f", "o51H"))) {
                        t[d("1680", "4zBg")](D, this, n);
                        var w = e[d("1681", "Yr1b")],
                        r = e[d("755", "5knQ")];
                        if (!w) throw new Error(t[d("1682", "Yr1b")]);
                        this["version"] = k,
                        this[d("1681", "Yr1b")] = w,
                        this[d("7d6", ")7lZ")] = w[d("1683", "#cwz")] || window[d("1684", "B20D")],
                        this[d("1685", "U4xf")] = w[d("1686", "7n#g")] || window[d("1687", "qgiy")],
                        this["baseUrl"] = t[d("1688", "7WQB")](r, ""),
                        this["parent"]["style"][d("1689", "hVad")] || (this[d("9ce", "d$Th")]["style"][d("168a", ")7lZ")] = d("168b", "(pLq")),
                        this[d("7a", "e%cj")] = new j,
                        this[d("168c", "nedJ")] = new v,
                        this[d("168d", "0tes")] = new q
                    } else {
                        var c = this[d("34a", "9#sL")][n];
                        if (c[d("168e", "lTsN")] === e) {
                            var i = c["completion"];
                            if (t[d("168f", "m$jW")](d("1690", "x$Zb"), i[d("2d9", "P%4l")])) {
                                var s = i["arg"];
                                T(c)
                            }
                            return s
                        }
                    }
                }
                return h(n, [{
                    key: d("1691", "7WQB"),
                    get: function() {
                        return this[d("1692", "&98m")] > this[d("f23", "o#Hw")]
                    }
                },
                {
                    key: t[d("1693", "7WQB")],
                    value: function() {
                        this[d("1694", "9#sL")] ? (this[d("1695", "Z*#m")]["style"]["transform"] = "", this["parent"]["style"][d("1696", "jum&")] = "", this[d("1697", "qgiy")][d("1698", "%LFB")][d("1216", "7WQB")] = "" ["concat"](this[d("1699", "*gk(")], "px"), this["parent"]["style"]["height"] = "" [d("5ce", "xJ1F")](this[d("9c6", "bPML")], "px")) : (this[d("169a", "m$jW")]["style"][d("169b", "5knQ")] = d("169c", "PQB4"), this[d("169d", "o51H")][d("169e", "m$jW")]["transformOrigin"] = t["bdSkv"], this[d("169f", "B20D")][d("13d0", "o51H")][d("494", "B20D")] = "" ["concat"](this[d("ae2", "P%4l")], "px"), this[d("16a0", "%LFB")][d("16a1", "d$Th")]["height"] = "" ["concat"](this[d("e8b", "AI)w")], "px"))
                    }
                },
                {
                    key: t[d("16a2", "jQ0X")],
                    value: function(n) {
                        var e = {
                            Dvmnr: function(n, e) {
                                return t[d("16a3", "@]mt")](n, e)
                            },
                            flaIg: d("16a4", "4zBg"),
                            GHSCb: t[d("16a5", "xJ1F")],
                            tCagD: function(n, e) {
                                return t[d("16a6", "qgiy")](n, e)
                            },
                            MqzBD: function(n, e) {
                                return t["HQRLs"](n, e)
                            },
                            MzaHB: t["GbWoO"],
                            jtSaF: d("16a7", "d$Th"),
                            KhUSn: t[d("16a8", "5dtt")],
                            NNnVJ: function(n, e) {
                                return t["uGlxS"](n, e)
                            },
                            LRWHP: function(t, n) {
                                return t / n
                            },
                            frvYs: t["ABWME"],
                            VkzII: function(n, e) {
                                return t[d("16a9", "%LFB")](n, e)
                            }
                        };
                        if (!t[d("16aa", "^Eu9")](t[d("16ab", "e%cj")], t[d("16ac", ")7lZ")])) {
                            var w = e["LRWHP"](c[c[d("16cf", "B20D")] ? d("16d0", "Z*#m") : e["frvYs"]], this[d("ef5", "AI)w")]["designWidth"]);
                            return e[d("16d1", "PQB4")](parseInt, "" [d("ddc", "jum&")](e[d("16d2", "^AE%")](i.a, w)))
                        }
                        if (this["game"]) throw new Error(t[d("16ad", "nedJ")]);
                        var c, s, o, a, u = new Ln;
                        u[d("74", "(@(7")] = this["parent"],
                        this["isLandscape"] ? (u[d("16ae", "PQB4")] = t[d("16af", "^Eu9")](2, this[d("a57", "qfqE")]), u[d("858", "7n#g")] = t[d("16b0", "5knQ")](2, this[d("16b1", "Z*#m")])) : (u[d("16b2", "30HP")] = t[d("16b3", "m$jW")](2, this["height"]), u["height"] = t["ccRIl"](2, this[d("16ae", "PQB4")]), c = u["width"], s = u[d("13d4", "AI)w")], o = i.a["Input"]["InputPlugin"][d("16b4", "nedJ")], a = o[d("a38", "*A)#")], o[d("16b5", "B20D")] = function(t, n) {
                            var w = {
                                MuBGH: function(t, n) {
                                    return e[d("16b6", "qfqE")](t, n)
                                },
                                HBdso: e["flaIg"],
                                wcpJy: e[d("16b7", "xJ1F")],
                                oLoxH: function(t, n) {
                                    return e["tCagD"](t, n)
                                },
                                nbYjg: function(t, n) {
                                    return e["MqzBD"](t, n)
                                },
                                qtcdM: function(t, n) {
                                    return t - n
                                },
                                XAEFE: function(t, n) {
                                    return t * n
                                },
                                urvHb: function(t, n) {
                                    return e["tCagD"](t, n)
                                }
                            };
                            if (e[d("16b8", "d$Th")] === d("16b9", "m$jW")) {
                                if (w["MuBGH"](w[d("16ba", "(pLq")], "undefined" === typeof Reflect ? "undefined": Object(r["a"])(Reflect)) || !Reflect[d("a35", "lTsN")]) return ! 1;
                                if (Reflect[d("99", "*A)#")][d("ada", "xJ1F")]) return ! 1;
                                if (w[d("16bb", "xJ1F")] == ("undefined" === typeof Proxy ? "undefined": Object(r["a"])(Proxy))) return ! 0;
                                try {
                                    return Boolean[d("16bc", "7WQB")][d("a34", "m$jW")][d("aa2", "o#Hw")](Reflect[d("9dc", "y)Vp")](Boolean, [], (function() {}))),
                                    !0
                                } catch(u) {
                                    return ! 1
                                }
                            } else {
                                var i = s,
                                o = c;
                                n = n[d("16bd", "tDVN")]((function(t) {
                                    var n = t["x"],
                                    e = t["y"],
                                    r = w[d("16be", "jum&")](s, 2),
                                    a = w["oLoxH"](s, 2),
                                    u = w[d("16bf", "*A)#")](e / s * o, a) + r,
                                    f = w[d("16c0", "&98m")](r, w[d("16c1", "o51H")](w["urvHb"](n, c), i)) + a;
                                    return t["x"] = u,
                                    t["y"] = f,
                                    t
                                })),
                                a["apply"](this, [t, n])
                            }
                        }),
                        this[d("16c2", "Z*#m")] = new zn(u),
                        this[d("16c3", "Yr1b")][d("5bf", "S(PA")] = this,
                        this[d("ab0", "30HP")][d("16c4", "#cwz")][d("16c5", "lTsN")][d("1216", "7WQB")] = t[d("16c6", "Yr1b")],
                        this["game"]["canvas"]["style"][d("1678", "^Eu9")] = t[d("16c7", "qfqE")],
                        this["game"]["events"]["on"](wt, (function(t) {
                            e[d("16c8", "0tes")] !== e[d("16c9", "(pLq")] ? n && e[d("16ca", "AI)w")](n, t) : this[d("16cb", "AI)w")] || this[d("72c", "^Eu9")]["tweens"][d("6a3", "0%7z")]({
                                targets: this,
                                alpha: {
                                    from: 1,
                                    to: .5
                                },
                                ease: d("16cc", "9#sL"),
                                duration: 200,
                                repeat: 1,
                                yoyo: !0
                            })
                        })),
                        this[d("16cd", "tDVN")](),
                        X(d("16ce", "e%cj"), this["game"])
                    }
                }]),
                n
            } (),
            Xn = function() {
                var t = {
                    geQWh: d("16d3", "*A)#"),
                    PPrDP: "sqtzX",
                    BqCFJ: function(t, n, e) {
                        return t(n, e)
                    },
                    SxIMO: function(t, n) {
                        return t !== n
                    },
                    FiAYr: function(t, n) {
                        return t !== n
                    },
                    InLPx: d("16d4", "]DRy"),
                    QTRDr: "abLDz",
                    ikMYI: function(t, n, e) {
                        return t(n, e)
                    },
                    PMzgi: "qin",
                    wjoEL: d("16d5", "o51H")
                };
                function n(e) {
                    if (t[d("16d6", "P%4l")] === t[d("16d7", "m$jW")]) {
                        var w = e[d("16d8", "0tes")]();
                        if (w in n) return o["a"][d("16d9", "qfqE")] = w,
                        o["a"][d("16da", "qfqE")] = !1,
                        o["a"]
                    } else t[d("16db", "qgiy")](D, this, n),
                    this["_game"] = new Rn(e)
                }
                return t[d("16dc", "0tes")](h, n, [{
                    key: t[d("16dd", "5knQ")],
                    get: function() {
                        return this[d("16de", "x$Zb")][d("16df", "lTsN")]
                    }
                },
                {
                    key: d("16e0", "lTsN"),
                    get: function() {
                        if (t[d("16e1", "7WQB")](d("16e2", "0tes"), d("16e3", "0%7z"))) return this[d("8c1", "jum&")][d("16e4", "PQB4")];
                        this[d("16e5", "U4xf")] = n,
                        this[d("1614", "5knQ")]["updateCur"](n)
                    }
                },
                {
                    key: "tang",
                    get: function() {
                        return !! t[d("16e6", "*gk(")](t["InLPx"], t[d("16e7", "jQ0X")]) && this["_game"][d("16e8", "30HP")]
                    }
                },
                {
                    key: t[d("16e9", "9#sL")],
                    value: function(t) {
                        this[d("16ea", "AI)w")][d("16eb", "Jgtc")](t)
                    }
                },
                {
                    key: d("16ec", "y)Vp"),
                    value: function(t, n) {
                        this["_game"][d("6a7", "]DRy")]["events"][d("16ed", "Yr1b")](et, {
                            key: t,
                            data: n
                        })
                    }
                }]),
                n
            } ();
            u = "jsjiami.com.v6"
        }).call(this, e("4362"), e("c8ba"))
    },
    4583 : function(t, n, e) {
        t.exports = e.p + "img/go2.da23dc13.png"
    },
    "463a": function(t, n, e) {
        t.exports = e.p + "img/right01.0b8affe9.png"
    },
    "48aa": function(t, n, e) {
        "use strict";
        e("c3c9")
    },
    4943 : function(t, n, e) {
        t.exports = e.p + "img/backOutChange.cba25dcb.png"
    },
    4951 : function(t, n, e) {
        t.exports = e.p + "img/title.8109b532.png"
    },
    "49a4": function(t, n, e) {},
    "4cb7": function(t, n, e) {
        t.exports = e.p + "img/card_2_on.790251e8.png"
    },
    5145 : function(t, n, e) {},
    "56d7": function(t, n, e) {
        "use strict";
        e.r(n);
        e("e260"),
        e("e6cf"),
        e("cca6"),
        e("a79d");
        var w = e("2b0e"),
        r = function() {
            var t = this,
            n = t.$createElement,
            e = t._self._c || n;
            return e("div", {
                attrs: {
                    id: "app"
                }
            },
            [e("router-view")], 1)
        },
        c = [],
        i = e("2877"),
        s = {},
        o = Object(i["a"])(s, r, c, !1, null, null, null),
        a = o.exports,
        u = e("a18c"),
        f = e("bc3a"),
        d = e.n(f),
        D = e("5c96"),
        O = e.n(D),
        h = (e("b0c0"), e("2f62"));
        w["default"].use(h["a"]);
        var C = new h["a"].Store({
            state: {
                name: "",
                avatar: "",
                dynastyId: 0
            },
            getters: {
                name: function(t) {
                    return t.name
                },
                avatar: function(t) {
                    return t.avatar
                },
                dynastyId: function(t) {
                    return t.dynastyId
                }
            },
            mutations: {
                updateName: function(t, n) {
                    t.name = n
                },
                updateAvatar: function(t, n) {
                    t.avatar = n
                },
                updateDynastyId: function(t, n) {
                    t.dynastyId = n
                }
            },
            actions: {}
        }),
        l = C,
        g = e("421c"),
        p = (e("1ac5"), e("d3b7"),
        function() {
            var t = this,
            n = t.$createElement,
            e = t._self._c || n;
            return e("div", {
                ref: "popup",
                style: {
                    zIndex: t.zIndex
                },
                attrs: {
                    id: "popup"
                }
            },
            [e(t.cur, t._b({
                tag: "component",
                on: {
                    close: t.onClose
                }
            },
            "component", t.$parent.props, !1))], 1)
        }),
        b = [],
        K = function() {
            var t = this,
            n = t.$createElement,
            w = t._self._c || n;
            return w("div", {
                staticClass: "resurrect"
            },
            [w("div", {
                staticClass: "pop_body"
            },
            [w("div", {
                staticStyle: {
                    width: "100%",
                    height: "100%",
                    "padding-top": "23.7%",
                    "padding-left": "16%",
                    "padding-right": "16%"
                }
            },
            [w("div", {
                staticClass: "textp"
            },
            [t._v("您有" + t._s(t.cardNum) + "复活卡可用")]), w("div", {
                staticClass: "pop_btns"
            },
            [w("div", {
                staticStyle: {
                    width: "50%"
                },
                on: {
                    click: function(n) {
                        return t.$emit("close")
                    }
                }
            },
            [w("img", {
                attrs: {
                    src: e("cda1"),
                    alt: "下次再用"
                }
            })]), w("div", {
                staticStyle: {
                    width: "50%"
                },
                on: {
                    click: function(n) {
                        return t.$emit("close", "confirm")
                    }
                }
            },
            [w("img", {
                attrs: {
                    src: e("adec"),
                    alt: "复活"
                }
            })])])])])])
        },
        m = [],
        M = (e("a9e3"), {
            name: "resurrect",
            props: {
                cardNum: Number
            }
        }),
        v = M,
        y = (e("2df4"), Object(i["a"])(v, K, m, !1, null, "16a5be1a", null)),
        j = y.exports,
        Q = function() {
            var t = this,
            n = t.$createElement,
            w = t._self._c || n;
            return w("div", {
                staticClass: "use_point"
            },
            [w("div", {
                staticClass: "pop_body"
            },
            [w("div", {
                staticStyle: {
                    width: "100%",
                    height: "100%",
                    "padding-top": "23.7%",
                    "padding-left": "16%",
                    "padding-right": "16%"
                }
            },
            [w("div", {
                staticClass: "textp"
            },
            [t._v("是否需要复活")]), w("div", {
                staticClass: "pop_btns"
            },
            [w("div", {
                staticStyle: {
                    width: "50%"
                },
                on: {
                    click: function(n) {
                        return t.$emit("close")
                    }
                }
            },
            [w("img", {
                attrs: {
                    src: e("4943"),
                    alt: "下次再用"
                }
            })]), w("div", {
                staticStyle: {
                    width: "50%"
                },
                on: {
                    click: function(n) {
                        return t.$emit("close", "confirm")
                    }
                }
            },
            [w("img", {
                attrs: {
                    src: e("adec"),
                    alt: "复活"
                }
            })])])])])])
        },
        q = [],
        k = {
            name: "usePoint",
            props: {
                point: Number
            }
        },
        A = k,
        P = (e("0269"), Object(i["a"])(A, Q, q, !1, null, "48fb18cc", null)),
        B = P.exports,
        x = function() {
            var t = this,
            n = t.$createElement,
            w = t._self._c || n;
            return w("div", {
                staticClass: "use_point"
            },
            [w("div", {
                staticClass: "pop_body"
            },
            [w("div", {
                staticStyle: {
                    width: "100%",
                    height: "100%",
                    "padding-top": "23.7%",
                    "padding-left": "16%",
                    "padding-right": "16%"
                }
            },
            [w("div", {
                staticClass: "textp"
            },
            [t._v("得分： " + t._s(t.score))]), w("div", {
                staticClass: "pop_btns"
            },
            [w("div", {
                staticStyle: {
                    width: "50%"
                },
                on: {
                    click: function(n) {
                        return t.$emit("close")
                    }
                }
            },
            [w("img", {
                attrs: {
                    src: e("ac46"),
                    alt: "去主会场"
                }
            })]), w("div", {
                staticStyle: {
                    width: "50%"
                },
                on: {
                    click: function(n) {
                        return t.$emit("close", "change")
                    }
                }
            },
            [w("img", {
                attrs: {
                    src: e("e6b2"),
                    alt: "不服再战"
                }
            })])])])])])
        },
        E = [],
        H = {
            name: "fightAgain",
            props: {
                score: Number
            }
        },
        T = H,
        L = (e("bded"), Object(i["a"])(T, x, E, !1, null, "a998ab50", null)),
        V = L.exports,
        z = function() {
            var t = this,
            n = t.$createElement,
            w = t._self._c || n;
            return w("div", {
                staticClass: "use_point"
            },
            [w("div", {
                staticClass: "pop_body"
            },
            [w("div", {
                staticStyle: {
                    width: "100%",
                    height: "100%",
                    "padding-top": "23.7%",
                    "padding-left": "16%",
                    "padding-right": "16%"
                }
            },
            [w("div", {
                staticClass: "textp"
            },
            [t._v("得分： " + t._s(t.score))]), w("div", {
                staticClass: "pop_btns"
            },
            [w("div", {
                on: {
                    click: function(n) {
                        return t.$emit("close")
                    }
                }
            },
            [w("img", {
                attrs: {
                    src: e("fdc8"),
                    alt: "去主会场"
                }
            })])])])])])
        },
        R = [],
        X = {
            name: "goHome",
            props: {
                score: Number
            }
        },
        F = X,
        W = (e("48aa"), Object(i["a"])(F, z, R, !1, null, "5ced58ea", null)),
        Z = W.exports,
        U = function() {
            var t = this,
            n = t.$createElement;
            t._self._c;
            return t._m(0)
        },
        J = [function() {
            var t = this,
            n = t.$createElement,
            e = t._self._c || n;
            return e("div", {
                staticClass: "use_point"
            },
            [e("div", {
                staticClass: "pop_body"
            })])
        }],
        S = e("1da1"),
        I = (e("96cf"),
        function() {
            return new Promise((function(t) {
                setTimeout((function() {
                    t(!0)
                }), 1500)
            }))
        }),
        N = {
            name: "revive",
            props: {
                score: Number
            },
            methods: {
                close1: function() {
                    var t = Object(S["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                I();
                            case 2:
                                this.$emit("close");
                            case 3:
                            case "end":
                                return t.stop()
                            }
                        }), t, this)
                    })));
                    function n() {
                        return t.apply(this, arguments)
                    }
                    return n
                } ()
            },
            mounted: function() {
                this.close1()
            }
        },
        Y = N,
        G = (e("f36d"), Object(i["a"])(Y, U, J, !1, null, "0f9294c5", null)),
        _ = G.exports,
        $ = function() {
            var t = this,
            n = t.$createElement;
            t._self._c;
            return t._m(0)
        },
        tt = [function() {
            var t = this,
            n = t.$createElement,
            e = t._self._c || n;
            return e("div", {
                staticClass: "use_point"
            },
            [e("div", {
                staticClass: "pop_body"
            })])
        }],
        nt = function() {
            return new Promise((function(t) {
                setTimeout((function() {
                    t(!0)
                }), 1700)
            }))
        },
        et = {
            name: "revive",
            props: {
                score: Number
            },
            methods: {
                close1: function() {
                    var t = Object(S["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                nt();
                            case 2:
                                this.$emit("close");
                            case 3:
                            case "end":
                                return t.stop()
                            }
                        }), t, this)
                    })));
                    function n() {
                        return t.apply(this, arguments)
                    }
                    return n
                } ()
            },
            mounted: function() {
                this.close1()
            }
        },
        wt = et,
        rt = (e("87d6"), Object(i["a"])(wt, $, tt, !1, null, "1ad12bf9", null)),
        ct = rt.exports,
        it = function() {
            var t = this,
            n = t.$createElement,
            w = t._self._c || n;
            return w("div", {
                staticClass: "resurrect"
            },
            [w("div", {
                staticClass: "pop_body"
            },
            [w("div", {
                staticStyle: {
                    width: "100%",
                    height: "100%",
                    "padding-top": "23.7%",
                    "padding-left": "16%",
                    "padding-right": "16%"
                }
            },
            [w("div", {
                staticClass: "textp"
            },
            [t._v("您有" + t._s(t.cardNum) + "双倍卡可用")]), w("div", {
                staticClass: "pop_btns"
            },
            [w("div", {
                staticStyle: {
                    width: "50%"
                },
                on: {
                    click: function(n) {
                        return t.$emit("close")
                    }
                }
            },
            [w("img", {
                attrs: {
                    src: e("cda1"),
                    alt: "下次再用"
                }
            })]), w("div", {
                staticStyle: {
                    width: "50%"
                },
                on: {
                    click: function(n) {
                        return t.$emit("close", "confirm")
                    }
                }
            },
            [w("img", {
                attrs: {
                    src: e("7e90"),
                    alt: "翻倍"
                }
            })])])])])])
        },
        st = [],
        ot = {
            name: "resurrect",
            props: {
                cardNum: Number
            }
        },
        at = ot,
        ut = (e("2f19"), Object(i["a"])(at, it, st, !1, null, "4a6d1ce5", null)),
        ft = ut.exports,
        dt = function() {
            var t = this,
            n = t.$createElement,
            w = t._self._c || n;
            return w("div", {
                staticClass: "use_point"
            },
            [w("div", {
                staticClass: "pop_body"
            },
            [w("div", {
                staticStyle: {
                    width: "100%",
                    height: "100%",
                    "padding-top": "23.7%",
                    "padding-left": "16%",
                    "padding-right": "16%"
                }
            },
            [w("div", {
                staticClass: "textp"
            },
            [t._v("是否需要翻倍")]), w("div", {
                staticClass: "pop_btns"
            },
            [w("div", {
                staticStyle: {
                    width: "50%"
                },
                on: {
                    click: function(n) {
                        return t.$emit("close")
                    }
                }
            },
            [w("img", {
                attrs: {
                    src: e("4943"),
                    alt: "放弃机会"
                }
            })]), w("div", {
                staticStyle: {
                    width: "50%"
                },
                on: {
                    click: function(n) {
                        return t.$emit("close", "confirm")
                    }
                }
            },
            [w("img", {
                attrs: {
                    src: e("7e90"),
                    alt: "复活"
                }
            })])])])])])
        },
        Dt = [],
        Ot = {
            name: "usePoint",
            props: {
                point: Number
            }
        },
        ht = Ot,
        Ct = (e("384d"), Object(i["a"])(ht, dt, Dt, !1, null, "3fe92973", null)),
        lt = Ct.exports,
        gt = {
            name: "popup",
            components: {
                Resurrect: j,
                UsePoint: B,
                fightAgain: V,
                goHome: Z,
                revive: _,
                useDouble: ft,
                usePointDouble: lt,
                doubleOk: ct
            },
            inject: ["close"],
            data: function() {
                return {
                    zIndex: -1,
                    cur: ""
                }
            },
            watch: {
                "$parent.cur": function(t) {
                    this.cur = t,
                    this.zIndex = t ? 3 : -1
                }
            },
            mounted: function() {
                window.innerWidth > window.innerHeight && (this.$refs.popup.style.transform = "rotate(0deg)", this.$refs.popup.style.transformOrigin = "0 0", this.$refs.popup.style.width = "100vw", this.$refs.popup.style.height = "100vh")
            },
            methods: {
                onClose: function(t) {
                    this.close(t || "close")
                }
            }
        },
        pt = gt,
        bt = (e("ce8d"), Object(i["a"])(pt, p, b, !1, null, null, null)),
        Kt = bt.exports;
        function mt(t) {
            var n = {
                back: function(t) {}
            },
            e = new t({
                data: {
                    cur: "",
                    props: {}
                },
                provide: {
                    close: function(t) {
                        n.back(t)
                    }
                },
                methods: {
                    show: function(t, e) {
                        var w = this;
                        if (!this.cur) return this.cur = t,
                        this.props = e,
                        new Promise((function(t) {
                            n.back = function(n) {
                                w.cur = "",
                                t(n),
                                w.props = {}
                            }
                        }))
                    },
                    wangColse: function() {
                        this.cur = "",
                        this.props = {},
                        n.back = function() {}
                    }
                },
                render: function(t) {
                    return t(Kt)
                }
            }).$mount("#popup");
            return e
        }
        var Mt = new g["a"]({
            parent: document.getElementById("game"),
            baseUrl: "./game"
        });
        w["default"].prototype.$game = Mt;
        var vt = mt(w["default"]);
        w["default"].prototype.$popup = vt,
        w["default"].use(O.a),
        w["default"].prototype.$axios = d.a,
        w["default"].config.productionTip = !1,
        new w["default"]({
            router: u["a"],
            store: l,
            render: function(t) {
                return t(a)
            }
        }).$mount("#app")
    },
    "56f0": function(t, n, e) {
        t.exports = e.p + "img/left02.3e9c5f30.png"
    },
    "634b": function(t, n, e) {
        t.exports = e.p + "img/prize.d3b2008e.png"
    },
    "7e90": function(t, n, e) {
        t.exports = e.p + "img/jifenx2.550b7b82.png"
    },
    "87d6": function(t, n, e) {
        "use strict";
        e("5145")
    },
    "8e20": function(t, n, e) {
        t.exports = e.p + "img/loadingWenan.0b7424ac.png"
    },
    "94f1": function(t, n, e) {},
    "95d3": function(t, n, e) {
        t.exports = e.p + "img/card_1.3fc534d3.png"
    },
    "983c": function(t, n, e) {
        t.exports = e.p + "img/ok2.0820c4e1.png"
    },
    a18c: function(t, n, e) {
        "use strict";
        e("d3b7"),
        e("3ca3"),
        e("ddb0"),
        e("ac1f"),
        e("5319");
        var w = e("2b0e"),
        r = e("8c4f"),
        c = function() {
            var t = this,
            n = t.$createElement,
            w = t._self._c || n;
            return w("div", {
                staticStyle: {
                    "text-align": "center",
                    position: "relative",
                    height: "100%"
                }
            },
            [t._m(0), w("div", {
                staticClass: "bg2"
            },
            [w("img", {
                attrs: {
                    src: e("12c6")
                },
                on: {
                    click: t.goToMainVenue
                }
            })])])
        },
        i = [function() {
            var t = this,
            n = t.$createElement,
            w = t._self._c || n;
            return w("div", {
                staticClass: "bg1"
            },
            [w("img", {
                staticClass: "img",
                attrs: {
                    src: e("d29a")
                }
            })])
        }],
        s = (e("fb6a"), e("841c"), e("1276"), e("b775")),
        o = {
            login: function() {
                return Object(s["a"])({
                    url: "wx/login/",
                    method: "get"
                })
            },
            loginFirst: function() {
                return Object(s["a"])({
                    url: "wx/loginFirst/",
                    method: "get"
                })
            },
            loginCode: function(t) {
                return Object(s["a"])({
                    url: "mainVenue/login/" + t,
                    method: "get"
                })
            }
        },
        a = {
            methods: {
                goToMainVenue: function() {
                    o.login().then((function(t) {
                        t.data.success && (window.location.href = t.data.data.url)
                    }))
                },
                wxlogin: function(t) {
                    var n = this;
                    null != t && "" != t ? o.loginCode(t).then((function(t) {
                        if (t.data.success) {
                            localStorage.setItem("easontoken", t.data.data.token);
                            var e = t.data.data.token;
                            e = e.substring(e.length - 10),
                            localStorage.setItem("youmenguserid", e),
                            n.$router.replace({
                                path: "/mainVenue"
                            })
                        }
                    })) : o.loginFirst().then((function(t) {
                        t.data.success && (window.location.href = t.data.data.url)
                    }))
                },
                getCode: function() {
                    for (var t = window.location.search.slice(1), n = t.split("&"), e = 0; e < n.length; e++) {
                        var w = n[e].split("=");
                        if ("code" == w[0]) return "" == unescape(w[1]) ? "": w[1]
                    }
                    return ""
                }
            },
            mounted: function() {
                var t = document.getElementById("game");
                t.style.display = "none",
                null != localStorage.getItem("easontoken") ? this.$router.replace({
                    path: "/mainVenue"
                }) : this.wxlogin(this.getCode())
            },
            created: function() {}
        },
        u = a,
        f = (e("c311"), e("2877")),
        d = Object(f["a"])(u, c, i, !1, null, "7d7bcb4b", null),
        D = d.exports,
        O = function() {
            var t = this,
            n = t.$createElement,
            e = t._self._c || n;
            return e("div", {
                staticClass: "loading"
            },
            [e("div", {
                staticClass: "bg"
            },
            [e("div", {
                staticClass: "ppp"
            },
            [e("el-progress", {
                attrs: {
                    percentage: t.process,
                    color: "#F5BC31",
                    "show-text": t.falseFlag,
                    "stroke-width": t.strokeWidth
                }
            }), e("div", {
                staticClass: "text"
            },
            [t._v(t._s(t.process) + "%")])], 1), t._m(0)])])
        },
        h = [function() {
            var t = this,
            n = t.$createElement,
            w = t._self._c || n;
            return w("div", {
                staticClass: "textimg"
            },
            [w("img", {
                staticStyle: {
                    width: "100%"
                },
                attrs: {
                    src: e("8e20")
                }
            })])
        }],
        C = {
            data: function() {
                return {
                    process: 0,
                    process1: 0,
                    process2: 0,
                    falseFlag: !1,
                    strokeWidth: 10
                }
            },
            mounted: function() {
                this.preloading()
            },
            methods: {
                preloading: function() {
                    var t = this;
                    window.onload = function() {
                        t.$game.init((function(n) {
                            console.log(n),
                            "loadingTexture" === n.status ? t.process1 = parseInt("".concat(100 * n.process)) : "loadingImage" === n.status && (t.process2 = parseInt("".concat(100 * n.process))),
                            "success" === n.status ? null != localStorage.getItem("easontoken") ? t.$router.replace({
                                path: "/mainVenue"
                            }) : t.$router.replace({
                                path: "/login"
                            }) : t.process = Math.ceil((t.process1 + t.process2) / 2)
                        }))
                    }
                }
            }
        },
        l = C,
        g = (e("0841"), Object(f["a"])(l, O, h, !1, null, null, null)),
        p = g.exports,
        b = function() {
            var t = this,
            n = t.$createElement,
            e = t._self._c || n;
            return e("div", {
                staticClass: "loading"
            },
            [e("div", {
                staticClass: "bg"
            },
            [e("div", {
                staticClass: "ppp"
            },
            [e("el-progress", {
                attrs: {
                    percentage: t.process,
                    color: "#F5BC31",
                    "show-text": t.falseFlag,
                    "stroke-width": t.strokeWidth
                }
            }), e("div", {
                staticClass: "text"
            },
            [t._v(t._s(t.process) + "%")])], 1), t._m(0)])])
        },
        K = [function() {
            var t = this,
            n = t.$createElement,
            w = t._self._c || n;
            return w("div", {
                staticClass: "textimg"
            },
            [w("img", {
                staticStyle: {
                    width: "100%"
                },
                attrs: {
                    src: e("8e20")
                }
            })])
        }],
        m = {
            data: function() {
                return {
                    process: 0,
                    process1: 0,
                    process2: 0,
                    falseFlag: !1,
                    strokeWidth: 10
                }
            },
            created: function() {
                this.preloading()
            },
            methods: {
                preloading: function() {
                    var t = this;
                    this.$nextTick((function() {
                        t.$game.init((function(n) {
                            console.log(n),
                            "loadingTexture" === n.status ? t.process1 = parseInt("".concat(100 * n.process)) : "loadingImage" === n.status && (t.process2 = parseInt("".concat(100 * n.process))),
                            "success" === n.status ? null != localStorage.getItem("easontoken") ? t.$router.replace({
                                path: "/mainVenue"
                            }) : t.$router.replace({
                                path: "/login"
                            }) : t.process = Math.ceil((t.process1 + t.process2) / 2)
                        }))
                    }))
                }
            }
        },
        M = m,
        v = (e("dac7"), Object(f["a"])(M, b, K, !1, null, null, null)),
        y = v.exports,
        j = function() {
            var t = this,
            n = t.$createElement,
            w = t._self._c || n;
            return w("div", {
                directives: [{
                    name: "loading",
                    rawName: "v-loading",
                    value: t.loading,
                    expression: "loading"
                }],
                staticClass: "mainbody"
            },
            [w("img", {
                staticClass: "mainHead",
                attrs: {
                    src: e("4951")
                }
            }), w("div", {
                staticClass: "dialog"
            },
            [w("el-dialog", {
                attrs: {
                    visible: t.dialogVisible_dynastyIntro,
                    "close-on-click-modal": !0,
                    modal: !0,
                    "show-close": !1,
                    center: !1,
                    customClass: t.Egg_bg + " easterEggcss"
                },
                on: {
                    "update:visible": function(n) {
                        t.dialogVisible_dynastyIntro = n
                    }
                }
            },
            [w("dynastyIntro"), w("div", {
                staticStyle: {
                    "text-align": "center"
                }
            },
            [t.eggBtnFlag ? w("img", {
                staticStyle: {
                    width: "67%",
                    top: "63%",
                    position: "absolute",
                    left: "16.5%"
                },
                attrs: {
                    src: e("4583")
                },
                on: {
                    click: function(n) {
                        return t.goToWhere()
                    }
                }
            }) : t._e()]), w("div", {
                staticStyle: {
                    "text-align": "center"
                }
            },
            [w("img", {
                staticStyle: {
                    width: "8%",
                    top: "80%",
                    position: "absolute",
                    left: "46%"
                },
                attrs: {
                    src: e("bd96")
                },
                on: {
                    click: function(n) {
                        return t.goThrough("4")
                    }
                }
            })])], 1)], 1), w("div", {
                staticClass: "dialog"
            },
            [t.dialogVisible_treasureBox ? w("el-dialog", {
                attrs: {
                    visible: t.dialogVisible_treasureBox,
                    "close-on-click-modal": !0,
                    modal: !0,
                    "show-close": !1,
                    center: !1,
                    customClass: "treasureBoxcss"
                },
                on: {
                    "update:visible": function(n) {
                        t.dialogVisible_treasureBox = n
                    }
                }
            },
            [w("treasureBox", {
                attrs: {
                    dynastyId: t.userInfo.dynastyId
                }
            }), w("div", {
                staticStyle: {
                    "text-align": "center"
                }
            },
            [w("img", {
                staticStyle: {
                    width: "10%",
                    top: "100%",
                    position: "absolute",
                    left: "45%"
                },
                attrs: {
                    src: e("bd96")
                },
                on: {
                    click: function(n) {
                        return t.goTreasureBox()
                    }
                }
            })])], 1) : t._e()], 1), w("div", {
                staticClass: "dialog"
            },
            [w("el-dialog", {
                staticStyle: {
                    "margin-top": "20vh"
                },
                attrs: {
                    visible: t.dialogVisible_wxfxOk3Times,
                    "close-on-click-modal": !0,
                    modal: !0,
                    "show-close": !1,
                    center: !1,
                    customClass: t.wxfx_bg + " wxfxOk3Timescss"
                },
                on: {
                    "update:visible": function(n) {
                        t.dialogVisible_wxfxOk3Times = n
                    }
                }
            },
            [w("wxfxOk3Times"), w("div", {
                staticStyle: {
                    "text-align": "center"
                }
            },
            [w("img", {
                staticStyle: {
                    width: "50%",
                    top: "54%",
                    position: "absolute",
                    left: "25%"
                },
                attrs: {
                    src: e("983c")
                },
                on: {
                    click: function() {
                        t.dialogVisible_wxfxOk3Times = !1
                    }
                }
            })])], 1)], 1), w("div", {
                staticClass: "dialog"
            },
            [w("el-dialog", {
                staticStyle: {
                    "margin-top": "10%"
                },
                attrs: {
                    visible: t.dialog_sendPhone,
                    "close-on-click-modal": !1,
                    modal: !0,
                    "show-close": !1,
                    center: !1,
                    customClass: "phonecss"
                },
                on: {
                    "update:visible": function(n) {
                        t.dialog_sendPhone = n
                    }
                }
            },
            [w("sendPhone", {
                on: {
                    colse_sendPhone: t.closeSendPhone
                }
            })], 1)], 1), w("div", {
                staticClass: "dialog"
            },
            [t.dialogVisible_successCard ? w("el-dialog", {
                staticStyle: {
                    "margin-top": "8vh"
                },
                attrs: {
                    visible: t.dialogVisible_successCard,
                    "close-on-click-modal": !0,
                    modal: !0,
                    "show-close": !1,
                    center: !1,
                    customClass: t.successCard_bg + " successCardcss"
                },
                on: {
                    "update:visible": function(n) {
                        t.dialogVisible_successCard = n
                    }
                }
            },
            [w("successCard", {
                attrs: {
                    dynasty: t.successCard_dynastyId,
                    ranking: t.wx_user_successCard_info.ranking,
                    shareFirst: t.shareFirst
                },
                on: {
                    colse_successCard: t.goToShare
                }
            })], 1) : t._e()], 1), w("div", {
                staticClass: "mainImg"
            },
            [w("div", {
                staticClass: "leftSide"
            },
            [w("div", {
                staticClass: "left1"
            },
            [w("img", {
                staticClass: "percent70",
                attrs: {
                    src: t.chaoDaiPic.pic1
                },
                on: {
                    click: function(n) {
                        return t.goThrough("0")
                    }
                }
            })]), w("div", {
                staticClass: "left2"
            },
            [w("img", {
                staticClass: "percent70",
                attrs: {
                    src: t.chaoDaiPic.pic3
                },
                on: {
                    click: function(n) {
                        return t.goThrough("2")
                    }
                }
            })])]), w("div", {
                staticClass: "rightSide"
            },
            [w("div", {
                staticClass: "right1"
            },
            [w("img", {
                attrs: {
                    src: t.chaoDaiPic.pic2
                },
                on: {
                    click: function(n) {
                        return t.goThrough("1")
                    }
                }
            })]), w("div", {
                staticClass: "right2"
            },
            [w("img", {
                staticClass: "percent70",
                attrs: {
                    src: t.chaoDaiPic.pic4
                }
            })])])]), w("div", {
                staticStyle: {
                    clear: "both"
                }
            }), w("div", {
                staticClass: "foot"
            },
            [w("div", {
                staticClass: "rankTitle fontSize12"
            },
            [w("span", {
                staticStyle: {
                    "border-bottom": "1px solid #fff",
                    "padding-bottom": "2px"
                },
                on: {
                    click: t.gotoRanking
                }
            },
            [t._v(" 排行榜 ")]), t._v(" 前3000名用户可点亮对应的成就卡")]), w("div", {
                staticClass: "myCard"
            },
            [t.userInfo.card1Rank > 0 ? w("img", {
                attrs: {
                    src: e("d149")
                },
                on: {
                    click: function(n) {
                        return t.goSuccessCardcss(1)
                    }
                }
            }) : w("img", {
                attrs: {
                    src: e("95d3"),
                    click: "javascript:void(0)"
                }
            }), t.userInfo.card2Rank > 0 ? w("img", {
                attrs: {
                    src: e("4cb7")
                },
                on: {
                    click: function(n) {
                        return t.goSuccessCardcss(2)
                    }
                }
            }) : w("img", {
                attrs: {
                    src: e("3b81"),
                    click: "javascript:void(0)"
                }
            }), t.userInfo.card3Rank > 0 ? w("img", {
                attrs: {
                    src: e("e5da")
                },
                on: {
                    click: function(n) {
                        return t.goSuccessCardcss(3)
                    }
                }
            }) : w("img", {
                attrs: {
                    src: e("c8d7"),
                    click: "javascript:void(0)"
                }
            }), t.userInfo.card4Rank > 0 ? w("img", {
                attrs: {
                    src: e("0a01")
                },
                on: {
                    click: function(n) {
                        return t.goSuccessCardcss(4)
                    }
                }
            }) : w("img", {
                attrs: {
                    src: e("a2ca"),
                    click: "javascript:void(0)"
                }
            })]), w("div", {
                staticClass: "cardFoot fontSize12"
            },
            [w("p", {
                class: [{
                    get: t.userInfo.card1Rank > 0
                },
                {
                    moving: -1 == t.userInfo.card1Rank
                }]
            },
            [t._v(t._s(t.userInfo.card1State))]), w("p", {
                class: [{
                    get: t.userInfo.card2Rank > 0
                },
                {
                    moving: -1 == t.userInfo.card2Rank
                }]
            },
            [t._v(t._s(t.userInfo.card2State))]), w("p", {
                class: [{
                    get: t.userInfo.card3Rank > 0
                },
                {
                    moving: -1 == t.userInfo.card3Rank
                }]
            },
            [t._v(t._s(t.userInfo.card3State))]), w("p", {
                class: [{
                    get: t.userInfo.card4Rank > 0
                },
                {
                    moving: -1 == t.userInfo.card4Rank
                }]
            },
            [t._v(t._s(t.userInfo.card4State))])]), w("img", {
                staticStyle: {
                    width: "60%",
                    margin: "10px"
                },
                attrs: {
                    src: e("634b")
                },
                on: {
                    click: t.gotoPrizeArea
                }
            })]), w("div", [w("img", {
                staticClass: "abL top1",
                attrs: {
                    src: e("bac8")
                },
                on: {
                    click: t.goToEventStrategy
                }
            }), w("img", {
                staticClass: "abL top2",
                attrs: {
                    src: e("56f0")
                },
                on: {
                    click: t.goToMyWards
                }
            }), t.userInfo.shareNum < 3 ? w("img", {
                staticClass: "abR top1",
                attrs: {
                    src: e("08a1")
                },
                on: {
                    click: function(n) {
                        return t.goToShare()
                    }
                }
            }) : w("img", {
                staticClass: "abR top1",
                attrs: {
                    src: e("463a")
                },
                on: {
                    click: function(n) {
                        return t.goToShare()
                    }
                }
            }), t.userInfo.boxFlag > 0 ? w("img", {
                staticClass: "abR top2",
                attrs: {
                    src: e("e5bf")
                },
                on: {
                    click: t.goTreasureBox
                }
            }) : w("img", {
                staticClass: "abR top2",
                attrs: {
                    src: e("c8ce")
                },
                on: {
                    click: t.goTreasureBox
                }
            }), t.shareFlag ? w("div", {
                staticClass: "share",
                on: {
                    click: t.cancleShare
                }
            },
            [w("img", {
                staticStyle: {
                    width: "50%",
                    position: "absolute"
                },
                attrs: {
                    src: e("f2ca")
                }
            })]) : t._e()])])
        },
        Q = [],
        q = (e("9911"), e("99af"), e("b0c0"), e("a358")),
        k = {
            getJsToken: function(t) {
                return Object(s["a"])({
                    url: "wxfx/getjstoken",
                    method: "post",
                    data: {
                        url: t
                    }
                })
            }
        },
        A = function() {
            var t = this,
            n = t.$createElement,
            e = t._self._c || n;
            return e("div", {
                staticClass: "intro_main"
            })
        },
        P = [],
        B = (e("bfee"), {}),
        x = Object(f["a"])(B, A, P, !1, null, "2296bb48", null),
        E = x.exports,
        H = {
            components: {
                dynastyIntro: E,
                treasureBox: function() {
                    return e.e("chunk-4aa98c14").then(e.bind(null, "0285"))
                },
                successCard: function() {
                    return e.e("chunk-4776df1a").then(e.bind(null, "1c65"))
                },
                exchangeOk: function() {
                    return e.e("chunk-22e8339d").then(e.bind(null, "c526"))
                },
                wxfxOk3Times: function() {
                    return e.e("chunk-20f92e54").then(e.bind(null, "ea9b"))
                },
                sendPhone: function() {
                    return e.e("chunk-564d34d2").then(e.bind(null, "143c"))
                }
            },
            data: function() {
                return {
                    shareFlag: !1,
                    userInfo: {
                        wxNickname: "",
                        wxAvatar: "",
                        dynastyId: "",
                        card1Rank: 0,
                        card1State: "未解锁",
                        card2Rank: 0,
                        card2State: "未解锁",
                        card3Rank: 0,
                        card3State: "未解锁",
                        card4Rank: 0,
                        card4State: "未解锁",
                        cardJumpFlag: 0,
                        boxFlag: 0,
                        shareNum: 0,
                        phone: ""
                    },
                    chaoDaiPic: {
                        pic1: "static/mainVenue/dynasty_11.png",
                        pic2: "static/mainVenue/dynasty_21.png",
                        pic3: "static/mainVenue/dynasty_31.png",
                        pic4: "static/mainVenue/dynasty_41.png"
                    },
                    eggBtnFlag: !1,
                    Egg_bg: "",
                    Egg_bg_list: ["Egg_bg_qin", "Egg_bg_han", "Egg_bg_tang", "Egg_bg_now"],
                    successCard_bg: "",
                    successCard_bg_list: ["successCard_bg_qin", "successCard_bg_han", "successCard_bg_tang", "successCard_bg_now"],
                    wxfx_bg: "",
                    dialogVisible_dynastyIntro: !1,
                    dialogVisible_treasureBox: !1,
                    dialogVisible_noQualification: !1,
                    dialogVisible_successCard: !1,
                    dialogVisible_wxfxOk3Times: !1,
                    dialog_sendPhone: !1,
                    successCard_dynastyId: 0,
                    wx_user_successCard_info: {
                        dynasty: 0,
                        name: "",
                        avatar: "",
                        ranking: 0
                    },
                    wxfx_info: {
                        title: "穿越千年 “韵”动一夏",
                        desc: "快来和我一起来参加陕西好猫千年运动会吧！",
                        link: "",
                        imgUrl: "https://cdn.via.cool/web/zy/sport0808/img/share.jpg"
                    },
                    loading: !0,
                    shareFirst: !1
                }
            },
            methods: {
                closeSendPhone: function() {
                    this.dialog_sendPhone = !1
                },
                fillin: function() {
                    alert("请填写个人信息")
                },
                goThrough: function(t) {
                    t == this.userInfo.dynastyId - 1 ? this.eggBtnFlag = !0 : this.eggBtnFlag = !1,
                    this.Egg_bg = this.Egg_bg_list[t],
                    this.dialogVisible_dynastyIntro = !this.dialogVisible_dynastyIntro
                },
                goTreasureBox: function() {
                    this.userInfo.dynastyId >= 1 && this.userInfo.dynastyId <= 4 ? this.dialogVisible_treasureBox = !this.dialogVisible_treasureBox: alert("时间不对，百宝箱不开")
                },
                goNoQualification: function(t) {
                    this.dialogVisible_dynastyIntro = !1,
                    this.dialogVisible_noQualification = !this.dialogVisible_noQualification
                },
                wxfx_wen_an: function(t, n) {
                    var e = ["秦朝", "汉朝", "唐朝", "现代"],
                    w = this.userInfo.idCode,
                    r = window.location.href.split("#")[0];
                    r = r.split("?")[0],
                    this.wxfx_info.title = "我获得了".concat(e[t - 1], "成就卡"),
                    this.wxfx_info.link = "".concat(r, "?id=").concat(t, "&se=").concat(w, "#/dynastyShare"),
                    this.wxfx_info.imgUrl = "https://foryouhealth.oss-cn-beijing.aliyuncs.com/share2.jpg?versionId=CAEQGBiBgMCgmana2BciIDFlOGZmNDgzMWUzMzRkMDc5OGUzY2E2MWE3ZWI1ZjQ3",
                    this.wxfx_info.desc = "穿越千年 “韵”动一夏，我是穿越".concat(e[t - 1], "挑战第").concat(n, "人！")
                },
                goSuccessCardcss: function(t) {
                    this.successCard_bg = this.successCard_bg_list[t - 1],
                    this.wx_user_successCard_info.dynasty = this.userInfo.dynastyId,
                    this.wx_user_successCard_info.name = this.userInfo.wxNickname,
                    this.wx_user_successCard_info.avatar = this.userInfo.wxAvatar,
                    1 == t ? this.wx_user_successCard_info.ranking = this.userInfo.card1Rank: 2 == t ? this.wx_user_successCard_info.ranking = this.userInfo.card2Rank: 3 == t ? this.wx_user_successCard_info.ranking = this.userInfo.card3Rank: 4 == t && (this.wx_user_successCard_info.ranking = this.userInfo.card4Rank),
                    this.wxfx_wen_an(t, this.wx_user_successCard_info.ranking),
                    this.successCard_dynastyId = t,
                    this.dialogVisible_successCard = !this.dialogVisible_successCard,
                    this.wxJsSdk()
                },
                gotoRanking: function() {
                    this.$router.push({
                        path: "/ranking"
                    })
                },
                gotoPrizeArea: function() {
                    var t = window.location.href.split("#")[0];
                    window.location.href = t + "#/prize"
                },
                goToEventStrategy: function() {
                    this.$router.push({
                        path: "/strategy"
                    })
                },
                goToMyWards: function() {
                    window.open("https://sxzy.yunzhi.co/pointmall/wode-prize.html")
                },
                goToShare: function() {
                    scrollTo(0, 0),
                    this.dialogVisible_successCard = !1,
                    this.shareFlag = !0
                },
                refreshen: function() {
                    var t = this,
                    n = this;
                    q["a"].getMainVenueInfo().then((function(e) {
                        e.data.success && ("203" == e.data.data.isExist ? window.location.href = e.data.data.url: (n.userInfo = e.data.data.mainVenueInfo, n.$store.commit("updateName", e.data.data.mainVenueInfo.wxNickname), n.$store.commit("updateAvatar", e.data.data.mainVenueInfo.wxAvatar), n.$store.commit("updateDynastyId", e.data.data.mainVenueInfo.dynastyId), "" != t.userInfo.phone && null != t.userInfo.phone || (t.shareFirst = !0), n.init()))
                    }))
                },
                init: function() {
                    0 == this.userInfo.dynastyId ? this.chaoDaiPic = {
                        pic1: "static/mainVenue/dynasty_11.png",
                        pic2: "static/mainVenue/dynasty_21.png",
                        pic3: "static/mainVenue/dynasty_31.png",
                        pic4: "static/mainVenue/dynasty_41.png"
                    }: 1 == this.userInfo.dynastyId ? this.chaoDaiPic = {
                        pic1: "static/mainVenue/dynasty_12.gif",
                        pic2: "static/mainVenue/dynasty_21.png",
                        pic3: "static/mainVenue/dynasty_31.png",
                        pic4: "static/mainVenue/dynasty_41.png"
                    }: 2 == this.userInfo.dynastyId ? this.chaoDaiPic = {
                        pic1: "static/mainVenue/dynasty_13.png",
                        pic2: "static/mainVenue/dynasty_22.gif",
                        pic3: "static/mainVenue/dynasty_31.png",
                        pic4: "static/mainVenue/dynasty_41.png"
                    }: 3 == this.userInfo.dynastyId ? this.chaoDaiPic = {
                        pic1: "static/mainVenue/dynasty_13.png",
                        pic2: "static/mainVenue/dynasty_23.png",
                        pic3: "static/mainVenue/dynasty_32.gif",
                        pic4: "static/mainVenue/dynasty_41.png"
                    }: 4 == this.userInfo.dynastyId ? this.chaoDaiPic = {
                        pic1: "static/mainVenue/dynasty_13.png",
                        pic2: "static/mainVenue/dynasty_23.png",
                        pic3: "static/mainVenue/dynasty_33.png",
                        pic4: "static/mainVenue/dynasty_42.gif"
                    }: this.chaoDaiPic = {
                        pic1: "static/mainVenue/dynasty_13.png",
                        pic2: "static/mainVenue/dynasty_23.png",
                        pic3: "static/mainVenue/dynasty_33.png",
                        pic4: "static/mainVenue/dynasty_43.png"
                    },
                    this.userInfo.cardJumpFlag > 0 && (this.shareFirst = !0, this.goSuccessCardcss(this.userInfo.cardJumpFlag)),
                    this.loading = !1,
                    this.wxJsSdk()
                },
                goToWhere: function() {
                    var t = this;
                    q["a"].goThrough(this.$store.state.dynastyId).then((function(n) {
                        if (n.data.success) switch (n.data.data.resultCode) {
                        case 90001:
                            alert("朝代还未开始");
                            break;
                        case 1:
                        case 2:
                        case 3:
                            t.$router.push({
                                path:
                                "/games"
                            });
                            break;
                        case 4:
                            alert("进入现代");
                            break
                        }
                    }))
                },
                wxJsSdk: function() {
                    var t = this,
                    n = window.location.href.split("#")[0];
                    n = encodeURIComponent(n),
                    k.getJsToken(n).then((function(n) {
                        var e = t;
                        t.configmap = n.data.data.configmap,
                        wx.config({
                            debug: !1,
                            appId: t.configmap.appId,
                            timestamp: t.configmap.timestamp,
                            nonceStr: t.configmap.noncestr,
                            signature: t.configmap.signature,
                            jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "scanQRCode", "hideOptionMenu", "showMenuItems"]
                        }),
                        wx.ready((function() {
                            wx.hideOptionMenu(),
                            wx.showMenuItems({
                                menuList: ["menuItem:share:appMessage", "menuItem:share:timeline"]
                            })
                        })),
                        wx.error((function(t) {
                            console.log(t)
                        })),
                        wx.onMenuShareTimeline({
                            title: t.wxfx_info.title,
                            link: t.wxfx_info.link,
                            imgUrl: t.wxfx_info.imgUrl,
                            success: function() {
                                e.addShareNum(),
                                e.dialogVisible_successCard = !1,
                                e.cancleShare()
                            }
                        }),
                        wx.onMenuShareAppMessage({
                            title: t.wxfx_info.title,
                            desc: t.wxfx_info.desc,
                            link: t.wxfx_info.link,
                            type: "",
                            dataUrl: "",
                            imgUrl: t.wxfx_info.imgUrl,
                            success: function() {
                                e.addShareNum(),
                                e.dialogVisible_successCard = !1,
                                e.cancleShare()
                            }
                        })
                    }))
                },
                cancleShare: function() {
                    this.shareFlag = !1
                },
                addShareNum: function() {
                    var t = this;
                    q["a"].shareMainVenue(this.userInfo.dynastyId, this.userInfo.shareNum).then((function(n) {
                        n.data.success && (t.userInfo.shareNum < 3 && (t.userInfo.shareNum < 2 ? t.wxfx_bg = "wxfx_bg2": t.wxfx_bg = "wxfx_bg0", t.dialogVisible_wxfxOk3Times = !0), t.userInfo.shareNum++)
                    }))
                }
            },
            created: function() {},
            mounted: function() {
                var t = document.getElementById("game");
                t.style.display = "none";
                var n = window.location.href.split("#")[0];
                n = n.split("?")[0],
                this.wxfx_info.link = n + "#/loading",
                this.refreshen()
            }
        },
        T = H,
        L = (e("b36d"), Object(f["a"])(T, j, Q, !1, null, null, null)),
        V = L.exports;
        w["default"].use(r["a"]);
        var z = new r["a"]({
            routes: [{
                path: "/",
                name: "root",
                redirect: {
                    name: "Loading"
                }
            },
            {
                path: "/loading",
                name: "Loading",
                component: p
            },
            {
                path: "/loading2",
                name: "Loading2",
                component: y
            },
            {
                path: "/login",
                name: "Login",
                component: D
            },
            {
                path: "/mainVenue",
                name: "MainVenue",
                component: V
            },
            {
                path: "/strategy",
                name: "Strategy",
                component: function() {
                    return e.e("chunk-01ccd0bd").then(e.bind(null, "be88"))
                }
            },
            {
                path: "/ranking",
                name: "Ranking",
                component: function() {
                    return e.e("chunk-02e83a64").then(e.bind(null, "aa95"))
                }
            },
            {
                path: "/prize",
                name: "Prize",
                component: function() {
                    return e.e("chunk-71e7ca90").then(e.bind(null, "5679"))
                }
            },
            {
                path: "/games",
                name: "Games",
                component: function() {
                    return e.e("chunk-62475b39").then(e.bind(null, "b028"))
                }
            },
            {
                path: "/test",
                name: "Test",
                component: function() {
                    return e.e("chunk-b2431b82").then(e.bind(null, "c7f5"))
                }
            },
            {
                path: "/wuTestQin",
                name: "WuTestQin",
                component: function() {
                    return e.e("chunk-34278b56").then(e.bind(null, "4e88"))
                }
            },
            {
                path: "/dynastyShare",
                name: "DynastyShare",
                component: function() {
                    return e.e("chunk-425f6b40").then(e.bind(null, "4c41"))
                }
            },
            {
                path: "/wuTestHan",
                name: "WuTestHan",
                component: function() {
                    return e.e("chunk-cfa8c678").then(e.bind(null, "7cda"))
                }
            },
            {
                path: "/wuTestTang",
                name: "WuTestTang",
                component: function() {
                    return e.e("chunk-66519184").then(e.bind(null, "b3c6"))
                }
            },
            {
                path: "*",
                redirect: "login"
            }]
        });
        z.beforeEach((function(t, n, e) {
            var w = JSON.parse(sessionStorage.getItem("currentPath"));
            w && w.path ? (sessionStorage.removeItem("currentPath"), e(w.path)) : e()
        })),
        z.afterEach((function(t) {
            window.addEventListener("load", (function() {
                "/dynastyShare" == t.path || "/login" == t.path || "/loading" !== t.path && z.replace("/loading2")
            }))
        }));
        n["a"] = z
    },
    a2ca: function(t, n, e) {
        t.exports = e.p + "img/card_4.417dbc3e.png"
    },
    a358: function(t, n, e) {
        "use strict";
        var w = e("b775");
        n["a"] = {
            getMainVenueInfo: function() {
                return Object(w["a"])({
                    url: "mainVenue/getMainVenueInfo",
                    method: "post"
                })
            },
            goThrough: function(t) {
                return Object(w["a"])({
                    url: "mainVenue/goThrough",
                    method: "post",
                    params: {
                        dynastyId: t
                    }
                })
            },
            getBoxInfo: function() {
                return Object(w["a"])({
                    url: "tools/getBoxInfo",
                    method: "get"
                })
            },
            addToolsToUser: function(t) {
                return Object(w["a"])({
                    url: "tools/addToolsToUser",
                    method: "post",
                    data: t
                })
            },
            getShareCardInfo: function(t, n) {
                return Object(w["a"])({
                    url: "mainVenue/getShareCardInfo/" + t + "/" + n,
                    method: "get"
                })
            },
            queryRankList: function(t, n) {
                return Object(w["a"])({
                    url: "mainVenue/queryRankList/" + t + "/" + n,
                    method: "get"
                })
            },
            shareMainVenue: function(t, n) {
                return Object(w["a"])({
                    url: "mainVenue/shareMainVenue/" + t + "/" + n,
                    method: "get"
                })
            }
        }
    },
    ac46: function(t, n, e) {
        t.exports = e.p + "img/goHome.3f8492a1.png"
    },
    acfc: function(t, n, e) {},
    adec: function(t, n, e) {
        t.exports = e.p + "img/getLife.705f66e6.png"
    },
    b36d: function(t, n, e) {
        "use strict";
        e("0967")
    },
    b775: function(t, n, e) {
        "use strict";
        e("d3b7"),
        e("ac1f"),
        e("5319");
        var w = e("bc3a"),
        r = e.n(w),
        c = e("a18c"),
        i = r.a.create({
            baseURL: "https://changle.via.cool/sport",
            timeout: 3e4
        });
        i.interceptors.request.use((function(t) {
            return localStorage.getItem("easontoken") && (t.headers["X-Token"] = localStorage.getItem("easontoken")),
            t
        }), (function(t) {
            Promise.reject(t)
        })),
        i.interceptors.response.use((function(t) {
            var n = t.data;
            return 2e4 !== n.code ? (99999 !== n.data.code && 99998 !== n.data.code || (localStorage.removeItem("easontoken"), c["a"].replace("/loading")), Promise.reject("error")) : t
        }), (function(t) {
            return console.log(t),
            Promise.reject(t)
        })),
        n["a"] = i
    },
    bac8: function(t, n, e) {
        t.exports = e.p + "img/left01.affc52a2.png"
    },
    bd96: function(t, n) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURUdwTPj4+Pn5+fj4+Pf39/j4+Pj4+PLy8vn5+fj4+Pf39/j4+Pf39/j4+Pr6+vj4+Pj4+P7+/pWDpRwAAAAQdFJOUwBlyYEiVBEI2OVEtzOm9Ze7rGGYAAAChElEQVRIx6VXWaKDIAyUNeyS+1/2IdqyWvXJV6uMCZPJwrLMF3DDrI5RW2Y4LA8WJ15HjFqllX94wu8hQdiIyhPDZbIIkhviFUYrru0DUaiZ6zaCYxoVuYAbinRuAkR6ZX5A5YpK/DiPwlWevXUKmfzll2So3PyVCNpcUWJ0mLpGkN6IB6dIZlgrb0XSjmiB9qaOErrz3AUq7+oPaGhYk0rzB+rVqra0onmifYNr/YeNzrURNs2pWDEGVMkhr2jDCot0JSW1pKLwjZIYhRjrZ1zhtrQowTniBeUzx1YfMNaMgse4LfSVs3B8pTXsaN5a0SDijg2k0sUOsroxnFzMW7Vrn6QCUYUEtM2vQkP1x8XiY5LU9n9tlcACz3Q1ejlcTOvjJMv/1k69LlPmVfN4xYI2e6ZubgxZA8pvzvvmoS9gpMknp/N5R/X6RBWPpEvNWKH5TtasApDIkzRbWUvVoHPYJupdMpDFzqPCWIZn3mepzpMSrO6ogDV2y09TXaZIa9V/FliLPSkxoPQSB/DWcKpzx7O6qOIMvFX/UEeMzy3Hidt7IGjNuTxxeyDsG8ayAjshbAjVp/XUnLGTUJlp7eNZHEofJw8rn4qkl2fJy0SU+xA3aSebPPvE+GYh2i1Vhd3haPkkMfqUzB6Fsjs19V2jne2ckn0xOGplKJ1ailXrVDtble7FgA+BEAF1SwR3zHb5cUSpK4Ap/YMf+78kjMFQAPvSKyl11932A2qLPnh1o2F+i37bbtjZyNIZJmOjg3vYqtFVLZb7O9i6xb5r7u/GikcDjewGmnej1P0hTtr5CPj/8fHd4PpuZL4a1pefw/q7a8LLC0p/NYJHV6OXl7IH18E/QvMpoWE48PcAAAAASUVORK5CYII="
    },
    bded: function(t, n, e) {
        "use strict";
        e("3191")
    },
    bfee: function(t, n, e) {
        "use strict";
        e("acfc")
    },
    c164: function(t, n, e) {},
    c311: function(t, n, e) {
        "use strict";
        e("c164")
    },
    c3c9: function(t, n, e) {},
    c8ce: function(t, n, e) {
        t.exports = e.p + "img/right02.e9f5182b.png"
    },
    c8d7: function(t, n, e) {
        t.exports = e.p + "img/card_3.f92f00a5.png"
    },
    cda1: function(t, n, e) {
        t.exports = e.p + "img/nextTimes.b34ce302.png"
    },
    ce8d: function(t, n, e) {
        "use strict";
        e("1ead")
    },
    d149: function(t, n, e) {
        t.exports = e.p + "img/card_1_on.aa160977.png"
    },
    d29a: function(t, n, e) {
        t.exports = e.p + "img/bg1.af13d76d.jpg"
    },
    d4a1: function(t, n, e) {},
    dac7: function(t, n, e) {
        "use strict";
        e("2cc5")
    },
    de5f: function(t, n, e) {},
    e5bf: function(t, n, e) {
        t.exports = e.p + "img/right02_dot.ccfffbad.png"
    },
    e5da: function(t, n, e) {
        t.exports = e.p + "img/card_3_on.7a435090.png"
    },
    e6b2: function(t, n, e) {
        t.exports = e.p + "img/fightAgain.e7840f6f.png"
    },
    f2ca: function(t, n, e) {
        t.exports = e.p + "img/share.1e3e31f0.png"
    },
    f36d: function(t, n, e) {
        "use strict";
        e("49a4")
    },
    fc26: function(t, n, e) {},
    fdc8: function(t, n, e) {
        t.exports = e.p + "img/goHomeBig.626c3fab.png"
    }
});