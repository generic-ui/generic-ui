/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateEvent } from '@generic-ui/hermes';
import { SchemaCreatedEvent } from './schema-created.event';
export class SchemaCreatedAggregateEvent extends AggregateEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'SchemaCreatedEvent');
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new SchemaCreatedEvent(this.getAggregateId());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWNyZWF0ZWQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc2NoZW1hL2RvbWFpbi9jcmVhdGUvc2NoZW1hLWNyZWF0ZWQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFlLE1BQU0sb0JBQW9CLENBQUM7QUFHakUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFNUQsTUFBTSxPQUFPLDJCQUE0QixTQUFRLGNBQXdCOzs7O0lBRXhFLFlBQVksV0FBcUI7UUFDaEMsS0FBSyxDQUFDLFdBQVcsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vc2NoZW1hLmlkJztcbmltcG9ydCB7IFNjaGVtYUNyZWF0ZWRFdmVudCB9IGZyb20gJy4vc2NoZW1hLWNyZWF0ZWQuZXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgU2NoZW1hQ3JlYXRlZEFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgQWdncmVnYXRlRXZlbnQ8U2NoZW1hSWQ+IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogU2NoZW1hSWQpIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ1NjaGVtYUNyZWF0ZWRFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTY2hlbWFJZD4ge1xuXHRcdHJldHVybiBuZXcgU2NoZW1hQ3JlYXRlZEV2ZW50KHRoaXMuZ2V0QWdncmVnYXRlSWQoKSk7XG5cdH1cbn1cbiJdfQ==