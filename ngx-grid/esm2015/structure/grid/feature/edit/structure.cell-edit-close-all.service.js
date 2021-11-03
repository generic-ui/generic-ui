import { Injectable } from '@angular/core';
import { HermesSubject } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export class StructureCellEditCloseAllService {
    constructor() {
        this.closeAll$ = new HermesSubject();
    }
    closeAll() {
        this.closeAll$.next();
    }
    onCloseAll() {
        return this.closeAll$.toObservable();
    }
}
StructureCellEditCloseAllService.ɵfac = function StructureCellEditCloseAllService_Factory(t) { return new (t || StructureCellEditCloseAllService)(); };
StructureCellEditCloseAllService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StructureCellEditCloseAllService, factory: StructureCellEditCloseAllService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureCellEditCloseAllService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNlbGwtZWRpdC1jbG9zZS1hbGwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL2dyaWQvZmVhdHVyZS9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQtY2xvc2UtYWxsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQW9CLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUdyRSxNQUFNLE9BQU8sZ0NBQWdDO0lBRDdDO1FBR2tCLGNBQVMsR0FBRyxJQUFJLGFBQWEsRUFBUSxDQUFDO0tBU3ZEO0lBUEEsUUFBUTtRQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEMsQ0FBQzs7Z0hBVlcsZ0NBQWdDO3NGQUFoQyxnQ0FBZ0MsV0FBaEMsZ0NBQWdDO3VGQUFoQyxnQ0FBZ0M7Y0FENUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlcm1lc09ic2VydmFibGUsIEhlcm1lc1N1YmplY3QgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ2VsbEVkaXRDbG9zZUFsbFNlcnZpY2Uge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY2xvc2VBbGwkID0gbmV3IEhlcm1lc1N1YmplY3Q8dm9pZD4oKTtcblxuXHRjbG9zZUFsbCgpOiB2b2lkIHtcblx0XHR0aGlzLmNsb3NlQWxsJC5uZXh0KCk7XG5cdH1cblxuXHRvbkNsb3NlQWxsKCk6IEhlcm1lc09ic2VydmFibGU8dm9pZD4ge1xuXHRcdHJldHVybiB0aGlzLmNsb3NlQWxsJC50b09ic2VydmFibGUoKTtcblx0fVxufVxuIl19