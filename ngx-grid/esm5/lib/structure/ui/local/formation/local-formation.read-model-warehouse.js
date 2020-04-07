/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureId } from '../../../domain/structure.id';
import { FormationReadModelService } from '../../../ui-api/formation/formation-read-model.service';
import { FormationRepository } from '../../../read/formation/formation-repository';
var LocalFormationReadModelWarehouse = /** @class */ (function (_super) {
    tslib_1.__extends(LocalFormationReadModelWarehouse, _super);
    function LocalFormationReadModelWarehouse(structureId, formationRepository) {
        var _this = _super.call(this, formationRepository) || this;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalFormationReadModelWarehouse.prototype.onSelectedRows = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onSelectedRows.call(this, this.structureId);
    };
    LocalFormationReadModelWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalFormationReadModelWarehouse.ctorParameters = function () { return [
        { type: StructureId },
        { type: FormationRepository }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalFormationReadModelWarehouse.prototype, "onSelectedRows", null);
    return LocalFormationReadModelWarehouse;
}(FormationReadModelService));
export { LocalFormationReadModelWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalFormationReadModelWarehouse.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtZm9ybWF0aW9uLnJlYWQtbW9kZWwtd2FyZWhvdXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2xvY2FsL2Zvcm1hdGlvbi9sb2NhbC1mb3JtYXRpb24ucmVhZC1tb2RlbC13YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNuRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUluRjtJQUNzRCw0REFBeUI7SUFFOUUsMENBQW9CLFdBQXdCLEVBQ3pDLG1CQUF3QztRQUQzQyxZQUVDLGtCQUFNLG1CQUFtQixDQUFDLFNBQzFCO1FBSG1CLGlCQUFXLEdBQVgsV0FBVyxDQUFhOztJQUc1QyxDQUFDOzs7O0lBR0QseURBQWM7OztJQUFkO1FBQ0MsT0FBTyxpQkFBTSxjQUFjLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7O2dCQVhELFVBQVU7Ozs7Z0JBTkYsV0FBVztnQkFFWCxtQkFBbUI7O0lBYTNCO1FBREMsUUFBUTs7O2dEQUNTLFVBQVU7MEVBRTNCO0lBQ0YsdUNBQUM7Q0FBQSxBQVpELENBQ3NELHlCQUF5QixHQVc5RTtTQVhZLGdDQUFnQzs7Ozs7O0lBRWhDLHVEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRm9ybWF0aW9uUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9mb3JtYXRpb24vZm9ybWF0aW9uLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vcmVhZC9mb3JtYXRpb24vZm9ybWF0aW9uLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3dzTGlzdCB9IGZyb20gJy4uLy4uLy4uL3JlYWQvZm9ybWF0aW9uL3NlbGVjdGVkLXJvd3Mvc2VsZWN0ZWQtcm93cy1saXN0JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxGb3JtYXRpb25SZWFkTW9kZWxXYXJlaG91c2UgZXh0ZW5kcyBGb3JtYXRpb25SZWFkTW9kZWxTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0Zm9ybWF0aW9uUmVwb3NpdG9yeTogRm9ybWF0aW9uUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKGZvcm1hdGlvblJlcG9zaXRvcnkpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uU2VsZWN0ZWRSb3dzKCk6IE9ic2VydmFibGU8U2VsZWN0ZWRSb3dzTGlzdD4ge1xuXHRcdHJldHVybiBzdXBlci5vblNlbGVjdGVkUm93cyh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxufVxuIl19