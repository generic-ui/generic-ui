/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ColumnPresentation } from '../column.presentation';
import { ColumnAlign } from '../../column-align';
import { CellView } from '../../cell-view';
var DateColumnPresentation = /** @class */ (function (_super) {
    tslib_1.__extends(DateColumnPresentation, _super);
    function DateColumnPresentation() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    DateColumnPresentation.getInstance = /**
     * @return {?}
     */
    function () {
        if (!DateColumnPresentation.instance) {
            DateColumnPresentation.instance = new DateColumnPresentation();
        }
        return DateColumnPresentation.instance;
    };
    /**
     * @return {?}
     */
    DateColumnPresentation.prototype.getPossibleViews = /**
     * @return {?}
     */
    function () {
        return [
            CellView.DATE,
            CellView.TEXT,
            CellView.ITALIC,
            CellView.BOLD,
            CellView.CHIP
        ];
    };
    /**
     * @return {?}
     */
    DateColumnPresentation.prototype.getDefaultView = /**
     * @return {?}
     */
    function () {
        return CellView.DATE;
    };
    /**
     * @return {?}
     */
    DateColumnPresentation.prototype.getDefaultAlign = /**
     * @return {?}
     */
    function () {
        return ColumnAlign.LEFT;
    };
    DateColumnPresentation.instance = null;
    return DateColumnPresentation;
}(ColumnPresentation));
export { DateColumnPresentation };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DateColumnPresentation.instance;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1jb2x1bW4ucHJlc2VudGF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb2x1bW4vcHJlc2VudGF0aW9uL2RhdGEtdHlwZS9kYXRlLWNvbHVtbi5wcmVzZW50YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRzNDO0lBQTRDLGtEQUFrQjtJQVc3RDtlQUNDLGlCQUFPO0lBQ1IsQ0FBQzs7OztJQVhNLGtDQUFXOzs7SUFBbEI7UUFDQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxFQUFFO1lBQ3JDLHNCQUFzQixDQUFDLFFBQVEsR0FBRyxJQUFJLHNCQUFzQixFQUFFLENBQUM7U0FDL0Q7UUFDRCxPQUFPLHNCQUFzQixDQUFDLFFBQVEsQ0FBQztJQUN4QyxDQUFDOzs7O0lBUUQsaURBQWdCOzs7SUFBaEI7UUFDQyxPQUFPO1lBQ04sUUFBUSxDQUFDLElBQUk7WUFDYixRQUFRLENBQUMsSUFBSTtZQUNiLFFBQVEsQ0FBQyxNQUFNO1lBQ2YsUUFBUSxDQUFDLElBQUk7WUFDYixRQUFRLENBQUMsSUFBSTtTQUNiLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsK0NBQWM7OztJQUFkO1FBQ0MsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxnREFBZTs7O0lBQWY7UUFDQyxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQXRCYywrQkFBUSxHQUEyQixJQUFJLENBQUM7SUF1QnhELDZCQUFDO0NBQUEsQUFoQ0QsQ0FBNEMsa0JBQWtCLEdBZ0M3RDtTQWhDWSxzQkFBc0I7Ozs7OztJQVNsQyxnQ0FBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5QcmVzZW50YXRpb24gfSBmcm9tICcuLi9jb2x1bW4ucHJlc2VudGF0aW9uJztcbmltcG9ydCB7IENvbHVtbkFsaWduIH0gZnJvbSAnLi4vLi4vY29sdW1uLWFsaWduJztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vY2VsbC12aWV3JztcblxuXG5leHBvcnQgY2xhc3MgRGF0ZUNvbHVtblByZXNlbnRhdGlvbiBleHRlbmRzIENvbHVtblByZXNlbnRhdGlvbiB7XG5cblx0c3RhdGljIGdldEluc3RhbmNlKCk6IERhdGVDb2x1bW5QcmVzZW50YXRpb24ge1xuXHRcdGlmICghRGF0ZUNvbHVtblByZXNlbnRhdGlvbi5pbnN0YW5jZSkge1xuXHRcdFx0RGF0ZUNvbHVtblByZXNlbnRhdGlvbi5pbnN0YW5jZSA9IG5ldyBEYXRlQ29sdW1uUHJlc2VudGF0aW9uKCk7XG5cdFx0fVxuXHRcdHJldHVybiBEYXRlQ29sdW1uUHJlc2VudGF0aW9uLmluc3RhbmNlO1xuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IERhdGVDb2x1bW5QcmVzZW50YXRpb24gPSBudWxsO1xuXG5cdHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldFBvc3NpYmxlVmlld3MoKTogQXJyYXk8Q2VsbFZpZXc+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0Q2VsbFZpZXcuREFURSxcblx0XHRcdENlbGxWaWV3LlRFWFQsXG5cdFx0XHRDZWxsVmlldy5JVEFMSUMsXG5cdFx0XHRDZWxsVmlldy5CT0xELFxuXHRcdFx0Q2VsbFZpZXcuQ0hJUFxuXHRcdF07XG5cdH1cblxuXHRnZXREZWZhdWx0VmlldygpOiBDZWxsVmlldyB7XG5cdFx0cmV0dXJuIENlbGxWaWV3LkRBVEU7XG5cdH1cblxuXHRnZXREZWZhdWx0QWxpZ24oKTogQ29sdW1uQWxpZ24ge1xuXHRcdHJldHVybiBDb2x1bW5BbGlnbi5MRUZUO1xuXHR9XG59XG4iXX0=