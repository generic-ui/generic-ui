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
            default:
                break;
        }
    }
}
CompositionEventConverter.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tZXZlbnQuY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbXBvc2l0aW9uLWV2ZW50LmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUVoRyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUN0SCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUk3RyxNQUFNLE9BQU8seUJBQXlCOzs7OztJQUlyQyxPQUFPLENBQUMsR0FBMkM7UUFFbEQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMvQjthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzlCO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sYUFBYSxDQUFDLGVBQXNDO1FBQzNELE9BQU8sZUFBZSxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLEtBQXFCLEVBQUUsRUFBRTtZQUNwRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyxZQUFZLENBQUMsY0FBOEI7UUFFbEQsUUFBUSxjQUFjLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDakMsS0FBSywwQkFBMEIsQ0FBQyx1Q0FBdUM7Z0JBRXRFLE9BQU8sSUFBSSw4QkFBOEIsQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztZQUU1RSxLQUFLLDBCQUEwQixDQUFDLHdCQUF3QjtnQkFFdkQsT0FBTyxJQUFJLDBCQUEwQixDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1lBRXhFLEtBQUssMEJBQTBCLENBQUMsMENBQTBDOztzQkFFbkUsT0FBTyxHQUFHLENBQUMsbUJBQUEsY0FBYyxFQUE4QyxDQUFDLENBQUMsY0FBYztnQkFFN0YsT0FBTyxJQUFJLGlDQUFpQyxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUV4RixLQUFLLDBCQUEwQixDQUFDLGlDQUFpQztnQkFFaEUsT0FBTyxJQUFJLHdCQUF3QixDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1lBRXRFLEtBQUssMEJBQTBCLENBQUMseUNBQXlDO2dCQUV4RSxPQUFPLElBQUksZ0NBQWdDLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7WUFFOUU7Z0JBQ0MsTUFBTTtTQUNQO0lBRUYsQ0FBQzs7O1lBakRELFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlRXZlbnRzIH0gZnJvbSAnLi9jb21wb3NpdGlvbi5ldmVudHMnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZXNpemVXaWR0aFNldEV2ZW50IH0gZnJvbSAnLi93aWR0aC9yZXNpemUtd2lkdGgvY29tcG9zaXRpb24tcmVzaXplLXdpZHRoLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbnNTZXRFdmVudCB9IGZyb20gJy4vY29sdW1uL3NldC1jb2x1bW5zL2NvbXBvc2l0aW9uLmNvbHVtbnMtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vd2lkdGgvc2V0LWNvbnRhaW5lci13aWR0aC9jb21wb3NpdGlvbi1jb250YWluZXItd2lkdGgtc2V0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0RXZlbnQgfSBmcm9tICcuL3dpZHRoL3NldC1jb250YWluZXItd2lkdGgvY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldpZHRoU2V0RXZlbnQgfSBmcm9tICcuL3dpZHRoL3NldC13aWR0aC9jb21wb3NpdGlvbi13aWR0aC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5TZXRFbmFibGVkRXZlbnQgfSBmcm9tICcuL2NvbHVtbi9zZXQtZW5hYmxlZC9jb21wb3NpdGlvbi5jb2x1bW4tc2V0LWVuYWJsZWQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkV2ZW50Q29udmVydGVyIHtcblxuXHRjb252ZXJ0KGV2ZW50OiBBZ2dyZWdhdGVFdmVudCk6IERvbWFpbkV2ZW50O1xuXHRjb252ZXJ0KGV2ZW50czogQXJyYXk8QWdncmVnYXRlRXZlbnQ+KTogQXJyYXk8RG9tYWluRXZlbnQ+O1xuXHRjb252ZXJ0KGFyZzogQWdncmVnYXRlRXZlbnQgfCBBcnJheTxBZ2dyZWdhdGVFdmVudD4pOiBEb21haW5FdmVudCB8IEFycmF5PERvbWFpbkV2ZW50PiB7XG5cblx0XHRpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0RXZlbnRzKGFyZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRFdmVudChhcmcpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY29udmVydEV2ZW50cyhhZ2dyZWdhdGVFdmVudHM6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50Pik6IEFycmF5PERvbWFpbkV2ZW50PiB7XG5cdFx0cmV0dXJuIGFnZ3JlZ2F0ZUV2ZW50cy5tYXAoKGV2ZW50OiBBZ2dyZWdhdGVFdmVudCkgPT4ge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydEV2ZW50KGV2ZW50KTtcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgY29udmVydEV2ZW50KGFnZ3JlZ2F0ZUV2ZW50OiBBZ2dyZWdhdGVFdmVudCk6IERvbWFpbkV2ZW50IHtcblxuXHRcdHN3aXRjaCAoYWdncmVnYXRlRXZlbnQuZ2V0VHlwZSgpKSB7XG5cdFx0XHRjYXNlIENvbXBvc2l0aW9uQWdncmVnYXRlRXZlbnRzLkNvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRBZ2dyZWdhdGVFdmVudDpcblxuXHRcdFx0XHRyZXR1cm4gbmV3IENvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRFdmVudChhZ2dyZWdhdGVFdmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblxuXHRcdFx0Y2FzZSBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUV2ZW50cy5Db2x1bW5zU2V0QWdncmVnYXRlRXZlbnQ6XG5cblx0XHRcdFx0cmV0dXJuIG5ldyBDb21wb3NpdGlvbkNvbHVtbnNTZXRFdmVudChhZ2dyZWdhdGVFdmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblxuXHRcdFx0Y2FzZSBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUV2ZW50cy5Db21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0QWdncmVnYXRlRXZlbnQ6XG5cblx0XHRcdFx0Y29uc3QgcGF5bG9hZCA9IChhZ2dyZWdhdGVFdmVudCBhcyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0QWdncmVnYXRlRXZlbnQpLmNvbnRhaW5lcldpZHRoO1xuXG5cdFx0XHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEV2ZW50KGFnZ3JlZ2F0ZUV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIHBheWxvYWQpO1xuXG5cdFx0XHRjYXNlIENvbXBvc2l0aW9uQWdncmVnYXRlRXZlbnRzLkNvbXBvc2l0aW9uV2lkdGhTZXRBZ2dyZWdhdGVFdmVudDpcblxuXHRcdFx0XHRyZXR1cm4gbmV3IENvbXBvc2l0aW9uV2lkdGhTZXRFdmVudChhZ2dyZWdhdGVFdmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblxuXHRcdFx0Y2FzZSBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUV2ZW50cy5Db21wb3NpdGlvbkNvbHVtblNldEVuYWJsZWRBZ2dyZWdhdGVFdmVudDpcblxuXHRcdFx0XHRyZXR1cm4gbmV3IENvbXBvc2l0aW9uQ29sdW1uU2V0RW5hYmxlZEV2ZW50KGFnZ3JlZ2F0ZUV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0fVxuXG5cbn1cbiJdfQ==