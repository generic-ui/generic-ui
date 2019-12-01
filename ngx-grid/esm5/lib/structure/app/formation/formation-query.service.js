/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { FormationRepository } from '../../domain/formation/query/formation-repository';
import { globalStructureId } from '../../domain/global-structure-id';
var FormationQueryService = /** @class */ (function () {
    function FormationQueryService(formationRepository) {
        this.formationRepository = formationRepository;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    FormationQueryService.prototype.selectSelectedRows = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        return this.formationRepository
            .select(structureId)
            .pipe(map((/**
         * @param {?} formation
         * @return {?}
         */
        function (formation) { return formation.getSelectedRows(); })));
    };
    FormationQueryService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FormationQueryService.ctorParameters = function () { return [
        { type: FormationRepository }
    ]; };
    return FormationQueryService;
}());
export { FormationQueryService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormationQueryService.prototype.formationRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLXF1ZXJ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvYXBwL2Zvcm1hdGlvbi9mb3JtYXRpb24tcXVlcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFFeEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFLckU7SUFHQywrQkFBb0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDNUQsQ0FBQzs7Ozs7SUFFRCxrREFBa0I7Ozs7SUFBbEIsVUFBbUIsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDOUQsT0FBTyxJQUFJLENBQUMsbUJBQW1CO2FBQ3pCLE1BQU0sQ0FBQyxXQUFXLENBQUM7YUFDbkIsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxVQUFDLFNBQW9CLElBQUssT0FBQSxTQUFTLENBQUMsZUFBZSxFQUFFLEVBQTNCLENBQTJCLEVBQUMsQ0FDMUQsQ0FBQztJQUNSLENBQUM7O2dCQVpELFVBQVU7Ozs7Z0JBUEYsbUJBQW1COztJQXFCNUIsNEJBQUM7Q0FBQSxBQWRELElBY0M7U0FiWSxxQkFBcUI7Ozs7OztJQUVyQixvREFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEZvcm1hdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL3F1ZXJ5L2Zvcm1hdGlvbi1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBnbG9iYWxTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9nbG9iYWwtc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFNlbGVjdGVkUm93c0xpc3QgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL3F1ZXJ5L3NlbGVjdGVkLXJvd3Mvc2VsZWN0ZWQtcm93cy1saXN0JztcbmltcG9ydCB7IEZvcm1hdGlvbiB9IGZyb20gJy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vcXVlcnkvZm9ybWF0aW9uJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRm9ybWF0aW9uUXVlcnlTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1hdGlvblJlcG9zaXRvcnk6IEZvcm1hdGlvblJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdHNlbGVjdFNlbGVjdGVkUm93cyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8U2VsZWN0ZWRSb3dzTGlzdD4ge1xuXHRcdHJldHVybiB0aGlzLmZvcm1hdGlvblJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLnNlbGVjdChzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChmb3JtYXRpb246IEZvcm1hdGlvbikgPT4gZm9ybWF0aW9uLmdldFNlbGVjdGVkUm93cygpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==