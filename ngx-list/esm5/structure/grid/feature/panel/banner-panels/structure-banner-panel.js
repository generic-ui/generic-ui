/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
/**
 * @abstract
 */
var /**
 * @abstract
 */
StructureBannerPanel = /** @class */ (function (_super) {
    tslib_1.__extends(StructureBannerPanel, _super);
    function StructureBannerPanel(changeDetectorRef, elementRef) {
        return _super.call(this, changeDetectorRef, elementRef) || this;
    }
    /**
     * @return {?}
     */
    StructureBannerPanel.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.getBannerPanelConfig()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} title
         * @return {?}
         */
        function (title) {
            _this.bannerPanel = title.template;
            if (typeof _this.bannerPanel === 'function') {
                _this.bannerPanel = _this.bannerPanel();
            }
        }));
    };
    return StructureBannerPanel;
}(SmartComponent));
/**
 * @abstract
 */
export { StructureBannerPanel };
if (false) {
    /** @type {?} */
    StructureBannerPanel.prototype.bannerPanel;
    /**
     * @abstract
     * @return {?}
     */
    StructureBannerPanel.prototype.getBannerPanelConfig = function () { };
    /**
     * @abstract
     * @return {?}
     */
    StructureBannerPanel.prototype.getSelectorName = function () { };
    /**
     * @abstract
     * @return {?}
     */
    StructureBannerPanel.prototype.getPanelTitle = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWJhbm5lci1wYW5lbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9wYW5lbC9iYW5uZXItcGFuZWxzL3N0cnVjdHVyZS1iYW5uZXItcGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scURBQXFELENBQUM7Ozs7QUFLckY7Ozs7SUFBbUQsZ0RBQWM7SUFJaEUsOEJBQXNCLGlCQUFvQyxFQUNuRCxVQUFzQjtlQUM1QixrQkFBTSxpQkFBaUIsRUFBRSxVQUFVLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELHVDQUFROzs7SUFBUjtRQUFBLGlCQVdDO1FBVkEsSUFBSSxDQUFDLG9CQUFvQixFQUFFO2FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEIsU0FBUzs7OztRQUFDLFVBQUMsS0FBaUM7WUFFNUMsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBRWxDLElBQUksT0FBTyxLQUFJLENBQUMsV0FBVyxLQUFLLFVBQVUsRUFBRTtnQkFDM0MsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDdEM7UUFDRixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFPRiwyQkFBQztBQUFELENBQUMsQUEzQkQsQ0FBbUQsY0FBYyxHQTJCaEU7Ozs7Ozs7SUF6QkEsMkNBQXFDOzs7OztJQW9CckMsc0VBQXVFOzs7OztJQUV2RSxpRUFBa0M7Ozs7O0lBRWxDLCtEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0cnVjdHVyZUJhbm5lclBhbmVsQ29uZmlnIH0gZnJvbSAnLi9zdHJ1Y3R1cmUtYmFubmVyLXBhbmVsLmNvbmZpZyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdHJ1Y3R1cmVCYW5uZXJQYW5lbCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRiYW5uZXJQYW5lbDogc3RyaW5nIHwgKCgpID0+IHN0cmluZyk7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0XHRcdCAgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuZ2V0QmFubmVyUGFuZWxDb25maWcoKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKHRpdGxlOiBTdHJ1Y3R1cmVCYW5uZXJQYW5lbENvbmZpZykgPT4ge1xuXG5cdFx0XHRcdHRoaXMuYmFubmVyUGFuZWwgPSB0aXRsZS50ZW1wbGF0ZTtcblxuXHRcdFx0XHRpZiAodHlwZW9mIHRoaXMuYmFubmVyUGFuZWwgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHR0aGlzLmJhbm5lclBhbmVsID0gdGhpcy5iYW5uZXJQYW5lbCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fVxuXG5cdGFic3RyYWN0IGdldEJhbm5lclBhbmVsQ29uZmlnKCk6IE9ic2VydmFibGU8U3RydWN0dXJlQmFubmVyUGFuZWxDb25maWc+XG5cblx0YWJzdHJhY3QgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZ1xuXG5cdGFic3RyYWN0IGdldFBhbmVsVGl0bGUoKTogc3RyaW5nXG59XG4iXX0=