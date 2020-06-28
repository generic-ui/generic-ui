/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RowSelectToggleType } from './row-select-toggle-type';
import { RowSelectionMode } from '../../../domain-api/row-selection';
export class FormationManager {
    /**
     * @param {?} selectedRows
     */
    constructor(selectedRows) {
        this.enabled = true;
        this.mode = RowSelectionMode.SINGLE;
        this.selectedRows = selectedRows;
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
     * @param {?} enabled
     * @return {?}
     */
    setSelection(enabled) {
        this.enabled = enabled;
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    setMode(mode) {
        this.mode = mode;
    }
    /**
     * @return {?}
     */
    getSelectedRows() {
        return Array.from(this.selectedRows);
    }
    /**
     * @param {?} allItemIds
     * @return {?}
     */
    selectAll(allItemIds) {
        this.selectedRows = new Set(allItemIds);
        this.allSelected = true;
        this.allUnselected = false;
    }
    /**
     * @return {?}
     */
    unselectAll() {
        this.selectedRows.clear();
        this.allSelected = false;
        this.allUnselected = true;
    }
    /**
     * @param {?} itemId
     * @param {?} type
     * @param {?} allItemIds
     * @return {?}
     */
    toggleRow(itemId, type, allItemIds) {
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
    }
    /**
     * @param {?} allItemIds
     * @return {?}
     */
    calculateAllSelected(allItemIds) {
        if (allItemIds.length !== this.selectedRows.size) {
            this.allSelected = false;
        }
        else {
            /** @type {?} */
            let rows = Array.from(this.selectedRows);
            /** @type {?} */
            let equal = true;
            rows.sort();
            allItemIds.sort();
            for (let i = 0; i < rows.length; i += 1) {
                if (rows[i] !== allItemIds[i]) {
                    equal = false;
                    break;
                }
            }
            this.allSelected = equal;
        }
    }
    /**
     * @return {?}
     */
    calculateAllUnselected() {
        this.allUnselected = this.selectedRows.size === 0;
    }
    /**
     * @param {?} itemId
     * @return {?}
     */
    unselectRow(itemId) {
        if (this.selectedRows.has(itemId)) {
            this.selectedRows.delete(itemId);
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLW1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvZG9tYWluL2Zvcm1hdGlvbi9jb3JlL2Zvcm1hdGlvbi1tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVyRSxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBWTVCLFlBQVksWUFBeUI7UUFWN0IsWUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixTQUFJLEdBQXFCLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztRQVN4RCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxPQUFnQjtRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxJQUFzQjtRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsVUFBeUI7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLEdBQUcsQ0FBUyxVQUFVLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxH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Qzs7Ozs7SUFFaEMsZ0NBQXlEOzs7OztJQUV6RCx3Q0FBa0M7Ozs7O0lBRWxDLHVDQUE2Qjs7Ozs7SUFFN0IseUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm93U2VsZWN0VG9nZ2xlVHlwZSB9IGZyb20gJy4vcm93LXNlbGVjdC10b2dnbGUtdHlwZSc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25Nb2RlIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9yb3ctc2VsZWN0aW9uJztcblxuZXhwb3J0IGNsYXNzIEZvcm1hdGlvbk1hbmFnZXIge1xuXG5cdHByaXZhdGUgZW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cblx0cHJpdmF0ZSBtb2RlOiBSb3dTZWxlY3Rpb25Nb2RlID0gUm93U2VsZWN0aW9uTW9kZS5TSU5HTEU7XG5cblx0cHJpdmF0ZSBzZWxlY3RlZFJvd3M6IFNldDxzdHJpbmc+O1xuXG5cdHByaXZhdGUgYWxsU2VsZWN0ZWQ6IGJvb2xlYW47XG5cblx0cHJpdmF0ZSBhbGxVbnNlbGVjdGVkOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKHNlbGVjdGVkUm93czogU2V0PHN0cmluZz4pIHtcblx0XHR0aGlzLnNlbGVjdGVkUm93cyA9IHNlbGVjdGVkUm93cztcblx0fVxuXG5cdGlzQWxsU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxsU2VsZWN0ZWQ7XG5cdH1cblxuXHRpc0FsbFVuc2VsZWN0ZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxsVW5zZWxlY3RlZDtcblx0fVxuXG5cdHNldFNlbGVjdGlvbihlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5lbmFibGVkID0gZW5hYmxlZDtcblx0fVxuXG5cdHNldE1vZGUobW9kZTogUm93U2VsZWN0aW9uTW9kZSk6IHZvaWQge1xuXHRcdHRoaXMubW9kZSA9IG1vZGU7XG5cdH1cblxuXHRnZXRTZWxlY3RlZFJvd3MoKTogQXJyYXk8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy5zZWxlY3RlZFJvd3MpO1xuXHR9XG5cblx0c2VsZWN0QWxsKGFsbEl0ZW1JZHM6IEFycmF5PHN0cmluZz4pOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdGVkUm93cyA9IG5ldyBTZXQ8c3RyaW5nPihhbGxJdGVtSWRzKTtcblx0XHR0aGlzLmFsbFNlbGVjdGVkID0gdHJ1ZTtcblx0XHR0aGlzLmFsbFVuc2VsZWN0ZWQgPSBmYWxzZTtcblx0fVxuXG5cdHVuc2VsZWN0QWxsKCk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRSb3dzLmNsZWFyKCk7XG5cdFx0dGhpcy5hbGxTZWxlY3RlZCA9IGZhbHNlO1xuXHRcdHRoaXMuYWxsVW5zZWxlY3RlZCA9IHRydWU7XG5cdH1cblxuXHR0b2dnbGVSb3coaXRlbUlkOiBzdHJpbmcsIHR5cGU6IFJvd1NlbGVjdFRvZ2dsZVR5cGUsIGFsbEl0ZW1JZHM6IEFycmF5PHN0cmluZz4pOiB2b2lkIHtcblxuXHRcdGlmICghdGhpcy5lbmFibGVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGUgPT09IFJvd1NlbGVjdFRvZ2dsZVR5cGUuQUREICYmIHRoaXMubW9kZSA9PT0gUm93U2VsZWN0aW9uTW9kZS5TSU5HTEUpIHtcblx0XHRcdHR5cGUgPSBSb3dTZWxlY3RUb2dnbGVUeXBlLk5PTkU7XG5cdFx0fVxuXG5cdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRjYXNlIFJvd1NlbGVjdFRvZ2dsZVR5cGUuTk9ORTpcblxuXHRcdFx0XHRpZiAodGhpcy5zZWxlY3RlZFJvd3MuaGFzKGl0ZW1JZCkpIHtcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkUm93cy5kZWxldGUoaXRlbUlkKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkUm93cy5jbGVhcigpO1xuXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRSb3dzLmFkZChpdGVtSWQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgUm93U2VsZWN0VG9nZ2xlVHlwZS5BREQ6XG5cblx0XHRcdFx0aWYgKHRoaXMuc2VsZWN0ZWRSb3dzLmhhcyhpdGVtSWQpKSB7XG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RlZFJvd3MuZGVsZXRlKGl0ZW1JZCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RlZFJvd3MuYWRkKGl0ZW1JZCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBSb3dTZWxlY3RUb2dnbGVUeXBlLlJBTkdFOlxuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHRoaXMuY2FsY3VsYXRlQWxsU2VsZWN0ZWQoYWxsSXRlbUlkcyk7XG5cdFx0dGhpcy5jYWxjdWxhdGVBbGxVbnNlbGVjdGVkKCk7XG5cdH1cblxuXHRjYWxjdWxhdGVBbGxTZWxlY3RlZChhbGxJdGVtSWRzOiBBcnJheTxzdHJpbmc+KTogdm9pZCB7XG5cdFx0aWYgKGFsbEl0ZW1JZHMubGVuZ3RoICE9PSB0aGlzLnNlbGVjdGVkUm93cy5zaXplKSB7XG5cdFx0XHR0aGlzLmFsbFNlbGVjdGVkID0gZmFsc2U7XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0bGV0IHJvd3MgPSBBcnJheS5mcm9tKHRoaXMuc2VsZWN0ZWRSb3dzKSxcblx0XHRcdFx0ZXF1YWwgPSB0cnVlO1xuXG5cdFx0XHRyb3dzLnNvcnQoKTtcblx0XHRcdGFsbEl0ZW1JZHMuc29ydCgpO1xuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKz0gMSkge1xuXHRcdFx0XHRpZiAocm93c1tpXSAhPT0gYWxsSXRlbUlkc1tpXSkge1xuXHRcdFx0XHRcdGVxdWFsID0gZmFsc2U7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5hbGxTZWxlY3RlZCA9IGVxdWFsO1xuXHRcdH1cblx0fVxuXG5cdGNhbGN1bGF0ZUFsbFVuc2VsZWN0ZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5hbGxVbnNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZFJvd3Muc2l6ZSA9PT0gMDtcblx0fVxuXG5cdHVuc2VsZWN0Um93KGl0ZW1JZDogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWRSb3dzLmhhcyhpdGVtSWQpKSB7XG5cdFx0XHR0aGlzLnNlbGVjdGVkUm93cy5kZWxldGUoaXRlbUlkKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==