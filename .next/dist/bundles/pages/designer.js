module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ ({

/***/ "./components/BookAppointment.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_booking_sass__ = __webpack_require__("./static/booking.sass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_booking_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_booking_sass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Button__ = __webpack_require__("./components/Button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Overlay__ = __webpack_require__("./components/Overlay.js");
var _jsxFileName = "/Users/michaelgriffin/Documents/Clients/Amorae Bridal/02_Projects/Website redesign 2018/03_Development/Amorae/components/BookAppointment.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var BookAppointment =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BookAppointment, _React$Component);

  function BookAppointment(props) {
    var _this;

    _classCallCheck(this, BookAppointment);

    _this = _possibleConstructorReturn(this, (BookAppointment.__proto__ || Object.getPrototypeOf(BookAppointment)).call(this, props));
    _this.state = {
      name: "",
      number: "",
      email: "",
      wedding: "",
      message: ""
    };
    return _this;
  }

  _createClass(BookAppointment, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "booking-card ".concat(this.props.active ? 'is-open' : 'null'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "text-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, "Book an Appointment"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, "Book your appointment using the contact form below or call us on ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "tel: +441277366436",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, "+44 1277 366 436"), ".")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        placeholder: "Your Name",
        value: this.state.name,
        onChange: function onChange(e) {
          return _this2.setState({
            name: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        placeholder: "Your Contact Number",
        value: this.state.number,
        onChange: function onChange(e) {
          return _this2.setState({
            number: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        placeholder: "Your Email",
        value: this.state.email,
        type: "email",
        onChange: function onChange(e) {
          return _this2.setState({
            email: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        placeholder: "Your Wedding Date",
        value: this.state.wedding //type="Date"
        ,
        onChange: function onChange(e) {
          return _this2.setState({
            wedding: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("textarea", {
        placeholder: "Message / Comments",
        value: this.state.message,
        onChange: function onChange(e) {
          return _this2.setState({
            message: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-controls",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Button__["a" /* default */], {
        btnClass: "secondary no-icon",
        btnText: "Cancel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Button__["a" /* default */], {
        btnClass: "primary no-icon",
        btnText: "Send",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }))));
    }
  }]);

  return BookAppointment;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (BookAppointment);

/***/ }),

/***/ "./components/Button.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_button_sass__ = __webpack_require__("./static/button.sass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_button_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_button_sass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "/Users/michaelgriffin/Documents/Clients/Amorae Bridal/02_Projects/Website redesign 2018/03_Development/Amorae/components/Button.js";




var Button = function Button(_ref) {
  var btnText = _ref.btnText,
      btnClass = _ref.btnClass,
      btnIcon = _ref.btnIcon,
      link = _ref.link;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    className: btnClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, btnText, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "".concat(btnIcon, " btn-icon"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "./components/DressCard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_dress_card_sass__ = __webpack_require__("./static/dress-card.sass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_dress_card_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_dress_card_sass__);
var _jsxFileName = "/Users/michaelgriffin/Documents/Clients/Amorae Bridal/02_Projects/Website redesign 2018/03_Development/Amorae/components/DressCard.js";




var DressCard = function DressCard(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-3868072199" + " " + "dress-card"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: props.bg,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-3868072199"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-3868072199" + " " + "dress-cover"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-3868072199" + " " + "dress-info"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-3868072199"
  }, props.name)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3868072199",
    css: ".dress-card.jsx-3868072199{background:url('".concat('test', "');background-position:top center;background-size:cover;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRHJlc3NDYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdnQixBQUc0RCwrQ0FDaEIsK0JBQ1Qsc0JBQzFCIiwiZmlsZSI6ImNvbXBvbmVudHMvRHJlc3NDYXJkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9taWNoYWVsZ3JpZmZpbi9Eb2N1bWVudHMvQ2xpZW50cy9BbW9yYWUgQnJpZGFsLzAyX1Byb2plY3RzL1dlYnNpdGUgcmVkZXNpZ24gMjAxOC8wM19EZXZlbG9wbWVudC9BbW9yYWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdGF0aWMvZHJlc3MtY2FyZC5zYXNzXCI7XG5cbmNvbnN0IERyZXNzQ2FyZCA9IChwcm9wcykgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJlc3MtY2FyZFwiPlxuICAgICAgICBcbiAgICAgICAgPGltZyBzcmM9e3Byb3BzLmJnfSAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkcmVzcy1jb3ZlclwiID48L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJlc3MtaW5mb1wiPlxuICAgICAgICAgICAgPGgyPntwcm9wcy5uYW1lfTwvaDI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZHJlc3MtY2FyZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJyR7J3Rlc3QnfScpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxuICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBEcmVzc0NhcmQ7Il19 */\n/*@ sourceURL=components/DressCard.js */")
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (DressCard);

/***/ }),

/***/ "./components/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/michaelgriffin/Documents/Clients/Amorae Bridal/02_Projects/Website redesign 2018/03_Development/Amorae/components/Footer.js";


var Footer = function Footer() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("footer", {
    className: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Navigation__ = __webpack_require__("./components/Navigation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_BookAppointment__ = __webpack_require__("./components/BookAppointment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Footer__ = __webpack_require__("./components/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_style_sass__ = __webpack_require__("./static/style.sass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_style_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__static_style_sass__);
var _jsxFileName = "/Users/michaelgriffin/Documents/Clients/Amorae Bridal/02_Projects/Website redesign 2018/03_Development/Amorae/components/Layout.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Layout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_BookAppointment__["a" /* default */], {
        active: this.props.appointment,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "nav-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, "Amorae")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Navigation__["a" /* default */], {
        theme: this.props.theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), this.props.children, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }));
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/Navigation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_data_data_navigation__ = __webpack_require__("./static/data/data-navigation.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_data_data_navigation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_data_data_navigation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Overlay__ = __webpack_require__("./components/Overlay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_BookAppointment__ = __webpack_require__("./components/BookAppointment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_navigation_sass__ = __webpack_require__("./static/navigation.sass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_navigation_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__static_navigation_sass__);
var _jsxFileName = "/Users/michaelgriffin/Documents/Clients/Amorae Bridal/02_Projects/Website redesign 2018/03_Development/Amorae/components/Navigation.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var Navigation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation() {
    var _this;

    _classCallCheck(this, Navigation);

    _this = _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call(this));
    Object.defineProperty(_assertThisInitialized(_this), "sale", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(id) {
        var saleDresses = [];

        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_2__static_data_data_navigation___default.a[id].dresses.length; i++) {
          saleDresses.push(__WEBPACK_IMPORTED_MODULE_2__static_data_data_navigation___default.a[id].dresses[i].sale);
        }

        var saleFiltered = saleDresses.filter(function (dress) {
          return dress == true;
        });
        return saleFiltered.length;
      }
    });
    _this.state = {
      active: false,
      overlay: false,
      navDropdown: false,
      appointment: false
    };
    return _this;
  }

  _createClass(Navigation, [{
    key: "closeNav",
    value: function closeNav() {
      this.setState({
        active: !this.state.active,
        overlay: !this.state.overlay
      });
    }
  }, {
    key: "closeOverlay",
    value: function closeOverlay() {
      this.setState({
        overlay: false,
        active: false,
        appointment: false
      });
    }
  }, {
    key: "handleDropdown",
    value: function handleDropdown() {
      this.setState({
        navDropdown: !this.state.navDropdown
      });
    }
  }, {
    key: "closeAppointment",
    value: function closeAppointment() {
      this.setState({
        overlay: !this.state.overlay,
        appointment: !this.state.appointment
      });
    }
  }, {
    key: "openAppointment",
    value: function openAppointment() {
      this.setState({
        active: !this.state.active,
        appointment: !this.state.appointment
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (typeof window !== 'undefined') {
        this.state.active == true ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "scroll";
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_BookAppointment__["a" /* default */], {
        active: this.state.appointment,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Overlay__["a" /* default */], {
        coverNav: this.state.appointment,
        overlay: this.state.overlay,
        onClick: function onClick() {
          return _this2.closeOverlay();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        onClick: function onClick() {
          return _this2.closeNav();
        },
        className: "hamburger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "".concat(this.props.theme, " ").concat(this.state.active ? 'is-open' : 'null', " top"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "".concat(this.props.theme, " ").concat(this.state.active ? 'is-open' : 'null', " middle"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "".concat(this.props.theme, " ").concat(this.state.active ? 'is-open' : 'null', " bottom"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "".concat(this.state.active ? 'is-open' : 'null', " nav-panel"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "homepage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, "Home"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        onClick: function onClick() {
          return _this2.handleDropdown();
        },
        className: "".concat(this.state.navDropdown ? 'is-open' : 'null', " dropdown"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, "Our Designers"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: this.state.navDropdown ? 'is-open' : 'null',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, __WEBPACK_IMPORTED_MODULE_2__static_data_data_navigation___default.a.map(function (d, id) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
          key: id,
          href: d.link,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        }, d.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          className: "subtext",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        }, "\n                                ".concat(d.dresses.length === 1 ? d.dresses.length + ' Dress' : d.dresses.length + ' Dresses', " | \n                                ").concat(_this2.sale(id) === 1 ? _this2.sale(id) + ' Sale Dress' : _this2.sale(id) + ' Sale Dresses'))));
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, "Sample Sale")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        onClick: function onClick() {
          return _this2.openAppointment();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, "Book an Appointment")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, "Contact us"))))));
    }
  }]);

  return Navigation;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Navigation);

