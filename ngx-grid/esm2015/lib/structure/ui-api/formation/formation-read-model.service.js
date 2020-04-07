/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { FormationRepository } from '../../read/formation/formation-repository';
import { structureGlobalId } from '../structure.global-id';
export class FormationReadModelService {
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
FormationReadModelService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FormationReadModelService.ctorParameters = () => [
    { type: FormationRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormationReadModelService.prototype.formationRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLXJlYWQtbW9kZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi1yZWFkLW1vZGVsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRWhGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBTTNELE1BQU0sT0FBTyx5QkFBeUI7Ozs7SUFFckMsWUFBb0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDNUQsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsY0FBMkIsaUJBQWlCO1FBQzFELE9BQU8sSUFBSSxDQUFDLG1CQUFtQjthQUN6QixXQUFXLENBQUMsV0FBVyxDQUFDO2FBQ3hCLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsQ0FBQyxTQUFvQixFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLEVBQUMsQ0FDMUQsQ0FBQztJQUNSLENBQUM7OztZQVpELFVBQVU7Ozs7WUFQRixtQkFBbUI7Ozs7Ozs7SUFVZix3REFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEZvcm1hdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9yZWFkL2Zvcm1hdGlvbi9mb3JtYXRpb24tcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgc3RydWN0dXJlR2xvYmFsSWQgfSBmcm9tICcuLi9zdHJ1Y3R1cmUuZ2xvYmFsLWlkJztcbmltcG9ydCB7IFNlbGVjdGVkUm93c0xpc3QgfSBmcm9tICcuLi8uLi9yZWFkL2Zvcm1hdGlvbi9zZWxlY3RlZC1yb3dzL3NlbGVjdGVkLXJvd3MtbGlzdCc7XG5pbXBvcnQgeyBGb3JtYXRpb24gfSBmcm9tICcuLi8uLi9yZWFkL2Zvcm1hdGlvbi9mb3JtYXRpb24nO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGb3JtYXRpb25SZWFkTW9kZWxTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1hdGlvblJlcG9zaXRvcnk6IEZvcm1hdGlvblJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdG9uU2VsZWN0ZWRSb3dzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogT2JzZXJ2YWJsZTxTZWxlY3RlZFJvd3NMaXN0PiB7XG5cdFx0cmV0dXJuIHRoaXMuZm9ybWF0aW9uUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub25Gb3JtYXRpb24oc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoZm9ybWF0aW9uOiBGb3JtYXRpb24pID0+IGZvcm1hdGlvbi5nZXRTZWxlY3RlZFJvd3MoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=