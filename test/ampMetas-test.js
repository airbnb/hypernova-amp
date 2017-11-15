import { assert } from 'chai';
import ampMetas from '../lib/ampMetas';

describe('ampMetas', () => {
  it('returns empty string when first argument is falsy or empty array', () => {
    assert.isNotOk(ampMetas(false));
    assert.isNotOk(ampMetas(null));
    assert.isNotOk(ampMetas(undefined));
    assert.isNotOk(ampMetas([]));
  });

  it('injects metas', () => {
    const METAS = [
      {
        name: 'foo',
        content: 'bar',
      },
      {
        name: 'bar',
        content: 'foo',
      },
    ];
    const result = ampMetas(METAS);

    assert.isString(result);
    assert.include(result, '<meta name="foo" content="bar">');
    assert.include(result, '<meta name="bar" content="foo">');
  });
});
