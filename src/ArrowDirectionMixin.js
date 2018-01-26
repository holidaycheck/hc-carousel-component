class HcArrowsMixin extends ArrowDirectionMixin {

}

HcArrowsMixin.wrap = function wrap(template) {
  return `
    <div id="arrowDirection" role="none" style="display: flex; flex: 1; overflow: hidden;">
      <hc-arrow-direction-button
        aria-hidden="true"
        id="arrowButtonLeft"
        tabIndex="-1"
        >
        <div id="arrowIconLeft">&lt;</div>
      </hc-arrow-direction-button>
      <div role="none" style="display: flex; flex: 1; overflow: hidden; position: relative;">
        ${template}
      </div>
      <hc-arrow-direction-button
        aria-hidden="true"
        id="arrowButtonRight"
        tabIndex="-1"
        >
        <div id="arrowIconRight">&gt;</div>
      </hc-arrow-direction-button>
    </div>
  `;
};

export default HcArrowsMixin;