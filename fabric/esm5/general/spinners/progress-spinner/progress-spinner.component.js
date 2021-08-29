/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { AbstractSpinner } from '../abstract-spinner';
import { SpinnerMode } from './spinner-mode';
var FabricProgressSpinnerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabricProgressSpinnerComponent, _super);
    function FabricProgressSpinnerComponent(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer) || this;
        _this.value = 0;
        _this.animationsDisabled = true;
        _this.secondCircleDisabled = true;
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FabricProgressSpinnerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
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
    };
    /**
     * @return {?}
     */
    FabricProgressSpinnerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.calculateValuePercentage(this.circumference, this.value);
    };
    /**
     * @protected
     * @param {?} circumference
     * @param {?} value
     * @return {?}
     */
    FabricProgressSpinnerComponent.prototype.calculateValuePercentage = /**
     * @protected
     * @param {?} circumference
     * @param {?} value
     * @return {?}
     */
    function (circumference, value) {
        this.valuePercentage = circumference - (value * circumference / 100);
    };
    FabricProgressSpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-progress-spinner',
                    template: "<div\n\t[style.height.px]=\"circleSize\"\n\t[style.width.px]=\"circleSize\"\n\tclass=\"gui-progress-spinner\">\n\t<svg\n\t\t[style.height.px]=\"circleSize\"\n\t\t[style.width.px]=\"circleSize\"\n\t\tclass=\"circle-outer\">\n\t\t<circle\n\t\t\t[attr.r]=\"r\"\n\t\t\t[style.stroke-dasharray]=\"circumference\"\n\t\t\t[style.stroke-dashoffset]=\"valuePercentage\"\n\t\t\t[style.stroke-width]=\"width\"\n\t\t\t[style.stroke]=\"color\"\n\t\t\tcx=\"50%\"\n\t\t\tcy=\"50%\">\n\t\t</circle>\n\t</svg>\n\t<svg\n\t\t[style.height.px]=\"circleSize\"\n\t\t[style.width.px]=\"circleSize\"\n\t\tclass=\"circle-inner\">\n\t\t<circle\n\t\t\t[attr.r]=\"r\"\n\t\t\t[style.stroke-dasharray]=\"croppedCircle\"\n\t\t\t[style.stroke-dashoffset]=\"circumference\"\n\t\t\t[style.stroke-width]=\"width\"\n\t\t\t[style.stroke]=\"color\"\n\t\t\tcx=\"50%\"\n\t\t\tcy=\"50%\">\n\t\t</circle>\n\t</svg>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: [".gui-progress-spinner{display:inline-block;margin:4px;position:relative;-ms-transform:rotate(-90deg);transform:rotate(-90deg)}.gui-progress-spinner circle{fill:transparent;stroke:#999}.gui-progress-spinner svg{position:absolute}.gui-progress-spinner .circle-inner{animation:2s linear infinite reverse forwards gui-spin-reverse}.gui-progress-spinner .circle-outer{-webkit-animation:2s linear infinite forwards gui-spin;animation:2s linear infinite forwards gui-spin}.gui-animations-disabled .gui-progress-spinner.gui-progress-spinner .circle-outer,.gui-animations-disabled .gui-progress-spinner.gui-progress-spinner.gui-progress-spinner{-webkit-animation:none;animation:none}.gui-second-circle-disabled .gui-progress-spinner.gui-progress-spinner .circle-inner{opacity:0}.gui-primary .gui-progress-spinner.gui-progress-spinner circle{stroke:#2185d0}.gui-secondary .gui-progress-spinner.gui-progress-spinner circle{stroke:#3cb371}", ".gui-material .gui-progress-spinner circle{stroke:#3949ab}.gui-material .gui-primary .gui-progress-spinner circle{stroke:#6200ee}.gui-material .gui-secondary .gui-progress-spinner circle{stroke:#0097a7}", ".gui-dark .gui-progress-spinner circle{stroke:#424242}.gui-dark .gui-primary .gui-progress-spinner circle{stroke:#ce93d8}.gui-dark .gui-secondary .gui-progress-spinner circle{stroke:#80cbc4}"]
                }] }
    ];
    /** @nocollapse */
    FabricProgressSpinnerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    FabricProgressSpinnerComponent.propDecorators = {
        value: [{ type: Input }],
        mode: [{ type: Input }],
        color: [{ type: Input }]
    };
    return FabricProgressSpinnerComponent;
}(AbstractSpinner));
export { FabricProgressSpinnerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJnZW5lcmFsL3NwaW5uZXJzL3Byb2dyZXNzLXNwaW5uZXIvcHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQXFCLFNBQVMsRUFBaUIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEosT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QztJQVdvRCwwREFBZTtJQWlCbEUsd0NBQVksVUFBc0IsRUFDL0IsUUFBbUI7UUFEdEIsWUFFQyxrQkFBTSxVQUFVLEVBQUUsUUFBUSxDQUFDLFNBQzNCO1FBakJELFdBQUssR0FBVyxDQUFDLENBQUM7UUFRbEIsd0JBQWtCLEdBQVksSUFBSSxDQUFDO1FBRW5DLDBCQUFvQixHQUFZLElBQUksQ0FBQzs7SUFPckMsQ0FBQzs7Ozs7SUFFRCxvREFBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDakMsaUJBQU0sV0FBVyxZQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTNCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU5RCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFDLElBQUksRUFBRTtZQUNuQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7WUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDeEM7UUFFRCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDLENBQUM7U0FDekM7YUFBTTtZQUNOLElBQUksQ0FBQyxXQUFXLENBQUMseUJBQXlCLENBQUMsQ0FBQztTQUM1QztRQUVELElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsNEJBQTRCLENBQUMsQ0FBQztTQUM1QzthQUFNO1lBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1NBQy9DO0lBQ0YsQ0FBQzs7OztJQUVELGlEQUFROzs7SUFBUjtRQUNDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7Ozs7O0lBRVMsaUVBQXdCOzs7Ozs7SUFBbEMsVUFBbUMsYUFBcUIsRUFBRSxLQUFhO1FBQ3RFLElBQUksQ0FBQyxlQUFlLEdBQUcsYUFBYSxHQUFHLENBQUMsS0FBSyxHQUFHLGFBQWEsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN0RSxDQUFDOztnQkFoRUQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLDgzQkFBZ0Q7b0JBTWhELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3JDOzs7O2dCQWY0QyxVQUFVO2dCQUE0QixTQUFTOzs7d0JBa0IxRixLQUFLO3VCQUdMLEtBQUs7d0JBR0wsS0FBSzs7SUE4Q1AscUNBQUM7Q0FBQSxBQWpFRCxDQVdvRCxlQUFlLEdBc0RsRTtTQXREWSw4QkFBOEI7OztJQUUxQywrQ0FDa0I7O0lBRWxCLDhDQUNrQjs7SUFFbEIsK0NBQ2M7O0lBRWQsNERBQW1DOztJQUVuQyw4REFBcUM7O0lBRXJDLHlEQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBYnN0cmFjdFNwaW5uZXIgfSBmcm9tICcuLi9hYnN0cmFjdC1zcGlubmVyJztcbmltcG9ydCB7IFNwaW5uZXJNb2RlIH0gZnJvbSAnLi9zcGlubmVyLW1vZGUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktcHJvZ3Jlc3Mtc3Bpbm5lcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vcHJvZ3Jlc3Mtc3Bpbm5lci5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL3Byb2dyZXNzLXNwaW5uZXIubWF0ZXJpYWwubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9wcm9ncmVzcy1zcGlubmVyLmRhcmsubmd4LnNjc3MnXG5cdF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY1Byb2dyZXNzU3Bpbm5lckNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0U3Bpbm5lciBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcblxuXHRASW5wdXQoKVxuXHR2YWx1ZTogbnVtYmVyID0gMDtcblxuXHRASW5wdXQoKVxuXHRtb2RlOiBTcGlubmVyTW9kZTtcblxuXHRASW5wdXQoKVxuXHRjb2xvcjogc3RyaW5nO1xuXG5cdGFuaW1hdGlvbnNEaXNhYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cblx0c2Vjb25kQ2lyY2xlRGlzYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdHZhbHVlUGVyY2VudGFnZTogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmLCByZW5kZXJlcik7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0c3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVZhbHVlUGVyY2VudGFnZSh0aGlzLmNpcmN1bWZlcmVuY2UsIHRoaXMudmFsdWUpO1xuXG5cdFx0aWYgKHRoaXMubW9kZSA9PT0gU3Bpbm5lck1vZGUuU3Bpbikge1xuXHRcdFx0dGhpcy5hbmltYXRpb25zRGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdHRoaXMuc2Vjb25kQ2lyY2xlRGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdHRoaXMudmFsdWUgPSAwO1xuXHRcdFx0dGhpcy5jaXJjdW1mZXJlbmNlID0gdGhpcy5jcm9wcGVkQ2lyY2xlO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmFuaW1hdGlvbnNEaXNhYmxlZCkge1xuXHRcdFx0dGhpcy5hZGRDbGFzcygnZ3VpLWFuaW1hdGlvbnMtZGlzYWJsZWQnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnZ3VpLWFuaW1hdGlvbnMtZGlzYWJsZWQnKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zZWNvbmRDaXJjbGVEaXNhYmxlZCkge1xuXHRcdFx0dGhpcy5hZGRDbGFzcygnZ3VpLXNlY29uZC1jaXJjbGUtZGlzYWJsZWQnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnZ3VpLXNlY29uZC1jaXJjbGUtZGlzYWJsZWQnKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmNhbGN1bGF0ZVZhbHVlUGVyY2VudGFnZSh0aGlzLmNpcmN1bWZlcmVuY2UsIHRoaXMudmFsdWUpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGNhbGN1bGF0ZVZhbHVlUGVyY2VudGFnZShjaXJjdW1mZXJlbmNlOiBudW1iZXIsIHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLnZhbHVlUGVyY2VudGFnZSA9IGNpcmN1bWZlcmVuY2UgLSAodmFsdWUgKiBjaXJjdW1mZXJlbmNlIC8gMTAwKTtcblx0fVxufVxuIl19