/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureId } from '../../../domain/structure-id';
import { FormationReadModelService } from '../../../ui-api/formation/formation-read-model.service';
import { FormationRepository } from '../../../domain/formation/read/formation-repository';
export class LocalFormationReadModelService extends FormationReadModelService {
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
LocalFormationReadModelService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalFormationReadModelService.ctorParameters = () => [
    { type: StructureId },
    { type: FormationRepository }
];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalFormationReadModelService.prototype, "onSelectedRows", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalFormationReadModelService.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtZm9ybWF0aW9uLXJlYWQtbW9kZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9mb3JtYXRpb24vbG9jYWwtZm9ybWF0aW9uLXJlYWQtbW9kZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ25HLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBSzFGLE1BQU0sT0FBTyw4QkFBK0IsU0FBUSx5QkFBeUI7Ozs7O0lBRTVFLFlBQW9CLFdBQXdCLEVBQ3pDLG1CQUF3QztRQUMxQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUZSLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBRzVDLENBQUM7Ozs7SUFHRCxjQUFjO1FBQ2IsT0FBTyxLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7WUFYRCxVQUFVOzs7O1lBTkYsV0FBVztZQUVYLG1CQUFtQjs7QUFhM0I7SUFEQyxRQUFROzs7NENBQ1MsVUFBVTtvRUFFM0I7Ozs7OztJQVJXLHFEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgRm9ybWF0aW9uUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9mb3JtYXRpb24vZm9ybWF0aW9uLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9yZWFkL2Zvcm1hdGlvbi1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNlbGVjdGVkUm93c0xpc3QgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vZm9ybWF0aW9uL3JlYWQvc2VsZWN0ZWQtcm93cy9zZWxlY3RlZC1yb3dzLWxpc3QnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbEZvcm1hdGlvblJlYWRNb2RlbFNlcnZpY2UgZXh0ZW5kcyBGb3JtYXRpb25SZWFkTW9kZWxTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0Zm9ybWF0aW9uUmVwb3NpdG9yeTogRm9ybWF0aW9uUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKGZvcm1hdGlvblJlcG9zaXRvcnkpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uU2VsZWN0ZWRSb3dzKCk6IE9ic2VydmFibGU8U2VsZWN0ZWRSb3dzTGlzdD4ge1xuXHRcdHJldHVybiBzdXBlci5vblNlbGVjdGVkUm93cyh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxufVxuIl19