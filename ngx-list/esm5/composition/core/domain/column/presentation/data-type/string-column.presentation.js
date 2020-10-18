/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ColumnPresentation } from '../column.presentation';
import { ColumnAlign } from '../../column-align';
import { CellView } from '../../cell-view';
var StringColumnPresentation = /** @class */ (function (_super) {
    tslib_1.__extends(StringColumnPresentation, _super);
    function StringColumnPresentation() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    StringColumnPresentation.getInstance = /**
     * @return {?}
     */
    function () {
        if (!StringColumnPresentation.instance) {
            StringColumnPresentation.instance = new StringColumnPresentation();
        }
        return StringColumnPresentation.instance;
    };
    /**
     * @return {?}
     */
    StringColumnPresentation.prototype.getPossibleViews = /**
     * @return {?}
     */
    function () {
        return [
            CellView.TEXT,
            CellView.ITALIC,
            CellView.BOLD,
            CellView.IMAGE,
            CellView.LINK,
            CellView.CHIP
        ];
    };
    /**
     * @return {?}
     */
    StringColumnPresentation.prototype.getDefaultView = /**
     * @return {?}
     */
    function () {
        return CellView.TEXT;
    };
    /**
     * @return {?}
     */
    StringColumnPresentation.prototype.getDefaultAlign = /**
     * @return {?}
     */
    function () {
        return ColumnAlign.LEFT;
    };
    StringColumnPresentation.instance = null;
    return StringColumnPresentation;
}(ColumnPresentation));
export { StringColumnPresentation };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StringColumnPresentation.instance;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWNvbHVtbi5wcmVzZW50YXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbHVtbi9wcmVzZW50YXRpb24vZGF0YS10eXBlL3N0cmluZy1jb2x1bW4ucHJlc2VudGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUczQztJQUE4QyxvREFBa0I7SUFXL0Q7ZUFDQyxpQkFBTztJQUNSLENBQUM7Ozs7SUFYTSxvQ0FBVzs7O0lBQWxCO1FBQ0MsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFFBQVEsRUFBRTtZQUN2Qyx3QkFBd0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSx3QkFBd0IsRUFBRSxDQUFDO1NBQ25FO1FBQ0QsT0FBTyx3QkFBd0IsQ0FBQyxRQUFRLENBQUM7SUFDMUMsQ0FBQzs7OztJQVFELG1EQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTztZQUNOLFFBQVEsQ0FBQyxJQUFJO1lBQ2IsUUFBUSxDQUFDLE1BQU07WUFDZixRQUFRLENBQUMsSUFBSTtZQUNiLFFBQVEsQ0FBQyxLQUFLO1lBQ2QsUUFBUSxDQUFDLElBQUk7WUFDYixRQUFRLENBQUMsSUFBSTtTQUNiLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsaURBQWM7OztJQUFkO1FBQ0MsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxrREFBZTs7O0lBQWY7UUFDQyxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQXZCYyxpQ0FBUSxHQUE2QixJQUFJLENBQUM7SUF3QjFELCtCQUFDO0NBQUEsQUFqQ0QsQ0FBOEMsa0JBQWtCLEdBaUMvRDtTQWpDWSx3QkFBd0I7Ozs7OztJQVNwQyxrQ0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5QcmVzZW50YXRpb24gfSBmcm9tICcuLi9jb2x1bW4ucHJlc2VudGF0aW9uJztcbmltcG9ydCB7IENvbHVtbkFsaWduIH0gZnJvbSAnLi4vLi4vY29sdW1uLWFsaWduJztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vY2VsbC12aWV3JztcblxuXG5leHBvcnQgY2xhc3MgU3RyaW5nQ29sdW1uUHJlc2VudGF0aW9uIGV4dGVuZHMgQ29sdW1uUHJlc2VudGF0aW9uIHtcblxuXHRzdGF0aWMgZ2V0SW5zdGFuY2UoKTogU3RyaW5nQ29sdW1uUHJlc2VudGF0aW9uIHtcblx0XHRpZiAoIVN0cmluZ0NvbHVtblByZXNlbnRhdGlvbi5pbnN0YW5jZSkge1xuXHRcdFx0U3RyaW5nQ29sdW1uUHJlc2VudGF0aW9uLmluc3RhbmNlID0gbmV3IFN0cmluZ0NvbHVtblByZXNlbnRhdGlvbigpO1xuXHRcdH1cblx0XHRyZXR1cm4gU3RyaW5nQ29sdW1uUHJlc2VudGF0aW9uLmluc3RhbmNlO1xuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFN0cmluZ0NvbHVtblByZXNlbnRhdGlvbiA9IG51bGw7XG5cblx0cHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0UG9zc2libGVWaWV3cygpOiBBcnJheTxDZWxsVmlldz4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHRDZWxsVmlldy5URVhULFxuXHRcdFx0Q2VsbFZpZXcuSVRBTElDLFxuXHRcdFx0Q2VsbFZpZXcuQk9MRCxcblx0XHRcdENlbGxWaWV3LklNQUdFLFxuXHRcdFx0Q2VsbFZpZXcuTElOSyxcblx0XHRcdENlbGxWaWV3LkNISVBcblx0XHRdO1xuXHR9XG5cblx0Z2V0RGVmYXVsdFZpZXcoKTogQ2VsbFZpZXcge1xuXHRcdHJldHVybiBDZWxsVmlldy5URVhUO1xuXHR9XG5cblx0Z2V0RGVmYXVsdEFsaWduKCk6IENvbHVtbkFsaWduIHtcblx0XHRyZXR1cm4gQ29sdW1uQWxpZ24uTEVGVDtcblx0fVxufVxuIl19