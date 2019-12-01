/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FieldFactory } from './data-type/field.factory';
import { FieldContainer } from './field.container';
var FieldContainerFactory = /** @class */ (function () {
    function FieldContainerFactory(fieldFactory) {
        this.fieldFactory = fieldFactory;
    }
    /**
     * @return {?}
     */
    FieldContainerFactory.prototype.create = /**
     * @return {?}
     */
    function () {
        return new FieldContainer(this.fieldFactory);
    };
    FieldContainerFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FieldContainerFactory.ctorParameters = function () { return [
        { type: FieldFactory }
    ]; };
    return FieldContainerFactory;
}());
export { FieldContainerFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldContainerFactory.prototype.fieldFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtY29udGFpbmVyLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2ZpZWxkLWNvbnRhaW5lci5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFJbkQ7SUFHQywrQkFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFDOUMsQ0FBQzs7OztJQUVELHNDQUFNOzs7SUFBTjtRQUNDLE9BQU8sSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlDLENBQUM7O2dCQVJELFVBQVU7Ozs7Z0JBTEYsWUFBWTs7SUFlckIsNEJBQUM7Q0FBQSxBQVZELElBVUM7U0FUWSxxQkFBcUI7Ozs7OztJQUVyQiw2Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWVsZEZhY3RvcnkgfSBmcm9tICcuL2RhdGEtdHlwZS9maWVsZC5mYWN0b3J5JztcbmltcG9ydCB7IEZpZWxkQ29udGFpbmVyIH0gZnJvbSAnLi9maWVsZC5jb250YWluZXInO1xuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpZWxkQ29udGFpbmVyRmFjdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBmaWVsZEZhY3Rvcnk6IEZpZWxkRmFjdG9yeSkge1xuXHR9XG5cblx0Y3JlYXRlKCk6IEZpZWxkQ29udGFpbmVyIHtcblx0XHRyZXR1cm4gbmV3IEZpZWxkQ29udGFpbmVyKHRoaXMuZmllbGRGYWN0b3J5KTtcblx0fVxuXG59XG4iXX0=