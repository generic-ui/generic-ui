/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../structure/command/structure-aggregate.repository';
import { SetSchemaHorizontalGridCommand } from './set-schema-horizontal-grid.command';
import { SchemaHorizontalGridSetEvent } from './schema-horizontal-grid-set.event';
export class SetSchemaHorizontalGridCommandHandler extends CommandHandler {
    /**
     * @param {?} structureAggregateRepository
     * @param {?} domainEventPublisher
     */
    constructor(structureAggregateRepository, domainEventPublisher) {
        super(SetSchemaHorizontalGridCommand, SchemaHorizontalGridSetEvent, domainEventPublisher);
        this.structureAggregateRepository = structureAggregateRepository;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    handle(command) {
        /** @type {?} */
        const enabled = command.enabled;
        /** @type {?} */
        const structureId = command.structureId;
        /** @type {?} */
        const structure = this.structureAggregateRepository.getById(structureId);
        /** @type {?} */
        const schema = structure.getSchema();
        schema.setHorizontalGrid(enabled);
        this.structureAggregateRepository.save(structure);
    }
}
SetSchemaHorizontalGridCommandHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SetSchemaHorizontalGridCommandHandler.ctorParameters = () => [
    { type: StructureAggregateRepository },
    { type: DomainEventPublisher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSchemaHorizontalGridCommandHandler.prototype.structureAggregateRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNjaGVtYS1ob3Jpem9udGFsLWdyaWQuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zY2hlbWEvY29tbWFuZC9ncmlkL2hvcml6b250YWwvc2V0LXNjaGVtYS1ob3Jpem9udGFsLWdyaWQuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsb0JBQW9CLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFFM0YsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFFNUcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHbEYsTUFBTSxPQUFPLHFDQUFzQyxTQUFRLGNBQWM7Ozs7O0lBRXhFLFlBQW9CLDRCQUEwRCxFQUMzRSxvQkFBMEM7UUFDNUMsS0FBSyxDQUFDLDhCQUE4QixFQUNuQyw0QkFBNEIsRUFDNUIsb0JBQW9CLENBQUMsQ0FBQztRQUpKLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7SUFLOUUsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBdUM7O2NBRXZDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTzs7Y0FDOUIsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXOztjQUU1QixTQUFTLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7O2NBQ3ZFLE1BQU0sR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFO1FBRS9CLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7OztZQXJCRCxVQUFVOzs7O1lBTEYsNEJBQTRCO1lBRlosb0JBQW9COzs7Ozs7O0lBVWhDLDZFQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyLCBFeGVjdXRlUmVzcG9uc2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2NvbW1hbmQvc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5JztcblxuaW1wb3J0IHsgU2V0U2NoZW1hSG9yaXpvbnRhbEdyaWRDb21tYW5kIH0gZnJvbSAnLi9zZXQtc2NoZW1hLWhvcml6b250YWwtZ3JpZC5jb21tYW5kJztcbmltcG9ydCB7IFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQgfSBmcm9tICcuL3NjaGVtYS1ob3Jpem9udGFsLWdyaWQtc2V0LmV2ZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNldFNjaGVtYUhvcml6b250YWxHcmlkQ29tbWFuZEhhbmRsZXIgZXh0ZW5kcyBDb21tYW5kSGFuZGxlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0XHRzdXBlcihTZXRTY2hlbWFIb3Jpem9udGFsR3JpZENvbW1hbmQsXG5cdFx0XHRTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50LFxuXHRcdFx0ZG9tYWluRXZlbnRQdWJsaXNoZXIpO1xuXHR9XG5cblx0aGFuZGxlKGNvbW1hbmQ6IFNldFNjaGVtYUhvcml6b250YWxHcmlkQ29tbWFuZCk6IEV4ZWN1dGVSZXNwb25zZSB8IE9ic2VydmFibGU8RXhlY3V0ZVJlc3BvbnNlPiB7XG5cblx0XHRjb25zdCBlbmFibGVkID0gY29tbWFuZC5lbmFibGVkLFxuXHRcdFx0c3RydWN0dXJlSWQgPSBjb21tYW5kLnN0cnVjdHVyZUlkO1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlID0gdGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LmdldEJ5SWQoc3RydWN0dXJlSWQpLFxuXHRcdFx0c2NoZW1hID0gc3RydWN0dXJlLmdldFNjaGVtYSgpO1xuXG5cdFx0c2NoZW1hLnNldEhvcml6b250YWxHcmlkKGVuYWJsZWQpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LnNhdmUoc3RydWN0dXJlKTtcblx0fVxuXG59XG4iXX0=