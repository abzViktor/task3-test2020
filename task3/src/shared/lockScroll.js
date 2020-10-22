const html = document.querySelector('body');
let scrollPosition = 0;

const lockScroll = {
  enable() {
    scrollPosition = window.pageYOffset;
    html.style.overflow = 'hidden';
    html.style.position = 'fixed';
    html.style.top = `${scrollPosition}px`;
    html.style.width = '100%';
  },
  disable() {
    window.scrollTo(0, scrollPosition);

    html.style.removeProperty('overflow');
    html.style.removeProperty('position');
    html.style.removeProperty('top');
    html.style.removeProperty('width');
    window.scrollTo(0, scrollPosition);
  },
};

export default lockScroll;
