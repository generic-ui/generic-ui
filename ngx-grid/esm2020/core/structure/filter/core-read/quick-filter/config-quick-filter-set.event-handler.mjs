import { QuickFilterEnabledArchive } from './quick-filter-enabled.archive';
import { ConfigQuickFilterSetEvent } from '../../core/quick/config-quick-filter-set.event';
export class ConfigQuickFilterSetEventHandler {
    constructor(quickFilterEnabledArchive) {
        this.quickFilterEnabledArchive = quickFilterEnabledArchive;
    }
    forEvent() {
        return ConfigQuickFilterSetEvent;
    }
    handle(event) {
        if (event.ofMessageType('ConfigQuickFilterSetEvent')) {
            this.quickFilterEnabledArchive.next(event.getAggregateId(), event.getEnabled());
        }
    }
}
ConfigQuickFilterSetEventHandler.services = [QuickFilterEnabledArchive];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXF1aWNrLWZpbHRlci1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29yZS9zdHJ1Y3R1cmUvZmlsdGVyL2NvcmUtcmVhZC9xdWljay1maWx0ZXIvY29uZmlnLXF1aWNrLWZpbHRlci1zZXQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUkzRixNQUFNLE9BQU8sZ0NBQWdDO0lBRTVDLFlBQTZCLHlCQUFvRDtRQUFwRCw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO0lBQ2pGLENBQUM7SUFJRCxRQUFRO1FBQ1AsT0FBTyx5QkFBeUIsQ0FBQztJQUNsQyxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQWdDO1FBRXRDLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQyxFQUFFO1lBQ3JELElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxFQUFFLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1NBQ2hGO0lBRUYsQ0FBQzs7QUFaZSx5Q0FBUSxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciwgRG9tYWluRXZlbnRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgUXVpY2tGaWx0ZXJFbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4vcXVpY2stZmlsdGVyLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBDb25maWdRdWlja0ZpbHRlclNldEV2ZW50IH0gZnJvbSAnLi4vLi4vY29yZS9xdWljay9jb25maWctcXVpY2stZmlsdGVyLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS1jb3JlL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcblxuXG5leHBvcnQgY2xhc3MgQ29uZmlnUXVpY2tGaWx0ZXJTZXRFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8U3RydWN0dXJlSWQsIENvbmZpZ1F1aWNrRmlsdGVyU2V0RXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHF1aWNrRmlsdGVyRW5hYmxlZEFyY2hpdmU6IFF1aWNrRmlsdGVyRW5hYmxlZEFyY2hpdmUpIHtcblx0fVxuXG5cdHN0YXRpYyByZWFkb25seSBzZXJ2aWNlcyA9IFtRdWlja0ZpbHRlckVuYWJsZWRBcmNoaXZlXTtcblxuXHRmb3JFdmVudCgpOiBEb21haW5FdmVudFR5cGU8Q29uZmlnUXVpY2tGaWx0ZXJTZXRFdmVudD4ge1xuXHRcdHJldHVybiBDb25maWdRdWlja0ZpbHRlclNldEV2ZW50O1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBDb25maWdRdWlja0ZpbHRlclNldEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnQ29uZmlnUXVpY2tGaWx0ZXJTZXRFdmVudCcpKSB7XG5cdFx0XHR0aGlzLnF1aWNrRmlsdGVyRW5hYmxlZEFyY2hpdmUubmV4dChldmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBldmVudC5nZXRFbmFibGVkKCkpO1xuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==