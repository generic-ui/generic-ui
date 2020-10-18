/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ReadModelStore } from '../../../api/read/store/read-model.store';
/**
 * @abstract
 * @template I, R, A
 */
var /**
 * @abstract
 * @template I, R, A
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
 * @template I, R, A
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC5yZWFkLW1vZGVsLnN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29yZS9pbmZyYXN0cnVjdHVyZS9wZXJzaXN0L3JlYWQvcGVyc2lzdC5yZWFkLW1vZGVsLnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOzs7OztBQVMxRTs7Ozs7SUFFcUMsaURBQW9CO0lBRXhELCtCQUF1QyxVQUFtQztRQUExRSxZQUNDLGlCQUFPLFNBQ1A7UUFGc0MsZ0JBQVUsR0FBVixVQUFVLENBQXlCOztJQUUxRSxDQUFDOzs7OztJQUlELHVDQUFPOzs7O0lBQVAsVUFBUSxXQUF3QjtRQUMvQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELHNDQUFNOzs7SUFBTjtRQUNDLE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRU8sNENBQVk7Ozs7SUFBcEI7UUFBQSxpQkFJQztRQUhBLE9BQU8sSUFBSSxDQUFDLFVBQVU7YUFDaEIsTUFBTSxFQUFFO2FBQ1IsR0FBRzs7OztRQUFDLFVBQUMsTUFBUyxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBeEIsQ0FBd0IsRUFBQyxDQUFDO0lBQ3BELENBQUM7Ozs7OztJQUVPLHdDQUFROzs7OztJQUFoQixVQUFpQixXQUF3Qjs7WUFDbEMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUVsRCxPQUFPLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRiw0QkFBQztBQUFELENBQUMsQUE5QkQsQ0FFcUMsY0FBYyxHQTRCbEQ7Ozs7Ozs7Ozs7O0lBMUJzQiwyQ0FBb0Q7Ozs7OztJQUkxRSxvRUFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFkTW9kZWxSb290IH0gZnJvbSAnLi4vLi4vLi4vYXBpL3JlYWQvcmVhZC1tb2RlbC1yb290JztcbmltcG9ydCB7IFJlYWRNb2RlbFN0b3JlIH0gZnJvbSAnLi4vLi4vLi4vYXBpL3JlYWQvc3RvcmUvcmVhZC1tb2RlbC5zdG9yZSc7XG5cbmltcG9ydCB7IFBlcnNpc3RBbmVtaWEgfSBmcm9tICcuLi9wZXJzaXN0LWFuZW1pYSc7XG5pbXBvcnQgeyBQZXJzaXN0U3RhdGVTdG9yZSB9IGZyb20gJy4uL3BlcnNpc3Qtc3RhdGUuc3RvcmUnO1xuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vb3B0aW9uYWwnO1xuaW1wb3J0IHsgUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vYXBpL3JlYWQvcmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQZXJzaXN0UmVhZE1vZGVsU3RvcmU8SSBleHRlbmRzIFJlYWRNb2RlbFJvb3RJZCxcblx0UiBleHRlbmRzIFJlYWRNb2RlbFJvb3Q8ST4sXG5cdEEgZXh0ZW5kcyBQZXJzaXN0QW5lbWlhPEk+PiBleHRlbmRzIFJlYWRNb2RlbFN0b3JlPEksIFI+IHtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdGF0ZVN0b3JlOiBQZXJzaXN0U3RhdGVTdG9yZTxJLCBBPikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRhYnN0cmFjdCB0b1JlYWRNb2RlbChhbmVtaWE6IEEpOiBSO1xuXG5cdGdldEJ5SWQoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogT3B0aW9uYWw8Uj4ge1xuXHRcdHJldHVybiB0aGlzLmdldFZhbHVlKGFnZ3JlZ2F0ZUlkKTtcblx0fVxuXG5cdGdldEFsbCgpOiBBcnJheTxSPiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QWxsVmFsdWVzKCk7XG5cdH1cblxuXHRwcml2YXRlIGdldEFsbFZhbHVlcygpOiBBcnJheTxSPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGVTdG9yZVxuXHRcdFx0XHQgICAuZ2V0QWxsKClcblx0XHRcdFx0ICAgLm1hcCgoYW5lbWlhOiBBKSA9PiB0aGlzLnRvUmVhZE1vZGVsKGFuZW1pYSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRWYWx1ZShhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBPcHRpb25hbDxSPiB7XG5cdFx0Y29uc3Qgb3B0QW5lbWlhID0gdGhpcy5zdGF0ZVN0b3JlLmdldChhZ2dyZWdhdGVJZCk7XG5cblx0XHRyZXR1cm4gb3B0QW5lbWlhLm1hcCh0aGlzLnRvUmVhZE1vZGVsKTtcblx0fVxuXG59XG4iXX0=