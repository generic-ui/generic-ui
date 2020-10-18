/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SourceManager } from './source.manager';
import { FormationManagerFactory } from '../formation/core/formation.manager-factory';
export class SourceManagerFactory {
    /**
     * @param {?} formationManagerFactory
     */
    constructor(formationManagerFactory) {
        this.formationManagerFactory = formationManagerFactory;
    }
    /**
     * @return {?}
     */
    createDefault() {
        /** @type {?} */
        const fm = this.formationManagerFactory.create();
        return new SourceManager(fm);
    }
    /**
     * @return {?}
     */
    create() {
        /** @type {?} */
        const fm = this.formationManagerFactory.create();
        return new SourceManager(fm);
    }
}
SourceManagerFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SourceManagerFactory.ctorParameters = () => [
    { type: FormationManagerFactory }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceManagerFactory.prototype.formationManagerFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLm1hbmFnZXItZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9jb3JlL2RvbWFpbi9jb3JlL3NvdXJjZS5tYW5hZ2VyLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBSXRGLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFFaEMsWUFBNkIsdUJBQWdEO1FBQWhELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7SUFDN0UsQ0FBQzs7OztJQUVELGFBQWE7O2NBRU4sRUFBRSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLEVBQUU7UUFFaEQsT0FBTyxJQUFJLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsTUFBTTs7Y0FDQyxFQUFFLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sRUFBRTtRQUVoRCxPQUFPLElBQUksYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQWpCRCxVQUFVOzs7O1lBSEYsdUJBQXVCOzs7Ozs7O0lBTW5CLHVEQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNvdXJjZU1hbmFnZXIgfSBmcm9tICcuL3NvdXJjZS5tYW5hZ2VyJztcbmltcG9ydCB7IEZvcm1hdGlvbk1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vZm9ybWF0aW9uL2NvcmUvZm9ybWF0aW9uLm1hbmFnZXItZmFjdG9yeSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNvdXJjZU1hbmFnZXJGYWN0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbk1hbmFnZXJGYWN0b3J5OiBGb3JtYXRpb25NYW5hZ2VyRmFjdG9yeSkge1xuXHR9XG5cblx0Y3JlYXRlRGVmYXVsdCgpOiBTb3VyY2VNYW5hZ2VyIHtcblxuXHRcdGNvbnN0IGZtID0gdGhpcy5mb3JtYXRpb25NYW5hZ2VyRmFjdG9yeS5jcmVhdGUoKTtcblxuXHRcdHJldHVybiBuZXcgU291cmNlTWFuYWdlcihmbSk7XG5cdH1cblxuXHRjcmVhdGUoKTogU291cmNlTWFuYWdlciB7XG5cdFx0Y29uc3QgZm0gPSB0aGlzLmZvcm1hdGlvbk1hbmFnZXJGYWN0b3J5LmNyZWF0ZSgpO1xuXG5cdFx0cmV0dXJuIG5ldyBTb3VyY2VNYW5hZ2VyKGZtKTtcblx0fVxuXG59XG4iXX0=