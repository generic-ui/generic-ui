/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateStore } from '../../../domain/command/store/aggregate.store';
/**
 * @abstract
 * @template T
 */
var /**
 * @abstract
 * @template T
 */
InMemoryAggregateStore = /** @class */ (function (_super) {
    tslib_1.__extends(InMemoryAggregateStore, _super);
    function InMemoryAggregateStore(inMemoryStore, aggregateStoreRegister) {
        var _this = _super.call(this) || this;
        _this.inMemoryStore = inMemoryStore;
        _this.aggregateStoreRegister = aggregateStoreRegister;
        _this.aggregateStoreRegister.register(_this);
        return _this;
    }
    /**
     * @param {?} arg
     * @return {?}
     */
    InMemoryAggregateStore.prototype.save = /**
     * @param {?} arg
     * @return {?}
     */
    function (arg) {
        var _this = this;
        if (Array.isArray(arg)) {
            arg.forEach((/**
             * @param {?} aggregate
             * @return {?}
             */
            function (aggregate) {
                _this.inMemoryStore.set(aggregate);
            }));
        }
        else {
            /** @type {?} */
            var aggregate = arg;
            this.inMemoryStore.set(aggregate);
        }
    };
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    InMemoryAggregateStore.prototype.getById = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        /** @type {?} */
        var optAggregate = this.inMemoryStore.get(aggregateId);
        optAggregate.ifPresent((/**
         * @param {?} a
         * @return {?}
         */
        function (a) { return a.clearEvents(); }));
        return optAggregate;
    };
    /**
     * @return {?}
     */
    InMemoryAggregateStore.prototype.getAll = /**
     * @return {?}
     */
    function () {
        return this.inMemoryStore.getAll();
    };
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    InMemoryAggregateStore.prototype.remove = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        this.inMemoryStore.delete(aggregateId);
    };
    return InMemoryAggregateStore;
}(AggregateStore));
/**
 * @abstract
 * @template T
 */
export { InMemoryAggregateStore };
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryAggregateStore.prototype.inMemoryStore;
    /**
     * @type {?}
     * @private
     */
    InMemoryAggregateStore.prototype.aggregateStoreRegister;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmFnZ3JlZ2F0ZS5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImluZnJhc3RydWN0dXJlL2luLW1lbW9yeS9jb21tYW5kL2luLW1lbW9yeS5hZ2dyZWdhdGUuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0NBQStDLENBQUM7Ozs7O0FBTy9FOzs7OztJQUEwRSxrREFBaUI7SUFFMUYsZ0NBQXVDLGFBQStCLEVBQzlDLHNCQUE4QztRQUR0RSxZQUVDLGlCQUFPLFNBRVA7UUFKc0MsbUJBQWEsR0FBYixhQUFhLENBQWtCO1FBQzlDLDRCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFFckUsS0FBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsQ0FBQzs7SUFDNUMsQ0FBQzs7Ozs7SUFJRCxxQ0FBSTs7OztJQUFKLFVBQUssR0FBaUI7UUFBdEIsaUJBV0M7UUFUQSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdkIsR0FBRyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFDLFNBQVk7Z0JBQ3hCLEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ25DLENBQUMsRUFBQyxDQUFDO1NBQ0g7YUFBTTs7Z0JBQ0EsU0FBUyxHQUFHLEdBQUc7WUFFckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbEM7SUFDRixDQUFDOzs7OztJQUVELHdDQUFPOzs7O0lBQVAsVUFBUSxXQUF3Qjs7WUFFekIsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUV4RCxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFmLENBQWUsRUFBQyxDQUFDO1FBRS9DLE9BQU8sWUFBWSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCx1Q0FBTTs7O0lBQU47UUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCx1Q0FBTTs7OztJQUFOLFVBQU8sV0FBd0I7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVGLDZCQUFDO0FBQUQsQ0FBQyxBQXhDRCxDQUEwRSxjQUFjLEdBd0N2Rjs7Ozs7Ozs7Ozs7SUF0Q3NCLCtDQUFnRDs7Ozs7SUFDL0Qsd0RBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vYWdncmVnYXRlLWlkJztcblxuaW1wb3J0IHsgQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvYWdncmVnYXRlJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVN0b3JlIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvc3RvcmUvYWdncmVnYXRlLnN0b3JlJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tbWFuZC9zdG9yZS9hZ2dyZWdhdGUtc3RvcmUucmVnaXN0ZXInO1xuXG5pbXBvcnQgeyBJbk1lbW9yeVN0b3JlIH0gZnJvbSAnLi4vaW4tbWVtb3J5LnN0b3JlJztcblxuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vb3B0aW9uYWwnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSW5NZW1vcnlBZ2dyZWdhdGVTdG9yZTxUIGV4dGVuZHMgQWdncmVnYXRlPiBleHRlbmRzIEFnZ3JlZ2F0ZVN0b3JlPFQ+IHtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpbk1lbW9yeVN0b3JlOiBJbk1lbW9yeVN0b3JlPFQ+LFxuXHRcdFx0XHRcdFx0ICBwcml2YXRlIHJlYWRvbmx5IGFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXI6IEFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuYWdncmVnYXRlU3RvcmVSZWdpc3Rlci5yZWdpc3Rlcih0aGlzKTtcblx0fVxuXG5cdHNhdmUoYWdncmVnYXRlOiBUKTogdm9pZDtcblx0c2F2ZShhZ2dyZWdhdGVzOiBBcnJheTxUPik6IHZvaWQ7XG5cdHNhdmUoYXJnOiBUIHwgQXJyYXk8VD4pOiB2b2lkIHtcblxuXHRcdGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdGFyZy5mb3JFYWNoKChhZ2dyZWdhdGU6IFQpID0+IHtcblx0XHRcdFx0dGhpcy5pbk1lbW9yeVN0b3JlLnNldChhZ2dyZWdhdGUpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGFnZ3JlZ2F0ZSA9IGFyZztcblxuXHRcdFx0dGhpcy5pbk1lbW9yeVN0b3JlLnNldChhZ2dyZWdhdGUpO1xuXHRcdH1cblx0fVxuXG5cdGdldEJ5SWQoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogT3B0aW9uYWw8VD4ge1xuXG5cdFx0Y29uc3Qgb3B0QWdncmVnYXRlID0gdGhpcy5pbk1lbW9yeVN0b3JlLmdldChhZ2dyZWdhdGVJZCk7XG5cblx0XHRvcHRBZ2dyZWdhdGUuaWZQcmVzZW50KChhKSA9PiBhLmNsZWFyRXZlbnRzKCkpO1xuXG5cdFx0cmV0dXJuIG9wdEFnZ3JlZ2F0ZTtcblx0fVxuXG5cdGdldEFsbCgpOiBBcnJheTxUPiB7XG5cdFx0cmV0dXJuIHRoaXMuaW5NZW1vcnlTdG9yZS5nZXRBbGwoKTtcblx0fVxuXG5cdHJlbW92ZShhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmluTWVtb3J5U3RvcmUuZGVsZXRlKGFnZ3JlZ2F0ZUlkKTtcblx0fVxuXG59XG4iXX0=