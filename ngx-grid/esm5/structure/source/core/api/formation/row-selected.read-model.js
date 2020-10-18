/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RowSelectedReadModel = /** @class */ (function () {
    function RowSelectedReadModel(itemIds, allSelected, allUnselected) {
        this.itemIds = new Array();
        this.itemIds = itemIds;
        this.allSelected = allSelected;
        this.allUnselected = allUnselected;
    }
    /**
     * @return {?}
     */
    RowSelectedReadModel.prototype.getAll = /**
     * @return {?}
     */
    function () {
        return this.itemIds;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    RowSelectedReadModel.prototype.isSelected = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.itemIds.some((/**
         * @param {?} itemId
         * @return {?}
         */
        function (itemId) { return itemId === id; }));
    };
    /**
     * @return {?}
     */
    RowSelectedReadModel.prototype.isAllSelected = /**
     * @return {?}
     */
    function () {
        return this.allSelected;
    };
    /**
     * @return {?}
     */
    RowSelectedReadModel.prototype.isAllUnselected = /**
     * @return {?}
     */
    function () {
        return this.allUnselected;
    };
    /**
     * @return {?}
     */
    RowSelectedReadModel.prototype.isIndeterminate = /**
     * @return {?}
     */
    function () {
        return !(this.isAllSelected() || this.isAllUnselected());
    };
    return RowSelectedReadModel;
}());
export { RowSelectedReadModel };
if (false) {
    /**
     * @type {?}
     * @private
     */
    RowSelectedReadModel.prototype.itemIds;
    /**
     * @type {?}
     * @private
     */
    RowSelectedReadModel.prototype.allSelected;
    /**
     * @type {?}
     * @private
     */
    RowSelectedReadModel.prototype.allUnselected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LXNlbGVjdGVkLnJlYWQtbW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL3Jvdy1zZWxlY3RlZC5yZWFkLW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtJQVFDLDhCQUFZLE9BQXNCLEVBQy9CLFdBQW9CLEVBQ3BCLGFBQXNCO1FBUlIsWUFBTyxHQUFrQixJQUFJLEtBQUssRUFBVSxDQUFDO1FBUzdELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFRCxxQ0FBTTs7O0lBQU47UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCx5Q0FBVTs7OztJQUFWLFVBQVcsRUFBVTtRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTs7OztRQUFDLFVBQUMsTUFBYyxJQUFLLE9BQUEsTUFBTSxLQUFLLEVBQUUsRUFBYixDQUFhLEVBQUMsQ0FBQztJQUM3RCxDQUFDOzs7O0lBR0QsNENBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCw4Q0FBZTs7O0lBQWY7UUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELDhDQUFlOzs7SUFBZjtRQUNDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUYsMkJBQUM7QUFBRCxDQUFDLEFBckNELElBcUNDOzs7Ozs7O0lBbkNBLHVDQUE4RDs7Ozs7SUFFOUQsMkNBQXNDOzs7OztJQUV0Qyw2Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUm93U2VsZWN0ZWRSZWFkTW9kZWwge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgaXRlbUlkczogQXJyYXk8c3RyaW5nPiA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBhbGxTZWxlY3RlZDogYm9vbGVhbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGFsbFVuc2VsZWN0ZWQ6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IoaXRlbUlkczogQXJyYXk8c3RyaW5nPixcblx0XHRcdFx0YWxsU2VsZWN0ZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdGFsbFVuc2VsZWN0ZWQ6IGJvb2xlYW4pIHtcblx0XHR0aGlzLml0ZW1JZHMgPSBpdGVtSWRzO1xuXHRcdHRoaXMuYWxsU2VsZWN0ZWQgPSBhbGxTZWxlY3RlZDtcblx0XHR0aGlzLmFsbFVuc2VsZWN0ZWQgPSBhbGxVbnNlbGVjdGVkO1xuXHR9XG5cblx0Z2V0QWxsKCk6IEFycmF5PHN0cmluZz4ge1xuXHRcdHJldHVybiB0aGlzLml0ZW1JZHM7XG5cdH1cblxuXHRpc1NlbGVjdGVkKGlkOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pdGVtSWRzLnNvbWUoKGl0ZW1JZDogc3RyaW5nKSA9PiBpdGVtSWQgPT09IGlkKTtcblx0fVxuXG5cblx0aXNBbGxTZWxlY3RlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hbGxTZWxlY3RlZDtcblx0fVxuXG5cdGlzQWxsVW5zZWxlY3RlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hbGxVbnNlbGVjdGVkO1xuXHR9XG5cblx0aXNJbmRldGVybWluYXRlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhKHRoaXMuaXNBbGxTZWxlY3RlZCgpIHx8IHRoaXMuaXNBbGxVbnNlbGVjdGVkKCkpO1xuXHR9XG5cbn1cbiJdfQ==