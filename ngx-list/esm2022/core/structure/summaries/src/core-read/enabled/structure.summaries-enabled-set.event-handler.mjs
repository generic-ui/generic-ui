import { SummariesEnabledArchive } from './summaries-enabled-archive.service';
import { StructureSummariesEnabledSetEvent } from '../../core/set/structure.summaries-enabled-set.event';
export class StructureSummariesEnabledSetEventHandler {
    summariesEnabledArchive;
    constructor(summariesEnabledArchive) {
        this.summariesEnabledArchive = summariesEnabledArchive;
    }
    static services = [SummariesEnabledArchive];
    forEvent() {
        return StructureSummariesEnabledSetEvent;
    }
    handle(event) {
        if (event.ofMessageType('StructureSummariesEnabledSetEvent')) {
            this.summariesEnabledArchive.next(event.getAggregateId(), event.isEnabled());
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1lbmFibGVkLXNldC5ldmVudC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL3N0cnVjdHVyZS9zdW1tYXJpZXMvc3JjL2NvcmUtcmVhZC9lbmFibGVkL3N0cnVjdHVyZS5zdW1tYXJpZXMtZW5hYmxlZC1zZXQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUl6RyxNQUFNLE9BQU8sd0NBQXdDO0lBRXZCO0lBQTdCLFlBQTZCLHVCQUFnRDtRQUFoRCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO0lBQzdFLENBQUM7SUFFRCxNQUFNLENBQVUsUUFBUSxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUVyRCxRQUFRO1FBQ1AsT0FBTyxpQ0FBaUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQXdDO1FBRTlDLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxtQ0FBbUMsQ0FBQyxFQUFFO1lBQzdELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxFQUFFLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQzdFO0lBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciwgRG9tYWluRXZlbnRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3VtbWFyaWVzRW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuL3N1bW1hcmllcy1lbmFibGVkLWFyY2hpdmUuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNFbmFibGVkU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9jb3JlL3NldC9zdHJ1Y3R1cmUuc3VtbWFyaWVzLWVuYWJsZWQtc2V0LmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcblxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU3VtbWFyaWVzRW5hYmxlZFNldEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgU3RydWN0dXJlU3VtbWFyaWVzRW5hYmxlZFNldEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdW1tYXJpZXNFbmFibGVkQXJjaGl2ZTogU3VtbWFyaWVzRW5hYmxlZEFyY2hpdmUpIHtcblx0fVxuXG5cdHN0YXRpYyByZWFkb25seSBzZXJ2aWNlcyA9IFtTdW1tYXJpZXNFbmFibGVkQXJjaGl2ZV07XG5cblx0Zm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPFN0cnVjdHVyZVN1bW1hcmllc0VuYWJsZWRTZXRFdmVudD4ge1xuXHRcdHJldHVybiBTdHJ1Y3R1cmVTdW1tYXJpZXNFbmFibGVkU2V0RXZlbnQ7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IFN0cnVjdHVyZVN1bW1hcmllc0VuYWJsZWRTZXRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ1N0cnVjdHVyZVN1bW1hcmllc0VuYWJsZWRTZXRFdmVudCcpKSB7XG5cdFx0XHR0aGlzLnN1bW1hcmllc0VuYWJsZWRBcmNoaXZlLm5leHQoZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgZXZlbnQuaXNFbmFibGVkKCkpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=