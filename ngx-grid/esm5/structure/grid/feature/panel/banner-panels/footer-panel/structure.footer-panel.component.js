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
                    template: "<div [innerHTML]=\"bannerPanel | guiSafe: 'html'\"\n\t class=\"gui-footer-panel gui-p-6 gui-border-t gui-border-t-solid\">\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZvb3Rlci1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvcGFuZWwvYmFubmVyLXBhbmVscy9mb290ZXItcGFuZWwvc3RydWN0dXJlLmZvb3Rlci1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVySCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM1RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUtqRTtJQU1tRCx5REFBb0I7SUFFdEUsdUNBQTZCLGlDQUFvRSxFQUM5RixpQkFBb0MsRUFDcEMsVUFBc0I7UUFGekIsWUFHQyxrQkFBTSxpQkFBaUIsRUFBRSxVQUFVLENBQUMsU0FDcEM7UUFKNEIsdUNBQWlDLEdBQWpDLGlDQUFpQyxDQUFtQzs7SUFJakcsQ0FBQzs7OztJQUVELDJEQUFtQjs7O0lBQW5CO1FBQ0MsT0FBTyxJQUFJLENBQUMsaUNBQWlDLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELHVEQUFlOzs7SUFBZjtRQUNDLE9BQU8sNEJBQTRCLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELHFEQUFhOzs7SUFBYjtRQUNDLE9BQU8sY0FBYyxDQUFDO0lBQ3ZCLENBQUM7O2dCQXhCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGlDQUFpQztvQkFDM0MsZ0pBQXNEO29CQUN0RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7O2dCQVhRLGlDQUFpQztnQkFGUixpQkFBaUI7Z0JBQWEsVUFBVTs7SUFpQzFFLG9DQUFDO0NBQUEsQUF6QkQsQ0FNbUQsb0JBQW9CLEdBbUJ0RTtTQW5CWSw2QkFBNkI7Ozs7OztJQUU3QiwwRUFBcUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuZm9vdGVyLXBhbmVsLmNvbmZpZy1hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUJhbm5lclBhbmVsIH0gZnJvbSAnLi4vc3RydWN0dXJlLWJhbm5lci1wYW5lbCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVCYW5uZXJQYW5lbENvbmZpZyB9IGZyb20gJy4uL3N0cnVjdHVyZS1iYW5uZXItcGFuZWwuY29uZmlnJztcbmltcG9ydCB7IEhlcm1lc09ic2VydmFibGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLWZvb3Rlci1wYW5lbF0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLmZvb3Rlci1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUZvb3RlclBhbmVsQ29tcG9uZW50IGV4dGVuZHMgU3RydWN0dXJlQmFubmVyUGFuZWwge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlOiBTdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmUsXG5cdFx0XHRcdGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblx0fVxuXG5cdG9uQmFubmVyUGFuZWxDb25maWcoKTogSGVybWVzT2JzZXJ2YWJsZTxTdHJ1Y3R1cmVCYW5uZXJQYW5lbENvbmZpZz4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZS5vbigpO1xuXHR9XG5cblx0Z2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLWZvb3Rlci1wYW5lbCc7XG5cdH1cblxuXHRnZXRQYW5lbFRpdGxlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdGb290ZXIgcGFuZWwnO1xuXHR9XG59XG4iXX0=