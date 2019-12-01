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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5lbnRpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvY29sdW1uL3ZpZXcuZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0M7SUFNQyxvQkFBWSxVQUEwQjtRQUZyQixxQkFBZ0I7Ozs7UUFBNkIsVUFBQyxLQUFVLElBQUssT0FBQSxLQUFLLEVBQUwsQ0FBSyxFQUFDO1FBSW5GLElBQUksT0FBTyxVQUFVLEtBQUssVUFBVSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUM5QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDO1NBQ25DO2FBQU07WUFDTixJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztTQUN2QjtJQUNGLENBQUM7Ozs7SUFFRCxnQ0FBVzs7O0lBQVg7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELHdDQUFtQjs7O0lBQW5CO1FBQ0MsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDOUIsQ0FBQztJQUVGLGlCQUFDO0FBQUQsQ0FBQyxBQXhCRCxJQXdCQzs7Ozs7OztJQXRCQSwwQkFBZ0M7Ozs7O0lBRWhDLHNDQUFvRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vY2VsbC12aWV3JztcblxuZXhwb3J0IGNsYXNzIFZpZXdFbnRpdHkge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdmlldzogQ2VsbFZpZXc7XG5cblx0cHJpdmF0ZSByZWFkb25seSB0ZW1wbGF0ZUZ1bmN0aW9uPzogKGVudGl0eTogYW55KSA9PiBzdHJpbmcgPSAodmFsdWU6IGFueSkgPT4gdmFsdWU7XG5cblx0Y29uc3RydWN0b3IoY29sdW1uVmlldzogQ2VsbFZpZXcgfCBhbnkpIHtcblxuXHRcdGlmICh0eXBlb2YgY29sdW1uVmlldyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dGhpcy52aWV3ID0gQ2VsbFZpZXcuRlVOQ1RJT047XG5cdFx0XHR0aGlzLnRlbXBsYXRlRnVuY3Rpb24gPSBjb2x1bW5WaWV3O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnZpZXcgPSBjb2x1bW5WaWV3O1xuXHRcdH1cblx0fVxuXG5cdGdldENlbGxWaWV3KCk6IENlbGxWaWV3IHtcblx0XHRyZXR1cm4gdGhpcy52aWV3O1xuXHR9XG5cblx0Z2V0VGVtcGxhdGVGdW5jdGlvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnRlbXBsYXRlRnVuY3Rpb247XG5cdH1cblxufVxuIl19