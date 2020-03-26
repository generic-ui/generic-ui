/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ValueObject } from '@generic-ui/hermes';
import { ColumnPresentation } from '../column.presentation';
import { ColumnAlign } from '../../../../column-align';
import { CellView } from '../../../../cell-view';
var NumberColumnPresentation = /** @class */ (function (_super) {
    tslib_1.__extends(NumberColumnPresentation, _super);
    function NumberColumnPresentation() {
        return _super.call(this) || this;
    }
    NumberColumnPresentation_1 = NumberColumnPresentation;
    /**
     * @return {?}
     */
    NumberColumnPresentation.getInstance = /**
     * @return {?}
     */
    function () {
        if (!NumberColumnPresentation_1.instance) {
            NumberColumnPresentation_1.instance = new NumberColumnPresentation_1();
        }
        return NumberColumnPresentation_1.instance;
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
    var NumberColumnPresentation_1;
    NumberColumnPresentation.instance = null;
    NumberColumnPresentation = NumberColumnPresentation_1 = tslib_1.__decorate([
        ValueObject,
        tslib_1.__metadata("design:paramtypes", [])
    ], NumberColumnPresentation);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWNvbHVtbi5wcmVzZW50YXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29tbWFuZC9jb2x1bW4vcHJlc2VudGF0aW9uL2RhdGEtdHlwZS9udW1iZXItY29sdW1uLnByZXNlbnRhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztJQUlILG9EQUFrQjtJQVcvRDtlQUNDLGlCQUFPO0lBQ1IsQ0FBQztpQ0FiVyx3QkFBd0I7Ozs7SUFFN0Isb0NBQVc7OztJQUFsQjtRQUNDLElBQUksQ0FBQywwQkFBd0IsQ0FBQyxRQUFRLEVBQUU7WUFDdkMsMEJBQXdCLENBQUMsUUFBUSxHQUFHLElBQUksMEJBQXdCLEVBQUUsQ0FBQztTQUNuRTtRQUNELE9BQU8sMEJBQXdCLENBQUMsUUFBUSxDQUFDO0lBQzFDLENBQUM7Ozs7SUFRRCxtREFBZ0I7OztJQUFoQjtRQUNDLE9BQU87WUFDTixRQUFRLENBQUMsSUFBSTtZQUNiLFFBQVEsQ0FBQyxHQUFHO1lBQ1osUUFBUSxDQUFDLGNBQWM7WUFDdkIsUUFBUSxDQUFDLFVBQVU7U0FDbkIsQ0FBQztJQUNILENBQUM7Ozs7SUFFRCxpREFBYzs7O0lBQWQ7UUFDQyxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELGtEQUFlOzs7SUFBZjtRQUNDLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQztJQUMxQixDQUFDOztJQXJCYyxpQ0FBUSxHQUE2QixJQUFJLENBQUM7SUFUN0Msd0JBQXdCO1FBRHBDLFdBQVc7O09BQ0Msd0JBQXdCLENBK0JwQztJQUFELCtCQUFDO0NBQUEsQ0EvQjZDLGtCQUFrQixHQStCL0Q7U0EvQlksd0JBQXdCOzs7Ozs7SUFTcEMsa0NBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsdWVPYmplY3QgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb2x1bW5QcmVzZW50YXRpb24gfSBmcm9tICcuLi9jb2x1bW4ucHJlc2VudGF0aW9uJztcbmltcG9ydCB7IENvbHVtbkFsaWduIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29sdW1uLWFsaWduJztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vLi4vLi4vY2VsbC12aWV3JztcblxuXG5AVmFsdWVPYmplY3RcbmV4cG9ydCBjbGFzcyBOdW1iZXJDb2x1bW5QcmVzZW50YXRpb24gZXh0ZW5kcyBDb2x1bW5QcmVzZW50YXRpb24ge1xuXG5cdHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBOdW1iZXJDb2x1bW5QcmVzZW50YXRpb24ge1xuXHRcdGlmICghTnVtYmVyQ29sdW1uUHJlc2VudGF0aW9uLmluc3RhbmNlKSB7XG5cdFx0XHROdW1iZXJDb2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2UgPSBuZXcgTnVtYmVyQ29sdW1uUHJlc2VudGF0aW9uKCk7XG5cdFx0fVxuXHRcdHJldHVybiBOdW1iZXJDb2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2U7XG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogTnVtYmVyQ29sdW1uUHJlc2VudGF0aW9uID0gbnVsbDtcblxuXHRwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXRQb3NzaWJsZVZpZXdzKCk6IEFycmF5PENlbGxWaWV3PiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdENlbGxWaWV3LlRFWFQsXG5cdFx0XHRDZWxsVmlldy5CQVIsXG5cdFx0XHRDZWxsVmlldy5QRVJDRU5UQUdFX0JBUixcblx0XHRcdENlbGxWaWV3LlBFUkNFTlRBR0Vcblx0XHRdO1xuXHR9XG5cblx0Z2V0RGVmYXVsdFZpZXcoKTogQ2VsbFZpZXcge1xuXHRcdHJldHVybiBDZWxsVmlldy5OVU1CRVI7XG5cdH1cblxuXHRnZXREZWZhdWx0QWxpZ24oKTogQ29sdW1uQWxpZ24ge1xuXHRcdHJldHVybiBDb2x1bW5BbGlnbi5SSUdIVDtcblx0fVxufVxuIl19