/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateEvent } from '@generic-ui/hermes';
import { CompositionChangeSortStatusEvent } from './composition-change-sort-status.event';
export class CompositionChangeSortStatusAggregateEvent extends AggregateEvent {
    /**
     * @param {?} aggregateId
     * @param {?} activeColumns
     */
    constructor(aggregateId, activeColumns) {
        super(aggregateId, 'CompositionChangeSortStatusAggregateEvent');
        this.activeColumns = activeColumns;
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new CompositionChangeSortStatusEvent(this.getAggregateId(), this.activeColumns);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionChangeSortStatusAggregateEvent.prototype.activeColumns;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9zb3J0L2NvbXBvc2l0aW9uLWNoYW5nZS1zb3J0LXN0YXR1cy5hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQTRCLE1BQU0sb0JBQW9CLENBQUM7QUFHOUUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFJMUYsTUFBTSxPQUFPLHlDQUEwQyxTQUFRLGNBQTZCOzs7OztJQUUzRixZQUFZLFdBQXdCLEVBQ2hCLGFBQXdDO1FBQzNELEtBQUssQ0FBQyxXQUFXLEVBQUUsMkNBQTJDLENBQUMsQ0FBQztRQUQ3QyxrQkFBYSxHQUFiLGFBQWEsQ0FBMkI7SUFFNUQsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksZ0NBQWdDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN4RixDQUFDO0NBRUQ7Ozs7OztJQVJHLGtFQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBBZ2dyZWdhdGVJZCwgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzRXZlbnQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLWNoYW5nZS1zb3J0LXN0YXR1cy5ldmVudCc7XG5pbXBvcnQgeyBBY3RpdmVDb2x1bW5FbnRpdHkgfSBmcm9tICcuLi9hY3RpdmUvYWN0aXZlLWNvbHVtbi5lbnRpdHknO1xuXG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNBZ2dyZWdhdGVFdmVudCBleHRlbmRzIEFnZ3JlZ2F0ZUV2ZW50PENvbXBvc2l0aW9uSWQ+IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWN0aXZlQ29sdW1uczogQXJyYXk8QWN0aXZlQ29sdW1uRW50aXR5Pikge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCAnQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzQWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8Q29tcG9zaXRpb25JZD4ge1xuXHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzRXZlbnQodGhpcy5nZXRBZ2dyZWdhdGVJZCgpLCB0aGlzLmFjdGl2ZUNvbHVtbnMpO1xuXHR9XG5cbn1cbiJdfQ==