import { FilterEnabledArchive } from './filter-enabled.archive';
import { ConfigFilterSetEvent } from '../../core/config/config-filter-set.event';
export class ConfigFilterSetEventHandler {
    filterEnabledArchive;
    constructor(filterEnabledArchive) {
        this.filterEnabledArchive = filterEnabledArchive;
    }
    static services = [FilterEnabledArchive];
    forEvent() {
        return ConfigFilterSetEvent;
    }
    handle(event) {
        if (event.ofMessageType('ConfigFilterSetEvent')) {
            this.filterEnabledArchive.next(event.getAggregateId(), event.getEnabled());
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWZpbHRlci1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29yZS9zdHJ1Y3R1cmUvZmlsdGVyL3NyYy9jb3JlLXJlYWQvY29uZmlnL2NvbmZpZy1maWx0ZXItc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFJakYsTUFBTSxPQUFPLDJCQUEyQjtJQUVWO0lBQTdCLFlBQTZCLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ3ZFLENBQUM7SUFFRCxNQUFNLENBQVUsUUFBUSxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUVsRCxRQUFRO1FBQ1AsT0FBTyxvQkFBb0IsQ0FBQztJQUM3QixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQTJCO1FBRWpDLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFO1lBQ2hELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxFQUFFLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1NBQzNFO0lBRUYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciwgRG9tYWluRXZlbnRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgRmlsdGVyRW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuL2ZpbHRlci1lbmFibGVkLmFyY2hpdmUnO1xuaW1wb3J0IHsgQ29uZmlnRmlsdGVyU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9jb3JlL2NvbmZpZy9jb25maWctZmlsdGVyLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5cblxuZXhwb3J0IGNsYXNzIENvbmZpZ0ZpbHRlclNldEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgQ29uZmlnRmlsdGVyU2V0RXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZpbHRlckVuYWJsZWRBcmNoaXZlOiBGaWx0ZXJFbmFibGVkQXJjaGl2ZSkge1xuXHR9XG5cblx0c3RhdGljIHJlYWRvbmx5IHNlcnZpY2VzID0gW0ZpbHRlckVuYWJsZWRBcmNoaXZlXTtcblxuXHRmb3JFdmVudCgpOiBEb21haW5FdmVudFR5cGU8Q29uZmlnRmlsdGVyU2V0RXZlbnQ+IHtcblx0XHRyZXR1cm4gQ29uZmlnRmlsdGVyU2V0RXZlbnQ7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IENvbmZpZ0ZpbHRlclNldEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnQ29uZmlnRmlsdGVyU2V0RXZlbnQnKSkge1xuXHRcdFx0dGhpcy5maWx0ZXJFbmFibGVkQXJjaGl2ZS5uZXh0KGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIGV2ZW50LmdldEVuYWJsZWQoKSk7XG5cdFx0fVxuXG5cdH1cblxufVxuIl19