"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var _components_Message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Message */ \"./src/components/Message.tsx\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_4__.io)();\nfunction Home() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetch(\"/api/socket\").finally(()=>{\n            socket.on(\"connect\", ()=>{\n                console.log(\"connect\");\n                socket.emit(\"hello\");\n            });\n            socket.on(\"newMessage\", (msg)=>{\n                console.log(msg);\n            });\n            socket.on(\"a user connected\", ()=>{\n                console.log(\"a user connected\");\n            });\n            socket.on(\"disconnect\", ()=>{\n                console.log(\"disconnect\");\n            });\n        });\n    }, []);\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const sendMessage = (txt)=>{\n        socket.emit(\"sendMessage\", txt);\n        setText(\"\");\n    };\n    const handleEnter = (e)=>{\n        if (e.key === \"Enter\") {\n            if (text != \"\") {\n                sendMessage(text);\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"max-w-6xl mx-auto h-screen py-16 relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/chatt/src/pages/index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/chatt/src/pages/index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/chatt/src/pages/index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/chatt/src/pages/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/chatt/src/pages/index.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"bg-amber-300 p-4 rounded-t-xl w-full flex justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-bold cursor-pointer\",\n                        children: \"Chatt\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/chatt/src/pages/index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"cursor-pointer\",\n                        children: \"Username\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/chatt/src/pages/index.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/chatt/src/pages/index.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"flex justify-between text-neutral-700 font-semibold\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-amber-200 w-1/6 p-4 flex flex-col items-center rounded-bl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl\",\n                                children: [\n                                    \"Users (3) \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_5__.HiUsers, {}, void 0, false, {\n                                        fileName: \"/workspaces/chatt/src/pages/index.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 23\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspaces/chatt/src/pages/index.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"mt-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: \"Jose\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/chatt/src/pages/index.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: \"Elwin\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/chatt/src/pages/index.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: \"Milan\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/chatt/src/pages/index.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspaces/chatt/src/pages/index.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/chatt/src/pages/index.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white w-5/6 max-h-72 overflow-y-auto rounded-br\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full px-5 flex flex-col justify-between\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col mt-5\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Message__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        text: \"Hello\",\n                                        sent: true\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/chatt/src/pages/index.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Message__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        text: \"Howdy\",\n                                        sent: false\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/chatt/src/pages/index.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Message__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        text: \"Hello World\",\n                                        sent: true\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/chatt/src/pages/index.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Message__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        text: \"Hello World\",\n                                        sent: true\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/chatt/src/pages/index.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Message__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        text: \"Hey\",\n                                        sent: true\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/chatt/src/pages/index.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Message__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        text: \"Hey\",\n                                        sent: true\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/chatt/src/pages/index.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Message__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        text: \"Hey\",\n                                        sent: true\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/chatt/src/pages/index.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspaces/chatt/src/pages/index.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/workspaces/chatt/src/pages/index.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/workspaces/chatt/src/pages/index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/chatt/src/pages/index.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"py-5 px-4 flex justify-center gap-2 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: (e)=>setText(e.target.value),\n                        onKeyDown: (e)=>handleEnter(e),\n                        value: text,\n                        className: \"w-full h-12 bg-gray-300 py-2 px-3 rounded-xl\",\n                        type: \"text\",\n                        placeholder: \"Type here...\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/chatt/src/pages/index.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>sendMessage(text),\n                        className: \"bg-amber-300 p-4 rounded shadow-lg hover:shadow-none transition-all duration-500 hover:bg-slate-500 hover:text-white active:bg-amber-300\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_6__.IoSend, {\n                            size: 22\n                        }, void 0, false, {\n                            fileName: \"/workspaces/chatt/src/pages/index.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/workspaces/chatt/src/pages/index.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/chatt/src/pages/index.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/chatt/src/pages/index.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"O5gdLOZs6Zabjzc5Z5Bz0jCUKDM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0w7Z0JBQVFSLFdBQVU7O2tDQUNqQiw4REFBQ2M7d0JBQ0NDLFVBQVUsQ0FBQ2xCLElBQU1KLFFBQVFJLEVBQUVtQixNQUFNLENBQUNDLEtBQUs7d0JBQ3ZDQyxXQUFXLENBQUNyQixJQUFNRCxZQUFZQzt3QkFDOUJvQixPQUFPekI7d0JBQ1BRLFdBQVU7d0JBQ1ZtQixNQUFLO3dCQUNMQyxhQUFZOzs7Ozs7a0NBRWQsOERBQUNDO3dCQUNDQyxTQUFTLElBQU01QixZQUFZRjt3QkFDM0JRLFdBQVU7a0NBRVYsNEVBQUNyQixtREFBTUE7NEJBQUM0QyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt4QixDQUFDO0dBMUZ1QnZDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW9TZW5kIH0gZnJvbSBcInJlYWN0LWljb25zL2lvNVwiO1xuaW1wb3J0IHsgSGlVc2VycyB9IGZyb20gXCJyZWFjdC1pY29ucy9oaVwiO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSBcIkAvY29tcG9uZW50cy9NZXNzYWdlXCI7XG5pbXBvcnQgeyBTb2NrZXQsIGlvIH0gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcbmNvbnN0IHNvY2tldCA9IGlvKCk7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKFwiL2FwaS9zb2NrZXRcIikuZmluYWxseSgoKSA9PiB7XG5cbiAgICAgIHNvY2tldC5vbihcImNvbm5lY3RcIiwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvbm5lY3RcIik7XG4gICAgICAgIHNvY2tldC5lbWl0KFwiaGVsbG9cIik7XG4gICAgICB9KTtcblxuICAgICAgc29ja2V0Lm9uKFwibmV3TWVzc2FnZVwiLCAobXNnKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgICB9KTtcblxuICAgICAgc29ja2V0Lm9uKFwiYSB1c2VyIGNvbm5lY3RlZFwiLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYSB1c2VyIGNvbm5lY3RlZFwiKTtcbiAgICAgIH0pO1xuXG4gICAgICBzb2NrZXQub24oXCJkaXNjb25uZWN0XCIsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJkaXNjb25uZWN0XCIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gKHR4dDogc3RyaW5nKSA9PiB7XG4gICAgc29ja2V0LmVtaXQoXCJzZW5kTWVzc2FnZVwiLCB0eHQpO1xuICAgIHNldFRleHQoXCJcIik7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUVudGVyID0gKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgaWYgKHRleHQgIT0gXCJcIikge1xuICAgICAgICBzZW5kTWVzc2FnZSh0ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG8gaC1zY3JlZW4gcHktMTYgcmVsYXRpdmVcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZy1hbWJlci0zMDAgcC00IHJvdW5kZWQtdC14bCB3LWZ1bGwgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgY3Vyc29yLXBvaW50ZXJcIj5DaGF0dDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIj5Vc2VybmFtZTwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC1uZXV0cmFsLTcwMCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYW1iZXItMjAwIHctMS82IHAtNCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciByb3VuZGVkLWJsXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+XG4gICAgICAgICAgICBVc2VycyAoMykgPEhpVXNlcnMgLz5cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC1bMXB4XSBiZy1uZXV0cmFsLTcwMFwiPjwvc3Bhbj4gKi99XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICAgIDxsaT5Kb3NlPC9saT5cbiAgICAgICAgICAgIDxsaT5FbHdpbjwvbGk+XG4gICAgICAgICAgICA8bGk+TWlsYW48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHctNS82IG1heC1oLTcyIG92ZXJmbG93LXktYXV0byByb3VuZGVkLWJyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNSBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG10LTVcIj5cbiAgICAgICAgICAgICAgPE1lc3NhZ2UgdGV4dD1cIkhlbGxvXCIgc2VudD17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgPE1lc3NhZ2UgdGV4dD1cIkhvd2R5XCIgc2VudD17ZmFsc2V9IC8+XG4gICAgICAgICAgICAgIDxNZXNzYWdlIHRleHQ9XCJIZWxsbyBXb3JsZFwiIHNlbnQ9e3RydWV9IC8+XG4gICAgICAgICAgICAgIDxNZXNzYWdlIHRleHQ9XCJIZWxsbyBXb3JsZFwiIHNlbnQ9e3RydWV9IC8+XG4gICAgICAgICAgICAgIDxNZXNzYWdlIHRleHQ9XCJIZXlcIiBzZW50PXt0cnVlfSAvPlxuICAgICAgICAgICAgICA8TWVzc2FnZSB0ZXh0PVwiSGV5XCIgc2VudD17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgPE1lc3NhZ2UgdGV4dD1cIkhleVwiIHNlbnQ9e3RydWV9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS01IHB4LTQgZmxleCBqdXN0aWZ5LWNlbnRlciBnYXAtMiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBvbktleURvd249eyhlKSA9PiBoYW5kbGVFbnRlcihlKX1cbiAgICAgICAgICB2YWx1ZT17dGV4dH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xMiBiZy1ncmF5LTMwMCBweS0yIHB4LTMgcm91bmRlZC14bFwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBoZXJlLi4uXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbmRNZXNzYWdlKHRleHQpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWFtYmVyLTMwMCBwLTQgcm91bmRlZCBzaGFkb3ctbGcgaG92ZXI6c2hhZG93LW5vbmUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIGhvdmVyOmJnLXNsYXRlLTUwMCBob3Zlcjp0ZXh0LXdoaXRlIGFjdGl2ZTpiZy1hbWJlci0zMDBcIlxuICAgICAgICA+XG4gICAgICAgICAgPElvU2VuZCBzaXplPXsyMn0gLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW9TZW5kIiwiSGlVc2VycyIsIk1lc3NhZ2UiLCJpbyIsInNvY2tldCIsIkhvbWUiLCJmZXRjaCIsImZpbmFsbHkiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJlbWl0IiwibXNnIiwidGV4dCIsInNldFRleHQiLCJzZW5kTWVzc2FnZSIsInR4dCIsImhhbmRsZUVudGVyIiwiZSIsImtleSIsIm1haW4iLCJjbGFzc05hbWUiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwic2VjdGlvbiIsImgxIiwiZGl2IiwidWwiLCJsaSIsInNlbnQiLCJpbnB1dCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJvbktleURvd24iLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});