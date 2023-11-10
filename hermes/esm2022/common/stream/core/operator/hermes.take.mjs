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
                next: () => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnRha2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29tbW9uL3N0cmVhbS9jb3JlL29wZXJhdG9yL2hlcm1lcy50YWtlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBMEIsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHakUsTUFBTSxVQUFVLFVBQVUsQ0FBSSxZQUFvQjtJQUVqRCxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFFakIsSUFBSSxZQUFZLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLE9BQU8sV0FBVyxFQUFFLENBQUM7U0FDckI7UUFFRCxPQUFPLElBQUksZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFFdEMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBRWQsTUFBTSxVQUFVLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQztnQkFDdkMsSUFBSSxFQUFFLEdBQUcsRUFBRTtnQkFDWCxDQUFDO2dCQUNELEtBQUssRUFBRSxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO2FBQ25DLENBQUMsQ0FBQztZQUVGLFVBQWtCLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxVQUFTLENBQU07Z0JBQ2xELElBQUksS0FBSyxHQUFHLFlBQVksRUFBRTtvQkFDekIsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakIsS0FBSyxFQUFFLENBQUM7b0JBRVIsSUFBSSxLQUFLLEtBQUssWUFBWSxFQUFFO3dCQUMzQixVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7cUJBQ3RCO2lCQUNEO1lBQ0YsQ0FBQyxDQUFDO1lBRUYsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FDcEMsVUFBVSxDQUNWLENBQUM7WUFFRixPQUFPLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlLCBIZXJtZXNPcGVyYXRvckZ1bmN0aW9uIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9oZXJtZXMub2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBIZXJtZXNTdWJzY3JpYmVyIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9zdWJzY3JpYmVyL2hlcm1lcy5zdWJzY3JpYmVyJztcbmltcG9ydCB7IGhlcm1lc0VtcHR5IH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9jcmVhdG9yL2hlcm1lcy5lbXB0eSc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGhlcm1lc1Rha2U8VD4odmFsdWVzTnVtYmVyOiBudW1iZXIpOiBIZXJtZXNPcGVyYXRvckZ1bmN0aW9uPFQsIFQ+IHtcblxuXHRyZXR1cm4gKHNvdXJjZSkgPT4ge1xuXG5cdFx0aWYgKHZhbHVlc051bWJlciA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIGhlcm1lc0VtcHR5KCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBIZXJtZXNPYnNlcnZhYmxlKG9ic2VydmVyID0+IHtcblxuXHRcdFx0bGV0IGluZGV4ID0gMDtcblxuXHRcdFx0Y29uc3Qgc3Vic2NyaWJlciA9IG5ldyBIZXJtZXNTdWJzY3JpYmVyKHtcblx0XHRcdFx0bmV4dDogKCkgPT4ge1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnJvcjogKGU6IGFueSkgPT4gb2JzZXJ2ZXIuZXJyb3IoZSksXG5cdFx0XHRcdGNvbXBsZXRlOiAoKSA9PiBvYnNlcnZlci5jb21wbGV0ZSgpXG5cdFx0XHR9KTtcblxuXHRcdFx0KHN1YnNjcmliZXIgYXMgYW55KS5vYnNlcnZlci5uZXh0ID0gZnVuY3Rpb24odjogYW55KSB7XG5cdFx0XHRcdGlmIChpbmRleCA8IHZhbHVlc051bWJlcikge1xuXHRcdFx0XHRcdG9ic2VydmVyLm5leHQodik7XG5cdFx0XHRcdFx0aW5kZXgrKztcblxuXHRcdFx0XHRcdGlmIChpbmRleCA9PT0gdmFsdWVzTnVtYmVyKSB7XG5cdFx0XHRcdFx0XHRzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRjb25zdCBzdWJzY3JpcHRpb24gPSBzb3VyY2Uuc3Vic2NyaWJlKFxuXHRcdFx0XHRzdWJzY3JpYmVyXG5cdFx0XHQpO1xuXG5cdFx0XHRyZXR1cm4gc3Vic2NyaXB0aW9uLmdldEZpbmFsaXplKCk7XG5cdFx0fSk7XG5cdH07XG59XG4iXX0=