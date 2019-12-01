/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { StructureAggregateFactory } from '../../structure.aggregate-factory';
import { InitFieldsCommand } from './init-fields.command';
import { FieldsInitedEvent } from './fields-inited.event';
export class InitFieldsCommandHandler extends CommandHandler {
    /**
     * @param {?} structureAggregateRepository
     * @param {?} structureAggregateFactory
     * @param {?} domainEventPublisher
     */
    constructor(structureAggregateRepository, structureAggregateFactory, domainEventPublisher) {
        super(InitFieldsCommand);
        this.structureAggregateRepository = structureAggregateRepository;
        this.structureAggregateFactory = structureAggregateFactory;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    handle(command) {
        /** @type {?} */
        const structureId = command.structureId;
        /** @type {?} */
        const compositionId = command.compositionId;
        /** @type {?} */
        const columns = command.columns;
        /** @type {?} */
        const structure = this.structureAggregateRepository.getById(structureId);
        /** @type {?} */
        const fields = structure.createFields(columns);
        this.structureAggregateRepository.save(structure);
        this.domainEventPublisher.publish(new FieldsInitedEvent(structureId, compositionId, columns, fields));
    }
}
InitFieldsCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InitFieldsCommandHandler.ctorParameters = () => [
    { type: StructureAggregateRepository },
    { type: StructureAggregateFactory },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    InitFieldsCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    InitFieldsCommandHandler.prototype.structureAggregateFactory;
    /**
     * @type {?}
     * @private
     */
    InitFieldsCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC1maWVsZHMuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9pbml0L2luaXQtZmllbGRzLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsY0FBYyxFQUFFLG9CQUFvQixFQUFtQixNQUFNLG9CQUFvQixDQUFDO0FBRTNGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSzFELE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxjQUFjOzs7Ozs7SUFFM0QsWUFBNkIsNEJBQTBELEVBQ25FLHlCQUFvRCxFQUM3RCxvQkFBMEM7UUFDcEQsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFIRyxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBQ25FLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDN0QseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUVyRCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxPQUEwQjs7Y0FFMUIsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXOztjQUN0QyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWE7O2NBQ3JDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTzs7Y0FFcEIsU0FBUyxHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDOztjQUVsRSxNQUFNLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUM7UUFFOUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksaUJBQWlCLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN2RyxDQUFDOzs7WUF0QkQsVUFBVTs7OztZQVBGLDRCQUE0QjtZQUM1Qix5QkFBeUI7WUFIVCxvQkFBb0I7Ozs7Ozs7SUFZaEMsZ0VBQTJFOzs7OztJQUNwRiw2REFBcUU7Ozs7O0lBQ3JFLHdEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyLCBFeGVjdXRlUmVzcG9uc2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUuYWdncmVnYXRlLWZhY3RvcnknO1xuaW1wb3J0IHsgSW5pdEZpZWxkc0NvbW1hbmQgfSBmcm9tICcuL2luaXQtZmllbGRzLmNvbW1hbmQnO1xuaW1wb3J0IHsgRmllbGRzSW5pdGVkRXZlbnQgfSBmcm9tICcuL2ZpZWxkcy1pbml0ZWQuZXZlbnQnO1xuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluaXRGaWVsZHNDb21tYW5kSGFuZGxlciBleHRlbmRzIENvbW1hbmRIYW5kbGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQWdncmVnYXRlRmFjdG9yeTogU3RydWN0dXJlQWdncmVnYXRlRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0XHRzdXBlcihJbml0RmllbGRzQ29tbWFuZCk7XG5cdH1cblxuXHRoYW5kbGUoY29tbWFuZDogSW5pdEZpZWxkc0NvbW1hbmQpOiBFeGVjdXRlUmVzcG9uc2UgfCBPYnNlcnZhYmxlPEV4ZWN1dGVSZXNwb25zZT4ge1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlSWQgPSBjb21tYW5kLnN0cnVjdHVyZUlkLFxuXHRcdFx0Y29tcG9zaXRpb25JZCA9IGNvbW1hbmQuY29tcG9zaXRpb25JZCxcblx0XHRcdGNvbHVtbnMgPSBjb21tYW5kLmNvbHVtbnM7XG5cblx0XHRjb25zdCBzdHJ1Y3R1cmUgPSB0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkuZ2V0QnlJZChzdHJ1Y3R1cmVJZCk7XG5cblx0XHRjb25zdCBmaWVsZHMgPSBzdHJ1Y3R1cmUuY3JlYXRlRmllbGRzKGNvbHVtbnMpOyAvLyB0T0RPIGNvbnZlcnQgZG9uJ3QgbGV0IGRhbmRydWZmIGludG8gdGhlIGRvbWFpblxuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LnNhdmUoc3RydWN0dXJlKTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgRmllbGRzSW5pdGVkRXZlbnQoc3RydWN0dXJlSWQsIGNvbXBvc2l0aW9uSWQsIGNvbHVtbnMsIGZpZWxkcykpO1xuXHR9XG5cbn1cbiJdfQ==