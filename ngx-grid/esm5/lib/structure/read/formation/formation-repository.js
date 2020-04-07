/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { StructureReadModelRepository } from '../structure/structure.read-model-repository';
var FormationRepository = /** @class */ (function () {
    function FormationRepository(structureRepository) {
        this.structureRepository = structureRepository;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    FormationRepository.prototype.onFormation = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.structureRepository
            .onStructure(structureId)
            .pipe(filter((/**
         * @param {?} structure
         * @return {?}
         */
        function (structure) { return structure.getId().toString() === structureId.toString(); })), map((/**
         * @param {?} structure
         * @return {?}
         */
        function (structure) { return structure.getFormation(); })));
    };
    FormationRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FormationRepository.ctorParameters = function () { return [
        { type: StructureReadModelRepository }
    ]; };
    return FormationRepository;
}());
export { FormationRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormationRepository.prototype.structureRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvcmVhZC9mb3JtYXRpb24vZm9ybWF0aW9uLXJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQU01RjtJQUdDLDZCQUFvQixtQkFBaUQ7UUFBakQsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUE4QjtJQUNyRSxDQUFDOzs7OztJQUVELHlDQUFXOzs7O0lBQVgsVUFBWSxXQUF3QjtRQUVuQyxPQUFPLElBQUksQ0FBQyxtQkFBbUI7YUFDekIsV0FBVyxDQUFDLFdBQVcsQ0FBQzthQUN4QixJQUFJLENBQ0osTUFBTTs7OztRQUFDLFVBQUMsU0FBaUMsSUFBSyxPQUFBLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQXZELENBQXVELEVBQUMsRUFDdEcsR0FBRzs7OztRQUFDLFVBQUMsU0FBaUMsSUFBSyxPQUFBLFNBQVMsQ0FBQyxZQUFZLEVBQUUsRUFBeEIsQ0FBd0IsRUFBQyxDQUNwRSxDQUFDO0lBQ1IsQ0FBQzs7Z0JBZEQsVUFBVTs7OztnQkFORiw0QkFBNEI7O0lBc0JyQywwQkFBQztDQUFBLEFBaEJELElBZ0JDO1NBZlksbUJBQW1COzs7Ozs7SUFFbkIsa0RBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJlcG9zaXRvcnkgfSBmcm9tICcuLi9zdHJ1Y3R1cmUvc3RydWN0dXJlLnJlYWQtbW9kZWwtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRm9ybWF0aW9uIH0gZnJvbSAnLi9mb3JtYXRpb24nO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4uL3N0cnVjdHVyZS9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRm9ybWF0aW9uUmVwb3NpdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVSZWFkTW9kZWxSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRvbkZvcm1hdGlvbihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPEZvcm1hdGlvbj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub25TdHJ1Y3R1cmUoc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoc3RydWN0dXJlOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290KSA9PiBzdHJ1Y3R1cmUuZ2V0SWQoKS50b1N0cmluZygpID09PSBzdHJ1Y3R1cmVJZC50b1N0cmluZygpKSxcblx0XHRcdFx0XHQgICBtYXAoKHN0cnVjdHVyZTogU3RydWN0dXJlUmVhZE1vZGVsUm9vdCkgPT4gc3RydWN0dXJlLmdldEZvcm1hdGlvbigpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==