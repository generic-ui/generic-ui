import { CoreContainer, DomainEventPublisher } from '@generic-ui/hermes';
import { ToggleSortCommand } from './toggle-sort.command';
import { SortToggledEvent } from './sort-toggled.event';
export class ToggleSortCommandHandler {
    domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    forCommand() {
        return ToggleSortCommand;
    }
    handle(structure, command) {
        const aggregateId = command.getAggregateId(), compositionId = command.getCompositionId(), fieldId = command.getFieldId();
        const sorters = structure.toggleSort(fieldId);
        this.publishSortEvent(aggregateId, compositionId, fieldId, sorters);
    }
    publish(aggregate, command) {
    }
    publishSortEvent(aggregateId, compositionId, fieldId, sorters) {
        const directions = sorters.map((sorter) => {
            return {
                direction: sorter.hasDirection(),
                fieldId: sorter.getField().getId()
            };
        });
        this.domainEventPublisher.publish(new SortToggledEvent(aggregateId, compositionId, directions));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLXNvcnQuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL3N0cnVjdHVyZS9zb3J0aW5nL3NyYy9jb3JlL3RvZ2dsZS90b2dnbGUtc29ydC5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUE0QyxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuSCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUcxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUt4RCxNQUFNLE9BQU8sd0JBQXdCO0lBRW5CLG9CQUFvQixHQUF5QixhQUFhLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFHMUcsVUFBVTtRQUNULE9BQU8saUJBQWlCLENBQUM7SUFDMUIsQ0FBQztJQUVELE1BQU0sQ0FBQyxTQUE2QixFQUFFLE9BQTBCO1FBRS9ELE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFDM0MsYUFBYSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxFQUMxQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRWhDLE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFOUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxPQUFPLENBQUMsU0FBNkIsRUFBRSxPQUEwQjtJQUNqRSxDQUFDO0lBRU8sZ0JBQWdCLENBQUMsV0FBd0IsRUFBRSxhQUE0QixFQUFFLE9BQWdCLEVBQUUsT0FBc0I7UUFFeEgsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQWMsRUFBRSxFQUFFO1lBQ2pELE9BQU87Z0JBQ04sU0FBUyxFQUFFLE1BQU0sQ0FBQyxZQUFZLEVBQUU7Z0JBQ2hDLE9BQU8sRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFO2FBQ2xDLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDakcsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQsIENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSwgQ29yZUNvbnRhaW5lciwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgVG9nZ2xlU29ydENvbW1hbmQgfSBmcm9tICcuL3RvZ2dsZS1zb3J0LmNvbW1hbmQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkL3NyYy9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgU29ydGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NvcnRlcic7XG5pbXBvcnQgeyBTb3J0VG9nZ2xlZEV2ZW50IH0gZnJvbSAnLi9zb3J0LXRvZ2dsZWQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9zcmMvYXBpL2dsb2JhbC9jb21wb3NpdGlvbi5pZCc7XG5cblxuZXhwb3J0IGNsYXNzIFRvZ2dsZVNvcnRDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgVG9nZ2xlU29ydENvbW1hbmQ+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlciA9IENvcmVDb250YWluZXIucmVzb2x2ZShEb21haW5FdmVudFB1Ymxpc2hlcik7XG5cblxuXHRmb3JDb21tYW5kKCk6IENvbW1hbmRUeXBlPFRvZ2dsZVNvcnRDb21tYW5kPiB7XG5cdFx0cmV0dXJuIFRvZ2dsZVNvcnRDb21tYW5kO1xuXHR9XG5cblx0aGFuZGxlKHN0cnVjdHVyZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBUb2dnbGVTb3J0Q29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgYWdncmVnYXRlSWQgPSBjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCksXG5cdFx0XHRjb21wb3NpdGlvbklkID0gY29tbWFuZC5nZXRDb21wb3NpdGlvbklkKCksXG5cdFx0XHRmaWVsZElkID0gY29tbWFuZC5nZXRGaWVsZElkKCk7XG5cblx0XHRjb25zdCBzb3J0ZXJzID0gc3RydWN0dXJlLnRvZ2dsZVNvcnQoZmllbGRJZCk7XG5cblx0XHR0aGlzLnB1Ymxpc2hTb3J0RXZlbnQoYWdncmVnYXRlSWQsIGNvbXBvc2l0aW9uSWQsIGZpZWxkSWQsIHNvcnRlcnMpO1xuXHR9XG5cblx0cHVibGlzaChhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogVG9nZ2xlU29ydENvbW1hbmQpOiB2b2lkIHtcblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaFNvcnRFdmVudChhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsIGZpZWxkSWQ6IEZpZWxkSWQsIHNvcnRlcnM6IEFycmF5PFNvcnRlcj4pOiB2b2lkIHtcblxuXHRcdGNvbnN0IGRpcmVjdGlvbnMgPSBzb3J0ZXJzLm1hcCgoc29ydGVyOiBTb3J0ZXIpID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRpcmVjdGlvbjogc29ydGVyLmhhc0RpcmVjdGlvbigpLFxuXHRcdFx0XHRmaWVsZElkOiBzb3J0ZXIuZ2V0RmllbGQoKS5nZXRJZCgpXG5cdFx0XHR9O1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBTb3J0VG9nZ2xlZEV2ZW50KGFnZ3JlZ2F0ZUlkLCBjb21wb3NpdGlvbklkLCBkaXJlY3Rpb25zKSk7XG5cdH1cblxufVxuIl19