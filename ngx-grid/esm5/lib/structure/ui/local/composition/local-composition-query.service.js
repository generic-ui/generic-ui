/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { CompositionQueryService } from '../../api/composition/composition.query-service';
import { CompositionId } from '../../../domain/composition/composition-id';
import { CompositionRepository } from '../../../domain/composition/query/composition.repository';
import { globalCompositionId } from '../../../domain/composition/global-composition-id';
var LocalCompositionQueryService = /** @class */ (function (_super) {
    tslib_1.__extends(LocalCompositionQueryService, _super);
    function LocalCompositionQueryService(compositionId, compositionRepository) {
        var _this = _super.call(this, compositionRepository) || this;
        _this.compositionId = compositionId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalCompositionQueryService.prototype.selectHeaderColumns = /**
     * @return {?}
     */
    function () {
        return _super.prototype.selectHeaderColumns.call(this, this.compositionId);
    };
    /**
     * @return {?}
     */
    LocalCompositionQueryService.prototype.selectTemplateColumns = /**
     * @return {?}
     */
    function () {
        return _super.prototype.selectTemplateColumns.call(this, this.compositionId);
    };
    /**
     * @return {?}
     */
    LocalCompositionQueryService.prototype.selectWidthForEachColumn = /**
     * @return {?}
     */
    function () {
        return _super.prototype.selectWidthForEachColumn.call(this, this.compositionId);
    };
    /**
     * @return {?}
     */
    LocalCompositionQueryService.prototype.selectWidth = /**
     * @return {?}
     */
    function () {
        return _super.prototype.selectWidth.call(this, this.compositionId);
    };
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    LocalCompositionQueryService.prototype.selectContainerWidth = /**
     * @param {?=} compositionId
     * @return {?}
     */
    function (compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        return _super.prototype.selectContainerWidth.call(this, this.compositionId);
    };
    /**
     * @return {?}
     */
    LocalCompositionQueryService.prototype.selectResizeWidth = /**
     * @return {?}
     */
    function () {
        return _super.prototype.selectResizeWidth.call(this, this.compositionId);
    };
    LocalCompositionQueryService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalCompositionQueryService.ctorParameters = function () { return [
        { type: CompositionId },
        { type: CompositionRepository }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalCompositionQueryService.prototype, "selectHeaderColumns", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalCompositionQueryService.prototype, "selectTemplateColumns", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalCompositionQueryService.prototype, "selectWidthForEachColumn", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalCompositionQueryService.prototype, "selectWidth", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [CompositionId]),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalCompositionQueryService.prototype, "selectContainerWidth", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalCompositionQueryService.prototype, "selectResizeWidth", null);
    return LocalCompositionQueryService;
}(CompositionQueryService));
export { LocalCompositionQueryService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalCompositionQueryService.prototype.compositionId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtY29tcG9zaXRpb24tcXVlcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9jb21wb3NpdGlvbi9sb2NhbC1jb21wb3NpdGlvbi1xdWVyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUVoRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMxRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFHakcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFJeEY7SUFDa0Qsd0RBQXVCO0lBRXhFLHNDQUE2QixhQUE0QixFQUN0RCxxQkFBNEM7UUFEL0MsWUFFQyxrQkFBTSxxQkFBcUIsQ0FBQyxTQUM1QjtRQUg0QixtQkFBYSxHQUFiLGFBQWEsQ0FBZTs7SUFHekQsQ0FBQzs7OztJQUdELDBEQUFtQjs7O0lBQW5CO1FBQ0MsT0FBTyxpQkFBTSxtQkFBbUIsWUFBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7OztJQUdELDREQUFxQjs7O0lBQXJCO1FBQ0MsT0FBTyxpQkFBTSxxQkFBcUIsWUFBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7OztJQUdELCtEQUF3Qjs7O0lBQXhCO1FBQ0MsT0FBTyxpQkFBTSx3QkFBd0IsWUFBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7OztJQUdELGtEQUFXOzs7SUFBWDtRQUNDLE9BQU8saUJBQU0sV0FBVyxZQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUdELDJEQUFvQjs7OztJQUFwQixVQUFxQixhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUN0RSxPQUFPLGlCQUFNLG9CQUFvQixZQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7O0lBR0Qsd0RBQWlCOzs7SUFBakI7UUFDQyxPQUFPLGlCQUFNLGlCQUFpQixZQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwRCxDQUFDOztnQkFwQ0QsVUFBVTs7OztnQkFSRixhQUFhO2dCQUNiLHFCQUFxQjs7SUFnQjdCO1FBREMsUUFBUTs7O2dEQUNjLFVBQVU7MkVBRWhDO0lBR0Q7UUFEQyxRQUFROzs7Z0RBQ2dCLFVBQVU7NkVBRWxDO0lBR0Q7UUFEQyxRQUFROzs7Z0RBQ21CLFVBQVU7Z0ZBRXJDO0lBR0Q7UUFEQyxRQUFROzs7Z0RBQ00sVUFBVTttRUFFeEI7SUFHRDtRQURDLFFBQVE7O2lEQUMyQixhQUFhO2dEQUF5QixVQUFVOzRFQUVuRjtJQUdEO1FBREMsUUFBUTs7O2dEQUNZLFVBQVU7eUVBRTlCO0lBRUYsbUNBQUM7Q0FBQSxBQXRDRCxDQUNrRCx1QkFBdUIsR0FxQ3hFO1NBckNZLDRCQUE0Qjs7Ozs7O0lBRTVCLHFEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvblF1ZXJ5U2VydmljZSB9IGZyb20gJy4uLy4uL2FwaS9jb21wb3NpdGlvbi9jb21wb3NpdGlvbi5xdWVyeS1zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vY29tcG9zaXRpb24taWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL3F1ZXJ5L2NvbXBvc2l0aW9uLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vcXVlcnkvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vcXVlcnkvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3InO1xuaW1wb3J0IHsgZ2xvYmFsQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9nbG9iYWwtY29tcG9zaXRpb24taWQnO1xuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsQ29tcG9zaXRpb25RdWVyeVNlcnZpY2UgZXh0ZW5kcyBDb21wb3NpdGlvblF1ZXJ5U2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRjb21wb3NpdGlvblJlcG9zaXRvcnk6IENvbXBvc2l0aW9uUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKGNvbXBvc2l0aW9uUmVwb3NpdG9yeSk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2VsZWN0SGVhZGVyQ29sdW1ucygpOiBPYnNlcnZhYmxlPEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0Pj4ge1xuXHRcdHJldHVybiBzdXBlci5zZWxlY3RIZWFkZXJDb2x1bW5zKHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2VsZWN0VGVtcGxhdGVDb2x1bW5zKCk6IE9ic2VydmFibGU8QXJyYXk8Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yPj4ge1xuXHRcdHJldHVybiBzdXBlci5zZWxlY3RUZW1wbGF0ZUNvbHVtbnModGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZWxlY3RXaWR0aEZvckVhY2hDb2x1bW4oKTogT2JzZXJ2YWJsZTxBcnJheTxudW1iZXI+PiB7XG5cdFx0cmV0dXJuIHN1cGVyLnNlbGVjdFdpZHRoRm9yRWFjaENvbHVtbih0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNlbGVjdFdpZHRoKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHN1cGVyLnNlbGVjdFdpZHRoKHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2VsZWN0Q29udGFpbmVyV2lkdGgoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiBzdXBlci5zZWxlY3RDb250YWluZXJXaWR0aCh0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNlbGVjdFJlc2l6ZVdpZHRoKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiBzdXBlci5zZWxlY3RSZXNpemVXaWR0aCh0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cbn1cbiJdfQ==