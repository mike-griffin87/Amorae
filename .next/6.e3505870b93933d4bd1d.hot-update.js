webpackHotUpdate(6,{

/***/ "./components/Navigation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_data_data_navigation__ = __webpack_require__("./static/data/data-navigation.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_data_data_navigation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_data_data_navigation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Overlay__ = __webpack_require__("./components/Overlay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_BookAppointment__ = __webpack_require__("./components/BookAppointment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_DressCounter__ = __webpack_require__("./components/DressCounter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_navigation_sass__ = __webpack_require__("./static/navigation.sass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_navigation_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__static_navigation_sass__);
var _jsxFileName = "/Users/michaelgriffin/Documents/Clients/Amorae Bridal/02_Projects/Website redesign 2018/03_Development/Amorae/components/Navigation.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
          return _this2.closeNav();
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
        }, d.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          className: "subtext",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        }, "\n                                ".concat(d.dresses.length === 1 ? d.dresses.length + ' Dress' : d.dresses.length + ' Dresses', " | \n                                ").concat(_this2.sale(id) === 1 ? _this2.sale(id) + ' Sale Dress' : _this2.sale(id) + ' Sale Dresses')), console.log(_this2.sale(id))));
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/salePage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, "Sample Sale"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        onClick: function onClick() {
          return _this2.openAppointment();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, "Book an Appointment")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, "Contact us"))))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Navigation;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = Navigation;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Navigation, "Navigation", "/Users/michaelgriffin/Documents/Clients/Amorae Bridal/02_Projects/Website redesign 2018/03_Development/Amorae/components/Navigation.js");
  reactHotLoader.register(_default, "default", "/Users/michaelgriffin/Documents/Clients/Amorae Bridal/02_Projects/Website redesign 2018/03_Development/Amorae/components/Navigation.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.e3505870b93933d4bd1d.hot-update.js.map