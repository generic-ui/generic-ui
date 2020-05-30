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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLXRoZW1lLXNldC5ldmVudC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzY2hlbWEvZG9tYWluLWFwaS90aGVtZS9zY2hlbWEtdGhlbWUtc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFJakQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFHaEY7SUFHQyxvQ0FBb0IsZUFBc0M7UUFBdEMsb0JBQWUsR0FBZixlQUFlLENBQXVCO0lBQzFELENBQUM7Ozs7SUFFRCw2Q0FBUTs7O0lBQVI7UUFDQyxPQUFPLG1CQUFtQixDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsMkNBQU07Ozs7SUFBTixVQUFPLEtBQTBCO1FBRWhDLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO1lBQy9DLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUNwRTtJQUVGLENBQUM7O2dCQWhCRCxVQUFVOzs7O2dCQUxGLHFCQUFxQjs7SUF1QjlCLGlDQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FqQlksMEJBQTBCOzs7Ozs7SUFFMUIscURBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFUaGVtZVJlcG9zaXRvcnkgfSBmcm9tICcuL3NjaGVtYS50aGVtZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVNldEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL3RoZW1lL3NjaGVtYS10aGVtZS1zZXQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY2hlbWFUaGVtZVNldEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTY2hlbWFJZCwgU2NoZW1hVGhlbWVTZXRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgdGhlbWVSZXBvc2l0b3J5OiBTY2hlbWFUaGVtZVJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdGZvckV2ZW50KCk6IFR5cGU8U2NoZW1hVGhlbWVTZXRFdmVudD4ge1xuXHRcdHJldHVybiBTY2hlbWFUaGVtZVNldEV2ZW50O1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBTY2hlbWFUaGVtZVNldEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnU2NoZW1hVGhlbWVTZXRFdmVudCcpKSB7XG5cdFx0XHR0aGlzLnRoZW1lUmVwb3NpdG9yeS5uZXh0KGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIGV2ZW50LmdldFRoZW1lKCkpO1xuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==