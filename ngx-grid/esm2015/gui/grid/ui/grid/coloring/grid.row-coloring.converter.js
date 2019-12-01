/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiRowColoring } from '../../../../grid/app/grid.api';
import { RowColoring } from '../../../../../lib/structure/app/schema/row-coloring';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5yb3ctY29sb3JpbmcuY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC91aS9ncmlkL2NvbG9yaW5nL2dyaWQucm93LWNvbG9yaW5nLmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUduRixNQUFNLE9BQU8sd0JBQXdCOzs7OztJQUVwQyxPQUFPLENBQUMsV0FBb0M7UUFFM0MsSUFBSSxPQUFPLFdBQVcsS0FBSyxRQUFRLEVBQUU7WUFDcEMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3ZDO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDckM7SUFFRixDQUFDOzs7Ozs7SUFFTyxhQUFhLENBQUMsV0FBbUI7O2NBRWxDLGtCQUFrQixHQUFHLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRTtRQUUxRCxRQUFRLGtCQUFrQixFQUFFO1lBRTNCLEtBQUssTUFBTTtnQkFDVixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFFekIsS0FBSyxNQUFNO2dCQUNWLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztZQUV6QixLQUFLLEtBQUs7Z0JBQ1QsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFDO1lBRXhCO2dCQUNDLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztTQUV6QjtJQUVGLENBQUM7Ozs7OztJQUVPLFdBQVcsQ0FBQyxXQUEyQjtRQUU5QyxRQUFRLFdBQVcsRUFBRTtZQUVwQixLQUFLLGNBQWMsQ0FBQyxJQUFJO2dCQUN2QixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFFekIsS0FBSyxjQUFjLENBQUMsSUFBSTtnQkFDdkIsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBRXpCLEtBQUssY0FBYyxDQUFDLEdBQUc7Z0JBQ3RCLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBQztZQUV4QjtnQkFDQyxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7U0FFekI7SUFFRixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHdWlSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uLy4uL2dyaWQvYXBwL2dyaWQuYXBpJztcbmltcG9ydCB7IFJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9hcHAvc2NoZW1hL3Jvdy1jb2xvcmluZyc7XG5cblxuZXhwb3J0IGNsYXNzIEdyaWRSb3dDb2xvcmluZ0NvbnZlcnRlciB7XG5cblx0Y29udmVydChyb3dDb2xvcmluZzogc3RyaW5nIHwgR3VpUm93Q29sb3JpbmcpOiBSb3dDb2xvcmluZyB7XG5cblx0XHRpZiAodHlwZW9mIHJvd0NvbG9yaW5nID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydFN0cmluZyhyb3dDb2xvcmluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRFbnVtKHJvd0NvbG9yaW5nKTtcblx0XHR9XG5cblx0fVxuXG5cdHByaXZhdGUgY29udmVydFN0cmluZyhyb3dDb2xvcmluZzogc3RyaW5nKTogUm93Q29sb3Jpbmcge1xuXG5cdFx0Y29uc3QgbG93ZXJlZFJvd0NvbG9yaW5nID0gcm93Q29sb3JpbmcudG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuXHRcdHN3aXRjaCAobG93ZXJlZFJvd0NvbG9yaW5nKSB7XG5cblx0XHRcdGNhc2UgJ25vbmUnOlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuTk9ORTtcblxuXHRcdFx0Y2FzZSAnZXZlbic6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5FVkVOO1xuXG5cdFx0XHRjYXNlICdvZGQnOlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuT0REO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuRVZFTjtcblxuXHRcdH1cblxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0RW51bShyb3dDb2xvcmluZzogR3VpUm93Q29sb3JpbmcpOiBSb3dDb2xvcmluZyB7XG5cblx0XHRzd2l0Y2ggKHJvd0NvbG9yaW5nKSB7XG5cblx0XHRcdGNhc2UgR3VpUm93Q29sb3JpbmcuTk9ORTpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLk5PTkU7XG5cblx0XHRcdGNhc2UgR3VpUm93Q29sb3JpbmcuRVZFTjpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLkVWRU47XG5cblx0XHRcdGNhc2UgR3VpUm93Q29sb3JpbmcuT0REOlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuT0REO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuRVZFTjtcblxuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==