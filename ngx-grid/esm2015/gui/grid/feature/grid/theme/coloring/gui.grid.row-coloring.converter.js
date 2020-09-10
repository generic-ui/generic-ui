/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiRowColoring } from '../../../../domain-api/gui.grid.public-api';
import { RowColoring } from '../../../../../../schema/domain-api/row-coloring';
export class GuiGridRowColoringConverter {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQucm93LWNvbG9yaW5nLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiZ3VpL2dyaWQvZmVhdHVyZS9ncmlkL3RoZW1lL2NvbG9yaW5nL2d1aS5ncmlkLnJvdy1jb2xvcmluZy5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFHL0UsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7SUFFdkMsT0FBTyxDQUFDLFdBQW9DO1FBRTNDLElBQUksT0FBTyxXQUFXLEtBQUssUUFBUSxFQUFFO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN2QzthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3JDO0lBRUYsQ0FBQzs7Ozs7SUFFRCx1QkFBdUIsQ0FBQyxLQUFrQjtRQUN6QyxRQUFRLEtBQUssRUFBRTtZQUVkLEtBQUssV0FBVyxDQUFDLElBQUk7Z0JBQ3BCLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQztZQUU1QixLQUFLLFdBQVcsQ0FBQyxJQUFJO2dCQUNwQixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFFNUIsS0FBSyxXQUFXLENBQUMsR0FBRztnQkFDbkIsT0FBTyxjQUFjLENBQUMsR0FBRyxDQUFDO1lBRTNCO2dCQUNDLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQztTQUU1QjtJQUNGLENBQUM7Ozs7OztJQUVPLGFBQWEsQ0FBQyxXQUFtQjs7Y0FFbEMsa0JBQWtCLEdBQUcsV0FBVyxDQUFDLGlCQUFpQixFQUFFO1FBRTFELFFBQVEsa0JBQWtCLEVBQUU7WUFFM0IsS0FBSyxNQUFNO2dCQUNWLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztZQUV6QixLQUFLLE1BQU07Z0JBQ1YsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBRXpCLEtBQUssS0FBSztnQkFDVCxPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUM7WUFFeEI7Z0JBQ0MsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO1NBRXpCO0lBRUYsQ0FBQzs7Ozs7O0lBRU8sV0FBVyxDQUFDLFdBQTJCO1FBRTlDLFFBQVEsV0FBVyxFQUFFO1lBRXBCLEtBQUssY0FBYyxDQUFDLElBQUk7Z0JBQ3ZCLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztZQUV6QixLQUFLLGNBQWMsQ0FBQyxJQUFJO2dCQUN2QixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFFekIsS0FBSyxjQUFjLENBQUMsR0FBRztnQkFDdEIsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFDO1lBRXhCO2dCQUNDLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztTQUV6QjtJQUVGLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEd1aVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluLWFwaS9ndWkuZ3JpZC5wdWJsaWMtYXBpJztcbmltcG9ydCB7IFJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi1hcGkvcm93LWNvbG9yaW5nJztcblxuXG5leHBvcnQgY2xhc3MgR3VpR3JpZFJvd0NvbG9yaW5nQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KHJvd0NvbG9yaW5nOiBzdHJpbmcgfCBHdWlSb3dDb2xvcmluZyk6IFJvd0NvbG9yaW5nIHtcblxuXHRcdGlmICh0eXBlb2Ygcm93Q29sb3JpbmcgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0U3RyaW5nKHJvd0NvbG9yaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydEVudW0ocm93Q29sb3JpbmcpO1xuXHRcdH1cblxuXHR9XG5cblx0Y29udmVydFRvR3VpUm93Q29sb3JpbmcodmFsdWU6IFJvd0NvbG9yaW5nKTogR3VpUm93Q29sb3Jpbmcge1xuXHRcdHN3aXRjaCAodmFsdWUpIHtcblxuXHRcdFx0Y2FzZSBSb3dDb2xvcmluZy5OT05FOlxuXHRcdFx0XHRyZXR1cm4gR3VpUm93Q29sb3JpbmcuTk9ORTtcblxuXHRcdFx0Y2FzZSBSb3dDb2xvcmluZy5FVkVOOlxuXHRcdFx0XHRyZXR1cm4gR3VpUm93Q29sb3JpbmcuRVZFTjtcblxuXHRcdFx0Y2FzZSBSb3dDb2xvcmluZy5PREQ6XG5cdFx0XHRcdHJldHVybiBHdWlSb3dDb2xvcmluZy5PREQ7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBHdWlSb3dDb2xvcmluZy5FVkVOO1xuXG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0U3RyaW5nKHJvd0NvbG9yaW5nOiBzdHJpbmcpOiBSb3dDb2xvcmluZyB7XG5cblx0XHRjb25zdCBsb3dlcmVkUm93Q29sb3JpbmcgPSByb3dDb2xvcmluZy50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuXG5cdFx0c3dpdGNoIChsb3dlcmVkUm93Q29sb3JpbmcpIHtcblxuXHRcdFx0Y2FzZSAnbm9uZSc6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5OT05FO1xuXG5cdFx0XHRjYXNlICdldmVuJzpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLkVWRU47XG5cblx0XHRcdGNhc2UgJ29kZCc6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5PREQ7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5FVkVOO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRFbnVtKHJvd0NvbG9yaW5nOiBHdWlSb3dDb2xvcmluZyk6IFJvd0NvbG9yaW5nIHtcblxuXHRcdHN3aXRjaCAocm93Q29sb3JpbmcpIHtcblxuXHRcdFx0Y2FzZSBHdWlSb3dDb2xvcmluZy5OT05FOlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuTk9ORTtcblxuXHRcdFx0Y2FzZSBHdWlSb3dDb2xvcmluZy5FVkVOOlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuRVZFTjtcblxuXHRcdFx0Y2FzZSBHdWlSb3dDb2xvcmluZy5PREQ6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5PREQ7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5FVkVOO1xuXG5cdFx0fVxuXG5cdH1cblxufVxuIl19