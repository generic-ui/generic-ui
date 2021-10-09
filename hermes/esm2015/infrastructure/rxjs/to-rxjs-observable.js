/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs';
/**
 * @template T
 * @param {?} source$
 * @return {?}
 */
export function toRxJsObservable(source$) {
    return new Observable((/**
     * @param {?} observer
     * @return {?}
     */
    (observer) => {
        /** @type {?} */
        const subscription = source$.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => observer.next(value)), (/**
         * @param {?} error
         * @return {?}
         */
        (error) => observer.error(error)), (/**
         * @return {?}
         */
        () => observer.complete()));
        return (/**
         * @return {?}
         */
        () => subscription.unsubscribe());
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG8tcnhqcy1vYnNlcnZhYmxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiaW5mcmFzdHJ1Y3R1cmUvcnhqcy90by1yeGpzLW9ic2VydmFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7OztBQUVsQyxNQUFNLFVBQVUsZ0JBQWdCLENBQUksT0FBNEI7SUFDL0QsT0FBTyxJQUFJLFVBQVU7Ozs7SUFBQyxDQUFDLFFBQVEsRUFBRSxFQUFFOztjQUM1QixZQUFZLEdBQUcsT0FBTyxDQUFDLFNBQVM7Ozs7UUFDckMsQ0FBQyxLQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDOzs7O1FBQ2xDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQzs7O1FBQ3JDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFDekI7UUFDRDs7O1FBQU8sR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxFQUFDO0lBQ3pDLENBQUMsRUFBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlcm1lc09ic2VydmFibGUgfSBmcm9tICcuLi8uLi9jb21tb24vc3RyZWFtL29ic2VydmFibGUvaGVybWVzLm9ic2VydmFibGUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9SeEpzT2JzZXJ2YWJsZTxUPihzb3VyY2UkOiBIZXJtZXNPYnNlcnZhYmxlPFQ+KTogT2JzZXJ2YWJsZTxUPiB7XG5cdHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXIpID0+IHtcblx0XHRjb25zdCBzdWJzY3JpcHRpb24gPSBzb3VyY2UkLnN1YnNjcmliZShcblx0XHRcdCh2YWx1ZTogVCkgPT4gb2JzZXJ2ZXIubmV4dCh2YWx1ZSksXG5cdFx0XHQoZXJyb3I6IGFueSkgPT4gb2JzZXJ2ZXIuZXJyb3IoZXJyb3IpLFxuXHRcdFx0KCkgPT4gb2JzZXJ2ZXIuY29tcGxldGUoKVxuXHRcdCk7XG5cdFx0cmV0dXJuICgpID0+IHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXHR9KTtcbn1cbiJdfQ==