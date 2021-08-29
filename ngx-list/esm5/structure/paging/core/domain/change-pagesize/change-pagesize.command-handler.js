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
    ChangePagesizeCommandHandler.prototype.handle = /**
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
    ChangePagesizeCommandHandler.prototype.publish = /**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhZ2VzaXplLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3BhZ2luZy9jb3JlL2RvbWFpbi9jaGFuZ2UtcGFnZXNpemUvY2hhbmdlLXBhZ2VzaXplLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUErQyxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzlELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBS2hFO0lBR0Msc0NBQXNCLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ2hFLENBQUM7Ozs7SUFFRCxpREFBVTs7O0lBQVY7UUFDQyxPQUFPLHFCQUFxQixDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUVELDZDQUFNOzs7OztJQUFOLFVBQU8sa0JBQXNDLEVBQUUsT0FBOEI7O1lBRXRFLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFO1FBRXRDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7Ozs7SUFFRCw4Q0FBTzs7Ozs7SUFBUCxVQUFRLFNBQTZCLEVBQUUsT0FBOEI7O1lBRTlELGVBQWUsR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFO1FBRTdDLENBQUMsbUJBQUEsZUFBZSxFQUFPLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxLQUFrQztZQUNuRSxDQUFDLG1CQUFBLEtBQUssRUFBTyxDQUFDLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoRCxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEQsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7Ozs7SUFFTyw2REFBc0I7Ozs7OztJQUE5QixVQUErQixNQUFrRCxFQUFFLE9BQThCOzs7WUFFaEgsS0FBb0IsSUFBQSxXQUFBLGlCQUFBLE1BQU0sQ0FBQSw4QkFBQSxrREFBRTtnQkFBdkIsSUFBTSxPQUFLLG1CQUFBO2dCQUNmLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDM0M7Ozs7Ozs7OztJQUNGLENBQUM7Ozs7Ozs7SUFFTyw0REFBcUI7Ozs7OztJQUE3QixVQUE4QixLQUFrQyxFQUFFLE9BQThCO1FBRS9GLFFBQVEsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3hCLEtBQUssMkJBQTJCOztvQkFFekIsZ0JBQWdCLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBRXZFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFFcEQsTUFBTTtZQUVQLEtBQUssK0JBQStCOztvQkFFN0Isb0JBQW9CLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBRS9FLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztnQkFFeEQsTUFBTTtZQUVQLEtBQUssNENBQTRDO2dCQUVoRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO2dCQUV6RCxNQUFNO1lBRVA7Z0JBQ0MsTUFBTTtTQUNQO0lBQ0YsQ0FBQzs7Z0JBakVELFVBQVU7Ozs7Z0JBVDJDLG9CQUFvQjs7SUEyRTFFLG1DQUFDO0NBQUEsQUFsRUQsSUFrRUM7U0FqRVksNEJBQTRCOzs7Ozs7SUFFNUIsNERBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgQ29tbWFuZEhhbmRsZXIsIENvbW1hbmRUeXBlLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENoYW5nZVBhZ2VzaXplQ29tbWFuZCB9IGZyb20gJy4vY2hhbmdlLXBhZ2VzaXplLmNvbW1hbmQnO1xuaW1wb3J0IHsgUGFnZUNoYW5nZWRFdmVudCB9IGZyb20gJy4uL3BhZ2UvcGFnZS1jaGFuZ2VkLmV2ZW50JztcbmltcG9ydCB7IFBhZ2VzaXplQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi9wYWdlc2l6ZS1jaGFuZ2VkLmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYWdlc2l6ZUNvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8U3RydWN0dXJlQWdncmVnYXRlLCBDaGFuZ2VQYWdlc2l6ZUNvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IENvbW1hbmRUeXBlPENoYW5nZVBhZ2VzaXplQ29tbWFuZD4ge1xuXHRcdHJldHVybiBDaGFuZ2VQYWdlc2l6ZUNvbW1hbmQ7XG5cdH1cblxuXHRoYW5kbGUoc3RydWN0dXJlQWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IENoYW5nZVBhZ2VzaXplQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgcGFnZVNpemUgPSBjb21tYW5kLmdldFBhZ2VTaXplKCk7XG5cblx0XHRzdHJ1Y3R1cmVBZ2dyZWdhdGUuY2hhbmdlUGFnZVNpemUocGFnZVNpemUpO1xuXHR9XG5cblx0cHVibGlzaChhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogQ2hhbmdlUGFnZXNpemVDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBhZ2dyZWdhdGVFdmVudHMgPSBhZ2dyZWdhdGUuZ2V0RXZlbnRzKCk7XG5cblx0XHQoYWdncmVnYXRlRXZlbnRzIGFzIGFueSkuZm9yRWFjaCgoZXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPikgPT4ge1xuXHRcdFx0KGV2ZW50IGFzIGFueSkuYWdncmVnYXRlSWQgPSBhZ2dyZWdhdGUuZ2V0SWQoKTtcblx0XHR9KTtcblxuXHRcdHRoaXMucHVibGlzaEFnZ3JlZ2F0ZUV2ZW50cyhhZ2dyZWdhdGVFdmVudHMsIGNvbW1hbmQpO1xuXG5cdFx0YWdncmVnYXRlLmNsZWFyRXZlbnRzKCk7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hBZ2dyZWdhdGVFdmVudHMoZXZlbnRzOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4sIGNvbW1hbmQ6IENoYW5nZVBhZ2VzaXplQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Zm9yIChjb25zdCBldmVudCBvZiBldmVudHMpIHtcblx0XHRcdHRoaXMucHVibGlzaEFnZ3JlZ2F0ZUV2ZW50KGV2ZW50LCBjb21tYW5kKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hBZ2dyZWdhdGVFdmVudChldmVudDogQWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+LCBjb21tYW5kOiBDaGFuZ2VQYWdlc2l6ZUNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdHN3aXRjaCAoZXZlbnQuZ2V0VHlwZSgpKSB7XG5cdFx0XHRjYXNlICdQYWdlQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50JzpcblxuXHRcdFx0XHRjb25zdCBwYWdlQ2hhbmdlZEV2ZW50ID0gbmV3IFBhZ2VDaGFuZ2VkRXZlbnQoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpKTtcblxuXHRcdFx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gocGFnZUNoYW5nZWRFdmVudCk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ1BhZ2VzaXplQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50JzpcblxuXHRcdFx0XHRjb25zdCBwYWdlc2l6ZUNoYW5nZWRFdmVudCA9IG5ldyBQYWdlc2l6ZUNoYW5nZWRFdmVudChjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXG5cdFx0XHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChwYWdlc2l6ZUNoYW5nZWRFdmVudCk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ1N0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRBZ2dyZWdhdGVFdmVudCc6XG5cblx0XHRcdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKGV2ZW50LnRvRG9tYWluRXZlbnQoKSk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxufVxuIl19