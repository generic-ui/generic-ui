/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../structure/command/structure-aggregate.repository';
import { ChangeSchemaBottomHeaderCommand } from './change-schema-bottom-header.command';
import { SchemaBottomHeaderChangedEvent } from './schema-bottom-header-changed.event';
var ChangeSchemaBottomHeaderCommandHandler = /** @class */ (function (_super) {
    tslib_1.__extends(ChangeSchemaBottomHeaderCommandHandler, _super);
    function ChangeSchemaBottomHeaderCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, ChangeSchemaBottomHeaderCommand, SchemaBottomHeaderChangedEvent, domainEventPublisher) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    ChangeSchemaBottomHeaderCommandHandler.prototype.handle = /**
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
        schema.setHeaderBottom(enabled);
        this.structureAggregateRepository.save(structure);
    };
    ChangeSchemaBottomHeaderCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ChangeSchemaBottomHeaderCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return ChangeSchemaBottomHeaderCommandHandler;
}(CommandHandler));
export { ChangeSchemaBottomHeaderCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ChangeSchemaBottomHeaderCommandHandler.prototype.structureAggregateRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXNjaGVtYS1ib3R0b20taGVhZGVyLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc2NoZW1hL2NvbW1hbmQvY29sdW1uLWhlYWRlci9ib3R0b20vY2hhbmdlLXNjaGVtYS1ib3R0b20taGVhZGVyLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxvQkFBb0IsRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQztBQUMzRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUM1RyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN4RixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUd0RjtJQUM0RCxrRUFBYztJQUV6RSxnREFBb0IsNEJBQTBELEVBQzNFLG9CQUEwQztRQUQ3QyxZQUVDLGtCQUFNLCtCQUErQixFQUNwQyw4QkFBOEIsRUFDOUIsb0JBQW9CLENBQUMsU0FDdEI7UUFMbUIsa0NBQTRCLEdBQTVCLDRCQUE0QixDQUE4Qjs7SUFLOUUsQ0FBQzs7Ozs7SUFFRCx1REFBTTs7OztJQUFOLFVBQU8sT0FBd0M7O1lBRXhDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTzs7WUFDOUIsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXOztZQUU1QixTQUFTLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7O1lBQ3ZFLE1BQU0sR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFO1FBRS9CLE1BQU0sQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFaEMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuRCxDQUFDOztnQkFyQkQsVUFBVTs7OztnQkFMRiw0QkFBNEI7Z0JBRFosb0JBQW9COztJQTZCN0MsNkNBQUM7Q0FBQSxBQXZCRCxDQUM0RCxjQUFjLEdBc0J6RTtTQXRCWSxzQ0FBc0M7Ozs7OztJQUV0Qyw4RUFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciwgRXhlY3V0ZVJlc3BvbnNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvY29tbWFuZC9zdHJ1Y3R1cmUtYWdncmVnYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ2hhbmdlU2NoZW1hQm90dG9tSGVhZGVyQ29tbWFuZCB9IGZyb20gJy4vY2hhbmdlLXNjaGVtYS1ib3R0b20taGVhZGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2NoZW1hQm90dG9tSGVhZGVyQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi9zY2hlbWEtYm90dG9tLWhlYWRlci1jaGFuZ2VkLmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2hhbmdlU2NoZW1hQm90dG9tSGVhZGVyQ29tbWFuZEhhbmRsZXIgZXh0ZW5kcyBDb21tYW5kSGFuZGxlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0XHRzdXBlcihDaGFuZ2VTY2hlbWFCb3R0b21IZWFkZXJDb21tYW5kLFxuXHRcdFx0U2NoZW1hQm90dG9tSGVhZGVyQ2hhbmdlZEV2ZW50LFxuXHRcdFx0ZG9tYWluRXZlbnRQdWJsaXNoZXIpO1xuXHR9XG5cblx0aGFuZGxlKGNvbW1hbmQ6IENoYW5nZVNjaGVtYUJvdHRvbUhlYWRlckNvbW1hbmQpOiBFeGVjdXRlUmVzcG9uc2UgfCBPYnNlcnZhYmxlPEV4ZWN1dGVSZXNwb25zZT4ge1xuXG5cdFx0Y29uc3QgZW5hYmxlZCA9IGNvbW1hbmQuZW5hYmxlZCxcblx0XHRcdHN0cnVjdHVyZUlkID0gY29tbWFuZC5zdHJ1Y3R1cmVJZDtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZSA9IHRoaXMuc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeS5nZXRCeUlkKHN0cnVjdHVyZUlkKSxcblx0XHRcdHNjaGVtYSA9IHN0cnVjdHVyZS5nZXRTY2hlbWEoKTtcblxuXHRcdHNjaGVtYS5zZXRIZWFkZXJCb3R0b20oZW5hYmxlZCk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuc2F2ZShzdHJ1Y3R1cmUpO1xuXHR9XG5cbn1cbiJdfQ==