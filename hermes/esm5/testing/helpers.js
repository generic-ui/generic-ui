/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @param {?} actualEvents
 * @param {?} expectedEvents
 * @return {?}
 */
export function assertDomainEvents(actualEvents, expectedEvents) {
    var e_1, _a;
    expect(actualEvents.length).toEqual(expectedEvents.length);
    var _loop_1 = function (actualEvent) {
        /** @type {?} */
        var expectedEvent = expectedEvents.find((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return event.equalsByType(actualEvent);
        }));
        expect(expectedEvent).toBeDefined();
        expect(actualEvent.equalsByType(expectedEvent)).toBeTruthy('Event type should be equal');
        // expect(actualEvent.aggregateId).toEqual(expectedEvent.aggregateId, 'Events aggregateId should be the same');
        expect(actualEvent.getPayload()).toEqual(expectedEvent.getPayload(), 'Events payload should be the same');
    };
    try {
        for (var actualEvents_1 = tslib_1.__values(actualEvents), actualEvents_1_1 = actualEvents_1.next(); !actualEvents_1_1.done; actualEvents_1_1 = actualEvents_1.next()) {
            var actualEvent = actualEvents_1_1.value;
            _loop_1(actualEvent);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (actualEvents_1_1 && !actualEvents_1_1.done && (_a = actualEvents_1.return)) _a.call(actualEvents_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
/**
 * @param {?} actualEvents
 * @param {?} expectedEvents
 * @return {?}
 */
export function assertAggregateEvents(actualEvents, expectedEvents) {
    var e_2, _a;
    expect(actualEvents.length).toEqual(expectedEvents.length, 'Aggregate events');
    var _loop_2 = function (actualEvent) {
        /** @type {?} */
        var expectedEvent = expectedEvents.find((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return event.equals(actualEvent);
        }));
        expect(expectedEvent).toBeDefined();
    };
    try {
        for (var actualEvents_2 = tslib_1.__values(actualEvents), actualEvents_2_1 = actualEvents_2.next(); !actualEvents_2_1.done; actualEvents_2_1 = actualEvents_2.next()) {
            var actualEvent = actualEvents_2_1.value;
            _loop_2(actualEvent);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (actualEvents_2_1 && !actualEvents_2_1.done && (_a = actualEvents_2.return)) _a.call(actualEvents_2);
        }
        finally { if (e_2) throw e_2.error; }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbInRlc3RpbmcvaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsTUFBTSxVQUFVLGtCQUFrQixDQUFDLFlBQXdDLEVBQUUsY0FBa0M7O0lBRTlHLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQzs0QkFFbEQsV0FBVzs7WUFFYixhQUFhLEdBQUcsY0FBYyxDQUFDLElBQUk7Ozs7UUFBQyxVQUFDLEtBQWtCO1lBQzVELE9BQU8sS0FBSyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4QyxDQUFDLEVBQUM7UUFFRixNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUN6RiwrR0FBK0c7UUFDL0csTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLEVBQUUsbUNBQW1DLENBQUMsQ0FBQzs7O1FBVDNHLEtBQXdCLElBQUEsaUJBQUEsaUJBQUEsWUFBWSxDQUFBLDBDQUFBO1lBQS9CLElBQUksV0FBVyx5QkFBQTtvQkFBWCxXQUFXO1NBVW5COzs7Ozs7Ozs7QUFFRixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUscUJBQXFCLENBQUMsWUFBMkMsRUFBRSxjQUFxQzs7SUFFdkgsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDOzRCQUV0RSxXQUFXOztZQUViLGFBQWEsR0FBRyxjQUFjLENBQUMsSUFBSTs7OztRQUFDLFVBQUMsS0FBcUI7WUFDL0QsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsRUFBQztRQUVGLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7O1FBTnJDLEtBQXdCLElBQUEsaUJBQUEsaUJBQUEsWUFBWSxDQUFBLDBDQUFBO1lBQS9CLElBQUksV0FBVyx5QkFBQTtvQkFBWCxXQUFXO1NBT25COzs7Ozs7Ozs7QUFDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9hZ2dyZWdhdGUvYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudCc7XG5cbmRlY2xhcmUgdmFyIGV4cGVjdDogYW55O1xuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0RG9tYWluRXZlbnRzKGFjdHVhbEV2ZW50czogUmVhZG9ubHlBcnJheTxEb21haW5FdmVudD4sIGV4cGVjdGVkRXZlbnRzOiBBcnJheTxEb21haW5FdmVudD4pOiB2b2lkIHtcblxuXHRleHBlY3QoYWN0dWFsRXZlbnRzLmxlbmd0aCkudG9FcXVhbChleHBlY3RlZEV2ZW50cy5sZW5ndGgpO1xuXG5cdGZvciAobGV0IGFjdHVhbEV2ZW50IG9mIGFjdHVhbEV2ZW50cykge1xuXG5cdFx0Y29uc3QgZXhwZWN0ZWRFdmVudCA9IGV4cGVjdGVkRXZlbnRzLmZpbmQoKGV2ZW50OiBEb21haW5FdmVudCkgPT4ge1xuXHRcdFx0cmV0dXJuIGV2ZW50LmVxdWFsc0J5VHlwZShhY3R1YWxFdmVudCk7XG5cdFx0fSk7XG5cblx0XHRleHBlY3QoZXhwZWN0ZWRFdmVudCkudG9CZURlZmluZWQoKTtcblx0XHRleHBlY3QoYWN0dWFsRXZlbnQuZXF1YWxzQnlUeXBlKGV4cGVjdGVkRXZlbnQpKS50b0JlVHJ1dGh5KCdFdmVudCB0eXBlIHNob3VsZCBiZSBlcXVhbCcpO1xuXHRcdC8vIGV4cGVjdChhY3R1YWxFdmVudC5hZ2dyZWdhdGVJZCkudG9FcXVhbChleHBlY3RlZEV2ZW50LmFnZ3JlZ2F0ZUlkLCAnRXZlbnRzIGFnZ3JlZ2F0ZUlkIHNob3VsZCBiZSB0aGUgc2FtZScpO1xuXHRcdGV4cGVjdChhY3R1YWxFdmVudC5nZXRQYXlsb2FkKCkpLnRvRXF1YWwoZXhwZWN0ZWRFdmVudC5nZXRQYXlsb2FkKCksICdFdmVudHMgcGF5bG9hZCBzaG91bGQgYmUgdGhlIHNhbWUnKTtcblx0fVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRBZ2dyZWdhdGVFdmVudHMoYWN0dWFsRXZlbnRzOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PiwgZXhwZWN0ZWRFdmVudHM6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50Pik6IHZvaWQge1xuXG5cdGV4cGVjdChhY3R1YWxFdmVudHMubGVuZ3RoKS50b0VxdWFsKGV4cGVjdGVkRXZlbnRzLmxlbmd0aCwgJ0FnZ3JlZ2F0ZSBldmVudHMnKTtcblxuXHRmb3IgKGxldCBhY3R1YWxFdmVudCBvZiBhY3R1YWxFdmVudHMpIHtcblxuXHRcdGNvbnN0IGV4cGVjdGVkRXZlbnQgPSBleHBlY3RlZEV2ZW50cy5maW5kKChldmVudDogQWdncmVnYXRlRXZlbnQpID0+IHtcblx0XHRcdHJldHVybiBldmVudC5lcXVhbHMoYWN0dWFsRXZlbnQpO1xuXHRcdH0pO1xuXG5cdFx0ZXhwZWN0KGV4cGVjdGVkRXZlbnQpLnRvQmVEZWZpbmVkKCk7XG5cdH1cbn1cbiJdfQ==