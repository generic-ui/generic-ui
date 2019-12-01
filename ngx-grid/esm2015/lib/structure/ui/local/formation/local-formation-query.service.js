/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureId } from '../../../domain/structure-id';
import { FormationQueryService } from '../../../app/formation/formation-query.service';
import { FormationRepository } from '../../../domain/formation/query/formation-repository';
export class LocalFormationQueryService extends FormationQueryService {
    /**
     * @param {?} structureId
     * @param {?} formationRepository
     */
    constructor(structureId, formationRepository) {
        super(formationRepository);
        this.structureId = structureId;
    }
    /**
     * @return {?}
     */
    selectSelectedRows() {
        return super.selectSelectedRows(this.structureId);
    }
}
LocalFormationQueryService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalFormationQueryService.ctorParameters = () => [
    { type: StructureId },
    { type: FormationRepository }
];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalFormationQueryService.prototype, "selectSelectedRows", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalFormationQueryService.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtZm9ybWF0aW9uLXF1ZXJ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvbG9jYWwvZm9ybWF0aW9uL2xvY2FsLWZvcm1hdGlvbi1xdWVyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUVoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdkYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFLM0YsTUFBTSxPQUFPLDBCQUEyQixTQUFRLHFCQUFxQjs7Ozs7SUFFcEUsWUFBb0IsV0FBd0IsRUFDekMsbUJBQXdDO1FBQzFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBRlIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFHNUMsQ0FBQzs7OztJQUdELGtCQUFrQjtRQUNqQixPQUFPLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7O1lBWEQsVUFBVTs7OztZQU5GLFdBQVc7WUFFWCxtQkFBbUI7O0FBYTNCO0lBREMsUUFBUTs7OzRDQUNhLFVBQVU7b0VBRS9COzs7Ozs7SUFSVyxpREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IEZvcm1hdGlvblF1ZXJ5U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2FwcC9mb3JtYXRpb24vZm9ybWF0aW9uLXF1ZXJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgRm9ybWF0aW9uUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vcXVlcnkvZm9ybWF0aW9uLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3dzTGlzdCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vcXVlcnkvc2VsZWN0ZWQtcm93cy9zZWxlY3RlZC1yb3dzLWxpc3QnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbEZvcm1hdGlvblF1ZXJ5U2VydmljZSBleHRlbmRzIEZvcm1hdGlvblF1ZXJ5U2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdGZvcm1hdGlvblJlcG9zaXRvcnk6IEZvcm1hdGlvblJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcihmb3JtYXRpb25SZXBvc2l0b3J5KTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZWxlY3RTZWxlY3RlZFJvd3MoKTogT2JzZXJ2YWJsZTxTZWxlY3RlZFJvd3NMaXN0PiB7XG5cdFx0cmV0dXJuIHN1cGVyLnNlbGVjdFNlbGVjdGVkUm93cyh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxufVxuIl19