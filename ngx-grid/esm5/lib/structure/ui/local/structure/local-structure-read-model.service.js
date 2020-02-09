/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureReadModelService } from '../../../ui-api/structure/structure-read-model.service';
import { StructureId } from '../../../domain/structure-id';
import { StructureRepository } from '../../../domain/structure/read/structure.repository';
import { VerticalFormationRepository } from '../../../domain/structure/read/vertical-formation/vertical-formation.repository';
var LocalStructureReadModelService = /** @class */ (function (_super) {
    tslib_1.__extends(LocalStructureReadModelService, _super);
    function LocalStructureReadModelService(structureId, structureRepository, verticalFormationRepository) {
        var _this = _super.call(this, structureRepository, verticalFormationRepository) || this;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalStructureReadModelService.prototype.onStructure = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onStructure.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalStructureReadModelService.prototype.onVerticalScrollEnabled = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onVerticalScrollEnabled.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalStructureReadModelService.prototype.onRowHeight = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onRowHeight.call(this, this.structureId);
    };
    LocalStructureReadModelService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalStructureReadModelService.ctorParameters = function () { return [
        { type: StructureId },
        { type: StructureRepository },
        { type: VerticalFormationRepository }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalStructureReadModelService.prototype, "onStructure", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalStructureReadModelService.prototype, "onVerticalScrollEnabled", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalStructureReadModelService.prototype, "onRowHeight", null);
    return LocalStructureReadModelService;
}(StructureReadModelService));
export { LocalStructureReadModelService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalStructureReadModelService.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RydWN0dXJlLXJlYWQtbW9kZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9zdHJ1Y3R1cmUvbG9jYWwtc3RydWN0dXJlLXJlYWQtbW9kZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDbkcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBRTFGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlGQUFpRixDQUFDO0FBRzlIO0lBQ29ELDBEQUF5QjtJQUU1RSx3Q0FBb0IsV0FBd0IsRUFDekMsbUJBQXdDLEVBQ3hDLDJCQUF3RDtRQUYzRCxZQUdDLGtCQUFNLG1CQUFtQixFQUFFLDJCQUEyQixDQUFDLFNBQ3ZEO1FBSm1CLGlCQUFXLEdBQVgsV0FBVyxDQUFhOztJQUk1QyxDQUFDOzs7O0lBR0Qsb0RBQVc7OztJQUFYO1FBQ0MsT0FBTyxpQkFBTSxXQUFXLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFHRCxnRUFBdUI7OztJQUF2QjtRQUNDLE9BQU8saUJBQU0sdUJBQXVCLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFHRCxvREFBVzs7O0lBQVg7UUFDQyxPQUFPLGlCQUFNLFdBQVcsWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Z0JBdEJELFVBQVU7Ozs7Z0JBTkYsV0FBVztnQkFDWCxtQkFBbUI7Z0JBRW5CLDJCQUEyQjs7SUFhbkM7UUFEQyxRQUFROzs7Z0RBQ00sVUFBVTtxRUFFeEI7SUFHRDtRQURDLFFBQVE7OztnREFDa0IsVUFBVTtpRkFFcEM7SUFHRDtRQURDLFFBQVE7OztnREFDTSxVQUFVO3FFQUV4QjtJQUVGLHFDQUFDO0NBQUEsQUF4QkQsQ0FDb0QseUJBQXlCLEdBdUI1RTtTQXZCWSw4QkFBOEI7Ozs7OztJQUU5QixxREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvc3RydWN0dXJlLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9zdHJ1Y3R1cmUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmUgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL3JlYWQvc3RydWN0dXJlJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uLnJlcG9zaXRvcnknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbFN0cnVjdHVyZVJlYWRNb2RlbFNlcnZpY2UgZXh0ZW5kcyBTdHJ1Y3R1cmVSZWFkTW9kZWxTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0c3RydWN0dXJlUmVwb3NpdG9yeTogU3RydWN0dXJlUmVwb3NpdG9yeSxcblx0XHRcdFx0dmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5OiBWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVSZXBvc2l0b3J5LCB2ZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uU3RydWN0dXJlKCk6IE9ic2VydmFibGU8U3RydWN0dXJlPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uU3RydWN0dXJlKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uVmVydGljYWxTY3JvbGxFbmFibGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiBzdXBlci5vblZlcnRpY2FsU2Nyb2xsRW5hYmxlZCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblJvd0hlaWdodCgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiBzdXBlci5vblJvd0hlaWdodCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=