/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
var ToggleButtonGroupService = /** @class */ (function () {
    function ToggleButtonGroupService() {
        this.toggleButtonId$ = new Subject();
    }
    /**
     * @return {?}
     */
    ToggleButtonGroupService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.toggleButtonId$.next();
        this.toggleButtonId$.complete();
    };
    /**
     * @return {?}
     */
    ToggleButtonGroupService.prototype.observeToggledButton = /**
     * @return {?}
     */
    function () {
        return this.toggleButtonId$.asObservable();
    };
    /**
     * @param {?} id
     * @return {?}
     */
    ToggleButtonGroupService.prototype.toggleButton = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this.toggleButtonId$.next(id);
    };
    ToggleButtonGroupService.decorators = [
        { type: Injectable }
    ];
    return ToggleButtonGroupService;
}());
export { ToggleButtonGroupService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToggleButtonGroupService.prototype.toggleButtonId$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWJ1dHRvbi1ncm91cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiYnV0dG9ucy1pbmRpY2F0b3JzL3RvZ2dsZS1idXR0b24tZ3JvdXAvdG9nZ2xlLWJ1dHRvbi1ncm91cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFdEQ7SUFBQTtRQUlrQixvQkFBZSxHQUFvQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBY25FLENBQUM7Ozs7SUFaQSw4Q0FBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELHVEQUFvQjs7O0lBQXBCO1FBQ0MsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRUQsK0NBQVk7Ozs7SUFBWixVQUFhLEVBQVU7UUFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Z0JBakJELFVBQVU7O0lBa0JYLCtCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FoQlksd0JBQXdCOzs7Ozs7SUFFcEMsbURBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIFRvZ2dsZUJ1dHRvbkdyb3VwU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSB0b2dnbGVCdXR0b25JZCQ6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0KCk7XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy50b2dnbGVCdXR0b25JZCQubmV4dCgpO1xuXHRcdHRoaXMudG9nZ2xlQnV0dG9uSWQkLmNvbXBsZXRlKCk7XG5cdH1cblxuXHRvYnNlcnZlVG9nZ2xlZEJ1dHRvbigpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnRvZ2dsZUJ1dHRvbklkJC5hc09ic2VydmFibGUoKTtcblx0fVxuXG5cdHRvZ2dsZUJ1dHRvbihpZDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy50b2dnbGVCdXR0b25JZCQubmV4dChpZCk7XG5cdH1cbn1cbiJdfQ==