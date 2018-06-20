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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
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

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
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
        onClick: this.props.CancelClick,
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
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "link-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, "View our opening hours"))))));
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
      onClick = _ref.onClick;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    onClick: onClick,
    className: btnClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, btnText, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "".concat(btnIcon, " btn-icon"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }));
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_SaleBadge__ = __webpack_require__("./components/SaleBadge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_dress_card_sass__ = __webpack_require__("./static/dress-card.sass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_dress_card_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__static_dress_card_sass__);
var _jsxFileName = "/Users/michaelgriffin/Documents/Clients/Amorae Bridal/02_Projects/Website redesign 2018/03_Development/Amorae/components/DressCard.js";





var DressCard = function DressCard(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "dress-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_SaleBadge__["a" /* default */], {
    onSale: props.onSale,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    onClick: props.onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-1982039606" + " " + "dress-card"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: props.bg,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-1982039606"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-1982039606" + " " + "dress-overlay"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: "jsx-1982039606" + " " + "dress-info"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: "jsx-1982039606"
  }, props.name), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    className: "jsx-1982039606" + " " + "subtext sale-info ".concat(props.onSale ? 'is-showing' : 'null')
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    className: "jsx-1982039606"
  }, props.size, ", ", props.price, " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    className: "jsx-1982039606"
  }, props.salePrice)))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1982039606",
    css: ".dress-card.jsx-1982039606{background:url('".concat('test', "');background-position:top center;background-size:cover;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRHJlc3NDYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Cb0IsQUFHZ0UsK0NBQ2hCLCtCQUNULHNCQUMxQiIsImZpbGUiOiJjb21wb25lbnRzL0RyZXNzQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWljaGFlbGdyaWZmaW4vRG9jdW1lbnRzL0NsaWVudHMvQW1vcmFlIEJyaWRhbC8wMl9Qcm9qZWN0cy9XZWJzaXRlIHJlZGVzaWduIDIwMTgvMDNfRGV2ZWxvcG1lbnQvQW1vcmFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNhbGVCYWRnZSBmcm9tICcuLi9jb21wb25lbnRzL1NhbGVCYWRnZSc7XG5pbXBvcnQgXCIuLi9zdGF0aWMvZHJlc3MtY2FyZC5zYXNzXCI7XG5cbmNvbnN0IERyZXNzQ2FyZCA9IChwcm9wcykgPT4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcmVzcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxTYWxlQmFkZ2Ugb25TYWxlPXtwcm9wcy5vblNhbGV9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyZXNzLWNhcmRcIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5iZ30gLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRyZXNzLW92ZXJsYXlcIj48L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyZXNzLWluZm9cIj5cbiAgICAgICAgICAgICAgICA8aDI+e3Byb3BzLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyhgc3VidGV4dCBzYWxlLWluZm8gJHtwcm9wcy5vblNhbGUgPyAnaXMtc2hvd2luZycgOiAnbnVsbCd9YCl9PlxuICAgICAgICAgICAgICAgICAgICB7LyogQ29sb3VyOiB7cHJvcHMuY29sb3VyfSAqL31cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Byb3BzLnNpemV9LCB7cHJvcHMucHJpY2V9IDxzdHJvbmc+e3Byb3BzLnNhbGVQcmljZX08L3N0cm9uZz48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmRyZXNzLWNhcmQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnJHsndGVzdCd9Jyk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbilcblxuZXhwb3J0IGRlZmF1bHQgRHJlc3NDYXJkOyJdfQ== */\n/*@ sourceURL=components/DressCard.js */")
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (DressCard);

/***/ }),

/***/ "./components/DressCounter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_data_data_navigation__ = __webpack_require__("./static/data/data-navigation.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_data_data_navigation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_data_data_navigation__);
var _jsxFileName = "/Users/michaelgriffin/Documents/Clients/Amorae Bridal/02_Projects/Website redesign 2018/03_Development/Amorae/components/DressCounter.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var DressCounter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DressCounter, _React$Component);

  function DressCounter() {
    var _this;

    _classCallCheck(this, DressCounter);

    _this = _possibleConstructorReturn(this, (DressCounter.__proto__ || Object.getPrototypeOf(DressCounter)).call(this));
    Object.defineProperty(_assertThisInitialized(_this), "sale", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(id) {
        var saleDresses = [];

        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_1__static_data_data_navigation___default.a[id].dresses.length; i++) {
          saleDresses.push(__WEBPACK_IMPORTED_MODULE_1__static_data_data_navigation___default.a[id].dresses[i].sale);
        }

        var saleFiltered = saleDresses.filter(function (dress) {
          return dress == true;
        });

        _this.setState({
          saleDresses: saleFiltered.length
        });
      }
    });
    _this.state = {
      dresses: 0,
      saleDresses: 0,
      text: 'Dresses',
      saleText: 'Sale Dresses'
    };
    return _this;
  }

  _createClass(DressCounter, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      var dressCount = __WEBPACK_IMPORTED_MODULE_1__static_data_data_navigation___default.a[this.props.id].dresses.length;
      dressCount == 1 ? this.setState({
        text: 'dress'
      }) : this.setState({
        text: 'dresses'
      });
      this.setState({
        dresses: dressCount
      }); // console.log(() => this.sale(2));

      (function () {
        return _this2.sale(_this2.props.id) == 1 ? _this2.setState({
          saleText: 'Sale Dress'
        }) : _this2.setState({
          text: 'Sale Dresses'
        });
      });

      return this.sale(this.props.id);
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "sub-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, this.state.dresses, " ", this.state.text, " | ", this.state.saleDresses, " ", this.state.saleText);
    }
  }]);

  return DressCounter;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (DressCounter);

/***/ }),

/***/ "./components/DropdownButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_dropdown_button_sass__ = __webpack_require__("./static/dropdown-button.sass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_dropdown_button_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_dropdown_button_sass__);
var _jsxFileName = "/Users/michaelgriffin/Documents/Clients/Amorae Bridal/02_Projects/Website redesign 2018/03_Development/Amorae/components/DropdownButton.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var DropdownButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropdownButton, _React$Component);

  function DropdownButton() {
    var _this;

    _classCallCheck(this, DropdownButton);

    _this = _possibleConstructorReturn(this, (DropdownButton.__proto__ || Object.getPrototypeOf(DropdownButton)).call(this));
    _this.state = {
      showing: false
    };
    return _this;
  }

  _createClass(DropdownButton, [{
    key: "handleClick",
    value: function handleClick() {
      this.setState({
        showing: !this.state.showing
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: this.props.btnClass,
        onClick: function onClick() {
          return _this2.handleClick();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, this.props.btnText, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "".concat(this.props.btnIcon, " btn-icon"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "".concat(this.state.showing ? 'is-showing' : 'null', " sort-dropdown"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        onClick: this.props.sizeClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, "sort by size"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        onClick: this.props.priceClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, "sort by price"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        onClick: this.props.nameClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, "sort by name")));
    }
  }]);

  return DropdownButton;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (DropdownButton);

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
        CancelClick: this.props.CancelClick,
        active: this.props.appointment,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "".concat(this.props.theme, " nav-container"),
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
      }, "Amorae"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Navigation__["a" /* default */], {
        theme: this.props.theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      })), this.props.children, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_DressCounter__ = __webpack_require__("./components/DressCounter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_navigation_sass__ = __webpack_require__("./static/navigation.sass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_navigation_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__static_navigation_sass__);
