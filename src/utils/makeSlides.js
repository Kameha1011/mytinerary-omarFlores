/**
 * Generates an array of slides from a given list of items, where each slide
 * contains a specified number of items.
 *
 * @param {Array} items - The list of items to create slides from.
 * @param {number} groupLength - The number of items to include in each slide.
 * @return {Array} - An array of slides, where each slide contains a specified
 * number of items.
 */
export const makeSlides = (items, groupLength) => {
    let slides = [];
    for (let i = groupLength; i <= items.length; i += groupLength) {
      const slide = items.slice(i - groupLength, i);
      slides.push(slide);
    }
    return slides;
}