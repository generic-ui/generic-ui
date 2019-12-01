/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
        this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(this.element);
    };
    FunctionViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-function-view',
                    template: "\n\n\t\t<div [innerHTML]=\"safeHTML\"></div>\n\n\t"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb24tdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL2NvbXBvc2l0aW9uL3F1ZXJ5L3ZpZXcvZnVuY3Rpb24tdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQztBQUduRTtJQWVDLCtCQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQzNDLENBQUM7Ozs7SUFFRCwyQ0FBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RFLENBQUM7O2dCQXBCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLG9EQUlUO2lCQUNEOzs7O2dCQVZRLFlBQVk7OzswQkFhbkIsS0FBSzs7SUFZUCw0QkFBQztDQUFBLEFBdEJELElBc0JDO1NBZFkscUJBQXFCOzs7SUFFakMsd0NBQ2E7O0lBRWIseUNBQW1COzs7OztJQUVQLDBDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktZnVuY3Rpb24tdmlldycsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8ZGl2IFtpbm5lckhUTUxdPVwic2FmZUhUTUxcIj48L2Rpdj5cblxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIEZ1bmN0aW9uVmlld0NvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0ZWxlbWVudDogYW55O1xuXG5cdHNhZmVIVE1MOiBTYWZlSHRtbDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcygpIHtcblx0XHR0aGlzLnNhZmVIVE1MID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGhpcy5lbGVtZW50KTtcblx0fVxuXG59XG4iXX0=