var _jsxFileName = "/Users/michaelgriffin/Documents/Clients/Amorae Bridal/02_Projects/Website redesign 2018/03_Development/Amorae/components/Navigation.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Navigation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation() {
    var _this;

    _classCallCheck(this, Navigation);

    _this = _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call(this));
    _this.state = {
      active: false,
      overlay: false,
      navDropdown: false,
      appointment: false
    };
    return _this;
  }

  _createClass(Navigation, [{
    key: "handleNav",
    value: function handleNav() {
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
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_BookAppointment__["a" /* default */], {
        active: this.state.appointment,
        CancelClick: function CancelClick() {
          return _this2.closeOverlay();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Overlay__["a" /* default */], {
        coverNav: this.state.appointment,
        overlay: this.state.overlay,
        onClick: function onClick() {
          return _this2.closeOverlay();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        onClick: function onClick() {
          return _this2.handleNav();
        },
        className: "hamburger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "".concat(this.props.theme, " ").concat(this.state.active ? 'is-open' : 'null', " top"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "".concat(this.props.theme, " ").concat(this.state.active ? 'is-open' : 'null', " middle"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "".concat(this.props.theme, " ").concat(this.state.active ? 'is-open' : 'null', " bottom"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "".concat(this.state.active ? 'is-open' : 'null', " nav-panel"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "homepage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, "Home"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        onClick: function onClick() {
          return _this2.handleDropdown();
        },
        className: "".concat(this.state.navDropdown ? 'is-open' : 'null', " dropdown"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, "Our Designers"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: this.state.navDropdown ? 'is-open' : 'null',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, __WEBPACK_IMPORTED_MODULE_2__static_data_data_navigation___default.a.map(function (d, id) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
          key: id,
          href: d.link,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        }, d.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_DressCounter__["a" /* default */], {
          id: id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        })));
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/salePage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, "Sample Sale"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        onClick: function onClick() {
          return _this2.openAppointment();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, "Book an Appointment")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
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

/***/ "./components/SaleBadge.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_sale_badge_sass__ = __webpack_require__("./static/sale-badge.sass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_sale_badge_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_sale_badge_sass__);
var _jsxFileName = "/Users/michaelgriffin/Documents/Clients/Amorae Bridal/02_Projects/Website redesign 2018/03_Development/Amorae/components/SaleBadge.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var SaleBadge =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SaleBadge, _React$Component);

  function SaleBadge() {
    _classCallCheck(this, SaleBadge);

    return _possibleConstructorReturn(this, (SaleBadge.__proto__ || Object.getPrototypeOf(SaleBadge)).apply(this, arguments));
  }

  _createClass(SaleBadge, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sale-badge ".concat(this.props.onSale ? 'is-showing' : 'null'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, "Sale"));
    }
  }]);

  return SaleBadge;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SaleBadge);

/***/ }),

/***/ "./pages/salePage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_data_data_navigation__ = __webpack_require__("./static/data/data-navigation.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_data_data_navigation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_data_data_navigation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_DressCard__ = __webpack_require__("./components/DressCard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_DropdownButton__ = __webpack_require__("./components/DropdownButton.js");
var _jsxFileName = "/Users/michaelgriffin/Documents/Clients/Amorae Bridal/02_Projects/Website redesign 2018/03_Development/Amorae/pages/salePage.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var SampleSale =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SampleSale, _React$Component);

  function SampleSale(props) {
    var _this;

    _classCallCheck(this, SampleSale);

    _this = _possibleConstructorReturn(this, (SampleSale.__proto__ || Object.getPrototypeOf(SampleSale)).call(this, props));
    _this.state = {
      saleDresses: [],
      btnText: 'Sort dresses'
    };
    return _this;
  }

  _createClass(SampleSale, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var filteredSaleDresses = [];
      __WEBPACK_IMPORTED_MODULE_1__static_data_data_navigation___default.a.map(function (designer, id) {
        designer.dresses.filter(function (saleDress) {
          if (saleDress.sale === true) {
            filteredSaleDresses.push(saleDress);
          }
        });
      });
      this.setState({
        saleDresses: filteredSaleDresses
      });
    }
  }, {
    key: "handleSizeClick",
    value: function handleSizeClick() {
      var sortedDresses = this.state.saleDresses.sort(function (a, b) {
        return a.size > b.size ? 1 : b.size > a.size ? -1 : 0;
      });
      this.setState({
        saleDresses: sortedDresses,
        btnText: "Dresses Sorted by Size"
      });
    }
  }, {
    key: "handlePriceClick",
    value: function handlePriceClick() {
      var sortedDresses = this.state.saleDresses.sort(function (a, b) {
        return a.salePrice > b.salePrice ? 1 : b.salePrice > a.salePrice ? -1 : 0;
      });
      this.setState({
        saleDresses: sortedDresses,
        btnText: "Dresses Sorted by Price"
      });
    }
  }, {
    key: "handleNameClick",
    value: function handleNameClick() {
      var sortedDresses = this.state.saleDresses.sort(function (a, b) {
        return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
      });
      this.setState({
        saleDresses: sortedDresses,
        btnText: "Dresses Sorted by Name"
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Layout__["a" /* default */], {
        theme: "dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "top-content page-vs-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "Sample Sale"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, "We edit our dress range regularly and we are constantly taking deliveries of new styles so we like to discount our stunning dresses. A sample gown may be the answer if you want a designer dress to fit your budget."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_DropdownButton__["a" /* default */], {
        btnClass: "dropdown-btn",
        btnText: this.state.btnText,
        btnIcon: "icon fa fa-caret-down",
        sizeClick: function sizeClick() {
          return _this2.handleSizeClick();
        },
        priceClick: function priceClick() {
          return _this2.handlePriceClick();
        },
        nameClick: function nameClick() {
          return _this2.handleNameClick();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "main-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, this.state.saleDresses.map(function (d, id) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_DressCard__["a" /* default */], {
          key: id,
          onSale: d.sale,
          bg: d.images[0].path,
          name: d.name,
          colour: d.colour,
          size: d.size,
          price: d.price,
          salePrice: d.salePrice,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        });
      })));
    }
  }]);

  return SampleSale;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SampleSale);

/***/ }),

/***/ "./static/booking.sass":
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/button.sass":
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/data/data-navigation.json":
/***/ (function(module, exports) {

module.exports = [{"title":"Ronald Joyce","blurb":"Unmistakably elegant and feminine, Verni Infantino the designer of Ronald Joyce creates beautiful dresses with refined simplicity for today's modern brides using precious and researched fabrics. Verni Infantino's brides are always unique, stunning and indisputably sophisticated. The Ronald Joyce collection is crafted using couture techniques and quality fabrics. Verni well known for perfectly structured bodices, prides herself on the fit and aims to create the most flattering shape for any bride.","bg":"./static/images/hero.jpg","dresses":[{"name":"Ada","sale":false,"images":[{"path":"./static/images/RonaldJoyce/Ada_a.jpg"},{"path":"./static/images/RonaldJoyce/Ada_b.jpg"},{"path":"./static/images/RonaldJoyce/Ada_c.jpg"}]},{"name":"Adele","sale":false,"images":[{"path":"./static/images/RonaldJoyce/Adele_a.jpg"},{"path":"./static/images/RonaldJoyce/Adele_b.jpg"},{"path":"./static/images/RonaldJoyce/Adele_c.jpg"}]},{"name":"Ainsley","sale":false,"images":[{"path":"./static/images/RonaldJoyce/Ainsley_a.jpg"},{"path":"./static/images/RonaldJoyce/Ainsley_b.jpg"},{"path":"./static/images/RonaldJoyce/Ainsley_c.jpg"}]},{"name":"Alicia","sale":true,"colour":"","size":"UK14","price":"was £1650","salePrice":"now £800","images":[{"path":"./static/images/RonaldJoyce/Alicia_a.jpg"},{"path":"./static/images/RonaldJoyce/Alicia_b.jpg"},{"path":"./static/images/RonaldJoyce/Alicia_c.jpg"}]},{"name":"Alison","sale":false,"images":[{"path":"./static/images/RonaldJoyce/Alison_a.jpg"},{"path":"./static/images/RonaldJoyce/Alison_b.jpg"},{"path":"./static/images/RonaldJoyce/Alison_c.jpg"}]},{"name":"Angelica","sale":false,"images":[{"path":"./static/images/RonaldJoyce/Angelica_a.jpg"},{"path":"./static/images/RonaldJoyce/Angelica_b.jpg"},{"path":"./static/images/RonaldJoyce/Angelica_c.jpg"}]},{"name":"Antonia","sale":true,"colour":"","size":"UK14","price":"was £2250","salePrice":"now £800","images":[{"path":"./static/images/RonaldJoyce/Antonia_a.jpg"},{"path":"./static/images/RonaldJoyce/Antonia_b.jpg"},{"path":"./static/images/RonaldJoyce/Antonia_c.jpg"}]},{"name":"Aryana","sale":false,"images":[{"path":"./static/images/RonaldJoyce/aryana_a.jpg"},{"path":"./static/images/RonaldJoyce/aryana_b.jpg"},{"path":"./static/images/RonaldJoyce/aryana_c.jpg"}]},{"name":"Norma","sale":false,"images":[{"path":"./static/images/RonaldJoyce/Norma_a.jpg"},{"path":"./static/images/RonaldJoyce/Norma_b.jpg"}]},{"name":"Robyn","sale":false,"images":[{"path":"./static/images/RonaldJoyce/Robyn_a.jpg"},{"path":"./static/images/RonaldJoyce/Robyn_b.jpg"},{"path":"./static/images/RonaldJoyce/Robyn_c.jpg"}]},{"name":"Honey","sale":false,"images":[{"path":"./static/images/RonaldJoyce/Honey_a.jpg"},{"path":"./static/images/RonaldJoyce/Honey_b.jpg"},{"path":"./static/images/RonaldJoyce/Honey_c.jpg"}]},{"name":"Erica","sale":true,"colour":"","size":"UK14","price":"was £1895","salePrice":"now £800","images":[{"path":"./static/images/RonaldJoyce/Erica_a.jpg"},{"path":"./static/images/RonaldJoyce/Erica_b.jpg"},{"path":"./static/images/RonaldJoyce/Erica_c.jpg"}]},{"name":"Audrey","sale":false,"images":[{"path":"./static/images/RonaldJoyce/Audrey_a.jpg"},{"path":"./static/images/RonaldJoyce/Audrey_b.jpg"},{"path":"./static/images/RonaldJoyce/Audrey_c.jpg"}]},{"name":"Ella","sale":false,"images":[{"path":"./static/images/RonaldJoyce/Ella_a.jpg"},{"path":"./static/images/RonaldJoyce/Ella_b.jpg"},{"path":"./static/images/RonaldJoyce/Ella_c.jpg"}]},{"name":"Elke","sale":false,"images":[{"path":"./static/images/RonaldJoyce/Elke.jpg"}]},{"name":"Eileen","sale":false,"images":[{"path":"./static/images/RonaldJoyce/Eileen_a.jpg"},{"path":"./static/images/RonaldJoyce/Eileen_b.jpg"},{"path":"./static/images/RonaldJoyce/Eileen_c.jpg"}]},{"name":"Eliza","sale":true,"colour":"","size":"UK10","price":"was £1425","salePrice":"now £700","images":[{"path":"./static/images/RonaldJoyce/Eliza_a.jpg"},{"path":"./static/images/RonaldJoyce/Eliza_b.jpg"}]},{"name":"Nikita","sale":false,"images":[{"path":"./static/images/RonaldJoyce/Nikita_a.jpg"},{"path":"./static/images/RonaldJoyce/Nikita_b.jpg"},{"path":"./static/images/RonaldJoyce/Nikita_c.jpg"}]},{"name":"Emmanuelle","sale":false,"images":[{"path":"./static/images/RonaldJoyce/Emmanuelle_a.jpg"},{"path":"./static/images/RonaldJoyce/Emmanuelle_b.jpg"},{"path":"./static/images/RonaldJoyce/Emmanuelle_c.jpg"}]},{"name":"Brunhilde","sale":true,"colour":"","size":"","price":"was £1795","salePrice":"now £750","images":[{"path":"./static/images/RonaldJoyce/Brunhilde_a.jpg"},{"path":"./static/images/RonaldJoyce/Brunhilde_b.jpg"}]},{"name":"Helani","sale":false,"images":[{"path":"./static/images/RonaldJoyce/Helani_a.jpg"},{"path":"./static/images/RonaldJoyce/Helani_b.jpg"},{"path":"./static/images/RonaldJoyce/Helani_c.jpg"}]},{"name":"Nina","sale":false,"images":[{"path":"./static/images/RonaldJoyce/Nina_a.jpg"},{"path":"./static/images/RonaldJoyce/Nina_b.jpg"},{"path":"./static/images/RonaldJoyce/Nina_c.jpg"}]},{"name":"Elma","sale":false,"images":[{"path":"./static/images/RonaldJoyce/Elma_a.jpg"},{"path":"./static/images/RonaldJoyce/Elma_b.jpg"},{"path":"./static/images/RonaldJoyce/Elma_c.jpg"}]},{"name":"Rhodes","sale":true,"colour":"","size":"UK12","price":"£2550","salePrice":"now £650","images":[{"path":"./static/images/RonaldJoyce/Rhodes_a.jpg"},{"path":"./static/images/RonaldJoyce/Rhodes_b.jpg"},{"path":"./static/images/RonaldJoyce/Rhodes_c.jpg"}]},{"name":"Nora","sale":false,"images":[{"path":"./static/images/RonaldJoyce/Nora_a.jpg"},{"path":"./static/images/RonaldJoyce/Nora_b.jpg"},{"path":"./static/images/RonaldJoyce/Nora_c.jpg"}]},{"name":"Nicolette","sale":false,"images":[{"path":"./static/images/RonaldJoyce/Nicolette_a.jpg"},{"path":"./static/images/RonaldJoyce/Nicolette_b.jpg"},{"path":"./static/images/RonaldJoyce/Nicolette_c.jpg"}]},{"name":"Erin","sale":false,"images":[{"path":"./static/images/RonaldJoyce/Erin_a.jpg"},{"path":"./static/images/RonaldJoyce/Erin_b.jpg"},{"path":"./static/images/RonaldJoyce/Erin_c.jpg"}]},{"name":"Hazel","sale":false,"images":[{"path":"./static/images/RonaldJoyce/Hazel_a.jpg"},{"path":"./static/images/RonaldJoyce/Hazel_b.jpg"},{"path":"./static/images/RonaldJoyce/Hazel_c.jpg"}]},{"name":"Estee","sale":false,"images":[{"path":"./static/images/RonaldJoyce/Estee_a.jpg"},{"path":"./static/images/RonaldJoyce/Estee_b.jpg"},{"path":"./static/images/RonaldJoyce/Estee_c.jpg"}]},{"name":"Heva","sale":false,"images":[{"path":"./static/images/RonaldJoyce/Heva_a.jpg"},{"path":"./static/images/RonaldJoyce/Heva_b.jpg"},{"path":"./static/images/RonaldJoyce/Heva_c.jpg"}]},{"name":"Ryoko","sale":true,"colour":"","size":"UK12","price":"was £1495","salePrice":"now £700","images":[{"path":"./static/images/RonaldJoyce/Ryoko_a.jpg"},{"path":"./static/images/RonaldJoyce/Ryoko_b.jpg"},{"path":"./static/images/RonaldJoyce/Ryoko_c.jpg"}]},{"name":"Nouvelle","sale":false,"images":[{"path":"./static/images/RonaldJoyce/Nouvelle_a.jpg"},{"path":"./static/images/RonaldJoyce/Nouvelle_b.jpg"},{"path":"./static/images/RonaldJoyce/Nouvelle_c.jpg"}]},{"name":"Noleen","sale":false,"images":[{"path":"./static/images/RonaldJoyce/Noleen_a.jpg"},{"path":"./static/images/RonaldJoyce/Noleen_b.jpg"}]},{"name":"Hilaria","sale":false,"images":[{"path":"./static/images/RonaldJoyce/Hilaria_a.jpg"},{"path":"./static/images/RonaldJoyce/Hilaria_b.jpg"},{"path":"./static/images/RonaldJoyce/Hilaria_c.jpg"}]},{"name":"Hermione","sale":false,"images":[{"path":"./static/images/RonaldJoyce/Hermione_a.jpg"},{"path":"./static/images/RonaldJoyce/Hermione_b.jpg"},{"path":"./static/images/RonaldJoyce/Hermione_c.jpg"}]},{"name":"Helga","sale":false,"images":[{"path":"./static/images/RonaldJoyce/Helga_a.jpg"},{"path":"./static/images/RonaldJoyce/Helga_b.jpg"},{"path":"./static/images/RonaldJoyce/Helga_c.jpg"}]},{"name":"Helki","sale":false,"images":[{"path":"./static/images/RonaldJoyce/Helki_a.jpg"},{"path":"./static/images/RonaldJoyce/Helki_b.jpg"},{"path":"./static/images/RonaldJoyce/Helki_c.jpg"}]}]},{"title":"Kenneth Winston","blurb":"A family run business, Kenneth Winston have been designing the most stunning wedding dresses for over 30 years. An amazing collection of gowns that have a mix of timeless and contemporary high-quality materials, and only the finest detailed-beadwork and embroidery.","bg":"./static/images/hero.jpg","dresses":[{"name":"Gemmalee","sale":false,"images":[{"path":"./static/images/KennethWinston/Gemmalee_a.jpg"},{"path":"./static/images/KennethWinston/Gemmalee_b.jpg"},{"path":"./static/images/KennethWinston/Gemmalee_c.jpg"}]},{"name":"Gigi","sale":false,"images":[{"path":"./static/images/KennethWinston/Gigi_a.jpg"},{"path":"./static/images/KennethWinston/Gigi_b.jpg"},{"path":"./static/images/KennethWinston/Gigi_c.jpg"}]},{"name":"Grace","sale":false,"images":[{"path":"./static/images/KennethWinston/Grace_a.jpg"},{"path":"./static/images/KennethWinston/Grace_b.jpg"},{"path":"./static/images/KennethWinston/Grace_c.jpg"}]},{"name":"Georgeanna","sale":false,"images":[{"path":"./static/images/KennethWinston/Georgeanna_a.jpg"},{"path":"./static/images/KennethWinston/Georgeanna_b.jpg"},{"path":"./static/images/KennethWinston/Georgeanna_c.jpg"}]},{"name":"Giovanna","sale":false,"images":[{"path":"./static/images/KennethWinston/Giovanna_a.jpg"},{"path":"./static/images/KennethWinston/Giovanna_b.jpg"},{"path":"./static/images/KennethWinston/Giovanna_c.jpg"}]},{"name":"Gwyn","sale":false,"images":[{"path":"./static/images/KennethWinston/Gwyn_a.jpg"},{"path":"./static/images/KennethWinston/Gwyn_b.jpg"}]},{"name":"Genevieve","sale":false,"images":[{"path":"./static/images/KennethWinston/Genevieve_a.jpg"},{"path":"./static/images/KennethWinston/Genevieve_b.jpg"},{"path":"./static/images/KennethWinston/Genevieve_c.jpg"}]},{"name":"Genie","sale":false,"images":[{"path":"./static/images/KennethWinston/Genie_a.jpg"},{"path":"./static/images/KennethWinston/Genie_b.jpg"},{"path":"./static/images/KennethWinston/Genie_c.jpg"}]},{"name":"Geordie","sale":false,"images":[{"path":"./static/images/KennethWinston/Geordie_a.jpg"},{"path":"./static/images/KennethWinston/Geordie_b.jpg"},{"path":"./static/images/KennethWinston/Geordie_c.jpg"}]},{"name":"1573","sale":false,"images":[{"path":"./static/images/KennethWinston/1573.jpg"}]},{"name":"1727","sale":false,"images":[{"path":"./static/images/KennethWinston/1727_kz_a.jpg"},{"path":"./static/images/KennethWinston/1727_kz_b.jpg"},{"path":"./static/images/KennethWinston/1727_kz_c.jpg"}]},{"name":"1729","sale":false,"images":[{"path":"./static/images/KennethWinston/1729_kz_a.jpg"},{"path":"./static/images/KennethWinston/1729_kz_b.jpg"},{"path":"./static/images/KennethWinston/1729_kz_c.jpg"}]},{"name":"1740","sale":false,"images":[{"path":"./static/images/KennethWinston/1740_as_a.jpg"},{"path":"./static/images/KennethWinston/1740_as_b.jpg"},{"path":"./static/images/KennethWinston/1740_as_c.jpg"}]},{"name":"1742","sale":false,"images":[{"path":"./static/images/KennethWinston/1742_as_a.jpg"},{"path":"./static/images/KennethWinston/1742_as_b.jpg"},{"path":"./static/images/KennethWinston/1742_as_c.jpg"}]},{"name":"1748","sale":false,"images":[{"path":"./static/images/KennethWinston/1748_rc_a.jpg"},{"path":"./static/images/KennethWinston/1748_rc_b.jpg"},{"path":"./static/images/KennethWinston/1748_rc_c.jpg"}]},{"name":"1753","sale":false,"images":[{"path":"./static/images/KennethWinston/1753_kz_a.jpg"},{"path":"./static/images/KennethWinston/1753_kz_b.jpg"},{"path":"./static/images/KennethWinston/1753_kz_c.jpg"}]},{"name":"150715","sale":false,"images":[{"path":"./static/images/KennethWinston/150715_a.jpg"},{"path":"./static/images/KennethWinston/150715_b.jpg"},{"path":"./static/images/KennethWinston/150715_c.jpg"}]}]},{"title":"La Sposa","blurb":"With a name that conjures up elegance and beauty, La Sposa has been chosen by millions of women during a history that spans almost 20 years. Brought to you by the world re-nowned Pronovias Fashion Group, the firm has been passionate about creating a perfect gown for every bride since it came into being in 1997.","bg":"./static/images/hero.jpg","dresses":[{"name":"Hailey","sale":true,"colour":"","size":"UK10","price":"was £1330","salePrice":"now £800","images":[{"path":"./static/images/LaSposa/Hailey_a.jpg"},{"path":"./static/images/LaSposa/Hailey_b.jpg"},{"path":"./static/images/LaSposa/Hailey_c.jpg"}]},{"name":"Denia","sale":false,"images":[{"path":"./static/images/LaSposa/Denia_a.jpg"},{"path":"./static/images/LaSposa/Denia_b.jpg"},{"path":"./static/images/LaSposa/Denia_c.jpg"}]},{"name":"Hali","sale":false,"images":[{"path":"./static/images/LaSposa/Hali_a.jpg"},{"path":"./static/images/LaSposa/Hali_b.jpg"},{"path":"./static/images/LaSposa/Hali_c.jpg"}]},{"name":"Paden","sale":false,"images":[{"path":"./static/images/LaSposa/paden_a.jpg"},{"path":"./static/images/LaSposa/paden_b.jpg"},{"path":"./static/images/LaSposa/paden_c.jpg"}]},{"name":"Mullet","sale":false,"images":[{"path":"./static/images/LaSposa/Mullet_a.jpg"},{"path":"./static/images/LaSposa/Mullet_b.jpg"},{"path":"./static/images/LaSposa/Mullet_c.jpg"}]},{"name":"Penelope","sale":false,"images":[{"path":"./static/images/LaSposa/penelope_a.jpg"},{"path":"./static/images/LaSposa/penelope_b.jpg"},{"path":"./static/images/LaSposa/penelope_c.jpg"}]},{"name":"Iojann","sale":true,"colour":"","size":"UK12","price":"was £1100","salePrice":"now £400","images":[{"path":"./static/images/LaSposa/Iojann_a.jpg"},{"path":"./static/images/LaSposa/Iojann_b.jpg"},{"path":"./static/images/LaSposa/Iojann_c.jpg"}]},{"name":"Huberta","sale":false,"images":[{"path":"./static/images/LaSposa/Huberta_a.jpg"},{"path":"./static/images/LaSposa/Huberta_b.jpg"},{"path":"./static/images/LaSposa/Huberta_c.jpg"}]},{"name":"Rosa","sale":false,"images":[{"path":"./static/images/LaSposa/ROSA_a.jpg"},{"path":"./static/images/LaSposa/ROSA_b.jpg"},{"path":"./static/images/LaSposa/ROSA_c.jpg"}]},{"name":"Rupia","sale":false,"images":[{"path":"./static/images/LaSposa/RUPIA_a.jpg"},{"path":"./static/images/LaSposa/RUPIA_b.jpg"},{"path":"./static/images/LaSposa/RUPIA_c.jpg"}]},{"name":"Zabel","sale":false,"images":[{"path":"./static/images/LaSposa/zabel_a.jpg"},{"path":"./static/images/LaSposa/zabel_b.jpg"},{"path":"./static/images/LaSposa/zabel_c.jpg"}]},{"name":"Ruanda","sale":true,"colour":"","size":"UK12","price":"was £1550","salePrice":"now £750","images":[{"path":"./static/images/LaSposa/RUANDA_a.jpg"},{"path":"./static/images/LaSposa/RUANDA_b.jpg"},{"path":"./static/images/LaSposa/RUANDA_c.jpg"}]},{"name":"Rene","sale":true,"colour":"","size":"UK14","price":"was £1300","salePrice":"now £650","images":[{"path":"./static/images/LaSposa/RENE_a.jpg"},{"path":"./static/images/LaSposa/RENE_b.jpg"},{"path":"./static/images/LaSposa/RENE_c.jpg"}]},{"name":"Romy","sale":true,"colour":"","size":"UK12","price":"was £1260","salePrice":"now £650","images":[{"path":"./static/images/LaSposa/ROMY_a.jpg"},{"path":"./static/images/LaSposa/ROMY_b.jpg"},{"path":"./static/images/LaSposa/ROMY_c.jpg"}]},{"name":"Haliza","sale":false,"images":[{"path":"./static/images/LaSposa/Haliza_a.jpg"},{"path":"./static/images/LaSposa/Haliza_b.jpg"},{"path":"./static/images/LaSposa/Haliza_c.jpg"}]},{"name":"Halory","sale":false,"images":[{"path":"./static/images/LaSposa/Halory_a.jpg"},{"path":"./static/images/LaSposa/Halory_b.jpg"},{"path":"./static/images/LaSposa/Halory_c.jpg"}]},{"name":"Helga","sale":false,"images":[{"path":"./static/images/LaSposa/Helga_a.jpg"},{"path":"./static/images/LaSposa/Helga_b.jpg"},{"path":"./static/images/LaSposa/Helga_c.jpg"}]},{"name":"Palermo","sale":false,"images":[{"path":"./static/images/LaSposa/palermo_a.jpg"},{"path":"./static/images/LaSposa/palermo_b.jpg"},{"path":"./static/images/LaSposa/palermo_c.jpg"}]},{"name":"Henrika","sale":false,"images":[{"path":"./static/images/LaSposa/Henrika_a.jpg"},{"path":"./static/images/LaSposa/Henrika_b.jpg"},{"path":"./static/images/LaSposa/Henrika_c.jpg"}]},{"name":"Riaza","sale":true,"colour":"","size":"UK12","price":"was £1550","salePrice":"now £750","images":[{"path":"./static/images/LaSposa/RIAZA_a.jpg"},{"path":"./static/images/LaSposa/RIAZA_b.jpg"},{"path":"./static/images/LaSposa/RIAZA_c.jpg"}]},{"name":"Rosemary","sale":true,"colour":"","size":"UK12","price":"was £1550","salePrice":"now £750","images":[{"path":"./static/images/LaSposa/ROSEMARY_a.jpg"},{"path":"./static/images/LaSposa/ROSEMARY_b.jpg"},{"path":"./static/images/LaSposa/ROSEMARY_c.jpg"}]},{"name":"Paulet","sale":false,"images":[{"path":"./static/images/LaSposa/paulet_a.jpg"},{"path":"./static/images/LaSposa/paulet_b.jpg"},{"path":"./static/images/LaSposa/paulet_c.jpg"}]},{"name":"Raven","sale":false,"images":[{"path":"./static/images/LaSposa/RAVEN_a.jpg"},{"path":"./static/images/LaSposa/RAVEN_b.jpg"},{"path":"./static/images/LaSposa/RAVEN_c.jpg"}]},{"name":"Peru","sale":false,"images":[{"path":"./static/images/LaSposa/peru_a.jpg"},{"path":"./static/images/LaSposa/peru_b.jpg"},{"path":"./static/images/LaSposa/peru_c.jpg"}]},{"name":"Petra","sale":false,"images":[{"path":"./static/images/LaSposa/petra_a.jpg"},{"path":"./static/images/LaSposa/petra_b.jpg"},{"path":"./static/images/LaSposa/petra_c.jpg"}]},{"name":"Profeta","sale":false,"images":[{"path":"./static/images/LaSposa/profeta_a.jpg"},{"path":"./static/images/LaSposa/profeta_b.jpg"},{"path":"./static/images/LaSposa/profeta_c.jpg"}]},{"name":"Piera","sale":false,"images":[{"path":"./static/images/LaSposa/piera_a.jpg"},{"path":"./static/images/LaSposa/piera_b.jpg"},{"path":"./static/images/LaSposa/piera_c.jpg"}]},{"name":"Haleya","sale":true,"colour":"","size":"UK12","price":"was £1550","salePrice":"now £750","images":[{"path":"./static/images/LaSposa/haleya_a.jpg"},{"path":"./static/images/LaSposa/haleya_b.jpg"},{"path":"./static/images/LaSposa/haleya_c.jpg"}]},{"name":"Haman","sale":true,"colour":"","size":"UK12","price":"was £1550","salePrice":"now £750","images":[{"path":"./static/images/LaSposa/Haman_a.jpg"},{"path":"./static/images/LaSposa/Haman_b.jpg"},{"path":"./static/images/LaSposa/Haman_c.jpg"}]}]},{"title":"San Patrick","blurb":"Wedding gowns for a modern woman who appreciates contemporary design and style but is also inspired by elegance.","bg":"./static/images/hero.jpg","dresses":[{"name":"Laelia","sale":false,"images":[{"path":"./static/images/SanPatrick/laelia_a.jpg"},{"path":"./static/images/SanPatrick/laelia_b.jpg"},{"path":"./static/images/SanPatrick/laelia_c.jpg"}]},{"name":"Lanina","sale":false,"images":[{"path":"./static/images/SanPatrick/lanina_a.jpg"},{"path":"./static/images/SanPatrick/lanina_b.jpg"},{"path":"./static/images/SanPatrick/lanina_c.jpg"}]},{"name":"Lendas","sale":false,"images":[{"path":"./static/images/SanPatrick/lendas_a.jpg"},{"path":"./static/images/SanPatrick/lendas_b.jpg"},{"path":"./static/images/SanPatrick/lendas_c.jpg"}]},{"name":"Leticia","sale":false,"images":[{"path":"./static/images/SanPatrick/leticia_a.jpg"},{"path":"./static/images/SanPatrick/leticia_b.jpg"},{"path":"./static/images/SanPatrick/leticia_c.jpg"}]},{"name":"Leviras","sale":false,"images":[{"path":"./static/images/SanPatrick/leviras_a.jpg"},{"path":"./static/images/SanPatrick/leviras_b.jpg"},{"path":"./static/images/SanPatrick/leviras_c.jpg"}]},{"name":"Macedonia","sale":false,"images":[{"path":"./static/images/SanPatrick/macedonia_a.jpg"},{"path":"./static/images/SanPatrick/macedonia_b.jpg"},{"path":"./static/images/SanPatrick/macedonia_c.jpg"}]},{"name":"Maribel","sale":true,"colour":"","size":"UK14","price":"was £1690","salePrice":"now £700","images":[{"path":"./static/images/SanPatrick/Maribel_a.jpg"},{"path":"./static/images/SanPatrick/Maribel_b.jpg"},{"path":"./static/images/SanPatrick/Maribel_c.jpg"}]},{"name":"Melisa","sale":false,"images":[{"path":"./static/images/SanPatrick/melisa_a.jpg"},{"path":"./static/images/SanPatrick/melisa_b.jpg"},{"path":"./static/images/SanPatrick/melisa_c.jpg"}]},{"name":"Mica","sale":true,"colour":"","size":"UK12","price":"was £1280","salePrice":"now £700","images":[{"path":"./static/images/SanPatrick/mica_a.jpg"},{"path":"./static/images/SanPatrick/mica_b.jpg"},{"path":"./static/images/SanPatrick/mica_c.jpg"}]},{"name":"Milagro","sale":false,"images":[{"path":"./static/images/SanPatrick/Milagro_a.jpg"},{"path":"./static/images/SanPatrick/Milagro_b.jpg"},{"path":"./static/images/SanPatrick/Milagro_c.jpg"}]},{"name":"Milan","sale":false,"images":[{"path":"./static/images/SanPatrick/milan_a.jpg"},{"path":"./static/images/SanPatrick/milan_b.jpg"},{"path":"./static/images/SanPatrick/milan_c.jpg"}]},{"name":"Moira","sale":false,"images":[{"path":"./static/images/SanPatrick/Moira_a.jpg"},{"path":"./static/images/SanPatrick/Moira_b.jpg"},{"path":"./static/images/SanPatrick/Moira_c.jpg"}]},{"name":"Monaco","sale":true,"colour":"","size":"UK10","price":"was £1600","salePrice":"now £700","images":[{"path":"./static/images/SanPatrick/Monaco_a.jpg"},{"path":"./static/images/SanPatrick/Monaco_b.jpg"},{"path":"./static/images/SanPatrick/Monaco_c.jpg"}]},{"name":"Morena","sale":false,"images":[{"path":"./static/images/SanPatrick/Morena_a.jpg"},{"path":"./static/images/SanPatrick/Morena_b.jpg"},{"path":"./static/images/SanPatrick/Morena_c.jpg"}]},{"name":"Morgan","sale":false,"images":[{"path":"./static/images/SanPatrick/Morgan_a.jpg"},{"path":"./static/images/SanPatrick/Morgan_b.jpg"},{"path":"./static/images/SanPatrick/Morgan_c.jpg"}]},{"name":"Musa","sale":true,"colour":"","size":"UK10","price":"was £1360","salePrice":"now £700","images":[{"path":"./static/images/SanPatrick/musa_a.jpg"},{"path":"./static/images/SanPatrick/musa_b.jpg"}]},{"name":"Zada","sale":false,"images":[{"path":"./static/images/SanPatrick/ZADA_a.jpg"},{"path":"./static/images/SanPatrick/ZADA_b.jpg"},{"path":"./static/images/SanPatrick/ZADA_c.jpg"}]},{"name":"Zaide","sale":true,"colour":"","size":"UK14","price":"was £1590","salePrice":"now £750","images":[{"path":"./static/images/SanPatrick/zaide_a.jpg"},{"path":"./static/images/SanPatrick/zaide_b.jpg"},{"path":"./static/images/SanPatrick/zaide_c.jpg"}]},{"name":"Zulma","sale":false,"images":[{"path":"./static/images/SanPatrick/ZULMA_a.jpg"},{"path":"./static/images/SanPatrick/ZULMA_b.jpg"},{"path":"./static/images/SanPatrick/ZULMA_c.jpg"}]},{"name":"Zurie","sale":false,"images":[{"path":"./static/images/SanPatrick/ZURIE_a.jpg"},{"path":"./static/images/SanPatrick/ZURIE_b.jpg"},{"path":"./static/images/SanPatrick/ZURIE_c.jpg"}]}]},{"title":"Sofia Bianca","blurb":"The Sofia Bianca collection focuses on modern textures and detail including asymmetrical over-lays and ruffled tiered skirts, incorporating elegant fabrics such as larissa satin, soft tulle and textured organza. Each design is complimented with delicate touches of handmade flowers or intricately beaded embroidery to create an individual style.","bg":"./static/images/hero.jpg","dresses":[{"name":"Sansa","sale":false,"images":[{"path":"./static/images/SofiaBianca/Sansa_a.jpg"},{"path":"./static/images/SofiaBianca/Sansa_b.jpg"},{"path":"./static/images/SofiaBianca/Sansa_c.jpg"}]},{"name":"Saoirse","sale":false,"images":[{"path":"./static/images/SofiaBianca/Saoirse_a.jpg"},{"path":"./static/images/SofiaBianca/Saoirse_b.jpg"},{"path":"./static/images/SofiaBianca/Saoirse_c.jpg"}]},{"name":"Sapphira","sale":false,"images":[{"path":"./static/images/SofiaBianca/Sapphira_a.jpg"},{"path":"./static/images/SofiaBianca/Sapphira_b.jpg"},{"path":"./static/images/SofiaBianca/Sapphira_c.jpg"}]},{"name":"Shani","sale":false,"images":[{"path":"./static/images/SofiaBianca/Shani_a.jpg"},{"path":"./static/images/SofiaBianca/Shani_b.jpg"},{"path":"./static/images/SofiaBianca/Shani_c.jpg"}]},{"name":"Sabrina","sale":true,"colour":"","size":"UK12","price":"was £1649","salePrice":"now £700","images":[{"path":"./static/images/SofiaBianca/Sabrina.jpg"}]},{"name":"Samantha","sale":true,"colour":"","size":"UK14","price":"was £1499","salePrice":"now £700","images":[{"path":"./static/images/SofiaBianca/Samantha.jpg"}]},{"name":"Sheridan","sale":false,"images":[{"path":"./static/images/SofiaBianca/Sheridan_a.jpg"},{"path":"./static/images/SofiaBianca/Sheridan_b.jpg"},{"path":"./static/images/SofiaBianca/Sheridan_c.jpg"}]},{"name":"Starr","sale":true,"colour":"","size":"UK12","price":"£1125","salePrice":"now £750","images":[{"path":"./static/images/SofiaBianca/Starr.jpg"}]},{"name":"Shoshanna","sale":false,"images":[{"path":"./static/images/SofiaBianca/Shoshanna_a.jpg"},{"path":"./static/images/SofiaBianca/Shoshanna_b.jpg"},{"path":"./static/images/SofiaBianca/Shoshanna_c.jpg"}]},{"name":"Sicilia","sale":false,"images":[{"path":"./static/images/SofiaBianca/Sicilia.jpg"}]},{"name":"Sonata","sale":true,"colour":"","size":"UK12","price":"was £1275","salePrice":"now £700","images":[{"path":"./static/images/SofiaBianca/Sonata_a.jpg"},{"path":"./static/images/SofiaBianca/Sonata_b.jpg"},{"path":"./static/images/SofiaBianca/Sonata_c.jpg"}]},{"name":"Stephanie","sale":true,"colour":"","size":"UK22","price":"was £1475","salePrice":"now £600","images":[{"path":"./static/images/SofiaBianca/Stephanie.jpg"}]},{"name":"Stella","sale":true,"colour":"","size":"UK12","price":"was £1799","salePrice":"now £800","images":[{"path":"./static/images/SofiaBianca/Stella.jpg"}]},{"name":"Stefani","sale":false,"images":[{"path":"./static/images/SofiaBianca/Stefani_a.jpg"},{"path":"./static/images/SofiaBianca/Stefani_b.jpg"},{"path":"./static/images/SofiaBianca/Stefani_c.jpg"}]},{"name":"Suki","sale":false,"images":[{"path":"./static/images/SofiaBianca/Suki_a.jpg"},{"path":"./static/images/SofiaBianca/Suki_b.jpg"},{"path":"./static/images/SofiaBianca/Suki_c.jpg"}]},{"name":"Serafina","sale":true,"colour":"","size":"UK12","price":"was £975","salePrice":"now £450","images":[{"path":"./static/images/SofiaBianca/Serafina.jpg"}]},{"name":"Susana","sale":false,"images":[{"path":"./static/images/SofiaBianca/Susana.jpg"}]},{"name":"Severina","sale":true,"colour":"","size":"UK12","price":"was £1195","salePrice":"now £700","images":[{"path":"./static/images/SofiaBianca/Severina.jpg"}]}]},{"title":"Mori Lee","blurb":"The Mori Lee collection offers luxurious dresses with the focus on contemporary, 'on-trend' designs. Beautifully designed with specially crafted embellishments and a range of silhouettes to appeal to all Brides-to-be.","bg":"./static/images/hero.jpg","dresses":[{"name":"Kadence","sale":false,"images":[{"path":"./static/images/MoriLee/Kadence_a.jpg"},{"path":"./static/images/MoriLee/Kadence_b.jpg"},{"path":"./static/images/MoriLee/Kadence_c.jpg"}]},{"name":"Karlee","sale":false,"images":[{"path":"./static/images/MoriLee/Karlee_a.jpg"},{"path":"./static/images/MoriLee/Karlee_b.jpg"},{"path":"./static/images/MoriLee/Karlee_c.jpg"}]},{"name":"Katie","sale":false,"images":[{"path":"./static/images/MoriLee/Katie_a.jpg"},{"path":"./static/images/MoriLee/Katie_b.jpg"},{"path":"./static/images/MoriLee/Katie_c.jpg"}]},{"name":"Bleu","sale":true,"colour":"","size":"UK14","price":"was £1095","salePrice":"now £650","images":[{"path":"./static/images/MoriLee/Bleu_a.jpg"},{"path":"./static/images/MoriLee/Bleu_b.jpg"},{"path":"./static/images/MoriLee/Bleu_c.jpg"}]},{"name":"Eliza","sale":true,"colour":"","size":"UK12","price":"was £1235","salePrice":"now £600","images":[{"path":"./static/images/MoriLee/Eliza_a.jpg"},{"path":"./static/images/MoriLee/Eliza_b.jpg"},{"path":"./static/images/MoriLee/Eliza_c.jpg"}]},{"name":"Eugenie","sale":true,"colour":"","size":"UK14","price":"was £1165","salePrice":"now £650","images":[{"path":"./static/images/MoriLee/Eugenie_a.jpg"},{"path":"./static/images/MoriLee/Eugenie_b.jpg"},{"path":"./static/images/MoriLee/Eugenie_c.jpg"}]},{"name":"Katie","sale":false,"images":[{"path":"./static/images/MoriLee/Katie_a.jpg"},{"path":"./static/images/MoriLee/Katie_b.jpg"},{"path":"./static/images/MoriLee/Katie_c.jpg"}]},{"name":"Keisha","sale":false,"images":[{"path":"./static/images/MoriLee/Keisha_a.jpg"},{"path":"./static/images/MoriLee/Keisha_b.jpg"},{"path":"./static/images/MoriLee/Keisha_c.jpg"}]},{"name":"Kelsey","sale":false,"images":[{"path":"./static/images/MoriLee/Kelsey_a.jpg"},{"path":"./static/images/MoriLee/Kelsey_b.jpg"},{"path":"./static/images/MoriLee/Kelsey_c.jpg"}]},{"name":"Kenzie","sale":false,"images":[{"path":"./static/images/MoriLee/Kenzie_a.jpg"},{"path":"./static/images/MoriLee/Kenzie_b.jpg"},{"path":"./static/images/MoriLee/Kenzie_c.jpg"}]},{"name":"Kiki","sale":false,"images":[{"path":"./static/images/MoriLee/Kiki_a.jpg"},{"path":"./static/images/MoriLee/Kiki_b.jpg"},{"path":"./static/images/MoriLee/Kiki_c.jpg"}]},{"name":"Koko","sale":false,"images":[{"path":"./static/images/MoriLee/Koko_a.jpg"},{"path":"./static/images/MoriLee/Koko_b.jpg"},{"path":"./static/images/MoriLee/Koko_c.jpg"}]},{"name":"Laurie","sale":false,"images":[{"path":"./static/images/MoriLee/Laurie_a.jpg"},{"path":"./static/images/MoriLee/Laurie_b.jpg"},{"path":"./static/images/MoriLee/Laurie_c.jpg"}]},{"name":"Lennon","sale":true,"colour":"","size":"UK14","price":"was £1155","salePrice":"now £600","images":[{"path":"./static/images/MoriLee/Lennon_a.jpg"},{"path":"./static/images/MoriLee/Lennon_b.jpg"},{"path":"./static/images/MoriLee/Lennon_c.jpg"}]},{"name":"Maggie","sale":true,"colour":"","size":"UK16","price":"was £1645","salePrice":"now £600","images":[{"path":"./static/images/MoriLee/Maggie_a.jpg"},{"path":"./static/images/MoriLee/Maggie_b.jpg"},{"path":"./static/images/MoriLee/Maggie_c.jpg"}]},{"name":"Mahdis","sale":true,"colour":"","size":"UK14","price":"was £1645","salePrice":"now £750","images":[{"path":"./static/images/MoriLee/Mahdis_a.jpg"},{"path":"./static/images/MoriLee/Mahdis_b.jpg"}]},{"name":"Mallory","sale":false,"images":[{"path":"./static/images/MoriLee/Mallory_a.jpg"},{"path":"./static/images/MoriLee/Mallory_b.jpg"},{"path":"./static/images/MoriLee/Mallory_c.jpg"}]},{"name":"Marguerit","sale":false,"images":[{"path":"./static/images/MoriLee/Marguerit_a.jpg"},{"path":"./static/images/MoriLee/Marguerit_b.jpg"},{"path":"./static/images/MoriLee/Marguerit_c.jpg"}]},{"name":"Maribell","sale":false,"images":[{"path":"./static/images/MoriLee/Maribell_a.jpg"},{"path":"./static/images/MoriLee/Maribell_b.jpg"},{"path":"./static/images/MoriLee/Maribell_c.jpg"}]},{"name":"Mariela","sale":false,"images":[{"path":"./static/images/MoriLee/Mariela_a.jpg"},{"path":"./static/images/MoriLee/Mariela_b.jpg"},{"path":"./static/images/MoriLee/Mariela_c.jpg"}]},{"name":"5216","sale":false,"images":[{"path":"./static/images/MoriLee/5216_a.jpg"},{"path":"./static/images/MoriLee/5216_b.jpg"},{"path":"./static/images/MoriLee/5216_c.jpg"}]},{"name":"Marlena","sale":false,"images":[{"path":"./static/images/MoriLee/Marlena_a.jpg"},{"path":"./static/images/MoriLee/Marlena_b.jpg"},{"path":"./static/images/MoriLee/Marlena_c.jpg"}]},{"name":"Marquesa","sale":false,"images":[{"path":"./static/images/MoriLee/Marquesa_a.jpg"},{"path":"./static/images/MoriLee/Marquesa_b.jpg"},{"path":"./static/images/MoriLee/Marquesa_c.jpg"}]},{"name":"Marquita","sale":false,"images":[{"path":"./static/images/MoriLee/Marquita_a.jpg"},{"path":"./static/images/MoriLee/Marquita_b.jpg"},{"path":"./static/images/MoriLee/Marquita_c.jpg"}]},{"name":"Massima","sale":false,"images":[{"path":"./static/images/MoriLee/Massima_a.jpg"},{"path":"./static/images/MoriLee/Massima_b.jpg"},{"path":"./static/images/MoriLee/Massima_c.jpg"}]},{"name":"Matilda","sale":false,"images":[{"path":"./static/images/MoriLee/Matilda_a.jpg"},{"path":"./static/images/MoriLee/Matilda_b.jpg"},{"path":"./static/images/MoriLee/Matilda_c.jpg"}]},{"name":"Matisa","sale":false,"images":[{"path":"./static/images/MoriLee/Matisa_a.jpg"},{"path":"./static/images/MoriLee/Matisa_b.jpg"},{"path":"./static/images/MoriLee/Matisa_c.jpg"}]},{"name":"Maxine","sale":true,"colour":"","size":"UK14","price":"was £1099","salePrice":"now £700","images":[{"path":"./static/images/MoriLee/Maxine_a.jpg"},{"path":"./static/images/MoriLee/Maxine_b.jpg"},{"path":"./static/images/MoriLee/Maxine_b.jpg"}]},{"name":"Meralda","sale":false,"images":[{"path":"./static/images/MoriLee/Meralda_a.jpg"},{"path":"./static/images/MoriLee/Meralda_b.jpg"},{"path":"./static/images/MoriLee/Meralda_c.jpg"}]},{"name":"Milly","sale":false,"images":[{"path":"./static/images/MoriLee/Milly_a.jpg"},{"path":"./static/images/MoriLee/Milly_b.jpg"},{"path":"./static/images/MoriLee/Milly_c.jpg"}]},{"name":"Mimi","sale":false,"images":[{"path":"./static/images/MoriLee/Mimi_a.jpg"},{"path":"./static/images/MoriLee/Mimi_b.jpg"},{"path":"./static/images/MoriLee/Mimi_c.jpg"}]},{"name":"Monet","sale":false,"images":[{"path":"./static/images/MoriLee/Monet_a.jpg"},{"path":"./static/images/MoriLee/Monet_b.jpg"},{"path":"./static/images/MoriLee/Monet_c.jpg"}]},{"name":"Monika","sale":false,"images":[{"path":"./static/images/MoriLee/Monika_a.jpg"},{"path":"./static/images/MoriLee/Monika_b.jpg"},{"path":"./static/images/MoriLee/Monika_c.jpg"}]},{"name":"Monique","sale":false,"images":[{"path":"./static/images/MoriLee/Monique_a.jpg"},{"path":"./static/images/MoriLee/Monique_b.jpg"},{"path":"./static/images/MoriLee/Monique_c.jpg"}]},{"name":"Mystique","sale":false,"images":[{"path":"./static/images/MoriLee/Mystique_a.jpg"},{"path":"./static/images/MoriLee/Mystique_b.jpg"},{"path":"./static/images/MoriLee/Mystique_c.jpg"}]},{"name":"Rayne","sale":false,"images":[{"path":"./static/images/MoriLee/Rayne_a.jpg"},{"path":"./static/images/MoriLee/Rayne_b.jpg"},{"path":"./static/images/MoriLee/Rayne_c.jpg"}]},{"name":"Sanchia","sale":false,"images":[{"path":"./static/images/MoriLee/Sanchia_a.jpg"},{"path":"./static/images/MoriLee/Sanchia_b.jpg"},{"path":"./static/images/MoriLee/Sanchia_c.jpg"}]},{"name":"Sara","sale":true,"colour":"","size":"UK12","price":"was £1785","salePrice":"now £800","images":[{"path":"./static/images/MoriLee/Sara_a.jpg"},{"path":"./static/images/MoriLee/Sara_b.jpg"},{"path":"./static/images/MoriLee/Sara_b.jpg"}]}]},{"title":"Demetrios","blurb":"A prestigious leader in bridal fashion, Demetrios' latest collection offers an extensive range of gowns suitable for any wedding ceremony. The Italian label was established in 1980 and is recognised for its use of the highest quality fabrics and innovative designs. Demetrios gowns can be ordered in sizes UK4-30.","bg":"./static/images/hero.jpg","dresses":[{"name":"Adreana","sale":false,"images":[{"path":"./static/images/Demetrios/Adreana_a.jpg"},{"path":"./static/images/Demetrios/Adreana_b.jpg"},{"path":"./static/images/Demetrios/Adreana_c.jpg"}]},{"name":"Amalea","sale":false,"images":[{"path":"./static/images/Demetrios/Amalea_a.jpg"},{"path":"./static/images/Demetrios/Amalea_b.jpg"},{"path":"./static/images/Demetrios/Amalea_c.jpg"}]},{"name":"Ana-Sofia","sale":false,"images":[{"path":"./static/images/Demetrios/Ana-Sofia_a.jpg"},{"path":"./static/images/Demetrios/Ana-Sofia_b.jpg"},{"path":"./static/images/Demetrios/Ana-Sofia_c.jpg"}]},{"name":"Allegra","sale":true,"colour":"","size":"UK12","price":"was £1279","salePrice":"now £500","images":[{"path":"./static/images/Demetrios/Allegra_a.jpg"},{"path":"./static/images/Demetrios/Allegra_b.jpg"},{"path":"./static/images/Demetrios/Allegra_b.jpg"}]},{"name":"Antheia","sale":true,"colour":"","size":"UK12","price":"was £1279","salePrice":"now £500","images":[{"path":"./static/images/Demetrios/Antheia_a.jpg"},{"path":"./static/images/Demetrios/Antheia_b.jpg"},{"path":"./static/images/Demetrios/Antheia_b.jpg"}]},{"name":"Belissa","sale":false,"images":[{"path":"./static/images/Demetrios/Belissa_a.jpg"},{"path":"./static/images/Demetrios/Belissa_b.jpg"},{"path":"./static/images/Demetrios/Belissa_c.jpg"}]},{"name":"Bruna","sale":false,"images":[{"path":"./static/images/Demetrios/Bruna_a.jpg"},{"path":"./static/images/Demetrios/Bruna_b.jpg"},{"path":"./static/images/Demetrios/Bruna_c.jpg"}]},{"name":"Byanca","sale":true,"colour":"","size":"UK12","price":"was £1199","salePrice":"now £800","images":[{"path":"./static/images/Demetrios/Byanca_a.jpg"},{"path":"./static/images/Demetrios/Byanca_b.jpg"},{"path":"./static/images/Demetrios/Byanca_b.jpg"}]},{"name":"Constansie","sale":true,"colour":"","size":"UK12","price":"was £1199","salePrice":"now £700","images":[{"path":"./static/images/Demetrios/Constansie_a.jpg"},{"path":"./static/images/Demetrios/Constansie_b.jpg"},{"path":"./static/images/Demetrios/Constansie_b.jpg"}]},{"name":"Dahna","sale":true,"colour":"","size":"UK10","price":"was £1159","salePrice":"now £600","images":[{"path":"./static/images/Demetrios/Dahna_a.jpg"},{"path":"./static/images/Demetrios/Dahna_b.jpg"},{"path":"./static/images/Demetrios/Dahna_b.jpg"}]},{"name":"Elysa","sale":false,"images":[{"path":"./static/images/Demetrios/elysa.jpg"}]},{"name":"Estelle","sale":false,"images":[{"path":"./static/images/Demetrios/Estelle_a.jpg"},{"path":"./static/images/Demetrios/Estelle_b.jpg"},{"path":"./static/images/Demetrios/Estelle_c.jpg"}]},{"name":"Francesca","sale":false,"images":[{"path":"./static/images/Demetrios/Francesca_a.jpg"},{"path":"./static/images/Demetrios/Francesca_b.jpg"},{"path":"./static/images/Demetrios/Francesca_c.jpg"}]},{"name":"Giana","sale":false,"images":[{"path":"./static/images/Demetrios/Giana_a.jpg"},{"path":"./static/images/Demetrios/Giana_b.jpg"},{"path":"./static/images/Demetrios/Giana_c.jpg"}]},{"name":"Giulia","sale":true,"colour":"","size":"UK12","price":"was £1100","salePrice":"now £600","images":[{"path":"./static/images/Demetrios/Giulia_a.jpg"},{"path":"./static/images/Demetrios/Giulia_b.jpg"},{"path":"./static/images/Demetrios/Giulia_b.jpg"}]},{"name":"Helia","sale":false,"images":[{"path":"./static/images/Demetrios/Helia_a.jpg"},{"path":"./static/images/Demetrios/Helia_b.jpg"},{"path":"./static/images/Demetrios/Helia_c.jpg"}]},{"name":"Hera","sale":false,"images":[{"path":"./static/images/Demetrios/Hera_a.jpg"},{"path":"./static/images/Demetrios/Hera_b.jpg"},{"path":"./static/images/Demetrios/Hera_c.jpg"}]},{"name":"Jimena","sale":false,"images":[{"path":"./static/images/Demetrios/Jimena_a.jpg"},{"path":"./static/images/Demetrios/Jimena_b.jpg"},{"path":"./static/images/Demetrios/Jimena_c.jpg"}]},{"name":"Juana","sale":false,"images":[{"path":"./static/images/Demetrios/Juana_a.jpg"},{"path":"./static/images/Demetrios/Juana_b.jpg"}]},{"name":"789","sale":false,"images":[{"path":"./static/images/Demetrios/789.jpg"}]},{"name":"796","sale":false,"images":[{"path":"./static/images/Demetrios/796_a.jpg"},{"path":"./static/images/Demetrios/796_b.jpg"},{"path":"./static/images/Demetrios/796_c.jpg"}]},{"name":"803","sale":false,"images":[{"path":"./static/images/Demetrios/803_a.jpg"},{"path":"./static/images/Demetrios/803_b.jpg"},{"path":"./static/images/Demetrios/803_c.jpg"}]},{"name":"805","sale":false,"images":[{"path":"./static/images/Demetrios/805_a.jpg"},{"path":"./static/images/Demetrios/805_b.jpg"}]},{"name":"luciana","sale":false,"images":[{"path":"./static/images/Demetrios/luciana_a.jpg"},{"path":"./static/images/Demetrios/luciana_b.jpg"}]},{"name":"Lunetta","sale":false,"images":[{"path":"./static/images/Demetrios/Lunetta_a.jpg"},{"path":"./static/images/Demetrios/Lunetta_b.jpg"},{"path":"./static/images/Demetrios/Lunetta_c.jpg"}]},{"name":"Macey","sale":false,"images":[{"path":"./static/images/Demetrios/Macey_a.jpg"},{"path":"./static/images/Demetrios/Macey_b.jpg"},{"path":"./static/images/Demetrios/Macey_c.jpg"}]},{"name":"Milan","sale":false,"images":[{"path":"./static/images/Demetrios/Milan_a.jpg"},{"path":"./static/images/Demetrios/Milan_b.jpg"},{"path":"./static/images/Demetrios/Milan_c.jpg"}]},{"name":"Modesta","sale":false,"images":[{"path":"./static/images/Demetrios/Modesta_a.jpg"},{"path":"./static/images/Demetrios/Modesta_b.jpg"},{"path":"./static/images/Demetrios/Modesta_c.jpg"}]},{"name":"Noa","sale":false,"images":[{"path":"./static/images/Demetrios/Noa_a.jpg"},{"path":"./static/images/Demetrios/Noa_b.jpg"},{"path":"./static/images/Demetrios/Noa_c.jpg"}]},{"name":"Orla","sale":false,"images":[{"path":"./static/images/Demetrios/Orla_a.jpg"},{"path":"./static/images/Demetrios/Orla_b.jpg"},{"path":"./static/images/Demetrios/Orla_c.jpg"}]},{"name":"Selene","sale":true,"colour":"","size":"?","price":"?","salePrice":"?","images":[{"path":"./static/images/Demetrios/Selene_a.jpg"},{"path":"./static/images/Demetrios/Selene_b.jpg"},{"path":"./static/images/Demetrios/Selene_b.jpg"}]},{"name":"Letizia","sale":true,"colour":"","size":"UK10","price":"was £999","salePrice":"now £650","images":[{"path":"./static/images/Demetrios/Letizia_a.jpg"},{"path":"./static/images/Demetrios/Letizia_b.jpg"},{"path":"./static/images/Demetrios/Letizia_b.jpg"}]},{"name":"Serafina","sale":false,"images":[{"path":"./static/images/Demetrios/Serafina_a.jpg"},{"path":"./static/images/Demetrios/Serafina_b.jpg"}]},{"name":"Violet","sale":false,"images":[{"path":"./static/images/Demetrios/Violet_a.jpg"},{"path":"./static/images/Demetrios/Violet_b.jpg"},{"path":"./static/images/Demetrios/Violet_c.jpg"}]},{"name":"Zarah","sale":false,"images":[{"path":"./static/images/Demetrios/Zarah_a.jpg"},{"path":"./static/images/Demetrios/Zarah_b.jpg"},{"path":"./static/images/Demetrios/Zarah_c.jpg"}]}]}]

/***/ }),

/***/ "./static/dress-card.sass":
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/dropdown-button.sass":
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/navigation.sass":
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/overlay.sass":
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/sale-badge.sass":
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/style.sass":
/***/ (function(module, exports) {



/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/salePage.js");


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
//# sourceMappingURL=salePage.js.map