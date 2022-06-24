import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../common/cdk/component/smart-component';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
export class SortingSelectorComponent extends SmartComponent {
    constructor(detector, elementRef) {
        super(detector, elementRef);
        this.sortingOptions = [
            'Name: A-Z',
            'Name: Z-A',
            'Price: Low to High',
            'Price: High to Low',
            'None'
        ];
        this.selectedSorting = this.sortingOptions[0];
    }
    changeSorting(sorting) {
    }
    getSelectorName() {
        return 'gui-sorting-selector';
    }
}
SortingSelectorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SortingSelectorComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
SortingSelectorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: SortingSelectorComponent, selector: "div[gui-sorting-selector]", usesInheritance: true, ngImport: i0, template: "<gui-select (optionChanged)=\"changeSorting($event)\"\n\t\t\t[options]=\"sortingOptions\"\n\t\t\t[selected]=\"selectedSorting\"\n\t\t\t[width]=\"200\">\n</gui-select>\n", components: [{ type: i1.FabricSelectComponent, selector: "gui-select", inputs: ["options", "placeholder", "selected", "width", "disabled"], outputs: ["optionChanged"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SortingSelectorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-sorting-selector]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<gui-select (optionChanged)=\"changeSorting($event)\"\n\t\t\t[options]=\"sortingOptions\"\n\t\t\t[selected]=\"selectedSorting\"\n\t\t\t[width]=\"200\">\n</gui-select>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL3NvcnRpbmcvc2VsZWN0b3Ivc29ydGluZy1zZWxlY3Rvci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL3NvcnRpbmcvc2VsZWN0b3Ivc29ydGluZy1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBYyxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVySCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0NBQStDLENBQUM7OztBQVMvRSxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsY0FBYztJQVkzRCxZQUFZLFFBQTJCLEVBQ3BDLFVBQXNCO1FBQ3hCLEtBQUssQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFaN0IsbUJBQWMsR0FBRztZQUNoQixXQUFXO1lBQ1gsV0FBVztZQUNYLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsTUFBTTtTQUNHLENBQUM7UUFFWCxvQkFBZSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFLekMsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO0lBQzdCLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sc0JBQXNCLENBQUM7SUFDL0IsQ0FBQzs7c0hBdEJXLHdCQUF3QjswR0FBeEIsd0JBQXdCLHdGQ1hyQywwS0FLQTs0RkRNYSx3QkFBd0I7a0JBTnBDLFNBQVM7K0JBQ0MsMkJBQTJCLG1CQUVwQix1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXNvcnRpbmctc2VsZWN0b3JdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3NvcnRpbmctc2VsZWN0b3IuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTb3J0aW5nU2VsZWN0b3JDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0c29ydGluZ09wdGlvbnMgPSBbXG5cdFx0J05hbWU6IEEtWicsXG5cdFx0J05hbWU6IFotQScsXG5cdFx0J1ByaWNlOiBMb3cgdG8gSGlnaCcsXG5cdFx0J1ByaWNlOiBIaWdoIHRvIExvdycsXG5cdFx0J05vbmUnXG5cdF0gYXMgY29uc3Q7XG5cblx0c2VsZWN0ZWRTb3J0aW5nID0gdGhpcy5zb3J0aW5nT3B0aW9uc1swXTtcblxuXHRjb25zdHJ1Y3RvcihkZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihkZXRlY3RvciwgZWxlbWVudFJlZik7XG5cdH1cblxuXHRjaGFuZ2VTb3J0aW5nKHNvcnRpbmc6IHN0cmluZykge1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXNvcnRpbmctc2VsZWN0b3InO1xuXHR9XG59XG4iLCI8Z3VpLXNlbGVjdCAob3B0aW9uQ2hhbmdlZCk9XCJjaGFuZ2VTb3J0aW5nKCRldmVudClcIlxuXHRcdFx0W29wdGlvbnNdPVwic29ydGluZ09wdGlvbnNcIlxuXHRcdFx0W3NlbGVjdGVkXT1cInNlbGVjdGVkU29ydGluZ1wiXG5cdFx0XHRbd2lkdGhdPVwiMjAwXCI+XG48L2d1aS1zZWxlY3Q+XG4iXX0=