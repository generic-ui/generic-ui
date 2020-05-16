/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureFormationDispatcher } from '../../../domain-api/formation/structure-formation.dispatcher';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtZm9ybWF0aW9uLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2xvY2FsL2Zvcm1hdGlvbi9sb2NhbC1mb3JtYXRpb24uY29tbWFuZC1kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDNUcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBSXJGLE1BQU0sT0FBTywrQkFBZ0MsU0FBUSw0QkFBNEI7Ozs7O0lBRWhGLFlBQW9CLFdBQXdCLEVBQ3pDLG1CQUF3QztRQUMxQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUZSLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBRzVDLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1QsS0FBSyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7OztJQUdELGlCQUFpQixDQUFDLFdBQW1CO1FBQ3BDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hELENBQUM7OztZQWZELFVBQVU7Ozs7WUFKRixXQUFXO1lBQ1gsbUJBQW1COztBQWdCM0I7SUFEQyxRQUFROzs7O3dFQUdSOzs7Ozs7SUFaVyxzREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlRm9ybWF0aW9uRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvZm9ybWF0aW9uL3N0cnVjdHVyZS1mb3JtYXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRm9ybWF0aW9uRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vZm9ybWF0aW9uLmRpc3BhdGNoZXInO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbEZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyIGV4dGVuZHMgU3RydWN0dXJlRm9ybWF0aW9uRGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdGZvcm1hdGlvbkRpc3BhdGNoZXI6IEZvcm1hdGlvbkRpc3BhdGNoZXIpIHtcblx0XHRzdXBlcihmb3JtYXRpb25EaXNwYXRjaGVyKTtcblx0fVxuXG5cdHNldERlZmF1bHQoKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0RGVmYXVsdEZvcm1hdGlvbih0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHR0b2dnbGVTZWxlY3RlZFJvdyhzZWxlY3RlZFJvdzogc3RyaW5nKTogdm9pZCB7XG5cdFx0c3VwZXIudG9nZ2xlU2VsZWN0ZWRSb3coc2VsZWN0ZWRSb3csIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==