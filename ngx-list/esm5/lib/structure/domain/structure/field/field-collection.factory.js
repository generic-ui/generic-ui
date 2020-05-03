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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtY29sbGVjdGlvbi5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvZmllbGQvZmllbGQtY29sbGVjdGlvbi5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHckQ7SUFHQyxnQ0FBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFDOUMsQ0FBQzs7OztJQUVELHVDQUFNOzs7SUFBTjtRQUNDLE9BQU8sSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7O2dCQVJELFVBQVU7Ozs7Z0JBSkYsWUFBWTs7SUFjckIsNkJBQUM7Q0FBQSxBQVZELElBVUM7U0FUWSxzQkFBc0I7Ozs7OztJQUV0Qiw4Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZpZWxkRmFjdG9yeSB9IGZyb20gJy4vZGF0YS10eXBlL2ZpZWxkLmZhY3RvcnknO1xuaW1wb3J0IHsgRmllbGRDb2xsZWN0aW9uIH0gZnJvbSAnLi9maWVsZC5jb2xsZWN0aW9uJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmllbGRDb2xsZWN0aW9uRmFjdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBmaWVsZEZhY3Rvcnk6IEZpZWxkRmFjdG9yeSkge1xuXHR9XG5cblx0Y3JlYXRlKCk6IEZpZWxkQ29sbGVjdGlvbiB7XG5cdFx0cmV0dXJuIG5ldyBGaWVsZENvbGxlY3Rpb24odGhpcy5maWVsZEZhY3RvcnkpO1xuXHR9XG5cbn1cbiJdfQ==