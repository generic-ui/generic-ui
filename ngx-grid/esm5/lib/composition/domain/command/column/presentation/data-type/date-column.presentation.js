/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ValueObject } from '@generic-ui/hermes';
import { ColumnPresentation } from '../column.presentation';
import { ColumnAlign } from '../../../../column-align';
import { CellView } from '../../../../cell-view';
var DateColumnPresentation = /** @class */ (function (_super) {
    tslib_1.__extends(DateColumnPresentation, _super);
    function DateColumnPresentation() {
        return _super.call(this) || this;
    }
    DateColumnPresentation_1 = DateColumnPresentation;
    /**
     * @return {?}
     */
    DateColumnPresentation.getInstance = /**
     * @return {?}
     */
    function () {
        if (!DateColumnPresentation_1.instance) {
            DateColumnPresentation_1.instance = new DateColumnPresentation_1();
        }
        return DateColumnPresentation_1.instance;
    };
    /**
     * @return {?}
     */
    DateColumnPresentation.prototype.getPossibleViews = /**
     * @return {?}
     */
    function () {
        return [
            CellView.DATE,
            CellView.TEXT,
            CellView.ITALIC,
            CellView.BOLD,
            CellView.CHIP
        ];
    };
    /**
     * @return {?}
     */
    DateColumnPresentation.prototype.getDefaultView = /**
     * @return {?}
     */
    function () {
        return CellView.DATE;
    };
    /**
     * @return {?}
     */
    DateColumnPresentation.prototype.getDefaultAlign = /**
     * @return {?}
     */
    function () {
        return ColumnAlign.LEFT;
    };
    var DateColumnPresentation_1;
    DateColumnPresentation.instance = null;
    DateColumnPresentation = DateColumnPresentation_1 = tslib_1.__decorate([
        ValueObject,
        tslib_1.__metadata("design:paramtypes", [])
    ], DateColumnPresentation);
    return DateColumnPresentation;
}(ColumnPresentation));
export { DateColumnPresentation };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DateColumnPresentation.instance;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1jb2x1bW4ucHJlc2VudGF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbW1hbmQvY29sdW1uL3ByZXNlbnRhdGlvbi9kYXRhLXR5cGUvZGF0ZS1jb2x1bW4ucHJlc2VudGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWpELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0lBSUwsa0RBQWtCO0lBVzdEO2VBQ0MsaUJBQU87SUFDUixDQUFDOytCQWJXLHNCQUFzQjs7OztJQUUzQixrQ0FBVzs7O0lBQWxCO1FBQ0MsSUFBSSxDQUFDLHdCQUFzQixDQUFDLFFBQVEsRUFBRTtZQUNyQyx3QkFBc0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSx3QkFBc0IsRUFBRSxDQUFDO1NBQy9EO1FBQ0QsT0FBTyx3QkFBc0IsQ0FBQyxRQUFRLENBQUM7SUFDeEMsQ0FBQzs7OztJQVFELGlEQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTztZQUNOLFFBQVEsQ0FBQyxJQUFJO1lBQ2IsUUFBUSxDQUFDLElBQUk7WUFDYixRQUFRLENBQUMsTUFBTTtZQUNmLFFBQVEsQ0FBQyxJQUFJO1lBQ2IsUUFBUSxDQUFDLElBQUk7U0FDYixDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELCtDQUFjOzs7SUFBZDtRQUNDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsZ0RBQWU7OztJQUFmO1FBQ0MsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQ3pCLENBQUM7O0lBdEJjLCtCQUFRLEdBQTJCLElBQUksQ0FBQztJQVQzQyxzQkFBc0I7UUFEbEMsV0FBVzs7T0FDQyxzQkFBc0IsQ0FnQ2xDO0lBQUQsNkJBQUM7Q0FBQSxDQWhDMkMsa0JBQWtCLEdBZ0M3RDtTQWhDWSxzQkFBc0I7Ozs7OztJQVNsQyxnQ0FBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWx1ZU9iamVjdCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbHVtblByZXNlbnRhdGlvbiB9IGZyb20gJy4uL2NvbHVtbi5wcmVzZW50YXRpb24nO1xuaW1wb3J0IHsgQ29sdW1uQWxpZ24gfSBmcm9tICcuLi8uLi8uLi8uLi9jb2x1bW4tYWxpZ24nO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi8uLi8uLi9jZWxsLXZpZXcnO1xuXG5cbkBWYWx1ZU9iamVjdFxuZXhwb3J0IGNsYXNzIERhdGVDb2x1bW5QcmVzZW50YXRpb24gZXh0ZW5kcyBDb2x1bW5QcmVzZW50YXRpb24ge1xuXG5cdHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBEYXRlQ29sdW1uUHJlc2VudGF0aW9uIHtcblx0XHRpZiAoIURhdGVDb2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2UpIHtcblx0XHRcdERhdGVDb2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2UgPSBuZXcgRGF0ZUNvbHVtblByZXNlbnRhdGlvbigpO1xuXHRcdH1cblx0XHRyZXR1cm4gRGF0ZUNvbHVtblByZXNlbnRhdGlvbi5pbnN0YW5jZTtcblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBEYXRlQ29sdW1uUHJlc2VudGF0aW9uID0gbnVsbDtcblxuXHRwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXRQb3NzaWJsZVZpZXdzKCk6IEFycmF5PENlbGxWaWV3PiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdENlbGxWaWV3LkRBVEUsXG5cdFx0XHRDZWxsVmlldy5URVhULFxuXHRcdFx0Q2VsbFZpZXcuSVRBTElDLFxuXHRcdFx0Q2VsbFZpZXcuQk9MRCxcblx0XHRcdENlbGxWaWV3LkNISVBcblx0XHRdO1xuXHR9XG5cblx0Z2V0RGVmYXVsdFZpZXcoKTogQ2VsbFZpZXcge1xuXHRcdHJldHVybiBDZWxsVmlldy5EQVRFO1xuXHR9XG5cblx0Z2V0RGVmYXVsdEFsaWduKCk6IENvbHVtbkFsaWduIHtcblx0XHRyZXR1cm4gQ29sdW1uQWxpZ24uTEVGVDtcblx0fVxufVxuIl19