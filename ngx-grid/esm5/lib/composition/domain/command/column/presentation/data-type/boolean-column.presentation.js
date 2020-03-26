/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ValueObject } from '@generic-ui/hermes';
import { ColumnPresentation } from '../column.presentation';
import { ColumnAlign } from '../../../../column-align';
import { CellView } from '../../../../cell-view';
var BooleanColumnPresentation = /** @class */ (function (_super) {
    tslib_1.__extends(BooleanColumnPresentation, _super);
    function BooleanColumnPresentation() {
        return _super.call(this) || this;
    }
    BooleanColumnPresentation_1 = BooleanColumnPresentation;
    /**
     * @return {?}
     */
    BooleanColumnPresentation.getInstance = /**
     * @return {?}
     */
    function () {
        if (!BooleanColumnPresentation_1.instance) {
            BooleanColumnPresentation_1.instance = new BooleanColumnPresentation_1();
        }
        return BooleanColumnPresentation_1.instance;
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
    var BooleanColumnPresentation_1;
    BooleanColumnPresentation.instance = null;
    BooleanColumnPresentation = BooleanColumnPresentation_1 = tslib_1.__decorate([
        ValueObject,
        tslib_1.__metadata("design:paramtypes", [])
    ], BooleanColumnPresentation);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1jb2x1bW4ucHJlc2VudGF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbW1hbmQvY29sdW1uL3ByZXNlbnRhdGlvbi9kYXRhLXR5cGUvYm9vbGVhbi1jb2x1bW4ucHJlc2VudGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWpELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0lBSUYscURBQWtCO0lBV2hFO2VBQ0MsaUJBQU87SUFDUixDQUFDO2tDQWJXLHlCQUF5Qjs7OztJQUU5QixxQ0FBVzs7O0lBQWxCO1FBQ0MsSUFBSSxDQUFDLDJCQUF5QixDQUFDLFFBQVEsRUFBRTtZQUN4QywyQkFBeUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSwyQkFBeUIsRUFBRSxDQUFDO1NBQ3JFO1FBQ0QsT0FBTywyQkFBeUIsQ0FBQyxRQUFRLENBQUM7SUFDM0MsQ0FBQzs7OztJQVFELG9EQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTztZQUNOLFFBQVEsQ0FBQyxJQUFJO1lBQ2IsUUFBUSxDQUFDLE1BQU07WUFDZixRQUFRLENBQUMsSUFBSTtZQUNiLFFBQVEsQ0FBQyxJQUFJO1lBQ2IsUUFBUSxDQUFDLFFBQVE7U0FDakIsQ0FBQztJQUNILENBQUM7Ozs7SUFFRCxrREFBYzs7O0lBQWQ7UUFDQyxPQUFPLFFBQVEsQ0FBQyxRQUFRLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELG1EQUFlOzs7SUFBZjtRQUNDLE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQztJQUMzQixDQUFDOztJQXRCYyxrQ0FBUSxHQUE4QixJQUFJLENBQUM7SUFUOUMseUJBQXlCO1FBRHJDLFdBQVc7O09BQ0MseUJBQXlCLENBZ0NyQztJQUFELGdDQUFDO0NBQUEsQ0FoQzhDLGtCQUFrQixHQWdDaEU7U0FoQ1kseUJBQXlCOzs7Ozs7SUFTckMsbUNBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsdWVPYmplY3QgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb2x1bW5QcmVzZW50YXRpb24gfSBmcm9tICcuLi9jb2x1bW4ucHJlc2VudGF0aW9uJztcbmltcG9ydCB7IENvbHVtbkFsaWduIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29sdW1uLWFsaWduJztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vLi4vLi4vY2VsbC12aWV3JztcblxuXG5AVmFsdWVPYmplY3RcbmV4cG9ydCBjbGFzcyBCb29sZWFuQ29sdW1uUHJlc2VudGF0aW9uIGV4dGVuZHMgQ29sdW1uUHJlc2VudGF0aW9uIHtcblxuXHRzdGF0aWMgZ2V0SW5zdGFuY2UoKTogQm9vbGVhbkNvbHVtblByZXNlbnRhdGlvbiB7XG5cdFx0aWYgKCFCb29sZWFuQ29sdW1uUHJlc2VudGF0aW9uLmluc3RhbmNlKSB7XG5cdFx0XHRCb29sZWFuQ29sdW1uUHJlc2VudGF0aW9uLmluc3RhbmNlID0gbmV3IEJvb2xlYW5Db2x1bW5QcmVzZW50YXRpb24oKTtcblx0XHR9XG5cdFx0cmV0dXJuIEJvb2xlYW5Db2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2U7XG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogQm9vbGVhbkNvbHVtblByZXNlbnRhdGlvbiA9IG51bGw7XG5cblx0cHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0UG9zc2libGVWaWV3cygpOiBBcnJheTxDZWxsVmlldz4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHRDZWxsVmlldy5URVhULFxuXHRcdFx0Q2VsbFZpZXcuSVRBTElDLFxuXHRcdFx0Q2VsbFZpZXcuQ0hJUCxcblx0XHRcdENlbGxWaWV3LkJPTEQsXG5cdFx0XHRDZWxsVmlldy5DSEVDS0JPWFxuXHRcdF07XG5cdH1cblxuXHRnZXREZWZhdWx0VmlldygpOiBDZWxsVmlldyB7XG5cdFx0cmV0dXJuIENlbGxWaWV3LkNIRUNLQk9YO1xuXHR9XG5cblx0Z2V0RGVmYXVsdEFsaWduKCk6IENvbHVtbkFsaWduIHtcblx0XHRyZXR1cm4gQ29sdW1uQWxpZ24uQ0VOVEVSO1xuXHR9XG59XG4iXX0=