/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/background.jpg */ "./src/assets/img/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Fredoka+One&family=Open+Sans&family=Pacifico&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --font-prim: \"Open Sans\", sans-serif;\n  --font-second: \"Fredoka One\", cursive;\n  --font-logo: \"Pacifico\", cursive;\n\n  --prim-9: #03045eff;\n  --prim-8: #023e8aff;\n  --prim-7: #0077b6ff;\n  --prim-6: #0096c7ff;\n  --prim-5: #00b4d8ff;\n  --prim-4: #48cae4ff;\n  --prim-3: #90e0efff;\n  --prim-2: #ade8f4ff;\n  --prim-1: #caf0f8ff;\n\n  --gray-1: #f8f9faff;\n  --gray-2: #e9ecefff;\n  --gray-3: #dee2e6ff;\n  --gray-4: #ced4daff;\n  --gray-5: #adb5bdff;\n  --gray-6: #6c757dff;\n  --gray-7: #495057ff;\n  --gray-8: #343a40ff;\n  --gray-9: #212529ff;\n\n  --dark-red: #ee6055ff;\n  --light-red: #ff9b85ff;\n  --dark-green: #60d394ff;\n  --light-green: #aaf683ff;\n  --yellow: #ffd97dff;\n}\n\n*,\n::after,\n::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\na.disabled {\n  pointer-events: none;\n  cursor: default;\n}\n\n#content {\n  font-family: \"Open Sans\", sans-serif;\n  background-color: var(--gray-1);\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr 4fr;\n}\n\n#header {\n  padding-left: 60px;\n  background-color: var(--prim-8);\n  display: grid;\n  grid-template-columns: 2fr 3fr 1fr;\n  align-items: center;\n  padding: 16px;\n}\n\n#nav-logo {\n  font-family: var(--font-logo);\n  font-size: 3rem;\n  color: var(--gray-1);\n}\n\n.nav-list {\n  list-style-type: none;\n  font-family: var(--font-second);\n  font-size: 2.5rem;\n  text-transform: capitalize;\n  display: flex;\n  gap: 16px;\n  justify-content: space-evenly;\n  color: var(--gray-1);\n}\n\n.nav-list .nav-item > a {\n  text-decoration: none;\n  color: var(--gray-1);\n}\n\n.nav-list .nav-item > a:hover {\n  text-decoration: none;\n  color: var(--gray-5);\n}\n\n#icon-container {\n  display: flex;\n  gap: 32px;\n  justify-content: center;\n}\n\n#icon-container > i {\n  font-style: normal;\n  font-size: 2rem;\n  color: var(--gray-1);\n}\n\n#main {\n  position: relative;\n}\n\n#main-background {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  height: 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n#main-overlay {\n  background-color: rgba(0, 0, 0, 0.6);\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%;\n}\n\n#main-content {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  color: var(--gray-1);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 32px;\n}\n\n#main-content > p:first-child {\n  font-size: 4rem;\n  font-weight: bold;\n}\n\n#main-content > p:nth-child(2) {\n  font-size: 1.5rem;\n}\n\n.btn.order {\n  height: 72px;\n  width: 256px;\n  font-size: 2rem;\n  font-weight: bold;\n  background-color: rgba(0, 0, 0, 0);\n  border: solid var(--gray-1) 2px;\n  color: var(--gray-1);\n  border-radius: 8px;\n}\n\n.btn.order:hover {\n  background-color: var(--gray-1);\n  color: var(--gray-9);\n  cursor: pointer;\n}\n\n.menu.main {\n  background-color: var(--gray-4);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.menu.item {\n  background-color: var(--gray-8);\n  width: 70%;\n  flex: 1;\n  display: grid;\n  grid-template-columns: 1fr 6fr 1fr;\n  border: solid black 1px;\n  border-radius: 8px;\n  margin: 8px;\n  padding: 16px;\n  color: white;\n}\n\n.main.contact {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.sub.contact {\n  background-color: var(--gray-9);\n  padding: 16px 64px;\n  color: white;\n  border-radius: 8px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,oCAAoC;EACpC,qCAAqC;EACrC,gCAAgC;;EAEhC,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;;EAEnB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;;EAEnB,qBAAqB;EACrB,sBAAsB;EACtB,uBAAuB;EACvB,wBAAwB;EACxB,mBAAmB;AACrB;;AAEA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,oCAAoC;EACpC,+BAA+B;EAC/B,aAAa;EACb,aAAa;EACb,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,+BAA+B;EAC/B,aAAa;EACb,kCAAkC;EAClC,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,6BAA6B;EAC7B,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,qBAAqB;EACrB,+BAA+B;EAC/B,iBAAiB;EACjB,0BAA0B;EAC1B,aAAa;EACb,SAAS;EACT,6BAA6B;EAC7B,oBAAoB;AACtB;;AAEA;EACE,qBAAqB;EACrB,oBAAoB;AACtB;;AAEA;EACE,qBAAqB;EACrB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,yDAAoD;EACpD,YAAY;EACZ,4BAA4B;EAC5B,sBAAsB;AACxB;;AAEA;EACE,oCAAoC;EACpC,kBAAkB;EAClB,MAAM;EACN,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,YAAY;EACZ,WAAW;EACX,oBAAoB;EACpB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,kCAAkC;EAClC,+BAA+B;EAC/B,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,+BAA+B;EAC/B,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,+BAA+B;EAC/B,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,+BAA+B;EAC/B,UAAU;EACV,OAAO;EACP,aAAa;EACb,kCAAkC;EAClC,uBAAuB;EACvB,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,+BAA+B;EAC/B,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;AACpB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Fredoka+One&family=Open+Sans&family=Pacifico&display=swap\");\n\n:root {\n  --font-prim: \"Open Sans\", sans-serif;\n  --font-second: \"Fredoka One\", cursive;\n  --font-logo: \"Pacifico\", cursive;\n\n  --prim-9: #03045eff;\n  --prim-8: #023e8aff;\n  --prim-7: #0077b6ff;\n  --prim-6: #0096c7ff;\n  --prim-5: #00b4d8ff;\n  --prim-4: #48cae4ff;\n  --prim-3: #90e0efff;\n  --prim-2: #ade8f4ff;\n  --prim-1: #caf0f8ff;\n\n  --gray-1: #f8f9faff;\n  --gray-2: #e9ecefff;\n  --gray-3: #dee2e6ff;\n  --gray-4: #ced4daff;\n  --gray-5: #adb5bdff;\n  --gray-6: #6c757dff;\n  --gray-7: #495057ff;\n  --gray-8: #343a40ff;\n  --gray-9: #212529ff;\n\n  --dark-red: #ee6055ff;\n  --light-red: #ff9b85ff;\n  --dark-green: #60d394ff;\n  --light-green: #aaf683ff;\n  --yellow: #ffd97dff;\n}\n\n*,\n::after,\n::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\na.disabled {\n  pointer-events: none;\n  cursor: default;\n}\n\n#content {\n  font-family: \"Open Sans\", sans-serif;\n  background-color: var(--gray-1);\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr 4fr;\n}\n\n#header {\n  padding-left: 60px;\n  background-color: var(--prim-8);\n  display: grid;\n  grid-template-columns: 2fr 3fr 1fr;\n  align-items: center;\n  padding: 16px;\n}\n\n#nav-logo {\n  font-family: var(--font-logo);\n  font-size: 3rem;\n  color: var(--gray-1);\n}\n\n.nav-list {\n  list-style-type: none;\n  font-family: var(--font-second);\n  font-size: 2.5rem;\n  text-transform: capitalize;\n  display: flex;\n  gap: 16px;\n  justify-content: space-evenly;\n  color: var(--gray-1);\n}\n\n.nav-list .nav-item > a {\n  text-decoration: none;\n  color: var(--gray-1);\n}\n\n.nav-list .nav-item > a:hover {\n  text-decoration: none;\n  color: var(--gray-5);\n}\n\n#icon-container {\n  display: flex;\n  gap: 32px;\n  justify-content: center;\n}\n\n#icon-container > i {\n  font-style: normal;\n  font-size: 2rem;\n  color: var(--gray-1);\n}\n\n#main {\n  position: relative;\n}\n\n#main-background {\n  background-image: url(\"./assets/img/background.jpg\");\n  height: 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n#main-overlay {\n  background-color: rgba(0, 0, 0, 0.6);\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%;\n}\n\n#main-content {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  color: var(--gray-1);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 32px;\n}\n\n#main-content > p:first-child {\n  font-size: 4rem;\n  font-weight: bold;\n}\n\n#main-content > p:nth-child(2) {\n  font-size: 1.5rem;\n}\n\n.btn.order {\n  height: 72px;\n  width: 256px;\n  font-size: 2rem;\n  font-weight: bold;\n  background-color: rgba(0, 0, 0, 0);\n  border: solid var(--gray-1) 2px;\n  color: var(--gray-1);\n  border-radius: 8px;\n}\n\n.btn.order:hover {\n  background-color: var(--gray-1);\n  color: var(--gray-9);\n  cursor: pointer;\n}\n\n.menu.main {\n  background-color: var(--gray-4);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.menu.item {\n  background-color: var(--gray-8);\n  width: 70%;\n  flex: 1;\n  display: grid;\n  grid-template-columns: 1fr 6fr 1fr;\n  border: solid black 1px;\n  border-radius: 8px;\n  margin: 8px;\n  padding: 16px;\n  color: white;\n}\n\n.main.contact {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.sub.contact {\n  background-color: var(--gray-9);\n  padding: 16px 64px;\n  color: white;\n  border-radius: 8px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
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

"use strict";


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/menu.csv":
/*!*****************************!*\
  !*** ./src/assets/menu.csv ***!
  \*****************************/
/***/ ((module) => {

module.exports = [{"Title":"The Langmore","Description":"Cheeseburger with lettuce tomato onions and pickles. Served with side of  fries and mayonnaise","Price":"$10","Category":"Food","Protein (Food)":"Beef","Base (Alcohol)":null},{"Title":"The Snell","Description":"Roasted pork loin served with side of mashed potatoes and greens","Price":"$15","Category":"Food","Protein (Food)":"Pork","Base (Alcohol)":null},{"Title":"The Byrde","Description":"Chicken Wings served with french fries","Price":"$9","Category":"Food","Protein (Food)":"Chicken","Base (Alcohol)":null},{"Title":"The Navarro","Description":"Chicken Enchiladas served with green chile salsa verde. Comes with side of spanish rice and black beans","Price":"$12","Category":"Food","Protein (Food)":"Chicken","Base (Alcohol)":null},{"Title":"Marty","Description":"Rye bourbon old fashioned","Price":"$10","Category":"Alcohol","Protein (Food)":null,"Base (Alcohol)":"Whiskey"},{"Title":"Wendy","Description":"Vodka neat","Price":"$4","Category":"Alcohol","Protein (Food)":null,"Base (Alcohol)":"Vodka"},{"Title":"Helen","Description":"Bloody mary","Price":"$7","Category":"Alcohol","Protein (Food)":null,"Base (Alcohol)":"Vodka"},{"Title":"Ruth","Description":"Natural light served with side shot of Fireball","Price":"$5","Category":"Alcohol","Protein (Food)":null,"Base (Alcohol)":"Beer"}]

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";


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

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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

"use strict";


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

"use strict";


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

"use strict";


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
  } // For old IE

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

"use strict";


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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/createElement */ "./src/util/createElement.js");


function createContact() {
  const mainDiv = (0,_util_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "", "main contact");
  const subDiv = (0,_util_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "", "sub contact");
  const nameP = (0,_util_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("p", "", "", "Rachel Garrison");
  const emailP = (0,_util_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("p", "", "", "rgarrison@o.zark");
  const phoneP = (0,_util_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("p", "", "", "(555)-555-5555");
  subDiv.appendChild(nameP);
  subDiv.appendChild(emailP);
  subDiv.appendChild(phoneP);
  mainDiv.appendChild(subDiv);
  return mainDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHome": () => (/* binding */ createHome)
/* harmony export */ });
/* harmony import */ var _util_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/createElement */ "./src/util/createElement.js");


function createHome() {
  // create main div and apply back image, overlay, and content placeholder
  const main = (0,_util_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "main");
  const mainBackground = (0,_util_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "main-background");
  const mainOverlay = (0,_util_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "main-overlay");
  const mainContent = (0,_util_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "main-content");

  //content
  const greeting = (0,_util_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "p",
    "",
    "greeting",
    "Ozark's Finest Lakeside Cuisine"
  );
  const address = (0,_util_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "p",
    "",
    "greeting address",
    "721 Alhonna Dr. Osage, AR 72611"
  );
  const orderBtn = (0,_util_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("button", "", "btn order", "Order Online");

  mainContent.appendChild(greeting);
  mainContent.appendChild(address);
  mainContent.appendChild(orderBtn);

  main.appendChild(mainBackground);
  main.appendChild(mainOverlay);
  main.appendChild(mainContent);

  return main;
}




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/createElement */ "./src/util/createElement.js");
/* harmony import */ var _util_loadMenuData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/loadMenuData */ "./src/util/loadMenuData.js");
/* harmony import */ var _util_MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/MenuItem */ "./src/util/MenuItem.js");




