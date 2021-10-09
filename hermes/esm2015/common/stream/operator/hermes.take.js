/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HermesObservable } from '../observable/hermes.observable';
import { HermesSubscriber } from '../observable/subscriber/hermes.subscriber';
import { hermesEmpty } from '../observable/creator/hermes.empty';
/**
 * @template T
 * @param {?} valuesNumber
 * @return {?}
 */
export function hermesTake(valuesNumber) {
    return (/**
     * @param {?} source
     * @return {?}
     */
    (source) => {
        if (valuesNumber === 0) {
            return hermesEmpty();
        }
        return new HermesObservable((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
            /** @type {?} */
            let index = 0;
            /** @type {?} */
            const subscriber = new HermesSubscriber({
                next: (/**
                 * @param {?} v
                 * @return {?}
                 */
                (v) => {
                }),
                error: (/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => observer.error(e)),
                complete: (/**
                 * @return {?}
                 */
                () => observer.complete())
            });
            ((/** @type {?} */ (subscriber))).observer.next = (/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
                if (index < valuesNumber) {
                    observer.next(v);
                    index++;
                    if (index === valuesNumber) {
                        subscriber.complete();
                    }
                }
            });
            /** @type {?} */
            const subscription = source.subscribe(subscriber);
            return subscription.getFinalize();
        }));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnRha2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vc3RyZWFtL29wZXJhdG9yL2hlcm1lcy50YWtlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQTBCLE1BQU0saUNBQWlDLENBQUM7QUFDM0YsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDOUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7Ozs7QUFHakUsTUFBTSxVQUFVLFVBQVUsQ0FBSSxZQUFvQjtJQUVqRDs7OztJQUFPLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFFakIsSUFBSSxZQUFZLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLE9BQU8sV0FBVyxFQUFFLENBQUM7U0FDckI7UUFFRCxPQUFPLElBQUksZ0JBQWdCOzs7O1FBQUMsUUFBUSxDQUFDLEVBQUU7O2dCQUVsQyxLQUFLLEdBQUcsQ0FBQzs7a0JBRVAsVUFBVSxHQUFHLElBQUksZ0JBQWdCLENBQUM7Z0JBQ3ZDLElBQUk7Ozs7Z0JBQUUsQ0FBQyxDQUFJLEVBQUUsRUFBRTtnQkFDZixDQUFDLENBQUE7Z0JBQ0QsS0FBSzs7OztnQkFBRSxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDcEMsUUFBUTs7O2dCQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQTthQUNuQyxDQUFDO1lBRUYsQ0FBQyxtQkFBQSxVQUFVLEVBQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJOzs7O1lBQUcsVUFBUyxDQUFNO2dCQUNsRCxJQUFJLEtBQUssR0FBRyxZQUFZLEVBQUU7b0JBQ3pCLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLEtBQUssRUFBRSxDQUFDO29CQUVSLElBQUksS0FBSyxLQUFLLFlBQVksRUFBRTt3QkFDM0IsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO3FCQUN0QjtpQkFDRDtZQUNGLENBQUMsQ0FBQSxDQUFDOztrQkFFSSxZQUFZLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FDcEMsVUFBVSxDQUNWO1lBRUQsT0FBTyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkMsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDLEVBQUM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSwgSGVybWVzT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gJy4uL29ic2VydmFibGUvaGVybWVzLm9ic2VydmFibGUnO1xuaW1wb3J0IHsgSGVybWVzU3Vic2NyaWJlciB9IGZyb20gJy4uL29ic2VydmFibGUvc3Vic2NyaWJlci9oZXJtZXMuc3Vic2NyaWJlcic7XG5pbXBvcnQgeyBoZXJtZXNFbXB0eSB9IGZyb20gJy4uL29ic2VydmFibGUvY3JlYXRvci9oZXJtZXMuZW1wdHknO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBoZXJtZXNUYWtlPFQ+KHZhbHVlc051bWJlcjogbnVtYmVyKTogSGVybWVzT3BlcmF0b3JGdW5jdGlvbjxULCBUPiB7XG5cblx0cmV0dXJuIChzb3VyY2UpID0+IHtcblxuXHRcdGlmICh2YWx1ZXNOdW1iZXIgPT09IDApIHtcblx0XHRcdHJldHVybiBoZXJtZXNFbXB0eSgpO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgSGVybWVzT2JzZXJ2YWJsZShvYnNlcnZlciA9PiB7XG5cblx0XHRcdGxldCBpbmRleCA9IDA7XG5cblx0XHRcdGNvbnN0IHN1YnNjcmliZXIgPSBuZXcgSGVybWVzU3Vic2NyaWJlcih7XG5cdFx0XHRcdG5leHQ6ICh2OiBUKSA9PiB7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVycm9yOiAoZTogYW55KSA9PiBvYnNlcnZlci5lcnJvcihlKSxcblx0XHRcdFx0Y29tcGxldGU6ICgpID0+IG9ic2VydmVyLmNvbXBsZXRlKClcblx0XHRcdH0pO1xuXG5cdFx0XHQoc3Vic2NyaWJlciBhcyBhbnkpLm9ic2VydmVyLm5leHQgPSBmdW5jdGlvbih2OiBhbnkpIHtcblx0XHRcdFx0aWYgKGluZGV4IDwgdmFsdWVzTnVtYmVyKSB7XG5cdFx0XHRcdFx0b2JzZXJ2ZXIubmV4dCh2KTtcblx0XHRcdFx0XHRpbmRleCsrO1xuXG5cdFx0XHRcdFx0aWYgKGluZGV4ID09PSB2YWx1ZXNOdW1iZXIpIHtcblx0XHRcdFx0XHRcdHN1YnNjcmliZXIuY29tcGxldGUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdGNvbnN0IHN1YnNjcmlwdGlvbiA9IHNvdXJjZS5zdWJzY3JpYmUoXG5cdFx0XHRcdHN1YnNjcmliZXJcblx0XHRcdCk7XG5cblx0XHRcdHJldHVybiBzdWJzY3JpcHRpb24uZ2V0RmluYWxpemUoKTtcblx0XHR9KTtcblx0fTtcbn1cbiJdfQ==