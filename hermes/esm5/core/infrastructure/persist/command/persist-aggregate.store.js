/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateStore } from '../../../domain/command/store/aggregate.store';
/**
 * @abstract
 * @template I, D, A
 */
var /**
 * @abstract
 * @template I, D, A
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
    PersistAggregateStore.prototype.findById = /**
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
 * @template I, D, A
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC1hZ2dyZWdhdGUuc3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb3JlL2luZnJhc3RydWN0dXJlL3BlcnNpc3QvY29tbWFuZC9wZXJzaXN0LWFnZ3JlZ2F0ZS5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQzs7Ozs7QUFTL0U7Ozs7O0lBQ1MsaURBQW9CO0lBRTVCLCtCQUF1QyxVQUFxQyxFQUNwRCxzQkFBOEM7UUFEdEUsWUFFQyxpQkFBTyxTQUVQO1FBSnNDLGdCQUFVLEdBQVYsVUFBVSxDQUEyQjtRQUNwRCw0QkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBRXJFLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLENBQUM7O0lBQzVDLENBQUM7Ozs7O0lBTUQsb0NBQUk7Ozs7SUFBSixVQUFLLFNBQVk7UUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELHdDQUFROzs7O0lBQVIsVUFBUyxXQUFjO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7Ozs7SUFFTyx5Q0FBUzs7Ozs7SUFBakIsVUFBa0IsU0FBWTs7WUFFdkIsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBRXZDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7OztJQUVPLHdDQUFROzs7OztJQUFoQixVQUFpQixXQUFjOztZQUN4QixTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBRWxELE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVGLDRCQUFDO0FBQUQsQ0FBQyxBQWxDRCxDQUNTLGNBQWMsR0FpQ3RCOzs7Ozs7Ozs7OztJQS9Cc0IsMkNBQXNEOzs7OztJQUNyRSx1REFBK0Q7Ozs7OztJQUt0RSxvRUFBbUM7Ozs7OztJQUVuQyxtRUFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcblxuaW1wb3J0IHsgQWdncmVnYXRlUm9vdCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJvb3QnO1xuaW1wb3J0IHsgQWdncmVnYXRlU3RvcmUgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tbWFuZC9zdG9yZS9hZ2dyZWdhdGUuc3RvcmUnO1xuaW1wb3J0IHsgQWdncmVnYXRlU3RvcmVSZWdpc3RlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL3N0b3JlL2FnZ3JlZ2F0ZS1zdG9yZS5yZWdpc3Rlcic7XG5cbmltcG9ydCB7IFBlcnNpc3RBbmVtaWEgfSBmcm9tICcuLi9wZXJzaXN0LWFuZW1pYSc7XG5pbXBvcnQgeyBQZXJzaXN0U3RhdGVTdG9yZSB9IGZyb20gJy4uL3BlcnNpc3Qtc3RhdGUuc3RvcmUnO1xuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vb3B0aW9uYWwnO1xuaW1wb3J0IHsgUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vYXBpL3JlYWQvcmVhZC1tb2RlbC1yb290LWlkJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUGVyc2lzdEFnZ3JlZ2F0ZVN0b3JlPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgRCBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Q8ST4sIEEgZXh0ZW5kcyBQZXJzaXN0QW5lbWlhPFJlYWRNb2RlbFJvb3RJZD4+XG5cdGV4dGVuZHMgQWdncmVnYXRlU3RvcmU8SSwgRD4ge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0YXRlU3RvcmU6IFBlcnNpc3RTdGF0ZVN0b3JlPGFueSwgQT4sXG5cdFx0XHRcdFx0XHQgIHByaXZhdGUgcmVhZG9ubHkgYWdncmVnYXRlU3RvcmVSZWdpc3RlcjogQWdncmVnYXRlU3RvcmVSZWdpc3Rlcikge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5hZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyLnJlZ2lzdGVyKHRoaXMpO1xuXHR9XG5cblx0YWJzdHJhY3QgdG9BbmVtaWEoYWdncmVnYXRlOiBEKTogQTtcblxuXHRhYnN0cmFjdCBmcm9tQW5lbWlhKGFuZW1pYTogQSk6IEQ7XG5cblx0c2F2ZShhZ2dyZWdhdGU6IEQpOiB2b2lkIHtcblx0XHR0aGlzLnNhdmVWYWx1ZShhZ2dyZWdhdGUpO1xuXHR9XG5cblx0ZmluZEJ5SWQoYWdncmVnYXRlSWQ6IEkpOiBPcHRpb25hbDxEPiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VmFsdWUoYWdncmVnYXRlSWQpO1xuXHR9XG5cblx0cHJpdmF0ZSBzYXZlVmFsdWUoYWdncmVnYXRlOiBEKTogdm9pZCB7XG5cblx0XHRjb25zdCBhbmVtaWEgPSB0aGlzLnRvQW5lbWlhKGFnZ3JlZ2F0ZSk7XG5cblx0XHR0aGlzLnN0YXRlU3RvcmUuc2V0KGFuZW1pYSk7XG5cdH1cblxuXHRwcml2YXRlIGdldFZhbHVlKGFnZ3JlZ2F0ZUlkOiBJKTogT3B0aW9uYWw8RD4ge1xuXHRcdGNvbnN0IG9wdEFuZW1pYSA9IHRoaXMuc3RhdGVTdG9yZS5nZXQoYWdncmVnYXRlSWQpO1xuXG5cdFx0cmV0dXJuIG9wdEFuZW1pYS5tYXAodGhpcy5mcm9tQW5lbWlhKTtcblx0fVxuXG59XG4iXX0=