/*
东东农场助力
20 2,6,11 * * * jd_farm_help.js
updatetime:2023/8/29
变量
epxort FRUIT_DELAY = '1000',设置等待时间(毫秒)，默认请求5次接口等待5秒（5000）
export FRUITCODES = 'xxx&xxx' 指定助力码助力，多个用&分割，不指定则自动搜集任务助力码
*/

let shareCodes = [];
const $ = new Env('东东农场-助力');
const _0x50106e = function () {
  let _0x3007ad = true;
  return function (_0x25b92, _0x4ec310) {
    const _0x5f012b = _0x3007ad ? function () {
      if (_0x4ec310) {
        const _0x2972db = _0x4ec310.apply(_0x25b92, arguments);

        return _0x4ec310 = null, _0x2972db;
      }
    } : function () {};

    return _0x3007ad = false, _0x5f012b;
  };
}(),
      _0x5eb07d = _0x50106e(this, function () {
  return _0x5eb07d.toString().search("(((.+)+)+)+$").toString().constructor(_0x5eb07d).search("(((.+)+)+)+$");
});

_0x5eb07d();

let _0x4c10d9 = [],
    _0x4989d7 = "",
    _0x3c35bf,
    _0x4463af,
    _0x5ba931 = "",
    _0x9c19dd = "",
    _0x3445aa = "",
    _0x3fc255 = [],
    _0x9f37d = {},
    _0x562c29 = 0,
    _0x559416 = false;

const _0x525acf = require("fs"),
      _0x599ff0 = "https://api.m.jd.com/client.action",
      _0x55c1e4 = process.env.FRUIT_DELAY || 5000,
      _0x5cc317 = require("./function/dylany");

$.reqnum = 1;
!(async () => {
  await _0x590b68();

  if (_0x4463af.length == 0) {
    $.log("没有助力码,请变量FRUITCODES指定或执行农场任务自动收集助力码");
    return;
  }

  if (!_0x4c10d9[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }

  for (let _0x4a0b1e = 0; _0x4a0b1e < _0x4c10d9.length; _0x4a0b1e++) {
    if (_0x4c10d9[_0x4a0b1e]) {
      _0x4989d7 = _0x4c10d9[_0x4a0b1e];
      $.UserName = decodeURIComponent(_0x4989d7.match(/pt_pin=([^; ]+)(?=;?)/) && _0x4989d7.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x4a0b1e + 1;
      $.isLogin = true;
      $.nickName = "";
      await _0x228193();
      console.log("\n开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n");

      if (!$.isLogin) {
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        });
        $.isNode() && (await _0x3c35bf.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }

      _0x9c19dd = "";
      _0x3445aa = "";
      _0x9f37d = {};
      $.UA = require("./USER_AGENTS").UARAM();
      await _0x48948c();
      await _0xa26cc();
      await $.wait(2000);
    }
  }
})().catch(_0x3a2d8d => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x3a2d8d + "!", "");
}).finally(() => {
  $.done();
});

async function _0xa26cc() {
  _0x3445aa = "【京东账号" + $.index + "🆔】" + ($.nickName || $.UserName);

  try {
    await _0x1e2225("", 1);

    if ($.farmInfo.farmUserPro) {
      await _0x2dabed();
      await _0x24b19b();
    } else JSON.stringify($.farmInfo).includes("winTexts") ? (console.log("初始化农场数据异常, 请确认此账号是否开通农场"), _0x9c19dd = "【数据异常】请确认此账号是否开通农场\n") : (console.log("初始化农场数据异常, 请登录京东 app查看农场0元水果功能是否正常,农场初始化数据: " + JSON.stringify($.farmInfo)), _0x9c19dd = "【数据异常】请手动登录京东app查看此账号" + $.name + "是否正常");
  } catch (_0x3ef2ee) {
    console.log("任务执行异常，请检查执行日志 ‼️‼️");
    $.logErr(_0x3ef2ee);
  }

  await _0x6c843c();
}

