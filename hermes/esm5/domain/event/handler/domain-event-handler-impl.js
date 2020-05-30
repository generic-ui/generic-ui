/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var /**
 * @template I, E
 */
DomainEventHandlerImpl = /** @class */ (function () {
    function DomainEventHandlerImpl(domainEventHandler, events) {
        this.domainEventHandler = domainEventHandler;
        this.events = events;
        this.eventTypes = this.createDomainEventTypes();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    DomainEventHandlerImpl.prototype.handleEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.domainEventHandler.handle(event);
    };
    /**
     * @param {?} events
     * @return {?}
     */
    DomainEventHandlerImpl.prototype.forEvents = /**
     * @param {?} events
     * @return {?}
     */
    function (events) {
        var _this = this;
        return events.some((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return _this.eventTypes.some((/**
             * @param {?} type
             * @return {?}
             */
            function (type) {
                return type === event.getMessageType();
            }));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    DomainEventHandlerImpl.prototype.createDomainEventTypes = /**
     * @private
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var types = [];
        try {
            for (var _b = tslib_1.__values(this.events), _c = _b.next(); !_c.done; _c = _b.next()) {
                var event_1 = _c.value;
                /** @type {?} */
                var instance = this.createDomainEventInstance(event_1);
                types.push(instance.getMessageType());
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return types;
    };
    /**
     * @private
     * @param {?} eventType
     * @return {?}
     */
    DomainEventHandlerImpl.prototype.createDomainEventInstance = /**
     * @private
     * @param {?} eventType
     * @return {?}
     */
    function (eventType) {
        /** @type {?} */
        var args = [];
        /** @type {?} */
        var argumentLength = eventType.constructor.length;
        args.fill(undefined, 0, argumentLength);
        return (new (((/** @type {?} */ (eventType))).bind.apply(((/** @type {?} */ (eventType))), tslib_1.__spread([void 0], args)))());
    };
    return DomainEventHandlerImpl;
}());
/**
 * @template I, E
 */
export { DomainEventHandlerImpl };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LWhhbmRsZXItaW1wbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9ldmVudC9oYW5kbGVyL2RvbWFpbi1ldmVudC1oYW5kbGVyLWltcGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQVFBLE1BQU0sVUFBVSx5QkFBeUIsQ0FDeEMsa0JBQTRDO0lBRTVDLE9BQU8sSUFBSSxzQkFBc0IsQ0FBTyxrQkFBa0IsRUFBRSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM5RixDQUFDOzs7Ozs7QUFHRCxNQUFNLFVBQVUsOEJBQThCLENBQzdDLGtCQUFpRDtJQUVqRCxPQUFPLElBQUksc0JBQXNCLENBQU8sa0JBQWtCLEVBQUUsa0JBQWtCLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUM3RixDQUFDOzs7O0FBR0Q7Ozs7SUFJQyxnQ0FBNkIsa0JBQTRFLEVBQ3JGLE1BQXNCO1FBRGIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUEwRDtRQUNyRixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN6QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRUQsNENBQVc7Ozs7SUFBWCxVQUFZLEtBQVE7UUFDbkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7OztJQUVELDBDQUFTOzs7O0lBQVQsVUFBVSxNQUFnQjtRQUExQixpQkFNQztRQUxBLE9BQU8sTUFBTSxDQUFDLElBQUk7Ozs7UUFBQyxVQUFDLEtBQVE7WUFDM0IsT0FBTyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUk7Ozs7WUFBQyxVQUFDLElBQVk7Z0JBQ3hDLE9BQU8sSUFBSSxLQUFLLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTyx1REFBc0I7Ozs7SUFBOUI7OztZQUVLLEtBQUssR0FBRyxFQUFFOztZQUVkLEtBQWlCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsTUFBTSxDQUFBLGdCQUFBLDRCQUFFO2dCQUExQixJQUFJLE9BQUssV0FBQTs7b0JBQ1IsUUFBUSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFLLENBQUM7Z0JBQ3BELEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7YUFDdEM7Ozs7Ozs7OztRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7Ozs7O0lBRU8sMERBQXlCOzs7OztJQUFqQyxVQUFrQyxTQUFrQjs7WUFDN0MsSUFBSSxHQUFnQixFQUFFOztZQUMzQixjQUFjLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNO1FBRTlDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUV4QyxPQUFPLE1BQUssQ0FBQyxtQkFBQSxTQUFTLEVBQU8sQ0FBQyxZQUFsQixDQUFDLG1CQUFBLFNBQVMsRUFBTyxDQUFDLDZCQUFJLElBQUksTUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFRiw2QkFBQztBQUFELENBQUMsQUExQ0QsSUEwQ0M7Ozs7Ozs7Ozs7SUF4Q0EsNENBQTJDOzs7OztJQUUvQixvREFBNkY7Ozs7O0lBQ3RHLHdDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi9kb21haW4tZXZlbnQuaGFuZGxlcic7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4uL2RvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBNdWx0aURvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJy4vbXVsdGktZG9tYWluLWV2ZW50LmhhbmRsZXInO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBkb21haW5FdmVudEhhbmRsZXJGYWN0b3J5PEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgRSBleHRlbmRzIERvbWFpbkV2ZW50PEk+Pihcblx0ZG9tYWluRXZlbnRIYW5kbGVyOiBEb21haW5FdmVudEhhbmRsZXI8SSwgRT5cbik6IERvbWFpbkV2ZW50SGFuZGxlckltcGw8SSwgRT4ge1xuXHRyZXR1cm4gbmV3IERvbWFpbkV2ZW50SGFuZGxlckltcGw8SSwgRT4oZG9tYWluRXZlbnRIYW5kbGVyLCBbZG9tYWluRXZlbnRIYW5kbGVyLmZvckV2ZW50KCldKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlEb21haW5FdmVudEhhbmRsZXJGYWN0b3J5PEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgRSBleHRlbmRzIERvbWFpbkV2ZW50PEk+Pihcblx0ZG9tYWluRXZlbnRIYW5kbGVyOiBNdWx0aURvbWFpbkV2ZW50SGFuZGxlcjxJLCBFPlxuKTogRG9tYWluRXZlbnRIYW5kbGVySW1wbDxJLCBFPiB7XG5cdHJldHVybiBuZXcgRG9tYWluRXZlbnRIYW5kbGVySW1wbDxJLCBFPihkb21haW5FdmVudEhhbmRsZXIsIGRvbWFpbkV2ZW50SGFuZGxlci5mb3JFdmVudHMoKSk7XG59XG5cblxuZXhwb3J0IGNsYXNzIERvbWFpbkV2ZW50SGFuZGxlckltcGw8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBFIGV4dGVuZHMgRG9tYWluRXZlbnQ8ST4+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGV2ZW50VHlwZXM6IEFycmF5PHN0cmluZz47XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudEhhbmRsZXI6IERvbWFpbkV2ZW50SGFuZGxlcjxJLCBFPiB8IE11bHRpRG9tYWluRXZlbnRIYW5kbGVyPEksIEU+LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGV2ZW50czogQXJyYXk8VHlwZTxFPj4pIHtcblx0XHR0aGlzLmV2ZW50VHlwZXMgPSB0aGlzLmNyZWF0ZURvbWFpbkV2ZW50VHlwZXMoKTtcblx0fVxuXG5cdGhhbmRsZUV2ZW50KGV2ZW50OiBFKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudEhhbmRsZXIuaGFuZGxlKGV2ZW50KTtcblx0fVxuXG5cdGZvckV2ZW50cyhldmVudHM6IEFycmF5PEU+KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGV2ZW50cy5zb21lKChldmVudDogRSkgPT4ge1xuXHRcdFx0cmV0dXJuIHRoaXMuZXZlbnRUeXBlcy5zb21lKCh0eXBlOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0cmV0dXJuIHR5cGUgPT09IGV2ZW50LmdldE1lc3NhZ2VUeXBlKCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlRG9tYWluRXZlbnRUeXBlcygpOiBBcnJheTxzdHJpbmc+IHtcblxuXHRcdGxldCB0eXBlcyA9IFtdO1xuXG5cdFx0Zm9yKGxldCBldmVudCBvZiB0aGlzLmV2ZW50cykge1xuXHRcdFx0bGV0IGluc3RhbmNlID0gdGhpcy5jcmVhdGVEb21haW5FdmVudEluc3RhbmNlKGV2ZW50KTtcblx0XHRcdHR5cGVzLnB1c2goaW5zdGFuY2UuZ2V0TWVzc2FnZVR5cGUoKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHR5cGVzO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVEb21haW5FdmVudEluc3RhbmNlKGV2ZW50VHlwZTogVHlwZTxFPik6IEUge1xuXHRcdGNvbnN0IGFyZ3M6IEFycmF5PHZvaWQ+ID0gW10sXG5cdFx0XHRhcmd1bWVudExlbmd0aCA9IGV2ZW50VHlwZS5jb25zdHJ1Y3Rvci5sZW5ndGg7XG5cblx0XHRhcmdzLmZpbGwodW5kZWZpbmVkLCAwLCBhcmd1bWVudExlbmd0aCk7XG5cblx0XHRyZXR1cm4gKG5ldyAoZXZlbnRUeXBlIGFzIGFueSkoLi4uYXJncykpO1xuXHR9XG5cbn1cbiJdfQ==