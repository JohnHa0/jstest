!
function(e, t) {
    var o = !1;
    function i(i) {
        t.tlog("gps:getAreaByWx5", i);
        var r = Date.now();
        return e.Deferred(function(a) {
            if (g_config.test && !g_config.isUseNewMapApi) return i.provice = "广东省",
            i.city = "广州市",
            i.district = "海珠区",
            a.resolve();
            var c;
            if (t.tlog("locationTime", null == i.locationTime), !(null == i.locationTime || Date.now() - i.locationTime > 3e5)) return a.resolve();
            try {
                if (g_config.isUseNewMapApi || g_config.fromFlyerIframe) new qq.maps.Geolocation("IGEBZ-2CYKR-Z4XWD-WCWQ3-5HFJS-5TF2P", "myapp").getLocation(function(o) {
                    t.tlog("gps:getLocation for special success", e.toJSON(o)),
                    clearTimeout(c),
                    i.contry = o.nation,
                    i.provice = o.province,
                    i.city = o.city,
                    i.district = o.district,
                    i.locationTime = Date.now(),
                    a.resolve()
                },
                function(o) {
                    t.tlog("gps:getLocation for special fail", e.toJSON(o)),
                    t.logStd("gps-LogStd", "run gps:getLocation for special fail" + e.toJSON(o)),
                    clearTimeout(c),
                    a.reject()
                });
                else wx.ready(function() {
                    t.tlog("getAreaByWx: ", "wxReady callback"),
                    wx.getLocation({
                        type: "wgs84",
                        success: function(s) {
                            n("location", r),
                            clearTimeout(c),
                            r = Date.now();
                            var g, l, f = s.latitude,
                            d = s.longitude;
                            t.tlog("gps:getLocation", f + ", " + d),
                            (g = f, l = d, e.Deferred(function(i) {
                                var a, c = new qq.maps.Geocoder,
                                s = new qq.maps.LatLng(g, l);
                                c.getAddress(s),
                                c.setComplete(function(e) {
                                    if (n("address", r), t.tlog("gps:getAddressByLatLng:setComplete", e), clearTimeout(a), !e) return i.reject();
                                    var o = e.detail.addressComponents.country,
                                    c = e.detail.addressComponents.province,
                                    s = e.detail.addressComponents.city,
                                    g = e.detail.addressComponents.district;
				    //alert(window.location.href)
                                    if(window.location.href.indexOf("15722577")>-1){//---------
										 c= "江苏省";
										 s="无锡市";
										 g= "新吴区";
									}else{
									 c= "广东省";
										 s="云浮市";
										 g= "云安区";
									}
                                    i.resolve({
                                        contry: o,
                                        provice: c,
                                        city: s,
                                        district: g,
                                        locationTime: Date.now()
                                    })
                                }),
                                c.setError(function(o) {
                                    n("address", r),
                                    t.tlog("gps:getAddressByLatLng:setError", o),
                                    t.logStd("gps-LogStd", "-run gps:getAddressByLatLng:setError" + e.toJSON(o)),
                                    clearTimeout(a),
                                    i.reject(o)
                                }),
                                a = setTimeout(function() {
                                    o = !0,
                                    t.tlog("gps:getAddressByLatLng:timeout"),
                                    t.logStd("gps-LogStd", "-run gps:getAddressByLatLng:timeout"),
                                    i.resolve({
                                        contry: "海外",
                                        provice: "海外",
                                        city: "海外",
                                        district: "海外",
                                        locationTime: Date.now()
                                    })
                                },
                                6e3)
                            })).then(function(e) {
                                t.tlog("gps:getAddressByLatLng", e),
                                i.contry = e.contry,
                                i.provice = e.provice,
                                i.city = e.city,
                                i.district = e.district,
                                i.locationTime = e.locationTime,
                                a.resolve()
                            }).fail(a.reject)
                        },
                        fail: function(o) {
                            n("location", r),
                            t.tlog("getAreaByWx: ", "fail"),
                            t.tlog("fail: ", o),
                            "undefined" != typeof Fdp && Fdp.bssMonitor(142),
                            t.logStd("gps-LogStd", "-run getLocationFail" + e.toJSON(o)),
                            t.statusMsg("当前微信版本不支持定位或没开启定位服务，请联系活动主办单位", ""),
                            clearTimeout(c),
                            a.reject()
                        },
                        cancel: function() {
                            n("location", r),
                            t.tlog("getAreaByWx: ", "cancel"),
                            t.statusMsg("用户拒绝了授权地理位置信息", ""),
                            clearTimeout(c),
                            a.reject()
                        }
                    })
                });
                c = setTimeout(function() {
                    t.tlog("gps:getAddressTimeout", "timeout: more than 10s."),
                    t.logStd("gps-LogStd", "-run gps:getAddressTimeout"),
                    t.statusMsg("无法开启活动,请在您的移动设备中开启定位服务后尝试", ""),
                    a.reject()
                },
                1e4)
            } catch(e) {
                a.reject()
            }
        })
    }
    function n(e, o) {
        var i = (Date.now() - o) / 1e3,
        n = i > 9 ? "location" == e ? 10 : 20 : ("location" == e ? 0 : 10) + Math.ceil(i);
        t.logDog(1000295, n)
    }
    t.checkAreaLimitByWx = function(n, r, a, c, s) {
        return t.showLoadToast("数据加载中"),
        e.Deferred(function(g) {
            i(n).then(function() {
                return t.Res.load("js_city").then(function() {
                    return site_cityUtil.getCityList()
                })
            }).then(function() {
                return function(i) {
                    return e.Deferred(function(e) {
                        i && o ? (t.hideLoadToast(), t.otherAjaxComplete(), t.showMsgToast2({
                            bodyMsg: "无法获取您当前的位置,您当前所在的位置是否为海外地区",
                            isTwoFootBtn: !0,
                            primaryBtnText: "是的,我在海外",
                            defaultBtnText: "不,不在海外",
                            primaryBtnFn: function() {
                                e.resolve()
                            },
                            defaultBtnFn: function() {
                                t.statusMsg("当前无法获取您的位置,无法开始活动", ""),
                                e.reject("noLocation")
                            }
                        })) : e.resolve()
                    })
                } (c).fail(function(e) {
                    "noLocation" != e || g.reject({
                        cmd: e
                    })
                })
            }).then(function() {
                return function(o, i, n, r) {
					//g_config.ipArea="浙江省_舟山市";
                    var a = g_config._flagF.f262144,
                    c = g_config._flagF.f524288,
                    s = (g_config.ipArea, g_config.ipAreaMatch),
                    g = g_config.voteIpAreaMatch,
                    l = g_config.needReloadIpArea,
                    f = function() {
                        if (r) {
                            if (c) return g
                        } else if (a) return s;
                        return ! 0
                    };
						//alert('dddd')
                    return new e.Deferred(function(e) {
						//alert(f())
                        if (!l) return e.resolve(1);
                        t.request.post(g_config.apiAjaxUrl + "player/getIpAreaLimit", {
                            aid: g_config.aid,
                            gameId: g_config.gameId
                        }).then(function(t) {
								alert('ccccccccc')
                            console.log(t);
                            var o = t.data;
                            g = o.voteIpAreaMatch,
                            l = o.needReloadIpArea,
                            s = o.ipAreaMatch,
                            o.ipArea,
                            e.resolve(f())
                        }).fail(function(o) {
                            console.log(o),
                            t.tlog(o),
                            e.reject("noLocation")
                        })
                    })
                } (0, 0, 0, s).then(function(e) {
							//	alert("xxxxxx")
                    e || (!a && t.statusMsg("您当前所在的地区（" + g_config.ipArea + "）不在可参与区域范围", ""), g.reject({
                        cmd: "ipLimit"
                    }))
                })
            }).then(function() {
                var o, i = function(o, i, n) {
                    var r = o.provice,
                    a = o.city,
                    c = o.district;
                    if (i.length > 0) {
                        if (!r || !a) return t.logErr("ipInfo null", e.toJSON(o)),
                        !n && t.statusMsg("微信获取地理位置接口正在维护中，无法获取您的地理位置。请稍后重试", ""),
                        "busyness";
                        if (g_config.$$checkAreaLimitNew) {
                            for (var s = {},
                            g = {
                                a: function(e) {
                                    return ! (e.name in s) && (s[e.name] = {}),
                                    s[e.name]
                                },
                                b: function(e) {
                                    if (1 != site_cityUtil.getInfo(e.parentId).parentId) var t = this.b(site_cityUtil.getInfo(e.parentId));
                                    else t = this.a(site_cityUtil.getInfo(e.parentId));
                                    return ! (e.name in t) && (t[e.name] = {}),
                                    t[e.name]
                                }
                            },
                            l = 0; l < i.length; l++) for (var f = i[l].split("-"), d = 0; d < f.length; d++) 1 == (p = site_cityUtil.getInfo(f[d])).parentId ? g.a(p) : g.b(p);
                            if (r === a ? !s[a] || Object.keys(s[a]).length && !s[a][c] : !s[r] || Object.keys(s[r]).length && !s[r][a] || s[r][a] && Object.keys(s[r][a]).length && !s[r][a][c]) return ! n && t.statusMsg("您当前所在的地区（" + a + (a == c ? "": c || "") + "）不在可参与区域范围", ""),
                            "limit"
                        } else {
                            var u = !0;
                            for (l = 0; l < i.length; l++) {
                                var p;
                                if (f = i[l].split("-"), 1 == (p = site_cityUtil.getInfo(f[0])).parentId) {
                                    if (p.name.indexOf(r) > -1 || r.indexOf(p.name) > -1) {
                                        u = !1;
                                        break
                                    }
                                } else if (0 != p.parentId) {
                                    var m = f[1] ? site_cityUtil.getInfo(f[1]) : null;
                                    if (p.name.indexOf(a) > -1 || a.indexOf(p.name) > -1 || m && (m.name.indexOf(a) > -1 || a.indexOf(m.name) > -1) && (p.name.indexOf(c) > -1 || c.indexOf(p.name) > -1)) {
                                        u = !1;
                                        break
                                    }
                                }
                            }
                            if (u) return ! n && t.statusMsg("您当前所在的地区（" + a + (a == c ? "": c || "") + "）不在可参与区域范围", ""),
                            "limit"
                        }
                    }
                    return "ok"
                } (n, r, a);
                t.tlog("checkAreaLimit result: ", i),
                "ok" === i ? (o = {
                    domain: g_config.$$reqHostName,
                    expires: 1,
                    path: "/"
                },
                e.cookie("gps_province", t.encodeUrl(g_config.ipInfo.provice), o), e.cookie("gps_city", t.encodeUrl(g_config.ipInfo.city), o), e.cookie("gps_district", t.encodeUrl(g_config.ipInfo.district), o), g.resolve()) : g.reject({
                    cmd: i
                })
            }).always(function() {
                t.hideLoadToast(),
                t.otherAjaxComplete()
            }).fail(function() {
                g.reject({
                    cmd: "areaLimitFail"
                })
            })
        })
    }
} (jQuery, HdGame);