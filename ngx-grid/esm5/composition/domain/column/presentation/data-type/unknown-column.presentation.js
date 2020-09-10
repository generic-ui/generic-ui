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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5rbm93bi1jb2x1bW4ucHJlc2VudGF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9kb21haW4vY29sdW1uL3ByZXNlbnRhdGlvbi9kYXRhLXR5cGUvdW5rbm93bi1jb2x1bW4ucHJlc2VudGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUczQztJQUErQyxxREFBa0I7SUFXaEU7ZUFDQyxpQkFBTztJQUNSLENBQUM7Ozs7SUFYTSxxQ0FBVzs7O0lBQWxCO1FBQ0MsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFFBQVEsRUFBRTtZQUN4Qyx5QkFBeUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSx5QkFBeUIsRUFBRSxDQUFDO1NBQ3JFO1FBQ0QsT0FBTyx5QkFBeUIsQ0FBQyxRQUFRLENBQUM7SUFDM0MsQ0FBQzs7OztJQVFELG9EQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTztZQUNOLFFBQVEsQ0FBQyxJQUFJO1NBQ2IsQ0FBQztJQUNILENBQUM7Ozs7SUFFRCxrREFBYzs7O0lBQWQ7UUFDQyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELG1EQUFlOzs7SUFBZjtRQUNDLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztJQUN6QixDQUFDO0lBbEJjLGtDQUFRLEdBQThCLElBQUksQ0FBQztJQW1CM0QsZ0NBQUM7Q0FBQSxBQTVCRCxDQUErQyxrQkFBa0IsR0E0QmhFO1NBNUJZLHlCQUF5Qjs7Ozs7O0lBU3JDLG1DQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtblByZXNlbnRhdGlvbiB9IGZyb20gJy4uL2NvbHVtbi5wcmVzZW50YXRpb24nO1xuaW1wb3J0IHsgQ29sdW1uQWxpZ24gfSBmcm9tICcuLi8uLi9jb2x1bW4tYWxpZ24nO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi9jZWxsLXZpZXcnO1xuXG5cbmV4cG9ydCBjbGFzcyBVbmtub3duQ29sdW1uUHJlc2VudGF0aW9uIGV4dGVuZHMgQ29sdW1uUHJlc2VudGF0aW9uIHtcblxuXHRzdGF0aWMgZ2V0SW5zdGFuY2UoKTogVW5rbm93bkNvbHVtblByZXNlbnRhdGlvbiB7XG5cdFx0aWYgKCFVbmtub3duQ29sdW1uUHJlc2VudGF0aW9uLmluc3RhbmNlKSB7XG5cdFx0XHRVbmtub3duQ29sdW1uUHJlc2VudGF0aW9uLmluc3RhbmNlID0gbmV3IFVua25vd25Db2x1bW5QcmVzZW50YXRpb24oKTtcblx0XHR9XG5cdFx0cmV0dXJuIFVua25vd25Db2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2U7XG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogVW5rbm93bkNvbHVtblByZXNlbnRhdGlvbiA9IG51bGw7XG5cblx0cHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0UG9zc2libGVWaWV3cygpOiBBcnJheTxDZWxsVmlldz4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHRDZWxsVmlldy5URVhUXG5cdFx0XTtcblx0fVxuXG5cdGdldERlZmF1bHRWaWV3KCk6IENlbGxWaWV3IHtcblx0XHRyZXR1cm4gQ2VsbFZpZXcuVEVYVDtcblx0fVxuXG5cdGdldERlZmF1bHRBbGlnbigpOiBDb2x1bW5BbGlnbiB7XG5cdFx0cmV0dXJuIENvbHVtbkFsaWduLkxFRlQ7XG5cdH1cbn1cbiJdfQ==