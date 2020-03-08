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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmFnZ3JlZ2F0ZS5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImluZnJhc3RydWN0dXJlL2luLW1lbW9yeS9jb21tYW5kL2luLW1lbW9yeS5hZ2dyZWdhdGUuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQzs7Ozs7QUFPL0UsTUFBTSxPQUFnQixzQkFBNEMsU0FBUSxjQUFpQjs7Ozs7O0lBRTFGLFlBQXVDLGFBQStCLEVBQzlDLHNCQUE4QztRQUNyRSxLQUFLLEVBQUUsQ0FBQztRQUY4QixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDOUMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUVyRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBSUQsSUFBSSxDQUFDLEdBQWlCO1FBRXJCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN2QixHQUFHLENBQUMsT0FBTzs7OztZQUFDLENBQUMsU0FBWSxFQUFFLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ25DLENBQUMsRUFBQyxDQUFDO1NBQ0g7YUFBTTs7a0JBQ0EsU0FBUyxHQUFHLEdBQUc7WUFFckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbEM7SUFDRixDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxXQUF3Qjs7Y0FFekIsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUV4RCxZQUFZLENBQUMsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUMsQ0FBQztRQUUvQyxPQUFPLFlBQVksQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsTUFBTTtRQUNMLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxXQUF3QjtRQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBRUQ7Ozs7OztJQXRDc0IsK0NBQWdEOzs7OztJQUMvRCx3REFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9hZ2dyZWdhdGUtaWQnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tbWFuZC9hZ2dyZWdhdGUvYWdncmVnYXRlJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVN0b3JlIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvc3RvcmUvYWdncmVnYXRlLnN0b3JlJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tbWFuZC9zdG9yZS9hZ2dyZWdhdGUtc3RvcmUucmVnaXN0ZXInO1xuXG5pbXBvcnQgeyBJbk1lbW9yeVN0b3JlIH0gZnJvbSAnLi4vaW4tbWVtb3J5LnN0b3JlJztcblxuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vb3B0aW9uYWwnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSW5NZW1vcnlBZ2dyZWdhdGVTdG9yZTxUIGV4dGVuZHMgQWdncmVnYXRlPiBleHRlbmRzIEFnZ3JlZ2F0ZVN0b3JlPFQ+IHtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpbk1lbW9yeVN0b3JlOiBJbk1lbW9yeVN0b3JlPFQ+LFxuXHRcdFx0XHRcdFx0ICBwcml2YXRlIHJlYWRvbmx5IGFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXI6IEFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuYWdncmVnYXRlU3RvcmVSZWdpc3Rlci5yZWdpc3Rlcih0aGlzKTtcblx0fVxuXG5cdHNhdmUoYWdncmVnYXRlOiBUKTogdm9pZDtcblx0c2F2ZShhZ2dyZWdhdGVzOiBBcnJheTxUPik6IHZvaWQ7XG5cdHNhdmUoYXJnOiBUIHwgQXJyYXk8VD4pOiB2b2lkIHtcblxuXHRcdGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdGFyZy5mb3JFYWNoKChhZ2dyZWdhdGU6IFQpID0+IHtcblx0XHRcdFx0dGhpcy5pbk1lbW9yeVN0b3JlLnNldChhZ2dyZWdhdGUpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGFnZ3JlZ2F0ZSA9IGFyZztcblxuXHRcdFx0dGhpcy5pbk1lbW9yeVN0b3JlLnNldChhZ2dyZWdhdGUpO1xuXHRcdH1cblx0fVxuXG5cdGdldEJ5SWQoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogT3B0aW9uYWw8VD4ge1xuXG5cdFx0Y29uc3Qgb3B0QWdncmVnYXRlID0gdGhpcy5pbk1lbW9yeVN0b3JlLmdldChhZ2dyZWdhdGVJZCk7XG5cblx0XHRvcHRBZ2dyZWdhdGUuaWZQcmVzZW50KChhKSA9PiBhLmNsZWFyRXZlbnRzKCkpO1xuXG5cdFx0cmV0dXJuIG9wdEFnZ3JlZ2F0ZTtcblx0fVxuXG5cdGdldEFsbCgpOiBBcnJheTxUPiB7XG5cdFx0cmV0dXJuIHRoaXMuaW5NZW1vcnlTdG9yZS5nZXRBbGwoKTtcblx0fVxuXG5cdHJlbW92ZShhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmluTWVtb3J5U3RvcmUuZGVsZXRlKGFnZ3JlZ2F0ZUlkKTtcblx0fVxuXG59XG4iXX0=