import * as elix from './elix.js';
const merge = elix.updates.merge;

// TODO: round robbing slideshow, after last pic comes first pic again
// TODO: show picture description text at bottom

class HcArrowButton extends elix.WrappedStandardElement.wrap('button') {

  get [elix.symbols.template]() {
    return `
      <style>
        :host(:not([hidden])) {
          display: flex;
        }
        
        #inner {
          background: transparent;
          border: 1px solid transparent;
          box-sizing: border-box;
          color: rgba(255, 255, 255, 0.7);
          fill: currentColor;
          flex: 1;
          margin: 0;
          outline: none;
          padding: 0;
          position: relative;
          transition: opacity 1s;
        }

        #inner:hover:not(:disabled) {
          color: rgba(255, 255, 255, 0.8);
          cursor: pointer;
        }

        #inner:disabled {
          color: rgba(255, 255, 255, 0.3);
        }
      </style>
      <button id="inner">
        <slot></slot>
      </button>
    `;
  }
}
customElements.define('hc-arrow-button', HcArrowButton);

// Shows how a carousel subclass can define custom tags for the arrows and dots.
class HcCarousel extends elix.SlidingCarousel {
  get tags() {
    return Object.assign({}, super.tags, {
      arrowButton: 'hc-arrow-button',
      // pageDot: 'hc-page-dot'
    });
  }
  get updates() {
    const arrowButtonStyle = {
      'color': '#043967',
      'border-radius': '7.14286rem',
      'border': '1px solid #c2c7cc',
      'background-color': '#fff',
      'padding': '.5rem',
      'opacity': '.5',
      'transition': 'opacity .5s',
    };
    return merge(super.updates, {
      $: {
        arrowIconLeft: {
          style: arrowButtonStyle,
        },
        arrowIconRight: {
          style: arrowButtonStyle,
        }
      }
    });
  }
}
customElements.define('hc-carousel', HcCarousel);

/*
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
*/
