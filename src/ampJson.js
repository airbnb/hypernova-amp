import { createElement } from './createElement';

export default function ampJson(data, component, type) {
  if (!data || !component) return '';

  return Object.entries(data).map(([id, value]) => createElement(
    component,
    {
      id,
      type,
    },
    createElement('script', { type: 'application/json' }, value),
  )).join('\n');
}
