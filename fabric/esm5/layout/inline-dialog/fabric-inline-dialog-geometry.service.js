/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subject } from 'rxjs';
import { InlineDialogGeometry } from './inline-dialog-geometry';
import { InlineDialogCords } from './inline-dialog-cords';
var InlineDialogGeometryService = /** @class */ (function () {
    function InlineDialogGeometryService(platformId) {
        this.platformId = platformId;
        this.inlineDialogState$ = new Subject();
    }
    /**
     * @return {?}
     */
    InlineDialogGeometryService.prototype.observeInlineDialogCords = /**
     * @return {?}
     */
    function () {
        return this.inlineDialogState$.asObservable();
    };
    /**
     * @param {?} inlineDialogRef
     * @return {?}
     */
    InlineDialogGeometryService.prototype.changeGeometry = /**
     * @param {?} inlineDialogRef
     * @return {?}
     */
    function (inlineDialogRef) {
        this.inlineDialogGeometry = new InlineDialogGeometry(inlineDialogRef);
    };
    /**
     * @param {?} element
     * @param {?=} placement
     * @param {?=} offset
     * @return {?}
     */
    InlineDialogGeometryService.prototype.getInlineDialogCords = /**
     * @param {?} element
     * @param {?=} placement
     * @param {?=} offset
     * @return {?}
     */
    function (element, placement, offset) {
        if (isPlatformBrowser(this.platformId)) {
            /** @type {?} */
            var inlineDialogCords = new InlineDialogCords(element, this.inlineDialogGeometry, window, placement, offset);
            this.inlineDialogState$.next(inlineDialogCords);
        }
    };
    InlineDialogGeometryService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InlineDialogGeometryService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    return InlineDialogGeometryService;
}());
export { InlineDialogGeometryService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    InlineDialogGeometryService.prototype.inlineDialogGeometry;
    /**
     * @type {?}
     * @private
     */
    InlineDialogGeometryService.prototype.inlineDialogState$;
    /**
     * @type {?}
     * @private
     */
    InlineDialogGeometryService.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWlubGluZS1kaWFsb2ctZ2VvbWV0cnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImxheW91dC9pbmxpbmUtZGlhbG9nL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLWdlb21ldHJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYyxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSTFEO0lBTUMscUNBQXlDLFVBQWU7UUFBZixlQUFVLEdBQVYsVUFBVSxDQUFLO1FBRmhELHVCQUFrQixHQUFHLElBQUksT0FBTyxFQUFxQixDQUFDO0lBRzlELENBQUM7Ozs7SUFFRCw4REFBd0I7OztJQUF4QjtRQUNDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRUQsb0RBQWM7Ozs7SUFBZCxVQUFlLGVBQTJCO1FBQ3pDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7Ozs7SUFFRCwwREFBb0I7Ozs7OztJQUFwQixVQUFxQixPQUFtQixFQUFFLFNBQWlDLEVBQUUsTUFBZTtRQUUzRixJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTs7Z0JBQ2pDLGlCQUFpQixHQUN0QixJQUFJLGlCQUFpQixDQUNwQixPQUFPLEVBQ1AsSUFBSSxDQUFDLG9CQUFvQixFQUN6QixNQUFNLEVBQ04sU0FBUyxFQUNULE1BQU0sQ0FBQztZQUVULElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUNoRDtJQUNGLENBQUM7O2dCQTlCRCxVQUFVOzs7O2dEQU1HLE1BQU0sU0FBQyxXQUFXOztJQXlCaEMsa0NBQUM7Q0FBQSxBQS9CRCxJQStCQztTQTlCWSwyQkFBMkI7Ozs7OztJQUV2QywyREFBbUQ7Ozs7O0lBQ25ELHlEQUE4RDs7Ozs7SUFFbEQsaURBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBJbmxpbmVEaWFsb2dHZW9tZXRyeSB9IGZyb20gJy4vaW5saW5lLWRpYWxvZy1nZW9tZXRyeSc7XG5pbXBvcnQgeyBJbmxpbmVEaWFsb2dDb3JkcyB9IGZyb20gJy4vaW5saW5lLWRpYWxvZy1jb3Jkcyc7XG5pbXBvcnQgeyBJbmxpbmVEaWFsb2dQbGFjZW1lbnQgfSBmcm9tICcuL3BsYWNlbWVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIElubGluZURpYWxvZ0dlb21ldHJ5U2VydmljZSB7XG5cblx0cHJpdmF0ZSBpbmxpbmVEaWFsb2dHZW9tZXRyeTogSW5saW5lRGlhbG9nR2VvbWV0cnk7XG5cdHByaXZhdGUgaW5saW5lRGlhbG9nU3RhdGUkID0gbmV3IFN1YmplY3Q8SW5saW5lRGlhbG9nQ29yZHM+KCk7XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBhbnkpIHtcblx0fVxuXG5cdG9ic2VydmVJbmxpbmVEaWFsb2dDb3JkcygpOiBPYnNlcnZhYmxlPElubGluZURpYWxvZ0NvcmRzPiB7XG5cdFx0cmV0dXJuIHRoaXMuaW5saW5lRGlhbG9nU3RhdGUkLmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG5cblx0Y2hhbmdlR2VvbWV0cnkoaW5saW5lRGlhbG9nUmVmOiBFbGVtZW50UmVmKTogdm9pZCB7XG5cdFx0dGhpcy5pbmxpbmVEaWFsb2dHZW9tZXRyeSA9IG5ldyBJbmxpbmVEaWFsb2dHZW9tZXRyeShpbmxpbmVEaWFsb2dSZWYpO1xuXHR9XG5cblx0Z2V0SW5saW5lRGlhbG9nQ29yZHMoZWxlbWVudDogRWxlbWVudFJlZiwgcGxhY2VtZW50PzogSW5saW5lRGlhbG9nUGxhY2VtZW50LCBvZmZzZXQ/OiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRjb25zdCBpbmxpbmVEaWFsb2dDb3JkcyA9XG5cdFx0XHRcdG5ldyBJbmxpbmVEaWFsb2dDb3Jkcyhcblx0XHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0XHRcdHRoaXMuaW5saW5lRGlhbG9nR2VvbWV0cnksXG5cdFx0XHRcdFx0d2luZG93LFxuXHRcdFx0XHRcdHBsYWNlbWVudCxcblx0XHRcdFx0XHRvZmZzZXQpO1xuXG5cdFx0XHR0aGlzLmlubGluZURpYWxvZ1N0YXRlJC5uZXh0KGlubGluZURpYWxvZ0NvcmRzKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==