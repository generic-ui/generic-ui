/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FieldsInitedEvent } from '../../../../../field/core/domain/init/fields-inited.event';
// TODO Remove
export class FilterTypeFieldsInitedEventHandler {
    // constructor(private readonly filterTypeManagerRepository: FilterTypeManagerRepository,
    // 			private readonly domainEventPublisher: DomainEventPublisher) {
    // }
    /**
     * @return {?}
     */
    forEvent() {
        return FieldsInitedEvent;
    }
    /**
     * @param {?} fieldsInitedEvent
     * @return {?}
     */
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
FilterTypeFieldsInitedEventHandler.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXR5cGUuZmllbGRzLWluaXRlZC5ldmVudC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2NvcmUvZG9tYWluL3R5cGUvaW5pdC9maWx0ZXItdHlwZS5maWVsZHMtaW5pdGVkLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkRBQTJELENBQUM7O0FBTTlGLE1BQU0sT0FBTyxrQ0FBa0M7Ozs7Ozs7SUFNOUMsUUFBUTtRQUNQLE9BQU8saUJBQWlCLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsaUJBQW9DO1FBRTFDLDhEQUE4RDtRQUM5RCxFQUFFO1FBQ0YsaURBQWlEO1FBQ2pELEVBQUU7UUFDRixrREFBa0Q7UUFDbEQsRUFBRTtRQUNGLHVGQUF1RjtRQUN2RixFQUFFO1FBQ0YseUlBQXlJO1FBQ3pJLElBQUk7SUFDTCxDQUFDOzs7WUF2QkQsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWVsZHNJbml0ZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2luaXQvZmllbGRzLWluaXRlZC5ldmVudCc7XG5cbi8vIFRPRE8gUmVtb3ZlXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbHRlclR5cGVGaWVsZHNJbml0ZWRFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8U3RydWN0dXJlSWQsIEZpZWxkc0luaXRlZEV2ZW50PiB7XG5cblx0Ly8gY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBmaWx0ZXJUeXBlTWFuYWdlclJlcG9zaXRvcnk6IEZpbHRlclR5cGVNYW5hZ2VyUmVwb3NpdG9yeSxcblx0Ly8gXHRcdFx0cHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0Ly8gfVxuXG5cdGZvckV2ZW50KCk6IERvbWFpbkV2ZW50VHlwZTxGaWVsZHNJbml0ZWRFdmVudD4ge1xuXHRcdHJldHVybiBGaWVsZHNJbml0ZWRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShmaWVsZHNJbml0ZWRFdmVudDogRmllbGRzSW5pdGVkRXZlbnQpOiB2b2lkIHtcblxuXHRcdC8vIGlmIChmaWVsZHNJbml0ZWRFdmVudC5vZk1lc3NhZ2VUeXBlKCdGaWVsZHNJbml0ZWRFdmVudCcpKSB7XG5cdFx0Ly9cblx0XHQvLyBcdGNvbnN0IGZpZWxkcyA9IGZpZWxkc0luaXRlZEV2ZW50LmdldEZpZWxkcygpO1xuXHRcdC8vXG5cdFx0Ly8gXHRjb25zdCBtYW5hZ2VyID0gbmV3IEZpbHRlclR5cGVNYW5hZ2VyKGZpZWxkcyk7XG5cdFx0Ly9cblx0XHQvLyBcdHRoaXMuZmlsdGVyVHlwZU1hbmFnZXJSZXBvc2l0b3J5Lm5leHQoZmllbGRzSW5pdGVkRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgbWFuYWdlcik7XG5cdFx0Ly9cblx0XHQvLyBcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgRmlsdGVyVHlwZXNJbml0ZWRFdmVudChmaWVsZHNJbml0ZWRFdmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBtYW5hZ2VyLmdldEZpZWxkSWRzVG9GaWVsZFR5cGVzKCkpKTtcblx0XHQvLyB9XG5cdH1cblxufVxuIl19