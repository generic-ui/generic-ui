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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnJlYWQtbW9kZWwuc3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb3JlL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9yZWFkL2luLW1lbW9yeS5yZWFkLW1vZGVsLnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0EsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOzs7OztBQU8xRTs7Ozs7SUFHcUMsa0RBQW9CO0lBRXhELGdDQUF1QyxhQUFrQztRQUF6RSxZQUNDLGlCQUFPLFNBQ1A7UUFGc0MsbUJBQWEsR0FBYixhQUFhLENBQXFCOztJQUV6RSxDQUFDOzs7OztJQUlELHdDQUFPOzs7O0lBQVAsVUFBUSxXQUFjO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7Ozs7SUFFTyx5Q0FBUTs7Ozs7SUFBaEIsVUFBaUIsV0FBYzs7WUFFeEIsWUFBWSxHQUFnQixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFFckUsT0FBTyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVGLDZCQUFDO0FBQUQsQ0FBQyxBQXRCRCxDQUdxQyxjQUFjLEdBbUJsRDs7Ozs7Ozs7Ozs7SUFqQnNCLCtDQUFtRDs7Ozs7O0lBSXpFLHdFQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgQWdncmVnYXRlUm9vdCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJvb3QnO1xuXG5pbXBvcnQgeyBSZWFkTW9kZWxSb290IH0gZnJvbSAnLi4vLi4vLi4vYXBpL3JlYWQvcmVhZC1tb2RlbC1yb290JztcblxuaW1wb3J0IHsgUmVhZE1vZGVsU3RvcmUgfSBmcm9tICcuLi8uLi8uLi9hcGkvcmVhZC9zdG9yZS9yZWFkLW1vZGVsLnN0b3JlJztcblxuaW1wb3J0IHsgSW5NZW1vcnlTdG9yZSB9IGZyb20gJy4uL2luLW1lbW9yeS5zdG9yZSc7XG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9vcHRpb25hbCc7XG5pbXBvcnQgeyBSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi9hcGkvcmVhZC9yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJbk1lbW9yeVJlYWRNb2RlbFN0b3JlPEkgZXh0ZW5kcyBSZWFkTW9kZWxSb290SWQsXG5cdFIgZXh0ZW5kcyBSZWFkTW9kZWxSb290PEk+LFxuXHRCIGV4dGVuZHMgQWdncmVnYXRlSWQsXG5cdEEgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PEI+PiBleHRlbmRzIFJlYWRNb2RlbFN0b3JlPEksIFI+IHtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpbk1lbW9yeVN0b3JlOiBJbk1lbW9yeVN0b3JlPEIsIEE+KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGFic3RyYWN0IHRvUmVhZE1vZGVsKGFnZ3JlZ2F0ZTogQSk6IFI7XG5cblx0Z2V0QnlJZChhZ2dyZWdhdGVJZDogQik6IE9wdGlvbmFsPFI+IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRWYWx1ZShhZ2dyZWdhdGVJZCk7XG5cdH1cblxuXHRwcml2YXRlIGdldFZhbHVlKGFnZ3JlZ2F0ZUlkOiBCKTogT3B0aW9uYWw8Uj4ge1xuXG5cdFx0Y29uc3Qgb3B0QWdncmVnYXRlOiBPcHRpb25hbDxBPiA9IHRoaXMuaW5NZW1vcnlTdG9yZS5nZXQoYWdncmVnYXRlSWQpO1xuXG5cdFx0cmV0dXJuIG9wdEFnZ3JlZ2F0ZS5tYXAodGhpcy50b1JlYWRNb2RlbC5iaW5kKHRoaXMpKTtcblx0fVxuXG59XG4iXX0=