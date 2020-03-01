/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ReadModelStore } from '../../../domain/read/store/read-model.store';
/**
 * @abstract
 * @template R, A
 */
export class PersistReadModelStore extends ReadModelStore {
    /**
     * @protected
     * @param {?} stateStore
     */
    constructor(stateStore) {
        super();
        this.stateStore = stateStore;
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    getById(aggregateId) {
        return this.getValue(aggregateId);
    }
    /**
     * @return {?}
     */
    getAll() {
        return this.getAllValues();
    }
    /**
     * @private
     * @return {?}
     */
    getAllValues() {
        return this.stateStore
            .getAll()
            .map((/**
         * @param {?} anemia
         * @return {?}
         */
        (anemia) => this.toReadModel(anemia)));
    }
    /**
     * @private
     * @param {?} aggregateId
     * @return {?}
     */
    getValue(aggregateId) {
        /** @type {?} */
        const optAnemia = this.stateStore.get(aggregateId);
        return optAnemia.map(this.toReadModel);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    PersistReadModelStore.prototype.stateStore;
    /**
     * @abstract
     * @param {?} anemia
     * @return {?}
     */
    PersistReadModelStore.prototype.toReadModel = function (anemia) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC5yZWFkLW1vZGVsLnN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdC9xdWVyeS9wZXJzaXN0LnJlYWQtbW9kZWwuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7QUFPN0UsTUFBTSxPQUFnQixxQkFBb0UsU0FBUSxjQUFpQjs7Ozs7SUFFbEgsWUFBdUMsVUFBZ0M7UUFDdEUsS0FBSyxFQUFFLENBQUM7UUFEOEIsZUFBVSxHQUFWLFVBQVUsQ0FBc0I7SUFFdkUsQ0FBQzs7Ozs7SUFJRCxPQUFPLENBQUMsV0FBd0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0wsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFTyxZQUFZO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFVBQVU7YUFDaEIsTUFBTSxFQUFFO2FBQ1IsR0FBRzs7OztRQUFDLENBQUMsTUFBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7O0lBRU8sUUFBUSxDQUFDLFdBQXdCOztjQUNsQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBRWxELE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDdkMsQ0FBQztDQUVEOzs7Ozs7SUExQnNCLDJDQUFpRDs7Ozs7O0lBSXZFLG9FQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vcmVhZC9yZWFkLW1vZGVsJztcbmltcG9ydCB7IFJlYWRNb2RlbFN0b3JlIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3JlYWQvc3RvcmUvcmVhZC1tb2RlbC5zdG9yZSc7XG5cbmltcG9ydCB7IFBlcnNpc3RBbmVtaWEgfSBmcm9tICcuLi9wZXJzaXN0LWFuZW1pYSc7XG5pbXBvcnQgeyBQZXJzaXN0U3RhdGVTdG9yZSB9IGZyb20gJy4uL3BlcnNpc3Qtc3RhdGUuc3RvcmUnO1xuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vb3B0aW9uYWwnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQZXJzaXN0UmVhZE1vZGVsU3RvcmU8UiBleHRlbmRzIFJlYWRNb2RlbCwgQSBleHRlbmRzIFBlcnNpc3RBbmVtaWE+IGV4dGVuZHMgUmVhZE1vZGVsU3RvcmU8Uj4ge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0YXRlU3RvcmU6IFBlcnNpc3RTdGF0ZVN0b3JlPEE+KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGFic3RyYWN0IHRvUmVhZE1vZGVsKGFuZW1pYTogQSk6IFI7XG5cblx0Z2V0QnlJZChhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBPcHRpb25hbDxSPiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VmFsdWUoYWdncmVnYXRlSWQpO1xuXHR9XG5cblx0Z2V0QWxsKCk6IEFycmF5PFI+IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBbGxWYWx1ZXMoKTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0QWxsVmFsdWVzKCk6IEFycmF5PFI+IHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZVN0b3JlXG5cdFx0XHRcdCAgIC5nZXRBbGwoKVxuXHRcdFx0XHQgICAubWFwKChhbmVtaWE6IEEpID0+IHRoaXMudG9SZWFkTW9kZWwoYW5lbWlhKSk7XG5cdH1cblxuXHRwcml2YXRlIGdldFZhbHVlKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IE9wdGlvbmFsPFI+IHtcblx0XHRjb25zdCBvcHRBbmVtaWEgPSB0aGlzLnN0YXRlU3RvcmUuZ2V0KGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdHJldHVybiBvcHRBbmVtaWEubWFwKHRoaXMudG9SZWFkTW9kZWwpXG5cdH1cblxufVxuIl19