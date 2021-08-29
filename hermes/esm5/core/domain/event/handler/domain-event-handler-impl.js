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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LWhhbmRsZXItaW1wbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvcmUvZG9tYWluL2V2ZW50L2hhbmRsZXIvZG9tYWluLWV2ZW50LWhhbmRsZXItaW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBT0EsTUFBTSxVQUFVLHlCQUF5QixDQUN4QyxrQkFBNEM7SUFFNUMsT0FBTyxJQUFJLHNCQUFzQixDQUFPLGtCQUFrQixFQUFFLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzlGLENBQUM7Ozs7OztBQUdELE1BQU0sVUFBVSw4QkFBOEIsQ0FDN0Msa0JBQWlEO0lBRWpELE9BQU8sSUFBSSxzQkFBc0IsQ0FBTyxrQkFBa0IsRUFBRSxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQzdGLENBQUM7Ozs7QUFHRDs7OztJQUlDLGdDQUE2QixrQkFBNEUsRUFDckYsTUFBaUM7UUFEeEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUEwRDtRQUNyRixXQUFNLEdBQU4sTUFBTSxDQUEyQjtRQUNwRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRUQsNENBQVc7Ozs7SUFBWCxVQUFZLEtBQVE7UUFDbkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7OztJQUVELDBDQUFTOzs7O0lBQVQsVUFBVSxNQUFnQjtRQUExQixpQkFNQztRQUxBLE9BQU8sTUFBTSxDQUFDLElBQUk7Ozs7UUFBQyxVQUFDLEtBQVE7WUFDM0IsT0FBTyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUk7Ozs7WUFBQyxVQUFDLElBQVk7Z0JBQ3hDLE9BQU8sSUFBSSxLQUFLLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTyx1REFBc0I7Ozs7SUFBOUI7OztZQUVPLEtBQUssR0FBRyxFQUFFOztZQUVoQixLQUFvQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQSxnQkFBQSw0QkFBRTtnQkFBNUIsSUFBTSxPQUFLLFdBQUE7O29CQUNULFFBQVEsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsT0FBSyxDQUFDO2dCQUN0RCxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO2FBQ3RDOzs7Ozs7Ozs7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVPLDBEQUF5Qjs7Ozs7SUFBakMsVUFBa0MsU0FBNkI7O1lBQ3hELElBQUksR0FBZ0IsRUFBRTs7WUFDM0IsY0FBYyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUU5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFeEMsT0FBTyxNQUFLLENBQUMsbUJBQUEsU0FBUyxFQUFPLENBQUMsWUFBbEIsQ0FBQyxtQkFBQSxTQUFTLEVBQU8sQ0FBQyw2QkFBSSxJQUFJLE1BQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUYsNkJBQUM7QUFBRCxDQUFDLEFBMUNELElBMENDOzs7Ozs7Ozs7O0lBeENBLDRDQUEyQzs7Ozs7SUFFL0Isb0RBQTZGOzs7OztJQUN0Ryx3Q0FBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICcuL2RvbWFpbi1ldmVudC5oYW5kbGVyJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4uL2RvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBNdWx0aURvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJy4vbXVsdGktZG9tYWluLWV2ZW50LmhhbmRsZXInO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRUeXBlIH0gZnJvbSAnLi9kb21haW4tZXZlbnQtdHlwZSc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRvbWFpbkV2ZW50SGFuZGxlckZhY3Rvcnk8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBFIGV4dGVuZHMgRG9tYWluRXZlbnQ8ST4+KFxuXHRkb21haW5FdmVudEhhbmRsZXI6IERvbWFpbkV2ZW50SGFuZGxlcjxJLCBFPlxuKTogRG9tYWluRXZlbnRIYW5kbGVySW1wbDxJLCBFPiB7XG5cdHJldHVybiBuZXcgRG9tYWluRXZlbnRIYW5kbGVySW1wbDxJLCBFPihkb21haW5FdmVudEhhbmRsZXIsIFtkb21haW5FdmVudEhhbmRsZXIuZm9yRXZlbnQoKV0pO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aURvbWFpbkV2ZW50SGFuZGxlckZhY3Rvcnk8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBFIGV4dGVuZHMgRG9tYWluRXZlbnQ8ST4+KFxuXHRkb21haW5FdmVudEhhbmRsZXI6IE11bHRpRG9tYWluRXZlbnRIYW5kbGVyPEksIEU+XG4pOiBEb21haW5FdmVudEhhbmRsZXJJbXBsPEksIEU+IHtcblx0cmV0dXJuIG5ldyBEb21haW5FdmVudEhhbmRsZXJJbXBsPEksIEU+KGRvbWFpbkV2ZW50SGFuZGxlciwgZG9tYWluRXZlbnRIYW5kbGVyLmZvckV2ZW50cygpKTtcbn1cblxuXG5leHBvcnQgY2xhc3MgRG9tYWluRXZlbnRIYW5kbGVySW1wbDxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEUgZXh0ZW5kcyBEb21haW5FdmVudDxJPj4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZXZlbnRUeXBlczogQXJyYXk8c3RyaW5nPjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50SGFuZGxlcjogRG9tYWluRXZlbnRIYW5kbGVyPEksIEU+IHwgTXVsdGlEb21haW5FdmVudEhhbmRsZXI8SSwgRT4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZXZlbnRzOiBBcnJheTxEb21haW5FdmVudFR5cGU8RT4+KSB7XG5cdFx0dGhpcy5ldmVudFR5cGVzID0gdGhpcy5jcmVhdGVEb21haW5FdmVudFR5cGVzKCk7XG5cdH1cblxuXHRoYW5kbGVFdmVudChldmVudDogRSk6IHZvaWQge1xuXHRcdHRoaXMuZG9tYWluRXZlbnRIYW5kbGVyLmhhbmRsZShldmVudCk7XG5cdH1cblxuXHRmb3JFdmVudHMoZXZlbnRzOiBBcnJheTxFPik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBldmVudHMuc29tZSgoZXZlbnQ6IEUpID0+IHtcblx0XHRcdHJldHVybiB0aGlzLmV2ZW50VHlwZXMuc29tZSgodHlwZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdHJldHVybiB0eXBlID09PSBldmVudC5nZXRNZXNzYWdlVHlwZSgpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZURvbWFpbkV2ZW50VHlwZXMoKTogQXJyYXk8c3RyaW5nPiB7XG5cblx0XHRjb25zdCB0eXBlcyA9IFtdO1xuXG5cdFx0Zm9yIChjb25zdCBldmVudCBvZiB0aGlzLmV2ZW50cykge1xuXHRcdFx0Y29uc3QgaW5zdGFuY2UgPSB0aGlzLmNyZWF0ZURvbWFpbkV2ZW50SW5zdGFuY2UoZXZlbnQpO1xuXHRcdFx0dHlwZXMucHVzaChpbnN0YW5jZS5nZXRNZXNzYWdlVHlwZSgpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHlwZXM7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZURvbWFpbkV2ZW50SW5zdGFuY2UoZXZlbnRUeXBlOiBEb21haW5FdmVudFR5cGU8RT4pOiBFIHtcblx0XHRjb25zdCBhcmdzOiBBcnJheTx2b2lkPiA9IFtdLFxuXHRcdFx0YXJndW1lbnRMZW5ndGggPSBldmVudFR5cGUuY29uc3RydWN0b3IubGVuZ3RoO1xuXG5cdFx0YXJncy5maWxsKHVuZGVmaW5lZCwgMCwgYXJndW1lbnRMZW5ndGgpO1xuXG5cdFx0cmV0dXJuIChuZXcgKGV2ZW50VHlwZSBhcyBhbnkpKC4uLmFyZ3MpKTtcblx0fVxuXG59XG4iXX0=