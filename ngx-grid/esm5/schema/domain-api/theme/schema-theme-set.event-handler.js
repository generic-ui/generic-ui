/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { SchemaThemeRepository } from './schema.theme.repository';
var SchemaThemeSetEventHandler = /** @class */ (function (_super) {
    tslib_1.__extends(SchemaThemeSetEventHandler, _super);
    function SchemaThemeSetEventHandler(themeRepository) {
        var _this = _super.call(this) || this;
        _this.themeRepository = themeRepository;
        return _this;
    }
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
            this.themeRepository.setTheme(event.getTheme(), event.getAggregateId());
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
}(DomainEventHandler));
export { SchemaThemeSetEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaThemeSetEventHandler.prototype.themeRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLXRoZW1lLXNldC5ldmVudC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzY2hlbWEvZG9tYWluLWFwaS90aGVtZS9zY2hlbWEtdGhlbWUtc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBS2xFO0lBQ2dELHNEQUFpRDtJQUVoRyxvQ0FBb0IsZUFBc0M7UUFBMUQsWUFDQyxpQkFBTyxTQUNQO1FBRm1CLHFCQUFlLEdBQWYsZUFBZSxDQUF1Qjs7SUFFMUQsQ0FBQzs7Ozs7SUFFRCwyQ0FBTTs7OztJQUFOLFVBQU8sS0FBMEI7UUFFaEMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLEVBQUU7WUFDL0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1NBQ3hFO0lBRUYsQ0FBQzs7Z0JBYkQsVUFBVTs7OztnQkFMRixxQkFBcUI7O0lBb0I5QixpQ0FBQztDQUFBLEFBZkQsQ0FDZ0Qsa0JBQWtCLEdBY2pFO1NBZFksMEJBQTBCOzs7Ozs7SUFFMUIscURBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFUaGVtZVJlcG9zaXRvcnkgfSBmcm9tICcuL3NjaGVtYS50aGVtZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVNldEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL3RoZW1lL3NjaGVtYS10aGVtZS1zZXQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY2hlbWFUaGVtZVNldEV2ZW50SGFuZGxlciBleHRlbmRzIERvbWFpbkV2ZW50SGFuZGxlcjxTY2hlbWFJZCwgU2NoZW1hVGhlbWVTZXRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgdGhlbWVSZXBvc2l0b3J5OiBTY2hlbWFUaGVtZVJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBTY2hlbWFUaGVtZVNldEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnU2NoZW1hVGhlbWVTZXRFdmVudCcpKSB7XG5cdFx0XHR0aGlzLnRoZW1lUmVwb3NpdG9yeS5zZXRUaGVtZShldmVudC5nZXRUaGVtZSgpLCBldmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=