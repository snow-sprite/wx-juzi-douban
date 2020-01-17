require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonpMpvue([1],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(104);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_86b97822_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(126);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(105)
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

/***/ 105:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_index_Movies__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Weather__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_HistorysToday__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_request__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_apiList__ = __webpack_require__(22);



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
// import Market from '@/components/Market'





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Home',
  components: {
    Movies: __WEBPACK_IMPORTED_MODULE_2__pages_index_Movies__["a" /* default */],
    // Live,
    // Market,
    Weather: __WEBPACK_IMPORTED_MODULE_3__components_Weather__["a" /* default */],
    HistorysToday: __WEBPACK_IMPORTED_MODULE_4__components_HistorysToday__["a" /* default */]
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
      secondTabs: ['电影',
      // '资讯',
      // '行情',
      '冷知识'],
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

      __WEBPACK_IMPORTED_MODULE_5__store__["a" /* default */].dispatch('getLocation').then(function (data) {
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
        __WEBPACK_IMPORTED_MODULE_5__store__["a" /* default */].commit('pickerThemeChange', ind);
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
                return __WEBPACK_IMPORTED_MODULE_6__lib_request__["a" /* default */].get(__WEBPACK_IMPORTED_MODULE_7__api_apiList__["e" /* POST_WEATHER */] + '/' + city);

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

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Movies_vue__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8ea228d4_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Movies_vue__ = __webpack_require__(117);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(110)
}
var normalizeComponent = __webpack_require__(3)
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

/***/ 110:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_request__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_apiList__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Movie__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store__ = __webpack_require__(4);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      inTheaters: [], // 正在热映数据
      comingSoon: [], // 即将上映数据
      topList: [], // top250列表
      northTopData: {
        date: '',
        subjects: [] // 北美票房榜
      },
      pageMorePayload: '', // 传给查看更多的判断请求uri的值
      pageMoreTitle: '' // 查看更多电影页面的标题
    };
  },
  created: function created() {
    this.getMovies(__WEBPACK_IMPORTED_MODULE_5__api_apiList__["c" /* IN_THEATERS */], 'in_theaters');
    this.getMovies(__WEBPACK_IMPORTED_MODULE_5__api_apiList__["a" /* COMMING_SOON */], 'coming_soon');
    this.getMovies(__WEBPACK_IMPORTED_MODULE_5__api_apiList__["f" /* TOP250 */], 'top250');
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
        var _ref2, data, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, movieItem, _loop, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, sub;

        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return __WEBPACK_IMPORTED_MODULE_4__lib_request__["a" /* default */].post(__WEBPACK_IMPORTED_MODULE_5__api_apiList__["d" /* NORTHTOP */], {
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
                __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(data).forEach(function (key) {
                  _this2.northTopData[key] = data[key];
                });
                // 将northTopData.subjects.subject下的数据映射到northTopData.sujects下一份，跟之前数据格式保持一致

                _loop = function _loop(sub) {
                  __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(sub.subject).forEach(function (key) {
                    sub[key] = sub.subject[key];
                  });
                };

                _iteratorNormalCompletion3 = true;
                _didIteratorError3 = false;
                _iteratorError3 = undefined;
                _context2.prev = 30;
                for (_iterator3 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator___default()(_this2.northTopData.subjects); !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  sub = _step3.value;

                  _loop(sub);
                }
                _context2.next = 38;
                break;

              case 34:
                _context2.prev = 34;
                _context2.t1 = _context2['catch'](30);
                _didIteratorError3 = true;
                _iteratorError3 = _context2.t1;

              case 38:
                _context2.prev = 38;
                _context2.prev = 39;

                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                  _iterator3.return();
                }

              case 41:
                _context2.prev = 41;

                if (!_didIteratorError3) {
                  _context2.next = 44;
                  break;
                }

                throw _iteratorError3;

              case 44:
                return _context2.finish(41);

              case 45:
                return _context2.finish(38);

              case 46:
                _context2.next = 53;
                break;

              case 48:
                _context2.prev = 48;
                _context2.t2 = _context2['catch'](0);

                console.log(_context2.t2);
                _this2.northTopData.date = '';
                _this2.northTopData.subjects = [];

              case 53:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[0, 48], [9, 13, 17, 25], [18,, 20, 24], [30, 34, 38, 46], [39,, 41, 45]]);
      }))();
    },
    showMore: function showMore(payload, title) {
      this.pageMorePayload = payload;
      this.pageMoreTitle = title;
      wx.navigateTo({
        url: '../moviesList/main?payload=' + this.pageMorePayload + '&title=' + this.pageMoreTitle
      });
    }
  }
});

