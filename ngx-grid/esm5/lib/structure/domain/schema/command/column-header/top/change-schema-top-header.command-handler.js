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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXNjaGVtYS10b3AtaGVhZGVyLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc2NoZW1hL2NvbW1hbmQvY29sdW1uLWhlYWRlci90b3AvY2hhbmdlLXNjaGVtYS10b3AtaGVhZGVyLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxvQkFBb0IsRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQztBQUMzRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUM1RyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUloRjtJQUN5RCwrREFBa0M7SUFFMUYsNkNBQW9CLDRCQUEwRCxFQUMzRSxvQkFBMEM7UUFEN0MsWUFFQyxrQkFBTSw0QkFBNEIsRUFDakMsMkJBQTJCLEVBQzNCLG9CQUFvQixDQUFDLFNBQ3RCO1FBTG1CLGtDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7O0lBSzlFLENBQUM7Ozs7O0lBRUQsb0RBQU07Ozs7SUFBTixVQUFPLE9BQXFDOztZQUVyQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU87O1lBQzlCLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVzs7WUFFNUIsU0FBUyxHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDOztZQUN2RSxNQUFNLEdBQUcsU0FBUyxDQUFDLFNBQVMsRUFBRTtRQUUvQixNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTdCLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Z0JBckJELFVBQVU7Ozs7Z0JBTkYsNEJBQTRCO2dCQURaLG9CQUFvQjs7SUE4QjdDLDBDQUFDO0NBQUEsQUF2QkQsQ0FDeUQsY0FBYyxHQXNCdEU7U0F0QlksbUNBQW1DOzs7Ozs7SUFFbkMsMkVBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciwgRXhlY3V0ZVJlc3BvbnNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvY29tbWFuZC9zdHJ1Y3R1cmUtYWdncmVnYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ2hhbmdlU2NoZW1hVG9wSGVhZGVyQ29tbWFuZCB9IGZyb20gJy4vY2hhbmdlLXNjaGVtYS10b3AtaGVhZGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2NoZW1hVG9wSGVhZGVyQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi9zY2hlbWEtdG9wLWhlYWRlci1jaGFuZ2VkLmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9jb21tYW5kL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDaGFuZ2VTY2hlbWFUb3BIZWFkZXJDb21tYW5kSGFuZGxlciBleHRlbmRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZT4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeTogU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0ZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdFx0c3VwZXIoQ2hhbmdlU2NoZW1hVG9wSGVhZGVyQ29tbWFuZCxcblx0XHRcdFNjaGVtYVRvcEhlYWRlckNoYW5nZWRFdmVudCxcblx0XHRcdGRvbWFpbkV2ZW50UHVibGlzaGVyKTtcblx0fVxuXG5cdGhhbmRsZShjb21tYW5kOiBDaGFuZ2VTY2hlbWFUb3BIZWFkZXJDb21tYW5kKTogRXhlY3V0ZVJlc3BvbnNlIHwgT2JzZXJ2YWJsZTxFeGVjdXRlUmVzcG9uc2U+IHtcblxuXHRcdGNvbnN0IGVuYWJsZWQgPSBjb21tYW5kLmVuYWJsZWQsXG5cdFx0XHRzdHJ1Y3R1cmVJZCA9IGNvbW1hbmQuc3RydWN0dXJlSWQ7XG5cblx0XHRjb25zdCBzdHJ1Y3R1cmUgPSB0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuZ2V0QnlJZChzdHJ1Y3R1cmVJZCksXG5cdFx0XHRzY2hlbWEgPSBzdHJ1Y3R1cmUuZ2V0U2NoZW1hKCk7XG5cblx0XHRzY2hlbWEuc2V0SGVhZGVyVG9wKGVuYWJsZWQpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LnNhdmUoc3RydWN0dXJlKTtcblx0fVxuXG59XG4iXX0=