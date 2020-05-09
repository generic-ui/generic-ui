/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiRowColoring } from '../../../domain-api/grid.api';
import { RowColoring } from '../../../../../schema/feature-api/row-coloring';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5yb3ctY29sb3JpbmcuY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvY29sb3JpbmcvZ3JpZC5yb3ctY29sb3JpbmcuY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBRzdFLE1BQU0sT0FBTyx3QkFBd0I7Ozs7O0lBRXBDLE9BQU8sQ0FBQyxXQUFvQztRQUUzQyxJQUFJLE9BQU8sV0FBVyxLQUFLLFFBQVEsRUFBRTtZQUNwQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdkM7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNyQztJQUVGLENBQUM7Ozs7O0lBRUQsdUJBQXVCLENBQUMsS0FBa0I7UUFDekMsUUFBUSxLQUFLLEVBQUU7WUFFZCxLQUFLLFdBQVcsQ0FBQyxJQUFJO2dCQUNwQixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFFNUIsS0FBSyxXQUFXLENBQUMsSUFBSTtnQkFDcEIsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDO1lBRTVCLEtBQUssV0FBVyxDQUFDLEdBQUc7Z0JBQ25CLE9BQU8sY0FBYyxDQUFDLEdBQUcsQ0FBQztZQUUzQjtnQkFDQyxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUM7U0FFNUI7SUFDRixDQUFDOzs7Ozs7SUFFTyxhQUFhLENBQUMsV0FBbUI7O2NBRWxDLGtCQUFrQixHQUFHLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRTtRQUUxRCxRQUFRLGtCQUFrQixFQUFFO1lBRTNCLEtBQUssTUFBTTtnQkFDVixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFFekIsS0FBSyxNQUFNO2dCQUNWLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztZQUV6QixLQUFLLEtBQUs7Z0JBQ1QsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFDO1lBRXhCO2dCQUNDLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztTQUV6QjtJQUVGLENBQUM7Ozs7OztJQUVPLFdBQVcsQ0FBQyxXQUEyQjtRQUU5QyxRQUFRLFdBQVcsRUFBRTtZQUVwQixLQUFLLGNBQWMsQ0FBQyxJQUFJO2dCQUN2QixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFFekIsS0FBSyxjQUFjLENBQUMsSUFBSTtnQkFDdkIsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBRXpCLEtBQUssY0FBYyxDQUFDLEdBQUc7Z0JBQ3RCLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBQztZQUV4QjtnQkFDQyxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7U0FFekI7SUFFRixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHdWlSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvZ3JpZC5hcGknO1xuaW1wb3J0IHsgUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvZmVhdHVyZS1hcGkvcm93LWNvbG9yaW5nJztcblxuXG5leHBvcnQgY2xhc3MgR3JpZFJvd0NvbG9yaW5nQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KHJvd0NvbG9yaW5nOiBzdHJpbmcgfCBHdWlSb3dDb2xvcmluZyk6IFJvd0NvbG9yaW5nIHtcblxuXHRcdGlmICh0eXBlb2Ygcm93Q29sb3JpbmcgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0U3RyaW5nKHJvd0NvbG9yaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydEVudW0ocm93Q29sb3JpbmcpO1xuXHRcdH1cblxuXHR9XG5cblx0Y29udmVydFRvR3VpUm93Q29sb3JpbmcodmFsdWU6IFJvd0NvbG9yaW5nKTogR3VpUm93Q29sb3Jpbmcge1xuXHRcdHN3aXRjaCAodmFsdWUpIHtcblxuXHRcdFx0Y2FzZSBSb3dDb2xvcmluZy5OT05FOlxuXHRcdFx0XHRyZXR1cm4gR3VpUm93Q29sb3JpbmcuTk9ORTtcblxuXHRcdFx0Y2FzZSBSb3dDb2xvcmluZy5FVkVOOlxuXHRcdFx0XHRyZXR1cm4gR3VpUm93Q29sb3JpbmcuRVZFTjtcblxuXHRcdFx0Y2FzZSBSb3dDb2xvcmluZy5PREQ6XG5cdFx0XHRcdHJldHVybiBHdWlSb3dDb2xvcmluZy5PREQ7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBHdWlSb3dDb2xvcmluZy5FVkVOO1xuXG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0U3RyaW5nKHJvd0NvbG9yaW5nOiBzdHJpbmcpOiBSb3dDb2xvcmluZyB7XG5cblx0XHRjb25zdCBsb3dlcmVkUm93Q29sb3JpbmcgPSByb3dDb2xvcmluZy50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuXG5cdFx0c3dpdGNoIChsb3dlcmVkUm93Q29sb3JpbmcpIHtcblxuXHRcdFx0Y2FzZSAnbm9uZSc6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5OT05FO1xuXG5cdFx0XHRjYXNlICdldmVuJzpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLkVWRU47XG5cblx0XHRcdGNhc2UgJ29kZCc6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5PREQ7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5FVkVOO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRFbnVtKHJvd0NvbG9yaW5nOiBHdWlSb3dDb2xvcmluZyk6IFJvd0NvbG9yaW5nIHtcblxuXHRcdHN3aXRjaCAocm93Q29sb3JpbmcpIHtcblxuXHRcdFx0Y2FzZSBHdWlSb3dDb2xvcmluZy5OT05FOlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuTk9ORTtcblxuXHRcdFx0Y2FzZSBHdWlSb3dDb2xvcmluZy5FVkVOOlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuRVZFTjtcblxuXHRcdFx0Y2FzZSBHdWlSb3dDb2xvcmluZy5PREQ6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5PREQ7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5FVkVOO1xuXG5cdFx0fVxuXG5cdH1cblxufVxuIl19