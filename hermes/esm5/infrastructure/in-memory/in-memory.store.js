/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Optional } from '../../common/optional';
/**
 * @abstract
 * @template S
 */
var /**
 * @abstract
 * @template S
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
 * @template S
 */
export { InMemoryStore };
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryStore.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2luLW1lbW9yeS5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztBQUVqRDs7Ozs7SUFBQTtRQUVrQixVQUFLLEdBQW1CLElBQUksR0FBRyxFQUFFLENBQUM7SUFnQ3BELENBQUM7Ozs7O0lBOUJBLDJCQUFHOzs7O0lBQUgsVUFBSSxTQUFZO1FBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7O0lBRUQsK0JBQU87Ozs7SUFBUCxVQUFRLFVBQW9CO1FBQTVCLGlCQUlDO1FBSEEsVUFBVSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLFNBQVk7WUFDL0IsS0FBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyQixDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsMkJBQUc7Ozs7SUFBSCxVQUFJLFdBQXdCO1FBQzNCLE9BQU8sUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7SUFFRCw4QkFBTTs7O0lBQU47UUFDQyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRUQsMkJBQUc7Ozs7SUFBSCxVQUFJLFdBQXdCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFRCw4QkFBTTs7OztJQUFOLFVBQU8sV0FBd0I7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELDZCQUFLOzs7SUFBTDtRQUNDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVGLG9CQUFDO0FBQUQsQ0FBQyxBQWxDRCxJQWtDQzs7Ozs7Ozs7Ozs7SUFoQ0EsOEJBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb21tYW5kL2FnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4uLy4uL2NvbW1vbi9vcHRpb25hbCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJbk1lbW9yeVN0b3JlPFMgZXh0ZW5kcyBBZ2dyZWdhdGU+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0YXRlOiBNYXA8c3RyaW5nLCBTPiA9IG5ldyBNYXAoKTtcblxuXHRzZXQoYWdncmVnYXRlOiBTKTogdm9pZCB7XG5cdFx0dGhpcy5zdGF0ZS5zZXQoYWdncmVnYXRlLmdldElkKCkudG9TdHJpbmcoKSwgYWdncmVnYXRlKTtcblx0fVxuXG5cdHNldE1hbnkoYWdncmVnYXRlczogQXJyYXk8Uz4pOiB2b2lkIHtcblx0XHRhZ2dyZWdhdGVzLmZvckVhY2goKGFnZ3JlZ2F0ZTogUykgPT4ge1xuXHRcdFx0dGhpcy5zZXQoYWdncmVnYXRlKTtcblx0XHR9KTtcblx0fVxuXG5cdGdldChhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBPcHRpb25hbDxTPiB7XG5cdFx0cmV0dXJuIE9wdGlvbmFsLm9mKHRoaXMuc3RhdGUuZ2V0KGFnZ3JlZ2F0ZUlkLnRvU3RyaW5nKCkpKTtcblx0fVxuXG5cdGdldEFsbCgpOiBBcnJheTxTPiB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy5zdGF0ZS52YWx1ZXMoKSk7XG5cdH1cblxuXHRoYXMoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUuaGFzKGFnZ3JlZ2F0ZUlkLnRvU3RyaW5nKCkpO1xuXHR9XG5cblx0ZGVsZXRlKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IHZvaWQge1xuXHRcdHRoaXMuc3RhdGUuZGVsZXRlKGFnZ3JlZ2F0ZUlkLnRvU3RyaW5nKCkpO1xuXHR9XG5cblx0Y2xlYXIoKTogdm9pZCB7XG5cdFx0dGhpcy5zdGF0ZS5jbGVhcigpO1xuXHR9XG5cbn1cbiJdfQ==