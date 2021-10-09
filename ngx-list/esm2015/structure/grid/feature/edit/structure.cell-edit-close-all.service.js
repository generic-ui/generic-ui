/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HermesSubject } from '@generic-ui/hermes';
export class StructureCellEditCloseAllService {
    constructor() {
        this.closeAll$ = new HermesSubject();
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
        return this.closeAll$.toObservable();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNlbGwtZWRpdC1jbG9zZS1hbGwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQtY2xvc2UtYWxsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFvQixhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdyRSxNQUFNLE9BQU8sZ0NBQWdDO0lBRDdDO1FBR2tCLGNBQVMsR0FBRyxJQUFJLGFBQWEsRUFBUSxDQUFDO0lBU3hELENBQUM7Ozs7SUFQQSxRQUFRO1FBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QyxDQUFDOzs7WUFYRCxVQUFVOzs7Ozs7O0lBR1YscURBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSwgSGVybWVzU3ViamVjdCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDZWxsRWRpdENsb3NlQWxsU2VydmljZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjbG9zZUFsbCQgPSBuZXcgSGVybWVzU3ViamVjdDx2b2lkPigpO1xuXG5cdGNsb3NlQWxsKCk6IHZvaWQge1xuXHRcdHRoaXMuY2xvc2VBbGwkLm5leHQoKTtcblx0fVxuXG5cdG9uQ2xvc2VBbGwoKTogSGVybWVzT2JzZXJ2YWJsZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHRoaXMuY2xvc2VBbGwkLnRvT2JzZXJ2YWJsZSgpO1xuXHR9XG59XG4iXX0=