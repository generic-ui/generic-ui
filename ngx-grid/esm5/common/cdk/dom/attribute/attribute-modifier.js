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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlLW1vZGlmaWVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21tb24vY2RrL2RvbS9hdHRyaWJ1dGUvYXR0cmlidXRlLW1vZGlmaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZDQUE4QjtJQW1CcEUsMkJBQ2tCLFdBQXlCO1FBRDNDLFlBR0Msa0JBQU0sV0FBVyxDQUFDLFNBQ2xCO1FBSGlCLGlCQUFXLEdBQVgsV0FBVyxDQUFjOztJQUczQyxDQUFDOzs7Ozs7SUFFUywwQ0FBYzs7Ozs7SUFBeEIsVUFBeUIsV0FBd0I7UUFDaEQsT0FBTyxJQUFJLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUF6QnVCLG1DQUFpQjtRQUV4QyxpQkFDa0IsV0FBd0I7WUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFFMUMsQ0FBQzs7Ozs7O1FBRUQsOEJBQVk7Ozs7O1FBQVosVUFBYSxJQUFZLEVBQUUsS0FBYTtZQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDNUMsQ0FBQzs7Ozs7UUFFRCxpQ0FBZTs7OztRQUFmLFVBQWdCLElBQVk7WUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUVGLGNBQUM7SUFBRCxDQUFDLEFBZjJDLElBZTFDO0lBWUgsd0JBQUM7Q0FBQSxBQTdCRCxDQUF1QyxRQUFRLEdBNkI5QztTQTdCWSxpQkFBaUI7Ozs7OztJQUU3QixvQ0FlRTs7Ozs7SUFHRCx3Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdHRyaWJ1dGVNb2RpZmllckFwaSB9IGZyb20gJy4vYXR0cmlidXRlLW1vZGlmaWVyLWFwaSc7XG5pbXBvcnQgeyBNb2RpZmllciB9IGZyb20gJy4uL2NvcmUvbW9kaWZpZXInO1xuXG5cbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGVNb2RpZmllciBleHRlbmRzIE1vZGlmaWVyPEF0dHJpYnV0ZU1vZGlmaWVyQXBpPiB7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgQXR0cmlidXRlTW9kaWZpZXIgPSBjbGFzcyBpbXBsZW1lbnRzIEF0dHJpYnV0ZU1vZGlmaWVyQXBpIHtcblxuXHRcdGNvbnN0cnVjdG9yKFxuXHRcdFx0cHJpdmF0ZSByZWFkb25seSBodG1sRWxlbWVudDogSFRNTEVsZW1lbnRcblx0XHQpIHtcblx0XHR9XG5cblx0XHRzZXRBdHRyaWJ1dGUobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0XHR0aGlzLmh0bWxFbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG5cdFx0fVxuXG5cdFx0cmVtb3ZlQXR0cmlidXRlKG5hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdFx0dGhpcy5odG1sRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0fVxuXG5cdH07XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByZWFkb25seSBodG1sRWxlbWVudD86IEhUTUxFbGVtZW50XG5cdCkge1xuXHRcdHN1cGVyKGh0bWxFbGVtZW50KTtcblx0fVxuXG5cdHByb3RlY3RlZCBjcmVhdGVNb2RpZmllcihodG1sRWxlbWVudDogSFRNTEVsZW1lbnQpOiBBdHRyaWJ1dGVNb2RpZmllckFwaSB7XG5cdFx0cmV0dXJuIG5ldyBBdHRyaWJ1dGVNb2RpZmllci5BdHRyaWJ1dGVNb2RpZmllcihodG1sRWxlbWVudCk7XG5cdH1cblxufVxuIl19