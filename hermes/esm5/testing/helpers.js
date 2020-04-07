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
 * @template T
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbInRlc3RpbmcvaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBT0EsTUFBTSxVQUFVLGtCQUFrQixDQUFDLFlBQXdDLEVBQUUsY0FBa0M7O0lBRTlHLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQzs0QkFFbEQsV0FBVzs7WUFFYixhQUFhLEdBQUcsY0FBYyxDQUFDLElBQUk7Ozs7UUFBQyxVQUFDLEtBQWtCO1lBQzVELE9BQU8sS0FBSyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4QyxDQUFDLEVBQUM7UUFFRixNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUN6RiwrR0FBK0c7UUFDL0csTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLEVBQUUsbUNBQW1DLENBQUMsQ0FBQzs7O1FBVDNHLEtBQXdCLElBQUEsaUJBQUEsaUJBQUEsWUFBWSxDQUFBLDBDQUFBO1lBQS9CLElBQUksV0FBVyx5QkFBQTtvQkFBWCxXQUFXO1NBVW5COzs7Ozs7Ozs7QUFFRixDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLHFCQUFxQixDQUF3QixZQUE4QyxFQUFFLGNBQXdDOztJQUVwSixNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLGtCQUFrQixDQUFDLENBQUM7NEJBRXRFLFdBQVc7O1lBRWIsYUFBYSxHQUFHLGNBQWMsQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQyxLQUF3QjtZQUNsRSxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbEMsQ0FBQyxFQUFDO1FBRUYsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDOzs7UUFOckMsS0FBd0IsSUFBQSxpQkFBQSxpQkFBQSxZQUFZLENBQUEsMENBQUE7WUFBL0IsSUFBSSxXQUFXLHlCQUFBO29CQUFYLFdBQVc7U0FPbkI7Ozs7Ozs7OztBQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uL2RvbWFpbi9hZ2dyZWdhdGUtaWQnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50JztcblxuZGVjbGFyZSB2YXIgZXhwZWN0OiBhbnk7XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnREb21haW5FdmVudHMoYWN0dWFsRXZlbnRzOiBSZWFkb25seUFycmF5PERvbWFpbkV2ZW50PiwgZXhwZWN0ZWRFdmVudHM6IEFycmF5PERvbWFpbkV2ZW50Pik6IHZvaWQge1xuXG5cdGV4cGVjdChhY3R1YWxFdmVudHMubGVuZ3RoKS50b0VxdWFsKGV4cGVjdGVkRXZlbnRzLmxlbmd0aCk7XG5cblx0Zm9yIChsZXQgYWN0dWFsRXZlbnQgb2YgYWN0dWFsRXZlbnRzKSB7XG5cblx0XHRjb25zdCBleHBlY3RlZEV2ZW50ID0gZXhwZWN0ZWRFdmVudHMuZmluZCgoZXZlbnQ6IERvbWFpbkV2ZW50KSA9PiB7XG5cdFx0XHRyZXR1cm4gZXZlbnQuZXF1YWxzQnlUeXBlKGFjdHVhbEV2ZW50KTtcblx0XHR9KTtcblxuXHRcdGV4cGVjdChleHBlY3RlZEV2ZW50KS50b0JlRGVmaW5lZCgpO1xuXHRcdGV4cGVjdChhY3R1YWxFdmVudC5lcXVhbHNCeVR5cGUoZXhwZWN0ZWRFdmVudCkpLnRvQmVUcnV0aHkoJ0V2ZW50IHR5cGUgc2hvdWxkIGJlIGVxdWFsJyk7XG5cdFx0Ly8gZXhwZWN0KGFjdHVhbEV2ZW50LmFnZ3JlZ2F0ZUlkKS50b0VxdWFsKGV4cGVjdGVkRXZlbnQuYWdncmVnYXRlSWQsICdFdmVudHMgYWdncmVnYXRlSWQgc2hvdWxkIGJlIHRoZSBzYW1lJyk7XG5cdFx0ZXhwZWN0KGFjdHVhbEV2ZW50LmdldFBheWxvYWQoKSkudG9FcXVhbChleHBlY3RlZEV2ZW50LmdldFBheWxvYWQoKSwgJ0V2ZW50cyBwYXlsb2FkIHNob3VsZCBiZSB0aGUgc2FtZScpO1xuXHR9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydEFnZ3JlZ2F0ZUV2ZW50czxUIGV4dGVuZHMgQWdncmVnYXRlSWQ+KGFjdHVhbEV2ZW50czogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxUPj4sIGV4cGVjdGVkRXZlbnRzOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxUPj4pOiB2b2lkIHtcblxuXHRleHBlY3QoYWN0dWFsRXZlbnRzLmxlbmd0aCkudG9FcXVhbChleHBlY3RlZEV2ZW50cy5sZW5ndGgsICdBZ2dyZWdhdGUgZXZlbnRzJyk7XG5cblx0Zm9yIChsZXQgYWN0dWFsRXZlbnQgb2YgYWN0dWFsRXZlbnRzKSB7XG5cblx0XHRjb25zdCBleHBlY3RlZEV2ZW50ID0gZXhwZWN0ZWRFdmVudHMuZmluZCgoZXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50PFQ+KSA9PiB7XG5cdFx0XHRyZXR1cm4gZXZlbnQuZXF1YWxzKGFjdHVhbEV2ZW50KTtcblx0XHR9KTtcblxuXHRcdGV4cGVjdChleHBlY3RlZEV2ZW50KS50b0JlRGVmaW5lZCgpO1xuXHR9XG59XG4iXX0=