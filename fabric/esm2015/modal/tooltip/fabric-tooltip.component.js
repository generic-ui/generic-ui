/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, ViewEncapsulation } from '@angular/core';
export class FabricTooltipComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    correctPosition() {
        this.top -= this.elementRef.nativeElement.offsetHeight;
    }
}
FabricTooltipComponent.decorators = [
    { type: Component, args: [{
                template: `
		{{text}}
	`,
                host: {
                    '[class.gui-tooltip]': 'true',
                    '[style.left.px]': 'left',
                    '[style.top.px]': 'top'
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".gui-tooltip{background:rgba(0,0,0,.8);border-radius:4px;border-style:solid;border-width:0;box-sizing:border-box;color:#fff;display:block;font:400 14px Arial;padding:8px 12px;position:absolute;-ms-transform:translateX(-50%);transform:translateX(-50%);vertical-align:middle;z-index:10}.gui-tooltip::after{border-color:#333 transparent transparent;border-style:solid;border-width:5px;content:'';left:50%;margin-left:-5px;position:absolute;top:100%}"]
            }] }
];
/** @nocollapse */
FabricTooltipComponent.ctorParameters = () => [
    { type: ElementRef }
];
if (false) {
    /** @type {?} */
    FabricTooltipComponent.prototype.text;
    /** @type {?} */
    FabricTooltipComponent.prototype.left;
    /** @type {?} */
    FabricTooltipComponent.prototype.top;
    /**
     * @type {?}
     * @private
     */
    FabricTooltipComponent.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXRvb2x0aXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsibW9kYWwvdG9vbHRpcC9mYWJyaWMtdG9vbHRpcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBZWxHLE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFLbEMsWUFBNkIsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUNuRCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO0lBQ3hELENBQUM7OztZQXZCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFOztFQUVUO2dCQUNELElBQUksRUFBRTtvQkFDTCxxQkFBcUIsRUFBRSxNQUFNO29CQUM3QixpQkFBaUIsRUFBRSxNQUFNO29CQUN6QixnQkFBZ0IsRUFBRSxLQUFLO2lCQUN2QjtnQkFFRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQy9DOzs7O1lBZDRDLFVBQVU7Ozs7SUFnQnRELHNDQUFhOztJQUNiLHNDQUFhOztJQUNiLHFDQUFZOzs7OztJQUVBLDRDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZTogYFxuXHRcdHt7dGV4dH19XG5cdGAsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS10b29sdGlwXSc6ICd0cnVlJyxcblx0XHQnW3N0eWxlLmxlZnQucHhdJzogJ2xlZnQnLFxuXHRcdCdbc3R5bGUudG9wLnB4XSc6ICd0b3AnXG5cdH0sXG5cdHN0eWxlVXJsczogWycuL2ZhYnJpYy10b29sdGlwLm5neC5zY3NzJ10sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY1Rvb2x0aXBDb21wb25lbnQge1xuXHR0ZXh0OiBzdHJpbmc7XG5cdGxlZnQ6IG51bWJlcjtcblx0dG9wOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdH1cblxuXHRjb3JyZWN0UG9zaXRpb24oKTogdm9pZCB7XG5cdFx0dGhpcy50b3AgLT0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXHR9XG5cbn1cbiJdfQ==