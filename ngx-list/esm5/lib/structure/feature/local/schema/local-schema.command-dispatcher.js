/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { SchemaDispatcher } from '../../../../../schema/domain/schema.dispatcher';
import { SchemaReadModelRootId } from '../../../../../schema/domain-api/read/schema.read-model-root-id';
import { SchemaTheme } from '../../../../../schema/domain/theme/schema-theme';
import { SchemaCommandDispatcher } from '../../../../../schema/domain-api/schema.command-dispatcher';
import { StructureCommandDispatcher } from '../../../domain-api/structure.command-dispatcher';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureId } from '../../../domain/structure.id';
import { RowColoring } from '../../../../../schema/domain-api/row-coloring';
var LocalSchemaCommandDispatcher = /** @class */ (function (_super) {
    tslib_1.__extends(LocalSchemaCommandDispatcher, _super);
    function LocalSchemaCommandDispatcher(schemaReadModelRootId, structureId, structureCommandService, schemaDispatcher) {
        var _this = _super.call(this, schemaDispatcher, structureCommandService) || this;
        _this.schemaReadModelRootId = schemaReadModelRootId;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalSchemaCommandDispatcher.prototype.create = /**
     * @return {?}
     */
    function () {
        _super.prototype.create.call(this, this.schemaReadModelRootId);
    };
    /**
     * @param {?} theme
     * @return {?}
     */
    LocalSchemaCommandDispatcher.prototype.setTheme = /**
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        _super.prototype.setTheme.call(this, theme, this.schemaReadModelRootId, this.structureId);
    };
    /**
     * @param {?} rowColoring
     * @return {?}
     */
    LocalSchemaCommandDispatcher.prototype.setRowColoring = /**
     * @param {?} rowColoring
     * @return {?}
     */
    function (rowColoring) {
        _super.prototype.setRowColoring.call(this, rowColoring, this.schemaReadModelRootId);
    };
    /**
     * @param {?} verticalGrid
     * @return {?}
     */
    LocalSchemaCommandDispatcher.prototype.setVerticalGrid = /**
     * @param {?} verticalGrid
     * @return {?}
     */
    function (verticalGrid) {
        _super.prototype.setVerticalGrid.call(this, verticalGrid, this.schemaReadModelRootId);
    };
    /**
     * @param {?} horizontalGrid
     * @return {?}
     */
    LocalSchemaCommandDispatcher.prototype.setHorizontalGrid = /**
     * @param {?} horizontalGrid
     * @return {?}
     */
    function (horizontalGrid) {
        _super.prototype.setHorizontalGrid.call(this, horizontalGrid, this.schemaReadModelRootId);
    };
    LocalSchemaCommandDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalSchemaCommandDispatcher.ctorParameters = function () { return [
        { type: SchemaReadModelRootId },
        { type: StructureId },
        { type: StructureCommandDispatcher },
        { type: SchemaDispatcher }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalSchemaCommandDispatcher.prototype, "create", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalSchemaCommandDispatcher.prototype, "setTheme", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalSchemaCommandDispatcher.prototype, "setRowColoring", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Boolean]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalSchemaCommandDispatcher.prototype, "setVerticalGrid", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Boolean]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalSchemaCommandDispatcher.prototype, "setHorizontalGrid", null);
    return LocalSchemaCommandDispatcher;
}(SchemaCommandDispatcher));
export { LocalSchemaCommandDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSchemaCommandDispatcher.prototype.schemaReadModelRootId;
    /**
     * @type {?}
     * @private
     */
    LocalSchemaCommandDispatcher.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc2NoZW1hLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2xvY2FsL3NjaGVtYS9sb2NhbC1zY2hlbWEuY29tbWFuZC1kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNsRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUN4RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDOUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFFckcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFFOUYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFHNUU7SUFDa0Qsd0RBQXVCO0lBRXhFLHNDQUE2QixxQkFBNEMsRUFDckQsV0FBd0IsRUFDekMsdUJBQW1ELEVBQ25ELGdCQUFrQztRQUhyQyxZQUlDLGtCQUFNLGdCQUFnQixFQUFFLHVCQUF1QixDQUFDLFNBQ2hEO1FBTDRCLDJCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDckQsaUJBQVcsR0FBWCxXQUFXLENBQWE7O0lBSTVDLENBQUM7Ozs7SUFHRCw2Q0FBTTs7O0lBQU47UUFDQyxpQkFBTSxNQUFNLFlBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFHRCwrQ0FBUTs7OztJQUFSLFVBQVMsS0FBa0I7UUFDMUIsaUJBQU0sUUFBUSxZQUFDLEtBQUssRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7O0lBR0QscURBQWM7Ozs7SUFBZCxVQUFlLFdBQXdCO1FBQ3RDLGlCQUFNLGNBQWMsWUFBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Ozs7SUFHRCxzREFBZTs7OztJQUFmLFVBQWdCLFlBQXFCO1FBQ3BDLGlCQUFNLGVBQWUsWUFBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7SUFHRCx3REFBaUI7Ozs7SUFBakIsVUFBa0IsY0FBdUI7UUFDeEMsaUJBQU0saUJBQWlCLFlBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7O2dCQWpDRCxVQUFVOzs7O2dCQVhGLHFCQUFxQjtnQkFPckIsV0FBVztnQkFIWCwwQkFBMEI7Z0JBTDFCLGdCQUFnQjs7SUF1QnhCO1FBREMsUUFBUTs7Ozs4REFHUjtJQUdEO1FBREMsUUFBUTs7OztnRUFHUjtJQUdEO1FBREMsUUFBUTs7OztzRUFHUjtJQUdEO1FBREMsUUFBUTs7Ozt1RUFHUjtJQUdEO1FBREMsUUFBUTs7Ozt5RUFHUjtJQUVGLG1DQUFDO0NBQUEsQUFuQ0QsQ0FDa0QsdUJBQXVCLEdBa0N4RTtTQWxDWSw0QkFBNEI7Ozs7OztJQUU1Qiw2REFBNkQ7Ozs7O0lBQ3RFLG1EQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU2NoZW1hRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4vc2NoZW1hLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi1hcGkvcmVhZC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluLWFwaS9zY2hlbWEuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi9jb2xvcmluZy9zY2hlbWEtcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9zdHJ1Y3R1cmUuY29tbWFuZC1kaXNwYXRjaGVyJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi1hcGkvcm93LWNvbG9yaW5nJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxTY2hlbWFDb21tYW5kRGlzcGF0Y2hlciBleHRlbmRzIFNjaGVtYUNvbW1hbmREaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJlYWRNb2RlbFJvb3RJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0c3RydWN0dXJlQ29tbWFuZFNlcnZpY2U6IFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRzY2hlbWFEaXNwYXRjaGVyOiBTY2hlbWFEaXNwYXRjaGVyKSB7XG5cdFx0c3VwZXIoc2NoZW1hRGlzcGF0Y2hlciwgc3RydWN0dXJlQ29tbWFuZFNlcnZpY2UpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdGNyZWF0ZSgpOiB2b2lkIHtcblx0XHRzdXBlci5jcmVhdGUodGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldFRoZW1lKHRoZW1lOiBTY2hlbWFUaGVtZSk6IHZvaWQge1xuXHRcdHN1cGVyLnNldFRoZW1lKHRoZW1lLCB0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0Um93Q29sb3Jpbmcocm93Q29sb3Jpbmc6IFJvd0NvbG9yaW5nKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0Um93Q29sb3Jpbmcocm93Q29sb3JpbmcsIHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRWZXJ0aWNhbEdyaWQodmVydGljYWxHcmlkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0VmVydGljYWxHcmlkKHZlcnRpY2FsR3JpZCwgdGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldEhvcml6b250YWxHcmlkKGhvcml6b250YWxHcmlkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0SG9yaXpvbnRhbEdyaWQoaG9yaXpvbnRhbEdyaWQsIHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG59XG4iXX0=