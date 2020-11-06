import { throttle } from 'throttle-debounce';

let isScrollActive;

export default (func) => {
  if (window.innerWidth <= 830 && isScrollActive) {
    window.removeEventListener('scroll', throttle(200, func));
    isScrollActive = false;
  }
  if (window.innerWidth > 830 && !isScrollActive) {
    window.addEventListener('scroll', throttle(200, func));
    isScrollActive = true;
  }
};
