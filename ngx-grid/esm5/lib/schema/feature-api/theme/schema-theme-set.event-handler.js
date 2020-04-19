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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLXRoZW1lLXNldC5ldmVudC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc2NoZW1hL2ZlYXR1cmUtYXBpL3RoZW1lL3NjaGVtYS10aGVtZS1zZXQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFHaEY7SUFDZ0Qsc0RBQTRCO0lBRTNFLG9DQUFvQixlQUFzQztRQUExRCxZQUNDLGlCQUFPLFNBQ1A7UUFGbUIscUJBQWUsR0FBZixlQUFlLENBQXVCOztJQUUxRCxDQUFDOzs7OztJQUVELDJDQUFNOzs7O0lBQU4sVUFBTyxLQUEwQjtRQUVoQyxJQUFJLEtBQUssWUFBWSxtQkFBbUIsRUFBRTtZQUN6QyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7U0FDeEU7SUFFRixDQUFDOztnQkFiRCxVQUFVOzs7O2dCQUxGLHFCQUFxQjs7SUFvQjlCLGlDQUFDO0NBQUEsQUFmRCxDQUNnRCxrQkFBa0IsR0FjakU7U0FkWSwwQkFBMEI7Ozs7OztJQUUxQixxREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYVRoZW1lUmVwb3NpdG9yeSB9IGZyb20gJy4vc2NoZW1hLnRoZW1lLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc2NoZW1hLmlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lLXNldC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjaGVtYVRoZW1lU2V0RXZlbnRIYW5kbGVyIGV4dGVuZHMgRG9tYWluRXZlbnRIYW5kbGVyPFNjaGVtYUlkPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSB0aGVtZVJlcG9zaXRvcnk6IFNjaGVtYVRoZW1lUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IFNjaGVtYVRoZW1lU2V0RXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudCBpbnN0YW5jZW9mIFNjaGVtYVRoZW1lU2V0RXZlbnQpIHtcblx0XHRcdHRoaXMudGhlbWVSZXBvc2l0b3J5LnNldFRoZW1lKGV2ZW50LmdldFRoZW1lKCksIGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==