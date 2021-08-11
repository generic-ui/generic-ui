/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @template I
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
        expect(actualEvent.equalsByType(expectedEvent)).toBeTruthy();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbInRlc3RpbmcvaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQU9BLE1BQU0sVUFBVSxrQkFBa0IsQ0FBd0IsWUFBMkMsRUFBRSxjQUFxQzs7SUFFM0ksTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzRCQUVsRCxXQUFXOztZQUViLGFBQWEsR0FBRyxjQUFjLENBQUMsSUFBSTs7OztRQUFDLFVBQUMsS0FBcUI7WUFDL0QsT0FBTyxLQUFLLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBQztRQUVGLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzdELCtHQUErRztRQUMvRyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDOzs7UUFUM0csS0FBd0IsSUFBQSxpQkFBQSxpQkFBQSxZQUFZLENBQUEsMENBQUE7WUFBL0IsSUFBSSxXQUFXLHlCQUFBO29CQUFYLFdBQVc7U0FVbkI7Ozs7Ozs7OztBQUVGLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUscUJBQXFCLENBQXdCLFlBQThDLEVBQUUsY0FBd0M7O0lBRXBKLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsa0JBQWtCLENBQUMsQ0FBQzs0QkFFdEUsV0FBVzs7WUFFYixhQUFhLEdBQUcsY0FBYyxDQUFDLElBQUk7Ozs7UUFBQyxVQUFDLEtBQXdCO1lBQ2xFLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsQyxDQUFDLEVBQUM7UUFFRixNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7OztRQU5yQyxLQUF3QixJQUFBLGlCQUFBLGlCQUFBLFlBQVksQ0FBQSwwQ0FBQTtZQUEvQixJQUFJLFdBQVcseUJBQUE7b0JBQVgsV0FBVztTQU9uQjs7Ozs7Ozs7O0FBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vY29yZS9kb21haW4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vY29yZS9kb21haW4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4uL2NvcmUvZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudCc7XG5cbmRlY2xhcmUgdmFyIGV4cGVjdDogYW55O1xuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0RG9tYWluRXZlbnRzPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZD4oYWN0dWFsRXZlbnRzOiBSZWFkb25seUFycmF5PERvbWFpbkV2ZW50PEk+PiwgZXhwZWN0ZWRFdmVudHM6IEFycmF5PERvbWFpbkV2ZW50PEk+Pik6IHZvaWQge1xuXG5cdGV4cGVjdChhY3R1YWxFdmVudHMubGVuZ3RoKS50b0VxdWFsKGV4cGVjdGVkRXZlbnRzLmxlbmd0aCk7XG5cblx0Zm9yIChsZXQgYWN0dWFsRXZlbnQgb2YgYWN0dWFsRXZlbnRzKSB7XG5cblx0XHRjb25zdCBleHBlY3RlZEV2ZW50ID0gZXhwZWN0ZWRFdmVudHMuZmluZCgoZXZlbnQ6IERvbWFpbkV2ZW50PEk+KSA9PiB7XG5cdFx0XHRyZXR1cm4gZXZlbnQuZXF1YWxzQnlUeXBlKGFjdHVhbEV2ZW50KTtcblx0XHR9KTtcblxuXHRcdGV4cGVjdChleHBlY3RlZEV2ZW50KS50b0JlRGVmaW5lZCgpO1xuXHRcdGV4cGVjdChhY3R1YWxFdmVudC5lcXVhbHNCeVR5cGUoZXhwZWN0ZWRFdmVudCkpLnRvQmVUcnV0aHkoKTtcblx0XHQvLyBleHBlY3QoYWN0dWFsRXZlbnQuYWdncmVnYXRlSWQpLnRvRXF1YWwoZXhwZWN0ZWRFdmVudC5hZ2dyZWdhdGVJZCwgJ0V2ZW50cyBhZ2dyZWdhdGVJZCBzaG91bGQgYmUgdGhlIHNhbWUnKTtcblx0XHRleHBlY3QoYWN0dWFsRXZlbnQuZ2V0UGF5bG9hZCgpKS50b0VxdWFsKGV4cGVjdGVkRXZlbnQuZ2V0UGF5bG9hZCgpLCAnRXZlbnRzIHBheWxvYWQgc2hvdWxkIGJlIHRoZSBzYW1lJyk7XG5cdH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0QWdncmVnYXRlRXZlbnRzPFQgZXh0ZW5kcyBBZ2dyZWdhdGVJZD4oYWN0dWFsRXZlbnRzOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFQ+PiwgZXhwZWN0ZWRFdmVudHM6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFQ+Pik6IHZvaWQge1xuXG5cdGV4cGVjdChhY3R1YWxFdmVudHMubGVuZ3RoKS50b0VxdWFsKGV4cGVjdGVkRXZlbnRzLmxlbmd0aCwgJ0FnZ3JlZ2F0ZSBldmVudHMnKTtcblxuXHRmb3IgKGxldCBhY3R1YWxFdmVudCBvZiBhY3R1YWxFdmVudHMpIHtcblxuXHRcdGNvbnN0IGV4cGVjdGVkRXZlbnQgPSBleHBlY3RlZEV2ZW50cy5maW5kKChldmVudDogQWdncmVnYXRlRXZlbnQ8VD4pID0+IHtcblx0XHRcdHJldHVybiBldmVudC5lcXVhbHMoYWN0dWFsRXZlbnQpO1xuXHRcdH0pO1xuXG5cdFx0ZXhwZWN0KGV4cGVjdGVkRXZlbnQpLnRvQmVEZWZpbmVkKCk7XG5cdH1cbn1cbiJdfQ==