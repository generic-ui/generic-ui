/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CompositionAggregateEvents } from './composition.events';
import { CompositionResizeWidthSetEvent } from './width/resize-width/composition-resize-width-set.event';
import { CompositionColumnsSetEvent } from './column/set-columns/composition.columns-set.event';
import { CompositionContainerWidthSetEvent } from './width/set-container-width/composition-container-width-set.event';
import { CompositionWidthSetEvent } from './width/set-width/composition-width-set.event';
import { CompositionColumnSetEnabledEvent } from './column/set-enabled/composition.column-set-enabled.event';
import { CompositionColumnMovedLeftEvent } from './column/move/left/composition.column-moved-left.event';
import { CompositionColumnMovedRightEvent } from './column/move/right/composition.column-moved-right.event';
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
                return new CompositionColumnsSetEvent(aggregateEvent.getAggregateId());
            case CompositionAggregateEvents.CompositionContainerWidthSetAggregateEvent:
                /** @type {?} */
                const payload = ((/** @type {?} */ (aggregateEvent))).containerWidth;
                return new CompositionContainerWidthSetEvent(aggregateEvent.getAggregateId(), payload);
            case CompositionAggregateEvents.CompositionWidthSetAggregateEvent:
                return new CompositionWidthSetEvent(aggregateEvent.getAggregateId());
            case CompositionAggregateEvents.CompositionColumnSetEnabledAggregateEvent:
                return new CompositionColumnSetEnabledEvent(aggregateEvent.getAggregateId());
            case CompositionAggregateEvents.CompositionColumnMovedLeftAggregateEvent:
                return new CompositionColumnMovedLeftEvent(aggregateEvent.getAggregateId());
            case CompositionAggregateEvents.CompositionColumnMovedRightAggregateEvent:
                return new CompositionColumnMovedRightEvent(aggregateEvent.getAggregateId());
            default:
                break;
        }
    }
}
CompositionEventConverter.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tZXZlbnQuY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbW1hbmQvY29tcG9zaXRpb24tZXZlbnQuY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRWhHLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQ3RILE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQzdHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBSTVHLE1BQU0sT0FBTyx5QkFBeUI7Ozs7O0lBSXJDLE9BQU8sQ0FBQyxHQUEyQztRQUVsRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdkIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQy9CO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDOUI7SUFDRixDQUFDOzs7Ozs7SUFFTyxhQUFhLENBQUMsZUFBc0M7UUFDM0QsT0FBTyxlQUFlLENBQUMsR0FBRzs7OztRQUFDLENBQUMsS0FBcUIsRUFBRSxFQUFFO1lBQ3BELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLFlBQVksQ0FBQyxjQUE4QjtRQUVsRCxRQUFRLGNBQWMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNqQyxLQUFLLDBCQUEwQixDQUFDLHVDQUF1QztnQkFFdEUsT0FBTyxJQUFJLDhCQUE4QixDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1lBRTVFLEtBQUssMEJBQTBCLENBQUMsd0JBQXdCO2dCQUV2RCxPQUFPLElBQUksMEJBQTBCLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7WUFFeEUsS0FBSywwQkFBMEIsQ0FBQywwQ0FBMEM7O3NCQUVuRSxPQUFPLEdBQUcsQ0FBQyxtQkFBQSxjQUFjLEVBQThDLENBQUMsQ0FBQyxjQUFjO2dCQUU3RixPQUFPLElBQUksaUNBQWlDLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBRXhGLEtBQUssMEJBQTBCLENBQUMsaUNBQWlDO2dCQUVoRSxPQUFPLElBQUksd0JBQXdCLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7WUFFdEUsS0FBSywwQkFBMEIsQ0FBQyx5Q0FBeUM7Z0JBRXhFLE9BQU8sSUFBSSxnQ0FBZ0MsQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztZQUU5RSxLQUFLLDBCQUEwQixDQUFDLHdDQUF3QztnQkFFdkUsT0FBTyxJQUFJLCtCQUErQixDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1lBRTdFLEtBQUssMEJBQTBCLENBQUMseUNBQXlDO2dCQUV4RSxPQUFPLElBQUksZ0NBQWdDLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7WUFFOUU7Z0JBQ0MsTUFBTTtTQUNQO0lBRUYsQ0FBQzs7O1lBekRELFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlRXZlbnRzIH0gZnJvbSAnLi9jb21wb3NpdGlvbi5ldmVudHMnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZXNpemVXaWR0aFNldEV2ZW50IH0gZnJvbSAnLi93aWR0aC9yZXNpemUtd2lkdGgvY29tcG9zaXRpb24tcmVzaXplLXdpZHRoLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbnNTZXRFdmVudCB9IGZyb20gJy4vY29sdW1uL3NldC1jb2x1bW5zL2NvbXBvc2l0aW9uLmNvbHVtbnMtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vd2lkdGgvc2V0LWNvbnRhaW5lci13aWR0aC9jb21wb3NpdGlvbi1jb250YWluZXItd2lkdGgtc2V0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0RXZlbnQgfSBmcm9tICcuL3dpZHRoL3NldC1jb250YWluZXItd2lkdGgvY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldpZHRoU2V0RXZlbnQgfSBmcm9tICcuL3dpZHRoL3NldC13aWR0aC9jb21wb3NpdGlvbi13aWR0aC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5TZXRFbmFibGVkRXZlbnQgfSBmcm9tICcuL2NvbHVtbi9zZXQtZW5hYmxlZC9jb21wb3NpdGlvbi5jb2x1bW4tc2V0LWVuYWJsZWQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5Nb3ZlZExlZnRFdmVudCB9IGZyb20gJy4vY29sdW1uL21vdmUvbGVmdC9jb21wb3NpdGlvbi5jb2x1bW4tbW92ZWQtbGVmdC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkUmlnaHRFdmVudCB9IGZyb20gJy4vY29sdW1uL21vdmUvcmlnaHQvY29tcG9zaXRpb24uY29sdW1uLW1vdmVkLXJpZ2h0LmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25FdmVudENvbnZlcnRlciB7XG5cblx0Y29udmVydChldmVudDogQWdncmVnYXRlRXZlbnQpOiBEb21haW5FdmVudDtcblx0Y29udmVydChldmVudHM6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50Pik6IEFycmF5PERvbWFpbkV2ZW50Pjtcblx0Y29udmVydChhcmc6IEFnZ3JlZ2F0ZUV2ZW50IHwgQXJyYXk8QWdncmVnYXRlRXZlbnQ+KTogRG9tYWluRXZlbnQgfCBBcnJheTxEb21haW5FdmVudD4ge1xuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydEV2ZW50cyhhcmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0RXZlbnQoYXJnKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRFdmVudHMoYWdncmVnYXRlRXZlbnRzOiBBcnJheTxBZ2dyZWdhdGVFdmVudD4pOiBBcnJheTxEb21haW5FdmVudD4ge1xuXHRcdHJldHVybiBhZ2dyZWdhdGVFdmVudHMubWFwKChldmVudDogQWdncmVnYXRlRXZlbnQpID0+IHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRFdmVudChldmVudCk7XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRFdmVudChhZ2dyZWdhdGVFdmVudDogQWdncmVnYXRlRXZlbnQpOiBEb21haW5FdmVudCB7XG5cblx0XHRzd2l0Y2ggKGFnZ3JlZ2F0ZUV2ZW50LmdldFR5cGUoKSkge1xuXHRcdFx0Y2FzZSBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUV2ZW50cy5Db21wb3NpdGlvblJlc2l6ZVdpZHRoU2V0QWdncmVnYXRlRXZlbnQ6XG5cblx0XHRcdFx0cmV0dXJuIG5ldyBDb21wb3NpdGlvblJlc2l6ZVdpZHRoU2V0RXZlbnQoYWdncmVnYXRlRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cblx0XHRcdGNhc2UgQ29tcG9zaXRpb25BZ2dyZWdhdGVFdmVudHMuQ29sdW1uc1NldEFnZ3JlZ2F0ZUV2ZW50OlxuXG5cdFx0XHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25Db2x1bW5zU2V0RXZlbnQoYWdncmVnYXRlRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cblx0XHRcdGNhc2UgQ29tcG9zaXRpb25BZ2dyZWdhdGVFdmVudHMuQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50OlxuXG5cdFx0XHRcdGNvbnN0IHBheWxvYWQgPSAoYWdncmVnYXRlRXZlbnQgYXMgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50KS5jb250YWluZXJXaWR0aDtcblxuXHRcdFx0XHRyZXR1cm4gbmV3IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudChhZ2dyZWdhdGVFdmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBwYXlsb2FkKTtcblxuXHRcdFx0Y2FzZSBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUV2ZW50cy5Db21wb3NpdGlvbldpZHRoU2V0QWdncmVnYXRlRXZlbnQ6XG5cblx0XHRcdFx0cmV0dXJuIG5ldyBDb21wb3NpdGlvbldpZHRoU2V0RXZlbnQoYWdncmVnYXRlRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cblx0XHRcdGNhc2UgQ29tcG9zaXRpb25BZ2dyZWdhdGVFdmVudHMuQ29tcG9zaXRpb25Db2x1bW5TZXRFbmFibGVkQWdncmVnYXRlRXZlbnQ6XG5cblx0XHRcdFx0cmV0dXJuIG5ldyBDb21wb3NpdGlvbkNvbHVtblNldEVuYWJsZWRFdmVudChhZ2dyZWdhdGVFdmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblxuXHRcdFx0Y2FzZSBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUV2ZW50cy5Db21wb3NpdGlvbkNvbHVtbk1vdmVkTGVmdEFnZ3JlZ2F0ZUV2ZW50OlxuXG5cdFx0XHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25Db2x1bW5Nb3ZlZExlZnRFdmVudChhZ2dyZWdhdGVFdmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblxuXHRcdFx0Y2FzZSBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUV2ZW50cy5Db21wb3NpdGlvbkNvbHVtbk1vdmVkUmlnaHRBZ2dyZWdhdGVFdmVudDpcblxuXHRcdFx0XHRyZXR1cm4gbmV3IENvbXBvc2l0aW9uQ29sdW1uTW92ZWRSaWdodEV2ZW50KGFnZ3JlZ2F0ZUV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0fVxuXG5cbn1cbiJdfQ==