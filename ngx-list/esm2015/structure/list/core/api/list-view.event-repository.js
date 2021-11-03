import { Injectable } from '@angular/core';
import { EventRepository } from '@generic-ui/hermes';
import { ListViewModeSetEvent } from '../domain/mode/list-view-mode-set.event';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/hermes";
export class ListViewEventRepository extends EventRepository {
    constructor(domainEventBus) {
        super(domainEventBus);
    }
    onModeChange(listViewReadModelRootId) {
        return this.onEvent(listViewReadModelRootId, ListViewModeSetEvent);
    }
}
ListViewEventRepository.ɵfac = function ListViewEventRepository_Factory(t) { return new (t || ListViewEventRepository)(i0.ɵɵinject(i1.DomainEventBus)); };
ListViewEventRepository.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ListViewEventRepository, factory: ListViewEventRepository.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListViewEventRepository, [{
        type: Injectable
    }], function () { return [{ type: i1.DomainEventBus }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9saXN0L2NvcmUvYXBpL2xpc3Qtdmlldy5ldmVudC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFrQixlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUlyRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7O0FBRy9FLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxlQUFvRDtJQUVoRyxZQUFZLGNBQThCO1FBQ3pDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsWUFBWSxDQUFDLHVCQUFnRDtRQUU1RCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs4RkFUVyx1QkFBdUI7NkVBQXZCLHVCQUF1QixXQUF2Qix1QkFBdUI7dUZBQXZCLHVCQUF1QjtjQURuQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEJ1cywgRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4uL2RvbWFpbi9saXN0LXZpZXcuaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuL2xpc3Qtdmlldy5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlU2V0RXZlbnQgfSBmcm9tICcuLi9kb21haW4vbW9kZS9saXN0LXZpZXctbW9kZS1zZXQuZXZlbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdFdmVudFJlcG9zaXRvcnkgZXh0ZW5kcyBFdmVudFJlcG9zaXRvcnk8TGlzdFZpZXdSZWFkTW9kZWxSb290SWQsIExpc3RWaWV3SWQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMpIHtcblx0XHRzdXBlcihkb21haW5FdmVudEJ1cyk7XG5cdH1cblxuXHRvbk1vZGVDaGFuZ2UobGlzdFZpZXdSZWFkTW9kZWxSb290SWQ6IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkKSB7XG5cblx0XHRyZXR1cm4gdGhpcy5vbkV2ZW50KGxpc3RWaWV3UmVhZE1vZGVsUm9vdElkLCBMaXN0Vmlld01vZGVTZXRFdmVudCk7XG5cdH1cblxuXG59XG4iXX0=