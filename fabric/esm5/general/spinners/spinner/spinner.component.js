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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJnZW5lcmFsL3NwaW5uZXJzL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBILE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUd0RDtJQVc0QyxrREFBZTtJQUsxRCxnQ0FBWSxVQUFzQixFQUMvQixRQUFtQjtlQUNyQixrQkFBTSxVQUFVLEVBQUUsUUFBUSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCx5Q0FBUTs7O0lBQVI7UUFDQyxpQkFBTSxRQUFRLFdBQUUsQ0FBQztJQUNsQixDQUFDOztnQkF2QkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxhQUFhO29CQUN2QixtM0JBQXFDO29CQU1yQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUNyQzs7OztnQkFmNEMsVUFBVTtnQkFBUyxTQUFTOzs7d0JBa0J2RSxLQUFLOztJQVdQLDZCQUFDO0NBQUEsQUF4QkQsQ0FXNEMsZUFBZSxHQWExRDtTQWJZLHNCQUFzQjs7O0lBRWxDLHVDQUNjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyMiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWJzdHJhY3RTcGlubmVyIH0gZnJvbSAnLi4vYWJzdHJhY3Qtc3Bpbm5lcic7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXNwaW5uZXInLFxuXHR0ZW1wbGF0ZVVybDogJ3NwaW5uZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9zcGlubmVyLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvc3Bpbm5lci5tYXRlcmlhbC5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL3NwaW5uZXIuZGFyay5uZ3guc2Nzcydcblx0XSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRmFicmljU3Bpbm5lckNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0U3Bpbm5lciB7XG5cblx0QElucHV0KClcblx0Y29sb3I6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRyZW5kZXJlcjogUmVuZGVyZXIyKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZiwgcmVuZGVyZXIpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0c3VwZXIubmdPbkluaXQoKTtcblx0fVxufVxuIl19