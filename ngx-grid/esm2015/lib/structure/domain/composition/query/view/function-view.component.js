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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb24tdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL2NvbXBvc2l0aW9uL3F1ZXJ5L3ZpZXcvZnVuY3Rpb24tdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQztBQVduRSxNQUFNLE9BQU8scUJBQXFCOzs7O0lBT2pDLFlBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFDM0MsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RFLENBQUM7OztZQXBCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFOzs7O0VBSVQ7YUFDRDs7OztZQVZRLFlBQVk7OztzQkFhbkIsS0FBSzs7OztJQUFOLHdDQUNhOztJQUViLHlDQUFtQjs7Ozs7SUFFUCwwQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWZ1bmN0aW9uLXZpZXcnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGRpdiBbaW5uZXJIVE1MXT1cInNhZmVIVE1MXCI+PC9kaXY+XG5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBGdW5jdGlvblZpZXdDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdGVsZW1lbnQ6IGFueTtcblxuXHRzYWZlSFRNTDogU2FmZUh0bWw7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoKSB7XG5cdFx0dGhpcy5zYWZlSFRNTCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRoaXMuZWxlbWVudCk7XG5cdH1cblxufVxuIl19