/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { CompositionColumnsSetEvent } from '../domain/column/set-columns/composition.columns-set.event';
import { CompositionContainerWidthSetEvent } from '../domain/width/set-container-width/composition-container-width-set.event';
export class CompositionEventRepository {
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
        (event) => event.getAggregateId().toString() === compositionId.toString())));
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
CompositionEventRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionEventRepository.ctorParameters = () => [
    { type: DomainEventBus }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionEventRepository.prototype.domainEventBus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZXZlbnQtcmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvY29tcG9zaXRpb24uZXZlbnQtcmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBZSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdqRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN4RyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSwyRUFBMkUsQ0FBQztBQUk5SCxNQUFNLE9BQU8sMEJBQTBCOzs7O0lBRXRDLFlBQTZCLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUMzRCxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLGFBQTRCO1FBRTVDLE9BQU8sSUFBSSxDQUFDLGNBQWM7YUFDcEIsT0FBTyxDQUNQLDBCQUEwQixDQUMxQjthQUNBLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsQ0FBQyxLQUFpQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssYUFBYSxDQUFDLFFBQVEsRUFBRSxFQUFDLENBQzdHLENBQUM7SUFDUixDQUFDOzs7OztJQUVELHVCQUF1QixDQUFDLGFBQTRCO1FBQ25ELE9BQU8sSUFBSSxDQUFDLGNBQWM7YUFDcEIsT0FBTyxDQUNQLGlDQUFpQyxDQUNqQzthQUNBLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsQ0FBQyxLQUFpQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFDLEVBQzNGLEdBQUc7Ozs7UUFBQyxDQUFDLEtBQXdDLEVBQUUsRUFBRTtZQUNoRCxPQUFPLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMzQixDQUFDLEVBQUMsRUFDRixNQUFNOzs7O1FBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUMsQ0FDbEMsQ0FBQztJQUNSLENBQUM7OztZQTdCRCxVQUFVOzs7O1lBUFcsY0FBYzs7Ozs7OztJQVV2QixvREFBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnQsIERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uL2RvbWFpbi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbnNTZXRFdmVudCB9IGZyb20gJy4uL2RvbWFpbi9jb2x1bW4vc2V0LWNvbHVtbnMvY29tcG9zaXRpb24uY29sdW1ucy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL3dpZHRoL3NldC1jb250YWluZXItd2lkdGgvY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLXNldC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cykge1xuXHR9XG5cblx0b25Db2x1bW5zQ2hhbmdlZChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogT2JzZXJ2YWJsZTxDb21wb3NpdGlvbkNvbHVtbnNTZXRFdmVudD4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuZG9tYWluRXZlbnRCdXNcblx0XHRcdFx0ICAgLm9mRXZlbnQoXG5cdFx0XHRcdFx0ICAgQ29tcG9zaXRpb25Db2x1bW5zU2V0RXZlbnRcblx0XHRcdFx0ICAgKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGV2ZW50OiBEb21haW5FdmVudDxDb21wb3NpdGlvbklkPikgPT4gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKS50b1N0cmluZygpID09PSBjb21wb3NpdGlvbklkLnRvU3RyaW5nKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbkNvbnRhaW5lcldpZHRoQ2hhbmdlZChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5kb21haW5FdmVudEJ1c1xuXHRcdFx0XHQgICAub2ZFdmVudChcblx0XHRcdFx0XHQgICBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0RXZlbnRcblx0XHRcdFx0ICAgKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGV2ZW50OiBEb21haW5FdmVudDxDb21wb3NpdGlvbklkPikgPT4gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKS5lcXVhbHMoY29tcG9zaXRpb25JZCkpLFxuXHRcdFx0XHRcdCAgIG1hcCgoZXZlbnQ6IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIGV2ZW50LmdldFBheWxvYWQoKTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBmaWx0ZXIoKHdpZHRoOiBudW1iZXIpID0+ICEhd2lkdGgpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxufVxuIl19