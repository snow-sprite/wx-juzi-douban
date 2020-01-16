require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonpMpvue([3],{

/***/ 100:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(4);

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
  name: 'HistoryDetail',
  computed: {
    fontsize: function fontsize(_) {
      return Number(__WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].getters.textIndex);
    },
    isNightMode: function isNightMode(_) {
      return __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].getters.isNightMode;
    } // 夜间模式
  },
  data: function data() {
    return {
      detailData: {
        year: '',
        month: '',
        day: '',
        title: '',
        picUrl: '',
        details: ''
      },
      defaultThumb: 'this.src=../../../static/img/history/fail.png'
    };
  },
  created: function created() {
    if (this.isNightMode) {
      __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].commit('toggleNightMode', true);
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#232323'
      });
    } else {
      __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].commit('toggleNightMode', false);
      wx.setNavigationBarColor({
        frontColor: '#000000',
        backgroundColor: '#ffffff'
      });
    }
  },
  onLoad: function onLoad(option) {
    var _this = this;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(this.detailData).forEach(function (key) {
      _this.detailData[key] = option[key];
    });
    if (this.detailData && this.detailData.details) {
      // eslint-disable-next-line no-irregular-whitespace
      this.detailData.details = this.detailData.details.replace(/　　/g, '<br/>');
    }
  },

  // 分享当前页
  onShareAppMessage: function onShareAppMessage() {
    return {
      title: '「历史上的今天」',
      // path: `/pages/detail/main?story=${JSON.stringify(this.detailData)}`,
      path: '/pages/detail/main?year=' + this.detailData.year + '&month=' + this.detailData.month + '&day=' + this.detailData.day + '&title=' + this.detailData.title + '&picurl=' + this.detailData.picUrl + '&details=' + this.detailData.details,
      success: function success(res) {},
      fail: function fail() {}
    };
  }
});

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "zl-detail",
    class: {
      'night-theme': _vm.isNightMode
    }
  }, [_c('h3', {
    staticClass: "zl-detail__title",
    class: {
      'night-text': _vm.isNightMode
    }
  }, [_c('span', {
    staticClass: "zl-detail__title--tag"
  }, [_vm._v("\n      " + _vm._s(_vm.detailData.year) + "." + _vm._s(_vm.detailData.month < 10 ? '0' + _vm.detailData.month : _vm.detailData.month) + "." + _vm._s(_vm.detailData.day < 10 ? '0' + _vm.detailData.day : _vm.detailData.day) + "\n    ")]), _vm._v(" |\n    " + _vm._s(_vm.detailData.title) + "\n  ")]), _vm._v(" "), _c('div', {
    staticClass: "zl-detail__share"
  }, [_c('button', {
    staticClass: "zl-detail__share--button",
    attrs: {
      "open-type": "share"
    }
  })], 1), _vm._v(" "), _c('section', {
    staticClass: "zl-detail__publish",
    class: {
      'night-bg': _vm.isNightMode
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "zl-detail__thumb"
  }, [_c('transition', {
    attrs: {
      "name": "fade",
      "mpcomid": '0'
    }
  }, [(_vm.detailData.picUrl) ? _c('img', {
    attrs: {
      "src": _vm.detailData.picUrl,
      "onerror": _vm.defaultThumb
    }
  }) : _c('img', {
    attrs: {
      "src": "../../../static/img/history/fail.png"
    }
  })])], 1), _vm._v(" "), _c('article', {
    staticClass: "zl-detail__article",
    class: {
      'night-text': _vm.isNightMode
    },
    domProps: {
      "innerHTML": _vm._s(_vm.detailData.details)
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-318d4bea", esExports)
  }
}

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(99);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_318d4bea_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(103);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(100)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-318d4bea"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_318d4bea_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/detail/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-318d4bea", Component.options)
  } else {
    hotAPI.reload("data-v-318d4bea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},[98]);
//# sourceMappingURL=main.js.map