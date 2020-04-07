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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmFnZ3JlZ2F0ZS5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImluZnJhc3RydWN0dXJlL2luLW1lbW9yeS9jb21tYW5kL2luLW1lbW9yeS5hZ2dyZWdhdGUuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0NBQStDLENBQUM7Ozs7O0FBTy9FOzs7OztJQUF3RyxrREFBb0I7SUFFM0gsZ0NBQXVDLGFBQWtDLEVBQ2pELHNCQUE4QztRQUR0RSxZQUVDLGlCQUFPLFNBRVA7UUFKc0MsbUJBQWEsR0FBYixhQUFhLENBQXFCO1FBQ2pELDRCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFFckUsS0FBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsQ0FBQzs7SUFDNUMsQ0FBQzs7Ozs7SUFJRCxxQ0FBSTs7OztJQUFKLFVBQUssR0FBaUI7UUFBdEIsaUJBV0M7UUFUQSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdkIsR0FBRyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFDLFNBQVk7Z0JBQ3hCLEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ25DLENBQUMsRUFBQyxDQUFDO1NBQ0g7YUFBTTs7Z0JBQ0EsU0FBUyxHQUFHLEdBQUc7WUFFckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbEM7SUFDRixDQUFDOzs7OztJQUVELHdDQUFPOzs7O0lBQVAsVUFBUSxXQUFjOztZQUVmLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFFeEQsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBZixDQUFlLEVBQUMsQ0FBQztRQUUvQyxPQUFPLFlBQVksQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsdUNBQU07OztJQUFOO1FBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQsdUNBQU07Ozs7SUFBTixVQUFPLFdBQWM7UUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVGLDZCQUFDO0FBQUQsQ0FBQyxBQXhDRCxDQUF3RyxjQUFjLEdBd0NySDs7Ozs7Ozs7Ozs7SUF0Q3NCLCtDQUFtRDs7Ozs7SUFDbEUsd0RBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vYWdncmVnYXRlLWlkJztcblxuaW1wb3J0IHsgQWdncmVnYXRlUm9vdCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtcm9vdCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVTdG9yZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL3N0b3JlL2FnZ3JlZ2F0ZS5zdG9yZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvc3RvcmUvYWdncmVnYXRlLXN0b3JlLnJlZ2lzdGVyJztcblxuaW1wb3J0IHsgSW5NZW1vcnlTdG9yZSB9IGZyb20gJy4uL2luLW1lbW9yeS5zdG9yZSc7XG5cbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL29wdGlvbmFsJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEluTWVtb3J5QWdncmVnYXRlU3RvcmU8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBUIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPj4gZXh0ZW5kcyBBZ2dyZWdhdGVTdG9yZTxJLCBUPiB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaW5NZW1vcnlTdG9yZTogSW5NZW1vcnlTdG9yZTxJLCBUPixcblx0XHRcdFx0XHRcdCAgcHJpdmF0ZSByZWFkb25seSBhZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyOiBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIucmVnaXN0ZXIodGhpcyk7XG5cdH1cblxuXHRzYXZlKGFnZ3JlZ2F0ZTogVCk6IHZvaWQ7XG5cdHNhdmUoYWdncmVnYXRlczogQXJyYXk8VD4pOiB2b2lkO1xuXHRzYXZlKGFyZzogVCB8IEFycmF5PFQ+KTogdm9pZCB7XG5cblx0XHRpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRhcmcuZm9yRWFjaCgoYWdncmVnYXRlOiBUKSA9PiB7XG5cdFx0XHRcdHRoaXMuaW5NZW1vcnlTdG9yZS5zZXQoYWdncmVnYXRlKTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBhZ2dyZWdhdGUgPSBhcmc7XG5cblx0XHRcdHRoaXMuaW5NZW1vcnlTdG9yZS5zZXQoYWdncmVnYXRlKTtcblx0XHR9XG5cdH1cblxuXHRnZXRCeUlkKGFnZ3JlZ2F0ZUlkOiBJKTogT3B0aW9uYWw8VD4ge1xuXG5cdFx0Y29uc3Qgb3B0QWdncmVnYXRlID0gdGhpcy5pbk1lbW9yeVN0b3JlLmdldChhZ2dyZWdhdGVJZCk7XG5cblx0XHRvcHRBZ2dyZWdhdGUuaWZQcmVzZW50KChhKSA9PiBhLmNsZWFyRXZlbnRzKCkpO1xuXG5cdFx0cmV0dXJuIG9wdEFnZ3JlZ2F0ZTtcblx0fVxuXG5cdGdldEFsbCgpOiBBcnJheTxUPiB7XG5cdFx0cmV0dXJuIHRoaXMuaW5NZW1vcnlTdG9yZS5nZXRBbGwoKTtcblx0fVxuXG5cdHJlbW92ZShhZ2dyZWdhdGVJZDogSSk6IHZvaWQge1xuXHRcdHRoaXMuaW5NZW1vcnlTdG9yZS5kZWxldGUoYWdncmVnYXRlSWQpO1xuXHR9XG5cbn1cbiJdfQ==