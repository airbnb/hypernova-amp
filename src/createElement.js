import { sanitizeAttr, sanitizeAttrVal, sanitizeElementName, sanitizeJSON } from './sanitize';

export default function createElement(element, attributes, children = '') {
  const sanitizedElement = sanitizeElementName(element);
  const attributesString = attributes ? ` ${Object.entries(attributes).map(([attr, val]) => {
    if (val == null) return '';
    if (val === true) return sanitizeAttr(attr);
    if (val === false) { return ''; }
    return `${sanitizeAttr(attr)}="${sanitizeAttrVal(val)}"`;
  }).filter(Boolean).join(' ')}` : '';

  return `<${sanitizedElement}${attributesString}>${
    typeof children === 'string' ? children : sanitizeJSON(children)
  }</${sanitizedElement}>`;
}
