/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureId } from '../../../domain/structure.id';
import { FormationReadModelService } from '../../../ui-api/formation/formation-read-model.service';
import { FormationRepository } from '../../../read/formation/formation-repository';
export class LocalFormationReadModelWarehouse extends FormationReadModelService {
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
    onSelectedRows() {
        return super.onSelectedRows(this.structureId);
    }
}
LocalFormationReadModelWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalFormationReadModelWarehouse.ctorParameters = () => [
    { type: StructureId },
    { type: FormationRepository }
];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalFormationReadModelWarehouse.prototype, "onSelectedRows", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalFormationReadModelWarehouse.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtZm9ybWF0aW9uLnJlYWQtbW9kZWwtd2FyZWhvdXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2xvY2FsL2Zvcm1hdGlvbi9sb2NhbC1mb3JtYXRpb24ucmVhZC1tb2RlbC13YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNuRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUtuRixNQUFNLE9BQU8sZ0NBQWlDLFNBQVEseUJBQXlCOzs7OztJQUU5RSxZQUFvQixXQUF3QixFQUN6QyxtQkFBd0M7UUFDMUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFGUixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUc1QyxDQUFDOzs7O0lBR0QsY0FBYztRQUNiLE9BQU8sS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7O1lBWEQsVUFBVTs7OztZQU5GLFdBQVc7WUFFWCxtQkFBbUI7O0FBYTNCO0lBREMsUUFBUTs7OzRDQUNTLFVBQVU7c0VBRTNCOzs7Ozs7SUFSVyx1REFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZvcm1hdGlvblJlYWRNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi1yZWFkLW1vZGVsLnNlcnZpY2UnO1xuaW1wb3J0IHsgRm9ybWF0aW9uUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL3JlYWQvZm9ybWF0aW9uL2Zvcm1hdGlvbi1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNlbGVjdGVkUm93c0xpc3QgfSBmcm9tICcuLi8uLi8uLi9yZWFkL2Zvcm1hdGlvbi9zZWxlY3RlZC1yb3dzL3NlbGVjdGVkLXJvd3MtbGlzdCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsRm9ybWF0aW9uUmVhZE1vZGVsV2FyZWhvdXNlIGV4dGVuZHMgRm9ybWF0aW9uUmVhZE1vZGVsU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdGZvcm1hdGlvblJlcG9zaXRvcnk6IEZvcm1hdGlvblJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcihmb3JtYXRpb25SZXBvc2l0b3J5KTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblNlbGVjdGVkUm93cygpOiBPYnNlcnZhYmxlPFNlbGVjdGVkUm93c0xpc3Q+IHtcblx0XHRyZXR1cm4gc3VwZXIub25TZWxlY3RlZFJvd3ModGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cbn1cbiJdfQ==