/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, ViewEncapsulation } from '@angular/core';
var FabricTooltipComponent = /** @class */ (function () {
    function FabricTooltipComponent(elementRef) {
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    FabricTooltipComponent.prototype.correctPosition = /**
     * @return {?}
     */
    function () {
        this.top -= this.elementRef.nativeElement.offsetHeight;
    };
    FabricTooltipComponent.decorators = [
        { type: Component, args: [{
                    template: "\n\t\t{{text}}\n\t",
                    host: {
                        '[class.gui-tooltip]': 'true',
                        '[style.left.px]': 'left',
                        '[style.top.px]': 'top'
                    },
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".gui-tooltip{position:absolute;display:block;background:rgba(0,0,0,.8);border-style:solid;border-width:0;border-radius:4px;box-sizing:border-box;color:#fff;font:400 14px Arial;vertical-align:middle;padding:8px 12px;-ms-transform:translateX(-50%);transform:translateX(-50%);z-index:10}.gui-tooltip:after{content:'';position:absolute;border-style:solid;border-width:5px;border-color:#333 transparent transparent;margin-left:-5px;top:100%;left:50%}"]
                }] }
    ];
    /** @nocollapse */
    FabricTooltipComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return FabricTooltipComponent;
}());
export { FabricTooltipComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXRvb2x0aXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsibW9kYWwvdG9vbHRpcC9mYWJyaWMtdG9vbHRpcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxHO0lBa0JDLGdDQUE2QixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQ25ELENBQUM7Ozs7SUFFRCxnREFBZTs7O0lBQWY7UUFDQyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztJQUN4RCxDQUFDOztnQkF2QkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxvQkFFVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0wscUJBQXFCLEVBQUUsTUFBTTt3QkFDN0IsaUJBQWlCLEVBQUUsTUFBTTt3QkFDekIsZ0JBQWdCLEVBQUUsS0FBSztxQkFDdkI7b0JBRUQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDL0M7Ozs7Z0JBZDRDLFVBQVU7O0lBMkJ2RCw2QkFBQztDQUFBLEFBekJELElBeUJDO1NBWlksc0JBQXNCOzs7SUFDbEMsc0NBQWE7O0lBQ2Isc0NBQWE7O0lBQ2IscUNBQVk7Ozs7O0lBRUEsNENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHRlbXBsYXRlOiBgXG5cdFx0e3t0ZXh0fX1cblx0YCxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLXRvb2x0aXBdJzogJ3RydWUnLFxuXHRcdCdbc3R5bGUubGVmdC5weF0nOiAnbGVmdCcsXG5cdFx0J1tzdHlsZS50b3AucHhdJzogJ3RvcCdcblx0fSxcblx0c3R5bGVVcmxzOiBbJy4vZmFicmljLXRvb2x0aXAubmd4LnNjc3MnXSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRmFicmljVG9vbHRpcENvbXBvbmVudCB7XG5cdHRleHQ6IHN0cmluZztcblx0bGVmdDogbnVtYmVyO1xuXHR0b3A6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0fVxuXG5cdGNvcnJlY3RQb3NpdGlvbigpOiB2b2lkIHtcblx0XHR0aGlzLnRvcCAtPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cdH1cblxufVxuIl19