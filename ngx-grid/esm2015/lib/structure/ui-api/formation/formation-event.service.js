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
     * @param {?} structureReadModelService
     */
    constructor(domainEventBus, structureReadModelService) {
        this.domainEventBus = domainEventBus;
        this.structureReadModelService = structureReadModelService;
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
            return this.structureReadModelService
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
    FormationEventService.prototype.structureReadModelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLWV2ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWktYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24tZXZlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUQsT0FBTyxFQUFlLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTVELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBTW5HLE1BQU0sT0FBTyxxQkFBcUI7Ozs7O0lBRWpDLFlBQTZCLGNBQThCLEVBQ3ZDLHlCQUE2QztRQURwQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDdkMsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUFvQjtJQUNqRSxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxXQUF3QjtRQUV0QyxPQUFPLElBQUksQ0FBQyxjQUFjO2FBQ3BCLE9BQU8sQ0FDUCx1QkFBdUIsQ0FDdkI7YUFDQSxJQUFJLENBQ0osTUFBTTs7OztRQUFDLENBQUMsS0FBK0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBQyxFQUN6RyxTQUFTOzs7O1FBQUMsQ0FBQyxLQUErQixFQUFFLEVBQUU7WUFFN0MsT0FBTyxJQUFJLENBQUMseUJBQXlCO2lCQUNsQyxXQUFXLENBQUMsV0FBVyxDQUFDO2lCQUN4QixJQUFJLENBQ0osSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLEdBQUc7Ozs7WUFBQyxDQUFDLEdBQTJCLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxFQUFDLEVBQy9ELEdBQUc7Ozs7WUFBQyxDQUFDLFFBQTJCLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHOzs7O1lBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUMsRUFBQyxDQUN4RSxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7OztZQTFCRCxVQUFVOzs7O1lBVFcsY0FBYztZQUUzQixrQkFBa0I7Ozs7Ozs7SUFVZCwrQ0FBK0M7Ozs7O0lBQ3hELDBEQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50LCBEb21haW5FdmVudEJ1cyB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVdhcmVob3VzZSB9IGZyb20gJy4uL3N0cnVjdHVyZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNlbGVjdGVkUm93VG9nZ2xlZEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi90b2dnbGUvc2VsZWN0ZWQtcm93LXRvZ2dsZWQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4uLy4uL3JlYWQvc3RydWN0dXJlL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zb3VyY2UvaXRlbS5lbnRpdHknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGb3JtYXRpb25FdmVudFNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVJlYWRNb2RlbFNlcnZpY2U6IFN0cnVjdHVyZVdhcmVob3VzZSkge1xuXHR9XG5cblx0b25JdGVtU2VsZWN0ZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxBcnJheTxhbnk+PiB7XG5cblx0XHRyZXR1cm4gdGhpcy5kb21haW5FdmVudEJ1c1xuXHRcdFx0XHQgICAub2ZFdmVudChcblx0XHRcdFx0XHQgICBTZWxlY3RlZFJvd1RvZ2dsZWRFdmVudFxuXHRcdFx0XHQgICApXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoZXZlbnQ6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPikgPT4gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKS50b1N0cmluZygpID09PSBzdHJ1Y3R1cmVJZC50b1N0cmluZygpKSxcblx0XHRcdFx0XHQgICBzd2l0Y2hNYXAoKGV2ZW50OiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4pID0+IHtcblxuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHRoaXMuc3RydWN0dXJlUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAub25TdHJ1Y3R1cmUoc3RydWN0dXJlSWQpXG5cdFx0XHRcdFx0XHRcdFx0XHQgIC5waXBlKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIHRha2UoMSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgbWFwKChzdHI6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QpID0+IHN0ci5nZXRTZWxlY3RlZEVudGl0aWVzKCkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIG1hcCgoZW50aXRpZXM6IEFycmF5PEl0ZW1FbnRpdHk+KSA9PiBlbnRpdGllcy5tYXAoZW50ID0+IGVudC5nZXREYXRhKCkpKVxuXHRcdFx0XHRcdFx0XHRcdFx0ICApO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxufVxuIl19