/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../common/cdk/component/gate';
import { StructureTitlePanelConfigArchive } from '../../panel/banner-panels/title-panel/structure.title-panel.config-archive';
import { StructureFooterPanelConfigArchive } from '../../panel/banner-panels/footer-panel/structure.footer-panel.config-archive';
var StructurePanelGate = /** @class */ (function (_super) {
    tslib_1.__extends(StructurePanelGate, _super);
    function StructurePanelGate(structureTitlePanelConfigArchive, structureFooterPanelConfigArchive) {
        var _this = _super.call(this) || this;
        _this.structureTitlePanelConfigArchive = structureTitlePanelConfigArchive;
        _this.structureFooterPanelConfigArchive = structureFooterPanelConfigArchive;
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    StructurePanelGate.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.isDefined('titlePanel', changes)) {
            this.structureTitlePanelConfigArchive.next(this.titlePanel);
        }
        if (this.isDefined('footerPanel', changes)) {
            this.structureFooterPanelConfigArchive.next(this.footerPanel);
        }
    };
    StructurePanelGate.decorators = [
        { type: Directive, args: [{
                    selector: 'gui-structure[titlePanel][footerPanel]'
                },] }
    ];
    /** @nocollapse */
    StructurePanelGate.ctorParameters = function () { return [
        { type: StructureTitlePanelConfigArchive },
        { type: StructureFooterPanelConfigArchive }
    ]; };
    StructurePanelGate.propDecorators = {
        titlePanel: [{ type: Input }],
        footerPanel: [{ type: Input }]
    };
    return StructurePanelGate;
}(Gate));
export { StructurePanelGate };
if (false) {
    /** @type {?} */
    StructurePanelGate.prototype.titlePanel;
    /** @type {?} */
    StructurePanelGate.prototype.footerPanel;
    /**
     * @type {?}
     * @private
     */
    StructurePanelGate.prototype.structureTitlePanelConfigArchive;
    /**
     * @type {?}
     * @private
     */
    StructurePanelGate.prototype.structureFooterPanelConfigArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXBhbmVsLmdhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvZ2F0ZS9wYW5lbC9zdHJ1Y3R1cmUtcGFuZWwuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRTVELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw0RUFBNEUsQ0FBQztBQUM5SCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSw4RUFBOEUsQ0FBQztBQUlqSTtJQUd3Qyw4Q0FBSTtJQVEzQyw0QkFBNkIsZ0NBQWtFLEVBQzNFLGlDQUFvRTtRQUR4RixZQUVDLGlCQUFPLFNBQ1A7UUFINEIsc0NBQWdDLEdBQWhDLGdDQUFnQyxDQUFrQztRQUMzRSx1Q0FBaUMsR0FBakMsaUNBQWlDLENBQW1DOztJQUV4RixDQUFDOzs7OztJQUVELHdDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQztRQUVqRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQzFDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzVEO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsaUNBQWlDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM5RDtJQUNGLENBQUM7O2dCQXpCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHdDQUF3QztpQkFDbEQ7Ozs7Z0JBUFEsZ0NBQWdDO2dCQUNoQyxpQ0FBaUM7Ozs2QkFTeEMsS0FBSzs4QkFHTCxLQUFLOztJQW1CUCx5QkFBQztDQUFBLEFBM0JELENBR3dDLElBQUksR0F3QjNDO1NBeEJZLGtCQUFrQjs7O0lBRTlCLHdDQUN1Qzs7SUFFdkMseUNBQ3dDOzs7OztJQUU1Qiw4REFBbUY7Ozs7O0lBQzVGLCtEQUFxRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvZ2F0ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4uLy4uL3BhbmVsL2Jhbm5lci1wYW5lbHMvdGl0bGUtcGFuZWwvc3RydWN0dXJlLnRpdGxlLXBhbmVsLmNvbmZpZy1hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4uLy4uL3BhbmVsL2Jhbm5lci1wYW5lbHMvZm9vdGVyLXBhbmVsL3N0cnVjdHVyZS5mb290ZXItcGFuZWwuY29uZmlnLWFyY2hpdmUnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVCYW5uZXJQYW5lbENvbmZpZyB9IGZyb20gJy4uLy4uL3BhbmVsL2Jhbm5lci1wYW5lbHMvc3RydWN0dXJlLWJhbm5lci1wYW5lbC5jb25maWcnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlW3RpdGxlUGFuZWxdW2Zvb3RlclBhbmVsXSdcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUGFuZWxHYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0dGl0bGVQYW5lbDogU3RydWN0dXJlQmFubmVyUGFuZWxDb25maWc7XG5cblx0QElucHV0KClcblx0Zm9vdGVyUGFuZWw6IFN0cnVjdHVyZUJhbm5lclBhbmVsQ29uZmlnO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZVRpdGxlUGFuZWxDb25maWdBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZTogU3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxTdHJ1Y3R1cmVQYW5lbEdhdGU+KSB7XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ3RpdGxlUGFuZWwnLCBjaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZS5uZXh0KHRoaXMudGl0bGVQYW5lbCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCdmb290ZXJQYW5lbCcsIGNoYW5nZXMpKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZS5uZXh0KHRoaXMuZm9vdGVyUGFuZWwpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=