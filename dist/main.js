/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/background.png */ "./imgs/background.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --background: #fed699;\r\n  --text: #fff;\r\n  --primary: #ea5e67;\r\n  --secondary: #669553;\r\n  --tertiary: #83b76d;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Handlee\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url(https://fonts.gstatic.com/s/handlee/v14/-F6xfjBsISg9aMakPm3wow.woff2) format(\"woff2\");\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,\r\n    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,\r\n    U+FEFF, U+FFFD;\r\n}\r\n\r\nhtml {\r\n  color: var(--tertiary);\r\n}\r\n\r\n/* hide scrollbar on edge*/\r\n\r\nbody::-webkit-scrollbar {\r\n  width: 0px;\r\n  background: transparent;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\nbody {\r\n  font-family: \"Handlee\";\r\n  font-size: 18px;\r\n  line-height: 1.5;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\nh1,\r\nh2 {\r\n  color: var(--primary);\r\n  font-weight: bolder;\r\n  margin: 0;\r\n}\r\n\r\nh3,\r\nh4 {\r\n  color: var(--secondary);\r\n  font-weight: bolder;\r\n  text-decoration: underline wavy;\r\n}\r\n\r\nh5,\r\nh6 {\r\n  color: var(--tertiary);\r\n}\r\n\r\np {\r\n  font-weight: bold;\r\n  color: var(--secondary);\r\n  text-align: center;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.header .menu a {\r\n  padding: 0.6rem;\r\n  animation: 1s ease-out 0s 1 slideInFromRight;\r\n}\r\n\r\n.header img {\r\n  animation: 1s ease-out 0s 1 slideInFromLeft;\r\n}\r\n\r\na {\r\n  color: var(--tertiary);\r\n  text-decoration: none;\r\n}\r\n\r\na:hover {\r\n  text-decoration: underline wavy;\r\n}\r\n\r\n.navbar {\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 100;\r\n  background: var(--primary);\r\n  color: var(--text);\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  padding: 1rem;\r\n  margin: 0;\r\n}\r\n\r\n.main {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.intro,\r\n.feed {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.feed img {\r\n  border-radius: 10px;\r\n}\r\n\r\n.micro {\r\n  max-width: 200px !important;\r\n}\r\n\r\n.feed {\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n.info-wrap {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 1rem;\r\n}\r\n\r\nfigure {\r\n  text-align: center;\r\n}\r\n\r\nfigcaption {\r\n  font-style: italic;\r\n  color: var(--primary);\r\n}\r\n\r\nimg {\r\n  animation: 2s ease-out 0s 1 zoomInOut;\r\n}\r\n\r\nimg:hover {\r\n  transform: scale(1.05);\r\n  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;\r\n  transition: 0.5s ease-in-out;\r\n}\r\n\r\n@keyframes slideInFromLeft {\r\n  0% {\r\n    transform: translateX(-100%);\r\n  }\r\n\r\n  100% {\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n@keyframes slideInFromRight {\r\n  0% {\r\n    transform: translateX(100%);\r\n  }\r\n\r\n  100% {\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n@keyframes zoomInOut {\r\n  0% {\r\n    transform: scale(1);\r\n  }\r\n\r\n  50% {\r\n    transform: scale(1.02);\r\n  }\r\n\r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 715px) {\r\n  .feed img {\r\n    width: 700px;\r\n  }\r\n\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,YAAY;EACZ,kBAAkB;EAClB,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,gBAAgB;EAChB,8FAA8F;EAC9F;;kBAEgB;AAClB;;AAEA;EACE,sBAAsB;AACxB;;AAEA,0BAA0B;;AAE1B;EACE,UAAU;EACV,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,eAAe;EACf,gBAAgB;EAChB,yDAA6C;AAC/C;;AAEA;;EAEE,qBAAqB;EACrB,mBAAmB;EACnB,SAAS;AACX;;AAEA;;EAEE,uBAAuB;EACvB,mBAAmB;EACnB,+BAA+B;AACjC;;AAEA;;EAEE,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,eAAe;EACf,4CAA4C;AAC9C;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,eAAe;EACf,SAAS;EACT,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,0BAA0B;EAC1B,kBAAkB;EAClB,uCAAuC;EACvC,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,mBAAmB;EACnB,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,sBAAsB;EACtB,2CAA2C;EAC3C,4BAA4B;AAC9B;;AAEA;EACE;IACE,4BAA4B;EAC9B;;EAEA;IACE,wBAAwB;EAC1B;AACF;;AAEA;EACE;IACE,2BAA2B;EAC7B;;EAEA;IACE,wBAAwB;EAC1B;AACF;;AAEA;EACE;IACE,mBAAmB;EACrB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,YAAY;EACd;;AAEF","sourcesContent":[":root {\r\n  --background: #fed699;\r\n  --text: #fff;\r\n  --primary: #ea5e67;\r\n  --secondary: #669553;\r\n  --tertiary: #83b76d;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Handlee\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url(https://fonts.gstatic.com/s/handlee/v14/-F6xfjBsISg9aMakPm3wow.woff2) format(\"woff2\");\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,\r\n    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,\r\n    U+FEFF, U+FFFD;\r\n}\r\n\r\nhtml {\r\n  color: var(--tertiary);\r\n}\r\n\r\n/* hide scrollbar on edge*/\r\n\r\nbody::-webkit-scrollbar {\r\n  width: 0px;\r\n  background: transparent;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\nbody {\r\n  font-family: \"Handlee\";\r\n  font-size: 18px;\r\n  line-height: 1.5;\r\n  background-image: url(../imgs/background.png);\r\n}\r\n\r\nh1,\r\nh2 {\r\n  color: var(--primary);\r\n  font-weight: bolder;\r\n  margin: 0;\r\n}\r\n\r\nh3,\r\nh4 {\r\n  color: var(--secondary);\r\n  font-weight: bolder;\r\n  text-decoration: underline wavy;\r\n}\r\n\r\nh5,\r\nh6 {\r\n  color: var(--tertiary);\r\n}\r\n\r\np {\r\n  font-weight: bold;\r\n  color: var(--secondary);\r\n  text-align: center;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.header .menu a {\r\n  padding: 0.6rem;\r\n  animation: 1s ease-out 0s 1 slideInFromRight;\r\n}\r\n\r\n.header img {\r\n  animation: 1s ease-out 0s 1 slideInFromLeft;\r\n}\r\n\r\na {\r\n  color: var(--tertiary);\r\n  text-decoration: none;\r\n}\r\n\r\na:hover {\r\n  text-decoration: underline wavy;\r\n}\r\n\r\n.navbar {\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 100;\r\n  background: var(--primary);\r\n  color: var(--text);\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  padding: 1rem;\r\n  margin: 0;\r\n}\r\n\r\n.main {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.intro,\r\n.feed {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.feed img {\r\n  border-radius: 10px;\r\n}\r\n\r\n.micro {\r\n  max-width: 200px !important;\r\n}\r\n\r\n.feed {\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n.info-wrap {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 1rem;\r\n}\r\n\r\nfigure {\r\n  text-align: center;\r\n}\r\n\r\nfigcaption {\r\n  font-style: italic;\r\n  color: var(--primary);\r\n}\r\n\r\nimg {\r\n  animation: 2s ease-out 0s 1 zoomInOut;\r\n}\r\n\r\nimg:hover {\r\n  transform: scale(1.05);\r\n  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;\r\n  transition: 0.5s ease-in-out;\r\n}\r\n\r\n@keyframes slideInFromLeft {\r\n  0% {\r\n    transform: translateX(-100%);\r\n  }\r\n\r\n  100% {\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n@keyframes slideInFromRight {\r\n  0% {\r\n    transform: translateX(100%);\r\n  }\r\n\r\n  100% {\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n@keyframes zoomInOut {\r\n  0% {\r\n    transform: scale(1);\r\n  }\r\n\r\n  50% {\r\n    transform: scale(1.02);\r\n  }\r\n\r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 715px) {\r\n  .feed img {\r\n    width: 700px;\r\n  }\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/espaco.js":
/*!***********************!*\
  !*** ./src/espaco.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imgs_sagui_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imgs/sagui.png */ "./imgs/sagui.png");
/* harmony import */ var _imgs_forro_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imgs/forro.png */ "./imgs/forro.png");
/* harmony import */ var _imgs_workshop_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imgs/workshop.png */ "./imgs/workshop.png");
/* harmony import */ var _imgs_sandra_guimaraes1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imgs/sandra-guimaraes1.png */ "./imgs/sandra-guimaraes1.png");
/* harmony import */ var _imgs_feijoada_cervejinha_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../imgs/feijoada-cervejinha.png */ "./imgs/feijoada-cervejinha.png");
/* harmony import */ var _imgs_espaco_lotado_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../imgs/espaco-lotado.png */ "./imgs/espaco-lotado.png");
/* harmony import */ var _imgs_espaco_area_cozinha_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../imgs/espaco-area-cozinha.png */ "./imgs/espaco-area-cozinha.png");








