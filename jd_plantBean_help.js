/*
种豆得豆 脚本更新地址：jd_plantBean_help.js
更新时间：2021-08-20
活动入口：京东APP我的-更多工具-种豆得豆
已支持IOS京东多账号,云端多京东账号
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
注：会自动关注任务中的店铺跟商品，介意者勿使用。
互助码shareCode请先手动运行脚本查看打印可看到
每个京东账号每天只能帮助3个人。多出的助力码将会助力失败。

=====================================Quantumult X=================================
[task_local]
40 4,17 * * * https://raw.githubusercontent.com/KingRan/JDJB/main/jd_plantBean_help.js, tag=种豆得豆, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jdzd.png, enabled=true

=====================================Loon================================
[Script]
cron "40 4,17 * * *" script-path=https://raw.githubusercontent.com/KingRan/JDJB/main/jd_plantBean_help.js,tag=京东种豆得豆

======================================Surge==========================
京东种豆得豆 = type=cron,cronexp="40 4,17 * * *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/KingRan/JDJB/main/jd_plantBean_help.js

====================================小火箭=============================
京东种豆得豆 = type=cron,script-path=https://raw.githubusercontent.com/KingRan/JDJB/main/jd_plantBean_help.js, cronexpr="40 4,17 * * *", timeout=3600, enable=true

*/
const $ = new Env('种豆得豆内部互助');

let jdNotify = true,
    cookiesArr = [],
    cookie = "",
    jdPlantBeanShareArr = [],
    notify,
    option,
    message,
    subTitle;

const cryptoJS = require("crypto-js"),
      base64_mod_charset = "KLMNOPQRSTABCDEFGHIJUVWXYZabcdopqrstuvwxefghijklmnyz0123456789+/",
      JD_API_HOST = "https://api.m.jd.com/client.action";

let allMessage = "",
    currentRoundId = null,
    lastRoundId = null,
    roundList = [],
    awardState = "",
    num;
$.newShareCode = ['qj27hlitp6mgcyqbob6wwx7tj43h7wlwy7o5jii',
  'afjmnwak3un3yht2nki7sshoe4',
  'nkvdrkoit5o65u6cqxfqokj5jowdql73wx7b6ua',
  'bknudbr7e4sqxmsp532nxr25bbxmrwgs6mgds2q',
  'ds3ya4fnmkg56gqcbgnblg7poe3h7wlwy7o5jii',
  'e7lhibzb3zek3d6p3d5ogub42tx2rqi723ifufy',
  'balkka7c6kpsfw26dacq6xlifvh3v6im74mc4oq',
  'olmijoxgmjutylhiecx3eqtoenmllyl7yg6to4q',
  '4npkonnsy7xi2b5ihl7rhluvzuvispehmcausna',
  'olmijoxgmjutyp63wgrnv57oeihleb2n7v7bwza',
  'ow4ucxfufqlsrrhli6ja6z4nvu',
  '4npkonnsy7xi3oxqxierdr6e72fjkyh6r2j3m5y',
  'dul2mvofmv6izi2nkykzfbvjim5ac3f4ijdgqji',
  'piscwbxss6ebgtsbwws3h447ny',
  'olmijoxgmjutz6qcgpctgxwqfc5ba5fly5jlhba',
  'zzkvskl23pqknovmfamzavosl4n6p3f56mkfloa',
  'rtsljotwy2w34g4bbzdjby3jvfxw57c4fghlsgi',
  '2x5iqlezcpwnjzevs74hjgidya3h7wlwy7o5jii',
  'mlrdw3aw26j3xszjqhzasmdcokudvrcoxnoqw3a'];
let llerror = false,
    lnrun = 0,
    lnruns = 0;
!(async () => {
  await requireConfig();

  if (!cookiesArr[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }

  for (let Ii1Ill = 0; Ii1Ill < cookiesArr.length; Ii1Ill++) {
    if (cookiesArr[Ii1Ill]) {
      cookie = cookiesArr[Ii1Ill];
      $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = Ii1Ill + 1;
      $.isLogin = true;
      $.nickName = "";
      $.hotFlag = false;
      console.log("\n开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n");

      if (!$.isLogin) {
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        });
        $.isNode() && (await notify.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }

      message = "";
      subTitle = "";
      option = {};
      get_ua();
      await jdPlantBean();
      await $.wait(2 * 1000);
    }
  }

  if ($.isNode() && allMessage) {
    await notify.sendNotify("" + $.name, "" + allMessage);
  }
})().catch(iliiiI => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + iliiiI + "!", "");
}).finally(() => {
  $.done();
});

