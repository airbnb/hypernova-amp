export default function ampScripts(scripts) {
  if (!scripts) return '';
  return scripts.reduce((acc, { customElement, src }) => (
    `${acc}<script async custom-element="${customElement}" src="${src}"></script>\n`
  ), '');
}
