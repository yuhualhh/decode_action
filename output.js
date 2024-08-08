//Thu Aug 08 2024 21:41:35 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x1e7df9 = "中青极速版看看赚",
  _0xf5214b = _0x1da698(_0x1e7df9);
let _0x4420e8,
  _0x243421 = (_0xf5214b.isNode() ? process.env.zqkdFastCookie : _0xf5214b.getdata("zqkdFastCookie")) || "",
  _0x28ad53 = [],
  _0x11b067 = [],
  _0x349aed = [],
  _0x2e33ec = 0,
  _0x2425c1 = 0,
  _0x59fe2 = "jdvylqcGGHHJZrfw",
  _0x6089fe = 1,
  _0x243ae8 = 0,
  _0x44ea6f = "zqkdFast_kkz",
  _0x53af1a = "secret",
  _0x8f3cd1 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x2c7b21 = "https://127.0.0.1/",
  _0x4c4767 = {};
!(async () => {
  if (typeof $request !== "undefined") {
    console.log("没有重写，请用文章脚本重写捉ck或者自己捉包填入zqkdFastCookie");
  } else {
    await _0x1d69c0();
    if (_0x243ae8 == false) {
      return;
    }
    await _0x11a68c();
    _0x59fe2 += _0x4c4767[_0x53af1a];
    if (!(await _0x278f07())) {
      return;
    }
    console.log("====================\n");
    let _0xd03e7c = _0x4c4767.scanLimit[0],
      _0x9fc94f = _0x4c4767.scanLimit[1],
      _0x189adf = _0x4c4767.extraTaskId;
    for (let _0x322468 of _0x189adf) {
      _0x72a16e(_0x322468);
      await _0xf5214b.wait(50);
    }
    for (let _0x19a776 = _0xd03e7c; _0x19a776 < _0x9fc94f; _0x19a776++) {
      if (_0x19a776 % 50 == 0) {
        console.log("正在搜索id " + _0x19a776 + " 到 " + (_0x19a776 + 49));
      }
      _0x72a16e(_0x19a776);
      await _0xf5214b.wait(50);
    }
    await _0xf5214b.wait(5000);
    console.log("共找到" + _0x349aed.length + "个看看赚任务");
    for (let _0xa07585 of _0x349aed) {
      for (_0x2e33ec = 0; _0x2e33ec < _0x2425c1; _0x2e33ec++) {
        _0x11b067[_0x2e33ec] = _0x3cf487(_0x2e33ec, _0xa07585);
      }
      for (_0x2e33ec = 0; _0x2e33ec < _0x2425c1; _0x2e33ec++) {
        await _0x57a0b6(_0x2e33ec, _0x11b067[_0x2e33ec]);
      }
      await _0xf5214b.wait(1000);
      for (let _0x56103a = 0; _0x56103a < 6; _0x56103a++) {
        for (_0x2e33ec = 0; _0x2e33ec < _0x2425c1; _0x2e33ec++) {
          await _0x19edef(_0x2e33ec, _0x11b067[_0x2e33ec]);
        }
        await _0xf5214b.wait(Math.floor(Math.random() * 2000) + _0x4c4767.waitTime);
      }
      for (_0x2e33ec = 0; _0x2e33ec < _0x2425c1; _0x2e33ec++) {
        await _0x249acc(_0x2e33ec, _0x11b067[_0x2e33ec]);
      }
    }
    console.log("\n====================");
    for (_0x2e33ec = 0; _0x2e33ec < _0x2425c1; _0x2e33ec++) {
      await _0x5024f2(_0x2e33ec);
    }
  }
})().catch(_0x11997d => _0xf5214b.logErr(_0x11997d)).finally(() => _0xf5214b.done());
async function _0x278f07() {
  if (_0x243421) {
    _0x28ad53 = _0x243421.split("@");
    _0x2425c1 = _0x28ad53.length;
  } else {
    console.log("未找到zqkdFastCookie");
    return false;
  }
  for (let _0x189d76 of _0x28ad53) _0x11b067.push("");
  if (_0x4c4767.blackId) {
    _0x28ad53.push(_0x4c4767.blackId);
  }
  console.log("共找到" + _0x2425c1 + "个CK");
  return true;
}
async function _0x1d69c0() {
  let _0x51a8b9 = _0x30bb8d();
  const _0x5c570d = {
    url: _0x8f3cd1,
    headers: ""
  };
  await _0x190446(_0x5c570d, _0x51a8b9);
  let _0x3e820a = _0x4420e8;
  if (!_0x3e820a) {
    return;
  }
  _0x3e820a?.["code"] == 0 && (_0x3e820a = JSON.parse(_0x3e820a.data.file.data));
  if (_0x3e820a[_0x44ea6f]) {
    let _0x315f64 = _0x3e820a[_0x44ea6f];
    if (_0x315f64.status == 0) {
      if (_0x6089fe >= _0x315f64.version) {
        _0x243ae8 = true;
        _0x59fe2 += "0o2";
        _0x2c7b21 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/task.json";
        console.log(_0x315f64.msg[_0x315f64.status]);
        console.log(_0x315f64.updateMsg);
      } else {
        console.log(_0x315f64.versionMsg);
      }
    } else {
      console.log(_0x315f64.msg[_0x315f64.status]);
    }
  } else {
    console.log(_0x3e820a.errorMsg);
  }
}
async function _0x11a68c() {
  let _0x384b38 = _0x30bb8d(),
    _0x31234c = "";
  const _0x5a4d15 = {
    url: _0x2c7b21,
    headers: ""
  };
  await _0x190446(_0x5a4d15, _0x384b38);
  let _0x21f667 = _0x4420e8;
  if (!_0x21f667) {
    return _0x31234c;
  }
  _0x21f667?.["code"] == 0 && (_0x21f667 = JSON.parse(_0x21f667.data.file.data));
  for (let _0x160d4b in _0x21f667[_0x44ea6f]) {
    _0x4c4767[_0x160d4b] = _0x21f667[_0x44ea6f][_0x160d4b];
  }
  return _0x31234c;
}
function _0x114d1f(_0x5dec21) {
  let _0x48c662 = _0x5dec21.split("&"),
    _0xbceae1 = {};
  for (let _0x3490fe of _0x48c662) {
    let _0x35f08d = _0x3490fe.split("=");
    _0xbceae1[_0x35f08d[0]] = _0x35f08d[1];
  }
  let _0xccc9e8 = "";
  for (let _0x1a2ad9 of Object.keys(_0xbceae1).sort()) {
    _0x1a2ad9 != "token" && _0x1a2ad9 != "sign" && (_0xccc9e8 += _0x1a2ad9 + "=" + _0xbceae1[_0x1a2ad9]);
  }
  _0xccc9e8 += _0x59fe2;
  return _0x449c81(_0xccc9e8);
}
function _0x3cf487(_0x351a4d, _0x3bb1b3) {
  let _0x19cf79 = _0x28ad53[_0x351a4d],
    _0x1683f9 = _0x19cf79.match(/uid=(\w+)/)[1],
    _0x9d0c96 = _0x19cf79.match(/token=([\w\%]+)/)[1],
    _0xe60d91 = _0x19cf79.match(/token_id=(\w+)/)[1],
    _0x2fc9e4 = "token_id=" + _0xe60d91 + "&active_channel=c6001&token=" + _0x9d0c96 + "&is_wxaccount=1&app_version=2.5.5&uid=" + _0x1683f9 + "&access=wifi&task_id=" + _0x3bb1b3 + "&channel=c6001",
    _0x423e9f = _0x114d1f(_0x2fc9e4),
    _0x367421 = "token_id=" + _0xe60d91 + "&sign=" + _0x423e9f + "&active_channel=c6001&token=" + _0x9d0c96 + "&is_wxaccount=1&app_version=2.5.5&uid=" + _0x1683f9 + "&access=wifi&task_id=" + _0x3bb1b3 + "&channel=c6001";
  return _0x367421;
}
async function _0x72a16e(_0x5b7341) {
  let _0x4e630f = _0x30bb8d(),
    _0x34723c = _0x4c4767.GetTaskList,
    _0x386656 = _0x3cf487(_0x28ad53.length - 1, _0x5b7341),
    _0x34b168 = _0x210d6a(_0x34723c, _0x386656);
  await _0x234ea9(_0x34b168, _0x4e630f);
  let _0x5af23e = _0x4420e8;
  if (!_0x5af23e) {
    return;
  }
  _0x5af23e.error_code == 0 && _0x349aed.push(_0x5b7341);
}
async function _0x57a0b6(_0x4a2521, _0x1293dc) {
  let _0x2f0a41 = _0x30bb8d(),
    _0x3e3f5f = _0x1293dc.match(/uid=(\w+)/)[1],
    _0x431d5f = _0x4c4767.adlickstart,
    _0x3c84c9 = _0x210d6a(_0x431d5f, _0x1293dc);
  await _0x234ea9(_0x3c84c9, _0x2f0a41);
  let _0x4c9cf1 = _0x4420e8;
  if (!_0x4c9cf1) {
    return;
  }
  _0x4c9cf1.error_code == 0 ? console.log("用户" + (_0x4a2521 + 1) + "[" + _0x3e3f5f + "]开始看看赚任务[" + _0x4c9cf1.items.banner_id + "]") : console.log("用户" + (_0x4a2521 + 1) + "[" + _0x3e3f5f + "]开始看看赚任务失败：" + _0x4c9cf1.message);
}
async function _0x19edef(_0x3b38d3, _0x2a8ae6) {
  let _0x54cfb5 = _0x30bb8d(),
    _0x18a5ff = _0x2a8ae6.match(/uid=(\w+)/)[1],
    _0x1eb3a9 = _0x4c4767.bannerstatus,
    _0x3bef5e = _0x210d6a(_0x1eb3a9, _0x2a8ae6);
  await _0x234ea9(_0x3bef5e, _0x54cfb5);
  let _0x4495d8 = _0x4420e8;
  if (!_0x4495d8) {
    return;
  }
  _0x4495d8.error_code == 0 ? console.log("用户" + (_0x3b38d3 + 1) + "[" + _0x18a5ff + "]阅读看看赚文章中[" + _0x4495d8.items.banner_id + "]") : console.log("用户" + (_0x3b38d3 + 1) + "[" + _0x18a5ff + "]阅读看看赚文章失败：" + _0x4495d8.message);
}
async function _0x249acc(_0x4db4c7, _0x565398) {
  let _0x438362 = _0x30bb8d(),
    _0x5ce3c3 = _0x565398.match(/uid=(\w+)/)[1],
    _0x50a4fc = _0x4c4767.adlickend,
    _0x157cff = _0x210d6a(_0x50a4fc, _0x565398);
  await _0x234ea9(_0x157cff, _0x438362);
  let _0x48cd0 = _0x4420e8;
  if (!_0x48cd0) {
    return;
  }
  _0x48cd0.error_code == 0 ? console.log("用户" + (_0x4db4c7 + 1) + "[" + _0x5ce3c3 + "]获得" + _0x48cd0.items.score + "青豆") : console.log("用户" + (_0x4db4c7 + 1) + "[" + _0x5ce3c3 + "]完成看看赚任务失败：" + _0x48cd0.message);
}
async function _0x249acc(_0x536a2d, _0x1952b9) {
  let _0x3ed6c3 = _0x30bb8d(),
    _0x4218dc = _0x1952b9.match(/uid=(\w+)/)[1],
    _0x5802cc = _0x4c4767.adlickend,
    _0x1236ff = _0x210d6a(_0x5802cc, _0x1952b9);
  await _0x234ea9(_0x1236ff, _0x3ed6c3);
  let _0x4a763f = _0x4420e8;
  if (!_0x4a763f) {
    return;
  }
  _0x4a763f.error_code == 0 ? console.log("用户" + (_0x536a2d + 1) + "[" + _0x4218dc + "]获得" + _0x4a763f.items.score + "青豆") : console.log("用户" + (_0x536a2d + 1) + "[" + _0x4218dc + "]完成看看赚任务失败：" + _0x4a763f.message);
}
async function _0x5024f2(_0x39d455) {
  let _0x45375d = _0x30bb8d(),
    _0x41adc3 = Math.floor(new Date().getTime()),
    _0x1f68ba = Math.floor(_0x41adc3 / 1000),
    _0x2afb57 = _0x28ad53[_0x39d455],
    _0x18d8a9 = _0x2afb57.match(/uid=(\w+)/)[1],
    _0x26d71b = _0x2afb57 + "&app_version=2.5.5&channel=c6001&is_wxaccount=1&active_channel=c6001&access=wifi&v=" + _0x41adc3 + "&request_time=" + _0x1f68ba,
    _0x3add65 = _0x114d1f(_0x26d71b),
    _0x29eaa9 = _0x4c4767.getBoxRewardConf + ("?" + _0x2afb57 + "&app_version=2.5.5&channel=c6001&is_wxaccount=1&active_channel=c6001&access=wifi&v=" + _0x41adc3 + "&request_time=" + _0x1f68ba + "&sign=" + _0x3add65),
    _0x2e6873 = _0x664031(_0x29eaa9);
  await _0x190446(_0x2e6873, _0x45375d);
  let _0x391b61 = _0x4420e8;
  if (!_0x391b61) {
    return;
  }
  if (_0x391b61.error_code == 0) {
    for (let _0x2b75d8 of _0x391b61.items.list) {
      _0x2b75d8.status == 1 && (await _0x2b3027(_0x39d455, _0x2b75d8.id), await _0xf5214b.wait(100));
    }
  } else {
    console.log("用户" + (_0x39d455 + 1) + "[" + _0x18d8a9 + "]完成看看赚任务失败：" + _0x391b61.message);
  }
}
async function _0x2b3027(_0x3cd525, _0x24ebcd) {
  let _0x187bda = _0x30bb8d(),
    _0x59bcb5 = Math.floor(new Date().getTime()),
    _0x5ec44a = Math.floor(_0x59bcb5 / 1000),
    _0x483d0e = _0x28ad53[_0x3cd525],
    _0x4ed51d = _0x483d0e.match(/uid=(\w+)/)[1],
    _0x59c68b = _0x483d0e + "&app_version=2.5.5&channel=c6001&is_wxaccount=1&active_channel=c6001&access=wifi&v=" + _0x59bcb5 + "&request_time=" + _0x5ec44a + "&id=" + _0x24ebcd,
    _0x414074 = _0x114d1f(_0x59c68b),
    _0x541c04 = _0x4c4767.getBoxReward + ("?" + _0x483d0e + "&app_version=2.5.5&channel=c6001&is_wxaccount=1&active_channel=c6001&access=wifi&v=" + _0x59bcb5 + "&request_time=" + _0x5ec44a + "&id=" + _0x24ebcd + "&sign=" + _0x414074),
    _0x4f3e59 = _0x664031(_0x541c04);
  await _0x190446(_0x4f3e59, _0x187bda);
  let _0x466991 = _0x4420e8;
  if (!_0x466991) {
    return;
  }
  _0x466991.error_code == 0 ? console.log("用户" + (_0x3cd525 + 1) + "[" + _0x4ed51d + "]打开看看赚宝箱" + (_0x24ebcd + 1) + "获得" + _0x466991.items.score + "青豆") : console.log("用户" + (_0x3cd525 + 1) + "[" + _0x4ed51d + "]打开看看赚宝箱" + (_0x24ebcd + 1) + "失败：" + _0x466991.message);
}
function _0x210d6a(_0x5e8ce5, _0x2f0e7f) {
  const _0x462a6e = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 5.1; OPPO R9tm Build/LMY47I; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/43.0.2357.121 Mobile Safari/537.36 hap/1.0.8.1/oppo com.nearme.instant.platform/4.2.1 com.youth.kandianquickapp/2.5.5 ({\"packageName\":\"com.oppo.launcher\",\"type\":\"shortcut\",\"extra\":{\"original\":{\"packageName\":\"com.oppo.market\",\"type\":\"sdk\",\"extra\":{}},\"scene\":\"api\"}})",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    Host: "user.youth.cn",
    Connection: "Keep-Alive",
    "Accept-Encoding": "gzip"
  };
  const _0x235494 = {
    url: _0x5e8ce5,
    headers: _0x462a6e,
    body: _0x2f0e7f
  };
  return _0x235494;
}
function _0x664031(_0x3e6127) {
  const _0x15ec7b = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 5.1; OPPO R9tm Build/LMY47I; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/43.0.2357.121 Mobile Safari/537.36 hap/1.0.8.1/oppo com.nearme.instant.platform/4.2.1 com.youth.kandianquickapp/2.5.5 ({\"packageName\":\"com.oppo.launcher\",\"type\":\"shortcut\",\"extra\":{\"original\":{\"packageName\":\"com.oppo.market\",\"type\":\"sdk\",\"extra\":{}},\"scene\":\"api\"}})",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    Host: "user.youth.cn",
    Connection: "Keep-Alive",
    "Accept-Encoding": "gzip"
  };
  const _0x10a06f = {
    url: _0x3e6127,
    headers: _0x15ec7b
  };
  return _0x10a06f;
}
async function _0x234ea9(_0x5c6a87, _0xb1503d) {
  _0x4420e8 = null;
  return new Promise(_0x536119 => {
    _0xf5214b.post(_0x5c6a87, async (_0x3a9e80, _0x341b85, _0x1b6df2) => {
      try {
        if (_0x3a9e80) {
          console.log(_0xb1503d + ": post请求失败");
          console.log(JSON.stringify(_0x3a9e80));
          _0xf5214b.logErr(_0x3a9e80);
        } else {
          if (_0x335998(_0x1b6df2)) {
            _0x4420e8 = JSON.parse(_0x1b6df2);
          }
        }
      } catch (_0x1d56cb) {
        _0xf5214b.logErr(_0x1d56cb, _0x341b85);
      } finally {
        _0x536119();
      }
    });
  });
}
async function _0x190446(_0x5dfbdd, _0x3ab8d8) {
  _0x4420e8 = null;
  return new Promise(_0x24bdd5 => {
    _0xf5214b.get(_0x5dfbdd, async (_0x4c509b, _0x5582c0, _0x4bc4ba) => {
      try {
        if (_0x4c509b) {
          console.log(_0x3ab8d8 + ": get请求失败");
          console.log(JSON.stringify(_0x4c509b));
          _0xf5214b.logErr(_0x4c509b);
        } else {
          if (_0x335998(_0x4bc4ba, _0x3ab8d8)) {
            _0x4420e8 = JSON.parse(_0x4bc4ba);
          }
        }
      } catch (_0x33f2a9) {
        _0xf5214b.logErr(_0x33f2a9, _0x5582c0);
      } finally {
        _0x24bdd5();
      }
    });
  });
}
function _0x335998(_0x3dcf27, _0x52d680) {
  try {
    if (typeof JSON.parse(_0x3dcf27) == "object") {
      return true;
    } else {
      console.log("Function " + _0x52d680 + ": 未知错误");
      console.log(_0x3dcf27);
    }
  } catch (_0x5ecc39) {
    console.log(_0x5ecc39);
    console.log("Function " + _0x52d680 + ": 服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function _0x30bb8d() {
  return new Error().stack.split("\n")[2].trim().split(" ")[1];
}
function _0x35cf9a(_0x78bb3e, _0x2abfc6) {
  return _0x78bb3e < _0x2abfc6 ? _0x78bb3e : _0x2abfc6;
}
function _0x22a1fb(_0x372323, _0x29fcd9) {
  return _0x372323 < _0x29fcd9 ? _0x29fcd9 : _0x372323;
}
function _0x1dff3c(_0x96aafe = 12) {
  let _0xef3d07 = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM",
    _0x31dfc4 = _0xef3d07.length,
    _0x4492f6 = "";
  for (i = 0; i < _0x96aafe; i++) {
    _0x4492f6 += _0xef3d07.charAt(Math.floor(Math.random() * _0x31dfc4));
  }
  return _0x4492f6;
}
function _0x449c81(_0x51332b) {
  function _0x1f6bf0(_0x20471e, _0x7f94ca) {
    return _0x20471e << _0x7f94ca | _0x20471e >>> 32 - _0x7f94ca;
  }
  function _0x572593(_0x31355c, _0x4dc6fc) {
    var _0x2296e7, _0x489e0c, _0x5018e3, _0x57cd09, _0x4d86fc;
    _0x5018e3 = 2147483648 & _0x31355c;
    _0x57cd09 = 2147483648 & _0x4dc6fc;
    _0x2296e7 = 1073741824 & _0x31355c;
    _0x489e0c = 1073741824 & _0x4dc6fc;
    _0x4d86fc = (1073741823 & _0x31355c) + (1073741823 & _0x4dc6fc);
    return _0x2296e7 & _0x489e0c ? 2147483648 ^ _0x4d86fc ^ _0x5018e3 ^ _0x57cd09 : _0x2296e7 | _0x489e0c ? 1073741824 & _0x4d86fc ? 3221225472 ^ _0x4d86fc ^ _0x5018e3 ^ _0x57cd09 : 1073741824 ^ _0x4d86fc ^ _0x5018e3 ^ _0x57cd09 : _0x4d86fc ^ _0x5018e3 ^ _0x57cd09;
  }
  function _0x1d00a4(_0x468f86, _0x4f7f3e, _0x4591b5) {
    return _0x468f86 & _0x4f7f3e | ~_0x468f86 & _0x4591b5;
  }
  function _0x3cf326(_0x2e90d0, _0x29d865, _0x333bfd) {
    return _0x2e90d0 & _0x333bfd | _0x29d865 & ~_0x333bfd;
  }
  function _0x3265ac(_0x3b63fd, _0x33580b, _0x2ca48f) {
    return _0x3b63fd ^ _0x33580b ^ _0x2ca48f;
  }
  function _0x1cd047(_0x3cdad3, _0x23b08a, _0x5e02d3) {
    return _0x23b08a ^ (_0x3cdad3 | ~_0x5e02d3);
  }
  function _0x1a6398(_0x4f1313, _0x5de914, _0x5749e1, _0x1c8c31, _0x1b85e4, _0x45b630, _0x8205d8) {
    _0x4f1313 = _0x572593(_0x4f1313, _0x572593(_0x572593(_0x1d00a4(_0x5de914, _0x5749e1, _0x1c8c31), _0x1b85e4), _0x8205d8));
    return _0x572593(_0x1f6bf0(_0x4f1313, _0x45b630), _0x5de914);
  }
  function _0x25ff9e(_0x28dda4, _0x547710, _0x276469, _0x5371c4, _0x19e849, _0x55cc01, _0x1d3f92) {
    _0x28dda4 = _0x572593(_0x28dda4, _0x572593(_0x572593(_0x3cf326(_0x547710, _0x276469, _0x5371c4), _0x19e849), _0x1d3f92));
    return _0x572593(_0x1f6bf0(_0x28dda4, _0x55cc01), _0x547710);
  }
  function _0x4e637e(_0x39e083, _0x3c7ef3, _0x32fcbe, _0x227417, _0x39bc25, _0x2cbcf9, _0x40299f) {
    _0x39e083 = _0x572593(_0x39e083, _0x572593(_0x572593(_0x3265ac(_0x3c7ef3, _0x32fcbe, _0x227417), _0x39bc25), _0x40299f));
    return _0x572593(_0x1f6bf0(_0x39e083, _0x2cbcf9), _0x3c7ef3);
  }
  function _0x178015(_0x5c1df5, _0xfbaceb, _0xb73aea, _0x461d54, _0xbeebd3, _0x42d7cd, _0x203f4b) {
    _0x5c1df5 = _0x572593(_0x5c1df5, _0x572593(_0x572593(_0x1cd047(_0xfbaceb, _0xb73aea, _0x461d54), _0xbeebd3), _0x203f4b));
    return _0x572593(_0x1f6bf0(_0x5c1df5, _0x42d7cd), _0xfbaceb);
  }
  function _0x5ab36d(_0xfa8805) {
    for (var _0x48f195, _0x3bfe2b = _0xfa8805.length, _0x4d916a = _0x3bfe2b + 8, _0x3aea53 = (_0x4d916a - _0x4d916a % 64) / 64, _0x4bfbe4 = 16 * (_0x3aea53 + 1), _0x21e31f = new Array(_0x4bfbe4 - 1), _0x9c3fd0 = 0, _0xf85aad = 0; _0x3bfe2b > _0xf85aad;) {
      _0x48f195 = (_0xf85aad - _0xf85aad % 4) / 4;
      _0x9c3fd0 = _0xf85aad % 4 * 8;
      _0x21e31f[_0x48f195] = _0x21e31f[_0x48f195] | _0xfa8805.charCodeAt(_0xf85aad) << _0x9c3fd0;
      _0xf85aad++;
    }
    _0x48f195 = (_0xf85aad - _0xf85aad % 4) / 4;
    _0x9c3fd0 = _0xf85aad % 4 * 8;
    _0x21e31f[_0x48f195] = _0x21e31f[_0x48f195] | 128 << _0x9c3fd0;
    _0x21e31f[_0x4bfbe4 - 2] = _0x3bfe2b << 3;
    _0x21e31f[_0x4bfbe4 - 1] = _0x3bfe2b >>> 29;
    return _0x21e31f;
  }
  function _0x167375(_0x6117f3) {
    var _0x277bd9,
      _0x3dcdcd,
      _0x443eb0 = "",
      _0x4453b8 = "";
    for (_0x3dcdcd = 0; 3 >= _0x3dcdcd; _0x3dcdcd++) {
      _0x277bd9 = _0x6117f3 >>> 8 * _0x3dcdcd & 255;
      _0x4453b8 = "0" + _0x277bd9.toString(16);
      _0x443eb0 += _0x4453b8.substr(_0x4453b8.length - 2, 2);
    }
    return _0x443eb0;
  }
  function _0x2aa84f(_0x312046) {
    _0x312046 = _0x312046.replace(/\r\n/g, "\n");
    for (var _0x145d2c = "", _0x3be16b = 0; _0x3be16b < _0x312046.length; _0x3be16b++) {
      var _0x3038d1 = _0x312046.charCodeAt(_0x3be16b);
      128 > _0x3038d1 ? _0x145d2c += String.fromCharCode(_0x3038d1) : _0x3038d1 > 127 && 2048 > _0x3038d1 ? (_0x145d2c += String.fromCharCode(_0x3038d1 >> 6 | 192), _0x145d2c += String.fromCharCode(63 & _0x3038d1 | 128)) : (_0x145d2c += String.fromCharCode(_0x3038d1 >> 12 | 224), _0x145d2c += String.fromCharCode(_0x3038d1 >> 6 & 63 | 128), _0x145d2c += String.fromCharCode(63 & _0x3038d1 | 128));
    }
    return _0x145d2c;
  }
  var _0x3f0724,
    _0x28dc68,
    _0x4a35b6,
    _0x20d22c,
    _0x500c47,
    _0x547070,
    _0x831122,
    _0x158c43,
    _0x74f907,
    _0xae6b5f = [],
    _0x5e329c = 7,
    _0x543a18 = 12,
    _0x458edd = 17,
    _0x2cbac3 = 22,
    _0x497746 = 5,
    _0x71ba5 = 9,
    _0x5aeb41 = 14,
    _0x1bb38a = 20,
    _0x583b3e = 4,
    _0x258d6a = 11,
    _0x527b83 = 16,
    _0x2b37dd = 23,
    _0x28626e = 6,
    _0x2d8d53 = 10,
    _0xce773 = 15,
    _0x363817 = 21;
  for (_0x51332b = _0x2aa84f(_0x51332b), _0xae6b5f = _0x5ab36d(_0x51332b), _0x547070 = 1732584193, _0x831122 = 4023233417, _0x158c43 = 2562383102, _0x74f907 = 271733878, _0x3f0724 = 0; _0x3f0724 < _0xae6b5f.length; _0x3f0724 += 16) {
    _0x28dc68 = _0x547070;
    _0x4a35b6 = _0x831122;
    _0x20d22c = _0x158c43;
    _0x500c47 = _0x74f907;
    _0x547070 = _0x1a6398(_0x547070, _0x831122, _0x158c43, _0x74f907, _0xae6b5f[_0x3f0724 + 0], _0x5e329c, 3614090360);
    _0x74f907 = _0x1a6398(_0x74f907, _0x547070, _0x831122, _0x158c43, _0xae6b5f[_0x3f0724 + 1], _0x543a18, 3905402710);
    _0x158c43 = _0x1a6398(_0x158c43, _0x74f907, _0x547070, _0x831122, _0xae6b5f[_0x3f0724 + 2], _0x458edd, 606105819);
    _0x831122 = _0x1a6398(_0x831122, _0x158c43, _0x74f907, _0x547070, _0xae6b5f[_0x3f0724 + 3], _0x2cbac3, 3250441966);
    _0x547070 = _0x1a6398(_0x547070, _0x831122, _0x158c43, _0x74f907, _0xae6b5f[_0x3f0724 + 4], _0x5e329c, 4118548399);
    _0x74f907 = _0x1a6398(_0x74f907, _0x547070, _0x831122, _0x158c43, _0xae6b5f[_0x3f0724 + 5], _0x543a18, 1200080426);
    _0x158c43 = _0x1a6398(_0x158c43, _0x74f907, _0x547070, _0x831122, _0xae6b5f[_0x3f0724 + 6], _0x458edd, 2821735955);
    _0x831122 = _0x1a6398(_0x831122, _0x158c43, _0x74f907, _0x547070, _0xae6b5f[_0x3f0724 + 7], _0x2cbac3, 4249261313);
    _0x547070 = _0x1a6398(_0x547070, _0x831122, _0x158c43, _0x74f907, _0xae6b5f[_0x3f0724 + 8], _0x5e329c, 1770035416);
    _0x74f907 = _0x1a6398(_0x74f907, _0x547070, _0x831122, _0x158c43, _0xae6b5f[_0x3f0724 + 9], _0x543a18, 2336552879);
    _0x158c43 = _0x1a6398(_0x158c43, _0x74f907, _0x547070, _0x831122, _0xae6b5f[_0x3f0724 + 10], _0x458edd, 4294925233);
    _0x831122 = _0x1a6398(_0x831122, _0x158c43, _0x74f907, _0x547070, _0xae6b5f[_0x3f0724 + 11], _0x2cbac3, 2304563134);
    _0x547070 = _0x1a6398(_0x547070, _0x831122, _0x158c43, _0x74f907, _0xae6b5f[_0x3f0724 + 12], _0x5e329c, 1804603682);
    _0x74f907 = _0x1a6398(_0x74f907, _0x547070, _0x831122, _0x158c43, _0xae6b5f[_0x3f0724 + 13], _0x543a18, 4254626195);
    _0x158c43 = _0x1a6398(_0x158c43, _0x74f907, _0x547070, _0x831122, _0xae6b5f[_0x3f0724 + 14], _0x458edd, 2792965006);
    _0x831122 = _0x1a6398(_0x831122, _0x158c43, _0x74f907, _0x547070, _0xae6b5f[_0x3f0724 + 15], _0x2cbac3, 1236535329);
    _0x547070 = _0x25ff9e(_0x547070, _0x831122, _0x158c43, _0x74f907, _0xae6b5f[_0x3f0724 + 1], _0x497746, 4129170786);
    _0x74f907 = _0x25ff9e(_0x74f907, _0x547070, _0x831122, _0x158c43, _0xae6b5f[_0x3f0724 + 6], _0x71ba5, 3225465664);
    _0x158c43 = _0x25ff9e(_0x158c43, _0x74f907, _0x547070, _0x831122, _0xae6b5f[_0x3f0724 + 11], _0x5aeb41, 643717713);
    _0x831122 = _0x25ff9e(_0x831122, _0x158c43, _0x74f907, _0x547070, _0xae6b5f[_0x3f0724 + 0], _0x1bb38a, 3921069994);
    _0x547070 = _0x25ff9e(_0x547070, _0x831122, _0x158c43, _0x74f907, _0xae6b5f[_0x3f0724 + 5], _0x497746, 3593408605);
    _0x74f907 = _0x25ff9e(_0x74f907, _0x547070, _0x831122, _0x158c43, _0xae6b5f[_0x3f0724 + 10], _0x71ba5, 38016083);
    _0x158c43 = _0x25ff9e(_0x158c43, _0x74f907, _0x547070, _0x831122, _0xae6b5f[_0x3f0724 + 15], _0x5aeb41, 3634488961);
    _0x831122 = _0x25ff9e(_0x831122, _0x158c43, _0x74f907, _0x547070, _0xae6b5f[_0x3f0724 + 4], _0x1bb38a, 3889429448);
    _0x547070 = _0x25ff9e(_0x547070, _0x831122, _0x158c43, _0x74f907, _0xae6b5f[_0x3f0724 + 9], _0x497746, 568446438);
    _0x74f907 = _0x25ff9e(_0x74f907, _0x547070, _0x831122, _0x158c43, _0xae6b5f[_0x3f0724 + 14], _0x71ba5, 3275163606);
    _0x158c43 = _0x25ff9e(_0x158c43, _0x74f907, _0x547070, _0x831122, _0xae6b5f[_0x3f0724 + 3], _0x5aeb41, 4107603335);
    _0x831122 = _0x25ff9e(_0x831122, _0x158c43, _0x74f907, _0x547070, _0xae6b5f[_0x3f0724 + 8], _0x1bb38a, 1163531501);
    _0x547070 = _0x25ff9e(_0x547070, _0x831122, _0x158c43, _0x74f907, _0xae6b5f[_0x3f0724 + 13], _0x497746, 2850285829);
    _0x74f907 = _0x25ff9e(_0x74f907, _0x547070, _0x831122, _0x158c43, _0xae6b5f[_0x3f0724 + 2], _0x71ba5, 4243563512);
    _0x158c43 = _0x25ff9e(_0x158c43, _0x74f907, _0x547070, _0x831122, _0xae6b5f[_0x3f0724 + 7], _0x5aeb41, 1735328473);
    _0x831122 = _0x25ff9e(_0x831122, _0x158c43, _0x74f907, _0x547070, _0xae6b5f[_0x3f0724 + 12], _0x1bb38a, 2368359562);
    _0x547070 = _0x4e637e(_0x547070, _0x831122, _0x158c43, _0x74f907, _0xae6b5f[_0x3f0724 + 5], _0x583b3e, 4294588738);
    _0x74f907 = _0x4e637e(_0x74f907, _0x547070, _0x831122, _0x158c43, _0xae6b5f[_0x3f0724 + 8], _0x258d6a, 2272392833);
    _0x158c43 = _0x4e637e(_0x158c43, _0x74f907, _0x547070, _0x831122, _0xae6b5f[_0x3f0724 + 11], _0x527b83, 1839030562);
    _0x831122 = _0x4e637e(_0x831122, _0x158c43, _0x74f907, _0x547070, _0xae6b5f[_0x3f0724 + 14], _0x2b37dd, 4259657740);
    _0x547070 = _0x4e637e(_0x547070, _0x831122, _0x158c43, _0x74f907, _0xae6b5f[_0x3f0724 + 1], _0x583b3e, 2763975236);
    _0x74f907 = _0x4e637e(_0x74f907, _0x547070, _0x831122, _0x158c43, _0xae6b5f[_0x3f0724 + 4], _0x258d6a, 1272893353);
    _0x158c43 = _0x4e637e(_0x158c43, _0x74f907, _0x547070, _0x831122, _0xae6b5f[_0x3f0724 + 7], _0x527b83, 4139469664);
    _0x831122 = _0x4e637e(_0x831122, _0x158c43, _0x74f907, _0x547070, _0xae6b5f[_0x3f0724 + 10], _0x2b37dd, 3200236656);
    _0x547070 = _0x4e637e(_0x547070, _0x831122, _0x158c43, _0x74f907, _0xae6b5f[_0x3f0724 + 13], _0x583b3e, 681279174);
    _0x74f907 = _0x4e637e(_0x74f907, _0x547070, _0x831122, _0x158c43, _0xae6b5f[_0x3f0724 + 0], _0x258d6a, 3936430074);
    _0x158c43 = _0x4e637e(_0x158c43, _0x74f907, _0x547070, _0x831122, _0xae6b5f[_0x3f0724 + 3], _0x527b83, 3572445317);
    _0x831122 = _0x4e637e(_0x831122, _0x158c43, _0x74f907, _0x547070, _0xae6b5f[_0x3f0724 + 6], _0x2b37dd, 76029189);
    _0x547070 = _0x4e637e(_0x547070, _0x831122, _0x158c43, _0x74f907, _0xae6b5f[_0x3f0724 + 9], _0x583b3e, 3654602809);
    _0x74f907 = _0x4e637e(_0x74f907, _0x547070, _0x831122, _0x158c43, _0xae6b5f[_0x3f0724 + 12], _0x258d6a, 3873151461);
    _0x158c43 = _0x4e637e(_0x158c43, _0x74f907, _0x547070, _0x831122, _0xae6b5f[_0x3f0724 + 15], _0x527b83, 530742520);
    _0x831122 = _0x4e637e(_0x831122, _0x158c43, _0x74f907, _0x547070, _0xae6b5f[_0x3f0724 + 2], _0x2b37dd, 3299628645);
    _0x547070 = _0x178015(_0x547070, _0x831122, _0x158c43, _0x74f907, _0xae6b5f[_0x3f0724 + 0], _0x28626e, 4096336452);
    _0x74f907 = _0x178015(_0x74f907, _0x547070, _0x831122, _0x158c43, _0xae6b5f[_0x3f0724 + 7], _0x2d8d53, 1126891415);
    _0x158c43 = _0x178015(_0x158c43, _0x74f907, _0x547070, _0x831122, _0xae6b5f[_0x3f0724 + 14], _0xce773, 2878612391);
    _0x831122 = _0x178015(_0x831122, _0x158c43, _0x74f907, _0x547070, _0xae6b5f[_0x3f0724 + 5], _0x363817, 4237533241);
    _0x547070 = _0x178015(_0x547070, _0x831122, _0x158c43, _0x74f907, _0xae6b5f[_0x3f0724 + 12], _0x28626e, 1700485571);
    _0x74f907 = _0x178015(_0x74f907, _0x547070, _0x831122, _0x158c43, _0xae6b5f[_0x3f0724 + 3], _0x2d8d53, 2399980690);
    _0x158c43 = _0x178015(_0x158c43, _0x74f907, _0x547070, _0x831122, _0xae6b5f[_0x3f0724 + 10], _0xce773, 4293915773);
    _0x831122 = _0x178015(_0x831122, _0x158c43, _0x74f907, _0x547070, _0xae6b5f[_0x3f0724 + 1], _0x363817, 2240044497);
    _0x547070 = _0x178015(_0x547070, _0x831122, _0x158c43, _0x74f907, _0xae6b5f[_0x3f0724 + 8], _0x28626e, 1873313359);
    _0x74f907 = _0x178015(_0x74f907, _0x547070, _0x831122, _0x158c43, _0xae6b5f[_0x3f0724 + 15], _0x2d8d53, 4264355552);
    _0x158c43 = _0x178015(_0x158c43, _0x74f907, _0x547070, _0x831122, _0xae6b5f[_0x3f0724 + 6], _0xce773, 2734768916);
    _0x831122 = _0x178015(_0x831122, _0x158c43, _0x74f907, _0x547070, _0xae6b5f[_0x3f0724 + 13], _0x363817, 1309151649);
    _0x547070 = _0x178015(_0x547070, _0x831122, _0x158c43, _0x74f907, _0xae6b5f[_0x3f0724 + 4], _0x28626e, 4149444226);
    _0x74f907 = _0x178015(_0x74f907, _0x547070, _0x831122, _0x158c43, _0xae6b5f[_0x3f0724 + 11], _0x2d8d53, 3174756917);
    _0x158c43 = _0x178015(_0x158c43, _0x74f907, _0x547070, _0x831122, _0xae6b5f[_0x3f0724 + 2], _0xce773, 718787259);
    _0x831122 = _0x178015(_0x831122, _0x158c43, _0x74f907, _0x547070, _0xae6b5f[_0x3f0724 + 9], _0x363817, 3951481745);
    _0x547070 = _0x572593(_0x547070, _0x28dc68);
    _0x831122 = _0x572593(_0x831122, _0x4a35b6);
    _0x158c43 = _0x572593(_0x158c43, _0x20d22c);
    _0x74f907 = _0x572593(_0x74f907, _0x500c47);
  }
  var _0x1f69d6 = _0x167375(_0x547070) + _0x167375(_0x831122) + _0x167375(_0x158c43) + _0x167375(_0x74f907);
  return _0x1f69d6.toLowerCase();
}
function _0x1da698(_0x282853, _0x1385ef) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x4e5fe1 {
    constructor(_0x4502ea) {
      this.env = _0x4502ea;
    }
    send(_0x4fe482, _0x22be4e = "GET") {
      _0x4fe482 = "string" == typeof _0x4fe482 ? {
        url: _0x4fe482
      } : _0x4fe482;
      let _0x5c53ea = this.get;
      "POST" === _0x22be4e && (_0x5c53ea = this.post);
      return new Promise((_0x1a18c7, _0x53c8a3) => {
        _0x5c53ea.call(this, _0x4fe482, (_0x26ae5e, _0x366dab, _0x4caa64) => {
          _0x26ae5e ? _0x53c8a3(_0x26ae5e) : _0x1a18c7(_0x366dab);
        });
      });
    }
    get(_0x33429f) {
      return this.send.call(this.env, _0x33429f);
    }
    post(_0x59b14c) {
      return this.send.call(this.env, _0x59b14c, "POST");
    }
  }
  return new class {
    constructor(_0x580dd7, _0x40de30) {
      this.name = _0x580dd7;
      this.http = new _0x4e5fe1(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x40de30);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(_0x319a90, _0x3d3048 = null) {
      try {
        return JSON.parse(_0x319a90);
      } catch {
        return _0x3d3048;
      }
    }
    toStr(_0x2ec2e1, _0x13b8f9 = null) {
      try {
        return JSON.stringify(_0x2ec2e1);
      } catch {
        return _0x13b8f9;
      }
    }
    getjson(_0x205b7e, _0x23f4a5) {
      let _0x16fdac = _0x23f4a5;
      const _0x217f42 = this.getdata(_0x205b7e);
      if (_0x217f42) {
        try {
          _0x16fdac = JSON.parse(this.getdata(_0x205b7e));
        } catch {}
      }
      return _0x16fdac;
    }
    setjson(_0x280457, _0xd50656) {
      try {
        return this.setdata(JSON.stringify(_0x280457), _0xd50656);
      } catch {
        return !1;
      }
    }
    getScript(_0x4ba65c) {
      return new Promise(_0x26e2fa => {
        const _0x3d2cc3 = {
          url: _0x4ba65c
        };
        this.get(_0x3d2cc3, (_0x50171c, _0xb4e113, _0x432b09) => _0x26e2fa(_0x432b09));
      });
    }
    runScript(_0x4e17f2, _0x265f7e) {
      return new Promise(_0x5a5826 => {
        let _0x412f24 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x412f24 = _0x412f24 ? _0x412f24.replace(/\n/g, "").trim() : _0x412f24;
        let _0x2d406e = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x2d406e = _0x2d406e ? 1 * _0x2d406e : 20;
        _0x2d406e = _0x265f7e && _0x265f7e.timeout ? _0x265f7e.timeout : _0x2d406e;
        const _0x433490 = {
          script_text: _0x4e17f2,
          mock_type: "cron",
          timeout: _0x2d406e
        };
        const [_0x107c4b, _0x323360] = _0x412f24.split("@"),
          _0xff47fe = {
            url: "http://" + _0x323360 + "/v1/scripting/evaluate",
            body: _0x433490,
            headers: {
              "X-Key": _0x107c4b,
              Accept: "*/*"
            }
          };
        this.post(_0xff47fe, (_0x1c2fe2, _0x202a01, _0x30cf1b) => _0x5a5826(_0x30cf1b));
      }).catch(_0xb6a072 => this.logErr(_0xb6a072));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x5bbf4f = this.path.resolve(this.dataFile),
          _0x2d654d = this.path.resolve(process.cwd(), this.dataFile),
          _0x55f508 = this.fs.existsSync(_0x5bbf4f),
          _0xb7510 = !_0x55f508 && this.fs.existsSync(_0x2d654d);
        if (!_0x55f508 && !_0xb7510) {
          return {};
        }
        {
          const _0x334692 = _0x55f508 ? _0x5bbf4f : _0x2d654d;
          try {
            return JSON.parse(this.fs.readFileSync(_0x334692));
          } catch (_0x4627e4) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x123884 = this.path.resolve(this.dataFile),
          _0x27b3a7 = this.path.resolve(process.cwd(), this.dataFile),
          _0x5c1293 = this.fs.existsSync(_0x123884),
          _0xb1330 = !_0x5c1293 && this.fs.existsSync(_0x27b3a7),
          _0x10bc6e = JSON.stringify(this.data);
        _0x5c1293 ? this.fs.writeFileSync(_0x123884, _0x10bc6e) : _0xb1330 ? this.fs.writeFileSync(_0x27b3a7, _0x10bc6e) : this.fs.writeFileSync(_0x123884, _0x10bc6e);
      }
    }
    lodash_get(_0x2867eb, _0x4622a1, _0x32397d) {
      const _0x54e471 = _0x4622a1.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x34b877 = _0x2867eb;
      for (const _0x3eed45 of _0x54e471) if (_0x34b877 = Object(_0x34b877)[_0x3eed45], void 0 === _0x34b877) {
        return _0x32397d;
      }
      return _0x34b877;
    }
    lodash_set(_0x11ebe7, _0x354ac6, _0x553833) {
      return Object(_0x11ebe7) !== _0x11ebe7 ? _0x11ebe7 : (Array.isArray(_0x354ac6) || (_0x354ac6 = _0x354ac6.toString().match(/[^.[\]]+/g) || []), _0x354ac6.slice(0, -1).reduce((_0x234781, _0x3e13a2, _0x102c18) => Object(_0x234781[_0x3e13a2]) === _0x234781[_0x3e13a2] ? _0x234781[_0x3e13a2] : _0x234781[_0x3e13a2] = Math.abs(_0x354ac6[_0x102c18 + 1]) >> 0 == +_0x354ac6[_0x102c18 + 1] ? [] : {}, _0x11ebe7)[_0x354ac6[_0x354ac6.length - 1]] = _0x553833, _0x11ebe7);
    }
    getdata(_0x4d2cf0) {
      let _0x5d1f8f = this.getval(_0x4d2cf0);
      if (/^@/.test(_0x4d2cf0)) {
        const [, _0x1c9ac9, _0x381a02] = /^@(.*?)\.(.*?)$/.exec(_0x4d2cf0),
          _0x852281 = _0x1c9ac9 ? this.getval(_0x1c9ac9) : "";
        if (_0x852281) {
          try {
            const _0x5dcf25 = JSON.parse(_0x852281);
            _0x5d1f8f = _0x5dcf25 ? this.lodash_get(_0x5dcf25, _0x381a02, "") : _0x5d1f8f;
          } catch (_0x8fb709) {
            _0x5d1f8f = "";
          }
        }
      }
      return _0x5d1f8f;
    }
    setdata(_0x558085, _0x53005a) {
      let _0x180d33 = !1;
      if (/^@/.test(_0x53005a)) {
        const [, _0x31580c, _0x1eb83c] = /^@(.*?)\.(.*?)$/.exec(_0x53005a),
          _0x6add33 = this.getval(_0x31580c),
          _0x2066e3 = _0x31580c ? "null" === _0x6add33 ? null : _0x6add33 || "{}" : "{}";
        try {
          const _0x421815 = JSON.parse(_0x2066e3);
          this.lodash_set(_0x421815, _0x1eb83c, _0x558085);
          _0x180d33 = this.setval(JSON.stringify(_0x421815), _0x31580c);
        } catch (_0x108145) {
          const _0x4b9681 = {};
          this.lodash_set(_0x4b9681, _0x1eb83c, _0x558085);
          _0x180d33 = this.setval(JSON.stringify(_0x4b9681), _0x31580c);
        }
      } else {
        _0x180d33 = this.setval(_0x558085, _0x53005a);
      }
      return _0x180d33;
    }
    getval(_0x2b6414) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x2b6414) : this.isQuanX() ? $prefs.valueForKey(_0x2b6414) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x2b6414]) : this.data && this.data[_0x2b6414] || null;
    }
    setval(_0x506bf2, _0x16637c) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x506bf2, _0x16637c) : this.isQuanX() ? $prefs.setValueForKey(_0x506bf2, _0x16637c) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x16637c] = _0x506bf2, this.writedata(), !0) : this.data && this.data[_0x16637c] || null;
    }
    initGotEnv(_0x56a0b0) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x56a0b0 && (_0x56a0b0.headers = _0x56a0b0.headers ? _0x56a0b0.headers : {}, void 0 === _0x56a0b0.headers.Cookie && void 0 === _0x56a0b0.cookieJar && (_0x56a0b0.cookieJar = this.ckjar));
    }
    get(_0x841b01, _0x4810c9 = () => {}) {
      const _0x42c303 = {
        "X-Surge-Skip-Scripting": !1
      };
      const _0x1a2b57 = {
        hints: !1
      };
      _0x841b01.headers && (delete _0x841b01.headers["Content-Type"], delete _0x841b01.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x841b01.headers = _0x841b01.headers || {}, Object.assign(_0x841b01.headers, _0x42c303)), $httpClient.get(_0x841b01, (_0xad3a98, _0x5ee590, _0x1ceedb) => {
        !_0xad3a98 && _0x5ee590 && (_0x5ee590.body = _0x1ceedb, _0x5ee590.statusCode = _0x5ee590.status);
        _0x4810c9(_0xad3a98, _0x5ee590, _0x1ceedb);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x841b01.opts = _0x841b01.opts || {}, Object.assign(_0x841b01.opts, _0x1a2b57)), $task.fetch(_0x841b01).then(_0x3ecc93 => {
        const {
            statusCode: _0x2155b9,
            statusCode: _0xfa27ce,
            headers: _0x4a98c8,
            body: _0x4c4bd5
          } = _0x3ecc93,
          _0x508234 = {
            status: _0x2155b9,
            statusCode: _0xfa27ce,
            headers: _0x4a98c8,
            body: _0x4c4bd5
          };
        _0x4810c9(null, _0x508234, _0x4c4bd5);
      }, _0x52098d => _0x4810c9(_0x52098d))) : this.isNode() && (this.initGotEnv(_0x841b01), this.got(_0x841b01).on("redirect", (_0x5c6db6, _0x20e793) => {
        try {
          if (_0x5c6db6.headers["set-cookie"]) {
            const _0x22413c = _0x5c6db6.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(_0x22413c, null);
            _0x20e793.cookieJar = this.ckjar;
          }
        } catch (_0x13eddc) {
          this.logErr(_0x13eddc);
        }
      }).then(_0x5b602e => {
        const {
            statusCode: _0x4550ea,
            statusCode: _0x4ef110,
            headers: _0x4bd483,
            body: _0x2ce608
          } = _0x5b602e,
          _0x30f64c = {
            status: _0x4550ea,
            statusCode: _0x4ef110,
            headers: _0x4bd483,
            body: _0x2ce608
          };
        _0x4810c9(null, _0x30f64c, _0x2ce608);
      }, _0x5d0ce3 => {
        const {
          message: _0x40d37e,
          response: _0x1e8601
        } = _0x5d0ce3;
        _0x4810c9(_0x40d37e, _0x1e8601, _0x1e8601 && _0x1e8601.body);
      }));
    }
    post(_0x591dca, _0x432ae5 = () => {}) {
      const _0x173d2a = {
        "X-Surge-Skip-Scripting": !1
      };
      const _0x33c8f1 = {
        hints: !1
      };
      if (_0x591dca.body && _0x591dca.headers && !_0x591dca.headers["Content-Type"] && (_0x591dca.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x591dca.headers && delete _0x591dca.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x591dca.headers = _0x591dca.headers || {}, Object.assign(_0x591dca.headers, _0x173d2a));
        $httpClient.post(_0x591dca, (_0x27d85a, _0x1e2afc, _0x173308) => {
          !_0x27d85a && _0x1e2afc && (_0x1e2afc.body = _0x173308, _0x1e2afc.statusCode = _0x1e2afc.status);
          _0x432ae5(_0x27d85a, _0x1e2afc, _0x173308);
        });
      } else {
        if (this.isQuanX()) {
          _0x591dca.method = "POST";
          this.isNeedRewrite && (_0x591dca.opts = _0x591dca.opts || {}, Object.assign(_0x591dca.opts, _0x33c8f1));
          $task.fetch(_0x591dca).then(_0x5560ff => {
            const {
                statusCode: _0x37b009,
                statusCode: _0x4c9a10,
                headers: _0x453a0b,
                body: _0x592b79
              } = _0x5560ff,
              _0x440c1f = {
                status: _0x37b009,
                statusCode: _0x4c9a10,
                headers: _0x453a0b,
                body: _0x592b79
              };
            _0x432ae5(null, _0x440c1f, _0x592b79);
          }, _0x235be8 => _0x432ae5(_0x235be8));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x591dca);
            const {
              url: _0x3e4c48,
              ..._0x12e7cb
            } = _0x591dca;
            this.got.post(_0x3e4c48, _0x12e7cb).then(_0x57b202 => {
              const {
                  statusCode: _0x445e1f,
                  statusCode: _0x1fd0c5,
                  headers: _0x156489,
                  body: _0x4e28c4
                } = _0x57b202,
                _0x5e21a6 = {
                  status: _0x445e1f,
                  statusCode: _0x1fd0c5,
                  headers: _0x156489,
                  body: _0x4e28c4
                };
              _0x432ae5(null, _0x5e21a6, _0x4e28c4);
            }, _0x29b93b => {
              const {
                message: _0x18b12f,
                response: _0x4bae2b
              } = _0x29b93b;
              _0x432ae5(_0x18b12f, _0x4bae2b, _0x4bae2b && _0x4bae2b.body);
            });
          }
        }
      }
    }
    time(_0x3f474d) {
      let _0x18ab65 = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "H+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      /(y+)/.test(_0x3f474d) && (_0x3f474d = _0x3f474d.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x5a0e95 in _0x18ab65) new RegExp("(" + _0x5a0e95 + ")").test(_0x3f474d) && (_0x3f474d = _0x3f474d.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x18ab65[_0x5a0e95] : ("00" + _0x18ab65[_0x5a0e95]).substr(("" + _0x18ab65[_0x5a0e95]).length)));
      return _0x3f474d;
    }
    msg(_0xc9fa20 = _0x282853, _0x19b374 = "", _0x58e5c5 = "", _0x529214) {
      const _0x223a15 = _0x57588f => {
        if (!_0x57588f) {
          return _0x57588f;
        }
        if ("string" == typeof _0x57588f) {
          return this.isLoon() ? _0x57588f : this.isQuanX() ? {
            "open-url": _0x57588f
          } : this.isSurge() ? {
            url: _0x57588f
          } : void 0;
        }
        if ("object" == typeof _0x57588f) {
          if (this.isLoon()) {
            let _0x3f49de = _0x57588f.openUrl || _0x57588f.url || _0x57588f["open-url"],
              _0x3d3ffa = _0x57588f.mediaUrl || _0x57588f["media-url"];
            const _0x270873 = {
              openUrl: _0x3f49de,
              mediaUrl: _0x3d3ffa
            };
            return _0x270873;
          }
          if (this.isQuanX()) {
            let _0x3796d8 = _0x57588f["open-url"] || _0x57588f.url || _0x57588f.openUrl,
              _0x197dbd = _0x57588f["media-url"] || _0x57588f.mediaUrl;
            const _0x1fdaa7 = {
              "open-url": _0x3796d8,
              "media-url": _0x197dbd
            };
            return _0x1fdaa7;
          }
          if (this.isSurge()) {
            let _0x5360f9 = _0x57588f.url || _0x57588f.openUrl || _0x57588f["open-url"];
            const _0x4f3ce3 = {
              url: _0x5360f9
            };
            return _0x4f3ce3;
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0xc9fa20, _0x19b374, _0x58e5c5, _0x223a15(_0x529214)) : this.isQuanX() && $notify(_0xc9fa20, _0x19b374, _0x58e5c5, _0x223a15(_0x529214)));
      let _0x52d14c = ["", "==============📣系统通知📣=============="];
      _0x52d14c.push(_0xc9fa20);
      _0x19b374 && _0x52d14c.push(_0x19b374);
      _0x58e5c5 && _0x52d14c.push(_0x58e5c5);
      console.log(_0x52d14c.join("\n"));
      this.logs = this.logs.concat(_0x52d14c);
    }
    log(..._0x554070) {
      _0x554070.length > 0 && (this.logs = [...this.logs, ..._0x554070]);
      console.log(_0x554070.join(this.logSeparator));
    }
    logErr(_0x1cd9e4, _0x323462) {
      const _0x25634b = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x25634b ? this.log("", "❗️" + this.name + ", 错误!", _0x1cd9e4.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x1cd9e4);
    }
    wait(_0x22c60a) {
      return new Promise(_0xb84a07 => setTimeout(_0xb84a07, _0x22c60a));
    }
    done(_0x4ec3ad = {}) {
      const _0xe95dc4 = new Date().getTime(),
        _0x34221e = (_0xe95dc4 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x34221e + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x4ec3ad);
    }
  }(_0x282853, _0x1385ef);
}