import { merge } from '../node_modules/elix/src/updates.js';
import SlidingCarousel from '../node_modules/elix/src/SlidingCarousel.js';

class HcCarousel extends SlidingCarousel {

  get updates() {
    const base = super.updates || {};
    return merge(base, {
      $: {
        arrowIconRight: {
          style: {
            color: 'green',
          }
        },
      }
    });
  }

}

customElements.define('hc-carousel', HcCarousel);
