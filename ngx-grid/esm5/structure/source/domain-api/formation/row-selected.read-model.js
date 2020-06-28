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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LXNlbGVjdGVkLnJlYWQtbW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvZG9tYWluLWFwaS9mb3JtYXRpb24vcm93LXNlbGVjdGVkLnJlYWQtbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBO0lBUUMsOEJBQVksT0FBc0IsRUFDL0IsV0FBb0IsRUFDcEIsYUFBc0I7UUFSUixZQUFPLEdBQWtCLElBQUksS0FBSyxFQUFVLENBQUM7UUFTN0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVELHFDQUFNOzs7SUFBTjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELHlDQUFVOzs7O0lBQVYsVUFBVyxFQUFVO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQyxNQUFjLElBQUssT0FBQSxNQUFNLEtBQUssRUFBRSxFQUFiLENBQWEsRUFBQyxDQUFDO0lBQzdELENBQUM7Ozs7SUFHRCw0Q0FBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELDhDQUFlOzs7SUFBZjtRQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsOENBQWU7OztJQUFmO1FBQ0MsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRiwyQkFBQztBQUFELENBQUMsQUFyQ0QsSUFxQ0M7Ozs7Ozs7SUFuQ0EsdUNBQThEOzs7OztJQUU5RCwyQ0FBc0M7Ozs7O0lBRXRDLDZDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9kb21haW4vY29yZS9maWVsZC9maWVsZC5pZCc7XG5cbmV4cG9ydCBjbGFzcyBSb3dTZWxlY3RlZFJlYWRNb2RlbCB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBpdGVtSWRzOiBBcnJheTxzdHJpbmc+ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGFsbFNlbGVjdGVkOiBib29sZWFuO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYWxsVW5zZWxlY3RlZDogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihpdGVtSWRzOiBBcnJheTxzdHJpbmc+LFxuXHRcdFx0XHRhbGxTZWxlY3RlZDogYm9vbGVhbixcblx0XHRcdFx0YWxsVW5zZWxlY3RlZDogYm9vbGVhbikge1xuXHRcdHRoaXMuaXRlbUlkcyA9IGl0ZW1JZHM7XG5cdFx0dGhpcy5hbGxTZWxlY3RlZCA9IGFsbFNlbGVjdGVkO1xuXHRcdHRoaXMuYWxsVW5zZWxlY3RlZCA9IGFsbFVuc2VsZWN0ZWQ7XG5cdH1cblxuXHRnZXRBbGwoKTogQXJyYXk8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIHRoaXMuaXRlbUlkcztcblx0fVxuXG5cdGlzU2VsZWN0ZWQoaWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLml0ZW1JZHMuc29tZSgoaXRlbUlkOiBzdHJpbmcpID0+IGl0ZW1JZCA9PT0gaWQpO1xuXHR9XG5cblxuXHRpc0FsbFNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsbFNlbGVjdGVkO1xuXHR9XG5cblx0aXNBbGxVbnNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsbFVuc2VsZWN0ZWQ7XG5cdH1cblxuXHRpc0luZGV0ZXJtaW5hdGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICEodGhpcy5pc0FsbFNlbGVjdGVkKCkgfHwgdGhpcy5pc0FsbFVuc2VsZWN0ZWQoKSk7XG5cdH1cblxufVxuIl19