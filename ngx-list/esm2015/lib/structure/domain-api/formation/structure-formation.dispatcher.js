/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormationDispatcher } from '../../domain/formation/formation.dispatcher';
import { structureGlobalId } from '../structure.global-id';
export class StructureFormationDispatcher {
    /**
     * @param {?} formationDispatcher
     */
    constructor(formationDispatcher) {
        this.formationDispatcher = formationDispatcher;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    setDefaultFormation(structureId = structureGlobalId) {
        this.formationDispatcher.setDefault(structureId);
    }
    /**
     * @param {?} selectedRow
     * @param {?=} structureId
     * @return {?}
     */
    toggleSelectedRow(selectedRow, structureId = structureGlobalId) {
        this.formationDispatcher.toggleSelectedRow(structureId, selectedRow);
    }
}
StructureFormationDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureFormationDispatcher.ctorParameters = () => [
    { type: FormationDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFormationDispatcher.prototype.formationDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWZvcm1hdGlvbi5kaXNwYXRjaGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi1hcGkvZm9ybWF0aW9uL3N0cnVjdHVyZS1mb3JtYXRpb24uZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUVsRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUkzRCxNQUFNLE9BQU8sNEJBQTRCOzs7O0lBRXhDLFlBQW9CLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBQzVELENBQUM7Ozs7O0lBRUQsbUJBQW1CLENBQUMsY0FBMkIsaUJBQWlCO1FBQy9ELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7O0lBRUQsaUJBQWlCLENBQUMsV0FBbUIsRUFBRSxjQUEyQixpQkFBaUI7UUFDbEYsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7WUFaRCxVQUFVOzs7O1lBTEYsbUJBQW1COzs7Ozs7O0lBUWYsMkRBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGb3JtYXRpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9mb3JtYXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgc3RydWN0dXJlR2xvYmFsSWQgfSBmcm9tICcuLi9zdHJ1Y3R1cmUuZ2xvYmFsLWlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRm9ybWF0aW9uRGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBmb3JtYXRpb25EaXNwYXRjaGVyOiBGb3JtYXRpb25EaXNwYXRjaGVyKSB7XG5cdH1cblxuXHRzZXREZWZhdWx0Rm9ybWF0aW9uKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5mb3JtYXRpb25EaXNwYXRjaGVyLnNldERlZmF1bHQoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0dG9nZ2xlU2VsZWN0ZWRSb3coc2VsZWN0ZWRSb3c6IHN0cmluZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmZvcm1hdGlvbkRpc3BhdGNoZXIudG9nZ2xlU2VsZWN0ZWRSb3coc3RydWN0dXJlSWQsIHNlbGVjdGVkUm93KTtcblx0fVxuXG59XG4iXX0=