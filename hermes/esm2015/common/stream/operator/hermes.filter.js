import { HermesObservable } from '../observable/hermes.observable';
import { subscriberForOperator } from './operator-utils';
export function hermesFilter(operation) {
    return (source) => {
        return new HermesObservable(observer => {
            const subscriber = subscriberForOperator(observer, (value) => {
                if (operation(value)) {
                    observer.next(value);
                }
            });
            return source.subscribe(subscriber).getFinalize();
        });
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLmZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb21tb24vc3RyZWFtL29wZXJhdG9yL2hlcm1lcy5maWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUEwQixNQUFNLGlDQUFpQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXpELE1BQU0sVUFBVSxZQUFZLENBQUksU0FBa0M7SUFDakUsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ2pCLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUV0QyxNQUFNLFVBQVUsR0FBRyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDNUQsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ3JCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3JCO1lBQ0YsQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDbEQsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSwgSGVybWVzT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gJy4uL29ic2VydmFibGUvaGVybWVzLm9ic2VydmFibGUnO1xuaW1wb3J0IHsgc3Vic2NyaWJlckZvck9wZXJhdG9yIH0gZnJvbSAnLi9vcGVyYXRvci11dGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBoZXJtZXNGaWx0ZXI8VD4ob3BlcmF0aW9uOiAodmFsdWU6IGFueSkgPT4gYm9vbGVhbik6IEhlcm1lc09wZXJhdG9yRnVuY3Rpb248VCwgVD4ge1xuXHRyZXR1cm4gKHNvdXJjZSkgPT4ge1xuXHRcdHJldHVybiBuZXcgSGVybWVzT2JzZXJ2YWJsZShvYnNlcnZlciA9PiB7XG5cblx0XHRcdGNvbnN0IHN1YnNjcmliZXIgPSBzdWJzY3JpYmVyRm9yT3BlcmF0b3Iob2JzZXJ2ZXIsICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRpZiAob3BlcmF0aW9uKHZhbHVlKSkge1xuXHRcdFx0XHRcdG9ic2VydmVyLm5leHQodmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUoc3Vic2NyaWJlcikuZ2V0RmluYWxpemUoKVxuXHRcdH0pO1xuXHR9O1xufVxuIl19