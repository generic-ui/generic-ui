/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { schemaGlobalId } from './read/schema.global-id';
import { SchemaDispatcher } from '../domain/schema.dispatcher';
import { SchemaRowColoring } from '../domain/coloring/schema-row-coloring';
import { structureGlobalId } from '../../structure/feature-api/structure.global-id';
import { StructureCommandDispatcher } from '../../structure/feature-api/structure.command-dispatcher';
import { RowColoring } from './row-coloring';
export class SchemaCommandDispatcher {
    /**
     * @param {?} schemaDispatcher
     * @param {?} structureCommandService
     */
    constructor(schemaDispatcher, structureCommandService) {
        this.schemaDispatcher = schemaDispatcher;
        this.structureCommandService = structureCommandService;
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
}
SchemaCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaCommandDispatcher.ctorParameters = () => [
    { type: SchemaDispatcher },
    { type: StructureCommandDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaCommandDispatcher.prototype.schemaDispatcher;
    /**
     * @type {?}
     * @private
     */
    SchemaCommandDispatcher.prototype.structureCommandService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3NjaGVtYS9mZWF0dXJlLWFwaS9zY2hlbWEuY29tbWFuZC1kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUUzRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNwRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJN0MsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7SUFFbkMsWUFBNkIsZ0JBQWtDLEVBQzNDLHVCQUFtRDtRQUQxQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzNDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBNEI7SUFDdkUsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsV0FBa0MsY0FBYztRQUN0RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBa0IsRUFBRSxXQUFrQyxjQUFjLEVBQUUsY0FBMkIsaUJBQWlCO1FBQzFILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBRWhFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDM0UsQ0FBQzs7Ozs7O0lBRUQsY0FBYyxDQUFDLFdBQXdCLEVBQUUsV0FBa0MsY0FBYzs7Y0FFbEYsaUJBQWlCLEdBQXNCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUM7UUFFbEYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUNuRixDQUFDOzs7Ozs7SUFFRCxlQUFlLENBQUMsWUFBcUIsRUFBRSxXQUFrQyxjQUFjO1FBQ3RGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQy9FLENBQUM7Ozs7OztJQUVELGlCQUFpQixDQUFDLGNBQXVCLEVBQUUsV0FBa0MsY0FBYztRQUMxRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ25GLENBQUM7Ozs7OztJQUVPLG1CQUFtQixDQUFDLFFBQXFCO1FBQ2hELFFBQVEsUUFBUSxFQUFFO1lBRWpCLEtBQUssV0FBVyxDQUFDLElBQUk7Z0JBQ3BCLE9BQU8saUJBQWlCLENBQUMsSUFBSSxDQUFDO1lBRS9CLEtBQUssV0FBVyxDQUFDLEdBQUc7Z0JBQ25CLE9BQU8saUJBQWlCLENBQUMsR0FBRyxDQUFDO1lBRTlCLEtBQUssV0FBVyxDQUFDLElBQUk7Z0JBQ3BCLE9BQU8saUJBQWlCLENBQUMsSUFBSSxDQUFDO1NBQy9CO0lBQ0YsQ0FBQzs7O1lBNUNELFVBQVU7Ozs7WUFURixnQkFBZ0I7WUFLaEIsMEJBQTBCOzs7Ozs7O0lBT3RCLG1EQUFtRDs7Ozs7SUFDNUQsMERBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uL2RvbWFpbi90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgc2NoZW1hR2xvYmFsSWQgfSBmcm9tICcuL3JlYWQvc2NoZW1hLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBTY2hlbWFEaXNwYXRjaGVyIH0gZnJvbSAnLi4vZG9tYWluL3NjaGVtYS5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4vcmVhZC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vZG9tYWluL2NvbG9yaW5nL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS9mZWF0dXJlLWFwaS9zdHJ1Y3R1cmUuZ2xvYmFsLWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlL2ZlYXR1cmUtYXBpL3N0cnVjdHVyZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgUm93Q29sb3JpbmcgfSBmcm9tICcuL3Jvdy1jb2xvcmluZyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjaGVtYUNvbW1hbmREaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNjaGVtYURpc3BhdGNoZXI6IFNjaGVtYURpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ29tbWFuZFNlcnZpY2U6IFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyKSB7XG5cdH1cblxuXHRjcmVhdGUoc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCA9IHNjaGVtYUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLmNyZWF0ZShzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0c2V0VGhlbWUodGhlbWU6IFNjaGVtYVRoZW1lLCBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkID0gc2NoZW1hR2xvYmFsSWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLnNldFRoZW1lKHRoZW1lLCBzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5zZXRSb3dIZWlnaHRCYXNlZE9uVGhlbWUodGhlbWUsIHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHNldFJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nOiBSb3dDb2xvcmluZywgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCA9IHNjaGVtYUdsb2JhbElkKTogdm9pZCB7XG5cblx0XHRjb25zdCBzY2hlbWFSb3dDb2xvcmluZzogU2NoZW1hUm93Q29sb3JpbmcgPSB0aGlzLnRvU2NoZW1hUm93Q29sb3Jpbmcocm93Q29sb3JpbmcpO1xuXG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLnNldFJvd0NvbG9yaW5nKHNjaGVtYVJvd0NvbG9yaW5nLCBzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0c2V0VmVydGljYWxHcmlkKHZlcnRpY2FsR3JpZDogYm9vbGVhbiwgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCA9IHNjaGVtYUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLnNldFZlcnRpY2FsR3JpZCh2ZXJ0aWNhbEdyaWQsIHNjaGVtYUlkLnRvQWdncmVnYXRlSWQoKSk7XG5cdH1cblxuXHRzZXRIb3Jpem9udGFsR3JpZChob3Jpem9udGFsR3JpZDogYm9vbGVhbiwgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCA9IHNjaGVtYUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLnNldEhvcml6b250YWxHcmlkKGhvcml6b250YWxHcmlkLCBzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0cHJpdmF0ZSB0b1NjaGVtYVJvd0NvbG9yaW5nKGNvbG9yaW5nOiBSb3dDb2xvcmluZyk6IFNjaGVtYVJvd0NvbG9yaW5nIHtcblx0XHRzd2l0Y2ggKGNvbG9yaW5nKSB7XG5cblx0XHRcdGNhc2UgUm93Q29sb3JpbmcuTk9ORTpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVJvd0NvbG9yaW5nLk5PTkU7XG5cblx0XHRcdGNhc2UgUm93Q29sb3JpbmcuT0REOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hUm93Q29sb3JpbmcuT0REO1xuXG5cdFx0XHRjYXNlIFJvd0NvbG9yaW5nLkVWRU46XG5cdFx0XHRcdHJldHVybiBTY2hlbWFSb3dDb2xvcmluZy5FVkVOO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=