/***/ }),

/***/ "./components/Overlay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_overlay_sass__ = __webpack_require__("./static/overlay.sass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_overlay_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_overlay_sass__);
var _jsxFileName = "/Users/michaelgriffin/Documents/Clients/Amorae Bridal/02_Projects/Website redesign 2018/03_Development/Amorae/components/Overlay.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Overlay =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Overlay, _React$Component);

  function Overlay() {
    _classCallCheck(this, Overlay);

    return _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).apply(this, arguments));
  }

  _createClass(Overlay, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        onClick: this.props.onClick,
        className: "overlay ".concat(this.props.coverNav ? 'cover-nav' : 'null', " ").concat(this.props.overlay ? 'is-open' : 'null'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      });
    }
  }]);

  return Overlay;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Overlay);

/***/ }),

/***/ "./pages/designer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_data_data_navigation__ = __webpack_require__("./static/data/data-navigation.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_data_data_navigation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_data_data_navigation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_DressCard__ = __webpack_require__("./components/DressCard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Layout__ = __webpack_require__("./components/Layout.js");
var _jsxFileName = "/Users/michaelgriffin/Documents/Clients/Amorae Bridal/02_Projects/Website redesign 2018/03_Development/Amorae/pages/designer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var d = {};

var Content = function Content(props) {
  return __WEBPACK_IMPORTED_MODULE_1__static_data_data_navigation___default.a.map(function (designer) {
    if (designer.title === props.url.query.designer) {
      d = designer;
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    className: "tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, d.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, d.blurb), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "dresses-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, d.dresses.map(function (d, id) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_DressCard__["a" /* default */], {
      key: id,
      bg: d.images[0].path,
      name: d.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }));
  }))));
};

