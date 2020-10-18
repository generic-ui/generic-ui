/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiRowColoring } from '../../../../core/api/gui.grid.public-api';
import { RowColoring } from '../../../../../../schema/core/api/row-coloring';
var GuiGridRowColoringConverter = /** @class */ (function () {
    function GuiGridRowColoringConverter() {
    }
    /**
     * @param {?} rowColoring
     * @return {?}
     */
    GuiGridRowColoringConverter.prototype.convert = /**
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
    GuiGridRowColoringConverter.prototype.convertToGuiRowColoring = /**
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
    GuiGridRowColoringConverter.prototype.convertString = /**
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
    GuiGridRowColoringConverter.prototype.convertEnum = /**
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
    return GuiGridRowColoringConverter;
}());
export { GuiGridRowColoringConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQucm93LWNvbG9yaW5nLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiZ3VpL2dyaWQvZmVhdHVyZS9ncmlkL3RoZW1lL2NvbG9yaW5nL2d1aS5ncmlkLnJvdy1jb2xvcmluZy5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFHN0U7SUFBQTtJQXdFQSxDQUFDOzs7OztJQXRFQSw2Q0FBTzs7OztJQUFQLFVBQVEsV0FBb0M7UUFFM0MsSUFBSSxPQUFPLFdBQVcsS0FBSyxRQUFRLEVBQUU7WUFDcEMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3ZDO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDckM7SUFFRixDQUFDOzs7OztJQUVELDZEQUF1Qjs7OztJQUF2QixVQUF3QixLQUFrQjtRQUN6QyxRQUFRLEtBQUssRUFBRTtZQUVkLEtBQUssV0FBVyxDQUFDLElBQUk7Z0JBQ3BCLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQztZQUU1QixLQUFLLFdBQVcsQ0FBQyxJQUFJO2dCQUNwQixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFFNUIsS0FBSyxXQUFXLENBQUMsR0FBRztnQkFDbkIsT0FBTyxjQUFjLENBQUMsR0FBRyxDQUFDO1lBRTNCO2dCQUNDLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQztTQUU1QjtJQUNGLENBQUM7Ozs7OztJQUVPLG1EQUFhOzs7OztJQUFyQixVQUFzQixXQUFtQjs7WUFFbEMsa0JBQWtCLEdBQUcsV0FBVyxDQUFDLGlCQUFpQixFQUFFO1FBRTFELFFBQVEsa0JBQWtCLEVBQUU7WUFFM0IsS0FBSyxNQUFNO2dCQUNWLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztZQUV6QixLQUFLLE1BQU07Z0JBQ1YsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBRXpCLEtBQUssS0FBSztnQkFDVCxPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUM7WUFFeEI7Z0JBQ0MsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO1NBRXpCO0lBRUYsQ0FBQzs7Ozs7O0lBRU8saURBQVc7Ozs7O0lBQW5CLFVBQW9CLFdBQTJCO1FBRTlDLFFBQVEsV0FBVyxFQUFFO1lBRXBCLEtBQUssY0FBYyxDQUFDLElBQUk7Z0JBQ3ZCLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztZQUV6QixLQUFLLGNBQWMsQ0FBQyxJQUFJO2dCQUN2QixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFFekIsS0FBSyxjQUFjLENBQUMsR0FBRztnQkFDdEIsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFDO1lBRXhCO2dCQUNDLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztTQUV6QjtJQUVGLENBQUM7SUFFRixrQ0FBQztBQUFELENBQUMsQUF4RUQsSUF3RUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHdWlSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL2d1aS5ncmlkLnB1YmxpYy1hcGknO1xuaW1wb3J0IHsgUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvcm93LWNvbG9yaW5nJztcblxuXG5leHBvcnQgY2xhc3MgR3VpR3JpZFJvd0NvbG9yaW5nQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KHJvd0NvbG9yaW5nOiBzdHJpbmcgfCBHdWlSb3dDb2xvcmluZyk6IFJvd0NvbG9yaW5nIHtcblxuXHRcdGlmICh0eXBlb2Ygcm93Q29sb3JpbmcgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0U3RyaW5nKHJvd0NvbG9yaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydEVudW0ocm93Q29sb3JpbmcpO1xuXHRcdH1cblxuXHR9XG5cblx0Y29udmVydFRvR3VpUm93Q29sb3JpbmcodmFsdWU6IFJvd0NvbG9yaW5nKTogR3VpUm93Q29sb3Jpbmcge1xuXHRcdHN3aXRjaCAodmFsdWUpIHtcblxuXHRcdFx0Y2FzZSBSb3dDb2xvcmluZy5OT05FOlxuXHRcdFx0XHRyZXR1cm4gR3VpUm93Q29sb3JpbmcuTk9ORTtcblxuXHRcdFx0Y2FzZSBSb3dDb2xvcmluZy5FVkVOOlxuXHRcdFx0XHRyZXR1cm4gR3VpUm93Q29sb3JpbmcuRVZFTjtcblxuXHRcdFx0Y2FzZSBSb3dDb2xvcmluZy5PREQ6XG5cdFx0XHRcdHJldHVybiBHdWlSb3dDb2xvcmluZy5PREQ7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBHdWlSb3dDb2xvcmluZy5FVkVOO1xuXG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0U3RyaW5nKHJvd0NvbG9yaW5nOiBzdHJpbmcpOiBSb3dDb2xvcmluZyB7XG5cblx0XHRjb25zdCBsb3dlcmVkUm93Q29sb3JpbmcgPSByb3dDb2xvcmluZy50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuXG5cdFx0c3dpdGNoIChsb3dlcmVkUm93Q29sb3JpbmcpIHtcblxuXHRcdFx0Y2FzZSAnbm9uZSc6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5OT05FO1xuXG5cdFx0XHRjYXNlICdldmVuJzpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLkVWRU47XG5cblx0XHRcdGNhc2UgJ29kZCc6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5PREQ7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5FVkVOO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRFbnVtKHJvd0NvbG9yaW5nOiBHdWlSb3dDb2xvcmluZyk6IFJvd0NvbG9yaW5nIHtcblxuXHRcdHN3aXRjaCAocm93Q29sb3JpbmcpIHtcblxuXHRcdFx0Y2FzZSBHdWlSb3dDb2xvcmluZy5OT05FOlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuTk9ORTtcblxuXHRcdFx0Y2FzZSBHdWlSb3dDb2xvcmluZy5FVkVOOlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuRVZFTjtcblxuXHRcdFx0Y2FzZSBHdWlSb3dDb2xvcmluZy5PREQ6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5PREQ7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5FVkVOO1xuXG5cdFx0fVxuXG5cdH1cblxufVxuIl19