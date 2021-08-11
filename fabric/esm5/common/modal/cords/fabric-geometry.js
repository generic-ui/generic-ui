/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
FabricGeometry = /** @class */ (function () {
    function FabricGeometry(elementRef, containerClassName) {
        this.elementRef = elementRef;
        this.containerClassName = containerClassName;
    }
    /**
     * @protected
     * @return {?}
     */
    FabricGeometry.prototype.getHeight = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.elementRef.nativeElement.querySelector("." + this.containerClassName).offsetHeight;
    };
    /**
     * @protected
     * @return {?}
     */
    FabricGeometry.prototype.getWidth = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.elementRef.nativeElement.querySelector("." + this.containerClassName).offsetWidth;
    };
    return FabricGeometry;
}());
/**
 * @abstract
 */
export { FabricGeometry };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWdlb21ldHJ5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiY29tbW9uL21vZGFsL2NvcmRzL2ZhYnJpYy1nZW9tZXRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7Ozs7SUFFQyx3QkFBOEIsVUFBc0IsRUFDckMsa0JBQTBCO1FBRFgsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNyQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQVE7SUFDekMsQ0FBQzs7Ozs7SUFFUyxrQ0FBUzs7OztJQUFuQjtRQUNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLE1BQUksSUFBSSxDQUFDLGtCQUFvQixDQUFDLENBQUMsWUFBWSxDQUFDO0lBQ2hHLENBQUM7Ozs7O0lBRVMsaUNBQVE7Ozs7SUFBbEI7UUFDQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxNQUFJLElBQUksQ0FBQyxrQkFBb0IsQ0FBQyxDQUFDLFdBQVcsQ0FBQztJQUMvRixDQUFDO0lBQ0YscUJBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQzs7Ozs7Ozs7OztJQVhzQixvQ0FBOEI7Ozs7O0lBQzdDLDRDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZhYnJpY0dlb21ldHJ5IHtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRcdFx0ICBwcml2YXRlIGNvbnRhaW5lckNsYXNzTmFtZTogc3RyaW5nKSB7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0SGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuY29udGFpbmVyQ2xhc3NOYW1lfWApLm9mZnNldEhlaWdodDtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRXaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLmNvbnRhaW5lckNsYXNzTmFtZX1gKS5vZmZzZXRXaWR0aDtcblx0fVxufVxuIl19