/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SchemaQueryService } from '../../../app/schema/schema-query.service';
import { StructureId } from '../../../domain/structure-id';
import { SchemaRepository } from '../../../domain/schema/query/schema-repository';
import { Override } from '../../../../../common/cdk/decorators';
import { globalStructureId } from '../../../domain/global-structure-id';
var LocalSchemaQueryService = /** @class */ (function (_super) {
    tslib_1.__extends(LocalSchemaQueryService, _super);
    function LocalSchemaQueryService(structureId, schemaRepository) {
        var _this = _super.call(this, schemaRepository) || this;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalSchemaQueryService.prototype.select = /**
     * @return {?}
     */
    function () {
        return _super.prototype.select.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalSchemaQueryService.prototype.selectHeight = /**
     * @return {?}
     */
    function () {
        return _super.prototype.selectHeight.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalSchemaQueryService.prototype.selectContainerHeight = /**
     * @return {?}
     */
    function () {
        return _super.prototype.selectContainerHeight.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalSchemaQueryService.prototype.selectOne = /**
     * @return {?}
     */
    function () {
        return _super.prototype.selectOne.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalSchemaQueryService.prototype.selectCssClasses = /**
     * @return {?}
     */
    function () {
        return _super.prototype.selectCssClasses.call(this, this.structureId);
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    LocalSchemaQueryService.prototype.selectColumnHeader = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        return _super.prototype.selectColumnHeader.call(this, this.structureId);
    };
    LocalSchemaQueryService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalSchemaQueryService.ctorParameters = function () { return [
        { type: StructureId },
        { type: SchemaRepository }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalSchemaQueryService.prototype, "select", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalSchemaQueryService.prototype, "selectHeight", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalSchemaQueryService.prototype, "selectContainerHeight", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalSchemaQueryService.prototype, "selectOne", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalSchemaQueryService.prototype, "selectCssClasses", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [StructureId]),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalSchemaQueryService.prototype, "selectColumnHeader", null);
    return LocalSchemaQueryService;
}(SchemaQueryService));
export { LocalSchemaQueryService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSchemaQueryService.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc2NoZW1hLXF1ZXJ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvbG9jYWwvc2NoZW1hL2xvY2FsLXNjaGVtYS1xdWVyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNsRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFHaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFLeEU7SUFDNkMsbURBQWtCO0lBRTlELGlDQUFvQixXQUF3QixFQUN6QyxnQkFBa0M7UUFEckMsWUFFQyxrQkFBTSxnQkFBZ0IsQ0FBQyxTQUN2QjtRQUhtQixpQkFBVyxHQUFYLFdBQVcsQ0FBYTs7SUFHNUMsQ0FBQzs7OztJQUdELHdDQUFNOzs7SUFBTjtRQUNDLE9BQU8saUJBQU0sTUFBTSxZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBR0QsOENBQVk7OztJQUFaO1FBQ0MsT0FBTyxpQkFBTSxZQUFZLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFHRCx1REFBcUI7OztJQUFyQjtRQUNDLE9BQU8saUJBQU0scUJBQXFCLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7SUFHRCwyQ0FBUzs7O0lBQVQ7UUFDQyxPQUFPLGlCQUFNLFNBQVMsWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7OztJQUdELGtEQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTyxpQkFBTSxnQkFBZ0IsWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFHRCxvREFBa0I7Ozs7SUFBbEIsVUFBbUIsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDOUQsT0FBTyxpQkFBTSxrQkFBa0IsWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Z0JBcENELFVBQVU7Ozs7Z0JBVkYsV0FBVztnQkFDWCxnQkFBZ0I7O0lBa0J4QjtRQURDLFFBQVE7OztnREFDQyxVQUFVO3lEQUVuQjtJQUdEO1FBREMsUUFBUTs7O2dEQUNPLFVBQVU7K0RBRXpCO0lBR0Q7UUFEQyxRQUFROzs7Z0RBQ2dCLFVBQVU7d0VBRWxDO0lBR0Q7UUFEQyxRQUFROzs7Z0RBQ0ksVUFBVTs0REFFdEI7SUFHRDtRQURDLFFBQVE7OztnREFDVyxVQUFVO21FQUU3QjtJQUdEO1FBREMsUUFBUTs7aURBQ3VCLFdBQVc7Z0RBQXVCLFVBQVU7cUVBRTNFO0lBRUYsOEJBQUM7Q0FBQSxBQXRDRCxDQUM2QyxrQkFBa0IsR0FxQzlEO1NBckNZLHVCQUF1Qjs7Ozs7O0lBRXZCLDhDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNjaGVtYVF1ZXJ5U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2FwcC9zY2hlbWEvc2NoZW1hLXF1ZXJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFNjaGVtYVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc2NoZW1hL3F1ZXJ5L3NjaGVtYS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcbmltcG9ydCB7IFNjaGVtYSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zY2hlbWEvcXVlcnkvc2NoZW1hJztcbmltcG9ydCB7IFNjaGVtYUNzc0NsYXNzIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NjaGVtYS9xdWVyeS9zY2hlbWEtY3NzLWNsYXNzJztcbmltcG9ydCB7IGdsb2JhbFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2dsb2JhbC1zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU2NoZW1hQ29sdW1uSGVhZGVyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NjaGVtYS9xdWVyeS9zY2hlbWEtY29sdW1uLWhlYWRlcic7XG5cblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxTY2hlbWFRdWVyeVNlcnZpY2UgZXh0ZW5kcyBTY2hlbWFRdWVyeVNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRzY2hlbWFSZXBvc2l0b3J5OiBTY2hlbWFSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoc2NoZW1hUmVwb3NpdG9yeSk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2VsZWN0KCk6IE9ic2VydmFibGU8U2NoZW1hPiB7XG5cdFx0cmV0dXJuIHN1cGVyLnNlbGVjdCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZWxlY3RIZWlnaHQoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gc3VwZXIuc2VsZWN0SGVpZ2h0KHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNlbGVjdENvbnRhaW5lckhlaWdodCgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiBzdXBlci5zZWxlY3RDb250YWluZXJIZWlnaHQodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2VsZWN0T25lKCk6IE9ic2VydmFibGU8U2NoZW1hPiB7XG5cdFx0cmV0dXJuIHN1cGVyLnNlbGVjdE9uZSh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZWxlY3RDc3NDbGFzc2VzKCk6IE9ic2VydmFibGU8U2NoZW1hQ3NzQ2xhc3M+IHtcblx0XHRyZXR1cm4gc3VwZXIuc2VsZWN0Q3NzQ2xhc3Nlcyh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZWxlY3RDb2x1bW5IZWFkZXIoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPFNjaGVtYUNvbHVtbkhlYWRlcj4ge1xuXHRcdHJldHVybiBzdXBlci5zZWxlY3RDb2x1bW5IZWFkZXIodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19