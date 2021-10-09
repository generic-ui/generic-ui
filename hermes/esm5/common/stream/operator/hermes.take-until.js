/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HermesObservable } from '../observable/hermes.observable';
import { HermesSubscriber } from '../observable/subscriber/hermes.subscriber';
import { subscriberFromObserver } from './operator-utils';
/**
 * @template T
 * @param {?} notifier
 * @return {?}
 */
export function hermesTakeUntil(notifier) {
    return (/**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        return new HermesObservable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var subscriber = subscriberFromObserver(observer);
            /** @type {?} */
            var notifierSubscriber = new HermesSubscriber({
                next: (/**
                 * @return {?}
                 */
                function () { return subscriber.complete(); })
            });
            notifier.subscribe(notifierSubscriber);
            /** @type {?} */
            var subscription = source.subscribe(subscriber);
            return subscription.getFinalize();
        }));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnRha2UtdW50aWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vc3RyZWFtL29wZXJhdG9yL2hlcm1lcy50YWtlLXVudGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQTBCLE1BQU0saUNBQWlDLENBQUM7QUFDM0YsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7OztBQUcxRCxNQUFNLFVBQVUsZUFBZSxDQUFJLFFBQStCO0lBRWpFOzs7O0lBQU8sVUFBQyxNQUFNO1FBQ2IsT0FBTyxJQUFJLGdCQUFnQjs7OztRQUFJLFVBQUEsUUFBUTs7Z0JBRWhDLFVBQVUsR0FBRyxzQkFBc0IsQ0FBQyxRQUFRLENBQUM7O2dCQUU3QyxrQkFBa0IsR0FBRyxJQUFJLGdCQUFnQixDQUFDO2dCQUMvQyxJQUFJOzs7Z0JBQUUsY0FBTSxPQUFBLFVBQVUsQ0FBQyxRQUFRLEVBQUUsRUFBckIsQ0FBcUIsQ0FBQTthQUNqQyxDQUFDO1lBRUYsUUFBUSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDOztnQkFFakMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO1lBRWpELE9BQU8sWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25DLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQyxFQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlcm1lc09ic2VydmFibGUsIEhlcm1lc09wZXJhdG9yRnVuY3Rpb24gfSBmcm9tICcuLi9vYnNlcnZhYmxlL2hlcm1lcy5vYnNlcnZhYmxlJztcbmltcG9ydCB7IEhlcm1lc1N1YnNjcmliZXIgfSBmcm9tICcuLi9vYnNlcnZhYmxlL3N1YnNjcmliZXIvaGVybWVzLnN1YnNjcmliZXInO1xuaW1wb3J0IHsgc3Vic2NyaWJlckZyb21PYnNlcnZlciB9IGZyb20gJy4vb3BlcmF0b3ItdXRpbHMnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBoZXJtZXNUYWtlVW50aWw8VD4obm90aWZpZXI6IEhlcm1lc09ic2VydmFibGU8YW55Pik6IEhlcm1lc09wZXJhdG9yRnVuY3Rpb248VCwgVD4ge1xuXG5cdHJldHVybiAoc291cmNlKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBIZXJtZXNPYnNlcnZhYmxlPFQ+KG9ic2VydmVyID0+IHtcblxuXHRcdFx0Y29uc3Qgc3Vic2NyaWJlciA9IHN1YnNjcmliZXJGcm9tT2JzZXJ2ZXIob2JzZXJ2ZXIpO1xuXG5cdFx0XHRjb25zdCBub3RpZmllclN1YnNjcmliZXIgPSBuZXcgSGVybWVzU3Vic2NyaWJlcih7XG5cdFx0XHRcdG5leHQ6ICgpID0+IHN1YnNjcmliZXIuY29tcGxldGUoKVxuXHRcdFx0fSk7XG5cblx0XHRcdG5vdGlmaWVyLnN1YnNjcmliZShub3RpZmllclN1YnNjcmliZXIpO1xuXG5cdFx0XHRjb25zdCBzdWJzY3JpcHRpb24gPSBzb3VyY2Uuc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuXG5cdFx0XHRyZXR1cm4gc3Vic2NyaXB0aW9uLmdldEZpbmFsaXplKCk7XG5cdFx0fSk7XG5cdH07XG59XG4iXX0=