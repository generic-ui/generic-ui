/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
/** @type {?} */
export const StructureSummariesEnabledSetEventName = 'StructureSummariesEnabledSetEvent';
export class StructureSummariesEnabledSetEvent extends StructureDomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} enabled
     */
    constructor(aggregateId, enabled) {
        super(aggregateId, enabled, StructureSummariesEnabledSetEventName);
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
    StructureSummariesEnabledSetEvent.prototype.enabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1lbmFibGVkLXNldC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3N1bW1hcmllcy9jb3JlL2RvbWFpbi9zZXQvc3RydWN0dXJlLnN1bW1hcmllcy1lbmFibGVkLXNldC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBRXRGLE1BQU0sT0FBTyxxQ0FBcUMsR0FBRyxtQ0FBbUM7QUFFeEYsTUFBTSxPQUFPLGlDQUFrQyxTQUFRLG9CQUFvQjs7Ozs7SUFFMUUsWUFBWSxXQUF3QixFQUNoQixPQUFnQjtRQUNuQyxLQUFLLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxxQ0FBcUMsQ0FBQyxDQUFDO1FBRGhELFlBQU8sR0FBUCxPQUFPLENBQVM7SUFFcEMsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztDQUVEOzs7Ozs7SUFSRyxvREFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEb21haW5FdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5kb21haW4tZXZlbnQnO1xuXG5leHBvcnQgY29uc3QgU3RydWN0dXJlU3VtbWFyaWVzRW5hYmxlZFNldEV2ZW50TmFtZSA9ICdTdHJ1Y3R1cmVTdW1tYXJpZXNFbmFibGVkU2V0RXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU3VtbWFyaWVzRW5hYmxlZFNldEV2ZW50IGV4dGVuZHMgU3RydWN0dXJlRG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbmFibGVkOiBib29sZWFuKSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsIGVuYWJsZWQsIFN0cnVjdHVyZVN1bW1hcmllc0VuYWJsZWRTZXRFdmVudE5hbWUpO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxufVxuIl19