/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ReadModelStore } from '../../../domain/read/store/read-model.store';
/**
 * @abstract
 * @template R, D
 */
var /**
 * @abstract
 * @template R, D
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
 * @template R, D
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnJlYWQtbW9kZWwuc3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJpbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvcXVlcnkvaW4tbWVtb3J5LnJlYWQtbW9kZWwuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7Ozs7O0FBSzdFOzs7OztJQUErRixrREFBaUI7SUFFL0csZ0NBQXVDLGFBQStCO1FBQXRFLFlBQ0MsaUJBQU8sU0FDUDtRQUZzQyxtQkFBYSxHQUFiLGFBQWEsQ0FBa0I7O0lBRXRFLENBQUM7Ozs7O0lBSUQsd0NBQU87Ozs7SUFBUCxVQUFRLFdBQXdCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsdUNBQU07OztJQUFOO1FBQUEsaUJBSUM7UUFIQSxPQUFPLElBQUksQ0FBQyxhQUFhO2FBQ25CLE1BQU0sRUFBRTthQUNSLEdBQUc7Ozs7UUFBQyxVQUFDLFNBQVksSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQTNCLENBQTJCLEVBQUMsQ0FBQztJQUMxRCxDQUFDOzs7Ozs7SUFFTyx5Q0FBUTs7Ozs7SUFBaEIsVUFBaUIsV0FBd0I7O1lBQ2xDLFlBQVksR0FBZ0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBRXJFLE9BQU8sWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRiw2QkFBQztBQUFELENBQUMsQUF4QkQsQ0FBK0YsY0FBYyxHQXdCNUc7Ozs7Ozs7Ozs7O0lBdEJzQiwrQ0FBZ0Q7Ozs7OztJQUl0RSx3RUFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvYWdncmVnYXRlJztcblxuaW1wb3J0IHsgUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3JlYWQvcmVhZC1tb2RlbCc7XG5cbmltcG9ydCB7IFJlYWRNb2RlbFN0b3JlIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3JlYWQvc3RvcmUvcmVhZC1tb2RlbC5zdG9yZSc7XG5cbmltcG9ydCB7IEluTWVtb3J5U3RvcmUgfSBmcm9tICcuLi9pbi1tZW1vcnkuc3RvcmUnO1xuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vb3B0aW9uYWwnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSW5NZW1vcnlSZWFkTW9kZWxTdG9yZTxSIGV4dGVuZHMgUmVhZE1vZGVsLCBEIGV4dGVuZHMgQWdncmVnYXRlPiBleHRlbmRzIFJlYWRNb2RlbFN0b3JlPFI+IHtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpbk1lbW9yeVN0b3JlOiBJbk1lbW9yeVN0b3JlPEQ+KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGFic3RyYWN0IHRvUmVhZE1vZGVsKGFnZ3JlZ2F0ZTogRCk6IFI7XG5cblx0Z2V0QnlJZChhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBPcHRpb25hbDxSPiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VmFsdWUoYWdncmVnYXRlSWQpO1xuXHR9XG5cblx0Z2V0QWxsKCk6IFJlYWRvbmx5QXJyYXk8Uj4ge1xuXHRcdHJldHVybiB0aGlzLmluTWVtb3J5U3RvcmVcblx0XHRcdFx0ICAgLmdldEFsbCgpXG5cdFx0XHRcdCAgIC5tYXAoKGFnZ3JlZ2F0ZTogRCkgPT4gdGhpcy50b1JlYWRNb2RlbChhZ2dyZWdhdGUpKTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0VmFsdWUoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogT3B0aW9uYWw8Uj4ge1xuXHRcdGNvbnN0IG9wdEFnZ3JlZ2F0ZTogT3B0aW9uYWw8RD4gPSB0aGlzLmluTWVtb3J5U3RvcmUuZ2V0KGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdHJldHVybiBvcHRBZ2dyZWdhdGUubWFwKHRoaXMudG9SZWFkTW9kZWwuYmluZCh0aGlzKSk7XG5cdH1cblxufVxuIl19