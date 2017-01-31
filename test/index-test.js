import { assert } from 'chai';
import AphroditeComponent from './components/AphroditeComponent';
import { renderReactAmpWithAphrodite } from '../';

describe('aphrodite css rendering', () => {
  let result;
  beforeEach(() => {
    result = renderReactAmpWithAphrodite('AC', AphroditeComponent)({
      children: ['Zack'],
      onPress() { console.log('Clicked'); },
    });
  });

  it('the markup looks good', () => {
    assert.isString(result);

    assert.ok(/html amp/.test(result));
    assert.ok(/style amp-custom/.test(result));
  });
});
