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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _components_ProgressBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ProgressBar */ \"(app-pages-browser)/./src/app/components/ProgressBar.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ \"(app-pages-browser)/./src/app/utils/index.js\");\n/* harmony import */ var _utils_quizData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/quizData */ \"(app-pages-browser)/./src/app/utils/quizData.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [timer, setTimer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [activeQuiz, setActiveQuiz] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_utils_quizData__WEBPACK_IMPORTED_MODULE_5__[\"default\"][0]);\n    const totalItems = 30;\n    const filledItems = 10;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setTimer((prevTimer)=>prevTimer + 1);\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, []);\n    const filledWidth = totalItems > 0 ? filledItems / totalItems * 100 : 0;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-[414px]  bg-white shadow-lg p-3 rounded-lg overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w flex items-center justify-center mb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    src: \"/appLogo.png\",\n                    width: 173,\n                    height: 36,\n                    priority: true\n                }, void 0, false, {\n                    fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProgressBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    width: filledWidth\n                }, void 0, false, {\n                    fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between mb-8 mt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"invisible pl-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: \"/img/rightArrow.png\",\n                            width: 10,\n                            height: 10,\n                            priority: true\n                        }, void 0, false, {\n                            fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-[2px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: \"/img/time.png\",\n                                width: 14,\n                                height: 14,\n                                priority: true\n                            }, void 0, false, {\n                                fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-[16px] font-[600] font-poppins ml-1 \",\n                                children: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.timerFormated)(timer)\n                            }, void 0, false, {\n                                fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pr-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: \"/img/rightArrow.png\",\n                            width: 6,\n                            height: 10,\n                            priority: true\n                        }, void 0, false, {\n                            fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-w-[320px] px-4 items-center  mb-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full max-w-4xl mx-auto\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-10 sm:col-span-12 lg:col-span-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative\",\n                            style: {\n                                paddingBottom: \"75%\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: activeQuiz.mainImage,\n                                layout: \"fill\",\n                                objectFit: \"cover\"\n                            }, void 0, false, {\n                                fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                                lineNumber: 50,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            \"Answer options\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-3 gap-4\",\n                children: activeQuiz.options.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-gray-100 border-2 border-gray-300 rounded-lg p-4 text-sm\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-lg ml-10\",\n                                    children: option.label\n                                }, void 0, false, {\n                                    fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 9\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                                lineNumber: 60,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: option.url,\n                                layout: \"fill\",\n                                objectFit: \"cover\"\n                            }, void 0, false, {\n                                fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                                lineNumber: 63,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, option.url, true, {\n                        fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                        lineNumber: 59,\n                        columnNumber: 5\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"VqnFqxDAXWojMxqFOY/erpdLXig=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ2I7QUFDb0I7QUFDWDtBQUNEO0FBQ3hCLFNBQVNNOztJQUV0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUyxZQUFZQyxjQUFjLEdBQUdWLCtDQUFRQSxDQUFDSyx1REFBUSxDQUFDLEVBQUU7SUFDeEQsTUFBTU0sYUFBYTtJQUNuQixNQUFNQyxjQUFjO0lBRXBCWCxnREFBU0EsQ0FBQztRQUNSLE1BQU1ZLFdBQVdDLFlBQVk7WUFDM0JOLFNBQVMsQ0FBQ08sWUFBY0EsWUFBWTtRQUN0QyxHQUFHO1FBRUgsT0FBTyxJQUFNQyxjQUFjSDtJQUM3QixHQUFHLEVBQUU7SUFFTCxNQUFNSSxjQUFjTixhQUFhLElBQUksY0FBZUEsYUFBYyxNQUFNO0lBRXhFLHFCQUNFLDhEQUFDTztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNqQixrREFBS0E7b0JBQUNrQixLQUFJO29CQUFlQyxPQUFPO29CQUFLQyxRQUFRO29CQUFJQyxRQUFROzs7Ozs7Ozs7OzswQkFHNUQsOERBQUNMOzBCQUNDLDRFQUFDZiwrREFBV0E7b0JBQUNrQixPQUFPSjs7Ozs7Ozs7Ozs7MEJBRXRCLDhEQUFDQztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDakIsa0RBQUtBOzRCQUFDa0IsS0FBSTs0QkFBc0JDLE9BQU87NEJBQUlDLFFBQVE7NEJBQUlDLFFBQVE7Ozs7Ozs7Ozs7O2tDQUVsRSw4REFBQ0w7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDakIsa0RBQUtBO2dDQUFDa0IsS0FBSTtnQ0FBZ0JDLE9BQU87Z0NBQUlDLFFBQVE7Z0NBQUlDLFFBQVE7Ozs7OzswQ0FDMUQsOERBQUNDO2dDQUFHTCxXQUFVOzBDQUE2Q2YscURBQWFBLENBQUNHOzs7Ozs7Ozs7Ozs7a0NBRTNFLDhEQUFDVzt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ2pCLGtEQUFLQTs0QkFBQ2tCLEtBQUk7NEJBQXNCQyxPQUFPOzRCQUFHQyxRQUFROzRCQUFJQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7OzswQkFJbkUsOERBQUNMO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUFJQyxXQUFVOzRCQUFXTSxPQUFPO2dDQUFFQyxlQUFlOzRCQUFNO3NDQUN0RCw0RUFBQ3hCLGtEQUFLQTtnQ0FBQ2tCLEtBQUtYLFdBQVdrQixTQUFTO2dDQUFFQyxRQUFPO2dDQUFPQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUk1RDswQkFHTiw4REFBQ1g7Z0JBQUlDLFdBQVU7MEJBQ2xCVixXQUFXcUIsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsdUJBQ3ZCLDhEQUFDQzt3QkFBd0JkLFdBQVU7OzBDQUNqQyw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNlO29DQUFLZixXQUFVOzhDQUFpQmEsT0FBT0csS0FBSzs7Ozs7Ozs7Ozs7MENBRS9DLDhEQUFDakMsa0RBQUtBO2dDQUFDa0IsS0FBS1ksT0FBT0ksR0FBRztnQ0FBRVIsUUFBTztnQ0FBT0MsV0FBVTs7Ozs7Ozt1QkFKckNHLE9BQU9JLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVM0I7R0E5RHdCOUI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiLi9jb21wb25lbnRzL1Byb2dyZXNzQmFyXCI7XG5pbXBvcnQgeyB0aW1lckZvcm1hdGVkIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCBxdWl6RGF0YSBmcm9tIFwiLi91dGlscy9xdWl6RGF0YVwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IFt0aW1lciwgc2V0VGltZXJdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFthY3RpdmVRdWl6LCBzZXRBY3RpdmVRdWl6XSA9IHVzZVN0YXRlKHF1aXpEYXRhWzBdKVxuICBjb25zdCB0b3RhbEl0ZW1zID0gMzA7XG4gIGNvbnN0IGZpbGxlZEl0ZW1zID0gMTA7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldFRpbWVyKChwcmV2VGltZXIpID0+IHByZXZUaW1lciArIDEpO1xuICAgIH0sIDEwMDApO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZmlsbGVkV2lkdGggPSB0b3RhbEl0ZW1zID4gMCA/IChmaWxsZWRJdGVtcyAvIHRvdGFsSXRlbXMpICogMTAwIDogMDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctWzQxNHB4XSAgYmctd2hpdGUgc2hhZG93LWxnIHAtMyByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtYi01XCI+XG4gICAgICAgIDxJbWFnZSBzcmM9XCIvYXBwTG9nby5wbmdcIiB3aWR0aD17MTczfSBoZWlnaHQ9ezM2fSBwcmlvcml0eSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxQcm9ncmVzc0JhciB3aWR0aD17ZmlsbGVkV2lkdGh9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTggbXQtNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludmlzaWJsZSBwbC00XCI+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcvcmlnaHRBcnJvdy5wbmdcIiB3aWR0aD17MTB9IGhlaWdodD17MTB9IHByaW9yaXR5IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC1bMnB4XVwiPlxuICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1nL3RpbWUucG5nXCIgd2lkdGg9ezE0fSBoZWlnaHQ9ezE0fSBwcmlvcml0eSAvPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LVsxNnB4XSBmb250LVs2MDBdIGZvbnQtcG9wcGlucyBtbC0xIFwiPnt0aW1lckZvcm1hdGVkKHRpbWVyKX08L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwci00XCI+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcvcmlnaHRBcnJvdy5wbmdcIiB3aWR0aD17Nn0gaGVpZ2h0PXsxMH0gcHJpb3JpdHkgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4tdy1bMzIwcHhdIHB4LTQgaXRlbXMtY2VudGVyICBtYi00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LTR4bCBteC1hdXRvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xMCBzbTpjb2wtc3Bhbi0xMiBsZzpjb2wtc3Bhbi02XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogJzc1JScgfX0+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2FjdGl2ZVF1aXoubWFpbkltYWdlfSBsYXlvdXQ9XCJmaWxsXCIgb2JqZWN0Rml0PVwiY292ZXJcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIEFuc3dlciBvcHRpb25zXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTRcIj5cbiAge2FjdGl2ZVF1aXoub3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxuICAgIDxidXR0b24ga2V5PXtvcHRpb24udXJsfSBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZyBwLTQgdGV4dC1zbVwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIG1sLTEwXCI+e29wdGlvbi5sYWJlbH08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxJbWFnZSBzcmM9e29wdGlvbi51cmx9IGxheW91dD1cImZpbGxcIiBvYmplY3RGaXQ9XCJjb3ZlclwiIC8+XG4gICAgPC9idXR0b24+XG4gICkpfVxuPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsIlByb2dyZXNzQmFyIiwidGltZXJGb3JtYXRlZCIsInF1aXpEYXRhIiwiSG9tZSIsInRpbWVyIiwic2V0VGltZXIiLCJhY3RpdmVRdWl6Iiwic2V0QWN0aXZlUXVpeiIsInRvdGFsSXRlbXMiLCJmaWxsZWRJdGVtcyIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZXIiLCJjbGVhckludGVydmFsIiwiZmlsbGVkV2lkdGgiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsInByaW9yaXR5IiwiaDMiLCJzdHlsZSIsInBhZGRpbmdCb3R0b20iLCJtYWluSW1hZ2UiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJvcHRpb25zIiwibWFwIiwib3B0aW9uIiwiYnV0dG9uIiwic3BhbiIsImxhYmVsIiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});