async function jdPlantBean() {
  try {
    console.log("获取任务及基本信息");
    await plantBeanIndex();
    if (llerror) return;

    for (let I1IIli = 0; I1IIli < $.plantBeanIndexResult.data.roundList.length; I1IIli++) {
      if ($.plantBeanIndexResult.data.roundList[I1IIli].roundState === "2") {
        num = I1IIli;
        break;
      }
    }

    if ($.plantBeanIndexResult && $.plantBeanIndexResult.code === "0" && $.plantBeanIndexResult.data) {
      const lIilI1 = $.plantBeanIndexResult.data.jwordShareInfo.shareUrl;
      $.myPlantUuid = getParam(lIilI1, "plantUuid");
      console.log("\n【京东账号" + $.index + "（" + $.UserName + "）的" + $.name + "好友互助码】" + $.myPlantUuid + "\n");
      jdPlantBeanShareArr.push($.myPlantUuid);
      roundList = $.plantBeanIndexResult.data.roundList;
      currentRoundId = roundList[num].roundId;
      lastRoundId = roundList[num - 1].roundId;
      awardState = roundList[num - 1].awardState;
      $.taskList = $.plantBeanIndexResult.data.taskList;
      subTitle = "【京东昵称】" + $.plantBeanIndexResult.data.plantUserInfo.plantNickName;
      lnrun++;
      await doHelp();
      lnrun == 3 && (console.log("\n【访问接口次数达到3次，休息半分钟.....】\n"), await $.wait(30 * 1000), lnrun = 0);
      await $.wait(3 * 1000);
    } else console.log("种豆得豆-初始失败:  " + JSON.stringify($.plantBeanIndexResult));
  } catch (Ii1Il1) {
    $.logErr(Ii1Il1);
  }
}

async function doHelp() {
  console.log("\n【开始账号内互助】\n");
  $.newShareCode = [...$.newShareCode,...(jdPlantBeanShareArr || [])];

  for (let I1I11l of $.newShareCode) {
    console.log("【" + $.UserName + "】开始助力: " + I1I11l);
    if (!I1I11l) continue;

    if (I1I11l === $.myPlantUuid || $.plantBeanIndexResult.errorCode === "PB101") {
      console.log("\n跳过自己的plantUuid\n");
      continue;
    }

    lnruns++;
    await helpShare(I1I11l);
    lnruns == 5 && (console.log("\n【访问接口次数达到5次，休息半分钟.....】\n"), await $.wait(30 * 1000), lnruns = 0);

    if ($.helpResult && $.helpResult.code === "0" && $.helpResult.data) {
      console.log("助力好友结果: " + JSON.stringify($.helpResult.data.helpShareRes));

      if ($.helpResult.data && $.helpResult.data.helpShareRes) {
        if ($.helpResult.data.helpShareRes.state === "1") {
          console.log("助力好友" + I1I11l + "成功");
          console.log($.helpResult.data.helpShareRes.promptText + "\n");
        } else {
          if ($.helpResult.data.helpShareRes.state === "2") {
            console.log("您今日助力的机会已耗尽，已不能再帮助好友助力了\n");
            break;
          } else {
            if ($.helpResult.data.helpShareRes.state === "3") console.log("该好友今日已满9人助力/20瓶营养液,明天再来为Ta助力吧\n");else {
              if ($.helpResult.data.helpShareRes.state === "4") console.log($.helpResult.data.helpShareRes.promptText + "\n");else {
                console.log("助力其他情况：" + JSON.stringify($.helpResult.data.helpShareRes));
              }
            }
          }
        }
      }
    } else {
      console.log("助力好友失败: " + JSON.stringify($.helpResult));
      break;
    }
  }
}

function showMsg() {
  $.log("\n" + message + "\n");
  jdNotify = $.getdata("jdPlantBeanNotify") ? $.getdata("jdPlantBeanNotify") : jdNotify;
  (!jdNotify || jdNotify === "false") && $.msg($.name, subTitle, message);
}

