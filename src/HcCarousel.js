import * as elix from './elix.js';
const merge = elix.updates.merge;

// TODO: round robbing slideshow, after last pic comes first pic again
// TODO: show picture description text at bottom

import '../src/HcArrowButton.js';

const Base =
  elix.ArrowDirectionMixin(
  elix.CustomTagsMixin(
    elix.SlidingPages
  ));

// Shows how a carousel subclass can define custom tags for the arrows and dots.
class HcCarousel extends Base {
  get defaultState() {
    return Object.assign({}, super.defaultState, {
      selectionWraps: true,
    });
  }
  componentDidMount() {
    if (super.componentDidMount) { super.componentDidMount(); }
    [...this.$.wrapper.getElementsByClassName('thumb')].map((el, idx) => el.addEventListener('mouseover', () => {
      this.selectedIndex = idx;
    }));
  }
  get [elix.symbols.template]() {
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
        ${this[elix.ArrowDirectionMixin.inject](
          super[elix.symbols.template]
        )}
        <img class="thumb" src="./1-thumb.jpg"/>
        <img class="thumb" src="./2-thumb.jpg"/>
        <img class="thumb" src="./3-thumb.jpg"/>
      </div>
    `;
  }
  get tags() {
    return Object.assign({}, super.tags, {
      arrowButton: 'hc-arrow-button',
      // pageDot: 'hc-page-dot'
    });
  }
}
customElements.define('hc-carousel', HcCarousel);
