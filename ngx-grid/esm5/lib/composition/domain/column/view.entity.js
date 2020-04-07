/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CellView } from './cell-view';
import { DataType } from '../../../structure/domain/structure/field/data-type/data-type';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5lbnRpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL3ZpZXcuZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUV6RjtJQWdCQyxvQkFBWSxVQUEwQjtRQUZyQixxQkFBZ0I7Ozs7UUFBNkIsVUFBQyxLQUFVLElBQUssT0FBQSxLQUFLLEVBQUwsQ0FBSyxFQUFDO1FBSW5GLElBQUksT0FBTyxVQUFVLEtBQUssVUFBVSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUM5QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDO1NBQ25DO2FBQU07WUFDTixJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztTQUN2QjtJQUNGLENBQUM7Ozs7O0lBdEJhLHVCQUFZOzs7O0lBQTFCLFVBQTJCLFFBQWtCO1FBRTVDLElBQUksUUFBUSxLQUFLLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDL0IsT0FBTyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckM7YUFBTTtZQUNOLE9BQU8sSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JDO0lBRUYsQ0FBQzs7OztJQWdCRCxnQ0FBVzs7O0lBQVg7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELHdDQUFtQjs7O0lBQW5CO1FBQ0MsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDOUIsQ0FBQztJQUVGLGlCQUFDO0FBQUQsQ0FBQyxBQWxDRCxJQWtDQzs7Ozs7OztJQXRCQSwwQkFBZ0M7Ozs7O0lBRWhDLHNDQUFvRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi9jZWxsLXZpZXcnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcblxuZXhwb3J0IGNsYXNzIFZpZXdFbnRpdHkge1xuXG5cdHB1YmxpYyBzdGF0aWMgZnJvbURhdGFUeXBlKGRhdGFUeXBlOiBEYXRhVHlwZSk6IFZpZXdFbnRpdHkge1xuXG5cdFx0aWYgKGRhdGFUeXBlID09PSBEYXRhVHlwZS5EQVRFKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFZpZXdFbnRpdHkoQ2VsbFZpZXcuREFURSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBuZXcgVmlld0VudGl0eShDZWxsVmlldy5URVhUKTtcblx0XHR9XG5cblx0fVxuXG5cdHByaXZhdGUgcmVhZG9ubHkgdmlldzogQ2VsbFZpZXc7XG5cblx0cHJpdmF0ZSByZWFkb25seSB0ZW1wbGF0ZUZ1bmN0aW9uPzogKGVudGl0eTogYW55KSA9PiBzdHJpbmcgPSAodmFsdWU6IGFueSkgPT4gdmFsdWU7XG5cblx0Y29uc3RydWN0b3IoY29sdW1uVmlldzogQ2VsbFZpZXcgfCBhbnkpIHtcblxuXHRcdGlmICh0eXBlb2YgY29sdW1uVmlldyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dGhpcy52aWV3ID0gQ2VsbFZpZXcuRlVOQ1RJT047XG5cdFx0XHR0aGlzLnRlbXBsYXRlRnVuY3Rpb24gPSBjb2x1bW5WaWV3O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnZpZXcgPSBjb2x1bW5WaWV3O1xuXHRcdH1cblx0fVxuXG5cdGdldENlbGxWaWV3KCk6IENlbGxWaWV3IHtcblx0XHRyZXR1cm4gdGhpcy52aWV3O1xuXHR9XG5cblx0Z2V0VGVtcGxhdGVGdW5jdGlvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnRlbXBsYXRlRnVuY3Rpb247XG5cdH1cblxufVxuIl19