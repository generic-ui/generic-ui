/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOMAIN_EVENT_HANDLERS } from './event/handler/domain-event-handlers';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9wcm92aWRlci5oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFNQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7Ozs7O0FBRTlFLE1BQU0sVUFBVSxvQkFBb0IsQ0FBa0QsUUFBK0M7SUFDcEksT0FBTyxtQkFBQSxRQUFRLENBQUMsR0FBRzs7OztJQUFDLENBQUMsT0FBdUMsRUFBRSxFQUFFO1FBQy9ELE9BQU87WUFDTixPQUFPLEVBQUUscUJBQXFCO1lBQzlCLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLEtBQUssRUFBRSxJQUFJO1NBQ1gsQ0FBQztJQUNILENBQUMsRUFBQyxFQUFPLENBQUM7QUFDWCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGljUHJvdmlkZXIsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICcuL2V2ZW50L2RvbWFpbi1ldmVudCc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi9ldmVudC9oYW5kbGVyL2RvbWFpbi1ldmVudC5oYW5kbGVyJztcbmltcG9ydCB7IERPTUFJTl9FVkVOVF9IQU5ETEVSUyB9IGZyb20gJy4vZXZlbnQvaGFuZGxlci9kb21haW4tZXZlbnQtaGFuZGxlcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUV2ZW50SGFuZGxlcnM8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBFIGV4dGVuZHMgRG9tYWluRXZlbnQ8ST4+KGhhbmRsZXJzOiBBcnJheTxUeXBlPERvbWFpbkV2ZW50SGFuZGxlcjxJLCBFPj4+KTogQXJyYXk8U3RhdGljUHJvdmlkZXI+IHtcblx0cmV0dXJuIGhhbmRsZXJzLm1hcCgoaGFuZGxlcjogVHlwZTxEb21haW5FdmVudEhhbmRsZXI8SSwgRT4+KSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHByb3ZpZGU6IERPTUFJTl9FVkVOVF9IQU5ETEVSUyxcblx0XHRcdHVzZUNsYXNzOiBoYW5kbGVyLFxuXHRcdFx0bXVsdGk6IHRydWVcblx0XHR9O1xuXHR9KSBhcyBhbnk7XG59XG4iXX0=