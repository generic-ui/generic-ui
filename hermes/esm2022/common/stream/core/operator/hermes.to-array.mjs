import { HermesObservable } from '../observable/hermes.observable';
import { subscriberForOperator } from './operator-utils';
export function hermesToArray() {
    return (source) => {
        return new HermesObservable((observer) => {
            const values = [];
            const subscriber = subscriberForOperator(observer, (value) => {
                values.push(value);
            }, () => {
                if (values.length > 0) {
                    observer.next(values);
                }
                observer.complete();
            });
            return source.subscribe(subscriber).getFinalize();
        });
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnRvLWFycmF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1oZXJtZXMvc3JjL2NvbW1vbi9zdHJlYW0vY29yZS9vcGVyYXRvci9oZXJtZXMudG8tYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUEwQixNQUFNLGlDQUFpQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBR3pELE1BQU0sVUFBVSxhQUFhO0lBRTVCLE9BQU8sQ0FBQyxNQUEyQixFQUFFLEVBQUU7UUFDdEMsT0FBTyxJQUFJLGdCQUFnQixDQUFXLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFFbEQsTUFBTSxNQUFNLEdBQWEsRUFBRSxDQUFDO1lBRTVCLE1BQU0sVUFBVSxHQUNmLHFCQUFxQixDQUNwQixRQUFRLEVBQ1IsQ0FBQyxLQUFRLEVBQUUsRUFBRTtnQkFDWixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BCLENBQUMsRUFDRCxHQUFHLEVBQUU7Z0JBQ0osSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDdEIsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDdEI7Z0JBQ0QsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3JCLENBQUMsQ0FDRCxDQUFDO1lBRUgsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlcm1lc09ic2VydmFibGUsIEhlcm1lc09wZXJhdG9yRnVuY3Rpb24gfSBmcm9tICcuLi9vYnNlcnZhYmxlL2hlcm1lcy5vYnNlcnZhYmxlJztcbmltcG9ydCB7IHN1YnNjcmliZXJGb3JPcGVyYXRvciB9IGZyb20gJy4vb3BlcmF0b3ItdXRpbHMnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBoZXJtZXNUb0FycmF5PFQ+KCk6IEhlcm1lc09wZXJhdG9yRnVuY3Rpb248VCwgQXJyYXk8VD4+IHtcblxuXHRyZXR1cm4gKHNvdXJjZTogSGVybWVzT2JzZXJ2YWJsZTxUPikgPT4ge1xuXHRcdHJldHVybiBuZXcgSGVybWVzT2JzZXJ2YWJsZTxBcnJheTxUPj4oKG9ic2VydmVyKSA9PiB7XG5cblx0XHRcdGNvbnN0IHZhbHVlczogQXJyYXk8VD4gPSBbXTtcblxuXHRcdFx0Y29uc3Qgc3Vic2NyaWJlciA9XG5cdFx0XHRcdHN1YnNjcmliZXJGb3JPcGVyYXRvcjxhbnk+KFxuXHRcdFx0XHRcdG9ic2VydmVyLFxuXHRcdFx0XHRcdCh2YWx1ZTogVCkgPT4ge1xuXHRcdFx0XHRcdFx0dmFsdWVzLnB1c2godmFsdWUpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHZhbHVlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdG9ic2VydmVyLm5leHQodmFsdWVzKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdG9ic2VydmVyLmNvbXBsZXRlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXG5cdFx0XHRyZXR1cm4gc291cmNlLnN1YnNjcmliZShzdWJzY3JpYmVyKS5nZXRGaW5hbGl6ZSgpO1xuXHRcdH0pO1xuXHR9O1xufVxuIl19