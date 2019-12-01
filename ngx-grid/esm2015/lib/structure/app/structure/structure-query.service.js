/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { StructureRepository } from '../../domain/structure/query/structure.repository';
import { globalStructureId } from '../../domain/global-structure-id';
export class StructureQueryService {
    /**
     * @param {?} structureRepository
     */
    constructor(structureRepository) {
        this.structureRepository = structureRepository;
    }
    /**
     * @param {?=} aggregateId
     * @return {?}
     */
    select(aggregateId = globalStructureId) {
        return this.structureRepository.select(aggregateId);
    }
    /**
     * @param {?=} aggregateId
     * @return {?}
     */
    selectVerticalScrollEnabled(aggregateId = globalStructureId) {
        return this.structureRepository
            .select(aggregateId)
            .pipe(map((/**
         * @param {?} structure
         * @return {?}
         */
        (structure) => structure.isVerticalScrollEnabled())), distinctUntilChanged());
    }
}
StructureQueryService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureQueryService.ctorParameters = () => [
    { type: StructureRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureQueryService.prototype.structureRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXF1ZXJ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvYXBwL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtcXVlcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDeEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFLckUsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUVqQyxZQUFvQixtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUM1RCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxjQUEyQixpQkFBaUI7UUFDbEQsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7O0lBRUQsMkJBQTJCLENBQUMsY0FBMkIsaUJBQWlCO1FBQ3ZFLE9BQU8sSUFBSSxDQUFDLG1CQUFtQjthQUN6QixNQUFNLENBQUMsV0FBVyxDQUFDO2FBQ25CLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsQ0FBQyxTQUFvQixFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsdUJBQXVCLEVBQUUsRUFBQyxFQUNsRSxvQkFBb0IsRUFBRSxDQUN0QixDQUFDO0lBQ1IsQ0FBQzs7O1lBakJELFVBQVU7Ozs7WUFMRixtQkFBbUI7Ozs7Ozs7SUFRZixvREFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL3F1ZXJ5L3N0cnVjdHVyZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IGdsb2JhbFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL2dsb2JhbC1zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9xdWVyeS9zdHJ1Y3R1cmUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVRdWVyeVNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlUmVwb3NpdG9yeTogU3RydWN0dXJlUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0c2VsZWN0KGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxTdHJ1Y3R1cmU+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVSZXBvc2l0b3J5LnNlbGVjdChhZ2dyZWdhdGVJZCk7XG5cdH1cblxuXHRzZWxlY3RWZXJ0aWNhbFNjcm9sbEVuYWJsZWQoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVSZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5zZWxlY3QoYWdncmVnYXRlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoc3RydWN0dXJlOiBTdHJ1Y3R1cmUpID0+IHN0cnVjdHVyZS5pc1ZlcnRpY2FsU2Nyb2xsRW5hYmxlZCgpKSxcblx0XHRcdFx0XHQgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxufVxuIl19