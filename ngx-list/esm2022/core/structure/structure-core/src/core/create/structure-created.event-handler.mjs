import { SummariesEnabledArchive } from '../../../../summaries/src/core-read/enabled/summaries-enabled-archive.service';
import { StructureCreatedEvent } from './structure-created.event';
export class StructureCreatedEventHandler {
    summariesEnabledArchive;
    constructor(summariesEnabledArchive) {
        this.summariesEnabledArchive = summariesEnabledArchive;
    }
    static services = [SummariesEnabledArchive];
    forEvent() {
        return StructureCreatedEvent;
    }
    handle(event) {
        if (event.ofMessageType('StructureCreatedEvent')) {
            const structureId = event.getAggregateId();
            this.summariesEnabledArchive.init(structureId);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2NvcmUvY3JlYXRlL3N0cnVjdHVyZS1jcmVhdGVkLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0VBQStFLENBQUM7QUFDeEgsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFJbEUsTUFBTSxPQUFPLDRCQUE0QjtJQUVYO0lBQTdCLFlBQTZCLHVCQUFnRDtRQUFoRCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO0lBQzdFLENBQUM7SUFFRCxNQUFNLENBQVUsUUFBUSxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUVyRCxRQUFRO1FBQ1AsT0FBTyxxQkFBcUIsQ0FBQztJQUM5QixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQTRCO1FBRWxDLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFO1lBRWpELE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUUzQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQy9DO0lBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciwgRG9tYWluRXZlbnRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3VtbWFyaWVzRW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdW1tYXJpZXMvc3JjL2NvcmUtcmVhZC9lbmFibGVkL3N1bW1hcmllcy1lbmFibGVkLWFyY2hpdmUuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDcmVhdGVkRXZlbnQgfSBmcm9tICcuL3N0cnVjdHVyZS1jcmVhdGVkLmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuXG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDcmVhdGVkRXZlbnRIYW5kbGVyIGltcGxlbWVudHMgRG9tYWluRXZlbnRIYW5kbGVyPFN0cnVjdHVyZUlkLCBTdHJ1Y3R1cmVDcmVhdGVkRXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN1bW1hcmllc0VuYWJsZWRBcmNoaXZlOiBTdW1tYXJpZXNFbmFibGVkQXJjaGl2ZSkge1xuXHR9XG5cblx0c3RhdGljIHJlYWRvbmx5IHNlcnZpY2VzID0gW1N1bW1hcmllc0VuYWJsZWRBcmNoaXZlXTtcblxuXHRmb3JFdmVudCgpOiBEb21haW5FdmVudFR5cGU8U3RydWN0dXJlQ3JlYXRlZEV2ZW50PiB7XG5cdFx0cmV0dXJuIFN0cnVjdHVyZUNyZWF0ZWRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShldmVudDogU3RydWN0dXJlQ3JlYXRlZEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnU3RydWN0dXJlQ3JlYXRlZEV2ZW50JykpIHtcblxuXHRcdFx0Y29uc3Qgc3RydWN0dXJlSWQgPSBldmVudC5nZXRBZ2dyZWdhdGVJZCgpO1xuXG5cdFx0XHR0aGlzLnN1bW1hcmllc0VuYWJsZWRBcmNoaXZlLmluaXQoc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=