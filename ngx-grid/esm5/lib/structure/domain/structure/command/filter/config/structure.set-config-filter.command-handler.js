/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { StructureSetConfigFilterCommand } from './structure.set-config-filter.command';
import { StructureConfigFilterSetEvent } from './structure.config-filter-set.event';
var StructureSetConfigFilterCommandHandler = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSetConfigFilterCommandHandler, _super);
    function StructureSetConfigFilterCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, StructureSetConfigFilterCommand) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        _this.domainEventPublisher = domainEventPublisher;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    StructureSetConfigFilterCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var filterConfig = command.getConfig();
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        structure.setFilterConfig(filterConfig);
        this.structureAggregateRepository.save(structure);
        this.domainEventPublisher.publish(new StructureConfigFilterSetEvent(structureId, filterConfig.enabled));
    };
    StructureSetConfigFilterCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSetConfigFilterCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return StructureSetConfigFilterCommandHandler;
}(CommandHandler));
export { StructureSetConfigFilterCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSetConfigFilterCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    StructureSetConfigFilterCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNldC1jb25maWctZmlsdGVyLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmlsdGVyL2NvbmZpZy9zdHJ1Y3R1cmUuc2V0LWNvbmZpZy1maWx0ZXIuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsY0FBYyxFQUFFLG9CQUFvQixFQUFtQixNQUFNLG9CQUFvQixDQUFDO0FBRTNGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBR3BGO0lBQzRELGtFQUFjO0lBRXpFLGdEQUE2Qiw0QkFBMEQsRUFDNUUsb0JBQTBDO1FBRHJELFlBRUMsa0JBQU0sK0JBQStCLENBQUMsU0FDdEM7UUFINEIsa0NBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtRQUM1RSwwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCOztJQUVyRCxDQUFDOzs7OztJQUVELHVEQUFNOzs7O0lBQU4sVUFBTyxPQUF3Qzs7WUFFeEMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXOztZQUN0QyxZQUFZLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRTs7WUFFN0IsU0FBUyxHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBRXhFLFNBQVMsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFeEMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksNkJBQTZCLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3pHLENBQUM7O2dCQXBCRCxVQUFVOzs7O2dCQUxGLDRCQUE0QjtnQkFGWixvQkFBb0I7O0lBNkI3Qyw2Q0FBQztDQUFBLEFBdEJELENBQzRELGNBQWMsR0FxQnpFO1NBckJZLHNDQUFzQzs7Ozs7O0lBRXRDLDhFQUEyRTs7Ozs7SUFDcEYsc0VBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIsIEV4ZWN1dGVSZXNwb25zZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUtYWdncmVnYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlU2V0Q29uZmlnRmlsdGVyQ29tbWFuZCB9IGZyb20gJy4vc3RydWN0dXJlLnNldC1jb25maWctZmlsdGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29uZmlnRmlsdGVyU2V0RXZlbnQgfSBmcm9tICcuL3N0cnVjdHVyZS5jb25maWctZmlsdGVyLXNldC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNldENvbmZpZ0ZpbHRlckNvbW1hbmRIYW5kbGVyIGV4dGVuZHMgQ29tbWFuZEhhbmRsZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeTogU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0XHRzdXBlcihTdHJ1Y3R1cmVTZXRDb25maWdGaWx0ZXJDb21tYW5kKTtcblx0fVxuXG5cdGhhbmRsZShjb21tYW5kOiBTdHJ1Y3R1cmVTZXRDb25maWdGaWx0ZXJDb21tYW5kKTogRXhlY3V0ZVJlc3BvbnNlIHwgT2JzZXJ2YWJsZTxFeGVjdXRlUmVzcG9uc2U+IHtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZUlkID0gY29tbWFuZC5zdHJ1Y3R1cmVJZCxcblx0XHRcdGZpbHRlckNvbmZpZyA9IGNvbW1hbmQuZ2V0Q29uZmlnKCk7XG5cblx0XHRjb25zdCBzdHJ1Y3R1cmUgPSB0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuZ2V0QnlJZChzdHJ1Y3R1cmVJZCk7XG5cblx0XHRzdHJ1Y3R1cmUuc2V0RmlsdGVyQ29uZmlnKGZpbHRlckNvbmZpZyk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuc2F2ZShzdHJ1Y3R1cmUpO1xuXG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBTdHJ1Y3R1cmVDb25maWdGaWx0ZXJTZXRFdmVudChzdHJ1Y3R1cmVJZCwgZmlsdGVyQ29uZmlnLmVuYWJsZWQpKTtcblx0fVxuXG59XG4iXX0=