/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { StructureWarehouse } from '../structure.warehouse';
import { SelectedRowToggledEvent } from '../../domain/formation/toggle/selected-row-toggled.event';
export class FormationEventService {
    /**
     * @param {?} domainEventBus
     * @param {?} structureWarehouse
     */
    constructor(domainEventBus, structureWarehouse) {
        this.domainEventBus = domainEventBus;
        this.structureWarehouse = structureWarehouse;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onItemSelected(structureId) {
        return this.domainEventBus
            .ofEvent(SelectedRowToggledEvent)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getAggregateId().toString() === structureId.toString())), switchMap((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return this.structureWarehouse
                .onStructure(structureId)
                .pipe(take(1), map((/**
             * @param {?} str
             * @return {?}
             */
            (str) => str.getSelectedEntities())), map((/**
             * @param {?} entities
             * @return {?}
             */
            (entities) => entities.map((/**
             * @param {?} ent
             * @return {?}
             */
            ent => ent.getData())))));
        })));
    }
}
FormationEventService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FormationEventService.ctorParameters = () => [
    { type: DomainEventBus },
    { type: StructureWarehouse }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormationEventService.prototype.domainEventBus;
    /**
     * @type {?}
     * @private
     */
    FormationEventService.prototype.structureWarehouse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLWV2ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS9mb3JtYXRpb24vZm9ybWF0aW9uLWV2ZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlELE9BQU8sRUFBZSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU1RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQU1uRyxNQUFNLE9BQU8scUJBQXFCOzs7OztJQUVqQyxZQUE2QixjQUE4QixFQUN2QyxrQkFBc0M7UUFEN0IsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ3ZDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFDMUQsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsV0FBd0I7UUFFdEMsT0FBTyxJQUFJLENBQUMsY0FBYzthQUNwQixPQUFPLENBQ1AsdUJBQXVCLENBQ3ZCO2FBQ0EsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxDQUFDLEtBQStCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUMsRUFDekcsU0FBUzs7OztRQUFDLENBQUMsS0FBK0IsRUFBRSxFQUFFO1lBRTdDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQjtpQkFDM0IsV0FBVyxDQUFDLFdBQVcsQ0FBQztpQkFDeEIsSUFBSSxDQUNKLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxHQUFHOzs7O1lBQUMsQ0FBQyxHQUEyQixFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsRUFBQyxFQUMvRCxHQUFHOzs7O1lBQUMsQ0FBQyxRQUEyQixFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRzs7OztZQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFDLEVBQUMsQ0FDeEUsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDUixDQUFDOzs7WUExQkQsVUFBVTs7OztZQVRXLGNBQWM7WUFFM0Isa0JBQWtCOzs7Ozs7O0lBVWQsK0NBQStDOzs7OztJQUN4RCxtREFBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudCwgRG9tYWluRXZlbnRCdXMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVXYXJlaG91c2UgfSBmcm9tICcuLi9zdHJ1Y3R1cmUud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTZWxlY3RlZFJvd1RvZ2dsZWRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vdG9nZ2xlL3NlbGVjdGVkLXJvdy10b2dnbGVkLmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QgfSBmcm9tICcuLi9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zb3VyY2UvaXRlbS5lbnRpdHknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGb3JtYXRpb25FdmVudFNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVdhcmVob3VzZTogU3RydWN0dXJlV2FyZWhvdXNlKSB7XG5cdH1cblxuXHRvbkl0ZW1TZWxlY3RlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPEFycmF5PGFueT4+IHtcblxuXHRcdHJldHVybiB0aGlzLmRvbWFpbkV2ZW50QnVzXG5cdFx0XHRcdCAgIC5vZkV2ZW50KFxuXHRcdFx0XHRcdCAgIFNlbGVjdGVkUm93VG9nZ2xlZEV2ZW50XG5cdFx0XHRcdCAgIClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChldmVudDogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+KSA9PiBldmVudC5nZXRBZ2dyZWdhdGVJZCgpLnRvU3RyaW5nKCkgPT09IHN0cnVjdHVyZUlkLnRvU3RyaW5nKCkpLFxuXHRcdFx0XHRcdCAgIHN3aXRjaE1hcCgoZXZlbnQ6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPikgPT4ge1xuXG5cdFx0XHRcdFx0XHQgICByZXR1cm4gdGhpcy5zdHJ1Y3R1cmVXYXJlaG91c2Vcblx0XHRcdFx0XHRcdFx0XHRcdCAgLm9uU3RydWN0dXJlKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAucGlwZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICB0YWtlKDEpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIG1hcCgoc3RyOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290KSA9PiBzdHIuZ2V0U2VsZWN0ZWRFbnRpdGllcygpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBtYXAoKGVudGl0aWVzOiBBcnJheTxJdGVtRW50aXR5PikgPT4gZW50aXRpZXMubWFwKGVudCA9PiBlbnQuZ2V0RGF0YSgpKSlcblx0XHRcdFx0XHRcdFx0XHRcdCAgKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==