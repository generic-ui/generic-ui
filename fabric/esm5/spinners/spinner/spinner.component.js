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
                    template: "<div\n\t[style.width.px]=\"circleSize\"\n\t[style.height.px]=\"circleSize\"\n\tclass=\"gui-spinner\">\n\t<svg\n\t\t[style.width.px]=\"circleSize\"\n\t\t[style.height.px]=\"circleSize\"\n\t\tclass=\"circle-outer\">\n\t\t<circle\n\t\t\t[style.stroke-dashoffset]=\"circumference\"\n\t\t\t[style.stroke-dasharray]=\"croppedCircle\"\n\t\t\t[style.stroke-width]=\"width\"\n\t\t\t[style.stroke]=\"color\"\n\t\t\t[attr.r]=\"r\"\n\t\t\tcx=\"50%\"\n\t\t\tcy=\"50%\">\n\t\t</circle>\n\t</svg>\n\t<svg\n\t\t[style.width.px]=\"circleSize\"\n\t\t[style.height.px]=\"circleSize\"\n\t\tclass=\"circle-inner\">\n\t\t<circle\n\t\t\t[style.stroke-dashoffset]=\"circumference\"\n\t\t\t[style.stroke-dasharray]=\"croppedCircle\"\n\t\t\t[style.stroke-width]=\"width\"\n\t\t\t[style.stroke]=\"color\"\n\t\t\t[attr.r]=\"r\"\n\t\t\tcx=\"50%\"\n\t\t\tcy=\"50%\">\n\t\t</circle>\n\t</svg>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJzcGlubmVycy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwSCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHdEQ7SUFXNEMsa0RBQWU7SUFLMUQsZ0NBQVksVUFBc0IsRUFDL0IsUUFBbUI7ZUFDckIsa0JBQU0sVUFBVSxFQUFFLFFBQVEsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQseUNBQVE7OztJQUFSO1FBQ0MsaUJBQU0sUUFBUSxXQUFFLENBQUM7SUFDbEIsQ0FBQzs7Z0JBdkJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsYUFBYTtvQkFDdkIsbTNCQUFxQztvQkFNckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDckM7Ozs7Z0JBZjRDLFVBQVU7Z0JBQVMsU0FBUzs7O3dCQWtCdkUsS0FBSzs7SUFXUCw2QkFBQztDQUFBLEFBeEJELENBVzRDLGVBQWUsR0FhMUQ7U0FiWSxzQkFBc0I7OztJQUVsQyx1Q0FDYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlcjIsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFic3RyYWN0U3Bpbm5lciB9IGZyb20gJy4uL2Fic3RyYWN0LXNwaW5uZXInO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zcGlubmVyJyxcblx0dGVtcGxhdGVVcmw6ICdzcGlubmVyLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vc3Bpbm5lci5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL3NwaW5uZXIubWF0ZXJpYWwubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9zcGlubmVyLmRhcmsubmd4LnNjc3MnXG5cdF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY1NwaW5uZXJDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdFNwaW5uZXIge1xuXG5cdEBJbnB1dCgpXG5cdGNvbG9yOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cmVuZGVyZXI6IFJlbmRlcmVyMikge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYsIHJlbmRlcmVyKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHN1cGVyLm5nT25Jbml0KCk7XG5cdH1cbn1cbiJdfQ==