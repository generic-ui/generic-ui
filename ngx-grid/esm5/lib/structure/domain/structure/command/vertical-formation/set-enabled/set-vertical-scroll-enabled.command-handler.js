/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { SetVerticalScrollEnabledCommand } from './set-vertical-scroll-enabled.command';
import { VerticalScrollEnabledSetEvent } from './vertical-scroll-enabled-set.event';
var SetVerticalScrollEnabledCommandHandler = /** @class */ (function () {
    function SetVerticalScrollEnabledCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    SetVerticalScrollEnabledCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return SetVerticalScrollEnabledCommand;
    };
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    SetVerticalScrollEnabledCommandHandler.prototype.handleAggregate = /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    function (structure, command) {
        /** @type {?} */
        var enabled = command.isEnabled();
        /** @type {?} */
        var formation = structure.getVerticalFormation();
        formation.setEnabled(enabled);
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SetVerticalScrollEnabledCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publish(new VerticalScrollEnabledSetEvent(command.getAggregateId()));
    };
    SetVerticalScrollEnabledCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetVerticalScrollEnabledCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return SetVerticalScrollEnabledCommandHandler;
}());
export { SetVerticalScrollEnabledCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetVerticalScrollEnabledCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXZlcnRpY2FsLXNjcm9sbC1lbmFibGVkLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvdmVydGljYWwtZm9ybWF0aW9uL3NldC1lbmFibGVkL3NldC12ZXJ0aWNhbC1zY3JvbGwtZW5hYmxlZC5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFrQixvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTFFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBSXBGO0lBR0MsZ0RBQTZCLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ3ZFLENBQUM7Ozs7SUFFRCwyREFBVTs7O0lBQVY7UUFDQyxPQUFPLCtCQUErQixDQUFDO0lBQ3hDLENBQUM7Ozs7OztJQUVELGdFQUFlOzs7OztJQUFmLFVBQWdCLFNBQTZCLEVBQUUsT0FBd0M7O1lBRWhGLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFOztZQUU3QixTQUFTLEdBQUcsU0FBUyxDQUFDLG9CQUFvQixFQUFFO1FBRWxELFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7O0lBRUQsb0VBQW1COzs7OztJQUFuQixVQUFvQixTQUE2QixFQUFFLE9BQXdDO1FBQzFGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSw2QkFBNkIsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7O2dCQXJCRCxVQUFVOzs7O2dCQVBjLG9CQUFvQjs7SUE4QjdDLDZDQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0F0Qlksc0NBQXNDOzs7Ozs7SUFFdEMsc0VBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTZXRWZXJ0aWNhbFNjcm9sbEVuYWJsZWRDb21tYW5kIH0gZnJvbSAnLi9zZXQtdmVydGljYWwtc2Nyb2xsLWVuYWJsZWQuY29tbWFuZCc7XG5pbXBvcnQgeyBWZXJ0aWNhbFNjcm9sbEVuYWJsZWRTZXRFdmVudCB9IGZyb20gJy4vdmVydGljYWwtc2Nyb2xsLWVuYWJsZWQtc2V0LmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXRWZXJ0aWNhbFNjcm9sbEVuYWJsZWRDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgU2V0VmVydGljYWxTY3JvbGxFbmFibGVkQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IFR5cGU8U2V0VmVydGljYWxTY3JvbGxFbmFibGVkQ29tbWFuZD4ge1xuXHRcdHJldHVybiBTZXRWZXJ0aWNhbFNjcm9sbEVuYWJsZWRDb21tYW5kO1xuXHR9XG5cblx0aGFuZGxlQWdncmVnYXRlKHN0cnVjdHVyZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTZXRWZXJ0aWNhbFNjcm9sbEVuYWJsZWRDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBlbmFibGVkID0gY29tbWFuZC5pc0VuYWJsZWQoKTtcblxuXHRcdGNvbnN0IGZvcm1hdGlvbiA9IHN0cnVjdHVyZS5nZXRWZXJ0aWNhbEZvcm1hdGlvbigpO1xuXG5cdFx0Zm9ybWF0aW9uLnNldEVuYWJsZWQoZW5hYmxlZCk7XG5cdH1cblxuXHRwdWJsaXNoRG9tYWluRXZlbnRzKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTZXRWZXJ0aWNhbFNjcm9sbEVuYWJsZWRDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBWZXJ0aWNhbFNjcm9sbEVuYWJsZWRTZXRFdmVudChjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCkpKTtcblx0fVxuXG59XG4iXX0=