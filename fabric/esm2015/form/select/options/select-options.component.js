import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { SelectOptionsGeometryService } from './select-options-geometry.service';
import { FabricSelectedOptionsRepository } from '../selected-option.repository';
import { FabricThemedComponent } from '../../../common/modal/fabric-themed-component';
import { FabricModalThemeService } from '../../../themes/fabric-modal-theme.service';
export class FabricSelectOptionsComponent extends FabricThemedComponent {
    constructor(selectOptionsGeometryService, selectService, changeDetectorRef, elementRef, renderer, themeService) {
        super(elementRef, renderer, themeService);
        this.selectOptionsGeometryService = selectOptionsGeometryService;
        this.selectService = selectService;
        this.changeDetectorRef = changeDetectorRef;
        this.options = [];
        this.width = 100;
    }
    ngOnInit() {
        this.selectOptionsGeometryService
            .onSelectOptionsCords()
            .pipe(this.takeUntil())
            .subscribe((cords) => {
            this.optionsContainerTopAttribute = cords.getVerticalPosition();
            this.optionsContainerLeftAttribute = cords.getHorizontalPosition();
            this.canOpenUpward = cords.getCanOpenUpward();
            this.changeDetectorRef.detectChanges();
        });
        this.selectService
            .onSelectedOption()
            .pipe(this.takeUntil())
            .subscribe((selectedOption) => {
            this.selectedOption = selectedOption;
            this.changeDetectorRef.detectChanges();
        });
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.initOpenAnimation();
    }
    getElementRef() {
        return super.getElementRef();
    }
    detectChanges() {
        this.changeDetectorRef.detectChanges();
    }
    selectOption(option) {
        this.selectService.next(option);
    }
    isOptionSelected(option) {
        return this.selectedOption && option.name === this.selectedOption.name;
    }
    getOptionValue(option) {
        return option.value ? option.value : option.name;
    }
    initOpenAnimation() {
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
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW9wdGlvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL2Zvcm0vc2VsZWN0L29wdGlvbnMvc2VsZWN0LW9wdGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBR1YsU0FBUyxFQUNULFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFakYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUF1QnJGLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxxQkFBcUI7SUFpQnRFLFlBQTZCLDRCQUEwRCxFQUNuRSxhQUE4QyxFQUM5QyxpQkFBb0MsRUFDckQsVUFBc0IsRUFDdEIsUUFBbUIsRUFDbkIsWUFBcUM7UUFDdkMsS0FBSyxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFOZCxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBQ25FLGtCQUFhLEdBQWIsYUFBYSxDQUFpQztRQUM5QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBZHhELFlBQU8sR0FBMkIsRUFBRSxDQUFDO1FBTXJDLFVBQUssR0FBRyxHQUFHLENBQUM7SUFhWixDQUFDO0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyw0QkFBNEI7YUFDL0Isb0JBQW9CLEVBQUU7YUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN0QixTQUFTLENBQUMsQ0FBQyxLQUF5QixFQUFFLEVBQUU7WUFDeEMsSUFBSSxDQUFDLDRCQUE0QixHQUFHLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQ2hFLElBQUksQ0FBQyw2QkFBNkIsR0FBRyxLQUFLLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUNuRSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQzlDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyxhQUFhO2FBQ2hCLGdCQUFnQixFQUFFO2FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEIsU0FBUyxDQUFDLENBQUMsY0FBK0IsRUFBRSxFQUFFO1lBQzlDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxlQUFlO1FBQ2QsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxhQUFhO1FBQ1osT0FBTyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELGFBQWE7UUFDWixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELFlBQVksQ0FBQyxNQUF1QjtRQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsTUFBdUI7UUFDdkMsT0FBTyxJQUFJLENBQUMsY0FBYyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7SUFDeEUsQ0FBQztJQUVELGNBQWMsQ0FBQyxNQUF1QjtRQUNyQyxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDbEQsQ0FBQztJQUVELGlCQUFpQjtRQUNoQixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUNuRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQzlELENBQUM7OztZQS9GRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0VBZ0JUO2dCQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUMvQzs7O1lBMUJRLDRCQUE0QjtZQUU1QiwrQkFBK0I7WUFadkMsaUJBQWlCO1lBRWpCLFVBQVU7WUFHVixTQUFTO1lBU0QsdUJBQXVCOzs7NEJBeUI5QixTQUFTLFNBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFmdGVyVmlld0luaXQsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRPbkRlc3Ryb3ksXG5cdE9uSW5pdCxcblx0UmVuZGVyZXIyLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR3VpU2VsZWN0T3B0aW9uIH0gZnJvbSAnLi4vc2VsZWN0LW9wdGlvbic7XG5pbXBvcnQgeyBTZWxlY3RPcHRpb25zR2VvbWV0cnlTZXJ2aWNlIH0gZnJvbSAnLi9zZWxlY3Qtb3B0aW9ucy1nZW9tZXRyeS5zZXJ2aWNlJztcbmltcG9ydCB7IFNlbGVjdE9wdGlvbnNDb3JkcyB9IGZyb20gJy4vc2VsZWN0LW9wdGlvbnMuY29yZHMnO1xuaW1wb3J0IHsgRmFicmljU2VsZWN0ZWRPcHRpb25zUmVwb3NpdG9yeSB9IGZyb20gJy4uL3NlbGVjdGVkLW9wdGlvbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IEZhYnJpY1RoZW1lZENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RhbC9mYWJyaWMtdGhlbWVkLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNNb2RhbFRoZW1lU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3RoZW1lcy9mYWJyaWMtbW9kYWwtdGhlbWUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgI29wdGlvbkxpc3Rcblx0XHRcdCBbY2xhc3MuZ3VpLXVwd2FyZF09XCJjYW5PcGVuVXB3YXJkXCJcblx0XHRcdCBbY2xhc3MuZ3VpLWRvd253YXJkXT1cIiFjYW5PcGVuVXB3YXJkXCJcblx0XHRcdCBbc3R5bGUubGVmdC5weF09XCJvcHRpb25zQ29udGFpbmVyTGVmdEF0dHJpYnV0ZVwiXG5cdFx0XHQgW3N0eWxlLnRvcC5weF09XCJvcHRpb25zQ29udGFpbmVyVG9wQXR0cmlidXRlXCJcblx0XHRcdCBjbGFzcz1cImd1aS1vcHRpb25zLWxpc3RcIj5cblxuXHRcdFx0PGRpdiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbnNcIlxuXHRcdFx0XHQgW2NsYXNzLmd1aS1vcHRpb24tc2VsZWN0ZWRdPVwiaXNPcHRpb25TZWxlY3RlZChvcHRpb24pXCJcblx0XHRcdFx0IFtzdHlsZS53aWR0aC5weF09XCJ3aWR0aFwiXG5cdFx0XHRcdCAoY2xpY2spPVwic2VsZWN0T3B0aW9uKG9wdGlvbilcIlxuXHRcdFx0XHQgY2xhc3M9XCJndWktb3B0aW9uXCI+XG5cdFx0XHRcdHt7Z2V0T3B0aW9uVmFsdWUob3B0aW9uKX19XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRmFicmljU2VsZWN0T3B0aW9uc0NvbXBvbmVudCBleHRlbmRzIEZhYnJpY1RoZW1lZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblxuXHRAVmlld0NoaWxkKCdvcHRpb25MaXN0JywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdG9wdGlvbkxpc3RSZWY6IEVsZW1lbnRSZWY7XG5cblx0b3B0aW9uczogQXJyYXk8R3VpU2VsZWN0T3B0aW9uPiA9IFtdO1xuXG5cdG9wdGlvbnNDb250YWluZXJMZWZ0QXR0cmlidXRlOiBudW1iZXI7XG5cblx0b3B0aW9uc0NvbnRhaW5lclRvcEF0dHJpYnV0ZTogbnVtYmVyO1xuXG5cdHdpZHRoID0gMTAwO1xuXG5cdHNlbGVjdGVkT3B0aW9uOiBHdWlTZWxlY3RPcHRpb247XG5cblx0Y2FuT3BlblVwd2FyZDogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNlbGVjdE9wdGlvbnNHZW9tZXRyeVNlcnZpY2U6IFNlbGVjdE9wdGlvbnNHZW9tZXRyeVNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VsZWN0U2VydmljZTogRmFicmljU2VsZWN0ZWRPcHRpb25zUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdHRoZW1lU2VydmljZTogRmFicmljTW9kYWxUaGVtZVNlcnZpY2UpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmLCByZW5kZXJlciwgdGhlbWVTZXJ2aWNlKTtcblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0T3B0aW9uc0dlb21ldHJ5U2VydmljZVxuXHRcdFx0Lm9uU2VsZWN0T3B0aW9uc0NvcmRzKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChjb3JkczogU2VsZWN0T3B0aW9uc0NvcmRzKSA9PiB7XG5cdFx0XHRcdHRoaXMub3B0aW9uc0NvbnRhaW5lclRvcEF0dHJpYnV0ZSA9IGNvcmRzLmdldFZlcnRpY2FsUG9zaXRpb24oKTtcblx0XHRcdFx0dGhpcy5vcHRpb25zQ29udGFpbmVyTGVmdEF0dHJpYnV0ZSA9IGNvcmRzLmdldEhvcml6b250YWxQb3NpdGlvbigpO1xuXHRcdFx0XHR0aGlzLmNhbk9wZW5VcHdhcmQgPSBjb3Jkcy5nZXRDYW5PcGVuVXB3YXJkKCk7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNlbGVjdFNlcnZpY2Vcblx0XHRcdC5vblNlbGVjdGVkT3B0aW9uKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChzZWxlY3RlZE9wdGlvbjogR3VpU2VsZWN0T3B0aW9uKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBzZWxlY3RlZE9wdGlvbjtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcblx0XHR0aGlzLmluaXRPcGVuQW5pbWF0aW9uKCk7XG5cdH1cblxuXHRnZXRFbGVtZW50UmVmKCk6IEVsZW1lbnRSZWYge1xuXHRcdHJldHVybiBzdXBlci5nZXRFbGVtZW50UmVmKCk7XG5cdH1cblxuXHRkZXRlY3RDaGFuZ2VzKCk6IHZvaWQge1xuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0c2VsZWN0T3B0aW9uKG9wdGlvbjogR3VpU2VsZWN0T3B0aW9uKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RTZXJ2aWNlLm5leHQob3B0aW9uKTtcblx0fVxuXG5cdGlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uOiBHdWlTZWxlY3RPcHRpb24pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RlZE9wdGlvbiAmJiBvcHRpb24ubmFtZSA9PT0gdGhpcy5zZWxlY3RlZE9wdGlvbi5uYW1lO1xuXHR9XG5cblx0Z2V0T3B0aW9uVmFsdWUob3B0aW9uOiBHdWlTZWxlY3RPcHRpb24pOiBudW1iZXIgfCBzdHJpbmcge1xuXHRcdHJldHVybiBvcHRpb24udmFsdWUgPyBvcHRpb24udmFsdWUgOiBvcHRpb24ubmFtZTtcblx0fVxuXG5cdGluaXRPcGVuQW5pbWF0aW9uKCk6IHZvaWQge1xuXHRcdGNvbnN0IG9wdGlvbnNFbCA9IHRoaXMub3B0aW9uTGlzdFJlZi5uYXRpdmVFbGVtZW50O1xuXHRcdHRoaXMuZ2V0UmVuZGVyZXIoKS5hZGRDbGFzcyhvcHRpb25zRWwsICdndWktb3B0aW9ucy1vcGVuZWQnKTtcblx0fVxufVxuIl19