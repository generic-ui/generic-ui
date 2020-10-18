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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLWFwaS5oZWxwZXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29yZS9hcGkvaGVybWVzLWFwaS5oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7OztBQUl6QyxNQUFNLFVBQVUsbUJBQW1CLENBQUMsVUFBbUI7SUFFdEQsSUFBSSxVQUFVLEVBQUU7UUFDZixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztLQUN0QztJQUVELE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ2xDLENBQUM7Ozs7QUFFRCxNQUFNLFVBQVUsb0JBQW9CO0lBRW5DLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUVoQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztBQUNuQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGVybWVzQXBpIH0gZnJvbSAnLi9oZXJtZXMtYXBpJztcblxuZGVjbGFyZSB2YXIgd2luZG93OiBhbnk7XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVIZXJtZXNMb2dnZXJzKGRvbWFpbk5hbWU/OiBzdHJpbmcpOiB2b2lkIHtcblxuXHRpZiAoZG9tYWluTmFtZSkge1xuXHRcdHdpbmRvd1toZXJtZXNBcGldLmRvbWFpbiA9IGRvbWFpbk5hbWU7XG5cdH1cblxuXHR3aW5kb3dbaGVybWVzQXBpXS5sb2dnZXJzID0gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVIZXJtZXNMb2dnZXJzKCk6IHZvaWQge1xuXG5cdGRlbGV0ZSB3aW5kb3dbaGVybWVzQXBpXS5kb21haW47XG5cblx0d2luZG93W2hlcm1lc0FwaV0ubG9nZ2VycyA9IGZhbHNlO1xufVxuIl19