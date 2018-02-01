import * as elix from './elix.js';
const merge = elix.updates.merge;

class Thumb extends elix.ElementBase {

  get [elix.symbols.template]() {
    return `
      <img src="">
    `;
  }
  get updates() {
    return merge(super.updates, {
      $: {
        pageDots: {
          childNodes: this.pageDots
        }
      }
    });
  }
}

function HcThumbsPreviewMixin(Base) {
  // The class prototype added by the mixin.
  class HcThumbsPreview extends elix.PageDotsMixin(Base) {
    get pageDots() {
      return [
        //new Thumb()
      ];
    }
  }
  return HcThumbsPreview;
}

HcThumbsPreviewMixin.wrap = function wrap(template) {
  return `
    <div id="pageDotsWrapper" role="none" style="display: flex; flex: 1; overflow: hidden;">
      <div id="pageDots" role="none" style="bottom: 0; display: flex; justify-content: center; position: absolute; width: 100%; z-index: 1;"></div>
      <div id="pageDotsContent" role="none" style="display: flex; flex: 1; overflow: hidden; position: relative; z-index: 0;">
        ${template}
      </div>
    </div>
  `;
};

export default HcThumbsPreviewMixin;
