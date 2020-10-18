/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureId } from '../../../../core/api/structure.id';
import { FormationWarehouse } from '../../../../source/core/api/formation/formation.warehouse';
import { RowSelectedRepository } from '../../../../source/core/api/formation/row-selected/row-selected.repository';
import { RowSelectionModeRepository } from '../../../../source/core/api/formation/mode/row-selection-mode.repository';
import { SourceWarehouse } from '../../../../source/core/api/source.warehouse';
var LocalFormationWarehouse = /** @class */ (function (_super) {
    tslib_1.__extends(LocalFormationWarehouse, _super);
    function LocalFormationWarehouse(structureId, rowSelectedArchive, rowSelectionModeRepository, sourceWarehouse) {
        var _this = _super.call(this, rowSelectedArchive, rowSelectionModeRepository, sourceWarehouse) || this;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalFormationWarehouse.prototype.onRowSelectedReadModel = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onRowSelectedReadModel.call(this, this.structureId);
    };
    LocalFormationWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalFormationWarehouse.ctorParameters = function () { return [
        { type: StructureId },
        { type: RowSelectedRepository },
        { type: RowSelectionModeRepository },
        { type: SourceWarehouse }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalFormationWarehouse.prototype, "onRowSelectedReadModel", null);
    return LocalFormationWarehouse;
}(FormationWarehouse));
export { LocalFormationWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalFormationWarehouse.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtZm9ybWF0aW9uLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9sb2NhbC9mb3JtYXRpb24vbG9jYWwtZm9ybWF0aW9uLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRFQUE0RSxDQUFDO0FBRW5ILE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDBFQUEwRSxDQUFDO0FBQ3RILE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUcvRTtJQUM2QyxtREFBa0I7SUFFOUQsaUNBQW9CLFdBQXdCLEVBQ3pDLGtCQUF5QyxFQUN6QywwQkFBc0QsRUFDdEQsZUFBZ0M7UUFIbkMsWUFJQyxrQkFBTSxrQkFBa0IsRUFBRSwwQkFBMEIsRUFBRSxlQUFlLENBQUMsU0FDdEU7UUFMbUIsaUJBQVcsR0FBWCxXQUFXLENBQWE7O0lBSzVDLENBQUM7Ozs7SUFHRCx3REFBc0I7OztJQUF0QjtRQUNDLE9BQU8saUJBQU0sc0JBQXNCLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7O2dCQWJELFVBQVU7Ozs7Z0JBUkYsV0FBVztnQkFFWCxxQkFBcUI7Z0JBRXJCLDBCQUEwQjtnQkFDMUIsZUFBZTs7SUFjdkI7UUFEQyxRQUFROzs7Z0RBQ2lCLFVBQVU7eUVBRW5DO0lBQ0YsOEJBQUM7Q0FBQSxBQWRELENBQzZDLGtCQUFrQixHQWE5RDtTQWJZLHVCQUF1Qjs7Ozs7O0lBRXZCLDhDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgUm93U2VsZWN0ZWRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9yb3ctc2VsZWN0ZWQvcm93LXNlbGVjdGVkLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgUm93U2VsZWN0ZWRSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL3Jvdy1zZWxlY3RlZC5yZWFkLW1vZGVsJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvbk1vZGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9tb2RlL3Jvdy1zZWxlY3Rpb24tbW9kZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2Uud2FyZWhvdXNlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxGb3JtYXRpb25XYXJlaG91c2UgZXh0ZW5kcyBGb3JtYXRpb25XYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRyb3dTZWxlY3RlZEFyY2hpdmU6IFJvd1NlbGVjdGVkUmVwb3NpdG9yeSxcblx0XHRcdFx0cm93U2VsZWN0aW9uTW9kZVJlcG9zaXRvcnk6IFJvd1NlbGVjdGlvbk1vZGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRzb3VyY2VXYXJlaG91c2U6IFNvdXJjZVdhcmVob3VzZSkge1xuXHRcdHN1cGVyKHJvd1NlbGVjdGVkQXJjaGl2ZSwgcm93U2VsZWN0aW9uTW9kZVJlcG9zaXRvcnksIHNvdXJjZVdhcmVob3VzZSk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25Sb3dTZWxlY3RlZFJlYWRNb2RlbCgpOiBPYnNlcnZhYmxlPFJvd1NlbGVjdGVkUmVhZE1vZGVsPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uUm93U2VsZWN0ZWRSZWFkTW9kZWwodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cbn1cbiJdfQ==