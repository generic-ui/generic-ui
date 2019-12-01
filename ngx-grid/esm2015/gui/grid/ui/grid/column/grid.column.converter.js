/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GridColumnTypeConverter } from './grid.column-type.converter';
import { GridColumnAggregationConverter } from './grid.column-aggregation.converter';
import { GridColumnViewConverter } from './grid.column-view.converter';
export class GridColumnConverter {
    constructor() {
        this.columnTypeConverter = new GridColumnTypeConverter();
        this.columnAggregationConverter = new GridColumnAggregationConverter();
        this.columnViewConverter = new GridColumnViewConverter();
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
        if (guiColumn.field !== undefined && guiColumn.field !== null) {
            columnConfig.field = guiColumn.field;
        }
        if (guiColumn.width !== undefined && guiColumn.width !== null) {
            columnConfig.width = guiColumn.width;
        }
        if (guiColumn.view !== undefined && guiColumn.view !== null) {
            columnConfig.view = this.columnViewConverter.convert(guiColumn.view);
        }
        if (guiColumn.aggregation !== undefined && guiColumn.aggregation !== null) {
            columnConfig.aggregation = this.columnAggregationConverter.convert(guiColumn.aggregation);
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
    GridColumnConverter.prototype.columnAggregationConverter;
    /**
     * @type {?}
     * @private
     */
    GridColumnConverter.prototype.columnViewConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb2x1bW4uY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC91aS9ncmlkL2NvbHVtbi9ncmlkLmNvbHVtbi5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBR3ZFLE1BQU0sT0FBTyxtQkFBbUI7SUFBaEM7UUFFa0Isd0JBQW1CLEdBQUcsSUFBSSx1QkFBdUIsRUFBRSxDQUFDO1FBRXBELCtCQUEwQixHQUFHLElBQUksOEJBQThCLEVBQUUsQ0FBQztRQUVsRSx3QkFBbUIsR0FBRyxJQUFJLHVCQUF1QixFQUFFLENBQUM7SUFvQ3RFLENBQUM7Ozs7O0lBbENBLE9BQU8sQ0FBQyxNQUF3QjtRQUMvQixPQUFPLE1BQU0sQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUNqRCxDQUFDOzs7Ozs7SUFFTyxhQUFhLENBQUMsU0FBb0I7O1lBQ3JDLFlBQVksR0FBaUIsRUFBRTtRQUVuQyxJQUFJLFNBQVMsQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQzVELFlBQVksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekU7UUFFRCxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ2hFLFlBQVksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztTQUN2QztRQUVELElBQUksU0FBUyxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDOUQsWUFBWSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxTQUFTLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtZQUM5RCxZQUFZLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7U0FDckM7UUFFRCxJQUFJLFNBQVMsQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQzVELFlBQVksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckU7UUFFRCxJQUFJLFNBQVMsQ0FBQyxXQUFXLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxXQUFXLEtBQUssSUFBSSxFQUFFO1lBQzFFLFlBQVksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDMUY7UUFFRCxPQUFPLFlBQVksQ0FBQztJQUNyQixDQUFDO0NBRUQ7Ozs7OztJQXhDQSxrREFBcUU7Ozs7O0lBRXJFLHlEQUFtRjs7Ozs7SUFFbkYsa0RBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3VpQ29sdW1uIH0gZnJvbSAnLi4vLi4vLi4vLi4vZ3JpZC9hcHAvZ3JpZC5hcGknO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vY29tcG9zaXRpb24vY29sdW1uLmNvbmZpZyc7XG5cbmltcG9ydCB7IEdyaWRDb2x1bW5UeXBlQ29udmVydGVyIH0gZnJvbSAnLi9ncmlkLmNvbHVtbi10eXBlLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBHcmlkQ29sdW1uQWdncmVnYXRpb25Db252ZXJ0ZXIgfSBmcm9tICcuL2dyaWQuY29sdW1uLWFnZ3JlZ2F0aW9uLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBHcmlkQ29sdW1uVmlld0NvbnZlcnRlciB9IGZyb20gJy4vZ3JpZC5jb2x1bW4tdmlldy5jb252ZXJ0ZXInO1xuXG5cbmV4cG9ydCBjbGFzcyBHcmlkQ29sdW1uQ29udmVydGVyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtblR5cGVDb252ZXJ0ZXIgPSBuZXcgR3JpZENvbHVtblR5cGVDb252ZXJ0ZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbkFnZ3JlZ2F0aW9uQ29udmVydGVyID0gbmV3IEdyaWRDb2x1bW5BZ2dyZWdhdGlvbkNvbnZlcnRlcigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uVmlld0NvbnZlcnRlciA9IG5ldyBHcmlkQ29sdW1uVmlld0NvbnZlcnRlcigpO1xuXG5cdGNvbnZlcnQoY29uZmlnOiBBcnJheTxHdWlDb2x1bW4+KTogQXJyYXk8Q29sdW1uQ29uZmlnPiB7XG5cdFx0cmV0dXJuIGNvbmZpZy5tYXAoKGMpID0+IHRoaXMuY29udmVydENvbHVtbihjKSk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRDb2x1bW4oZ3VpQ29sdW1uOiBHdWlDb2x1bW4pOiBDb2x1bW5Db25maWcge1xuXHRcdGxldCBjb2x1bW5Db25maWc6IENvbHVtbkNvbmZpZyA9IHt9O1xuXG5cdFx0aWYgKGd1aUNvbHVtbi50eXBlICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLnR5cGUgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy50eXBlID0gdGhpcy5jb2x1bW5UeXBlQ29udmVydGVyLmNvbnZlcnRUeXBlKGd1aUNvbHVtbi50eXBlKTtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLmhlYWRlciAhPT0gdW5kZWZpbmVkICYmIGd1aUNvbHVtbi5oZWFkZXIgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5oZWFkZXIgPSBndWlDb2x1bW4uaGVhZGVyO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4uZmllbGQgIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uZmllbGQgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5maWVsZCA9IGd1aUNvbHVtbi5maWVsZDtcblx0XHR9XG5cblx0XHRpZiAoZ3VpQ29sdW1uLndpZHRoICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLndpZHRoICE9PSBudWxsKSB7XG5cdFx0XHRjb2x1bW5Db25maWcud2lkdGggPSBndWlDb2x1bW4ud2lkdGg7XG5cdFx0fVxuXG5cdFx0aWYgKGd1aUNvbHVtbi52aWV3ICE9PSB1bmRlZmluZWQgJiYgZ3VpQ29sdW1uLnZpZXcgIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy52aWV3ID0gdGhpcy5jb2x1bW5WaWV3Q29udmVydGVyLmNvbnZlcnQoZ3VpQ29sdW1uLnZpZXcpO1xuXHRcdH1cblxuXHRcdGlmIChndWlDb2x1bW4uYWdncmVnYXRpb24gIT09IHVuZGVmaW5lZCAmJiBndWlDb2x1bW4uYWdncmVnYXRpb24gIT09IG51bGwpIHtcblx0XHRcdGNvbHVtbkNvbmZpZy5hZ2dyZWdhdGlvbiA9IHRoaXMuY29sdW1uQWdncmVnYXRpb25Db252ZXJ0ZXIuY29udmVydChndWlDb2x1bW4uYWdncmVnYXRpb24pO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb2x1bW5Db25maWc7XG5cdH1cblxufVxuIl19