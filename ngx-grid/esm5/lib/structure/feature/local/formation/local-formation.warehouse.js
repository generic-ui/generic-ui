/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureId } from '../../../domain/structure.id';
import { StructureFormationWarehouse } from '../../../feature-api/formation/structure-formation.warehouse';
import { FormationRepository } from '../../../feature-api/formation/read/formation-repository';
var LocalFormationWarehouse = /** @class */ (function (_super) {
    tslib_1.__extends(LocalFormationWarehouse, _super);
    function LocalFormationWarehouse(structureId, formationRepository) {
        var _this = _super.call(this, formationRepository) || this;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalFormationWarehouse.prototype.onSelectedRows = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onSelectedRows.call(this, this.structureId);
    };
    LocalFormationWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalFormationWarehouse.ctorParameters = function () { return [
        { type: StructureId },
        { type: FormationRepository }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalFormationWarehouse.prototype, "onSelectedRows", null);
    return LocalFormationWarehouse;
}(StructureFormationWarehouse));
export { LocalFormationWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalFormationWarehouse.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtZm9ybWF0aW9uLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2xvY2FsL2Zvcm1hdGlvbi9sb2NhbC1mb3JtYXRpb24ud2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUVoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDM0csT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFJL0Y7SUFDNkMsbURBQTJCO0lBRXZFLGlDQUFvQixXQUF3QixFQUN6QyxtQkFBd0M7UUFEM0MsWUFFQyxrQkFBTSxtQkFBbUIsQ0FBQyxTQUMxQjtRQUhtQixpQkFBVyxHQUFYLFdBQVcsQ0FBYTs7SUFHNUMsQ0FBQzs7OztJQUdELGdEQUFjOzs7SUFBZDtRQUNDLE9BQU8saUJBQU0sY0FBYyxZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvQyxDQUFDOztnQkFYRCxVQUFVOzs7O2dCQU5GLFdBQVc7Z0JBRVgsbUJBQW1COztJQWEzQjtRQURDLFFBQVE7OztnREFDUyxVQUFVO2lFQUUzQjtJQUNGLDhCQUFDO0NBQUEsQUFaRCxDQUM2QywyQkFBMkIsR0FXdkU7U0FYWSx1QkFBdUI7Ozs7OztJQUV2Qiw4Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUtYXBpL2Zvcm1hdGlvbi9zdHJ1Y3R1cmUtZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS1hcGkvZm9ybWF0aW9uL3JlYWQvZm9ybWF0aW9uLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3dzTGlzdCB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUtYXBpL2Zvcm1hdGlvbi9yZWFkL3NlbGVjdGVkLXJvd3Mvc2VsZWN0ZWQtcm93cy1saXN0JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxGb3JtYXRpb25XYXJlaG91c2UgZXh0ZW5kcyBTdHJ1Y3R1cmVGb3JtYXRpb25XYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRmb3JtYXRpb25SZXBvc2l0b3J5OiBGb3JtYXRpb25SZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoZm9ybWF0aW9uUmVwb3NpdG9yeSk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25TZWxlY3RlZFJvd3MoKTogT2JzZXJ2YWJsZTxTZWxlY3RlZFJvd3NMaXN0PiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uU2VsZWN0ZWRSb3dzKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG59XG4iXX0=