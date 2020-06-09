module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/coponents/ButtonComponent.tsx":
/*!*******************************************!*\
  !*** ./src/coponents/ButtonComponent.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/tongthanaphon/Works/practice/school-ui/src/coponents/ButtonComponent.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst ButtonComponent = props => {\n  const {\n    text,\n    background,\n    color,\n    handleClick\n  } = props;\n  return __jsx(ButtonItem, {\n    style: {\n      background: background,\n      color: color\n    },\n    onClick: handleClick,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, text);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ButtonComponent);\nconst ButtonItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"])`\n  width: 140px;\n  height: 45px;\n  font-size: 15px;\n\n  @media screen and (max-width: ${p => p.theme.breakpoints.xs.max}) {\n    width: 100%;\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29wb25lbnRzL0J1dHRvbkNvbXBvbmVudC50c3g/NjU5MiJdLCJuYW1lcyI6WyJCdXR0b25Db21wb25lbnQiLCJwcm9wcyIsInRleHQiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJoYW5kbGVDbGljayIsIkJ1dHRvbkl0ZW0iLCJzdHlsZWQiLCJCdXR0b24iLCJwIiwidGhlbWUiLCJicmVha3BvaW50cyIsInhzIiwibWF4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBU0EsTUFBTUEsZUFBZSxHQUFJQyxLQUFELElBQWlDO0FBQ3ZELFFBQU07QUFBRUMsUUFBRjtBQUFRQyxjQUFSO0FBQW9CQyxTQUFwQjtBQUEyQkM7QUFBM0IsTUFBMkNKLEtBQWpEO0FBRUEsU0FDRSxNQUFDLFVBQUQ7QUFBWSxTQUFLLEVBQUU7QUFBRUUsZ0JBQVUsRUFBRUEsVUFBZDtBQUEwQkMsV0FBSyxFQUFFQTtBQUFqQyxLQUFuQjtBQUE2RCxXQUFPLEVBQUVDLFdBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0gsSUFESCxDQURGO0FBS0QsQ0FSRDs7QUFVZUYsOEVBQWY7QUFFQSxNQUFNTSxVQUFVLEdBQUdDLHdEQUFNLENBQUNDLDJDQUFELENBQVM7Ozs7O2tDQUtDQyxDQUFELElBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxXQUFSLENBQW9CQyxFQUFwQixDQUF1QkMsR0FBSTs7O0NBTHBFIiwiZmlsZSI6Ii4vc3JjL2NvcG9uZW50cy9CdXR0b25Db21wb25lbnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmludGVyZmFjZSBCdXR0b25Db21wb25lbnRQcm9wcyB7XG4gIHRleHQ6IHN0cmluZ1xuICBiYWNrZ3JvdW5kOiBzdHJpbmdcbiAgY29sb3I6IHN0cmluZ1xuICBoYW5kbGVDbGljaz86ICgpID0+IHZvaWRcbn1cblxuY29uc3QgQnV0dG9uQ29tcG9uZW50ID0gKHByb3BzOiBCdXR0b25Db21wb25lbnRQcm9wcykgPT4ge1xuICBjb25zdCB7IHRleHQsIGJhY2tncm91bmQsIGNvbG9yLCBoYW5kbGVDbGljayB9ID0gcHJvcHNcblxuICByZXR1cm4gKFxuICAgIDxCdXR0b25JdGVtIHN0eWxlPXt7IGJhY2tncm91bmQ6IGJhY2tncm91bmQsIGNvbG9yOiBjb2xvciB9fSBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICB7dGV4dH1cbiAgICA8L0J1dHRvbkl0ZW0+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uQ29tcG9uZW50XG5cbmNvbnN0IEJ1dHRvbkl0ZW0gPSBzdHlsZWQoQnV0dG9uKWBcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkeyhwKSA9PiBwLnRoZW1lLmJyZWFrcG9pbnRzLnhzLm1heH0pIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/coponents/ButtonComponent.tsx\n");

/***/ }),

/***/ "./src/coponents/Header.tsx":
/*!**********************************!*\
  !*** ./src/coponents/Header.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/tongthanaphon/Works/practice/school-ui/src/coponents/Header.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Header = props => {\n  const {\n    text\n  } = props;\n  return __jsx(HeaderItem, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 10\n    }\n  }, text);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nconst HeaderItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`\n  font-size: 25px;\n  font-weight: bold;\n  margin: 0px;\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29wb25lbnRzL0hlYWRlci50c3g/NmE3ZiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJwcm9wcyIsInRleHQiLCJIZWFkZXJJdGVtIiwic3R5bGVkIiwicCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7O0FBTUEsTUFBTUEsTUFBTSxHQUFJQyxLQUFELElBQXdCO0FBQ3JDLFFBQU07QUFBRUM7QUFBRixNQUFXRCxLQUFqQjtBQUVBLFNBQU8sTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBYUMsSUFBYixDQUFQO0FBQ0QsQ0FKRDs7QUFNZUYscUVBQWY7QUFFQSxNQUFNRyxVQUFVLEdBQUdDLHdEQUFNLENBQUNDLENBQUU7Ozs7Q0FBNUIiLCJmaWxlIjoiLi9zcmMvY29wb25lbnRzL0hlYWRlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5pbnRlcmZhY2UgSGVhZGVyUHJvcHMge1xuICB0ZXh0OiBzdHJpbmdcbn1cblxuY29uc3QgSGVhZGVyID0gKHByb3BzOiBIZWFkZXJQcm9wcykgPT4ge1xuICBjb25zdCB7IHRleHQgfSA9IHByb3BzXG5cbiAgcmV0dXJuIDxIZWFkZXJJdGVtPnt0ZXh0fTwvSGVhZGVySXRlbT5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG5cbmNvbnN0IEhlYWRlckl0ZW0gPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwcHg7XG5gXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/coponents/Header.tsx\n");

/***/ }),

