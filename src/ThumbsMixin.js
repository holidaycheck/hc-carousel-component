import * as elix from './elix.js';

const inject = Symbol('inject');

const Base =
  elix.ElementBase;

function ThumbsMixin(Base) {
  return class Thumbs extends Base {
    [inject](template) {
      return `
        <style>
          .thumb {
            margin: .5rem .5rem 0 0;
          }
          .thumb:hover {
            outline: 4px solid #fad73c;
            outline-offset: -4px;
          }
        </style>
        <div id="wrapper">
          ${template}
          <img class="thumb" src="./1-thumb.jpg"/>
          <img class="thumb" src="./2-thumb.jpg"/>
          <img class="thumb" src="./3-thumb.jpg"/>
        </div>
      `;
    }
  }
}
ThumbsMixin.inject = inject;

export {ThumbsMixin};