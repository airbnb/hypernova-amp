import { sanitizeAttrVal, sanitizeElementName, sanitizeJSON } from './sanitize';

export default function ampJson(data, component, type) {
  if (!data || !component) return '';

  return Object.entries(data).map(([key, value]) => (
    `<${sanitizeElementName(component)} id="${sanitizeAttrVal(key)}"${type ? ` type="${sanitizeAttrVal(type)}"` : ''}>
      <script type="application/json">
      ${sanitizeJSON(value)}
      </script>
    </${sanitizeElementName(component)}>`
  )).join('\n');
}
