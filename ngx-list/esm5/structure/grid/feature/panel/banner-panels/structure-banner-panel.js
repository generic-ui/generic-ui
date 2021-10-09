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
        this.hermesSubscribe(this.onBannerPanelConfig(), (/**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            _this.bannerPanel = config.template;
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
    StructureBannerPanel.prototype.onBannerPanelConfig = function () { };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWJhbm5lci1wYW5lbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9wYW5lbC9iYW5uZXItcGFuZWxzL3N0cnVjdHVyZS1iYW5uZXItcGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scURBQXFELENBQUM7Ozs7QUFLckY7Ozs7SUFBbUQsZ0RBQWM7SUFJaEUsOEJBQXNCLGlCQUFvQyxFQUNuRCxVQUFzQjtlQUM1QixrQkFBTSxpQkFBaUIsRUFBRSxVQUFVLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELHVDQUFROzs7SUFBUjtRQUFBLGlCQWFDO1FBWEEsSUFBSSxDQUFDLGVBQWUsQ0FDbkIsSUFBSSxDQUFDLG1CQUFtQixFQUFFOzs7O1FBQzFCLFVBQUMsTUFBa0M7WUFFbEMsS0FBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBRW5DLElBQUksT0FBTyxLQUFJLENBQUMsV0FBVyxLQUFLLFVBQVUsRUFBRTtnQkFDM0MsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDdEM7UUFDRixDQUFDLEVBQ0QsQ0FBQztJQUNILENBQUM7SUFPRiwyQkFBQztBQUFELENBQUMsQUE3QkQsQ0FBbUQsY0FBYyxHQTZCaEU7Ozs7Ozs7SUEzQkEsMkNBQXFDOzs7OztJQXNCckMscUVBQTRFOzs7OztJQUU1RSxpRUFBa0M7Ozs7O0lBRWxDLCtEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0cnVjdHVyZUJhbm5lclBhbmVsQ29uZmlnIH0gZnJvbSAnLi9zdHJ1Y3R1cmUtYmFubmVyLXBhbmVsLmNvbmZpZyc7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0cnVjdHVyZUJhbm5lclBhbmVsIGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGJhbm5lclBhbmVsOiBzdHJpbmcgfCAoKCkgPT4gc3RyaW5nKTtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRcdFx0ICBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMub25CYW5uZXJQYW5lbENvbmZpZygpLFxuXHRcdFx0KGNvbmZpZzogU3RydWN0dXJlQmFubmVyUGFuZWxDb25maWcpID0+IHtcblxuXHRcdFx0XHR0aGlzLmJhbm5lclBhbmVsID0gY29uZmlnLnRlbXBsYXRlO1xuXG5cdFx0XHRcdGlmICh0eXBlb2YgdGhpcy5iYW5uZXJQYW5lbCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdHRoaXMuYmFubmVyUGFuZWwgPSB0aGlzLmJhbm5lclBhbmVsKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0YWJzdHJhY3Qgb25CYW5uZXJQYW5lbENvbmZpZygpOiBIZXJtZXNPYnNlcnZhYmxlPFN0cnVjdHVyZUJhbm5lclBhbmVsQ29uZmlnPlxuXG5cdGFic3RyYWN0IGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmdcblxuXHRhYnN0cmFjdCBnZXRQYW5lbFRpdGxlKCk6IHN0cmluZ1xufVxuIl19