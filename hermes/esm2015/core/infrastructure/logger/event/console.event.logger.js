/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { DomainEventLogger } from '../../../domain/event/domain-event.logger';
import { DomainEventBus } from '../../../domain/event/domain-event.bus';
import { AggregateStoreRegister } from '../../../domain/command/store/aggregate-store.register';
export class ConsoleEventLogger extends DomainEventLogger {
    /**
     * @param {?} eventBus
     * @param {?} aggregateStoreRegister
     */
    constructor(eventBus, aggregateStoreRegister) {
        super();
        this.aggregateStoreRegister = aggregateStoreRegister;
        this.enabled = false;
        this.unsubscribe$ = new Subject();
        eventBus
            .pipe(filter((/**
         * @return {?}
         */
        () => this.enabled)), takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} domainEvent
         * @return {?}
         */
        (domainEvent) => {
            this.log(domainEvent);
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    /**
     * @return {?}
     */
    start() {
        this.enabled = true;
    }
    /**
     * @return {?}
     */
    stop() {
        this.enabled = false;
    }
    /**
     * @protected
     * @param {?} domainEvent
     * @return {?}
     */
    print(domainEvent) {
        /** @type {?} */
        const aggregateId = domainEvent.getAggregateId();
        /** @type {?} */
        const aggregates = this.aggregateStoreRegister.captureAggregatesSnapshot(aggregateId);
        // eslint-disable-next-line no-console
        console.log(domainEvent.toString(), domainEvent, aggregates);
    }
}
ConsoleEventLogger.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ConsoleEventLogger.ctorParameters = () => [
    { type: DomainEventBus },
    { type: AggregateStoreRegister }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConsoleEventLogger.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    ConsoleEventLogger.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    ConsoleEventLogger.prototype.aggregateStoreRegister;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS5ldmVudC5sb2dnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb3JlL2luZnJhc3RydWN0dXJlL2xvZ2dlci9ldmVudC9jb25zb2xlLmV2ZW50LmxvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRXhFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBS2hHLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxpQkFBaUI7Ozs7O0lBTXhELFlBQVksUUFBd0IsRUFDaEIsc0JBQThDO1FBQ2pFLEtBQUssRUFBRSxDQUFDO1FBRFcsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUwxRCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRWhCLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQU1wQyxRQUFRO2FBQ04sSUFBSSxDQUNKLE1BQU07OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsRUFDMUIsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDNUI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxXQUFxQyxFQUFFLEVBQUU7WUFDcEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN2QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0osSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELElBQUk7UUFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7Ozs7SUFFUyxLQUFLLENBQUMsV0FBcUM7O2NBQzlDLFdBQVcsR0FBRyxXQUFXLENBQUMsY0FBYyxFQUFFOztjQUMvQyxVQUFVLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLHlCQUF5QixDQUFDLFdBQVcsQ0FBQztRQUVoRixzQ0FBc0M7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzlELENBQUM7OztZQXhDRCxVQUFVOzs7O1lBTkYsY0FBYztZQUVkLHNCQUFzQjs7Ozs7OztJQU85QixxQ0FBd0I7Ozs7O0lBRXhCLDBDQUFxQzs7Ozs7SUFHbEMsb0RBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRMb2dnZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LmxvZ2dlcic7XG5pbXBvcnQgeyBEb21haW5FdmVudEJ1cyB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuYnVzJztcbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvc3RvcmUvYWdncmVnYXRlLXN0b3JlLnJlZ2lzdGVyJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb25zb2xlRXZlbnRMb2dnZXIgZXh0ZW5kcyBEb21haW5FdmVudExvZ2dlciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0cHJpdmF0ZSBlbmFibGVkID0gZmFsc2U7XG5cblx0cHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdCgpO1xuXG5cdGNvbnN0cnVjdG9yKGV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyOiBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdGV2ZW50QnVzXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZmlsdGVyKCgpID0+IHRoaXMuZW5hYmxlZCksXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGRvbWFpbkV2ZW50OiBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4pID0+IHtcblx0XHRcdFx0dGhpcy5sb2coZG9tYWluRXZlbnQpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG5cdFx0dGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcblx0fVxuXG5cdHN0YXJ0KCk6IHZvaWQge1xuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdH1cblxuXHRzdG9wKCk6IHZvaWQge1xuXHRcdHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuXHR9XG5cblx0cHJvdGVjdGVkIHByaW50KGRvbWFpbkV2ZW50OiBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4pOiB2b2lkIHtcblx0XHRjb25zdCBhZ2dyZWdhdGVJZCA9IGRvbWFpbkV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksXG5cdFx0XHRhZ2dyZWdhdGVzID0gdGhpcy5hZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyLmNhcHR1cmVBZ2dyZWdhdGVzU25hcHNob3QoYWdncmVnYXRlSWQpO1xuXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblx0XHRjb25zb2xlLmxvZyhkb21haW5FdmVudC50b1N0cmluZygpLCBkb21haW5FdmVudCwgYWdncmVnYXRlcyk7XG5cdH1cblxufVxuIl19