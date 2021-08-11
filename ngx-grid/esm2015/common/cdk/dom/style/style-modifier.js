var _a;
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StyleName } from './style-name';
import { Modifier } from '../core/modifier';
export class StyleModifier extends Modifier {
    /**
     * @param {?=} htmlElement
     */
    constructor(htmlElement) {
        super(htmlElement);
        this.htmlElement = htmlElement;
    }
    /**
     * @protected
     * @param {?} htmlElement
     * @return {?}
     */
    createModifier(htmlElement) {
        return new StyleModifier.StyleModifier(htmlElement);
    }
}
StyleModifier.StyleModifier = (_a = class {
        /**
         * @param {?} htmlElement
         */
        constructor(htmlElement) {
            this.htmlElement = htmlElement;
        }
        /**
         * @param {?} name
         * @param {?} value
         * @return {?}
         */
        setStyleByName(name, value) {
            this.set(name, value);
        }
        /**
         * @param {?} value
         * @return {?}
         */
        setWidth(value) {
            this.set(StyleName.WIDTH, this.toPx(value));
        }
        /**
         * @param {?} value
         * @return {?}
         */
        setHeight(value) {
            this.set(StyleName.HEIGHT, this.toPx(value));
        }
        /**
         * @param {?} value
         * @return {?}
         */
        setPaddingTop(value) {
            this.set(StyleName.PADDING_TOP, this.toPx(value));
        }
        /**
         * @param {?} styleName
         * @return {?}
         */
        remove(styleName) {
            this.htmlElement[StyleModifier.StyleModifier.STYLE][styleName] = '';
        }
        /**
         * @param {?} name
         * @return {?}
         */
        removeStyleByName(name) {
            this.htmlElement[StyleModifier.StyleModifier.STYLE][name] = '';
        }
        /**
         * @return {?}
         */
        clear() {
            this.htmlElement.removeAttribute(StyleModifier.StyleModifier.STYLE);
        }
        /**
         * @private
         * @param {?} name
         * @param {?} value
         * @return {?}
         */
        set(name, value) {
            this.htmlElement[StyleModifier.StyleModifier.STYLE][name] = value;
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        toPx(value) {
            return value > 0 ? `${value}px` : `${value}`;
        }
    },
    _a.STYLE = 'style',
    _a);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUtbW9kaWZpZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImNvbW1vbi9jZGsvZG9tL3N0eWxlL3N0eWxlLW1vZGlmaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN6QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHNUMsTUFBTSxPQUFPLGFBQWMsU0FBUSxRQUEwQjs7OztJQUU1RCxZQUNrQixXQUF5QjtRQUUxQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFGRixnQkFBVyxHQUFYLFdBQVcsQ0FBYztJQUczQyxDQUFDOzs7Ozs7SUFFUyxjQUFjLENBQUMsV0FBd0I7UUFDaEQsT0FBTyxJQUFJLGFBQWEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7QUFFdUIsMkJBQWEsU0FBRzs7OztRQUl2QyxZQUNrQixXQUF3QjtZQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUUxQyxDQUFDOzs7Ozs7UUFFRCxjQUFjLENBQUMsSUFBWSxFQUFFLEtBQWE7WUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQzs7Ozs7UUFFRCxRQUFRLENBQUMsS0FBYTtZQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzdDLENBQUM7Ozs7O1FBRUQsU0FBUyxDQUFDLEtBQWE7WUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM5QyxDQUFDOzs7OztRQUVELGFBQWEsQ0FBQyxLQUFhO1lBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbkQsQ0FBQzs7Ozs7UUFFRCxNQUFNLENBQUMsU0FBb0I7WUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNyRSxDQUFDOzs7OztRQUVELGlCQUFpQixDQUFDLElBQVk7WUFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNoRSxDQUFDOzs7O1FBRUQsS0FBSztZQUNKLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckUsQ0FBQzs7Ozs7OztRQUVPLEdBQUcsQ0FBQyxJQUFZLEVBQUUsS0FBYTtZQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ25FLENBQUM7Ozs7OztRQUVPLElBQUksQ0FBQyxLQUFhO1lBQ3pCLE9BQU8sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQztRQUM5QyxDQUFDO0tBRUQ7SUEzQ3dCLFFBQUssR0FBRyxPQUFRO1FBMkN2Qzs7Ozs7O0lBN0NGLDRCQTZDRTs7Ozs7SUF0REQsb0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3R5bGVNb2RpZmllckFwaSB9IGZyb20gJy4vc3R5bGUtbW9kaWZpZXItYXBpJztcbmltcG9ydCB7IFN0eWxlTmFtZSB9IGZyb20gJy4vc3R5bGUtbmFtZSc7XG5pbXBvcnQgeyBNb2RpZmllciB9IGZyb20gJy4uL2NvcmUvbW9kaWZpZXInO1xuXG5cbmV4cG9ydCBjbGFzcyBTdHlsZU1vZGlmaWVyIGV4dGVuZHMgTW9kaWZpZXI8U3R5bGVNb2RpZmllckFwaT4ge1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgaHRtbEVsZW1lbnQ/OiBIVE1MRWxlbWVudFxuXHQpIHtcblx0XHRzdXBlcihodG1sRWxlbWVudCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgY3JlYXRlTW9kaWZpZXIoaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogU3R5bGVNb2RpZmllckFwaSB7XG5cdFx0cmV0dXJuIG5ldyBTdHlsZU1vZGlmaWVyLlN0eWxlTW9kaWZpZXIoaHRtbEVsZW1lbnQpO1xuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgU3R5bGVNb2RpZmllciA9IGNsYXNzIGltcGxlbWVudHMgU3R5bGVNb2RpZmllckFwaSB7XG5cblx0XHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBTVFlMRSA9ICdzdHlsZSc7XG5cblx0XHRjb25zdHJ1Y3Rvcihcblx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50XG5cdFx0KSB7XG5cdFx0fVxuXG5cdFx0c2V0U3R5bGVCeU5hbWUobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0XHR0aGlzLnNldChuYW1lLCB2YWx1ZSk7XG5cdFx0fVxuXG5cdFx0c2V0V2lkdGgodmFsdWU6IG51bWJlcik6IHZvaWQge1xuXHRcdFx0dGhpcy5zZXQoU3R5bGVOYW1lLldJRFRILCB0aGlzLnRvUHgodmFsdWUpKTtcblx0XHR9XG5cblx0XHRzZXRIZWlnaHQodmFsdWU6IG51bWJlcik6IHZvaWQge1xuXHRcdFx0dGhpcy5zZXQoU3R5bGVOYW1lLkhFSUdIVCwgdGhpcy50b1B4KHZhbHVlKSk7XG5cdFx0fVxuXG5cdFx0c2V0UGFkZGluZ1RvcCh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0XHR0aGlzLnNldChTdHlsZU5hbWUuUEFERElOR19UT1AsIHRoaXMudG9QeCh2YWx1ZSkpO1xuXHRcdH1cblxuXHRcdHJlbW92ZShzdHlsZU5hbWU6IFN0eWxlTmFtZSk6IHZvaWQge1xuXHRcdFx0dGhpcy5odG1sRWxlbWVudFtTdHlsZU1vZGlmaWVyLlN0eWxlTW9kaWZpZXIuU1RZTEVdW3N0eWxlTmFtZV0gPSAnJztcblx0XHR9XG5cblx0XHRyZW1vdmVTdHlsZUJ5TmFtZShuYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRcdHRoaXMuaHRtbEVsZW1lbnRbU3R5bGVNb2RpZmllci5TdHlsZU1vZGlmaWVyLlNUWUxFXVtuYW1lXSA9ICcnO1xuXHRcdH1cblxuXHRcdGNsZWFyKCk6IHZvaWQge1xuXHRcdFx0dGhpcy5odG1sRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoU3R5bGVNb2RpZmllci5TdHlsZU1vZGlmaWVyLlNUWUxFKTtcblx0XHR9XG5cblx0XHRwcml2YXRlIHNldChuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRcdHRoaXMuaHRtbEVsZW1lbnRbU3R5bGVNb2RpZmllci5TdHlsZU1vZGlmaWVyLlNUWUxFXVtuYW1lXSA9IHZhbHVlO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgdG9QeCh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcblx0XHRcdHJldHVybiB2YWx1ZSA+IDAgPyBgJHt2YWx1ZX1weGAgOiBgJHt2YWx1ZX1gO1xuXHRcdH1cblxuXHR9O1xuXG59XG4iXX0=