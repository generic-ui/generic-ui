/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subject } from 'rxjs';
import { InlineDialogGeometry } from './inline-dialog-geometry';
import { InlineDialogCords } from './inline-dialog-cords';
export class InlineDialogGeometryService {
    /**
     * @param {?} platformId
     */
    constructor(platformId) {
        this.platformId = platformId;
        this.inlineDialogState$ = new Subject();
    }
    /**
     * @return {?}
     */
    observeInlineDialogCords() {
        return this.inlineDialogState$.asObservable();
    }
    /**
     * @param {?} inlineDialogRef
     * @return {?}
     */
    changeGeometry(inlineDialogRef) {
        this.inlineDialogGeometry = new InlineDialogGeometry(inlineDialogRef);
    }
    /**
     * @param {?} element
     * @param {?=} placement
     * @param {?=} offset
     * @return {?}
     */
    getInlineDialogCords(element, placement, offset) {
        if (isPlatformBrowser(this.platformId)) {
            /** @type {?} */
            const inlineDialogCords = new InlineDialogCords(element, this.inlineDialogGeometry, window, placement, offset);
            this.inlineDialogState$.next(inlineDialogCords);
        }
    }
}
InlineDialogGeometryService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InlineDialogGeometryService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWlubGluZS1kaWFsb2ctZ2VvbWV0cnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbIm1vZGFsL2lubGluZS1kaWFsb2cvZmFicmljLWlubGluZS1kaWFsb2ctZ2VvbWV0cnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFjLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFLMUQsTUFBTSxPQUFPLDJCQUEyQjs7OztJQUt2QyxZQUF5QyxVQUFlO1FBQWYsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUZoRCx1QkFBa0IsR0FBRyxJQUFJLE9BQU8sRUFBcUIsQ0FBQztJQUc5RCxDQUFDOzs7O0lBRUQsd0JBQXdCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLGVBQTJCO1FBQ3pDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7Ozs7SUFFRCxvQkFBb0IsQ0FBQyxPQUFtQixFQUFFLFNBQWlDLEVBQUUsTUFBZTtRQUUzRixJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTs7a0JBQ2pDLGlCQUFpQixHQUN0QixJQUFJLGlCQUFpQixDQUNwQixPQUFPLEVBQ1AsSUFBSSxDQUFDLG9CQUFvQixFQUN6QixNQUFNLEVBQ04sU0FBUyxFQUNULE1BQU0sQ0FBQztZQUVULElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUNoRDtJQUNGLENBQUM7OztZQTlCRCxVQUFVOzs7OzRDQU1HLE1BQU0sU0FBQyxXQUFXOzs7Ozs7O0lBSC9CLDJEQUFtRDs7Ozs7SUFDbkQseURBQThEOzs7OztJQUVsRCxpREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IElubGluZURpYWxvZ0dlb21ldHJ5IH0gZnJvbSAnLi9pbmxpbmUtZGlhbG9nLWdlb21ldHJ5JztcbmltcG9ydCB7IElubGluZURpYWxvZ0NvcmRzIH0gZnJvbSAnLi9pbmxpbmUtZGlhbG9nLWNvcmRzJztcbmltcG9ydCB7IElubGluZURpYWxvZ1BsYWNlbWVudCB9IGZyb20gJy4vcGxhY2VtZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5saW5lRGlhbG9nR2VvbWV0cnlTZXJ2aWNlIHtcblxuXHRwcml2YXRlIGlubGluZURpYWxvZ0dlb21ldHJ5OiBJbmxpbmVEaWFsb2dHZW9tZXRyeTtcblx0cHJpdmF0ZSBpbmxpbmVEaWFsb2dTdGF0ZSQgPSBuZXcgU3ViamVjdDxJbmxpbmVEaWFsb2dDb3Jkcz4oKTtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSkge1xuXHR9XG5cblx0b2JzZXJ2ZUlubGluZURpYWxvZ0NvcmRzKCk6IE9ic2VydmFibGU8SW5saW5lRGlhbG9nQ29yZHM+IHtcblx0XHRyZXR1cm4gdGhpcy5pbmxpbmVEaWFsb2dTdGF0ZSQuYXNPYnNlcnZhYmxlKCk7XG5cdH1cblxuXHRjaGFuZ2VHZW9tZXRyeShpbmxpbmVEaWFsb2dSZWY6IEVsZW1lbnRSZWYpOiB2b2lkIHtcblx0XHR0aGlzLmlubGluZURpYWxvZ0dlb21ldHJ5ID0gbmV3IElubGluZURpYWxvZ0dlb21ldHJ5KGlubGluZURpYWxvZ1JlZik7XG5cdH1cblxuXHRnZXRJbmxpbmVEaWFsb2dDb3JkcyhlbGVtZW50OiBFbGVtZW50UmVmLCBwbGFjZW1lbnQ/OiBJbmxpbmVEaWFsb2dQbGFjZW1lbnQsIG9mZnNldD86IG51bWJlcik6IHZvaWQge1xuXG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdGNvbnN0IGlubGluZURpYWxvZ0NvcmRzID1cblx0XHRcdFx0bmV3IElubGluZURpYWxvZ0NvcmRzKFxuXHRcdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHRcdFx0dGhpcy5pbmxpbmVEaWFsb2dHZW9tZXRyeSxcblx0XHRcdFx0XHR3aW5kb3csXG5cdFx0XHRcdFx0cGxhY2VtZW50LFxuXHRcdFx0XHRcdG9mZnNldCk7XG5cblx0XHRcdHRoaXMuaW5saW5lRGlhbG9nU3RhdGUkLm5leHQoaW5saW5lRGlhbG9nQ29yZHMpO1xuXHRcdH1cblx0fVxufVxuIl19