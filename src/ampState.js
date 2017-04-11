export default function ampState(data) {
  if (!data) return '';
  return Object.entries(data).map(([key, value]) => (
    `<amp-state id="${key}">
      <script type="application/json">
      ${JSON.stringify(value)}
      </script>
    </amp-state>`
  )).join('\n');
}
