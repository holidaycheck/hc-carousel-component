import * as elix from './elix.js';
const merge = elix.updates.merge;

// TODO: round robbing slideshow, after last pic comes first pic again
// TODO: show picture description text at bottom

import '../src/HcArrowButton.js';
import {ThumbsMixin} from '../src/ThumbsMixin.js';

const Base =
  elix.ArrowDirectionMixin(
  elix.CustomTagsMixin(
  ThumbsMixin(
    elix.SlidingPages
  )));

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
    return this[ThumbsMixin.inject](
      this[elix.ArrowDirectionMixin.inject](
        super[elix.symbols.template]
    ));
  }
  get tags() {
    return Object.assign({}, super.tags, {
      arrowButton: 'hc-arrow-button',
      // pageDot: 'hc-page-dot'
    });
  }
}
customElements.define('hc-carousel', HcCarousel);
