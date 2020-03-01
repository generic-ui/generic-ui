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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNldC1hZ2dyZWdhdGlvbi1lbmFibGVkLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvYWdncmVnYXRpb24vc2V0L3N0cnVjdHVyZS5zZXQtYWdncmVnYXRpb24tZW5hYmxlZC5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsb0JBQW9CLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFDM0YsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDOUUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDekgsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDcEcsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFJaEc7SUFDa0Usd0VBQWtDO0lBRW5HLHNEQUE2Qiw0QkFBMEQsRUFDbkUseUJBQW9ELEVBQ3BELG1DQUF3RSxFQUNqRixvQkFBMEM7UUFIckQsWUFJQyxrQkFBTSxxQ0FBcUMsQ0FBQyxTQUM1QztRQUw0QixrQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBQ25FLCtCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDcEQseUNBQW1DLEdBQW5DLG1DQUFtQyxDQUFxQztRQUNqRiwwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCOztJQUVyRCxDQUFDOzs7OztJQUVELDZEQUFNOzs7O0lBQU4sVUFBTyxPQUE4Qzs7WUFFOUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXOztZQUN0QyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU87O1lBRXBCLFNBQVMsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQzs7WUFFbEUsZUFBZSxHQUFHLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUM7UUFFaEUsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksbUNBQW1DLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDakcsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNuRSxDQUFDOztnQkF2QkQsVUFBVTs7OztnQkFSRiw0QkFBNEI7Z0JBQzVCLHlCQUF5QjtnQkFDekIsbUNBQW1DO2dCQUhuQixvQkFBb0I7O0lBa0M3QyxtREFBQztDQUFBLEFBekJELENBQ2tFLGNBQWMsR0F3Qi9FO1NBeEJZLDRDQUE0Qzs7Ozs7O0lBRTVDLG9GQUEyRTs7Ozs7SUFDcEYsaUZBQXFFOzs7OztJQUNyRSwyRkFBeUY7Ozs7O0lBQ3pGLDRFQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyLCBFeGVjdXRlUmVzcG9uc2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS1hZ2dyZWdhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLmFnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvbW1hbmQvc3RydWN0dXJlLnNvdXJjZS5kb21haW4tZXZlbnQucHVibGlzaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVNldEFnZ3JlZ2F0aW9uRW5hYmxlZENvbW1hbmQgfSBmcm9tICcuL3N0cnVjdHVyZS5zZXQtYWdncmVnYXRpb24tZW5hYmxlZC5jb21tYW5kJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uRW5hYmxlZFNldEV2ZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuYWdncmVnYXRpb24tZW5hYmxlZC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNldEFnZ3JlZ2F0aW9uRW5hYmxlZENvbW1hbmRIYW5kbGVyIGV4dGVuZHMgQ29tbWFuZEhhbmRsZXI8U3RydWN0dXJlQWdncmVnYXRlPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3Rvcnk6IFN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlU291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXI6IFN0cnVjdHVyZVNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyLFxuXHRcdFx0XHRwcml2YXRlIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHRcdHN1cGVyKFN0cnVjdHVyZVNldEFnZ3JlZ2F0aW9uRW5hYmxlZENvbW1hbmQpO1xuXHR9XG5cblx0aGFuZGxlKGNvbW1hbmQ6IFN0cnVjdHVyZVNldEFnZ3JlZ2F0aW9uRW5hYmxlZENvbW1hbmQpOiBFeGVjdXRlUmVzcG9uc2UgfCBPYnNlcnZhYmxlPEV4ZWN1dGVSZXNwb25zZT4ge1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlSWQgPSBjb21tYW5kLnN0cnVjdHVyZUlkLFxuXHRcdFx0ZW5hYmxlZCA9IGNvbW1hbmQuZW5hYmxlZDtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZSA9IHRoaXMuc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeS5nZXRCeUlkKHN0cnVjdHVyZUlkKTtcblxuXHRcdGNvbnN0IGFnZ3JlZ2F0ZUV2ZW50cyA9IHN0cnVjdHVyZS5zZXRBZ2dyZWdhdGlvbkVuYWJsZWQoZW5hYmxlZCk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuc2F2ZShzdHJ1Y3R1cmUpO1xuXG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBTdHJ1Y3R1cmVBZ2dyZWdhdGlvbkVuYWJsZWRTZXRFdmVudChzdHJ1Y3R1cmVJZCwgZW5hYmxlZCkpO1xuXHRcdHRoaXMuc3RydWN0dXJlU291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChhZ2dyZWdhdGVFdmVudHMpO1xuXHR9XG5cbn1cbiJdfQ==