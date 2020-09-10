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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWNvbHVtbi5wcmVzZW50YXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vcHJlc2VudGF0aW9uL2RhdGEtdHlwZS9zdHJpbmctY29sdW1uLnByZXNlbnRhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHM0M7SUFBOEMsb0RBQWtCO0lBVy9EO2VBQ0MsaUJBQU87SUFDUixDQUFDOzs7O0lBWE0sb0NBQVc7OztJQUFsQjtRQUNDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLEVBQUU7WUFDdkMsd0JBQXdCLENBQUMsUUFBUSxHQUFHLElBQUksd0JBQXdCLEVBQUUsQ0FBQztTQUNuRTtRQUNELE9BQU8sd0JBQXdCLENBQUMsUUFBUSxDQUFDO0lBQzFDLENBQUM7Ozs7SUFRRCxtREFBZ0I7OztJQUFoQjtRQUNDLE9BQU87WUFDTixRQUFRLENBQUMsSUFBSTtZQUNiLFFBQVEsQ0FBQyxNQUFNO1lBQ2YsUUFBUSxDQUFDLElBQUk7WUFDYixRQUFRLENBQUMsS0FBSztZQUNkLFFBQVEsQ0FBQyxJQUFJO1lBQ2IsUUFBUSxDQUFDLElBQUk7U0FDYixDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELGlEQUFjOzs7SUFBZDtRQUNDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsa0RBQWU7OztJQUFmO1FBQ0MsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUF2QmMsaUNBQVEsR0FBNkIsSUFBSSxDQUFDO0lBd0IxRCwrQkFBQztDQUFBLEFBakNELENBQThDLGtCQUFrQixHQWlDL0Q7U0FqQ1ksd0JBQXdCOzs7Ozs7SUFTcEMsa0NBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uUHJlc2VudGF0aW9uIH0gZnJvbSAnLi4vY29sdW1uLnByZXNlbnRhdGlvbic7XG5pbXBvcnQgeyBDb2x1bW5BbGlnbiB9IGZyb20gJy4uLy4uL2NvbHVtbi1hbGlnbic7XG5pbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uL2NlbGwtdmlldyc7XG5cblxuZXhwb3J0IGNsYXNzIFN0cmluZ0NvbHVtblByZXNlbnRhdGlvbiBleHRlbmRzIENvbHVtblByZXNlbnRhdGlvbiB7XG5cblx0c3RhdGljIGdldEluc3RhbmNlKCk6IFN0cmluZ0NvbHVtblByZXNlbnRhdGlvbiB7XG5cdFx0aWYgKCFTdHJpbmdDb2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2UpIHtcblx0XHRcdFN0cmluZ0NvbHVtblByZXNlbnRhdGlvbi5pbnN0YW5jZSA9IG5ldyBTdHJpbmdDb2x1bW5QcmVzZW50YXRpb24oKTtcblx0XHR9XG5cdFx0cmV0dXJuIFN0cmluZ0NvbHVtblByZXNlbnRhdGlvbi5pbnN0YW5jZTtcblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBTdHJpbmdDb2x1bW5QcmVzZW50YXRpb24gPSBudWxsO1xuXG5cdHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldFBvc3NpYmxlVmlld3MoKTogQXJyYXk8Q2VsbFZpZXc+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0Q2VsbFZpZXcuVEVYVCxcblx0XHRcdENlbGxWaWV3LklUQUxJQyxcblx0XHRcdENlbGxWaWV3LkJPTEQsXG5cdFx0XHRDZWxsVmlldy5JTUFHRSxcblx0XHRcdENlbGxWaWV3LkxJTkssXG5cdFx0XHRDZWxsVmlldy5DSElQXG5cdFx0XTtcblx0fVxuXG5cdGdldERlZmF1bHRWaWV3KCk6IENlbGxWaWV3IHtcblx0XHRyZXR1cm4gQ2VsbFZpZXcuVEVYVDtcblx0fVxuXG5cdGdldERlZmF1bHRBbGlnbigpOiBDb2x1bW5BbGlnbiB7XG5cdFx0cmV0dXJuIENvbHVtbkFsaWduLkxFRlQ7XG5cdH1cbn1cbiJdfQ==