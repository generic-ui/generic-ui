/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map, switchMap } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { StructureQueryService } from '../structure/structure-query.service';
import { SelectedRowToggledEvent } from '../../domain/formation/command/toggle/selected-row-toggled.event';
export class FormationEventService {
    /**
     * @param {?} domainEventBus
     * @param {?} structureQueryService
     */
    constructor(domainEventBus, structureQueryService) {
        this.domainEventBus = domainEventBus;
        this.structureQueryService = structureQueryService;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    selectItemSelected(structureId) {
        return this.domainEventBus
            .ofEvent(SelectedRowToggledEvent)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.aggregateId.toString() === structureId.toString())), switchMap((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return this.structureQueryService
                .select(structureId)
                .pipe(map((/**
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
    { type: StructureQueryService }
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
    FormationEventService.prototype.structureQueryService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLWV2ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvYXBwL2Zvcm1hdGlvbi9mb3JtYXRpb24tZXZlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RCxPQUFPLEVBQWUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFakUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFN0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFNM0csTUFBTSxPQUFPLHFCQUFxQjs7Ozs7SUFFakMsWUFBNkIsY0FBOEIsRUFDaEQscUJBQTRDO1FBRDFCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUNoRCwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBQ3ZELENBQUM7Ozs7O0lBRUQsa0JBQWtCLENBQUMsV0FBd0I7UUFFMUMsT0FBTyxJQUFJLENBQUMsY0FBYzthQUNwQixPQUFPLENBQ1AsdUJBQXVCLENBQ3ZCO2FBQ0EsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFDLEVBQ3ZGLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRTtZQUVoQyxPQUFPLElBQUksQ0FBQyxxQkFBcUI7aUJBQzlCLE1BQU0sQ0FBQyxXQUFXLENBQUM7aUJBQ25CLElBQUksQ0FDSixHQUFHOzs7O1lBQUMsQ0FBQyxHQUFjLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxFQUFDLEVBQ2xELEdBQUc7Ozs7WUFBQyxDQUFDLFFBQXVCLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHOzs7O1lBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUMsRUFBQyxDQUNwRSxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7OztZQXpCRCxVQUFVOzs7O1lBVFcsY0FBYztZQUUzQixxQkFBcUI7Ozs7Ozs7SUFVakIsK0NBQStDOzs7OztJQUN4RCxzREFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudCwgRG9tYWluRXZlbnRCdXMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVRdWVyeVNlcnZpY2UgfSBmcm9tICcuLi9zdHJ1Y3R1cmUvc3RydWN0dXJlLXF1ZXJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFNlbGVjdGVkUm93VG9nZ2xlZEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9jb21tYW5kL3RvZ2dsZS9zZWxlY3RlZC1yb3ctdG9nZ2xlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmUgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL3F1ZXJ5L3N0cnVjdHVyZSc7XG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tICcuLi8uLi9kb21haW4vc291cmNlL2VudGl0eSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZvcm1hdGlvbkV2ZW50U2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlUXVlcnlTZXJ2aWNlOiBTdHJ1Y3R1cmVRdWVyeVNlcnZpY2UpIHtcblx0fVxuXG5cdHNlbGVjdEl0ZW1TZWxlY3RlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuZG9tYWluRXZlbnRCdXNcblx0XHRcdFx0ICAgLm9mRXZlbnQoXG5cdFx0XHRcdFx0ICAgU2VsZWN0ZWRSb3dUb2dnbGVkRXZlbnRcblx0XHRcdFx0ICAgKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGV2ZW50OiBEb21haW5FdmVudCkgPT4gZXZlbnQuYWdncmVnYXRlSWQudG9TdHJpbmcoKSA9PT0gc3RydWN0dXJlSWQudG9TdHJpbmcoKSksXG5cdFx0XHRcdFx0ICAgc3dpdGNoTWFwKChldmVudDogRG9tYWluRXZlbnQpID0+IHtcblxuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHRoaXMuc3RydWN0dXJlUXVlcnlTZXJ2aWNlXG5cdFx0XHRcdFx0XHRcdFx0XHQgIC5zZWxlY3Qoc3RydWN0dXJlSWQpXG5cdFx0XHRcdFx0XHRcdFx0XHQgIC5waXBlKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIG1hcCgoc3RyOiBTdHJ1Y3R1cmUpID0+IHN0ci5nZXRTZWxlY3RlZEVudGl0aWVzKCkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIG1hcCgoZW50aXRpZXM6IEFycmF5PEVudGl0eT4pID0+IGVudGl0aWVzLm1hcChlbnQgPT4gZW50LmdldERhdGEoKSkpXG5cdFx0XHRcdFx0XHRcdFx0XHQgICk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=