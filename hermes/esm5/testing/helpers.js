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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbInRlc3RpbmcvaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQU9BLE1BQU0sVUFBVSxrQkFBa0IsQ0FBd0IsWUFBMkMsRUFBRSxjQUFxQzs7SUFFM0ksTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzRCQUVoRCxXQUFXOztZQUVmLGFBQWEsR0FBRyxjQUFjLENBQUMsSUFBSTs7OztRQUFDLFVBQUMsS0FBcUI7WUFDL0QsT0FBTyxLQUFLLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBQztRQUVGLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzdELCtHQUErRztRQUMvRyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDOzs7UUFUM0csS0FBMEIsSUFBQSxpQkFBQSxpQkFBQSxZQUFZLENBQUEsMENBQUE7WUFBakMsSUFBTSxXQUFXLHlCQUFBO29CQUFYLFdBQVc7U0FVckI7Ozs7Ozs7OztBQUVGLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUscUJBQXFCLENBQXdCLFlBQThDLEVBQUUsY0FBd0M7O0lBRXBKLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsa0JBQWtCLENBQUMsQ0FBQzs0QkFFcEUsV0FBVzs7WUFFZixhQUFhLEdBQUcsY0FBYyxDQUFDLElBQUk7Ozs7UUFBQyxVQUFDLEtBQXdCO1lBQ2xFLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsQyxDQUFDLEVBQUM7UUFFRixNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7OztRQU5yQyxLQUEwQixJQUFBLGlCQUFBLGlCQUFBLFlBQVksQ0FBQSwwQ0FBQTtZQUFqQyxJQUFNLFdBQVcseUJBQUE7b0JBQVgsV0FBVztTQU9yQjs7Ozs7Ozs7O0FBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vY29yZS9kb21haW4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vY29yZS9kb21haW4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4uL2NvcmUvZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudCc7XG5cbmRlY2xhcmUgY29uc3QgZXhwZWN0OiBhbnk7XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnREb21haW5FdmVudHM8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkPihhY3R1YWxFdmVudHM6IFJlYWRvbmx5QXJyYXk8RG9tYWluRXZlbnQ8ST4+LCBleHBlY3RlZEV2ZW50czogQXJyYXk8RG9tYWluRXZlbnQ8ST4+KTogdm9pZCB7XG5cblx0ZXhwZWN0KGFjdHVhbEV2ZW50cy5sZW5ndGgpLnRvRXF1YWwoZXhwZWN0ZWRFdmVudHMubGVuZ3RoKTtcblxuXHRmb3IgKGNvbnN0IGFjdHVhbEV2ZW50IG9mIGFjdHVhbEV2ZW50cykge1xuXG5cdFx0Y29uc3QgZXhwZWN0ZWRFdmVudCA9IGV4cGVjdGVkRXZlbnRzLmZpbmQoKGV2ZW50OiBEb21haW5FdmVudDxJPikgPT4ge1xuXHRcdFx0cmV0dXJuIGV2ZW50LmVxdWFsc0J5VHlwZShhY3R1YWxFdmVudCk7XG5cdFx0fSk7XG5cblx0XHRleHBlY3QoZXhwZWN0ZWRFdmVudCkudG9CZURlZmluZWQoKTtcblx0XHRleHBlY3QoYWN0dWFsRXZlbnQuZXF1YWxzQnlUeXBlKGV4cGVjdGVkRXZlbnQpKS50b0JlVHJ1dGh5KCk7XG5cdFx0Ly8gZXhwZWN0KGFjdHVhbEV2ZW50LmFnZ3JlZ2F0ZUlkKS50b0VxdWFsKGV4cGVjdGVkRXZlbnQuYWdncmVnYXRlSWQsICdFdmVudHMgYWdncmVnYXRlSWQgc2hvdWxkIGJlIHRoZSBzYW1lJyk7XG5cdFx0ZXhwZWN0KGFjdHVhbEV2ZW50LmdldFBheWxvYWQoKSkudG9FcXVhbChleHBlY3RlZEV2ZW50LmdldFBheWxvYWQoKSwgJ0V2ZW50cyBwYXlsb2FkIHNob3VsZCBiZSB0aGUgc2FtZScpO1xuXHR9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydEFnZ3JlZ2F0ZUV2ZW50czxUIGV4dGVuZHMgQWdncmVnYXRlSWQ+KGFjdHVhbEV2ZW50czogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxUPj4sIGV4cGVjdGVkRXZlbnRzOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxUPj4pOiB2b2lkIHtcblxuXHRleHBlY3QoYWN0dWFsRXZlbnRzLmxlbmd0aCkudG9FcXVhbChleHBlY3RlZEV2ZW50cy5sZW5ndGgsICdBZ2dyZWdhdGUgZXZlbnRzJyk7XG5cblx0Zm9yIChjb25zdCBhY3R1YWxFdmVudCBvZiBhY3R1YWxFdmVudHMpIHtcblxuXHRcdGNvbnN0IGV4cGVjdGVkRXZlbnQgPSBleHBlY3RlZEV2ZW50cy5maW5kKChldmVudDogQWdncmVnYXRlRXZlbnQ8VD4pID0+IHtcblx0XHRcdHJldHVybiBldmVudC5lcXVhbHMoYWN0dWFsRXZlbnQpO1xuXHRcdH0pO1xuXG5cdFx0ZXhwZWN0KGV4cGVjdGVkRXZlbnQpLnRvQmVEZWZpbmVkKCk7XG5cdH1cbn1cbiJdfQ==