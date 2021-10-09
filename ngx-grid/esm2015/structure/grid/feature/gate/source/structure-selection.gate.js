/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { StructureId } from '../../../../core/api/structure.id';
import { SelectionGate } from '../../../../source/feature/gate/selection.gate';
import { FormationEventRepository } from '../../../../source/core/api/formation/formation.event-repository';
import { FormationCommandInvoker } from '../../../../source/core/api/formation/formation.command-invoker';
import { RowSelectionTypeArchive } from '../../../../source/core/api/formation/type/row-selection-type.archive';
export class StructureSelectionGate extends SelectionGate {
    /**
     * @param {?} structureId
     * @param {?} formationEventService
     * @param {?} formationCommandDispatcher
     * @param {?} rowSelectionTypeArchive
     */
    constructor(structureId, formationEventService, formationCommandDispatcher, rowSelectionTypeArchive) {
        super(structureId, formationEventService, formationCommandDispatcher, rowSelectionTypeArchive);
    }
}
StructureSelectionGate.decorators = [
    { type: Directive, args: [{
                selector: 'gui-structure[rowSelection], gui-structure[selectionGate]'
            },] }
];
/** @nocollapse */
StructureSelectionGate.ctorParameters = () => [
    { type: StructureId },
    { type: FormationEventRepository },
    { type: FormationCommandInvoker },
    { type: RowSelectionTypeArchive }
];
StructureSelectionGate.propDecorators = {
    selectionGate: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureSelectionGate.prototype.selectionGate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXNlbGVjdGlvbi5nYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2dhdGUvc291cmNlL3N0cnVjdHVyZS1zZWxlY3Rpb24uZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMvRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUM1RyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUMxRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQU1oSCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsYUFBYTs7Ozs7OztJQUt4RCxZQUFZLFdBQXdCLEVBQ2pDLHFCQUErQyxFQUMvQywwQkFBbUQsRUFDbkQsdUJBQWdEO1FBQ2xELEtBQUssQ0FBQyxXQUFXLEVBQUUscUJBQXFCLEVBQUUsMEJBQTBCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztJQUNoRyxDQUFDOzs7WUFiRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDJEQUEyRDthQUNyRTs7OztZQVRRLFdBQVc7WUFFWCx3QkFBd0I7WUFDeEIsdUJBQXVCO1lBQ3ZCLHVCQUF1Qjs7OzRCQVE5QixLQUFLOzs7O0lBQU4sK0NBQ29CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTZWxlY3Rpb25HYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2ZlYXR1cmUvZ2F0ZS9zZWxlY3Rpb24uZ2F0ZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25FdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvblR5cGVBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi90eXBlL3Jvdy1zZWxlY3Rpb24tdHlwZS5hcmNoaXZlJztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlW3Jvd1NlbGVjdGlvbl0sIGd1aS1zdHJ1Y3R1cmVbc2VsZWN0aW9uR2F0ZV0nXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNlbGVjdGlvbkdhdGUgZXh0ZW5kcyBTZWxlY3Rpb25HYXRlIHtcblxuXHRASW5wdXQoKVxuXHRzZWxlY3Rpb25HYXRlOiB2b2lkO1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0Zm9ybWF0aW9uRXZlbnRTZXJ2aWNlOiBGb3JtYXRpb25FdmVudFJlcG9zaXRvcnksXG5cdFx0XHRcdGZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyOiBGb3JtYXRpb25Db21tYW5kSW52b2tlcixcblx0XHRcdFx0cm93U2VsZWN0aW9uVHlwZUFyY2hpdmU6IFJvd1NlbGVjdGlvblR5cGVBcmNoaXZlKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsIGZvcm1hdGlvbkV2ZW50U2VydmljZSwgZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXIsIHJvd1NlbGVjdGlvblR5cGVBcmNoaXZlKTtcblx0fVxuXG59XG4iXX0=