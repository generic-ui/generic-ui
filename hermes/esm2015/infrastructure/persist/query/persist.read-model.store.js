/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ReadModelStore } from '../../../domain/read/store/read-model.store';
/**
 * @abstract
 * @template T, S
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
        /** @type {?} */
        const anemias = this.stateStore.getAll();
        return anemias.map((/**
         * @param {?} anemia
         * @return {?}
         */
        (anemia) => this.fromAnemia(anemia)));
    }
    /**
     * @private
     * @param {?} aggregateId
     * @return {?}
     */
    getValue(aggregateId) {
        /** @type {?} */
        const anemia = this.stateStore.get(aggregateId);
        if (anemia) {
            return this.fromAnemia(anemia);
        }
        else {
            return null;
        }
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
    PersistReadModelStore.prototype.fromAnemia = function (anemia) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC5yZWFkLW1vZGVsLnN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdC9xdWVyeS9wZXJzaXN0LnJlYWQtbW9kZWwuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU1BLE9BQU8sRUFDTixjQUFjLEVBQ2QsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7QUFLckQsTUFBTSxPQUFnQixxQkFBb0UsU0FBUSxjQUFpQjs7Ozs7SUFFbEgsWUFBdUMsVUFBZ0M7UUFDdEUsS0FBSyxFQUFFLENBQUM7UUFEOEIsZUFBVSxHQUFWLFVBQVUsQ0FBc0I7SUFFdkUsQ0FBQzs7Ozs7SUFJRCxPQUFPLENBQUMsV0FBd0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0wsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFTyxZQUFZOztjQUNiLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtRQUV4QyxPQUFPLE9BQU8sQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUMsQ0FBQztJQUN6RCxDQUFDOzs7Ozs7SUFFTyxRQUFRLENBQUMsV0FBd0I7O2NBQ2xDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFFL0MsSUFBSSxNQUFNLEVBQUU7WUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDL0I7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDO1NBQ1o7SUFDRixDQUFDO0NBRUQ7Ozs7OztJQTlCc0IsMkNBQWlEOzs7Ozs7SUFJdkUsbUVBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QWdncmVnYXRlSWRcbn0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQge1xuXHRSZWFkTW9kZWxcbn0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3JlYWQvcmVhZC1tb2RlbCc7XG5pbXBvcnQge1xuXHRSZWFkTW9kZWxTdG9yZVxufSBmcm9tICcuLi8uLi8uLi9kb21haW4vcmVhZC9zdG9yZS9yZWFkLW1vZGVsLnN0b3JlJztcblxuaW1wb3J0IHsgUGVyc2lzdEFuZW1pYSB9IGZyb20gJy4uL3BlcnNpc3QtYW5lbWlhJztcbmltcG9ydCB7IFBlcnNpc3RTdGF0ZVN0b3JlIH0gZnJvbSAnLi4vcGVyc2lzdC1zdGF0ZS5zdG9yZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQZXJzaXN0UmVhZE1vZGVsU3RvcmU8VCBleHRlbmRzIFJlYWRNb2RlbCwgUyBleHRlbmRzIFBlcnNpc3RBbmVtaWE+IGV4dGVuZHMgUmVhZE1vZGVsU3RvcmU8VD4ge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0YXRlU3RvcmU6IFBlcnNpc3RTdGF0ZVN0b3JlPFM+KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGFic3RyYWN0IGZyb21BbmVtaWEoYW5lbWlhOiBTKTogVDtcblxuXHRnZXRCeUlkKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IFQge1xuXHRcdHJldHVybiB0aGlzLmdldFZhbHVlKGFnZ3JlZ2F0ZUlkKTtcblx0fVxuXG5cdGdldEFsbCgpOiBBcnJheTxUPiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QWxsVmFsdWVzKCk7XG5cdH1cblxuXHRwcml2YXRlIGdldEFsbFZhbHVlcygpOiBBcnJheTxUPiB7XG5cdFx0Y29uc3QgYW5lbWlhcyA9IHRoaXMuc3RhdGVTdG9yZS5nZXRBbGwoKTtcblxuXHRcdHJldHVybiBhbmVtaWFzLm1hcCgoYW5lbWlhKSA9PiB0aGlzLmZyb21BbmVtaWEoYW5lbWlhKSk7XG5cdH1cblxuXHRwcml2YXRlIGdldFZhbHVlKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IFQge1xuXHRcdGNvbnN0IGFuZW1pYSA9IHRoaXMuc3RhdGVTdG9yZS5nZXQoYWdncmVnYXRlSWQpO1xuXG5cdFx0aWYgKGFuZW1pYSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZnJvbUFuZW1pYShhbmVtaWEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxufVxuIl19