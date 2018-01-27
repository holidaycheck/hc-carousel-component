import ArrowDirectionMixin from '../node_modules/elix/src/ArrowDirectionMixin.js';

class HcArrowsMixin extends ArrowDirectionMixin {

}

HcArrowsMixin.wrap = function wrap(template) {
  return `
    <style>
      .theButton {
        color: #043967;
        border-radius: 7.14286rem;
        border: 1px solid #c2c7cc;
        background-color: #fff;
        padding: .5rem;
        opacity: .5;
        transition: opacity .5s;      
        font-family: hc-iconfont;
        font-size: 1.5rem;
      }
      .theButton:hover {
        opacity: 1;
      }
      
    </style>

    <div id="arrowDirection" role="none" style="display: flex; flex: 1; overflow: hidden;">
      <hc-arrow-direction-button
        aria-hidden="true"
        id="arrowButtonLeft"
        tabIndex="-1"
        >
        <div id="arrowIconLeft" class="theButton">
          &#xE60B;
        </div>
      </hc-arrow-direction-button>
      <div role="none" style="display: flex; flex: 1; overflow: hidden; position: relative;">
        ${template}
      </div>
      <hc-arrow-direction-button
        aria-hidden="true"
        id="arrowButtonRight"
        tabIndex="-1"
        >
        <div id="arrowIconRight" class="theButton">&#xE60A;</div>
      </hc-arrow-direction-button>
    </div>
  `;
};

export default HcArrowsMixin;