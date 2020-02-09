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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC1zdHJ1Y3R1cmUuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9pbml0L2luaXQtc3RydWN0dXJlLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxvQkFBb0IsRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNqRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUdoRTtJQUNpRCx1REFBYztJQUU5RCxxQ0FBNkIsNEJBQTBELEVBQ25FLHlCQUFvRCxFQUNyRSxvQkFBMEM7UUFGN0MsWUFHQyxrQkFBTSxvQkFBb0IsRUFDekIsb0JBQW9CLEVBQ3BCLG9CQUFvQixDQUFDLFNBQ3RCO1FBTjRCLGtDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7UUFDbkUsK0JBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjs7SUFLeEUsQ0FBQzs7Ozs7SUFFRCw0Q0FBTTs7OztJQUFOLFVBQU8sT0FBNkI7O1lBRTdCLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVzs7WUFFakMsU0FBUyxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBRXBFLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Z0JBbEJELFVBQVU7Ozs7Z0JBTkYsNEJBQTRCO2dCQUM1Qix5QkFBeUI7Z0JBSFQsb0JBQW9COztJQTRCN0Msa0NBQUM7Q0FBQSxBQXBCRCxDQUNpRCxjQUFjLEdBbUI5RDtTQW5CWSwyQkFBMkI7Ozs7OztJQUUzQixtRUFBMkU7Ozs7O0lBQ3BGLGdFQUFxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyLCBFeGVjdXRlUmVzcG9uc2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi9zdHJ1Y3R1cmUuYWdncmVnYXRlLWZhY3RvcnknO1xuaW1wb3J0IHsgSW5pdFN0cnVjdHVyZUNvbW1hbmQgfSBmcm9tICcuL2luaXQtc3RydWN0dXJlLmNvbW1hbmQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5pdGVkRXZlbnQgfSBmcm9tICcuL3N0cnVjdHVyZS1pbml0ZWQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbml0U3RydWN0dXJlQ29tbWFuZEhhbmRsZXIgZXh0ZW5kcyBDb21tYW5kSGFuZGxlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3Rvcnk6IFN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3RvcnksXG5cdFx0XHRcdGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHRcdHN1cGVyKEluaXRTdHJ1Y3R1cmVDb21tYW5kLFxuXHRcdFx0U3RydWN0dXJlSW5pdGVkRXZlbnQsXG5cdFx0XHRkb21haW5FdmVudFB1Ymxpc2hlcik7XG5cdH1cblxuXHRoYW5kbGUoY29tbWFuZDogSW5pdFN0cnVjdHVyZUNvbW1hbmQpOiBFeGVjdXRlUmVzcG9uc2UgfCBPYnNlcnZhYmxlPEV4ZWN1dGVSZXNwb25zZT4ge1xuXG5cdFx0Y29uc3QgYWdncmVnYXRlSWQgPSBjb21tYW5kLnN0cnVjdHVyZUlkO1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlID0gdGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVGYWN0b3J5LmNyZWF0ZShhZ2dyZWdhdGVJZCk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuc2F2ZShzdHJ1Y3R1cmUpO1xuXHR9XG5cbn1cbiJdfQ==