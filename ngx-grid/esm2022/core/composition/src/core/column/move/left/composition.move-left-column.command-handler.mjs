import { CoreContainer, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionEventConverter } from '../../../composition.event-converter';
import { CompositionMoveLeftColumnCommand } from './composition.move-left-column.command';
export class CompositionMoveLeftColumnCommandHandler {
    compositionEventConverter;
    domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    constructor(compositionEventConverter) {
        this.compositionEventConverter = compositionEventConverter;
    }
    static services = [CompositionEventConverter];
    forCommand() {
        return CompositionMoveLeftColumnCommand;
    }
    handle(aggregate, command) {
        const columnId = command.getColumnId();
        aggregate.moveLeft(columnId);
    }
    publish(aggregate, command) {
        this.publishEvents(aggregate, command);
    }
    publishEvents(composition, command) {
        const events = composition.getEvents();
        const domainEvents = this.compositionEventConverter.convert(events);
        if (domainEvents && domainEvents.length > 0) {
            this.domainEventPublisher.publish(domainEvents);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ubW92ZS1sZWZ0LWNvbHVtbi5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvY29tcG9zaXRpb24vc3JjL2NvcmUvY29sdW1uL21vdmUvbGVmdC9jb21wb3NpdGlvbi5tb3ZlLWxlZnQtY29sdW1uLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQStDLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RILE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWpGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBSTFGLE1BQU0sT0FBTyx1Q0FBdUM7SUFJdEI7SUFGWixvQkFBb0IsR0FBeUIsYUFBYSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBRTFHLFlBQTZCLHlCQUFvRDtRQUFwRCw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO0lBQ2pGLENBQUM7SUFFRCxNQUFNLENBQVUsUUFBUSxHQUFHLENBQUMseUJBQXlCLENBQVUsQ0FBQztJQUVoRSxVQUFVO1FBQ1QsT0FBTyxnQ0FBZ0MsQ0FBQztJQUN6QyxDQUFDO0lBRUQsTUFBTSxDQUFDLFNBQStCLEVBQUUsT0FBeUM7UUFFaEYsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXZDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELE9BQU8sQ0FBQyxTQUErQixFQUFFLE9BQXlDO1FBQ2pGLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTyxhQUFhLENBQUMsV0FBaUMsRUFBRSxPQUF5QztRQUVqRyxNQUFNLE1BQU0sR0FBRyxXQUFXLENBQUMsU0FBUyxFQUEwQyxDQUFDO1FBRS9FLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFcEUsSUFBSSxZQUFZLElBQUksWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDNUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNoRDtJQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgQ29tbWFuZEhhbmRsZXIsIENvbW1hbmRUeXBlLCBDb3JlQ29udGFpbmVyLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkV2ZW50Q29udmVydGVyIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24uZXZlbnQtY29udmVydGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbk1vdmVMZWZ0Q29sdW1uQ29tbWFuZCB9IGZyb20gJy4vY29tcG9zaXRpb24ubW92ZS1sZWZ0LWNvbHVtbi5jb21tYW5kJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9hcGkvZ2xvYmFsL2NvbXBvc2l0aW9uLmlkJztcblxuXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25Nb3ZlTGVmdENvbHVtbkNvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8Q29tcG9zaXRpb25BZ2dyZWdhdGUsIENvbXBvc2l0aW9uTW92ZUxlZnRDb2x1bW5Db21tYW5kPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIgPSBDb3JlQ29udGFpbmVyLnJlc29sdmUoRG9tYWluRXZlbnRQdWJsaXNoZXIpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25FdmVudENvbnZlcnRlcjogQ29tcG9zaXRpb25FdmVudENvbnZlcnRlcikge1xuXHR9XG5cblx0c3RhdGljIHJlYWRvbmx5IHNlcnZpY2VzID0gW0NvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXJdIGFzIGNvbnN0O1xuXG5cdGZvckNvbW1hbmQoKTogQ29tbWFuZFR5cGU8Q29tcG9zaXRpb25Nb3ZlTGVmdENvbHVtbkNvbW1hbmQ+IHtcblx0XHRyZXR1cm4gQ29tcG9zaXRpb25Nb3ZlTGVmdENvbHVtbkNvbW1hbmQ7XG5cdH1cblxuXHRoYW5kbGUoYWdncmVnYXRlOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSwgY29tbWFuZDogQ29tcG9zaXRpb25Nb3ZlTGVmdENvbHVtbkNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGNvbHVtbklkID0gY29tbWFuZC5nZXRDb2x1bW5JZCgpO1xuXG5cdFx0YWdncmVnYXRlLm1vdmVMZWZ0KGNvbHVtbklkKTtcblx0fVxuXG5cdHB1Ymxpc2goYWdncmVnYXRlOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSwgY29tbWFuZDogQ29tcG9zaXRpb25Nb3ZlTGVmdENvbHVtbkNvbW1hbmQpOiB2b2lkIHtcblx0XHR0aGlzLnB1Ymxpc2hFdmVudHMoYWdncmVnYXRlLCBjb21tYW5kKTtcblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaEV2ZW50cyhjb21wb3NpdGlvbjogQ29tcG9zaXRpb25BZ2dyZWdhdGUsIGNvbW1hbmQ6IENvbXBvc2l0aW9uTW92ZUxlZnRDb2x1bW5Db21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBldmVudHMgPSBjb21wb3NpdGlvbi5nZXRFdmVudHMoKSBhcyBBcnJheTxBZ2dyZWdhdGVFdmVudDxDb21wb3NpdGlvbklkPj47XG5cblx0XHRjb25zdCBkb21haW5FdmVudHMgPSB0aGlzLmNvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXIuY29udmVydChldmVudHMpO1xuXG5cdFx0aWYgKGRvbWFpbkV2ZW50cyAmJiBkb21haW5FdmVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKGRvbWFpbkV2ZW50cyk7XG5cdFx0fVxuXHR9XG59XG4iXX0=