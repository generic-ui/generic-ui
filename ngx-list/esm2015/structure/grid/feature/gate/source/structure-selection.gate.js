import { Directive, Input } from '@angular/core';
import { SelectionGate } from '../../../../source/feature/gate/selection.gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/api/structure.id";
import * as i2 from "../../../../source/core/api/formation/formation.event-repository";
import * as i3 from "../../../../source/core/api/formation/formation.command-invoker";
import * as i4 from "../../../../source/core/api/formation/type/row-selection-type.archive";
export class StructureSelectionGate extends SelectionGate {
    constructor(structureId, formationEventService, formationCommandDispatcher, rowSelectionTypeArchive) {
        super(structureId, formationEventService, formationCommandDispatcher, rowSelectionTypeArchive);
    }
}
StructureSelectionGate.ɵfac = function StructureSelectionGate_Factory(t) { return new (t || StructureSelectionGate)(i0.ɵɵdirectiveInject(i1.StructureId), i0.ɵɵdirectiveInject(i2.FormationEventRepository), i0.ɵɵdirectiveInject(i3.FormationCommandInvoker), i0.ɵɵdirectiveInject(i4.RowSelectionTypeArchive)); };
StructureSelectionGate.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: StructureSelectionGate, selectors: [["gui-structure", "rowSelection", ""], ["gui-structure", "selectionGate", ""]], inputs: { selectionGate: "selectionGate" }, features: [i0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureSelectionGate, [{
        type: Directive,
        args: [{
                selector: 'gui-structure[rowSelection], gui-structure[selectionGate]'
            }]
    }], function () { return [{ type: i1.StructureId }, { type: i2.FormationEventRepository }, { type: i3.FormationCommandInvoker }, { type: i4.RowSelectionTypeArchive }]; }, { selectionGate: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXNlbGVjdGlvbi5nYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2dhdGUvc291cmNlL3N0cnVjdHVyZS1zZWxlY3Rpb24uZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7Ozs7OztBQVMvRSxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsYUFBYTtJQUt4RCxZQUFZLFdBQXdCLEVBQ2pDLHFCQUErQyxFQUMvQywwQkFBbUQsRUFDbkQsdUJBQWdEO1FBQ2xELEtBQUssQ0FBQyxXQUFXLEVBQUUscUJBQXFCLEVBQUUsMEJBQTBCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztJQUNoRyxDQUFDOzs0RkFWVyxzQkFBc0I7eUVBQXRCLHNCQUFzQjt1RkFBdEIsc0JBQXNCO2NBSGxDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsMkRBQTJEO2FBQ3JFO2lMQUlBLGFBQWE7a0JBRFosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU2VsZWN0aW9uR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9mZWF0dXJlL2dhdGUvc2VsZWN0aW9uLmdhdGUnO1xuaW1wb3J0IHsgRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24uZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBGb3JtYXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vdHlwZS9yb3ctc2VsZWN0aW9uLXR5cGUuYXJjaGl2ZSc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZVtyb3dTZWxlY3Rpb25dLCBndWktc3RydWN0dXJlW3NlbGVjdGlvbkdhdGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTZWxlY3Rpb25HYXRlIGV4dGVuZHMgU2VsZWN0aW9uR2F0ZSB7XG5cblx0QElucHV0KClcblx0c2VsZWN0aW9uR2F0ZTogdm9pZDtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdGZvcm1hdGlvbkV2ZW50U2VydmljZTogRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5LFxuXHRcdFx0XHRmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcjogRm9ybWF0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHJvd1NlbGVjdGlvblR5cGVBcmNoaXZlOiBSb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZSkge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCBmb3JtYXRpb25FdmVudFNlcnZpY2UsIGZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyLCByb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZSk7XG5cdH1cblxufVxuIl19