const espaco = () => {
  const espaco = document.createElement("div");
  espaco.classList.add("main");

  const intro = document.createElement("div");
  intro.classList.add("intro");
  const title = document.createElement("h1");
  title.textContent = "Nosso cantinho";
  intro.appendChild(title);

  const feed = document.createElement("div");
  feed.classList.add("feed");

  const infoWrap = document.createElement("div");
  infoWrap.classList.add("info-wrap");
  const infoText = document.createElement("p");
  infoText.textContent =
    "Ao ar livre, sob a sombra da Mangueira, o espaço do Papoula é convidativo, acolhedor e tranquilo. Com um ambiente agradável e iluminado, o restaurante possui uma decoração vibrante e cheia de personalidade, com paredes coloridas, mesas de madeira rústica e plantas por toda parte. Perfeito para uma refeição tranquila ou um encontro com amigos e familiares.";

  const infoFigure = document.createElement("figure");
  const infoImg = document.createElement("img");
  const infoCaption = document.createElement("figcaption");
  infoCaption.textContent = "Espaço do Papoula";
  infoImg.setAttribute("src", _imgs_espaco_area_cozinha_png__WEBPACK_IMPORTED_MODULE_6__);
  infoImg.setAttribute("alt", "Espaço do Papoula.");
  infoImg.setAttribute("width", "100%");
  infoFigure.appendChild(infoImg);
  infoFigure.appendChild(infoCaption);

  const infoFigure2 = document.createElement("figure");
  const infoImg2 = document.createElement("img");
  const infoCaption2 = document.createElement("figcaption");
  infoCaption2.textContent = "O Papoula com casa cheia.";
  infoImg2.setAttribute("src", _imgs_espaco_lotado_png__WEBPACK_IMPORTED_MODULE_5__);
  infoImg2.setAttribute("alt", "Espaço lotado");
  infoImg2.setAttribute("width", "100%");
  infoFigure2.appendChild(infoImg2);
  infoFigure2.appendChild(infoCaption2);

  const infoFigureS = document.createElement("figure");
  const infoImgS = document.createElement("img");
  const infoCaptionS = document.createElement("figcaption");
  infoCaptionS.textContent = "Saguizinho se alimentando no pé de manga.";
  infoImgS.setAttribute("src", _imgs_sagui_png__WEBPACK_IMPORTED_MODULE_0__);
  infoImgS.setAttribute("alt", "Saguizinho");
  infoImgS.setAttribute("width", "100%");
  infoFigureS.appendChild(infoImgS);
  infoFigureS.appendChild(infoCaptionS);

  infoWrap.appendChild(infoText);
  infoWrap.appendChild(infoFigure);
  infoWrap.appendChild(infoFigure2);
  infoWrap.appendChild(infoFigureS);

  const infoWrap2 = document.createElement("div");
  infoWrap2.classList.add("info-wrap");
  const infoText2 = document.createElement("p");
  infoText2.textContent =
    "O Papoula é um restaurante que oferece mais do que apenas comida vegana deliciosa. O local também promove uma série de eventos que visam educar e entreter seus clientes. Um exemplo é o workshop da inspiradora Sandra Guimarães, onde os participantes aprenderam a preparar sobremesas veganas deliciosas com ingredientes naturais.";
  const infoFigure3 = document.createElement("figure");
  const infoImg3 = document.createElement("img");
  const infoCaption3 = document.createElement("figcaption");
  infoCaption3.textContent =
    "Sandra Guimarães. Potiguar, militante e autora do blog papacapim.org";
  infoImg3.setAttribute("src", _imgs_sandra_guimaraes1_png__WEBPACK_IMPORTED_MODULE_3__);
  infoImg3.setAttribute("alt", "Sandra Guimarães");
  infoImg3.setAttribute("width", "100%");
  infoFigure3.appendChild(infoImg3);
  infoFigure3.appendChild(infoCaption3);

  const infoText3 = document.createElement("p");
  infoText3.textContent = `Além disso, a chef Adriana Barcellos já organizou um workshop de ceia de Natal vegana, onde os participantes puderam aprender a preparar uma ceia de Natal sem carne ou produtos de origem animal. O restaurante também promove eventos feministas, como o "Feminismo e Veganismo", onde os participantes discutem a intersecção desses dois movimentos.`;
  const infoFigure4 = document.createElement("figure");
  const infoImg4 = document.createElement("img");
  const infoCaption4 = document.createElement("figcaption");
  infoCaption4.textContent = "Cozinha e conversa, no Papoula.";
  infoImg4.setAttribute("src", _imgs_workshop_png__WEBPACK_IMPORTED_MODULE_2__);
  infoImg4.setAttribute("alt", "Workshop");
  infoImg4.setAttribute("width", "100%");
  infoFigure4.appendChild(infoImg4);
  infoFigure4.appendChild(infoCaption4);

  const infoText4 = document.createElement("p");
  infoText4.textContent = `O Papoula ainda oferece eventos musicais, como a feijoada com forró do Escurinho, além de receber outras bandas que tocam diversos gêneros musicais. Todos esses eventos são uma ótima maneira de agradar aos clientes e educá-los sobre a culinária vegana e vegetariana, bem como fornecer um espaço de encontro e diversão para a comunidade local.`;
  const infoFigure5 = document.createElement("figure");
  const infoImg5 = document.createElement("img");
  const infoCaption5 = document.createElement("figcaption");
  infoCaption5.textContent = "Feijoada com cervejinha.";
  infoImg5.setAttribute("src", _imgs_feijoada_cervejinha_png__WEBPACK_IMPORTED_MODULE_4__);
  infoImg5.setAttribute("alt", "Feijoada");
  infoImg5.setAttribute("width", "100%");

  infoFigure5.appendChild(infoImg5);
  infoFigure5.appendChild(infoCaption5);

  const infoFigure6 = document.createElement("figure");
  const infoImg6 = document.createElement("img");
  const infoCaption6 = document.createElement("figcaption");
  infoCaption6.textContent = "Pessoas dançando ao som do Forró do Escruinho.";
  infoImg6.setAttribute("src", _imgs_forro_png__WEBPACK_IMPORTED_MODULE_1__);
  infoImg6.setAttribute("alt", "Forró");
  infoImg6.setAttribute("width", "100%");
  infoFigure6.appendChild(infoImg6);
  infoFigure6.appendChild(infoCaption6);

  infoWrap2.appendChild(infoText2);
  infoWrap2.appendChild(infoFigure3);
  infoWrap2.appendChild(infoText3);
  infoWrap2.appendChild(infoFigure4);
  infoWrap2.appendChild(infoText4);
  infoWrap2.appendChild(infoFigure5);
  infoWrap2.appendChild(infoFigure6);

  feed.appendChild(infoWrap);
  feed.appendChild(infoWrap2);

  espaco.appendChild(intro);
  espaco.appendChild(feed);

  return espaco;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (espaco);


/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imgs_logo_sembg_vermelho_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imgs/logo-sembg-vermelho.png */ "./imgs/logo-sembg-vermelho.png");


const header = () => {
  const header = document.createElement("div");
  header.classList.add("header");
  const img = document.createElement("img");
  img.src = _imgs_logo_sembg_vermelho_png__WEBPACK_IMPORTED_MODULE_0__;
  img.setAttribute("alt", "Logo");
  img.setAttribute("width", "60px");
  header.appendChild(img);

  //add menu with instagram and google maps links
  const menu = document.createElement("div");
  menu.classList.add("menu");
  const insta = document.createElement("a");
  insta.setAttribute("href", "https://www.instagram.com/papoulaveg/");
  insta.setAttribute("target", "_blank");
  insta.classList.add("fa");
  insta.classList.add("fa-instagram");
  const maps = document.createElement("a");
  maps.setAttribute(
    "href",
    "https://www.google.com/maps/place/Papoula+Culin%C3%A1ria+Saud%C3%A1vel/@-7.1201149,-34.8381773,17z/data=!3m1!4b1!4m6!3m5!1s0x7acdd3666250707:0x7a4b3708052ab0a8!8m2!3d-7.1201149!4d-34.8381773!16s%2Fg%2F11f54j3_5p"
  );
  maps.setAttribute("target", "_blank");
  maps.classList.add("fa");
  maps.classList.add("fa-map-marker");
  menu.appendChild(insta);
  menu.appendChild(maps);
  header.appendChild(menu);

  return header;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imgs_infos_cardapio_semana_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imgs/infos-cardapio-semana.jpg */ "./imgs/infos-cardapio-semana.jpg");
/* harmony import */ var _imgs_infos_horario_local_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imgs/infos-horario-local.png */ "./imgs/infos-horario-local.png");
/* harmony import */ var _imgs_infos_precos_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imgs/infos-precos.jpg */ "./imgs/infos-precos.jpg");
/* harmony import */ var _imgs_infos_formas_pagamento_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imgs/infos-formas-pagamento.png */ "./imgs/infos-formas-pagamento.png");





const home = () => {
  const home = document.createElement("div");
  home.classList.add("main");

  const intro = document.createElement("div");
  intro.classList.add("intro");
  const title = document.createElement("h1");
  title.textContent = "Seja bem-vindo ao";
  const subtitle = document.createElement("h2");
  subtitle.textContent = "Papoula Culinária Saudável 💚";
  intro.appendChild(title);
  intro.appendChild(subtitle);

  const feed = document.createElement("div");
  feed.classList.add("feed");

  const infoWrap = document.createElement("div");
  infoWrap.classList.add("info-wrap");
  const infoTitle = document.createElement("h4");
  infoTitle.textContent = "Confira o nosso cardápio da semana";
  const infoImg = document.createElement("img");
  infoImg.setAttribute("src", _imgs_infos_cardapio_semana_jpg__WEBPACK_IMPORTED_MODULE_0__);
  infoImg.setAttribute("alt", "cardapio");
  infoImg.setAttribute("width", "100%");
  infoWrap.appendChild(infoTitle);
  infoWrap.appendChild(infoImg);

  const infoWrap2 = document.createElement("div");
  infoWrap2.classList.add("info-wrap");
  const infoTitle2 = document.createElement("h4");
  infoTitle2.textContent = "Nossos horários de funcionamento";
  const infoImg2 = document.createElement("img");
  infoImg2.setAttribute("src", _imgs_infos_horario_local_png__WEBPACK_IMPORTED_MODULE_1__);
  infoImg2.setAttribute("alt", "horarios");
  infoImg2.setAttribute("width", "100%");
  infoWrap2.appendChild(infoTitle2);
  infoWrap2.appendChild(infoImg2);

  const infoWrap3 = document.createElement("div");
  infoWrap3.classList.add("info-wrap");
  const infoTitle3 = document.createElement("h4");
  infoTitle3.textContent = "Nossa política de preços";
  const infoImg3 = document.createElement("img");
  infoImg3.setAttribute("src", _imgs_infos_precos_jpg__WEBPACK_IMPORTED_MODULE_2__);
  infoImg3.setAttribute("alt", "preços");
  infoImg3.setAttribute("width", "100%");
  infoWrap3.appendChild(infoTitle3);
  infoWrap3.appendChild(infoImg3);

  const infoWrap4 = document.createElement("div");
  infoWrap4.classList.add("info-wrap");
  const infoTitle4 = document.createElement("h4");
  infoTitle4.textContent = "E as formas de pagamento";
  const infoImg4 = document.createElement("img");
  infoImg4.setAttribute("src", _imgs_infos_formas_pagamento_png__WEBPACK_IMPORTED_MODULE_3__);
  infoImg4.setAttribute("alt", "pagamento");
  infoImg4.setAttribute("width", "100%");
  infoWrap4.appendChild(infoTitle4);
  infoWrap4.appendChild(infoImg4);

  feed.appendChild(infoWrap);
  feed.appendChild(infoWrap2);
  feed.appendChild(infoWrap3);
  feed.appendChild(infoWrap4);

  home.appendChild(intro);
  home.appendChild(feed);

  return home;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);


/***/ }),

/***/ "./src/info.js":
/*!*********************!*\
  !*** ./src/info.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imgs_plaquinha_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imgs/plaquinha.png */ "./imgs/plaquinha.png");
/* harmony import */ var _imgs_adriana_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imgs/adriana.png */ "./imgs/adriana.png");
/* harmony import */ var _imgs_feira_organica_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imgs/feira-organica.png */ "./imgs/feira-organica.png");
/* harmony import */ var _imgs_equipe_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imgs/equipe.png */ "./imgs/equipe.png");
/* harmony import */ var _imgs_ato_politico_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../imgs/ato-politico.png */ "./imgs/ato-politico.png");






