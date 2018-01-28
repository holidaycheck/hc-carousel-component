import PageDotsMixin from '../node_modules/elix/src/PageDotsMixin.js';

class HcThumbsPreviewMixin extends PageDotsMixin {
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
