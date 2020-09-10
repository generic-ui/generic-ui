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
        return CellView.TEXT;
    };
    /**
     * @param {?} view
     * @return {?}
     */
    BooleanColumnPresentation.prototype.getDefaultAlign = /**
     * @param {?} view
     * @return {?}
     */
    function (view) {
        if (view.getCellView() === CellView.CHECKBOX) {
            return ColumnAlign.CENTER;
        }
        else {
            return ColumnAlign.LEFT;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1jb2x1bW4ucHJlc2VudGF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9kb21haW4vY29sdW1uL3ByZXNlbnRhdGlvbi9kYXRhLXR5cGUvYm9vbGVhbi1jb2x1bW4ucHJlc2VudGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUkzQztJQUErQyxxREFBa0I7SUFXaEU7ZUFDQyxpQkFBTztJQUNSLENBQUM7Ozs7SUFYTSxxQ0FBVzs7O0lBQWxCO1FBQ0MsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFFBQVEsRUFBRTtZQUN4Qyx5QkFBeUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSx5QkFBeUIsRUFBRSxDQUFDO1NBQ3JFO1FBQ0QsT0FBTyx5QkFBeUIsQ0FBQyxRQUFRLENBQUM7SUFDM0MsQ0FBQzs7OztJQVFELG9EQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTztZQUNOLFFBQVEsQ0FBQyxJQUFJO1lBQ2IsUUFBUSxDQUFDLE1BQU07WUFDZixRQUFRLENBQUMsSUFBSTtZQUNiLFFBQVEsQ0FBQyxJQUFJO1lBQ2IsUUFBUSxDQUFDLFFBQVE7U0FDakIsQ0FBQztJQUNILENBQUM7Ozs7SUFFRCxrREFBYzs7O0lBQWQ7UUFDQyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxtREFBZTs7OztJQUFmLFVBQWdCLElBQWdCO1FBRS9CLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLFFBQVEsQ0FBQyxRQUFRLEVBQUU7WUFDN0MsT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFDO1NBQzFCO2FBQU07WUFDTixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7U0FDeEI7SUFFRixDQUFDO0lBNUJjLGtDQUFRLEdBQThCLElBQUksQ0FBQztJQTZCM0QsZ0NBQUM7Q0FBQSxBQXRDRCxDQUErQyxrQkFBa0IsR0FzQ2hFO1NBdENZLHlCQUF5Qjs7Ozs7O0lBU3JDLG1DQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtblByZXNlbnRhdGlvbiB9IGZyb20gJy4uL2NvbHVtbi5wcmVzZW50YXRpb24nO1xuaW1wb3J0IHsgQ29sdW1uQWxpZ24gfSBmcm9tICcuLi8uLi9jb2x1bW4tYWxpZ24nO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi9jZWxsLXZpZXcnO1xuaW1wb3J0IHsgVmlld0VudGl0eSB9IGZyb20gJy4uLy4uL3ZpZXcuZW50aXR5JztcblxuXG5leHBvcnQgY2xhc3MgQm9vbGVhbkNvbHVtblByZXNlbnRhdGlvbiBleHRlbmRzIENvbHVtblByZXNlbnRhdGlvbiB7XG5cblx0c3RhdGljIGdldEluc3RhbmNlKCk6IEJvb2xlYW5Db2x1bW5QcmVzZW50YXRpb24ge1xuXHRcdGlmICghQm9vbGVhbkNvbHVtblByZXNlbnRhdGlvbi5pbnN0YW5jZSkge1xuXHRcdFx0Qm9vbGVhbkNvbHVtblByZXNlbnRhdGlvbi5pbnN0YW5jZSA9IG5ldyBCb29sZWFuQ29sdW1uUHJlc2VudGF0aW9uKCk7XG5cdFx0fVxuXHRcdHJldHVybiBCb29sZWFuQ29sdW1uUHJlc2VudGF0aW9uLmluc3RhbmNlO1xuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEJvb2xlYW5Db2x1bW5QcmVzZW50YXRpb24gPSBudWxsO1xuXG5cdHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldFBvc3NpYmxlVmlld3MoKTogQXJyYXk8Q2VsbFZpZXc+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0Q2VsbFZpZXcuVEVYVCxcblx0XHRcdENlbGxWaWV3LklUQUxJQyxcblx0XHRcdENlbGxWaWV3LkNISVAsXG5cdFx0XHRDZWxsVmlldy5CT0xELFxuXHRcdFx0Q2VsbFZpZXcuQ0hFQ0tCT1hcblx0XHRdO1xuXHR9XG5cblx0Z2V0RGVmYXVsdFZpZXcoKTogQ2VsbFZpZXcge1xuXHRcdHJldHVybiBDZWxsVmlldy5URVhUO1xuXHR9XG5cblx0Z2V0RGVmYXVsdEFsaWduKHZpZXc6IFZpZXdFbnRpdHkpOiBDb2x1bW5BbGlnbiB7XG5cblx0XHRpZiAodmlldy5nZXRDZWxsVmlldygpID09PSBDZWxsVmlldy5DSEVDS0JPWCkge1xuXHRcdFx0cmV0dXJuIENvbHVtbkFsaWduLkNFTlRFUjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIENvbHVtbkFsaWduLkxFRlQ7XG5cdFx0fVxuXG5cdH1cbn1cbiJdfQ==