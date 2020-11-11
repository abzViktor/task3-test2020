export const trimDoubleSpaces = (value) => {
  const newValue = value.replace(/\s{2,}/g, ' ');
  return newValue;
};

export const trimSpaces = (value) => value.replace(/\s+/g, '');

export const trimSideSpaces = (value) => value.replace(/^\s+|\s+$|^\n+|\n+$/g, '');
