/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { StructureToggleFilterCommand } from './structure.toggle-filter.command';
import { StructureFilterToggledEvent } from './structure.filter-toggled.event';
var StructureToggleFilterCommandHandler = /** @class */ (function () {
    function StructureToggleFilterCommandHandler(structureAggregateRepository, domainEventPublisher) {
        this.structureAggregateRepository = structureAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    StructureToggleFilterCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return StructureToggleFilterCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    StructureToggleFilterCommandHandler.prototype.handleAggregate = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        /** @type {?} */
        var fieldId = command.getFieldId();
        /** @type {?} */
        var externalFieldId = command.getExternalFilterId();
        /** @type {?} */
        var filterValue = command.getFilterValue();
        aggregate.toggleFilter(fieldId, externalFieldId, filterValue);
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    StructureToggleFilterCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publish(new StructureFilterToggledEvent(command.getAggregateId()));
    };
    StructureToggleFilterCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureToggleFilterCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return StructureToggleFilterCommandHandler;
}());
export { StructureToggleFilterCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureToggleFilterCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    StructureToggleFilterCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnRvZ2dsZS1maWx0ZXIuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWx0ZXIvdG9nZ2xlL3N0cnVjdHVyZS50b2dnbGUtZmlsdGVyLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQWtCLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFMUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDcEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFakYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFJL0U7SUFHQyw2Q0FBNkIsNEJBQTBELEVBQzVFLG9CQUEwQztRQUR4QixpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBQzVFLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDckQsQ0FBQzs7OztJQUVELHdEQUFVOzs7SUFBVjtRQUNDLE9BQU8sNEJBQTRCLENBQUM7SUFDckMsQ0FBQzs7Ozs7O0lBRUQsNkRBQWU7Ozs7O0lBQWYsVUFBZ0IsU0FBNkIsRUFBRSxPQUFxQzs7WUFFN0UsT0FBTyxHQUFZLE9BQU8sQ0FBQyxVQUFVLEVBQUU7O1lBQzVDLGVBQWUsR0FBVyxPQUFPLENBQUMsbUJBQW1CLEVBQUU7O1lBQ3ZELFdBQVcsR0FBRyxPQUFPLENBQUMsY0FBYyxFQUFFO1FBRXZDLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7Ozs7SUFFRCxpRUFBbUI7Ozs7O0lBQW5CLFVBQW9CLFNBQTZCLEVBQUUsT0FBcUM7UUFDdkYsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLDJCQUEyQixDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUYsQ0FBQzs7Z0JBdEJELFVBQVU7Ozs7Z0JBUEYsNEJBQTRCO2dCQUZaLG9CQUFvQjs7SUFpQzdDLDBDQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0F2QlksbUNBQW1DOzs7Ozs7SUFFbkMsMkVBQTJFOzs7OztJQUNwRixtRUFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUtYWdncmVnYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlVG9nZ2xlRmlsdGVyQ29tbWFuZCB9IGZyb20gJy4vc3RydWN0dXJlLnRvZ2dsZS1maWx0ZXIuY29tbWFuZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vZmllbGQvZGF0YS10eXBlL2ZpZWxkLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUZpbHRlclRvZ2dsZWRFdmVudCB9IGZyb20gJy4vc3RydWN0dXJlLmZpbHRlci10b2dnbGVkLmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVUb2dnbGVGaWx0ZXJDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgU3RydWN0dXJlVG9nZ2xlRmlsdGVyQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeTogU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogVHlwZTxTdHJ1Y3R1cmVUb2dnbGVGaWx0ZXJDb21tYW5kPiB7XG5cdFx0cmV0dXJuIFN0cnVjdHVyZVRvZ2dsZUZpbHRlckNvbW1hbmQ7XG5cdH1cblxuXHRoYW5kbGVBZ2dyZWdhdGUoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFN0cnVjdHVyZVRvZ2dsZUZpbHRlckNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpZWxkSWQ6IEZpZWxkSWQgPSBjb21tYW5kLmdldEZpZWxkSWQoKSxcblx0XHRcdGV4dGVybmFsRmllbGRJZDogc3RyaW5nID0gY29tbWFuZC5nZXRFeHRlcm5hbEZpbHRlcklkKCksXG5cdFx0XHRmaWx0ZXJWYWx1ZSA9IGNvbW1hbmQuZ2V0RmlsdGVyVmFsdWUoKTtcblxuXHRcdGFnZ3JlZ2F0ZS50b2dnbGVGaWx0ZXIoZmllbGRJZCwgZXh0ZXJuYWxGaWVsZElkLCBmaWx0ZXJWYWx1ZSk7XG5cdH1cblxuXHRwdWJsaXNoRG9tYWluRXZlbnRzKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTdHJ1Y3R1cmVUb2dnbGVGaWx0ZXJDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBTdHJ1Y3R1cmVGaWx0ZXJUb2dnbGVkRXZlbnQoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpKSk7XG5cdH1cblxufVxuIl19