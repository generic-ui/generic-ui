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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC1hZ2dyZWdhdGUuc3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJpbmZyYXN0cnVjdHVyZS9wZXJzaXN0L2NvbW1hbmQvcGVyc2lzdC1hZ2dyZWdhdGUuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0NBQStDLENBQUM7Ozs7O0FBUS9FOzs7OztJQUFrRyxpREFBaUI7SUFFbEgsK0JBQXVDLFVBQWdDLEVBQy9DLHNCQUE4QztRQUR0RSxZQUVDLGlCQUFPLFNBRVA7UUFKc0MsZ0JBQVUsR0FBVixVQUFVLENBQXNCO1FBQy9DLDRCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFFckUsS0FBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsQ0FBQzs7SUFDNUMsQ0FBQzs7Ozs7SUFNRCxvQ0FBSTs7OztJQUFKLFVBQUssU0FBWTtRQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsdUNBQU87Ozs7SUFBUCxVQUFRLFdBQXdCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7Ozs7SUFFTyx5Q0FBUzs7Ozs7SUFBakIsVUFBa0IsU0FBWTs7WUFFdkIsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBRXZDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7OztJQUVPLHdDQUFROzs7OztJQUFoQixVQUFpQixXQUF3Qjs7WUFDbEMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUVsRCxPQUFPLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRiw0QkFBQztBQUFELENBQUMsQUFqQ0QsQ0FBa0csY0FBYyxHQWlDL0c7Ozs7Ozs7Ozs7O0lBL0JzQiwyQ0FBaUQ7Ozs7O0lBQ2hFLHVEQUErRDs7Ozs7O0lBS3RFLG9FQUFtQzs7Ozs7O0lBRW5DLG1FQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2FnZ3JlZ2F0ZS1pZCc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgQWdncmVnYXRlU3RvcmUgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tbWFuZC9zdG9yZS9hZ2dyZWdhdGUuc3RvcmUnO1xuaW1wb3J0IHsgQWdncmVnYXRlU3RvcmVSZWdpc3RlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL3N0b3JlL2FnZ3JlZ2F0ZS1zdG9yZS5yZWdpc3Rlcic7XG5cbmltcG9ydCB7IFBlcnNpc3RBbmVtaWEgfSBmcm9tICcuLi9wZXJzaXN0LWFuZW1pYSc7XG5pbXBvcnQgeyBQZXJzaXN0U3RhdGVTdG9yZSB9IGZyb20gJy4uL3BlcnNpc3Qtc3RhdGUuc3RvcmUnO1xuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vb3B0aW9uYWwnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQZXJzaXN0QWdncmVnYXRlU3RvcmU8RCBleHRlbmRzIEFnZ3JlZ2F0ZSwgQSBleHRlbmRzIFBlcnNpc3RBbmVtaWE+IGV4dGVuZHMgQWdncmVnYXRlU3RvcmU8RD4ge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0YXRlU3RvcmU6IFBlcnNpc3RTdGF0ZVN0b3JlPEE+LFxuXHRcdFx0XHRcdFx0ICBwcml2YXRlIHJlYWRvbmx5IGFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXI6IEFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuYWdncmVnYXRlU3RvcmVSZWdpc3Rlci5yZWdpc3Rlcih0aGlzKTtcblx0fVxuXG5cdGFic3RyYWN0IHRvQW5lbWlhKGFnZ3JlZ2F0ZTogRCk6IEE7XG5cblx0YWJzdHJhY3QgZnJvbUFuZW1pYShhbmVtaWE6IEEpOiBEO1xuXG5cdHNhdmUoYWdncmVnYXRlOiBEKTogdm9pZCB7XG5cdFx0dGhpcy5zYXZlVmFsdWUoYWdncmVnYXRlKTtcblx0fVxuXG5cdGdldEJ5SWQoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogT3B0aW9uYWw8RD4ge1xuXHRcdHJldHVybiB0aGlzLmdldFZhbHVlKGFnZ3JlZ2F0ZUlkKTtcblx0fVxuXG5cdHByaXZhdGUgc2F2ZVZhbHVlKGFnZ3JlZ2F0ZTogRCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgYW5lbWlhID0gdGhpcy50b0FuZW1pYShhZ2dyZWdhdGUpO1xuXG5cdFx0dGhpcy5zdGF0ZVN0b3JlLnNldChhbmVtaWEpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRWYWx1ZShhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBPcHRpb25hbDxEPiB7XG5cdFx0Y29uc3Qgb3B0QW5lbWlhID0gdGhpcy5zdGF0ZVN0b3JlLmdldChhZ2dyZWdhdGVJZCk7XG5cblx0XHRyZXR1cm4gb3B0QW5lbWlhLm1hcCh0aGlzLmZyb21BbmVtaWEpO1xuXHR9XG5cbn1cbiJdfQ==