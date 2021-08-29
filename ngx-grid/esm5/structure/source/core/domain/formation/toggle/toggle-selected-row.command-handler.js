/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../../core/domain/structure-aggregate.repository';
import { ToggleSelectedRowCommand } from './toggle-selected-row.command';
var ToggleSelectedRowCommandHandler = /** @class */ (function () {
    function ToggleSelectedRowCommandHandler(structureAggregateRepository, domainEventPublisher) {
        this.structureAggregateRepository = structureAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    ToggleSelectedRowCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return ToggleSelectedRowCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    ToggleSelectedRowCommandHandler.prototype.handle = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        /** @type {?} */
        var selectedRow = command.getSelectedRow();
        /** @type {?} */
        var type = command.getType();
        aggregate.toggleRow(selectedRow, type);
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    ToggleSelectedRowCommandHandler.prototype.publish = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    };
    ToggleSelectedRowCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ToggleSelectedRowCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return ToggleSelectedRowCommandHandler;
}());
export { ToggleSelectedRowCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToggleSelectedRowCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    ToggleSelectedRowCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLXNlbGVjdGVkLXJvdy5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vZm9ybWF0aW9uL3RvZ2dsZS90b2dnbGUtc2VsZWN0ZWQtcm93LmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQStCLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDekcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFJekU7SUFHQyx5Q0FBb0IsNEJBQTBELEVBQ25FLG9CQUEwQztRQURqQyxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBQ25FLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDckQsQ0FBQzs7OztJQUVELG9EQUFVOzs7SUFBVjtRQUNDLE9BQU8sd0JBQXdCLENBQUM7SUFDakMsQ0FBQzs7Ozs7O0lBRUQsZ0RBQU07Ozs7O0lBQU4sVUFBTyxTQUE2QixFQUFFLE9BQWlDOztZQUVoRSxXQUFXLEdBQUcsT0FBTyxDQUFDLGNBQWMsRUFBRTs7WUFDM0MsSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUU7UUFFekIsU0FBUyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7O0lBRUQsaURBQU87Ozs7O0lBQVAsVUFBUSxTQUE2QixFQUFFLE9BQWlDO1FBQ3ZFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzRCxDQUFDOztnQkFyQkQsVUFBVTs7OztnQkFMRiw0QkFBNEI7Z0JBRkMsb0JBQW9COztJQThCMUQsc0NBQUM7Q0FBQSxBQXZCRCxJQXVCQztTQXRCWSwrQkFBK0I7Ozs7OztJQUUvQix1RUFBa0U7Ozs7O0lBQzNFLCtEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIENvbW1hbmRUeXBlLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUtYWdncmVnYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgVG9nZ2xlU2VsZWN0ZWRSb3dDb21tYW5kIH0gZnJvbSAnLi90b2dnbGUtc2VsZWN0ZWQtcm93LmNvbW1hbmQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRvZ2dsZVNlbGVjdGVkUm93Q29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGUsIFRvZ2dsZVNlbGVjdGVkUm93Q29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeTogU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogQ29tbWFuZFR5cGU8VG9nZ2xlU2VsZWN0ZWRSb3dDb21tYW5kPiB7XG5cdFx0cmV0dXJuIFRvZ2dsZVNlbGVjdGVkUm93Q29tbWFuZDtcblx0fVxuXG5cdGhhbmRsZShhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogVG9nZ2xlU2VsZWN0ZWRSb3dDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBzZWxlY3RlZFJvdyA9IGNvbW1hbmQuZ2V0U2VsZWN0ZWRSb3coKSxcblx0XHRcdHR5cGUgPSBjb21tYW5kLmdldFR5cGUoKTtcblxuXHRcdGFnZ3JlZ2F0ZS50b2dnbGVSb3coc2VsZWN0ZWRSb3csIHR5cGUpO1xuXHR9XG5cblx0cHVibGlzaChhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogVG9nZ2xlU2VsZWN0ZWRSb3dDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoRnJvbUFnZ3JlZ2F0ZShhZ2dyZWdhdGUpO1xuXHR9XG5cbn1cbiJdfQ==