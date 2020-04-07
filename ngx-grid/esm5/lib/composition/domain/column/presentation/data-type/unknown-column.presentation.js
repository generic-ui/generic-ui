/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ColumnPresentation } from '../column.presentation';
import { ColumnAlign } from '../../column-align';
import { CellView } from '../../cell-view';
var UnknownColumnPresentation = /** @class */ (function (_super) {
    tslib_1.__extends(UnknownColumnPresentation, _super);
    function UnknownColumnPresentation() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    UnknownColumnPresentation.getInstance = /**
     * @return {?}
     */
    function () {
        if (!UnknownColumnPresentation.instance) {
            UnknownColumnPresentation.instance = new UnknownColumnPresentation();
        }
        return UnknownColumnPresentation.instance;
    };
    /**
     * @return {?}
     */
    UnknownColumnPresentation.prototype.getPossibleViews = /**
     * @return {?}
     */
    function () {
        return [
            CellView.TEXT
        ];
    };
    /**
     * @return {?}
     */
    UnknownColumnPresentation.prototype.getDefaultView = /**
     * @return {?}
     */
    function () {
        return CellView.TEXT;
    };
    /**
     * @return {?}
     */
    UnknownColumnPresentation.prototype.getDefaultAlign = /**
     * @return {?}
     */
    function () {
        return ColumnAlign.LEFT;
    };
    UnknownColumnPresentation.instance = null;
    return UnknownColumnPresentation;
}(ColumnPresentation));
export { UnknownColumnPresentation };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UnknownColumnPresentation.instance;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5rbm93bi1jb2x1bW4ucHJlc2VudGF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9wcmVzZW50YXRpb24vZGF0YS10eXBlL3Vua25vd24tY29sdW1uLnByZXNlbnRhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHM0M7SUFBK0MscURBQWtCO0lBV2hFO2VBQ0MsaUJBQU87SUFDUixDQUFDOzs7O0lBWE0scUNBQVc7OztJQUFsQjtRQUNDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLEVBQUU7WUFDeEMseUJBQXlCLENBQUMsUUFBUSxHQUFHLElBQUkseUJBQXlCLEVBQUUsQ0FBQztTQUNyRTtRQUNELE9BQU8seUJBQXlCLENBQUMsUUFBUSxDQUFDO0lBQzNDLENBQUM7Ozs7SUFRRCxvREFBZ0I7OztJQUFoQjtRQUNDLE9BQU87WUFDTixRQUFRLENBQUMsSUFBSTtTQUNiLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsa0RBQWM7OztJQUFkO1FBQ0MsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxtREFBZTs7O0lBQWY7UUFDQyxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQWxCYyxrQ0FBUSxHQUE4QixJQUFJLENBQUM7SUFtQjNELGdDQUFDO0NBQUEsQUE1QkQsQ0FBK0Msa0JBQWtCLEdBNEJoRTtTQTVCWSx5QkFBeUI7Ozs7OztJQVNyQyxtQ0FBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5QcmVzZW50YXRpb24gfSBmcm9tICcuLi9jb2x1bW4ucHJlc2VudGF0aW9uJztcbmltcG9ydCB7IENvbHVtbkFsaWduIH0gZnJvbSAnLi4vLi4vY29sdW1uLWFsaWduJztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vY2VsbC12aWV3JztcblxuXG5leHBvcnQgY2xhc3MgVW5rbm93bkNvbHVtblByZXNlbnRhdGlvbiBleHRlbmRzIENvbHVtblByZXNlbnRhdGlvbiB7XG5cblx0c3RhdGljIGdldEluc3RhbmNlKCk6IFVua25vd25Db2x1bW5QcmVzZW50YXRpb24ge1xuXHRcdGlmICghVW5rbm93bkNvbHVtblByZXNlbnRhdGlvbi5pbnN0YW5jZSkge1xuXHRcdFx0VW5rbm93bkNvbHVtblByZXNlbnRhdGlvbi5pbnN0YW5jZSA9IG5ldyBVbmtub3duQ29sdW1uUHJlc2VudGF0aW9uKCk7XG5cdFx0fVxuXHRcdHJldHVybiBVbmtub3duQ29sdW1uUHJlc2VudGF0aW9uLmluc3RhbmNlO1xuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFVua25vd25Db2x1bW5QcmVzZW50YXRpb24gPSBudWxsO1xuXG5cdHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldFBvc3NpYmxlVmlld3MoKTogQXJyYXk8Q2VsbFZpZXc+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0Q2VsbFZpZXcuVEVYVFxuXHRcdF07XG5cdH1cblxuXHRnZXREZWZhdWx0VmlldygpOiBDZWxsVmlldyB7XG5cdFx0cmV0dXJuIENlbGxWaWV3LlRFWFQ7XG5cdH1cblxuXHRnZXREZWZhdWx0QWxpZ24oKTogQ29sdW1uQWxpZ24ge1xuXHRcdHJldHVybiBDb2x1bW5BbGlnbi5MRUZUO1xuXHR9XG59XG4iXX0=