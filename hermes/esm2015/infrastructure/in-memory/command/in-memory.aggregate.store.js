/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateStore } from '../../../domain/command/store/aggregate.store';
/**
 * @abstract
 * @template I, T
 */
export class InMemoryAggregateStore extends AggregateStore {
    /**
     * @protected
     * @param {?} inMemoryStore
     * @param {?} aggregateStoreRegister
     */
    constructor(inMemoryStore, aggregateStoreRegister) {
        super();
        this.inMemoryStore = inMemoryStore;
        this.aggregateStoreRegister = aggregateStoreRegister;
        this.aggregateStoreRegister.register(this);
    }
    /**
     * @param {?} arg
     * @return {?}
     */
    save(arg) {
        if (Array.isArray(arg)) {
            arg.forEach((/**
             * @param {?} aggregate
             * @return {?}
             */
            (aggregate) => {
                this.inMemoryStore.set(aggregate);
            }));
        }
        else {
            /** @type {?} */
            const aggregate = arg;
            this.inMemoryStore.set(aggregate);
        }
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    getById(aggregateId) {
        /** @type {?} */
        const optAggregate = this.inMemoryStore.get(aggregateId);
        optAggregate.ifPresent((/**
         * @param {?} a
         * @return {?}
         */
        (a) => a.clearEvents()));
        return optAggregate;
    }
    /**
     * @return {?}
     */
    getAll() {
        return this.inMemoryStore.getAll();
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    remove(aggregateId) {
        this.inMemoryStore.delete(aggregateId);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmFnZ3JlZ2F0ZS5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImluZnJhc3RydWN0dXJlL2luLW1lbW9yeS9jb21tYW5kL2luLW1lbW9yeS5hZ2dyZWdhdGUuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQzs7Ozs7QUFPL0UsTUFBTSxPQUFnQixzQkFBMEUsU0FBUSxjQUFvQjs7Ozs7O0lBRTNILFlBQXVDLGFBQWtDLEVBQ2pELHNCQUE4QztRQUNyRSxLQUFLLEVBQUUsQ0FBQztRQUY4QixrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7UUFDakQsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUVyRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBSUQsSUFBSSxDQUFDLEdBQWlCO1FBRXJCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN2QixHQUFHLENBQUMsT0FBTzs7OztZQUFDLENBQUMsU0FBWSxFQUFFLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ25DLENBQUMsRUFBQyxDQUFDO1NBQ0g7YUFBTTs7a0JBQ0EsU0FBUyxHQUFHLEdBQUc7WUFFckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbEM7SUFDRixDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxXQUFjOztjQUVmLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFFeEQsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFDLENBQUM7UUFFL0MsT0FBTyxZQUFZLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELE1BQU07UUFDTCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsV0FBYztRQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBRUQ7Ozs7OztJQXRDc0IsK0NBQW1EOzs7OztJQUNsRSx3REFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9hZ2dyZWdhdGUtaWQnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVSb290IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1yb290JztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVN0b3JlIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvc3RvcmUvYWdncmVnYXRlLnN0b3JlJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tbWFuZC9zdG9yZS9hZ2dyZWdhdGUtc3RvcmUucmVnaXN0ZXInO1xuXG5pbXBvcnQgeyBJbk1lbW9yeVN0b3JlIH0gZnJvbSAnLi4vaW4tbWVtb3J5LnN0b3JlJztcblxuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vb3B0aW9uYWwnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSW5NZW1vcnlBZ2dyZWdhdGVTdG9yZTxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIFQgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PEk+PiBleHRlbmRzIEFnZ3JlZ2F0ZVN0b3JlPEksIFQ+IHtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpbk1lbW9yeVN0b3JlOiBJbk1lbW9yeVN0b3JlPEksIFQ+LFxuXHRcdFx0XHRcdFx0ICBwcml2YXRlIHJlYWRvbmx5IGFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXI6IEFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuYWdncmVnYXRlU3RvcmVSZWdpc3Rlci5yZWdpc3Rlcih0aGlzKTtcblx0fVxuXG5cdHNhdmUoYWdncmVnYXRlOiBUKTogdm9pZDtcblx0c2F2ZShhZ2dyZWdhdGVzOiBBcnJheTxUPik6IHZvaWQ7XG5cdHNhdmUoYXJnOiBUIHwgQXJyYXk8VD4pOiB2b2lkIHtcblxuXHRcdGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdGFyZy5mb3JFYWNoKChhZ2dyZWdhdGU6IFQpID0+IHtcblx0XHRcdFx0dGhpcy5pbk1lbW9yeVN0b3JlLnNldChhZ2dyZWdhdGUpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGFnZ3JlZ2F0ZSA9IGFyZztcblxuXHRcdFx0dGhpcy5pbk1lbW9yeVN0b3JlLnNldChhZ2dyZWdhdGUpO1xuXHRcdH1cblx0fVxuXG5cdGdldEJ5SWQoYWdncmVnYXRlSWQ6IEkpOiBPcHRpb25hbDxUPiB7XG5cblx0XHRjb25zdCBvcHRBZ2dyZWdhdGUgPSB0aGlzLmluTWVtb3J5U3RvcmUuZ2V0KGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdG9wdEFnZ3JlZ2F0ZS5pZlByZXNlbnQoKGEpID0+IGEuY2xlYXJFdmVudHMoKSk7XG5cblx0XHRyZXR1cm4gb3B0QWdncmVnYXRlO1xuXHR9XG5cblx0Z2V0QWxsKCk6IEFycmF5PFQ+IHtcblx0XHRyZXR1cm4gdGhpcy5pbk1lbW9yeVN0b3JlLmdldEFsbCgpO1xuXHR9XG5cblx0cmVtb3ZlKGFnZ3JlZ2F0ZUlkOiBJKTogdm9pZCB7XG5cdFx0dGhpcy5pbk1lbW9yeVN0b3JlLmRlbGV0ZShhZ2dyZWdhdGVJZCk7XG5cdH1cblxufVxuIl19