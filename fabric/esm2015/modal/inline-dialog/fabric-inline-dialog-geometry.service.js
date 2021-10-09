/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subject } from 'rxjs';
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
        this.inlineDialogGeometry = inlineDialogRef;
    }
    /**
     * @param {?} invokerElementRef
     * @param {?=} placement
     * @param {?=} offset
     * @return {?}
     */
    getInlineDialogCords(invokerElementRef, placement, offset) {
        if (isPlatformBrowser(this.platformId)) {
            /** @type {?} */
            const inlineDialogCords = new InlineDialogCords(invokerElementRef, this.inlineDialogGeometry, window, placement, offset);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWlubGluZS1kaWFsb2ctZ2VvbWV0cnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbIm1vZGFsL2lubGluZS1kaWFsb2cvZmFicmljLWlubGluZS1kaWFsb2ctZ2VvbWV0cnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFjLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBYyxPQUFPLEVBQWlCLE1BQU0sTUFBTSxDQUFDO0FBQzFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSzFELE1BQU0sT0FBTywyQkFBMkI7Ozs7SUFLdkMsWUFBeUMsVUFBZTtRQUFmLGVBQVUsR0FBVixVQUFVLENBQUs7UUFGdEMsdUJBQWtCLEdBQUcsSUFBSSxPQUFPLEVBQXFCLENBQUM7SUFHeEUsQ0FBQzs7OztJQUVELHdCQUF3QjtRQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMvQyxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxlQUEyQjtRQUN6QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsZUFBZSxDQUFDO0lBQzdDLENBQUM7Ozs7Ozs7SUFFRCxvQkFBb0IsQ0FBQyxpQkFBNkIsRUFBRSxTQUEyQixFQUFFLE1BQWU7UUFFL0YsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7O2tCQUNqQyxpQkFBaUIsR0FDdEIsSUFBSSxpQkFBaUIsQ0FDcEIsaUJBQWlCLEVBQ2pCLElBQUksQ0FBQyxvQkFBb0IsRUFDekIsTUFBTSxFQUNOLFNBQVMsRUFDVCxNQUFNLENBQUM7WUFFVCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDaEQ7SUFDRixDQUFDOzs7WUE5QkQsVUFBVTs7Ozs0Q0FNRyxNQUFNLFNBQUMsV0FBVzs7Ozs7OztJQUgvQiwyREFBeUM7Ozs7O0lBQ3pDLHlEQUF3RTs7Ozs7SUFFNUQsaURBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5saW5lRGlhbG9nQ29yZHMgfSBmcm9tICcuL2lubGluZS1kaWFsb2ctY29yZHMnO1xuaW1wb3J0IHsgRmFicmljUGxhY2VtZW50IH0gZnJvbSAnLi4vLi4vY29tbW9uL21vZGFsL2NvcmRzL2ZhYnJpYy1wbGFjZW1lbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbmxpbmVEaWFsb2dHZW9tZXRyeVNlcnZpY2Uge1xuXG5cdHByaXZhdGUgaW5saW5lRGlhbG9nR2VvbWV0cnk6IEVsZW1lbnRSZWY7XG5cdHByaXZhdGUgIHJlYWRvbmx5IGlubGluZURpYWxvZ1N0YXRlJCA9IG5ldyBTdWJqZWN0PElubGluZURpYWxvZ0NvcmRzPigpO1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55KSB7XG5cdH1cblxuXHRvYnNlcnZlSW5saW5lRGlhbG9nQ29yZHMoKTogT2JzZXJ2YWJsZTxJbmxpbmVEaWFsb2dDb3Jkcz4ge1xuXHRcdHJldHVybiB0aGlzLmlubGluZURpYWxvZ1N0YXRlJC5hc09ic2VydmFibGUoKTtcblx0fVxuXG5cdGNoYW5nZUdlb21ldHJ5KGlubGluZURpYWxvZ1JlZjogRWxlbWVudFJlZik6IHZvaWQge1xuXHRcdHRoaXMuaW5saW5lRGlhbG9nR2VvbWV0cnkgPSBpbmxpbmVEaWFsb2dSZWY7XG5cdH1cblxuXHRnZXRJbmxpbmVEaWFsb2dDb3JkcyhpbnZva2VyRWxlbWVudFJlZjogRWxlbWVudFJlZiwgcGxhY2VtZW50PzogRmFicmljUGxhY2VtZW50LCBvZmZzZXQ/OiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRjb25zdCBpbmxpbmVEaWFsb2dDb3JkcyA9XG5cdFx0XHRcdG5ldyBJbmxpbmVEaWFsb2dDb3Jkcyhcblx0XHRcdFx0XHRpbnZva2VyRWxlbWVudFJlZixcblx0XHRcdFx0XHR0aGlzLmlubGluZURpYWxvZ0dlb21ldHJ5LFxuXHRcdFx0XHRcdHdpbmRvdyxcblx0XHRcdFx0XHRwbGFjZW1lbnQsXG5cdFx0XHRcdFx0b2Zmc2V0KTtcblxuXHRcdFx0dGhpcy5pbmxpbmVEaWFsb2dTdGF0ZSQubmV4dChpbmxpbmVEaWFsb2dDb3Jkcyk7XG5cdFx0fVxuXHR9XG59XG4iXX0=