async function _0x24b19b() {
  await _0x4d8c06();
  await _0x44574c();
}

async function _0x44574c() {
  console.log("\n开始天天抽奖助力...");

  for (let _0x23245f of _0x4463af) {
    if (_0x23245f === $.farmInfo.farmUserPro.shareCode) {
      console.log("跳过自己\n");
      continue;
    }

    await _0x2f5d8f(_0x23245f);
    await $.wait(1000);
    if ($.lotteryMasterHelpRes.helpResult === undefined) break;
    if ($.lotteryMasterHelpRes.helpResult.code === "0") console.log("助力" + $.lotteryMasterHelpRes.helpResult.masterUserInfo.nickName + "成功\n");else {
      if ($.lotteryMasterHelpRes.helpResult.code === "11") console.log("不要重复助力" + $.lotteryMasterHelpRes.helpResult.masterUserInfo.nickName + "\n");else {
        if ($.lotteryMasterHelpRes.helpResult.code === "13") {
          console.log("助力" + $.lotteryMasterHelpRes.helpResult.masterUserInfo.nickName + "失败,助力次数耗尽\n");
          break;
        }
      }
    }
  }
}

async function _0x2dabed() {
  console.log("\n开始助力好友...");
  let _0x2289f4 = 0,
      _0x1aa4a6 = 3,
      _0x4678a4 = "";

  for (let _0x26df97 of _0x4463af) {
    console.log("去助力: " + _0x26df97);
    if (!_0x26df97) continue;

    if (_0x26df97 === $.farmInfo.farmUserPro.shareCode) {
      console.log("不能为自己助力哦，跳过\n");
      continue;
    }

    await _0x2cf0ca(_0x26df97);
    await $.wait(2000);

    if ($.helpResult.code === "0") {
      if ($.helpResult.helpResult.code === "0") {
        _0x2289f4 += $.helpResult.helpResult.salveHelpAddWater;
        console.log("【助力结果】: 助力成功");
        console.log("助力获得" + $.helpResult.helpResult.salveHelpAddWater + "g水滴");
        _0x4678a4 += ($.helpResult.helpResult.masterUserInfo.nickName || "匿名用户") + ",";
      } else {
        if ($.helpResult.helpResult.code === "8") console.log("【助力结果】: 助力失败，今天助力次数已耗尽");else {
          if ($.helpResult.helpResult.code === "9") console.log("【助力结果】: 已经助力过TA了");else $.helpResult.helpResult.code === "10" ? (console.log("【助力结果】: 对方已满助力"), _0x3fc255.push(_0x26df97)) : console.log("助力其他情况：" + JSON.stringify($.helpResult.helpResult));
        }
      }

      console.log("【助力次数还剩】" + $.helpResult.helpResult.remainTimes + "次\n");
      _0x1aa4a6 = $.helpResult.helpResult.remainTimes;

      if ($.helpResult.helpResult.remainTimes === 0) {
        console.log("您当前助力次数已耗尽，跳出助力");
        break;
      }
    } else console.log("助力失败::" + JSON.stringify($.helpResult));
  }

  if ($.isLoon() || $.isQuanX() || $.isSurge()) {
    let _0x32b83c = _0x32f5bc() + $.farmInfo.farmUserPro.shareCode;

    if (!$.getdata(_0x32b83c)) {
      $.setdata("", _0x32f5bc(Date.now() - 24 * 60 * 60 * 1000) + $.farmInfo.farmUserPro.shareCode);
      $.setdata("", _0x32b83c);
    }

    if (_0x4678a4) {
      $.getdata(_0x32b83c) ? $.setdata($.getdata(_0x32b83c) + "," + _0x4678a4, _0x32b83c) : $.setdata(_0x4678a4, _0x32b83c);
    }

    _0x4678a4 = $.getdata(_0x32b83c);
  }

  _0x2289f4 > 0 && console.log("【助力好友👬】获得" + _0x2289f4 + "g💧\n");
  _0x9c19dd += "【今日剩余助力👬】" + _0x1aa4a6 + "次\n";
  console.log("助力好友结束，即将开始领取额外水滴奖励\n");
}

