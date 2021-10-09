/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HermesSubject } from '@generic-ui/hermes';
var StructureCellEditCloseAllService = /** @class */ (function () {
    function StructureCellEditCloseAllService() {
        this.closeAll$ = new HermesSubject();
    }
    /**
     * @return {?}
     */
    StructureCellEditCloseAllService.prototype.closeAll = /**
     * @return {?}
     */
    function () {
        this.closeAll$.next();
    };
    /**
     * @return {?}
     */
    StructureCellEditCloseAllService.prototype.onCloseAll = /**
     * @return {?}
     */
    function () {
        return this.closeAll$.toObservable();
    };
    StructureCellEditCloseAllService.decorators = [
        { type: Injectable }
    ];
    return StructureCellEditCloseAllService;
}());
export { StructureCellEditCloseAllService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureCellEditCloseAllService.prototype.closeAll$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNlbGwtZWRpdC1jbG9zZS1hbGwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQtY2xvc2UtYWxsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFvQixhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRTtJQUFBO1FBR2tCLGNBQVMsR0FBRyxJQUFJLGFBQWEsRUFBUSxDQUFDO0lBU3hELENBQUM7Ozs7SUFQQSxtREFBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxxREFBVTs7O0lBQVY7UUFDQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEMsQ0FBQzs7Z0JBWEQsVUFBVTs7SUFZWCx1Q0FBQztDQUFBLEFBWkQsSUFZQztTQVhZLGdDQUFnQzs7Ozs7O0lBRTVDLHFEQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlcm1lc09ic2VydmFibGUsIEhlcm1lc1N1YmplY3QgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ2VsbEVkaXRDbG9zZUFsbFNlcnZpY2Uge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY2xvc2VBbGwkID0gbmV3IEhlcm1lc1N1YmplY3Q8dm9pZD4oKTtcblxuXHRjbG9zZUFsbCgpOiB2b2lkIHtcblx0XHR0aGlzLmNsb3NlQWxsJC5uZXh0KCk7XG5cdH1cblxuXHRvbkNsb3NlQWxsKCk6IEhlcm1lc09ic2VydmFibGU8dm9pZD4ge1xuXHRcdHJldHVybiB0aGlzLmNsb3NlQWxsJC50b09ic2VydmFibGUoKTtcblx0fVxufVxuIl19