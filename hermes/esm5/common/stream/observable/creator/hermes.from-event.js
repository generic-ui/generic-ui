/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HermesObservable } from '../hermes.observable';
/**
 * @param {?} element
 * @param {?} type
 * @return {?}
 */
export function hermesFromEvent(element, type) {
    return new HermesObservable((/**
     * @param {?} observer
     * @return {?}
     */
    function (observer) {
        /** @type {?} */
        var listener = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            observer.next(event);
        });
        element.addEventListener(type, listener);
        return (/**
         * @return {?}
         */
        function () {
            element.removeEventListener(type, listener);
        });
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLmZyb20tZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vc3RyZWFtL29ic2VydmFibGUvY3JlYXRvci9oZXJtZXMuZnJvbS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7OztBQUl4RCxNQUFNLFVBQVUsZUFBZSxDQUFDLE9BQW9CLEVBQUUsSUFBZTtJQUVwRSxPQUFPLElBQUksZ0JBQWdCOzs7O0lBQU0sVUFBQyxRQUFROztZQUVuQyxRQUFROzs7O1FBQUcsVUFBQyxLQUFZO1lBQzdCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFBO1FBRUQsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUV6Qzs7O1FBQU87WUFDTixPQUFPLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLENBQUMsRUFBQztJQUNILENBQUMsRUFBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlcm1lc09ic2VydmFibGUgfSBmcm9tICcuLi9oZXJtZXMub2JzZXJ2YWJsZSc7XG5cbnR5cGUgRXZlbnRUeXBlID0gc3RyaW5nO1xuXG5leHBvcnQgZnVuY3Rpb24gaGVybWVzRnJvbUV2ZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0eXBlOiBFdmVudFR5cGUpOiBIZXJtZXNPYnNlcnZhYmxlPGFueT4ge1xuXG5cdHJldHVybiBuZXcgSGVybWVzT2JzZXJ2YWJsZTxhbnk+KChvYnNlcnZlcikgPT4ge1xuXG5cdFx0Y29uc3QgbGlzdGVuZXIgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG5cdFx0XHRvYnNlcnZlci5uZXh0KGV2ZW50KTtcblx0XHR9O1xuXG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKTtcblxuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpO1xuXHRcdH07XG5cdH0pO1xufVxuIl19