import { assert } from 'chai';
import AphroditeComponent from './components/AphroditeComponent';
import { renderReactAmpWithAphrodite } from '../';

describe('index', () => {
  describe('without options', () => {
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

  describe('with options', () => {
    describe('prependCSS and appendCSS options', () => {
      const appendCSS = 'xyz123';
      const prependCSS = 'abc789';
      let result;
      beforeEach(() => {
        result = renderReactAmpWithAphrodite('AC', AphroditeComponent, {
          appendCSS,
          prependCSS,
        })({
          children: ['Zack'],
          onPress() { console.log('Clicked'); },
        });
      });

      it('appends and prepends css', () => {
        const aIndex = result.indexOf(appendCSS);
        const pIndex = result.indexOf(prependCSS);
        assert.ok(pIndex < aIndex);
        assert.ok(pIndex > 0);
        assert.ok(aIndex > 0);
      });
    });
  });
});
