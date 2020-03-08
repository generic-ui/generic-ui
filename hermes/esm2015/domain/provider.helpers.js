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
    (handler) => {
        return {
            provide: DOMAIN_EVENT_HANDLERS,
            useClass: handler,
            multi: true
        };
    }))));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9wcm92aWRlci5oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7QUFHdEUsTUFBTSxVQUFVLG9CQUFvQixDQUFDLFFBQXlDO0lBQzdFLE9BQU8sbUJBQUEsUUFBUSxDQUFDLEdBQUc7Ozs7SUFBQyxDQUFDLE9BQWlDLEVBQUUsRUFBRTtRQUN6RCxPQUFPO1lBQ04sT0FBTyxFQUFFLHFCQUFxQjtZQUM5QixRQUFRLEVBQUUsT0FBTztZQUNqQixLQUFLLEVBQUUsSUFBSTtTQUNYLENBQUM7SUFDSCxDQUFDLEVBQUMsRUFBTyxDQUFDO0FBQ1gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRpY1Byb3ZpZGVyLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERPTUFJTl9FVkVOVF9IQU5ETEVSUyB9IGZyb20gJy4vZXZlbnQvZG9tYWluLWV2ZW50LWhhbmRsZXJzJztcbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJy4vZXZlbnQvZG9tYWluLWV2ZW50LmhhbmRsZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUV2ZW50SGFuZGxlcnMoaGFuZGxlcnM6IEFycmF5PFR5cGU8RG9tYWluRXZlbnRIYW5kbGVyPj4pOiBBcnJheTxTdGF0aWNQcm92aWRlcj4ge1xuXHRyZXR1cm4gaGFuZGxlcnMubWFwKChoYW5kbGVyOiBUeXBlPERvbWFpbkV2ZW50SGFuZGxlcj4pID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0cHJvdmlkZTogRE9NQUlOX0VWRU5UX0hBTkRMRVJTLFxuXHRcdFx0dXNlQ2xhc3M6IGhhbmRsZXIsXG5cdFx0XHRtdWx0aTogdHJ1ZVxuXHRcdH07XG5cdH0pIGFzIGFueTtcbn1cbiJdfQ==