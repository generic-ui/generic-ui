/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ReadModelStore } from '../../../domain-api/read/store/read-model.store';
/**
 * @abstract
 * @template I, R, A
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC5yZWFkLW1vZGVsLnN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdC9yZWFkL3BlcnNpc3QucmVhZC1tb2RlbC5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlEQUFpRCxDQUFDOzs7OztBQVNqRixNQUFNLE9BQWdCLHFCQUVPLFNBQVEsY0FBb0I7Ozs7O0lBRXhELFlBQXVDLFVBQW1DO1FBQ3pFLEtBQUssRUFBRSxDQUFDO1FBRDhCLGVBQVUsR0FBVixVQUFVLENBQXlCO0lBRTFFLENBQUM7Ozs7O0lBSUQsT0FBTyxDQUFDLFdBQXdCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsTUFBTTtRQUNMLE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRU8sWUFBWTtRQUNuQixPQUFPLElBQUksQ0FBQyxVQUFVO2FBQ2hCLE1BQU0sRUFBRTthQUNSLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDO0lBQ3BELENBQUM7Ozs7OztJQUVPLFFBQVEsQ0FBQyxXQUF3Qjs7Y0FDbEMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUVsRCxPQUFPLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Q0FFRDs7Ozs7O0lBMUJzQiwyQ0FBb0Q7Ozs7OztJQUkxRSxvRUFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFkTW9kZWxSb290IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9yZWFkL3JlYWQtbW9kZWwtcm9vdCc7XG5pbXBvcnQgeyBSZWFkTW9kZWxTdG9yZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvcmVhZC9zdG9yZS9yZWFkLW1vZGVsLnN0b3JlJztcblxuaW1wb3J0IHsgUGVyc2lzdEFuZW1pYSB9IGZyb20gJy4uL3BlcnNpc3QtYW5lbWlhJztcbmltcG9ydCB7IFBlcnNpc3RTdGF0ZVN0b3JlIH0gZnJvbSAnLi4vcGVyc2lzdC1zdGF0ZS5zdG9yZSc7XG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9vcHRpb25hbCc7XG5pbXBvcnQgeyBSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL3JlYWQvcmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2FnZ3JlZ2F0ZS1pZCc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBlcnNpc3RSZWFkTW9kZWxTdG9yZTxJIGV4dGVuZHMgUmVhZE1vZGVsUm9vdElkLFxuXHRSIGV4dGVuZHMgUmVhZE1vZGVsUm9vdDxJPixcblx0QSBleHRlbmRzIFBlcnNpc3RBbmVtaWE8ST4+IGV4dGVuZHMgUmVhZE1vZGVsU3RvcmU8SSwgUj4ge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0YXRlU3RvcmU6IFBlcnNpc3RTdGF0ZVN0b3JlPEksIEE+KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGFic3RyYWN0IHRvUmVhZE1vZGVsKGFuZW1pYTogQSk6IFI7XG5cblx0Z2V0QnlJZChhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBPcHRpb25hbDxSPiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VmFsdWUoYWdncmVnYXRlSWQpO1xuXHR9XG5cblx0Z2V0QWxsKCk6IEFycmF5PFI+IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBbGxWYWx1ZXMoKTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0QWxsVmFsdWVzKCk6IEFycmF5PFI+IHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZVN0b3JlXG5cdFx0XHRcdCAgIC5nZXRBbGwoKVxuXHRcdFx0XHQgICAubWFwKChhbmVtaWE6IEEpID0+IHRoaXMudG9SZWFkTW9kZWwoYW5lbWlhKSk7XG5cdH1cblxuXHRwcml2YXRlIGdldFZhbHVlKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IE9wdGlvbmFsPFI+IHtcblx0XHRjb25zdCBvcHRBbmVtaWEgPSB0aGlzLnN0YXRlU3RvcmUuZ2V0KGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdHJldHVybiBvcHRBbmVtaWEubWFwKHRoaXMudG9SZWFkTW9kZWwpO1xuXHR9XG5cbn1cbiJdfQ==