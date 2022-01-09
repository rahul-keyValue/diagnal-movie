import {
  useEffect
} from 'react';

const options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 0.15
}
let callbackTracker = new WeakMap();

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (callbackTracker.get(entry.target)) {
      let callback = callbackTracker.get(entry.target);
      if (entry.isIntersecting) {
        callback();
      }
    }
  });
}, options);



const useImageIntersection = (element, callback) => {

  useEffect(() => {
    if (element.current) {
      callbackTracker.set(element.current, callback);
      observer.observe(element.current);
    }
    return () => {
      observer.unobserve(element?.current);
    }
  }, [])


};

export default useImageIntersection;