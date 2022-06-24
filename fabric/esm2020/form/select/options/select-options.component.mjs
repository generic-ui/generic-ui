import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FabricThemedComponent } from '../../../common/modal/fabric-themed-component';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./select-options-geometry.service";
import * as i2 from "../selected-option.repository";
import * as i3 from "../../../themes/fabric-modal-theme.service";
import * as i4 from "@angular/common";
export class FabricSelectOptionsComponent extends FabricThemedComponent {
    constructor(selectOptionsGeometryService, selectService, changeDetectorRef, elementRef, renderer, themeService) {
        super(elementRef, renderer, themeService);
        this.selectOptionsGeometryService = selectOptionsGeometryService;
        this.selectService = selectService;
        this.changeDetectorRef = changeDetectorRef;
        this.options = [];
        this.optionsContainerLeftAttribute = 0;
        this.optionsContainerTopAttribute = 0;
        this.width = 100;
        this.canOpenUpward = false;
    }
    ngOnInit() {
        this.selectOptionsGeometryService
            .onSelectOptionsCords()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((cords) => {
            this.optionsContainerTopAttribute = cords.getVerticalPosition();
            this.optionsContainerLeftAttribute = cords.getHorizontalPosition();
            this.canOpenUpward = cords.getCanOpenUpward();
            this.changeDetectorRef.detectChanges();
        });
        this.selectService
            .onSelectedOption()
            .pipe(takeUntil(this.unsubscribe$))
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
        return this.selectedOption?.name === option.name;
    }
    getOptionValue(option) {
        return option.value ? option.value : option.name;
    }
    initOpenAnimation() {
        if (this.optionListRef) {
            const optionsEl = this.optionListRef.nativeElement;
            this.getRenderer().addClass(optionsEl, 'gui-options-opened');
        }
    }
}
FabricSelectOptionsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricSelectOptionsComponent, deps: [{ token: i1.SelectOptionsGeometryService }, { token: i2.FabricSelectedOptionsRepository }, { token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i3.FabricModalThemeService }], target: i0.ɵɵFactoryTarget.Component });
FabricSelectOptionsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricSelectOptionsComponent, selector: "ng-component", viewQueries: [{ propertyName: "optionListRef", first: true, predicate: ["optionList"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: `
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
	`, isInline: true, directives: [{ type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricSelectOptionsComponent, decorators: [{
            type: Component,
            args: [{
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
                }]
        }], ctorParameters: function () { return [{ type: i1.SelectOptionsGeometryService }, { type: i2.FabricSelectedOptionsRepository }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i3.FabricModalThemeService }]; }, propDecorators: { optionListRef: [{
                type: ViewChild,
                args: ['optionList', { read: ElementRef, static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW9wdGlvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL2Zvcm0vc2VsZWN0L29wdGlvbnMvc2VsZWN0LW9wdGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTix1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFVBQVUsRUFJVixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBS3ZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRXRGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0FBdUIzQyxNQUFNLE9BQU8sNEJBQTZCLFNBQVEscUJBQXFCO0lBaUJ0RSxZQUE2Qiw0QkFBMEQsRUFDbkUsYUFBOEMsRUFDOUMsaUJBQW9DLEVBQ3JELFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ25CLFlBQXFDO1FBQ3ZDLEtBQUssQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBTmQsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtRQUNuRSxrQkFBYSxHQUFiLGFBQWEsQ0FBaUM7UUFDOUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQWR4RCxZQUFPLEdBQTJCLEVBQUUsQ0FBQztRQUVyQyxrQ0FBNkIsR0FBVyxDQUFDLENBQUM7UUFFMUMsaUNBQTRCLEdBQVcsQ0FBQyxDQUFDO1FBRXpDLFVBQUssR0FBRyxHQUFHLENBQUM7UUFJWixrQkFBYSxHQUFZLEtBQUssQ0FBQztJQVMvQixDQUFDO0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyw0QkFBNEI7YUFDL0Isb0JBQW9CLEVBQUU7YUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDbEMsU0FBUyxDQUFDLENBQUMsS0FBeUIsRUFBRSxFQUFFO1lBQ3hDLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUNoRSxJQUFJLENBQUMsNkJBQTZCLEdBQUcsS0FBSyxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDbkUsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUM5QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFFSixJQUFJLENBQUMsYUFBYTthQUNoQixnQkFBZ0IsRUFBRTthQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNsQyxTQUFTLENBQUMsQ0FBQyxjQUErQixFQUFFLEVBQUU7WUFDOUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7WUFDckMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGVBQWU7UUFDZCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELGFBQWE7UUFDWixPQUFPLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsYUFBYTtRQUNaLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsWUFBWSxDQUFDLE1BQXVCO1FBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxNQUF1QjtRQUN2QyxPQUFPLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDbEQsQ0FBQztJQUVELGNBQWMsQ0FBQyxNQUF1QjtRQUNyQyxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDbEQsQ0FBQztJQUVELGlCQUFpQjtRQUNoQixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdkIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7WUFDbkQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztTQUM3RDtJQUNGLENBQUM7OzBIQTVFVyw0QkFBNEI7OEdBQTVCLDRCQUE0Qiw0SUFFUCxVQUFVLG9EQXRCakM7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQlQ7NEZBSVcsNEJBQTRCO2tCQXJCeEMsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQlQ7b0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUMvQzt3UkFJUyxhQUFhO3NCQURyQixTQUFTO3VCQUFDLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFmdGVyVmlld0luaXQsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRPbkRlc3Ryb3ksXG5cdE9uSW5pdCxcblx0UmVuZGVyZXIyLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR3VpU2VsZWN0T3B0aW9uIH0gZnJvbSAnLi4vc2VsZWN0LW9wdGlvbic7XG5pbXBvcnQgeyBTZWxlY3RPcHRpb25zR2VvbWV0cnlTZXJ2aWNlIH0gZnJvbSAnLi9zZWxlY3Qtb3B0aW9ucy1nZW9tZXRyeS5zZXJ2aWNlJztcbmltcG9ydCB7IFNlbGVjdE9wdGlvbnNDb3JkcyB9IGZyb20gJy4vc2VsZWN0LW9wdGlvbnMuY29yZHMnO1xuaW1wb3J0IHsgRmFicmljU2VsZWN0ZWRPcHRpb25zUmVwb3NpdG9yeSB9IGZyb20gJy4uL3NlbGVjdGVkLW9wdGlvbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IEZhYnJpY1RoZW1lZENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RhbC9mYWJyaWMtdGhlbWVkLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNNb2RhbFRoZW1lU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3RoZW1lcy9mYWJyaWMtbW9kYWwtdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgI29wdGlvbkxpc3Rcblx0XHRcdCBbY2xhc3MuZ3VpLXVwd2FyZF09XCJjYW5PcGVuVXB3YXJkXCJcblx0XHRcdCBbY2xhc3MuZ3VpLWRvd253YXJkXT1cIiFjYW5PcGVuVXB3YXJkXCJcblx0XHRcdCBbc3R5bGUubGVmdC5weF09XCJvcHRpb25zQ29udGFpbmVyTGVmdEF0dHJpYnV0ZVwiXG5cdFx0XHQgW3N0eWxlLnRvcC5weF09XCJvcHRpb25zQ29udGFpbmVyVG9wQXR0cmlidXRlXCJcblx0XHRcdCBjbGFzcz1cImd1aS1vcHRpb25zLWxpc3RcIj5cblxuXHRcdFx0PGRpdiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbnNcIlxuXHRcdFx0XHQgW2NsYXNzLmd1aS1vcHRpb24tc2VsZWN0ZWRdPVwiaXNPcHRpb25TZWxlY3RlZChvcHRpb24pXCJcblx0XHRcdFx0IFtzdHlsZS53aWR0aC5weF09XCJ3aWR0aFwiXG5cdFx0XHRcdCAoY2xpY2spPVwic2VsZWN0T3B0aW9uKG9wdGlvbilcIlxuXHRcdFx0XHQgY2xhc3M9XCJndWktb3B0aW9uXCI+XG5cdFx0XHRcdHt7Z2V0T3B0aW9uVmFsdWUob3B0aW9uKX19XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRmFicmljU2VsZWN0T3B0aW9uc0NvbXBvbmVudCBleHRlbmRzIEZhYnJpY1RoZW1lZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblxuXHRAVmlld0NoaWxkKCdvcHRpb25MaXN0JywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IGZhbHNlIH0pXG5cdHJlYWRvbmx5IG9wdGlvbkxpc3RSZWY/OiBFbGVtZW50UmVmO1xuXG5cdG9wdGlvbnM6IEFycmF5PEd1aVNlbGVjdE9wdGlvbj4gPSBbXTtcblxuXHRvcHRpb25zQ29udGFpbmVyTGVmdEF0dHJpYnV0ZTogbnVtYmVyID0gMDtcblxuXHRvcHRpb25zQ29udGFpbmVyVG9wQXR0cmlidXRlOiBudW1iZXIgPSAwO1xuXG5cdHdpZHRoID0gMTAwO1xuXG5cdHNlbGVjdGVkT3B0aW9uPzogR3VpU2VsZWN0T3B0aW9uO1xuXG5cdGNhbk9wZW5VcHdhcmQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNlbGVjdE9wdGlvbnNHZW9tZXRyeVNlcnZpY2U6IFNlbGVjdE9wdGlvbnNHZW9tZXRyeVNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VsZWN0U2VydmljZTogRmFicmljU2VsZWN0ZWRPcHRpb25zUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdHRoZW1lU2VydmljZTogRmFicmljTW9kYWxUaGVtZVNlcnZpY2UpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmLCByZW5kZXJlciwgdGhlbWVTZXJ2aWNlKTtcblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0T3B0aW9uc0dlb21ldHJ5U2VydmljZVxuXHRcdFx0Lm9uU2VsZWN0T3B0aW9uc0NvcmRzKClcblx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXG5cdFx0XHQuc3Vic2NyaWJlKChjb3JkczogU2VsZWN0T3B0aW9uc0NvcmRzKSA9PiB7XG5cdFx0XHRcdHRoaXMub3B0aW9uc0NvbnRhaW5lclRvcEF0dHJpYnV0ZSA9IGNvcmRzLmdldFZlcnRpY2FsUG9zaXRpb24oKTtcblx0XHRcdFx0dGhpcy5vcHRpb25zQ29udGFpbmVyTGVmdEF0dHJpYnV0ZSA9IGNvcmRzLmdldEhvcml6b250YWxQb3NpdGlvbigpO1xuXHRcdFx0XHR0aGlzLmNhbk9wZW5VcHdhcmQgPSBjb3Jkcy5nZXRDYW5PcGVuVXB3YXJkKCk7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNlbGVjdFNlcnZpY2Vcblx0XHRcdC5vblNlbGVjdGVkT3B0aW9uKClcblx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXG5cdFx0XHQuc3Vic2NyaWJlKChzZWxlY3RlZE9wdGlvbjogR3VpU2VsZWN0T3B0aW9uKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBzZWxlY3RlZE9wdGlvbjtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcblx0XHRzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcblx0XHR0aGlzLmluaXRPcGVuQW5pbWF0aW9uKCk7XG5cdH1cblxuXHRnZXRFbGVtZW50UmVmKCk6IEVsZW1lbnRSZWYge1xuXHRcdHJldHVybiBzdXBlci5nZXRFbGVtZW50UmVmKCk7XG5cdH1cblxuXHRkZXRlY3RDaGFuZ2VzKCk6IHZvaWQge1xuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0c2VsZWN0T3B0aW9uKG9wdGlvbjogR3VpU2VsZWN0T3B0aW9uKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RTZXJ2aWNlLm5leHQob3B0aW9uKTtcblx0fVxuXG5cdGlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uOiBHdWlTZWxlY3RPcHRpb24pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RlZE9wdGlvbj8ubmFtZSA9PT0gb3B0aW9uLm5hbWU7XG5cdH1cblxuXHRnZXRPcHRpb25WYWx1ZShvcHRpb246IEd1aVNlbGVjdE9wdGlvbik6IG51bWJlciB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIG9wdGlvbi52YWx1ZSA/IG9wdGlvbi52YWx1ZSA6IG9wdGlvbi5uYW1lO1xuXHR9XG5cblx0aW5pdE9wZW5BbmltYXRpb24oKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMub3B0aW9uTGlzdFJlZikge1xuXHRcdFx0Y29uc3Qgb3B0aW9uc0VsID0gdGhpcy5vcHRpb25MaXN0UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cdFx0XHR0aGlzLmdldFJlbmRlcmVyKCkuYWRkQ2xhc3Mob3B0aW9uc0VsLCAnZ3VpLW9wdGlvbnMtb3BlbmVkJyk7XG5cdFx0fVxuXHR9XG59XG4iXX0=