import { assert } from 'chai';
import {
  sanitizeElementName,
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

  it('sanitizeAttrVal', () => {
    const maliciousScript = '<script>malicious script</script>';
    assert.notOk(sanitizeAttrVal(maliciousScript).includes(maliciousScript));
  });

  it('sanitizeJSON', () => {
    const maliciousScript = '<script>malicious script</script>';
    assert.notOk(sanitizeJSON(maliciousScript).includes(maliciousScript));
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
