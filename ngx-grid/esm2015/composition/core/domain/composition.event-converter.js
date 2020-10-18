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
import { CompositionGroupsSetEvent } from './group/set-groups/composition.groups-set.event';
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
            case CompositionAggregateEvents.GroupsSetAggregateEvent:
                return new CompositionGroupsSetEvent(aggregateEvent.getAggregateId());
            default:
                break;
        }
    }
}
CompositionEventConverter.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZXZlbnQtY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb21wb3NpdGlvbi5ldmVudC1jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDekcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFaEcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDdEgsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDekYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDN0csT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDekcsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sMERBQTBELENBQUM7QUFFNUcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFJNUYsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7SUFJckMsT0FBTyxDQUFDLEdBQXlFO1FBRWhGLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN2QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDL0I7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM5QjtJQUNGLENBQUM7Ozs7OztJQUVPLGFBQWEsQ0FBQyxlQUFxRDtRQUMxRSxPQUFPLGVBQWUsQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxLQUFvQyxFQUFFLEVBQUU7WUFDbkUsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sWUFBWSxDQUFDLGNBQTZDO1FBRWpFLFFBQVEsY0FBYyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ2pDLEtBQUssMEJBQTBCLENBQUMsdUNBQXVDO2dCQUV0RSxPQUFPLElBQUksOEJBQThCLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7WUFFNUUsS0FBSywwQkFBMEIsQ0FBQyx3QkFBd0I7Z0JBRXZELE9BQU8sSUFBSSwwQkFBMEIsQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztZQUV4RSxLQUFLLDBCQUEwQixDQUFDLDBDQUEwQzs7c0JBRW5FLE9BQU8sR0FBRyxDQUFDLG1CQUFBLGNBQWMsRUFBOEMsQ0FBQyxDQUFDLGNBQWM7Z0JBRTdGLE9BQU8sSUFBSSxpQ0FBaUMsQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFeEYsS0FBSywwQkFBMEIsQ0FBQyxpQ0FBaUM7Z0JBRWhFLE9BQU8sSUFBSSx3QkFBd0IsQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztZQUV0RSxLQUFLLDBCQUEwQixDQUFDLHlDQUF5QztnQkFFeEUsT0FBTyxJQUFJLGdDQUFnQyxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1lBRTlFLEtBQUssMEJBQTBCLENBQUMsd0NBQXdDO2dCQUV2RSxPQUFPLElBQUksK0JBQStCLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7WUFFN0UsS0FBSywwQkFBMEIsQ0FBQyx5Q0FBeUM7Z0JBRXhFLE9BQU8sSUFBSSxnQ0FBZ0MsQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztZQUU5RSxLQUFLLDBCQUEwQixDQUFDLHVCQUF1QjtnQkFFdEQsT0FBTyxJQUFJLHlCQUF5QixDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1lBRXZFO2dCQUNDLE1BQU07U0FDUDtJQUVGLENBQUM7OztZQTdERCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUV2ZW50cyB9IGZyb20gJy4vY29tcG9zaXRpb24uZXZlbnRzJztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRFdmVudCB9IGZyb20gJy4vd2lkdGgvcmVzaXplLXdpZHRoL2NvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5zU2V0RXZlbnQgfSBmcm9tICcuL2NvbHVtbi9zZXQtY29sdW1ucy9jb21wb3NpdGlvbi5jb2x1bW5zLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL3dpZHRoL3NldC1jb250YWluZXItd2lkdGgvY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEV2ZW50IH0gZnJvbSAnLi93aWR0aC9zZXQtY29udGFpbmVyLXdpZHRoL2NvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XaWR0aFNldEV2ZW50IH0gZnJvbSAnLi93aWR0aC9zZXQtd2lkdGgvY29tcG9zaXRpb24td2lkdGgtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uU2V0RW5hYmxlZEV2ZW50IH0gZnJvbSAnLi9jb2x1bW4vc2V0LWVuYWJsZWQvY29tcG9zaXRpb24uY29sdW1uLXNldC1lbmFibGVkLmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uTW92ZWRMZWZ0RXZlbnQgfSBmcm9tICcuL2NvbHVtbi9tb3ZlL2xlZnQvY29tcG9zaXRpb24uY29sdW1uLW1vdmVkLWxlZnQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5Nb3ZlZFJpZ2h0RXZlbnQgfSBmcm9tICcuL2NvbHVtbi9tb3ZlL3JpZ2h0L2NvbXBvc2l0aW9uLmNvbHVtbi1tb3ZlZC1yaWdodC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vYXBpL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uR3JvdXBzU2V0RXZlbnQgfSBmcm9tICcuL2dyb3VwL3NldC1ncm91cHMvY29tcG9zaXRpb24uZ3JvdXBzLXNldC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQoZXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50PENvbXBvc2l0aW9uSWQ+KTogRG9tYWluRXZlbnQ8Q29tcG9zaXRpb25JZD47XG5cdGNvbnZlcnQoZXZlbnRzOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxDb21wb3NpdGlvbklkPj4pOiBBcnJheTxEb21haW5FdmVudDxDb21wb3NpdGlvbklkPj47XG5cdGNvbnZlcnQoYXJnOiBBZ2dyZWdhdGVFdmVudDxDb21wb3NpdGlvbklkPiB8IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PENvbXBvc2l0aW9uSWQ+Pik6IERvbWFpbkV2ZW50PENvbXBvc2l0aW9uSWQ+IHwgQXJyYXk8RG9tYWluRXZlbnQ8Q29tcG9zaXRpb25JZD4+IHtcblxuXHRcdGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRFdmVudHMoYXJnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydEV2ZW50KGFyZyk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0RXZlbnRzKGFnZ3JlZ2F0ZUV2ZW50czogQXJyYXk8QWdncmVnYXRlRXZlbnQ8Q29tcG9zaXRpb25JZD4+KTogQXJyYXk8RG9tYWluRXZlbnQ8Q29tcG9zaXRpb25JZD4+IHtcblx0XHRyZXR1cm4gYWdncmVnYXRlRXZlbnRzLm1hcCgoZXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50PENvbXBvc2l0aW9uSWQ+KSA9PiB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0RXZlbnQoZXZlbnQpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0RXZlbnQoYWdncmVnYXRlRXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50PENvbXBvc2l0aW9uSWQ+KTogRG9tYWluRXZlbnQ8Q29tcG9zaXRpb25JZD4ge1xuXG5cdFx0c3dpdGNoIChhZ2dyZWdhdGVFdmVudC5nZXRUeXBlKCkpIHtcblx0XHRcdGNhc2UgQ29tcG9zaXRpb25BZ2dyZWdhdGVFdmVudHMuQ29tcG9zaXRpb25SZXNpemVXaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50OlxuXG5cdFx0XHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25SZXNpemVXaWR0aFNldEV2ZW50KGFnZ3JlZ2F0ZUV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXG5cdFx0XHRjYXNlIENvbXBvc2l0aW9uQWdncmVnYXRlRXZlbnRzLkNvbHVtbnNTZXRBZ2dyZWdhdGVFdmVudDpcblxuXHRcdFx0XHRyZXR1cm4gbmV3IENvbXBvc2l0aW9uQ29sdW1uc1NldEV2ZW50KGFnZ3JlZ2F0ZUV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXG5cdFx0XHRjYXNlIENvbXBvc2l0aW9uQWdncmVnYXRlRXZlbnRzLkNvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRBZ2dyZWdhdGVFdmVudDpcblxuXHRcdFx0XHRjb25zdCBwYXlsb2FkID0gKGFnZ3JlZ2F0ZUV2ZW50IGFzIENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCkuY29udGFpbmVyV2lkdGg7XG5cblx0XHRcdFx0cmV0dXJuIG5ldyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0RXZlbnQoYWdncmVnYXRlRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgcGF5bG9hZCk7XG5cblx0XHRcdGNhc2UgQ29tcG9zaXRpb25BZ2dyZWdhdGVFdmVudHMuQ29tcG9zaXRpb25XaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50OlxuXG5cdFx0XHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25XaWR0aFNldEV2ZW50KGFnZ3JlZ2F0ZUV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXG5cdFx0XHRjYXNlIENvbXBvc2l0aW9uQWdncmVnYXRlRXZlbnRzLkNvbXBvc2l0aW9uQ29sdW1uU2V0RW5hYmxlZEFnZ3JlZ2F0ZUV2ZW50OlxuXG5cdFx0XHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25Db2x1bW5TZXRFbmFibGVkRXZlbnQoYWdncmVnYXRlRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cblx0XHRcdGNhc2UgQ29tcG9zaXRpb25BZ2dyZWdhdGVFdmVudHMuQ29tcG9zaXRpb25Db2x1bW5Nb3ZlZExlZnRBZ2dyZWdhdGVFdmVudDpcblxuXHRcdFx0XHRyZXR1cm4gbmV3IENvbXBvc2l0aW9uQ29sdW1uTW92ZWRMZWZ0RXZlbnQoYWdncmVnYXRlRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cblx0XHRcdGNhc2UgQ29tcG9zaXRpb25BZ2dyZWdhdGVFdmVudHMuQ29tcG9zaXRpb25Db2x1bW5Nb3ZlZFJpZ2h0QWdncmVnYXRlRXZlbnQ6XG5cblx0XHRcdFx0cmV0dXJuIG5ldyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkUmlnaHRFdmVudChhZ2dyZWdhdGVFdmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblxuXHRcdFx0Y2FzZSBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUV2ZW50cy5Hcm91cHNTZXRBZ2dyZWdhdGVFdmVudDpcblxuXHRcdFx0XHRyZXR1cm4gbmV3IENvbXBvc2l0aW9uR3JvdXBzU2V0RXZlbnQoYWdncmVnYXRlRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHR9XG5cblxufVxuIl19