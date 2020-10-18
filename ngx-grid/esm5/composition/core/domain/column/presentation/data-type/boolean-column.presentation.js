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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1jb2x1bW4ucHJlc2VudGF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb2x1bW4vcHJlc2VudGF0aW9uL2RhdGEtdHlwZS9ib29sZWFuLWNvbHVtbi5wcmVzZW50YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSTNDO0lBQStDLHFEQUFrQjtJQVdoRTtlQUNDLGlCQUFPO0lBQ1IsQ0FBQzs7OztJQVhNLHFDQUFXOzs7SUFBbEI7UUFDQyxJQUFJLENBQUMseUJBQXlCLENBQUMsUUFBUSxFQUFFO1lBQ3hDLHlCQUF5QixDQUFDLFFBQVEsR0FBRyxJQUFJLHlCQUF5QixFQUFFLENBQUM7U0FDckU7UUFDRCxPQUFPLHlCQUF5QixDQUFDLFFBQVEsQ0FBQztJQUMzQyxDQUFDOzs7O0lBUUQsb0RBQWdCOzs7SUFBaEI7UUFDQyxPQUFPO1lBQ04sUUFBUSxDQUFDLElBQUk7WUFDYixRQUFRLENBQUMsTUFBTTtZQUNmLFFBQVEsQ0FBQyxJQUFJO1lBQ2IsUUFBUSxDQUFDLElBQUk7WUFDYixRQUFRLENBQUMsUUFBUTtTQUNqQixDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELGtEQUFjOzs7SUFBZDtRQUNDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELG1EQUFlOzs7O0lBQWYsVUFBZ0IsSUFBZ0I7UUFFL0IsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssUUFBUSxDQUFDLFFBQVEsRUFBRTtZQUM3QyxPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUM7U0FDMUI7YUFBTTtZQUNOLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztTQUN4QjtJQUVGLENBQUM7SUE1QmMsa0NBQVEsR0FBOEIsSUFBSSxDQUFDO0lBNkIzRCxnQ0FBQztDQUFBLEFBdENELENBQStDLGtCQUFrQixHQXNDaEU7U0F0Q1kseUJBQXlCOzs7Ozs7SUFTckMsbUNBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uUHJlc2VudGF0aW9uIH0gZnJvbSAnLi4vY29sdW1uLnByZXNlbnRhdGlvbic7XG5pbXBvcnQgeyBDb2x1bW5BbGlnbiB9IGZyb20gJy4uLy4uL2NvbHVtbi1hbGlnbic7XG5pbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uL2NlbGwtdmlldyc7XG5pbXBvcnQgeyBWaWV3RW50aXR5IH0gZnJvbSAnLi4vLi4vdmlldy5lbnRpdHknO1xuXG5cbmV4cG9ydCBjbGFzcyBCb29sZWFuQ29sdW1uUHJlc2VudGF0aW9uIGV4dGVuZHMgQ29sdW1uUHJlc2VudGF0aW9uIHtcblxuXHRzdGF0aWMgZ2V0SW5zdGFuY2UoKTogQm9vbGVhbkNvbHVtblByZXNlbnRhdGlvbiB7XG5cdFx0aWYgKCFCb29sZWFuQ29sdW1uUHJlc2VudGF0aW9uLmluc3RhbmNlKSB7XG5cdFx0XHRCb29sZWFuQ29sdW1uUHJlc2VudGF0aW9uLmluc3RhbmNlID0gbmV3IEJvb2xlYW5Db2x1bW5QcmVzZW50YXRpb24oKTtcblx0XHR9XG5cdFx0cmV0dXJuIEJvb2xlYW5Db2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2U7XG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogQm9vbGVhbkNvbHVtblByZXNlbnRhdGlvbiA9IG51bGw7XG5cblx0cHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0UG9zc2libGVWaWV3cygpOiBBcnJheTxDZWxsVmlldz4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHRDZWxsVmlldy5URVhULFxuXHRcdFx0Q2VsbFZpZXcuSVRBTElDLFxuXHRcdFx0Q2VsbFZpZXcuQ0hJUCxcblx0XHRcdENlbGxWaWV3LkJPTEQsXG5cdFx0XHRDZWxsVmlldy5DSEVDS0JPWFxuXHRcdF07XG5cdH1cblxuXHRnZXREZWZhdWx0VmlldygpOiBDZWxsVmlldyB7XG5cdFx0cmV0dXJuIENlbGxWaWV3LlRFWFQ7XG5cdH1cblxuXHRnZXREZWZhdWx0QWxpZ24odmlldzogVmlld0VudGl0eSk6IENvbHVtbkFsaWduIHtcblxuXHRcdGlmICh2aWV3LmdldENlbGxWaWV3KCkgPT09IENlbGxWaWV3LkNIRUNLQk9YKSB7XG5cdFx0XHRyZXR1cm4gQ29sdW1uQWxpZ24uQ0VOVEVSO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gQ29sdW1uQWxpZ24uTEVGVDtcblx0XHR9XG5cblx0fVxufVxuIl19