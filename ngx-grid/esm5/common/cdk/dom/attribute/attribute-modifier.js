/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Modifier } from '../core/modifier';
var AttributeModifier = /** @class */ (function (_super) {
    tslib_1.__extends(AttributeModifier, _super);
    function AttributeModifier(htmlElement) {
        var _this = _super.call(this, htmlElement) || this;
        _this.htmlElement = htmlElement;
        return _this;
    }
    /**
     * @protected
     * @param {?} htmlElement
     * @return {?}
     */
    AttributeModifier.prototype.createModifier = /**
     * @protected
     * @param {?} htmlElement
     * @return {?}
     */
    function (htmlElement) {
        return new AttributeModifier.AttributeModifier(htmlElement);
    };
    AttributeModifier.AttributeModifier = /** @class */ (function () {
        function class_1(htmlElement) {
            this.htmlElement = htmlElement;
        }
        /**
         * @param {?} name
         * @param {?} value
         * @return {?}
         */
        class_1.prototype.setAttribute = /**
         * @param {?} name
         * @param {?} value
         * @return {?}
         */
        function (name, value) {
            this.htmlElement.setAttribute(name, value);
        };
        /**
         * @param {?} name
         * @return {?}
         */
        class_1.prototype.removeAttribute = /**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            this.htmlElement.removeAttribute(name);
        };
        return class_1;
    }());
    return AttributeModifier;
}(Modifier));
export { AttributeModifier };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AttributeModifier.AttributeModifier;
    /**
     * @type {?}
     * @private
     */
    AttributeModifier.prototype.htmlElement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlLW1vZGlmaWVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21tb24vY2RrL2RvbS9hdHRyaWJ1dGUvYXR0cmlidXRlLW1vZGlmaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZDQUE4QjtJQUVwRSwyQkFDa0IsV0FBeUI7UUFEM0MsWUFHQyxrQkFBTSxXQUFXLENBQUMsU0FDbEI7UUFIaUIsaUJBQVcsR0FBWCxXQUFXLENBQWM7O0lBRzNDLENBQUM7Ozs7OztJQUVTLDBDQUFjOzs7OztJQUF4QixVQUF5QixXQUF3QjtRQUNoRCxPQUFPLElBQUksaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUV1QixtQ0FBaUI7UUFFeEMsaUJBQ2tCLFdBQXdCO1lBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRTFDLENBQUM7Ozs7OztRQUVELDhCQUFZOzs7OztRQUFaLFVBQWEsSUFBWSxFQUFFLEtBQWE7WUFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVDLENBQUM7Ozs7O1FBRUQsaUNBQWU7Ozs7UUFBZixVQUFnQixJQUFZO1lBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRixjQUFDO0lBQUQsQ0FBQyxBQWYyQyxJQWUxQztJQUVILHdCQUFDO0NBQUEsQUE3QkQsQ0FBdUMsUUFBUSxHQTZCOUM7U0E3QlksaUJBQWlCOzs7Ozs7SUFZN0Isb0NBZUU7Ozs7O0lBeEJELHdDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF0dHJpYnV0ZU1vZGlmaWVyQXBpIH0gZnJvbSAnLi9hdHRyaWJ1dGUtbW9kaWZpZXItYXBpJztcbmltcG9ydCB7IE1vZGlmaWVyIH0gZnJvbSAnLi4vY29yZS9tb2RpZmllcic7XG5cblxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZU1vZGlmaWVyIGV4dGVuZHMgTW9kaWZpZXI8QXR0cmlidXRlTW9kaWZpZXJBcGk+IHtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHJlYWRvbmx5IGh0bWxFbGVtZW50PzogSFRNTEVsZW1lbnRcblx0KSB7XG5cdFx0c3VwZXIoaHRtbEVsZW1lbnQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGNyZWF0ZU1vZGlmaWVyKGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudCk6IEF0dHJpYnV0ZU1vZGlmaWVyQXBpIHtcblx0XHRyZXR1cm4gbmV3IEF0dHJpYnV0ZU1vZGlmaWVyLkF0dHJpYnV0ZU1vZGlmaWVyKGh0bWxFbGVtZW50KTtcblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEF0dHJpYnV0ZU1vZGlmaWVyID0gY2xhc3MgaW1wbGVtZW50cyBBdHRyaWJ1dGVNb2RpZmllckFwaSB7XG5cblx0XHRjb25zdHJ1Y3Rvcihcblx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50XG5cdFx0KSB7XG5cdFx0fVxuXG5cdFx0c2V0QXR0cmlidXRlKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdFx0dGhpcy5odG1sRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuXHRcdH1cblxuXHRcdHJlbW92ZUF0dHJpYnV0ZShuYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRcdHRoaXMuaHRtbEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHRcdH1cblxuXHR9O1xuXG59XG4iXX0=