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
                return new ColumnsSetEvent(aggregateEvent.getAggregateId());
            case CompositionAggregateEvents.CompositionContainerWidthSetAggregateEvent:
                /** @type {?} */
                var payload = ((/** @type {?} */ (aggregateEvent))).containerWidth;
                return new CompositionContainerWidthSetEvent(aggregateEvent.getAggregateId(), payload);
            case CompositionAggregateEvents.CompositionWidthSetAggregateEvent:
                return new CompositionWidthSetEvent(aggregateEvent.getAggregateId());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tZXZlbnQuY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbXBvc2l0aW9uLWV2ZW50LmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFekUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDdEgsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFHekY7SUFBQTtJQWdEQSxDQUFDOzs7OztJQTNDQSwyQ0FBTzs7OztJQUFQLFVBQVEsR0FBMkM7UUFFbEQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMvQjthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzlCO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8saURBQWE7Ozs7O0lBQXJCLFVBQXNCLGVBQXNDO1FBQTVELGlCQUlDO1FBSEEsT0FBTyxlQUFlLENBQUMsR0FBRzs7OztRQUFDLFVBQUMsS0FBcUI7WUFDaEQsT0FBTyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sZ0RBQVk7Ozs7O0lBQXBCLFVBQXFCLGNBQThCO1FBRWxELFFBQVEsY0FBYyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ2pDLEtBQUssMEJBQTBCLENBQUMsdUNBQXVDO2dCQUV0RSxPQUFPLElBQUksOEJBQThCLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7WUFFNUUsS0FBSywwQkFBMEIsQ0FBQyx3QkFBd0I7Z0JBRXZELE9BQU8sSUFBSSxlQUFlLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7WUFFN0QsS0FBSywwQkFBMEIsQ0FBQywwQ0FBMEM7O29CQUVuRSxPQUFPLEdBQUcsQ0FBQyxtQkFBQSxjQUFjLEVBQThDLENBQUMsQ0FBQyxjQUFjO2dCQUU3RixPQUFPLElBQUksaUNBQWlDLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBRXhGLEtBQUssMEJBQTBCLENBQUMsaUNBQWlDO2dCQUVoRSxPQUFPLElBQUksd0JBQXdCLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7WUFFdEU7Z0JBQ0MsTUFBTTtTQUNQO0lBRUYsQ0FBQzs7Z0JBN0NELFVBQVU7O0lBZ0RYLGdDQUFDO0NBQUEsQUFoREQsSUFnREM7U0EvQ1kseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUV2ZW50cyB9IGZyb20gJy4vY29tcG9zaXRpb24uZXZlbnRzJztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRFdmVudCB9IGZyb20gJy4vd2lkdGgvcmVzaXplLXdpZHRoL2NvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29sdW1uc1NldEV2ZW50IH0gZnJvbSAnLi9jb2x1bW4vc2V0LWNvbHVtbnMvY29sdW1ucy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi93aWR0aC9zZXQtY29udGFpbmVyLXdpZHRoL2NvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC1zZXQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudCB9IGZyb20gJy4vd2lkdGgvc2V0LWNvbnRhaW5lci13aWR0aC9jb21wb3NpdGlvbi1jb250YWluZXItd2lkdGgtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2lkdGhTZXRFdmVudCB9IGZyb20gJy4vd2lkdGgvc2V0LXdpZHRoL2NvbXBvc2l0aW9uLXdpZHRoLXNldC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQoZXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50KTogRG9tYWluRXZlbnQ7XG5cdGNvbnZlcnQoZXZlbnRzOiBBcnJheTxBZ2dyZWdhdGVFdmVudD4pOiBBcnJheTxEb21haW5FdmVudD47XG5cdGNvbnZlcnQoYXJnOiBBZ2dyZWdhdGVFdmVudCB8IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50Pik6IERvbWFpbkV2ZW50IHwgQXJyYXk8RG9tYWluRXZlbnQ+IHtcblxuXHRcdGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRFdmVudHMoYXJnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydEV2ZW50KGFyZyk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0RXZlbnRzKGFnZ3JlZ2F0ZUV2ZW50czogQXJyYXk8QWdncmVnYXRlRXZlbnQ+KTogQXJyYXk8RG9tYWluRXZlbnQ+IHtcblx0XHRyZXR1cm4gYWdncmVnYXRlRXZlbnRzLm1hcCgoZXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50KSA9PiB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0RXZlbnQoZXZlbnQpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0RXZlbnQoYWdncmVnYXRlRXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50KTogRG9tYWluRXZlbnQge1xuXG5cdFx0c3dpdGNoIChhZ2dyZWdhdGVFdmVudC5nZXRUeXBlKCkpIHtcblx0XHRcdGNhc2UgQ29tcG9zaXRpb25BZ2dyZWdhdGVFdmVudHMuQ29tcG9zaXRpb25SZXNpemVXaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50OlxuXG5cdFx0XHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25SZXNpemVXaWR0aFNldEV2ZW50KGFnZ3JlZ2F0ZUV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXG5cdFx0XHRjYXNlIENvbXBvc2l0aW9uQWdncmVnYXRlRXZlbnRzLkNvbHVtbnNTZXRBZ2dyZWdhdGVFdmVudDpcblxuXHRcdFx0XHRyZXR1cm4gbmV3IENvbHVtbnNTZXRFdmVudChhZ2dyZWdhdGVFdmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblxuXHRcdFx0Y2FzZSBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUV2ZW50cy5Db21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0QWdncmVnYXRlRXZlbnQ6XG5cblx0XHRcdFx0Y29uc3QgcGF5bG9hZCA9IChhZ2dyZWdhdGVFdmVudCBhcyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0QWdncmVnYXRlRXZlbnQpLmNvbnRhaW5lcldpZHRoO1xuXG5cdFx0XHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEV2ZW50KGFnZ3JlZ2F0ZUV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIHBheWxvYWQpO1xuXG5cdFx0XHRjYXNlIENvbXBvc2l0aW9uQWdncmVnYXRlRXZlbnRzLkNvbXBvc2l0aW9uV2lkdGhTZXRBZ2dyZWdhdGVFdmVudDpcblxuXHRcdFx0XHRyZXR1cm4gbmV3IENvbXBvc2l0aW9uV2lkdGhTZXRFdmVudChhZ2dyZWdhdGVFdmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdH1cblxuXG59XG4iXX0=