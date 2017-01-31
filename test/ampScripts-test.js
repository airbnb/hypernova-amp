import { assert } from 'chai';
import ampScripts from '../lib/ampScripts';

describe('ampScripts', () => {
  it('returns empty string when first argument is falsy', () => {
    assert.isNotOk(ampScripts(false));
    assert.isNotOk(ampScripts(null));
    assert.isNotOk(ampScripts(undefined));
    assert.isNotOk(ampScripts([]));
  });

  it('injects scripts', () => {
    const SCRIPTS = [
      {
        customElement: 'OINNNLKDSF',
        src: 'VNOAISDMOIA',
      },
      {
        customElement: 'OPIMAONCD',
        src: 'POWEIJAOIDSO',
      },
    ];
    const result = ampScripts(SCRIPTS);

    assert.isString(result);
    assert.ok(result.includes(SCRIPTS[0].customElement));
    assert.ok(result.includes(SCRIPTS[1].customElement));
    assert.ok(result.includes(SCRIPTS[0].src));
    assert.ok(result.includes(SCRIPTS[1].src));
  });
});