var Designer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Designer, _React$Component);

  function Designer() {
    _classCallCheck(this, Designer);

    return _possibleConstructorReturn(this, (Designer.__proto__ || Object.getPrototypeOf(Designer)).apply(this, arguments));
  }

  _createClass(Designer, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Layout__["a" /* default */], {
        theme: "dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "main-body page-vs-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Content, {
        url: this.props.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      })));
    }
  }]);

  return Designer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Designer);

/***/ }),

/***/ "./static/booking.sass":
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/button.sass":
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/data/data-navigation.json":
/***/ (function(module, exports) {

module.exports = [{"title":"Ronald Joyce","blurb":"Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas faucibus mollis interdum. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor.","bg":"./static/images/hero.jpg","dresses":[{"name":"Ada","sale":true,"images":[{"path":"./static/images/RonaldJoyce/Ada_a.jpg","cover":false},{"path":"./static/images/RonaldJoyce/Ada_b.jpg","cover":true},{"path":"./static/images/RonaldJoyce/Ada_c.jpg","cover":false}]},{"name":"Adele","sale":true,"images":[{"path":"./static/images/RonaldJoyce/Adele_a.jpg","cover":true},{"path":"./static/images/RonaldJoyce/Adele_b.jpg","cover":false},{"path":"./static/images/RonaldJoyce/Adele_c.jpg","cover":false}]},{"name":"Ainsley","sale":false,"images":[{"path":"./static/images/RonaldJoyce/Ainsley_a.jpg","cover":true},{"path":"./static/images/RonaldJoyce/Ainsley_b.jpg","cover":false},{"path":"./static/images/RonaldJoyce/Ainsley_c.jpg","cover":false}]},{"name":"Alicia","sale":false,"images":[{"path":"./static/images/RonaldJoyce/Alicia_a.jpg","cover":true},{"path":"./static/images/RonaldJoyce/Alicia_b.jpg","cover":false},{"path":"./static/images/RonaldJoyce/Alicia_c.jpg","cover":false}]},{"name":"Alison","sale":false,"images":[{"path":"./static/images/RonaldJoyce/Alison_a.jpg","cover":true},{"path":"./static/images/RonaldJoyce/Alison_b.jpg","cover":false},{"path":"./static/images/RonaldJoyce/Alison_c.jpg","cover":false}]},{"name":"Alix","sale":false,"images":[{"path":"./static/images/RonaldJoyce/Alix_a.jpg","cover":true},{"path":"./static/images/RonaldJoyce/Alix_b.jpg","cover":false},{"path":"./static/images/RonaldJoyce/Alix_c.jpg","cover":false}]}]}]

/***/ }),

/***/ "./static/dress-card.sass":
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/navigation.sass":
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/overlay.sass":
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/style.sass":
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/designer.js");


/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=designer.js.map