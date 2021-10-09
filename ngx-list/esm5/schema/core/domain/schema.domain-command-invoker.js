/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SchemaDispatcher } from './schema.dispatcher';
import { StructureCommandInvoker } from '../../../structure/core/api/structure.command-invoker';
import { FabricModalThemeService, Theme } from '@generic-ui/fabric';
import { SchemaTheme } from '../api/theme/schema-theme';
import { RowColoring } from '../api/row-coloring/row-coloring';
import { SchemaRowColoring } from '../api/row-coloring/schema-row-coloring';
import { Injectable } from '@angular/core';
import { SchemaCommandInvoker } from '../api/schema.command-invoker';
var SchemaDomainCommandInvoker = /** @class */ (function (_super) {
    tslib_1.__extends(SchemaDomainCommandInvoker, _super);
    function SchemaDomainCommandInvoker(schemaDispatcher, structureCommandService, fabricModalThemeService) {
        var _this = _super.call(this) || this;
        _this.schemaDispatcher = schemaDispatcher;
        _this.structureCommandService = structureCommandService;
        _this.fabricModalThemeService = fabricModalThemeService;
        return _this;
    }
    /**
     * @param {?} schemaId
     * @return {?}
     */
    SchemaDomainCommandInvoker.prototype.create = /**
     * @param {?} schemaId
     * @return {?}
     */
    function (schemaId) {
        this.schemaDispatcher.create(schemaId.toAggregateId());
    };
    /**
     * @param {?} theme
     * @param {?} schemaId
     * @param {?} structureId
     * @return {?}
     */
    SchemaDomainCommandInvoker.prototype.setTheme = /**
     * @param {?} theme
     * @param {?} schemaId
     * @param {?} structureId
     * @return {?}
     */
    function (theme, schemaId, structureId) {
        this.schemaDispatcher.setTheme(theme, schemaId.toAggregateId());
        this.fabricModalThemeService.changeTheme(this.toFabricTheme(theme)); // TODO github #2162
        this.structureCommandService.setRowHeightBasedOnTheme(theme, structureId);
    };
    /**
     * @param {?} rowColoring
     * @param {?} schemaId
     * @return {?}
     */
    SchemaDomainCommandInvoker.prototype.setRowColoring = /**
     * @param {?} rowColoring
     * @param {?} schemaId
     * @return {?}
     */
    function (rowColoring, schemaId) {
        /** @type {?} */
        var schemaRowColoring = this.toSchemaRowColoring(rowColoring);
        this.schemaDispatcher.setRowColoring(schemaRowColoring, schemaId.toAggregateId());
    };
    /**
     * @param {?} verticalGrid
     * @param {?} schemaId
     * @return {?}
     */
    SchemaDomainCommandInvoker.prototype.setVerticalGrid = /**
     * @param {?} verticalGrid
     * @param {?} schemaId
     * @return {?}
     */
    function (verticalGrid, schemaId) {
        this.schemaDispatcher.setVerticalGrid(verticalGrid, schemaId.toAggregateId());
    };
    /**
     * @param {?} horizontalGrid
     * @param {?} schemaId
     * @return {?}
     */
    SchemaDomainCommandInvoker.prototype.setHorizontalGrid = /**
     * @param {?} horizontalGrid
     * @param {?} schemaId
     * @return {?}
     */
    function (horizontalGrid, schemaId) {
        this.schemaDispatcher.setHorizontalGrid(horizontalGrid, schemaId.toAggregateId());
    };
    /**
     * @private
     * @param {?} coloring
     * @return {?}
     */
    SchemaDomainCommandInvoker.prototype.toSchemaRowColoring = /**
     * @private
     * @param {?} coloring
     * @return {?}
     */
    function (coloring) {
        switch (coloring) {
            case RowColoring.NONE:
                return SchemaRowColoring.NONE;
            case RowColoring.ODD:
                return SchemaRowColoring.ODD;
            case RowColoring.EVEN:
                return SchemaRowColoring.EVEN;
            default:
                break;
        }
    };
    /**
     * @private
     * @param {?} schemaTheme
     * @return {?}
     */
    SchemaDomainCommandInvoker.prototype.toFabricTheme = /**
     * @private
     * @param {?} schemaTheme
     * @return {?}
     */
    function (schemaTheme) {
        switch (schemaTheme) {
            case SchemaTheme.DARK: {
                return Theme.DARK;
            }
            case SchemaTheme.FABRIC: {
                return Theme.FABRIC;
            }
            case SchemaTheme.GENERIC: {
                return Theme.GENERIC;
            }
            case SchemaTheme.LIGHT: {
                return Theme.LIGHT;
            }
            case SchemaTheme.MATERIAL: {
                return Theme.MATERIAL;
            }
            default:
                break;
        }
    };
    SchemaDomainCommandInvoker.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SchemaDomainCommandInvoker.ctorParameters = function () { return [
        { type: SchemaDispatcher },
        { type: StructureCommandInvoker },
        { type: FabricModalThemeService }
    ]; };
    return SchemaDomainCommandInvoker;
}(SchemaCommandInvoker));
export { SchemaDomainCommandInvoker };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaDomainCommandInvoker.prototype.schemaDispatcher;
    /**
     * @type {?}
     * @private
     */
    SchemaDomainCommandInvoker.prototype.structureCommandService;
    /**
     * @type {?}
     * @private
     */
    SchemaDomainCommandInvoker.prototype.fabricModalThemeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmRvbWFpbi1jb21tYW5kLWludm9rZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInNjaGVtYS9jb3JlL2RvbWFpbi9zY2hlbWEuZG9tYWluLWNvbW1hbmQtaW52b2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFHckU7SUFDZ0Qsc0RBQW9CO0lBRW5FLG9DQUE2QixnQkFBa0MsRUFDM0MsdUJBQWdELEVBQ2hELHVCQUFnRDtRQUZwRSxZQUdDLGlCQUFPLFNBQ1A7UUFKNEIsc0JBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMzQyw2QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELDZCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7O0lBRXBFLENBQUM7Ozs7O0lBRUQsMkNBQU07Ozs7SUFBTixVQUFPLFFBQStCO1FBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7OztJQUVELDZDQUFROzs7Ozs7SUFBUixVQUFTLEtBQWtCLEVBQ3hCLFFBQStCLEVBQy9CLFdBQXdCO1FBRTFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CO1FBQ3pGLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDM0UsQ0FBQzs7Ozs7O0lBRUQsbURBQWM7Ozs7O0lBQWQsVUFBZSxXQUF3QixFQUFFLFFBQStCOztZQUVqRSxpQkFBaUIsR0FBc0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQztRQUVsRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ25GLENBQUM7Ozs7OztJQUVELG9EQUFlOzs7OztJQUFmLFVBQWdCLFlBQXFCLEVBQUUsUUFBK0I7UUFDckUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDL0UsQ0FBQzs7Ozs7O0lBRUQsc0RBQWlCOzs7OztJQUFqQixVQUFrQixjQUF1QixFQUFFLFFBQStCO1FBQ3pFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDbkYsQ0FBQzs7Ozs7O0lBRU8sd0RBQW1COzs7OztJQUEzQixVQUE0QixRQUFxQjtRQUNoRCxRQUFRLFFBQVEsRUFBRTtZQUVqQixLQUFLLFdBQVcsQ0FBQyxJQUFJO2dCQUNwQixPQUFPLGlCQUFpQixDQUFDLElBQUksQ0FBQztZQUUvQixLQUFLLFdBQVcsQ0FBQyxHQUFHO2dCQUNuQixPQUFPLGlCQUFpQixDQUFDLEdBQUcsQ0FBQztZQUU5QixLQUFLLFdBQVcsQ0FBQyxJQUFJO2dCQUNwQixPQUFPLGlCQUFpQixDQUFDLElBQUksQ0FBQztZQUUvQjtnQkFDQyxNQUFNO1NBQ1A7SUFDRixDQUFDOzs7Ozs7SUFFTyxrREFBYTs7Ozs7SUFBckIsVUFBc0IsV0FBd0I7UUFFN0MsUUFBUSxXQUFXLEVBQUU7WUFDcEIsS0FBSyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQzthQUNsQjtZQUVELEtBQUssV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN4QixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUM7YUFDcEI7WUFFRCxLQUFLLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDekIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDO2FBQ3JCO1lBRUQsS0FBSyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZCLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQzthQUNuQjtZQUVELEtBQUssV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMxQixPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUM7YUFDdEI7WUFFRDtnQkFDQyxNQUFNO1NBRVA7SUFDRixDQUFDOztnQkFqRkQsVUFBVTs7OztnQkFaRixnQkFBZ0I7Z0JBQ2hCLHVCQUF1QjtnQkFDdkIsdUJBQXVCOztJQTRGaEMsaUNBQUM7Q0FBQSxBQWxGRCxDQUNnRCxvQkFBb0IsR0FpRm5FO1NBakZZLDBCQUEwQjs7Ozs7O0lBRTFCLHNEQUFtRDs7Ozs7SUFDNUQsNkRBQWlFOzs7OztJQUNqRSw2REFBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWFEaXNwYXRjaGVyIH0gZnJvbSAnLi9zY2hlbWEuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9jb3JlL2FwaS9zdHJ1Y3R1cmUuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IEZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlLCBUaGVtZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi9hcGkvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uL2FwaS90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vYXBpL3Jvdy1jb2xvcmluZy9yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi9hcGkvcm93LWNvbG9yaW5nL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2NoZW1hQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi9hcGkvc2NoZW1hLmNvbW1hbmQtaW52b2tlcic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjaGVtYURvbWFpbkNvbW1hbmRJbnZva2VyIGV4dGVuZHMgU2NoZW1hQ29tbWFuZEludm9rZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hRGlzcGF0Y2hlcjogU2NoZW1hRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmFicmljTW9kYWxUaGVtZVNlcnZpY2U6IEZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGNyZWF0ZShzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLmNyZWF0ZShzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0c2V0VGhlbWUodGhlbWU6IFNjaGVtYVRoZW1lLFxuXHRcdFx0IHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsXG5cdFx0XHQgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkXG5cdCk6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hRGlzcGF0Y2hlci5zZXRUaGVtZSh0aGVtZSwgc2NoZW1hSWQudG9BZ2dyZWdhdGVJZCgpKTtcblx0XHR0aGlzLmZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlLmNoYW5nZVRoZW1lKHRoaXMudG9GYWJyaWNUaGVtZSh0aGVtZSkpOyAvLyBUT0RPIGdpdGh1YiAjMjE2MlxuXHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2V0Um93SGVpZ2h0QmFzZWRPblRoZW1lKHRoZW1lLCBzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRzZXRSb3dDb2xvcmluZyhyb3dDb2xvcmluZzogUm93Q29sb3JpbmcsIHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHNjaGVtYVJvd0NvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZyA9IHRoaXMudG9TY2hlbWFSb3dDb2xvcmluZyhyb3dDb2xvcmluZyk7XG5cblx0XHR0aGlzLnNjaGVtYURpc3BhdGNoZXIuc2V0Um93Q29sb3Jpbmcoc2NoZW1hUm93Q29sb3JpbmcsIHNjaGVtYUlkLnRvQWdncmVnYXRlSWQoKSk7XG5cdH1cblxuXHRzZXRWZXJ0aWNhbEdyaWQodmVydGljYWxHcmlkOiBib29sZWFuLCBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLnNldFZlcnRpY2FsR3JpZCh2ZXJ0aWNhbEdyaWQsIHNjaGVtYUlkLnRvQWdncmVnYXRlSWQoKSk7XG5cdH1cblxuXHRzZXRIb3Jpem9udGFsR3JpZChob3Jpem9udGFsR3JpZDogYm9vbGVhbiwgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCk6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hRGlzcGF0Y2hlci5zZXRIb3Jpem9udGFsR3JpZChob3Jpem9udGFsR3JpZCwgc2NoZW1hSWQudG9BZ2dyZWdhdGVJZCgpKTtcblx0fVxuXG5cdHByaXZhdGUgdG9TY2hlbWFSb3dDb2xvcmluZyhjb2xvcmluZzogUm93Q29sb3JpbmcpOiBTY2hlbWFSb3dDb2xvcmluZyB7XG5cdFx0c3dpdGNoIChjb2xvcmluZykge1xuXG5cdFx0XHRjYXNlIFJvd0NvbG9yaW5nLk5PTkU6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFSb3dDb2xvcmluZy5OT05FO1xuXG5cdFx0XHRjYXNlIFJvd0NvbG9yaW5nLk9ERDpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVJvd0NvbG9yaW5nLk9ERDtcblxuXHRcdFx0Y2FzZSBSb3dDb2xvcmluZy5FVkVOOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hUm93Q29sb3JpbmcuRVZFTjtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSB0b0ZhYnJpY1RoZW1lKHNjaGVtYVRoZW1lOiBTY2hlbWFUaGVtZSk6IFRoZW1lIHtcblxuXHRcdHN3aXRjaCAoc2NoZW1hVGhlbWUpIHtcblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuREFSSzoge1xuXHRcdFx0XHRyZXR1cm4gVGhlbWUuREFSSztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5GQUJSSUM6IHtcblx0XHRcdFx0cmV0dXJuIFRoZW1lLkZBQlJJQztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5HRU5FUklDOiB7XG5cdFx0XHRcdHJldHVybiBUaGVtZS5HRU5FUklDO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLkxJR0hUOiB7XG5cdFx0XHRcdHJldHVybiBUaGVtZS5MSUdIVDtcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5NQVRFUklBTDoge1xuXHRcdFx0XHRyZXR1cm4gVGhlbWUuTUFURVJJQUw7XG5cdFx0XHR9XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0fVxuXHR9XG59XG4iXX0=