/***/ }),

/***/ 117:
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
  }, [_c('div', {
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
  }, [_c('span', [_vm._v("影院热映")]), _vm._v(" "), _c('p', {
    staticClass: "zl-movie__title--more",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.showMore('inTheaters', '影院热映')
      }
    }
  }, [_c('span', [_vm._v("查看更多")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": "../../../static/img/movie/right.svg"
    }
  })])], 1), _vm._v(" "), _c('ul', {
    staticClass: "zl-movie__list"
  }, [_vm._l((_vm.inTheaters), function(item, index) {
    return _c('Movie', {
      key: index,
      attrs: {
        "movie": item,
        "mpcomid": '0-' + index
      }
    })
  }), _vm._v(" "), _c('p', {
    staticClass: "zl-movie__clear"
  })], 2), _vm._v(" "), _c('div', {
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
  }, [_c('span', [_vm._v("即将上映")]), _vm._v(" "), _c('p', {
    staticClass: "zl-movie__title--more",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.showMore('comingSoon', '即将上映')
      }
    }
  }, [_c('span', [_vm._v("查看更多")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": "../../../static/img/movie/right.svg"
    }
  })])], 1), _vm._v(" "), _c('ul', {
    staticClass: "zl-movie__list"
  }, [_vm._l((_vm.comingSoon), function(item, index) {
    return _c('Movie', {
      key: index,
      attrs: {
        "movie": item,
        "mpcomid": '1-' + index
      }
    })
  }), _vm._v(" "), _c('p', {
    staticClass: "zl-movie__clear"
  })], 2), _vm._v(" "), _c('div', {
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
  }, [_c('span', [_vm._v("Top250")]), _vm._v(" "), _c('p', {
    staticClass: "zl-movie__title--more",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.showMore('topList', 'Top250')
      }
    }
  }, [_c('span', [_vm._v("查看更多")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": "../../../static/img/movie/right.svg"
    }
  })])], 1), _vm._v(" "), _c('ul', {
    staticClass: "zl-movie__list"
  }, [_vm._l((_vm.topList), function(item, index) {
    return _c('Movie', {
      key: index,
      attrs: {
        "movie": item,
        "mpcomid": '2-' + index
      }
    })
  }), _vm._v(" "), _c('p', {
    staticClass: "zl-movie__clear"
  })], 2), _vm._v(" "), _c('div', {
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
  }, [_c('span', [_vm._v("北美票房榜")]), _vm._v(" "), _c('span', {
    staticClass: "zl-movie__title--time"
  }, [_vm._v("（" + _vm._s(_vm.northTopData.date) + "）")]), _vm._v(" "), _c('p', {
    staticClass: "zl-movie__title--more",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.showMore('northTop', '北美票房榜')
      }
    }
  }, [_c('span', [_vm._v("查看更多")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": "../../../static/img/movie/right.svg"
    }
  })])], 1), _vm._v(" "), _c('ul', {
    staticClass: "zl-movie__list"
  }, [_vm._l((_vm.northTopData.subjects), function(item, index) {
    return _c('Movie', {
      key: index,
      attrs: {
        "movie": item,
        "mpcomid": '3-' + index
      }
    })
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

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Weather_vue__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1b2651c6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Weather_vue__ = __webpack_require__(121);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(119)
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

/***/ 119:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 120:
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

/***/ 121:
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

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_HistorysToday_vue__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9c3db918_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_HistorysToday_vue__ = __webpack_require__(125);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(123)
}
var normalizeComponent = __webpack_require__(3)
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

/***/ 123:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_request__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_apiList__ = __webpack_require__(22);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
                return __WEBPACK_IMPORTED_MODULE_3__lib_request__["a" /* default */].get(__WEBPACK_IMPORTED_MODULE_4__api_apiList__["b" /* HISTORY_TODAY */], {
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
        url: '../historyDetail/main?year=' + data.year + '&month=' + data.month + '&day=' + data.day + '&title=' + data.title + '&picUrl=' + data.picUrl + '&details=' + data.details
      });
    }
  }
});

/***/ }),

/***/ 125:
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

/***/ 126:
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
      "mpcomid": '5'
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
  }, [_c('HistorysToday', {
    attrs: {
      "mpcomid": '3'
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

},[103]);
//# sourceMappingURL=main.js.map