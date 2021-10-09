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
/**
 * @template T
 * @param {?} createStream
 * @param {?} desc
 * @return {?}
 */
export function testEventRepositoryIsEmptyOnStart(createStream, desc) {
    it('should be no ' + desc + ' events on start', (/**
     * @return {?}
     */
    () => {
        expect.assertions(3);
        // given
        /** @type {?} */
        const nextFn = jest.fn();
        /** @type {?} */
        const errorFn = jest.fn();
        /** @type {?} */
        const completeFn = jest.fn();
        // when
        createStream()
            .subscribe((/**
         * @return {?}
         */
        () => nextFn()), (/**
         * @param {?} err
         * @return {?}
         */
        (err) => errorFn(err)), (/**
         * @return {?}
         */
        () => completeFn()));
        // then
        expect(nextFn).not.toHaveBeenCalled();
        expect(errorFn).not.toHaveBeenCalled();
        expect(completeFn).not.toHaveBeenCalled();
    }));
}
/**
 * @template T
 * @param {?} createStream
 * @param {?} defaultValue
 * @param {?} desc
 * @return {?}
 */
export function testWarehouseDefaultValueOnStart(createStream, defaultValue, desc) {
    it('should have default value ' + desc, (/**
     * @return {?}
     */
    () => {
        expect.assertions(4);
        // given
        /** @type {?} */
        const nextFn = jest.fn();
        /** @type {?} */
        const errorFn = jest.fn();
        /** @type {?} */
        const completeFn = jest.fn();
        // when
        createStream()
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => nextFn(value)), (/**
         * @param {?} err
         * @return {?}
         */
        (err) => errorFn(err)), (/**
         * @return {?}
         */
        () => completeFn()));
        // then
        expect(nextFn).toHaveBeenCalledWith(defaultValue);
        expect(nextFn).toHaveBeenCalledTimes(1);
        expect(errorFn).not.toHaveBeenCalled();
        expect(completeFn).not.toHaveBeenCalled();
    }));
}
/**
 * @template T
 * @param {?} createStream
 * @param {?} defaultValue
 * @param {?} desc
 * @return {?}
 */
