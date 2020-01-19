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
        var aggregateId = domainEvent.aggregateId;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS5ldmVudC5sb2dnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJpbmZyYXN0cnVjdHVyZS9sb2dnZXIvZXZlbnQvY29uc29sZS5ldmVudC5sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFeEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFHaEc7SUFDd0MsOENBQWlCO0lBTXhELDRCQUFZLFFBQXdCLEVBQ2hCLHNCQUE4QztRQURsRSxZQUVDLGlCQUFPLFNBVVA7UUFYbUIsNEJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUwxRCxhQUFPLEdBQUcsS0FBSyxDQUFDO1FBRWhCLGtCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQU1wQyxRQUFRO2FBQ04sSUFBSSxDQUNKLE1BQU07OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxFQUFaLENBQVksRUFBQyxFQUMxQixTQUFTLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUM1QjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLFdBQXdCO1lBQ25DLEtBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxFQUFDLENBQUM7O0lBQ0wsQ0FBQzs7OztJQUVELHdDQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsa0NBQUs7OztJQUFMO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELGlDQUFJOzs7SUFBSjtRQUNDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7OztJQUVTLGtDQUFLOzs7OztJQUFmLFVBQWdCLFdBQXdCOztZQUNqQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFdBQVc7O1lBQzFDLFVBQVUsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMseUJBQXlCLENBQUMsV0FBVyxDQUFDO1FBRWhGLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM5RCxDQUFDOztnQkF2Q0QsVUFBVTs7OztnQkFMRixjQUFjO2dCQUVkLHNCQUFzQjs7SUE0Qy9CLHlCQUFDO0NBQUEsQUF6Q0QsQ0FDd0MsaUJBQWlCLEdBd0N4RDtTQXhDWSxrQkFBa0I7Ozs7OztJQUU5QixxQ0FBd0I7Ozs7O0lBRXhCLDBDQUFxQzs7Ozs7SUFHbEMsb0RBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRMb2dnZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LmxvZ2dlcic7XG5pbXBvcnQgeyBEb21haW5FdmVudEJ1cyB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuYnVzJztcbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvc3RvcmUvYWdncmVnYXRlLXN0b3JlLnJlZ2lzdGVyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uc29sZUV2ZW50TG9nZ2VyIGV4dGVuZHMgRG9tYWluRXZlbnRMb2dnZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgZW5hYmxlZCA9IGZhbHNlO1xuXG5cdHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3QoKTtcblxuXHRjb25zdHJ1Y3RvcihldmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWdncmVnYXRlU3RvcmVSZWdpc3RlcjogQWdncmVnYXRlU3RvcmVSZWdpc3Rlcikge1xuXHRcdHN1cGVyKCk7XG5cblx0XHRldmVudEJ1c1xuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcigoKSA9PiB0aGlzLmVuYWJsZWQpLFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChkb21haW5FdmVudDogRG9tYWluRXZlbnQpID0+IHtcblx0XHRcdFx0dGhpcy5sb2coZG9tYWluRXZlbnQpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG5cdFx0dGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcblx0fVxuXG5cdHN0YXJ0KCk6IHZvaWQge1xuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdH1cblxuXHRzdG9wKCk6IHZvaWQge1xuXHRcdHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuXHR9XG5cblx0cHJvdGVjdGVkIHByaW50KGRvbWFpbkV2ZW50OiBEb21haW5FdmVudCk6IHZvaWQge1xuXHRcdGNvbnN0IGFnZ3JlZ2F0ZUlkID0gZG9tYWluRXZlbnQuYWdncmVnYXRlSWQsXG5cdFx0XHRhZ2dyZWdhdGVzID0gdGhpcy5hZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyLmNhcHR1cmVBZ2dyZWdhdGVzU25hcHNob3QoYWdncmVnYXRlSWQpO1xuXG5cdFx0Y29uc29sZS5sb2coZG9tYWluRXZlbnQudG9TdHJpbmcoKSwgZG9tYWluRXZlbnQsIGFnZ3JlZ2F0ZXMpO1xuXHR9XG5cbn1cbiJdfQ==