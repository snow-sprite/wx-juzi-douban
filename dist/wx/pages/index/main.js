require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonpMpvue([1],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(103);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_86b97822_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(144);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(104)
}
var normalizeComponent = __webpack_require__(0)
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

/***/ 104:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_index_Movies__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Market__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Weather__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_HistorysToday__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_request__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api_apiList__ = __webpack_require__(13);



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


// import Live from '@/components/Live'






/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Home',
  components: {
    Movies: __WEBPACK_IMPORTED_MODULE_2__pages_index_Movies__["a" /* default */],
    // Live,
    Market: __WEBPACK_IMPORTED_MODULE_3__components_Market__["a" /* default */],
    Weather: __WEBPACK_IMPORTED_MODULE_4__components_Weather__["a" /* default */],
    HistorysToday: __WEBPACK_IMPORTED_MODULE_5__components_HistorysToday__["a" /* default */]
  },
  computed: {
    isShowRefresh: function isShowRefresh(_) {
      return __WEBPACK_IMPORTED_MODULE_6__store__["a" /* default */].getters.isShowRefresh;
    },
    isNightMode: function isNightMode(_) {
      return __WEBPACK_IMPORTED_MODULE_6__store__["a" /* default */].getters.isNightMode;
    }, // 夜间模式
    themeIndex: function themeIndex(_) {
      return __WEBPACK_IMPORTED_MODULE_6__store__["a" /* default */].getters.themeIndex;
    },
    userLocation: function userLocation(_) {
      return __WEBPACK_IMPORTED_MODULE_6__store__["a" /* default */].getters.userLocation;
    }
  },
  data: function data() {
    return {
      // 当前页
      currentPage: 0,
      tabs: ['快讯', '行情'],
      secondTabs: ['电影',
      // '资讯',
      '行情', '冷知识'],
      circular: true,
      refreshLoading: true,
      refreshText: '',
      timer: null,
      // 快讯列表
      // livesList: [],
      isBtnCommit: false,
      weatherInfo: {}
    };
  },
  mounted: function mounted() {
    this.getLocation();
    // 获取快讯
    // this.getLives()
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

      __WEBPACK_IMPORTED_MODULE_6__store__["a" /* default */].dispatch('getLocation').then(function (data) {
        _this2.postWeather(data);
      });
    },

    // 切换tab选项
    switchPage: function switchPage(page) {
      if (this.currentPage === page) return;
      this.currentPage = page;
    },

    // async getLives () {
    //   try {
    //     let that = this
    //     this.refreshText = '正在刷新当前页面..'
    //     let { data } = await wxApi.get(LIVES_LIST, {
    //       reading: false,
    //       limit: 66,
    //       flag: 'down'
    //     })
    //     if (data) {
    //       this.refreshText = '刷新完成: )'
    //     }
    //     // this.livesList.push(data.data.list)
    //     data.list.forEach(list => {
    //       this.livesList.push(list)
    //     })
    //     clearTimeout(this.timer)
    //     this.timer = setTimeout(() => {
    //       that.refreshLoading = false
    //       this.isBtnCommit = false
    //     }, 1000)
    //   } catch (e) {
    //     this.livesList = []
    //     this.refreshLoading = false
    //     this.refreshText = '网络错误: ('
    //     this.isBtnCommit = false
    //   }
    // },
    changePage: function changePage(e) {
      this.currentPage = e.target.current;
    },

    // click refresh button
    refreshPage: function refreshPage() {
      // 刷新按钮
      // this.livesList = []
      this.isBtnCommit = true;
      this.refreshLoading = true;
      // this.getLives()

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
        __WEBPACK_IMPORTED_MODULE_6__store__["a" /* default */].commit('pickerThemeChange', ind);
      }, 0);
    },
    postWeather: function postWeather(info) {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var city, _ref, data;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                city = info.city;
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_7__lib_request__["a" /* default */].get(__WEBPACK_IMPORTED_MODULE_8__api_apiList__["f" /* POST_WEATHER */] + '/' + city);

              case 3:
                _ref = _context.sent;
                data = _ref.data;

                if (data) {
                  _this3.weatherInfo = data.data;
                }

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this3);
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

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Movies_vue__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8ea228d4_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Movies_vue__ = __webpack_require__(118);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(109)
}
var normalizeComponent = __webpack_require__(0)
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

