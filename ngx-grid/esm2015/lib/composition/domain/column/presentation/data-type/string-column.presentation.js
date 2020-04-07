/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ColumnPresentation } from '../column.presentation';
import { ColumnAlign } from '../../column-align';
import { CellView } from '../../cell-view';
export class StringColumnPresentation extends ColumnPresentation {
    /**
     * @private
     */
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    static getInstance() {
        if (!StringColumnPresentation.instance) {
            StringColumnPresentation.instance = new StringColumnPresentation();
        }
        return StringColumnPresentation.instance;
    }
    /**
     * @return {?}
     */
    getPossibleViews() {
        return [
            CellView.TEXT,
            CellView.ITALIC,
            CellView.BOLD,
            CellView.IMAGE,
            CellView.LINK,
            CellView.CHIP
        ];
    }
    /**
     * @return {?}
     */
    getDefaultView() {
        return CellView.TEXT;
    }
    /**
     * @return {?}
     */
    getDefaultAlign() {
        return ColumnAlign.LEFT;
    }
}
StringColumnPresentation.instance = null;
if (false) {
    /**
     * @type {?}
     * @private
     */
    StringColumnPresentation.instance;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWNvbHVtbi5wcmVzZW50YXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL3ByZXNlbnRhdGlvbi9kYXRhLXR5cGUvc3RyaW5nLWNvbHVtbi5wcmVzZW50YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHM0MsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGtCQUFrQjs7OztJQVcvRDtRQUNDLEtBQUssRUFBRSxDQUFDO0lBQ1QsQ0FBQzs7OztJQVhELE1BQU0sQ0FBQyxXQUFXO1FBQ2pCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLEVBQUU7WUFDdkMsd0JBQXdCLENBQUMsUUFBUSxHQUFHLElBQUksd0JBQXdCLEVBQUUsQ0FBQztTQUNuRTtRQUNELE9BQU8sd0JBQXdCLENBQUMsUUFBUSxDQUFDO0lBQzFDLENBQUM7Ozs7SUFRRCxnQkFBZ0I7UUFDZixPQUFPO1lBQ04sUUFBUSxDQUFDLElBQUk7WUFDYixRQUFRLENBQUMsTUFBTTtZQUNmLFFBQVEsQ0FBQyxJQUFJO1lBQ2IsUUFBUSxDQUFDLEtBQUs7WUFDZCxRQUFRLENBQUMsSUFBSTtZQUNiLFFBQVEsQ0FBQyxJQUFJO1NBQ2IsQ0FBQztJQUNILENBQUM7Ozs7SUFFRCxjQUFjO1FBQ2IsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQ3pCLENBQUM7O0FBdkJjLGlDQUFRLEdBQTZCLElBQUksQ0FBQzs7Ozs7O0lBQXpELGtDQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtblByZXNlbnRhdGlvbiB9IGZyb20gJy4uL2NvbHVtbi5wcmVzZW50YXRpb24nO1xuaW1wb3J0IHsgQ29sdW1uQWxpZ24gfSBmcm9tICcuLi8uLi9jb2x1bW4tYWxpZ24nO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi9jZWxsLXZpZXcnO1xuXG5cbmV4cG9ydCBjbGFzcyBTdHJpbmdDb2x1bW5QcmVzZW50YXRpb24gZXh0ZW5kcyBDb2x1bW5QcmVzZW50YXRpb24ge1xuXG5cdHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBTdHJpbmdDb2x1bW5QcmVzZW50YXRpb24ge1xuXHRcdGlmICghU3RyaW5nQ29sdW1uUHJlc2VudGF0aW9uLmluc3RhbmNlKSB7XG5cdFx0XHRTdHJpbmdDb2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2UgPSBuZXcgU3RyaW5nQ29sdW1uUHJlc2VudGF0aW9uKCk7XG5cdFx0fVxuXHRcdHJldHVybiBTdHJpbmdDb2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2U7XG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogU3RyaW5nQ29sdW1uUHJlc2VudGF0aW9uID0gbnVsbDtcblxuXHRwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXRQb3NzaWJsZVZpZXdzKCk6IEFycmF5PENlbGxWaWV3PiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdENlbGxWaWV3LlRFWFQsXG5cdFx0XHRDZWxsVmlldy5JVEFMSUMsXG5cdFx0XHRDZWxsVmlldy5CT0xELFxuXHRcdFx0Q2VsbFZpZXcuSU1BR0UsXG5cdFx0XHRDZWxsVmlldy5MSU5LLFxuXHRcdFx0Q2VsbFZpZXcuQ0hJUFxuXHRcdF07XG5cdH1cblxuXHRnZXREZWZhdWx0VmlldygpOiBDZWxsVmlldyB7XG5cdFx0cmV0dXJuIENlbGxWaWV3LlRFWFQ7XG5cdH1cblxuXHRnZXREZWZhdWx0QWxpZ24oKTogQ29sdW1uQWxpZ24ge1xuXHRcdHJldHVybiBDb2x1bW5BbGlnbi5MRUZUO1xuXHR9XG59XG4iXX0=