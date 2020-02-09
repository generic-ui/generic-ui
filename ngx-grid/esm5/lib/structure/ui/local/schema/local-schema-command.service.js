/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { SchemaCommandService } from '../../../ui-api/schema/schema-command.service';
import { StructureId } from '../../../domain/structure-id';
import { SchemaReadModelService } from '../../../ui-api/schema/schema-read-model.service';
import { SchemaDispatcher } from '../../../domain/schema/command/schema.dispatcher';
import { Override } from '../../../../../common/cdk/decorators';
import { globalStructureId } from '../../../domain/global-structure-id';
import { SchemaTheme } from '../../../domain/schema/schema-theme';
import { SchemaRowColoring } from '../../../domain/schema/schema-row-coloring';
var LocalSchemaCommandService = /** @class */ (function (_super) {
    tslib_1.__extends(LocalSchemaCommandService, _super);
    function LocalSchemaCommandService(structureId, schemaQueryService, schemaDispatcher) {
        var _this = _super.call(this, schemaDispatcher, schemaQueryService) || this;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalSchemaCommandService.prototype.setDefaultSchema = /**
     * @return {?}
     */
    function () {
        _super.prototype.setSchema.call(this, Number.MAX_SAFE_INTEGER, this.structureId);
    };
    /**
     * @param {?} height
     * @param {?=} structureId
     * @return {?}
     */
    LocalSchemaCommandService.prototype.setSchema = /**
     * @param {?} height
     * @param {?=} structureId
     * @return {?}
     */
    function (height, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        _super.prototype.setSchema.call(this, height, this.structureId);
    };
    /**
     * @param {?} height
     * @return {?}
     */
    LocalSchemaCommandService.prototype.setHeight = /**
     * @param {?} height
     * @return {?}
     */
    function (height) {
        _super.prototype.setHeight.call(this, height, this.structureId);
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    LocalSchemaCommandService.prototype.changeVerticalGrid = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        _super.prototype.changeVerticalGrid.call(this, enabled, this.structureId);
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    LocalSchemaCommandService.prototype.changeHorizontalGrid = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        _super.prototype.changeHorizontalGrid.call(this, enabled, this.structureId);
    };
    /**
     * @param {?} theme
     * @return {?}
     */
    LocalSchemaCommandService.prototype.setTheme = /**
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        _super.prototype.setTheme.call(this, theme, this.structureId);
    };
    /**
     * @param {?} coloring
     * @param {?=} structureId
     * @return {?}
     */
    LocalSchemaCommandService.prototype.setRowColoring = /**
     * @param {?} coloring
     * @param {?=} structureId
     * @return {?}
     */
    function (coloring, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        _super.prototype.setRowColoring.call(this, coloring, this.structureId);
    };
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    LocalSchemaCommandService.prototype.changeTopHeader = /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        _super.prototype.changeTopHeader.call(this, enabled, this.structureId);
    };
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    LocalSchemaCommandService.prototype.changeBottomHeader = /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        _super.prototype.changeBottomHeader.call(this, enabled, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalSchemaCommandService.prototype.toggleVerticalGrid = /**
     * @return {?}
     */
    function () {
        _super.prototype.toggleVerticalGrid.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalSchemaCommandService.prototype.toggleHorizontalGrid = /**
     * @return {?}
     */
    function () {
        _super.prototype.toggleHorizontalGrid.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalSchemaCommandService.prototype.toggleTopHeader = /**
     * @return {?}
     */
    function () {
        _super.prototype.toggleTopHeader.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalSchemaCommandService.prototype.toggleBottomHeader = /**
     * @return {?}
     */
    function () {
        _super.prototype.toggleBottomHeader.call(this, this.structureId);
    };
    LocalSchemaCommandService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalSchemaCommandService.ctorParameters = function () { return [
        { type: StructureId },
        { type: SchemaReadModelService },
        { type: SchemaDispatcher }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number, StructureId]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalSchemaCommandService.prototype, "setSchema", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalSchemaCommandService.prototype, "setHeight", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Boolean]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalSchemaCommandService.prototype, "changeVerticalGrid", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Boolean]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalSchemaCommandService.prototype, "changeHorizontalGrid", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalSchemaCommandService.prototype, "setTheme", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number, StructureId]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalSchemaCommandService.prototype, "setRowColoring", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Boolean, StructureId]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalSchemaCommandService.prototype, "changeTopHeader", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Boolean, StructureId]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalSchemaCommandService.prototype, "changeBottomHeader", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalSchemaCommandService.prototype, "toggleVerticalGrid", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalSchemaCommandService.prototype, "toggleHorizontalGrid", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalSchemaCommandService.prototype, "toggleTopHeader", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalSchemaCommandService.prototype, "toggleBottomHeader", null);
    return LocalSchemaCommandService;
}(SchemaCommandService));
export { LocalSchemaCommandService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSchemaCommandService.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc2NoZW1hLWNvbW1hbmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9zY2hlbWEvbG9jYWwtc2NoZW1hLWNvbW1hbmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDckYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFHL0U7SUFDK0MscURBQW9CO0lBRWxFLG1DQUFvQixXQUF3QixFQUN6QyxrQkFBMEMsRUFDMUMsZ0JBQWtDO1FBRnJDLFlBR0Msa0JBQU0sZ0JBQWdCLEVBQUUsa0JBQWtCLENBQUMsU0FDM0M7UUFKbUIsaUJBQVcsR0FBWCxXQUFXLENBQWE7O0lBSTVDLENBQUM7Ozs7SUFFRCxvREFBZ0I7OztJQUFoQjtRQUNDLGlCQUFNLFNBQVMsWUFBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7OztJQUdELDZDQUFTOzs7OztJQUFULFVBQVUsTUFBYyxFQUFFLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQ3JFLGlCQUFNLFNBQVMsWUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBR0QsNkNBQVM7Ozs7SUFBVCxVQUFVLE1BQWM7UUFDdkIsaUJBQU0sU0FBUyxZQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFHRCxzREFBa0I7Ozs7SUFBbEIsVUFBbUIsT0FBZ0I7UUFDbEMsaUJBQU0sa0JBQWtCLFlBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7OztJQUdELHdEQUFvQjs7OztJQUFwQixVQUFxQixPQUFnQjtRQUNwQyxpQkFBTSxvQkFBb0IsWUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7O0lBR0QsNENBQVE7Ozs7SUFBUixVQUFTLEtBQWtCO1FBQzFCLGlCQUFNLFFBQVEsWUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7OztJQUdELGtEQUFjOzs7OztJQUFkLFVBQWUsUUFBMkIsRUFBRSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUN2RixpQkFBTSxjQUFjLFlBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7SUFHRCxtREFBZTs7Ozs7SUFBZixVQUFnQixPQUFnQixFQUFFLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQzdFLGlCQUFNLGVBQWUsWUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7OztJQUdELHNEQUFrQjs7Ozs7SUFBbEIsVUFBbUIsT0FBZ0IsRUFBRSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUNoRixpQkFBTSxrQkFBa0IsWUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7SUFHRCxzREFBa0I7OztJQUFsQjtRQUNDLGlCQUFNLGtCQUFrQixZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBR0Qsd0RBQW9COzs7SUFBcEI7UUFDQyxpQkFBTSxvQkFBb0IsWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7OztJQUdELG1EQUFlOzs7SUFBZjtRQUNDLGlCQUFNLGVBQWUsWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUdELHNEQUFrQjs7O0lBQWxCO1FBQ0MsaUJBQU0sa0JBQWtCLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7O2dCQXZFRCxVQUFVOzs7O2dCQVRGLFdBQVc7Z0JBQ1gsc0JBQXNCO2dCQUN0QixnQkFBZ0I7O0lBcUJ4QjtRQURDLFFBQVE7O3lEQUM4QixXQUFXOzs4REFFakQ7SUFHRDtRQURDLFFBQVE7Ozs7OERBR1I7SUFHRDtRQURDLFFBQVE7Ozs7dUVBR1I7SUFHRDtRQURDLFFBQVE7Ozs7eUVBR1I7SUFHRDtRQURDLFFBQVE7Ozs7NkRBR1I7SUFHRDtRQURDLFFBQVE7O3lEQUNnRCxXQUFXOzttRUFFbkU7SUFHRDtRQURDLFFBQVE7OzBEQUNzQyxXQUFXOztvRUFFekQ7SUFHRDtRQURDLFFBQVE7OzBEQUN5QyxXQUFXOzt1RUFFNUQ7SUFHRDtRQURDLFFBQVE7Ozs7dUVBR1I7SUFHRDtRQURDLFFBQVE7Ozs7eUVBR1I7SUFHRDtRQURDLFFBQVE7Ozs7b0VBR1I7SUFHRDtRQURDLFFBQVE7Ozs7dUVBR1I7SUFFRixnQ0FBQztDQUFBLEFBekVELENBQytDLG9CQUFvQixHQXdFbEU7U0F4RVkseUJBQXlCOzs7Ozs7SUFFekIsZ0RBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2NoZW1hQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc2NoZW1hL3NjaGVtYS1jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc2NoZW1hL3NjaGVtYS1yZWFkLW1vZGVsLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2NoZW1hRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zY2hlbWEvY29tbWFuZC9zY2hlbWEuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBnbG9iYWxTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9nbG9iYWwtc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NjaGVtYS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc2NoZW1hL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbFNjaGVtYUNvbW1hbmRTZXJ2aWNlIGV4dGVuZHMgU2NoZW1hQ29tbWFuZFNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRzY2hlbWFRdWVyeVNlcnZpY2U6IFNjaGVtYVJlYWRNb2RlbFNlcnZpY2UsXG5cdFx0XHRcdHNjaGVtYURpc3BhdGNoZXI6IFNjaGVtYURpc3BhdGNoZXIpIHtcblx0XHRzdXBlcihzY2hlbWFEaXNwYXRjaGVyLCBzY2hlbWFRdWVyeVNlcnZpY2UpO1xuXHR9XG5cblx0c2V0RGVmYXVsdFNjaGVtYSgpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRTY2hlbWEoTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldFNjaGVtYShoZWlnaHQ6IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRTY2hlbWEoaGVpZ2h0LCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRIZWlnaHQoaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRIZWlnaHQoaGVpZ2h0LCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRjaGFuZ2VWZXJ0aWNhbEdyaWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHN1cGVyLmNoYW5nZVZlcnRpY2FsR3JpZChlbmFibGVkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRjaGFuZ2VIb3Jpem9udGFsR3JpZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0c3VwZXIuY2hhbmdlSG9yaXpvbnRhbEdyaWQoZW5hYmxlZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0VGhlbWUodGhlbWU6IFNjaGVtYVRoZW1lKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0VGhlbWUodGhlbWUsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldFJvd0NvbG9yaW5nKGNvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRSb3dDb2xvcmluZyhjb2xvcmluZywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0Y2hhbmdlVG9wSGVhZGVyKGVuYWJsZWQ6IGJvb2xlYW4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0c3VwZXIuY2hhbmdlVG9wSGVhZGVyKGVuYWJsZWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdGNoYW5nZUJvdHRvbUhlYWRlcihlbmFibGVkOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHN1cGVyLmNoYW5nZUJvdHRvbUhlYWRlcihlbmFibGVkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHR0b2dnbGVWZXJ0aWNhbEdyaWQoKTogdm9pZCB7XG5cdFx0c3VwZXIudG9nZ2xlVmVydGljYWxHcmlkKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHRvZ2dsZUhvcml6b250YWxHcmlkKCk6IHZvaWQge1xuXHRcdHN1cGVyLnRvZ2dsZUhvcml6b250YWxHcmlkKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHRvZ2dsZVRvcEhlYWRlcigpOiB2b2lkIHtcblx0XHRzdXBlci50b2dnbGVUb3BIZWFkZXIodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0dG9nZ2xlQm90dG9tSGVhZGVyKCk6IHZvaWQge1xuXHRcdHN1cGVyLnRvZ2dsZUJvdHRvbUhlYWRlcih0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=