webpackHotUpdate(7,{

/***/ "./components/RequestRow.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/jimmyxu/Documents/2018_summer_intern/ethereum/solidity-practice/kickstart/components/RequestRow.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var RequestRow =
/*#__PURE__*/
function (_Component) {
  _inherits(RequestRow, _Component);

  function RequestRow() {
    _classCallCheck(this, RequestRow);

    return _possibleConstructorReturn(this, (RequestRow.__proto__ || Object.getPrototypeOf(RequestRow)).apply(this, arguments));
  }

  _createClass(RequestRow, [{
    key: "render",
    value: function render() {
      var Row = __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["e" /* Table */].Row,
          Cell = __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["e" /* Table */].Cell;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      });
    }
  }]);

  return RequestRow;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),

/***/ "./pages/campaigns/requests/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ethereum_campaign__ = __webpack_require__("./ethereum/campaign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_RequestRow__ = __webpack_require__("./components/RequestRow.js");

var _jsxFileName = "/Users/jimmyxu/Documents/2018_summer_intern/ethereum/solidity-practice/kickstart/pages/campaigns/requests/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var RequestIndex =
/*#__PURE__*/
function (_Component) {
  _inherits(RequestIndex, _Component);

  function RequestIndex() {
    _classCallCheck(this, RequestIndex);

    return _possibleConstructorReturn(this, (RequestIndex.__proto__ || Object.getPrototypeOf(RequestIndex)).apply(this, arguments));
  }

  _createClass(RequestIndex, [{
    key: "renderRows",
    value: function renderRows() {
      var _this = this;

      return this.props.requests.map(function (request, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_RequestRow__["default"], {
          key: index,
          request: request,
          address: _this.props.address,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var Header = __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["e" /* Table */].Header,
          Row = __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["e" /* Table */].Row,
          HeaderCell = __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["e" /* Table */].HeaderCell,
          Body = __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["e" /* Table */].Body;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, "Requests"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__routes__["Link"], {
        route: "/campaigns/".concat(this.props.address, "/requests/new"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Button */], {
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, "Add Request"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["e" /* Table */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, "ID"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, "Description"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, "Amount"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, "Recipient"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "Approval Count"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, "Approve"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "Finalize"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, this.renderRows())));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(props) {
        var address, campaign, requestCount, requests;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                campaign = Object(__WEBPACK_IMPORTED_MODULE_5__ethereum_campaign__["a" /* default */])(address);
                _context.next = 4;
                return campaign.methods.getRequestsCount().call();

              case 4:
                requestCount = _context.sent;
                _context.next = 7;
                return Promise.all(Array(parseInt(requestCount)).fill().map(function (elemetn, index) {
                  return campaign.methods.requests(index).call();
                }));

              case 7:
                requests = _context.sent;
                return _context.abrupt("return", {
                  address: address,
                  requests: requests,
                  requestCount: requestCount
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return RequestIndex;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RequestIndex);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/requests")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.eeeec00a9d1cc62d862e.hot-update.js.map