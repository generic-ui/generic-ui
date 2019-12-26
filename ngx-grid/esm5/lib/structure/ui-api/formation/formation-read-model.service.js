/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { FormationRepository } from '../../domain/formation/read/formation-repository';
import { globalStructureId } from '../../domain/global-structure-id';
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
        if (structureId === void 0) { structureId = globalStructureId; }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLXJlYWQtbW9kZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi1yZWFkLW1vZGVsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBRXZGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBS3JFO0lBR0MsbUNBQW9CLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBQzVELENBQUM7Ozs7O0lBRUQsa0RBQWM7Ozs7SUFBZCxVQUFlLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQzFELE9BQU8sSUFBSSxDQUFDLG1CQUFtQjthQUN6QixXQUFXLENBQUMsV0FBVyxDQUFDO2FBQ3hCLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsVUFBQyxTQUFvQixJQUFLLE9BQUEsU0FBUyxDQUFDLGVBQWUsRUFBRSxFQUEzQixDQUEyQixFQUFDLENBQzFELENBQUM7SUFDUixDQUFDOztnQkFaRCxVQUFVOzs7O2dCQVBGLG1CQUFtQjs7SUFxQjVCLGdDQUFDO0NBQUEsQUFkRCxJQWNDO1NBYlkseUJBQXlCOzs7Ozs7SUFFekIsd0RBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBGb3JtYXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9yZWFkL2Zvcm1hdGlvbi1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBnbG9iYWxTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9nbG9iYWwtc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFNlbGVjdGVkUm93c0xpc3QgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL3JlYWQvc2VsZWN0ZWQtcm93cy9zZWxlY3RlZC1yb3dzLWxpc3QnO1xuaW1wb3J0IHsgRm9ybWF0aW9uIH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9yZWFkL2Zvcm1hdGlvbic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZvcm1hdGlvblJlYWRNb2RlbFNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybWF0aW9uUmVwb3NpdG9yeTogRm9ybWF0aW9uUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0b25TZWxlY3RlZFJvd3Moc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPFNlbGVjdGVkUm93c0xpc3Q+IHtcblx0XHRyZXR1cm4gdGhpcy5mb3JtYXRpb25SZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbkZvcm1hdGlvbihzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChmb3JtYXRpb246IEZvcm1hdGlvbikgPT4gZm9ybWF0aW9uLmdldFNlbGVjdGVkUm93cygpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==