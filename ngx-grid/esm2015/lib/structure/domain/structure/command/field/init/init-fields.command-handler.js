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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC1maWVsZHMuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9pbml0L2luaXQtZmllbGRzLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsY0FBYyxFQUFFLG9CQUFvQixFQUFtQixNQUFNLG9CQUFvQixDQUFDO0FBRTNGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSTFELE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxjQUFjOzs7Ozs7SUFFM0QsWUFBNkIsNEJBQTBELEVBQ25FLHlCQUFvRCxFQUM3RCxvQkFBMEM7UUFDcEQsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFIRyxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBQ25FLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDN0QseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUVyRCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxPQUEwQjs7Y0FFMUIsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXOztjQUN0QyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWE7O2NBQ3JDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTzs7Y0FFcEIsU0FBUyxHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDOztjQUVsRSxNQUFNLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUM7UUFFOUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksaUJBQWlCLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN2RyxDQUFDOzs7WUF0QkQsVUFBVTs7OztZQU5GLDRCQUE0QjtZQUM1Qix5QkFBeUI7WUFIVCxvQkFBb0I7Ozs7Ozs7SUFXaEMsZ0VBQTJFOzs7OztJQUNwRiw2REFBcUU7Ozs7O0lBQ3JFLHdEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyLCBFeGVjdXRlUmVzcG9uc2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUuYWdncmVnYXRlLWZhY3RvcnknO1xuaW1wb3J0IHsgSW5pdEZpZWxkc0NvbW1hbmQgfSBmcm9tICcuL2luaXQtZmllbGRzLmNvbW1hbmQnO1xuaW1wb3J0IHsgRmllbGRzSW5pdGVkRXZlbnQgfSBmcm9tICcuL2ZpZWxkcy1pbml0ZWQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbml0RmllbGRzQ29tbWFuZEhhbmRsZXIgZXh0ZW5kcyBDb21tYW5kSGFuZGxlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3Rvcnk6IFN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdFx0c3VwZXIoSW5pdEZpZWxkc0NvbW1hbmQpO1xuXHR9XG5cblx0aGFuZGxlKGNvbW1hbmQ6IEluaXRGaWVsZHNDb21tYW5kKTogRXhlY3V0ZVJlc3BvbnNlIHwgT2JzZXJ2YWJsZTxFeGVjdXRlUmVzcG9uc2U+IHtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZUlkID0gY29tbWFuZC5zdHJ1Y3R1cmVJZCxcblx0XHRcdGNvbXBvc2l0aW9uSWQgPSBjb21tYW5kLmNvbXBvc2l0aW9uSWQsXG5cdFx0XHRjb2x1bW5zID0gY29tbWFuZC5jb2x1bW5zO1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlID0gdGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LmdldEJ5SWQoc3RydWN0dXJlSWQpO1xuXG5cdFx0Y29uc3QgZmllbGRzID0gc3RydWN0dXJlLmNyZWF0ZUZpZWxkcyhjb2x1bW5zKTsgLy8gdE9ETyBjb252ZXJ0IGRvbid0IGxldCBkYW5kcnVmZiBpbnRvIHRoZSBkb21haW5cblxuXHRcdHRoaXMuc3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeS5zYXZlKHN0cnVjdHVyZSk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gobmV3IEZpZWxkc0luaXRlZEV2ZW50KHN0cnVjdHVyZUlkLCBjb21wb3NpdGlvbklkLCBjb2x1bW5zLCBmaWVsZHMpKTtcblx0fVxuXG59XG4iXX0=