async function getReward() {
  const Ili1iI = {
    "roundId": lastRoundId
  };
  $.getReward = await request("receivedBean", Ili1iI);
}

async function cultureBean(iII11l, i1IiI1) {
  let iII11i = arguments.callee.name.toString(),
      l1iI1i = {
    "roundId": iII11l,
    "nutrientsType": i1IiI1
  };
  $.cultureBeanRes = await request(iII11i, l1iI1i);
}

async function stealFriendList() {
  const I11l = {
    "pageNum": "1"
  };
  $.stealFriendList = await request("plantFriendList", I11l);
}

async function collectUserNutr(i1IiII) {
  console.log("开始偷好友");
  let l1ll1I = arguments.callee.name.toString();
  const i1lI1 = {
    "paradiseUuid": i1IiII,
    "roundId": currentRoundId
  };
  $.stealFriendRes = await request(l1ll1I, i1lI1);
}

async function receiveNutrients() {
  $.receiveNutrientsRes = await request("receiveNutrients", {
    "roundId": currentRoundId,
    "monitor_refer": "plant_receiveNutrients"
  });
}

async function plantEggDoLottery() {
  $.plantEggDoLotteryResult = await requestGet("plantEggDoLottery");
}

async function egg() {
  $.plantEggLotteryRes = await requestGet("plantEggLotteryIndex");
}

async function productTaskList() {
  let i1lII = arguments.callee.name.toString();
  $.productTaskList = await requestGet(i1lII, {
    "monitor_refer": "plant_productTaskList"
  });
}

async function plantChannelTaskList() {
  let llIiii = arguments.callee.name.toString();
  $.plantChannelTaskList = await requestGet(llIiii);
}

async function shopTaskList() {
  let IlIi11 = arguments.callee.name.toString();
  $.shopTaskListRes = await requestGet(IlIi11, {
    "monitor_refer": "plant_receiveNutrients"
  });
}

async function receiveNutrientsTask(iIIlIi) {
  const iilIli = arguments.callee.name.toString(),
        IlIi1I = {
    "monitor_refer": "receiveNutrientsTask",
    "awardType": "" + iIIlIi
  };
  $.receiveNutrientsTaskRes = await requestGet(iilIli, IlIi1I);
}

async function plantShareSupportList() {
  $.shareSupportList = await requestGet("plantShareSupportList", {
    "roundId": ""
  });

  if ($.shareSupportList && $.shareSupportList.code === "0") {
    const {
      data: l1III
    } = $.shareSupportList,
          l1I1iI = parseInt((Date.now() + 28800000) / 86400000) * 86400000 - 28800000,
          III1l1 = parseInt((Date.now() + 28800000) / 86400000) * 86400000 - 28800000 + 24 * 60 * 60 * 1000;
    let Il111 = [];
    l1III.map(lIiIli => {
      l1I1iI <= lIiIli.createTime && lIiIli.createTime < III1l1 && Il111.push(lIiIli);
    });
    message += "【助力您的好友】共" + Il111.length + "人";
  } else console.log("异常情况：" + JSON.stringify($.shareSupportList));
}

async function helpShare(IiIiii) {
  console.log("\n开始助力好友: " + IiIiii);
  const lIiIll = {
    "plantUuid": IiIiii,
    "wxHeadImgUrl": "",
    "shareUuid": "",
    "followType": "1"
  };
  $.helpResult = await request("plantBeanIndex", lIiIll);
}

async function plantBeanIndex() {
  llerror = false;
  $.plantBeanIndexResult = await request("plantBeanIndex");

  if ($.plantBeanIndexResult.errorCode === "PB101") {
    console.log("\n活动太火爆了，还是去买买买吧！\n");
    llerror = true;
    return;
  }

  if ($.plantBeanIndexResult.errorCode) {
    console.log("获取任务及基本信息出错，10秒后重试\n");
    await $.wait(4000);
    $.plantBeanIndexResult = await request("plantBeanIndex");

    if ($.plantBeanIndexResult.errorCode === "PB101") {
      console.log("\n活动太火爆了，还是去买买买吧！\n");
      llerror = true;
      return;
    }
  }

  if ($.plantBeanIndexResult.errorCode) {
    console.log("获取任务及基本信息出错，30秒后重试\n");
    await $.wait(8000);
    $.plantBeanIndexResult = await request("plantBeanIndex");

    if ($.plantBeanIndexResult.errorCode === "PB101") {
      console.log("\n活动太火爆了，还是去买买买吧！\n");
      llerror = true;
      return;
    }
  }

  if ($.plantBeanIndexResult.errorCode) {
    console.log("获取任务及基本信息失败，活动异常，换个时间再试试吧....");
    console.log("错误代码;" + $.plantBeanIndexResult.errorCode);
    llerror = true;
    return;
  }
}

