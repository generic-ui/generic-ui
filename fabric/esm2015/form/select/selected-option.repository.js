/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
export class FabricSelectedOptionsRepository {
    constructor() {
        this.selectedOption$ = new ReplaySubject(1);
    }
    /**
     * @return {?}
     */
    onSelectedOption() {
        return this.selectedOption$.asObservable();
    }
    /**
     * @param {?} option
     * @return {?}
     */
    next(option) {
        this.selectedOption$.next(option);
    }
}
FabricSelectedOptionsRepository.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricSelectedOptionsRepository.prototype.selectedOption$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWQtb3B0aW9uLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJmb3JtL3NlbGVjdC9zZWxlY3RlZC1vcHRpb24ucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSWpELE1BQU0sT0FBTywrQkFBK0I7SUFENUM7UUFHa0Isb0JBQWUsR0FBRyxJQUFJLGFBQWEsQ0FBa0IsQ0FBQyxDQUFDLENBQUM7SUFVMUUsQ0FBQzs7OztJQVJBLGdCQUFnQjtRQUNmLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVELElBQUksQ0FBQyxNQUF1QjtRQUMzQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7WUFYRCxVQUFVOzs7Ozs7O0lBR1YsMERBQXlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgR3VpU2VsZWN0T3B0aW9uIH0gZnJvbSAnLi9zZWxlY3Qtb3B0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY1NlbGVjdGVkT3B0aW9uc1JlcG9zaXRvcnkge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc2VsZWN0ZWRPcHRpb24kID0gbmV3IFJlcGxheVN1YmplY3Q8R3VpU2VsZWN0T3B0aW9uPigxKTtcblxuXHRvblNlbGVjdGVkT3B0aW9uKCk6IE9ic2VydmFibGU8R3VpU2VsZWN0T3B0aW9uPiB7XG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWRPcHRpb24kLmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG5cblx0bmV4dChvcHRpb246IEd1aVNlbGVjdE9wdGlvbik6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRPcHRpb24kLm5leHQob3B0aW9uKTtcblx0fVxuXG59XG4iXX0=