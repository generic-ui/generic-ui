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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtY29sbGVjdGlvbi5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9maWVsZC1jb2xsZWN0aW9uLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUtyRCxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBRWxDLFlBQW9CLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQzlDLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0wsT0FBTyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7O1lBUkQsVUFBVTs7OztZQUxGLFlBQVk7Ozs7Ozs7SUFRUiw4Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWVsZEZhY3RvcnkgfSBmcm9tICcuL2RhdGEtdHlwZS9maWVsZC5mYWN0b3J5JztcbmltcG9ydCB7IEZpZWxkQ29sbGVjdGlvbiB9IGZyb20gJy4vZmllbGQuY29sbGVjdGlvbic7XG5cblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmllbGRDb2xsZWN0aW9uRmFjdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBmaWVsZEZhY3Rvcnk6IEZpZWxkRmFjdG9yeSkge1xuXHR9XG5cblx0Y3JlYXRlKCk6IEZpZWxkQ29sbGVjdGlvbiB7XG5cdFx0cmV0dXJuIG5ldyBGaWVsZENvbGxlY3Rpb24odGhpcy5maWVsZEZhY3RvcnkpO1xuXHR9XG5cbn1cbiJdfQ==