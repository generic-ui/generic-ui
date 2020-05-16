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
    function (handler) {
        return {
            provide: DOMAIN_EVENT_HANDLERS,
            useClass: handler,
            multi: true
        };
    }))));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9wcm92aWRlci5oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7O0FBSXRFLE1BQU0sVUFBVSxvQkFBb0IsQ0FBa0QsUUFBK0M7SUFDcEksT0FBTyxtQkFBQSxRQUFRLENBQUMsR0FBRzs7OztJQUFDLFVBQUMsT0FBdUM7UUFDM0QsT0FBTztZQUNOLE9BQU8sRUFBRSxxQkFBcUI7WUFDOUIsUUFBUSxFQUFFLE9BQU87WUFDakIsS0FBSyxFQUFFLElBQUk7U0FDWCxDQUFDO0lBQ0gsQ0FBQyxFQUFDLEVBQU8sQ0FBQztBQUNYLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0aWNQcm92aWRlciwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4vZXZlbnQvZG9tYWluLWV2ZW50JztcblxuaW1wb3J0IHsgRE9NQUlOX0VWRU5UX0hBTkRMRVJTIH0gZnJvbSAnLi9ldmVudC9kb21haW4tZXZlbnQtaGFuZGxlcnMnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi9ldmVudC9kb21haW4tZXZlbnQuaGFuZGxlcic7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4vYWdncmVnYXRlLWlkJztcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVFdmVudEhhbmRsZXJzPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgRSBleHRlbmRzIERvbWFpbkV2ZW50PEk+PihoYW5kbGVyczogQXJyYXk8VHlwZTxEb21haW5FdmVudEhhbmRsZXI8SSwgRT4+Pik6IEFycmF5PFN0YXRpY1Byb3ZpZGVyPiB7XG5cdHJldHVybiBoYW5kbGVycy5tYXAoKGhhbmRsZXI6IFR5cGU8RG9tYWluRXZlbnRIYW5kbGVyPEksIEU+PikgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRwcm92aWRlOiBET01BSU5fRVZFTlRfSEFORExFUlMsXG5cdFx0XHR1c2VDbGFzczogaGFuZGxlcixcblx0XHRcdG11bHRpOiB0cnVlXG5cdFx0fTtcblx0fSkgYXMgYW55O1xufVxuIl19