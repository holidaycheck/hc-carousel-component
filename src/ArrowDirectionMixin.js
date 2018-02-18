import * as elix from './elix.js';

const inject = Symbol('inject');

export function ArrowDirectionMixin(Base) {

  // The class prototype added by the mixin.
  return class ArrowDirection extends elix.ArrowDirectionMixin(Base) {
    [inject](template) {
      const arrowButtonTag = this.tags.arrowButton;
      return `
        <div id="arrowDirection" role="none" style="display: flex; flex: 1; overflow: hidden; position: relative;">
          <${arrowButtonTag}
            aria-hidden="true"
            id="arrowButtonLeft"
            tabIndex=""
            >
            <slot name="arrowButtonLeft">
              <svg id="arrowIconLeft" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
                <g>
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </g>
              </svg>
            </slot>
          </${arrowButtonTag}>
          <div role="none" style="display: flex; flex: 1; overflow: hidden; position: relative;">
            ${template}
          </div>
          <${arrowButtonTag}
            aria-hidden="true"
            id="arrowButtonRight"
            tabIndex=""
            >
            <slot name="arrowButtonRight">
              <svg id="arrowIconRight" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
                <g>
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </g>
              </svg>
            </slot>
          </${arrowButtonTag}>
        </div>
      `;
    }
  }
}
