"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/socket";
exports.ids = ["pages/api/socket"];
exports.modules = {

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

module.exports = import("socket.io");;

/***/ }),

/***/ "(api)/./src/pages/api/socket.ts":
/*!*********************************!*\
  !*** ./src/pages/api/socket.ts ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io */ \"socket.io\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io__WEBPACK_IMPORTED_MODULE_0__]);\nsocket_io__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst ioHandler = (req, res)=>{\n    if (!res.socket.server.io) {\n        console.log(\"*First use, starting socket.io\");\n        const io = new socket_io__WEBPACK_IMPORTED_MODULE_0__.Server(res.socket.server);\n        io.on(\"connection\", (socket)=>{\n            socket.broadcast.emit(\"a user connected\");\n            socket.on(\"send\", (msg)=>{\n                console.log(\"neww\");\n            });\n        });\n        res.socket.server.io = io;\n    } else {\n        console.log(\"socket.io already running\");\n    }\n    res.end();\n};\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ioHandler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3NvY2tldC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDa0M7QUFFbEMsTUFBTUMsWUFBWSxDQUFDQyxLQUFxQkMsTUFBYTtJQUNuRCxJQUFJLENBQUNBLElBQUlDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxFQUFFLEVBQUU7UUFDekJDLFFBQVFDLEdBQUcsQ0FBQztRQUVaLE1BQU1GLEtBQUssSUFBSU4sNkNBQU1BLENBQUNHLElBQUlDLE1BQU0sQ0FBQ0MsTUFBTTtRQUV2Q0MsR0FBR0csRUFBRSxDQUFDLGNBQWNMLENBQUFBLFNBQVU7WUFDNUJBLE9BQU9NLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDO1lBQ3RCUCxPQUFPSyxFQUFFLENBQUMsUUFBUUcsQ0FBQUEsTUFBTztnQkFDdkJMLFFBQVFDLEdBQUcsQ0FBQztZQUNkO1FBQ0Y7UUFFQUwsSUFBSUMsTUFBTSxDQUFDQyxNQUFNLENBQUNDLEVBQUUsR0FBR0E7SUFDekIsT0FBTztRQUNMQyxRQUFRQyxHQUFHLENBQUM7SUFDZCxDQUFDO0lBQ0RMLElBQUlVLEdBQUc7QUFDVDtBQUVPLE1BQU1DLFNBQVM7SUFDcEJDLEtBQUs7UUFDSEMsWUFBWSxLQUFLO0lBQ25CO0FBQ0YsRUFBQztBQUVELGlFQUFlZixTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdHQvLi9zcmMvcGFnZXMvYXBpL3NvY2tldC50cz8zMzMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0IH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gJ3NvY2tldC5pbydcblxuY29uc3QgaW9IYW5kbGVyID0gKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogYW55KSA9PiB7XG4gIGlmICghcmVzLnNvY2tldC5zZXJ2ZXIuaW8pIHtcbiAgICBjb25zb2xlLmxvZygnKkZpcnN0IHVzZSwgc3RhcnRpbmcgc29ja2V0LmlvJylcblxuICAgIGNvbnN0IGlvID0gbmV3IFNlcnZlcihyZXMuc29ja2V0LnNlcnZlcilcblxuICAgIGlvLm9uKCdjb25uZWN0aW9uJywgc29ja2V0ID0+IHtcbiAgICAgIHNvY2tldC5icm9hZGNhc3QuZW1pdCgnYSB1c2VyIGNvbm5lY3RlZCcpXG4gICAgICBzb2NrZXQub24oJ3NlbmQnLCBtc2cgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnbmV3dycpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICByZXMuc29ja2V0LnNlcnZlci5pbyA9IGlvXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ3NvY2tldC5pbyBhbHJlYWR5IHJ1bm5pbmcnKVxuICB9XG4gIHJlcy5lbmQoKVxufVxuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBhcGk6IHtcbiAgICBib2R5UGFyc2VyOiBmYWxzZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlvSGFuZGxlciJdLCJuYW1lcyI6WyJTZXJ2ZXIiLCJpb0hhbmRsZXIiLCJyZXEiLCJyZXMiLCJzb2NrZXQiLCJzZXJ2ZXIiLCJpbyIsImNvbnNvbGUiLCJsb2ciLCJvbiIsImJyb2FkY2FzdCIsImVtaXQiLCJtc2ciLCJlbmQiLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/socket.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/socket.ts"));
module.exports = __webpack_exports__;

})();