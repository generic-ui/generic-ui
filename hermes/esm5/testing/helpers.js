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
    function () {
        expect.assertions(3);
        // given
        /** @type {?} */
        var nextFn = jest.fn();
        /** @type {?} */
        var errorFn = jest.fn();
        /** @type {?} */
        var completeFn = jest.fn();
        // when
        createStream()
            .subscribe((/**
         * @return {?}
         */
        function () { return nextFn(); }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return errorFn(err); }), (/**
         * @return {?}
         */
        function () { return completeFn(); }));
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
    function () {
        expect.assertions(4);
        // given
        /** @type {?} */
        var nextFn = jest.fn();
        /** @type {?} */
        var errorFn = jest.fn();
        /** @type {?} */
        var completeFn = jest.fn();
        // when
        createStream()
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return nextFn(value); }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return errorFn(err); }), (/**
         * @return {?}
         */
        function () { return completeFn(); }));
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
    function () {
        expect.assertions(4);
        // given
        /** @type {?} */
        var nextFn = jest.fn();
        /** @type {?} */
        var errorFn = jest.fn();
        /** @type {?} */
        var completeFn = jest.fn();
        // when
        createStream()
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return nextFn(value); }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return errorFn(err); }), (/**
         * @return {?}
         */
        function () { return completeFn(); }));
        // then
        expect(nextFn).toHaveBeenCalledWith(defaultValue);
        expect(nextFn).toHaveBeenCalledTimes(1);
        expect(errorFn).not.toHaveBeenCalled();
        expect(completeFn).toHaveBeenCalledTimes(1);
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbInRlc3RpbmcvaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVVBLE1BQU0sVUFBVSxrQkFBa0IsQ0FBd0IsWUFBMkMsRUFBRSxjQUFxQzs7SUFFM0ksTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzRCQUVoRCxXQUFXOztZQUVmLGFBQWEsR0FBRyxjQUFjLENBQUMsSUFBSTs7OztRQUFDLFVBQUMsS0FBcUI7WUFDL0QsT0FBTyxLQUFLLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBQztRQUVGLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzdELCtHQUErRztRQUMvRyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDOzs7UUFUM0csS0FBMEIsSUFBQSxpQkFBQSxpQkFBQSxZQUFZLENBQUEsMENBQUE7WUFBakMsSUFBTSxXQUFXLHlCQUFBO29CQUFYLFdBQVc7U0FVckI7Ozs7Ozs7OztBQUVGLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUscUJBQXFCLENBQXdCLFlBQThDLEVBQUUsY0FBd0M7O0lBRXBKLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsa0JBQWtCLENBQUMsQ0FBQzs0QkFFcEUsV0FBVzs7WUFFZixhQUFhLEdBQUcsY0FBYyxDQUFDLElBQUk7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LENBQUMsRUFBRSxFQUFFOztZQUNuQixVQUFVLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUV2QixPQUFPO1FBQ1AsWUFBWSxFQUFFO2FBQ1osU0FBUzs7OztRQUNULFVBQUMsS0FBSyxJQUFLLE9BQUEsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFiLENBQWE7Ozs7UUFDeEIsVUFBQyxHQUFRLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQVosQ0FBWTs7O1FBQzFCLGNBQU0sT0FBQSxVQUFVLEVBQUUsRUFBWixDQUFZLEVBQ2xCLENBQUM7UUFFSCxPQUFPO1FBQ1AsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDdkMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUMsRUFBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vY29yZS9kb21haW4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vY29yZS9kb21haW4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4uL2NvcmUvZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnLi4vY29tbW9uL3N0cmVhbS9vYnNlcnZhYmxlL2hlcm1lcy5vYnNlcnZhYmxlJztcblxuZGVjbGFyZSBjb25zdCBleHBlY3Q6IGFueTtcbmRlY2xhcmUgY29uc3QgaXQ6IGFueTtcbmRlY2xhcmUgY29uc3QgamVzdDogYW55O1xuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0RG9tYWluRXZlbnRzPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZD4oYWN0dWFsRXZlbnRzOiBSZWFkb25seUFycmF5PERvbWFpbkV2ZW50PEk+PiwgZXhwZWN0ZWRFdmVudHM6IEFycmF5PERvbWFpbkV2ZW50PEk+Pik6IHZvaWQge1xuXG5cdGV4cGVjdChhY3R1YWxFdmVudHMubGVuZ3RoKS50b0VxdWFsKGV4cGVjdGVkRXZlbnRzLmxlbmd0aCk7XG5cblx0Zm9yIChjb25zdCBhY3R1YWxFdmVudCBvZiBhY3R1YWxFdmVudHMpIHtcblxuXHRcdGNvbnN0IGV4cGVjdGVkRXZlbnQgPSBleHBlY3RlZEV2ZW50cy5maW5kKChldmVudDogRG9tYWluRXZlbnQ8ST4pID0+IHtcblx0XHRcdHJldHVybiBldmVudC5lcXVhbHNCeVR5cGUoYWN0dWFsRXZlbnQpO1xuXHRcdH0pO1xuXG5cdFx0ZXhwZWN0KGV4cGVjdGVkRXZlbnQpLnRvQmVEZWZpbmVkKCk7XG5cdFx0ZXhwZWN0KGFjdHVhbEV2ZW50LmVxdWFsc0J5VHlwZShleHBlY3RlZEV2ZW50KSkudG9CZVRydXRoeSgpO1xuXHRcdC8vIGV4cGVjdChhY3R1YWxFdmVudC5hZ2dyZWdhdGVJZCkudG9FcXVhbChleHBlY3RlZEV2ZW50LmFnZ3JlZ2F0ZUlkLCAnRXZlbnRzIGFnZ3JlZ2F0ZUlkIHNob3VsZCBiZSB0aGUgc2FtZScpO1xuXHRcdGV4cGVjdChhY3R1YWxFdmVudC5nZXRQYXlsb2FkKCkpLnRvRXF1YWwoZXhwZWN0ZWRFdmVudC5nZXRQYXlsb2FkKCksICdFdmVudHMgcGF5bG9hZCBzaG91bGQgYmUgdGhlIHNhbWUnKTtcblx0fVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRBZ2dyZWdhdGVFdmVudHM8VCBleHRlbmRzIEFnZ3JlZ2F0ZUlkPihhY3R1YWxFdmVudHM6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ8VD4+LCBleHBlY3RlZEV2ZW50czogQXJyYXk8QWdncmVnYXRlRXZlbnQ8VD4+KTogdm9pZCB7XG5cblx0ZXhwZWN0KGFjdHVhbEV2ZW50cy5sZW5ndGgpLnRvRXF1YWwoZXhwZWN0ZWRFdmVudHMubGVuZ3RoLCAnQWdncmVnYXRlIGV2ZW50cycpO1xuXG5cdGZvciAoY29uc3QgYWN0dWFsRXZlbnQgb2YgYWN0dWFsRXZlbnRzKSB7XG5cblx0XHRjb25zdCBleHBlY3RlZEV2ZW50ID0gZXhwZWN0ZWRFdmVudHMuZmluZCgoZXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50PFQ+KSA9PiB7XG5cdFx0XHRyZXR1cm4gZXZlbnQuZXF1YWxzKGFjdHVhbEV2ZW50KTtcblx0XHR9KTtcblxuXHRcdGV4cGVjdChleHBlY3RlZEV2ZW50KS50b0JlRGVmaW5lZCgpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXN0RXZlbnRSZXBvc2l0b3J5SXNFbXB0eU9uU3RhcnQ8VD4oY3JlYXRlU3RyZWFtOiAoKSA9PiBIZXJtZXNPYnNlcnZhYmxlPFQ+LCBkZXNjOiBzdHJpbmcpOiB2b2lkIHtcblxuXHRpdCgnc2hvdWxkIGJlIG5vICcgKyBkZXNjICsgJyBldmVudHMgb24gc3RhcnQnLCAoKSA9PiB7XG5cblx0XHRleHBlY3QuYXNzZXJ0aW9ucygzKTtcblxuXHRcdC8vIGdpdmVuXG5cdFx0Y29uc3QgbmV4dEZuID0gamVzdC5mbigpLFxuXHRcdFx0ZXJyb3JGbiA9IGplc3QuZm4oKSxcblx0XHRcdGNvbXBsZXRlRm4gPSBqZXN0LmZuKCk7XG5cblx0XHQvLyB3aGVuXG5cdFx0Y3JlYXRlU3RyZWFtKClcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdCgpID0+IG5leHRGbigpLFxuXHRcdFx0XHQoZXJyOiBhbnkpID0+IGVycm9yRm4oZXJyKSxcblx0XHRcdFx0KCkgPT4gY29tcGxldGVGbigpXG5cdFx0XHQpO1xuXG5cdFx0Ly8gdGhlblxuXHRcdGV4cGVjdChuZXh0Rm4pLm5vdC50b0hhdmVCZWVuQ2FsbGVkKCk7XG5cdFx0ZXhwZWN0KGVycm9yRm4pLm5vdC50b0hhdmVCZWVuQ2FsbGVkKCk7XG5cdFx0ZXhwZWN0KGNvbXBsZXRlRm4pLm5vdC50b0hhdmVCZWVuQ2FsbGVkKCk7XG5cdH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVzdFdhcmVob3VzZURlZmF1bHRWYWx1ZU9uU3RhcnQ8VD4oY3JlYXRlU3RyZWFtOiAoKSA9PiBIZXJtZXNPYnNlcnZhYmxlPFQ+LCBkZWZhdWx0VmFsdWU6IFQsIGRlc2M6IHN0cmluZyk6IHZvaWQge1xuXG5cdGl0KCdzaG91bGQgaGF2ZSBkZWZhdWx0IHZhbHVlICcgKyBkZXNjLCAoKSA9PiB7XG5cblx0XHRleHBlY3QuYXNzZXJ0aW9ucyg0KTtcblxuXHRcdC8vIGdpdmVuXG5cdFx0Y29uc3QgbmV4dEZuID0gamVzdC5mbigpLFxuXHRcdFx0ZXJyb3JGbiA9IGplc3QuZm4oKSxcblx0XHRcdGNvbXBsZXRlRm4gPSBqZXN0LmZuKCk7XG5cblx0XHQvLyB3aGVuXG5cdFx0Y3JlYXRlU3RyZWFtKClcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdCh2YWx1ZSkgPT4gbmV4dEZuKHZhbHVlKSxcblx0XHRcdFx0KGVycjogYW55KSA9PiBlcnJvckZuKGVyciksXG5cdFx0XHRcdCgpID0+IGNvbXBsZXRlRm4oKVxuXHRcdFx0KTtcblxuXHRcdC8vIHRoZW5cblx0XHRleHBlY3QobmV4dEZuKS50b0hhdmVCZWVuQ2FsbGVkV2l0aChkZWZhdWx0VmFsdWUpO1xuXHRcdGV4cGVjdChuZXh0Rm4pLnRvSGF2ZUJlZW5DYWxsZWRUaW1lcygxKTtcblx0XHRleHBlY3QoZXJyb3JGbikubm90LnRvSGF2ZUJlZW5DYWxsZWQoKTtcblx0XHRleHBlY3QoY29tcGxldGVGbikubm90LnRvSGF2ZUJlZW5DYWxsZWQoKTtcblx0fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXN0V2FyZWhvdXNlRGVmYXVsdFZhbHVlT25TdGFydE9uY2U8VD4oY3JlYXRlU3RyZWFtOiAoKSA9PiBIZXJtZXNPYnNlcnZhYmxlPFQ+LCBkZWZhdWx0VmFsdWU6IFQsIGRlc2M6IHN0cmluZyk6IHZvaWQge1xuXG5cdGl0KCdzaG91bGQgaGF2ZSBkZWZhdWx0IHZhbHVlICcgKyBkZXNjLCAoKSA9PiB7XG5cblx0XHRleHBlY3QuYXNzZXJ0aW9ucyg0KTtcblxuXHRcdC8vIGdpdmVuXG5cdFx0Y29uc3QgbmV4dEZuID0gamVzdC5mbigpLFxuXHRcdFx0ZXJyb3JGbiA9IGplc3QuZm4oKSxcblx0XHRcdGNvbXBsZXRlRm4gPSBqZXN0LmZuKCk7XG5cblx0XHQvLyB3aGVuXG5cdFx0Y3JlYXRlU3RyZWFtKClcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdCh2YWx1ZSkgPT4gbmV4dEZuKHZhbHVlKSxcblx0XHRcdFx0KGVycjogYW55KSA9PiBlcnJvckZuKGVyciksXG5cdFx0XHRcdCgpID0+IGNvbXBsZXRlRm4oKVxuXHRcdFx0KTtcblxuXHRcdC8vIHRoZW5cblx0XHRleHBlY3QobmV4dEZuKS50b0hhdmVCZWVuQ2FsbGVkV2l0aChkZWZhdWx0VmFsdWUpO1xuXHRcdGV4cGVjdChuZXh0Rm4pLnRvSGF2ZUJlZW5DYWxsZWRUaW1lcygxKTtcblx0XHRleHBlY3QoZXJyb3JGbikubm90LnRvSGF2ZUJlZW5DYWxsZWQoKTtcblx0XHRleHBlY3QoY29tcGxldGVGbikudG9IYXZlQmVlbkNhbGxlZFRpbWVzKDEpO1xuXHR9KTtcbn1cbiJdfQ==