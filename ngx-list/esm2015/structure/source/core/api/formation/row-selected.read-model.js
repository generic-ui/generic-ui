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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LXNlbGVjdGVkLnJlYWQtbW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL3Jvdy1zZWxlY3RlZC5yZWFkLW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLE9BQU8sb0JBQW9COzs7Ozs7SUFRaEMsWUFBWSxPQUFzQixFQUMvQixXQUFvQixFQUNwQixhQUFzQjtRQVJSLFlBQU8sR0FBa0IsSUFBSSxLQUFLLEVBQVUsQ0FBQztRQVM3RCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUNwQyxDQUFDOzs7O0lBRUQsTUFBTTtRQUNMLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxFQUFVO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRSxDQUFDLE1BQU0sS0FBSyxFQUFFLEVBQUMsQ0FBQztJQUM3RCxDQUFDOzs7O0lBR0QsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztJQUMxRCxDQUFDO0NBRUQ7Ozs7OztJQW5DQSx1Q0FBOEQ7Ozs7O0lBRTlELDJDQUFzQzs7Ozs7SUFFdEMsNkNBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFJvd1NlbGVjdGVkUmVhZE1vZGVsIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGl0ZW1JZHM6IEFycmF5PHN0cmluZz4gPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYWxsU2VsZWN0ZWQ6IGJvb2xlYW47XG5cblx0cHJpdmF0ZSByZWFkb25seSBhbGxVbnNlbGVjdGVkOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKGl0ZW1JZHM6IEFycmF5PHN0cmluZz4sXG5cdFx0XHRcdGFsbFNlbGVjdGVkOiBib29sZWFuLFxuXHRcdFx0XHRhbGxVbnNlbGVjdGVkOiBib29sZWFuKSB7XG5cdFx0dGhpcy5pdGVtSWRzID0gaXRlbUlkcztcblx0XHR0aGlzLmFsbFNlbGVjdGVkID0gYWxsU2VsZWN0ZWQ7XG5cdFx0dGhpcy5hbGxVbnNlbGVjdGVkID0gYWxsVW5zZWxlY3RlZDtcblx0fVxuXG5cdGdldEFsbCgpOiBBcnJheTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gdGhpcy5pdGVtSWRzO1xuXHR9XG5cblx0aXNTZWxlY3RlZChpZDogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaXRlbUlkcy5zb21lKChpdGVtSWQ6IHN0cmluZykgPT4gaXRlbUlkID09PSBpZCk7XG5cdH1cblxuXG5cdGlzQWxsU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxsU2VsZWN0ZWQ7XG5cdH1cblxuXHRpc0FsbFVuc2VsZWN0ZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxsVW5zZWxlY3RlZDtcblx0fVxuXG5cdGlzSW5kZXRlcm1pbmF0ZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gISh0aGlzLmlzQWxsU2VsZWN0ZWQoKSB8fCB0aGlzLmlzQWxsVW5zZWxlY3RlZCgpKTtcblx0fVxuXG59XG4iXX0=