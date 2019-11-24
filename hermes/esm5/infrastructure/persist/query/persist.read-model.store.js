/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ReadModelStore } from '../../../domain/query/store/read-model.store';
/**
 * @abstract
 * @template T, S
 */
var /**
 * @abstract
 * @template T, S
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
        /** @type {?} */
        var anemias = this.stateStore.getAll();
        return anemias.map((/**
         * @param {?} anemia
         * @return {?}
         */
        function (anemia) { return _this.fromAnemia(anemia); }));
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
        var anemia = this.stateStore.get(aggregateId);
        if (anemia) {
            return this.fromAnemia(anemia);
        }
        else {
            return null;
        }
    };
    return PersistReadModelStore;
}(ReadModelStore));
/**
 * @abstract
 * @template T, S
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
    PersistReadModelStore.prototype.fromAnemia = function (anemia) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC5yZWFkLW1vZGVsLnN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdC9xdWVyeS9wZXJzaXN0LnJlYWQtbW9kZWwuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNQSxPQUFPLEVBQ04sY0FBYyxFQUNkLE1BQU0sOENBQThDLENBQUM7Ozs7O0FBS3REOzs7OztJQUFrRyxpREFBaUI7SUFFbEgsK0JBQXVDLFVBQWdDO1FBQXZFLFlBQ0MsaUJBQU8sU0FDUDtRQUZzQyxnQkFBVSxHQUFWLFVBQVUsQ0FBc0I7O0lBRXZFLENBQUM7Ozs7O0lBSUQsdUNBQU87Ozs7SUFBUCxVQUFRLFdBQXdCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsc0NBQU07OztJQUFOO1FBQ0MsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFTyw0Q0FBWTs7OztJQUFwQjtRQUFBLGlCQUlDOztZQUhNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtRQUV4QyxPQUFPLE9BQU8sQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxNQUFNLElBQUssT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUF2QixDQUF1QixFQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7O0lBRU8sd0NBQVE7Ozs7O0lBQWhCLFVBQWlCLFdBQXdCOztZQUNsQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBRS9DLElBQUksTUFBTSxFQUFFO1lBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQy9CO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQztTQUNaO0lBQ0YsQ0FBQztJQUVGLDRCQUFDO0FBQUQsQ0FBQyxBQWhDRCxDQUFrRyxjQUFjLEdBZ0MvRzs7Ozs7Ozs7Ozs7SUE5QnNCLDJDQUFpRDs7Ozs7O0lBSXZFLG1FQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFnZ3JlZ2F0ZUlkXG59IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHtcblx0UmVhZE1vZGVsXG59IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9xdWVyeS9yZWFkLW1vZGVsJztcbmltcG9ydCB7XG5cdFJlYWRNb2RlbFN0b3JlXG59IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9xdWVyeS9zdG9yZS9yZWFkLW1vZGVsLnN0b3JlJztcblxuaW1wb3J0IHsgUGVyc2lzdEFuZW1pYSB9IGZyb20gJy4uL3BlcnNpc3QtYW5lbWlhJztcbmltcG9ydCB7IFBlcnNpc3RTdGF0ZVN0b3JlIH0gZnJvbSAnLi4vcGVyc2lzdC1zdGF0ZS5zdG9yZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQZXJzaXN0UmVhZE1vZGVsU3RvcmU8VCBleHRlbmRzIFJlYWRNb2RlbCwgUyBleHRlbmRzIFBlcnNpc3RBbmVtaWE+IGV4dGVuZHMgUmVhZE1vZGVsU3RvcmU8VD4ge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0YXRlU3RvcmU6IFBlcnNpc3RTdGF0ZVN0b3JlPFM+KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGFic3RyYWN0IGZyb21BbmVtaWEoYW5lbWlhOiBTKTogVDtcblxuXHRnZXRCeUlkKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IFQge1xuXHRcdHJldHVybiB0aGlzLmdldFZhbHVlKGFnZ3JlZ2F0ZUlkKTtcblx0fVxuXG5cdGdldEFsbCgpOiBBcnJheTxUPiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QWxsVmFsdWVzKCk7XG5cdH1cblxuXHRwcml2YXRlIGdldEFsbFZhbHVlcygpOiBBcnJheTxUPiB7XG5cdFx0Y29uc3QgYW5lbWlhcyA9IHRoaXMuc3RhdGVTdG9yZS5nZXRBbGwoKTtcblxuXHRcdHJldHVybiBhbmVtaWFzLm1hcCgoYW5lbWlhKSA9PiB0aGlzLmZyb21BbmVtaWEoYW5lbWlhKSk7XG5cdH1cblxuXHRwcml2YXRlIGdldFZhbHVlKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IFQge1xuXHRcdGNvbnN0IGFuZW1pYSA9IHRoaXMuc3RhdGVTdG9yZS5nZXQoYWdncmVnYXRlSWQpO1xuXG5cdFx0aWYgKGFuZW1pYSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZnJvbUFuZW1pYShhbmVtaWEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxufVxuIl19