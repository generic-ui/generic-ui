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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1jb2x1bW4ucHJlc2VudGF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9kb21haW4vY29sdW1uL3ByZXNlbnRhdGlvbi9kYXRhLXR5cGUvZGF0ZS1jb2x1bW4ucHJlc2VudGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUczQztJQUE0QyxrREFBa0I7SUFXN0Q7ZUFDQyxpQkFBTztJQUNSLENBQUM7Ozs7SUFYTSxrQ0FBVzs7O0lBQWxCO1FBQ0MsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsRUFBRTtZQUNyQyxzQkFBc0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSxzQkFBc0IsRUFBRSxDQUFDO1NBQy9EO1FBQ0QsT0FBTyxzQkFBc0IsQ0FBQyxRQUFRLENBQUM7SUFDeEMsQ0FBQzs7OztJQVFELGlEQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTztZQUNOLFFBQVEsQ0FBQyxJQUFJO1lBQ2IsUUFBUSxDQUFDLElBQUk7WUFDYixRQUFRLENBQUMsTUFBTTtZQUNmLFFBQVEsQ0FBQyxJQUFJO1lBQ2IsUUFBUSxDQUFDLElBQUk7U0FDYixDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELCtDQUFjOzs7SUFBZDtRQUNDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsZ0RBQWU7OztJQUFmO1FBQ0MsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUF0QmMsK0JBQVEsR0FBMkIsSUFBSSxDQUFDO0lBdUJ4RCw2QkFBQztDQUFBLEFBaENELENBQTRDLGtCQUFrQixHQWdDN0Q7U0FoQ1ksc0JBQXNCOzs7Ozs7SUFTbEMsZ0NBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uUHJlc2VudGF0aW9uIH0gZnJvbSAnLi4vY29sdW1uLnByZXNlbnRhdGlvbic7XG5pbXBvcnQgeyBDb2x1bW5BbGlnbiB9IGZyb20gJy4uLy4uL2NvbHVtbi1hbGlnbic7XG5pbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uL2NlbGwtdmlldyc7XG5cblxuZXhwb3J0IGNsYXNzIERhdGVDb2x1bW5QcmVzZW50YXRpb24gZXh0ZW5kcyBDb2x1bW5QcmVzZW50YXRpb24ge1xuXG5cdHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBEYXRlQ29sdW1uUHJlc2VudGF0aW9uIHtcblx0XHRpZiAoIURhdGVDb2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2UpIHtcblx0XHRcdERhdGVDb2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2UgPSBuZXcgRGF0ZUNvbHVtblByZXNlbnRhdGlvbigpO1xuXHRcdH1cblx0XHRyZXR1cm4gRGF0ZUNvbHVtblByZXNlbnRhdGlvbi5pbnN0YW5jZTtcblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBEYXRlQ29sdW1uUHJlc2VudGF0aW9uID0gbnVsbDtcblxuXHRwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXRQb3NzaWJsZVZpZXdzKCk6IEFycmF5PENlbGxWaWV3PiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdENlbGxWaWV3LkRBVEUsXG5cdFx0XHRDZWxsVmlldy5URVhULFxuXHRcdFx0Q2VsbFZpZXcuSVRBTElDLFxuXHRcdFx0Q2VsbFZpZXcuQk9MRCxcblx0XHRcdENlbGxWaWV3LkNISVBcblx0XHRdO1xuXHR9XG5cblx0Z2V0RGVmYXVsdFZpZXcoKTogQ2VsbFZpZXcge1xuXHRcdHJldHVybiBDZWxsVmlldy5EQVRFO1xuXHR9XG5cblx0Z2V0RGVmYXVsdEFsaWduKCk6IENvbHVtbkFsaWduIHtcblx0XHRyZXR1cm4gQ29sdW1uQWxpZ24uTEVGVDtcblx0fVxufVxuIl19