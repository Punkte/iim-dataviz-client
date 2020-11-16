/* eslint-disable no-param-reassign */
/**
 * 8bit function
 * @param {HTMLElement} canvas Canvas HTMLElement
 * @param {Image} image Image javascript object
 * @param {Number} scale 0-100
 */
export default function eightBitify(canvas, image, s) {
  const scale = s * 0.01;

  canvas.style.width = '100%';
  // canvas.style.height = '100%';

  canvas.width = image.width;
  canvas.height = image.height;

  const scaledWidth = canvas.width * scale;
  const scaledHeight = canvas.height * scale;

  const ctx = canvas.getContext('2d');

  ctx.mozImageSmoothingEnabled = false;
  ctx.webkitImageSmoothingEnabled = false;
  ctx.imageSmoothingEnabled = false;

  ctx.drawImage(image, 0, 0, scaledWidth, scaledHeight);
  ctx.drawImage(canvas, 0, 0, scaledWidth, scaledHeight, 0, 0, image.width, image.height);
}
