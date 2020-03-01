/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../structure-aggregate.repository';
import { StructureAggregateFactory } from '../structure.aggregate-factory';
import { InitStructureCommand } from './init-structure.command';
import { StructureInitedEvent } from './structure-inited.event';
export class InitStructureCommandHandler extends CommandHandler {
    /**
     * @param {?} structureAggregateRepository
     * @param {?} structureAggregateFactory
     * @param {?} domainEventPublisher
     */
    constructor(structureAggregateRepository, structureAggregateFactory, domainEventPublisher) {
        super(InitStructureCommand, StructureInitedEvent, domainEventPublisher);
        this.structureAggregateRepository = structureAggregateRepository;
        this.structureAggregateFactory = structureAggregateFactory;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    handle(command) {
        /** @type {?} */
        const aggregateId = command.structureId;
        /** @type {?} */
        const structure = this.structureAggregateFactory.create(aggregateId);
        this.structureAggregateRepository.save(structure);
    }
}
InitStructureCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InitStructureCommandHandler.ctorParameters = () => [
    { type: StructureAggregateRepository },
    { type: StructureAggregateFactory },
    { type: DomainEventPublisher }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC1zdHJ1Y3R1cmUuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9pbml0L2luaXQtc3RydWN0dXJlLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsY0FBYyxFQUFFLG9CQUFvQixFQUFtQixNQUFNLG9CQUFvQixDQUFDO0FBRTNGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBS2hFLE1BQU0sT0FBTywyQkFBNEIsU0FBUSxjQUFrQzs7Ozs7O0lBRWxGLFlBQTZCLDRCQUEwRCxFQUNuRSx5QkFBb0QsRUFDckUsb0JBQTBDO1FBQzVDLEtBQUssQ0FBQyxvQkFBb0IsRUFDekIsb0JBQW9CLEVBQ3BCLG9CQUFvQixDQUFDLENBQUM7UUFMSyxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBQ25FLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7SUFLeEUsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBNkI7O2NBRTdCLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVzs7Y0FFakMsU0FBUyxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBRXBFLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7O1lBbEJELFVBQVU7Ozs7WUFQRiw0QkFBNEI7WUFDNUIseUJBQXlCO1lBSFQsb0JBQW9COzs7Ozs7O0lBWWhDLG1FQUEyRTs7Ozs7SUFDcEYsZ0VBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIsIEV4ZWN1dGVSZXNwb25zZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9zdHJ1Y3R1cmUtYWdncmVnYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uL3N0cnVjdHVyZS5hZ2dyZWdhdGUtZmFjdG9yeSc7XG5pbXBvcnQgeyBJbml0U3RydWN0dXJlQ29tbWFuZCB9IGZyb20gJy4vaW5pdC1zdHJ1Y3R1cmUuY29tbWFuZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbml0ZWRFdmVudCB9IGZyb20gJy4vc3RydWN0dXJlLWluaXRlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5pdFN0cnVjdHVyZUNvbW1hbmRIYW5kbGVyIGV4dGVuZHMgQ29tbWFuZEhhbmRsZXI8U3RydWN0dXJlQWdncmVnYXRlPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3Rvcnk6IFN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3RvcnksXG5cdFx0XHRcdGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHRcdHN1cGVyKEluaXRTdHJ1Y3R1cmVDb21tYW5kLFxuXHRcdFx0U3RydWN0dXJlSW5pdGVkRXZlbnQsXG5cdFx0XHRkb21haW5FdmVudFB1Ymxpc2hlcik7XG5cdH1cblxuXHRoYW5kbGUoY29tbWFuZDogSW5pdFN0cnVjdHVyZUNvbW1hbmQpOiBFeGVjdXRlUmVzcG9uc2UgfCBPYnNlcnZhYmxlPEV4ZWN1dGVSZXNwb25zZT4ge1xuXG5cdFx0Y29uc3QgYWdncmVnYXRlSWQgPSBjb21tYW5kLnN0cnVjdHVyZUlkO1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlID0gdGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVGYWN0b3J5LmNyZWF0ZShhZ2dyZWdhdGVJZCk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuc2F2ZShzdHJ1Y3R1cmUpO1xuXHR9XG5cbn1cbiJdfQ==