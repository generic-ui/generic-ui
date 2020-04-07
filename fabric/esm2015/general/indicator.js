/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
/**
 * @abstract
 */
export class Indicator {
    /**
     * @protected
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
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
    ngOnChanges(changes) {
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
    }
    /**
     * @protected
     * @param {?} className
     * @return {?}
     */
    addClass(className) {
        this.renderer.addClass(this.elementRef.nativeElement, className);
    }
    /**
     * @protected
     * @param {?} className
     * @return {?}
     */
    removeClass(className) {
        this.renderer.removeClass(this.elementRef.nativeElement, className);
    }
}
Indicator.propDecorators = {
    primary: [{ type: Input }],
    secondary: [{ type: Input }],
    outline: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kaWNhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiZ2VuZXJhbC9pbmRpY2F0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYyxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDOzs7O0FBRTVFLE1BQU0sT0FBZ0IsU0FBUzs7Ozs7O0lBZTlCLFlBQWdDLFVBQXNCLEVBQ3JDLFFBQW1CO1FBREosZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNyQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBUHBDLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFUix1QkFBa0IsR0FBRyxhQUFhLENBQUM7UUFDbkMseUJBQW9CLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLHVCQUFrQixHQUFHLGFBQWEsQ0FBQztJQUlwRCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUVqQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDcEIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7YUFDMUM7U0FDRDtRQUVELElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUN0QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7YUFDekM7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQzthQUM1QztTQUNEO1FBRUQsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ3BCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQzthQUN2QztpQkFBTTtnQkFDTixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2FBQzFDO1NBQ0Q7SUFDRixDQUFDOzs7Ozs7SUFFUyxRQUFRLENBQUMsU0FBaUI7UUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7O0lBRVMsV0FBVyxDQUFDLFNBQWlCO1FBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7OztzQkFsREEsS0FBSzt3QkFHTCxLQUFLO3NCQUdMLEtBQUs7Ozs7SUFOTiw0QkFDaUI7O0lBRWpCLDhCQUNtQjs7SUFFbkIsNEJBQ3lCOzs7OztJQUV6Qix1Q0FBb0Q7Ozs7O0lBQ3BELHlDQUF3RDs7Ozs7SUFDeEQsdUNBQW9EOzs7OztJQUU5QiwrQkFBZ0M7Ozs7O0lBQy9DLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEluZGljYXRvciB7XG5cblx0QElucHV0KClcblx0cHJpbWFyeTogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRzZWNvbmRhcnk6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0b3V0bGluZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgUFJJTUFSWV9DTEFTU19OQU1FID0gJ2d1aS1wcmltYXJ5Jztcblx0cHJpdmF0ZSByZWFkb25seSBTRUNPTkRBUllfQ0xBU1NfTkFNRSA9ICdndWktc2Vjb25kYXJ5Jztcblx0cHJpdmF0ZSByZWFkb25seSBPVVRMSU5FX0NMQVNTX05BTUUgPSAnZ3VpLW91dGxpbmUnO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0XHRcdCAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuXHRcdGlmIChjaGFuZ2VzLnByaW1hcnkpIHtcblx0XHRcdGlmICh0aGlzLnByaW1hcnkpIHtcblx0XHRcdFx0dGhpcy5hZGRDbGFzcyh0aGlzLlBSSU1BUllfQ0xBU1NfTkFNRSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnJlbW92ZUNsYXNzKHRoaXMuUFJJTUFSWV9DTEFTU19OQU1FKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5zZWNvbmRhcnkpIHtcblx0XHRcdGlmICh0aGlzLnNlY29uZGFyeSkge1xuXHRcdFx0XHR0aGlzLmFkZENsYXNzKHRoaXMuU0VDT05EQVJZX0NMQVNTX05BTUUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5yZW1vdmVDbGFzcyh0aGlzLlNFQ09OREFSWV9DTEFTU19OQU1FKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5vdXRsaW5lKSB7XG5cdFx0XHRpZiAodGhpcy5vdXRsaW5lKSB7XG5cdFx0XHRcdHRoaXMuYWRkQ2xhc3ModGhpcy5PVVRMSU5FX0NMQVNTX05BTUUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5yZW1vdmVDbGFzcyh0aGlzLk9VVExJTkVfQ0xBU1NfTkFNRSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIGFkZENsYXNzKGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcblx0fVxuXG5cdHByb3RlY3RlZCByZW1vdmVDbGFzcyhjbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG5cdH1cbn1cbiJdfQ==