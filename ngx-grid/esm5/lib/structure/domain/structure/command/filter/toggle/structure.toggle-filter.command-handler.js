/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { StructureToggleFilterCommand } from './structure.toggle-filter.command';
import { StructureFilterToggledEvent } from './structure.filter-toggled.event';
var StructureToggleFilterCommandHandler = /** @class */ (function (_super) {
    tslib_1.__extends(StructureToggleFilterCommandHandler, _super);
    function StructureToggleFilterCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, StructureToggleFilterCommand) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        _this.domainEventPublisher = domainEventPublisher;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    StructureToggleFilterCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var fieldId = command.fieldId;
        /** @type {?} */
        var externalFieldId = command.externalFilterId;
        /** @type {?} */
        var filterValue = command.filterValue;
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        structure.toggleFilter(fieldId, externalFieldId, filterValue);
        this.structureAggregateRepository.save(structure);
        this.domainEventPublisher.publish(new StructureFilterToggledEvent(structureId));
    };
    StructureToggleFilterCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureToggleFilterCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return StructureToggleFilterCommandHandler;
}(CommandHandler));
export { StructureToggleFilterCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureToggleFilterCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    StructureToggleFilterCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnRvZ2dsZS1maWx0ZXIuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWx0ZXIvdG9nZ2xlL3N0cnVjdHVyZS50b2dnbGUtZmlsdGVyLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxvQkFBb0IsRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVqRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUkvRTtJQUN5RCwrREFBYztJQUV0RSw2Q0FBNkIsNEJBQTBELEVBQzVFLG9CQUEwQztRQURyRCxZQUVDLGtCQUFNLDRCQUE0QixDQUFDLFNBQ25DO1FBSDRCLGtDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7UUFDNUUsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjs7SUFFckQsQ0FBQzs7Ozs7SUFFRCxvREFBTTs7OztJQUFOLFVBQU8sT0FBcUM7O1lBRXJDLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVzs7WUFDdEMsT0FBTyxHQUFZLE9BQU8sQ0FBQyxPQUFPOztZQUNsQyxlQUFlLEdBQVcsT0FBTyxDQUFDLGdCQUFnQjs7WUFDbEQsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXOztZQUU1QixTQUFTLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFFeEUsU0FBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRTlELElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLDJCQUEyQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDakYsQ0FBQzs7Z0JBdEJELFVBQVU7Ozs7Z0JBUEYsNEJBQTRCO2dCQUZaLG9CQUFvQjs7SUFpQzdDLDBDQUFDO0NBQUEsQUF4QkQsQ0FDeUQsY0FBYyxHQXVCdEU7U0F2QlksbUNBQW1DOzs7Ozs7SUFFbkMsMkVBQTJFOzs7OztJQUNwRixtRUFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciwgRXhlY3V0ZVJlc3BvbnNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS1hZ2dyZWdhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUb2dnbGVGaWx0ZXJDb21tYW5kIH0gZnJvbSAnLi9zdHJ1Y3R1cmUudG9nZ2xlLWZpbHRlci5jb21tYW5kJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi9maWVsZC9kYXRhLXR5cGUvZmllbGQuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRmlsdGVyVG9nZ2xlZEV2ZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuZmlsdGVyLXRvZ2dsZWQuZXZlbnQnO1xuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVRvZ2dsZUZpbHRlckNvbW1hbmRIYW5kbGVyIGV4dGVuZHMgQ29tbWFuZEhhbmRsZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeTogU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0XHRzdXBlcihTdHJ1Y3R1cmVUb2dnbGVGaWx0ZXJDb21tYW5kKTtcblx0fVxuXG5cdGhhbmRsZShjb21tYW5kOiBTdHJ1Y3R1cmVUb2dnbGVGaWx0ZXJDb21tYW5kKTogRXhlY3V0ZVJlc3BvbnNlIHwgT2JzZXJ2YWJsZTxFeGVjdXRlUmVzcG9uc2U+IHtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZUlkID0gY29tbWFuZC5zdHJ1Y3R1cmVJZCxcblx0XHRcdGZpZWxkSWQ6IEZpZWxkSWQgPSBjb21tYW5kLmZpZWxkSWQsXG5cdFx0XHRleHRlcm5hbEZpZWxkSWQ6IHN0cmluZyA9IGNvbW1hbmQuZXh0ZXJuYWxGaWx0ZXJJZCxcblx0XHRcdGZpbHRlclZhbHVlID0gY29tbWFuZC5maWx0ZXJWYWx1ZTtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZSA9IHRoaXMuc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeS5nZXRCeUlkKHN0cnVjdHVyZUlkKTtcblxuXHRcdHN0cnVjdHVyZS50b2dnbGVGaWx0ZXIoZmllbGRJZCwgZXh0ZXJuYWxGaWVsZElkLCBmaWx0ZXJWYWx1ZSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuc2F2ZShzdHJ1Y3R1cmUpO1xuXG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBTdHJ1Y3R1cmVGaWx0ZXJUb2dnbGVkRXZlbnQoc3RydWN0dXJlSWQpKTtcblx0fVxuXG59XG4iXX0=