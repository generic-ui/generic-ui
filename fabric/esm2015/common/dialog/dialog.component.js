/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FabricReactive } from '../fabric-reactive';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImNvbW1vbi9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBR3BELE1BQU0sT0FBZ0IsZUFBZ0IsU0FBUSxjQUFjOzs7Ozs7O0lBSTNELFlBQXVDLFVBQXNCLEVBQ3JDLFFBQW1CLEVBQ25CLEtBQVk7UUFDbkMsS0FBSyxFQUFFLENBQUM7UUFIOEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNyQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFVBQUssR0FBTCxLQUFLLENBQU87SUFFcEMsQ0FBQzs7Ozs7SUFFUyxRQUFROztjQUVYLFFBQVEsR0FBRyxlQUFlLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUU7UUFFNUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakUsQ0FBQzs7QUFidUIsZ0NBQWdCLEdBQUcsTUFBTSxDQUFDOzs7Ozs7SUFBbEQsaUNBQWtEOzs7OztJQUU1QixxQ0FBdUM7Ozs7O0lBQ3RELG1DQUFvQzs7Ozs7SUFDcEMsZ0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWVzL3RoZW1lJztcbmltcG9ydCB7IEZhYnJpY1JlYWN0aXZlIH0gZnJvbSAnLi4vZmFicmljLXJlYWN0aXZlJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGlhbG9nQ29tcG9uZW50IGV4dGVuZHMgRmFicmljUmVhY3RpdmUge1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IENTU19DTEFTU19QUkVGSVggPSAnZ3VpLSc7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0XHRcdCAgcHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyLFxuXHRcdFx0XHRcdFx0ICBwcml2YXRlIHJlYWRvbmx5IHRoZW1lOiBUaGVtZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgYWRkVGhlbWUoKTogdm9pZCB7XG5cblx0XHRjb25zdCBjc3NDbGFzcyA9IERpYWxvZ0NvbXBvbmVudC5DU1NfQ0xBU1NfUFJFRklYICsgdGhpcy50aGVtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY3NzQ2xhc3MpO1xuXHR9XG59XG4iXX0=