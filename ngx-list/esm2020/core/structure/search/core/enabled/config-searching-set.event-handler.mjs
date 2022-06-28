import { SearchingEnabledArchive } from './searching-enabled.archive';
import { ConfigSearchingSetEvent } from '../config/config-searching-set.event';
export class ConfigSearchingSetEventHandler {
    constructor(searchingEnabledArchive) {
        this.searchingEnabledArchive = searchingEnabledArchive;
    }
    forEvent() {
        return ConfigSearchingSetEvent;
    }
    handle(event) {
        if (event.ofMessageType('ConfigSearchingSetEvent')) {
            this.searchingEnabledArchive.next(event.getAggregateId(), event.isEnabled());
        }
    }
}
ConfigSearchingSetEventHandler.services = [SearchingEnabledArchive];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXNlYXJjaGluZy1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvc2VhcmNoL2NvcmUvZW5hYmxlZC9jb25maWctc2VhcmNoaW5nLXNldC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXRFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBSS9FLE1BQU0sT0FBTyw4QkFBOEI7SUFFMUMsWUFBNkIsdUJBQWdEO1FBQWhELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7SUFDN0UsQ0FBQztJQUlELFFBQVE7UUFDUCxPQUFPLHVCQUF1QixDQUFDO0lBQ2hDLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBOEI7UUFFcEMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLEVBQUU7WUFDbkQsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUUsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7U0FDN0U7SUFFRixDQUFDOztBQVplLHVDQUFRLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTZWFyY2hpbmdFbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4vc2VhcmNoaW5nLWVuYWJsZWQuYXJjaGl2ZSc7XG5cbmltcG9ydCB7IENvbmZpZ1NlYXJjaGluZ1NldEV2ZW50IH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy1zZWFyY2hpbmctc2V0LmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuXG5cbmV4cG9ydCBjbGFzcyBDb25maWdTZWFyY2hpbmdTZXRFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8U3RydWN0dXJlSWQsIENvbmZpZ1NlYXJjaGluZ1NldEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzZWFyY2hpbmdFbmFibGVkQXJjaGl2ZTogU2VhcmNoaW5nRW5hYmxlZEFyY2hpdmUpIHtcblx0fVxuXG5cdHN0YXRpYyByZWFkb25seSBzZXJ2aWNlcyA9IFtTZWFyY2hpbmdFbmFibGVkQXJjaGl2ZV07XG5cblx0Zm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPENvbmZpZ1NlYXJjaGluZ1NldEV2ZW50PiB7XG5cdFx0cmV0dXJuIENvbmZpZ1NlYXJjaGluZ1NldEV2ZW50O1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBDb25maWdTZWFyY2hpbmdTZXRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ0NvbmZpZ1NlYXJjaGluZ1NldEV2ZW50JykpIHtcblx0XHRcdHRoaXMuc2VhcmNoaW5nRW5hYmxlZEFyY2hpdmUubmV4dChldmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBldmVudC5pc0VuYWJsZWQoKSk7XG5cdFx0fVxuXG5cdH1cblxufVxuIl19