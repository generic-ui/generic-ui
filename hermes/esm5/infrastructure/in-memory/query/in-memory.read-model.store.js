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
        return this.inMemoryStore.getAll()
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
        var aggregate = this.inMemoryStore.get(aggregateId);
        if (aggregate) {
            return this.toReadModel(aggregate);
        }
        else {
            return null;
        }
    };
    return InMemoryReadModelStore;
}(ReadModelStore));
/**
 * @abstract
 * @template T, S
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnJlYWQtbW9kZWwuc3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJpbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvcXVlcnkvaW4tbWVtb3J5LnJlYWQtbW9kZWwuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFXQSxPQUFPLEVBQ04sY0FBYyxFQUNkLE1BQU0sNkNBQTZDLENBQUM7Ozs7O0FBSXJEOzs7OztJQUErRixrREFBaUI7SUFFL0csZ0NBQXVDLGFBQStCO1FBQXRFLFlBQ0MsaUJBQU8sU0FDUDtRQUZzQyxtQkFBYSxHQUFiLGFBQWEsQ0FBa0I7O0lBRXRFLENBQUM7Ozs7O0lBSUQsd0NBQU87Ozs7SUFBUCxVQUFRLFdBQXdCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsdUNBQU07OztJQUFOO1FBQUEsaUJBR0M7UUFGQSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO2FBQzVCLEdBQUc7Ozs7UUFBQyxVQUFDLFNBQVksSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQTNCLENBQTJCLEVBQUMsQ0FBQztJQUMxRCxDQUFDOzs7Ozs7SUFFTyx5Q0FBUTs7Ozs7SUFBaEIsVUFBaUIsV0FBd0I7O1lBQ2xDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFFckQsSUFBSSxTQUFTLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbkM7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDO1NBQ1o7SUFDRixDQUFDO0lBRUYsNkJBQUM7QUFBRCxDQUFDLEFBM0JELENBQStGLGNBQWMsR0EyQjVHOzs7Ozs7Ozs7OztJQXpCc0IsK0NBQWdEOzs7Ozs7SUFJdEUsd0VBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QWdncmVnYXRlSWRcbn0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQge1xuXHRBZ2dyZWdhdGVcbn0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvYWdncmVnYXRlJztcblxuaW1wb3J0IHtcblx0UmVhZE1vZGVsXG59IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9yZWFkL3JlYWQtbW9kZWwnO1xuXG5pbXBvcnQge1xuXHRSZWFkTW9kZWxTdG9yZVxufSBmcm9tICcuLi8uLi8uLi9kb21haW4vcmVhZC9zdG9yZS9yZWFkLW1vZGVsLnN0b3JlJztcblxuaW1wb3J0IHsgSW5NZW1vcnlTdG9yZSB9IGZyb20gJy4uL2luLW1lbW9yeS5zdG9yZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJbk1lbW9yeVJlYWRNb2RlbFN0b3JlPFQgZXh0ZW5kcyBSZWFkTW9kZWwsIFMgZXh0ZW5kcyBBZ2dyZWdhdGU+IGV4dGVuZHMgUmVhZE1vZGVsU3RvcmU8VD4ge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGluTWVtb3J5U3RvcmU6IEluTWVtb3J5U3RvcmU8Uz4pIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0YWJzdHJhY3QgdG9SZWFkTW9kZWwoYWdncmVnYXRlOiBTKTogVDtcblxuXHRnZXRCeUlkKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IFQge1xuXHRcdHJldHVybiB0aGlzLmdldFZhbHVlKGFnZ3JlZ2F0ZUlkKTtcblx0fVxuXG5cdGdldEFsbCgpOiBBcnJheTxUPiB7XG5cdFx0cmV0dXJuIHRoaXMuaW5NZW1vcnlTdG9yZS5nZXRBbGwoKVxuXHRcdFx0XHQgICAubWFwKChhZ2dyZWdhdGU6IFMpID0+IHRoaXMudG9SZWFkTW9kZWwoYWdncmVnYXRlKSk7XG5cdH1cblxuXHRwcml2YXRlIGdldFZhbHVlKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IFQge1xuXHRcdGNvbnN0IGFnZ3JlZ2F0ZSA9IHRoaXMuaW5NZW1vcnlTdG9yZS5nZXQoYWdncmVnYXRlSWQpO1xuXG5cdFx0aWYgKGFnZ3JlZ2F0ZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMudG9SZWFkTW9kZWwoYWdncmVnYXRlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==