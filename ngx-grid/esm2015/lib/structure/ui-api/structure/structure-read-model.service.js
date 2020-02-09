/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { StructureRepository } from '../../domain/structure/read/structure.repository';
import { globalStructureId } from '../../domain/global-structure-id';
import { VerticalFormationRepository } from '../../domain/structure/read/vertical-formation/vertical-formation.repository';
export class StructureReadModelService {
    /**
     * @param {?} structureRepository
     * @param {?} verticalFormationRepository
     */
    constructor(structureRepository, verticalFormationRepository) {
        this.structureRepository = structureRepository;
        this.verticalFormationRepository = verticalFormationRepository;
    }
    /**
     * @param {?=} aggregateId
     * @return {?}
     */
    onStructure(aggregateId = globalStructureId) {
        return this.structureRepository.onStructure(aggregateId);
    }
    /**
     * @param {?=} aggregateId
     * @return {?}
     */
    onVerticalScrollEnabled(aggregateId = globalStructureId) {
        return this.structureRepository
            .onStructure(aggregateId)
            .pipe(map((/**
         * @param {?} structure
         * @return {?}
         */
        (structure) => structure.isVerticalScrollEnabled())), distinctUntilChanged());
    }
    /**
     * @param {?=} aggregateId
     * @return {?}
     */
    onRowHeight(aggregateId = globalStructureId) {
        return this.verticalFormationRepository.onRowHeight(aggregateId);
    }
}
StructureReadModelService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureReadModelService.ctorParameters = () => [
    { type: StructureRepository },
    { type: VerticalFormationRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureReadModelService.prototype.structureRepository;
    /**
     * @type {?}
     * @private
     */
    StructureReadModelService.prototype.verticalFormationRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXJlYWQtbW9kZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS1yZWFkLW1vZGVsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSTNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDhFQUE4RSxDQUFDO0FBSTNILE1BQU0sT0FBTyx5QkFBeUI7Ozs7O0lBRXJDLFlBQW9CLG1CQUF3QyxFQUNqRCwyQkFBd0Q7UUFEL0Msd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUNqRCxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO0lBQ25FLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLGNBQTJCLGlCQUFpQjtRQUN2RCxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Ozs7SUFFRCx1QkFBdUIsQ0FBQyxjQUEyQixpQkFBaUI7UUFDbkUsT0FBTyxJQUFJLENBQUMsbUJBQW1CO2FBQ3pCLFdBQVcsQ0FBQyxXQUFXLENBQUM7YUFDeEIsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxDQUFDLFNBQW9CLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsRUFBRSxFQUFDLEVBQ2xFLG9CQUFvQixFQUFFLENBQ3RCLENBQUM7SUFDUixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxjQUEyQixpQkFBaUI7UUFDdkQsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7OztZQXRCRCxVQUFVOzs7O1lBTkYsbUJBQW1CO1lBR25CLDJCQUEyQjs7Ozs7OztJQU12Qix3REFBZ0Q7Ozs7O0lBQ3pELGdFQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9zdHJ1Y3R1cmUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBnbG9iYWxTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9nbG9iYWwtc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9zdHJ1Y3R1cmUnO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9yZWFkL3ZlcnRpY2FsLWZvcm1hdGlvbi92ZXJ0aWNhbC1mb3JtYXRpb24ucmVwb3NpdG9yeSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVJlYWRNb2RlbFNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlUmVwb3NpdG9yeTogU3RydWN0dXJlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSB2ZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnk6IFZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0b25TdHJ1Y3R1cmUoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPFN0cnVjdHVyZT4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVJlcG9zaXRvcnkub25TdHJ1Y3R1cmUoYWdncmVnYXRlSWQpO1xuXHR9XG5cblx0b25WZXJ0aWNhbFNjcm9sbEVuYWJsZWQoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVSZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vblN0cnVjdHVyZShhZ2dyZWdhdGVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChzdHJ1Y3R1cmU6IFN0cnVjdHVyZSkgPT4gc3RydWN0dXJlLmlzVmVydGljYWxTY3JvbGxFbmFibGVkKCkpLFxuXHRcdFx0XHRcdCAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uUm93SGVpZ2h0KGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkub25Sb3dIZWlnaHQoYWdncmVnYXRlSWQpO1xuXHR9XG5cbn1cbiJdfQ==