const info = () => {
  const info = document.createElement("div");
  info.classList.add("main");

  const intro = document.createElement("div");
  intro.classList.add("intro");
  const title = document.createElement("h1");
  title.textContent = "Sobre o Papoula";
  intro.appendChild(title);

  const feed = document.createElement("div");
  feed.classList.add("feed");

  const infoWrap = document.createElement("div");
  infoWrap.classList.add("info-wrap");
  const infoText = document.createElement("p");
  infoText.textContent =
    "Localizado na Parahyba, no estado da Paraíba, o Papoula foi fundado em 2018 pela chef Adriana Barcellos.";
  const infoFigure = document.createElement("figure");
  const infoImg = document.createElement("img");
  const infoCaption = document.createElement("figcaption");
  infoCaption.textContent = "Plaquinha na entrada do Papoula";
  infoImg.setAttribute("src", _imgs_plaquinha_png__WEBPACK_IMPORTED_MODULE_0__);
  infoImg.setAttribute("alt", "placa de entrada");
  infoImg.setAttribute("width", "100%");
  infoFigure.appendChild(infoImg);
  infoFigure.appendChild(infoCaption);
  infoWrap.appendChild(infoText);
  infoWrap.appendChild(infoFigure);

  const infoWrap2 = document.createElement("div");
  infoWrap2.classList.add("info-wrap");
  const infoFigure2 = document.createElement("figure");
  const infoImg2 = document.createElement("img");
  const infoCaption2 = document.createElement("figcaption");
  infoCaption2.textContent = "Adriana Barcellos, chef do Papoula";
  infoImg2.setAttribute("src", _imgs_adriana_png__WEBPACK_IMPORTED_MODULE_1__);
  infoImg2.setAttribute("alt", "Adriana Barcellos");
  infoImg2.setAttribute("width", "100%");
  infoFigure2.appendChild(infoImg2);
  infoFigure2.appendChild(infoCaption2);
  const infoImg3 = document.createElement("img");
  infoImg3.setAttribute("src", _imgs_ato_politico_png__WEBPACK_IMPORTED_MODULE_4__);
  infoImg3.setAttribute("alt", "bandeira");
  infoImg3.classList.add("micro");

  const infoText2 = document.createElement("p");
  const infoText3 = document.createElement("p");
  infoText2.textContent =
    "A história do restaurante começa com a própria Adriana, que desde muito jovem se interessou pela culinária vegetariana e vegana. " +
    "Ela se formou em Gastronomia em Manaus e, depois de trabalhar em vários restaurantes pelo Brasil, decidiu abrir seu próprio estabelecimento na cidade da Parahyba.";

  infoText3.textContent = `O nome "Papoula" foi escolhido por Adriana por ser uma flor que simboliza a paz, a tranquilidade e a beleza, valores que ela considera importantes na alimentação e na vida em geral.`;

  infoWrap2.appendChild(infoText2);
  infoWrap2.appendChild(infoFigure2);
  infoWrap2.appendChild(infoText3);
  infoWrap2.appendChild(infoImg3);

  const infoWrap3 = document.createElement("div");
  infoWrap3.classList.add("info-wrap");
  const infoText4 = document.createElement("p");
  infoText4.textContent =
    "A chef e sua equipe prezam pela qualidade dos ingredientes, que são sempre frescos e orgânicos, comprados em feiras de agricultura familiar. ";
  const infoFigure4 = document.createElement("figure");
  const infoImg4 = document.createElement("img");
  const infoCaption4 = document.createElement("figcaption");
  infoCaption4.textContent = "Vegetais orgânicos e sustentáveis";
  infoImg4.setAttribute("src", _imgs_feira_organica_png__WEBPACK_IMPORTED_MODULE_2__);
  infoImg4.setAttribute("alt", "Vegetais Orgânicos");
  infoImg4.setAttribute("width", "100%");
  infoFigure4.appendChild(infoImg4);
  infoFigure4.appendChild(infoCaption4);
  infoWrap3.appendChild(infoText4);
  infoWrap3.appendChild(infoFigure4);

  const infoWrap4 = document.createElement("div");
  infoWrap4.classList.add("info-wrap");
  const infoText5 = document.createElement("p");
  infoText5.textContent =
    "A equipe do Papoula também é formada por pessoas que acreditam na importância de uma alimentação anti-exploratória e anti-capitalista. " +
    "Os trabalhadores do Papoula trazem um senso de comunidade e de pertencimento para o restaurante, que é um espaço de troca de experiências e de conhecimento." +
    "Além de serem profissionais extremamente qualificados, trazendo um atendimento impecável junto com a melhor comida da cidade!";
  const infoFigure5 = document.createElement("figure");
  const infoImg5 = document.createElement("img");
  const infoCaption5 = document.createElement("figcaption");
  infoCaption5.textContent = "Equipe do Papoula";
  infoImg5.setAttribute("src", _imgs_equipe_png__WEBPACK_IMPORTED_MODULE_3__);
  infoImg5.setAttribute("alt", "Equipe do Papoula");
  infoImg5.setAttribute("width", "100%");
  infoFigure5.appendChild(infoImg5);
  infoFigure5.appendChild(infoCaption5);
  infoWrap4.appendChild(infoText5);
  infoWrap4.appendChild(infoFigure5);

  feed.appendChild(infoWrap);
  feed.appendChild(infoWrap2);
  feed.appendChild(infoWrap3);
  feed.appendChild(infoWrap4);

  info.appendChild(intro);
  info.appendChild(feed);

  return info;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (info);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imgs_prato_sandra_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imgs/prato-sandra.jpg */ "./imgs/prato-sandra.jpg");
/* harmony import */ var _imgs_prato_carol_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imgs/prato-carol.jpg */ "./imgs/prato-carol.jpg");
/* harmony import */ var _imgs_prato_daniela_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imgs/prato-daniela.jpg */ "./imgs/prato-daniela.jpg");
/* harmony import */ var _imgs_prato_nise_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imgs/prato-nise.jpg */ "./imgs/prato-nise.jpg");
/* harmony import */ var _imgs_prato_thallita_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../imgs/prato-thallita.jpg */ "./imgs/prato-thallita.jpg");
/* harmony import */ var _imgs_prato_tuira_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../imgs/prato-tuira.jpg */ "./imgs/prato-tuira.jpg");







const menu = () => {
  const menu = document.createElement("div");
  menu.classList.add("main");

  const intro = document.createElement("div");
  intro.classList.add("intro");
  const title = document.createElement("h1");
  title.textContent = "Confira nossos pratos";
  intro.appendChild(title);

  const feed = document.createElement("div");
  feed.classList.add("feed");

  const infoWrap = document.createElement("div");
  infoWrap.classList.add("info-wrap");
  const infoImg = document.createElement("img");
  infoImg.setAttribute("src", _imgs_prato_sandra_jpg__WEBPACK_IMPORTED_MODULE_0__);
  infoImg.setAttribute("alt", "prato-sandra");
  infoImg.setAttribute("width", "100%");
  infoWrap.appendChild(infoImg);

  const infoWrap2 = document.createElement("div");
  infoWrap2.classList.add("info-wrap");
  const infoImg2 = document.createElement("img");
  infoImg2.setAttribute("src", _imgs_prato_carol_jpg__WEBPACK_IMPORTED_MODULE_1__);
  infoImg2.setAttribute("alt", "prato-carol");
  infoImg2.setAttribute("width", "100%");
  infoWrap2.appendChild(infoImg2);

  const infoWrap3 = document.createElement("div");
  infoWrap3.classList.add("info-wrap");
  const infoImg3 = document.createElement("img");
  infoImg3.setAttribute("src", _imgs_prato_daniela_jpg__WEBPACK_IMPORTED_MODULE_2__);
  infoImg3.setAttribute("alt", "prato-daniela");
  infoImg3.setAttribute("width", "100%");
  infoWrap3.appendChild(infoImg3);

  const infoWrap4 = document.createElement("div");
  infoWrap4.classList.add("info-wrap");
  const infoImg4 = document.createElement("img");
  infoImg4.setAttribute("src", _imgs_prato_nise_jpg__WEBPACK_IMPORTED_MODULE_3__);
  infoImg4.setAttribute("alt", "prato-nise");
  infoImg4.setAttribute("width", "100%");
  infoWrap4.appendChild(infoImg4);

  const infoWrap5 = document.createElement("div");
  infoWrap5.classList.add("info-wrap");
  const infoImg5 = document.createElement("img");
  infoImg5.setAttribute("src", _imgs_prato_thallita_jpg__WEBPACK_IMPORTED_MODULE_4__);
  infoImg5.setAttribute("alt", "prato-thallita");
  infoImg5.setAttribute("width", "100%");
  infoWrap5.appendChild(infoImg5);

  const infoWrap6 = document.createElement("div");
  infoWrap6.classList.add("info-wrap");
  const infoImg6 = document.createElement("img");
  infoImg6.setAttribute("src", _imgs_prato_tuira_jpg__WEBPACK_IMPORTED_MODULE_5__);
  infoImg6.setAttribute("alt", "prato-tuira");
  infoImg6.setAttribute("width", "100%");
  infoWrap6.appendChild(infoImg6);

  feed.appendChild(infoWrap);
  feed.appendChild(infoWrap2);
  feed.appendChild(infoWrap3);
  feed.appendChild(infoWrap4);
  feed.appendChild(infoWrap5);
  feed.appendChild(infoWrap6);

  menu.appendChild(intro);
  menu.appendChild(feed);

  return menu;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);


/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const nav = () => {
  const navbar = document.createElement("div");
  navbar.classList.add("navbar");

  const home = document.createElement("span");
  home.setAttribute("id", "home");
  home.classList.add("material-symbols-outlined");
  home.textContent = "home";
  const menu = document.createElement("span");
  menu.setAttribute("id", "menu");
  menu.classList.add("material-symbols-outlined");
  menu.textContent = "restaurant_menu";
  const espaco = document.createElement("span");
  espaco.setAttribute("id", "espaco");
  espaco.classList.add("material-symbols-outlined");
  espaco.textContent = "storefront";
  const info = document.createElement("span");
  info.setAttribute("id", "info");
  info.classList.add("material-symbols-outlined");
  info.textContent = "info";

  navbar.appendChild(home);
  navbar.appendChild(menu);
  navbar.appendChild(espaco);
  navbar.appendChild(info);

  return navbar;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nav);


/***/ }),

/***/ "./imgs/adriana.png":
/*!**************************!*\
  !*** ./imgs/adriana.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2085bc4e75a4de05bb68.png";

/***/ }),

/***/ "./imgs/ato-politico.png":
/*!*******************************!*\
  !*** ./imgs/ato-politico.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf9eb427aaf615ef30da.png";

/***/ }),

/***/ "./imgs/background.png":
/*!*****************************!*\
  !*** ./imgs/background.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f262d52c1735cde93d39.png";

/***/ }),

/***/ "./imgs/equipe.png":
/*!*************************!*\
  !*** ./imgs/equipe.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "89f707fd7ba2bc678a57.png";

/***/ }),

/***/ "./imgs/espaco-area-cozinha.png":
/*!**************************************!*\
  !*** ./imgs/espaco-area-cozinha.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ad64fe2397c8d47de711.png";

/***/ }),

/***/ "./imgs/espaco-lotado.png":
/*!********************************!*\
  !*** ./imgs/espaco-lotado.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bb98f07bb6feaf4557d3.png";

/***/ }),

/***/ "./imgs/feijoada-cervejinha.png":
/*!**************************************!*\
  !*** ./imgs/feijoada-cervejinha.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35f420539f2ba6e52e9a.png";

/***/ }),

/***/ "./imgs/feira-organica.png":
/*!*********************************!*\
  !*** ./imgs/feira-organica.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "db0a3d865bb2406e1806.png";

/***/ }),

/***/ "./imgs/forro.png":
/*!************************!*\
  !*** ./imgs/forro.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d0f0989ca04c966ba25c.png";

/***/ }),

/***/ "./imgs/infos-cardapio-semana.jpg":
/*!****************************************!*\
  !*** ./imgs/infos-cardapio-semana.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "541e6d90fc05e4364ec9.jpg";

/***/ }),

/***/ "./imgs/infos-formas-pagamento.png":
/*!*****************************************!*\
  !*** ./imgs/infos-formas-pagamento.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f182258a31443a9598f2.png";

/***/ }),

/***/ "./imgs/infos-horario-local.png":
/*!**************************************!*\
  !*** ./imgs/infos-horario-local.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e496d8f1185dec06b802.png";

/***/ }),

/***/ "./imgs/infos-precos.jpg":
/*!*******************************!*\
  !*** ./imgs/infos-precos.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4bbe33da5e3c96f8146c.jpg";

/***/ }),