/***/ "./src/coponents/ImageCover.tsx":
/*!**************************************!*\
  !*** ./src/coponents/ImageCover.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/tongthanaphon/Works/practice/school-ui/src/coponents/ImageCover.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst ImageConver = props => {\n  const {\n    url\n  } = props;\n  return __jsx(ImageItem, {\n    alt: \"cover\",\n    src: `${url}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 10\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageConver);\nconst ImageItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img`\n  width: 100%;\n  height: 100vh;\n\n  @media screen and (max-width: ${p => p.theme.breakpoints.xs.max}) {\n    height: 30vh;\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29wb25lbnRzL0ltYWdlQ292ZXIudHN4PzZkYTQiXSwibmFtZXMiOlsiSW1hZ2VDb252ZXIiLCJwcm9wcyIsInVybCIsIkltYWdlSXRlbSIsInN0eWxlZCIsImltZyIsInAiLCJ0aGVtZSIsImJyZWFrcG9pbnRzIiwieHMiLCJtYXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOztBQU1BLE1BQU1BLFdBQVcsR0FBSUMsS0FBRCxJQUE2QjtBQUMvQyxRQUFNO0FBQUVDO0FBQUYsTUFBVUQsS0FBaEI7QUFFQSxTQUFPLE1BQUMsU0FBRDtBQUFXLE9BQUcsRUFBQyxPQUFmO0FBQXVCLE9BQUcsRUFBRyxHQUFFQyxHQUFJLEVBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUDtBQUNELENBSkQ7O0FBTWVGLDBFQUFmO0FBRUEsTUFBTUcsU0FBUyxHQUFHQyx3REFBTSxDQUFDQyxHQUFJOzs7O2tDQUlNQyxDQUFELElBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxXQUFSLENBQW9CQyxFQUFwQixDQUF1QkMsR0FBSTs7O0NBSnBFIiwiZmlsZSI6Ii4vc3JjL2NvcG9uZW50cy9JbWFnZUNvdmVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmludGVyZmFjZSBJbWFnZUNvbnZlclByb3BzIHtcbiAgdXJsOiBzdHJpbmdcbn1cblxuY29uc3QgSW1hZ2VDb252ZXIgPSAocHJvcHM6IEltYWdlQ29udmVyUHJvcHMpID0+IHtcbiAgY29uc3QgeyB1cmwgfSA9IHByb3BzXG5cbiAgcmV0dXJuIDxJbWFnZUl0ZW0gYWx0PVwiY292ZXJcIiBzcmM9e2Ake3VybH1gfSAvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNvbnZlclxuXG5jb25zdCBJbWFnZUl0ZW0gPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkeyhwKSA9PiBwLnRoZW1lLmJyZWFrcG9pbnRzLnhzLm1heH0pIHtcbiAgICBoZWlnaHQ6IDMwdmg7XG4gIH1cbmBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/coponents/ImageCover.tsx\n");

/***/ }),

/***/ "./src/coponents/InputComponent.tsx":
/*!******************************************!*\
  !*** ./src/coponents/InputComponent.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/tongthanaphon/Works/practice/school-ui/src/coponents/InputComponent.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst InputComponent = props => {\n  const {\n    title,\n    placeholder,\n    hint,\n    setCode\n  } = props;\n  return __jsx(RootContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, __jsx(TextContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, __jsx(TitleInput, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, title), __jsx(HintText, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, hint)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n    placeholder: placeholder,\n    onChange: e => setCode(e.target.value),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (InputComponent);\nconst RootContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div``;\nconst TitleInput = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p`\n  margin-bottom: 10px;\n  font-size: 18px;\n\n  @media screen and (max-width: ${p => p.theme.breakpoints.xs.max}) {\n    font-size: 15px;\n  }\n`;\nconst HintText = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p`\n  margin-bottom: 10px;\n  margin-left: 10px;\n  font-size: 18px;\n  color: #d4cfcf;\n\n  @media screen and (max-width: ${p => p.theme.breakpoints.xs.max}) {\n    font-size: 15px;\n  }\n`;\nconst TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`\n  display: flex;\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29wb25lbnRzL0lucHV0Q29tcG9uZW50LnRzeD8xZTNlIl0sIm5hbWVzIjpbIklucHV0Q29tcG9uZW50IiwicHJvcHMiLCJ0aXRsZSIsInBsYWNlaG9sZGVyIiwiaGludCIsInNldENvZGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJSb290Q29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiVGl0bGVJbnB1dCIsInAiLCJ0aGVtZSIsImJyZWFrcG9pbnRzIiwieHMiLCJtYXgiLCJIaW50VGV4dCIsIlRleHRDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFTQSxNQUFNQSxjQUFjLEdBQUlDLEtBQUQsSUFBZ0M7QUFDckQsUUFBTTtBQUFFQyxTQUFGO0FBQVNDLGVBQVQ7QUFBc0JDLFFBQXRCO0FBQTRCQztBQUE1QixNQUF3Q0osS0FBOUM7QUFFQSxTQUNFLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFhQyxLQUFiLENBREYsRUFFRSxNQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFXRSxJQUFYLENBRkYsQ0FERixFQUtFLE1BQUMsMENBQUQ7QUFBTyxlQUFXLEVBQUVELFdBQXBCO0FBQWlDLFlBQVEsRUFBR0csQ0FBRCxJQUFPRCxPQUFPLENBQUNDLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQURGO0FBU0QsQ0FaRDs7QUFjZVIsNkVBQWY7QUFFQSxNQUFNUyxhQUFhLEdBQUdDLHdEQUFNLENBQUNDLEdBQUksRUFBakM7QUFFQSxNQUFNQyxVQUFVLEdBQUdGLHdEQUFNLENBQUNHLENBQUU7Ozs7a0NBSU9BLENBQUQsSUFBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLFdBQVIsQ0FBb0JDLEVBQXBCLENBQXVCQyxHQUFJOzs7Q0FKcEU7QUFTQSxNQUFNQyxRQUFRLEdBQUdSLHdEQUFNLENBQUNHLENBQUU7Ozs7OztrQ0FNU0EsQ0FBRCxJQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUUMsV0FBUixDQUFvQkMsRUFBcEIsQ0FBdUJDLEdBQUk7OztDQU5wRTtBQVdBLE1BQU1FLGFBQWEsR0FBR1Qsd0RBQU0sQ0FBQ0MsR0FBSTs7Q0FBakMiLCJmaWxlIjoiLi9zcmMvY29wb25lbnRzL0lucHV0Q29tcG9uZW50LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnYW50ZCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmludGVyZmFjZSBJbnB1dENvbXBvbmVudFByb3BzIHtcbiAgdGl0bGU6IHN0cmluZ1xuICBwbGFjZWhvbGRlcjogc3RyaW5nXG4gIHNldENvZGU/OiAoY29kZSkgPT4gdm9pZFxuICBoaW50Pzogc3RyaW5nXG59XG5cbmNvbnN0IElucHV0Q29tcG9uZW50ID0gKHByb3BzOiBJbnB1dENvbXBvbmVudFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdGl0bGUsIHBsYWNlaG9sZGVyLCBoaW50LCBzZXRDb2RlIH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPFJvb3RDb250YWluZXI+XG4gICAgICA8VGV4dENvbnRhaW5lcj5cbiAgICAgICAgPFRpdGxlSW5wdXQ+e3RpdGxlfTwvVGl0bGVJbnB1dD5cbiAgICAgICAgPEhpbnRUZXh0PntoaW50fTwvSGludFRleHQ+XG4gICAgICA8L1RleHRDb250YWluZXI+XG4gICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSBvbkNoYW5nZT17KGUpID0+IHNldENvZGUoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgIDwvUm9vdENvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dENvbXBvbmVudFxuXG5jb25zdCBSb290Q29udGFpbmVyID0gc3R5bGVkLmRpdmBgXG5cbmNvbnN0IFRpdGxlSW5wdXQgPSBzdHlsZWQucGBcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7KHApID0+IHAudGhlbWUuYnJlYWtwb2ludHMueHMubWF4fSkge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuYFxuXG5jb25zdCBIaW50VGV4dCA9IHN0eWxlZC5wYFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2Q0Y2ZjZjtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkeyhwKSA9PiBwLnRoZW1lLmJyZWFrcG9pbnRzLnhzLm1heH0pIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbmBcblxuY29uc3QgVGV4dENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG5gXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/coponents/InputComponent.tsx\n");

/***/ }),

/***/ "./src/coponents/Logo.tsx":
/*!********************************!*\
  !*** ./src/coponents/Logo.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/tongthanaphon/Works/practice/school-ui/src/coponents/Logo.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Logo = props => {\n  const {\n    url,\n    width\n  } = props;\n  return __jsx(LogoItem, {\n    alt: \"logo\",\n    src: `${url}`,\n    style: {\n      width: width\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 10\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Logo);\nconst LogoItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img`\n  /* @media screen and (max-width: ${p => p.theme.breakpoints.xs.max}) {\n    width: 50vw;\n  } */\n  /* width: 120px; */\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29wb25lbnRzL0xvZ28udHN4PzQzYjkiXSwibmFtZXMiOlsiTG9nbyIsInByb3BzIiwidXJsIiwid2lkdGgiLCJMb2dvSXRlbSIsInN0eWxlZCIsImltZyIsInAiLCJ0aGVtZSIsImJyZWFrcG9pbnRzIiwieHMiLCJtYXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOztBQU9BLE1BQU1BLElBQUksR0FBSUMsS0FBRCxJQUFzQjtBQUNqQyxRQUFNO0FBQUVDLE9BQUY7QUFBT0M7QUFBUCxNQUFpQkYsS0FBdkI7QUFFQSxTQUFPLE1BQUMsUUFBRDtBQUFVLE9BQUcsRUFBQyxNQUFkO0FBQXFCLE9BQUcsRUFBRyxHQUFFQyxHQUFJLEVBQWpDO0FBQW9DLFNBQUssRUFBRTtBQUFFQyxXQUFLLEVBQUVBO0FBQVQsS0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQO0FBQ0QsQ0FKRDs7QUFNZUgsbUVBQWY7QUFFQSxNQUFNSSxRQUFRLEdBQUdDLHdEQUFNLENBQUNDLEdBQUk7cUNBQ1VDLENBQUQsSUFBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLFdBQVIsQ0FBb0JDLEVBQXBCLENBQXVCQyxHQUFJOzs7O0NBRHZFIiwiZmlsZSI6Ii4vc3JjL2NvcG9uZW50cy9Mb2dvLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmludGVyZmFjZSBMb2dvUHJvcHMge1xuICB1cmw6IHN0cmluZ1xuICB3aWR0aDogc3RyaW5nXG59XG5cbmNvbnN0IExvZ28gPSAocHJvcHM6IExvZ29Qcm9wcykgPT4ge1xuICBjb25zdCB7IHVybCwgd2lkdGggfSA9IHByb3BzXG5cbiAgcmV0dXJuIDxMb2dvSXRlbSBhbHQ9XCJsb2dvXCIgc3JjPXtgJHt1cmx9YH0gc3R5bGU9e3sgd2lkdGg6IHdpZHRoIH19IC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ29cblxuY29uc3QgTG9nb0l0ZW0gPSBzdHlsZWQuaW1nYFxuICAvKiBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkeyhwKSA9PiBwLnRoZW1lLmJyZWFrcG9pbnRzLnhzLm1heH0pIHtcbiAgICB3aWR0aDogNTB2dztcbiAgfSAqL1xuICAvKiB3aWR0aDogMTIwcHg7ICovXG5gXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/coponents/Logo.tsx\n");

/***/ }),

/***/ "./src/coponents/SchoolCodeForm.tsx":
/*!******************************************!*\
  !*** ./src/coponents/SchoolCodeForm.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ramda */ \"ramda\");\n/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _modules_login_selectprs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/login/selectprs */ \"./src/modules/login/selectprs.ts\");\n/* harmony import */ var _modules_login_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/login/actions */ \"./src/modules/login/actions.ts\");\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Logo */ \"./src/coponents/Logo.tsx\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Header */ \"./src/coponents/Header.tsx\");\n/* harmony import */ var _InputComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./InputComponent */ \"./src/coponents/InputComponent.tsx\");\n/* harmony import */ var _ButtonComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ButtonComponent */ \"./src/coponents/ButtonComponent.tsx\");\nvar _jsxFileName = \"/home/tongthanaphon/Works/practice/school-ui/src/coponents/SchoolCodeForm.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\nconst SchoolCodeForm = () => {\n  const {\n    0: code,\n    1: setCode\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"])();\n  const enterSchoolCodeState = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(ramda__WEBPACK_IMPORTED_MODULE_4__[\"compose\"](_modules_login_selectprs__WEBPACK_IMPORTED_MODULE_5__[\"getValidateSchoolCodeState\"], _modules_login_selectprs__WEBPACK_IMPORTED_MODULE_5__[\"getRootLoginState\"]));\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    dispatch(Object(_modules_login_actions__WEBPACK_IMPORTED_MODULE_6__[\"enterSchoolCode\"])(code));\n  }, [code, dispatch]);\n\n  const handleValidateCode = () => {\n    if (enterSchoolCodeState) {\n      console.log(`correct`);\n      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/login');\n    } else {\n      console.log('incorrect');\n    }\n  };\n\n  return __jsx(Root, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  }, __jsx(Container, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, __jsx(Item, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    url: \"https://storage.googleapis.com/assets.goscoreup.com/static/b2b/scoreUP_logo_color.png\",\n    width: \"120px\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  })), __jsx(Item, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    text: \"\\u0E43\\u0E2A\\u0E48\\u0E23\\u0E2B\\u0E31\\u0E2A\\u0E42\\u0E23\\u0E07\\u0E40\\u0E23\\u0E35\\u0E22\\u0E19\\u0E40\\u0E1E\\u0E37\\u0E48\\u0E2D\\u0E14\\u0E33\\u0E40\\u0E19\\u0E34\\u0E19\\u0E01\\u0E32\\u0E23\\u0E15\\u0E48\\u0E2D\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  })), __jsx(Item, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, __jsx(_InputComponent__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    title: \"\\u0E23\\u0E2B\\u0E31\\u0E2A\\u0E42\\u0E23\\u0E07\\u0E40\\u0E23\\u0E35\\u0E22\\u0E19\",\n    placeholder: \"\\u0E01\\u0E23\\u0E38\\u0E13\\u0E32\\u0E01\\u0E23\\u0E2D\\u0E01\\u0E23\\u0E2B\\u0E31\\u0E2A\\u0E42\\u0E23\\u0E07\\u0E40\\u0E23\\u0E35\\u0E22\\u0E19\",\n    setCode: setCode,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  })), __jsx(Item, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }, __jsx(_ButtonComponent__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    text: \"\\u0E44\\u0E1B\\u0E15\\u0E48\\u0E2D\",\n    background: \"#0A95F9\",\n    color: \"white\",\n    handleClick: handleValidateCode,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 11\n    }\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SchoolCodeForm);\nconst Root = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  @media screen and (max-width: ${p => p.theme.breakpoints.xs.max}) {\n    align-items: flex-start;\n    height: 70vh;\n  }\n`;\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n  /* border: 1px solid black; */\n  width: 24vw;\n  max-height: 100%;\n\n  @media screen and (max-width: ${p => p.theme.breakpoints.xs.max}) {\n    width: 90vw;\n    margin-top: 10px;\n  }\n`;\nconst Item = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n  margin-top: 20px;\n\n  @media screen and (max-width: ${p => p.theme.breakpoints.xs.max}) {\n    :nth-last-child(4) {\n      text-align: center;\n    }\n\n    :nth-last-child(3) {\n      text-align: center;\n    }\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29wb25lbnRzL1NjaG9vbENvZGVGb3JtLnRzeD9iYzNjIl0sIm5hbWVzIjpbIlNjaG9vbENvZGVGb3JtIiwiY29kZSIsInNldENvZGUiLCJ1c2VTdGF0ZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJlbnRlclNjaG9vbENvZGVTdGF0ZSIsInVzZVNlbGVjdG9yIiwiUiIsImdldFZhbGlkYXRlU2Nob29sQ29kZVN0YXRlIiwiZ2V0Um9vdExvZ2luU3RhdGUiLCJ1c2VFZmZlY3QiLCJlbnRlclNjaG9vbENvZGUiLCJoYW5kbGVWYWxpZGF0ZUNvZGUiLCJjb25zb2xlIiwibG9nIiwiUm91dGVyIiwicHVzaCIsIlJvb3QiLCJzdHlsZWQiLCJkaXYiLCJwIiwidGhlbWUiLCJicmVha3BvaW50cyIsInhzIiwibWF4IiwiQ29udGFpbmVyIiwiSXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsY0FBYyxHQUFHLE1BQU07QUFDM0IsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQyxzREFBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsUUFBTUMsb0JBQW9CLEdBQUdDLCtEQUFXLENBQUNDLDZDQUFBLENBQVVDLG1GQUFWLEVBQXNDQywwRUFBdEMsQ0FBRCxDQUF4QztBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDZFAsWUFBUSxDQUFDUSw4RUFBZSxDQUFDWCxJQUFELENBQWhCLENBQVI7QUFDRCxHQUZRLEVBRU4sQ0FBQ0EsSUFBRCxFQUFPRyxRQUFQLENBRk0sQ0FBVDs7QUFJQSxRQUFNUyxrQkFBa0IsR0FBRyxNQUFNO0FBQy9CLFFBQUlQLG9CQUFKLEVBQTBCO0FBQ3hCUSxhQUFPLENBQUNDLEdBQVIsQ0FBYSxTQUFiO0FBQ0FDLHdEQUFNLENBQUNDLElBQVAsQ0FBWSxRQUFaO0FBQ0QsS0FIRCxNQUdPO0FBQ0xILGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDRDtBQUNGLEdBUEQ7O0FBU0EsU0FDRSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZDQUFEO0FBQU0sT0FBRyxFQUFDLHVGQUFWO0FBQWtHLFNBQUssRUFBQyxPQUF4RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFLE1BQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrQ0FBRDtBQUFRLFFBQUksRUFBQyxrTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixFQU9FLE1BQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1REFBRDtBQUFnQixTQUFLLEVBQUMsMEVBQXRCO0FBQXFDLGVBQVcsRUFBQyxnSUFBakQ7QUFBeUUsV0FBTyxFQUFFYixPQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FQRixFQVVFLE1BQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUFpQixRQUFJLEVBQUMsZ0NBQXRCO0FBQThCLGNBQVUsRUFBQyxTQUF6QztBQUFtRCxTQUFLLEVBQUMsT0FBekQ7QUFBaUUsZUFBVyxFQUFFVyxrQkFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBVkYsQ0FERixDQURGO0FBa0JELENBcENEOztBQXNDZWIsNkVBQWY7QUFFQSxNQUFNa0IsSUFBSSxHQUFHQyx3REFBTSxDQUFDQyxHQUFJOzs7Ozs7a0NBTVdDLENBQUQsSUFBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLFdBQVIsQ0FBb0JDLEVBQXBCLENBQXVCQyxHQUFJOzs7O0NBTnBFO0FBWUEsTUFBTUMsU0FBUyxHQUFHUCx3REFBTSxDQUFDQyxHQUFJOzs7OztrQ0FLTUMsQ0FBRCxJQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUUMsV0FBUixDQUFvQkMsRUFBcEIsQ0FBdUJDLEdBQUk7Ozs7Q0FMcEU7QUFXQSxNQUFNRSxJQUFJLEdBQUdSLHdEQUFNLENBQUNDLEdBQUk7OztrQ0FHV0MsQ0FBRCxJQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUUMsV0FBUixDQUFvQkMsRUFBcEIsQ0FBdUJDLEdBQUk7Ozs7Ozs7OztDQUhwRSIsImZpbGUiOiIuL3NyYy9jb3BvbmVudHMvU2Nob29sQ29kZUZvcm0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5cbmltcG9ydCB7IGdldFJvb3RMb2dpblN0YXRlLCBnZXRWYWxpZGF0ZVNjaG9vbENvZGVTdGF0ZSB9IGZyb20gJy4uL21vZHVsZXMvbG9naW4vc2VsZWN0cHJzJ1xuaW1wb3J0IHsgZW50ZXJTY2hvb2xDb2RlIH0gZnJvbSAnLi4vbW9kdWxlcy9sb2dpbi9hY3Rpb25zJ1xuXG5pbXBvcnQgTG9nbyBmcm9tICcuL0xvZ28nXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuaW1wb3J0IElucHV0Q29tcG9uZW50IGZyb20gJy4vSW5wdXRDb21wb25lbnQnXG5pbXBvcnQgQnV0dG9uQ29tcG9uZW50IGZyb20gJy4vQnV0dG9uQ29tcG9uZW50J1xuXG5jb25zdCBTY2hvb2xDb2RlRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgW2NvZGUsIHNldENvZGVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuICBjb25zdCBlbnRlclNjaG9vbENvZGVTdGF0ZSA9IHVzZVNlbGVjdG9yKFIuY29tcG9zZShnZXRWYWxpZGF0ZVNjaG9vbENvZGVTdGF0ZSwgZ2V0Um9vdExvZ2luU3RhdGUpKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goZW50ZXJTY2hvb2xDb2RlKGNvZGUpKVxuICB9LCBbY29kZSwgZGlzcGF0Y2hdKVxuXG4gIGNvbnN0IGhhbmRsZVZhbGlkYXRlQ29kZSA9ICgpID0+IHtcbiAgICBpZiAoZW50ZXJTY2hvb2xDb2RlU3RhdGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBjb3JyZWN0YClcbiAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnaW5jb3JyZWN0JylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxSb290PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEl0ZW0+XG4gICAgICAgICAgPExvZ28gdXJsPVwiaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2Fzc2V0cy5nb3Njb3JldXAuY29tL3N0YXRpYy9iMmIvc2NvcmVVUF9sb2dvX2NvbG9yLnBuZ1wiIHdpZHRoPVwiMTIwcHhcIiAvPlxuICAgICAgICA8L0l0ZW0+XG4gICAgICAgIDxJdGVtPlxuICAgICAgICAgIDxIZWFkZXIgdGV4dD1cIuC5g+C4quC5iOC4o+C4q+C4seC4quC5guC4o+C4h+C5gOC4o+C4teC4ouC4meC5gOC4nuC4t+C5iOC4reC4lOC4s+C5gOC4meC4tOC4meC4geC4suC4o+C4leC5iOC4rVwiIC8+XG4gICAgICAgIDwvSXRlbT5cbiAgICAgICAgPEl0ZW0+XG4gICAgICAgICAgPElucHV0Q29tcG9uZW50IHRpdGxlPVwi4Lij4Lir4Lix4Liq4LmC4Lij4LiH4LmA4Lij4Li14Lii4LiZXCIgcGxhY2Vob2xkZXI9XCLguIHguKPguLjguJPguLLguIHguKPguK3guIHguKPguKvguLHguKrguYLguKPguIfguYDguKPguLXguKLguJlcIiBzZXRDb2RlPXtzZXRDb2RlfSAvPlxuICAgICAgICA8L0l0ZW0+XG4gICAgICAgIDxJdGVtPlxuICAgICAgICAgIDxCdXR0b25Db21wb25lbnQgdGV4dD1cIuC5hOC4m+C4leC5iOC4rVwiIGJhY2tncm91bmQ9XCIjMEE5NUY5XCIgY29sb3I9XCJ3aGl0ZVwiIGhhbmRsZUNsaWNrPXtoYW5kbGVWYWxpZGF0ZUNvZGV9IC8+XG4gICAgICAgIDwvSXRlbT5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvUm9vdD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY2hvb2xDb2RlRm9ybVxuXG5jb25zdCBSb290ID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHsocCkgPT4gcC50aGVtZS5icmVha3BvaW50cy54cy5tYXh9KSB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgaGVpZ2h0OiA3MHZoO1xuICB9XG5gXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xuICB3aWR0aDogMjR2dztcbiAgbWF4LWhlaWdodDogMTAwJTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkeyhwKSA9PiBwLnRoZW1lLmJyZWFrcG9pbnRzLnhzLm1heH0pIHtcbiAgICB3aWR0aDogOTB2dztcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG5gXG5cbmNvbnN0IEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7KHApID0+IHAudGhlbWUuYnJlYWtwb2ludHMueHMubWF4fSkge1xuICAgIDpudGgtbGFzdC1jaGlsZCg0KSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgOm50aC1sYXN0LWNoaWxkKDMpIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cbmBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/coponents/SchoolCodeForm.tsx\n");

/***/ }),

/***/ "./src/modules/login/actions.ts":
/*!**************************************!*\
  !*** ./src/modules/login/actions.ts ***!
  \**************************************/
/*! exports provided: enterSchoolCode, enterSchoolCodeSuccess, enterSchoolCodeFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"enterSchoolCode\", function() { return enterSchoolCode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"enterSchoolCodeSuccess\", function() { return enterSchoolCodeSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"enterSchoolCodeFailure\", function() { return enterSchoolCodeFailure; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./src/modules/login/types.ts\");\n\nconst enterSchoolCode = sid => ({\n  type: _types__WEBPACK_IMPORTED_MODULE_0__[\"actionTypes\"].ENTER_SCHOOL_CODE,\n  payload: {\n    sid\n  }\n});\nconst enterSchoolCodeSuccess = validate => ({\n  type: _types__WEBPACK_IMPORTED_MODULE_0__[\"actionTypes\"].ENTER_SCHOOL_CODE_SUCCESS,\n  payload: {\n    validate\n  }\n});\nconst enterSchoolCodeFailure = error => ({\n  type: _types__WEBPACK_IMPORTED_MODULE_0__[\"actionTypes\"].ENTER_SCHOOL_CODE_FAILURE,\n  error\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9sb2dpbi9hY3Rpb25zLnRzPzljOTciXSwibmFtZXMiOlsiZW50ZXJTY2hvb2xDb2RlIiwic2lkIiwidHlwZSIsImFjdGlvblR5cGVzIiwiRU5URVJfU0NIT09MX0NPREUiLCJwYXlsb2FkIiwiZW50ZXJTY2hvb2xDb2RlU3VjY2VzcyIsInZhbGlkYXRlIiwiRU5URVJfU0NIT09MX0NPREVfU1VDQ0VTUyIsImVudGVyU2Nob29sQ29kZUZhaWx1cmUiLCJlcnJvciIsIkVOVEVSX1NDSE9PTF9DT0RFX0ZBSUxVUkUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLGVBQWUsR0FBSUMsR0FBRCxLQUFrQjtBQUMvQ0MsTUFBSSxFQUFFQyxrREFBVyxDQUFDQyxpQkFENkI7QUFFL0NDLFNBQU8sRUFBRTtBQUNQSjtBQURPO0FBRnNDLENBQWxCLENBQXhCO0FBT0EsTUFBTUssc0JBQXNCLEdBQUlDLFFBQUQsS0FBd0I7QUFDNURMLE1BQUksRUFBRUMsa0RBQVcsQ0FBQ0sseUJBRDBDO0FBRTVESCxTQUFPLEVBQUU7QUFDUEU7QUFETztBQUZtRCxDQUF4QixDQUEvQjtBQU9BLE1BQU1FLHNCQUFzQixHQUFJQyxLQUFELEtBQVk7QUFDaERSLE1BQUksRUFBRUMsa0RBQVcsQ0FBQ1EseUJBRDhCO0FBRWhERDtBQUZnRCxDQUFaLENBQS9CIiwiZmlsZSI6Ii4vc3JjL21vZHVsZXMvbG9naW4vYWN0aW9ucy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSAnLi90eXBlcydcblxuZXhwb3J0IGNvbnN0IGVudGVyU2Nob29sQ29kZSA9IChzaWQ6IHN0cmluZykgPT4gKHtcbiAgdHlwZTogYWN0aW9uVHlwZXMuRU5URVJfU0NIT09MX0NPREUsXG4gIHBheWxvYWQ6IHtcbiAgICBzaWQsXG4gIH0sXG59KVxuXG5leHBvcnQgY29uc3QgZW50ZXJTY2hvb2xDb2RlU3VjY2VzcyA9ICh2YWxpZGF0ZTogYm9vbGVhbikgPT4gKHtcbiAgdHlwZTogYWN0aW9uVHlwZXMuRU5URVJfU0NIT09MX0NPREVfU1VDQ0VTUyxcbiAgcGF5bG9hZDoge1xuICAgIHZhbGlkYXRlLFxuICB9LFxufSlcblxuZXhwb3J0IGNvbnN0IGVudGVyU2Nob29sQ29kZUZhaWx1cmUgPSAoZXJyb3IpID0+ICh7XG4gIHR5cGU6IGFjdGlvblR5cGVzLkVOVEVSX1NDSE9PTF9DT0RFX0ZBSUxVUkUsXG4gIGVycm9yLFxufSlcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/login/actions.ts\n");

/***/ }),

