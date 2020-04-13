/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { FormationRepository } from '../../read/formation/formation-repository';
import { structureGlobalId } from '../structure.global-id';
export class StructureFormationWarehouse {
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
    onSelectedRows(structureId = structureGlobalId) {
        return this.formationRepository
            .onFormation(structureId)
            .pipe(map((/**
         * @param {?} formation
         * @return {?}
         */
        (formation) => formation.getSelectedRows())));
    }
}
StructureFormationWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureFormationWarehouse.ctorParameters = () => [
    { type: FormationRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFormationWarehouse.prototype.formationRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWZvcm1hdGlvbi53YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWktYXBpL2Zvcm1hdGlvbi9zdHJ1Y3R1cmUtZm9ybWF0aW9uLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFaEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFNM0QsTUFBTSxPQUFPLDJCQUEyQjs7OztJQUV2QyxZQUFvQixtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUM1RCxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxjQUEyQixpQkFBaUI7UUFDMUQsT0FBTyxJQUFJLENBQUMsbUJBQW1CO2FBQ3pCLFdBQVcsQ0FBQyxXQUFXLENBQUM7YUFDeEIsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxDQUFDLFNBQW9CLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsRUFBQyxDQUMxRCxDQUFDO0lBQ1IsQ0FBQzs7O1lBWkQsVUFBVTs7OztZQVBGLG1CQUFtQjs7Ozs7OztJQVVmLDBEQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRm9ybWF0aW9uUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL3JlYWQvZm9ybWF0aW9uL2Zvcm1hdGlvbi1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3dzTGlzdCB9IGZyb20gJy4uLy4uL3JlYWQvZm9ybWF0aW9uL3NlbGVjdGVkLXJvd3Mvc2VsZWN0ZWQtcm93cy1saXN0JztcbmltcG9ydCB7IEZvcm1hdGlvbiB9IGZyb20gJy4uLy4uL3JlYWQvZm9ybWF0aW9uL2Zvcm1hdGlvbic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUZvcm1hdGlvbldhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBmb3JtYXRpb25SZXBvc2l0b3J5OiBGb3JtYXRpb25SZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRvblNlbGVjdGVkUm93cyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IE9ic2VydmFibGU8U2VsZWN0ZWRSb3dzTGlzdD4ge1xuXHRcdHJldHVybiB0aGlzLmZvcm1hdGlvblJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uRm9ybWF0aW9uKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGZvcm1hdGlvbjogRm9ybWF0aW9uKSA9PiBmb3JtYXRpb24uZ2V0U2VsZWN0ZWRSb3dzKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxufVxuIl19