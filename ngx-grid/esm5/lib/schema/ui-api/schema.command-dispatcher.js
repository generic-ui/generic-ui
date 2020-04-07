/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { schemaGlobalId } from './schema.global-id';
import { SchemaDispatcher } from '../domain/schema.dispatcher';
import { structureGlobalId } from '../../structure/ui-api/structure.global-id';
import { StructureCommandDispatcher } from '../../structure/ui-api/structure/structure.command-dispatcher';
var SchemaCommandDispatcher = /** @class */ (function () {
    function SchemaCommandDispatcher(schemaDispatcher, structureCommandService) {
        this.schemaDispatcher = schemaDispatcher;
        this.structureCommandService = structureCommandService;
    }
    /**
     * @param {?=} schemaId
     * @return {?}
     */
    SchemaCommandDispatcher.prototype.create = /**
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
    SchemaCommandDispatcher.prototype.setTheme = /**
     * @param {?} theme
     * @param {?=} schemaId
     * @param {?=} structureId
     * @return {?}
     */
    function (theme, schemaId, structureId) {
        if (schemaId === void 0) { schemaId = schemaGlobalId; }
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.schemaDispatcher.setTheme(theme, schemaId.toAggregateId());
        this.structureCommandService.setRowHeightBasedOnTheme(theme, structureId);
    };
    /**
     * @param {?} rowColoring
     * @param {?=} schemaId
     * @return {?}
     */
    SchemaCommandDispatcher.prototype.setRowColoring = /**
     * @param {?} rowColoring
     * @param {?=} schemaId
     * @return {?}
     */
    function (rowColoring, schemaId) {
        if (schemaId === void 0) { schemaId = schemaGlobalId; }
        this.schemaDispatcher.setRowColoring(rowColoring, schemaId.toAggregateId());
    };
    /**
     * @param {?} verticalGrid
     * @param {?=} schemaId
     * @return {?}
     */
    SchemaCommandDispatcher.prototype.setVerticalGrid = /**
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
    SchemaCommandDispatcher.prototype.setHorizontalGrid = /**
     * @param {?} horizontalGrid
     * @param {?=} schemaId
     * @return {?}
     */
    function (horizontalGrid, schemaId) {
        if (schemaId === void 0) { schemaId = schemaGlobalId; }
        this.schemaDispatcher.setHorizontalGrid(horizontalGrid, schemaId.toAggregateId());
    };
    SchemaCommandDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SchemaCommandDispatcher.ctorParameters = function () { return [
        { type: SchemaDispatcher },
        { type: StructureCommandDispatcher }
    ]; };
    return SchemaCommandDispatcher;
}());
export { SchemaCommandDispatcher };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3NjaGVtYS91aS1hcGkvc2NoZW1hLmNvbW1hbmQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFJL0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFHM0c7SUFHQyxpQ0FBNkIsZ0JBQWtDLEVBQzNDLHVCQUFtRDtRQUQxQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzNDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBNEI7SUFDdkUsQ0FBQzs7Ozs7SUFFRCx3Q0FBTTs7OztJQUFOLFVBQU8sUUFBZ0Q7UUFBaEQseUJBQUEsRUFBQSx5QkFBZ0Q7UUFDdEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7Ozs7O0lBRUQsMENBQVE7Ozs7OztJQUFSLFVBQVMsS0FBa0IsRUFBRSxRQUFnRCxFQUFFLFdBQTRDO1FBQTlGLHlCQUFBLEVBQUEseUJBQWdEO1FBQUUsNEJBQUEsRUFBQSwrQkFBNEM7UUFDMUgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFFaEUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLHdCQUF3QixDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMzRSxDQUFDOzs7Ozs7SUFFRCxnREFBYzs7Ozs7SUFBZCxVQUFlLFdBQThCLEVBQUUsUUFBZ0Q7UUFBaEQseUJBQUEsRUFBQSx5QkFBZ0Q7UUFDOUYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7Ozs7O0lBRUQsaURBQWU7Ozs7O0lBQWYsVUFBZ0IsWUFBcUIsRUFBRSxRQUFnRDtRQUFoRCx5QkFBQSxFQUFBLHlCQUFnRDtRQUN0RixJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUMvRSxDQUFDOzs7Ozs7SUFFRCxtREFBaUI7Ozs7O0lBQWpCLFVBQWtCLGNBQXVCLEVBQUUsUUFBZ0Q7UUFBaEQseUJBQUEsRUFBQSx5QkFBZ0Q7UUFDMUYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUNuRixDQUFDOztnQkEzQkQsVUFBVTs7OztnQkFSRixnQkFBZ0I7Z0JBS2hCLDBCQUEwQjs7SUFnQ25DLDhCQUFDO0NBQUEsQUE3QkQsSUE2QkM7U0E1QlksdUJBQXVCOzs7Ozs7SUFFdkIsbURBQW1EOzs7OztJQUM1RCwwREFBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vZG9tYWluL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBzY2hlbWFHbG9iYWxJZCB9IGZyb20gJy4vc2NoZW1hLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBTY2hlbWFEaXNwYXRjaGVyIH0gZnJvbSAnLi4vZG9tYWluL3NjaGVtYS5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uL3JlYWQvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uL2RvbWFpbi9zY2hlbWEtcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgc3RydWN0dXJlR2xvYmFsSWQgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUvdWktYXBpL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUvdWktYXBpL3N0cnVjdHVyZS9zdHJ1Y3R1cmUuY29tbWFuZC1kaXNwYXRjaGVyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NoZW1hQ29tbWFuZERpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hRGlzcGF0Y2hlcjogU2NoZW1hRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIpIHtcblx0fVxuXG5cdGNyZWF0ZShzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkID0gc2NoZW1hR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYURpc3BhdGNoZXIuY3JlYXRlKHNjaGVtYUlkLnRvQWdncmVnYXRlSWQoKSk7XG5cdH1cblxuXHRzZXRUaGVtZSh0aGVtZTogU2NoZW1hVGhlbWUsIHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQgPSBzY2hlbWFHbG9iYWxJZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYURpc3BhdGNoZXIuc2V0VGhlbWUodGhlbWUsIHNjaGVtYUlkLnRvQWdncmVnYXRlSWQoKSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLnNldFJvd0hlaWdodEJhc2VkT25UaGVtZSh0aGVtZSwgc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0c2V0Um93Q29sb3Jpbmcocm93Q29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nLCBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkID0gc2NoZW1hR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYURpc3BhdGNoZXIuc2V0Um93Q29sb3Jpbmcocm93Q29sb3JpbmcsIHNjaGVtYUlkLnRvQWdncmVnYXRlSWQoKSk7XG5cdH1cblxuXHRzZXRWZXJ0aWNhbEdyaWQodmVydGljYWxHcmlkOiBib29sZWFuLCBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkID0gc2NoZW1hR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYURpc3BhdGNoZXIuc2V0VmVydGljYWxHcmlkKHZlcnRpY2FsR3JpZCwgc2NoZW1hSWQudG9BZ2dyZWdhdGVJZCgpKTtcblx0fVxuXG5cdHNldEhvcml6b250YWxHcmlkKGhvcml6b250YWxHcmlkOiBib29sZWFuLCBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkID0gc2NoZW1hR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYURpc3BhdGNoZXIuc2V0SG9yaXpvbnRhbEdyaWQoaG9yaXpvbnRhbEdyaWQsIHNjaGVtYUlkLnRvQWdncmVnYXRlSWQoKSk7XG5cdH1cblxufVxuIl19