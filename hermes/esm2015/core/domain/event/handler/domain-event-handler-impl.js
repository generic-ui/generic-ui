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
        const types = [];
        for (const event of this.events) {
            /** @type {?} */
            const instance = this.createDomainEventInstance(event);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LWhhbmRsZXItaW1wbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvcmUvZG9tYWluL2V2ZW50L2hhbmRsZXIvZG9tYWluLWV2ZW50LWhhbmRsZXItaW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFPQSxNQUFNLFVBQVUseUJBQXlCLENBQ3hDLGtCQUE0QztJQUU1QyxPQUFPLElBQUksc0JBQXNCLENBQU8sa0JBQWtCLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDOUYsQ0FBQzs7Ozs7O0FBR0QsTUFBTSxVQUFVLDhCQUE4QixDQUM3QyxrQkFBaUQ7SUFFakQsT0FBTyxJQUFJLHNCQUFzQixDQUFPLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFDN0YsQ0FBQzs7OztBQUdELE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBSWxDLFlBQTZCLGtCQUE0RSxFQUNyRixNQUFpQztRQUR4Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQTBEO1FBQ3JGLFdBQU0sR0FBTixNQUFNLENBQTJCO1FBQ3BELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBUTtRQUNuQixJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQWdCO1FBQ3pCLE9BQU8sTUFBTSxDQUFDLElBQUk7Ozs7UUFBQyxDQUFDLEtBQVEsRUFBRSxFQUFFO1lBQy9CLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRTtnQkFDNUMsT0FBTyxJQUFJLEtBQUssS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3hDLENBQUMsRUFBQyxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7OztJQUVPLHNCQUFzQjs7Y0FFdkIsS0FBSyxHQUFHLEVBQUU7UUFFaEIsS0FBSyxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFOztrQkFDMUIsUUFBUSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUM7WUFDdEQsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztTQUN0QztRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7Ozs7O0lBRU8seUJBQXlCLENBQUMsU0FBNkI7O2NBQ3hELElBQUksR0FBZ0IsRUFBRTs7Y0FDM0IsY0FBYyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUU5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFeEMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBQSxTQUFTLEVBQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0NBRUQ7Ozs7OztJQXhDQSw0Q0FBMkM7Ozs7O0lBRS9CLG9EQUE2Rjs7Ozs7SUFDdEcsd0NBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi9kb21haW4tZXZlbnQuaGFuZGxlcic7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICcuLi9kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgTXVsdGlEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICcuL211bHRpLWRvbWFpbi1ldmVudC5oYW5kbGVyJztcbmltcG9ydCB7IERvbWFpbkV2ZW50VHlwZSB9IGZyb20gJy4vZG9tYWluLWV2ZW50LXR5cGUnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBkb21haW5FdmVudEhhbmRsZXJGYWN0b3J5PEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgRSBleHRlbmRzIERvbWFpbkV2ZW50PEk+Pihcblx0ZG9tYWluRXZlbnRIYW5kbGVyOiBEb21haW5FdmVudEhhbmRsZXI8SSwgRT5cbik6IERvbWFpbkV2ZW50SGFuZGxlckltcGw8SSwgRT4ge1xuXHRyZXR1cm4gbmV3IERvbWFpbkV2ZW50SGFuZGxlckltcGw8SSwgRT4oZG9tYWluRXZlbnRIYW5kbGVyLCBbZG9tYWluRXZlbnRIYW5kbGVyLmZvckV2ZW50KCldKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlEb21haW5FdmVudEhhbmRsZXJGYWN0b3J5PEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgRSBleHRlbmRzIERvbWFpbkV2ZW50PEk+Pihcblx0ZG9tYWluRXZlbnRIYW5kbGVyOiBNdWx0aURvbWFpbkV2ZW50SGFuZGxlcjxJLCBFPlxuKTogRG9tYWluRXZlbnRIYW5kbGVySW1wbDxJLCBFPiB7XG5cdHJldHVybiBuZXcgRG9tYWluRXZlbnRIYW5kbGVySW1wbDxJLCBFPihkb21haW5FdmVudEhhbmRsZXIsIGRvbWFpbkV2ZW50SGFuZGxlci5mb3JFdmVudHMoKSk7XG59XG5cblxuZXhwb3J0IGNsYXNzIERvbWFpbkV2ZW50SGFuZGxlckltcGw8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBFIGV4dGVuZHMgRG9tYWluRXZlbnQ8ST4+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGV2ZW50VHlwZXM6IEFycmF5PHN0cmluZz47XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudEhhbmRsZXI6IERvbWFpbkV2ZW50SGFuZGxlcjxJLCBFPiB8IE11bHRpRG9tYWluRXZlbnRIYW5kbGVyPEksIEU+LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGV2ZW50czogQXJyYXk8RG9tYWluRXZlbnRUeXBlPEU+Pikge1xuXHRcdHRoaXMuZXZlbnRUeXBlcyA9IHRoaXMuY3JlYXRlRG9tYWluRXZlbnRUeXBlcygpO1xuXHR9XG5cblx0aGFuZGxlRXZlbnQoZXZlbnQ6IEUpOiB2b2lkIHtcblx0XHR0aGlzLmRvbWFpbkV2ZW50SGFuZGxlci5oYW5kbGUoZXZlbnQpO1xuXHR9XG5cblx0Zm9yRXZlbnRzKGV2ZW50czogQXJyYXk8RT4pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZXZlbnRzLnNvbWUoKGV2ZW50OiBFKSA9PiB7XG5cdFx0XHRyZXR1cm4gdGhpcy5ldmVudFR5cGVzLnNvbWUoKHR5cGU6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdHlwZSA9PT0gZXZlbnQuZ2V0TWVzc2FnZVR5cGUoKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVEb21haW5FdmVudFR5cGVzKCk6IEFycmF5PHN0cmluZz4ge1xuXG5cdFx0Y29uc3QgdHlwZXMgPSBbXTtcblxuXHRcdGZvciAoY29uc3QgZXZlbnQgb2YgdGhpcy5ldmVudHMpIHtcblx0XHRcdGNvbnN0IGluc3RhbmNlID0gdGhpcy5jcmVhdGVEb21haW5FdmVudEluc3RhbmNlKGV2ZW50KTtcblx0XHRcdHR5cGVzLnB1c2goaW5zdGFuY2UuZ2V0TWVzc2FnZVR5cGUoKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHR5cGVzO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVEb21haW5FdmVudEluc3RhbmNlKGV2ZW50VHlwZTogRG9tYWluRXZlbnRUeXBlPEU+KTogRSB7XG5cdFx0Y29uc3QgYXJnczogQXJyYXk8dm9pZD4gPSBbXSxcblx0XHRcdGFyZ3VtZW50TGVuZ3RoID0gZXZlbnRUeXBlLmNvbnN0cnVjdG9yLmxlbmd0aDtcblxuXHRcdGFyZ3MuZmlsbCh1bmRlZmluZWQsIDAsIGFyZ3VtZW50TGVuZ3RoKTtcblxuXHRcdHJldHVybiAobmV3IChldmVudFR5cGUgYXMgYW55KSguLi5hcmdzKSk7XG5cdH1cblxufVxuIl19