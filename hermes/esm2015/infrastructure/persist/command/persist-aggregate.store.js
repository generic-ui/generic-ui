/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateStore } from '../../../domain/command/store/aggregate.store';
/**
 * @abstract
 * @template I, D, A
 */
export class PersistAggregateStore extends AggregateStore {
    /**
     * @protected
     * @param {?} stateStore
     * @param {?} aggregateStoreRegister
     */
    constructor(stateStore, aggregateStoreRegister) {
        super();
        this.stateStore = stateStore;
        this.aggregateStoreRegister = aggregateStoreRegister;
        this.aggregateStoreRegister.register(this);
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    save(aggregate) {
        this.saveValue(aggregate);
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    getById(aggregateId) {
        return this.getValue(aggregateId);
    }
    /**
     * @private
     * @param {?} aggregate
     * @return {?}
     */
    saveValue(aggregate) {
        /** @type {?} */
        const anemia = this.toAnemia(aggregate);
        this.stateStore.set(anemia);
    }
    /**
     * @private
     * @param {?} aggregateId
     * @return {?}
     */
    getValue(aggregateId) {
        /** @type {?} */
        const optAnemia = this.stateStore.get(aggregateId);
        return optAnemia.map(this.fromAnemia);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    PersistAggregateStore.prototype.stateStore;
    /**
     * @type {?}
     * @private
     */
    PersistAggregateStore.prototype.aggregateStoreRegister;
    /**
     * @abstract
     * @param {?} aggregate
     * @return {?}
     */
    PersistAggregateStore.prototype.toAnemia = function (aggregate) { };
    /**
     * @abstract
     * @param {?} anemia
     * @return {?}
     */
    PersistAggregateStore.prototype.fromAnemia = function (anemia) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC1hZ2dyZWdhdGUuc3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJpbmZyYXN0cnVjdHVyZS9wZXJzaXN0L2NvbW1hbmQvcGVyc2lzdC1hZ2dyZWdhdGUuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQzs7Ozs7QUFTL0UsTUFBTSxPQUFnQixxQkFBbUgsU0FBUSxjQUFvQjs7Ozs7O0lBRXBLLFlBQXVDLFVBQXFDLEVBQ3BELHNCQUE4QztRQUNyRSxLQUFLLEVBQUUsQ0FBQztRQUY4QixlQUFVLEdBQVYsVUFBVSxDQUEyQjtRQUNwRCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBRXJFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFNRCxJQUFJLENBQUMsU0FBWTtRQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLFdBQWM7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7OztJQUVPLFNBQVMsQ0FBQyxTQUFZOztjQUV2QixNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFFdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Ozs7O0lBRU8sUUFBUSxDQUFDLFdBQWM7O2NBQ3hCLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFFbEQsT0FBTyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBRUQ7Ozs7OztJQS9Cc0IsMkNBQXNEOzs7OztJQUNyRSx1REFBK0Q7Ozs7OztJQUt0RSxvRUFBbUM7Ozs7OztJQUVuQyxtRUFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9hZ2dyZWdhdGUtaWQnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVSb290IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1yb290JztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVN0b3JlIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvc3RvcmUvYWdncmVnYXRlLnN0b3JlJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tbWFuZC9zdG9yZS9hZ2dyZWdhdGUtc3RvcmUucmVnaXN0ZXInO1xuXG5pbXBvcnQgeyBQZXJzaXN0QW5lbWlhIH0gZnJvbSAnLi4vcGVyc2lzdC1hbmVtaWEnO1xuaW1wb3J0IHsgUGVyc2lzdFN0YXRlU3RvcmUgfSBmcm9tICcuLi9wZXJzaXN0LXN0YXRlLnN0b3JlJztcbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL29wdGlvbmFsJztcbmltcG9ydCB7IFJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvcmVhZC9yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQZXJzaXN0QWdncmVnYXRlU3RvcmU8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBEIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQSBleHRlbmRzIFBlcnNpc3RBbmVtaWE8UmVhZE1vZGVsUm9vdElkPj4gZXh0ZW5kcyBBZ2dyZWdhdGVTdG9yZTxJLCBEPiB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RhdGVTdG9yZTogUGVyc2lzdFN0YXRlU3RvcmU8YW55LCBBPixcblx0XHRcdFx0XHRcdCAgcHJpdmF0ZSByZWFkb25seSBhZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyOiBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIucmVnaXN0ZXIodGhpcyk7XG5cdH1cblxuXHRhYnN0cmFjdCB0b0FuZW1pYShhZ2dyZWdhdGU6IEQpOiBBO1xuXG5cdGFic3RyYWN0IGZyb21BbmVtaWEoYW5lbWlhOiBBKTogRDtcblxuXHRzYXZlKGFnZ3JlZ2F0ZTogRCk6IHZvaWQge1xuXHRcdHRoaXMuc2F2ZVZhbHVlKGFnZ3JlZ2F0ZSk7XG5cdH1cblxuXHRnZXRCeUlkKGFnZ3JlZ2F0ZUlkOiBJKTogT3B0aW9uYWw8RD4ge1xuXHRcdHJldHVybiB0aGlzLmdldFZhbHVlKGFnZ3JlZ2F0ZUlkKTtcblx0fVxuXG5cdHByaXZhdGUgc2F2ZVZhbHVlKGFnZ3JlZ2F0ZTogRCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgYW5lbWlhID0gdGhpcy50b0FuZW1pYShhZ2dyZWdhdGUpO1xuXG5cdFx0dGhpcy5zdGF0ZVN0b3JlLnNldChhbmVtaWEpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRWYWx1ZShhZ2dyZWdhdGVJZDogSSk6IE9wdGlvbmFsPEQ+IHtcblx0XHRjb25zdCBvcHRBbmVtaWEgPSB0aGlzLnN0YXRlU3RvcmUuZ2V0KGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdHJldHVybiBvcHRBbmVtaWEubWFwKHRoaXMuZnJvbUFuZW1pYSk7XG5cdH1cblxufVxuIl19