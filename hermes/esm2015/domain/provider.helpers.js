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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9wcm92aWRlci5oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7QUFHdEUsTUFBTSxVQUFVLHNCQUFzQixDQUFDLFFBQWdEO0lBQ3RGLE9BQU8sbUJBQUEsUUFBUSxDQUFDLEdBQUc7Ozs7SUFBQyxDQUFDLE9BQXdDLEVBQUUsRUFBRTtRQUNoRSxPQUFPO1lBQ04sT0FBTyxFQUFFLGdCQUFnQjtZQUN6QixRQUFRLEVBQUUsT0FBTztZQUNqQixLQUFLLEVBQUUsSUFBSTtTQUNYLENBQUM7SUFDSCxDQUFDLEVBQUMsRUFBTyxDQUFDO0FBQ1gsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsb0JBQW9CLENBQUMsUUFBeUM7SUFDN0UsT0FBTyxtQkFBQSxRQUFRLENBQUMsR0FBRzs7OztJQUFDLENBQUMsT0FBaUMsRUFBRSxFQUFFO1FBQ3pELE9BQU87WUFDTixPQUFPLEVBQUUscUJBQXFCO1lBQzlCLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLEtBQUssRUFBRSxJQUFJO1NBQ1gsQ0FBQztJQUNILENBQUMsRUFBQyxFQUFPLENBQUM7QUFDWCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGljUHJvdmlkZXIsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlIH0gZnJvbSAnLi9jb21tYW5kL2FnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vY29tbWFuZC9jb21tYW5kLmhhbmRsZXInO1xuaW1wb3J0IHsgQ09NTUFORF9IQU5ETEVSUyB9IGZyb20gJy4vY29tbWFuZC9jb21tYW5kLWhhbmRsZXJzJztcbmltcG9ydCB7IERPTUFJTl9FVkVOVF9IQU5ETEVSUyB9IGZyb20gJy4vZXZlbnQvZG9tYWluLWV2ZW50LWhhbmRsZXJzJztcbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJy4vZXZlbnQvZG9tYWluLWV2ZW50LmhhbmRsZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUNvbW1hbmRIYW5kbGVycyhoYW5kbGVyczogQXJyYXk8VHlwZTxDb21tYW5kSGFuZGxlcjxBZ2dyZWdhdGU+Pj4pOiBBcnJheTxTdGF0aWNQcm92aWRlcj4ge1xuXHRyZXR1cm4gaGFuZGxlcnMubWFwKChoYW5kbGVyOiBUeXBlPENvbW1hbmRIYW5kbGVyPEFnZ3JlZ2F0ZT4+KSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHByb3ZpZGU6IENPTU1BTkRfSEFORExFUlMsXG5cdFx0XHR1c2VDbGFzczogaGFuZGxlcixcblx0XHRcdG11bHRpOiB0cnVlXG5cdFx0fTtcblx0fSkgYXMgYW55O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUV2ZW50SGFuZGxlcnMoaGFuZGxlcnM6IEFycmF5PFR5cGU8RG9tYWluRXZlbnRIYW5kbGVyPj4pOiBBcnJheTxTdGF0aWNQcm92aWRlcj4ge1xuXHRyZXR1cm4gaGFuZGxlcnMubWFwKChoYW5kbGVyOiBUeXBlPERvbWFpbkV2ZW50SGFuZGxlcj4pID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0cHJvdmlkZTogRE9NQUlOX0VWRU5UX0hBTkRMRVJTLFxuXHRcdFx0dXNlQ2xhc3M6IGhhbmRsZXIsXG5cdFx0XHRtdWx0aTogdHJ1ZVxuXHRcdH07XG5cdH0pIGFzIGFueTtcbn1cbiJdfQ==