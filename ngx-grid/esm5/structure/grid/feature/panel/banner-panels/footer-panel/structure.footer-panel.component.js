/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { StructureFooterPanelConfigArchive } from './structure.footer-panel.config-archive';
import { StructureBannerPanel } from '../structure-banner-panel';
var StructureFooterPanelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureFooterPanelComponent, _super);
    function StructureFooterPanelComponent(structureFooterPanelConfigArchive, changeDetectorRef, elementRef) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
        _this.structureFooterPanelConfigArchive = structureFooterPanelConfigArchive;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureFooterPanelComponent.prototype.onBannerPanelConfig = /**
     * @return {?}
     */
    function () {
        return this.structureFooterPanelConfigArchive.on();
    };
    /**
     * @return {?}
     */
    StructureFooterPanelComponent.prototype.getSelectorName = /**
     * @return {?}
     */
    function () {
        return 'gui-structure-footer-panel';
    };
    /**
     * @return {?}
     */
    StructureFooterPanelComponent.prototype.getPanelTitle = /**
     * @return {?}
     */
    function () {
        return 'Footer panel';
    };
    StructureFooterPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-structure-footer-panel]',
                    template: "\n\t\t<div [innerHTML]=\"bannerPanel | guiSafe: 'html'\"\n\t\t\t class=\"gui-footer-panel gui-p-6 gui-border-t gui-border-t-solid\">\n\t\t</div>\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureFooterPanelComponent.ctorParameters = function () { return [
        { type: StructureFooterPanelConfigArchive },
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
    return StructureFooterPanelComponent;
}(StructureBannerPanel));
export { StructureFooterPanelComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFooterPanelComponent.prototype.structureFooterPanelConfigArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZvb3Rlci1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvcGFuZWwvYmFubmVyLXBhbmVscy9mb290ZXItcGFuZWwvc3RydWN0dXJlLmZvb3Rlci1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVySCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM1RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUlqRTtJQVVtRCx5REFBb0I7SUFFdEUsdUNBQTZCLGlDQUFvRSxFQUM5RixpQkFBb0MsRUFDcEMsVUFBc0I7UUFGekIsWUFHQyxrQkFBTSxpQkFBaUIsRUFBRSxVQUFVLENBQUMsU0FDcEM7UUFKNEIsdUNBQWlDLEdBQWpDLGlDQUFpQyxDQUFtQzs7SUFJakcsQ0FBQzs7OztJQUVELDJEQUFtQjs7O0lBQW5CO1FBQ0MsT0FBTyxJQUFJLENBQUMsaUNBQWlDLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELHVEQUFlOzs7SUFBZjtRQUNDLE9BQU8sNEJBQTRCLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELHFEQUFhOzs7SUFBYjtRQUNDLE9BQU8sY0FBYyxDQUFDO0lBQ3ZCLENBQUM7O2dCQTVCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGlDQUFpQztvQkFDM0MsUUFBUSxFQUFFLHNKQUlUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozs7Z0JBZFEsaUNBQWlDO2dCQUZSLGlCQUFpQjtnQkFBYSxVQUFVOztJQW9DMUUsb0NBQUM7Q0FBQSxBQTdCRCxDQVVtRCxvQkFBb0IsR0FtQnRFO1NBbkJZLDZCQUE2Qjs7Ozs7O0lBRTdCLDBFQUFxRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmUgfSBmcm9tICcuL3N0cnVjdHVyZS5mb290ZXItcGFuZWwuY29uZmlnLWFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQmFubmVyUGFuZWwgfSBmcm9tICcuLi9zdHJ1Y3R1cmUtYmFubmVyLXBhbmVsJztcbmltcG9ydCB7IFN0cnVjdHVyZUJhbm5lclBhbmVsQ29uZmlnIH0gZnJvbSAnLi4vc3RydWN0dXJlLWJhbm5lci1wYW5lbC5jb25maWcnO1xuaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLWZvb3Rlci1wYW5lbF0nLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgW2lubmVySFRNTF09XCJiYW5uZXJQYW5lbCB8IGd1aVNhZmU6ICdodG1sJ1wiXG5cdFx0XHQgY2xhc3M9XCJndWktZm9vdGVyLXBhbmVsIGd1aS1wLTYgZ3VpLWJvcmRlci10IGd1aS1ib3JkZXItdC1zb2xpZFwiPlxuXHRcdDwvZGl2PlxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVGb290ZXJQYW5lbENvbXBvbmVudCBleHRlbmRzIFN0cnVjdHVyZUJhbm5lclBhbmVsIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZTogU3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlLFxuXHRcdFx0XHRjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdH1cblxuXHRvbkJhbm5lclBhbmVsQ29uZmlnKCk6IEhlcm1lc09ic2VydmFibGU8U3RydWN0dXJlQmFubmVyUGFuZWxDb25maWc+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmUub24oKTtcblx0fVxuXG5cdGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1mb290ZXItcGFuZWwnO1xuXHR9XG5cblx0Z2V0UGFuZWxUaXRsZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnRm9vdGVyIHBhbmVsJztcblx0fVxufVxuIl19