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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LWhhbmRsZXItaW1wbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9ldmVudC9oYW5kbGVyL2RvbWFpbi1ldmVudC1oYW5kbGVyLWltcGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBUUEsTUFBTSxVQUFVLHlCQUF5QixDQUN4QyxrQkFBNEM7SUFFNUMsT0FBTyxJQUFJLHNCQUFzQixDQUFPLGtCQUFrQixFQUFFLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzlGLENBQUM7Ozs7OztBQUdELE1BQU0sVUFBVSw4QkFBOEIsQ0FDN0Msa0JBQWlEO0lBRWpELE9BQU8sSUFBSSxzQkFBc0IsQ0FBTyxrQkFBa0IsRUFBRSxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQzdGLENBQUM7Ozs7QUFHRCxNQUFNLE9BQU8sc0JBQXNCOzs7OztJQUlsQyxZQUE2QixrQkFBNEUsRUFDckYsTUFBc0I7UUFEYix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQTBEO1FBQ3JGLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBUTtRQUNuQixJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQWdCO1FBQ3pCLE9BQU8sTUFBTSxDQUFDLElBQUk7Ozs7UUFBQyxDQUFDLEtBQVEsRUFBRSxFQUFFO1lBQy9CLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRTtnQkFDNUMsT0FBTyxJQUFJLEtBQUssS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3hDLENBQUMsRUFBQyxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7OztJQUVPLHNCQUFzQjs7WUFFekIsS0FBSyxHQUFHLEVBQUU7UUFFZCxLQUFJLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7O2dCQUN6QixRQUFRLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQztZQUNwRCxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1NBQ3RDO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOzs7Ozs7SUFFTyx5QkFBeUIsQ0FBQyxTQUFrQjs7Y0FDN0MsSUFBSSxHQUFnQixFQUFFOztjQUMzQixjQUFjLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNO1FBRTlDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUV4QyxPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUFBLFNBQVMsRUFBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Q0FFRDs7Ozs7O0lBeENBLDRDQUEyQzs7Ozs7SUFFL0Isb0RBQTZGOzs7OztJQUN0Ryx3Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJy4vZG9tYWluLWV2ZW50LmhhbmRsZXInO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi8uLi9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICcuLi9kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgTXVsdGlEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICcuL211bHRpLWRvbWFpbi1ldmVudC5oYW5kbGVyJztcblxuXG5leHBvcnQgZnVuY3Rpb24gZG9tYWluRXZlbnRIYW5kbGVyRmFjdG9yeTxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEUgZXh0ZW5kcyBEb21haW5FdmVudDxJPj4oXG5cdGRvbWFpbkV2ZW50SGFuZGxlcjogRG9tYWluRXZlbnRIYW5kbGVyPEksIEU+XG4pOiBEb21haW5FdmVudEhhbmRsZXJJbXBsPEksIEU+IHtcblx0cmV0dXJuIG5ldyBEb21haW5FdmVudEhhbmRsZXJJbXBsPEksIEU+KGRvbWFpbkV2ZW50SGFuZGxlciwgW2RvbWFpbkV2ZW50SGFuZGxlci5mb3JFdmVudCgpXSk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpRG9tYWluRXZlbnRIYW5kbGVyRmFjdG9yeTxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEUgZXh0ZW5kcyBEb21haW5FdmVudDxJPj4oXG5cdGRvbWFpbkV2ZW50SGFuZGxlcjogTXVsdGlEb21haW5FdmVudEhhbmRsZXI8SSwgRT5cbik6IERvbWFpbkV2ZW50SGFuZGxlckltcGw8SSwgRT4ge1xuXHRyZXR1cm4gbmV3IERvbWFpbkV2ZW50SGFuZGxlckltcGw8SSwgRT4oZG9tYWluRXZlbnRIYW5kbGVyLCBkb21haW5FdmVudEhhbmRsZXIuZm9yRXZlbnRzKCkpO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBEb21haW5FdmVudEhhbmRsZXJJbXBsPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgRSBleHRlbmRzIERvbWFpbkV2ZW50PEk+PiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBldmVudFR5cGVzOiBBcnJheTxzdHJpbmc+O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRIYW5kbGVyOiBEb21haW5FdmVudEhhbmRsZXI8SSwgRT4gfCBNdWx0aURvbWFpbkV2ZW50SGFuZGxlcjxJLCBFPixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBldmVudHM6IEFycmF5PFR5cGU8RT4+KSB7XG5cdFx0dGhpcy5ldmVudFR5cGVzID0gdGhpcy5jcmVhdGVEb21haW5FdmVudFR5cGVzKCk7XG5cdH1cblxuXHRoYW5kbGVFdmVudChldmVudDogRSk6IHZvaWQge1xuXHRcdHRoaXMuZG9tYWluRXZlbnRIYW5kbGVyLmhhbmRsZShldmVudCk7XG5cdH1cblxuXHRmb3JFdmVudHMoZXZlbnRzOiBBcnJheTxFPik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBldmVudHMuc29tZSgoZXZlbnQ6IEUpID0+IHtcblx0XHRcdHJldHVybiB0aGlzLmV2ZW50VHlwZXMuc29tZSgodHlwZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdHJldHVybiB0eXBlID09PSBldmVudC5nZXRNZXNzYWdlVHlwZSgpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZURvbWFpbkV2ZW50VHlwZXMoKTogQXJyYXk8c3RyaW5nPiB7XG5cblx0XHRsZXQgdHlwZXMgPSBbXTtcblxuXHRcdGZvcihsZXQgZXZlbnQgb2YgdGhpcy5ldmVudHMpIHtcblx0XHRcdGxldCBpbnN0YW5jZSA9IHRoaXMuY3JlYXRlRG9tYWluRXZlbnRJbnN0YW5jZShldmVudCk7XG5cdFx0XHR0eXBlcy5wdXNoKGluc3RhbmNlLmdldE1lc3NhZ2VUeXBlKCkpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0eXBlcztcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlRG9tYWluRXZlbnRJbnN0YW5jZShldmVudFR5cGU6IFR5cGU8RT4pOiBFIHtcblx0XHRjb25zdCBhcmdzOiBBcnJheTx2b2lkPiA9IFtdLFxuXHRcdFx0YXJndW1lbnRMZW5ndGggPSBldmVudFR5cGUuY29uc3RydWN0b3IubGVuZ3RoO1xuXG5cdFx0YXJncy5maWxsKHVuZGVmaW5lZCwgMCwgYXJndW1lbnRMZW5ndGgpO1xuXG5cdFx0cmV0dXJuIChuZXcgKGV2ZW50VHlwZSBhcyBhbnkpKC4uLmFyZ3MpKTtcblx0fVxuXG59XG4iXX0=