/***/ "./src/modules/login/selectprs.ts":
/*!****************************************!*\
  !*** ./src/modules/login/selectprs.ts ***!
  \****************************************/
/*! exports provided: getRootLoginState, getValidateSchoolCodeState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRootLoginState\", function() { return getRootLoginState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getValidateSchoolCodeState\", function() { return getValidateSchoolCodeState; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./src/modules/login/types.ts\");\n\nconst getRootLoginState = state => state[_types__WEBPACK_IMPORTED_MODULE_0__[\"MODULE_NAME\"]];\nconst getValidateSchoolCodeState = state => state.validate;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9sb2dpbi9zZWxlY3RwcnMudHM/ZWM4MyJdLCJuYW1lcyI6WyJnZXRSb290TG9naW5TdGF0ZSIsInN0YXRlIiwiTU9EVUxFX05BTUUiLCJnZXRWYWxpZGF0ZVNjaG9vbENvZGVTdGF0ZSIsInZhbGlkYXRlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR08sTUFBTUEsaUJBQWlCLEdBQUlDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxrREFBRCxDQUExQztBQUVBLE1BQU1DLDBCQUEwQixHQUFJRixLQUFELElBQVdBLEtBQUssQ0FBQ0csUUFBcEQiLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9sb2dpbi9zZWxlY3RwcnMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNT0RVTEVfTkFNRSB9IGZyb20gJy4vdHlwZXMnXG5pbXBvcnQgeyBMb2dpblN0YXRlIH0gZnJvbSAnLi9yZWR1Y2VycydcblxuZXhwb3J0IGNvbnN0IGdldFJvb3RMb2dpblN0YXRlID0gKHN0YXRlKSA9PiBzdGF0ZVtNT0RVTEVfTkFNRV0gYXMgTG9naW5TdGF0ZVxuXG5leHBvcnQgY29uc3QgZ2V0VmFsaWRhdGVTY2hvb2xDb2RlU3RhdGUgPSAoc3RhdGUpID0+IHN0YXRlLnZhbGlkYXRlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/login/selectprs.ts\n");

/***/ }),

