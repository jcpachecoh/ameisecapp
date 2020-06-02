'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _react = _interopRequireWildcard(require('react'));

var _reactRouterDom = require('react-router-dom');


var _reactRedux = require('react-redux');

var _reactGa = _interopRequireDefault(require('react-ga'));

var _history = require('history');



function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _typeof(obj) {
  '@babel/helpers - typeof';
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (_typeof(obj) !== 'object' && typeof obj !== 'function')) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj['default'] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

var HomePage = require('../../pages/HomePage');

var CatalogoPage = (0, _react.lazy)(function() {
  return Promise.resolve().then(function() {
    return _interopRequireWildcard(require('../../pages/CatalogoPage'));
  });
});
var MalePage = (0, _react.lazy)(function() {
  return Promise.resolve().then(function() {
    return _interopRequireWildcard(require('../../pages/MalePage'));
  });
});
var DotacionesPage = (0, _react.lazy)(function() {
  return Promise.resolve().then(function() {
    return _interopRequireWildcard(require('../../pages/DotacionesPage'));
  });
});
var ContactoPage = (0, _react.lazy)(function() {
  return Promise.resolve().then(function() {
    return _interopRequireWildcard(require('../../pages/ContactoPage'));
  });
});
var NoMatchPage = (0, _react.lazy)(function() {
  return Promise.resolve().then(function() {
    return _interopRequireWildcard(require('../../pages/NoMatchPage'));
  });
});
var ProductPage = (0, _react.lazy)(function() {
  return Promise.resolve().then(function() {
    return _interopRequireWildcard(require('../../pages/ProductPage'));
  });
});
var CheckoutPage = (0, _react.lazy)(function() {
  return Promise.resolve().then(function() {
    return _interopRequireWildcard(require('../../pages/CheckoutPage'));
  });
});
var TerminosPage = (0, _react.lazy)(function() {
  return Promise.resolve().then(function() {
    return _interopRequireWildcard(require('../../pages/TerminosPage'));
  });
});
var trackingId = 'UA-35966965-1';

var App = function App() {
  var displayShoppingCar = (0, _reactRedux.useSelector)(function(state) {
    return state.shopCar.showShoppingCar;
  });
  var articles = (0, _reactRedux.useSelector)(function(state) {
    return state.shopCar.articles;
  });
  var articlesLength = articles && articles.length;
  var shouldBeFixed = displayShoppingCar && articlesLength > 0;
  var history = (0, _history.createBrowserHistory)();

  _reactGa['default'].initialize(trackingId, {
    testMode: true,
  });

  (0, _react.useEffect)(function() {
    _reactGa['default'].pageview(window.location.pathname + window.location.search);
  }); // Initialize google analytics page view tracking

  history.listen(function(location) {
    _reactGa['default'].set({
      page: location.pathname,
    }); // Update the user's current page

    _reactGa['default'].pageview(location.pathname); // Record a pageview for the given page
  });
  return /*#__PURE__*/ _react['default'].createElement(
    _reactRouterDom.BrowserRouter,
    null,
    /*#__PURE__*/ _react['default'].createElement(
      _reactRouterDom.Switch,
      null,
      /*#__PURE__*/ _react['default'].createElement(_reactRouterDom.Route, {
        exact: true,
        path: '/',
        component: HomePage,
      }),
      /*#__PURE__*/ _react['default'].createElement(_reactRouterDom.Route, {
        path: '/catalogo',
        component: CatalogoPage,
      }),
      /*#__PURE__*/ _react['default'].createElement(_reactRouterDom.Route, {
        path: '/hombre',
        component: MalePage,
      }),
      /*#__PURE__*/ _react['default'].createElement(_reactRouterDom.Route, {
        path: '/dotaciones',
        component: DotacionesPage,
      }),
      /*#__PURE__*/ _react['default'].createElement(_reactRouterDom.Route, {
        path: '/contacto',
        component: ContactoPage,
      }),
      /*#__PURE__*/ _react['default'].createElement(_reactRouterDom.Route, {
        path: '/checkout',
        component: CheckoutPage,
      }),
      /*#__PURE__*/ _react['default'].createElement(_reactRouterDom.Route, {
        path: '/terminos',
        component: TerminosPage,
      }),
      /*#__PURE__*/ _react['default'].createElement(_reactRouterDom.Route, {
        path: '/producto/:category/:id',
        component: ProductPage,
      }),
      /*#__PURE__*/ _react['default'].createElement(_reactRouterDom.Route, {
        path: '*',
        component: NoMatchPage,
      }),
    ),
  );
};

var _default = App;
exports['default'] = _default;
