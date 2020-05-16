/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ReadModelStore } from '../../../domain-api/read/store/read-model.store';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC5yZWFkLW1vZGVsLnN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdC9yZWFkL3BlcnNpc3QucmVhZC1tb2RlbC5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpREFBaUQsQ0FBQzs7Ozs7QUFTakY7Ozs7O0lBRXFDLGlEQUFvQjtJQUV4RCwrQkFBdUMsVUFBbUM7UUFBMUUsWUFDQyxpQkFBTyxTQUNQO1FBRnNDLGdCQUFVLEdBQVYsVUFBVSxDQUF5Qjs7SUFFMUUsQ0FBQzs7Ozs7SUFJRCx1Q0FBTzs7OztJQUFQLFVBQVEsV0FBd0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCxzQ0FBTTs7O0lBQU47UUFDQyxPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVPLDRDQUFZOzs7O0lBQXBCO1FBQUEsaUJBSUM7UUFIQSxPQUFPLElBQUksQ0FBQyxVQUFVO2FBQ2hCLE1BQU0sRUFBRTthQUNSLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQVMsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQXhCLENBQXdCLEVBQUMsQ0FBQztJQUNwRCxDQUFDOzs7Ozs7SUFFTyx3Q0FBUTs7Ozs7SUFBaEIsVUFBaUIsV0FBd0I7O1lBQ2xDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFFbEQsT0FBTyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUYsNEJBQUM7QUFBRCxDQUFDLEFBOUJELENBRXFDLGNBQWMsR0E0QmxEOzs7Ozs7Ozs7OztJQTFCc0IsMkNBQW9EOzs7Ozs7SUFJMUUsb0VBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvcmVhZC9yZWFkLW1vZGVsLXJvb3QnO1xuaW1wb3J0IHsgUmVhZE1vZGVsU3RvcmUgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL3JlYWQvc3RvcmUvcmVhZC1tb2RlbC5zdG9yZSc7XG5cbmltcG9ydCB7IFBlcnNpc3RBbmVtaWEgfSBmcm9tICcuLi9wZXJzaXN0LWFuZW1pYSc7XG5pbXBvcnQgeyBQZXJzaXN0U3RhdGVTdG9yZSB9IGZyb20gJy4uL3BlcnNpc3Qtc3RhdGUuc3RvcmUnO1xuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vb3B0aW9uYWwnO1xuaW1wb3J0IHsgUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9yZWFkL3JlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9hZ2dyZWdhdGUtaWQnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQZXJzaXN0UmVhZE1vZGVsU3RvcmU8SSBleHRlbmRzIFJlYWRNb2RlbFJvb3RJZCxcblx0UiBleHRlbmRzIFJlYWRNb2RlbFJvb3Q8ST4sXG5cdEEgZXh0ZW5kcyBQZXJzaXN0QW5lbWlhPEk+PiBleHRlbmRzIFJlYWRNb2RlbFN0b3JlPEksIFI+IHtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdGF0ZVN0b3JlOiBQZXJzaXN0U3RhdGVTdG9yZTxJLCBBPikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRhYnN0cmFjdCB0b1JlYWRNb2RlbChhbmVtaWE6IEEpOiBSO1xuXG5cdGdldEJ5SWQoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogT3B0aW9uYWw8Uj4ge1xuXHRcdHJldHVybiB0aGlzLmdldFZhbHVlKGFnZ3JlZ2F0ZUlkKTtcblx0fVxuXG5cdGdldEFsbCgpOiBBcnJheTxSPiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QWxsVmFsdWVzKCk7XG5cdH1cblxuXHRwcml2YXRlIGdldEFsbFZhbHVlcygpOiBBcnJheTxSPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGVTdG9yZVxuXHRcdFx0XHQgICAuZ2V0QWxsKClcblx0XHRcdFx0ICAgLm1hcCgoYW5lbWlhOiBBKSA9PiB0aGlzLnRvUmVhZE1vZGVsKGFuZW1pYSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRWYWx1ZShhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBPcHRpb25hbDxSPiB7XG5cdFx0Y29uc3Qgb3B0QW5lbWlhID0gdGhpcy5zdGF0ZVN0b3JlLmdldChhZ2dyZWdhdGVJZCk7XG5cblx0XHRyZXR1cm4gb3B0QW5lbWlhLm1hcCh0aGlzLnRvUmVhZE1vZGVsKTtcblx0fVxuXG59XG4iXX0=