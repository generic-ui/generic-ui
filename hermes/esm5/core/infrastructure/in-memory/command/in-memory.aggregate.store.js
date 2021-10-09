/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateStore } from '../../../domain/command/store/aggregate.store';
/**
 * @abstract
 * @template I, T
 */
var /**
 * @abstract
 * @template I, T
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
    InMemoryAggregateStore.prototype.findById = /**
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
 * @template I, T
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmFnZ3JlZ2F0ZS5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvcmUvaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2NvbW1hbmQvaW4tbWVtb3J5LmFnZ3JlZ2F0ZS5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQzs7Ozs7QUFPL0U7Ozs7O0lBQXdHLGtEQUFvQjtJQUUzSCxnQ0FBdUMsYUFBa0MsRUFDakQsc0JBQThDO1FBRHRFLFlBRUMsaUJBQU8sU0FFUDtRQUpzQyxtQkFBYSxHQUFiLGFBQWEsQ0FBcUI7UUFDakQsNEJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUVyRSxLQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxDQUFDOztJQUM1QyxDQUFDOzs7OztJQUlELHFDQUFJOzs7O0lBQUosVUFBSyxHQUFpQjtRQUF0QixpQkFXQztRQVRBLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN2QixHQUFHLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsU0FBWTtnQkFDeEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbkMsQ0FBQyxFQUFDLENBQUM7U0FDSDthQUFNOztnQkFDQSxTQUFTLEdBQUcsR0FBRztZQUVyQixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNsQztJQUNGLENBQUM7Ozs7O0lBRUQseUNBQVE7Ozs7SUFBUixVQUFTLFdBQWM7O1lBRWhCLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFFeEQsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBZixDQUFlLEVBQUMsQ0FBQztRQUUvQyxPQUFPLFlBQVksQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELHVDQUFNOzs7O0lBQU4sVUFBTyxXQUFjO1FBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRiw2QkFBQztBQUFELENBQUMsQUFwQ0QsQ0FBd0csY0FBYyxHQW9Dckg7Ozs7Ozs7Ozs7O0lBbENzQiwrQ0FBbUQ7Ozs7O0lBQ2xFLHdEQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVSb290IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtcm9vdCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVTdG9yZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL3N0b3JlL2FnZ3JlZ2F0ZS5zdG9yZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvc3RvcmUvYWdncmVnYXRlLXN0b3JlLnJlZ2lzdGVyJztcblxuaW1wb3J0IHsgSW5NZW1vcnlTdG9yZSB9IGZyb20gJy4uL2luLW1lbW9yeS5zdG9yZSc7XG5cbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL29wdGlvbmFsJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEluTWVtb3J5QWdncmVnYXRlU3RvcmU8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBUIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPj4gZXh0ZW5kcyBBZ2dyZWdhdGVTdG9yZTxJLCBUPiB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaW5NZW1vcnlTdG9yZTogSW5NZW1vcnlTdG9yZTxJLCBUPixcblx0XHRcdFx0XHRcdCAgcHJpdmF0ZSByZWFkb25seSBhZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyOiBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIucmVnaXN0ZXIodGhpcyk7XG5cdH1cblxuXHRzYXZlKGFnZ3JlZ2F0ZTogVCk6IHZvaWQ7XG5cdHNhdmUoYWdncmVnYXRlczogQXJyYXk8VD4pOiB2b2lkO1xuXHRzYXZlKGFyZzogVCB8IEFycmF5PFQ+KTogdm9pZCB7XG5cblx0XHRpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRhcmcuZm9yRWFjaCgoYWdncmVnYXRlOiBUKSA9PiB7XG5cdFx0XHRcdHRoaXMuaW5NZW1vcnlTdG9yZS5zZXQoYWdncmVnYXRlKTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBhZ2dyZWdhdGUgPSBhcmc7XG5cblx0XHRcdHRoaXMuaW5NZW1vcnlTdG9yZS5zZXQoYWdncmVnYXRlKTtcblx0XHR9XG5cdH1cblxuXHRmaW5kQnlJZChhZ2dyZWdhdGVJZDogSSk6IE9wdGlvbmFsPFQ+IHtcblxuXHRcdGNvbnN0IG9wdEFnZ3JlZ2F0ZSA9IHRoaXMuaW5NZW1vcnlTdG9yZS5nZXQoYWdncmVnYXRlSWQpO1xuXG5cdFx0b3B0QWdncmVnYXRlLmlmUHJlc2VudCgoYSkgPT4gYS5jbGVhckV2ZW50cygpKTtcblxuXHRcdHJldHVybiBvcHRBZ2dyZWdhdGU7XG5cdH1cblxuXHRyZW1vdmUoYWdncmVnYXRlSWQ6IEkpOiB2b2lkIHtcblx0XHR0aGlzLmluTWVtb3J5U3RvcmUuZGVsZXRlKGFnZ3JlZ2F0ZUlkKTtcblx0fVxuXG59XG4iXX0=