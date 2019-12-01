/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { StructureRepository } from '../../structure/query/structure.repository';
var FormationRepository = /** @class */ (function () {
    function FormationRepository(structureRepository) {
        this.structureRepository = structureRepository;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    FormationRepository.prototype.select = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.structureRepository
            .select(structureId)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL2Zvcm1hdGlvbi9xdWVyeS9mb3JtYXRpb24tcmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBTWpGO0lBR0MsNkJBQW9CLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBQzVELENBQUM7Ozs7O0lBRUQsb0NBQU07Ozs7SUFBTixVQUFPLFdBQXdCO1FBRTlCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQjthQUN6QixNQUFNLENBQUMsV0FBVyxDQUFDO2FBQ25CLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsVUFBQyxTQUFvQixJQUFLLE9BQUEsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBdkQsQ0FBdUQsRUFBQyxFQUN6RixHQUFHOzs7O1FBQUMsVUFBQyxTQUFvQixJQUFLLE9BQUEsU0FBUyxDQUFDLFlBQVksRUFBRSxFQUF4QixDQUF3QixFQUFDLENBQ3ZELENBQUM7SUFDUixDQUFDOztnQkFkRCxVQUFVOzs7O2dCQU5GLG1CQUFtQjs7SUFzQjVCLDBCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FmWSxtQkFBbUI7Ozs7OztJQUVuQixrREFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS9xdWVyeS9zdHJ1Y3R1cmUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBGb3JtYXRpb24gfSBmcm9tICcuL2Zvcm1hdGlvbic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmUgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUvcXVlcnkvc3RydWN0dXJlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRm9ybWF0aW9uUmVwb3NpdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRzZWxlY3Qoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxGb3JtYXRpb24+IHtcblxuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLnNlbGVjdChzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChzdHJ1Y3R1cmU6IFN0cnVjdHVyZSkgPT4gc3RydWN0dXJlLmdldElkKCkudG9TdHJpbmcoKSA9PT0gc3RydWN0dXJlSWQudG9TdHJpbmcoKSksXG5cdFx0XHRcdFx0ICAgbWFwKChzdHJ1Y3R1cmU6IFN0cnVjdHVyZSkgPT4gc3RydWN0dXJlLmdldEZvcm1hdGlvbigpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==