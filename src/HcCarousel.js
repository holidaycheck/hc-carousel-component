import * as symbols from '../node_modules/elix/src/symbols.js';
import { merge } from '../node_modules/elix/src/updates.js';

import ElementBase from '../node_modules/elix/src/ElementBase.js';
import AriaListMixin from '../node_modules/elix/src/AriaListMixin.js';
import ContentItemsMixin from '../node_modules/elix/src/ContentItemsMixin.js';
import DirectionSelectionMixin from '../node_modules/elix/src/DirectionSelectionMixin.js';
import FocusVisibleMixin from '../node_modules/elix/src/FocusVisibleMixin.js';
import KeyboardDirectionMixin from '../node_modules/elix/src/KeyboardDirectionMixin.js';
import KeyboardMixin from '../node_modules/elix/src/KeyboardMixin.js';
import LanguageDirectionMixin from '../node_modules/elix/src/LanguageDirectionMixin.js';
import SingleSelectionMixin from '../node_modules/elix/src/SingleSelectionMixin.js';
import SlotContentMixin from '../node_modules/elix/src/SlotContentMixin.js';
import SwipeDirectionMixin from '../node_modules/elix/src/SwipeDirectionMixin.js';
import TouchSwipeMixin from '../node_modules/elix/src/TouchSwipeMixin.js';
import TrackpadSwipeMixin from '../node_modules/elix/src/TrackpadSwipeMixin.js';

import HcArrowsMixin from './ArrowDirectionMixin.js';
import HcThumbsPreviewMixin from './ThumbsPreviewMixin.js';

// needed for the <elix-sliding-viewport> etc.
import '../node_modules/elix/src/SlidingViewport.js';

// TODO: round robbing slideshow, after last pic comes first pic again
// TODO: show picture description text at bottom

const Base =
  AriaListMixin(
  HcArrowsMixin(
  ContentItemsMixin(
  DirectionSelectionMixin(
  FocusVisibleMixin(
  KeyboardDirectionMixin(
  KeyboardMixin(
  LanguageDirectionMixin(
  HcThumbsPreviewMixin(
  SingleSelectionMixin(
  SlotContentMixin(
  SwipeDirectionMixin(
  TouchSwipeMixin(
  TrackpadSwipeMixin(
    ElementBase
  ))))))))))))));

class HcCarousel extends Base {

  componentDidMount() {
    if (super.componentDidMount) { super.componentDidMount(); }
    this.$.viewport.addEventListener('selected-index-changed', () => {
      /** @type {any} */
      const viewport = this.$.viewport;
      this.selectedIndex = viewport.selectedIndex;
    });
  }

  get defaultState() {
    return Object.assign({}, super.defaultState, {
      selectionRequired: true
    });
  }

  get updates() {
    return merge(super.updates, {
      $: {
        viewport: {
          selectedIndex: this.state.selectedIndex,
          swipeFraction: this.state.swipeFraction
        },
        arrowIconLeft: {style: {height: 'auto', width: 'auto'}},
        arrowIconRight: {style: {height: 'auto', width: 'auto'}},
      }
    });
  }

  get [symbols.template]() {
    return `
      <style>
        :host {
          display: flex;
          overflow: hidden;
          position: relative;
        }

        elix-sliding-viewport {
          flex: 1;
        }
      </style>
      ${HcArrowsMixin.wrap(
        HcThumbsPreviewMixin.wrap(
        `<elix-sliding-viewport id="viewport">
          <slot></slot>
        </elix-sliding-viewport>`
      ))}
    `;
  }
}

customElements.define('hc-carousel', HcCarousel);
