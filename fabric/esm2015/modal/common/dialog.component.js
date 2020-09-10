/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Theme } from '../../themes/theme';
import { FabricReactive } from '../../common/fabric-reactive';
/**
 * @abstract
 */
export class DialogComponent extends FabricReactive {
    /**
     * @protected
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} theme
     */
    constructor(elementRef, renderer, theme) {
        super();
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.theme = theme;
    }
    /**
     * @protected
     * @param {?=} theme
     * @return {?}
     */
    addTheme(theme) {
        if (!theme) {
            theme = this.theme;
        }
        this.removeThemes();
        /** @type {?} */
        const cssClass = DialogComponent.CSS_CLASS_PREFIX + theme.toLowerCase();
        this.renderer.addClass(this.elementRef.nativeElement, cssClass);
    }
    /**
     * @protected
     * @return {?}
     */
    removeThemes() {
        /** @type {?} */
        const themes = Object.keys(Theme)
            .map((/**
         * @param {?} key
         * @return {?}
         */
        (key) => Theme[key].toLowerCase()))
            .filter((/**
         * @param {?} val
         * @return {?}
         */
        (val) => !Number.isInteger(val)));
        themes.forEach((/**
         * @param {?} theme
         * @return {?}
         */
        (theme) => {
            /** @type {?} */
            const cssClass = DialogComponent.CSS_CLASS_PREFIX + theme;
            this.renderer.removeClass(this.elementRef.nativeElement, cssClass);
        }));
    }
}
DialogComponent.CSS_CLASS_PREFIX = 'gui-';
if (false) {
    /**
     * @type {?}
     * @private
     */
    DialogComponent.CSS_CLASS_PREFIX;
    /**
     * @type {?}
     * @private
     */
    DialogComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    DialogComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    DialogComponent.prototype.theme;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbIm1vZGFsL2NvbW1vbi9kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7O0FBRzlELE1BQU0sT0FBZ0IsZUFBZ0IsU0FBUSxjQUFjOzs7Ozs7O0lBSTNELFlBQXVDLFVBQXNCLEVBQ3JDLFFBQW1CLEVBQ25CLEtBQVk7UUFDbkMsS0FBSyxFQUFFLENBQUM7UUFIOEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNyQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFVBQUssR0FBTCxLQUFLLENBQU87SUFFcEMsQ0FBQzs7Ozs7O0lBRVMsUUFBUSxDQUFDLEtBQWE7UUFFL0IsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNYLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25CO1FBRUQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDOztjQUNkLFFBQVEsR0FBRyxlQUFlLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRTtRQUV2RSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7OztJQUVTLFlBQVk7O2NBQ2YsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQzFCLEdBQUc7Ozs7UUFBQyxDQUFDLEdBQVcsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFDO2FBQzlDLE1BQU07Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFDO1FBRTlDLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRTs7a0JBQzFCLFFBQVEsR0FBRyxlQUFlLENBQUMsZ0JBQWdCLEdBQUcsS0FBSztZQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNwRSxDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7O0FBN0J1QixnQ0FBZ0IsR0FBRyxNQUFNLENBQUM7Ozs7OztJQUFsRCxpQ0FBa0Q7Ozs7O0lBRTVCLHFDQUF1Qzs7Ozs7SUFDdEQsbUNBQW9DOzs7OztJQUNwQyxnQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZXMvdGhlbWUnO1xuaW1wb3J0IHsgRmFicmljUmVhY3RpdmUgfSBmcm9tICcuLi8uLi9jb21tb24vZmFicmljLXJlYWN0aXZlJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGlhbG9nQ29tcG9uZW50IGV4dGVuZHMgRmFicmljUmVhY3RpdmUge1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IENTU19DTEFTU19QUkVGSVggPSAnZ3VpLSc7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0XHRcdCAgcHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyLFxuXHRcdFx0XHRcdFx0ICBwcml2YXRlIHJlYWRvbmx5IHRoZW1lOiBUaGVtZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgYWRkVGhlbWUodGhlbWU/OiBUaGVtZSk6IHZvaWQge1xuXG5cdFx0aWYgKCF0aGVtZSkge1xuXHRcdFx0dGhlbWUgPSB0aGlzLnRoZW1lO1xuXHRcdH1cblxuXHRcdHRoaXMucmVtb3ZlVGhlbWVzKCk7XG5cdFx0Y29uc3QgY3NzQ2xhc3MgPSBEaWFsb2dDb21wb25lbnQuQ1NTX0NMQVNTX1BSRUZJWCArIHRoZW1lLnRvTG93ZXJDYXNlKCk7XG5cblx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjc3NDbGFzcyk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgcmVtb3ZlVGhlbWVzKCk6IHZvaWQge1xuXHRcdGNvbnN0IHRoZW1lcyA9IE9iamVjdC5rZXlzKFRoZW1lKVxuXHRcdFx0XHRcdFx0XHQgLm1hcCgoa2V5OiBzdHJpbmcpID0+IFRoZW1lW2tleV0udG9Mb3dlckNhc2UoKSlcblx0XHRcdFx0XHRcdFx0IC5maWx0ZXIoKHZhbCkgPT4gIU51bWJlci5pc0ludGVnZXIodmFsKSk7XG5cblx0XHR0aGVtZXMuZm9yRWFjaCgodGhlbWU6IHN0cmluZykgPT4ge1xuXHRcdFx0Y29uc3QgY3NzQ2xhc3MgPSBEaWFsb2dDb21wb25lbnQuQ1NTX0NMQVNTX1BSRUZJWCArIHRoZW1lO1xuXHRcdFx0dGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY3NzQ2xhc3MpO1xuXHRcdH0pO1xuXHR9XG59XG4iXX0=