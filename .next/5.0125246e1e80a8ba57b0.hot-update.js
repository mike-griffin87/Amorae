webpackHotUpdate(5,{

/***/ "./node_modules/css-loader/lib/css-base.js":
false,

/***/ "./pages/ourDesigners.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_DesignerCard__ = __webpack_require__("./components/DesignerCard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_DressCounter__ = __webpack_require__("./components/DressCounter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_data_data_navigation__ = __webpack_require__("./static/data/data-navigation.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_data_data_navigation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__static_data_data_navigation__);
var _jsxFileName = "/Users/michaelgriffin/Documents/Clients/Amorae Bridal/02_Projects/Website redesign 2018/03_Development/Amorae/pages/ourDesigners.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var ourDesigners =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ourDesigners, _React$Component);

  function ourDesigners() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, ourDesigners);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = ourDesigners.__proto__ || Object.getPrototypeOf(ourDesigners)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "sale", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(id) {
        var saleDresses = [];

        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_4__static_data_data_navigation___default.a[id].dresses.length; i++) {
          saleDresses.push(__WEBPACK_IMPORTED_MODULE_4__static_data_data_navigation___default.a[id].dresses[i].sale);
        }

        var saleFiltered = saleDresses.filter(function (dress) {
          return dress == true;
        });
        return saleFiltered.length;
      }
    }), _temp));
  }

  _createClass(ourDesigners, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
        theme: "dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "main-body page-vs-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, "Our Designers"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vestibulum id ligula porta felis euismod semper. Donec sed odio dui."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "designer-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_4__static_data_data_navigation___default.a.map(function (d, id) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_DesignerCard__["a" /* default */], {
          key: id,
          title: d.title,
          dresses: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_DressCounter__["a" /* default */], {
            id: id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            }
          }),
          link: d.link,
          bg: d.bg,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        });
      }))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return ourDesigners;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = ourDesigners;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ourDesigners, "ourDesigners", "/Users/michaelgriffin/Documents/Clients/Amorae Bridal/02_Projects/Website redesign 2018/03_Development/Amorae/pages/ourDesigners.js");
  reactHotLoader.register(_default, "default", "/Users/michaelgriffin/Documents/Clients/Amorae Bridal/02_Projects/Website redesign 2018/03_Development/Amorae/pages/ourDesigners.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/ourDesigners")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.0125246e1e80a8ba57b0.hot-update.js.map