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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmFnZ3JlZ2F0ZS5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImluZnJhc3RydWN0dXJlL2luLW1lbW9yeS9jb21tYW5kL2luLW1lbW9yeS5hZ2dyZWdhdGUuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0NBQStDLENBQUM7Ozs7O0FBTy9FOzs7OztJQUEwRSxrREFBaUI7SUFFMUYsZ0NBQXVDLGFBQStCLEVBQzlDLHNCQUE4QztRQUR0RSxZQUVDLGlCQUFPLFNBRVA7UUFKc0MsbUJBQWEsR0FBYixhQUFhLENBQWtCO1FBQzlDLDRCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFFckUsS0FBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsQ0FBQzs7SUFDNUMsQ0FBQzs7Ozs7SUFJRCxxQ0FBSTs7OztJQUFKLFVBQUssR0FBaUI7UUFBdEIsaUJBV0M7UUFUQSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdkIsR0FBRyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFDLFNBQVk7Z0JBQ3hCLEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ25DLENBQUMsRUFBQyxDQUFDO1NBQ0g7YUFBTTs7Z0JBQ0EsU0FBUyxHQUFHLEdBQUc7WUFFckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbEM7SUFDRixDQUFDOzs7OztJQUVELHdDQUFPOzs7O0lBQVAsVUFBUSxXQUF3Qjs7WUFFekIsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUV4RCxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFmLENBQWUsRUFBQyxDQUFDO1FBRS9DLE9BQU8sWUFBWSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCx1Q0FBTTs7O0lBQU47UUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCx1Q0FBTTs7OztJQUFOLFVBQU8sV0FBd0I7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVGLDZCQUFDO0FBQUQsQ0FBQyxBQXhDRCxDQUEwRSxjQUFjLEdBd0N2Rjs7Ozs7Ozs7Ozs7SUF0Q3NCLCtDQUFnRDs7Ozs7SUFDL0Qsd0RBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vYWdncmVnYXRlLWlkJztcblxuaW1wb3J0IHsgQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvYWdncmVnYXRlL2FnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVTdG9yZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL3N0b3JlL2FnZ3JlZ2F0ZS5zdG9yZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvc3RvcmUvYWdncmVnYXRlLXN0b3JlLnJlZ2lzdGVyJztcblxuaW1wb3J0IHsgSW5NZW1vcnlTdG9yZSB9IGZyb20gJy4uL2luLW1lbW9yeS5zdG9yZSc7XG5cbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL29wdGlvbmFsJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEluTWVtb3J5QWdncmVnYXRlU3RvcmU8VCBleHRlbmRzIEFnZ3JlZ2F0ZT4gZXh0ZW5kcyBBZ2dyZWdhdGVTdG9yZTxUPiB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaW5NZW1vcnlTdG9yZTogSW5NZW1vcnlTdG9yZTxUPixcblx0XHRcdFx0XHRcdCAgcHJpdmF0ZSByZWFkb25seSBhZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyOiBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIucmVnaXN0ZXIodGhpcyk7XG5cdH1cblxuXHRzYXZlKGFnZ3JlZ2F0ZTogVCk6IHZvaWQ7XG5cdHNhdmUoYWdncmVnYXRlczogQXJyYXk8VD4pOiB2b2lkO1xuXHRzYXZlKGFyZzogVCB8IEFycmF5PFQ+KTogdm9pZCB7XG5cblx0XHRpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRhcmcuZm9yRWFjaCgoYWdncmVnYXRlOiBUKSA9PiB7XG5cdFx0XHRcdHRoaXMuaW5NZW1vcnlTdG9yZS5zZXQoYWdncmVnYXRlKTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBhZ2dyZWdhdGUgPSBhcmc7XG5cblx0XHRcdHRoaXMuaW5NZW1vcnlTdG9yZS5zZXQoYWdncmVnYXRlKTtcblx0XHR9XG5cdH1cblxuXHRnZXRCeUlkKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IE9wdGlvbmFsPFQ+IHtcblxuXHRcdGNvbnN0IG9wdEFnZ3JlZ2F0ZSA9IHRoaXMuaW5NZW1vcnlTdG9yZS5nZXQoYWdncmVnYXRlSWQpO1xuXG5cdFx0b3B0QWdncmVnYXRlLmlmUHJlc2VudCgoYSkgPT4gYS5jbGVhckV2ZW50cygpKTtcblxuXHRcdHJldHVybiBvcHRBZ2dyZWdhdGU7XG5cdH1cblxuXHRnZXRBbGwoKTogQXJyYXk8VD4ge1xuXHRcdHJldHVybiB0aGlzLmluTWVtb3J5U3RvcmUuZ2V0QWxsKCk7XG5cdH1cblxuXHRyZW1vdmUoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5pbk1lbW9yeVN0b3JlLmRlbGV0ZShhZ2dyZWdhdGVJZCk7XG5cdH1cblxufVxuIl19