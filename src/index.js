import React from 'react';
import ReactDOMServer from 'react-dom/server';
import hypernova from 'hypernova';
import { StyleSheetServer } from 'aphrodite/no-important';
import ampPage from './ampPage';

// eslint-disable-next-line import/prefer-default-export
export const renderReactAmpWithAphrodite = (name, component, ampOptions = {}) => hypernova({
  server() {
    return (props) => {
      const { html, css } = StyleSheetServer.renderStatic(() => (
        ReactDOMServer.renderToString(React.createElement(component, props))
      ));

      const prependCSS = ampOptions.prependCSS || '';
      const appendCSS = ampOptions.appendCSS || '';
      const style = `<style amp-custom>\n${prependCSS}${css.content}${appendCSS}\n</style>`;

      let result = ampPage(html, style, ampOptions);

      if (ampOptions.enableAmpBind) {
        // transform: amp-bind-attribute-name=   -->   [attribute-name]=
        result = result.replace(/amp-bind-([\w-]+)=/g, '[$1]=');
      }

      if (ampOptions.enableRemoveIs) {
        // remove: is="true"
        result = result.replace(/is="true"/g, '');
      }

      return result;
    };
  },
});
