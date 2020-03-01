/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Optional } from '../../common/optional';
/**
 * @abstract
 * @template A
 */
var /**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC1zdGF0ZS5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImluZnJhc3RydWN0dXJlL3BlcnNpc3QvcGVyc2lzdC1zdGF0ZS5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztBQUdqRDs7Ozs7SUFBQTtRQUVrQixVQUFLLEdBQW1CLElBQUksR0FBRyxFQUFFLENBQUM7SUF1QnBELENBQUM7Ozs7O0lBckJBLCtCQUFHOzs7O0lBQUgsVUFBSSxNQUFTO1FBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRUQsbUNBQU87Ozs7SUFBUCxVQUFRLE9BQWlCO1FBQXpCLGlCQUlDO1FBSEEsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLE1BQVM7WUFDekIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQixDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsK0JBQUc7Ozs7SUFBSCxVQUFJLFdBQXdCO1FBQzNCLE9BQU8sUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7SUFFRCxrQ0FBTTs7O0lBQU47UUFDQyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxpQ0FBSzs7O0lBQUw7UUFDQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFDRix3QkFBQztBQUFELENBQUMsQUF6QkQsSUF5QkM7Ozs7Ozs7Ozs7O0lBdkJBLGtDQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL2FnZ3JlZ2F0ZS1pZCc7XG5cbmltcG9ydCB7IFBlcnNpc3RBbmVtaWEgfSBmcm9tICcuL3BlcnNpc3QtYW5lbWlhJztcbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi4vLi4vY29tbW9uL29wdGlvbmFsJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUGVyc2lzdFN0YXRlU3RvcmU8QSBleHRlbmRzIFBlcnNpc3RBbmVtaWE+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0YXRlOiBNYXA8c3RyaW5nLCBBPiA9IG5ldyBNYXAoKTtcblxuXHRzZXQoYW5lbWlhOiBBKTogdm9pZCB7XG5cdFx0dGhpcy5zdGF0ZS5zZXQoYW5lbWlhLmdldElkKCksIGFuZW1pYSk7XG5cdH1cblxuXHRzZXRNYW55KGFuZW1pYXM6IEFycmF5PEE+KTogdm9pZCB7XG5cdFx0YW5lbWlhcy5mb3JFYWNoKChhbmVtaWE6IEEpID0+IHtcblx0XHRcdHRoaXMuc2V0KGFuZW1pYSk7XG5cdFx0fSk7XG5cdH1cblxuXHRnZXQoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogT3B0aW9uYWw8QT4ge1xuXHRcdHJldHVybiBPcHRpb25hbC5vZih0aGlzLnN0YXRlLmdldChhZ2dyZWdhdGVJZC50b1N0cmluZygpKSk7XG5cdH1cblxuXHRnZXRBbGwoKTogQXJyYXk8QT4ge1xuXHRcdHJldHVybiBBcnJheS5mcm9tKHRoaXMuc3RhdGUudmFsdWVzKCkpO1xuXHR9XG5cblx0Y2xlYXIoKTogdm9pZCB7XG5cdFx0dGhpcy5zdGF0ZS5jbGVhcigpO1xuXHR9XG59XG4iXX0=