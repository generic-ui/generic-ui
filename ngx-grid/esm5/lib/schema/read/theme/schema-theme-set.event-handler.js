/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { SchemaThemeRepository } from './schema.theme.repository';
import { SchemaThemeSetEvent } from '../../domain/theme/schema-theme-set.event';
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
        if (event instanceof SchemaThemeSetEvent) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLXRoZW1lLXNldC5ldmVudC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc2NoZW1hL3JlYWQvdGhlbWUvc2NoZW1hLXRoZW1lLXNldC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUdoRjtJQUNnRCxzREFBNEI7SUFFM0Usb0NBQW9CLGVBQXNDO1FBQTFELFlBQ0MsaUJBQU8sU0FDUDtRQUZtQixxQkFBZSxHQUFmLGVBQWUsQ0FBdUI7O0lBRTFELENBQUM7Ozs7O0lBRUQsMkNBQU07Ozs7SUFBTixVQUFPLEtBQTBCO1FBRWhDLElBQUksS0FBSyxZQUFZLG1CQUFtQixFQUFFO1lBQ3pDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztTQUN4RTtJQUVGLENBQUM7O2dCQWJELFVBQVU7Ozs7Z0JBTEYscUJBQXFCOztJQW9COUIsaUNBQUM7Q0FBQSxBQWZELENBQ2dELGtCQUFrQixHQWNqRTtTQWRZLDBCQUEwQjs7Ozs7O0lBRTFCLHFEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hVGhlbWVSZXBvc2l0b3J5IH0gZnJvbSAnLi9zY2hlbWEudGhlbWUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEuaWQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWVTZXRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi90aGVtZS9zY2hlbWEtdGhlbWUtc2V0LmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NoZW1hVGhlbWVTZXRFdmVudEhhbmRsZXIgZXh0ZW5kcyBEb21haW5FdmVudEhhbmRsZXI8U2NoZW1hSWQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHRoZW1lUmVwb3NpdG9yeTogU2NoZW1hVGhlbWVSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGhhbmRsZShldmVudDogU2NoZW1hVGhlbWVTZXRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50IGluc3RhbmNlb2YgU2NoZW1hVGhlbWVTZXRFdmVudCkge1xuXHRcdFx0dGhpcy50aGVtZVJlcG9zaXRvcnkuc2V0VGhlbWUoZXZlbnQuZ2V0VGhlbWUoKSwgZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cdFx0fVxuXG5cdH1cblxufVxuIl19