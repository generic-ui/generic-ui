/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template I
 * @param {?} actualEvents
 * @param {?} expectedEvents
 * @return {?}
 */
export function assertDomainEvents(actualEvents, expectedEvents) {
    expect(actualEvents.length).toEqual(expectedEvents.length);
    for (const actualEvent of actualEvents) {
        /** @type {?} */
        const expectedEvent = expectedEvents.find((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return event.equalsByType(actualEvent);
        }));
        expect(expectedEvent).toBeDefined();
        expect(actualEvent.equalsByType(expectedEvent)).toBeTruthy();
        // expect(actualEvent.aggregateId).toEqual(expectedEvent.aggregateId, 'Events aggregateId should be the same');
        expect(actualEvent.getPayload()).toEqual(expectedEvent.getPayload(), 'Events payload should be the same');
    }
}
/**
 * @template T
 * @param {?} actualEvents
 * @param {?} expectedEvents
 * @return {?}
 */
export function assertAggregateEvents(actualEvents, expectedEvents) {
    expect(actualEvents.length).toEqual(expectedEvents.length, 'Aggregate events');
    for (const actualEvent of actualEvents) {
        /** @type {?} */
        const expectedEvent = expectedEvents.find((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return event.equals(actualEvent);
        }));
        expect(expectedEvent).toBeDefined();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbInRlc3RpbmcvaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBT0EsTUFBTSxVQUFVLGtCQUFrQixDQUF3QixZQUEyQyxFQUFFLGNBQXFDO0lBRTNJLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUUzRCxLQUFLLE1BQU0sV0FBVyxJQUFJLFlBQVksRUFBRTs7Y0FFakMsYUFBYSxHQUFHLGNBQWMsQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxLQUFxQixFQUFFLEVBQUU7WUFDbkUsT0FBTyxLQUFLLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBQztRQUVGLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzdELCtHQUErRztRQUMvRyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO0tBQzFHO0FBRUYsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxxQkFBcUIsQ0FBd0IsWUFBOEMsRUFBRSxjQUF3QztJQUVwSixNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFFL0UsS0FBSyxNQUFNLFdBQVcsSUFBSSxZQUFZLEVBQUU7O2NBRWpDLGFBQWEsR0FBRyxjQUFjLENBQUMsSUFBSTs7OztRQUFDLENBQUMsS0FBd0IsRUFBRSxFQUFFO1lBQ3RFLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsQyxDQUFDLEVBQUM7UUFFRixNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDcEM7QUFDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi9jb3JlL2RvbWFpbi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi9jb3JlL2RvbWFpbi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi4vY29yZS9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50JztcblxuZGVjbGFyZSBjb25zdCBleHBlY3Q6IGFueTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydERvbWFpbkV2ZW50czxJIGV4dGVuZHMgQWdncmVnYXRlSWQ+KGFjdHVhbEV2ZW50czogUmVhZG9ubHlBcnJheTxEb21haW5FdmVudDxJPj4sIGV4cGVjdGVkRXZlbnRzOiBBcnJheTxEb21haW5FdmVudDxJPj4pOiB2b2lkIHtcblxuXHRleHBlY3QoYWN0dWFsRXZlbnRzLmxlbmd0aCkudG9FcXVhbChleHBlY3RlZEV2ZW50cy5sZW5ndGgpO1xuXG5cdGZvciAoY29uc3QgYWN0dWFsRXZlbnQgb2YgYWN0dWFsRXZlbnRzKSB7XG5cblx0XHRjb25zdCBleHBlY3RlZEV2ZW50ID0gZXhwZWN0ZWRFdmVudHMuZmluZCgoZXZlbnQ6IERvbWFpbkV2ZW50PEk+KSA9PiB7XG5cdFx0XHRyZXR1cm4gZXZlbnQuZXF1YWxzQnlUeXBlKGFjdHVhbEV2ZW50KTtcblx0XHR9KTtcblxuXHRcdGV4cGVjdChleHBlY3RlZEV2ZW50KS50b0JlRGVmaW5lZCgpO1xuXHRcdGV4cGVjdChhY3R1YWxFdmVudC5lcXVhbHNCeVR5cGUoZXhwZWN0ZWRFdmVudCkpLnRvQmVUcnV0aHkoKTtcblx0XHQvLyBleHBlY3QoYWN0dWFsRXZlbnQuYWdncmVnYXRlSWQpLnRvRXF1YWwoZXhwZWN0ZWRFdmVudC5hZ2dyZWdhdGVJZCwgJ0V2ZW50cyBhZ2dyZWdhdGVJZCBzaG91bGQgYmUgdGhlIHNhbWUnKTtcblx0XHRleHBlY3QoYWN0dWFsRXZlbnQuZ2V0UGF5bG9hZCgpKS50b0VxdWFsKGV4cGVjdGVkRXZlbnQuZ2V0UGF5bG9hZCgpLCAnRXZlbnRzIHBheWxvYWQgc2hvdWxkIGJlIHRoZSBzYW1lJyk7XG5cdH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0QWdncmVnYXRlRXZlbnRzPFQgZXh0ZW5kcyBBZ2dyZWdhdGVJZD4oYWN0dWFsRXZlbnRzOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFQ+PiwgZXhwZWN0ZWRFdmVudHM6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFQ+Pik6IHZvaWQge1xuXG5cdGV4cGVjdChhY3R1YWxFdmVudHMubGVuZ3RoKS50b0VxdWFsKGV4cGVjdGVkRXZlbnRzLmxlbmd0aCwgJ0FnZ3JlZ2F0ZSBldmVudHMnKTtcblxuXHRmb3IgKGNvbnN0IGFjdHVhbEV2ZW50IG9mIGFjdHVhbEV2ZW50cykge1xuXG5cdFx0Y29uc3QgZXhwZWN0ZWRFdmVudCA9IGV4cGVjdGVkRXZlbnRzLmZpbmQoKGV2ZW50OiBBZ2dyZWdhdGVFdmVudDxUPikgPT4ge1xuXHRcdFx0cmV0dXJuIGV2ZW50LmVxdWFscyhhY3R1YWxFdmVudCk7XG5cdFx0fSk7XG5cblx0XHRleHBlY3QoZXhwZWN0ZWRFdmVudCkudG9CZURlZmluZWQoKTtcblx0fVxufVxuIl19