/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SchemaThemeRepository } from './schema.theme.repository';
import { SchemaThemeSetEvent } from '../../domain/theme/schema-theme-set.event';
var SchemaThemeSetEventHandler = /** @class */ (function () {
    function SchemaThemeSetEventHandler(themeRepository) {
        this.themeRepository = themeRepository;
    }
    /**
     * @return {?}
     */
    SchemaThemeSetEventHandler.prototype.forEvent = /**
     * @return {?}
     */
    function () {
        return SchemaThemeSetEvent;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SchemaThemeSetEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.ofMessageType('SchemaThemeSetEvent')) {
            this.themeRepository.next(event.getAggregateId(), event.getTheme());
        }
    };
    SchemaThemeSetEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SchemaThemeSetEventHandler.ctorParameters = function () { return [
        { type: SchemaThemeRepository }
    ]; };
    return SchemaThemeSetEventHandler;
}());
export { SchemaThemeSetEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaThemeSetEventHandler.prototype.themeRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLXRoZW1lLXNldC5ldmVudC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzY2hlbWEvY29yZS9kb21haW4tcmVhZC90aGVtZS9zY2hlbWEtdGhlbWUtc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFHaEY7SUFHQyxvQ0FBb0IsZUFBc0M7UUFBdEMsb0JBQWUsR0FBZixlQUFlLENBQXVCO0lBQzFELENBQUM7Ozs7SUFFRCw2Q0FBUTs7O0lBQVI7UUFDQyxPQUFPLG1CQUFtQixDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsMkNBQU07Ozs7SUFBTixVQUFPLEtBQTBCO1FBRWhDLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO1lBQy9DLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUNwRTtJQUVGLENBQUM7O2dCQWhCRCxVQUFVOzs7O2dCQUxGLHFCQUFxQjs7SUF1QjlCLGlDQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FqQlksMEJBQTBCOzs7Ozs7SUFFMUIscURBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIsIERvbWFpbkV2ZW50VHlwZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYVRoZW1lUmVwb3NpdG9yeSB9IGZyb20gJy4vc2NoZW1hLnRoZW1lLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuLi8uLi9hcGkvc2NoZW1hLmlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lLXNldC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjaGVtYVRoZW1lU2V0RXZlbnRIYW5kbGVyIGltcGxlbWVudHMgRG9tYWluRXZlbnRIYW5kbGVyPFNjaGVtYUlkLCBTY2hlbWFUaGVtZVNldEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSB0aGVtZVJlcG9zaXRvcnk6IFNjaGVtYVRoZW1lUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0Zm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPFNjaGVtYVRoZW1lU2V0RXZlbnQ+IHtcblx0XHRyZXR1cm4gU2NoZW1hVGhlbWVTZXRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShldmVudDogU2NoZW1hVGhlbWVTZXRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ1NjaGVtYVRoZW1lU2V0RXZlbnQnKSkge1xuXHRcdFx0dGhpcy50aGVtZVJlcG9zaXRvcnkubmV4dChldmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBldmVudC5nZXRUaGVtZSgpKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=