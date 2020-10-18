/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { SetRowColoringCommand } from './set-row-coloring.command';
var SetRowColoringCommandHandler = /** @class */ (function () {
    function SetRowColoringCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    SetRowColoringCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return SetRowColoringCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SetRowColoringCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    };
    /**
     * @param {?} schemaAggregate
     * @param {?} command
     * @return {?}
     */
    SetRowColoringCommandHandler.prototype.handleAggregate = /**
     * @param {?} schemaAggregate
     * @param {?} command
     * @return {?}
     */
    function (schemaAggregate, command) {
        /** @type {?} */
        var coloring = command.getColoring();
        schemaAggregate.setRowColoring(coloring);
    };
    SetRowColoringCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetRowColoringCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return SetRowColoringCommandHandler;
}());
export { SetRowColoringCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetRowColoringCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXJvdy1jb2xvcmluZy5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInNjaGVtYS9jb3JlL2RvbWFpbi9yb3ctY29sb3Jpbmcvc2V0LXJvdy1jb2xvcmluZy5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUErQixvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBSW5FO0lBR0Msc0NBQW9CLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQzlELENBQUM7Ozs7SUFFRCxpREFBVTs7O0lBQVY7UUFDQyxPQUFPLHFCQUFxQixDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUVELDBEQUFtQjs7Ozs7SUFBbkIsVUFBb0IsU0FBMEIsRUFBRSxPQUE4QjtRQUM3RSxJQUFJLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7O0lBRUQsc0RBQWU7Ozs7O0lBQWYsVUFBZ0IsZUFBZ0MsRUFBRSxPQUE4Qjs7WUFFekUsUUFBUSxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUU7UUFDdEMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQyxDQUFDOztnQkFsQkQsVUFBVTs7OztnQkFOMkIsb0JBQW9COztJQTBCMUQsbUNBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQW5CWSw0QkFBNEI7Ozs7OztJQUU1Qiw0REFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTZXRSb3dDb2xvcmluZ0NvbW1hbmQgfSBmcm9tICcuL3NldC1yb3ctY29sb3JpbmcuY29tbWFuZCc7XG5pbXBvcnQgeyBTY2hlbWFBZ2dyZWdhdGUgfSBmcm9tICcuLi9zY2hlbWEuYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2V0Um93Q29sb3JpbmdDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFNjaGVtYUFnZ3JlZ2F0ZSwgU2V0Um93Q29sb3JpbmdDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogQ29tbWFuZFR5cGU8U2V0Um93Q29sb3JpbmdDb21tYW5kPiB7XG5cdFx0cmV0dXJuIFNldFJvd0NvbG9yaW5nQ29tbWFuZDtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBTY2hlbWFBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldFJvd0NvbG9yaW5nQ29tbWFuZCk6IHZvaWQge1xuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaEZyb21BZ2dyZWdhdGUoYWdncmVnYXRlKTtcblx0fVxuXG5cdGhhbmRsZUFnZ3JlZ2F0ZShzY2hlbWFBZ2dyZWdhdGU6IFNjaGVtYUFnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0Um93Q29sb3JpbmdDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBjb2xvcmluZyA9IGNvbW1hbmQuZ2V0Q29sb3JpbmcoKTtcblx0XHRzY2hlbWFBZ2dyZWdhdGUuc2V0Um93Q29sb3JpbmcoY29sb3JpbmcpO1xuXHR9XG5cbn1cbiJdfQ==