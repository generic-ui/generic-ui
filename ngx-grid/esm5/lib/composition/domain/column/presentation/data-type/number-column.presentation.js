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
     * @return {?}
     */
    NumberColumnPresentation.prototype.getDefaultAlign = /**
     * @return {?}
     */
    function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWNvbHVtbi5wcmVzZW50YXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL3ByZXNlbnRhdGlvbi9kYXRhLXR5cGUvbnVtYmVyLWNvbHVtbi5wcmVzZW50YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRzNDO0lBQThDLG9EQUFrQjtJQVcvRDtlQUNDLGlCQUFPO0lBQ1IsQ0FBQzs7OztJQVhNLG9DQUFXOzs7SUFBbEI7UUFDQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsUUFBUSxFQUFFO1lBQ3ZDLHdCQUF3QixDQUFDLFFBQVEsR0FBRyxJQUFJLHdCQUF3QixFQUFFLENBQUM7U0FDbkU7UUFDRCxPQUFPLHdCQUF3QixDQUFDLFFBQVEsQ0FBQztJQUMxQyxDQUFDOzs7O0lBUUQsbURBQWdCOzs7SUFBaEI7UUFDQyxPQUFPO1lBQ04sUUFBUSxDQUFDLElBQUk7WUFDYixRQUFRLENBQUMsR0FBRztZQUNaLFFBQVEsQ0FBQyxjQUFjO1lBQ3ZCLFFBQVEsQ0FBQyxVQUFVO1NBQ25CLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsaURBQWM7OztJQUFkO1FBQ0MsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxrREFBZTs7O0lBQWY7UUFDQyxPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQXJCYyxpQ0FBUSxHQUE2QixJQUFJLENBQUM7SUFzQjFELCtCQUFDO0NBQUEsQUEvQkQsQ0FBOEMsa0JBQWtCLEdBK0IvRDtTQS9CWSx3QkFBd0I7Ozs7OztJQVNwQyxrQ0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5QcmVzZW50YXRpb24gfSBmcm9tICcuLi9jb2x1bW4ucHJlc2VudGF0aW9uJztcbmltcG9ydCB7IENvbHVtbkFsaWduIH0gZnJvbSAnLi4vLi4vY29sdW1uLWFsaWduJztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vY2VsbC12aWV3JztcblxuXG5leHBvcnQgY2xhc3MgTnVtYmVyQ29sdW1uUHJlc2VudGF0aW9uIGV4dGVuZHMgQ29sdW1uUHJlc2VudGF0aW9uIHtcblxuXHRzdGF0aWMgZ2V0SW5zdGFuY2UoKTogTnVtYmVyQ29sdW1uUHJlc2VudGF0aW9uIHtcblx0XHRpZiAoIU51bWJlckNvbHVtblByZXNlbnRhdGlvbi5pbnN0YW5jZSkge1xuXHRcdFx0TnVtYmVyQ29sdW1uUHJlc2VudGF0aW9uLmluc3RhbmNlID0gbmV3IE51bWJlckNvbHVtblByZXNlbnRhdGlvbigpO1xuXHRcdH1cblx0XHRyZXR1cm4gTnVtYmVyQ29sdW1uUHJlc2VudGF0aW9uLmluc3RhbmNlO1xuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IE51bWJlckNvbHVtblByZXNlbnRhdGlvbiA9IG51bGw7XG5cblx0cHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0UG9zc2libGVWaWV3cygpOiBBcnJheTxDZWxsVmlldz4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHRDZWxsVmlldy5URVhULFxuXHRcdFx0Q2VsbFZpZXcuQkFSLFxuXHRcdFx0Q2VsbFZpZXcuUEVSQ0VOVEFHRV9CQVIsXG5cdFx0XHRDZWxsVmlldy5QRVJDRU5UQUdFXG5cdFx0XTtcblx0fVxuXG5cdGdldERlZmF1bHRWaWV3KCk6IENlbGxWaWV3IHtcblx0XHRyZXR1cm4gQ2VsbFZpZXcuTlVNQkVSO1xuXHR9XG5cblx0Z2V0RGVmYXVsdEFsaWduKCk6IENvbHVtbkFsaWduIHtcblx0XHRyZXR1cm4gQ29sdW1uQWxpZ24uUklHSFQ7XG5cdH1cbn1cbiJdfQ==