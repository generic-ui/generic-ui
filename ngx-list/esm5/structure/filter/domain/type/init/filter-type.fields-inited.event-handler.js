/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FieldsInitedEvent } from '../../../../field/domain/init/fields-inited.event';
// TODO Remove
var FilterTypeFieldsInitedEventHandler = /** @class */ (function () {
    function FilterTypeFieldsInitedEventHandler() {
    }
    // constructor(private readonly filterTypeManagerRepository: FilterTypeManagerRepository,
    // 			private readonly domainEventPublisher: DomainEventPublisher) {
    // }
    // constructor(private readonly filterTypeManagerRepository: FilterTypeManagerRepository,
    // 			private readonly domainEventPublisher: DomainEventPublisher) {
    // }
    /**
     * @return {?}
     */
    FilterTypeFieldsInitedEventHandler.prototype.forEvent = 
    // constructor(private readonly filterTypeManagerRepository: FilterTypeManagerRepository,
    // 			private readonly domainEventPublisher: DomainEventPublisher) {
    // }
    /**
     * @return {?}
     */
    function () {
        return FieldsInitedEvent;
    };
    /**
     * @param {?} fieldsInitedEvent
     * @return {?}
     */
    FilterTypeFieldsInitedEventHandler.prototype.handle = /**
     * @param {?} fieldsInitedEvent
     * @return {?}
     */
    function (fieldsInitedEvent) {
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
    };
    FilterTypeFieldsInitedEventHandler.decorators = [
        { type: Injectable }
    ];
    return FilterTypeFieldsInitedEventHandler;
}());
export { FilterTypeFieldsInitedEventHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXR5cGUuZmllbGRzLWluaXRlZC5ldmVudC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2RvbWFpbi90eXBlL2luaXQvZmlsdGVyLXR5cGUuZmllbGRzLWluaXRlZC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDOztBQUt0RjtJQUFBO0lBeUJBLENBQUM7SUF0QkEseUZBQXlGO0lBQ3pGLG9FQUFvRTtJQUNwRSxJQUFJOzs7Ozs7O0lBRUoscURBQVE7Ozs7Ozs7SUFBUjtRQUNDLE9BQU8saUJBQWlCLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxtREFBTTs7OztJQUFOLFVBQU8saUJBQW9DO1FBRTFDLDhEQUE4RDtRQUM5RCxFQUFFO1FBQ0YsaURBQWlEO1FBQ2pELEVBQUU7UUFDRixrREFBa0Q7UUFDbEQsRUFBRTtRQUNGLHVGQUF1RjtRQUN2RixFQUFFO1FBQ0YseUlBQXlJO1FBQ3pJLElBQUk7SUFDTCxDQUFDOztnQkF2QkQsVUFBVTs7SUF5QlgseUNBQUM7Q0FBQSxBQXpCRCxJQXlCQztTQXhCWSxrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciwgRG9tYWluRXZlbnRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmllbGRzSW5pdGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9kb21haW4vaW5pdC9maWVsZHMtaW5pdGVkLmV2ZW50JztcblxuLy8gVE9ETyBSZW1vdmVcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsdGVyVHlwZUZpZWxkc0luaXRlZEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgRmllbGRzSW5pdGVkRXZlbnQ+IHtcblxuXHQvLyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZpbHRlclR5cGVNYW5hZ2VyUmVwb3NpdG9yeTogRmlsdGVyVHlwZU1hbmFnZXJSZXBvc2l0b3J5LFxuXHQvLyBcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHQvLyB9XG5cblx0Zm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPEZpZWxkc0luaXRlZEV2ZW50PiB7XG5cdFx0cmV0dXJuIEZpZWxkc0luaXRlZEV2ZW50O1xuXHR9XG5cblx0aGFuZGxlKGZpZWxkc0luaXRlZEV2ZW50OiBGaWVsZHNJbml0ZWRFdmVudCk6IHZvaWQge1xuXG5cdFx0Ly8gaWYgKGZpZWxkc0luaXRlZEV2ZW50Lm9mTWVzc2FnZVR5cGUoJ0ZpZWxkc0luaXRlZEV2ZW50JykpIHtcblx0XHQvL1xuXHRcdC8vIFx0Y29uc3QgZmllbGRzID0gZmllbGRzSW5pdGVkRXZlbnQuZ2V0RmllbGRzKCk7XG5cdFx0Ly9cblx0XHQvLyBcdGNvbnN0IG1hbmFnZXIgPSBuZXcgRmlsdGVyVHlwZU1hbmFnZXIoZmllbGRzKTtcblx0XHQvL1xuXHRcdC8vIFx0dGhpcy5maWx0ZXJUeXBlTWFuYWdlclJlcG9zaXRvcnkubmV4dChmaWVsZHNJbml0ZWRFdmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBtYW5hZ2VyKTtcblx0XHQvL1xuXHRcdC8vIFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBGaWx0ZXJUeXBlc0luaXRlZEV2ZW50KGZpZWxkc0luaXRlZEV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIG1hbmFnZXIuZ2V0RmllbGRJZHNUb0ZpZWxkVHlwZXMoKSkpO1xuXHRcdC8vIH1cblx0fVxuXG59XG4iXX0=