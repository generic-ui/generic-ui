/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class GuiGridRegister {
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
GuiGridRegister.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    GuiGridRegister.prototype.gridMap;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQucmVnaXN0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL2ZlYXR1cmUvZ3JpZC9yZWdpc3Rlci9ndWkuZ3JpZC5yZWdpc3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUszQyxNQUFNLE9BQU8sZUFBZTtJQUQ1QjtRQUdrQixZQUFPLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQWV0QyxDQUFDOzs7Ozs7OztJQVpBLFFBQVEsQ0FBQyxNQUFjLEVBQUUsU0FBMkIsRUFBRSxXQUFnQjtRQUNyRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxNQUFjO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUFoQkQsVUFBVTs7Ozs7OztJQUdWLGtDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3VpR3JpZENvbXBvbmVudCB9IGZyb20gJy4uL2d1aS5ncmlkLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHdWlHcmlkUmVnaXN0ZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZ3JpZE1hcCA9IG5ldyBNYXAoKTtcblxuXHQvLyBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWRcblx0cmVnaXN0ZXIoZ3JpZElkOiBzdHJpbmcsIGNvbXBvbmVudDogR3VpR3JpZENvbXBvbmVudCwgc3RydWN0dXJlSWQ6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMuZ3JpZE1hcC5zZXQoZ3JpZElkLCB7IGNvbXBvbmVudCwgc3RydWN0dXJlSWQgfSk7XG5cdH1cblxuXHR1bnJlZ2lzdGVyKGdyaWRJZDogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5ncmlkTWFwLmRlbGV0ZShncmlkSWQpO1xuXHR9XG5cblx0Z2V0VmFsdWVzKGdyaWRJZDogc3RyaW5nKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5ncmlkTWFwLmdldChncmlkSWQpO1xuXHR9XG5cbn1cbiJdfQ==