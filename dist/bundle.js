/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* no static exports found */
/* all exports used */
/*!************************!*\
  !*** ./~/p5/lib/p5.js ***!
  \************************/
/***/ (function(module, exports, __webpack_require__) {


/***/ }),
/* 1 */
/* no static exports found */
/* all exports used */
/*!********************!*\
  !*** ./src/vis.js ***!
  \********************/
/***/ (function(module, exports, __webpack_require__) {

eval("const sheets = __webpack_require__(/*! ./sheets.js */ 5);\nconst utils = __webpack_require__(/*! ./utils.js */ 6);\n\nconst getDim = p5 => Math.min(p5.windowWidth / 2,p5.windowHeight);\n\nconst drawFrames = p5 => p5.fill(255).stroke(0)\n  .rect(0,0,getDim(p5)*2-1,getDim(p5)-1)\n  .line(getDim(p5),0,getDim(p5),getDim(p5));\n\nconst draw = p5 => {\n  const normalize = v => p5.map(v,0,100,0,getDim(p5));\n\n  drawFrames(p5);\n  p5.fill(0);\n\n  // let isFirstPoint = true;\n  sheets.pointSheet.forEach(p => {\n    // isFirstPoint = false;\n\n    //draw the point\n    p5.ellipse(normalize(p.x),normalize(p.y),p.size*4);\n\n    //randomize the line sheets array\n    utils.shuffle(sheets.lineSheets);\n\n    //we work with a number of sheets equal to the size of the point\n    sheets.lineSheets.slice(0,p.size).forEach(sheet => {\n      //for each of the sheet's lines:\n      sheet.forEach(l => {\n        //draw the line\n        p5.line(normalize(l[0].x),normalize(l[0].y),normalize(l[1].x),normalize(l[1].y));\n        //and drop a perpindicular\n        // geom.\n      })\n    })\n  })\n\n  // sheets.lineSheet0.forEach(l => p5.line(normalize(l[0].x),normalize(l[0].y),normalize(l[1].x),normalize(l[1].y)));\n  // sheets.lineSheet1.forEach(l => p5.line(normalize(l[0].x),normalize(l[0].y),normalize(l[1].x),normalize(l[1].y)));\n  // sheets.lineSheet2.forEach(l => p5.line(normalize(l[0].x),normalize(l[0].y),normalize(l[1].x),normalize(l[1].y)));\n  // sheets.lineSheet3.forEach(l => p5.line(normalize(l[0].x),normalize(l[0].y),normalize(l[1].x),normalize(l[1].y)));\n  // sheets.lineSheet4.forEach(l => p5.line(normalize(l[0].x),normalize(l[0].y),normalize(l[1].x),normalize(l[1].y)));\n}\n\nexports.getDim = getDim;\nexports.draw = draw;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy92aXMuanM/YmNiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzaGVldHMgPSByZXF1aXJlKCcuL3NoZWV0cy5qcycpO1xuY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzLmpzJyk7XG5cbmNvbnN0IGdldERpbSA9IHA1ID0+IE1hdGgubWluKHA1LndpbmRvd1dpZHRoIC8gMixwNS53aW5kb3dIZWlnaHQpO1xuXG5jb25zdCBkcmF3RnJhbWVzID0gcDUgPT4gcDUuZmlsbCgyNTUpLnN0cm9rZSgwKVxuICAucmVjdCgwLDAsZ2V0RGltKHA1KSoyLTEsZ2V0RGltKHA1KS0xKVxuICAubGluZShnZXREaW0ocDUpLDAsZ2V0RGltKHA1KSxnZXREaW0ocDUpKTtcblxuY29uc3QgZHJhdyA9IHA1ID0+IHtcbiAgY29uc3Qgbm9ybWFsaXplID0gdiA9PiBwNS5tYXAodiwwLDEwMCwwLGdldERpbShwNSkpO1xuXG4gIGRyYXdGcmFtZXMocDUpO1xuICBwNS5maWxsKDApO1xuXG4gIC8vIGxldCBpc0ZpcnN0UG9pbnQgPSB0cnVlO1xuICBzaGVldHMucG9pbnRTaGVldC5mb3JFYWNoKHAgPT4ge1xuICAgIC8vIGlzRmlyc3RQb2ludCA9IGZhbHNlO1xuXG4gICAgLy9kcmF3IHRoZSBwb2ludFxuICAgIHA1LmVsbGlwc2Uobm9ybWFsaXplKHAueCksbm9ybWFsaXplKHAueSkscC5zaXplKjQpO1xuXG4gICAgLy9yYW5kb21pemUgdGhlIGxpbmUgc2hlZXRzIGFycmF5XG4gICAgdXRpbHMuc2h1ZmZsZShzaGVldHMubGluZVNoZWV0cyk7XG5cbiAgICAvL3dlIHdvcmsgd2l0aCBhIG51bWJlciBvZiBzaGVldHMgZXF1YWwgdG8gdGhlIHNpemUgb2YgdGhlIHBvaW50XG4gICAgc2hlZXRzLmxpbmVTaGVldHMuc2xpY2UoMCxwLnNpemUpLmZvckVhY2goc2hlZXQgPT4ge1xuICAgICAgLy9mb3IgZWFjaCBvZiB0aGUgc2hlZXQncyBsaW5lczpcbiAgICAgIHNoZWV0LmZvckVhY2gobCA9PiB7XG4gICAgICAgIC8vZHJhdyB0aGUgbGluZVxuICAgICAgICBwNS5saW5lKG5vcm1hbGl6ZShsWzBdLngpLG5vcm1hbGl6ZShsWzBdLnkpLG5vcm1hbGl6ZShsWzFdLngpLG5vcm1hbGl6ZShsWzFdLnkpKTtcbiAgICAgICAgLy9hbmQgZHJvcCBhIHBlcnBpbmRpY3VsYXJcbiAgICAgICAgLy8gZ2VvbS5cbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcblxuICAvLyBzaGVldHMubGluZVNoZWV0MC5mb3JFYWNoKGwgPT4gcDUubGluZShub3JtYWxpemUobFswXS54KSxub3JtYWxpemUobFswXS55KSxub3JtYWxpemUobFsxXS54KSxub3JtYWxpemUobFsxXS55KSkpO1xuICAvLyBzaGVldHMubGluZVNoZWV0MS5mb3JFYWNoKGwgPT4gcDUubGluZShub3JtYWxpemUobFswXS54KSxub3JtYWxpemUobFswXS55KSxub3JtYWxpemUobFsxXS54KSxub3JtYWxpemUobFsxXS55KSkpO1xuICAvLyBzaGVldHMubGluZVNoZWV0Mi5mb3JFYWNoKGwgPT4gcDUubGluZShub3JtYWxpemUobFswXS54KSxub3JtYWxpemUobFswXS55KSxub3JtYWxpemUobFsxXS54KSxub3JtYWxpemUobFsxXS55KSkpO1xuICAvLyBzaGVldHMubGluZVNoZWV0My5mb3JFYWNoKGwgPT4gcDUubGluZShub3JtYWxpemUobFswXS54KSxub3JtYWxpemUobFswXS55KSxub3JtYWxpemUobFsxXS54KSxub3JtYWxpemUobFsxXS55KSkpO1xuICAvLyBzaGVldHMubGluZVNoZWV0NC5mb3JFYWNoKGwgPT4gcDUubGluZShub3JtYWxpemUobFswXS54KSxub3JtYWxpemUobFswXS55KSxub3JtYWxpemUobFsxXS54KSxub3JtYWxpemUobFsxXS55KSkpO1xufVxuXG5leHBvcnRzLmdldERpbSA9IGdldERpbTtcbmV4cG9ydHMuZHJhdyA9IGRyYXc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aXMuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 2 */
/* no static exports found */
/* all exports used */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/***/ (function(module, exports) {

eval("var g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function(\"return this\")() || (1,eval)(\"this\");\r\n} catch(e) {\r\n\t// This works if the window reference is available\r\n\tif(typeof window === \"object\")\r\n\t\tg = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanM/MzY5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 3 */
/* no static exports found */
/* all exports used */
/*!*************************!*\
  !*** ./src/geometry.js ***!
  \*************************/
/***/ (function(module, exports) {

eval("let getPoint = (xval,yval,size) => ({x: xval, y: yval, size: size});\n\nlet getLine = (p1,p2) => {\n  if (p1.x === p2.x) {\n    return {slope: undefined, ymin: undefined, xmin: p1.x};\n  }\n  let slope = (p1.y - p2.y) / (p1.x - p2.x);\n  let ymin = (p1.y + p2.y - slope * (p1.x + p2.x)) / 2;\n  //all points and lines are normed to [0,100], so max and min refer to those bounds\n  return {\n    slope: slope,\n    ymin: ymin,\n    xmin: -ymin / slope,\n    ymax: (100 - ymin) / slope,\n    xmax: 100 * slope + ymin\n  };\n};\n\nlet distanceFrom = (p,l) => {\n  if (l.slope === undefined){\n    return Math.abs(p.x - l.xmin);\n  }\n  return Math.abs(p.y - l.slope * p.x - l.ymin) / Math.sqrt(Math.pow(l.slope,2) + 1);\n}\n\nexports.getPoint = getPoint;\nexports.getLine = getLine;\nexports.distanceFrom = distanceFrom;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS5qcz9jOTIwIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBnZXRQb2ludCA9ICh4dmFsLHl2YWwsc2l6ZSkgPT4gKHt4OiB4dmFsLCB5OiB5dmFsLCBzaXplOiBzaXplfSk7XG5cbmxldCBnZXRMaW5lID0gKHAxLHAyKSA9PiB7XG4gIGlmIChwMS54ID09PSBwMi54KSB7XG4gICAgcmV0dXJuIHtzbG9wZTogdW5kZWZpbmVkLCB5bWluOiB1bmRlZmluZWQsIHhtaW46IHAxLnh9O1xuICB9XG4gIGxldCBzbG9wZSA9IChwMS55IC0gcDIueSkgLyAocDEueCAtIHAyLngpO1xuICBsZXQgeW1pbiA9IChwMS55ICsgcDIueSAtIHNsb3BlICogKHAxLnggKyBwMi54KSkgLyAyO1xuICAvL2FsbCBwb2ludHMgYW5kIGxpbmVzIGFyZSBub3JtZWQgdG8gWzAsMTAwXSwgc28gbWF4IGFuZCBtaW4gcmVmZXIgdG8gdGhvc2UgYm91bmRzXG4gIHJldHVybiB7XG4gICAgc2xvcGU6IHNsb3BlLFxuICAgIHltaW46IHltaW4sXG4gICAgeG1pbjogLXltaW4gLyBzbG9wZSxcbiAgICB5bWF4OiAoMTAwIC0geW1pbikgLyBzbG9wZSxcbiAgICB4bWF4OiAxMDAgKiBzbG9wZSArIHltaW5cbiAgfTtcbn07XG5cbmxldCBkaXN0YW5jZUZyb20gPSAocCxsKSA9PiB7XG4gIGlmIChsLnNsb3BlID09PSB1bmRlZmluZWQpe1xuICAgIHJldHVybiBNYXRoLmFicyhwLnggLSBsLnhtaW4pO1xuICB9XG4gIHJldHVybiBNYXRoLmFicyhwLnkgLSBsLnNsb3BlICogcC54IC0gbC55bWluKSAvIE1hdGguc3FydChNYXRoLnBvdyhsLnNsb3BlLDIpICsgMSk7XG59XG5cbmV4cG9ydHMuZ2V0UG9pbnQgPSBnZXRQb2ludDtcbmV4cG9ydHMuZ2V0TGluZSA9IGdldExpbmU7XG5leHBvcnRzLmRpc3RhbmNlRnJvbSA9IGRpc3RhbmNlRnJvbTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2dlb21ldHJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 4 */
/* no static exports found */
/* all exports used */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

eval("const P5 = __webpack_require__(/*! p5 */ 0);\nconst vis = __webpack_require__(/*! ./vis.js */ 1);\n\nconst sketch = p5 => {\n  p5.setup = () => {\n    p5.createCanvas(vis.getDim(p5) * 2,vis.getDim(p5));\n    p5.noLoop();\n  };\n\n  p5.windowResized = () => {\n    p5.resizeCanvas(vis.getDim(p5) * 2,vis.getDim(p5));\n    vis.draw(p5);\n  }\n\n  p5.draw = () => vis.draw(p5);\n};\n\nnew P5(sketch);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz85NTUyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFA1ID0gcmVxdWlyZSgncDUnKTtcbmNvbnN0IHZpcyA9IHJlcXVpcmUoJy4vdmlzLmpzJyk7XG5cbmNvbnN0IHNrZXRjaCA9IHA1ID0+IHtcbiAgcDUuc2V0dXAgPSAoKSA9PiB7XG4gICAgcDUuY3JlYXRlQ2FudmFzKHZpcy5nZXREaW0ocDUpICogMix2aXMuZ2V0RGltKHA1KSk7XG4gICAgcDUubm9Mb29wKCk7XG4gIH07XG5cbiAgcDUud2luZG93UmVzaXplZCA9ICgpID0+IHtcbiAgICBwNS5yZXNpemVDYW52YXModmlzLmdldERpbShwNSkgKiAyLHZpcy5nZXREaW0ocDUpKTtcbiAgICB2aXMuZHJhdyhwNSk7XG4gIH1cblxuICBwNS5kcmF3ID0gKCkgPT4gdmlzLmRyYXcocDUpO1xufTtcblxubmV3IFA1KHNrZXRjaCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 5 */
/* no static exports found */
/* all exports used */
/*!***********************!*\
  !*** ./src/sheets.js ***!
  \***********************/
/***/ (function(module, exports, __webpack_require__) {

eval("const geom = __webpack_require__(/*! ./geometry.js */ 3);\n\nconst pointSheet = [\n  geom.getPoint(68.8859067754834,29.5557868214931,4),\n  geom.getPoint(84.9756257873692,76.4556060689051,4),\n  geom.getPoint(95.7769622610506,36.8187544503478,3),\n  geom.getPoint(34.1951032480692,91.0226214602618,2),\n  geom.getPoint(76.1516130799145,62.6088623541655,2),\n  geom.getPoint(17.9547570794764,19.2090704935093,2),\n  geom.getPoint(56.6385495974147,16.8127293640795,2),\n  geom.getPoint(45.1498055540341,9.73873035000274,1),\n  geom.getPoint(85.8876047543408,10.3467163279838,1),\n  geom.getPoint(58.9582078107027,32.4834310127622,1),\n  geom.getPoint(12.0967300213617,35.4138138796078,1),\n  geom.getPoint(30.848441693597,57.6655529385989,1),\n  geom.getPoint(40.7377992003067,59.8318453196034,1),\n  geom.getPoint(57.3588212740319,84.2909568932464,1),\n  geom.getPoint(86.763980938818,45.6838472914499,1)\n];\n\nconst lineSheets = [\n  [\n    [geom.getPoint(0,37.2330444106872),geom.getPoint(100.,51.5347153963006)],\n    [geom.getPoint(43.0632630410655,0),geom.getPoint(37.7500177108178,100)],\n    [geom.getPoint(66.3494462417645,0),geom.getPoint(44.277044418731,100)],\n    [geom.getPoint(100.,17.6235367706192),geom.getPoint(36.4063570028574,100)],\n    [geom.getPoint(20.6295605355751,100),geom.getPoint(0,55.7233491198284)]\n  ],[\n    [geom.getPoint(71.4335292212299,0),geom.getPoint(0,56.8762741100831)],\n    [geom.getPoint(0,29.1852416048747),geom.getPoint(45.7591041599186,100)],\n    [geom.getPoint(0,54.3246936535317),geom.getPoint(100.,86.496113264186)],\n    [geom.getPoint(0,63.5654920585139),geom.getPoint(100.,35.0030242612962)],\n    [geom.getPoint(97.8483179862107,0),geom.getPoint(65.3926241266022,100)]\n  ],[\n    [geom.getPoint(0,3.90816919022734),geom.getPoint(64.5165091560416,100)],\n    [geom.getPoint(0,39.3608468444325),geom.getPoint(27.4634111852184,0)],\n    [geom.getPoint(0,75.8676135602305),geom.getPoint(100,58.9642235026129)],\n    [geom.getPoint(62.7489335627254,0),geom.getPoint(37.8402583017134,100)],\n    [geom.getPoint(67.9196813650397,0),geom.getPoint(6.77570644104546,100)]\n  ],[\n    [geom.getPoint(27.9283267702775,0),geom.getPoint(100.,44.0041198685566)],\n    [geom.getPoint(55.2088915814246,0),geom.getPoint(93.333644010532,100)],\n    [geom.getPoint(0,31.1295306292609),geom.getPoint(30.549665633665,100)],\n    [geom.getPoint(0,68.3236058659081),geom.getPoint(100.,55.8928834175291)],\n    [geom.getPoint(0,94.4479866594732),geom.getPoint(100.,78.1328167148953)]\n  ]\n];\n\nexports.pointSheet = pointSheet;\nexports.lineSheets = lineSheets;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zaGVldHMuanM/ZjMxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZW9tID0gcmVxdWlyZSgnLi9nZW9tZXRyeS5qcycpO1xuXG5jb25zdCBwb2ludFNoZWV0ID0gW1xuICBnZW9tLmdldFBvaW50KDY4Ljg4NTkwNjc3NTQ4MzQsMjkuNTU1Nzg2ODIxNDkzMSw0KSxcbiAgZ2VvbS5nZXRQb2ludCg4NC45NzU2MjU3ODczNjkyLDc2LjQ1NTYwNjA2ODkwNTEsNCksXG4gIGdlb20uZ2V0UG9pbnQoOTUuNzc2OTYyMjYxMDUwNiwzNi44MTg3NTQ0NTAzNDc4LDMpLFxuICBnZW9tLmdldFBvaW50KDM0LjE5NTEwMzI0ODA2OTIsOTEuMDIyNjIxNDYwMjYxOCwyKSxcbiAgZ2VvbS5nZXRQb2ludCg3Ni4xNTE2MTMwNzk5MTQ1LDYyLjYwODg2MjM1NDE2NTUsMiksXG4gIGdlb20uZ2V0UG9pbnQoMTcuOTU0NzU3MDc5NDc2NCwxOS4yMDkwNzA0OTM1MDkzLDIpLFxuICBnZW9tLmdldFBvaW50KDU2LjYzODU0OTU5NzQxNDcsMTYuODEyNzI5MzY0MDc5NSwyKSxcbiAgZ2VvbS5nZXRQb2ludCg0NS4xNDk4MDU1NTQwMzQxLDkuNzM4NzMwMzUwMDAyNzQsMSksXG4gIGdlb20uZ2V0UG9pbnQoODUuODg3NjA0NzU0MzQwOCwxMC4zNDY3MTYzMjc5ODM4LDEpLFxuICBnZW9tLmdldFBvaW50KDU4Ljk1ODIwNzgxMDcwMjcsMzIuNDgzNDMxMDEyNzYyMiwxKSxcbiAgZ2VvbS5nZXRQb2ludCgxMi4wOTY3MzAwMjEzNjE3LDM1LjQxMzgxMzg3OTYwNzgsMSksXG4gIGdlb20uZ2V0UG9pbnQoMzAuODQ4NDQxNjkzNTk3LDU3LjY2NTU1MjkzODU5ODksMSksXG4gIGdlb20uZ2V0UG9pbnQoNDAuNzM3Nzk5MjAwMzA2Nyw1OS44MzE4NDUzMTk2MDM0LDEpLFxuICBnZW9tLmdldFBvaW50KDU3LjM1ODgyMTI3NDAzMTksODQuMjkwOTU2ODkzMjQ2NCwxKSxcbiAgZ2VvbS5nZXRQb2ludCg4Ni43NjM5ODA5Mzg4MTgsNDUuNjgzODQ3MjkxNDQ5OSwxKVxuXTtcblxuY29uc3QgbGluZVNoZWV0cyA9IFtcbiAgW1xuICAgIFtnZW9tLmdldFBvaW50KDAsMzcuMjMzMDQ0NDEwNjg3MiksZ2VvbS5nZXRQb2ludCgxMDAuLDUxLjUzNDcxNTM5NjMwMDYpXSxcbiAgICBbZ2VvbS5nZXRQb2ludCg0My4wNjMyNjMwNDEwNjU1LDApLGdlb20uZ2V0UG9pbnQoMzcuNzUwMDE3NzEwODE3OCwxMDApXSxcbiAgICBbZ2VvbS5nZXRQb2ludCg2Ni4zNDk0NDYyNDE3NjQ1LDApLGdlb20uZ2V0UG9pbnQoNDQuMjc3MDQ0NDE4NzMxLDEwMCldLFxuICAgIFtnZW9tLmdldFBvaW50KDEwMC4sMTcuNjIzNTM2NzcwNjE5MiksZ2VvbS5nZXRQb2ludCgzNi40MDYzNTcwMDI4NTc0LDEwMCldLFxuICAgIFtnZW9tLmdldFBvaW50KDIwLjYyOTU2MDUzNTU3NTEsMTAwKSxnZW9tLmdldFBvaW50KDAsNTUuNzIzMzQ5MTE5ODI4NCldXG4gIF0sW1xuICAgIFtnZW9tLmdldFBvaW50KDcxLjQzMzUyOTIyMTIyOTksMCksZ2VvbS5nZXRQb2ludCgwLDU2Ljg3NjI3NDExMDA4MzEpXSxcbiAgICBbZ2VvbS5nZXRQb2ludCgwLDI5LjE4NTI0MTYwNDg3NDcpLGdlb20uZ2V0UG9pbnQoNDUuNzU5MTA0MTU5OTE4NiwxMDApXSxcbiAgICBbZ2VvbS5nZXRQb2ludCgwLDU0LjMyNDY5MzY1MzUzMTcpLGdlb20uZ2V0UG9pbnQoMTAwLiw4Ni40OTYxMTMyNjQxODYpXSxcbiAgICBbZ2VvbS5nZXRQb2ludCgwLDYzLjU2NTQ5MjA1ODUxMzkpLGdlb20uZ2V0UG9pbnQoMTAwLiwzNS4wMDMwMjQyNjEyOTYyKV0sXG4gICAgW2dlb20uZ2V0UG9pbnQoOTcuODQ4MzE3OTg2MjEwNywwKSxnZW9tLmdldFBvaW50KDY1LjM5MjYyNDEyNjYwMjIsMTAwKV1cbiAgXSxbXG4gICAgW2dlb20uZ2V0UG9pbnQoMCwzLjkwODE2OTE5MDIyNzM0KSxnZW9tLmdldFBvaW50KDY0LjUxNjUwOTE1NjA0MTYsMTAwKV0sXG4gICAgW2dlb20uZ2V0UG9pbnQoMCwzOS4zNjA4NDY4NDQ0MzI1KSxnZW9tLmdldFBvaW50KDI3LjQ2MzQxMTE4NTIxODQsMCldLFxuICAgIFtnZW9tLmdldFBvaW50KDAsNzUuODY3NjEzNTYwMjMwNSksZ2VvbS5nZXRQb2ludCgxMDAsNTguOTY0MjIzNTAyNjEyOSldLFxuICAgIFtnZW9tLmdldFBvaW50KDYyLjc0ODkzMzU2MjcyNTQsMCksZ2VvbS5nZXRQb2ludCgzNy44NDAyNTgzMDE3MTM0LDEwMCldLFxuICAgIFtnZW9tLmdldFBvaW50KDY3LjkxOTY4MTM2NTAzOTcsMCksZ2VvbS5nZXRQb2ludCg2Ljc3NTcwNjQ0MTA0NTQ2LDEwMCldXG4gIF0sW1xuICAgIFtnZW9tLmdldFBvaW50KDI3LjkyODMyNjc3MDI3NzUsMCksZ2VvbS5nZXRQb2ludCgxMDAuLDQ0LjAwNDExOTg2ODU1NjYpXSxcbiAgICBbZ2VvbS5nZXRQb2ludCg1NS4yMDg4OTE1ODE0MjQ2LDApLGdlb20uZ2V0UG9pbnQoOTMuMzMzNjQ0MDEwNTMyLDEwMCldLFxuICAgIFtnZW9tLmdldFBvaW50KDAsMzEuMTI5NTMwNjI5MjYwOSksZ2VvbS5nZXRQb2ludCgzMC41NDk2NjU2MzM2NjUsMTAwKV0sXG4gICAgW2dlb20uZ2V0UG9pbnQoMCw2OC4zMjM2MDU4NjU5MDgxKSxnZW9tLmdldFBvaW50KDEwMC4sNTUuODkyODgzNDE3NTI5MSldLFxuICAgIFtnZW9tLmdldFBvaW50KDAsOTQuNDQ3OTg2NjU5NDczMiksZ2VvbS5nZXRQb2ludCgxMDAuLDc4LjEzMjgxNjcxNDg5NTMpXVxuICBdXG5dO1xuXG5leHBvcnRzLnBvaW50U2hlZXQgPSBwb2ludFNoZWV0O1xuZXhwb3J0cy5saW5lU2hlZXRzID0gbGluZVNoZWV0cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NoZWV0cy5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 6 */
/* no static exports found */
/* all exports used */
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ (function(module, exports) {

eval("// https://stackoverflow.com/a/2450976/1712343\nexports.shuffle = array => {\n  var currentIndex = array.length, temporaryValue, randomIndex;\n\n  // While there remain elements to shuffle...\n  while (0 !== currentIndex) {\n\n    // Pick a remaining element...\n    randomIndex = Math.floor(Math.random() * currentIndex);\n    currentIndex -= 1;\n\n    // And swap it with the current element.\n    temporaryValue = array[currentIndex];\n    array[currentIndex] = array[randomIndex];\n    array[randomIndex] = temporaryValue;\n  }\n\n  return array;\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy91dGlscy5qcz8yZmY4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNDUwOTc2LzE3MTIzNDNcbmV4cG9ydHMuc2h1ZmZsZSA9IGFycmF5ID0+IHtcbiAgdmFyIGN1cnJlbnRJbmRleCA9IGFycmF5Lmxlbmd0aCwgdGVtcG9yYXJ5VmFsdWUsIHJhbmRvbUluZGV4O1xuXG4gIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxlLi4uXG4gIHdoaWxlICgwICE9PSBjdXJyZW50SW5kZXgpIHtcblxuICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudC4uLlxuICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudEluZGV4KTtcbiAgICBjdXJyZW50SW5kZXggLT0gMTtcblxuICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAgICB0ZW1wb3JhcnlWYWx1ZSA9IGFycmF5W2N1cnJlbnRJbmRleF07XG4gICAgYXJyYXlbY3VycmVudEluZGV4XSA9IGFycmF5W3JhbmRvbUluZGV4XTtcbiAgICBhcnJheVtyYW5kb21JbmRleF0gPSB0ZW1wb3JhcnlWYWx1ZTtcbiAgfVxuXG4gIHJldHVybiBhcnJheTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3V0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);