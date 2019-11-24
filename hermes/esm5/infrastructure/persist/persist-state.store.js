/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Rename
 * @abstract
 * @template A
 */
var /**
 * Rename
 * @abstract
 * @template A
 */
PersistStateStore = /** @class */ (function () {
    function PersistStateStore() {
        this.state = new Map();
    }
    /**
     * @param {?} anemia
     * @return {?}
     */
    PersistStateStore.prototype.set = /**
     * @param {?} anemia
     * @return {?}
     */
    function (anemia) {
        this.state.set(anemia.getId(), anemia);
    };
    /**
     * @param {?} anemias
     * @return {?}
     */
    PersistStateStore.prototype.setMany = /**
     * @param {?} anemias
     * @return {?}
     */
    function (anemias) {
        var _this = this;
        anemias.forEach((/**
         * @param {?} anemia
         * @return {?}
         */
        function (anemia) {
            _this.set(anemia);
        }));
    };
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    PersistStateStore.prototype.get = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        return this.state.get(aggregateId.toString());
    };
    /**
     * @return {?}
     */
    PersistStateStore.prototype.getAll = /**
     * @return {?}
     */
    function () {
        return Array.from(this.state.values());
    };
    /**
     * @return {?}
     */
    PersistStateStore.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.state.clear();
    };
    return PersistStateStore;
}());
/**
 * Rename
 * @abstract
 * @template A
 */
export { PersistStateStore };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PersistStateStore.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC1zdGF0ZS5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImluZnJhc3RydWN0dXJlL3BlcnNpc3QvcGVyc2lzdC1zdGF0ZS5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFRQTs7Ozs7O0lBQUE7UUFFa0IsVUFBSyxHQUFtQixJQUFJLEdBQUcsRUFBRSxDQUFDO0lBdUJwRCxDQUFDOzs7OztJQXJCQSwrQkFBRzs7OztJQUFILFVBQUksTUFBUztRQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7OztJQUVELG1DQUFPOzs7O0lBQVAsVUFBUSxPQUFpQjtRQUF6QixpQkFJQztRQUhBLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxNQUFTO1lBQ3pCLEtBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEIsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7OztJQUVELCtCQUFHOzs7O0lBQUgsVUFBSSxXQUF3QjtRQUMzQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFFRCxrQ0FBTTs7O0lBQU47UUFDQyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxpQ0FBSzs7O0lBQUw7UUFDQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFDRix3QkFBQztBQUFELENBQUMsQUF6QkQsSUF5QkM7Ozs7Ozs7Ozs7OztJQXZCQSxrQ0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9hZ2dyZWdhdGUtaWQnO1xuXG5pbXBvcnQgeyBQZXJzaXN0QW5lbWlhIH0gZnJvbSAnLi9wZXJzaXN0LWFuZW1pYSc7XG5cblxuLyoqXG4gKiBSZW5hbWVcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBlcnNpc3RTdGF0ZVN0b3JlPEEgZXh0ZW5kcyBQZXJzaXN0QW5lbWlhPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdGF0ZTogTWFwPHN0cmluZywgQT4gPSBuZXcgTWFwKCk7XG5cblx0c2V0KGFuZW1pYTogQSk6IHZvaWQge1xuXHRcdHRoaXMuc3RhdGUuc2V0KGFuZW1pYS5nZXRJZCgpLCBhbmVtaWEpO1xuXHR9XG5cblx0c2V0TWFueShhbmVtaWFzOiBBcnJheTxBPik6IHZvaWQge1xuXHRcdGFuZW1pYXMuZm9yRWFjaCgoYW5lbWlhOiBBKSA9PiB7XG5cdFx0XHR0aGlzLnNldChhbmVtaWEpO1xuXHRcdH0pO1xuXHR9XG5cblx0Z2V0KGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IEEge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLmdldChhZ2dyZWdhdGVJZC50b1N0cmluZygpKTtcblx0fVxuXG5cdGdldEFsbCgpOiBBcnJheTxBPiB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy5zdGF0ZS52YWx1ZXMoKSk7XG5cdH1cblxuXHRjbGVhcigpOiB2b2lkIHtcblx0XHR0aGlzLnN0YXRlLmNsZWFyKCk7XG5cdH1cbn1cbiJdfQ==