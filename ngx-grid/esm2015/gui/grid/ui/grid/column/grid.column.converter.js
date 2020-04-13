/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GridColumnTypeConverter } from './grid.column-type.converter';
import { GridColumnSummariesConverter } from './summaries/grid.column-summaries.converter';
import { GridColumnViewConverter } from './grid.column-view.converter';
import { GridColumnSortingConverter } from './sorting/grid.column-sorting.converter';
import { GridColumnCellEditingConverter } from './cell-editing/grid.column-cell-editing.converter';
import { GridColumnAlignConverter } from './align/grid.column-align.converter';
export class GridColumnConverter {
    constructor() {
        this.columnTypeConverter = new GridColumnTypeConverter();
        this.columnSummariesConverter = new GridColumnSummariesConverter();
        this.columnViewConverter = new GridColumnViewConverter();
        this.columnSortingConverter = new GridColumnSortingConverter();
        this.columnCellEditingConverter = new GridColumnCellEditingConverter();
        this.columnAlignConverter = new GridColumnAlignConverter();
    }
    /**
     * @param {?} config
     * @return {?}
     */
    convert(config) {
        return config.map((/**
         * @param {?} c
         * @return {?}
         */
        (c) => this.convertColumn(c)));
    }
    /**
     * @private
     * @param {?} guiColumn
     * @return {?}
     */
    convertColumn(guiColumn) {
        /** @type {?} */
        let columnConfig = {};
        if (guiColumn.type !== undefined && guiColumn.type !== null) {
            columnConfig.type = this.columnTypeConverter.convertType(guiColumn.type);
        }
        if (guiColumn.header !== undefined && guiColumn.header !== null) {
            columnConfig.header = guiColumn.header;
        }
        if (guiColumn.enabled !== undefined && guiColumn.enabled !== null) {
            columnConfig.enabled = guiColumn.enabled;
        }
        if (guiColumn.field !== undefined && guiColumn.field !== null) {
            columnConfig.field = guiColumn.field;
        }
        if (guiColumn.width !== undefined && guiColumn.width !== null) {
            columnConfig.width = guiColumn.width;
        }
        if (guiColumn.align !== undefined && guiColumn.align !== null) {
            columnConfig.align = this.columnAlignConverter.convert(guiColumn.align);
        }
        if (guiColumn.view !== undefined && guiColumn.view !== null) {
            columnConfig.view = this.columnViewConverter.convert(guiColumn.view);
        }
        if (guiColumn.summaries !== undefined && guiColumn.summaries !== null) {
            columnConfig.summaries = this.columnSummariesConverter.convert(guiColumn.summaries);
        }
        if (guiColumn.sorting !== undefined && guiColumn.sorting !== null) {
            columnConfig.sorting = this.columnSortingConverter.convert(guiColumn.sorting);
        }
        if (guiColumn.cellEditing !== undefined && guiColumn.cellEditing !== null) {
            columnConfig.cellEditing = this.columnCellEditingConverter.convert(guiColumn.cellEditing);
        }
        if (guiColumn.matcher !== undefined && guiColumn.matcher !== null) {
            columnConfig.matcher = guiColumn.matcher;
        }
        return columnConfig;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    GridColumnConverter.prototype.columnTypeConverter;
    /**
     * @type {?}
     * @private
     */
    GridColumnConverter.prototype.columnSummariesConverter;
    /**
     * @type {?}
     * @private
     */
    GridColumnConverter.prototype.columnViewConverter;
    /**
     * @type {?}
     * @private
     */
    GridColumnConverter.prototype.columnSortingConverter;
    /**
     * @type {?}
     * @private
     */
    GridColumnConverter.prototype.columnCellEditingConverter;
    /**
     * @type {?}
     * @private
     */
    GridColumnConverter.prototype.columnAlignConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb2x1bW4uY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC91aS9ncmlkL2NvbHVtbi9ncmlkLmNvbHVtbi5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzNGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ25HLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRy9FLE1BQU0sT0FBTyxtQkFBbUI7SUFBaEM7UUFFa0Isd0JBQW1CLEdBQUcsSUFBSSx1QkFBdUIsRUFBRSxDQUFDO1FBRXBELDZCQUF3QixHQUFHLElBQUksNEJBQTRCLEVBQUUsQ0FBQztRQUU5RCx3QkFBbUIsR0FBRyxJQUFJLHVCQUF1QixFQUFFLENBQUM7UUFFcEQsMkJBQXNCLEdBQUcsSUFBSSwwQkFBMEIsRUFBRSxDQUFDO1FBRTFELCtCQUEwQixHQUFHLElBQUksOEJBQThCLEVBQUUsQ0FBQztRQUVsRSx5QkFBb0IsR0FBRyxJQUFJLHdCQUF3QixFQUFFLENBQUM7SUF3RHhFLENBQUM7Ozs7O0lBdERBLE9BQU8sQ0FBQyxNQUF3QjtRQUMvQixPQUFPLE1BQU0sQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUNqRCxDQUFDOzs7Ozs7SUFFTyxhQUFhLENBQUMsU0FBb0I7O1lBQ3JDLFlBQVksR0FBaUIsRUFBRTtRQUVuQyxJQUFJLFNBQVMsQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQzVELFlBQVksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekU7UUFFRCxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ2hFLFlBQVksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztTQUN2QztRQUVELElBQUksU0FBUyxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDbEUsWUFBWSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDO1NBQ3pDO1FBRUQsSUFBSSxTQUFTLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtZQUM5RCxZQUFZLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7U0FDckM7UUFFRCxJQUFJLFNBQVMsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQzlELFlBQVksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztTQUNyQztRQUVELElBQUksU0FBUyxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDOUQsWUFBWSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4RTtRQUVELElBQUksU0FBUyxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDNUQsWUFBWSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNyRTtRQUVELElBQUksU0FBUyxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDdEUsWUFBWSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNwRjtRQUVELElBQUksU0FBUyxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDbEUsWUFBWSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM5RTtRQUVELElBQUksU0FBUyxDQUFDLFdBQVcsS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLFdBQVcsS0FBSyxJQUFJLEVBQUU7WUFDMUUsWUFBWSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMxRjtRQUVELElBQUksU0FBUyxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDbEUsWUFBWSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDO1NBQ3pDO1FBRUQsT0FBTyxZQUFZLENBQUM7SUFDckIsQ0FBQztDQUVEOzs7Ozs7SUFsRUEsa0RBQXFFOzs7OztJQUVyRSx1REFBK0U7Ozs7O0lBRS9FLGtEQUFxRTs7Ozs7SUFFckUscURBQTJFOzs7OztJQUUzRSx5REFBbUY7Ozs7O0lBRW5GLG1EQUF1RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEd1aUNvbHVtbiB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9ncmlkLmFwaSc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9jb2x1bW4uY29uZmlnJztcblxuaW1wb3J0IHsgR3JpZENvbHVtblR5cGVDb252ZXJ0ZXIgfSBmcm9tICcuL2dyaWQuY29sdW1uLXR5cGUuY29udmVydGVyJztcbmltcG9ydCB7IEdyaWRDb2x1bW5TdW1tYXJpZXNDb252ZXJ0ZXIgfSBmcm9tICcuL3N1bW1hcmllcy9ncmlkLmNvbHVtbi1zdW1tYXJpZXMuY29udmVydGVyJztcbmltcG9ydCB7IEdyaWRDb2x1bW5WaWV3Q29udmVydGVyIH0gZnJvbSAnLi9ncmlkLmNvbHVtbi12aWV3LmNvbnZlcnRlcic7XG5pbXBvcnQgeyBHcmlkQ29sdW1uU29ydGluZ0NvbnZlcnRlciB9IGZyb20gJy4vc29ydGluZy9ncmlkLmNvbHVtbi1zb3J0aW5nLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBHcmlkQ29sdW1uQ2VsbEVkaXRpbmdDb252ZXJ0ZXIgfSBmcm9tICcuL2NlbGwtZWRpdGluZy9ncmlkLmNvbHVtbi1jZWxsLWVkaXRpbmcuY29udmVydGVyJztcbmltcG9ydCB7IEdyaWRDb2x1bW5BbGlnbkNvbnZlcnRlciB9IGZyb20gJy4vYWxpZ24vZ3JpZC5jb2x1bW4tYWxpZ24uY29udmVydGVyJztcblxuXG5leHBvcnQgY2xhc3MgR3JpZENvbHVtbkNvbnZlcnRlciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5UeXBlQ29udmVydGVyID0gbmV3IEdyaWRDb2x1bW5UeXBlQ29udmVydGVyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5TdW1tYXJpZXNDb252ZXJ0ZXIgPSBuZXcgR3JpZENvbHVtblN1bW1hcmllc0NvbnZlcnRlcigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uVmlld0NvbnZlcnRlciA9IG5ldyBHcmlkQ29sdW1uVmlld0NvbnZlcnRlcigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uU29ydGluZ0NvbnZlcnRlciA9IG5ldyBHcmlkQ29sdW1uU29ydGluZ0NvbnZlcnRlcigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uQ2VsbEVkaXRpbmdDb252ZXJ0ZXIgPSBuZXcgR3JpZENvbHVtbkNlbGxFZGl0aW5nQ29udmVydGVyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5BbGlnbkNvbnZlcnRlciA9IG5ldyBHcmlkQ29sdW1uQWxpZ25Db252ZXJ0ZXIoKTtcblxuXHRjb252ZXJ0KGNvbmZpZzogQXJyYXk8R3VpQ29sdW1uPik6IEFycmF5PENvbHVtbkNvbmZpZz4ge1xuXHRcdHJldHVybiBjb25maWcubWFwKChjKSA9PiB0aGlzLmNvbnZlcnRDb2x1bW4oYykpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0Q29sdW1uKGd1aUNvbHVtbjogR3VpQ29sdW1uKTogQ29sdW1uQ29uZmlnIHtcblx0XHRsZXQgY29sdW1uQ29uZmlnOiBDb2x1bW5Db25maWcgPSB7fTtcblxuXHRcdGlmIChndWlDb2x1bW4udHlwZSAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi50eXBlICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcudHlwZSA9IHRoaXMuY29sdW1uVHlwZUNvbnZlcnRlci5jb252ZXJ0VHlwZShndWlDb2x1bW4udHlwZSk7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi5oZWFkZXIgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uaGVhZGVyICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcuaGVhZGVyID0gZ3VpQ29sdW1uLmhlYWRlcjtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLmVuYWJsZWQgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uZW5hYmxlZCAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLmVuYWJsZWQgPSBndWlDb2x1bW4uZW5hYmxlZDtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLmZpZWxkICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLmZpZWxkICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcuZmllbGQgPSBndWlDb2x1bW4uZmllbGQ7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi53aWR0aCAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi53aWR0aCAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLndpZHRoID0gZ3VpQ29sdW1uLndpZHRoO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4uYWxpZ24gIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uYWxpZ24gIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5hbGlnbiA9IHRoaXMuY29sdW1uQWxpZ25Db252ZXJ0ZXIuY29udmVydChndWlDb2x1bW4uYWxpZ24pO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4udmlldyAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi52aWV3ICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcudmlldyA9IHRoaXMuY29sdW1uVmlld0NvbnZlcnRlci5jb252ZXJ0KGd1aUNvbHVtbi52aWV3KTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLnN1bW1hcmllcyAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5zdW1tYXJpZXMgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5zdW1tYXJpZXMgPSB0aGlzLmNvbHVtblN1bW1hcmllc0NvbnZlcnRlci5jb252ZXJ0KGd1aUNvbHVtbi5zdW1tYXJpZXMpO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4uc29ydGluZyAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5zb3J0aW5nICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcuc29ydGluZyA9IHRoaXMuY29sdW1uU29ydGluZ0NvbnZlcnRlci5jb252ZXJ0KGd1aUNvbHVtbi5zb3J0aW5nKTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLmNlbGxFZGl0aW5nICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLmNlbGxFZGl0aW5nICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcuY2VsbEVkaXRpbmcgPSB0aGlzLmNvbHVtbkNlbGxFZGl0aW5nQ29udmVydGVyLmNvbnZlcnQoZ3VpQ29sdW1uLmNlbGxFZGl0aW5nKTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLm1hdGNoZXIgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4ubWF0Y2hlciAhPT0gbnVsbCkge1xuXHRcdFx0Y29sdW1uQ29uZmlnLm1hdGNoZXIgPSBndWlDb2x1bW4ubWF0Y2hlcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29sdW1uQ29uZmlnO1xuXHR9XG5cbn1cbiJdfQ==