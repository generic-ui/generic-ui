import { HermesSubscriber } from '../subscriber/hermes.subscriber';
import { HermesSingle } from './hermes.single';
export function singleFromObservable(source) {
    return new HermesSingle((observer) => {
        const subscriber = new HermesSubscriber({
            next: (value) => observer.next(value),
            error: (error) => observer.error(error),
            complete: () => {
            }
        });
        const subscription = source.subscribe(subscriber);
        return subscription.getFinalize();
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnNpbmdsZS1mcm9tLW9ic2VydmFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29tbW9uL3N0cmVhbS9jb3JlL29ic2VydmFibGUvc2luZ2xlL2hlcm1lcy5zaW5nbGUtZnJvbS1vYnNlcnZhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxNQUFNLFVBQVUsb0JBQW9CLENBQUksTUFBMkI7SUFFbEUsT0FBTyxJQUFJLFlBQVksQ0FBSSxDQUFDLFFBQVEsRUFBRSxFQUFFO1FBRXZDLE1BQU0sVUFBVSxHQUFHLElBQUksZ0JBQWdCLENBQUM7WUFDdkMsSUFBSSxFQUFFLENBQUMsS0FBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN4QyxLQUFLLEVBQUUsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQzVDLFFBQVEsRUFBRSxHQUFHLEVBQUU7WUFDZixDQUFDO1NBQ0QsQ0FBQyxDQUFDO1FBRUgsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FDcEMsVUFBVSxDQUNWLENBQUM7UUFFRixPQUFPLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNuQyxDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnLi4vaGVybWVzLm9ic2VydmFibGUnO1xuaW1wb3J0IHsgSGVybWVzU3Vic2NyaWJlciB9IGZyb20gJy4uL3N1YnNjcmliZXIvaGVybWVzLnN1YnNjcmliZXInO1xuaW1wb3J0IHsgSGVybWVzU2luZ2xlIH0gZnJvbSAnLi9oZXJtZXMuc2luZ2xlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNpbmdsZUZyb21PYnNlcnZhYmxlPFQ+KHNvdXJjZTogSGVybWVzT2JzZXJ2YWJsZTxUPik6IEhlcm1lc1NpbmdsZTxUPiB7XG5cblx0cmV0dXJuIG5ldyBIZXJtZXNTaW5nbGU8VD4oKG9ic2VydmVyKSA9PiB7XG5cblx0XHRjb25zdCBzdWJzY3JpYmVyID0gbmV3IEhlcm1lc1N1YnNjcmliZXIoe1xuXHRcdFx0bmV4dDogKHZhbHVlOiBUKSA9PiBvYnNlcnZlci5uZXh0KHZhbHVlKSxcblx0XHRcdGVycm9yOiAoZXJyb3I6IGFueSkgPT4gb2JzZXJ2ZXIuZXJyb3IoZXJyb3IpLFxuXHRcdFx0Y29tcGxldGU6ICgpID0+IHtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGNvbnN0IHN1YnNjcmlwdGlvbiA9IHNvdXJjZS5zdWJzY3JpYmUoXG5cdFx0XHRzdWJzY3JpYmVyXG5cdFx0KTtcblxuXHRcdHJldHVybiBzdWJzY3JpcHRpb24uZ2V0RmluYWxpemUoKTtcblx0fSk7XG59XG4iXX0=