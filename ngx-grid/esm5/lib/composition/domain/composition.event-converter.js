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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZXZlbnQtY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbXBvc2l0aW9uLmV2ZW50LWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUVoRyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUN0SCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUM3RyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUN6RyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUk1RztJQUFBO0lBNERBLENBQUM7Ozs7O0lBdkRBLDJDQUFPOzs7O0lBQVAsVUFBUSxHQUF5RTtRQUVoRixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdkIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQy9CO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDOUI7SUFDRixDQUFDOzs7Ozs7SUFFTyxpREFBYTs7Ozs7SUFBckIsVUFBc0IsZUFBcUQ7UUFBM0UsaUJBSUM7UUFIQSxPQUFPLGVBQWUsQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxLQUFvQztZQUMvRCxPQUFPLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyxnREFBWTs7Ozs7SUFBcEIsVUFBcUIsY0FBNkM7UUFFakUsUUFBUSxjQUFjLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDakMsS0FBSywwQkFBMEIsQ0FBQyx1Q0FBdUM7Z0JBRXRFLE9BQU8sSUFBSSw4QkFBOEIsQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztZQUU1RSxLQUFLLDBCQUEwQixDQUFDLHdCQUF3QjtnQkFFdkQsT0FBTyxJQUFJLDBCQUEwQixDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1lBRXhFLEtBQUssMEJBQTBCLENBQUMsMENBQTBDOztvQkFFbkUsT0FBTyxHQUFHLENBQUMsbUJBQUEsY0FBYyxFQUE4QyxDQUFDLENBQUMsY0FBYztnQkFFN0YsT0FBTyxJQUFJLGlDQUFpQyxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUV4RixLQUFLLDBCQUEwQixDQUFDLGlDQUFpQztnQkFFaEUsT0FBTyxJQUFJLHdCQUF3QixDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1lBRXRFLEtBQUssMEJBQTBCLENBQUMseUNBQXlDO2dCQUV4RSxPQUFPLElBQUksZ0NBQWdDLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7WUFFOUUsS0FBSywwQkFBMEIsQ0FBQyx3Q0FBd0M7Z0JBRXZFLE9BQU8sSUFBSSwrQkFBK0IsQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztZQUU3RSxLQUFLLDBCQUEwQixDQUFDLHlDQUF5QztnQkFFeEUsT0FBTyxJQUFJLGdDQUFnQyxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1lBRTlFO2dCQUNDLE1BQU07U0FDUDtJQUVGLENBQUM7O2dCQXpERCxVQUFVOztJQTREWCxnQ0FBQztDQUFBLEFBNURELElBNERDO1NBM0RZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGVFdmVudHMgfSBmcm9tICcuL2NvbXBvc2l0aW9uLmV2ZW50cyc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlc2l6ZVdpZHRoU2V0RXZlbnQgfSBmcm9tICcuL3dpZHRoL3Jlc2l6ZS13aWR0aC9jb21wb3NpdGlvbi1yZXNpemUtd2lkdGgtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uc1NldEV2ZW50IH0gZnJvbSAnLi9jb2x1bW4vc2V0LWNvbHVtbnMvY29tcG9zaXRpb24uY29sdW1ucy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi93aWR0aC9zZXQtY29udGFpbmVyLXdpZHRoL2NvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC1zZXQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudCB9IGZyb20gJy4vd2lkdGgvc2V0LWNvbnRhaW5lci13aWR0aC9jb21wb3NpdGlvbi1jb250YWluZXItd2lkdGgtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2lkdGhTZXRFdmVudCB9IGZyb20gJy4vd2lkdGgvc2V0LXdpZHRoL2NvbXBvc2l0aW9uLXdpZHRoLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtblNldEVuYWJsZWRFdmVudCB9IGZyb20gJy4vY29sdW1uL3NldC1lbmFibGVkL2NvbXBvc2l0aW9uLmNvbHVtbi1zZXQtZW5hYmxlZC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkTGVmdEV2ZW50IH0gZnJvbSAnLi9jb2x1bW4vbW92ZS9sZWZ0L2NvbXBvc2l0aW9uLmNvbHVtbi1tb3ZlZC1sZWZ0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uTW92ZWRSaWdodEV2ZW50IH0gZnJvbSAnLi9jb2x1bW4vbW92ZS9yaWdodC9jb21wb3NpdGlvbi5jb2x1bW4tbW92ZWQtcmlnaHQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4vY29tcG9zaXRpb24uaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkV2ZW50Q29udmVydGVyIHtcblxuXHRjb252ZXJ0KGV2ZW50OiBBZ2dyZWdhdGVFdmVudDxDb21wb3NpdGlvbklkPik6IERvbWFpbkV2ZW50PENvbXBvc2l0aW9uSWQ+O1xuXHRjb252ZXJ0KGV2ZW50czogQXJyYXk8QWdncmVnYXRlRXZlbnQ8Q29tcG9zaXRpb25JZD4+KTogQXJyYXk8RG9tYWluRXZlbnQ8Q29tcG9zaXRpb25JZD4+O1xuXHRjb252ZXJ0KGFyZzogQWdncmVnYXRlRXZlbnQ8Q29tcG9zaXRpb25JZD4gfCBBcnJheTxBZ2dyZWdhdGVFdmVudDxDb21wb3NpdGlvbklkPj4pOiBEb21haW5FdmVudDxDb21wb3NpdGlvbklkPiB8IEFycmF5PERvbWFpbkV2ZW50PENvbXBvc2l0aW9uSWQ+PiB7XG5cblx0XHRpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0RXZlbnRzKGFyZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRFdmVudChhcmcpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY29udmVydEV2ZW50cyhhZ2dyZWdhdGVFdmVudHM6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PENvbXBvc2l0aW9uSWQ+Pik6IEFycmF5PERvbWFpbkV2ZW50PENvbXBvc2l0aW9uSWQ+PiB7XG5cdFx0cmV0dXJuIGFnZ3JlZ2F0ZUV2ZW50cy5tYXAoKGV2ZW50OiBBZ2dyZWdhdGVFdmVudDxDb21wb3NpdGlvbklkPikgPT4ge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydEV2ZW50KGV2ZW50KTtcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgY29udmVydEV2ZW50KGFnZ3JlZ2F0ZUV2ZW50OiBBZ2dyZWdhdGVFdmVudDxDb21wb3NpdGlvbklkPik6IERvbWFpbkV2ZW50PENvbXBvc2l0aW9uSWQ+IHtcblxuXHRcdHN3aXRjaCAoYWdncmVnYXRlRXZlbnQuZ2V0VHlwZSgpKSB7XG5cdFx0XHRjYXNlIENvbXBvc2l0aW9uQWdncmVnYXRlRXZlbnRzLkNvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRBZ2dyZWdhdGVFdmVudDpcblxuXHRcdFx0XHRyZXR1cm4gbmV3IENvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRFdmVudChhZ2dyZWdhdGVFdmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblxuXHRcdFx0Y2FzZSBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUV2ZW50cy5Db2x1bW5zU2V0QWdncmVnYXRlRXZlbnQ6XG5cblx0XHRcdFx0cmV0dXJuIG5ldyBDb21wb3NpdGlvbkNvbHVtbnNTZXRFdmVudChhZ2dyZWdhdGVFdmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblxuXHRcdFx0Y2FzZSBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUV2ZW50cy5Db21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0QWdncmVnYXRlRXZlbnQ6XG5cblx0XHRcdFx0Y29uc3QgcGF5bG9hZCA9IChhZ2dyZWdhdGVFdmVudCBhcyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0QWdncmVnYXRlRXZlbnQpLmNvbnRhaW5lcldpZHRoO1xuXG5cdFx0XHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEV2ZW50KGFnZ3JlZ2F0ZUV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIHBheWxvYWQpO1xuXG5cdFx0XHRjYXNlIENvbXBvc2l0aW9uQWdncmVnYXRlRXZlbnRzLkNvbXBvc2l0aW9uV2lkdGhTZXRBZ2dyZWdhdGVFdmVudDpcblxuXHRcdFx0XHRyZXR1cm4gbmV3IENvbXBvc2l0aW9uV2lkdGhTZXRFdmVudChhZ2dyZWdhdGVFdmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblxuXHRcdFx0Y2FzZSBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUV2ZW50cy5Db21wb3NpdGlvbkNvbHVtblNldEVuYWJsZWRBZ2dyZWdhdGVFdmVudDpcblxuXHRcdFx0XHRyZXR1cm4gbmV3IENvbXBvc2l0aW9uQ29sdW1uU2V0RW5hYmxlZEV2ZW50KGFnZ3JlZ2F0ZUV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXG5cdFx0XHRjYXNlIENvbXBvc2l0aW9uQWdncmVnYXRlRXZlbnRzLkNvbXBvc2l0aW9uQ29sdW1uTW92ZWRMZWZ0QWdncmVnYXRlRXZlbnQ6XG5cblx0XHRcdFx0cmV0dXJuIG5ldyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkTGVmdEV2ZW50KGFnZ3JlZ2F0ZUV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXG5cdFx0XHRjYXNlIENvbXBvc2l0aW9uQWdncmVnYXRlRXZlbnRzLkNvbXBvc2l0aW9uQ29sdW1uTW92ZWRSaWdodEFnZ3JlZ2F0ZUV2ZW50OlxuXG5cdFx0XHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25Db2x1bW5Nb3ZlZFJpZ2h0RXZlbnQoYWdncmVnYXRlRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHR9XG5cblxufVxuIl19