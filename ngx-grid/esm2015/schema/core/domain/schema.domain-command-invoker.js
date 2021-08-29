/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SchemaDispatcher } from './schema.dispatcher';
import { StructureCommandInvoker } from '../../../structure/core/api/structure.command-invoker';
import { FabricModalThemeService, Theme } from '@generic-ui/fabric';
import { schemaGlobalId } from '../api/schema.global-id';
import { SchemaTheme } from '../api/theme/schema-theme';
import { structureGlobalId } from '../../../structure/core/api/structure.global-id';
import { RowColoring } from '../api/row-coloring/row-coloring';
import { SchemaRowColoring } from '../api/row-coloring/schema-row-coloring';
import { Injectable } from '@angular/core';
import { SchemaCommandInvoker } from '../api/schema.command-invoker';
export class SchemaDomainCommandInvoker extends SchemaCommandInvoker {
    /**
     * @param {?} schemaDispatcher
     * @param {?} structureCommandService
     * @param {?} fabricModalThemeService
     */
    constructor(schemaDispatcher, structureCommandService, fabricModalThemeService) {
        super();
        this.schemaDispatcher = schemaDispatcher;
        this.structureCommandService = structureCommandService;
        this.fabricModalThemeService = fabricModalThemeService;
    }
    /**
     * @param {?=} schemaId
     * @return {?}
     */
    create(schemaId = schemaGlobalId) {
        this.schemaDispatcher.create(schemaId.toAggregateId());
    }
    /**
     * @param {?} theme
     * @param {?=} schemaId
     * @param {?=} structureId
     * @return {?}
     */
    setTheme(theme, schemaId = schemaGlobalId, structureId = structureGlobalId) {
        this.schemaDispatcher.setTheme(theme, schemaId.toAggregateId());
        this.fabricModalThemeService.changeTheme(this.toFabricTheme(theme)); // TODO github #2162
        this.structureCommandService.setRowHeightBasedOnTheme(theme, structureId);
    }
    /**
     * @param {?} rowColoring
     * @param {?=} schemaId
     * @return {?}
     */
    setRowColoring(rowColoring, schemaId = schemaGlobalId) {
        /** @type {?} */
        const schemaRowColoring = this.toSchemaRowColoring(rowColoring);
        this.schemaDispatcher.setRowColoring(schemaRowColoring, schemaId.toAggregateId());
    }
    /**
     * @param {?} verticalGrid
     * @param {?=} schemaId
     * @return {?}
     */
    setVerticalGrid(verticalGrid, schemaId = schemaGlobalId) {
        this.schemaDispatcher.setVerticalGrid(verticalGrid, schemaId.toAggregateId());
    }
    /**
     * @param {?} horizontalGrid
     * @param {?=} schemaId
     * @return {?}
     */
    setHorizontalGrid(horizontalGrid, schemaId = schemaGlobalId) {
        this.schemaDispatcher.setHorizontalGrid(horizontalGrid, schemaId.toAggregateId());
    }
    /**
     * @private
     * @param {?} coloring
     * @return {?}
     */
    toSchemaRowColoring(coloring) {
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
    }
    /**
     * @private
     * @param {?} schemaTheme
     * @return {?}
     */
    toFabricTheme(schemaTheme) {
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
    }
}
SchemaDomainCommandInvoker.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaDomainCommandInvoker.ctorParameters = () => [
    { type: SchemaDispatcher },
    { type: StructureCommandInvoker },
    { type: FabricModalThemeService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmRvbWFpbi1jb21tYW5kLWludm9rZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInNjaGVtYS9jb3JlL2RvbWFpbi9zY2hlbWEuZG9tYWluLWNvbW1hbmQtaW52b2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDaEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXBFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDcEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFJckUsTUFBTSxPQUFPLDBCQUEyQixTQUFRLG9CQUFvQjs7Ozs7O0lBRW5FLFlBQTZCLGdCQUFrQyxFQUMzQyx1QkFBZ0QsRUFDaEQsdUJBQWdEO1FBQ25FLEtBQUssRUFBRSxDQUFDO1FBSG9CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDM0MsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO0lBRXBFLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFdBQWtDLGNBQWM7UUFDdEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWtCLEVBQ3hCLFdBQWtDLGNBQWMsRUFDaEQsY0FBMkIsaUJBQWlCO1FBRTlDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CO1FBQ3pGLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDM0UsQ0FBQzs7Ozs7O0lBRUQsY0FBYyxDQUFDLFdBQXdCLEVBQUUsV0FBa0MsY0FBYzs7Y0FFbEYsaUJBQWlCLEdBQXNCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUM7UUFFbEYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUNuRixDQUFDOzs7Ozs7SUFFRCxlQUFlLENBQUMsWUFBcUIsRUFBRSxXQUFrQyxjQUFjO1FBQ3RGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQy9FLENBQUM7Ozs7OztJQUVELGlCQUFpQixDQUFDLGNBQXVCLEVBQUUsV0FBa0MsY0FBYztRQUMxRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ25GLENBQUM7Ozs7OztJQUVPLG1CQUFtQixDQUFDLFFBQXFCO1FBQ2hELFFBQVEsUUFBUSxFQUFFO1lBRWpCLEtBQUssV0FBVyxDQUFDLElBQUk7Z0JBQ3BCLE9BQU8saUJBQWlCLENBQUMsSUFBSSxDQUFDO1lBRS9CLEtBQUssV0FBVyxDQUFDLEdBQUc7Z0JBQ25CLE9BQU8saUJBQWlCLENBQUMsR0FBRyxDQUFDO1lBRTlCLEtBQUssV0FBVyxDQUFDLElBQUk7Z0JBQ3BCLE9BQU8saUJBQWlCLENBQUMsSUFBSSxDQUFDO1lBRS9CO2dCQUNDLE1BQU07U0FDUDtJQUNGLENBQUM7Ozs7OztJQUVPLGFBQWEsQ0FBQyxXQUF3QjtRQUU3QyxRQUFRLFdBQVcsRUFBRTtZQUNwQixLQUFLLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDO2FBQ2xCO1lBRUQsS0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3hCLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQzthQUNwQjtZQUVELEtBQUssV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN6QixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUM7YUFDckI7WUFFRCxLQUFLLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkIsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDO2FBQ25CO1lBRUQsS0FBSyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzFCLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUN0QjtZQUVEO2dCQUNDLE1BQU07U0FFUDtJQUNGLENBQUM7OztZQWpGRCxVQUFVOzs7O1lBZEYsZ0JBQWdCO1lBQ2hCLHVCQUF1QjtZQUN2Qix1QkFBdUI7Ozs7Ozs7SUFlbkIsc0RBQW1EOzs7OztJQUM1RCw2REFBaUU7Ozs7O0lBQ2pFLDZEQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYURpc3BhdGNoZXIgfSBmcm9tICcuL3NjaGVtYS5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2NvcmUvYXBpL3N0cnVjdHVyZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgRmFicmljTW9kYWxUaGVtZVNlcnZpY2UsIFRoZW1lIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uL2FwaS9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IHNjaGVtYUdsb2JhbElkIH0gZnJvbSAnLi4vYXBpL3NjaGVtYS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi9hcGkvdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9jb3JlL2FwaS9zdHJ1Y3R1cmUuZ2xvYmFsLWlkJztcbmltcG9ydCB7IFJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vYXBpL3Jvdy1jb2xvcmluZy9yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi9hcGkvcm93LWNvbG9yaW5nL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2NoZW1hQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi9hcGkvc2NoZW1hLmNvbW1hbmQtaW52b2tlcic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjaGVtYURvbWFpbkNvbW1hbmRJbnZva2VyIGV4dGVuZHMgU2NoZW1hQ29tbWFuZEludm9rZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hRGlzcGF0Y2hlcjogU2NoZW1hRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmFicmljTW9kYWxUaGVtZVNlcnZpY2U6IEZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGNyZWF0ZShzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkID0gc2NoZW1hR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYURpc3BhdGNoZXIuY3JlYXRlKHNjaGVtYUlkLnRvQWdncmVnYXRlSWQoKSk7XG5cdH1cblxuXHRzZXRUaGVtZSh0aGVtZTogU2NoZW1hVGhlbWUsXG5cdFx0XHQgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCA9IHNjaGVtYUdsb2JhbElkLFxuXHRcdFx0IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkXG5cdCk6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hRGlzcGF0Y2hlci5zZXRUaGVtZSh0aGVtZSwgc2NoZW1hSWQudG9BZ2dyZWdhdGVJZCgpKTtcblx0XHR0aGlzLmZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlLmNoYW5nZVRoZW1lKHRoaXMudG9GYWJyaWNUaGVtZSh0aGVtZSkpOyAvLyBUT0RPIGdpdGh1YiAjMjE2MlxuXHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2V0Um93SGVpZ2h0QmFzZWRPblRoZW1lKHRoZW1lLCBzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRzZXRSb3dDb2xvcmluZyhyb3dDb2xvcmluZzogUm93Q29sb3JpbmcsIHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQgPSBzY2hlbWFHbG9iYWxJZCk6IHZvaWQge1xuXG5cdFx0Y29uc3Qgc2NoZW1hUm93Q29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nID0gdGhpcy50b1NjaGVtYVJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nKTtcblxuXHRcdHRoaXMuc2NoZW1hRGlzcGF0Y2hlci5zZXRSb3dDb2xvcmluZyhzY2hlbWFSb3dDb2xvcmluZywgc2NoZW1hSWQudG9BZ2dyZWdhdGVJZCgpKTtcblx0fVxuXG5cdHNldFZlcnRpY2FsR3JpZCh2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW4sIHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQgPSBzY2hlbWFHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hRGlzcGF0Y2hlci5zZXRWZXJ0aWNhbEdyaWQodmVydGljYWxHcmlkLCBzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0c2V0SG9yaXpvbnRhbEdyaWQoaG9yaXpvbnRhbEdyaWQ6IGJvb2xlYW4sIHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQgPSBzY2hlbWFHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hRGlzcGF0Y2hlci5zZXRIb3Jpem9udGFsR3JpZChob3Jpem9udGFsR3JpZCwgc2NoZW1hSWQudG9BZ2dyZWdhdGVJZCgpKTtcblx0fVxuXG5cdHByaXZhdGUgdG9TY2hlbWFSb3dDb2xvcmluZyhjb2xvcmluZzogUm93Q29sb3JpbmcpOiBTY2hlbWFSb3dDb2xvcmluZyB7XG5cdFx0c3dpdGNoIChjb2xvcmluZykge1xuXG5cdFx0XHRjYXNlIFJvd0NvbG9yaW5nLk5PTkU6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFSb3dDb2xvcmluZy5OT05FO1xuXG5cdFx0XHRjYXNlIFJvd0NvbG9yaW5nLk9ERDpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVJvd0NvbG9yaW5nLk9ERDtcblxuXHRcdFx0Y2FzZSBSb3dDb2xvcmluZy5FVkVOOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hUm93Q29sb3JpbmcuRVZFTjtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSB0b0ZhYnJpY1RoZW1lKHNjaGVtYVRoZW1lOiBTY2hlbWFUaGVtZSk6IFRoZW1lIHtcblxuXHRcdHN3aXRjaCAoc2NoZW1hVGhlbWUpIHtcblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuREFSSzoge1xuXHRcdFx0XHRyZXR1cm4gVGhlbWUuREFSSztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5GQUJSSUM6IHtcblx0XHRcdFx0cmV0dXJuIFRoZW1lLkZBQlJJQztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5HRU5FUklDOiB7XG5cdFx0XHRcdHJldHVybiBUaGVtZS5HRU5FUklDO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLkxJR0hUOiB7XG5cdFx0XHRcdHJldHVybiBUaGVtZS5MSUdIVDtcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5NQVRFUklBTDoge1xuXHRcdFx0XHRyZXR1cm4gVGhlbWUuTUFURVJJQUw7XG5cdFx0XHR9XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0fVxuXHR9XG59XG4iXX0=