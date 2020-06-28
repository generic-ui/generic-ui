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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LWhhbmRsZXItaW1wbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9ldmVudC9oYW5kbGVyL2RvbWFpbi1ldmVudC1oYW5kbGVyLWltcGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU9BLE1BQU0sVUFBVSx5QkFBeUIsQ0FDeEMsa0JBQTRDO0lBRTVDLE9BQU8sSUFBSSxzQkFBc0IsQ0FBTyxrQkFBa0IsRUFBRSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM5RixDQUFDOzs7Ozs7QUFHRCxNQUFNLFVBQVUsOEJBQThCLENBQzdDLGtCQUFpRDtJQUVqRCxPQUFPLElBQUksc0JBQXNCLENBQU8sa0JBQWtCLEVBQUUsa0JBQWtCLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUM3RixDQUFDOzs7O0FBR0Q7Ozs7SUFJQyxnQ0FBNkIsa0JBQTRFLEVBQ3JGLE1BQWlDO1FBRHhCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBMEQ7UUFDckYsV0FBTSxHQUFOLE1BQU0sQ0FBMkI7UUFDcEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUVELDRDQUFXOzs7O0lBQVgsVUFBWSxLQUFRO1FBQ25CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFFRCwwQ0FBUzs7OztJQUFULFVBQVUsTUFBZ0I7UUFBMUIsaUJBTUM7UUFMQSxPQUFPLE1BQU0sQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQyxLQUFRO1lBQzNCLE9BQU8sS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQyxJQUFZO2dCQUN4QyxPQUFPLElBQUksS0FBSyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDeEMsQ0FBQyxFQUFDLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRU8sdURBQXNCOzs7O0lBQTlCOzs7WUFFSyxLQUFLLEdBQUcsRUFBRTs7WUFFZCxLQUFrQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQSxnQkFBQSw0QkFBRTtnQkFBMUIsSUFBSSxPQUFLLFdBQUE7O29CQUNULFFBQVEsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsT0FBSyxDQUFDO2dCQUNwRCxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO2FBQ3RDOzs7Ozs7Ozs7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVPLDBEQUF5Qjs7Ozs7SUFBakMsVUFBa0MsU0FBNkI7O1lBQ3hELElBQUksR0FBZ0IsRUFBRTs7WUFDM0IsY0FBYyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUU5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFeEMsT0FBTyxNQUFLLENBQUMsbUJBQUEsU0FBUyxFQUFPLENBQUMsWUFBbEIsQ0FBQyxtQkFBQSxTQUFTLEVBQU8sQ0FBQyw2QkFBSSxJQUFJLE1BQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUYsNkJBQUM7QUFBRCxDQUFDLEFBMUNELElBMENDOzs7Ozs7Ozs7O0lBeENBLDRDQUEyQzs7Ozs7SUFFL0Isb0RBQTZGOzs7OztJQUN0Ryx3Q0FBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICcuL2RvbWFpbi1ldmVudC5oYW5kbGVyJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi4vZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IE11bHRpRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi9tdWx0aS1kb21haW4tZXZlbnQuaGFuZGxlcic7XG5pbXBvcnQgeyBEb21haW5FdmVudFR5cGUgfSBmcm9tICcuL2RvbWFpbi1ldmVudC10eXBlJztcblxuXG5leHBvcnQgZnVuY3Rpb24gZG9tYWluRXZlbnRIYW5kbGVyRmFjdG9yeTxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEUgZXh0ZW5kcyBEb21haW5FdmVudDxJPj4oXG5cdGRvbWFpbkV2ZW50SGFuZGxlcjogRG9tYWluRXZlbnRIYW5kbGVyPEksIEU+XG4pOiBEb21haW5FdmVudEhhbmRsZXJJbXBsPEksIEU+IHtcblx0cmV0dXJuIG5ldyBEb21haW5FdmVudEhhbmRsZXJJbXBsPEksIEU+KGRvbWFpbkV2ZW50SGFuZGxlciwgW2RvbWFpbkV2ZW50SGFuZGxlci5mb3JFdmVudCgpXSk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpRG9tYWluRXZlbnRIYW5kbGVyRmFjdG9yeTxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEUgZXh0ZW5kcyBEb21haW5FdmVudDxJPj4oXG5cdGRvbWFpbkV2ZW50SGFuZGxlcjogTXVsdGlEb21haW5FdmVudEhhbmRsZXI8SSwgRT5cbik6IERvbWFpbkV2ZW50SGFuZGxlckltcGw8SSwgRT4ge1xuXHRyZXR1cm4gbmV3IERvbWFpbkV2ZW50SGFuZGxlckltcGw8SSwgRT4oZG9tYWluRXZlbnRIYW5kbGVyLCBkb21haW5FdmVudEhhbmRsZXIuZm9yRXZlbnRzKCkpO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBEb21haW5FdmVudEhhbmRsZXJJbXBsPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgRSBleHRlbmRzIERvbWFpbkV2ZW50PEk+PiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBldmVudFR5cGVzOiBBcnJheTxzdHJpbmc+O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRIYW5kbGVyOiBEb21haW5FdmVudEhhbmRsZXI8SSwgRT4gfCBNdWx0aURvbWFpbkV2ZW50SGFuZGxlcjxJLCBFPixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBldmVudHM6IEFycmF5PERvbWFpbkV2ZW50VHlwZTxFPj4pIHtcblx0XHR0aGlzLmV2ZW50VHlwZXMgPSB0aGlzLmNyZWF0ZURvbWFpbkV2ZW50VHlwZXMoKTtcblx0fVxuXG5cdGhhbmRsZUV2ZW50KGV2ZW50OiBFKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudEhhbmRsZXIuaGFuZGxlKGV2ZW50KTtcblx0fVxuXG5cdGZvckV2ZW50cyhldmVudHM6IEFycmF5PEU+KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGV2ZW50cy5zb21lKChldmVudDogRSkgPT4ge1xuXHRcdFx0cmV0dXJuIHRoaXMuZXZlbnRUeXBlcy5zb21lKCh0eXBlOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0cmV0dXJuIHR5cGUgPT09IGV2ZW50LmdldE1lc3NhZ2VUeXBlKCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlRG9tYWluRXZlbnRUeXBlcygpOiBBcnJheTxzdHJpbmc+IHtcblxuXHRcdGxldCB0eXBlcyA9IFtdO1xuXG5cdFx0Zm9yIChsZXQgZXZlbnQgb2YgdGhpcy5ldmVudHMpIHtcblx0XHRcdGxldCBpbnN0YW5jZSA9IHRoaXMuY3JlYXRlRG9tYWluRXZlbnRJbnN0YW5jZShldmVudCk7XG5cdFx0XHR0eXBlcy5wdXNoKGluc3RhbmNlLmdldE1lc3NhZ2VUeXBlKCkpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0eXBlcztcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlRG9tYWluRXZlbnRJbnN0YW5jZShldmVudFR5cGU6IERvbWFpbkV2ZW50VHlwZTxFPik6IEUge1xuXHRcdGNvbnN0IGFyZ3M6IEFycmF5PHZvaWQ+ID0gW10sXG5cdFx0XHRhcmd1bWVudExlbmd0aCA9IGV2ZW50VHlwZS5jb25zdHJ1Y3Rvci5sZW5ndGg7XG5cblx0XHRhcmdzLmZpbGwodW5kZWZpbmVkLCAwLCBhcmd1bWVudExlbmd0aCk7XG5cblx0XHRyZXR1cm4gKG5ldyAoZXZlbnRUeXBlIGFzIGFueSkoLi4uYXJncykpO1xuXHR9XG5cbn1cbiJdfQ==