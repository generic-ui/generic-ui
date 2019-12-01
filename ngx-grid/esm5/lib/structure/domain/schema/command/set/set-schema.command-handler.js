/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../structure/command/structure-aggregate.repository';
import { SetSchemaCommand } from './set-schema.command';
import { SchemaSetEvent } from './schema-set.event';
var SetSchemaCommandHandler = /** @class */ (function (_super) {
    tslib_1.__extends(SetSchemaCommandHandler, _super);
    function SetSchemaCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, SetSchemaCommand, SchemaSetEvent, domainEventPublisher) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    SetSchemaCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var height = command.height;
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        structure.setHeight(height);
        this.structureAggregateRepository.save(structure);
    };
    SetSchemaCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetSchemaCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return SetSchemaCommandHandler;
}(CommandHandler));
export { SetSchemaCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSchemaCommandHandler.prototype.structureAggregateRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNjaGVtYS5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3NjaGVtYS9jb21tYW5kL3NldC9zZXQtc2NoZW1hLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxvQkFBb0IsRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQztBQUMzRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHcEQ7SUFDNkMsbURBQWM7SUFFMUQsaUNBQW9CLDRCQUEwRCxFQUMzRSxvQkFBMEM7UUFEN0MsWUFFQyxrQkFBTSxnQkFBZ0IsRUFDckIsY0FBYyxFQUNkLG9CQUFvQixDQUFDLFNBQ3RCO1FBTG1CLGtDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7O0lBSzlFLENBQUM7Ozs7O0lBRUQsd0NBQU07Ozs7SUFBTixVQUFPLE9BQXlCOztZQUV6QixNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU07O1lBQzVCLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVzs7WUFFNUIsU0FBUyxHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBRXhFLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFNUIsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuRCxDQUFDOztnQkFwQkQsVUFBVTs7OztnQkFMRiw0QkFBNEI7Z0JBRFosb0JBQW9COztJQTRCN0MsOEJBQUM7Q0FBQSxBQXRCRCxDQUM2QyxjQUFjLEdBcUIxRDtTQXJCWSx1QkFBdUI7Ozs7OztJQUV2QiwrREFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciwgRXhlY3V0ZVJlc3BvbnNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvY29tbWFuZC9zdHJ1Y3R1cmUtYWdncmVnYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2V0U2NoZW1hQ29tbWFuZCB9IGZyb20gJy4vc2V0LXNjaGVtYS5jb21tYW5kJztcbmltcG9ydCB7IFNjaGVtYVNldEV2ZW50IH0gZnJvbSAnLi9zY2hlbWEtc2V0LmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2V0U2NoZW1hQ29tbWFuZEhhbmRsZXIgZXh0ZW5kcyBDb21tYW5kSGFuZGxlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0XHRzdXBlcihTZXRTY2hlbWFDb21tYW5kLFxuXHRcdFx0U2NoZW1hU2V0RXZlbnQsXG5cdFx0XHRkb21haW5FdmVudFB1Ymxpc2hlcik7XG5cdH1cblxuXHRoYW5kbGUoY29tbWFuZDogU2V0U2NoZW1hQ29tbWFuZCk6IEV4ZWN1dGVSZXNwb25zZSB8IE9ic2VydmFibGU8RXhlY3V0ZVJlc3BvbnNlPiB7XG5cblx0XHRjb25zdCBoZWlnaHQgPSBjb21tYW5kLmhlaWdodCxcblx0XHRcdHN0cnVjdHVyZUlkID0gY29tbWFuZC5zdHJ1Y3R1cmVJZDtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZSA9IHRoaXMuc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeS5nZXRCeUlkKHN0cnVjdHVyZUlkKTtcblxuXHRcdHN0cnVjdHVyZS5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeS5zYXZlKHN0cnVjdHVyZSk7XG5cdH1cblxufVxuIl19