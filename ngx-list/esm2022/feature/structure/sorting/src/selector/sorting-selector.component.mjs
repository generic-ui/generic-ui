import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/component/src/smart-component';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
export class SortingSelectorComponent extends SmartComponent {
    sortingOptions = [
        'Name: A-Z',
        'Name: Z-A',
        'Price: Low to High',
        'Price: High to Low',
        'None'
    ];
    selectedSorting = this.sortingOptions[0];
    constructor(detector, elementRef) {
        super(detector, elementRef);
    }
    changeSorting(sorting) {
    }
    getSelectorName() {
        return 'gui-sorting-selector';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SortingSelectorComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: SortingSelectorComponent, selector: "div[gui-sorting-selector]", usesInheritance: true, ngImport: i0, template: "<gui-select (optionChanged)=\"changeSorting($event)\"\n\t\t\t[options]=\"sortingOptions\"\n\t\t\t[selected]=\"selectedSorting\"\n\t\t\t[width]=\"200\">\n</gui-select>\n", dependencies: [{ kind: "component", type: i1.FabricSelectComponent, selector: "gui-select", inputs: ["options", "placeholder", "selected", "width", "disabled"], outputs: ["optionChanged"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SortingSelectorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-sorting-selector]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<gui-select (optionChanged)=\"changeSorting($event)\"\n\t\t\t[options]=\"sortingOptions\"\n\t\t\t[selected]=\"selectedSorting\"\n\t\t\t[width]=\"200\">\n</gui-select>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL3NvcnRpbmcvc3JjL3NlbGVjdG9yL3NvcnRpbmctc2VsZWN0b3IuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9zb3J0aW5nL3NyYy9zZWxlY3Rvci9zb3J0aW5nLXNlbGVjdG9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrREFBa0QsQ0FBQzs7O0FBU2xGLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxjQUFjO0lBRTNELGNBQWMsR0FBRztRQUNoQixXQUFXO1FBQ1gsV0FBVztRQUNYLG9CQUFvQjtRQUNwQixvQkFBb0I7UUFDcEIsTUFBTTtLQUNHLENBQUM7SUFFWCxlQUFlLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV6QyxZQUFZLFFBQTJCLEVBQ3BDLFVBQXNCO1FBQ3hCLEtBQUssQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO0lBQzdCLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sc0JBQXNCLENBQUM7SUFDL0IsQ0FBQzt3R0F0Qlcsd0JBQXdCOzRGQUF4Qix3QkFBd0Isd0ZDWHJDLDBLQUtBOzs0RkRNYSx3QkFBd0I7a0JBTnBDLFNBQVM7K0JBQ0MsMkJBQTJCLG1CQUVwQix1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudC9zcmMvc21hcnQtY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXNvcnRpbmctc2VsZWN0b3JdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3NvcnRpbmctc2VsZWN0b3IuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTb3J0aW5nU2VsZWN0b3JDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0c29ydGluZ09wdGlvbnMgPSBbXG5cdFx0J05hbWU6IEEtWicsXG5cdFx0J05hbWU6IFotQScsXG5cdFx0J1ByaWNlOiBMb3cgdG8gSGlnaCcsXG5cdFx0J1ByaWNlOiBIaWdoIHRvIExvdycsXG5cdFx0J05vbmUnXG5cdF0gYXMgY29uc3Q7XG5cblx0c2VsZWN0ZWRTb3J0aW5nID0gdGhpcy5zb3J0aW5nT3B0aW9uc1swXTtcblxuXHRjb25zdHJ1Y3RvcihkZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihkZXRlY3RvciwgZWxlbWVudFJlZik7XG5cdH1cblxuXHRjaGFuZ2VTb3J0aW5nKHNvcnRpbmc6IHN0cmluZykge1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXNvcnRpbmctc2VsZWN0b3InO1xuXHR9XG59XG4iLCI8Z3VpLXNlbGVjdCAob3B0aW9uQ2hhbmdlZCk9XCJjaGFuZ2VTb3J0aW5nKCRldmVudClcIlxuXHRcdFx0W29wdGlvbnNdPVwic29ydGluZ09wdGlvbnNcIlxuXHRcdFx0W3NlbGVjdGVkXT1cInNlbGVjdGVkU29ydGluZ1wiXG5cdFx0XHRbd2lkdGhdPVwiMjAwXCI+XG48L2d1aS1zZWxlY3Q+XG4iXX0=