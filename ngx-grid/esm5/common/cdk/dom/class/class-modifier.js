/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Modifier } from '../core/modifier';
var ClassModifier = /** @class */ (function (_super) {
    tslib_1.__extends(ClassModifier, _super);
    function ClassModifier(htmlElement) {
        var _this = _super.call(this, htmlElement) || this;
        _this.htmlElement = htmlElement;
        return _this;
    }
    /**
     * @protected
     * @param {?} htmlElement
     * @return {?}
     */
    ClassModifier.prototype.createModifier = /**
     * @protected
     * @param {?} htmlElement
     * @return {?}
     */
    function (htmlElement) {
        return new ClassModifier.ClassModifier(htmlElement);
    };
    var _a;
    ClassModifier.ClassModifier = (_a = /** @class */ (function () {
            function class_1(htmlElement) {
                this.htmlElement = htmlElement;
            }
            /**
             * @param {...?} classes
             * @return {?}
             */
            class_1.prototype.add = /**
             * @param {...?} classes
             * @return {?}
             */
            function () {
                var classes = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    classes[_i] = arguments[_i];
                }
                this.addClassToDomElement(this.htmlElement, classes);
            };
            /**
             * @param {...?} classes
             * @return {?}
             */
            class_1.prototype.remove = /**
             * @param {...?} classes
             * @return {?}
             */
            function () {
                var classes = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    classes[_i] = arguments[_i];
                }
                this.removeClassFromDomElement(this.htmlElement, classes);
            };
            /**
             * @return {?}
             */
            class_1.prototype.clear = /**
             * @return {?}
             */
            function () {
                this.htmlElement.removeAttribute(ClassModifier.ClassModifier.CLASS);
            };
            /**
             * @private
             * @param {?} htmlElement
             * @param {?} classes
             * @return {?}
             */
            class_1.prototype.addClassToDomElement = /**
             * @private
             * @param {?} htmlElement
             * @param {?} classes
             * @return {?}
             */
            function (htmlElement, classes) {
                for (var i = 0; i < classes.length; i++) {
                    htmlElement.classList.add(classes[i]);
                }
            };
            /**
             * @private
             * @param {?} htmlElement
             * @param {?} classes
             * @return {?}
             */
            class_1.prototype.removeClassFromDomElement = /**
             * @private
             * @param {?} htmlElement
             * @param {?} classes
             * @return {?}
             */
            function (htmlElement, classes) {
                for (var i = 0; i < classes.length; i++) {
                    htmlElement.classList.remove(classes[i]);
                }
            };
            return class_1;
        }()),
        _a.CLASS = 'class',
        _a);
    return ClassModifier;
}(Modifier));
export { ClassModifier };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ClassModifier.ClassModifier;
    /**
     * @type {?}
     * @private
     */
    ClassModifier.prototype.htmlElement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3MtbW9kaWZpZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImNvbW1vbi9jZGsvZG9tL2NsYXNzL2NsYXNzLW1vZGlmaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRzVDO0lBQW1DLHlDQUEwQjtJQUU1RCx1QkFDa0IsV0FBeUI7UUFEM0MsWUFHQyxrQkFBTSxXQUFXLENBQUMsU0FDbEI7UUFIaUIsaUJBQVcsR0FBWCxXQUFXLENBQWM7O0lBRzNDLENBQUM7Ozs7OztJQUVTLHNDQUFjOzs7OztJQUF4QixVQUF5QixXQUF3QjtRQUNoRCxPQUFPLElBQUksYUFBYSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyRCxDQUFDOztJQUV1QiwyQkFBYTtZQUlwQyxpQkFDa0IsV0FBd0I7Z0JBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1lBRTFDLENBQUM7Ozs7O1lBRUQscUJBQUc7Ozs7WUFBSDtnQkFBSSxpQkFBeUI7cUJBQXpCLFVBQXlCLEVBQXpCLHFCQUF5QixFQUF6QixJQUF5QjtvQkFBekIsNEJBQXlCOztnQkFDNUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDdEQsQ0FBQzs7Ozs7WUFFRCx3QkFBTTs7OztZQUFOO2dCQUFPLGlCQUF5QjtxQkFBekIsVUFBeUIsRUFBekIscUJBQXlCLEVBQXpCLElBQXlCO29CQUF6Qiw0QkFBeUI7O2dCQUMvQixJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUMzRCxDQUFDOzs7O1lBRUQsdUJBQUs7OztZQUFMO2dCQUNDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckUsQ0FBQzs7Ozs7OztZQUVPLHNDQUFvQjs7Ozs7O1lBQTVCLFVBQTZCLFdBQXdCLEVBQUUsT0FBc0I7Z0JBRTVFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUN4QyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDdEM7WUFDRixDQUFDOzs7Ozs7O1lBRU8sMkNBQXlCOzs7Ozs7WUFBakMsVUFBa0MsV0FBd0IsRUFBRSxPQUFzQjtnQkFFakYsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3hDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN6QztZQUNGLENBQUM7WUFFRixjQUFDO1FBQUQsQ0FBQyxBQW5DdUM7UUFFZixRQUFLLEdBQUcsT0FBUTtZQWlDdkM7SUFFSCxvQkFBQztDQUFBLEFBakRELENBQW1DLFFBQVEsR0FpRDFDO1NBakRZLGFBQWE7Ozs7OztJQVl6Qiw0QkFtQ0U7Ozs7O0lBNUNELG9DQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsYXNzTW9kaWZpZXJBcGkgfSBmcm9tICcuL2NsYXNzLW1vZGlmaWVyLWFwaSc7XG5pbXBvcnQgeyBNb2RpZmllciB9IGZyb20gJy4uL2NvcmUvbW9kaWZpZXInO1xuXG5cbmV4cG9ydCBjbGFzcyBDbGFzc01vZGlmaWVyIGV4dGVuZHMgTW9kaWZpZXI8Q2xhc3NNb2RpZmllckFwaT4ge1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgaHRtbEVsZW1lbnQ/OiBIVE1MRWxlbWVudFxuXHQpIHtcblx0XHRzdXBlcihodG1sRWxlbWVudCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgY3JlYXRlTW9kaWZpZXIoaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogQ2xhc3NNb2RpZmllckFwaSB7XG5cdFx0cmV0dXJuIG5ldyBDbGFzc01vZGlmaWVyLkNsYXNzTW9kaWZpZXIoaHRtbEVsZW1lbnQpO1xuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgQ2xhc3NNb2RpZmllciA9IGNsYXNzIGltcGxlbWVudHMgQ2xhc3NNb2RpZmllckFwaSB7XG5cblx0XHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBDTEFTUyA9ICdjbGFzcyc7XG5cblx0XHRjb25zdHJ1Y3Rvcihcblx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50XG5cdFx0KSB7XG5cdFx0fVxuXG5cdFx0YWRkKC4uLmNsYXNzZXM6IEFycmF5PHN0cmluZz4pOiB2b2lkIHtcblx0XHRcdHRoaXMuYWRkQ2xhc3NUb0RvbUVsZW1lbnQodGhpcy5odG1sRWxlbWVudCwgY2xhc3Nlcyk7XG5cdFx0fVxuXG5cdFx0cmVtb3ZlKC4uLmNsYXNzZXM6IEFycmF5PHN0cmluZz4pOiB2b2lkIHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3NGcm9tRG9tRWxlbWVudCh0aGlzLmh0bWxFbGVtZW50LCBjbGFzc2VzKTtcblx0XHR9XG5cblx0XHRjbGVhcigpOiB2b2lkIHtcblx0XHRcdHRoaXMuaHRtbEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKENsYXNzTW9kaWZpZXIuQ2xhc3NNb2RpZmllci5DTEFTUyk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBhZGRDbGFzc1RvRG9tRWxlbWVudChodG1sRWxlbWVudDogSFRNTEVsZW1lbnQsIGNsYXNzZXM6IEFycmF5PHN0cmluZz4pOiB2b2lkIHtcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGh0bWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3Nlc1tpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSByZW1vdmVDbGFzc0Zyb21Eb21FbGVtZW50KGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudCwgY2xhc3NlczogQXJyYXk8c3RyaW5nPik6IHZvaWQge1xuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aHRtbEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc2VzW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cblx0fTtcblxufVxuIl19