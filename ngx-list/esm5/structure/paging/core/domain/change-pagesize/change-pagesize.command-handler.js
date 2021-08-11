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
            case 'StructurePreparedEntitiesSetAggregateEvent':
                this.domainEventPublisher.publish(event.toDomainEvent());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhZ2VzaXplLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3BhZ2luZy9jb3JlL2RvbWFpbi9jaGFuZ2UtcGFnZXNpemUvY2hhbmdlLXBhZ2VzaXplLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUErQyxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzlELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBS2hFO0lBR0Msc0NBQXNCLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ2hFLENBQUM7Ozs7SUFFRCxpREFBVTs7O0lBQVY7UUFDQyxPQUFPLHFCQUFxQixDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUVELHNEQUFlOzs7OztJQUFmLFVBQWdCLGtCQUFzQyxFQUFFLE9BQThCOztZQUUvRSxRQUFRLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRTtRQUV0QyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7O0lBRUQsMERBQW1COzs7OztJQUFuQixVQUFvQixTQUE2QixFQUFFLE9BQThCOztZQUUxRSxlQUFlLEdBQUcsU0FBUyxDQUFDLFNBQVMsRUFBRTtRQUU3QyxDQUFDLG1CQUFBLGVBQWUsRUFBTyxDQUFDLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsS0FBa0M7WUFDbkUsQ0FBQyxtQkFBQSxLQUFLLEVBQU8sQ0FBQyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDaEQsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsc0JBQXNCLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRELFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7Ozs7O0lBRU8sNkRBQXNCOzs7Ozs7SUFBOUIsVUFBK0IsTUFBa0QsRUFBRSxPQUE4Qjs7O1lBRWhILEtBQWtCLElBQUEsV0FBQSxpQkFBQSxNQUFNLENBQUEsOEJBQUEsa0RBQUU7Z0JBQXJCLElBQUksT0FBSyxtQkFBQTtnQkFDYixJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQzNDOzs7Ozs7Ozs7SUFDRixDQUFDOzs7Ozs7O0lBRU8sNERBQXFCOzs7Ozs7SUFBN0IsVUFBOEIsS0FBa0MsRUFBRSxPQUE4QjtRQUUvRixRQUFRLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUN4QixLQUFLLDJCQUEyQjs7b0JBRXpCLGdCQUFnQixHQUFHLElBQUksZ0JBQWdCLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUV2RSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBRXBELE1BQU07WUFFUCxLQUFLLCtCQUErQjs7b0JBRTdCLG9CQUFvQixHQUFHLElBQUksb0JBQW9CLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUUvRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBRXhELE1BQU07WUFFUCxLQUFLLDRDQUE0QztnQkFFaEQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztnQkFFekQsTUFBTTtZQUVQO2dCQUNDLE1BQU07U0FDUDtJQUNGLENBQUM7O2dCQWpFRCxVQUFVOzs7O2dCQVQyQyxvQkFBb0I7O0lBMkUxRSxtQ0FBQztDQUFBLEFBbEVELElBa0VDO1NBakVZLDRCQUE0Qjs7Ozs7O0lBRTVCLDREQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDaGFuZ2VQYWdlc2l6ZUNvbW1hbmQgfSBmcm9tICcuL2NoYW5nZS1wYWdlc2l6ZS5jb21tYW5kJztcbmltcG9ydCB7IFBhZ2VDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi9wYWdlL3BhZ2UtY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBQYWdlc2l6ZUNoYW5nZWRFdmVudCB9IGZyb20gJy4vcGFnZXNpemUtY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFnZXNpemVDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgQ2hhbmdlUGFnZXNpemVDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJvdGVjdGVkIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxDaGFuZ2VQYWdlc2l6ZUNvbW1hbmQ+IHtcblx0XHRyZXR1cm4gQ2hhbmdlUGFnZXNpemVDb21tYW5kO1xuXHR9XG5cblx0aGFuZGxlQWdncmVnYXRlKHN0cnVjdHVyZUFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBDaGFuZ2VQYWdlc2l6ZUNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHBhZ2VTaXplID0gY29tbWFuZC5nZXRQYWdlU2l6ZSgpO1xuXG5cdFx0c3RydWN0dXJlQWdncmVnYXRlLmNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplKTtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IENoYW5nZVBhZ2VzaXplQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgYWdncmVnYXRlRXZlbnRzID0gYWdncmVnYXRlLmdldEV2ZW50cygpO1xuXG5cdFx0KGFnZ3JlZ2F0ZUV2ZW50cyBhcyBhbnkpLmZvckVhY2goKGV2ZW50OiBBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4pID0+IHtcblx0XHRcdChldmVudCBhcyBhbnkpLmFnZ3JlZ2F0ZUlkID0gYWdncmVnYXRlLmdldElkKCk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnB1Ymxpc2hBZ2dyZWdhdGVFdmVudHMoYWdncmVnYXRlRXZlbnRzLCBjb21tYW5kKTtcblxuXHRcdGFnZ3JlZ2F0ZS5jbGVhckV2ZW50cygpO1xuXHR9XG5cblx0cHJpdmF0ZSBwdWJsaXNoQWdncmVnYXRlRXZlbnRzKGV2ZW50czogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+LCBjb21tYW5kOiBDaGFuZ2VQYWdlc2l6ZUNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGZvciAobGV0IGV2ZW50IG9mIGV2ZW50cykge1xuXHRcdFx0dGhpcy5wdWJsaXNoQWdncmVnYXRlRXZlbnQoZXZlbnQsIGNvbW1hbmQpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaEFnZ3JlZ2F0ZUV2ZW50KGV2ZW50OiBBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4sIGNvbW1hbmQ6IENoYW5nZVBhZ2VzaXplQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0c3dpdGNoIChldmVudC5nZXRUeXBlKCkpIHtcblx0XHRcdGNhc2UgJ1BhZ2VDaGFuZ2VkQWdncmVnYXRlRXZlbnQnOlxuXG5cdFx0XHRcdGNvbnN0IHBhZ2VDaGFuZ2VkRXZlbnQgPSBuZXcgUGFnZUNoYW5nZWRFdmVudChjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXG5cdFx0XHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChwYWdlQ2hhbmdlZEV2ZW50KTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnUGFnZXNpemVDaGFuZ2VkQWdncmVnYXRlRXZlbnQnOlxuXG5cdFx0XHRcdGNvbnN0IHBhZ2VzaXplQ2hhbmdlZEV2ZW50ID0gbmV3IFBhZ2VzaXplQ2hhbmdlZEV2ZW50KGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cblx0XHRcdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKHBhZ2VzaXplQ2hhbmdlZEV2ZW50KTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnU3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEFnZ3JlZ2F0ZUV2ZW50JzpcblxuXHRcdFx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2goZXZlbnQudG9Eb21haW5FdmVudCgpKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG59XG4iXX0=