async function _0x4d8c06() {
  await _0x37a67b();

  if ($.friendList) {
    console.log("\n今日已邀请好友" + $.friendList.inviteFriendCount + "个 / 每日邀请上限" + $.friendList.inviteFriendMax + "个");
    await _0xe1635e();

    if ($.friendList.inviteFriendCount > 0) {
      $.friendList.inviteFriendCount > $.friendList.inviteFriendGotAwardCount && (console.log("开始领取邀请好友的奖励"), await _0x10a57f(), console.log("领取邀请好友的奖励结果：：" + JSON.stringify($.awardInviteFriendRes)));
    } else console.log("今日未邀请过好友");
  } else console.log("查询好友列表失败\n");
}

async function _0xe1635e() {
  for (let _0x1634e0 of _0x4463af) {
    if (_0x1634e0 === $.farmInfo.farmUserPro.shareCode) {
      console.log("自己不能邀请自己成为好友噢\n");
      continue;
    }

    if (_0x4463af.findIndex(_0x5ad038 => _0x5ad038 === _0x1634e0) >= 5) break;
    await _0x369ced(_0x1634e0);
    if ($.inviteFriendRes && $.inviteFriendRes.helpResult && $.inviteFriendRes.helpResult.code === "0") console.log("接收邀请成为好友结果成功,您已成为" + $.inviteFriendRes.helpResult.masterUserInfo.nickName + "的好友");else $.inviteFriendRes && $.inviteFriendRes.helpResult && $.inviteFriendRes.helpResult.code === "17" && console.log("接收邀请成为好友结果失败,对方已是您的好友");
  }
}

async function _0x2f5d8f() {
  $.lotteryMasterHelpRes = await _0x1e2225({
    "imageUrl": "",
    "nickName": "",
    "shareCode": arguments[0] + "-3",
    "babelChannel": "3",
    "version": 24,
    "channel": 1
  });
}

async function _0x369ced() {
  $.inviteFriendRes = await _0x1e2225({
    "imageUrl": "",
    "nickName": "",
    "shareCode": arguments[0] + "-inviteFriend",
    "version": 24,
    "channel": 2
  });
}

async function _0x2cf0ca() {
  for (let _0x19ccb8 of Array(3)) {
    $.helpResult = await _0x1e2225({
      "sid": "",
      "mpin": "",
      "shareCode": arguments[0],
      "babelChannel": "121",
      "version": 24,
      "channel": 1,
      "lat": "0",
      "lng": "0"
    });
    if ($.helpResult.code == "0") break;
    await $.wait(2000);
  }
}

async function _0x1e2225(_0xf8605d, _0x538421, _0x11465f = 1000) {
  $.reqnum % 5 == 0 && (console.log("\n等待" + _0x55c1e4 / 1000 + "秒......\n"), _0x11465f = _0x55c1e4);
  $.reqnum++;
  if (_0x562c29 > "1") return;
  if (!_0xf8605d) _0xf8605d = {
    "babelChannel": "121",
    "sid": "",
    "un_area": "",
    "version": 24,
    "channel": 1,
    "lat": "",
    "lng": ""
  };

  let _0x2b8a95 = {
    "appId": "8a2af",
    "fn": "initForFarm",
    "body": _0xf8605d,
    "apid": "signed_wh5",
    "ver": $.UA.split(";")[2],
    "cl": "ios",
    "user": $.UserName,
    "code": 1,
    "ua": $.UA
  },
      _0x521952 = await _0x5cc317.getbody(_0x2b8a95);

  return new Promise(_0x59192c => {
    const _0x3a1a8d = {
      "url": "https://api.m.jd.com/client.action?functionId=initForFarm&" + _0x521952,
      "headers": {
        "cookie": _0x4989d7,
        "origin": "https://carry.m.jd.com",
        "referer": "https://carry.m.jd.com/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    setTimeout(() => {
      $.get(_0x3a1a8d, async (_0x41bbb5, _0x120844, _0x26cccb) => {
        try {
          if (_0x41bbb5) {
            console.log("initForFarm: 请求失败 ‼️‼️");
            console.log(JSON.stringify(_0x41bbb5));
          } else {
            if (_0x3cd317(_0x26cccb)) {
              _0x26cccb = JSON.parse(_0x26cccb);

              if (_0x26cccb.code != "0") {}

              _0x538421 && ($.farmInfo = _0x26cccb);
            }
          }
        } catch (_0x286f52) {
          $.logErr(_0x286f52, _0x120844);
        } finally {
          _0x59192c(_0x26cccb);
        }
      });
    }, _0x11465f);
  });
}

async function _0x37a67b() {
  $.friendList = await _0x3d6357("friendListInitForFarm", {
    "version": 4,
    "channel": 1
  });
}

async function _0x10a57f() {
  $.awardInviteFriendRes = await _0x3d6357("awardInviteFriendForFarm");
}

async function _0x6c843c() {
  if ($.isNode() && process.env.FRUIT_NOTIFY_CONTROL) $.ctrTemp = "" + process.env.FRUIT_NOTIFY_CONTROL === "false";else $.getdata("jdFruitNotify") ? $.ctrTemp = $.getdata("jdFruitNotify") === "false" : $.ctrTemp = "" + _0x559416 === "false";
  $.ctrTemp ? ($.msg($.name, _0x3445aa, _0x9c19dd, _0x9f37d), $.isNode() && (_0x5ba931 += _0x3445aa + "\n" + _0x9c19dd + ($.index !== _0x4c10d9.length ? "\n\n" : ""))) : $.log("\n" + _0x9c19dd + "\n");
}

function _0x32f5bc(_0x32d5cd) {
  let _0xb04afa;

  if (_0x32d5cd) {
    _0xb04afa = new Date(_0x32d5cd);
  } else _0xb04afa = new Date();

  return _0xb04afa.getFullYear() + "-" + (_0xb04afa.getMonth() + 1 >= 10 ? _0xb04afa.getMonth() + 1 : "0" + (_0xb04afa.getMonth() + 1)) + "-" + (_0xb04afa.getDate() >= 10 ? _0xb04afa.getDate() : "0" + _0xb04afa.getDate());
}

function _0x48948c() {
  return new Promise(async _0x30fa2e => {
    _0x4463af = _0x4463af.filter(_0x4e6d7b => _0x3fc255.indexOf(_0x4e6d7b) == -1 && !!_0x4e6d7b);
    console.log("您提供了" + _0x4463af.length + "个农场助力码\n");
    console.log("将要助力的好友" + JSON.stringify(_0x4463af));

    _0x30fa2e();
  });
}

function _0x590b68() {
  return new Promise(_0xf5cd5e => {
    console.log("开始获取配置文件...\n");
    _0x3c35bf = $.isNode() ? require("./sendNotify") : "";

    const _0x382039 = $.isNode() ? require("./jdCookie.js") : "";

    _0x4463af = [];
    $.isNode() && process.env.FRUITCODES && (shareCodes = process.env.FRUITCODES.split("&"));
	shareCodes=[
	"0787fab43daf4c469175500e873a7c1a",	
	"dcad4f20fee642faa6b3a311fef82fad",
		"137166710cff4398a67bb092fa279768",
		"b57e0b9027ee481f8a2f5fcdddaddd0c",
		"4603f5156f1d418c80a24b1bc13acc15",
		"69082ab90b4c42009407378e8bc156dd",
	]
    if ($.isNode()) {
      Object.keys(_0x382039).forEach(_0x1b137c => {
        if (_0x382039[_0x1b137c]) {
          _0x4c10d9.push(_0x382039[_0x1b137c]);
        }
      });
      if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
    } else _0x4c10d9 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ..._0x48e8f5($.getdata("CookiesJD") || "[]").map(_0x3cde64 => _0x3cde64.cookie)].filter(_0xf74cd1 => !!_0xf74cd1);

    if ($.isNode()) Object.keys(shareCodes).forEach(_0x8e7a4 => {
      shareCodes[_0x8e7a4] && _0x4463af.push(shareCodes[_0x8e7a4]);
    });else {
      if ($.getdata("jd_fruit_inviter")) $.shareCodesArr = $.getdata("jd_fruit_inviter").split("\n").filter(_0xadeced => !!_0xadeced);
      console.log("\nBoxJs设置的" + $.name + "好友邀请码:" + ($.getdata("jd_fruit_inviter") ? $.getdata("jd_fruit_inviter") : "暂无") + "\n");
    }

    let _0x213361 = _0x525acf.existsSync("./fruit_helpcode");

    shareCodes.length == 0 && _0x213361 ? ($.log("使用本地缓存的助力码\n"), _0x4463af = _0x525acf.readFileSync("./fruit_helpcode", "utf-8"), _0x4463af = JSON.parse(_0x4463af)) : $.log("使用指定的助力码\n");

    _0xf5cd5e();
  });
}

