import { sanitizeAttr, sanitizeAttrVal, sanitizeElementName, sanitizeJSON } from './sanitize';

function generateAttributesString(attributes) {
  return attributes ? ` ${Object.entries(attributes).map(([attr, val]) => {
    if (val == null) return '';
    if (val === true) return sanitizeAttr(attr);
    if (val === false) { return ''; }
    return `${sanitizeAttr(attr)}="${sanitizeAttrVal(val)}"`;
  }).filter(Boolean).join(' ')}` : '';
}

export function createElement(element, attributes, children = '') {
  const sanitizedElement = sanitizeElementName(element);
  const attributesString = generateAttributesString(attributes);

  return `<${sanitizedElement}${attributesString}>${
    typeof children === 'string' ? children : sanitizeJSON(children)
  }</${sanitizedElement}>`;
}

export function createElementNoClosingTag(element, attributes) {
  const sanitizedElement = sanitizeElementName(element);
  const attributesString = generateAttributesString(attributes);

  return `<${sanitizedElement}${attributesString}>`;
}
