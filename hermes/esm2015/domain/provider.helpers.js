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
    (handler) => {
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
    (handler) => {
        return {
            provide: DOMAIN_EVENT_HANDLERS,
            useClass: handler,
            multi: true
        };
    }))));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9wcm92aWRlci5oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7QUFHdEUsTUFBTSxVQUFVLHNCQUFzQixDQUFDLFFBQXFDO0lBQzNFLE9BQU8sbUJBQUEsUUFBUSxDQUFDLEdBQUc7Ozs7SUFBQyxDQUFDLE9BQTZCLEVBQUUsRUFBRTtRQUNyRCxPQUFPO1lBQ04sT0FBTyxFQUFFLGdCQUFnQjtZQUN6QixRQUFRLEVBQUUsT0FBTztZQUNqQixLQUFLLEVBQUUsSUFBSTtTQUNYLENBQUM7SUFDSCxDQUFDLEVBQUMsRUFBTyxDQUFDO0FBQ1gsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsb0JBQW9CLENBQUMsUUFBeUM7SUFDN0UsT0FBTyxtQkFBQSxRQUFRLENBQUMsR0FBRzs7OztJQUFDLENBQUMsT0FBaUMsRUFBRSxFQUFFO1FBQ3pELE9BQU87WUFDTixPQUFPLEVBQUUscUJBQXFCO1lBQzlCLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLEtBQUssRUFBRSxJQUFJO1NBQ1gsQ0FBQztJQUNILENBQUMsRUFBQyxFQUFPLENBQUM7QUFDWCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGljUHJvdmlkZXIsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL2NvbW1hbmQvY29tbWFuZC5oYW5kbGVyJztcbmltcG9ydCB7IENPTU1BTkRfSEFORExFUlMgfSBmcm9tICcuL2NvbW1hbmQvY29tbWFuZC1oYW5kbGVycyc7XG5pbXBvcnQgeyBET01BSU5fRVZFTlRfSEFORExFUlMgfSBmcm9tICcuL2V2ZW50L2RvbWFpbi1ldmVudC1oYW5kbGVycyc7XG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICcuL2V2ZW50L2RvbWFpbi1ldmVudC5oYW5kbGVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVDb21tYW5kSGFuZGxlcnMoaGFuZGxlcnM6IEFycmF5PFR5cGU8Q29tbWFuZEhhbmRsZXI+Pik6IEFycmF5PFN0YXRpY1Byb3ZpZGVyPiB7XG5cdHJldHVybiBoYW5kbGVycy5tYXAoKGhhbmRsZXI6IFR5cGU8Q29tbWFuZEhhbmRsZXI+KSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHByb3ZpZGU6IENPTU1BTkRfSEFORExFUlMsXG5cdFx0XHR1c2VDbGFzczogaGFuZGxlcixcblx0XHRcdG11bHRpOiB0cnVlXG5cdFx0fTtcblx0fSkgYXMgYW55O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUV2ZW50SGFuZGxlcnMoaGFuZGxlcnM6IEFycmF5PFR5cGU8RG9tYWluRXZlbnRIYW5kbGVyPj4pOiBBcnJheTxTdGF0aWNQcm92aWRlcj4ge1xuXHRyZXR1cm4gaGFuZGxlcnMubWFwKChoYW5kbGVyOiBUeXBlPERvbWFpbkV2ZW50SGFuZGxlcj4pID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0cHJvdmlkZTogRE9NQUlOX0VWRU5UX0hBTkRMRVJTLFxuXHRcdFx0dXNlQ2xhc3M6IGhhbmRsZXIsXG5cdFx0XHRtdWx0aTogdHJ1ZVxuXHRcdH07XG5cdH0pIGFzIGFueTtcbn1cbiJdfQ==