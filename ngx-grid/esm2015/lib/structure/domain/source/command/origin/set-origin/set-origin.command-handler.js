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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LW9yaWdpbi5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3NvdXJjZS9jb21tYW5kL29yaWdpbi9zZXQtb3JpZ2luL3NldC1vcmlnaW4uY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxjQUFjLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFFckUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDNUcsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDcEcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFJeEQsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGNBQWM7Ozs7O0lBRTFELFlBQW9CLDRCQUEwRCxFQUNuRSxtQ0FBd0U7UUFDbEYsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFGTCxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBQ25FLHdDQUFtQyxHQUFuQyxtQ0FBbUMsQ0FBcUM7SUFFbkYsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBeUI7O2NBRXpCLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVzs7Y0FDdEMsS0FBSyxHQUFHLG1CQUFBLE9BQU8sQ0FBQyxLQUFLLEVBQWM7O2NBRTlCLFNBQVMsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUV4RSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2YsT0FBTyxDQUFDLEtBQUssQ0FBQyxzREFBc0QsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUNuRixPQUFPO1NBQ1A7O2NBRUssZUFBZSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBRWxELElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7WUF6QkQsVUFBVTs7OztZQUxGLDRCQUE0QjtZQUM1QixtQ0FBbUM7Ozs7Ozs7SUFPL0IsK0RBQWtFOzs7OztJQUMzRSxzRUFBZ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBFeGVjdXRlUmVzcG9uc2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2NvbW1hbmQvc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLnNvdXJjZS5kb21haW4tZXZlbnQucHVibGlzaGVyJztcbmltcG9ydCB7IFNldE9yaWdpbkNvbW1hbmQgfSBmcm9tICcuL3NldC1vcmlnaW4uY29tbWFuZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNldE9yaWdpbkNvbW1hbmRIYW5kbGVyIGV4dGVuZHMgQ29tbWFuZEhhbmRsZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeTogU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlcjogU3RydWN0dXJlU291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0XHRzdXBlcihTZXRPcmlnaW5Db21tYW5kKTtcblx0fVxuXG5cdGhhbmRsZShjb21tYW5kOiBTZXRPcmlnaW5Db21tYW5kKTogRXhlY3V0ZVJlc3BvbnNlIHwgT2JzZXJ2YWJsZTxFeGVjdXRlUmVzcG9uc2U+IHtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZUlkID0gY29tbWFuZC5zdHJ1Y3R1cmVJZCxcblx0XHRcdGl0ZW1zID0gY29tbWFuZC5pdGVtcyBhcyBBcnJheTxhbnk+O1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlID0gdGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LmdldEJ5SWQoc3RydWN0dXJlSWQpO1xuXG5cdFx0aWYgKCFzdHJ1Y3R1cmUpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoYFRoZXJlIGlzIG5vIGFnZ3JlZ2F0ZSAnU3RydWN0dXJlJyBmb3IgYWdncmVnYXRlSWQ6ICR7c3RydWN0dXJlSWR9YCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgYWdncmVnYXRlRXZlbnRzID0gc3RydWN0dXJlLnNldE9yaWdpbihpdGVtcyk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuc2F2ZShzdHJ1Y3R1cmUpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKGFnZ3JlZ2F0ZUV2ZW50cyk7XG5cdH1cblxufVxuIl19