/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormationDispatcher } from '../../domain/formation/formation.dispatcher';
import { structureGlobalId } from '../structure.global-id';
var StructureFormationDispatcher = /** @class */ (function () {
    function StructureFormationDispatcher(formationDispatcher) {
        this.formationDispatcher = formationDispatcher;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    StructureFormationDispatcher.prototype.setDefaultFormation = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.formationDispatcher.setDefault(structureId);
    };
    /**
     * @param {?} selectedRow
     * @param {?=} structureId
     * @return {?}
     */
    StructureFormationDispatcher.prototype.toggleSelectedRow = /**
     * @param {?} selectedRow
     * @param {?=} structureId
     * @return {?}
     */
    function (selectedRow, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.formationDispatcher.toggleSelectedRow(structureId, selectedRow);
    };
    StructureFormationDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureFormationDispatcher.ctorParameters = function () { return [
        { type: FormationDispatcher }
    ]; };
    return StructureFormationDispatcher;
}());
export { StructureFormationDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFormationDispatcher.prototype.formationDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWZvcm1hdGlvbi5kaXNwYXRjaGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpLWFwaS9mb3JtYXRpb24vc3RydWN0dXJlLWZvcm1hdGlvbi5kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRWxGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRzNEO0lBR0Msc0NBQW9CLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBQzVELENBQUM7Ozs7O0lBRUQsMERBQW1COzs7O0lBQW5CLFVBQW9CLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQy9ELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7O0lBRUQsd0RBQWlCOzs7OztJQUFqQixVQUFrQixXQUFtQixFQUFFLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQ2xGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7Z0JBWkQsVUFBVTs7OztnQkFMRixtQkFBbUI7O0lBbUI1QixtQ0FBQztDQUFBLEFBZEQsSUFjQztTQWJZLDRCQUE0Qjs7Ozs7O0lBRTVCLDJEQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRm9ybWF0aW9uRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vZm9ybWF0aW9uLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IHN0cnVjdHVyZUdsb2JhbElkIH0gZnJvbSAnLi4vc3RydWN0dXJlLmdsb2JhbC1pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUZvcm1hdGlvbkRpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybWF0aW9uRGlzcGF0Y2hlcjogRm9ybWF0aW9uRGlzcGF0Y2hlcikge1xuXHR9XG5cblx0c2V0RGVmYXVsdEZvcm1hdGlvbihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuZm9ybWF0aW9uRGlzcGF0Y2hlci5zZXREZWZhdWx0KHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHRvZ2dsZVNlbGVjdGVkUm93KHNlbGVjdGVkUm93OiBzdHJpbmcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5mb3JtYXRpb25EaXNwYXRjaGVyLnRvZ2dsZVNlbGVjdGVkUm93KHN0cnVjdHVyZUlkLCBzZWxlY3RlZFJvdyk7XG5cdH1cblxufVxuIl19