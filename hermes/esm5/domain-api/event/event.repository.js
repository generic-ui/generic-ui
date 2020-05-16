/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { filter } from 'rxjs/operators';
/**
 * @abstract
 * @template R, I
 */
var /**
 * @abstract
 * @template R, I
 */
EventRepository = /** @class */ (function () {
    function EventRepository(domainEventBus) {
        this.domainEventBus = domainEventBus;
    }
    /**
     * @protected
     * @param {?} aggregateId
     * @param {?} eventType
     * @return {?}
     */
    EventRepository.prototype.onEvent = /**
     * @protected
     * @param {?} aggregateId
     * @param {?} eventType
     * @return {?}
     */
    function (aggregateId, eventType) {
        return this.domainEventBus
            .ofEvent((/** @type {?} */ (eventType)))
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getAggregateId().toString() === aggregateId.toString(); })));
    };
    return EventRepository;
}());
/**
 * @abstract
 * @template R, I
 */
export { EventRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    EventRepository.prototype.domainEventBus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi1hcGkvZXZlbnQvZXZlbnQucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLE1BQU0sRUFBTyxNQUFNLGdCQUFnQixDQUFDOzs7OztBQU83Qzs7Ozs7SUFFQyx5QkFBdUMsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQUcsQ0FBQzs7Ozs7OztJQUUvRCxpQ0FBTzs7Ozs7O0lBQWpCLFVBQWtCLFdBQWMsRUFBRSxTQUErQjtRQUNoRSxPQUFPLElBQUksQ0FBQyxjQUFjO2FBQ3BCLE9BQU8sQ0FDUCxtQkFBQSxTQUFTLEVBQU8sQ0FDaEI7YUFDQSxJQUFJLENBQ0osTUFBTTs7OztRQUFDLFVBQUMsS0FBK0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQTVELENBQTRELEVBQUMsQ0FDekcsQ0FBQztJQUNSLENBQUM7SUFDRixzQkFBQztBQUFELENBQUMsQUFiRCxJQWFDOzs7Ozs7Ozs7OztJQVhzQix5Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi9yZWFkL3JlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBEb21haW5FdmVudEJ1cyB9IGZyb20gJy4uLy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuYnVzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEV2ZW50UmVwb3NpdG9yeTxSIGV4dGVuZHMgUmVhZE1vZGVsUm9vdElkLCBJIGV4dGVuZHMgQWdncmVnYXRlSWQ+IHtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMpIHt9XG5cblx0cHJvdGVjdGVkIG9uRXZlbnQoYWdncmVnYXRlSWQ6IFIsIGV2ZW50VHlwZTogVHlwZTxEb21haW5FdmVudDxJPj4pOiBPYnNlcnZhYmxlPERvbWFpbkV2ZW50PEk+PiB7XG5cdFx0cmV0dXJuIHRoaXMuZG9tYWluRXZlbnRCdXNcblx0XHRcdFx0ICAgLm9mRXZlbnQoXG5cdFx0XHRcdFx0ICAgZXZlbnRUeXBlIGFzIGFueVxuXHRcdFx0XHQgICApXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoZXZlbnQ6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPikgPT4gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKS50b1N0cmluZygpID09PSBhZ2dyZWdhdGVJZC50b1N0cmluZygpKVxuXHRcdFx0XHQgICApO1xuXHR9XG59XG4iXX0=