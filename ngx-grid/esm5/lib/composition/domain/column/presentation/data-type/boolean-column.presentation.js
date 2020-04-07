/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ColumnPresentation } from '../column.presentation';
import { ColumnAlign } from '../../column-align';
import { CellView } from '../../cell-view';
var BooleanColumnPresentation = /** @class */ (function (_super) {
    tslib_1.__extends(BooleanColumnPresentation, _super);
    function BooleanColumnPresentation() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    BooleanColumnPresentation.getInstance = /**
     * @return {?}
     */
    function () {
        if (!BooleanColumnPresentation.instance) {
            BooleanColumnPresentation.instance = new BooleanColumnPresentation();
        }
        return BooleanColumnPresentation.instance;
    };
    /**
     * @return {?}
     */
    BooleanColumnPresentation.prototype.getPossibleViews = /**
     * @return {?}
     */
    function () {
        return [
            CellView.TEXT,
            CellView.ITALIC,
            CellView.CHIP,
            CellView.BOLD,
            CellView.CHECKBOX
        ];
    };
    /**
     * @return {?}
     */
    BooleanColumnPresentation.prototype.getDefaultView = /**
     * @return {?}
     */
    function () {
        return CellView.CHECKBOX;
    };
    /**
     * @return {?}
     */
    BooleanColumnPresentation.prototype.getDefaultAlign = /**
     * @return {?}
     */
    function () {
        return ColumnAlign.CENTER;
    };
    BooleanColumnPresentation.instance = null;
    return BooleanColumnPresentation;
}(ColumnPresentation));
export { BooleanColumnPresentation };
if (false) {
    /**
     * @type {?}
     * @private
     */
    BooleanColumnPresentation.instance;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1jb2x1bW4ucHJlc2VudGF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9wcmVzZW50YXRpb24vZGF0YS10eXBlL2Jvb2xlYW4tY29sdW1uLnByZXNlbnRhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHM0M7SUFBK0MscURBQWtCO0lBV2hFO2VBQ0MsaUJBQU87SUFDUixDQUFDOzs7O0lBWE0scUNBQVc7OztJQUFsQjtRQUNDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLEVBQUU7WUFDeEMseUJBQXlCLENBQUMsUUFBUSxHQUFHLElBQUkseUJBQXlCLEVBQUUsQ0FBQztTQUNyRTtRQUNELE9BQU8seUJBQXlCLENBQUMsUUFBUSxDQUFDO0lBQzNDLENBQUM7Ozs7SUFRRCxvREFBZ0I7OztJQUFoQjtRQUNDLE9BQU87WUFDTixRQUFRLENBQUMsSUFBSTtZQUNiLFFBQVEsQ0FBQyxNQUFNO1lBQ2YsUUFBUSxDQUFDLElBQUk7WUFDYixRQUFRLENBQUMsSUFBSTtZQUNiLFFBQVEsQ0FBQyxRQUFRO1NBQ2pCLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsa0RBQWM7OztJQUFkO1FBQ0MsT0FBTyxRQUFRLENBQUMsUUFBUSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxtREFBZTs7O0lBQWY7UUFDQyxPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUM7SUFDM0IsQ0FBQztJQXRCYyxrQ0FBUSxHQUE4QixJQUFJLENBQUM7SUF1QjNELGdDQUFDO0NBQUEsQUFoQ0QsQ0FBK0Msa0JBQWtCLEdBZ0NoRTtTQWhDWSx5QkFBeUI7Ozs7OztJQVNyQyxtQ0FBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5QcmVzZW50YXRpb24gfSBmcm9tICcuLi9jb2x1bW4ucHJlc2VudGF0aW9uJztcbmltcG9ydCB7IENvbHVtbkFsaWduIH0gZnJvbSAnLi4vLi4vY29sdW1uLWFsaWduJztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vY2VsbC12aWV3JztcblxuXG5leHBvcnQgY2xhc3MgQm9vbGVhbkNvbHVtblByZXNlbnRhdGlvbiBleHRlbmRzIENvbHVtblByZXNlbnRhdGlvbiB7XG5cblx0c3RhdGljIGdldEluc3RhbmNlKCk6IEJvb2xlYW5Db2x1bW5QcmVzZW50YXRpb24ge1xuXHRcdGlmICghQm9vbGVhbkNvbHVtblByZXNlbnRhdGlvbi5pbnN0YW5jZSkge1xuXHRcdFx0Qm9vbGVhbkNvbHVtblByZXNlbnRhdGlvbi5pbnN0YW5jZSA9IG5ldyBCb29sZWFuQ29sdW1uUHJlc2VudGF0aW9uKCk7XG5cdFx0fVxuXHRcdHJldHVybiBCb29sZWFuQ29sdW1uUHJlc2VudGF0aW9uLmluc3RhbmNlO1xuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEJvb2xlYW5Db2x1bW5QcmVzZW50YXRpb24gPSBudWxsO1xuXG5cdHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldFBvc3NpYmxlVmlld3MoKTogQXJyYXk8Q2VsbFZpZXc+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0Q2VsbFZpZXcuVEVYVCxcblx0XHRcdENlbGxWaWV3LklUQUxJQyxcblx0XHRcdENlbGxWaWV3LkNISVAsXG5cdFx0XHRDZWxsVmlldy5CT0xELFxuXHRcdFx0Q2VsbFZpZXcuQ0hFQ0tCT1hcblx0XHRdO1xuXHR9XG5cblx0Z2V0RGVmYXVsdFZpZXcoKTogQ2VsbFZpZXcge1xuXHRcdHJldHVybiBDZWxsVmlldy5DSEVDS0JPWDtcblx0fVxuXG5cdGdldERlZmF1bHRBbGlnbigpOiBDb2x1bW5BbGlnbiB7XG5cdFx0cmV0dXJuIENvbHVtbkFsaWduLkNFTlRFUjtcblx0fVxufVxuIl19