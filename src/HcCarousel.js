import symbols from '../node_modules/elix/src/symbols.js';
import { merge } from '../node_modules/elix/src/updates.js';
import SlidingCarousel from '../node_modules/elix/src/SlidingCarousel.js';
import HcArrowsMixin from './ArrowDirectionMixin';
import PageDotsMixin from '../node_modules/elix/src/PageDotsMixin.js';

// needed for the <elix-sliding-viewport> etc.
import ArrowDirectionButton from './ArrowDirectionButton';
import SlidingViewport from '../node_modules/elix/src/SlidingViewport.js';

class HcCarousel extends SlidingCarousel {

  get updates() {
    const base = super.updates || {};
    return merge(base, {
      $: {
        arrowIconRight: {
          style: {
            color: 'green',
          }
          // styling the `:hover` seems not to be possible
        },
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
        PageDotsMixin.wrap(`
          <elix-sliding-viewport id="viewport">
            <slot></slot>
          </elix-sliding-viewport>
        `)
      )}
    `;
  }

}

customElements.define('hc-carousel', HcCarousel);
