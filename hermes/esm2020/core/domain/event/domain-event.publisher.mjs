import { DomainEventStream } from './domain-event.stream';
import { DomainEvent } from '../../api/event/domain-event';
export class DomainEventPublisher {
    constructor(eventStream) {
        this.eventStream = eventStream;
    }
    publish(args) {
        if (Array.isArray(args)) {
            for (const arg of args) {
                this.publishEvent(arg);
            }
        }
        else {
            this.publishEvent(args);
        }
    }
    publishFromAggregate(aggregate) {
        const events = [...aggregate.getEvents()];
        events.forEach((aggregateEvent) => {
            this.publish(aggregateEvent.toDomainEvent());
        });
    }
    publishEvent(event) {
        if (!event) {
            // eslint-disable-next-line no-console
            console.error(`${event} is not defined`);
        }
        if (!(event instanceof DomainEvent)) {
            // throw new Error(`${event} is not a DomainEvent`);
            // eslint-disable-next-line no-console
            console.error(`${event} is not a DomainEvent`);
        }
        this.eventStream.next(event);
    }
}
DomainEventPublisher.services = [DomainEventStream];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LnB1Ymxpc2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb3JlL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQucHVibGlzaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUszRCxNQUFNLE9BQU8sb0JBQW9CO0lBRWhDLFlBQTZCLFdBQThCO1FBQTlCLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtJQUMzRCxDQUFDO0lBTUQsT0FBTyxDQUFDLElBQXdFO1FBRS9FLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUV4QixLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRTtnQkFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN2QjtTQUNEO2FBQU07WUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLElBQWdDLENBQUMsQ0FBQztTQUNwRDtJQUNGLENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxTQUFxQztRQUV6RCxNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFFMUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQTJDLEVBQUUsRUFBRTtZQUM5RCxJQUFJLENBQUMsT0FBTyxDQUNYLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FDOUIsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVPLFlBQVksQ0FBQyxLQUErQjtRQUVuRCxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1gsc0NBQXNDO1lBQ3RDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLGlCQUFpQixDQUFDLENBQUM7U0FDekM7UUFFRCxJQUFJLENBQUMsQ0FBQyxLQUFLLFlBQVksV0FBVyxDQUFDLEVBQUU7WUFDcEMsb0RBQW9EO1lBRXBELHNDQUFzQztZQUN0QyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyx1QkFBdUIsQ0FBQyxDQUFDO1NBQy9DO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7QUExQ2UsNkJBQVEsR0FBRyxDQUFDLGlCQUFpQixDQUFVLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uL2FwaS90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWV2ZW50JztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRTdHJlYW0gfSBmcm9tICcuL2RvbWFpbi1ldmVudC5zdHJlYW0nO1xuaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi9hcGkvZXZlbnQvZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vYXBpL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgQWdncmVnYXRlUm9vdCB9IGZyb20gJy4uLy4uL2FwaS90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJvb3QnO1xuXG5cbmV4cG9ydCBjbGFzcyBEb21haW5FdmVudFB1Ymxpc2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBldmVudFN0cmVhbTogRG9tYWluRXZlbnRTdHJlYW0pIHtcblx0fVxuXG5cdHN0YXRpYyByZWFkb25seSBzZXJ2aWNlcyA9IFtEb21haW5FdmVudFN0cmVhbV0gYXMgY29uc3Q7XG5cblx0cHVibGlzaChldmVudDogRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+KTogdm9pZDtcblx0cHVibGlzaChldmVudHM6IFJlYWRvbmx5QXJyYXk8RG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+Pik6IHZvaWQ7XG5cdHB1Ymxpc2goYXJnczogRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+IHwgUmVhZG9ubHlBcnJheTxEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+KTogdm9pZCB7XG5cblx0XHRpZiAoQXJyYXkuaXNBcnJheShhcmdzKSkge1xuXG5cdFx0XHRmb3IgKGNvbnN0IGFyZyBvZiBhcmdzKSB7XG5cdFx0XHRcdHRoaXMucHVibGlzaEV2ZW50KGFyZyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucHVibGlzaEV2ZW50KGFyZ3MgYXMgRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+KTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaXNoRnJvbUFnZ3JlZ2F0ZShhZ2dyZWdhdGU6IEFnZ3JlZ2F0ZVJvb3Q8QWdncmVnYXRlSWQ+KTogdm9pZCB7XG5cblx0XHRjb25zdCBldmVudHMgPSBbLi4uYWdncmVnYXRlLmdldEV2ZW50cygpXTtcblxuXHRcdGV2ZW50cy5mb3JFYWNoKChhZ2dyZWdhdGVFdmVudDogQWdncmVnYXRlRXZlbnQ8QWdncmVnYXRlSWQ+KSA9PiB7XG5cdFx0XHR0aGlzLnB1Ymxpc2goXG5cdFx0XHRcdGFnZ3JlZ2F0ZUV2ZW50LnRvRG9tYWluRXZlbnQoKVxuXHRcdFx0KTtcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaEV2ZW50KGV2ZW50OiBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4pOiB2b2lkIHtcblxuXHRcdGlmICghZXZlbnQpIHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cdFx0XHRjb25zb2xlLmVycm9yKGAke2V2ZW50fSBpcyBub3QgZGVmaW5lZGApO1xuXHRcdH1cblxuXHRcdGlmICghKGV2ZW50IGluc3RhbmNlb2YgRG9tYWluRXZlbnQpKSB7XG5cdFx0XHQvLyB0aHJvdyBuZXcgRXJyb3IoYCR7ZXZlbnR9IGlzIG5vdCBhIERvbWFpbkV2ZW50YCk7XG5cblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cdFx0XHRjb25zb2xlLmVycm9yKGAke2V2ZW50fSBpcyBub3QgYSBEb21haW5FdmVudGApO1xuXHRcdH1cblxuXHRcdHRoaXMuZXZlbnRTdHJlYW0ubmV4dChldmVudCk7XG5cdH1cbn1cbiJdfQ==