/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { ChangePagesizeCommand } from './change-pagesize.command';
import { PageChangedEvent } from '../page/page-changed.event';
import { PagesizeChangedEvent } from './pagesize-changed.event';
var ChangePagesizeCommandHandler = /** @class */ (function () {
    function ChangePagesizeCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    ChangePagesizeCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return ChangePagesizeCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    ChangePagesizeCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        /** @type {?} */
        var aggregateEvents = aggregate.getEvents();
        ((/** @type {?} */ (aggregateEvents))).forEach((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            ((/** @type {?} */ (event))).aggregateId = aggregate.getId();
        }));
        this.publishAggregateEvents(aggregateEvents, command);
        aggregate.clearEvents();
    };
    /**
     * @param {?} structureAggregate
     * @param {?} command
     * @return {?}
     */
    ChangePagesizeCommandHandler.prototype.handleAggregate = /**
     * @param {?} structureAggregate
     * @param {?} command
     * @return {?}
     */
    function (structureAggregate, command) {
        /** @type {?} */
        var pageSize = command.getPageSize();
        structureAggregate.changePageSize(pageSize);
    };
    /**
     * @private
     * @param {?} events
     * @param {?} command
     * @return {?}
     */
    ChangePagesizeCommandHandler.prototype.publishAggregateEvents = /**
     * @private
     * @param {?} events
     * @param {?} command
     * @return {?}
     */
    function (events, command) {
        var e_1, _a;
        try {
            for (var events_1 = tslib_1.__values(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
                var event_1 = events_1_1.value;
                this.publishAggregateEvent(event_1, command);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (events_1_1 && !events_1_1.done && (_a = events_1.return)) _a.call(events_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @private
     * @param {?} event
     * @param {?} command
     * @return {?}
     */
    ChangePagesizeCommandHandler.prototype.publishAggregateEvent = /**
     * @private
     * @param {?} event
     * @param {?} command
     * @return {?}
     */
    function (event, command) {
        switch (event.getType()) {
            case 'PageChangedAggregateEvent':
                /** @type {?} */
                var pageChangedEvent = new PageChangedEvent(command.getAggregateId());
                this.domainEventPublisher.publish(pageChangedEvent);
                break;
            case 'PagesizeChangedAggregateEvent':
                /** @type {?} */
                var pagesizeChangedEvent = new PagesizeChangedEvent(command.getAggregateId());
                this.domainEventPublisher.publish(pagesizeChangedEvent);
                break;
            default:
                break;
        }
    };
    ChangePagesizeCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ChangePagesizeCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return ChangePagesizeCommandHandler;
}());
export { ChangePagesizeCommandHandler };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ChangePagesizeCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhZ2VzaXplLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3BhZ2luZy9kb21haW4vY2hhbmdlLXBhZ2VzaXplL2NoYW5nZS1wYWdlc2l6ZS5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBa0Msb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUxRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUtoRTtJQUdDLHNDQUFzQixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUNoRSxDQUFDOzs7O0lBRUQsaURBQVU7OztJQUFWO1FBQ0MsT0FBTyxxQkFBcUIsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFRCwwREFBbUI7Ozs7O0lBQW5CLFVBQW9CLFNBQTZCLEVBQUUsT0FBOEI7O1lBRTFFLGVBQWUsR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFO1FBRTdDLENBQUMsbUJBQUEsZUFBZSxFQUFPLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxLQUFrQztZQUNuRSxDQUFDLG1CQUFBLEtBQUssRUFBTyxDQUFDLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoRCxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEQsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7OztJQUVELHNEQUFlOzs7OztJQUFmLFVBQWdCLGtCQUFzQyxFQUFFLE9BQThCOztZQUUvRSxRQUFRLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRTtRQUV0QyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7OztJQUVPLDZEQUFzQjs7Ozs7O0lBQTlCLFVBQStCLE1BQWtELEVBQUUsT0FBOEI7OztZQUVoSCxLQUFrQixJQUFBLFdBQUEsaUJBQUEsTUFBTSxDQUFBLDhCQUFBLGtEQUFFO2dCQUFyQixJQUFJLE9BQUssbUJBQUE7Z0JBQ2IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQUssRUFBRSxPQUFPLENBQUMsQ0FBQzthQUMzQzs7Ozs7Ozs7O0lBQ0YsQ0FBQzs7Ozs7OztJQUVPLDREQUFxQjs7Ozs7O0lBQTdCLFVBQThCLEtBQWtDLEVBQUUsT0FBOEI7UUFFL0YsUUFBUSxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDeEIsS0FBSywyQkFBMkI7O29CQUV6QixnQkFBZ0IsR0FBRyxJQUFJLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFFdkUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUVwRCxNQUFNO1lBRVAsS0FBSywrQkFBK0I7O29CQUU3QixvQkFBb0IsR0FBRyxJQUFJLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFFL0UsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUV4RCxNQUFNO1lBRVA7Z0JBQ0MsTUFBTTtTQUNQO0lBQ0YsQ0FBQzs7Z0JBM0RELFVBQVU7Ozs7Z0JBVDhCLG9CQUFvQjs7SUFxRTdELG1DQUFDO0NBQUEsQUE1REQsSUE0REM7U0EzRFksNEJBQTRCOzs7Ozs7SUFFNUIsNERBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgQ29tbWFuZEhhbmRsZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ2hhbmdlUGFnZXNpemVDb21tYW5kIH0gZnJvbSAnLi9jaGFuZ2UtcGFnZXNpemUuY29tbWFuZCc7XG5pbXBvcnQgeyBQYWdlQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vcGFnZS9wYWdlLWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgUGFnZXNpemVDaGFuZ2VkRXZlbnQgfSBmcm9tICcuL3BhZ2VzaXplLWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYWdlc2l6ZUNvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8U3RydWN0dXJlQWdncmVnYXRlLCBDaGFuZ2VQYWdlc2l6ZUNvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IFR5cGU8Q2hhbmdlUGFnZXNpemVDb21tYW5kPiB7XG5cdFx0cmV0dXJuIENoYW5nZVBhZ2VzaXplQ29tbWFuZDtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IENoYW5nZVBhZ2VzaXplQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgYWdncmVnYXRlRXZlbnRzID0gYWdncmVnYXRlLmdldEV2ZW50cygpO1xuXG5cdFx0KGFnZ3JlZ2F0ZUV2ZW50cyBhcyBhbnkpLmZvckVhY2goKGV2ZW50OiBBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4pID0+IHtcblx0XHRcdChldmVudCBhcyBhbnkpLmFnZ3JlZ2F0ZUlkID0gYWdncmVnYXRlLmdldElkKCk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnB1Ymxpc2hBZ2dyZWdhdGVFdmVudHMoYWdncmVnYXRlRXZlbnRzLCBjb21tYW5kKTtcblxuXHRcdGFnZ3JlZ2F0ZS5jbGVhckV2ZW50cygpO1xuXHR9XG5cblx0aGFuZGxlQWdncmVnYXRlKHN0cnVjdHVyZUFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBDaGFuZ2VQYWdlc2l6ZUNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHBhZ2VTaXplID0gY29tbWFuZC5nZXRQYWdlU2l6ZSgpO1xuXG5cdFx0c3RydWN0dXJlQWdncmVnYXRlLmNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplKTtcblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaEFnZ3JlZ2F0ZUV2ZW50cyhldmVudHM6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiwgY29tbWFuZDogQ2hhbmdlUGFnZXNpemVDb21tYW5kKTogdm9pZCB7XG5cblx0XHRmb3IgKGxldCBldmVudCBvZiBldmVudHMpIHtcblx0XHRcdHRoaXMucHVibGlzaEFnZ3JlZ2F0ZUV2ZW50KGV2ZW50LCBjb21tYW5kKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hBZ2dyZWdhdGVFdmVudChldmVudDogQWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+LCBjb21tYW5kOiBDaGFuZ2VQYWdlc2l6ZUNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdHN3aXRjaCAoZXZlbnQuZ2V0VHlwZSgpKSB7XG5cdFx0XHRjYXNlICdQYWdlQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50JzpcblxuXHRcdFx0XHRjb25zdCBwYWdlQ2hhbmdlZEV2ZW50ID0gbmV3IFBhZ2VDaGFuZ2VkRXZlbnQoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpKTtcblxuXHRcdFx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gocGFnZUNoYW5nZWRFdmVudCk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ1BhZ2VzaXplQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50JzpcblxuXHRcdFx0XHRjb25zdCBwYWdlc2l6ZUNoYW5nZWRFdmVudCA9IG5ldyBQYWdlc2l6ZUNoYW5nZWRFdmVudChjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXG5cdFx0XHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChwYWdlc2l6ZUNoYW5nZWRFdmVudCk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxufVxuIl19