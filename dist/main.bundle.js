/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/api.js":
/*!***********************!*\
  !*** ./src/js/api.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addPost: () => (/* binding */ addPost),\n/* harmony export */   getPostComments: () => (/* binding */ getPostComments),\n/* harmony export */   getPosts: () => (/* binding */ getPosts)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/js/config.js\");\n\nasync function getPosts() {\n  const response = await fetch(`${_config_js__WEBPACK_IMPORTED_MODULE_0__.API_URL}?_limit=10`);\n  if (response.status !== 200) {\n    throw new Error(\"something wrong\");\n  }\n  return await response.json();\n}\nasync function addPost(title, content) {\n  const response = await fetch(_config_js__WEBPACK_IMPORTED_MODULE_0__.API_URL, {\n    method: \"POST\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify({\n      title,\n      body: content,\n      userId: 1\n    })\n  });\n  if (response.status !== 201) {\n    throw new Error(\"something wrong\");\n  }\n  return await response.json();\n}\nasync function getPostComments(postId) {\n  const response = await fetch(`${_config_js__WEBPACK_IMPORTED_MODULE_0__.API_URL}/${postId}/comments?_limit=2`);\n  if (response.status !== 200) {\n    throw new Error(\"something wrong\");\n  }\n  return await response.json();\n}\n\n//# sourceURL=webpack://frontendpro/./src/js/api.js?");

/***/ }),

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   API_URL: () => (/* binding */ API_URL)\n/* harmony export */ });\nconst API_URL = \"https://jsonplaceholder.typicode.com/posts\";\n\n//# sourceURL=webpack://frontendpro/./src/js/config.js?");

/***/ }),

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCommentElement: () => (/* binding */ createCommentElement),\n/* harmony export */   createPostElement: () => (/* binding */ createPostElement)\n/* harmony export */ });\nfunction createPostElement(post) {\n  const postElement = document.createElement(\"div\");\n  postElement.classList.add(\"post\");\n  postElement.dataset.id = post.id;\n  postElement.innerHTML = `\n        <p class=\"post__title\">${post.title}</p>\n        <p class=\"post__excerpt\">${post.body}</p>   \n        <div class=\"comments-block\">\n            <button class=\"show-comment-btn\">Show Comments</button>\n            <div class=\"comments\"></div>\n        </div>\n    `;\n  return postElement;\n}\nfunction createCommentElement(comment) {\n  const commentElement = document.createElement(\"div\");\n  commentElement.classList.add(\"comment\");\n  commentElement.innerHTML = `\n        <p class=\"comment__author\">${comment.name}</p>\n        <p class=\"comment__email\">${comment.email}</p>\n        <p class=\"comment__body\">${comment.body}</p>\n    `;\n  return commentElement;\n}\n\n//# sourceURL=webpack://frontendpro/./src/js/ui.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/api.js */ \"./src/js/api.js\");\n/* harmony import */ var _js_ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/ui.js */ \"./src/js/ui.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n\n\n\nconst postsSection = document.querySelector(\".posts-section\");\nconst newPostsForm = document.querySelector(\"#add-post-form\");\nconst newPostMessage = document.querySelector(\".form-message\");\nconst newPostTitleInput = document.getElementById(\"post-title\");\nconst newPostContentInput = document.getElementById(\"post-content\");\nasync function init() {\n  try {\n    postsSection.innerHTML = \"Loading...\";\n    const postsData = await (0,_js_api_js__WEBPACK_IMPORTED_MODULE_0__.getPosts)();\n    postsSection.innerHTML = \"\";\n    postsData.forEach(post => {\n      postsSection.appendChild((0,_js_ui_js__WEBPACK_IMPORTED_MODULE_1__.createPostElement)(post));\n    });\n  } catch (error) {\n    postsSection.innerHTML = `<p class=\"weather-widget__error\">${error.message}</p>`;\n    console.log(\"getPosts error:\", error);\n  }\n}\nnewPostsForm.addEventListener(\"submit\", async e => {\n  e.preventDefault();\n  const title = newPostTitleInput.value.trim();\n  const content = newPostContentInput.value.trim();\n  newPostMessage.textContent = \"\";\n  if (title && content) {\n    try {\n      document.querySelector(\".add-post-btn\").disabled = true;\n      const newPost = await (0,_js_api_js__WEBPACK_IMPORTED_MODULE_0__.addPost)(title, content);\n      postsSection.appendChild((0,_js_ui_js__WEBPACK_IMPORTED_MODULE_1__.createPostElement)(newPost));\n      newPostMessage.textContent = \"Post added successfully\";\n      newPostTitleInput.value = \"\";\n      newPostContentInput.value = \"\";\n    } catch (error) {\n      newPostMessage.textContent = \"Failed to add post\";\n      console.log(\"addPost error:\", error);\n    }\n    document.querySelector(\".add-post-btn\").disabled = false;\n  }\n});\npostsSection.addEventListener(\"click\", async e => {\n  if (e.target.classList.contains(\"show-comment-btn\")) {\n    try {\n      const postId = e.target.closest(\".post\").dataset.id;\n      e.target.disabled = true;\n      e.target.textContent = \"Loading...\";\n      const comments = await (0,_js_api_js__WEBPACK_IMPORTED_MODULE_0__.getPostComments)(postId);\n      const commentsBlock = e.target.closest(\".post\").querySelector(\".comments\");\n      commentsBlock.innerHTML = \"\";\n      if (comments.length > 0) {\n        comments.forEach(comment => {\n          commentsBlock.appendChild((0,_js_ui_js__WEBPACK_IMPORTED_MODULE_1__.createCommentElement)(comment));\n        });\n      } else {\n        commentsBlock.innerHTML = `<p>No comments</p>`;\n      }\n    } catch (error) {\n      console.log(\"getPostComments error:\", error);\n    }\n    e.target.disabled = false;\n    e.target.textContent = \"Show Comments\";\n  }\n});\ninit();\n\n//# sourceURL=webpack://frontendpro/./src/main.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://frontendpro/./src/styles/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;