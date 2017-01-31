Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _hypernova = require('hypernova');

var _hypernova2 = _interopRequireDefault(_hypernova);

var _noImportant = require('aphrodite/no-important');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ampPage = function ampPage(body, style) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return '<!doctype html>\n<html amp lang="en">\n  <head>\n    <meta charset="utf-8">\n    <script async src="https://cdn.ampproject.org/v0.js"></script>\n    <title>' + String(options.title) + '</title>\n    <link rel="canonical" href="' + String(options.canonicalUrl) + '" />\n    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">\n    <script type="application/ld+json">\n      {\n        "@context": "http://schema.org",\n        "@type": "' + String(options.schemaType) + '",\n        "headline": "' + String(options.schemaHeadline) + '",\n        "datePublished": "' + String(options.schemaDatePublished) + '",\n        "image": [\n          "' + String(options.schemaImage) + '"\n        ]\n      }\n    </script>\n    <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>\n    ' + String(style) + '\n  </head>\n  <body>\n  ' + String(body) + '\n  </body>\n</html>\n';
};

exports['default'] = function (name, component, ampOptions) {
  return (0, _hypernova2['default'])({
    server: function () {
      function server() {
        return function (props) {
          var _StyleSheetServerNoIm = _noImportant.StyleSheetServer.renderStatic(function () {
            return _server2['default'].renderToString(_react2['default'].createElement(component, props));
          }),
              html = _StyleSheetServerNoIm.html,
              css = _StyleSheetServerNoIm.css;

          var style = '<style amp-custom>\n' + String(css.content) + '\n</style>';
          return ampPage(html, style, ampOptions);
        };
      }

      return server;
    }()
  });
};