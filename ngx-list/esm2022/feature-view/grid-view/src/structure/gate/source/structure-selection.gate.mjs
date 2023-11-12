import { Directive, Input } from '@angular/core';
import { SelectionGate } from '../../../../../../feature/structure/formation/src/gate/selection.gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i2 from "../../../../../../core/structure/formation/src/api/formation.event-repository";
import * as i3 from "../../../../../../core/structure/formation/src/api/formation.publisher";
export class StructureSelectionGate extends SelectionGate {
    selectionGate;
    constructor(structureId, formationEventService, formationCommandDispatcher) {
        super(structureId, formationEventService, formationCommandDispatcher);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: StructureSelectionGate, deps: [{ token: i1.StructureId }, { token: i2.FormationEventRepository }, { token: i3.FormationPublisher }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.2", type: StructureSelectionGate, selector: "gui-structure[rowSelection], gui-structure[selectionGate]", inputs: { selectionGate: "selectionGate" }, usesInheritance: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: StructureSelectionGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[rowSelection], gui-structure[selectionGate]'
                }]
        }], ctorParameters: () => [{ type: i1.StructureId }, { type: i2.FormationEventRepository }, { type: i3.FormationPublisher }], propDecorators: { selectionGate: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXNlbGVjdGlvbi5nYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3NyYy9zdHJ1Y3R1cmUvZ2F0ZS9zb3VyY2Uvc3RydWN0dXJlLXNlbGVjdGlvbi5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQzs7Ozs7QUFRdEcsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGFBQWE7SUFHeEQsYUFBYSxDQUFPO0lBRXBCLFlBQVksV0FBd0IsRUFDakMscUJBQStDLEVBQy9DLDBCQUE4QztRQUNoRCxLQUFLLENBQUMsV0FBVyxFQUFFLHFCQUFxQixFQUFFLDBCQUEwQixDQUFDLENBQUM7SUFDdkUsQ0FBQzt1R0FUVyxzQkFBc0I7MkZBQXRCLHNCQUFzQjs7MkZBQXRCLHNCQUFzQjtrQkFIbEMsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUUsMkRBQTJEO2lCQUNyRTt3SkFJQSxhQUFhO3NCQURaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNlbGVjdGlvbkdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2dhdGUvc2VsZWN0aW9uLmdhdGUnO1xuaW1wb3J0IHsgRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9hcGkvZm9ybWF0aW9uLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgRm9ybWF0aW9uUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9hcGkvZm9ybWF0aW9uLnB1Ymxpc2hlcic7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZVtyb3dTZWxlY3Rpb25dLCBndWktc3RydWN0dXJlW3NlbGVjdGlvbkdhdGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTZWxlY3Rpb25HYXRlIGV4dGVuZHMgU2VsZWN0aW9uR2F0ZSB7XG5cblx0QElucHV0KClcblx0c2VsZWN0aW9uR2F0ZTogdm9pZDtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdGZvcm1hdGlvbkV2ZW50U2VydmljZTogRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5LFxuXHRcdFx0XHRmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcjogRm9ybWF0aW9uUHVibGlzaGVyKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsIGZvcm1hdGlvbkV2ZW50U2VydmljZSwgZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXIpO1xuXHR9XG5cbn1cbiJdfQ==