/***/ "./imgs/logo-sembg-vermelho.png":
/*!**************************************!*\
  !*** ./imgs/logo-sembg-vermelho.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e854dcf9bfaa10668eef.png";

/***/ }),

/***/ "./imgs/plaquinha.png":
/*!****************************!*\
  !*** ./imgs/plaquinha.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b8d95a05ebacc3db7f2d.png";

/***/ }),

/***/ "./imgs/prato-carol.jpg":
/*!******************************!*\
  !*** ./imgs/prato-carol.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a9d51ab573136e9de05f.jpg";

/***/ }),

/***/ "./imgs/prato-daniela.jpg":
/*!********************************!*\
  !*** ./imgs/prato-daniela.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d3505036d841229434fe.jpg";

/***/ }),

/***/ "./imgs/prato-nise.jpg":
/*!*****************************!*\
  !*** ./imgs/prato-nise.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d80c20b07df64b4e81e.jpg";

/***/ }),

/***/ "./imgs/prato-sandra.jpg":
/*!*******************************!*\
  !*** ./imgs/prato-sandra.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ffde2e63869e6a8e719b.jpg";

/***/ }),

/***/ "./imgs/prato-thallita.jpg":
/*!*********************************!*\
  !*** ./imgs/prato-thallita.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "42487feab2c6bb5c6356.jpg";

/***/ }),

/***/ "./imgs/prato-tuira.jpg":
/*!******************************!*\
  !*** ./imgs/prato-tuira.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c9471dafda615bffa277.jpg";

/***/ }),

/***/ "./imgs/sagui.png":
/*!************************!*\
  !*** ./imgs/sagui.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf4775d635ffc0313fb8.png";

/***/ }),

/***/ "./imgs/sandra-guimaraes1.png":
/*!************************************!*\
  !*** ./imgs/sandra-guimaraes1.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a2210669495cb5c0295a.png";

/***/ }),

/***/ "./imgs/workshop.png":
/*!***************************!*\
  !*** ./imgs/workshop.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f1be29d4dd0c046eaa79.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav.js */ "./src/nav.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info.js */ "./src/info.js");
/* harmony import */ var _espaco_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./espaco.js */ "./src/espaco.js");








const content = document.querySelector(".content");

content.appendChild((0,_nav_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
content.appendChild((0,_header_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_3__["default"])());

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const info = document.querySelector("#info");
const espaco = document.querySelector("#espaco");

home.addEventListener("click", () => {
  content.removeChild(document.querySelector(".main"));
  content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
});

menu.addEventListener("click", () => {
  content.removeChild(document.querySelector(".main"));
  content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_4__["default"])());
});

espaco.addEventListener("click", () => {
  content.removeChild(document.querySelector(".main"));
  content.appendChild((0,_espaco_js__WEBPACK_IMPORTED_MODULE_6__["default"])());
});

