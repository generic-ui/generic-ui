/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
     * @return {?}
     */
    addTheme() {
        /** @type {?} */
        const cssClass = DialogComponent.CSS_CLASS_PREFIX + this.theme.toLowerCase();
        this.renderer.addClass(this.elementRef.nativeElement, cssClass);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbIm1vZGFsL2NvbW1vbi9kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7QUFHOUQsTUFBTSxPQUFnQixlQUFnQixTQUFRLGNBQWM7Ozs7Ozs7SUFJM0QsWUFBdUMsVUFBc0IsRUFDckMsUUFBbUIsRUFDbkIsS0FBWTtRQUNuQyxLQUFLLEVBQUUsQ0FBQztRQUg4QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3JDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsVUFBSyxHQUFMLEtBQUssQ0FBTztJQUVwQyxDQUFDOzs7OztJQUVTLFFBQVE7O2NBRVgsUUFBUSxHQUFHLGVBQWUsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtRQUU1RSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNqRSxDQUFDOztBQWJ1QixnQ0FBZ0IsR0FBRyxNQUFNLENBQUM7Ozs7OztJQUFsRCxpQ0FBa0Q7Ozs7O0lBRTVCLHFDQUF1Qzs7Ozs7SUFDdEQsbUNBQW9DOzs7OztJQUNwQyxnQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZXMvdGhlbWUnO1xuaW1wb3J0IHsgRmFicmljUmVhY3RpdmUgfSBmcm9tICcuLi8uLi9jb21tb24vZmFicmljLXJlYWN0aXZlJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGlhbG9nQ29tcG9uZW50IGV4dGVuZHMgRmFicmljUmVhY3RpdmUge1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IENTU19DTEFTU19QUkVGSVggPSAnZ3VpLSc7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0XHRcdCAgcHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyLFxuXHRcdFx0XHRcdFx0ICBwcml2YXRlIHJlYWRvbmx5IHRoZW1lOiBUaGVtZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgYWRkVGhlbWUoKTogdm9pZCB7XG5cblx0XHRjb25zdCBjc3NDbGFzcyA9IERpYWxvZ0NvbXBvbmVudC5DU1NfQ0xBU1NfUFJFRklYICsgdGhpcy50aGVtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY3NzQ2xhc3MpO1xuXHR9XG59XG4iXX0=