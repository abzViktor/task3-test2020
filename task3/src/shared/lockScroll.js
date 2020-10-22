// const html = document.querySelector('html');
// const body = document.querySelector('body');
const body = document.querySelector('body');

const lockScroll = {
  enable() {
    body.classList.add('lock');
  },
  disable() {
    body.classList.remove('lock');
  },
};

export default lockScroll;