info.addEventListener("click", () => {
  content.removeChild(document.querySelector(".main"));
  content.appendChild((0,_info_js__WEBPACK_IMPORTED_MODULE_5__["default"])());
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNZO0FBQ047QUFDRTtBQUNBO0FBQ0E7QUFDSTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbURBQUc7QUFDdkIsb0JBQW9CLHNEQUFNO0FBQzFCLG9CQUFvQixvREFBSTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG9EQUFJO0FBQzFCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0RBQUk7QUFDMUIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixzREFBTTtBQUM1QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG9EQUFJO0FBQzFCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudGUvLi9zcmMvZXNwYWNvLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRlLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50ZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRlLy4vc3JjL2luZm8uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudGUvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50ZS8uL3NyYy9uYXYuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1ncy9iYWNrZ3JvdW5kLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gIC0tYmFja2dyb3VuZDogI2ZlZDY5OTtcXHJcXG4gIC0tdGV4dDogI2ZmZjtcXHJcXG4gIC0tcHJpbWFyeTogI2VhNWU2NztcXHJcXG4gIC0tc2Vjb25kYXJ5OiAjNjY5NTUzO1xcclxcbiAgLS10ZXJ0aWFyeTogIzgzYjc2ZDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkhhbmRsZWVcXFwiO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9oYW5kbGVlL3YxNC8tRjZ4ZmpCc0lTZzlhTWFrUG0zd293LndvZmYyKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxyXFxuICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLFxcclxcbiAgICBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsXFxyXFxuICAgIFUrRkVGRiwgVStGRkZEO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeSk7XFxyXFxufVxcclxcblxcclxcbi8qIGhpZGUgc2Nyb2xsYmFyIG9uIGVkZ2UqL1xcclxcblxcclxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGFuZGxlZVxcXCI7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuaDEsXFxyXFxuaDIge1xcclxcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuaDMsXFxyXFxuaDQge1xcclxcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgd2F2eTtcXHJcXG59XFxyXFxuXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcbiAgY29sb3I6IHZhcigtLXRlcnRpYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5tZW51IGEge1xcclxcbiAgcGFkZGluZzogMC42cmVtO1xcclxcbiAgYW5pbWF0aW9uOiAxcyBlYXNlLW91dCAwcyAxIHNsaWRlSW5Gcm9tUmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgaW1nIHtcXHJcXG4gIGFuaW1hdGlvbjogMXMgZWFzZS1vdXQgMHMgMSBzbGlkZUluRnJvbUxlZnQ7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgY29sb3I6IHZhcigtLXRlcnRpYXJ5KTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYTpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSB3YXZ5O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHotaW5kZXg6IDEwMDtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmludHJvLFxcclxcbi5mZWVkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZCBpbWcge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1pY3JvIHtcXHJcXG4gIG1heC13aWR0aDogMjAwcHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8td3JhcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmZpZ3VyZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZpZ2NhcHRpb24ge1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgYW5pbWF0aW9uOiAycyBlYXNlLW91dCAwcyAxIHpvb21Jbk91dDtcXHJcXG59XFxyXFxuXFxyXFxuaW1nOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNSkgMHB4IDBweCAxMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbGlkZUluRnJvbUxlZnQge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbGlkZUluRnJvbVJpZ2h0IHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyB6b29tSW5PdXQge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgfVxcclxcblxcclxcbiAgNTAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MTVweCkge1xcclxcbiAgLmZlZWQgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDcwMHB4O1xcclxcbiAgfVxcclxcblxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDhGQUE4RjtFQUM5Rjs7a0JBRWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBLDBCQUEwQjs7QUFFMUI7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseURBQTZDO0FBQy9DOztBQUVBOztFQUVFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBOztFQUVFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsK0JBQStCO0FBQ2pDOztBQUVBOztFQUVFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLHVDQUF1QztFQUN2QyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QiwyQ0FBMkM7RUFDM0MsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0U7SUFDRSw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7O0FBRUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1iYWNrZ3JvdW5kOiAjZmVkNjk5O1xcclxcbiAgLS10ZXh0OiAjZmZmO1xcclxcbiAgLS1wcmltYXJ5OiAjZWE1ZTY3O1xcclxcbiAgLS1zZWNvbmRhcnk6ICM2Njk1NTM7XFxyXFxuICAtLXRlcnRpYXJ5OiAjODNiNzZkO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGFuZGxlZVxcXCI7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2hhbmRsZWUvdjE0Ly1GNnhmakJzSVNnOWFNYWtQbTN3b3cud29mZjIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXHJcXG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsXFxyXFxuICAgIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSxcXHJcXG4gICAgVStGRUZGLCBVK0ZGRkQ7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgY29sb3I6IHZhcigtLXRlcnRpYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogaGlkZSBzY3JvbGxiYXIgb24gZWRnZSovXFxyXFxuXFxyXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDBweDtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJIYW5kbGVlXFxcIjtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1ncy9iYWNrZ3JvdW5kLnBuZyk7XFxyXFxufVxcclxcblxcclxcbmgxLFxcclxcbmgyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmgzLFxcclxcbmg0IHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIHdhdnk7XFxyXFxufVxcclxcblxcclxcbmg1LFxcclxcbmg2IHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeSk7XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciAubWVudSBhIHtcXHJcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXHJcXG4gIGFuaW1hdGlvbjogMXMgZWFzZS1vdXQgMHMgMSBzbGlkZUluRnJvbVJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIGltZyB7XFxyXFxuICBhbmltYXRpb246IDFzIGVhc2Utb3V0IDBzIDEgc2xpZGVJbkZyb21MZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeSk7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmE6aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgd2F2eTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pbnRybyxcXHJcXG4uZmVlZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWQgaW1nIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5taWNybyB7XFxyXFxuICBtYXgtd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5mZWVkIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5pbmZvLXdyYXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5maWd1cmUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5maWdjYXB0aW9uIHtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gIGFuaW1hdGlvbjogMnMgZWFzZS1vdXQgMHMgMSB6b29tSW5PdXQ7XFxyXFxufVxcclxcblxcclxcbmltZzpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjUpIDBweCAwcHggMTBweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGVJbkZyb21MZWZ0IHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGVJbkZyb21SaWdodCB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgem9vbUluT3V0IHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDUwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzE1cHgpIHtcXHJcXG4gIC5mZWVkIGltZyB7XFxyXFxuICAgIHdpZHRoOiA3MDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgc2FndWkgZnJvbSBcIi4uL2ltZ3Mvc2FndWkucG5nXCI7XHJcbmltcG9ydCBmb3JybyBmcm9tIFwiLi4vaW1ncy9mb3Jyby5wbmdcIjtcclxuaW1wb3J0IHdvcmtzaG9wIGZyb20gXCIuLi9pbWdzL3dvcmtzaG9wLnBuZ1wiO1xyXG5pbXBvcnQgc2FuZHJhR3VpbWFyYWVzIGZyb20gXCIuLi9pbWdzL3NhbmRyYS1ndWltYXJhZXMxLnBuZ1wiO1xyXG5pbXBvcnQgZmVpam9hZGEgZnJvbSBcIi4uL2ltZ3MvZmVpam9hZGEtY2VydmVqaW5oYS5wbmdcIjtcclxuaW1wb3J0IGVzcGFjb0xvdGFkbyBmcm9tIFwiLi4vaW1ncy9lc3BhY28tbG90YWRvLnBuZ1wiO1xyXG5pbXBvcnQgZXNwYWNvQ296aW5oYSBmcm9tIFwiLi4vaW1ncy9lc3BhY28tYXJlYS1jb3ppbmhhLnBuZ1wiO1xyXG5cclxuY29uc3QgZXNwYWNvID0gKCkgPT4ge1xyXG4gIGNvbnN0IGVzcGFjbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZXNwYWNvLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xyXG5cclxuICBjb25zdCBpbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaW50cm8uY2xhc3NMaXN0LmFkZChcImludHJvXCIpO1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJOb3NzbyBjYW50aW5ob1wiO1xyXG4gIGludHJvLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgY29uc3QgZmVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZmVlZC5jbGFzc0xpc3QuYWRkKFwiZmVlZFwiKTtcclxuXHJcbiAgY29uc3QgaW5mb1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGluZm9XcmFwLmNsYXNzTGlzdC5hZGQoXCJpbmZvLXdyYXBcIik7XHJcbiAgY29uc3QgaW5mb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBpbmZvVGV4dC50ZXh0Q29udGVudCA9XHJcbiAgICBcIkFvIGFyIGxpdnJlLCBzb2IgYSBzb21icmEgZGEgTWFuZ3VlaXJhLCBvIGVzcGHDp28gZG8gUGFwb3VsYSDDqSBjb252aWRhdGl2bywgYWNvbGhlZG9yIGUgdHJhbnF1aWxvLiBDb20gdW0gYW1iaWVudGUgYWdyYWTDoXZlbCBlIGlsdW1pbmFkbywgbyByZXN0YXVyYW50ZSBwb3NzdWkgdW1hIGRlY29yYcOnw6NvIHZpYnJhbnRlIGUgY2hlaWEgZGUgcGVyc29uYWxpZGFkZSwgY29tIHBhcmVkZXMgY29sb3JpZGFzLCBtZXNhcyBkZSBtYWRlaXJhIHLDunN0aWNhIGUgcGxhbnRhcyBwb3IgdG9kYSBwYXJ0ZS4gUGVyZmVpdG8gcGFyYSB1bWEgcmVmZWnDp8OjbyB0cmFucXVpbGEgb3UgdW0gZW5jb250cm8gY29tIGFtaWdvcyBlIGZhbWlsaWFyZXMuXCI7XHJcblxyXG4gIGNvbnN0IGluZm9GaWd1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlndXJlXCIpO1xyXG4gIGNvbnN0IGluZm9JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGNvbnN0IGluZm9DYXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ2NhcHRpb25cIik7XHJcbiAgaW5mb0NhcHRpb24udGV4dENvbnRlbnQgPSBcIkVzcGHDp28gZG8gUGFwb3VsYVwiO1xyXG4gIGluZm9JbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGVzcGFjb0NvemluaGEpO1xyXG4gIGluZm9JbWcuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiRXNwYcOnbyBkbyBQYXBvdWxhLlwiKTtcclxuICBpbmZvSW1nLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMTAwJVwiKTtcclxuICBpbmZvRmlndXJlLmFwcGVuZENoaWxkKGluZm9JbWcpO1xyXG4gIGluZm9GaWd1cmUuYXBwZW5kQ2hpbGQoaW5mb0NhcHRpb24pO1xyXG5cclxuICBjb25zdCBpbmZvRmlndXJlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWd1cmVcIik7XHJcbiAgY29uc3QgaW5mb0ltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGNvbnN0IGluZm9DYXB0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWdjYXB0aW9uXCIpO1xyXG4gIGluZm9DYXB0aW9uMi50ZXh0Q29udGVudCA9IFwiTyBQYXBvdWxhIGNvbSBjYXNhIGNoZWlhLlwiO1xyXG4gIGluZm9JbWcyLnNldEF0dHJpYnV0ZShcInNyY1wiLCBlc3BhY29Mb3RhZG8pO1xyXG4gIGluZm9JbWcyLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkVzcGHDp28gbG90YWRvXCIpO1xyXG4gIGluZm9JbWcyLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMTAwJVwiKTtcclxuICBpbmZvRmlndXJlMi5hcHBlbmRDaGlsZChpbmZvSW1nMik7XHJcbiAgaW5mb0ZpZ3VyZTIuYXBwZW5kQ2hpbGQoaW5mb0NhcHRpb24yKTtcclxuXHJcbiAgY29uc3QgaW5mb0ZpZ3VyZVMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlndXJlXCIpO1xyXG4gIGNvbnN0IGluZm9JbWdTID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBjb25zdCBpbmZvQ2FwdGlvblMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlnY2FwdGlvblwiKTtcclxuICBpbmZvQ2FwdGlvblMudGV4dENvbnRlbnQgPSBcIlNhZ3VpemluaG8gc2UgYWxpbWVudGFuZG8gbm8gcMOpIGRlIG1hbmdhLlwiO1xyXG4gIGluZm9JbWdTLnNldEF0dHJpYnV0ZShcInNyY1wiLCBzYWd1aSk7XHJcbiAgaW5mb0ltZ1Muc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiU2FndWl6aW5ob1wiKTtcclxuICBpbmZvSW1nUy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjEwMCVcIik7XHJcbiAgaW5mb0ZpZ3VyZVMuYXBwZW5kQ2hpbGQoaW5mb0ltZ1MpO1xyXG4gIGluZm9GaWd1cmVTLmFwcGVuZENoaWxkKGluZm9DYXB0aW9uUyk7XHJcblxyXG4gIGluZm9XcmFwLmFwcGVuZENoaWxkKGluZm9UZXh0KTtcclxuICBpbmZvV3JhcC5hcHBlbmRDaGlsZChpbmZvRmlndXJlKTtcclxuICBpbmZvV3JhcC5hcHBlbmRDaGlsZChpbmZvRmlndXJlMik7XHJcbiAgaW5mb1dyYXAuYXBwZW5kQ2hpbGQoaW5mb0ZpZ3VyZVMpO1xyXG5cclxuICBjb25zdCBpbmZvV3JhcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGluZm9XcmFwMi5jbGFzc0xpc3QuYWRkKFwiaW5mby13cmFwXCIpO1xyXG4gIGNvbnN0IGluZm9UZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGluZm9UZXh0Mi50ZXh0Q29udGVudCA9XHJcbiAgICBcIk8gUGFwb3VsYSDDqSB1bSByZXN0YXVyYW50ZSBxdWUgb2ZlcmVjZSBtYWlzIGRvIHF1ZSBhcGVuYXMgY29taWRhIHZlZ2FuYSBkZWxpY2lvc2EuIE8gbG9jYWwgdGFtYsOpbSBwcm9tb3ZlIHVtYSBzw6lyaWUgZGUgZXZlbnRvcyBxdWUgdmlzYW0gZWR1Y2FyIGUgZW50cmV0ZXIgc2V1cyBjbGllbnRlcy4gVW0gZXhlbXBsbyDDqSBvIHdvcmtzaG9wIGRhIGluc3BpcmFkb3JhIFNhbmRyYSBHdWltYXLDo2VzLCBvbmRlIG9zIHBhcnRpY2lwYW50ZXMgYXByZW5kZXJhbSBhIHByZXBhcmFyIHNvYnJlbWVzYXMgdmVnYW5hcyBkZWxpY2lvc2FzIGNvbSBpbmdyZWRpZW50ZXMgbmF0dXJhaXMuXCI7XHJcbiAgY29uc3QgaW5mb0ZpZ3VyZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlndXJlXCIpO1xyXG4gIGNvbnN0IGluZm9JbWczID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBjb25zdCBpbmZvQ2FwdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlnY2FwdGlvblwiKTtcclxuICBpbmZvQ2FwdGlvbjMudGV4dENvbnRlbnQgPVxyXG4gICAgXCJTYW5kcmEgR3VpbWFyw6Nlcy4gUG90aWd1YXIsIG1pbGl0YW50ZSBlIGF1dG9yYSBkbyBibG9nIHBhcGFjYXBpbS5vcmdcIjtcclxuICBpbmZvSW1nMy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgc2FuZHJhR3VpbWFyYWVzKTtcclxuICBpbmZvSW1nMy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJTYW5kcmEgR3VpbWFyw6Nlc1wiKTtcclxuICBpbmZvSW1nMy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjEwMCVcIik7XHJcbiAgaW5mb0ZpZ3VyZTMuYXBwZW5kQ2hpbGQoaW5mb0ltZzMpO1xyXG4gIGluZm9GaWd1cmUzLmFwcGVuZENoaWxkKGluZm9DYXB0aW9uMyk7XHJcblxyXG4gIGNvbnN0IGluZm9UZXh0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGluZm9UZXh0My50ZXh0Q29udGVudCA9IGBBbMOpbSBkaXNzbywgYSBjaGVmIEFkcmlhbmEgQmFyY2VsbG9zIGrDoSBvcmdhbml6b3UgdW0gd29ya3Nob3AgZGUgY2VpYSBkZSBOYXRhbCB2ZWdhbmEsIG9uZGUgb3MgcGFydGljaXBhbnRlcyBwdWRlcmFtIGFwcmVuZGVyIGEgcHJlcGFyYXIgdW1hIGNlaWEgZGUgTmF0YWwgc2VtIGNhcm5lIG91IHByb2R1dG9zIGRlIG9yaWdlbSBhbmltYWwuIE8gcmVzdGF1cmFudGUgdGFtYsOpbSBwcm9tb3ZlIGV2ZW50b3MgZmVtaW5pc3RhcywgY29tbyBvIFwiRmVtaW5pc21vIGUgVmVnYW5pc21vXCIsIG9uZGUgb3MgcGFydGljaXBhbnRlcyBkaXNjdXRlbSBhIGludGVyc2Vjw6fDo28gZGVzc2VzIGRvaXMgbW92aW1lbnRvcy5gO1xyXG4gIGNvbnN0IGluZm9GaWd1cmU0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ3VyZVwiKTtcclxuICBjb25zdCBpbmZvSW1nNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgY29uc3QgaW5mb0NhcHRpb240ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ2NhcHRpb25cIik7XHJcbiAgaW5mb0NhcHRpb240LnRleHRDb250ZW50ID0gXCJDb3ppbmhhIGUgY29udmVyc2EsIG5vIFBhcG91bGEuXCI7XHJcbiAgaW5mb0ltZzQuc2V0QXR0cmlidXRlKFwic3JjXCIsIHdvcmtzaG9wKTtcclxuICBpbmZvSW1nNC5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJXb3Jrc2hvcFwiKTtcclxuICBpbmZvSW1nNC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjEwMCVcIik7XHJcbiAgaW5mb0ZpZ3VyZTQuYXBwZW5kQ2hpbGQoaW5mb0ltZzQpO1xyXG4gIGluZm9GaWd1cmU0LmFwcGVuZENoaWxkKGluZm9DYXB0aW9uNCk7XHJcblxyXG4gIGNvbnN0IGluZm9UZXh0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGluZm9UZXh0NC50ZXh0Q29udGVudCA9IGBPIFBhcG91bGEgYWluZGEgb2ZlcmVjZSBldmVudG9zIG11c2ljYWlzLCBjb21vIGEgZmVpam9hZGEgY29tIGZvcnLDsyBkbyBFc2N1cmluaG8sIGFsw6ltIGRlIHJlY2ViZXIgb3V0cmFzIGJhbmRhcyBxdWUgdG9jYW0gZGl2ZXJzb3MgZ8OqbmVyb3MgbXVzaWNhaXMuIFRvZG9zIGVzc2VzIGV2ZW50b3Mgc8OjbyB1bWEgw7N0aW1hIG1hbmVpcmEgZGUgYWdyYWRhciBhb3MgY2xpZW50ZXMgZSBlZHVjw6EtbG9zIHNvYnJlIGEgY3VsaW7DoXJpYSB2ZWdhbmEgZSB2ZWdldGFyaWFuYSwgYmVtIGNvbW8gZm9ybmVjZXIgdW0gZXNwYcOnbyBkZSBlbmNvbnRybyBlIGRpdmVyc8OjbyBwYXJhIGEgY29tdW5pZGFkZSBsb2NhbC5gO1xyXG4gIGNvbnN0IGluZm9GaWd1cmU1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ3VyZVwiKTtcclxuICBjb25zdCBpbmZvSW1nNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgY29uc3QgaW5mb0NhcHRpb241ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ2NhcHRpb25cIik7XHJcbiAgaW5mb0NhcHRpb241LnRleHRDb250ZW50ID0gXCJGZWlqb2FkYSBjb20gY2VydmVqaW5oYS5cIjtcclxuICBpbmZvSW1nNS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgZmVpam9hZGEpO1xyXG4gIGluZm9JbWc1LnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkZlaWpvYWRhXCIpO1xyXG4gIGluZm9JbWc1LnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMTAwJVwiKTtcclxuXHJcbiAgaW5mb0ZpZ3VyZTUuYXBwZW5kQ2hpbGQoaW5mb0ltZzUpO1xyXG4gIGluZm9GaWd1cmU1LmFwcGVuZENoaWxkKGluZm9DYXB0aW9uNSk7XHJcblxyXG4gIGNvbnN0IGluZm9GaWd1cmU2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ3VyZVwiKTtcclxuICBjb25zdCBpbmZvSW1nNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgY29uc3QgaW5mb0NhcHRpb242ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ2NhcHRpb25cIik7XHJcbiAgaW5mb0NhcHRpb242LnRleHRDb250ZW50ID0gXCJQZXNzb2FzIGRhbsOnYW5kbyBhbyBzb20gZG8gRm9ycsOzIGRvIEVzY3J1aW5oby5cIjtcclxuICBpbmZvSW1nNi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgZm9ycm8pO1xyXG4gIGluZm9JbWc2LnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkZvcnLDs1wiKTtcclxuICBpbmZvSW1nNi5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjEwMCVcIik7XHJcbiAgaW5mb0ZpZ3VyZTYuYXBwZW5kQ2hpbGQoaW5mb0ltZzYpO1xyXG4gIGluZm9GaWd1cmU2LmFwcGVuZENoaWxkKGluZm9DYXB0aW9uNik7XHJcblxyXG4gIGluZm9XcmFwMi5hcHBlbmRDaGlsZChpbmZvVGV4dDIpO1xyXG4gIGluZm9XcmFwMi5hcHBlbmRDaGlsZChpbmZvRmlndXJlMyk7XHJcbiAgaW5mb1dyYXAyLmFwcGVuZENoaWxkKGluZm9UZXh0Myk7XHJcbiAgaW5mb1dyYXAyLmFwcGVuZENoaWxkKGluZm9GaWd1cmU0KTtcclxuICBpbmZvV3JhcDIuYXBwZW5kQ2hpbGQoaW5mb1RleHQ0KTtcclxuICBpbmZvV3JhcDIuYXBwZW5kQ2hpbGQoaW5mb0ZpZ3VyZTUpO1xyXG4gIGluZm9XcmFwMi5hcHBlbmRDaGlsZChpbmZvRmlndXJlNik7XHJcblxyXG4gIGZlZWQuYXBwZW5kQ2hpbGQoaW5mb1dyYXApO1xyXG4gIGZlZWQuYXBwZW5kQ2hpbGQoaW5mb1dyYXAyKTtcclxuXHJcbiAgZXNwYWNvLmFwcGVuZENoaWxkKGludHJvKTtcclxuICBlc3BhY28uYXBwZW5kQ2hpbGQoZmVlZCk7XHJcblxyXG4gIHJldHVybiBlc3BhY287XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBlc3BhY287XHJcbiIsImltcG9ydCBsb2dvIGZyb20gXCIuLi9pbWdzL2xvZ28tc2VtYmctdmVybWVsaG8ucG5nXCI7XHJcblxyXG5jb25zdCBoZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcclxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGltZy5zcmMgPSBsb2dvO1xyXG4gIGltZy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJMb2dvXCIpO1xyXG4gIGltZy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjYwcHhcIik7XHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGltZyk7XHJcblxyXG4gIC8vYWRkIG1lbnUgd2l0aCBpbnN0YWdyYW0gYW5kIGdvb2dsZSBtYXBzIGxpbmtzXHJcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcclxuICBjb25zdCBpbnN0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGluc3RhLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3BhcG91bGF2ZWcvXCIpO1xyXG4gIGluc3RhLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcclxuICBpbnN0YS5jbGFzc0xpc3QuYWRkKFwiZmFcIik7XHJcbiAgaW5zdGEuY2xhc3NMaXN0LmFkZChcImZhLWluc3RhZ3JhbVwiKTtcclxuICBjb25zdCBtYXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgbWFwcy5zZXRBdHRyaWJ1dGUoXHJcbiAgICBcImhyZWZcIixcclxuICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3BsYWNlL1BhcG91bGErQ3VsaW4lQzMlQTFyaWErU2F1ZCVDMyVBMXZlbC9ALTcuMTIwMTE0OSwtMzQuODM4MTc3MywxN3ovZGF0YT0hM20xITRiMSE0bTYhM201ITFzMHg3YWNkZDM2NjYyNTA3MDc6MHg3YTRiMzcwODA1MmFiMGE4IThtMiEzZC03LjEyMDExNDkhNGQtMzQuODM4MTc3MyExNnMlMkZnJTJGMTFmNTRqM181cFwiXHJcbiAgKTtcclxuICBtYXBzLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcclxuICBtYXBzLmNsYXNzTGlzdC5hZGQoXCJmYVwiKTtcclxuICBtYXBzLmNsYXNzTGlzdC5hZGQoXCJmYS1tYXAtbWFya2VyXCIpO1xyXG4gIG1lbnUuYXBwZW5kQ2hpbGQoaW5zdGEpO1xyXG4gIG1lbnUuYXBwZW5kQ2hpbGQobWFwcyk7XHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG1lbnUpO1xyXG5cclxuICByZXR1cm4gaGVhZGVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyO1xyXG4iLCJpbXBvcnQgY2FyZGFwaW8gZnJvbSBcIi4uL2ltZ3MvaW5mb3MtY2FyZGFwaW8tc2VtYW5hLmpwZ1wiO1xyXG5pbXBvcnQgaG9yYXJpbyBmcm9tIFwiLi4vaW1ncy9pbmZvcy1ob3JhcmlvLWxvY2FsLnBuZ1wiO1xyXG5pbXBvcnQgcHJlY29zIGZyb20gXCIuLi9pbWdzL2luZm9zLXByZWNvcy5qcGdcIjtcclxuaW1wb3J0IHBhZ2FtZW50byBmcm9tIFwiLi4vaW1ncy9pbmZvcy1mb3JtYXMtcGFnYW1lbnRvLnBuZ1wiO1xyXG5cclxuY29uc3QgaG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBob21lLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xyXG5cclxuICBjb25zdCBpbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaW50cm8uY2xhc3NMaXN0LmFkZChcImludHJvXCIpO1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJTZWphIGJlbS12aW5kbyBhb1wiO1xyXG4gIGNvbnN0IHN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIHN1YnRpdGxlLnRleHRDb250ZW50ID0gXCJQYXBvdWxhIEN1bGluw6FyaWEgU2F1ZMOhdmVsIPCfkppcIjtcclxuICBpbnRyby5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgaW50cm8uYXBwZW5kQ2hpbGQoc3VidGl0bGUpO1xyXG5cclxuICBjb25zdCBmZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBmZWVkLmNsYXNzTGlzdC5hZGQoXCJmZWVkXCIpO1xyXG5cclxuICBjb25zdCBpbmZvV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaW5mb1dyYXAuY2xhc3NMaXN0LmFkZChcImluZm8td3JhcFwiKTtcclxuICBjb25zdCBpbmZvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgaW5mb1RpdGxlLnRleHRDb250ZW50ID0gXCJDb25maXJhIG8gbm9zc28gY2FyZMOhcGlvIGRhIHNlbWFuYVwiO1xyXG4gIGNvbnN0IGluZm9JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGluZm9JbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGNhcmRhcGlvKTtcclxuICBpbmZvSW1nLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcImNhcmRhcGlvXCIpO1xyXG4gIGluZm9JbWcuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxMDAlXCIpO1xyXG4gIGluZm9XcmFwLmFwcGVuZENoaWxkKGluZm9UaXRsZSk7XHJcbiAgaW5mb1dyYXAuYXBwZW5kQ2hpbGQoaW5mb0ltZyk7XHJcblxyXG4gIGNvbnN0IGluZm9XcmFwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaW5mb1dyYXAyLmNsYXNzTGlzdC5hZGQoXCJpbmZvLXdyYXBcIik7XHJcbiAgY29uc3QgaW5mb1RpdGxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICBpbmZvVGl0bGUyLnRleHRDb250ZW50ID0gXCJOb3Nzb3MgaG9yw6FyaW9zIGRlIGZ1bmNpb25hbWVudG9cIjtcclxuICBjb25zdCBpbmZvSW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgaW5mb0ltZzIuc2V0QXR0cmlidXRlKFwic3JjXCIsIGhvcmFyaW8pO1xyXG4gIGluZm9JbWcyLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcImhvcmFyaW9zXCIpO1xyXG4gIGluZm9JbWcyLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMTAwJVwiKTtcclxuICBpbmZvV3JhcDIuYXBwZW5kQ2hpbGQoaW5mb1RpdGxlMik7XHJcbiAgaW5mb1dyYXAyLmFwcGVuZENoaWxkKGluZm9JbWcyKTtcclxuXHJcbiAgY29uc3QgaW5mb1dyYXAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBpbmZvV3JhcDMuY2xhc3NMaXN0LmFkZChcImluZm8td3JhcFwiKTtcclxuICBjb25zdCBpbmZvVGl0bGUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gIGluZm9UaXRsZTMudGV4dENvbnRlbnQgPSBcIk5vc3NhIHBvbMOtdGljYSBkZSBwcmXDp29zXCI7XHJcbiAgY29uc3QgaW5mb0ltZzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGluZm9JbWczLnNldEF0dHJpYnV0ZShcInNyY1wiLCBwcmVjb3MpO1xyXG4gIGluZm9JbWczLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcInByZcOnb3NcIik7XHJcbiAgaW5mb0ltZzMuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxMDAlXCIpO1xyXG4gIGluZm9XcmFwMy5hcHBlbmRDaGlsZChpbmZvVGl0bGUzKTtcclxuICBpbmZvV3JhcDMuYXBwZW5kQ2hpbGQoaW5mb0ltZzMpO1xyXG5cclxuICBjb25zdCBpbmZvV3JhcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGluZm9XcmFwNC5jbGFzc0xpc3QuYWRkKFwiaW5mby13cmFwXCIpO1xyXG4gIGNvbnN0IGluZm9UaXRsZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgaW5mb1RpdGxlNC50ZXh0Q29udGVudCA9IFwiRSBhcyBmb3JtYXMgZGUgcGFnYW1lbnRvXCI7XHJcbiAgY29uc3QgaW5mb0ltZzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGluZm9JbWc0LnNldEF0dHJpYnV0ZShcInNyY1wiLCBwYWdhbWVudG8pO1xyXG4gIGluZm9JbWc0LnNldEF0dHJpYnV0ZShcImFsdFwiLCBcInBhZ2FtZW50b1wiKTtcclxuICBpbmZvSW1nNC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjEwMCVcIik7XHJcbiAgaW5mb1dyYXA0LmFwcGVuZENoaWxkKGluZm9UaXRsZTQpO1xyXG4gIGluZm9XcmFwNC5hcHBlbmRDaGlsZChpbmZvSW1nNCk7XHJcblxyXG4gIGZlZWQuYXBwZW5kQ2hpbGQoaW5mb1dyYXApO1xyXG4gIGZlZWQuYXBwZW5kQ2hpbGQoaW5mb1dyYXAyKTtcclxuICBmZWVkLmFwcGVuZENoaWxkKGluZm9XcmFwMyk7XHJcbiAgZmVlZC5hcHBlbmRDaGlsZChpbmZvV3JhcDQpO1xyXG5cclxuICBob21lLmFwcGVuZENoaWxkKGludHJvKTtcclxuICBob21lLmFwcGVuZENoaWxkKGZlZWQpO1xyXG5cclxuICByZXR1cm4gaG9tZTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbWU7XHJcbiIsImltcG9ydCBwbGFxdWluaGEgZnJvbSBcIi4uL2ltZ3MvcGxhcXVpbmhhLnBuZ1wiO1xyXG5pbXBvcnQgYWRyaWFuYSBmcm9tIFwiLi4vaW1ncy9hZHJpYW5hLnBuZ1wiO1xyXG5pbXBvcnQgdmVnZXRhaXMgZnJvbSBcIi4uL2ltZ3MvZmVpcmEtb3JnYW5pY2EucG5nXCI7XHJcbmltcG9ydCBlcXVpcGUgZnJvbSBcIi4uL2ltZ3MvZXF1aXBlLnBuZ1wiO1xyXG5pbXBvcnQgYXRvUG9saXRpY28gZnJvbSBcIi4uL2ltZ3MvYXRvLXBvbGl0aWNvLnBuZ1wiO1xyXG5cclxuY29uc3QgaW5mbyA9ICgpID0+IHtcclxuICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBpbmZvLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xyXG5cclxuICBjb25zdCBpbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaW50cm8uY2xhc3NMaXN0LmFkZChcImludHJvXCIpO1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJTb2JyZSBvIFBhcG91bGFcIjtcclxuICBpbnRyby5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG4gIGNvbnN0IGZlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZlZWQuY2xhc3NMaXN0LmFkZChcImZlZWRcIik7XHJcblxyXG4gIGNvbnN0IGluZm9XcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBpbmZvV3JhcC5jbGFzc0xpc3QuYWRkKFwiaW5mby13cmFwXCIpO1xyXG4gIGNvbnN0IGluZm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgaW5mb1RleHQudGV4dENvbnRlbnQgPVxyXG4gICAgXCJMb2NhbGl6YWRvIG5hIFBhcmFoeWJhLCBubyBlc3RhZG8gZGEgUGFyYcOtYmEsIG8gUGFwb3VsYSBmb2kgZnVuZGFkbyBlbSAyMDE4IHBlbGEgY2hlZiBBZHJpYW5hIEJhcmNlbGxvcy5cIjtcclxuICBjb25zdCBpbmZvRmlndXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ3VyZVwiKTtcclxuICBjb25zdCBpbmZvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBjb25zdCBpbmZvQ2FwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWdjYXB0aW9uXCIpO1xyXG4gIGluZm9DYXB0aW9uLnRleHRDb250ZW50ID0gXCJQbGFxdWluaGEgbmEgZW50cmFkYSBkbyBQYXBvdWxhXCI7XHJcbiAgaW5mb0ltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgcGxhcXVpbmhhKTtcclxuICBpbmZvSW1nLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcInBsYWNhIGRlIGVudHJhZGFcIik7XHJcbiAgaW5mb0ltZy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjEwMCVcIik7XHJcbiAgaW5mb0ZpZ3VyZS5hcHBlbmRDaGlsZChpbmZvSW1nKTtcclxuICBpbmZvRmlndXJlLmFwcGVuZENoaWxkKGluZm9DYXB0aW9uKTtcclxuICBpbmZvV3JhcC5hcHBlbmRDaGlsZChpbmZvVGV4dCk7XHJcbiAgaW5mb1dyYXAuYXBwZW5kQ2hpbGQoaW5mb0ZpZ3VyZSk7XHJcblxyXG4gIGNvbnN0IGluZm9XcmFwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaW5mb1dyYXAyLmNsYXNzTGlzdC5hZGQoXCJpbmZvLXdyYXBcIik7XHJcbiAgY29uc3QgaW5mb0ZpZ3VyZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlndXJlXCIpO1xyXG4gIGNvbnN0IGluZm9JbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBjb25zdCBpbmZvQ2FwdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlnY2FwdGlvblwiKTtcclxuICBpbmZvQ2FwdGlvbjIudGV4dENvbnRlbnQgPSBcIkFkcmlhbmEgQmFyY2VsbG9zLCBjaGVmIGRvIFBhcG91bGFcIjtcclxuICBpbmZvSW1nMi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYWRyaWFuYSk7XHJcbiAgaW5mb0ltZzIuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiQWRyaWFuYSBCYXJjZWxsb3NcIik7XHJcbiAgaW5mb0ltZzIuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxMDAlXCIpO1xyXG4gIGluZm9GaWd1cmUyLmFwcGVuZENoaWxkKGluZm9JbWcyKTtcclxuICBpbmZvRmlndXJlMi5hcHBlbmRDaGlsZChpbmZvQ2FwdGlvbjIpO1xyXG4gIGNvbnN0IGluZm9JbWczID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBpbmZvSW1nMy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYXRvUG9saXRpY28pO1xyXG4gIGluZm9JbWczLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcImJhbmRlaXJhXCIpO1xyXG4gIGluZm9JbWczLmNsYXNzTGlzdC5hZGQoXCJtaWNyb1wiKTtcclxuXHJcbiAgY29uc3QgaW5mb1RleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29uc3QgaW5mb1RleHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgaW5mb1RleHQyLnRleHRDb250ZW50ID1cclxuICAgIFwiQSBoaXN0w7NyaWEgZG8gcmVzdGF1cmFudGUgY29tZcOnYSBjb20gYSBwcsOzcHJpYSBBZHJpYW5hLCBxdWUgZGVzZGUgbXVpdG8gam92ZW0gc2UgaW50ZXJlc3NvdSBwZWxhIGN1bGluw6FyaWEgdmVnZXRhcmlhbmEgZSB2ZWdhbmEuIFwiICtcclxuICAgIFwiRWxhIHNlIGZvcm1vdSBlbSBHYXN0cm9ub21pYSBlbSBNYW5hdXMgZSwgZGVwb2lzIGRlIHRyYWJhbGhhciBlbSB2w6FyaW9zIHJlc3RhdXJhbnRlcyBwZWxvIEJyYXNpbCwgZGVjaWRpdSBhYnJpciBzZXUgcHLDs3ByaW8gZXN0YWJlbGVjaW1lbnRvIG5hIGNpZGFkZSBkYSBQYXJhaHliYS5cIjtcclxuXHJcbiAgaW5mb1RleHQzLnRleHRDb250ZW50ID0gYE8gbm9tZSBcIlBhcG91bGFcIiBmb2kgZXNjb2xoaWRvIHBvciBBZHJpYW5hIHBvciBzZXIgdW1hIGZsb3IgcXVlIHNpbWJvbGl6YSBhIHBheiwgYSB0cmFucXVpbGlkYWRlIGUgYSBiZWxlemEsIHZhbG9yZXMgcXVlIGVsYSBjb25zaWRlcmEgaW1wb3J0YW50ZXMgbmEgYWxpbWVudGHDp8OjbyBlIG5hIHZpZGEgZW0gZ2VyYWwuYDtcclxuXHJcbiAgaW5mb1dyYXAyLmFwcGVuZENoaWxkKGluZm9UZXh0Mik7XHJcbiAgaW5mb1dyYXAyLmFwcGVuZENoaWxkKGluZm9GaWd1cmUyKTtcclxuICBpbmZvV3JhcDIuYXBwZW5kQ2hpbGQoaW5mb1RleHQzKTtcclxuICBpbmZvV3JhcDIuYXBwZW5kQ2hpbGQoaW5mb0ltZzMpO1xyXG5cclxuICBjb25zdCBpbmZvV3JhcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGluZm9XcmFwMy5jbGFzc0xpc3QuYWRkKFwiaW5mby13cmFwXCIpO1xyXG4gIGNvbnN0IGluZm9UZXh0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGluZm9UZXh0NC50ZXh0Q29udGVudCA9XHJcbiAgICBcIkEgY2hlZiBlIHN1YSBlcXVpcGUgcHJlemFtIHBlbGEgcXVhbGlkYWRlIGRvcyBpbmdyZWRpZW50ZXMsIHF1ZSBzw6NvIHNlbXByZSBmcmVzY29zIGUgb3Jnw6JuaWNvcywgY29tcHJhZG9zIGVtIGZlaXJhcyBkZSBhZ3JpY3VsdHVyYSBmYW1pbGlhci4gXCI7XHJcbiAgY29uc3QgaW5mb0ZpZ3VyZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlndXJlXCIpO1xyXG4gIGNvbnN0IGluZm9JbWc0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBjb25zdCBpbmZvQ2FwdGlvbjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlnY2FwdGlvblwiKTtcclxuICBpbmZvQ2FwdGlvbjQudGV4dENvbnRlbnQgPSBcIlZlZ2V0YWlzIG9yZ8Oibmljb3MgZSBzdXN0ZW50w6F2ZWlzXCI7XHJcbiAgaW5mb0ltZzQuc2V0QXR0cmlidXRlKFwic3JjXCIsIHZlZ2V0YWlzKTtcclxuICBpbmZvSW1nNC5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJWZWdldGFpcyBPcmfDom5pY29zXCIpO1xyXG4gIGluZm9JbWc0LnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMTAwJVwiKTtcclxuICBpbmZvRmlndXJlNC5hcHBlbmRDaGlsZChpbmZvSW1nNCk7XHJcbiAgaW5mb0ZpZ3VyZTQuYXBwZW5kQ2hpbGQoaW5mb0NhcHRpb240KTtcclxuICBpbmZvV3JhcDMuYXBwZW5kQ2hpbGQoaW5mb1RleHQ0KTtcclxuICBpbmZvV3JhcDMuYXBwZW5kQ2hpbGQoaW5mb0ZpZ3VyZTQpO1xyXG5cclxuICBjb25zdCBpbmZvV3JhcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGluZm9XcmFwNC5jbGFzc0xpc3QuYWRkKFwiaW5mby13cmFwXCIpO1xyXG4gIGNvbnN0IGluZm9UZXh0NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGluZm9UZXh0NS50ZXh0Q29udGVudCA9XHJcbiAgICBcIkEgZXF1aXBlIGRvIFBhcG91bGEgdGFtYsOpbSDDqSBmb3JtYWRhIHBvciBwZXNzb2FzIHF1ZSBhY3JlZGl0YW0gbmEgaW1wb3J0w6JuY2lhIGRlIHVtYSBhbGltZW50YcOnw6NvIGFudGktZXhwbG9yYXTDs3JpYSBlIGFudGktY2FwaXRhbGlzdGEuIFwiICtcclxuICAgIFwiT3MgdHJhYmFsaGFkb3JlcyBkbyBQYXBvdWxhIHRyYXplbSB1bSBzZW5zbyBkZSBjb211bmlkYWRlIGUgZGUgcGVydGVuY2ltZW50byBwYXJhIG8gcmVzdGF1cmFudGUsIHF1ZSDDqSB1bSBlc3Bhw6dvIGRlIHRyb2NhIGRlIGV4cGVyacOqbmNpYXMgZSBkZSBjb25oZWNpbWVudG8uXCIgK1xyXG4gICAgXCJBbMOpbSBkZSBzZXJlbSBwcm9maXNzaW9uYWlzIGV4dHJlbWFtZW50ZSBxdWFsaWZpY2Fkb3MsIHRyYXplbmRvIHVtIGF0ZW5kaW1lbnRvIGltcGVjw6F2ZWwganVudG8gY29tIGEgbWVsaG9yIGNvbWlkYSBkYSBjaWRhZGUhXCI7XHJcbiAgY29uc3QgaW5mb0ZpZ3VyZTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlndXJlXCIpO1xyXG4gIGNvbnN0IGluZm9JbWc1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBjb25zdCBpbmZvQ2FwdGlvbjUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlnY2FwdGlvblwiKTtcclxuICBpbmZvQ2FwdGlvbjUudGV4dENvbnRlbnQgPSBcIkVxdWlwZSBkbyBQYXBvdWxhXCI7XHJcbiAgaW5mb0ltZzUuc2V0QXR0cmlidXRlKFwic3JjXCIsIGVxdWlwZSk7XHJcbiAgaW5mb0ltZzUuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiRXF1aXBlIGRvIFBhcG91bGFcIik7XHJcbiAgaW5mb0ltZzUuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxMDAlXCIpO1xyXG4gIGluZm9GaWd1cmU1LmFwcGVuZENoaWxkKGluZm9JbWc1KTtcclxuICBpbmZvRmlndXJlNS5hcHBlbmRDaGlsZChpbmZvQ2FwdGlvbjUpO1xyXG4gIGluZm9XcmFwNC5hcHBlbmRDaGlsZChpbmZvVGV4dDUpO1xyXG4gIGluZm9XcmFwNC5hcHBlbmRDaGlsZChpbmZvRmlndXJlNSk7XHJcblxyXG4gIGZlZWQuYXBwZW5kQ2hpbGQoaW5mb1dyYXApO1xyXG4gIGZlZWQuYXBwZW5kQ2hpbGQoaW5mb1dyYXAyKTtcclxuICBmZWVkLmFwcGVuZENoaWxkKGluZm9XcmFwMyk7XHJcbiAgZmVlZC5hcHBlbmRDaGlsZChpbmZvV3JhcDQpO1xyXG5cclxuICBpbmZvLmFwcGVuZENoaWxkKGludHJvKTtcclxuICBpbmZvLmFwcGVuZENoaWxkKGZlZWQpO1xyXG5cclxuICByZXR1cm4gaW5mbztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZm87XHJcbiIsImltcG9ydCBwcmF0b1NhbmRyYSBmcm9tIFwiLi4vaW1ncy9wcmF0by1zYW5kcmEuanBnXCI7XHJcbmltcG9ydCBwcmF0b0Nhcm9sIGZyb20gXCIuLi9pbWdzL3ByYXRvLWNhcm9sLmpwZ1wiO1xyXG5pbXBvcnQgcHJhdG9EYW5pZWxhIGZyb20gXCIuLi9pbWdzL3ByYXRvLWRhbmllbGEuanBnXCI7XHJcbmltcG9ydCBwcmF0b05pc2UgZnJvbSBcIi4uL2ltZ3MvcHJhdG8tbmlzZS5qcGdcIjtcclxuaW1wb3J0IHByYXRvVGhhbGxpdGEgZnJvbSBcIi4uL2ltZ3MvcHJhdG8tdGhhbGxpdGEuanBnXCI7XHJcbmltcG9ydCBwcmF0b1R1aXJhIGZyb20gXCIuLi9pbWdzL3ByYXRvLXR1aXJhLmpwZ1wiO1xyXG5cclxuY29uc3QgbWVudSA9ICgpID0+IHtcclxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xyXG5cclxuICBjb25zdCBpbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaW50cm8uY2xhc3NMaXN0LmFkZChcImludHJvXCIpO1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJDb25maXJhIG5vc3NvcyBwcmF0b3NcIjtcclxuICBpbnRyby5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG4gIGNvbnN0IGZlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZlZWQuY2xhc3NMaXN0LmFkZChcImZlZWRcIik7XHJcblxyXG4gIGNvbnN0IGluZm9XcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBpbmZvV3JhcC5jbGFzc0xpc3QuYWRkKFwiaW5mby13cmFwXCIpO1xyXG4gIGNvbnN0IGluZm9JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGluZm9JbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIHByYXRvU2FuZHJhKTtcclxuICBpbmZvSW1nLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcInByYXRvLXNhbmRyYVwiKTtcclxuICBpbmZvSW1nLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMTAwJVwiKTtcclxuICBpbmZvV3JhcC5hcHBlbmRDaGlsZChpbmZvSW1nKTtcclxuXHJcbiAgY29uc3QgaW5mb1dyYXAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBpbmZvV3JhcDIuY2xhc3NMaXN0LmFkZChcImluZm8td3JhcFwiKTtcclxuICBjb25zdCBpbmZvSW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgaW5mb0ltZzIuc2V0QXR0cmlidXRlKFwic3JjXCIsIHByYXRvQ2Fyb2wpO1xyXG4gIGluZm9JbWcyLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcInByYXRvLWNhcm9sXCIpO1xyXG4gIGluZm9JbWcyLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMTAwJVwiKTtcclxuICBpbmZvV3JhcDIuYXBwZW5kQ2hpbGQoaW5mb0ltZzIpO1xyXG5cclxuICBjb25zdCBpbmZvV3JhcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGluZm9XcmFwMy5jbGFzc0xpc3QuYWRkKFwiaW5mby13cmFwXCIpO1xyXG4gIGNvbnN0IGluZm9JbWczID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBpbmZvSW1nMy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgcHJhdG9EYW5pZWxhKTtcclxuICBpbmZvSW1nMy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJwcmF0by1kYW5pZWxhXCIpO1xyXG4gIGluZm9JbWczLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMTAwJVwiKTtcclxuICBpbmZvV3JhcDMuYXBwZW5kQ2hpbGQoaW5mb0ltZzMpO1xyXG5cclxuICBjb25zdCBpbmZvV3JhcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGluZm9XcmFwNC5jbGFzc0xpc3QuYWRkKFwiaW5mby13cmFwXCIpO1xyXG4gIGNvbnN0IGluZm9JbWc0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBpbmZvSW1nNC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgcHJhdG9OaXNlKTtcclxuICBpbmZvSW1nNC5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJwcmF0by1uaXNlXCIpO1xyXG4gIGluZm9JbWc0LnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMTAwJVwiKTtcclxuICBpbmZvV3JhcDQuYXBwZW5kQ2hpbGQoaW5mb0ltZzQpO1xyXG5cclxuICBjb25zdCBpbmZvV3JhcDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGluZm9XcmFwNS5jbGFzc0xpc3QuYWRkKFwiaW5mby13cmFwXCIpO1xyXG4gIGNvbnN0IGluZm9JbWc1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBpbmZvSW1nNS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgcHJhdG9UaGFsbGl0YSk7XHJcbiAgaW5mb0ltZzUuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwicHJhdG8tdGhhbGxpdGFcIik7XHJcbiAgaW5mb0ltZzUuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxMDAlXCIpO1xyXG4gIGluZm9XcmFwNS5hcHBlbmRDaGlsZChpbmZvSW1nNSk7XHJcblxyXG4gIGNvbnN0IGluZm9XcmFwNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaW5mb1dyYXA2LmNsYXNzTGlzdC5hZGQoXCJpbmZvLXdyYXBcIik7XHJcbiAgY29uc3QgaW5mb0ltZzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGluZm9JbWc2LnNldEF0dHJpYnV0ZShcInNyY1wiLCBwcmF0b1R1aXJhKTtcclxuICBpbmZvSW1nNi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJwcmF0by10dWlyYVwiKTtcclxuICBpbmZvSW1nNi5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjEwMCVcIik7XHJcbiAgaW5mb1dyYXA2LmFwcGVuZENoaWxkKGluZm9JbWc2KTtcclxuXHJcbiAgZmVlZC5hcHBlbmRDaGlsZChpbmZvV3JhcCk7XHJcbiAgZmVlZC5hcHBlbmRDaGlsZChpbmZvV3JhcDIpO1xyXG4gIGZlZWQuYXBwZW5kQ2hpbGQoaW5mb1dyYXAzKTtcclxuICBmZWVkLmFwcGVuZENoaWxkKGluZm9XcmFwNCk7XHJcbiAgZmVlZC5hcHBlbmRDaGlsZChpbmZvV3JhcDUpO1xyXG4gIGZlZWQuYXBwZW5kQ2hpbGQoaW5mb1dyYXA2KTtcclxuXHJcbiAgbWVudS5hcHBlbmRDaGlsZChpbnRybyk7XHJcbiAgbWVudS5hcHBlbmRDaGlsZChmZWVkKTtcclxuXHJcbiAgcmV0dXJuIG1lbnU7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW51O1xyXG4iLCJjb25zdCBuYXYgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBuYXZiYXIuY2xhc3NMaXN0LmFkZChcIm5hdmJhclwiKTtcclxuXHJcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIGhvbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lXCIpO1xyXG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIik7XHJcbiAgaG9tZS50ZXh0Q29udGVudCA9IFwiaG9tZVwiO1xyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBtZW51LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudVwiKTtcclxuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCIpO1xyXG4gIG1lbnUudGV4dENvbnRlbnQgPSBcInJlc3RhdXJhbnRfbWVudVwiO1xyXG4gIGNvbnN0IGVzcGFjbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIGVzcGFjby5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVzcGFjb1wiKTtcclxuICBlc3BhY28uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIik7XHJcbiAgZXNwYWNvLnRleHRDb250ZW50ID0gXCJzdG9yZWZyb250XCI7XHJcbiAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIGluZm8uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbmZvXCIpO1xyXG4gIGluZm8uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIik7XHJcbiAgaW5mby50ZXh0Q29udGVudCA9IFwiaW5mb1wiO1xyXG5cclxuICBuYXZiYXIuYXBwZW5kQ2hpbGQoaG9tZSk7XHJcbiAgbmF2YmFyLmFwcGVuZENoaWxkKG1lbnUpO1xyXG4gIG5hdmJhci5hcHBlbmRDaGlsZChlc3BhY28pO1xyXG4gIG5hdmJhci5hcHBlbmRDaGlsZChpbmZvKTtcclxuXHJcbiAgcmV0dXJuIG5hdmJhcjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5hdjtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXIuanNcIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwiLi9uYXYuanNcIjtcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vaG9tZS5qc1wiO1xyXG5pbXBvcnQgTWVudSBmcm9tIFwiLi9tZW51LmpzXCI7XHJcbmltcG9ydCBJbmZvIGZyb20gXCIuL2luZm8uanNcIjtcclxuaW1wb3J0IEVzcGFjbyBmcm9tIFwiLi9lc3BhY28uanNcIjtcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XHJcblxyXG5jb250ZW50LmFwcGVuZENoaWxkKE5hdigpKTtcclxuY29udGVudC5hcHBlbmRDaGlsZChIZWFkZXIoKSk7XHJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoSG9tZSgpKTtcclxuXHJcbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWVcIik7XHJcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVcIik7XHJcbmNvbnN0IGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2luZm9cIik7XHJcbmNvbnN0IGVzcGFjbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXNwYWNvXCIpO1xyXG5cclxuaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKEhvbWUoKSk7XHJcbn0pO1xyXG5cclxubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKE1lbnUoKSk7XHJcbn0pO1xyXG5cclxuZXNwYWNvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29udGVudC5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIikpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoRXNwYWNvKCkpO1xyXG59KTtcclxuXHJcbmluZm8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjb250ZW50LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChJbmZvKCkpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9