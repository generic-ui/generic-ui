/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureSetAggregationEnabledCommand } from '../../../domain/structure/aggregation/set/structure.set-aggregation-enabled.command';
var StructureAggregationCommandDispatcher = /** @class */ (function () {
    function StructureAggregationCommandDispatcher(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    StructureAggregationCommandDispatcher.prototype.setAggregationEnabled = /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        this.commandDispatcher.dispatch(new StructureSetAggregationEnabledCommand(structureId, enabled));
    };
    StructureAggregationCommandDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureAggregationCommandDispatcher.ctorParameters = function () { return [
        { type: CommandDispatcher }
    ]; };
    return StructureAggregationCommandDispatcher;
}());
export { StructureAggregationCommandDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureAggregationCommandDispatcher.prototype.commandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWFnZ3JlZ2F0aW9uLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvc3RydWN0dXJlL2FnZ3JlZ2F0aW9uL3N0cnVjdHVyZS1hZ2dyZWdhdGlvbi5jb21tYW5kLWRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkQsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0scUZBQXFGLENBQUM7QUFHNUk7SUFHQywrQ0FBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDeEQsQ0FBQzs7Ozs7O0lBRUQscUVBQXFCOzs7OztJQUFyQixVQUFzQixPQUFnQixFQUFFLFdBQXdCO1FBQy9ELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxxQ0FBcUMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNsRyxDQUFDOztnQkFSRCxVQUFVOzs7O2dCQUxGLGlCQUFpQjs7SUFlMUIsNENBQUM7Q0FBQSxBQVZELElBVUM7U0FUWSxxQ0FBcUM7Ozs7OztJQUVyQyxrRUFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZXRBZ2dyZWdhdGlvbkVuYWJsZWRDb21tYW5kIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9hZ2dyZWdhdGlvbi9zZXQvc3RydWN0dXJlLnNldC1hZ2dyZWdhdGlvbi1lbmFibGVkLmNvbW1hbmQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVBZ2dyZWdhdGlvbkNvbW1hbmREaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcikge1xuXHR9XG5cblx0c2V0QWdncmVnYXRpb25FbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFN0cnVjdHVyZVNldEFnZ3JlZ2F0aW9uRW5hYmxlZENvbW1hbmQoc3RydWN0dXJlSWQsIGVuYWJsZWQpKTtcblx0fVxuXG59XG4iXX0=