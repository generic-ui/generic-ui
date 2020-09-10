/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { StructureSetHeightCommand } from './structure-set-height.command';
import { StructureHeightSetEvent } from './structure-height-set.event';
var StructureSetHeightCommandHandler = /** @class */ (function () {
    function StructureSetHeightCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    StructureSetHeightCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return StructureSetHeightCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    StructureSetHeightCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publish(new StructureHeightSetEvent(command.getAggregateId()));
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    StructureSetHeightCommandHandler.prototype.handleAggregate = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        /** @type {?} */
        var height = command.getHeight();
        aggregate.setHeight(height);
    };
    StructureSetHeightCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSetHeightCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return StructureSetHeightCommandHandler;
}());
export { StructureSetHeightCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSetHeightCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXNldC1oZWlnaHQuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29yZS9kb21haW4vdmVydGljYWwtZm9ybWF0aW9uL2NvbnRhaW5lci9zZXQtaGVpZ2h0L3N0cnVjdHVyZS1zZXQtaGVpZ2h0LmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQStCLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFJdkU7SUFHQywwQ0FBb0Isb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDOUQsQ0FBQzs7OztJQUVELHFEQUFVOzs7SUFBVjtRQUNDLE9BQU8seUJBQXlCLENBQUM7SUFDbEMsQ0FBQzs7Ozs7O0lBRUQsOERBQW1COzs7OztJQUFuQixVQUFvQixTQUE2QixFQUFFLE9BQWtDO1FBQ3BGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7Ozs7OztJQUVELDBEQUFlOzs7OztJQUFmLFVBQWdCLFNBQTZCLEVBQUUsT0FBa0M7O1lBRTFFLE1BQU0sR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFO1FBRWxDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Z0JBbkJELFVBQVU7Ozs7Z0JBUDJCLG9CQUFvQjs7SUE0QjFELHVDQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FwQlksZ0NBQWdDOzs7Ozs7SUFFaEMsZ0VBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgQ29tbWFuZFR5cGUsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlU2V0SGVpZ2h0Q29tbWFuZCB9IGZyb20gJy4vc3RydWN0dXJlLXNldC1oZWlnaHQuY29tbWFuZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWlnaHRTZXRFdmVudCB9IGZyb20gJy4vc3RydWN0dXJlLWhlaWdodC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNldEhlaWdodENvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8U3RydWN0dXJlQWdncmVnYXRlLCBTdHJ1Y3R1cmVTZXRIZWlnaHRDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogQ29tbWFuZFR5cGU8U3RydWN0dXJlU2V0SGVpZ2h0Q29tbWFuZD4ge1xuXHRcdHJldHVybiBTdHJ1Y3R1cmVTZXRIZWlnaHRDb21tYW5kO1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU3RydWN0dXJlU2V0SGVpZ2h0Q29tbWFuZCk6IHZvaWQge1xuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgU3RydWN0dXJlSGVpZ2h0U2V0RXZlbnQoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpKSk7XG5cdH1cblxuXHRoYW5kbGVBZ2dyZWdhdGUoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFN0cnVjdHVyZVNldEhlaWdodENvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGhlaWdodCA9IGNvbW1hbmQuZ2V0SGVpZ2h0KCk7XG5cblx0XHRhZ2dyZWdhdGUuc2V0SGVpZ2h0KGhlaWdodCk7XG5cdH1cblxufVxuIl19