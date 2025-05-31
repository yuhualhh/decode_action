//Sat May 31 2025 17:29:21 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const crypto = require("crypto");
const $ = new Env("福田e家");
const FTEJ = ($.isNode() ? process.env.FTEJ : $.getdata("FTEJ")) || "";
const FTEJ_PK = ($.isNode() ? process.env.FTEJ_PK : $.getdata("FTEJ_PK")) || "1";
const FTEJ_Lottery = ($.isNode() ? process.env.FTEJ_Lottery : $.getdata("FTEJ_Lottery")) || "0";
const FTEJ_SpringSign = ($.isNode() ? process.env.FTEJ_SpringSign : $.getdata("FTEJ_SpringSign")) || "0";
const FTEJ_DEL_POSTS = ($.isNode() ? process.env.FTEJ_DEL_POSTS : $.getdata("FTEJ_DEL_POSTS")) || "1";
const FTEJ_TASK_SIGNIN = ($.isNode() ? process.env.FTEJ_TASK_SIGNIN : $.getdata("FTEJ_TASK_SIGNIN")) || "1";
const FTEJ_TASK_SHARE = ($.isNode() ? process.env.FTEJ_TASK_SHARE : $.getdata("FTEJ_TASK_SHARE")) || "1";
const FTEJ_TASK_FOLLOW = ($.isNode() ? process.env.FTEJ_TASK_FOLLOW : $.getdata("FTEJ_TASK_FOLLOW")) || "1";
const FTEJ_TASK_POST = ($.isNode() ? process.env.FTEJ_TASK_POST : $.getdata("FTEJ_TASK_POST")) || "1";
let PKSafeKey = null;
let EJSafeKey = null;
function a7(_0x565a90) {
  const _0x34211a = Buffer.from("Zm9udG9uZS10cmFuc0BseDEwMCQjMzY1", "base64");
  const _0x1fb63e = Buffer.from("MjAxNjEyMDE=", "base64");
  const _0x2e8456 = crypto.createDecipheriv("des-ede3-cbc", _0x34211a, _0x1fb63e);
  _0x2e8456.setAutoPadding(true);
  const _0x1bbad5 = Buffer.from(_0x565a90, "base64");
  let _0x3601b5 = _0x2e8456.update(_0x1bbad5, undefined, "utf8");
  _0x3601b5 += _0x2e8456.final("utf8");
  return _0x3601b5;
}
function a8(_0x579ae4) {
  const _0x17840e = Buffer.from("Zm9udG9uZS10cmFuc0BseDEwMCQjMzY1", "base64");
  const _0x1641cc = Buffer.from("MjAxNjEyMDE=", "base64");
  const _0x15c5b4 = crypto.createCipheriv("des-ede3-cbc", _0x17840e, _0x1641cc);
  _0x15c5b4.setAutoPadding(true);
  let _0x2f9f2e = _0x15c5b4.update(_0x579ae4, "utf8", "base64");
  _0x2f9f2e += _0x15c5b4.final("base64");
  return _0x2f9f2e;
}
async function getPKSafeKey() {
  const _0x39e041 = {
    deviceType: 1
  };
  const _0x25281a = await pkLoginPost("/ehomes-new/pkHome/version/getVersion", _0x39e041);
  _0x25281a.code === 200 && _0x25281a.data && _0x25281a.data.safeKey ? PKSafeKey = _0x25281a.data.safeKey : PKSafeKey = Date.now() % 1000000;
  return PKSafeKey;
}
async function estVersionRequest(_0x8ef89, _0x369ff9) {
  return new Promise(_0x265613 => {
    const _0x2e83c6 = {
      url: "https://czyl.foton.com.cn" + _0x8ef89,
      headers: {
        encrypt: "yes",
        "Content-Type": "application/x-www-form-urlencoded",
        Connection: "Keep-Alive",
        "User-Agent": "okhttp/3.14.9",
        "Accept-Encoding": "gzip"
      },
      body: _0x369ff9
    };
    $.post(_0x2e83c6, async (_0x51e57b, _0xad7655, _0x40c11e) => {
      if (_0x51e57b) {
        console.log("EST请求错误: " + JSON.stringify(_0x51e57b));
        return _0x265613({
          code: -1,
          success: false,
          msg: "网络错误",
          originalData: null
        });
      } else {
        _0x265613({
          code: _0xad7655.statusCode,
          success: true,
          originalData: _0x40c11e,
          headers: _0xad7655.headers
        });
      }
    });
  });
}
async function getEJSafeKey() {
  const _0x468f76 = {
    limit: {
      auth: "null",
      uid: "",
      userType: "61"
    },
    param: {
      deviceType: "1",
      version: "7.5.1",
      versionCode: "345"
    }
  };
  const _0x4ec0d1 = a8(JSON.stringify(_0x468f76));
  const _0x485629 = await estVersionRequest("/est/getVersion.action", "jsonParame=" + encodeURIComponent(_0x4ec0d1));
  if (_0x485629.success && _0x485629.originalData && _0x485629.code === 200) {
    try {
      const _0x589b03 = a7(_0x485629.originalData);
      const _0x3409da = JSON.parse(_0x589b03);
      if (_0x3409da.code === 0 && _0x3409da.data) {
        const _0x4e3f19 = JSON.parse(_0x3409da.data);
        _0x4e3f19.safeKey ? EJSafeKey = _0x4e3f19.safeKey : EJSafeKey = Date.now() % 1000000;
      } else {
        EJSafeKey = Date.now() % 1000000;
      }
    } catch (_0x257572) {
      EJSafeKey = Date.now() % 1000000;
    }
  } else {
    EJSafeKey = Date.now() % 1000000;
  }
  return EJSafeKey;
}
async function main() {
  if (!FTEJ) {
    console.log("未配置账号信息，请添加环境变量");
    return;
  }
  await getPKSafeKey();
  await getEJSafeKey();
  const _0x46cc40 = FTEJ.split("&");
  const _0x549ce6 = 50;
  let _0x3907cb = [];
  for (let _0x119a33 = 0; _0x119a33 < _0x46cc40.length; _0x119a33 += _0x549ce6) {
    const _0x9695e2 = _0x46cc40.slice(_0x119a33, _0x119a33 + _0x549ce6);
    console.log("\n\n开始处理第 " + (_0x119a33 / _0x549ce6 + 1) + " 批账号");
    const _0x1bff78 = await Promise.all(_0x9695e2.map((_0x4a4cb8, _0x54c4af) => processAccount(_0x4a4cb8, _0x54c4af + 1 + _0x119a33)));
    _0x3907cb.push(..._0x1bff78);
    console.log("————————————");
  }
  const _0x330724 = _0x3907cb.join("");
  _0x330724 && (console.log(_0x330724), await sendMsg(_0x330724));
}
!(async () => {
  await main();
})().catch(_0x1c5b25 => $.logErr(_0x1c5b25)).finally(() => $.done());
const randomDelay = (_0x174b0c, _0x581e6b) => {
  const _0x2a294b = Math.floor(Math.random() * (_0x581e6b - _0x174b0c + 1)) + _0x174b0c;
  return new Promise(_0x945cb => setTimeout(_0x945cb, _0x2a294b * 1000));
};
async function retryTask(_0x1486f8, _0x5091e6 = 3, _0x2b2cbf = 1000) {
  let _0x3a73b8 = _0x2b2cbf;
  for (let _0x5d92ac = 1; _0x5d92ac <= _0x5091e6; _0x5d92ac++) {
    try {
      return await _0x1486f8();
    } catch (_0x4845ef) {
      if (_0x5d92ac === _0x5091e6) {
        throw _0x4845ef;
      }
      console.log("✘第 " + _0x5d92ac + " 次尝试失败: " + _0x4845ef.message + _0x3a73b8 / 1000 + "秒后重试");
      await new Promise(_0xa218e1 => setTimeout(_0xa218e1, _0x3a73b8));
      _0x3a73b8 *= 2;
    }
  }
}
async function lotteryDraw(_0x4877cb, _0x408eea, _0xa7cf8f, _0x1fa9d2, _0xe7a77c) {
  try {
    const _0x349757 = await request("/shareCars/validateToken.action", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Referer: "https://czyl.foton.com.cn/shareCars/activity/luckDraw/index.html?ftejMemberId=" + _0x4877cb + "&encryptedMemberId=" + _0x408eea + "&channel=app",
        Cookie: "FOTONTGT=" + _0x1fa9d2
      },
      body: "ticketName=FOTONTGT&ticketValue=" + _0x1fa9d2.trim()
    });
    if (!_0x349757.headers || !_0x349757.headers["set-cookie"]) {
      throw new Error("[" + _0xe7a77c + "]获取 HWWAFSESID 失败");
    }
    const _0x1d4394 = _0x349757.headers["set-cookie"];
    const _0x1ce00c = extractCookieValue(_0x1d4394.find(_0x57ae75 => _0x57ae75.startsWith("SESSION=")));
    const _0xeba894 = extractCookieValue(_0x1d4394.find(_0x420abf => _0x420abf.startsWith("HWWAFSESID=")));
    const _0xe2fae0 = extractCookieValue(_0x1d4394.find(_0x22c3f4 => _0x22c3f4.startsWith("HWWAFSESTIME=")));
    for (let _0x9a35d7 = 1; _0x9a35d7 <= 5; _0x9a35d7++) {
      await randomDelay(5, 10);
      const _0x2bfc3c = await request("/shareCars/turnTable/turnTableLottery2nd.action", {
        method: "POST",
        headers: {
          Accept: "application/json, text/javascript, */*; q=0.01",
          "X-Requested-With": "XMLHttpRequest",
          "User-Agent": "Mozilla/5.0 (Linux; Android 14; Mobile)",
          Referer: "https://czyl.foton.com.cn/shareCars/activity/luckDraw/index.html?ftejMemberId=" + _0x4877cb + "&encryptedMemberId=" + _0x408eea + "&channel=app",
          Cookie: "SESSION=" + _0x1ce00c + "; FOTONTGT=" + _0x1fa9d2 + "; HWWAFSESID=" + _0xeba894 + "; HWWAFSESTIME=" + _0xe2fae0
        },
        body: {}
      });
      const _0xd70f97 = _0x2bfc3c.data?.["msg"] || "未知错误";
      console.log("[" + _0xe7a77c + "]第" + _0x9a35d7 + "次抽奖: " + _0xd70f97);
      if (_0xd70f97.includes("每天最多参加5次")) {
        console.log("[" + _0xe7a77c + "]已达到每日抽奖上限");
        break;
      }
    }
  } catch (_0x4da8c8) {
    console.error("[" + _0xe7a77c + "]抽奖失败: " + _0x4da8c8.message);
  }
}
async function springDayLottery(_0x162524, _0x31c5fb, _0x1a45b8, _0x5c8cff, _0x21578f) {
  try {
    const _0x227995 = await request("/shareCars/validateToken.action", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Referer: "https://czyl.foton.com.cn/shareCars/activity/interactCenter250401/index.html?ftejMemberId=" + _0x162524 + "&encryptedMemberId=" + _0x31c5fb + "&channel=app",
        Cookie: "FOTONTGT=" + _0x5c8cff
      },
      body: "ticketName=FOTONTGT&ticketValue=" + _0x5c8cff.trim()
    });
    if (!_0x227995.headers || !_0x227995.headers["set-cookie"]) {
      throw new Error("[" + _0x21578f + "]春日抽奖 => 获取 COOKIE 失败");
    }
    const _0x5e5561 = _0x227995.headers["set-cookie"];
    const _0x3598b0 = extractCookieValue(_0x5e5561.find(_0x1e49ba => _0x1e49ba.startsWith("SESSION=")));
    const _0x25a8d6 = extractCookieValue(_0x5e5561.find(_0x3b9980 => _0x3b9980.startsWith("HWWAFSESID=")));
    const _0x4a09f9 = extractCookieValue(_0x5e5561.find(_0x31e5e5 => _0x31e5e5.startsWith("HWWAFSESTIME=")));
    for (let _0x4a131f = 1; _0x4a131f <= 5; _0x4a131f++) {
      await randomDelay(5, 10);
      const _0x33b3a0 = await request("/shareCars/c250401/luckyDraw.action", {
        method: "POST",
        headers: {
          Accept: "application/json, text/javascript, */*; q=0.01",
          "X-Requested-With": "XMLHttpRequest",
          "User-Agent": "Mozilla/5.0 (Linux; Android 14; Mobile)",
          Referer: "https://czyl.foton.com.cn/shareCars/activity/interactCenter250401/index.html?ftejMemberId=" + _0x162524 + "&encryptedMemberId=" + _0x31c5fb + "&channel=app",
          Cookie: "SESSION=" + _0x3598b0 + "; FOTONTGT=" + _0x5c8cff + "; HWWAFSESID=" + _0x25a8d6 + "; HWWAFSESTIME=" + _0x4a09f9
        },
        body: "encryptMemberId=" + _0x31c5fb + "&activityNum=250401"
      });
      const _0x9241ef = _0x33b3a0.data?.["msg"] || "未知错误";
      console.log("[" + _0x21578f + "]春日第" + _0x4a131f + "抽: " + _0x9241ef);
      if (_0x9241ef.includes("没有抽奖次数")) {
        console.log("[" + _0x21578f + "]暂无抽奖次数，跳过");
        break;
      }
    }
  } catch (_0x1703b0) {
    console.error("[" + _0x21578f + "]春日抽奖异常：" + _0x1703b0.message);
  }
}
async function springDaySign(_0xae5de1, _0x139639, _0x16af4e, _0x33de67, _0x5d25d1) {
  try {
    const _0x4ecf8e = await request("/shareCars/validateToken.action", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Referer: "https://czyl.foton.com.cn/shareCars/activity/interactCenter250401/index.html?ftejMemberId=" + _0xae5de1 + "&encryptedMemberId=" + _0x139639 + "&channel=app",
        Cookie: "FOTONTGT=" + _0x33de67
      },
      body: "ticketName=FOTONTGT&ticketValue=" + _0x33de67.trim()
    });
    if (!_0x4ecf8e.headers || !_0x4ecf8e.headers["set-cookie"]) {
      throw new Error("[" + _0x5d25d1 + "]春日签到 => 获取 COOKIE 失败");
    }
    const _0x710075 = _0x4ecf8e.headers["set-cookie"];
    const _0x56c24b = extractCookieValue(_0x710075.find(_0x2e38fc => _0x2e38fc.startsWith("SESSION=")));
    const _0x3ca83a = extractCookieValue(_0x710075.find(_0x43c00a => _0x43c00a.startsWith("HWWAFSESID=")));
    const _0x1539be = extractCookieValue(_0x710075.find(_0x5a2b87 => _0x5a2b87.startsWith("HWWAFSESTIME=")));
    await randomDelay(5, 10);
    const _0x487b2f = await request("/shareCars/c250401/sign.action", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Requested-With": "XMLHttpRequest",
        "User-Agent": "Mozilla/5.0 (Linux; Android 14; Mobile)",
        Cookie: "SESSION=" + _0x56c24b + "; FOTONTGT=" + _0x33de67 + "; HWWAFSESID=" + _0x3ca83a + "; HWWAFSESTIME=" + _0x1539be
      },
      body: "encryptMemberId=" + _0x139639
    });
    _0x487b2f.data?.["code"] === 0 ? console.log("[" + _0x5d25d1 + "]春日签到成功 => " + (_0x487b2f.data?.["msg"] || "")) : console.log("[" + _0x5d25d1 + "]春日签到失败 => " + (_0x487b2f.data?.["msg"] || "未知错误"));
  } catch (_0x4f3921) {
    console.error("[" + _0x5d25d1 + "]春日签到异常：" + _0x4f3921.message);
  }
}
function isPostFromToday(_0x27fe98) {
  if (!_0x27fe98 || typeof _0x27fe98 !== "string") {
    return false;
  }
  const _0xda1097 = _0x27fe98.split(" ")[0];
  const _0x5dea8f = new Date();
  const _0x23cfcd = _0x5dea8f.getFullYear();
  const _0x35adeb = String(_0x5dea8f.getMonth() + 1).padStart(2, "0");
  const _0xa59808 = String(_0x5dea8f.getDate()).padStart(2, "0");
  const _0x4e30e0 = _0x23cfcd + "-" + _0x35adeb + "-" + _0xa59808;
  return _0xda1097 === _0x4e30e0;
}
async function getMyPosts(_0x171f9b, _0x52caa9, _0x638a98, _0xfb6112 = 1, _0x4d1a37 = 10) {
  const _0x357788 = {
    memberId: _0x171f9b.memberID,
    userId: _0x171f9b.uid,
    userType: "61",
    uid: _0x171f9b.uid,
    mobile: _0x52caa9,
    tel: _0x52caa9,
    phone: _0x52caa9,
    brandName: "",
    seriesName: "",
    token: "ebf76685e48d4e14a9de6fccc76483e3",
    safeEnc: Date.now() - (EJSafeKey || 0),
    businessId: 1,
    pageNumber: _0xfb6112,
    pageSize: _0x4d1a37,
    type: 1
  };
  const _0x3c9994 = await commonPost("/ehomes-new/ehomesCommunity/api/mine/myPost", _0x357788);
  return _0x3c9994.code === 200 && _0x3c9994.data && Array.isArray(_0x3c9994.data) ? _0x3c9994.data : null;
}
async function deleteSinglePost(_0xf3960e, _0x335a3d, _0x47461a, _0x1ff5dc) {
  let _0x4faa4b = _0xf3960e.postId;
  let _0x17c21c = "未知时间";
  if (_0xf3960e.createTime && typeof _0xf3960e.createTime === "string") {
    _0x17c21c = _0xf3960e.createTime;
  } else {
    _0xf3960e.createTime && (_0x17c21c = new Date(parseInt(_0xf3960e.createTime)).toLocaleString());
  }
  const _0x418624 = {
    memberId: _0x335a3d.memberID,
    userId: _0x335a3d.uid,
    userType: "61",
    uid: _0x335a3d.uid,
    mobile: _0x47461a,
    tel: _0x47461a,
    brandName: "",
    seriesName: "",
    token: "",
    safeEnc: Date.now() - (EJSafeKey || 0),
    postId: _0xf3960e.postId,
    businessId: 1
  };
  const _0xcf7ef0 = await commonPost("/ehomes-new/ehomesCommunity/api/mine/delete", _0x418624);
  !(_0xcf7ef0.code === 200);
  await randomDelay(2, 5);
}
async function manageOldPosts(_0x543184, _0xead61b, _0x33ee87) {
  let _0x34ddb3 = 1;
  const _0x2ba9cb = 10;
  let _0x3f3455 = true;
  const _0x13c97f = [];
  while (_0x3f3455) {
    const _0x5a299d = await getMyPosts(_0x543184, _0xead61b, _0x33ee87, _0x34ddb3, _0x2ba9cb);
    if (_0x5a299d && _0x5a299d.length > 0) {
      for (const _0x54f1bb of _0x5a299d) {
        if (!_0x54f1bb.createTime || !_0x54f1bb.postId) {
          console.log("[" + _0x33ee87 + "]帖子数据不完整，跳过: " + JSON.stringify(_0x54f1bb));
          continue;
        }
        if (!isPostFromToday(_0x54f1bb.createTime)) {
          _0x13c97f.push(_0x54f1bb);
        }
      }
      _0x5a299d.length < _0x2ba9cb ? _0x3f3455 = false : (_0x34ddb3++, await randomDelay(1, 3));
    } else {
      _0x3f3455 = false;
    }
  }
  if (_0x13c97f.length === 0) {
    console.log("[" + _0x33ee87 + "]删帖结果：未找到非今日帖子");
    return;
  }
  for (const _0x3bdc76 of _0x13c97f) {
    await deleteSinglePost(_0x3bdc76, _0x543184, _0xead61b, _0x33ee87);
  }
  console.log("[" + _0x33ee87 + "]删帖结果：非今日帖子清理完毕");
}
function extractCookieValue(_0x230a05) {
  return _0x230a05 ? _0x230a05.split(";")[0].split("=")[1] : "";
}
async function processPikaLife(_0x2dff9e, _0x20d3f9, _0x11c6b1) {
  const _0x4bb8ec = "pika_cache_v2_" + _0x2dff9e;
  const _0x2ac886 = _0x2dff9e.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
  let _0x364d9d = $.getdata(_0x4bb8ec);
  if (_0x364d9d) {
    try {
      const _0x10731b = JSON.parse(_0x364d9d);
      await randomDelay(1, 3);
      const _0x2826c5 = await pkPost("/ehomes-new/pkHome/api/bonus/signActivity2nd", {
        memberId: _0x10731b.pkMemberComplexCode,
        memberID: _0x10731b.pkMemberID,
        mobile: _0x2dff9e,
        token: _0x10731b.pkToken,
        vin: "",
        safeEnc: Date.now() - (PKSafeKey || 0)
      }, _0x10731b.pkToken);
      if (_0x2826c5.code === 200 && _0x2826c5.data) {
        if (_0x2826c5.data.integral !== null && typeof _0x2826c5.data.integral !== "undefined") {
          return "[" + _0x11c6b1 + "]皮卡生活签到结果：获得" + _0x2826c5.data.integral + "积分";
        } else {
          if (_0x2826c5.data.msg && (_0x2826c5.data.msg.includes("您今日已签到成功") || _0x2826c5.data.msg.includes("已签到") || _0x2826c5.data.msg.includes("今天已经签过到了") || _0x2826c5.data.msg === "亲，您今天已经签过到了！")) {
            return "[" + _0x11c6b1 + "]皮卡生活签到结果：今日已签到 (使用缓存)";
          } else {
            console.log("[" + _0x11c6b1 + "]皮卡生活缓存签到响应未知: " + _0x2826c5.data.msg + ", 清除缓存并重试登录");
            $.setdata("", _0x4bb8ec);
          }
        }
      } else {
        _0x2826c5.code === 500 && _0x2826c5.msg && _0x2826c5.msg.includes("用户令牌已过期") ? (console.log("[" + _0x11c6b1 + "]皮卡生活缓存令牌已过期, 清除缓存并重试登录"), $.setdata("", _0x4bb8ec)) : (console.log("[" + _0x11c6b1 + "]皮卡生活缓存签到失败 (Code: " + _0x2826c5.code + ", Msg: " + _0x2826c5.msg + "), 清除缓存并重试登录"), $.setdata("", _0x4bb8ec));
      }
    } catch (_0x273d43) {
      console.log("[" + _0x11c6b1 + "]皮卡生活处理缓存签到异常: " + _0x273d43 + ", 清除缓存并重试登录");
      $.setdata("", _0x4bb8ec);
    }
  }
  try {
    const _0x5882c5 = await pkLoginPost("/ehomes-new/pkHome/api/user/getLoginMember2nd", {
      memberId: "",
      memberID: "",
      mobile: "",
      token: "7fe186bb15ff4426ae84f300f05d9c8d",
      vin: "",
      safeEnc: Date.now() - (PKSafeKey || 0),
      name: _0x2dff9e,
      password: _0x20d3f9,
      position: "",
      deviceId: "SP1A.210812.016",
      deviceBrand: "realme",
      brandName: "RMX3562",
      deviceType: "0",
      versionCode: "21",
      versionName: "V1.1.10"
    });
    if (_0x5882c5.code !== 200 || !_0x5882c5.data) {
      throw new Error("登录失败，" + (_0x5882c5.msg || "响应数据为空或登录接口返回错误"));
    }
    const {
      memberComplexCode: _0x2e1640,
      token: _0x4f1eb3,
      user: _0x5e3760
    } = _0x5882c5.data;
    const _0xb88206 = _0x5e3760 && _0x5e3760.memberNo;
    if (!_0x2e1640 || !_0xb88206 || !_0x4f1eb3) {
      throw new Error("登录成功，但获取到的关键凭据不完整");
    }
    const _0x60a87b = {
      pkMemberComplexCode: _0x2e1640,
      pkMemberID: _0xb88206,
      pkToken: _0x4f1eb3
    };
    $.setdata(JSON.stringify(_0x60a87b), _0x4bb8ec);
    await randomDelay(1, 3);
    const _0x15fd90 = await pkPost("/ehomes-new/pkHome/api/bonus/signActivity2nd", {
      memberId: _0x2e1640,
      memberID: _0xb88206,
      mobile: _0x2dff9e,
      token: _0x4f1eb3,
      vin: "",
      safeEnc: Date.now() - (PKSafeKey || 0)
    }, _0x4f1eb3);
    if (_0x15fd90.code === 200 && _0x15fd90.data) {
      if (_0x15fd90.data.integral !== null && typeof _0x15fd90.data.integral !== "undefined") {
        return "[" + _0x11c6b1 + "]皮卡生活签到结果：获得" + _0x15fd90.data.integral + "积分";
      } else {
        if (_0x15fd90.data.msg && (_0x15fd90.data.msg.includes("您今日已签到成功") || _0x15fd90.data.msg.includes("已签到") || _0x15fd90.data.msg.includes("今天已经签过到了") || _0x15fd90.data.msg === "亲，您今天已经签过到了！")) {
          return "[" + _0x11c6b1 + "]皮卡生活签到结果：今日已签到 (重新登录)";
        } else {
          throw new Error("重新登录后签到响应正常但未能匹配已知成功消息: \"" + (_0x15fd90.data.msg || "无具体消息") + "\"");
        }
      }
    } else {
      throw new Error("重新登录后签到失败 (Code: " + _0x15fd90.code + ", Msg: " + (_0x15fd90.msg || "未知错误") + ")");
    }
  } catch (_0x2c8d2f) {
    return "[" + _0x11c6b1 + "]皮卡生活签到结果：" + _0x2c8d2f.message;
  }
}
async function getMemberNickname(_0x55a982, _0x488d83, _0x2d117c, _0x2d4f6b) {
  try {
    const _0x1081c7 = {
      memberId: _0x55a982,
      userId: _0x488d83,
      userType: "61",
      uid: _0x488d83,
      mobile: _0x2d117c,
      tel: _0x2d117c,
      phone: _0x2d117c,
      brandName: "",
      seriesName: "",
      token: "ebf76685e48d4e14a9de6fccc76483e3",
      safeEnc: Date.now() - (EJSafeKey || 0),
      businessId: 1
    };
    const _0x4fb981 = await commonPost("/ehomes-new/homeManager/api/Member/findMemberInfo2", _0x1081c7);
    return _0x4fb981.code === 200 && _0x4fb981.data && _0x4fb981.data.nickName ? (console.log("[" + _0x2d4f6b + "]昵称: " + _0x4fb981.data.nickName), _0x4fb981.data.nickName) : "";
  } catch (_0x558e0c) {
    return "";
  }
}
async function corsToActivity(_0x49371a, _0x50a936, _0x14c47f, _0x1d5b93, _0x515dd8) {
  try {
    const _0x4b7bb6 = {
      memberId: _0x49371a,
      userId: _0x50a936,
      userType: "61",
      uid: _0x50a936,
      mobile: _0x14c47f,
      tel: _0x14c47f,
      phone: _0x14c47f,
      brandName: "",
      seriesName: "",
      token: "ebf76685e48d4e14a9de6fccc76483e3",
      safeEnc: Date.now() - (EJSafeKey || 0),
      businessId: 1,
      activityNumber: "open",
      requestType: "0",
      type: "5",
      userNumber: _0x49371a,
      channel: "1",
      name: _0x1d5b93,
      remark: "打开APP"
    };
    const _0x3b64ae = await commonPost("/ehomes-new/homeManager/api/share/corsToActicity", _0x4b7bb6);
    _0x3b64ae.code === 200 ? console.log("[" + _0x515dd8 + "]打开APP请求成功") : console.log("[" + _0x515dd8 + "]打开APP请求失败: " + _0x3b64ae.msg);
  } catch (_0x49ffe5) {
    console.error("[" + _0x515dd8 + "]打开APP请求失败: " + _0x49ffe5.message);
  }
}
async function saveUserDeviceInfo(_0x4cffd6, _0x4ea52d, _0x30e429, _0x3bd163) {
  try {
    const _0x4ac9a5 = {
      memberId: _0x4cffd6,
      userId: _0x4ea52d,
      userType: "61",
      uid: _0x4ea52d,
      mobile: _0x30e429,
      tel: _0x30e429,
      phone: _0x30e429,
      brandName: "",
      seriesName: "",
      token: "ebf76685e48d4e14a9de6fccc76483e3",
      safeEnc: Date.now() - (EJSafeKey || 0),
      businessId: null,
      device: "ANDROID",
      deviceToken: "ApQrEcr_yjuLFVk8vR7x3FUtFd9NZqd4BTZmW6iWblPR"
    };
    const _0x1461cf = await commonPost("/ehomes-new/homeManager/api/message/saveUserDeviceInfo", _0x4ac9a5);
    _0x1461cf.code === 200 ? console.log("[" + _0x3bd163 + "]保存友盟设备信息成功") : console.log("[" + _0x3bd163 + "]保存友盟设备信息失败: " + _0x1461cf.msg);
  } catch (_0x2afd37) {
    console.error("[" + _0x3bd163 + "]保存友盟设备信息失败: " + _0x2afd37.message);
  }
}
async function processAccount(_0x3c6ad4, _0x2bf730) {
  try {
    let _0xd6cfb7;
    let _0x25c90d;
    if (_0x3c6ad4.includes("#")) {
      [_0xd6cfb7, _0x25c90d] = _0x3c6ad4.split("#");
    } else {
      let _0x264a4c = atob(_0x3c6ad4);
      [_0xd6cfb7, _0x25c90d] = _0x264a4c.split("#");
    }
    const _0x20ab4d = _0xd6cfb7.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
    console.log("[" + _0x2bf730 + "]" + _0x20ab4d + " 处理中");
    console.log("————————————");
    const _0xd5e8cf = await retryTask(async () => {
      return await loginPost("/ehomes-new/homeManager/getLoginMember", {
        password: _0x25c90d,
        version_name: "7.3.23",
        version_auth: "",
        device_id: "17255ffa35cee609e2a8963a4233f13b",
        device_model: "realmeRMX3562",
        ip: "",
        name: _0xd6cfb7,
        version_code: "316",
        deviceSystemVersion: "11",
        device_type: "0"
      });
    });
    if (_0xd5e8cf.code !== 200) {
      throw new Error("福田e家登录失败: " + _0xd5e8cf.msg);
    }
    const {
      uid: _0x1ea629,
      memberComplexCode: _0x3b3d75,
      memberID: _0x4b2b8d,
      memberId: _0x10bdaa,
      ticketValue: _0x311b18
    } = _0xd5e8cf.data;
    const _0xd15e1b = await getMemberNickname(_0x3b3d75, _0x1ea629, _0xd6cfb7, _0x2bf730);
    _0xd5e8cf.data.nickName = _0xd15e1b;
    await corsToActivity(_0x4b2b8d, _0x1ea629, _0xd6cfb7, _0xd15e1b, _0x2bf730);
    await saveUserDeviceInfo(_0x4b2b8d, _0x1ea629, _0xd6cfb7, _0x2bf730);
    let _0x469e8d = await retryTask(async () => {
      return await commonPost("/ehomes-new/homeManager/api/Member/getTaskList", {
        memberId: _0x4b2b8d,
        userId: _0x1ea629,
        userType: "61",
        uid: _0x1ea629,
        mobile: _0xd6cfb7,
        tel: _0xd6cfb7,
        phone: _0xd6cfb7,
        brandName: "",
        seriesName: "",
        token: "ebf76685e48d4e14a9de6fccc76483e3",
        safeEnc: Date.now() - (EJSafeKey || 0),
        businessId: 1
      });
    });
    if (_0x469e8d.code === 200 && _0x469e8d.data) {
      for (const _0x3f5487 of _0x469e8d.data) {
        let _0xac8b87 = false;
        if (_0x3f5487.ruleName === "签到") {
          FTEJ_TASK_SIGNIN !== "1" && (_0xac8b87 = true);
        } else {
          if (_0x3f5487.ruleName === "保客分享") {
            FTEJ_TASK_SHARE !== "1" && (_0xac8b87 = true);
          } else {
            if (_0x3f5487.ruleName === "关注") {
              FTEJ_TASK_FOLLOW !== "1" && (_0xac8b87 = true);
            } else {
              _0x3f5487.ruleName === "发帖" && FTEJ_TASK_POST !== "1" && (_0xac8b87 = true);
            }
          }
        }
        if (_0xac8b87) {
          continue;
        }
        if (_0x3f5487.isComplete === "1") {
          console.log("[" + _0x2bf730 + "]任务\"" + _0x3f5487.ruleName + "\"已完成，跳过");
          continue;
        }
        if (_0x3f5487.isComplete === "1") {
          console.log("[" + _0x2bf730 + "]任务\"" + _0x3f5487.ruleName + "\"已完成，跳过");
          continue;
        }
        if (_0x3f5487.ruleName === "签到") {
          if (FTEJ_TASK_SIGNIN === "1") {
            if (_0xd5e8cf.data.signIn === "未签到") {
              await randomDelay(45, 90);
              const _0x2ca328 = await commonPost("/ehomes-new/homeManager/api/bonus/signActivity2nd", {
                memberId: _0x3b3d75,
                userId: _0x1ea629,
                userType: "61",
                uid: _0x1ea629,
                mobile: _0xd6cfb7,
                tel: _0xd6cfb7,
                phone: _0xd6cfb7,
                brandName: "",
                seriesName: "",
                token: "ebf76685e48d4e14a9de6fccc76483e3",
                safeEnc: Date.now() - (EJSafeKey || 0),
                businessId: 1
              });
              console.log("[" + _0x2bf730 + "]福田e家签到结果: " + (_0x2ca328.data?.["integral"] ? "获得" + _0x2ca328.data.integral + "积分" : _0x2ca328.msg));
            } else {
              console.log("[" + _0x2bf730 + "]福田e家当前签到状态: " + _0xd5e8cf.data.signIn + "，跳过签到操作");
            }
          }
        }
        if (_0x3f5487.ruleName === "保客分享") {
          if (FTEJ_TASK_SHARE === "1") {
            await randomDelay(45, 90);
            const _0x298ad9 = "https://finance.foton.com.cn/FONTON_PROD";
            const _0x1455ef = "Mozilla/5.0 (Linux; Android 15; RMX5060 Build/AP3A.240617.008; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/130.0.6723.58 Mobile Safari/537.36;Umeng4Aplus/1.0.0ftejAndroid";
            const _0x58118c = "https://finance.foton.com.cn/payingmember/clientHome?tab=1&show=0&memberId=" + _0x4b2b8d + "&ftejMemberId=" + _0x4b2b8d + "&encryptedMemberId=" + _0x3b3d75 + "&channel=app&mobile=" + _0xd6cfb7;
            const _0x1cc704 = {
              url: _0x298ad9 + "/ehomes-new/ehomesService//api/safeH5/getSafeInfo",
              headers: {
                "Content-Type": "application/json;charset=UTF-8",
                channel: "H5",
                "User-Agent": _0x1455ef,
                Origin: "https://finance.foton.com.cn",
                "X-Requested-With": "com.foton.almighty",
                Referer: _0x58118c,
                Cookie: "FOTONTGT=" + _0x311b18
              },
              body: JSON.stringify({})
            };
            const _0x3e49d6 = await new Promise(_0x2246cf => {
              $.post(_0x1cc704, (_0x1cb03c, _0x29ff31, _0x3b6ac7) => {
                if (_0x1cb03c) {
                  _0x2246cf(null);
                } else {
                  try {
                    const _0xd549b = JSON.parse(_0x3b6ac7);
                    _0xd549b.code === 200 && _0xd549b.data && _0xd549b.data.key ? _0x2246cf(_0xd549b.data.key) : _0x2246cf(null);
                  } catch (_0x3ea0f9) {
                    _0x2246cf(null);
                  }
                }
              });
            });
            if (_0x3e49d6) {
              const _0x5eeb16 = String(Date.now() - parseInt(_0x3e49d6));
              const _0x3a602d = {
                memberId: _0x3b3d75,
                tel: _0xd6cfb7,
                id: _0x3f5487.ruleId,
                safeEnc: _0x5eeb16,
                userId: null
              };
              const _0xf688e = {
                url: _0x298ad9 + "/ehomes-new/homeManager//api/bonus/addIntegralForShare",
                headers: {
                  "Content-Type": "application/json;charset=UTF-8",
                  channel: "H5",
                  "User-Agent": _0x1455ef,
                  Origin: "https://finance.foton.com.cn",
                  "X-Requested-With": "com.foton.almighty",
                  Referer: _0x58118c,
                  Cookie: "FOTONTGT=" + _0x311b18
                },
                body: JSON.stringify(_0x3a602d)
              };
              await new Promise(_0x1392ab => {
                $.post(_0xf688e, (_0x3fde16, _0x43780b, _0x1357a3) => {
                  if (_0x3fde16) {
                    console.log("[" + _0x2bf730 + "]分享任务结果: 请求错误 - " + _0x3fde16);
                  } else {
                    try {
                      const _0x5e2b97 = JSON.parse(_0x1357a3);
                      if (_0x5e2b97.code === 200 && _0x5e2b97.data) {
                        const _0x182563 = _0x5e2b97.data.integral || (_0x5e2b97.data.data ? _0x5e2b97.data.data.integral : undefined);
                        _0x182563 !== undefined ? console.log("[" + _0x2bf730 + "]分享任务结果: 获得" + _0x182563 + "积分") : console.log("[" + _0x2bf730 + "]分享任务结果: " + (_0x5e2b97.msg || "成功但未获取到积分信息"));
                      } else {
                        console.log("[" + _0x2bf730 + "]分享任务结果: " + (_0x5e2b97.msg || JSON.stringify(_0x5e2b97)));
                      }
                    } catch (_0x40d4d4) {
                      console.log("[" + _0x2bf730 + "]分享任务结果: 解析响应错误 - " + _0x40d4d4);
                    }
                  }
                  _0x1392ab();
                });
              });
            } else {
              console.log("[" + _0x2bf730 + "]保客分享：跳过，因获取finance safeKey失败");
            }
          }
        }
        if (_0x3f5487.ruleName === "关注") {
          if (FTEJ_TASK_FOLLOW === "1") {
            await randomDelay(45, 90);
            const _0x52a178 = await commonPost("/ehomes-new/ehomesCommunity/api/post/recommendPostList", {
              memberId: _0x4b2b8d,
              userId: _0x1ea629,
              userType: "61",
              uid: _0x1ea629,
              mobile: _0xd6cfb7,
              tel: _0xd6cfb7,
              phone: _0xd6cfb7,
              brandName: "",
              seriesName: "",
              token: "ebf76685e48d4e14a9de6fccc76483e3",
              safeEnc: Date.now() - (EJSafeKey || 0),
              businessId: 1,
              position: "1",
              pageNumber: "1",
              pageSize: 9
            });
            if (_0x52a178.code === 200 && _0x52a178.data && _0x52a178.data.length > 0) {
              const _0x1edb79 = _0x52a178.data;
              const _0x37bfdd = _0x1edb79[Math.floor(Math.random() * _0x1edb79.length)].memberId;
              await commonPost("/ehomes-new/ehomesCommunity/api/post/follow2nd", {
                memberId: _0x3b3d75,
                userId: _0x1ea629,
                userType: "61",
                uid: _0x1ea629,
                mobile: _0xd6cfb7,
                tel: _0xd6cfb7,
                phone: _0xd6cfb7,
                brandName: "",
                seriesName: "",
                token: "ebf76685e48d4e14a9de6fccc76483e3",
                safeEnc: Date.now() - (EJSafeKey || 0),
                businessId: 1,
                behavior: "1",
                memberIdeds: _0x37bfdd,
                navyId: "null"
              });
              console.log("[" + _0x2bf730 + "]关注ID " + _0x37bfdd + " 成功");
              await randomDelay(1, 3);
              await commonPost("/ehomes-new/ehomesCommunity/api/post/follow2nd", {
                memberId: _0x3b3d75,
                userId: _0x1ea629,
                userType: "61",
                uid: _0x1ea629,
                mobile: _0xd6cfb7,
                tel: _0xd6cfb7,
                phone: _0xd6cfb7,
                brandName: "",
                seriesName: "",
                token: "ebf76685e48d4e14a9de6fccc76483e3",
                safeEnc: Date.now() - (EJSafeKey || 0),
                businessId: 1,
                behavior: "2",
                memberIdeds: _0x37bfdd,
                navyId: "null"
              });
              console.log("[" + _0x2bf730 + "]取关ID " + _0x37bfdd + " 成功");
            } else {
              console.log("[" + _0x2bf730 + "]获取推荐帖子列表失败或列表为空，无法执行关注任务: " + (_0x52a178.msg || ""));
            }
          }
        }
        if (_0x3f5487.ruleName === "发帖") {
          if (FTEJ_TASK_POST === "1") {
            const _0x136d65 = await loginPost("/ehomes-new/ehomesCommunity/api/post/topicList", {
              memberId: _0x4b2b8d,
              userId: _0x1ea629,
              userType: "61",
              uid: _0x1ea629,
              mobile: _0xd6cfb7,
              tel: _0xd6cfb7,
              phone: _0xd6cfb7,
              brandName: "",
              seriesName: "",
              token: "ebf76685e48d4e14a9de6fccc76483e3",
              safeEnc: Date.now() - (EJSafeKey || 0),
              businessId: 1
            });
            if (_0x136d65.code === 200 && _0x136d65.data && _0x136d65.data.top && _0x136d65.data.top.length > 0) {
              const _0x27f847 = _0x136d65.data.top;
              const _0x4041e8 = _0x27f847[Math.floor(Math.random() * _0x27f847.length)].topicId;
              const _0x45d844 = (await textGet()) || "生活就像一杯茶，不会苦一辈子，但要学会等待她的甘甜。";
              await randomDelay(45, 90);
              const _0x1279df = await commonPost("/ehomes-new/ehomesCommunity/api/post/addJson2nd", {
                memberId: _0x3b3d75,
                userId: _0x1ea629,
                userType: "61",
                uid: _0x1ea629,
                mobile: _0xd6cfb7,
                tel: _0xd6cfb7,
                phone: _0xd6cfb7,
                brandName: "",
                seriesName: "",
                token: "ebf76685e48d4e14a9de6fccc76483e3",
                safeEnc: Date.now() - (EJSafeKey || 0),
                businessId: 1,
                content: _0x45d844,
                postType: 1,
                topicIdList: [_0x4041e8],
                uploadFlag: 3,
                title: "",
                urlList: []
              });
              _0x1279df.code === 200 ? console.log("[" + _0x2bf730 + "]发帖成功") : console.log("[" + _0x2bf730 + "]发帖失败: " + (_0x1279df.msg || "未知错误"));
            } else {
              console.log("[" + _0x2bf730 + "]获取话题列表失败或列表为空，无法执行发帖任务: " + (_0x136d65.msg || ""));
            }
          }
        }
      }
    } else {
      console.log("[" + _0x2bf730 + "]获取任务列表失败或列表为空: " + (_0x469e8d.msg || ""));
    }
    if (FTEJ_PK === "1") {
      const _0x11d57e = await processPikaLife(_0xd6cfb7, _0x25c90d, _0x2bf730);
      console.log(_0x11d57e);
    }
    if (FTEJ_SpringSign === "1") {
      _0x311b18 ? await springDayLottery(_0x4b2b8d, _0x3b3d75, _0xd6cfb7, _0x311b18, _0x2bf730) : console.log("[" + _0x2bf730 + "]缺少ticketValue, 无法进行春日抽奖");
    }
    if (FTEJ_Lottery === "1") {
      _0x311b18 ? await lotteryDraw(_0x4b2b8d, _0x3b3d75, _0xd6cfb7, _0x311b18, _0x2bf730) : console.log("[" + _0x2bf730 + "]缺少ticketValue, 无法进行积分转盘抽奖");
    }
    FTEJ_DEL_POSTS === "1" && (await manageOldPosts(_0xd5e8cf.data, _0xd6cfb7, _0x2bf730));
    const _0x967ab6 = await commonPost("/ehomes-new/homeManager/api/Member/findMemberPointsInfo", {
      memberId: _0x4b2b8d,
      userId: _0x1ea629,
      userType: "61",
      uid: _0x1ea629,
      mobile: _0xd6cfb7,
      tel: _0xd6cfb7,
      phone: _0xd6cfb7,
      brandName: "",
      seriesName: "",
      token: "ebf76685e48d4e14a9de6fccc76483e3",
      safeEnc: Date.now() - (EJSafeKey || 0),
      businessId: 1
    });
    return "[" + _0x2bf730 + "]" + _0x20ab4d + " 当前积分：" + (_0x967ab6.data?.["pointValue"] !== undefined ? _0x967ab6.data.pointValue : "查询失败") + "\n";
  } catch (_0x258594) {
    let _0x26ce8c;
    if (typeof phone === "string" && phone) {
      _0x26ce8c = phone.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
    } else {
      if (typeof _0x3c6ad4 === "string" && _0x3c6ad4) {
        const _0x2cf2bb = _0x3c6ad4.split("#");
        const _0x51b942 = _0x2cf2bb[0];
        if (_0x51b942 && _0x51b942.length > 7 && /^\d+$/.test(_0x51b942)) {
          _0x26ce8c = _0x51b942.substring(0, 3) + "****" + _0x51b942.substring(_0x51b942.length - 4);
        } else {
          _0x51b942 ? _0x26ce8c = "" : _0x26ce8c = "";
        }
      } else {
        _0x26ce8c = "";
      }
    }
    console.error("[" + _0x2bf730 + "]" + _0x258594.message);
    return "[" + _0x2bf730 + "]" + _0x258594.message + "\n";
  }
}
async function loginPost(_0x2541ef, _0x3f84c0) {
  return new Promise(_0x896b3b => {
    const _0x430912 = {
      url: "https://czyl.foton.com.cn" + _0x2541ef,
      headers: {
        "content-type": "application/json;charset=utf-8",
        Connection: "Keep-Alive",
        "user-agent": "okhttp/3.14.9",
        "Accept-Encoding": "gzip"
      },
      body: JSON.stringify(_0x3f84c0)
    };
    $.post(_0x430912, async (_0x3212d4, _0x477b97, _0x3887aa) => {
      try {
        if (_0x3212d4) {
          console.log("" + JSON.stringify(_0x3212d4));
          console.log($.name + " API请求失败，请检查网路重试");
          return _0x896b3b({
            code: 500
          });
        } else {
          await $.wait(2000);
          _0x896b3b(JSON.parse(_0x3887aa));
        }
      } catch (_0x793482) {
        $.logErr(_0x793482, _0x477b97);
        _0x896b3b({
          code: 500
        });
      }
    });
  });
}
async function pkLoginPost(_0x3d2a53, _0x520ea2) {
  return new Promise(_0x5beee3 => {
    const _0x1ed33f = {
      url: "https://czyl.foton.com.cn" + _0x3d2a53,
      headers: {
        "content-type": "application/json;charset=utf-8",
        channel: "1",
        "Accept-Encoding": "gzip"
      },
      body: JSON.stringify(_0x520ea2)
    };
    $.post(_0x1ed33f, async (_0x4fbde0, _0x5e95c3, _0x193964) => {
      try {
        if (_0x4fbde0) {
          console.log("" + JSON.stringify(_0x4fbde0));
          console.log($.name + " API请求失败，请检查网路重试，跳过当前账号");
          return _0x5beee3({
            code: 500
          });
        } else {
          await $.wait(2000);
          _0x5beee3(JSON.parse(_0x193964));
        }
      } catch (_0x1af07f) {
        $.logErr(_0x1af07f, _0x5e95c3);
        _0x5beee3({
          code: 500
        });
      }
    });
  });
}
async function commonPost(_0x5474f0, _0x52d4a8) {
  return new Promise(_0x3b4b52 => {
    const _0x53a676 = {
      url: "https://czyl.foton.com.cn" + _0x5474f0,
      headers: {
        "content-type": "application/json;charset=utf-8",
        Connection: "Keep-Alive",
        token: "",
        "app-key": "7918d2d1a92a02cbc577adb8d570601e72d3b640",
        "app-token": "58891364f56afa1b6b7dae3e4bbbdfbfde9ef489",
        "user-agent": "web",
        "Accept-Encoding": "gzip"
      },
      body: JSON.stringify(_0x52d4a8)
    };
    $.post(_0x53a676, async (_0x3d9f41, _0x1d6f28, _0x8133e9) => {
      try {
        if (_0x3d9f41) {
          console.log("" + JSON.stringify(_0x3d9f41));
          console.log($.name + " API请求失败，请检查网路重试，跳过该请求");
          return _0x3b4b52({
            code: 500
          });
        } else {
          await $.wait(2000);
          _0x3b4b52(JSON.parse(_0x8133e9));
        }
      } catch (_0x582118) {
        $.logErr(_0x582118, _0x1d6f28);
        _0x3b4b52({
          code: 500
        });
      }
    });
  });
}
async function request(_0xf67643, _0x213639) {
  return new Promise(_0x19fa16 => {
    const _0x1e45bb = "https://czyl.foton.com.cn" + _0xf67643;
    const _0x20e746 = {
      url: _0x1e45bb,
      ..._0x213639
    };
    _0x213639.body && typeof _0x213639.body === "object" && !Buffer.isBuffer(_0x213639.body) && !(_0x213639.headers && _0x213639.headers["Content-Type"] && _0x213639.headers["Content-Type"].includes("x-www-form-urlencoded")) && (_0x20e746.body = JSON.stringify(_0x213639.body));
    $.post(_0x20e746, async (_0x2ddb00, _0x326fe5, _0x58e7be) => {
      try {
        if (_0x2ddb00) {
          console.log("❌ API请求失败: " + JSON.stringify(_0x2ddb00));
          return _0x19fa16({
            code: 500,
            msg: _0x2ddb00.message
          });
        } else {
          await $.wait(2000);
          _0x19fa16({
            code: _0x326fe5.statusCode,
            headers: _0x326fe5.headers,
            data: JSON.parse(_0x58e7be)
          });
        }
      } catch (_0x1730b3) {
        console.log("❌ 解析响应失败: " + _0x1730b3.message);
        _0x19fa16({
          code: _0x326fe5 ? _0x326fe5.statusCode : 500,
          headers: _0x326fe5 ? _0x326fe5.headers : {},
          msg: _0x1730b3.message,
          rawData: _0x58e7be
        });
      }
    });
  });
}
async function pkPost(_0x1c6f07, _0x3cd124, _0x51c5ef) {
  return new Promise(_0xf4f4a8 => {
    const _0x3812cd = {
      url: "https://czyl.foton.com.cn" + _0x1c6f07,
      headers: {
        "content-type": "application/json;charset=utf-8",
        channel: "1",
        token: _0x51c5ef,
        "Accept-Encoding": "gzip"
      },
      body: JSON.stringify(_0x3cd124)
    };
    $.post(_0x3812cd, async (_0x51359a, _0x5a3672, _0x5f1775) => {
      try {
        if (_0x51359a) {
          console.log("" + JSON.stringify(_0x51359a));
          console.log($.name + " API请求失败，请检查网络重试，跳过该请求");
          return _0xf4f4a8({
            code: 500
          });
        } else {
          await $.wait(2000);
          _0xf4f4a8(JSON.parse(_0x5f1775));
        }
      } catch (_0x189b0b) {
        $.logErr(_0x189b0b, _0x5a3672);
        _0xf4f4a8({
          code: 500
        });
      }
    });
  });
}
async function textGet() {
  return new Promise(_0x144e39 => {
    const _0x5e4876 = {
      url: "http://api.btstu.cn/yan/api.php",
      headers: {}
    };
    $.get(_0x5e4876, async (_0x507668, _0x1d1edf, _0x1c3b88) => {
      try {
        if (_0x507668) {
          console.log("" + JSON.stringify(_0x507668));
          console.log($.name + " 获取随机文本失败，使用默认文本");
          return _0x144e39("如果觉得没有朋友，就去找喜欢的人表白，对方会提出和你做朋友的。");
        } else {
          await $.wait(2000);
          _0x144e39(_0x1c3b88);
        }
      } catch (_0xaddf0b) {
        $.logErr(_0xaddf0b, _0x1d1edf);
        _0x144e39("如果觉得没有朋友，就去找喜欢的人表白，对方会提出和你做朋友的。");
      }
    });
  });
}
async function sendMsg(_0x2050cd) {
  if ($.isNode()) {
    let _0x38d2cd = "";
    try {
      _0x38d2cd = require("./sendNotify");
    } catch (_0x1d9754) {
      try {
        _0x38d2cd = require("../sendNotify");
      } catch (_0x41b84e) {
        console.log("sendNotify.js模块加载失败，请确保它在脚本同级目录或上一级目录下");
        return;
      }
    }
    await _0x38d2cd.sendNotify($.name, _0x2050cd);
  } else {
    $.msg($.name, "", _0x2050cd);
  }
}
function Env(_0xb510d3, _0xaf35f9) {
  class _0xb1b9b0 {
    constructor(_0x2413c4) {
      this.env = _0x2413c4;
    }
    send(_0x338e7a, _0x19bc3d = "GET") {
      _0x338e7a = "string" == typeof _0x338e7a ? {
        url: _0x338e7a
      } : _0x338e7a;
      let _0x484b95 = this.get;
      "POST" === _0x19bc3d && (_0x484b95 = this.post);
      return new Promise((_0x4e4cc7, _0x4d5e65) => {
        _0x484b95.call(this, _0x338e7a, (_0x121e3b, _0x549f3a, _0x1d6372) => {
          _0x121e3b ? _0x4d5e65(_0x121e3b) : _0x4e4cc7(_0x549f3a);
        });
      });
    }
    get(_0x371cf9) {
      return this.send.call(this.env, _0x371cf9);
    }
    post(_0x5a1bc0) {
      return this.send.call(this.env, _0x5a1bc0, "POST");
    }
  }
  return new class {
    constructor(_0x18d18b, _0xf2891f) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = _0x18d18b;
      this.http = new _0xb1b9b0(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, _0xf2891f);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : undefined;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(_0x3bc342, _0xc86497 = null) {
      try {
        return JSON.parse(_0x3bc342);
      } catch {
        return _0xc86497;
      }
    }
    toStr(_0x2e4ad0, _0xce0800 = null, ..._0x30ec78) {
      try {
        return JSON.stringify(_0x2e4ad0, ..._0x30ec78);
      } catch {
        return _0xce0800;
      }
    }
    getjson(_0x558091, _0x4d72a0) {
      let _0x4346c8 = _0x4d72a0;
      if (this.getdata(_0x558091)) {
        try {
          _0x4346c8 = JSON.parse(this.getdata(_0x558091));
        } catch {}
      }
      return _0x4346c8;
    }
    setjson(_0x12a3f6, _0x36cf91) {
      try {
        return this.setdata(JSON.stringify(_0x12a3f6), _0x36cf91);
      } catch {
        return false;
      }
    }
    getScript(_0x58a489) {
      return new Promise(_0x4ae58e => {
        this.get({
          url: _0x58a489
        }, (_0xf486da, _0x6c52a3, _0x1d174c) => _0x4ae58e(_0x1d174c));
      });
    }
    runScript(_0xbe3c0, _0x31db00) {
      return new Promise(_0x506c7d => {
        let _0x16e18b = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x16e18b = _0x16e18b ? _0x16e18b.replace(/\n/g, "").trim() : _0x16e18b;
        let _0xfedc1e = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0xfedc1e = _0xfedc1e ? 1 * _0xfedc1e : 20;
        _0xfedc1e = _0x31db00 && _0x31db00.timeout ? _0x31db00.timeout : _0xfedc1e;
        const [_0x43b727, _0xfd6318] = _0x16e18b.split("@");
        const _0x30ffcc = {
          url: "http://" + _0xfd6318 + "/v1/scripting/evaluate",
          body: {
            script_text: _0xbe3c0,
            mock_type: "cron",
            timeout: _0xfedc1e
          },
          headers: {
            "X-Key": _0x43b727,
            Accept: "*/*"
          },
          timeout: _0xfedc1e
        };
        this.post(_0x30ffcc, (_0x4d8206, _0x153146, _0x1ddc4c) => _0x506c7d(_0x1ddc4c));
      }).catch(_0x1669a6 => this.logErr(_0x1669a6));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x45ec62 = this.path.resolve(this.dataFile);
        const _0x9e9d0c = this.path.resolve(process.cwd(), this.dataFile);
        const _0x4f7647 = this.fs.existsSync(_0x45ec62);
        const _0x8b72cd = !_0x4f7647 && this.fs.existsSync(_0x9e9d0c);
        if (!_0x4f7647 && !_0x8b72cd) {
          return {};
        }
        {
          const _0x20055a = _0x4f7647 ? _0x45ec62 : _0x9e9d0c;
          try {
            return JSON.parse(this.fs.readFileSync(_0x20055a));
          } catch (_0x90c161) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x465039 = this.path.resolve(this.dataFile);
        const _0x34a598 = this.path.resolve(process.cwd(), this.dataFile);
        const _0x1f1842 = this.fs.existsSync(_0x465039);
        const _0x5a76d9 = !_0x1f1842 && this.fs.existsSync(_0x34a598);
        const _0x5c2c3c = JSON.stringify(this.data);
        _0x1f1842 ? this.fs.writeFileSync(_0x465039, _0x5c2c3c) : _0x5a76d9 ? this.fs.writeFileSync(_0x34a598, _0x5c2c3c) : this.fs.writeFileSync(_0x465039, _0x5c2c3c);
      }
    }
    lodash_get(_0x1643bf, _0x3ac023, _0x4f2308) {
      const _0x293f51 = _0x3ac023.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x404566 = _0x1643bf;
      for (const _0x595c42 of _0x293f51) if (_0x404566 = Object(_0x404566)[_0x595c42], undefined === _0x404566) {
        return _0x4f2308;
      }
      return _0x404566;
    }
    lodash_set(_0x144fb5, _0x15ef4d, _0x350850) {
      Object(_0x144fb5) !== _0x144fb5 || (Array.isArray(_0x15ef4d) || (_0x15ef4d = _0x15ef4d.toString().match(/[^.[\]]+/g) || []), _0x15ef4d.slice(0, -1).reduce((_0x487124, _0x139c73, _0x5e7eea) => Object(_0x487124[_0x139c73]) === _0x487124[_0x139c73] ? _0x487124[_0x139c73] : _0x487124[_0x139c73] = Math.abs(_0x15ef4d[_0x5e7eea + 1]) >> 0 == +_0x15ef4d[_0x5e7eea + 1] ? [] : {}, _0x144fb5)[_0x15ef4d[_0x15ef4d.length - 1]] = _0x350850);
      return _0x144fb5;
    }
    getdata(_0x2be519) {
      let _0x3a64b1 = this.getval(_0x2be519);
      if (/^@/.test(_0x2be519)) {
        const [, _0x2630a6, _0x4b5b96] = /^@(.*?)\.(.*?)$/.exec(_0x2be519);
        const _0x2e8459 = _0x2630a6 ? this.getval(_0x2630a6) : "";
        if (_0x2e8459) {
          try {
            const _0x39006c = JSON.parse(_0x2e8459);
            _0x3a64b1 = _0x39006c ? this.lodash_get(_0x39006c, _0x4b5b96, "") : _0x3a64b1;
          } catch (_0x23f63e) {
            _0x3a64b1 = "";
          }
        }
      }
      return _0x3a64b1;
    }
    setdata(_0x52692b, _0x1fe250) {
      let _0x3e4308 = false;
      if (/^@/.test(_0x1fe250)) {
        const [, _0x501c82, _0x1ee8a8] = /^@(.*?)\.(.*?)$/.exec(_0x1fe250);
        const _0x336d63 = this.getval(_0x501c82);
        const _0x43b76f = _0x501c82 ? "null" === _0x336d63 ? null : _0x336d63 || "{}" : "{}";
        try {
          const _0x4b92cc = JSON.parse(_0x43b76f);
          this.lodash_set(_0x4b92cc, _0x1ee8a8, _0x52692b);
          _0x3e4308 = this.setval(JSON.stringify(_0x4b92cc), _0x501c82);
        } catch (_0x426dc3) {
          const _0x124f87 = {};
          this.lodash_set(_0x124f87, _0x1ee8a8, _0x52692b);
          _0x3e4308 = this.setval(JSON.stringify(_0x124f87), _0x501c82);
        }
      } else {
        _0x3e4308 = this.setval(_0x52692b, _0x1fe250);
      }
      return _0x3e4308;
    }
    getval(_0x19a771) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(_0x19a771);
        case "Quantumult X":
          return $prefs.valueForKey(_0x19a771);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[_0x19a771];
        default:
          return this.data && this.data[_0x19a771] || null;
      }
    }
    setval(_0x47a745, _0x1f5424) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(_0x47a745, _0x1f5424);
        case "Quantumult X":
          return $prefs.setValueForKey(_0x47a745, _0x1f5424);
        case "Node.js":
          this.data = this.loaddata();
          this.data[_0x1f5424] = _0x47a745;
          this.writedata();
          return true;
        default:
          return this.data && this.data[_0x1f5424] || null;
      }
    }
    initGotEnv(_0x1c3647) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x1c3647 && (_0x1c3647.headers = _0x1c3647.headers ? _0x1c3647.headers : {}, _0x1c3647 && (_0x1c3647.headers = _0x1c3647.headers ? _0x1c3647.headers : {}, undefined === _0x1c3647.headers.cookie && undefined === _0x1c3647.headers.Cookie && undefined === _0x1c3647.cookieJar && (_0x1c3647.cookieJar = this.ckjar)));
    }
    get(_0x412d19, _0x3b503b = () => {}) {
      switch (_0x412d19.headers && (delete _0x412d19.headers["Content-Type"], delete _0x412d19.headers["Content-Length"], delete _0x412d19.headers["content-type"], delete _0x412d19.headers["content-length"]), _0x412d19.params && (_0x412d19.url += "?" + this.queryStr(_0x412d19.params)), undefined === _0x412d19.followRedirect || _0x412d19.followRedirect || ((this.isSurge() || this.isLoon()) && (_0x412d19["auto-redirect"] = false), this.isQuanX() && (_0x412d19.opts ? _0x412d19.opts.redirection = false : _0x412d19.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (_0x412d19.headers = _0x412d19.headers || {}, Object.assign(_0x412d19.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient.get(_0x412d19, (_0x2206d5, _0x208093, _0x4fd42c) => {
            !_0x2206d5 && _0x208093 && (_0x208093.body = _0x4fd42c, _0x208093.statusCode = _0x208093.status ? _0x208093.status : _0x208093.statusCode, _0x208093.status = _0x208093.statusCode);
            _0x3b503b(_0x2206d5, _0x208093, _0x4fd42c);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (_0x412d19.opts = _0x412d19.opts || {}, Object.assign(_0x412d19.opts, {
            hints: false
          }));
          $task.fetch(_0x412d19).then(_0x1a1305 => {
            const {
              statusCode: _0x19c465,
              statusCode: _0x37610b,
              headers: _0x53ae8d,
              body: _0x29f9ab,
              bodyBytes: _0x964fed
            } = _0x1a1305;
            _0x3b503b(null, {
              status: _0x19c465,
              statusCode: _0x37610b,
              headers: _0x53ae8d,
              body: _0x29f9ab,
              bodyBytes: _0x964fed
            }, _0x29f9ab, _0x964fed);
          }, _0x30bdd0 => _0x3b503b(_0x30bdd0 && _0x30bdd0.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x3bc15f = require("iconv-lite");
          this.initGotEnv(_0x412d19);
          this.got(_0x412d19).on("redirect", (_0x9535e3, _0x446902) => {
            try {
              if (_0x9535e3.headers["set-cookie"]) {
                const _0x28c09c = _0x9535e3.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                _0x28c09c && this.ckjar.setCookieSync(_0x28c09c, null);
                _0x446902.cookieJar = this.ckjar;
              }
            } catch (_0x516dcd) {
              this.logErr(_0x516dcd);
            }
          }).then(_0x1b825e => {
            const {
              statusCode: _0x104ca5,
              statusCode: _0x3bba01,
              headers: _0x4180e5,
              rawBody: _0x53f53a
            } = _0x1b825e;
            const _0x14e77f = _0x3bc15f.decode(_0x53f53a, this.encoding);
            _0x3b503b(null, {
              status: _0x104ca5,
              statusCode: _0x3bba01,
              headers: _0x4180e5,
              rawBody: _0x53f53a,
              body: _0x14e77f
            }, _0x14e77f);
          }, _0x4f500a => {
            const {
              message: _0x5621d1,
              response: _0x24c3d1
            } = _0x4f500a;
            _0x3b503b(_0x5621d1, _0x24c3d1, _0x24c3d1 && _0x3bc15f.decode(_0x24c3d1.rawBody, this.encoding));
          });
          break;
      }
    }
    post(_0x5d035f, _0x9ddde1 = () => {}) {
      const _0x2cbd6b = _0x5d035f.method ? _0x5d035f.method.toLocaleLowerCase() : "post";
      switch (_0x5d035f.body && _0x5d035f.headers && !_0x5d035f.headers["Content-Type"] && !_0x5d035f.headers["content-type"] && (_0x5d035f.headers["content-type"] = "application/x-www-form-urlencoded"), _0x5d035f.headers && (delete _0x5d035f.headers["Content-Length"], delete _0x5d035f.headers["content-length"]), undefined === _0x5d035f.followRedirect || _0x5d035f.followRedirect || ((this.isSurge() || this.isLoon()) && (_0x5d035f["auto-redirect"] = false), this.isQuanX() && (_0x5d035f.opts ? _0x5d035f.opts.redirection = false : _0x5d035f.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (_0x5d035f.headers = _0x5d035f.headers || {}, Object.assign(_0x5d035f.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient[_0x2cbd6b](_0x5d035f, (_0xfbe607, _0x1eab48, _0x5dfbca) => {
            !_0xfbe607 && _0x1eab48 && (_0x1eab48.body = _0x5dfbca, _0x1eab48.statusCode = _0x1eab48.status ? _0x1eab48.status : _0x1eab48.statusCode, _0x1eab48.status = _0x1eab48.statusCode);
            _0x9ddde1(_0xfbe607, _0x1eab48, _0x5dfbca);
          });
          break;
        case "Quantumult X":
          _0x5d035f.method = _0x2cbd6b;
          this.isNeedRewrite && (_0x5d035f.opts = _0x5d035f.opts || {}, Object.assign(_0x5d035f.opts, {
            hints: false
          }));
          $task.fetch(_0x5d035f).then(_0x4b8516 => {
            const {
              statusCode: _0x1f13a5,
              statusCode: _0x10cd56,
              headers: _0x47a6a7,
              body: _0x1ad7b5,
              bodyBytes: _0x102d95
            } = _0x4b8516;
            _0x9ddde1(null, {
              status: _0x1f13a5,
              statusCode: _0x10cd56,
              headers: _0x47a6a7,
              body: _0x1ad7b5,
              bodyBytes: _0x102d95
            }, _0x1ad7b5, _0x102d95);
          }, _0x5b479c => _0x9ddde1(_0x5b479c && _0x5b479c.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x61cd90 = require("iconv-lite");
          this.initGotEnv(_0x5d035f);
          const {
            url: _0x271e83,
            ..._0x168307
          } = _0x5d035f;
          this.got[_0x2cbd6b](_0x271e83, _0x168307).then(_0x4cbac4 => {
            const {
              statusCode: _0x6d79c6,
              statusCode: _0x448c77,
              headers: _0x3bfd6e,
              rawBody: _0x3895cf
            } = _0x4cbac4;
            const _0x314519 = _0x61cd90.decode(_0x3895cf, this.encoding);
            _0x9ddde1(null, {
              status: _0x6d79c6,
              statusCode: _0x448c77,
              headers: _0x3bfd6e,
              rawBody: _0x3895cf,
              body: _0x314519
            }, _0x314519);
          }, _0x3e0556 => {
            const {
              message: _0x45a766,
              response: _0xd01dae
            } = _0x3e0556;
            _0x9ddde1(_0x45a766, _0xd01dae, _0xd01dae && _0x61cd90.decode(_0xd01dae.rawBody, this.encoding));
          });
          break;
      }
    }
    time(_0x4ace63, _0x45c19e = null) {
      const _0x27b350 = _0x45c19e ? new Date(_0x45c19e) : new Date();
      let _0x236865 = {
        "M+": _0x27b350.getMonth() + 1,
        "d+": _0x27b350.getDate(),
        "H+": _0x27b350.getHours(),
        "m+": _0x27b350.getMinutes(),
        "s+": _0x27b350.getSeconds(),
        "q+": Math.floor((_0x27b350.getMonth() + 3) / 3),
        S: _0x27b350.getMilliseconds()
      };
      /(y+)/.test(_0x4ace63) && (_0x4ace63 = _0x4ace63.replace(RegExp.$1, (_0x27b350.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x38b061 in _0x236865) new RegExp("(" + _0x38b061 + ")").test(_0x4ace63) && (_0x4ace63 = _0x4ace63.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x236865[_0x38b061] : ("00" + _0x236865[_0x38b061]).substr(("" + _0x236865[_0x38b061]).length)));
      return _0x4ace63;
    }
    queryStr(_0x2148a7) {
      let _0x4ec157 = "";
      for (const _0x53a580 in _0x2148a7) {
        let _0x2a84f7 = _0x2148a7[_0x53a580];
        null != _0x2a84f7 && "" !== _0x2a84f7 && ("object" == typeof _0x2a84f7 && (_0x2a84f7 = JSON.stringify(_0x2a84f7)), _0x4ec157 += _0x53a580 + "=" + _0x2a84f7 + "&");
      }
      _0x4ec157 = _0x4ec157.substring(0, _0x4ec157.length - 1);
      return _0x4ec157;
    }
    msg(_0x414ef0 = _0xb510d3, _0x48ab11 = "", _0x220f90 = "", _0x1084d7 = {}) {
      const _0x2b2835 = _0x1d0976 => {
        const {
          $open: _0x53602e,
          $copy: _0x1be2ed,
          $media: _0x222541,
          $mediaMime: _0x48abad
        } = _0x1d0976;
        switch (typeof _0x1d0976) {
          case undefined:
            return _0x1d0976;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: _0x1d0976
                };
              case "Loon":
              case "Shadowrocket":
                return _0x1d0976;
              case "Quantumult X":
                return {
                  "open-url": _0x1d0976
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const _0x362f4e = {};
                  let _0x20c62c = _0x1d0976.openUrl || _0x1d0976.url || _0x1d0976["open-url"] || _0x53602e;
                  _0x20c62c && Object.assign(_0x362f4e, {
                    action: "open-url",
                    url: _0x20c62c
                  });
                  let _0x304e79 = _0x1d0976["update-pasteboard"] || _0x1d0976.updatePasteboard || _0x1be2ed;
                  if (_0x304e79 && Object.assign(_0x362f4e, {
                    action: "clipboard",
                    text: _0x304e79
                  }), _0x222541) {
                    let _0x60b821;
                    let _0x4c1987;
                    let _0x261407;
                    if (_0x222541.startsWith("http")) {
                      _0x60b821 = _0x222541;
                    } else {
                      if (_0x222541.startsWith("data:")) {
                        const [_0x4473d8] = _0x222541.split(";");
                        const [, _0x16e5bf] = _0x222541.split(",");
                        _0x4c1987 = _0x16e5bf;
                        _0x261407 = _0x4473d8.replace("data:", "");
                      } else {
                        _0x4c1987 = _0x222541;
                        _0x261407 = (_0xb514fd => {
                          const _0x36dd02 = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var _0x200048 in _0x36dd02) if (0 === _0xb514fd.indexOf(_0x200048)) {
                            return _0x36dd02[_0x200048];
                          }
                          return null;
                        })(_0x222541);
                      }
                    }
                    Object.assign(_0x362f4e, {
                      "media-url": _0x60b821,
                      "media-base64": _0x4c1987,
                      "media-base64-mime": _0x48abad ?? _0x261407
                    });
                  }
                  Object.assign(_0x362f4e, {
                    "auto-dismiss": _0x1d0976["auto-dismiss"],
                    sound: _0x1d0976.sound
                  });
                  return _0x362f4e;
                }
              case "Loon":
                {
                  const _0x1ba2f3 = {};
                  let _0x298e60 = _0x1d0976.openUrl || _0x1d0976.url || _0x1d0976["open-url"] || _0x53602e;
                  _0x298e60 && Object.assign(_0x1ba2f3, {
                    openUrl: _0x298e60
                  });
                  let _0x1e49ee = _0x1d0976.mediaUrl || _0x1d0976["media-url"];
                  _0x222541?.["startsWith"]("http") && (_0x1e49ee = _0x222541);
                  _0x1e49ee && Object.assign(_0x1ba2f3, {
                    mediaUrl: _0x1e49ee
                  });
                  console.log(JSON.stringify(_0x1ba2f3));
                  return _0x1ba2f3;
                }
              case "Quantumult X":
                {
                  const _0x1bcb83 = {};
                  let _0xbdfb5c = _0x1d0976["open-url"] || _0x1d0976.url || _0x1d0976.openUrl || _0x53602e;
                  _0xbdfb5c && Object.assign(_0x1bcb83, {
                    "open-url": _0xbdfb5c
                  });
                  let _0x45effb = _0x1d0976["media-url"] || _0x1d0976.mediaUrl;
                  _0x222541?.["startsWith"]("http") && (_0x45effb = _0x222541);
                  _0x45effb && Object.assign(_0x1bcb83, {
                    "media-url": _0x45effb
                  });
                  let _0x5ea7f2 = _0x1d0976["update-pasteboard"] || _0x1d0976.updatePasteboard || _0x1be2ed;
                  _0x5ea7f2 && Object.assign(_0x1bcb83, {
                    "update-pasteboard": _0x5ea7f2
                  });
                  console.log(JSON.stringify(_0x1bcb83));
                  return _0x1bcb83;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(_0x414ef0, _0x48ab11, _0x220f90, _0x2b2835(_0x1084d7));
            break;
          case "Quantumult X":
            $notify(_0x414ef0, _0x48ab11, _0x220f90, _0x2b2835(_0x1084d7));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let _0x1e5dee = ["", "==============📣系统通知📣=============="];
        _0x1e5dee.push(_0x414ef0);
        _0x48ab11 && _0x1e5dee.push(_0x48ab11);
        _0x220f90 && _0x1e5dee.push(_0x220f90);
        console.log(_0x1e5dee.join("\n"));
        this.logs = this.logs.concat(_0x1e5dee);
      }
    }
    debug(..._0x148ecc) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (_0x148ecc.length > 0 && (this.logs = [...this.logs, ..._0x148ecc]), console.log("" + this.logLevelPrefixs.debug + _0x148ecc.map(_0x4e7d8e => _0x4e7d8e ?? String(_0x4e7d8e)).join(this.logSeparator)));
    }
    info(..._0x3b5ecb) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (_0x3b5ecb.length > 0 && (this.logs = [...this.logs, ..._0x3b5ecb]), console.log("" + this.logLevelPrefixs.info + _0x3b5ecb.map(_0x2e3e7b => _0x2e3e7b ?? String(_0x2e3e7b)).join(this.logSeparator)));
    }
    warn(..._0x5b1135) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (_0x5b1135.length > 0 && (this.logs = [...this.logs, ..._0x5b1135]), console.log("" + this.logLevelPrefixs.warn + _0x5b1135.map(_0x9e333d => _0x9e333d ?? String(_0x9e333d)).join(this.logSeparator)));
    }
    error(..._0x5bc580) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (_0x5bc580.length > 0 && (this.logs = [...this.logs, ..._0x5bc580]), console.log("" + this.logLevelPrefixs.error + _0x5bc580.map(_0x5d6add => _0x5d6add ?? String(_0x5d6add)).join(this.logSeparator)));
    }
    log(..._0x34bfe5) {
      _0x34bfe5.length > 0 && (this.logs = [...this.logs, ..._0x34bfe5]);
      console.log(_0x34bfe5.map(_0x2f0054 => _0x2f0054 ?? String(_0x2f0054)).join(this.logSeparator));
    }
    logErr(_0x57c1af, _0x44ddd2) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", "❗️" + this.name + ", 错误!", _0x44ddd2, _0x57c1af);
          break;
        case "Node.js":
          this.log("", "❗️" + this.name + ", 错误!", _0x44ddd2, undefined !== _0x57c1af.message ? _0x57c1af.message : _0x57c1af, _0x57c1af.stack);
          break;
      }
    }
    wait(_0x3fc6d7) {
      return new Promise(_0x3d9fd7 => setTimeout(_0x3d9fd7, _0x3fc6d7));
    }
    done(_0x34da2b = {}) {
      const _0x351fad = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x351fad + " 秒"), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(_0x34da2b);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(_0xb510d3, _0xaf35f9);
}