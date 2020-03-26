/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ValueObject } from '@generic-ui/hermes';
import { ColumnPresentation } from '../column.presentation';
import { ColumnAlign } from '../../../../column-align';
import { CellView } from '../../../../cell-view';
var StringColumnPresentation = /** @class */ (function (_super) {
    tslib_1.__extends(StringColumnPresentation, _super);
    function StringColumnPresentation() {
        return _super.call(this) || this;
    }
    StringColumnPresentation_1 = StringColumnPresentation;
    /**
     * @return {?}
     */
    StringColumnPresentation.getInstance = /**
     * @return {?}
     */
    function () {
        if (!StringColumnPresentation_1.instance) {
            StringColumnPresentation_1.instance = new StringColumnPresentation_1();
        }
        return StringColumnPresentation_1.instance;
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
    var StringColumnPresentation_1;
    StringColumnPresentation.instance = null;
    StringColumnPresentation = StringColumnPresentation_1 = tslib_1.__decorate([
        ValueObject,
        tslib_1.__metadata("design:paramtypes", [])
    ], StringColumnPresentation);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWNvbHVtbi5wcmVzZW50YXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29tbWFuZC9jb2x1bW4vcHJlc2VudGF0aW9uL2RhdGEtdHlwZS9zdHJpbmctY29sdW1uLnByZXNlbnRhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztJQUlILG9EQUFrQjtJQVcvRDtlQUNDLGlCQUFPO0lBQ1IsQ0FBQztpQ0FiVyx3QkFBd0I7Ozs7SUFFN0Isb0NBQVc7OztJQUFsQjtRQUNDLElBQUksQ0FBQywwQkFBd0IsQ0FBQyxRQUFRLEVBQUU7WUFDdkMsMEJBQXdCLENBQUMsUUFBUSxHQUFHLElBQUksMEJBQXdCLEVBQUUsQ0FBQztTQUNuRTtRQUNELE9BQU8sMEJBQXdCLENBQUMsUUFBUSxDQUFDO0lBQzFDLENBQUM7Ozs7SUFRRCxtREFBZ0I7OztJQUFoQjtRQUNDLE9BQU87WUFDTixRQUFRLENBQUMsSUFBSTtZQUNiLFFBQVEsQ0FBQyxNQUFNO1lBQ2YsUUFBUSxDQUFDLElBQUk7WUFDYixRQUFRLENBQUMsS0FBSztZQUNkLFFBQVEsQ0FBQyxJQUFJO1lBQ2IsUUFBUSxDQUFDLElBQUk7U0FDYixDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELGlEQUFjOzs7SUFBZDtRQUNDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsa0RBQWU7OztJQUFmO1FBQ0MsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQ3pCLENBQUM7O0lBdkJjLGlDQUFRLEdBQTZCLElBQUksQ0FBQztJQVQ3Qyx3QkFBd0I7UUFEcEMsV0FBVzs7T0FDQyx3QkFBd0IsQ0FpQ3BDO0lBQUQsK0JBQUM7Q0FBQSxDQWpDNkMsa0JBQWtCLEdBaUMvRDtTQWpDWSx3QkFBd0I7Ozs7OztJQVNwQyxrQ0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWx1ZU9iamVjdCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbHVtblByZXNlbnRhdGlvbiB9IGZyb20gJy4uL2NvbHVtbi5wcmVzZW50YXRpb24nO1xuaW1wb3J0IHsgQ29sdW1uQWxpZ24gfSBmcm9tICcuLi8uLi8uLi8uLi9jb2x1bW4tYWxpZ24nO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi8uLi8uLi9jZWxsLXZpZXcnO1xuXG5cbkBWYWx1ZU9iamVjdFxuZXhwb3J0IGNsYXNzIFN0cmluZ0NvbHVtblByZXNlbnRhdGlvbiBleHRlbmRzIENvbHVtblByZXNlbnRhdGlvbiB7XG5cblx0c3RhdGljIGdldEluc3RhbmNlKCk6IFN0cmluZ0NvbHVtblByZXNlbnRhdGlvbiB7XG5cdFx0aWYgKCFTdHJpbmdDb2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2UpIHtcblx0XHRcdFN0cmluZ0NvbHVtblByZXNlbnRhdGlvbi5pbnN0YW5jZSA9IG5ldyBTdHJpbmdDb2x1bW5QcmVzZW50YXRpb24oKTtcblx0XHR9XG5cdFx0cmV0dXJuIFN0cmluZ0NvbHVtblByZXNlbnRhdGlvbi5pbnN0YW5jZTtcblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBTdHJpbmdDb2x1bW5QcmVzZW50YXRpb24gPSBudWxsO1xuXG5cdHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldFBvc3NpYmxlVmlld3MoKTogQXJyYXk8Q2VsbFZpZXc+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0Q2VsbFZpZXcuVEVYVCxcblx0XHRcdENlbGxWaWV3LklUQUxJQyxcblx0XHRcdENlbGxWaWV3LkJPTEQsXG5cdFx0XHRDZWxsVmlldy5JTUFHRSxcblx0XHRcdENlbGxWaWV3LkxJTkssXG5cdFx0XHRDZWxsVmlldy5DSElQXG5cdFx0XTtcblx0fVxuXG5cdGdldERlZmF1bHRWaWV3KCk6IENlbGxWaWV3IHtcblx0XHRyZXR1cm4gQ2VsbFZpZXcuVEVYVDtcblx0fVxuXG5cdGdldERlZmF1bHRBbGlnbigpOiBDb2x1bW5BbGlnbiB7XG5cdFx0cmV0dXJuIENvbHVtbkFsaWduLkxFRlQ7XG5cdH1cbn1cbiJdfQ==