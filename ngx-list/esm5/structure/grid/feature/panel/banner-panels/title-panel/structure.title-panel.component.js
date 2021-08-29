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
    StructureTitlePanelComponent.prototype.getBannerPanelConfig = /**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnRpdGxlLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9wYW5lbC9iYW5uZXItcGFuZWxzL3RpdGxlLXBhbmVsL3N0cnVjdHVyZS50aXRsZS1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVySCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUlqRTtJQVVrRCx3REFBb0I7SUFFckUsc0NBQTZCLGdDQUFrRSxFQUM1RixpQkFBb0MsRUFDcEMsVUFBc0I7UUFGekIsWUFHQyxrQkFBTSxpQkFBaUIsRUFBRSxVQUFVLENBQUMsU0FDcEM7UUFKNEIsc0NBQWdDLEdBQWhDLGdDQUFnQyxDQUFrQzs7SUFJL0YsQ0FBQzs7OztJQUVELDJEQUFvQjs7O0lBQXBCO1FBQ0MsT0FBTyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDbkQsQ0FBQzs7OztJQUVELHNEQUFlOzs7SUFBZjtRQUNDLE9BQU8sMkJBQTJCLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVELG9EQUFhOzs7SUFBYjtRQUNDLE9BQU8sYUFBYSxDQUFDO0lBQ3RCLENBQUM7O2dCQTVCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGdDQUFnQztvQkFDMUMsUUFBUSxFQUFFLHFKQUlUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozs7Z0JBZFEsZ0NBQWdDO2dCQUZQLGlCQUFpQjtnQkFBYSxVQUFVOztJQXFDMUUsbUNBQUM7Q0FBQSxBQTlCRCxDQVVrRCxvQkFBb0IsR0FvQnJFO1NBcEJZLDRCQUE0Qjs7Ozs7O0lBRTVCLHdFQUFtRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4vc3RydWN0dXJlLnRpdGxlLXBhbmVsLmNvbmZpZy1hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUJhbm5lclBhbmVsIH0gZnJvbSAnLi4vc3RydWN0dXJlLWJhbm5lci1wYW5lbCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVCYW5uZXJQYW5lbENvbmZpZyB9IGZyb20gJy4uL3N0cnVjdHVyZS1iYW5uZXItcGFuZWwuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zdHJ1Y3R1cmUtdGl0bGUtcGFuZWxdJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2IFtpbm5lckhUTUxdPVwiYmFubmVyUGFuZWwgfCBndWlTYWZlOiAnaHRtbCdcIlxuXHRcdFx0IGNsYXNzPVwiZ3VpLXRpdGxlLXBhbmVsIGd1aS1wLTYgZ3VpLWJvcmRlci1iIGd1aS1ib3JkZXItYi1zb2xpZFwiPlxuXHRcdDwvZGl2PlxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29tcG9uZW50IGV4dGVuZHMgU3RydWN0dXJlQmFubmVyUGFuZWwge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZVRpdGxlUGFuZWxDb25maWdBcmNoaXZlLFxuXHRcdFx0XHRjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdH1cblxuXHRnZXRCYW5uZXJQYW5lbENvbmZpZygpOiBPYnNlcnZhYmxlPFN0cnVjdHVyZUJhbm5lclBhbmVsQ29uZmlnPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmUub24oKTtcblx0fVxuXG5cdGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS10aXRsZS1wYW5lbCc7XG5cdH1cblxuXHRnZXRQYW5lbFRpdGxlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdUaXRsZSBwYW5lbCc7XG5cdH1cblxufVxuIl19