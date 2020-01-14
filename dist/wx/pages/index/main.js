require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonpMpvue([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__ = __webpack_require__(33);
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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BANNER_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return MAIN_NEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LIVES_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return COINS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return POST_WEATHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return HISTORY_TODAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return IN_THEATERS; });
// banner图集
var BANNER_LIST = 'https://api.jinse.com/v4/ad/web/slideList';

// 新闻9点半
var MAIN_NEWS = 'https://api.jinse.com/v1/topic/by_tag_list';

// 快讯
var LIVES_LIST = 'https://api.jinse.com/v4/live/list';

/**
 * 获取币种列表
 * @param {Object} params 请求参数对象
 * @Author: @Cid
 * @Date: 2019-01-21 12:05:49
 */
var COINS_LIST = 'https://api.jinse.com/v3/coin';

/*
 * 获取当前城市天气
 */
var POST_WEATHER = 'https://www.mxnzp.com/api/weather/current';

/**
 * 历史上的今天
 */
var HISTORY_TODAY = 'https://www.mxnzp.com/api/history/today';

/**
 * 正在上映的电影列表
 */
var IN_THEATERS = 'https://douban.uieee.com/v2/movie/in_theaters';

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(105);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_86b97822_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(142);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(106)
}
var normalizeComponent = __webpack_require__(2)
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
/* 106 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_index_Movies__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Live__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Market__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Weather__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_HistorysToday__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_request__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__api_apiList__ = __webpack_require__(13);



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
//









/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Home',
  components: {
    Movies: __WEBPACK_IMPORTED_MODULE_2__pages_index_Movies__["a" /* default */],
    Live: __WEBPACK_IMPORTED_MODULE_3__components_Live__["a" /* default */],
    Market: __WEBPACK_IMPORTED_MODULE_4__components_Market__["a" /* default */],
    Weather: __WEBPACK_IMPORTED_MODULE_5__components_Weather__["a" /* default */],
    HistorysToday: __WEBPACK_IMPORTED_MODULE_6__components_HistorysToday__["a" /* default */]
  },
  computed: {
    isShowRefresh: function isShowRefresh(_) {
      return __WEBPACK_IMPORTED_MODULE_7__store__["a" /* default */].getters.isShowRefresh;
    },
    isNightMode: function isNightMode(_) {
      return __WEBPACK_IMPORTED_MODULE_7__store__["a" /* default */].getters.isNightMode;
    }, // 夜间模式
    themeIndex: function themeIndex(_) {
      return __WEBPACK_IMPORTED_MODULE_7__store__["a" /* default */].getters.themeIndex;
    },
    userLocation: function userLocation(_) {
      return __WEBPACK_IMPORTED_MODULE_7__store__["a" /* default */].getters.userLocation;
    }
  },
  data: function data() {
    return {
      // 当前页
      currentPage: 0,
      tabs: ['快讯', '行情'],
      secondTabs: ['电影', '资讯', '行情', '冷知识'],
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

      __WEBPACK_IMPORTED_MODULE_7__store__["a" /* default */].dispatch('getLocation').then(function (data) {
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

                _this3.refreshText = '正在刷新当前页面..';
                _context.next = 5;
                return __WEBPACK_IMPORTED_MODULE_8__lib_request__["a" /* default */].get(__WEBPACK_IMPORTED_MODULE_9__api_apiList__["e" /* LIVES_LIST */], {
                  reading: false,
                  limit: 66,
                  flag: 'down'
                });

              case 5:
                _ref = _context.sent;
                data = _ref.data;

                if (data) {
                  _this3.refreshText = '刷新完成: )';
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
                _this3.refreshText = '网络错误: (';
                _this3.isBtnCommit = false;

              case 19:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this3, [[0, 13]]);
      }))();
    },
    changePage: function changePage(e) {
      this.currentPage = e.target.current;
    },

    // click refresh button
    refreshPage: function refreshPage() {
      // 刷新按钮
      this.livesList = [];
      this.isBtnCommit = true;
      this.refreshLoading = true;
      this.getLives();

      this.weatherInfo = {};
      this.getLocation();
    },
    setTheme: function setTheme(ind) {
      /*
        这里直接使用store.commit('pickerThemeChange', ind)并不会生效
        可能是因为小程序有限制，禁止了程序的自动触发改变主题皮肤
        想不到其他的原因了
        wxsb！！！😡
      */
      this.timer = setTimeout(function () {
        __WEBPACK_IMPORTED_MODULE_7__store__["a" /* default */].commit('pickerThemeChange', ind);
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
                return __WEBPACK_IMPORTED_MODULE_8__lib_request__["a" /* default */].get(__WEBPACK_IMPORTED_MODULE_9__api_apiList__["g" /* POST_WEATHER */] + '/' + city);

              case 3:
                _ref2 = _context2.sent;
                data = _ref2.data;

                if (data) {
                  _this4.weatherInfo = data.data;
                }

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this4);
      }))();
    }
  }
  // 分享当前页
  // onShareAppMessage () {
  //   return {
  //     title: '分享给你一个好玩的小程序😄',
  //     success (res) {},
  //     fail () {}
  //   }
  // }
});

