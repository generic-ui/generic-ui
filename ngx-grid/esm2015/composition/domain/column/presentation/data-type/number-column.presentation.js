/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ColumnPresentation } from '../column.presentation';
import { ColumnAlign } from '../../column-align';
import { CellView } from '../../cell-view';
export class NumberColumnPresentation extends ColumnPresentation {
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
        if (!NumberColumnPresentation.instance) {
            NumberColumnPresentation.instance = new NumberColumnPresentation();
        }
        return NumberColumnPresentation.instance;
    }
    /**
     * @return {?}
     */
    getPossibleViews() {
        return [
            CellView.TEXT,
            CellView.BAR,
            CellView.PERCENTAGE_BAR,
            CellView.PERCENTAGE
        ];
    }
    /**
     * @return {?}
     */
    getDefaultView() {
        return CellView.NUMBER;
    }
    /**
     * @param {?} view
     * @return {?}
     */
    getDefaultAlign(view) {
        return ColumnAlign.RIGHT;
    }
}
NumberColumnPresentation.instance = null;
if (false) {
    /**
     * @type {?}
     * @private
     */
    NumberColumnPresentation.instance;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWNvbHVtbi5wcmVzZW50YXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vcHJlc2VudGF0aW9uL2RhdGEtdHlwZS9udW1iZXItY29sdW1uLnByZXNlbnRhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUkzQyxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsa0JBQWtCOzs7O0lBVy9EO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDOzs7O0lBWEQsTUFBTSxDQUFDLFdBQVc7UUFDakIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFFBQVEsRUFBRTtZQUN2Qyx3QkFBd0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSx3QkFBd0IsRUFBRSxDQUFDO1NBQ25FO1FBQ0QsT0FBTyx3QkFBd0IsQ0FBQyxRQUFRLENBQUM7SUFDMUMsQ0FBQzs7OztJQVFELGdCQUFnQjtRQUNmLE9BQU87WUFDTixRQUFRLENBQUMsSUFBSTtZQUNiLFFBQVEsQ0FBQyxHQUFHO1lBQ1osUUFBUSxDQUFDLGNBQWM7WUFDdkIsUUFBUSxDQUFDLFVBQVU7U0FDbkIsQ0FBQztJQUNILENBQUM7Ozs7SUFFRCxjQUFjO1FBQ2IsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLElBQWdCO1FBQy9CLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQztJQUMxQixDQUFDOztBQXJCYyxpQ0FBUSxHQUE2QixJQUFJLENBQUM7Ozs7OztJQUF6RCxrQ0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5QcmVzZW50YXRpb24gfSBmcm9tICcuLi9jb2x1bW4ucHJlc2VudGF0aW9uJztcbmltcG9ydCB7IENvbHVtbkFsaWduIH0gZnJvbSAnLi4vLi4vY29sdW1uLWFsaWduJztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vY2VsbC12aWV3JztcbmltcG9ydCB7IFZpZXdFbnRpdHkgfSBmcm9tICcuLi8uLi92aWV3LmVudGl0eSc7XG5cblxuZXhwb3J0IGNsYXNzIE51bWJlckNvbHVtblByZXNlbnRhdGlvbiBleHRlbmRzIENvbHVtblByZXNlbnRhdGlvbiB7XG5cblx0c3RhdGljIGdldEluc3RhbmNlKCk6IE51bWJlckNvbHVtblByZXNlbnRhdGlvbiB7XG5cdFx0aWYgKCFOdW1iZXJDb2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2UpIHtcblx0XHRcdE51bWJlckNvbHVtblByZXNlbnRhdGlvbi5pbnN0YW5jZSA9IG5ldyBOdW1iZXJDb2x1bW5QcmVzZW50YXRpb24oKTtcblx0XHR9XG5cdFx0cmV0dXJuIE51bWJlckNvbHVtblByZXNlbnRhdGlvbi5pbnN0YW5jZTtcblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBOdW1iZXJDb2x1bW5QcmVzZW50YXRpb24gPSBudWxsO1xuXG5cdHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldFBvc3NpYmxlVmlld3MoKTogQXJyYXk8Q2VsbFZpZXc+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0Q2VsbFZpZXcuVEVYVCxcblx0XHRcdENlbGxWaWV3LkJBUixcblx0XHRcdENlbGxWaWV3LlBFUkNFTlRBR0VfQkFSLFxuXHRcdFx0Q2VsbFZpZXcuUEVSQ0VOVEFHRVxuXHRcdF07XG5cdH1cblxuXHRnZXREZWZhdWx0VmlldygpOiBDZWxsVmlldyB7XG5cdFx0cmV0dXJuIENlbGxWaWV3Lk5VTUJFUjtcblx0fVxuXG5cdGdldERlZmF1bHRBbGlnbih2aWV3OiBWaWV3RW50aXR5KTogQ29sdW1uQWxpZ24ge1xuXHRcdHJldHVybiBDb2x1bW5BbGlnbi5SSUdIVDtcblx0fVxufVxuIl19