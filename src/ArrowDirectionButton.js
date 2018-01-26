import ArrowDirectionButton from '../node_modules/elix/src/ArrowDirectionButton.js';
import symbols from '../node_modules/elix/src/symbols.js';


/*
 * A button used by ArrowDirectionMixin for its left/right arrow buttons.
 *
 * We don't expect this minor component to be used in other contexts, so it's
 * not documented as a supported Elix component.
 */
class HcArrowDirectionButton extends ArrowDirectionButton {

  get [symbols.template]() {
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

customElements.define('hc-arrow-direction-button', HcArrowDirectionButton);
