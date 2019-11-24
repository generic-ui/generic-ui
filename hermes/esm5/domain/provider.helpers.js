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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9wcm92aWRlci5oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7QUFHdEUsTUFBTSxVQUFVLHNCQUFzQixDQUFDLFFBQXFDO0lBQzNFLE9BQU8sbUJBQUEsUUFBUSxDQUFDLEdBQUc7Ozs7SUFBQyxVQUFDLE9BQTZCO1FBQ2pELE9BQU87WUFDTixPQUFPLEVBQUUsZ0JBQWdCO1lBQ3pCLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLEtBQUssRUFBRSxJQUFJO1NBQ1gsQ0FBQztJQUNILENBQUMsRUFBQyxFQUFPLENBQUM7QUFDWCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxvQkFBb0IsQ0FBQyxRQUF5QztJQUM3RSxPQUFPLG1CQUFBLFFBQVEsQ0FBQyxHQUFHOzs7O0lBQUMsVUFBQyxPQUFpQztRQUNyRCxPQUFPO1lBQ04sT0FBTyxFQUFFLHFCQUFxQjtZQUM5QixRQUFRLEVBQUUsT0FBTztZQUNqQixLQUFLLEVBQUUsSUFBSTtTQUNYLENBQUM7SUFDSCxDQUFDLEVBQUMsRUFBTyxDQUFDO0FBQ1gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRpY1Byb3ZpZGVyLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9jb21tYW5kL2NvbW1hbmQuaGFuZGxlcic7XG5pbXBvcnQgeyBDT01NQU5EX0hBTkRMRVJTIH0gZnJvbSAnLi9jb21tYW5kL2NvbW1hbmQtaGFuZGxlcnMnO1xuaW1wb3J0IHsgRE9NQUlOX0VWRU5UX0hBTkRMRVJTIH0gZnJvbSAnLi9ldmVudC9kb21haW4tZXZlbnQtaGFuZGxlcnMnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi9ldmVudC9kb21haW4tZXZlbnQuaGFuZGxlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlQ29tbWFuZEhhbmRsZXJzKGhhbmRsZXJzOiBBcnJheTxUeXBlPENvbW1hbmRIYW5kbGVyPj4pOiBBcnJheTxTdGF0aWNQcm92aWRlcj4ge1xuXHRyZXR1cm4gaGFuZGxlcnMubWFwKChoYW5kbGVyOiBUeXBlPENvbW1hbmRIYW5kbGVyPikgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRwcm92aWRlOiBDT01NQU5EX0hBTkRMRVJTLFxuXHRcdFx0dXNlQ2xhc3M6IGhhbmRsZXIsXG5cdFx0XHRtdWx0aTogdHJ1ZVxuXHRcdH07XG5cdH0pIGFzIGFueTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVFdmVudEhhbmRsZXJzKGhhbmRsZXJzOiBBcnJheTxUeXBlPERvbWFpbkV2ZW50SGFuZGxlcj4+KTogQXJyYXk8U3RhdGljUHJvdmlkZXI+IHtcblx0cmV0dXJuIGhhbmRsZXJzLm1hcCgoaGFuZGxlcjogVHlwZTxEb21haW5FdmVudEhhbmRsZXI+KSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHByb3ZpZGU6IERPTUFJTl9FVkVOVF9IQU5ETEVSUyxcblx0XHRcdHVzZUNsYXNzOiBoYW5kbGVyLFxuXHRcdFx0bXVsdGk6IHRydWVcblx0XHR9O1xuXHR9KSBhcyBhbnk7XG59XG4iXX0=