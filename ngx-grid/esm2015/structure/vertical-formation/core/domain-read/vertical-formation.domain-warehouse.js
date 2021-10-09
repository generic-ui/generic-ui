/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { VerticalFormationRepository } from '../api/vertical-formation.repository';
import { VerticalFormationScrollBarPositionArchive } from './scroll-bar/vertical-formation.scroll-bar-position.archive';
import { Injectable } from '@angular/core';
import { VerticalFormationWarehouse } from '../api/vertical-formation.warehouse';
export class VerticalFormationDomainWarehouse extends VerticalFormationWarehouse {
    /**
     * @param {?} verticalFormationRepository
     * @param {?} positionRepository
     */
    constructor(verticalFormationRepository, positionRepository) {
        super();
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
     * @param {?} structureId
     * @return {?}
     */
    onScrollBarPosition(structureId) {
        return this.positionRepository.on(structureId);
    }
}
VerticalFormationDomainWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VerticalFormationDomainWarehouse.ctorParameters = () => [
    { type: VerticalFormationRepository },
    { type: VerticalFormationScrollBarPositionArchive }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    VerticalFormationDomainWarehouse.prototype.verticalFormationRepository;
    /**
     * @type {?}
     * @private
     */
    VerticalFormationDomainWarehouse.prototype.positionRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmRvbWFpbi13YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9kb21haW4tcmVhZC92ZXJ0aWNhbC1mb3JtYXRpb24uZG9tYWluLXdhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFHeEgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUlqRixNQUFNLE9BQU8sZ0NBQWlDLFNBQVEsMEJBQTBCOzs7OztJQUUvRSxZQUE2QiwyQkFBd0QsRUFDakUsa0JBQTZEO1FBQ2hGLEtBQUssRUFBRSxDQUFDO1FBRm9CLGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNkI7UUFDakUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUEyQztJQUVqRixDQUFDOzs7OztJQUVELHVCQUF1QixDQUFDLFdBQXdCO1FBQy9DLE9BQU8sSUFBSSxDQUFDLDJCQUEyQixDQUFDLHVCQUF1QixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlFLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFdBQXdCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLDJCQUEyQixDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLFdBQXdCO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLDJCQUEyQixDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFdBQXdCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLDJCQUEyQixDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7OztJQUVELG1CQUFtQixDQUFDLFdBQXdCO1FBQzNDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7WUExQkQsVUFBVTs7OztZQVJGLDJCQUEyQjtZQUMzQix5Q0FBeUM7Ozs7Ozs7SUFVckMsdUVBQXlFOzs7OztJQUNsRiw4REFBOEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuLi9hcGkvdmVydGljYWwtZm9ybWF0aW9uLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25TY3JvbGxCYXJQb3NpdGlvbkFyY2hpdmUgfSBmcm9tICcuL3Njcm9sbC1iYXIvdmVydGljYWwtZm9ybWF0aW9uLnNjcm9sbC1iYXItcG9zaXRpb24uYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vYXBpL3ZlcnRpY2FsLWZvcm1hdGlvbi53YXJlaG91c2UnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbEZvcm1hdGlvbkRvbWFpbldhcmVob3VzZSBleHRlbmRzIFZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeTogVmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBvc2l0aW9uUmVwb3NpdG9yeTogVmVydGljYWxGb3JtYXRpb25TY3JvbGxCYXJQb3NpdGlvbkFyY2hpdmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0b25WZXJ0aWNhbFNjcm9sbEVuYWJsZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5Lm9uVmVydGljYWxTY3JvbGxFbmFibGVkKHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdG9uUm93SGVpZ2h0KHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5Lm9uUm93SGVpZ2h0KHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdG9uQ29udGFpbmVySGVpZ2h0KHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5Lm9uQ29udGFpbmVySGVpZ2h0KHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdG9uVG9wTWFyZ2luKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5Lm9uVG9wTWFyZ2luKHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdG9uU2Nyb2xsQmFyUG9zaXRpb24oc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5wb3NpdGlvblJlcG9zaXRvcnkub24oc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==