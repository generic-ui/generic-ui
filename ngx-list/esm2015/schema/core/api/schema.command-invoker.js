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
export class SchemaCommandInvoker {
    /**
     * @param {?} schemaDispatcher
     * @param {?} structureCommandService
     * @param {?} fabricModalThemeService
     */
    constructor(schemaDispatcher, structureCommandService, fabricModalThemeService) {
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
        }
    }
}
SchemaCommandInvoker.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaCommandInvoker.ctorParameters = () => [
    { type: SchemaDispatcher },
    { type: StructureCommandDispatcher },
    { type: FabricModalThemeService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmNvbW1hbmQtaW52b2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic2NoZW1hL2NvcmUvYXBpL3NjaGVtYS5jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNwRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSXBFLE1BQU0sT0FBTyxvQkFBb0I7Ozs7OztJQUVoQyxZQUE2QixnQkFBa0MsRUFDM0MsdUJBQW1ELEVBQ25ELHVCQUFnRDtRQUZ2QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzNDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBNEI7UUFDbkQsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtJQUNwRSxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxXQUFrQyxjQUFjO1FBQ3RELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7OztJQUVELFFBQVEsQ0FBQyxLQUFrQixFQUFFLFdBQWtDLGNBQWMsRUFBRSxjQUEyQixpQkFBaUI7UUFDMUgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxvQkFBb0I7UUFDekYsSUFBSSxDQUFDLHVCQUF1QixDQUFDLHdCQUF3QixDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMzRSxDQUFDOzs7Ozs7SUFFRCxjQUFjLENBQUMsV0FBd0IsRUFBRSxXQUFrQyxjQUFjOztjQUVsRixpQkFBaUIsR0FBc0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQztRQUVsRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ25GLENBQUM7Ozs7OztJQUVELGVBQWUsQ0FBQyxZQUFxQixFQUFFLFdBQWtDLGNBQWM7UUFDdEYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDL0UsQ0FBQzs7Ozs7O0lBRUQsaUJBQWlCLENBQUMsY0FBdUIsRUFBRSxXQUFrQyxjQUFjO1FBQzFGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDbkYsQ0FBQzs7Ozs7O0lBRU8sbUJBQW1CLENBQUMsUUFBcUI7UUFDaEQsUUFBUSxRQUFRLEVBQUU7WUFFakIsS0FBSyxXQUFXLENBQUMsSUFBSTtnQkFDcEIsT0FBTyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7WUFFL0IsS0FBSyxXQUFXLENBQUMsR0FBRztnQkFDbkIsT0FBTyxpQkFBaUIsQ0FBQyxHQUFHLENBQUM7WUFFOUIsS0FBSyxXQUFXLENBQUMsSUFBSTtnQkFDcEIsT0FBTyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7U0FDL0I7SUFDRixDQUFDOzs7Ozs7SUFFTyxhQUFhLENBQUMsV0FBd0I7UUFFN0MsUUFBUSxXQUFXLEVBQUU7WUFDcEIsS0FBSyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQzthQUNsQjtZQUVELEtBQUssV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN4QixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUM7YUFDcEI7WUFFRCxLQUFLLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDekIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDO2FBQ3JCO1lBRUQsS0FBSyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZCLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQzthQUNuQjtZQUVELEtBQUssV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMxQixPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUM7YUFDdEI7U0FFRDtJQUNGLENBQUM7OztZQXZFRCxVQUFVOzs7O1lBVkYsZ0JBQWdCO1lBS2hCLDBCQUEwQjtZQUUxQix1QkFBdUI7Ozs7Ozs7SUFNbkIsZ0RBQW1EOzs7OztJQUM1RCx1REFBb0U7Ozs7O0lBQ3BFLHVEQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZEludm9rZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4vc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IHNjaGVtYUdsb2JhbElkIH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvc2NoZW1hLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBTY2hlbWFEaXNwYXRjaGVyIH0gZnJvbSAnLi4vZG9tYWluL3NjaGVtYS5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IHN0cnVjdHVyZUdsb2JhbElkIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2NvcmUvYXBpL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvY29yZS9hcGkvc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBSb3dDb2xvcmluZyB9IGZyb20gJy4vcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IEZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlLCBUaGVtZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjaGVtYUNvbW1hbmRJbnZva2VyIGltcGxlbWVudHMgQ29tbWFuZEludm9rZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hRGlzcGF0Y2hlcjogU2NoZW1hRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmFicmljTW9kYWxUaGVtZVNlcnZpY2U6IEZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlKSB7XG5cdH1cblxuXHRjcmVhdGUoc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCA9IHNjaGVtYUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLmNyZWF0ZShzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0c2V0VGhlbWUodGhlbWU6IFNjaGVtYVRoZW1lLCBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkID0gc2NoZW1hR2xvYmFsSWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLnNldFRoZW1lKHRoZW1lLCBzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHRcdHRoaXMuZmFicmljTW9kYWxUaGVtZVNlcnZpY2UuY2hhbmdlVGhlbWUodGhpcy50b0ZhYnJpY1RoZW1lKHRoZW1lKSk7IC8vIFRPRE8gZ2l0aHViICMyMTYyXG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5zZXRSb3dIZWlnaHRCYXNlZE9uVGhlbWUodGhlbWUsIHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHNldFJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nOiBSb3dDb2xvcmluZywgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCA9IHNjaGVtYUdsb2JhbElkKTogdm9pZCB7XG5cblx0XHRjb25zdCBzY2hlbWFSb3dDb2xvcmluZzogU2NoZW1hUm93Q29sb3JpbmcgPSB0aGlzLnRvU2NoZW1hUm93Q29sb3Jpbmcocm93Q29sb3JpbmcpO1xuXG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLnNldFJvd0NvbG9yaW5nKHNjaGVtYVJvd0NvbG9yaW5nLCBzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0c2V0VmVydGljYWxHcmlkKHZlcnRpY2FsR3JpZDogYm9vbGVhbiwgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCA9IHNjaGVtYUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLnNldFZlcnRpY2FsR3JpZCh2ZXJ0aWNhbEdyaWQsIHNjaGVtYUlkLnRvQWdncmVnYXRlSWQoKSk7XG5cdH1cblxuXHRzZXRIb3Jpem9udGFsR3JpZChob3Jpem9udGFsR3JpZDogYm9vbGVhbiwgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCA9IHNjaGVtYUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLnNldEhvcml6b250YWxHcmlkKGhvcml6b250YWxHcmlkLCBzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0cHJpdmF0ZSB0b1NjaGVtYVJvd0NvbG9yaW5nKGNvbG9yaW5nOiBSb3dDb2xvcmluZyk6IFNjaGVtYVJvd0NvbG9yaW5nIHtcblx0XHRzd2l0Y2ggKGNvbG9yaW5nKSB7XG5cblx0XHRcdGNhc2UgUm93Q29sb3JpbmcuTk9ORTpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVJvd0NvbG9yaW5nLk5PTkU7XG5cblx0XHRcdGNhc2UgUm93Q29sb3JpbmcuT0REOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hUm93Q29sb3JpbmcuT0REO1xuXG5cdFx0XHRjYXNlIFJvd0NvbG9yaW5nLkVWRU46XG5cdFx0XHRcdHJldHVybiBTY2hlbWFSb3dDb2xvcmluZy5FVkVOO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgdG9GYWJyaWNUaGVtZShzY2hlbWFUaGVtZTogU2NoZW1hVGhlbWUpOiBUaGVtZSB7XG5cblx0XHRzd2l0Y2ggKHNjaGVtYVRoZW1lKSB7XG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLkRBUks6IHtcblx0XHRcdFx0cmV0dXJuIFRoZW1lLkRBUks7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuRkFCUklDOiB7XG5cdFx0XHRcdHJldHVybiBUaGVtZS5GQUJSSUM7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuR0VORVJJQzoge1xuXHRcdFx0XHRyZXR1cm4gVGhlbWUuR0VORVJJQztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5MSUdIVDoge1xuXHRcdFx0XHRyZXR1cm4gVGhlbWUuTElHSFQ7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuTUFURVJJQUw6IHtcblx0XHRcdFx0cmV0dXJuIFRoZW1lLk1BVEVSSUFMO1xuXHRcdFx0fVxuXG5cdFx0fVxuXHR9XG59XG4iXX0=