/***/ }),
/* 108 */,
/* 109 */,
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Movies_vue__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8ea228d4_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Movies_vue__ = __webpack_require__(116);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(111)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Movies_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8ea228d4_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Movies_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/Movies.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Movies.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8ea228d4", Component.options)
  } else {
    hotAPI.reload("data-v-8ea228d4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 111 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_request__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_apiList__ = __webpack_require__(13);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Movies',
  data: function data() {
    return {
      movieList: []
    };
  },
  created: function created() {
    this.getInTheaters();
  },

  methods: {
    getInTheaters: function getInTheaters() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _ref, data, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, movieItem;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_3__lib_request__["a" /* default */].post(__WEBPACK_IMPORTED_MODULE_4__api_apiList__["d" /* IN_THEATERS */], {
                  apikey: '0b2bdeda43b5688921839c8ecb20399b'
                });

              case 3:
                _ref = _context.sent;
                data = _ref.data;

                if (!(data && data.count > 0)) {
                  _context.next = 26;
                  break;
                }

                _this.movieList = data.subjects.slice(0, 6);
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 10;
                for (_iterator = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(_this.movieList); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  movieItem = _step.value;

                  // star总分50， 这里以5为最大评分
                  movieItem.activeStar = Math.floor(movieItem.rating.stars / 10);
                  movieItem.inactiveStar = Math.floor(5 - movieItem.rating.stars / 10);
                  movieItem.halfActiveStar = movieItem.rating.stars % 10 > 0;
                }
                _context.next = 18;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context['catch'](10);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 18:
                _context.prev = 18;
                _context.prev = 19;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 21:
                _context.prev = 21;

                if (!_didIteratorError) {
                  _context.next = 24;
                  break;
                }

                throw _iteratorError;

              case 24:
                return _context.finish(21);

              case 25:
                return _context.finish(18);

              case 26:
                _context.next = 32;
                break;

              case 28:
                _context.prev = 28;
                _context.t1 = _context['catch'](0);

                console.log('err', _context.t1);
                _this.movieList = [];

              case 32:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 28], [10, 14, 18, 26], [19,, 21, 25]]);
      }))();
    }
  }
});

