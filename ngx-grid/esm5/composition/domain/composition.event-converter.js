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
var CompositionEventConverter = /** @class */ (function () {
    function CompositionEventConverter() {
    }
    /**
     * @param {?} arg
     * @return {?}
     */
    CompositionEventConverter.prototype.convert = /**
     * @param {?} arg
     * @return {?}
     */
    function (arg) {
        if (Array.isArray(arg)) {
            return this.convertEvents(arg);
        }
        else {
            return this.convertEvent(arg);
        }
    };
    /**
     * @private
     * @param {?} aggregateEvents
     * @return {?}
     */
    CompositionEventConverter.prototype.convertEvents = /**
     * @private
     * @param {?} aggregateEvents
     * @return {?}
     */
    function (aggregateEvents) {
        var _this = this;
        return aggregateEvents.map((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return _this.convertEvent(event);
        }));
    };
    /**
     * @private
     * @param {?} aggregateEvent
     * @return {?}
     */
    CompositionEventConverter.prototype.convertEvent = /**
     * @private
     * @param {?} aggregateEvent
     * @return {?}
     */
    function (aggregateEvent) {
        switch (aggregateEvent.getType()) {
            case CompositionAggregateEvents.CompositionResizeWidthSetAggregateEvent:
                return new CompositionResizeWidthSetEvent(aggregateEvent.getAggregateId());
            case CompositionAggregateEvents.ColumnsSetAggregateEvent:
                return new CompositionColumnsSetEvent(aggregateEvent.getAggregateId());
            case CompositionAggregateEvents.CompositionContainerWidthSetAggregateEvent:
                /** @type {?} */
                var payload = ((/** @type {?} */ (aggregateEvent))).containerWidth;
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
    };
    CompositionEventConverter.decorators = [
        { type: Injectable }
    ];
    return CompositionEventConverter;
}());
export { CompositionEventConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZXZlbnQtY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9kb21haW4vY29tcG9zaXRpb24uZXZlbnQtY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRWhHLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQ3RILE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQzdHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBSTVHO0lBQUE7SUE0REEsQ0FBQzs7Ozs7SUF2REEsMkNBQU87Ozs7SUFBUCxVQUFRLEdBQXlFO1FBRWhGLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN2QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDL0I7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM5QjtJQUNGLENBQUM7Ozs7OztJQUVPLGlEQUFhOzs7OztJQUFyQixVQUFzQixlQUFxRDtRQUEzRSxpQkFJQztRQUhBLE9BQU8sZUFBZSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLEtBQW9DO1lBQy9ELE9BQU8sS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLGdEQUFZOzs7OztJQUFwQixVQUFxQixjQUE2QztRQUVqRSxRQUFRLGNBQWMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNqQyxLQUFLLDBCQUEwQixDQUFDLHVDQUF1QztnQkFFdEUsT0FBTyxJQUFJLDhCQUE4QixDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1lBRTVFLEtBQUssMEJBQTBCLENBQUMsd0JBQXdCO2dCQUV2RCxPQUFPLElBQUksMEJBQTBCLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7WUFFeEUsS0FBSywwQkFBMEIsQ0FBQywwQ0FBMEM7O29CQUVuRSxPQUFPLEdBQUcsQ0FBQyxtQkFBQSxjQUFjLEVBQThDLENBQUMsQ0FBQyxjQUFjO2dCQUU3RixPQUFPLElBQUksaUNBQWlDLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBRXhGLEtBQUssMEJBQTBCLENBQUMsaUNBQWlDO2dCQUVoRSxPQUFPLElBQUksd0JBQXdCLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7WUFFdEUsS0FBSywwQkFBMEIsQ0FBQyx5Q0FBeUM7Z0JBRXhFLE9BQU8sSUFBSSxnQ0FBZ0MsQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztZQUU5RSxLQUFLLDBCQUEwQixDQUFDLHdDQUF3QztnQkFFdkUsT0FBTyxJQUFJLCtCQUErQixDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1lBRTdFLEtBQUssMEJBQTBCLENBQUMseUNBQXlDO2dCQUV4RSxPQUFPLElBQUksZ0NBQWdDLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7WUFFOUU7Z0JBQ0MsTUFBTTtTQUNQO0lBRUYsQ0FBQzs7Z0JBekRELFVBQVU7O0lBNERYLGdDQUFDO0NBQUEsQUE1REQsSUE0REM7U0EzRFkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUV2ZW50cyB9IGZyb20gJy4vY29tcG9zaXRpb24uZXZlbnRzJztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRFdmVudCB9IGZyb20gJy4vd2lkdGgvcmVzaXplLXdpZHRoL2NvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5zU2V0RXZlbnQgfSBmcm9tICcuL2NvbHVtbi9zZXQtY29sdW1ucy9jb21wb3NpdGlvbi5jb2x1bW5zLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL3dpZHRoL3NldC1jb250YWluZXItd2lkdGgvY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEV2ZW50IH0gZnJvbSAnLi93aWR0aC9zZXQtY29udGFpbmVyLXdpZHRoL2NvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XaWR0aFNldEV2ZW50IH0gZnJvbSAnLi93aWR0aC9zZXQtd2lkdGgvY29tcG9zaXRpb24td2lkdGgtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uU2V0RW5hYmxlZEV2ZW50IH0gZnJvbSAnLi9jb2x1bW4vc2V0LWVuYWJsZWQvY29tcG9zaXRpb24uY29sdW1uLXNldC1lbmFibGVkLmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uTW92ZWRMZWZ0RXZlbnQgfSBmcm9tICcuL2NvbHVtbi9tb3ZlL2xlZnQvY29tcG9zaXRpb24uY29sdW1uLW1vdmVkLWxlZnQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5Nb3ZlZFJpZ2h0RXZlbnQgfSBmcm9tICcuL2NvbHVtbi9tb3ZlL3JpZ2h0L2NvbXBvc2l0aW9uLmNvbHVtbi1tb3ZlZC1yaWdodC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi9jb21wb3NpdGlvbi5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQoZXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50PENvbXBvc2l0aW9uSWQ+KTogRG9tYWluRXZlbnQ8Q29tcG9zaXRpb25JZD47XG5cdGNvbnZlcnQoZXZlbnRzOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxDb21wb3NpdGlvbklkPj4pOiBBcnJheTxEb21haW5FdmVudDxDb21wb3NpdGlvbklkPj47XG5cdGNvbnZlcnQoYXJnOiBBZ2dyZWdhdGVFdmVudDxDb21wb3NpdGlvbklkPiB8IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PENvbXBvc2l0aW9uSWQ+Pik6IERvbWFpbkV2ZW50PENvbXBvc2l0aW9uSWQ+IHwgQXJyYXk8RG9tYWluRXZlbnQ8Q29tcG9zaXRpb25JZD4+IHtcblxuXHRcdGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRFdmVudHMoYXJnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydEV2ZW50KGFyZyk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0RXZlbnRzKGFnZ3JlZ2F0ZUV2ZW50czogQXJyYXk8QWdncmVnYXRlRXZlbnQ8Q29tcG9zaXRpb25JZD4+KTogQXJyYXk8RG9tYWluRXZlbnQ8Q29tcG9zaXRpb25JZD4+IHtcblx0XHRyZXR1cm4gYWdncmVnYXRlRXZlbnRzLm1hcCgoZXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50PENvbXBvc2l0aW9uSWQ+KSA9PiB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0RXZlbnQoZXZlbnQpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0RXZlbnQoYWdncmVnYXRlRXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50PENvbXBvc2l0aW9uSWQ+KTogRG9tYWluRXZlbnQ8Q29tcG9zaXRpb25JZD4ge1xuXG5cdFx0c3dpdGNoIChhZ2dyZWdhdGVFdmVudC5nZXRUeXBlKCkpIHtcblx0XHRcdGNhc2UgQ29tcG9zaXRpb25BZ2dyZWdhdGVFdmVudHMuQ29tcG9zaXRpb25SZXNpemVXaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50OlxuXG5cdFx0XHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25SZXNpemVXaWR0aFNldEV2ZW50KGFnZ3JlZ2F0ZUV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXG5cdFx0XHRjYXNlIENvbXBvc2l0aW9uQWdncmVnYXRlRXZlbnRzLkNvbHVtbnNTZXRBZ2dyZWdhdGVFdmVudDpcblxuXHRcdFx0XHRyZXR1cm4gbmV3IENvbXBvc2l0aW9uQ29sdW1uc1NldEV2ZW50KGFnZ3JlZ2F0ZUV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXG5cdFx0XHRjYXNlIENvbXBvc2l0aW9uQWdncmVnYXRlRXZlbnRzLkNvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRBZ2dyZWdhdGVFdmVudDpcblxuXHRcdFx0XHRjb25zdCBwYXlsb2FkID0gKGFnZ3JlZ2F0ZUV2ZW50IGFzIENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCkuY29udGFpbmVyV2lkdGg7XG5cblx0XHRcdFx0cmV0dXJuIG5ldyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0RXZlbnQoYWdncmVnYXRlRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgcGF5bG9hZCk7XG5cblx0XHRcdGNhc2UgQ29tcG9zaXRpb25BZ2dyZWdhdGVFdmVudHMuQ29tcG9zaXRpb25XaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50OlxuXG5cdFx0XHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25XaWR0aFNldEV2ZW50KGFnZ3JlZ2F0ZUV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXG5cdFx0XHRjYXNlIENvbXBvc2l0aW9uQWdncmVnYXRlRXZlbnRzLkNvbXBvc2l0aW9uQ29sdW1uU2V0RW5hYmxlZEFnZ3JlZ2F0ZUV2ZW50OlxuXG5cdFx0XHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25Db2x1bW5TZXRFbmFibGVkRXZlbnQoYWdncmVnYXRlRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cblx0XHRcdGNhc2UgQ29tcG9zaXRpb25BZ2dyZWdhdGVFdmVudHMuQ29tcG9zaXRpb25Db2x1bW5Nb3ZlZExlZnRBZ2dyZWdhdGVFdmVudDpcblxuXHRcdFx0XHRyZXR1cm4gbmV3IENvbXBvc2l0aW9uQ29sdW1uTW92ZWRMZWZ0RXZlbnQoYWdncmVnYXRlRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cblx0XHRcdGNhc2UgQ29tcG9zaXRpb25BZ2dyZWdhdGVFdmVudHMuQ29tcG9zaXRpb25Db2x1bW5Nb3ZlZFJpZ2h0QWdncmVnYXRlRXZlbnQ6XG5cblx0XHRcdFx0cmV0dXJuIG5ldyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkUmlnaHRFdmVudChhZ2dyZWdhdGVFdmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdH1cblxuXG59XG4iXX0=