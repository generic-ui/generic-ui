/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { UnselectUniqueFilterCommand } from './unselect-unique-filter.command';
var UnselectUniqueFilterCommandHandler = /** @class */ (function () {
    function UnselectUniqueFilterCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    UnselectUniqueFilterCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return UnselectUniqueFilterCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    UnselectUniqueFilterCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    };
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    UnselectUniqueFilterCommandHandler.prototype.handleAggregate = /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    function (structure, command) {
        /** @type {?} */
        var fieldId = command.getFieldId();
        /** @type {?} */
        var uniqueValueId = command.getUniqueValueId();
        structure.unselectUniqueFilter(fieldId, uniqueValueId);
    };
    UnselectUniqueFilterCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UnselectUniqueFilterCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return UnselectUniqueFilterCommandHandler;
}());
export { UnselectUniqueFilterCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UnselectUniqueFilterCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5zZWxlY3QtdW5pcXVlLWZpbHRlci5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvY29yZS9kb21haW4vdW5pcXVlL3Vuc2VsZWN0L3Vuc2VsZWN0LXVuaXF1ZS1maWx0ZXIuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBK0Isb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUsvRTtJQUdDLDRDQUFvQixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUM5RCxDQUFDOzs7O0lBRUQsdURBQVU7OztJQUFWO1FBQ0MsT0FBTywyQkFBMkIsQ0FBQztJQUNwQyxDQUFDOzs7Ozs7SUFFRCxnRUFBbUI7Ozs7O0lBQW5CLFVBQW9CLFNBQTZCLEVBQUUsT0FBb0M7UUFDdEYsSUFBSSxDQUFDLG9CQUFvQixDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7OztJQUVELDREQUFlOzs7OztJQUFmLFVBQWdCLFNBQTZCLEVBQUUsT0FBb0M7O1lBRTVFLE9BQU8sR0FBWSxPQUFPLENBQUMsVUFBVSxFQUFFOztZQUM1QyxhQUFhLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixFQUFFO1FBRTNDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Z0JBcEJELFVBQVU7Ozs7Z0JBUDJCLG9CQUFvQjs7SUE2QjFELHlDQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FyQlksa0NBQWtDOzs7Ozs7SUFFbEMsa0VBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgQ29tbWFuZFR5cGUsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgVW5zZWxlY3RVbmlxdWVGaWx0ZXJDb21tYW5kIH0gZnJvbSAnLi91bnNlbGVjdC11bmlxdWUtZmlsdGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVbnNlbGVjdFVuaXF1ZUZpbHRlckNvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8U3RydWN0dXJlQWdncmVnYXRlLCBVbnNlbGVjdFVuaXF1ZUZpbHRlckNvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxVbnNlbGVjdFVuaXF1ZUZpbHRlckNvbW1hbmQ+IHtcblx0XHRyZXR1cm4gVW5zZWxlY3RVbmlxdWVGaWx0ZXJDb21tYW5kO1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogVW5zZWxlY3RVbmlxdWVGaWx0ZXJDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoRnJvbUFnZ3JlZ2F0ZShhZ2dyZWdhdGUpO1xuXHR9XG5cblx0aGFuZGxlQWdncmVnYXRlKHN0cnVjdHVyZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBVbnNlbGVjdFVuaXF1ZUZpbHRlckNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpZWxkSWQ6IEZpZWxkSWQgPSBjb21tYW5kLmdldEZpZWxkSWQoKSxcblx0XHRcdHVuaXF1ZVZhbHVlSWQgPSBjb21tYW5kLmdldFVuaXF1ZVZhbHVlSWQoKTtcblxuXHRcdHN0cnVjdHVyZS51bnNlbGVjdFVuaXF1ZUZpbHRlcihmaWVsZElkLCB1bmlxdWVWYWx1ZUlkKTtcblx0fVxuXG59XG4iXX0=