import { StructurePreparedEntitiesSetEvent } from './structure.prepared-entities-set.event';
import { StructurePreparedItemsArchive } from './structure.prepared-items.archive';
export class StructurePreparedItemsEventHandler {
    constructor(structurePreparedItemsRepository) {
        this.structurePreparedItemsRepository = structurePreparedItemsRepository;
    }
    forEvent() {
        return StructurePreparedEntitiesSetEvent;
    }
    handle(event) {
        if (event.ofMessageType('StructurePreparedEntitiesSetEvent')) {
            const preparedItems = event.getPreparedItems();
            this.structurePreparedItemsRepository.next(event.getAggregateId(), preparedItems);
        }
    }
}
StructurePreparedItemsEventHandler.services = [StructurePreparedItemsArchive];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvc3RydWN0dXJlL3NvdXJjZS9jb3JlL3ByZXBhcmVkL3N0cnVjdHVyZS5wcmVwYXJlZC1pdGVtcy5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzVGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBSW5GLE1BQU0sT0FBTyxrQ0FBa0M7SUFFOUMsWUFBNkIsZ0NBQStEO1FBQS9ELHFDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBK0I7SUFDNUYsQ0FBQztJQUlELFFBQVE7UUFDUCxPQUFPLGlDQUFpQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBd0M7UUFFOUMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLG1DQUFtQyxDQUFDLEVBQUU7WUFFN0QsTUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFFL0MsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDbEY7SUFFRixDQUFDOztBQWZlLDJDQUFRLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0RXZlbnQgfSBmcm9tICcuL3N0cnVjdHVyZS5wcmVwYXJlZC1lbnRpdGllcy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUHJlcGFyZWRJdGVtc0FyY2hpdmUgfSBmcm9tICcuL3N0cnVjdHVyZS5wcmVwYXJlZC1pdGVtcy5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuXG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zRXZlbnRIYW5kbGVyIGltcGxlbWVudHMgRG9tYWluRXZlbnRIYW5kbGVyPFN0cnVjdHVyZUlkLCBTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0RXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVByZXBhcmVkSXRlbXNSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zQXJjaGl2ZSkge1xuXHR9XG5cblx0c3RhdGljIHJlYWRvbmx5IHNlcnZpY2VzID0gW1N0cnVjdHVyZVByZXBhcmVkSXRlbXNBcmNoaXZlXTtcblxuXHRmb3JFdmVudCgpOiBEb21haW5FdmVudFR5cGU8U3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEV2ZW50PiB7XG5cdFx0cmV0dXJuIFN0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShldmVudDogU3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnU3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEV2ZW50JykpIHtcblxuXHRcdFx0Y29uc3QgcHJlcGFyZWRJdGVtcyA9IGV2ZW50LmdldFByZXBhcmVkSXRlbXMoKTtcblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeS5uZXh0KGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIHByZXBhcmVkSXRlbXMpO1xuXHRcdH1cblxuXHR9XG59XG4iXX0=