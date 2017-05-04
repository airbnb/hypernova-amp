import ampScripts from './ampScripts';
import ampJson from './ampJson';

function ampExperimentToken(token) {
  if (!token) return '';
  return `<meta name="amp-experiment-token" content="${token}">\n`;
}

export default (body, style, options = {}) =>
`<!doctype html>
<html amp lang="en">
  <head>
    <meta charset="utf-8">
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
    ${ampScripts(options.scripts)
    }${ampExperimentToken(options.ampExperimentToken)
    }<title>${options.title}</title>
    <link rel="canonical" href="${options.canonicalUrl}" />
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <script type="application/ld+json">
      {
        "@context": "http://schema.org",
        "@type": "${options.schemaType}",
        "headline": "${options.schemaHeadline}",
        "datePublished": "${options.schemaDatePublished}",
        "image": [
          "${options.schemaImage}"
        ]
      }
    </script>
    <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
    ${style}
  </head>
  <body>
  ${ampJson(options.ampState, 'amp-state')}
  ${ampJson(options.ampAnalytics, 'amp-analytics')}
  ${body}
  </body>
</html>
`;
