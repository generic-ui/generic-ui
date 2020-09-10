/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CellValue } from '../../definition/cell-value';
var FunctionViewComponent = /** @class */ (function () {
    function FunctionViewComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @return {?}
     */
    FunctionViewComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(this.element.value);
    };
    FunctionViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-function-view',
                    template: "\n\n\t\t<div [innerHTML]=\"safeHTML\"></div>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    FunctionViewComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    FunctionViewComponent.propDecorators = {
        element: [{ type: Input }]
    };
    return FunctionViewComponent;
}());
export { FunctionViewComponent };
if (false) {
    /** @type {?} */
    FunctionViewComponent.prototype.element;
    /** @type {?} */
    FunctionViewComponent.prototype.safeHTML;
    /**
     * @type {?}
     * @private
     */
    FunctionViewComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb24tdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2RvbWFpbi1hcGkvcmVhZC92aWV3L2Z1bmN0aW9uL2Z1bmN0aW9uLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBR3hEO0lBaUJDLCtCQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQzNDLENBQUM7Ozs7SUFFRCwyQ0FBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1RSxDQUFDOztnQkF0QkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSxvREFJVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7O2dCQWJRLFlBQVk7OzswQkFnQm5CLEtBQUs7O0lBWVAsNEJBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQWRZLHFCQUFxQjs7O0lBRWpDLHdDQUNtQjs7SUFFbkIseUNBQW1COzs7OztJQUVQLDBDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQ2VsbFZhbHVlIH0gZnJvbSAnLi4vLi4vZGVmaW5pdGlvbi9jZWxsLXZhbHVlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktZnVuY3Rpb24tdmlldycsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8ZGl2IFtpbm5lckhUTUxdPVwic2FmZUhUTUxcIj48L2Rpdj5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGdW5jdGlvblZpZXdDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdGVsZW1lbnQ6IENlbGxWYWx1ZTtcblxuXHRzYWZlSFRNTDogU2FmZUh0bWw7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoKSB7XG5cdFx0dGhpcy5zYWZlSFRNTCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRoaXMuZWxlbWVudC52YWx1ZSk7XG5cdH1cblxufVxuIl19