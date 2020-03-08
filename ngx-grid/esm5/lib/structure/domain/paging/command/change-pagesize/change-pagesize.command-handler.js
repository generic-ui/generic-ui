/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../structure/command/structure-aggregate.repository';
import { ChangePagesizeCommand } from './change-pagesize.command';
import { PageChangedEvent } from '../page/page-changed.event';
import { PagesizeChangedEvent } from './pagesize-changed.event';
var ChangePagesizeCommandHandler = /** @class */ (function () {
    function ChangePagesizeCommandHandler(structureAggregateRepository, domainEventPublisher) {
        this.structureAggregateRepository = structureAggregateRepository;
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
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return ChangePagesizeCommandHandler;
}());
export { ChangePagesizeCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ChangePagesizeCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @protected
     */
    ChangePagesizeCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhZ2VzaXplLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vcGFnaW5nL2NvbW1hbmQvY2hhbmdlLXBhZ2VzaXplL2NoYW5nZS1wYWdlc2l6ZS5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBa0Msb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUxRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUN6RyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUloRTtJQUdDLHNDQUFvQiw0QkFBMEQsRUFDakUsb0JBQTBDO1FBRG5DLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7UUFDakUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUN2RCxDQUFDOzs7O0lBRUQsaURBQVU7OztJQUFWO1FBQ0MsT0FBTyxxQkFBcUIsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFRCxzREFBZTs7Ozs7SUFBZixVQUFnQixrQkFBc0MsRUFBRSxPQUE4Qjs7WUFFL0UsUUFBUSxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUU7UUFFdEMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7OztJQUVELDBEQUFtQjs7Ozs7SUFBbkIsVUFBb0IsU0FBNkIsRUFBRSxPQUE4Qjs7WUFFMUUsZUFBZSxHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUU7UUFFN0MsQ0FBQyxtQkFBQSxlQUFlLEVBQU8sQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLEtBQXFCO1lBQ3RELENBQUMsbUJBQUEsS0FBSyxFQUFPLENBQUMsQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2hELENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7Ozs7O0lBRU8sNkRBQXNCOzs7Ozs7SUFBOUIsVUFBK0IsTUFBcUMsRUFBRSxPQUE4Qjs7O1lBRW5HLEtBQWtCLElBQUEsV0FBQSxpQkFBQSxNQUFNLENBQUEsOEJBQUEsa0RBQUU7Z0JBQXJCLElBQUksT0FBSyxtQkFBQTtnQkFDYixJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQzNDOzs7Ozs7Ozs7SUFDRixDQUFDOzs7Ozs7O0lBRU8sNERBQXFCOzs7Ozs7SUFBN0IsVUFBOEIsS0FBcUIsRUFBRSxPQUE4QjtRQUVsRixRQUFRLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUN4QixLQUFLLDJCQUEyQjs7b0JBRXpCLGdCQUFnQixHQUFHLElBQUksZ0JBQWdCLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUV2RSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBRXBELE1BQU07WUFFUCxLQUFLLCtCQUErQjs7b0JBRTdCLG9CQUFvQixHQUFHLElBQUksb0JBQW9CLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUUvRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBRXhELE1BQU07WUFFUDtnQkFDQyxNQUFNO1NBQ1A7SUFDRixDQUFDOztnQkExREQsVUFBVTs7OztnQkFQRiw0QkFBNEI7Z0JBRkksb0JBQW9COztJQW9FN0QsbUNBQUM7Q0FBQSxBQTNERCxJQTJEQztTQTFEWSw0QkFBNEI7Ozs7OztJQUU1QixvRUFBa0U7Ozs7O0lBQzNFLDREQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvY29tbWFuZC9zdHJ1Y3R1cmUtYWdncmVnYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ2hhbmdlUGFnZXNpemVDb21tYW5kIH0gZnJvbSAnLi9jaGFuZ2UtcGFnZXNpemUuY29tbWFuZCc7XG5pbXBvcnQgeyBQYWdlQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vcGFnZS9wYWdlLWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgUGFnZXNpemVDaGFuZ2VkRXZlbnQgfSBmcm9tICcuL3BhZ2VzaXplLWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2NvbW1hbmQvc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENoYW5nZVBhZ2VzaXplQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGUsIENoYW5nZVBhZ2VzaXplQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeTogU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJvdGVjdGVkIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBUeXBlPENoYW5nZVBhZ2VzaXplQ29tbWFuZD4ge1xuXHRcdHJldHVybiBDaGFuZ2VQYWdlc2l6ZUNvbW1hbmQ7XG5cdH1cblxuXHRoYW5kbGVBZ2dyZWdhdGUoc3RydWN0dXJlQWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IENoYW5nZVBhZ2VzaXplQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgcGFnZVNpemUgPSBjb21tYW5kLmdldFBhZ2VTaXplKCk7XG5cblx0XHRzdHJ1Y3R1cmVBZ2dyZWdhdGUuY2hhbmdlUGFnZVNpemUocGFnZVNpemUpO1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogQ2hhbmdlUGFnZXNpemVDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBhZ2dyZWdhdGVFdmVudHMgPSBhZ2dyZWdhdGUuZ2V0RXZlbnRzKCk7XG5cblx0XHQoYWdncmVnYXRlRXZlbnRzIGFzIGFueSkuZm9yRWFjaCgoZXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50KSA9PiB7XG5cdFx0XHQoZXZlbnQgYXMgYW55KS5hZ2dyZWdhdGVJZCA9IGFnZ3JlZ2F0ZS5nZXRJZCgpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5wdWJsaXNoQWdncmVnYXRlRXZlbnRzKGFnZ3JlZ2F0ZUV2ZW50cywgY29tbWFuZCk7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hBZ2dyZWdhdGVFdmVudHMoZXZlbnRzOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PiwgY29tbWFuZDogQ2hhbmdlUGFnZXNpemVDb21tYW5kKTogdm9pZCB7XG5cblx0XHRmb3IgKGxldCBldmVudCBvZiBldmVudHMpIHtcblx0XHRcdHRoaXMucHVibGlzaEFnZ3JlZ2F0ZUV2ZW50KGV2ZW50LCBjb21tYW5kKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hBZ2dyZWdhdGVFdmVudChldmVudDogQWdncmVnYXRlRXZlbnQsIGNvbW1hbmQ6IENoYW5nZVBhZ2VzaXplQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0c3dpdGNoIChldmVudC5nZXRUeXBlKCkpIHtcblx0XHRcdGNhc2UgJ1BhZ2VDaGFuZ2VkQWdncmVnYXRlRXZlbnQnOlxuXG5cdFx0XHRcdGNvbnN0IHBhZ2VDaGFuZ2VkRXZlbnQgPSBuZXcgUGFnZUNoYW5nZWRFdmVudChjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXG5cdFx0XHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChwYWdlQ2hhbmdlZEV2ZW50KTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnUGFnZXNpemVDaGFuZ2VkQWdncmVnYXRlRXZlbnQnOlxuXG5cdFx0XHRcdGNvbnN0IHBhZ2VzaXplQ2hhbmdlZEV2ZW50ID0gbmV3IFBhZ2VzaXplQ2hhbmdlZEV2ZW50KGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cblx0XHRcdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKHBhZ2VzaXplQ2hhbmdlZEV2ZW50KTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG59XG4iXX0=