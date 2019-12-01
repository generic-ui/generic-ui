/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../structure/command/structure-aggregate.repository';
import { SetSchemaHorizontalGridCommand } from './set-schema-horizontal-grid.command';
import { SchemaHorizontalGridSetEvent } from './schema-horizontal-grid-set.event';
var SetSchemaHorizontalGridCommandHandler = /** @class */ (function (_super) {
    tslib_1.__extends(SetSchemaHorizontalGridCommandHandler, _super);
    function SetSchemaHorizontalGridCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, SetSchemaHorizontalGridCommand, SchemaHorizontalGridSetEvent, domainEventPublisher) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    SetSchemaHorizontalGridCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var enabled = command.enabled;
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        /** @type {?} */
        var schema = structure.getSchema();
        schema.setHorizontalGrid(enabled);
        this.structureAggregateRepository.save(structure);
    };
    SetSchemaHorizontalGridCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetSchemaHorizontalGridCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return SetSchemaHorizontalGridCommandHandler;
}(CommandHandler));
export { SetSchemaHorizontalGridCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSchemaHorizontalGridCommandHandler.prototype.structureAggregateRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNjaGVtYS1ob3Jpem9udGFsLWdyaWQuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zY2hlbWEvY29tbWFuZC9ncmlkL2hvcml6b250YWwvc2V0LXNjaGVtYS1ob3Jpem9udGFsLWdyaWQuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsY0FBYyxFQUFFLG9CQUFvQixFQUFtQixNQUFNLG9CQUFvQixDQUFDO0FBRTNGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBRTVHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRWxGO0lBQzJELGlFQUFjO0lBRXhFLCtDQUFvQiw0QkFBMEQsRUFDM0Usb0JBQTBDO1FBRDdDLFlBRUMsa0JBQU0sOEJBQThCLEVBQ25DLDRCQUE0QixFQUM1QixvQkFBb0IsQ0FBQyxTQUN0QjtRQUxtQixrQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCOztJQUs5RSxDQUFDOzs7OztJQUVELHNEQUFNOzs7O0lBQU4sVUFBTyxPQUF1Qzs7WUFFdkMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPOztZQUM5QixXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVc7O1lBRTVCLFNBQVMsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQzs7WUFDdkUsTUFBTSxHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUU7UUFFL0IsTUFBTSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWxDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Z0JBckJELFVBQVU7Ozs7Z0JBTEYsNEJBQTRCO2dCQUZaLG9CQUFvQjs7SUE4QjdDLDRDQUFDO0NBQUEsQUF2QkQsQ0FDMkQsY0FBYyxHQXNCeEU7U0F0QlkscUNBQXFDOzs7Ozs7SUFFckMsNkVBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIsIEV4ZWN1dGVSZXNwb25zZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvY29tbWFuZC9zdHJ1Y3R1cmUtYWdncmVnYXRlLnJlcG9zaXRvcnknO1xuXG5pbXBvcnQgeyBTZXRTY2hlbWFIb3Jpem9udGFsR3JpZENvbW1hbmQgfSBmcm9tICcuL3NldC1zY2hlbWEtaG9yaXpvbnRhbC1ncmlkLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudCB9IGZyb20gJy4vc2NoZW1hLWhvcml6b250YWwtZ3JpZC1zZXQuZXZlbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2V0U2NoZW1hSG9yaXpvbnRhbEdyaWRDb21tYW5kSGFuZGxlciBleHRlbmRzIENvbW1hbmRIYW5kbGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHRcdHN1cGVyKFNldFNjaGVtYUhvcml6b250YWxHcmlkQ29tbWFuZCxcblx0XHRcdFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQsXG5cdFx0XHRkb21haW5FdmVudFB1Ymxpc2hlcik7XG5cdH1cblxuXHRoYW5kbGUoY29tbWFuZDogU2V0U2NoZW1hSG9yaXpvbnRhbEdyaWRDb21tYW5kKTogRXhlY3V0ZVJlc3BvbnNlIHwgT2JzZXJ2YWJsZTxFeGVjdXRlUmVzcG9uc2U+IHtcblxuXHRcdGNvbnN0IGVuYWJsZWQgPSBjb21tYW5kLmVuYWJsZWQsXG5cdFx0XHRzdHJ1Y3R1cmVJZCA9IGNvbW1hbmQuc3RydWN0dXJlSWQ7XG5cblx0XHRjb25zdCBzdHJ1Y3R1cmUgPSB0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuZ2V0QnlJZChzdHJ1Y3R1cmVJZCksXG5cdFx0XHRzY2hlbWEgPSBzdHJ1Y3R1cmUuZ2V0U2NoZW1hKCk7XG5cblx0XHRzY2hlbWEuc2V0SG9yaXpvbnRhbEdyaWQoZW5hYmxlZCk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuc2F2ZShzdHJ1Y3R1cmUpO1xuXHR9XG5cbn1cbiJdfQ==