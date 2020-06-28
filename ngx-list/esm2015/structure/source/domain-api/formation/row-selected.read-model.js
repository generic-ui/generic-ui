/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class RowSelectedReadModel {
    /**
     * @param {?} itemIds
     * @param {?} allSelected
     * @param {?} allUnselected
     */
    constructor(itemIds, allSelected, allUnselected) {
        this.itemIds = new Array();
        this.itemIds = itemIds;
        this.allSelected = allSelected;
        this.allUnselected = allUnselected;
    }
    /**
     * @return {?}
     */
    getAll() {
        return this.itemIds;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    isSelected(id) {
        return this.itemIds.some((/**
         * @param {?} itemId
         * @return {?}
         */
        (itemId) => itemId === id));
    }
    /**
     * @return {?}
     */
    isAllSelected() {
        return this.allSelected;
    }
    /**
     * @return {?}
     */
    isAllUnselected() {
        return this.allUnselected;
    }
    /**
     * @return {?}
     */
    isIndeterminate() {
        return !(this.isAllSelected() || this.isAllUnselected());
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LXNlbGVjdGVkLnJlYWQtbW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvZG9tYWluLWFwaS9mb3JtYXRpb24vcm93LXNlbGVjdGVkLnJlYWQtbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE1BQU0sT0FBTyxvQkFBb0I7Ozs7OztJQVFoQyxZQUFZLE9BQXNCLEVBQy9CLFdBQW9CLEVBQ3BCLGFBQXNCO1FBUlIsWUFBTyxHQUFrQixJQUFJLEtBQUssRUFBVSxDQUFDO1FBUzdELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0wsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEVBQVU7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7Ozs7UUFBQyxDQUFDLE1BQWMsRUFBRSxFQUFFLENBQUMsTUFBTSxLQUFLLEVBQUUsRUFBQyxDQUFDO0lBQzdELENBQUM7Ozs7SUFHRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUM7Q0FFRDs7Ozs7O0lBbkNBLHVDQUE4RDs7Ozs7SUFFOUQsMkNBQXNDOzs7OztJQUV0Qyw2Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZmllbGQuaWQnO1xuXG5leHBvcnQgY2xhc3MgUm93U2VsZWN0ZWRSZWFkTW9kZWwge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgaXRlbUlkczogQXJyYXk8c3RyaW5nPiA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBhbGxTZWxlY3RlZDogYm9vbGVhbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGFsbFVuc2VsZWN0ZWQ6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IoaXRlbUlkczogQXJyYXk8c3RyaW5nPixcblx0XHRcdFx0YWxsU2VsZWN0ZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdGFsbFVuc2VsZWN0ZWQ6IGJvb2xlYW4pIHtcblx0XHR0aGlzLml0ZW1JZHMgPSBpdGVtSWRzO1xuXHRcdHRoaXMuYWxsU2VsZWN0ZWQgPSBhbGxTZWxlY3RlZDtcblx0XHR0aGlzLmFsbFVuc2VsZWN0ZWQgPSBhbGxVbnNlbGVjdGVkO1xuXHR9XG5cblx0Z2V0QWxsKCk6IEFycmF5PHN0cmluZz4ge1xuXHRcdHJldHVybiB0aGlzLml0ZW1JZHM7XG5cdH1cblxuXHRpc1NlbGVjdGVkKGlkOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pdGVtSWRzLnNvbWUoKGl0ZW1JZDogc3RyaW5nKSA9PiBpdGVtSWQgPT09IGlkKTtcblx0fVxuXG5cblx0aXNBbGxTZWxlY3RlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hbGxTZWxlY3RlZDtcblx0fVxuXG5cdGlzQWxsVW5zZWxlY3RlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hbGxVbnNlbGVjdGVkO1xuXHR9XG5cblx0aXNJbmRldGVybWluYXRlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhKHRoaXMuaXNBbGxTZWxlY3RlZCgpIHx8IHRoaXMuaXNBbGxVbnNlbGVjdGVkKCkpO1xuXHR9XG5cbn1cbiJdfQ==