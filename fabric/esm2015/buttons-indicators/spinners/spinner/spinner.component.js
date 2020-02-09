/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { AbstractSpinner } from '../abstract-spinner';
export class FabricSpinnerComponent extends AbstractSpinner {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        super(elementRef, renderer);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
    }
}
FabricSpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-spinner',
                template: "<div\n\t[style.height.px]=\"circleSize\"\n\t[style.width.px]=\"circleSize\"\n\tclass=\"gui-spinner\">\n\t<svg\n\t\t[style.height.px]=\"circleSize\"\n\t\t[style.width.px]=\"circleSize\"\n\t\tclass=\"circle-outer\">\n\t\t<circle\n\t\t\t[attr.r]=\"r\"\n\t\t\t[style.stroke-dasharray]=\"croppedCircle\"\n\t\t\t[style.stroke-dashoffset]=\"circumference\"\n\t\t\t[style.stroke-width]=\"width\"\n\t\t\t[style.stroke]=\"color\"\n\t\t\tcx=\"50%\"\n\t\t\tcy=\"50%\">\n\t\t</circle>\n\t</svg>\n\t<svg\n\t\t[style.height.px]=\"circleSize\"\n\t\t[style.width.px]=\"circleSize\"\n\t\tclass=\"circle-inner\">\n\t\t<circle\n\t\t\t[attr.r]=\"r\"\n\t\t\t[style.stroke-dasharray]=\"croppedCircle\"\n\t\t\t[style.stroke-dashoffset]=\"circumference\"\n\t\t\t[style.stroke-width]=\"width\"\n\t\t\t[style.stroke]=\"color\"\n\t\t\tcx=\"50%\"\n\t\t\tcy=\"50%\">\n\t\t</circle>\n\t</svg>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["@-webkit-keyframes gui-spin{from{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}to{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}@keyframes gui-spin{from{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}to{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}@-webkit-keyframes gui-spin-reverse{from{-webkit-transform:rotate(-90deg) scale(.8);transform:rotate(-90deg) scale(.8)}to{-webkit-transform:rotate(270deg) scale(.8);transform:rotate(270deg) scale(.8)}}@keyframes gui-spin-reverse{from{-webkit-transform:rotate(-90deg) scale(.8);transform:rotate(-90deg) scale(.8)}to{-webkit-transform:rotate(270deg) scale(.8);transform:rotate(270deg) scale(.8)}}.gui-spinner{display:inline-block;position:relative;margin:4px;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg)}.gui-spinner circle{fill:transparent;stroke:#999}.gui-spinner svg{position:absolute}.gui-spinner .circle-inner{animation:2s linear infinite reverse forwards gui-spin-reverse}.gui-spinner .circle-outer{-webkit-animation:2s linear infinite forwards gui-spin;animation:2s linear infinite forwards gui-spin}.gui-primary .gui-spinner.gui-spinner circle{stroke:#2185d0}.gui-secondary .gui-spinner.gui-spinner circle{stroke:#3cb371}", ".gui-material .gui-spinner circle{stroke:#3949ab}.gui-material .gui-primary .gui-spinner circle{stroke:#6200ee}.gui-material .gui-secondary .gui-spinner circle{stroke:#0097a7}", ".gui-dark .gui-spinner circle{stroke:#424242}.gui-dark .gui-primary .gui-spinner circle{stroke:#ce93d8}.gui-dark .gui-secondary .gui-spinner circle{stroke:#80cbc4}"]
            }] }
];
/** @nocollapse */
FabricSpinnerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
FabricSpinnerComponent.propDecorators = {
    color: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FabricSpinnerComponent.prototype.color;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJidXR0b25zLWluZGljYXRvcnMvc3Bpbm5lcnMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwSCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFjdEQsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGVBQWU7Ozs7O0lBSzFELFlBQVksVUFBc0IsRUFDL0IsUUFBbUI7UUFDckIsS0FBSyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7WUF2QkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixtM0JBQXFDO2dCQU1yQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3JDOzs7O1lBZjRDLFVBQVU7WUFBUyxTQUFTOzs7b0JBa0J2RSxLQUFLOzs7O0lBQU4sdUNBQ2MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBYnN0cmFjdFNwaW5uZXIgfSBmcm9tICcuLi9hYnN0cmFjdC1zcGlubmVyJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3Bpbm5lcicsXG5cdHRlbXBsYXRlVXJsOiAnc3Bpbm5lci5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL3NwaW5uZXIubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9zcGlubmVyLm1hdGVyaWFsLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvc3Bpbm5lci5kYXJrLm5neC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNTcGlubmVyQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RTcGlubmVyIHtcblxuXHRASW5wdXQoKVxuXHRjb2xvcjogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmLCByZW5kZXJlcik7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHRzdXBlci5uZ09uSW5pdCgpO1xuXHR9XG59XG4iXX0=