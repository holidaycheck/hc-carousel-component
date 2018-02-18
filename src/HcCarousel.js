import * as elix from './elix.js';

// TODO: show picture description text at bottom
// TODO: highlight selected thumb

import '../src/HcArrowButton.js';
import {ThumbsMixin} from '../src/ThumbsMixin.js';

const Base =
  elix.ArrowDirectionMixin(
  ThumbsMixin(
    elix.SlidingPages
  ));

// Shows how a carousel subclass can define custom tags for the arrows and dots.
class HcCarousel extends Base {
  get defaultState() {
    return Object.assign({}, super.defaultState, {
      selectionWraps: true,
    });
  }
  get [elix.symbols.template]() {
    return this[ThumbsMixin.inject](
      this[elix.ArrowDirectionMixin.inject](
        super[elix.symbols.template]
    ));
  }
  get defaults() {
    const base = super.defaults || {};
    return Object.assign({}, base, {
      tags: Object.assign({}, base.tags, {
        arrowButton: 'hc-arrow-button',
      })
    });
  }
  get updates() {
    return elix.updates.merge(super.updates, {
      $: {
        arrowButtonLeft: {style:{
          'align-items': 'center',
        }},
        arrowButtonRight: {style:{
          'align-items': 'center',
        }},
        arrowIconLeft: {style: {
          height: 'auto',
          width: 'auto',
        }},
        arrowIconRight: {style: {
          height: 'auto',
          width: 'auto',
        }},
      },
    });
  }
}
customElements.define('hc-carousel', HcCarousel);
