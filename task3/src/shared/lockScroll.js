// const html = document.querySelector('html');
// const body = document.querySelector('body');

const lockScroll = {
  disable() {
    console.log('close');
    const body = document.querySelector('body');
    body.style.overflow = 'visible';
  },
};

export default lockScroll;
