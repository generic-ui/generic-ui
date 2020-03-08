/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ReadModelStore } from '../../../domain/read/store/read-model.store';
/**
 * @abstract
 * @template R, A
 */
var /**
 * @abstract
 * @template R, A
 */
PersistReadModelStore = /** @class */ (function (_super) {
    tslib_1.__extends(PersistReadModelStore, _super);
    function PersistReadModelStore(stateStore) {
        var _this = _super.call(this) || this;
        _this.stateStore = stateStore;
        return _this;
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    PersistReadModelStore.prototype.getById = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        return this.getValue(aggregateId);
    };
    /**
     * @return {?}
     */
    PersistReadModelStore.prototype.getAll = /**
     * @return {?}
     */
    function () {
        return this.getAllValues();
    };
    /**
     * @private
     * @return {?}
     */
    PersistReadModelStore.prototype.getAllValues = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return this.stateStore
            .getAll()
            .map((/**
         * @param {?} anemia
         * @return {?}
         */
        function (anemia) { return _this.toReadModel(anemia); }));
    };
    /**
     * @private
     * @param {?} aggregateId
     * @return {?}
     */
    PersistReadModelStore.prototype.getValue = /**
     * @private
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        /** @type {?} */
        var optAnemia = this.stateStore.get(aggregateId);
        return optAnemia.map(this.toReadModel);
    };
    return PersistReadModelStore;
}(ReadModelStore));
/**
 * @abstract
 * @template R, A
 */
export { PersistReadModelStore };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC5yZWFkLW1vZGVsLnN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdC9xdWVyeS9wZXJzaXN0LnJlYWQtbW9kZWwuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7Ozs7O0FBTzdFOzs7OztJQUFrRyxpREFBaUI7SUFFbEgsK0JBQXVDLFVBQWdDO1FBQXZFLFlBQ0MsaUJBQU8sU0FDUDtRQUZzQyxnQkFBVSxHQUFWLFVBQVUsQ0FBc0I7O0lBRXZFLENBQUM7Ozs7O0lBSUQsdUNBQU87Ozs7SUFBUCxVQUFRLFdBQXdCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsc0NBQU07OztJQUFOO1FBQ0MsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFTyw0Q0FBWTs7OztJQUFwQjtRQUFBLGlCQUlDO1FBSEEsT0FBTyxJQUFJLENBQUMsVUFBVTthQUNoQixNQUFNLEVBQUU7YUFDUixHQUFHOzs7O1FBQUMsVUFBQyxNQUFTLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUF4QixDQUF3QixFQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7O0lBRU8sd0NBQVE7Ozs7O0lBQWhCLFVBQWlCLFdBQXdCOztZQUNsQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBRWxELE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVGLDRCQUFDO0FBQUQsQ0FBQyxBQTVCRCxDQUFrRyxjQUFjLEdBNEIvRzs7Ozs7Ozs7Ozs7SUExQnNCLDJDQUFpRDs7Ozs7O0lBSXZFLG9FQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vcmVhZC9yZWFkLW1vZGVsJztcbmltcG9ydCB7IFJlYWRNb2RlbFN0b3JlIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3JlYWQvc3RvcmUvcmVhZC1tb2RlbC5zdG9yZSc7XG5cbmltcG9ydCB7IFBlcnNpc3RBbmVtaWEgfSBmcm9tICcuLi9wZXJzaXN0LWFuZW1pYSc7XG5pbXBvcnQgeyBQZXJzaXN0U3RhdGVTdG9yZSB9IGZyb20gJy4uL3BlcnNpc3Qtc3RhdGUuc3RvcmUnO1xuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vb3B0aW9uYWwnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQZXJzaXN0UmVhZE1vZGVsU3RvcmU8UiBleHRlbmRzIFJlYWRNb2RlbCwgQSBleHRlbmRzIFBlcnNpc3RBbmVtaWE+IGV4dGVuZHMgUmVhZE1vZGVsU3RvcmU8Uj4ge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0YXRlU3RvcmU6IFBlcnNpc3RTdGF0ZVN0b3JlPEE+KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGFic3RyYWN0IHRvUmVhZE1vZGVsKGFuZW1pYTogQSk6IFI7XG5cblx0Z2V0QnlJZChhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBPcHRpb25hbDxSPiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VmFsdWUoYWdncmVnYXRlSWQpO1xuXHR9XG5cblx0Z2V0QWxsKCk6IEFycmF5PFI+IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBbGxWYWx1ZXMoKTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0QWxsVmFsdWVzKCk6IEFycmF5PFI+IHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZVN0b3JlXG5cdFx0XHRcdCAgIC5nZXRBbGwoKVxuXHRcdFx0XHQgICAubWFwKChhbmVtaWE6IEEpID0+IHRoaXMudG9SZWFkTW9kZWwoYW5lbWlhKSk7XG5cdH1cblxuXHRwcml2YXRlIGdldFZhbHVlKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IE9wdGlvbmFsPFI+IHtcblx0XHRjb25zdCBvcHRBbmVtaWEgPSB0aGlzLnN0YXRlU3RvcmUuZ2V0KGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdHJldHVybiBvcHRBbmVtaWEubWFwKHRoaXMudG9SZWFkTW9kZWwpO1xuXHR9XG5cbn1cbiJdfQ==