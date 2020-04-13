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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWZvcm1hdGlvbi5kaXNwYXRjaGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpLWFwaS9mb3JtYXRpb24vc3RydWN0dXJlLWZvcm1hdGlvbi5kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRWxGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBSTNELE1BQU0sT0FBTyw0QkFBNEI7Ozs7SUFFeEMsWUFBb0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDNUQsQ0FBQzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxjQUEyQixpQkFBaUI7UUFDL0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxXQUFtQixFQUFFLGNBQTJCLGlCQUFpQjtRQUNsRixJQUFJLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7OztZQVpELFVBQVU7Ozs7WUFMRixtQkFBbUI7Ozs7Ozs7SUFRZiwyREFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvcm1hdGlvbkRpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL2Zvcm1hdGlvbi5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVGb3JtYXRpb25EaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1hdGlvbkRpc3BhdGNoZXI6IEZvcm1hdGlvbkRpc3BhdGNoZXIpIHtcblx0fVxuXG5cdHNldERlZmF1bHRGb3JtYXRpb24oc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmZvcm1hdGlvbkRpc3BhdGNoZXIuc2V0RGVmYXVsdChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHR0b2dnbGVTZWxlY3RlZFJvdyhzZWxlY3RlZFJvdzogc3RyaW5nLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuZm9ybWF0aW9uRGlzcGF0Y2hlci50b2dnbGVTZWxlY3RlZFJvdyhzdHJ1Y3R1cmVJZCwgc2VsZWN0ZWRSb3cpO1xuXHR9XG5cbn1cbiJdfQ==