/***/ 109:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_request__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_apiList__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Movie__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store__ = __webpack_require__(2);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    Movie: __WEBPACK_IMPORTED_MODULE_6__components_Movie__["a" /* default */]
  },
  computed: {
    isNightMode: function isNightMode(_) {
      return __WEBPACK_IMPORTED_MODULE_7__store__["a" /* default */].getters.isNightMode;
    } // 夜间模式
  },
  data: function data() {
    return {
      inTheaters: [],
      comingSoon: [],
      topList: [],
      northTopData: {
        date: '',
        subjects: []
      }
    };
  },
  created: function created() {
    this.getMovies(__WEBPACK_IMPORTED_MODULE_5__api_apiList__["d" /* IN_THEATERS */], 'in_theaters');
    this.getMovies(__WEBPACK_IMPORTED_MODULE_5__api_apiList__["b" /* COMMING_SOON */], 'coming_soon');
    this.getMovies(__WEBPACK_IMPORTED_MODULE_5__api_apiList__["g" /* TOP250 */], 'top250');
    this.getNorthTopList();
  },

  methods: {
    getMovies: function getMovies(uri, key) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _ref, data, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, movieItem;

        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_4__lib_request__["a" /* default */].post(uri, {
                  start: 0,
                  count: 6,
                  apikey: '0b2bdeda43b5688921839c8ecb20399b'
                });

              case 3:
                _ref = _context.sent;
                data = _ref.data;

                if (!(data && data.count > 0)) {
                  _context.next = 26;
                  break;
                }

                // data.subjects = data.subjects.slice(0, 6)
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 9;
                for (_iterator = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator___default()(data.subjects); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  movieItem = _step.value;

                  // star总分50， 这里以5为最大评分
                  movieItem.activeStar = Math.floor(movieItem.rating.stars / 10);
                  movieItem.inactiveStar = Math.floor(5 - movieItem.rating.stars / 10);
                  movieItem.halfActiveStar = movieItem.rating.stars % 10 > 0;
                }
                _context.next = 17;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context['catch'](9);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 17:
                _context.prev = 17;
                _context.prev = 18;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 20:
                _context.prev = 20;

                if (!_didIteratorError) {
                  _context.next = 23;
                  break;
                }

                throw _iteratorError;

              case 23:
                return _context.finish(20);

              case 24:
                return _context.finish(17);

              case 25:
                if (data.title === '正在上映的电影-北京') {
                  _this.inTheaters = data.subjects;
                } else if (data.title === '即将上映的电影') {
                  _this.comingSoon = data.subjects;
                } else if (data.title === '豆瓣电影Top250') {
                  _this.topList = data.subjects;
                }

              case 26:
                _context.next = 32;
                break;

              case 28:
                _context.prev = 28;
                _context.t1 = _context['catch'](0);

                console.log('err', _context.t1);
                _this.hotMovieList = [];

              case 32:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 28], [9, 13, 17, 25], [18,, 20, 24]]);
      }))();
    },
    getNorthTopList: function getNorthTopList() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var _ref2, data, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, movieItem;

        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return __WEBPACK_IMPORTED_MODULE_4__lib_request__["a" /* default */].post(__WEBPACK_IMPORTED_MODULE_5__api_apiList__["e" /* NORTHTOP */], {
                  apikey: '0b2bdeda43b5688921839c8ecb20399b'
                });

              case 3:
                _ref2 = _context2.sent;
                data = _ref2.data;

                data.subjects = data.subjects.slice(0, 6);
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context2.prev = 9;
                for (_iterator2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator___default()(data.subjects); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  movieItem = _step2.value;

                  // star总分50， 这里以5为最大评分
                  movieItem.subject.activeStar = Math.floor(movieItem.subject.rating.stars / 10);
                  movieItem.subject.inactiveStar = Math.floor(5 - movieItem.subject.rating.stars / 10);
                  movieItem.subject.halfActiveStar = movieItem.subject.rating.stars % 10 > 0;
                }
                _context2.next = 17;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2['catch'](9);
                _didIteratorError2 = true;
                _iteratorError2 = _context2.t0;

              case 17:
                _context2.prev = 17;
                _context2.prev = 18;

                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }

              case 20:
                _context2.prev = 20;

                if (!_didIteratorError2) {
                  _context2.next = 23;
                  break;
                }

                throw _iteratorError2;

              case 23:
                return _context2.finish(20);

              case 24:
                return _context2.finish(17);

              case 25:
                __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(_this2.northTopData).forEach(function (key) {
                  _this2.northTopData[key] = data[key];
                });
                _context2.next = 33;
                break;

              case 28:
                _context2.prev = 28;
                _context2.t1 = _context2['catch'](0);

                console.log(_context2.t1);
                _this2.northTopData.date = '';
                _this2.northTopData.subjects = [];

              case 33:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[0, 28], [9, 13, 17, 25], [18,, 20, 24]]);
      }))();
    }
  }
});

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Movie_vue__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_71b93cfc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Movie_vue__ = __webpack_require__(117);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(115)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Movie_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_71b93cfc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Movie_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Movie.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Movie.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-71b93cfc", Component.options)
  } else {
    hotAPI.reload("data-v-71b93cfc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 115:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Movie',
  props: {
    movie: {
      type: Array,
      default: [],
      required: true
    },
    northUs: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  computed: {
    isNightMode: function isNightMode(_) {
      return __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].getters.isNightMode;
    } // 夜间模式
  }
});

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(!_vm.northUs) ? _c('ul', {
    staticClass: "zl-movie__list"
  }, [_vm._l((_vm.movie), function(item, ind) {
    return _c('li', {
      key: ind,
      staticClass: "zl-movie__item"
    }, [_c('img', {
      staticClass: "zl-movie__item--thumb",
      attrs: {
        "src": item.images.small
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "zl-movie__item--title",
      class: {
        'night-text': _vm.isNightMode
      }
    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('p', [_vm._l((item.activeStar), function(star, i) {
      return _c('img', {
        key: i,
        staticClass: "zl-movie__item--star",
        attrs: {
          "src": "../../static/img/movie/star_active.svg"
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
        "src": "../../static/img/movie/star_half.svg"
      }
    }), _vm._v(" "), _vm._l((item.inactiveStar), function(star, i) {
      return _c('img', {
        key: i,
        staticClass: "zl-movie__item--star",
        attrs: {
          "src": "../../static/img/movie/star_inactive.svg"
        }
      })
    }), _vm._v(" "), _c('span', {
      staticClass: "zl-movie__item--score",
      class: {
        'night-text': _vm.isNightMode
      }
    }, [_vm._v(_vm._s(item.rating.average))])], 2)], 1)
  }), _vm._v(" "), _c('p', {
    staticClass: "zl-movie__clear"
  })], 2) : _c('ul', {
    staticClass: "zl-movie__list"
  }, [_vm._l((_vm.movie), function(item, ind) {
    return _c('li', {
      key: ind,
      staticClass: "zl-movie__item"
    }, [_c('img', {
      staticClass: "zl-movie__item--thumb",
      attrs: {
        "src": item.subject.images.small
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "zl-movie__item--title",
      class: {
        'night-text': _vm.isNightMode
      }
    }, [_vm._v(_vm._s(item.subject.title))]), _vm._v(" "), _c('p', [_vm._l((item.subject.activeStar), function(star, i) {
      return _c('img', {
        key: i,
        staticClass: "zl-movie__item--star",
        attrs: {
          "src": "../../static/img/movie/star_active.svg"
        }
      })
    }), _vm._v(" "), _c('img', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.subject.halfActiveStar),
        expression: "item.subject.halfActiveStar"
      }],
      staticClass: "zl-movie__item--star",
      attrs: {
        "src": "../../static/img/movie/star_half.svg"
      }
    }), _vm._v(" "), _vm._l((item.subject.inactiveStar), function(star, i) {
      return _c('img', {
        key: i,
        staticClass: "zl-movie__item--star",
        attrs: {
          "src": "../../static/img/movie/star_inactive.svg"
        }
      })
    }), _vm._v(" "), _c('span', {
      staticClass: "zl-movie__item--score",
      class: {
        'night-text': _vm.isNightMode
      }
    }, [_vm._v(_vm._s(item.subject.rating.average))])], 2)], 1)
  }), _vm._v(" "), _c('p', {
    staticClass: "zl-movie__clear"
  })], 2)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-71b93cfc", esExports)
  }
}

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('scroll-view', {
    staticClass: "zl-movie-box",
    class: {
      'night-bg': _vm.isNightMode
    },
    attrs: {
      "scroll-y": "",
      "lower-threshold": "50",
      "enable-back-to-top": "true"
    }
  }, [_c('main', {
    staticClass: "zl-movie"
  }, [_c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.inTheaters.length > 0),
      expression: "inTheaters.length > 0"
    }],
    staticClass: "zl-movie__title",
    class: {
      'night-text': _vm.isNightMode
    }
  }, [_vm._v("影院热映")]), _vm._v(" "), _c('Movie', {
    attrs: {
      "movie": _vm.inTheaters,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.comingSoon.length > 0),
      expression: "comingSoon.length > 0"
    }],
    staticClass: "zl-movie__title",
    class: {
      'night-text': _vm.isNightMode
    }
  }, [_vm._v("即将上映")]), _vm._v(" "), _c('Movie', {
    attrs: {
      "movie": _vm.comingSoon,
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.topList.length > 0),
      expression: "topList.length > 0"
    }],
    staticClass: "zl-movie__title",
    class: {
      'night-text': _vm.isNightMode
    }
  }, [_vm._v("Top250")]), _vm._v(" "), _c('Movie', {
    attrs: {
      "movie": _vm.topList,
      "mpcomid": '2'
    }
  }), _vm._v(" "), _c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.topList.length > 0),
      expression: "topList.length > 0"
    }],
    staticClass: "zl-movie__title",
    class: {
      'night-text': _vm.isNightMode
    }
  }, [_vm._v("\n        北美票房榜"), _c('span', {
    staticClass: "zl-movie__title--time"
  }, [_vm._v("（" + _vm._s(_vm.northTopData && _vm.northTopData.date) + "）")])]), _vm._v(" "), _c('Movie', {
    attrs: {
      "movie": _vm.northTopData.subjects,
      "northUs": true,
      "mpcomid": '3'
    }
  })], 1)], 1)], 1)
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

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__ = __webpack_require__(14);
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

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BANNER_LIST */
/* unused harmony export MAIN_NEWS */
/* unused harmony export LIVES_LIST */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COINS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return POST_WEATHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return HISTORY_TODAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return IN_THEATERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return COMMING_SOON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return TOP250; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return NORTHTOP; });
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

