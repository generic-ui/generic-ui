import { Reactive } from '../../../../common/reactive';
export class DomainEventHandlerInitializer extends Reactive {
    init(eventHandlers, domainEventBus) {
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
                domainEventBus
                    .ofEventHandlers([handler])
                    .pipe(this.hermesTakeUntil())
                    .subscribe((event) => {
                    handler.handleEvent(event);
                });
            });
            // console.log('Registered event handlers:', filteredHandlers.length)
            // console.log('Registered event handlers:', filteredHandlers)
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LWhhbmRsZXIuaW5pdGlhbGl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29yZS9kb21haW4vZXZlbnQvaW5pdC9kb21haW4tZXZlbnQtaGFuZGxlci5pbml0aWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFHdkQsTUFBTSxPQUFPLDZCQUErRSxTQUFRLFFBQVE7SUFFM0csSUFBSSxDQUNILGFBQWtELEVBQ2xELGNBQThCO1FBRzlCLElBQUksYUFBYSxFQUFFO1lBRWxCLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7WUFDdEIsTUFBTSxnQkFBZ0IsR0FBd0MsRUFBRSxDQUFDO1lBRWpFLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFxQyxFQUFFLEVBQUU7Z0JBQzlELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFFLE9BQWUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO29CQUNsRCxHQUFHLENBQUMsR0FBRyxDQUFFLE9BQWUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO29CQUM3QyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQy9CO1lBQ0YsQ0FBQyxDQUFDLENBQUM7WUFFSCxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFxQyxFQUFFLEVBQUU7Z0JBQ2xFLGNBQWM7cUJBQ1osZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7cUJBQzVCLFNBQVMsQ0FBQyxDQUFDLEtBQVEsRUFBRSxFQUFFO29CQUN2QixPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1QixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1lBRUgscUVBQXFFO1lBQ3JFLDhEQUE4RDtTQUM5RDtJQUNGLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlckltcGwgfSBmcm9tICcuLi9oYW5kbGVyL2RvbWFpbi1ldmVudC1oYW5kbGVyLWltcGwnO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi8uLi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi4vZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnLi4vZG9tYWluLWV2ZW50LmJ1cyc7XG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9yZWFjdGl2ZSc7XG5cblxuZXhwb3J0IGNsYXNzIERvbWFpbkV2ZW50SGFuZGxlckluaXRpYWxpemVyPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgRSBleHRlbmRzIERvbWFpbkV2ZW50PEk+PiBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRpbml0KFxuXHRcdGV2ZW50SGFuZGxlcnM6IEFycmF5PERvbWFpbkV2ZW50SGFuZGxlckltcGw8SSwgRT4+LFxuXHRcdGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1c1xuXHQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudEhhbmRsZXJzKSB7XG5cblx0XHRcdGNvbnN0IHNldCA9IG5ldyBTZXQoKTtcblx0XHRcdGNvbnN0IGZpbHRlcmVkSGFuZGxlcnM6IEFycmF5PERvbWFpbkV2ZW50SGFuZGxlckltcGw8SSwgRT4+ID0gW107XG5cblx0XHRcdGV2ZW50SGFuZGxlcnMuZmlsdGVyKChoYW5kbGVyOiBEb21haW5FdmVudEhhbmRsZXJJbXBsPEksIEU+KSA9PiB7XG5cdFx0XHRcdGlmICghc2V0LmhhcygoaGFuZGxlciBhcyBhbnkpLmRvbWFpbkV2ZW50SGFuZGxlcikpIHtcblx0XHRcdFx0XHRzZXQuYWRkKChoYW5kbGVyIGFzIGFueSkuZG9tYWluRXZlbnRIYW5kbGVyKTtcblx0XHRcdFx0XHRmaWx0ZXJlZEhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRmaWx0ZXJlZEhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXI6IERvbWFpbkV2ZW50SGFuZGxlckltcGw8SSwgRT4pID0+IHtcblx0XHRcdFx0ZG9tYWluRXZlbnRCdXNcblx0XHRcdFx0XHQub2ZFdmVudEhhbmRsZXJzKFtoYW5kbGVyXSlcblx0XHRcdFx0XHQucGlwZSh0aGlzLmhlcm1lc1Rha2VVbnRpbCgpKVxuXHRcdFx0XHRcdC5zdWJzY3JpYmUoKGV2ZW50OiBFKSA9PiB7XG5cdFx0XHRcdFx0XHRoYW5kbGVyLmhhbmRsZUV2ZW50KGV2ZW50KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBjb25zb2xlLmxvZygnUmVnaXN0ZXJlZCBldmVudCBoYW5kbGVyczonLCBmaWx0ZXJlZEhhbmRsZXJzLmxlbmd0aClcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdSZWdpc3RlcmVkIGV2ZW50IGhhbmRsZXJzOicsIGZpbHRlcmVkSGFuZGxlcnMpXG5cdFx0fVxuXHR9XG59XG4iXX0=