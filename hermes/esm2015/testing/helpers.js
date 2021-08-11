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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbInRlc3RpbmcvaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBT0EsTUFBTSxVQUFVLGtCQUFrQixDQUF3QixZQUEyQyxFQUFFLGNBQXFDO0lBRTNJLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUUzRCxLQUFLLElBQUksV0FBVyxJQUFJLFlBQVksRUFBRTs7Y0FFL0IsYUFBYSxHQUFHLGNBQWMsQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxLQUFxQixFQUFFLEVBQUU7WUFDbkUsT0FBTyxLQUFLLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBQztRQUVGLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzdELCtHQUErRztRQUMvRyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO0tBQzFHO0FBRUYsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxxQkFBcUIsQ0FBd0IsWUFBOEMsRUFBRSxjQUF3QztJQUVwSixNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFFL0UsS0FBSyxJQUFJLFdBQVcsSUFBSSxZQUFZLEVBQUU7O2NBRS9CLGFBQWEsR0FBRyxjQUFjLENBQUMsSUFBSTs7OztRQUFDLENBQUMsS0FBd0IsRUFBRSxFQUFFO1lBQ3RFLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsQyxDQUFDLEVBQUM7UUFFRixNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDcEM7QUFDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi9jb3JlL2RvbWFpbi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi9jb3JlL2RvbWFpbi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi4vY29yZS9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50JztcblxuZGVjbGFyZSB2YXIgZXhwZWN0OiBhbnk7XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnREb21haW5FdmVudHM8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkPihhY3R1YWxFdmVudHM6IFJlYWRvbmx5QXJyYXk8RG9tYWluRXZlbnQ8ST4+LCBleHBlY3RlZEV2ZW50czogQXJyYXk8RG9tYWluRXZlbnQ8ST4+KTogdm9pZCB7XG5cblx0ZXhwZWN0KGFjdHVhbEV2ZW50cy5sZW5ndGgpLnRvRXF1YWwoZXhwZWN0ZWRFdmVudHMubGVuZ3RoKTtcblxuXHRmb3IgKGxldCBhY3R1YWxFdmVudCBvZiBhY3R1YWxFdmVudHMpIHtcblxuXHRcdGNvbnN0IGV4cGVjdGVkRXZlbnQgPSBleHBlY3RlZEV2ZW50cy5maW5kKChldmVudDogRG9tYWluRXZlbnQ8ST4pID0+IHtcblx0XHRcdHJldHVybiBldmVudC5lcXVhbHNCeVR5cGUoYWN0dWFsRXZlbnQpO1xuXHRcdH0pO1xuXG5cdFx0ZXhwZWN0KGV4cGVjdGVkRXZlbnQpLnRvQmVEZWZpbmVkKCk7XG5cdFx0ZXhwZWN0KGFjdHVhbEV2ZW50LmVxdWFsc0J5VHlwZShleHBlY3RlZEV2ZW50KSkudG9CZVRydXRoeSgpO1xuXHRcdC8vIGV4cGVjdChhY3R1YWxFdmVudC5hZ2dyZWdhdGVJZCkudG9FcXVhbChleHBlY3RlZEV2ZW50LmFnZ3JlZ2F0ZUlkLCAnRXZlbnRzIGFnZ3JlZ2F0ZUlkIHNob3VsZCBiZSB0aGUgc2FtZScpO1xuXHRcdGV4cGVjdChhY3R1YWxFdmVudC5nZXRQYXlsb2FkKCkpLnRvRXF1YWwoZXhwZWN0ZWRFdmVudC5nZXRQYXlsb2FkKCksICdFdmVudHMgcGF5bG9hZCBzaG91bGQgYmUgdGhlIHNhbWUnKTtcblx0fVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRBZ2dyZWdhdGVFdmVudHM8VCBleHRlbmRzIEFnZ3JlZ2F0ZUlkPihhY3R1YWxFdmVudHM6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ8VD4+LCBleHBlY3RlZEV2ZW50czogQXJyYXk8QWdncmVnYXRlRXZlbnQ8VD4+KTogdm9pZCB7XG5cblx0ZXhwZWN0KGFjdHVhbEV2ZW50cy5sZW5ndGgpLnRvRXF1YWwoZXhwZWN0ZWRFdmVudHMubGVuZ3RoLCAnQWdncmVnYXRlIGV2ZW50cycpO1xuXG5cdGZvciAobGV0IGFjdHVhbEV2ZW50IG9mIGFjdHVhbEV2ZW50cykge1xuXG5cdFx0Y29uc3QgZXhwZWN0ZWRFdmVudCA9IGV4cGVjdGVkRXZlbnRzLmZpbmQoKGV2ZW50OiBBZ2dyZWdhdGVFdmVudDxUPikgPT4ge1xuXHRcdFx0cmV0dXJuIGV2ZW50LmVxdWFscyhhY3R1YWxFdmVudCk7XG5cdFx0fSk7XG5cblx0XHRleHBlY3QoZXhwZWN0ZWRFdmVudCkudG9CZURlZmluZWQoKTtcblx0fVxufVxuIl19