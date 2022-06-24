import { HermesObservable } from '../observable/hermes.observable';
import { subscriberForOperator } from './operator-utils';
export function hermesSkip(valuesNumber) {
    return (source) => {
        return new HermesObservable(observer => {
            let index = 0;
            const subscriber = subscriberForOperator(observer, (value) => {
                if (index >= valuesNumber) {
                    observer.next(value);
                }
                index++;
            });
            return source.subscribe(subscriber).getFinalize();
        });
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnNraXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29tbW9uL3N0cmVhbS9jb3JlL29wZXJhdG9yL2hlcm1lcy5za2lwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBMEIsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUd6RCxNQUFNLFVBQVUsVUFBVSxDQUFJLFlBQW9CO0lBRWpELE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUVqQixPQUFPLElBQUksZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFFdEMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBRWQsTUFBTSxVQUFVLEdBQUcscUJBQXFCLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQzVELElBQUksS0FBSyxJQUFJLFlBQVksRUFBRTtvQkFDMUIsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDckI7Z0JBRUQsS0FBSyxFQUFFLENBQUM7WUFDVCxDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlLCBIZXJtZXNPcGVyYXRvckZ1bmN0aW9uIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9oZXJtZXMub2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBzdWJzY3JpYmVyRm9yT3BlcmF0b3IgfSBmcm9tICcuL29wZXJhdG9yLXV0aWxzJztcblxuXG5leHBvcnQgZnVuY3Rpb24gaGVybWVzU2tpcDxUPih2YWx1ZXNOdW1iZXI6IG51bWJlcik6IEhlcm1lc09wZXJhdG9yRnVuY3Rpb248VCwgVD4ge1xuXG5cdHJldHVybiAoc291cmNlKSA9PiB7XG5cblx0XHRyZXR1cm4gbmV3IEhlcm1lc09ic2VydmFibGUob2JzZXJ2ZXIgPT4ge1xuXG5cdFx0XHRsZXQgaW5kZXggPSAwO1xuXG5cdFx0XHRjb25zdCBzdWJzY3JpYmVyID0gc3Vic2NyaWJlckZvck9wZXJhdG9yKG9ic2VydmVyLCAodmFsdWUpID0+IHtcblx0XHRcdFx0aWYgKGluZGV4ID49IHZhbHVlc051bWJlcikge1xuXHRcdFx0XHRcdG9ic2VydmVyLm5leHQodmFsdWUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aW5kZXgrKztcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gc291cmNlLnN1YnNjcmliZShzdWJzY3JpYmVyKS5nZXRGaW5hbGl6ZSgpO1xuXHRcdH0pO1xuXHR9O1xufVxuIl19