function requireConfig() {
  return new Promise(lill1 => {
    notify = $.isNode() ? require("./sendNotify") : "";
    const illIIl = $.isNode() ? require("./jdCookie.js") : "",
          iiiIlI = "";

    if ($.isNode()) {
      Object.keys(illIIl).forEach(I1i11 => {
        illIIl[I1i11] && cookiesArr.push(illIIl[I1i11]);
      });
      if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
    } else cookiesArr = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonParse($.getdata("CookiesJD") || "[]").map(Ill1ii => Ill1ii.cookie)].filter(IllII => !!IllII);

    console.log("共" + cookiesArr.length + "个京东账号\n");
    $.shareCodesArr = [];
    if ($.isNode()) Object.keys(iiiIlI).forEach(Ill1il => {
      if (iiiIlI[Ill1il]) {
        $.shareCodesArr.push(iiiIlI[Ill1il]);
      }
    });else {
      if ($.getdata("jd_plantBean_help_inviter")) $.shareCodesArr = $.getdata("jd_plantBean_help_inviter").split("\n").filter(IllI1 => !!IllI1);
    }
    lill1();
  });
}

function krrequestGet(iiiIil, lilll = {}) {
  return new Promise(async i1i1i1 => {
    const l1I1i = {
      "url": JD_API_HOST + "?functionId=" + iiiIil + "&body=" + encodeURIComponent(JSON.stringify(lilll)) + "&appid=signed_wh5&client=apple&area=19_1601_50258_51885&build=167490&clientVersion=9.3.2",
      "headers": {
        "Accept": "*/*",
        "Origin": "https://h5.m.jd.com",
        "Accept-Encoding": "gzip,deflate,br",
        "User-Agent": $.UA,
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Referer": "https://h5.m.jd.com",
        "x-requested-with": "com.jingdong.app.mall",
        "Cookie": cookie
      },
      "timeout": 10000
    };
    $.get(l1I1i, (l1I1l, i11II, IlIi1) => {
      try {
        if (l1I1l) {
          console.log("\n种豆得豆: API查询请求失败 ‼️‼️");
          $.logErr(l1I1l);
        } else IlIi1 = JSON.parse(IlIi1);
      } catch (i1i1ii) {
        $.logErr(i1i1ii, i11II);
      } finally {
        i1i1i1(IlIi1);
      }
    });
  });
}

function requestGet(IIllII, iil1I1 = {}) {
  return new Promise(async Ililli => {
    let i11l1l = "";
    if (!appidMap[IIllII]) i11l1l = JD_API_HOST + "?functionId=" + IIllII + "&body=" + encodeURIComponent(JSON.stringify(iil1I1)) + "&appid=ld&client=apple&area=19_1601_50258_51885&build=167490&clientVersion=9.3.2";else {
      !iil1I1.version && (iil1I1.version = "9.2.4.3");
      iil1I1.monitor_source = "plant_m_plant_index";
      appidMap[IIllII] == "shopNutrientsTask" && (headers.referer = "https://plantearth.m.jd.com/", headers["x-requested-with"] = "https://plantearth.m.jd.com/");
      await $.wait(5000);
      const i11l1i = {
        "appid": "signed_wh5",
        "client": "android",
        "clientVersion": "10.1.0",
        "functionId": IIllII,
        "body": iil1I1
      };
      let iI11l1 = await getH5st(appidMap[IIllII], i11l1i);
      i11l1l = JD_API_HOST + "?" + iI11l1;
    }
    const IIllIl = {
      "url": i11l1l,
      "headers": {
        "Accept": "*/*",
        "Accept-Encoding": "gzip,deflate,br",
        "User-Agent": $.UA,
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Referer": "https://plantearth.m.jd.com/plantBean/index?source=lingjingdouqiandaorili&sid=4638f2f389065566747fbdb06702d79w&un_area=4_133_58530_0",
        "Cookie": cookie
      },
      "timeout": 20000
    };
    $.get(IIllIl, (IlIii, iI11lI, II1i11) => {
      try {
        IlIii ? (console.log("\n种豆得豆: API查询请求失败 ‼️‼️"), console.log(IlIii), $.logErr(IlIii)) : II1i11 = JSON.parse(II1i11);
      } catch (I1liI1) {
        $.logErr(I1liI1, iI11lI);
      } finally {
        Ililli(II1i11);
      }
    });
  });
}

function TotalBean() {
  return new Promise(async l1Ilii => {
    const I111i1 = {
      "url": "https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2",
      "headers": {
        "Accept": "application/json,text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "Cookie": cookie,
        "Referer": "https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2",
        "User-Agent": $.isNode() ? process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : require("./USER_AGENTS").USER_AGENT : $.getdata("JDUA") ? $.getdata("JDUA") : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"
      },
      "timeout": 20000
    };
    $.post(I111i1, (IlIli, liIIIl, iliil1) => {
      try {
        if (IlIli) {
          console.log("" + JSON.stringify(IlIli));
          console.log($.name + " API请求失败，请检查网路重试");
        } else {
          if (iliil1) {
            iliil1 = JSON.parse(iliil1);

            if (iliil1.retcode === 13) {
              $.isLogin = false;
              return;
            }

            iliil1.retcode === 0 ? $.nickName = iliil1.base && iliil1.base.nickname || $.UserName : $.nickName = $.UserName;
          } else {
            console.log("京东服务器返回空数据");
          }
        }
      } catch (l1IliI) {
        $.logErr(l1IliI, liIIIl);
      } finally {
        l1Ilii();
      }
    });
  });
}

function request(iIilI, liii = {}) {
  return new Promise(async lili => {
    let IIl11I = "";

    if (!appidMap[iIilI]) {
      IIl11I = JD_API_HOST + "?functionId=" + iIilI + "&body=" + encodeURIComponent(JSON.stringify(liii)) + "&appid=ld&client=apple&area=19_1601_50258_51885&build=167490&clientVersion=9.3.2";
    } else {
      liii.version = "9.2.4.3";
      liii.monitor_source = "plant_m_plant_index";

      if (!liii.monitor_refer) {
        liii.monitor_refer = "";
      }

      const illII1 = {
        "appid": "signed_wh5",
        "client": "android",
        "clientVersion": "10.1.0",
        "functionId": iIilI,
        "body": liii
      };
      let Il1iii = await getH5st(appidMap[iIilI], illII1);
      IIl11I = JD_API_HOST + "?" + Il1iii;
    }

    await $.wait(5000);
    let i11IIi = {
      "url": IIl11I,
      "headers": {
        "Accept": "*/*",
        "Accept-Encoding": "gzip,deflate,br",
        "User-Agent": $.UA,
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Referer": "https://plantearth.m.jd.com/plantBean/index?source=lingjingdouqiandaorili&sid=4638f2f389065566747fbdb06702d79w&un_area=4_133_58530_0",
        "Cookie": cookie
      },
      "timeout": 10000
    };
    $.get(i11IIi, async (iIiil, IIiIIi, lilI) => {
      try {
        if (iIiil) {
          console.log("\n种豆得豆: API查询请求失败 ‼️‼️");
          console.log("function_id:" + iIilI);
          $.logErr(iIiil);
        } else lilI.indexOf("data") > -1 ? lilI = JSON.parse(lilI) : (lilI = JSON.parse(lilI), console.log(lilI.errorMessage));
      } catch (ii1iIi) {
        $.logErr(ii1iIi, IIiIIi);
      } finally {
        lili(lilI);
      }
    });
  });
}

const appidMap = {
  "plantBeanIndex": "d246a",
  "receiveNutrients": "b56b8",
  "cultureBean": "6a216",
  "receiveNutrientsTask": "d22ac",
  "plantChannelNutrientsTask": "2424e",
  "shopNutrientsTask": "19c88",
  "productTaskList": "7351b",
  "productNutrientsTask": "a4e2d",
  "collectUserNutr": "14357"
};

async function taskUrl(i11III, ii1iIl) {
  ii1iIl.version = "9.2.4.3";
  ii1iIl.monitor_source = "plant_app_plant_index";
  !ii1iIl.monitor_refer && (ii1iIl.monitor_refer = "");

  if (!appidMap[i11III]) {} else {
    const l1iiiI = {
      "appid": "signed_wh5",
      "client": "android",
      "clientVersion": "10.1.0",
      "functionId": i11III,
      "body": ii1iIl
    };
  }

  return {
    "url": JD_API_HOST + "?" + h5st,
    "headers": {
      "Accept": "*/*",
      "Accept-Encoding": "gzip,deflate,br",
      "User-Agent": $.UA,
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      "Referer": "https://plantearth.m.jd.com/plantBean/index?source=lingjingdouqiandaorili&sid=4638f2f389065566747fbdb06702d79w&un_area=4_133_58530_0",
      "Cookie": cookie
    },
    "timeout": 10000
  };
}

function getH5st(iI11li, lIi11) {
  let Ilill1 = {
    "appId": iI11li,
    ...lIi11,
    "ua": $.UA,
    "pin": $.UserName
  },
      I111lI = {
    "url": "http://kr.kingran.cf/h5st",
    "body": JSON.stringify(Ilill1),
    "headers": {
      "Content-Type": "application/json"
    },
    "timeout": 30000
  };
  return new Promise(async lIi1I => {
    $.post(I111lI, (Ii1ll, iIlll, liII11) => {
      let I1II = "";

      try {
        if (Ii1ll) {
          console.log("" + JSON.stringify(Ii1ll));
          console.log($.name + " getH5st API请求失败，请检查网路重试");
        } else {
          liII11 = JSON.parse(liII11);

          if (typeof liII11 === "object" && liII11 && liII11.body) {
            if (liII11.body) I1II = liII11.body || "";
          } else liII11.code == 400 ? console.log("\n" + liII11.msg) : console.log("\n可能连接不上接口，请检查网络");
        }
      } catch (I1IIIl) {
        $.logErr(I1IIIl, iIlll);
      } finally {
        lIi1I(I1II);
      }
    });
  });
}

function randomString(il1IlI, I1IIIi = "qwertyuiopasdfghjklzxcvbnm") {
  let li11I1 = "";

  for (let il1Il1 = 0; il1Il1 < il1IlI; il1Il1++) {
    li11I1 += I1IIIi[Math.floor(Math.random() * I1IIIi.length)];
  }

  return li11I1;
}

function json2str(li11II, Ii1li = {}) {
  let iIllI = [],
      iIiIl1 = Ii1li.connector || "&",
      i1I11I = Object.keys(li11II);
  if (Ii1li.sort) i1I11I = i1I11I.sort();

  for (let liII1i of i1I11I) {
    let iIiIil = li11II[liII1i];
    if (iIiIil && typeof iIiIil === "object") iIiIil = JSON.stringify(iIiIil);
    if (iIiIil && Ii1li.encode) iIiIil = encodeURIComponent(iIiIil);
    iIllI.push(liII1i + "=" + iIiIil);
  }

  return iIllI.join(iIiIl1);
}

function randomList(iIiIii) {
  return iIiIii[Math.floor(Math.random() * iIiIii.length)];
}

function randomUuid(i1I11i = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", lI1l = "0123456789abcdef") {
  let i1I11l = "";

  for (let l11li1 of i1I11i) {
    if (l11li1 == "x") i1I11l += lI1l.charAt(Math.floor(Math.random() * lI1l.length));else l11li1 == "X" ? i1I11l += lI1l.charAt(Math.floor(Math.random() * lI1l.length)).toUpperCase() : i1I11l += l11li1;
  }

  return i1I11l;
}

function _utf8_encode(liII1I) {
  liII1I = liII1I.replace(/rn/g, "n");
  var iIlil = "";

  for (var lIiII1 = 0; lIiII1 < liII1I.length; lIiII1++) {
    var iIlii = liII1I.charCodeAt(lIiII1);
    if (iIlii < 128) iIlil += String.fromCharCode(iIlii);else {
      if (iIlii > 127 && iIlii < 2048) {
        iIlil += String.fromCharCode(iIlii >> 6 | 192);
        iIlil += String.fromCharCode(iIlii & 63 | 128);
      } else {
        iIlil += String.fromCharCode(iIlii >> 12 | 224);
        iIlil += String.fromCharCode(iIlii >> 6 & 63 | 128);
        iIlil += String.fromCharCode(iIlii & 63 | 128);
      }
    }
  }

  return iIlil;
}

function base64_mod_encode(l11lil, iIllli) {
  iIllli = iIllli || base64_mod_charset;
  var IIlIil = "";
  var l11llI, i1IlIi, i1IlIl, ll1IIi, IlIiI1, ll1IIl, l11ll1;
  var iIlllI = 0;
  l11lil = _utf8_encode(l11lil);

  while (iIlllI < l11lil.length) {
    l11llI = l11lil.charCodeAt(iIlllI++);
    i1IlIi = l11lil.charCodeAt(iIlllI++);
    i1IlIl = l11lil.charCodeAt(iIlllI++);
    ll1IIi = l11llI >> 2;
    IlIiI1 = (l11llI & 3) << 4 | i1IlIi >> 4;
    ll1IIl = (i1IlIi & 15) << 2 | i1IlIl >> 6;
    l11ll1 = i1IlIl & 63;
    if (isNaN(i1IlIi)) ll1IIl = l11ll1 = 64;else isNaN(i1IlIl) && (l11ll1 = 64);
    IIlIil = IIlIil + iIllli.charAt(ll1IIi) + iIllli.charAt(IlIiI1) + iIllli.charAt(ll1IIl) + iIllli.charAt(l11ll1);
  }

  while (IIlIil.length % 4 > 1) IIlIil += "=";

  return IIlIil;
}

function get_ep(l1II11 = {}) {
  let ll1l1i = {
    "ciphertype": 5,
    "cipher": {
      "ud": base64_mod_encode(cryptoJS.SHA1($.UserName).toString()),
      "sv": base64_mod_encode($.os_ver),
      "iad": ""
    },
    "ts": Date.now(),
    "hdid": "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=",
    "version": "1.0.3",
    "appname": "com.360buy.jdmobile",
    "ridx": -1
  };
  $.ep = JSON.stringify(ll1l1i);
}

function get_ua(iIl1Il, il111i = {}) {
  const l111Ii = {
    "jd": {
      "app": "jdapp",
      "appBuild": "168392",
      "client": "android",
      "clientVersion": "10.1.0"
    },
    "lite": {
      "app": "jdltapp",
      "appBuild": "1247",
      "client": "ios",
      "clientVersion": "6.0.0"
    }
  },
        lI1i11 = ["15.1.1", "14.5.1", "14.4", "14.3", "14.2", "14.1", "14.0.1", "13.2"];
  $.os_ver = randomList(lI1i11);
  let lili1I = iIl1Il || "jd",
      i1iiII = il111i?.["ep"] ? il111i?.["ep"] : true;

  if (!l111Ii[lili1I]) {
    console.log("获取[" + lili1I + "]UA失败");
    return;
  }

  $.client = il111i?.["client"] ? il111i?.["client"] : l111Ii[lili1I].client;
  $.clientVersion = il111i?.["clientVersion"] ? il111i?.["clientVersion"] : l111Ii[lili1I].clientVersion;
  $.sua = "iPhone; CPU iPhone OS " + $.os_ver.replace(".", "_") + " like Mac OS X";
  let l111Il = "android";
  $.client == "apple" && (l111Il = "iPhone");
  get_ep();
  let I1III = [l111Ii[lili1I].app, l111Il, $.clientVersion, "", "rn/" + randomUuid(), "M/5.0", "hasUPPay/0", "pushNoticeIsOpen/0", "lang/zh_CN", "hasOCPay/0", "appBuild/" + l111Ii[lili1I].appBuild, "supportBestPay/0", "jdSupportDarkMode/0", "ef/1", i1iiII ? "ep/" + encodeURIComponent($.ep) : "", "Mozilla/5.0 (" + $.sua + ") AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "supportJDSHWK/1", ""];
  $.UA = I1III.join(";");
}

function getParam(l1II1l, i1IIlI) {
  const il1lII = new RegExp("(^|&)" + i1IIlI + "=([^&]*)(&|$)", "i"),
        iIi111 = l1II1l.match(il1lII);
  if (iIi111 != null) return unescape(iIi111[2]);
  return null;
}

function jsonParse(i111li) {
  if (typeof i111li == "string") try {
    return JSON.parse(i111li);
  } catch (IliI) {
    return console.log(IliI), $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie"), [];
  }
}
// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
