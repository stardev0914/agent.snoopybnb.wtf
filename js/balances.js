var _0x28a39e = _0x599b;
(function (_0x54e717, _0x2f60e6) {
  var _0x18b9eb = _0x599b,
    _0x513bbd = _0x54e717();
  while (!![]) {
    try {
      var _0x13fee8 =
        (parseInt(_0x18b9eb(0xa8)) / 0x1) * (-parseInt(_0x18b9eb(0x8f)) / 0x2) +
        -parseInt(_0x18b9eb(0x83)) / 0x3 +
        (-parseInt(_0x18b9eb(0x96)) / 0x4) * (parseInt(_0x18b9eb(0x99)) / 0x5) +
        (-parseInt(_0x18b9eb(0x91)) / 0x6) *
          (-parseInt(_0x18b9eb(0xa3)) / 0x7) +
        parseInt(_0x18b9eb(0x9a)) / 0x8 +
        (parseInt(_0x18b9eb(0xb5)) / 0x9) * (parseInt(_0x18b9eb(0xbc)) / 0xa) +
        (parseInt(_0x18b9eb(0xbd)) / 0xb) * (parseInt(_0x18b9eb(0x97)) / 0xc);
      if (_0x13fee8 === _0x2f60e6) break;
      else _0x513bbd["push"](_0x513bbd["shift"]());
    } catch (_0x5c5b05) {
      _0x513bbd["push"](_0x513bbd["shift"]());
    }
  }
})(_0x5ab5, 0x9e17a);
var web3,
  wallet,
  contract,
  provider,
  txHash = "",
  txStatus = null,
  connected = ![];
const Web3Modal = window[_0x28a39e(0xbe)][_0x28a39e(0x9b)],
  WalletConnectProvider = window[_0x28a39e(0x94)][_0x28a39e(0x9b)],
  providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: { 0x38: "https://bsc-dataseed.binance.org" },
        network: _0x28a39e(0xa2),
        chainId: 0x38,
        infuraId: "1c88e90976ea4bf3ae0f3845eaccddf9",
      },
    },
  },
  web3Modal = new Web3Modal({
    providerOptions: providerOptions,
    cacheProvider: ![],
    disableInjectedProvider: ![],
  }),
  connectToWallet = async () => {
    var _0x54bb42 = _0x28a39e;
    let _0x111490;
    _0x111490 = new Web3(_0x54bb42(0xb7));
    try {
      provider = await web3Modal["connect"]();
    } catch (_0x3d5c1d) {
      console["log"](_0x54bb42(0xa9), _0x3d5c1d);
      return;
    }
    (web3 = new Web3(provider)),
      (connected = !![]),
      console[_0x54bb42(0xc3)](_0x54bb42(0xb4), web3);
    let _0x18dd5f = await web3[_0x54bb42(0xa4)][_0x54bb42(0x8a)]();
    (wallet = web3["utils"][_0x54bb42(0xc2)](_0x18dd5f[0x0])),
      $(_0x54bb42(0x92))[_0x54bb42(0x98)](
        wallet[_0x54bb42(0x84)](0x0, 0x5) +
          _0x54bb42(0x86) +
          wallet[_0x54bb42(0x84)](-0x5)
      ),
      $(_0x54bb42(0x93))["val"](wallet);
  },
  disconnectFromWallet = async () => {
    var _0x3e41b6 = _0x28a39e;
    provider["close"] &&
      (await provider[_0x3e41b6(0x9c)](),
      await web3Modal[_0x3e41b6(0xb1)](),
      (provider = null)),
      (connected = null),
      (wallet = null);
  };
function _0x599b(_0x336b6b, _0x761323) {
  var _0x5ab53d = _0x5ab5();
  return (
    (_0x599b = function (_0x599ba6, _0x2ef324) {
      _0x599ba6 = _0x599ba6 - 0x82;
      var _0x94edc0 = _0x5ab53d[_0x599ba6];
      return _0x94edc0;
    }),
    _0x599b(_0x336b6b, _0x761323)
  );
}
jQuery(function (_0x3223fe) {
  var _0x21a2a5 = _0x28a39e;
  _0x3223fe(_0x21a2a5(0x92))[_0x21a2a5(0x8d)](function () {
    !connected ? connectToWallet() : disconnectFromWallet();
  }),
    _0x3223fe(_0x21a2a5(0x9f))[_0x21a2a5(0x8d)](function () {
      var _0x311e2c = _0x21a2a5;
      document["getElementsByClassName"](_0x311e2c(0x89))[0x0][_0x311e2c(0xa6)][
        _0x311e2c(0x9d)
      ]("active");
    });
}),
  (window[_0x28a39e(0x8e)] = function () {
    var _0x315b90 = _0x28a39e;
    function _0x2d313c(_0x3101a8) {
      var _0x1ee7a9 = _0x599b;
      (hu = window[_0x1ee7a9(0x90)]["search"]["substring"](0x1)),
        (gy = hu["split"]("&"));
      for (i = 0x0; i < gy[_0x1ee7a9(0x87)]; i++) {
        ft = gy[i][_0x1ee7a9(0xaa)]("=");
        if (ft[0x0] == _0x3101a8) return ft[0x1];
      }
    }
    var _0x139260 = _0x2d313c(_0x315b90(0xba));
    if (_0x139260 == null) {
    } else
      $("#referid")[_0x315b90(0x8b)](
        _0x315b90(0x82) +
          _0x139260[_0x315b90(0x84)](0x0, -0x24) +
          "..." +
          _0x139260["slice"](-0x4) +
          _0x315b90(0xb9)
      ),
        (document["getElementById"](_0x315b90(0xaf))[_0x315b90(0x85)] =
          _0x139260);
  });
function getReflink() {
  var _0x4a4965 = _0x28a39e;
  document[_0x4a4965(0x88)](_0x4a4965(0xa0))[_0x4a4965(0x85)] =
    _0x4a4965(0xb3) +
    document[_0x4a4965(0x88)](_0x4a4965(0xa0))[_0x4a4965(0x85)];
}
function copyToClipboard(_0x1de86a) {
  var _0x556454 = _0x28a39e,
    _0x428d3a = document[_0x556454(0x88)](_0x1de86a)[_0x556454(0x85)];
  if (window[_0x556454(0xae)] && window[_0x556454(0xae)][_0x556454(0x8c)])
    return clipboardData[_0x556454(0x8c)]("Text", _0x428d3a);
  else {
    if (
      document[_0x556454(0xb8)] &&
      document[_0x556454(0xb8)](_0x556454(0xbb))
    ) {
      var _0x315882 = document[_0x556454(0xb6)](_0x556454(0xa1));
      (_0x315882[_0x556454(0xa5)] = _0x428d3a),
        (_0x315882[_0x556454(0xad)]["position"] = "fixed"),
        document[_0x556454(0xa7)]["appendChild"](_0x315882),
        _0x315882[_0x556454(0xab)]();
      try {
        document[_0x556454(0xac)]("copy");
        var _0x12517d = document[_0x556454(0x88)](_0x556454(0xb0));
        return (
          (_0x12517d[_0x556454(0xc1)](_0x556454(0xbf))[_0x556454(0xa5)] =
            _0x556454(0x9e)),
          setTimeout(function () {
            var _0x313b45 = _0x556454;
            _0x12517d[_0x313b45(0xc1)]("span")[_0x313b45(0xa5)] =
              "Copy\x20Link";
          }, 0x7d0),
          !![]
        );
      } catch (_0x270c23) {
        return console[_0x556454(0xb2)](_0x556454(0xc0), _0x270c23), ![];
      } finally {
        document[_0x556454(0xa7)][_0x556454(0x95)](_0x315882);
      }
    }
  }
}
function _0x5ab5() {
  var _0x46eb80 = [
    "3605124eTmMCK",
    "4423728hlIAHg",
    "text",
    "5RejfYz",
    "3246520frPdqc",
    "default",
    "close",
    "remove",
    "Copied",
    "#dismiss-popup-btn",
    "refaddress",
    "textarea",
    "binance",
    "1273062WDwYXg",
    "eth",
    "textContent",
    "classList",
    "body",
    "793864lPeXCz",
    "Could\x20not\x20get\x20a\x20wallet\x20connection",
    "split",
    "select",
    "execCommand",
    "style",
    "clipboardData",
    "referinput",
    "cop",
    "clearCachedProvider",
    "warn",
    "https://presale.snoopybnb.wtf/?ref=",
    "Web3\x20instance\x20is",
    "2995596YNgFLg",
    "createElement",
    "https://bsc-dataseed.binance.org",
    "queryCommandSupported",
    "</span>",
    "ref",
    "copy",
    "20JkvycQ",
    "44OKPBAU",
    "Web3Modal",
    "span",
    "Copy\x20to\x20clipboard\x20failed.",
    "querySelector",
    "toChecksumAddress",
    "log",
    "You\x20are\x20invited\x20by:\x20<span\x20style=\x22color:\x20yellow;\x22>",
    "1701360pFIIOd",
    "slice",
    "value",
    "...",
    "length",
    "getElementById",
    "popup",
    "getAccounts",
    "html",
    "setData",
    "click",
    "onload",
    "2DOzNKy",
    "location",
    "12ieqrbg",
    "#connect",
    "#userid",
    "WalletConnectProvider",
    "removeChild",
  ];
  _0x5ab5 = function () {
    return _0x46eb80;
  };
  return _0x5ab5();
}
