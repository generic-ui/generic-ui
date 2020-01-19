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
        const aggregateId = domainEvent.aggregateId;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS5ldmVudC5sb2dnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJpbmZyYXN0cnVjdHVyZS9sb2dnZXIvZXZlbnQvY29uc29sZS5ldmVudC5sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUV4RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUloRyxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsaUJBQWlCOzs7OztJQU14RCxZQUFZLFFBQXdCLEVBQ2hCLHNCQUE4QztRQUNqRSxLQUFLLEVBQUUsQ0FBQztRQURXLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFMMUQsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUVoQixpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFNcEMsUUFBUTthQUNOLElBQUksQ0FDSixNQUFNOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLEVBQzFCLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQzVCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsV0FBd0IsRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsS0FBSztRQUNKLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxJQUFJO1FBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7Ozs7O0lBRVMsS0FBSyxDQUFDLFdBQXdCOztjQUNqQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFdBQVc7O2NBQzFDLFVBQVUsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMseUJBQXlCLENBQUMsV0FBVyxDQUFDO1FBRWhGLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7WUF2Q0QsVUFBVTs7OztZQUxGLGNBQWM7WUFFZCxzQkFBc0I7Ozs7Ozs7SUFNOUIscUNBQXdCOzs7OztJQUV4QiwwQ0FBcUM7Ozs7O0lBR2xDLG9EQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50TG9nZ2VyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5sb2dnZXInO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRCdXMgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LmJ1cyc7XG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgQWdncmVnYXRlU3RvcmVSZWdpc3RlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL3N0b3JlL2FnZ3JlZ2F0ZS1zdG9yZS5yZWdpc3Rlcic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbnNvbGVFdmVudExvZ2dlciBleHRlbmRzIERvbWFpbkV2ZW50TG9nZ2VyIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRwcml2YXRlIGVuYWJsZWQgPSBmYWxzZTtcblxuXHRwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0KCk7XG5cblx0Y29uc3RydWN0b3IoZXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXI6IEFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0ZXZlbnRCdXNcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKCkgPT4gdGhpcy5lbmFibGVkKSxcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZG9tYWluRXZlbnQ6IERvbWFpbkV2ZW50KSA9PiB7XG5cdFx0XHRcdHRoaXMubG9nKGRvbWFpbkV2ZW50KTtcblx0XHRcdH0pO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG5cdH1cblxuXHRzdGFydCgpOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHR9XG5cblx0c3RvcCgpOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZWQgPSBmYWxzZTtcblx0fVxuXG5cdHByb3RlY3RlZCBwcmludChkb21haW5FdmVudDogRG9tYWluRXZlbnQpOiB2b2lkIHtcblx0XHRjb25zdCBhZ2dyZWdhdGVJZCA9IGRvbWFpbkV2ZW50LmFnZ3JlZ2F0ZUlkLFxuXHRcdFx0YWdncmVnYXRlcyA9IHRoaXMuYWdncmVnYXRlU3RvcmVSZWdpc3Rlci5jYXB0dXJlQWdncmVnYXRlc1NuYXBzaG90KGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdGNvbnNvbGUubG9nKGRvbWFpbkV2ZW50LnRvU3RyaW5nKCksIGRvbWFpbkV2ZW50LCBhZ2dyZWdhdGVzKTtcblx0fVxuXG59XG4iXX0=