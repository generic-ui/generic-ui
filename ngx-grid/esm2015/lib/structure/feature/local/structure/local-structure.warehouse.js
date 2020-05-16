/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureWarehouse } from '../../../domain-api/structure.warehouse';
import { StructureId } from '../../../domain/structure.id';
import { StructureReadModelRepository } from '../../../domain-api/read/structure.read-model-repository';
import { VerticalFormationRepository } from '../../../domain-api/vertical-formation/vertical-formation.repository';
export class LocalStructureWarehouse extends StructureWarehouse {
    /**
     * @param {?} structureId
     * @param {?} structureRepository
     * @param {?} verticalFormationRepository
     */
    constructor(structureId, structureRepository, verticalFormationRepository) {
        super(structureRepository, verticalFormationRepository);
        this.structureId = structureId;
    }
    /**
     * @return {?}
     */
    onStructure() {
        return super.onStructure(this.structureId);
    }
}
LocalStructureWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalStructureWarehouse.ctorParameters = () => [
    { type: StructureId },
    { type: StructureReadModelRepository },
    { type: VerticalFormationRepository }
];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalStructureWarehouse.prototype, "onStructure", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalStructureWarehouse.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RydWN0dXJlLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2xvY2FsL3N0cnVjdHVyZS9sb2NhbC1zdHJ1Y3R1cmUud2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUVoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFFeEcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFJbkgsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGtCQUFrQjs7Ozs7O0lBRTlELFlBQW9CLFdBQXdCLEVBQ3pDLG1CQUFpRCxFQUNqRCwyQkFBd0Q7UUFDMUQsS0FBSyxDQUFDLG1CQUFtQixFQUFFLDJCQUEyQixDQUFDLENBQUM7UUFIckMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFJNUMsQ0FBQzs7OztJQUdELFdBQVc7UUFDVixPQUFPLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7OztZQVpELFVBQVU7Ozs7WUFORixXQUFXO1lBQ1gsNEJBQTRCO1lBRTVCLDJCQUEyQjs7QUFhbkM7SUFEQyxRQUFROzs7NENBQ00sVUFBVTswREFFeEI7Ozs7OztJQVRXLDhDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL3N0cnVjdHVyZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL3JlYWQvc3RydWN0dXJlLnJlYWQtbW9kZWwtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QnO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uLnJlcG9zaXRvcnknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbFN0cnVjdHVyZVdhcmVob3VzZSBleHRlbmRzIFN0cnVjdHVyZVdhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHN0cnVjdHVyZVJlcG9zaXRvcnk6IFN0cnVjdHVyZVJlYWRNb2RlbFJlcG9zaXRvcnksXG5cdFx0XHRcdHZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeTogVmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlUmVwb3NpdG9yeSwgdmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5KTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblN0cnVjdHVyZSgpOiBPYnNlcnZhYmxlPFN0cnVjdHVyZVJlYWRNb2RlbFJvb3Q+IHtcblx0XHRyZXR1cm4gc3VwZXIub25TdHJ1Y3R1cmUodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19