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
var LocalFormationReadModelService = /** @class */ (function (_super) {
    tslib_1.__extends(LocalFormationReadModelService, _super);
    function LocalFormationReadModelService(structureId, formationRepository) {
        var _this = _super.call(this, formationRepository) || this;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalFormationReadModelService.prototype.onSelectedRows = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onSelectedRows.call(this, this.structureId);
    };
    LocalFormationReadModelService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalFormationReadModelService.ctorParameters = function () { return [
        { type: StructureId },
        { type: FormationRepository }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalFormationReadModelService.prototype, "onSelectedRows", null);
    return LocalFormationReadModelService;
}(FormationReadModelService));
export { LocalFormationReadModelService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalFormationReadModelService.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtZm9ybWF0aW9uLXJlYWQtbW9kZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9mb3JtYXRpb24vbG9jYWwtZm9ybWF0aW9uLXJlYWQtbW9kZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ25HLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBSTFGO0lBQ29ELDBEQUF5QjtJQUU1RSx3Q0FBb0IsV0FBd0IsRUFDekMsbUJBQXdDO1FBRDNDLFlBRUMsa0JBQU0sbUJBQW1CLENBQUMsU0FDMUI7UUFIbUIsaUJBQVcsR0FBWCxXQUFXLENBQWE7O0lBRzVDLENBQUM7Ozs7SUFHRCx1REFBYzs7O0lBQWQ7UUFDQyxPQUFPLGlCQUFNLGNBQWMsWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Z0JBWEQsVUFBVTs7OztnQkFORixXQUFXO2dCQUVYLG1CQUFtQjs7SUFhM0I7UUFEQyxRQUFROzs7Z0RBQ1MsVUFBVTt3RUFFM0I7SUFDRixxQ0FBQztDQUFBLEFBWkQsQ0FDb0QseUJBQXlCLEdBVzVFO1NBWFksOEJBQThCOzs7Ozs7SUFFOUIscURBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBGb3JtYXRpb25SZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24tcmVhZC1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1hdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vZm9ybWF0aW9uL3JlYWQvZm9ybWF0aW9uLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3dzTGlzdCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vcmVhZC9zZWxlY3RlZC1yb3dzL3NlbGVjdGVkLXJvd3MtbGlzdCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsRm9ybWF0aW9uUmVhZE1vZGVsU2VydmljZSBleHRlbmRzIEZvcm1hdGlvblJlYWRNb2RlbFNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRmb3JtYXRpb25SZXBvc2l0b3J5OiBGb3JtYXRpb25SZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoZm9ybWF0aW9uUmVwb3NpdG9yeSk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25TZWxlY3RlZFJvd3MoKTogT2JzZXJ2YWJsZTxTZWxlY3RlZFJvd3NMaXN0PiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uU2VsZWN0ZWRSb3dzKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG59XG4iXX0=