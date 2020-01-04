require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonpMpvue([1],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Live_vue__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3612b2ec_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Live_vue__ = __webpack_require__(115);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(104)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3612b2ec"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Live_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3612b2ec_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Live_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Live.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Live.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3612b2ec", Component.options)
  } else {
    hotAPI.reload("data-v-3612b2ec", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 104:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_MoringNews__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LiveItem__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_request__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_apiList__ = __webpack_require__(30);
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

/*
 * 快讯模块
 */
// import MySwiper from '@/components/Swipers'




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Live',
  props: {
    livesList: {
      required: true,
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      // banner集合
      swiperData: [],
      // 早新闻
      newsData: [],
      // 自定义快讯数据
      newLiveData: []
    };
  },

  components: {
    // MySwiper,
    MoringNews: __WEBPACK_IMPORTED_MODULE_0__components_MoringNews__["a" /* default */],
    LiveItem: __WEBPACK_IMPORTED_MODULE_1__LiveItem__["a" /* default */]
  },
  mounted: function mounted() {
    // 获取轮播数据
    this.getBanner();
    // 获取早新闻
    this.getMorningNews();
    // 处理快讯数据 方便使用
    this.handleLiveData();
  },

  methods: {
    handleLiveData: function handleLiveData() {
      var _this = this;

      var tmpDate = '';
      this.livesList.forEach(function (live, ind) {
        // 数组中时间相同
        if (live.date === tmpDate) {
          _this.newLiveData[ind].lives.push(live);
        } else {
          // 数组中有不相同时间数据
          _this.newLiveData.push({
            date: live.date,
            lives: live.lives
          });
        }
        tmpDate = live.date;
      });
    },
    getBanner: function getBanner() {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_2__lib_request__["a" /* default */].get(__WEBPACK_IMPORTED_MODULE_3__api_apiList__["a" /* BANNER_LIST */], {
        position: 'app_index_top'
      }).then(function (res) {
        if (res.statusCode === 200) _this2.swiperData = res.data;
      });
    },
    getMorningNews: function getMorningNews() {
      var _this3 = this;

      __WEBPACK_IMPORTED_MODULE_2__lib_request__["a" /* default */].get(__WEBPACK_IMPORTED_MODULE_3__api_apiList__["d" /* MAIN_NEWS */], {
        tag: '金色9：30',
        limit: 1,
        topic_id: 0,
        flag: 'down'
      }).then(function (res) {
        if (res.statusCode === 200) {
          res.data.forEach(function (resp) {
            resp.title = resp.title.replace(/金色/g, '今日');
          });
          _this3.newsData = res.data;
        }
      });
    },
    loadMore: function loadMore() {
      // todo 获取下一条快讯需要上次的bottom_id 目前id未传过来 待修复
      // this.$emit('handleLive')
    }
  }
});

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_MoringNews_vue__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9d7bbd3a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_MoringNews_vue__ = __webpack_require__(109);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(107)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9d7bbd3a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_MoringNews_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9d7bbd3a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_MoringNews_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MoringNews.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MoringNews.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9d7bbd3a", Component.options)
  } else {
    hotAPI.reload("data-v-9d7bbd3a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 107:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(5);
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

/*
 * @Description: 早新闻
 * @Author: zhiozhou
 * @Date: 2019-04-17 15:08:20
 * @LastEditTime: 2019-04-17 15:08:20
 */

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'MoringNews',
  props: {
    newsData: {
      require: true,
      type: Array
    }
  },
  computed: {
    fontsize: function fontsize(_) {
      return Number(__WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].getters.textIndex);
    },
    isNightMode: function isNightMode(_) {
      return __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].getters.isNightMode;
    } // 夜间模式
  }
});

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', _vm._l((_vm.newsData), function(item, index) {
    return _c('div', {
      key: item.id,
      staticClass: "moring-news-box"
    }, [_c('header', [_c('img', {
      staticClass: "logo",
      attrs: {
        "src": "../../static/img/morning.png",
        "alt": "logo"
      }
    }), _vm._v(" "), _c('span', {
      class: {
        'zl-mini-info': _vm.fontsize === 0,
          'zl-default-info': _vm.fontsize === 1,
          'zl-large-info': _vm.fontsize === 2,
          'night-text': _vm.isNightMode
      }
    }, [_vm._v("区块链早讯")])]), _vm._v(" "), _c('article', [_c('section', {
      class: {
        'zl-mini-title': _vm.fontsize === 0, 'zl-default-title': _vm.fontsize === 1, 'zl-large-title': _vm.fontsize === 2
      }
    }, [_vm._v("\n        " + _vm._s(item.title) + "\n      ")])], 1)], 1)
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9d7bbd3a", esExports)
  }
}

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_LiveItem_vue__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_14f97b3d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_LiveItem_vue__ = __webpack_require__(114);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(111)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-14f97b3d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_LiveItem_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_14f97b3d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_LiveItem_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/LiveItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] LiveItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-14f97b3d", Component.options)
  } else {
    hotAPI.reload("data-v-14f97b3d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 111:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_utils_js__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(5);
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
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'LiveItem',
  props: {
    liveData: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
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
      newLiveData: []
    };
  },
  mounted: function mounted() {
    this.translateLiveData();
  },

  methods: {
    // 有必要的转换下数据格式
    translateLiveData: function translateLiveData() {
      this.newLiveData = this.liveData;
      this.newLiveData.forEach(function (live) {
        live.lives.forEach(function (val) {
          val.created_at_new = __WEBPACK_IMPORTED_MODULE_0__lib_utils_js__["a" /* default */].getTime(val.created_at);
          val.title = val.content.match(/【(.+)?】/) ? val.content.slice(val.content.indexOf('【') + 1, val.content.indexOf('】')) : '';
        });
      });
    }
  }
});

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var utils = {
  getTime: function getTime(value) {
    if (typeof value === 'string' && value.indexOf('-') > 0) {
      value = value.replace(/-/g, '/');
    } else {
      value = value * 1000;
    }
    // 获取详细时间
    var myDate = new Date(value);
    // let Y = myDate.getFullYear()
    // let M = (myDate.getMonth() + 1 < 10 ? '0' + (myDate.getMonth() + 1) : myDate.getMonth() + 1)
    // let D = (myDate.getDate() < 10 ? '0' + (myDate.getDate()) : myDate.getDate())
    var h = myDate.getHours() < 10 ? '0' + myDate.getHours() : myDate.getHours();
    var m = myDate.getMinutes() < 10 ? '0' + myDate.getMinutes() : myDate.getMinutes();
    // let detailDate = Y + '/' + M + '/' + D + ' ' + h + ':' + m
    var detailDate = h + ':' + m;
    return detailDate;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (utils);

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('article', {
    staticClass: "zl-live"
  }, _vm._l((_vm.liveData), function(val, ind) {
    return _c('div', {
      key: ind
    }, [_c('aside', {
      staticClass: "zl-live__time",
      class: {
        'night-bg': _vm.isNightMode
      }
    }, [_c('ul', {
      staticClass: "zl-live__time--calendar"
    }, [_c('li', {
      staticClass: "month",
      class: {
        'zl-mini-fontsize': _vm.fontsize === 0,
          'zl-default-fontsize': _vm.fontsize === 1,
          'zl-large-fontsize': _vm.fontsize === 2,
          'zl-mini-date': _vm.fontsize === 0,
          'zl-default-date': _vm.fontsize === 1,
          'zl-large-date': _vm.fontsize === 2,
          'night-text': _vm.isNightMode,
          'night-text-date': _vm.isNightMode
      }
    }, [_vm._v("\n          " + _vm._s(val.date) + "\n        ")])], 1)], 1), _vm._v(" "), _vm._l((val.lives), function(value, index) {
      return _c('div', {
        key: index,
        staticClass: "zl-live__content",
        class: {
          'night-text': _vm.isNightMode,
          'night-border-left': _vm.isNightMode
        }
      }, [(value.grade == 5) ? _c('p', {
        staticClass: "zl-important"
      }) : _vm._e(), _vm._v(" "), (value.grade == 4 || value.grade == 3) ? _c('p', {
        staticClass: "zl-normal"
      }) : _vm._e(), _vm._v(" "), (value.grade == 1 || value.grade == 2) ? _c('p', {
        staticClass: "zl-default"
      }) : _vm._e(), _vm._v(" "), _c('aside', {
        staticClass: "zl-live__publishtime",
        class: {
          'zl-mini-fontsize': _vm.fontsize === 0,
            'zl-default-fontsize': _vm.fontsize === 1,
            'zl-large-fontsize': _vm.fontsize === 2,
            'night-text': _vm.isNightMode
        }
      }, [_vm._v("\n        " + _vm._s(value.created_at_new) + "\n      ")]), _vm._v(" "), _c('aside', {
        staticClass: "zl-live__title",
        class: {
          'zl-mini-title-gaps': _vm.fontsize === 0,
            'zl-default-title-gaps': _vm.fontsize === 1,
            'zl-large-title-gaps': _vm.fontsize === 2,
            'night-text': _vm.isNightMode
        }
      }, [_c('span', {
        staticClass: "zl-live__title--tag"
      }), _vm._v(" "), (value.grade == 5) ? _c('span', {
        class: {
          'zl-mini-title': _vm.fontsize === 0, 'zl-default-title': _vm.fontsize === 1, 'zl-large-title': _vm.fontsize === 2
        },
        staticStyle: {
          "color": "#ea3e3e"
        }
      }, [_vm._v(_vm._s(value.title))]) : _c('span', {
        class: {
          'zl-mini-title': _vm.fontsize === 0,
            'zl-default-title': _vm.fontsize === 1,
            'zl-large-title': _vm.fontsize === 2,
            'night-text': _vm.isNightMode
        }
      }, [_vm._v(_vm._s(value.title))])]), _vm._v(" "), _c('section', {
        staticClass: "zl-live__contents",
        class: {
          'zl-mini-fontsize': _vm.fontsize === 0,
            'zl-default-fontsize': _vm.fontsize === 1,
            'zl-large-fontsize': _vm.fontsize === 2,
            'night-text': _vm.isNightMode
        }
      }, [_vm._v("\n        " + _vm._s(value.content) + "\n      ")]), _vm._v(" "), _c('div', {
        staticClass: "zl-live__operate",
        class: {
          'zl-mini-operate': _vm.fontsize === 0, 'zl-default-operate': _vm.fontsize === 1, 'zl-large-operate': _vm.fontsize === 2
        }
      }, [_c('ul', [_c('li', [(value.up_counts > value.down_counts) ? _c('img', {
        class: {
          'zl-mini-up-img': _vm.fontsize === 0, 'zl-default-up-img': _vm.fontsize === 1, 'zl-large-up-img': _vm.fontsize === 2
        },
        attrs: {
          "src": "../../static/img/live/liveup.svg"
        }
      }) : _vm._e(), _vm._v(" "), (value.up_counts < value.down_counts || value.up_counts == value.down_counts) ? _c('img', {
        class: {
          'zl-mini-up-img': _vm.fontsize === 0, 'zl-default-up-img': _vm.fontsize === 1, 'zl-large-up-img': _vm.fontsize === 2
        },
        attrs: {
          "src": "../../static/img/live/noliveup.svg"
        }
      }) : _vm._e(), _vm._v(" "), _c('span', {
        staticClass: "zl-bull_num",
        class: {
          'zl-mini-fontsize': _vm.fontsize === 0,
            'zl-default-fontsize': _vm.fontsize === 1,
            'zl-large-fontsize': _vm.fontsize === 2,
            'night-text': _vm.isNightMode
        }
      }, [_vm._v("\n              " + _vm._s(value.up_counts) + "\n            ")])]), _vm._v(" "), _c('li', [(value.up_counts < value.down_counts) ? _c('img', {
        class: {
          'zl-mini-down-img': _vm.fontsize === 0, 'zl-default-down-img': _vm.fontsize === 1, 'zl-large-down-img': _vm.fontsize === 2
        },
        attrs: {
          "src": "../../static/img/live/livedown.svg"
        }
      }) : _vm._e(), _vm._v(" "), (value.up_counts > value.down_counts || value.up_counts == value.down_counts) ? _c('img', {
        class: {
          'zl-mini-down-img': _vm.fontsize === 0, 'zl-default-down-img': _vm.fontsize === 1, 'zl-large-down-img': _vm.fontsize === 2
        },
        attrs: {
          "src": "../../static/img/live/nolivedown.svg"
        }
      }) : _vm._e(), _vm._v(" "), _c('span', {
        staticClass: "zl-bull_num",
        class: {
          'zl-mini-fontsize': _vm.fontsize === 0,
            'zl-default-fontsize': _vm.fontsize === 1,
            'zl-large-fontsize': _vm.fontsize === 2,
            'night-text': _vm.isNightMode
        }
      }, [_vm._v("\n              " + _vm._s(value.down_counts) + "\n            ")])])], 1)], 1)], 1)
    })], 2)
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-14f97b3d", esExports)
  }
}

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('scroll-view', {
    staticClass: "zl-coin-box",
    attrs: {
      "scroll-y": "",
      "lower-threshold": "50",
      "enable-back-to-top": "true",
      "eventid": '0'
    },
    on: {
      "scrolltolower": _vm.loadMore
    }
  }, [(_vm.newsData && _vm.newsData.length > 0) ? _c('MoringNews', {
    attrs: {
      "newsData": _vm.newsData,
      "mpcomid": '0'
    }
  }) : _vm._e(), _vm._v(" "), _c('article', {
    staticClass: "js-drawer-container js-live"
  }, [_c('section', {
    staticClass: "js-lives"
  }, [(_vm.newLiveData && _vm.newLiveData.length > 0) ? _c('LiveItem', {
    attrs: {
      "liveData": _vm.newLiveData,
      "mpcomid": '1'
    }
  }) : _vm._e()], 1)], 1)], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3612b2ec", esExports)
  }
}

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Market_vue__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_60e78f4c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Market_vue__ = __webpack_require__(119);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(117)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-60e78f4c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Market_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_60e78f4c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Market_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Market.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Market.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-60e78f4c", Component.options)
  } else {
    hotAPI.reload("data-v-60e78f4c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 117:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_request__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_apiList__ = __webpack_require__(30);
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

/*
 * @Description: 币种行情
 * @Author: zhoun
 * @Date: 2019-03-24 15:08:20
 * @LastEditTime: 2019-3-24 15:08:20
 */



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Coin',
  filters: {
    formatPoint: function formatPoint(value) {
      var num = parseFloat(value);
      return num.toFixed(2);
    }
  },
  data: function data() {
    return {
      param: {
        page: 1,
        limit: 15,
        offset: 0,
        currency: '',
        sortby: 'market_cap',
        order: 'desc'
      },
      list: [],
      isShowInfo: false,
      currentSymbol: '',
      coinDetail: {
        // 流通量
        supply: '',
        vol: '',
        market_cap: ''
      },
      isLoading: true,
      busy: true,
      state: 1
    };
  },

  computed: {
    isNightMode: function isNightMode(_) {
      return __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].getters.isNightMode;
    } // 夜间模式
  },
  mounted: function mounted() {
    this.getCurrencyList();
  },

  methods: {
    // 显示详情
    switchInfo: function switchInfo(item) {
      if (this.currentSymbol === item.symbol && this.isShowInfo) {
        this.isShowInfo = false;
        return false;
      }
      this.isShowInfo = true;
      this.currentSymbol = item.symbol;
      this.coinDetail.supply = item.supply;
      this.coinDetail.vol = item.vol;
      this.coinDetail.market_cap = item.market_cap;
    },

    // 获取列表
    getCurrencyList: function getCurrencyList() {
      var _this = this;

      this.isLoading = true;
      this.busy = true;
      __WEBPACK_IMPORTED_MODULE_0__lib_request__["a" /* default */].get(__WEBPACK_IMPORTED_MODULE_2__api_apiList__["b" /* COINS_LIST */], this.param).then(function (res) {
        if (res.statusCode === 200) {
          // this.list = res.data
          _this.list = _this.list.concat(res.data);
          _this.busy = false;
          _this.isLoading = false;
          if (_this.param.page >= 50) {
            _this.busy = true;
            _this.state = 2;
            _this.isLoading = true;
          }
        }
      }).catch(function () {
        _this.isLoading = false;
        _this.busy = true;
      });
    },
    loadMore: function loadMore() {
      this.param.page++;
      this.param.offset += this.param.limit;
      this.getCurrencyList();
    }
  }
});

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('scroll-view', {
    staticClass: "zl-coin-box",
    attrs: {
      "scroll-y": "",
      "upper-threshold": "50",
      "lower-threshold": "50",
      "enable-back-to-top": "true",
      "eventid": '1'
    },
    on: {
      "scrolltolower": _vm.loadMore,
      "scrolltoupper": _vm.getCurrencyList
    }
  }, [_c('div', _vm._l((_vm.list), function(item, ind) {
    return _c('div', {
      key: ind,
      staticClass: "zl-coin",
      class: {
        'night-line-color': _vm.isNightMode
      }
    }, [_c('ul', {
      staticClass: "zl-coin__simp",
      attrs: {
        "eventid": '0-' + ind
      },
      on: {
        "click": function($event) {
          _vm.switchInfo(item)
        }
      }
    }, [_c('li', {
      staticClass: "zl-coin__name",
      class: {
        'night-text': _vm.isNightMode
      }
    }, [_c('img', {
      attrs: {
        "src": item.icon_url,
        "alt": item.symbol
      }
    }), _vm._v("\n            " + _vm._s(item.symbol) + "\n          ")]), _vm._v(" "), _c('li', {
      staticClass: "zl-coin__price",
      class: {
        'night-text': _vm.isNightMode
      }
    }, [_vm._v(_vm._s(item.price))]), _vm._v(" "), _c('li', {
      staticClass: "zl-coin__gd"
    }, [(item.change > 0) ? _c('span', {
      staticClass: "zl-coin__gd--gorw"
    }, [_vm._v("+" + _vm._s(_vm._f("formatPoint")(item.change)) + "%")]) : (item.change < 0) ? _c('span', {
      staticClass: "zl-coin__gd--fall"
    }, [_vm._v(_vm._s(_vm._f("formatPoint")(item.change)) + "%")]) : _c('span', [_vm._v("+0.00%")])])], 1), _vm._v(" "), (_vm.isShowInfo && _vm.currentSymbol == item.symbol) ? _c('ul', {
      staticClass: "zl-coin__info",
      class: {
        'night-bg': _vm.isNightMode
      }
    }, [_c('li', {
      staticClass: "zl-coin__info--box",
      class: {
        'night-text': _vm.isNightMode
      }
    }, [_c('span', [_vm._v("流通量：")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.coinDetail.supply))])]), _vm._v(" "), _c('li', {
      staticClass: "zl-coin__info--box",
      class: {
        'night-text': _vm.isNightMode
      }
    }, [_c('span', [_vm._v("24小时成交额：")]), _vm._v(" "), _c('span', [_vm._v("¥ " + _vm._s(_vm.coinDetail.vol))])]), _vm._v(" "), _c('li', {
      staticClass: "zl-coin__info--box",
      class: {
        'night-text': _vm.isNightMode
      }
    }, [_c('span', [_vm._v("市值：")]), _vm._v(" "), _c('span', [_vm._v("¥ " + _vm._s(_vm.coinDetail.market_cap))])])], 1) : _vm._e()], 1)
  }))])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-60e78f4c", esExports)
  }
}

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Weather_vue__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1b2651c6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Weather_vue__ = __webpack_require__(123);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(121)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1b2651c6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Weather_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1b2651c6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Weather_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Weather.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Weather.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1b2651c6", Component.options)
  } else {
    hotAPI.reload("data-v-1b2651c6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 121:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  name: 'Weather',
  props: {
    weatherInfo: {
      type: Object,
      default: {},
      required: true
    }
  },
  data: function data() {
    return {
      weatherIcon: ''
    };
  },
  created: function created() {
    this.getWeatherIcon(this.weatherInfo.weather);
  },

  methods: {
    getWeatherIcon: function getWeatherIcon(weather) {
      if (weather.indexOf('晴') > -1) {
        this.weatherIcon = 'qing';
      } else if (weather.indexOf('阴') > -1) {
        this.weatherIcon = 'ying';
      } else if (weather.indexOf('雾') > -1) {
        this.weatherIcon = 'wu';
      } else if (weather.indexOf('雪') > -1) {
        this.weatherIcon = 'snow';
      } else if (weather.indexOf('雨') > -1) {
        this.weatherIcon = 'rain';
      } else if (weather.indexOf('云') > -1) {
        this.weatherIcon = 'cloud';
      } else {
        this.weatherIcon = 'unknow';
      }
    }
  }
});

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weather-box"
  }, [_c('div', {
    staticClass: "weather-left"
  }, [_c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.weatherIcon === 'qing'),
      expression: "weatherIcon === 'qing'"
    }],
    attrs: {
      "src": "../../static/img/weather/qingtian.svg"
    }
  }), _vm._v(" "), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.weatherIcon === 'ying'),
      expression: "weatherIcon === 'ying'"
    }],
    attrs: {
      "src": "../../static/img/weather/yintian.svg"
    }
  }), _vm._v(" "), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.weatherIcon === 'wu'),
      expression: "weatherIcon === 'wu'"
    }],
    attrs: {
      "src": "../../static/img/weather/shuiwutian.svg"
    }
  }), _vm._v(" "), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.weatherIcon === 'rain'),
      expression: "weatherIcon === 'rain'"
    }],
    attrs: {
      "src": "../../static/img/weather/yutian.svg"
    }
  }), _vm._v(" "), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.weatherIcon === 'snow'),
      expression: "weatherIcon === 'snow'"
    }],
    attrs: {
      "src": "../../static/img/weather/xuetian.svg"
    }
  }), _vm._v(" "), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.weatherIcon === 'cloud'),
      expression: "weatherIcon === 'cloud'"
    }],
    attrs: {
      "src": "../../static/img/weather/cloud.svg"
    }
  }), _vm._v(" "), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.weatherIcon === 'unknow'),
      expression: "weatherIcon === 'unknow'"
    }],
    attrs: {
      "src": "../../static/img/weather/unknow.svg"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "weather-right"
  }, [_c('div', {
    staticClass: "weather-address"
  }, [_c('img', {
    attrs: {
      "src": "../../static/img/weather/address.svg"
    }
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.weatherInfo.address))])]), _vm._v(" "), _c('div', {
    staticClass: "weather-temp-box"
  }, [_c('span', {
    staticClass: "weather-temp"
  }, [_vm._v(_vm._s(_vm.weatherInfo.temp))]), _vm._v(" "), _c('span', {
    staticClass: "weather-content"
  }, [_vm._v(_vm._s(_vm.weatherInfo.weather))])]), _vm._v(" "), _c('div', {
    staticClass: "weather-detail-box"
  }, [_c('span', {
    staticStyle: {
      "margin-right": "10px"
    }
  }, [_vm._v(_vm._s(_vm.weatherInfo.windDirection) + "风" + _vm._s(_vm.weatherInfo.windPower))]), _vm._v(" "), _c('span', [_vm._v("湿度" + _vm._s(_vm.weatherInfo.humidity))])])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1b2651c6", esExports)
  }
}

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "zl-app",
    class: _vm.isNightMode ? 'night' : ''
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.refreshLoading && _vm.isBtnCommit),
      expression: "refreshLoading && isBtnCommit"
    }],
    ref: "refreshTip",
    staticClass: "zl-refresh-tip"
  }, [_c('span', [_vm._v(_vm._s(_vm.refreshText))])]), _vm._v(" "), (_vm.weatherInfo && _vm.weatherInfo.cityCode) ? _c('Weather', {
    attrs: {
      "weatherInfo": _vm.weatherInfo,
      "mpcomid": '0'
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "swiper-tab",
    class: {
      'night-text': _vm.isNightMode,
      'night-line-color': _vm.isNightMode
    }
  }, [_c('div', {
    staticClass: "tab-list-box",
    class: {
      'tab-active': _vm.currentPage === 0
    },
    attrs: {
      "data-current-tab": "0",
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.switchPage(0)
      }
    }
  }, [_vm._v("\r\n        资讯\r\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "tab-list-box",
    class: _vm.currentPage === 1 ? 'tab-active' : '',
    attrs: {
      "data-current-tab": "1",
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.switchPage(1)
      }
    }
  }, [_vm._v("\r\n        行情\r\n      ")])]), _vm._v(" "), _c('swiper', {
    staticClass: "app",
    attrs: {
      "current": _vm.currentPage,
      "duration": 300,
      "eventid": '3'
    },
    on: {
      "change": _vm.changePage
    }
  }, [_c('swiper-item', {
    staticClass: "main",
    attrs: {
      "mpcomid": '2'
    }
  }, [(_vm.livesList.length > 0) ? _c('Live', {
    attrs: {
      "livesList": _vm.livesList,
      "eventid": '2',
      "mpcomid": '1'
    },
    on: {
      "handleLive": _vm.getLives
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('swiper-item', {
    attrs: {
      "mpcomid": '4'
    }
  }, [_c('Market', {
    attrs: {
      "mpcomid": '3'
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShowRefresh && _vm.currentPage === 0),
      expression: "isShowRefresh && currentPage === 0"
    }],
    staticClass: "zl-refresh",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.refreshLiveList
    }
  }, [_c('img', {
    attrs: {
      "src": "../../../static/img/fresh.svg",
      "alt": ""
    }
  })])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-86b97822", esExports)
  }
}

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__);


// import wx from 'wx'
// const baseUrl = 'https://api.jinse.com/'

// 请求参数 重构
var paramsSpliceUrl = function paramsSpliceUrl(url, params) {
  if (params) {
    var paramsArray = [];
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(params).forEach(function (key) {
      return paramsArray.push(key + '=' + params[key]);
    });
    if (url.search(/\?/) === -1) {
      url += '?' + paramsArray.join('&');
    } else {
      url += '&' + paramsArray.join('&');
    }
  }
  return url;
};

var wxApi = {
  // get
  get: function get(url, data) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      wx.showLoading({
        title: 'loading...',
        mask: true
      });
      url = paramsSpliceUrl(url, data);
      wx.request({
        url: '' + url,
        header: {
          'Content-Type': 'application/json'
        },
        method: 'GET',
        dataType: 'json',
        success: function success(res) {
          wx.hideLoading();
          resolve(res);
        },
        fail: function fail(err) {
          console.warn('err', err);
          wx.hideLoading();
          reject(err);
        },
        complete: function complete() {
          wx.hideLoading();
        }
      });
    });
  },

  // post
  post: function post(url, data) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      wx.showLoading({
        title: 'loading...',
        mask: true
      });
      wx.request({
        url: '' + url,
        data: data,
        header: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        dataType: 'json',
        success: function success(res) {
          resolve(res);
          wx.hideLoading();
        },
        fail: function fail(err) {
          console.warn('err', err);
          reject(err);
          wx.hideLoading();
        },
        complete: function complete() {
          wx.hideLoading();
        }
      });
    });
  }
};

