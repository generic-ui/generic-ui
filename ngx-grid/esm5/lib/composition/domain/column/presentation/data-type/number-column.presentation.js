/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ColumnPresentation } from '../column.presentation';
import { ColumnAlign } from '../../column-align';
import { CellView } from '../../cell-view';
var NumberColumnPresentation = /** @class */ (function (_super) {
    tslib_1.__extends(NumberColumnPresentation, _super);
    function NumberColumnPresentation() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    NumberColumnPresentation.getInstance = /**
     * @return {?}
     */
    function () {
        if (!NumberColumnPresentation.instance) {
            NumberColumnPresentation.instance = new NumberColumnPresentation();
        }
        return NumberColumnPresentation.instance;
    };
    /**
     * @return {?}
     */
    NumberColumnPresentation.prototype.getPossibleViews = /**
     * @return {?}
     */
    function () {
        return [
            CellView.TEXT,
            CellView.BAR,
            CellView.PERCENTAGE_BAR,
            CellView.PERCENTAGE
        ];
    };
    /**
     * @return {?}
     */
    NumberColumnPresentation.prototype.getDefaultView = /**
     * @return {?}
     */
    function () {
        return CellView.NUMBER;
    };
    /**
     * @param {?} view
     * @return {?}
     */
    NumberColumnPresentation.prototype.getDefaultAlign = /**
     * @param {?} view
     * @return {?}
     */
    function (view) {
        return ColumnAlign.RIGHT;
    };
    NumberColumnPresentation.instance = null;
    return NumberColumnPresentation;
}(ColumnPresentation));
export { NumberColumnPresentation };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NumberColumnPresentation.instance;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWNvbHVtbi5wcmVzZW50YXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL3ByZXNlbnRhdGlvbi9kYXRhLXR5cGUvbnVtYmVyLWNvbHVtbi5wcmVzZW50YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSTNDO0lBQThDLG9EQUFrQjtJQVcvRDtlQUNDLGlCQUFPO0lBQ1IsQ0FBQzs7OztJQVhNLG9DQUFXOzs7SUFBbEI7UUFDQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsUUFBUSxFQUFFO1lBQ3ZDLHdCQUF3QixDQUFDLFFBQVEsR0FBRyxJQUFJLHdCQUF3QixFQUFFLENBQUM7U0FDbkU7UUFDRCxPQUFPLHdCQUF3QixDQUFDLFFBQVEsQ0FBQztJQUMxQyxDQUFDOzs7O0lBUUQsbURBQWdCOzs7SUFBaEI7UUFDQyxPQUFPO1lBQ04sUUFBUSxDQUFDLElBQUk7WUFDYixRQUFRLENBQUMsR0FBRztZQUNaLFFBQVEsQ0FBQyxjQUFjO1lBQ3ZCLFFBQVEsQ0FBQyxVQUFVO1NBQ25CLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsaURBQWM7OztJQUFkO1FBQ0MsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsa0RBQWU7Ozs7SUFBZixVQUFnQixJQUFnQjtRQUMvQixPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQXJCYyxpQ0FBUSxHQUE2QixJQUFJLENBQUM7SUFzQjFELCtCQUFDO0NBQUEsQUEvQkQsQ0FBOEMsa0JBQWtCLEdBK0IvRDtTQS9CWSx3QkFBd0I7Ozs7OztJQVNwQyxrQ0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5QcmVzZW50YXRpb24gfSBmcm9tICcuLi9jb2x1bW4ucHJlc2VudGF0aW9uJztcbmltcG9ydCB7IENvbHVtbkFsaWduIH0gZnJvbSAnLi4vLi4vY29sdW1uLWFsaWduJztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vY2VsbC12aWV3JztcbmltcG9ydCB7IFZpZXdFbnRpdHkgfSBmcm9tICcuLi8uLi92aWV3LmVudGl0eSc7XG5cblxuZXhwb3J0IGNsYXNzIE51bWJlckNvbHVtblByZXNlbnRhdGlvbiBleHRlbmRzIENvbHVtblByZXNlbnRhdGlvbiB7XG5cblx0c3RhdGljIGdldEluc3RhbmNlKCk6IE51bWJlckNvbHVtblByZXNlbnRhdGlvbiB7XG5cdFx0aWYgKCFOdW1iZXJDb2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2UpIHtcblx0XHRcdE51bWJlckNvbHVtblByZXNlbnRhdGlvbi5pbnN0YW5jZSA9IG5ldyBOdW1iZXJDb2x1bW5QcmVzZW50YXRpb24oKTtcblx0XHR9XG5cdFx0cmV0dXJuIE51bWJlckNvbHVtblByZXNlbnRhdGlvbi5pbnN0YW5jZTtcblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBOdW1iZXJDb2x1bW5QcmVzZW50YXRpb24gPSBudWxsO1xuXG5cdHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldFBvc3NpYmxlVmlld3MoKTogQXJyYXk8Q2VsbFZpZXc+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0Q2VsbFZpZXcuVEVYVCxcblx0XHRcdENlbGxWaWV3LkJBUixcblx0XHRcdENlbGxWaWV3LlBFUkNFTlRBR0VfQkFSLFxuXHRcdFx0Q2VsbFZpZXcuUEVSQ0VOVEFHRVxuXHRcdF07XG5cdH1cblxuXHRnZXREZWZhdWx0VmlldygpOiBDZWxsVmlldyB7XG5cdFx0cmV0dXJuIENlbGxWaWV3Lk5VTUJFUjtcblx0fVxuXG5cdGdldERlZmF1bHRBbGlnbih2aWV3OiBWaWV3RW50aXR5KTogQ29sdW1uQWxpZ24ge1xuXHRcdHJldHVybiBDb2x1bW5BbGlnbi5SSUdIVDtcblx0fVxufVxuIl19