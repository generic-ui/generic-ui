/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { CompositionColumnsSetEvent } from '../../domain/composition/command/column/set-columns/composition.columns-set.event';
import { CompositionContainerWidthSetEvent } from '../../domain/composition/command/width/set-container-width/composition-container-width-set.event';
export class CompositionEventService {
    /**
     * @param {?} domainEventBus
     */
    constructor(domainEventBus) {
        this.domainEventBus = domainEventBus;
    }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    onColumnsChanged(compositionId) {
        return this.domainEventBus
            .ofEvent(CompositionColumnsSetEvent)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.aggregateId.toString() === compositionId.toString())));
    }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    onWidthChanged(compositionId) {
        return this.domainEventBus
            .ofEvent(CompositionColumnsSetEvent)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.aggregateId.toString() === compositionId.toString())));
    }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    onContainerWidthChanged(compositionId) {
        return this.domainEventBus
            .ofEvent(CompositionContainerWidthSetEvent)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getAggregateId().equals(compositionId))), map((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return event.getPayload();
        })), filter((/**
         * @param {?} width
         * @return {?}
         */
        (width) => !!width)));
    }
}
CompositionEventService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionEventService.ctorParameters = () => [
    { type: DomainEventBus }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionEventService.prototype.domainEventBus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZXZlbnQtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvY29tcG9zaXRpb24vY29tcG9zaXRpb24uZXZlbnQtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBZSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdqRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtRkFBbUYsQ0FBQztBQUMvSCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxrR0FBa0csQ0FBQztBQUlySixNQUFNLE9BQU8sdUJBQXVCOzs7O0lBRW5DLFlBQTZCLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUMzRCxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLGFBQTRCO1FBRTVDLE9BQU8sSUFBSSxDQUFDLGNBQWM7YUFDcEIsT0FBTyxDQUNQLDBCQUEwQixDQUMxQjthQUNBLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsQ0FBQyxLQUFrQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxLQUFLLGFBQWEsQ0FBQyxRQUFRLEVBQUUsRUFBQyxDQUN6RixDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsYUFBNEI7UUFDMUMsT0FBTyxJQUFJLENBQUMsY0FBYzthQUNwQixPQUFPLENBQ1AsMEJBQTBCLENBQzFCO2FBQ0EsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEtBQUssYUFBYSxDQUFDLFFBQVEsRUFBRSxFQUFDLENBQ3pGLENBQUM7SUFDUixDQUFDOzs7OztJQUVELHVCQUF1QixDQUFDLGFBQTRCO1FBQ25ELE9BQU8sSUFBSSxDQUFDLGNBQWM7YUFDcEIsT0FBTyxDQUNQLGlDQUFpQyxDQUNqQzthQUNBLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsQ0FBQyxLQUFrQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFDLEVBQzVFLEdBQUc7Ozs7UUFBQyxDQUFDLEtBQXdDLEVBQUUsRUFBRTtZQUNoRCxPQUFPLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMzQixDQUFDLEVBQUMsRUFDRixNQUFNOzs7O1FBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUMsQ0FDbEMsQ0FBQztJQUNSLENBQUM7OztZQXZDRCxVQUFVOzs7O1lBUFcsY0FBYzs7Ozs7OztJQVV2QixpREFBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnQsIERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21wb3NpdGlvbi1pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbnNTZXRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbHVtbi9zZXQtY29sdW1ucy9jb21wb3NpdGlvbi5jb2x1bW5zLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vY29tcG9zaXRpb24vY29tbWFuZC93aWR0aC9zZXQtY29udGFpbmVyLXdpZHRoL2NvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC1zZXQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkV2ZW50U2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMpIHtcblx0fVxuXG5cdG9uQ29sdW1uc0NoYW5nZWQoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IE9ic2VydmFibGU8RG9tYWluRXZlbnQ+IHtcblxuXHRcdHJldHVybiB0aGlzLmRvbWFpbkV2ZW50QnVzXG5cdFx0XHRcdCAgIC5vZkV2ZW50KFxuXHRcdFx0XHRcdCAgIENvbXBvc2l0aW9uQ29sdW1uc1NldEV2ZW50XG5cdFx0XHRcdCAgIClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChldmVudDogRG9tYWluRXZlbnQpID0+IGV2ZW50LmFnZ3JlZ2F0ZUlkLnRvU3RyaW5nKCkgPT09IGNvbXBvc2l0aW9uSWQudG9TdHJpbmcoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uV2lkdGhDaGFuZ2VkKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLmRvbWFpbkV2ZW50QnVzXG5cdFx0XHRcdCAgIC5vZkV2ZW50KFxuXHRcdFx0XHRcdCAgIENvbXBvc2l0aW9uQ29sdW1uc1NldEV2ZW50XG5cdFx0XHRcdCAgIClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChldmVudDogRG9tYWluRXZlbnQpID0+IGV2ZW50LmFnZ3JlZ2F0ZUlkLnRvU3RyaW5nKCkgPT09IGNvbXBvc2l0aW9uSWQudG9TdHJpbmcoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uQ29udGFpbmVyV2lkdGhDaGFuZ2VkKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLmRvbWFpbkV2ZW50QnVzXG5cdFx0XHRcdCAgIC5vZkV2ZW50KFxuXHRcdFx0XHRcdCAgIENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudFxuXHRcdFx0XHQgICApXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoZXZlbnQ6IERvbWFpbkV2ZW50KSA9PiBldmVudC5nZXRBZ2dyZWdhdGVJZCgpLmVxdWFscyhjb21wb3NpdGlvbklkKSksXG5cdFx0XHRcdFx0ICAgbWFwKChldmVudDogQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gZXZlbnQuZ2V0UGF5bG9hZCgpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIGZpbHRlcigod2lkdGg6IG51bWJlcikgPT4gISF3aWR0aClcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=