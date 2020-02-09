/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureSetAggregationEnabledCommand } from '../../../domain/structure/command/aggregation/set/structure.set-aggregation-enabled.command';
var StructureAggregationCommandService = /** @class */ (function () {
    function StructureAggregationCommandService(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    StructureAggregationCommandService.prototype.setAggregationEnabled = /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        this.commandDispatcher.dispatch(new StructureSetAggregationEnabledCommand(structureId, enabled));
    };
    StructureAggregationCommandService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureAggregationCommandService.ctorParameters = function () { return [
        { type: CommandDispatcher }
    ]; };
    return StructureAggregationCommandService;
}());
export { StructureAggregationCommandService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureAggregationCommandService.prototype.commandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0aW9uLmNvbW1hbmQtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvc3RydWN0dXJlL2FnZ3JlZ2F0aW9uL3N0cnVjdHVyZS5hZ2dyZWdhdGlvbi5jb21tYW5kLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkQsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sNkZBQTZGLENBQUM7QUFHcEo7SUFHQyw0Q0FBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDeEQsQ0FBQzs7Ozs7O0lBRUQsa0VBQXFCOzs7OztJQUFyQixVQUFzQixPQUFnQixFQUFFLFdBQXdCO1FBQy9ELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxxQ0FBcUMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNsRyxDQUFDOztnQkFSRCxVQUFVOzs7O2dCQUxGLGlCQUFpQjs7SUFlMUIseUNBQUM7Q0FBQSxBQVZELElBVUM7U0FUWSxrQ0FBa0M7Ozs7OztJQUVsQywrREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZXRBZ2dyZWdhdGlvbkVuYWJsZWRDb21tYW5kIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2FnZ3JlZ2F0aW9uL3NldC9zdHJ1Y3R1cmUuc2V0LWFnZ3JlZ2F0aW9uLWVuYWJsZWQuY29tbWFuZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUFnZ3JlZ2F0aW9uQ29tbWFuZFNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyKSB7XG5cdH1cblxuXHRzZXRBZ2dyZWdhdGlvbkVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU3RydWN0dXJlU2V0QWdncmVnYXRpb25FbmFibGVkQ29tbWFuZChzdHJ1Y3R1cmVJZCwgZW5hYmxlZCkpO1xuXHR9XG5cbn1cbiJdfQ==