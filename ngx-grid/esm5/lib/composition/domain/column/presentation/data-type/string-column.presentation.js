/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ColumnPresentation } from '../column.presentation';
import { ColumnAlign } from '../../column-align';
import { CellView } from '../../cell-view';
var StringColumnPresentation = /** @class */ (function (_super) {
    tslib_1.__extends(StringColumnPresentation, _super);
    function StringColumnPresentation() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    StringColumnPresentation.getInstance = /**
     * @return {?}
     */
    function () {
        if (!StringColumnPresentation.instance) {
            StringColumnPresentation.instance = new StringColumnPresentation();
        }
        return StringColumnPresentation.instance;
    };
    /**
     * @return {?}
     */
    StringColumnPresentation.prototype.getPossibleViews = /**
     * @return {?}
     */
    function () {
        return [
            CellView.TEXT,
            CellView.ITALIC,
            CellView.BOLD,
            CellView.IMAGE,
            CellView.LINK,
            CellView.CHIP
        ];
    };
    /**
     * @return {?}
     */
    StringColumnPresentation.prototype.getDefaultView = /**
     * @return {?}
     */
    function () {
        return CellView.TEXT;
    };
    /**
     * @return {?}
     */
    StringColumnPresentation.prototype.getDefaultAlign = /**
     * @return {?}
     */
    function () {
        return ColumnAlign.LEFT;
    };
    StringColumnPresentation.instance = null;
    return StringColumnPresentation;
}(ColumnPresentation));
export { StringColumnPresentation };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StringColumnPresentation.instance;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWNvbHVtbi5wcmVzZW50YXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL3ByZXNlbnRhdGlvbi9kYXRhLXR5cGUvc3RyaW5nLWNvbHVtbi5wcmVzZW50YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRzNDO0lBQThDLG9EQUFrQjtJQVcvRDtlQUNDLGlCQUFPO0lBQ1IsQ0FBQzs7OztJQVhNLG9DQUFXOzs7SUFBbEI7UUFDQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsUUFBUSxFQUFFO1lBQ3ZDLHdCQUF3QixDQUFDLFFBQVEsR0FBRyxJQUFJLHdCQUF3QixFQUFFLENBQUM7U0FDbkU7UUFDRCxPQUFPLHdCQUF3QixDQUFDLFFBQVEsQ0FBQztJQUMxQyxDQUFDOzs7O0lBUUQsbURBQWdCOzs7SUFBaEI7UUFDQyxPQUFPO1lBQ04sUUFBUSxDQUFDLElBQUk7WUFDYixRQUFRLENBQUMsTUFBTTtZQUNmLFFBQVEsQ0FBQyxJQUFJO1lBQ2IsUUFBUSxDQUFDLEtBQUs7WUFDZCxRQUFRLENBQUMsSUFBSTtZQUNiLFFBQVEsQ0FBQyxJQUFJO1NBQ2IsQ0FBQztJQUNILENBQUM7Ozs7SUFFRCxpREFBYzs7O0lBQWQ7UUFDQyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELGtEQUFlOzs7SUFBZjtRQUNDLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztJQUN6QixDQUFDO0lBdkJjLGlDQUFRLEdBQTZCLElBQUksQ0FBQztJQXdCMUQsK0JBQUM7Q0FBQSxBQWpDRCxDQUE4QyxrQkFBa0IsR0FpQy9EO1NBakNZLHdCQUF3Qjs7Ozs7O0lBU3BDLGtDQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtblByZXNlbnRhdGlvbiB9IGZyb20gJy4uL2NvbHVtbi5wcmVzZW50YXRpb24nO1xuaW1wb3J0IHsgQ29sdW1uQWxpZ24gfSBmcm9tICcuLi8uLi9jb2x1bW4tYWxpZ24nO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi9jZWxsLXZpZXcnO1xuXG5cbmV4cG9ydCBjbGFzcyBTdHJpbmdDb2x1bW5QcmVzZW50YXRpb24gZXh0ZW5kcyBDb2x1bW5QcmVzZW50YXRpb24ge1xuXG5cdHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBTdHJpbmdDb2x1bW5QcmVzZW50YXRpb24ge1xuXHRcdGlmICghU3RyaW5nQ29sdW1uUHJlc2VudGF0aW9uLmluc3RhbmNlKSB7XG5cdFx0XHRTdHJpbmdDb2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2UgPSBuZXcgU3RyaW5nQ29sdW1uUHJlc2VudGF0aW9uKCk7XG5cdFx0fVxuXHRcdHJldHVybiBTdHJpbmdDb2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2U7XG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogU3RyaW5nQ29sdW1uUHJlc2VudGF0aW9uID0gbnVsbDtcblxuXHRwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXRQb3NzaWJsZVZpZXdzKCk6IEFycmF5PENlbGxWaWV3PiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdENlbGxWaWV3LlRFWFQsXG5cdFx0XHRDZWxsVmlldy5JVEFMSUMsXG5cdFx0XHRDZWxsVmlldy5CT0xELFxuXHRcdFx0Q2VsbFZpZXcuSU1BR0UsXG5cdFx0XHRDZWxsVmlldy5MSU5LLFxuXHRcdFx0Q2VsbFZpZXcuQ0hJUFxuXHRcdF07XG5cdH1cblxuXHRnZXREZWZhdWx0VmlldygpOiBDZWxsVmlldyB7XG5cdFx0cmV0dXJuIENlbGxWaWV3LlRFWFQ7XG5cdH1cblxuXHRnZXREZWZhdWx0QWxpZ24oKTogQ29sdW1uQWxpZ24ge1xuXHRcdHJldHVybiBDb2x1bW5BbGlnbi5MRUZUO1xuXHR9XG59XG4iXX0=