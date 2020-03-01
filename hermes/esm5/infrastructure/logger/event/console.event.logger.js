/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { DomainEventLogger } from '../../../domain/event/domain-event.logger';
import { DomainEventBus } from '../../../domain/event/domain-event.bus';
import { AggregateStoreRegister } from '../../../domain/command/store/aggregate-store.register';
var ConsoleEventLogger = /** @class */ (function (_super) {
    tslib_1.__extends(ConsoleEventLogger, _super);
    function ConsoleEventLogger(eventBus, aggregateStoreRegister) {
        var _this = _super.call(this) || this;
        _this.aggregateStoreRegister = aggregateStoreRegister;
        _this.enabled = false;
        _this.unsubscribe$ = new Subject();
        eventBus
            .pipe(filter((/**
         * @return {?}
         */
        function () { return _this.enabled; })), takeUntil(_this.unsubscribe$))
            .subscribe((/**
         * @param {?} domainEvent
         * @return {?}
         */
        function (domainEvent) {
            _this.log(domainEvent);
        }));
        return _this;
    }
    /**
     * @return {?}
     */
    ConsoleEventLogger.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    /**
     * @return {?}
     */
    ConsoleEventLogger.prototype.start = /**
     * @return {?}
     */
    function () {
        this.enabled = true;
    };
    /**
     * @return {?}
     */
    ConsoleEventLogger.prototype.stop = /**
     * @return {?}
     */
    function () {
        this.enabled = false;
    };
    /**
     * @protected
     * @param {?} domainEvent
     * @return {?}
     */
    ConsoleEventLogger.prototype.print = /**
     * @protected
     * @param {?} domainEvent
     * @return {?}
     */
    function (domainEvent) {
        /** @type {?} */
        var aggregateId = domainEvent.getAggregateId();
        /** @type {?} */
        var aggregates = this.aggregateStoreRegister.captureAggregatesSnapshot(aggregateId);
        console.log(domainEvent.toString(), domainEvent, aggregates);
    };
    ConsoleEventLogger.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ConsoleEventLogger.ctorParameters = function () { return [
        { type: DomainEventBus },
        { type: AggregateStoreRegister }
    ]; };
    return ConsoleEventLogger;
}(DomainEventLogger));
export { ConsoleEventLogger };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS5ldmVudC5sb2dnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJpbmZyYXN0cnVjdHVyZS9sb2dnZXIvZXZlbnQvY29uc29sZS5ldmVudC5sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFeEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFHaEc7SUFDd0MsOENBQWlCO0lBTXhELDRCQUFZLFFBQXdCLEVBQ2hCLHNCQUE4QztRQURsRSxZQUVDLGlCQUFPLFNBVVA7UUFYbUIsNEJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUwxRCxhQUFPLEdBQUcsS0FBSyxDQUFDO1FBRWhCLGtCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQU1wQyxRQUFRO2FBQ04sSUFBSSxDQUNKLE1BQU07OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxFQUFaLENBQVksRUFBQyxFQUMxQixTQUFTLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUM1QjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLFdBQXdCO1lBQ25DLEtBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxFQUFDLENBQUM7O0lBQ0wsQ0FBQzs7OztJQUVELHdDQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsa0NBQUs7OztJQUFMO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELGlDQUFJOzs7SUFBSjtRQUNDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7OztJQUVTLGtDQUFLOzs7OztJQUFmLFVBQWdCLFdBQXdCOztZQUNqQyxXQUFXLEdBQUcsV0FBVyxDQUFDLGNBQWMsRUFBRTs7WUFDL0MsVUFBVSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyx5QkFBeUIsQ0FBQyxXQUFXLENBQUM7UUFFaEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzlELENBQUM7O2dCQXZDRCxVQUFVOzs7O2dCQUxGLGNBQWM7Z0JBRWQsc0JBQXNCOztJQTRDL0IseUJBQUM7Q0FBQSxBQXpDRCxDQUN3QyxpQkFBaUIsR0F3Q3hEO1NBeENZLGtCQUFrQjs7Ozs7O0lBRTlCLHFDQUF3Qjs7Ozs7SUFFeEIsMENBQXFDOzs7OztJQUdsQyxvREFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudExvZ2dlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQubG9nZ2VyJztcbmltcG9ydCB7IERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5idXMnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tbWFuZC9zdG9yZS9hZ2dyZWdhdGUtc3RvcmUucmVnaXN0ZXInO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb25zb2xlRXZlbnRMb2dnZXIgZXh0ZW5kcyBEb21haW5FdmVudExvZ2dlciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0cHJpdmF0ZSBlbmFibGVkID0gZmFsc2U7XG5cblx0cHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdCgpO1xuXG5cdGNvbnN0cnVjdG9yKGV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyOiBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdGV2ZW50QnVzXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZmlsdGVyKCgpID0+IHRoaXMuZW5hYmxlZCksXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGRvbWFpbkV2ZW50OiBEb21haW5FdmVudCkgPT4ge1xuXHRcdFx0XHR0aGlzLmxvZyhkb21haW5FdmVudCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0c3RhcnQoKTogdm9pZCB7XG5cdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0fVxuXG5cdHN0b3AoKTogdm9pZCB7XG5cdFx0dGhpcy5lbmFibGVkID0gZmFsc2U7XG5cdH1cblxuXHRwcm90ZWN0ZWQgcHJpbnQoZG9tYWluRXZlbnQ6IERvbWFpbkV2ZW50KTogdm9pZCB7XG5cdFx0Y29uc3QgYWdncmVnYXRlSWQgPSBkb21haW5FdmVudC5nZXRBZ2dyZWdhdGVJZCgpLFxuXHRcdFx0YWdncmVnYXRlcyA9IHRoaXMuYWdncmVnYXRlU3RvcmVSZWdpc3Rlci5jYXB0dXJlQWdncmVnYXRlc1NuYXBzaG90KGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdGNvbnNvbGUubG9nKGRvbWFpbkV2ZW50LnRvU3RyaW5nKCksIGRvbWFpbkV2ZW50LCBhZ2dyZWdhdGVzKTtcblx0fVxuXG59XG4iXX0=