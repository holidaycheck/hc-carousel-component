import * as elix from './elix.js';

class HcArrowButton extends elix.WrappedStandardElement.wrap('button') {

  get [elix.symbols.template]() {
    return `
      <style>
        :host {
          display: flex;
        }
        
        #inner {
          height: 48px;
          width: 48px;
          border-radius: 7.14286rem;
          border: 1px solid #c2c7cc;
          background-color: #fff;
          
          /*background: transparent;*/
          /*border: 0;*/
          /*padding: 1.5rem;*/
          fill: #043967;
          opacity: 0.5;
          transition: opacity .5s;
        }

        #inner:hover:not(:disabled) {
          opacity: 1;
          fill: #51a9e0;
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
