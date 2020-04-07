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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1jb2x1bW4ucHJlc2VudGF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9wcmVzZW50YXRpb24vZGF0YS10eXBlL2RhdGUtY29sdW1uLnByZXNlbnRhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHM0M7SUFBNEMsa0RBQWtCO0lBVzdEO2VBQ0MsaUJBQU87SUFDUixDQUFDOzs7O0lBWE0sa0NBQVc7OztJQUFsQjtRQUNDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLEVBQUU7WUFDckMsc0JBQXNCLENBQUMsUUFBUSxHQUFHLElBQUksc0JBQXNCLEVBQUUsQ0FBQztTQUMvRDtRQUNELE9BQU8sc0JBQXNCLENBQUMsUUFBUSxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFRRCxpREFBZ0I7OztJQUFoQjtRQUNDLE9BQU87WUFDTixRQUFRLENBQUMsSUFBSTtZQUNiLFFBQVEsQ0FBQyxJQUFJO1lBQ2IsUUFBUSxDQUFDLE1BQU07WUFDZixRQUFRLENBQUMsSUFBSTtZQUNiLFFBQVEsQ0FBQyxJQUFJO1NBQ2IsQ0FBQztJQUNILENBQUM7Ozs7SUFFRCwrQ0FBYzs7O0lBQWQ7UUFDQyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELGdEQUFlOzs7SUFBZjtRQUNDLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztJQUN6QixDQUFDO0lBdEJjLCtCQUFRLEdBQTJCLElBQUksQ0FBQztJQXVCeEQsNkJBQUM7Q0FBQSxBQWhDRCxDQUE0QyxrQkFBa0IsR0FnQzdEO1NBaENZLHNCQUFzQjs7Ozs7O0lBU2xDLGdDQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtblByZXNlbnRhdGlvbiB9IGZyb20gJy4uL2NvbHVtbi5wcmVzZW50YXRpb24nO1xuaW1wb3J0IHsgQ29sdW1uQWxpZ24gfSBmcm9tICcuLi8uLi9jb2x1bW4tYWxpZ24nO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi9jZWxsLXZpZXcnO1xuXG5cbmV4cG9ydCBjbGFzcyBEYXRlQ29sdW1uUHJlc2VudGF0aW9uIGV4dGVuZHMgQ29sdW1uUHJlc2VudGF0aW9uIHtcblxuXHRzdGF0aWMgZ2V0SW5zdGFuY2UoKTogRGF0ZUNvbHVtblByZXNlbnRhdGlvbiB7XG5cdFx0aWYgKCFEYXRlQ29sdW1uUHJlc2VudGF0aW9uLmluc3RhbmNlKSB7XG5cdFx0XHREYXRlQ29sdW1uUHJlc2VudGF0aW9uLmluc3RhbmNlID0gbmV3IERhdGVDb2x1bW5QcmVzZW50YXRpb24oKTtcblx0XHR9XG5cdFx0cmV0dXJuIERhdGVDb2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2U7XG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogRGF0ZUNvbHVtblByZXNlbnRhdGlvbiA9IG51bGw7XG5cblx0cHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0UG9zc2libGVWaWV3cygpOiBBcnJheTxDZWxsVmlldz4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHRDZWxsVmlldy5EQVRFLFxuXHRcdFx0Q2VsbFZpZXcuVEVYVCxcblx0XHRcdENlbGxWaWV3LklUQUxJQyxcblx0XHRcdENlbGxWaWV3LkJPTEQsXG5cdFx0XHRDZWxsVmlldy5DSElQXG5cdFx0XTtcblx0fVxuXG5cdGdldERlZmF1bHRWaWV3KCk6IENlbGxWaWV3IHtcblx0XHRyZXR1cm4gQ2VsbFZpZXcuREFURTtcblx0fVxuXG5cdGdldERlZmF1bHRBbGlnbigpOiBDb2x1bW5BbGlnbiB7XG5cdFx0cmV0dXJuIENvbHVtbkFsaWduLkxFRlQ7XG5cdH1cbn1cbiJdfQ==