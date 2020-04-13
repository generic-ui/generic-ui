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
    (handler) => {
        return {
            provide: DOMAIN_EVENT_HANDLERS,
            useClass: handler,
            multi: true
        };
    }))));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9wcm92aWRlci5oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7O0FBSXRFLE1BQU0sVUFBVSxvQkFBb0IsQ0FBd0IsUUFBNEM7SUFDdkcsT0FBTyxtQkFBQSxRQUFRLENBQUMsR0FBRzs7OztJQUFDLENBQUMsT0FBb0MsRUFBRSxFQUFFO1FBQzVELE9BQU87WUFDTixPQUFPLEVBQUUscUJBQXFCO1lBQzlCLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLEtBQUssRUFBRSxJQUFJO1NBQ1gsQ0FBQztJQUNILENBQUMsRUFBQyxFQUFPLENBQUM7QUFDWCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGljUHJvdmlkZXIsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRE9NQUlOX0VWRU5UX0hBTkRMRVJTIH0gZnJvbSAnLi9ldmVudC9kb21haW4tZXZlbnQtaGFuZGxlcnMnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi9ldmVudC9kb21haW4tZXZlbnQuaGFuZGxlcic7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4vYWdncmVnYXRlLWlkJztcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVFdmVudEhhbmRsZXJzPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZD4oaGFuZGxlcnM6IEFycmF5PFR5cGU8RG9tYWluRXZlbnRIYW5kbGVyPEk+Pj4pOiBBcnJheTxTdGF0aWNQcm92aWRlcj4ge1xuXHRyZXR1cm4gaGFuZGxlcnMubWFwKChoYW5kbGVyOiBUeXBlPERvbWFpbkV2ZW50SGFuZGxlcjxJPj4pID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0cHJvdmlkZTogRE9NQUlOX0VWRU5UX0hBTkRMRVJTLFxuXHRcdFx0dXNlQ2xhc3M6IGhhbmRsZXIsXG5cdFx0XHRtdWx0aTogdHJ1ZVxuXHRcdH07XG5cdH0pIGFzIGFueTtcbn1cbiJdfQ==