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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0aW9uLmNvbW1hbmQtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvc3RydWN0dXJlL2FnZ3JlZ2F0aW9uL3N0cnVjdHVyZS5hZ2dyZWdhdGlvbi5jb21tYW5kLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkQsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sNkZBQTZGLENBQUM7QUFJcEo7SUFHQyw0Q0FBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDeEQsQ0FBQzs7Ozs7O0lBRUQsa0VBQXFCOzs7OztJQUFyQixVQUFzQixPQUFnQixFQUFFLFdBQXdCO1FBQy9ELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxxQ0FBcUMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNsRyxDQUFDOztnQkFSRCxVQUFVOzs7O2dCQU5GLGlCQUFpQjs7SUFnQjFCLHlDQUFDO0NBQUEsQUFWRCxJQVVDO1NBVFksa0NBQWtDOzs7Ozs7SUFFbEMsK0RBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU2V0QWdncmVnYXRpb25FbmFibGVkQ29tbWFuZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9hZ2dyZWdhdGlvbi9zZXQvc3RydWN0dXJlLnNldC1hZ2dyZWdhdGlvbi1lbmFibGVkLmNvbW1hbmQnO1xuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUFnZ3JlZ2F0aW9uQ29tbWFuZFNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyKSB7XG5cdH1cblxuXHRzZXRBZ2dyZWdhdGlvbkVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU3RydWN0dXJlU2V0QWdncmVnYXRpb25FbmFibGVkQ29tbWFuZChzdHJ1Y3R1cmVJZCwgZW5hYmxlZCkpO1xuXHR9XG5cbn1cbiJdfQ==