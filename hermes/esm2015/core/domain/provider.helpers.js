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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvcmUvZG9tYWluL3Byb3ZpZGVyLmhlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU1BLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7Ozs7QUFFOUUsTUFBTSxVQUFVLG9CQUFvQixDQUFrRCxRQUErQztJQUNwSSxPQUFPLG1CQUFBLFFBQVEsQ0FBQyxHQUFHOzs7O0lBQUMsQ0FBQyxPQUF1QyxFQUFFLEVBQUU7UUFDL0QsT0FBTztZQUNOLE9BQU8sRUFBRSxxQkFBcUI7WUFDOUIsUUFBUSxFQUFFLE9BQU87WUFDakIsS0FBSyxFQUFFLElBQUk7U0FDWCxDQUFDO0lBQ0gsQ0FBQyxFQUFDLEVBQU8sQ0FBQztBQUNYLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0aWNQcm92aWRlciwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4vZXZlbnQvZG9tYWluLWV2ZW50JztcblxuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi9ldmVudC9oYW5kbGVyL2RvbWFpbi1ldmVudC5oYW5kbGVyJztcbmltcG9ydCB7IERPTUFJTl9FVkVOVF9IQU5ETEVSUyB9IGZyb20gJy4vZXZlbnQvaGFuZGxlci9kb21haW4tZXZlbnQtaGFuZGxlcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUV2ZW50SGFuZGxlcnM8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBFIGV4dGVuZHMgRG9tYWluRXZlbnQ8ST4+KGhhbmRsZXJzOiBBcnJheTxUeXBlPERvbWFpbkV2ZW50SGFuZGxlcjxJLCBFPj4+KTogQXJyYXk8U3RhdGljUHJvdmlkZXI+IHtcblx0cmV0dXJuIGhhbmRsZXJzLm1hcCgoaGFuZGxlcjogVHlwZTxEb21haW5FdmVudEhhbmRsZXI8SSwgRT4+KSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHByb3ZpZGU6IERPTUFJTl9FVkVOVF9IQU5ETEVSUyxcblx0XHRcdHVzZUNsYXNzOiBoYW5kbGVyLFxuXHRcdFx0bXVsdGk6IHRydWVcblx0XHR9O1xuXHR9KSBhcyBhbnk7XG59XG4iXX0=