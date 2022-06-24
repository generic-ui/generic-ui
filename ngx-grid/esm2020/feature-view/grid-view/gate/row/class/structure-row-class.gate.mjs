import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../feature/common/cdk/component/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/schema/api/styling/schema.row-class.archive";
export class StructureRowClassGate extends Gate {
    constructor(schemaRowClassArchive) {
        super();
        this.schemaRowClassArchive = schemaRowClassArchive;
    }
    ngOnChanges(changes) {
        if (this.isDefined('rowClass', changes)) {
            this.schemaRowClassArchive.next(this.rowClass);
        }
    }
}
StructureRowClassGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureRowClassGate, deps: [{ token: i1.SchemaRowClassArchive }], target: i0.ɵɵFactoryTarget.Directive });
StructureRowClassGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: StructureRowClassGate, selector: "gui-structure[rowClass]", inputs: { rowClass: "rowClass" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureRowClassGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[rowClass]'
                }]
        }], ctorParameters: function () { return [{ type: i1.SchemaRowClassArchive }]; }, propDecorators: { rowClass: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXJvdy1jbGFzcy5nYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L2dhdGUvcm93L2NsYXNzL3N0cnVjdHVyZS1yb3ctY2xhc3MuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0RBQWtELENBQUM7OztBQVN4RSxNQUFNLE9BQU8scUJBQXNCLFNBQVEsSUFBSTtJQUs5QyxZQUE2QixxQkFBNEM7UUFDeEUsS0FBSyxFQUFFLENBQUM7UUFEb0IsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUV6RSxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXlDO1FBRXBELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDeEMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBMEIsQ0FBQyxDQUFDO1NBQ2pFO0lBQ0YsQ0FBQzs7bUhBZFcscUJBQXFCO3VHQUFyQixxQkFBcUI7NEZBQXJCLHFCQUFxQjtrQkFIakMsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUUseUJBQXlCO2lCQUNuQzs0R0FJQSxRQUFRO3NCQURQLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jZGsvY29tcG9uZW50L2dhdGUnO1xuaW1wb3J0IHsgR3VpUm93Q2xhc3MgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9ndWkvZ3JpZC9jb3JlL2FwaS9ndWkuZ3JpZC5wdWJsaWMtYXBpJztcbmltcG9ydCB7IFNjaGVtYVJvd0NsYXNzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zY2hlbWEvYXBpL3N0eWxpbmcvc2NoZW1hLnJvdy1jbGFzcyc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDbGFzc0FyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3NjaGVtYS9hcGkvc3R5bGluZy9zY2hlbWEucm93LWNsYXNzLmFyY2hpdmUnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZVtyb3dDbGFzc10nXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVJvd0NsYXNzR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdHJvd0NsYXNzOiBHdWlSb3dDbGFzcztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJvd0NsYXNzQXJjaGl2ZTogU2NoZW1hUm93Q2xhc3NBcmNoaXZlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxTdHJ1Y3R1cmVSb3dDbGFzc0dhdGU+KSB7XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ3Jvd0NsYXNzJywgY2hhbmdlcykpIHtcblx0XHRcdHRoaXMuc2NoZW1hUm93Q2xhc3NBcmNoaXZlLm5leHQodGhpcy5yb3dDbGFzcyBhcyBTY2hlbWFSb3dDbGFzcyk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==