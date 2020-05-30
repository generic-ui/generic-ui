/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SchemaThemeRepository } from './schema.theme.repository';
import { SchemaThemeSetEvent } from '../../domain/theme/schema-theme-set.event';
export class SchemaThemeSetEventHandler {
    /**
     * @param {?} themeRepository
     */
    constructor(themeRepository) {
        this.themeRepository = themeRepository;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return SchemaThemeSetEvent;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('SchemaThemeSetEvent')) {
            this.themeRepository.next(event.getAggregateId(), event.getTheme());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLXRoZW1lLXNldC5ldmVudC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzY2hlbWEvZG9tYWluLWFwaS90aGVtZS9zY2hlbWEtdGhlbWUtc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFJakQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFJaEYsTUFBTSxPQUFPLDBCQUEwQjs7OztJQUV0QyxZQUFvQixlQUFzQztRQUF0QyxvQkFBZSxHQUFmLGVBQWUsQ0FBdUI7SUFDMUQsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLG1CQUFtQixDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQTBCO1FBRWhDLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO1lBQy9DLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUNwRTtJQUVGLENBQUM7OztZQWhCRCxVQUFVOzs7O1lBTEYscUJBQXFCOzs7Ozs7O0lBUWpCLHFEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hVGhlbWVSZXBvc2l0b3J5IH0gZnJvbSAnLi9zY2hlbWEudGhlbWUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEuaWQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWVTZXRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi90aGVtZS9zY2hlbWEtdGhlbWUtc2V0LmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NoZW1hVGhlbWVTZXRFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8U2NoZW1hSWQsIFNjaGVtYVRoZW1lU2V0RXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHRoZW1lUmVwb3NpdG9yeTogU2NoZW1hVGhlbWVSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRmb3JFdmVudCgpOiBUeXBlPFNjaGVtYVRoZW1lU2V0RXZlbnQ+IHtcblx0XHRyZXR1cm4gU2NoZW1hVGhlbWVTZXRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShldmVudDogU2NoZW1hVGhlbWVTZXRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ1NjaGVtYVRoZW1lU2V0RXZlbnQnKSkge1xuXHRcdFx0dGhpcy50aGVtZVJlcG9zaXRvcnkubmV4dChldmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBldmVudC5nZXRUaGVtZSgpKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=