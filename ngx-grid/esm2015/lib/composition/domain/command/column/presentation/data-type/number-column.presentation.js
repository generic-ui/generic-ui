var NumberColumnPresentation_1;
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ValueObject } from '@generic-ui/hermes';
import { ColumnPresentation } from '../column.presentation';
import { ColumnAlign } from '../../../../column-align';
import { CellView } from '../../../../cell-view';
let NumberColumnPresentation = NumberColumnPresentation_1 = class NumberColumnPresentation extends ColumnPresentation {
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
        if (!NumberColumnPresentation_1.instance) {
            NumberColumnPresentation_1.instance = new NumberColumnPresentation_1();
        }
        return NumberColumnPresentation_1.instance;
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
     * @return {?}
     */
    getDefaultAlign() {
        return ColumnAlign.RIGHT;
    }
};
NumberColumnPresentation.instance = null;
NumberColumnPresentation = NumberColumnPresentation_1 = tslib_1.__decorate([
    ValueObject,
    tslib_1.__metadata("design:paramtypes", [])
], NumberColumnPresentation);
export { NumberColumnPresentation };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NumberColumnPresentation.instance;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWNvbHVtbi5wcmVzZW50YXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29tbWFuZC9jb2x1bW4vcHJlc2VudGF0aW9uL2RhdGEtdHlwZS9udW1iZXItY29sdW1uLnByZXNlbnRhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztJQUlwQyx3QkFBd0Isc0NBQXhCLHdCQUF5QixTQUFRLGtCQUFrQjs7OztJQVcvRDtRQUNDLEtBQUssRUFBRSxDQUFDO0lBQ1QsQ0FBQzs7OztJQVhELE1BQU0sQ0FBQyxXQUFXO1FBQ2pCLElBQUksQ0FBQywwQkFBd0IsQ0FBQyxRQUFRLEVBQUU7WUFDdkMsMEJBQXdCLENBQUMsUUFBUSxHQUFHLElBQUksMEJBQXdCLEVBQUUsQ0FBQztTQUNuRTtRQUNELE9BQU8sMEJBQXdCLENBQUMsUUFBUSxDQUFDO0lBQzFDLENBQUM7Ozs7SUFRRCxnQkFBZ0I7UUFDZixPQUFPO1lBQ04sUUFBUSxDQUFDLElBQUk7WUFDYixRQUFRLENBQUMsR0FBRztZQUNaLFFBQVEsQ0FBQyxjQUFjO1lBQ3ZCLFFBQVEsQ0FBQyxVQUFVO1NBQ25CLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsY0FBYztRQUNiLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQztJQUMxQixDQUFDO0NBQ0QsQ0FBQTtBQXRCZSxpQ0FBUSxHQUE2QixJQUFJLENBQUM7QUFUN0Msd0JBQXdCO0lBRHBDLFdBQVc7O0dBQ0Msd0JBQXdCLENBK0JwQztTQS9CWSx3QkFBd0I7Ozs7OztJQVNwQyxrQ0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWx1ZU9iamVjdCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbHVtblByZXNlbnRhdGlvbiB9IGZyb20gJy4uL2NvbHVtbi5wcmVzZW50YXRpb24nO1xuaW1wb3J0IHsgQ29sdW1uQWxpZ24gfSBmcm9tICcuLi8uLi8uLi8uLi9jb2x1bW4tYWxpZ24nO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi8uLi8uLi9jZWxsLXZpZXcnO1xuXG5cbkBWYWx1ZU9iamVjdFxuZXhwb3J0IGNsYXNzIE51bWJlckNvbHVtblByZXNlbnRhdGlvbiBleHRlbmRzIENvbHVtblByZXNlbnRhdGlvbiB7XG5cblx0c3RhdGljIGdldEluc3RhbmNlKCk6IE51bWJlckNvbHVtblByZXNlbnRhdGlvbiB7XG5cdFx0aWYgKCFOdW1iZXJDb2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2UpIHtcblx0XHRcdE51bWJlckNvbHVtblByZXNlbnRhdGlvbi5pbnN0YW5jZSA9IG5ldyBOdW1iZXJDb2x1bW5QcmVzZW50YXRpb24oKTtcblx0XHR9XG5cdFx0cmV0dXJuIE51bWJlckNvbHVtblByZXNlbnRhdGlvbi5pbnN0YW5jZTtcblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBOdW1iZXJDb2x1bW5QcmVzZW50YXRpb24gPSBudWxsO1xuXG5cdHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldFBvc3NpYmxlVmlld3MoKTogQXJyYXk8Q2VsbFZpZXc+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0Q2VsbFZpZXcuVEVYVCxcblx0XHRcdENlbGxWaWV3LkJBUixcblx0XHRcdENlbGxWaWV3LlBFUkNFTlRBR0VfQkFSLFxuXHRcdFx0Q2VsbFZpZXcuUEVSQ0VOVEFHRVxuXHRcdF07XG5cdH1cblxuXHRnZXREZWZhdWx0VmlldygpOiBDZWxsVmlldyB7XG5cdFx0cmV0dXJuIENlbGxWaWV3Lk5VTUJFUjtcblx0fVxuXG5cdGdldERlZmF1bHRBbGlnbigpOiBDb2x1bW5BbGlnbiB7XG5cdFx0cmV0dXJuIENvbHVtbkFsaWduLlJJR0hUO1xuXHR9XG59XG4iXX0=