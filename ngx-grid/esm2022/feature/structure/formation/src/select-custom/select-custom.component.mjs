import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/component/src/smart-component';
import { useReactiveContext } from '../../../../common/component';
import { StructureSelectCustomService } from './structure.select-custom.service';
import * as i0 from "@angular/core";
import * as i1 from "./structure.select-custom.service";
import * as i2 from "../../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i3 from "../../../../../core/structure/formation/src/api/formation.publisher";
import * as i4 from "../../../../../core/structure/formation/src/api/formation.warehouse";
export class SelectCustomComponent extends SmartComponent {
    changeDetectorRef;
    structureSelectCustomService;
    structureId;
    formationCommandDispatcher;
    formationWarehouse;
    // @ViewChild('selectCustomContainer', { static: true })
    headerDialogContainer;
    options = ['a', 'b'];
    context = useReactiveContext();
    constructor(changeDetectorRef, elementRef, structureSelectCustomService, structureId, formationCommandDispatcher, formationWarehouse) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureSelectCustomService = structureSelectCustomService;
        this.structureId = structureId;
        this.formationCommandDispatcher = formationCommandDispatcher;
        this.formationWarehouse = formationWarehouse;
    }
    openConfigDialog() {
        this.structureSelectCustomService.open(this.headerDialogContainer);
    }
    getSelectorName() {
        return 'gui-select-custom';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SelectCustomComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.StructureSelectCustomService }, { token: i2.StructureId }, { token: i3.FormationPublisher }, { token: i4.FormationWarehouse }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: SelectCustomComponent, selector: "gui-select-custom", providers: [
            StructureSelectCustomService
        ], usesInheritance: true, ngImport: i0, template: "<div #selectCustomContainer\n\t (click)=\"openConfigDialog()\"\n>\n\t<div gui-structure-menu-icon></div>\n</div>\n", changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SelectCustomComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-select-custom', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [
                        StructureSelectCustomService
                    ], template: "<div #selectCustomContainer\n\t (click)=\"openConfigDialog()\"\n>\n\t<div gui-structure-menu-icon></div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.StructureSelectCustomService }, { type: i2.StructureId }, { type: i3.FormationPublisher }, { type: i4.FormationWarehouse }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWN1c3RvbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvc2VsZWN0LWN1c3RvbS9zZWxlY3QtY3VzdG9tLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9zZWxlY3QtY3VzdG9tL3NlbGVjdC1jdXN0b20uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQWMsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJckgsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBRWxGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7Ozs7QUFXakYsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGNBQWM7SUFTM0I7SUFFVDtJQUNBO0lBQ0E7SUFDQTtJQVpwQix3REFBd0Q7SUFDeEQscUJBQXFCLENBQWE7SUFFbEMsT0FBTyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRXJCLE9BQU8sR0FBRyxrQkFBa0IsRUFBRSxDQUFDO0lBRS9CLFlBQTZCLGlCQUFvQyxFQUM5RCxVQUFzQixFQUNMLDRCQUEwRCxFQUMxRCxXQUF3QixFQUN4QiwwQkFBOEMsRUFDOUMsa0JBQXNDO1FBQ3pELEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQU5ULHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFFN0MsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtRQUMxRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QiwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQW9CO1FBQzlDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFFMUQsQ0FBQztJQUVELGdCQUFnQjtRQUNmLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxtQkFBbUIsQ0FBQztJQUM1QixDQUFDO3dHQXhCVyxxQkFBcUI7NEZBQXJCLHFCQUFxQiw0Q0FKdEI7WUFDViw0QkFBNEI7U0FDNUIsaURDaEJGLG9IQUtBOzs0RkRhYSxxQkFBcUI7a0JBVGpDLFNBQVM7K0JBQ0MsbUJBQW1CLG1CQUVaLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUksYUFDMUI7d0JBQ1YsNEJBQTRCO3FCQUM1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGb3JtYXRpb25QdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2FwaS9mb3JtYXRpb24ucHVibGlzaGVyJztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudC9zcmMvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvYXBpL2Zvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgdXNlUmVhY3RpdmVDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWxlY3RDdXN0b21TZXJ2aWNlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuc2VsZWN0LWN1c3RvbS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXNlbGVjdC1jdXN0b20nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc2VsZWN0LWN1c3RvbS5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRwcm92aWRlcnM6IFtcblx0XHRTdHJ1Y3R1cmVTZWxlY3RDdXN0b21TZXJ2aWNlXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0Q3VzdG9tQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdC8vIEBWaWV3Q2hpbGQoJ3NlbGVjdEN1c3RvbUNvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pXG5cdGhlYWRlckRpYWxvZ0NvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuXHRvcHRpb25zID0gWydhJywgJ2InXTtcblxuXHRjb250ZXh0ID0gdXNlUmVhY3RpdmVDb250ZXh0KCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlU2VsZWN0Q3VzdG9tU2VydmljZTogU3RydWN0dXJlU2VsZWN0Q3VzdG9tU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXI6IEZvcm1hdGlvblB1Ymxpc2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25XYXJlaG91c2U6IEZvcm1hdGlvbldhcmVob3VzZSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblx0fVxuXG5cdG9wZW5Db25maWdEaWFsb2coKTogdm9pZCB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVTZWxlY3RDdXN0b21TZXJ2aWNlLm9wZW4odGhpcy5oZWFkZXJEaWFsb2dDb250YWluZXIpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXNlbGVjdC1jdXN0b20nO1xuXHR9XG5cbn1cbiIsIjxkaXYgI3NlbGVjdEN1c3RvbUNvbnRhaW5lclxuXHQgKGNsaWNrKT1cIm9wZW5Db25maWdEaWFsb2coKVwiXG4+XG5cdDxkaXYgZ3VpLXN0cnVjdHVyZS1tZW51LWljb24+PC9kaXY+XG48L2Rpdj5cbiJdfQ==