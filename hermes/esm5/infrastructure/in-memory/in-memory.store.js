/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Optional } from '../../common/optional';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2luLW1lbW9yeS5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztBQUVqRDs7Ozs7SUFBQTtRQUVrQixVQUFLLEdBQW1CLElBQUksR0FBRyxFQUFFLENBQUM7SUFnQ3BELENBQUM7Ozs7O0lBOUJBLDJCQUFHOzs7O0lBQUgsVUFBSSxTQUFZO1FBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7O0lBRUQsK0JBQU87Ozs7SUFBUCxVQUFRLFVBQW9CO1FBQTVCLGlCQUlDO1FBSEEsVUFBVSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLFNBQVk7WUFDL0IsS0FBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyQixDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsMkJBQUc7Ozs7SUFBSCxVQUFJLFdBQWM7UUFDakIsT0FBTyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7OztJQUVELDhCQUFNOzs7SUFBTjtRQUNDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFFRCwyQkFBRzs7OztJQUFILFVBQUksV0FBYztRQUNqQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRUQsOEJBQU07Ozs7SUFBTixVQUFPLFdBQWM7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELDZCQUFLOzs7SUFBTDtRQUNDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVGLG9CQUFDO0FBQUQsQ0FBQyxBQWxDRCxJQWtDQzs7Ozs7Ozs7Ozs7SUFoQ0EsOEJBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJvb3QgfSBmcm9tICcuLi8uLi9kb21haW4vY29tbWFuZC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJvb3QnO1xuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuLi8uLi9jb21tb24vb3B0aW9uYWwnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSW5NZW1vcnlTdG9yZTxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIFMgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PEk+PiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdGF0ZTogTWFwPHN0cmluZywgUz4gPSBuZXcgTWFwKCk7XG5cblx0c2V0KGFnZ3JlZ2F0ZTogUyk6IHZvaWQge1xuXHRcdHRoaXMuc3RhdGUuc2V0KGFnZ3JlZ2F0ZS5nZXRJZCgpLnRvU3RyaW5nKCksIGFnZ3JlZ2F0ZSk7XG5cdH1cblxuXHRzZXRNYW55KGFnZ3JlZ2F0ZXM6IEFycmF5PFM+KTogdm9pZCB7XG5cdFx0YWdncmVnYXRlcy5mb3JFYWNoKChhZ2dyZWdhdGU6IFMpID0+IHtcblx0XHRcdHRoaXMuc2V0KGFnZ3JlZ2F0ZSk7XG5cdFx0fSk7XG5cdH1cblxuXHRnZXQoYWdncmVnYXRlSWQ6IEkpOiBPcHRpb25hbDxTPiB7XG5cdFx0cmV0dXJuIE9wdGlvbmFsLm9mKHRoaXMuc3RhdGUuZ2V0KGFnZ3JlZ2F0ZUlkLnRvU3RyaW5nKCkpKTtcblx0fVxuXG5cdGdldEFsbCgpOiBBcnJheTxTPiB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy5zdGF0ZS52YWx1ZXMoKSk7XG5cdH1cblxuXHRoYXMoYWdncmVnYXRlSWQ6IEkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5oYXMoYWdncmVnYXRlSWQudG9TdHJpbmcoKSk7XG5cdH1cblxuXHRkZWxldGUoYWdncmVnYXRlSWQ6IEkpOiB2b2lkIHtcblx0XHR0aGlzLnN0YXRlLmRlbGV0ZShhZ2dyZWdhdGVJZC50b1N0cmluZygpKTtcblx0fVxuXG5cdGNsZWFyKCk6IHZvaWQge1xuXHRcdHRoaXMuc3RhdGUuY2xlYXIoKTtcblx0fVxuXG59XG4iXX0=