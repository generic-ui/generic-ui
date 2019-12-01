/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class GridRegister {
    constructor() {
        this.gridMap = new Map();
    }
    // structureId: StructureId
    /**
     * @param {?} gridId
     * @param {?} component
     * @param {?} structureId
     * @return {?}
     */
    register(gridId, component, structureId) {
        this.gridMap.set(gridId, { component, structureId });
    }
    /**
     * @param {?} gridId
     * @return {?}
     */
    unregister(gridId) {
        this.gridMap.delete(gridId);
    }
    /**
     * @param {?} gridId
     * @return {?}
     */
    getValues(gridId) {
        return this.gridMap.get(gridId);
    }
}
GridRegister.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    GridRegister.prototype.gridMap;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5yZWdpc3Rlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiZ3VpL2dyaWQvdWkvZ3JpZC9yZWdpc3Rlci9ncmlkLnJlZ2lzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE1BQU0sT0FBTyxZQUFZO0lBRHpCO1FBR2tCLFlBQU8sR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBZXRDLENBQUM7Ozs7Ozs7O0lBWkEsUUFBUSxDQUFDLE1BQWMsRUFBRSxTQUF3QixFQUFFLFdBQWdCO1FBQ2xFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLE1BQWM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBYztRQUN2QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7OztZQWhCRCxVQUFVOzs7Ozs7O0lBR1YsK0JBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi4vZ3JpZC5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR3JpZFJlZ2lzdGVyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGdyaWRNYXAgPSBuZXcgTWFwKCk7XG5cblx0Ly8gc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkXG5cdHJlZ2lzdGVyKGdyaWRJZDogc3RyaW5nLCBjb21wb25lbnQ6IEdyaWRDb21wb25lbnQsIHN0cnVjdHVyZUlkOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLmdyaWRNYXAuc2V0KGdyaWRJZCwgeyBjb21wb25lbnQsIHN0cnVjdHVyZUlkIH0pO1xuXHR9XG5cblx0dW5yZWdpc3RlcihncmlkSWQ6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuZ3JpZE1hcC5kZWxldGUoZ3JpZElkKTtcblx0fVxuXG5cdGdldFZhbHVlcyhncmlkSWQ6IHN0cmluZyk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuZ3JpZE1hcC5nZXQoZ3JpZElkKTtcblx0fVxuXG59XG4iXX0=