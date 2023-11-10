import { DomainEventBus } from '../domain-event.bus';
import { Reactive } from '../../../../common/reactive/reactive';
import { hermesTakeUntil } from '../../../../common/stream/core/operator/hermes.take-until';
import { HermesSubject } from '../../../../common/stream/core/observable/hermes.subject';
export class DomainEventHandlerInitializer extends Reactive {
    domainEventBus;
    unsub$ = new HermesSubject();
    constructor(domainEventBus) {
        super();
        this.domainEventBus = domainEventBus;
    }
    static services = [DomainEventBus];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LWhhbmRsZXIuaW5pdGlhbGl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29yZS9kb21haW4vZXZlbnQvaW5pdC9kb21haW4tZXZlbnQtaGFuZGxlci5pbml0aWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUM1RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMERBQTBELENBQUM7QUFHekYsTUFBTSxPQUFPLDZCQUErRSxTQUFRLFFBQVE7SUFJOUU7SUFGckIsTUFBTSxHQUFHLElBQUksYUFBYSxFQUFRLENBQUM7SUFFM0MsWUFBNkIsY0FBOEI7UUFDMUQsS0FBSyxFQUFFLENBQUM7UUFEb0IsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBRTNELENBQUM7SUFFRCxNQUFNLENBQVUsUUFBUSxHQUFHLENBQUMsY0FBYyxDQUFVLENBQUM7SUFFckQsSUFBSSxDQUNILGFBQWtEO1FBR2xELElBQUksYUFBYSxFQUFFO1lBRWxCLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7WUFDdEIsTUFBTSxnQkFBZ0IsR0FBd0MsRUFBRSxDQUFDO1lBRWpFLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFxQyxFQUFFLEVBQUU7Z0JBQzlELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFFLE9BQWUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO29CQUNsRCxHQUFHLENBQUMsR0FBRyxDQUFFLE9BQWUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO29CQUM3QyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQy9CO1lBQ0YsQ0FBQyxDQUFDLENBQUM7WUFFSCxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFxQyxFQUFFLEVBQUU7Z0JBQ2xFLElBQUksQ0FBQyxjQUFjO3FCQUNqQixlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztxQkFDMUIsSUFBSSxDQUNKLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQzVCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FDdEI7cUJBQ0EsU0FBUyxDQUFDLENBQUMsS0FBUSxFQUFFLEVBQUU7b0JBQ3ZCLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFFSCxxRUFBcUU7WUFDckUsOERBQThEO1NBQzlEO0lBQ0YsQ0FBQztJQUVELE1BQU0sQ0FDTCxhQUFrRDtRQUVsRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFJO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztJQUNuQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVySW1wbCB9IGZyb20gJy4uL2hhbmRsZXIvZG9tYWluLWV2ZW50LWhhbmRsZXItaW1wbCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uLy4uL2FwaS90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vYXBpL2V2ZW50L2RvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBEb21haW5FdmVudEJ1cyB9IGZyb20gJy4uL2RvbWFpbi1ldmVudC5idXMnO1xuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vcmVhY3RpdmUvcmVhY3RpdmUnO1xuaW1wb3J0IHsgaGVybWVzVGFrZVVudGlsIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3N0cmVhbS9jb3JlL29wZXJhdG9yL2hlcm1lcy50YWtlLXVudGlsJztcbmltcG9ydCB7IEhlcm1lc1N1YmplY3QgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vc3RyZWFtL2NvcmUvb2JzZXJ2YWJsZS9oZXJtZXMuc3ViamVjdCc7XG5cblxuZXhwb3J0IGNsYXNzIERvbWFpbkV2ZW50SGFuZGxlckluaXRpYWxpemVyPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgRSBleHRlbmRzIERvbWFpbkV2ZW50PEk+PiBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRwcml2YXRlIHVuc3ViJCA9IG5ldyBIZXJtZXNTdWJqZWN0PHZvaWQ+KCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c3RhdGljIHJlYWRvbmx5IHNlcnZpY2VzID0gW0RvbWFpbkV2ZW50QnVzXSBhcyBjb25zdDtcblxuXHRpbml0KFxuXHRcdGV2ZW50SGFuZGxlcnM6IEFycmF5PERvbWFpbkV2ZW50SGFuZGxlckltcGw8SSwgRT4+XG5cdCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50SGFuZGxlcnMpIHtcblxuXHRcdFx0Y29uc3Qgc2V0ID0gbmV3IFNldCgpO1xuXHRcdFx0Y29uc3QgZmlsdGVyZWRIYW5kbGVyczogQXJyYXk8RG9tYWluRXZlbnRIYW5kbGVySW1wbDxJLCBFPj4gPSBbXTtcblxuXHRcdFx0ZXZlbnRIYW5kbGVycy5maWx0ZXIoKGhhbmRsZXI6IERvbWFpbkV2ZW50SGFuZGxlckltcGw8SSwgRT4pID0+IHtcblx0XHRcdFx0aWYgKCFzZXQuaGFzKChoYW5kbGVyIGFzIGFueSkuZG9tYWluRXZlbnRIYW5kbGVyKSkge1xuXHRcdFx0XHRcdHNldC5hZGQoKGhhbmRsZXIgYXMgYW55KS5kb21haW5FdmVudEhhbmRsZXIpO1xuXHRcdFx0XHRcdGZpbHRlcmVkSGFuZGxlcnMucHVzaChoYW5kbGVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdGZpbHRlcmVkSGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcjogRG9tYWluRXZlbnRIYW5kbGVySW1wbDxJLCBFPikgPT4ge1xuXHRcdFx0XHR0aGlzLmRvbWFpbkV2ZW50QnVzXG5cdFx0XHRcdFx0Lm9mRXZlbnRIYW5kbGVycyhbaGFuZGxlcl0pXG5cdFx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0XHRoZXJtZXNUYWtlVW50aWwodGhpcy51bnN1YiQpLFxuXHRcdFx0XHRcdFx0dGhpcy5oZXJtZXNUYWtlVW50aWwoKVxuXHRcdFx0XHRcdClcblx0XHRcdFx0XHQuc3Vic2NyaWJlKChldmVudDogRSkgPT4ge1xuXHRcdFx0XHRcdFx0aGFuZGxlci5oYW5kbGVFdmVudChldmVudCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ1JlZ2lzdGVyZWQgZXZlbnQgaGFuZGxlcnM6JywgZmlsdGVyZWRIYW5kbGVycy5sZW5ndGgpXG5cdFx0XHQvLyBjb25zb2xlLmxvZygnUmVnaXN0ZXJlZCBldmVudCBoYW5kbGVyczonLCBmaWx0ZXJlZEhhbmRsZXJzKVxuXHRcdH1cblx0fVxuXG5cdHJlaW5pdChcblx0XHRldmVudEhhbmRsZXJzOiBBcnJheTxEb21haW5FdmVudEhhbmRsZXJJbXBsPEksIEU+PlxuXHQpOiB2b2lkIHtcblx0XHR0aGlzLnN0b3AoKTtcblx0XHR0aGlzLmluaXQoZXZlbnRIYW5kbGVycyk7XG5cdH1cblxuXHRzdG9wKCk6IHZvaWQge1xuXHRcdHRoaXMudW5zdWIkLm5leHQoKTtcblx0XHR0aGlzLnVuc3ViJC5jb21wbGV0ZSgpO1xuXHRcdHRoaXMudW5zdWIkID0gbmV3IEhlcm1lc1N1YmplY3QoKTtcblx0fVxufVxuIl19