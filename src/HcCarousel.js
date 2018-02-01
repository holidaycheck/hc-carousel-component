import * as elix from './elix.js';
const merge = elix.updates.merge;

import HcArrowsMixin from './ArrowDirectionMixin.js';
import HcThumbsPreviewMixin from './ThumbsPreviewMixin.js';

// TODO: round robbing slideshow, after last pic comes first pic again
// TODO: show picture description text at bottom

const Base =
  elix.AriaListMixin(
  HcArrowsMixin(
  elix.ContentItemsMixin(
  elix.DirectionSelectionMixin(
  elix.FocusVisibleMixin(
  elix.KeyboardDirectionMixin(
  elix.KeyboardMixin(
  elix.LanguageDirectionMixin(
  HcThumbsPreviewMixin(
  elix.SingleSelectionMixin(
  elix.SlotContentMixin(
  elix.SwipeDirectionMixin(
  elix.TouchSwipeMixin(
  elix.TrackpadSwipeMixin(
    elix.ElementBase
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

  get [elix.symbols.template]() {
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
