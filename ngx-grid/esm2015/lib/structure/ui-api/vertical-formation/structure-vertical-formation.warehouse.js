/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { VerticalFormationRepository } from '../../read/structure/vertical-formation/vertical-formation.repository';
export class StructureVerticalFormationWarehouse {
    /**
     * @param {?} verticalFormationRepository
     */
    constructor(verticalFormationRepository) {
        this.verticalFormationRepository = verticalFormationRepository;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onVerticalScrollEnabled(structureId) {
        return this.verticalFormationRepository.onVerticalScrollEnabled(structureId);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onRowHeight(structureId) {
        return this.verticalFormationRepository.onRowHeight(structureId);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onContainerHeight(structureId) {
        return this.verticalFormationRepository.onContainerHeight(structureId);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onTopMargin(structureId) {
        return this.verticalFormationRepository.onTopMargin(structureId);
    }
}
StructureVerticalFormationWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureVerticalFormationWarehouse.ctorParameters = () => [
    { type: VerticalFormationRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureVerticalFormationWarehouse.prototype.verticalFormationRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXZlcnRpY2FsLWZvcm1hdGlvbi53YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWktYXBpL3ZlcnRpY2FsLWZvcm1hdGlvbi9zdHJ1Y3R1cmUtdmVydGljYWwtZm9ybWF0aW9uLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUtwSCxNQUFNLE9BQU8sbUNBQW1DOzs7O0lBRS9DLFlBQW9CLDJCQUF3RDtRQUF4RCxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO0lBQzVFLENBQUM7Ozs7O0lBRUQsdUJBQXVCLENBQUMsV0FBd0I7UUFDL0MsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUMsdUJBQXVCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUUsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsV0FBd0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsV0FBd0I7UUFDekMsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsV0FBd0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7OztZQXBCRCxVQUFVOzs7O1lBSkYsMkJBQTJCOzs7Ozs7O0lBT3ZCLDBFQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vcmVhZC9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeTogVmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRvblZlcnRpY2FsU2Nyb2xsRW5hYmxlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkub25WZXJ0aWNhbFNjcm9sbEVuYWJsZWQoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0b25Sb3dIZWlnaHQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkub25Sb3dIZWlnaHQoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0b25Db250YWluZXJIZWlnaHQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkub25Db250YWluZXJIZWlnaHQoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0b25Ub3BNYXJnaW4oc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkub25Ub3BNYXJnaW4oc3RydWN0dXJlSWQpO1xuXHR9XG59XG4iXX0=