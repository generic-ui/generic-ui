import { Directive, Input } from '@angular/core';
import { SelectionGate } from '../../../../feature/structure/formation/gate/selection.gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/structure/structure-core/api/global/structure.id";
import * as i2 from "../../../../core/structure/formation/api/formation.event-repository";
import * as i3 from "../../../../core/structure/formation/api/formation.publisher";
import * as i4 from "../../../../core/structure/formation/api/type/row-selection-type.archive";
export class StructureSelectionGate extends SelectionGate {
    constructor(structureId, formationEventService, formationCommandDispatcher, rowSelectionTypeArchive) {
        super(structureId, formationEventService, formationCommandDispatcher, rowSelectionTypeArchive);
    }
}
StructureSelectionGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureSelectionGate, deps: [{ token: i1.StructureId }, { token: i2.FormationEventRepository }, { token: i3.FormationPublisher }, { token: i4.RowSelectionTypeArchive }], target: i0.ɵɵFactoryTarget.Directive });
StructureSelectionGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: StructureSelectionGate, selector: "gui-structure[rowSelection], gui-structure[selectionGate]", inputs: { selectionGate: "selectionGate" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureSelectionGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[rowSelection], gui-structure[selectionGate]'
                }]
        }], ctorParameters: function () { return [{ type: i1.StructureId }, { type: i2.FormationEventRepository }, { type: i3.FormationPublisher }, { type: i4.RowSelectionTypeArchive }]; }, propDecorators: { selectionGate: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXNlbGVjdGlvbi5nYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L2dhdGUvc291cmNlL3N0cnVjdHVyZS1zZWxlY3Rpb24uZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkRBQTZELENBQUM7Ozs7OztBQVM1RixNQUFNLE9BQU8sc0JBQXVCLFNBQVEsYUFBYTtJQUt4RCxZQUFZLFdBQXdCLEVBQ2pDLHFCQUErQyxFQUMvQywwQkFBOEMsRUFDOUMsdUJBQWdEO1FBQ2xELEtBQUssQ0FBQyxXQUFXLEVBQUUscUJBQXFCLEVBQUUsMEJBQTBCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztJQUNoRyxDQUFDOzttSEFWVyxzQkFBc0I7dUdBQXRCLHNCQUFzQjsyRkFBdEIsc0JBQXNCO2tCQUhsQyxTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSwyREFBMkQ7aUJBQ3JFO2dOQUlBLGFBQWE7c0JBRFosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTZWxlY3Rpb25HYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL2dhdGUvc2VsZWN0aW9uLmdhdGUnO1xuaW1wb3J0IHsgRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL2FwaS9mb3JtYXRpb24uZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBGb3JtYXRpb25QdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vYXBpL2Zvcm1hdGlvbi5wdWJsaXNoZXInO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uVHlwZUFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vYXBpL3R5cGUvcm93LXNlbGVjdGlvbi10eXBlLmFyY2hpdmUnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmVbcm93U2VsZWN0aW9uXSwgZ3VpLXN0cnVjdHVyZVtzZWxlY3Rpb25HYXRlXSdcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU2VsZWN0aW9uR2F0ZSBleHRlbmRzIFNlbGVjdGlvbkdhdGUge1xuXG5cdEBJbnB1dCgpXG5cdHNlbGVjdGlvbkdhdGU6IHZvaWQ7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRmb3JtYXRpb25FdmVudFNlcnZpY2U6IEZvcm1hdGlvbkV2ZW50UmVwb3NpdG9yeSxcblx0XHRcdFx0Zm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXI6IEZvcm1hdGlvblB1Ymxpc2hlcixcblx0XHRcdFx0cm93U2VsZWN0aW9uVHlwZUFyY2hpdmU6IFJvd1NlbGVjdGlvblR5cGVBcmNoaXZlKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsIGZvcm1hdGlvbkV2ZW50U2VydmljZSwgZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXIsIHJvd1NlbGVjdGlvblR5cGVBcmNoaXZlKTtcblx0fVxuXG59XG4iXX0=