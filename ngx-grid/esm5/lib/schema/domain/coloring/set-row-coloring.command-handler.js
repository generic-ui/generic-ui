/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { SetRowColoringCommand } from './set-row-coloring.command';
import { RowColoringSetEvent } from './row-coloring-set.event';
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
        this.domainEventPublisher.publish(new RowColoringSetEvent(command.getAggregateId()));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXJvdy1jb2xvcmluZy5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zY2hlbWEvZG9tYWluL2NvbG9yaW5nL3NldC1yb3ctY29sb3JpbmcuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBMkIsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUkvRDtJQUdDLHNDQUFvQixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUM5RCxDQUFDOzs7O0lBRUQsaURBQVU7OztJQUFWO1FBQ0MsT0FBTyxxQkFBcUIsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFRCwwREFBbUI7Ozs7O0lBQW5CLFVBQW9CLFNBQTBCLEVBQUUsT0FBZ0I7UUFDL0QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEYsQ0FBQzs7Ozs7O0lBRUQsc0RBQWU7Ozs7O0lBQWYsVUFBZ0IsZUFBZ0MsRUFBRSxPQUE4Qjs7WUFFekUsUUFBUSxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUU7UUFFdEMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQyxDQUFDOztnQkFuQkQsVUFBVTs7OztnQkFQdUIsb0JBQW9COztJQTRCdEQsbUNBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQXBCWSw0QkFBNEI7Ozs7OztJQUU1Qiw0REFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmQsIENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNldFJvd0NvbG9yaW5nQ29tbWFuZCB9IGZyb20gJy4vc2V0LXJvdy1jb2xvcmluZy5jb21tYW5kJztcbmltcG9ydCB7IFJvd0NvbG9yaW5nU2V0RXZlbnQgfSBmcm9tICcuL3Jvdy1jb2xvcmluZy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hQWdncmVnYXRlIH0gZnJvbSAnLi4vc2NoZW1hLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNldFJvd0NvbG9yaW5nQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxTY2hlbWFBZ2dyZWdhdGUsIFNldFJvd0NvbG9yaW5nQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IFR5cGU8U2V0Um93Q29sb3JpbmdDb21tYW5kPiB7XG5cdFx0cmV0dXJuIFNldFJvd0NvbG9yaW5nQ29tbWFuZDtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBTY2hlbWFBZ2dyZWdhdGUsIGNvbW1hbmQ6IENvbW1hbmQpOiB2b2lkIHtcblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gobmV3IFJvd0NvbG9yaW5nU2V0RXZlbnQoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpKSk7XG5cdH1cblxuXHRoYW5kbGVBZ2dyZWdhdGUoc2NoZW1hQWdncmVnYXRlOiBTY2hlbWFBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldFJvd0NvbG9yaW5nQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgY29sb3JpbmcgPSBjb21tYW5kLmdldENvbG9yaW5nKCk7XG5cblx0XHRzY2hlbWFBZ2dyZWdhdGUuc2V0Um93Q29sb3JpbmcoY29sb3JpbmcpO1xuXHR9XG5cbn1cbiJdfQ==