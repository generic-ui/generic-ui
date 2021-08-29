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
    StructureSetHeightCommandHandler.prototype.handle = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        /** @type {?} */
        var height = command.getHeight();
        aggregate.setHeight(height);
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    StructureSetHeightCommandHandler.prototype.publish = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publish(new StructureHeightSetEvent(command.getAggregateId()));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXNldC1oZWlnaHQuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL2NvcmUvZG9tYWluL2NvbnRhaW5lci9zZXQtaGVpZ2h0L3N0cnVjdHVyZS1zZXQtaGVpZ2h0LmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQStCLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFJdkU7SUFHQywwQ0FBb0Isb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDOUQsQ0FBQzs7OztJQUVELHFEQUFVOzs7SUFBVjtRQUNDLE9BQU8seUJBQXlCLENBQUM7SUFDbEMsQ0FBQzs7Ozs7O0lBRUQsaURBQU07Ozs7O0lBQU4sVUFBTyxTQUE2QixFQUFFLE9BQWtDOztZQUVqRSxNQUFNLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRTtRQUVsQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7OztJQUVELGtEQUFPOzs7OztJQUFQLFVBQVEsU0FBNkIsRUFBRSxPQUFrQztRQUN4RSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksdUJBQXVCLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxRixDQUFDOztnQkFuQkQsVUFBVTs7OztnQkFQMkIsb0JBQW9COztJQTRCMUQsdUNBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQXBCWSxnQ0FBZ0M7Ozs7OztJQUVoQyxnRUFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZXRIZWlnaHRDb21tYW5kIH0gZnJvbSAnLi9zdHJ1Y3R1cmUtc2V0LWhlaWdodC5jb21tYW5kJztcbmltcG9ydCB7IFN0cnVjdHVyZUhlaWdodFNldEV2ZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUtaGVpZ2h0LXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU2V0SGVpZ2h0Q29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGUsIFN0cnVjdHVyZVNldEhlaWdodENvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxTdHJ1Y3R1cmVTZXRIZWlnaHRDb21tYW5kPiB7XG5cdFx0cmV0dXJuIFN0cnVjdHVyZVNldEhlaWdodENvbW1hbmQ7XG5cdH1cblxuXHRoYW5kbGUoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFN0cnVjdHVyZVNldEhlaWdodENvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGhlaWdodCA9IGNvbW1hbmQuZ2V0SGVpZ2h0KCk7XG5cblx0XHRhZ2dyZWdhdGUuc2V0SGVpZ2h0KGhlaWdodCk7XG5cdH1cblxuXHRwdWJsaXNoKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTdHJ1Y3R1cmVTZXRIZWlnaHRDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBTdHJ1Y3R1cmVIZWlnaHRTZXRFdmVudChjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCkpKTtcblx0fVxuXG59XG4iXX0=