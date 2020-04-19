/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { FormationRepository } from './read/formation-repository';
import { structureGlobalId } from '../structure.global-id';
var StructureFormationWarehouse = /** @class */ (function () {
    function StructureFormationWarehouse(formationRepository) {
        this.formationRepository = formationRepository;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    StructureFormationWarehouse.prototype.onSelectedRows = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        return this.formationRepository
            .onFormation(structureId)
            .pipe(map((/**
         * @param {?} formation
         * @return {?}
         */
        function (formation) { return formation.getSelectedRows(); })));
    };
    StructureFormationWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureFormationWarehouse.ctorParameters = function () { return [
        { type: FormationRepository }
    ]; };
    return StructureFormationWarehouse;
}());
export { StructureFormationWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFormationWarehouse.prototype.formationRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWZvcm1hdGlvbi53YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS1hcGkvZm9ybWF0aW9uL3N0cnVjdHVyZS1mb3JtYXRpb24ud2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUszRDtJQUdDLHFDQUFvQixtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUM1RCxDQUFDOzs7OztJQUVELG9EQUFjOzs7O0lBQWQsVUFBZSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUMxRCxPQUFPLElBQUksQ0FBQyxtQkFBbUI7YUFDekIsV0FBVyxDQUFDLFdBQVcsQ0FBQzthQUN4QixJQUFJLENBQ0osR0FBRzs7OztRQUFDLFVBQUMsU0FBb0IsSUFBSyxPQUFBLFNBQVMsQ0FBQyxlQUFlLEVBQUUsRUFBM0IsQ0FBMkIsRUFBQyxDQUMxRCxDQUFDO0lBQ1IsQ0FBQzs7Z0JBWkQsVUFBVTs7OztnQkFQRixtQkFBbUI7O0lBcUI1QixrQ0FBQztDQUFBLEFBZEQsSUFjQztTQWJZLDJCQUEyQjs7Ozs7O0lBRTNCLDBEQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRm9ybWF0aW9uUmVwb3NpdG9yeSB9IGZyb20gJy4vcmVhZC9mb3JtYXRpb24tcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgc3RydWN0dXJlR2xvYmFsSWQgfSBmcm9tICcuLi9zdHJ1Y3R1cmUuZ2xvYmFsLWlkJztcbmltcG9ydCB7IFNlbGVjdGVkUm93c0xpc3QgfSBmcm9tICcuL3JlYWQvc2VsZWN0ZWQtcm93cy9zZWxlY3RlZC1yb3dzLWxpc3QnO1xuaW1wb3J0IHsgRm9ybWF0aW9uIH0gZnJvbSAnLi9yZWFkL2Zvcm1hdGlvbic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUZvcm1hdGlvbldhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBmb3JtYXRpb25SZXBvc2l0b3J5OiBGb3JtYXRpb25SZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRvblNlbGVjdGVkUm93cyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IE9ic2VydmFibGU8U2VsZWN0ZWRSb3dzTGlzdD4ge1xuXHRcdHJldHVybiB0aGlzLmZvcm1hdGlvblJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uRm9ybWF0aW9uKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGZvcm1hdGlvbjogRm9ybWF0aW9uKSA9PiBmb3JtYXRpb24uZ2V0U2VsZWN0ZWRSb3dzKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxufVxuIl19