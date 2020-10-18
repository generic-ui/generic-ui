/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { VerticalFormationRepository } from './vertical-formation.repository';
import { structureGlobalId } from '../../../core/api/structure.global-id';
import { VerticalFormationScrollBarPositionRepository } from '../domain-read/scroll-bar/vertical-formation.scroll-bar-position.repository';
export class StructureVerticalFormationWarehouse {
    /**
     * @param {?} verticalFormationRepository
     * @param {?} positionRepository
     */
    constructor(verticalFormationRepository, positionRepository) {
        this.verticalFormationRepository = verticalFormationRepository;
        this.positionRepository = positionRepository;
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
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onScrollBarPosition(structureId = structureGlobalId) {
        return this.positionRepository.on(structureId);
    }
}
StructureVerticalFormationWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureVerticalFormationWarehouse.ctorParameters = () => [
    { type: VerticalFormationRepository },
    { type: VerticalFormationScrollBarPositionRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureVerticalFormationWarehouse.prototype.verticalFormationRepository;
    /**
     * @type {?}
     * @private
     */
    StructureVerticalFormationWarehouse.prototype.positionRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXZlcnRpY2FsLWZvcm1hdGlvbi53YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9hcGkvc3RydWN0dXJlLXZlcnRpY2FsLWZvcm1hdGlvbi53YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFFLDRDQUE0QyxFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFJM0ksTUFBTSxPQUFPLG1DQUFtQzs7Ozs7SUFFL0MsWUFBNkIsMkJBQXdELEVBQ2pFLGtCQUFnRTtRQUR2RCxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO1FBQ2pFLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBOEM7SUFDcEYsQ0FBQzs7Ozs7SUFFRCx1QkFBdUIsQ0FBQyxXQUF3QjtRQUMvQyxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxXQUF3QjtRQUNuQyxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxXQUF3QjtRQUN6QyxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxXQUF3QjtRQUNuQyxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxjQUEyQixpQkFBaUI7UUFDL0QsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2hELENBQUM7OztZQXpCRCxVQUFVOzs7O1lBTkYsMkJBQTJCO1lBRzNCLDRDQUE0Qzs7Ozs7OztJQU14QywwRUFBeUU7Ozs7O0lBQ2xGLGlFQUFpRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24ucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25TY3JvbGxCYXJQb3NpdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuLi9kb21haW4tcmVhZC9zY3JvbGwtYmFyL3ZlcnRpY2FsLWZvcm1hdGlvbi5zY3JvbGwtYmFyLXBvc2l0aW9uLnJlcG9zaXRvcnknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSB2ZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnk6IFZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwb3NpdGlvblJlcG9zaXRvcnk6IFZlcnRpY2FsRm9ybWF0aW9uU2Nyb2xsQmFyUG9zaXRpb25SZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRvblZlcnRpY2FsU2Nyb2xsRW5hYmxlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkub25WZXJ0aWNhbFNjcm9sbEVuYWJsZWQoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0b25Sb3dIZWlnaHQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkub25Sb3dIZWlnaHQoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0b25Db250YWluZXJIZWlnaHQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkub25Db250YWluZXJIZWlnaHQoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0b25Ub3BNYXJnaW4oc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkub25Ub3BNYXJnaW4oc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0b25TY3JvbGxCYXJQb3NpdGlvbihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMucG9zaXRpb25SZXBvc2l0b3J5Lm9uKHN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=