/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ColumnPresentation } from '../column.presentation';
import { ColumnAlign } from '../../column-align';
import { CellView } from '../../cell-view';
export class BooleanColumnPresentation extends ColumnPresentation {
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
        if (!BooleanColumnPresentation.instance) {
            BooleanColumnPresentation.instance = new BooleanColumnPresentation();
        }
        return BooleanColumnPresentation.instance;
    }
    /**
     * @return {?}
     */
    getPossibleViews() {
        return [
            CellView.TEXT,
            CellView.ITALIC,
            CellView.CHIP,
            CellView.BOLD,
            CellView.CHECKBOX
        ];
    }
    /**
     * @return {?}
     */
    getDefaultView() {
        return CellView.TEXT;
    }
    /**
     * @param {?} view
     * @return {?}
     */
    getDefaultAlign(view) {
        if (view.getCellView() === CellView.CHECKBOX) {
            return ColumnAlign.CENTER;
        }
        else {
            return ColumnAlign.LEFT;
        }
    }
}
BooleanColumnPresentation.instance = null;
if (false) {
    /**
     * @type {?}
     * @private
     */
    BooleanColumnPresentation.instance;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1jb2x1bW4ucHJlc2VudGF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9kb21haW4vY29sdW1uL3ByZXNlbnRhdGlvbi9kYXRhLXR5cGUvYm9vbGVhbi1jb2x1bW4ucHJlc2VudGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSTNDLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxrQkFBa0I7Ozs7SUFXaEU7UUFDQyxLQUFLLEVBQUUsQ0FBQztJQUNULENBQUM7Ozs7SUFYRCxNQUFNLENBQUMsV0FBVztRQUNqQixJQUFJLENBQUMseUJBQXlCLENBQUMsUUFBUSxFQUFFO1lBQ3hDLHlCQUF5QixDQUFDLFFBQVEsR0FBRyxJQUFJLHlCQUF5QixFQUFFLENBQUM7U0FDckU7UUFDRCxPQUFPLHlCQUF5QixDQUFDLFFBQVEsQ0FBQztJQUMzQyxDQUFDOzs7O0lBUUQsZ0JBQWdCO1FBQ2YsT0FBTztZQUNOLFFBQVEsQ0FBQyxJQUFJO1lBQ2IsUUFBUSxDQUFDLE1BQU07WUFDZixRQUFRLENBQUMsSUFBSTtZQUNiLFFBQVEsQ0FBQyxJQUFJO1lBQ2IsUUFBUSxDQUFDLFFBQVE7U0FDakIsQ0FBQztJQUNILENBQUM7Ozs7SUFFRCxjQUFjO1FBQ2IsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLElBQWdCO1FBRS9CLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLFFBQVEsQ0FBQyxRQUFRLEVBQUU7WUFDN0MsT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFDO1NBQzFCO2FBQU07WUFDTixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7U0FDeEI7SUFFRixDQUFDOztBQTVCYyxrQ0FBUSxHQUE4QixJQUFJLENBQUM7Ozs7OztJQUExRCxtQ0FBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5QcmVzZW50YXRpb24gfSBmcm9tICcuLi9jb2x1bW4ucHJlc2VudGF0aW9uJztcbmltcG9ydCB7IENvbHVtbkFsaWduIH0gZnJvbSAnLi4vLi4vY29sdW1uLWFsaWduJztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vY2VsbC12aWV3JztcbmltcG9ydCB7IFZpZXdFbnRpdHkgfSBmcm9tICcuLi8uLi92aWV3LmVudGl0eSc7XG5cblxuZXhwb3J0IGNsYXNzIEJvb2xlYW5Db2x1bW5QcmVzZW50YXRpb24gZXh0ZW5kcyBDb2x1bW5QcmVzZW50YXRpb24ge1xuXG5cdHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBCb29sZWFuQ29sdW1uUHJlc2VudGF0aW9uIHtcblx0XHRpZiAoIUJvb2xlYW5Db2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2UpIHtcblx0XHRcdEJvb2xlYW5Db2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2UgPSBuZXcgQm9vbGVhbkNvbHVtblByZXNlbnRhdGlvbigpO1xuXHRcdH1cblx0XHRyZXR1cm4gQm9vbGVhbkNvbHVtblByZXNlbnRhdGlvbi5pbnN0YW5jZTtcblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBCb29sZWFuQ29sdW1uUHJlc2VudGF0aW9uID0gbnVsbDtcblxuXHRwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXRQb3NzaWJsZVZpZXdzKCk6IEFycmF5PENlbGxWaWV3PiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdENlbGxWaWV3LlRFWFQsXG5cdFx0XHRDZWxsVmlldy5JVEFMSUMsXG5cdFx0XHRDZWxsVmlldy5DSElQLFxuXHRcdFx0Q2VsbFZpZXcuQk9MRCxcblx0XHRcdENlbGxWaWV3LkNIRUNLQk9YXG5cdFx0XTtcblx0fVxuXG5cdGdldERlZmF1bHRWaWV3KCk6IENlbGxWaWV3IHtcblx0XHRyZXR1cm4gQ2VsbFZpZXcuVEVYVDtcblx0fVxuXG5cdGdldERlZmF1bHRBbGlnbih2aWV3OiBWaWV3RW50aXR5KTogQ29sdW1uQWxpZ24ge1xuXG5cdFx0aWYgKHZpZXcuZ2V0Q2VsbFZpZXcoKSA9PT0gQ2VsbFZpZXcuQ0hFQ0tCT1gpIHtcblx0XHRcdHJldHVybiBDb2x1bW5BbGlnbi5DRU5URVI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBDb2x1bW5BbGlnbi5MRUZUO1xuXHRcdH1cblxuXHR9XG59XG4iXX0=