/* harmony default export */ __webpack_exports__["a"] = (wxApi);

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BANNER_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MAIN_NEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LIVES_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return COINS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return POST_WEATHER; });
// banner图集
var BANNER_LIST = 'https://api.jinse.com/v4/ad/web/slideList';

// 新闻9点半
var MAIN_NEWS = 'https://api.jinse.com/v1/topic/by_tag_list';

// 快讯
var LIVES_LIST = 'https://api.jinse.com/v4/live/list';

/**
 * 获取币种列表
 * @param {Object} params 请求参数对象
 * @Author: zhoun
 * @Date: 2019-01-21 12:05:49
 */
var COINS_LIST = 'https://api.jinse.com/v3/coin';

/*
 * 获取当前城市天气
 */
var POST_WEATHER = 'https://www.mxnzp.com/api/weather/current';

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(96);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_86b97822_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(124);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(97)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-86b97822"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_86b97822_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-86b97822", Component.options)
  } else {
    hotAPI.reload("data-v-86b97822", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 97:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Live__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Market__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Weather__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_request__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_apiList__ = __webpack_require__(30);



var _this = this;

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
  name: 'Home',
  components: {
    Live: __WEBPACK_IMPORTED_MODULE_2__components_Live__["a" /* default */],
    Market: __WEBPACK_IMPORTED_MODULE_3__components_Market__["a" /* default */],
    Weather: __WEBPACK_IMPORTED_MODULE_4__components_Weather__["a" /* default */]
  },
  computed: {
    isShowRefresh: function isShowRefresh(_) {
      return __WEBPACK_IMPORTED_MODULE_5__store__["a" /* default */].getters.isShowRefresh;
    },
    isNightMode: function isNightMode(_) {
      return __WEBPACK_IMPORTED_MODULE_5__store__["a" /* default */].getters.isNightMode;
    }, // 夜间模式
    themeIndex: function themeIndex(_) {
      return __WEBPACK_IMPORTED_MODULE_5__store__["a" /* default */].getters.themeIndex;
    },
    userLocation: function userLocation(_) {
      return __WEBPACK_IMPORTED_MODULE_5__store__["a" /* default */].getters.userLocation;
    }
  },
  data: function data() {
    return {
      // 当前页
      currentPage: 0,
      tabs: ['快讯', '行情'],
      circular: true,
      refreshLoading: true,
      refreshText: '',
      timer: null,
      // 快讯列表
      livesList: [],
      isBtnCommit: false,
      weatherInfo: {}
    };
  },
  mounted: function mounted() {
    this.getLocation();
    // 获取快讯
    this.getLives();
    this.setNavigationBarStyle();
    // 当前页可被转发
    wx.showShareMenu({
      withShareTicket: true
    });
  },

  watch: {
    'isNightMode': function isNightMode(newVal, oldVal) {
      if (newVal) {
        // 顶部导航夜间模式
        // 2019-11-23 15:33:12
        wx.setNavigationBarColor({
          frontColor: '#ffffff',
          backgroundColor: '#232323'
        });
      } else {
        // 顶部导航非夜间
        wx.setNavigationBarColor({
          frontColor: '#000000',
          backgroundColor: '#ffffff'
        });
      }
    },
    'themeIndex': function themeIndex(newState) {
      if (newState) {
        _this.setTheme(newState);
      }
    }
  },
  methods: {
    setNavigationBarStyle: function setNavigationBarStyle() {
      var that = this;
      this.timer = setTimeout(function () {
        if (that.isNightMode) {
          // 顶部导航夜间模式
          wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: '#232323'
          });
        } else {
          // 非夜间模式可以先设置主题皮肤
          that.setTheme(that.themeIndex);
        }
      }, 0);
    },
    getLocation: function getLocation() {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_5__store__["a" /* default */].dispatch('getLocation').then(function (data) {
        _this2.postWeather(data);
      });
    },

    // 切换tab选项
    switchPage: function switchPage(page) {
      if (this.currentPage === page) return;
      this.currentPage = page;
    },
    getLives: function getLives() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var that, _ref, data;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                that = _this3;

                _this3.refreshText = '正在刷新快讯列表';
                _context.next = 5;
                return __WEBPACK_IMPORTED_MODULE_6__lib_request__["a" /* default */].get(__WEBPACK_IMPORTED_MODULE_7__api_apiList__["c" /* LIVES_LIST */], {
                  reading: false,
                  limit: 66,
                  flag: 'down'
                });

              case 5:
                _ref = _context.sent;
                data = _ref.data;

                if (data) {
                  _this3.refreshText = '快讯刷新完成';
                }
                // this.livesList.push(data.data.list)
                data.list.forEach(function (list) {
                  _this3.livesList.push(list);
                });
                clearTimeout(_this3.timer);
                _this3.timer = setTimeout(function () {
                  that.refreshLoading = false;
                  _this3.isBtnCommit = false;
                }, 1000);
                _context.next = 19;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context['catch'](0);

                _this3.livesList = [];
                _this3.refreshLoading = false;
                _this3.refreshText = '网络错误';
                _this3.isBtnCommit = false;

              case 19:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this3, [[0, 13]]);
      }))();
    },

    // 分享当前页
    onShareAppMessage: function onShareAppMessage() {
      return {
        title: '巴拉巴拉1',
        imageUrl: '../../../static/img/avatar.png',
        success: function success(res) {},
        fail: function fail() {}
      };
    },
    changePage: function changePage(e) {
      this.currentPage = e.target.current;
    },

    // click refresh button
    refreshLiveList: function refreshLiveList() {
      // 刷新按钮
      this.livesList = [];
      this.isBtnCommit = true;
      this.refreshLoading = true;
      this.getLives();
    },
    setTheme: function setTheme(ind) {
      /*
        这里直接使用store.commit('pickerThemeChange', ind)并不会生效
        可能是因为小程序有限制，禁止了程序的自动触发改变主题皮肤
        想不到其他的原因了
        wxsb！！！😡
      */
      this.timer = setTimeout(function () {
        __WEBPACK_IMPORTED_MODULE_5__store__["a" /* default */].commit('pickerThemeChange', ind);
      }, 0);
    },
    postWeather: function postWeather(info) {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var city, _ref2, data;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                city = info.city;
                _context2.next = 3;
                return __WEBPACK_IMPORTED_MODULE_6__lib_request__["a" /* default */].get(__WEBPACK_IMPORTED_MODULE_7__api_apiList__["e" /* POST_WEATHER */] + '/' + city);

              case 3:
                _ref2 = _context2.sent;
                data = _ref2.data;

                _this4.weatherInfo = data.data;

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this4);
      }))();
    }
  }
});

/***/ })

},[95]);
//# sourceMappingURL=main.js.map