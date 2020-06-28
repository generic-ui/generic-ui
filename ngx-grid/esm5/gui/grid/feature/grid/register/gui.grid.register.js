/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var GuiGridRegister = /** @class */ (function () {
    function GuiGridRegister() {
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
    GuiGridRegister.prototype.register = 
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
    GuiGridRegister.prototype.unregister = /**
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
    GuiGridRegister.prototype.getValues = /**
     * @param {?} gridId
     * @return {?}
     */
    function (gridId) {
        return this.gridMap.get(gridId);
    };
    GuiGridRegister.decorators = [
        { type: Injectable }
    ];
    return GuiGridRegister;
}());
export { GuiGridRegister };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GuiGridRegister.prototype.gridMap;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQucmVnaXN0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL2ZlYXR1cmUvZ3JpZC9yZWdpc3Rlci9ndWkuZ3JpZC5yZWdpc3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQztJQUFBO1FBR2tCLFlBQU8sR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBZXRDLENBQUM7SUFiQSwyQkFBMkI7Ozs7Ozs7O0lBQzNCLGtDQUFROzs7Ozs7OztJQUFSLFVBQVMsTUFBYyxFQUFFLFNBQTJCLEVBQUUsV0FBZ0I7UUFDckUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsU0FBUyxXQUFBLEVBQUUsV0FBVyxhQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7O0lBRUQsb0NBQVU7Ozs7SUFBVixVQUFXLE1BQWM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCxtQ0FBUzs7OztJQUFULFVBQVUsTUFBYztRQUN2QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O2dCQWhCRCxVQUFVOztJQWtCWCxzQkFBQztDQUFBLEFBbEJELElBa0JDO1NBakJZLGVBQWU7Ozs7OztJQUUzQixrQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEd1aUdyaWRDb21wb25lbnQgfSBmcm9tICcuLi9ndWkuZ3JpZC5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR3VpR3JpZFJlZ2lzdGVyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGdyaWRNYXAgPSBuZXcgTWFwKCk7XG5cblx0Ly8gc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkXG5cdHJlZ2lzdGVyKGdyaWRJZDogc3RyaW5nLCBjb21wb25lbnQ6IEd1aUdyaWRDb21wb25lbnQsIHN0cnVjdHVyZUlkOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLmdyaWRNYXAuc2V0KGdyaWRJZCwgeyBjb21wb25lbnQsIHN0cnVjdHVyZUlkIH0pO1xuXHR9XG5cblx0dW5yZWdpc3RlcihncmlkSWQ6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuZ3JpZE1hcC5kZWxldGUoZ3JpZElkKTtcblx0fVxuXG5cdGdldFZhbHVlcyhncmlkSWQ6IHN0cmluZyk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuZ3JpZE1hcC5nZXQoZ3JpZElkKTtcblx0fVxuXG59XG4iXX0=