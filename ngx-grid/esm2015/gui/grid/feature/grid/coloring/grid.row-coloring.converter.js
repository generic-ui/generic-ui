/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiRowColoring } from '../../../domain-api/grid.api';
import { RowColoring } from '../../../../../schema/domain-api/row-coloring';
export class GridRowColoringConverter {
    /**
     * @param {?} rowColoring
     * @return {?}
     */
    convert(rowColoring) {
        if (typeof rowColoring === 'string') {
            return this.convertString(rowColoring);
        }
        else {
            return this.convertEnum(rowColoring);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    convertToGuiRowColoring(value) {
        switch (value) {
            case RowColoring.NONE:
                return GuiRowColoring.NONE;
            case RowColoring.EVEN:
                return GuiRowColoring.EVEN;
            case RowColoring.ODD:
                return GuiRowColoring.ODD;
            default:
                return GuiRowColoring.EVEN;
        }
    }
    /**
     * @private
     * @param {?} rowColoring
     * @return {?}
     */
    convertString(rowColoring) {
        /** @type {?} */
        const loweredRowColoring = rowColoring.toLocaleLowerCase();
        switch (loweredRowColoring) {
            case 'none':
                return RowColoring.NONE;
            case 'even':
                return RowColoring.EVEN;
            case 'odd':
                return RowColoring.ODD;
            default:
                return RowColoring.EVEN;
        }
    }
    /**
     * @private
     * @param {?} rowColoring
     * @return {?}
     */
    convertEnum(rowColoring) {
        switch (rowColoring) {
            case GuiRowColoring.NONE:
                return RowColoring.NONE;
            case GuiRowColoring.EVEN:
                return RowColoring.EVEN;
            case GuiRowColoring.ODD:
                return RowColoring.ODD;
            default:
                return RowColoring.EVEN;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5yb3ctY29sb3JpbmcuY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvY29sb3JpbmcvZ3JpZC5yb3ctY29sb3JpbmcuY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRzVFLE1BQU0sT0FBTyx3QkFBd0I7Ozs7O0lBRXBDLE9BQU8sQ0FBQyxXQUFvQztRQUUzQyxJQUFJLE9BQU8sV0FBVyxLQUFLLFFBQVEsRUFBRTtZQUNwQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdkM7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNyQztJQUVGLENBQUM7Ozs7O0lBRUQsdUJBQXVCLENBQUMsS0FBa0I7UUFDekMsUUFBUSxLQUFLLEVBQUU7WUFFZCxLQUFLLFdBQVcsQ0FBQyxJQUFJO2dCQUNwQixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFFNUIsS0FBSyxXQUFXLENBQUMsSUFBSTtnQkFDcEIsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDO1lBRTVCLEtBQUssV0FBVyxDQUFDLEdBQUc7Z0JBQ25CLE9BQU8sY0FBYyxDQUFDLEdBQUcsQ0FBQztZQUUzQjtnQkFDQyxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUM7U0FFNUI7SUFDRixDQUFDOzs7Ozs7SUFFTyxhQUFhLENBQUMsV0FBbUI7O2NBRWxDLGtCQUFrQixHQUFHLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRTtRQUUxRCxRQUFRLGtCQUFrQixFQUFFO1lBRTNCLEtBQUssTUFBTTtnQkFDVixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFFekIsS0FBSyxNQUFNO2dCQUNWLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztZQUV6QixLQUFLLEtBQUs7Z0JBQ1QsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFDO1lBRXhCO2dCQUNDLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztTQUV6QjtJQUVGLENBQUM7Ozs7OztJQUVPLFdBQVcsQ0FBQyxXQUEyQjtRQUU5QyxRQUFRLFdBQVcsRUFBRTtZQUVwQixLQUFLLGNBQWMsQ0FBQyxJQUFJO2dCQUN2QixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFFekIsS0FBSyxjQUFjLENBQUMsSUFBSTtnQkFDdkIsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBRXpCLEtBQUssY0FBYyxDQUFDLEdBQUc7Z0JBQ3RCLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBQztZQUV4QjtnQkFDQyxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7U0FFekI7SUFFRixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHdWlSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvZ3JpZC5hcGknO1xuaW1wb3J0IHsgUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluLWFwaS9yb3ctY29sb3JpbmcnO1xuXG5cbmV4cG9ydCBjbGFzcyBHcmlkUm93Q29sb3JpbmdDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQocm93Q29sb3Jpbmc6IHN0cmluZyB8IEd1aVJvd0NvbG9yaW5nKTogUm93Q29sb3Jpbmcge1xuXG5cdFx0aWYgKHR5cGVvZiByb3dDb2xvcmluZyA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRTdHJpbmcocm93Q29sb3JpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0RW51bShyb3dDb2xvcmluZyk7XG5cdFx0fVxuXG5cdH1cblxuXHRjb252ZXJ0VG9HdWlSb3dDb2xvcmluZyh2YWx1ZTogUm93Q29sb3JpbmcpOiBHdWlSb3dDb2xvcmluZyB7XG5cdFx0c3dpdGNoICh2YWx1ZSkge1xuXG5cdFx0XHRjYXNlIFJvd0NvbG9yaW5nLk5PTkU6XG5cdFx0XHRcdHJldHVybiBHdWlSb3dDb2xvcmluZy5OT05FO1xuXG5cdFx0XHRjYXNlIFJvd0NvbG9yaW5nLkVWRU46XG5cdFx0XHRcdHJldHVybiBHdWlSb3dDb2xvcmluZy5FVkVOO1xuXG5cdFx0XHRjYXNlIFJvd0NvbG9yaW5nLk9ERDpcblx0XHRcdFx0cmV0dXJuIEd1aVJvd0NvbG9yaW5nLk9ERDtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIEd1aVJvd0NvbG9yaW5nLkVWRU47XG5cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRTdHJpbmcocm93Q29sb3Jpbmc6IHN0cmluZyk6IFJvd0NvbG9yaW5nIHtcblxuXHRcdGNvbnN0IGxvd2VyZWRSb3dDb2xvcmluZyA9IHJvd0NvbG9yaW5nLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG5cblx0XHRzd2l0Y2ggKGxvd2VyZWRSb3dDb2xvcmluZykge1xuXG5cdFx0XHRjYXNlICdub25lJzpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLk5PTkU7XG5cblx0XHRcdGNhc2UgJ2V2ZW4nOlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuRVZFTjtcblxuXHRcdFx0Y2FzZSAnb2RkJzpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLk9ERDtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLkVWRU47XG5cblx0XHR9XG5cblx0fVxuXG5cdHByaXZhdGUgY29udmVydEVudW0ocm93Q29sb3Jpbmc6IEd1aVJvd0NvbG9yaW5nKTogUm93Q29sb3Jpbmcge1xuXG5cdFx0c3dpdGNoIChyb3dDb2xvcmluZykge1xuXG5cdFx0XHRjYXNlIEd1aVJvd0NvbG9yaW5nLk5PTkU6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5OT05FO1xuXG5cdFx0XHRjYXNlIEd1aVJvd0NvbG9yaW5nLkVWRU46XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5FVkVOO1xuXG5cdFx0XHRjYXNlIEd1aVJvd0NvbG9yaW5nLk9ERDpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLk9ERDtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLkVWRU47XG5cblx0XHR9XG5cblx0fVxuXG59XG4iXX0=