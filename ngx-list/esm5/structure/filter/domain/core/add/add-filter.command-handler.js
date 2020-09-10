/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { AddFilterCommand } from './add-filter.command';
var AddFilterCommandHandler = /** @class */ (function () {
    function AddFilterCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    AddFilterCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return AddFilterCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    AddFilterCommandHandler.prototype.publishDomainEvents = /**
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
    AddFilterCommandHandler.prototype.handleAggregate = /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    function (structure, command) {
        /** @type {?} */
        var fieldId = command.getFieldId();
        /** @type {?} */
        var filterTypeId = command.getFilterTypeId();
        /** @type {?} */
        var value = command.getValue();
        structure.addFilter(fieldId, filterTypeId, value);
    };
    AddFilterCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AddFilterCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return AddFilterCommandHandler;
}());
export { AddFilterCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AddFilterCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWZpbHRlci5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvZG9tYWluL2NvcmUvYWRkL2FkZC1maWx0ZXIuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBK0Isb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQU14RDtJQUdDLGlDQUFvQixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUM5RCxDQUFDOzs7O0lBRUQsNENBQVU7OztJQUFWO1FBQ0MsT0FBTyxnQkFBZ0IsQ0FBQztJQUN6QixDQUFDOzs7Ozs7SUFFRCxxREFBbUI7Ozs7O0lBQW5CLFVBQW9CLFNBQTZCLEVBQUUsT0FBeUI7UUFDM0UsSUFBSSxDQUFDLG9CQUFvQixDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7OztJQUVELGlEQUFlOzs7OztJQUFmLFVBQWdCLFNBQTZCLEVBQUUsT0FBeUI7O1lBRWpFLE9BQU8sR0FBWSxPQUFPLENBQUMsVUFBVSxFQUFFOztZQUM1QyxZQUFZLEdBQWlCLE9BQU8sQ0FBQyxlQUFlLEVBQUU7O1lBQ3RELEtBQUssR0FBUSxPQUFPLENBQUMsUUFBUSxFQUFFO1FBRWhDLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuRCxDQUFDOztnQkFyQkQsVUFBVTs7OztnQkFSMkIsb0JBQW9COztJQStCMUQsOEJBQUM7Q0FBQSxBQXZCRCxJQXVCQztTQXRCWSx1QkFBdUI7Ozs7OztJQUV2Qix1REFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBBZGRGaWx0ZXJDb21tYW5kIH0gZnJvbSAnLi9hZGQtZmlsdGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUlkIH0gZnJvbSAnLi4vLi4vdHlwZS9maWx0ZXItdHlwZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFkZEZpbHRlckNvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8U3RydWN0dXJlQWdncmVnYXRlLCBBZGRGaWx0ZXJDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogQ29tbWFuZFR5cGU8QWRkRmlsdGVyQ29tbWFuZD4ge1xuXHRcdHJldHVybiBBZGRGaWx0ZXJDb21tYW5kO1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogQWRkRmlsdGVyQ29tbWFuZCk6IHZvaWQge1xuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaEZyb21BZ2dyZWdhdGUoYWdncmVnYXRlKTtcblx0fVxuXG5cdGhhbmRsZUFnZ3JlZ2F0ZShzdHJ1Y3R1cmU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogQWRkRmlsdGVyQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmllbGRJZDogRmllbGRJZCA9IGNvbW1hbmQuZ2V0RmllbGRJZCgpLFxuXHRcdFx0ZmlsdGVyVHlwZUlkOiBGaWx0ZXJUeXBlSWQgPSBjb21tYW5kLmdldEZpbHRlclR5cGVJZCgpLFxuXHRcdFx0dmFsdWU6IGFueSA9IGNvbW1hbmQuZ2V0VmFsdWUoKTtcblxuXHRcdHN0cnVjdHVyZS5hZGRGaWx0ZXIoZmllbGRJZCwgZmlsdGVyVHlwZUlkLCB2YWx1ZSk7XG5cdH1cblxufVxuIl19