/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
export class ToggleButtonGroupService {
    constructor() {
        this.toggleButtonId$ = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.toggleButtonId$.next();
        this.toggleButtonId$.complete();
    }
    /**
     * @return {?}
     */
    observeToggledButton() {
        return this.toggleButtonId$.asObservable();
    }
    /**
     * @param {?} id
     * @return {?}
     */
    toggleButton(id) {
        this.toggleButtonId$.next(id);
    }
}
ToggleButtonGroupService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToggleButtonGroupService.prototype.toggleButtonId$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWJ1dHRvbi1ncm91cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiYnV0dG9ucy1pbmRpY2F0b3JzL3RvZ2dsZS1idXR0b24tZ3JvdXAvdG9nZ2xlLWJ1dHRvbi1ncm91cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFJdEQsTUFBTSxPQUFPLHdCQUF3QjtJQUZyQztRQUlrQixvQkFBZSxHQUFvQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBY25FLENBQUM7Ozs7SUFaQSxXQUFXO1FBQ1YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFRCxvQkFBb0I7UUFDbkIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLEVBQVU7UUFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7O1lBakJELFVBQVU7Ozs7Ozs7SUFJVixtREFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuXG5leHBvcnQgY2xhc3MgVG9nZ2xlQnV0dG9uR3JvdXBTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHRvZ2dsZUJ1dHRvbklkJDogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3QoKTtcblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnRvZ2dsZUJ1dHRvbklkJC5uZXh0KCk7XG5cdFx0dGhpcy50b2dnbGVCdXR0b25JZCQuY29tcGxldGUoKTtcblx0fVxuXG5cdG9ic2VydmVUb2dnbGVkQnV0dG9uKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMudG9nZ2xlQnV0dG9uSWQkLmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG5cblx0dG9nZ2xlQnV0dG9uKGlkOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnRvZ2dsZUJ1dHRvbklkJC5uZXh0KGlkKTtcblx0fVxufVxuIl19