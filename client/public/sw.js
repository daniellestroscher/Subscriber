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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./sw.js":
/*!***************!*\
  !*** ./sw.js ***!
  \***************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-disable no-restricted-globals */\n/* eslint-disable no-undef */\nimportScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');\nimportScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');\nconst firebaseConfig = {\n  apiKey: \"AIzaSyCWWKaWNg1q-_HaQd3ZaHyxPDpRH_akcYA\",\n  authDomain: \"subscriber-app-ab338.firebaseapp.com\",\n  projectId: \"subscriber-app-ab338\",\n  storageBucket: \"subscriber-app-ab338.appspot.com\",\n  messagingSenderId: \"862503920375\",\n  appId: \"1:862503920375:web:0ef032ec3dba81226fe9f2\",\n  measurementId: \"G-1FL1P7WRKW\"\n};\nfirebase.initializeApp(firebaseConfig);\nconst messaging = firebase.messaging();\n// handles notifications that reach the app when its not in the foreground\n// In this file because it does not have access to the WINDOW OBJECT\nmessaging.onBackgroundMessage(function (payload) {\n  console.log('[firebase-messaging-sw.js] Received background message ', payload);\n  // Customize notification here\n  const notificationTitle = 'Background Message Title';\n  const notificationOptions = {\n    body: payload.data.body,\n    icon: '../icon1058x1058.png'\n  };\n  self.registration.showNotification(notificationTitle, notificationOptions);\n});\n\n// self.addEventListener('notificationclick', event => {\n//   console.log(event)\n//   return event;\n// });\n\n//TRYING TO GET SCHEDULED PUSH TO WORK//\n// self.addEventListener('push', (event) => {\n//   const payload = event.data?.text() ?? 'no payload';\n//   const notificationTitle = payload.title;\n//   const notificationOptions = {\n//     body: payload.body,\n//     icon: '../icon1058x1058.png',\n//   };\n//   console.log('got message from listener in SW!!!', payload);\n//   event.waitUntil(self.registration.showNotification(notificationTitle, notificationOptions));\n// });\n\n//# sourceURL=webpack:///./sw.js?");

/***/ }),

/***/ 0:
/*!*********************!*\
  !*** multi ./sw.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./sw.js */\"./sw.js\");\n\n\n//# sourceURL=webpack:///multi_./sw.js?");

/***/ })

/******/ });