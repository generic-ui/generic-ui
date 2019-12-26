/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ReadModelStore } from '../../../domain/read/store/read-model.store';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC5yZWFkLW1vZGVsLnN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdC9xdWVyeS9wZXJzaXN0LnJlYWQtbW9kZWwuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNQSxPQUFPLEVBQ04sY0FBYyxFQUNkLE1BQU0sNkNBQTZDLENBQUM7Ozs7O0FBS3JEOzs7OztJQUFrRyxpREFBaUI7SUFFbEgsK0JBQXVDLFVBQWdDO1FBQXZFLFlBQ0MsaUJBQU8sU0FDUDtRQUZzQyxnQkFBVSxHQUFWLFVBQVUsQ0FBc0I7O0lBRXZFLENBQUM7Ozs7O0lBSUQsdUNBQU87Ozs7SUFBUCxVQUFRLFdBQXdCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsc0NBQU07OztJQUFOO1FBQ0MsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFTyw0Q0FBWTs7OztJQUFwQjtRQUFBLGlCQUlDOztZQUhNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtRQUV4QyxPQUFPLE9BQU8sQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxNQUFNLElBQUssT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUF2QixDQUF1QixFQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7O0lBRU8sd0NBQVE7Ozs7O0lBQWhCLFVBQWlCLFdBQXdCOztZQUNsQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBRS9DLElBQUksTUFBTSxFQUFFO1lBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQy9CO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQztTQUNaO0lBQ0YsQ0FBQztJQUVGLDRCQUFDO0FBQUQsQ0FBQyxBQWhDRCxDQUFrRyxjQUFjLEdBZ0MvRzs7Ozs7Ozs7Ozs7SUE5QnNCLDJDQUFpRDs7Ozs7O0lBSXZFLG1FQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFnZ3JlZ2F0ZUlkXG59IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHtcblx0UmVhZE1vZGVsXG59IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9yZWFkL3JlYWQtbW9kZWwnO1xuaW1wb3J0IHtcblx0UmVhZE1vZGVsU3RvcmVcbn0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3JlYWQvc3RvcmUvcmVhZC1tb2RlbC5zdG9yZSc7XG5cbmltcG9ydCB7IFBlcnNpc3RBbmVtaWEgfSBmcm9tICcuLi9wZXJzaXN0LWFuZW1pYSc7XG5pbXBvcnQgeyBQZXJzaXN0U3RhdGVTdG9yZSB9IGZyb20gJy4uL3BlcnNpc3Qtc3RhdGUuc3RvcmUnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUGVyc2lzdFJlYWRNb2RlbFN0b3JlPFQgZXh0ZW5kcyBSZWFkTW9kZWwsIFMgZXh0ZW5kcyBQZXJzaXN0QW5lbWlhPiBleHRlbmRzIFJlYWRNb2RlbFN0b3JlPFQ+IHtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdGF0ZVN0b3JlOiBQZXJzaXN0U3RhdGVTdG9yZTxTPikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRhYnN0cmFjdCBmcm9tQW5lbWlhKGFuZW1pYTogUyk6IFQ7XG5cblx0Z2V0QnlJZChhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBUIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRWYWx1ZShhZ2dyZWdhdGVJZCk7XG5cdH1cblxuXHRnZXRBbGwoKTogQXJyYXk8VD4ge1xuXHRcdHJldHVybiB0aGlzLmdldEFsbFZhbHVlcygpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRBbGxWYWx1ZXMoKTogQXJyYXk8VD4ge1xuXHRcdGNvbnN0IGFuZW1pYXMgPSB0aGlzLnN0YXRlU3RvcmUuZ2V0QWxsKCk7XG5cblx0XHRyZXR1cm4gYW5lbWlhcy5tYXAoKGFuZW1pYSkgPT4gdGhpcy5mcm9tQW5lbWlhKGFuZW1pYSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRWYWx1ZShhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBUIHtcblx0XHRjb25zdCBhbmVtaWEgPSB0aGlzLnN0YXRlU3RvcmUuZ2V0KGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdGlmIChhbmVtaWEpIHtcblx0XHRcdHJldHVybiB0aGlzLmZyb21BbmVtaWEoYW5lbWlhKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==