/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../structure-aggregate.repository';
import { StructureAggregateFactory } from '../structure.aggregate-factory';
import { InitStructureCommand } from './init-structure.command';
import { StructureInitedEvent } from './structure-inited.event';
var InitStructureCommandHandler = /** @class */ (function (_super) {
    tslib_1.__extends(InitStructureCommandHandler, _super);
    function InitStructureCommandHandler(structureAggregateRepository, structureAggregateFactory, domainEventPublisher) {
        var _this = _super.call(this, InitStructureCommand, StructureInitedEvent, domainEventPublisher) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        _this.structureAggregateFactory = structureAggregateFactory;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    InitStructureCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var aggregateId = command.structureId;
        /** @type {?} */
        var structure = this.structureAggregateFactory.create(aggregateId);
        this.structureAggregateRepository.save(structure);
    };
    InitStructureCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InitStructureCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: StructureAggregateFactory },
        { type: DomainEventPublisher }
    ]; };
    return InitStructureCommandHandler;
}(CommandHandler));
export { InitStructureCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    InitStructureCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    InitStructureCommandHandler.prototype.structureAggregateFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC1zdHJ1Y3R1cmUuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9pbml0L2luaXQtc3RydWN0dXJlLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxvQkFBb0IsRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNqRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUloRTtJQUNpRCx1REFBYztJQUU5RCxxQ0FBNkIsNEJBQTBELEVBQ25FLHlCQUFvRCxFQUNyRSxvQkFBMEM7UUFGN0MsWUFHQyxrQkFBTSxvQkFBb0IsRUFDekIsb0JBQW9CLEVBQ3BCLG9CQUFvQixDQUFDLFNBQ3RCO1FBTjRCLGtDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7UUFDbkUsK0JBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjs7SUFLeEUsQ0FBQzs7Ozs7SUFFRCw0Q0FBTTs7OztJQUFOLFVBQU8sT0FBNkI7O1lBRTdCLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVzs7WUFFakMsU0FBUyxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBRXBFLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Z0JBbEJELFVBQVU7Ozs7Z0JBUEYsNEJBQTRCO2dCQUM1Qix5QkFBeUI7Z0JBSFQsb0JBQW9COztJQTZCN0Msa0NBQUM7Q0FBQSxBQXBCRCxDQUNpRCxjQUFjLEdBbUI5RDtTQW5CWSwyQkFBMkI7Ozs7OztJQUUzQixtRUFBMkU7Ozs7O0lBQ3BGLGdFQUFxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyLCBFeGVjdXRlUmVzcG9uc2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi9zdHJ1Y3R1cmUuYWdncmVnYXRlLWZhY3RvcnknO1xuaW1wb3J0IHsgSW5pdFN0cnVjdHVyZUNvbW1hbmQgfSBmcm9tICcuL2luaXQtc3RydWN0dXJlLmNvbW1hbmQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5pdGVkRXZlbnQgfSBmcm9tICcuL3N0cnVjdHVyZS1pbml0ZWQuZXZlbnQnO1xuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluaXRTdHJ1Y3R1cmVDb21tYW5kSGFuZGxlciBleHRlbmRzIENvbW1hbmRIYW5kbGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQWdncmVnYXRlRmFjdG9yeTogU3RydWN0dXJlQWdncmVnYXRlRmFjdG9yeSxcblx0XHRcdFx0ZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdFx0c3VwZXIoSW5pdFN0cnVjdHVyZUNvbW1hbmQsXG5cdFx0XHRTdHJ1Y3R1cmVJbml0ZWRFdmVudCxcblx0XHRcdGRvbWFpbkV2ZW50UHVibGlzaGVyKTtcblx0fVxuXG5cdGhhbmRsZShjb21tYW5kOiBJbml0U3RydWN0dXJlQ29tbWFuZCk6IEV4ZWN1dGVSZXNwb25zZSB8IE9ic2VydmFibGU8RXhlY3V0ZVJlc3BvbnNlPiB7XG5cblx0XHRjb25zdCBhZ2dyZWdhdGVJZCA9IGNvbW1hbmQuc3RydWN0dXJlSWQ7XG5cblx0XHRjb25zdCBzdHJ1Y3R1cmUgPSB0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3RvcnkuY3JlYXRlKGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeS5zYXZlKHN0cnVjdHVyZSk7XG5cdH1cblxufVxuIl19