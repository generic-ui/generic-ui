/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../structure/command/structure-aggregate.repository';
import { StructureSourceDomainEventPublisher } from '../../structure.source.domain-event.publisher';
import { SetOriginCommand } from './set-origin.command';
var SetOriginCommandHandler = /** @class */ (function (_super) {
    tslib_1.__extends(SetOriginCommandHandler, _super);
    function SetOriginCommandHandler(structureAggregateRepository, structureSourceDomainEventPublisher) {
        var _this = _super.call(this, SetOriginCommand) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        _this.structureSourceDomainEventPublisher = structureSourceDomainEventPublisher;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    SetOriginCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var items = (/** @type {?} */ (command.items));
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        if (!structure) {
            console.error("There is no aggregate 'Structure' for aggregateId: " + structureId);
            return;
        }
        /** @type {?} */
        var aggregateEvents = structure.setOrigin(items);
        this.structureAggregateRepository.save(structure);
        this.structureSourceDomainEventPublisher.publish(aggregateEvents);
    };
    SetOriginCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetOriginCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: StructureSourceDomainEventPublisher }
    ]; };
    return SetOriginCommandHandler;
}(CommandHandler));
export { SetOriginCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetOriginCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    SetOriginCommandHandler.prototype.structureSourceDomainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LW9yaWdpbi5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3NvdXJjZS9jb21tYW5kL29yaWdpbi9zZXQtb3JpZ2luL3NldC1vcmlnaW4uY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsY0FBYyxFQUFtQixNQUFNLG9CQUFvQixDQUFDO0FBRXJFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQzVHLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBSXhEO0lBQzZDLG1EQUFrQztJQUU5RSxpQ0FBb0IsNEJBQTBELEVBQ25FLG1DQUF3RTtRQURuRixZQUVDLGtCQUFNLGdCQUFnQixDQUFDLFNBQ3ZCO1FBSG1CLGtDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7UUFDbkUseUNBQW1DLEdBQW5DLG1DQUFtQyxDQUFxQzs7SUFFbkYsQ0FBQzs7Ozs7SUFFRCx3Q0FBTTs7OztJQUFOLFVBQU8sT0FBeUI7O1lBRXpCLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVzs7WUFDdEMsS0FBSyxHQUFHLG1CQUFBLE9BQU8sQ0FBQyxLQUFLLEVBQWM7O1lBRTlCLFNBQVMsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUV4RSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2YsT0FBTyxDQUFDLEtBQUssQ0FBQyx3REFBc0QsV0FBYSxDQUFDLENBQUM7WUFDbkYsT0FBTztTQUNQOztZQUVLLGVBQWUsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUVsRCxJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Z0JBekJELFVBQVU7Ozs7Z0JBTkYsNEJBQTRCO2dCQUM1QixtQ0FBbUM7O0lBZ0M1Qyw4QkFBQztDQUFBLEFBM0JELENBQzZDLGNBQWMsR0EwQjFEO1NBMUJZLHVCQUF1Qjs7Ozs7O0lBRXZCLCtEQUFrRTs7Ozs7SUFDM0Usc0VBQWdGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgRXhlY3V0ZVJlc3BvbnNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9jb21tYW5kL3N0cnVjdHVyZS1hZ2dyZWdhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS5zb3VyY2UuZG9tYWluLWV2ZW50LnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBTZXRPcmlnaW5Db21tYW5kIH0gZnJvbSAnLi9zZXQtb3JpZ2luLmNvbW1hbmQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2NvbW1hbmQvc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNldE9yaWdpbkNvbW1hbmRIYW5kbGVyIGV4dGVuZHMgQ29tbWFuZEhhbmRsZXI8U3RydWN0dXJlQWdncmVnYXRlPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZVNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyOiBTdHJ1Y3R1cmVTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHRcdHN1cGVyKFNldE9yaWdpbkNvbW1hbmQpO1xuXHR9XG5cblx0aGFuZGxlKGNvbW1hbmQ6IFNldE9yaWdpbkNvbW1hbmQpOiBFeGVjdXRlUmVzcG9uc2UgfCBPYnNlcnZhYmxlPEV4ZWN1dGVSZXNwb25zZT4ge1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlSWQgPSBjb21tYW5kLnN0cnVjdHVyZUlkLFxuXHRcdFx0aXRlbXMgPSBjb21tYW5kLml0ZW1zIGFzIEFycmF5PGFueT47XG5cblx0XHRjb25zdCBzdHJ1Y3R1cmUgPSB0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuZ2V0QnlJZChzdHJ1Y3R1cmVJZCk7XG5cblx0XHRpZiAoIXN0cnVjdHVyZSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcihgVGhlcmUgaXMgbm8gYWdncmVnYXRlICdTdHJ1Y3R1cmUnIGZvciBhZ2dyZWdhdGVJZDogJHtzdHJ1Y3R1cmVJZH1gKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBhZ2dyZWdhdGVFdmVudHMgPSBzdHJ1Y3R1cmUuc2V0T3JpZ2luKGl0ZW1zKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeS5zYXZlKHN0cnVjdHVyZSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2goYWdncmVnYXRlRXZlbnRzKTtcblx0fVxuXG59XG4iXX0=