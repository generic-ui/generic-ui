/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
/**
 * @abstract
 */
var /**
 * @abstract
 */
FabricReactive = /** @class */ (function () {
    function FabricReactive() {
        this.unsubscribe$ = new Subject();
    }
    /**
     * @return {?}
     */
    FabricReactive.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe();
    };
    /**
     * @protected
     * @return {?}
     */
    FabricReactive.prototype.unsubscribe = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.unsubscribe$.isStopped) {
            return;
        }
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    /**
     * @protected
     * @return {?}
     */
    FabricReactive.prototype.takeUntil = /**
     * @protected
     * @return {?}
     */
    function () {
        return takeUntil(this.unsubscribe$);
    };
    return FabricReactive;
}());
/**
 * @abstract
 */
export { FabricReactive };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricReactive.prototype.unsubscribe$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXJlYWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiY29tbW9uL2ZhYnJpYy1yZWFjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFM0M7Ozs7SUFJQztRQUZpQixpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUFHcEQsQ0FBQzs7OztJQUVELG9DQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7OztJQUVTLG9DQUFXOzs7O0lBQXJCO1FBRUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRTtZQUNoQyxPQUFPO1NBQ1A7UUFFRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFUyxrQ0FBUzs7OztJQUFuQjtRQUNDLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUYscUJBQUM7QUFBRCxDQUFDLEFBekJELElBeUJDOzs7Ozs7Ozs7O0lBdkJBLHNDQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRmFicmljUmVhY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVuc3Vic2NyaWJlKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgdW5zdWJzY3JpYmUoKTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy51bnN1YnNjcmliZSQuaXNTdG9wcGVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgdGFrZVVudGlsKCkge1xuXHRcdHJldHVybiB0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpO1xuXHR9XG5cbn1cbiJdfQ==