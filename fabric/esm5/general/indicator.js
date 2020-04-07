/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
/**
 * @abstract
 */
var Indicator = /** @class */ (function () {
    function Indicator(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.outline = false;
        this.PRIMARY_CLASS_NAME = 'gui-primary';
        this.SECONDARY_CLASS_NAME = 'gui-secondary';
        this.OUTLINE_CLASS_NAME = 'gui-outline';
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    Indicator.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.primary) {
            if (this.primary) {
                this.addClass(this.PRIMARY_CLASS_NAME);
            }
            else {
                this.removeClass(this.PRIMARY_CLASS_NAME);
            }
        }
        if (changes.secondary) {
            if (this.secondary) {
                this.addClass(this.SECONDARY_CLASS_NAME);
            }
            else {
                this.removeClass(this.SECONDARY_CLASS_NAME);
            }
        }
        if (changes.outline) {
            if (this.outline) {
                this.addClass(this.OUTLINE_CLASS_NAME);
            }
            else {
                this.removeClass(this.OUTLINE_CLASS_NAME);
            }
        }
    };
    /**
     * @protected
     * @param {?} className
     * @return {?}
     */
    Indicator.prototype.addClass = /**
     * @protected
     * @param {?} className
     * @return {?}
     */
    function (className) {
        this.renderer.addClass(this.elementRef.nativeElement, className);
    };
    /**
     * @protected
     * @param {?} className
     * @return {?}
     */
    Indicator.prototype.removeClass = /**
     * @protected
     * @param {?} className
     * @return {?}
     */
    function (className) {
        this.renderer.removeClass(this.elementRef.nativeElement, className);
    };
    Indicator.propDecorators = {
        primary: [{ type: Input }],
        secondary: [{ type: Input }],
        outline: [{ type: Input }]
    };
    return Indicator;
}());
export { Indicator };
if (false) {
    /** @type {?} */
    Indicator.prototype.primary;
    /** @type {?} */
    Indicator.prototype.secondary;
    /** @type {?} */
    Indicator.prototype.outline;
    /**
     * @type {?}
     * @private
     */
    Indicator.prototype.PRIMARY_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    Indicator.prototype.SECONDARY_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    Indicator.prototype.OUTLINE_CLASS_NAME;
    /**
     * @type {?}
     * @protected
     */
    Indicator.prototype.elementRef;
    /**
     * @type {?}
     * @protected
     */
    Indicator.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kaWNhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiZ2VuZXJhbC9pbmRpY2F0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYyxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDOzs7O0FBRTVFO0lBZUMsbUJBQWdDLFVBQXNCLEVBQ3JDLFFBQW1CO1FBREosZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNyQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBUHBDLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFUix1QkFBa0IsR0FBRyxhQUFhLENBQUM7UUFDbkMseUJBQW9CLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLHVCQUFrQixHQUFHLGFBQWEsQ0FBQztJQUlwRCxDQUFDOzs7OztJQUVELCtCQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUVqQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDcEIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7YUFDMUM7U0FDRDtRQUVELElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUN0QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7YUFDekM7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQzthQUM1QztTQUNEO1FBRUQsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ3BCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQzthQUN2QztpQkFBTTtnQkFDTixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2FBQzFDO1NBQ0Q7SUFDRixDQUFDOzs7Ozs7SUFFUyw0QkFBUTs7Ozs7SUFBbEIsVUFBbUIsU0FBaUI7UUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7O0lBRVMsK0JBQVc7Ozs7O0lBQXJCLFVBQXNCLFNBQWlCO1FBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7OzBCQWxEQSxLQUFLOzRCQUdMLEtBQUs7MEJBR0wsS0FBSzs7SUE2Q1AsZ0JBQUM7Q0FBQSxBQXJERCxJQXFEQztTQXJEcUIsU0FBUzs7O0lBRTlCLDRCQUNpQjs7SUFFakIsOEJBQ21COztJQUVuQiw0QkFDeUI7Ozs7O0lBRXpCLHVDQUFvRDs7Ozs7SUFDcEQseUNBQXdEOzs7OztJQUN4RCx1Q0FBb0Q7Ozs7O0lBRTlCLCtCQUFnQzs7Ozs7SUFDL0MsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSW5kaWNhdG9yIHtcblxuXHRASW5wdXQoKVxuXHRwcmltYXJ5OiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHNlY29uZGFyeTogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRvdXRsaW5lOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSByZWFkb25seSBQUklNQVJZX0NMQVNTX05BTUUgPSAnZ3VpLXByaW1hcnknO1xuXHRwcml2YXRlIHJlYWRvbmx5IFNFQ09OREFSWV9DTEFTU19OQU1FID0gJ2d1aS1zZWNvbmRhcnknO1xuXHRwcml2YXRlIHJlYWRvbmx5IE9VVExJTkVfQ0xBU1NfTkFNRSA9ICdndWktb3V0bGluZSc7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRcdFx0ICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG5cdFx0aWYgKGNoYW5nZXMucHJpbWFyeSkge1xuXHRcdFx0aWYgKHRoaXMucHJpbWFyeSkge1xuXHRcdFx0XHR0aGlzLmFkZENsYXNzKHRoaXMuUFJJTUFSWV9DTEFTU19OQU1FKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3ModGhpcy5QUklNQVJZX0NMQVNTX05BTUUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLnNlY29uZGFyeSkge1xuXHRcdFx0aWYgKHRoaXMuc2Vjb25kYXJ5KSB7XG5cdFx0XHRcdHRoaXMuYWRkQ2xhc3ModGhpcy5TRUNPTkRBUllfQ0xBU1NfTkFNRSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnJlbW92ZUNsYXNzKHRoaXMuU0VDT05EQVJZX0NMQVNTX05BTUUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLm91dGxpbmUpIHtcblx0XHRcdGlmICh0aGlzLm91dGxpbmUpIHtcblx0XHRcdFx0dGhpcy5hZGRDbGFzcyh0aGlzLk9VVExJTkVfQ0xBU1NfTkFNRSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnJlbW92ZUNsYXNzKHRoaXMuT1VUTElORV9DTEFTU19OQU1FKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgYWRkQ2xhc3MoY2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuXHR9XG5cblx0cHJvdGVjdGVkIHJlbW92ZUNsYXNzKGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcblx0fVxufVxuIl19