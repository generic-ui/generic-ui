/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CellView } from './cell-view';
import { DataType } from '../../../../structure/field/core/domain/field/data/data-type';
var ViewEntity = /** @class */ (function () {
    function ViewEntity(cellView) {
        this.templateFunction = (/**
         * @param {?} cellValue
         * @param {?} item
         * @return {?}
         */
        function (cellValue, item) { return cellValue; });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5lbnRpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbHVtbi92aWV3LmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN2QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOERBQThELENBQUM7QUFFeEY7SUFnQkMsb0JBQVksUUFBd0I7UUFGbkIscUJBQWdCOzs7OztRQUF3QyxVQUFDLFNBQWMsRUFBRSxJQUFTLElBQUssT0FBQSxTQUFTLEVBQVQsQ0FBUyxFQUFDO1FBSWpILElBQUksT0FBTyxRQUFRLEtBQUssVUFBVSxFQUFFO1lBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUM5QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO1NBQ2pDO2FBQU07WUFDTixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztTQUNyQjtJQUNGLENBQUM7Ozs7O0lBdEJhLHVCQUFZOzs7O0lBQTFCLFVBQTJCLFFBQWtCO1FBRTVDLElBQUksUUFBUSxLQUFLLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDL0IsT0FBTyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckM7YUFBTTtZQUNOLE9BQU8sSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JDO0lBRUYsQ0FBQzs7OztJQWdCRCxnQ0FBVzs7O0lBQVg7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELHdDQUFtQjs7O0lBQW5CO1FBQ0MsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDOUIsQ0FBQztJQUVGLGlCQUFDO0FBQUQsQ0FBQyxBQWxDRCxJQWtDQzs7Ozs7OztJQXRCQSwwQkFBZ0M7Ozs7O0lBRWhDLHNDQUFrSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi9jZWxsLXZpZXcnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvY29yZS9kb21haW4vZmllbGQvZGF0YS9kYXRhLXR5cGUnO1xuXG5leHBvcnQgY2xhc3MgVmlld0VudGl0eSB7XG5cblx0cHVibGljIHN0YXRpYyBmcm9tRGF0YVR5cGUoZGF0YVR5cGU6IERhdGFUeXBlKTogVmlld0VudGl0eSB7XG5cblx0XHRpZiAoZGF0YVR5cGUgPT09IERhdGFUeXBlLkRBVEUpIHtcblx0XHRcdHJldHVybiBuZXcgVmlld0VudGl0eShDZWxsVmlldy5EQVRFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG5ldyBWaWV3RW50aXR5KENlbGxWaWV3LlRFWFQpO1xuXHRcdH1cblxuXHR9XG5cblx0cHJpdmF0ZSByZWFkb25seSB2aWV3OiBDZWxsVmlldztcblxuXHRwcml2YXRlIHJlYWRvbmx5IHRlbXBsYXRlRnVuY3Rpb24/OiAoZW50aXR5OiBhbnksIGl0ZW06IGFueSkgPT4gc3RyaW5nID0gKGNlbGxWYWx1ZTogYW55LCBpdGVtOiBhbnkpID0+IGNlbGxWYWx1ZTtcblxuXHRjb25zdHJ1Y3RvcihjZWxsVmlldzogQ2VsbFZpZXcgfCBhbnkpIHtcblxuXHRcdGlmICh0eXBlb2YgY2VsbFZpZXcgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRoaXMudmlldyA9IENlbGxWaWV3LkZVTkNUSU9OO1xuXHRcdFx0dGhpcy50ZW1wbGF0ZUZ1bmN0aW9uID0gY2VsbFZpZXc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudmlldyA9IGNlbGxWaWV3O1xuXHRcdH1cblx0fVxuXG5cdGdldENlbGxWaWV3KCk6IENlbGxWaWV3IHtcblx0XHRyZXR1cm4gdGhpcy52aWV3O1xuXHR9XG5cblx0Z2V0VGVtcGxhdGVGdW5jdGlvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnRlbXBsYXRlRnVuY3Rpb247XG5cdH1cblxufVxuIl19