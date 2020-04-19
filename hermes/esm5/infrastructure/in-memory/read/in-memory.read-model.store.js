/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ReadModelStore } from '../../../feature-api/read/store/read-model.store';
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
        // const aggregateId = readModelRootId.toAggregateId() as B; // TODO remove as
        return this.getValue(aggregateId);
    };
    /**
     * @return {?}
     */
    InMemoryReadModelStore.prototype.getAll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.inMemoryStore
            .getAll()
            .map((/**
         * @param {?} aggregate
         * @return {?}
         */
        function (aggregate) { return _this.toReadModel(aggregate); }));
    };
    /**
     * @private
     * @param {?} aggregateId
     * @return {?}
     */
    InMemoryReadModelStore.prototype.getValue = /**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnJlYWQtbW9kZWwuc3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJpbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvcmVhZC9pbi1tZW1vcnkucmVhZC1tb2RlbC5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUtBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrREFBa0QsQ0FBQzs7Ozs7QUFPbEY7Ozs7O0lBR3FDLGtEQUFvQjtJQUV4RCxnQ0FBdUMsYUFBa0M7UUFBekUsWUFDQyxpQkFBTyxTQUNQO1FBRnNDLG1CQUFhLEdBQWIsYUFBYSxDQUFxQjs7SUFFekUsQ0FBQzs7Ozs7SUFJRCx3Q0FBTzs7OztJQUFQLFVBQVEsV0FBYztRQUVyQiw4RUFBOEU7UUFFOUUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCx1Q0FBTTs7O0lBQU47UUFBQSxpQkFJQztRQUhBLE9BQU8sSUFBSSxDQUFDLGFBQWE7YUFDbkIsTUFBTSxFQUFFO2FBQ1IsR0FBRzs7OztRQUFDLFVBQUMsU0FBWSxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFBM0IsQ0FBMkIsRUFBQyxDQUFDO0lBQzFELENBQUM7Ozs7OztJQUVPLHlDQUFROzs7OztJQUFoQixVQUFpQixXQUFjOztZQUN4QixZQUFZLEdBQWdCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUVyRSxPQUFPLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUYsNkJBQUM7QUFBRCxDQUFDLEFBOUJELENBR3FDLGNBQWMsR0EyQmxEOzs7Ozs7Ozs7OztJQXpCc0IsK0NBQW1EOzs7Ozs7SUFJekUsd0VBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJvb3QgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tbWFuZC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJvb3QnO1xuXG5pbXBvcnQgeyBSZWFkTW9kZWxSb290IH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS1hcGkvcmVhZC9yZWFkLW1vZGVsLXJvb3QnO1xuXG5pbXBvcnQgeyBSZWFkTW9kZWxTdG9yZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUtYXBpL3JlYWQvc3RvcmUvcmVhZC1tb2RlbC5zdG9yZSc7XG5cbmltcG9ydCB7IEluTWVtb3J5U3RvcmUgfSBmcm9tICcuLi9pbi1tZW1vcnkuc3RvcmUnO1xuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vb3B0aW9uYWwnO1xuaW1wb3J0IHsgUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS1hcGkvcmVhZC9yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJbk1lbW9yeVJlYWRNb2RlbFN0b3JlPEkgZXh0ZW5kcyBSZWFkTW9kZWxSb290SWQsXG5cdFIgZXh0ZW5kcyBSZWFkTW9kZWxSb290PEk+LFxuXHRCIGV4dGVuZHMgQWdncmVnYXRlSWQsXG5cdEEgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PEI+PiBleHRlbmRzIFJlYWRNb2RlbFN0b3JlPEksIFI+IHtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpbk1lbW9yeVN0b3JlOiBJbk1lbW9yeVN0b3JlPEIsIEE+KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGFic3RyYWN0IHRvUmVhZE1vZGVsKGFnZ3JlZ2F0ZTogQSk6IFI7XG5cblx0Z2V0QnlJZChhZ2dyZWdhdGVJZDogQik6IE9wdGlvbmFsPFI+IHtcblxuXHRcdC8vIGNvbnN0IGFnZ3JlZ2F0ZUlkID0gcmVhZE1vZGVsUm9vdElkLnRvQWdncmVnYXRlSWQoKSBhcyBCOyAvLyBUT0RPIHJlbW92ZSBhc1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0VmFsdWUoYWdncmVnYXRlSWQpO1xuXHR9XG5cblx0Z2V0QWxsKCk6IFJlYWRvbmx5QXJyYXk8Uj4ge1xuXHRcdHJldHVybiB0aGlzLmluTWVtb3J5U3RvcmVcblx0XHRcdFx0ICAgLmdldEFsbCgpXG5cdFx0XHRcdCAgIC5tYXAoKGFnZ3JlZ2F0ZTogQSkgPT4gdGhpcy50b1JlYWRNb2RlbChhZ2dyZWdhdGUpKTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0VmFsdWUoYWdncmVnYXRlSWQ6IEIpOiBPcHRpb25hbDxSPiB7XG5cdFx0Y29uc3Qgb3B0QWdncmVnYXRlOiBPcHRpb25hbDxBPiA9IHRoaXMuaW5NZW1vcnlTdG9yZS5nZXQoYWdncmVnYXRlSWQpO1xuXG5cdFx0cmV0dXJuIG9wdEFnZ3JlZ2F0ZS5tYXAodGhpcy50b1JlYWRNb2RlbC5iaW5kKHRoaXMpKTtcblx0fVxuXG59XG4iXX0=