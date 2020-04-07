/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Optional } from '../../common/optional';
/**
 * @abstract
 * @template I, A
 */
var /**
 * @abstract
 * @template I, A
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
        return Optional.of(this.state.get(aggregateId.toString()));
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
 * @abstract
 * @template I, A
 */
export { PersistStateStore };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PersistStateStore.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC1zdGF0ZS5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImluZnJhc3RydWN0dXJlL3BlcnNpc3QvcGVyc2lzdC1zdGF0ZS5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztBQUtqRDs7Ozs7SUFBQTtRQUVrQixVQUFLLEdBQW1CLElBQUksR0FBRyxFQUFFLENBQUM7SUF1QnBELENBQUM7Ozs7O0lBckJBLCtCQUFHOzs7O0lBQUgsVUFBSSxNQUFTO1FBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRUQsbUNBQU87Ozs7SUFBUCxVQUFRLE9BQWlCO1FBQXpCLGlCQUlDO1FBSEEsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLE1BQVM7WUFDekIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQixDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsK0JBQUc7Ozs7SUFBSCxVQUFJLFdBQXdCO1FBQzNCLE9BQU8sUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7SUFFRCxrQ0FBTTs7O0lBQU47UUFDQyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxpQ0FBSzs7O0lBQUw7UUFDQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFDRix3QkFBQztBQUFELENBQUMsQUF6QkQsSUF5QkM7Ozs7Ozs7Ozs7O0lBdkJBLGtDQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBlcnNpc3RBbmVtaWEgfSBmcm9tICcuL3BlcnNpc3QtYW5lbWlhJztcbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi4vLi4vY29tbW9uL29wdGlvbmFsJztcbmltcG9ydCB7IFJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uL3JlYWQvcmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL2FnZ3JlZ2F0ZS1pZCc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBlcnNpc3RTdGF0ZVN0b3JlPEkgZXh0ZW5kcyBSZWFkTW9kZWxSb290SWQsIEEgZXh0ZW5kcyBQZXJzaXN0QW5lbWlhPEk+PiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdGF0ZTogTWFwPHN0cmluZywgQT4gPSBuZXcgTWFwKCk7XG5cblx0c2V0KGFuZW1pYTogQSk6IHZvaWQge1xuXHRcdHRoaXMuc3RhdGUuc2V0KGFuZW1pYS5nZXRJZCgpLCBhbmVtaWEpO1xuXHR9XG5cblx0c2V0TWFueShhbmVtaWFzOiBBcnJheTxBPik6IHZvaWQge1xuXHRcdGFuZW1pYXMuZm9yRWFjaCgoYW5lbWlhOiBBKSA9PiB7XG5cdFx0XHR0aGlzLnNldChhbmVtaWEpO1xuXHRcdH0pO1xuXHR9XG5cblx0Z2V0KGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IE9wdGlvbmFsPEE+IHtcblx0XHRyZXR1cm4gT3B0aW9uYWwub2YodGhpcy5zdGF0ZS5nZXQoYWdncmVnYXRlSWQudG9TdHJpbmcoKSkpO1xuXHR9XG5cblx0Z2V0QWxsKCk6IEFycmF5PEE+IHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnN0YXRlLnZhbHVlcygpKTtcblx0fVxuXG5cdGNsZWFyKCk6IHZvaWQge1xuXHRcdHRoaXMuc3RhdGUuY2xlYXIoKTtcblx0fVxufVxuIl19