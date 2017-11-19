webpackJsonp([1],{

/***/ "./app/src/js/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);



new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
  delimiters: ['${', '}'],
  el: '#app',
  data: {
    post: {}
  },
  created: function created() {
    var _this = this;

    __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('https://jsonplaceholder.typicode.com/posts/1').then(function (res) {
      _this.post = res.data;
    });
  }
});

/***/ }),

/***/ "./app/src/less/app.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./app/src/js/index.js");
module.exports = __webpack_require__("./app/src/less/app.less");


/***/ })

},[0]);