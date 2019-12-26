/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export class FunctionViewComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(this.element);
    }
}
FunctionViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-function-view',
                template: `

		<div [innerHTML]="safeHTML"></div>

	`
            }] }
];
/** @nocollapse */
FunctionViewComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
FunctionViewComponent.propDecorators = {
    element: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb24tdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL2NvbXBvc2l0aW9uL3JlYWQvdmlldy9mdW5jdGlvbi12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDO0FBV25FLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFPakMsWUFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztJQUMzQyxDQUFDOzs7O0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7O1lBcEJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7Ozs7RUFJVDthQUNEOzs7O1lBVlEsWUFBWTs7O3NCQWFuQixLQUFLOzs7O0lBQU4sd0NBQ2E7O0lBRWIseUNBQW1COzs7OztJQUVQLDBDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktZnVuY3Rpb24tdmlldycsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8ZGl2IFtpbm5lckhUTUxdPVwic2FmZUhUTUxcIj48L2Rpdj5cblxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIEZ1bmN0aW9uVmlld0NvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0ZWxlbWVudDogYW55O1xuXG5cdHNhZmVIVE1MOiBTYWZlSHRtbDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcygpIHtcblx0XHR0aGlzLnNhZmVIVE1MID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGhpcy5lbGVtZW50KTtcblx0fVxuXG59XG4iXX0=