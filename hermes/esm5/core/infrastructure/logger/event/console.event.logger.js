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
        // eslint-disable-next-line no-console
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS5ldmVudC5sb2dnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb3JlL2luZnJhc3RydWN0dXJlL2xvZ2dlci9ldmVudC9jb25zb2xlLmV2ZW50LmxvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUV4RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUloRztJQUN3Qyw4Q0FBaUI7SUFNeEQsNEJBQVksUUFBd0IsRUFDaEIsc0JBQThDO1FBRGxFLFlBRUMsaUJBQU8sU0FVUDtRQVhtQiw0QkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBTDFELGFBQU8sR0FBRyxLQUFLLENBQUM7UUFFaEIsa0JBQVksR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBTXBDLFFBQVE7YUFDTixJQUFJLENBQ0osTUFBTTs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLEVBQVosQ0FBWSxFQUFDLEVBQzFCLFNBQVMsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQzVCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsV0FBcUM7WUFDaEQsS0FBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN2QixDQUFDLEVBQUMsQ0FBQzs7SUFDTCxDQUFDOzs7O0lBRUQsd0NBQVc7OztJQUFYO1FBQ0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxrQ0FBSzs7O0lBQUw7UUFDQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsaUNBQUk7OztJQUFKO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7Ozs7O0lBRVMsa0NBQUs7Ozs7O0lBQWYsVUFBZ0IsV0FBcUM7O1lBQzlDLFdBQVcsR0FBRyxXQUFXLENBQUMsY0FBYyxFQUFFOztZQUMvQyxVQUFVLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLHlCQUF5QixDQUFDLFdBQVcsQ0FBQztRQUVoRixzQ0FBc0M7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzlELENBQUM7O2dCQXhDRCxVQUFVOzs7O2dCQU5GLGNBQWM7Z0JBRWQsc0JBQXNCOztJQThDL0IseUJBQUM7Q0FBQSxBQTFDRCxDQUN3QyxpQkFBaUIsR0F5Q3hEO1NBekNZLGtCQUFrQjs7Ozs7O0lBRTlCLHFDQUF3Qjs7Ozs7SUFFeEIsMENBQXFDOzs7OztJQUdsQyxvREFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudExvZ2dlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQubG9nZ2VyJztcbmltcG9ydCB7IERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5idXMnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tbWFuZC9zdG9yZS9hZ2dyZWdhdGUtc3RvcmUucmVnaXN0ZXInO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbnNvbGVFdmVudExvZ2dlciBleHRlbmRzIERvbWFpbkV2ZW50TG9nZ2VyIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRwcml2YXRlIGVuYWJsZWQgPSBmYWxzZTtcblxuXHRwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0KCk7XG5cblx0Y29uc3RydWN0b3IoZXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXI6IEFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0ZXZlbnRCdXNcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKCkgPT4gdGhpcy5lbmFibGVkKSxcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZG9tYWluRXZlbnQ6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPikgPT4ge1xuXHRcdFx0XHR0aGlzLmxvZyhkb21haW5FdmVudCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0c3RhcnQoKTogdm9pZCB7XG5cdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0fVxuXG5cdHN0b3AoKTogdm9pZCB7XG5cdFx0dGhpcy5lbmFibGVkID0gZmFsc2U7XG5cdH1cblxuXHRwcm90ZWN0ZWQgcHJpbnQoZG9tYWluRXZlbnQ6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPik6IHZvaWQge1xuXHRcdGNvbnN0IGFnZ3JlZ2F0ZUlkID0gZG9tYWluRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSxcblx0XHRcdGFnZ3JlZ2F0ZXMgPSB0aGlzLmFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIuY2FwdHVyZUFnZ3JlZ2F0ZXNTbmFwc2hvdChhZ2dyZWdhdGVJZCk7XG5cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXHRcdGNvbnNvbGUubG9nKGRvbWFpbkV2ZW50LnRvU3RyaW5nKCksIGRvbWFpbkV2ZW50LCBhZ2dyZWdhdGVzKTtcblx0fVxuXG59XG4iXX0=