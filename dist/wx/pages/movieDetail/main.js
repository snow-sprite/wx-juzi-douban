require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonpMpvue([3],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(133);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2d9c6c39_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(136);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(134)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2d9c6c39"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2d9c6c39_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/movieDetail/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d9c6c39", Component.options)
  } else {
    hotAPI.reload("data-v-2d9c6c39", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 134:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_request__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_apiList__ = __webpack_require__(16);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'movieDetail',
  data: function data() {
    return {
      id: '',
      title: '',
      movieDetail: {}
    };
  },

  methods: {
    getMovieDetail: function getMovieDetail() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _ref, data;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.movieDetail = {};
                _context.prev = 1;
                _context.next = 4;
                return __WEBPACK_IMPORTED_MODULE_2__lib_request__["a" /* default */].post(__WEBPACK_IMPORTED_MODULE_3__api_apiList__["d" /* MOVIE_DETAIL */] + '/' + _this.id, {
                  apikey: '0b2bdeda43b5688921839c8ecb20399b'
                });

              case 4:
                _ref = _context.sent;
                data = _ref.data;

                _this.movieDetail = data;
                console.log('dd', _this.movieDetail);
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](1);

                console.error('bad', _context.t0);

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[1, 10]]);
      }))();
    }
  },
  onLoad: function onLoad(option) {
    this.title = option.title;
    this.id = option.id;
  },
  mounted: function mounted() {
    wx.setNavigationBarTitle({
      title: this.title
    });
    this.getMovieDetail();
  }
});

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "zl-movie-detailbox"
  }, [(_vm.movieDetail.id) ? _c('div', [_c('dl', {
    staticClass: "zl-movie"
  }, [_c('dt', {
    staticClass: "zl-movie__thumb"
  }, [_c('img', {
    attrs: {
      "src": _vm.movieDetail.images.small,
      "alt": ""
    }
  })]), _vm._v(" "), _c('dd', {
    staticClass: "zl-movie__info"
  }, [_c('h2', {
    staticClass: "zl-movie__info--title"
  }, [_c('span', [_vm._v(_vm._s(_vm.movieDetail.title))]), _vm._v(" "), (_vm.movieDetail.year) ? _c('span', [_vm._v("（" + _vm._s(_vm.movieDetail.year) + "）")]) : _vm._e()]), _vm._v(" "), _c('p', {
    staticClass: "zl-movie__info--sourcename"
  }, [_c('span', [_vm._v(_vm._s(_vm.movieDetail.original_title))]), _vm._v(" "), (_vm.movieDetail.year) ? _c('span', [_vm._v("(" + _vm._s(_vm.movieDetail.year) + ")")]) : _vm._e()]), _vm._v(" "), _c('p', {
    staticClass: "zl-movie__info--language"
  }, [_c('span', [_vm._v("语言：")]), _vm._v(" "), _vm._l((_vm.movieDetail.languages), function(language, index) {
    return _c('span', {
      key: language
    }, [_vm._v(_vm._s(language) + " ")])
  })], 2), _vm._v(" "), _c('p', {
    staticClass: "zl-movie__info--details"
  }, [_vm._l((_vm.movieDetail.genres), function(tag, ind) {
    return _c('span', {
      key: ind
    }, [_vm._v("\n            " + _vm._s(tag) + "\n          ")])
  }), _vm._v(" "), (_vm.movieDetail.countries[0]) ? _c('span', [_vm._v("/ " + _vm._s(_vm.movieDetail.countries[0]))]) : _vm._e(), _vm._v(" "), (_vm.movieDetail.durations[0]) ? _c('span', [_vm._v("/ 片长" + _vm._s(_vm.movieDetail.durations[0]))]) : _vm._e()], 2), _vm._v(" "), _c('ul', {
    staticClass: "zl-movie__info--watchbox"
  }, [_c('li', {
    staticClass: "zl-movie__info--see"
  }, [_vm._v("\n            想看 " + _vm._s(_vm.movieDetail.wish_count) + "\n          ")]), _vm._v(" "), _c('li', {
    staticClass: "zl-movie__info--see"
  }, [_vm._v("\n            看过 " + _vm._s(_vm.movieDetail.reviews_count) + "\n          ")])], 1)], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "zl-rate-box"
  }, [_c('span', {
    staticClass: "zl-rate-box__title"
  }, [_vm._v("豆瓣评分©")]), _vm._v(" "), _c('dl', {
    staticClass: "zl-rate-leftbox"
  }, [_c('dt', {
    staticClass: "zl-rate-box__totalrate"
  }, [_c('span', {
    staticClass: "zl-rate-box__score"
  }, [_vm._v("7.6")]), _vm._v(" "), _c('div', {
    staticClass: "zl-rate-box__trate"
  }, [_c('img', {
    staticClass: "zl-rate-box__trate--active",
    attrs: {
      "src": "../../../static/img/movie/star_active.svg",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "zl-rate-box__trate--inactive",
    attrs: {
      "src": "../../../static/img/movie/star_inactive.svg",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "zl-rate-box__trate--inactive",
    attrs: {
      "src": "../../../static/img/movie/star_inactive.svg",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "zl-rate-box__trate--inactive",
    attrs: {
      "src": "../../../static/img/movie/star_inactive.svg",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "zl-rate-box__trate--inactive",
    attrs: {
      "src": "../../../static/img/movie/star_inactive.svg",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('dd', {
    staticClass: "zl-rate-box__details"
  }, [_c('ul', [_c('li', [_c('div', {
    staticClass: "zl-rate-box__leftdetails"
  }, [_c('img', {
    staticClass: "zl-rate-box__details--star",
    attrs: {
      "src": "../../../static/img/movie/star_inactive.svg",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "zl-rate-box__details--star",
    attrs: {
      "src": "../../../static/img/movie/star_inactive.svg",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "zl-rate-box__details--star",
    attrs: {
      "src": "../../../static/img/movie/star_inactive.svg",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "zl-rate-box__details--star",
    attrs: {
      "src": "../../../static/img/movie/star_inactive.svg",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "zl-rate-box__details--star",
    attrs: {
      "src": "../../../static/img/movie/star_inactive.svg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "zl-rate-box__details--propotion"
  }, [_c('span', {
    staticClass: "zl-rate-box__details--activepropotion",
    staticStyle: {
      "width": "50%"
    }
  })])]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "zl-rate-box__leftdetails"
  }, [_c('img', {
    staticClass: "zl-rate-box__details--star",
    attrs: {
      "src": "../../../static/img/movie/star_inactive.svg",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "zl-rate-box__details--star",
    attrs: {
      "src": "../../../static/img/movie/star_inactive.svg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "zl-rate-box__details--propotion"
  }, [_c('span', {
    staticClass: "zl-rate-box__details--activepropotion",
    staticStyle: {
      "width": "50%"
    }
  })])]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "zl-rate-box__leftdetails"
  }, [_c('img', {
    staticClass: "zl-rate-box__details--star",
    attrs: {
      "src": "../../../static/img/movie/star_inactive.svg",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "zl-rate-box__details--star",
    attrs: {
      "src": "../../../static/img/movie/star_inactive.svg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "zl-rate-box__details--propotion"
  }, [_c('span', {
    staticClass: "zl-rate-box__details--activepropotion",
    staticStyle: {
      "width": "50%"
    }
  })])]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "zl-rate-box__leftdetails"
  }, [_c('img', {
    staticClass: "zl-rate-box__details--star",
    attrs: {
      "src": "../../../static/img/movie/star_inactive.svg",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "zl-rate-box__details--star",
    attrs: {
      "src": "../../../static/img/movie/star_inactive.svg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "zl-rate-box__details--propotion"
  }, [_c('span', {
    staticClass: "zl-rate-box__details--activepropotion",
    staticStyle: {
      "width": "50%"
    }
  })])]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "zl-rate-box__leftdetails"
  }, [_c('img', {
    staticClass: "zl-rate-box__details--star",
    attrs: {
      "src": "../../../static/img/movie/star_inactive.svg",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "zl-rate-box__details--star",
    attrs: {
      "src": "../../../static/img/movie/star_inactive.svg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "zl-rate-box__details--propotion"
  }, [_c('span', {
    staticClass: "zl-rate-box__details--activepropotion",
    staticStyle: {
      "width": "50%"
    }
  })])]), _vm._v(" "), _c('span', {
    staticClass: "zl-rate-box__details--people"
  }, [_vm._v("123456人评分")])], 1)], 1)], 1)], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2d9c6c39", esExports)
  }
}

/***/ })

},[132]);
//# sourceMappingURL=main.js.map