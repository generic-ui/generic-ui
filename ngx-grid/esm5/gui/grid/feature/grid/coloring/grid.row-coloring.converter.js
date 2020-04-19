/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiRowColoring } from '../../../feature-api/grid.api';
import { RowColoring } from '../../../../../lib/schema/feature-api/row-coloring';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5yb3ctY29sb3JpbmcuY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvY29sb3JpbmcvZ3JpZC5yb3ctY29sb3JpbmcuY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBR2pGO0lBQUE7SUF3RUEsQ0FBQzs7Ozs7SUF0RUEsMENBQU87Ozs7SUFBUCxVQUFRLFdBQW9DO1FBRTNDLElBQUksT0FBTyxXQUFXLEtBQUssUUFBUSxFQUFFO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN2QzthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3JDO0lBRUYsQ0FBQzs7Ozs7SUFFRCwwREFBdUI7Ozs7SUFBdkIsVUFBd0IsS0FBa0I7UUFDekMsUUFBUSxLQUFLLEVBQUU7WUFFZCxLQUFLLFdBQVcsQ0FBQyxJQUFJO2dCQUNwQixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFFNUIsS0FBSyxXQUFXLENBQUMsSUFBSTtnQkFDcEIsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDO1lBRTVCLEtBQUssV0FBVyxDQUFDLEdBQUc7Z0JBQ25CLE9BQU8sY0FBYyxDQUFDLEdBQUcsQ0FBQztZQUUzQjtnQkFDQyxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUM7U0FFNUI7SUFDRixDQUFDOzs7Ozs7SUFFTyxnREFBYTs7Ozs7SUFBckIsVUFBc0IsV0FBbUI7O1lBRWxDLGtCQUFrQixHQUFHLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRTtRQUUxRCxRQUFRLGtCQUFrQixFQUFFO1lBRTNCLEtBQUssTUFBTTtnQkFDVixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFFekIsS0FBSyxNQUFNO2dCQUNWLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztZQUV6QixLQUFLLEtBQUs7Z0JBQ1QsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFDO1lBRXhCO2dCQUNDLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztTQUV6QjtJQUVGLENBQUM7Ozs7OztJQUVPLDhDQUFXOzs7OztJQUFuQixVQUFvQixXQUEyQjtRQUU5QyxRQUFRLFdBQVcsRUFBRTtZQUVwQixLQUFLLGNBQWMsQ0FBQyxJQUFJO2dCQUN2QixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFFekIsS0FBSyxjQUFjLENBQUMsSUFBSTtnQkFDdkIsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBRXpCLEtBQUssY0FBYyxDQUFDLEdBQUc7Z0JBQ3RCLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBQztZQUV4QjtnQkFDQyxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7U0FFekI7SUFFRixDQUFDO0lBRUYsK0JBQUM7QUFBRCxDQUFDLEFBeEVELElBd0VDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3VpUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlLWFwaS9ncmlkLmFwaSc7XG5pbXBvcnQgeyBSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9zY2hlbWEvZmVhdHVyZS1hcGkvcm93LWNvbG9yaW5nJztcblxuXG5leHBvcnQgY2xhc3MgR3JpZFJvd0NvbG9yaW5nQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KHJvd0NvbG9yaW5nOiBzdHJpbmcgfCBHdWlSb3dDb2xvcmluZyk6IFJvd0NvbG9yaW5nIHtcblxuXHRcdGlmICh0eXBlb2Ygcm93Q29sb3JpbmcgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0U3RyaW5nKHJvd0NvbG9yaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydEVudW0ocm93Q29sb3JpbmcpO1xuXHRcdH1cblxuXHR9XG5cblx0Y29udmVydFRvR3VpUm93Q29sb3JpbmcodmFsdWU6IFJvd0NvbG9yaW5nKTogR3VpUm93Q29sb3Jpbmcge1xuXHRcdHN3aXRjaCAodmFsdWUpIHtcblxuXHRcdFx0Y2FzZSBSb3dDb2xvcmluZy5OT05FOlxuXHRcdFx0XHRyZXR1cm4gR3VpUm93Q29sb3JpbmcuTk9ORTtcblxuXHRcdFx0Y2FzZSBSb3dDb2xvcmluZy5FVkVOOlxuXHRcdFx0XHRyZXR1cm4gR3VpUm93Q29sb3JpbmcuRVZFTjtcblxuXHRcdFx0Y2FzZSBSb3dDb2xvcmluZy5PREQ6XG5cdFx0XHRcdHJldHVybiBHdWlSb3dDb2xvcmluZy5PREQ7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBHdWlSb3dDb2xvcmluZy5FVkVOO1xuXG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0U3RyaW5nKHJvd0NvbG9yaW5nOiBzdHJpbmcpOiBSb3dDb2xvcmluZyB7XG5cblx0XHRjb25zdCBsb3dlcmVkUm93Q29sb3JpbmcgPSByb3dDb2xvcmluZy50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuXG5cdFx0c3dpdGNoIChsb3dlcmVkUm93Q29sb3JpbmcpIHtcblxuXHRcdFx0Y2FzZSAnbm9uZSc6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5OT05FO1xuXG5cdFx0XHRjYXNlICdldmVuJzpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLkVWRU47XG5cblx0XHRcdGNhc2UgJ29kZCc6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5PREQ7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5FVkVOO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRFbnVtKHJvd0NvbG9yaW5nOiBHdWlSb3dDb2xvcmluZyk6IFJvd0NvbG9yaW5nIHtcblxuXHRcdHN3aXRjaCAocm93Q29sb3JpbmcpIHtcblxuXHRcdFx0Y2FzZSBHdWlSb3dDb2xvcmluZy5OT05FOlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuTk9ORTtcblxuXHRcdFx0Y2FzZSBHdWlSb3dDb2xvcmluZy5FVkVOOlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuRVZFTjtcblxuXHRcdFx0Y2FzZSBHdWlSb3dDb2xvcmluZy5PREQ6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5PREQ7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5FVkVOO1xuXG5cdFx0fVxuXG5cdH1cblxufVxuIl19