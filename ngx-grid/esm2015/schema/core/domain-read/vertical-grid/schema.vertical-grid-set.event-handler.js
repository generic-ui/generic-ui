/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SchemaVerticalGridRepository } from './schema.vertical-grid.repository';
import { SchemaVerticalGridSetEvent } from '../../domain/grid/vertical/schema-vertical-grid-set.event';
export class SchemaVerticalGridSetEventHandler {
    /**
     * @param {?} schemaVerticalGridRepository
     */
    constructor(schemaVerticalGridRepository) {
        this.schemaVerticalGridRepository = schemaVerticalGridRepository;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return SchemaVerticalGridSetEvent;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('SchemaVerticalGridSetEvent')) {
            this.schemaVerticalGridRepository.next(event.getAggregateId(), event.getVerticalGrid());
        }
    }
}
SchemaVerticalGridSetEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaVerticalGridSetEventHandler.ctorParameters = () => [
    { type: SchemaVerticalGridRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaVerticalGridSetEventHandler.prototype.schemaVerticalGridRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLnZlcnRpY2FsLWdyaWQtc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInNjaGVtYS9jb3JlL2RvbWFpbi1yZWFkL3ZlcnRpY2FsLWdyaWQvc2NoZW1hLnZlcnRpY2FsLWdyaWQtc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFakYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFJdkcsTUFBTSxPQUFPLGlDQUFpQzs7OztJQUU3QyxZQUFvQiw0QkFBMEQ7UUFBMUQsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtJQUM5RSxDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8sMEJBQTBCLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBaUM7UUFFdkMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLDRCQUE0QixDQUFDLEVBQUU7WUFDdEQsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUUsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7U0FDeEY7SUFFRixDQUFDOzs7WUFoQkQsVUFBVTs7OztZQUxGLDRCQUE0Qjs7Ozs7OztJQVF4Qix5RUFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciwgRG9tYWluRXZlbnRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hVmVydGljYWxHcmlkUmVwb3NpdG9yeSB9IGZyb20gJy4vc2NoZW1hLnZlcnRpY2FsLWdyaWQucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uLy4uL2FwaS9zY2hlbWEuaWQnO1xuaW1wb3J0IHsgU2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vZ3JpZC92ZXJ0aWNhbC9zY2hlbWEtdmVydGljYWwtZ3JpZC1zZXQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8U2NoZW1hSWQsIFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzY2hlbWFWZXJ0aWNhbEdyaWRSZXBvc2l0b3J5OiBTY2hlbWFWZXJ0aWNhbEdyaWRSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRmb3JFdmVudCgpOiBEb21haW5FdmVudFR5cGU8U2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnQ+IHtcblx0XHRyZXR1cm4gU2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnQ7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnU2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnQnKSkge1xuXHRcdFx0dGhpcy5zY2hlbWFWZXJ0aWNhbEdyaWRSZXBvc2l0b3J5Lm5leHQoZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgZXZlbnQuZ2V0VmVydGljYWxHcmlkKCkpO1xuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==