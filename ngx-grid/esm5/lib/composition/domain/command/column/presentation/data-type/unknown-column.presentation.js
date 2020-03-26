/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ValueObject } from '@generic-ui/hermes';
import { ColumnPresentation } from '../column.presentation';
import { ColumnAlign } from '../../../../column-align';
import { CellView } from '../../../../cell-view';
var UnknownColumnPresentation = /** @class */ (function (_super) {
    tslib_1.__extends(UnknownColumnPresentation, _super);
    function UnknownColumnPresentation() {
        return _super.call(this) || this;
    }
    UnknownColumnPresentation_1 = UnknownColumnPresentation;
    /**
     * @return {?}
     */
    UnknownColumnPresentation.getInstance = /**
     * @return {?}
     */
    function () {
        if (!UnknownColumnPresentation_1.instance) {
            UnknownColumnPresentation_1.instance = new UnknownColumnPresentation_1();
        }
        return UnknownColumnPresentation_1.instance;
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
    var UnknownColumnPresentation_1;
    UnknownColumnPresentation.instance = null;
    UnknownColumnPresentation = UnknownColumnPresentation_1 = tslib_1.__decorate([
        ValueObject,
        tslib_1.__metadata("design:paramtypes", [])
    ], UnknownColumnPresentation);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5rbm93bi1jb2x1bW4ucHJlc2VudGF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbW1hbmQvY29sdW1uL3ByZXNlbnRhdGlvbi9kYXRhLXR5cGUvdW5rbm93bi1jb2x1bW4ucHJlc2VudGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWpELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0lBSUYscURBQWtCO0lBV2hFO2VBQ0MsaUJBQU87SUFDUixDQUFDO2tDQWJXLHlCQUF5Qjs7OztJQUU5QixxQ0FBVzs7O0lBQWxCO1FBQ0MsSUFBSSxDQUFDLDJCQUF5QixDQUFDLFFBQVEsRUFBRTtZQUN4QywyQkFBeUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSwyQkFBeUIsRUFBRSxDQUFDO1NBQ3JFO1FBQ0QsT0FBTywyQkFBeUIsQ0FBQyxRQUFRLENBQUM7SUFDM0MsQ0FBQzs7OztJQVFELG9EQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTztZQUNOLFFBQVEsQ0FBQyxJQUFJO1NBQ2IsQ0FBQztJQUNILENBQUM7Ozs7SUFFRCxrREFBYzs7O0lBQWQ7UUFDQyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELG1EQUFlOzs7SUFBZjtRQUNDLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztJQUN6QixDQUFDOztJQWxCYyxrQ0FBUSxHQUE4QixJQUFJLENBQUM7SUFUOUMseUJBQXlCO1FBRHJDLFdBQVc7O09BQ0MseUJBQXlCLENBNEJyQztJQUFELGdDQUFDO0NBQUEsQ0E1QjhDLGtCQUFrQixHQTRCaEU7U0E1QlkseUJBQXlCOzs7Ozs7SUFTckMsbUNBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsdWVPYmplY3QgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb2x1bW5QcmVzZW50YXRpb24gfSBmcm9tICcuLi9jb2x1bW4ucHJlc2VudGF0aW9uJztcbmltcG9ydCB7IENvbHVtbkFsaWduIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29sdW1uLWFsaWduJztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vLi4vLi4vY2VsbC12aWV3JztcblxuXG5AVmFsdWVPYmplY3RcbmV4cG9ydCBjbGFzcyBVbmtub3duQ29sdW1uUHJlc2VudGF0aW9uIGV4dGVuZHMgQ29sdW1uUHJlc2VudGF0aW9uIHtcblxuXHRzdGF0aWMgZ2V0SW5zdGFuY2UoKTogVW5rbm93bkNvbHVtblByZXNlbnRhdGlvbiB7XG5cdFx0aWYgKCFVbmtub3duQ29sdW1uUHJlc2VudGF0aW9uLmluc3RhbmNlKSB7XG5cdFx0XHRVbmtub3duQ29sdW1uUHJlc2VudGF0aW9uLmluc3RhbmNlID0gbmV3IFVua25vd25Db2x1bW5QcmVzZW50YXRpb24oKTtcblx0XHR9XG5cdFx0cmV0dXJuIFVua25vd25Db2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2U7XG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogVW5rbm93bkNvbHVtblByZXNlbnRhdGlvbiA9IG51bGw7XG5cblx0cHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0UG9zc2libGVWaWV3cygpOiBBcnJheTxDZWxsVmlldz4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHRDZWxsVmlldy5URVhUXG5cdFx0XTtcblx0fVxuXG5cdGdldERlZmF1bHRWaWV3KCk6IENlbGxWaWV3IHtcblx0XHRyZXR1cm4gQ2VsbFZpZXcuVEVYVDtcblx0fVxuXG5cdGdldERlZmF1bHRBbGlnbigpOiBDb2x1bW5BbGlnbiB7XG5cdFx0cmV0dXJuIENvbHVtbkFsaWduLkxFRlQ7XG5cdH1cbn1cbiJdfQ==