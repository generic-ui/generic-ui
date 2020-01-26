/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { CompositionColumnsSetEvent } from '../domain/command/column/set-columns/composition.columns-set.event';
import { CompositionContainerWidthSetEvent } from '../domain/command/width/set-container-width/composition-container-width-set.event';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZXZlbnQtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL3VpLWFwaS9jb21wb3NpdGlvbi5ldmVudC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFlLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR2pFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQ2hILE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLG1GQUFtRixDQUFDO0FBSXRJLE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFFbkMsWUFBNkIsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQzNELENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsYUFBNEI7UUFFNUMsT0FBTyxJQUFJLENBQUMsY0FBYzthQUNwQixPQUFPLENBQ1AsMEJBQTBCLENBQzFCO2FBQ0EsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEtBQUssYUFBYSxDQUFDLFFBQVEsRUFBRSxFQUFDLENBQ3pGLENBQUM7SUFDUixDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxhQUE0QjtRQUMxQyxPQUFPLElBQUksQ0FBQyxjQUFjO2FBQ3BCLE9BQU8sQ0FDUCwwQkFBMEIsQ0FDMUI7YUFDQSxJQUFJLENBQ0osTUFBTTs7OztRQUFDLENBQUMsS0FBa0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxhQUFhLENBQUMsUUFBUSxFQUFFLEVBQUMsQ0FDekYsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsdUJBQXVCLENBQUMsYUFBNEI7UUFDbkQsT0FBTyxJQUFJLENBQUMsY0FBYzthQUNwQixPQUFPLENBQ1AsaUNBQWlDLENBQ2pDO2FBQ0EsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUMsRUFDNUUsR0FBRzs7OztRQUFDLENBQUMsS0FBd0MsRUFBRSxFQUFFO1lBQ2hELE9BQU8sS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzNCLENBQUMsRUFBQyxFQUNGLE1BQU07Ozs7UUFBQyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBQyxDQUNsQyxDQUFDO0lBQ1IsQ0FBQzs7O1lBdkNELFVBQVU7Ozs7WUFQVyxjQUFjOzs7Ozs7O0lBVXZCLGlEQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudCwgRG9tYWluRXZlbnRCdXMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vZG9tYWluL2NvbXBvc2l0aW9uLWlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uc1NldEV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29sdW1uL3NldC1jb2x1bW5zL2NvbXBvc2l0aW9uLmNvbHVtbnMtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudCB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL3dpZHRoL3NldC1jb250YWluZXItd2lkdGgvY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLXNldC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uRXZlbnRTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cykge1xuXHR9XG5cblx0b25Db2x1bW5zQ2hhbmdlZChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogT2JzZXJ2YWJsZTxEb21haW5FdmVudD4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuZG9tYWluRXZlbnRCdXNcblx0XHRcdFx0ICAgLm9mRXZlbnQoXG5cdFx0XHRcdFx0ICAgQ29tcG9zaXRpb25Db2x1bW5zU2V0RXZlbnRcblx0XHRcdFx0ICAgKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGV2ZW50OiBEb21haW5FdmVudCkgPT4gZXZlbnQuYWdncmVnYXRlSWQudG9TdHJpbmcoKSA9PT0gY29tcG9zaXRpb25JZC50b1N0cmluZygpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25XaWR0aENoYW5nZWQoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuZG9tYWluRXZlbnRCdXNcblx0XHRcdFx0ICAgLm9mRXZlbnQoXG5cdFx0XHRcdFx0ICAgQ29tcG9zaXRpb25Db2x1bW5zU2V0RXZlbnRcblx0XHRcdFx0ICAgKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGV2ZW50OiBEb21haW5FdmVudCkgPT4gZXZlbnQuYWdncmVnYXRlSWQudG9TdHJpbmcoKSA9PT0gY29tcG9zaXRpb25JZC50b1N0cmluZygpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25Db250YWluZXJXaWR0aENoYW5nZWQoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuZG9tYWluRXZlbnRCdXNcblx0XHRcdFx0ICAgLm9mRXZlbnQoXG5cdFx0XHRcdFx0ICAgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEV2ZW50XG5cdFx0XHRcdCAgIClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChldmVudDogRG9tYWluRXZlbnQpID0+IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkuZXF1YWxzKGNvbXBvc2l0aW9uSWQpKSxcblx0XHRcdFx0XHQgICBtYXAoKGV2ZW50OiBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0RXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBldmVudC5nZXRQYXlsb2FkKCk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgZmlsdGVyKCh3aWR0aDogbnVtYmVyKSA9PiAhIXdpZHRoKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==