/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HermesObservable } from '../observable/hermes.observable';
import { HermesSubscriber } from '../observable/subscriber/hermes.subscriber';
import { subscriberForOperator } from './operator-utils';
/**
 * @template T, R
 * @param {?} operation
 * @return {?}
 */
export function hermesSwitchMap(operation) {
    return (/**
     * @param {?} source
     * @return {?}
     */
    (source) => {
        return new HermesObservable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let isOuterCompleted = false;
            /** @type {?} */
            let innerSubscriber = null;
            /** @type {?} */
            const tryToComplete = (/**
             * @return {?}
             */
            function () {
                if (isOuterCompleted && !innerSubscriber) {
                    observer.complete();
                }
            });
            /** @type {?} */
            const outerSubscriber = subscriberForOperator(observer, (/**
             * @param {?} v
             * @return {?}
             */
            (v) => {
                if (innerSubscriber) {
                    innerSubscriber.unsubscribe();
                }
                /** @type {?} */
                const subscriber = new HermesSubscriber({
                    next: (/**
                     * @param {?} v2
                     * @return {?}
                     */
                    (v2) => observer.next(v2)),
                    error: (/**
                     * @param {?} e
                     * @return {?}
                     */
                    (e) => observer.error(e)),
                    complete: (/**
                     * @return {?}
                     */
                    () => {
                        innerSubscriber = null;
                        tryToComplete();
                    })
                });
                innerSubscriber = subscriber;
                /** @type {?} */
                const innerSubscription = operation(v).subscribe(subscriber);
                return innerSubscription.getFinalize();
            }), (/**
             * @return {?}
             */
            () => {
                isOuterCompleted = true;
                tryToComplete();
            }));
            return source.subscribe(outerSubscriber).getFinalize();
        }));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnN3aXRjaC1tYXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vc3RyZWFtL29wZXJhdG9yL2hlcm1lcy5zd2l0Y2gtbWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQTBCLE1BQU0saUNBQWlDLENBQUM7QUFDM0YsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7OztBQUl6RCxNQUFNLFVBQVUsZUFBZSxDQUFPLFNBQTRDO0lBRWpGOzs7O0lBQU8sQ0FBQyxNQUEyQixFQUFFLEVBQUU7UUFDdEMsT0FBTyxJQUFJLGdCQUFnQjs7OztRQUFJLENBQUMsUUFBNkIsRUFBRSxFQUFFOztnQkFFNUQsZ0JBQWdCLEdBQUcsS0FBSzs7Z0JBQ3hCLGVBQWUsR0FBK0IsSUFBSTs7a0JBRWhELGFBQWE7OztZQUFHO2dCQUNyQixJQUFJLGdCQUFnQixJQUFJLENBQUMsZUFBZSxFQUFFO29CQUN6QyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ3BCO1lBQ0YsQ0FBQyxDQUFBOztrQkFFSyxlQUFlLEdBQUcscUJBQXFCLENBQzVDLFFBQVE7Ozs7WUFDUixDQUFDLENBQUksRUFBRSxFQUFFO2dCQUVSLElBQUksZUFBZSxFQUFFO29CQUNwQixlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7aUJBQzlCOztzQkFFSyxVQUFVLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQztvQkFDdkMsSUFBSTs7OztvQkFBRSxDQUFDLEVBQU8sRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtvQkFDcEMsS0FBSzs7OztvQkFBRSxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQkFDcEMsUUFBUTs7O29CQUFFLEdBQUcsRUFBRTt3QkFDZCxlQUFlLEdBQUcsSUFBSSxDQUFDO3dCQUN2QixhQUFhLEVBQUUsQ0FBQztvQkFDakIsQ0FBQyxDQUFBO2lCQUNELENBQUM7Z0JBRUYsZUFBZSxHQUFHLFVBQVUsQ0FBQzs7c0JBRXZCLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQy9DLFVBQVUsQ0FDVjtnQkFFRCxPQUFPLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3hDLENBQUM7OztZQUNELEdBQUcsRUFBRTtnQkFDSixnQkFBZ0IsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLGFBQWEsRUFBRSxDQUFDO1lBQ2pCLENBQUMsRUFDRDtZQUVELE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN4RCxDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUMsRUFBQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlLCBIZXJtZXNPcGVyYXRvckZ1bmN0aW9uIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9oZXJtZXMub2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBIZXJtZXNTdWJzY3JpYmVyIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9zdWJzY3JpYmVyL2hlcm1lcy5zdWJzY3JpYmVyJztcbmltcG9ydCB7IHN1YnNjcmliZXJGb3JPcGVyYXRvciB9IGZyb20gJy4vb3BlcmF0b3ItdXRpbHMnO1xuaW1wb3J0IHsgSGVybWVzT2JzZXJ2ZXIgfSBmcm9tICcuLi9vYnNlcnZhYmxlL2hlcm1lcy5vYnNlcnZlcic7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGhlcm1lc1N3aXRjaE1hcDxULCBSPihvcGVyYXRpb246ICh2YWx1ZTogVCkgPT4gSGVybWVzT2JzZXJ2YWJsZTxSPik6IEhlcm1lc09wZXJhdG9yRnVuY3Rpb248VCwgUj4ge1xuXG5cdHJldHVybiAoc291cmNlOiBIZXJtZXNPYnNlcnZhYmxlPFQ+KSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBIZXJtZXNPYnNlcnZhYmxlPFI+KChvYnNlcnZlcjogSGVybWVzT2JzZXJ2ZXI8YW55PikgPT4ge1xuXG5cdFx0XHRsZXQgaXNPdXRlckNvbXBsZXRlZCA9IGZhbHNlO1xuXHRcdFx0bGV0IGlubmVyU3Vic2NyaWJlcjogSGVybWVzU3Vic2NyaWJlcjxUPiB8IG51bGwgPSBudWxsO1xuXG5cdFx0XHRjb25zdCB0cnlUb0NvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmIChpc091dGVyQ29tcGxldGVkICYmICFpbm5lclN1YnNjcmliZXIpIHtcblx0XHRcdFx0XHRvYnNlcnZlci5jb21wbGV0ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRjb25zdCBvdXRlclN1YnNjcmliZXIgPSBzdWJzY3JpYmVyRm9yT3BlcmF0b3I8VD4oXG5cdFx0XHRcdG9ic2VydmVyLFxuXHRcdFx0XHQodjogVCkgPT4ge1xuXG5cdFx0XHRcdFx0aWYgKGlubmVyU3Vic2NyaWJlcikge1xuXHRcdFx0XHRcdFx0aW5uZXJTdWJzY3JpYmVyLnVuc3Vic2NyaWJlKCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3Qgc3Vic2NyaWJlciA9IG5ldyBIZXJtZXNTdWJzY3JpYmVyKHtcblx0XHRcdFx0XHRcdG5leHQ6ICh2MjogYW55KSA9PiBvYnNlcnZlci5uZXh0KHYyKSxcblx0XHRcdFx0XHRcdGVycm9yOiAoZTogYW55KSA9PiBvYnNlcnZlci5lcnJvcihlKSxcblx0XHRcdFx0XHRcdGNvbXBsZXRlOiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlubmVyU3Vic2NyaWJlciA9IG51bGw7XG5cdFx0XHRcdFx0XHRcdHRyeVRvQ29tcGxldGUoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdGlubmVyU3Vic2NyaWJlciA9IHN1YnNjcmliZXI7XG5cblx0XHRcdFx0XHRjb25zdCBpbm5lclN1YnNjcmlwdGlvbiA9IG9wZXJhdGlvbih2KS5zdWJzY3JpYmUoXG5cdFx0XHRcdFx0XHRzdWJzY3JpYmVyXG5cdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdHJldHVybiBpbm5lclN1YnNjcmlwdGlvbi5nZXRGaW5hbGl6ZSgpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQoKSA9PiB7XG5cdFx0XHRcdFx0aXNPdXRlckNvbXBsZXRlZCA9IHRydWU7XG5cdFx0XHRcdFx0dHJ5VG9Db21wbGV0ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXG5cdFx0XHRyZXR1cm4gc291cmNlLnN1YnNjcmliZShvdXRlclN1YnNjcmliZXIpLmdldEZpbmFsaXplKCk7XG5cdFx0fSk7XG5cdH07XG59XG4iXX0=