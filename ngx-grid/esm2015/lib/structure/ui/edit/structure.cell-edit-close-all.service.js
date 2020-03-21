/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export class StructureCellEditCloseAllService {
    constructor() {
        this.closeAll$ = new Subject();
    }
    /**
     * @return {?}
     */
    closeAll() {
        this.closeAll$.next();
    }
    /**
     * @return {?}
     */
    onCloseAll() {
        return this.closeAll$.asObservable();
    }
}
StructureCellEditCloseAllService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureCellEditCloseAllService.prototype.closeAll$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNlbGwtZWRpdC1jbG9zZS1hbGwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQtY2xvc2UtYWxsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUczQyxNQUFNLE9BQU8sZ0NBQWdDO0lBRDdDO1FBR2tCLGNBQVMsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBU2xELENBQUM7Ozs7SUFQQSxRQUFRO1FBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QyxDQUFDOzs7WUFYRCxVQUFVOzs7Ozs7O0lBR1YscURBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ2VsbEVkaXRDbG9zZUFsbFNlcnZpY2Uge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY2xvc2VBbGwkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuXHRjbG9zZUFsbCgpOiB2b2lkIHtcblx0XHR0aGlzLmNsb3NlQWxsJC5uZXh0KCk7XG5cdH1cblxuXHRvbkNsb3NlQWxsKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuXHRcdHJldHVybiB0aGlzLmNsb3NlQWxsJC5hc09ic2VydmFibGUoKTtcblx0fVxufVxuIl19