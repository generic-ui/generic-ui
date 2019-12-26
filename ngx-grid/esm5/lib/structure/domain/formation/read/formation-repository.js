/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { StructureRepository } from '../../structure/read/structure.repository';
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
        { type: StructureRepository }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL2Zvcm1hdGlvbi9yZWFkL2Zvcm1hdGlvbi1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFNaEY7SUFHQyw2QkFBb0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDNUQsQ0FBQzs7Ozs7SUFFRCx5Q0FBVzs7OztJQUFYLFVBQVksV0FBd0I7UUFFbkMsT0FBTyxJQUFJLENBQUMsbUJBQW1CO2FBQ3pCLFdBQVcsQ0FBQyxXQUFXLENBQUM7YUFDeEIsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxVQUFDLFNBQW9CLElBQUssT0FBQSxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUF2RCxDQUF1RCxFQUFDLEVBQ3pGLEdBQUc7Ozs7UUFBQyxVQUFDLFNBQW9CLElBQUssT0FBQSxTQUFTLENBQUMsWUFBWSxFQUFFLEVBQXhCLENBQXdCLEVBQUMsQ0FDdkQsQ0FBQztJQUNSLENBQUM7O2dCQWRELFVBQVU7Ozs7Z0JBTkYsbUJBQW1COztJQXNCNUIsMEJBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQWZZLG1CQUFtQjs7Ozs7O0lBRW5CLGtEQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlL3JlYWQvc3RydWN0dXJlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgRm9ybWF0aW9uIH0gZnJvbSAnLi9mb3JtYXRpb24nO1xuaW1wb3J0IHsgU3RydWN0dXJlIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlL3JlYWQvc3RydWN0dXJlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRm9ybWF0aW9uUmVwb3NpdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRvbkZvcm1hdGlvbihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPEZvcm1hdGlvbj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub25TdHJ1Y3R1cmUoc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoc3RydWN0dXJlOiBTdHJ1Y3R1cmUpID0+IHN0cnVjdHVyZS5nZXRJZCgpLnRvU3RyaW5nKCkgPT09IHN0cnVjdHVyZUlkLnRvU3RyaW5nKCkpLFxuXHRcdFx0XHRcdCAgIG1hcCgoc3RydWN0dXJlOiBTdHJ1Y3R1cmUpID0+IHN0cnVjdHVyZS5nZXRGb3JtYXRpb24oKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=