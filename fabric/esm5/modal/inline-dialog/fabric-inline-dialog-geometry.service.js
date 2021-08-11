/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subject } from 'rxjs';
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
        this.inlineDialogGeometry = inlineDialogRef;
    };
    /**
     * @param {?} invokerElementRef
     * @param {?=} placement
     * @param {?=} offset
     * @return {?}
     */
    InlineDialogGeometryService.prototype.getInlineDialogCords = /**
     * @param {?} invokerElementRef
     * @param {?=} placement
     * @param {?=} offset
     * @return {?}
     */
    function (invokerElementRef, placement, offset) {
        if (isPlatformBrowser(this.platformId)) {
            /** @type {?} */
            var inlineDialogCords = new InlineDialogCords(invokerElementRef, this.inlineDialogGeometry, window, placement, offset);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWlubGluZS1kaWFsb2ctZ2VvbWV0cnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbIm1vZGFsL2lubGluZS1kaWFsb2cvZmFicmljLWlubGluZS1kaWFsb2ctZ2VvbWV0cnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFjLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFJMUQ7SUFNQyxxQ0FBeUMsVUFBZTtRQUFmLGVBQVUsR0FBVixVQUFVLENBQUs7UUFGaEQsdUJBQWtCLEdBQUcsSUFBSSxPQUFPLEVBQXFCLENBQUM7SUFHOUQsQ0FBQzs7OztJQUVELDhEQUF3Qjs7O0lBQXhCO1FBQ0MsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFRCxvREFBYzs7OztJQUFkLFVBQWUsZUFBMkI7UUFDekMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLGVBQWUsQ0FBQztJQUM3QyxDQUFDOzs7Ozs7O0lBRUQsMERBQW9COzs7Ozs7SUFBcEIsVUFBcUIsaUJBQTZCLEVBQUUsU0FBMkIsRUFBRSxNQUFlO1FBRS9GLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFOztnQkFDakMsaUJBQWlCLEdBQ3RCLElBQUksaUJBQWlCLENBQ3BCLGlCQUFpQixFQUNqQixJQUFJLENBQUMsb0JBQW9CLEVBQ3pCLE1BQU0sRUFDTixTQUFTLEVBQ1QsTUFBTSxDQUFDO1lBRVQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0YsQ0FBQzs7Z0JBOUJELFVBQVU7Ozs7Z0RBTUcsTUFBTSxTQUFDLFdBQVc7O0lBeUJoQyxrQ0FBQztDQUFBLEFBL0JELElBK0JDO1NBOUJZLDJCQUEyQjs7Ozs7O0lBRXZDLDJEQUF5Qzs7Ozs7SUFDekMseURBQThEOzs7OztJQUVsRCxpREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmxpbmVEaWFsb2dDb3JkcyB9IGZyb20gJy4vaW5saW5lLWRpYWxvZy1jb3Jkcyc7XG5pbXBvcnQgeyBGYWJyaWNQbGFjZW1lbnQgfSBmcm9tICcuLi8uLi9jb21tb24vbW9kYWwvY29yZHMvZmFicmljLXBsYWNlbWVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIElubGluZURpYWxvZ0dlb21ldHJ5U2VydmljZSB7XG5cblx0cHJpdmF0ZSBpbmxpbmVEaWFsb2dHZW9tZXRyeTogRWxlbWVudFJlZjtcblx0cHJpdmF0ZSBpbmxpbmVEaWFsb2dTdGF0ZSQgPSBuZXcgU3ViamVjdDxJbmxpbmVEaWFsb2dDb3Jkcz4oKTtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSkge1xuXHR9XG5cblx0b2JzZXJ2ZUlubGluZURpYWxvZ0NvcmRzKCk6IE9ic2VydmFibGU8SW5saW5lRGlhbG9nQ29yZHM+IHtcblx0XHRyZXR1cm4gdGhpcy5pbmxpbmVEaWFsb2dTdGF0ZSQuYXNPYnNlcnZhYmxlKCk7XG5cdH1cblxuXHRjaGFuZ2VHZW9tZXRyeShpbmxpbmVEaWFsb2dSZWY6IEVsZW1lbnRSZWYpOiB2b2lkIHtcblx0XHR0aGlzLmlubGluZURpYWxvZ0dlb21ldHJ5ID0gaW5saW5lRGlhbG9nUmVmO1xuXHR9XG5cblx0Z2V0SW5saW5lRGlhbG9nQ29yZHMoaW52b2tlckVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHBsYWNlbWVudD86IEZhYnJpY1BsYWNlbWVudCwgb2Zmc2V0PzogbnVtYmVyKTogdm9pZCB7XG5cblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0Y29uc3QgaW5saW5lRGlhbG9nQ29yZHMgPVxuXHRcdFx0XHRuZXcgSW5saW5lRGlhbG9nQ29yZHMoXG5cdFx0XHRcdFx0aW52b2tlckVsZW1lbnRSZWYsXG5cdFx0XHRcdFx0dGhpcy5pbmxpbmVEaWFsb2dHZW9tZXRyeSxcblx0XHRcdFx0XHR3aW5kb3csXG5cdFx0XHRcdFx0cGxhY2VtZW50LFxuXHRcdFx0XHRcdG9mZnNldCk7XG5cblx0XHRcdHRoaXMuaW5saW5lRGlhbG9nU3RhdGUkLm5leHQoaW5saW5lRGlhbG9nQ29yZHMpO1xuXHRcdH1cblx0fVxufVxuIl19