/***/ }),
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('scroll-view', {
    staticClass: "zl-movie-box",
    attrs: {
      "scroll-y": "",
      "lower-threshold": "50",
      "enable-back-to-top": "true"
    }
  }, [_c('main', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.movieList.length > 0),
      expression: "movieList.length > 0"
    }],
    staticClass: "zl-movie"
  }, [_c('p', {
    staticClass: "zl-movie__title"
  }, [_vm._v("影院热映")]), _vm._v(" "), _c('ul', {
    staticClass: "zl-movie__list"
  }, [_vm._l((_vm.movieList), function(item, index) {
    return _c('li', {
      key: index,
      staticClass: "zl-movie__item"
    }, [_c('img', {
      staticClass: "zl-movie__item--thumb",
      attrs: {
        "src": item.images.small
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "zl-movie__item--title"
    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('p', [_vm._l((item.activeStar), function(star, ind) {
      return _c('img', {
        key: ind,
        staticClass: "zl-movie__item--star",
        attrs: {
          "src": "../../../static/img/movie/star_active.svg"
        }
      })
    }), _vm._v(" "), _c('img', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.halfActiveStar),
        expression: "item.halfActiveStar"
      }],
      staticClass: "zl-movie__item--star",
      attrs: {
        "src": "../../../static/img/movie/star_half.svg"
      }
    }), _vm._v(" "), _vm._l((item.inactiveStar), function(star, ind) {
      return _c('img', {
        key: ind,
        staticClass: "zl-movie__item--star",
        attrs: {
          "src": "../../../static/img/movie/star_inactive.svg"
        }
      })
    }), _vm._v(" "), _c('span', {
      staticClass: "zl-movie__item--score"
    }, [_vm._v(_vm._s(item.rating.average))])], 2)], 1)
  }), _vm._v(" "), _c('p', {
    staticClass: "zl-movie__clear"
  })], 2)], 1)], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8ea228d4", esExports)
  }
}

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Live_vue__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3612b2ec_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Live_vue__ = __webpack_require__(129);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(118)
}
var normalizeComponent = __webpack_require__(2)
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
/* 118 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_MoringNews__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LiveItem__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_request__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_apiList__ = __webpack_require__(13);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

      __WEBPACK_IMPORTED_MODULE_2__lib_request__["a" /* default */].get(__WEBPACK_IMPORTED_MODULE_3__api_apiList__["f" /* MAIN_NEWS */], {
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
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_MoringNews_vue__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9d7bbd3a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_MoringNews_vue__ = __webpack_require__(123);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(121)
}
var normalizeComponent = __webpack_require__(2)
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
/* 121 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(4);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* 123 */
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
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_LiveItem_vue__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_14f97b3d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_LiveItem_vue__ = __webpack_require__(128);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(125)
}
var normalizeComponent = __webpack_require__(2)
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
/* 125 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_utils_js__ = __webpack_require__(127);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* 127 */
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
/* 128 */
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
/* 129 */
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
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Market_vue__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_60e78f4c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Market_vue__ = __webpack_require__(133);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(131)
}
var normalizeComponent = __webpack_require__(2)
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
/* 131 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_request__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_apiList__ = __webpack_require__(13);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
 * @Author: @Cid
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
  created: function created() {
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
/* 133 */
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
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Weather_vue__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1b2651c6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Weather_vue__ = __webpack_require__(137);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(135)
}
var normalizeComponent = __webpack_require__(2)
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
/* 135 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(4);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: {
    isNightMode: function isNightMode(_) {
      return __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].getters.isNightMode;
    } // 夜间模式
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
/* 137 */
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
  }), _vm._v(" "), _c('span', {
    class: {
      'night-text': _vm.isNightMode
    }
  }, [_vm._v(_vm._s(_vm.weatherInfo.address))])]), _vm._v(" "), _c('div', {
    staticClass: "weather-temp-box",
    class: {
      'night-text': _vm.isNightMode
    }
  }, [_c('span', {
    staticClass: "weather-temp"
  }, [_vm._v(_vm._s(_vm.weatherInfo.temp))]), _vm._v(" "), _c('span', {
    staticClass: "weather-content"
  }, [_vm._v(_vm._s(_vm.weatherInfo.weather))])]), _vm._v(" "), _c('div', {
    staticClass: "weather-detail-box",
    class: {
      'night-text': _vm.isNightMode
    }
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
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_HistorysToday_vue__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9c3db918_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_HistorysToday_vue__ = __webpack_require__(141);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(139)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9c3db918"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_HistorysToday_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9c3db918_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_HistorysToday_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/HistorysToday.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] HistorysToday.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9c3db918", Component.options)
  } else {
    hotAPI.reload("data-v-9c3db918", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 139 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_request__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_apiList__ = __webpack_require__(13);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * @Description: 历史上的今天
 * @Author: Cid
 */



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'HistorysToday',
  computed: {
    fontsize: function fontsize(_) {
      return Number(__WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */].getters.textIndex);
    },
    isNightMode: function isNightMode(_) {
      return __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */].getters.isNightMode;
    } // 夜间模式
  },
  data: function data() {
    return {
      historyStoryList: [],
      defaultThumb: 'this.src=../../static/img/history/fail.png',
      errText: '',
      isShowErrorBox: false
    };
  },
  created: function created() {
    this.getHistoryStoryList();
  },

  methods: {
    getHistoryStoryList: function getHistoryStoryList() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _ref, data;

        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.errText = ' ';
                _context.prev = 1;
                _context.next = 4;
                return __WEBPACK_IMPORTED_MODULE_4__lib_request__["a" /* default */].get(__WEBPACK_IMPORTED_MODULE_5__api_apiList__["c" /* HISTORY_TODAY */], {
                  type: 1
                });

              case 4:
                _ref = _context.sent;
                data = _ref.data;


                if (data.code === 1) {
                  _this.historyStoryList = data.data;
                  _this.isShowErrorBox = false;
                }
                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](1);

                _this.isShowErrorBox = true;
                _this.errText = _context.t0.errMsg;

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[1, 9]]);
      }))();
    },
    navigateToDetail: function navigateToDetail(data, ind) {
      __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */].commit('setDetailData', data);
      // url相对pages页面来设置
      wx.navigateTo({
        url: '../detail/main?story=' + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(data)
      });
    }
  }
});

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroll-view', {
    staticClass: "zl-history-box",
    attrs: {
      "scroll-y": "",
      "upper-threshold": "50",
      "lower-threshold": "50",
      "enable-back-to-top": "true"
    }
  }, [(!_vm.isShowErrorBox) ? _c('ul', {
    staticClass: "zl-history"
  }, _vm._l((_vm.historyStoryList), function(story, ind) {
    return _c('li', {
      key: ind,
      staticClass: "zl-history__item",
      class: {
        'night-border': _vm.isNightMode
      },
      attrs: {
        "eventid": '0-' + ind
      },
      on: {
        "click": function($event) {
          _vm.navigateToDetail(story, ind)
        }
      }
    }, [_c('ul', {
      staticClass: "zl-history__item--info"
    }, [_c('li', {
      staticClass: "zl-history__item--title",
      class: {
        'night-text': _vm.isNightMode
      }
    }, [_vm._v(_vm._s(story.title))]), _vm._v(" "), _c('li', {
      staticClass: "zl-history__item--publish"
    }, [_c('span', {
      staticClass: "zl-history__item--time",
      class: {
        'night-text': _vm.isNightMode
      }
    }, [_vm._v(_vm._s(story.year) + "." + _vm._s(story.month < 10 ? '0' + story.month : story.month) + "." + _vm._s(story.day < 10 ? '0' + story.day : story.day))]), _vm._v(" "), _c('img', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (!_vm.isNightMode),
        expression: "!isNightMode"
      }],
      staticClass: "zl-history__tag",
      attrs: {
        "src": "../../static/img/history/tag.svg"
      }
    }), _vm._v(" "), _c('img', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.isNightMode),
        expression: "isNightMode"
      }],
      staticClass: "zl-history__tag",
      attrs: {
        "src": "../../static/img/history/tag-night.svg"
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "zl-history__item--tag",
      class: {
        'night-text': _vm.isNightMode
      }
    }, [_vm._v("历史上的今天")])])], 1), _vm._v(" "), _c('div', {
      staticClass: "zl-history__item--thumb"
    }, [_c('img', {
      attrs: {
        "src": story.picUrl ? story.picUrl : '../../static/img/history/fail.png',
        "alt": "",
        "onerror": _vm.defaultThumb
      }
    })])], 1)
  })) : _c('div', {
    staticClass: "zl-history__error",
    class: {
      'night-text': _vm.isNightMode
    }
  }, [_vm._v("\n    " + _vm._s(_vm.errText) + "\n    "), _c('div', [_c('button', {
    staticClass: "zl-history__error--try",
    class: {
      'night-text': _vm.isNightMode
    },
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.getHistoryStoryList
    }
  }, [_vm._v("刷新重试")])], 1)])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9c3db918", esExports)
  }
}

