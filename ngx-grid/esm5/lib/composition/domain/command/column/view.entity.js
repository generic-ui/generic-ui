/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CellView } from '../../cell-view';
var ViewEntity = /** @class */ (function () {
    function ViewEntity(columnView) {
        this.templateFunction = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value; });
        if (typeof columnView === 'function') {
            this.view = CellView.FUNCTION;
            this.templateFunction = columnView;
        }
        else {
            this.view = columnView;
        }
    }
    /**
     * @return {?}
     */
    ViewEntity.prototype.getCellView = /**
     * @return {?}
     */
    function () {
        return this.view;
    };
    /**
     * @return {?}
     */
    ViewEntity.prototype.getTemplateFunction = /**
     * @return {?}
     */
    function () {
        return this.templateFunction;
    };
    return ViewEntity;
}());
export { ViewEntity };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ViewEntity.prototype.view;
    /**
     * @type {?}
     * @private
     */
    ViewEntity.prototype.templateFunction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5lbnRpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29tbWFuZC9jb2x1bW4vdmlldy5lbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQztJQU1DLG9CQUFZLFVBQTBCO1FBRnJCLHFCQUFnQjs7OztRQUE2QixVQUFDLEtBQVUsSUFBSyxPQUFBLEtBQUssRUFBTCxDQUFLLEVBQUM7UUFJbkYsSUFBSSxPQUFPLFVBQVUsS0FBSyxVQUFVLEVBQUU7WUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO1lBQzlCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLENBQUM7U0FDbkM7YUFBTTtZQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1NBQ3ZCO0lBQ0YsQ0FBQzs7OztJQUVELGdDQUFXOzs7SUFBWDtRQUNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsd0NBQW1COzs7SUFBbkI7UUFDQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUM5QixDQUFDO0lBRUYsaUJBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDOzs7Ozs7O0lBdEJBLDBCQUFnQzs7Ozs7SUFFaEMsc0NBQW9GIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi9jZWxsLXZpZXcnO1xuXG5leHBvcnQgY2xhc3MgVmlld0VudGl0eSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSB2aWV3OiBDZWxsVmlldztcblxuXHRwcml2YXRlIHJlYWRvbmx5IHRlbXBsYXRlRnVuY3Rpb24/OiAoZW50aXR5OiBhbnkpID0+IHN0cmluZyA9ICh2YWx1ZTogYW55KSA9PiB2YWx1ZTtcblxuXHRjb25zdHJ1Y3Rvcihjb2x1bW5WaWV3OiBDZWxsVmlldyB8IGFueSkge1xuXG5cdFx0aWYgKHR5cGVvZiBjb2x1bW5WaWV3ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR0aGlzLnZpZXcgPSBDZWxsVmlldy5GVU5DVElPTjtcblx0XHRcdHRoaXMudGVtcGxhdGVGdW5jdGlvbiA9IGNvbHVtblZpZXc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudmlldyA9IGNvbHVtblZpZXc7XG5cdFx0fVxuXHR9XG5cblx0Z2V0Q2VsbFZpZXcoKTogQ2VsbFZpZXcge1xuXHRcdHJldHVybiB0aGlzLnZpZXc7XG5cdH1cblxuXHRnZXRUZW1wbGF0ZUZ1bmN0aW9uKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMudGVtcGxhdGVGdW5jdGlvbjtcblx0fVxuXG59XG4iXX0=