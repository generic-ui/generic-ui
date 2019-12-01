/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var GridIdGenerator = /** @class */ (function () {
    function GridIdGenerator() {
    }
    /**
     * @return {?}
     */
    GridIdGenerator.prototype.generateId = /**
     * @return {?}
     */
    function () {
        GridIdGenerator.index++;
        return GridIdGenerator.PREFIX + GridIdGenerator.index;
    };
    GridIdGenerator.PREFIX = 'gui-grid-';
    GridIdGenerator.index = 0;
    GridIdGenerator.decorators = [
        { type: Injectable }
    ];
    return GridIdGenerator;
}());
export { GridIdGenerator };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1pZC5nZW5lcmF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL3VpL2dyaWQvcmVnaXN0ZXIvZ3JpZC1pZC5nZW5lcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0M7SUFBQTtJQVlBLENBQUM7Ozs7SUFMQSxvQ0FBVTs7O0lBQVY7UUFDQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFeEIsT0FBTyxlQUFlLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUM7SUFDdkQsQ0FBQztJQVJ1QixzQkFBTSxHQUFHLFdBQVcsQ0FBQztJQUU5QixxQkFBSyxHQUFHLENBQUMsQ0FBQzs7Z0JBTHpCLFVBQVU7O0lBWVgsc0JBQUM7Q0FBQSxBQVpELElBWUM7U0FYWSxlQUFlOzs7Ozs7SUFFM0IsdUJBQTZDOzs7OztJQUU3QyxzQkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHcmlkSWRHZW5lcmF0b3Ige1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFBSRUZJWCA9ICdndWktZ3JpZC0nO1xuXG5cdHByaXZhdGUgc3RhdGljIGluZGV4ID0gMDtcblxuXHRnZW5lcmF0ZUlkKCk6IHN0cmluZyB7XG5cdFx0R3JpZElkR2VuZXJhdG9yLmluZGV4Kys7XG5cblx0XHRyZXR1cm4gR3JpZElkR2VuZXJhdG9yLlBSRUZJWCArIEdyaWRJZEdlbmVyYXRvci5pbmRleDtcblx0fVxufVxuIl19