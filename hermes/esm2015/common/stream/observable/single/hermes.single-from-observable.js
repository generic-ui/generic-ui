/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HermesSubscriber } from '../subscriber/hermes.subscriber';
import { HermesSingle } from './hermes.single';
/**
 * @template T
 * @param {?} source
 * @return {?}
 */
export function singleFromObservable(source) {
    return new HermesSingle((/**
     * @param {?} observer
     * @return {?}
     */
    (observer) => {
        /** @type {?} */
        const subscriber = new HermesSubscriber({
            next: (/**
             * @param {?} value
             * @return {?}
             */
            (value) => observer.next(value)),
            error: (/**
             * @param {?} error
             * @return {?}
             */
            (error) => observer.error(error)),
            complete: (/**
             * @return {?}
             */
            () => {
            })
        });
        /** @type {?} */
        const subscription = source.subscribe(subscriber);
        return subscription.getFinalize();
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnNpbmdsZS1mcm9tLW9ic2VydmFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vc3RyZWFtL29ic2VydmFibGUvc2luZ2xlL2hlcm1lcy5zaW5nbGUtZnJvbS1vYnNlcnZhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7OztBQUUvQyxNQUFNLFVBQVUsb0JBQW9CLENBQUksTUFBMkI7SUFFbEUsT0FBTyxJQUFJLFlBQVk7Ozs7SUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFOztjQUVqQyxVQUFVLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQztZQUN2QyxJQUFJOzs7O1lBQUUsQ0FBQyxLQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDeEMsS0FBSzs7OztZQUFFLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQzVDLFFBQVE7OztZQUFFLEdBQUcsRUFBRTtZQUNmLENBQUMsQ0FBQTtTQUNELENBQUM7O2NBRUksWUFBWSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQ3BDLFVBQVUsQ0FDVjtRQUVELE9BQU8sWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUMsRUFBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlcm1lc09ic2VydmFibGUgfSBmcm9tICcuLi9oZXJtZXMub2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBIZXJtZXNTdWJzY3JpYmVyIH0gZnJvbSAnLi4vc3Vic2NyaWJlci9oZXJtZXMuc3Vic2NyaWJlcic7XG5pbXBvcnQgeyBIZXJtZXNTaW5nbGUgfSBmcm9tICcuL2hlcm1lcy5zaW5nbGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2luZ2xlRnJvbU9ic2VydmFibGU8VD4oc291cmNlOiBIZXJtZXNPYnNlcnZhYmxlPFQ+KTogSGVybWVzU2luZ2xlPFQ+IHtcblxuXHRyZXR1cm4gbmV3IEhlcm1lc1NpbmdsZTxUPigob2JzZXJ2ZXIpID0+IHtcblxuXHRcdGNvbnN0IHN1YnNjcmliZXIgPSBuZXcgSGVybWVzU3Vic2NyaWJlcih7XG5cdFx0XHRuZXh0OiAodmFsdWU6IFQpID0+IG9ic2VydmVyLm5leHQodmFsdWUpLFxuXHRcdFx0ZXJyb3I6IChlcnJvcjogYW55KSA9PiBvYnNlcnZlci5lcnJvcihlcnJvciksXG5cdFx0XHRjb21wbGV0ZTogKCkgPT4ge1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Y29uc3Qgc3Vic2NyaXB0aW9uID0gc291cmNlLnN1YnNjcmliZShcblx0XHRcdHN1YnNjcmliZXJcblx0XHQpO1xuXG5cdFx0cmV0dXJuIHN1YnNjcmlwdGlvbi5nZXRGaW5hbGl6ZSgpO1xuXHR9KTtcbn1cbiJdfQ==