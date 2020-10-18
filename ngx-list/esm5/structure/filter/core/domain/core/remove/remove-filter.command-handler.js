/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { RemoveFilterCommand } from './remove-filter.command';
var RemoveFilterCommandHandler = /** @class */ (function () {
    function RemoveFilterCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    RemoveFilterCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return RemoveFilterCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    RemoveFilterCommandHandler.prototype.publishDomainEvents = /**
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
    RemoveFilterCommandHandler.prototype.handleAggregate = /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    function (structure, command) {
        /** @type {?} */
        var filterId = command.getFilterId();
        structure.removeFilter(filterId);
    };
    RemoveFilterCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    RemoveFilterCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return RemoveFilterCommandHandler;
}());
export { RemoveFilterCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    RemoveFilterCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLWZpbHRlci5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvY29yZS9kb21haW4vY29yZS9yZW1vdmUvcmVtb3ZlLWZpbHRlci5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUErQixvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBSTlEO0lBR0Msb0NBQW9CLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQzlELENBQUM7Ozs7SUFFRCwrQ0FBVTs7O0lBQVY7UUFDQyxPQUFPLG1CQUFtQixDQUFDO0lBQzVCLENBQUM7Ozs7OztJQUVELHdEQUFtQjs7Ozs7SUFBbkIsVUFBb0IsU0FBNkIsRUFBRSxPQUE0QjtRQUM5RSxJQUFJLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7O0lBRUQsb0RBQWU7Ozs7O0lBQWYsVUFBZ0IsU0FBNkIsRUFBRSxPQUE0Qjs7WUFFcEUsUUFBUSxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUU7UUFFdEMsU0FBUyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxDQUFDOztnQkFuQkQsVUFBVTs7OztnQkFOMkIsb0JBQW9COztJQTJCMUQsaUNBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQXBCWSwwQkFBMEI7Ozs7OztJQUUxQiwwREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBSZW1vdmVGaWx0ZXJDb21tYW5kIH0gZnJvbSAnLi9yZW1vdmUtZmlsdGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlbW92ZUZpbHRlckNvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8U3RydWN0dXJlQWdncmVnYXRlLCBSZW1vdmVGaWx0ZXJDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogQ29tbWFuZFR5cGU8UmVtb3ZlRmlsdGVyQ29tbWFuZD4ge1xuXHRcdHJldHVybiBSZW1vdmVGaWx0ZXJDb21tYW5kO1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogUmVtb3ZlRmlsdGVyQ29tbWFuZCk6IHZvaWQge1xuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaEZyb21BZ2dyZWdhdGUoYWdncmVnYXRlKTtcblx0fVxuXG5cdGhhbmRsZUFnZ3JlZ2F0ZShzdHJ1Y3R1cmU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogUmVtb3ZlRmlsdGVyQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmlsdGVySWQgPSBjb21tYW5kLmdldEZpbHRlcklkKCk7XG5cblx0XHRzdHJ1Y3R1cmUucmVtb3ZlRmlsdGVyKGZpbHRlcklkKTtcblx0fVxuXG59XG4iXX0=