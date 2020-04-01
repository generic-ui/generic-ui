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
     * @return {?}
     */
    LocalSchemaReadModelService.prototype.onSingleTheme = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onSingleTheme.call(this, this.structureId);
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
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalSchemaReadModelService.prototype, "onSingleTheme", null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc2NoZW1hLXJlYWQtbW9kZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9zY2hlbWEvbG9jYWwtc2NoZW1hLXJlYWQtbW9kZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDakYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBR2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBS3hFO0lBQ2lELHVEQUFzQjtJQUV0RSxxQ0FBb0IsV0FBd0IsRUFDekMsZ0JBQWtDO1FBRHJDLFlBRUMsa0JBQU0sZ0JBQWdCLENBQUMsU0FDdkI7UUFIbUIsaUJBQVcsR0FBWCxXQUFXLENBQWE7O0lBRzVDLENBQUM7Ozs7SUFHRCw4Q0FBUTs7O0lBQVI7UUFDQyxPQUFPLGlCQUFNLFFBQVEsWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUdELG9EQUFjOzs7SUFBZDtRQUNDLE9BQU8saUJBQU0sY0FBYyxZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7O0lBR0QsOENBQVE7OztJQUFSO1FBQ0MsT0FBTyxpQkFBTSxRQUFRLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFHRCx1REFBaUI7OztJQUFqQjtRQUNDLE9BQU8saUJBQU0saUJBQWlCLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFHRCxrREFBWTs7O0lBQVo7UUFDQyxPQUFPLGlCQUFNLFlBQVksWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OztJQUdELG1EQUFhOzs7SUFBYjtRQUNDLE9BQU8saUJBQU0sYUFBYSxZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUdELG9EQUFjOzs7O0lBQWQsVUFBZSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUMxRCxPQUFPLGlCQUFNLGNBQWMsWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Z0JBekNELFVBQVU7Ozs7Z0JBVkYsV0FBVztnQkFDWCxnQkFBZ0I7O0lBa0J4QjtRQURDLFFBQVE7OztnREFDRyxVQUFVOytEQUVyQjtJQUdEO1FBREMsUUFBUTs7O2dEQUNTLFVBQVU7cUVBRTNCO0lBR0Q7UUFEQyxRQUFROzs7Z0RBQ0csVUFBVTsrREFFckI7SUFHRDtRQURDLFFBQVE7OztnREFDWSxVQUFVO3dFQUU5QjtJQUdEO1FBREMsUUFBUTs7O2dEQUNPLFVBQVU7bUVBRXpCO0lBR0Q7UUFEQyxRQUFROzs7Z0RBQ1EsVUFBVTtvRUFFMUI7SUFHRDtRQURDLFFBQVE7O2lEQUNtQixXQUFXO2dEQUF1QixVQUFVO3FFQUV2RTtJQUVGLGtDQUFDO0NBQUEsQUEzQ0QsQ0FDaUQsc0JBQXNCLEdBMEN0RTtTQTFDWSwyQkFBMkI7Ozs7OztJQUUzQixrREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3NjaGVtYS9zY2hlbWEtcmVhZC1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBTY2hlbWFSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NjaGVtYS9yZWFkL3NjaGVtYS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcbmltcG9ydCB7IFNjaGVtYSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zY2hlbWEvcmVhZC9zY2hlbWEnO1xuaW1wb3J0IHsgU2NoZW1hQ3NzQ2xhc3MgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc2NoZW1hL3JlYWQvc2NoZW1hLWNzcy1jbGFzcyc7XG5pbXBvcnQgeyBnbG9iYWxTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9nbG9iYWwtc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFNjaGVtYUNvbHVtbkhlYWRlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zY2hlbWEvcmVhZC9zY2hlbWEtY29sdW1uLWhlYWRlcic7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zY2hlbWEvc2NoZW1hLXRoZW1lJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxTY2hlbWFSZWFkTW9kZWxTZXJ2aWNlIGV4dGVuZHMgU2NoZW1hUmVhZE1vZGVsU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHNjaGVtYVJlcG9zaXRvcnk6IFNjaGVtYVJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcihzY2hlbWFSZXBvc2l0b3J5KTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblNjaGVtYSgpOiBPYnNlcnZhYmxlPFNjaGVtYT4ge1xuXHRcdHJldHVybiBzdXBlci5vblNjaGVtYSh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblNpbmdsZVNjaGVtYSgpOiBPYnNlcnZhYmxlPFNjaGVtYT4ge1xuXHRcdHJldHVybiBzdXBlci5vblNpbmdsZVNjaGVtYSh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvbkhlaWdodCgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiBzdXBlci5vbkhlaWdodCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvbkNvbnRhaW5lckhlaWdodCgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiBzdXBlci5vbkNvbnRhaW5lckhlaWdodCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvbkNzc0NsYXNzZXMoKTogT2JzZXJ2YWJsZTxTY2hlbWFDc3NDbGFzcz4ge1xuXHRcdHJldHVybiBzdXBlci5vbkNzc0NsYXNzZXModGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25TaW5nbGVUaGVtZSgpOiBPYnNlcnZhYmxlPFNjaGVtYVRoZW1lPiAge1xuXHRcdHJldHVybiBzdXBlci5vblNpbmdsZVRoZW1lKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uQ29sdW1uSGVhZGVyKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxTY2hlbWFDb2x1bW5IZWFkZXI+IHtcblx0XHRyZXR1cm4gc3VwZXIub25Db2x1bW5IZWFkZXIodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19