/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { ChangeSchemaBottomHeaderCommand } from './change-schema-bottom-header.command';
import { SchemaBottomHeaderChangedEvent } from './schema-bottom-header-changed.event';
var ChangeSchemaBottomHeaderCommandHandler = /** @class */ (function () {
    function ChangeSchemaBottomHeaderCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    ChangeSchemaBottomHeaderCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return ChangeSchemaBottomHeaderCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    ChangeSchemaBottomHeaderCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publish(new SchemaBottomHeaderChangedEvent(command.getAggregateId()));
    };
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    ChangeSchemaBottomHeaderCommandHandler.prototype.handleAggregate = /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    function (structure, command) {
        /** @type {?} */
        var schema = structure.getSchema();
        /** @type {?} */
        var enabled = command.isEnabled();
        schema.setHeaderBottom(enabled);
    };
    ChangeSchemaBottomHeaderCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ChangeSchemaBottomHeaderCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return ChangeSchemaBottomHeaderCommandHandler;
}());
export { ChangeSchemaBottomHeaderCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ChangeSchemaBottomHeaderCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXNjaGVtYS1ib3R0b20taGVhZGVyLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc2NoZW1hL2NvbW1hbmQvY29sdW1uLWhlYWRlci9ib3R0b20vY2hhbmdlLXNjaGVtYS1ib3R0b20taGVhZGVyLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQWtCLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFMUUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFJdEY7SUFHQyxnREFBb0Isb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDOUQsQ0FBQzs7OztJQUVELDJEQUFVOzs7SUFBVjtRQUNDLE9BQU8sK0JBQStCLENBQUM7SUFDeEMsQ0FBQzs7Ozs7O0lBRUQsb0VBQW1COzs7OztJQUFuQixVQUFvQixTQUE2QixFQUFFLE9BQXdDO1FBQzFGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSw4QkFBOEIsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7Ozs7OztJQUVELGdFQUFlOzs7OztJQUFmLFVBQWdCLFNBQTZCLEVBQUUsT0FBd0M7O1lBRWhGLE1BQU0sR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFOztZQUNuQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRTtRQUU5QixNQUFNLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O2dCQXBCRCxVQUFVOzs7O2dCQVBjLG9CQUFvQjs7SUE2QjdDLDZDQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FyQlksc0NBQXNDOzs7Ozs7SUFFdEMsc0VBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDaGFuZ2VTY2hlbWFCb3R0b21IZWFkZXJDb21tYW5kIH0gZnJvbSAnLi9jaGFuZ2Utc2NoZW1hLWJvdHRvbS1oZWFkZXIuY29tbWFuZCc7XG5pbXBvcnQgeyBTY2hlbWFCb3R0b21IZWFkZXJDaGFuZ2VkRXZlbnQgfSBmcm9tICcuL3NjaGVtYS1ib3R0b20taGVhZGVyLWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2NvbW1hbmQvc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENoYW5nZVNjaGVtYUJvdHRvbUhlYWRlckNvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8U3RydWN0dXJlQWdncmVnYXRlLCBDaGFuZ2VTY2hlbWFCb3R0b21IZWFkZXJDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogVHlwZTxDaGFuZ2VTY2hlbWFCb3R0b21IZWFkZXJDb21tYW5kPiB7XG5cdFx0cmV0dXJuIENoYW5nZVNjaGVtYUJvdHRvbUhlYWRlckNvbW1hbmQ7XG5cdH1cblxuXHRwdWJsaXNoRG9tYWluRXZlbnRzKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBDaGFuZ2VTY2hlbWFCb3R0b21IZWFkZXJDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBTY2hlbWFCb3R0b21IZWFkZXJDaGFuZ2VkRXZlbnQoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpKSk7XG5cdH1cblxuXHRoYW5kbGVBZ2dyZWdhdGUoc3RydWN0dXJlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IENoYW5nZVNjaGVtYUJvdHRvbUhlYWRlckNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHNjaGVtYSA9IHN0cnVjdHVyZS5nZXRTY2hlbWEoKSxcblx0XHRcdGVuYWJsZWQgPSBjb21tYW5kLmlzRW5hYmxlZCgpO1xuXG5cdFx0c2NoZW1hLnNldEhlYWRlckJvdHRvbShlbmFibGVkKTtcblx0fVxuXG59XG4iXX0=