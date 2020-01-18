require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonpMpvue([2],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(138);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_16b0c9cc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(141);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(139)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_16b0c9cc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/moviesList/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-16b0c9cc", Component.options)
  } else {
    hotAPI.reload("data-v-16b0c9cc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 139:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 140:
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





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'MoviesList',
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
      requestUri: '', // 当前详情页请求的uri
      title: '',
      MoviesList: [] // 电影列表
    };
  },
  onLoad: function onLoad(option) {
    // 进页面先清空一下老数据
    this.MoviesList = [];
    this.title = option.title;
    switch (option.payload) {
      case 'inTheaters':
        this.requestUri = __WEBPACK_IMPORTED_MODULE_5__api_apiList__["c" /* IN_THEATERS */];
        this.getMoviesList();
        break;
      case 'comingSoon':
        this.requestUri = __WEBPACK_IMPORTED_MODULE_5__api_apiList__["a" /* COMMING_SOON */];
        this.getMoviesList();
        break;
      case 'topList':
        this.requestUri = __WEBPACK_IMPORTED_MODULE_5__api_apiList__["f" /* TOP250 */];
        this.getMoviesList();
        break;
      case 'northTop':
        this.requestUri = __WEBPACK_IMPORTED_MODULE_5__api_apiList__["d" /* NORTHTOP */];
        this.getNorthTopList();
        break;
    }
  },

  methods: {
    getMoviesList: function getMoviesList() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _ref, data, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, movieItem;

        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_4__lib_request__["a" /* default */].post(_this.requestUri, {
                  apikey: '0b2bdeda43b5688921839c8ecb20399b'
                });

              case 3:
                _ref = _context.sent;
                data = _ref.data;

                if (!(data && data.count > 0)) {
                  _context.next = 28;
                  break;
                }

                if (!(_this.requestUri !== __WEBPACK_IMPORTED_MODULE_5__api_apiList__["a" /* COMMING_SOON */])) {
                  _context.next = 26;
                  break;
                }

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 10;

                for (_iterator = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator___default()(data.subjects); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  movieItem = _step.value;

                  // star总分50， 这里以5为最大评分
                  movieItem.activeStar = Math.floor(movieItem.rating.stars / 10);
                  movieItem.inactiveStar = Math.floor(5 - movieItem.rating.stars / 10);
                  movieItem.halfActiveStar = movieItem.rating.stars % 10 > 0;
                  // 不是即将上映的去掉「上映时期」和「类型」
                  movieItem.genres = [];
                  movieItem.mainland_pubdate = '';
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
                //  没有评分这里不显示评分了 重设上映日期
                if (_this.requestUri === __WEBPACK_IMPORTED_MODULE_5__api_apiList__["a" /* COMMING_SOON */]) {
                  data.subjects.forEach(function (coming) {
                    coming.rating = {};
                    var month = new Date(coming.mainland_pubdate).getMonth() + 1;
                    month = month < 10 ? '0' + month : month;
                    var day = new Date(coming.mainland_pubdate).getDate();
                    coming.mainland_pubdate = month + '-' + day;
                  });
                }
                _this.MoviesList = data.subjects;

              case 28:
                _context.next = 34;
                break;

              case 30:
                _context.prev = 30;
                _context.t1 = _context['catch'](0);

                console.log(_context.t1);
                _this.hotMovieList = [];

              case 34:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 30], [10, 14, 18, 26], [19,, 21, 25]]);
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
                return __WEBPACK_IMPORTED_MODULE_4__lib_request__["a" /* default */].post(_this2.requestUri, {
                  apikey: '0b2bdeda43b5688921839c8ecb20399b'
                });

              case 3:
                _ref2 = _context2.sent;
                data = _ref2.data;
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context2.prev = 8;

                for (_iterator2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator___default()(data.subjects); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  movieItem = _step2.value;

                  // star总分50， 这里以5为最大评分
                  movieItem.subject.activeStar = Math.floor(movieItem.subject.rating.stars / 10);
                  movieItem.subject.inactiveStar = Math.floor(5 - movieItem.subject.rating.stars / 10);
                  movieItem.subject.halfActiveStar = movieItem.subject.rating.stars % 10 > 0;
                  // 不是即将上映的去掉「上映时期」和「类型」
                  movieItem.subject.genres = [];
                  movieItem.subject.mainland_pubdate = '';
                }
                // 将northTopData.subjects.subject下的数据映射到northTopData.sujects下一份，跟之前数据格式保持一致
                _context2.next = 16;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2['catch'](8);
                _didIteratorError2 = true;
                _iteratorError2 = _context2.t0;

              case 16:
                _context2.prev = 16;
                _context2.prev = 17;

                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }

              case 19:
                _context2.prev = 19;

                if (!_didIteratorError2) {
                  _context2.next = 22;
                  break;
                }

                throw _iteratorError2;

              case 22:
                return _context2.finish(19);

              case 23:
                return _context2.finish(16);

              case 24:
                _loop = function _loop(sub) {
                  __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(sub.subject).forEach(function (key) {
                    sub[key] = sub.subject[key];
                  });
                };

                _iteratorNormalCompletion3 = true;
                _didIteratorError3 = false;
                _iteratorError3 = undefined;
                _context2.prev = 28;
                for (_iterator3 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator___default()(data.subjects); !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  sub = _step3.value;

                  _loop(sub);
                }
                _context2.next = 36;
                break;

              case 32:
                _context2.prev = 32;
                _context2.t1 = _context2['catch'](28);
                _didIteratorError3 = true;
                _iteratorError3 = _context2.t1;

              case 36:
                _context2.prev = 36;
                _context2.prev = 37;

                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                  _iterator3.return();
                }

              case 39:
                _context2.prev = 39;

                if (!_didIteratorError3) {
                  _context2.next = 42;
                  break;
                }

                throw _iteratorError3;

              case 42:
                return _context2.finish(39);

              case 43:
                return _context2.finish(36);

              case 44:
                _this2.MoviesList = data.subjects;
                _context2.next = 52;
                break;

              case 47:
                _context2.prev = 47;
                _context2.t2 = _context2['catch'](0);

                console.log(_context2.t2);
                _this2.northTopData.date = '';
                _this2.northTopData.subjects = [];

              case 52:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[0, 47], [8, 12, 16, 24], [17,, 19, 23], [28, 32, 36, 44], [37,, 39, 43]]);
      }))();
    }
  },
  mounted: function mounted() {
    wx.setNavigationBarTitle({
      title: this.title
    });
  }
});

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroll-view', {
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
  }, [_c('ul', {
    staticClass: "zl-movie__list"
  }, [_vm._l((_vm.MoviesList), function(item, index) {
    return _c('Movie', {
      key: index,
      attrs: {
        "movie": item,
        "mpcomid": '0-' + index
      }
    })
  }), _vm._v(" "), _c('p', {
    staticClass: "zl-movie__clear"
  })], 2)], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-16b0c9cc", esExports)
  }
}

/***/ })

},[137]);
//# sourceMappingURL=main.js.map