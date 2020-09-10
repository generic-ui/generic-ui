/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { DomainEventBus, EventRepository } from '@generic-ui/hermes';
import { CompositionColumnsSetEvent } from '../domain/column/set-columns/composition.columns-set.event';
import { CompositionContainerWidthSetEvent } from '../domain/width/set-container-width/composition-container-width-set.event';
export class CompositionEventRepository extends EventRepository {
    /**
     * @param {?} domainEventBus
     */
    constructor(domainEventBus) {
        super(domainEventBus);
    }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    onColumnsChanged(compositionId) {
        return this.onEvent(compositionId, CompositionColumnsSetEvent);
    }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    onContainerWidthChanged(compositionId) {
        return this.onEvent(compositionId, CompositionContainerWidthSetEvent)
            .pipe(map((/**
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
CompositionEventRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionEventRepository.ctorParameters = () => [
    { type: DomainEventBus }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZXZlbnQtcmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vZG9tYWluLWFwaS9jb21wb3NpdGlvbi5ldmVudC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdyRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN4RyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSwyRUFBMkUsQ0FBQztBQUs5SCxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsZUFBMEQ7Ozs7SUFFekcsWUFBWSxjQUE4QjtRQUN6QyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxhQUF5QztRQUV6RCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLDBCQUEwQixDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7SUFFRCx1QkFBdUIsQ0FBQyxhQUF5QztRQUVoRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLGlDQUFpQyxDQUFDO2FBQy9ELElBQUksQ0FDSixHQUFHOzs7O1FBQUMsQ0FBQyxLQUF3QyxFQUFFLEVBQUU7WUFDaEQsT0FBTyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxFQUFDLEVBQ0YsTUFBTTs7OztRQUFDLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFDLENBQ2xDLENBQUM7SUFDUixDQUFDOzs7WUFyQkQsVUFBVTs7OztZQVJGLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRCdXMsIEV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi9kb21haW4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5zU2V0RXZlbnQgfSBmcm9tICcuLi9kb21haW4vY29sdW1uL3NldC1jb2x1bW5zL2NvbXBvc2l0aW9uLmNvbHVtbnMtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudCB9IGZyb20gJy4uL2RvbWFpbi93aWR0aC9zZXQtY29udGFpbmVyLXdpZHRoL2NvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZWxSb290SWQgfSBmcm9tICcuL3JlYWQvY29tcG9zaXRpb24ucmVhZC1tb2RlbC1yb290LWlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnkgZXh0ZW5kcyBFdmVudFJlcG9zaXRvcnk8Q29tcG9zaXRpb25SZWFkTW9kZWxSb290SWQsIENvbXBvc2l0aW9uSWQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMpIHtcblx0XHRzdXBlcihkb21haW5FdmVudEJ1cyk7XG5cdH1cblxuXHRvbkNvbHVtbnNDaGFuZ2VkKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdElkKTogT2JzZXJ2YWJsZTxDb21wb3NpdGlvbkNvbHVtbnNTZXRFdmVudD4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub25FdmVudChjb21wb3NpdGlvbklkLCBDb21wb3NpdGlvbkNvbHVtbnNTZXRFdmVudCk7XG5cdH1cblxuXHRvbkNvbnRhaW5lcldpZHRoQ2hhbmdlZChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RJZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5vbkV2ZW50KGNvbXBvc2l0aW9uSWQsIENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChldmVudDogQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gZXZlbnQuZ2V0UGF5bG9hZCgpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIGZpbHRlcigod2lkdGg6IG51bWJlcikgPT4gISF3aWR0aClcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=