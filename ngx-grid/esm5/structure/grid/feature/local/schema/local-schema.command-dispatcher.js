/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { SchemaDispatcher } from '../../../../../schema/core/domain/schema.dispatcher';
import { SchemaReadModelRootId } from '../../../../../schema/core/api/schema.read-model-root-id';
import { SchemaTheme } from '../../../../../schema/core/api/theme/schema-theme';
import { StructureCommandInvoker } from '../../../../core/api/structure.command-invoker';
import { SchemaDomainCommandInvoker } from '../../../../../schema/core/domain/schema.domain-command-invoker';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureId } from '../../../../core/domain/structure.id';
import { RowColoring } from '../../../../../schema/core/api/row-coloring/row-coloring';
import { FabricModalThemeService } from '@generic-ui/fabric';
var LocalSchemaCommandDispatcher = /** @class */ (function (_super) {
    tslib_1.__extends(LocalSchemaCommandDispatcher, _super);
    function LocalSchemaCommandDispatcher(schemaReadModelRootId, structureId, structureCommandService, schemaDispatcher, fabricModalThemeService) {
        var _this = _super.call(this, schemaDispatcher, structureCommandService, fabricModalThemeService) || this;
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
        { type: StructureCommandInvoker },
        { type: SchemaDispatcher },
        { type: FabricModalThemeService }
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
}(SchemaDomainCommandInvoker));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc2NoZW1hLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9sb2NhbC9zY2hlbWEvbG9jYWwtc2NoZW1hLmNvbW1hbmQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDdkYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDakcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBRTdHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRzdEO0lBQ2tELHdEQUEwQjtJQUUzRSxzQ0FBNkIscUJBQTRDLEVBQ3JELFdBQXdCLEVBQ3pDLHVCQUFnRCxFQUNoRCxnQkFBa0MsRUFDbEMsdUJBQWdEO1FBSm5ELFlBS0Msa0JBQU0sZ0JBQWdCLEVBQUUsdUJBQXVCLEVBQUUsdUJBQXVCLENBQUMsU0FDekU7UUFONEIsMkJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUNyRCxpQkFBVyxHQUFYLFdBQVcsQ0FBYTs7SUFLNUMsQ0FBQzs7OztJQUdELDZDQUFNOzs7SUFBTjtRQUNDLGlCQUFNLE1BQU0sWUFBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUdELCtDQUFROzs7O0lBQVIsVUFBUyxLQUFrQjtRQUMxQixpQkFBTSxRQUFRLFlBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDckUsQ0FBQzs7Ozs7SUFHRCxxREFBYzs7OztJQUFkLFVBQWUsV0FBd0I7UUFDdEMsaUJBQU0sY0FBYyxZQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7OztJQUdELHNEQUFlOzs7O0lBQWYsVUFBZ0IsWUFBcUI7UUFDcEMsaUJBQU0sZUFBZSxZQUFDLFlBQVksRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7OztJQUdELHdEQUFpQjs7OztJQUFqQixVQUFrQixjQUF1QjtRQUN4QyxpQkFBTSxpQkFBaUIsWUFBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDckUsQ0FBQzs7Z0JBbENELFVBQVU7Ozs7Z0JBWEYscUJBQXFCO2dCQU1yQixXQUFXO2dCQUpYLHVCQUF1QjtnQkFIdkIsZ0JBQWdCO2dCQVNoQix1QkFBdUI7O0lBZS9CO1FBREMsUUFBUTs7Ozs4REFHUjtJQUdEO1FBREMsUUFBUTs7OztnRUFHUjtJQUdEO1FBREMsUUFBUTs7OztzRUFHUjtJQUdEO1FBREMsUUFBUTs7Ozt1RUFHUjtJQUdEO1FBREMsUUFBUTs7Ozt5RUFHUjtJQUVGLG1DQUFDO0NBQUEsQUFwQ0QsQ0FDa0QsMEJBQTBCLEdBbUMzRTtTQW5DWSw0QkFBNEI7Ozs7OztJQUU1Qiw2REFBNkQ7Ozs7O0lBQ3RFLG1EQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU2NoZW1hRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2RvbWFpbi9zY2hlbWEuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNjaGVtYURvbWFpbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvZG9tYWluL3NjaGVtYS5kb21haW4tY29tbWFuZC1pbnZva2VyJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvcm93LWNvbG9yaW5nL3Jvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBGYWJyaWNNb2RhbFRoZW1lU2VydmljZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsU2NoZW1hQ29tbWFuZERpc3BhdGNoZXIgZXh0ZW5kcyBTY2hlbWFEb21haW5Db21tYW5kSW52b2tlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzY2hlbWFSZWFkTW9kZWxSb290SWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlcixcblx0XHRcdFx0c2NoZW1hRGlzcGF0Y2hlcjogU2NoZW1hRGlzcGF0Y2hlcixcblx0XHRcdFx0ZmFicmljTW9kYWxUaGVtZVNlcnZpY2U6IEZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoc2NoZW1hRGlzcGF0Y2hlciwgc3RydWN0dXJlQ29tbWFuZFNlcnZpY2UsIGZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRjcmVhdGUoKTogdm9pZCB7XG5cdFx0c3VwZXIuY3JlYXRlKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRUaGVtZSh0aGVtZTogU2NoZW1hVGhlbWUpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRUaGVtZSh0aGVtZSwgdGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldFJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nOiBSb3dDb2xvcmluZyk6IHZvaWQge1xuXHRcdHN1cGVyLnNldFJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nLCB0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0VmVydGljYWxHcmlkKHZlcnRpY2FsR3JpZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHN1cGVyLnNldFZlcnRpY2FsR3JpZCh2ZXJ0aWNhbEdyaWQsIHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRIb3Jpem9udGFsR3JpZChob3Jpem9udGFsR3JpZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHN1cGVyLnNldEhvcml6b250YWxHcmlkKGhvcml6b250YWxHcmlkLCB0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxufVxuIl19