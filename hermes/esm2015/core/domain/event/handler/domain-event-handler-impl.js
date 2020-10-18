/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template I, E
 * @param {?} domainEventHandler
 * @return {?}
 */
export function domainEventHandlerFactory(domainEventHandler) {
    return new DomainEventHandlerImpl(domainEventHandler, [domainEventHandler.forEvent()]);
}
/**
 * @template I, E
 * @param {?} domainEventHandler
 * @return {?}
 */
export function multiDomainEventHandlerFactory(domainEventHandler) {
    return new DomainEventHandlerImpl(domainEventHandler, domainEventHandler.forEvents());
}
/**
 * @template I, E
 */
export class DomainEventHandlerImpl {
    /**
     * @param {?} domainEventHandler
     * @param {?} events
     */
    constructor(domainEventHandler, events) {
        this.domainEventHandler = domainEventHandler;
        this.events = events;
        this.eventTypes = this.createDomainEventTypes();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleEvent(event) {
        this.domainEventHandler.handle(event);
    }
    /**
     * @param {?} events
     * @return {?}
     */
    forEvents(events) {
        return events.some((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return this.eventTypes.some((/**
             * @param {?} type
             * @return {?}
             */
            (type) => {
                return type === event.getMessageType();
            }));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    createDomainEventTypes() {
        /** @type {?} */
        let types = [];
        for (let event of this.events) {
            /** @type {?} */
            let instance = this.createDomainEventInstance(event);
            types.push(instance.getMessageType());
        }
        return types;
    }
    /**
     * @private
     * @param {?} eventType
     * @return {?}
     */
    createDomainEventInstance(eventType) {
        /** @type {?} */
        const args = [];
        /** @type {?} */
        const argumentLength = eventType.constructor.length;
        args.fill(undefined, 0, argumentLength);
        return (new ((/** @type {?} */ (eventType)))(...args));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    DomainEventHandlerImpl.prototype.eventTypes;
    /**
     * @type {?}
     * @private
     */
    DomainEventHandlerImpl.prototype.domainEventHandler;
    /**
     * @type {?}
     * @private
     */
    DomainEventHandlerImpl.prototype.events;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LWhhbmRsZXItaW1wbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvcmUvZG9tYWluL2V2ZW50L2hhbmRsZXIvZG9tYWluLWV2ZW50LWhhbmRsZXItaW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFPQSxNQUFNLFVBQVUseUJBQXlCLENBQ3hDLGtCQUE0QztJQUU1QyxPQUFPLElBQUksc0JBQXNCLENBQU8sa0JBQWtCLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDOUYsQ0FBQzs7Ozs7O0FBR0QsTUFBTSxVQUFVLDhCQUE4QixDQUM3QyxrQkFBaUQ7SUFFakQsT0FBTyxJQUFJLHNCQUFzQixDQUFPLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFDN0YsQ0FBQzs7OztBQUdELE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBSWxDLFlBQTZCLGtCQUE0RSxFQUNyRixNQUFpQztRQUR4Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQTBEO1FBQ3JGLFdBQU0sR0FBTixNQUFNLENBQTJCO1FBQ3BELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBUTtRQUNuQixJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQWdCO1FBQ3pCLE9BQU8sTUFBTSxDQUFDLElBQUk7Ozs7UUFBQyxDQUFDLEtBQVEsRUFBRSxFQUFFO1lBQy9CLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRTtnQkFDNUMsT0FBTyxJQUFJLEtBQUssS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3hDLENBQUMsRUFBQyxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7OztJQUVPLHNCQUFzQjs7WUFFekIsS0FBSyxHQUFHLEVBQUU7UUFFZCxLQUFLLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7O2dCQUMxQixRQUFRLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQztZQUNwRCxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1NBQ3RDO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOzs7Ozs7SUFFTyx5QkFBeUIsQ0FBQyxTQUE2Qjs7Y0FDeEQsSUFBSSxHQUFnQixFQUFFOztjQUMzQixjQUFjLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNO1FBRTlDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUV4QyxPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUFBLFNBQVMsRUFBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Q0FFRDs7Ozs7O0lBeENBLDRDQUEyQzs7Ozs7SUFFL0Isb0RBQTZGOzs7OztJQUN0Ryx3Q0FBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICcuL2RvbWFpbi1ldmVudC5oYW5kbGVyJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4uL2RvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBNdWx0aURvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJy4vbXVsdGktZG9tYWluLWV2ZW50LmhhbmRsZXInO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRUeXBlIH0gZnJvbSAnLi9kb21haW4tZXZlbnQtdHlwZSc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRvbWFpbkV2ZW50SGFuZGxlckZhY3Rvcnk8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBFIGV4dGVuZHMgRG9tYWluRXZlbnQ8ST4+KFxuXHRkb21haW5FdmVudEhhbmRsZXI6IERvbWFpbkV2ZW50SGFuZGxlcjxJLCBFPlxuKTogRG9tYWluRXZlbnRIYW5kbGVySW1wbDxJLCBFPiB7XG5cdHJldHVybiBuZXcgRG9tYWluRXZlbnRIYW5kbGVySW1wbDxJLCBFPihkb21haW5FdmVudEhhbmRsZXIsIFtkb21haW5FdmVudEhhbmRsZXIuZm9yRXZlbnQoKV0pO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aURvbWFpbkV2ZW50SGFuZGxlckZhY3Rvcnk8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBFIGV4dGVuZHMgRG9tYWluRXZlbnQ8ST4+KFxuXHRkb21haW5FdmVudEhhbmRsZXI6IE11bHRpRG9tYWluRXZlbnRIYW5kbGVyPEksIEU+XG4pOiBEb21haW5FdmVudEhhbmRsZXJJbXBsPEksIEU+IHtcblx0cmV0dXJuIG5ldyBEb21haW5FdmVudEhhbmRsZXJJbXBsPEksIEU+KGRvbWFpbkV2ZW50SGFuZGxlciwgZG9tYWluRXZlbnRIYW5kbGVyLmZvckV2ZW50cygpKTtcbn1cblxuXG5leHBvcnQgY2xhc3MgRG9tYWluRXZlbnRIYW5kbGVySW1wbDxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEUgZXh0ZW5kcyBEb21haW5FdmVudDxJPj4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZXZlbnRUeXBlczogQXJyYXk8c3RyaW5nPjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50SGFuZGxlcjogRG9tYWluRXZlbnRIYW5kbGVyPEksIEU+IHwgTXVsdGlEb21haW5FdmVudEhhbmRsZXI8SSwgRT4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZXZlbnRzOiBBcnJheTxEb21haW5FdmVudFR5cGU8RT4+KSB7XG5cdFx0dGhpcy5ldmVudFR5cGVzID0gdGhpcy5jcmVhdGVEb21haW5FdmVudFR5cGVzKCk7XG5cdH1cblxuXHRoYW5kbGVFdmVudChldmVudDogRSk6IHZvaWQge1xuXHRcdHRoaXMuZG9tYWluRXZlbnRIYW5kbGVyLmhhbmRsZShldmVudCk7XG5cdH1cblxuXHRmb3JFdmVudHMoZXZlbnRzOiBBcnJheTxFPik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBldmVudHMuc29tZSgoZXZlbnQ6IEUpID0+IHtcblx0XHRcdHJldHVybiB0aGlzLmV2ZW50VHlwZXMuc29tZSgodHlwZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdHJldHVybiB0eXBlID09PSBldmVudC5nZXRNZXNzYWdlVHlwZSgpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZURvbWFpbkV2ZW50VHlwZXMoKTogQXJyYXk8c3RyaW5nPiB7XG5cblx0XHRsZXQgdHlwZXMgPSBbXTtcblxuXHRcdGZvciAobGV0IGV2ZW50IG9mIHRoaXMuZXZlbnRzKSB7XG5cdFx0XHRsZXQgaW5zdGFuY2UgPSB0aGlzLmNyZWF0ZURvbWFpbkV2ZW50SW5zdGFuY2UoZXZlbnQpO1xuXHRcdFx0dHlwZXMucHVzaChpbnN0YW5jZS5nZXRNZXNzYWdlVHlwZSgpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHlwZXM7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZURvbWFpbkV2ZW50SW5zdGFuY2UoZXZlbnRUeXBlOiBEb21haW5FdmVudFR5cGU8RT4pOiBFIHtcblx0XHRjb25zdCBhcmdzOiBBcnJheTx2b2lkPiA9IFtdLFxuXHRcdFx0YXJndW1lbnRMZW5ndGggPSBldmVudFR5cGUuY29uc3RydWN0b3IubGVuZ3RoO1xuXG5cdFx0YXJncy5maWxsKHVuZGVmaW5lZCwgMCwgYXJndW1lbnRMZW5ndGgpO1xuXG5cdFx0cmV0dXJuIChuZXcgKGV2ZW50VHlwZSBhcyBhbnkpKC4uLmFyZ3MpKTtcblx0fVxuXG59XG4iXX0=