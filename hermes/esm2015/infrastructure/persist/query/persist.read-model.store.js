/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ReadModelStore } from '../../../domain/query/store/read-model.store';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC5yZWFkLW1vZGVsLnN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdC9xdWVyeS9wZXJzaXN0LnJlYWQtbW9kZWwuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU1BLE9BQU8sRUFDTixjQUFjLEVBQ2QsTUFBTSw4Q0FBOEMsQ0FBQzs7Ozs7QUFLdEQsTUFBTSxPQUFnQixxQkFBb0UsU0FBUSxjQUFpQjs7Ozs7SUFFbEgsWUFBdUMsVUFBZ0M7UUFDdEUsS0FBSyxFQUFFLENBQUM7UUFEOEIsZUFBVSxHQUFWLFVBQVUsQ0FBc0I7SUFFdkUsQ0FBQzs7Ozs7SUFJRCxPQUFPLENBQUMsV0FBd0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0wsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFTyxZQUFZOztjQUNiLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtRQUV4QyxPQUFPLE9BQU8sQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUMsQ0FBQztJQUN6RCxDQUFDOzs7Ozs7SUFFTyxRQUFRLENBQUMsV0FBd0I7O2NBQ2xDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFFL0MsSUFBSSxNQUFNLEVBQUU7WUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDL0I7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDO1NBQ1o7SUFDRixDQUFDO0NBRUQ7Ozs7OztJQTlCc0IsMkNBQWlEOzs7Ozs7SUFJdkUsbUVBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QWdncmVnYXRlSWRcbn0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQge1xuXHRSZWFkTW9kZWxcbn0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3F1ZXJ5L3JlYWQtbW9kZWwnO1xuaW1wb3J0IHtcblx0UmVhZE1vZGVsU3RvcmVcbn0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3F1ZXJ5L3N0b3JlL3JlYWQtbW9kZWwuc3RvcmUnO1xuXG5pbXBvcnQgeyBQZXJzaXN0QW5lbWlhIH0gZnJvbSAnLi4vcGVyc2lzdC1hbmVtaWEnO1xuaW1wb3J0IHsgUGVyc2lzdFN0YXRlU3RvcmUgfSBmcm9tICcuLi9wZXJzaXN0LXN0YXRlLnN0b3JlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBlcnNpc3RSZWFkTW9kZWxTdG9yZTxUIGV4dGVuZHMgUmVhZE1vZGVsLCBTIGV4dGVuZHMgUGVyc2lzdEFuZW1pYT4gZXh0ZW5kcyBSZWFkTW9kZWxTdG9yZTxUPiB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RhdGVTdG9yZTogUGVyc2lzdFN0YXRlU3RvcmU8Uz4pIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0YWJzdHJhY3QgZnJvbUFuZW1pYShhbmVtaWE6IFMpOiBUO1xuXG5cdGdldEJ5SWQoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogVCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VmFsdWUoYWdncmVnYXRlSWQpO1xuXHR9XG5cblx0Z2V0QWxsKCk6IEFycmF5PFQ+IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBbGxWYWx1ZXMoKTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0QWxsVmFsdWVzKCk6IEFycmF5PFQ+IHtcblx0XHRjb25zdCBhbmVtaWFzID0gdGhpcy5zdGF0ZVN0b3JlLmdldEFsbCgpO1xuXG5cdFx0cmV0dXJuIGFuZW1pYXMubWFwKChhbmVtaWEpID0+IHRoaXMuZnJvbUFuZW1pYShhbmVtaWEpKTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0VmFsdWUoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogVCB7XG5cdFx0Y29uc3QgYW5lbWlhID0gdGhpcy5zdGF0ZVN0b3JlLmdldChhZ2dyZWdhdGVJZCk7XG5cblx0XHRpZiAoYW5lbWlhKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5mcm9tQW5lbWlhKGFuZW1pYSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=