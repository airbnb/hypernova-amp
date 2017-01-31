import React from 'react';
import ReactDOMServer from 'react-dom/server';
import hypernova from 'hypernova';
import { StyleSheetServer } from 'aphrodite/no-important';
import ampPage from './ampPage';

// eslint-disable-next-line import/prefer-default-export
export const renderReactAmpWithAphrodite = (name, component, ampOptions) => hypernova({
  server() {
    return (props) => {
      const { html, css } = StyleSheetServer.renderStatic(() => (
        ReactDOMServer.renderToString(React.createElement(component, props))
      ));

      const style = `<style amp-custom>\n${css.content}\n</style>`;
      return ampPage(html, style, ampOptions);
    };
  },
});
