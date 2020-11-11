/* global Image */

export const validateNumberMask = (value) => {
  let error = '';
  if (value === '+38(0__)___-__-__' || !value) {
    error = '';
  } else if (!value.match(/^\+38\(0\d{2}\)\d{3}-\d{2}-\d{2}$/) && !value.match(/^\+\d{10}/)) {
    error = 'Number should be in +38(0XX)XXX-XX-XX format!';
  }
  return error;
};

export const validateLoadedImage = (target) => {
  const { URL } = window;
  const img = new Image();
  const file = target.files[0];
  img.src = URL.createObjectURL(file);
  return new Promise((resolve) => {
    img.onload = function () {
      if (img.width < 70 || img.height < 70) {
        resolve(false);
      }
    };
  });
};

export const validateImage = (target) => {
  if (target.files[0].type !== 'image/jpeg' && target.files[0].type !== 'image/jpg') {
    return false;
  }
  if (target.files[0].size > 5e+6) {
    return false;
  }
  return true;
};
