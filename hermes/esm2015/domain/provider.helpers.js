/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOMAIN_EVENT_HANDLERS } from './event/domain-event-handlers';
/**
 * @template I, E
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9wcm92aWRlci5oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7O0FBSXRFLE1BQU0sVUFBVSxvQkFBb0IsQ0FBa0QsUUFBK0M7SUFDcEksT0FBTyxtQkFBQSxRQUFRLENBQUMsR0FBRzs7OztJQUFDLENBQUMsT0FBdUMsRUFBRSxFQUFFO1FBQy9ELE9BQU87WUFDTixPQUFPLEVBQUUscUJBQXFCO1lBQzlCLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLEtBQUssRUFBRSxJQUFJO1NBQ1gsQ0FBQztJQUNILENBQUMsRUFBQyxFQUFPLENBQUM7QUFDWCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGljUHJvdmlkZXIsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICcuL2V2ZW50L2RvbWFpbi1ldmVudCc7XG5cbmltcG9ydCB7IERPTUFJTl9FVkVOVF9IQU5ETEVSUyB9IGZyb20gJy4vZXZlbnQvZG9tYWluLWV2ZW50LWhhbmRsZXJzJztcbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJy4vZXZlbnQvZG9tYWluLWV2ZW50LmhhbmRsZXInO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuL2FnZ3JlZ2F0ZS1pZCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlRXZlbnRIYW5kbGVyczxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEUgZXh0ZW5kcyBEb21haW5FdmVudDxJPj4oaGFuZGxlcnM6IEFycmF5PFR5cGU8RG9tYWluRXZlbnRIYW5kbGVyPEksIEU+Pj4pOiBBcnJheTxTdGF0aWNQcm92aWRlcj4ge1xuXHRyZXR1cm4gaGFuZGxlcnMubWFwKChoYW5kbGVyOiBUeXBlPERvbWFpbkV2ZW50SGFuZGxlcjxJLCBFPj4pID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0cHJvdmlkZTogRE9NQUlOX0VWRU5UX0hBTkRMRVJTLFxuXHRcdFx0dXNlQ2xhc3M6IGhhbmRsZXIsXG5cdFx0XHRtdWx0aTogdHJ1ZVxuXHRcdH07XG5cdH0pIGFzIGFueTtcbn1cbiJdfQ==