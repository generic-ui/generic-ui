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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnNraXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29tbW9uL3N0cmVhbS9vcGVyYXRvci9oZXJtZXMuc2tpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQTBCLE1BQU0saUNBQWlDLENBQUM7QUFDM0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHekQsTUFBTSxVQUFVLFVBQVUsQ0FBSSxZQUFvQjtJQUVqRCxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFFakIsT0FBTyxJQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBRXRDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztZQUVkLE1BQU0sVUFBVSxHQUFHLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUM1RCxJQUFJLEtBQUssSUFBSSxZQUFZLEVBQUU7b0JBQzFCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3JCO2dCQUVELEtBQUssRUFBRSxDQUFDO1lBQ1QsQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSwgSGVybWVzT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gJy4uL29ic2VydmFibGUvaGVybWVzLm9ic2VydmFibGUnO1xuaW1wb3J0IHsgc3Vic2NyaWJlckZvck9wZXJhdG9yIH0gZnJvbSAnLi9vcGVyYXRvci11dGlscyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGhlcm1lc1NraXA8VD4odmFsdWVzTnVtYmVyOiBudW1iZXIpOiBIZXJtZXNPcGVyYXRvckZ1bmN0aW9uPFQsIFQ+IHtcblxuXHRyZXR1cm4gKHNvdXJjZSkgPT4ge1xuXG5cdFx0cmV0dXJuIG5ldyBIZXJtZXNPYnNlcnZhYmxlKG9ic2VydmVyID0+IHtcblxuXHRcdFx0bGV0IGluZGV4ID0gMDtcblxuXHRcdFx0Y29uc3Qgc3Vic2NyaWJlciA9IHN1YnNjcmliZXJGb3JPcGVyYXRvcihvYnNlcnZlciwgKHZhbHVlKSA9PiB7XG5cdFx0XHRcdGlmIChpbmRleCA+PSB2YWx1ZXNOdW1iZXIpIHtcblx0XHRcdFx0XHRvYnNlcnZlci5uZXh0KHZhbHVlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGluZGV4Kys7XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUoc3Vic2NyaWJlcikuZ2V0RmluYWxpemUoKTtcblx0XHR9KTtcblx0fTtcbn1cbiJdfQ==