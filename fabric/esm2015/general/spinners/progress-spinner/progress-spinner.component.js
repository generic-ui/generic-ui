/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { AbstractSpinner } from '../abstract-spinner';
import { SpinnerMode } from './spinner-mode';
export class FabricProgressSpinnerComponent extends AbstractSpinner {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        super(elementRef, renderer);
        this.value = 0;
        this.animationsDisabled = true;
        this.secondCircleDisabled = true;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        this.calculateValuePercentage(this.circumference, this.value);
        if (this.mode === SpinnerMode.Spin) {
            this.animationsDisabled = false;
            this.secondCircleDisabled = false;
            this.value = 0;
            this.circumference = this.croppedCircle;
        }
        if (this.animationsDisabled) {
            this.addClass('gui-animations-disabled');
        }
        else {
            this.removeClass('gui-animations-disabled');
        }
        if (this.secondCircleDisabled) {
            this.addClass('gui-second-circle-disabled');
        }
        else {
            this.removeClass('gui-second-circle-disabled');
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.calculateValuePercentage(this.circumference, this.value);
    }
    /**
     * @protected
     * @param {?} circumference
     * @param {?} value
     * @return {?}
     */
    calculateValuePercentage(circumference, value) {
        this.valuePercentage = circumference - (value * circumference / 100);
    }
}
FabricProgressSpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-progress-spinner',
                template: "<div\n\t\t[style.height.px]=\"circleSize\"\n\t\t[style.width.px]=\"circleSize\"\n\t\tclass=\"gui-progress-spinner\">\n\t<svg\n\t\t\t[style.height.px]=\"circleSize\"\n\t\t\t[style.width.px]=\"circleSize\"\n\t\t\tclass=\"circle-outer\">\n\t\t<circle\n\t\t\t\t[attr.r]=\"r\"\n\t\t\t\t[style.stroke-dasharray]=\"circumference\"\n\t\t\t\t[style.stroke-dashoffset]=\"valuePercentage\"\n\t\t\t\t[style.stroke-width]=\"width\"\n\t\t\t\t[style.stroke]=\"color\"\n\t\t\t\tcx=\"50%\"\n\t\t\t\tcy=\"50%\">\n\t\t</circle>\n\t</svg>\n\t<svg\n\t\t\t[style.height.px]=\"circleSize\"\n\t\t\t[style.width.px]=\"circleSize\"\n\t\t\tclass=\"circle-inner\">\n\t\t<circle\n\t\t\t\t[attr.r]=\"r\"\n\t\t\t\t[style.stroke-dasharray]=\"croppedCircle\"\n\t\t\t\t[style.stroke-dashoffset]=\"circumference\"\n\t\t\t\t[style.stroke-width]=\"width\"\n\t\t\t\t[style.stroke]=\"color\"\n\t\t\t\tcx=\"50%\"\n\t\t\t\tcy=\"50%\">\n\t\t</circle>\n\t</svg>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".gui-progress-spinner{display:inline-block;position:relative;margin:4px;-ms-transform:rotate(-90deg);transform:rotate(-90deg)}.gui-progress-spinner circle{fill:transparent;stroke:#999}.gui-progress-spinner svg{position:absolute}.gui-progress-spinner .circle-inner{animation:2s linear infinite reverse forwards gui-spin-reverse}.gui-progress-spinner .circle-outer{-webkit-animation:2s linear infinite forwards gui-spin;animation:2s linear infinite forwards gui-spin}.gui-animations-disabled .gui-progress-spinner.gui-progress-spinner .circle-outer,.gui-animations-disabled .gui-progress-spinner.gui-progress-spinner.gui-progress-spinner{-webkit-animation:none;animation:none}.gui-second-circle-disabled .gui-progress-spinner.gui-progress-spinner .circle-inner{opacity:0}.gui-primary .gui-progress-spinner.gui-progress-spinner circle{stroke:#2185d0}.gui-secondary .gui-progress-spinner.gui-progress-spinner circle{stroke:#3cb371}", ".gui-material .gui-progress-spinner circle{stroke:#3949ab}.gui-material .gui-primary .gui-progress-spinner circle{stroke:#6200ee}.gui-material .gui-secondary .gui-progress-spinner circle{stroke:#0097a7}", ".gui-dark .gui-progress-spinner circle{stroke:#424242}.gui-dark .gui-primary .gui-progress-spinner circle{stroke:#ce93d8}.gui-dark .gui-secondary .gui-progress-spinner circle{stroke:#80cbc4}"]
            }] }
];
/** @nocollapse */
FabricProgressSpinnerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
FabricProgressSpinnerComponent.propDecorators = {
    value: [{ type: Input }],
    mode: [{ type: Input }],
    color: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FabricProgressSpinnerComponent.prototype.value;
    /** @type {?} */
    FabricProgressSpinnerComponent.prototype.mode;
    /** @type {?} */
    FabricProgressSpinnerComponent.prototype.color;
    /** @type {?} */
    FabricProgressSpinnerComponent.prototype.animationsDisabled;
    /** @type {?} */
    FabricProgressSpinnerComponent.prototype.secondCircleDisabled;
    /** @type {?} */
    FabricProgressSpinnerComponent.prototype.valuePercentage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJnZW5lcmFsL3NwaW5uZXJzL3Byb2dyZXNzLXNwaW5uZXIvcHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBR0wsU0FBUyxFQUVULGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBYTdDLE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxlQUFlOzs7OztJQWlCbEUsWUFBWSxVQUFzQixFQUMvQixRQUFtQjtRQUNyQixLQUFLLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBaEI3QixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBUWxCLHVCQUFrQixHQUFZLElBQUksQ0FBQztRQUVuQyx5QkFBb0IsR0FBWSxJQUFJLENBQUM7SUFPckMsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDakMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUzQixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFOUQsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyxJQUFJLEVBQUU7WUFDbkMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztZQUNoQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQ3hDO1FBRUQsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1NBQ3pDO2FBQU07WUFDTixJQUFJLENBQUMsV0FBVyxDQUFDLHlCQUF5QixDQUFDLENBQUM7U0FDNUM7UUFFRCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLDRCQUE0QixDQUFDLENBQUM7U0FDNUM7YUFBTTtZQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsNEJBQTRCLENBQUMsQ0FBQztTQUMvQztJQUNGLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7Ozs7SUFFUyx3QkFBd0IsQ0FBQyxhQUFxQixFQUFFLEtBQWE7UUFDdEUsSUFBSSxDQUFDLGVBQWUsR0FBRyxhQUFhLEdBQUcsQ0FBQyxLQUFLLEdBQUcsYUFBYSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7OztZQWhFRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsNDZCQUE4QztnQkFNOUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUNyQzs7OztZQXRCQSxVQUFVO1lBSVYsU0FBUzs7O29CQXFCUixLQUFLO21CQUdMLEtBQUs7b0JBR0wsS0FBSzs7OztJQU5OLCtDQUNrQjs7SUFFbEIsOENBQ2tCOztJQUVsQiwrQ0FDYzs7SUFFZCw0REFBbUM7O0lBRW5DLDhEQUFxQzs7SUFFckMseURBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0SW5wdXQsXG5cdE9uQ2hhbmdlcyxcblx0T25Jbml0LFxuXHRSZW5kZXJlcjIsXG5cdFNpbXBsZUNoYW5nZXMsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBYnN0cmFjdFNwaW5uZXIgfSBmcm9tICcuLi9hYnN0cmFjdC1zcGlubmVyJztcbmltcG9ydCB7IFNwaW5uZXJNb2RlIH0gZnJvbSAnLi9zcGlubmVyLW1vZGUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktcHJvZ3Jlc3Mtc3Bpbm5lcicsXG5cdHRlbXBsYXRlVXJsOiAncHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL3Byb2dyZXNzLXNwaW5uZXIubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9wcm9ncmVzcy1zcGlubmVyLm1hdGVyaWFsLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvcHJvZ3Jlc3Mtc3Bpbm5lci5kYXJrLm5neC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNQcm9ncmVzc1NwaW5uZXJDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdFNwaW5uZXIgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cblx0QElucHV0KClcblx0dmFsdWU6IG51bWJlciA9IDA7XG5cblx0QElucHV0KClcblx0bW9kZTogU3Bpbm5lck1vZGU7XG5cblx0QElucHV0KClcblx0Y29sb3I6IHN0cmluZztcblxuXHRhbmltYXRpb25zRGlzYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdHNlY29uZENpcmNsZURpc2FibGVkOiBib29sZWFuID0gdHJ1ZTtcblxuXHR2YWx1ZVBlcmNlbnRhZ2U6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRyZW5kZXJlcjogUmVuZGVyZXIyKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZiwgcmVuZGVyZXIpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVWYWx1ZVBlcmNlbnRhZ2UodGhpcy5jaXJjdW1mZXJlbmNlLCB0aGlzLnZhbHVlKTtcblxuXHRcdGlmICh0aGlzLm1vZGUgPT09IFNwaW5uZXJNb2RlLlNwaW4pIHtcblx0XHRcdHRoaXMuYW5pbWF0aW9uc0Rpc2FibGVkID0gZmFsc2U7XG5cdFx0XHR0aGlzLnNlY29uZENpcmNsZURpc2FibGVkID0gZmFsc2U7XG5cdFx0XHR0aGlzLnZhbHVlID0gMDtcblx0XHRcdHRoaXMuY2lyY3VtZmVyZW5jZSA9IHRoaXMuY3JvcHBlZENpcmNsZTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5hbmltYXRpb25zRGlzYWJsZWQpIHtcblx0XHRcdHRoaXMuYWRkQ2xhc3MoJ2d1aS1hbmltYXRpb25zLWRpc2FibGVkJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2d1aS1hbmltYXRpb25zLWRpc2FibGVkJyk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2Vjb25kQ2lyY2xlRGlzYWJsZWQpIHtcblx0XHRcdHRoaXMuYWRkQ2xhc3MoJ2d1aS1zZWNvbmQtY2lyY2xlLWRpc2FibGVkJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2d1aS1zZWNvbmQtY2lyY2xlLWRpc2FibGVkJyk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5jYWxjdWxhdGVWYWx1ZVBlcmNlbnRhZ2UodGhpcy5jaXJjdW1mZXJlbmNlLCB0aGlzLnZhbHVlKTtcblx0fVxuXG5cdHByb3RlY3RlZCBjYWxjdWxhdGVWYWx1ZVBlcmNlbnRhZ2UoY2lyY3VtZmVyZW5jZTogbnVtYmVyLCB2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy52YWx1ZVBlcmNlbnRhZ2UgPSBjaXJjdW1mZXJlbmNlIC0gKHZhbHVlICogY2lyY3VtZmVyZW5jZSAvIDEwMCk7XG5cdH1cbn1cbiJdfQ==