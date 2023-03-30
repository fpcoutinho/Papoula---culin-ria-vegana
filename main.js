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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --background: #fed699;\r\n  --text: #fff;\r\n  --primary: #ea5e67;\r\n  --secondary: #669553;\r\n  --tertiary: #83b76d;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Handlee\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url(https://fonts.gstatic.com/s/handlee/v14/-F6xfjBsISg9aMakPm3wow.woff2)\r\n    format(\"woff2\");\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,\r\n    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,\r\n    U+FEFF, U+FFFD;\r\n}\r\n\r\nhtml {\r\n  color: var(--tertiary);\r\n}\r\n\r\nbody {\r\n  font-family: \"Handlee\";\r\n  font-size: 18px;\r\n  line-height: 1.5;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\nh1,\r\nh2 {\r\n  color: var(--primary);\r\n  font-weight: bolder;\r\n  margin: 0;\r\n}\r\n\r\nh3,\r\nh4 {\r\n  color: var(--secondary);\r\n  font-weight: bolder;\r\n  text-decoration: underline wavy;\r\n}\r\n\r\nh5,\r\nh6 {\r\n  color: var(--tertiary);\r\n}\r\n\r\np {\r\n  font-weight: bold;\r\n  color: var(--secondary);\r\n  text-align: center;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.header .menu a {\r\n  padding: 0.6rem;\r\n}\r\n\r\na {\r\n  color: var(--tertiary);\r\n  text-decoration: none;\r\n}\r\n\r\na:hover {\r\n  text-decoration: underline wavy;\r\n}\r\n\r\n.navbar {\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 100;\r\n  background: var(--primary);\r\n  color: var(--text);\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  padding: 1rem;\r\n  margin: 0;\r\n}\r\n\r\n.main {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.intro,\r\n.feed {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.feed img {\r\n  border-radius: 10px;\r\n}\r\n\r\n.feed {\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n.info-wrap {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 1rem;\r\n}\r\n\r\nfigure {\r\n  text-align: center;\r\n}\r\n\r\nfigcaption {\r\n  font-style: italic;\r\n  color: var(--primary);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,YAAY;EACZ,kBAAkB;EAClB,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,gBAAgB;EAChB;mBACiB;EACjB;;kBAEgB;AAClB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,eAAe;EACf,gBAAgB;EAChB,yDAA6C;AAC/C;;AAEA;;EAEE,qBAAqB;EACrB,mBAAmB;EACnB,SAAS;AACX;;AAEA;;EAEE,uBAAuB;EACvB,mBAAmB;EACnB,+BAA+B;AACjC;;AAEA;;EAEE,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,eAAe;EACf,SAAS;EACT,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,0BAA0B;EAC1B,kBAAkB;EAClB,uCAAuC;EACvC,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,mBAAmB;EACnB,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;AACvB","sourcesContent":[":root {\r\n  --background: #fed699;\r\n  --text: #fff;\r\n  --primary: #ea5e67;\r\n  --secondary: #669553;\r\n  --tertiary: #83b76d;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Handlee\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url(https://fonts.gstatic.com/s/handlee/v14/-F6xfjBsISg9aMakPm3wow.woff2)\r\n    format(\"woff2\");\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,\r\n    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,\r\n    U+FEFF, U+FFFD;\r\n}\r\n\r\nhtml {\r\n  color: var(--tertiary);\r\n}\r\n\r\nbody {\r\n  font-family: \"Handlee\";\r\n  font-size: 18px;\r\n  line-height: 1.5;\r\n  background-image: url(../imgs/background.png);\r\n}\r\n\r\nh1,\r\nh2 {\r\n  color: var(--primary);\r\n  font-weight: bolder;\r\n  margin: 0;\r\n}\r\n\r\nh3,\r\nh4 {\r\n  color: var(--secondary);\r\n  font-weight: bolder;\r\n  text-decoration: underline wavy;\r\n}\r\n\r\nh5,\r\nh6 {\r\n  color: var(--tertiary);\r\n}\r\n\r\np {\r\n  font-weight: bold;\r\n  color: var(--secondary);\r\n  text-align: center;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.header .menu a {\r\n  padding: 0.6rem;\r\n}\r\n\r\na {\r\n  color: var(--tertiary);\r\n  text-decoration: none;\r\n}\r\n\r\na:hover {\r\n  text-decoration: underline wavy;\r\n}\r\n\r\n.navbar {\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 100;\r\n  background: var(--primary);\r\n  color: var(--text);\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  padding: 1rem;\r\n  margin: 0;\r\n}\r\n\r\n.main {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.intro,\r\n.feed {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.feed img {\r\n  border-radius: 10px;\r\n}\r\n\r\n.feed {\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n.info-wrap {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 1rem;\r\n}\r\n\r\nfigure {\r\n  text-align: center;\r\n}\r\n\r\nfigcaption {\r\n  font-style: italic;\r\n  color: var(--primary);\r\n}\r\n"],"sourceRoot":""}]);
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
  infoImg3.setAttribute("width", "150em");

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

content.appendChild((0,_header_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
content.appendChild((0,_nav_js__WEBPACK_IMPORTED_MODULE_2__["default"])());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ1k7QUFDTjtBQUNFO0FBQ0E7QUFDQTtBQUNJO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzREFBTTtBQUMxQixvQkFBb0Isb0RBQUk7QUFDeEIsb0JBQW9CLG1EQUFHO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0RBQUk7QUFDMUIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixvREFBSTtBQUMxQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHNEQUFNO0FBQzVCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0RBQUk7QUFDMUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50ZS8uL3NyYy9lc3BhY28uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudGUvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudGUvLi9zcmMvaW5mby5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50ZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRlLy4vc3JjL25hdi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWdzL2JhY2tncm91bmQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgLS1iYWNrZ3JvdW5kOiAjZmVkNjk5O1xcclxcbiAgLS10ZXh0OiAjZmZmO1xcclxcbiAgLS1wcmltYXJ5OiAjZWE1ZTY3O1xcclxcbiAgLS1zZWNvbmRhcnk6ICM2Njk1NTM7XFxyXFxuICAtLXRlcnRpYXJ5OiAjODNiNzZkO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGFuZGxlZVxcXCI7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2hhbmRsZWUvdjE0Ly1GNnhmakJzSVNnOWFNYWtQbTN3b3cud29mZjIpXFxyXFxuICAgIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXHJcXG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsXFxyXFxuICAgIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSxcXHJcXG4gICAgVStGRUZGLCBVK0ZGRkQ7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgY29sb3I6IHZhcigtLXRlcnRpYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkhhbmRsZWVcXFwiO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbmgxLFxcclxcbmgyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmgzLFxcclxcbmg0IHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIHdhdnk7XFxyXFxufVxcclxcblxcclxcbmg1LFxcclxcbmg2IHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeSk7XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciAubWVudSBhIHtcXHJcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGVydGlhcnkpO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5hOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIHdhdnk7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW50cm8sXFxyXFxuLmZlZWQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mZWVkIGltZyB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mby13cmFwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuZmlndXJlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZmlnY2FwdGlvbiB7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEI7bUJBQ2lCO0VBQ2pCOztrQkFFZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5REFBNkM7QUFDL0M7O0FBRUE7O0VBRUUscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiwrQkFBK0I7QUFDakM7O0FBRUE7O0VBRUUsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsdUNBQXVDO0VBQ3ZDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gIC0tYmFja2dyb3VuZDogI2ZlZDY5OTtcXHJcXG4gIC0tdGV4dDogI2ZmZjtcXHJcXG4gIC0tcHJpbWFyeTogI2VhNWU2NztcXHJcXG4gIC0tc2Vjb25kYXJ5OiAjNjY5NTUzO1xcclxcbiAgLS10ZXJ0aWFyeTogIzgzYjc2ZDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkhhbmRsZWVcXFwiO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9oYW5kbGVlL3YxNC8tRjZ4ZmpCc0lTZzlhTWFrUG0zd293LndvZmYyKVxcclxcbiAgICBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxyXFxuICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLFxcclxcbiAgICBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsXFxyXFxuICAgIFUrRkVGRiwgVStGRkZEO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeSk7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJIYW5kbGVlXFxcIjtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1ncy9iYWNrZ3JvdW5kLnBuZyk7XFxyXFxufVxcclxcblxcclxcbmgxLFxcclxcbmgyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmgzLFxcclxcbmg0IHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIHdhdnk7XFxyXFxufVxcclxcblxcclxcbmg1LFxcclxcbmg2IHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeSk7XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciAubWVudSBhIHtcXHJcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGVydGlhcnkpO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5hOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIHdhdnk7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW50cm8sXFxyXFxuLmZlZWQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mZWVkIGltZyB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mby13cmFwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuZmlndXJlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZmlnY2FwdGlvbiB7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHNhZ3VpIGZyb20gXCIuLi9pbWdzL3NhZ3VpLnBuZ1wiO1xyXG5pbXBvcnQgZm9ycm8gZnJvbSBcIi4uL2ltZ3MvZm9ycm8ucG5nXCI7XHJcbmltcG9ydCB3b3Jrc2hvcCBmcm9tIFwiLi4vaW1ncy93b3Jrc2hvcC5wbmdcIjtcclxuaW1wb3J0IHNhbmRyYUd1aW1hcmFlcyBmcm9tIFwiLi4vaW1ncy9zYW5kcmEtZ3VpbWFyYWVzMS5wbmdcIjtcclxuaW1wb3J0IGZlaWpvYWRhIGZyb20gXCIuLi9pbWdzL2ZlaWpvYWRhLWNlcnZlamluaGEucG5nXCI7XHJcbmltcG9ydCBlc3BhY29Mb3RhZG8gZnJvbSBcIi4uL2ltZ3MvZXNwYWNvLWxvdGFkby5wbmdcIjtcclxuaW1wb3J0IGVzcGFjb0NvemluaGEgZnJvbSBcIi4uL2ltZ3MvZXNwYWNvLWFyZWEtY296aW5oYS5wbmdcIjtcclxuXHJcbmNvbnN0IGVzcGFjbyA9ICgpID0+IHtcclxuICBjb25zdCBlc3BhY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGVzcGFjby5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcclxuXHJcbiAgY29uc3QgaW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGludHJvLmNsYXNzTGlzdC5hZGQoXCJpbnRyb1wiKTtcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiTm9zc28gY2FudGluaG9cIjtcclxuICBpbnRyby5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG4gIGNvbnN0IGZlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZlZWQuY2xhc3NMaXN0LmFkZChcImZlZWRcIik7XHJcblxyXG4gIGNvbnN0IGluZm9XcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBpbmZvV3JhcC5jbGFzc0xpc3QuYWRkKFwiaW5mby13cmFwXCIpO1xyXG4gIGNvbnN0IGluZm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgaW5mb1RleHQudGV4dENvbnRlbnQgPVxyXG4gICAgXCJBbyBhciBsaXZyZSwgc29iIGEgc29tYnJhIGRhIE1hbmd1ZWlyYSwgbyBlc3Bhw6dvIGRvIFBhcG91bGEgw6kgY29udmlkYXRpdm8sIGFjb2xoZWRvciBlIHRyYW5xdWlsby4gQ29tIHVtIGFtYmllbnRlIGFncmFkw6F2ZWwgZSBpbHVtaW5hZG8sIG8gcmVzdGF1cmFudGUgcG9zc3VpIHVtYSBkZWNvcmHDp8OjbyB2aWJyYW50ZSBlIGNoZWlhIGRlIHBlcnNvbmFsaWRhZGUsIGNvbSBwYXJlZGVzIGNvbG9yaWRhcywgbWVzYXMgZGUgbWFkZWlyYSByw7pzdGljYSBlIHBsYW50YXMgcG9yIHRvZGEgcGFydGUuIFBlcmZlaXRvIHBhcmEgdW1hIHJlZmVpw6fDo28gdHJhbnF1aWxhIG91IHVtIGVuY29udHJvIGNvbSBhbWlnb3MgZSBmYW1pbGlhcmVzLlwiO1xyXG5cclxuICBjb25zdCBpbmZvRmlndXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ3VyZVwiKTtcclxuICBjb25zdCBpbmZvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBjb25zdCBpbmZvQ2FwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWdjYXB0aW9uXCIpO1xyXG4gIGluZm9DYXB0aW9uLnRleHRDb250ZW50ID0gXCJFc3Bhw6dvIGRvIFBhcG91bGFcIjtcclxuICBpbmZvSW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBlc3BhY29Db3ppbmhhKTtcclxuICBpbmZvSW1nLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkVzcGHDp28gZG8gUGFwb3VsYS5cIik7XHJcbiAgaW5mb0ltZy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjEwMCVcIik7XHJcbiAgaW5mb0ZpZ3VyZS5hcHBlbmRDaGlsZChpbmZvSW1nKTtcclxuICBpbmZvRmlndXJlLmFwcGVuZENoaWxkKGluZm9DYXB0aW9uKTtcclxuXHJcbiAgY29uc3QgaW5mb0ZpZ3VyZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlndXJlXCIpO1xyXG4gIGNvbnN0IGluZm9JbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBjb25zdCBpbmZvQ2FwdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlnY2FwdGlvblwiKTtcclxuICBpbmZvQ2FwdGlvbjIudGV4dENvbnRlbnQgPSBcIk8gUGFwb3VsYSBjb20gY2FzYSBjaGVpYS5cIjtcclxuICBpbmZvSW1nMi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgZXNwYWNvTG90YWRvKTtcclxuICBpbmZvSW1nMi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJFc3Bhw6dvIGxvdGFkb1wiKTtcclxuICBpbmZvSW1nMi5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjEwMCVcIik7XHJcbiAgaW5mb0ZpZ3VyZTIuYXBwZW5kQ2hpbGQoaW5mb0ltZzIpO1xyXG4gIGluZm9GaWd1cmUyLmFwcGVuZENoaWxkKGluZm9DYXB0aW9uMik7XHJcblxyXG4gIGNvbnN0IGluZm9GaWd1cmVTID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ3VyZVwiKTtcclxuICBjb25zdCBpbmZvSW1nUyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgY29uc3QgaW5mb0NhcHRpb25TID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ2NhcHRpb25cIik7XHJcbiAgaW5mb0NhcHRpb25TLnRleHRDb250ZW50ID0gXCJTYWd1aXppbmhvIHNlIGFsaW1lbnRhbmRvIG5vIHDDqSBkZSBtYW5nYS5cIjtcclxuICBpbmZvSW1nUy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgc2FndWkpO1xyXG4gIGluZm9JbWdTLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlNhZ3VpemluaG9cIik7XHJcbiAgaW5mb0ltZ1Muc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxMDAlXCIpO1xyXG4gIGluZm9GaWd1cmVTLmFwcGVuZENoaWxkKGluZm9JbWdTKTtcclxuICBpbmZvRmlndXJlUy5hcHBlbmRDaGlsZChpbmZvQ2FwdGlvblMpO1xyXG5cclxuICBpbmZvV3JhcC5hcHBlbmRDaGlsZChpbmZvVGV4dCk7XHJcbiAgaW5mb1dyYXAuYXBwZW5kQ2hpbGQoaW5mb0ZpZ3VyZSk7XHJcbiAgaW5mb1dyYXAuYXBwZW5kQ2hpbGQoaW5mb0ZpZ3VyZTIpO1xyXG4gIGluZm9XcmFwLmFwcGVuZENoaWxkKGluZm9GaWd1cmVTKTtcclxuXHJcbiAgY29uc3QgaW5mb1dyYXAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBpbmZvV3JhcDIuY2xhc3NMaXN0LmFkZChcImluZm8td3JhcFwiKTtcclxuICBjb25zdCBpbmZvVGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBpbmZvVGV4dDIudGV4dENvbnRlbnQgPVxyXG4gICAgXCJPIFBhcG91bGEgw6kgdW0gcmVzdGF1cmFudGUgcXVlIG9mZXJlY2UgbWFpcyBkbyBxdWUgYXBlbmFzIGNvbWlkYSB2ZWdhbmEgZGVsaWNpb3NhLiBPIGxvY2FsIHRhbWLDqW0gcHJvbW92ZSB1bWEgc8OpcmllIGRlIGV2ZW50b3MgcXVlIHZpc2FtIGVkdWNhciBlIGVudHJldGVyIHNldXMgY2xpZW50ZXMuIFVtIGV4ZW1wbG8gw6kgbyB3b3Jrc2hvcCBkYSBpbnNwaXJhZG9yYSBTYW5kcmEgR3VpbWFyw6Nlcywgb25kZSBvcyBwYXJ0aWNpcGFudGVzIGFwcmVuZGVyYW0gYSBwcmVwYXJhciBzb2JyZW1lc2FzIHZlZ2FuYXMgZGVsaWNpb3NhcyBjb20gaW5ncmVkaWVudGVzIG5hdHVyYWlzLlwiO1xyXG4gIGNvbnN0IGluZm9GaWd1cmUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ3VyZVwiKTtcclxuICBjb25zdCBpbmZvSW1nMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgY29uc3QgaW5mb0NhcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ2NhcHRpb25cIik7XHJcbiAgaW5mb0NhcHRpb24zLnRleHRDb250ZW50ID1cclxuICAgIFwiU2FuZHJhIEd1aW1hcsOjZXMuIFBvdGlndWFyLCBtaWxpdGFudGUgZSBhdXRvcmEgZG8gYmxvZyBwYXBhY2FwaW0ub3JnXCI7XHJcbiAgaW5mb0ltZzMuc2V0QXR0cmlidXRlKFwic3JjXCIsIHNhbmRyYUd1aW1hcmFlcyk7XHJcbiAgaW5mb0ltZzMuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiU2FuZHJhIEd1aW1hcsOjZXNcIik7XHJcbiAgaW5mb0ltZzMuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxMDAlXCIpO1xyXG4gIGluZm9GaWd1cmUzLmFwcGVuZENoaWxkKGluZm9JbWczKTtcclxuICBpbmZvRmlndXJlMy5hcHBlbmRDaGlsZChpbmZvQ2FwdGlvbjMpO1xyXG5cclxuICBjb25zdCBpbmZvVGV4dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBpbmZvVGV4dDMudGV4dENvbnRlbnQgPSBgQWzDqW0gZGlzc28sIGEgY2hlZiBBZHJpYW5hIEJhcmNlbGxvcyBqw6Egb3JnYW5pem91IHVtIHdvcmtzaG9wIGRlIGNlaWEgZGUgTmF0YWwgdmVnYW5hLCBvbmRlIG9zIHBhcnRpY2lwYW50ZXMgcHVkZXJhbSBhcHJlbmRlciBhIHByZXBhcmFyIHVtYSBjZWlhIGRlIE5hdGFsIHNlbSBjYXJuZSBvdSBwcm9kdXRvcyBkZSBvcmlnZW0gYW5pbWFsLiBPIHJlc3RhdXJhbnRlIHRhbWLDqW0gcHJvbW92ZSBldmVudG9zIGZlbWluaXN0YXMsIGNvbW8gbyBcIkZlbWluaXNtbyBlIFZlZ2FuaXNtb1wiLCBvbmRlIG9zIHBhcnRpY2lwYW50ZXMgZGlzY3V0ZW0gYSBpbnRlcnNlY8Onw6NvIGRlc3NlcyBkb2lzIG1vdmltZW50b3MuYDtcclxuICBjb25zdCBpbmZvRmlndXJlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWd1cmVcIik7XHJcbiAgY29uc3QgaW5mb0ltZzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGNvbnN0IGluZm9DYXB0aW9uNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWdjYXB0aW9uXCIpO1xyXG4gIGluZm9DYXB0aW9uNC50ZXh0Q29udGVudCA9IFwiQ296aW5oYSBlIGNvbnZlcnNhLCBubyBQYXBvdWxhLlwiO1xyXG4gIGluZm9JbWc0LnNldEF0dHJpYnV0ZShcInNyY1wiLCB3b3Jrc2hvcCk7XHJcbiAgaW5mb0ltZzQuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiV29ya3Nob3BcIik7XHJcbiAgaW5mb0ltZzQuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxMDAlXCIpO1xyXG4gIGluZm9GaWd1cmU0LmFwcGVuZENoaWxkKGluZm9JbWc0KTtcclxuICBpbmZvRmlndXJlNC5hcHBlbmRDaGlsZChpbmZvQ2FwdGlvbjQpO1xyXG5cclxuICBjb25zdCBpbmZvVGV4dDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBpbmZvVGV4dDQudGV4dENvbnRlbnQgPSBgTyBQYXBvdWxhIGFpbmRhIG9mZXJlY2UgZXZlbnRvcyBtdXNpY2FpcywgY29tbyBhIGZlaWpvYWRhIGNvbSBmb3Jyw7MgZG8gRXNjdXJpbmhvLCBhbMOpbSBkZSByZWNlYmVyIG91dHJhcyBiYW5kYXMgcXVlIHRvY2FtIGRpdmVyc29zIGfDqm5lcm9zIG11c2ljYWlzLiBUb2RvcyBlc3NlcyBldmVudG9zIHPDo28gdW1hIMOzdGltYSBtYW5laXJhIGRlIGFncmFkYXIgYW9zIGNsaWVudGVzIGUgZWR1Y8OhLWxvcyBzb2JyZSBhIGN1bGluw6FyaWEgdmVnYW5hIGUgdmVnZXRhcmlhbmEsIGJlbSBjb21vIGZvcm5lY2VyIHVtIGVzcGHDp28gZGUgZW5jb250cm8gZSBkaXZlcnPDo28gcGFyYSBhIGNvbXVuaWRhZGUgbG9jYWwuYDtcclxuICBjb25zdCBpbmZvRmlndXJlNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWd1cmVcIik7XHJcbiAgY29uc3QgaW5mb0ltZzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGNvbnN0IGluZm9DYXB0aW9uNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWdjYXB0aW9uXCIpO1xyXG4gIGluZm9DYXB0aW9uNS50ZXh0Q29udGVudCA9IFwiRmVpam9hZGEgY29tIGNlcnZlamluaGEuXCI7XHJcbiAgaW5mb0ltZzUuc2V0QXR0cmlidXRlKFwic3JjXCIsIGZlaWpvYWRhKTtcclxuICBpbmZvSW1nNS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJGZWlqb2FkYVwiKTtcclxuICBpbmZvSW1nNS5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjEwMCVcIik7XHJcblxyXG4gIGluZm9GaWd1cmU1LmFwcGVuZENoaWxkKGluZm9JbWc1KTtcclxuICBpbmZvRmlndXJlNS5hcHBlbmRDaGlsZChpbmZvQ2FwdGlvbjUpO1xyXG5cclxuICBjb25zdCBpbmZvRmlndXJlNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWd1cmVcIik7XHJcbiAgY29uc3QgaW5mb0ltZzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGNvbnN0IGluZm9DYXB0aW9uNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWdjYXB0aW9uXCIpO1xyXG4gIGluZm9DYXB0aW9uNi50ZXh0Q29udGVudCA9IFwiUGVzc29hcyBkYW7Dp2FuZG8gYW8gc29tIGRvIEZvcnLDsyBkbyBFc2NydWluaG8uXCI7XHJcbiAgaW5mb0ltZzYuc2V0QXR0cmlidXRlKFwic3JjXCIsIGZvcnJvKTtcclxuICBpbmZvSW1nNi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJGb3Jyw7NcIik7XHJcbiAgaW5mb0ltZzYuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxMDAlXCIpO1xyXG4gIGluZm9GaWd1cmU2LmFwcGVuZENoaWxkKGluZm9JbWc2KTtcclxuICBpbmZvRmlndXJlNi5hcHBlbmRDaGlsZChpbmZvQ2FwdGlvbjYpO1xyXG5cclxuICBpbmZvV3JhcDIuYXBwZW5kQ2hpbGQoaW5mb1RleHQyKTtcclxuICBpbmZvV3JhcDIuYXBwZW5kQ2hpbGQoaW5mb0ZpZ3VyZTMpO1xyXG4gIGluZm9XcmFwMi5hcHBlbmRDaGlsZChpbmZvVGV4dDMpO1xyXG4gIGluZm9XcmFwMi5hcHBlbmRDaGlsZChpbmZvRmlndXJlNCk7XHJcbiAgaW5mb1dyYXAyLmFwcGVuZENoaWxkKGluZm9UZXh0NCk7XHJcbiAgaW5mb1dyYXAyLmFwcGVuZENoaWxkKGluZm9GaWd1cmU1KTtcclxuICBpbmZvV3JhcDIuYXBwZW5kQ2hpbGQoaW5mb0ZpZ3VyZTYpO1xyXG5cclxuICBmZWVkLmFwcGVuZENoaWxkKGluZm9XcmFwKTtcclxuICBmZWVkLmFwcGVuZENoaWxkKGluZm9XcmFwMik7XHJcblxyXG4gIGVzcGFjby5hcHBlbmRDaGlsZChpbnRybyk7XHJcbiAgZXNwYWNvLmFwcGVuZENoaWxkKGZlZWQpO1xyXG5cclxuICByZXR1cm4gZXNwYWNvO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXNwYWNvO1xyXG4iLCJpbXBvcnQgbG9nbyBmcm9tIFwiLi4vaW1ncy9sb2dvLXNlbWJnLXZlcm1lbGhvLnBuZ1wiO1xyXG5cclxuY29uc3QgaGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XHJcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBpbWcuc3JjID0gbG9nbztcclxuICBpbWcuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiTG9nb1wiKTtcclxuICBpbWcuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCI2MHB4XCIpO1xyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChpbWcpO1xyXG5cclxuICAvL2FkZCBtZW51IHdpdGggaW5zdGFncmFtIGFuZCBnb29nbGUgbWFwcyBsaW5rc1xyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XHJcbiAgY29uc3QgaW5zdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBpbnN0YS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9wYXBvdWxhdmVnL1wiKTtcclxuICBpbnN0YS5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XHJcbiAgaW5zdGEuY2xhc3NMaXN0LmFkZChcImZhXCIpO1xyXG4gIGluc3RhLmNsYXNzTGlzdC5hZGQoXCJmYS1pbnN0YWdyYW1cIik7XHJcbiAgY29uc3QgbWFwcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIG1hcHMuc2V0QXR0cmlidXRlKFxyXG4gICAgXCJocmVmXCIsXHJcbiAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9wbGFjZS9QYXBvdWxhK0N1bGluJUMzJUExcmlhK1NhdWQlQzMlQTF2ZWwvQC03LjEyMDExNDksLTM0LjgzODE3NzMsMTd6L2RhdGE9ITNtMSE0YjEhNG02ITNtNSExczB4N2FjZGQzNjY2MjUwNzA3OjB4N2E0YjM3MDgwNTJhYjBhOCE4bTIhM2QtNy4xMjAxMTQ5ITRkLTM0LjgzODE3NzMhMTZzJTJGZyUyRjExZjU0ajNfNXBcIlxyXG4gICk7XHJcbiAgbWFwcy5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XHJcbiAgbWFwcy5jbGFzc0xpc3QuYWRkKFwiZmFcIik7XHJcbiAgbWFwcy5jbGFzc0xpc3QuYWRkKFwiZmEtbWFwLW1hcmtlclwiKTtcclxuICBtZW51LmFwcGVuZENoaWxkKGluc3RhKTtcclxuICBtZW51LmFwcGVuZENoaWxkKG1hcHMpO1xyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChtZW51KTtcclxuXHJcbiAgcmV0dXJuIGhlYWRlcjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhlYWRlcjtcclxuIiwiaW1wb3J0IGNhcmRhcGlvIGZyb20gXCIuLi9pbWdzL2luZm9zLWNhcmRhcGlvLXNlbWFuYS5qcGdcIjtcclxuaW1wb3J0IGhvcmFyaW8gZnJvbSBcIi4uL2ltZ3MvaW5mb3MtaG9yYXJpby1sb2NhbC5wbmdcIjtcclxuaW1wb3J0IHByZWNvcyBmcm9tIFwiLi4vaW1ncy9pbmZvcy1wcmVjb3MuanBnXCI7XHJcbmltcG9ydCBwYWdhbWVudG8gZnJvbSBcIi4uL2ltZ3MvaW5mb3MtZm9ybWFzLXBhZ2FtZW50by5wbmdcIjtcclxuXHJcbmNvbnN0IGhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcclxuXHJcbiAgY29uc3QgaW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGludHJvLmNsYXNzTGlzdC5hZGQoXCJpbnRyb1wiKTtcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiU2VqYSBiZW0tdmluZG8gYW9cIjtcclxuICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBzdWJ0aXRsZS50ZXh0Q29udGVudCA9IFwiUGFwb3VsYSBDdWxpbsOhcmlhIFNhdWTDoXZlbCDwn5KaXCI7XHJcbiAgaW50cm8uYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gIGludHJvLmFwcGVuZENoaWxkKHN1YnRpdGxlKTtcclxuXHJcbiAgY29uc3QgZmVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZmVlZC5jbGFzc0xpc3QuYWRkKFwiZmVlZFwiKTtcclxuXHJcbiAgY29uc3QgaW5mb1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGluZm9XcmFwLmNsYXNzTGlzdC5hZGQoXCJpbmZvLXdyYXBcIik7XHJcbiAgY29uc3QgaW5mb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gIGluZm9UaXRsZS50ZXh0Q29udGVudCA9IFwiQ29uZmlyYSBvIG5vc3NvIGNhcmTDoXBpbyBkYSBzZW1hbmFcIjtcclxuICBjb25zdCBpbmZvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBpbmZvSW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBjYXJkYXBpbyk7XHJcbiAgaW5mb0ltZy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJjYXJkYXBpb1wiKTtcclxuICBpbmZvSW1nLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMTAwJVwiKTtcclxuICBpbmZvV3JhcC5hcHBlbmRDaGlsZChpbmZvVGl0bGUpO1xyXG4gIGluZm9XcmFwLmFwcGVuZENoaWxkKGluZm9JbWcpO1xyXG5cclxuICBjb25zdCBpbmZvV3JhcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGluZm9XcmFwMi5jbGFzc0xpc3QuYWRkKFwiaW5mby13cmFwXCIpO1xyXG4gIGNvbnN0IGluZm9UaXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgaW5mb1RpdGxlMi50ZXh0Q29udGVudCA9IFwiTm9zc29zIGhvcsOhcmlvcyBkZSBmdW5jaW9uYW1lbnRvXCI7XHJcbiAgY29uc3QgaW5mb0ltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGluZm9JbWcyLnNldEF0dHJpYnV0ZShcInNyY1wiLCBob3JhcmlvKTtcclxuICBpbmZvSW1nMi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJob3Jhcmlvc1wiKTtcclxuICBpbmZvSW1nMi5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjEwMCVcIik7XHJcbiAgaW5mb1dyYXAyLmFwcGVuZENoaWxkKGluZm9UaXRsZTIpO1xyXG4gIGluZm9XcmFwMi5hcHBlbmRDaGlsZChpbmZvSW1nMik7XHJcblxyXG4gIGNvbnN0IGluZm9XcmFwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaW5mb1dyYXAzLmNsYXNzTGlzdC5hZGQoXCJpbmZvLXdyYXBcIik7XHJcbiAgY29uc3QgaW5mb1RpdGxlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICBpbmZvVGl0bGUzLnRleHRDb250ZW50ID0gXCJOb3NzYSBwb2zDrXRpY2EgZGUgcHJlw6dvc1wiO1xyXG4gIGNvbnN0IGluZm9JbWczID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBpbmZvSW1nMy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgcHJlY29zKTtcclxuICBpbmZvSW1nMy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJwcmXDp29zXCIpO1xyXG4gIGluZm9JbWczLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMTAwJVwiKTtcclxuICBpbmZvV3JhcDMuYXBwZW5kQ2hpbGQoaW5mb1RpdGxlMyk7XHJcbiAgaW5mb1dyYXAzLmFwcGVuZENoaWxkKGluZm9JbWczKTtcclxuXHJcbiAgY29uc3QgaW5mb1dyYXA0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBpbmZvV3JhcDQuY2xhc3NMaXN0LmFkZChcImluZm8td3JhcFwiKTtcclxuICBjb25zdCBpbmZvVGl0bGU0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gIGluZm9UaXRsZTQudGV4dENvbnRlbnQgPSBcIkUgYXMgZm9ybWFzIGRlIHBhZ2FtZW50b1wiO1xyXG4gIGNvbnN0IGluZm9JbWc0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBpbmZvSW1nNC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgcGFnYW1lbnRvKTtcclxuICBpbmZvSW1nNC5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJwYWdhbWVudG9cIik7XHJcbiAgaW5mb0ltZzQuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxMDAlXCIpO1xyXG4gIGluZm9XcmFwNC5hcHBlbmRDaGlsZChpbmZvVGl0bGU0KTtcclxuICBpbmZvV3JhcDQuYXBwZW5kQ2hpbGQoaW5mb0ltZzQpO1xyXG5cclxuICBmZWVkLmFwcGVuZENoaWxkKGluZm9XcmFwKTtcclxuICBmZWVkLmFwcGVuZENoaWxkKGluZm9XcmFwMik7XHJcbiAgZmVlZC5hcHBlbmRDaGlsZChpbmZvV3JhcDMpO1xyXG4gIGZlZWQuYXBwZW5kQ2hpbGQoaW5mb1dyYXA0KTtcclxuXHJcbiAgaG9tZS5hcHBlbmRDaGlsZChpbnRybyk7XHJcbiAgaG9tZS5hcHBlbmRDaGlsZChmZWVkKTtcclxuXHJcbiAgcmV0dXJuIGhvbWU7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lO1xyXG4iLCJpbXBvcnQgcGxhcXVpbmhhIGZyb20gXCIuLi9pbWdzL3BsYXF1aW5oYS5wbmdcIjtcclxuaW1wb3J0IGFkcmlhbmEgZnJvbSBcIi4uL2ltZ3MvYWRyaWFuYS5wbmdcIjtcclxuaW1wb3J0IHZlZ2V0YWlzIGZyb20gXCIuLi9pbWdzL2ZlaXJhLW9yZ2FuaWNhLnBuZ1wiO1xyXG5pbXBvcnQgZXF1aXBlIGZyb20gXCIuLi9pbWdzL2VxdWlwZS5wbmdcIjtcclxuaW1wb3J0IGF0b1BvbGl0aWNvIGZyb20gXCIuLi9pbWdzL2F0by1wb2xpdGljby5wbmdcIjtcclxuXHJcbmNvbnN0IGluZm8gPSAoKSA9PiB7XHJcbiAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaW5mby5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcclxuXHJcbiAgY29uc3QgaW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGludHJvLmNsYXNzTGlzdC5hZGQoXCJpbnRyb1wiKTtcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiU29icmUgbyBQYXBvdWxhXCI7XHJcbiAgaW50cm8uYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICBjb25zdCBmZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBmZWVkLmNsYXNzTGlzdC5hZGQoXCJmZWVkXCIpO1xyXG5cclxuICBjb25zdCBpbmZvV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaW5mb1dyYXAuY2xhc3NMaXN0LmFkZChcImluZm8td3JhcFwiKTtcclxuICBjb25zdCBpbmZvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGluZm9UZXh0LnRleHRDb250ZW50ID1cclxuICAgIFwiTG9jYWxpemFkbyBuYSBQYXJhaHliYSwgbm8gZXN0YWRvIGRhIFBhcmHDrWJhLCBvIFBhcG91bGEgZm9pIGZ1bmRhZG8gZW0gMjAxOCBwZWxhIGNoZWYgQWRyaWFuYSBCYXJjZWxsb3MuXCI7XHJcbiAgY29uc3QgaW5mb0ZpZ3VyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWd1cmVcIik7XHJcbiAgY29uc3QgaW5mb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgY29uc3QgaW5mb0NhcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlnY2FwdGlvblwiKTtcclxuICBpbmZvQ2FwdGlvbi50ZXh0Q29udGVudCA9IFwiUGxhcXVpbmhhIG5hIGVudHJhZGEgZG8gUGFwb3VsYVwiO1xyXG4gIGluZm9JbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIHBsYXF1aW5oYSk7XHJcbiAgaW5mb0ltZy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJwbGFjYSBkZSBlbnRyYWRhXCIpO1xyXG4gIGluZm9JbWcuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxMDAlXCIpO1xyXG4gIGluZm9GaWd1cmUuYXBwZW5kQ2hpbGQoaW5mb0ltZyk7XHJcbiAgaW5mb0ZpZ3VyZS5hcHBlbmRDaGlsZChpbmZvQ2FwdGlvbik7XHJcbiAgaW5mb1dyYXAuYXBwZW5kQ2hpbGQoaW5mb1RleHQpO1xyXG4gIGluZm9XcmFwLmFwcGVuZENoaWxkKGluZm9GaWd1cmUpO1xyXG5cclxuICBjb25zdCBpbmZvV3JhcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGluZm9XcmFwMi5jbGFzc0xpc3QuYWRkKFwiaW5mby13cmFwXCIpO1xyXG4gIGNvbnN0IGluZm9GaWd1cmUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ3VyZVwiKTtcclxuICBjb25zdCBpbmZvSW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgY29uc3QgaW5mb0NhcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ2NhcHRpb25cIik7XHJcbiAgaW5mb0NhcHRpb24yLnRleHRDb250ZW50ID0gXCJBZHJpYW5hIEJhcmNlbGxvcywgY2hlZiBkbyBQYXBvdWxhXCI7XHJcbiAgaW5mb0ltZzIuc2V0QXR0cmlidXRlKFwic3JjXCIsIGFkcmlhbmEpO1xyXG4gIGluZm9JbWcyLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkFkcmlhbmEgQmFyY2VsbG9zXCIpO1xyXG4gIGluZm9JbWcyLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMTAwJVwiKTtcclxuICBpbmZvRmlndXJlMi5hcHBlbmRDaGlsZChpbmZvSW1nMik7XHJcbiAgaW5mb0ZpZ3VyZTIuYXBwZW5kQ2hpbGQoaW5mb0NhcHRpb24yKTtcclxuICBjb25zdCBpbmZvSW1nMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgaW5mb0ltZzMuc2V0QXR0cmlidXRlKFwic3JjXCIsIGF0b1BvbGl0aWNvKTtcclxuICBpbmZvSW1nMy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJiYW5kZWlyYVwiKTtcclxuICBpbmZvSW1nMy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjE1MGVtXCIpO1xyXG5cclxuICBjb25zdCBpbmZvVGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCBpbmZvVGV4dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBpbmZvVGV4dDIudGV4dENvbnRlbnQgPVxyXG4gICAgXCJBIGhpc3TDs3JpYSBkbyByZXN0YXVyYW50ZSBjb21lw6dhIGNvbSBhIHByw7NwcmlhIEFkcmlhbmEsIHF1ZSBkZXNkZSBtdWl0byBqb3ZlbSBzZSBpbnRlcmVzc291IHBlbGEgY3VsaW7DoXJpYSB2ZWdldGFyaWFuYSBlIHZlZ2FuYS4gXCIgK1xyXG4gICAgXCJFbGEgc2UgZm9ybW91IGVtIEdhc3Ryb25vbWlhIGVtIE1hbmF1cyBlLCBkZXBvaXMgZGUgdHJhYmFsaGFyIGVtIHbDoXJpb3MgcmVzdGF1cmFudGVzIHBlbG8gQnJhc2lsLCBkZWNpZGl1IGFicmlyIHNldSBwcsOzcHJpbyBlc3RhYmVsZWNpbWVudG8gbmEgY2lkYWRlIGRhIFBhcmFoeWJhLlwiO1xyXG5cclxuICBpbmZvVGV4dDMudGV4dENvbnRlbnQgPSBgTyBub21lIFwiUGFwb3VsYVwiIGZvaSBlc2NvbGhpZG8gcG9yIEFkcmlhbmEgcG9yIHNlciB1bWEgZmxvciBxdWUgc2ltYm9saXphIGEgcGF6LCBhIHRyYW5xdWlsaWRhZGUgZSBhIGJlbGV6YSwgdmFsb3JlcyBxdWUgZWxhIGNvbnNpZGVyYSBpbXBvcnRhbnRlcyBuYSBhbGltZW50YcOnw6NvIGUgbmEgdmlkYSBlbSBnZXJhbC5gO1xyXG5cclxuICBpbmZvV3JhcDIuYXBwZW5kQ2hpbGQoaW5mb1RleHQyKTtcclxuICBpbmZvV3JhcDIuYXBwZW5kQ2hpbGQoaW5mb0ZpZ3VyZTIpO1xyXG4gIGluZm9XcmFwMi5hcHBlbmRDaGlsZChpbmZvVGV4dDMpO1xyXG4gIGluZm9XcmFwMi5hcHBlbmRDaGlsZChpbmZvSW1nMyk7XHJcblxyXG4gIGNvbnN0IGluZm9XcmFwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaW5mb1dyYXAzLmNsYXNzTGlzdC5hZGQoXCJpbmZvLXdyYXBcIik7XHJcbiAgY29uc3QgaW5mb1RleHQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgaW5mb1RleHQ0LnRleHRDb250ZW50ID1cclxuICAgIFwiQSBjaGVmIGUgc3VhIGVxdWlwZSBwcmV6YW0gcGVsYSBxdWFsaWRhZGUgZG9zIGluZ3JlZGllbnRlcywgcXVlIHPDo28gc2VtcHJlIGZyZXNjb3MgZSBvcmfDom5pY29zLCBjb21wcmFkb3MgZW0gZmVpcmFzIGRlIGFncmljdWx0dXJhIGZhbWlsaWFyLiBcIjtcclxuICBjb25zdCBpbmZvRmlndXJlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWd1cmVcIik7XHJcbiAgY29uc3QgaW5mb0ltZzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGNvbnN0IGluZm9DYXB0aW9uNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWdjYXB0aW9uXCIpO1xyXG4gIGluZm9DYXB0aW9uNC50ZXh0Q29udGVudCA9IFwiVmVnZXRhaXMgb3Jnw6JuaWNvcyBlIHN1c3RlbnTDoXZlaXNcIjtcclxuICBpbmZvSW1nNC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdmVnZXRhaXMpO1xyXG4gIGluZm9JbWc0LnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlZlZ2V0YWlzIE9yZ8Oibmljb3NcIik7XHJcbiAgaW5mb0ltZzQuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxMDAlXCIpO1xyXG4gIGluZm9GaWd1cmU0LmFwcGVuZENoaWxkKGluZm9JbWc0KTtcclxuICBpbmZvRmlndXJlNC5hcHBlbmRDaGlsZChpbmZvQ2FwdGlvbjQpO1xyXG4gIGluZm9XcmFwMy5hcHBlbmRDaGlsZChpbmZvVGV4dDQpO1xyXG4gIGluZm9XcmFwMy5hcHBlbmRDaGlsZChpbmZvRmlndXJlNCk7XHJcblxyXG4gIGNvbnN0IGluZm9XcmFwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaW5mb1dyYXA0LmNsYXNzTGlzdC5hZGQoXCJpbmZvLXdyYXBcIik7XHJcbiAgY29uc3QgaW5mb1RleHQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgaW5mb1RleHQ1LnRleHRDb250ZW50ID1cclxuICAgIFwiQSBlcXVpcGUgZG8gUGFwb3VsYSB0YW1iw6ltIMOpIGZvcm1hZGEgcG9yIHBlc3NvYXMgcXVlIGFjcmVkaXRhbSBuYSBpbXBvcnTDom5jaWEgZGUgdW1hIGFsaW1lbnRhw6fDo28gYW50aS1leHBsb3JhdMOzcmlhIGUgYW50aS1jYXBpdGFsaXN0YS4gXCIgK1xyXG4gICAgXCJPcyB0cmFiYWxoYWRvcmVzIGRvIFBhcG91bGEgdHJhemVtIHVtIHNlbnNvIGRlIGNvbXVuaWRhZGUgZSBkZSBwZXJ0ZW5jaW1lbnRvIHBhcmEgbyByZXN0YXVyYW50ZSwgcXVlIMOpIHVtIGVzcGHDp28gZGUgdHJvY2EgZGUgZXhwZXJpw6puY2lhcyBlIGRlIGNvbmhlY2ltZW50by5cIiArXHJcbiAgICBcIkFsw6ltIGRlIHNlcmVtIHByb2Zpc3Npb25haXMgZXh0cmVtYW1lbnRlIHF1YWxpZmljYWRvcywgdHJhemVuZG8gdW0gYXRlbmRpbWVudG8gaW1wZWPDoXZlbCBqdW50byBjb20gYSBtZWxob3IgY29taWRhIGRhIGNpZGFkZSFcIjtcclxuICBjb25zdCBpbmZvRmlndXJlNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWd1cmVcIik7XHJcbiAgY29uc3QgaW5mb0ltZzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGNvbnN0IGluZm9DYXB0aW9uNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWdjYXB0aW9uXCIpO1xyXG4gIGluZm9DYXB0aW9uNS50ZXh0Q29udGVudCA9IFwiRXF1aXBlIGRvIFBhcG91bGFcIjtcclxuICBpbmZvSW1nNS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgZXF1aXBlKTtcclxuICBpbmZvSW1nNS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJFcXVpcGUgZG8gUGFwb3VsYVwiKTtcclxuICBpbmZvSW1nNS5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjEwMCVcIik7XHJcbiAgaW5mb0ZpZ3VyZTUuYXBwZW5kQ2hpbGQoaW5mb0ltZzUpO1xyXG4gIGluZm9GaWd1cmU1LmFwcGVuZENoaWxkKGluZm9DYXB0aW9uNSk7XHJcbiAgaW5mb1dyYXA0LmFwcGVuZENoaWxkKGluZm9UZXh0NSk7XHJcbiAgaW5mb1dyYXA0LmFwcGVuZENoaWxkKGluZm9GaWd1cmU1KTtcclxuXHJcbiAgZmVlZC5hcHBlbmRDaGlsZChpbmZvV3JhcCk7XHJcbiAgZmVlZC5hcHBlbmRDaGlsZChpbmZvV3JhcDIpO1xyXG4gIGZlZWQuYXBwZW5kQ2hpbGQoaW5mb1dyYXAzKTtcclxuICBmZWVkLmFwcGVuZENoaWxkKGluZm9XcmFwNCk7XHJcblxyXG4gIGluZm8uYXBwZW5kQ2hpbGQoaW50cm8pO1xyXG4gIGluZm8uYXBwZW5kQ2hpbGQoZmVlZCk7XHJcblxyXG4gIHJldHVybiBpbmZvO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5mbztcclxuIiwiaW1wb3J0IHByYXRvU2FuZHJhIGZyb20gXCIuLi9pbWdzL3ByYXRvLXNhbmRyYS5qcGdcIjtcclxuaW1wb3J0IHByYXRvQ2Fyb2wgZnJvbSBcIi4uL2ltZ3MvcHJhdG8tY2Fyb2wuanBnXCI7XHJcbmltcG9ydCBwcmF0b0RhbmllbGEgZnJvbSBcIi4uL2ltZ3MvcHJhdG8tZGFuaWVsYS5qcGdcIjtcclxuaW1wb3J0IHByYXRvTmlzZSBmcm9tIFwiLi4vaW1ncy9wcmF0by1uaXNlLmpwZ1wiO1xyXG5pbXBvcnQgcHJhdG9UaGFsbGl0YSBmcm9tIFwiLi4vaW1ncy9wcmF0by10aGFsbGl0YS5qcGdcIjtcclxuaW1wb3J0IHByYXRvVHVpcmEgZnJvbSBcIi4uL2ltZ3MvcHJhdG8tdHVpcmEuanBnXCI7XHJcblxyXG5jb25zdCBtZW51ID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XHJcblxyXG4gIGNvbnN0IGludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBpbnRyby5jbGFzc0xpc3QuYWRkKFwiaW50cm9cIik7XHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkNvbmZpcmEgbm9zc29zIHByYXRvc1wiO1xyXG4gIGludHJvLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgY29uc3QgZmVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZmVlZC5jbGFzc0xpc3QuYWRkKFwiZmVlZFwiKTtcclxuXHJcbiAgY29uc3QgaW5mb1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGluZm9XcmFwLmNsYXNzTGlzdC5hZGQoXCJpbmZvLXdyYXBcIik7XHJcbiAgY29uc3QgaW5mb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgaW5mb0ltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgcHJhdG9TYW5kcmEpO1xyXG4gIGluZm9JbWcuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwicHJhdG8tc2FuZHJhXCIpO1xyXG4gIGluZm9JbWcuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxMDAlXCIpO1xyXG4gIGluZm9XcmFwLmFwcGVuZENoaWxkKGluZm9JbWcpO1xyXG5cclxuICBjb25zdCBpbmZvV3JhcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGluZm9XcmFwMi5jbGFzc0xpc3QuYWRkKFwiaW5mby13cmFwXCIpO1xyXG4gIGNvbnN0IGluZm9JbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBpbmZvSW1nMi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgcHJhdG9DYXJvbCk7XHJcbiAgaW5mb0ltZzIuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwicHJhdG8tY2Fyb2xcIik7XHJcbiAgaW5mb0ltZzIuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxMDAlXCIpO1xyXG4gIGluZm9XcmFwMi5hcHBlbmRDaGlsZChpbmZvSW1nMik7XHJcblxyXG4gIGNvbnN0IGluZm9XcmFwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaW5mb1dyYXAzLmNsYXNzTGlzdC5hZGQoXCJpbmZvLXdyYXBcIik7XHJcbiAgY29uc3QgaW5mb0ltZzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGluZm9JbWczLnNldEF0dHJpYnV0ZShcInNyY1wiLCBwcmF0b0RhbmllbGEpO1xyXG4gIGluZm9JbWczLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcInByYXRvLWRhbmllbGFcIik7XHJcbiAgaW5mb0ltZzMuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxMDAlXCIpO1xyXG4gIGluZm9XcmFwMy5hcHBlbmRDaGlsZChpbmZvSW1nMyk7XHJcblxyXG4gIGNvbnN0IGluZm9XcmFwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaW5mb1dyYXA0LmNsYXNzTGlzdC5hZGQoXCJpbmZvLXdyYXBcIik7XHJcbiAgY29uc3QgaW5mb0ltZzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGluZm9JbWc0LnNldEF0dHJpYnV0ZShcInNyY1wiLCBwcmF0b05pc2UpO1xyXG4gIGluZm9JbWc0LnNldEF0dHJpYnV0ZShcImFsdFwiLCBcInByYXRvLW5pc2VcIik7XHJcbiAgaW5mb0ltZzQuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxMDAlXCIpO1xyXG4gIGluZm9XcmFwNC5hcHBlbmRDaGlsZChpbmZvSW1nNCk7XHJcblxyXG4gIGNvbnN0IGluZm9XcmFwNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaW5mb1dyYXA1LmNsYXNzTGlzdC5hZGQoXCJpbmZvLXdyYXBcIik7XHJcbiAgY29uc3QgaW5mb0ltZzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGluZm9JbWc1LnNldEF0dHJpYnV0ZShcInNyY1wiLCBwcmF0b1RoYWxsaXRhKTtcclxuICBpbmZvSW1nNS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJwcmF0by10aGFsbGl0YVwiKTtcclxuICBpbmZvSW1nNS5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjEwMCVcIik7XHJcbiAgaW5mb1dyYXA1LmFwcGVuZENoaWxkKGluZm9JbWc1KTtcclxuXHJcbiAgY29uc3QgaW5mb1dyYXA2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBpbmZvV3JhcDYuY2xhc3NMaXN0LmFkZChcImluZm8td3JhcFwiKTtcclxuICBjb25zdCBpbmZvSW1nNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgaW5mb0ltZzYuc2V0QXR0cmlidXRlKFwic3JjXCIsIHByYXRvVHVpcmEpO1xyXG4gIGluZm9JbWc2LnNldEF0dHJpYnV0ZShcImFsdFwiLCBcInByYXRvLXR1aXJhXCIpO1xyXG4gIGluZm9JbWc2LnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMTAwJVwiKTtcclxuICBpbmZvV3JhcDYuYXBwZW5kQ2hpbGQoaW5mb0ltZzYpO1xyXG5cclxuICBmZWVkLmFwcGVuZENoaWxkKGluZm9XcmFwKTtcclxuICBmZWVkLmFwcGVuZENoaWxkKGluZm9XcmFwMik7XHJcbiAgZmVlZC5hcHBlbmRDaGlsZChpbmZvV3JhcDMpO1xyXG4gIGZlZWQuYXBwZW5kQ2hpbGQoaW5mb1dyYXA0KTtcclxuICBmZWVkLmFwcGVuZENoaWxkKGluZm9XcmFwNSk7XHJcbiAgZmVlZC5hcHBlbmRDaGlsZChpbmZvV3JhcDYpO1xyXG5cclxuICBtZW51LmFwcGVuZENoaWxkKGludHJvKTtcclxuICBtZW51LmFwcGVuZENoaWxkKGZlZWQpO1xyXG5cclxuICByZXR1cm4gbWVudTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbnU7XHJcbiIsImNvbnN0IG5hdiA9ICgpID0+IHtcclxuICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIpO1xyXG5cclxuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgaG9tZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWVcIik7XHJcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiKTtcclxuICBob21lLnRleHRDb250ZW50ID0gXCJob21lXCI7XHJcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIG1lbnUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51XCIpO1xyXG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIik7XHJcbiAgbWVudS50ZXh0Q29udGVudCA9IFwicmVzdGF1cmFudF9tZW51XCI7XHJcbiAgY29uc3QgZXNwYWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgZXNwYWNvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZXNwYWNvXCIpO1xyXG4gIGVzcGFjby5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiKTtcclxuICBlc3BhY28udGV4dENvbnRlbnQgPSBcInN0b3JlZnJvbnRcIjtcclxuICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgaW5mby5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImluZm9cIik7XHJcbiAgaW5mby5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiKTtcclxuICBpbmZvLnRleHRDb250ZW50ID0gXCJpbmZvXCI7XHJcblxyXG4gIG5hdmJhci5hcHBlbmRDaGlsZChob21lKTtcclxuICBuYXZiYXIuYXBwZW5kQ2hpbGQobWVudSk7XHJcbiAgbmF2YmFyLmFwcGVuZENoaWxkKGVzcGFjbyk7XHJcbiAgbmF2YmFyLmFwcGVuZENoaWxkKGluZm8pO1xyXG5cclxuICByZXR1cm4gbmF2YmFyO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmF2O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2hlYWRlci5qc1wiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCIuL25hdi5qc1wiO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9ob21lLmpzXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuL21lbnUuanNcIjtcclxuaW1wb3J0IEluZm8gZnJvbSBcIi4vaW5mby5qc1wiO1xyXG5pbXBvcnQgRXNwYWNvIGZyb20gXCIuL2VzcGFjby5qc1wiO1xyXG5cclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcclxuXHJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoSGVhZGVyKCkpO1xyXG5jb250ZW50LmFwcGVuZENoaWxkKEhvbWUoKSk7XHJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoTmF2KCkpO1xyXG5cclxuY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZVwiKTtcclxuY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudVwiKTtcclxuY29uc3QgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5mb1wiKTtcclxuY29uc3QgZXNwYWNvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlc3BhY29cIik7XHJcblxyXG5ob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29udGVudC5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIikpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoSG9tZSgpKTtcclxufSk7XHJcblxyXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29udGVudC5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIikpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoTWVudSgpKTtcclxufSk7XHJcblxyXG5lc3BhY28uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjb250ZW50LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChFc3BhY28oKSk7XHJcbn0pO1xyXG5cclxuaW5mby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKEluZm8oKSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=