import { QuickFilterEnabledArchive } from './quick-filter-enabled.archive';
import { ConfigQuickFilterSetEvent } from '../../core/quick/config-quick-filter-set.event';
export class ConfigQuickFilterSetEventHandler {
    quickFilterEnabledArchive;
    constructor(quickFilterEnabledArchive) {
        this.quickFilterEnabledArchive = quickFilterEnabledArchive;
    }
    static services = [QuickFilterEnabledArchive];
    forEvent() {
        return ConfigQuickFilterSetEvent;
    }
    handle(event) {
        if (event.ofMessageType('ConfigQuickFilterSetEvent')) {
            this.quickFilterEnabledArchive.next(event.getAggregateId(), event.getEnabled());
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXF1aWNrLWZpbHRlci1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvZmlsdGVyL3NyYy9jb3JlLXJlYWQvcXVpY2stZmlsdGVyL2NvbmZpZy1xdWljay1maWx0ZXItc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFJM0YsTUFBTSxPQUFPLGdDQUFnQztJQUVmO0lBQTdCLFlBQTZCLHlCQUFvRDtRQUFwRCw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO0lBQ2pGLENBQUM7SUFFRCxNQUFNLENBQVUsUUFBUSxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUV2RCxRQUFRO1FBQ1AsT0FBTyx5QkFBeUIsQ0FBQztJQUNsQyxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQWdDO1FBRXRDLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQyxFQUFFO1lBQ3JELElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxFQUFFLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1NBQ2hGO0lBRUYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciwgRG9tYWluRXZlbnRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgUXVpY2tGaWx0ZXJFbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4vcXVpY2stZmlsdGVyLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBDb25maWdRdWlja0ZpbHRlclNldEV2ZW50IH0gZnJvbSAnLi4vLi4vY29yZS9xdWljay9jb25maWctcXVpY2stZmlsdGVyLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5cblxuZXhwb3J0IGNsYXNzIENvbmZpZ1F1aWNrRmlsdGVyU2V0RXZlbnRIYW5kbGVyIGltcGxlbWVudHMgRG9tYWluRXZlbnRIYW5kbGVyPFN0cnVjdHVyZUlkLCBDb25maWdRdWlja0ZpbHRlclNldEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBxdWlja0ZpbHRlckVuYWJsZWRBcmNoaXZlOiBRdWlja0ZpbHRlckVuYWJsZWRBcmNoaXZlKSB7XG5cdH1cblxuXHRzdGF0aWMgcmVhZG9ubHkgc2VydmljZXMgPSBbUXVpY2tGaWx0ZXJFbmFibGVkQXJjaGl2ZV07XG5cblx0Zm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPENvbmZpZ1F1aWNrRmlsdGVyU2V0RXZlbnQ+IHtcblx0XHRyZXR1cm4gQ29uZmlnUXVpY2tGaWx0ZXJTZXRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShldmVudDogQ29uZmlnUXVpY2tGaWx0ZXJTZXRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ0NvbmZpZ1F1aWNrRmlsdGVyU2V0RXZlbnQnKSkge1xuXHRcdFx0dGhpcy5xdWlja0ZpbHRlckVuYWJsZWRBcmNoaXZlLm5leHQoZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgZXZlbnQuZ2V0RW5hYmxlZCgpKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=