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
    function (handler) {
        return {
            provide: DOMAIN_EVENT_HANDLERS,
            useClass: handler,
            multi: true
        };
    }))));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvcmUvZG9tYWluL3Byb3ZpZGVyLmhlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU1BLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7Ozs7QUFFOUUsTUFBTSxVQUFVLG9CQUFvQixDQUFrRCxRQUErQztJQUNwSSxPQUFPLG1CQUFBLFFBQVEsQ0FBQyxHQUFHOzs7O0lBQUMsVUFBQyxPQUF1QztRQUMzRCxPQUFPO1lBQ04sT0FBTyxFQUFFLHFCQUFxQjtZQUM5QixRQUFRLEVBQUUsT0FBTztZQUNqQixLQUFLLEVBQUUsSUFBSTtTQUNYLENBQUM7SUFDSCxDQUFDLEVBQUMsRUFBTyxDQUFDO0FBQ1gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRpY1Byb3ZpZGVyLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi9ldmVudC9kb21haW4tZXZlbnQnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICcuL2V2ZW50L2hhbmRsZXIvZG9tYWluLWV2ZW50LmhhbmRsZXInO1xuaW1wb3J0IHsgRE9NQUlOX0VWRU5UX0hBTkRMRVJTIH0gZnJvbSAnLi9ldmVudC9oYW5kbGVyL2RvbWFpbi1ldmVudC1oYW5kbGVycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlRXZlbnRIYW5kbGVyczxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEUgZXh0ZW5kcyBEb21haW5FdmVudDxJPj4oaGFuZGxlcnM6IEFycmF5PFR5cGU8RG9tYWluRXZlbnRIYW5kbGVyPEksIEU+Pj4pOiBBcnJheTxTdGF0aWNQcm92aWRlcj4ge1xuXHRyZXR1cm4gaGFuZGxlcnMubWFwKChoYW5kbGVyOiBUeXBlPERvbWFpbkV2ZW50SGFuZGxlcjxJLCBFPj4pID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0cHJvdmlkZTogRE9NQUlOX0VWRU5UX0hBTkRMRVJTLFxuXHRcdFx0dXNlQ2xhc3M6IGhhbmRsZXIsXG5cdFx0XHRtdWx0aTogdHJ1ZVxuXHRcdH07XG5cdH0pIGFzIGFueTtcbn1cbiJdfQ==