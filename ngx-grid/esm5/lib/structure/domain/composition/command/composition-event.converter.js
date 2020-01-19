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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tZXZlbnQuY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbXBvc2l0aW9uLWV2ZW50LmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUVoRyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUN0SCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUc3RztJQUFBO0lBb0RBLENBQUM7Ozs7O0lBL0NBLDJDQUFPOzs7O0lBQVAsVUFBUSxHQUEyQztRQUVsRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdkIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQy9CO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDOUI7SUFDRixDQUFDOzs7Ozs7SUFFTyxpREFBYTs7Ozs7SUFBckIsVUFBc0IsZUFBc0M7UUFBNUQsaUJBSUM7UUFIQSxPQUFPLGVBQWUsQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxLQUFxQjtZQUNoRCxPQUFPLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyxnREFBWTs7Ozs7SUFBcEIsVUFBcUIsY0FBOEI7UUFFbEQsUUFBUSxjQUFjLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDakMsS0FBSywwQkFBMEIsQ0FBQyx1Q0FBdUM7Z0JBRXRFLE9BQU8sSUFBSSw4QkFBOEIsQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztZQUU1RSxLQUFLLDBCQUEwQixDQUFDLHdCQUF3QjtnQkFFdkQsT0FBTyxJQUFJLDBCQUEwQixDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1lBRXhFLEtBQUssMEJBQTBCLENBQUMsMENBQTBDOztvQkFFbkUsT0FBTyxHQUFHLENBQUMsbUJBQUEsY0FBYyxFQUE4QyxDQUFDLENBQUMsY0FBYztnQkFFN0YsT0FBTyxJQUFJLGlDQUFpQyxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUV4RixLQUFLLDBCQUEwQixDQUFDLGlDQUFpQztnQkFFaEUsT0FBTyxJQUFJLHdCQUF3QixDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1lBRXRFLEtBQUssMEJBQTBCLENBQUMseUNBQXlDO2dCQUV4RSxPQUFPLElBQUksZ0NBQWdDLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7WUFFOUU7Z0JBQ0MsTUFBTTtTQUNQO0lBRUYsQ0FBQzs7Z0JBakRELFVBQVU7O0lBb0RYLGdDQUFDO0NBQUEsQUFwREQsSUFvREM7U0FuRFkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUV2ZW50cyB9IGZyb20gJy4vY29tcG9zaXRpb24uZXZlbnRzJztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRFdmVudCB9IGZyb20gJy4vd2lkdGgvcmVzaXplLXdpZHRoL2NvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5zU2V0RXZlbnQgfSBmcm9tICcuL2NvbHVtbi9zZXQtY29sdW1ucy9jb21wb3NpdGlvbi5jb2x1bW5zLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL3dpZHRoL3NldC1jb250YWluZXItd2lkdGgvY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEV2ZW50IH0gZnJvbSAnLi93aWR0aC9zZXQtY29udGFpbmVyLXdpZHRoL2NvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XaWR0aFNldEV2ZW50IH0gZnJvbSAnLi93aWR0aC9zZXQtd2lkdGgvY29tcG9zaXRpb24td2lkdGgtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uU2V0RW5hYmxlZEV2ZW50IH0gZnJvbSAnLi9jb2x1bW4vc2V0LWVuYWJsZWQvY29tcG9zaXRpb24uY29sdW1uLXNldC1lbmFibGVkLmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25FdmVudENvbnZlcnRlciB7XG5cblx0Y29udmVydChldmVudDogQWdncmVnYXRlRXZlbnQpOiBEb21haW5FdmVudDtcblx0Y29udmVydChldmVudHM6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50Pik6IEFycmF5PERvbWFpbkV2ZW50Pjtcblx0Y29udmVydChhcmc6IEFnZ3JlZ2F0ZUV2ZW50IHwgQXJyYXk8QWdncmVnYXRlRXZlbnQ+KTogRG9tYWluRXZlbnQgfCBBcnJheTxEb21haW5FdmVudD4ge1xuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydEV2ZW50cyhhcmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0RXZlbnQoYXJnKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRFdmVudHMoYWdncmVnYXRlRXZlbnRzOiBBcnJheTxBZ2dyZWdhdGVFdmVudD4pOiBBcnJheTxEb21haW5FdmVudD4ge1xuXHRcdHJldHVybiBhZ2dyZWdhdGVFdmVudHMubWFwKChldmVudDogQWdncmVnYXRlRXZlbnQpID0+IHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRFdmVudChldmVudCk7XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRFdmVudChhZ2dyZWdhdGVFdmVudDogQWdncmVnYXRlRXZlbnQpOiBEb21haW5FdmVudCB7XG5cblx0XHRzd2l0Y2ggKGFnZ3JlZ2F0ZUV2ZW50LmdldFR5cGUoKSkge1xuXHRcdFx0Y2FzZSBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUV2ZW50cy5Db21wb3NpdGlvblJlc2l6ZVdpZHRoU2V0QWdncmVnYXRlRXZlbnQ6XG5cblx0XHRcdFx0cmV0dXJuIG5ldyBDb21wb3NpdGlvblJlc2l6ZVdpZHRoU2V0RXZlbnQoYWdncmVnYXRlRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cblx0XHRcdGNhc2UgQ29tcG9zaXRpb25BZ2dyZWdhdGVFdmVudHMuQ29sdW1uc1NldEFnZ3JlZ2F0ZUV2ZW50OlxuXG5cdFx0XHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25Db2x1bW5zU2V0RXZlbnQoYWdncmVnYXRlRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cblx0XHRcdGNhc2UgQ29tcG9zaXRpb25BZ2dyZWdhdGVFdmVudHMuQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50OlxuXG5cdFx0XHRcdGNvbnN0IHBheWxvYWQgPSAoYWdncmVnYXRlRXZlbnQgYXMgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50KS5jb250YWluZXJXaWR0aDtcblxuXHRcdFx0XHRyZXR1cm4gbmV3IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudChhZ2dyZWdhdGVFdmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBwYXlsb2FkKTtcblxuXHRcdFx0Y2FzZSBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUV2ZW50cy5Db21wb3NpdGlvbldpZHRoU2V0QWdncmVnYXRlRXZlbnQ6XG5cblx0XHRcdFx0cmV0dXJuIG5ldyBDb21wb3NpdGlvbldpZHRoU2V0RXZlbnQoYWdncmVnYXRlRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cblx0XHRcdGNhc2UgQ29tcG9zaXRpb25BZ2dyZWdhdGVFdmVudHMuQ29tcG9zaXRpb25Db2x1bW5TZXRFbmFibGVkQWdncmVnYXRlRXZlbnQ6XG5cblx0XHRcdFx0cmV0dXJuIG5ldyBDb21wb3NpdGlvbkNvbHVtblNldEVuYWJsZWRFdmVudChhZ2dyZWdhdGVFdmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdH1cblxuXG59XG4iXX0=