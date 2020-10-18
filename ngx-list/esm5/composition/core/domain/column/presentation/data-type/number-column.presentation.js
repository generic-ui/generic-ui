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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWNvbHVtbi5wcmVzZW50YXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbHVtbi9wcmVzZW50YXRpb24vZGF0YS10eXBlL251bWJlci1jb2x1bW4ucHJlc2VudGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUkzQztJQUE4QyxvREFBa0I7SUFXL0Q7ZUFDQyxpQkFBTztJQUNSLENBQUM7Ozs7SUFYTSxvQ0FBVzs7O0lBQWxCO1FBQ0MsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFFBQVEsRUFBRTtZQUN2Qyx3QkFBd0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSx3QkFBd0IsRUFBRSxDQUFDO1NBQ25FO1FBQ0QsT0FBTyx3QkFBd0IsQ0FBQyxRQUFRLENBQUM7SUFDMUMsQ0FBQzs7OztJQVFELG1EQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTztZQUNOLFFBQVEsQ0FBQyxJQUFJO1lBQ2IsUUFBUSxDQUFDLEdBQUc7WUFDWixRQUFRLENBQUMsY0FBYztZQUN2QixRQUFRLENBQUMsVUFBVTtTQUNuQixDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELGlEQUFjOzs7SUFBZDtRQUNDLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELGtEQUFlOzs7O0lBQWYsVUFBZ0IsSUFBZ0I7UUFDL0IsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFyQmMsaUNBQVEsR0FBNkIsSUFBSSxDQUFDO0lBc0IxRCwrQkFBQztDQUFBLEFBL0JELENBQThDLGtCQUFrQixHQStCL0Q7U0EvQlksd0JBQXdCOzs7Ozs7SUFTcEMsa0NBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uUHJlc2VudGF0aW9uIH0gZnJvbSAnLi4vY29sdW1uLnByZXNlbnRhdGlvbic7XG5pbXBvcnQgeyBDb2x1bW5BbGlnbiB9IGZyb20gJy4uLy4uL2NvbHVtbi1hbGlnbic7XG5pbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uL2NlbGwtdmlldyc7XG5pbXBvcnQgeyBWaWV3RW50aXR5IH0gZnJvbSAnLi4vLi4vdmlldy5lbnRpdHknO1xuXG5cbmV4cG9ydCBjbGFzcyBOdW1iZXJDb2x1bW5QcmVzZW50YXRpb24gZXh0ZW5kcyBDb2x1bW5QcmVzZW50YXRpb24ge1xuXG5cdHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBOdW1iZXJDb2x1bW5QcmVzZW50YXRpb24ge1xuXHRcdGlmICghTnVtYmVyQ29sdW1uUHJlc2VudGF0aW9uLmluc3RhbmNlKSB7XG5cdFx0XHROdW1iZXJDb2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2UgPSBuZXcgTnVtYmVyQ29sdW1uUHJlc2VudGF0aW9uKCk7XG5cdFx0fVxuXHRcdHJldHVybiBOdW1iZXJDb2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2U7XG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogTnVtYmVyQ29sdW1uUHJlc2VudGF0aW9uID0gbnVsbDtcblxuXHRwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXRQb3NzaWJsZVZpZXdzKCk6IEFycmF5PENlbGxWaWV3PiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdENlbGxWaWV3LlRFWFQsXG5cdFx0XHRDZWxsVmlldy5CQVIsXG5cdFx0XHRDZWxsVmlldy5QRVJDRU5UQUdFX0JBUixcblx0XHRcdENlbGxWaWV3LlBFUkNFTlRBR0Vcblx0XHRdO1xuXHR9XG5cblx0Z2V0RGVmYXVsdFZpZXcoKTogQ2VsbFZpZXcge1xuXHRcdHJldHVybiBDZWxsVmlldy5OVU1CRVI7XG5cdH1cblxuXHRnZXREZWZhdWx0QWxpZ24odmlldzogVmlld0VudGl0eSk6IENvbHVtbkFsaWduIHtcblx0XHRyZXR1cm4gQ29sdW1uQWxpZ24uUklHSFQ7XG5cdH1cbn1cbiJdfQ==