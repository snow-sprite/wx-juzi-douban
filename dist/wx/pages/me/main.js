require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonpMpvue([2],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(119);



new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]).$mount();

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_fc19b91e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(122);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(120)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-fc19b91e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_fc19b91e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/me/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fc19b91e", Component.options)
  } else {
    hotAPI.reload("data-v-fc19b91e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 120:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(10);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Me',
  data: function data() {
    return {
      textSizeList: [{ size: '小' }, { size: '中' }, { size: '大' }],
      themeModeList: [{ theme: '简约白' }, { theme: '之家红' }, { theme: '石榴粉' }, { theme: '芒果橙' }, { theme: '旗鱼蓝' }, { theme: '西瓜绿' }, { theme: '葡萄紫' }],
      // themeIndex: 0, // 默认主题 index
      test: !getApp().globalData.isShowIndexRefresh,
      timer: null
    };
  },

  computed: {
    isShowRefresh: function isShowRefresh(_) {
      return __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].getters.isShowRefresh;
    }, // 首页刷新
    textIndex: function textIndex(_) {
      return __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].getters.textIndex;
    }, // 字体
    themeIndex: function themeIndex(_) {
      return __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].getters.themeIndex;
    }, // 主题
    isAutoNightMode: function isAutoNightMode(_) {
      return __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].getters.isAutoNightMode;
    }, // 自动夜间模式
    globalAutoNightStartTime: function globalAutoNightStartTime(_) {
      return __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].getters.globalAutoNightStartTime;
    },
    globalAutoNightEndTime: function globalAutoNightEndTime(_) {
      return __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].getters.globalAutoNightEndTime;
    },
    isNightMode: function isNightMode(_) {
      return __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].getters.isNightMode;
    } // 夜间模式
  },
  mounted: function mounted() {
    // 默认先设置一下主题
    if (this.isNightMode) {
      // 顶部导航夜间模式
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#232323'
      });
      // 底部tabbar夜间模式
      wx.setTabBarStyle({
        color: '#a5a5a5',
        backgroundColor: '#232323',
        selectedColor: '#ffd700'
      });
    } else {
      // 非夜间模式可以先设置主题皮肤
      this.setTheme(this.themeIndex);
      // 顶部导航非夜间
      // wx.setNavigationBarColor({
      //   frontColor: '#000000',
      //   backgroundColor: '#ffffff'
      // })
      // 底部tabbar非夜间模式
      wx.setTabBarStyle({
        color: '#a5a5a5',
        backgroundColor: '#ffffff',
        selectedColor: '#ffd700'
      });
    }
  },

  methods: {
    onShareAppMessage: function onShareAppMessage() {
      // 我的页的转发
      return {
        title: '我的2',
        imageUrl: '../index/img/banner.png',
        success: function success(res) {},
        fail: function fail(err) {
          console.err(err);
        }
      };
    },
    toggleRefresh: function toggleRefresh(e) {
      // 切换首页刷新按钮
      __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].commit('toggleRefresh');
      if (this.isShowRefresh) {
        // 本地存储
        wx.setStorageSync('isShowIndexRefresh', true);
      } else {
        wx.setStorageSync('isShowIndexRefresh', false);
      }
    },
    pickerTextSizeChange: function pickerTextSizeChange(e) {
      // 列表/正文字体选择
      __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].commit('pickerTextSizeChange', e.target.value || 1);
      var fontsizeIndex = e.target.value;
      wx.setStorageSync('globalFontSize', fontsizeIndex);
    },
    pickerThemeChange: function pickerThemeChange(e) {
      // 主题选择
      var themeIndex = Number(e.target.value);
      __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].commit('pickerThemeChange', themeIndex || 0);
      wx.setStorageSync('globalTheme', themeIndex);
    },
    toggleAutoNightMode: function toggleAutoNightMode(e) {
      __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].commit('toggleAutoNightMode', e.target.value);
      if (e.target.value) {
        this.setAutoNightModel();
      }
      if (this.isAutoNightMode) {
        // 本地存储
        wx.setStorageSync('isAutoNightModeInGlobal', true);
        // 设置自动夜间模式
        // if (this.isNightMode) {
        // }
      } else {
        wx.setStorageSync('isAutoNightModeInGlobal', false);
      }
    },
    setAutoNightModel: function setAutoNightModel() {
      var timer = new Date();
      var hour = Number(timer.getHours());
      var minutes = Number(timer.getMinutes());
      var startGaps = this.globalAutoNightStartTime.indexOf(':');
      var endGaps = this.globalAutoNightEndTime.indexOf(':');
      var settingStartHour = Number(this.globalAutoNightStartTime.slice(0, startGaps));
      var settingStartMinutes = Number(this.globalAutoNightStartTime.slice(startGaps + 1));

      var settingEndHour = Number(this.globalAutoNightEndTime.slice(0, endGaps));
      var settingEndtMinutes = Number(this.globalAutoNightEndTime.slice(endGaps + 1));

      if (hour === settingStartHour) {
        if (minutes >= settingStartMinutes) {
          __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].commit('toggleNightMode', true);
        }
      }
      if (hour > settingStartHour) {
        __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].commit('toggleNightMode', true);
      }

      if (hour === settingEndHour) {
        if (minutes <= settingEndtMinutes) {
          __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].commit('toggleNightMode', true);
        }
      }
      if (hour < settingEndHour) {
        __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].commit('toggleNightMode', true);
      }
    },
    pickerAutoNightStartTime: function pickerAutoNightStartTime(e) {
      // TODO
      __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].commit('pickerAutoNightStartTime', e.target.value || '00:00');
      var timeIndex = e.target.value;
      wx.setStorageSync('globalAutoNightStartTime', timeIndex);
    },
    pickerAutoNightEndTime: function pickerAutoNightEndTime(e) {
      // TODO
      __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].commit('pickerAutoNightEndTime', e.target.value || '00:00');
      var timeIndex = e.target.value;
      wx.setStorageSync('globalAutoNightEndTime', timeIndex);
    },
    toggleNightMode: function toggleNightMode(e) {
      __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].commit('toggleNightMode', e.target.value);
      if (this.isNightMode) {
        // 本地存储
        wx.setStorageSync('isNightModeInGlobal', true);
      } else {
        // 关闭夜间模式先设置默认主题皮肤
        this.setTheme(this.themeIndex);
        wx.setStorageSync('isNightModeInGlobal', false);
      }
    },
    setTheme: function setTheme(ind) {
      /*
        这里直接使用store.commit('pickerThemeChange', ind)并不会生效
        可能是因为小程序有限制，禁止了程序的自动触发改变主题皮肤
        想不到其他的原因了
        wxsb！！！😡
      */
      this.timer = setTimeout(function () {
        __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].commit('pickerThemeChange', ind);
      }, 0);
    }
  }
});

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.isNightMode ? 'night' : '',
    staticStyle: {
      "height": "100vh"
    }
  }, [_c('div', {
    staticClass: "single-setting",
    class: _vm.isNightMode ? 'line-color' : ''
  }, [_c('text', {
    class: {
      'night-text': _vm.isNightMode
    }
  }, [_vm._v("显示首页刷新按钮")]), _vm._v(" "), _c('switch', {
    staticClass: "fr",
    attrs: {
      "checked": _vm.isShowRefresh,
      "eventid": '0'
    },
    on: {
      "change": _vm.toggleRefresh
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "single-setting",
    class: _vm.isNightMode ? 'line-color' : ''
  }, [_c('picker', {
    attrs: {
      "value": _vm.textIndex,
      "range": _vm.textSizeList,
      "range-key": "size",
      "eventid": '1'
    },
    on: {
      "change": _vm.pickerTextSizeChange
    }
  }, [_c('div', [_c('text', {
    class: {
      'night-text': _vm.isNightMode
    }
  }, [_vm._v("列表/正文字体大小")]), _vm._v(" "), _c('text', {
    staticClass: "fr pr10",
    class: {
      'night-text': _vm.isNightMode
    }
  }, [_vm._v(_vm._s(_vm.textSizeList[_vm.textIndex].size))])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "single-setting",
    class: _vm.isNightMode ? 'line-color' : ''
  }, [_c('picker', {
    attrs: {
      "value": _vm.themeIndex,
      "range": _vm.themeModeList,
      "range-key": "theme",
      "eventid": '2'
    },
    on: {
      "change": _vm.pickerThemeChange
    }
  }, [_c('text', {
    class: {
      'night-text': _vm.isNightMode
    }
  }, [_vm._v("主题模式")]), _vm._v(" "), _c('text', {
    staticClass: "fr pr10",
    class: {
      'night-text': _vm.isNightMode
    }
  }, [_vm._v(_vm._s(_vm.themeModeList[_vm.themeIndex].theme))])])], 1), _vm._v(" "), _c('div', {
    staticClass: "single-setting",
    class: _vm.isNightMode ? 'line-color' : ''
  }, [_c('text', {
    class: {
      'night-text': _vm.isNightMode
    }
  }, [_vm._v("自动夜间模式")]), _vm._v(" "), _c('switch', {
    staticClass: "fr",
    attrs: {
      "checked": _vm.isAutoNightMode,
      "eventid": '3'
    },
    on: {
      "change": _vm.toggleAutoNightMode
    }
  })]), _vm._v(" "), (_vm.isAutoNightMode) ? _c('div', {
    staticClass: "auto-timer"
  }, [_c('picker', {
    attrs: {
      "mode": "time",
      "start": "00:00",
      "value": _vm.globalAutoNightStartTime,
      "eventid": '5'
    },
    on: {
      "change": _vm.pickerAutoNightStartTime
    }
  }, [_c('text', {
    staticClass: "auto-start-time auto-time",
    class: {
      'night-text': _vm.isNightMode,
      'night-border': _vm.isNightMode
    },
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": function($event) {}
    }
  }, [_vm._v(_vm._s(_vm.globalAutoNightStartTime))])]), _vm._v(" "), _c('text', {
    staticStyle: {
      "margin-left": "15px",
      "padding-top": "3px"
    }
  }, [_vm._v("-")]), _vm._v(" "), _c('picker', {
    attrs: {
      "mode": "time",
      "start": "00:00",
      "value": _vm.globalAutoNightEndTime,
      "eventid": '6'
    },
    on: {
      "change": _vm.pickerAutoNightEndTime
    }
  }, [_c('text', {
    staticClass: "auto-end-time auto-time",
    class: {
      'night-text': _vm.isNightMode,
      'night-border': _vm.isNightMode
    }
  }, [_vm._v(_vm._s(_vm.globalAutoNightEndTime))])])], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "single-setting",
    class: _vm.isNightMode ? 'line-color' : ''
  }, [_c('text', {
    class: {
      'night-text': _vm.isNightMode
    }
  }, [_vm._v("夜间模式")]), _vm._v(" "), _c('switch', {
    staticClass: "fr",
    attrs: {
      "checked": _vm.isNightMode,
      "eventid": '7'
    },
    on: {
      "change": _vm.toggleNightMode
    }
  })])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fc19b91e", esExports)
  }
}

/***/ })

},[118]);
//# sourceMappingURL=main.js.map