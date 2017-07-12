import { assert } from 'chai';
import {
  sanitizeElementName,
  sanitizeAttr,
  sanitizeAttrVal,
  sanitizeJSON,
  sanitizeCSS,
  sanitizeMarkup,
} from '../lib/sanitize';

describe('sanitize prevents XSS', () => {
  it('sanitizeElementName', () => {
    const maliciousScript = '<script>malicious script</script>';
    assert.notOk(sanitizeElementName(maliciousScript).includes(maliciousScript));
  });

  it('sanitizeAttr', () => {
    const maliciousScript = '<script>malicious script</script>';
    assert.notOk(sanitizeAttr(maliciousScript).includes(maliciousScript));
  });

  it('sanitizeAttrVal', () => {
    const maliciousScript = '<script>malicious script</script>';
    assert.notOk(sanitizeAttrVal(maliciousScript).includes(maliciousScript));
  });

  describe('sanitizeJSON', () => {
    it('santizes', () => {
      const maliciousScript = '<script>malicious script</script>';
      assert.notOk(sanitizeJSON(maliciousScript).includes(maliciousScript));
    });

    it('handles undefined', () => {
      assert.equal(sanitizeJSON(undefined), undefined);
    });

    it('handles null', () => {
      assert.equal(sanitizeJSON(null), 'null');
    });

    it('handles false', () => {
      assert.equal(sanitizeJSON(false), 'false');
    });

    it('handles 0', () => {
      assert.equal(sanitizeJSON(0), '0');
    });
  });

  it('sanitizeCSS', () => {
    const maliciousScript = '<style amp-custom></style><script>malicious script</script>';
    const result = sanitizeCSS(maliciousScript);
    assert.notOk(result.includes('<script>malicious script</script>'));
    assert.ok(result.includes('<style amp-custom>'));
  });

  it('sanitizeMarkup', () => {
    const maliciousScript = '<script>malicious script</script>';
    assert.notOk(sanitizeMarkup(maliciousScript).includes(maliciousScript));
  });
});
