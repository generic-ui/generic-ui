import { SummariesEnabledArchive } from './summaries-enabled-archive.service';
import { StructureSummariesEnabledSetEvent } from '../../core/set/structure.summaries-enabled-set.event';
export class StructureSummariesEnabledSetEventHandler {
    constructor(summariesEnabledArchive) {
        this.summariesEnabledArchive = summariesEnabledArchive;
    }
    forEvent() {
        return StructureSummariesEnabledSetEvent;
    }
    handle(event) {
        if (event.ofMessageType('StructureSummariesEnabledSetEvent')) {
            this.summariesEnabledArchive.next(event.getAggregateId(), event.isEnabled());
        }
    }
}
StructureSummariesEnabledSetEventHandler.services = [SummariesEnabledArchive];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1lbmFibGVkLXNldC5ldmVudC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL3N0cnVjdHVyZS9zdW1tYXJpZXMvY29yZS1yZWFkL2VuYWJsZWQvc3RydWN0dXJlLnN1bW1hcmllcy1lbmFibGVkLXNldC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBSXpHLE1BQU0sT0FBTyx3Q0FBd0M7SUFFcEQsWUFBNkIsdUJBQWdEO1FBQWhELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7SUFDN0UsQ0FBQztJQUlELFFBQVE7UUFDUCxPQUFPLGlDQUFpQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBd0M7UUFFOUMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLG1DQUFtQyxDQUFDLEVBQUU7WUFDN0QsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUUsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7U0FDN0U7SUFDRixDQUFDOztBQVhlLGlEQUFRLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdW1tYXJpZXNFbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4vc3VtbWFyaWVzLWVuYWJsZWQtYXJjaGl2ZS5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc0VuYWJsZWRTZXRFdmVudCB9IGZyb20gJy4uLy4uL2NvcmUvc2V0L3N0cnVjdHVyZS5zdW1tYXJpZXMtZW5hYmxlZC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVN1bW1hcmllc0VuYWJsZWRTZXRFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8U3RydWN0dXJlSWQsIFN0cnVjdHVyZVN1bW1hcmllc0VuYWJsZWRTZXRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3VtbWFyaWVzRW5hYmxlZEFyY2hpdmU6IFN1bW1hcmllc0VuYWJsZWRBcmNoaXZlKSB7XG5cdH1cblxuXHRzdGF0aWMgcmVhZG9ubHkgc2VydmljZXMgPSBbU3VtbWFyaWVzRW5hYmxlZEFyY2hpdmVdO1xuXG5cdGZvckV2ZW50KCk6IERvbWFpbkV2ZW50VHlwZTxTdHJ1Y3R1cmVTdW1tYXJpZXNFbmFibGVkU2V0RXZlbnQ+IHtcblx0XHRyZXR1cm4gU3RydWN0dXJlU3VtbWFyaWVzRW5hYmxlZFNldEV2ZW50O1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBTdHJ1Y3R1cmVTdW1tYXJpZXNFbmFibGVkU2V0RXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdTdHJ1Y3R1cmVTdW1tYXJpZXNFbmFibGVkU2V0RXZlbnQnKSkge1xuXHRcdFx0dGhpcy5zdW1tYXJpZXNFbmFibGVkQXJjaGl2ZS5uZXh0KGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIGV2ZW50LmlzRW5hYmxlZCgpKTtcblx0XHR9XG5cdH1cblxufVxuIl19