Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderReactWithAphrodite = exports.renderReactAmpWithAphrodite = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _hypernova = require('hypernova');

var _hypernova2 = _interopRequireDefault(_hypernova);

var _aphrodite = require('aphrodite');

var _renderReactAmpWithAphrodite2 = require('./renderReactAmpWithAphrodite');

var _renderReactAmpWithAphrodite3 = _interopRequireDefault(_renderReactAmpWithAphrodite2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var renderReactAmpWithAphrodite = exports.renderReactAmpWithAphrodite = _renderReactAmpWithAphrodite3['default'];

var renderReactWithAphrodite = exports.renderReactWithAphrodite = function renderReactWithAphrodite(name, component) {
  return (0, _hypernova2['default'])({
    server: function () {
      function server() {
        return function (props) {
          var _StyleSheetServer$ren = _aphrodite.StyleSheetServer.renderStatic(function () {
            return _server2['default'].renderToString(_react2['default'].createElement(component, props));
          }),
              html = _StyleSheetServer$ren.html,
              css = _StyleSheetServer$ren.css;

          var style = '<style data-aphrodite>' + String(css.content) + '</style>';
          var markup = (0, _hypernova.serialize)(name, html, props);
          var classNames = (0, _hypernova.toScript)('aphrodite-css', name, css.renderedClassNames);

          return style + '\n' + String(markup) + '\n' + String(classNames);
        };
      }

      return server;
    }(),
    client: function () {
      function client() {
        var classNames = (0, _hypernova.fromScript)('aphrodite-css', name);
        if (classNames) _aphrodite.StyleSheet.rehydrate(classNames);

        var _load = (0, _hypernova.load)(name),
            node = _load.node,
            data = _load.data;

        if (node) {
          var element = _react2['default'].createElement(component, data);
          _reactDom2['default'].render(element, node);
        }

        return component;
      }

      return client;
    }()
  });
};