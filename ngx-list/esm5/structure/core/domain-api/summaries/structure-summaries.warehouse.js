/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { structureGlobalId } from '../structure.global-id';
import { StructureSummariesRepository } from './enabled/structure.summaries.repository';
var StructureSummariesWarehouse = /** @class */ (function () {
    function StructureSummariesWarehouse(structureSummariesRepository) {
        this.structureSummariesRepository = structureSummariesRepository;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    StructureSummariesWarehouse.prototype.onSummariesEnabled = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        return this.structureSummariesRepository.onSummariesEnabled(structureId);
    };
    StructureSummariesWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSummariesWarehouse.ctorParameters = function () { return [
        { type: StructureSummariesRepository }
    ]; };
    return StructureSummariesWarehouse;
}());
export { StructureSummariesWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSummariesWarehouse.prototype.structureSummariesRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXN1bW1hcmllcy53YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9jb3JlL2RvbWFpbi1hcGkvc3VtbWFyaWVzL3N0cnVjdHVyZS1zdW1tYXJpZXMud2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBR3hGO0lBR0MscUNBQW9CLDRCQUEwRDtRQUExRCxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO0lBQzlFLENBQUM7Ozs7O0lBRUQsd0RBQWtCOzs7O0lBQWxCLFVBQW1CLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQzlELE9BQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFFLENBQUM7O2dCQVJELFVBQVU7Ozs7Z0JBSEYsNEJBQTRCOztJQWFyQyxrQ0FBQztDQUFBLEFBVkQsSUFVQztTQVRZLDJCQUEyQjs7Ozs7O0lBRTNCLG1FQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IHN0cnVjdHVyZUdsb2JhbElkIH0gZnJvbSAnLi4vc3RydWN0dXJlLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNSZXBvc2l0b3J5IH0gZnJvbSAnLi9lbmFibGVkL3N0cnVjdHVyZS5zdW1tYXJpZXMucmVwb3NpdG9yeSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVN1bW1hcmllc1dhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVTdW1tYXJpZXNSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVTdW1tYXJpZXNSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRvblN1bW1hcmllc0VuYWJsZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVTdW1tYXJpZXNSZXBvc2l0b3J5Lm9uU3VtbWFyaWVzRW5hYmxlZChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19