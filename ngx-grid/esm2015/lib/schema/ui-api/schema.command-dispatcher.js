/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { schemaGlobalId } from './schema.global-id';
import { SchemaDispatcher } from '../domain/schema.dispatcher';
import { structureGlobalId } from '../../structure/ui-api/structure.global-id';
import { StructureCommandDispatcher } from '../../structure/ui-api/structure/structure.command-dispatcher';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3NjaGVtYS91aS1hcGkvc2NoZW1hLmNvbW1hbmQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFJL0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFJM0csTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7SUFFbkMsWUFBNkIsZ0JBQWtDLEVBQzNDLHVCQUFtRDtRQUQxQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzNDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBNEI7SUFDdkUsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsV0FBa0MsY0FBYztRQUN0RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBa0IsRUFBRSxXQUFrQyxjQUFjLEVBQUUsY0FBMkIsaUJBQWlCO1FBQzFILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBRWhFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDM0UsQ0FBQzs7Ozs7O0lBRUQsY0FBYyxDQUFDLFdBQThCLEVBQUUsV0FBa0MsY0FBYztRQUM5RixJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUM3RSxDQUFDOzs7Ozs7SUFFRCxlQUFlLENBQUMsWUFBcUIsRUFBRSxXQUFrQyxjQUFjO1FBQ3RGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQy9FLENBQUM7Ozs7OztJQUVELGlCQUFpQixDQUFDLGNBQXVCLEVBQUUsV0FBa0MsY0FBYztRQUMxRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ25GLENBQUM7OztZQTNCRCxVQUFVOzs7O1lBUkYsZ0JBQWdCO1lBS2hCLDBCQUEwQjs7Ozs7OztJQU10QixtREFBbUQ7Ozs7O0lBQzVELDBEQUFvRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi9kb21haW4vc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IHNjaGVtYUdsb2JhbElkIH0gZnJvbSAnLi9zY2hlbWEuZ2xvYmFsLWlkJztcbmltcG9ydCB7IFNjaGVtYURpc3BhdGNoZXIgfSBmcm9tICcuLi9kb21haW4vc2NoZW1hLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vcmVhZC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vZG9tYWluL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS91aS1hcGkvc3RydWN0dXJlLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY2hlbWFDb21tYW5kRGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzY2hlbWFEaXNwYXRjaGVyOiBTY2hlbWFEaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlcikge1xuXHR9XG5cblx0Y3JlYXRlKHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQgPSBzY2hlbWFHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hRGlzcGF0Y2hlci5jcmVhdGUoc2NoZW1hSWQudG9BZ2dyZWdhdGVJZCgpKTtcblx0fVxuXG5cdHNldFRoZW1lKHRoZW1lOiBTY2hlbWFUaGVtZSwgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCA9IHNjaGVtYUdsb2JhbElkLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hRGlzcGF0Y2hlci5zZXRUaGVtZSh0aGVtZSwgc2NoZW1hSWQudG9BZ2dyZWdhdGVJZCgpKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2V0Um93SGVpZ2h0QmFzZWRPblRoZW1lKHRoZW1lLCBzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRzZXRSb3dDb2xvcmluZyhyb3dDb2xvcmluZzogU2NoZW1hUm93Q29sb3JpbmcsIHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQgPSBzY2hlbWFHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hRGlzcGF0Y2hlci5zZXRSb3dDb2xvcmluZyhyb3dDb2xvcmluZywgc2NoZW1hSWQudG9BZ2dyZWdhdGVJZCgpKTtcblx0fVxuXG5cdHNldFZlcnRpY2FsR3JpZCh2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW4sIHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQgPSBzY2hlbWFHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hRGlzcGF0Y2hlci5zZXRWZXJ0aWNhbEdyaWQodmVydGljYWxHcmlkLCBzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0c2V0SG9yaXpvbnRhbEdyaWQoaG9yaXpvbnRhbEdyaWQ6IGJvb2xlYW4sIHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQgPSBzY2hlbWFHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hRGlzcGF0Y2hlci5zZXRIb3Jpem9udGFsR3JpZChob3Jpem9udGFsR3JpZCwgc2NoZW1hSWQudG9BZ2dyZWdhdGVJZCgpKTtcblx0fVxuXG59XG4iXX0=