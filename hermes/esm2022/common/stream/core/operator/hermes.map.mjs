import { HermesObservable } from '../observable/hermes.observable';
import { subscriberForOperator } from './operator-utils';
export function hermesMap(convert) {
    return (source) => {
        return new HermesObservable((observer) => {
            let index = 0;
            const subscriber = subscriberForOperator(observer, (value) => {
                observer.next(convert(value, index++));
            });
            return source.subscribe(subscriber).getFinalize();
        });
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLm1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb21tb24vc3RyZWFtL2NvcmUvb3BlcmF0b3IvaGVybWVzLm1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQTBCLE1BQU0saUNBQWlDLENBQUM7QUFDM0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFJekQsTUFBTSxVQUFVLFNBQVMsQ0FBTyxPQUF1QztJQUV0RSxPQUFPLENBQUMsTUFBMkIsRUFBRSxFQUFFO1FBQ3RDLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBSSxDQUFDLFFBQTZCLEVBQUUsRUFBRTtZQUNoRSxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7WUFFZCxNQUFNLFVBQVUsR0FBRyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFRLEVBQUUsRUFBRTtnQkFDL0QsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4QyxDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlLCBIZXJtZXNPcGVyYXRvckZ1bmN0aW9uIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9oZXJtZXMub2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBzdWJzY3JpYmVyRm9yT3BlcmF0b3IgfSBmcm9tICcuL29wZXJhdG9yLXV0aWxzJztcbmltcG9ydCB7IEhlcm1lc09ic2VydmVyIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9oZXJtZXMub2JzZXJ2ZXInO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBoZXJtZXNNYXA8VCwgUj4oY29udmVydDogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSA9PiBSKTogSGVybWVzT3BlcmF0b3JGdW5jdGlvbjxULCBSPiB7XG5cblx0cmV0dXJuIChzb3VyY2U6IEhlcm1lc09ic2VydmFibGU8VD4pID0+IHtcblx0XHRyZXR1cm4gbmV3IEhlcm1lc09ic2VydmFibGU8Uj4oKG9ic2VydmVyOiBIZXJtZXNPYnNlcnZlcjxhbnk+KSA9PiB7XG5cdFx0XHRsZXQgaW5kZXggPSAwO1xuXG5cdFx0XHRjb25zdCBzdWJzY3JpYmVyID0gc3Vic2NyaWJlckZvck9wZXJhdG9yKG9ic2VydmVyLCAodmFsdWU6IFQpID0+IHtcblx0XHRcdFx0b2JzZXJ2ZXIubmV4dChjb252ZXJ0KHZhbHVlLCBpbmRleCsrKSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUoc3Vic2NyaWJlcikuZ2V0RmluYWxpemUoKTtcblx0XHR9KTtcblx0fTtcbn1cbiJdfQ==