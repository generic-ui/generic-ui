/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FieldFactory } from './data-type/field.factory';
import { FieldCollection } from './field.collection';
var FieldCollectionFactory = /** @class */ (function () {
    function FieldCollectionFactory(fieldFactory) {
        this.fieldFactory = fieldFactory;
    }
    /**
     * @return {?}
     */
    FieldCollectionFactory.prototype.create = /**
     * @return {?}
     */
    function () {
        return new FieldCollection(this.fieldFactory);
    };
    FieldCollectionFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FieldCollectionFactory.ctorParameters = function () { return [
        { type: FieldFactory }
    ]; };
    return FieldCollectionFactory;
}());
export { FieldCollectionFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldCollectionFactory.prototype.fieldFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtY29sbGVjdGlvbi5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2ZpZWxkLWNvbGxlY3Rpb24uZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3JEO0lBR0MsZ0NBQW9CLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQzlDLENBQUM7Ozs7SUFFRCx1Q0FBTTs7O0lBQU47UUFDQyxPQUFPLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDOztnQkFSRCxVQUFVOzs7O2dCQUpGLFlBQVk7O0lBY3JCLDZCQUFDO0NBQUEsQUFWRCxJQVVDO1NBVFksc0JBQXNCOzs7Ozs7SUFFdEIsOENBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGaWVsZEZhY3RvcnkgfSBmcm9tICcuL2RhdGEtdHlwZS9maWVsZC5mYWN0b3J5JztcbmltcG9ydCB7IEZpZWxkQ29sbGVjdGlvbiB9IGZyb20gJy4vZmllbGQuY29sbGVjdGlvbic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpZWxkQ29sbGVjdGlvbkZhY3Rvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZmllbGRGYWN0b3J5OiBGaWVsZEZhY3RvcnkpIHtcblx0fVxuXG5cdGNyZWF0ZSgpOiBGaWVsZENvbGxlY3Rpb24ge1xuXHRcdHJldHVybiBuZXcgRmllbGRDb2xsZWN0aW9uKHRoaXMuZmllbGRGYWN0b3J5KTtcblx0fVxuXG59XG4iXX0=