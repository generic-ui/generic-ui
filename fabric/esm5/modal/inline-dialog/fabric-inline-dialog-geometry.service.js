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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWlubGluZS1kaWFsb2ctZ2VvbWV0cnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbIm1vZGFsL2lubGluZS1kaWFsb2cvZmFicmljLWlubGluZS1kaWFsb2ctZ2VvbWV0cnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFjLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFJMUQ7SUFNQyxxQ0FBeUMsVUFBZTtRQUFmLGVBQVUsR0FBVixVQUFVLENBQUs7UUFGaEQsdUJBQWtCLEdBQUcsSUFBSSxPQUFPLEVBQXFCLENBQUM7SUFHOUQsQ0FBQzs7OztJQUVELDhEQUF3Qjs7O0lBQXhCO1FBQ0MsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFRCxvREFBYzs7OztJQUFkLFVBQWUsZUFBMkI7UUFDekMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksb0JBQW9CLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7Ozs7OztJQUVELDBEQUFvQjs7Ozs7O0lBQXBCLFVBQXFCLE9BQW1CLEVBQUUsU0FBaUMsRUFBRSxNQUFlO1FBRTNGLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFOztnQkFDakMsaUJBQWlCLEdBQ3RCLElBQUksaUJBQWlCLENBQ3BCLE9BQU8sRUFDUCxJQUFJLENBQUMsb0JBQW9CLEVBQ3pCLE1BQU0sRUFDTixTQUFTLEVBQ1QsTUFBTSxDQUFDO1lBRVQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0YsQ0FBQzs7Z0JBOUJELFVBQVU7Ozs7Z0RBTUcsTUFBTSxTQUFDLFdBQVc7O0lBeUJoQyxrQ0FBQztDQUFBLEFBL0JELElBK0JDO1NBOUJZLDJCQUEyQjs7Ozs7O0lBRXZDLDJEQUFtRDs7Ozs7SUFDbkQseURBQThEOzs7OztJQUVsRCxpREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IElubGluZURpYWxvZ0dlb21ldHJ5IH0gZnJvbSAnLi9pbmxpbmUtZGlhbG9nLWdlb21ldHJ5JztcbmltcG9ydCB7IElubGluZURpYWxvZ0NvcmRzIH0gZnJvbSAnLi9pbmxpbmUtZGlhbG9nLWNvcmRzJztcbmltcG9ydCB7IElubGluZURpYWxvZ1BsYWNlbWVudCB9IGZyb20gJy4vcGxhY2VtZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5saW5lRGlhbG9nR2VvbWV0cnlTZXJ2aWNlIHtcblxuXHRwcml2YXRlIGlubGluZURpYWxvZ0dlb21ldHJ5OiBJbmxpbmVEaWFsb2dHZW9tZXRyeTtcblx0cHJpdmF0ZSBpbmxpbmVEaWFsb2dTdGF0ZSQgPSBuZXcgU3ViamVjdDxJbmxpbmVEaWFsb2dDb3Jkcz4oKTtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSkge1xuXHR9XG5cblx0b2JzZXJ2ZUlubGluZURpYWxvZ0NvcmRzKCk6IE9ic2VydmFibGU8SW5saW5lRGlhbG9nQ29yZHM+IHtcblx0XHRyZXR1cm4gdGhpcy5pbmxpbmVEaWFsb2dTdGF0ZSQuYXNPYnNlcnZhYmxlKCk7XG5cdH1cblxuXHRjaGFuZ2VHZW9tZXRyeShpbmxpbmVEaWFsb2dSZWY6IEVsZW1lbnRSZWYpOiB2b2lkIHtcblx0XHR0aGlzLmlubGluZURpYWxvZ0dlb21ldHJ5ID0gbmV3IElubGluZURpYWxvZ0dlb21ldHJ5KGlubGluZURpYWxvZ1JlZik7XG5cdH1cblxuXHRnZXRJbmxpbmVEaWFsb2dDb3JkcyhlbGVtZW50OiBFbGVtZW50UmVmLCBwbGFjZW1lbnQ/OiBJbmxpbmVEaWFsb2dQbGFjZW1lbnQsIG9mZnNldD86IG51bWJlcik6IHZvaWQge1xuXG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdGNvbnN0IGlubGluZURpYWxvZ0NvcmRzID1cblx0XHRcdFx0bmV3IElubGluZURpYWxvZ0NvcmRzKFxuXHRcdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHRcdFx0dGhpcy5pbmxpbmVEaWFsb2dHZW9tZXRyeSxcblx0XHRcdFx0XHR3aW5kb3csXG5cdFx0XHRcdFx0cGxhY2VtZW50LFxuXHRcdFx0XHRcdG9mZnNldCk7XG5cblx0XHRcdHRoaXMuaW5saW5lRGlhbG9nU3RhdGUkLm5leHQoaW5saW5lRGlhbG9nQ29yZHMpO1xuXHRcdH1cblx0fVxufVxuIl19