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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWZvcm1hdGlvbi53YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS9mb3JtYXRpb24vc3RydWN0dXJlLWZvcm1hdGlvbi53YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRWxFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBSzNEO0lBR0MscUNBQW9CLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBQzVELENBQUM7Ozs7O0lBRUQsb0RBQWM7Ozs7SUFBZCxVQUFlLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQzFELE9BQU8sSUFBSSxDQUFDLG1CQUFtQjthQUN6QixXQUFXLENBQUMsV0FBVyxDQUFDO2FBQ3hCLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsVUFBQyxTQUFvQixJQUFLLE9BQUEsU0FBUyxDQUFDLGVBQWUsRUFBRSxFQUEzQixDQUEyQixFQUFDLENBQzFELENBQUM7SUFDUixDQUFDOztnQkFaRCxVQUFVOzs7O2dCQVBGLG1CQUFtQjs7SUFxQjVCLGtDQUFDO0NBQUEsQUFkRCxJQWNDO1NBYlksMkJBQTJCOzs7Ozs7SUFFM0IsMERBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBGb3JtYXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi9yZWFkL2Zvcm1hdGlvbi1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3dzTGlzdCB9IGZyb20gJy4vcmVhZC9zZWxlY3RlZC1yb3dzL3NlbGVjdGVkLXJvd3MtbGlzdCc7XG5pbXBvcnQgeyBGb3JtYXRpb24gfSBmcm9tICcuL3JlYWQvZm9ybWF0aW9uJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRm9ybWF0aW9uV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1hdGlvblJlcG9zaXRvcnk6IEZvcm1hdGlvblJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdG9uU2VsZWN0ZWRSb3dzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogT2JzZXJ2YWJsZTxTZWxlY3RlZFJvd3NMaXN0PiB7XG5cdFx0cmV0dXJuIHRoaXMuZm9ybWF0aW9uUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub25Gb3JtYXRpb24oc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoZm9ybWF0aW9uOiBGb3JtYXRpb24pID0+IGZvcm1hdGlvbi5nZXRTZWxlY3RlZFJvd3MoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=