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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _components_ProgressBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ProgressBar */ \"(app-pages-browser)/./src/app/components/ProgressBar.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ \"(app-pages-browser)/./src/app/utils/index.js\");\n/* harmony import */ var _utils_quizData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/quizData */ \"(app-pages-browser)/./src/app/utils/quizData.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [timer, setTimer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [activeQuiz, setActiveQuiz] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const totalItems = 30;\n    const filledItems = 10;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setTimer((prevTimer)=>prevTimer + 1);\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, []);\n    const filledWidth = totalItems > 0 ? (activeQuiz + 1 / _utils_quizData__WEBPACK_IMPORTED_MODULE_5__[\"default\"].length) * 100 : 0;\n    const isEndQuiz = ()=>{\n        return activeQuiz + 1 === _utils_quizData__WEBPACK_IMPORTED_MODULE_5__[\"default\"].length;\n    };\n    const handleClick = (quiz)=>{\n        if (isEndQuiz()) return;\n        setActiveQuiz(activeQuiz + 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-[414px]  bg-white shadow-lg p-3 rounded-lg overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w flex items-center justify-center mb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    src: \"/appLogo.png\",\n                    width: 173,\n                    height: 36,\n                    priority: true\n                }, void 0, false, {\n                    fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProgressBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    width: filledWidth\n                }, void 0, false, {\n                    fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between mb-8 mt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pl-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: \"/img/rightArrow.png\",\n                            width: 10,\n                            height: 10,\n                            priority: true\n                        }, void 0, false, {\n                            fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-[2px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: \"/img/time.png\",\n                                width: 14,\n                                height: 14,\n                                priority: true\n                            }, void 0, false, {\n                                fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-[16px] font-[600] font-poppins ml-1 \",\n                                children: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.timerFormated)(timer)\n                            }, void 0, false, {\n                                fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pr-4\",\n                        onClick: handleClick,\n                        children: !isEndQuiz() && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: \"/img/rightArrow.png\",\n                            width: 6,\n                            height: 10,\n                            priority: true\n                        }, void 0, false, {\n                            fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                            lineNumber: 50,\n                            columnNumber: 28\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-w-[320px] px-4 items-center  mb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full max-w-4xl mx-auto\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-10 sm:col-span-12 lg:col-span-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative\",\n                            style: {\n                                paddingBottom: \"75%\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: _utils_quizData__WEBPACK_IMPORTED_MODULE_5__[\"default\"][activeQuiz].mainImage,\n                                layout: \"fill\",\n                                objectFit: \"contain\"\n                            }, void 0, false, {\n                                fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                                lineNumber: 58,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-[16px] font-[600] font-poppins text-center mb-5\",\n                        children: \"Choose your answer:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-3 gap-4 \",\n                        children: _utils_quizData__WEBPACK_IMPORTED_MODULE_5__[\"default\"][activeQuiz].options.map((option, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleClick,\n                                className: \"flex items-center justify-between relative focus:outline-none focus:ring focus:ring-[#0070F3] hover:outline-none hover:ring-1 hover:ring-[#0070F3] text-white font-bold  px-4 rounded px-1 mt-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-[34px] font-[600] font-poppins text-[#0070F3]\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: option.label\n                                        }, void 0, false, {\n                                            fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"relative w-16 h-10\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            src: option.url,\n                                            layout: \"fill\",\n                                            objectFit: \"contain\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                                            lineNumber: 75,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, option.url, true, {\n                                fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/saurabh/Downloads/quiz-app/src/app/page.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"E73Dkd1Sm0u3cAmgs25zage5CfE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ2I7QUFDb0I7QUFDWDtBQUNEO0FBQ3hCLFNBQVNNOztJQUV0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUyxZQUFZQyxjQUFjLEdBQUdWLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU1XLGFBQWE7SUFDbkIsTUFBTUMsY0FBYztJQUVwQlgsZ0RBQVNBLENBQUM7UUFDUixNQUFNWSxXQUFXQyxZQUFZO1lBQzNCTixTQUFTLENBQUNPLFlBQWNBLFlBQVk7UUFDdEMsR0FBRztRQUVILE9BQU8sSUFBTUMsY0FBY0g7SUFDN0IsR0FBRyxFQUFFO0lBRUwsTUFBTUksY0FBY04sYUFBYSxJQUFJLENBQUNGLGFBQVcsSUFBSUosdURBQVFBLENBQUNhLE1BQU0sSUFBSSxNQUFNO0lBRTlFLE1BQU1DLFlBQVk7UUFDaEIsT0FBT1YsYUFBYSxNQUFNSix1REFBUUEsQ0FBQ2EsTUFBTTtJQUMzQztJQUNBLE1BQU1FLGNBQWMsQ0FBQ0M7UUFDbkIsSUFBSUYsYUFBYTtRQUNqQlQsY0FBY0QsYUFBYTtJQUM3QjtJQUVBLHFCQUNFLDhEQUFDYTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNyQixrREFBS0E7b0JBQUNzQixLQUFJO29CQUFlQyxPQUFPO29CQUFLQyxRQUFRO29CQUFJQyxRQUFROzs7Ozs7Ozs7OzswQkFHNUQsOERBQUNMOzBCQUNDLDRFQUFDbkIsK0RBQVdBO29CQUFDc0IsT0FBT1I7Ozs7Ozs7Ozs7OzBCQUV0Qiw4REFBQ0s7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ3JCLGtEQUFLQTs0QkFBQ3NCLEtBQUk7NEJBQXNCQyxPQUFPOzRCQUFJQyxRQUFROzRCQUFJQyxRQUFROzs7Ozs7Ozs7OztrQ0FFbEUsOERBQUNMO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ3JCLGtEQUFLQTtnQ0FBQ3NCLEtBQUk7Z0NBQWdCQyxPQUFPO2dDQUFJQyxRQUFRO2dDQUFJQyxRQUFROzs7Ozs7MENBQzFELDhEQUFDQztnQ0FBR0wsV0FBVTswQ0FBNkNuQixxREFBYUEsQ0FBQ0c7Ozs7Ozs7Ozs7OztrQ0FFM0UsOERBQUNlO3dCQUFJQyxXQUFVO3dCQUFPTSxTQUFTVDtrQ0FDNUIsQ0FBQ0QsNkJBQWUsOERBQUNqQixrREFBS0E7NEJBQUNzQixLQUFJOzRCQUFzQkMsT0FBTzs0QkFBR0MsUUFBUTs0QkFBSUMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXBGLDhEQUFDTDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDs0QkFBSUMsV0FBVTs0QkFBV08sT0FBTztnQ0FBRUMsZUFBZTs0QkFBTTtzQ0FDdEQsNEVBQUM3QixrREFBS0E7Z0NBQUNzQixLQUFLbkIsdURBQVEsQ0FBQ0ksV0FBVyxDQUFDdUIsU0FBUztnQ0FBRUMsUUFBTztnQ0FBT0MsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTTVFLDhEQUFDWjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNZO3dCQUFFWixXQUFVO2tDQUF1RDs7Ozs7O2tDQUNwRSw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1psQix1REFBUSxDQUFDSSxXQUFXLENBQUMyQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQyxzQkFDekMsOERBQUNDO2dDQUNDWCxTQUFTVDtnQ0FDVEcsV0FBWTs7a0RBQ1osOERBQUNEO3dDQUFJQyxXQUFVO2tEQUNiLDRFQUFDa0I7c0RBQU1ILE9BQU9JLEtBQUs7Ozs7Ozs7Ozs7O2tEQUVyQiw4REFBQ3BCO3dDQUFJQyxXQUFVO2tEQUNiLDRFQUFDckIsa0RBQUtBOzRDQUFDc0IsS0FBS2MsT0FBT0ssR0FBRzs0Q0FBRVYsUUFBTzs0Q0FBT0MsV0FBVTs7Ozs7Ozs7Ozs7OytCQVB2Q0ksT0FBT0ssR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVuQztHQTVFd0JyQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanM/MmIzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCIuL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXJcIjtcbmltcG9ydCB7IHRpbWVyRm9ybWF0ZWQgfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IHF1aXpEYXRhIGZyb20gXCIuL3V0aWxzL3F1aXpEYXRhXCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgW3RpbWVyLCBzZXRUaW1lcl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2FjdGl2ZVF1aXosIHNldEFjdGl2ZVF1aXpdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgdG90YWxJdGVtcyA9IDMwO1xuICBjb25zdCBmaWxsZWRJdGVtcyA9IDEwO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRUaW1lcigocHJldlRpbWVyKSA9PiBwcmV2VGltZXIgKyAxKTtcbiAgICB9LCAxMDAwKTtcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGZpbGxlZFdpZHRoID0gdG90YWxJdGVtcyA+IDAgPyAoYWN0aXZlUXVpeisxIC8gcXVpekRhdGEubGVuZ3RoKSAqIDEwMCA6IDA7XG5cbiAgY29uc3QgaXNFbmRRdWl6ID0gKCkgPT4ge1xuICAgIHJldHVybiBhY3RpdmVRdWl6ICsgMSA9PT0gcXVpekRhdGEubGVuZ3RoXG4gIH1cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAocXVpeikgPT4ge1xuICAgIGlmIChpc0VuZFF1aXooKSkgcmV0dXJuXG4gICAgc2V0QWN0aXZlUXVpeihhY3RpdmVRdWl6ICsgMSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1bNDE0cHhdICBiZy13aGl0ZSBzaGFkb3ctbGcgcC0zIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1iLTVcIj5cbiAgICAgICAgPEltYWdlIHNyYz1cIi9hcHBMb2dvLnBuZ1wiIHdpZHRoPXsxNzN9IGhlaWdodD17MzZ9IHByaW9yaXR5IC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPFByb2dyZXNzQmFyIHdpZHRoPXtmaWxsZWRXaWR0aH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItOCBtdC01XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtNFwiPlxuICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1nL3JpZ2h0QXJyb3cucG5nXCIgd2lkdGg9ezEwfSBoZWlnaHQ9ezEwfSBwcmlvcml0eSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtWzJweF1cIj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy90aW1lLnBuZ1wiIHdpZHRoPXsxNH0gaGVpZ2h0PXsxNH0gcHJpb3JpdHkgLz5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1bMTZweF0gZm9udC1bNjAwXSBmb250LXBvcHBpbnMgbWwtMSBcIj57dGltZXJGb3JtYXRlZCh0aW1lcil9PC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHItNFwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICB7IWlzRW5kUXVpeigpICYmIDxJbWFnZSBzcmM9XCIvaW1nL3JpZ2h0QXJyb3cucG5nXCIgd2lkdGg9ezZ9IGhlaWdodD17MTB9IHByaW9yaXR5IC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi13LVszMjBweF0gcHgtNCBpdGVtcy1jZW50ZXIgIG1iLTVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctNHhsIG14LWF1dG9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEwIHNtOmNvbC1zcGFuLTEyIGxnOmNvbC1zcGFuLTZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAnNzUlJyB9fT5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17cXVpekRhdGFbYWN0aXZlUXVpel0ubWFpbkltYWdlfSBsYXlvdXQ9XCJmaWxsXCIgb2JqZWN0Rml0PVwiY29udGFpblwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00XCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzE2cHhdIGZvbnQtWzYwMF0gZm9udC1wb3BwaW5zIHRleHQtY2VudGVyIG1iLTVcIj5DaG9vc2UgeW91ciBhbnN3ZXI6PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTQgXCI+XG4gICAgICAgICAge3F1aXpEYXRhW2FjdGl2ZVF1aXpdLm9wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8YnV0dG9uIGtleT17b3B0aW9uLnVybH1cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiByZWxhdGl2ZSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZyBmb2N1czpyaW5nLVsjMDA3MEYzXSBob3ZlcjpvdXRsaW5lLW5vbmUgaG92ZXI6cmluZy0xIGhvdmVyOnJpbmctWyMwMDcwRjNdIHRleHQtd2hpdGUgZm9udC1ib2xkICBweC00IHJvdW5kZWQgcHgtMSBtdC00YH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMzRweF0gZm9udC1bNjAwXSBmb250LXBvcHBpbnMgdGV4dC1bIzAwNzBGM11cIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57b3B0aW9uLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy0xNiBoLTEwXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17b3B0aW9uLnVybH0gbGF5b3V0PVwiZmlsbFwiIG9iamVjdEZpdD1cImNvbnRhaW5cIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW1hZ2UiLCJQcm9ncmVzc0JhciIsInRpbWVyRm9ybWF0ZWQiLCJxdWl6RGF0YSIsIkhvbWUiLCJ0aW1lciIsInNldFRpbWVyIiwiYWN0aXZlUXVpeiIsInNldEFjdGl2ZVF1aXoiLCJ0b3RhbEl0ZW1zIiwiZmlsbGVkSXRlbXMiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwicHJldlRpbWVyIiwiY2xlYXJJbnRlcnZhbCIsImZpbGxlZFdpZHRoIiwibGVuZ3RoIiwiaXNFbmRRdWl6IiwiaGFuZGxlQ2xpY2siLCJxdWl6IiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJwcmlvcml0eSIsImgzIiwib25DbGljayIsInN0eWxlIiwicGFkZGluZ0JvdHRvbSIsIm1haW5JbWFnZSIsImxheW91dCIsIm9iamVjdEZpdCIsInAiLCJvcHRpb25zIiwibWFwIiwib3B0aW9uIiwiaW5kZXgiLCJidXR0b24iLCJzcGFuIiwibGFiZWwiLCJ1cmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});