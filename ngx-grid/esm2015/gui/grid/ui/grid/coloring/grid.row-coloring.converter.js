/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiRowColoring } from '../../../ui-api/grid.api';
import { RowColoring } from '../../../../../lib/structure/ui-api/schema/row-coloring';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5yb3ctY29sb3JpbmcuY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC91aS9ncmlkL2NvbG9yaW5nL2dyaWQucm93LWNvbG9yaW5nLmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUd0RixNQUFNLE9BQU8sd0JBQXdCOzs7OztJQUVwQyxPQUFPLENBQUMsV0FBb0M7UUFFM0MsSUFBSSxPQUFPLFdBQVcsS0FBSyxRQUFRLEVBQUU7WUFDcEMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3ZDO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDckM7SUFFRixDQUFDOzs7Ozs7SUFFTyxhQUFhLENBQUMsV0FBbUI7O2NBRWxDLGtCQUFrQixHQUFHLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRTtRQUUxRCxRQUFRLGtCQUFrQixFQUFFO1lBRTNCLEtBQUssTUFBTTtnQkFDVixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFFekIsS0FBSyxNQUFNO2dCQUNWLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztZQUV6QixLQUFLLEtBQUs7Z0JBQ1QsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFDO1lBRXhCO2dCQUNDLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztTQUV6QjtJQUVGLENBQUM7Ozs7OztJQUVPLFdBQVcsQ0FBQyxXQUEyQjtRQUU5QyxRQUFRLFdBQVcsRUFBRTtZQUVwQixLQUFLLGNBQWMsQ0FBQyxJQUFJO2dCQUN2QixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFFekIsS0FBSyxjQUFjLENBQUMsSUFBSTtnQkFDdkIsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBRXpCLEtBQUssY0FBYyxDQUFDLEdBQUc7Z0JBQ3RCLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBQztZQUV4QjtnQkFDQyxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7U0FFekI7SUFFRixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHdWlSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9ncmlkLmFwaSc7XG5pbXBvcnQgeyBSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvdWktYXBpL3NjaGVtYS9yb3ctY29sb3JpbmcnO1xuXG5cbmV4cG9ydCBjbGFzcyBHcmlkUm93Q29sb3JpbmdDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQocm93Q29sb3Jpbmc6IHN0cmluZyB8IEd1aVJvd0NvbG9yaW5nKTogUm93Q29sb3Jpbmcge1xuXG5cdFx0aWYgKHR5cGVvZiByb3dDb2xvcmluZyA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRTdHJpbmcocm93Q29sb3JpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0RW51bShyb3dDb2xvcmluZyk7XG5cdFx0fVxuXG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRTdHJpbmcocm93Q29sb3Jpbmc6IHN0cmluZyk6IFJvd0NvbG9yaW5nIHtcblxuXHRcdGNvbnN0IGxvd2VyZWRSb3dDb2xvcmluZyA9IHJvd0NvbG9yaW5nLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG5cblx0XHRzd2l0Y2ggKGxvd2VyZWRSb3dDb2xvcmluZykge1xuXG5cdFx0XHRjYXNlICdub25lJzpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLk5PTkU7XG5cblx0XHRcdGNhc2UgJ2V2ZW4nOlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuRVZFTjtcblxuXHRcdFx0Y2FzZSAnb2RkJzpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLk9ERDtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLkVWRU47XG5cblx0XHR9XG5cblx0fVxuXG5cdHByaXZhdGUgY29udmVydEVudW0ocm93Q29sb3Jpbmc6IEd1aVJvd0NvbG9yaW5nKTogUm93Q29sb3Jpbmcge1xuXG5cdFx0c3dpdGNoIChyb3dDb2xvcmluZykge1xuXG5cdFx0XHRjYXNlIEd1aVJvd0NvbG9yaW5nLk5PTkU6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5OT05FO1xuXG5cdFx0XHRjYXNlIEd1aVJvd0NvbG9yaW5nLkVWRU46XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5FVkVOO1xuXG5cdFx0XHRjYXNlIEd1aVJvd0NvbG9yaW5nLk9ERDpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLk9ERDtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLkVWRU47XG5cblx0XHR9XG5cblx0fVxuXG59XG4iXX0=