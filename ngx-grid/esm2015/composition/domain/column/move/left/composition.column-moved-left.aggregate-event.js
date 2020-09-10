/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateEvent } from '@generic-ui/hermes';
import { CompositionColumnMovedLeftEvent } from './composition.column-moved-left.event';
export class CompositionColumnMovedLeftAggregateEvent extends AggregateEvent {
    /**
     * @param {?} aggregateId
     * @param {?} activeColumns
     */
    constructor(aggregateId, activeColumns) {
        super(aggregateId, 'CompositionColumnMovedLeftAggregateEvent');
        this.activeColumns = activeColumns;
    }
    // getActiveColumns(): Array<ActiveColumnEntity> {
    // 	return this.activeColumns;
    // }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new CompositionColumnMovedLeftEvent(this.getAggregateId());
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionColumnMovedLeftAggregateEvent.prototype.activeColumns;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uY29sdW1uLW1vdmVkLWxlZnQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9kb21haW4vY29sdW1uL21vdmUvbGVmdC9jb21wb3NpdGlvbi5jb2x1bW4tbW92ZWQtbGVmdC5hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQTRCLE1BQU0sb0JBQW9CLENBQUM7QUFJOUUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFeEYsTUFBTSxPQUFPLHdDQUF5QyxTQUFRLGNBQTZCOzs7OztJQUUxRixZQUFZLFdBQXdCLEVBQ2hCLGFBQXdDO1FBQzNELEtBQUssQ0FBQyxXQUFXLEVBQUUsMENBQTBDLENBQUMsQ0FBQztRQUQ1QyxrQkFBYSxHQUFiLGFBQWEsQ0FBMkI7SUFFNUQsQ0FBQzs7Ozs7OztJQU1ELGFBQWE7UUFDWixPQUFPLElBQUksK0JBQStCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQztDQUVEOzs7Ozs7SUFaRyxpRUFBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgQWdncmVnYXRlSWQsIERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQWN0aXZlQ29sdW1uRW50aXR5IH0gZnJvbSAnLi4vLi4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uZW50aXR5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkTGVmdEV2ZW50IH0gZnJvbSAnLi9jb21wb3NpdGlvbi5jb2x1bW4tbW92ZWQtbGVmdC5ldmVudCc7XG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkTGVmdEFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgQWdncmVnYXRlRXZlbnQ8Q29tcG9zaXRpb25JZD4ge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhY3RpdmVDb2x1bW5zOiBBcnJheTxBY3RpdmVDb2x1bW5FbnRpdHk+KSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdDb21wb3NpdGlvbkNvbHVtbk1vdmVkTGVmdEFnZ3JlZ2F0ZUV2ZW50Jyk7XG5cdH1cblxuXHQvLyBnZXRBY3RpdmVDb2x1bW5zKCk6IEFycmF5PEFjdGl2ZUNvbHVtbkVudGl0eT4ge1xuXHQvLyBcdHJldHVybiB0aGlzLmFjdGl2ZUNvbHVtbnM7XG5cdC8vIH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PENvbXBvc2l0aW9uSWQ+IHtcblx0XHRyZXR1cm4gbmV3IENvbXBvc2l0aW9uQ29sdW1uTW92ZWRMZWZ0RXZlbnQodGhpcy5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0fVxuXG59XG4iXX0=