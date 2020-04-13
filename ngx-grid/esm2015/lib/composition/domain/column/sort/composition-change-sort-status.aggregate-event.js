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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vc29ydC9jb21wb3NpdGlvbi1jaGFuZ2Utc29ydC1zdGF0dXMuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUE0QixNQUFNLG9CQUFvQixDQUFDO0FBRzlFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBSTFGLE1BQU0sT0FBTyx5Q0FBMEMsU0FBUSxjQUE2Qjs7Ozs7SUFFM0YsWUFBWSxXQUF3QixFQUNoQixhQUF3QztRQUMzRCxLQUFLLENBQUMsV0FBVyxFQUFFLDJDQUEyQyxDQUFDLENBQUM7UUFEN0Msa0JBQWEsR0FBYixhQUFhLENBQTJCO0lBRTVELENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDeEYsQ0FBQztDQUVEOzs7Ozs7SUFSRyxrRUFBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgQWdncmVnYXRlSWQsIERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0V2ZW50IH0gZnJvbSAnLi9jb21wb3NpdGlvbi1jaGFuZ2Utc29ydC1zdGF0dXMuZXZlbnQnO1xuaW1wb3J0IHsgQWN0aXZlQ29sdW1uRW50aXR5IH0gZnJvbSAnLi4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uZW50aXR5JztcblxuXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzQWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBBZ2dyZWdhdGVFdmVudDxDb21wb3NpdGlvbklkPiB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFjdGl2ZUNvbHVtbnM6IEFycmF5PEFjdGl2ZUNvbHVtbkVudGl0eT4pIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ0NvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0FnZ3JlZ2F0ZUV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PENvbXBvc2l0aW9uSWQ+IHtcblx0XHRyZXR1cm4gbmV3IENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0V2ZW50KHRoaXMuZ2V0QWdncmVnYXRlSWQoKSwgdGhpcy5hY3RpdmVDb2x1bW5zKTtcblx0fVxuXG59XG4iXX0=