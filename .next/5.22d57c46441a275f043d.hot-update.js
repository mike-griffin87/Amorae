webpackHotUpdate(5,{

/***/ "./components/DropdownButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_dropdown_button_sass__ = __webpack_require__("./static/dropdown-button.sass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_dropdown_button_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_dropdown_button_sass__);
var _jsxFileName = "/Users/michaelgriffin/Documents/Clients/Amorae Bridal/02_Projects/Website redesign 2018/03_Development/Amorae/components/DropdownButton.js";

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
    key: "handlePriceClick",
    value: function handlePriceClick() {
      console.log('Price');
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
          lineNumber: 22
        }
      }, this.props.btnText, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "".concat(this.props.btnIcon, " btn-icon"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "".concat(this.state.showing ? 'is-showing' : 'null', " sort-dropdown"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        onClick: this.props.sizeClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, "sort by size"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        onClick: this.props.priceClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "sort by price"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        onClick: this.props.nameClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, "sort by name")));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return DropdownButton;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = DropdownButton;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DropdownButton, "DropdownButton", "/Users/michaelgriffin/Documents/Clients/Amorae Bridal/02_Projects/Website redesign 2018/03_Development/Amorae/components/DropdownButton.js");
  reactHotLoader.register(_default, "default", "/Users/michaelgriffin/Documents/Clients/Amorae Bridal/02_Projects/Website redesign 2018/03_Development/Amorae/components/DropdownButton.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.22d57c46441a275f043d.hot-update.js.map