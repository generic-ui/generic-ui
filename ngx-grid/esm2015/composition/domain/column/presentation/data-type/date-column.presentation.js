/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ColumnPresentation } from '../column.presentation';
import { ColumnAlign } from '../../column-align';
import { CellView } from '../../cell-view';
export class DateColumnPresentation extends ColumnPresentation {
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
        if (!DateColumnPresentation.instance) {
            DateColumnPresentation.instance = new DateColumnPresentation();
        }
        return DateColumnPresentation.instance;
    }
    /**
     * @return {?}
     */
    getPossibleViews() {
        return [
            CellView.DATE,
            CellView.TEXT,
            CellView.ITALIC,
            CellView.BOLD,
            CellView.CHIP
        ];
    }
    /**
     * @return {?}
     */
    getDefaultView() {
        return CellView.DATE;
    }
    /**
     * @return {?}
     */
    getDefaultAlign() {
        return ColumnAlign.LEFT;
    }
}
DateColumnPresentation.instance = null;
if (false) {
    /**
     * @type {?}
     * @private
     */
    DateColumnPresentation.instance;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1jb2x1bW4ucHJlc2VudGF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9kb21haW4vY29sdW1uL3ByZXNlbnRhdGlvbi9kYXRhLXR5cGUvZGF0ZS1jb2x1bW4ucHJlc2VudGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRzNDLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxrQkFBa0I7Ozs7SUFXN0Q7UUFDQyxLQUFLLEVBQUUsQ0FBQztJQUNULENBQUM7Ozs7SUFYRCxNQUFNLENBQUMsV0FBVztRQUNqQixJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxFQUFFO1lBQ3JDLHNCQUFzQixDQUFDLFFBQVEsR0FBRyxJQUFJLHNCQUFzQixFQUFFLENBQUM7U0FDL0Q7UUFDRCxPQUFPLHNCQUFzQixDQUFDLFFBQVEsQ0FBQztJQUN4QyxDQUFDOzs7O0lBUUQsZ0JBQWdCO1FBQ2YsT0FBTztZQUNOLFFBQVEsQ0FBQyxJQUFJO1lBQ2IsUUFBUSxDQUFDLElBQUk7WUFDYixRQUFRLENBQUMsTUFBTTtZQUNmLFFBQVEsQ0FBQyxJQUFJO1lBQ2IsUUFBUSxDQUFDLElBQUk7U0FDYixDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELGNBQWM7UUFDYixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDekIsQ0FBQzs7QUF0QmMsK0JBQVEsR0FBMkIsSUFBSSxDQUFDOzs7Ozs7SUFBdkQsZ0NBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uUHJlc2VudGF0aW9uIH0gZnJvbSAnLi4vY29sdW1uLnByZXNlbnRhdGlvbic7XG5pbXBvcnQgeyBDb2x1bW5BbGlnbiB9IGZyb20gJy4uLy4uL2NvbHVtbi1hbGlnbic7XG5pbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uL2NlbGwtdmlldyc7XG5cblxuZXhwb3J0IGNsYXNzIERhdGVDb2x1bW5QcmVzZW50YXRpb24gZXh0ZW5kcyBDb2x1bW5QcmVzZW50YXRpb24ge1xuXG5cdHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBEYXRlQ29sdW1uUHJlc2VudGF0aW9uIHtcblx0XHRpZiAoIURhdGVDb2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2UpIHtcblx0XHRcdERhdGVDb2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2UgPSBuZXcgRGF0ZUNvbHVtblByZXNlbnRhdGlvbigpO1xuXHRcdH1cblx0XHRyZXR1cm4gRGF0ZUNvbHVtblByZXNlbnRhdGlvbi5pbnN0YW5jZTtcblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBEYXRlQ29sdW1uUHJlc2VudGF0aW9uID0gbnVsbDtcblxuXHRwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXRQb3NzaWJsZVZpZXdzKCk6IEFycmF5PENlbGxWaWV3PiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdENlbGxWaWV3LkRBVEUsXG5cdFx0XHRDZWxsVmlldy5URVhULFxuXHRcdFx0Q2VsbFZpZXcuSVRBTElDLFxuXHRcdFx0Q2VsbFZpZXcuQk9MRCxcblx0XHRcdENlbGxWaWV3LkNISVBcblx0XHRdO1xuXHR9XG5cblx0Z2V0RGVmYXVsdFZpZXcoKTogQ2VsbFZpZXcge1xuXHRcdHJldHVybiBDZWxsVmlldy5EQVRFO1xuXHR9XG5cblx0Z2V0RGVmYXVsdEFsaWduKCk6IENvbHVtbkFsaWduIHtcblx0XHRyZXR1cm4gQ29sdW1uQWxpZ24uTEVGVDtcblx0fVxufVxuIl19