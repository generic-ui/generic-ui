/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { COMMAND_HANDLERS } from './command/command-handlers';
import { DOMAIN_EVENT_HANDLERS } from './event/domain-event-handlers';
/**
 * @param {?} handlers
 * @return {?}
 */
export function provideCommandHandlers(handlers) {
    return (/** @type {?} */ (handlers.map((/**
     * @param {?} handler
     * @return {?}
     */
    function (handler) {
        return {
            provide: COMMAND_HANDLERS,
            useClass: handler,
            multi: true
        };
    }))));
}
/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9wcm92aWRlci5oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7QUFHdEUsTUFBTSxVQUFVLHNCQUFzQixDQUFDLFFBQWdEO0lBQ3RGLE9BQU8sbUJBQUEsUUFBUSxDQUFDLEdBQUc7Ozs7SUFBQyxVQUFDLE9BQXdDO1FBQzVELE9BQU87WUFDTixPQUFPLEVBQUUsZ0JBQWdCO1lBQ3pCLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLEtBQUssRUFBRSxJQUFJO1NBQ1gsQ0FBQztJQUNILENBQUMsRUFBQyxFQUFPLENBQUM7QUFDWCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxvQkFBb0IsQ0FBQyxRQUF5QztJQUM3RSxPQUFPLG1CQUFBLFFBQVEsQ0FBQyxHQUFHOzs7O0lBQUMsVUFBQyxPQUFpQztRQUNyRCxPQUFPO1lBQ04sT0FBTyxFQUFFLHFCQUFxQjtZQUM5QixRQUFRLEVBQUUsT0FBTztZQUNqQixLQUFLLEVBQUUsSUFBSTtTQUNYLENBQUM7SUFDSCxDQUFDLEVBQUMsRUFBTyxDQUFDO0FBQ1gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRpY1Byb3ZpZGVyLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZSB9IGZyb20gJy4vY29tbWFuZC9hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL2NvbW1hbmQvY29tbWFuZC5oYW5kbGVyJztcbmltcG9ydCB7IENPTU1BTkRfSEFORExFUlMgfSBmcm9tICcuL2NvbW1hbmQvY29tbWFuZC1oYW5kbGVycyc7XG5pbXBvcnQgeyBET01BSU5fRVZFTlRfSEFORExFUlMgfSBmcm9tICcuL2V2ZW50L2RvbWFpbi1ldmVudC1oYW5kbGVycyc7XG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICcuL2V2ZW50L2RvbWFpbi1ldmVudC5oYW5kbGVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVDb21tYW5kSGFuZGxlcnMoaGFuZGxlcnM6IEFycmF5PFR5cGU8Q29tbWFuZEhhbmRsZXI8QWdncmVnYXRlPj4+KTogQXJyYXk8U3RhdGljUHJvdmlkZXI+IHtcblx0cmV0dXJuIGhhbmRsZXJzLm1hcCgoaGFuZGxlcjogVHlwZTxDb21tYW5kSGFuZGxlcjxBZ2dyZWdhdGU+PikgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRwcm92aWRlOiBDT01NQU5EX0hBTkRMRVJTLFxuXHRcdFx0dXNlQ2xhc3M6IGhhbmRsZXIsXG5cdFx0XHRtdWx0aTogdHJ1ZVxuXHRcdH07XG5cdH0pIGFzIGFueTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVFdmVudEhhbmRsZXJzKGhhbmRsZXJzOiBBcnJheTxUeXBlPERvbWFpbkV2ZW50SGFuZGxlcj4+KTogQXJyYXk8U3RhdGljUHJvdmlkZXI+IHtcblx0cmV0dXJuIGhhbmRsZXJzLm1hcCgoaGFuZGxlcjogVHlwZTxEb21haW5FdmVudEhhbmRsZXI+KSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHByb3ZpZGU6IERPTUFJTl9FVkVOVF9IQU5ETEVSUyxcblx0XHRcdHVzZUNsYXNzOiBoYW5kbGVyLFxuXHRcdFx0bXVsdGk6IHRydWVcblx0XHR9O1xuXHR9KSBhcyBhbnk7XG59XG4iXX0=