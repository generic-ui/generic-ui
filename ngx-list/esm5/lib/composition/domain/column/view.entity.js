/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CellView } from './cell-view';
import { DataType } from '../../../../structure/field/domain/data-type/data-type';
var ViewEntity = /** @class */ (function () {
    function ViewEntity(cellView) {
        this.templateFunction = (/**
         * @param {?} cellValue
         * @return {?}
         */
        function (cellValue) { return cellValue; });
        if (typeof cellView === 'function') {
            this.view = CellView.FUNCTION;
            this.templateFunction = cellView;
        }
        else {
            this.view = cellView;
        }
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    ViewEntity.fromDataType = /**
     * @param {?} dataType
     * @return {?}
     */
    function (dataType) {
        if (dataType === DataType.DATE) {
            return new ViewEntity(CellView.DATE);
        }
        else {
            return new ViewEntity(CellView.TEXT);
        }
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5lbnRpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL3ZpZXcuZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUVsRjtJQWdCQyxvQkFBWSxRQUF3QjtRQUZuQixxQkFBZ0I7Ozs7UUFBNkIsVUFBQyxTQUFjLElBQUssT0FBQSxTQUFTLEVBQVQsQ0FBUyxFQUFDO1FBSTNGLElBQUksT0FBTyxRQUFRLEtBQUssVUFBVSxFQUFFO1lBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUM5QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO1NBQ2pDO2FBQU07WUFDTixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztTQUNyQjtJQUNGLENBQUM7Ozs7O0lBdEJhLHVCQUFZOzs7O0lBQTFCLFVBQTJCLFFBQWtCO1FBRTVDLElBQUksUUFBUSxLQUFLLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDL0IsT0FBTyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckM7YUFBTTtZQUNOLE9BQU8sSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JDO0lBRUYsQ0FBQzs7OztJQWdCRCxnQ0FBVzs7O0lBQVg7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELHdDQUFtQjs7O0lBQW5CO1FBQ0MsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDOUIsQ0FBQztJQUVGLGlCQUFDO0FBQUQsQ0FBQyxBQWxDRCxJQWtDQzs7Ozs7OztJQXRCQSwwQkFBZ0M7Ozs7O0lBRWhDLHNDQUE0RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi9jZWxsLXZpZXcnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuXG5leHBvcnQgY2xhc3MgVmlld0VudGl0eSB7XG5cblx0cHVibGljIHN0YXRpYyBmcm9tRGF0YVR5cGUoZGF0YVR5cGU6IERhdGFUeXBlKTogVmlld0VudGl0eSB7XG5cblx0XHRpZiAoZGF0YVR5cGUgPT09IERhdGFUeXBlLkRBVEUpIHtcblx0XHRcdHJldHVybiBuZXcgVmlld0VudGl0eShDZWxsVmlldy5EQVRFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG5ldyBWaWV3RW50aXR5KENlbGxWaWV3LlRFWFQpO1xuXHRcdH1cblxuXHR9XG5cblx0cHJpdmF0ZSByZWFkb25seSB2aWV3OiBDZWxsVmlldztcblxuXHRwcml2YXRlIHJlYWRvbmx5IHRlbXBsYXRlRnVuY3Rpb24/OiAoZW50aXR5OiBhbnkpID0+IHN0cmluZyA9IChjZWxsVmFsdWU6IGFueSkgPT4gY2VsbFZhbHVlO1xuXG5cdGNvbnN0cnVjdG9yKGNlbGxWaWV3OiBDZWxsVmlldyB8IGFueSkge1xuXG5cdFx0aWYgKHR5cGVvZiBjZWxsVmlldyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dGhpcy52aWV3ID0gQ2VsbFZpZXcuRlVOQ1RJT047XG5cdFx0XHR0aGlzLnRlbXBsYXRlRnVuY3Rpb24gPSBjZWxsVmlldztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy52aWV3ID0gY2VsbFZpZXc7XG5cdFx0fVxuXHR9XG5cblx0Z2V0Q2VsbFZpZXcoKTogQ2VsbFZpZXcge1xuXHRcdHJldHVybiB0aGlzLnZpZXc7XG5cdH1cblxuXHRnZXRUZW1wbGF0ZUZ1bmN0aW9uKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMudGVtcGxhdGVGdW5jdGlvbjtcblx0fVxuXG59XG4iXX0=