/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { UniqueFilterUnselectedEvent } from './unique-filter-unselected.event';
var UniqueFilterUnselectedAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(UniqueFilterUnselectedAggregateEvent, _super);
    function UniqueFilterUnselectedAggregateEvent(aggregateId) {
        return _super.call(this, aggregateId, 'UniqueFilterUnselectedAggregateEvent') || this;
    }
    /**
     * @return {?}
     */
    UniqueFilterUnselectedAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new UniqueFilterUnselectedEvent(this.getAggregateId());
    };
    return UniqueFilterUnselectedAggregateEvent;
}(AggregateEvent));
export { UniqueFilterUnselectedAggregateEvent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLWZpbHRlci11bnNlbGVjdGVkLmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9kb21haW4vdW5pcXVlL3Vuc2VsZWN0L3VuaXF1ZS1maWx0ZXItdW5zZWxlY3RlZC5hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFlLE1BQU0sb0JBQW9CLENBQUM7QUFHakUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFHL0U7SUFBMEQsZ0VBQTJCO0lBRXBGLDhDQUFZLFdBQXdCO2VBQ25DLGtCQUFNLFdBQVcsRUFBRSxzQ0FBc0MsQ0FBQztJQUMzRCxDQUFDOzs7O0lBRUQsNERBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLDJCQUEyQixDQUNyQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQ3JCLENBQUM7SUFDSCxDQUFDO0lBRUYsMkNBQUM7QUFBRCxDQUFDLEFBWkQsQ0FBMEQsY0FBYyxHQVl2RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFVuaXF1ZUZpbHRlclVuc2VsZWN0ZWRFdmVudCB9IGZyb20gJy4vdW5pcXVlLWZpbHRlci11bnNlbGVjdGVkLmV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgVW5pcXVlRmlsdGVyVW5zZWxlY3RlZEFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgQWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogU3RydWN0dXJlSWQpIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ1VuaXF1ZUZpbHRlclVuc2VsZWN0ZWRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHJldHVybiBuZXcgVW5pcXVlRmlsdGVyVW5zZWxlY3RlZEV2ZW50KFxuXHRcdFx0dGhpcy5nZXRBZ2dyZWdhdGVJZCgpXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=