"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/utils/index.js":
/*!********************************!*\
  !*** ./src/app/utils/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   timerFormated: function() { return /* binding */ timerFormated; }\n/* harmony export */ });\nconst timerFormated = (timer)=>{\n    const minutes = Math.floor(timer / 60);\n    const seconds = timer % 60;\n    const formattedTime = \"\".concat(minutes, \":\").concat(seconds < 10 ? \"0\" : \"\").concat(seconds);\n    return formattedTime;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdXRpbHMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLGdCQUFjLENBQUNDO0lBQzFCLE1BQU1DLFVBQVVDLEtBQUtDLEtBQUssQ0FBQ0gsUUFBUTtJQUNuQyxNQUFNSSxVQUFVSixRQUFRO0lBQ3hCLE1BQU1LLGdCQUFnQixHQUFjRCxPQUFYSCxTQUFRLEtBQTZCRyxPQUExQkEsVUFBVSxLQUFLLE1BQU0sSUFBYSxPQUFSQTtJQUM5RCxPQUFPQztBQUNULEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC91dGlscy9pbmRleC5qcz8xYjA4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB0aW1lckZvcm1hdGVkPSh0aW1lcik9PntcbiAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodGltZXIgLyA2MCk7XG4gIGNvbnN0IHNlY29uZHMgPSB0aW1lciAlIDYwO1xuICBjb25zdCBmb3JtYXR0ZWRUaW1lID0gYCR7bWludXRlc306JHtzZWNvbmRzIDwgMTAgPyBcIjBcIiA6IFwiXCJ9JHtzZWNvbmRzfWA7XG4gIHJldHVybiBmb3JtYXR0ZWRUaW1lXG59Il0sIm5hbWVzIjpbInRpbWVyRm9ybWF0ZWQiLCJ0aW1lciIsIm1pbnV0ZXMiLCJNYXRoIiwiZmxvb3IiLCJzZWNvbmRzIiwiZm9ybWF0dGVkVGltZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/utils/index.js\n"));

/***/ })

});