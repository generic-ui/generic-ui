/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class GridIdGenerator {
    /**
     * @return {?}
     */
    generateId() {
        GridIdGenerator.index++;
        return GridIdGenerator.PREFIX + GridIdGenerator.index;
    }
}
GridIdGenerator.PREFIX = 'gui-grid-';
GridIdGenerator.index = 0;
GridIdGenerator.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    GridIdGenerator.PREFIX;
    /**
     * @type {?}
     * @private
     */
    GridIdGenerator.index;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1pZC5nZW5lcmF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL2ZlYXR1cmUvZ3JpZC9yZWdpc3Rlci9ncmlkLWlkLmdlbmVyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxNQUFNLE9BQU8sZUFBZTs7OztJQU0zQixVQUFVO1FBQ1QsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXhCLE9BQU8sZUFBZSxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDO0lBQ3ZELENBQUM7O0FBUnVCLHNCQUFNLEdBQUcsV0FBVyxDQUFDO0FBRTlCLHFCQUFLLEdBQUcsQ0FBQyxDQUFDOztZQUx6QixVQUFVOzs7Ozs7O0lBR1YsdUJBQTZDOzs7OztJQUU3QyxzQkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHcmlkSWRHZW5lcmF0b3Ige1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFBSRUZJWCA9ICdndWktZ3JpZC0nO1xuXG5cdHByaXZhdGUgc3RhdGljIGluZGV4ID0gMDtcblxuXHRnZW5lcmF0ZUlkKCk6IHN0cmluZyB7XG5cdFx0R3JpZElkR2VuZXJhdG9yLmluZGV4Kys7XG5cblx0XHRyZXR1cm4gR3JpZElkR2VuZXJhdG9yLlBSRUZJWCArIEdyaWRJZEdlbmVyYXRvci5pbmRleDtcblx0fVxufVxuIl19