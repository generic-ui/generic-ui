import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../feature/common/component/src/smart-component';
import { ChangedValueEmitter } from '../../../../../feature/composition/src/column/edit/changed-value.emitter';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/structure/filter/src/api/filter.publisher";
import * as i2 from "../../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i3 from "@generic-ui/fabric";
export class StructureHeaderFilterComponent extends SmartComponent {
    changeDetectorRef;
    structureFilterCommandService;
    structureId;
    column;
    sub = new ChangedValueEmitter();
    editContext;
    constructor(changeDetectorRef, elementRef, structureFilterCommandService, structureId) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureFilterCommandService = structureFilterCommandService;
        this.structureId = structureId;
        this.editContext = {
            changes: this.sub
        };
    }
    ngOnInit() {
        this.sub
            .on()
            .subscribe((phrase) => this.filter(phrase));
    }
    filter(phrase) {
        // this.structureFilterCommandService.addFilter(this.column.getFieldId(), '1', phrase, this.structureId);
    }
    getSelectorName() {
        return 'gui-structure-header-filter';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureHeaderFilterComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.FilterPublisher }, { token: i2.StructureId }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: StructureHeaderFilterComponent, selector: "gui-structure-header-filter", inputs: { column: "column" }, usesInheritance: true, ngImport: i0, template: "\n\n<!--\t\t<ng-container-->\n<!--\t\t\t\t*ngTemplateOutlet=\"column.editTemplate; context: editContext\">-->\n<!--\t\t</ng-container>-->\n\n<button gui-button [primary]=\"true\">Add Filter</button>\n\n", dependencies: [{ kind: "component", type: i3.FabricButtonComponent, selector: "button[gui-button], a[gui-button]", inputs: ["link", "text"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureHeaderFilterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-structure-header-filter', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "\n\n<!--\t\t<ng-container-->\n<!--\t\t\t\t*ngTemplateOutlet=\"column.editTemplate; context: editContext\">-->\n<!--\t\t</ng-container>-->\n\n<button gui-button [primary]=\"true\">Add Filter</button>\n\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.FilterPublisher }, { type: i2.StructureId }]; }, propDecorators: { column: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmhlYWRlci1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3NyYy9oZWFkZXIvZmlsdGVycy9zdHJ1Y3R1cmUuaGVhZGVyLWZpbHRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvc3JjL2hlYWRlci9maWx0ZXJzL3N0cnVjdHVyZS5oZWFkZXItZmlsdGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLEtBQUssRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwSSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFHN0YsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEVBQTBFLENBQUM7Ozs7O0FBVy9HLE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxjQUFjO0lBU3BDO0lBRVQ7SUFDQTtJQVRwQixNQUFNLENBQTBCO0lBRWhDLEdBQUcsR0FBRyxJQUFJLG1CQUFtQixFQUFFLENBQUM7SUFFaEMsV0FBVyxDQUFNO0lBRWpCLFlBQTZCLGlCQUFvQyxFQUM5RCxVQUFzQixFQUNMLDZCQUE4QyxFQUM5QyxXQUF3QjtRQUMzQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFKVCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBRTdDLGtDQUE2QixHQUE3Qiw2QkFBNkIsQ0FBaUI7UUFDOUMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFHM0MsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNsQixPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUc7U0FDakIsQ0FBQztJQUNILENBQUM7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLEdBQUc7YUFDTixFQUFFLEVBQUU7YUFDSixTQUFTLENBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsTUFBTSxDQUFDLE1BQWM7UUFDcEIseUdBQXlHO0lBQzFHLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sNkJBQTZCLENBQUM7SUFDdEMsQ0FBQzt3R0FoQ1csOEJBQThCOzRGQUE5Qiw4QkFBOEIsd0hDaEIzQyw0TUFRQTs7NEZEUWEsOEJBQThCO2tCQU4xQyxTQUFTOytCQUNDLDZCQUE2QixtQkFFdEIsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSTt5TEFLckMsTUFBTTtzQkFETCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY29tcG9uZW50L3NyYy9zbWFydC1jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvY29tcG9zaXRpb24vc3JjL2NvcmUtcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IENoYW5nZWRWYWx1ZUVtaXR0ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2NvbXBvc2l0aW9uL3NyYy9jb2x1bW4vZWRpdC9jaGFuZ2VkLXZhbHVlLmVtaXR0ZXInO1xuaW1wb3J0IHsgRmlsdGVyUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZmlsdGVyL3NyYy9hcGkvZmlsdGVyLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1oZWFkZXItZmlsdGVyJyxcblx0dGVtcGxhdGVVcmw6IGAuL3N0cnVjdHVyZS5oZWFkZXItZmlsdGVyLmNvbXBvbmVudC5odG1sYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlSGVhZGVyRmlsdGVyQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQ7XG5cblx0c3ViID0gbmV3IENoYW5nZWRWYWx1ZUVtaXR0ZXIoKTtcblxuXHRlZGl0Q29udGV4dDogYW55O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlOiBGaWx0ZXJQdWJsaXNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXG5cdFx0dGhpcy5lZGl0Q29udGV4dCA9IHtcblx0XHRcdGNoYW5nZXM6IHRoaXMuc3ViXG5cdFx0fTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuc3ViXG5cdFx0XHQub24oKVxuXHRcdFx0LnN1YnNjcmliZSgocGhyYXNlOiBzdHJpbmcpID0+IHRoaXMuZmlsdGVyKHBocmFzZSkpO1xuXHR9XG5cblx0ZmlsdGVyKHBocmFzZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0Ly8gdGhpcy5zdHJ1Y3R1cmVGaWx0ZXJDb21tYW5kU2VydmljZS5hZGRGaWx0ZXIodGhpcy5jb2x1bW4uZ2V0RmllbGRJZCgpLCAnMScsIHBocmFzZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLWhlYWRlci1maWx0ZXInO1xuXHR9XG5cbn1cbiIsIlxuXG48IS0tXHRcdDxuZy1jb250YWluZXItLT5cbjwhLS1cdFx0XHRcdCpuZ1RlbXBsYXRlT3V0bGV0PVwiY29sdW1uLmVkaXRUZW1wbGF0ZTsgY29udGV4dDogZWRpdENvbnRleHRcIj4tLT5cbjwhLS1cdFx0PC9uZy1jb250YWluZXI+LS0+XG5cbjxidXR0b24gZ3VpLWJ1dHRvbiBbcHJpbWFyeV09XCJ0cnVlXCI+QWRkIEZpbHRlcjwvYnV0dG9uPlxuXG4iXX0=