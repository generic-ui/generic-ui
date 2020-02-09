/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../structure/command/structure-aggregate.repository';
import { SetSchemaThemeCommand } from './set-schema-theme.command';
import { SchemaThemeSetEvent } from './schema-theme-set.event';
var SetSchemaThemeCommandHandler = /** @class */ (function (_super) {
    tslib_1.__extends(SetSchemaThemeCommandHandler, _super);
    function SetSchemaThemeCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, SetSchemaThemeCommand, SchemaThemeSetEvent, domainEventPublisher) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    SetSchemaThemeCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var theme = command.theme;
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        /** @type {?} */
        var schema = structure.getSchema();
        schema.setTheme(theme);
        this.structureAggregateRepository.save(structure);
    };
    SetSchemaThemeCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetSchemaThemeCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return SetSchemaThemeCommandHandler;
}(CommandHandler));
export { SetSchemaThemeCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSchemaThemeCommandHandler.prototype.structureAggregateRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNjaGVtYS10aGVtZS5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3NjaGVtYS9jb21tYW5kL3RoZW1lL3NldC1zY2hlbWEtdGhlbWUuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsY0FBYyxFQUFFLG9CQUFvQixFQUFtQixNQUFNLG9CQUFvQixDQUFDO0FBQzNGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRS9EO0lBQ2tELHdEQUFjO0lBRS9ELHNDQUFvQiw0QkFBMEQsRUFDM0Usb0JBQTBDO1FBRDdDLFlBRUMsa0JBQU0scUJBQXFCLEVBQzFCLG1CQUFtQixFQUNuQixvQkFBb0IsQ0FBQyxTQUN0QjtRQUxtQixrQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCOztJQUs5RSxDQUFDOzs7OztJQUVELDZDQUFNOzs7O0lBQU4sVUFBTyxPQUE4Qjs7WUFFOUIsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLOztZQUMxQixXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVc7O1lBRTVCLFNBQVMsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQzs7WUFDdkUsTUFBTSxHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUU7UUFFL0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV2QixJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7O2dCQXJCRCxVQUFVOzs7O2dCQUpGLDRCQUE0QjtnQkFEWixvQkFBb0I7O0lBNEI3QyxtQ0FBQztDQUFBLEFBdkJELENBQ2tELGNBQWMsR0FzQi9EO1NBdEJZLDRCQUE0Qjs7Ozs7O0lBRTVCLG9FQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyLCBFeGVjdXRlUmVzcG9uc2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9jb21tYW5kL3N0cnVjdHVyZS1hZ2dyZWdhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTZXRTY2hlbWFUaGVtZUNvbW1hbmQgfSBmcm9tICcuL3NldC1zY2hlbWEtdGhlbWUuY29tbWFuZCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVNldEV2ZW50IH0gZnJvbSAnLi9zY2hlbWEtdGhlbWUtc2V0LmV2ZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNldFNjaGVtYVRoZW1lQ29tbWFuZEhhbmRsZXIgZXh0ZW5kcyBDb21tYW5kSGFuZGxlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0XHRzdXBlcihTZXRTY2hlbWFUaGVtZUNvbW1hbmQsXG5cdFx0XHRTY2hlbWFUaGVtZVNldEV2ZW50LFxuXHRcdFx0ZG9tYWluRXZlbnRQdWJsaXNoZXIpO1xuXHR9XG5cblx0aGFuZGxlKGNvbW1hbmQ6IFNldFNjaGVtYVRoZW1lQ29tbWFuZCk6IEV4ZWN1dGVSZXNwb25zZSB8IE9ic2VydmFibGU8RXhlY3V0ZVJlc3BvbnNlPiB7XG5cblx0XHRjb25zdCB0aGVtZSA9IGNvbW1hbmQudGhlbWUsXG5cdFx0XHRzdHJ1Y3R1cmVJZCA9IGNvbW1hbmQuc3RydWN0dXJlSWQ7XG5cblx0XHRjb25zdCBzdHJ1Y3R1cmUgPSB0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuZ2V0QnlJZChzdHJ1Y3R1cmVJZCksXG5cdFx0XHRzY2hlbWEgPSBzdHJ1Y3R1cmUuZ2V0U2NoZW1hKCk7XG5cblx0XHRzY2hlbWEuc2V0VGhlbWUodGhlbWUpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LnNhdmUoc3RydWN0dXJlKTtcblx0fVxuXG59XG4iXX0=