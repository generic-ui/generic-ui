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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtY29sbGVjdGlvbi5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9maWVsZC1jb2xsZWN0aW9uLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUlyRDtJQUdDLGdDQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUM5QyxDQUFDOzs7O0lBRUQsdUNBQU07OztJQUFOO1FBQ0MsT0FBTyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Z0JBUkQsVUFBVTs7OztnQkFMRixZQUFZOztJQWVyQiw2QkFBQztDQUFBLEFBVkQsSUFVQztTQVRZLHNCQUFzQjs7Ozs7O0lBRXRCLDhDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpZWxkRmFjdG9yeSB9IGZyb20gJy4vZGF0YS10eXBlL2ZpZWxkLmZhY3RvcnknO1xuaW1wb3J0IHsgRmllbGRDb2xsZWN0aW9uIH0gZnJvbSAnLi9maWVsZC5jb2xsZWN0aW9uJztcblxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWVsZENvbGxlY3Rpb25GYWN0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGZpZWxkRmFjdG9yeTogRmllbGRGYWN0b3J5KSB7XG5cdH1cblxuXHRjcmVhdGUoKTogRmllbGRDb2xsZWN0aW9uIHtcblx0XHRyZXR1cm4gbmV3IEZpZWxkQ29sbGVjdGlvbih0aGlzLmZpZWxkRmFjdG9yeSk7XG5cdH1cblxufVxuIl19