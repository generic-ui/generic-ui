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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNlbGwtZWRpdC1jbG9zZS1hbGwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZmVhdHVyZS9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQtY2xvc2UtYWxsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUzQztJQUFBO1FBR2tCLGNBQVMsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBU2xELENBQUM7Ozs7SUFQQSxtREFBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxxREFBVTs7O0lBQVY7UUFDQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEMsQ0FBQzs7Z0JBWEQsVUFBVTs7SUFZWCx1Q0FBQztDQUFBLEFBWkQsSUFZQztTQVhZLGdDQUFnQzs7Ozs7O0lBRTVDLHFEQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNlbGxFZGl0Q2xvc2VBbGxTZXJ2aWNlIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNsb3NlQWxsJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cblx0Y2xvc2VBbGwoKTogdm9pZCB7XG5cdFx0dGhpcy5jbG9zZUFsbCQubmV4dCgpO1xuXHR9XG5cblx0b25DbG9zZUFsbCgpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcblx0XHRyZXR1cm4gdGhpcy5jbG9zZUFsbCQuYXNPYnNlcnZhYmxlKCk7XG5cdH1cbn1cbiJdfQ==