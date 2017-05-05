import { sanitizeAttrVal } from './sanitize';

export default function ampScripts(scripts) {
  if (!scripts) return '';
  return scripts.reduce((acc, { customElement, src }) => (
    `${acc}<script async custom-element="${sanitizeAttrVal(customElement)}" src="${sanitizeAttrVal(src)}"></script>\n`
  ), '');
}
