/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { SelectOptionsGeometryService } from './select-options-geometry.service';
import { FabricSelectedOptionsRepository } from '../selected-option.repository';
import { FabricThemedComponent } from '../../../common/modal/fabric-themed-component';
import { FabricModalThemeService } from '../../../themes/fabric-modal-theme.service';
export class FabricSelectOptionsComponent extends FabricThemedComponent {
    /**
     * @param {?} selectOptionsGeometryService
     * @param {?} selectService
     * @param {?} changeDetectorRef
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} themeService
     */
    constructor(selectOptionsGeometryService, selectService, changeDetectorRef, elementRef, renderer, themeService) {
        super(elementRef, renderer, themeService);
        this.selectOptionsGeometryService = selectOptionsGeometryService;
        this.selectService = selectService;
        this.changeDetectorRef = changeDetectorRef;
        this.options = [];
        this.width = 100;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.selectOptionsGeometryService
            .onSelectOptionsCords()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} cords
         * @return {?}
         */
        (cords) => {
            this.optionsContainerTopAttribute = cords.getVerticalPosition();
            this.optionsContainerLeftAttribute = cords.getHorizontalPosition();
            this.canOpenUpward = cords.getCanOpenUpward();
            this.changeDetectorRef.detectChanges();
        }));
        this.selectService
            .onSelectedOption()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} selectedOption
         * @return {?}
         */
        (selectedOption) => {
            this.selectedOption = selectedOption;
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.initOpenAnimation();
    }
    /**
     * @return {?}
     */
    getElementRef() {
        return super.getElementRef();
    }
    /**
     * @return {?}
     */
    detectChanges() {
        this.changeDetectorRef.detectChanges();
    }
    /**
     * @param {?} option
     * @return {?}
     */
    selectOption(option) {
        this.selectService.next(option);
    }
    /**
     * @param {?} option
     * @return {?}
     */
    isOptionSelected(option) {
        return this.selectedOption && option.name === this.selectedOption.name;
    }
    /**
     * @param {?} option
     * @return {?}
     */
    getOptionValue(option) {
        return option.value ? option.value : option.name;
    }
    /**
     * @return {?}
     */
    initOpenAnimation() {
        /** @type {?} */
        const optionsEl = this.optionListRef.nativeElement;
        this.getRenderer().addClass(optionsEl, 'gui-options-opened');
    }
}
FabricSelectOptionsComponent.decorators = [
    { type: Component, args: [{
                template: `
		<div #optionList
			 [class.gui-upward]="canOpenUpward"
			 [class.gui-downward]="!canOpenUpward"
			 [style.left.px]="optionsContainerLeftAttribute"
			 [style.top.px]="optionsContainerTopAttribute"
			 class="gui-options-list">

			<div *ngFor="let option of options"
				 [class.gui-option-selected]="isOptionSelected(option)"
				 [style.width.px]="width"
				 (click)="selectOption(option)"
				 class="gui-option">
				{{getOptionValue(option)}}
			</div>
		</div>
	`,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
FabricSelectOptionsComponent.ctorParameters = () => [
    { type: SelectOptionsGeometryService },
    { type: FabricSelectedOptionsRepository },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: Renderer2 },
    { type: FabricModalThemeService }
];
FabricSelectOptionsComponent.propDecorators = {
    optionListRef: [{ type: ViewChild, args: ['optionList', { static: false },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW9wdGlvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiZm9ybS9zZWxlY3Qvb3B0aW9ucy9zZWxlY3Qtb3B0aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBR1YsU0FBUyxFQUNULFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFakYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUF1QnJGLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxxQkFBcUI7Ozs7Ozs7OztJQWlCdEUsWUFBNkIsNEJBQTBELEVBQ25FLGFBQThDLEVBQzlDLGlCQUFvQyxFQUNyRCxVQUFzQixFQUN0QixRQUFtQixFQUNuQixZQUFxQztRQUN2QyxLQUFLLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztRQU5kLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7UUFDbkUsa0JBQWEsR0FBYixhQUFhLENBQWlDO1FBQzlDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFkeEQsWUFBTyxHQUEyQixFQUFFLENBQUM7UUFNckMsVUFBSyxHQUFHLEdBQUcsQ0FBQztJQWFaLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLDRCQUE0QjthQUMvQixvQkFBb0IsRUFBRTthQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3RCLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQXlCLEVBQUUsRUFBRTtZQUN4QyxJQUFJLENBQUMsNEJBQTRCLEdBQUcsS0FBSyxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDaEUsSUFBSSxDQUFDLDZCQUE2QixHQUFHLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQ25FLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDOUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLGFBQWE7YUFDaEIsZ0JBQWdCLEVBQUU7YUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN0QixTQUFTOzs7O1FBQUMsQ0FBQyxjQUErQixFQUFFLEVBQUU7WUFDOUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7WUFDckMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsYUFBYTtRQUNaLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxNQUF1QjtRQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLE1BQXVCO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLGNBQWMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO0lBQ3hFLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLE1BQXVCO1FBQ3JDLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNsRCxDQUFDOzs7O0lBRUQsaUJBQWlCOztjQUNWLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWE7UUFDbEQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7WUEvRkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztFQWdCVDtnQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDL0M7Ozs7WUExQlEsNEJBQTRCO1lBRTVCLCtCQUErQjtZQVp2QyxpQkFBaUI7WUFFakIsVUFBVTtZQUdWLFNBQVM7WUFTRCx1QkFBdUI7Ozs0QkF5QjlCLFNBQVMsU0FBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzs7O0lBQTFDLHFEQUMwQjs7SUFFMUIsK0NBQXFDOztJQUVyQyxxRUFBc0M7O0lBRXRDLG9FQUFxQzs7SUFFckMsNkNBQVk7O0lBRVosc0RBQWdDOztJQUVoQyxxREFBdUI7Ozs7O0lBRVgsb0VBQTJFOzs7OztJQUNwRixxREFBK0Q7Ozs7O0lBQy9ELHlEQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFmdGVyVmlld0luaXQsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRPbkRlc3Ryb3ksXG5cdE9uSW5pdCxcblx0UmVuZGVyZXIyLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR3VpU2VsZWN0T3B0aW9uIH0gZnJvbSAnLi4vc2VsZWN0LW9wdGlvbic7XG5pbXBvcnQgeyBTZWxlY3RPcHRpb25zR2VvbWV0cnlTZXJ2aWNlIH0gZnJvbSAnLi9zZWxlY3Qtb3B0aW9ucy1nZW9tZXRyeS5zZXJ2aWNlJztcbmltcG9ydCB7IFNlbGVjdE9wdGlvbnNDb3JkcyB9IGZyb20gJy4vc2VsZWN0LW9wdGlvbnMuY29yZHMnO1xuaW1wb3J0IHsgRmFicmljU2VsZWN0ZWRPcHRpb25zUmVwb3NpdG9yeSB9IGZyb20gJy4uL3NlbGVjdGVkLW9wdGlvbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IEZhYnJpY1RoZW1lZENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RhbC9mYWJyaWMtdGhlbWVkLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNNb2RhbFRoZW1lU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3RoZW1lcy9mYWJyaWMtbW9kYWwtdGhlbWUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgI29wdGlvbkxpc3Rcblx0XHRcdCBbY2xhc3MuZ3VpLXVwd2FyZF09XCJjYW5PcGVuVXB3YXJkXCJcblx0XHRcdCBbY2xhc3MuZ3VpLWRvd253YXJkXT1cIiFjYW5PcGVuVXB3YXJkXCJcblx0XHRcdCBbc3R5bGUubGVmdC5weF09XCJvcHRpb25zQ29udGFpbmVyTGVmdEF0dHJpYnV0ZVwiXG5cdFx0XHQgW3N0eWxlLnRvcC5weF09XCJvcHRpb25zQ29udGFpbmVyVG9wQXR0cmlidXRlXCJcblx0XHRcdCBjbGFzcz1cImd1aS1vcHRpb25zLWxpc3RcIj5cblxuXHRcdFx0PGRpdiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbnNcIlxuXHRcdFx0XHQgW2NsYXNzLmd1aS1vcHRpb24tc2VsZWN0ZWRdPVwiaXNPcHRpb25TZWxlY3RlZChvcHRpb24pXCJcblx0XHRcdFx0IFtzdHlsZS53aWR0aC5weF09XCJ3aWR0aFwiXG5cdFx0XHRcdCAoY2xpY2spPVwic2VsZWN0T3B0aW9uKG9wdGlvbilcIlxuXHRcdFx0XHQgY2xhc3M9XCJndWktb3B0aW9uXCI+XG5cdFx0XHRcdHt7Z2V0T3B0aW9uVmFsdWUob3B0aW9uKX19XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRmFicmljU2VsZWN0T3B0aW9uc0NvbXBvbmVudCBleHRlbmRzIEZhYnJpY1RoZW1lZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblxuXHRAVmlld0NoaWxkKCdvcHRpb25MaXN0JywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdG9wdGlvbkxpc3RSZWY6IEVsZW1lbnRSZWY7XG5cblx0b3B0aW9uczogQXJyYXk8R3VpU2VsZWN0T3B0aW9uPiA9IFtdO1xuXG5cdG9wdGlvbnNDb250YWluZXJMZWZ0QXR0cmlidXRlOiBudW1iZXI7XG5cblx0b3B0aW9uc0NvbnRhaW5lclRvcEF0dHJpYnV0ZTogbnVtYmVyO1xuXG5cdHdpZHRoID0gMTAwO1xuXG5cdHNlbGVjdGVkT3B0aW9uOiBHdWlTZWxlY3RPcHRpb247XG5cblx0Y2FuT3BlblVwd2FyZDogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNlbGVjdE9wdGlvbnNHZW9tZXRyeVNlcnZpY2U6IFNlbGVjdE9wdGlvbnNHZW9tZXRyeVNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VsZWN0U2VydmljZTogRmFicmljU2VsZWN0ZWRPcHRpb25zUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdHRoZW1lU2VydmljZTogRmFicmljTW9kYWxUaGVtZVNlcnZpY2UpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmLCByZW5kZXJlciwgdGhlbWVTZXJ2aWNlKTtcblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0T3B0aW9uc0dlb21ldHJ5U2VydmljZVxuXHRcdFx0Lm9uU2VsZWN0T3B0aW9uc0NvcmRzKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChjb3JkczogU2VsZWN0T3B0aW9uc0NvcmRzKSA9PiB7XG5cdFx0XHRcdHRoaXMub3B0aW9uc0NvbnRhaW5lclRvcEF0dHJpYnV0ZSA9IGNvcmRzLmdldFZlcnRpY2FsUG9zaXRpb24oKTtcblx0XHRcdFx0dGhpcy5vcHRpb25zQ29udGFpbmVyTGVmdEF0dHJpYnV0ZSA9IGNvcmRzLmdldEhvcml6b250YWxQb3NpdGlvbigpO1xuXHRcdFx0XHR0aGlzLmNhbk9wZW5VcHdhcmQgPSBjb3Jkcy5nZXRDYW5PcGVuVXB3YXJkKCk7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNlbGVjdFNlcnZpY2Vcblx0XHRcdC5vblNlbGVjdGVkT3B0aW9uKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChzZWxlY3RlZE9wdGlvbjogR3VpU2VsZWN0T3B0aW9uKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBzZWxlY3RlZE9wdGlvbjtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcblx0XHR0aGlzLmluaXRPcGVuQW5pbWF0aW9uKCk7XG5cdH1cblxuXHRnZXRFbGVtZW50UmVmKCk6IEVsZW1lbnRSZWYge1xuXHRcdHJldHVybiBzdXBlci5nZXRFbGVtZW50UmVmKCk7XG5cdH1cblxuXHRkZXRlY3RDaGFuZ2VzKCk6IHZvaWQge1xuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0c2VsZWN0T3B0aW9uKG9wdGlvbjogR3VpU2VsZWN0T3B0aW9uKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RTZXJ2aWNlLm5leHQob3B0aW9uKTtcblx0fVxuXG5cdGlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uOiBHdWlTZWxlY3RPcHRpb24pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RlZE9wdGlvbiAmJiBvcHRpb24ubmFtZSA9PT0gdGhpcy5zZWxlY3RlZE9wdGlvbi5uYW1lO1xuXHR9XG5cblx0Z2V0T3B0aW9uVmFsdWUob3B0aW9uOiBHdWlTZWxlY3RPcHRpb24pOiBudW1iZXIgfCBzdHJpbmcge1xuXHRcdHJldHVybiBvcHRpb24udmFsdWUgPyBvcHRpb24udmFsdWUgOiBvcHRpb24ubmFtZTtcblx0fVxuXG5cdGluaXRPcGVuQW5pbWF0aW9uKCk6IHZvaWQge1xuXHRcdGNvbnN0IG9wdGlvbnNFbCA9IHRoaXMub3B0aW9uTGlzdFJlZi5uYXRpdmVFbGVtZW50O1xuXHRcdHRoaXMuZ2V0UmVuZGVyZXIoKS5hZGRDbGFzcyhvcHRpb25zRWwsICdndWktb3B0aW9ucy1vcGVuZWQnKTtcblx0fVxufVxuIl19