/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
var StructureTopPanelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureTopPanelComponent, _super);
    function StructureTopPanelComponent(changeDetectorRef) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        return _this;
    }
    StructureTopPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-top-panel',
                    template: "\n\n\t\t<gui-search-bar></gui-search-bar>\n<!--\t\t<gui-filter-menu-trigger></gui-filter-menu-trigger>-->\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureTopPanelComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    return StructureTopPanelComponent;
}(SmartComponent));
export { StructureTopPanelComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureTopPanelComponent.prototype.changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnRvcC1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvcGFuZWwvdG9wL3N0cnVjdHVyZS50b3AtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFM0U7SUFXZ0Qsc0RBQWM7SUFFN0Qsb0NBQTZCLGlCQUFvQztRQUFqRSxZQUNDLGtCQUFNLGlCQUFpQixDQUFDLFNBQ3hCO1FBRjRCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7O0lBRWpFLENBQUM7O2dCQWZELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxRQUFRLEVBQUUsaUhBS1Q7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7OztnQkFkaUMsaUJBQWlCOztJQXFCbkQsaUNBQUM7Q0FBQSxBQWpCRCxDQVdnRCxjQUFjLEdBTTdEO1NBTlksMEJBQTBCOzs7Ozs7SUFFMUIsdURBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLXRvcC1wYW5lbCcsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8Z3VpLXNlYXJjaC1iYXI+PC9ndWktc2VhcmNoLWJhcj5cbjwhLS1cdFx0PGd1aS1maWx0ZXItbWVudS10cmlnZ2VyPjwvZ3VpLWZpbHRlci1tZW51LXRyaWdnZXI+LS0+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlVG9wUGFuZWxDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZik7XG5cdH1cblxufVxuIl19