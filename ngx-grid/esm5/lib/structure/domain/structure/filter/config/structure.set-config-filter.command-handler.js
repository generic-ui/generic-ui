/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { StructureSetConfigFilterCommand } from './structure.set-config-filter.command';
import { StructureConfigFilterSetEvent } from './structure.config-filter-set.event';
var StructureSetConfigFilterCommandHandler = /** @class */ (function () {
    function StructureSetConfigFilterCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    StructureSetConfigFilterCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return StructureSetConfigFilterCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    StructureSetConfigFilterCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        /** @type {?} */
        var filterConfig = command.getConfig();
        this.domainEventPublisher.publish(new StructureConfigFilterSetEvent(command.getAggregateId(), filterConfig.enabled));
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    StructureSetConfigFilterCommandHandler.prototype.handleAggregate = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        /** @type {?} */
        var filterConfig = command.getConfig();
        aggregate.setFilterConfig(filterConfig);
    };
    StructureSetConfigFilterCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSetConfigFilterCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return StructureSetConfigFilterCommandHandler;
}());
export { StructureSetConfigFilterCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSetConfigFilterCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNldC1jb25maWctZmlsdGVyLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2ZpbHRlci9jb25maWcvc3RydWN0dXJlLnNldC1jb25maWctZmlsdGVyLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQWtCLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDMUUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFJcEY7SUFHQyxnREFBNkIsb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDdkUsQ0FBQzs7OztJQUVELDJEQUFVOzs7SUFBVjtRQUNDLE9BQU8sK0JBQStCLENBQUM7SUFDeEMsQ0FBQzs7Ozs7O0lBRUQsb0VBQW1COzs7OztJQUFuQixVQUFvQixTQUE2QixFQUFFLE9BQXdDOztZQUVwRixZQUFZLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRTtRQUV4QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksNkJBQTZCLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3RILENBQUM7Ozs7OztJQUVELGdFQUFlOzs7OztJQUFmLFVBQWdCLFNBQTZCLEVBQUUsT0FBd0M7O1lBRWhGLFlBQVksR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFO1FBRXhDLFNBQVMsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Z0JBdEJELFVBQVU7Ozs7Z0JBTmMsb0JBQW9COztJQThCN0MsNkNBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQXZCWSxzQ0FBc0M7Ozs7OztJQUV0QyxzRUFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZXRDb25maWdGaWx0ZXJDb21tYW5kIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuc2V0LWNvbmZpZy1maWx0ZXIuY29tbWFuZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb25maWdGaWx0ZXJTZXRFdmVudCB9IGZyb20gJy4vc3RydWN0dXJlLmNvbmZpZy1maWx0ZXItc2V0LmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTZXRDb25maWdGaWx0ZXJDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgU3RydWN0dXJlU2V0Q29uZmlnRmlsdGVyQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IFR5cGU8U3RydWN0dXJlU2V0Q29uZmlnRmlsdGVyQ29tbWFuZD4ge1xuXHRcdHJldHVybiBTdHJ1Y3R1cmVTZXRDb25maWdGaWx0ZXJDb21tYW5kO1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU3RydWN0dXJlU2V0Q29uZmlnRmlsdGVyQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmlsdGVyQ29uZmlnID0gY29tbWFuZC5nZXRDb25maWcoKTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgU3RydWN0dXJlQ29uZmlnRmlsdGVyU2V0RXZlbnQoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpLCBmaWx0ZXJDb25maWcuZW5hYmxlZCkpO1xuXHR9XG5cblx0aGFuZGxlQWdncmVnYXRlKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTdHJ1Y3R1cmVTZXRDb25maWdGaWx0ZXJDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBmaWx0ZXJDb25maWcgPSBjb21tYW5kLmdldENvbmZpZygpO1xuXG5cdFx0YWdncmVnYXRlLnNldEZpbHRlckNvbmZpZyhmaWx0ZXJDb25maWcpO1xuXHR9XG5cbn1cbiJdfQ==