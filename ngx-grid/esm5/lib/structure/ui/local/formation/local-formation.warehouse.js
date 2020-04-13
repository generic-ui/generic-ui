/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureId } from '../../../domain/structure.id';
import { StructureFormationWarehouse } from '../../../ui-api/formation/structure-formation.warehouse';
import { FormationRepository } from '../../../read/formation/formation-repository';
var LocalFormationWarehouse = /** @class */ (function (_super) {
    tslib_1.__extends(LocalFormationWarehouse, _super);
    function LocalFormationWarehouse(structureId, formationRepository) {
        var _this = _super.call(this, formationRepository) || this;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalFormationWarehouse.prototype.onSelectedRows = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onSelectedRows.call(this, this.structureId);
    };
    LocalFormationWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalFormationWarehouse.ctorParameters = function () { return [
        { type: StructureId },
        { type: FormationRepository }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalFormationWarehouse.prototype, "onSelectedRows", null);
    return LocalFormationWarehouse;
}(StructureFormationWarehouse));
export { LocalFormationWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalFormationWarehouse.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtZm9ybWF0aW9uLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9mb3JtYXRpb24vbG9jYWwtZm9ybWF0aW9uLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBSW5GO0lBQzZDLG1EQUEyQjtJQUV2RSxpQ0FBb0IsV0FBd0IsRUFDekMsbUJBQXdDO1FBRDNDLFlBRUMsa0JBQU0sbUJBQW1CLENBQUMsU0FDMUI7UUFIbUIsaUJBQVcsR0FBWCxXQUFXLENBQWE7O0lBRzVDLENBQUM7Ozs7SUFHRCxnREFBYzs7O0lBQWQ7UUFDQyxPQUFPLGlCQUFNLGNBQWMsWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Z0JBWEQsVUFBVTs7OztnQkFORixXQUFXO2dCQUVYLG1CQUFtQjs7SUFhM0I7UUFEQyxRQUFROzs7Z0RBQ1MsVUFBVTtpRUFFM0I7SUFDRiw4QkFBQztDQUFBLEFBWkQsQ0FDNkMsMkJBQTJCLEdBV3ZFO1NBWFksdUJBQXVCOzs7Ozs7SUFFdkIsOENBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvZm9ybWF0aW9uL3N0cnVjdHVyZS1mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IEZvcm1hdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9yZWFkL2Zvcm1hdGlvbi9mb3JtYXRpb24tcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTZWxlY3RlZFJvd3NMaXN0IH0gZnJvbSAnLi4vLi4vLi4vcmVhZC9mb3JtYXRpb24vc2VsZWN0ZWQtcm93cy9zZWxlY3RlZC1yb3dzLWxpc3QnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbEZvcm1hdGlvbldhcmVob3VzZSBleHRlbmRzIFN0cnVjdHVyZUZvcm1hdGlvbldhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdGZvcm1hdGlvblJlcG9zaXRvcnk6IEZvcm1hdGlvblJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcihmb3JtYXRpb25SZXBvc2l0b3J5KTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblNlbGVjdGVkUm93cygpOiBPYnNlcnZhYmxlPFNlbGVjdGVkUm93c0xpc3Q+IHtcblx0XHRyZXR1cm4gc3VwZXIub25TZWxlY3RlZFJvd3ModGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cbn1cbiJdfQ==