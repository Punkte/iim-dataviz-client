import gsap, { CSSPlugin, TimelineLite } from 'gsap';

gsap.registerPlugin(CSSPlugin);

export const getEnter = (page) => (el, done) => {
  if (page?.value?.comp?.enter) {
    page.value.comp.enter(el, done);
  } else {
    const tl = new TimelineLite({ onComplete: done });
    tl.from(el, { opacity: 0, duration: 0.7 });
  }
};

export const getLeave = (page) => (el, done) => {
  if (page?.value?.comp?.leave) {
    page.value.comp.leave(el, done);
  } else {
    const tl = new TimelineLite({ onComplete: done });
    tl.to(el, { opacity: 0, duration: 0.3, scale: 0.9 });
  }
};

export const beforeEnterScale = (tl) => (el) => {
  tl.set(el, { scale: 0.9, opacity: 0 });
};

export const enterScalein = (tl) => (el, done) => {
  tl.to(el, {
    scale: 1, opacity: 1, duration: 0.3, onComplete: done,
  });
};

export const leaveScaleOut = (tl) => (el, done) => {
  tl.to(el, {
    scale: 0.9, opacity: 0, duration: 0.3, onComplete: done,
  });
};

export default {};
