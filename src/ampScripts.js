import { createElement } from './createElement';

export default function ampScripts(scripts) {
  if (!scripts) return '';
  const result = scripts.map(({ customElement, customTemplate, src }) => createElement('script', {
    async: true,
    'custom-element': customElement,
    'custom-template': customTemplate,
    src,
  })).join('\n');
  return result ? `${result}\n` : '';
}
