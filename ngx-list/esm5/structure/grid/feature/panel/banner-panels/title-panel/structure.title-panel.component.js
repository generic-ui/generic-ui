/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { StructureTitlePanelConfigArchive } from './structure.title-panel.config-archive';
import { StructureBannerPanel } from '../structure-banner-panel';
var StructureTitlePanelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureTitlePanelComponent, _super);
    function StructureTitlePanelComponent(structureTitlePanelConfigArchive, changeDetectorRef, elementRef) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
        _this.structureTitlePanelConfigArchive = structureTitlePanelConfigArchive;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureTitlePanelComponent.prototype.onBannerPanelConfig = /**
     * @return {?}
     */
    function () {
        return this.structureTitlePanelConfigArchive.on();
    };
    /**
     * @return {?}
     */
    StructureTitlePanelComponent.prototype.getSelectorName = /**
     * @return {?}
     */
    function () {
        return 'gui-structure-title-panel';
    };
    /**
     * @return {?}
     */
    StructureTitlePanelComponent.prototype.getPanelTitle = /**
     * @return {?}
     */
    function () {
        return 'Title panel';
    };
    StructureTitlePanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-structure-title-panel]',
                    template: "\n\t\t<div [innerHTML]=\"bannerPanel | guiSafe: 'html'\"\n\t\t\t class=\"gui-title-panel gui-p-6 gui-border-b gui-border-b-solid\">\n\t\t</div>\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureTitlePanelComponent.ctorParameters = function () { return [
        { type: StructureTitlePanelConfigArchive },
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
    return StructureTitlePanelComponent;
}(StructureBannerPanel));
export { StructureTitlePanelComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureTitlePanelComponent.prototype.structureTitlePanelConfigArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnRpdGxlLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9wYW5lbC9iYW5uZXItcGFuZWxzL3RpdGxlLXBhbmVsL3N0cnVjdHVyZS50aXRsZS1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVySCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUlqRTtJQVVrRCx3REFBb0I7SUFFckUsc0NBQTZCLGdDQUFrRSxFQUM1RixpQkFBb0MsRUFDcEMsVUFBc0I7UUFGekIsWUFHQyxrQkFBTSxpQkFBaUIsRUFBRSxVQUFVLENBQUMsU0FDcEM7UUFKNEIsc0NBQWdDLEdBQWhDLGdDQUFnQyxDQUFrQzs7SUFJL0YsQ0FBQzs7OztJQUVELDBEQUFtQjs7O0lBQW5CO1FBQ0MsT0FBTyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDbkQsQ0FBQzs7OztJQUVELHNEQUFlOzs7SUFBZjtRQUNDLE9BQU8sMkJBQTJCLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVELG9EQUFhOzs7SUFBYjtRQUNDLE9BQU8sYUFBYSxDQUFDO0lBQ3RCLENBQUM7O2dCQTVCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGdDQUFnQztvQkFDMUMsUUFBUSxFQUFFLHFKQUlUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozs7Z0JBZFEsZ0NBQWdDO2dCQUZQLGlCQUFpQjtnQkFBYSxVQUFVOztJQXFDMUUsbUNBQUM7Q0FBQSxBQTlCRCxDQVVrRCxvQkFBb0IsR0FvQnJFO1NBcEJZLDRCQUE0Qjs7Ozs7O0lBRTVCLHdFQUFtRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4vc3RydWN0dXJlLnRpdGxlLXBhbmVsLmNvbmZpZy1hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUJhbm5lclBhbmVsIH0gZnJvbSAnLi4vc3RydWN0dXJlLWJhbm5lci1wYW5lbCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVCYW5uZXJQYW5lbENvbmZpZyB9IGZyb20gJy4uL3N0cnVjdHVyZS1iYW5uZXItcGFuZWwuY29uZmlnJztcbmltcG9ydCB7IEhlcm1lc09ic2VydmFibGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS10aXRsZS1wYW5lbF0nLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgW2lubmVySFRNTF09XCJiYW5uZXJQYW5lbCB8IGd1aVNhZmU6ICdodG1sJ1wiXG5cdFx0XHQgY2xhc3M9XCJndWktdGl0bGUtcGFuZWwgZ3VpLXAtNiBndWktYm9yZGVyLWIgZ3VpLWJvcmRlci1iLXNvbGlkXCI+XG5cdFx0PC9kaXY+XG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVRpdGxlUGFuZWxDb21wb25lbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVCYW5uZXJQYW5lbCB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZTogU3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmUsXG5cdFx0XHRcdGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblx0fVxuXG5cdG9uQmFubmVyUGFuZWxDb25maWcoKTogSGVybWVzT2JzZXJ2YWJsZTxTdHJ1Y3R1cmVCYW5uZXJQYW5lbENvbmZpZz4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVRpdGxlUGFuZWxDb25maWdBcmNoaXZlLm9uKCk7XG5cdH1cblxuXHRnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zdHJ1Y3R1cmUtdGl0bGUtcGFuZWwnO1xuXHR9XG5cblx0Z2V0UGFuZWxUaXRsZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnVGl0bGUgcGFuZWwnO1xuXHR9XG5cbn1cbiJdfQ==