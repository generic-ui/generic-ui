import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../common/cdk/component/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "../structure.schema-manger.component";
export class StructureDialogSchemaManagerComponent extends PureComponent {
    constructor(elRef) {
        super(elRef);
    }
    getSelectorName() {
        return 'gui-schema-manager-dialog';
    }
}
StructureDialogSchemaManagerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureDialogSchemaManagerComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
StructureDialogSchemaManagerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureDialogSchemaManagerComponent, selector: "div[gui-schema-manager-dialog]", usesInheritance: true, ngImport: i0, template: `
		<div gui-structure-schema-manager></div>
	`, isInline: true, dependencies: [{ kind: "component", type: i1.StructureSchemaMangerComponent, selector: "div[gui-structure-schema-manager]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureDialogSchemaManagerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'div[gui-schema-manager-dialog]',
                    template: `
		<div gui-structure-schema-manager></div>
	`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmRpYWxvZy1zY2hlbWEtbWFuYWdlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvc2NoZW1hL21hbmFnZXIvZGlhbG9nL3N0cnVjdHVyZS5kaWFsb2ctc2NoZW1hLW1hbmFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWMsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOzs7QUFXN0UsTUFBTSxPQUFPLHFDQUFzQyxTQUFRLGFBQWE7SUFFdkUsWUFBWSxLQUFpQjtRQUM1QixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDZCxDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLDJCQUEyQixDQUFDO0lBQ3BDLENBQUM7O2tJQVJXLHFDQUFxQztzSEFBckMscUNBQXFDLDZGQU52Qzs7RUFFVDsyRkFJVyxxQ0FBcUM7a0JBUmpELFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFLGdDQUFnQztvQkFDMUMsUUFBUSxFQUFFOztFQUVUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvcHVyZS1jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc2NoZW1hLW1hbmFnZXItZGlhbG9nXScsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBndWktc3RydWN0dXJlLXNjaGVtYS1tYW5hZ2VyPjwvZGl2PlxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVEaWFsb2dTY2hlbWFNYW5hZ2VyQ29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IoZWxSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihlbFJlZik7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc2NoZW1hLW1hbmFnZXItZGlhbG9nJztcblx0fVxufVxuIl19