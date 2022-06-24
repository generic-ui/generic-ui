import { Directive, Input } from '@angular/core';
import { SelectionGate } from '../../../../feature/structure/formation/gate/selection.gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/structure/core/api/global/structure.id";
import * as i2 from "../../../../core/structure/formation/api/formation.event-repository";
import * as i3 from "../../../../core/structure/formation/api/formation.publisher";
import * as i4 from "../../../../core/structure/formation/api/type/row-selection-type.archive";
export class StructureSelectionGate extends SelectionGate {
    constructor(structureId, formationEventService, formationCommandDispatcher, rowSelectionTypeArchive) {
        super(structureId, formationEventService, formationCommandDispatcher, rowSelectionTypeArchive);
    }
}
StructureSelectionGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureSelectionGate, deps: [{ token: i1.StructureId }, { token: i2.FormationEventRepository }, { token: i3.FormationPublisher }, { token: i4.RowSelectionTypeArchive }], target: i0.ɵɵFactoryTarget.Directive });
StructureSelectionGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: StructureSelectionGate, selector: "gui-structure[rowSelection], gui-structure[selectionGate]", inputs: { selectionGate: "selectionGate" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureSelectionGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[rowSelection], gui-structure[selectionGate]'
                }]
        }], ctorParameters: function () { return [{ type: i1.StructureId }, { type: i2.FormationEventRepository }, { type: i3.FormationPublisher }, { type: i4.RowSelectionTypeArchive }]; }, propDecorators: { selectionGate: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXNlbGVjdGlvbi5nYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L2dhdGUvc291cmNlL3N0cnVjdHVyZS1zZWxlY3Rpb24uZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkRBQTZELENBQUM7Ozs7OztBQVM1RixNQUFNLE9BQU8sc0JBQXVCLFNBQVEsYUFBYTtJQUt4RCxZQUFZLFdBQXdCLEVBQ2pDLHFCQUErQyxFQUMvQywwQkFBOEMsRUFDOUMsdUJBQWdEO1FBQ2xELEtBQUssQ0FBQyxXQUFXLEVBQUUscUJBQXFCLEVBQUUsMEJBQTBCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztJQUNoRyxDQUFDOztvSEFWVyxzQkFBc0I7d0dBQXRCLHNCQUFzQjs0RkFBdEIsc0JBQXNCO2tCQUhsQyxTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSwyREFBMkQ7aUJBQ3JFO2dOQUlBLGFBQWE7c0JBRFosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9jb3JlL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNlbGVjdGlvbkdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS9mb3JtYXRpb24vZ2F0ZS9zZWxlY3Rpb24uZ2F0ZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25FdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vYXBpL2Zvcm1hdGlvbi5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IEZvcm1hdGlvblB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9hcGkvZm9ybWF0aW9uLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9hcGkvdHlwZS9yb3ctc2VsZWN0aW9uLXR5cGUuYXJjaGl2ZSc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZVtyb3dTZWxlY3Rpb25dLCBndWktc3RydWN0dXJlW3NlbGVjdGlvbkdhdGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTZWxlY3Rpb25HYXRlIGV4dGVuZHMgU2VsZWN0aW9uR2F0ZSB7XG5cblx0QElucHV0KClcblx0c2VsZWN0aW9uR2F0ZTogdm9pZDtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdGZvcm1hdGlvbkV2ZW50U2VydmljZTogRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5LFxuXHRcdFx0XHRmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcjogRm9ybWF0aW9uUHVibGlzaGVyLFxuXHRcdFx0XHRyb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZTogUm93U2VsZWN0aW9uVHlwZUFyY2hpdmUpIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgZm9ybWF0aW9uRXZlbnRTZXJ2aWNlLCBmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlciwgcm93U2VsZWN0aW9uVHlwZUFyY2hpdmUpO1xuXHR9XG5cbn1cbiJdfQ==