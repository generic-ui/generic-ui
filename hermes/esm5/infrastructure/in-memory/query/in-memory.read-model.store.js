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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnJlYWQtbW9kZWwuc3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJpbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvcXVlcnkvaW4tbWVtb3J5LnJlYWQtbW9kZWwuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7Ozs7O0FBSzdFOzs7OztJQUErRixrREFBaUI7SUFFL0csZ0NBQXVDLGFBQStCO1FBQXRFLFlBQ0MsaUJBQU8sU0FDUDtRQUZzQyxtQkFBYSxHQUFiLGFBQWEsQ0FBa0I7O0lBRXRFLENBQUM7Ozs7O0lBSUQsd0NBQU87Ozs7SUFBUCxVQUFRLFdBQXdCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsdUNBQU07OztJQUFOO1FBQUEsaUJBSUM7UUFIQSxPQUFPLElBQUksQ0FBQyxhQUFhO2FBQ25CLE1BQU0sRUFBRTthQUNSLEdBQUc7Ozs7UUFBQyxVQUFDLFNBQVksSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQTNCLENBQTJCLEVBQUMsQ0FBQztJQUMxRCxDQUFDOzs7Ozs7SUFFTyx5Q0FBUTs7Ozs7SUFBaEIsVUFBaUIsV0FBd0I7O1lBQ2xDLFlBQVksR0FBZ0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBRXJFLE9BQU8sWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRiw2QkFBQztBQUFELENBQUMsQUF4QkQsQ0FBK0YsY0FBYyxHQXdCNUc7Ozs7Ozs7Ozs7O0lBdEJzQiwrQ0FBZ0Q7Ozs7OztJQUl0RSx3RUFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvYWdncmVnYXRlL2FnZ3JlZ2F0ZSc7XG5cbmltcG9ydCB7IFJlYWRNb2RlbCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9yZWFkL3JlYWQtbW9kZWwnO1xuXG5pbXBvcnQgeyBSZWFkTW9kZWxTdG9yZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9yZWFkL3N0b3JlL3JlYWQtbW9kZWwuc3RvcmUnO1xuXG5pbXBvcnQgeyBJbk1lbW9yeVN0b3JlIH0gZnJvbSAnLi4vaW4tbWVtb3J5LnN0b3JlJztcbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL29wdGlvbmFsJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEluTWVtb3J5UmVhZE1vZGVsU3RvcmU8UiBleHRlbmRzIFJlYWRNb2RlbCwgRCBleHRlbmRzIEFnZ3JlZ2F0ZT4gZXh0ZW5kcyBSZWFkTW9kZWxTdG9yZTxSPiB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaW5NZW1vcnlTdG9yZTogSW5NZW1vcnlTdG9yZTxEPikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRhYnN0cmFjdCB0b1JlYWRNb2RlbChhZ2dyZWdhdGU6IEQpOiBSO1xuXG5cdGdldEJ5SWQoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogT3B0aW9uYWw8Uj4ge1xuXHRcdHJldHVybiB0aGlzLmdldFZhbHVlKGFnZ3JlZ2F0ZUlkKTtcblx0fVxuXG5cdGdldEFsbCgpOiBSZWFkb25seUFycmF5PFI+IHtcblx0XHRyZXR1cm4gdGhpcy5pbk1lbW9yeVN0b3JlXG5cdFx0XHRcdCAgIC5nZXRBbGwoKVxuXHRcdFx0XHQgICAubWFwKChhZ2dyZWdhdGU6IEQpID0+IHRoaXMudG9SZWFkTW9kZWwoYWdncmVnYXRlKSk7XG5cdH1cblxuXHRwcml2YXRlIGdldFZhbHVlKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IE9wdGlvbmFsPFI+IHtcblx0XHRjb25zdCBvcHRBZ2dyZWdhdGU6IE9wdGlvbmFsPEQ+ID0gdGhpcy5pbk1lbW9yeVN0b3JlLmdldChhZ2dyZWdhdGVJZCk7XG5cblx0XHRyZXR1cm4gb3B0QWdncmVnYXRlLm1hcCh0aGlzLnRvUmVhZE1vZGVsLmJpbmQodGhpcykpO1xuXHR9XG5cbn1cbiJdfQ==