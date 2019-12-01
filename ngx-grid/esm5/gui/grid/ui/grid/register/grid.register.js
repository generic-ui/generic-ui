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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5yZWdpc3Rlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiZ3VpL2dyaWQvdWkvZ3JpZC9yZWdpc3Rlci9ncmlkLnJlZ2lzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDO0lBQUE7UUFHa0IsWUFBTyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFldEMsQ0FBQztJQWJBLDJCQUEyQjs7Ozs7Ozs7SUFDM0IsK0JBQVE7Ozs7Ozs7O0lBQVIsVUFBUyxNQUFjLEVBQUUsU0FBd0IsRUFBRSxXQUFnQjtRQUNsRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxTQUFTLFdBQUEsRUFBRSxXQUFXLGFBQUEsRUFBRSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7SUFFRCxpQ0FBVTs7OztJQUFWLFVBQVcsTUFBYztRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELGdDQUFTOzs7O0lBQVQsVUFBVSxNQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Z0JBaEJELFVBQVU7O0lBa0JYLG1CQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FqQlksWUFBWTs7Ozs7O0lBRXhCLCtCQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3JpZENvbXBvbmVudCB9IGZyb20gJy4uL2dyaWQuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdyaWRSZWdpc3RlciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBncmlkTWFwID0gbmV3IE1hcCgpO1xuXG5cdC8vIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZFxuXHRyZWdpc3RlcihncmlkSWQ6IHN0cmluZywgY29tcG9uZW50OiBHcmlkQ29tcG9uZW50LCBzdHJ1Y3R1cmVJZDogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5ncmlkTWFwLnNldChncmlkSWQsIHsgY29tcG9uZW50LCBzdHJ1Y3R1cmVJZCB9KTtcblx0fVxuXG5cdHVucmVnaXN0ZXIoZ3JpZElkOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmdyaWRNYXAuZGVsZXRlKGdyaWRJZCk7XG5cdH1cblxuXHRnZXRWYWx1ZXMoZ3JpZElkOiBzdHJpbmcpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLmdyaWRNYXAuZ2V0KGdyaWRJZCk7XG5cdH1cblxufVxuIl19