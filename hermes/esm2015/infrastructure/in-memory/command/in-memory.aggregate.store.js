/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateStore } from '../../../domain/command/store/aggregate.store';
/**
 * @abstract
 * @template T
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmFnZ3JlZ2F0ZS5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImluZnJhc3RydWN0dXJlL2luLW1lbW9yeS9jb21tYW5kL2luLW1lbW9yeS5hZ2dyZWdhdGUuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQzs7Ozs7QUFPL0UsTUFBTSxPQUFnQixzQkFBNEMsU0FBUSxjQUFpQjs7Ozs7O0lBRTFGLFlBQXVDLGFBQStCLEVBQzlDLHNCQUE4QztRQUNyRSxLQUFLLEVBQUUsQ0FBQztRQUY4QixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDOUMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUVyRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBSUQsSUFBSSxDQUFDLEdBQWlCO1FBRXJCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN2QixHQUFHLENBQUMsT0FBTzs7OztZQUFDLENBQUMsU0FBWSxFQUFFLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ25DLENBQUMsRUFBQyxDQUFDO1NBQ0g7YUFBTTs7a0JBQ0EsU0FBUyxHQUFHLEdBQUc7WUFFckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbEM7SUFDRixDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxXQUF3Qjs7Y0FFekIsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUV4RCxZQUFZLENBQUMsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUMsQ0FBQztRQUUvQyxPQUFPLFlBQVksQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsTUFBTTtRQUNMLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxXQUF3QjtRQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBRUQ7Ozs7OztJQXRDc0IsK0NBQWdEOzs7OztJQUMvRCx3REFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9hZ2dyZWdhdGUtaWQnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tbWFuZC9hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgQWdncmVnYXRlU3RvcmUgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tbWFuZC9zdG9yZS9hZ2dyZWdhdGUuc3RvcmUnO1xuaW1wb3J0IHsgQWdncmVnYXRlU3RvcmVSZWdpc3RlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL3N0b3JlL2FnZ3JlZ2F0ZS1zdG9yZS5yZWdpc3Rlcic7XG5cbmltcG9ydCB7IEluTWVtb3J5U3RvcmUgfSBmcm9tICcuLi9pbi1tZW1vcnkuc3RvcmUnO1xuXG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9vcHRpb25hbCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJbk1lbW9yeUFnZ3JlZ2F0ZVN0b3JlPFQgZXh0ZW5kcyBBZ2dyZWdhdGU+IGV4dGVuZHMgQWdncmVnYXRlU3RvcmU8VD4ge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGluTWVtb3J5U3RvcmU6IEluTWVtb3J5U3RvcmU8VD4sXG5cdFx0XHRcdFx0XHQgIHByaXZhdGUgcmVhZG9ubHkgYWdncmVnYXRlU3RvcmVSZWdpc3RlcjogQWdncmVnYXRlU3RvcmVSZWdpc3Rlcikge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5hZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyLnJlZ2lzdGVyKHRoaXMpO1xuXHR9XG5cblx0c2F2ZShhZ2dyZWdhdGU6IFQpOiB2b2lkO1xuXHRzYXZlKGFnZ3JlZ2F0ZXM6IEFycmF5PFQ+KTogdm9pZDtcblx0c2F2ZShhcmc6IFQgfCBBcnJheTxUPik6IHZvaWQge1xuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0YXJnLmZvckVhY2goKGFnZ3JlZ2F0ZTogVCkgPT4ge1xuXHRcdFx0XHR0aGlzLmluTWVtb3J5U3RvcmUuc2V0KGFnZ3JlZ2F0ZSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgYWdncmVnYXRlID0gYXJnO1xuXG5cdFx0XHR0aGlzLmluTWVtb3J5U3RvcmUuc2V0KGFnZ3JlZ2F0ZSk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0QnlJZChhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBPcHRpb25hbDxUPiB7XG5cblx0XHRjb25zdCBvcHRBZ2dyZWdhdGUgPSB0aGlzLmluTWVtb3J5U3RvcmUuZ2V0KGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdG9wdEFnZ3JlZ2F0ZS5pZlByZXNlbnQoKGEpID0+IGEuY2xlYXJFdmVudHMoKSk7XG5cblx0XHRyZXR1cm4gb3B0QWdncmVnYXRlO1xuXHR9XG5cblx0Z2V0QWxsKCk6IEFycmF5PFQ+IHtcblx0XHRyZXR1cm4gdGhpcy5pbk1lbW9yeVN0b3JlLmdldEFsbCgpO1xuXHR9XG5cblx0cmVtb3ZlKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IHZvaWQge1xuXHRcdHRoaXMuaW5NZW1vcnlTdG9yZS5kZWxldGUoYWdncmVnYXRlSWQpO1xuXHR9XG5cbn1cbiJdfQ==