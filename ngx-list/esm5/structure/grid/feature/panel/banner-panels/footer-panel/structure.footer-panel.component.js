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
    StructureFooterPanelComponent.prototype.getBannerPanelConfig = /**
     * @return {?}
     */
    function () {
        return this.structureFooterPanelConfigArchive.onValue();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZvb3Rlci1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvcGFuZWwvYmFubmVyLXBhbmVscy9mb290ZXItcGFuZWwvc3RydWN0dXJlLmZvb3Rlci1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVySCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM1RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUlqRTtJQVVtRCx5REFBb0I7SUFFdEUsdUNBQTZCLGlDQUFvRSxFQUM5RixpQkFBb0MsRUFDcEMsVUFBc0I7UUFGekIsWUFHQyxrQkFBTSxpQkFBaUIsRUFBRSxVQUFVLENBQUMsU0FDcEM7UUFKNEIsdUNBQWlDLEdBQWpDLGlDQUFpQyxDQUFtQzs7SUFJakcsQ0FBQzs7OztJQUVELDREQUFvQjs7O0lBQXBCO1FBQ0MsT0FBTyxJQUFJLENBQUMsaUNBQWlDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDekQsQ0FBQzs7OztJQUVELHVEQUFlOzs7SUFBZjtRQUNDLE9BQU8sNEJBQTRCLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELHFEQUFhOzs7SUFBYjtRQUNDLE9BQU8sY0FBYyxDQUFDO0lBQ3ZCLENBQUM7O2dCQTVCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGlDQUFpQztvQkFDM0MsUUFBUSxFQUFFLHNKQUlUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozs7Z0JBZFEsaUNBQWlDO2dCQUZSLGlCQUFpQjtnQkFBYSxVQUFVOztJQW9DMUUsb0NBQUM7Q0FBQSxBQTdCRCxDQVVtRCxvQkFBb0IsR0FtQnRFO1NBbkJZLDZCQUE2Qjs7Ozs7O0lBRTdCLDBFQUFxRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmUgfSBmcm9tICcuL3N0cnVjdHVyZS5mb290ZXItcGFuZWwuY29uZmlnLWFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQmFubmVyUGFuZWwgfSBmcm9tICcuLi9zdHJ1Y3R1cmUtYmFubmVyLXBhbmVsJztcbmltcG9ydCB7IFN0cnVjdHVyZUJhbm5lclBhbmVsQ29uZmlnIH0gZnJvbSAnLi4vc3RydWN0dXJlLWJhbm5lci1wYW5lbC5jb25maWcnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1mb290ZXItcGFuZWxdJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2IFtpbm5lckhUTUxdPVwiYmFubmVyUGFuZWwgfCBndWlTYWZlOiAnaHRtbCdcIlxuXHRcdFx0IGNsYXNzPVwiZ3VpLWZvb3Rlci1wYW5lbCBndWktcC02IGd1aS1ib3JkZXItdCBndWktYm9yZGVyLXQtc29saWRcIj5cblx0XHQ8L2Rpdj5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRm9vdGVyUGFuZWxDb21wb25lbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVCYW5uZXJQYW5lbCB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZSxcblx0XHRcdFx0Y2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0Z2V0QmFubmVyUGFuZWxDb25maWcoKTogT2JzZXJ2YWJsZTxTdHJ1Y3R1cmVCYW5uZXJQYW5lbENvbmZpZz4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZS5vblZhbHVlKCk7XG5cdH1cblxuXHRnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zdHJ1Y3R1cmUtZm9vdGVyLXBhbmVsJztcblx0fVxuXG5cdGdldFBhbmVsVGl0bGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ0Zvb3RlciBwYW5lbCc7XG5cdH1cbn1cbiJdfQ==