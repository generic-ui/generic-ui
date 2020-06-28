/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FieldCollection } from './field-collection';
import { FieldFactory } from './field/field.factory';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtY29sbGVjdGlvbi5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2NvcmUvZmllbGQtY29sbGVjdGlvbi5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHckQ7SUFHQyxnQ0FBNkIsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFDdkQsQ0FBQzs7OztJQUVELHVDQUFNOzs7SUFBTjtRQUNDLE9BQU8sSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7O2dCQVJELFVBQVU7Ozs7Z0JBSEYsWUFBWTs7SUFhckIsNkJBQUM7Q0FBQSxBQVZELElBVUM7U0FUWSxzQkFBc0I7Ozs7OztJQUV0Qiw4Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZpZWxkQ29sbGVjdGlvbiB9IGZyb20gJy4vZmllbGQtY29sbGVjdGlvbic7XG5pbXBvcnQgeyBGaWVsZEZhY3RvcnkgfSBmcm9tICcuL2ZpZWxkL2ZpZWxkLmZhY3RvcnknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWVsZENvbGxlY3Rpb25GYWN0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZpZWxkRmFjdG9yeTogRmllbGRGYWN0b3J5KSB7XG5cdH1cblxuXHRjcmVhdGUoKTogRmllbGRDb2xsZWN0aW9uIHtcblx0XHRyZXR1cm4gbmV3IEZpZWxkQ29sbGVjdGlvbih0aGlzLmZpZWxkRmFjdG9yeSk7XG5cdH1cblxufVxuIl19