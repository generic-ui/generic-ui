import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FabricThemedComponent } from '../../../common/modal/fabric-themed-component';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./select-options-geometry.service";
import * as i2 from "../fabric.selected-option.repository";
import * as i3 from "../../../themes/fabric-modal-theme.service";
import * as i4 from "@angular/common";
export class FabricSelectOptionsComponent extends FabricThemedComponent {
    selectOptionsGeometryService;
    selectService;
    changeDetectorRef;
    optionListRef;
    options = [];
    optionsContainerLeftAttribute = 0;
    optionsContainerTopAttribute = 0;
    width = 100;
    selectedOption;
    canOpenUpward = false;
    constructor(selectOptionsGeometryService, selectService, changeDetectorRef, elementRef, renderer, themeService) {
        super(elementRef, renderer, themeService);
        this.selectOptionsGeometryService = selectOptionsGeometryService;
        this.selectService = selectService;
        this.changeDetectorRef = changeDetectorRef;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricSelectOptionsComponent, deps: [{ token: i1.SelectOptionsGeometryService }, { token: i2.FabricSelectedOptionsRepository }, { token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i3.FabricModalThemeService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.2", type: FabricSelectOptionsComponent, selector: "ng-component", viewQueries: [{ propertyName: "optionListRef", first: true, predicate: ["optionList"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: `
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
	`, isInline: true, dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricSelectOptionsComponent, decorators: [{
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
        }], ctorParameters: () => [{ type: i1.SelectOptionsGeometryService }, { type: i2.FabricSelectedOptionsRepository }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i3.FabricModalThemeService }], propDecorators: { optionListRef: [{
                type: ViewChild,
                args: ['optionList', { read: ElementRef, static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW9wdGlvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL2Zvcm0vc2VsZWN0L29wdGlvbnMvc2VsZWN0LW9wdGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTix1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFVBQVUsRUFJVixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBS3ZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRXRGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0FBdUIzQyxNQUFNLE9BQU8sNEJBQTZCLFNBQVEscUJBQXFCO0lBaUJ6QztJQUNUO0lBQ0E7SUFoQlgsYUFBYSxDQUFjO0lBRXBDLE9BQU8sR0FBMkIsRUFBRSxDQUFDO0lBRXJDLDZCQUE2QixHQUFXLENBQUMsQ0FBQztJQUUxQyw0QkFBNEIsR0FBVyxDQUFDLENBQUM7SUFFekMsS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUVaLGNBQWMsQ0FBbUI7SUFFakMsYUFBYSxHQUFZLEtBQUssQ0FBQztJQUUvQixZQUE2Qiw0QkFBMEQsRUFDbkUsYUFBOEMsRUFDOUMsaUJBQW9DLEVBQ3JELFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ25CLFlBQXFDO1FBQ3ZDLEtBQUssQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBTmQsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtRQUNuRSxrQkFBYSxHQUFiLGFBQWEsQ0FBaUM7UUFDOUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUt4RCxDQUFDO0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyw0QkFBNEI7YUFDL0Isb0JBQW9CLEVBQUU7YUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDbEMsU0FBUyxDQUFDLENBQUMsS0FBeUIsRUFBRSxFQUFFO1lBQ3hDLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUNoRSxJQUFJLENBQUMsNkJBQTZCLEdBQUcsS0FBSyxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDbkUsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUM5QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFFSixJQUFJLENBQUMsYUFBYTthQUNoQixnQkFBZ0IsRUFBRTthQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNsQyxTQUFTLENBQUMsQ0FBQyxjQUErQixFQUFFLEVBQUU7WUFDOUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7WUFDckMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGVBQWU7UUFDZCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELGFBQWE7UUFDWixPQUFPLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsYUFBYTtRQUNaLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsWUFBWSxDQUFDLE1BQXVCO1FBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxNQUF1QjtRQUN2QyxPQUFPLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDbEQsQ0FBQztJQUVELGNBQWMsQ0FBQyxNQUF1QjtRQUNyQyxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDbEQsQ0FBQztJQUVELGlCQUFpQjtRQUNoQixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdkIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7WUFDbkQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztTQUM3RDtJQUNGLENBQUM7dUdBNUVXLDRCQUE0QjsyRkFBNUIsNEJBQTRCLDRJQUVQLFVBQVUsb0RBdEJqQzs7Ozs7Ozs7Ozs7Ozs7OztFQWdCVDs7MkZBSVcsNEJBQTRCO2tCQXJCeEMsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQlQ7b0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUMvQztzUUFJUyxhQUFhO3NCQURyQixTQUFTO3VCQUFDLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFmdGVyVmlld0luaXQsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRPbkRlc3Ryb3ksXG5cdE9uSW5pdCxcblx0UmVuZGVyZXIyLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR3VpU2VsZWN0T3B0aW9uIH0gZnJvbSAnLi4vc2VsZWN0LW9wdGlvbic7XG5pbXBvcnQgeyBTZWxlY3RPcHRpb25zR2VvbWV0cnlTZXJ2aWNlIH0gZnJvbSAnLi9zZWxlY3Qtb3B0aW9ucy1nZW9tZXRyeS5zZXJ2aWNlJztcbmltcG9ydCB7IFNlbGVjdE9wdGlvbnNDb3JkcyB9IGZyb20gJy4vc2VsZWN0LW9wdGlvbnMuY29yZHMnO1xuaW1wb3J0IHsgRmFicmljU2VsZWN0ZWRPcHRpb25zUmVwb3NpdG9yeSB9IGZyb20gJy4uL2ZhYnJpYy5zZWxlY3RlZC1vcHRpb24ucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBGYWJyaWNUaGVtZWRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kYWwvZmFicmljLXRoZW1lZC1jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljTW9kYWxUaGVtZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi90aGVtZXMvZmFicmljLW1vZGFsLXRoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2ICNvcHRpb25MaXN0XG5cdFx0XHQgW2NsYXNzLmd1aS11cHdhcmRdPVwiY2FuT3BlblVwd2FyZFwiXG5cdFx0XHQgW2NsYXNzLmd1aS1kb3dud2FyZF09XCIhY2FuT3BlblVwd2FyZFwiXG5cdFx0XHQgW3N0eWxlLmxlZnQucHhdPVwib3B0aW9uc0NvbnRhaW5lckxlZnRBdHRyaWJ1dGVcIlxuXHRcdFx0IFtzdHlsZS50b3AucHhdPVwib3B0aW9uc0NvbnRhaW5lclRvcEF0dHJpYnV0ZVwiXG5cdFx0XHQgY2xhc3M9XCJndWktb3B0aW9ucy1saXN0XCI+XG5cblx0XHRcdDxkaXYgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25zXCJcblx0XHRcdFx0IFtjbGFzcy5ndWktb3B0aW9uLXNlbGVjdGVkXT1cImlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uKVwiXG5cdFx0XHRcdCBbc3R5bGUud2lkdGgucHhdPVwid2lkdGhcIlxuXHRcdFx0XHQgKGNsaWNrKT1cInNlbGVjdE9wdGlvbihvcHRpb24pXCJcblx0XHRcdFx0IGNsYXNzPVwiZ3VpLW9wdGlvblwiPlxuXHRcdFx0XHR7e2dldE9wdGlvblZhbHVlKG9wdGlvbil9fVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdGAsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY1NlbGVjdE9wdGlvbnNDb21wb25lbnQgZXh0ZW5kcyBGYWJyaWNUaGVtZWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cblx0QFZpZXdDaGlsZCgnb3B0aW9uTGlzdCcsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiBmYWxzZSB9KVxuXHRyZWFkb25seSBvcHRpb25MaXN0UmVmPzogRWxlbWVudFJlZjtcblxuXHRvcHRpb25zOiBBcnJheTxHdWlTZWxlY3RPcHRpb24+ID0gW107XG5cblx0b3B0aW9uc0NvbnRhaW5lckxlZnRBdHRyaWJ1dGU6IG51bWJlciA9IDA7XG5cblx0b3B0aW9uc0NvbnRhaW5lclRvcEF0dHJpYnV0ZTogbnVtYmVyID0gMDtcblxuXHR3aWR0aCA9IDEwMDtcblxuXHRzZWxlY3RlZE9wdGlvbj86IEd1aVNlbGVjdE9wdGlvbjtcblxuXHRjYW5PcGVuVXB3YXJkOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzZWxlY3RPcHRpb25zR2VvbWV0cnlTZXJ2aWNlOiBTZWxlY3RPcHRpb25zR2VvbWV0cnlTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlbGVjdFNlcnZpY2U6IEZhYnJpY1NlbGVjdGVkT3B0aW9uc1JlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRyZW5kZXJlcjogUmVuZGVyZXIyLFxuXHRcdFx0XHR0aGVtZVNlcnZpY2U6IEZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZiwgcmVuZGVyZXIsIHRoZW1lU2VydmljZSk7XG5cdH1cblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdE9wdGlvbnNHZW9tZXRyeVNlcnZpY2Vcblx0XHRcdC5vblNlbGVjdE9wdGlvbnNDb3JkcygpXG5cdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuXHRcdFx0LnN1YnNjcmliZSgoY29yZHM6IFNlbGVjdE9wdGlvbnNDb3JkcykgPT4ge1xuXHRcdFx0XHR0aGlzLm9wdGlvbnNDb250YWluZXJUb3BBdHRyaWJ1dGUgPSBjb3Jkcy5nZXRWZXJ0aWNhbFBvc2l0aW9uKCk7XG5cdFx0XHRcdHRoaXMub3B0aW9uc0NvbnRhaW5lckxlZnRBdHRyaWJ1dGUgPSBjb3Jkcy5nZXRIb3Jpem9udGFsUG9zaXRpb24oKTtcblx0XHRcdFx0dGhpcy5jYW5PcGVuVXB3YXJkID0gY29yZHMuZ2V0Q2FuT3BlblVwd2FyZCgpO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zZWxlY3RTZXJ2aWNlXG5cdFx0XHQub25TZWxlY3RlZE9wdGlvbigpXG5cdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuXHRcdFx0LnN1YnNjcmliZSgoc2VsZWN0ZWRPcHRpb246IEd1aVNlbGVjdE9wdGlvbikgPT4ge1xuXHRcdFx0XHR0aGlzLnNlbGVjdGVkT3B0aW9uID0gc2VsZWN0ZWRPcHRpb247XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG5cdFx0c3VwZXIubmdBZnRlclZpZXdJbml0KCk7XG5cdFx0dGhpcy5pbml0T3BlbkFuaW1hdGlvbigpO1xuXHR9XG5cblx0Z2V0RWxlbWVudFJlZigpOiBFbGVtZW50UmVmIHtcblx0XHRyZXR1cm4gc3VwZXIuZ2V0RWxlbWVudFJlZigpO1xuXHR9XG5cblx0ZGV0ZWN0Q2hhbmdlcygpOiB2b2lkIHtcblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdHNlbGVjdE9wdGlvbihvcHRpb246IEd1aVNlbGVjdE9wdGlvbik6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0U2VydmljZS5uZXh0KG9wdGlvbik7XG5cdH1cblxuXHRpc09wdGlvblNlbGVjdGVkKG9wdGlvbjogR3VpU2VsZWN0T3B0aW9uKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWRPcHRpb24/Lm5hbWUgPT09IG9wdGlvbi5uYW1lO1xuXHR9XG5cblx0Z2V0T3B0aW9uVmFsdWUob3B0aW9uOiBHdWlTZWxlY3RPcHRpb24pOiBudW1iZXIgfCBzdHJpbmcge1xuXHRcdHJldHVybiBvcHRpb24udmFsdWUgPyBvcHRpb24udmFsdWUgOiBvcHRpb24ubmFtZTtcblx0fVxuXG5cdGluaXRPcGVuQW5pbWF0aW9uKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLm9wdGlvbkxpc3RSZWYpIHtcblx0XHRcdGNvbnN0IG9wdGlvbnNFbCA9IHRoaXMub3B0aW9uTGlzdFJlZi5uYXRpdmVFbGVtZW50O1xuXHRcdFx0dGhpcy5nZXRSZW5kZXJlcigpLmFkZENsYXNzKG9wdGlvbnNFbCwgJ2d1aS1vcHRpb25zLW9wZW5lZCcpO1xuXHRcdH1cblx0fVxufVxuIl19