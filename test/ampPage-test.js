import { assert } from 'chai';
import ampPage from '../lib/ampPage';

describe('ampPage', () => {
  let body;
  let style;
  let options;

  beforeEach(() => {
    body = 'XXXBODYXXX';
    style = 'XXXSTYLEXXX';
    options = {
      title: 'LSCLIZJOIWE',
      canonicalUrl: 'OINALKSDMC',
      ampExperimentToken: 'kll2j3lkj23lj',
      jsonSchema: {
        '@context': 'http://schema.org',
        '@type': 'AIOJVKJZVDV',
        headline: 'ASLDIFJ2OIEFAD',
        datePublished: 'AOCIMOAISDJF',
      },
    };
  });

  it('injects body, style, and options', () => {
    const result = ampPage(body, style, options);

    assert.isString(result);
    assert.include(result, body, 'result includes body');
    assert.include(result, style, 'result includes style');
    assert.include(result, options.title, 'result includes title');
    assert.include(result, options.canonicalUrl, 'result includes canonicalUrl');
    assert.include(result, options.jsonSchema['@context'], 'result includes @context');
    assert.include(result, options.jsonSchema['@type'], 'result includes @type');
    assert.include(result, options.jsonSchema.headline, 'result includes headline');
    assert.include(result, options.jsonSchema.datePublished, 'result includes datePublished');
    assert.include(result, options.ampExperimentToken, 'result includes ampExperimentToken');
  });

  it('warns about missing JSON Schema', () => {
    const result = ampPage(body, style, { ...options, jsonSchema: undefined });
    assert.include(result, '<!-- WARNING: Missing JSON Schema -->');
  });
});
