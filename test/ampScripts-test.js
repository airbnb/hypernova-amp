import { assert } from 'chai';
import ampScripts from '../lib/ampScripts';

describe('ampScripts', () => {
  it('returns empty string when first argument is falsy or empty array', () => {
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
    assert.include(result, SCRIPTS[0].customElement);
    assert.include(result, SCRIPTS[1].customElement);
    assert.include(result, SCRIPTS[0].src);
    assert.include(result, SCRIPTS[1].src);
  });

  it('supports customTemplate', () => {
    assert.equal(
      ampScripts([{
        customTemplate: 'my-template',
        src: 'my.src',
      }]),
      '<script async custom-template="my-template" src="my.src"></script>\n',
    );
  });
});