/***/ "./src/modules/login/types.ts":
/*!************************************!*\
  !*** ./src/modules/login/types.ts ***!
  \************************************/
/*! exports provided: MODULE_NAME, actionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MODULE_NAME\", function() { return MODULE_NAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"actionTypes\", function() { return actionTypes; });\nconst MODULE_NAME = 'LOGIN_MODULE';\nconst actionTypes = {\n  ENTER_SCHOOL_CODE: `${MODULE_NAME}/ENTER_SCHOOL_CODE`,\n  ENTER_SCHOOL_CODE_SUCCESS: `${MODULE_NAME}/ENTER_SCHOOL_CODE_SUCCESS`,\n  ENTER_SCHOOL_CODE_FAILURE: `${MODULE_NAME}/ENTER_SCHOOL_CODE_FAILURE`\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9sb2dpbi90eXBlcy50cz8wMWM4Il0sIm5hbWVzIjpbIk1PRFVMRV9OQU1FIiwiYWN0aW9uVHlwZXMiLCJFTlRFUl9TQ0hPT0xfQ09ERSIsIkVOVEVSX1NDSE9PTF9DT0RFX1NVQ0NFU1MiLCJFTlRFUl9TQ0hPT0xfQ09ERV9GQUlMVVJFIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNQSxXQUFXLEdBQUcsY0FBcEI7QUFFQSxNQUFNQyxXQUFXLEdBQUc7QUFDekJDLG1CQUFpQixFQUFHLEdBQUVGLFdBQVksb0JBRFQ7QUFFekJHLDJCQUF5QixFQUFHLEdBQUVILFdBQVksNEJBRmpCO0FBR3pCSSwyQkFBeUIsRUFBRyxHQUFFSixXQUFZO0FBSGpCLENBQXBCIiwiZmlsZSI6Ii4vc3JjL21vZHVsZXMvbG9naW4vdHlwZXMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTU9EVUxFX05BTUUgPSAnTE9HSU5fTU9EVUxFJ1xuXG5leHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XG4gIEVOVEVSX1NDSE9PTF9DT0RFOiBgJHtNT0RVTEVfTkFNRX0vRU5URVJfU0NIT09MX0NPREVgLFxuICBFTlRFUl9TQ0hPT0xfQ09ERV9TVUNDRVNTOiBgJHtNT0RVTEVfTkFNRX0vRU5URVJfU0NIT09MX0NPREVfU1VDQ0VTU2AsXG4gIEVOVEVSX1NDSE9PTF9DT0RFX0ZBSUxVUkU6IGAke01PRFVMRV9OQU1FfS9FTlRFUl9TQ0hPT0xfQ09ERV9GQUlMVVJFYCxcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/login/types.ts\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _coponents_ImageCover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../coponents/ImageCover */ \"./src/coponents/ImageCover.tsx\");\n/* harmony import */ var _coponents_SchoolCodeForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../coponents/SchoolCodeForm */ \"./src/coponents/SchoolCodeForm.tsx\");\nvar _jsxFileName = \"/home/tongthanaphon/Works/practice/school-ui/src/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst SchoolRegister = () => {\n  return __jsx(RootContainer, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, __jsx(RootItem, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, __jsx(_coponents_ImageCover__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    url: \"https://storage.googleapis.com/assets.goscoreup.com/static/b2b/b2b_index.png\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  })), __jsx(RootItem, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(_coponents_SchoolCodeForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SchoolRegister);\nconst RootContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n  display: flex;\n  background: #f7f7f7;\n\n  @media screen and (max-width: ${p => p.theme.breakpoints.xs.max}) {\n    display: flex;\n    flex-direction: column;\n  }\n`;\nconst RootItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n  flex-basis: 50%;\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiU2Nob29sUmVnaXN0ZXIiLCJSb290Q29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwicCIsInRoZW1lIiwiYnJlYWtwb2ludHMiLCJ4cyIsIm1heCIsIlJvb3RJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxNQUFNQSxjQUFjLEdBQUcsTUFBTTtBQUMzQixTQUNFLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQVksT0FBRyxFQUFDLDhFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixDQURGO0FBVUQsQ0FYRDs7QUFhZUEsNkVBQWY7QUFFQSxNQUFNQyxhQUFhLEdBQUdDLHdEQUFNLENBQUNDLEdBQUk7Ozs7a0NBSUVDLENBQUQsSUFBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLFdBQVIsQ0FBb0JDLEVBQXBCLENBQXVCQyxHQUFJOzs7O0NBSnBFO0FBU0EsTUFBTUMsUUFBUSxHQUFHUCx3REFBTSxDQUFDQyxHQUFJOztDQUE1QiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5pbXBvcnQgSW1hZ2VDb3ZlciBmcm9tICcuLi9jb3BvbmVudHMvSW1hZ2VDb3ZlcidcbmltcG9ydCBTY2hvb2xDb2RlRm9ybSBmcm9tICcuLi9jb3BvbmVudHMvU2Nob29sQ29kZUZvcm0nXG5cbmNvbnN0IFNjaG9vbFJlZ2lzdGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSb290Q29udGFpbmVyPlxuICAgICAgPFJvb3RJdGVtPlxuICAgICAgICA8SW1hZ2VDb3ZlciB1cmw9XCJodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vYXNzZXRzLmdvc2NvcmV1cC5jb20vc3RhdGljL2IyYi9iMmJfaW5kZXgucG5nXCIgLz5cbiAgICAgIDwvUm9vdEl0ZW0+XG4gICAgICA8Um9vdEl0ZW0+XG4gICAgICAgIDxTY2hvb2xDb2RlRm9ybSAvPlxuICAgICAgPC9Sb290SXRlbT5cbiAgICA8L1Jvb3RDb250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2Nob29sUmVnaXN0ZXJcblxuY29uc3QgUm9vdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHsocCkgPT4gcC50aGVtZS5icmVha3BvaW50cy54cy5tYXh9KSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5gXG5jb25zdCBSb290SXRlbSA9IHN0eWxlZC5kaXZgXG4gIGZsZXgtYmFzaXM6IDUwJTtcbmBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./src/pages/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/tongthanaphon/Works/practice/school-ui/src/pages/index.tsx */"./src/pages/index.tsx");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCI/MDhhYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhbnRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///antd\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "ramda":
/*!************************!*\
  !*** external "ramda" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ramda\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyYW1kYVwiPzkyMWEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmFtZGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyYW1kYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///ramda\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });