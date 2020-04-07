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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWJ1dHRvbi1ncm91cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiZ2VuZXJhbC9idXR0b24vdG9nZ2xlLWJ1dHRvbi1ncm91cC90b2dnbGUtYnV0dG9uLWdyb3VwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUV0RDtJQUFBO1FBSWtCLG9CQUFlLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7SUFjbkUsQ0FBQzs7OztJQVpBLDhDQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsdURBQW9COzs7SUFBcEI7UUFDQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFFRCwrQ0FBWTs7OztJQUFaLFVBQWEsRUFBVTtRQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMvQixDQUFDOztnQkFqQkQsVUFBVTs7SUFrQlgsK0JBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWhCWSx3QkFBd0I7Ozs7OztJQUVwQyxtREFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuXG5leHBvcnQgY2xhc3MgVG9nZ2xlQnV0dG9uR3JvdXBTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHRvZ2dsZUJ1dHRvbklkJDogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3QoKTtcblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnRvZ2dsZUJ1dHRvbklkJC5uZXh0KCk7XG5cdFx0dGhpcy50b2dnbGVCdXR0b25JZCQuY29tcGxldGUoKTtcblx0fVxuXG5cdG9ic2VydmVUb2dnbGVkQnV0dG9uKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMudG9nZ2xlQnV0dG9uSWQkLmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG5cblx0dG9nZ2xlQnV0dG9uKGlkOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnRvZ2dsZUJ1dHRvbklkJC5uZXh0KGlkKTtcblx0fVxufVxuIl19