/**
 * 正在上映的电影列表
 */
var COMMING_SOON = 'https://douban.uieee.com/v2/movie/coming_soon';

/**
 * 正在上映的电影列表
 */
var TOP250 = 'https://douban.uieee.com/v2/movie/top250';

/**
 * 北美票房榜
 */
var NORTHTOP = 'https://douban.uieee.com/v2/movie/us_box';

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Market_vue__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_60e78f4c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Market_vue__ = __webpack_require__(135);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(133)
}
var normalizeComponent = __webpack_require__(0)
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

/***/ 133:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_request__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(2);
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
      __WEBPACK_IMPORTED_MODULE_0__lib_request__["a" /* default */].get(__WEBPACK_IMPORTED_MODULE_2__api_apiList__["a" /* COINS_LIST */], this.param).then(function (res) {
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

/***/ 135:
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

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Weather_vue__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1b2651c6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Weather_vue__ = __webpack_require__(139);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(137)
}
var normalizeComponent = __webpack_require__(0)
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

/***/ 137:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 139:
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

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_HistorysToday_vue__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9c3db918_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_HistorysToday_vue__ = __webpack_require__(143);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(141)
}
var normalizeComponent = __webpack_require__(0)
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

/***/ 141:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(2);
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

/**
 * @Description: 历史上的今天
 * @Author: Cid
 */



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'HistorysToday',
  computed: {
    fontsize: function fontsize(_) {
      return Number(__WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].getters.textIndex);
    },
    isNightMode: function isNightMode(_) {
      return __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].getters.isNightMode;
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

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _ref, data;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.errText = ' ';
                _context.prev = 1;
                _context.next = 4;
                return __WEBPACK_IMPORTED_MODULE_3__lib_request__["a" /* default */].get(__WEBPACK_IMPORTED_MODULE_4__api_apiList__["c" /* HISTORY_TODAY */], {
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
      __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].commit('setDetailData', data);
      // url相对pages页面来设置
      // 没有详情接口，直接传吧- -
      wx.navigateTo({
        // url: `../detail/main?story=${JSON.stringify(Object.assign({}, data))}`
        url: '../detail/main?year=' + data.year + '&month=' + data.month + '&day=' + data.day + '&title=' + data.title + '&picUrl=' + data.picUrl + '&details=' + data.details
      });
    }
  }
});

/***/ }),

/***/ 143:
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

/***/ 144:
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
      "eventid": '1',
      "mpcomid": '7'
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
    attrs: {
      "mpcomid": '4'
    }
  }, [_c('Market', {
    attrs: {
      "mpcomid": '3'
    }
  })], 1), _vm._v(" "), _c('swiper-item', {
    attrs: {
      "mpcomid": '6'
    }
  }, [_c('HistorysToday', {
    attrs: {
      "mpcomid": '5'
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShowRefresh),
      expression: "isShowRefresh"
    }],
    staticClass: "zl-refresh",
    attrs: {
      "eventid": '2'
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

},[102]);
//# sourceMappingURL=main.js.map