/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOMAIN_EVENT_HANDLERS } from './event/domain-event-handlers';
/**
 * @template I
 * @param {?} handlers
 * @return {?}
 */
export function provideEventHandlers(handlers) {
    return (/** @type {?} */ (handlers.map((/**
     * @param {?} handler
     * @return {?}
     */
    function (handler) {
        return {
            provide: DOMAIN_EVENT_HANDLERS,
            useClass: handler,
            multi: true
        };
    }))));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9wcm92aWRlci5oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7O0FBSXRFLE1BQU0sVUFBVSxvQkFBb0IsQ0FBd0IsUUFBNEM7SUFDdkcsT0FBTyxtQkFBQSxRQUFRLENBQUMsR0FBRzs7OztJQUFDLFVBQUMsT0FBb0M7UUFDeEQsT0FBTztZQUNOLE9BQU8sRUFBRSxxQkFBcUI7WUFDOUIsUUFBUSxFQUFFLE9BQU87WUFDakIsS0FBSyxFQUFFLElBQUk7U0FDWCxDQUFDO0lBQ0gsQ0FBQyxFQUFDLEVBQU8sQ0FBQztBQUNYLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0aWNQcm92aWRlciwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBET01BSU5fRVZFTlRfSEFORExFUlMgfSBmcm9tICcuL2V2ZW50L2RvbWFpbi1ldmVudC1oYW5kbGVycyc7XG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICcuL2V2ZW50L2RvbWFpbi1ldmVudC5oYW5kbGVyJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi9hZ2dyZWdhdGUtaWQnO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUV2ZW50SGFuZGxlcnM8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkPihoYW5kbGVyczogQXJyYXk8VHlwZTxEb21haW5FdmVudEhhbmRsZXI8ST4+Pik6IEFycmF5PFN0YXRpY1Byb3ZpZGVyPiB7XG5cdHJldHVybiBoYW5kbGVycy5tYXAoKGhhbmRsZXI6IFR5cGU8RG9tYWluRXZlbnRIYW5kbGVyPEk+PikgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRwcm92aWRlOiBET01BSU5fRVZFTlRfSEFORExFUlMsXG5cdFx0XHR1c2VDbGFzczogaGFuZGxlcixcblx0XHRcdG11bHRpOiB0cnVlXG5cdFx0fTtcblx0fSkgYXMgYW55O1xufVxuIl19