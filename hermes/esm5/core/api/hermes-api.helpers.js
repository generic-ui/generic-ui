/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { hermesApi } from './hermes-api';
/**
 * @param {?=} domainName
 * @param {?=} windowObject
 * @return {?}
 */
export function enableHermesLoggers(domainName, windowObject) {
    /** @type {?} */
    var winRef = windowObject ? windowObject : window;
    if (domainName) {
        winRef[hermesApi].domain = domainName;
    }
    winRef[hermesApi].loggers = true;
}
/**
 * @param {?=} windowObject
 * @return {?}
 */
export function disableHermesLoggers(windowObject) {
    /** @type {?} */
    var winRef = windowObject ? windowObject : window;
    delete winRef[hermesApi].domain;
    winRef[hermesApi].loggers = false;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLWFwaS5oZWxwZXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29yZS9hcGkvaGVybWVzLWFwaS5oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7Ozs7QUFJekMsTUFBTSxVQUFVLG1CQUFtQixDQUFDLFVBQW1CLEVBQUUsWUFBcUI7O1FBRXZFLE1BQU0sR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTTtJQUVuRCxJQUFJLFVBQVUsRUFBRTtRQUNmLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO0tBQ3RDO0lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDbEMsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsb0JBQW9CLENBQUMsWUFBcUI7O1FBRW5ELE1BQU0sR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTTtJQUVuRCxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFFaEMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDbkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhlcm1lc0FwaSB9IGZyb20gJy4vaGVybWVzLWFwaSc7XG5cbmRlY2xhcmUgY29uc3Qgd2luZG93OiBXaW5kb3c7XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVIZXJtZXNMb2dnZXJzKGRvbWFpbk5hbWU/OiBzdHJpbmcsIHdpbmRvd09iamVjdD86IFdpbmRvdyk6IHZvaWQge1xuXG5cdGNvbnN0IHdpblJlZiA9IHdpbmRvd09iamVjdCA/IHdpbmRvd09iamVjdCA6IHdpbmRvdztcblxuXHRpZiAoZG9tYWluTmFtZSkge1xuXHRcdHdpblJlZltoZXJtZXNBcGldLmRvbWFpbiA9IGRvbWFpbk5hbWU7XG5cdH1cblxuXHR3aW5SZWZbaGVybWVzQXBpXS5sb2dnZXJzID0gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVIZXJtZXNMb2dnZXJzKHdpbmRvd09iamVjdD86IFdpbmRvdyk6IHZvaWQge1xuXG5cdGNvbnN0IHdpblJlZiA9IHdpbmRvd09iamVjdCA/IHdpbmRvd09iamVjdCA6IHdpbmRvdztcblxuXHRkZWxldGUgd2luUmVmW2hlcm1lc0FwaV0uZG9tYWluO1xuXG5cdHdpblJlZltoZXJtZXNBcGldLmxvZ2dlcnMgPSBmYWxzZTtcbn1cbiJdfQ==