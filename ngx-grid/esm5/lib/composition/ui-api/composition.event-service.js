/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { CompositionColumnsSetEvent } from '../domain/command/column/set-columns/composition.columns-set.event';
import { CompositionContainerWidthSetEvent } from '../domain/command/width/set-container-width/composition-container-width-set.event';
var CompositionEventService = /** @class */ (function () {
    function CompositionEventService(domainEventBus) {
        this.domainEventBus = domainEventBus;
    }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    CompositionEventService.prototype.onColumnsChanged = /**
     * @param {?} compositionId
     * @return {?}
     */
    function (compositionId) {
        return this.domainEventBus
            .ofEvent(CompositionColumnsSetEvent)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getAggregateId().toString() === compositionId.toString(); })));
    };
    // onWidthChanged(compositionId: CompositionId): Observable<number> {
    // 	return this.domainEventBus
    // 			   .ofEvent(
    // 				   CompositionColumnsSetEvent
    // 			   )
    // 			   .pipe(
    // 				   filter((event: DomainEvent) => event.getAggregateId().toString() === compositionId.toString())
    // 			   );
    // }
    // onWidthChanged(compositionId: CompositionId): Observable<number> {
    // 	return this.domainEventBus
    // 			   .ofEvent(
    // 				   CompositionColumnsSetEvent
    // 			   )
    // 			   .pipe(
    // 				   filter((event: DomainEvent) => event.getAggregateId().toString() === compositionId.toString())
    // 			   );
    // }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    CompositionEventService.prototype.onContainerWidthChanged = 
    // onWidthChanged(compositionId: CompositionId): Observable<number> {
    // 	return this.domainEventBus
    // 			   .ofEvent(
    // 				   CompositionColumnsSetEvent
    // 			   )
    // 			   .pipe(
    // 				   filter((event: DomainEvent) => event.getAggregateId().toString() === compositionId.toString())
    // 			   );
    // }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    function (compositionId) {
        return this.domainEventBus
            .ofEvent(CompositionContainerWidthSetEvent)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getAggregateId().equals(compositionId); })), map((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return event.getPayload();
        })), filter((/**
         * @param {?} width
         * @return {?}
         */
        function (width) { return !!width; })));
    };
    CompositionEventService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionEventService.ctorParameters = function () { return [
        { type: DomainEventBus }
    ]; };
    return CompositionEventService;
}());
export { CompositionEventService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionEventService.prototype.domainEventBus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZXZlbnQtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL3VpLWFwaS9jb21wb3NpdGlvbi5ldmVudC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFlLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR2pFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQ2hILE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLG1GQUFtRixDQUFDO0FBR3RJO0lBR0MsaUNBQTZCLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUMzRCxDQUFDOzs7OztJQUVELGtEQUFnQjs7OztJQUFoQixVQUFpQixhQUE0QjtRQUU1QyxPQUFPLElBQUksQ0FBQyxjQUFjO2FBQ3BCLE9BQU8sQ0FDUCwwQkFBMEIsQ0FDMUI7YUFDQSxJQUFJLENBQ0osTUFBTTs7OztRQUFDLFVBQUMsS0FBa0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxhQUFhLENBQUMsUUFBUSxFQUFFLEVBQTlELENBQThELEVBQUMsQ0FDOUYsQ0FBQztJQUNSLENBQUM7SUFFRCxxRUFBcUU7SUFDckUsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsVUFBVTtJQUNWLGVBQWU7SUFDZix3R0FBd0c7SUFDeEcsV0FBVztJQUNYLElBQUk7Ozs7Ozs7Ozs7Ozs7O0lBRUoseURBQXVCOzs7Ozs7Ozs7Ozs7OztJQUF2QixVQUF3QixhQUE0QjtRQUNuRCxPQUFPLElBQUksQ0FBQyxjQUFjO2FBQ3BCLE9BQU8sQ0FDUCxpQ0FBaUMsQ0FDakM7YUFDQSxJQUFJLENBQ0osTUFBTTs7OztRQUFDLFVBQUMsS0FBa0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQTVDLENBQTRDLEVBQUMsRUFDNUUsR0FBRzs7OztRQUFDLFVBQUMsS0FBd0M7WUFDNUMsT0FBTyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxFQUFDLEVBQ0YsTUFBTTs7OztRQUFDLFVBQUMsS0FBYSxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUssRUFBUCxDQUFPLEVBQUMsQ0FDbEMsQ0FBQztJQUNSLENBQUM7O2dCQXZDRCxVQUFVOzs7O2dCQVBXLGNBQWM7O0lBZ0RwQyw4QkFBQztDQUFBLEFBekNELElBeUNDO1NBeENZLHVCQUF1Qjs7Ozs7O0lBRXZCLGlEQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudCwgRG9tYWluRXZlbnRCdXMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vZG9tYWluL2NvbXBvc2l0aW9uLWlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uc1NldEV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY29sdW1uL3NldC1jb2x1bW5zL2NvbXBvc2l0aW9uLmNvbHVtbnMtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudCB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL3dpZHRoL3NldC1jb250YWluZXItd2lkdGgvY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLXNldC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uRXZlbnRTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cykge1xuXHR9XG5cblx0b25Db2x1bW5zQ2hhbmdlZChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogT2JzZXJ2YWJsZTxEb21haW5FdmVudD4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuZG9tYWluRXZlbnRCdXNcblx0XHRcdFx0ICAgLm9mRXZlbnQoXG5cdFx0XHRcdFx0ICAgQ29tcG9zaXRpb25Db2x1bW5zU2V0RXZlbnRcblx0XHRcdFx0ICAgKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGV2ZW50OiBEb21haW5FdmVudCkgPT4gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKS50b1N0cmluZygpID09PSBjb21wb3NpdGlvbklkLnRvU3RyaW5nKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHQvLyBvbldpZHRoQ2hhbmdlZChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0Ly8gXHRyZXR1cm4gdGhpcy5kb21haW5FdmVudEJ1c1xuXHQvLyBcdFx0XHQgICAub2ZFdmVudChcblx0Ly8gXHRcdFx0XHQgICBDb21wb3NpdGlvbkNvbHVtbnNTZXRFdmVudFxuXHQvLyBcdFx0XHQgICApXG5cdC8vIFx0XHRcdCAgIC5waXBlKFxuXHQvLyBcdFx0XHRcdCAgIGZpbHRlcigoZXZlbnQ6IERvbWFpbkV2ZW50KSA9PiBldmVudC5nZXRBZ2dyZWdhdGVJZCgpLnRvU3RyaW5nKCkgPT09IGNvbXBvc2l0aW9uSWQudG9TdHJpbmcoKSlcblx0Ly8gXHRcdFx0ICAgKTtcblx0Ly8gfVxuXG5cdG9uQ29udGFpbmVyV2lkdGhDaGFuZ2VkKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLmRvbWFpbkV2ZW50QnVzXG5cdFx0XHRcdCAgIC5vZkV2ZW50KFxuXHRcdFx0XHRcdCAgIENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudFxuXHRcdFx0XHQgICApXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoZXZlbnQ6IERvbWFpbkV2ZW50KSA9PiBldmVudC5nZXRBZ2dyZWdhdGVJZCgpLmVxdWFscyhjb21wb3NpdGlvbklkKSksXG5cdFx0XHRcdFx0ICAgbWFwKChldmVudDogQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gZXZlbnQuZ2V0UGF5bG9hZCgpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIGZpbHRlcigod2lkdGg6IG51bWJlcikgPT4gISF3aWR0aClcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=