import { assert } from 'chai';
import ampJson from '../lib/ampJson';

describe('ampJson', () => {
  it('returns empty string when first argument is falsy or empty object', () => {
    assert.isNotOk(ampJson(false, 'amp-state'));
    assert.isNotOk(ampJson(null, 'amp-state'));
    assert.isNotOk(ampJson(undefined, 'amp-state'));
    assert.isNotOk(ampJson({}, 'amp-state'));
  });

  it('injects state', () => {
    const STATE = {
      foo: {
        one: 'aaa',
        two: 111,
      },
      bar: {
        three: 'bbb',
        four: 222,
      },
    };
    const result = ampJson(STATE, 'amp-state');

    assert.isString(result);
    assert.ok(result.includes(JSON.stringify(STATE.foo)));
    assert.ok(result.includes(JSON.stringify(STATE.bar)));
  });
});
