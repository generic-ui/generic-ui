/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var RandomStringGenerator = /** @class */ (function () {
    function RandomStringGenerator() {
    }
    /**
     * @return {?}
     */
    RandomStringGenerator.generate = /**
     * @return {?}
     */
    function () {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + ("" + RandomStringGenerator.index++);
    };
    RandomStringGenerator.index = 0;
    RandomStringGenerator.decorators = [
        { type: Injectable }
    ];
    return RandomStringGenerator;
}());
export { RandomStringGenerator };
if (false) {
    /** @type {?} */
    RandomStringGenerator.index;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZG9tLXN0cmluZy5nZW5lcmF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vcmFuZG9tLXN0cmluZy5nZW5lcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0M7SUFBQTtJQVNBLENBQUM7Ozs7SUFKTyw4QkFBUTs7O0lBQWY7UUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUcsS0FBRyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUksQ0FBQSxDQUFDO0lBQ3ZJLENBQUM7SUFKTSwyQkFBSyxHQUFHLENBQUMsQ0FBQzs7Z0JBSGpCLFVBQVU7O0lBU1gsNEJBQUM7Q0FBQSxBQVRELElBU0M7U0FSWSxxQkFBcUI7OztJQUVqQyw0QkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSYW5kb21TdHJpbmdHZW5lcmF0b3Ige1xuXG5cdHN0YXRpYyBpbmRleCA9IDA7XG5cblx0c3RhdGljIGdlbmVyYXRlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCAxNSkgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgMTUpICsgYCR7UmFuZG9tU3RyaW5nR2VuZXJhdG9yLmluZGV4Kyt9YDtcblx0fVxuXG59XG4iXX0=