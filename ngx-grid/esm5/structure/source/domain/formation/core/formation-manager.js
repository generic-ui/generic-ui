/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RowSelectToggleType } from './row-select-toggle-type';
import { RowSelectionMode } from '../../../domain-api/row-selection';
var FormationManager = /** @class */ (function () {
    function FormationManager(selectedRows) {
        this.enabled = true;
        this.mode = RowSelectionMode.SINGLE;
        this.selectedRows = selectedRows;
    }
    /**
     * @return {?}
     */
    FormationManager.prototype.isAllSelected = /**
     * @return {?}
     */
    function () {
        return this.allSelected;
    };
    /**
     * @return {?}
     */
    FormationManager.prototype.isAllUnselected = /**
     * @return {?}
     */
    function () {
        return this.allUnselected;
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    FormationManager.prototype.setSelection = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.enabled = enabled;
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    FormationManager.prototype.setMode = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        this.mode = mode;
    };
    /**
     * @return {?}
     */
    FormationManager.prototype.getSelectedRows = /**
     * @return {?}
     */
    function () {
        return Array.from(this.selectedRows);
    };
    /**
     * @param {?} allItemIds
     * @return {?}
     */
    FormationManager.prototype.selectAll = /**
     * @param {?} allItemIds
     * @return {?}
     */
    function (allItemIds) {
        this.selectedRows = new Set(allItemIds);
        this.allSelected = true;
        this.allUnselected = false;
    };
    /**
     * @return {?}
     */
    FormationManager.prototype.unselectAll = /**
     * @return {?}
     */
    function () {
        this.selectedRows.clear();
        this.allSelected = false;
        this.allUnselected = true;
    };
    /**
     * @param {?} itemId
     * @param {?} type
     * @param {?} allItemIds
     * @return {?}
     */
    FormationManager.prototype.toggleRow = /**
     * @param {?} itemId
     * @param {?} type
     * @param {?} allItemIds
     * @return {?}
     */
    function (itemId, type, allItemIds) {
        if (!this.enabled) {
            return;
        }
        if (type === RowSelectToggleType.ADD && this.mode === RowSelectionMode.SINGLE) {
            type = RowSelectToggleType.NONE;
        }
        switch (type) {
            case RowSelectToggleType.NONE:
                if (this.selectedRows.has(itemId)) {
                    this.selectedRows.delete(itemId);
                }
                else {
                    this.selectedRows.clear();
                    this.selectedRows.add(itemId);
                }
                break;
            case RowSelectToggleType.ADD:
                if (this.selectedRows.has(itemId)) {
                    this.selectedRows.delete(itemId);
                }
                else {
                    this.selectedRows.add(itemId);
                }
                break;
            case RowSelectToggleType.RANGE:
                break;
        }
        this.calculateAllSelected(allItemIds);
        this.calculateAllUnselected();
    };
    /**
     * @param {?} allItemIds
     * @return {?}
     */
    FormationManager.prototype.calculateAllSelected = /**
     * @param {?} allItemIds
     * @return {?}
     */
    function (allItemIds) {
        if (allItemIds.length !== this.selectedRows.size) {
            this.allSelected = false;
        }
        else {
            /** @type {?} */
            var rows = Array.from(this.selectedRows);
            /** @type {?} */
            var equal = true;
            rows.sort();
            allItemIds.sort();
            for (var i = 0; i < rows.length; i += 1) {
                if (rows[i] !== allItemIds[i]) {
                    equal = false;
                    break;
                }
            }
            this.allSelected = equal;
        }
    };
    /**
     * @return {?}
     */
    FormationManager.prototype.calculateAllUnselected = /**
     * @return {?}
     */
    function () {
        this.allUnselected = this.selectedRows.size === 0;
    };
    /**
     * @param {?} itemId
     * @return {?}
     */
    FormationManager.prototype.unselectRow = /**
     * @param {?} itemId
     * @return {?}
     */
    function (itemId) {
        if (this.selectedRows.has(itemId)) {
            this.selectedRows.delete(itemId);
        }
    };
    return FormationManager;
}());
export { FormationManager };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormationManager.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    FormationManager.prototype.mode;
    /**
     * @type {?}
     * @private
     */
    FormationManager.prototype.selectedRows;
    /**
     * @type {?}
     * @private
     */
    FormationManager.prototype.allSelected;
    /**
     * @type {?}
     * @private
     */
    FormationManager.prototype.allUnselected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLW1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvZG9tYWluL2Zvcm1hdGlvbi9jb3JlL2Zvcm1hdGlvbi1tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVyRTtJQVlDLDBCQUFZLFlBQXlCO1FBVjdCLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsU0FBSSxHQUFxQixnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7UUFTeEQsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELHdDQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsMENBQWU7OztJQUFmO1FBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsdUNBQVk7Ozs7SUFBWixVQUFhLE9BQWdCO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsa0NBQU87Ozs7SUFBUCxVQUFRLElBQXNCO1FBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCwwQ0FBZTs7O0lBQWY7UUFDQyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBRUQsb0NBQVM7Ozs7SUFBVCxVQUFVLFVBQXlCO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxHQUFHLENBQVMsVUFBVSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJ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QUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDakM7SUFDRixDQUFDO0lBQ0YsdUJBQUM7QUFBRCxDQUFDLEFBeEhELElBd0hDOzs7Ozs7O0lBdEhBLG1DQUFnQzs7Ozs7SUFFaEMsZ0NBQXlEOzs7OztJQUV6RCx3Q0FBa0M7Ozs7O0lBRWxDLHVDQUE2Qjs7Ozs7SUFFN0IseUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm93U2VsZWN0VG9nZ2xlVHlwZSB9IGZyb20gJy4vcm93LXNlbGVjdC10b2dnbGUtdHlwZSc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25Nb2RlIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9yb3ctc2VsZWN0aW9uJztcblxuZXhwb3J0IGNsYXNzIEZvcm1hdGlvbk1hbmFnZXIge1xuXG5cdHByaXZhdGUgZW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cblx0cHJpdmF0ZSBtb2RlOiBSb3dTZWxlY3Rpb25Nb2RlID0gUm93U2VsZWN0aW9uTW9kZS5TSU5HTEU7XG5cblx0cHJpdmF0ZSBzZWxlY3RlZFJvd3M6IFNldDxzdHJpbmc+O1xuXG5cdHByaXZhdGUgYWxsU2VsZWN0ZWQ6IGJvb2xlYW47XG5cblx0cHJpdmF0ZSBhbGxVbnNlbGVjdGVkOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKHNlbGVjdGVkUm93czogU2V0PHN0cmluZz4pIHtcblx0XHR0aGlzLnNlbGVjdGVkUm93cyA9IHNlbGVjdGVkUm93cztcblx0fVxuXG5cdGlzQWxsU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxsU2VsZWN0ZWQ7XG5cdH1cblxuXHRpc0FsbFVuc2VsZWN0ZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxsVW5zZWxlY3RlZDtcblx0fVxuXG5cdHNldFNlbGVjdGlvbihlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5lbmFibGVkID0gZW5hYmxlZDtcblx0fVxuXG5cdHNldE1vZGUobW9kZTogUm93U2VsZWN0aW9uTW9kZSk6IHZvaWQge1xuXHRcdHRoaXMubW9kZSA9IG1vZGU7XG5cdH1cblxuXHRnZXRTZWxlY3RlZFJvd3MoKTogQXJyYXk8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy5zZWxlY3RlZFJvd3MpO1xuXHR9XG5cblx0c2VsZWN0QWxsKGFsbEl0ZW1JZHM6IEFycmF5PHN0cmluZz4pOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdGVkUm93cyA9IG5ldyBTZXQ8c3RyaW5nPihhbGxJdGVtSWRzKTtcblx0XHR0aGlzLmFsbFNlbGVjdGVkID0gdHJ1ZTtcblx0XHR0aGlzLmFsbFVuc2VsZWN0ZWQgPSBmYWxzZTtcblx0fVxuXG5cdHVuc2VsZWN0QWxsKCk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRSb3dzLmNsZWFyKCk7XG5cdFx0dGhpcy5hbGxTZWxlY3RlZCA9IGZhbHNlO1xuXHRcdHRoaXMuYWxsVW5zZWxlY3RlZCA9IHRydWU7XG5cdH1cblxuXHR0b2dnbGVSb3coaXRlbUlkOiBzdHJpbmcsIHR5cGU6IFJvd1NlbGVjdFRvZ2dsZVR5cGUsIGFsbEl0ZW1JZHM6IEFycmF5PHN0cmluZz4pOiB2b2lkIHtcblxuXHRcdGlmICghdGhpcy5lbmFibGVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGUgPT09IFJvd1NlbGVjdFRvZ2dsZVR5cGUuQUREICYmIHRoaXMubW9kZSA9PT0gUm93U2VsZWN0aW9uTW9kZS5TSU5HTEUpIHtcblx0XHRcdHR5cGUgPSBSb3dTZWxlY3RUb2dnbGVUeXBlLk5PTkU7XG5cdFx0fVxuXG5cdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRjYXNlIFJvd1NlbGVjdFRvZ2dsZVR5cGUuTk9ORTpcblxuXHRcdFx0XHRpZiAodGhpcy5zZWxlY3RlZFJvd3MuaGFzKGl0ZW1JZCkpIHtcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkUm93cy5kZWxldGUoaXRlbUlkKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkUm93cy5jbGVhcigpO1xuXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRSb3dzLmFkZChpdGVtSWQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgUm93U2VsZWN0VG9nZ2xlVHlwZS5BREQ6XG5cblx0XHRcdFx0aWYgKHRoaXMuc2VsZWN0ZWRSb3dzLmhhcyhpdGVtSWQpKSB7XG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RlZFJvd3MuZGVsZXRlKGl0ZW1JZCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RlZFJvd3MuYWRkKGl0ZW1JZCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBSb3dTZWxlY3RUb2dnbGVUeXBlLlJBTkdFOlxuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHRoaXMuY2FsY3VsYXRlQWxsU2VsZWN0ZWQoYWxsSXRlbUlkcyk7XG5cdFx0dGhpcy5jYWxjdWxhdGVBbGxVbnNlbGVjdGVkKCk7XG5cdH1cblxuXHRjYWxjdWxhdGVBbGxTZWxlY3RlZChhbGxJdGVtSWRzOiBBcnJheTxzdHJpbmc+KTogdm9pZCB7XG5cdFx0aWYgKGFsbEl0ZW1JZHMubGVuZ3RoICE9PSB0aGlzLnNlbGVjdGVkUm93cy5zaXplKSB7XG5cdFx0XHR0aGlzLmFsbFNlbGVjdGVkID0gZmFsc2U7XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0bGV0IHJvd3MgPSBBcnJheS5mcm9tKHRoaXMuc2VsZWN0ZWRSb3dzKSxcblx0XHRcdFx0ZXF1YWwgPSB0cnVlO1xuXG5cdFx0XHRyb3dzLnNvcnQoKTtcblx0XHRcdGFsbEl0ZW1JZHMuc29ydCgpO1xuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKz0gMSkge1xuXHRcdFx0XHRpZiAocm93c1tpXSAhPT0gYWxsSXRlbUlkc1tpXSkge1xuXHRcdFx0XHRcdGVxdWFsID0gZmFsc2U7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5hbGxTZWxlY3RlZCA9IGVxdWFsO1xuXHRcdH1cblx0fVxuXG5cdGNhbGN1bGF0ZUFsbFVuc2VsZWN0ZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5hbGxVbnNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZFJvd3Muc2l6ZSA9PT0gMDtcblx0fVxuXG5cdHVuc2VsZWN0Um93KGl0ZW1JZDogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWRSb3dzLmhhcyhpdGVtSWQpKSB7XG5cdFx0XHR0aGlzLnNlbGVjdGVkUm93cy5kZWxldGUoaXRlbUlkKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==