/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiRowColoring } from '../../../../core/api/gui.grid.public-api';
import { RowColoring } from '../../../../../../schema/core/api/row-coloring/row-coloring';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQucm93LWNvbG9yaW5nLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiZ3VpL2dyaWQvZmVhdHVyZS9ncmlkL3RoZW1lL2NvbG9yaW5nL2d1aS5ncmlkLnJvdy1jb2xvcmluZy5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFHMUY7SUFBQTtJQXdFQSxDQUFDOzs7OztJQXRFQSw2Q0FBTzs7OztJQUFQLFVBQVEsV0FBb0M7UUFFM0MsSUFBSSxPQUFPLFdBQVcsS0FBSyxRQUFRLEVBQUU7WUFDcEMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3ZDO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDckM7SUFFRixDQUFDOzs7OztJQUVELDZEQUF1Qjs7OztJQUF2QixVQUF3QixLQUFrQjtRQUN6QyxRQUFRLEtBQUssRUFBRTtZQUVkLEtBQUssV0FBVyxDQUFDLElBQUk7Z0JBQ3BCLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQztZQUU1QixLQUFLLFdBQVcsQ0FBQyxJQUFJO2dCQUNwQixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFFNUIsS0FBSyxXQUFXLENBQUMsR0FBRztnQkFDbkIsT0FBTyxjQUFjLENBQUMsR0FBRyxDQUFDO1lBRTNCO2dCQUNDLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQztTQUU1QjtJQUNGLENBQUM7Ozs7OztJQUVPLG1EQUFhOzs7OztJQUFyQixVQUFzQixXQUFtQjs7WUFFbEMsa0JBQWtCLEdBQUcsV0FBVyxDQUFDLGlCQUFpQixFQUFFO1FBRTFELFFBQVEsa0JBQWtCLEVBQUU7WUFFM0IsS0FBSyxNQUFNO2dCQUNWLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztZQUV6QixLQUFLLE1BQU07Z0JBQ1YsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBRXpCLEtBQUssS0FBSztnQkFDVCxPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUM7WUFFeEI7Z0JBQ0MsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO1NBRXpCO0lBRUYsQ0FBQzs7Ozs7O0lBRU8saURBQVc7Ozs7O0lBQW5CLFVBQW9CLFdBQTJCO1FBRTlDLFFBQVEsV0FBVyxFQUFFO1lBRXBCLEtBQUssY0FBYyxDQUFDLElBQUk7Z0JBQ3ZCLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztZQUV6QixLQUFLLGNBQWMsQ0FBQyxJQUFJO2dCQUN2QixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFFekIsS0FBSyxjQUFjLENBQUMsR0FBRztnQkFDdEIsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFDO1lBRXhCO2dCQUNDLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztTQUV6QjtJQUVGLENBQUM7SUFFRixrQ0FBQztBQUFELENBQUMsQUF4RUQsSUF3RUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHdWlSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL2d1aS5ncmlkLnB1YmxpYy1hcGknO1xuaW1wb3J0IHsgUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvcm93LWNvbG9yaW5nL3Jvdy1jb2xvcmluZyc7XG5cblxuZXhwb3J0IGNsYXNzIEd1aUdyaWRSb3dDb2xvcmluZ0NvbnZlcnRlciB7XG5cblx0Y29udmVydChyb3dDb2xvcmluZzogc3RyaW5nIHwgR3VpUm93Q29sb3JpbmcpOiBSb3dDb2xvcmluZyB7XG5cblx0XHRpZiAodHlwZW9mIHJvd0NvbG9yaW5nID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydFN0cmluZyhyb3dDb2xvcmluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRFbnVtKHJvd0NvbG9yaW5nKTtcblx0XHR9XG5cblx0fVxuXG5cdGNvbnZlcnRUb0d1aVJvd0NvbG9yaW5nKHZhbHVlOiBSb3dDb2xvcmluZyk6IEd1aVJvd0NvbG9yaW5nIHtcblx0XHRzd2l0Y2ggKHZhbHVlKSB7XG5cblx0XHRcdGNhc2UgUm93Q29sb3JpbmcuTk9ORTpcblx0XHRcdFx0cmV0dXJuIEd1aVJvd0NvbG9yaW5nLk5PTkU7XG5cblx0XHRcdGNhc2UgUm93Q29sb3JpbmcuRVZFTjpcblx0XHRcdFx0cmV0dXJuIEd1aVJvd0NvbG9yaW5nLkVWRU47XG5cblx0XHRcdGNhc2UgUm93Q29sb3JpbmcuT0REOlxuXHRcdFx0XHRyZXR1cm4gR3VpUm93Q29sb3JpbmcuT0REO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gR3VpUm93Q29sb3JpbmcuRVZFTjtcblxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY29udmVydFN0cmluZyhyb3dDb2xvcmluZzogc3RyaW5nKTogUm93Q29sb3Jpbmcge1xuXG5cdFx0Y29uc3QgbG93ZXJlZFJvd0NvbG9yaW5nID0gcm93Q29sb3JpbmcudG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuXHRcdHN3aXRjaCAobG93ZXJlZFJvd0NvbG9yaW5nKSB7XG5cblx0XHRcdGNhc2UgJ25vbmUnOlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuTk9ORTtcblxuXHRcdFx0Y2FzZSAnZXZlbic6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5FVkVOO1xuXG5cdFx0XHRjYXNlICdvZGQnOlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuT0REO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuRVZFTjtcblxuXHRcdH1cblxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0RW51bShyb3dDb2xvcmluZzogR3VpUm93Q29sb3JpbmcpOiBSb3dDb2xvcmluZyB7XG5cblx0XHRzd2l0Y2ggKHJvd0NvbG9yaW5nKSB7XG5cblx0XHRcdGNhc2UgR3VpUm93Q29sb3JpbmcuTk9ORTpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLk5PTkU7XG5cblx0XHRcdGNhc2UgR3VpUm93Q29sb3JpbmcuRVZFTjpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLkVWRU47XG5cblx0XHRcdGNhc2UgR3VpUm93Q29sb3JpbmcuT0REOlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuT0REO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuRVZFTjtcblxuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==