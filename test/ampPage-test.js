import { assert } from 'chai';
import ampPage from '../lib/ampPage';

describe('ampPage', () => {
  it('injects body, style, and options', () => {
    const BODY = 'XXXBODYXXX';
    const STYLE = 'XXXSTYLEXXX';
    const OPTIONS = {
      title: 'LSCLIZJOIWE',
      canonicalUrl: 'OINALKSDMC',
      schemaType: 'AIOJVKJZVDV',
      schemaHeadline: 'ASLDIFJ2OIEFAD',
      schemaDatePublished: 'AOCIMOAISDJF',
    };
    const result = ampPage(BODY, STYLE, OPTIONS);

    assert.isString(result);
    assert.ok(result.includes(BODY));
    assert.ok(result.includes(STYLE));
    assert.ok(result.includes(OPTIONS.title));
    assert.ok(result.includes(OPTIONS.canonicalUrl));
    assert.ok(result.includes(OPTIONS.schemaType));
    assert.ok(result.includes(OPTIONS.schemaHeadline));
    assert.ok(result.includes(OPTIONS.schemaDatePublished));
  });
});
