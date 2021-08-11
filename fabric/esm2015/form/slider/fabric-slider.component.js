/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
export class FabricSliderComponent {
    constructor() {
        this.changed = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggle(event) {
        event.stopPropagation();
        this.toggled = !this.toggled;
        this.changed.emit(this.toggled);
    }
}
FabricSliderComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-slider',
                template: "<div (click)=\"toggle($event)\"\n\t class=\"gui-slider\">\n\t<span [class.is-toggled]=\"toggled\"\n\t\t  class=\"gui-slider-indicator\"></span>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".gui-slider{background:#ccc;border-radius:4px;cursor:pointer;display:block;height:12px;position:relative;width:32px}.gui-slider .gui-slider-indicator{background:#2185d0;border-radius:50%;box-sizing:border-box;height:16px;overflow:hidden;position:absolute;top:-2px;-ms-transform:translateX(-5.33333px);transform:translateX(-5.33333px);transition:.2s ease-in-out;width:16px}.gui-slider .gui-slider-indicator.is-toggled{-ms-transform:translateX(calc(100% + 16px / 3));transform:translateX(calc(100% + 16px / 3))}", ".gui-dark .gui-slider{background:#424242}.gui-dark .gui-slider .gui-slider-indicator{background:#ce93d8}", ".gui-material .gui-slider .gui-slider-indicator{background:#6200ee}"]
            }] }
];
FabricSliderComponent.propDecorators = {
    toggled: [{ type: Input }],
    changed: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FabricSliderComponent.prototype.toggled;
    /** @type {?} */
    FabricSliderComponent.prototype.changed;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXNsaWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJmb3JtL3NsaWRlci9mYWJyaWMtc2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWFuSCxNQUFNLE9BQU8scUJBQXFCO0lBWGxDO1FBZ0JDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBTzlCLENBQUM7Ozs7O0lBTEEsTUFBTSxDQUFDLEtBQVk7UUFDbEIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUF0QkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixxS0FBNkM7Z0JBTTdDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDL0M7OztzQkFFQyxLQUFLO3NCQUdMLE1BQU07Ozs7SUFIUCx3Q0FDaUI7O0lBRWpCLHdDQUM2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXNsaWRlcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9mYWJyaWMtc2xpZGVyLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vZmFicmljLXNsaWRlci5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL2ZhYnJpYy1zbGlkZXIuZGFyay5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL2ZhYnJpYy1zbGlkZXIubWF0ZXJpYWwubmd4LnNjc3MnXG5cdF0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY1NsaWRlckNvbXBvbmVudCB7XG5cdEBJbnB1dCgpXG5cdHRvZ2dsZWQ6IGJvb2xlYW47XG5cblx0QE91dHB1dCgpXG5cdGNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0dG9nZ2xlKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdHRoaXMudG9nZ2xlZCA9ICF0aGlzLnRvZ2dsZWQ7XG5cdFx0dGhpcy5jaGFuZ2VkLmVtaXQodGhpcy50b2dnbGVkKTtcblx0fVxufVxuIl19