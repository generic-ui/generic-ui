import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../feature/common/cdk/component/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/schema/api/styling/schema.row-style.archive";
export class StructureRowStyleGate extends Gate {
    constructor(schemaRowStyleArchive) {
        super();
        this.schemaRowStyleArchive = schemaRowStyleArchive;
    }
    ngOnChanges(changes) {
        if (this.isDefined('rowStyle', changes)) {
            this.schemaRowStyleArchive.next(this.rowStyle);
        }
    }
}
StructureRowStyleGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureRowStyleGate, deps: [{ token: i1.SchemaRowStyleArchive }], target: i0.ɵɵFactoryTarget.Directive });
StructureRowStyleGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: StructureRowStyleGate, selector: "gui-structure[rowStyle]", inputs: { rowStyle: "rowStyle" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureRowStyleGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[rowStyle]'
                }]
        }], ctorParameters: function () { return [{ type: i1.SchemaRowStyleArchive }]; }, propDecorators: { rowStyle: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXJvdy1zdHlsZS5nYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L2dhdGUvcm93L3N0eWxlL3N0cnVjdHVyZS1yb3ctc3R5bGUuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0RBQWtELENBQUM7OztBQVN4RSxNQUFNLE9BQU8scUJBQXNCLFNBQVEsSUFBSTtJQUs5QyxZQUE2QixxQkFBNEM7UUFDeEUsS0FBSyxFQUFFLENBQUM7UUFEb0IsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUV6RSxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXlDO1FBRXBELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDeEMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBMEIsQ0FBQyxDQUFDO1NBQ2pFO0lBQ0YsQ0FBQzs7bUhBZFcscUJBQXFCO3VHQUFyQixxQkFBcUI7NEZBQXJCLHFCQUFxQjtrQkFIakMsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUUseUJBQXlCO2lCQUNuQzs0R0FJQSxRQUFRO3NCQURQLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jZGsvY29tcG9uZW50L2dhdGUnO1xuaW1wb3J0IHsgR3VpUm93U3R5bGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9ndWkvZ3JpZC9jb3JlL2FwaS9ndWkuZ3JpZC5wdWJsaWMtYXBpJztcbmltcG9ydCB7IFNjaGVtYVJvd1N0eWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zY2hlbWEvYXBpL3N0eWxpbmcvc2NoZW1hLnJvdy1zdHlsZSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dTdHlsZUFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3NjaGVtYS9hcGkvc3R5bGluZy9zY2hlbWEucm93LXN0eWxlLmFyY2hpdmUnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZVtyb3dTdHlsZV0nXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVJvd1N0eWxlR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdHJvd1N0eWxlOiBHdWlSb3dTdHlsZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJvd1N0eWxlQXJjaGl2ZTogU2NoZW1hUm93U3R5bGVBcmNoaXZlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxTdHJ1Y3R1cmVSb3dTdHlsZUdhdGU+KSB7XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ3Jvd1N0eWxlJywgY2hhbmdlcykpIHtcblx0XHRcdHRoaXMuc2NoZW1hUm93U3R5bGVBcmNoaXZlLm5leHQodGhpcy5yb3dTdHlsZSBhcyBTY2hlbWFSb3dTdHlsZSk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==