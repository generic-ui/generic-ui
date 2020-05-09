/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiRowColoring } from '../../../domain-api/grid.api';
import { RowColoring } from '../../../../../schema/feature-api/row-coloring';
var GridRowColoringConverter = /** @class */ (function () {
    function GridRowColoringConverter() {
    }
    /**
     * @param {?} rowColoring
     * @return {?}
     */
    GridRowColoringConverter.prototype.convert = /**
     * @param {?} rowColoring
     * @return {?}
     */
    function (rowColoring) {
        if (typeof rowColoring === 'string') {
            return this.convertString(rowColoring);
        }
        else {
            return this.convertEnum(rowColoring);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    GridRowColoringConverter.prototype.convertToGuiRowColoring = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
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
    };
    /**
     * @private
     * @param {?} rowColoring
     * @return {?}
     */
    GridRowColoringConverter.prototype.convertString = /**
     * @private
     * @param {?} rowColoring
     * @return {?}
     */
    function (rowColoring) {
        /** @type {?} */
        var loweredRowColoring = rowColoring.toLocaleLowerCase();
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
    };
    /**
     * @private
     * @param {?} rowColoring
     * @return {?}
     */
    GridRowColoringConverter.prototype.convertEnum = /**
     * @private
     * @param {?} rowColoring
     * @return {?}
     */
    function (rowColoring) {
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
    };
    return GridRowColoringConverter;
}());
export { GridRowColoringConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5yb3ctY29sb3JpbmcuY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvY29sb3JpbmcvZ3JpZC5yb3ctY29sb3JpbmcuY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBRzdFO0lBQUE7SUF3RUEsQ0FBQzs7Ozs7SUF0RUEsMENBQU87Ozs7SUFBUCxVQUFRLFdBQW9DO1FBRTNDLElBQUksT0FBTyxXQUFXLEtBQUssUUFBUSxFQUFFO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN2QzthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3JDO0lBRUYsQ0FBQzs7Ozs7SUFFRCwwREFBdUI7Ozs7SUFBdkIsVUFBd0IsS0FBa0I7UUFDekMsUUFBUSxLQUFLLEVBQUU7WUFFZCxLQUFLLFdBQVcsQ0FBQyxJQUFJO2dCQUNwQixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFFNUIsS0FBSyxXQUFXLENBQUMsSUFBSTtnQkFDcEIsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDO1lBRTVCLEtBQUssV0FBVyxDQUFDLEdBQUc7Z0JBQ25CLE9BQU8sY0FBYyxDQUFDLEdBQUcsQ0FBQztZQUUzQjtnQkFDQyxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUM7U0FFNUI7SUFDRixDQUFDOzs7Ozs7SUFFTyxnREFBYTs7Ozs7SUFBckIsVUFBc0IsV0FBbUI7O1lBRWxDLGtCQUFrQixHQUFHLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRTtRQUUxRCxRQUFRLGtCQUFrQixFQUFFO1lBRTNCLEtBQUssTUFBTTtnQkFDVixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFFekIsS0FBSyxNQUFNO2dCQUNWLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztZQUV6QixLQUFLLEtBQUs7Z0JBQ1QsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFDO1lBRXhCO2dCQUNDLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztTQUV6QjtJQUVGLENBQUM7Ozs7OztJQUVPLDhDQUFXOzs7OztJQUFuQixVQUFvQixXQUEyQjtRQUU5QyxRQUFRLFdBQVcsRUFBRTtZQUVwQixLQUFLLGNBQWMsQ0FBQyxJQUFJO2dCQUN2QixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFFekIsS0FBSyxjQUFjLENBQUMsSUFBSTtnQkFDdkIsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBRXpCLEtBQUssY0FBYyxDQUFDLEdBQUc7Z0JBQ3RCLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBQztZQUV4QjtnQkFDQyxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7U0FFekI7SUFFRixDQUFDO0lBRUYsK0JBQUM7QUFBRCxDQUFDLEFBeEVELElBd0VDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3VpUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL2dyaWQuYXBpJztcbmltcG9ydCB7IFJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2ZlYXR1cmUtYXBpL3Jvdy1jb2xvcmluZyc7XG5cblxuZXhwb3J0IGNsYXNzIEdyaWRSb3dDb2xvcmluZ0NvbnZlcnRlciB7XG5cblx0Y29udmVydChyb3dDb2xvcmluZzogc3RyaW5nIHwgR3VpUm93Q29sb3JpbmcpOiBSb3dDb2xvcmluZyB7XG5cblx0XHRpZiAodHlwZW9mIHJvd0NvbG9yaW5nID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydFN0cmluZyhyb3dDb2xvcmluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRFbnVtKHJvd0NvbG9yaW5nKTtcblx0XHR9XG5cblx0fVxuXG5cdGNvbnZlcnRUb0d1aVJvd0NvbG9yaW5nKHZhbHVlOiBSb3dDb2xvcmluZyk6IEd1aVJvd0NvbG9yaW5nIHtcblx0XHRzd2l0Y2ggKHZhbHVlKSB7XG5cblx0XHRcdGNhc2UgUm93Q29sb3JpbmcuTk9ORTpcblx0XHRcdFx0cmV0dXJuIEd1aVJvd0NvbG9yaW5nLk5PTkU7XG5cblx0XHRcdGNhc2UgUm93Q29sb3JpbmcuRVZFTjpcblx0XHRcdFx0cmV0dXJuIEd1aVJvd0NvbG9yaW5nLkVWRU47XG5cblx0XHRcdGNhc2UgUm93Q29sb3JpbmcuT0REOlxuXHRcdFx0XHRyZXR1cm4gR3VpUm93Q29sb3JpbmcuT0REO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gR3VpUm93Q29sb3JpbmcuRVZFTjtcblxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY29udmVydFN0cmluZyhyb3dDb2xvcmluZzogc3RyaW5nKTogUm93Q29sb3Jpbmcge1xuXG5cdFx0Y29uc3QgbG93ZXJlZFJvd0NvbG9yaW5nID0gcm93Q29sb3JpbmcudG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuXHRcdHN3aXRjaCAobG93ZXJlZFJvd0NvbG9yaW5nKSB7XG5cblx0XHRcdGNhc2UgJ25vbmUnOlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuTk9ORTtcblxuXHRcdFx0Y2FzZSAnZXZlbic6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5FVkVOO1xuXG5cdFx0XHRjYXNlICdvZGQnOlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuT0REO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuRVZFTjtcblxuXHRcdH1cblxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0RW51bShyb3dDb2xvcmluZzogR3VpUm93Q29sb3JpbmcpOiBSb3dDb2xvcmluZyB7XG5cblx0XHRzd2l0Y2ggKHJvd0NvbG9yaW5nKSB7XG5cblx0XHRcdGNhc2UgR3VpUm93Q29sb3JpbmcuTk9ORTpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLk5PTkU7XG5cblx0XHRcdGNhc2UgR3VpUm93Q29sb3JpbmcuRVZFTjpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLkVWRU47XG5cblx0XHRcdGNhc2UgR3VpUm93Q29sb3JpbmcuT0REOlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuT0REO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuRVZFTjtcblxuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==