import { CommandDispatcher, CoreContainer } from '@generic-ui/hermes';
import { SetSortingCommand } from './set-config/set-sorting.command';
import { ToggleSortCommand } from './toggle/toggle-sort.command';
import { SetSortOrderCommand } from './order/set-sort-order.command';
export class SortingDispatcher {
    commandDispatcher = CoreContainer.resolve(CommandDispatcher);
    setSortingConfig(config, structureId) {
        this.commandDispatcher.dispatch(new SetSortingCommand(structureId, config));
    }
    toggleSort(fieldId, compositionId, structureId) {
        this.commandDispatcher.dispatch(new ToggleSortCommand(structureId, compositionId, fieldId));
    }
    setSortOrder(fieldId, sortOrder, compositionId, structureId) {
        this.commandDispatcher.dispatch(new SetSortOrderCommand(structureId, compositionId, fieldId, sortOrder));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy5kaXNwYXRjaGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL3N0cnVjdHVyZS9zb3J0aW5nL3NyYy9jb3JlL3NvcnRpbmcuZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJdEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFHckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFakUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFHckUsTUFBTSxPQUFPLGlCQUFpQjtJQUVaLGlCQUFpQixHQUFzQixhQUFhLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFHakcsZ0JBQWdCLENBQUMsTUFBcUIsRUFBRSxXQUF3QjtRQUMvRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksaUJBQWlCLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELFVBQVUsQ0FBQyxPQUFnQixFQUFFLGFBQTRCLEVBQUUsV0FBd0I7UUFDbEYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBRUQsWUFBWSxDQUFDLE9BQWdCLEVBQUUsU0FBb0IsRUFBRSxhQUE0QixFQUFFLFdBQXdCO1FBQzFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzFHLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyLCBDb3JlQ29udGFpbmVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU29ydGluZ0NvbmZpZyB9IGZyb20gJy4uL2FwaS9jb25maWcvc29ydGluZy1jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU2V0U29ydGluZ0NvbW1hbmQgfSBmcm9tICcuL3NldC1jb25maWcvc2V0LXNvcnRpbmcuY29tbWFuZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvc3JjL2RvbWFpbi9maWVsZC9maWVsZC5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vc3JjL2FwaS9nbG9iYWwvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgVG9nZ2xlU29ydENvbW1hbmQgfSBmcm9tICcuL3RvZ2dsZS90b2dnbGUtc29ydC5jb21tYW5kJztcbmltcG9ydCB7IFNvcnRPcmRlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL3NyYy9kb21haW4vY29sdW1uL3NvcnQvc29ydC1vcmRlcic7XG5pbXBvcnQgeyBTZXRTb3J0T3JkZXJDb21tYW5kIH0gZnJvbSAnLi9vcmRlci9zZXQtc29ydC1vcmRlci5jb21tYW5kJztcblxuXG5leHBvcnQgY2xhc3MgU29ydGluZ0Rpc3BhdGNoZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyID0gQ29yZUNvbnRhaW5lci5yZXNvbHZlKENvbW1hbmREaXNwYXRjaGVyKTtcblxuXG5cdHNldFNvcnRpbmdDb25maWcoY29uZmlnOiBTb3J0aW5nQ29uZmlnLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRTb3J0aW5nQ29tbWFuZChzdHJ1Y3R1cmVJZCwgY29uZmlnKSk7XG5cdH1cblxuXHR0b2dnbGVTb3J0KGZpZWxkSWQ6IEZpZWxkSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFRvZ2dsZVNvcnRDb21tYW5kKHN0cnVjdHVyZUlkLCBjb21wb3NpdGlvbklkLCBmaWVsZElkKSk7XG5cdH1cblxuXHRzZXRTb3J0T3JkZXIoZmllbGRJZDogRmllbGRJZCwgc29ydE9yZGVyOiBTb3J0T3JkZXIsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFNvcnRPcmRlckNvbW1hbmQoc3RydWN0dXJlSWQsIGNvbXBvc2l0aW9uSWQsIGZpZWxkSWQsIHNvcnRPcmRlcikpO1xuXHR9XG59XG4iXX0=