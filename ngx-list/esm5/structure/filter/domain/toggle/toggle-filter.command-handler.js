/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../core/domain/structure-aggregate.repository';
import { ToggleFilterCommand } from './toggle-filter.command';
import { FilterToggledEvent } from './filter-toggled.event';
var ToggleFilterCommandHandler = /** @class */ (function () {
    function ToggleFilterCommandHandler(structureAggregateRepository, domainEventPublisher) {
        this.structureAggregateRepository = structureAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    ToggleFilterCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return ToggleFilterCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    ToggleFilterCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publish(new FilterToggledEvent(command.getAggregateId()));
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    ToggleFilterCommandHandler.prototype.handleAggregate = /**
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
    ToggleFilterCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ToggleFilterCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return ToggleFilterCommandHandler;
}());
export { ToggleFilterCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToggleFilterCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    ToggleFilterCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWZpbHRlci5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvZG9tYWluL3RvZ2dsZS90b2dnbGUtZmlsdGVyLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQStCLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDbkcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFJNUQ7SUFHQyxvQ0FBNkIsNEJBQTBELEVBQ25FLG9CQUEwQztRQURqQyxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBQ25FLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDOUQsQ0FBQzs7OztJQUVELCtDQUFVOzs7SUFBVjtRQUNDLE9BQU8sbUJBQW1CLENBQUM7SUFDNUIsQ0FBQzs7Ozs7O0lBRUQsd0RBQW1COzs7OztJQUFuQixVQUFvQixTQUE2QixFQUFFLE9BQTRCO1FBQzlFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7Ozs7OztJQUVELG9EQUFlOzs7OztJQUFmLFVBQWdCLFNBQTZCLEVBQUUsT0FBNEI7O1lBRXBFLE9BQU8sR0FBWSxPQUFPLENBQUMsVUFBVSxFQUFFOztZQUM1QyxlQUFlLEdBQVcsT0FBTyxDQUFDLG1CQUFtQixFQUFFOztZQUN2RCxXQUFXLEdBQUcsT0FBTyxDQUFDLGNBQWMsRUFBRTtRQUV2QyxTQUFTLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Z0JBdEJELFVBQVU7Ozs7Z0JBUEYsNEJBQTRCO2dCQUZDLG9CQUFvQjs7SUFpQzFELGlDQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0F2QlksMEJBQTBCOzs7Ozs7SUFFMUIsa0VBQTJFOzs7OztJQUNwRiwwREFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFRvZ2dsZUZpbHRlckNvbW1hbmQgfSBmcm9tICcuL3RvZ2dsZS1maWx0ZXIuY29tbWFuZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgRmlsdGVyVG9nZ2xlZEV2ZW50IH0gZnJvbSAnLi9maWx0ZXItdG9nZ2xlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9nZ2xlRmlsdGVyQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGUsIFRvZ2dsZUZpbHRlckNvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IENvbW1hbmRUeXBlPFRvZ2dsZUZpbHRlckNvbW1hbmQ+IHtcblx0XHRyZXR1cm4gVG9nZ2xlRmlsdGVyQ29tbWFuZDtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFRvZ2dsZUZpbHRlckNvbW1hbmQpOiB2b2lkIHtcblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gobmV3IEZpbHRlclRvZ2dsZWRFdmVudChjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCkpKTtcblx0fVxuXG5cdGhhbmRsZUFnZ3JlZ2F0ZShhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogVG9nZ2xlRmlsdGVyQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmllbGRJZDogRmllbGRJZCA9IGNvbW1hbmQuZ2V0RmllbGRJZCgpLFxuXHRcdFx0ZXh0ZXJuYWxGaWVsZElkOiBzdHJpbmcgPSBjb21tYW5kLmdldEV4dGVybmFsRmlsdGVySWQoKSxcblx0XHRcdGZpbHRlclZhbHVlID0gY29tbWFuZC5nZXRGaWx0ZXJWYWx1ZSgpO1xuXG5cdFx0YWdncmVnYXRlLnRvZ2dsZUZpbHRlcihmaWVsZElkLCBleHRlcm5hbEZpZWxkSWQsIGZpbHRlclZhbHVlKTtcblx0fVxuXG59XG4iXX0=