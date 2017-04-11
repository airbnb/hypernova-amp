import { assert } from 'chai';
import ampState from '../lib/ampState';

describe('ampState', () => {
  it('returns empty string when first argument is falsy or empty object', () => {
    assert.isNotOk(ampState(false));
    assert.isNotOk(ampState(null));
    assert.isNotOk(ampState(undefined));
    assert.isNotOk(ampState({}));
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
    const result = ampState(STATE);

    assert.isString(result);
    assert.ok(result.includes(JSON.stringify(STATE.foo)));
    assert.ok(result.includes(JSON.stringify(STATE.bar)));
  });
});