/***/ }),
/* 142 */
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
  }, _vm._l((_vm.secondTabs), function(item, ind) {
    return _c('div', {
      key: ind,
      staticClass: "tab-list-box",
      class: {
        'tab-active': _vm.currentPage === ind
      },
      attrs: {
        "data-current-tab": ind,
        "eventid": '0-' + ind
      },
      on: {
        "click": function($event) {
          _vm.switchPage(ind)
        }
      }
    }, [_vm._v("\r\n        " + _vm._s(item) + "\r\n      ")])
  })), _vm._v(" "), _c('Swiper', {
    staticClass: "app",
    attrs: {
      "current": _vm.currentPage,
      "duration": 300,
      "eventid": '2',
      "mpcomid": '9'
    },
    on: {
      "change": _vm.changePage
    }
  }, [_c('swiper-item', {
    attrs: {
      "mpcomid": '2'
    }
  }, [_c('Movies', {
    attrs: {
      "mpcomid": '1'
    }
  })], 1), _vm._v(" "), _c('swiper-item', {
    staticClass: "main",
    attrs: {
      "mpcomid": '4'
    }
  }, [(_vm.livesList.length > 0) ? _c('Live', {
    attrs: {
      "livesList": _vm.livesList,
      "eventid": '1',
      "mpcomid": '3'
    },
    on: {
      "handleLive": _vm.getLives
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('swiper-item', {
    attrs: {
      "mpcomid": '6'
    }
  }, [_c('Market', {
    attrs: {
      "mpcomid": '5'
    }
  })], 1), _vm._v(" "), _c('swiper-item', {
    attrs: {
      "mpcomid": '8'
    }
  }, [_c('HistorysToday', {
    attrs: {
      "mpcomid": '7'
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShowRefresh && _vm.currentPage === 1),
      expression: "isShowRefresh && currentPage === 1"
    }],
    staticClass: "zl-refresh",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.refreshPage
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

/***/ })
],[104]);
//# sourceMappingURL=main.js.map