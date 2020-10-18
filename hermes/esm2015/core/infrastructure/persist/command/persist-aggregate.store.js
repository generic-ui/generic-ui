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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC1hZ2dyZWdhdGUuc3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb3JlL2luZnJhc3RydWN0dXJlL3BlcnNpc3QvY29tbWFuZC9wZXJzaXN0LWFnZ3JlZ2F0ZS5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtDQUErQyxDQUFDOzs7OztBQVMvRSxNQUFNLE9BQWdCLHFCQUFtSCxTQUFRLGNBQW9COzs7Ozs7SUFFcEssWUFBdUMsVUFBcUMsRUFDcEQsc0JBQThDO1FBQ3JFLEtBQUssRUFBRSxDQUFDO1FBRjhCLGVBQVUsR0FBVixVQUFVLENBQTJCO1FBQ3BELDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFFckUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7OztJQU1ELElBQUksQ0FBQyxTQUFZO1FBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsV0FBYztRQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7O0lBRU8sU0FBUyxDQUFDLFNBQVk7O2NBRXZCLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUV2QyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7Ozs7SUFFTyxRQUFRLENBQUMsV0FBYzs7Y0FDeEIsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUVsRCxPQUFPLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FFRDs7Ozs7O0lBL0JzQiwyQ0FBc0Q7Ozs7O0lBQ3JFLHVEQUErRDs7Ozs7O0lBS3RFLG9FQUFtQzs7Ozs7O0lBRW5DLG1FQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVSb290IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtcm9vdCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVTdG9yZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL3N0b3JlL2FnZ3JlZ2F0ZS5zdG9yZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvc3RvcmUvYWdncmVnYXRlLXN0b3JlLnJlZ2lzdGVyJztcblxuaW1wb3J0IHsgUGVyc2lzdEFuZW1pYSB9IGZyb20gJy4uL3BlcnNpc3QtYW5lbWlhJztcbmltcG9ydCB7IFBlcnNpc3RTdGF0ZVN0b3JlIH0gZnJvbSAnLi4vcGVyc2lzdC1zdGF0ZS5zdG9yZSc7XG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9vcHRpb25hbCc7XG5pbXBvcnQgeyBSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi9hcGkvcmVhZC9yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQZXJzaXN0QWdncmVnYXRlU3RvcmU8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBEIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQSBleHRlbmRzIFBlcnNpc3RBbmVtaWE8UmVhZE1vZGVsUm9vdElkPj4gZXh0ZW5kcyBBZ2dyZWdhdGVTdG9yZTxJLCBEPiB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RhdGVTdG9yZTogUGVyc2lzdFN0YXRlU3RvcmU8YW55LCBBPixcblx0XHRcdFx0XHRcdCAgcHJpdmF0ZSByZWFkb25seSBhZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyOiBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIucmVnaXN0ZXIodGhpcyk7XG5cdH1cblxuXHRhYnN0cmFjdCB0b0FuZW1pYShhZ2dyZWdhdGU6IEQpOiBBO1xuXG5cdGFic3RyYWN0IGZyb21BbmVtaWEoYW5lbWlhOiBBKTogRDtcblxuXHRzYXZlKGFnZ3JlZ2F0ZTogRCk6IHZvaWQge1xuXHRcdHRoaXMuc2F2ZVZhbHVlKGFnZ3JlZ2F0ZSk7XG5cdH1cblxuXHRnZXRCeUlkKGFnZ3JlZ2F0ZUlkOiBJKTogT3B0aW9uYWw8RD4ge1xuXHRcdHJldHVybiB0aGlzLmdldFZhbHVlKGFnZ3JlZ2F0ZUlkKTtcblx0fVxuXG5cdHByaXZhdGUgc2F2ZVZhbHVlKGFnZ3JlZ2F0ZTogRCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgYW5lbWlhID0gdGhpcy50b0FuZW1pYShhZ2dyZWdhdGUpO1xuXG5cdFx0dGhpcy5zdGF0ZVN0b3JlLnNldChhbmVtaWEpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRWYWx1ZShhZ2dyZWdhdGVJZDogSSk6IE9wdGlvbmFsPEQ+IHtcblx0XHRjb25zdCBvcHRBbmVtaWEgPSB0aGlzLnN0YXRlU3RvcmUuZ2V0KGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdHJldHVybiBvcHRBbmVtaWEubWFwKHRoaXMuZnJvbUFuZW1pYSk7XG5cdH1cblxufVxuIl19