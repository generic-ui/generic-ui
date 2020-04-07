/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbInRlc3RpbmcvaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFPQSxNQUFNLFVBQVUsa0JBQWtCLENBQUMsWUFBd0MsRUFBRSxjQUFrQztJQUU5RyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFM0QsS0FBSyxJQUFJLFdBQVcsSUFBSSxZQUFZLEVBQUU7O2NBRS9CLGFBQWEsR0FBRyxjQUFjLENBQUMsSUFBSTs7OztRQUFDLENBQUMsS0FBa0IsRUFBRSxFQUFFO1lBQ2hFLE9BQU8sS0FBSyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4QyxDQUFDLEVBQUM7UUFFRixNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUN6RiwrR0FBK0c7UUFDL0csTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztLQUMxRztBQUVGLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUscUJBQXFCLENBQXdCLFlBQThDLEVBQUUsY0FBd0M7SUFFcEosTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBRS9FLEtBQUssSUFBSSxXQUFXLElBQUksWUFBWSxFQUFFOztjQUUvQixhQUFhLEdBQUcsY0FBYyxDQUFDLElBQUk7Ozs7UUFBQyxDQUFDLEtBQXdCLEVBQUUsRUFBRTtZQUN0RSxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbEMsQ0FBQyxFQUFDO1FBRUYsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BDO0FBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vZG9tYWluL2FnZ3JlZ2F0ZS1pZCc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQnO1xuXG5kZWNsYXJlIHZhciBleHBlY3Q6IGFueTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydERvbWFpbkV2ZW50cyhhY3R1YWxFdmVudHM6IFJlYWRvbmx5QXJyYXk8RG9tYWluRXZlbnQ+LCBleHBlY3RlZEV2ZW50czogQXJyYXk8RG9tYWluRXZlbnQ+KTogdm9pZCB7XG5cblx0ZXhwZWN0KGFjdHVhbEV2ZW50cy5sZW5ndGgpLnRvRXF1YWwoZXhwZWN0ZWRFdmVudHMubGVuZ3RoKTtcblxuXHRmb3IgKGxldCBhY3R1YWxFdmVudCBvZiBhY3R1YWxFdmVudHMpIHtcblxuXHRcdGNvbnN0IGV4cGVjdGVkRXZlbnQgPSBleHBlY3RlZEV2ZW50cy5maW5kKChldmVudDogRG9tYWluRXZlbnQpID0+IHtcblx0XHRcdHJldHVybiBldmVudC5lcXVhbHNCeVR5cGUoYWN0dWFsRXZlbnQpO1xuXHRcdH0pO1xuXG5cdFx0ZXhwZWN0KGV4cGVjdGVkRXZlbnQpLnRvQmVEZWZpbmVkKCk7XG5cdFx0ZXhwZWN0KGFjdHVhbEV2ZW50LmVxdWFsc0J5VHlwZShleHBlY3RlZEV2ZW50KSkudG9CZVRydXRoeSgnRXZlbnQgdHlwZSBzaG91bGQgYmUgZXF1YWwnKTtcblx0XHQvLyBleHBlY3QoYWN0dWFsRXZlbnQuYWdncmVnYXRlSWQpLnRvRXF1YWwoZXhwZWN0ZWRFdmVudC5hZ2dyZWdhdGVJZCwgJ0V2ZW50cyBhZ2dyZWdhdGVJZCBzaG91bGQgYmUgdGhlIHNhbWUnKTtcblx0XHRleHBlY3QoYWN0dWFsRXZlbnQuZ2V0UGF5bG9hZCgpKS50b0VxdWFsKGV4cGVjdGVkRXZlbnQuZ2V0UGF5bG9hZCgpLCAnRXZlbnRzIHBheWxvYWQgc2hvdWxkIGJlIHRoZSBzYW1lJyk7XG5cdH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0QWdncmVnYXRlRXZlbnRzPFQgZXh0ZW5kcyBBZ2dyZWdhdGVJZD4oYWN0dWFsRXZlbnRzOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFQ+PiwgZXhwZWN0ZWRFdmVudHM6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFQ+Pik6IHZvaWQge1xuXG5cdGV4cGVjdChhY3R1YWxFdmVudHMubGVuZ3RoKS50b0VxdWFsKGV4cGVjdGVkRXZlbnRzLmxlbmd0aCwgJ0FnZ3JlZ2F0ZSBldmVudHMnKTtcblxuXHRmb3IgKGxldCBhY3R1YWxFdmVudCBvZiBhY3R1YWxFdmVudHMpIHtcblxuXHRcdGNvbnN0IGV4cGVjdGVkRXZlbnQgPSBleHBlY3RlZEV2ZW50cy5maW5kKChldmVudDogQWdncmVnYXRlRXZlbnQ8VD4pID0+IHtcblx0XHRcdHJldHVybiBldmVudC5lcXVhbHMoYWN0dWFsRXZlbnQpO1xuXHRcdH0pO1xuXG5cdFx0ZXhwZWN0KGV4cGVjdGVkRXZlbnQpLnRvQmVEZWZpbmVkKCk7XG5cdH1cbn1cbiJdfQ==