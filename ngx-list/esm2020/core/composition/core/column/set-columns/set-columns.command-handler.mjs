import { CoreContainer, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionEventConverter } from '../../composition.event-converter';
import { SetColumnsCommand } from './set-columns.command';
export class SetColumnsCommandHandler {
    constructor(compositionEventConverter) {
        this.compositionEventConverter = compositionEventConverter;
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SetColumnsCommand;
    }
    handle(aggregate, command) {
        const setColumnsParams = command.getParams();
        aggregate.setColumns(setColumnsParams);
    }
    publish(aggregate, command) {
        this.publishEvents(aggregate, command);
    }
    publishEvents(composition, command) {
        const events = composition.getEvents();
        const domainEvents = this.compositionEventConverter.convert(events);
        this.domainEventPublisher.publish(domainEvents);
    }
}
SetColumnsCommandHandler.services = [CompositionEventConverter];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbHVtbnMuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL2NvbXBvc2l0aW9uL2NvcmUvY29sdW1uL3NldC1jb2x1bW5zL3NldC1jb2x1bW5zLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQStDLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RILE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSzFELE1BQU0sT0FBTyx3QkFBd0I7SUFJcEMsWUFBNkIseUJBQW9EO1FBQXBELDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFGaEUseUJBQW9CLEdBQXlCLGFBQWEsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUcxRyxDQUFDO0lBSUQsVUFBVTtRQUNULE9BQU8saUJBQWlCLENBQUM7SUFDMUIsQ0FBQztJQUVELE1BQU0sQ0FBQyxTQUErQixFQUFFLE9BQTBCO1FBRWpFLE1BQU0sZ0JBQWdCLEdBQXdCLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVsRSxTQUFTLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELE9BQU8sQ0FBQyxTQUErQixFQUFFLE9BQTBCO1FBQ2xFLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTyxhQUFhLENBQUMsV0FBaUMsRUFBRSxPQUEwQjtRQUVsRixNQUFNLE1BQU0sR0FBRyxXQUFXLENBQUMsU0FBUyxFQUEwQyxDQUFDO1FBRS9FLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFcEUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNqRCxDQUFDOztBQXhCZSxpQ0FBUSxHQUFHLENBQUMseUJBQXlCLENBQVUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBDb21tYW5kSGFuZGxlciwgQ29tbWFuZFR5cGUsIENvcmVDb250YWluZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IENvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5ldmVudC1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24uYWdncmVnYXRlJztcblxuaW1wb3J0IHsgU2V0Q29sdW1uc0NvbW1hbmQgfSBmcm9tICcuL3NldC1jb2x1bW5zLmNvbW1hbmQnO1xuaW1wb3J0IHsgQ29sdW1uUGFyYW1zIH0gZnJvbSAnLi9jb2x1bW4ucGFyYW1zJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi9hcGkvZ2xvYmFsL2NvbXBvc2l0aW9uLmlkJztcblxuXG5leHBvcnQgY2xhc3MgU2V0Q29sdW1uc0NvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8Q29tcG9zaXRpb25BZ2dyZWdhdGUsIFNldENvbHVtbnNDb21tYW5kPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIgPSBDb3JlQ29udGFpbmVyLnJlc29sdmUoRG9tYWluRXZlbnRQdWJsaXNoZXIpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25FdmVudENvbnZlcnRlcjogQ29tcG9zaXRpb25FdmVudENvbnZlcnRlcikge1xuXHR9XG5cblx0c3RhdGljIHJlYWRvbmx5IHNlcnZpY2VzID0gW0NvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXJdIGFzIGNvbnN0O1xuXG5cdGZvckNvbW1hbmQoKTogQ29tbWFuZFR5cGU8U2V0Q29sdW1uc0NvbW1hbmQ+IHtcblx0XHRyZXR1cm4gU2V0Q29sdW1uc0NvbW1hbmQ7XG5cdH1cblxuXHRoYW5kbGUoYWdncmVnYXRlOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0Q29sdW1uc0NvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHNldENvbHVtbnNQYXJhbXM6IEFycmF5PENvbHVtblBhcmFtcz4gPSBjb21tYW5kLmdldFBhcmFtcygpO1xuXG5cdFx0YWdncmVnYXRlLnNldENvbHVtbnMoc2V0Q29sdW1uc1BhcmFtcyk7XG5cdH1cblxuXHRwdWJsaXNoKGFnZ3JlZ2F0ZTogQ29tcG9zaXRpb25BZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldENvbHVtbnNDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5wdWJsaXNoRXZlbnRzKGFnZ3JlZ2F0ZSwgY29tbWFuZCk7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hFdmVudHMoY29tcG9zaXRpb246IENvbXBvc2l0aW9uQWdncmVnYXRlLCBjb21tYW5kOiBTZXRDb2x1bW5zQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZXZlbnRzID0gY29tcG9zaXRpb24uZ2V0RXZlbnRzKCkgYXMgQXJyYXk8QWdncmVnYXRlRXZlbnQ8Q29tcG9zaXRpb25JZD4+O1xuXG5cdFx0Y29uc3QgZG9tYWluRXZlbnRzID0gdGhpcy5jb21wb3NpdGlvbkV2ZW50Q29udmVydGVyLmNvbnZlcnQoZXZlbnRzKTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChkb21haW5FdmVudHMpO1xuXHR9XG59XG4iXX0=