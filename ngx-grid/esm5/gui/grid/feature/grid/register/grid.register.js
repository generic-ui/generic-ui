/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var GridRegister = /** @class */ (function () {
    function GridRegister() {
        this.gridMap = new Map();
    }
    // structureId: StructureId
    // structureId: StructureId
    /**
     * @param {?} gridId
     * @param {?} component
     * @param {?} structureId
     * @return {?}
     */
    GridRegister.prototype.register = 
    // structureId: StructureId
    /**
     * @param {?} gridId
     * @param {?} component
     * @param {?} structureId
     * @return {?}
     */
    function (gridId, component, structureId) {
        this.gridMap.set(gridId, { component: component, structureId: structureId });
    };
    /**
     * @param {?} gridId
     * @return {?}
     */
    GridRegister.prototype.unregister = /**
     * @param {?} gridId
     * @return {?}
     */
    function (gridId) {
        this.gridMap.delete(gridId);
    };
    /**
     * @param {?} gridId
     * @return {?}
     */
    GridRegister.prototype.getValues = /**
     * @param {?} gridId
     * @return {?}
     */
    function (gridId) {
        return this.gridMap.get(gridId);
    };
    GridRegister.decorators = [
        { type: Injectable }
    ];
    return GridRegister;
}());
export { GridRegister };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GridRegister.prototype.gridMap;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5yZWdpc3Rlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiZ3VpL2dyaWQvZmVhdHVyZS9ncmlkL3JlZ2lzdGVyL2dyaWQucmVnaXN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0M7SUFBQTtRQUdrQixZQUFPLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQWV0QyxDQUFDO0lBYkEsMkJBQTJCOzs7Ozs7OztJQUMzQiwrQkFBUTs7Ozs7Ozs7SUFBUixVQUFTLE1BQWMsRUFBRSxTQUF3QixFQUFFLFdBQWdCO1FBQ2xFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLFNBQVMsV0FBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7OztJQUVELGlDQUFVOzs7O0lBQVYsVUFBVyxNQUFjO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsZ0NBQVM7Ozs7SUFBVCxVQUFVLE1BQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnQkFoQkQsVUFBVTs7SUFrQlgsbUJBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWpCWSxZQUFZOzs7Ozs7SUFFeEIsK0JBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi4vZ3JpZC5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR3JpZFJlZ2lzdGVyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGdyaWRNYXAgPSBuZXcgTWFwKCk7XG5cblx0Ly8gc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkXG5cdHJlZ2lzdGVyKGdyaWRJZDogc3RyaW5nLCBjb21wb25lbnQ6IEdyaWRDb21wb25lbnQsIHN0cnVjdHVyZUlkOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLmdyaWRNYXAuc2V0KGdyaWRJZCwgeyBjb21wb25lbnQsIHN0cnVjdHVyZUlkIH0pO1xuXHR9XG5cblx0dW5yZWdpc3RlcihncmlkSWQ6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuZ3JpZE1hcC5kZWxldGUoZ3JpZElkKTtcblx0fVxuXG5cdGdldFZhbHVlcyhncmlkSWQ6IHN0cmluZyk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuZ3JpZE1hcC5nZXQoZ3JpZElkKTtcblx0fVxuXG59XG4iXX0=