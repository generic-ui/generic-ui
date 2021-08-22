/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
import { StructureId } from '../../../../core/domain/structure.id';
import { SelectionGate } from '../../../../source/feature/gate/selection.gate';
import { FormationEventRepository } from '../../../../source/core/api/formation/formation.event-repository';
import { FormationCommandInvoker } from '../../../../source/core/api/formation/formation.command-invoker';
import { RowSelectionTypeArchive } from '../../../../source/core/api/formation/type/row-selection-type.archive';
var StructureSelectionGate = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSelectionGate, _super);
    function StructureSelectionGate(structureId, formationEventService, formationCommandDispatcher, rowSelectionTypeArchive) {
        return _super.call(this, structureId, formationEventService, formationCommandDispatcher, rowSelectionTypeArchive) || this;
    }
    StructureSelectionGate.decorators = [
        { type: Directive, args: [{
                    selector: 'gui-structure[rowSelection], gui-structure[selectionGate]'
                },] }
    ];
    /** @nocollapse */
    StructureSelectionGate.ctorParameters = function () { return [
        { type: StructureId },
        { type: FormationEventRepository },
        { type: FormationCommandInvoker },
        { type: RowSelectionTypeArchive }
    ]; };
    StructureSelectionGate.propDecorators = {
        selectionGate: [{ type: Input }]
    };
    return StructureSelectionGate;
}(SelectionGate));
export { StructureSelectionGate };
if (false) {
    /** @type {?} */
    StructureSelectionGate.prototype.selectionGate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXNlbGVjdGlvbi5nYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2dhdGUvc291cmNlL3N0cnVjdHVyZS1zZWxlY3Rpb24uZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDL0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDNUcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDMUcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUVBQXVFLENBQUM7QUFHaEg7SUFHNEMsa0RBQWE7SUFLeEQsZ0NBQVksV0FBd0IsRUFDakMscUJBQStDLEVBQy9DLDBCQUFtRCxFQUNuRCx1QkFBZ0Q7ZUFDbEQsa0JBQU0sV0FBVyxFQUFFLHFCQUFxQixFQUFFLDBCQUEwQixFQUFFLHVCQUF1QixDQUFDO0lBQy9GLENBQUM7O2dCQWJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsMkRBQTJEO2lCQUNyRTs7OztnQkFUUSxXQUFXO2dCQUVYLHdCQUF3QjtnQkFDeEIsdUJBQXVCO2dCQUN2Qix1QkFBdUI7OztnQ0FROUIsS0FBSzs7SUFVUCw2QkFBQztDQUFBLEFBZkQsQ0FHNEMsYUFBYSxHQVl4RDtTQVpZLHNCQUFzQjs7O0lBRWxDLCtDQUNvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU2VsZWN0aW9uR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9mZWF0dXJlL2dhdGUvc2VsZWN0aW9uLmdhdGUnO1xuaW1wb3J0IHsgRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24uZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBGb3JtYXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vdHlwZS9yb3ctc2VsZWN0aW9uLXR5cGUuYXJjaGl2ZSc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZVtyb3dTZWxlY3Rpb25dLCBndWktc3RydWN0dXJlW3NlbGVjdGlvbkdhdGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTZWxlY3Rpb25HYXRlIGV4dGVuZHMgU2VsZWN0aW9uR2F0ZSB7XG5cblx0QElucHV0KClcblx0c2VsZWN0aW9uR2F0ZTogdm9pZDtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdGZvcm1hdGlvbkV2ZW50U2VydmljZTogRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5LFxuXHRcdFx0XHRmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcjogRm9ybWF0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHJvd1NlbGVjdGlvblR5cGVBcmNoaXZlOiBSb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZSkge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCBmb3JtYXRpb25FdmVudFNlcnZpY2UsIGZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyLCByb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZSk7XG5cdH1cblxufVxuIl19