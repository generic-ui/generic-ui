/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Optional } from '../../../common/optional';
/**
 * @abstract
 * @template I, A
 */
var /**
 * @abstract
 * @template I, A
 */
InMemoryStore = /** @class */ (function () {
    function InMemoryStore() {
        this.state = new Map();
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    InMemoryStore.prototype.set = /**
     * @param {?} aggregate
     * @return {?}
     */
    function (aggregate) {
        this.state.set(aggregate.getId().toString(), aggregate);
    };
    /**
     * @param {?} aggregates
     * @return {?}
     */
    InMemoryStore.prototype.setMany = /**
     * @param {?} aggregates
     * @return {?}
     */
    function (aggregates) {
        var _this = this;
        aggregates.forEach((/**
         * @param {?} aggregate
         * @return {?}
         */
        function (aggregate) {
            _this.set(aggregate);
        }));
    };
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    InMemoryStore.prototype.get = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        return Optional.of(this.state.get(aggregateId.toString()));
    };
    /**
     * @return {?}
     */
    InMemoryStore.prototype.getAll = /**
     * @return {?}
     */
    function () {
        return Array.from(this.state.values()).map((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return Optional.of(v); }));
    };
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    InMemoryStore.prototype.has = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        return this.state.has(aggregateId.toString());
    };
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    InMemoryStore.prototype.delete = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        this.state.delete(aggregateId.toString());
    };
    /**
     * @return {?}
     */
    InMemoryStore.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.state.clear();
    };
    return InMemoryStore;
}());
/**
 * @abstract
 * @template I, A
 */
export { InMemoryStore };
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryStore.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29yZS9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvaW4tbWVtb3J5LnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7O0FBRXBEOzs7OztJQUFBO1FBRWtCLFVBQUssR0FBbUIsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQWdDcEQsQ0FBQzs7Ozs7SUE5QkEsMkJBQUc7Ozs7SUFBSCxVQUFJLFNBQVk7UUFDZixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFRCwrQkFBTzs7OztJQUFQLFVBQVEsVUFBb0I7UUFBNUIsaUJBSUM7UUFIQSxVQUFVLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsU0FBWTtZQUMvQixLQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCwyQkFBRzs7OztJQUFILFVBQUksV0FBYztRQUNqQixPQUFPLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7O0lBRUQsOEJBQU07OztJQUFOO1FBQ0MsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFkLENBQWMsRUFBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7O0lBRUQsMkJBQUc7Ozs7SUFBSCxVQUFJLFdBQWM7UUFDakIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7OztJQUVELDhCQUFNOzs7O0lBQU4sVUFBTyxXQUFjO1FBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCw2QkFBSzs7O0lBQUw7UUFDQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRixvQkFBQztBQUFELENBQUMsQUFsQ0QsSUFrQ0M7Ozs7Ozs7Ozs7O0lBaENBLDhCQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgQWdncmVnYXRlUm9vdCB9IGZyb20gJy4uLy4uL2RvbWFpbi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJvb3QnO1xuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vb3B0aW9uYWwnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSW5NZW1vcnlTdG9yZTxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEEgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PEk+PiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdGF0ZTogTWFwPHN0cmluZywgQT4gPSBuZXcgTWFwKCk7XG5cblx0c2V0KGFnZ3JlZ2F0ZTogQSk6IHZvaWQge1xuXHRcdHRoaXMuc3RhdGUuc2V0KGFnZ3JlZ2F0ZS5nZXRJZCgpLnRvU3RyaW5nKCksIGFnZ3JlZ2F0ZSk7XG5cdH1cblxuXHRzZXRNYW55KGFnZ3JlZ2F0ZXM6IEFycmF5PEE+KTogdm9pZCB7XG5cdFx0YWdncmVnYXRlcy5mb3JFYWNoKChhZ2dyZWdhdGU6IEEpID0+IHtcblx0XHRcdHRoaXMuc2V0KGFnZ3JlZ2F0ZSk7XG5cdFx0fSk7XG5cdH1cblxuXHRnZXQoYWdncmVnYXRlSWQ6IEkpOiBPcHRpb25hbDxBPiB7XG5cdFx0cmV0dXJuIE9wdGlvbmFsLm9mKHRoaXMuc3RhdGUuZ2V0KGFnZ3JlZ2F0ZUlkLnRvU3RyaW5nKCkpKTtcblx0fVxuXG5cdGdldEFsbCgpOiBBcnJheTxPcHRpb25hbDxBPj4ge1xuXHRcdHJldHVybiBBcnJheS5mcm9tKHRoaXMuc3RhdGUudmFsdWVzKCkpLm1hcCh2ID0+IE9wdGlvbmFsLm9mKHYpKTtcblx0fVxuXG5cdGhhcyhhZ2dyZWdhdGVJZDogSSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLmhhcyhhZ2dyZWdhdGVJZC50b1N0cmluZygpKTtcblx0fVxuXG5cdGRlbGV0ZShhZ2dyZWdhdGVJZDogSSk6IHZvaWQge1xuXHRcdHRoaXMuc3RhdGUuZGVsZXRlKGFnZ3JlZ2F0ZUlkLnRvU3RyaW5nKCkpO1xuXHR9XG5cblx0Y2xlYXIoKTogdm9pZCB7XG5cdFx0dGhpcy5zdGF0ZS5jbGVhcigpO1xuXHR9XG5cbn1cbiJdfQ==