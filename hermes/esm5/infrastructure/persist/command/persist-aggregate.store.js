/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateStore } from '../../../domain/command/store/aggregate.store';
/**
 * @abstract
 * @template D, A
 */
var /**
 * @abstract
 * @template D, A
 */
PersistAggregateStore = /** @class */ (function (_super) {
    tslib_1.__extends(PersistAggregateStore, _super);
    function PersistAggregateStore(stateStore, aggregateStoreRegister) {
        var _this = _super.call(this) || this;
        _this.stateStore = stateStore;
        _this.aggregateStoreRegister = aggregateStoreRegister;
        _this.aggregateStoreRegister.register(_this);
        return _this;
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    PersistAggregateStore.prototype.save = /**
     * @param {?} aggregate
     * @return {?}
     */
    function (aggregate) {
        this.saveValue(aggregate);
    };
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    PersistAggregateStore.prototype.getById = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        return this.getValue(aggregateId);
    };
    /**
     * @private
     * @param {?} aggregate
     * @return {?}
     */
    PersistAggregateStore.prototype.saveValue = /**
     * @private
     * @param {?} aggregate
     * @return {?}
     */
    function (aggregate) {
        /** @type {?} */
        var anemia = this.toAnemia(aggregate);
        this.stateStore.set(anemia);
    };
    /**
     * @private
     * @param {?} aggregateId
     * @return {?}
     */
    PersistAggregateStore.prototype.getValue = /**
     * @private
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        /** @type {?} */
        var optAnemia = this.stateStore.get(aggregateId);
        return optAnemia.map(this.fromAnemia);
    };
    return PersistAggregateStore;
}(AggregateStore));
/**
 * @abstract
 * @template D, A
 */
export { PersistAggregateStore };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC1hZ2dyZWdhdGUuc3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJpbmZyYXN0cnVjdHVyZS9wZXJzaXN0L2NvbW1hbmQvcGVyc2lzdC1hZ2dyZWdhdGUuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0NBQStDLENBQUM7Ozs7O0FBUS9FOzs7OztJQUFrRyxpREFBaUI7SUFFbEgsK0JBQXVDLFVBQWdDLEVBQy9DLHNCQUE4QztRQUR0RSxZQUVDLGlCQUFPLFNBRVA7UUFKc0MsZ0JBQVUsR0FBVixVQUFVLENBQXNCO1FBQy9DLDRCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFFckUsS0FBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsQ0FBQzs7SUFDNUMsQ0FBQzs7Ozs7SUFNRCxvQ0FBSTs7OztJQUFKLFVBQUssU0FBWTtRQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsdUNBQU87Ozs7SUFBUCxVQUFRLFdBQXdCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7Ozs7SUFFTyx5Q0FBUzs7Ozs7SUFBakIsVUFBa0IsU0FBWTs7WUFFdkIsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBRXZDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7OztJQUVPLHdDQUFROzs7OztJQUFoQixVQUFpQixXQUF3Qjs7WUFDbEMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUVsRCxPQUFPLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRiw0QkFBQztBQUFELENBQUMsQUFqQ0QsQ0FBa0csY0FBYyxHQWlDL0c7Ozs7Ozs7Ozs7O0lBL0JzQiwyQ0FBaUQ7Ozs7O0lBQ2hFLHVEQUErRDs7Ozs7O0lBS3RFLG9FQUFtQzs7Ozs7O0lBRW5DLG1FQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2FnZ3JlZ2F0ZS1pZCc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL2FnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVTdG9yZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL3N0b3JlL2FnZ3JlZ2F0ZS5zdG9yZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvc3RvcmUvYWdncmVnYXRlLXN0b3JlLnJlZ2lzdGVyJztcblxuaW1wb3J0IHsgUGVyc2lzdEFuZW1pYSB9IGZyb20gJy4uL3BlcnNpc3QtYW5lbWlhJztcbmltcG9ydCB7IFBlcnNpc3RTdGF0ZVN0b3JlIH0gZnJvbSAnLi4vcGVyc2lzdC1zdGF0ZS5zdG9yZSc7XG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9vcHRpb25hbCc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBlcnNpc3RBZ2dyZWdhdGVTdG9yZTxEIGV4dGVuZHMgQWdncmVnYXRlLCBBIGV4dGVuZHMgUGVyc2lzdEFuZW1pYT4gZXh0ZW5kcyBBZ2dyZWdhdGVTdG9yZTxEPiB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RhdGVTdG9yZTogUGVyc2lzdFN0YXRlU3RvcmU8QT4sXG5cdFx0XHRcdFx0XHQgIHByaXZhdGUgcmVhZG9ubHkgYWdncmVnYXRlU3RvcmVSZWdpc3RlcjogQWdncmVnYXRlU3RvcmVSZWdpc3Rlcikge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5hZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyLnJlZ2lzdGVyKHRoaXMpO1xuXHR9XG5cblx0YWJzdHJhY3QgdG9BbmVtaWEoYWdncmVnYXRlOiBEKTogQTtcblxuXHRhYnN0cmFjdCBmcm9tQW5lbWlhKGFuZW1pYTogQSk6IEQ7XG5cblx0c2F2ZShhZ2dyZWdhdGU6IEQpOiB2b2lkIHtcblx0XHR0aGlzLnNhdmVWYWx1ZShhZ2dyZWdhdGUpO1xuXHR9XG5cblx0Z2V0QnlJZChhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBPcHRpb25hbDxEPiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VmFsdWUoYWdncmVnYXRlSWQpO1xuXHR9XG5cblx0cHJpdmF0ZSBzYXZlVmFsdWUoYWdncmVnYXRlOiBEKTogdm9pZCB7XG5cblx0XHRjb25zdCBhbmVtaWEgPSB0aGlzLnRvQW5lbWlhKGFnZ3JlZ2F0ZSk7XG5cblx0XHR0aGlzLnN0YXRlU3RvcmUuc2V0KGFuZW1pYSk7XG5cdH1cblxuXHRwcml2YXRlIGdldFZhbHVlKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IE9wdGlvbmFsPEQ+IHtcblx0XHRjb25zdCBvcHRBbmVtaWEgPSB0aGlzLnN0YXRlU3RvcmUuZ2V0KGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdHJldHVybiBvcHRBbmVtaWEubWFwKHRoaXMuZnJvbUFuZW1pYSk7XG5cdH1cblxufVxuIl19