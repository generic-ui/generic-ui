/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CompositionAggregateEvents } from './composition.events';
import { CompositionResizeWidthSetEvent } from './width/resize-width/composition-resize-width-set.event';
import { ColumnsSetEvent } from './column/set-columns/columns-set.event';
import { CompositionContainerWidthSetEvent } from './width/set-container-width/composition-container-width-set.event';
import { CompositionWidthSetEvent } from './width/set-width/composition-width-set.event';
export class CompositionEventConverter {
    /**
     * @param {?} arg
     * @return {?}
     */
    convert(arg) {
        if (Array.isArray(arg)) {
            return this.convertEvents(arg);
        }
        else {
            return this.convertEvent(arg);
        }
    }
    /**
     * @private
     * @param {?} aggregateEvents
     * @return {?}
     */
    convertEvents(aggregateEvents) {
        return aggregateEvents.map((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return this.convertEvent(event);
        }));
    }
    /**
     * @private
     * @param {?} aggregateEvent
     * @return {?}
     */
    convertEvent(aggregateEvent) {
        switch (aggregateEvent.getType()) {
            case CompositionAggregateEvents.CompositionResizeWidthSetAggregateEvent:
                return new CompositionResizeWidthSetEvent(aggregateEvent.getAggregateId());
            case CompositionAggregateEvents.ColumnsSetAggregateEvent:
                return new ColumnsSetEvent(aggregateEvent.getAggregateId());
            case CompositionAggregateEvents.CompositionContainerWidthSetAggregateEvent:
                /** @type {?} */
                const payload = ((/** @type {?} */ (aggregateEvent))).containerWidth;
                return new CompositionContainerWidthSetEvent(aggregateEvent.getAggregateId(), payload);
            case CompositionAggregateEvents.CompositionWidthSetAggregateEvent:
                return new CompositionWidthSetEvent(aggregateEvent.getAggregateId());
            default:
                break;
        }
    }
}
CompositionEventConverter.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tZXZlbnQuY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbXBvc2l0aW9uLWV2ZW50LmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFekUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDdEgsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFJekYsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7SUFJckMsT0FBTyxDQUFDLEdBQTJDO1FBRWxELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN2QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDL0I7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM5QjtJQUNGLENBQUM7Ozs7OztJQUVPLGFBQWEsQ0FBQyxlQUFzQztRQUMzRCxPQUFPLGVBQWUsQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxLQUFxQixFQUFFLEVBQUU7WUFDcEQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sWUFBWSxDQUFDLGNBQThCO1FBRWxELFFBQVEsY0FBYyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ2pDLEtBQUssMEJBQTBCLENBQUMsdUNBQXVDO2dCQUV0RSxPQUFPLElBQUksOEJBQThCLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7WUFFNUUsS0FBSywwQkFBMEIsQ0FBQyx3QkFBd0I7Z0JBRXZELE9BQU8sSUFBSSxlQUFlLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7WUFFN0QsS0FBSywwQkFBMEIsQ0FBQywwQ0FBMEM7O3NCQUVuRSxPQUFPLEdBQUcsQ0FBQyxtQkFBQSxjQUFjLEVBQThDLENBQUMsQ0FBQyxjQUFjO2dCQUU3RixPQUFPLElBQUksaUNBQWlDLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBRXhGLEtBQUssMEJBQTBCLENBQUMsaUNBQWlDO2dCQUVoRSxPQUFPLElBQUksd0JBQXdCLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7WUFFdEU7Z0JBQ0MsTUFBTTtTQUNQO0lBRUYsQ0FBQzs7O1lBN0NELFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlRXZlbnRzIH0gZnJvbSAnLi9jb21wb3NpdGlvbi5ldmVudHMnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZXNpemVXaWR0aFNldEV2ZW50IH0gZnJvbSAnLi93aWR0aC9yZXNpemUtd2lkdGgvY29tcG9zaXRpb24tcmVzaXplLXdpZHRoLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb2x1bW5zU2V0RXZlbnQgfSBmcm9tICcuL2NvbHVtbi9zZXQtY29sdW1ucy9jb2x1bW5zLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL3dpZHRoL3NldC1jb250YWluZXItd2lkdGgvY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEV2ZW50IH0gZnJvbSAnLi93aWR0aC9zZXQtY29udGFpbmVyLXdpZHRoL2NvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XaWR0aFNldEV2ZW50IH0gZnJvbSAnLi93aWR0aC9zZXQtd2lkdGgvY29tcG9zaXRpb24td2lkdGgtc2V0LmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25FdmVudENvbnZlcnRlciB7XG5cblx0Y29udmVydChldmVudDogQWdncmVnYXRlRXZlbnQpOiBEb21haW5FdmVudDtcblx0Y29udmVydChldmVudHM6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50Pik6IEFycmF5PERvbWFpbkV2ZW50Pjtcblx0Y29udmVydChhcmc6IEFnZ3JlZ2F0ZUV2ZW50IHwgQXJyYXk8QWdncmVnYXRlRXZlbnQ+KTogRG9tYWluRXZlbnQgfCBBcnJheTxEb21haW5FdmVudD4ge1xuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydEV2ZW50cyhhcmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0RXZlbnQoYXJnKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRFdmVudHMoYWdncmVnYXRlRXZlbnRzOiBBcnJheTxBZ2dyZWdhdGVFdmVudD4pOiBBcnJheTxEb21haW5FdmVudD4ge1xuXHRcdHJldHVybiBhZ2dyZWdhdGVFdmVudHMubWFwKChldmVudDogQWdncmVnYXRlRXZlbnQpID0+IHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRFdmVudChldmVudCk7XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRFdmVudChhZ2dyZWdhdGVFdmVudDogQWdncmVnYXRlRXZlbnQpOiBEb21haW5FdmVudCB7XG5cblx0XHRzd2l0Y2ggKGFnZ3JlZ2F0ZUV2ZW50LmdldFR5cGUoKSkge1xuXHRcdFx0Y2FzZSBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUV2ZW50cy5Db21wb3NpdGlvblJlc2l6ZVdpZHRoU2V0QWdncmVnYXRlRXZlbnQ6XG5cblx0XHRcdFx0cmV0dXJuIG5ldyBDb21wb3NpdGlvblJlc2l6ZVdpZHRoU2V0RXZlbnQoYWdncmVnYXRlRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cblx0XHRcdGNhc2UgQ29tcG9zaXRpb25BZ2dyZWdhdGVFdmVudHMuQ29sdW1uc1NldEFnZ3JlZ2F0ZUV2ZW50OlxuXG5cdFx0XHRcdHJldHVybiBuZXcgQ29sdW1uc1NldEV2ZW50KGFnZ3JlZ2F0ZUV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXG5cdFx0XHRjYXNlIENvbXBvc2l0aW9uQWdncmVnYXRlRXZlbnRzLkNvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRBZ2dyZWdhdGVFdmVudDpcblxuXHRcdFx0XHRjb25zdCBwYXlsb2FkID0gKGFnZ3JlZ2F0ZUV2ZW50IGFzIENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCkuY29udGFpbmVyV2lkdGg7XG5cblx0XHRcdFx0cmV0dXJuIG5ldyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0RXZlbnQoYWdncmVnYXRlRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgcGF5bG9hZCk7XG5cblx0XHRcdGNhc2UgQ29tcG9zaXRpb25BZ2dyZWdhdGVFdmVudHMuQ29tcG9zaXRpb25XaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50OlxuXG5cdFx0XHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25XaWR0aFNldEV2ZW50KGFnZ3JlZ2F0ZUV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0fVxuXG5cbn1cbiJdfQ==