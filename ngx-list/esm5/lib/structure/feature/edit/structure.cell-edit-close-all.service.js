/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var StructureCellEditCloseAllService = /** @class */ (function () {
    function StructureCellEditCloseAllService() {
        this.closeAll$ = new Subject();
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
        return this.closeAll$.asObservable();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNlbGwtZWRpdC1jbG9zZS1hbGwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC1jbG9zZS1hbGwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTNDO0lBQUE7UUFHa0IsY0FBUyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUFTbEQsQ0FBQzs7OztJQVBBLG1EQUFROzs7SUFBUjtRQUNDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELHFEQUFVOzs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QyxDQUFDOztnQkFYRCxVQUFVOztJQVlYLHVDQUFDO0NBQUEsQUFaRCxJQVlDO1NBWFksZ0NBQWdDOzs7Ozs7SUFFNUMscURBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ2VsbEVkaXRDbG9zZUFsbFNlcnZpY2Uge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY2xvc2VBbGwkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuXHRjbG9zZUFsbCgpOiB2b2lkIHtcblx0XHR0aGlzLmNsb3NlQWxsJC5uZXh0KCk7XG5cdH1cblxuXHRvbkNsb3NlQWxsKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuXHRcdHJldHVybiB0aGlzLmNsb3NlQWxsJC5hc09ic2VydmFibGUoKTtcblx0fVxufVxuIl19