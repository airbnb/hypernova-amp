import { assert } from 'chai';
import { createElement, createElementNoClosingTag } from '../lib/createElement';

describe('createElement', () => {
  it('creates element with no attributes, no children', () => {
    assert.equal(
      createElement('foo'),
      '<foo></foo>',
    );
  });

  it('creates element with attributes, no children', () => {
    assert.equal(
      createElement('foo', { a: 'one', b: 'two' }),
      '<foo a="one" b="two"></foo>',
    );
  });

  it('creates element with children, no attributes', () => {
    assert.equal(
      createElement('foo', null, 'bar'),
      '<foo>bar</foo>',
    );
    assert.equal(
      createElement('foo', undefined, 'bar'),
      '<foo>bar</foo>',
    );
  });

  it('creates element with bare attribute when value is true', () => {
    assert.equal(
      createElement('foo', { xxx: true, a: true, b: 'bar' }, 'baz'),
      '<foo xxx a b="bar">baz</foo>',
    );
  });

  it('removes null and undefined attributes', () => {
    assert.equal(
      createElement('foo', { a: 'bar', b: null, c: undefined, d: 'baz' }),
      '<foo a="bar" d="baz"></foo>',
    );
  });

  it('removes false attributes', () => {
    assert.equal(
      createElement('foo', { a: 'bar', b: false, c: false, d: 'baz' }),
      '<foo a="bar" d="baz"></foo>',
    );
  });
});

describe('createElementNoClosingTag', () => {
  it('creates element with attributes', () => {
    assert.equal(
      createElementNoClosingTag('meta', { name: 'foo', content: 'bar' }),
      '<meta name="foo" content="bar">',
    );
  });
});
