import sanitizeHtml from 'sanitize-html';

const clean = dirty => sanitizeHtml(dirty, {
  allowedTags: [],
  allowedClasses: [],
});

export const sanitizeElementName = clean;
export const sanitizeAttrVal = clean;
export const sanitizeAttr = clean;
export const sanitizeJSON = (dirty) => {
  const result = JSON.stringify(dirty);
  return result && result.replace(/</g, '\\u003c');
};
export const sanitizeMarkup = clean;

export const sanitizeCSS = dirty => sanitizeHtml(dirty, {
  allowedTags: ['style'],
  allowedAttributes: {
    style: ['amp-custom'],
  },
  allowedClasses: [],
});
