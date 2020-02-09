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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnJlYWQtbW9kZWwuc3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJpbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvcXVlcnkvaW4tbWVtb3J5LnJlYWQtbW9kZWwuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7Ozs7O0FBSTdFOzs7OztJQUErRixrREFBaUI7SUFFL0csZ0NBQXVDLGFBQStCO1FBQXRFLFlBQ0MsaUJBQU8sU0FDUDtRQUZzQyxtQkFBYSxHQUFiLGFBQWEsQ0FBa0I7O0lBRXRFLENBQUM7Ozs7O0lBSUQsd0NBQU87Ozs7SUFBUCxVQUFRLFdBQXdCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsdUNBQU07OztJQUFOO1FBQUEsaUJBR0M7UUFGQSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO2FBQzVCLEdBQUc7Ozs7UUFBQyxVQUFDLFNBQVksSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQTNCLENBQTJCLEVBQUMsQ0FBQztJQUMxRCxDQUFDOzs7Ozs7SUFFTyx5Q0FBUTs7Ozs7SUFBaEIsVUFBaUIsV0FBd0I7O1lBQ2xDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFFckQsSUFBSSxTQUFTLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbkM7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDO1NBQ1o7SUFDRixDQUFDO0lBRUYsNkJBQUM7QUFBRCxDQUFDLEFBM0JELENBQStGLGNBQWMsR0EyQjVHOzs7Ozs7Ozs7OztJQXpCc0IsK0NBQWdEOzs7Ozs7SUFJdEUsd0VBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL2FnZ3JlZ2F0ZSc7XG5cbmltcG9ydCB7IFJlYWRNb2RlbCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9yZWFkL3JlYWQtbW9kZWwnO1xuXG5pbXBvcnQgeyBSZWFkTW9kZWxTdG9yZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9yZWFkL3N0b3JlL3JlYWQtbW9kZWwuc3RvcmUnO1xuXG5pbXBvcnQgeyBJbk1lbW9yeVN0b3JlIH0gZnJvbSAnLi4vaW4tbWVtb3J5LnN0b3JlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEluTWVtb3J5UmVhZE1vZGVsU3RvcmU8VCBleHRlbmRzIFJlYWRNb2RlbCwgUyBleHRlbmRzIEFnZ3JlZ2F0ZT4gZXh0ZW5kcyBSZWFkTW9kZWxTdG9yZTxUPiB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaW5NZW1vcnlTdG9yZTogSW5NZW1vcnlTdG9yZTxTPikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRhYnN0cmFjdCB0b1JlYWRNb2RlbChhZ2dyZWdhdGU6IFMpOiBUO1xuXG5cdGdldEJ5SWQoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogVCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VmFsdWUoYWdncmVnYXRlSWQpO1xuXHR9XG5cblx0Z2V0QWxsKCk6IEFycmF5PFQ+IHtcblx0XHRyZXR1cm4gdGhpcy5pbk1lbW9yeVN0b3JlLmdldEFsbCgpXG5cdFx0XHRcdCAgIC5tYXAoKGFnZ3JlZ2F0ZTogUykgPT4gdGhpcy50b1JlYWRNb2RlbChhZ2dyZWdhdGUpKTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0VmFsdWUoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogVCB7XG5cdFx0Y29uc3QgYWdncmVnYXRlID0gdGhpcy5pbk1lbW9yeVN0b3JlLmdldChhZ2dyZWdhdGVJZCk7XG5cblx0XHRpZiAoYWdncmVnYXRlKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50b1JlYWRNb2RlbChhZ2dyZWdhdGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxufVxuIl19