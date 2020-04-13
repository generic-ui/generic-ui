/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { schemaGlobalId } from './schema.global-id';
import { SchemaDispatcher } from '../domain/schema.dispatcher';
import { structureGlobalId } from '../../structure/ui-api/structure.global-id';
import { StructureCommandDispatcher } from '../../structure/ui-api/structure.command-dispatcher';
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
        this.schemaDispatcher.setRowColoring(rowColoring, schemaId.toAggregateId());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3NjaGVtYS91aS1hcGkvc2NoZW1hLmNvbW1hbmQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFJL0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFJakcsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7SUFFbkMsWUFBNkIsZ0JBQWtDLEVBQzNDLHVCQUFtRDtRQUQxQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzNDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBNEI7SUFDdkUsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsV0FBa0MsY0FBYztRQUN0RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBa0IsRUFBRSxXQUFrQyxjQUFjLEVBQUUsY0FBMkIsaUJBQWlCO1FBQzFILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBRWhFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDM0UsQ0FBQzs7Ozs7O0lBRUQsY0FBYyxDQUFDLFdBQThCLEVBQUUsV0FBa0MsY0FBYztRQUM5RixJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUM3RSxDQUFDOzs7Ozs7SUFFRCxlQUFlLENBQUMsWUFBcUIsRUFBRSxXQUFrQyxjQUFjO1FBQ3RGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQy9FLENBQUM7Ozs7OztJQUVELGlCQUFpQixDQUFDLGNBQXVCLEVBQUUsV0FBa0MsY0FBYztRQUMxRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ25GLENBQUM7OztZQTNCRCxVQUFVOzs7O1lBUkYsZ0JBQWdCO1lBS2hCLDBCQUEwQjs7Ozs7OztJQU10QixtREFBbUQ7Ozs7O0lBQzVELDBEQUFvRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi9kb21haW4vc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IHNjaGVtYUdsb2JhbElkIH0gZnJvbSAnLi9zY2hlbWEuZ2xvYmFsLWlkJztcbmltcG9ydCB7IFNjaGVtYURpc3BhdGNoZXIgfSBmcm9tICcuLi9kb21haW4vc2NoZW1hLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vcmVhZC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vZG9tYWluL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS91aS1hcGkvc3RydWN0dXJlLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS91aS1hcGkvc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjaGVtYUNvbW1hbmREaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNjaGVtYURpc3BhdGNoZXI6IFNjaGVtYURpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ29tbWFuZFNlcnZpY2U6IFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyKSB7XG5cdH1cblxuXHRjcmVhdGUoc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCA9IHNjaGVtYUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLmNyZWF0ZShzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0c2V0VGhlbWUodGhlbWU6IFNjaGVtYVRoZW1lLCBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkID0gc2NoZW1hR2xvYmFsSWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLnNldFRoZW1lKHRoZW1lLCBzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5zZXRSb3dIZWlnaHRCYXNlZE9uVGhlbWUodGhlbWUsIHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHNldFJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZywgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCA9IHNjaGVtYUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLnNldFJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nLCBzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0c2V0VmVydGljYWxHcmlkKHZlcnRpY2FsR3JpZDogYm9vbGVhbiwgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCA9IHNjaGVtYUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLnNldFZlcnRpY2FsR3JpZCh2ZXJ0aWNhbEdyaWQsIHNjaGVtYUlkLnRvQWdncmVnYXRlSWQoKSk7XG5cdH1cblxuXHRzZXRIb3Jpem9udGFsR3JpZChob3Jpem9udGFsR3JpZDogYm9vbGVhbiwgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCA9IHNjaGVtYUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLnNldEhvcml6b250YWxHcmlkKGhvcml6b250YWxHcmlkLCBzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cbn1cbiJdfQ==