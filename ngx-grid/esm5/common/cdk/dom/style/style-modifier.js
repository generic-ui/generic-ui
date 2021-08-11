/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StyleName } from './style-name';
import { Modifier } from '../core/modifier';
var StyleModifier = /** @class */ (function (_super) {
    tslib_1.__extends(StyleModifier, _super);
    function StyleModifier(htmlElement) {
        var _this = _super.call(this, htmlElement) || this;
        _this.htmlElement = htmlElement;
        return _this;
    }
    /**
     * @protected
     * @param {?} htmlElement
     * @return {?}
     */
    StyleModifier.prototype.createModifier = /**
     * @protected
     * @param {?} htmlElement
     * @return {?}
     */
    function (htmlElement) {
        return new StyleModifier.StyleModifier(htmlElement);
    };
    var _a;
    StyleModifier.StyleModifier = (_a = /** @class */ (function () {
            function class_1(htmlElement) {
                this.htmlElement = htmlElement;
            }
            /**
             * @param {?} name
             * @param {?} value
             * @return {?}
             */
            class_1.prototype.setStyleByName = /**
             * @param {?} name
             * @param {?} value
             * @return {?}
             */
            function (name, value) {
                this.set(name, value);
            };
            /**
             * @param {?} value
             * @return {?}
             */
            class_1.prototype.setWidth = /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.set(StyleName.WIDTH, this.toPx(value));
            };
            /**
             * @param {?} value
             * @return {?}
             */
            class_1.prototype.setHeight = /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.set(StyleName.HEIGHT, this.toPx(value));
            };
            /**
             * @param {?} value
             * @return {?}
             */
            class_1.prototype.setPaddingTop = /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.set(StyleName.PADDING_TOP, this.toPx(value));
            };
            /**
             * @param {?} styleName
             * @return {?}
             */
            class_1.prototype.remove = /**
             * @param {?} styleName
             * @return {?}
             */
            function (styleName) {
                this.htmlElement[StyleModifier.StyleModifier.STYLE][styleName] = '';
            };
            /**
             * @param {?} name
             * @return {?}
             */
            class_1.prototype.removeStyleByName = /**
             * @param {?} name
             * @return {?}
             */
            function (name) {
                this.htmlElement[StyleModifier.StyleModifier.STYLE][name] = '';
            };
            /**
             * @return {?}
             */
            class_1.prototype.clear = /**
             * @return {?}
             */
            function () {
                this.htmlElement.removeAttribute(StyleModifier.StyleModifier.STYLE);
            };
            /**
             * @private
             * @param {?} name
             * @param {?} value
             * @return {?}
             */
            class_1.prototype.set = /**
             * @private
             * @param {?} name
             * @param {?} value
             * @return {?}
             */
            function (name, value) {
                this.htmlElement[StyleModifier.StyleModifier.STYLE][name] = value;
            };
            /**
             * @private
             * @param {?} value
             * @return {?}
             */
            class_1.prototype.toPx = /**
             * @private
             * @param {?} value
             * @return {?}
             */
            function (value) {
                return value > 0 ? value + "px" : "" + value;
            };
            return class_1;
        }()),
        _a.STYLE = 'style',
        _a);
    return StyleModifier;
}(Modifier));
export { StyleModifier };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StyleModifier.StyleModifier;
    /**
     * @type {?}
     * @private
     */
    StyleModifier.prototype.htmlElement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUtbW9kaWZpZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImNvbW1vbi9jZGsvZG9tL3N0eWxlL3N0eWxlLW1vZGlmaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN6QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHNUM7SUFBbUMseUNBQTBCO0lBRTVELHVCQUNrQixXQUF5QjtRQUQzQyxZQUdDLGtCQUFNLFdBQVcsQ0FBQyxTQUNsQjtRQUhpQixpQkFBVyxHQUFYLFdBQVcsQ0FBYzs7SUFHM0MsQ0FBQzs7Ozs7O0lBRVMsc0NBQWM7Ozs7O0lBQXhCLFVBQXlCLFdBQXdCO1FBQ2hELE9BQU8sSUFBSSxhQUFhLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7O0lBRXVCLDJCQUFhO1lBSXBDLGlCQUNrQixXQUF3QjtnQkFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7WUFFMUMsQ0FBQzs7Ozs7O1lBRUQsZ0NBQWM7Ozs7O1lBQWQsVUFBZSxJQUFZLEVBQUUsS0FBYTtnQkFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdkIsQ0FBQzs7Ozs7WUFFRCwwQkFBUTs7OztZQUFSLFVBQVMsS0FBYTtnQkFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM3QyxDQUFDOzs7OztZQUVELDJCQUFTOzs7O1lBQVQsVUFBVSxLQUFhO2dCQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzlDLENBQUM7Ozs7O1lBRUQsK0JBQWE7Ozs7WUFBYixVQUFjLEtBQWE7Z0JBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbkQsQ0FBQzs7Ozs7WUFFRCx3QkFBTTs7OztZQUFOLFVBQU8sU0FBb0I7Z0JBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDckUsQ0FBQzs7Ozs7WUFFRCxtQ0FBaUI7Ozs7WUFBakIsVUFBa0IsSUFBWTtnQkFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNoRSxDQUFDOzs7O1lBRUQsdUJBQUs7OztZQUFMO2dCQUNDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckUsQ0FBQzs7Ozs7OztZQUVPLHFCQUFHOzs7Ozs7WUFBWCxVQUFZLElBQVksRUFBRSxLQUFhO2dCQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQ25FLENBQUM7Ozs7OztZQUVPLHNCQUFJOzs7OztZQUFaLFVBQWEsS0FBYTtnQkFDekIsT0FBTyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBSSxLQUFLLE9BQUksQ0FBQyxDQUFDLENBQUMsS0FBRyxLQUFPLENBQUM7WUFDOUMsQ0FBQztZQUVGLGNBQUM7UUFBRCxDQUFDLEFBN0N1QztRQUVmLFFBQUssR0FBRyxPQUFRO1lBMkN2QztJQUVILG9CQUFDO0NBQUEsQUEzREQsQ0FBbUMsUUFBUSxHQTJEMUM7U0EzRFksYUFBYTs7Ozs7O0lBWXpCLDRCQTZDRTs7Ozs7SUF0REQsb0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3R5bGVNb2RpZmllckFwaSB9IGZyb20gJy4vc3R5bGUtbW9kaWZpZXItYXBpJztcbmltcG9ydCB7IFN0eWxlTmFtZSB9IGZyb20gJy4vc3R5bGUtbmFtZSc7XG5pbXBvcnQgeyBNb2RpZmllciB9IGZyb20gJy4uL2NvcmUvbW9kaWZpZXInO1xuXG5cbmV4cG9ydCBjbGFzcyBTdHlsZU1vZGlmaWVyIGV4dGVuZHMgTW9kaWZpZXI8U3R5bGVNb2RpZmllckFwaT4ge1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgaHRtbEVsZW1lbnQ/OiBIVE1MRWxlbWVudFxuXHQpIHtcblx0XHRzdXBlcihodG1sRWxlbWVudCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgY3JlYXRlTW9kaWZpZXIoaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogU3R5bGVNb2RpZmllckFwaSB7XG5cdFx0cmV0dXJuIG5ldyBTdHlsZU1vZGlmaWVyLlN0eWxlTW9kaWZpZXIoaHRtbEVsZW1lbnQpO1xuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgU3R5bGVNb2RpZmllciA9IGNsYXNzIGltcGxlbWVudHMgU3R5bGVNb2RpZmllckFwaSB7XG5cblx0XHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBTVFlMRSA9ICdzdHlsZSc7XG5cblx0XHRjb25zdHJ1Y3Rvcihcblx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50XG5cdFx0KSB7XG5cdFx0fVxuXG5cdFx0c2V0U3R5bGVCeU5hbWUobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0XHR0aGlzLnNldChuYW1lLCB2YWx1ZSk7XG5cdFx0fVxuXG5cdFx0c2V0V2lkdGgodmFsdWU6IG51bWJlcik6IHZvaWQge1xuXHRcdFx0dGhpcy5zZXQoU3R5bGVOYW1lLldJRFRILCB0aGlzLnRvUHgodmFsdWUpKTtcblx0XHR9XG5cblx0XHRzZXRIZWlnaHQodmFsdWU6IG51bWJlcik6IHZvaWQge1xuXHRcdFx0dGhpcy5zZXQoU3R5bGVOYW1lLkhFSUdIVCwgdGhpcy50b1B4KHZhbHVlKSk7XG5cdFx0fVxuXG5cdFx0c2V0UGFkZGluZ1RvcCh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0XHR0aGlzLnNldChTdHlsZU5hbWUuUEFERElOR19UT1AsIHRoaXMudG9QeCh2YWx1ZSkpO1xuXHRcdH1cblxuXHRcdHJlbW92ZShzdHlsZU5hbWU6IFN0eWxlTmFtZSk6IHZvaWQge1xuXHRcdFx0dGhpcy5odG1sRWxlbWVudFtTdHlsZU1vZGlmaWVyLlN0eWxlTW9kaWZpZXIuU1RZTEVdW3N0eWxlTmFtZV0gPSAnJztcblx0XHR9XG5cblx0XHRyZW1vdmVTdHlsZUJ5TmFtZShuYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRcdHRoaXMuaHRtbEVsZW1lbnRbU3R5bGVNb2RpZmllci5TdHlsZU1vZGlmaWVyLlNUWUxFXVtuYW1lXSA9ICcnO1xuXHRcdH1cblxuXHRcdGNsZWFyKCk6IHZvaWQge1xuXHRcdFx0dGhpcy5odG1sRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoU3R5bGVNb2RpZmllci5TdHlsZU1vZGlmaWVyLlNUWUxFKTtcblx0XHR9XG5cblx0XHRwcml2YXRlIHNldChuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRcdHRoaXMuaHRtbEVsZW1lbnRbU3R5bGVNb2RpZmllci5TdHlsZU1vZGlmaWVyLlNUWUxFXVtuYW1lXSA9IHZhbHVlO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgdG9QeCh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcblx0XHRcdHJldHVybiB2YWx1ZSA+IDAgPyBgJHt2YWx1ZX1weGAgOiBgJHt2YWx1ZX1gO1xuXHRcdH1cblxuXHR9O1xuXG59XG4iXX0=