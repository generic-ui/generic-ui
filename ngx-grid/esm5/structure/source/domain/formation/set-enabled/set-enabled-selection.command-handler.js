/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { SetEnabledSelectionCommand } from './set-enabled-selection.command';
var SetEnabledSelectionCommandHandler = /** @class */ (function () {
    function SetEnabledSelectionCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    SetEnabledSelectionCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return SetEnabledSelectionCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SetEnabledSelectionCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SetEnabledSelectionCommandHandler.prototype.handleAggregate = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        aggregate.setSelection(command.isEnabled());
    };
    SetEnabledSelectionCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetEnabledSelectionCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return SetEnabledSelectionCommandHandler;
}());
export { SetEnabledSelectionCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetEnabledSelectionCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWVuYWJsZWQtc2VsZWN0aW9uLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9kb21haW4vZm9ybWF0aW9uL3NldC1lbmFibGVkL3NldC1lbmFibGVkLXNlbGVjdGlvbi5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUErQixvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBSTdFO0lBR0MsMkNBQTZCLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ3ZFLENBQUM7Ozs7SUFFRCxzREFBVTs7O0lBQVY7UUFDQyxPQUFPLDBCQUEwQixDQUFDO0lBQ25DLENBQUM7Ozs7OztJQUVELCtEQUFtQjs7Ozs7SUFBbkIsVUFBb0IsU0FBNkIsRUFBRSxPQUFtQztRQUNyRixJQUFJLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7O0lBRUQsMkRBQWU7Ozs7O0lBQWYsVUFBZ0IsU0FBNkIsRUFBRSxPQUFtQztRQUNqRixTQUFTLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7O2dCQWhCRCxVQUFVOzs7O2dCQU4yQixvQkFBb0I7O0lBd0IxRCx3Q0FBQztDQUFBLEFBbEJELElBa0JDO1NBakJZLGlDQUFpQzs7Ozs7O0lBRWpDLGlFQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIENvbW1hbmRUeXBlLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNldEVuYWJsZWRTZWxlY3Rpb25Db21tYW5kIH0gZnJvbSAnLi9zZXQtZW5hYmxlZC1zZWxlY3Rpb24uY29tbWFuZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2V0RW5hYmxlZFNlbGVjdGlvbkNvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8U3RydWN0dXJlQWdncmVnYXRlLCBTZXRFbmFibGVkU2VsZWN0aW9uQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IENvbW1hbmRUeXBlPFNldEVuYWJsZWRTZWxlY3Rpb25Db21tYW5kPiB7XG5cdFx0cmV0dXJuIFNldEVuYWJsZWRTZWxlY3Rpb25Db21tYW5kO1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0RW5hYmxlZFNlbGVjdGlvbkNvbW1hbmQpOiB2b2lkIHtcblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2hGcm9tQWdncmVnYXRlKGFnZ3JlZ2F0ZSk7XG5cdH1cblxuXHRoYW5kbGVBZ2dyZWdhdGUoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldEVuYWJsZWRTZWxlY3Rpb25Db21tYW5kKTogdm9pZCB7XG5cdFx0YWdncmVnYXRlLnNldFNlbGVjdGlvbihjb21tYW5kLmlzRW5hYmxlZCgpKTtcblx0fVxuXG59XG4iXX0=