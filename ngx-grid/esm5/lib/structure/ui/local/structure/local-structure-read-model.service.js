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
var LocalStructureReadModelService = /** @class */ (function (_super) {
    tslib_1.__extends(LocalStructureReadModelService, _super);
    function LocalStructureReadModelService(structureId, structureRepository) {
        var _this = _super.call(this, structureRepository) || this;
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
    LocalStructureReadModelService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalStructureReadModelService.ctorParameters = function () { return [
        { type: StructureId },
        { type: StructureRepository }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RydWN0dXJlLXJlYWQtbW9kZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9zdHJ1Y3R1cmUvbG9jYWwtc3RydWN0dXJlLXJlYWQtbW9kZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDbkcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBSTFGO0lBQ29ELDBEQUF5QjtJQUU1RSx3Q0FBb0IsV0FBd0IsRUFDekMsbUJBQXdDO1FBRDNDLFlBRUMsa0JBQU0sbUJBQW1CLENBQUMsU0FDMUI7UUFIbUIsaUJBQVcsR0FBWCxXQUFXLENBQWE7O0lBRzVDLENBQUM7Ozs7SUFHRCxvREFBVzs7O0lBQVg7UUFDQyxPQUFPLGlCQUFNLFdBQVcsWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7OztJQUdELGdFQUF1Qjs7O0lBQXZCO1FBQ0MsT0FBTyxpQkFBTSx1QkFBdUIsWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDdkQsQ0FBQzs7Z0JBaEJELFVBQVU7Ozs7Z0JBTEYsV0FBVztnQkFDWCxtQkFBbUI7O0lBYTNCO1FBREMsUUFBUTs7O2dEQUNNLFVBQVU7cUVBRXhCO0lBR0Q7UUFEQyxRQUFROzs7Z0RBQ2tCLFVBQVU7aUZBRXBDO0lBRUYscUNBQUM7Q0FBQSxBQWxCRCxDQUNvRCx5QkFBeUIsR0FpQjVFO1NBakJZLDhCQUE4Qjs7Ozs7O0lBRTlCLHFEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtcmVhZC1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9yZWFkL3N0cnVjdHVyZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9zdHJ1Y3R1cmUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbFN0cnVjdHVyZVJlYWRNb2RlbFNlcnZpY2UgZXh0ZW5kcyBTdHJ1Y3R1cmVSZWFkTW9kZWxTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0c3RydWN0dXJlUmVwb3NpdG9yeTogU3RydWN0dXJlUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKHN0cnVjdHVyZVJlcG9zaXRvcnkpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uU3RydWN0dXJlKCk6IE9ic2VydmFibGU8U3RydWN0dXJlPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uU3RydWN0dXJlKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uVmVydGljYWxTY3JvbGxFbmFibGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiBzdXBlci5vblZlcnRpY2FsU2Nyb2xsRW5hYmxlZCh0aGlzLnN0cnVjdHVyZUlkKVxuXHR9XG5cbn1cbiJdfQ==