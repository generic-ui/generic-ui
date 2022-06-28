import { SetConfigFilterCommand } from './config/set-config-filter.command';
import { AddFilterCommand } from './add/add-filter.command';
import { RemoveAllFiltersCommand } from './remove-all/remove-all-filters.command';
import { RemoveFilterCommand } from './remove/remove-filter.command';
import { SelectAllUniqueFilterCommand } from './unique/select-all/select-all-unique-filter.command';
import { UnselectAllUniqueFilterCommand } from './unique/unselect-all/unselect-all-unique-filter.command';
import { SelectUniqueFilterCommand } from './unique/select/select-unique-filter.command';
import { UnselectUniqueFilterCommand } from './unique/unselect/unselect-unique-filter.command';
import { CommandDispatcher, CoreContainer } from '@generic-ui/hermes';
export class FilterDispatcher {
    constructor() {
        this.commandDispatcher = CoreContainer.resolve(CommandDispatcher);
    }
    setConfig(config, structureId) {
        this.commandDispatcher.dispatch(new SetConfigFilterCommand(structureId, config));
    }
    add(fieldId, filterTypeId, value, structureId) {
        this.commandDispatcher.dispatch(new AddFilterCommand(structureId, fieldId, filterTypeId, value));
    }
    removeAll(structureId) {
        this.commandDispatcher.dispatch(new RemoveAllFiltersCommand(structureId));
    }
    remove(filterId, structureId) {
        this.commandDispatcher.dispatch(new RemoveFilterCommand(structureId, filterId));
    }
    selectAllUniqueFilter(fieldId, structureId) {
        this.commandDispatcher.dispatch(new SelectAllUniqueFilterCommand(structureId, fieldId));
    }
    unselectAllUniqueFilter(fieldId, structureId) {
        this.commandDispatcher.dispatch(new UnselectAllUniqueFilterCommand(structureId, fieldId));
    }
    selectUniqueFilter(fieldId, uniqueValueId, structureId) {
        this.commandDispatcher.dispatch(new SelectUniqueFilterCommand(structureId, fieldId, uniqueValueId));
    }
    unselectUniqueFilter(fieldId, uniqueValueId, structureId) {
        this.commandDispatcher.dispatch(new UnselectUniqueFilterCommand(structureId, fieldId, uniqueValueId));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvc3RydWN0dXJlL2ZpbHRlci9jb3JlL2ZpbHRlci5kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRzVFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRWxGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBRTFHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUd0RSxNQUFNLE9BQU8sZ0JBQWdCO0lBQTdCO1FBRWtCLHNCQUFpQixHQUFzQixhQUFhLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFrQ2xHLENBQUM7SUEvQkEsU0FBUyxDQUFDLE1BQW9CLEVBQUUsV0FBd0I7UUFDdkQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFRCxHQUFHLENBQUMsT0FBZ0IsRUFBRSxZQUEwQixFQUFFLEtBQVUsRUFBRSxXQUF3QjtRQUNyRixJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksZ0JBQWdCLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNsRyxDQUFDO0lBRUQsU0FBUyxDQUFDLFdBQXdCO1FBQ2pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxNQUFNLENBQUMsUUFBa0IsRUFBRSxXQUF3QjtRQUNsRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksbUJBQW1CLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUVELHFCQUFxQixDQUFDLE9BQWdCLEVBQUUsV0FBd0I7UUFDL0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLDRCQUE0QixDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFFRCx1QkFBdUIsQ0FBQyxPQUFnQixFQUFFLFdBQXdCO1FBQ2pFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSw4QkFBOEIsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBRUQsa0JBQWtCLENBQUMsT0FBZ0IsRUFBRSxhQUE0QixFQUFFLFdBQXdCO1FBQzFGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSx5QkFBeUIsQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDckcsQ0FBQztJQUVELG9CQUFvQixDQUFDLE9BQWdCLEVBQUUsYUFBNEIsRUFBRSxXQUF3QjtRQUM1RixJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksMkJBQTJCLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3ZHLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpbHRlckNvbmZpZyB9IGZyb20gJy4uL2FwaS9jb25maWcvZmlsdGVyLmNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS1jb3JlL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNldENvbmZpZ0ZpbHRlckNvbW1hbmQgfSBmcm9tICcuL2NvbmZpZy9zZXQtY29uZmlnLWZpbHRlci5jb21tYW5kJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi9maWVsZC9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUlkIH0gZnJvbSAnLi4vZG9tYWluL3R5cGUvZmlsdGVyLXR5cGUuaWQnO1xuaW1wb3J0IHsgQWRkRmlsdGVyQ29tbWFuZCB9IGZyb20gJy4vYWRkL2FkZC1maWx0ZXIuY29tbWFuZCc7XG5pbXBvcnQgeyBSZW1vdmVBbGxGaWx0ZXJzQ29tbWFuZCB9IGZyb20gJy4vcmVtb3ZlLWFsbC9yZW1vdmUtYWxsLWZpbHRlcnMuY29tbWFuZCc7XG5pbXBvcnQgeyBGaWx0ZXJJZCB9IGZyb20gJy4uL2FwaS9pZC9maWx0ZXIuaWQnO1xuaW1wb3J0IHsgUmVtb3ZlRmlsdGVyQ29tbWFuZCB9IGZyb20gJy4vcmVtb3ZlL3JlbW92ZS1maWx0ZXIuY29tbWFuZCc7XG5pbXBvcnQgeyBTZWxlY3RBbGxVbmlxdWVGaWx0ZXJDb21tYW5kIH0gZnJvbSAnLi91bmlxdWUvc2VsZWN0LWFsbC9zZWxlY3QtYWxsLXVuaXF1ZS1maWx0ZXIuY29tbWFuZCc7XG5pbXBvcnQgeyBVbnNlbGVjdEFsbFVuaXF1ZUZpbHRlckNvbW1hbmQgfSBmcm9tICcuL3VuaXF1ZS91bnNlbGVjdC1hbGwvdW5zZWxlY3QtYWxsLXVuaXF1ZS1maWx0ZXIuY29tbWFuZCc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZUlkIH0gZnJvbSAnLi4vZG9tYWluL3VuaXF1ZS91bmlxdWUtdmFsdWUtaWQnO1xuaW1wb3J0IHsgU2VsZWN0VW5pcXVlRmlsdGVyQ29tbWFuZCB9IGZyb20gJy4vdW5pcXVlL3NlbGVjdC9zZWxlY3QtdW5pcXVlLWZpbHRlci5jb21tYW5kJztcbmltcG9ydCB7IFVuc2VsZWN0VW5pcXVlRmlsdGVyQ29tbWFuZCB9IGZyb20gJy4vdW5pcXVlL3Vuc2VsZWN0L3Vuc2VsZWN0LXVuaXF1ZS1maWx0ZXIuY29tbWFuZCc7XG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciwgQ29yZUNvbnRhaW5lciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cblxuZXhwb3J0IGNsYXNzIEZpbHRlckRpc3BhdGNoZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyID0gQ29yZUNvbnRhaW5lci5yZXNvbHZlKENvbW1hbmREaXNwYXRjaGVyKTtcblxuXG5cdHNldENvbmZpZyhjb25maWc6IEZpbHRlckNvbmZpZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0Q29uZmlnRmlsdGVyQ29tbWFuZChzdHJ1Y3R1cmVJZCwgY29uZmlnKSk7XG5cdH1cblxuXHRhZGQoZmllbGRJZDogRmllbGRJZCwgZmlsdGVyVHlwZUlkOiBGaWx0ZXJUeXBlSWQsIHZhbHVlOiBhbnksIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IEFkZEZpbHRlckNvbW1hbmQoc3RydWN0dXJlSWQsIGZpZWxkSWQsIGZpbHRlclR5cGVJZCwgdmFsdWUpKTtcblx0fVxuXG5cdHJlbW92ZUFsbChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBSZW1vdmVBbGxGaWx0ZXJzQ29tbWFuZChzdHJ1Y3R1cmVJZCkpO1xuXHR9XG5cblx0cmVtb3ZlKGZpbHRlcklkOiBGaWx0ZXJJZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgUmVtb3ZlRmlsdGVyQ29tbWFuZChzdHJ1Y3R1cmVJZCwgZmlsdGVySWQpKTtcblx0fVxuXG5cdHNlbGVjdEFsbFVuaXF1ZUZpbHRlcihmaWVsZElkOiBGaWVsZElkLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZWxlY3RBbGxVbmlxdWVGaWx0ZXJDb21tYW5kKHN0cnVjdHVyZUlkLCBmaWVsZElkKSk7XG5cdH1cblxuXHR1bnNlbGVjdEFsbFVuaXF1ZUZpbHRlcihmaWVsZElkOiBGaWVsZElkLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBVbnNlbGVjdEFsbFVuaXF1ZUZpbHRlckNvbW1hbmQoc3RydWN0dXJlSWQsIGZpZWxkSWQpKTtcblx0fVxuXG5cdHNlbGVjdFVuaXF1ZUZpbHRlcihmaWVsZElkOiBGaWVsZElkLCB1bmlxdWVWYWx1ZUlkOiBVbmlxdWVWYWx1ZUlkLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZWxlY3RVbmlxdWVGaWx0ZXJDb21tYW5kKHN0cnVjdHVyZUlkLCBmaWVsZElkLCB1bmlxdWVWYWx1ZUlkKSk7XG5cdH1cblxuXHR1bnNlbGVjdFVuaXF1ZUZpbHRlcihmaWVsZElkOiBGaWVsZElkLCB1bmlxdWVWYWx1ZUlkOiBVbmlxdWVWYWx1ZUlkLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBVbnNlbGVjdFVuaXF1ZUZpbHRlckNvbW1hbmQoc3RydWN0dXJlSWQsIGZpZWxkSWQsIHVuaXF1ZVZhbHVlSWQpKTtcblx0fVxufVxuIl19