/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class FabricGeometry {
    /**
     * @protected
     * @param {?} elementRef
     * @param {?} containerClassName
     */
    constructor(elementRef, containerClassName) {
        this.elementRef = elementRef;
        this.containerClassName = containerClassName;
    }
    /**
     * @protected
     * @return {?}
     */
    getHeight() {
        return this.elementRef.nativeElement.querySelector(`.${this.containerClassName}`).offsetHeight;
    }
    /**
     * @protected
     * @return {?}
     */
    getWidth() {
        return this.elementRef.nativeElement.querySelector(`.${this.containerClassName}`).offsetWidth;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricGeometry.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    FabricGeometry.prototype.containerClassName;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWdlb21ldHJ5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiY29tbW9uL21vZGFsL2NvcmRzL2ZhYnJpYy1nZW9tZXRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUEsTUFBTSxPQUFnQixjQUFjOzs7Ozs7SUFFbkMsWUFBOEIsVUFBc0IsRUFDckMsa0JBQTBCO1FBRFgsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNyQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQVE7SUFDekMsQ0FBQzs7Ozs7SUFFUyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUM7SUFDaEcsQ0FBQzs7Ozs7SUFFUyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUM7SUFDL0YsQ0FBQztDQUNEOzs7Ozs7SUFYc0Isb0NBQThCOzs7OztJQUM3Qyw0Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGYWJyaWNHZW9tZXRyeSB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0XHRcdCAgcHJpdmF0ZSBjb250YWluZXJDbGFzc05hbWU6IHN0cmluZykge1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldEhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLmNvbnRhaW5lckNsYXNzTmFtZX1gKS5vZmZzZXRIZWlnaHQ7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0V2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5jb250YWluZXJDbGFzc05hbWV9YCkub2Zmc2V0V2lkdGg7XG5cdH1cbn1cbiJdfQ==