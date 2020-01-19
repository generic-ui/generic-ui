/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { hermesApi } from './hermes-api';
/**
 * @param {?=} domainName
 * @return {?}
 */
export function enableHermesLoggers(domainName) {
    if (domainName) {
        window[hermesApi].domain = domainName;
    }
    window[hermesApi].loggers = true;
}
/**
 * @return {?}
 */
export function disableHermesLoggers() {
    delete window[hermesApi].domain;
    window[hermesApi].loggers = false;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLWFwaS5oZWxwZXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsidWktYXBpL2hlcm1lcy1hcGkuaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7QUFJekMsTUFBTSxVQUFVLG1CQUFtQixDQUFDLFVBQW1CO0lBRXRELElBQUksVUFBVSxFQUFFO1FBQ2YsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7S0FDdEM7SUFFRCxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztBQUNsQyxDQUFDOzs7O0FBRUQsTUFBTSxVQUFVLG9CQUFvQjtJQUVuQyxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFFaEMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDbkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhlcm1lc0FwaSB9IGZyb20gJy4vaGVybWVzLWFwaSc7XG5cbmRlY2xhcmUgdmFyIHdpbmRvdzogYW55O1xuXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlSGVybWVzTG9nZ2Vycyhkb21haW5OYW1lPzogc3RyaW5nKTogdm9pZCB7XG5cblx0aWYgKGRvbWFpbk5hbWUpIHtcblx0XHR3aW5kb3dbaGVybWVzQXBpXS5kb21haW4gPSBkb21haW5OYW1lO1xuXHR9XG5cblx0d2luZG93W2hlcm1lc0FwaV0ubG9nZ2VycyA9IHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlSGVybWVzTG9nZ2VycygpOiB2b2lkIHtcblxuXHRkZWxldGUgd2luZG93W2hlcm1lc0FwaV0uZG9tYWluO1xuXG5cdHdpbmRvd1toZXJtZXNBcGldLmxvZ2dlcnMgPSBmYWxzZTtcbn1cbiJdfQ==