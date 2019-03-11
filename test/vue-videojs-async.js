(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-videojs-async"] = factory();
	else
		root["vue-videojs-async"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _VideojsDirective = __webpack_require__(7);

var _VideojsDirective2 = _interopRequireDefault(_VideojsDirective);

var _playerContainer = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'Videojs',

  props: {
    src: String,
    playerId: {
      type: String,
      default: '1'
    },
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    width: {
      type: Number,
      default: 800
    },
    height: {
      type: Number,
      default: 450
    },
    type: {
      type: String,
      default: 'video/mp4'
    }
  },

  computed: {
    innerDimension: function innerDimension() {
      return {
        width: this.width + 'px',
        height: this.height + 'px'
      };
    }
  },

  directives: {
    videojs: _VideojsDirective2.default
  },

  mixins: [_playerContainer.PlayerContainerMixin],

  mounted: function mounted() {
    this.video = window.vueVideojsVideo[this.playerId];
    this.videoOnEvents();
    this.$emit('video-ready', this.video);
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayerContainerMixin = undefined;

var _playerContainer = __webpack_require__(8);

var _playerContainer2 = _interopRequireDefault(_playerContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.PlayerContainerMixin = _playerContainer2.default;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VueVideojs", function() { return VueVideojs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncVideojsCompFactory", function() { return asyncVideojsCompFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_js_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_js_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_js_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_js_mixins_playerContainer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_js_mixins_playerContainer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_js_mixins_playerContainer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_loadjs__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_loadjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_loadjs__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__src_js_components__, "Videojs")) __webpack_require__.d(__webpack_exports__, "Videojs", function() { return __WEBPACK_IMPORTED_MODULE_0__src_js_components__["Videojs"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__src_js_mixins_playerContainer__, "PlayerContainerMixin")) __webpack_require__.d(__webpack_exports__, "PlayerContainerMixin", function() { return __WEBPACK_IMPORTED_MODULE_1__src_js_mixins_playerContainer__["PlayerContainerMixin"]; });
/*
 * Created Date: 2018-10-17 4:38:41
 * Author: yinzhida Email: yinzhida@qiyi.com
 * -----
 * Last Modified: 2019-03-11 17:24:05
 * Modified By: yinzhida yinzhida@qiyi.com
 * -----
 * Copyright (c) 2018 IQIYI
 */





function asyncLoaderFactory (comp, videojsPath, videojsCssPath) {
  videojsPath = videojsPath || '//vjs.zencdn.net/7.3.0/video.min.js'
  videojsCssPath = videojsCssPath || '//vjs.zencdn.net/7.3.0/video-js.min.css'
  return (resolve, reject) => {
    try {
      __WEBPACK_IMPORTED_MODULE_2_loadjs___default()([videojsPath, videojsCssPath], 'videojs')
      __WEBPACK_IMPORTED_MODULE_2_loadjs___default.a.ready('videojs', function () {
        /* foo.js & bar.js loaded */
        resolve(comp)
      })
    } catch (e) {
      console.warn(e)
      reject('videojs加载失败!')
    }
  }
}

function asyncVideojsCompFactory (comp, videojsPath, videojsCssPath, compName = 'vue-custom-videojs') {
  return {
    install (Vue) {
      Vue.component(compName, asyncLoaderFactory(comp, videojsPath, videojsCssPath))
    }
  }
}

const VueVideojs = {
  install (Vue) {
    Vue.component('vue-videojs-async', asyncLoaderFactory(__WEBPACK_IMPORTED_MODULE_0__src_js_components__["Videojs"]))
  }
}



if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueVideojs)
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Videojs = undefined;

var _Videojs = __webpack_require__(4);

var _Videojs2 = _interopRequireDefault(_Videojs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Videojs = _Videojs2.default; /*
                                      * Created Date: 2018-10-23 8:05:06
                                      * Author: yinzhida Email: yinzhida@qiyi.com
                                      * -----
                                      * Last Modified: 2019-03-11 16:07:20
                                      * Modified By: yinzhida yinzhida@qiyi.com
                                      * -----
                                      * Copyright (c) 2018 IQIYI
                                      */

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Videojs_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Videojs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Videojs_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Videojs_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Videojs_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_11299630_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Videojs_vue__ = __webpack_require__(9);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(5)
}
var normalizeComponent = __webpack_require__(6)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Videojs_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_11299630_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Videojs_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/js/components/Videojs.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-11299630", Component.options)
  } else {
    hotAPI.reload("data-v-11299630", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Created Date: 2018-08-21 10:09:55
 * Author: yinzhida Email: zhaoxinxin@qiyi.com
 * -----
 * Last Modified: 2019-03-11 19:16:28
 * Modified By: yinzhida yinzhida@qiyi.com
 * -----
 * Copyright (c) 2018 IQIYI
 */
var videojsDirective = {
  inserted: function inserted(el, binding) {
    var v = binding.value;
    var videojs = window.videojs;
    if (!videojs) {
      throw new Error('videojs未定义，初始化播放器失败！');
    }
    window.vueVideojsVideo = window.vueVideojsVideo || {};

    var options = Object.assign({
      'controlBar': {
        'playbackRateMenuButton': {
          'playbackRates': [1, 1.5, 2]
        }
      },
      'controls': true,
      'autoplay': true,
      'preload': 'auto',
      'inactivityTimeout': 0
    }, v.options);

    var videoTag = document.createElement('video');
    videoTag.setAttribute('class', 'video-js');

    var sourceTag = document.createElement('source');
    sourceTag.setAttribute('src', v.src);
    sourceTag.setAttribute('type', v.type || 'video/mp4');
    videoTag.appendChild(sourceTag);
    el.appendChild(videoTag);
    window.vueVideojsVideo[v.id] = videojs(videoTag, options);
  },

  // 切换src，其他属性变化暂时不予响应
  update: function update(el, binding) {
    var v = binding.value;
    var oldv = binding.oldValue;
    if (oldv.src === v.src) {
      return;
    }
    var video = window.vueVideojsVideo[v.id];
    if (!video) {
      return;
    }
    video.src({
      'src': v.src
    });
  },

  // 销毁播放器
  unbind: function unbind(el, binding) {
    var v = binding.value;
    var video = window.vueVideojsVideo[v.id];
    video.dispose();
    window.vueVideojsVideo[v.id] = undefined;
  }
};
exports.default = videojsDirective;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Created Date: 2018-10-19 3:39:40
 * Author: yinzhida Email: yinzhida@qiyi.com
 * -----
 * Last Modified: 2019-02-26 11:41:14
 * Modified By: yinzhida yinzhida@qiyi.com
 * -----
 * Copyright (c) 2018 IQIYI
 */

exports.default = {
  methods: {
    playerEventHandler: function playerEventHandler(e, args, video) {
      var handlerName = e + 'PlayerHandler';
      if (typeof this[handlerName] === 'function') {
        this[handlerName]({ args: args, video: video });
      }
    },
    videoReady: function videoReady(video) {
      // 将video挂载到this上
      this.video = video;
      // 监听video事件，实现快捷监听
      this.videoOnEvents();
      // 继续向上层汇报video-ready事件
      this.$emit('video-ready', video);
    },
    videoOnEvents: function videoOnEvents() {
      var _this = this;

      var events = ['fullscreenchange', 'stageclick', 'loadstart', 'waiting', 'canplay', 'canplaythrough', 'playing', 'ended', 'seeking', 'seeked', 'play', 'firstplay', 'pause', 'durationchange', 'error', 'loadedmetadata', 'posterchange', 'textdata', 'mousedown', 'touchstart', 'touchmove', 'touchend', 'touchleave', 'touchcancel', 'tap', 'click', 'focus', 'blur', 'mousemove', 'mouseup', 'keydown', 'keyup', 'progress', 'ready', 'timeupdate', 'loadeddata', 'dispose', 'abort', 'suspend', 'emptied', 'stalled', 'ratechange', 'volumechange', 'texttrackchange'];

      var _loop = function _loop(e) {
        _this.video.on(e, function () {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this.playerEventHandler(e, args, _this.video);
        });
      };

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var e = _step.value;

          _loop(e);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {
    directives: [
      {
        name: "videojs",
        rawName: "v-videojs",
        value: {
          src: _vm.src,
          type: _vm.type,
          id: _vm.playerId,
          options: _vm.options
        },
        expression: "{src: src, type: type, id: playerId, options: options}"
      }
    ],
    staticClass: "videojs-vue",
    style: _vm.innerDimension
  })
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-11299630", esExports)
  }
}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("loadjs");

/***/ })
/******/ ]);
});
//# sourceMappingURL=vue-videojs-async.js.map