function _0x228193() {
  return new Promise(_0x6d7d0f => {
    const _0x2eb25a = {
      "url": "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      "headers": {
        "Cookie": _0x4989d7,
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    $.get(_0x2eb25a, (_0xef2a2f, _0x198acc, _0x1b8343) => {
      try {
        if (_0x1b8343) {
          _0x1b8343 = JSON.parse(_0x1b8343);

          if (_0x1b8343.islogin === "1") {} else _0x1b8343.islogin === "0" && ($.isLogin = false);
        }
      } catch (_0x244185) {
        console.log(_0x244185);
      } finally {
        _0x6d7d0f();
      }
    });
  });
}

function _0x3d6357(_0x2654a4, _0xead7df = {}, _0x4e249b = 1000) {
  $.reqnum % 5 == 0 && (console.log("\n等待" + _0x55c1e4 / 1000 + "秒......\n"), _0x4e249b = _0x55c1e4);
  return $.reqnum++, new Promise(_0x56c5ee => {
    setTimeout(() => {
      $.get(_0x298955(_0x2654a4, _0xead7df), (_0x5d9e15, _0x26450e, _0x1df161) => {
        try {
          _0x5d9e15 ? (console.log("\n东东农场: API查询请求失败 ‼️‼️"), console.log(JSON.stringify(_0x5d9e15)), console.log("function_id:" + _0x2654a4), $.logErr(_0x5d9e15)) : _0x3cd317(_0x1df161) && (_0x1df161 = JSON.parse(_0x1df161));
        } catch (_0xebac18) {
          $.logErr(_0xebac18, _0x26450e);
        } finally {
          _0x56c5ee(_0x1df161);
        }
      });
    }, _0x4e249b);
  });
}

function _0x3cd317(_0x21fd2c) {
  try {
    if (typeof JSON.parse(_0x21fd2c) == "object") {
      return true;
    }
  } catch (_0x220ebd) {
    return console.log(_0x220ebd), console.log("京东服务器访问数据为空，请检查自身设备网络情况"), false;
  }
}

function _0x298955(_0x4d6952, _0x18ee82 = {}) {
  return {
    "url": _0x599ff0 + "?functionId=" + _0x4d6952 + "&body=" + encodeURIComponent(JSON.stringify(_0x18ee82)) + "&appid=wh5",
    "headers": {
      "Host": "api.m.jd.com",
      "Accept": "*/*",
      "Origin": "https://carry.m.jd.com",
      "Accept-Encoding": "gzip, deflate, br",
      "User-Agent": $.UA,
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      "Referer": "https://carry.m.jd.com/",
      "Cookie": _0x4989d7
    },
    "timeout": 10000
  };
}

function _0x48e8f5(_0x160c84) {
  if (typeof _0x160c84 == "string") try {
    return JSON.parse(_0x160c84);
  } catch (_0x43520c) {
    return console.log(_0x43520c), $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie"), [];
  }
}
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }