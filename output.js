//Sat May 31 2025 18:28:07 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const _0x4ff172 = require("crypto");
const _0x3a399b = new _0x50c0dd("福田e家");
const _0x30fdbb = (_0x3a399b.isNode() ? process.env.FTEJ : _0x3a399b.getdata("FTEJ")) || "";
const _0x4a0378 = (_0x3a399b.isNode() ? process.env.FTEJ_PK : _0x3a399b.getdata("FTEJ_PK")) || "1";
const _0x114f79 = (_0x3a399b.isNode() ? process.env.FTEJ_Lottery : _0x3a399b.getdata("FTEJ_Lottery")) || "0";
const _0xde3db4 = (_0x3a399b.isNode() ? process.env.FTEJ_SpringSign : _0x3a399b.getdata("FTEJ_SpringSign")) || "0";
const _0x220fc7 = (_0x3a399b.isNode() ? process.env.FTEJ_DEL_POSTS : _0x3a399b.getdata("FTEJ_DEL_POSTS")) || "1";
const _0xbf8e7d = (_0x3a399b.isNode() ? process.env.FTEJ_TASK_SIGNIN : _0x3a399b.getdata("FTEJ_TASK_SIGNIN")) || "1";
const _0x129dab = (_0x3a399b.isNode() ? process.env.FTEJ_TASK_SHARE : _0x3a399b.getdata("FTEJ_TASK_SHARE")) || "1";
const _0x54e7dc = (_0x3a399b.isNode() ? process.env.FTEJ_TASK_FOLLOW : _0x3a399b.getdata("FTEJ_TASK_FOLLOW")) || "1";
const _0x9a97d7 = (_0x3a399b.isNode() ? process.env.FTEJ_TASK_POST : _0x3a399b.getdata("FTEJ_TASK_POST")) || "1";
let _0x371d97 = null;
let _0xf59edf = null;
function _0x576d59(_0x215096) {
  const _0x1a437a = Buffer.from("Zm9udG9uZS10cmFuc0BseDEwMCQjMzY1", "base64");
  const _0x303481 = Buffer.from("MjAxNjEyMDE=", "base64");
  const _0x441a22 = _0x4ff172.createDecipheriv("des-ede3-cbc", _0x1a437a, _0x303481);
  _0x441a22.setAutoPadding(true);
  const _0x31dcd7 = Buffer.from(_0x215096, "base64");
  let _0x118d58 = _0x441a22.update(_0x31dcd7, undefined, "utf8");
  _0x118d58 += _0x441a22.final("utf8");
  return _0x118d58;
}
function _0x2f4b92(_0x19aa3e) {
  const _0x1953fd = Buffer.from("Zm9udG9uZS10cmFuc0BseDEwMCQjMzY1", "base64");
  const _0x5aadf4 = Buffer.from("MjAxNjEyMDE=", "base64");
  const _0x121520 = _0x4ff172.createCipheriv("des-ede3-cbc", _0x1953fd, _0x5aadf4);
  _0x121520.setAutoPadding(true);
  let _0x2a32bc = _0x121520.update(_0x19aa3e, "utf8", "base64");
  _0x2a32bc += _0x121520.final("base64");
  return _0x2a32bc;
}
async function _0x33d9b5() {
  const _0x1c9388 = {
    deviceType: 1
  };
  const _0x5d934e = await _0x3abc17("/ehomes-new/pkHome/version/getVersion", _0x1c9388);
  _0x5d934e.code === 200 && _0x5d934e.data && _0x5d934e.data.safeKey ? _0x371d97 = _0x5d934e.data.safeKey : _0x371d97 = Date.now() % 1000000;
  return _0x371d97;
}
async function _0x5b72ba(_0x386815, _0x5978b1) {
  return new Promise(_0x5065f6 => {
    const _0x4f8636 = {
      url: "https://czyl.foton.com.cn" + _0x386815,
      headers: {
        encrypt: "yes",
        "Content-Type": "application/x-www-form-urlencoded",
        Connection: "Keep-Alive",
        "User-Agent": "okhttp/3.14.9",
        "Accept-Encoding": "gzip"
      },
      body: _0x5978b1
    };
    _0x3a399b.post(_0x4f8636, async (_0x1f90ca, _0x77a44f, _0x1d38fc) => {
      if (_0x1f90ca) {
        console.log("EST请求错误: " + JSON.stringify(_0x1f90ca));
        return _0x5065f6({
          code: -1,
          success: false,
          msg: "网络错误",
          originalData: null
        });
      } else {
        _0x5065f6({
          code: _0x77a44f.statusCode,
          success: true,
          originalData: _0x1d38fc,
          headers: _0x77a44f.headers
        });
      }
    });
  });
}
async function _0x53bd44() {
  const _0x302eae = {
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
  const _0x17abba = _0x2f4b92(JSON.stringify(_0x302eae));
  const _0x15f258 = await _0x5b72ba("/est/getVersion.action", "jsonParame=" + encodeURIComponent(_0x17abba));
  if (_0x15f258.success && _0x15f258.originalData && _0x15f258.code === 200) {
    try {
      const _0xd261d3 = _0x576d59(_0x15f258.originalData);
      const _0x165a9b = JSON.parse(_0xd261d3);
      if (_0x165a9b.code === 0 && _0x165a9b.data) {
        const _0x2b9a99 = JSON.parse(_0x165a9b.data);
        _0x2b9a99.safeKey ? _0xf59edf = _0x2b9a99.safeKey : _0xf59edf = Date.now() % 1000000;
      } else {
        _0xf59edf = Date.now() % 1000000;
      }
    } catch (_0x3473db) {
      _0xf59edf = Date.now() % 1000000;
    }
  } else {
    _0xf59edf = Date.now() % 1000000;
  }
  return _0xf59edf;
}
async function _0x20d588() {
  if (!_0x30fdbb) {
    console.log("未配置账号信息，请添加环境变量");
    return;
  }
  await _0x33d9b5();
  await _0x53bd44();
  const _0x26c6dc = _0x30fdbb.split("&");
  const _0x1fed7d = 50;
  let _0x70d10 = [];
  for (let _0x47a347 = 0; _0x47a347 < _0x26c6dc.length; _0x47a347 += _0x1fed7d) {
    const _0x508143 = _0x26c6dc.slice(_0x47a347, _0x47a347 + _0x1fed7d);
    console.log("\n\n开始处理第 " + (_0x47a347 / _0x1fed7d + 1) + " 批账号");
    const _0x448904 = await Promise.all(_0x508143.map((_0x19b551, _0x370294) => _0x72b49f(_0x19b551, _0x370294 + 1 + _0x47a347)));
    _0x70d10.push(..._0x448904);
    console.log("————————————");
  }
  const _0x48a664 = _0x70d10.join("");
  _0x48a664 && (console.log(_0x48a664), await _0x1298c5(_0x48a664));
}
!(async () => {
  await _0x20d588();
})().catch(_0x2a197f => _0x3a399b.logErr(_0x2a197f)).finally(() => _0x3a399b.done());
const _0x538518 = (_0x5135c5, _0x5d90dd) => {
  const _0xc4cd01 = Math.floor(Math.random() * (_0x5d90dd - _0x5135c5 + 1)) + _0x5135c5;
  return new Promise(_0x4decd2 => setTimeout(_0x4decd2, _0xc4cd01 * 1000));
};
async function _0x1e1793(_0x32dc57, _0x338924 = 3, _0x563b67 = 1000) {
  let _0x55c7ed = _0x563b67;
  for (let _0x22d675 = 1; _0x22d675 <= _0x338924; _0x22d675++) {
    try {
      return await _0x32dc57();
    } catch (_0x4d8131) {
      if (_0x22d675 === _0x338924) {
        throw _0x4d8131;
      }
      console.log("✘第 " + _0x22d675 + " 次尝试失败: " + _0x4d8131.message + _0x55c7ed / 1000 + "秒后重试");
      await new Promise(_0x531c89 => setTimeout(_0x531c89, _0x55c7ed));
      _0x55c7ed *= 2;
    }
  }
}
async function _0x1dbb9e(_0x4d9b07, _0x3cc0fa, _0xf694b7, _0x40298d, _0x416d3e) {
  try {
    const _0x247ea8 = await _0x5ccb9a("/shareCars/validateToken.action", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Referer: "https://czyl.foton.com.cn/shareCars/activity/luckDraw/index.html?ftejMemberId=" + _0x4d9b07 + "&encryptedMemberId=" + _0x3cc0fa + "&channel=app",
        Cookie: "FOTONTGT=" + _0x40298d
      },
      body: "ticketName=FOTONTGT&ticketValue=" + _0x40298d.trim()
    });
    if (!_0x247ea8.headers || !_0x247ea8.headers["set-cookie"]) {
      throw new Error("[" + _0x416d3e + "]获取 HWWAFSESID 失败");
    }
    const _0x41d36a = _0x247ea8.headers["set-cookie"];
    const _0x5f2540 = _0x1f59a2(_0x41d36a.find(_0x1ee4b3 => _0x1ee4b3.startsWith("SESSION=")));
    const _0x125bdd = _0x1f59a2(_0x41d36a.find(_0x7041b => _0x7041b.startsWith("HWWAFSESID=")));
    const _0x2b062c = _0x1f59a2(_0x41d36a.find(_0x34bb03 => _0x34bb03.startsWith("HWWAFSESTIME=")));
    for (let _0x56aa1d = 1; _0x56aa1d <= 5; _0x56aa1d++) {
      await _0x538518(5, 10);
      const _0x3a9ef2 = await _0x5ccb9a("/shareCars/turnTable/turnTableLottery2nd.action", {
        method: "POST",
        headers: {
          Accept: "application/json, text/javascript, */*; q=0.01",
          "X-Requested-With": "XMLHttpRequest",
          "User-Agent": "Mozilla/5.0 (Linux; Android 14; Mobile)",
          Referer: "https://czyl.foton.com.cn/shareCars/activity/luckDraw/index.html?ftejMemberId=" + _0x4d9b07 + "&encryptedMemberId=" + _0x3cc0fa + "&channel=app",
          Cookie: "SESSION=" + _0x5f2540 + "; FOTONTGT=" + _0x40298d + "; HWWAFSESID=" + _0x125bdd + "; HWWAFSESTIME=" + _0x2b062c
        },
        body: {}
      });
      const _0x793f9 = _0x3a9ef2.data?.["msg"] || "未知错误";
      console.log("[" + _0x416d3e + "]第" + _0x56aa1d + "次抽奖: " + _0x793f9);
      if (_0x793f9.includes("每天最多参加5次")) {
        console.log("[" + _0x416d3e + "]已达到每日抽奖上限");
        break;
      }
    }
  } catch (_0x4c488f) {
    console.error("[" + _0x416d3e + "]抽奖失败: " + _0x4c488f.message);
  }
}
async function _0x508754(_0x11a4c1, _0x1c8e7b, _0x3474ec, _0xbce70a, _0x40e6a6) {
  try {
    const _0x37bcde = await _0x5ccb9a("/shareCars/validateToken.action", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Referer: "https://czyl.foton.com.cn/shareCars/activity/interactCenter250401/index.html?ftejMemberId=" + _0x11a4c1 + "&encryptedMemberId=" + _0x1c8e7b + "&channel=app",
        Cookie: "FOTONTGT=" + _0xbce70a
      },
      body: "ticketName=FOTONTGT&ticketValue=" + _0xbce70a.trim()
    });
    if (!_0x37bcde.headers || !_0x37bcde.headers["set-cookie"]) {
      throw new Error("[" + _0x40e6a6 + "]春日抽奖 => 获取 COOKIE 失败");
    }
    const _0x3248f2 = _0x37bcde.headers["set-cookie"];
    const _0x3d96a8 = _0x1f59a2(_0x3248f2.find(_0x3a7b5e => _0x3a7b5e.startsWith("SESSION=")));
    const _0x153b5c = _0x1f59a2(_0x3248f2.find(_0x2e6e8d => _0x2e6e8d.startsWith("HWWAFSESID=")));
    const _0x53b5d4 = _0x1f59a2(_0x3248f2.find(_0x46b02d => _0x46b02d.startsWith("HWWAFSESTIME=")));
    for (let _0xace9a8 = 1; _0xace9a8 <= 5; _0xace9a8++) {
      await _0x538518(5, 10);
      const _0x4e4e1f = await _0x5ccb9a("/shareCars/c250401/luckyDraw.action", {
        method: "POST",
        headers: {
          Accept: "application/json, text/javascript, */*; q=0.01",
          "X-Requested-With": "XMLHttpRequest",
          "User-Agent": "Mozilla/5.0 (Linux; Android 14; Mobile)",
          Referer: "https://czyl.foton.com.cn/shareCars/activity/interactCenter250401/index.html?ftejMemberId=" + _0x11a4c1 + "&encryptedMemberId=" + _0x1c8e7b + "&channel=app",
          Cookie: "SESSION=" + _0x3d96a8 + "; FOTONTGT=" + _0xbce70a + "; HWWAFSESID=" + _0x153b5c + "; HWWAFSESTIME=" + _0x53b5d4
        },
        body: "encryptMemberId=" + _0x1c8e7b + "&activityNum=250401"
      });
      const _0xe213c7 = _0x4e4e1f.data?.["msg"] || "未知错误";
      console.log("[" + _0x40e6a6 + "]春日第" + _0xace9a8 + "抽: " + _0xe213c7);
      if (_0xe213c7.includes("没有抽奖次数")) {
        console.log("[" + _0x40e6a6 + "]暂无抽奖次数，跳过");
        break;
      }
    }
  } catch (_0x96308d) {
    console.error("[" + _0x40e6a6 + "]春日抽奖异常：" + _0x96308d.message);
  }
}
async function _0x14ef91(_0x3931df, _0x14b772, _0x27eccc, _0xc46b68, _0x3a05de) {
  try {
    const _0x41afc4 = await _0x5ccb9a("/shareCars/validateToken.action", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Referer: "https://czyl.foton.com.cn/shareCars/activity/interactCenter250401/index.html?ftejMemberId=" + _0x3931df + "&encryptedMemberId=" + _0x14b772 + "&channel=app",
        Cookie: "FOTONTGT=" + _0xc46b68
      },
      body: "ticketName=FOTONTGT&ticketValue=" + _0xc46b68.trim()
    });
    if (!_0x41afc4.headers || !_0x41afc4.headers["set-cookie"]) {
      throw new Error("[" + _0x3a05de + "]春日签到 => 获取 COOKIE 失败");
    }
    const _0x156eb6 = _0x41afc4.headers["set-cookie"];
    const _0x32789d = _0x1f59a2(_0x156eb6.find(_0x2e55e3 => _0x2e55e3.startsWith("SESSION=")));
    const _0x5a79bd = _0x1f59a2(_0x156eb6.find(_0x37aa31 => _0x37aa31.startsWith("HWWAFSESID=")));
    const _0xe1ad4c = _0x1f59a2(_0x156eb6.find(_0x1cf8cb => _0x1cf8cb.startsWith("HWWAFSESTIME=")));
    await _0x538518(5, 10);
    const _0x8a523c = await _0x5ccb9a("/shareCars/c250401/sign.action", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Requested-With": "XMLHttpRequest",
        "User-Agent": "Mozilla/5.0 (Linux; Android 14; Mobile)",
        Cookie: "SESSION=" + _0x32789d + "; FOTONTGT=" + _0xc46b68 + "; HWWAFSESID=" + _0x5a79bd + "; HWWAFSESTIME=" + _0xe1ad4c
      },
      body: "encryptMemberId=" + _0x14b772
    });
    _0x8a523c.data?.["code"] === 0 ? console.log("[" + _0x3a05de + "]春日签到成功 => " + (_0x8a523c.data?.["msg"] || "")) : console.log("[" + _0x3a05de + "]春日签到失败 => " + (_0x8a523c.data?.["msg"] || "未知错误"));
  } catch (_0x2ff2e2) {
    console.error("[" + _0x3a05de + "]春日签到异常：" + _0x2ff2e2.message);
  }
}
function _0x5650ad(_0x105295) {
  if (!_0x105295 || typeof _0x105295 !== "string") {
    return false;
  }
  const _0x448a30 = _0x105295.split(" ")[0];
  const _0x52020e = new Date();
  const _0x40ba88 = _0x52020e.getFullYear();
  const _0x16457b = String(_0x52020e.getMonth() + 1).padStart(2, "0");
  const _0x4f595d = String(_0x52020e.getDate()).padStart(2, "0");
  const _0x12ff1e = _0x40ba88 + "-" + _0x16457b + "-" + _0x4f595d;
  return _0x448a30 === _0x12ff1e;
}
async function _0x4d0337(_0x286230, _0x48cab3, _0x366e34, _0x5add7b = 1, _0x4f5559 = 10) {
  const _0xab1eeb = {
    memberId: _0x286230.memberID,
    userId: _0x286230.uid,
    userType: "61",
    uid: _0x286230.uid,
    mobile: _0x48cab3,
    tel: _0x48cab3,
    phone: _0x48cab3,
    brandName: "",
    seriesName: "",
    token: "ebf76685e48d4e14a9de6fccc76483e3",
    safeEnc: Date.now() - (_0xf59edf || 0),
    businessId: 1,
    pageNumber: _0x5add7b,
    pageSize: _0x4f5559,
    type: 1
  };
  const _0xf05c50 = await _0x4955f2("/ehomes-new/ehomesCommunity/api/mine/myPost", _0xab1eeb);
  return _0xf05c50.code === 200 && _0xf05c50.data && Array.isArray(_0xf05c50.data) ? _0xf05c50.data : null;
}
async function _0x3b3dba(_0x3ed40d, _0x544bfd, _0x439a3e, _0x5c2b90) {
  let _0xc66ca3 = _0x3ed40d.postId;
  let _0x4bb04e = "未知时间";
  if (_0x3ed40d.createTime && typeof _0x3ed40d.createTime === "string") {
    _0x4bb04e = _0x3ed40d.createTime;
  } else {
    _0x3ed40d.createTime && (_0x4bb04e = new Date(parseInt(_0x3ed40d.createTime)).toLocaleString());
  }
  const _0x7657e7 = {
    memberId: _0x544bfd.memberID,
    userId: _0x544bfd.uid,
    userType: "61",
    uid: _0x544bfd.uid,
    mobile: _0x439a3e,
    tel: _0x439a3e,
    brandName: "",
    seriesName: "",
    token: "",
    safeEnc: Date.now() - (_0xf59edf || 0),
    postId: _0x3ed40d.postId,
    businessId: 1
  };
  const _0x1f613c = await _0x4955f2("/ehomes-new/ehomesCommunity/api/mine/delete", _0x7657e7);
  !(_0x1f613c.code === 200);
  await _0x538518(2, 5);
}
async function _0x48eec5(_0x4cf7bb, _0x32ea97, _0x4be36b) {
  let _0x33a019 = 1;
  const _0xe94bdf = 10;
  let _0x5dc9e8 = true;
  const _0x306959 = [];
  while (_0x5dc9e8) {
    const _0x224854 = await _0x4d0337(_0x4cf7bb, _0x32ea97, _0x4be36b, _0x33a019, _0xe94bdf);
    if (_0x224854 && _0x224854.length > 0) {
      for (const _0x4c88a6 of _0x224854) {
        if (!_0x4c88a6.createTime || !_0x4c88a6.postId) {
          console.log("[" + _0x4be36b + "]帖子数据不完整，跳过: " + JSON.stringify(_0x4c88a6));
          continue;
        }
        if (!_0x5650ad(_0x4c88a6.createTime)) {
          _0x306959.push(_0x4c88a6);
        }
      }
      _0x224854.length < _0xe94bdf ? _0x5dc9e8 = false : (_0x33a019++, await _0x538518(1, 3));
    } else {
      _0x5dc9e8 = false;
    }
  }
  if (_0x306959.length === 0) {
    console.log("[" + _0x4be36b + "]删帖结果：未找到非今日帖子");
    return;
  }
  for (const _0x5aee38 of _0x306959) {
    await _0x3b3dba(_0x5aee38, _0x4cf7bb, _0x32ea97, _0x4be36b);
  }
  console.log("[" + _0x4be36b + "]删帖结果：非今日帖子清理完毕");
}
function _0x1f59a2(_0xe4df9e) {
  return _0xe4df9e ? _0xe4df9e.split(";")[0].split("=")[1] : "";
}
async function _0xe33e52(_0xfe80b, _0x716ded, _0x455dfd) {
  const _0x1c48fd = "pika_cache_v2_" + _0xfe80b;
  const _0x325f6f = _0xfe80b.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
  let _0xf5074a = _0x3a399b.getdata(_0x1c48fd);
  if (_0xf5074a) {
    try {
      const _0xef570a = JSON.parse(_0xf5074a);
      await _0x538518(1, 3);
      const _0x2c7327 = await _0x450db2("/ehomes-new/pkHome/api/bonus/signActivity2nd", {
        memberId: _0xef570a.pkMemberComplexCode,
        memberID: _0xef570a.pkMemberID,
        mobile: _0xfe80b,
        token: _0xef570a.pkToken,
        vin: "",
        safeEnc: Date.now() - (_0x371d97 || 0)
      }, _0xef570a.pkToken);
      if (_0x2c7327.code === 200 && _0x2c7327.data) {
        if (_0x2c7327.data.integral !== null && typeof _0x2c7327.data.integral !== "undefined") {
          return "[" + _0x455dfd + "]皮卡生活签到结果：获得" + _0x2c7327.data.integral + "积分";
        } else {
          if (_0x2c7327.data.msg && (_0x2c7327.data.msg.includes("您今日已签到成功") || _0x2c7327.data.msg.includes("已签到") || _0x2c7327.data.msg.includes("今天已经签过到了") || _0x2c7327.data.msg === "亲，您今天已经签过到了！")) {
            return "[" + _0x455dfd + "]皮卡生活签到结果：今日已签到 (使用缓存)";
          } else {
            console.log("[" + _0x455dfd + "]皮卡生活缓存签到响应未知: " + _0x2c7327.data.msg + ", 清除缓存并重试登录");
            _0x3a399b.setdata("", _0x1c48fd);
          }
        }
      } else {
        _0x2c7327.code === 500 && _0x2c7327.msg && _0x2c7327.msg.includes("用户令牌已过期") ? (console.log("[" + _0x455dfd + "]皮卡生活缓存令牌已过期, 清除缓存并重试登录"), _0x3a399b.setdata("", _0x1c48fd)) : (console.log("[" + _0x455dfd + "]皮卡生活缓存签到失败 (Code: " + _0x2c7327.code + ", Msg: " + _0x2c7327.msg + "), 清除缓存并重试登录"), _0x3a399b.setdata("", _0x1c48fd));
      }
    } catch (_0xccbdcb) {
      console.log("[" + _0x455dfd + "]皮卡生活处理缓存签到异常: " + _0xccbdcb + ", 清除缓存并重试登录");
      _0x3a399b.setdata("", _0x1c48fd);
    }
  }
  try {
    const _0x3ebc29 = await _0x3abc17("/ehomes-new/pkHome/api/user/getLoginMember2nd", {
      memberId: "",
      memberID: "",
      mobile: "",
      token: "7fe186bb15ff4426ae84f300f05d9c8d",
      vin: "",
      safeEnc: Date.now() - (_0x371d97 || 0),
      name: _0xfe80b,
      password: _0x716ded,
      position: "",
      deviceId: "SP1A.210812.016",
      deviceBrand: "realme",
      brandName: "RMX3562",
      deviceType: "0",
      versionCode: "21",
      versionName: "V1.1.10"
    });
    if (_0x3ebc29.code !== 200 || !_0x3ebc29.data) {
      throw new Error("登录失败，" + (_0x3ebc29.msg || "响应数据为空或登录接口返回错误"));
    }
    const {
      memberComplexCode: _0x509833,
      token: _0x153e37,
      user: _0x1765e6
    } = _0x3ebc29.data;
    const _0xd3708a = _0x1765e6 && _0x1765e6.memberNo;
    if (!_0x509833 || !_0xd3708a || !_0x153e37) {
      throw new Error("登录成功，但获取到的关键凭据不完整");
    }
    const _0x461377 = {
      pkMemberComplexCode: _0x509833,
      pkMemberID: _0xd3708a,
      pkToken: _0x153e37
    };
    _0x3a399b.setdata(JSON.stringify(_0x461377), _0x1c48fd);
    await _0x538518(1, 3);
    const _0x59b1b9 = await _0x450db2("/ehomes-new/pkHome/api/bonus/signActivity2nd", {
      memberId: _0x509833,
      memberID: _0xd3708a,
      mobile: _0xfe80b,
      token: _0x153e37,
      vin: "",
      safeEnc: Date.now() - (_0x371d97 || 0)
    }, _0x153e37);
    if (_0x59b1b9.code === 200 && _0x59b1b9.data) {
      if (_0x59b1b9.data.integral !== null && typeof _0x59b1b9.data.integral !== "undefined") {
        return "[" + _0x455dfd + "]皮卡生活签到结果：获得" + _0x59b1b9.data.integral + "积分";
      } else {
        if (_0x59b1b9.data.msg && (_0x59b1b9.data.msg.includes("您今日已签到成功") || _0x59b1b9.data.msg.includes("已签到") || _0x59b1b9.data.msg.includes("今天已经签过到了") || _0x59b1b9.data.msg === "亲，您今天已经签过到了！")) {
          return "[" + _0x455dfd + "]皮卡生活签到结果：今日已签到 (重新登录)";
        } else {
          throw new Error("重新登录后签到响应正常但未能匹配已知成功消息: \"" + (_0x59b1b9.data.msg || "无具体消息") + "\"");
        }
      }
    } else {
      throw new Error("重新登录后签到失败 (Code: " + _0x59b1b9.code + ", Msg: " + (_0x59b1b9.msg || "未知错误") + ")");
    }
  } catch (_0x3df3ca) {
    return "[" + _0x455dfd + "]皮卡生活签到结果：" + _0x3df3ca.message;
  }
}
async function _0x54c201(_0x46d1ce, _0x46f96b, _0x37b4af, _0x6a327e) {
  try {
    const _0x5572a2 = {
      memberId: _0x46d1ce,
      userId: _0x46f96b,
      userType: "61",
      uid: _0x46f96b,
      mobile: _0x37b4af,
      tel: _0x37b4af,
      phone: _0x37b4af,
      brandName: "",
      seriesName: "",
      token: "ebf76685e48d4e14a9de6fccc76483e3",
      safeEnc: Date.now() - (_0xf59edf || 0),
      businessId: 1
    };
    const _0x2a5d32 = await _0x4955f2("/ehomes-new/homeManager/api/Member/findMemberInfo2", _0x5572a2);
    return _0x2a5d32.code === 200 && _0x2a5d32.data && _0x2a5d32.data.nickName ? (console.log("[" + _0x6a327e + "]昵称: " + _0x2a5d32.data.nickName), _0x2a5d32.data.nickName) : "";
  } catch (_0x12ce5a) {
    return "";
  }
}
async function _0x481a19(_0x1f097b, _0x577a11, _0x4adfc9, _0x9421a3, _0x5557f2) {
  try {
    const _0x250b74 = {
      memberId: _0x1f097b,
      userId: _0x577a11,
      userType: "61",
      uid: _0x577a11,
      mobile: _0x4adfc9,
      tel: _0x4adfc9,
      phone: _0x4adfc9,
      brandName: "",
      seriesName: "",
      token: "ebf76685e48d4e14a9de6fccc76483e3",
      safeEnc: Date.now() - (_0xf59edf || 0),
      businessId: 1,
      activityNumber: "open",
      requestType: "0",
      type: "5",
      userNumber: _0x1f097b,
      channel: "1",
      name: _0x9421a3,
      remark: "打开APP"
    };
    const _0x30b75c = await _0x4955f2("/ehomes-new/homeManager/api/share/corsToActicity", _0x250b74);
    _0x30b75c.code === 200 ? console.log("[" + _0x5557f2 + "]打开APP请求成功") : console.log("[" + _0x5557f2 + "]打开APP请求失败: " + _0x30b75c.msg);
  } catch (_0x108466) {
    console.error("[" + _0x5557f2 + "]打开APP请求失败: " + _0x108466.message);
  }
}
async function _0x224197(_0x3a2c7c, _0x58cc27, _0x52c012, _0x5f5960) {
  try {
    const _0x2c14e3 = {
      memberId: _0x3a2c7c,
      userId: _0x58cc27,
      userType: "61",
      uid: _0x58cc27,
      mobile: _0x52c012,
      tel: _0x52c012,
      phone: _0x52c012,
      brandName: "",
      seriesName: "",
      token: "ebf76685e48d4e14a9de6fccc76483e3",
      safeEnc: Date.now() - (_0xf59edf || 0),
      businessId: null,
      device: "ANDROID",
      deviceToken: "ApQrEcr_yjuLFVk8vR7x3FUtFd9NZqd4BTZmW6iWblPR"
    };
    const _0x18fe1c = await _0x4955f2("/ehomes-new/homeManager/api/message/saveUserDeviceInfo", _0x2c14e3);
    _0x18fe1c.code === 200 ? console.log("[" + _0x5f5960 + "]保存友盟设备信息成功") : console.log("[" + _0x5f5960 + "]保存友盟设备信息失败: " + _0x18fe1c.msg);
  } catch (_0x15b705) {
    console.error("[" + _0x5f5960 + "]保存友盟设备信息失败: " + _0x15b705.message);
  }
}
async function _0x72b49f(_0x289522, _0x5ef442) {
  try {
    let _0x460075;
    let _0x2f17ae;
    if (_0x289522.includes("#")) {
      [_0x460075, _0x2f17ae] = _0x289522.split("#");
    } else {
      let _0x349753 = atob(_0x289522);
      [_0x460075, _0x2f17ae] = _0x349753.split("#");
    }
    const _0x45e951 = _0x460075.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
    console.log("[" + _0x5ef442 + "]" + _0x45e951 + " 处理中");
    console.log("————————————");
    const _0x3f2bd6 = await _0x1e1793(async () => {
      return await _0x4627e0("/ehomes-new/homeManager/getLoginMember", {
        password: _0x2f17ae,
        version_name: "7.3.23",
        version_auth: "",
        device_id: "17255ffa35cee609e2a8963a4233f13b",
        device_model: "realmeRMX3562",
        ip: "",
        name: _0x460075,
        version_code: "316",
        deviceSystemVersion: "11",
        device_type: "0"
      });
    });
    if (_0x3f2bd6.code !== 200) {
      throw new Error("福田e家登录失败: " + _0x3f2bd6.msg);
    }
    const {
      uid: _0x1db162,
      memberComplexCode: _0x2e9324,
      memberID: _0x56a980,
      memberId: _0x1a043e,
      ticketValue: _0x880b92
    } = _0x3f2bd6.data;
    const _0x1dd09b = await _0x54c201(_0x2e9324, _0x1db162, _0x460075, _0x5ef442);
    _0x3f2bd6.data.nickName = _0x1dd09b;
    await _0x481a19(_0x56a980, _0x1db162, _0x460075, _0x1dd09b, _0x5ef442);
    await _0x224197(_0x56a980, _0x1db162, _0x460075, _0x5ef442);
    let _0x53c294 = await _0x1e1793(async () => {
      return await _0x4955f2("/ehomes-new/homeManager/api/Member/getTaskList", {
        memberId: _0x56a980,
        userId: _0x1db162,
        userType: "61",
        uid: _0x1db162,
        mobile: _0x460075,
        tel: _0x460075,
        phone: _0x460075,
        brandName: "",
        seriesName: "",
        token: "ebf76685e48d4e14a9de6fccc76483e3",
        safeEnc: Date.now() - (_0xf59edf || 0),
        businessId: 1
      });
    });
    if (_0x53c294.code === 200 && _0x53c294.data) {
      for (const _0x1057de of _0x53c294.data) {
        let _0x37f20d = false;
        if (_0x1057de.ruleName === "签到") {
          _0xbf8e7d !== "1" && (_0x37f20d = true);
        } else {
          if (_0x1057de.ruleName === "保客分享") {
            _0x129dab !== "1" && (_0x37f20d = true);
          } else {
            if (_0x1057de.ruleName === "关注") {
              _0x54e7dc !== "1" && (_0x37f20d = true);
            } else {
              _0x1057de.ruleName === "发帖" && _0x9a97d7 !== "1" && (_0x37f20d = true);
            }
          }
        }
        if (_0x37f20d) {
          continue;
        }
        if (_0x1057de.isComplete === "1") {
          console.log("[" + _0x5ef442 + "]任务\"" + _0x1057de.ruleName + "\"已完成，跳过");
          continue;
        }
        if (_0x1057de.isComplete === "1") {
          console.log("[" + _0x5ef442 + "]任务\"" + _0x1057de.ruleName + "\"已完成，跳过");
          continue;
        }
        if (_0x1057de.ruleName === "签到") {
          if (_0xbf8e7d === "1") {
            if (_0x3f2bd6.data.signIn === "未签到") {
              await _0x538518(45, 90);
              const _0x487b04 = await _0x4955f2("/ehomes-new/homeManager/api/bonus/signActivity2nd", {
                memberId: _0x2e9324,
                userId: _0x1db162,
                userType: "61",
                uid: _0x1db162,
                mobile: _0x460075,
                tel: _0x460075,
                phone: _0x460075,
                brandName: "",
                seriesName: "",
                token: "ebf76685e48d4e14a9de6fccc76483e3",
                safeEnc: Date.now() - (_0xf59edf || 0),
                businessId: 1
              });
              console.log("[" + _0x5ef442 + "]福田e家签到结果: " + (_0x487b04.data?.["integral"] ? "获得" + _0x487b04.data.integral + "积分" : _0x487b04.msg));
            } else {
              console.log("[" + _0x5ef442 + "]福田e家当前签到状态: " + _0x3f2bd6.data.signIn + "，跳过签到操作");
            }
          }
        }
        if (_0x1057de.ruleName === "保客分享") {
          if (_0x129dab === "1") {
            await _0x538518(45, 90);
            const _0x37cb75 = "https://finance.foton.com.cn/FONTON_PROD";
            const _0x4c02ba = "Mozilla/5.0 (Linux; Android 15; RMX5060 Build/AP3A.240617.008; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/130.0.6723.58 Mobile Safari/537.36;Umeng4Aplus/1.0.0ftejAndroid";
            const _0x2fc2e8 = "https://finance.foton.com.cn/payingmember/clientHome?tab=1&show=0&memberId=" + _0x56a980 + "&ftejMemberId=" + _0x56a980 + "&encryptedMemberId=" + _0x2e9324 + "&channel=app&mobile=" + _0x460075;
            const _0x570459 = {
              url: _0x37cb75 + "/ehomes-new/ehomesService//api/safeH5/getSafeInfo",
              headers: {
                "Content-Type": "application/json;charset=UTF-8",
                channel: "H5",
                "User-Agent": _0x4c02ba,
                Origin: "https://finance.foton.com.cn",
                "X-Requested-With": "com.foton.almighty",
                Referer: _0x2fc2e8,
                Cookie: "FOTONTGT=" + _0x880b92
              },
              body: JSON.stringify({})
            };
            const _0x3bff1a = await new Promise(_0x1545b2 => {
              _0x3a399b.post(_0x570459, (_0x4e7abc, _0xe7d9c2, _0x5d53bc) => {
                if (_0x4e7abc) {
                  _0x1545b2(null);
                } else {
                  try {
                    const _0x4ad5f1 = JSON.parse(_0x5d53bc);
                    _0x4ad5f1.code === 200 && _0x4ad5f1.data && _0x4ad5f1.data.key ? _0x1545b2(_0x4ad5f1.data.key) : _0x1545b2(null);
                  } catch (_0x2ea934) {
                    _0x1545b2(null);
                  }
                }
              });
            });
            if (_0x3bff1a) {
              const _0x1d6db4 = String(Date.now() - parseInt(_0x3bff1a));
              const _0x2e71dd = {
                memberId: _0x2e9324,
                tel: _0x460075,
                id: _0x1057de.ruleId,
                safeEnc: _0x1d6db4,
                userId: null
              };
              const _0x822155 = {
                url: _0x37cb75 + "/ehomes-new/homeManager//api/bonus/addIntegralForShare",
                headers: {
                  "Content-Type": "application/json;charset=UTF-8",
                  channel: "H5",
                  "User-Agent": _0x4c02ba,
                  Origin: "https://finance.foton.com.cn",
                  "X-Requested-With": "com.foton.almighty",
                  Referer: _0x2fc2e8,
                  Cookie: "FOTONTGT=" + _0x880b92
                },
                body: JSON.stringify(_0x2e71dd)
              };
              await new Promise(_0x5b5a1a => {
                _0x3a399b.post(_0x822155, (_0x2bf9ef, _0x2b35dc, _0x5d31c0) => {
                  if (_0x2bf9ef) {
                    console.log("[" + _0x5ef442 + "]分享任务结果: 请求错误 - " + _0x2bf9ef);
                  } else {
                    try {
                      const _0x4697f3 = JSON.parse(_0x5d31c0);
                      if (_0x4697f3.code === 200 && _0x4697f3.data) {
                        const _0x123d0f = _0x4697f3.data.integral || (_0x4697f3.data.data ? _0x4697f3.data.data.integral : undefined);
                        _0x123d0f !== undefined ? console.log("[" + _0x5ef442 + "]分享任务结果: 获得" + _0x123d0f + "积分") : console.log("[" + _0x5ef442 + "]分享任务结果: " + (_0x4697f3.msg || "成功但未获取到积分信息"));
                      } else {
                        console.log("[" + _0x5ef442 + "]分享任务结果: " + (_0x4697f3.msg || JSON.stringify(_0x4697f3)));
                      }
                    } catch (_0x1d354b) {
                      console.log("[" + _0x5ef442 + "]分享任务结果: 解析响应错误 - " + _0x1d354b);
                    }
                  }
                  _0x5b5a1a();
                });
              });
            } else {
              console.log("[" + _0x5ef442 + "]保客分享：跳过，因获取finance safeKey失败");
            }
          }
        }
        if (_0x1057de.ruleName === "关注") {
          if (_0x54e7dc === "1") {
            await _0x538518(45, 90);
            const _0xde396 = await _0x4955f2("/ehomes-new/ehomesCommunity/api/post/recommendPostList", {
              memberId: _0x56a980,
              userId: _0x1db162,
              userType: "61",
              uid: _0x1db162,
              mobile: _0x460075,
              tel: _0x460075,
              phone: _0x460075,
              brandName: "",
              seriesName: "",
              token: "ebf76685e48d4e14a9de6fccc76483e3",
              safeEnc: Date.now() - (_0xf59edf || 0),
              businessId: 1,
              position: "1",
              pageNumber: "1",
              pageSize: 9
            });
            if (_0xde396.code === 200 && _0xde396.data && _0xde396.data.length > 0) {
              const _0x2843ea = _0xde396.data;
              const _0x6a89c = _0x2843ea[Math.floor(Math.random() * _0x2843ea.length)].memberId;
              await _0x4955f2("/ehomes-new/ehomesCommunity/api/post/follow2nd", {
                memberId: _0x2e9324,
                userId: _0x1db162,
                userType: "61",
                uid: _0x1db162,
                mobile: _0x460075,
                tel: _0x460075,
                phone: _0x460075,
                brandName: "",
                seriesName: "",
                token: "ebf76685e48d4e14a9de6fccc76483e3",
                safeEnc: Date.now() - (_0xf59edf || 0),
                businessId: 1,
                behavior: "1",
                memberIdeds: _0x6a89c,
                navyId: "null"
              });
              console.log("[" + _0x5ef442 + "]关注ID " + _0x6a89c + " 成功");
              await _0x538518(1, 3);
              await _0x4955f2("/ehomes-new/ehomesCommunity/api/post/follow2nd", {
                memberId: _0x2e9324,
                userId: _0x1db162,
                userType: "61",
                uid: _0x1db162,
                mobile: _0x460075,
                tel: _0x460075,
                phone: _0x460075,
                brandName: "",
                seriesName: "",
                token: "ebf76685e48d4e14a9de6fccc76483e3",
                safeEnc: Date.now() - (_0xf59edf || 0),
                businessId: 1,
                behavior: "2",
                memberIdeds: _0x6a89c,
                navyId: "null"
              });
              console.log("[" + _0x5ef442 + "]取关ID " + _0x6a89c + " 成功");
            } else {
              console.log("[" + _0x5ef442 + "]获取推荐帖子列表失败或列表为空，无法执行关注任务: " + (_0xde396.msg || ""));
            }
          }
        }
        if (_0x1057de.ruleName === "发帖") {
          if (_0x9a97d7 === "1") {
            const _0x58abb9 = await _0x4627e0("/ehomes-new/ehomesCommunity/api/post/topicList", {
              memberId: _0x56a980,
              userId: _0x1db162,
              userType: "61",
              uid: _0x1db162,
              mobile: _0x460075,
              tel: _0x460075,
              phone: _0x460075,
              brandName: "",
              seriesName: "",
              token: "ebf76685e48d4e14a9de6fccc76483e3",
              safeEnc: Date.now() - (_0xf59edf || 0),
              businessId: 1
            });
            if (_0x58abb9.code === 200 && _0x58abb9.data && _0x58abb9.data.top && _0x58abb9.data.top.length > 0) {
              const _0x15b11d = _0x58abb9.data.top;
              const _0xee8b54 = _0x15b11d[Math.floor(Math.random() * _0x15b11d.length)].topicId;
              const _0x2bdfd0 = (await _0x4b6ab5()) || "生活就像一杯茶，不会苦一辈子，但要学会等待她的甘甜。";
              await _0x538518(45, 90);
              const _0x2360db = await _0x4955f2("/ehomes-new/ehomesCommunity/api/post/addJson2nd", {
                memberId: _0x2e9324,
                userId: _0x1db162,
                userType: "61",
                uid: _0x1db162,
                mobile: _0x460075,
                tel: _0x460075,
                phone: _0x460075,
                brandName: "",
                seriesName: "",
                token: "ebf76685e48d4e14a9de6fccc76483e3",
                safeEnc: Date.now() - (_0xf59edf || 0),
                businessId: 1,
                content: _0x2bdfd0,
                postType: 1,
                topicIdList: [_0xee8b54],
                uploadFlag: 3,
                title: "",
                urlList: []
              });
              _0x2360db.code === 200 ? console.log("[" + _0x5ef442 + "]发帖成功") : console.log("[" + _0x5ef442 + "]发帖失败: " + (_0x2360db.msg || "未知错误"));
            } else {
              console.log("[" + _0x5ef442 + "]获取话题列表失败或列表为空，无法执行发帖任务: " + (_0x58abb9.msg || ""));
            }
          }
        }
      }
    } else {
      console.log("[" + _0x5ef442 + "]获取任务列表失败或列表为空: " + (_0x53c294.msg || ""));
    }
    if (_0x4a0378 === "1") {
      const _0x45d5c0 = await _0xe33e52(_0x460075, _0x2f17ae, _0x5ef442);
      console.log(_0x45d5c0);
    }
    if (_0xde3db4 === "1") {
      _0x880b92 ? await _0x508754(_0x56a980, _0x2e9324, _0x460075, _0x880b92, _0x5ef442) : console.log("[" + _0x5ef442 + "]缺少ticketValue, 无法进行春日抽奖");
    }
    if (_0x114f79 === "1") {
      _0x880b92 ? await _0x1dbb9e(_0x56a980, _0x2e9324, _0x460075, _0x880b92, _0x5ef442) : console.log("[" + _0x5ef442 + "]缺少ticketValue, 无法进行积分转盘抽奖");
    }
    _0x220fc7 === "1" && (await _0x48eec5(_0x3f2bd6.data, _0x460075, _0x5ef442));
    const _0x4ce10a = await _0x4955f2("/ehomes-new/homeManager/api/Member/findMemberPointsInfo", {
      memberId: _0x56a980,
      userId: _0x1db162,
      userType: "61",
      uid: _0x1db162,
      mobile: _0x460075,
      tel: _0x460075,
      phone: _0x460075,
      brandName: "",
      seriesName: "",
      token: "ebf76685e48d4e14a9de6fccc76483e3",
      safeEnc: Date.now() - (_0xf59edf || 0),
      businessId: 1
    });
    return "[" + _0x5ef442 + "]" + _0x45e951 + " 当前积分：" + (_0x4ce10a.data?.["pointValue"] !== undefined ? _0x4ce10a.data.pointValue : "查询失败") + "\n";
  } catch (_0x36687f) {
    let _0x137409;
    if (typeof phone === "string" && phone) {
      _0x137409 = phone.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
    } else {
      if (typeof _0x289522 === "string" && _0x289522) {
        const _0x4ee896 = _0x289522.split("#");
        const _0x2400d2 = _0x4ee896[0];
        if (_0x2400d2 && _0x2400d2.length > 7 && /^\d+$/.test(_0x2400d2)) {
          _0x137409 = _0x2400d2.substring(0, 3) + "****" + _0x2400d2.substring(_0x2400d2.length - 4);
        } else {
          _0x2400d2 ? _0x137409 = "" : _0x137409 = "";
        }
      } else {
        _0x137409 = "";
      }
    }
    console.error("[" + _0x5ef442 + "]" + _0x36687f.message);
    return "[" + _0x5ef442 + "]" + _0x36687f.message + "\n";
  }
}
async function _0x4627e0(_0xb868ab, _0x397227) {
  return new Promise(_0x18b564 => {
    const _0x402f37 = {
      url: "https://czyl.foton.com.cn" + _0xb868ab,
      headers: {
        "content-type": "application/json;charset=utf-8",
        Connection: "Keep-Alive",
        "user-agent": "okhttp/3.14.9",
        "Accept-Encoding": "gzip"
      },
      body: JSON.stringify(_0x397227)
    };
    _0x3a399b.post(_0x402f37, async (_0x35c029, _0x34faed, _0xf27f46) => {
      try {
        if (_0x35c029) {
          console.log("" + JSON.stringify(_0x35c029));
          console.log(_0x3a399b.name + " API请求失败，请检查网路重试");
          return _0x18b564({
            code: 500
          });
        } else {
          await _0x3a399b.wait(2000);
          _0x18b564(JSON.parse(_0xf27f46));
        }
      } catch (_0x2c1cc2) {
        _0x3a399b.logErr(_0x2c1cc2, _0x34faed);
        _0x18b564({
          code: 500
        });
      }
    });
  });
}
async function _0x3abc17(_0x4e72d2, _0x5ca6ef) {
  return new Promise(_0xcb0741 => {
    const _0x3e1c58 = {
      url: "https://czyl.foton.com.cn" + _0x4e72d2,
      headers: {
        "content-type": "application/json;charset=utf-8",
        channel: "1",
        "Accept-Encoding": "gzip"
      },
      body: JSON.stringify(_0x5ca6ef)
    };
    _0x3a399b.post(_0x3e1c58, async (_0x5d1e43, _0x2b5f45, _0x2a5345) => {
      try {
        if (_0x5d1e43) {
          console.log("" + JSON.stringify(_0x5d1e43));
          console.log(_0x3a399b.name + " API请求失败，请检查网路重试，跳过当前账号");
          return _0xcb0741({
            code: 500
          });
        } else {
          await _0x3a399b.wait(2000);
          _0xcb0741(JSON.parse(_0x2a5345));
        }
      } catch (_0x3e538e) {
        _0x3a399b.logErr(_0x3e538e, _0x2b5f45);
        _0xcb0741({
          code: 500
        });
      }
    });
  });
}
async function _0x4955f2(_0x4de301, _0x440a90) {
  return new Promise(_0x415b4f => {
    const _0x4c08d7 = {
      url: "https://czyl.foton.com.cn" + _0x4de301,
      headers: {
        "content-type": "application/json;charset=utf-8",
        Connection: "Keep-Alive",
        token: "",
        "app-key": "7918d2d1a92a02cbc577adb8d570601e72d3b640",
        "app-token": "58891364f56afa1b6b7dae3e4bbbdfbfde9ef489",
        "user-agent": "web",
        "Accept-Encoding": "gzip"
      },
      body: JSON.stringify(_0x440a90)
    };
    _0x3a399b.post(_0x4c08d7, async (_0x2a2123, _0xb05f33, _0x41b6db) => {
      try {
        if (_0x2a2123) {
          console.log("" + JSON.stringify(_0x2a2123));
          console.log(_0x3a399b.name + " API请求失败，请检查网路重试，跳过该请求");
          return _0x415b4f({
            code: 500
          });
        } else {
          await _0x3a399b.wait(2000);
          _0x415b4f(JSON.parse(_0x41b6db));
        }
      } catch (_0x4b4817) {
        _0x3a399b.logErr(_0x4b4817, _0xb05f33);
        _0x415b4f({
          code: 500
        });
      }
    });
  });
}
async function _0x5ccb9a(_0x9ca5f2, _0x348d81) {
  return new Promise(_0x24a29a => {
    const _0x28cd12 = "https://czyl.foton.com.cn" + _0x9ca5f2;
    const _0x36852e = {
      url: _0x28cd12,
      ..._0x348d81
    };
    _0x348d81.body && typeof _0x348d81.body === "object" && !Buffer.isBuffer(_0x348d81.body) && !(_0x348d81.headers && _0x348d81.headers["Content-Type"] && _0x348d81.headers["Content-Type"].includes("x-www-form-urlencoded")) && (_0x36852e.body = JSON.stringify(_0x348d81.body));
    _0x3a399b.post(_0x36852e, async (_0x5ac207, _0xb8f5e1, _0x383974) => {
      try {
        if (_0x5ac207) {
          console.log("❌ API请求失败: " + JSON.stringify(_0x5ac207));
          return _0x24a29a({
            code: 500,
            msg: _0x5ac207.message
          });
        } else {
          await _0x3a399b.wait(2000);
          _0x24a29a({
            code: _0xb8f5e1.statusCode,
            headers: _0xb8f5e1.headers,
            data: JSON.parse(_0x383974)
          });
        }
      } catch (_0x482d53) {
        console.log("❌ 解析响应失败: " + _0x482d53.message);
        _0x24a29a({
          code: _0xb8f5e1 ? _0xb8f5e1.statusCode : 500,
          headers: _0xb8f5e1 ? _0xb8f5e1.headers : {},
          msg: _0x482d53.message,
          rawData: _0x383974
        });
      }
    });
  });
}
async function _0x450db2(_0x22ac25, _0x12578e, _0x542e75) {
  return new Promise(_0x4c5c30 => {
    const _0x8247fa = {
      url: "https://czyl.foton.com.cn" + _0x22ac25,
      headers: {
        "content-type": "application/json;charset=utf-8",
        channel: "1",
        token: _0x542e75,
        "Accept-Encoding": "gzip"
      },
      body: JSON.stringify(_0x12578e)
    };
    _0x3a399b.post(_0x8247fa, async (_0x17a670, _0x545094, _0x5b4d13) => {
      try {
        if (_0x17a670) {
          console.log("" + JSON.stringify(_0x17a670));
          console.log(_0x3a399b.name + " API请求失败，请检查网络重试，跳过该请求");
          return _0x4c5c30({
            code: 500
          });
        } else {
          await _0x3a399b.wait(2000);
          _0x4c5c30(JSON.parse(_0x5b4d13));
        }
      } catch (_0x28a8b6) {
        _0x3a399b.logErr(_0x28a8b6, _0x545094);
        _0x4c5c30({
          code: 500
        });
      }
    });
  });
}
async function _0x4b6ab5() {
  return new Promise(_0x40be72 => {
    const _0xc1bafa = {
      url: "http://api.btstu.cn/yan/api.php",
      headers: {}
    };
    _0x3a399b.get(_0xc1bafa, async (_0x2fb23a, _0x99906e, _0x29c4ba) => {
      try {
        if (_0x2fb23a) {
          console.log("" + JSON.stringify(_0x2fb23a));
          console.log(_0x3a399b.name + " 获取随机文本失败，使用默认文本");
          return _0x40be72("如果觉得没有朋友，就去找喜欢的人表白，对方会提出和你做朋友的。");
        } else {
          await _0x3a399b.wait(2000);
          _0x40be72(_0x29c4ba);
        }
      } catch (_0x377109) {
        _0x3a399b.logErr(_0x377109, _0x99906e);
        _0x40be72("如果觉得没有朋友，就去找喜欢的人表白，对方会提出和你做朋友的。");
      }
    });
  });
}
async function _0x1298c5(_0x94e117) {
  if (_0x3a399b.isNode()) {
    let _0x5abf72 = "";
    try {
      _0x5abf72 = require("./sendNotify");
    } catch (_0x3d1142) {
      try {
        _0x5abf72 = require("../sendNotify");
      } catch (_0x4575bd) {
        console.log("sendNotify.js模块加载失败，请确保它在脚本同级目录或上一级目录下");
        return;
      }
    }
    await _0x5abf72.sendNotify(_0x3a399b.name, _0x94e117);
  } else {
    _0x3a399b.msg(_0x3a399b.name, "", _0x94e117);
  }
}
function _0x50c0dd(_0x1c9b95, _0x222ce4) {
  class _0x3fe257 {
    constructor(_0xb4cbc2) {
      this.env = _0xb4cbc2;
    }
    send(_0x35c9ab, _0x2a9700 = "GET") {
      _0x35c9ab = "string" == typeof _0x35c9ab ? {
        url: _0x35c9ab
      } : _0x35c9ab;
      let _0x571f20 = this.get;
      "POST" === _0x2a9700 && (_0x571f20 = this.post);
      return new Promise((_0x52aac8, _0x36ec3e) => {
        _0x571f20.call(this, _0x35c9ab, (_0x23224f, _0x44d07d, _0x39b175) => {
          _0x23224f ? _0x36ec3e(_0x23224f) : _0x52aac8(_0x44d07d);
        });
      });
    }
    get(_0x3ffe91) {
      return this.send.call(this.env, _0x3ffe91);
    }
    post(_0x2a11a9) {
      return this.send.call(this.env, _0x2a11a9, "POST");
    }
  }
  return new class {
    constructor(_0x174221, _0x49c4cd) {
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
      this.name = _0x174221;
      this.http = new _0x3fe257(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x49c4cd);
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
    toObj(_0x1136e0, _0x4529ea = null) {
      try {
        return JSON.parse(_0x1136e0);
      } catch {
        return _0x4529ea;
      }
    }
    toStr(_0x3f79eb, _0x3e432e = null, ..._0x14858c) {
      try {
        return JSON.stringify(_0x3f79eb, ..._0x14858c);
      } catch {
        return _0x3e432e;
      }
    }
    getjson(_0x516d58, _0x3d0a9d) {
      let _0x3268eb = _0x3d0a9d;
      if (this.getdata(_0x516d58)) {
        try {
          _0x3268eb = JSON.parse(this.getdata(_0x516d58));
        } catch {}
      }
      return _0x3268eb;
    }
    setjson(_0x528d61, _0x4bc4c9) {
      try {
        return this.setdata(JSON.stringify(_0x528d61), _0x4bc4c9);
      } catch {
        return false;
      }
    }
    getScript(_0x4461de) {
      return new Promise(_0x2ed3ed => {
        this.get({
          url: _0x4461de
        }, (_0x1e2aec, _0x3f517e, _0x507549) => _0x2ed3ed(_0x507549));
      });
    }
    runScript(_0x574aab, _0x26facb) {
      return new Promise(_0x423cf8 => {
        let _0x3285b5 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x3285b5 = _0x3285b5 ? _0x3285b5.replace(/\n/g, "").trim() : _0x3285b5;
        let _0x443de8 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x443de8 = _0x443de8 ? 1 * _0x443de8 : 20;
        _0x443de8 = _0x26facb && _0x26facb.timeout ? _0x26facb.timeout : _0x443de8;
        const [_0x5c62b7, _0x481385] = _0x3285b5.split("@");
        const _0x1ba863 = {
          url: "http://" + _0x481385 + "/v1/scripting/evaluate",
          body: {
            script_text: _0x574aab,
            mock_type: "cron",
            timeout: _0x443de8
          },
          headers: {
            "X-Key": _0x5c62b7,
            Accept: "*/*"
          },
          timeout: _0x443de8
        };
        this.post(_0x1ba863, (_0x2a46cd, _0x566d29, _0x24d684) => _0x423cf8(_0x24d684));
      }).catch(_0x1ba6d3 => this.logErr(_0x1ba6d3));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x1a5fd5 = this.path.resolve(this.dataFile);
        const _0x3fd668 = this.path.resolve(process.cwd(), this.dataFile);
        const _0x13f79b = this.fs.existsSync(_0x1a5fd5);
        const _0x51fa48 = !_0x13f79b && this.fs.existsSync(_0x3fd668);
        if (!_0x13f79b && !_0x51fa48) {
          return {};
        }
        {
          const _0x48e10c = _0x13f79b ? _0x1a5fd5 : _0x3fd668;
          try {
            return JSON.parse(this.fs.readFileSync(_0x48e10c));
          } catch (_0xfe664e) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x1fe744 = this.path.resolve(this.dataFile);
        const _0x3d4f80 = this.path.resolve(process.cwd(), this.dataFile);
        const _0x3f4bd4 = this.fs.existsSync(_0x1fe744);
        const _0x25ffc2 = !_0x3f4bd4 && this.fs.existsSync(_0x3d4f80);
        const _0x433b54 = JSON.stringify(this.data);
        _0x3f4bd4 ? this.fs.writeFileSync(_0x1fe744, _0x433b54) : _0x25ffc2 ? this.fs.writeFileSync(_0x3d4f80, _0x433b54) : this.fs.writeFileSync(_0x1fe744, _0x433b54);
      }
    }
    lodash_get(_0x4ce9ce, _0x3d6862, _0x2c029c) {
      const _0x5bb060 = _0x3d6862.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x2d1e46 = _0x4ce9ce;
      for (const _0x5afe0e of _0x5bb060) if (_0x2d1e46 = Object(_0x2d1e46)[_0x5afe0e], undefined === _0x2d1e46) {
        return _0x2c029c;
      }
      return _0x2d1e46;
    }
    lodash_set(_0x1d3ebc, _0xd6522f, _0x489c99) {
      Object(_0x1d3ebc) !== _0x1d3ebc || (Array.isArray(_0xd6522f) || (_0xd6522f = _0xd6522f.toString().match(/[^.[\]]+/g) || []), _0xd6522f.slice(0, -1).reduce((_0x40f291, _0x1c9c62, _0x21b237) => Object(_0x40f291[_0x1c9c62]) === _0x40f291[_0x1c9c62] ? _0x40f291[_0x1c9c62] : _0x40f291[_0x1c9c62] = Math.abs(_0xd6522f[_0x21b237 + 1]) >> 0 == +_0xd6522f[_0x21b237 + 1] ? [] : {}, _0x1d3ebc)[_0xd6522f[_0xd6522f.length - 1]] = _0x489c99);
      return _0x1d3ebc;
    }
    getdata(_0x5c161d) {
      let _0x4ecaae = this.getval(_0x5c161d);
      if (/^@/.test(_0x5c161d)) {
        const [, _0x3958dd, _0x5c0a96] = /^@(.*?)\.(.*?)$/.exec(_0x5c161d);
        const _0x372f32 = _0x3958dd ? this.getval(_0x3958dd) : "";
        if (_0x372f32) {
          try {
            const _0x49932e = JSON.parse(_0x372f32);
            _0x4ecaae = _0x49932e ? this.lodash_get(_0x49932e, _0x5c0a96, "") : _0x4ecaae;
          } catch (_0x500022) {
            _0x4ecaae = "";
          }
        }
      }
      return _0x4ecaae;
    }
    setdata(_0x59464d, _0x42aa4e) {
      let _0x441e35 = false;
      if (/^@/.test(_0x42aa4e)) {
        const [, _0x5eb2f4, _0x54f5f1] = /^@(.*?)\.(.*?)$/.exec(_0x42aa4e);
        const _0x399a81 = this.getval(_0x5eb2f4);
        const _0x7a7bc2 = _0x5eb2f4 ? "null" === _0x399a81 ? null : _0x399a81 || "{}" : "{}";
        try {
          const _0x3d66cc = JSON.parse(_0x7a7bc2);
          this.lodash_set(_0x3d66cc, _0x54f5f1, _0x59464d);
          _0x441e35 = this.setval(JSON.stringify(_0x3d66cc), _0x5eb2f4);
        } catch (_0x37dd69) {
          const _0x447d25 = {};
          this.lodash_set(_0x447d25, _0x54f5f1, _0x59464d);
          _0x441e35 = this.setval(JSON.stringify(_0x447d25), _0x5eb2f4);
        }
      } else {
        _0x441e35 = this.setval(_0x59464d, _0x42aa4e);
      }
      return _0x441e35;
    }
    getval(_0x1837d4) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(_0x1837d4);
        case "Quantumult X":
          return $prefs.valueForKey(_0x1837d4);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[_0x1837d4];
        default:
          return this.data && this.data[_0x1837d4] || null;
      }
    }
    setval(_0x885d6e, _0x2ff643) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(_0x885d6e, _0x2ff643);
        case "Quantumult X":
          return $prefs.setValueForKey(_0x885d6e, _0x2ff643);
        case "Node.js":
          this.data = this.loaddata();
          this.data[_0x2ff643] = _0x885d6e;
          this.writedata();
          return true;
        default:
          return this.data && this.data[_0x2ff643] || null;
      }
    }
    initGotEnv(_0x589eb0) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x589eb0 && (_0x589eb0.headers = _0x589eb0.headers ? _0x589eb0.headers : {}, _0x589eb0 && (_0x589eb0.headers = _0x589eb0.headers ? _0x589eb0.headers : {}, undefined === _0x589eb0.headers.cookie && undefined === _0x589eb0.headers.Cookie && undefined === _0x589eb0.cookieJar && (_0x589eb0.cookieJar = this.ckjar)));
    }
    get(_0x33eebc, _0x4fe076 = () => {}) {
      switch (_0x33eebc.headers && (delete _0x33eebc.headers["Content-Type"], delete _0x33eebc.headers["Content-Length"], delete _0x33eebc.headers["content-type"], delete _0x33eebc.headers["content-length"]), _0x33eebc.params && (_0x33eebc.url += "?" + this.queryStr(_0x33eebc.params)), undefined === _0x33eebc.followRedirect || _0x33eebc.followRedirect || ((this.isSurge() || this.isLoon()) && (_0x33eebc["auto-redirect"] = false), this.isQuanX() && (_0x33eebc.opts ? _0x33eebc.opts.redirection = false : _0x33eebc.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (_0x33eebc.headers = _0x33eebc.headers || {}, Object.assign(_0x33eebc.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient.get(_0x33eebc, (_0x2bf6e2, _0x1784d6, _0x3bb4dc) => {
            !_0x2bf6e2 && _0x1784d6 && (_0x1784d6.body = _0x3bb4dc, _0x1784d6.statusCode = _0x1784d6.status ? _0x1784d6.status : _0x1784d6.statusCode, _0x1784d6.status = _0x1784d6.statusCode);
            _0x4fe076(_0x2bf6e2, _0x1784d6, _0x3bb4dc);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (_0x33eebc.opts = _0x33eebc.opts || {}, Object.assign(_0x33eebc.opts, {
            hints: false
          }));
          $task.fetch(_0x33eebc).then(_0x149edf => {
            const {
              statusCode: _0x2ccb5a,
              statusCode: _0x145afc,
              headers: _0x1633d5,
              body: _0x7a6e0,
              bodyBytes: _0x1969be
            } = _0x149edf;
            _0x4fe076(null, {
              status: _0x2ccb5a,
              statusCode: _0x145afc,
              headers: _0x1633d5,
              body: _0x7a6e0,
              bodyBytes: _0x1969be
            }, _0x7a6e0, _0x1969be);
          }, _0x1911a0 => _0x4fe076(_0x1911a0 && _0x1911a0.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x57368d = require("iconv-lite");
          this.initGotEnv(_0x33eebc);
          this.got(_0x33eebc).on("redirect", (_0x2177f6, _0x2667dc) => {
            try {
              if (_0x2177f6.headers["set-cookie"]) {
                const _0x557dce = _0x2177f6.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                _0x557dce && this.ckjar.setCookieSync(_0x557dce, null);
                _0x2667dc.cookieJar = this.ckjar;
              }
            } catch (_0x570b97) {
              this.logErr(_0x570b97);
            }
          }).then(_0x1aed2f => {
            const {
              statusCode: _0x909acf,
              statusCode: _0x473782,
              headers: _0x4863bc,
              rawBody: _0x250562
            } = _0x1aed2f;
            const _0x5471fd = _0x57368d.decode(_0x250562, this.encoding);
            _0x4fe076(null, {
              status: _0x909acf,
              statusCode: _0x473782,
              headers: _0x4863bc,
              rawBody: _0x250562,
              body: _0x5471fd
            }, _0x5471fd);
          }, _0x33045f => {
            const {
              message: _0x1c9baf,
              response: _0x5e22d3
            } = _0x33045f;
            _0x4fe076(_0x1c9baf, _0x5e22d3, _0x5e22d3 && _0x57368d.decode(_0x5e22d3.rawBody, this.encoding));
          });
          break;
      }
    }
    post(_0x576ea0, _0x37d16f = () => {}) {
      const _0xc696a0 = _0x576ea0.method ? _0x576ea0.method.toLocaleLowerCase() : "post";
      switch (_0x576ea0.body && _0x576ea0.headers && !_0x576ea0.headers["Content-Type"] && !_0x576ea0.headers["content-type"] && (_0x576ea0.headers["content-type"] = "application/x-www-form-urlencoded"), _0x576ea0.headers && (delete _0x576ea0.headers["Content-Length"], delete _0x576ea0.headers["content-length"]), undefined === _0x576ea0.followRedirect || _0x576ea0.followRedirect || ((this.isSurge() || this.isLoon()) && (_0x576ea0["auto-redirect"] = false), this.isQuanX() && (_0x576ea0.opts ? _0x576ea0.opts.redirection = false : _0x576ea0.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (_0x576ea0.headers = _0x576ea0.headers || {}, Object.assign(_0x576ea0.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient[_0xc696a0](_0x576ea0, (_0x5267aa, _0x35f0ff, _0x1d7e84) => {
            !_0x5267aa && _0x35f0ff && (_0x35f0ff.body = _0x1d7e84, _0x35f0ff.statusCode = _0x35f0ff.status ? _0x35f0ff.status : _0x35f0ff.statusCode, _0x35f0ff.status = _0x35f0ff.statusCode);
            _0x37d16f(_0x5267aa, _0x35f0ff, _0x1d7e84);
          });
          break;
        case "Quantumult X":
          _0x576ea0.method = _0xc696a0;
          this.isNeedRewrite && (_0x576ea0.opts = _0x576ea0.opts || {}, Object.assign(_0x576ea0.opts, {
            hints: false
          }));
          $task.fetch(_0x576ea0).then(_0x35d388 => {
            const {
              statusCode: _0x14fb0c,
              statusCode: _0x53855c,
              headers: _0x5b9dca,
              body: _0x457678,
              bodyBytes: _0x5aa0c1
            } = _0x35d388;
            _0x37d16f(null, {
              status: _0x14fb0c,
              statusCode: _0x53855c,
              headers: _0x5b9dca,
              body: _0x457678,
              bodyBytes: _0x5aa0c1
            }, _0x457678, _0x5aa0c1);
          }, _0xfd4873 => _0x37d16f(_0xfd4873 && _0xfd4873.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x42d8b2 = require("iconv-lite");
          this.initGotEnv(_0x576ea0);
          const {
            url: _0x193fff,
            ..._0xb96a2b
          } = _0x576ea0;
          this.got[_0xc696a0](_0x193fff, _0xb96a2b).then(_0x5e81fb => {
            const {
              statusCode: _0x197833,
              statusCode: _0x2b5f2d,
              headers: _0x2caeda,
              rawBody: _0x53f70e
            } = _0x5e81fb;
            const _0xc4f08c = _0x42d8b2.decode(_0x53f70e, this.encoding);
            _0x37d16f(null, {
              status: _0x197833,
              statusCode: _0x2b5f2d,
              headers: _0x2caeda,
              rawBody: _0x53f70e,
              body: _0xc4f08c
            }, _0xc4f08c);
          }, _0x5cd47c => {
            const {
              message: _0x181ab8,
              response: _0x24bbf2
            } = _0x5cd47c;
            _0x37d16f(_0x181ab8, _0x24bbf2, _0x24bbf2 && _0x42d8b2.decode(_0x24bbf2.rawBody, this.encoding));
          });
          break;
      }
    }
    time(_0x2b1fad, _0x559365 = null) {
      const _0x3a193c = _0x559365 ? new Date(_0x559365) : new Date();
      let _0x3b2373 = {
        "M+": _0x3a193c.getMonth() + 1,
        "d+": _0x3a193c.getDate(),
        "H+": _0x3a193c.getHours(),
        "m+": _0x3a193c.getMinutes(),
        "s+": _0x3a193c.getSeconds(),
        "q+": Math.floor((_0x3a193c.getMonth() + 3) / 3),
        S: _0x3a193c.getMilliseconds()
      };
      /(y+)/.test(_0x2b1fad) && (_0x2b1fad = _0x2b1fad.replace(RegExp.$1, (_0x3a193c.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x397d84 in _0x3b2373) new RegExp("(" + _0x397d84 + ")").test(_0x2b1fad) && (_0x2b1fad = _0x2b1fad.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x3b2373[_0x397d84] : ("00" + _0x3b2373[_0x397d84]).substr(("" + _0x3b2373[_0x397d84]).length)));
      return _0x2b1fad;
    }
    queryStr(_0x439692) {
      let _0xe115b3 = "";
      for (const _0x344f72 in _0x439692) {
        let _0x181762 = _0x439692[_0x344f72];
        null != _0x181762 && "" !== _0x181762 && ("object" == typeof _0x181762 && (_0x181762 = JSON.stringify(_0x181762)), _0xe115b3 += _0x344f72 + "=" + _0x181762 + "&");
      }
      _0xe115b3 = _0xe115b3.substring(0, _0xe115b3.length - 1);
      return _0xe115b3;
    }
    msg(_0x31c4f7 = _0x1c9b95, _0x1f125b = "", _0x378b7a = "", _0x59c6f5 = {}) {
      const _0x271090 = _0xb1f78d => {
        const {
          $open: _0x1c2a58,
          $copy: _0x5a91a1,
          $media: _0x28fcb1,
          $mediaMime: _0x3020ca
        } = _0xb1f78d;
        switch (typeof _0xb1f78d) {
          case undefined:
            return _0xb1f78d;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: _0xb1f78d
                };
              case "Loon":
              case "Shadowrocket":
                return _0xb1f78d;
              case "Quantumult X":
                return {
                  "open-url": _0xb1f78d
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
                  const _0x2a479a = {};
                  let _0x233880 = _0xb1f78d.openUrl || _0xb1f78d.url || _0xb1f78d["open-url"] || _0x1c2a58;
                  _0x233880 && Object.assign(_0x2a479a, {
                    action: "open-url",
                    url: _0x233880
                  });
                  let _0x47db5e = _0xb1f78d["update-pasteboard"] || _0xb1f78d.updatePasteboard || _0x5a91a1;
                  if (_0x47db5e && Object.assign(_0x2a479a, {
                    action: "clipboard",
                    text: _0x47db5e
                  }), _0x28fcb1) {
                    let _0x2fed85;
                    let _0x1b7671;
                    let _0x47fd6f;
                    if (_0x28fcb1.startsWith("http")) {
                      _0x2fed85 = _0x28fcb1;
                    } else {
                      if (_0x28fcb1.startsWith("data:")) {
                        const [_0xdf96a1] = _0x28fcb1.split(";");
                        const [, _0x34f83c] = _0x28fcb1.split(",");
                        _0x1b7671 = _0x34f83c;
                        _0x47fd6f = _0xdf96a1.replace("data:", "");
                      } else {
                        _0x1b7671 = _0x28fcb1;
                        _0x47fd6f = (_0x3701d6 => {
                          const _0x7b6cdc = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var _0x3751bf in _0x7b6cdc) if (0 === _0x3701d6.indexOf(_0x3751bf)) {
                            return _0x7b6cdc[_0x3751bf];
                          }
                          return null;
                        })(_0x28fcb1);
                      }
                    }
                    Object.assign(_0x2a479a, {
                      "media-url": _0x2fed85,
                      "media-base64": _0x1b7671,
                      "media-base64-mime": _0x3020ca ?? _0x47fd6f
                    });
                  }
                  Object.assign(_0x2a479a, {
                    "auto-dismiss": _0xb1f78d["auto-dismiss"],
                    sound: _0xb1f78d.sound
                  });
                  return _0x2a479a;
                }
              case "Loon":
                {
                  const _0x5a633f = {};
                  let _0x1d818b = _0xb1f78d.openUrl || _0xb1f78d.url || _0xb1f78d["open-url"] || _0x1c2a58;
                  _0x1d818b && Object.assign(_0x5a633f, {
                    openUrl: _0x1d818b
                  });
                  let _0x55a8ca = _0xb1f78d.mediaUrl || _0xb1f78d["media-url"];
                  _0x28fcb1?.["startsWith"]("http") && (_0x55a8ca = _0x28fcb1);
                  _0x55a8ca && Object.assign(_0x5a633f, {
                    mediaUrl: _0x55a8ca
                  });
                  console.log(JSON.stringify(_0x5a633f));
                  return _0x5a633f;
                }
              case "Quantumult X":
                {
                  const _0x1de3a0 = {};
                  let _0x48941a = _0xb1f78d["open-url"] || _0xb1f78d.url || _0xb1f78d.openUrl || _0x1c2a58;
                  _0x48941a && Object.assign(_0x1de3a0, {
                    "open-url": _0x48941a
                  });
                  let _0x275048 = _0xb1f78d["media-url"] || _0xb1f78d.mediaUrl;
                  _0x28fcb1?.["startsWith"]("http") && (_0x275048 = _0x28fcb1);
                  _0x275048 && Object.assign(_0x1de3a0, {
                    "media-url": _0x275048
                  });
                  let _0x432221 = _0xb1f78d["update-pasteboard"] || _0xb1f78d.updatePasteboard || _0x5a91a1;
                  _0x432221 && Object.assign(_0x1de3a0, {
                    "update-pasteboard": _0x432221
                  });
                  console.log(JSON.stringify(_0x1de3a0));
                  return _0x1de3a0;
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
            $notification.post(_0x31c4f7, _0x1f125b, _0x378b7a, _0x271090(_0x59c6f5));
            break;
          case "Quantumult X":
            $notify(_0x31c4f7, _0x1f125b, _0x378b7a, _0x271090(_0x59c6f5));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let _0xcb49a = ["", "==============📣系统通知📣=============="];
        _0xcb49a.push(_0x31c4f7);
        _0x1f125b && _0xcb49a.push(_0x1f125b);
        _0x378b7a && _0xcb49a.push(_0x378b7a);
        console.log(_0xcb49a.join("\n"));
        this.logs = this.logs.concat(_0xcb49a);
      }
    }
    debug(..._0x5408e5) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (_0x5408e5.length > 0 && (this.logs = [...this.logs, ..._0x5408e5]), console.log("" + this.logLevelPrefixs.debug + _0x5408e5.map(_0x136072 => _0x136072 ?? String(_0x136072)).join(this.logSeparator)));
    }
    info(..._0x105d33) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (_0x105d33.length > 0 && (this.logs = [...this.logs, ..._0x105d33]), console.log("" + this.logLevelPrefixs.info + _0x105d33.map(_0x2d8be3 => _0x2d8be3 ?? String(_0x2d8be3)).join(this.logSeparator)));
    }
    warn(..._0x32118e) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (_0x32118e.length > 0 && (this.logs = [...this.logs, ..._0x32118e]), console.log("" + this.logLevelPrefixs.warn + _0x32118e.map(_0x3e49f9 => _0x3e49f9 ?? String(_0x3e49f9)).join(this.logSeparator)));
    }
    error(..._0x77913b) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (_0x77913b.length > 0 && (this.logs = [...this.logs, ..._0x77913b]), console.log("" + this.logLevelPrefixs.error + _0x77913b.map(_0x3b4b99 => _0x3b4b99 ?? String(_0x3b4b99)).join(this.logSeparator)));
    }
    log(..._0x24d715) {
      _0x24d715.length > 0 && (this.logs = [...this.logs, ..._0x24d715]);
      console.log(_0x24d715.map(_0x1339a9 => _0x1339a9 ?? String(_0x1339a9)).join(this.logSeparator));
    }
    logErr(_0x1250e4, _0x4223f4) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", "❗️" + this.name + ", 错误!", _0x4223f4, _0x1250e4);
          break;
        case "Node.js":
          this.log("", "❗️" + this.name + ", 错误!", _0x4223f4, undefined !== _0x1250e4.message ? _0x1250e4.message : _0x1250e4, _0x1250e4.stack);
          break;
      }
    }
    wait(_0x59582e) {
      return new Promise(_0x775c7e => setTimeout(_0x775c7e, _0x59582e));
    }
    done(_0x363b2a = {}) {
      const _0x4549f7 = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x4549f7 + " 秒"), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(_0x363b2a);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(_0x1c9b95, _0x222ce4);
}