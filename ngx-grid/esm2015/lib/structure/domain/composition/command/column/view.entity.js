/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CellView } from '../../cell-view';
export class ViewEntity {
    /**
     * @param {?} columnView
     */
    constructor(columnView) {
        this.templateFunction = (/**
         * @param {?} value
         * @return {?}
         */
        (value) => value);
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
    getCellView() {
        return this.view;
    }
    /**
     * @return {?}
     */
    getTemplateFunction() {
        return this.templateFunction;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5lbnRpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvY29sdW1uL3ZpZXcuZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0MsTUFBTSxPQUFPLFVBQVU7Ozs7SUFNdEIsWUFBWSxVQUEwQjtRQUZyQixxQkFBZ0I7Ozs7UUFBNkIsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBQztRQUluRixJQUFJLE9BQU8sVUFBVSxLQUFLLFVBQVUsRUFBRTtZQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFVBQVUsQ0FBQztTQUNuQzthQUFNO1lBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7U0FDdkI7SUFDRixDQUFDOzs7O0lBRUQsV0FBVztRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsbUJBQW1CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzlCLENBQUM7Q0FFRDs7Ozs7O0lBdEJBLDBCQUFnQzs7Ozs7SUFFaEMsc0NBQW9GIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi9jZWxsLXZpZXcnO1xuXG5leHBvcnQgY2xhc3MgVmlld0VudGl0eSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSB2aWV3OiBDZWxsVmlldztcblxuXHRwcml2YXRlIHJlYWRvbmx5IHRlbXBsYXRlRnVuY3Rpb24/OiAoZW50aXR5OiBhbnkpID0+IHN0cmluZyA9ICh2YWx1ZTogYW55KSA9PiB2YWx1ZTtcblxuXHRjb25zdHJ1Y3Rvcihjb2x1bW5WaWV3OiBDZWxsVmlldyB8IGFueSkge1xuXG5cdFx0aWYgKHR5cGVvZiBjb2x1bW5WaWV3ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR0aGlzLnZpZXcgPSBDZWxsVmlldy5GVU5DVElPTjtcblx0XHRcdHRoaXMudGVtcGxhdGVGdW5jdGlvbiA9IGNvbHVtblZpZXc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudmlldyA9IGNvbHVtblZpZXc7XG5cdFx0fVxuXHR9XG5cblx0Z2V0Q2VsbFZpZXcoKTogQ2VsbFZpZXcge1xuXHRcdHJldHVybiB0aGlzLnZpZXc7XG5cdH1cblxuXHRnZXRUZW1wbGF0ZUZ1bmN0aW9uKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMudGVtcGxhdGVGdW5jdGlvbjtcblx0fVxuXG59XG4iXX0=