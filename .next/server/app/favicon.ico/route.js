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
exports.id = "app/favicon.ico/route";
exports.ids = ["app/favicon.ico/route"];
exports.modules = {

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Ffavicon.ico%2Froute&page=%2Ffavicon.ico%2Froute&appPaths=&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=%2FUsers%2Fzuxbrt%2FDesktop%2Fprojects%2Fzuxbrt.github.io%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fzuxbrt%2FDesktop%2Fprojects%2Fzuxbrt.github.io&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Ffavicon.ico%2Froute&page=%2Ffavicon.ico%2Froute&appPaths=&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=%2FUsers%2Fzuxbrt%2FDesktop%2Fprojects%2Fzuxbrt.github.io%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fzuxbrt%2FDesktop%2Fprojects%2Fzuxbrt.github.io&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_metadata_route_loader_filePath_2FUsers_2Fzuxbrt_2FDesktop_2Fprojects_2Fzuxbrt_github_io_2Fsrc_2Fapp_2Ffavicon_ico_isDynamicRouteExtension_0_next_metadata_route___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-metadata-route-loader?filePath=%2FUsers%2Fzuxbrt%2FDesktop%2Fprojects%2Fzuxbrt.github.io%2Fsrc%2Fapp%2Ffavicon.ico&isDynamicRouteExtension=0!?__next_metadata_route__ */ \"(rsc)/./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?filePath=%2FUsers%2Fzuxbrt%2FDesktop%2Fprojects%2Fzuxbrt.github.io%2Fsrc%2Fapp%2Ffavicon.ico&isDynamicRouteExtension=0!?__next_metadata_route__\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"export\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/favicon.ico/route\",\n        pathname: \"/favicon.ico\",\n        filename: \"favicon\",\n        bundlePath: \"app/favicon.ico/route\"\n    },\n    resolvedPagePath: \"next-metadata-route-loader?filePath=%2FUsers%2Fzuxbrt%2FDesktop%2Fprojects%2Fzuxbrt.github.io%2Fsrc%2Fapp%2Ffavicon.ico&isDynamicRouteExtension=0!?__next_metadata_route__\",\n    nextConfigOutput,\n    userland: next_metadata_route_loader_filePath_2FUsers_2Fzuxbrt_2FDesktop_2Fprojects_2Fzuxbrt_github_io_2Fsrc_2Fapp_2Ffavicon_ico_isDynamicRouteExtension_0_next_metadata_route___WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZmYXZpY29uLmljbyUyRnJvdXRlJnBhZ2U9JTJGZmF2aWNvbi5pY28lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZmYXZpY29uLmljbyZhcHBEaXI9JTJGVXNlcnMlMkZ6dXhicnQlMkZEZXNrdG9wJTJGcHJvamVjdHMlMkZ6dXhicnQuZ2l0aHViLmlvJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRnp1eGJydCUyRkRlc2t0b3AlMkZwcm9qZWN0cyUyRnp1eGJydC5naXRodWIuaW8maXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9ZXhwb3J0JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQzBIO0FBQ3ZNO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJuZXh0LW1ldGFkYXRhLXJvdXRlLWxvYWRlcj9maWxlUGF0aD0lMkZVc2VycyUyRnp1eGJydCUyRkRlc2t0b3AlMkZwcm9qZWN0cyUyRnp1eGJydC5naXRodWIuaW8lMkZzcmMlMkZhcHAlMkZmYXZpY29uLmljbyZpc0R5bmFtaWNSb3V0ZUV4dGVuc2lvbj0wIT9fX25leHRfbWV0YWRhdGFfcm91dGVfX1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJleHBvcnRcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9mYXZpY29uLmljby9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvZmF2aWNvbi5pY29cIixcbiAgICAgICAgZmlsZW5hbWU6IFwiZmF2aWNvblwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9mYXZpY29uLmljby9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIm5leHQtbWV0YWRhdGEtcm91dGUtbG9hZGVyP2ZpbGVQYXRoPSUyRlVzZXJzJTJGenV4YnJ0JTJGRGVza3RvcCUyRnByb2plY3RzJTJGenV4YnJ0LmdpdGh1Yi5pbyUyRnNyYyUyRmFwcCUyRmZhdmljb24uaWNvJmlzRHluYW1pY1JvdXRlRXh0ZW5zaW9uPTAhP19fbmV4dF9tZXRhZGF0YV9yb3V0ZV9fXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Ffavicon.ico%2Froute&page=%2Ffavicon.ico%2Froute&appPaths=&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=%2FUsers%2Fzuxbrt%2FDesktop%2Fprojects%2Fzuxbrt.github.io%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fzuxbrt%2FDesktop%2Fprojects%2Fzuxbrt.github.io&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?filePath=%2FUsers%2Fzuxbrt%2FDesktop%2Fprojects%2Fzuxbrt.github.io%2Fsrc%2Fapp%2Ffavicon.ico&isDynamicRouteExtension=0!?__next_metadata_route__":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?filePath=%2FUsers%2Fzuxbrt%2FDesktop%2Fprojects%2Fzuxbrt.github.io%2Fsrc%2Fapp%2Ffavicon.ico&isDynamicRouteExtension=0!?__next_metadata_route__ ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   dynamic: () => (/* binding */ dynamic)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* static asset route */\n\n\nconst contentType = \"image/x-icon\"\nconst buffer = Buffer.from(\"AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAAqqoAAFVVAAAAAAAAAAAAAPvRAABCSgAAIkQAABJEAAAKSgAA+lEAAAAAAAAAAAAAVVUAAKqqAAD//wAA\", 'base64'\n  )\n\nif (false) {}\n\nfunction GET() {\n  return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(buffer, {\n    headers: {\n      'Content-Type': contentType,\n      'Cache-Control': \"public, max-age=0, must-revalidate\",\n    },\n  })\n}\n\nconst dynamic = 'force-static'\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LW1ldGFkYXRhLXJvdXRlLWxvYWRlci5qcz9maWxlUGF0aD0lMkZVc2VycyUyRnp1eGJydCUyRkRlc2t0b3AlMkZwcm9qZWN0cyUyRnp1eGJydC5naXRodWIuaW8lMkZzcmMlMkZhcHAlMkZmYXZpY29uLmljbyZpc0R5bmFtaWNSb3V0ZUV4dGVuc2lvbj0wIT9fX25leHRfbWV0YWRhdGFfcm91dGVfXyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUMwQzs7QUFFMUM7QUFDQTtBQUNBOztBQUVBLElBQUksS0FBSyxFQUFFLEVBU1Y7O0FBRU07QUFDUCxhQUFhLHFEQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRU8iLCJzb3VyY2VzIjpbIj9fX25leHRfbWV0YWRhdGFfcm91dGVfXyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdGF0aWMgYXNzZXQgcm91dGUgKi9cbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xuXG5jb25zdCBjb250ZW50VHlwZSA9IFwiaW1hZ2UveC1pY29uXCJcbmNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKFwiQUFBQkFBRUFFQkFRQUFFQUJBQW9BUUFBRmdBQUFDZ0FBQUFRQUFBQUlBQUFBQUVBQkFBQUFBQUFnQUFBQUFBQUFBQUFBQUFBRUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFELy93QUFxcW9BQUZWVkFBQUFBQUFBQUFBQUFQdlJBQUJDU2dBQUlrUUFBQkpFQUFBS1NnQUErbEVBQUFBQUFBQUFBQUFBVlZVQUFLcXFBQUQvL3dBQVwiLCAnYmFzZTY0J1xuICApXG5cbmlmIChmYWxzZSkge1xuICBjb25zdCBmaWxlU2l6ZUluTUIgPSBidWZmZXIuYnl0ZUxlbmd0aCAvIDEwMjQgLyAxMDI0XG4gIGlmIChmaWxlU2l6ZUluTUIgPiA4KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGaWxlIHNpemUgZm9yIE9wZW4gR3JhcGggaW1hZ2UgXCIvVXNlcnMvenV4YnJ0L0Rlc2t0b3AvcHJvamVjdHMvenV4YnJ0LmdpdGh1Yi5pby9zcmMvYXBwL2Zhdmljb24uaWNvXCIgZXhjZWVkcyA4TUIuICcgK1xuICAgIGAoQ3VycmVudDogJHtmaWxlU2l6ZUluTUIudG9GaXhlZCgyKX1NQilcbmAgK1xuICAgICdSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwcC9hcGktcmVmZXJlbmNlL2ZpbGUtY29udmVudGlvbnMvbWV0YWRhdGEvb3BlbmdyYXBoLWltYWdlI2ltYWdlLWZpbGVzLWpwZy1wbmctZ2lmJ1xuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gR0VUKCkge1xuICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShidWZmZXIsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogY29udGVudFR5cGUsXG4gICAgICAnQ2FjaGUtQ29udHJvbCc6IFwicHVibGljLCBtYXgtYWdlPTAsIG11c3QtcmV2YWxpZGF0ZVwiLFxuICAgIH0sXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBkeW5hbWljID0gJ2ZvcmNlLXN0YXRpYydcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?filePath=%2FUsers%2Fzuxbrt%2FDesktop%2Fprojects%2Fzuxbrt.github.io%2Fsrc%2Fapp%2Ffavicon.ico&isDynamicRouteExtension=0!?__next_metadata_route__\n");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Ffavicon.ico%2Froute&page=%2Ffavicon.ico%2Froute&appPaths=&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=%2FUsers%2Fzuxbrt%2FDesktop%2Fprojects%2Fzuxbrt.github.io%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fzuxbrt%2FDesktop%2Fprojects%2Fzuxbrt.github.io&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();