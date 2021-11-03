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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnN3aXRjaC1tYXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29tbW9uL3N0cmVhbS9vcGVyYXRvci9oZXJtZXMuc3dpdGNoLW1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQTBCLE1BQU0saUNBQWlDLENBQUM7QUFDM0YsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFJekQsTUFBTSxVQUFVLGVBQWUsQ0FBTyxTQUE0QztJQUVqRixPQUFPLENBQUMsTUFBMkIsRUFBRSxFQUFFO1FBQ3RDLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBSSxDQUFDLFFBQTZCLEVBQUUsRUFBRTtZQUVoRSxJQUFJLGdCQUFnQixHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLGVBQWUsR0FBK0IsSUFBSSxDQUFDO1lBRXZELE1BQU0sYUFBYSxHQUFHO2dCQUNyQixJQUFJLGdCQUFnQixJQUFJLENBQUMsZUFBZSxFQUFFO29CQUN6QyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ3BCO1lBQ0YsQ0FBQyxDQUFDO1lBRUYsTUFBTSxlQUFlLEdBQUcscUJBQXFCLENBQzVDLFFBQVEsRUFDUixDQUFDLENBQUksRUFBRSxFQUFFO2dCQUVSLElBQUksZUFBZSxFQUFFO29CQUNwQixlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7aUJBQzlCO2dCQUVELE1BQU0sVUFBVSxHQUFHLElBQUksZ0JBQWdCLENBQUM7b0JBQ3ZDLElBQUksRUFBRSxDQUFDLEVBQU8sRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7b0JBQ3BDLEtBQUssRUFBRSxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ3BDLFFBQVEsRUFBRSxHQUFHLEVBQUU7d0JBQ2QsZUFBZSxHQUFHLElBQUksQ0FBQzt3QkFDdkIsYUFBYSxFQUFFLENBQUM7b0JBQ2pCLENBQUM7aUJBQ0QsQ0FBQyxDQUFDO2dCQUVILGVBQWUsR0FBRyxVQUFVLENBQUM7Z0JBRTdCLE1BQU0saUJBQWlCLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FDL0MsVUFBVSxDQUNWLENBQUM7Z0JBRUYsT0FBTyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN4QyxDQUFDLEVBQ0QsR0FBRyxFQUFFO2dCQUNKLGdCQUFnQixHQUFHLElBQUksQ0FBQztnQkFDeEIsYUFBYSxFQUFFLENBQUM7WUFDakIsQ0FBQyxDQUNELENBQUM7WUFFRixPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSwgSGVybWVzT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gJy4uL29ic2VydmFibGUvaGVybWVzLm9ic2VydmFibGUnO1xuaW1wb3J0IHsgSGVybWVzU3Vic2NyaWJlciB9IGZyb20gJy4uL29ic2VydmFibGUvc3Vic2NyaWJlci9oZXJtZXMuc3Vic2NyaWJlcic7XG5pbXBvcnQgeyBzdWJzY3JpYmVyRm9yT3BlcmF0b3IgfSBmcm9tICcuL29wZXJhdG9yLXV0aWxzJztcbmltcG9ydCB7IEhlcm1lc09ic2VydmVyIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9oZXJtZXMub2JzZXJ2ZXInO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBoZXJtZXNTd2l0Y2hNYXA8VCwgUj4ob3BlcmF0aW9uOiAodmFsdWU6IFQpID0+IEhlcm1lc09ic2VydmFibGU8Uj4pOiBIZXJtZXNPcGVyYXRvckZ1bmN0aW9uPFQsIFI+IHtcblxuXHRyZXR1cm4gKHNvdXJjZTogSGVybWVzT2JzZXJ2YWJsZTxUPikgPT4ge1xuXHRcdHJldHVybiBuZXcgSGVybWVzT2JzZXJ2YWJsZTxSPigob2JzZXJ2ZXI6IEhlcm1lc09ic2VydmVyPGFueT4pID0+IHtcblxuXHRcdFx0bGV0IGlzT3V0ZXJDb21wbGV0ZWQgPSBmYWxzZTtcblx0XHRcdGxldCBpbm5lclN1YnNjcmliZXI6IEhlcm1lc1N1YnNjcmliZXI8VD4gfCBudWxsID0gbnVsbDtcblxuXHRcdFx0Y29uc3QgdHJ5VG9Db21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoaXNPdXRlckNvbXBsZXRlZCAmJiAhaW5uZXJTdWJzY3JpYmVyKSB7XG5cdFx0XHRcdFx0b2JzZXJ2ZXIuY29tcGxldGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0Y29uc3Qgb3V0ZXJTdWJzY3JpYmVyID0gc3Vic2NyaWJlckZvck9wZXJhdG9yPFQ+KFxuXHRcdFx0XHRvYnNlcnZlcixcblx0XHRcdFx0KHY6IFQpID0+IHtcblxuXHRcdFx0XHRcdGlmIChpbm5lclN1YnNjcmliZXIpIHtcblx0XHRcdFx0XHRcdGlubmVyU3Vic2NyaWJlci51bnN1YnNjcmliZSgpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0IHN1YnNjcmliZXIgPSBuZXcgSGVybWVzU3Vic2NyaWJlcih7XG5cdFx0XHRcdFx0XHRuZXh0OiAodjI6IGFueSkgPT4gb2JzZXJ2ZXIubmV4dCh2MiksXG5cdFx0XHRcdFx0XHRlcnJvcjogKGU6IGFueSkgPT4gb2JzZXJ2ZXIuZXJyb3IoZSksXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTogKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRpbm5lclN1YnNjcmliZXIgPSBudWxsO1xuXHRcdFx0XHRcdFx0XHR0cnlUb0NvbXBsZXRlKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRpbm5lclN1YnNjcmliZXIgPSBzdWJzY3JpYmVyO1xuXG5cdFx0XHRcdFx0Y29uc3QgaW5uZXJTdWJzY3JpcHRpb24gPSBvcGVyYXRpb24odikuc3Vic2NyaWJlKFxuXHRcdFx0XHRcdFx0c3Vic2NyaWJlclxuXHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRyZXR1cm4gaW5uZXJTdWJzY3JpcHRpb24uZ2V0RmluYWxpemUoKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdGlzT3V0ZXJDb21wbGV0ZWQgPSB0cnVlO1xuXHRcdFx0XHRcdHRyeVRvQ29tcGxldGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUob3V0ZXJTdWJzY3JpYmVyKS5nZXRGaW5hbGl6ZSgpO1xuXHRcdH0pO1xuXHR9O1xufVxuIl19