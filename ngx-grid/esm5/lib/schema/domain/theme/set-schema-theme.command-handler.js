/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { SetSchemaThemeCommand } from './set-schema-theme.command';
import { SchemaThemeSetEvent } from './schema-theme-set.event';
var SetSchemaThemeCommandHandler = /** @class */ (function () {
    function SetSchemaThemeCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    SetSchemaThemeCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return SetSchemaThemeCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SetSchemaThemeCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publish(new SchemaThemeSetEvent(command.getAggregateId()));
    };
    /**
     * @param {?} schemaAggregate
     * @param {?} command
     * @return {?}
     */
    SetSchemaThemeCommandHandler.prototype.handleAggregate = /**
     * @param {?} schemaAggregate
     * @param {?} command
     * @return {?}
     */
    function (schemaAggregate, command) {
        /** @type {?} */
        var theme = command.getTheme();
        schemaAggregate.setTheme(theme);
    };
    SetSchemaThemeCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetSchemaThemeCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return SetSchemaThemeCommandHandler;
}());
export { SetSchemaThemeCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSchemaThemeCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNjaGVtYS10aGVtZS5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zY2hlbWEvZG9tYWluL3RoZW1lL3NldC1zY2hlbWEtdGhlbWUuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBMkIsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUkvRDtJQUdDLHNDQUE2QixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUN2RSxDQUFDOzs7O0lBRUQsaURBQVU7OztJQUFWO1FBQ0MsT0FBTyxxQkFBcUIsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFRCwwREFBbUI7Ozs7O0lBQW5CLFVBQW9CLFNBQTBCLEVBQUUsT0FBZ0I7UUFDL0QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEYsQ0FBQzs7Ozs7O0lBRUQsc0RBQWU7Ozs7O0lBQWYsVUFBZ0IsZUFBZ0MsRUFBRSxPQUE4Qjs7WUFFekUsS0FBSyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUU7UUFFaEMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnQkFuQkQsVUFBVTs7OztnQkFQdUIsb0JBQW9COztJQTRCdEQsbUNBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQXBCWSw0QkFBNEI7Ozs7OztJQUU1Qiw0REFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmQsIENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNldFNjaGVtYVRoZW1lQ29tbWFuZCB9IGZyb20gJy4vc2V0LXNjaGVtYS10aGVtZS5jb21tYW5kJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lU2V0RXZlbnQgfSBmcm9tICcuL3NjaGVtYS10aGVtZS1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hQWdncmVnYXRlIH0gZnJvbSAnLi4vc2NoZW1hLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNldFNjaGVtYVRoZW1lQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxTY2hlbWFBZ2dyZWdhdGUsIFNldFNjaGVtYVRoZW1lQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IFR5cGU8U2V0U2NoZW1hVGhlbWVDb21tYW5kPiB7XG5cdFx0cmV0dXJuIFNldFNjaGVtYVRoZW1lQ29tbWFuZDtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBTY2hlbWFBZ2dyZWdhdGUsIGNvbW1hbmQ6IENvbW1hbmQpOiB2b2lkIHtcblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gobmV3IFNjaGVtYVRoZW1lU2V0RXZlbnQoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpKSk7XG5cdH1cblxuXHRoYW5kbGVBZ2dyZWdhdGUoc2NoZW1hQWdncmVnYXRlOiBTY2hlbWFBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldFNjaGVtYVRoZW1lQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgdGhlbWUgPSBjb21tYW5kLmdldFRoZW1lKCk7XG5cblx0XHRzY2hlbWFBZ2dyZWdhdGUuc2V0VGhlbWUodGhlbWUpO1xuXHR9XG5cbn1cbiJdfQ==