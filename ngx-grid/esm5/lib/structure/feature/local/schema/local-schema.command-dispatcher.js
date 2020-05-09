/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { SchemaDispatcher } from '../../../../../schema/domain/schema.dispatcher';
import { SchemaReadModelRootId } from '../../../../../schema/feature-api/read/schema.read-model-root-id';
import { SchemaTheme } from '../../../../../schema/domain/theme/schema-theme';
import { SchemaCommandDispatcher } from '../../../../../schema/feature-api/schema.command-dispatcher';
import { StructureCommandDispatcher } from '../../../feature-api/structure.command-dispatcher';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureId } from '../../../domain/structure.id';
import { RowColoring } from '../../../../../schema/feature-api/row-coloring';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc2NoZW1hLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2xvY2FsL3NjaGVtYS9sb2NhbC1zY2hlbWEuY29tbWFuZC1kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNsRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUN6RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDOUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFFdEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFFL0YsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFHN0U7SUFDa0Qsd0RBQXVCO0lBRXhFLHNDQUE2QixxQkFBNEMsRUFDckQsV0FBd0IsRUFDekMsdUJBQW1ELEVBQ25ELGdCQUFrQztRQUhyQyxZQUlDLGtCQUFNLGdCQUFnQixFQUFFLHVCQUF1QixDQUFDLFNBQ2hEO1FBTDRCLDJCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDckQsaUJBQVcsR0FBWCxXQUFXLENBQWE7O0lBSTVDLENBQUM7Ozs7SUFHRCw2Q0FBTTs7O0lBQU47UUFDQyxpQkFBTSxNQUFNLFlBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFHRCwrQ0FBUTs7OztJQUFSLFVBQVMsS0FBa0I7UUFDMUIsaUJBQU0sUUFBUSxZQUFDLEtBQUssRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7O0lBR0QscURBQWM7Ozs7SUFBZCxVQUFlLFdBQXdCO1FBQ3RDLGlCQUFNLGNBQWMsWUFBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Ozs7SUFHRCxzREFBZTs7OztJQUFmLFVBQWdCLFlBQXFCO1FBQ3BDLGlCQUFNLGVBQWUsWUFBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7SUFHRCx3REFBaUI7Ozs7SUFBakIsVUFBa0IsY0FBdUI7UUFDeEMsaUJBQU0saUJBQWlCLFlBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7O2dCQWpDRCxVQUFVOzs7O2dCQVhGLHFCQUFxQjtnQkFPckIsV0FBVztnQkFIWCwwQkFBMEI7Z0JBTDFCLGdCQUFnQjs7SUF1QnhCO1FBREMsUUFBUTs7Ozs4REFHUjtJQUdEO1FBREMsUUFBUTs7OztnRUFHUjtJQUdEO1FBREMsUUFBUTs7OztzRUFHUjtJQUdEO1FBREMsUUFBUTs7Ozt1RUFHUjtJQUdEO1FBREMsUUFBUTs7Ozt5RUFHUjtJQUVGLG1DQUFDO0NBQUEsQUFuQ0QsQ0FDa0QsdUJBQXVCLEdBa0N4RTtTQWxDWSw0QkFBNEI7Ozs7OztJQUU1Qiw2REFBNkQ7Ozs7O0lBQ3RFLG1EQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU2NoZW1hRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4vc2NoZW1hLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2ZlYXR1cmUtYXBpL3JlYWQvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2ZlYXR1cmUtYXBpL3NjaGVtYS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluL2NvbG9yaW5nL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlLWFwaS9zdHJ1Y3R1cmUuY29tbWFuZC1kaXNwYXRjaGVyJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2ZlYXR1cmUtYXBpL3Jvdy1jb2xvcmluZyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsU2NoZW1hQ29tbWFuZERpc3BhdGNoZXIgZXh0ZW5kcyBTY2hlbWFDb21tYW5kRGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzY2hlbWFSZWFkTW9kZWxSb290SWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0c2NoZW1hRGlzcGF0Y2hlcjogU2NoZW1hRGlzcGF0Y2hlcikge1xuXHRcdHN1cGVyKHNjaGVtYURpc3BhdGNoZXIsIHN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRjcmVhdGUoKTogdm9pZCB7XG5cdFx0c3VwZXIuY3JlYXRlKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRUaGVtZSh0aGVtZTogU2NoZW1hVGhlbWUpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRUaGVtZSh0aGVtZSwgdGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldFJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nOiBSb3dDb2xvcmluZyk6IHZvaWQge1xuXHRcdHN1cGVyLnNldFJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nLCB0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0VmVydGljYWxHcmlkKHZlcnRpY2FsR3JpZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHN1cGVyLnNldFZlcnRpY2FsR3JpZCh2ZXJ0aWNhbEdyaWQsIHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRIb3Jpem9udGFsR3JpZChob3Jpem9udGFsR3JpZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHN1cGVyLnNldEhvcml6b250YWxHcmlkKGhvcml6b250YWxHcmlkLCB0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxufVxuIl19