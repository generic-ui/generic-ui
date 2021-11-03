import { HermesObservable } from '../observable/hermes.observable';
import { HermesSubscriber } from '../observable/subscriber/hermes.subscriber';
import { hermesEmpty } from '../observable/creator/hermes.empty';
export function hermesTake(valuesNumber) {
    return (source) => {
        if (valuesNumber === 0) {
            return hermesEmpty();
        }
        return new HermesObservable(observer => {
            let index = 0;
            const subscriber = new HermesSubscriber({
                next: (v) => {
                },
                error: (e) => observer.error(e),
                complete: () => observer.complete()
            });
            subscriber.observer.next = function (v) {
                if (index < valuesNumber) {
                    observer.next(v);
                    index++;
                    if (index === valuesNumber) {
                        subscriber.complete();
                    }
                }
            };
            const subscription = source.subscribe(subscriber);
            return subscription.getFinalize();
        });
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnRha2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29tbW9uL3N0cmVhbS9vcGVyYXRvci9oZXJtZXMudGFrZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQTBCLE1BQU0saUNBQWlDLENBQUM7QUFDM0YsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDOUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBR2pFLE1BQU0sVUFBVSxVQUFVLENBQUksWUFBb0I7SUFFakQsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBRWpCLElBQUksWUFBWSxLQUFLLENBQUMsRUFBRTtZQUN2QixPQUFPLFdBQVcsRUFBRSxDQUFDO1NBQ3JCO1FBRUQsT0FBTyxJQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBRXRDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztZQUVkLE1BQU0sVUFBVSxHQUFHLElBQUksZ0JBQWdCLENBQUM7Z0JBQ3ZDLElBQUksRUFBRSxDQUFDLENBQUksRUFBRSxFQUFFO2dCQUNmLENBQUM7Z0JBQ0QsS0FBSyxFQUFFLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUU7YUFDbkMsQ0FBQyxDQUFDO1lBRUYsVUFBa0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLFVBQVMsQ0FBTTtnQkFDbEQsSUFBSSxLQUFLLEdBQUcsWUFBWSxFQUFFO29CQUN6QixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQixLQUFLLEVBQUUsQ0FBQztvQkFFUixJQUFJLEtBQUssS0FBSyxZQUFZLEVBQUU7d0JBQzNCLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztxQkFDdEI7aUJBQ0Q7WUFDRixDQUFDLENBQUM7WUFFRixNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsU0FBUyxDQUNwQyxVQUFVLENBQ1YsQ0FBQztZQUVGLE9BQU8sWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlcm1lc09ic2VydmFibGUsIEhlcm1lc09wZXJhdG9yRnVuY3Rpb24gfSBmcm9tICcuLi9vYnNlcnZhYmxlL2hlcm1lcy5vYnNlcnZhYmxlJztcbmltcG9ydCB7IEhlcm1lc1N1YnNjcmliZXIgfSBmcm9tICcuLi9vYnNlcnZhYmxlL3N1YnNjcmliZXIvaGVybWVzLnN1YnNjcmliZXInO1xuaW1wb3J0IHsgaGVybWVzRW1wdHkgfSBmcm9tICcuLi9vYnNlcnZhYmxlL2NyZWF0b3IvaGVybWVzLmVtcHR5JztcblxuXG5leHBvcnQgZnVuY3Rpb24gaGVybWVzVGFrZTxUPih2YWx1ZXNOdW1iZXI6IG51bWJlcik6IEhlcm1lc09wZXJhdG9yRnVuY3Rpb248VCwgVD4ge1xuXG5cdHJldHVybiAoc291cmNlKSA9PiB7XG5cblx0XHRpZiAodmFsdWVzTnVtYmVyID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gaGVybWVzRW1wdHkoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IEhlcm1lc09ic2VydmFibGUob2JzZXJ2ZXIgPT4ge1xuXG5cdFx0XHRsZXQgaW5kZXggPSAwO1xuXG5cdFx0XHRjb25zdCBzdWJzY3JpYmVyID0gbmV3IEhlcm1lc1N1YnNjcmliZXIoe1xuXHRcdFx0XHRuZXh0OiAodjogVCkgPT4ge1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnJvcjogKGU6IGFueSkgPT4gb2JzZXJ2ZXIuZXJyb3IoZSksXG5cdFx0XHRcdGNvbXBsZXRlOiAoKSA9PiBvYnNlcnZlci5jb21wbGV0ZSgpXG5cdFx0XHR9KTtcblxuXHRcdFx0KHN1YnNjcmliZXIgYXMgYW55KS5vYnNlcnZlci5uZXh0ID0gZnVuY3Rpb24odjogYW55KSB7XG5cdFx0XHRcdGlmIChpbmRleCA8IHZhbHVlc051bWJlcikge1xuXHRcdFx0XHRcdG9ic2VydmVyLm5leHQodik7XG5cdFx0XHRcdFx0aW5kZXgrKztcblxuXHRcdFx0XHRcdGlmIChpbmRleCA9PT0gdmFsdWVzTnVtYmVyKSB7XG5cdFx0XHRcdFx0XHRzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRjb25zdCBzdWJzY3JpcHRpb24gPSBzb3VyY2Uuc3Vic2NyaWJlKFxuXHRcdFx0XHRzdWJzY3JpYmVyXG5cdFx0XHQpO1xuXG5cdFx0XHRyZXR1cm4gc3Vic2NyaXB0aW9uLmdldEZpbmFsaXplKCk7XG5cdFx0fSk7XG5cdH07XG59XG4iXX0=