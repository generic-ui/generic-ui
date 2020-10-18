/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Optional } from '../../../common/optional';
/**
 * @abstract
 * @template I, S
 */
var /**
 * @abstract
 * @template I, S
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
        return Array.from(this.state.values());
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
 * @template I, S
 */
export { InMemoryStore };
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryStore.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29yZS9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvaW4tbWVtb3J5LnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7O0FBRXBEOzs7OztJQUFBO1FBRWtCLFVBQUssR0FBbUIsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQWdDcEQsQ0FBQzs7Ozs7SUE5QkEsMkJBQUc7Ozs7SUFBSCxVQUFJLFNBQVk7UUFDZixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFRCwrQkFBTzs7OztJQUFQLFVBQVEsVUFBb0I7UUFBNUIsaUJBSUM7UUFIQSxVQUFVLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsU0FBWTtZQUMvQixLQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCwyQkFBRzs7OztJQUFILFVBQUksV0FBYztRQUNqQixPQUFPLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7O0lBRUQsOEJBQU07OztJQUFOO1FBQ0MsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7OztJQUVELDJCQUFHOzs7O0lBQUgsVUFBSSxXQUFjO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFRCw4QkFBTTs7OztJQUFOLFVBQU8sV0FBYztRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7O0lBRUQsNkJBQUs7OztJQUFMO1FBQ0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUYsb0JBQUM7QUFBRCxDQUFDLEFBbENELElBa0NDOzs7Ozs7Ozs7OztJQWhDQSw4QkFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJvb3QgfSBmcm9tICcuLi8uLi9kb21haW4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1yb290JztcbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL29wdGlvbmFsJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEluTWVtb3J5U3RvcmU8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBTIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPj4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RhdGU6IE1hcDxzdHJpbmcsIFM+ID0gbmV3IE1hcCgpO1xuXG5cdHNldChhZ2dyZWdhdGU6IFMpOiB2b2lkIHtcblx0XHR0aGlzLnN0YXRlLnNldChhZ2dyZWdhdGUuZ2V0SWQoKS50b1N0cmluZygpLCBhZ2dyZWdhdGUpO1xuXHR9XG5cblx0c2V0TWFueShhZ2dyZWdhdGVzOiBBcnJheTxTPik6IHZvaWQge1xuXHRcdGFnZ3JlZ2F0ZXMuZm9yRWFjaCgoYWdncmVnYXRlOiBTKSA9PiB7XG5cdFx0XHR0aGlzLnNldChhZ2dyZWdhdGUpO1xuXHRcdH0pO1xuXHR9XG5cblx0Z2V0KGFnZ3JlZ2F0ZUlkOiBJKTogT3B0aW9uYWw8Uz4ge1xuXHRcdHJldHVybiBPcHRpb25hbC5vZih0aGlzLnN0YXRlLmdldChhZ2dyZWdhdGVJZC50b1N0cmluZygpKSk7XG5cdH1cblxuXHRnZXRBbGwoKTogQXJyYXk8Uz4ge1xuXHRcdHJldHVybiBBcnJheS5mcm9tKHRoaXMuc3RhdGUudmFsdWVzKCkpO1xuXHR9XG5cblx0aGFzKGFnZ3JlZ2F0ZUlkOiBJKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUuaGFzKGFnZ3JlZ2F0ZUlkLnRvU3RyaW5nKCkpO1xuXHR9XG5cblx0ZGVsZXRlKGFnZ3JlZ2F0ZUlkOiBJKTogdm9pZCB7XG5cdFx0dGhpcy5zdGF0ZS5kZWxldGUoYWdncmVnYXRlSWQudG9TdHJpbmcoKSk7XG5cdH1cblxuXHRjbGVhcigpOiB2b2lkIHtcblx0XHR0aGlzLnN0YXRlLmNsZWFyKCk7XG5cdH1cblxufVxuIl19