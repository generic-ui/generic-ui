/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { StructureSetConfigSearchingCommand } from './structure.set-config-searching.command';
import { StructureConfigSearchingSetEvent } from './structure.config-searching-set.event';
var StructureSetConfigSearchingCommandHandler = /** @class */ (function () {
    function StructureSetConfigSearchingCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    StructureSetConfigSearchingCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return StructureSetConfigSearchingCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    StructureSetConfigSearchingCommandHandler.prototype.handleAggregate = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        /** @type {?} */
        var searchingConfig = command.getConfig();
        aggregate.setSearchingConfig(searchingConfig);
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    StructureSetConfigSearchingCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        /** @type {?} */
        var searchingConfig = command.getConfig();
        this.domainEventPublisher.publish(new StructureConfigSearchingSetEvent(command.getAggregateId(), searchingConfig.enabled));
    };
    StructureSetConfigSearchingCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSetConfigSearchingCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return StructureSetConfigSearchingCommandHandler;
}());
export { StructureSetConfigSearchingCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSetConfigSearchingCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNldC1jb25maWctc2VhcmNoaW5nLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc2VhcmNoL2NvbmZpZy9zdHJ1Y3R1cmUuc2V0LWNvbmZpZy1zZWFyY2hpbmcuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBa0Isb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUxRSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM5RixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUkxRjtJQUdDLG1EQUFvQixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUM5RCxDQUFDOzs7O0lBRUQsOERBQVU7OztJQUFWO1FBQ0MsT0FBTyxrQ0FBa0MsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7SUFFRCxtRUFBZTs7Ozs7SUFBZixVQUFnQixTQUE2QixFQUFFLE9BQTJDOztZQUVuRixlQUFlLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRTtRQUUzQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7O0lBRUQsdUVBQW1COzs7OztJQUFuQixVQUFvQixTQUE2QixFQUFFLE9BQTJDOztZQUV2RixlQUFlLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRTtRQUUzQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksZ0NBQWdDLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzVILENBQUM7O2dCQXRCRCxVQUFVOzs7O2dCQVBjLG9CQUFvQjs7SUErQjdDLGdEQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0F2QlkseUNBQXlDOzs7Ozs7SUFFekMseUVBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZXRDb25maWdTZWFyY2hpbmdDb21tYW5kIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuc2V0LWNvbmZpZy1zZWFyY2hpbmcuY29tbWFuZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb25maWdTZWFyY2hpbmdTZXRFdmVudCB9IGZyb20gJy4vc3RydWN0dXJlLmNvbmZpZy1zZWFyY2hpbmctc2V0LmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTZXRDb25maWdTZWFyY2hpbmdDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgU3RydWN0dXJlU2V0Q29uZmlnU2VhcmNoaW5nQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IFR5cGU8U3RydWN0dXJlU2V0Q29uZmlnU2VhcmNoaW5nQ29tbWFuZD4ge1xuXHRcdHJldHVybiBTdHJ1Y3R1cmVTZXRDb25maWdTZWFyY2hpbmdDb21tYW5kO1xuXHR9XG5cblx0aGFuZGxlQWdncmVnYXRlKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTdHJ1Y3R1cmVTZXRDb25maWdTZWFyY2hpbmdDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBzZWFyY2hpbmdDb25maWcgPSBjb21tYW5kLmdldENvbmZpZygpO1xuXG5cdFx0YWdncmVnYXRlLnNldFNlYXJjaGluZ0NvbmZpZyhzZWFyY2hpbmdDb25maWcpO1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU3RydWN0dXJlU2V0Q29uZmlnU2VhcmNoaW5nQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3Qgc2VhcmNoaW5nQ29uZmlnID0gY29tbWFuZC5nZXRDb25maWcoKTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgU3RydWN0dXJlQ29uZmlnU2VhcmNoaW5nU2V0RXZlbnQoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpLCBzZWFyY2hpbmdDb25maWcuZW5hYmxlZCkpO1xuXHR9XG5cbn1cbiJdfQ==