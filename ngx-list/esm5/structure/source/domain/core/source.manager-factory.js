/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SourceManager } from './source.manager';
import { FormationManagerFactory } from '../formation/core/formation.manager-factory';
var SourceManagerFactory = /** @class */ (function () {
    function SourceManagerFactory(formationManagerFactory) {
        this.formationManagerFactory = formationManagerFactory;
    }
    /**
     * @return {?}
     */
    SourceManagerFactory.prototype.createDefault = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var fm = this.formationManagerFactory.create();
        return new SourceManager(fm);
    };
    /**
     * @return {?}
     */
    SourceManagerFactory.prototype.create = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var fm = this.formationManagerFactory.create();
        return new SourceManager(fm);
    };
    SourceManagerFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SourceManagerFactory.ctorParameters = function () { return [
        { type: FormationManagerFactory }
    ]; };
    return SourceManagerFactory;
}());
export { SourceManagerFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceManagerFactory.prototype.formationManagerFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLm1hbmFnZXItZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9kb21haW4vY29yZS9zb3VyY2UubWFuYWdlci1mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUd0RjtJQUdDLDhCQUE2Qix1QkFBZ0Q7UUFBaEQsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtJQUM3RSxDQUFDOzs7O0lBRUQsNENBQWE7OztJQUFiOztZQUVPLEVBQUUsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxFQUFFO1FBRWhELE9BQU8sSUFBSSxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELHFDQUFNOzs7SUFBTjs7WUFDTyxFQUFFLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sRUFBRTtRQUVoRCxPQUFPLElBQUksYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQWpCRCxVQUFVOzs7O2dCQUhGLHVCQUF1Qjs7SUFzQmhDLDJCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FsQlksb0JBQW9COzs7Ozs7SUFFcEIsdURBQWlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU291cmNlTWFuYWdlciB9IGZyb20gJy4vc291cmNlLm1hbmFnZXInO1xuaW1wb3J0IHsgRm9ybWF0aW9uTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuLi9mb3JtYXRpb24vY29yZS9mb3JtYXRpb24ubWFuYWdlci1mYWN0b3J5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU291cmNlTWFuYWdlckZhY3Rvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uTWFuYWdlckZhY3Rvcnk6IEZvcm1hdGlvbk1hbmFnZXJGYWN0b3J5KSB7XG5cdH1cblxuXHRjcmVhdGVEZWZhdWx0KCk6IFNvdXJjZU1hbmFnZXIge1xuXG5cdFx0Y29uc3QgZm0gPSB0aGlzLmZvcm1hdGlvbk1hbmFnZXJGYWN0b3J5LmNyZWF0ZSgpO1xuXG5cdFx0cmV0dXJuIG5ldyBTb3VyY2VNYW5hZ2VyKGZtKTtcblx0fVxuXG5cdGNyZWF0ZSgpOiBTb3VyY2VNYW5hZ2VyIHtcblx0XHRjb25zdCBmbSA9IHRoaXMuZm9ybWF0aW9uTWFuYWdlckZhY3RvcnkuY3JlYXRlKCk7XG5cblx0XHRyZXR1cm4gbmV3IFNvdXJjZU1hbmFnZXIoZm0pO1xuXHR9XG5cbn1cbiJdfQ==