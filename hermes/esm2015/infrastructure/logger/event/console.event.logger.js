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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS5ldmVudC5sb2dnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJpbmZyYXN0cnVjdHVyZS9sb2dnZXIvZXZlbnQvY29uc29sZS5ldmVudC5sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUV4RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUloRyxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsaUJBQWlCOzs7OztJQU14RCxZQUFZLFFBQXdCLEVBQ2hCLHNCQUE4QztRQUNqRSxLQUFLLEVBQUUsQ0FBQztRQURXLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFMMUQsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUVoQixpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFNcEMsUUFBUTthQUNOLElBQUksQ0FDSixNQUFNOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLEVBQzFCLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQzVCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsV0FBd0IsRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsS0FBSztRQUNKLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxJQUFJO1FBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7Ozs7O0lBRVMsS0FBSyxDQUFDLFdBQXdCOztjQUNqQyxXQUFXLEdBQUcsV0FBVyxDQUFDLGNBQWMsRUFBRTs7Y0FDL0MsVUFBVSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyx5QkFBeUIsQ0FBQyxXQUFXLENBQUM7UUFFaEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzlELENBQUM7OztZQXZDRCxVQUFVOzs7O1lBTEYsY0FBYztZQUVkLHNCQUFzQjs7Ozs7OztJQU05QixxQ0FBd0I7Ozs7O0lBRXhCLDBDQUFxQzs7Ozs7SUFHbEMsb0RBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRMb2dnZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LmxvZ2dlcic7XG5pbXBvcnQgeyBEb21haW5FdmVudEJ1cyB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuYnVzJztcbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvc3RvcmUvYWdncmVnYXRlLXN0b3JlLnJlZ2lzdGVyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uc29sZUV2ZW50TG9nZ2VyIGV4dGVuZHMgRG9tYWluRXZlbnRMb2dnZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgZW5hYmxlZCA9IGZhbHNlO1xuXG5cdHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3QoKTtcblxuXHRjb25zdHJ1Y3RvcihldmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWdncmVnYXRlU3RvcmVSZWdpc3RlcjogQWdncmVnYXRlU3RvcmVSZWdpc3Rlcikge1xuXHRcdHN1cGVyKCk7XG5cblx0XHRldmVudEJ1c1xuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcigoKSA9PiB0aGlzLmVuYWJsZWQpLFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChkb21haW5FdmVudDogRG9tYWluRXZlbnQpID0+IHtcblx0XHRcdFx0dGhpcy5sb2coZG9tYWluRXZlbnQpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG5cdFx0dGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcblx0fVxuXG5cdHN0YXJ0KCk6IHZvaWQge1xuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdH1cblxuXHRzdG9wKCk6IHZvaWQge1xuXHRcdHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuXHR9XG5cblx0cHJvdGVjdGVkIHByaW50KGRvbWFpbkV2ZW50OiBEb21haW5FdmVudCk6IHZvaWQge1xuXHRcdGNvbnN0IGFnZ3JlZ2F0ZUlkID0gZG9tYWluRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSxcblx0XHRcdGFnZ3JlZ2F0ZXMgPSB0aGlzLmFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIuY2FwdHVyZUFnZ3JlZ2F0ZXNTbmFwc2hvdChhZ2dyZWdhdGVJZCk7XG5cblx0XHRjb25zb2xlLmxvZyhkb21haW5FdmVudC50b1N0cmluZygpLCBkb21haW5FdmVudCwgYWdncmVnYXRlcyk7XG5cdH1cblxufVxuIl19