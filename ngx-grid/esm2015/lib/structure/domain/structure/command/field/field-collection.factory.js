/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FieldFactory } from './data-type/field.factory';
import { FieldCollection } from './field.collection';
export class FieldCollectionFactory {
    /**
     * @param {?} fieldFactory
     */
    constructor(fieldFactory) {
        this.fieldFactory = fieldFactory;
    }
    /**
     * @return {?}
     */
    create() {
        return new FieldCollection(this.fieldFactory);
    }
}
FieldCollectionFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FieldCollectionFactory.ctorParameters = () => [
    { type: FieldFactory }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldCollectionFactory.prototype.fieldFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtY29sbGVjdGlvbi5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9maWVsZC1jb2xsZWN0aW9uLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUlyRCxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBRWxDLFlBQW9CLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQzlDLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0wsT0FBTyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7O1lBUkQsVUFBVTs7OztZQUpGLFlBQVk7Ozs7Ozs7SUFPUiw4Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWVsZEZhY3RvcnkgfSBmcm9tICcuL2RhdGEtdHlwZS9maWVsZC5mYWN0b3J5JztcbmltcG9ydCB7IEZpZWxkQ29sbGVjdGlvbiB9IGZyb20gJy4vZmllbGQuY29sbGVjdGlvbic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpZWxkQ29sbGVjdGlvbkZhY3Rvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZmllbGRGYWN0b3J5OiBGaWVsZEZhY3RvcnkpIHtcblx0fVxuXG5cdGNyZWF0ZSgpOiBGaWVsZENvbGxlY3Rpb24ge1xuXHRcdHJldHVybiBuZXcgRmllbGRDb2xsZWN0aW9uKHRoaXMuZmllbGRGYWN0b3J5KTtcblx0fVxuXG59XG4iXX0=