function createMenu() {
  let mainBackgroundDiv = (0,_util_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "main-background");
  let mainOverlayDiv = (0,_util_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "main-overlay");

  // check to see if menus been populated yet
  // avoids duplicate menu appending
  if (_util_MenuItem__WEBPACK_IMPORTED_MODULE_2__.menu.getMenu().length == 0) {
    (0,_util_loadMenuData__WEBPACK_IMPORTED_MODULE_1__["default"])();
  }
  let menuMainDiv = (0,_util_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "", "menu main");

  _util_MenuItem__WEBPACK_IMPORTED_MODULE_2__.menu.getMenu().forEach((item) => {
    let itemDiv = (0,_util_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "", "menu item");
    let titleP = (0,_util_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("p", "", "item title", item.title);
    let descriptionP = (0,_util_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(
      "p",
      "",
      "item description",
      item.description
    );
    let priceP = (0,_util_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("p", "", "item price", item.price);
    itemDiv.appendChild(titleP);
    itemDiv.appendChild(descriptionP);
    itemDiv.appendChild(priceP);

    menuMainDiv.appendChild(itemDiv);
  });
  return menuMainDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);


/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNavbar": () => (/* binding */ createNavbar)
/* harmony export */ });
/* harmony import */ var _util_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/createElement */ "./src/util/createElement.js");


function createNavbar() {
  //create navbar
  const navbar = (0,_util_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("header", "header");

  // logo
  const logo = (0,_util_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "nav-logo", "navbar", "The Blue Cat Lodge");

  // list of links
  const navList = (0,_util_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("ul", "", ["nav-list"]);
  const navLinkBuilders = ["home", "menu", "contact"];
  const navLinks = [];

  navLinkBuilders.forEach((link) => {
    let li = (0,_util_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("li", `link-${link}`, "nav-item");
    let a = (0,_util_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("a", `a-${link}`, "nav-link", link);
    a.setAttribute("href", "#");
    li.appendChild(a);
    navLinks.push(li);
  });

  navLinks.forEach((element) => {
    navList.appendChild(element);
  });

  // brand icons + social
  const facebook = (0,_util_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "i",
    "facebook-icon",
    "icons fa-brands fa-facebook"
  );
  const instagram = (0,_util_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "i",
    "instagram-icon",
    "icons fa-brands fa-instagram"
  );

  const iconContainer = (0,_util_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "icon-container");
  iconContainer.appendChild(facebook);
  iconContainer.appendChild(instagram);

  navbar.appendChild(logo);
  navbar.appendChild(navList);
  navbar.appendChild(iconContainer);

  return navbar;
}




/***/ }),

/***/ "./src/util/MenuItem.js":
/*!******************************!*\
  !*** ./src/util/MenuItem.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Alcohol": () => (/* binding */ Alcohol),
/* harmony export */   "Food": () => (/* binding */ Food),
/* harmony export */   "MenuItem": () => (/* binding */ MenuItem),
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
const menu = (() => {
  const menuItems = [];

  const getMenu = () => {
    return menuItems;
  };

  const add = (menuItem) => {
    menuItems.push(menuItem);
  };

  const remove = (menuItem) => {
    menuItems.splice(menuItems.indexOf(menuItem));
  };

  return {
    getMenu,
    add,
    remove,
  };
})();

class MenuItem {
  constructor(title, description, price, category) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.category = category;
  }
}

class Food extends MenuItem {
  constructor(title, description, price, protein) {
    super(title, description, price, "Food");
    this.protein = protein;
  }
}

class Alcohol extends MenuItem {
  constructor(title, description, price, base) {
    super(title, description, price, "Alcohol");
    this.base = base;
  }
}




/***/ }),

/***/ "./src/util/createElement.js":
/*!***********************************!*\
  !*** ./src/util/createElement.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createElement(type, id, classes, text) {
  //construct element object and assign args as attrs
  const element = document.createElement(type);
  if (id) element.setAttribute("id", id);
  if (classes) element.setAttribute("class", classes);
  if (text) element.innerText = text;

  return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);


/***/ }),

/***/ "./src/util/loadMenuData.js":
/*!**********************************!*\
  !*** ./src/util/loadMenuData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_menu_csv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/menu.csv */ "./src/assets/menu.csv");
/* harmony import */ var _assets_menu_csv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_menu_csv__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuItem */ "./src/util/MenuItem.js");



function loadMenuData() {
  ingestCSV((_assets_menu_csv__WEBPACK_IMPORTED_MODULE_0___default()), _MenuItem__WEBPACK_IMPORTED_MODULE_1__.menu);
  return _MenuItem__WEBPACK_IMPORTED_MODULE_1__.menu;
}

function ingestCSV(csv, destination) {
  csv.forEach((item) => {
    let title = item["Title"];
    let description = item["Description"];
    let price = item["Price"];
    let category = item["Category"];

    if (item["Category"] == "Food") {
      let protein = item["Protein (Food)"];
      let food = new _MenuItem__WEBPACK_IMPORTED_MODULE_1__.Food(title, description, price, protein);
      destination.add(food);
    }
    if (item["Category"] == "Alcohol") {
      let base = item["Base (Alcohol)"];
      let alcohol = new _MenuItem__WEBPACK_IMPORTED_MODULE_1__.Alcohol(title, description, price, base);
      destination.add(alcohol);
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuData);


/***/ }),

/***/ "./src/assets/img/background.jpg":
/*!***************************************!*\
  !*** ./src/assets/img/background.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "89b3ab4e8fff10d7bd56.jpg";

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
/******/ 				scriptUrl = document.currentScript.src
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _util_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/createElement */ "./src/util/createElement.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact */ "./src/contact.js");







const content = document.getElementById("content");
content.appendChild((0,_navbar__WEBPACK_IMPORTED_MODULE_2__.createNavbar)());
const navs = document.querySelectorAll(".nav-link");
navs.forEach((a) => {
  a.addEventListener("click", (e) => {
    navigateTo(e.target);
  });
});

/* *****************************  */
//content.appendChild(createHome());
/* *****************************  */

content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_3__.createHome)());

function navigateTo(destination) {
  //remove existing content on the page
  content.removeChild(content.childNodes[1]);
  //check which nav was clicked and populate page
  if (destination.id == "a-home") {
    content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_3__.createHome)());
  }
  if (destination.id == "a-menu") {
    content.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_4__["default"])());
  }

  if (destination.id == "a-contact") {
    content.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_5__["default"])());
  }

  destination.classList.toggle("disabled");
  //enable the other destination links
  navs.forEach((a) => {
    if (a !== destination) {
      a.classList.remove("disabled");
    }
  });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixpREFBVTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpREFBVTtBQUNsQztBQUNBO0FBQ0Esd0JBQXdCLGlEQUFVO0FBQ2xDOztBQUVBO0FBQ0Esd0JBQXdCLG9EQUFhO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL21lbnUuY3N2Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2YmFyLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL3V0aWwvTWVudUl0ZW0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdXRpbC9jcmVhdGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL3V0aWwvbG9hZE1lbnVEYXRhLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1nL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GcmVkb2thK09uZSZmYW1pbHk9T3BlbitTYW5zJmZhbWlseT1QYWNpZmljbyZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1mb250LXByaW06IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgLS1mb250LXNlY29uZDogXFxcIkZyZWRva2EgT25lXFxcIiwgY3Vyc2l2ZTtcXG4gIC0tZm9udC1sb2dvOiBcXFwiUGFjaWZpY29cXFwiLCBjdXJzaXZlO1xcblxcbiAgLS1wcmltLTk6ICMwMzA0NWVmZjtcXG4gIC0tcHJpbS04OiAjMDIzZThhZmY7XFxuICAtLXByaW0tNzogIzAwNzdiNmZmO1xcbiAgLS1wcmltLTY6ICMwMDk2YzdmZjtcXG4gIC0tcHJpbS01OiAjMDBiNGQ4ZmY7XFxuICAtLXByaW0tNDogIzQ4Y2FlNGZmO1xcbiAgLS1wcmltLTM6ICM5MGUwZWZmZjtcXG4gIC0tcHJpbS0yOiAjYWRlOGY0ZmY7XFxuICAtLXByaW0tMTogI2NhZjBmOGZmO1xcblxcbiAgLS1ncmF5LTE6ICNmOGY5ZmFmZjtcXG4gIC0tZ3JheS0yOiAjZTllY2VmZmY7XFxuICAtLWdyYXktMzogI2RlZTJlNmZmO1xcbiAgLS1ncmF5LTQ6ICNjZWQ0ZGFmZjtcXG4gIC0tZ3JheS01OiAjYWRiNWJkZmY7XFxuICAtLWdyYXktNjogIzZjNzU3ZGZmO1xcbiAgLS1ncmF5LTc6ICM0OTUwNTdmZjtcXG4gIC0tZ3JheS04OiAjMzQzYTQwZmY7XFxuICAtLWdyYXktOTogIzIxMjUyOWZmO1xcblxcbiAgLS1kYXJrLXJlZDogI2VlNjA1NWZmO1xcbiAgLS1saWdodC1yZWQ6ICNmZjliODVmZjtcXG4gIC0tZGFyay1ncmVlbjogIzYwZDM5NGZmO1xcbiAgLS1saWdodC1ncmVlbjogI2FhZjY4M2ZmO1xcbiAgLS15ZWxsb3c6ICNmZmQ5N2RmZjtcXG59XFxuXFxuKixcXG46OmFmdGVyLFxcbjo6YmVmb3JlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5hLmRpc2FibGVkIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTEpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnI7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbS04KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE2cHg7XFxufVxcblxcbiNuYXYtbG9nbyB7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1sb2dvKTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGNvbG9yOiB2YXIoLS1ncmF5LTEpO1xcbn1cXG5cXG4ubmF2LWxpc3Qge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc2Vjb25kKTtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNnB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBjb2xvcjogdmFyKC0tZ3JheS0xKTtcXG59XFxuXFxuLm5hdi1saXN0IC5uYXYtaXRlbSA+IGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWdyYXktMSk7XFxufVxcblxcbi5uYXYtbGlzdCAubmF2LWl0ZW0gPiBhOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1ncmF5LTUpO1xcbn1cXG5cXG4jaWNvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMzJweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jaWNvbi1jb250YWluZXIgPiBpIHtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS1ncmF5LTEpO1xcbn1cXG5cXG4jbWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNtYWluLWJhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4jbWFpbi1vdmVybGF5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jbWFpbi1jb250ZW50IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6IHZhcigtLWdyYXktMSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMzJweDtcXG59XFxuXFxuI21haW4tY29udGVudCA+IHA6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNtYWluLWNvbnRlbnQgPiBwOm50aC1jaGlsZCgyKSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmJ0bi5vcmRlciB7XFxuICBoZWlnaHQ6IDcycHg7XFxuICB3aWR0aDogMjU2cHg7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICBib3JkZXI6IHNvbGlkIHZhcigtLWdyYXktMSkgMnB4O1xcbiAgY29sb3I6IHZhcigtLWdyYXktMSk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5idG4ub3JkZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS0xKTtcXG4gIGNvbG9yOiB2YXIoLS1ncmF5LTkpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudS5tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktNCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUuaXRlbSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTgpO1xcbiAgd2lkdGg6IDcwJTtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyIDFmcjtcXG4gIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgbWFyZ2luOiA4cHg7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWFpbi5jb250YWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zdWIuY29udGFjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTkpO1xcbiAgcGFkZGluZzogMTZweCA2NHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHFDQUFxQztFQUNyQyxnQ0FBZ0M7O0VBRWhDLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1COztFQUVuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjs7RUFFbkIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQywrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLGFBQWE7RUFDYiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlEQUFvRDtFQUNwRCxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFlBQVk7RUFDWixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtDQUFrQztFQUNsQywrQkFBK0I7RUFDL0Isb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsVUFBVTtFQUNWLE9BQU87RUFDUCxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GcmVkb2thK09uZSZmYW1pbHk9T3BlbitTYW5zJmZhbWlseT1QYWNpZmljbyZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG46cm9vdCB7XFxuICAtLWZvbnQtcHJpbTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICAtLWZvbnQtc2Vjb25kOiBcXFwiRnJlZG9rYSBPbmVcXFwiLCBjdXJzaXZlO1xcbiAgLS1mb250LWxvZ286IFxcXCJQYWNpZmljb1xcXCIsIGN1cnNpdmU7XFxuXFxuICAtLXByaW0tOTogIzAzMDQ1ZWZmO1xcbiAgLS1wcmltLTg6ICMwMjNlOGFmZjtcXG4gIC0tcHJpbS03OiAjMDA3N2I2ZmY7XFxuICAtLXByaW0tNjogIzAwOTZjN2ZmO1xcbiAgLS1wcmltLTU6ICMwMGI0ZDhmZjtcXG4gIC0tcHJpbS00OiAjNDhjYWU0ZmY7XFxuICAtLXByaW0tMzogIzkwZTBlZmZmO1xcbiAgLS1wcmltLTI6ICNhZGU4ZjRmZjtcXG4gIC0tcHJpbS0xOiAjY2FmMGY4ZmY7XFxuXFxuICAtLWdyYXktMTogI2Y4ZjlmYWZmO1xcbiAgLS1ncmF5LTI6ICNlOWVjZWZmZjtcXG4gIC0tZ3JheS0zOiAjZGVlMmU2ZmY7XFxuICAtLWdyYXktNDogI2NlZDRkYWZmO1xcbiAgLS1ncmF5LTU6ICNhZGI1YmRmZjtcXG4gIC0tZ3JheS02OiAjNmM3NTdkZmY7XFxuICAtLWdyYXktNzogIzQ5NTA1N2ZmO1xcbiAgLS1ncmF5LTg6ICMzNDNhNDBmZjtcXG4gIC0tZ3JheS05OiAjMjEyNTI5ZmY7XFxuXFxuICAtLWRhcmstcmVkOiAjZWU2MDU1ZmY7XFxuICAtLWxpZ2h0LXJlZDogI2ZmOWI4NWZmO1xcbiAgLS1kYXJrLWdyZWVuOiAjNjBkMzk0ZmY7XFxuICAtLWxpZ2h0LWdyZWVuOiAjYWFmNjgzZmY7XFxuICAtLXllbGxvdzogI2ZmZDk3ZGZmO1xcbn1cXG5cXG4qLFxcbjo6YWZ0ZXIsXFxuOjpiZWZvcmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmEuZGlzYWJsZWQge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMSk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmcjtcXG59XFxuXFxuI2hlYWRlciB7XFxuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltLTgpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTZweDtcXG59XFxuXFxuI25hdi1sb2dvIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWxvZ28pO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY29sb3I6IHZhcigtLWdyYXktMSk7XFxufVxcblxcbi5uYXYtbGlzdCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zZWNvbmQpO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE2cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGNvbG9yOiB2YXIoLS1ncmF5LTEpO1xcbn1cXG5cXG4ubmF2LWxpc3QgLm5hdi1pdGVtID4gYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tZ3JheS0xKTtcXG59XFxuXFxuLm5hdi1saXN0IC5uYXYtaXRlbSA+IGE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWdyYXktNSk7XFxufVxcblxcbiNpY29uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAzMnB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNpY29uLWNvbnRhaW5lciA+IGkge1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6IHZhcigtLWdyYXktMSk7XFxufVxcblxcbiNtYWluIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI21haW4tYmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLmpwZ1xcXCIpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbiNtYWluLW92ZXJsYXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNtYWluLWNvbnRlbnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogdmFyKC0tZ3JheS0xKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzMnB4O1xcbn1cXG5cXG4jbWFpbi1jb250ZW50ID4gcDpmaXJzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI21haW4tY29udGVudCA+IHA6bnRoLWNoaWxkKDIpIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uYnRuLm9yZGVyIHtcXG4gIGhlaWdodDogNzJweDtcXG4gIHdpZHRoOiAyNTZweDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIGJvcmRlcjogc29saWQgdmFyKC0tZ3JheS0xKSAycHg7XFxuICBjb2xvcjogdmFyKC0tZ3JheS0xKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLmJ0bi5vcmRlcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTEpO1xcbiAgY29sb3I6IHZhcigtLWdyYXktOSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51Lm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS00KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudS5pdGVtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktOCk7XFxuICB3aWR0aDogNzAlO1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnIgMWZyO1xcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBtYXJnaW46IDhweDtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tYWluLmNvbnRhY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnN1Yi5jb250YWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktOSk7XFxuICBwYWRkaW5nOiAxNnB4IDY0cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gW3tcIlRpdGxlXCI6XCJUaGUgTGFuZ21vcmVcIixcIkRlc2NyaXB0aW9uXCI6XCJDaGVlc2VidXJnZXIgd2l0aCBsZXR0dWNlIHRvbWF0byBvbmlvbnMgYW5kIHBpY2tsZXMuIFNlcnZlZCB3aXRoIHNpZGUgb2YgIGZyaWVzIGFuZCBtYXlvbm5haXNlXCIsXCJQcmljZVwiOlwiJDEwXCIsXCJDYXRlZ29yeVwiOlwiRm9vZFwiLFwiUHJvdGVpbiAoRm9vZClcIjpcIkJlZWZcIixcIkJhc2UgKEFsY29ob2wpXCI6bnVsbH0se1wiVGl0bGVcIjpcIlRoZSBTbmVsbFwiLFwiRGVzY3JpcHRpb25cIjpcIlJvYXN0ZWQgcG9yayBsb2luIHNlcnZlZCB3aXRoIHNpZGUgb2YgbWFzaGVkIHBvdGF0b2VzIGFuZCBncmVlbnNcIixcIlByaWNlXCI6XCIkMTVcIixcIkNhdGVnb3J5XCI6XCJGb29kXCIsXCJQcm90ZWluIChGb29kKVwiOlwiUG9ya1wiLFwiQmFzZSAoQWxjb2hvbClcIjpudWxsfSx7XCJUaXRsZVwiOlwiVGhlIEJ5cmRlXCIsXCJEZXNjcmlwdGlvblwiOlwiQ2hpY2tlbiBXaW5ncyBzZXJ2ZWQgd2l0aCBmcmVuY2ggZnJpZXNcIixcIlByaWNlXCI6XCIkOVwiLFwiQ2F0ZWdvcnlcIjpcIkZvb2RcIixcIlByb3RlaW4gKEZvb2QpXCI6XCJDaGlja2VuXCIsXCJCYXNlIChBbGNvaG9sKVwiOm51bGx9LHtcIlRpdGxlXCI6XCJUaGUgTmF2YXJyb1wiLFwiRGVzY3JpcHRpb25cIjpcIkNoaWNrZW4gRW5jaGlsYWRhcyBzZXJ2ZWQgd2l0aCBncmVlbiBjaGlsZSBzYWxzYSB2ZXJkZS4gQ29tZXMgd2l0aCBzaWRlIG9mIHNwYW5pc2ggcmljZSBhbmQgYmxhY2sgYmVhbnNcIixcIlByaWNlXCI6XCIkMTJcIixcIkNhdGVnb3J5XCI6XCJGb29kXCIsXCJQcm90ZWluIChGb29kKVwiOlwiQ2hpY2tlblwiLFwiQmFzZSAoQWxjb2hvbClcIjpudWxsfSx7XCJUaXRsZVwiOlwiTWFydHlcIixcIkRlc2NyaXB0aW9uXCI6XCJSeWUgYm91cmJvbiBvbGQgZmFzaGlvbmVkXCIsXCJQcmljZVwiOlwiJDEwXCIsXCJDYXRlZ29yeVwiOlwiQWxjb2hvbFwiLFwiUHJvdGVpbiAoRm9vZClcIjpudWxsLFwiQmFzZSAoQWxjb2hvbClcIjpcIldoaXNrZXlcIn0se1wiVGl0bGVcIjpcIldlbmR5XCIsXCJEZXNjcmlwdGlvblwiOlwiVm9ka2EgbmVhdFwiLFwiUHJpY2VcIjpcIiQ0XCIsXCJDYXRlZ29yeVwiOlwiQWxjb2hvbFwiLFwiUHJvdGVpbiAoRm9vZClcIjpudWxsLFwiQmFzZSAoQWxjb2hvbClcIjpcIlZvZGthXCJ9LHtcIlRpdGxlXCI6XCJIZWxlblwiLFwiRGVzY3JpcHRpb25cIjpcIkJsb29keSBtYXJ5XCIsXCJQcmljZVwiOlwiJDdcIixcIkNhdGVnb3J5XCI6XCJBbGNvaG9sXCIsXCJQcm90ZWluIChGb29kKVwiOm51bGwsXCJCYXNlIChBbGNvaG9sKVwiOlwiVm9ka2FcIn0se1wiVGl0bGVcIjpcIlJ1dGhcIixcIkRlc2NyaXB0aW9uXCI6XCJOYXR1cmFsIGxpZ2h0IHNlcnZlZCB3aXRoIHNpZGUgc2hvdCBvZiBGaXJlYmFsbFwiLFwiUHJpY2VcIjpcIiQ1XCIsXCJDYXRlZ29yeVwiOlwiQWxjb2hvbFwiLFwiUHJvdGVpbiAoRm9vZClcIjpudWxsLFwiQmFzZSAoQWxjb2hvbClcIjpcIkJlZXJcIn1dIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuL3V0aWwvY3JlYXRlRWxlbWVudFwiO1xuXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xuICBjb25zdCBtYWluRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIlwiLCBcIm1haW4gY29udGFjdFwiKTtcbiAgY29uc3Qgc3ViRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIlwiLCBcInN1YiBjb250YWN0XCIpO1xuICBjb25zdCBuYW1lUCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiXCIsIFwiXCIsIFwiUmFjaGVsIEdhcnJpc29uXCIpO1xuICBjb25zdCBlbWFpbFAgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcIlwiLCBcIlwiLCBcInJnYXJyaXNvbkBvLnphcmtcIik7XG4gIGNvbnN0IHBob25lUCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiXCIsIFwiXCIsIFwiKDU1NSktNTU1LTU1NTVcIik7XG4gIHN1YkRpdi5hcHBlbmRDaGlsZChuYW1lUCk7XG4gIHN1YkRpdi5hcHBlbmRDaGlsZChlbWFpbFApO1xuICBzdWJEaXYuYXBwZW5kQ2hpbGQocGhvbmVQKTtcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChzdWJEaXYpO1xuICByZXR1cm4gbWFpbkRpdjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdDtcbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuL3V0aWwvY3JlYXRlRWxlbWVudFwiO1xuXG5mdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICAvLyBjcmVhdGUgbWFpbiBkaXYgYW5kIGFwcGx5IGJhY2sgaW1hZ2UsIG92ZXJsYXksIGFuZCBjb250ZW50IHBsYWNlaG9sZGVyXG4gIGNvbnN0IG1haW4gPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibWFpblwiKTtcbiAgY29uc3QgbWFpbkJhY2tncm91bmQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibWFpbi1iYWNrZ3JvdW5kXCIpO1xuICBjb25zdCBtYWluT3ZlcmxheSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJtYWluLW92ZXJsYXlcIik7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIm1haW4tY29udGVudFwiKTtcblxuICAvL2NvbnRlbnRcbiAgY29uc3QgZ3JlZXRpbmcgPSBjcmVhdGVFbGVtZW50KFxuICAgIFwicFwiLFxuICAgIFwiXCIsXG4gICAgXCJncmVldGluZ1wiLFxuICAgIFwiT3phcmsncyBGaW5lc3QgTGFrZXNpZGUgQ3Vpc2luZVwiXG4gICk7XG4gIGNvbnN0IGFkZHJlc3MgPSBjcmVhdGVFbGVtZW50KFxuICAgIFwicFwiLFxuICAgIFwiXCIsXG4gICAgXCJncmVldGluZyBhZGRyZXNzXCIsXG4gICAgXCI3MjEgQWxob25uYSBEci4gT3NhZ2UsIEFSIDcyNjExXCJcbiAgKTtcbiAgY29uc3Qgb3JkZXJCdG4gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiXCIsIFwiYnRuIG9yZGVyXCIsIFwiT3JkZXIgT25saW5lXCIpO1xuXG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGdyZWV0aW5nKTtcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG9yZGVyQnRuKTtcblxuICBtYWluLmFwcGVuZENoaWxkKG1haW5CYWNrZ3JvdW5kKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChtYWluT3ZlcmxheSk7XG4gIG1haW4uYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpO1xuXG4gIHJldHVybiBtYWluO1xufVxuXG5leHBvcnQgeyBjcmVhdGVIb21lIH07XG4iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi91dGlsL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCBsb2FkTWVudURhdGEgZnJvbSBcIi4vdXRpbC9sb2FkTWVudURhdGFcIjtcbmltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi91dGlsL01lbnVJdGVtXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gIGxldCBtYWluQmFja2dyb3VuZERpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJtYWluLWJhY2tncm91bmRcIik7XG4gIGxldCBtYWluT3ZlcmxheURpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJtYWluLW92ZXJsYXlcIik7XG5cbiAgLy8gY2hlY2sgdG8gc2VlIGlmIG1lbnVzIGJlZW4gcG9wdWxhdGVkIHlldFxuICAvLyBhdm9pZHMgZHVwbGljYXRlIG1lbnUgYXBwZW5kaW5nXG4gIGlmIChtZW51LmdldE1lbnUoKS5sZW5ndGggPT0gMCkge1xuICAgIGxvYWRNZW51RGF0YSgpO1xuICB9XG4gIGxldCBtZW51TWFpbkRpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJtZW51IG1haW5cIik7XG5cbiAgbWVudS5nZXRNZW51KCkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGxldCBpdGVtRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIlwiLCBcIm1lbnUgaXRlbVwiKTtcbiAgICBsZXQgdGl0bGVQID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJcIiwgXCJpdGVtIHRpdGxlXCIsIGl0ZW0udGl0bGUpO1xuICAgIGxldCBkZXNjcmlwdGlvblAgPSBjcmVhdGVFbGVtZW50KFxuICAgICAgXCJwXCIsXG4gICAgICBcIlwiLFxuICAgICAgXCJpdGVtIGRlc2NyaXB0aW9uXCIsXG4gICAgICBpdGVtLmRlc2NyaXB0aW9uXG4gICAgKTtcbiAgICBsZXQgcHJpY2VQID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJcIiwgXCJpdGVtIHByaWNlXCIsIGl0ZW0ucHJpY2UpO1xuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQodGl0bGVQKTtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uUCk7XG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChwcmljZVApO1xuXG4gICAgbWVudU1haW5EaXYuYXBwZW5kQ2hpbGQoaXRlbURpdik7XG4gIH0pO1xuICByZXR1cm4gbWVudU1haW5EaXY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnU7XG4iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi91dGlsL2NyZWF0ZUVsZW1lbnRcIjtcblxuZnVuY3Rpb24gY3JlYXRlTmF2YmFyKCkge1xuICAvL2NyZWF0ZSBuYXZiYXJcbiAgY29uc3QgbmF2YmFyID0gY3JlYXRlRWxlbWVudChcImhlYWRlclwiLCBcImhlYWRlclwiKTtcblxuICAvLyBsb2dvXG4gIGNvbnN0IGxvZ28gPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibmF2LWxvZ29cIiwgXCJuYXZiYXJcIiwgXCJUaGUgQmx1ZSBDYXQgTG9kZ2VcIik7XG5cbiAgLy8gbGlzdCBvZiBsaW5rc1xuICBjb25zdCBuYXZMaXN0ID0gY3JlYXRlRWxlbWVudChcInVsXCIsIFwiXCIsIFtcIm5hdi1saXN0XCJdKTtcbiAgY29uc3QgbmF2TGlua0J1aWxkZXJzID0gW1wiaG9tZVwiLCBcIm1lbnVcIiwgXCJjb250YWN0XCJdO1xuICBjb25zdCBuYXZMaW5rcyA9IFtdO1xuXG4gIG5hdkxpbmtCdWlsZGVycy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgbGV0IGxpID0gY3JlYXRlRWxlbWVudChcImxpXCIsIGBsaW5rLSR7bGlua31gLCBcIm5hdi1pdGVtXCIpO1xuICAgIGxldCBhID0gY3JlYXRlRWxlbWVudChcImFcIiwgYGEtJHtsaW5rfWAsIFwibmF2LWxpbmtcIiwgbGluayk7XG4gICAgYS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiI1wiKTtcbiAgICBsaS5hcHBlbmRDaGlsZChhKTtcbiAgICBuYXZMaW5rcy5wdXNoKGxpKTtcbiAgfSk7XG5cbiAgbmF2TGlua3MuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIG5hdkxpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIH0pO1xuXG4gIC8vIGJyYW5kIGljb25zICsgc29jaWFsXG4gIGNvbnN0IGZhY2Vib29rID0gY3JlYXRlRWxlbWVudChcbiAgICBcImlcIixcbiAgICBcImZhY2Vib29rLWljb25cIixcbiAgICBcImljb25zIGZhLWJyYW5kcyBmYS1mYWNlYm9va1wiXG4gICk7XG4gIGNvbnN0IGluc3RhZ3JhbSA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgXCJpXCIsXG4gICAgXCJpbnN0YWdyYW0taWNvblwiLFxuICAgIFwiaWNvbnMgZmEtYnJhbmRzIGZhLWluc3RhZ3JhbVwiXG4gICk7XG5cbiAgY29uc3QgaWNvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJpY29uLWNvbnRhaW5lclwiKTtcbiAgaWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChmYWNlYm9vayk7XG4gIGljb25Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5zdGFncmFtKTtcblxuICBuYXZiYXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gIG5hdmJhci5hcHBlbmRDaGlsZChuYXZMaXN0KTtcbiAgbmF2YmFyLmFwcGVuZENoaWxkKGljb25Db250YWluZXIpO1xuXG4gIHJldHVybiBuYXZiYXI7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZU5hdmJhciB9O1xuIiwiY29uc3QgbWVudSA9ICgoKSA9PiB7XG4gIGNvbnN0IG1lbnVJdGVtcyA9IFtdO1xuXG4gIGNvbnN0IGdldE1lbnUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG1lbnVJdGVtcztcbiAgfTtcblxuICBjb25zdCBhZGQgPSAobWVudUl0ZW0pID0+IHtcbiAgICBtZW51SXRlbXMucHVzaChtZW51SXRlbSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlID0gKG1lbnVJdGVtKSA9PiB7XG4gICAgbWVudUl0ZW1zLnNwbGljZShtZW51SXRlbXMuaW5kZXhPZihtZW51SXRlbSkpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0TWVudSxcbiAgICBhZGQsXG4gICAgcmVtb3ZlLFxuICB9O1xufSkoKTtcblxuY2xhc3MgTWVudUl0ZW0ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIHByaWNlLCBjYXRlZ29yeSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgfVxufVxuXG5jbGFzcyBGb29kIGV4dGVuZHMgTWVudUl0ZW0ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIHByaWNlLCBwcm90ZWluKSB7XG4gICAgc3VwZXIodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmljZSwgXCJGb29kXCIpO1xuICAgIHRoaXMucHJvdGVpbiA9IHByb3RlaW47XG4gIH1cbn1cblxuY2xhc3MgQWxjb2hvbCBleHRlbmRzIE1lbnVJdGVtIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmljZSwgYmFzZSkge1xuICAgIHN1cGVyKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpY2UsIFwiQWxjb2hvbFwiKTtcbiAgICB0aGlzLmJhc2UgPSBiYXNlO1xuICB9XG59XG5cbmV4cG9ydCB7IG1lbnUsIE1lbnVJdGVtLCBGb29kLCBBbGNvaG9sIH07XG4iLCJmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGlkLCBjbGFzc2VzLCB0ZXh0KSB7XG4gIC8vY29uc3RydWN0IGVsZW1lbnQgb2JqZWN0IGFuZCBhc3NpZ24gYXJncyBhcyBhdHRyc1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgaWYgKGlkKSBlbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgaWYgKGNsYXNzZXMpIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgY2xhc3Nlcyk7XG4gIGlmICh0ZXh0KSBlbGVtZW50LmlubmVyVGV4dCA9IHRleHQ7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVsZW1lbnQ7XG4iLCJpbXBvcnQgbWVudUNTViBmcm9tIFwiLi4vYXNzZXRzL21lbnUuY3N2XCI7XG5pbXBvcnQgeyBtZW51LCBNZW51SXRlbSwgRm9vZCwgQWxjb2hvbCB9IGZyb20gXCIuL01lbnVJdGVtXCI7XG5cbmZ1bmN0aW9uIGxvYWRNZW51RGF0YSgpIHtcbiAgaW5nZXN0Q1NWKG1lbnVDU1YsIG1lbnUpO1xuICByZXR1cm4gbWVudTtcbn1cblxuZnVuY3Rpb24gaW5nZXN0Q1NWKGNzdiwgZGVzdGluYXRpb24pIHtcbiAgY3N2LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBsZXQgdGl0bGUgPSBpdGVtW1wiVGl0bGVcIl07XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gaXRlbVtcIkRlc2NyaXB0aW9uXCJdO1xuICAgIGxldCBwcmljZSA9IGl0ZW1bXCJQcmljZVwiXTtcbiAgICBsZXQgY2F0ZWdvcnkgPSBpdGVtW1wiQ2F0ZWdvcnlcIl07XG5cbiAgICBpZiAoaXRlbVtcIkNhdGVnb3J5XCJdID09IFwiRm9vZFwiKSB7XG4gICAgICBsZXQgcHJvdGVpbiA9IGl0ZW1bXCJQcm90ZWluIChGb29kKVwiXTtcbiAgICAgIGxldCBmb29kID0gbmV3IEZvb2QodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmljZSwgcHJvdGVpbik7XG4gICAgICBkZXN0aW5hdGlvbi5hZGQoZm9vZCk7XG4gICAgfVxuICAgIGlmIChpdGVtW1wiQ2F0ZWdvcnlcIl0gPT0gXCJBbGNvaG9sXCIpIHtcbiAgICAgIGxldCBiYXNlID0gaXRlbVtcIkJhc2UgKEFsY29ob2wpXCJdO1xuICAgICAgbGV0IGFsY29ob2wgPSBuZXcgQWxjb2hvbCh0aXRsZSwgZGVzY3JpcHRpb24sIHByaWNlLCBiYXNlKTtcbiAgICAgIGRlc3RpbmF0aW9uLmFkZChhbGNvaG9sKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudURhdGE7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vdXRpbC9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgeyBjcmVhdGVOYXZiYXIgfSBmcm9tIFwiLi9uYXZiYXJcIjtcbmltcG9ydCB7IGNyZWF0ZUhvbWUgfSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgY3JlYXRlTWVudSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgY3JlYXRlQ29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5jb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU5hdmJhcigpKTtcbmNvbnN0IG5hdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1saW5rXCIpO1xubmF2cy5mb3JFYWNoKChhKSA9PiB7XG4gIGEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgbmF2aWdhdGVUbyhlLnRhcmdldCk7XG4gIH0pO1xufSk7XG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqICAqL1xuLy9jb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAgKi9cblxuY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xuXG5mdW5jdGlvbiBuYXZpZ2F0ZVRvKGRlc3RpbmF0aW9uKSB7XG4gIC8vcmVtb3ZlIGV4aXN0aW5nIGNvbnRlbnQgb24gdGhlIHBhZ2VcbiAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmNoaWxkTm9kZXNbMV0pO1xuICAvL2NoZWNrIHdoaWNoIG5hdiB3YXMgY2xpY2tlZCBhbmQgcG9wdWxhdGUgcGFnZVxuICBpZiAoZGVzdGluYXRpb24uaWQgPT0gXCJhLWhvbWVcIikge1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcbiAgfVxuICBpZiAoZGVzdGluYXRpb24uaWQgPT0gXCJhLW1lbnVcIikge1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcbiAgfVxuXG4gIGlmIChkZXN0aW5hdGlvbi5pZCA9PSBcImEtY29udGFjdFwiKSB7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0KCkpO1xuICB9XG5cbiAgZGVzdGluYXRpb24uY2xhc3NMaXN0LnRvZ2dsZShcImRpc2FibGVkXCIpO1xuICAvL2VuYWJsZSB0aGUgb3RoZXIgZGVzdGluYXRpb24gbGlua3NcbiAgbmF2cy5mb3JFYWNoKChhKSA9PiB7XG4gICAgaWYgKGEgIT09IGRlc3RpbmF0aW9uKSB7XG4gICAgICBhLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFwiKTtcbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9