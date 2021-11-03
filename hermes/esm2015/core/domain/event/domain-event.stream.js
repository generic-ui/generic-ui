import { Injectable } from '@angular/core';
import { HermesSubject } from '../../../common/stream/observable/hermes.subject';
import * as i0 from "@angular/core";
import * as i1 from "./domain-event.store";
export class DomainEventStream extends HermesSubject {
    constructor(eventStore) {
        super();
        this.eventStore = eventStore;
    }
    next(event) {
        super.next(event);
        this.eventStore.next(event);
    }
}
DomainEventStream.ɵfac = function DomainEventStream_Factory(t) { return new (t || DomainEventStream)(i0.ɵɵinject(i1.DomainEventStore)); };
DomainEventStream.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DomainEventStream, factory: DomainEventStream.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DomainEventStream, [{
        type: Injectable
    }], function () { return [{ type: i1.DomainEventStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LnN0cmVhbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb3JlL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuc3RyZWFtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtEQUFrRCxDQUFDOzs7QUFJakYsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGFBQXVDO0lBRTdFLFlBQTZCLFVBQTRCO1FBQ3hELEtBQUssRUFBRSxDQUFDO1FBRG9CLGVBQVUsR0FBVixVQUFVLENBQWtCO0lBRXpELENBQUM7SUFFRCxJQUFJLENBQUMsS0FBK0I7UUFDbkMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDOztrRkFUVyxpQkFBaUI7dUVBQWpCLGlCQUFpQixXQUFqQixpQkFBaUI7dUZBQWpCLGlCQUFpQjtjQUQ3QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4vZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IERvbWFpbkV2ZW50U3RvcmUgfSBmcm9tICcuL2RvbWFpbi1ldmVudC5zdG9yZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgSGVybWVzU3ViamVjdCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zdHJlYW0vb2JzZXJ2YWJsZS9oZXJtZXMuc3ViamVjdCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvbWFpbkV2ZW50U3RyZWFtIGV4dGVuZHMgSGVybWVzU3ViamVjdDxEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGV2ZW50U3RvcmU6IERvbWFpbkV2ZW50U3RvcmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmV4dChldmVudDogRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+KTogdm9pZCB7XG5cdFx0c3VwZXIubmV4dChldmVudCk7XG5cdFx0dGhpcy5ldmVudFN0b3JlLm5leHQoZXZlbnQpO1xuXHR9XG59XG4iXX0=