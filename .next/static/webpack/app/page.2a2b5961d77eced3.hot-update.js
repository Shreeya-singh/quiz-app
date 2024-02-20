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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _components_ProgressBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ProgressBar */ \"(app-pages-browser)/./src/app/components/ProgressBar.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ \"(app-pages-browser)/./src/app/utils/index.js\");\n/* harmony import */ var _utils_quizData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/quizData */ \"(app-pages-browser)/./src/app/utils/quizData.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [timer, setTimer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [activeQuiz, setActiveQuiz] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_utils_quizData__WEBPACK_IMPORTED_MODULE_5__[\"default\"][0]);\n    const totalItems = 30;\n    const filledItems = 10;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setTimer((prevTimer)=>prevTimer + 1);\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, []);\n    const filledWidth = totalItems > 0 ? filledItems / totalItems * 100 : 0;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-[414px]  bg-white shadow-lg p-3 rounded-lg overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w flex items-center justify-center mb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    src: \"/appLogo.png\",\n                    width: 173,\n                    height: 36,\n                    priority: true\n                }, void 0, false, {\n                    fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProgressBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    width: filledWidth\n                }, void 0, false, {\n                    fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between mb-8 mt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"invisible pl-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: \"/img/rightArrow.png\",\n                            width: 10,\n                            height: 10,\n                            priority: true\n                        }, void 0, false, {\n                            fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-[2px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: \"/img/time.png\",\n                                width: 14,\n                                height: 14,\n                                priority: true\n                            }, void 0, false, {\n                                fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-[16px] font-[600] font-poppins ml-1 \",\n                                children: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.timerFormated)(timer)\n                            }, void 0, false, {\n                                fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pr-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: \"/img/rightArrow.png\",\n                            width: 6,\n                            height: 10,\n                            priority: true\n                        }, void 0, false, {\n                            fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-w-[320px] px-4 items-center  mb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full max-w-4xl mx-auto\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-10 sm:col-span-12 lg:col-span-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative\",\n                            style: {\n                                paddingBottom: \"75%\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: activeQuiz.mainImage,\n                                layout: \"fill\",\n                                objectFit: \"cover\"\n                            }, void 0, false, {\n                                fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                                lineNumber: 50,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-[16px] font-[600] font-poppins text-center mb-5\",\n                        children: \"Choose your answer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-3 gap-4 \",\n                        children: activeQuiz.options.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"relative focus:outline-none focus:ring focus:ring-0070F3 hover:outline-none hover:ring-1 hover:ring-0070F3  hover: text-white font-bold py-2 px-4 rounded\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-[34px] font-[600] font-poppins text-[#0070F3]\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: option.label\n                                        }, void 0, false, {\n                                            fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        src: option.url,\n                                        layout: \"fill\",\n                                        objectFit: \"cover\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, option.url, true, {\n                                fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"VqnFqxDAXWojMxqFOY/erpdLXig=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ2I7QUFDb0I7QUFDWDtBQUNEO0FBQ3hCLFNBQVNNOztJQUV0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUyxZQUFZQyxjQUFjLEdBQUdWLCtDQUFRQSxDQUFDSyx1REFBUSxDQUFDLEVBQUU7SUFDeEQsTUFBTU0sYUFBYTtJQUNuQixNQUFNQyxjQUFjO0lBRXBCWCxnREFBU0EsQ0FBQztRQUNSLE1BQU1ZLFdBQVdDLFlBQVk7WUFDM0JOLFNBQVMsQ0FBQ08sWUFBY0EsWUFBWTtRQUN0QyxHQUFHO1FBRUgsT0FBTyxJQUFNQyxjQUFjSDtJQUM3QixHQUFHLEVBQUU7SUFFTCxNQUFNSSxjQUFjTixhQUFhLElBQUksY0FBZUEsYUFBYyxNQUFNO0lBRXhFLHFCQUNFLDhEQUFDTztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNqQixrREFBS0E7b0JBQUNrQixLQUFJO29CQUFlQyxPQUFPO29CQUFLQyxRQUFRO29CQUFJQyxRQUFROzs7Ozs7Ozs7OzswQkFHNUQsOERBQUNMOzBCQUNDLDRFQUFDZiwrREFBV0E7b0JBQUNrQixPQUFPSjs7Ozs7Ozs7Ozs7MEJBRXRCLDhEQUFDQztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDakIsa0RBQUtBOzRCQUFDa0IsS0FBSTs0QkFBc0JDLE9BQU87NEJBQUlDLFFBQVE7NEJBQUlDLFFBQVE7Ozs7Ozs7Ozs7O2tDQUVsRSw4REFBQ0w7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDakIsa0RBQUtBO2dDQUFDa0IsS0FBSTtnQ0FBZ0JDLE9BQU87Z0NBQUlDLFFBQVE7Z0NBQUlDLFFBQVE7Ozs7OzswQ0FDMUQsOERBQUNDO2dDQUFHTCxXQUFVOzBDQUE2Q2YscURBQWFBLENBQUNHOzs7Ozs7Ozs7Ozs7a0NBRTNFLDhEQUFDVzt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ2pCLGtEQUFLQTs0QkFBQ2tCLEtBQUk7NEJBQXNCQyxPQUFPOzRCQUFHQyxRQUFROzRCQUFJQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7OzswQkFJbkUsOERBQUNMO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUFJQyxXQUFVOzRCQUFXTSxPQUFPO2dDQUFFQyxlQUFlOzRCQUFNO3NDQUN0RCw0RUFBQ3hCLGtEQUFLQTtnQ0FBQ2tCLEtBQUtYLFdBQVdrQixTQUFTO2dDQUFFQyxRQUFPO2dDQUFPQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNbEUsOERBQUNYO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ1c7d0JBQUVYLFdBQVU7a0NBQXVEOzs7Ozs7a0NBQ3BFLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWlYsV0FBV3NCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLHVCQUN2Qiw4REFBQ0M7Z0NBQXdCZixXQUFVOztrREFDakMsOERBQUNEO3dDQUFJQyxXQUFVO2tEQUNiLDRFQUFDZ0I7c0RBQU1GLE9BQU9HLEtBQUs7Ozs7Ozs7Ozs7O2tEQUVyQiw4REFBQ2xDLGtEQUFLQTt3Q0FBQ2tCLEtBQUthLE9BQU9JLEdBQUc7d0NBQUVULFFBQU87d0NBQU9DLFdBQVU7Ozs7Ozs7K0JBSnJDSSxPQUFPSSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV25DO0dBaEV3Qi9CO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qcz8yYjNkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIi4vY29tcG9uZW50cy9Qcm9ncmVzc0JhclwiO1xuaW1wb3J0IHsgdGltZXJGb3JtYXRlZCB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgcXVpekRhdGEgZnJvbSBcIi4vdXRpbHMvcXVpekRhdGFcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBbdGltZXIsIHNldFRpbWVyXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbYWN0aXZlUXVpeiwgc2V0QWN0aXZlUXVpel0gPSB1c2VTdGF0ZShxdWl6RGF0YVswXSlcbiAgY29uc3QgdG90YWxJdGVtcyA9IDMwO1xuICBjb25zdCBmaWxsZWRJdGVtcyA9IDEwO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRUaW1lcigocHJldlRpbWVyKSA9PiBwcmV2VGltZXIgKyAxKTtcbiAgICB9LCAxMDAwKTtcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGZpbGxlZFdpZHRoID0gdG90YWxJdGVtcyA+IDAgPyAoZmlsbGVkSXRlbXMgLyB0b3RhbEl0ZW1zKSAqIDEwMCA6IDA7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LVs0MTRweF0gIGJnLXdoaXRlIHNoYWRvdy1sZyBwLTMgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXcgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWItNVwiPlxuICAgICAgICA8SW1hZ2Ugc3JjPVwiL2FwcExvZ28ucG5nXCIgd2lkdGg9ezE3M30gaGVpZ2h0PXszNn0gcHJpb3JpdHkgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8UHJvZ3Jlc3NCYXIgd2lkdGg9e2ZpbGxlZFdpZHRofSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi04IG10LTVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZpc2libGUgcGwtNFwiPlxuICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1nL3JpZ2h0QXJyb3cucG5nXCIgd2lkdGg9ezEwfSBoZWlnaHQ9ezEwfSBwcmlvcml0eSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtWzJweF1cIj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy90aW1lLnBuZ1wiIHdpZHRoPXsxNH0gaGVpZ2h0PXsxNH0gcHJpb3JpdHkgLz5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1bMTZweF0gZm9udC1bNjAwXSBmb250LXBvcHBpbnMgbWwtMSBcIj57dGltZXJGb3JtYXRlZCh0aW1lcil9PC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHItNFwiPlxuICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1nL3JpZ2h0QXJyb3cucG5nXCIgd2lkdGg9ezZ9IGhlaWdodD17MTB9IHByaW9yaXR5IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLXctWzMyMHB4XSBweC00IGl0ZW1zLWNlbnRlciAgbWItNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy00eGwgbXgtYXV0b1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMTAgc206Y29sLXNwYW4tMTIgbGc6Y29sLXNwYW4tNlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206ICc3NSUnIH19PlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXthY3RpdmVRdWl6Lm1haW5JbWFnZX0gbGF5b3V0PVwiZmlsbFwiIG9iamVjdEZpdD1cImNvdmVyXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTRcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTZweF0gZm9udC1bNjAwXSBmb250LXBvcHBpbnMgdGV4dC1jZW50ZXIgbWItNVwiPkNob29zZSB5b3VyIGFuc3dlcjwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGdhcC00IFwiPlxuICAgICAgICAgIHthY3RpdmVRdWl6Lm9wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICAgIDxidXR0b24ga2V5PXtvcHRpb24udXJsfSBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZyBmb2N1czpyaW5nLTAwNzBGMyBob3ZlcjpvdXRsaW5lLW5vbmUgaG92ZXI6cmluZy0xIGhvdmVyOnJpbmctMDA3MEYzICBob3ZlcjogdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWRcIiA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMzRweF0gZm9udC1bNjAwXSBmb250LXBvcHBpbnMgdGV4dC1bIzAwNzBGM11cIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57b3B0aW9uLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e29wdGlvbi51cmx9IGxheW91dD1cImZpbGxcIiBvYmplY3RGaXQ9XCJjb3ZlclwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkltYWdlIiwiUHJvZ3Jlc3NCYXIiLCJ0aW1lckZvcm1hdGVkIiwicXVpekRhdGEiLCJIb21lIiwidGltZXIiLCJzZXRUaW1lciIsImFjdGl2ZVF1aXoiLCJzZXRBY3RpdmVRdWl6IiwidG90YWxJdGVtcyIsImZpbGxlZEl0ZW1zIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInByZXZUaW1lciIsImNsZWFySW50ZXJ2YWwiLCJmaWxsZWRXaWR0aCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwicHJpb3JpdHkiLCJoMyIsInN0eWxlIiwicGFkZGluZ0JvdHRvbSIsIm1haW5JbWFnZSIsImxheW91dCIsIm9iamVjdEZpdCIsInAiLCJvcHRpb25zIiwibWFwIiwib3B0aW9uIiwiYnV0dG9uIiwic3BhbiIsImxhYmVsIiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});