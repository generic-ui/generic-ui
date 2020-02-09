/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXNjaGVtYS10b3AtaGVhZGVyLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc2NoZW1hL2NvbW1hbmQvY29sdW1uLWhlYWRlci90b3AvY2hhbmdlLXNjaGVtYS10b3AtaGVhZGVyLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxvQkFBb0IsRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQztBQUMzRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUM1RyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUdoRjtJQUN5RCwrREFBYztJQUV0RSw2Q0FBb0IsNEJBQTBELEVBQzNFLG9CQUEwQztRQUQ3QyxZQUVDLGtCQUFNLDRCQUE0QixFQUNqQywyQkFBMkIsRUFDM0Isb0JBQW9CLENBQUMsU0FDdEI7UUFMbUIsa0NBQTRCLEdBQTVCLDRCQUE0QixDQUE4Qjs7SUFLOUUsQ0FBQzs7Ozs7SUFFRCxvREFBTTs7OztJQUFOLFVBQU8sT0FBcUM7O1lBRXJDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTzs7WUFDOUIsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXOztZQUU1QixTQUFTLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7O1lBQ3ZFLE1BQU0sR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFO1FBRS9CLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFN0IsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuRCxDQUFDOztnQkFyQkQsVUFBVTs7OztnQkFMRiw0QkFBNEI7Z0JBRFosb0JBQW9COztJQTZCN0MsMENBQUM7Q0FBQSxBQXZCRCxDQUN5RCxjQUFjLEdBc0J0RTtTQXRCWSxtQ0FBbUM7Ozs7OztJQUVuQywyRUFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyLCBFeGVjdXRlUmVzcG9uc2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9jb21tYW5kL3N0cnVjdHVyZS1hZ2dyZWdhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDaGFuZ2VTY2hlbWFUb3BIZWFkZXJDb21tYW5kIH0gZnJvbSAnLi9jaGFuZ2Utc2NoZW1hLXRvcC1oZWFkZXIuY29tbWFuZCc7XG5pbXBvcnQgeyBTY2hlbWFUb3BIZWFkZXJDaGFuZ2VkRXZlbnQgfSBmcm9tICcuL3NjaGVtYS10b3AtaGVhZGVyLWNoYW5nZWQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDaGFuZ2VTY2hlbWFUb3BIZWFkZXJDb21tYW5kSGFuZGxlciBleHRlbmRzIENvbW1hbmRIYW5kbGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHRcdHN1cGVyKENoYW5nZVNjaGVtYVRvcEhlYWRlckNvbW1hbmQsXG5cdFx0XHRTY2hlbWFUb3BIZWFkZXJDaGFuZ2VkRXZlbnQsXG5cdFx0XHRkb21haW5FdmVudFB1Ymxpc2hlcik7XG5cdH1cblxuXHRoYW5kbGUoY29tbWFuZDogQ2hhbmdlU2NoZW1hVG9wSGVhZGVyQ29tbWFuZCk6IEV4ZWN1dGVSZXNwb25zZSB8IE9ic2VydmFibGU8RXhlY3V0ZVJlc3BvbnNlPiB7XG5cblx0XHRjb25zdCBlbmFibGVkID0gY29tbWFuZC5lbmFibGVkLFxuXHRcdFx0c3RydWN0dXJlSWQgPSBjb21tYW5kLnN0cnVjdHVyZUlkO1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlID0gdGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LmdldEJ5SWQoc3RydWN0dXJlSWQpLFxuXHRcdFx0c2NoZW1hID0gc3RydWN0dXJlLmdldFNjaGVtYSgpO1xuXG5cdFx0c2NoZW1hLnNldEhlYWRlclRvcChlbmFibGVkKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeS5zYXZlKHN0cnVjdHVyZSk7XG5cdH1cblxufVxuIl19