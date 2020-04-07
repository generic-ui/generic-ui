/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainEvent } from '@generic-ui/hermes';
export class StructureAggregationEnabledSetEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} enabled
     */
    constructor(aggregateId, enabled) {
        super(aggregateId, 'StructureAggregationEnabledSetEvent');
        this.enabled = enabled;
    }
    /**
     * @return {?}
     */
    isEnabled() {
        return this.enabled;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureAggregationEnabledSetEvent.prototype.enabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0aW9uLWVuYWJsZWQtc2V0LmV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvYWdncmVnYXRpb24vc2V0L3N0cnVjdHVyZS5hZ2dyZWdhdGlvbi1lbmFibGVkLXNldC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBS2pELE1BQU0sT0FBTyxtQ0FBb0MsU0FBUSxXQUFXOzs7OztJQUVuRSxZQUFZLFdBQXdCLEVBQ2hCLE9BQWdCO1FBQ25DLEtBQUssQ0FBQyxXQUFXLEVBQUUscUNBQXFDLENBQUMsQ0FBQztRQUR2QyxZQUFPLEdBQVAsT0FBTyxDQUFTO0lBRXBDLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Q0FFRDs7Ozs7O0lBUkcsc0RBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS5pZCc7XG5cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUFnZ3JlZ2F0aW9uRW5hYmxlZFNldEV2ZW50IGV4dGVuZHMgRG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbmFibGVkOiBib29sZWFuKSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdTdHJ1Y3R1cmVBZ2dyZWdhdGlvbkVuYWJsZWRTZXRFdmVudCcpO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxufVxuIl19