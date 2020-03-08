/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOMAIN_EVENT_HANDLERS } from './event/domain-event-handlers';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9wcm92aWRlci5oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7QUFHdEUsTUFBTSxVQUFVLG9CQUFvQixDQUFDLFFBQXlDO0lBQzdFLE9BQU8sbUJBQUEsUUFBUSxDQUFDLEdBQUc7Ozs7SUFBQyxVQUFDLE9BQWlDO1FBQ3JELE9BQU87WUFDTixPQUFPLEVBQUUscUJBQXFCO1lBQzlCLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLEtBQUssRUFBRSxJQUFJO1NBQ1gsQ0FBQztJQUNILENBQUMsRUFBQyxFQUFPLENBQUM7QUFDWCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGljUHJvdmlkZXIsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRE9NQUlOX0VWRU5UX0hBTkRMRVJTIH0gZnJvbSAnLi9ldmVudC9kb21haW4tZXZlbnQtaGFuZGxlcnMnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi9ldmVudC9kb21haW4tZXZlbnQuaGFuZGxlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlRXZlbnRIYW5kbGVycyhoYW5kbGVyczogQXJyYXk8VHlwZTxEb21haW5FdmVudEhhbmRsZXI+Pik6IEFycmF5PFN0YXRpY1Byb3ZpZGVyPiB7XG5cdHJldHVybiBoYW5kbGVycy5tYXAoKGhhbmRsZXI6IFR5cGU8RG9tYWluRXZlbnRIYW5kbGVyPikgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRwcm92aWRlOiBET01BSU5fRVZFTlRfSEFORExFUlMsXG5cdFx0XHR1c2VDbGFzczogaGFuZGxlcixcblx0XHRcdG11bHRpOiB0cnVlXG5cdFx0fTtcblx0fSkgYXMgYW55O1xufVxuIl19