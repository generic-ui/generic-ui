/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SchemaTheme } from './schema-theme';
import { schemaGlobalId } from '../domain-read/schema.global-id';
import { SchemaDispatcher } from '../domain/schema.dispatcher';
import { SchemaRowColoring } from './schema-row-coloring';
import { structureGlobalId } from '../../../structure/core/api/structure.global-id';
import { StructureCommandDispatcher } from '../../../structure/core/api/structure.command-dispatcher';
import { RowColoring } from './row-coloring';
import { FabricModalThemeService, Theme } from '@generic-ui/fabric';
var SchemaCommandInvoker = /** @class */ (function () {
    function SchemaCommandInvoker(schemaDispatcher, structureCommandService, fabricModalThemeService) {
        this.schemaDispatcher = schemaDispatcher;
        this.structureCommandService = structureCommandService;
        this.fabricModalThemeService = fabricModalThemeService;
    }
    /**
     * @param {?=} schemaId
     * @return {?}
     */
    SchemaCommandInvoker.prototype.create = /**
     * @param {?=} schemaId
     * @return {?}
     */
    function (schemaId) {
        if (schemaId === void 0) { schemaId = schemaGlobalId; }
        this.schemaDispatcher.create(schemaId.toAggregateId());
    };
    /**
     * @param {?} theme
     * @param {?=} schemaId
     * @param {?=} structureId
     * @return {?}
     */
    SchemaCommandInvoker.prototype.setTheme = /**
     * @param {?} theme
     * @param {?=} schemaId
     * @param {?=} structureId
     * @return {?}
     */
    function (theme, schemaId, structureId) {
        if (schemaId === void 0) { schemaId = schemaGlobalId; }
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.schemaDispatcher.setTheme(theme, schemaId.toAggregateId());
        this.fabricModalThemeService.changeTheme(this.toFabricTheme(theme)); // TODO github #2162
        this.structureCommandService.setRowHeightBasedOnTheme(theme, structureId);
    };
    /**
     * @param {?} rowColoring
     * @param {?=} schemaId
     * @return {?}
     */
    SchemaCommandInvoker.prototype.setRowColoring = /**
     * @param {?} rowColoring
     * @param {?=} schemaId
     * @return {?}
     */
    function (rowColoring, schemaId) {
        if (schemaId === void 0) { schemaId = schemaGlobalId; }
        /** @type {?} */
        var schemaRowColoring = this.toSchemaRowColoring(rowColoring);
        this.schemaDispatcher.setRowColoring(schemaRowColoring, schemaId.toAggregateId());
    };
    /**
     * @param {?} verticalGrid
     * @param {?=} schemaId
     * @return {?}
     */
    SchemaCommandInvoker.prototype.setVerticalGrid = /**
     * @param {?} verticalGrid
     * @param {?=} schemaId
     * @return {?}
     */
    function (verticalGrid, schemaId) {
        if (schemaId === void 0) { schemaId = schemaGlobalId; }
        this.schemaDispatcher.setVerticalGrid(verticalGrid, schemaId.toAggregateId());
    };
    /**
     * @param {?} horizontalGrid
     * @param {?=} schemaId
     * @return {?}
     */
    SchemaCommandInvoker.prototype.setHorizontalGrid = /**
     * @param {?} horizontalGrid
     * @param {?=} schemaId
     * @return {?}
     */
    function (horizontalGrid, schemaId) {
        if (schemaId === void 0) { schemaId = schemaGlobalId; }
        this.schemaDispatcher.setHorizontalGrid(horizontalGrid, schemaId.toAggregateId());
    };
    /**
     * @private
     * @param {?} coloring
     * @return {?}
     */
    SchemaCommandInvoker.prototype.toSchemaRowColoring = /**
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
        }
    };
    /**
     * @private
     * @param {?} schemaTheme
     * @return {?}
     */
    SchemaCommandInvoker.prototype.toFabricTheme = /**
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
        }
    };
    SchemaCommandInvoker.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SchemaCommandInvoker.ctorParameters = function () { return [
        { type: SchemaDispatcher },
        { type: StructureCommandDispatcher },
        { type: FabricModalThemeService }
    ]; };
    return SchemaCommandInvoker;
}());
export { SchemaCommandInvoker };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaCommandInvoker.prototype.schemaDispatcher;
    /**
     * @type {?}
     * @private
     */
    SchemaCommandInvoker.prototype.structureCommandService;
    /**
     * @type {?}
     * @private
     */
    SchemaCommandInvoker.prototype.fabricModalThemeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmNvbW1hbmQtaW52b2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic2NoZW1hL2NvcmUvYXBpL3NjaGVtYS5jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNwRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3BFO0lBR0MsOEJBQTZCLGdCQUFrQyxFQUMzQyx1QkFBbUQsRUFDbkQsdUJBQWdEO1FBRnZDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDM0MsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUE0QjtRQUNuRCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO0lBQ3BFLENBQUM7Ozs7O0lBRUQscUNBQU07Ozs7SUFBTixVQUFPLFFBQWdEO1FBQWhELHlCQUFBLEVBQUEseUJBQWdEO1FBQ3RELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7OztJQUVELHVDQUFROzs7Ozs7SUFBUixVQUFTLEtBQWtCLEVBQUUsUUFBZ0QsRUFBRSxXQUE0QztRQUE5Rix5QkFBQSxFQUFBLHlCQUFnRDtRQUFFLDRCQUFBLEVBQUEsK0JBQTRDO1FBQzFILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CO1FBQ3pGLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDM0UsQ0FBQzs7Ozs7O0lBRUQsNkNBQWM7Ozs7O0lBQWQsVUFBZSxXQUF3QixFQUFFLFFBQWdEO1FBQWhELHlCQUFBLEVBQUEseUJBQWdEOztZQUVsRixpQkFBaUIsR0FBc0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQztRQUVsRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ25GLENBQUM7Ozs7OztJQUVELDhDQUFlOzs7OztJQUFmLFVBQWdCLFlBQXFCLEVBQUUsUUFBZ0Q7UUFBaEQseUJBQUEsRUFBQSx5QkFBZ0Q7UUFDdEYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDL0UsQ0FBQzs7Ozs7O0lBRUQsZ0RBQWlCOzs7OztJQUFqQixVQUFrQixjQUF1QixFQUFFLFFBQWdEO1FBQWhELHlCQUFBLEVBQUEseUJBQWdEO1FBQzFGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDbkYsQ0FBQzs7Ozs7O0lBRU8sa0RBQW1COzs7OztJQUEzQixVQUE0QixRQUFxQjtRQUNoRCxRQUFRLFFBQVEsRUFBRTtZQUVqQixLQUFLLFdBQVcsQ0FBQyxJQUFJO2dCQUNwQixPQUFPLGlCQUFpQixDQUFDLElBQUksQ0FBQztZQUUvQixLQUFLLFdBQVcsQ0FBQyxHQUFHO2dCQUNuQixPQUFPLGlCQUFpQixDQUFDLEdBQUcsQ0FBQztZQUU5QixLQUFLLFdBQVcsQ0FBQyxJQUFJO2dCQUNwQixPQUFPLGlCQUFpQixDQUFDLElBQUksQ0FBQztTQUMvQjtJQUNGLENBQUM7Ozs7OztJQUVPLDRDQUFhOzs7OztJQUFyQixVQUFzQixXQUF3QjtRQUU3QyxRQUFRLFdBQVcsRUFBRTtZQUNwQixLQUFLLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDO2FBQ2xCO1lBRUQsS0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3hCLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQzthQUNwQjtZQUVELEtBQUssV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN6QixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUM7YUFDckI7WUFFRCxLQUFLLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkIsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDO2FBQ25CO1lBRUQsS0FBSyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzFCLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUN0QjtTQUVEO0lBQ0YsQ0FBQzs7Z0JBdkVELFVBQVU7Ozs7Z0JBVkYsZ0JBQWdCO2dCQUtoQiwwQkFBMEI7Z0JBRTFCLHVCQUF1Qjs7SUEyRWhDLDJCQUFDO0NBQUEsQUF4RUQsSUF3RUM7U0F2RVksb0JBQW9COzs7Ozs7SUFFcEIsZ0RBQW1EOzs7OztJQUM1RCx1REFBb0U7Ozs7O0lBQ3BFLHVEQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZEludm9rZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4vc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IHNjaGVtYUdsb2JhbElkIH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvc2NoZW1hLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBTY2hlbWFEaXNwYXRjaGVyIH0gZnJvbSAnLi4vZG9tYWluL3NjaGVtYS5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IHN0cnVjdHVyZUdsb2JhbElkIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2NvcmUvYXBpL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvY29yZS9hcGkvc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBSb3dDb2xvcmluZyB9IGZyb20gJy4vcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IEZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlLCBUaGVtZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjaGVtYUNvbW1hbmRJbnZva2VyIGltcGxlbWVudHMgQ29tbWFuZEludm9rZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hRGlzcGF0Y2hlcjogU2NoZW1hRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmFicmljTW9kYWxUaGVtZVNlcnZpY2U6IEZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlKSB7XG5cdH1cblxuXHRjcmVhdGUoc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCA9IHNjaGVtYUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLmNyZWF0ZShzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0c2V0VGhlbWUodGhlbWU6IFNjaGVtYVRoZW1lLCBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkID0gc2NoZW1hR2xvYmFsSWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLnNldFRoZW1lKHRoZW1lLCBzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHRcdHRoaXMuZmFicmljTW9kYWxUaGVtZVNlcnZpY2UuY2hhbmdlVGhlbWUodGhpcy50b0ZhYnJpY1RoZW1lKHRoZW1lKSk7IC8vIFRPRE8gZ2l0aHViICMyMTYyXG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5zZXRSb3dIZWlnaHRCYXNlZE9uVGhlbWUodGhlbWUsIHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHNldFJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nOiBSb3dDb2xvcmluZywgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCA9IHNjaGVtYUdsb2JhbElkKTogdm9pZCB7XG5cblx0XHRjb25zdCBzY2hlbWFSb3dDb2xvcmluZzogU2NoZW1hUm93Q29sb3JpbmcgPSB0aGlzLnRvU2NoZW1hUm93Q29sb3Jpbmcocm93Q29sb3JpbmcpO1xuXG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLnNldFJvd0NvbG9yaW5nKHNjaGVtYVJvd0NvbG9yaW5nLCBzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0c2V0VmVydGljYWxHcmlkKHZlcnRpY2FsR3JpZDogYm9vbGVhbiwgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCA9IHNjaGVtYUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLnNldFZlcnRpY2FsR3JpZCh2ZXJ0aWNhbEdyaWQsIHNjaGVtYUlkLnRvQWdncmVnYXRlSWQoKSk7XG5cdH1cblxuXHRzZXRIb3Jpem9udGFsR3JpZChob3Jpem9udGFsR3JpZDogYm9vbGVhbiwgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCA9IHNjaGVtYUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLnNldEhvcml6b250YWxHcmlkKGhvcml6b250YWxHcmlkLCBzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0cHJpdmF0ZSB0b1NjaGVtYVJvd0NvbG9yaW5nKGNvbG9yaW5nOiBSb3dDb2xvcmluZyk6IFNjaGVtYVJvd0NvbG9yaW5nIHtcblx0XHRzd2l0Y2ggKGNvbG9yaW5nKSB7XG5cblx0XHRcdGNhc2UgUm93Q29sb3JpbmcuTk9ORTpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVJvd0NvbG9yaW5nLk5PTkU7XG5cblx0XHRcdGNhc2UgUm93Q29sb3JpbmcuT0REOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hUm93Q29sb3JpbmcuT0REO1xuXG5cdFx0XHRjYXNlIFJvd0NvbG9yaW5nLkVWRU46XG5cdFx0XHRcdHJldHVybiBTY2hlbWFSb3dDb2xvcmluZy5FVkVOO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgdG9GYWJyaWNUaGVtZShzY2hlbWFUaGVtZTogU2NoZW1hVGhlbWUpOiBUaGVtZSB7XG5cblx0XHRzd2l0Y2ggKHNjaGVtYVRoZW1lKSB7XG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLkRBUks6IHtcblx0XHRcdFx0cmV0dXJuIFRoZW1lLkRBUks7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuRkFCUklDOiB7XG5cdFx0XHRcdHJldHVybiBUaGVtZS5GQUJSSUM7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuR0VORVJJQzoge1xuXHRcdFx0XHRyZXR1cm4gVGhlbWUuR0VORVJJQztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5MSUdIVDoge1xuXHRcdFx0XHRyZXR1cm4gVGhlbWUuTElHSFQ7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuTUFURVJJQUw6IHtcblx0XHRcdFx0cmV0dXJuIFRoZW1lLk1BVEVSSUFMO1xuXHRcdFx0fVxuXG5cdFx0fVxuXHR9XG59XG4iXX0=