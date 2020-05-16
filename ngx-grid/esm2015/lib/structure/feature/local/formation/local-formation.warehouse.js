/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureId } from '../../../domain/structure.id';
import { StructureFormationWarehouse } from '../../../domain-api/formation/structure-formation.warehouse';
import { FormationRepository } from '../../../domain-api/formation/read/formation-repository';
export class LocalFormationWarehouse extends StructureFormationWarehouse {
    /**
     * @param {?} structureId
     * @param {?} formationRepository
     */
    constructor(structureId, formationRepository) {
        super(formationRepository);
        this.structureId = structureId;
    }
    /**
     * @return {?}
     */
    onSelectedRows() {
        return super.onSelectedRows(this.structureId);
    }
}
LocalFormationWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalFormationWarehouse.ctorParameters = () => [
    { type: StructureId },
    { type: FormationRepository }
];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalFormationWarehouse.prototype, "onSelectedRows", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalFormationWarehouse.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtZm9ybWF0aW9uLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2xvY2FsL2Zvcm1hdGlvbi9sb2NhbC1mb3JtYXRpb24ud2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUVoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDMUcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFLOUYsTUFBTSxPQUFPLHVCQUF3QixTQUFRLDJCQUEyQjs7Ozs7SUFFdkUsWUFBb0IsV0FBd0IsRUFDekMsbUJBQXdDO1FBQzFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBRlIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFHNUMsQ0FBQzs7OztJQUdELGNBQWM7UUFDYixPQUFPLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7OztZQVhELFVBQVU7Ozs7WUFORixXQUFXO1lBRVgsbUJBQW1COztBQWEzQjtJQURDLFFBQVE7Ozs0Q0FDUyxVQUFVOzZEQUUzQjs7Ozs7O0lBUlcsOENBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL2Zvcm1hdGlvbi9zdHJ1Y3R1cmUtZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9mb3JtYXRpb24vcmVhZC9mb3JtYXRpb24tcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTZWxlY3RlZFJvd3NMaXN0IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9mb3JtYXRpb24vcmVhZC9zZWxlY3RlZC1yb3dzL3NlbGVjdGVkLXJvd3MtbGlzdCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsRm9ybWF0aW9uV2FyZWhvdXNlIGV4dGVuZHMgU3RydWN0dXJlRm9ybWF0aW9uV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0Zm9ybWF0aW9uUmVwb3NpdG9yeTogRm9ybWF0aW9uUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKGZvcm1hdGlvblJlcG9zaXRvcnkpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uU2VsZWN0ZWRSb3dzKCk6IE9ic2VydmFibGU8U2VsZWN0ZWRSb3dzTGlzdD4ge1xuXHRcdHJldHVybiBzdXBlci5vblNlbGVjdGVkUm93cyh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxufVxuIl19