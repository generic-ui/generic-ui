/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureId } from '../../../domain/structure.id';
import { FormationWarehouse } from '../../../../source/domain-api/formation/formation.warehouse';
import { RowSelectedRepository } from '../../../../source/domain-api/formation/row-selected/row-selected.repository';
import { RowSelectionModeRepository } from '../../../../source/domain-api/formation/mode/row-selection-mode.repository';
import { SourceWarehouse } from '../../../../source/domain-api/source.warehouse';
export class LocalFormationWarehouse extends FormationWarehouse {
    /**
     * @param {?} structureId
     * @param {?} rowSelectedArchive
     * @param {?} rowSelectionModeRepository
     * @param {?} sourceWarehouse
     */
    constructor(structureId, rowSelectedArchive, rowSelectionModeRepository, sourceWarehouse) {
        super(rowSelectedArchive, rowSelectionModeRepository, sourceWarehouse);
        this.structureId = structureId;
    }
    /**
     * @return {?}
     */
    onRowSelectedReadModel() {
        return super.onRowSelectedReadModel(this.structureId);
    }
}
LocalFormationWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalFormationWarehouse.ctorParameters = () => [
    { type: StructureId },
    { type: RowSelectedRepository },
    { type: RowSelectionModeRepository },
    { type: SourceWarehouse }
];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalFormationWarehouse.prototype, "onRowSelectedReadModel", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalFormationWarehouse.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtZm9ybWF0aW9uLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZmVhdHVyZS9sb2NhbC9mb3JtYXRpb24vbG9jYWwtZm9ybWF0aW9uLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhFQUE4RSxDQUFDO0FBRXJILE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDRFQUE0RSxDQUFDO0FBQ3hILE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUlqRixNQUFNLE9BQU8sdUJBQXdCLFNBQVEsa0JBQWtCOzs7Ozs7O0lBRTlELFlBQW9CLFdBQXdCLEVBQ3pDLGtCQUF5QyxFQUN6QywwQkFBc0QsRUFDdEQsZUFBZ0M7UUFDbEMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLDBCQUEwQixFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBSnBELGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBSzVDLENBQUM7Ozs7SUFHRCxzQkFBc0I7UUFDckIsT0FBTyxLQUFLLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7OztZQWJELFVBQVU7Ozs7WUFSRixXQUFXO1lBRVgscUJBQXFCO1lBRXJCLDBCQUEwQjtZQUMxQixlQUFlOztBQWN2QjtJQURDLFFBQVE7Ozs0Q0FDaUIsVUFBVTtxRUFFbkM7Ozs7OztJQVZXLDhDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2RvbWFpbi1hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgUm93U2VsZWN0ZWRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2RvbWFpbi1hcGkvZm9ybWF0aW9uL3Jvdy1zZWxlY3RlZC9yb3ctc2VsZWN0ZWQucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBSb3dTZWxlY3RlZFJlYWRNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9kb21haW4tYXBpL2Zvcm1hdGlvbi9yb3ctc2VsZWN0ZWQucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25Nb2RlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9kb21haW4tYXBpL2Zvcm1hdGlvbi9tb2RlL3Jvdy1zZWxlY3Rpb24tbW9kZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9kb21haW4tYXBpL3NvdXJjZS53YXJlaG91c2UnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbEZvcm1hdGlvbldhcmVob3VzZSBleHRlbmRzIEZvcm1hdGlvbldhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHJvd1NlbGVjdGVkQXJjaGl2ZTogUm93U2VsZWN0ZWRSZXBvc2l0b3J5LFxuXHRcdFx0XHRyb3dTZWxlY3Rpb25Nb2RlUmVwb3NpdG9yeTogUm93U2VsZWN0aW9uTW9kZVJlcG9zaXRvcnksXG5cdFx0XHRcdHNvdXJjZVdhcmVob3VzZTogU291cmNlV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIocm93U2VsZWN0ZWRBcmNoaXZlLCByb3dTZWxlY3Rpb25Nb2RlUmVwb3NpdG9yeSwgc291cmNlV2FyZWhvdXNlKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblJvd1NlbGVjdGVkUmVhZE1vZGVsKCk6IE9ic2VydmFibGU8Um93U2VsZWN0ZWRSZWFkTW9kZWw+IHtcblx0XHRyZXR1cm4gc3VwZXIub25Sb3dTZWxlY3RlZFJlYWRNb2RlbCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxufVxuIl19