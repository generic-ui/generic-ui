import { HermesObservable } from '../observable/hermes.observable';
import { HermesSubscriber } from '../observable/subscriber/hermes.subscriber';
import { subscriberForOperator } from './operator-utils';
export function hermesSwitchMap(operation) {
    return (source) => {
        return new HermesObservable((observer) => {
            let isOuterCompleted = false;
            let innerSubscriber = null;
            const tryToComplete = function () {
                if (isOuterCompleted && !innerSubscriber) {
                    observer.complete();
                }
            };
            const outerSubscriber = subscriberForOperator(observer, (v) => {
                if (innerSubscriber) {
                    innerSubscriber.unsubscribe();
                }
                const subscriber = new HermesSubscriber({
                    next: (v2) => observer.next(v2),
                    error: (e) => observer.error(e),
                    complete: () => {
                        innerSubscriber = null;
                        tryToComplete();
                    }
                });
                innerSubscriber = subscriber;
                const innerSubscription = operation(v).subscribe(subscriber);
                return innerSubscription.getFinalize();
            }, () => {
                isOuterCompleted = true;
                tryToComplete();
            });
            return source.subscribe(outerSubscriber).getFinalize();
        });
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnN3aXRjaC1tYXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29tbW9uL3N0cmVhbS9jb3JlL29wZXJhdG9yL2hlcm1lcy5zd2l0Y2gtbWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBMEIsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUl6RCxNQUFNLFVBQVUsZUFBZSxDQUFPLFNBQTRDO0lBRWpGLE9BQU8sQ0FBQyxNQUEyQixFQUFFLEVBQUU7UUFDdEMsT0FBTyxJQUFJLGdCQUFnQixDQUFJLENBQUMsUUFBNkIsRUFBRSxFQUFFO1lBRWhFLElBQUksZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksZUFBZSxHQUErQixJQUFJLENBQUM7WUFFdkQsTUFBTSxhQUFhLEdBQUc7Z0JBQ3JCLElBQUksZ0JBQWdCLElBQUksQ0FBQyxlQUFlLEVBQUU7b0JBQ3pDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDcEI7WUFDRixDQUFDLENBQUM7WUFFRixNQUFNLGVBQWUsR0FBRyxxQkFBcUIsQ0FDNUMsUUFBUSxFQUNSLENBQUMsQ0FBSSxFQUFFLEVBQUU7Z0JBRVIsSUFBSSxlQUFlLEVBQUU7b0JBQ3BCLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQkFDOUI7Z0JBRUQsTUFBTSxVQUFVLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQztvQkFDdkMsSUFBSSxFQUFFLENBQUMsRUFBTyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztvQkFDcEMsS0FBSyxFQUFFLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDcEMsUUFBUSxFQUFFLEdBQUcsRUFBRTt3QkFDZCxlQUFlLEdBQUcsSUFBSSxDQUFDO3dCQUN2QixhQUFhLEVBQUUsQ0FBQztvQkFDakIsQ0FBQztpQkFDRCxDQUFDLENBQUM7Z0JBRUgsZUFBZSxHQUFHLFVBQVUsQ0FBQztnQkFFN0IsTUFBTSxpQkFBaUIsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUMvQyxVQUFVLENBQ1YsQ0FBQztnQkFFRixPQUFPLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3hDLENBQUMsRUFDRCxHQUFHLEVBQUU7Z0JBQ0osZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixhQUFhLEVBQUUsQ0FBQztZQUNqQixDQUFDLENBQ0QsQ0FBQztZQUVGLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN4RCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlLCBIZXJtZXNPcGVyYXRvckZ1bmN0aW9uIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9oZXJtZXMub2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBIZXJtZXNTdWJzY3JpYmVyIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9zdWJzY3JpYmVyL2hlcm1lcy5zdWJzY3JpYmVyJztcbmltcG9ydCB7IHN1YnNjcmliZXJGb3JPcGVyYXRvciB9IGZyb20gJy4vb3BlcmF0b3ItdXRpbHMnO1xuaW1wb3J0IHsgSGVybWVzT2JzZXJ2ZXIgfSBmcm9tICcuLi9vYnNlcnZhYmxlL2hlcm1lcy5vYnNlcnZlcic7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGhlcm1lc1N3aXRjaE1hcDxULCBSPihvcGVyYXRpb246ICh2YWx1ZTogVCkgPT4gSGVybWVzT2JzZXJ2YWJsZTxSPik6IEhlcm1lc09wZXJhdG9yRnVuY3Rpb248VCwgUj4ge1xuXG5cdHJldHVybiAoc291cmNlOiBIZXJtZXNPYnNlcnZhYmxlPFQ+KSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBIZXJtZXNPYnNlcnZhYmxlPFI+KChvYnNlcnZlcjogSGVybWVzT2JzZXJ2ZXI8YW55PikgPT4ge1xuXG5cdFx0XHRsZXQgaXNPdXRlckNvbXBsZXRlZCA9IGZhbHNlO1xuXHRcdFx0bGV0IGlubmVyU3Vic2NyaWJlcjogSGVybWVzU3Vic2NyaWJlcjxUPiB8IG51bGwgPSBudWxsO1xuXG5cdFx0XHRjb25zdCB0cnlUb0NvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmIChpc091dGVyQ29tcGxldGVkICYmICFpbm5lclN1YnNjcmliZXIpIHtcblx0XHRcdFx0XHRvYnNlcnZlci5jb21wbGV0ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRjb25zdCBvdXRlclN1YnNjcmliZXIgPSBzdWJzY3JpYmVyRm9yT3BlcmF0b3I8VD4oXG5cdFx0XHRcdG9ic2VydmVyLFxuXHRcdFx0XHQodjogVCkgPT4ge1xuXG5cdFx0XHRcdFx0aWYgKGlubmVyU3Vic2NyaWJlcikge1xuXHRcdFx0XHRcdFx0aW5uZXJTdWJzY3JpYmVyLnVuc3Vic2NyaWJlKCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3Qgc3Vic2NyaWJlciA9IG5ldyBIZXJtZXNTdWJzY3JpYmVyKHtcblx0XHRcdFx0XHRcdG5leHQ6ICh2MjogYW55KSA9PiBvYnNlcnZlci5uZXh0KHYyKSxcblx0XHRcdFx0XHRcdGVycm9yOiAoZTogYW55KSA9PiBvYnNlcnZlci5lcnJvcihlKSxcblx0XHRcdFx0XHRcdGNvbXBsZXRlOiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlubmVyU3Vic2NyaWJlciA9IG51bGw7XG5cdFx0XHRcdFx0XHRcdHRyeVRvQ29tcGxldGUoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdGlubmVyU3Vic2NyaWJlciA9IHN1YnNjcmliZXI7XG5cblx0XHRcdFx0XHRjb25zdCBpbm5lclN1YnNjcmlwdGlvbiA9IG9wZXJhdGlvbih2KS5zdWJzY3JpYmUoXG5cdFx0XHRcdFx0XHRzdWJzY3JpYmVyXG5cdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdHJldHVybiBpbm5lclN1YnNjcmlwdGlvbi5nZXRGaW5hbGl6ZSgpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQoKSA9PiB7XG5cdFx0XHRcdFx0aXNPdXRlckNvbXBsZXRlZCA9IHRydWU7XG5cdFx0XHRcdFx0dHJ5VG9Db21wbGV0ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXG5cdFx0XHRyZXR1cm4gc291cmNlLnN1YnNjcmliZShvdXRlclN1YnNjcmliZXIpLmdldEZpbmFsaXplKCk7XG5cdFx0fSk7XG5cdH07XG59XG4iXX0=