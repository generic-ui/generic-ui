/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var GuiGridIdGenerator = /** @class */ (function () {
    function GuiGridIdGenerator() {
    }
    /**
     * @return {?}
     */
    GuiGridIdGenerator.prototype.generateId = /**
     * @return {?}
     */
    function () {
        GuiGridIdGenerator.index++;
        return GuiGridIdGenerator.PREFIX + GuiGridIdGenerator.index;
    };
    GuiGridIdGenerator.PREFIX = 'gui-grid-';
    GuiGridIdGenerator.index = 0;
    GuiGridIdGenerator.decorators = [
        { type: Injectable }
    ];
    return GuiGridIdGenerator;
}());
export { GuiGridIdGenerator };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GuiGridIdGenerator.PREFIX;
    /**
     * @type {?}
     * @private
     */
    GuiGridIdGenerator.index;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQtaWQuZ2VuZXJhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvcmVnaXN0ZXIvZ3VpLmdyaWQtaWQuZ2VuZXJhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDO0lBQUE7SUFZQSxDQUFDOzs7O0lBTEEsdUNBQVU7OztJQUFWO1FBQ0Msa0JBQWtCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFM0IsT0FBTyxrQkFBa0IsQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDO0lBQzdELENBQUM7SUFSdUIseUJBQU0sR0FBRyxXQUFXLENBQUM7SUFFOUIsd0JBQUssR0FBRyxDQUFDLENBQUM7O2dCQUx6QixVQUFVOztJQVlYLHlCQUFDO0NBQUEsQUFaRCxJQVlDO1NBWFksa0JBQWtCOzs7Ozs7SUFFOUIsMEJBQTZDOzs7OztJQUU3Qyx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHdWlHcmlkSWRHZW5lcmF0b3Ige1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFBSRUZJWCA9ICdndWktZ3JpZC0nO1xuXG5cdHByaXZhdGUgc3RhdGljIGluZGV4ID0gMDtcblxuXHRnZW5lcmF0ZUlkKCk6IHN0cmluZyB7XG5cdFx0R3VpR3JpZElkR2VuZXJhdG9yLmluZGV4Kys7XG5cblx0XHRyZXR1cm4gR3VpR3JpZElkR2VuZXJhdG9yLlBSRUZJWCArIEd1aUdyaWRJZEdlbmVyYXRvci5pbmRleDtcblx0fVxufVxuIl19