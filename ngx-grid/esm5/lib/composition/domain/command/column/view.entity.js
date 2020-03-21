/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CellView } from '../../cell-view';
import { DataType } from '../../../../structure/domain/structure/command/field/data-type/data-type';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5lbnRpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29tbWFuZC9jb2x1bW4vdmlldy5lbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFFcEc7SUFnQkMsb0JBQVksVUFBMEI7UUFGckIscUJBQWdCOzs7O1FBQTZCLFVBQUMsS0FBVSxJQUFLLE9BQUEsS0FBSyxFQUFMLENBQUssRUFBQztRQUluRixJQUFJLE9BQU8sVUFBVSxLQUFLLFVBQVUsRUFBRTtZQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFVBQVUsQ0FBQztTQUNuQzthQUFNO1lBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7U0FDdkI7SUFDRixDQUFDOzs7OztJQXRCYSx1QkFBWTs7OztJQUExQixVQUEyQixRQUFrQjtRQUU1QyxJQUFJLFFBQVEsS0FBSyxRQUFRLENBQUMsSUFBSSxFQUFFO1lBQy9CLE9BQU8sSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JDO2FBQU07WUFDTixPQUFPLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUNwQztJQUVGLENBQUM7Ozs7SUFnQkQsZ0NBQVc7OztJQUFYO1FBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCx3Q0FBbUI7OztJQUFuQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzlCLENBQUM7SUFFRixpQkFBQztBQUFELENBQUMsQUFsQ0QsSUFrQ0M7Ozs7Ozs7SUF0QkEsMEJBQWdDOzs7OztJQUVoQyxzQ0FBb0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uL2NlbGwtdmlldyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZGF0YS10eXBlL2RhdGEtdHlwZSc7XG5cbmV4cG9ydCBjbGFzcyBWaWV3RW50aXR5IHtcblxuXHRwdWJsaWMgc3RhdGljIGZyb21EYXRhVHlwZShkYXRhVHlwZTogRGF0YVR5cGUpOiBWaWV3RW50aXR5IHtcblxuXHRcdGlmIChkYXRhVHlwZSA9PT0gRGF0YVR5cGUuREFURSkge1xuXHRcdFx0cmV0dXJuIG5ldyBWaWV3RW50aXR5KENlbGxWaWV3LkRBVEUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gbmV3IFZpZXdFbnRpdHkoQ2VsbFZpZXcuVEVYVClcblx0XHR9XG5cblx0fVxuXG5cdHByaXZhdGUgcmVhZG9ubHkgdmlldzogQ2VsbFZpZXc7XG5cblx0cHJpdmF0ZSByZWFkb25seSB0ZW1wbGF0ZUZ1bmN0aW9uPzogKGVudGl0eTogYW55KSA9PiBzdHJpbmcgPSAodmFsdWU6IGFueSkgPT4gdmFsdWU7XG5cblx0Y29uc3RydWN0b3IoY29sdW1uVmlldzogQ2VsbFZpZXcgfCBhbnkpIHtcblxuXHRcdGlmICh0eXBlb2YgY29sdW1uVmlldyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dGhpcy52aWV3ID0gQ2VsbFZpZXcuRlVOQ1RJT047XG5cdFx0XHR0aGlzLnRlbXBsYXRlRnVuY3Rpb24gPSBjb2x1bW5WaWV3O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnZpZXcgPSBjb2x1bW5WaWV3O1xuXHRcdH1cblx0fVxuXG5cdGdldENlbGxWaWV3KCk6IENlbGxWaWV3IHtcblx0XHRyZXR1cm4gdGhpcy52aWV3O1xuXHR9XG5cblx0Z2V0VGVtcGxhdGVGdW5jdGlvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnRlbXBsYXRlRnVuY3Rpb247XG5cdH1cblxufVxuIl19