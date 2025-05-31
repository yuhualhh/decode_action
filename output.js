//Sat May 31 2025 17:51:55 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const _0x4768e4 = require("crypto");
const _0x3cf6dc = new _0x19ce45("福田e家");
const _0x58a7ac = (_0x3cf6dc._0x2112d2() ? process._0x64d858.FTEJ : _0x3cf6dc._0x2de62f("FTEJ")) || "";
const _0x36aa6e = (_0x3cf6dc._0x2112d2() ? process._0x64d858.FTEJ_PK : _0x3cf6dc._0x2de62f("FTEJ_PK")) || "1";
const _0xaca742 = (_0x3cf6dc._0x2112d2() ? process._0x64d858.FTEJ_Lottery : _0x3cf6dc._0x2de62f("FTEJ_Lottery")) || "0";
const _0x452d3b = (_0x3cf6dc._0x2112d2() ? process._0x64d858.FTEJ_SpringSign : _0x3cf6dc._0x2de62f("FTEJ_SpringSign")) || "0";
const _0x1fac42 = (_0x3cf6dc._0x2112d2() ? process._0x64d858.FTEJ_DEL_POSTS : _0x3cf6dc._0x2de62f("FTEJ_DEL_POSTS")) || "1";
const _0x23579a = (_0x3cf6dc._0x2112d2() ? process._0x64d858.FTEJ_TASK_SIGNIN : _0x3cf6dc._0x2de62f("FTEJ_TASK_SIGNIN")) || "1";
const _0x5b0457 = (_0x3cf6dc._0x2112d2() ? process._0x64d858.FTEJ_TASK_SHARE : _0x3cf6dc._0x2de62f("FTEJ_TASK_SHARE")) || "1";
const _0x469d3f = (_0x3cf6dc._0x2112d2() ? process._0x64d858.FTEJ_TASK_FOLLOW : _0x3cf6dc._0x2de62f("FTEJ_TASK_FOLLOW")) || "1";
const _0x442577 = (_0x3cf6dc._0x2112d2() ? process._0x64d858.FTEJ_TASK_POST : _0x3cf6dc._0x2de62f("FTEJ_TASK_POST")) || "1";
let _0xe40290 = null;
let _0x1dc67f = null;
function _0x3428e1(_0xda46e6) {
  const _0x49c18b = Buffer.from("Zm9udG9uZS10cmFuc0BseDEwMCQjMzY1", "base64");
  const _0x31c6be = Buffer.from("MjAxNjEyMDE=", "base64");
  const _0x52402f = _0x4768e4._0x5b52a5("des-ede3-cbc", _0x49c18b, _0x31c6be);
  _0x52402f._0x57d7e3(true);
  const _0x318c22 = Buffer.from(_0xda46e6, "base64");
  let _0x55da20 = _0x52402f.update(_0x318c22, undefined, "utf8");
  _0x55da20 += _0x52402f._0x50e6fa("utf8");
  return _0x55da20;
}
function _0x4bcb99(_0x200f43) {
  const _0x52560f = Buffer.from("Zm9udG9uZS10cmFuc0BseDEwMCQjMzY1", "base64");
  const _0x214055 = Buffer.from("MjAxNjEyMDE=", "base64");
  const _0x4c5fc0 = _0x4768e4._0x71e1be("des-ede3-cbc", _0x52560f, _0x214055);
  _0x4c5fc0._0x57d7e3(true);
  let _0x7be9f2 = _0x4c5fc0.update(_0x200f43, "utf8", "base64");
  _0x7be9f2 += _0x4c5fc0._0x50e6fa("base64");
  return _0x7be9f2;
}
async function _0x22a5c4() {
  const _0x14b8d5 = {
    _0x189cd1: 1
  };
  const _0x4a9e1f = await _0x78a8cd("/ehomes-new/pkHome/version/getVersion", _0x14b8d5);
  if (_0x4a9e1f.code === 200 && _0x4a9e1f.data && _0x4a9e1f.data._0x59a354) {
    _0xe40290 = _0x4a9e1f.data._0x59a354;
  } else {
    {
      _0xe40290 = Date.now() % 1000000;
    }
  }
  return _0xe40290;
}
async function _0x50d9ef(_0x12719b, _0x316fb9) {
  return new Promise(_0x104884 => {
    const _0xb83e0c = {
      encrypt: "yes",
      _0x5d2fa4: "application/x-www-form-urlencoded",
      _0x1a41f0: "Keep-Alive",
      _0x2c5e45: "okhttp/3.14.9",
      _0x5b8f03: "gzip"
    };
    const _0x4ca986 = {
      url: "https://czyl.foton.com.cn" + _0x12719b,
      headers: _0xb83e0c,
      body: _0x316fb9
    };
    _0x3cf6dc.post(_0x4ca986, async (_0x2cd966, _0x1d6d74, _0x1f445d) => {
      if (_0x2cd966) {
        {
          console.log("EST请求错误: " + JSON.stringify(_0x2cd966));
          return _0x104884({
            code: -1,
            _0x2bbbe0: false,
            _0x207707: "网络错误",
            _0x3ab448: null
          });
        }
      } else {
        const _0x28db00 = {
          code: _0x1d6d74.statusCode,
          _0x2bbbe0: true,
          _0x3ab448: _0x1f445d,
          headers: _0x1d6d74.headers
        };
        _0x104884(_0x28db00);
      }
    });
  });
}
async function _0x4c226f() {
  const _0x1c175b = {
    _0x428b02: "null",
    _0x3b693d: "",
    _0x42816c: "61"
  };
  const _0x3a4361 = {
    _0x189cd1: "1",
    version: "7.5.1",
    _0x41ce09: "345"
  };
  const _0x47202e = {
    _0x47ec3c: _0x1c175b,
    _0xbf0944: _0x3a4361
  };
  const _0x1c3538 = _0x4bcb99(JSON.stringify(_0x47202e));
  const _0x313c74 = await _0x50d9ef("/est/getVersion.action", "jsonParame=" + encodeURIComponent(_0x1c3538));
  if (_0x313c74._0x2bbbe0 && _0x313c74._0x3ab448 && _0x313c74.code === 200) {
    {
      try {
        {
          const _0x306b0c = _0x3428e1(_0x313c74._0x3ab448);
          const _0x5ebf4d = JSON.parse(_0x306b0c);
          if (_0x5ebf4d.code === 0 && _0x5ebf4d.data) {
            {
              const _0x54b53e = JSON.parse(_0x5ebf4d.data);
              _0x54b53e._0x59a354 ? _0x1dc67f = _0x54b53e._0x59a354 : _0x1dc67f = Date.now() % 1000000;
            }
          } else {
            {
              _0x1dc67f = Date.now() % 1000000;
            }
          }
        }
      } catch (_0x23e4eb) {
        _0x1dc67f = Date.now() % 1000000;
      }
    }
  } else {
    {
      _0x1dc67f = Date.now() % 1000000;
    }
  }
  return _0x1dc67f;
}
async function _0x1d4f1e() {
  if (!_0x58a7ac) {
    console.log("未配置账号信息，请添加环境变量");
    return;
  }
  await _0x22a5c4();
  await _0x4c226f();
  const _0x47860c = _0x58a7ac.split("&");
  const _0x90182e = 50;
  let _0x2d8ebd = [];
  for (let _0x2965bb = 0; _0x2965bb < _0x47860c.length; _0x2965bb += _0x90182e) {
    {
      const _0x195d2e = _0x47860c.slice(_0x2965bb, _0x2965bb + _0x90182e);
      console.log("\n\n开始处理第 " + (_0x2965bb / _0x90182e + 1) + " 批账号");
      const _0x3e9acf = await Promise.all(_0x195d2e.map((_0x545ede, _0x52162b) => _0x42d911(_0x545ede, _0x52162b + 1 + _0x2965bb)));
      _0x2d8ebd.push(..._0x3e9acf);
      console.log("————————————");
    }
  }
  const _0x27ce07 = _0x2d8ebd.join("");
  _0x27ce07 && (console.log(_0x27ce07), await _0x415477(_0x27ce07));
}
!(async () => {
  await _0x1d4f1e();
})().catch(_0x198d8b => _0x3cf6dc._0x1458e9(_0x198d8b)).finally(() => _0x3cf6dc.done());
const _0x4a10e9 = (_0x2e8a01, _0x3dbaa3) => {
  const _0x2f93b8 = Math.floor(Math.random() * (_0x3dbaa3 - _0x2e8a01 + 1)) + _0x2e8a01;
  return new Promise(_0x150854 => setTimeout(_0x150854, _0x2f93b8 * 1000));
};
async function _0x10a4fe(_0x4ee4a5, _0x46f191 = 3, _0x4c683e = 1000) {
  let _0x51788e = _0x4c683e;
  for (let _0x5d7381 = 1; _0x5d7381 <= _0x46f191; _0x5d7381++) {
    try {
      {
        return await _0x4ee4a5();
      }
    } catch (_0x25481e) {
      if (_0x5d7381 === _0x46f191) {
        throw _0x25481e;
      }
      console.log("✘第 " + _0x5d7381 + " 次尝试失败: " + _0x25481e.message + _0x51788e / 1000 + "秒后重试");
      await new Promise(_0xc67317 => setTimeout(_0xc67317, _0x51788e));
      _0x51788e *= 2;
    }
  }
}
async function _0x1f1c8b(_0x239760, _0x47b99a, _0x4a5222, _0x4282df, _0x58edb1) {
  try {
    {
      const _0x1224e4 = {
        _0x5d2fa4: "application/x-www-form-urlencoded; charset=UTF-8",
        _0x32cd03: "https://czyl.foton.com.cn/shareCars/activity/luckDraw/index.html?ftejMemberId=" + _0x239760 + "&encryptedMemberId=" + _0x47b99a + "&channel=app",
        _0x1ba970: "FOTONTGT=" + _0x4282df
      };
      const _0x4b92cc = await _0x5e5472("/shareCars/validateToken.action", {
        method: "POST",
        headers: _0x1224e4,
        body: "ticketName=FOTONTGT&ticketValue=" + _0x4282df.trim()
      });
      if (!_0x4b92cc.headers || !_0x4b92cc.headers._0x56ea93) {
        throw new Error("[" + _0x58edb1 + "]获取 HWWAFSESID 失败");
      }
      const _0x2f05ea = _0x4b92cc.headers._0x56ea93;
      const _0x93c71b = _0x33c7f2(_0x2f05ea.find(_0x12bc9e => _0x12bc9e.startsWith("SESSION=")));
      const _0x1c39ae = _0x33c7f2(_0x2f05ea.find(_0x2c8ca0 => _0x2c8ca0.startsWith("HWWAFSESID=")));
      const _0x36a3e5 = _0x33c7f2(_0x2f05ea.find(_0x524c25 => _0x524c25.startsWith("HWWAFSESTIME=")));
      for (let _0x44cf04 = 1; _0x44cf04 <= 5; _0x44cf04++) {
        await _0x4a10e9(5, 10);
        const _0x236e88 = {
          method: "POST",
          headers: {},
          body: {}
        };
        _0x236e88.headers._0x5e8643 = "application/json, text/javascript, */*; q=0.01";
        _0x236e88.headers._0x57cbc5 = "XMLHttpRequest";
        _0x236e88.headers._0x2c5e45 = "Mozilla/5.0 (Linux; Android 14; Mobile)";
        _0x236e88.headers._0x32cd03 = "https://czyl.foton.com.cn/shareCars/activity/luckDraw/index.html?ftejMemberId=" + _0x239760 + "&encryptedMemberId=" + _0x47b99a + "&channel=app";
        _0x236e88.headers._0x1ba970 = "SESSION=" + _0x93c71b + "; FOTONTGT=" + _0x4282df + "; HWWAFSESID=" + _0x1c39ae + "; HWWAFSESTIME=" + _0x36a3e5;
        const _0x12cbb4 = await _0x5e5472("/shareCars/turnTable/turnTableLottery2nd.action", _0x236e88);
        const _0x403d39 = _0x12cbb4.data?.["_0x207707"] || "未知错误";
        console.log("[" + _0x58edb1 + "]第" + _0x44cf04 + "次抽奖: " + _0x403d39);
        if (_0x403d39.includes("每天最多参加5次")) {
          console.log("[" + _0x58edb1 + "]已达到每日抽奖上限");
          break;
        }
      }
    }
  } catch (_0x584489) {
    console.error("[" + _0x58edb1 + "]抽奖失败: " + _0x584489.message);
  }
}
async function _0x4f9a9e(_0x55cb74, _0x50224d, _0x3ba6cc, _0x55e260, _0x35b7f1) {
  try {
    const _0x36ac0e = await _0x5e5472("/shareCars/validateToken.action", {
      method: "POST",
      headers: {
        _0x5d2fa4: "application/x-www-form-urlencoded; charset=UTF-8",
        _0x32cd03: "https://czyl.foton.com.cn/shareCars/activity/interactCenter250401/index.html?ftejMemberId=" + _0x55cb74 + "&encryptedMemberId=" + _0x50224d + "&channel=app",
        _0x1ba970: "FOTONTGT=" + _0x55e260
      },
      body: "ticketName=FOTONTGT&ticketValue=" + _0x55e260.trim()
    });
    if (!_0x36ac0e.headers || !_0x36ac0e.headers._0x56ea93) {
      {
        throw new Error("[" + _0x35b7f1 + "]春日抽奖 => 获取 COOKIE 失败");
      }
    }
    const _0x26630c = _0x36ac0e.headers._0x56ea93;
    const _0x5e2d93 = _0x33c7f2(_0x26630c.find(_0x365672 => _0x365672.startsWith("SESSION=")));
    const _0x5c5af1 = _0x33c7f2(_0x26630c.find(_0x19118d => _0x19118d.startsWith("HWWAFSESID=")));
    const _0x4c1f8b = _0x33c7f2(_0x26630c.find(_0x569bc => _0x569bc.startsWith("HWWAFSESTIME=")));
    for (let _0x487dbc = 1; _0x487dbc <= 5; _0x487dbc++) {
      {
        await _0x4a10e9(5, 10);
        const _0x4491be = await _0x5e5472("/shareCars/c250401/luckyDraw.action", {
          method: "POST",
          headers: {
            _0x5e8643: "application/json, text/javascript, */*; q=0.01",
            _0x57cbc5: "XMLHttpRequest",
            _0x2c5e45: "Mozilla/5.0 (Linux; Android 14; Mobile)",
            _0x32cd03: "https://czyl.foton.com.cn/shareCars/activity/interactCenter250401/index.html?ftejMemberId=" + _0x55cb74 + "&encryptedMemberId=" + _0x50224d + "&channel=app",
            _0x1ba970: "SESSION=" + _0x5e2d93 + "; FOTONTGT=" + _0x55e260 + "; HWWAFSESID=" + _0x5c5af1 + "; HWWAFSESTIME=" + _0x4c1f8b
          },
          body: "encryptMemberId=" + _0x50224d + "&activityNum=250401"
        });
        const _0x338833 = _0x4491be.data?.["_0x207707"] || "未知错误";
        console.log("[" + _0x35b7f1 + "]春日第" + _0x487dbc + "抽: " + _0x338833);
        if (_0x338833.includes("没有抽奖次数")) {
          console.log("[" + _0x35b7f1 + "]暂无抽奖次数，跳过");
          break;
        }
      }
    }
  } catch (_0x19da48) {
    {
      console.error("[" + _0x35b7f1 + "]春日抽奖异常：" + _0x19da48.message);
    }
  }
}
async function _0x40aef0(_0x4984fe, _0x32f551, _0x35fe57, _0x160dd2, _0x14b4ba) {
  try {
    const _0x3c2ee6 = await _0x5e5472("/shareCars/validateToken.action", {
      method: "POST",
      headers: {
        _0x5d2fa4: "application/x-www-form-urlencoded; charset=UTF-8",
        _0x32cd03: "https://czyl.foton.com.cn/shareCars/activity/interactCenter250401/index.html?ftejMemberId=" + _0x4984fe + "&encryptedMemberId=" + _0x32f551 + "&channel=app",
        _0x1ba970: "FOTONTGT=" + _0x160dd2
      },
      body: "ticketName=FOTONTGT&ticketValue=" + _0x160dd2.trim()
    });
    if (!_0x3c2ee6.headers || !_0x3c2ee6.headers._0x56ea93) {
      {
        throw new Error("[" + _0x14b4ba + "]春日签到 => 获取 COOKIE 失败");
      }
    }
    const _0x13de8d = _0x3c2ee6.headers._0x56ea93;
    const _0x60fe33 = _0x33c7f2(_0x13de8d.find(_0x8b8a => _0x8b8a.startsWith("SESSION=")));
    const _0x32176a = _0x33c7f2(_0x13de8d.find(_0x3734e3 => _0x3734e3.startsWith("HWWAFSESID=")));
    const _0x1ff40b = _0x33c7f2(_0x13de8d.find(_0x2648bf => _0x2648bf.startsWith("HWWAFSESTIME=")));
    await _0x4a10e9(5, 10);
    const _0x5a203a = await _0x5e5472("/shareCars/c250401/sign.action", {
      method: "POST",
      headers: {
        _0x5d2fa4: "application/x-www-form-urlencoded; charset=UTF-8",
        _0x57cbc5: "XMLHttpRequest",
        _0x2c5e45: "Mozilla/5.0 (Linux; Android 14; Mobile)",
        _0x1ba970: "SESSION=" + _0x60fe33 + "; FOTONTGT=" + _0x160dd2 + "; HWWAFSESID=" + _0x32176a + "; HWWAFSESTIME=" + _0x1ff40b
      },
      body: "encryptMemberId=" + _0x32f551
    });
    if (_0x5a203a.data?.["code"] === 0) {
      {
        console.log("[" + _0x14b4ba + "]春日签到成功 => " + (_0x5a203a.data?.["_0x207707"] || ""));
      }
    } else {
      console.log("[" + _0x14b4ba + "]春日签到失败 => " + (_0x5a203a.data?.["_0x207707"] || "未知错误"));
    }
  } catch (_0x5aac8b) {
    console.error("[" + _0x14b4ba + "]春日签到异常：" + _0x5aac8b.message);
  }
}
function _0x454ed9(_0x1f8787) {
  if (!_0x1f8787 || typeof _0x1f8787 !== "string") {
    return false;
  }
  const _0x70e8f0 = _0x1f8787.split(" ")[0];
  const _0x3e08c8 = new Date();
  const _0x1d4705 = _0x3e08c8.getFullYear();
  const _0x401730 = String(_0x3e08c8.getMonth() + 1).padStart(2, "0");
  const _0x365c1a = String(_0x3e08c8.getDate()).padStart(2, "0");
  const _0x5b5207 = _0x1d4705 + "-" + _0x401730 + "-" + _0x365c1a;
  return _0x70e8f0 === _0x5b5207;
}
async function _0x1d59a1(_0x253f65, _0x58d320, _0x39bf10, _0x219138 = 1, _0x5f11cb = 10) {
  const _0x143bb6 = {
    _0x4dde02: _0x253f65._0x5ee9ca,
    _0x3b4040: _0x253f65._0x3b693d,
    _0x42816c: "61",
    _0x3b693d: _0x253f65._0x3b693d,
    _0x17395f: _0x58d320,
    tel: _0x58d320,
    phone: _0x58d320,
    _0x36b1f8: "",
    _0x31f33d: "",
    _0x3b2c8e: "ebf76685e48d4e14a9de6fccc76483e3",
    _0x3cf3e3: Date.now() - (_0x1dc67f || 0),
    _0x5cccdc: 1,
    _0x227019: _0x219138,
    _0x3d7f5c: _0x5f11cb,
    type: 1
  };
  const _0xc924c6 = await _0x466058("/ehomes-new/ehomesCommunity/api/mine/myPost", _0x143bb6);
  return _0xc924c6.code === 200 && _0xc924c6.data && Array.isArray(_0xc924c6.data) ? _0xc924c6.data : null;
}
async function _0x41721e(_0x26d902, _0x49bfd9, _0x4a7f2b, _0x5ddcff) {
  let _0x2ab206 = _0x26d902._0x156dea;
  let _0x54d11f = "未知时间";
  if (_0x26d902._0x476ea2 && typeof _0x26d902._0x476ea2 === "string") {
    {
      _0x54d11f = _0x26d902._0x476ea2;
    }
  } else {
    _0x26d902._0x476ea2 && (_0x54d11f = new Date(parseInt(_0x26d902._0x476ea2)).toLocaleString());
  }
  const _0x7d5acb = {
    _0x4dde02: _0x49bfd9._0x5ee9ca,
    _0x3b4040: _0x49bfd9._0x3b693d,
    _0x42816c: "61",
    _0x3b693d: _0x49bfd9._0x3b693d,
    _0x17395f: _0x4a7f2b,
    tel: _0x4a7f2b,
    _0x36b1f8: "",
    _0x31f33d: "",
    _0x3b2c8e: "",
    _0x3cf3e3: Date.now() - (_0x1dc67f || 0),
    _0x156dea: _0x26d902._0x156dea,
    _0x5cccdc: 1
  };
  const _0x37bb62 = await _0x466058("/ehomes-new/ehomesCommunity/api/mine/delete", _0x7d5acb);
  !(_0x37bb62.code === 200);
  await _0x4a10e9(2, 5);
}
async function _0x1e11be(_0x27a79f, _0xd92986, _0x19ad67) {
  let _0x2c189c = 1;
  const _0x1a3af9 = 10;
  let _0x4f60f8 = true;
  const _0x33859b = [];
  while (_0x4f60f8) {
    const _0x3960d1 = await _0x1d59a1(_0x27a79f, _0xd92986, _0x19ad67, _0x2c189c, _0x1a3af9);
    if (_0x3960d1 && _0x3960d1.length > 0) {
      for (const _0x7e3fa of _0x3960d1) {
        if (!_0x7e3fa._0x476ea2 || !_0x7e3fa._0x156dea) {
          console.log("[" + _0x19ad67 + "]帖子数据不完整，跳过: " + JSON.stringify(_0x7e3fa));
          continue;
        }
        if (!_0x454ed9(_0x7e3fa._0x476ea2)) {
          _0x33859b.push(_0x7e3fa);
        }
      }
      if (_0x3960d1.length < _0x1a3af9) {
        _0x4f60f8 = false;
      } else {
        {
          _0x2c189c++;
          await _0x4a10e9(1, 3);
        }
      }
    } else {
      _0x4f60f8 = false;
    }
  }
  if (_0x33859b.length === 0) {
    console.log("[" + _0x19ad67 + "]删帖结果：未找到非今日帖子");
    return;
  }
  for (const _0x470894 of _0x33859b) {
    await _0x41721e(_0x470894, _0x27a79f, _0xd92986, _0x19ad67);
  }
  console.log("[" + _0x19ad67 + "]删帖结果：非今日帖子清理完毕");
}
function _0x33c7f2(_0x734732) {
  return _0x734732 ? _0x734732.split(";")[0].split("=")[1] : "";
}
async function _0x3c74c3(_0x22875a, _0x2751be, _0x3bf705) {
  const _0x190bc0 = "pika_cache_v2_" + _0x22875a;
  const _0x9294f3 = _0x22875a.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
  let _0x404d56 = _0x3cf6dc._0x2de62f(_0x190bc0);
  if (_0x404d56) {
    {
      try {
        const _0x7ca268 = JSON.parse(_0x404d56);
        await _0x4a10e9(1, 3);
        const _0x42c05c = await _0x482b0c("/ehomes-new/pkHome/api/bonus/signActivity2nd", {
          _0x4dde02: _0x7ca268._0x3e4d24,
          _0x5ee9ca: _0x7ca268._0xde252,
          _0x17395f: _0x22875a,
          _0x3b2c8e: _0x7ca268._0x4321fd,
          _0x190710: "",
          _0x3cf3e3: Date.now() - (_0xe40290 || 0)
        }, _0x7ca268._0x4321fd);
        if (_0x42c05c.code === 200 && _0x42c05c.data) {
          if (_0x42c05c.data._0x589bbf !== null && typeof _0x42c05c.data._0x589bbf !== "undefined") {
            return "[" + _0x3bf705 + "]皮卡生活签到结果：获得" + _0x42c05c.data._0x589bbf + "积分";
          } else {
            if (_0x42c05c.data._0x207707 && (_0x42c05c.data._0x207707.includes("您今日已签到成功") || _0x42c05c.data._0x207707.includes("已签到") || _0x42c05c.data._0x207707.includes("今天已经签过到了") || _0x42c05c.data._0x207707 === "亲，您今天已经签过到了！")) {
              return "[" + _0x3bf705 + "]皮卡生活签到结果：今日已签到 (使用缓存)";
            } else {
              {
                console.log("[" + _0x3bf705 + "]皮卡生活缓存签到响应未知: " + _0x42c05c.data._0x207707 + ", 清除缓存并重试登录");
                _0x3cf6dc._0x43c59f("", _0x190bc0);
              }
            }
          }
        } else {
          _0x42c05c.code === 500 && _0x42c05c._0x207707 && _0x42c05c._0x207707.includes("用户令牌已过期") ? (console.log("[" + _0x3bf705 + "]皮卡生活缓存令牌已过期, 清除缓存并重试登录"), _0x3cf6dc._0x43c59f("", _0x190bc0)) : (console.log("[" + _0x3bf705 + "]皮卡生活缓存签到失败 (Code: " + _0x42c05c.code + ", Msg: " + _0x42c05c._0x207707 + "), 清除缓存并重试登录"), _0x3cf6dc._0x43c59f("", _0x190bc0));
        }
      } catch (_0x24ccef) {
        console.log("[" + _0x3bf705 + "]皮卡生活处理缓存签到异常: " + _0x24ccef + ", 清除缓存并重试登录");
        _0x3cf6dc._0x43c59f("", _0x190bc0);
      }
    }
  }
  try {
    {
      const _0x36ce7b = await _0x78a8cd("/ehomes-new/pkHome/api/user/getLoginMember2nd", {
        _0x4dde02: "",
        _0x5ee9ca: "",
        _0x17395f: "",
        _0x3b2c8e: "7fe186bb15ff4426ae84f300f05d9c8d",
        _0x190710: "",
        _0x3cf3e3: Date.now() - (_0xe40290 || 0),
        name: _0x22875a,
        password: _0x2751be,
        position: "",
        deviceId: "SP1A.210812.016",
        _0x5cf5ce: "realme",
        _0x36b1f8: "RMX3562",
        _0x189cd1: "0",
        _0x41ce09: "21",
        _0x18a9b5: "V1.1.10"
      });
      if (_0x36ce7b.code !== 200 || !_0x36ce7b.data) {
        {
          throw new Error("登录失败，" + (_0x36ce7b._0x207707 || "响应数据为空或登录接口返回错误"));
        }
      }
      const {
        _0x3e68ba: _0x10dff9,
        _0x3b2c8e: _0x21f364,
        _0x452001: _0x131871
      } = _0x36ce7b.data;
      const _0x2c9c28 = _0x131871 && _0x131871._0x35146a;
      if (!_0x10dff9 || !_0x2c9c28 || !_0x21f364) {
        {
          throw new Error("登录成功，但获取到的关键凭据不完整");
        }
      }
      const _0x18596c = {
        _0x3e4d24: _0x10dff9,
        _0xde252: _0x2c9c28,
        _0x4321fd: _0x21f364
      };
      _0x3cf6dc._0x43c59f(JSON.stringify(_0x18596c), _0x190bc0);
      await _0x4a10e9(1, 3);
      const _0x2e9482 = await _0x482b0c("/ehomes-new/pkHome/api/bonus/signActivity2nd", {
        _0x4dde02: _0x10dff9,
        _0x5ee9ca: _0x2c9c28,
        _0x17395f: _0x22875a,
        _0x3b2c8e: _0x21f364,
        _0x190710: "",
        _0x3cf3e3: Date.now() - (_0xe40290 || 0)
      }, _0x21f364);
      if (_0x2e9482.code === 200 && _0x2e9482.data) {
        if (_0x2e9482.data._0x589bbf !== null && typeof _0x2e9482.data._0x589bbf !== "undefined") {
          {
            return "[" + _0x3bf705 + "]皮卡生活签到结果：获得" + _0x2e9482.data._0x589bbf + "积分";
          }
        } else {
          if (_0x2e9482.data._0x207707 && (_0x2e9482.data._0x207707.includes("您今日已签到成功") || _0x2e9482.data._0x207707.includes("已签到") || _0x2e9482.data._0x207707.includes("今天已经签过到了") || _0x2e9482.data._0x207707 === "亲，您今天已经签过到了！")) {
            return "[" + _0x3bf705 + "]皮卡生活签到结果：今日已签到 (重新登录)";
          } else {
            throw new Error("重新登录后签到响应正常但未能匹配已知成功消息: \"" + (_0x2e9482.data._0x207707 || "无具体消息") + "\"");
          }
        }
      } else {
        throw new Error("重新登录后签到失败 (Code: " + _0x2e9482.code + ", Msg: " + (_0x2e9482._0x207707 || "未知错误") + ")");
      }
    }
  } catch (_0x31b63d) {
    return "[" + _0x3bf705 + "]皮卡生活签到结果：" + _0x31b63d.message;
  }
}
async function _0x2ed42b(_0x5e6766, _0x1c5acc, _0x1b9f9a, _0x13c1e7) {
  try {
    {
      const _0x5dbce2 = {
        _0x4dde02: _0x5e6766,
        _0x3b4040: _0x1c5acc,
        _0x42816c: "61",
        _0x3b693d: _0x1c5acc,
        _0x17395f: _0x1b9f9a,
        tel: _0x1b9f9a,
        phone: _0x1b9f9a,
        _0x36b1f8: "",
        _0x31f33d: "",
        _0x3b2c8e: "ebf76685e48d4e14a9de6fccc76483e3",
        _0x3cf3e3: Date.now() - (_0x1dc67f || 0),
        _0x5cccdc: 1
      };
      const _0x5bb182 = await _0x466058("/ehomes-new/homeManager/api/Member/findMemberInfo2", _0x5dbce2);
      if (_0x5bb182.code === 200 && _0x5bb182.data && _0x5bb182.data._0x3b693b) {
        {
          console.log("[" + _0x13c1e7 + "]昵称: " + _0x5bb182.data._0x3b693b);
          return _0x5bb182.data._0x3b693b;
        }
      } else {
        return "";
      }
    }
  } catch (_0x10dfe8) {
    return "";
  }
}
async function _0x420e58(_0x207e36, _0x39fd27, _0xc4d90a, _0xb554ac, _0x4ac44e) {
  try {
    const _0x4db05 = {
      _0x4dde02: _0x207e36,
      _0x3b4040: _0x39fd27,
      _0x42816c: "61",
      _0x3b693d: _0x39fd27,
      _0x17395f: _0xc4d90a,
      tel: _0xc4d90a,
      phone: _0xc4d90a,
      _0x36b1f8: "",
      _0x31f33d: "",
      _0x3b2c8e: "ebf76685e48d4e14a9de6fccc76483e3",
      _0x3cf3e3: Date.now() - (_0x1dc67f || 0),
      _0x5cccdc: 1,
      _0x1c07c1: "open",
      _0x1bb177: "0",
      type: "5",
      _0x58ec05: _0x207e36,
      channel: "1",
      name: _0xb554ac,
      _0x3337fb: "打开APP"
    };
    const _0x10cc72 = await _0x466058("/ehomes-new/homeManager/api/share/corsToActicity", _0x4db05);
    _0x10cc72.code === 200 ? console.log("[" + _0x4ac44e + "]打开APP请求成功") : console.log("[" + _0x4ac44e + "]打开APP请求失败: " + _0x10cc72._0x207707);
  } catch (_0xcc1c51) {
    {
      console.error("[" + _0x4ac44e + "]打开APP请求失败: " + _0xcc1c51.message);
    }
  }
}
async function _0x51285f(_0x3c4ac7, _0x3b8adf, _0xab9282, _0x2fec77) {
  try {
    const _0x5b2d8e = {
      _0x4dde02: _0x3c4ac7,
      _0x3b4040: _0x3b8adf,
      _0x42816c: "61",
      _0x3b693d: _0x3b8adf,
      _0x17395f: _0xab9282,
      tel: _0xab9282,
      phone: _0xab9282,
      _0x36b1f8: "",
      _0x31f33d: "",
      _0x3b2c8e: "ebf76685e48d4e14a9de6fccc76483e3",
      _0x3cf3e3: Date.now() - (_0x1dc67f || 0),
      _0x5cccdc: null,
      device: "ANDROID",
      _0x312609: "ApQrEcr_yjuLFVk8vR7x3FUtFd9NZqd4BTZmW6iWblPR"
    };
    const _0x348e6c = await _0x466058("/ehomes-new/homeManager/api/message/saveUserDeviceInfo", _0x5b2d8e);
    if (_0x348e6c.code === 200) {
      console.log("[" + _0x2fec77 + "]保存友盟设备信息成功");
    } else {
      {
        console.log("[" + _0x2fec77 + "]保存友盟设备信息失败: " + _0x348e6c._0x207707);
      }
    }
  } catch (_0x4255f2) {
    {
      console.error("[" + _0x2fec77 + "]保存友盟设备信息失败: " + _0x4255f2.message);
    }
  }
}
async function _0x42d911(_0x19183e, _0x35c8d6) {
  try {
    let _0x1178b8;
    let _0x2180db;
    if (_0x19183e.includes("#")) {
      [_0x1178b8, _0x2180db] = _0x19183e.split("#");
    } else {
      let _0x1e987d = atob(_0x19183e);
      [_0x1178b8, _0x2180db] = _0x1e987d.split("#");
    }
    const _0x5bce18 = _0x1178b8.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
    console.log("[" + _0x35c8d6 + "]" + _0x5bce18 + " 处理中");
    console.log("————————————");
    const _0xc86ec = await _0x10a4fe(async () => {
      {
        return await _0x7cd08c("/ehomes-new/homeManager/getLoginMember", {
          password: _0x2180db,
          _0x96a5b6: "7.3.23",
          _0x5a05c9: "",
          _0x4e524d: "17255ffa35cee609e2a8963a4233f13b",
          _0x33920c: "realmeRMX3562",
          _0xe87e0: "",
          name: _0x1178b8,
          _0x30f909: "316",
          _0x2f2a5a: "11",
          _0x1bf97f: "0"
        });
      }
    });
    if (_0xc86ec.code !== 200) {
      throw new Error("福田e家登录失败: " + _0xc86ec._0x207707);
    }
    const {
      _0x3b693d: _0x138689,
      _0x3e68ba: _0x5314e0,
      _0x5ee9ca: _0x3214c0,
      _0x4dde02: _0x8a59bb,
      _0x134e62: _0x23bc69
    } = _0xc86ec.data;
    const _0x26186e = await _0x2ed42b(_0x5314e0, _0x138689, _0x1178b8, _0x35c8d6);
    _0xc86ec.data._0x3b693b = _0x26186e;
    await _0x420e58(_0x3214c0, _0x138689, _0x1178b8, _0x26186e, _0x35c8d6);
    await _0x51285f(_0x3214c0, _0x138689, _0x1178b8, _0x35c8d6);
    let _0x580425 = await _0x10a4fe(async () => {
      return await _0x466058("/ehomes-new/homeManager/api/Member/getTaskList", {
        _0x4dde02: _0x3214c0,
        _0x3b4040: _0x138689,
        _0x42816c: "61",
        _0x3b693d: _0x138689,
        _0x17395f: _0x1178b8,
        tel: _0x1178b8,
        phone: _0x1178b8,
        _0x36b1f8: "",
        _0x31f33d: "",
        _0x3b2c8e: "ebf76685e48d4e14a9de6fccc76483e3",
        _0x3cf3e3: Date.now() - (_0x1dc67f || 0),
        _0x5cccdc: 1
      });
    });
    if (_0x580425.code === 200 && _0x580425.data) {
      for (const _0x5b16d2 of _0x580425.data) {
        {
          let _0x325c10 = false;
          if (_0x5b16d2._0x33374e === "签到") {
            {
              _0x23579a !== "1" && (_0x325c10 = true);
            }
          } else {
            if (_0x5b16d2._0x33374e === "保客分享") {
              _0x5b0457 !== "1" && (_0x325c10 = true);
            } else {
              if (_0x5b16d2._0x33374e === "关注") {
                {
                  _0x469d3f !== "1" && (_0x325c10 = true);
                }
              } else {
                _0x5b16d2._0x33374e === "发帖" && _0x442577 !== "1" && (_0x325c10 = true);
              }
            }
          }
          if (_0x325c10) {
            {
              continue;
            }
          }
          if (_0x5b16d2._0x24b38d === "1") {
            console.log("[" + _0x35c8d6 + "]任务\"" + _0x5b16d2._0x33374e + "\"已完成，跳过");
            continue;
          }
          if (_0x5b16d2._0x24b38d === "1") {
            console.log("[" + _0x35c8d6 + "]任务\"" + _0x5b16d2._0x33374e + "\"已完成，跳过");
            continue;
          }
          if (_0x5b16d2._0x33374e === "签到") {
            {
              if (_0x23579a === "1") {
                {
                  if (_0xc86ec.data._0x348b01 === "未签到") {
                    await _0x4a10e9(45, 90);
                    const _0x584415 = await _0x466058("/ehomes-new/homeManager/api/bonus/signActivity2nd", {
                      _0x4dde02: _0x5314e0,
                      _0x3b4040: _0x138689,
                      _0x42816c: "61",
                      _0x3b693d: _0x138689,
                      _0x17395f: _0x1178b8,
                      tel: _0x1178b8,
                      phone: _0x1178b8,
                      _0x36b1f8: "",
                      _0x31f33d: "",
                      _0x3b2c8e: "ebf76685e48d4e14a9de6fccc76483e3",
                      _0x3cf3e3: Date.now() - (_0x1dc67f || 0),
                      _0x5cccdc: 1
                    });
                    console.log("[" + _0x35c8d6 + "]福田e家签到结果: " + (_0x584415.data?.["_0x589bbf"] ? "获得" + _0x584415.data._0x589bbf + "积分" : _0x584415._0x207707));
                  } else {
                    console.log("[" + _0x35c8d6 + "]福田e家当前签到状态: " + _0xc86ec.data._0x348b01 + "，跳过签到操作");
                  }
                }
              }
            }
          }
          if (_0x5b16d2._0x33374e === "保客分享") {
            {
              if (_0x5b0457 === "1") {
                await _0x4a10e9(45, 90);
                const _0x3d4dad = "https://finance.foton.com.cn/FONTON_PROD";
                const _0x1c4126 = "Mozilla/5.0 (Linux; Android 15; RMX5060 Build/AP3A.240617.008; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/130.0.6723.58 Mobile Safari/537.36;Umeng4Aplus/1.0.0ftejAndroid";
                const _0x511374 = "https://finance.foton.com.cn/payingmember/clientHome?tab=1&show=0&memberId=" + _0x3214c0 + "&ftejMemberId=" + _0x3214c0 + "&encryptedMemberId=" + _0x5314e0 + "&channel=app&mobile=" + _0x1178b8;
                const _0x275831 = {
                  _0x5d2fa4: "application/json;charset=UTF-8",
                  channel: "H5",
                  _0x2c5e45: _0x1c4126,
                  _0x2a208e: "https://finance.foton.com.cn",
                  _0x57cbc5: "com.foton.almighty",
                  _0x32cd03: _0x511374,
                  _0x1ba970: "FOTONTGT=" + _0x23bc69
                };
                const _0x19fd9d = {
                  url: _0x3d4dad + "/ehomes-new/ehomesService//api/safeH5/getSafeInfo",
                  headers: _0x275831,
                  body: JSON.stringify({})
                };
                const _0x26e8ae = await new Promise(_0x31e78d => {
                  _0x3cf6dc.post(_0x19fd9d, (_0x1179b9, _0xd36459, _0x12af1f) => {
                    {
                      if (_0x1179b9) {
                        _0x31e78d(null);
                      } else {
                        try {
                          {
                            const _0x243937 = JSON.parse(_0x12af1f);
                            if (_0x243937.code === 200 && _0x243937.data && _0x243937.data.key) {
                              {
                                _0x31e78d(_0x243937.data.key);
                              }
                            } else {
                              {
                                _0x31e78d(null);
                              }
                            }
                          }
                        } catch (_0x1bd218) {
                          _0x31e78d(null);
                        }
                      }
                    }
                  });
                });
                if (_0x26e8ae) {
                  const _0x41a705 = String(Date.now() - parseInt(_0x26e8ae));
                  const _0xf073f8 = {
                    _0x4dde02: _0x5314e0,
                    tel: _0x1178b8,
                    id: _0x5b16d2._0x1f840b,
                    _0x3cf3e3: _0x41a705,
                    _0x3b4040: null
                  };
                  const _0x13a88b = {
                    _0x5d2fa4: "application/json;charset=UTF-8",
                    channel: "H5",
                    _0x2c5e45: _0x1c4126,
                    _0x2a208e: "https://finance.foton.com.cn",
                    _0x57cbc5: "com.foton.almighty",
                    _0x32cd03: _0x511374,
                    _0x1ba970: "FOTONTGT=" + _0x23bc69
                  };
                  const _0x48a2a6 = {
                    url: _0x3d4dad + "/ehomes-new/homeManager//api/bonus/addIntegralForShare",
                    headers: _0x13a88b,
                    body: JSON.stringify(_0xf073f8)
                  };
                  await new Promise(_0x5c1df1 => {
                    {
                      _0x3cf6dc.post(_0x48a2a6, (_0x4f9f69, _0x403e26, _0x368698) => {
                        if (_0x4f9f69) {
                          console.log("[" + _0x35c8d6 + "]分享任务结果: 请求错误 - " + _0x4f9f69);
                        } else {
                          {
                            try {
                              const _0x425215 = JSON.parse(_0x368698);
                              if (_0x425215.code === 200 && _0x425215.data) {
                                const _0x426cc9 = _0x425215.data._0x589bbf || (_0x425215.data.data ? _0x425215.data.data._0x589bbf : undefined);
                                if (_0x426cc9 !== undefined) {
                                  {
                                    console.log("[" + _0x35c8d6 + "]分享任务结果: 获得" + _0x426cc9 + "积分");
                                  }
                                } else {
                                  console.log("[" + _0x35c8d6 + "]分享任务结果: " + (_0x425215._0x207707 || "成功但未获取到积分信息"));
                                }
                              } else {
                                console.log("[" + _0x35c8d6 + "]分享任务结果: " + (_0x425215._0x207707 || JSON.stringify(_0x425215)));
                              }
                            } catch (_0x410f0) {
                              {
                                console.log("[" + _0x35c8d6 + "]分享任务结果: 解析响应错误 - " + _0x410f0);
                              }
                            }
                          }
                        }
                        _0x5c1df1();
                      });
                    }
                  });
                } else {
                  console.log("[" + _0x35c8d6 + "]保客分享：跳过，因获取finance safeKey失败");
                }
              }
            }
          }
          if (_0x5b16d2._0x33374e === "关注") {
            {
              if (_0x469d3f === "1") {
                {
                  await _0x4a10e9(45, 90);
                  const _0x483e6c = await _0x466058("/ehomes-new/ehomesCommunity/api/post/recommendPostList", {
                    _0x4dde02: _0x3214c0,
                    _0x3b4040: _0x138689,
                    _0x42816c: "61",
                    _0x3b693d: _0x138689,
                    _0x17395f: _0x1178b8,
                    tel: _0x1178b8,
                    phone: _0x1178b8,
                    _0x36b1f8: "",
                    _0x31f33d: "",
                    _0x3b2c8e: "ebf76685e48d4e14a9de6fccc76483e3",
                    _0x3cf3e3: Date.now() - (_0x1dc67f || 0),
                    _0x5cccdc: 1,
                    position: "1",
                    _0x227019: "1",
                    _0x3d7f5c: 9
                  });
                  if (_0x483e6c.code === 200 && _0x483e6c.data && _0x483e6c.data.length > 0) {
                    const _0x4bde63 = _0x483e6c.data;
                    const _0xc650d2 = _0x4bde63[Math.floor(Math.random() * _0x4bde63.length)]._0x4dde02;
                    await _0x466058("/ehomes-new/ehomesCommunity/api/post/follow2nd", {
                      _0x4dde02: _0x5314e0,
                      _0x3b4040: _0x138689,
                      _0x42816c: "61",
                      _0x3b693d: _0x138689,
                      _0x17395f: _0x1178b8,
                      tel: _0x1178b8,
                      phone: _0x1178b8,
                      _0x36b1f8: "",
                      _0x31f33d: "",
                      _0x3b2c8e: "ebf76685e48d4e14a9de6fccc76483e3",
                      _0x3cf3e3: Date.now() - (_0x1dc67f || 0),
                      _0x5cccdc: 1,
                      behavior: "1",
                      _0x1eb4ab: _0xc650d2,
                      _0x1f6032: "null"
                    });
                    console.log("[" + _0x35c8d6 + "]关注ID " + _0xc650d2 + " 成功");
                    await _0x4a10e9(1, 3);
                    await _0x466058("/ehomes-new/ehomesCommunity/api/post/follow2nd", {
                      _0x4dde02: _0x5314e0,
                      _0x3b4040: _0x138689,
                      _0x42816c: "61",
                      _0x3b693d: _0x138689,
                      _0x17395f: _0x1178b8,
                      tel: _0x1178b8,
                      phone: _0x1178b8,
                      _0x36b1f8: "",
                      _0x31f33d: "",
                      _0x3b2c8e: "ebf76685e48d4e14a9de6fccc76483e3",
                      _0x3cf3e3: Date.now() - (_0x1dc67f || 0),
                      _0x5cccdc: 1,
                      behavior: "2",
                      _0x1eb4ab: _0xc650d2,
                      _0x1f6032: "null"
                    });
                    console.log("[" + _0x35c8d6 + "]取关ID " + _0xc650d2 + " 成功");
                  } else {
                    console.log("[" + _0x35c8d6 + "]获取推荐帖子列表失败或列表为空，无法执行关注任务: " + (_0x483e6c._0x207707 || ""));
                  }
                }
              }
            }
          }
          if (_0x5b16d2._0x33374e === "发帖") {
            {
              if (_0x442577 === "1") {
                const _0x54de98 = await _0x7cd08c("/ehomes-new/ehomesCommunity/api/post/topicList", {
                  _0x4dde02: _0x3214c0,
                  _0x3b4040: _0x138689,
                  _0x42816c: "61",
                  _0x3b693d: _0x138689,
                  _0x17395f: _0x1178b8,
                  tel: _0x1178b8,
                  phone: _0x1178b8,
                  _0x36b1f8: "",
                  _0x31f33d: "",
                  _0x3b2c8e: "ebf76685e48d4e14a9de6fccc76483e3",
                  _0x3cf3e3: Date.now() - (_0x1dc67f || 0),
                  _0x5cccdc: 1
                });
                if (_0x54de98.code === 200 && _0x54de98.data && _0x54de98.data.top && _0x54de98.data.top.length > 0) {
                  const _0x21f901 = _0x54de98.data.top;
                  const _0x2bfe78 = _0x21f901[Math.floor(Math.random() * _0x21f901.length)]._0x3003fc;
                  const _0x16af27 = (await _0x52c7f7()) || "生活就像一杯茶，不会苦一辈子，但要学会等待她的甘甜。";
                  await _0x4a10e9(45, 90);
                  const _0x3321e4 = await _0x466058("/ehomes-new/ehomesCommunity/api/post/addJson2nd", {
                    _0x4dde02: _0x5314e0,
                    _0x3b4040: _0x138689,
                    _0x42816c: "61",
                    _0x3b693d: _0x138689,
                    _0x17395f: _0x1178b8,
                    tel: _0x1178b8,
                    phone: _0x1178b8,
                    _0x36b1f8: "",
                    _0x31f33d: "",
                    _0x3b2c8e: "ebf76685e48d4e14a9de6fccc76483e3",
                    _0x3cf3e3: Date.now() - (_0x1dc67f || 0),
                    _0x5cccdc: 1,
                    content: _0x16af27,
                    _0x1bd993: 1,
                    _0x510413: [_0x2bfe78],
                    _0x2e0c9a: 3,
                    title: "",
                    _0x498c5e: []
                  });
                  if (_0x3321e4.code === 200) {
                    {
                      console.log("[" + _0x35c8d6 + "]发帖成功");
                    }
                  } else {
                    {
                      console.log("[" + _0x35c8d6 + "]发帖失败: " + (_0x3321e4._0x207707 || "未知错误"));
                    }
                  }
                } else {
                  {
                    console.log("[" + _0x35c8d6 + "]获取话题列表失败或列表为空，无法执行发帖任务: " + (_0x54de98._0x207707 || ""));
                  }
                }
              }
            }
          }
        }
      }
    } else {
      console.log("[" + _0x35c8d6 + "]获取任务列表失败或列表为空: " + (_0x580425._0x207707 || ""));
    }
    if (_0x36aa6e === "1") {
      {
        const _0x314866 = await _0x3c74c3(_0x1178b8, _0x2180db, _0x35c8d6);
        console.log(_0x314866);
      }
    }
    if (_0x452d3b === "1") {
      {
        _0x23bc69 ? await _0x4f9a9e(_0x3214c0, _0x5314e0, _0x1178b8, _0x23bc69, _0x35c8d6) : console.log("[" + _0x35c8d6 + "]缺少ticketValue, 无法进行春日抽奖");
      }
    }
    if (_0xaca742 === "1") {
      {
        if (_0x23bc69) {
          await _0x1f1c8b(_0x3214c0, _0x5314e0, _0x1178b8, _0x23bc69, _0x35c8d6);
        } else {
          {
            console.log("[" + _0x35c8d6 + "]缺少ticketValue, 无法进行积分转盘抽奖");
          }
        }
      }
    }
    if (_0x1fac42 === "1") {
      {
        await _0x1e11be(_0xc86ec.data, _0x1178b8, _0x35c8d6);
      }
    }
    const _0x2605c6 = await _0x466058("/ehomes-new/homeManager/api/Member/findMemberPointsInfo", {
      _0x4dde02: _0x3214c0,
      _0x3b4040: _0x138689,
      _0x42816c: "61",
      _0x3b693d: _0x138689,
      _0x17395f: _0x1178b8,
      tel: _0x1178b8,
      phone: _0x1178b8,
      _0x36b1f8: "",
      _0x31f33d: "",
      _0x3b2c8e: "ebf76685e48d4e14a9de6fccc76483e3",
      _0x3cf3e3: Date.now() - (_0x1dc67f || 0),
      _0x5cccdc: 1
    });
    return "[" + _0x35c8d6 + "]" + _0x5bce18 + " 当前积分：" + (_0x2605c6.data?.["_0x3f2140"] !== undefined ? _0x2605c6.data._0x3f2140 : "查询失败") + "\n";
  } catch (_0x22d298) {
    {
      let _0x27b093;
      if (typeof phone === "string" && phone) {
        _0x27b093 = phone.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
      } else {
        if (typeof _0x19183e === "string" && _0x19183e) {
          {
            const _0x4c4d40 = _0x19183e.split("#");
            const _0x43a15e = _0x4c4d40[0];
            if (_0x43a15e && _0x43a15e.length > 7 && /^\d+$/.test(_0x43a15e)) {
              _0x27b093 = _0x43a15e.substring(0, 3) + "****" + _0x43a15e.substring(_0x43a15e.length - 4);
            } else {
              _0x43a15e ? _0x27b093 = "" : _0x27b093 = "";
            }
          }
        } else {
          _0x27b093 = "";
        }
      }
      console.error("[" + _0x35c8d6 + "]" + _0x22d298.message);
      return "[" + _0x35c8d6 + "]" + _0x22d298.message + "\n";
    }
  }
}
async function _0x7cd08c(_0x54d837, _0xaa7e54) {
  return new Promise(_0x2c8d00 => {
    const _0x5e8cc0 = {
      _0x24c6ba: "application/json;charset=utf-8",
      _0x1a41f0: "Keep-Alive",
      _0x58126e: "okhttp/3.14.9",
      _0x5b8f03: "gzip"
    };
    const _0x1e63ea = {
      url: "https://czyl.foton.com.cn" + _0x54d837,
      headers: _0x5e8cc0,
      body: JSON.stringify(_0xaa7e54)
    };
    _0x3cf6dc.post(_0x1e63ea, async (_0x284dd0, _0x2ced50, _0x5827b2) => {
      {
        try {
          {
            if (_0x284dd0) {
              console.log("" + JSON.stringify(_0x284dd0));
              console.log(_0x3cf6dc.name + " API请求失败，请检查网路重试");
              const _0xd6ce53 = {
                code: 500
              };
              return _0x2c8d00(_0xd6ce53);
            } else {
              await _0x3cf6dc.wait(2000);
              _0x2c8d00(JSON.parse(_0x5827b2));
            }
          }
        } catch (_0x112208) {
          {
            _0x3cf6dc._0x1458e9(_0x112208, _0x2ced50);
            const _0x52f17d = {
              code: 500
            };
            _0x2c8d00(_0x52f17d);
          }
        }
      }
    });
  });
}
async function _0x78a8cd(_0x7a8484, _0x2c204d) {
  return new Promise(_0x12487d => {
    const _0x24c7ff = {
      _0x24c6ba: "application/json;charset=utf-8",
      channel: "1",
      _0x5b8f03: "gzip"
    };
    const _0xe98ca4 = {
      url: "https://czyl.foton.com.cn" + _0x7a8484,
      headers: _0x24c7ff,
      body: JSON.stringify(_0x2c204d)
    };
    _0x3cf6dc.post(_0xe98ca4, async (_0x2531ee, _0x3b0690, _0x415020) => {
      {
        try {
          if (_0x2531ee) {
            {
              console.log("" + JSON.stringify(_0x2531ee));
              console.log(_0x3cf6dc.name + " API请求失败，请检查网路重试，跳过当前账号");
              const _0x2b5b2e = {
                code: 500
              };
              return _0x12487d(_0x2b5b2e);
            }
          } else {
            await _0x3cf6dc.wait(2000);
            _0x12487d(JSON.parse(_0x415020));
          }
        } catch (_0x35bd6d) {
          {
            _0x3cf6dc._0x1458e9(_0x35bd6d, _0x3b0690);
            const _0x13e592 = {
              code: 500
            };
            _0x12487d(_0x13e592);
          }
        }
      }
    });
  });
}
async function _0x466058(_0x242879, _0x2ecae0) {
  return new Promise(_0x2bd74a => {
    const _0x422d91 = {
      _0x24c6ba: "application/json;charset=utf-8",
      _0x1a41f0: "Keep-Alive",
      _0x3b2c8e: "",
      _0x1c499e: "7918d2d1a92a02cbc577adb8d570601e72d3b640",
      _0xe33332: "58891364f56afa1b6b7dae3e4bbbdfbfde9ef489",
      _0x58126e: "web",
      _0x5b8f03: "gzip"
    };
    const _0xa99c93 = {
      url: "https://czyl.foton.com.cn" + _0x242879,
      headers: _0x422d91,
      body: JSON.stringify(_0x2ecae0)
    };
    _0x3cf6dc.post(_0xa99c93, async (_0x288b38, _0xb22a30, _0xe5ad23) => {
      try {
        if (_0x288b38) {
          console.log("" + JSON.stringify(_0x288b38));
          console.log(_0x3cf6dc.name + " API请求失败，请检查网路重试，跳过该请求");
          const _0x4c70e7 = {
            code: 500
          };
          return _0x2bd74a(_0x4c70e7);
        } else {
          await _0x3cf6dc.wait(2000);
          _0x2bd74a(JSON.parse(_0xe5ad23));
        }
      } catch (_0x367f0c) {
        _0x3cf6dc._0x1458e9(_0x367f0c, _0xb22a30);
        const _0x4c8d9f = {
          code: 500
        };
        _0x2bd74a(_0x4c8d9f);
      }
    });
  });
}
async function _0x5e5472(_0x121342, _0x7466c5) {
  return new Promise(_0x231bbc => {
    const _0x2b9091 = "https://czyl.foton.com.cn" + _0x121342;
    const _0x30c362 = {
      url: _0x2b9091,
      ..._0x7466c5
    };
    const _0x24c94b = _0x30c362;
    if (_0x7466c5.body && typeof _0x7466c5.body === "object" && !Buffer.isBuffer(_0x7466c5.body) && !(_0x7466c5.headers && _0x7466c5.headers._0x5d2fa4 && _0x7466c5.headers._0x5d2fa4.includes("x-www-form-urlencoded"))) {
      {
        _0x24c94b.body = JSON.stringify(_0x7466c5.body);
      }
    }
    _0x3cf6dc.post(_0x24c94b, async (_0x127df6, _0x4f9457, _0x135916) => {
      {
        try {
          if (_0x127df6) {
            {
              console.log("❌ API请求失败: " + JSON.stringify(_0x127df6));
              const _0x4d6fad = {
                code: 500,
                _0x207707: _0x127df6.message
              };
              return _0x231bbc(_0x4d6fad);
            }
          } else {
            await _0x3cf6dc.wait(2000);
            _0x231bbc({
              code: _0x4f9457.statusCode,
              headers: _0x4f9457.headers,
              data: JSON.parse(_0x135916)
            });
          }
        } catch (_0x344cce) {
          {
            console.log("❌ 解析响应失败: " + _0x344cce.message);
            const _0x59396b = {
              code: _0x4f9457 ? _0x4f9457.statusCode : 500,
              headers: _0x4f9457 ? _0x4f9457.headers : {},
              _0x207707: _0x344cce.message,
              _0x2bc81b: _0x135916
            };
            _0x231bbc(_0x59396b);
          }
        }
      }
    });
  });
}
async function _0x482b0c(_0x42680e, _0x25318c, _0x5964fe) {
  return new Promise(_0xeedfa6 => {
    const _0x574efc = {
      _0x24c6ba: "application/json;charset=utf-8",
      channel: "1",
      _0x3b2c8e: _0x5964fe,
      _0x5b8f03: "gzip"
    };
    const _0x335f37 = {
      url: "https://czyl.foton.com.cn" + _0x42680e,
      headers: _0x574efc,
      body: JSON.stringify(_0x25318c)
    };
    _0x3cf6dc.post(_0x335f37, async (_0x146c31, _0x9dd516, _0x18cf2c) => {
      {
        try {
          if (_0x146c31) {
            console.log("" + JSON.stringify(_0x146c31));
            console.log(_0x3cf6dc.name + " API请求失败，请检查网络重试，跳过该请求");
            const _0x14c265 = {
              code: 500
            };
            return _0xeedfa6(_0x14c265);
          } else {
            await _0x3cf6dc.wait(2000);
            _0xeedfa6(JSON.parse(_0x18cf2c));
          }
        } catch (_0x2a344e) {
          _0x3cf6dc._0x1458e9(_0x2a344e, _0x9dd516);
          const _0x5a6905 = {
            code: 500
          };
          _0xeedfa6(_0x5a6905);
        }
      }
    });
  });
}
async function _0x52c7f7() {
  return new Promise(_0x4f7d2c => {
    {
      const _0xca1da9 = {
        url: "http://api.btstu.cn/yan/api.php",
        headers: {}
      };
      _0x3cf6dc.get(_0xca1da9, async (_0x36e444, _0x2a588d, _0x4ced47) => {
        try {
          {
            if (_0x36e444) {
              {
                console.log("" + JSON.stringify(_0x36e444));
                console.log(_0x3cf6dc.name + " 获取随机文本失败，使用默认文本");
                return _0x4f7d2c("如果觉得没有朋友，就去找喜欢的人表白，对方会提出和你做朋友的。");
              }
            } else {
              {
                await _0x3cf6dc.wait(2000);
                _0x4f7d2c(_0x4ced47);
              }
            }
          }
        } catch (_0x504a4e) {
          _0x3cf6dc._0x1458e9(_0x504a4e, _0x2a588d);
          _0x4f7d2c("如果觉得没有朋友，就去找喜欢的人表白，对方会提出和你做朋友的。");
        }
      });
    }
  });
}
async function _0x415477(_0x5224f6) {
  if (_0x3cf6dc._0x2112d2()) {
    {
      let _0x8c7233 = "";
      try {
        {
          _0x8c7233 = require("./sendNotify");
        }
      } catch (_0x4c5e8f) {
        try {
          _0x8c7233 = require("../sendNotify");
        } catch (_0x2fcd90) {
          console.log("sendNotify.js模块加载失败，请确保它在脚本同级目录或上一级目录下");
          return;
        }
      }
      await _0x8c7233._0x52ff5a(_0x3cf6dc.name, _0x5224f6);
    }
  } else {
    _0x3cf6dc._0x207707(_0x3cf6dc.name, "", _0x5224f6);
  }
}
function _0x19ce45(_0x5c9a6d, _0x57389a) {
  class _0x4342c1 {
    constructor(_0x54c416) {
      this._0x64d858 = _0x54c416;
    }
    send(_0x1d24cd, _0x4de911 = "GET") {
      _0x1d24cd = "string" == typeof _0x1d24cd ? {
        url: _0x1d24cd
      } : _0x1d24cd;
      let _0xff93d6 = this.get;
      "POST" === _0x4de911 && (_0xff93d6 = this.post);
      return new Promise((_0x1a588b, _0xe421d1) => {
        _0xff93d6.call(this, _0x1d24cd, (_0xdf535e, _0x35bc81, _0x517d63) => {
          {
            _0xdf535e ? _0xe421d1(_0xdf535e) : _0x1a588b(_0x35bc81);
          }
        });
      });
    }
    get(_0xb6e74e) {
      return this.send.call(this._0x64d858, _0xb6e74e);
    }
    post(_0x249bcb) {
      {
        return this.send.call(this._0x64d858, _0x249bcb, "POST");
      }
    }
  }
  return new class {
    constructor(_0x3c5c1a, _0x88f32d) {
      const _0x15dd4e = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this._0x5c6bac = _0x15dd4e;
      const _0x2b5381 = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this._0x331efd = _0x2b5381;
      this._0x455bc9 = "info";
      this.name = _0x3c5c1a;
      this.http = new _0x4342c1(this);
      this.data = null;
      this._0xd5f147 = "box.dat";
      this._0x575dc8 = [];
      this._0x2a4683 = false;
      this._0x2c9382 = false;
      this._0x887268 = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x88f32d);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    _0x41d4c5() {
      return "undefined" != typeof $environment && $environment._0x4f9518 ? "Surge" : "undefined" != typeof $environment && $environment._0x1f0169 ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : undefined;
    }
    _0x2112d2() {
      return "Node.js" === this._0x41d4c5();
    }
    _0x154266() {
      return "Quantumult X" === this._0x41d4c5();
    }
    _0x5085a7() {
      return "Surge" === this._0x41d4c5();
    }
    _0x583342() {
      return "Loon" === this._0x41d4c5();
    }
    _0x21c4e1() {
      return "Shadowrocket" === this._0x41d4c5();
    }
    _0x3a0716() {
      {
        return "Stash" === this._0x41d4c5();
      }
    }
    _0x459e42(_0x32e7f6, _0x39e565 = null) {
      try {
        {
          return JSON.parse(_0x32e7f6);
        }
      } catch {
        return _0x39e565;
      }
    }
    _0xe9ba23(_0x37bc1e, _0xdde1c5 = null, ..._0x34377e) {
      {
        try {
          return JSON.stringify(_0x37bc1e, ..._0x34377e);
        } catch {
          return _0xdde1c5;
        }
      }
    }
    _0x2b97e4(_0x4b2182, _0x108bb7) {
      let _0x3efd93 = _0x108bb7;
      if (this._0x2de62f(_0x4b2182)) {
        {
          try {
            _0x3efd93 = JSON.parse(this._0x2de62f(_0x4b2182));
          } catch {}
        }
      }
      return _0x3efd93;
    }
    _0x4500f5(_0x5f025c, _0x4c9abb) {
      try {
        return this._0x43c59f(JSON.stringify(_0x5f025c), _0x4c9abb);
      } catch {
        return false;
      }
    }
    _0x923960(_0x57b676) {
      {
        return new Promise(_0x4103f0 => {
          {
            const _0x317825 = {
              url: _0x57b676
            };
            this.get(_0x317825, (_0x107c8c, _0x292326, _0x23a21c) => _0x4103f0(_0x23a21c));
          }
        });
      }
    }
    _0x21ec1c(_0x4f76d3, _0x50673e) {
      return new Promise(_0x3e46f2 => {
        let _0xa38486 = this._0x2de62f("@chavy_boxjs_userCfgs.httpapi");
        _0xa38486 = _0xa38486 ? _0xa38486.replace(/\n/g, "").trim() : _0xa38486;
        let _0x3ee87d = this._0x2de62f("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x3ee87d = _0x3ee87d ? 1 * _0x3ee87d : 20;
        _0x3ee87d = _0x50673e && _0x50673e.timeout ? _0x50673e.timeout : _0x3ee87d;
        const _0x4f5a65 = {
          _0x1bdf64: _0x4f76d3,
          _0x27410: "cron",
          timeout: _0x3ee87d
        };
        const [_0x1d4253, _0x451daa] = _0xa38486.split("@");
        const _0x4d8696 = {
          url: "http://" + _0x451daa + "/v1/scripting/evaluate",
          body: _0x4f5a65,
          headers: {
            _0xd0a377: _0x1d4253,
            _0x5e8643: "*/*"
          },
          timeout: _0x3ee87d
        };
        this.post(_0x4d8696, (_0x86c2e1, _0x16c80b, _0x6acaa) => _0x3e46f2(_0x6acaa));
      }).catch(_0x43fae3 => this._0x1458e9(_0x43fae3));
    }
    _0x54fbae() {
      if (!this._0x2112d2()) {
        return {};
      }
      {
        {
          this.fs = this.fs ? this.fs : require("fs");
          this.path = this.path ? this.path : require("path");
          const _0x223d68 = this.path.resolve(this._0xd5f147);
          const _0x4ee00a = this.path.resolve(process._0x513a52(), this._0xd5f147);
          const _0x3e3aaf = this.fs._0x5243d6(_0x223d68);
          const _0xcb6c95 = !_0x3e3aaf && this.fs._0x5243d6(_0x4ee00a);
          if (!_0x3e3aaf && !_0xcb6c95) {
            {
              return {};
            }
          }
          {
            {
              const _0x2d3866 = _0x3e3aaf ? _0x223d68 : _0x4ee00a;
              try {
                return JSON.parse(this.fs._0x2fa7d8(_0x2d3866));
              } catch (_0x1ff6c7) {
                return {};
              }
            }
          }
        }
      }
    }
    _0x2d2347() {
      if (this._0x2112d2()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x235095 = this.path.resolve(this._0xd5f147);
        const _0x5272e5 = this.path.resolve(process._0x513a52(), this._0xd5f147);
        const _0x31ebae = this.fs._0x5243d6(_0x235095);
        const _0x15065c = !_0x31ebae && this.fs._0x5243d6(_0x5272e5);
        const _0x229c85 = JSON.stringify(this.data);
        _0x31ebae ? this.fs._0x2f5bfc(_0x235095, _0x229c85) : _0x15065c ? this.fs._0x2f5bfc(_0x5272e5, _0x229c85) : this.fs._0x2f5bfc(_0x235095, _0x229c85);
      }
    }
    _0x298d3c(_0x1fa734, _0x5089d2, _0x27d497) {
      {
        const _0x197bc2 = _0x5089d2.replace(/\[(\d+)\]/g, ".$1").split(".");
        let _0x2ea483 = _0x1fa734;
        for (const _0x5c950a of _0x197bc2) if (_0x2ea483 = Object(_0x2ea483)[_0x5c950a], undefined === _0x2ea483) {
          return _0x27d497;
        }
        return _0x2ea483;
      }
    }
    _0x2bc912(_0xbe380d, _0x26974c, _0x4412e4) {
      Object(_0xbe380d) !== _0xbe380d || (Array.isArray(_0x26974c) || (_0x26974c = _0x26974c.toString().match(/[^.[\]]+/g) || []), _0x26974c.slice(0, -1).reduce((_0x5d619a, _0x1511fd, _0x56cc9e) => Object(_0x5d619a[_0x1511fd]) === _0x5d619a[_0x1511fd] ? _0x5d619a[_0x1511fd] : _0x5d619a[_0x1511fd] = Math.abs(_0x26974c[_0x56cc9e + 1]) >> 0 == +_0x26974c[_0x56cc9e + 1] ? [] : {}, _0xbe380d)[_0x26974c[_0x26974c.length - 1]] = _0x4412e4);
      return _0xbe380d;
    }
    _0x2de62f(_0x3138c6) {
      {
        let _0x34ed32 = this._0x2ca0a9(_0x3138c6);
        if (/^@/.test(_0x3138c6)) {
          {
            const [, _0xf81d7f, _0x4c53ba] = /^@(.*?)\.(.*?)$/.exec(_0x3138c6);
            const _0x33edd3 = _0xf81d7f ? this._0x2ca0a9(_0xf81d7f) : "";
            if (_0x33edd3) {
              try {
                const _0x8bc0f7 = JSON.parse(_0x33edd3);
                _0x34ed32 = _0x8bc0f7 ? this._0x298d3c(_0x8bc0f7, _0x4c53ba, "") : _0x34ed32;
              } catch (_0x22eb88) {
                _0x34ed32 = "";
              }
            }
          }
        }
        return _0x34ed32;
      }
    }
    _0x43c59f(_0x2ed839, _0x55f450) {
      {
        let _0x253534 = false;
        if (/^@/.test(_0x55f450)) {
          {
            const [, _0x1ea40c, _0x3d7455] = /^@(.*?)\.(.*?)$/.exec(_0x55f450);
            const _0x36ab0f = this._0x2ca0a9(_0x1ea40c);
            const _0x46784a = _0x1ea40c ? "null" === _0x36ab0f ? null : _0x36ab0f || "{}" : "{}";
            try {
              {
                const _0x1e8070 = JSON.parse(_0x46784a);
                this._0x2bc912(_0x1e8070, _0x3d7455, _0x2ed839);
                _0x253534 = this._0x318558(JSON.stringify(_0x1e8070), _0x1ea40c);
              }
            } catch (_0x744d2e) {
              {
                const _0x3d09f5 = {};
                this._0x2bc912(_0x3d09f5, _0x3d7455, _0x2ed839);
                _0x253534 = this._0x318558(JSON.stringify(_0x3d09f5), _0x1ea40c);
              }
            }
          }
        } else {
          _0x253534 = this._0x318558(_0x2ed839, _0x55f450);
        }
        return _0x253534;
      }
    }
    _0x2ca0a9(_0x1d8e14) {
      {
        switch (this._0x41d4c5()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
            return $persistentStore.read(_0x1d8e14);
          case "Quantumult X":
            return $prefs._0x189075(_0x1d8e14);
          case "Node.js":
            this.data = this._0x54fbae();
            return this.data[_0x1d8e14];
          default:
            return this.data && this.data[_0x1d8e14] || null;
        }
      }
    }
    _0x318558(_0x5cb9dc, _0x3f0ecf) {
      {
        switch (this._0x41d4c5()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
            return $persistentStore.write(_0x5cb9dc, _0x3f0ecf);
          case "Quantumult X":
            return $prefs._0x507ca2(_0x5cb9dc, _0x3f0ecf);
          case "Node.js":
            this.data = this._0x54fbae();
            this.data[_0x3f0ecf] = _0x5cb9dc;
            this._0x2d2347();
            return true;
          default:
            return this.data && this.data[_0x3f0ecf] || null;
        }
      }
    }
    _0x2b4640(_0x4bfae3) {
      this.got = this.got ? this.got : require("got");
      this._0x1c518f = this._0x1c518f ? this._0x1c518f : require("tough-cookie");
      this._0x507ceb = this._0x507ceb ? this._0x507ceb : new this._0x1c518f._0xe589f2();
      _0x4bfae3 && (_0x4bfae3.headers = _0x4bfae3.headers ? _0x4bfae3.headers : {}, _0x4bfae3 && (_0x4bfae3.headers = _0x4bfae3.headers ? _0x4bfae3.headers : {}, undefined === _0x4bfae3.headers.cookie && undefined === _0x4bfae3.headers._0x1ba970 && undefined === _0x4bfae3._0x5720bd && (_0x4bfae3._0x5720bd = this._0x507ceb)));
    }
    get(_0xa5e282, _0xe3e39c = () => {}) {
      {
        const _0x1aba09 = {
          _0xb40ab3: false
        };
        switch (_0xa5e282.headers && (delete _0xa5e282.headers._0x5d2fa4, delete _0xa5e282.headers._0x3dfa8e, delete _0xa5e282.headers._0x24c6ba, delete _0xa5e282.headers._0x3818d9), _0xa5e282._0x54a785 && (_0xa5e282.url += "?" + this._0x2d12d5(_0xa5e282._0x54a785)), undefined === _0xa5e282._0x55ba78 || _0xa5e282._0x55ba78 || ((this._0x5085a7() || this._0x583342()) && (_0xa5e282._0xa8ff70 = false), this._0x154266() && (_0xa5e282._0x2a582a ? _0xa5e282._0x2a582a._0xb40ab3 = false : _0xa5e282._0x2a582a = _0x1aba09)), this._0x41d4c5()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            const _0x34c7d3 = {
              _0x211db8: false
            };
            this._0x5085a7() && this._0x2c9382 && (_0xa5e282.headers = _0xa5e282.headers || {}, Object.assign(_0xa5e282.headers, _0x34c7d3));
            $httpClient.get(_0xa5e282, (_0x524229, _0x33f26a, _0x14dc3c) => {
              {
                !_0x524229 && _0x33f26a && (_0x33f26a.body = _0x14dc3c, _0x33f26a.statusCode = _0x33f26a.status ? _0x33f26a.status : _0x33f26a.statusCode, _0x33f26a.status = _0x33f26a.statusCode);
                _0xe3e39c(_0x524229, _0x33f26a, _0x14dc3c);
              }
            });
            break;
          case "Quantumult X":
            const _0x12dce2 = {
              _0x45a6be: false
            };
            this._0x2c9382 && (_0xa5e282._0x2a582a = _0xa5e282._0x2a582a || {}, Object.assign(_0xa5e282._0x2a582a, _0x12dce2));
            $task.fetch(_0xa5e282).then(_0x370ebe => {
              const {
                statusCode: _0x185717,
                statusCode: _0x15437c,
                headers: _0x16a027,
                body: _0x514107,
                _0xd58a16: _0x427947
              } = _0x370ebe;
              const _0x6f6291 = {
                status: _0x185717,
                statusCode: _0x15437c,
                headers: _0x16a027,
                body: _0x514107,
                _0xd58a16: _0x427947
              };
              _0xe3e39c(null, _0x6f6291, _0x514107, _0x427947);
            }, _0x3c3d58 => _0xe3e39c(_0x3c3d58 && _0x3c3d58.error || "UndefinedError"));
            break;
          case "Node.js":
            let _0x53a547 = require("iconv-lite");
            this._0x2b4640(_0xa5e282);
            this.got(_0xa5e282)._0x151581("redirect", (_0x261975, _0x5974dc) => {
              try {
                if (_0x261975.headers._0x56ea93) {
                  {
                    const _0x12df67 = _0x261975.headers._0x56ea93.map(this._0x1c518f._0x1ba970.parse).toString();
                    _0x12df67 && this._0x507ceb._0x22204d(_0x12df67, null);
                    _0x5974dc._0x5720bd = this._0x507ceb;
                  }
                }
              } catch (_0x2203d4) {
                this._0x1458e9(_0x2203d4);
              }
            }).then(_0x5579fc => {
              const {
                statusCode: _0x5baf04,
                statusCode: _0x318af3,
                headers: _0x31e1d4,
                _0x3aa189: _0x25e284
              } = _0x5579fc;
              const _0x5da9ae = _0x53a547.decode(_0x25e284, this.encoding);
              const _0x24a7de = {
                status: _0x5baf04,
                statusCode: _0x318af3,
                headers: _0x31e1d4,
                _0x3aa189: _0x25e284,
                body: _0x5da9ae
              };
              _0xe3e39c(null, _0x24a7de, _0x5da9ae);
            }, _0x3aaa05 => {
              const {
                message: _0x37d2d7,
                response: _0xb97205
              } = _0x3aaa05;
              _0xe3e39c(_0x37d2d7, _0xb97205, _0xb97205 && _0x53a547.decode(_0xb97205._0x3aa189, this.encoding));
            });
            break;
        }
      }
    }
    post(_0x47565f, _0x3c043a = () => {}) {
      {
        const _0x496211 = _0x47565f.method ? _0x47565f.method.toLocaleLowerCase() : "post";
        const _0x13bd3d = {
          _0xb40ab3: false
        };
        switch (_0x47565f.body && _0x47565f.headers && !_0x47565f.headers._0x5d2fa4 && !_0x47565f.headers._0x24c6ba && (_0x47565f.headers._0x24c6ba = "application/x-www-form-urlencoded"), _0x47565f.headers && (delete _0x47565f.headers._0x3dfa8e, delete _0x47565f.headers._0x3818d9), undefined === _0x47565f._0x55ba78 || _0x47565f._0x55ba78 || ((this._0x5085a7() || this._0x583342()) && (_0x47565f._0xa8ff70 = false), this._0x154266() && (_0x47565f._0x2a582a ? _0x47565f._0x2a582a._0xb40ab3 = false : _0x47565f._0x2a582a = _0x13bd3d)), this._0x41d4c5()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            const _0xc04c90 = {
              _0x211db8: false
            };
            this._0x5085a7() && this._0x2c9382 && (_0x47565f.headers = _0x47565f.headers || {}, Object.assign(_0x47565f.headers, _0xc04c90));
            $httpClient[_0x496211](_0x47565f, (_0x4a51c3, _0x4594a7, _0x3e2862) => {
              !_0x4a51c3 && _0x4594a7 && (_0x4594a7.body = _0x3e2862, _0x4594a7.statusCode = _0x4594a7.status ? _0x4594a7.status : _0x4594a7.statusCode, _0x4594a7.status = _0x4594a7.statusCode);
              _0x3c043a(_0x4a51c3, _0x4594a7, _0x3e2862);
            });
            break;
          case "Quantumult X":
            _0x47565f.method = _0x496211;
            const _0x41e3ce = {
              _0x45a6be: false
            };
            this._0x2c9382 && (_0x47565f._0x2a582a = _0x47565f._0x2a582a || {}, Object.assign(_0x47565f._0x2a582a, _0x41e3ce));
            $task.fetch(_0x47565f).then(_0x16feb6 => {
              const {
                statusCode: _0x5681f7,
                statusCode: _0x3d5939,
                headers: _0x4039d2,
                body: _0x538ac7,
                _0xd58a16: _0x31b973
              } = _0x16feb6;
              const _0x2d8c35 = {
                status: _0x5681f7,
                statusCode: _0x3d5939,
                headers: _0x4039d2,
                body: _0x538ac7,
                _0xd58a16: _0x31b973
              };
              _0x3c043a(null, _0x2d8c35, _0x538ac7, _0x31b973);
            }, _0x2c07c1 => _0x3c043a(_0x2c07c1 && _0x2c07c1.error || "UndefinedError"));
            break;
          case "Node.js":
            let _0x380d02 = require("iconv-lite");
            this._0x2b4640(_0x47565f);
            const {
              url: _0x1fe2dd,
              ..._0x34d55e
            } = _0x47565f;
            this.got[_0x496211](_0x1fe2dd, _0x34d55e).then(_0x7a2cd2 => {
              {
                const {
                  statusCode: _0x16c736,
                  statusCode: _0x30b305,
                  headers: _0x416465,
                  _0x3aa189: _0x5eda86
                } = _0x7a2cd2;
                const _0x2107c3 = _0x380d02.decode(_0x5eda86, this.encoding);
                const _0x309fa0 = {
                  status: _0x16c736,
                  statusCode: _0x30b305,
                  headers: _0x416465,
                  _0x3aa189: _0x5eda86,
                  body: _0x2107c3
                };
                _0x3c043a(null, _0x309fa0, _0x2107c3);
              }
            }, _0x31f755 => {
              const {
                message: _0x3e8e62,
                response: _0x2067d1
              } = _0x31f755;
              _0x3c043a(_0x3e8e62, _0x2067d1, _0x2067d1 && _0x380d02.decode(_0x2067d1._0x3aa189, this.encoding));
            });
            break;
        }
      }
    }
    time(_0x72fada, _0x145bfd = null) {
      {
        const _0x3e7c8a = _0x145bfd ? new Date(_0x145bfd) : new Date();
        let _0x4116ed = {
          _0x5bb113: _0x3e7c8a.getMonth() + 1,
          _0x33c4f1: _0x3e7c8a.getDate(),
          _0x5bf842: _0x3e7c8a.getHours(),
          _0x3eccaa: _0x3e7c8a.getMinutes(),
          _0x1288fb: _0x3e7c8a.getSeconds(),
          _0x4712a7: Math.floor((_0x3e7c8a.getMonth() + 3) / 3),
          _0x1f4379: _0x3e7c8a.getMilliseconds()
        };
        /(y+)/.test(_0x72fada) && (_0x72fada = _0x72fada.replace(RegExp.$1, (_0x3e7c8a.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (let _0x12c769 in _0x4116ed) new RegExp("(" + _0x12c769 + ")").test(_0x72fada) && (_0x72fada = _0x72fada.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x4116ed[_0x12c769] : ("00" + _0x4116ed[_0x12c769]).substr(("" + _0x4116ed[_0x12c769]).length)));
        return _0x72fada;
      }
    }
    _0x2d12d5(_0x5a4c76) {
      let _0x235b03 = "";
      for (const _0x224559 in _0x5a4c76) {
        {
          let _0x3b90de = _0x5a4c76[_0x224559];
          null != _0x3b90de && "" !== _0x3b90de && ("object" == typeof _0x3b90de && (_0x3b90de = JSON.stringify(_0x3b90de)), _0x235b03 += _0x224559 + "=" + _0x3b90de + "&");
        }
      }
      _0x235b03 = _0x235b03.substring(0, _0x235b03.length - 1);
      return _0x235b03;
    }
    _0x207707(_0x554d4d = _0x5c9a6d, _0x58af5c = "", _0x1a8a88 = "", _0x5ca0c6 = {}) {
      const _0x1f845b = _0x49f4f5 => {
        {
          const {
            _0x4fecfb: _0x41c883,
            _0x1854a8: _0x479c80,
            _0x3da08a: _0x5251a6,
            _0xeb0285: _0x3eab8b
          } = _0x49f4f5;
          switch (typeof _0x49f4f5) {
            case undefined:
              return _0x49f4f5;
            case "string":
              switch (this._0x41d4c5()) {
                case "Surge":
                case "Stash":
                default:
                  const _0x60f9df = {
                    url: _0x49f4f5
                  };
                  return _0x60f9df;
                case "Loon":
                case "Shadowrocket":
                  return _0x49f4f5;
                case "Quantumult X":
                  const _0x46fbb9 = {
                    "open-url": _0x49f4f5
                  };
                  return _0x46fbb9;
                case "Node.js":
                  return;
              }
            case "object":
              switch (this._0x41d4c5()) {
                case "Surge":
                case "Stash":
                case "Shadowrocket":
                default:
                  {
                    const _0x141454 = {};
                    let _0x11cdaa = _0x49f4f5._0x3dec27 || _0x49f4f5.url || _0x49f4f5["open-url"] || _0x41c883;
                    _0x11cdaa && Object.assign(_0x141454, {
                      action: "open-url",
                      url: _0x11cdaa
                    });
                    let _0xdb7920 = _0x49f4f5._0x354f35 || _0x49f4f5._0x4fd16a || _0x479c80;
                    if (_0xdb7920 && Object.assign(_0x141454, {
                      action: "clipboard",
                      text: _0xdb7920
                    }), _0x5251a6) {
                      let _0x2a76b9;
                      let _0x1ac8a0;
                      let _0x298361;
                      if (_0x5251a6.startsWith("http")) {
                        _0x2a76b9 = _0x5251a6;
                      } else {
                        if (_0x5251a6.startsWith("data:")) {
                          {
                            const [_0x5f0b96] = _0x5251a6.split(";");
                            const [, _0x75128a] = _0x5251a6.split(",");
                            _0x1ac8a0 = _0x75128a;
                            _0x298361 = _0x5f0b96.replace("data:", "");
                          }
                        } else {
                          _0x1ac8a0 = _0x5251a6;
                          _0x298361 = (_0x22c3fc => {
                            {
                              const _0x32d12f = {
                                _0x30fdcf: "application/pdf",
                                _0x13bbfb: "image/gif",
                                _0x2b7f78: "image/gif",
                                _0x1e9406: "image/png",
                                _0x173ad7: "image/jpg"
                              };
                              for (var _0x186026 in _0x32d12f) if (0 === _0x22c3fc.indexOf(_0x186026)) {
                                {
                                  return _0x32d12f[_0x186026];
                                }
                              }
                              return null;
                            }
                          })(_0x5251a6);
                        }
                      }
                      Object.assign(_0x141454, {
                        _0x2fb049: _0x2a76b9,
                        _0x24a264: _0x1ac8a0,
                        _0x3cd2c9: _0x3eab8b ?? _0x298361
                      });
                    }
                    const _0x4f2d0e = {
                      _0x3e6ea6: _0x49f4f5._0x3e6ea6,
                      _0x1e1d14: _0x49f4f5._0x1e1d14
                    };
                    Object.assign(_0x141454, _0x4f2d0e);
                    return _0x141454;
                  }
                case "Loon":
                  {
                    const _0x2a08b1 = {};
                    let _0x4a105d = _0x49f4f5._0x3dec27 || _0x49f4f5.url || _0x49f4f5["open-url"] || _0x41c883;
                    _0x4a105d && Object.assign(_0x2a08b1, {
                      _0x3dec27: _0x4a105d
                    });
                    let _0x24133f = _0x49f4f5._0x4a64f2 || _0x49f4f5._0x2fb049;
                    _0x5251a6?.["startsWith"]("http") && (_0x24133f = _0x5251a6);
                    _0x24133f && Object.assign(_0x2a08b1, {
                      _0x4a64f2: _0x24133f
                    });
                    console.log(JSON.stringify(_0x2a08b1));
                    return _0x2a08b1;
                  }
                case "Quantumult X":
                  {
                    const _0x49551b = {};
                    let _0x24d5d1 = _0x49f4f5["open-url"] || _0x49f4f5.url || _0x49f4f5._0x3dec27 || _0x41c883;
                    _0x24d5d1 && Object.assign(_0x49551b, {
                      "open-url": _0x24d5d1
                    });
                    let _0x3e2149 = _0x49f4f5._0x2fb049 || _0x49f4f5._0x4a64f2;
                    _0x5251a6?.["startsWith"]("http") && (_0x3e2149 = _0x5251a6);
                    _0x3e2149 && Object.assign(_0x49551b, {
                      _0x2fb049: _0x3e2149
                    });
                    let _0x36820c = _0x49f4f5._0x354f35 || _0x49f4f5._0x4fd16a || _0x479c80;
                    _0x36820c && Object.assign(_0x49551b, {
                      _0x354f35: _0x36820c
                    });
                    console.log(JSON.stringify(_0x49551b));
                    return _0x49551b;
                  }
                case "Node.js":
                  return;
              }
            default:
              return;
          }
        }
      };
      if (!this._0x2a4683) {
        switch (this._0x41d4c5()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(_0x554d4d, _0x58af5c, _0x1a8a88, _0x1f845b(_0x5ca0c6));
            break;
          case "Quantumult X":
            $notify(_0x554d4d, _0x58af5c, _0x1a8a88, _0x1f845b(_0x5ca0c6));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this._0x53090d) {
        let _0x4c059d = ["", "==============📣系统通知📣=============="];
        _0x4c059d.push(_0x554d4d);
        _0x58af5c && _0x4c059d.push(_0x58af5c);
        _0x1a8a88 && _0x4c059d.push(_0x1a8a88);
        console.log(_0x4c059d.join("\n"));
        this._0x575dc8 = this._0x575dc8.concat(_0x4c059d);
      }
    }
    debug(..._0x10f85d) {
      this._0x5c6bac[this._0x455bc9] <= this._0x5c6bac.debug && (_0x10f85d.length > 0 && (this._0x575dc8 = [...this._0x575dc8, ..._0x10f85d]), console.log("" + this._0x331efd.debug + _0x10f85d.map(_0x2b3cbe => _0x2b3cbe ?? String(_0x2b3cbe)).join(this._0x887268)));
    }
    info(..._0x356490) {
      this._0x5c6bac[this._0x455bc9] <= this._0x5c6bac.info && (_0x356490.length > 0 && (this._0x575dc8 = [...this._0x575dc8, ..._0x356490]), console.log("" + this._0x331efd.info + _0x356490.map(_0x1cea60 => _0x1cea60 ?? String(_0x1cea60)).join(this._0x887268)));
    }
    warn(..._0xbc672) {
      this._0x5c6bac[this._0x455bc9] <= this._0x5c6bac.warn && (_0xbc672.length > 0 && (this._0x575dc8 = [...this._0x575dc8, ..._0xbc672]), console.log("" + this._0x331efd.warn + _0xbc672.map(_0x405c79 => _0x405c79 ?? String(_0x405c79)).join(this._0x887268)));
    }
    error(..._0x5293d0) {
      {
        this._0x5c6bac[this._0x455bc9] <= this._0x5c6bac.error && (_0x5293d0.length > 0 && (this._0x575dc8 = [...this._0x575dc8, ..._0x5293d0]), console.log("" + this._0x331efd.error + _0x5293d0.map(_0x205658 => _0x205658 ?? String(_0x205658)).join(this._0x887268)));
      }
    }
    log(..._0x3aac48) {
      _0x3aac48.length > 0 && (this._0x575dc8 = [...this._0x575dc8, ..._0x3aac48]);
      console.log(_0x3aac48.map(_0x5e99cb => _0x5e99cb ?? String(_0x5e99cb)).join(this._0x887268));
    }
    _0x1458e9(_0x4adaaa, _0x1a3740) {
      switch (this._0x41d4c5()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", "❗️" + this.name + ", 错误!", _0x1a3740, _0x4adaaa);
          break;
        case "Node.js":
          this.log("", "❗️" + this.name + ", 错误!", _0x1a3740, undefined !== _0x4adaaa.message ? _0x4adaaa.message : _0x4adaaa, _0x4adaaa.stack);
          break;
      }
    }
    wait(_0x1e06b7) {
      return new Promise(_0x467e85 => setTimeout(_0x467e85, _0x1e06b7));
    }
    done(_0x5e933f = {}) {
      {
        const _0x3e944c = (new Date().getTime() - this.startTime) / 1000;
        switch (this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x3e944c + " 秒"), this.log(), this._0x41d4c5()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          case "Quantumult X":
          default:
            $done(_0x5e933f);
            break;
          case "Node.js":
            process._0x257f01(1);
        }
      }
    }
  }(_0x5c9a6d, _0x57389a);
}