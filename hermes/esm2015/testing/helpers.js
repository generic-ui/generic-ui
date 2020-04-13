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
    for (let actualEvent of actualEvents) {
        /** @type {?} */
        const expectedEvent = expectedEvents.find((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return event.equalsByType(actualEvent);
        }));
        expect(expectedEvent).toBeDefined();
        expect(actualEvent.equalsByType(expectedEvent)).toBeTruthy('Event type should be equal');
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
    for (let actualEvent of actualEvents) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbInRlc3RpbmcvaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBT0EsTUFBTSxVQUFVLGtCQUFrQixDQUF3QixZQUEyQyxFQUFFLGNBQXFDO0lBRTNJLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUUzRCxLQUFLLElBQUksV0FBVyxJQUFJLFlBQVksRUFBRTs7Y0FFL0IsYUFBYSxHQUFHLGNBQWMsQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxLQUFxQixFQUFFLEVBQUU7WUFDbkUsT0FBTyxLQUFLLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBQztRQUVGLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQ3pGLCtHQUErRztRQUMvRyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO0tBQzFHO0FBRUYsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxxQkFBcUIsQ0FBd0IsWUFBOEMsRUFBRSxjQUF3QztJQUVwSixNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFFL0UsS0FBSyxJQUFJLFdBQVcsSUFBSSxZQUFZLEVBQUU7O2NBRS9CLGFBQWEsR0FBRyxjQUFjLENBQUMsSUFBSTs7OztRQUFDLENBQUMsS0FBd0IsRUFBRSxFQUFFO1lBQ3RFLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsQyxDQUFDLEVBQUM7UUFFRixNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDcEM7QUFDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi9kb21haW4vYWdncmVnYXRlLWlkJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9hZ2dyZWdhdGUvYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudCc7XG5cbmRlY2xhcmUgdmFyIGV4cGVjdDogYW55O1xuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0RG9tYWluRXZlbnRzPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZD4oYWN0dWFsRXZlbnRzOiBSZWFkb25seUFycmF5PERvbWFpbkV2ZW50PEk+PiwgZXhwZWN0ZWRFdmVudHM6IEFycmF5PERvbWFpbkV2ZW50PEk+Pik6IHZvaWQge1xuXG5cdGV4cGVjdChhY3R1YWxFdmVudHMubGVuZ3RoKS50b0VxdWFsKGV4cGVjdGVkRXZlbnRzLmxlbmd0aCk7XG5cblx0Zm9yIChsZXQgYWN0dWFsRXZlbnQgb2YgYWN0dWFsRXZlbnRzKSB7XG5cblx0XHRjb25zdCBleHBlY3RlZEV2ZW50ID0gZXhwZWN0ZWRFdmVudHMuZmluZCgoZXZlbnQ6IERvbWFpbkV2ZW50PEk+KSA9PiB7XG5cdFx0XHRyZXR1cm4gZXZlbnQuZXF1YWxzQnlUeXBlKGFjdHVhbEV2ZW50KTtcblx0XHR9KTtcblxuXHRcdGV4cGVjdChleHBlY3RlZEV2ZW50KS50b0JlRGVmaW5lZCgpO1xuXHRcdGV4cGVjdChhY3R1YWxFdmVudC5lcXVhbHNCeVR5cGUoZXhwZWN0ZWRFdmVudCkpLnRvQmVUcnV0aHkoJ0V2ZW50IHR5cGUgc2hvdWxkIGJlIGVxdWFsJyk7XG5cdFx0Ly8gZXhwZWN0KGFjdHVhbEV2ZW50LmFnZ3JlZ2F0ZUlkKS50b0VxdWFsKGV4cGVjdGVkRXZlbnQuYWdncmVnYXRlSWQsICdFdmVudHMgYWdncmVnYXRlSWQgc2hvdWxkIGJlIHRoZSBzYW1lJyk7XG5cdFx0ZXhwZWN0KGFjdHVhbEV2ZW50LmdldFBheWxvYWQoKSkudG9FcXVhbChleHBlY3RlZEV2ZW50LmdldFBheWxvYWQoKSwgJ0V2ZW50cyBwYXlsb2FkIHNob3VsZCBiZSB0aGUgc2FtZScpO1xuXHR9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydEFnZ3JlZ2F0ZUV2ZW50czxUIGV4dGVuZHMgQWdncmVnYXRlSWQ+KGFjdHVhbEV2ZW50czogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxUPj4sIGV4cGVjdGVkRXZlbnRzOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxUPj4pOiB2b2lkIHtcblxuXHRleHBlY3QoYWN0dWFsRXZlbnRzLmxlbmd0aCkudG9FcXVhbChleHBlY3RlZEV2ZW50cy5sZW5ndGgsICdBZ2dyZWdhdGUgZXZlbnRzJyk7XG5cblx0Zm9yIChsZXQgYWN0dWFsRXZlbnQgb2YgYWN0dWFsRXZlbnRzKSB7XG5cblx0XHRjb25zdCBleHBlY3RlZEV2ZW50ID0gZXhwZWN0ZWRFdmVudHMuZmluZCgoZXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50PFQ+KSA9PiB7XG5cdFx0XHRyZXR1cm4gZXZlbnQuZXF1YWxzKGFjdHVhbEV2ZW50KTtcblx0XHR9KTtcblxuXHRcdGV4cGVjdChleHBlY3RlZEV2ZW50KS50b0JlRGVmaW5lZCgpO1xuXHR9XG59XG4iXX0=