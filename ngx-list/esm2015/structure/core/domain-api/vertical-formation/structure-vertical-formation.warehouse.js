/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { VerticalFormationRepository } from './vertical-formation.repository';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXZlcnRpY2FsLWZvcm1hdGlvbi53YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9jb3JlL2RvbWFpbi1hcGkvdmVydGljYWwtZm9ybWF0aW9uL3N0cnVjdHVyZS12ZXJ0aWNhbC1mb3JtYXRpb24ud2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBSzlFLE1BQU0sT0FBTyxtQ0FBbUM7Ozs7SUFFL0MsWUFBb0IsMkJBQXdEO1FBQXhELGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNkI7SUFDNUUsQ0FBQzs7Ozs7SUFFRCx1QkFBdUIsQ0FBQyxXQUF3QjtRQUMvQyxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxXQUF3QjtRQUNuQyxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxXQUF3QjtRQUN6QyxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxXQUF3QjtRQUNuQyxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7O1lBcEJELFVBQVU7Ozs7WUFKRiwyQkFBMkI7Ozs7Ozs7SUFPdkIsMEVBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuL3ZlcnRpY2FsLWZvcm1hdGlvbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeTogVmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRvblZlcnRpY2FsU2Nyb2xsRW5hYmxlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkub25WZXJ0aWNhbFNjcm9sbEVuYWJsZWQoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0b25Sb3dIZWlnaHQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkub25Sb3dIZWlnaHQoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0b25Db250YWluZXJIZWlnaHQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkub25Db250YWluZXJIZWlnaHQoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0b25Ub3BNYXJnaW4oc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkub25Ub3BNYXJnaW4oc3RydWN0dXJlSWQpO1xuXHR9XG59XG4iXX0=