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
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    UnselectUniqueFilterCommandHandler.prototype.handle = /**
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
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    UnselectUniqueFilterCommandHandler.prototype.publish = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5zZWxlY3QtdW5pcXVlLWZpbHRlci5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvY29yZS9kb21haW4vdW5pcXVlL3Vuc2VsZWN0L3Vuc2VsZWN0LXVuaXF1ZS1maWx0ZXIuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBK0Isb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUsvRTtJQUdDLDRDQUFvQixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUM5RCxDQUFDOzs7O0lBRUQsdURBQVU7OztJQUFWO1FBQ0MsT0FBTywyQkFBMkIsQ0FBQztJQUNwQyxDQUFDOzs7Ozs7SUFFRCxtREFBTTs7Ozs7SUFBTixVQUFPLFNBQTZCLEVBQUUsT0FBb0M7O1lBRW5FLE9BQU8sR0FBWSxPQUFPLENBQUMsVUFBVSxFQUFFOztZQUM1QyxhQUFhLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixFQUFFO1FBRTNDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7O0lBRUQsb0RBQU87Ozs7O0lBQVAsVUFBUSxTQUE2QixFQUFFLE9BQW9DO1FBQzFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzRCxDQUFDOztnQkFwQkQsVUFBVTs7OztnQkFQMkIsb0JBQW9COztJQTZCMUQseUNBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQXJCWSxrQ0FBa0M7Ozs7OztJQUVsQyxrRUFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBVbnNlbGVjdFVuaXF1ZUZpbHRlckNvbW1hbmQgfSBmcm9tICcuL3Vuc2VsZWN0LXVuaXF1ZS1maWx0ZXIuY29tbWFuZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZC5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVuc2VsZWN0VW5pcXVlRmlsdGVyQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGUsIFVuc2VsZWN0VW5pcXVlRmlsdGVyQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IENvbW1hbmRUeXBlPFVuc2VsZWN0VW5pcXVlRmlsdGVyQ29tbWFuZD4ge1xuXHRcdHJldHVybiBVbnNlbGVjdFVuaXF1ZUZpbHRlckNvbW1hbmQ7XG5cdH1cblxuXHRoYW5kbGUoc3RydWN0dXJlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFVuc2VsZWN0VW5pcXVlRmlsdGVyQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmllbGRJZDogRmllbGRJZCA9IGNvbW1hbmQuZ2V0RmllbGRJZCgpLFxuXHRcdFx0dW5pcXVlVmFsdWVJZCA9IGNvbW1hbmQuZ2V0VW5pcXVlVmFsdWVJZCgpO1xuXG5cdFx0c3RydWN0dXJlLnVuc2VsZWN0VW5pcXVlRmlsdGVyKGZpZWxkSWQsIHVuaXF1ZVZhbHVlSWQpO1xuXHR9XG5cblx0cHVibGlzaChhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogVW5zZWxlY3RVbmlxdWVGaWx0ZXJDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoRnJvbUFnZ3JlZ2F0ZShhZ2dyZWdhdGUpO1xuXHR9XG5cbn1cbiJdfQ==