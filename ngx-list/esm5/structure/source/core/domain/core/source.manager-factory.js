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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLm1hbmFnZXItZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9jb3JlL2RvbWFpbi9jb3JlL3NvdXJjZS5tYW5hZ2VyLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBR3RGO0lBR0MsOEJBQTZCLHVCQUFnRDtRQUFoRCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO0lBQzdFLENBQUM7Ozs7SUFFRCw0Q0FBYTs7O0lBQWI7O1lBRU8sRUFBRSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLEVBQUU7UUFFaEQsT0FBTyxJQUFJLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQscUNBQU07OztJQUFOOztZQUNPLEVBQUUsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxFQUFFO1FBRWhELE9BQU8sSUFBSSxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBakJELFVBQVU7Ozs7Z0JBSEYsdUJBQXVCOztJQXNCaEMsMkJBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWxCWSxvQkFBb0I7Ozs7OztJQUVwQix1REFBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTb3VyY2VNYW5hZ2VyIH0gZnJvbSAnLi9zb3VyY2UubWFuYWdlcic7XG5pbXBvcnQgeyBGb3JtYXRpb25NYW5hZ2VyRmFjdG9yeSB9IGZyb20gJy4uL2Zvcm1hdGlvbi9jb3JlL2Zvcm1hdGlvbi5tYW5hZ2VyLWZhY3RvcnknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb3VyY2VNYW5hZ2VyRmFjdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25NYW5hZ2VyRmFjdG9yeTogRm9ybWF0aW9uTWFuYWdlckZhY3RvcnkpIHtcblx0fVxuXG5cdGNyZWF0ZURlZmF1bHQoKTogU291cmNlTWFuYWdlciB7XG5cblx0XHRjb25zdCBmbSA9IHRoaXMuZm9ybWF0aW9uTWFuYWdlckZhY3RvcnkuY3JlYXRlKCk7XG5cblx0XHRyZXR1cm4gbmV3IFNvdXJjZU1hbmFnZXIoZm0pO1xuXHR9XG5cblx0Y3JlYXRlKCk6IFNvdXJjZU1hbmFnZXIge1xuXHRcdGNvbnN0IGZtID0gdGhpcy5mb3JtYXRpb25NYW5hZ2VyRmFjdG9yeS5jcmVhdGUoKTtcblxuXHRcdHJldHVybiBuZXcgU291cmNlTWFuYWdlcihmbSk7XG5cdH1cblxufVxuIl19