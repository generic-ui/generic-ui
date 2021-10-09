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
    findById(aggregateId) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmFnZ3JlZ2F0ZS5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvcmUvaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2NvbW1hbmQvaW4tbWVtb3J5LmFnZ3JlZ2F0ZS5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtDQUErQyxDQUFDOzs7OztBQU8vRSxNQUFNLE9BQWdCLHNCQUEwRSxTQUFRLGNBQW9COzs7Ozs7SUFFM0gsWUFBdUMsYUFBa0MsRUFDakQsc0JBQThDO1FBQ3JFLEtBQUssRUFBRSxDQUFDO1FBRjhCLGtCQUFhLEdBQWIsYUFBYSxDQUFxQjtRQUNqRCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBRXJFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFJRCxJQUFJLENBQUMsR0FBaUI7UUFFckIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLEdBQUcsQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxTQUFZLEVBQUUsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbkMsQ0FBQyxFQUFDLENBQUM7U0FDSDthQUFNOztrQkFDQSxTQUFTLEdBQUcsR0FBRztZQUVyQixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNsQztJQUNGLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLFdBQWM7O2NBRWhCLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFFeEQsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFDLENBQUM7UUFFL0MsT0FBTyxZQUFZLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsV0FBYztRQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBRUQ7Ozs7OztJQWxDc0IsK0NBQW1EOzs7OztJQUNsRSx3REFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcblxuaW1wb3J0IHsgQWdncmVnYXRlUm9vdCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJvb3QnO1xuaW1wb3J0IHsgQWdncmVnYXRlU3RvcmUgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tbWFuZC9zdG9yZS9hZ2dyZWdhdGUuc3RvcmUnO1xuaW1wb3J0IHsgQWdncmVnYXRlU3RvcmVSZWdpc3RlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL3N0b3JlL2FnZ3JlZ2F0ZS1zdG9yZS5yZWdpc3Rlcic7XG5cbmltcG9ydCB7IEluTWVtb3J5U3RvcmUgfSBmcm9tICcuLi9pbi1tZW1vcnkuc3RvcmUnO1xuXG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9vcHRpb25hbCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJbk1lbW9yeUFnZ3JlZ2F0ZVN0b3JlPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgVCBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Q8ST4+IGV4dGVuZHMgQWdncmVnYXRlU3RvcmU8SSwgVD4ge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGluTWVtb3J5U3RvcmU6IEluTWVtb3J5U3RvcmU8SSwgVD4sXG5cdFx0XHRcdFx0XHQgIHByaXZhdGUgcmVhZG9ubHkgYWdncmVnYXRlU3RvcmVSZWdpc3RlcjogQWdncmVnYXRlU3RvcmVSZWdpc3Rlcikge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5hZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyLnJlZ2lzdGVyKHRoaXMpO1xuXHR9XG5cblx0c2F2ZShhZ2dyZWdhdGU6IFQpOiB2b2lkO1xuXHRzYXZlKGFnZ3JlZ2F0ZXM6IEFycmF5PFQ+KTogdm9pZDtcblx0c2F2ZShhcmc6IFQgfCBBcnJheTxUPik6IHZvaWQge1xuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0YXJnLmZvckVhY2goKGFnZ3JlZ2F0ZTogVCkgPT4ge1xuXHRcdFx0XHR0aGlzLmluTWVtb3J5U3RvcmUuc2V0KGFnZ3JlZ2F0ZSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgYWdncmVnYXRlID0gYXJnO1xuXG5cdFx0XHR0aGlzLmluTWVtb3J5U3RvcmUuc2V0KGFnZ3JlZ2F0ZSk7XG5cdFx0fVxuXHR9XG5cblx0ZmluZEJ5SWQoYWdncmVnYXRlSWQ6IEkpOiBPcHRpb25hbDxUPiB7XG5cblx0XHRjb25zdCBvcHRBZ2dyZWdhdGUgPSB0aGlzLmluTWVtb3J5U3RvcmUuZ2V0KGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdG9wdEFnZ3JlZ2F0ZS5pZlByZXNlbnQoKGEpID0+IGEuY2xlYXJFdmVudHMoKSk7XG5cblx0XHRyZXR1cm4gb3B0QWdncmVnYXRlO1xuXHR9XG5cblx0cmVtb3ZlKGFnZ3JlZ2F0ZUlkOiBJKTogdm9pZCB7XG5cdFx0dGhpcy5pbk1lbW9yeVN0b3JlLmRlbGV0ZShhZ2dyZWdhdGVJZCk7XG5cdH1cblxufVxuIl19