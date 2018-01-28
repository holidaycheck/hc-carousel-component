import symbols from '../node_modules/elix/src/symbols.js';
import { merge } from '../node_modules/elix/src/updates.js';
import SlidingCarousel from '../node_modules/elix/src/SlidingCarousel.js';
import HcArrowsMixin from './ArrowDirectionMixin.js';
import PageDotsMixin from '../node_modules/elix/src/PageDotsMixin.js';

// needed for the <elix-sliding-viewport> etc.
import './ArrowDirectionButton.js';
import '../node_modules/elix/src/SlidingViewport.js';

// TODO: round robbing slideshow, after last pic comes first pic again

class HcCarousel extends SlidingCarousel {

  get updates() {
    const base = super.updates || {};
    return merge(base, {
      $: {
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
