/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { FormationRepository } from '../../read/formation/formation-repository';
import { structureGlobalId } from '../structure.global-id';
var FormationReadModelService = /** @class */ (function () {
    function FormationReadModelService(formationRepository) {
        this.formationRepository = formationRepository;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    FormationReadModelService.prototype.onSelectedRows = /**
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
    FormationReadModelService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FormationReadModelService.ctorParameters = function () { return [
        { type: FormationRepository }
    ]; };
    return FormationReadModelService;
}());
export { FormationReadModelService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormationReadModelService.prototype.formationRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLXJlYWQtbW9kZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi1yZWFkLW1vZGVsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRWhGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBSzNEO0lBR0MsbUNBQW9CLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBQzVELENBQUM7Ozs7O0lBRUQsa0RBQWM7Ozs7SUFBZCxVQUFlLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQzFELE9BQU8sSUFBSSxDQUFDLG1CQUFtQjthQUN6QixXQUFXLENBQUMsV0FBVyxDQUFDO2FBQ3hCLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsVUFBQyxTQUFvQixJQUFLLE9BQUEsU0FBUyxDQUFDLGVBQWUsRUFBRSxFQUEzQixDQUEyQixFQUFDLENBQzFELENBQUM7SUFDUixDQUFDOztnQkFaRCxVQUFVOzs7O2dCQVBGLG1CQUFtQjs7SUFxQjVCLGdDQUFDO0NBQUEsQUFkRCxJQWNDO1NBYlkseUJBQXlCOzs7Ozs7SUFFekIsd0RBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBGb3JtYXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vcmVhZC9mb3JtYXRpb24vZm9ybWF0aW9uLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IHN0cnVjdHVyZUdsb2JhbElkIH0gZnJvbSAnLi4vc3RydWN0dXJlLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBTZWxlY3RlZFJvd3NMaXN0IH0gZnJvbSAnLi4vLi4vcmVhZC9mb3JtYXRpb24vc2VsZWN0ZWQtcm93cy9zZWxlY3RlZC1yb3dzLWxpc3QnO1xuaW1wb3J0IHsgRm9ybWF0aW9uIH0gZnJvbSAnLi4vLi4vcmVhZC9mb3JtYXRpb24vZm9ybWF0aW9uJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRm9ybWF0aW9uUmVhZE1vZGVsU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBmb3JtYXRpb25SZXBvc2l0b3J5OiBGb3JtYXRpb25SZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRvblNlbGVjdGVkUm93cyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IE9ic2VydmFibGU8U2VsZWN0ZWRSb3dzTGlzdD4ge1xuXHRcdHJldHVybiB0aGlzLmZvcm1hdGlvblJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uRm9ybWF0aW9uKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGZvcm1hdGlvbjogRm9ybWF0aW9uKSA9PiBmb3JtYXRpb24uZ2V0U2VsZWN0ZWRSb3dzKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxufVxuIl19