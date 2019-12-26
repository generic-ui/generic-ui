/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SchemaReadModelService } from '../../../ui-api/schema/schema-read-model.service';
import { StructureId } from '../../../domain/structure-id';
import { SchemaRepository } from '../../../domain/schema/read/schema-repository';
import { Override } from '../../../../../common/cdk/decorators';
import { globalStructureId } from '../../../domain/global-structure-id';
var LocalSchemaReadModelService = /** @class */ (function (_super) {
    tslib_1.__extends(LocalSchemaReadModelService, _super);
    function LocalSchemaReadModelService(structureId, schemaRepository) {
        var _this = _super.call(this, schemaRepository) || this;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalSchemaReadModelService.prototype.onSchema = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onSchema.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalSchemaReadModelService.prototype.onHeight = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onHeight.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalSchemaReadModelService.prototype.onContainerHeight = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onContainerHeight.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalSchemaReadModelService.prototype.onSingleSchema = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onSingleSchema.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalSchemaReadModelService.prototype.onCssClasses = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onCssClasses.call(this, this.structureId);
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    LocalSchemaReadModelService.prototype.onColumnHeader = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        return _super.prototype.onColumnHeader.call(this, this.structureId);
    };
    LocalSchemaReadModelService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalSchemaReadModelService.ctorParameters = function () { return [
        { type: StructureId },
        { type: SchemaRepository }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalSchemaReadModelService.prototype, "onSchema", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalSchemaReadModelService.prototype, "onHeight", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalSchemaReadModelService.prototype, "onContainerHeight", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalSchemaReadModelService.prototype, "onSingleSchema", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalSchemaReadModelService.prototype, "onCssClasses", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [StructureId]),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalSchemaReadModelService.prototype, "onColumnHeader", null);
    return LocalSchemaReadModelService;
}(SchemaReadModelService));
export { LocalSchemaReadModelService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSchemaReadModelService.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc2NoZW1hLXJlYWQtbW9kZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9zY2hlbWEvbG9jYWwtc2NoZW1hLXJlYWQtbW9kZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDakYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBR2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBS3hFO0lBQ2lELHVEQUFzQjtJQUV0RSxxQ0FBb0IsV0FBd0IsRUFDekMsZ0JBQWtDO1FBRHJDLFlBRUMsa0JBQU0sZ0JBQWdCLENBQUMsU0FDdkI7UUFIbUIsaUJBQVcsR0FBWCxXQUFXLENBQWE7O0lBRzVDLENBQUM7Ozs7SUFHRCw4Q0FBUTs7O0lBQVI7UUFDQyxPQUFPLGlCQUFNLFFBQVEsWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUdELDhDQUFROzs7SUFBUjtRQUNDLE9BQU8saUJBQU0sUUFBUSxZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBR0QsdURBQWlCOzs7SUFBakI7UUFDQyxPQUFPLGlCQUFNLGlCQUFpQixZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7O0lBR0Qsb0RBQWM7OztJQUFkO1FBQ0MsT0FBTyxpQkFBTSxjQUFjLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFHRCxrREFBWTs7O0lBQVo7UUFDQyxPQUFPLGlCQUFNLFlBQVksWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFHRCxvREFBYzs7OztJQUFkLFVBQWUsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDMUQsT0FBTyxpQkFBTSxjQUFjLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7O2dCQXBDRCxVQUFVOzs7O2dCQVZGLFdBQVc7Z0JBQ1gsZ0JBQWdCOztJQWtCeEI7UUFEQyxRQUFROzs7Z0RBQ0csVUFBVTsrREFFckI7SUFHRDtRQURDLFFBQVE7OztnREFDRyxVQUFVOytEQUVyQjtJQUdEO1FBREMsUUFBUTs7O2dEQUNZLFVBQVU7d0VBRTlCO0lBR0Q7UUFEQyxRQUFROzs7Z0RBQ1MsVUFBVTtxRUFFM0I7SUFHRDtRQURDLFFBQVE7OztnREFDTyxVQUFVO21FQUV6QjtJQUdEO1FBREMsUUFBUTs7aURBQ21CLFdBQVc7Z0RBQXVCLFVBQVU7cUVBRXZFO0lBRUYsa0NBQUM7Q0FBQSxBQXRDRCxDQUNpRCxzQkFBc0IsR0FxQ3RFO1NBckNZLDJCQUEyQjs7Ozs7O0lBRTNCLGtEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc2NoZW1hL3NjaGVtYS1yZWFkLW1vZGVsLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFNjaGVtYVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc2NoZW1hL3JlYWQvc2NoZW1hLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NjaGVtYS9yZWFkL3NjaGVtYSc7XG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzcyB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zY2hlbWEvcmVhZC9zY2hlbWEtY3NzLWNsYXNzJztcbmltcG9ydCB7IGdsb2JhbFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2dsb2JhbC1zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU2NoZW1hQ29sdW1uSGVhZGVyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NjaGVtYS9yZWFkL3NjaGVtYS1jb2x1bW4taGVhZGVyJztcblxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbFNjaGVtYVJlYWRNb2RlbFNlcnZpY2UgZXh0ZW5kcyBTY2hlbWFSZWFkTW9kZWxTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0c2NoZW1hUmVwb3NpdG9yeTogU2NoZW1hUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKHNjaGVtYVJlcG9zaXRvcnkpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uU2NoZW1hKCk6IE9ic2VydmFibGU8U2NoZW1hPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uU2NoZW1hKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uSGVpZ2h0KCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uSGVpZ2h0KHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uQ29udGFpbmVySGVpZ2h0KCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uQ29udGFpbmVySGVpZ2h0KHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uU2luZ2xlU2NoZW1hKCk6IE9ic2VydmFibGU8U2NoZW1hPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uU2luZ2xlU2NoZW1hKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uQ3NzQ2xhc3NlcygpOiBPYnNlcnZhYmxlPFNjaGVtYUNzc0NsYXNzPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uQ3NzQ2xhc3Nlcyh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvbkNvbHVtbkhlYWRlcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8U2NoZW1hQ29sdW1uSGVhZGVyPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uQ29sdW1uSGVhZGVyKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==