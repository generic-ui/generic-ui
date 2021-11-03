import { Injectable } from '@angular/core';
import { ListViewModeSetEvent } from '../../domain/mode/list-view-mode-set.event';
import * as i0 from "@angular/core";
import * as i1 from "./list-view.mode.archive";
export class ListViewModeSetEventHandler {
    constructor(listViewModeRepository) {
        this.listViewModeRepository = listViewModeRepository;
    }
    forEvent() {
        return ListViewModeSetEvent;
    }
    handle(event) {
        if (event.ofMessageType('ListViewModeSetEvent')) {
            this.listViewModeRepository.next(event.getAggregateId(), event.getTheme());
        }
    }
}
ListViewModeSetEventHandler.ɵfac = function ListViewModeSetEventHandler_Factory(t) { return new (t || ListViewModeSetEventHandler)(i0.ɵɵinject(i1.ListViewModeArchive)); };
ListViewModeSetEventHandler.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ListViewModeSetEventHandler, factory: ListViewModeSetEventHandler.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListViewModeSetEventHandler, [{
        type: Injectable
    }], function () { return [{ type: i1.ListViewModeArchive }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LW1vZGUtc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9saXN0L2NvcmUvYXBpL21vZGUvbGlzdC12aWV3LW1vZGUtc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU0zQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7O0FBSWxGLE1BQU0sT0FBTywyQkFBMkI7SUFFdkMsWUFBb0Isc0JBQTJDO1FBQTNDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBcUI7SUFDL0QsQ0FBQztJQUVELFFBQVE7UUFDUCxPQUFPLG9CQUFvQixDQUFDO0lBQzdCLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBMkI7UUFFakMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDM0U7SUFFRixDQUFDOztzR0FmVywyQkFBMkI7aUZBQTNCLDJCQUEyQixXQUEzQiwyQkFBMkI7dUZBQTNCLDJCQUEyQjtjQUR2QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIsIERvbWFpbkV2ZW50VHlwZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IExpc3RWaWV3TW9kZUFyY2hpdmUgfSBmcm9tICcuL2xpc3Qtdmlldy5tb2RlLmFyY2hpdmUnO1xuaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9saXN0LXZpZXcuaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vbW9kZS9saXN0LXZpZXctbW9kZS1zZXQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld01vZGVTZXRFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8TGlzdFZpZXdJZCwgTGlzdFZpZXdNb2RlU2V0RXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGxpc3RWaWV3TW9kZVJlcG9zaXRvcnk6IExpc3RWaWV3TW9kZUFyY2hpdmUpIHtcblx0fVxuXG5cdGZvckV2ZW50KCk6IERvbWFpbkV2ZW50VHlwZTxMaXN0Vmlld01vZGVTZXRFdmVudD4ge1xuXHRcdHJldHVybiBMaXN0Vmlld01vZGVTZXRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShldmVudDogTGlzdFZpZXdNb2RlU2V0RXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdMaXN0Vmlld01vZGVTZXRFdmVudCcpKSB7XG5cdFx0XHR0aGlzLmxpc3RWaWV3TW9kZVJlcG9zaXRvcnkubmV4dChldmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBldmVudC5nZXRUaGVtZSgpKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=