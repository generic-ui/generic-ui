import { Directive, Input } from '@angular/core';
import { SelectionGate } from '../../../../../../feature/structure/formation/src/gate/selection.gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i2 from "../../../../../../core/structure/formation/src/api/formation.event-repository";
import * as i3 from "../../../../../../core/structure/formation/src/api/formation.publisher";
export class StructureSelectionGate extends SelectionGate {
    constructor(structureId, formationEventService, formationCommandDispatcher) {
        super(structureId, formationEventService, formationCommandDispatcher);
    }
}
StructureSelectionGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureSelectionGate, deps: [{ token: i1.StructureId }, { token: i2.FormationEventRepository }, { token: i3.FormationPublisher }], target: i0.ɵɵFactoryTarget.Directive });
StructureSelectionGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: StructureSelectionGate, selector: "gui-structure[rowSelection], gui-structure[selectionGate]", inputs: { selectionGate: "selectionGate" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureSelectionGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[rowSelection], gui-structure[selectionGate]'
                }]
        }], ctorParameters: function () { return [{ type: i1.StructureId }, { type: i2.FormationEventRepository }, { type: i3.FormationPublisher }]; }, propDecorators: { selectionGate: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXNlbGVjdGlvbi5nYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3NyYy9zdHJ1Y3R1cmUvZ2F0ZS9zb3VyY2Uvc3RydWN0dXJlLXNlbGVjdGlvbi5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQzs7Ozs7QUFRdEcsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGFBQWE7SUFLeEQsWUFBWSxXQUF3QixFQUNqQyxxQkFBK0MsRUFDL0MsMEJBQThDO1FBQ2hELEtBQUssQ0FBQyxXQUFXLEVBQUUscUJBQXFCLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztJQUN2RSxDQUFDOztvSEFUVyxzQkFBc0I7d0dBQXRCLHNCQUFzQjs0RkFBdEIsc0JBQXNCO2tCQUhsQyxTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSwyREFBMkQ7aUJBQ3JFOzBLQUlBLGFBQWE7c0JBRFosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU2VsZWN0aW9uR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvZ2F0ZS9zZWxlY3Rpb24uZ2F0ZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25FdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2FwaS9mb3JtYXRpb24uZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBGb3JtYXRpb25QdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2FwaS9mb3JtYXRpb24ucHVibGlzaGVyJztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlW3Jvd1NlbGVjdGlvbl0sIGd1aS1zdHJ1Y3R1cmVbc2VsZWN0aW9uR2F0ZV0nXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNlbGVjdGlvbkdhdGUgZXh0ZW5kcyBTZWxlY3Rpb25HYXRlIHtcblxuXHRASW5wdXQoKVxuXHRzZWxlY3Rpb25HYXRlOiB2b2lkO1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0Zm9ybWF0aW9uRXZlbnRTZXJ2aWNlOiBGb3JtYXRpb25FdmVudFJlcG9zaXRvcnksXG5cdFx0XHRcdGZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyOiBGb3JtYXRpb25QdWJsaXNoZXIpIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgZm9ybWF0aW9uRXZlbnRTZXJ2aWNlLCBmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcik7XG5cdH1cblxufVxuIl19