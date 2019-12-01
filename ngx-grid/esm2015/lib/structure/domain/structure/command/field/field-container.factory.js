/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FieldFactory } from './data-type/field.factory';
import { FieldContainer } from './field.container';
export class FieldContainerFactory {
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
        return new FieldContainer(this.fieldFactory);
    }
}
FieldContainerFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FieldContainerFactory.ctorParameters = () => [
    { type: FieldFactory }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldContainerFactory.prototype.fieldFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtY29udGFpbmVyLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2ZpZWxkLWNvbnRhaW5lci5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFLbkQsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUVqQyxZQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUM5QyxDQUFDOzs7O0lBRUQsTUFBTTtRQUNMLE9BQU8sSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlDLENBQUM7OztZQVJELFVBQVU7Ozs7WUFMRixZQUFZOzs7Ozs7O0lBUVIsNkNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmllbGRGYWN0b3J5IH0gZnJvbSAnLi9kYXRhLXR5cGUvZmllbGQuZmFjdG9yeSc7XG5pbXBvcnQgeyBGaWVsZENvbnRhaW5lciB9IGZyb20gJy4vZmllbGQuY29udGFpbmVyJztcblxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWVsZENvbnRhaW5lckZhY3Rvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZmllbGRGYWN0b3J5OiBGaWVsZEZhY3RvcnkpIHtcblx0fVxuXG5cdGNyZWF0ZSgpOiBGaWVsZENvbnRhaW5lciB7XG5cdFx0cmV0dXJuIG5ldyBGaWVsZENvbnRhaW5lcih0aGlzLmZpZWxkRmFjdG9yeSk7XG5cdH1cblxufVxuIl19