/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureFormationDispatcher } from '../../../ui-api/formation/structure-formation.dispatcher';
import { StructureId } from '../../../domain/structure.id';
import { FormationDispatcher } from '../../../domain/formation/formation.dispatcher';
export class LocalFormationCommandDispatcher extends StructureFormationDispatcher {
    /**
     * @param {?} structureId
     * @param {?} formationDispatcher
     */
    constructor(structureId, formationDispatcher) {
        super(formationDispatcher);
        this.structureId = structureId;
    }
    /**
     * @return {?}
     */
    setDefault() {
        super.setDefaultFormation(this.structureId);
    }
    /**
     * @param {?} selectedRow
     * @return {?}
     */
    toggleSelectedRow(selectedRow) {
        super.toggleSelectedRow(selectedRow, this.structureId);
    }
}
LocalFormationCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalFormationCommandDispatcher.ctorParameters = () => [
    { type: StructureId },
    { type: FormationDispatcher }
];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalFormationCommandDispatcher.prototype, "toggleSelectedRow", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalFormationCommandDispatcher.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtZm9ybWF0aW9uLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9mb3JtYXRpb24vbG9jYWwtZm9ybWF0aW9uLmNvbW1hbmQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUlyRixNQUFNLE9BQU8sK0JBQWdDLFNBQVEsNEJBQTRCOzs7OztJQUVoRixZQUFvQixXQUF3QixFQUN6QyxtQkFBd0M7UUFDMUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFGUixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUc1QyxDQUFDOzs7O0lBRUQsVUFBVTtRQUNULEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFHRCxpQkFBaUIsQ0FBQyxXQUFtQjtRQUNwQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7WUFmRCxVQUFVOzs7O1lBSkYsV0FBVztZQUNYLG1CQUFtQjs7QUFnQjNCO0lBREMsUUFBUTs7Ozt3RUFHUjs7Ozs7O0lBWlcsc0RBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUZvcm1hdGlvbkRpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvZm9ybWF0aW9uL3N0cnVjdHVyZS1mb3JtYXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRm9ybWF0aW9uRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vZm9ybWF0aW9uLmRpc3BhdGNoZXInO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbEZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyIGV4dGVuZHMgU3RydWN0dXJlRm9ybWF0aW9uRGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdGZvcm1hdGlvbkRpc3BhdGNoZXI6IEZvcm1hdGlvbkRpc3BhdGNoZXIpIHtcblx0XHRzdXBlcihmb3JtYXRpb25EaXNwYXRjaGVyKTtcblx0fVxuXG5cdHNldERlZmF1bHQoKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0RGVmYXVsdEZvcm1hdGlvbih0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHR0b2dnbGVTZWxlY3RlZFJvdyhzZWxlY3RlZFJvdzogc3RyaW5nKTogdm9pZCB7XG5cdFx0c3VwZXIudG9nZ2xlU2VsZWN0ZWRSb3coc2VsZWN0ZWRSb3csIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==