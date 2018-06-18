webpackHotUpdate(5,{

/***/ "./pages/salePage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_data_data_navigation__ = __webpack_require__("./static/data/data-navigation.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_data_data_navigation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_data_data_navigation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_DressCard__ = __webpack_require__("./components/DressCard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_DropdownButton__ = __webpack_require__("./components/DropdownButton.js");
var _jsxFileName = "/Users/michaelgriffin/Documents/Clients/Amorae Bridal/02_Projects/Website redesign 2018/03_Development/Amorae/pages/salePage.js";

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
      btnText: 'sort dresses'
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
        btnText: "sorted by size"
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
        btnText: "sorted by price"
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
        btnText: "sorted by name"
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
        className: "main-body page-vs-nav top-content",
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
      }, "blurb"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_DropdownButton__["a" /* default */], {
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
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return SampleSale;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = SampleSale;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SampleSale, "SampleSale", "/Users/michaelgriffin/Documents/Clients/Amorae Bridal/02_Projects/Website redesign 2018/03_Development/Amorae/pages/salePage.js");
  reactHotLoader.register(_default, "default", "/Users/michaelgriffin/Documents/Clients/Amorae Bridal/02_Projects/Website redesign 2018/03_Development/Amorae/pages/salePage.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/salePage")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.5d551bf7fcc271f80bf7.hot-update.js.map