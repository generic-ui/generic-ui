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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC1zdGF0ZS5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvcmUvaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdC9wZXJzaXN0LXN0YXRlLnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7O0FBS3BEOzs7OztJQUFBO1FBRWtCLFVBQUssR0FBbUIsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQXVCcEQsQ0FBQzs7Ozs7SUFyQkEsK0JBQUc7Ozs7SUFBSCxVQUFJLE1BQVM7UUFDWixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFFRCxtQ0FBTzs7OztJQUFQLFVBQVEsT0FBaUI7UUFBekIsaUJBSUM7UUFIQSxPQUFPLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsTUFBUztZQUN6QixLQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xCLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCwrQkFBRzs7OztJQUFILFVBQUksV0FBd0I7UUFDM0IsT0FBTyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7OztJQUVELGtDQUFNOzs7SUFBTjtRQUNDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELGlDQUFLOzs7SUFBTDtRQUNDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNGLHdCQUFDO0FBQUQsQ0FBQyxBQXpCRCxJQXlCQzs7Ozs7Ozs7Ozs7SUF2QkEsa0NBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGVyc2lzdEFuZW1pYSB9IGZyb20gJy4vcGVyc2lzdC1hbmVtaWEnO1xuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vb3B0aW9uYWwnO1xuaW1wb3J0IHsgUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vYXBpL3JlYWQvcmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQZXJzaXN0U3RhdGVTdG9yZTxJIGV4dGVuZHMgUmVhZE1vZGVsUm9vdElkLCBBIGV4dGVuZHMgUGVyc2lzdEFuZW1pYTxJPj4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RhdGU6IE1hcDxzdHJpbmcsIEE+ID0gbmV3IE1hcCgpO1xuXG5cdHNldChhbmVtaWE6IEEpOiB2b2lkIHtcblx0XHR0aGlzLnN0YXRlLnNldChhbmVtaWEuZ2V0SWQoKSwgYW5lbWlhKTtcblx0fVxuXG5cdHNldE1hbnkoYW5lbWlhczogQXJyYXk8QT4pOiB2b2lkIHtcblx0XHRhbmVtaWFzLmZvckVhY2goKGFuZW1pYTogQSkgPT4ge1xuXHRcdFx0dGhpcy5zZXQoYW5lbWlhKTtcblx0XHR9KTtcblx0fVxuXG5cdGdldChhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBPcHRpb25hbDxBPiB7XG5cdFx0cmV0dXJuIE9wdGlvbmFsLm9mKHRoaXMuc3RhdGUuZ2V0KGFnZ3JlZ2F0ZUlkLnRvU3RyaW5nKCkpKTtcblx0fVxuXG5cdGdldEFsbCgpOiBBcnJheTxBPiB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy5zdGF0ZS52YWx1ZXMoKSk7XG5cdH1cblxuXHRjbGVhcigpOiB2b2lkIHtcblx0XHR0aGlzLnN0YXRlLmNsZWFyKCk7XG5cdH1cbn1cbiJdfQ==