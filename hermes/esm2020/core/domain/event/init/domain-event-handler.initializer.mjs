import { DomainEventBus } from '../domain-event.bus';
import { Reactive } from '../../../../common/reactive/reactive';
import { hermesTakeUntil } from '../../../../common/stream/core/operator/hermes.take-until';
import { HermesSubject } from '../../../../common/stream/core/observable/hermes.subject';
export class DomainEventHandlerInitializer extends Reactive {
    constructor(domainEventBus) {
        super();
        this.domainEventBus = domainEventBus;
        this.unsub$ = new HermesSubject();
    }
    init(eventHandlers) {
        if (eventHandlers) {
            const set = new Set();
            const filteredHandlers = [];
            eventHandlers.filter((handler) => {
                if (!set.has(handler.domainEventHandler)) {
                    set.add(handler.domainEventHandler);
                    filteredHandlers.push(handler);
                }
            });
            filteredHandlers.forEach((handler) => {
                this.domainEventBus
                    .ofEventHandlers([handler])
                    .pipe(hermesTakeUntil(this.unsub$), this.hermesTakeUntil())
                    .subscribe((event) => {
                    handler.handleEvent(event);
                });
            });
            // console.log('Registered event handlers:', filteredHandlers.length)
            // console.log('Registered event handlers:', filteredHandlers)
        }
    }
    reinit(eventHandlers) {
        this.stop();
        this.init(eventHandlers);
    }
    stop() {
        this.unsub$.next();
        this.unsub$.complete();
        this.unsub$ = new HermesSubject();
    }
}
DomainEventHandlerInitializer.services = [DomainEventBus];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LWhhbmRsZXIuaW5pdGlhbGl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29yZS9kb21haW4vZXZlbnQvaW5pdC9kb21haW4tZXZlbnQtaGFuZGxlci5pbml0aWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUM1RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMERBQTBELENBQUM7QUFHekYsTUFBTSxPQUFPLDZCQUErRSxTQUFRLFFBQVE7SUFJM0csWUFBNkIsY0FBOEI7UUFDMUQsS0FBSyxFQUFFLENBQUM7UUFEb0IsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRm5ELFdBQU0sR0FBRyxJQUFJLGFBQWEsRUFBUSxDQUFDO0lBSTNDLENBQUM7SUFJRCxJQUFJLENBQ0gsYUFBa0Q7UUFHbEQsSUFBSSxhQUFhLEVBQUU7WUFFbEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUN0QixNQUFNLGdCQUFnQixHQUF3QyxFQUFFLENBQUM7WUFFakUsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQXFDLEVBQUUsRUFBRTtnQkFDOUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUUsT0FBZSxDQUFDLGtCQUFrQixDQUFDLEVBQUU7b0JBQ2xELEdBQUcsQ0FBQyxHQUFHLENBQUUsT0FBZSxDQUFDLGtCQUFrQixDQUFDLENBQUM7b0JBQzdDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDL0I7WUFDRixDQUFDLENBQUMsQ0FBQztZQUVILGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQXFDLEVBQUUsRUFBRTtnQkFDbEUsSUFBSSxDQUFDLGNBQWM7cUJBQ2pCLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUMxQixJQUFJLENBQ0osZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFDNUIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUN0QjtxQkFDQSxTQUFTLENBQUMsQ0FBQyxLQUFRLEVBQUUsRUFBRTtvQkFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDNUIsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUVILHFFQUFxRTtZQUNyRSw4REFBOEQ7U0FDOUQ7SUFDRixDQUFDO0lBRUQsTUFBTSxDQUNMLGFBQWtEO1FBRWxELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQUk7UUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO0lBQ25DLENBQUM7O0FBOUNlLHNDQUFRLEdBQUcsQ0FBQyxjQUFjLENBQVUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlckltcGwgfSBmcm9tICcuLi9oYW5kbGVyL2RvbWFpbi1ldmVudC1oYW5kbGVyLWltcGwnO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi8uLi8uLi9hcGkvdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4uLy4uLy4uL2FwaS9ldmVudC9kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRCdXMgfSBmcm9tICcuLi9kb21haW4tZXZlbnQuYnVzJztcbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3JlYWN0aXZlL3JlYWN0aXZlJztcbmltcG9ydCB7IGhlcm1lc1Rha2VVbnRpbCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9zdHJlYW0vY29yZS9vcGVyYXRvci9oZXJtZXMudGFrZS11bnRpbCc7XG5pbXBvcnQgeyBIZXJtZXNTdWJqZWN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3N0cmVhbS9jb3JlL29ic2VydmFibGUvaGVybWVzLnN1YmplY3QnO1xuXG5cbmV4cG9ydCBjbGFzcyBEb21haW5FdmVudEhhbmRsZXJJbml0aWFsaXplcjxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEUgZXh0ZW5kcyBEb21haW5FdmVudDxJPj4gZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0cHJpdmF0ZSB1bnN1YiQgPSBuZXcgSGVybWVzU3ViamVjdDx2b2lkPigpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHN0YXRpYyByZWFkb25seSBzZXJ2aWNlcyA9IFtEb21haW5FdmVudEJ1c10gYXMgY29uc3Q7XG5cblx0aW5pdChcblx0XHRldmVudEhhbmRsZXJzOiBBcnJheTxEb21haW5FdmVudEhhbmRsZXJJbXBsPEksIEU+PlxuXHQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudEhhbmRsZXJzKSB7XG5cblx0XHRcdGNvbnN0IHNldCA9IG5ldyBTZXQoKTtcblx0XHRcdGNvbnN0IGZpbHRlcmVkSGFuZGxlcnM6IEFycmF5PERvbWFpbkV2ZW50SGFuZGxlckltcGw8SSwgRT4+ID0gW107XG5cblx0XHRcdGV2ZW50SGFuZGxlcnMuZmlsdGVyKChoYW5kbGVyOiBEb21haW5FdmVudEhhbmRsZXJJbXBsPEksIEU+KSA9PiB7XG5cdFx0XHRcdGlmICghc2V0LmhhcygoaGFuZGxlciBhcyBhbnkpLmRvbWFpbkV2ZW50SGFuZGxlcikpIHtcblx0XHRcdFx0XHRzZXQuYWRkKChoYW5kbGVyIGFzIGFueSkuZG9tYWluRXZlbnRIYW5kbGVyKTtcblx0XHRcdFx0XHRmaWx0ZXJlZEhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRmaWx0ZXJlZEhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXI6IERvbWFpbkV2ZW50SGFuZGxlckltcGw8SSwgRT4pID0+IHtcblx0XHRcdFx0dGhpcy5kb21haW5FdmVudEJ1c1xuXHRcdFx0XHRcdC5vZkV2ZW50SGFuZGxlcnMoW2hhbmRsZXJdKVxuXHRcdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdFx0aGVybWVzVGFrZVVudGlsKHRoaXMudW5zdWIkKSxcblx0XHRcdFx0XHRcdHRoaXMuaGVybWVzVGFrZVVudGlsKClcblx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0LnN1YnNjcmliZSgoZXZlbnQ6IEUpID0+IHtcblx0XHRcdFx0XHRcdGhhbmRsZXIuaGFuZGxlRXZlbnQoZXZlbnQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIGNvbnNvbGUubG9nKCdSZWdpc3RlcmVkIGV2ZW50IGhhbmRsZXJzOicsIGZpbHRlcmVkSGFuZGxlcnMubGVuZ3RoKVxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ1JlZ2lzdGVyZWQgZXZlbnQgaGFuZGxlcnM6JywgZmlsdGVyZWRIYW5kbGVycylcblx0XHR9XG5cdH1cblxuXHRyZWluaXQoXG5cdFx0ZXZlbnRIYW5kbGVyczogQXJyYXk8RG9tYWluRXZlbnRIYW5kbGVySW1wbDxJLCBFPj5cblx0KTogdm9pZCB7XG5cdFx0dGhpcy5zdG9wKCk7XG5cdFx0dGhpcy5pbml0KGV2ZW50SGFuZGxlcnMpO1xuXHR9XG5cblx0c3RvcCgpOiB2b2lkIHtcblx0XHR0aGlzLnVuc3ViJC5uZXh0KCk7XG5cdFx0dGhpcy51bnN1YiQuY29tcGxldGUoKTtcblx0XHR0aGlzLnVuc3ViJCA9IG5ldyBIZXJtZXNTdWJqZWN0KCk7XG5cdH1cbn1cbiJdfQ==