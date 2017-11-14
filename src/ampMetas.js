import { createElementNoClosingTag } from './createElement';

export default function ampMetas(metas) {
  if (!metas) return '';
  const result = metas.map(
    meta => createElementNoClosingTag('meta', meta),
  ).join('\n');
  return result ? `${result}\n` : '';
}
