/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { AbstractSpinner } from '../abstract-spinner';
var FabricSpinnerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabricSpinnerComponent, _super);
    function FabricSpinnerComponent(elementRef, renderer) {
        return _super.call(this, elementRef, renderer) || this;
    }
    /**
     * @return {?}
     */
    FabricSpinnerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
    };
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
    FabricSpinnerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    FabricSpinnerComponent.propDecorators = {
        color: [{ type: Input }]
    };
    return FabricSpinnerComponent;
}(AbstractSpinner));
export { FabricSpinnerComponent };
if (false) {
    /** @type {?} */
    FabricSpinnerComponent.prototype.color;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJidXR0b25zLWluZGljYXRvcnMvc3Bpbm5lcnMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEgsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR3REO0lBVzRDLGtEQUFlO0lBSzFELGdDQUFZLFVBQXNCLEVBQy9CLFFBQW1CO2VBQ3JCLGtCQUFNLFVBQVUsRUFBRSxRQUFRLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELHlDQUFROzs7SUFBUjtRQUNDLGlCQUFNLFFBQVEsV0FBRSxDQUFDO0lBQ2xCLENBQUM7O2dCQXZCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLG0zQkFBcUM7b0JBTXJDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3JDOzs7O2dCQWY0QyxVQUFVO2dCQUFTLFNBQVM7Ozt3QkFrQnZFLEtBQUs7O0lBV1AsNkJBQUM7Q0FBQSxBQXhCRCxDQVc0QyxlQUFlLEdBYTFEO1NBYlksc0JBQXNCOzs7SUFFbEMsdUNBQ2MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBYnN0cmFjdFNwaW5uZXIgfSBmcm9tICcuLi9hYnN0cmFjdC1zcGlubmVyJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3Bpbm5lcicsXG5cdHRlbXBsYXRlVXJsOiAnc3Bpbm5lci5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL3NwaW5uZXIubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9zcGlubmVyLm1hdGVyaWFsLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvc3Bpbm5lci5kYXJrLm5neC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNTcGlubmVyQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RTcGlubmVyIHtcblxuXHRASW5wdXQoKVxuXHRjb2xvcjogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmLCByZW5kZXJlcik7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHRzdXBlci5uZ09uSW5pdCgpO1xuXHR9XG59XG4iXX0=