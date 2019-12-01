/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler } from '@generic-ui/hermes';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../structure/command/structure-aggregate.repository';
import { ChangeSchemaTopHeaderCommand } from './change-schema-top-header.command';
import { SchemaTopHeaderChangedEvent } from './schema-top-header-changed.event';
var ChangeSchemaTopHeaderCommandHandler = /** @class */ (function (_super) {
    tslib_1.__extends(ChangeSchemaTopHeaderCommandHandler, _super);
    function ChangeSchemaTopHeaderCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, ChangeSchemaTopHeaderCommand, SchemaTopHeaderChangedEvent, domainEventPublisher) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    ChangeSchemaTopHeaderCommandHandler.prototype.handle = /**
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
        schema.setHeaderTop(enabled);
        this.structureAggregateRepository.save(structure);
    };
    ChangeSchemaTopHeaderCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ChangeSchemaTopHeaderCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return ChangeSchemaTopHeaderCommandHandler;
}(CommandHandler));
export { ChangeSchemaTopHeaderCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ChangeSchemaTopHeaderCommandHandler.prototype.structureAggregateRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXNjaGVtYS10b3AtaGVhZGVyLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc2NoZW1hL2NvbW1hbmQvY29sdW1uLWhlYWRlci90b3AvY2hhbmdlLXNjaGVtYS10b3AtaGVhZGVyLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTFELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQzVHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBR2hGO0lBQ3lELCtEQUFjO0lBRXRFLDZDQUFvQiw0QkFBMEQsRUFDM0Usb0JBQTBDO1FBRDdDLFlBRUMsa0JBQU0sNEJBQTRCLEVBQ2pDLDJCQUEyQixFQUMzQixvQkFBb0IsQ0FBQyxTQUN0QjtRQUxtQixrQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCOztJQUs5RSxDQUFDOzs7OztJQUVELG9EQUFNOzs7O0lBQU4sVUFBTyxPQUFxQzs7WUFFckMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPOztZQUM5QixXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVc7O1lBRTVCLFNBQVMsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQzs7WUFDdkUsTUFBTSxHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUU7UUFFL0IsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU3QixJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7O2dCQXJCRCxVQUFVOzs7O2dCQUxGLDRCQUE0QjtnQkFGNUIsb0JBQW9COztJQThCN0IsMENBQUM7Q0FBQSxBQXZCRCxDQUN5RCxjQUFjLEdBc0J0RTtTQXRCWSxtQ0FBbUM7Ozs7OztJQUVuQywyRUFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgRXhlY3V0ZVJlc3BvbnNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvY29tbWFuZC9zdHJ1Y3R1cmUtYWdncmVnYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ2hhbmdlU2NoZW1hVG9wSGVhZGVyQ29tbWFuZCB9IGZyb20gJy4vY2hhbmdlLXNjaGVtYS10b3AtaGVhZGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2NoZW1hVG9wSGVhZGVyQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi9zY2hlbWEtdG9wLWhlYWRlci1jaGFuZ2VkLmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2hhbmdlU2NoZW1hVG9wSGVhZGVyQ29tbWFuZEhhbmRsZXIgZXh0ZW5kcyBDb21tYW5kSGFuZGxlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0XHRzdXBlcihDaGFuZ2VTY2hlbWFUb3BIZWFkZXJDb21tYW5kLFxuXHRcdFx0U2NoZW1hVG9wSGVhZGVyQ2hhbmdlZEV2ZW50LFxuXHRcdFx0ZG9tYWluRXZlbnRQdWJsaXNoZXIpO1xuXHR9XG5cblx0aGFuZGxlKGNvbW1hbmQ6IENoYW5nZVNjaGVtYVRvcEhlYWRlckNvbW1hbmQpOiBFeGVjdXRlUmVzcG9uc2UgfCBPYnNlcnZhYmxlPEV4ZWN1dGVSZXNwb25zZT4ge1xuXG5cdFx0Y29uc3QgZW5hYmxlZCA9IGNvbW1hbmQuZW5hYmxlZCxcblx0XHRcdHN0cnVjdHVyZUlkID0gY29tbWFuZC5zdHJ1Y3R1cmVJZDtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZSA9IHRoaXMuc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeS5nZXRCeUlkKHN0cnVjdHVyZUlkKSxcblx0XHRcdHNjaGVtYSA9IHN0cnVjdHVyZS5nZXRTY2hlbWEoKTtcblxuXHRcdHNjaGVtYS5zZXRIZWFkZXJUb3AoZW5hYmxlZCk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuc2F2ZShzdHJ1Y3R1cmUpO1xuXHR9XG5cbn1cbiJdfQ==