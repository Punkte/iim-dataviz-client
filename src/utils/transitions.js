import gsap, { CSSPlugin, TimelineLite } from 'gsap';

gsap.registerPlugin(CSSPlugin);

export const getEnter = (page) => (el, done) => {
  console.log(page.value);
  if (page?.value?.comp?.enter) {
    page.value.comp.enter(el, done);
  } else {
    const tl = new TimelineLite({ onComplete: done });
    tl.from(el, { opacity: 0, duration: 0.7 });
  }
};

export const getLeave = (page) => (el, done) => {
  console.log(page.value);
  if (page?.value?.comp?.leave) {
    page.value.comp.leave(el, done);
  } else {
    const tl = new TimelineLite({ onComplete: done });
    tl.to(el, { opacity: 0, duration: 0.3, scale: 0.9 });
  }
};

export default {};
