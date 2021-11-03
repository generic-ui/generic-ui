import { Injectable } from '@angular/core';
import { ConfigFilterSetEvent } from '../../domain/config/config-filter-set.event';
import * as i0 from "@angular/core";
import * as i1 from "./filter-enabled.archive";
export class ConfigFilterSetEventHandler {
    constructor(structureFilterRepository) {
        this.structureFilterRepository = structureFilterRepository;
    }
    forEvent() {
        return ConfigFilterSetEvent;
    }
    handle(event) {
        if (event.ofMessageType('ConfigFilterSetEvent')) {
            this.structureFilterRepository.next(event.getAggregateId(), event.getEnabled());
        }
    }
}
ConfigFilterSetEventHandler.ɵfac = function ConfigFilterSetEventHandler_Factory(t) { return new (t || ConfigFilterSetEventHandler)(i0.ɵɵinject(i1.FilterEnabledArchive)); };
ConfigFilterSetEventHandler.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ConfigFilterSetEventHandler, factory: ConfigFilterSetEventHandler.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfigFilterSetEventHandler, [{
        type: Injectable
    }], function () { return [{ type: i1.FilterEnabledArchive }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWZpbHRlci1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL2ZpbHRlci9jb3JlL2FwaS9yZWFkL2NvbmZpZy1maWx0ZXItc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUszQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7O0FBS25GLE1BQU0sT0FBTywyQkFBMkI7SUFFdkMsWUFBNkIseUJBQStDO1FBQS9DLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBc0I7SUFDNUUsQ0FBQztJQUVELFFBQVE7UUFDUCxPQUFPLG9CQUFvQixDQUFDO0lBQzdCLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBMkI7UUFFakMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7U0FDaEY7SUFFRixDQUFDOztzR0FmVywyQkFBMkI7aUZBQTNCLDJCQUEyQixXQUEzQiwyQkFBMkI7dUZBQTNCLDJCQUEyQjtjQUR2QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIsIERvbWFpbkV2ZW50VHlwZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZpbHRlckVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi9maWx0ZXItZW5hYmxlZC5hcmNoaXZlJztcbmltcG9ydCB7IENvbmZpZ0ZpbHRlclNldEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbmZpZy9jb25maWctZmlsdGVyLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbmZpZ0ZpbHRlclNldEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgQ29uZmlnRmlsdGVyU2V0RXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUZpbHRlclJlcG9zaXRvcnk6IEZpbHRlckVuYWJsZWRBcmNoaXZlKSB7XG5cdH1cblxuXHRmb3JFdmVudCgpOiBEb21haW5FdmVudFR5cGU8Q29uZmlnRmlsdGVyU2V0RXZlbnQ+IHtcblx0XHRyZXR1cm4gQ29uZmlnRmlsdGVyU2V0RXZlbnQ7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IENvbmZpZ0ZpbHRlclNldEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnQ29uZmlnRmlsdGVyU2V0RXZlbnQnKSkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVGaWx0ZXJSZXBvc2l0b3J5Lm5leHQoZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgZXZlbnQuZ2V0RW5hYmxlZCgpKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=