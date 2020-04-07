/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { SetSchemaVerticalGridCommand } from './set-schema-vertical-grid.command';
import { SchemaVerticalGridSetEvent } from './schema-vertical-grid-set.event';
var SetSchemaVerticalGridCommandHandler = /** @class */ (function () {
    function SetSchemaVerticalGridCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    SetSchemaVerticalGridCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return SetSchemaVerticalGridCommand;
    };
    /**
     * @param {?} schemaAggregate
     * @param {?} command
     * @return {?}
     */
    SetSchemaVerticalGridCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} schemaAggregate
     * @param {?} command
     * @return {?}
     */
    function (schemaAggregate, command) {
        this.domainEventPublisher.publish(new SchemaVerticalGridSetEvent(command.getAggregateId()));
    };
    /**
     * @param {?} schemaAggregate
     * @param {?} command
     * @return {?}
     */
    SetSchemaVerticalGridCommandHandler.prototype.handleAggregate = /**
     * @param {?} schemaAggregate
     * @param {?} command
     * @return {?}
     */
    function (schemaAggregate, command) {
        /** @type {?} */
        var enabled = command.isEnabled();
        schemaAggregate.setVerticalGrid(enabled);
    };
    SetSchemaVerticalGridCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetSchemaVerticalGridCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return SetSchemaVerticalGridCommandHandler;
}());
export { SetSchemaVerticalGridCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSchemaVerticalGridCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNjaGVtYS12ZXJ0aWNhbC1ncmlkLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3NjaGVtYS9kb21haW4vZ3JpZC92ZXJ0aWNhbC9zZXQtc2NoZW1hLXZlcnRpY2FsLWdyaWQuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBMkIsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUk5RTtJQUdDLDZDQUFvQixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUM5RCxDQUFDOzs7O0lBRUQsd0RBQVU7OztJQUFWO1FBQ0MsT0FBTyw0QkFBNEIsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFFRCxpRUFBbUI7Ozs7O0lBQW5CLFVBQW9CLGVBQWdDLEVBQUUsT0FBZ0I7UUFDckUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLDBCQUEwQixDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQzs7Ozs7O0lBRUQsNkRBQWU7Ozs7O0lBQWYsVUFBZ0IsZUFBZ0MsRUFBRSxPQUFxQzs7WUFFaEYsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUU7UUFFbkMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDOztnQkFuQkQsVUFBVTs7OztnQkFQdUIsb0JBQW9COztJQTRCdEQsMENBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQXBCWSxtQ0FBbUM7Ozs7OztJQUVuQyxtRUFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmQsIENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNldFNjaGVtYVZlcnRpY2FsR3JpZENvbW1hbmQgfSBmcm9tICcuL3NldC1zY2hlbWEtdmVydGljYWwtZ3JpZC5jb21tYW5kJztcbmltcG9ydCB7IFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50IH0gZnJvbSAnLi9zY2hlbWEtdmVydGljYWwtZ3JpZC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vc2NoZW1hLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNldFNjaGVtYVZlcnRpY2FsR3JpZENvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8U2NoZW1hQWdncmVnYXRlLCBTZXRTY2hlbWFWZXJ0aWNhbEdyaWRDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogVHlwZTxTZXRTY2hlbWFWZXJ0aWNhbEdyaWRDb21tYW5kPiB7XG5cdFx0cmV0dXJuIFNldFNjaGVtYVZlcnRpY2FsR3JpZENvbW1hbmQ7XG5cdH1cblxuXHRwdWJsaXNoRG9tYWluRXZlbnRzKHNjaGVtYUFnZ3JlZ2F0ZTogU2NoZW1hQWdncmVnYXRlLCBjb21tYW5kOiBDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudChjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCkpKTtcblx0fVxuXG5cdGhhbmRsZUFnZ3JlZ2F0ZShzY2hlbWFBZ2dyZWdhdGU6IFNjaGVtYUFnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0U2NoZW1hVmVydGljYWxHcmlkQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZW5hYmxlZCA9IGNvbW1hbmQuaXNFbmFibGVkKCk7XG5cblx0XHRzY2hlbWFBZ2dyZWdhdGUuc2V0VmVydGljYWxHcmlkKGVuYWJsZWQpO1xuXHR9XG5cbn1cbiJdfQ==