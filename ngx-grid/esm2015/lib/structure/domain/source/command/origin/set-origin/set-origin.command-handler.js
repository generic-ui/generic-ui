/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandHandler } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../structure/command/structure-aggregate.repository';
import { StructureSourceDomainEventPublisher } from '../../structure.source.domain-event.publisher';
import { SetOriginCommand } from './set-origin.command';
export class SetOriginCommandHandler extends CommandHandler {
    /**
     * @param {?} structureAggregateRepository
     * @param {?} structureSourceDomainEventPublisher
     */
    constructor(structureAggregateRepository, structureSourceDomainEventPublisher) {
        super(SetOriginCommand);
        this.structureAggregateRepository = structureAggregateRepository;
        this.structureSourceDomainEventPublisher = structureSourceDomainEventPublisher;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    handle(command) {
        /** @type {?} */
        const structureId = command.structureId;
        /** @type {?} */
        const items = (/** @type {?} */ (command.items));
        /** @type {?} */
        const structure = this.structureAggregateRepository.getById(structureId);
        if (!structure) {
            console.error(`There is no aggregate 'Structure' for aggregateId: ${structureId}`);
            return;
        }
        /** @type {?} */
        const aggregateEvents = structure.setOrigin(items);
        this.structureAggregateRepository.save(structure);
        this.structureSourceDomainEventPublisher.publish(aggregateEvents);
    }
}
SetOriginCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetOriginCommandHandler.ctorParameters = () => [
    { type: StructureAggregateRepository },
    { type: StructureSourceDomainEventPublisher }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LW9yaWdpbi5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3NvdXJjZS9jb21tYW5kL29yaWdpbi9zZXQtb3JpZ2luL3NldC1vcmlnaW4uY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxjQUFjLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFFckUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDNUcsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDcEcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFLeEQsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGNBQWtDOzs7OztJQUU5RSxZQUFvQiw0QkFBMEQsRUFDbkUsbUNBQXdFO1FBQ2xGLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRkwsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtRQUNuRSx3Q0FBbUMsR0FBbkMsbUNBQW1DLENBQXFDO0lBRW5GLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE9BQXlCOztjQUV6QixXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVc7O2NBQ3RDLEtBQUssR0FBRyxtQkFBQSxPQUFPLENBQUMsS0FBSyxFQUFjOztjQUU5QixTQUFTLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFFeEUsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsc0RBQXNELFdBQVcsRUFBRSxDQUFDLENBQUM7WUFDbkYsT0FBTztTQUNQOztjQUVLLGVBQWUsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUVsRCxJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7O1lBekJELFVBQVU7Ozs7WUFORiw0QkFBNEI7WUFDNUIsbUNBQW1DOzs7Ozs7O0lBUS9CLCtEQUFrRTs7Ozs7SUFDM0Usc0VBQWdGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgRXhlY3V0ZVJlc3BvbnNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9jb21tYW5kL3N0cnVjdHVyZS1hZ2dyZWdhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS5zb3VyY2UuZG9tYWluLWV2ZW50LnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBTZXRPcmlnaW5Db21tYW5kIH0gZnJvbSAnLi9zZXQtb3JpZ2luLmNvbW1hbmQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2NvbW1hbmQvc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNldE9yaWdpbkNvbW1hbmRIYW5kbGVyIGV4dGVuZHMgQ29tbWFuZEhhbmRsZXI8U3RydWN0dXJlQWdncmVnYXRlPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZVNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyOiBTdHJ1Y3R1cmVTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHRcdHN1cGVyKFNldE9yaWdpbkNvbW1hbmQpO1xuXHR9XG5cblx0aGFuZGxlKGNvbW1hbmQ6IFNldE9yaWdpbkNvbW1hbmQpOiBFeGVjdXRlUmVzcG9uc2UgfCBPYnNlcnZhYmxlPEV4ZWN1dGVSZXNwb25zZT4ge1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlSWQgPSBjb21tYW5kLnN0cnVjdHVyZUlkLFxuXHRcdFx0aXRlbXMgPSBjb21tYW5kLml0ZW1zIGFzIEFycmF5PGFueT47XG5cblx0XHRjb25zdCBzdHJ1Y3R1cmUgPSB0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuZ2V0QnlJZChzdHJ1Y3R1cmVJZCk7XG5cblx0XHRpZiAoIXN0cnVjdHVyZSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcihgVGhlcmUgaXMgbm8gYWdncmVnYXRlICdTdHJ1Y3R1cmUnIGZvciBhZ2dyZWdhdGVJZDogJHtzdHJ1Y3R1cmVJZH1gKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBhZ2dyZWdhdGVFdmVudHMgPSBzdHJ1Y3R1cmUuc2V0T3JpZ2luKGl0ZW1zKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeS5zYXZlKHN0cnVjdHVyZSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2goYWdncmVnYXRlRXZlbnRzKTtcblx0fVxuXG59XG4iXX0=