export function testWarehouseDefaultValueOnStartOnce(createStream, defaultValue, desc) {
    it('should have default value ' + desc, (/**
     * @return {?}
     */
    () => {
        expect.assertions(4);
        // given
        /** @type {?} */
        const nextFn = jest.fn();
        /** @type {?} */
        const errorFn = jest.fn();
        /** @type {?} */
        const completeFn = jest.fn();
        // when
        createStream()
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => nextFn(value)), (/**
         * @param {?} err
         * @return {?}
         */
        (err) => errorFn(err)), (/**
         * @return {?}
         */
        () => completeFn()));
        // then
        expect(nextFn).toHaveBeenCalledWith(defaultValue);
        expect(nextFn).toHaveBeenCalledTimes(1);
        expect(errorFn).not.toHaveBeenCalled();
        expect(completeFn).toHaveBeenCalledTimes(1);
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbInRlc3RpbmcvaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBVUEsTUFBTSxVQUFVLGtCQUFrQixDQUF3QixZQUEyQyxFQUFFLGNBQXFDO0lBRTNJLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUUzRCxLQUFLLE1BQU0sV0FBVyxJQUFJLFlBQVksRUFBRTs7Y0FFakMsYUFBYSxHQUFHLGNBQWMsQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxLQUFxQixFQUFFLEVBQUU7WUFDbkUsT0FBTyxLQUFLLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBQztRQUVGLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzdELCtHQUErRztRQUMvRyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO0tBQzFHO0FBRUYsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxxQkFBcUIsQ0FBd0IsWUFBOEMsRUFBRSxjQUF3QztJQUVwSixNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFFL0UsS0FBSyxNQUFNLFdBQVcsSUFBSSxZQUFZLEVBQUU7O2NBRWpDLGFBQWEsR0FBRyxjQUFjLENBQUMsSUFBSTs7OztRQUFDLENBQUMsS0FBd0IsRUFBRSxFQUFFO1lBQ3RFLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsQyxDQUFDLEVBQUM7UUFFRixNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDcEM7QUFDRixDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGlDQUFpQyxDQUFJLFlBQXVDLEVBQUUsSUFBWTtJQUV6RyxFQUFFLENBQUMsZUFBZSxHQUFHLElBQUksR0FBRyxrQkFBa0I7OztJQUFFLEdBQUcsRUFBRTtRQUVwRCxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Y0FHZixNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRTs7Y0FDdkIsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUU7O2NBQ25CLFVBQVUsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFO1FBRXZCLE9BQU87UUFDUCxZQUFZLEVBQUU7YUFDWixTQUFTOzs7UUFDVCxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUU7Ozs7UUFDZCxDQUFDLEdBQVEsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQzs7O1FBQzFCLEdBQUcsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUNsQixDQUFDO1FBRUgsT0FBTztRQUNQLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN0QyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDdkMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzNDLENBQUMsRUFBQyxDQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0NBQWdDLENBQUksWUFBdUMsRUFBRSxZQUFlLEVBQUUsSUFBWTtJQUV6SCxFQUFFLENBQUMsNEJBQTRCLEdBQUcsSUFBSTs7O0lBQUUsR0FBRyxFQUFFO1FBRTVDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7OztjQUdmLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFOztjQUN2QixPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRTs7Y0FDbkIsVUFBVSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUU7UUFFdkIsT0FBTztRQUNQLFlBQVksRUFBRTthQUNaLFNBQVM7Ozs7UUFDVCxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQzs7OztRQUN4QixDQUFDLEdBQVEsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQzs7O1FBQzFCLEdBQUcsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUNsQixDQUFDO1FBRUgsT0FBTztRQUNQLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNsRCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3ZDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMzQyxDQUFDLEVBQUMsQ0FBQztBQUNKLENBQUM7Ozs7Ozs7O0FBRUQsTUFBTSxVQUFVLG9DQUFvQyxDQUFJLFlBQXVDLEVBQUUsWUFBZSxFQUFFLElBQVk7SUFFN0gsRUFBRSxDQUFDLDRCQUE0QixHQUFHLElBQUk7OztJQUFFLEdBQUcsRUFBRTtRQUU1QyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Y0FHZixNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRTs7Y0FDdkIsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUU7O2NBQ25CLFVBQVUsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFO1FBRXZCLE9BQU87UUFDUCxZQUFZLEVBQUU7YUFDWixTQUFTOzs7O1FBQ1QsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7Ozs7UUFDeEIsQ0FBQyxHQUFRLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7OztRQUMxQixHQUFHLEVBQUUsQ0FBQyxVQUFVLEVBQUUsRUFDbEIsQ0FBQztRQUVILE9BQU87UUFDUCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsb0JBQW9CLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN2QyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQyxFQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi9jb3JlL2RvbWFpbi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi9jb3JlL2RvbWFpbi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi4vY29yZS9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IEhlcm1lc09ic2VydmFibGUgfSBmcm9tICcuLi9jb21tb24vc3RyZWFtL29ic2VydmFibGUvaGVybWVzLm9ic2VydmFibGUnO1xuXG5kZWNsYXJlIGNvbnN0IGV4cGVjdDogYW55O1xuZGVjbGFyZSBjb25zdCBpdDogYW55O1xuZGVjbGFyZSBjb25zdCBqZXN0OiBhbnk7XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnREb21haW5FdmVudHM8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkPihhY3R1YWxFdmVudHM6IFJlYWRvbmx5QXJyYXk8RG9tYWluRXZlbnQ8ST4+LCBleHBlY3RlZEV2ZW50czogQXJyYXk8RG9tYWluRXZlbnQ8ST4+KTogdm9pZCB7XG5cblx0ZXhwZWN0KGFjdHVhbEV2ZW50cy5sZW5ndGgpLnRvRXF1YWwoZXhwZWN0ZWRFdmVudHMubGVuZ3RoKTtcblxuXHRmb3IgKGNvbnN0IGFjdHVhbEV2ZW50IG9mIGFjdHVhbEV2ZW50cykge1xuXG5cdFx0Y29uc3QgZXhwZWN0ZWRFdmVudCA9IGV4cGVjdGVkRXZlbnRzLmZpbmQoKGV2ZW50OiBEb21haW5FdmVudDxJPikgPT4ge1xuXHRcdFx0cmV0dXJuIGV2ZW50LmVxdWFsc0J5VHlwZShhY3R1YWxFdmVudCk7XG5cdFx0fSk7XG5cblx0XHRleHBlY3QoZXhwZWN0ZWRFdmVudCkudG9CZURlZmluZWQoKTtcblx0XHRleHBlY3QoYWN0dWFsRXZlbnQuZXF1YWxzQnlUeXBlKGV4cGVjdGVkRXZlbnQpKS50b0JlVHJ1dGh5KCk7XG5cdFx0Ly8gZXhwZWN0KGFjdHVhbEV2ZW50LmFnZ3JlZ2F0ZUlkKS50b0VxdWFsKGV4cGVjdGVkRXZlbnQuYWdncmVnYXRlSWQsICdFdmVudHMgYWdncmVnYXRlSWQgc2hvdWxkIGJlIHRoZSBzYW1lJyk7XG5cdFx0ZXhwZWN0KGFjdHVhbEV2ZW50LmdldFBheWxvYWQoKSkudG9FcXVhbChleHBlY3RlZEV2ZW50LmdldFBheWxvYWQoKSwgJ0V2ZW50cyBwYXlsb2FkIHNob3VsZCBiZSB0aGUgc2FtZScpO1xuXHR9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydEFnZ3JlZ2F0ZUV2ZW50czxUIGV4dGVuZHMgQWdncmVnYXRlSWQ+KGFjdHVhbEV2ZW50czogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxUPj4sIGV4cGVjdGVkRXZlbnRzOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxUPj4pOiB2b2lkIHtcblxuXHRleHBlY3QoYWN0dWFsRXZlbnRzLmxlbmd0aCkudG9FcXVhbChleHBlY3RlZEV2ZW50cy5sZW5ndGgsICdBZ2dyZWdhdGUgZXZlbnRzJyk7XG5cblx0Zm9yIChjb25zdCBhY3R1YWxFdmVudCBvZiBhY3R1YWxFdmVudHMpIHtcblxuXHRcdGNvbnN0IGV4cGVjdGVkRXZlbnQgPSBleHBlY3RlZEV2ZW50cy5maW5kKChldmVudDogQWdncmVnYXRlRXZlbnQ8VD4pID0+IHtcblx0XHRcdHJldHVybiBldmVudC5lcXVhbHMoYWN0dWFsRXZlbnQpO1xuXHRcdH0pO1xuXG5cdFx0ZXhwZWN0KGV4cGVjdGVkRXZlbnQpLnRvQmVEZWZpbmVkKCk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlc3RFdmVudFJlcG9zaXRvcnlJc0VtcHR5T25TdGFydDxUPihjcmVhdGVTdHJlYW06ICgpID0+IEhlcm1lc09ic2VydmFibGU8VD4sIGRlc2M6IHN0cmluZyk6IHZvaWQge1xuXG5cdGl0KCdzaG91bGQgYmUgbm8gJyArIGRlc2MgKyAnIGV2ZW50cyBvbiBzdGFydCcsICgpID0+IHtcblxuXHRcdGV4cGVjdC5hc3NlcnRpb25zKDMpO1xuXG5cdFx0Ly8gZ2l2ZW5cblx0XHRjb25zdCBuZXh0Rm4gPSBqZXN0LmZuKCksXG5cdFx0XHRlcnJvckZuID0gamVzdC5mbigpLFxuXHRcdFx0Y29tcGxldGVGbiA9IGplc3QuZm4oKTtcblxuXHRcdC8vIHdoZW5cblx0XHRjcmVhdGVTdHJlYW0oKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0KCkgPT4gbmV4dEZuKCksXG5cdFx0XHRcdChlcnI6IGFueSkgPT4gZXJyb3JGbihlcnIpLFxuXHRcdFx0XHQoKSA9PiBjb21wbGV0ZUZuKClcblx0XHRcdCk7XG5cblx0XHQvLyB0aGVuXG5cdFx0ZXhwZWN0KG5leHRGbikubm90LnRvSGF2ZUJlZW5DYWxsZWQoKTtcblx0XHRleHBlY3QoZXJyb3JGbikubm90LnRvSGF2ZUJlZW5DYWxsZWQoKTtcblx0XHRleHBlY3QoY29tcGxldGVGbikubm90LnRvSGF2ZUJlZW5DYWxsZWQoKTtcblx0fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXN0V2FyZWhvdXNlRGVmYXVsdFZhbHVlT25TdGFydDxUPihjcmVhdGVTdHJlYW06ICgpID0+IEhlcm1lc09ic2VydmFibGU8VD4sIGRlZmF1bHRWYWx1ZTogVCwgZGVzYzogc3RyaW5nKTogdm9pZCB7XG5cblx0aXQoJ3Nob3VsZCBoYXZlIGRlZmF1bHQgdmFsdWUgJyArIGRlc2MsICgpID0+IHtcblxuXHRcdGV4cGVjdC5hc3NlcnRpb25zKDQpO1xuXG5cdFx0Ly8gZ2l2ZW5cblx0XHRjb25zdCBuZXh0Rm4gPSBqZXN0LmZuKCksXG5cdFx0XHRlcnJvckZuID0gamVzdC5mbigpLFxuXHRcdFx0Y29tcGxldGVGbiA9IGplc3QuZm4oKTtcblxuXHRcdC8vIHdoZW5cblx0XHRjcmVhdGVTdHJlYW0oKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0KHZhbHVlKSA9PiBuZXh0Rm4odmFsdWUpLFxuXHRcdFx0XHQoZXJyOiBhbnkpID0+IGVycm9yRm4oZXJyKSxcblx0XHRcdFx0KCkgPT4gY29tcGxldGVGbigpXG5cdFx0XHQpO1xuXG5cdFx0Ly8gdGhlblxuXHRcdGV4cGVjdChuZXh0Rm4pLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKGRlZmF1bHRWYWx1ZSk7XG5cdFx0ZXhwZWN0KG5leHRGbikudG9IYXZlQmVlbkNhbGxlZFRpbWVzKDEpO1xuXHRcdGV4cGVjdChlcnJvckZuKS5ub3QudG9IYXZlQmVlbkNhbGxlZCgpO1xuXHRcdGV4cGVjdChjb21wbGV0ZUZuKS5ub3QudG9IYXZlQmVlbkNhbGxlZCgpO1xuXHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlc3RXYXJlaG91c2VEZWZhdWx0VmFsdWVPblN0YXJ0T25jZTxUPihjcmVhdGVTdHJlYW06ICgpID0+IEhlcm1lc09ic2VydmFibGU8VD4sIGRlZmF1bHRWYWx1ZTogVCwgZGVzYzogc3RyaW5nKTogdm9pZCB7XG5cblx0aXQoJ3Nob3VsZCBoYXZlIGRlZmF1bHQgdmFsdWUgJyArIGRlc2MsICgpID0+IHtcblxuXHRcdGV4cGVjdC5hc3NlcnRpb25zKDQpO1xuXG5cdFx0Ly8gZ2l2ZW5cblx0XHRjb25zdCBuZXh0Rm4gPSBqZXN0LmZuKCksXG5cdFx0XHRlcnJvckZuID0gamVzdC5mbigpLFxuXHRcdFx0Y29tcGxldGVGbiA9IGplc3QuZm4oKTtcblxuXHRcdC8vIHdoZW5cblx0XHRjcmVhdGVTdHJlYW0oKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0KHZhbHVlKSA9PiBuZXh0Rm4odmFsdWUpLFxuXHRcdFx0XHQoZXJyOiBhbnkpID0+IGVycm9yRm4oZXJyKSxcblx0XHRcdFx0KCkgPT4gY29tcGxldGVGbigpXG5cdFx0XHQpO1xuXG5cdFx0Ly8gdGhlblxuXHRcdGV4cGVjdChuZXh0Rm4pLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKGRlZmF1bHRWYWx1ZSk7XG5cdFx0ZXhwZWN0KG5leHRGbikudG9IYXZlQmVlbkNhbGxlZFRpbWVzKDEpO1xuXHRcdGV4cGVjdChlcnJvckZuKS5ub3QudG9IYXZlQmVlbkNhbGxlZCgpO1xuXHRcdGV4cGVjdChjb21wbGV0ZUZuKS50b0hhdmVCZWVuQ2FsbGVkVGltZXMoMSk7XG5cdH0pO1xufVxuIl19