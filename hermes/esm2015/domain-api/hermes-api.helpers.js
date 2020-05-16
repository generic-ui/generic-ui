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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLWFwaS5oZWxwZXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluLWFwaS9oZXJtZXMtYXBpLmhlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7O0FBSXpDLE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxVQUFtQjtJQUV0RCxJQUFJLFVBQVUsRUFBRTtRQUNmLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO0tBQ3RDO0lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDbEMsQ0FBQzs7OztBQUVELE1BQU0sVUFBVSxvQkFBb0I7SUFFbkMsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBRWhDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBQ25DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoZXJtZXNBcGkgfSBmcm9tICcuL2hlcm1lcy1hcGknO1xuXG5kZWNsYXJlIHZhciB3aW5kb3c6IGFueTtcblxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUhlcm1lc0xvZ2dlcnMoZG9tYWluTmFtZT86IHN0cmluZyk6IHZvaWQge1xuXG5cdGlmIChkb21haW5OYW1lKSB7XG5cdFx0d2luZG93W2hlcm1lc0FwaV0uZG9tYWluID0gZG9tYWluTmFtZTtcblx0fVxuXG5cdHdpbmRvd1toZXJtZXNBcGldLmxvZ2dlcnMgPSB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzYWJsZUhlcm1lc0xvZ2dlcnMoKTogdm9pZCB7XG5cblx0ZGVsZXRlIHdpbmRvd1toZXJtZXNBcGldLmRvbWFpbjtcblxuXHR3aW5kb3dbaGVybWVzQXBpXS5sb2dnZXJzID0gZmFsc2U7XG59XG4iXX0=