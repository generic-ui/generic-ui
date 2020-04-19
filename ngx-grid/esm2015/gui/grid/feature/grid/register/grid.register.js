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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5yZWdpc3Rlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiZ3VpL2dyaWQvZmVhdHVyZS9ncmlkL3JlZ2lzdGVyL2dyaWQucmVnaXN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsTUFBTSxPQUFPLFlBQVk7SUFEekI7UUFHa0IsWUFBTyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFldEMsQ0FBQzs7Ozs7Ozs7SUFaQSxRQUFRLENBQUMsTUFBYyxFQUFFLFNBQXdCLEVBQUUsV0FBZ0I7UUFDbEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsTUFBYztRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxNQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7O1lBaEJELFVBQVU7Ozs7Ozs7SUFHViwrQkFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdyaWRDb21wb25lbnQgfSBmcm9tICcuLi9ncmlkLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHcmlkUmVnaXN0ZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZ3JpZE1hcCA9IG5ldyBNYXAoKTtcblxuXHQvLyBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWRcblx0cmVnaXN0ZXIoZ3JpZElkOiBzdHJpbmcsIGNvbXBvbmVudDogR3JpZENvbXBvbmVudCwgc3RydWN0dXJlSWQ6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMuZ3JpZE1hcC5zZXQoZ3JpZElkLCB7IGNvbXBvbmVudCwgc3RydWN0dXJlSWQgfSk7XG5cdH1cblxuXHR1bnJlZ2lzdGVyKGdyaWRJZDogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5ncmlkTWFwLmRlbGV0ZShncmlkSWQpO1xuXHR9XG5cblx0Z2V0VmFsdWVzKGdyaWRJZDogc3RyaW5nKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5ncmlkTWFwLmdldChncmlkSWQpO1xuXHR9XG5cbn1cbiJdfQ==