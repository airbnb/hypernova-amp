function sanitize(component) {
  if (!component) {
    return component;
  }

  return encodeURIComponent(component);
}

export default function ampJson(data, component, type) {
  if (!data || !component) return '';

  return Object.entries(data).map(([key, value]) => (
    `<${sanitize(component)} id="${sanitize(key)}"${type ? ` type="${sanitize(type)}"` : ''}>
      <script type="application/json">
      ${JSON.stringify(value)}
      </script>
    </${sanitize(component)}>`
  )).join('\n');
}
