/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { FormationRepository } from '../../domain/formation/query/formation-repository';
import { globalStructureId } from '../../domain/global-structure-id';
export class FormationQueryService {
    /**
     * @param {?} formationRepository
     */
    constructor(formationRepository) {
        this.formationRepository = formationRepository;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    selectSelectedRows(structureId = globalStructureId) {
        return this.formationRepository
            .select(structureId)
            .pipe(map((/**
         * @param {?} formation
         * @return {?}
         */
        (formation) => formation.getSelectedRows())));
    }
}
FormationQueryService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FormationQueryService.ctorParameters = () => [
    { type: FormationRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormationQueryService.prototype.formationRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLXF1ZXJ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvYXBwL2Zvcm1hdGlvbi9mb3JtYXRpb24tcXVlcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFFeEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFNckUsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUVqQyxZQUFvQixtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUM1RCxDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLGNBQTJCLGlCQUFpQjtRQUM5RCxPQUFPLElBQUksQ0FBQyxtQkFBbUI7YUFDekIsTUFBTSxDQUFDLFdBQVcsQ0FBQzthQUNuQixJQUFJLENBQ0osR0FBRzs7OztRQUFDLENBQUMsU0FBb0IsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxFQUFDLENBQzFELENBQUM7SUFDUixDQUFDOzs7WUFaRCxVQUFVOzs7O1lBUEYsbUJBQW1COzs7Ozs7O0lBVWYsb0RBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBGb3JtYXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9xdWVyeS9mb3JtYXRpb24tcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgZ2xvYmFsU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vZ2xvYmFsLXN0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBTZWxlY3RlZFJvd3NMaXN0IH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9xdWVyeS9zZWxlY3RlZC1yb3dzL3NlbGVjdGVkLXJvd3MtbGlzdCc7XG5pbXBvcnQgeyBGb3JtYXRpb24gfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL3F1ZXJ5L2Zvcm1hdGlvbic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZvcm1hdGlvblF1ZXJ5U2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBmb3JtYXRpb25SZXBvc2l0b3J5OiBGb3JtYXRpb25SZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRzZWxlY3RTZWxlY3RlZFJvd3Moc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPFNlbGVjdGVkUm93c0xpc3Q+IHtcblx0XHRyZXR1cm4gdGhpcy5mb3JtYXRpb25SZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5zZWxlY3Qoc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoZm9ybWF0aW9uOiBGb3JtYXRpb24pID0+IGZvcm1hdGlvbi5nZXRTZWxlY3RlZFJvd3MoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=