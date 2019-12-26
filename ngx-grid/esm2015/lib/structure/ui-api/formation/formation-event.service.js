/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map, take, switchMap } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { StructureReadModelService } from '../structure/structure-read-model.service';
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
    onItemSelected(structureId) {
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
    { type: StructureReadModelService }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLWV2ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWktYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24tZXZlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUQsT0FBTyxFQUFlLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWpFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRXRGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBTTNHLE1BQU0sT0FBTyxxQkFBcUI7Ozs7O0lBRWpDLFlBQTZCLGNBQThCLEVBQ3ZDLHFCQUFnRDtRQUR2QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDdkMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUEyQjtJQUNwRSxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxXQUF3QjtRQUV0QyxPQUFPLElBQUksQ0FBQyxjQUFjO2FBQ3BCLE9BQU8sQ0FDUCx1QkFBdUIsQ0FDdkI7YUFDQSxJQUFJLENBQ0osTUFBTTs7OztRQUFDLENBQUMsS0FBa0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUMsRUFDdkYsU0FBUzs7OztRQUFDLENBQUMsS0FBa0IsRUFBRSxFQUFFO1lBRWhDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQjtpQkFDOUIsV0FBVyxDQUFDLFdBQVcsQ0FBQztpQkFDeEIsSUFBSSxDQUNKLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxHQUFHOzs7O1lBQUMsQ0FBQyxHQUFjLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxFQUFDLEVBQ2xELEdBQUc7Ozs7WUFBQyxDQUFDLFFBQTJCLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHOzs7O1lBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUMsRUFBQyxDQUN4RSxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7OztZQTFCRCxVQUFVOzs7O1lBVFcsY0FBYztZQUUzQix5QkFBeUI7Ozs7Ozs7SUFVckIsK0NBQStDOzs7OztJQUN4RCxzREFBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgdGFrZSwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudCwgRG9tYWluRXZlbnRCdXMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vc3RydWN0dXJlL3N0cnVjdHVyZS1yZWFkLW1vZGVsLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFNlbGVjdGVkUm93VG9nZ2xlZEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9jb21tYW5kL3RvZ2dsZS9zZWxlY3RlZC1yb3ctdG9nZ2xlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmUgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL3JlYWQvc3RydWN0dXJlJztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi9kb21haW4vc291cmNlL2l0ZW0uZW50aXR5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRm9ybWF0aW9uRXZlbnRTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVRdWVyeVNlcnZpY2U6IFN0cnVjdHVyZVJlYWRNb2RlbFNlcnZpY2UpIHtcblx0fVxuXG5cdG9uSXRlbVNlbGVjdGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5kb21haW5FdmVudEJ1c1xuXHRcdFx0XHQgICAub2ZFdmVudChcblx0XHRcdFx0XHQgICBTZWxlY3RlZFJvd1RvZ2dsZWRFdmVudFxuXHRcdFx0XHQgICApXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoZXZlbnQ6IERvbWFpbkV2ZW50KSA9PiBldmVudC5hZ2dyZWdhdGVJZC50b1N0cmluZygpID09PSBzdHJ1Y3R1cmVJZC50b1N0cmluZygpKSxcblx0XHRcdFx0XHQgICBzd2l0Y2hNYXAoKGV2ZW50OiBEb21haW5FdmVudCkgPT4ge1xuXG5cdFx0XHRcdFx0XHQgICByZXR1cm4gdGhpcy5zdHJ1Y3R1cmVRdWVyeVNlcnZpY2Vcblx0XHRcdFx0XHRcdFx0XHRcdCAgLm9uU3RydWN0dXJlKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAucGlwZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICB0YWtlKDEpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIG1hcCgoc3RyOiBTdHJ1Y3R1cmUpID0+IHN0ci5nZXRTZWxlY3RlZEVudGl0aWVzKCkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIG1hcCgoZW50aXRpZXM6IEFycmF5PEl0ZW1FbnRpdHk+KSA9PiBlbnRpdGllcy5tYXAoZW50ID0+IGVudC5nZXREYXRhKCkpKVxuXHRcdFx0XHRcdFx0XHRcdFx0ICApO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxufVxuIl19