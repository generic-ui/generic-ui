import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/src/cdk/component/lib/src/smart-component';
import { useReactiveContext } from '../../../../common/src/cdk/component/lib';
import { StructureSelectCustomService } from './structure.select-custom.service';
import * as i0 from "@angular/core";
import * as i1 from "./structure.select-custom.service";
import * as i2 from "../../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i3 from "../../../../../core/structure/formation/src/api/formation.publisher";
import * as i4 from "../../../../../core/structure/formation/src/api/formation.warehouse";
export class SelectCustomComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureSelectCustomService, structureId, formationCommandDispatcher, formationWarehouse) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureSelectCustomService = structureSelectCustomService;
        this.structureId = structureId;
        this.formationCommandDispatcher = formationCommandDispatcher;
        this.formationWarehouse = formationWarehouse;
        this.options = ['a', 'b'];
        this.context = useReactiveContext();
    }
    ngOnInit() {
    }
    openConfigDialog() {
        this.structureSelectCustomService.open(this.headerDialogContainer);
    }
    getSelectorName() {
        return 'gui-select-custom';
    }
}
SelectCustomComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: SelectCustomComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.StructureSelectCustomService }, { token: i2.StructureId }, { token: i3.FormationPublisher }, { token: i4.FormationWarehouse }], target: i0.ɵɵFactoryTarget.Component });
SelectCustomComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.2", type: SelectCustomComponent, selector: "gui-select-custom", providers: [
        StructureSelectCustomService
    ], usesInheritance: true, ngImport: i0, template: "<div #selectCustomContainer\n\t (click)=\"openConfigDialog()\"\n>\n\t<div gui-structure-menu-icon></div>\n</div>\n", changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: SelectCustomComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-select-custom', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [
                        StructureSelectCustomService
                    ], template: "<div #selectCustomContainer\n\t (click)=\"openConfigDialog()\"\n>\n\t<div gui-structure-menu-icon></div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.StructureSelectCustomService }, { type: i2.StructureId }, { type: i3.FormationPublisher }, { type: i4.FormationWarehouse }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWN1c3RvbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvc2VsZWN0LWN1c3RvbS9zZWxlY3QtY3VzdG9tLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9zZWxlY3QtY3VzdG9tL3NlbGVjdC1jdXN0b20uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQXNCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTdILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUU5RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7O0FBV2pGLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxjQUFjO0lBU3hELFlBQTZCLGlCQUFvQyxFQUM5RCxVQUFzQixFQUNMLDRCQUEwRCxFQUMxRCxXQUF3QixFQUN4QiwwQkFBOEMsRUFDOUMsa0JBQXNDO1FBQ3pELEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQU5ULHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFFN0MsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtRQUMxRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QiwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQW9CO1FBQzlDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFUMUQsWUFBTyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXJCLFlBQU8sR0FBRyxrQkFBa0IsRUFBRSxDQUFDO0lBUy9CLENBQUM7SUFFRCxRQUFRO0lBRVIsQ0FBQztJQUVELGdCQUFnQjtRQUNmLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxtQkFBbUIsQ0FBQztJQUM1QixDQUFDOztrSEE1QlcscUJBQXFCO3NHQUFyQixxQkFBcUIsNENBSnRCO1FBQ1YsNEJBQTRCO0tBQzVCLGlEQ2hCRixvSEFLQTsyRkRhYSxxQkFBcUI7a0JBVGpDLFNBQVM7K0JBQ0MsbUJBQW1CLG1CQUVaLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUksYUFDMUI7d0JBQ1YsNEJBQTRCO3FCQUM1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZvcm1hdGlvblB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvYXBpL2Zvcm1hdGlvbi5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vc3JjL2Nkay9jb21wb25lbnQvbGliL3NyYy9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9hcGkvZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyB1c2VSZWFjdGl2ZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vc3JjL2Nkay9jb21wb25lbnQvbGliJztcbmltcG9ydCB7IFN0cnVjdHVyZVNlbGVjdEN1c3RvbVNlcnZpY2UgfSBmcm9tICcuL3N0cnVjdHVyZS5zZWxlY3QtY3VzdG9tLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc2VsZWN0LWN1c3RvbScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zZWxlY3QtY3VzdG9tLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdHByb3ZpZGVyczogW1xuXHRcdFN0cnVjdHVyZVNlbGVjdEN1c3RvbVNlcnZpY2Vcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RDdXN0b21Db21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0Ly8gQFZpZXdDaGlsZCgnc2VsZWN0Q3VzdG9tQ29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSlcblx0aGVhZGVyRGlhbG9nQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG5cdG9wdGlvbnMgPSBbJ2EnLCAnYiddO1xuXG5cdGNvbnRleHQgPSB1c2VSZWFjdGl2ZUNvbnRleHQoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVTZWxlY3RDdXN0b21TZXJ2aWNlOiBTdHJ1Y3R1cmVTZWxlY3RDdXN0b21TZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcjogRm9ybWF0aW9uUHVibGlzaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbldhcmVob3VzZTogRm9ybWF0aW9uV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0fVxuXG5cdG9wZW5Db25maWdEaWFsb2coKTogdm9pZCB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVTZWxlY3RDdXN0b21TZXJ2aWNlLm9wZW4odGhpcy5oZWFkZXJEaWFsb2dDb250YWluZXIpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXNlbGVjdC1jdXN0b20nO1xuXHR9XG5cbn1cbiIsIjxkaXYgI3NlbGVjdEN1c3RvbUNvbnRhaW5lclxuXHQgKGNsaWNrKT1cIm9wZW5Db25maWdEaWFsb2coKVwiXG4+XG5cdDxkaXYgZ3VpLXN0cnVjdHVyZS1tZW51LWljb24+PC9kaXY+XG48L2Rpdj5cbiJdfQ==