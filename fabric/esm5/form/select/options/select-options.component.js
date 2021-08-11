/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { SelectOptionsGeometryService } from './select-options-geometry.service';
import { FabricSelectedOptionsRepository } from '../selected-option.repository';
import { FabricThemedComponent } from '../../../common/modal/fabric-themed-component';
import { FabricModalThemeService } from '../../../themes/fabric-modal-theme.service';
var FabricSelectOptionsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabricSelectOptionsComponent, _super);
    function FabricSelectOptionsComponent(selectOptionsGeometryService, selectService, changeDetectorRef, elementRef, renderer, themeService) {
        var _this = _super.call(this, elementRef, renderer, themeService) || this;
        _this.selectOptionsGeometryService = selectOptionsGeometryService;
        _this.selectService = selectService;
        _this.changeDetectorRef = changeDetectorRef;
        _this.options = [];
        _this.width = 100;
        return _this;
    }
    /**
     * @return {?}
     */
    FabricSelectOptionsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.selectOptionsGeometryService
            .onSelectOptionsCords()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} cords
         * @return {?}
         */
        function (cords) {
            _this.optionsContainerTopAttribute = cords.getVerticalPosition();
            _this.optionsContainerLeftAttribute = cords.getHorizontalPosition();
            _this.canOpenUpward = cords.getCanOpenUpward();
            _this.changeDetectorRef.detectChanges();
        }));
        this.selectService
            .onSelectedOption()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} selectedOption
         * @return {?}
         */
        function (selectedOption) {
            _this.selectedOption = selectedOption;
            _this.changeDetectorRef.detectChanges();
        }));
    };
    /**
     * @return {?}
     */
    FabricSelectOptionsComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngAfterViewInit.call(this);
        this.initOpenAnimation();
    };
    /**
     * @return {?}
     */
    FabricSelectOptionsComponent.prototype.getElementRef = /**
     * @return {?}
     */
    function () {
        return _super.prototype.getElementRef.call(this);
    };
    /**
     * @return {?}
     */
    FabricSelectOptionsComponent.prototype.detectChanges = /**
     * @return {?}
     */
    function () {
        this.changeDetectorRef.detectChanges();
    };
    /**
     * @param {?} option
     * @return {?}
     */
    FabricSelectOptionsComponent.prototype.selectOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.selectService.next(option);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    FabricSelectOptionsComponent.prototype.isOptionSelected = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        return this.selectedOption && option.name === this.selectedOption.name;
    };
    /**
     * @param {?} option
     * @return {?}
     */
    FabricSelectOptionsComponent.prototype.getOptionValue = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        return option.value ? option.value : option.name;
    };
    /**
     * @return {?}
     */
    FabricSelectOptionsComponent.prototype.initOpenAnimation = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var optionsEl = this.optionListRef.nativeElement;
        this.getRenderer().addClass(optionsEl, 'gui-options-opened');
    };
    FabricSelectOptionsComponent.decorators = [
        { type: Component, args: [{
                    template: "\n\t\t<div #optionList\n\t\t\t [class.gui-upward]=\"canOpenUpward\"\n\t\t\t [class.gui-downward]=\"!canOpenUpward\"\n\t\t\t [style.left.px]=\"optionsContainerLeftAttribute\"\n\t\t\t [style.top.px]=\"optionsContainerTopAttribute\"\n\t\t\t class=\"gui-options-list\">\n\n\t\t\t<div *ngFor=\"let option of options\"\n\t\t\t\t [class.gui-option-selected]=\"isOptionSelected(option)\"\n\t\t\t\t [style.width.px]=\"width\"\n\t\t\t\t (click)=\"selectOption(option)\"\n\t\t\t\t class=\"gui-option\">\n\t\t\t\t{{getOptionValue(option)}}\n\t\t\t</div>\n\t\t</div>\n\t",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    FabricSelectOptionsComponent.ctorParameters = function () { return [
        { type: SelectOptionsGeometryService },
        { type: FabricSelectedOptionsRepository },
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: Renderer2 },
        { type: FabricModalThemeService }
    ]; };
    FabricSelectOptionsComponent.propDecorators = {
        optionListRef: [{ type: ViewChild, args: ['optionList', { static: false },] }]
    };
    return FabricSelectOptionsComponent;
}(FabricThemedComponent));
export { FabricSelectOptionsComponent };
if (false) {
    /** @type {?} */
    FabricSelectOptionsComponent.prototype.optionListRef;
    /** @type {?} */
    FabricSelectOptionsComponent.prototype.options;
    /** @type {?} */
    FabricSelectOptionsComponent.prototype.optionsContainerLeftAttribute;
    /** @type {?} */
    FabricSelectOptionsComponent.prototype.optionsContainerTopAttribute;
    /** @type {?} */
    FabricSelectOptionsComponent.prototype.width;
    /** @type {?} */
    FabricSelectOptionsComponent.prototype.selectedOption;
    /** @type {?} */
    FabricSelectOptionsComponent.prototype.canOpenUpward;
    /**
     * @type {?}
     * @private
     */
    FabricSelectOptionsComponent.prototype.selectOptionsGeometryService;
    /**
     * @type {?}
     * @private
     */
    FabricSelectOptionsComponent.prototype.selectService;
    /**
     * @type {?}
     * @private
     */
    FabricSelectOptionsComponent.prototype.changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW9wdGlvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiZm9ybS9zZWxlY3Qvb3B0aW9ucy9zZWxlY3Qtb3B0aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRU4sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUdWLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRWpGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRXJGO0lBcUJrRCx3REFBcUI7SUFpQnRFLHNDQUE2Qiw0QkFBMEQsRUFDbkUsYUFBOEMsRUFDOUMsaUJBQW9DLEVBQ3JELFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ25CLFlBQXFDO1FBTHhDLFlBTUMsa0JBQU0sVUFBVSxFQUFFLFFBQVEsRUFBRSxZQUFZLENBQUMsU0FDekM7UUFQNEIsa0NBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtRQUNuRSxtQkFBYSxHQUFiLGFBQWEsQ0FBaUM7UUFDOUMsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQWR4RCxhQUFPLEdBQTJCLEVBQUUsQ0FBQztRQU1yQyxXQUFLLEdBQUcsR0FBRyxDQUFDOztJQWFaLENBQUM7Ozs7SUFFRCwrQ0FBUTs7O0lBQVI7UUFBQSxpQkFrQkM7UUFqQkEsSUFBSSxDQUFDLDRCQUE0QjthQUMvQixvQkFBb0IsRUFBRTthQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3RCLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQXlCO1lBQ3BDLEtBQUksQ0FBQyw0QkFBNEIsR0FBRyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUNoRSxLQUFJLENBQUMsNkJBQTZCLEdBQUcsS0FBSyxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDbkUsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUM5QyxLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMsYUFBYTthQUNoQixnQkFBZ0IsRUFBRTthQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3RCLFNBQVM7Ozs7UUFBQyxVQUFDLGNBQStCO1lBQzFDLEtBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxzREFBZTs7O0lBQWY7UUFDQyxpQkFBTSxlQUFlLFdBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsb0RBQWE7OztJQUFiO1FBQ0MsT0FBTyxpQkFBTSxhQUFhLFdBQUUsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsb0RBQWE7OztJQUFiO1FBQ0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRUQsbURBQVk7Ozs7SUFBWixVQUFhLE1BQXVCO1FBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsdURBQWdCOzs7O0lBQWhCLFVBQWlCLE1BQXVCO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLGNBQWMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO0lBQ3hFLENBQUM7Ozs7O0lBRUQscURBQWM7Ozs7SUFBZCxVQUFlLE1BQXVCO1FBQ3JDLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNsRCxDQUFDOzs7O0lBRUQsd0RBQWlCOzs7SUFBakI7O1lBQ08sU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYTtRQUNsRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQzlELENBQUM7O2dCQS9GRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLCtpQkFnQlQ7b0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUMvQzs7OztnQkExQlEsNEJBQTRCO2dCQUU1QiwrQkFBK0I7Z0JBWnZDLGlCQUFpQjtnQkFFakIsVUFBVTtnQkFHVixTQUFTO2dCQVNELHVCQUF1Qjs7O2dDQXlCOUIsU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0lBeUUzQyxtQ0FBQztDQUFBLEFBaEdELENBcUJrRCxxQkFBcUIsR0EyRXRFO1NBM0VZLDRCQUE0Qjs7O0lBRXhDLHFEQUMwQjs7SUFFMUIsK0NBQXFDOztJQUVyQyxxRUFBc0M7O0lBRXRDLG9FQUFxQzs7SUFFckMsNkNBQVk7O0lBRVosc0RBQWdDOztJQUVoQyxxREFBdUI7Ozs7O0lBRVgsb0VBQTJFOzs7OztJQUNwRixxREFBK0Q7Ozs7O0lBQy9ELHlEQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFmdGVyVmlld0luaXQsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRPbkRlc3Ryb3ksXG5cdE9uSW5pdCxcblx0UmVuZGVyZXIyLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR3VpU2VsZWN0T3B0aW9uIH0gZnJvbSAnLi4vc2VsZWN0LW9wdGlvbic7XG5pbXBvcnQgeyBTZWxlY3RPcHRpb25zR2VvbWV0cnlTZXJ2aWNlIH0gZnJvbSAnLi9zZWxlY3Qtb3B0aW9ucy1nZW9tZXRyeS5zZXJ2aWNlJztcbmltcG9ydCB7IFNlbGVjdE9wdGlvbnNDb3JkcyB9IGZyb20gJy4vc2VsZWN0LW9wdGlvbnMuY29yZHMnO1xuaW1wb3J0IHsgRmFicmljU2VsZWN0ZWRPcHRpb25zUmVwb3NpdG9yeSB9IGZyb20gJy4uL3NlbGVjdGVkLW9wdGlvbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IEZhYnJpY1RoZW1lZENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RhbC9mYWJyaWMtdGhlbWVkLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNNb2RhbFRoZW1lU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3RoZW1lcy9mYWJyaWMtbW9kYWwtdGhlbWUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgI29wdGlvbkxpc3Rcblx0XHRcdCBbY2xhc3MuZ3VpLXVwd2FyZF09XCJjYW5PcGVuVXB3YXJkXCJcblx0XHRcdCBbY2xhc3MuZ3VpLWRvd253YXJkXT1cIiFjYW5PcGVuVXB3YXJkXCJcblx0XHRcdCBbc3R5bGUubGVmdC5weF09XCJvcHRpb25zQ29udGFpbmVyTGVmdEF0dHJpYnV0ZVwiXG5cdFx0XHQgW3N0eWxlLnRvcC5weF09XCJvcHRpb25zQ29udGFpbmVyVG9wQXR0cmlidXRlXCJcblx0XHRcdCBjbGFzcz1cImd1aS1vcHRpb25zLWxpc3RcIj5cblxuXHRcdFx0PGRpdiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbnNcIlxuXHRcdFx0XHQgW2NsYXNzLmd1aS1vcHRpb24tc2VsZWN0ZWRdPVwiaXNPcHRpb25TZWxlY3RlZChvcHRpb24pXCJcblx0XHRcdFx0IFtzdHlsZS53aWR0aC5weF09XCJ3aWR0aFwiXG5cdFx0XHRcdCAoY2xpY2spPVwic2VsZWN0T3B0aW9uKG9wdGlvbilcIlxuXHRcdFx0XHQgY2xhc3M9XCJndWktb3B0aW9uXCI+XG5cdFx0XHRcdHt7Z2V0T3B0aW9uVmFsdWUob3B0aW9uKX19XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRmFicmljU2VsZWN0T3B0aW9uc0NvbXBvbmVudCBleHRlbmRzIEZhYnJpY1RoZW1lZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblxuXHRAVmlld0NoaWxkKCdvcHRpb25MaXN0JywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdG9wdGlvbkxpc3RSZWY6IEVsZW1lbnRSZWY7XG5cblx0b3B0aW9uczogQXJyYXk8R3VpU2VsZWN0T3B0aW9uPiA9IFtdO1xuXG5cdG9wdGlvbnNDb250YWluZXJMZWZ0QXR0cmlidXRlOiBudW1iZXI7XG5cblx0b3B0aW9uc0NvbnRhaW5lclRvcEF0dHJpYnV0ZTogbnVtYmVyO1xuXG5cdHdpZHRoID0gMTAwO1xuXG5cdHNlbGVjdGVkT3B0aW9uOiBHdWlTZWxlY3RPcHRpb247XG5cblx0Y2FuT3BlblVwd2FyZDogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNlbGVjdE9wdGlvbnNHZW9tZXRyeVNlcnZpY2U6IFNlbGVjdE9wdGlvbnNHZW9tZXRyeVNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VsZWN0U2VydmljZTogRmFicmljU2VsZWN0ZWRPcHRpb25zUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdHRoZW1lU2VydmljZTogRmFicmljTW9kYWxUaGVtZVNlcnZpY2UpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmLCByZW5kZXJlciwgdGhlbWVTZXJ2aWNlKTtcblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0T3B0aW9uc0dlb21ldHJ5U2VydmljZVxuXHRcdFx0Lm9uU2VsZWN0T3B0aW9uc0NvcmRzKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChjb3JkczogU2VsZWN0T3B0aW9uc0NvcmRzKSA9PiB7XG5cdFx0XHRcdHRoaXMub3B0aW9uc0NvbnRhaW5lclRvcEF0dHJpYnV0ZSA9IGNvcmRzLmdldFZlcnRpY2FsUG9zaXRpb24oKTtcblx0XHRcdFx0dGhpcy5vcHRpb25zQ29udGFpbmVyTGVmdEF0dHJpYnV0ZSA9IGNvcmRzLmdldEhvcml6b250YWxQb3NpdGlvbigpO1xuXHRcdFx0XHR0aGlzLmNhbk9wZW5VcHdhcmQgPSBjb3Jkcy5nZXRDYW5PcGVuVXB3YXJkKCk7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNlbGVjdFNlcnZpY2Vcblx0XHRcdC5vblNlbGVjdGVkT3B0aW9uKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChzZWxlY3RlZE9wdGlvbjogR3VpU2VsZWN0T3B0aW9uKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBzZWxlY3RlZE9wdGlvbjtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcblx0XHR0aGlzLmluaXRPcGVuQW5pbWF0aW9uKCk7XG5cdH1cblxuXHRnZXRFbGVtZW50UmVmKCk6IEVsZW1lbnRSZWYge1xuXHRcdHJldHVybiBzdXBlci5nZXRFbGVtZW50UmVmKCk7XG5cdH1cblxuXHRkZXRlY3RDaGFuZ2VzKCk6IHZvaWQge1xuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0c2VsZWN0T3B0aW9uKG9wdGlvbjogR3VpU2VsZWN0T3B0aW9uKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RTZXJ2aWNlLm5leHQob3B0aW9uKTtcblx0fVxuXG5cdGlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uOiBHdWlTZWxlY3RPcHRpb24pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RlZE9wdGlvbiAmJiBvcHRpb24ubmFtZSA9PT0gdGhpcy5zZWxlY3RlZE9wdGlvbi5uYW1lO1xuXHR9XG5cblx0Z2V0T3B0aW9uVmFsdWUob3B0aW9uOiBHdWlTZWxlY3RPcHRpb24pOiBudW1iZXIgfCBzdHJpbmcge1xuXHRcdHJldHVybiBvcHRpb24udmFsdWUgPyBvcHRpb24udmFsdWUgOiBvcHRpb24ubmFtZTtcblx0fVxuXG5cdGluaXRPcGVuQW5pbWF0aW9uKCk6IHZvaWQge1xuXHRcdGNvbnN0IG9wdGlvbnNFbCA9IHRoaXMub3B0aW9uTGlzdFJlZi5uYXRpdmVFbGVtZW50O1xuXHRcdHRoaXMuZ2V0UmVuZGVyZXIoKS5hZGRDbGFzcyhvcHRpb25zRWwsICdndWktb3B0aW9ucy1vcGVuZWQnKTtcblx0fVxufVxuIl19