import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
export class FabricSliderComponent {
    constructor() {
        this.changed = new EventEmitter();
    }
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
                styles: [".gui-slider{background:#cccccc;border-radius:4px;cursor:pointer;display:block;height:12px;position:relative;width:32px}.gui-slider .gui-slider-indicator{background:#2185d0;border-radius:50%;box-sizing:border-box;height:16px;overflow:hidden;position:absolute;top:-2px;-ms-transform:translateX(-5.3333333333px);transform:translate(-5.3333333333px);transition:all .2s ease-in-out;width:16px}.gui-slider .gui-slider-indicator.is-toggled{-ms-transform:translateX(calc(100% + 16px / 3));transform:translate(calc(100% + 16px / 3))}\n", ".gui-dark .gui-slider{background:#424242}.gui-dark .gui-slider .gui-slider-indicator{background:#ce93d8}\n", ".gui-material .gui-slider .gui-slider-indicator{background:#6200ee}\n"]
            },] }
];
FabricSliderComponent.propDecorators = {
    toggled: [{ type: Input }],
    changed: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXNsaWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZm9ybS9zbGlkZXIvZmFicmljLXNsaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWFuSCxNQUFNLE9BQU8scUJBQXFCO0lBWGxDO1FBZ0JDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBTzlCLENBQUM7SUFMQSxNQUFNLENBQUMsS0FBWTtRQUNsQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7OztZQXRCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLHFLQUE2QztnQkFNN0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUMvQzs7O3NCQUVDLEtBQUs7c0JBR0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXNsaWRlcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9mYWJyaWMtc2xpZGVyLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vZmFicmljLXNsaWRlci5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL2ZhYnJpYy1zbGlkZXIuZGFyay5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL2ZhYnJpYy1zbGlkZXIubWF0ZXJpYWwubmd4LnNjc3MnXG5cdF0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY1NsaWRlckNvbXBvbmVudCB7XG5cdEBJbnB1dCgpXG5cdHRvZ2dsZWQ6IGJvb2xlYW47XG5cblx0QE91dHB1dCgpXG5cdGNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0dG9nZ2xlKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdHRoaXMudG9nZ2xlZCA9ICF0aGlzLnRvZ2dsZWQ7XG5cdFx0dGhpcy5jaGFuZ2VkLmVtaXQodGhpcy50b2dnbGVkKTtcblx0fVxufVxuIl19