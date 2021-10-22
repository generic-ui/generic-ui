/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CompositionColumnMovedRightEvent } from './composition.column-moved-right.event';
import { CompositionAggregateEvent } from '../../../composition.aggregate-event';
export class CompositionColumnMovedRightAggregateEvent extends CompositionAggregateEvent {
    /**
     * @param {?} aggregateId
     * @param {?} activeColumns
     */
    constructor(aggregateId, activeColumns) {
        super(aggregateId, 'CompositionColumnMovedRightAggregateEvent');
        this.activeColumns = activeColumns;
    }
    // getActiveColumns(): Array<ActiveColumnEntity> {
    // 	return this.activeColumns;
    // }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new CompositionColumnMovedRightEvent(this.getAggregateId());
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionColumnMovedRightAggregateEvent.prototype.activeColumns;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uY29sdW1uLW1vdmVkLXJpZ2h0LmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9kb21haW4vY29sdW1uL21vdmUvcmlnaHQvY29tcG9zaXRpb24uY29sdW1uLW1vdmVkLXJpZ2h0LmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFakYsTUFBTSxPQUFPLHlDQUEwQyxTQUFRLHlCQUF5Qjs7Ozs7SUFFdkYsWUFBWSxXQUF3QixFQUNoQixhQUF3QztRQUMzRCxLQUFLLENBQUMsV0FBVyxFQUFFLDJDQUEyQyxDQUFDLENBQUM7UUFEN0Msa0JBQWEsR0FBYixhQUFhLENBQTJCO0lBRTVELENBQUM7Ozs7Ozs7SUFNRCxhQUFhO1FBQ1osT0FBTyxJQUFJLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Q0FFRDs7Ozs7O0lBWkcsa0VBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQsIERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IEFjdGl2ZUNvbHVtbkVudGl0eSB9IGZyb20gJy4uLy4uL2FjdGl2ZS9hY3RpdmUtY29sdW1uLmVudGl0eSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vYXBpL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uTW92ZWRSaWdodEV2ZW50IH0gZnJvbSAnLi9jb21wb3NpdGlvbi5jb2x1bW4tbW92ZWQtcmlnaHQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1ldmVudCc7XG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkUmlnaHRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIENvbXBvc2l0aW9uQWdncmVnYXRlRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhY3RpdmVDb2x1bW5zOiBBcnJheTxBY3RpdmVDb2x1bW5FbnRpdHk+KSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdDb21wb3NpdGlvbkNvbHVtbk1vdmVkUmlnaHRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0Ly8gZ2V0QWN0aXZlQ29sdW1ucygpOiBBcnJheTxBY3RpdmVDb2x1bW5FbnRpdHk+IHtcblx0Ly8gXHRyZXR1cm4gdGhpcy5hY3RpdmVDb2x1bW5zO1xuXHQvLyB9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxDb21wb3NpdGlvbklkPiB7XG5cdFx0cmV0dXJuIG5ldyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkUmlnaHRFdmVudCh0aGlzLmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cbn1cbiJdfQ==