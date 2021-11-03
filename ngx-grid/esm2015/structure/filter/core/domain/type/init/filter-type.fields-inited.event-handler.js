import { Injectable } from '@angular/core';
import { FieldsInitedEvent } from '../../../../../field/core/domain/init/fields-inited.event';
import * as i0 from "@angular/core";
// TODO Remove
export class FilterTypeFieldsInitedEventHandler {
    // constructor(private readonly filterTypeManagerRepository: FilterTypeManagerRepository,
    // 			private readonly domainEventPublisher: DomainEventPublisher) {
    // }
    forEvent() {
        return FieldsInitedEvent;
    }
    handle(fieldsInitedEvent) {
        // if (fieldsInitedEvent.ofMessageType('FieldsInitedEvent')) {
        //
        // 	const fields = fieldsInitedEvent.getFields();
        //
        // 	const manager = new FilterTypeManager(fields);
        //
        // 	this.filterTypeManagerRepository.next(fieldsInitedEvent.getAggregateId(), manager);
        //
        // 	this.domainEventPublisher.publish(new FilterTypesInitedEvent(fieldsInitedEvent.getAggregateId(), manager.getFieldIdsToFieldTypes()));
        // }
    }
}
FilterTypeFieldsInitedEventHandler.ɵfac = function FilterTypeFieldsInitedEventHandler_Factory(t) { return new (t || FilterTypeFieldsInitedEventHandler)(); };
FilterTypeFieldsInitedEventHandler.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FilterTypeFieldsInitedEventHandler, factory: FilterTypeFieldsInitedEventHandler.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterTypeFieldsInitedEventHandler, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXR5cGUuZmllbGRzLWluaXRlZC5ldmVudC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvZmlsdGVyL2NvcmUvZG9tYWluL3R5cGUvaW5pdC9maWx0ZXItdHlwZS5maWVsZHMtaW5pdGVkLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUszQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQzs7QUFFOUYsY0FBYztBQUlkLE1BQU0sT0FBTyxrQ0FBa0M7SUFFOUMseUZBQXlGO0lBQ3pGLG9FQUFvRTtJQUNwRSxJQUFJO0lBRUosUUFBUTtRQUNQLE9BQU8saUJBQWlCLENBQUM7SUFDMUIsQ0FBQztJQUVELE1BQU0sQ0FBQyxpQkFBb0M7UUFFMUMsOERBQThEO1FBQzlELEVBQUU7UUFDRixpREFBaUQ7UUFDakQsRUFBRTtRQUNGLGtEQUFrRDtRQUNsRCxFQUFFO1FBQ0YsdUZBQXVGO1FBQ3ZGLEVBQUU7UUFDRix5SUFBeUk7UUFDekksSUFBSTtJQUNMLENBQUM7O29IQXRCVyxrQ0FBa0M7d0ZBQWxDLGtDQUFrQyxXQUFsQyxrQ0FBa0M7dUZBQWxDLGtDQUFrQztjQUQ5QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIsIERvbWFpbkV2ZW50VHlwZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpZWxkc0luaXRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vaW5pdC9maWVsZHMtaW5pdGVkLmV2ZW50JztcblxuLy8gVE9ETyBSZW1vdmVcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsdGVyVHlwZUZpZWxkc0luaXRlZEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgRmllbGRzSW5pdGVkRXZlbnQ+IHtcblxuXHQvLyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZpbHRlclR5cGVNYW5hZ2VyUmVwb3NpdG9yeTogRmlsdGVyVHlwZU1hbmFnZXJSZXBvc2l0b3J5LFxuXHQvLyBcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHQvLyB9XG5cblx0Zm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPEZpZWxkc0luaXRlZEV2ZW50PiB7XG5cdFx0cmV0dXJuIEZpZWxkc0luaXRlZEV2ZW50O1xuXHR9XG5cblx0aGFuZGxlKGZpZWxkc0luaXRlZEV2ZW50OiBGaWVsZHNJbml0ZWRFdmVudCk6IHZvaWQge1xuXG5cdFx0Ly8gaWYgKGZpZWxkc0luaXRlZEV2ZW50Lm9mTWVzc2FnZVR5cGUoJ0ZpZWxkc0luaXRlZEV2ZW50JykpIHtcblx0XHQvL1xuXHRcdC8vIFx0Y29uc3QgZmllbGRzID0gZmllbGRzSW5pdGVkRXZlbnQuZ2V0RmllbGRzKCk7XG5cdFx0Ly9cblx0XHQvLyBcdGNvbnN0IG1hbmFnZXIgPSBuZXcgRmlsdGVyVHlwZU1hbmFnZXIoZmllbGRzKTtcblx0XHQvL1xuXHRcdC8vIFx0dGhpcy5maWx0ZXJUeXBlTWFuYWdlclJlcG9zaXRvcnkubmV4dChmaWVsZHNJbml0ZWRFdmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBtYW5hZ2VyKTtcblx0XHQvL1xuXHRcdC8vIFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBGaWx0ZXJUeXBlc0luaXRlZEV2ZW50KGZpZWxkc0luaXRlZEV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIG1hbmFnZXIuZ2V0RmllbGRJZHNUb0ZpZWxkVHlwZXMoKSkpO1xuXHRcdC8vIH1cblx0fVxuXG59XG4iXX0=