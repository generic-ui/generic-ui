import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../../feature/common/src/cdk/component/lib/src/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../../core/schema/src/api/global/schema.read-model-root-id";
import * as i2 from "../../../../../../core/schema/src/api/schema.publisher";
export class StructureRowClassGate extends Gate {
    constructor(schemaReadModelRootId, schemaPublisher) {
        super();
        this.schemaReadModelRootId = schemaReadModelRootId;
        this.schemaPublisher = schemaPublisher;
    }
    ngOnChanges(changes) {
        if (this.isDefined('rowClass', changes)) {
            this.schemaPublisher.setRowClass(this.rowClass, this.schemaReadModelRootId);
        }
    }
}
StructureRowClassGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: StructureRowClassGate, deps: [{ token: i1.SchemaReadModelRootId }, { token: i2.SchemaPublisher }], target: i0.ɵɵFactoryTarget.Directive });
StructureRowClassGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.2", type: StructureRowClassGate, selector: "gui-structure[rowClass]", inputs: { rowClass: "rowClass" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: StructureRowClassGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[rowClass]'
                }]
        }], ctorParameters: function () { return [{ type: i1.SchemaReadModelRootId }, { type: i2.SchemaPublisher }]; }, propDecorators: { rowClass: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXJvdy1jbGFzcy5nYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3NyYy9nYXRlL3Jvdy9jbGFzcy9zdHJ1Y3R1cmUtcm93LWNsYXNzLmdhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGlFQUFpRSxDQUFDOzs7O0FBVXZGLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxJQUFJO0lBSzlDLFlBQTZCLHFCQUE0QyxFQUNyRCxlQUFnQztRQUNuRCxLQUFLLEVBQUUsQ0FBQztRQUZvQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQ3JELG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUVwRCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXlDO1FBRXBELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDeEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQTBCLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7U0FDOUY7SUFDRixDQUFDOztrSEFmVyxxQkFBcUI7c0dBQXJCLHFCQUFxQjsyRkFBckIscUJBQXFCO2tCQUhqQyxTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSx5QkFBeUI7aUJBQ25DOzBJQUlBLFFBQVE7c0JBRFAsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL3NyYy9jZGsvY29tcG9uZW50L2xpYi9zcmMvZ2F0ZSc7XG5pbXBvcnQgeyBHdWlSb3dDbGFzcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2d1aS9ncmlkL3NyYy9jb3JlL2FwaS9ndWkuZ3JpZC5wdWJsaWMtYXBpJztcbmltcG9ydCB7IFNjaGVtYVJvd0NsYXNzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9zY2hlbWEvc3JjL2FwaS9zdHlsaW5nL3NjaGVtYS5yb3ctY2xhc3MnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vc3JjL2Nkay9jb21wb25lbnQvbGliL3NyYy9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IFNjaGVtYVB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvc2NoZW1hL3NyYy9hcGkvc2NoZW1hLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL3NjaGVtYS9zcmMvYXBpL2dsb2JhbC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZVtyb3dDbGFzc10nXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVJvd0NsYXNzR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdHJvd0NsYXNzOiBHdWlSb3dDbGFzcztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJlYWRNb2RlbFJvb3RJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVB1Ymxpc2hlcjogU2NoZW1hUHVibGlzaGVyKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxTdHJ1Y3R1cmVSb3dDbGFzc0dhdGU+KSB7XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ3Jvd0NsYXNzJywgY2hhbmdlcykpIHtcblx0XHRcdHRoaXMuc2NoZW1hUHVibGlzaGVyLnNldFJvd0NsYXNzKHRoaXMucm93Q2xhc3MgYXMgU2NoZW1hUm93Q2xhc3MsIHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0XHR9XG5cdH1cblxufVxuIl19