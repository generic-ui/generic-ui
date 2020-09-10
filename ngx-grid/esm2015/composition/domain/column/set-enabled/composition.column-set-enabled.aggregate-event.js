/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateEvent } from '@generic-ui/hermes';
import { CompositionColumnSetEnabledEvent } from './composition.column-set-enabled.event';
export class CompositionColumnSetEnabledAggregateEvent extends AggregateEvent {
    /**
     * @param {?} aggregateId
     * @param {?} activeColumns
     */
    constructor(aggregateId, activeColumns) {
        super(aggregateId, 'CompositionColumnSetEnabledAggregateEvent');
        this.activeColumns = activeColumns;
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new CompositionColumnSetEnabledEvent(this.getAggregateId());
    }
    /**
     * @return {?}
     */
    getActiveColumns() {
        return this.activeColumns;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionColumnSetEnabledAggregateEvent.prototype.activeColumns;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uY29sdW1uLXNldC1lbmFibGVkLmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9zZXQtZW5hYmxlZC9jb21wb3NpdGlvbi5jb2x1bW4tc2V0LWVuYWJsZWQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUE0QixNQUFNLG9CQUFvQixDQUFDO0FBSTlFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRTFGLE1BQU0sT0FBTyx5Q0FBMEMsU0FBUSxjQUE2Qjs7Ozs7SUFFM0YsWUFBWSxXQUF3QixFQUNoQixhQUF3QztRQUMzRCxLQUFLLENBQUMsV0FBVyxFQUFFLDJDQUEyQyxDQUFDLENBQUM7UUFEN0Msa0JBQWEsR0FBYixhQUFhLENBQTJCO0lBRTVELENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQztDQUVEOzs7Ozs7SUFaRyxrRUFBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgQWdncmVnYXRlSWQsIERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQWN0aXZlQ29sdW1uRW50aXR5IH0gZnJvbSAnLi4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uZW50aXR5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtblNldEVuYWJsZWRFdmVudCB9IGZyb20gJy4vY29tcG9zaXRpb24uY29sdW1uLXNldC1lbmFibGVkLmV2ZW50JztcblxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uQ29sdW1uU2V0RW5hYmxlZEFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgQWdncmVnYXRlRXZlbnQ8Q29tcG9zaXRpb25JZD4ge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhY3RpdmVDb2x1bW5zOiBBcnJheTxBY3RpdmVDb2x1bW5FbnRpdHk+KSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdDb21wb3NpdGlvbkNvbHVtblNldEVuYWJsZWRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxDb21wb3NpdGlvbklkPiB7XG5cdFx0cmV0dXJuIG5ldyBDb21wb3NpdGlvbkNvbHVtblNldEVuYWJsZWRFdmVudCh0aGlzLmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0Z2V0QWN0aXZlQ29sdW1ucygpOiBBcnJheTxBY3RpdmVDb2x1bW5FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5hY3RpdmVDb2x1bW5zO1xuXHR9XG5cbn1cbiJdfQ==