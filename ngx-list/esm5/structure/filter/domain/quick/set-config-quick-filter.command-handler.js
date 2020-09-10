/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { SetConfigQuickFilterCommand } from './set-config-quick-filter.command';
import { ConfigQuickFilterSetEvent } from './config-quick-filter-set.event';
import { StructureAggregateRepository } from '../../../core/domain/structure-aggregate.repository';
var SetConfigQuickFilterCommandHandler = /** @class */ (function () {
    function SetConfigQuickFilterCommandHandler(structureAggregateRepository, domainEventPublisher) {
        this.structureAggregateRepository = structureAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    SetConfigQuickFilterCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return SetConfigQuickFilterCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SetConfigQuickFilterCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        /** @type {?} */
        var structureId = command.getAggregateId();
        /** @type {?} */
        var quickFiltersConfig = command.getConfig();
        this.domainEventPublisher.publish(new ConfigQuickFilterSetEvent(structureId, quickFiltersConfig.enabled));
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SetConfigQuickFilterCommandHandler.prototype.handleAggregate = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        /** @type {?} */
        var quickFiltersConfig = command.getConfig();
        aggregate.setQuickFiltersConfig(quickFiltersConfig);
    };
    SetConfigQuickFilterCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetConfigQuickFilterCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return SetConfigQuickFilterCommandHandler;
}());
export { SetConfigQuickFilterCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetConfigQuickFilterCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    SetConfigQuickFilterCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbmZpZy1xdWljay1maWx0ZXIuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2RvbWFpbi9xdWljay9zZXQtY29uZmlnLXF1aWNrLWZpbHRlci5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUErQixvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTVFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBSW5HO0lBR0MsNENBQTZCLDRCQUEwRCxFQUM1RSxvQkFBMEM7UUFEeEIsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtRQUM1RSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ3JELENBQUM7Ozs7SUFFRCx1REFBVTs7O0lBQVY7UUFDQyxPQUFPLDJCQUEyQixDQUFDO0lBQ3BDLENBQUM7Ozs7OztJQUVELGdFQUFtQjs7Ozs7SUFBbkIsVUFBb0IsU0FBNkIsRUFBRSxPQUFvQzs7WUFFaEYsV0FBVyxHQUFHLE9BQU8sQ0FBQyxjQUFjLEVBQUU7O1lBQzNDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUU7UUFFekMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLHlCQUF5QixDQUFDLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzNHLENBQUM7Ozs7OztJQUVELDREQUFlOzs7OztJQUFmLFVBQWdCLFNBQTZCLEVBQUUsT0FBb0M7O1lBRTVFLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUU7UUFFOUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBeEJELFVBQVU7Ozs7Z0JBSkYsNEJBQTRCO2dCQUxDLG9CQUFvQjs7SUFtQzFELHlDQUFDO0NBQUEsQUExQkQsSUEwQkM7U0F6Qlksa0NBQWtDOzs7Ozs7SUFFbEMsMEVBQTJFOzs7OztJQUNwRixrRUFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTZXRDb25maWdRdWlja0ZpbHRlckNvbW1hbmQgfSBmcm9tICcuL3NldC1jb25maWctcXVpY2stZmlsdGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgQ29uZmlnUXVpY2tGaWx0ZXJTZXRFdmVudCB9IGZyb20gJy4vY29uZmlnLXF1aWNrLWZpbHRlci1zZXQuZXZlbnQnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXRDb25maWdRdWlja0ZpbHRlckNvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8U3RydWN0dXJlQWdncmVnYXRlLCBTZXRDb25maWdRdWlja0ZpbHRlckNvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IENvbW1hbmRUeXBlPFNldENvbmZpZ1F1aWNrRmlsdGVyQ29tbWFuZD4ge1xuXHRcdHJldHVybiBTZXRDb25maWdRdWlja0ZpbHRlckNvbW1hbmQ7XG5cdH1cblxuXHRwdWJsaXNoRG9tYWluRXZlbnRzKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTZXRDb25maWdRdWlja0ZpbHRlckNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZUlkID0gY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpLFxuXHRcdFx0cXVpY2tGaWx0ZXJzQ29uZmlnID0gY29tbWFuZC5nZXRDb25maWcoKTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgQ29uZmlnUXVpY2tGaWx0ZXJTZXRFdmVudChzdHJ1Y3R1cmVJZCwgcXVpY2tGaWx0ZXJzQ29uZmlnLmVuYWJsZWQpKTtcblx0fVxuXG5cdGhhbmRsZUFnZ3JlZ2F0ZShhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0Q29uZmlnUXVpY2tGaWx0ZXJDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBxdWlja0ZpbHRlcnNDb25maWcgPSBjb21tYW5kLmdldENvbmZpZygpO1xuXG5cdFx0YWdncmVnYXRlLnNldFF1aWNrRmlsdGVyc0NvbmZpZyhxdWlja0ZpbHRlcnNDb25maWcpO1xuXHR9XG5cbn1cbiJdfQ==