/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { schemaGlobalId } from './read/schema.global-id';
import { SchemaDispatcher } from '../domain/schema.dispatcher';
import { SchemaRowColoring } from '../domain/coloring/schema-row-coloring';
import { structureGlobalId } from '../../structure/core/domain-api/structure.global-id';
import { StructureCommandDispatcher } from '../../structure/core/domain-api/structure.command-dispatcher';
import { RowColoring } from './row-coloring';
export class SchemaCommandInvoker {
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
SchemaCommandInvoker.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaCommandInvoker.ctorParameters = () => [
    { type: SchemaDispatcher },
    { type: StructureCommandDispatcher }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmNvbW1hbmQtaW52b2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic2NoZW1hL2RvbWFpbi1hcGkvc2NoZW1hLmNvbW1hbmQtaW52b2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUszQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFL0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDeEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDMUcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSTdDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBRWhDLFlBQTZCLGdCQUFrQyxFQUMzQyx1QkFBbUQ7UUFEMUMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMzQyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQTRCO0lBQ3ZFLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFdBQWtDLGNBQWM7UUFDdEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWtCLEVBQUUsV0FBa0MsY0FBYyxFQUFFLGNBQTJCLGlCQUFpQjtRQUMxSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztRQUVoRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsd0JBQXdCLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzNFLENBQUM7Ozs7OztJQUVELGNBQWMsQ0FBQyxXQUF3QixFQUFFLFdBQWtDLGNBQWM7O2NBRWxGLGlCQUFpQixHQUFzQixJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDO1FBRWxGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDbkYsQ0FBQzs7Ozs7O0lBRUQsZUFBZSxDQUFDLFlBQXFCLEVBQUUsV0FBa0MsY0FBYztRQUN0RixJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUMvRSxDQUFDOzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxjQUF1QixFQUFFLFdBQWtDLGNBQWM7UUFDMUYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUNuRixDQUFDOzs7Ozs7SUFFTyxtQkFBbUIsQ0FBQyxRQUFxQjtRQUNoRCxRQUFRLFFBQVEsRUFBRTtZQUVqQixLQUFLLFdBQVcsQ0FBQyxJQUFJO2dCQUNwQixPQUFPLGlCQUFpQixDQUFDLElBQUksQ0FBQztZQUUvQixLQUFLLFdBQVcsQ0FBQyxHQUFHO2dCQUNuQixPQUFPLGlCQUFpQixDQUFDLEdBQUcsQ0FBQztZQUU5QixLQUFLLFdBQVcsQ0FBQyxJQUFJO2dCQUNwQixPQUFPLGlCQUFpQixDQUFDLElBQUksQ0FBQztTQUMvQjtJQUNGLENBQUM7OztZQTVDRCxVQUFVOzs7O1lBVEYsZ0JBQWdCO1lBS2hCLDBCQUEwQjs7Ozs7OztJQU90QixnREFBbUQ7Ozs7O0lBQzVELHVEQUFvRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZEludm9rZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uL2RvbWFpbi90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgc2NoZW1hR2xvYmFsSWQgfSBmcm9tICcuL3JlYWQvc2NoZW1hLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBTY2hlbWFEaXNwYXRjaGVyIH0gZnJvbSAnLi4vZG9tYWluL3NjaGVtYS5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4vcmVhZC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vZG9tYWluL2NvbG9yaW5nL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUvY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IHN0cnVjdHVyZUdsb2JhbElkIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlL2NvcmUvZG9tYWluLWFwaS9zdHJ1Y3R1cmUuZ2xvYmFsLWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlL2NvcmUvZG9tYWluLWFwaS9zdHJ1Y3R1cmUuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFJvd0NvbG9yaW5nIH0gZnJvbSAnLi9yb3ctY29sb3JpbmcnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY2hlbWFDb21tYW5kSW52b2tlciBpbXBsZW1lbnRzIENvbW1hbmRJbnZva2VyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNjaGVtYURpc3BhdGNoZXI6IFNjaGVtYURpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ29tbWFuZFNlcnZpY2U6IFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyKSB7XG5cdH1cblxuXHRjcmVhdGUoc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCA9IHNjaGVtYUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLmNyZWF0ZShzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0c2V0VGhlbWUodGhlbWU6IFNjaGVtYVRoZW1lLCBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkID0gc2NoZW1hR2xvYmFsSWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLnNldFRoZW1lKHRoZW1lLCBzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5zZXRSb3dIZWlnaHRCYXNlZE9uVGhlbWUodGhlbWUsIHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHNldFJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nOiBSb3dDb2xvcmluZywgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCA9IHNjaGVtYUdsb2JhbElkKTogdm9pZCB7XG5cblx0XHRjb25zdCBzY2hlbWFSb3dDb2xvcmluZzogU2NoZW1hUm93Q29sb3JpbmcgPSB0aGlzLnRvU2NoZW1hUm93Q29sb3Jpbmcocm93Q29sb3JpbmcpO1xuXG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLnNldFJvd0NvbG9yaW5nKHNjaGVtYVJvd0NvbG9yaW5nLCBzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0c2V0VmVydGljYWxHcmlkKHZlcnRpY2FsR3JpZDogYm9vbGVhbiwgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCA9IHNjaGVtYUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLnNldFZlcnRpY2FsR3JpZCh2ZXJ0aWNhbEdyaWQsIHNjaGVtYUlkLnRvQWdncmVnYXRlSWQoKSk7XG5cdH1cblxuXHRzZXRIb3Jpem9udGFsR3JpZChob3Jpem9udGFsR3JpZDogYm9vbGVhbiwgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCA9IHNjaGVtYUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLnNldEhvcml6b250YWxHcmlkKGhvcml6b250YWxHcmlkLCBzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0cHJpdmF0ZSB0b1NjaGVtYVJvd0NvbG9yaW5nKGNvbG9yaW5nOiBSb3dDb2xvcmluZyk6IFNjaGVtYVJvd0NvbG9yaW5nIHtcblx0XHRzd2l0Y2ggKGNvbG9yaW5nKSB7XG5cblx0XHRcdGNhc2UgUm93Q29sb3JpbmcuTk9ORTpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVJvd0NvbG9yaW5nLk5PTkU7XG5cblx0XHRcdGNhc2UgUm93Q29sb3JpbmcuT0REOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hUm93Q29sb3JpbmcuT0REO1xuXG5cdFx0XHRjYXNlIFJvd0NvbG9yaW5nLkVWRU46XG5cdFx0XHRcdHJldHVybiBTY2hlbWFSb3dDb2xvcmluZy5FVkVOO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=