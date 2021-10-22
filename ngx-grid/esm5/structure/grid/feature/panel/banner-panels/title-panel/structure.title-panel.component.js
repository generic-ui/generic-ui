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
                    template: "<div [innerHTML]=\"bannerPanel | guiSafe: 'html'\"\n\t class=\"gui-title-panel gui-p-6 gui-border-b gui-border-b-solid\">\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnRpdGxlLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9wYW5lbC9iYW5uZXItcGFuZWxzL3RpdGxlLXBhbmVsL3N0cnVjdHVyZS50aXRsZS1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVySCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUtqRTtJQU1rRCx3REFBb0I7SUFFckUsc0NBQTZCLGdDQUFrRSxFQUM1RixpQkFBb0MsRUFDcEMsVUFBc0I7UUFGekIsWUFHQyxrQkFBTSxpQkFBaUIsRUFBRSxVQUFVLENBQUMsU0FDcEM7UUFKNEIsc0NBQWdDLEdBQWhDLGdDQUFnQyxDQUFrQzs7SUFJL0YsQ0FBQzs7OztJQUVELDBEQUFtQjs7O0lBQW5CO1FBQ0MsT0FBTyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDbkQsQ0FBQzs7OztJQUVELHNEQUFlOzs7SUFBZjtRQUNDLE9BQU8sMkJBQTJCLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVELG9EQUFhOzs7SUFBYjtRQUNDLE9BQU8sYUFBYSxDQUFDO0lBQ3RCLENBQUM7O2dCQXhCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGdDQUFnQztvQkFDMUMsK0lBQXFEO29CQUNyRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7O2dCQVhRLGdDQUFnQztnQkFGUCxpQkFBaUI7Z0JBQWEsVUFBVTs7SUFrQzFFLG1DQUFDO0NBQUEsQUExQkQsQ0FNa0Qsb0JBQW9CLEdBb0JyRTtTQXBCWSw0QkFBNEI7Ozs7OztJQUU1Qix3RUFBbUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmUgfSBmcm9tICcuL3N0cnVjdHVyZS50aXRsZS1wYW5lbC5jb25maWctYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVCYW5uZXJQYW5lbCB9IGZyb20gJy4uL3N0cnVjdHVyZS1iYW5uZXItcGFuZWwnO1xuaW1wb3J0IHsgU3RydWN0dXJlQmFubmVyUGFuZWxDb25maWcgfSBmcm9tICcuLi9zdHJ1Y3R1cmUtYmFubmVyLXBhbmVsLmNvbmZpZyc7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS10aXRsZS1wYW5lbF0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLnRpdGxlLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlVGl0bGVQYW5lbENvbXBvbmVudCBleHRlbmRzIFN0cnVjdHVyZUJhbm5lclBhbmVsIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVRpdGxlUGFuZWxDb25maWdBcmNoaXZlOiBTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZSxcblx0XHRcdFx0Y2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0b25CYW5uZXJQYW5lbENvbmZpZygpOiBIZXJtZXNPYnNlcnZhYmxlPFN0cnVjdHVyZUJhbm5lclBhbmVsQ29uZmlnPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmUub24oKTtcblx0fVxuXG5cdGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS10aXRsZS1wYW5lbCc7XG5cdH1cblxuXHRnZXRQYW5lbFRpdGxlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdUaXRsZSBwYW5lbCc7XG5cdH1cblxufVxuIl19