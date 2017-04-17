export default function ampJson(data, component) {
  if (!data || !component) return '';
  return Object.entries(data).map(([key, value]) => (
    `<${component} id="${key}">
      <script type="application/json">
      ${JSON.stringify(value)}
      </script>
    </${component}>`
  )).join('\n');
}
