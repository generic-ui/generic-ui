/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { StructureAggregateFactory } from '../../structure.aggregate-factory';
import { StructureSourceDomainEventPublisher } from '../../../../source/command/structure.source.domain-event.publisher';
import { StructureSetAggregationEnabledCommand } from './structure.set-aggregation-enabled.command';
import { StructureAggregationEnabledSetEvent } from './structure.aggregation-enabled-set.event';
var StructureSetAggregationEnabledCommandHandler = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSetAggregationEnabledCommandHandler, _super);
    function StructureSetAggregationEnabledCommandHandler(structureAggregateRepository, structureAggregateFactory, structureSourceDomainEventPublisher, domainEventPublisher) {
        var _this = _super.call(this, StructureSetAggregationEnabledCommand) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        _this.structureAggregateFactory = structureAggregateFactory;
        _this.structureSourceDomainEventPublisher = structureSourceDomainEventPublisher;
        _this.domainEventPublisher = domainEventPublisher;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    StructureSetAggregationEnabledCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var enabled = command.enabled;
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        /** @type {?} */
        var aggregateEvents = structure.setAggregationEnabled(enabled);
        this.structureAggregateRepository.save(structure);
        this.domainEventPublisher.publish(new StructureAggregationEnabledSetEvent(structureId, enabled));
        this.structureSourceDomainEventPublisher.publish(aggregateEvents);
    };
    StructureSetAggregationEnabledCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSetAggregationEnabledCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: StructureAggregateFactory },
        { type: StructureSourceDomainEventPublisher },
        { type: DomainEventPublisher }
    ]; };
    return StructureSetAggregationEnabledCommandHandler;
}(CommandHandler));
export { StructureSetAggregationEnabledCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSetAggregationEnabledCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    StructureSetAggregationEnabledCommandHandler.prototype.structureAggregateFactory;
    /**
     * @type {?}
     * @private
     */
    StructureSetAggregationEnabledCommandHandler.prototype.structureSourceDomainEventPublisher;
    /**
     * @type {?}
     * @private
     */
    StructureSetAggregationEnabledCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNldC1hZ2dyZWdhdGlvbi1lbmFibGVkLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvYWdncmVnYXRpb24vc2V0L3N0cnVjdHVyZS5zZXQtYWdncmVnYXRpb24tZW5hYmxlZC5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsb0JBQW9CLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFDM0YsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDOUUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDekgsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDcEcsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFHaEc7SUFDa0Usd0VBQWM7SUFFL0Usc0RBQTZCLDRCQUEwRCxFQUNuRSx5QkFBb0QsRUFDcEQsbUNBQXdFLEVBQ2pGLG9CQUEwQztRQUhyRCxZQUlDLGtCQUFNLHFDQUFxQyxDQUFDLFNBQzVDO1FBTDRCLGtDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7UUFDbkUsK0JBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQUNwRCx5Q0FBbUMsR0FBbkMsbUNBQW1DLENBQXFDO1FBQ2pGLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7O0lBRXJELENBQUM7Ozs7O0lBRUQsNkRBQU07Ozs7SUFBTixVQUFPLE9BQThDOztZQUU5QyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVc7O1lBQ3RDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTzs7WUFFcEIsU0FBUyxHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDOztZQUVsRSxlQUFlLEdBQUcsU0FBUyxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQztRQUVoRSxJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxtQ0FBbUMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNqRyxJQUFJLENBQUMsbUNBQW1DLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7O2dCQXZCRCxVQUFVOzs7O2dCQVBGLDRCQUE0QjtnQkFDNUIseUJBQXlCO2dCQUN6QixtQ0FBbUM7Z0JBSG5CLG9CQUFvQjs7SUFpQzdDLG1EQUFDO0NBQUEsQUF6QkQsQ0FDa0UsY0FBYyxHQXdCL0U7U0F4QlksNENBQTRDOzs7Ozs7SUFFNUMsb0ZBQTJFOzs7OztJQUNwRixpRkFBcUU7Ozs7O0lBQ3JFLDJGQUF5Rjs7Ozs7SUFDekYsNEVBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIsIEV4ZWN1dGVSZXNwb25zZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUuYWdncmVnYXRlLWZhY3RvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29tbWFuZC9zdHJ1Y3R1cmUuc291cmNlLmRvbWFpbi1ldmVudC5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlU2V0QWdncmVnYXRpb25FbmFibGVkQ29tbWFuZCB9IGZyb20gJy4vc3RydWN0dXJlLnNldC1hZ2dyZWdhdGlvbi1lbmFibGVkLmNvbW1hbmQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRpb25FbmFibGVkU2V0RXZlbnQgfSBmcm9tICcuL3N0cnVjdHVyZS5hZ2dyZWdhdGlvbi1lbmFibGVkLXNldC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNldEFnZ3JlZ2F0aW9uRW5hYmxlZENvbW1hbmRIYW5kbGVyIGV4dGVuZHMgQ29tbWFuZEhhbmRsZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeTogU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVBZ2dyZWdhdGVGYWN0b3J5OiBTdHJ1Y3R1cmVBZ2dyZWdhdGVGYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyOiBTdHJ1Y3R1cmVTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlcixcblx0XHRcdFx0cHJpdmF0ZSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0XHRzdXBlcihTdHJ1Y3R1cmVTZXRBZ2dyZWdhdGlvbkVuYWJsZWRDb21tYW5kKTtcblx0fVxuXG5cdGhhbmRsZShjb21tYW5kOiBTdHJ1Y3R1cmVTZXRBZ2dyZWdhdGlvbkVuYWJsZWRDb21tYW5kKTogRXhlY3V0ZVJlc3BvbnNlIHwgT2JzZXJ2YWJsZTxFeGVjdXRlUmVzcG9uc2U+IHtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZUlkID0gY29tbWFuZC5zdHJ1Y3R1cmVJZCxcblx0XHRcdGVuYWJsZWQgPSBjb21tYW5kLmVuYWJsZWQ7XG5cblx0XHRjb25zdCBzdHJ1Y3R1cmUgPSB0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuZ2V0QnlJZChzdHJ1Y3R1cmVJZCk7XG5cblx0XHRjb25zdCBhZ2dyZWdhdGVFdmVudHMgPSBzdHJ1Y3R1cmUuc2V0QWdncmVnYXRpb25FbmFibGVkKGVuYWJsZWQpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LnNhdmUoc3RydWN0dXJlKTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgU3RydWN0dXJlQWdncmVnYXRpb25FbmFibGVkU2V0RXZlbnQoc3RydWN0dXJlSWQsIGVuYWJsZWQpKTtcblx0XHR0aGlzLnN0cnVjdHVyZVNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2goYWdncmVnYXRlRXZlbnRzKTtcblx0fVxuXG59XG4iXX0=