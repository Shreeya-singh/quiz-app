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

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _components_ProgressBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ProgressBar */ \"(app-pages-browser)/./src/app/components/ProgressBar.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ \"(app-pages-browser)/./src/app/utils/index.js\");\n/* harmony import */ var _utils_quizData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/quizData */ \"(app-pages-browser)/./src/app/utils/quizData.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [timer, setTimer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [activeQuiz, setActiveQuiz] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_utils_quizData__WEBPACK_IMPORTED_MODULE_5__[\"default\"][0]);\n    const totalItems = 30;\n    const filledItems = 10;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setTimer((prevTimer)=>prevTimer + 1);\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, []);\n    const filledWidth = totalItems > 0 ? filledItems / totalItems * 100 : 0;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-[414px]  bg-white shadow-lg p-3 rounded-lg overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w flex items-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        src: \"/img/iq_1.png\",\n                        width: 37.5,\n                        height: 36,\n                        priority: true\n                    }, void 0, false, {\n                        fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-[20px] font-[600] color-[#0070F3]\",\n                        children: [\n                            \" \",\n                            \"Cerebrum IQ\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProgressBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    width: filledWidth\n                }, void 0, false, {\n                    fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between mb-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"invisible\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: \"/img/rightArrow.png\",\n                            width: 10,\n                            height: 10,\n                            priority: true\n                        }, void 0, false, {\n                            fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-[2px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: \"/img/time.png\",\n                                width: 14,\n                                height: 14,\n                                priority: true\n                            }, void 0, false, {\n                                fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-[16px] font-[600] font-poppins \",\n                                children: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.timerFormated)(timer)\n                            }, void 0, false, {\n                                fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: \"/img/rightArrow.png\",\n                            width: 5,\n                            height: 10,\n                            priority: true\n                        }, void 0, false, {\n                            fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-w-[320px] px-4 items-center  mb-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full max-w-4xl mx-auto\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-10 grid-rows-6 bg-white p-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-span-10 sm:col-span-12 lg:col-span-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative\",\n                                style: {\n                                    paddingBottom: \"75%\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: activeQuiz.mainImage,\n                                    layout: \"fill\",\n                                    objectFit: \"cover\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                                lineNumber: 55,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            \"Answer options\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-3 gap-4\",\n                children: activeQuiz.options.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-gray-100 border-2 border-gray-300 rounded-lg p-4 text-sm\",\n                            children: option\n                        }, option.url, false, {\n                            fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"VqnFqxDAXWojMxqFOY/erpdLXig=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ2I7QUFDb0I7QUFDWDtBQUNEO0FBQ3hCLFNBQVNNOztJQUV0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUyxZQUFZQyxjQUFjLEdBQUdWLCtDQUFRQSxDQUFDSyx1REFBUSxDQUFDLEVBQUU7SUFDeEQsTUFBTU0sYUFBYTtJQUNuQixNQUFNQyxjQUFjO0lBRXBCWCxnREFBU0EsQ0FBQztRQUNSLE1BQU1ZLFdBQVdDLFlBQVk7WUFDM0JOLFNBQVMsQ0FBQ08sWUFBY0EsWUFBWTtRQUN0QyxHQUFHO1FBRUgsT0FBTyxJQUFNQyxjQUFjSDtJQUM3QixHQUFHLEVBQUU7SUFFTCxNQUFNSSxjQUFjTixhQUFhLElBQUksY0FBZUEsYUFBYyxNQUFNO0lBRXhFLHFCQUNFLDhEQUFDTztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDakIsa0RBQUtBO3dCQUFDa0IsS0FBSTt3QkFBZ0JDLE9BQU87d0JBQU1DLFFBQVE7d0JBQUlDLFFBQVE7Ozs7OztrQ0FDNUQsOERBQUNMO3dCQUFJQyxXQUFVOzs0QkFDWjs0QkFBSTs7Ozs7Ozs7Ozs7OzswQkFLVCw4REFBQ0Q7MEJBQ0MsNEVBQUNmLCtEQUFXQTtvQkFBQ2tCLE9BQU9KOzs7Ozs7Ozs7OzswQkFFdEIsOERBQUNDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNqQixrREFBS0E7NEJBQUNrQixLQUFJOzRCQUFzQkMsT0FBTzs0QkFBSUMsUUFBUTs0QkFBSUMsUUFBUTs7Ozs7Ozs7Ozs7a0NBRWxFLDhEQUFDTDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNqQixrREFBS0E7Z0NBQUNrQixLQUFJO2dDQUFnQkMsT0FBTztnQ0FBSUMsUUFBUTtnQ0FBSUMsUUFBUTs7Ozs7OzBDQUMxRCw4REFBQ0M7Z0NBQUdMLFdBQVU7MENBQXdDZixxREFBYUEsQ0FBQ0c7Ozs7Ozs7Ozs7OztrQ0FFdEUsOERBQUNXO2tDQUNDLDRFQUFDaEIsa0RBQUtBOzRCQUFDa0IsS0FBSTs0QkFBc0JDLE9BQU87NEJBQUdDLFFBQVE7NEJBQUlDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUluRSw4REFBQ0w7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTtrQ0FFYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNEO2dDQUFJQyxXQUFVO2dDQUFXTSxPQUFPO29DQUFFQyxlQUFlO2dDQUFNOzBDQUN0RCw0RUFBQ3hCLGtEQUFLQTtvQ0FBQ2tCLEtBQUtYLFdBQVdrQixTQUFTO29DQUFFQyxRQUFPO29DQUFPQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSzlEOzBCQUdOLDhEQUFDWDtnQkFBSUMsV0FBVTswQkFDWlYsV0FBV3FCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLHVCQUN2Qiw4REFBQ2Q7a0NBQ0QsNEVBQUNlOzRCQUVDZCxXQUFVO3NDQUVUYTsyQkFISUEsT0FBT0UsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVTNCO0dBdkV3QjVCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qcz8yYjNkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIi4vY29tcG9uZW50cy9Qcm9ncmVzc0JhclwiO1xuaW1wb3J0IHsgdGltZXJGb3JtYXRlZCB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgcXVpekRhdGEgZnJvbSBcIi4vdXRpbHMvcXVpekRhdGFcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBbdGltZXIsIHNldFRpbWVyXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbYWN0aXZlUXVpeiwgc2V0QWN0aXZlUXVpel0gPSB1c2VTdGF0ZShxdWl6RGF0YVswXSlcbiAgY29uc3QgdG90YWxJdGVtcyA9IDMwO1xuICBjb25zdCBmaWxsZWRJdGVtcyA9IDEwO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRUaW1lcigocHJldlRpbWVyKSA9PiBwcmV2VGltZXIgKyAxKTtcbiAgICB9LCAxMDAwKTtcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGZpbGxlZFdpZHRoID0gdG90YWxJdGVtcyA+IDAgPyAoZmlsbGVkSXRlbXMgLyB0b3RhbEl0ZW1zKSAqIDEwMCA6IDA7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LVs0MTRweF0gIGJnLXdoaXRlIHNoYWRvdy1sZyBwLTMgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXcgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcvaXFfMS5wbmdcIiB3aWR0aD17MzcuNX0gaGVpZ2h0PXszNn0gcHJpb3JpdHkgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyMHB4XSBmb250LVs2MDBdIGNvbG9yLVsjMDA3MEYzXVwiPlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICBDZXJlYnJ1bSBJUVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8UHJvZ3Jlc3NCYXIgd2lkdGg9e2ZpbGxlZFdpZHRofSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi04XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52aXNpYmxlXCI+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcvcmlnaHRBcnJvdy5wbmdcIiB3aWR0aD17MTB9IGhlaWdodD17MTB9IHByaW9yaXR5IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC1bMnB4XVwiPlxuICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1nL3RpbWUucG5nXCIgd2lkdGg9ezE0fSBoZWlnaHQ9ezE0fSBwcmlvcml0eSAvPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LVsxNnB4XSBmb250LVs2MDBdIGZvbnQtcG9wcGlucyBcIj57dGltZXJGb3JtYXRlZCh0aW1lcil9PC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcvcmlnaHRBcnJvdy5wbmdcIiB3aWR0aD17NX0gaGVpZ2h0PXsxMH0gcHJpb3JpdHkgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4tdy1bMzIwcHhdIHB4LTQgaXRlbXMtY2VudGVyICBtYi00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LTR4bCBteC1hdXRvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xMCBncmlkLXJvd3MtNiBiZy13aGl0ZSBwLTFcIj5cbiAgICAgICAgICAgIHsvKiBBZGp1c3RlZCBpbWFnZSBkaW1lbnNpb25zIHRvIG1haW50YWluIGEgNDozIGFzcGVjdCByYXRpbyAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMTAgc206Y29sLXNwYW4tMTIgbGc6Y29sLXNwYW4tNlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogJzc1JScgfX0+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17YWN0aXZlUXVpei5tYWluSW1hZ2V9IGxheW91dD1cImZpbGxcIiBvYmplY3RGaXQ9XCJjb3ZlclwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIEFuc3dlciBvcHRpb25zXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTRcIj5cbiAgICAgICAge2FjdGl2ZVF1aXoub3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAga2V5PXtvcHRpb24udXJsfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS0xMDAgYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgcC00IHRleHQtc21cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtvcHRpb259XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsIlByb2dyZXNzQmFyIiwidGltZXJGb3JtYXRlZCIsInF1aXpEYXRhIiwiSG9tZSIsInRpbWVyIiwic2V0VGltZXIiLCJhY3RpdmVRdWl6Iiwic2V0QWN0aXZlUXVpeiIsInRvdGFsSXRlbXMiLCJmaWxsZWRJdGVtcyIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZXIiLCJjbGVhckludGVydmFsIiwiZmlsbGVkV2lkdGgiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsInByaW9yaXR5IiwiaDMiLCJzdHlsZSIsInBhZGRpbmdCb3R0b20iLCJtYWluSW1hZ2UiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJvcHRpb25zIiwibWFwIiwib3B0aW9uIiwiYnV0dG9uIiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});