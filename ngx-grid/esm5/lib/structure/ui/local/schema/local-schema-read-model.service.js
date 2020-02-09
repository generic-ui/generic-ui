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
    LocalSchemaReadModelService.prototype.onSingleSchema = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onSingleSchema.call(this, this.structureId);
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
    ], LocalSchemaReadModelService.prototype, "onSingleSchema", null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc2NoZW1hLXJlYWQtbW9kZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9zY2hlbWEvbG9jYWwtc2NoZW1hLXJlYWQtbW9kZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDakYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBR2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBSXhFO0lBQ2lELHVEQUFzQjtJQUV0RSxxQ0FBb0IsV0FBd0IsRUFDekMsZ0JBQWtDO1FBRHJDLFlBRUMsa0JBQU0sZ0JBQWdCLENBQUMsU0FDdkI7UUFIbUIsaUJBQVcsR0FBWCxXQUFXLENBQWE7O0lBRzVDLENBQUM7Ozs7SUFHRCw4Q0FBUTs7O0lBQVI7UUFDQyxPQUFPLGlCQUFNLFFBQVEsWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUdELG9EQUFjOzs7SUFBZDtRQUNDLE9BQU8saUJBQU0sY0FBYyxZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7O0lBR0QsOENBQVE7OztJQUFSO1FBQ0MsT0FBTyxpQkFBTSxRQUFRLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFHRCx1REFBaUI7OztJQUFqQjtRQUNDLE9BQU8saUJBQU0saUJBQWlCLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFHRCxrREFBWTs7O0lBQVo7UUFDQyxPQUFPLGlCQUFNLFlBQVksWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFHRCxvREFBYzs7OztJQUFkLFVBQWUsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDMUQsT0FBTyxpQkFBTSxjQUFjLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7O2dCQXBDRCxVQUFVOzs7O2dCQVRGLFdBQVc7Z0JBQ1gsZ0JBQWdCOztJQWlCeEI7UUFEQyxRQUFROzs7Z0RBQ0csVUFBVTsrREFFckI7SUFHRDtRQURDLFFBQVE7OztnREFDUyxVQUFVO3FFQUUzQjtJQUdEO1FBREMsUUFBUTs7O2dEQUNHLFVBQVU7K0RBRXJCO0lBR0Q7UUFEQyxRQUFROzs7Z0RBQ1ksVUFBVTt3RUFFOUI7SUFHRDtRQURDLFFBQVE7OztnREFDTyxVQUFVO21FQUV6QjtJQUdEO1FBREMsUUFBUTs7aURBQ21CLFdBQVc7Z0RBQXVCLFVBQVU7cUVBRXZFO0lBRUYsa0NBQUM7Q0FBQSxBQXRDRCxDQUNpRCxzQkFBc0IsR0FxQ3RFO1NBckNZLDJCQUEyQjs7Ozs7O0lBRTNCLGtEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc2NoZW1hL3NjaGVtYS1yZWFkLW1vZGVsLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFNjaGVtYVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc2NoZW1hL3JlYWQvc2NoZW1hLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NjaGVtYS9yZWFkL3NjaGVtYSc7XG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzcyB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zY2hlbWEvcmVhZC9zY2hlbWEtY3NzLWNsYXNzJztcbmltcG9ydCB7IGdsb2JhbFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2dsb2JhbC1zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU2NoZW1hQ29sdW1uSGVhZGVyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NjaGVtYS9yZWFkL3NjaGVtYS1jb2x1bW4taGVhZGVyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxTY2hlbWFSZWFkTW9kZWxTZXJ2aWNlIGV4dGVuZHMgU2NoZW1hUmVhZE1vZGVsU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHNjaGVtYVJlcG9zaXRvcnk6IFNjaGVtYVJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcihzY2hlbWFSZXBvc2l0b3J5KTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblNjaGVtYSgpOiBPYnNlcnZhYmxlPFNjaGVtYT4ge1xuXHRcdHJldHVybiBzdXBlci5vblNjaGVtYSh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblNpbmdsZVNjaGVtYSgpOiBPYnNlcnZhYmxlPFNjaGVtYT4ge1xuXHRcdHJldHVybiBzdXBlci5vblNpbmdsZVNjaGVtYSh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvbkhlaWdodCgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiBzdXBlci5vbkhlaWdodCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvbkNvbnRhaW5lckhlaWdodCgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiBzdXBlci5vbkNvbnRhaW5lckhlaWdodCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvbkNzc0NsYXNzZXMoKTogT2JzZXJ2YWJsZTxTY2hlbWFDc3NDbGFzcz4ge1xuXHRcdHJldHVybiBzdXBlci5vbkNzc0NsYXNzZXModGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25Db2x1bW5IZWFkZXIoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPFNjaGVtYUNvbHVtbkhlYWRlcj4ge1xuXHRcdHJldHVybiBzdXBlci5vbkNvbHVtbkhlYWRlcih0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=