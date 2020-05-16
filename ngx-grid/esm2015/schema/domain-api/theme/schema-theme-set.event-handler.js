/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { SchemaThemeRepository } from './schema.theme.repository';
export class SchemaThemeSetEventHandler extends DomainEventHandler {
    /**
     * @param {?} themeRepository
     */
    constructor(themeRepository) {
        super();
        this.themeRepository = themeRepository;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('SchemaThemeSetEvent')) {
            this.themeRepository.setTheme(event.getTheme(), event.getAggregateId());
        }
    }
}
SchemaThemeSetEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaThemeSetEventHandler.ctorParameters = () => [
    { type: SchemaThemeRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaThemeSetEventHandler.prototype.themeRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLXRoZW1lLXNldC5ldmVudC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzY2hlbWEvZG9tYWluLWFwaS90aGVtZS9zY2hlbWEtdGhlbWUtc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFNbEUsTUFBTSxPQUFPLDBCQUEyQixTQUFRLGtCQUFpRDs7OztJQUVoRyxZQUFvQixlQUFzQztRQUN6RCxLQUFLLEVBQUUsQ0FBQztRQURXLG9CQUFlLEdBQWYsZUFBZSxDQUF1QjtJQUUxRCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUEwQjtRQUVoQyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsRUFBRTtZQUMvQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7U0FDeEU7SUFFRixDQUFDOzs7WUFiRCxVQUFVOzs7O1lBTEYscUJBQXFCOzs7Ozs7O0lBUWpCLHFEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hVGhlbWVSZXBvc2l0b3J5IH0gZnJvbSAnLi9zY2hlbWEudGhlbWUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEuaWQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWVTZXRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi90aGVtZS9zY2hlbWEtdGhlbWUtc2V0LmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NoZW1hVGhlbWVTZXRFdmVudEhhbmRsZXIgZXh0ZW5kcyBEb21haW5FdmVudEhhbmRsZXI8U2NoZW1hSWQsIFNjaGVtYVRoZW1lU2V0RXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHRoZW1lUmVwb3NpdG9yeTogU2NoZW1hVGhlbWVSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGhhbmRsZShldmVudDogU2NoZW1hVGhlbWVTZXRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ1NjaGVtYVRoZW1lU2V0RXZlbnQnKSkge1xuXHRcdFx0dGhpcy50aGVtZVJlcG9zaXRvcnkuc2V0VGhlbWUoZXZlbnQuZ2V0VGhlbWUoKSwgZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cdFx0fVxuXG5cdH1cblxufVxuIl19