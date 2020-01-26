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
        const aggregate = this.inMemoryStore.get(aggregateId);
        if (aggregate) {
            aggregate.clearEvents();
        }
        return aggregate;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmFnZ3JlZ2F0ZS5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImluZnJhc3RydWN0dXJlL2luLW1lbW9yeS9jb21tYW5kL2luLW1lbW9yeS5hZ2dyZWdhdGUuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQzs7Ozs7QUFLL0UsTUFBTSxPQUFnQixzQkFBNEMsU0FBUSxjQUFpQjs7Ozs7O0lBRTFGLFlBQXVDLGFBQStCLEVBQzlDLHNCQUE4QztRQUNyRSxLQUFLLEVBQUUsQ0FBQztRQUY4QixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDOUMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUVyRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBSUQsSUFBSSxDQUFDLEdBQWlCO1FBRXJCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN2QixHQUFHLENBQUMsT0FBTzs7OztZQUFDLENBQUMsU0FBWSxFQUFFLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ25DLENBQUMsRUFBQyxDQUFDO1NBQ0g7YUFBTTs7a0JBQ0EsU0FBUyxHQUFHLEdBQUc7WUFFckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbEM7SUFDRixDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxXQUF3Qjs7Y0FFekIsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUVyRCxJQUFJLFNBQVMsRUFBRTtZQUNkLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN4QjtRQUVELE9BQU8sU0FBUyxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0wsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFdBQXdCO1FBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Q0FFRDs7Ozs7O0lBeENzQiwrQ0FBZ0Q7Ozs7O0lBQy9ELHdEQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2FnZ3JlZ2F0ZS1pZCc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL2FnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVTdG9yZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL3N0b3JlL2FnZ3JlZ2F0ZS5zdG9yZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvc3RvcmUvYWdncmVnYXRlLXN0b3JlLnJlZ2lzdGVyJztcblxuaW1wb3J0IHsgSW5NZW1vcnlTdG9yZSB9IGZyb20gJy4uL2luLW1lbW9yeS5zdG9yZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJbk1lbW9yeUFnZ3JlZ2F0ZVN0b3JlPFQgZXh0ZW5kcyBBZ2dyZWdhdGU+IGV4dGVuZHMgQWdncmVnYXRlU3RvcmU8VD4ge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGluTWVtb3J5U3RvcmU6IEluTWVtb3J5U3RvcmU8VD4sXG5cdFx0XHRcdFx0XHQgIHByaXZhdGUgcmVhZG9ubHkgYWdncmVnYXRlU3RvcmVSZWdpc3RlcjogQWdncmVnYXRlU3RvcmVSZWdpc3Rlcikge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5hZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyLnJlZ2lzdGVyKHRoaXMpO1xuXHR9XG5cblx0c2F2ZShhZ2dyZWdhdGU6IFQpOiB2b2lkO1xuXHRzYXZlKGFnZ3JlZ2F0ZXM6IEFycmF5PFQ+KTogdm9pZDtcblx0c2F2ZShhcmc6IFQgfCBBcnJheTxUPik6IHZvaWQge1xuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0YXJnLmZvckVhY2goKGFnZ3JlZ2F0ZTogVCkgPT4ge1xuXHRcdFx0XHR0aGlzLmluTWVtb3J5U3RvcmUuc2V0KGFnZ3JlZ2F0ZSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgYWdncmVnYXRlID0gYXJnO1xuXG5cdFx0XHR0aGlzLmluTWVtb3J5U3RvcmUuc2V0KGFnZ3JlZ2F0ZSk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0QnlJZChhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBUIHtcblxuXHRcdGNvbnN0IGFnZ3JlZ2F0ZSA9IHRoaXMuaW5NZW1vcnlTdG9yZS5nZXQoYWdncmVnYXRlSWQpO1xuXG5cdFx0aWYgKGFnZ3JlZ2F0ZSkge1xuXHRcdFx0YWdncmVnYXRlLmNsZWFyRXZlbnRzKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFnZ3JlZ2F0ZTtcblx0fVxuXG5cdGdldEFsbCgpOiBBcnJheTxUPiB7XG5cdFx0cmV0dXJuIHRoaXMuaW5NZW1vcnlTdG9yZS5nZXRBbGwoKTtcblx0fVxuXG5cdHJlbW92ZShhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmluTWVtb3J5U3RvcmUuZGVsZXRlKGFnZ3JlZ2F0ZUlkKTtcblx0fVxuXG59XG4iXX0=