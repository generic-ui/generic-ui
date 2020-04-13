/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureWarehouse } from '../../../ui-api/structure.warehouse';
import { StructureId } from '../../../domain/structure.id';
import { StructureReadModelRepository } from '../../../read/structure/structure.read-model-repository';
import { VerticalFormationRepository } from '../../../read/structure/vertical-formation/vertical-formation.repository';
var LocalStructureWarehouse = /** @class */ (function (_super) {
    tslib_1.__extends(LocalStructureWarehouse, _super);
    function LocalStructureWarehouse(structureId, structureRepository, verticalFormationRepository) {
        var _this = _super.call(this, structureRepository, verticalFormationRepository) || this;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalStructureWarehouse.prototype.onStructure = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onStructure.call(this, this.structureId);
    };
    LocalStructureWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalStructureWarehouse.ctorParameters = function () { return [
        { type: StructureId },
        { type: StructureReadModelRepository },
        { type: VerticalFormationRepository }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalStructureWarehouse.prototype, "onStructure", null);
    return LocalStructureWarehouse;
}(StructureWarehouse));
export { LocalStructureWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalStructureWarehouse.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RydWN0dXJlLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9zdHJ1Y3R1cmUvbG9jYWwtc3RydWN0dXJlLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBRXZHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDBFQUEwRSxDQUFDO0FBR3ZIO0lBQzZDLG1EQUFrQjtJQUU5RCxpQ0FBb0IsV0FBd0IsRUFDekMsbUJBQWlELEVBQ2pELDJCQUF3RDtRQUYzRCxZQUdDLGtCQUFNLG1CQUFtQixFQUFFLDJCQUEyQixDQUFDLFNBQ3ZEO1FBSm1CLGlCQUFXLEdBQVgsV0FBVyxDQUFhOztJQUk1QyxDQUFDOzs7O0lBR0QsNkNBQVc7OztJQUFYO1FBQ0MsT0FBTyxpQkFBTSxXQUFXLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7O2dCQVpELFVBQVU7Ozs7Z0JBTkYsV0FBVztnQkFDWCw0QkFBNEI7Z0JBRTVCLDJCQUEyQjs7SUFhbkM7UUFEQyxRQUFROzs7Z0RBQ00sVUFBVTs4REFFeEI7SUFFRiw4QkFBQztDQUFBLEFBZEQsQ0FDNkMsa0JBQWtCLEdBYTlEO1NBYlksdUJBQXVCOzs7Ozs7SUFFdkIsOENBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vcmVhZC9zdHJ1Y3R1cmUvc3RydWN0dXJlLnJlYWQtbW9kZWwtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290IH0gZnJvbSAnLi4vLi4vLi4vcmVhZC9zdHJ1Y3R1cmUvc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdCc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9yZWFkL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uLnJlcG9zaXRvcnknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbFN0cnVjdHVyZVdhcmVob3VzZSBleHRlbmRzIFN0cnVjdHVyZVdhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHN0cnVjdHVyZVJlcG9zaXRvcnk6IFN0cnVjdHVyZVJlYWRNb2RlbFJlcG9zaXRvcnksXG5cdFx0XHRcdHZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeTogVmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlUmVwb3NpdG9yeSwgdmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5KTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblN0cnVjdHVyZSgpOiBPYnNlcnZhYmxlPFN0cnVjdHVyZVJlYWRNb2RlbFJvb3Q+IHtcblx0XHRyZXR1cm4gc3VwZXIub25TdHJ1Y3R1cmUodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19