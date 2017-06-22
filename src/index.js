import hypernova from 'hypernova';
import createAmpRender from './createAmpRender';

// eslint-disable-next-line import/prefer-default-export
export const renderReactAmpWithAphrodite = (name, component, ampOptions = {}) => hypernova({
  server() {
    // TODO(gil): The `name` arg is ignored. It historically exists to
    // match the arguments of renderReactWithAphrodite from the hypernova-aphrodite
    // package but should probably be removed
    return createAmpRender(component, ampOptions);
  },
});
