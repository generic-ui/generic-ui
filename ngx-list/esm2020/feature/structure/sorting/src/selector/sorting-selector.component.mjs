import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/src/cdk/component/lib/src/smart-component';
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
SortingSelectorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SortingSelectorComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
SortingSelectorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: SortingSelectorComponent, selector: "div[gui-sorting-selector]", usesInheritance: true, ngImport: i0, template: "<gui-select (optionChanged)=\"changeSorting($event)\"\n\t\t\t[options]=\"sortingOptions\"\n\t\t\t[selected]=\"selectedSorting\"\n\t\t\t[width]=\"200\">\n</gui-select>\n", dependencies: [{ kind: "component", type: i1.FabricSelectComponent, selector: "gui-select", inputs: ["options", "placeholder", "selected", "width", "disabled"], outputs: ["optionChanged"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SortingSelectorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-sorting-selector]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<gui-select (optionChanged)=\"changeSorting($event)\"\n\t\t\t[options]=\"sortingOptions\"\n\t\t\t[selected]=\"selectedSorting\"\n\t\t\t[width]=\"200\">\n</gui-select>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL3NvcnRpbmcvc3JjL3NlbGVjdG9yL3NvcnRpbmctc2VsZWN0b3IuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9zb3J0aW5nL3NyYy9zZWxlY3Rvci9zb3J0aW5nLXNlbGVjdG9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4REFBOEQsQ0FBQzs7O0FBUzlGLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxjQUFjO0lBWTNELFlBQVksUUFBMkIsRUFDcEMsVUFBc0I7UUFDeEIsS0FBSyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQVo3QixtQkFBYyxHQUFHO1lBQ2hCLFdBQVc7WUFDWCxXQUFXO1lBQ1gsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixNQUFNO1NBQ0csQ0FBQztRQUVYLG9CQUFlLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUt6QyxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7SUFDN0IsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxzQkFBc0IsQ0FBQztJQUMvQixDQUFDOztxSEF0Qlcsd0JBQXdCO3lHQUF4Qix3QkFBd0Isd0ZDWHJDLDBLQUtBOzJGRE1hLHdCQUF3QjtrQkFOcEMsU0FBUzsrQkFDQywyQkFBMkIsbUJBRXBCLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vc3JjL2Nkay9jb21wb25lbnQvbGliL3NyYy9zbWFydC1jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc29ydGluZy1zZWxlY3Rvcl0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc29ydGluZy1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFNvcnRpbmdTZWxlY3RvckNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IHtcblxuXHRzb3J0aW5nT3B0aW9ucyA9IFtcblx0XHQnTmFtZTogQS1aJyxcblx0XHQnTmFtZTogWi1BJyxcblx0XHQnUHJpY2U6IExvdyB0byBIaWdoJyxcblx0XHQnUHJpY2U6IEhpZ2ggdG8gTG93Jyxcblx0XHQnTm9uZSdcblx0XSBhcyBjb25zdDtcblxuXHRzZWxlY3RlZFNvcnRpbmcgPSB0aGlzLnNvcnRpbmdPcHRpb25zWzBdO1xuXG5cdGNvbnN0cnVjdG9yKGRldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGRldGVjdG9yLCBlbGVtZW50UmVmKTtcblx0fVxuXG5cdGNoYW5nZVNvcnRpbmcoc29ydGluZzogc3RyaW5nKSB7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc29ydGluZy1zZWxlY3Rvcic7XG5cdH1cbn1cbiIsIjxndWktc2VsZWN0IChvcHRpb25DaGFuZ2VkKT1cImNoYW5nZVNvcnRpbmcoJGV2ZW50KVwiXG5cdFx0XHRbb3B0aW9uc109XCJzb3J0aW5nT3B0aW9uc1wiXG5cdFx0XHRbc2VsZWN0ZWRdPVwic2VsZWN0ZWRTb3J0aW5nXCJcblx0XHRcdFt3aWR0aF09XCIyMDBcIj5cbjwvZ3VpLXNlbGVjdD5cbiJdfQ==