/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ReadModelStore } from '../../../api/read/store/read-model.store';
/**
 * @abstract
 * @template I, R, B, A
 */
var /**
 * @abstract
 * @template I, R, B, A
 */
InMemoryReadModelStore = /** @class */ (function (_super) {
    tslib_1.__extends(InMemoryReadModelStore, _super);
    function InMemoryReadModelStore(inMemoryStore) {
        var _this = _super.call(this) || this;
        _this.inMemoryStore = inMemoryStore;
        return _this;
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    InMemoryReadModelStore.prototype.getById = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        return this.getValue(aggregateId);
    };
    // getAll(): ReadonlyArray<R> {
    // 	return this.inMemoryStore
    // 			   .getAll()
    // 			   .map((aggregate: A) => this.toReadModel(aggregate));
    // }
    // getAll(): ReadonlyArray<R> {
    // 	return this.inMemoryStore
    // 			   .getAll()
    // 			   .map((aggregate: A) => this.toReadModel(aggregate));
    // }
    /**
     * @private
     * @param {?} aggregateId
     * @return {?}
     */
    InMemoryReadModelStore.prototype.getValue = 
    // getAll(): ReadonlyArray<R> {
    // 	return this.inMemoryStore
    // 			   .getAll()
    // 			   .map((aggregate: A) => this.toReadModel(aggregate));
    // }
    /**
     * @private
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        /** @type {?} */
        var optAggregate = this.inMemoryStore.get(aggregateId);
        return optAggregate.map(this.toReadModel.bind(this));
    };
    return InMemoryReadModelStore;
}(ReadModelStore));
/**
 * @abstract
 * @template I, R, B, A
 */
export { InMemoryReadModelStore };
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryReadModelStore.prototype.inMemoryStore;
    /**
     * @abstract
     * @param {?} aggregate
     * @return {?}
     */
    InMemoryReadModelStore.prototype.toReadModel = function (aggregate) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnJlYWQtbW9kZWwuc3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb3JlL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9yZWFkL2luLW1lbW9yeS5yZWFkLW1vZGVsLnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0EsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOzs7OztBQU8xRTs7Ozs7SUFHcUMsa0RBQW9CO0lBRXhELGdDQUF1QyxhQUFrQztRQUF6RSxZQUNDLGlCQUFPLFNBQ1A7UUFGc0MsbUJBQWEsR0FBYixhQUFhLENBQXFCOztJQUV6RSxDQUFDOzs7OztJQUlELHdDQUFPOzs7O0lBQVAsVUFBUSxXQUFjO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsK0JBQStCO0lBQy9CLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsNkRBQTZEO0lBQzdELElBQUk7Ozs7Ozs7Ozs7O0lBRUkseUNBQVE7Ozs7Ozs7Ozs7O0lBQWhCLFVBQWlCLFdBQWM7O1lBRXhCLFlBQVksR0FBZ0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBRXJFLE9BQU8sWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRiw2QkFBQztBQUFELENBQUMsQUE1QkQsQ0FHcUMsY0FBYyxHQXlCbEQ7Ozs7Ozs7Ozs7O0lBdkJzQiwrQ0FBbUQ7Ozs7OztJQUl6RSx3RUFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJvb3QgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1yb290JztcblxuaW1wb3J0IHsgUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4uLy4uLy4uL2FwaS9yZWFkL3JlYWQtbW9kZWwtcm9vdCc7XG5cbmltcG9ydCB7IFJlYWRNb2RlbFN0b3JlIH0gZnJvbSAnLi4vLi4vLi4vYXBpL3JlYWQvc3RvcmUvcmVhZC1tb2RlbC5zdG9yZSc7XG5cbmltcG9ydCB7IEluTWVtb3J5U3RvcmUgfSBmcm9tICcuLi9pbi1tZW1vcnkuc3RvcmUnO1xuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vb3B0aW9uYWwnO1xuaW1wb3J0IHsgUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vYXBpL3JlYWQvcmVhZC1tb2RlbC1yb290LWlkJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSW5NZW1vcnlSZWFkTW9kZWxTdG9yZTxJIGV4dGVuZHMgUmVhZE1vZGVsUm9vdElkLFxuXHRSIGV4dGVuZHMgUmVhZE1vZGVsUm9vdDxJPixcblx0QiBleHRlbmRzIEFnZ3JlZ2F0ZUlkLFxuXHRBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxCPj4gZXh0ZW5kcyBSZWFkTW9kZWxTdG9yZTxJLCBSPiB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaW5NZW1vcnlTdG9yZTogSW5NZW1vcnlTdG9yZTxCLCBBPikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRhYnN0cmFjdCB0b1JlYWRNb2RlbChhZ2dyZWdhdGU6IEEpOiBSO1xuXG5cdGdldEJ5SWQoYWdncmVnYXRlSWQ6IEIpOiBPcHRpb25hbDxSPiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VmFsdWUoYWdncmVnYXRlSWQpO1xuXHR9XG5cblx0Ly8gZ2V0QWxsKCk6IFJlYWRvbmx5QXJyYXk8Uj4ge1xuXHQvLyBcdHJldHVybiB0aGlzLmluTWVtb3J5U3RvcmVcblx0Ly8gXHRcdFx0ICAgLmdldEFsbCgpXG5cdC8vIFx0XHRcdCAgIC5tYXAoKGFnZ3JlZ2F0ZTogQSkgPT4gdGhpcy50b1JlYWRNb2RlbChhZ2dyZWdhdGUpKTtcblx0Ly8gfVxuXG5cdHByaXZhdGUgZ2V0VmFsdWUoYWdncmVnYXRlSWQ6IEIpOiBPcHRpb25hbDxSPiB7XG5cblx0XHRjb25zdCBvcHRBZ2dyZWdhdGU6IE9wdGlvbmFsPEE+ID0gdGhpcy5pbk1lbW9yeVN0b3JlLmdldChhZ2dyZWdhdGVJZCk7XG5cblx0XHRyZXR1cm4gb3B0QWdncmVnYXRlLm1hcCh0aGlzLnRvUmVhZE1vZGVsLmJpbmQodGhpcykpO1xuXHR9XG5cbn1cbiJdfQ==