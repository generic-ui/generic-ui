/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CompositionColumnMovedLeftEvent } from './composition.column-moved-left.event';
import { CompositionAggregateEvent } from '../../../composition.aggregate-event';
export class CompositionColumnMovedLeftAggregateEvent extends CompositionAggregateEvent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uY29sdW1uLW1vdmVkLWxlZnQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb2x1bW4vbW92ZS9sZWZ0L2NvbXBvc2l0aW9uLmNvbHVtbi1tb3ZlZC1sZWZ0LmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFakYsTUFBTSxPQUFPLHdDQUF5QyxTQUFRLHlCQUF5Qjs7Ozs7SUFFdEYsWUFBWSxXQUF3QixFQUNoQixhQUF3QztRQUMzRCxLQUFLLENBQUMsV0FBVyxFQUFFLDBDQUEwQyxDQUFDLENBQUM7UUFENUMsa0JBQWEsR0FBYixhQUFhLENBQTJCO0lBRTVELENBQUM7Ozs7Ozs7SUFNRCxhQUFhO1FBQ1osT0FBTyxJQUFJLCtCQUErQixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Q0FFRDs7Ozs7O0lBWkcsaUVBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQsIERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQWN0aXZlQ29sdW1uRW50aXR5IH0gZnJvbSAnLi4vLi4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uZW50aXR5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9hcGkvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5Nb3ZlZExlZnRFdmVudCB9IGZyb20gJy4vY29tcG9zaXRpb24uY29sdW1uLW1vdmVkLWxlZnQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1ldmVudCc7XG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkTGVmdEFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgQ29tcG9zaXRpb25BZ2dyZWdhdGVFdmVudCB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFjdGl2ZUNvbHVtbnM6IEFycmF5PEFjdGl2ZUNvbHVtbkVudGl0eT4pIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ0NvbXBvc2l0aW9uQ29sdW1uTW92ZWRMZWZ0QWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdC8vIGdldEFjdGl2ZUNvbHVtbnMoKTogQXJyYXk8QWN0aXZlQ29sdW1uRW50aXR5PiB7XG5cdC8vIFx0cmV0dXJuIHRoaXMuYWN0aXZlQ29sdW1ucztcblx0Ly8gfVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8Q29tcG9zaXRpb25JZD4ge1xuXHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25Db2x1bW5Nb3ZlZExlZnRFdmVudCh0aGlzLmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cbn1cbiJdfQ==