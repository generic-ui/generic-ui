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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1jb2x1bW4ucHJlc2VudGF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9wcmVzZW50YXRpb24vZGF0YS10eXBlL2Jvb2xlYW4tY29sdW1uLnByZXNlbnRhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJM0M7SUFBK0MscURBQWtCO0lBV2hFO2VBQ0MsaUJBQU87SUFDUixDQUFDOzs7O0lBWE0scUNBQVc7OztJQUFsQjtRQUNDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLEVBQUU7WUFDeEMseUJBQXlCLENBQUMsUUFBUSxHQUFHLElBQUkseUJBQXlCLEVBQUUsQ0FBQztTQUNyRTtRQUNELE9BQU8seUJBQXlCLENBQUMsUUFBUSxDQUFDO0lBQzNDLENBQUM7Ozs7SUFRRCxvREFBZ0I7OztJQUFoQjtRQUNDLE9BQU87WUFDTixRQUFRLENBQUMsSUFBSTtZQUNiLFFBQVEsQ0FBQyxNQUFNO1lBQ2YsUUFBUSxDQUFDLElBQUk7WUFDYixRQUFRLENBQUMsSUFBSTtZQUNiLFFBQVEsQ0FBQyxRQUFRO1NBQ2pCLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsa0RBQWM7OztJQUFkO1FBQ0MsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsbURBQWU7Ozs7SUFBZixVQUFnQixJQUFnQjtRQUUvQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxRQUFRLENBQUMsUUFBUSxFQUFFO1lBQzdDLE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQztTQUMxQjthQUFNO1lBQ04sT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO1NBQ3hCO0lBRUYsQ0FBQztJQTVCYyxrQ0FBUSxHQUE4QixJQUFJLENBQUM7SUE2QjNELGdDQUFDO0NBQUEsQUF0Q0QsQ0FBK0Msa0JBQWtCLEdBc0NoRTtTQXRDWSx5QkFBeUI7Ozs7OztJQVNyQyxtQ0FBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5QcmVzZW50YXRpb24gfSBmcm9tICcuLi9jb2x1bW4ucHJlc2VudGF0aW9uJztcbmltcG9ydCB7IENvbHVtbkFsaWduIH0gZnJvbSAnLi4vLi4vY29sdW1uLWFsaWduJztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vY2VsbC12aWV3JztcbmltcG9ydCB7IFZpZXdFbnRpdHkgfSBmcm9tICcuLi8uLi92aWV3LmVudGl0eSc7XG5cblxuZXhwb3J0IGNsYXNzIEJvb2xlYW5Db2x1bW5QcmVzZW50YXRpb24gZXh0ZW5kcyBDb2x1bW5QcmVzZW50YXRpb24ge1xuXG5cdHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBCb29sZWFuQ29sdW1uUHJlc2VudGF0aW9uIHtcblx0XHRpZiAoIUJvb2xlYW5Db2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2UpIHtcblx0XHRcdEJvb2xlYW5Db2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2UgPSBuZXcgQm9vbGVhbkNvbHVtblByZXNlbnRhdGlvbigpO1xuXHRcdH1cblx0XHRyZXR1cm4gQm9vbGVhbkNvbHVtblByZXNlbnRhdGlvbi5pbnN0YW5jZTtcblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBCb29sZWFuQ29sdW1uUHJlc2VudGF0aW9uID0gbnVsbDtcblxuXHRwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXRQb3NzaWJsZVZpZXdzKCk6IEFycmF5PENlbGxWaWV3PiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdENlbGxWaWV3LlRFWFQsXG5cdFx0XHRDZWxsVmlldy5JVEFMSUMsXG5cdFx0XHRDZWxsVmlldy5DSElQLFxuXHRcdFx0Q2VsbFZpZXcuQk9MRCxcblx0XHRcdENlbGxWaWV3LkNIRUNLQk9YXG5cdFx0XTtcblx0fVxuXG5cdGdldERlZmF1bHRWaWV3KCk6IENlbGxWaWV3IHtcblx0XHRyZXR1cm4gQ2VsbFZpZXcuVEVYVDtcblx0fVxuXG5cdGdldERlZmF1bHRBbGlnbih2aWV3OiBWaWV3RW50aXR5KTogQ29sdW1uQWxpZ24ge1xuXG5cdFx0aWYgKHZpZXcuZ2V0Q2VsbFZpZXcoKSA9PT0gQ2VsbFZpZXcuQ0hFQ0tCT1gpIHtcblx0XHRcdHJldHVybiBDb2x1bW5BbGlnbi5DRU5URVI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBDb2x1bW5BbGlnbi5MRUZUO1xuXHRcdH1cblxuXHR9XG59XG4iXX0=